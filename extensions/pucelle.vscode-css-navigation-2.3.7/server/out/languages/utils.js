"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupBy = groupBy;
exports.quickBinaryFindIndex = quickBinaryFindIndex;
exports.quickBinaryFind = quickBinaryFind;
/**
 * Create a group map in `K => V[]` format, just like SQL `group by` statement.
 * @param pairFn get key and value pair by it.
 */
function groupBy(list, pairFn) {
    let map = new Map();
    for (let item of list) {
        let [key, value] = pairFn(item);
        let group = map.get(key);
        if (!group) {
            group = [];
            map.set(key, group);
        }
        group.push(value);
    }
    return map;
}
/**
 * Binary find index of an item from a list, which has been sorted.
 * Returns the found item index, or `-1` if nothing found.
 *
 * @param fn used to know whether a value is larger or smaller,
 *   it returns negative value to move cursor right, and positive value to move cursor left.
 */
function quickBinaryFindIndex(sortedList, fn) {
    if (sortedList.length === 0) {
        return -1;
    }
    let firstResult = fn(sortedList[0]);
    if (firstResult === 0) {
        return 0;
    }
    if (firstResult > 0) {
        return -1;
    }
    let lastResult = fn(sortedList[sortedList.length - 1]);
    if (lastResult === 0) {
        return sortedList.length - 1;
    }
    if (lastResult < 0) {
        return -1;
    }
    let start = 0;
    let end = sortedList.length - 1;
    while (start + 1 < end) {
        let center = Math.floor((end + start) / 2);
        let result = fn(sortedList[center]);
        if (result === 0) {
            return center;
        }
        else if (result < 0) {
            start = center;
        }
        else {
            end = center;
        }
    }
    return -1;
}
/**
 * Binary find an item from a list, which has been sorted.
 * Returns the found item, or `undefined` if nothing found.
 *
 * @param fn used to know whether a value is larger or smaller,
 *   it returns negative value to move cursor right, and positive value to move cursor left.
 */
function quickBinaryFind(sortedList, fn) {
    let index = quickBinaryFindIndex(sortedList, fn);
    if (index === -1) {
        return undefined;
    }
    return sortedList[index];
}
//# sourceMappingURL=utils.js.map