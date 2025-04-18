"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrackingMap = exports.TrackingReasonMask = void 0;
const utils_1 = require("../../utils");
var TrackingReasonMask;
(function (TrackingReasonMask) {
    /** Included in workspace and not been ignored. */
    TrackingReasonMask[TrackingReasonMask["Included"] = 1] = "Included";
    /** As opened document. */
    TrackingReasonMask[TrackingReasonMask["Opened"] = 2] = "Opened";
    /** As imported document. */
    TrackingReasonMask[TrackingReasonMask["Imported"] = 4] = "Imported";
    /** Any uri imported it get included. */
    TrackingReasonMask[TrackingReasonMask["AncestralIncluded"] = 8] = "AncestralIncluded";
})(TrackingReasonMask || (exports.TrackingReasonMask = TrackingReasonMask = {}));
class TrackingMap {
    trackingMap = new Map();
    /** URI <-> Imported URI. */
    importMap = new utils_1.TwoWayListMap();
    /** Whether all be fresh. */
    allFresh = false;
    size() {
        return this.trackingMap.size;
    }
    getURIs() {
        return [...this.trackingMap.keys()];
    }
    /** Get imported only, or has no reason uris, which are also expired. */
    getExpiredURIs(beforeTimestamp) {
        let uris = [];
        for (let [uri, item] of this.trackingMap) {
            if (item.reason === TrackingReasonMask.Imported || item.reason === 0) {
                if (item.latestUseTime < beforeTimestamp) {
                    uris.push(uri);
                }
            }
        }
        return uris;
    }
    /** Get resolved import uris, and all their imported recursively. */
    resolveChainedImportedURIs(uris) {
        let set = new Set();
        this.resolveChainedImportedCSSPathsBySet(uris, set);
        return set;
    }
    resolveChainedImportedCSSPathsBySet(uris, set) {
        for (let uri of uris) {
            if (set.has(uri)) {
                continue;
            }
            set.add(uri);
            let imported = this.importMap.getByLeft(uri);
            if (imported) {
                this.resolveChainedImportedCSSPathsBySet(imported, set);
            }
        }
    }
    has(uri) {
        return this.trackingMap.has(uri);
    }
    isFresh(uri) {
        let item = this.trackingMap.get(uri);
        if (!item) {
            return false;
        }
        return item.fresh;
    }
    /** Must ensure uri existing. */
    setFresh(uri, fresh) {
        this.trackingMap.get(uri).fresh = fresh;
    }
    /** Must ensure uri existing. */
    getDocument(uri) {
        return this.trackingMap.get(uri).document;
    }
    /**
     * Must ensure uri existing.
     * Only opened document get cached.
     */
    setDocument(uri, document) {
        let item = this.trackingMap.get(uri);
        if (item.reason & TrackingReasonMask.Opened) {
            item.document = document;
        }
        if (document) {
            item.version = document.version;
        }
    }
    /** Must ensure uri existing. */
    setUseTime(uri, time) {
        this.trackingMap.get(uri).latestUseTime = time;
    }
    setAllFresh(fresh) {
        this.allFresh = fresh;
    }
    getReason(uri) {
        return this.trackingMap.get(uri)?.reason;
    }
    /** Suggest to track both, then add import relationship. */
    addImported(imported, from) {
        let changed = new Set(this.importMap.getByLeft(from));
        for (let uri of imported) {
            changed.add(uri);
        }
        this.importMap.replaceLeft(from, imported);
        this.updateImportedReasonOfURIs(changed);
    }
    /** Update a group of import uris. */
    updateImportedReasonOfURIs(importedURIs) {
        for (let importedURI of importedURIs) {
            this.updateImportedReason(importedURI);
        }
    }
    /** `uri` must be an import uri. */
    updateImportedReason(imported, depth = 5) {
        let item = this.trackingMap.get(imported);
        if (!item) {
            return;
        }
        let reason = item.reason;
        let changed = false;
        if (reason & TrackingReasonMask.Imported
            && (reason & TrackingReasonMask.Included) === 0) {
            if ((reason & TrackingReasonMask.AncestralIncluded) === 0) {
                if (this.isURIIncluded(imported)) {
                    item.reason |= TrackingReasonMask.AncestralIncluded;
                    changed = true;
                }
            }
            else {
                if (!this.isURIIncluded(imported)) {
                    item.reason &= ~TrackingReasonMask.AncestralIncluded;
                    changed = true;
                }
            }
        }
        // Update all imported reason.
        if (changed && depth > 0) {
            let importedURIs = this.importMap.getByLeft(imported);
            if (importedURIs) {
                for (let imported of importedURIs) {
                    this.updateImportedReason(imported, depth - 1);
                }
            }
        }
    }
    /** URI be included, or any uri imported it be included. */
    isURIIncluded(uri, depth = 5) {
        let item = this.trackingMap.get(uri);
        if (!item) {
            return false;
        }
        if (item.reason & TrackingReasonMask.Included) {
            return true;
        }
        let importFromURIs = this.importMap.getByRight(uri);
        if (!importFromURIs) {
            return false;
        }
        if (depth === 0) {
            return false;
        }
        for (let importFrom of importFromURIs) {
            if (this.isURIIncluded(importFrom, depth - 1)) {
                return true;
            }
        }
        return false;
    }
    delete(uri) {
        this.trackingMap.delete(uri);
        let importedURIs = this.importMap.getByLeft(uri);
        this.importMap.deleteLeft(uri);
        this.importMap.deleteRight(uri);
        if (importedURIs) {
            this.updateImportedReasonOfURIs(importedURIs);
        }
    }
    clear() {
        this.trackingMap.clear();
        this.importMap.clear();
        this.allFresh = false;
    }
    /** Walk all included and opened uris. */
    *walkIncludedOrOpenedURIs() {
        let includedOrOpened = TrackingReasonMask.Included | TrackingReasonMask.AncestralIncluded | TrackingReasonMask.Opened;
        for (let [uri, item] of this.trackingMap) {
            if (item.reason & includedOrOpened) {
                yield uri;
            }
        }
    }
    /**
     * Track or re-track by reason.
     * Can call it after file content changed.
     */
    trackByReason(uri, reason) {
        let item = this.trackingMap.get(uri);
        if (item) {
            item.reason |= reason;
            // Validate opened document version.
            if (item.opened && item.document) {
                if (item.version !== item.document.version) {
                    this.makeExpire(uri);
                }
            }
            // Can't compare document, always become expire.
            else {
                this.makeExpire(uri);
            }
        }
        else {
            item = {
                document: null,
                version: 0,
                reason,
                latestUseTime: 0,
                opened: false,
                fresh: false,
            };
            this.trackingMap.set(uri, item);
            this.allFresh = false;
        }
        this.updateImportedReason(uri);
    }
    /** Track opened document. */
    trackByDocument(document) {
        let uri = document.uri;
        let item = this.trackingMap.get(uri);
        if (item) {
            let fileChanged = document.version !== item.version;
            item.document = document;
            item.version = document.version;
            item.reason |= TrackingReasonMask.Opened;
            item.opened = true;
            if (fileChanged) {
                this.makeExpire(uri);
            }
        }
        else {
            item = {
                document,
                version: document.version,
                reason: TrackingReasonMask.Opened,
                latestUseTime: 0,
                opened: true,
                fresh: false,
            };
            this.trackingMap.set(uri, item);
            this.allFresh = false;
        }
    }
    /** Remove reason, if file has no reason, delete it. */
    removeReason(uri, reason) {
        let item = this.trackingMap.get(uri);
        if (!item) {
            return;
        }
        item.reason &= ~reason;
        if (reason & TrackingReasonMask.Opened && item.document) {
            item.document = null;
        }
        // Not remove it immediately, wait to be recycled.
    }
    /** After knows that file get expired. */
    makeExpire(uri) {
        let item = this.trackingMap.get(uri);
        if (!item) {
            return;
        }
        let fresh = item.fresh;
        if (!fresh) {
            return;
        }
        item.fresh = false;
        item.version = 0;
        this.allFresh = false;
        // Will replace import mapping after reload, here no need to clear import mapping.
        this.importMap.deleteLeft(uri);
    }
}
exports.TrackingMap = TrackingMap;
//# sourceMappingURL=tracking-map.js.map