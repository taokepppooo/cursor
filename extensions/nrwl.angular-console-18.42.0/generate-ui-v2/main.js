var ol=Object.defineProperty;var il=Object.getOwnPropertyDescriptor;var f=(r,e,t,o)=>{for(var i=o>1?void 0:o?il(e,t):e,s=r.length-1,n;s>=0;s--)(n=r[s])&&(i=(o?n(e,t,i):n(i))||i);return o&&i&&ol(e,t,i),i};var Is=class{get shadowRoot(){return this.__host.__shadowRoot}constructor(e){this.ariaAtomic="",this.ariaAutoComplete="",this.ariaBrailleLabel="",this.ariaBrailleRoleDescription="",this.ariaBusy="",this.ariaChecked="",this.ariaColCount="",this.ariaColIndex="",this.ariaColSpan="",this.ariaCurrent="",this.ariaDescription="",this.ariaDisabled="",this.ariaExpanded="",this.ariaHasPopup="",this.ariaHidden="",this.ariaInvalid="",this.ariaKeyShortcuts="",this.ariaLabel="",this.ariaLevel="",this.ariaLive="",this.ariaModal="",this.ariaMultiLine="",this.ariaMultiSelectable="",this.ariaOrientation="",this.ariaPlaceholder="",this.ariaPosInSet="",this.ariaPressed="",this.ariaReadOnly="",this.ariaRequired="",this.ariaRoleDescription="",this.ariaRowCount="",this.ariaRowIndex="",this.ariaRowSpan="",this.ariaSelected="",this.ariaSetSize="",this.ariaSort="",this.ariaValueMax="",this.ariaValueMin="",this.ariaValueNow="",this.ariaValueText="",this.role="",this.form=null,this.labels=[],this.states=new Set,this.validationMessage="",this.validity={},this.willValidate=!0,this.__host=e}checkValidity(){return console.warn("`ElementInternals.checkValidity()` was called on the server.This method always returns true."),!0}reportValidity(){return!0}setFormValue(){}setValidity(){}};var _s=new WeakMap,or=r=>{let e=_s.get(r);return e===void 0&&_s.set(r,e=new Map),e},sl=class{constructor(){this.__shadowRootMode=null,this.__shadowRoot=null,this.__internals=null}get attributes(){return Array.from(or(this)).map(([e,t])=>({name:e,value:t}))}get shadowRoot(){return this.__shadowRootMode==="closed"?null:this.__shadowRoot}get localName(){return this.constructor.__localName}get tagName(){return this.localName?.toUpperCase()}setAttribute(e,t){or(this).set(e,String(t))}removeAttribute(e){or(this).delete(e)}toggleAttribute(e,t){if(this.hasAttribute(e)){if(t===void 0||!t)return this.removeAttribute(e),!1}else return t===void 0||t?(this.setAttribute(e,""),!0):!1;return!0}hasAttribute(e){return or(this).has(e)}attachShadow(e){let t={host:this};return this.__shadowRootMode=e.mode,e&&e.mode==="open"&&(this.__shadowRoot=t),t}attachInternals(){if(this.__internals!==null)throw new Error("Failed to execute 'attachInternals' on 'HTMLElement': ElementInternals for the specified element was already attached.");let e=new Is(this);return this.__internals=e,e}getAttribute(e){return or(this).get(e)??null}};var nl=class extends sl{},Ls=nl;var al=class{constructor(){this.__definitions=new Map}define(e,t){if(this.__definitions.has(e))if(process.env.NODE_ENV==="development")console.warn(`'CustomElementRegistry' already has "${e}" defined. This may have been caused by live reload or hot module replacement in which case it can be safely ignored.
Make sure to test your application with a production build as repeat registrations will throw in production.`);else throw new Error(`Failed to execute 'define' on 'CustomElementRegistry': the name "${e}" has already been used with this registry`);t.__localName=e,this.__definitions.set(e,{ctor:t,observedAttributes:t.observedAttributes??[]})}get(e){return this.__definitions.get(e)?.ctor}},ll=al;var Ps=new ll;var ir=globalThis,Br=ir.ShadowRoot&&(ir.ShadyCSS===void 0||ir.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ui=Symbol(),Ds=new WeakMap,sr=class{constructor(e,t,o){if(this._$cssResult$=!0,o!==ui)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(Br&&e===void 0){let o=t!==void 0&&t.length===1;o&&(e=Ds.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),o&&Ds.set(t,e))}return e}toString(){return this.cssText}},Ms=r=>new sr(typeof r=="string"?r:r+"",void 0,ui),hi=(r,...e)=>{let t=r.length===1?r[0]:e.reduce((o,i,s)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+r[s+1],r[0]);return new sr(t,r,ui)},di=(r,e)=>{Br?r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{let o=document.createElement("style"),i=ir.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=t.cssText,r.appendChild(o)})},jr=Br||ir.CSSStyleSheet===void 0?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(let o of e.cssRules)t+=o.cssText;return Ms(t)})(r):r;var Ns,pi,xt=globalThis;(Ns=xt.customElements)!==null&&Ns!==void 0||(xt.customElements=Ps);var Hs=xt.trustedTypes,cl=Hs?Hs.emptyScript:"",Bs=xt.reactiveElementPolyfillSupport,mi={toAttribute(r,e){switch(e){case Boolean:r=r?cl:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},js=(r,e)=>e!==r&&(e==e||r==r),fi={attribute:!0,type:String,converter:mi,reflect:!1,hasChanged:js},gi="finalized",$e=class extends(globalThis.HTMLElement??Ls){constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach((t,o)=>{let i=this._$Ep(o,t);i!==void 0&&(this._$Ev.set(i,o),e.push(i))}),e}static createProperty(e,t=fi){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let o=typeof e=="symbol"?Symbol():"__"+e,i=this.getPropertyDescriptor(e,o,t);i!==void 0&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,o){return{get(){return this[t]},set(i){let s=this[e];this[t]=i,this.requestUpdate(e,s,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||fi}static finalize(){if(this.hasOwnProperty(gi))return!1;this[gi]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,o=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let i of o)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let o=new Set(e.flat(1/0).reverse());for(let i of o)t.unshift(jr(i))}else e!==void 0&&t.push(jr(e));return t}static _$Ep(e,t){let o=t.attribute;return o===!1?void 0:typeof o=="string"?o:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,o;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((o=e.hostConnected)===null||o===void 0||o.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return di(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostConnected)===null||o===void 0?void 0:o.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var o;return(o=t.hostDisconnected)===null||o===void 0?void 0:o.call(t)})}attributeChangedCallback(e,t,o){this._$AK(e,o)}_$EO(e,t,o=fi){var i;let s=this.constructor._$Ep(e,o);if(s!==void 0&&o.reflect===!0){let n=(((i=o.converter)===null||i===void 0?void 0:i.toAttribute)!==void 0?o.converter:mi).toAttribute(t,o.type);this._$El=e,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$El=null}}_$AK(e,t){var o;let i=this.constructor,s=i._$Ev.get(e);if(s!==void 0&&this._$El!==s){let n=i.getPropertyOptions(s),a=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?n.converter:mi;this._$El=s,this[s]=a.fromAttribute(t,n.type),this._$El=null}}requestUpdate(e,t,o){let i=!0;e!==void 0&&(((o=o||this.constructor.getPropertyOptions(e)).hasChanged||js)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),o.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,o))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((i,s)=>this[s]=i),this._$Ei=void 0);let t=!1,o=this._$AL;try{t=this.shouldUpdate(o),t?(this.willUpdate(o),(e=this._$ES)===null||e===void 0||e.forEach(i=>{var s;return(s=i.hostUpdate)===null||s===void 0?void 0:s.call(i)}),this.update(o)):this._$Ek()}catch(i){throw t=!1,this._$Ek(),i}t&&this._$AE(o)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(o=>{var i;return(i=o.hostUpdated)===null||i===void 0?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,o)=>this._$EO(o,this[o],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};$e[gi]=!0,$e.elementProperties=new Map,$e.elementStyles=[],$e.shadowRootOptions={mode:"open"},Bs?.({ReactiveElement:$e}),((pi=xt.reactiveElementVersions)!==null&&pi!==void 0?pi:xt.reactiveElementVersions=[]).push("1.6.3");var vi,ar=globalThis,yt=ar.trustedTypes,zs=yt?yt.createPolicy("lit-html",{createHTML:r=>r}):void 0,zr="$lit$",ke=`lit$${(Math.random()+"").slice(9)}$`,xi="?"+ke,ul=`<${xi}>`,tt=ar.document===void 0?{createTreeWalker:()=>({})}:document,lr=()=>tt.createComment(""),cr=r=>r===null||typeof r!="object"&&typeof r!="function",Qs=Array.isArray,Zs=r=>Qs(r)||typeof r?.[Symbol.iterator]=="function",bi=`[ 	
\f\r]`,nr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Gs=/-->/g,Us=/>/g,Ke=RegExp(`>|${bi}(?:([^\\s"'>=/]+)(${bi}*=${bi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qs=/'/g,Ws=/"/g,Js=/^(?:script|style|textarea|title)$/i,Ks=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),h=Ks(1),Cu=Ks(2),rt=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),Xs=new WeakMap,et=tt.createTreeWalker(tt,129,null,!1);function en(r,e){if(!Array.isArray(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return zs!==void 0?zs.createHTML(e):e}var tn=(r,e)=>{let t=r.length-1,o=[],i,s=e===2?"<svg>":"",n=nr;for(let a=0;a<t;a++){let l=r[a],c,u,p=-1,g=0;for(;g<l.length&&(n.lastIndex=g,u=n.exec(l),u!==null);)g=n.lastIndex,n===nr?u[1]==="!--"?n=Gs:u[1]!==void 0?n=Us:u[2]!==void 0?(Js.test(u[2])&&(i=RegExp("</"+u[2],"g")),n=Ke):u[3]!==void 0&&(n=Ke):n===Ke?u[0]===">"?(n=i??nr,p=-1):u[1]===void 0?p=-2:(p=n.lastIndex-u[2].length,c=u[1],n=u[3]===void 0?Ke:u[3]==='"'?Ws:qs):n===Ws||n===qs?n=Ke:n===Gs||n===Us?n=nr:(n=Ke,i=void 0);let $=n===Ke&&r[a+1].startsWith("/>")?" ":"";s+=n===nr?l+ul:p>=0?(o.push(c),l.slice(0,p)+zr+l.slice(p)+ke+$):l+ke+(p===-2?(o.push(void 0),a):$)}return[en(r,s+(r[t]||"<?>")+(e===2?"</svg>":"")),o]},ur=class r{constructor({strings:e,_$litType$:t},o){let i;this.parts=[];let s=0,n=0,a=e.length-1,l=this.parts,[c,u]=tn(e,t);if(this.el=r.createElement(c,o),et.currentNode=this.el.content,t===2){let p=this.el.content,g=p.firstChild;g.remove(),p.append(...g.childNodes)}for(;(i=et.nextNode())!==null&&l.length<a;){if(i.nodeType===1){if(i.hasAttributes()){let p=[];for(let g of i.getAttributeNames())if(g.endsWith(zr)||g.startsWith(ke)){let $=u[n++];if(p.push(g),$!==void 0){let E=i.getAttribute($.toLowerCase()+zr).split(ke),A=/([.?@])?(.*)/.exec($);l.push({type:1,index:s,name:A[2],strings:E,ctor:A[1]==="."?Ur:A[1]==="?"?qr:A[1]==="@"?Wr:it})}else l.push({type:6,index:s})}for(let g of p)i.removeAttribute(g)}if(Js.test(i.tagName)){let p=i.textContent.split(ke),g=p.length-1;if(g>0){i.textContent=yt?yt.emptyScript:"";for(let $=0;$<g;$++)i.append(p[$],lr()),et.nextNode(),l.push({type:2,index:++s});i.append(p[g],lr())}}}else if(i.nodeType===8)if(i.data===xi)l.push({type:2,index:s});else{let p=-1;for(;(p=i.data.indexOf(ke,p+1))!==-1;)l.push({type:7,index:s}),p+=ke.length-1}s++}}static createElement(e,t){let o=tt.createElement("template");return o.innerHTML=e,o}};function ot(r,e,t=r,o){var i,s,n,a;if(e===rt)return e;let l=o!==void 0?(i=t._$Co)===null||i===void 0?void 0:i[o]:t._$Cl,c=cr(e)?void 0:e._$litDirective$;return l?.constructor!==c&&((s=l?._$AO)===null||s===void 0||s.call(l,!1),c===void 0?l=void 0:(l=new c(r),l._$AT(r,t,o)),o!==void 0?((n=(a=t)._$Co)!==null&&n!==void 0?n:a._$Co=[])[o]=l:t._$Cl=l),l!==void 0&&(e=ot(r,l._$AS(r,e.values),l,o)),e}var Gr=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:o},parts:i}=this._$AD,s=((t=e?.creationScope)!==null&&t!==void 0?t:tt).importNode(o,!0);et.currentNode=s;let n=et.nextNode(),a=0,l=0,c=i[0];for(;c!==void 0;){if(a===c.index){let u;c.type===2?u=new wt(n,n.nextSibling,this,e):c.type===1?u=new c.ctor(n,c.name,c.strings,this,e):c.type===6&&(u=new Xr(n,this,e)),this._$AV.push(u),c=i[++l]}a!==c?.index&&(n=et.nextNode(),a++)}return et.currentNode=tt,s}v(e){let t=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(e,o,t),t+=o.strings.length-2):o._$AI(e[t])),t++}},wt=class r{constructor(e,t,o,i){var s;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=o,this.options=i,this._$Cp=(s=i?.isConnected)===null||s===void 0||s}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ot(this,e,t),cr(e)?e===P||e==null||e===""?(this._$AH!==P&&this._$AR(),this._$AH=P):e!==this._$AH&&e!==rt&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):Zs(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==P&&cr(this._$AH)?this._$AA.nextSibling.data=e:this.$(tt.createTextNode(e)),this._$AH=e}g(e){var t;let{values:o,_$litType$:i}=e,s=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=ur.createElement(en(i.h,i.h[0]),this.options)),i);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===s)this._$AH.v(o);else{let n=new Gr(s,this),a=n.u(this.options);n.v(o),this.$(a),this._$AH=n}}_$AC(e){let t=Xs.get(e.strings);return t===void 0&&Xs.set(e.strings,t=new ur(e)),t}T(e){Qs(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,o,i=0;for(let s of e)i===t.length?t.push(o=new r(this.k(lr()),this.k(lr()),this,this.options)):o=t[i],o._$AI(s),i++;i<t.length&&(this._$AR(o&&o._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,t);e&&e!==this._$AB;){let i=e.nextSibling;e.remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},it=class{constructor(e,t,o,i,s){this.type=1,this._$AH=P,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=s,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,o,i){let s=this.strings,n=!1;if(s===void 0)e=ot(this,e,t,0),n=!cr(e)||e!==this._$AH&&e!==rt,n&&(this._$AH=e);else{let a=e,l,c;for(e=s[0],l=0;l<s.length-1;l++)c=ot(this,a[o+l],t,l),c===rt&&(c=this._$AH[l]),n||(n=!cr(c)||c!==this._$AH[l]),c===P?e=P:e!==P&&(e+=(c??"")+s[l+1]),this._$AH[l]=c}n&&!i&&this.j(e)}j(e){e===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},Ur=class extends it{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===P?void 0:e}},hl=yt?yt.emptyScript:"",qr=class extends it{constructor(){super(...arguments),this.type=4}j(e){e&&e!==P?this.element.setAttribute(this.name,hl):this.element.removeAttribute(this.name)}},Wr=class extends it{constructor(e,t,o,i,s){super(e,t,o,i,s),this.type=5}_$AI(e,t=this){var o;if((e=(o=ot(this,e,t,0))!==null&&o!==void 0?o:P)===rt)return;let i=this._$AH,s=e===P&&i!==P||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,n=e!==P&&(i===P||s);s&&this.element.removeEventListener(this.name,this,i),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,o;typeof this._$AH=="function"?this._$AH.call((o=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&o!==void 0?o:this.element,e):this._$AH.handleEvent(e)}},Xr=class{constructor(e,t,o){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(e){ot(this,e)}},rn={O:zr,P:ke,A:xi,C:1,M:tn,L:Gr,R:Zs,D:ot,I:wt,V:it,H:qr,N:Wr,U:Ur,F:Xr},Ys=ar.litHtmlPolyfillSupport;Ys?.(ur,wt),((vi=ar.litHtmlVersions)!==null&&vi!==void 0?vi:ar.litHtmlVersions=[]).push("2.8.0");var on=(r,e,t)=>{var o,i;let s=(o=t?.renderBefore)!==null&&o!==void 0?o:e,n=s._$litPart$;if(n===void 0){let a=(i=t?.renderBefore)!==null&&i!==void 0?i:null;s._$litPart$=n=new wt(e.insertBefore(lr(),a),a,void 0,t??{})}return n._$AI(r),n};var yi,wi;var w=class extends $e{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let o=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=o.firstChild),o}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=on(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return rt}};w.finalized=!0,w._$litElement$=!0,(yi=globalThis.litElementHydrateSupport)===null||yi===void 0||yi.call(globalThis,{LitElement:w});var sn=globalThis.litElementPolyfillSupport;sn?.({LitElement:w});((wi=globalThis.litElementVersions)!==null&&wi!==void 0?wi:globalThis.litElementVersions=[]).push("3.3.3");var k=r=>e=>typeof e=="function"?((t,o)=>(customElements.define(t,o),o))(r,e):((t,o)=>{let{kind:i,elements:s}=o;return{kind:i,elements:s,finisher(n){customElements.define(t,n)}}})(r,e);var dl=(r,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,r)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,r)}},pl=(r,e,t)=>{e.constructor.createProperty(t,r)};function R(r){return(e,t)=>t!==void 0?pl(r,e,t):dl(r,e)}function F(r){return R({...r,state:!0})}var Ci,Yu=((Ci=globalThis.HTMLSlotElement)===null||Ci===void 0?void 0:Ci.prototype.assignedElements)!=null?(r,e)=>r.assignedElements(e):(r,e)=>r.assignedNodes(e).filter(t=>t.nodeType===Node.ELEMENT_NODE);function G(r,e,t){return r?e():t?.()}var Ct=class extends Event{constructor(e,t,o){super("context-request",{bubbles:!0,composed:!0}),this.context=e,this.callback=t,this.subscribe=o}};var re=class{constructor(e,t,o,i){var s;if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(n,a)=>{this.unsubscribe&&(this.unsubscribe!==a&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=n,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(n,a)),this.unsubscribe=a},this.host=e,t.context!==void 0){let n=t;this.context=n.context,this.callback=n.callback,this.subscribe=(s=n.subscribe)!==null&&s!==void 0&&s}else this.context=t,this.callback=o,this.subscribe=i!=null&&i;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Ct(this.context,this.t,this.subscribe))}};var Yr=class{constructor(e){this.disposers=new Map,this.updateObservers=()=>{for(let[t,o]of this.disposers)t(this.o,o)},e!==void 0&&(this.value=e)}get value(){return this.o}set value(e){this.setValue(e)}setValue(e,t=!1){let o=t||!Object.is(e,this.o);this.o=e,o&&this.updateObservers()}addCallback(e,t){if(t){this.disposers.has(e)||this.disposers.set(e,()=>{this.disposers.delete(e)});let o=this.disposers.get(e);e(this.value,o)}else e(this.value)}clearCallbacks(){this.disposers.clear()}};var Si=class extends Event{constructor(e){super("context-provider",{bubbles:!0,composed:!0}),this.context=e}},fe=class extends Yr{constructor(e,t,o){super(t.context!==void 0?t.initialValue:o),this.onContextRequest=i=>{i.context===this.context&&i.composedPath()[0]!==this.host&&(i.stopPropagation(),this.addCallback(i.callback,i.subscribe))},this.host=e,t.context!==void 0?this.context=t.context:this.context=t,this.attachListeners(),this.host.addController(this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest)}hostConnected(){this.host.dispatchEvent(new Si(this.context))}};function $i(r){return r?`${r.collectionName}:${r.generatorName}`:""}function nn(r){return r?r.generatorName.split("-").map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(" "):""}function Pe(r){if(r&&!(r.default===void 0||r.default===null))return Array.isArray(r.default)?r.default.map(e=>String(e)):r.type==="boolean"?!!r.default:String(r.default)??""}function Zr(r,e){return!r&&!e?!0:Array.isArray(r)&&Array.isArray(e)?r.join(",")===e.join(","):r===e}function an(r,e){let t;return function(...o){clearTimeout(t),t=setTimeout(()=>{r.apply(this,o)},e)}.bind(r)}function De(r){return r.items?Array.isArray(r.items)?r.items:r.items.enum:[]}var Jr=class{constructor(e){this.payload=e;this.payloadType="request-validation"}},Kr=class{constructor(e){this.payload=e;this.payloadType="copy-to-clipboard"}};var eo=Symbol("submitted");var ki=Symbol("form-values"),to=class{constructor(e){this.cwdValue=void 0;this.formValues={};this.validationResults={};this.debouncedRunGenerator=an(e=>this.runGenerator(e),500);this.validationListeners={};this.defaultValueListeners={};this.touchedListeners={};this.formValueListeners=[];this.icc=e.icc,this.submittedContextProvider=new fe(e,{context:eo,initialValue:!1}),new fe(e,{context:ki,initialValue:this}),window.addEventListener("option-changed",t=>{t.detail&&this.handleOptionChange(t.detail)}),window.addEventListener("cwd-changed",async t=>{if(t.detail===void 0)return;let o=this.cwdValue===void 0;this.cwdValue=t.detail,!o&&this.icc.configuration?.enableTaskExecutionDryRunOnChange&&(this.validationResults=await this.validate(this.formValues,this.icc.generatorSchema),Object.keys(this.validationResults).length===0&&this.debouncedRunGenerator(!0))})}getFormValues(){return this.formValues}async handleOptionChange(e){this.formValues={...this.formValues,[e.name]:e.value},this.validationResults=await this.validate(this.formValues,this.icc.generatorSchema),Object.entries(this.validationListeners).forEach(([t,o])=>{o?.forEach(i=>i(this.validationResults[t]))}),e.isDefaultValue||(Object.keys(this.validationResults).length===0&&this.icc.configuration?.enableTaskExecutionDryRunOnChange&&this.debouncedRunGenerator(!0),this.touchedListeners[e.name]?.forEach(t=>t(!0))),this.defaultValueListeners[e.name]&&this.defaultValueListeners[e.name]?.forEach(t=>t(e.isDefaultValue))}async validate(e,t){if(!t)return{};let o=t.options,i={};Object.entries(e).forEach(([n,a])=>{let l=o.find(c=>c.name===n);l&&(l.pattern&&(new RegExp(l.pattern).test(String(a))||(i[n]=`Value should match the pattern '${l.pattern}'`)),l.isRequired&&(!a||Array.isArray(a)&&a.length===0)&&(i[n]="This field is required"))});let s=await this.icc.getValidationResults(e,t);return{...i,...s}}runGenerator(e=!1){let t=this.getSerializedFormValues();t.push("--no-interactive"),e&&t.push("--dry-run"),this.submittedContextProvider.setValue(!0),this.icc.postMessageToIde({payloadType:"run-generator",payload:{positional:$i(this.icc.generatorSchema),flags:t,cwd:this.cwdValue?.toString()}})}copyCommandToClipboard(){let e=this.getSerializedFormValues(),o=`nx g ${$i(this.icc.generatorSchema)} ${e.join(" ")}`;this.icc.editor==="vscode"?navigator.clipboard.writeText(o):this.icc.postMessageToIde(new Kr(o))}getSerializedFormValues(){let e=[],t={...this.formValues,...this.icc.generatorSchema?.context?.fixedFormValues??{}};return Object.entries(t).forEach(([o,i])=>{let s=this.icc.generatorSchema?.options.find(l=>l.name===o),n=Pe(s);if(Zr(i,n))return;let a=i?.toString()??"";a.includes(" ")?a.includes('"')?e.push(`--${o}='${i}'`):e.push(`--${o}="${i}"`):e.push(`--${o}=${i}`)}),e}registerValidationListener(e,t){this.validationListeners[e]||(this.validationListeners[e]=[]),this.validationListeners[e].push(t)}registerDefaultValueListener(e,t){this.defaultValueListeners[e]||(this.defaultValueListeners[e]=[]),this.defaultValueListeners[e].push(t)}registerTouchedListener(e,t){this.touchedListeners[e]||(this.touchedListeners[e]=[]),this.touchedListeners[e].push(t)}registerFormValueListener(e){this.formValueListeners.push(e)}};var Ai=Symbol("editor"),M=r=>{class e extends r{constructor(...i){super();new re(this,{context:Ai,callback:s=>{this.editor=s},subscribe:!0})}}return f([F()],e.prototype,"editor",2),e};var hr=Symbol("generatorContext"),ro=r=>{class e extends r{constructor(...i){super();new re(this,{context:hr,callback:s=>this.generatorContext=s,subscribe:!0})}}return f([F()],e.prototype,"generatorContext",2),e};var oo=class{constructor(e){this.host=e;this.pendingPluginValidationQueue=[];let t;try{t=acquireVsCodeApi()}catch{}this.editor=t?"vscode":"intellij",console.log("initializing ide communication for",this.editor),new fe(e,{context:Ai,initialValue:this.editor}),this.generatorContextContextProvider=new fe(e,{context:hr,initialValue:void 0}),t?this.setupVscodeCommunication(t):this.setupIntellijCommunication(),this.postMessageToIde({payloadType:"output-init"})}hostConnected(){}postMessageToIde(e){e.payloadType!=="request-validation"&&console.log("sending message to ide",e),this.postToIde(e)}async getValidationResults(e,t){let o=new Promise(i=>{this.pendingPluginValidationQueue.push(i)});return this.postMessageToIde(new Jr({formValues:e,schema:t})),await o}setupVscodeCommunication(e){window.addEventListener("message",t=>{let o=t.data;o&&(o.payloadType!=="validation-results"&&console.log("received message from vscode",o),this.handleInputMessage(o))}),this.postToIde=t=>e.postMessage(t)}setupIntellijCommunication(){window.intellijApi?.registerPostToWebviewCallback(e=>{if(e.payloadType==="styles"){this.setIntellijStyles(e.payload);return}this.handleInputMessage(e)}),this.postToIde=e=>{let t=JSON.stringify(e);window.intellijApi?.postToIde(t)}}handleInputMessage(e){switch(e.payloadType){case"generator":{this.generatorSchema=e.payload,this.generatorContextContextProvider.setValue(this.generatorSchema.context),this.host.requestUpdate();break}case"config":{this.configuration=e.payload,this.host.requestUpdate();break}case"banner":{this.banner=e.payload,this.host.requestUpdate();break}case"validation-results":{if(this.pendingPluginValidationQueue.length>0){let t=this.pendingPluginValidationQueue.shift();if(!t)break;t(e.payload)}break}}}setIntellijStyles(e){let t=new CSSStyleSheet;t.replaceSync(`
    :root {
      --foreground-color: ${e.foregroundColor};
      --muted-foreground-color: ${e.mutedForegroundColor};
      --background-color: ${e.backgroundColor};
      --primary-color: ${e.primaryColor};
      --error-color: ${e.errorColor};
      --field-background-color: ${e.fieldBackgroundColor};
      --field-border-color: ${e.fieldBorderColor};
      --select-field-background-color: ${e.selectFieldBackgroundColor};
      --active-selection-background-color: ${e.activeSelectionBackgroundColor};
      --focus-border-color: ${e.focusBorderColor};
      --banner-warning-color: ${e.bannerWarningBackgroundColor};
      --banner-text-color: ${e.bannerTextColor};
      --badge-background-color: ${e.badgeBackgroundColor};
      --separator-color: ${e.separatorColor};
      --field-nav-hover-color: ${e.fieldNavHoverColor};
      --scrollbar-thumb-color: ${e.scrollbarThumbColor};
      font-family: ${e.fontFamily};
      font-size: ${e.fontSize};
    }
    `),document.adoptedStyleSheets=[t]}};var Ae=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();Ae.trustedTypes===void 0&&(Ae.trustedTypes={createPolicy:(r,e)=>e});var ln={configurable:!1,enumerable:!1,writable:!1};Ae.FAST===void 0&&Reflect.defineProperty(Ae,"FAST",Object.assign({value:Object.create(null)},ln));var nt=Ae.FAST;if(nt.getById===void 0){let r=Object.create(null);Reflect.defineProperty(nt,"getById",Object.assign({value(e,t){let o=r[e];return o===void 0&&(o=t?r[e]=t():null),o}},ln))}var Me=Object.freeze([]);function io(){let r=new WeakMap;return function(e){let t=r.get(e);if(t===void 0){let o=Reflect.getPrototypeOf(e);for(;t===void 0&&o!==null;)t=r.get(o),o=Reflect.getPrototypeOf(o);t=t===void 0?[]:t.slice(0),r.set(e,t)}return t}}var Ei=Ae.FAST.getById(1,()=>{let r=[],e=[];function t(){if(e.length)throw e.shift()}function o(n){try{n.call()}catch(a){e.push(a),setTimeout(t,0)}}function i(){let a=0;for(;a<r.length;)if(o(r[a]),a++,a>1024){for(let l=0,c=r.length-a;l<c;l++)r[l]=r[l+a];r.length-=a,a=0}r.length=0}function s(n){r.length<1&&Ae.requestAnimationFrame(i),r.push(n)}return Object.freeze({enqueue:s,process:i})}),cn=Ae.trustedTypes.createPolicy("fast-html",{createHTML:r=>r}),Ri=cn,dr=`fast-${Math.random().toString(36).substring(2,8)}`,Oi=`${dr}{`,so=`}${dr}`,x=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(r){if(Ri!==cn)throw new Error("The HTML policy can only be set once.");Ri=r},createHTML(r){return Ri.createHTML(r)},isMarker(r){return r&&r.nodeType===8&&r.data.startsWith(dr)},extractDirectiveIndexFromMarker(r){return parseInt(r.data.replace(`${dr}:`,""))},createInterpolationPlaceholder(r){return`${Oi}${r}${so}`},createCustomAttributePlaceholder(r,e){return`${r}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(r){return`<!--${dr}:${r}-->`},queueUpdate:Ei.enqueue,processUpdates:Ei.process,nextUpdate(){return new Promise(Ei.enqueue)},setAttribute(r,e,t){t==null?r.removeAttribute(e):r.setAttribute(e,t)},setBooleanAttribute(r,e,t){t?r.setAttribute(e,""):r.removeAttribute(e)},removeChildNodes(r){for(let e=r.firstChild;e!==null;e=r.firstChild)r.removeChild(e)},createTemplateWalker(r){return document.createTreeWalker(r,133,null,!1)}});var St=class{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.spillover===void 0?this.sub1===e||this.sub2===e:this.spillover.indexOf(e)!==-1}subscribe(e){let t=this.spillover;if(t===void 0){if(this.has(e))return;if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.sub1=void 0,this.sub2=void 0}else t.indexOf(e)===-1&&t.push(e)}unsubscribe(e){let t=this.spillover;if(t===void 0)this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0);else{let o=t.indexOf(e);o!==-1&&t.splice(o,1)}}notify(e){let t=this.spillover,o=this.source;if(t===void 0){let i=this.sub1,s=this.sub2;i!==void 0&&i.handleChange(o,e),s!==void 0&&s.handleChange(o,e)}else for(let i=0,s=t.length;i<s;++i)t[i].handleChange(o,e)}},$t=class{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;let o=this.subscribers[e];o!==void 0&&o.notify(e),(t=this.sourceSubscribers)===null||t===void 0||t.notify(e)}subscribe(e,t){var o;if(t){let i=this.subscribers[t];i===void 0&&(this.subscribers[t]=i=new St(this.source)),i.subscribe(e)}else this.sourceSubscribers=(o=this.sourceSubscribers)!==null&&o!==void 0?o:new St(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var o;if(t){let i=this.subscribers[t];i!==void 0&&i.unsubscribe(e)}else(o=this.sourceSubscribers)===null||o===void 0||o.unsubscribe(e)}};var v=nt.getById(2,()=>{let r=/(:|&&|\|\||if)/,e=new WeakMap,t=x.queueUpdate,o,i=c=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function s(c){let u=c.$fastController||e.get(c);return u===void 0&&(Array.isArray(c)?u=i(c):e.set(c,u=new $t(c))),u}let n=io();class a{constructor(u){this.name=u,this.field=`_${u}`,this.callback=`${u}Changed`}getValue(u){return o!==void 0&&o.watch(u,this.name),u[this.field]}setValue(u,p){let g=this.field,$=u[g];if($!==p){u[g]=p;let E=u[this.callback];typeof E=="function"&&E.call(u,$,p),s(u).notify(this.name)}}}class l extends St{constructor(u,p,g=!1){super(u,p),this.binding=u,this.isVolatileBinding=g,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(u,p){this.needsRefresh&&this.last!==null&&this.disconnect();let g=o;o=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;let $=this.binding(u,p);return o=g,$}disconnect(){if(this.last!==null){let u=this.first;for(;u!==void 0;)u.notifier.unsubscribe(this,u.propertyName),u=u.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(u,p){let g=this.last,$=s(u),E=g===null?this.first:{};if(E.propertySource=u,E.propertyName=p,E.notifier=$,$.subscribe(this,p),g!==null){if(!this.needsRefresh){let A;o=void 0,A=g.propertySource[g.propertyName],o=this,u===A&&(this.needsRefresh=!0)}g.next=E}this.last=E}handleChange(){this.needsQueue&&(this.needsQueue=!1,t(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let u=this.first;return{next:()=>{let p=u;return p===void 0?{value:void 0,done:!0}:(u=u.next,{value:p,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(c){i=c},getNotifier:s,track(c,u){o!==void 0&&o.watch(c,u)},trackVolatile(){o!==void 0&&(o.needsRefresh=!0)},notify(c,u){s(c).notify(u)},defineProperty(c,u){typeof u=="string"&&(u=new a(u)),n(c).push(u),Reflect.defineProperty(c,u.name,{enumerable:!0,get:function(){return u.getValue(this)},set:function(p){u.setValue(this,p)}})},getAccessors:n,binding(c,u,p=this.isVolatileBinding(c)){return new l(c,u,p)},isVolatileBinding(c){return r.test(c.toString())}})});function S(r,e){v.defineProperty(r,e)}function hn(r,e,t){return Object.assign({},t,{get:function(){return v.trackVolatile(),t.get.apply(this)}})}var un=nt.getById(3,()=>{let r=null;return{get(){return r},set(e){r=e}}}),Ne=class{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return un.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){un.set(e)}};v.defineProperty(Ne.prototype,"index");v.defineProperty(Ne.prototype,"length");var He=Object.seal(new Ne);var kt=class{constructor(){this.targetIndex=0}},At=class extends kt{constructor(){super(...arguments),this.createPlaceholder=x.createInterpolationPlaceholder}},Et=class extends kt{constructor(e,t,o){super(),this.name=e,this.behavior=t,this.options=o}createPlaceholder(e){return x.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}};function gl(r,e){this.source=r,this.context=e,this.bindingObserver===null&&(this.bindingObserver=v.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(r,e))}function vl(r,e){this.source=r,this.context=e,this.target.addEventListener(this.targetName,this)}function bl(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function xl(){this.bindingObserver.disconnect(),this.source=null,this.context=null;let r=this.target.$fastView;r!==void 0&&r.isComposed&&(r.unbind(),r.needsBindOnly=!0)}function yl(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function wl(r){x.setAttribute(this.target,this.targetName,r)}function Cl(r){x.setBooleanAttribute(this.target,this.targetName,r)}function Sl(r){if(r==null&&(r=""),r.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=r.create():this.target.$fastTemplate!==r&&(e.isComposed&&(e.remove(),e.unbind()),e=r.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=r)}else{let e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=r}}function $l(r){this.target[this.targetName]=r}function kl(r){let e=this.classVersions||Object.create(null),t=this.target,o=this.version||0;if(r!=null&&r.length){let i=r.split(/\s+/);for(let s=0,n=i.length;s<n;++s){let a=i[s];a!==""&&(e[a]=o,t.classList.add(a))}}if(this.classVersions=e,this.version=o+1,o!==0){o-=1;for(let i in e)e[i]===o&&t.classList.remove(i)}}var at=class extends At{constructor(e){super(),this.binding=e,this.bind=gl,this.unbind=bl,this.updateTarget=wl,this.isBindingVolatile=v.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=$l,this.cleanedTargetName==="innerHTML"){let t=this.binding;this.binding=(o,i)=>x.createHTML(t(o,i))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=Cl;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=vl,this.unbind=yl;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=kl);break}}targetAtContent(){this.updateTarget=Sl,this.unbind=xl}createBehavior(e){return new Vi(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}},Vi=class{constructor(e,t,o,i,s,n,a){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=o,this.bind=i,this.unbind=s,this.updateTarget=n,this.targetName=a}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){Ne.setEvent(e);let t=this.binding(this.source,this.context);Ne.setEvent(null),t!==!0&&e.preventDefault()}};var Fi=null,Ti=class r{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Fi=this}static borrow(e){let t=Fi||new r;return t.directives=e,t.reset(),Fi=null,t}};function Al(r){if(r.length===1)return r[0];let e,t=r.length,o=r.map(n=>typeof n=="string"?()=>n:(e=n.targetName||e,n.binding)),i=(n,a)=>{let l="";for(let c=0;c<t;++c)l+=o[c](n,a);return l},s=new at(i);return s.targetName=e,s}var El=so.length;function pn(r,e){let t=e.split(Oi);if(t.length===1)return null;let o=[];for(let i=0,s=t.length;i<s;++i){let n=t[i],a=n.indexOf(so),l;if(a===-1)l=n;else{let c=parseInt(n.substring(0,a));o.push(r.directives[c]),l=n.substring(a+El)}l!==""&&o.push(l)}return o}function dn(r,e,t=!1){let o=e.attributes;for(let i=0,s=o.length;i<s;++i){let n=o[i],a=n.value,l=pn(r,a),c=null;l===null?t&&(c=new at(()=>a),c.targetName=n.name):c=Al(l),c!==null&&(e.removeAttributeNode(n),i--,s--,r.addFactory(c))}}function Rl(r,e,t){let o=pn(r,e.textContent);if(o!==null){let i=e;for(let s=0,n=o.length;s<n;++s){let a=o[s],l=s===0?e:i.parentNode.insertBefore(document.createTextNode(""),i.nextSibling);typeof a=="string"?l.textContent=a:(l.textContent=" ",r.captureContentBinding(a)),i=l,r.targetIndex++,l!==e&&t.nextNode()}r.targetIndex--}}function fn(r,e){let t=r.content;document.adoptNode(t);let o=Ti.borrow(e);dn(o,r,!0);let i=o.behaviorFactories;o.reset();let s=x.createTemplateWalker(t),n;for(;n=s.nextNode();)switch(o.targetIndex++,n.nodeType){case 1:dn(o,n);break;case 3:Rl(o,n,s);break;case 8:x.isMarker(n)&&o.addFactory(e[x.extractDirectiveIndexFromMarker(n)])}let a=0;(x.isMarker(t.firstChild)||t.childNodes.length===1&&e.length)&&(t.insertBefore(document.createComment(""),t.firstChild),a=-1);let l=o.behaviorFactories;return o.release(),{fragment:t,viewBehaviorFactories:l,hostBehaviorFactories:i,targetOffset:a}}var Ii=document.createRange(),no=class{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{let t=this.lastChild;if(e.previousSibling===t)return;let o=e.parentNode,i=this.firstChild,s;for(;i!==t;)s=i.nextSibling,o.insertBefore(i,e),i=s;o.insertBefore(t,e)}}remove(){let e=this.fragment,t=this.lastChild,o=this.firstChild,i;for(;o!==t;)i=o.nextSibling,e.appendChild(o),o=i;e.appendChild(t)}dispose(){let e=this.firstChild.parentNode,t=this.lastChild,o=this.firstChild,i;for(;o!==t;)i=o.nextSibling,e.removeChild(o),o=i;e.removeChild(t);let s=this.behaviors,n=this.source;for(let a=0,l=s.length;a<l;++a)s[a].unbind(n)}bind(e,t){let o=this.behaviors;if(this.source!==e)if(this.source!==null){let i=this.source;this.source=e,this.context=t;for(let s=0,n=o.length;s<n;++s){let a=o[s];a.unbind(i),a.bind(e,t)}}else{this.source=e,this.context=t;for(let i=0,s=o.length;i<s;++i)o[i].bind(e,t)}}unbind(){if(this.source===null)return;let e=this.behaviors,t=this.source;for(let o=0,i=e.length;o<i;++o)e[o].unbind(t);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){Ii.setStartBefore(e[0].firstChild),Ii.setEndAfter(e[e.length-1].lastChild),Ii.deleteContents();for(let t=0,o=e.length;t<o;++t){let i=e[t],s=i.behaviors,n=i.source;for(let a=0,l=s.length;a<l;++a)s[a].unbind(n)}}}};var ao=class{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(this.fragment===null){let c,u=this.html;if(typeof u=="string"){c=document.createElement("template"),c.innerHTML=x.createHTML(u);let g=c.content.firstElementChild;g!==null&&g.tagName==="TEMPLATE"&&(c=g)}else c=u;let p=fn(c,this.directives);this.fragment=p.fragment,this.viewBehaviorFactories=p.viewBehaviorFactories,this.hostBehaviorFactories=p.hostBehaviorFactories,this.targetOffset=p.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}let t=this.fragment.cloneNode(!0),o=this.viewBehaviorFactories,i=new Array(this.behaviorCount),s=x.createTemplateWalker(t),n=0,a=this.targetOffset,l=s.nextNode();for(let c=o.length;n<c;++n){let u=o[n],p=u.targetIndex;for(;l!==null;)if(a===p){i[n]=u.createBehavior(l);break}else l=s.nextNode(),a++}if(this.hasHostBehaviors){let c=this.hostBehaviorFactories;for(let u=0,p=c.length;u<p;++u,++n)i[n]=c[u].createBehavior(e)}return new no(t,i)}render(e,t,o){typeof t=="string"&&(t=document.getElementById(t)),o===void 0&&(o=t);let i=this.create(o);return i.bind(e,He),i.appendTo(t),i}},Ol=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function Ee(r,...e){let t=[],o="";for(let i=0,s=r.length-1;i<s;++i){let n=r[i],a=e[i];if(o+=n,a instanceof ao){let l=a;a=()=>l}if(typeof a=="function"&&(a=new at(a)),a instanceof At){let l=Ol.exec(n);l!==null&&(a.targetName=l[2])}a instanceof kt?(o+=a.createPlaceholder(t.length),t.push(a)):o+=a}return o+=r[r.length-1],new ao(o,t)}var _=class{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}};_.create=(()=>{if(x.supportsAdoptedStyleSheets){let r=new Map;return e=>new _i(e,r)}return r=>new Li(r)})();function Pi(r){return r.map(e=>e instanceof _?Pi(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}function mn(r){return r.map(e=>e instanceof _?e.behaviors:null).reduce((e,t)=>t===null?e:(e===null&&(e=[]),e.concat(t)),null)}var lo=Symbol("prependToAdoptedStyleSheets");function gn(r){let e=[],t=[];return r.forEach(o=>(o[lo]?e:t).push(o)),{prepend:e,append:t}}var vn=(r,e)=>{let{prepend:t,append:o}=gn(e);r.adoptedStyleSheets=[...t,...r.adoptedStyleSheets,...o]},bn=(r,e)=>{r.adoptedStyleSheets=r.adoptedStyleSheets.filter(t=>e.indexOf(t)===-1)};if(x.supportsAdoptedStyleSheets)try{document.adoptedStyleSheets.push(),document.adoptedStyleSheets.splice(),vn=(r,e)=>{let{prepend:t,append:o}=gn(e);r.adoptedStyleSheets.splice(0,0,...t),r.adoptedStyleSheets.push(...o)},bn=(r,e)=>{for(let t of e){let o=r.adoptedStyleSheets.indexOf(t);o!==-1&&r.adoptedStyleSheets.splice(o,1)}}}catch{}var _i=class extends _{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=mn(e)}get styleSheets(){if(this._styleSheets===void 0){let e=this.styles,t=this.styleSheetCache;this._styleSheets=Pi(e).map(o=>{if(o instanceof CSSStyleSheet)return o;let i=t.get(o);return i===void 0&&(i=new CSSStyleSheet,i.replaceSync(o),t.set(o,i)),i})}return this._styleSheets}addStylesTo(e){vn(e,this.styleSheets),super.addStylesTo(e)}removeStylesFrom(e){bn(e,this.styleSheets),super.removeStylesFrom(e)}},Vl=0;function Fl(){return`fast-style-class-${++Vl}`}var Li=class extends _{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=mn(e),this.styleSheets=Pi(e),this.styleClass=Fl()}addStylesTo(e){let t=this.styleSheets,o=this.styleClass;e=this.normalizeTarget(e);for(let i=0;i<t.length;i++){let s=document.createElement("style");s.innerHTML=t[i],s.className=o,e.append(s)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);let t=e.querySelectorAll(`.${this.styleClass}`);for(let o=0,i=t.length;o<i;++o)e.removeChild(t[o]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}};var pr=Object.freeze({locate:io()}),xn={toView(r){return r?"true":"false"},fromView(r){return!(r==null||r==="false"||r===!1||r===0)}},yn={toView(r){if(r==null)return null;let e=r*1;return isNaN(e)?null:e.toString()},fromView(r){if(r==null)return null;let e=r*1;return isNaN(e)?null:e}},co=class r{constructor(e,t,o=t.toLowerCase(),i="reflect",s){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=o,this.mode=i,this.converter=s,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,i==="boolean"&&s===void 0&&(this.converter=xn)}setValue(e,t){let o=e[this.fieldName],i=this.converter;i!==void 0&&(t=i.fromView(t)),o!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](o,t),e.$fastController.notify(this.name))}getValue(e){return v.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){let t=this.mode,o=this.guards;o.has(e)||t==="fromView"||x.queueUpdate(()=>{o.add(e);let i=e[this.fieldName];switch(t){case"reflect":let s=this.converter;x.setAttribute(e,this.attribute,s!==void 0?s.toView(i):i);break;case"boolean":x.setBooleanAttribute(e,this.attribute,i);break}o.delete(e)})}static collect(e,...t){let o=[];t.push(pr.locate(e));for(let i=0,s=t.length;i<s;++i){let n=t[i];if(n!==void 0)for(let a=0,l=n.length;a<l;++a){let c=n[a];typeof c=="string"?o.push(new r(e,c)):o.push(new r(e,c.property,c.attribute,c.mode,c.converter))}}return o}};function y(r,e){let t;function o(i,s){arguments.length>1&&(t.property=s),pr.locate(i.constructor).push(t)}if(arguments.length>1){t={},o(r,e);return}return t=r===void 0?{}:r,o}var wn={mode:"open"},Cn={},Di=nt.getById(4,()=>{let r=new Map;return Object.freeze({register(e){return r.has(e.type)?!1:(r.set(e.type,e),!0)},getByType(e){return r.get(e)}})}),me=class{constructor(e,t=e.definition){typeof t=="string"&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;let o=co.collect(e,t.attributes),i=new Array(o.length),s={},n={};for(let a=0,l=o.length;a<l;++a){let c=o[a];i[a]=c.attribute,s[c.name]=c,n[c.attribute]=c}this.attributes=o,this.observedAttributes=i,this.propertyLookup=s,this.attributeLookup=n,this.shadowOptions=t.shadowOptions===void 0?wn:t.shadowOptions===null?void 0:Object.assign(Object.assign({},wn),t.shadowOptions),this.elementOptions=t.elementOptions===void 0?Cn:Object.assign(Object.assign({},Cn),t.elementOptions),this.styles=t.styles===void 0?void 0:Array.isArray(t.styles)?_.create(t.styles):t.styles instanceof _?t.styles:_.create([t.styles])}get isDefined(){return!!Di.getByType(this.type)}define(e=customElements){let t=this.type;if(Di.register(this)){let o=this.attributes,i=t.prototype;for(let s=0,n=o.length;s<n;++s)v.defineProperty(i,o[s]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}};me.forType=Di.getByType;var Sn=new WeakMap,Tl={bubbles:!0,composed:!0,cancelable:!0};function Mi(r){return r.shadowRoot||Sn.get(r)||null}var uo=class r extends $t{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;let o=t.shadowOptions;if(o!==void 0){let s=e.attachShadow(o);o.mode==="closed"&&Sn.set(e,s)}let i=v.getAccessors(e);if(i.length>0){let s=this.boundObservables=Object.create(null);for(let n=0,a=i.length;n<a;++n){let l=i[n].name,c=e[l];c!==void 0&&(delete e[l],s[l]=c)}}}get isConnected(){return v.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,v.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){let t=Mi(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){let o=e.behaviors;e.addStylesTo(t),o!==null&&this.addBehaviors(o)}}removeStyles(e){let t=Mi(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){let o=e.behaviors;e.removeStylesFrom(t),o!==null&&this.removeBehaviors(o)}}addBehaviors(e){let t=this.behaviors||(this.behaviors=new Map),o=e.length,i=[];for(let s=0;s<o;++s){let n=e[s];t.has(n)?t.set(n,t.get(n)+1):(t.set(n,1),i.push(n))}if(this._isConnected){let s=this.element;for(let n=0;n<i.length;++n)i[n].bind(s,He)}}removeBehaviors(e,t=!1){let o=this.behaviors;if(o===null)return;let i=e.length,s=[];for(let n=0;n<i;++n){let a=e[n];if(o.has(a)){let l=o.get(a)-1;l===0||t?o.delete(a)&&s.push(a):o.set(a,l)}}if(this._isConnected){let n=this.element;for(let a=0;a<s.length;++a)s[a].unbind(n)}}onConnectedCallback(){if(this._isConnected)return;let e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,He);let t=this.behaviors;if(t!==null)for(let[o]of t)o.bind(e,He);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);let e=this.view;e!==null&&e.unbind();let t=this.behaviors;if(t!==null){let o=this.element;for(let[i]of t)i.unbind(o)}}onAttributeChangedCallback(e,t,o){let i=this.definition.attributeLookup[e];i!==void 0&&i.onAttributeChangedCallback(this.element,o)}emit(e,t,o){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},Tl),o))):!1}finishInitialization(){let e=this.element,t=this.boundObservables;if(t!==null){let i=Object.keys(t);for(let s=0,n=i.length;s<n;++s){let a=i[s];e[a]=t[a]}this.boundObservables=null}let o=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():o.template&&(this._template=o.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():o.styles&&(this._styles=o.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){let t=this.element,o=Mi(t)||t;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||x.removeChildNodes(o),e&&(this.view=e.render(t,o,t))}static forCustomElement(e){let t=e.$fastController;if(t!==void 0)return t;let o=me.forType(e.constructor);if(o===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new r(e,o)}};function $n(r){return class extends r{constructor(){super(),uo.forCustomElement(this)}$emit(e,t,o){return this.$fastController.emit(e,t,o)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,o){this.$fastController.onAttributeChangedCallback(e,t,o)}}}var Be=Object.assign($n(HTMLElement),{from(r){return $n(r)},define(r,e){return new me(r,e).define().type}});var je=class{createCSS(){return""}createBehavior(){}};function kn(r,e){let t=[],o="",i=[];for(let s=0,n=r.length-1;s<n;++s){o+=r[s];let a=e[s];if(a instanceof je){let l=a.createBehavior();a=a.createCSS(),l&&i.push(l)}a instanceof _||a instanceof CSSStyleSheet?(o.trim()!==""&&(t.push(o),o=""),t.push(a)):o+=a}return o+=r[r.length-1],o.trim()!==""&&t.push(o),{styles:t,behaviors:i}}function D(r,...e){let{styles:t,behaviors:o}=kn(r,e),i=_.create(t);return o.length&&i.withBehaviors(...o),i}var Ni=class extends je{constructor(e,t){super(),this.behaviors=t,this.css="";let o=e.reduce((i,s)=>(typeof s=="string"?this.css+=s:i.push(s),i),[]);o.length&&(this.styles=_.create(o))}createBehavior(){return this}createCSS(){return this.css}bind(e){this.styles&&e.$fastController.addStyles(this.styles),this.behaviors.length&&e.$fastController.addBehaviors(this.behaviors)}unbind(e){this.styles&&e.$fastController.removeStyles(this.styles),this.behaviors.length&&e.$fastController.removeBehaviors(this.behaviors)}};function Hi(r,...e){let{styles:t,behaviors:o}=kn(r,e);return new Ni(t,o)}var Bi=class{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}};function oe(r){return new Et("fast-ref",Bi,r)}var ho=class{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){let t=this.options.property;this.shouldUpdate=v.getAccessors(e).some(o=>o.name===t),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Me),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}};var ji=class extends ho{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}};function po(r){return typeof r=="string"&&(r={property:r}),new Et("fast-slotted",ji,r)}var ze=class{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}},fo=(r,e)=>Ee`
    <span
        part="end"
        ${oe("endContainer")}
        class=${t=>e.end?"end":void 0}
    >
        <slot name="end" ${oe("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,mo=(r,e)=>Ee`
    <span
        part="start"
        ${oe("startContainer")}
        class="${t=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${oe("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`,Yp=Ee`
    <span part="end" ${oe("endContainer")}>
        <slot
            name="end"
            ${oe("end")}
            @slotchange="${r=>r.handleEndContentChange()}"
        ></slot>
    </span>
`,Qp=Ee`
    <span part="start" ${oe("startContainer")}>
        <slot
            name="start"
            ${oe("start")}
            @slotchange="${r=>r.handleStartContentChange()}"
        ></slot>
    </span>
`;function m(r,e,t,o){var i=arguments.length,s=i<3?e:o===null?o=Object.getOwnPropertyDescriptor(e,t):o,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")s=Reflect.decorate(r,e,t,o);else for(var a=r.length-1;a>=0;a--)(n=r[a])&&(s=(i<3?n(s):i>3?n(e,t,s):n(e,t))||s);return i>3&&s&&Object.defineProperty(e,t,s),s}var zi=new Map;"metadata"in Reflect||(Reflect.metadata=function(r,e){return function(t){Reflect.defineMetadata(r,e,t)}},Reflect.defineMetadata=function(r,e,t){let o=zi.get(t);o===void 0&&zi.set(t,o=new Map),o.set(r,e)},Reflect.getOwnMetadata=function(r,e){let t=zi.get(e);if(t!==void 0)return t.get(r)});var Wi=class{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,Pn(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){let{container:o,key:i}=this;return this.container=this.key=void 0,o.registerResolver(i,new Q(i,e,t))}};function fr(r){let e=r.slice(),t=Object.keys(r),o=t.length,i;for(let s=0;s<o;++s)i=t[s],Dn(i)||(e[i]=r[i]);return e}var Il=Object.freeze({none(r){throw Error(`${r.toString()} not registered, did you forget to add @singleton()?`)},singleton(r){return new Q(r,1,r)},transient(r){return new Q(r,2,r)}}),Gi=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Il.singleton})}),An=new Map;function En(r){return e=>Reflect.getOwnMetadata(r,e)}var Rn=null,O=Object.freeze({createContainer(r){return new mr(null,Object.assign({},Gi.default,r))},findResponsibleContainer(r){let e=r.$$container$$;return e&&e.responsibleForOwnerRequests?e:O.findParentContainer(r)},findParentContainer(r){let e=new CustomEvent(Ln,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return r.dispatchEvent(e),e.detail.container||O.getOrCreateDOMContainer()},getOrCreateDOMContainer(r,e){return r?r.$$container$$||new mr(r,Object.assign({},Gi.default,e,{parentLocator:O.findParentContainer})):Rn||(Rn=new mr(null,Object.assign({},Gi.default,e,{parentLocator:()=>null})))},getDesignParamtypes:En("design:paramtypes"),getAnnotationParamtypes:En("di:paramtypes"),getOrCreateAnnotationParamTypes(r){let e=this.getAnnotationParamtypes(r);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],r),e},getDependencies(r){let e=An.get(r);if(e===void 0){let t=r.inject;if(t===void 0){let o=O.getDesignParamtypes(r),i=O.getAnnotationParamtypes(r);if(o===void 0)if(i===void 0){let s=Object.getPrototypeOf(r);typeof s=="function"&&s!==Function.prototype?e=fr(O.getDependencies(s)):e=[]}else e=fr(i);else if(i===void 0)e=fr(o);else{e=fr(o);let s=i.length,n;for(let c=0;c<s;++c)n=i[c],n!==void 0&&(e[c]=n);let a=Object.keys(i);s=a.length;let l;for(let c=0;c<s;++c)l=a[c],Dn(l)||(e[l]=i[l])}}else e=fr(t);An.set(r,e)}return e},defineProperty(r,e,t,o=!1){let i=`$di_${e}`;Reflect.defineProperty(r,e,{get:function(){let s=this[i];if(s===void 0&&(s=(this instanceof HTMLElement?O.findResponsibleContainer(this):O.getOrCreateDOMContainer()).get(t),this[i]=s,o&&this instanceof Be)){let a=this.$fastController,l=()=>{let u=O.findResponsibleContainer(this).get(t),p=this[i];u!==p&&(this[i]=s,a.notify(e))};a.subscribe({handleChange:l},"isConnected")}return s}})},createInterface(r,e){let t=typeof r=="function"?r:e,o=typeof r=="string"?r:r&&"friendlyName"in r&&r.friendlyName||Tn,i=typeof r=="string"?!1:r&&"respectConnection"in r&&r.respectConnection||!1,s=function(n,a,l){if(n==null||new.target!==void 0)throw new Error(`No registration for interface: '${s.friendlyName}'`);if(a)O.defineProperty(n,a,s,i);else{let c=O.getOrCreateAnnotationParamTypes(n);c[l]=s}};return s.$isInterface=!0,s.friendlyName=o??"(anonymous)",t!=null&&(s.register=function(n,a){return t(new Wi(n,a??s))}),s.toString=function(){return`InterfaceSymbol<${s.friendlyName}>`},s},inject(...r){return function(e,t,o){if(typeof o=="number"){let i=O.getOrCreateAnnotationParamTypes(e),s=r[0];s!==void 0&&(i[o]=s)}else if(t)O.defineProperty(e,t,r[0]);else{let i=o?O.getOrCreateAnnotationParamTypes(o.value):O.getOrCreateAnnotationParamTypes(e),s;for(let n=0;n<r.length;++n)s=r[n],s!==void 0&&(i[n]=s)}}},transient(r){return r.register=function(t){return lt.transient(r,r).register(t)},r.registerInRequestor=!1,r},singleton(r,e=Ll){return r.register=function(o){return lt.singleton(r,r).register(o)},r.registerInRequestor=e.scoped,r}}),_l=O.createInterface("Container");function xo(r){return function(e){let t=function(o,i,s){O.inject(t)(o,i,s)};return t.$isResolver=!0,t.resolve=function(o,i){return r(e,o,i)},t}}var ef=O.inject;var Ll={scoped:!1};function Pl(r){return function(e,t){t=!!t;let o=function(i,s,n){O.inject(o)(i,s,n)};return o.$isResolver=!0,o.resolve=function(i,s){return r(e,i,s,t)},o}}var tf=Pl((r,e,t,o)=>t.getAll(r,o)),rf=xo((r,e,t)=>()=>t.get(r)),of=xo((r,e,t)=>{if(t.has(r,!0))return t.get(r)});function Yi(r,e,t){O.inject(Yi)(r,e,t)}Yi.$isResolver=!0;Yi.resolve=()=>{};var sf=xo((r,e,t)=>{let o=_n(r,e),i=new Q(r,0,o);return t.registerResolver(r,i),o}),nf=xo((r,e,t)=>_n(r,e));function _n(r,e){return e.getFactory(r).construct(e)}var Q=class{constructor(e,t,o){this.key=e,this.strategy=t,this.state=o,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state}case 2:{let o=e.getFactory(this.state);if(o===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return o.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,o,i;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(i=(o=(t=e.getResolver(this.state))===null||t===void 0?void 0:t.getFactory)===null||o===void 0?void 0:o.call(t,e))!==null&&i!==void 0?i:null;default:return null}}};function On(r){return this.get(r)}function Dl(r,e){return e(r)}var Xi=class{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let o;return t===void 0?o=new this.Type(...this.dependencies.map(On,e)):o=new this.Type(...this.dependencies.map(On,e),...t),this.transformers==null?o:this.transformers.reduce(Dl,o)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}},Ml={$isResolver:!0,resolve(r,e){return e}};function bo(r){return typeof r.register=="function"}function Nl(r){return bo(r)&&typeof r.registerInRequestor=="boolean"}function Vn(r){return Nl(r)&&r.registerInRequestor}function Hl(r){return r.prototype!==void 0}var Bl=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Ln="__DI_LOCATE_PARENT__",Ui=new Map,mr=class r{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(_l,Ml),e instanceof Node&&e.addEventListener(Ln,o=>{o.composedPath()[0]!==this.owner&&(o.detail.container=this,o.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let t,o,i,s,n,a=this.context;for(let l=0,c=e.length;l<c;++l)if(t=e[l],!!In(t))if(bo(t))t.register(this,a);else if(Hl(t))lt.singleton(t,t).register(this);else for(o=Object.keys(t),s=0,n=o.length;s<n;++s)i=t[o[s]],In(i)&&(bo(i)?i.register(this,a):this.register(i));return--this.registerDepth,this}registerResolver(e,t){go(e);let o=this.resolvers,i=o.get(e);return i==null?o.set(e,t):i instanceof Q&&i.strategy===4?i.state.push(t):o.set(e,new Q(e,4,[i,t])),t}registerTransformer(e,t){let o=this.getResolver(e);if(o==null)return!1;if(o.getFactory){let i=o.getFactory(this);return i==null?!1:(i.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(go(e),e.resolve!==void 0)return e;let o=this,i;for(;o!=null;)if(i=o.resolvers.get(e),i==null){if(o.parent==null){let s=Vn(e)?this:o;return t?this.jitRegister(e,s):null}o=o.parent}else return i;return null}has(e,t=!1){return this.resolvers.has(e)?!0:t&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if(go(e),e.$isResolver)return e.resolve(this,this);let t=this,o;for(;t!=null;)if(o=t.resolvers.get(e),o==null){if(t.parent==null){let i=Vn(e)?this:t;return o=this.jitRegister(e,i),o.resolve(t,this)}t=t.parent}else return o.resolve(t,this);throw new Error(`Unable to resolve key: ${String(e)}`)}getAll(e,t=!1){go(e);let o=this,i=o,s;if(t){let n=Me;for(;i!=null;)s=i.resolvers.get(e),s!=null&&(n=n.concat(Fn(s,i,o))),i=i.parent;return n}else for(;i!=null;)if(s=i.resolvers.get(e),s==null){if(i=i.parent,i==null)return Me}else return Fn(s,i,o);return Me}getFactory(e){let t=Ui.get(e);if(t===void 0){if(jl(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);Ui.set(e,t=new Xi(e,O.getDependencies(e)))}return t}registerFactory(e,t){Ui.set(e,t)}createChild(e){return new r(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(Bl.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(bo(e)){let o=e.register(t);if(!(o instanceof Object)||o.resolve==null){let i=t.resolvers.get(e);if(i!=null)return i;throw new Error("A valid resolver was not returned from the static register method")}return o}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{let o=this.config.defaultResolver(e,t);return t.resolvers.set(e,o),o}}}},qi=new WeakMap;function Pn(r){return function(e,t,o){if(qi.has(o))return qi.get(o);let i=r(e,t,o);return qi.set(o,i),i}}var lt=Object.freeze({instance(r,e){return new Q(r,0,e)},singleton(r,e){return new Q(r,1,e)},transient(r,e){return new Q(r,2,e)},callback(r,e){return new Q(r,3,e)},cachedCallback(r,e){return new Q(r,3,Pn(e))},aliasTo(r,e){return new Q(e,5,r)}});function go(r){if(r==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Fn(r,e,t){if(r instanceof Q&&r.strategy===4){let o=r.state,i=o.length,s=new Array(i);for(;i--;)s[i]=o[i].resolve(e,t);return s}return[r.resolve(e,t)]}var Tn="(anonymous)";function In(r){return typeof r=="object"&&r!==null||typeof r=="function"}var jl=function(){let r=new WeakMap,e=!1,t="",o=0;return function(i){return e=r.get(i),e===void 0&&(t=i.toString(),o=t.length,e=o>=29&&o<=100&&t.charCodeAt(o-1)===125&&t.charCodeAt(o-2)<=32&&t.charCodeAt(o-3)===93&&t.charCodeAt(o-4)===101&&t.charCodeAt(o-5)===100&&t.charCodeAt(o-6)===111&&t.charCodeAt(o-7)===99&&t.charCodeAt(o-8)===32&&t.charCodeAt(o-9)===101&&t.charCodeAt(o-10)===118&&t.charCodeAt(o-11)===105&&t.charCodeAt(o-12)===116&&t.charCodeAt(o-13)===97&&t.charCodeAt(o-14)===110&&t.charCodeAt(o-15)===88,r.set(i,e)),e}}(),vo={};function Dn(r){switch(typeof r){case"number":return r>=0&&(r|0)===r;case"string":{let e=vo[r];if(e!==void 0)return e;let t=r.length;if(t===0)return vo[r]=!1;let o=0;for(let i=0;i<t;++i)if(o=r.charCodeAt(i),i===0&&o===48&&t>1||o<48||o>57)return vo[r]=!1;return vo[r]=!0}default:return!1}}function Mn(r){return`${r.toLowerCase()}:presentation`}var yo=new Map,Co=Object.freeze({define(r,e,t){let o=Mn(r);yo.get(o)===void 0?yo.set(o,e):yo.set(o,!1),t.register(lt.instance(o,e))},forTag(r,e){let t=Mn(r),o=yo.get(t);return o===!1?O.findResponsibleContainer(e).get(t):o||null}}),wo=class{constructor(e,t){this.template=e||null,this.styles=t===void 0?null:Array.isArray(t)?_.create(t):t instanceof _?t:_.create([t])}applyTo(e){let t=e.$fastController;t.template===null&&(t.template=this.template),t.styles===null&&(t.styles=this.styles)}};var ge=class r extends Be{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=Co.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new Qi(this===r?class extends r{}:this,e,t)}};m([S],ge.prototype,"template",void 0);m([S],ge.prototype,"styles",void 0);function gr(r,e,t){return typeof r=="function"?r(e,t):r}var Qi=class{constructor(e,t,o){this.type=e,this.elementDefinition=t,this.overrideDefinition=o,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){let o=this.definition,i=this.overrideDefinition,n=`${o.prefix||t.elementPrefix}-${o.baseName}`;t.tryDefineElement({name:n,type:this.type,baseClass:this.elementDefinition.baseClass,callback:a=>{let l=new wo(gr(o.template,a,o),gr(o.styles,a,o));a.definePresentation(l);let c=gr(o.shadowOptions,a,o);a.shadowRootMode&&(c?i.shadowOptions||(c.mode=a.shadowRootMode):c!==null&&(c={mode:a.shadowRootMode})),a.defineElement({elementOptions:gr(o.elementOptions,a,o),shadowOptions:c,attributes:gr(o.attributes,a,o)})}})}};function ie(r,...e){let t=pr.locate(r);e.forEach(o=>{Object.getOwnPropertyNames(o.prototype).forEach(s=>{s!=="constructor"&&Object.defineProperty(r.prototype,s,Object.getOwnPropertyDescriptor(o.prototype,s))}),pr.locate(o).forEach(s=>t.push(s))})}function Nn(r,e){let t=r.length;for(;t--;)if(e(r[t],t,r))return t;return-1}function Hn(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function Bn(...r){return r.every(e=>e instanceof HTMLElement)}function zl(){let r=document.querySelector('meta[property="csp-nonce"]');return r?r.getAttribute("content"):null}var ct;function jn(){if(typeof ct=="boolean")return ct;if(!Hn())return ct=!1,ct;let r=document.createElement("style"),e=zl();e!==null&&r.setAttribute("nonce",e),document.head.appendChild(r);try{r.sheet.insertRule("foo:focus-visible {color:inherit}",0),ct=!0}catch{ct=!1}finally{document.head.removeChild(r)}return ct}var zn;(function(r){r[r.alt=18]="alt",r[r.arrowDown=40]="arrowDown",r[r.arrowLeft=37]="arrowLeft",r[r.arrowRight=39]="arrowRight",r[r.arrowUp=38]="arrowUp",r[r.back=8]="back",r[r.backSlash=220]="backSlash",r[r.break=19]="break",r[r.capsLock=20]="capsLock",r[r.closeBracket=221]="closeBracket",r[r.colon=186]="colon",r[r.colon2=59]="colon2",r[r.comma=188]="comma",r[r.ctrl=17]="ctrl",r[r.delete=46]="delete",r[r.end=35]="end",r[r.enter=13]="enter",r[r.equals=187]="equals",r[r.equals2=61]="equals2",r[r.equals3=107]="equals3",r[r.escape=27]="escape",r[r.forwardSlash=191]="forwardSlash",r[r.function1=112]="function1",r[r.function10=121]="function10",r[r.function11=122]="function11",r[r.function12=123]="function12",r[r.function2=113]="function2",r[r.function3=114]="function3",r[r.function4=115]="function4",r[r.function5=116]="function5",r[r.function6=117]="function6",r[r.function7=118]="function7",r[r.function8=119]="function8",r[r.function9=120]="function9",r[r.home=36]="home",r[r.insert=45]="insert",r[r.menu=93]="menu",r[r.minus=189]="minus",r[r.minus2=109]="minus2",r[r.numLock=144]="numLock",r[r.numPad0=96]="numPad0",r[r.numPad1=97]="numPad1",r[r.numPad2=98]="numPad2",r[r.numPad3=99]="numPad3",r[r.numPad4=100]="numPad4",r[r.numPad5=101]="numPad5",r[r.numPad6=102]="numPad6",r[r.numPad7=103]="numPad7",r[r.numPad8=104]="numPad8",r[r.numPad9=105]="numPad9",r[r.numPadDivide=111]="numPadDivide",r[r.numPadDot=110]="numPadDot",r[r.numPadMinus=109]="numPadMinus",r[r.numPadMultiply=106]="numPadMultiply",r[r.numPadPlus=107]="numPadPlus",r[r.openBracket=219]="openBracket",r[r.pageDown=34]="pageDown",r[r.pageUp=33]="pageUp",r[r.period=190]="period",r[r.print=44]="print",r[r.quote=222]="quote",r[r.scrollLock=145]="scrollLock",r[r.shift=16]="shift",r[r.space=32]="space",r[r.tab=9]="tab",r[r.tilde=192]="tilde",r[r.windowsLeft=91]="windowsLeft",r[r.windowsOpera=219]="windowsOpera",r[r.windowsRight=92]="windowsRight"})(zn||(zn={}));var Rt="ArrowDown";var Ot="ArrowUp",Vt="Enter",Ft="Escape",Tt="Home",It="End";var _t=" ",Lt="Tab";var So;(function(r){r.ltr="ltr",r.rtl="rtl"})(So||(So={}));function Gn(r,e,t){return Math.min(Math.max(t,r),e)}function vr(r,e,t=0){return[e,t]=[e,t].sort((o,i)=>o-i),e<=r&&r<t}var Gl=0;function Pt(r=""){return`${r}${Gl++}`}var C;(function(r){r.Canvas="Canvas",r.CanvasText="CanvasText",r.LinkText="LinkText",r.VisitedText="VisitedText",r.ActiveText="ActiveText",r.ButtonFace="ButtonFace",r.ButtonText="ButtonText",r.Field="Field",r.FieldText="FieldText",r.Highlight="Highlight",r.HighlightText="HighlightText",r.GrayText="GrayText"})(C||(C={}));var T=class{};m([y({attribute:"aria-atomic"})],T.prototype,"ariaAtomic",void 0);m([y({attribute:"aria-busy"})],T.prototype,"ariaBusy",void 0);m([y({attribute:"aria-controls"})],T.prototype,"ariaControls",void 0);m([y({attribute:"aria-current"})],T.prototype,"ariaCurrent",void 0);m([y({attribute:"aria-describedby"})],T.prototype,"ariaDescribedby",void 0);m([y({attribute:"aria-details"})],T.prototype,"ariaDetails",void 0);m([y({attribute:"aria-disabled"})],T.prototype,"ariaDisabled",void 0);m([y({attribute:"aria-errormessage"})],T.prototype,"ariaErrormessage",void 0);m([y({attribute:"aria-flowto"})],T.prototype,"ariaFlowto",void 0);m([y({attribute:"aria-haspopup"})],T.prototype,"ariaHaspopup",void 0);m([y({attribute:"aria-hidden"})],T.prototype,"ariaHidden",void 0);m([y({attribute:"aria-invalid"})],T.prototype,"ariaInvalid",void 0);m([y({attribute:"aria-keyshortcuts"})],T.prototype,"ariaKeyshortcuts",void 0);m([y({attribute:"aria-label"})],T.prototype,"ariaLabel",void 0);m([y({attribute:"aria-labelledby"})],T.prototype,"ariaLabelledby",void 0);m([y({attribute:"aria-live"})],T.prototype,"ariaLive",void 0);m([y({attribute:"aria-owns"})],T.prototype,"ariaOwns",void 0);m([y({attribute:"aria-relevant"})],T.prototype,"ariaRelevant",void 0);m([y({attribute:"aria-roledescription"})],T.prototype,"ariaRoledescription",void 0);var Un="form-associated-proxy",qn="ElementInternals",Wn=qn in window&&"setFormValue"in window[qn].prototype,Xn=new WeakMap;function $o(r){let e=class extends r{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return Wn}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){let t=this.proxy.labels,o=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),i=t?o.concat(Array.from(t)):o;return Object.freeze(i)}else return Me}valueChanged(t,o){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,o){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,o){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),x.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(t,o){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,o){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),x.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!Wn)return null;let t=Xn.get(this);return t||(t=this.attachInternals(),Xn.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){super.disconnectedCallback(),this.proxyEventsToBlock.forEach(t=>this.proxy.removeEventListener(t,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,o,i){this.elementInternals?this.elementInternals.setValidity(t,o,i):typeof o=="string"&&this.proxy.setCustomValidity(o)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(o=>this.proxy.addEventListener(o,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",Un),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",Un)),(t=this.shadowRoot)===null||t===void 0||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),(t=this.shadowRoot)===null||t===void 0||t.removeChild(this.proxySlot)}validate(t){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage,t)}setFormValue(t,o){this.elementInternals&&this.elementInternals.setFormValue(t,o||t)}_keypressHandler(t){switch(t.key){case Vt:if(this.form instanceof HTMLFormElement){let o=this.form.querySelector("[type=submit]");o?.click()}break}}stopPropagation(t){t.stopPropagation()}};return y({mode:"boolean"})(e.prototype,"disabled"),y({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),y({attribute:"current-value"})(e.prototype,"currentValue"),y(e.prototype,"name"),y({mode:"boolean"})(e.prototype,"required"),S(e.prototype,"value"),e}function Zi(r){return Bn(r)&&(r.getAttribute("role")==="option"||r instanceof HTMLOptionElement)}var U=class extends ge{constructor(e,t,o,i){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),o&&(this.defaultSelected=o),i&&(this.selected=i),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){if(typeof t=="boolean"){this.ariaChecked=t?"true":"false";return}this.ariaChecked=null}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return(e=this.value)!==null&&e!==void 0?e:this.text}get text(){var e,t;return(t=(e=this.textContent)===null||e===void 0?void 0:e.replace(/\s+/g," ").trim())!==null&&t!==void 0?t:""}set value(e){let t=`${e??""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),v.notify(this,"value")}get value(){var e;return v.track(this,"value"),(e=this._value)!==null&&e!==void 0?e:this.text}get form(){return this.proxy?this.proxy.form:null}};m([S],U.prototype,"checked",void 0);m([S],U.prototype,"content",void 0);m([S],U.prototype,"defaultSelected",void 0);m([y({mode:"boolean"})],U.prototype,"disabled",void 0);m([y({attribute:"selected",mode:"boolean"})],U.prototype,"selectedAttribute",void 0);m([S],U.prototype,"selected",void 0);m([y({attribute:"value",mode:"fromView"})],U.prototype,"initialValue",void 0);var Ge=class{};m([S],Ge.prototype,"ariaChecked",void 0);m([S],Ge.prototype,"ariaPosInSet",void 0);m([S],Ge.prototype,"ariaSelected",void 0);m([S],Ge.prototype,"ariaSetSize",void 0);ie(Ge,T);ie(U,ze,Ge);var N=class r extends ge{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return(e=this.selectedOptions[0])!==null&&e!==void 0?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,t;return(t=(e=this.options)===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0}get options(){return v.track(this,"options"),this._options}set options(e){this._options=e,v.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){let t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&e!==null&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){let e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter(o=>o.text.trim().match(t))}getSelectableIndex(e=this.selectedIndex,t){let o=e>t?-1:e<t?1:0,i=e+o,s=null;switch(o){case-1:{s=this.options.reduceRight((n,a,l)=>!n&&!a.disabled&&l<i?a:n,s);break}case 1:{s=this.options.reduce((n,a,l)=>!n&&!a.disabled&&l>i?a:n,s);break}}return this.options.indexOf(s)}handleChange(e,t){switch(t){case"selected":{r.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions();break}}}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,r.TYPE_AHEAD_TIMEOUT_MS),!(e.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;let t=e.key;switch(t){case Tt:{e.shiftKey||(e.preventDefault(),this.selectFirstOption());break}case Rt:{e.shiftKey||(e.preventDefault(),this.selectNextOption());break}case Ot:{e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break}case It:{e.preventDefault(),this.selectLastOption();break}case Lt:return this.focusAndScrollOptionIntoView(),!0;case Vt:case Ft:return!0;case _t:if(this.typeaheadExpired)return!0;default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var o;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(!((o=this.options[this.selectedIndex])===null||o===void 0)&&o.disabled&&typeof e=="number"){let i=this.getSelectableIndex(e,t),s=i>-1?i:e;this.selectedIndex=s,t===s&&this.selectedIndexChanged(t,s);return}this.setSelectedOptions()}selectedOptionsChanged(e,t){var o;let i=t.filter(r.slottedOptionFilter);(o=this.options)===null||o===void 0||o.forEach(s=>{let n=v.getNotifier(s);n.unsubscribe(this,"selected"),s.selected=i.includes(s),n.subscribe(this,"selected")})}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(o=>!o.disabled))!==null&&t!==void 0?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=Nn(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(o=>o.defaultSelected))!==null&&t!==void 0?t:-1}setSelectedOptions(){var e,t,o;!((e=this.options)===null||e===void 0)&&e.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(o=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.id)!==null&&o!==void 0?o:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce((i,s)=>(Zi(s)&&i.push(s),i),[]);let o=`${this.options.length}`;this.options.forEach((i,s)=>{i.id||(i.id=Pt("option-")),i.ariaPosInSet=`${s+1}`,i.ariaSetSize=o}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){let o=this.getTypeaheadMatches();if(o.length){let i=this.options.indexOf(o[0]);i>-1&&(this.selectedIndex=i)}this.typeaheadExpired=!1}}};N.slottedOptionFilter=r=>Zi(r)&&!r.hidden;N.TYPE_AHEAD_TIMEOUT_MS=1e3;m([y({mode:"boolean"})],N.prototype,"disabled",void 0);m([S],N.prototype,"selectedIndex",void 0);m([S],N.prototype,"selectedOptions",void 0);m([S],N.prototype,"slottedOptions",void 0);m([S],N.prototype,"typeaheadBuffer",void 0);var se=class{};m([S],se.prototype,"ariaActiveDescendant",void 0);m([S],se.prototype,"ariaDisabled",void 0);m([S],se.prototype,"ariaExpanded",void 0);m([S],se.prototype,"ariaMultiSelectable",void 0);ie(se,T);ie(N,se);var Ue={above:"above",below:"below"};var Ji=class extends N{},ko=class extends $o(Ji){constructor(){super(...arguments),this.proxy=document.createElement("input")}};var ut={inline:"inline",list:"list",both:"both",none:"none"};var ne=class extends ko{constructor(){super(...arguments),this._value="",this.filteredOptions=[],this.filter="",this.forcedPosition=!1,this.listboxId=Pt("listbox-"),this.maxHeight=0,this.open=!1}formResetCallback(){super.formResetCallback(),this.setDefaultSelectedOption(),this.updateValue()}validate(){super.validate(this.control)}get isAutocompleteInline(){return this.autocomplete===ut.inline||this.isAutocompleteBoth}get isAutocompleteList(){return this.autocomplete===ut.list||this.isAutocompleteBoth}get isAutocompleteBoth(){return this.autocomplete===ut.both}openChanged(){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),x.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}get options(){return v.track(this,"options"),this.filteredOptions.length?this.filteredOptions:this._options}set options(e){this._options=e,v.notify(this,"options")}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}get value(){return v.track(this,"value"),this._value}set value(e){var t,o,i;let s=`${this._value}`;if(this.$fastController.isConnected&&this.options){let n=this.options.findIndex(c=>c.text.toLowerCase()===e.toLowerCase()),a=(t=this.options[this.selectedIndex])===null||t===void 0?void 0:t.text,l=(o=this.options[n])===null||o===void 0?void 0:o.text;this.selectedIndex=a!==l?n:this.selectedIndex,e=((i=this.firstSelectedOption)===null||i===void 0?void 0:i.text)||e}s!==e&&(this._value=e,super.valueChanged(s,e),v.notify(this,"value"))}clickHandler(e){let t=e.target.closest("option,[role=option]");if(!(this.disabled||t?.disabled)){if(this.open){if(e.composedPath()[0]===this.control)return;t&&(this.selectedOptions=[t],this.control.value=t.text,this.clearSelectionRange(),this.updateValue(!0))}return this.open=!this.open,this.open&&this.control.focus(),!0}}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.value&&(this.initialValue=this.value)}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}filterOptions(){(!this.autocomplete||this.autocomplete===ut.none)&&(this.filter="");let e=this.filter.toLowerCase();this.filteredOptions=this._options.filter(t=>t.text.toLowerCase().startsWith(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!e&&(this.filteredOptions=this._options),this._options.forEach(t=>{t.hidden=!this.filteredOptions.includes(t)}))}focusAndScrollOptionIntoView(){this.contains(document.activeElement)&&(this.control.focus(),this.firstSelectedOption&&requestAnimationFrame(()=>{var e;(e=this.firstSelectedOption)===null||e===void 0||e.scrollIntoView({block:"nearest"})}))}focusoutHandler(e){if(this.syncValue(),!this.open)return!0;let t=e.relatedTarget;if(this.isSameNode(t)){this.focus();return}(!this.options||!this.options.includes(t))&&(this.open=!1)}inputHandler(e){if(this.filter=this.control.value,this.filterOptions(),this.isAutocompleteInline||(this.selectedIndex=this.options.map(t=>t.text).indexOf(this.control.value)),e.inputType.includes("deleteContent")||!this.filter.length)return!0;this.isAutocompleteList&&!this.open&&(this.open=!0),this.isAutocompleteInline&&(this.filteredOptions.length?(this.selectedOptions=[this.filteredOptions[0]],this.selectedIndex=this.options.indexOf(this.firstSelectedOption),this.setInlineSelection()):this.selectedIndex=-1)}keydownHandler(e){let t=e.key;if(e.ctrlKey||e.shiftKey)return!0;switch(t){case"Enter":{this.syncValue(),this.isAutocompleteInline&&(this.filter=this.value),this.open=!1,this.clearSelectionRange();break}case"Escape":{if(this.isAutocompleteInline||(this.selectedIndex=-1),this.open){this.open=!1;break}this.value="",this.control.value="",this.filter="",this.filterOptions();break}case"Tab":{if(this.setInputToSelection(),!this.open)return!0;e.preventDefault(),this.open=!1;break}case"ArrowUp":case"ArrowDown":{if(this.filterOptions(),!this.open){this.open=!0;break}this.filteredOptions.length>0&&super.keydownHandler(e),this.isAutocompleteInline&&this.setInlineSelection();break}default:return!0}}keyupHandler(e){switch(e.key){case"ArrowLeft":case"ArrowRight":case"Backspace":case"Delete":case"Home":case"End":{this.filter=this.control.value,this.selectedIndex=-1,this.filterOptions();break}}}selectedIndexChanged(e,t){if(this.$fastController.isConnected){if(t=Gn(-1,this.options.length-1,t),t!==this.selectedIndex){this.selectedIndex=t;return}super.selectedIndexChanged(e,t)}}selectPreviousOption(){!this.disabled&&this.selectedIndex>=0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){if(this.$fastController.isConnected&&this.options){let e=this.options.findIndex(t=>t.getAttribute("selected")!==null||t.selected);this.selectedIndex=e,!this.dirtyValue&&this.firstSelectedOption&&(this.value=this.firstSelectedOption.text),this.setSelectedOptions()}}setInputToSelection(){this.firstSelectedOption&&(this.control.value=this.firstSelectedOption.text,this.control.focus())}setInlineSelection(){this.firstSelectedOption&&(this.setInputToSelection(),this.control.setSelectionRange(this.filter.length,this.control.value.length,"backward"))}syncValue(){var e;let t=this.selectedIndex>-1?(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text:this.control.value;this.updateValue(this.value!==t)}setPositioning(){let e=this.getBoundingClientRect(),o=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>o?Ue.above:Ue.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Ue.above?~~e.top:~~o}selectedOptionsChanged(e,t){this.$fastController.isConnected&&this._options.forEach(o=>{o.selected=t.includes(o)})}slottedOptionsChanged(e,t){super.slottedOptionsChanged(e,t),this.updateValue()}updateValue(e){var t;this.$fastController.isConnected&&(this.value=((t=this.firstSelectedOption)===null||t===void 0?void 0:t.text)||this.control.value,this.control.value=this.value),e&&this.$emit("change")}clearSelectionRange(){let e=this.control.value.length;this.control.setSelectionRange(e,e)}};m([y({attribute:"autocomplete",mode:"fromView"})],ne.prototype,"autocomplete",void 0);m([S],ne.prototype,"maxHeight",void 0);m([y({attribute:"open",mode:"boolean"})],ne.prototype,"open",void 0);m([y],ne.prototype,"placeholder",void 0);m([y({attribute:"position"})],ne.prototype,"positionAttribute",void 0);m([S],ne.prototype,"position",void 0);var Dt=class{};m([S],Dt.prototype,"ariaAutoComplete",void 0);m([S],Dt.prototype,"ariaControls",void 0);ie(Dt,se);ie(ne,ze,Dt);var Yn=(r,e)=>Ee`
    <template
        aria-disabled="${t=>t.ariaDisabled}"
        autocomplete="${t=>t.autocomplete}"
        class="${t=>t.open?"open":""} ${t=>t.disabled?"disabled":""} ${t=>t.position}"
        ?open="${t=>t.open}"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,o)=>t.clickHandler(o.event)}"
        @focusout="${(t,o)=>t.focusoutHandler(o.event)}"
        @keydown="${(t,o)=>t.keydownHandler(o.event)}"
    >
        <div class="control" part="control">
            ${mo(r,e)}
            <slot name="control">
                <input
                    aria-activedescendant="${t=>t.open?t.ariaActiveDescendant:null}"
                    aria-autocomplete="${t=>t.ariaAutoComplete}"
                    aria-controls="${t=>t.ariaControls}"
                    aria-disabled="${t=>t.ariaDisabled}"
                    aria-expanded="${t=>t.ariaExpanded}"
                    aria-haspopup="listbox"
                    class="selected-value"
                    part="selected-value"
                    placeholder="${t=>t.placeholder}"
                    role="combobox"
                    type="text"
                    ?disabled="${t=>t.disabled}"
                    :value="${t=>t.value}"
                    @input="${(t,o)=>t.inputHandler(o.event)}"
                    @keyup="${(t,o)=>t.keyupHandler(o.event)}"
                    ${oe("control")}
                />
                <div class="indicator" part="indicator" aria-hidden="true">
                    <slot name="indicator">
                        ${e.indicator||""}
                    </slot>
                </div>
            </slot>
            ${fo(r,e)}
        </div>
        <div
            class="listbox"
            id="${t=>t.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${t=>t.disabled}"
            ?hidden="${t=>!t.open}"
            ${oe("listbox")}
        >
            <slot
                ${po({filter:N.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`;function br(r){let e=r.parentElement;if(e)return e;{let t=r.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}function Qn(r,e){let t=e;for(;t!==null;){if(t===r)return!0;t=br(t)}return!1}var ve=document.createElement("div");function Ul(r){return r instanceof Be}var xr=class{setProperty(e,t){x.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){x.queueUpdate(()=>this.target.removeProperty(e))}},es=class extends xr{constructor(e){super();let t=new CSSStyleSheet;t[lo]=!0,this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(_.create([t]))}},ts=class extends xr{constructor(){super();let e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}},rs=class extends xr{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);let{sheet:e}=this.style;if(e){let t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}},Ao=class{constructor(e){this.store=new Map,this.target=null;let t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),v.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(this.target!==null)for(let[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),x.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,t)})}removeProperty(e){this.store.delete(e),x.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,t){let{sheet:o}=this.style;if(o){let i=o.insertRule(":host{}",o.cssRules.length);this.target=o.cssRules[i].style}else this.target=null}};m([S],Ao.prototype,"target",void 0);var os=class{constructor(e){this.target=e.style}setProperty(e,t){x.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){x.queueUpdate(()=>this.target.removeProperty(e))}},qe=class r{setProperty(e,t){r.properties[e]=t;for(let o of r.roots.values())ht.getOrCreate(r.normalizeRoot(o)).setProperty(e,t)}removeProperty(e){delete r.properties[e];for(let t of r.roots.values())ht.getOrCreate(r.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){let{roots:t}=r;if(!t.has(e)){t.add(e);let o=ht.getOrCreate(this.normalizeRoot(e));for(let i in r.properties)o.setProperty(i,r.properties[i])}}static unregisterRoot(e){let{roots:t}=r;if(t.has(e)){t.delete(e);let o=ht.getOrCreate(r.normalizeRoot(e));for(let i in r.properties)o.removeProperty(i)}}static normalizeRoot(e){return e===ve?document:e}};qe.roots=new Set;qe.properties={};var Ki=new WeakMap,ql=x.supportsAdoptedStyleSheets?es:Ao,ht=Object.freeze({getOrCreate(r){if(Ki.has(r))return Ki.get(r);let e;return r===ve?e=new qe:r instanceof Document?e=x.supportsAdoptedStyleSheets?new ts:new rs:Ul(r)?e=new ql(r):e=new os(r),Ki.set(r,e),e}});var ue=class r extends je{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=r.uniqueId(),r.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new r({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return r.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){let t=Z.getOrCreate(e).get(this);if(t!==void 0)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof r&&(t=this.alias(t)),Z.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),Z.existsFor(e)&&Z.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(ve,e),this}subscribe(e,t){let o=this.getOrCreateSubscriberSet(t);t&&!Z.existsFor(t)&&Z.getOrCreate(t),o.has(e)||o.add(e)}unsubscribe(e,t){let o=this.subscribers.get(t||this);o&&o.has(e)&&o.delete(e)}notify(e){let t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(o=>o.handleChange(t)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(o=>o.handleChange(t))}alias(e){return t=>e.getValueFor(t)}};ue.uniqueId=(()=>{let r=0;return()=>(r++,r.toString(16))})();ue.tokensById=new Map;var is=class{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){let{token:t,target:o}=e;this.add(t,o)}add(e,t){ht.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(Z.getOrCreate(t).get(e)))}remove(e,t){ht.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}},ss=class{constructor(e,t,o){this.source=e,this.token=t,this.node=o,this.dependencies=new Set,this.observer=v.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){try{this.node.store.set(this.token,this.observer.observe(this.node.target,He))}catch(e){console.error(e)}}},ns=class{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),v.getNotifier(this).notify(e.id))}get(e){return v.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e),v.getNotifier(this).notify(e.id)}all(){return this.values.entries()}},yr=new WeakMap,wr=new WeakMap,Z=class r{constructor(e){this.target=e,this.store=new ns,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,o)=>{let i=ue.getTokenById(o);i&&(i.notify(this.target),this.updateCSSTokenReflection(t,i))}},yr.set(e,this),v.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof Be?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return yr.get(e)||new r(e)}static existsFor(e){return yr.has(e)}static findParent(e){if(ve!==e.target){let t=br(e.target);for(;t!==null;){if(yr.has(t))return yr.get(t);t=br(t)}return r.getOrCreate(ve)}return null}static findClosestAssignedNode(e,t){let o=t;do{if(o.has(e))return o;o=o.parent?o.parent:o.target!==ve?r.getOrCreate(ve):null}while(o!==null);return null}get parent(){return wr.get(this)||null}updateCSSTokenReflection(e,t){if(ue.isCSSDesignToken(t)){let o=this.parent,i=this.isReflecting(t);if(o){let s=o.get(t),n=e.get(t);s!==n&&!i?this.reflectToCSS(t):s===n&&i&&this.stopReflectToCSS(t)}else i||this.reflectToCSS(t)}}has(e){return this.assignedValues.has(e)}get(e){let t=this.store.get(e);if(t!==void 0)return t;let o=this.getRaw(e);if(o!==void 0)return this.hydrate(e,o),this.get(e)}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):(t=r.findClosestAssignedNode(e,this))===null||t===void 0?void 0:t.getRaw(e)}set(e,t){ue.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),ue.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);let t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){let e=r.findParent(this);e&&e.appendChild(this);for(let t of this.assignedValues.keys())t.notify(this.target)}unbind(){this.parent&&wr.get(this).removeChild(this);for(let e of this.bindingObservers.keys())this.tearDownBindingObserver(e)}appendChild(e){e.parent&&wr.get(e).removeChild(e);let t=this.children.filter(o=>e.contains(o));wr.set(e,this),this.children.push(e),t.forEach(o=>e.appendChild(o)),v.getNotifier(this.store).subscribe(e);for(let[o,i]of this.store.all())e.hydrate(o,this.bindingObservers.has(o)?this.getRaw(o):i),e.updateCSSTokenReflection(e.store,o)}removeChild(e){let t=this.children.indexOf(e);if(t!==-1&&this.children.splice(t,1),v.getNotifier(this.store).unsubscribe(e),e.parent!==this)return!1;let o=wr.delete(e);for(let[i]of this.store.all())e.hydrate(i,e.getRaw(i)),e.updateCSSTokenReflection(e.store,i);return o}contains(e){return Qn(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),r.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),r.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){let o=ue.getTokenById(t);o&&(this.hydrate(o,this.getRaw(o)),this.updateCSSTokenReflection(this.store,o))}hydrate(e,t){if(!this.has(e)){let o=this.bindingObservers.get(e);ue.isDerivedDesignTokenValue(t)?o?o.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(o&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){let o=new ss(t,e,this);return this.bindingObservers.set(e,o),o}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}};Z.cssCustomPropertyReflector=new is;m([S],Z.prototype,"children",void 0);function Wl(r){return ue.from(r)}var dt=Object.freeze({create:Wl,notifyConnection(r){return!r.isConnected||!Z.existsFor(r)?!1:(Z.getOrCreate(r).bind(),!0)},notifyDisconnection(r){return r.isConnected||!Z.existsFor(r)?!1:(Z.getOrCreate(r).unbind(),!0)},registerRoot(r=ve){qe.registerRoot(r)},unregisterRoot(r=ve){qe.unregisterRoot(r)}});var as=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),ls=new Map,Eo=new Map,Mt=null,Cr=O.createInterface(r=>r.cachedCallback(e=>(Mt===null&&(Mt=new Ro(null,e)),Mt))),us=Object.freeze({tagFor(r){return Eo.get(r)},responsibleFor(r){let e=r.$$designSystem$$;return e||O.findResponsibleContainer(r).get(Cr)},getOrCreate(r){if(!r)return Mt===null&&(Mt=O.getOrCreateDOMContainer().get(Cr)),Mt;let e=r.$$designSystem$$;if(e)return e;let t=O.getOrCreateDOMContainer(r);if(t.has(Cr,!1))return t.get(Cr);{let o=new Ro(r,t);return t.register(lt.instance(Cr,o)),o}}});function Xl(r,e,t){return typeof r=="string"?{name:r,type:e,callback:t}:r}var Ro=class{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>as.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){let t=this.container,o=[],i=this.disambiguate,s=this.shadowRootMode,n={elementPrefix:this.prefix,tryDefineElement(a,l,c){let u=Xl(a,l,c),{name:p,callback:g,baseClass:$}=u,{type:E}=u,A=p,Y=ls.get(A),Je=!0;for(;Y;){let Se=i(A,E,Y);switch(Se){case as.ignoreDuplicate:return;case as.definitionCallbackOnly:Je=!1,Y=void 0;break;default:A=Se,Y=ls.get(A);break}}Je&&((Eo.has(E)||E===ge)&&(E=class extends E{}),ls.set(A,E),Eo.set(E,A),$&&Eo.set($,A)),o.push(new cs(t,A,E,s,g,Je))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&dt.registerRoot(this.designTokenRoot)),t.registerWithContext(n,...e);for(let a of o)a.callback(a),a.willDefine&&a.definition!==null&&a.definition.define();return this}},cs=class{constructor(e,t,o,i,s,n){this.container=e,this.name=t,this.type=o,this.shadowRootMode=i,this.callback=s,this.willDefine=n,this.definition=null}definePresentation(e){Co.define(this.name,e,this.container)}defineElement(e){this.definition=new me(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return us.tagFor(e)}};var Zn=(r,e)=>Ee`
    <template
        aria-checked="${t=>t.ariaChecked}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-posinset="${t=>t.ariaPosInSet}"
        aria-selected="${t=>t.ariaSelected}"
        aria-setsize="${t=>t.ariaSetSize}"
        class="${t=>[t.checked&&"checked",t.selected&&"selected",t.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${mo(r,e)}
        <span class="content" part="content">
            <slot ${po("content")}></slot>
        </span>
        ${fo(r,e)}
    </template>
`;var Re=class extends N{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return(e=this.options)===null||e===void 0?void 0:e.filter(t=>t.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var o,i;this.ariaActiveDescendant=(i=(o=this.options[t])===null||o===void 0?void 0:o.id)!==null&&i!==void 0?i:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;let e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((t,o)=>{t.checked=vr(o,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,o)=>{t.checked=vr(o,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,o)=>{t.checked=vr(o,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((t,o)=>{t.checked=vr(o,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);let o=(t=e.target)===null||t===void 0?void 0:t.closest("[role=option]");if(!(!o||o.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(o),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;let{key:t,shiftKey:o}=e;switch(this.shouldSkipFocus=!1,t){case Tt:{this.checkFirstOption(o);return}case Rt:{this.checkNextOption(o);return}case Ot:{this.checkPreviousOption(o);return}case It:{this.checkLastOption(o);return}case Lt:return this.focusAndScrollOptionIntoView(),!0;case Ft:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case _t:if(e.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var o;this.ariaMultiSelectable=t?"true":null,(o=this.options)===null||o===void 0||o.forEach(i=>{i.checked=t?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView())}sizeChanged(e,t){var o;let i=Math.max(0,parseInt((o=t?.toFixed())!==null&&o!==void 0?o:"",10));i!==t&&x.queueUpdate(()=>{this.size=i})}toggleSelectedForAllCheckedOptions(){let e=this.checkedOptions.filter(o=>!o.disabled),t=!e.every(o=>o.selected);e.forEach(o=>o.selected=t),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(!this.multiple){super.typeaheadBufferChanged(e,t);return}if(this.$fastController.isConnected){let o=this.getTypeaheadMatches(),i=this.options.indexOf(o[0]);i>-1&&(this.activeIndex=i,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(e=!1){this.options.forEach(t=>t.checked=this.multiple?!1:void 0),e||(this.rangeStartIndex=-1)}};m([S],Re.prototype,"activeIndex",void 0);m([y({mode:"boolean"})],Re.prototype,"multiple",void 0);m([y({converter:yn})],Re.prototype,"size",void 0);var hs=class extends Re{},Oo=class extends $o(hs){constructor(){super(...arguments),this.proxy=document.createElement("select")}};var he=class extends Oo{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.listboxId=Pt("listbox-"),this.maxHeight=0}openChanged(e,t){if(this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,x.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return v.track(this,"value"),this._value}set value(e){var t,o,i,s,n,a,l;let c=`${this._value}`;if(!((t=this._options)===null||t===void 0)&&t.length){let u=this._options.findIndex($=>$.value===e),p=(i=(o=this._options[this.selectedIndex])===null||o===void 0?void 0:o.value)!==null&&i!==void 0?i:null,g=(n=(s=this._options[u])===null||s===void 0?void 0:s.value)!==null&&n!==void 0?n:null;(u===-1||p!==g)&&(e="",this.selectedIndex=u),e=(l=(a=this.firstSelectedOption)===null||a===void 0?void 0:a.value)!==null&&l!==void 0?l:e}c!==e&&(this._value=e,super.valueChanged(c,e),v.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,o;this.$fastController.isConnected&&(this.value=(o=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.value)!==null&&o!==void 0?o:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(e,t){this.positionAttribute=t,this.setPositioning()}setPositioning(){let e=this.getBoundingClientRect(),o=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>o?Ue.above:Ue.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===Ue.above?~~e.top:~~o}get displayValue(){var e,t;return v.track(this,"displayValue"),(t=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)!==null&&t!==void 0?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){let t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;let o=e.relatedTarget;if(this.isSameNode(o)){this.focus();return}!((t=this.options)===null||t===void 0)&&t.includes(o)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),t==="value"&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach(o=>{v.getNotifier(o).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,t),this.options.forEach(o=>{v.getNotifier(o).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=((t=this.listbox)===null||t===void 0?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var o;super.selectedOptionsChanged(e,t),(o=this.options)===null||o===void 0||o.forEach((i,s)=>{var n;let a=(n=this.proxy)===null||n===void 0?void 0:n.options.item(s);a&&(a.selected=i.selected)})}setDefaultSelectedOption(){var e;let t=(e=this.options)!==null&&e!==void 0?e:Array.from(this.children).filter(N.slottedOptionFilter),o=t?.findIndex(i=>i.hasAttribute("selected")||i.selected||i.value===this.value);if(o!==-1){this.selectedIndex=o;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{let t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)}))}keydownHandler(e){super.keydownHandler(e);let t=e.key||e.key.charCodeAt(0);switch(t){case _t:{e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case Tt:case It:{e.preventDefault();break}case Vt:{e.preventDefault(),this.open=!this.open;break}case Ft:{this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break}case Lt:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t===Rt||t===Ot)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&v.notify(this,"displayValue")}};m([y({attribute:"open",mode:"boolean"})],he.prototype,"open",void 0);m([hn],he.prototype,"collapsible",null);m([S],he.prototype,"control",void 0);m([y({attribute:"position"})],he.prototype,"positionAttribute",void 0);m([S],he.prototype,"position",void 0);m([S],he.prototype,"maxHeight",void 0);var Sr=class{};m([S],Sr.prototype,"ariaControls",void 0);ie(Sr,se);ie(he,ze,Sr);var ds=class{constructor(e){this.listenerCache=new WeakMap,this.query=e}bind(e){let{query:t}=this,o=this.constructListener(e);o.bind(t)(),t.addListener(o),this.listenerCache.set(e,o)}unbind(e){let t=this.listenerCache.get(e);t&&(this.query.removeListener(t),this.listenerCache.delete(e))}},$r=class r extends ds{constructor(e,t){super(e),this.styles=t}static with(e){return t=>new r(e,t)}constructListener(e){let t=!1,o=this.styles;return function(){let{matches:s}=this;s&&!t?(e.$fastController.addStyles(o),t=s):!s&&t&&(e.$fastController.removeStyles(o),t=s)}}unbind(e){super.unbind(e),e.$fastController.removeStyles(this.styles)}},Nt=$r.with(window.matchMedia("(forced-colors)")),tg=$r.with(window.matchMedia("(prefers-color-scheme: dark)")),rg=$r.with(window.matchMedia("(prefers-color-scheme: light)"));var te="not-allowed";var Yl=":host([hidden]){display:none}";function Oe(r){return`${Yl}:host{display:${r}}`}var L=jn()?"focus-visible":"focus";function ae(r,e,t){return isNaN(r)||r<=e?e:r>=t?t:r}function Vo(r,e,t){return isNaN(r)||r<=e?0:r>=t?1:r/(t-e)}function We(r,e,t){return isNaN(r)?e:e+r*(t-e)}function ps(r){return r*(Math.PI/180)}function Jn(r){return r*(180/Math.PI)}function Kn(r){let e=Math.round(ae(r,0,255)).toString(16);return e.length===1?"0"+e:e}function j(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:e+r*(t-e)}function Fo(r,e,t){if(r<=0)return e%360;if(r>=1)return t%360;let o=(e-t+360)%360,i=(t-e+360)%360;return o<=i?(e-o*r+360)%360:(e+o*r+360)%360}var nv=Math.PI*2;function I(r,e){let t=Math.pow(10,e);return Math.round(r*t)/t}var Ve=class r{constructor(e,t,o){this.h=e,this.s=t,this.l=o}static fromObject(e){return e&&!isNaN(e.h)&&!isNaN(e.s)&&!isNaN(e.l)?new r(e.h,e.s,e.l):null}equalValue(e){return this.h===e.h&&this.s===e.s&&this.l===e.l}roundToPrecision(e){return new r(I(this.h,e),I(this.s,e),I(this.l,e))}toObject(){return{h:this.h,s:this.s,l:this.l}}};var Ht=class r{constructor(e,t,o){this.h=e,this.s=t,this.v=o}static fromObject(e){return e&&!isNaN(e.h)&&!isNaN(e.s)&&!isNaN(e.v)?new r(e.h,e.s,e.v):null}equalValue(e){return this.h===e.h&&this.s===e.s&&this.v===e.v}roundToPrecision(e){return new r(I(this.h,e),I(this.s,e),I(this.v,e))}toObject(){return{h:this.h,s:this.s,v:this.v}}};var H=class r{constructor(e,t,o){this.l=e,this.a=t,this.b=o}static fromObject(e){return e&&!isNaN(e.l)&&!isNaN(e.a)&&!isNaN(e.b)?new r(e.l,e.a,e.b):null}equalValue(e){return this.l===e.l&&this.a===e.a&&this.b===e.b}roundToPrecision(e){return new r(I(this.l,e),I(this.a,e),I(this.b,e))}toObject(){return{l:this.l,a:this.a,b:this.b}}};H.epsilon=216/24389;H.kappa=24389/27;var Xe=class r{constructor(e,t,o){this.l=e,this.c=t,this.h=o}static fromObject(e){return e&&!isNaN(e.l)&&!isNaN(e.c)&&!isNaN(e.h)?new r(e.l,e.c,e.h):null}equalValue(e){return this.l===e.l&&this.c===e.c&&this.h===e.h}roundToPrecision(e){return new r(I(this.l,e),I(this.c,e),I(this.h,e))}toObject(){return{l:this.l,c:this.c,h:this.h}}};var V=class r{constructor(e,t,o,i){this.r=e,this.g=t,this.b=o,this.a=typeof i=="number"&&!isNaN(i)?i:1}static fromObject(e){return e&&!isNaN(e.r)&&!isNaN(e.g)&&!isNaN(e.b)?new r(e.r,e.g,e.b,e.a):null}equalValue(e){return this.r===e.r&&this.g===e.g&&this.b===e.b&&this.a===e.a}toStringHexRGB(){return"#"+[this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringHexRGBA(){return this.toStringHexRGB()+this.formatHexValue(this.a)}toStringHexARGB(){return"#"+[this.a,this.r,this.g,this.b].map(this.formatHexValue).join("")}toStringWebRGB(){return`rgb(${Math.round(We(this.r,0,255))},${Math.round(We(this.g,0,255))},${Math.round(We(this.b,0,255))})`}toStringWebRGBA(){return`rgba(${Math.round(We(this.r,0,255))},${Math.round(We(this.g,0,255))},${Math.round(We(this.b,0,255))},${ae(this.a,0,1)})`}roundToPrecision(e){return new r(I(this.r,e),I(this.g,e),I(this.b,e),I(this.a,e))}clamp(){return new r(ae(this.r,0,1),ae(this.g,0,1),ae(this.b,0,1),ae(this.a,0,1))}toObject(){return{r:this.r,g:this.g,b:this.b,a:this.a}}formatHexValue(e){return Kn(We(e,0,255))}};var J=class r{constructor(e,t,o){this.x=e,this.y=t,this.z=o}static fromObject(e){return e&&!isNaN(e.x)&&!isNaN(e.y)&&!isNaN(e.z)?new r(e.x,e.y,e.z):null}equalValue(e){return this.x===e.x&&this.y===e.y&&this.z===e.z}roundToPrecision(e){return new r(I(this.x,e),I(this.y,e),I(this.z,e))}toObject(){return{x:this.x,y:this.y,z:this.z}}};J.whitePoint=new J(.95047,1,1.08883);function Io(r){return r.r*.2126+r.g*.7152+r.b*.0722}function To(r){function e(t){return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}return Io(new V(e(r.r),e(r.g),e(r.b),1))}var ea=(r,e)=>(r+.05)/(e+.05);function fs(r,e){let t=To(r),o=To(e);return t>o?ea(t,o):ea(o,t)}function Fe(r){let e=Math.max(r.r,r.g,r.b),t=Math.min(r.r,r.g,r.b),o=e-t,i=0;o!==0&&(e===r.r?i=60*((r.g-r.b)/o%6):e===r.g?i=60*((r.b-r.r)/o+2):i=60*((r.r-r.g)/o+4)),i<0&&(i+=360);let s=(e+t)/2,n=0;return o!==0&&(n=o/(1-Math.abs(2*s-1))),new Ve(i,n,s)}function Bt(r,e=1){let t=(1-Math.abs(2*r.l-1))*r.s,o=t*(1-Math.abs(r.h/60%2-1)),i=r.l-t/2,s=0,n=0,a=0;return r.h<60?(s=t,n=o,a=0):r.h<120?(s=o,n=t,a=0):r.h<180?(s=0,n=t,a=o):r.h<240?(s=0,n=o,a=t):r.h<300?(s=o,n=0,a=t):r.h<360&&(s=t,n=0,a=o),new V(s+i,n+i,a+i,e)}function ms(r){let e=Math.max(r.r,r.g,r.b),t=Math.min(r.r,r.g,r.b),o=e-t,i=0;o!==0&&(e===r.r?i=60*((r.g-r.b)/o%6):e===r.g?i=60*((r.b-r.r)/o+2):i=60*((r.r-r.g)/o+4)),i<0&&(i+=360);let s=0;return e!==0&&(s=o/e),new Ht(i,s,e)}function ta(r,e=1){let t=r.s*r.v,o=t*(1-Math.abs(r.h/60%2-1)),i=r.v-t,s=0,n=0,a=0;return r.h<60?(s=t,n=o,a=0):r.h<120?(s=o,n=t,a=0):r.h<180?(s=0,n=t,a=o):r.h<240?(s=0,n=o,a=t):r.h<300?(s=o,n=0,a=t):r.h<360&&(s=t,n=0,a=o),new V(s+i,n+i,a+i,e)}function Ql(r){let e=0,t=0;return r.h!==0&&(e=Math.cos(ps(r.h))*r.c,t=Math.sin(ps(r.h))*r.c),new H(r.l,e,t)}function Zl(r){let e=0;(Math.abs(r.b)>.001||Math.abs(r.a)>.001)&&(e=Jn(Math.atan2(r.b,r.a))),e<0&&(e+=360);let t=Math.sqrt(r.a*r.a+r.b*r.b);return new Xe(r.l,t,e)}function Jl(r){let e=(r.l+16)/116,t=e+r.a/500,o=e-r.b/200,i=Math.pow(t,3),s=Math.pow(e,3),n=Math.pow(o,3),a=0;i>H.epsilon?a=i:a=(116*t-16)/H.kappa;let l=0;r.l>H.epsilon*H.kappa?l=s:l=r.l/H.kappa;let c=0;return n>H.epsilon?c=n:c=(116*o-16)/H.kappa,a=J.whitePoint.x*a,l=J.whitePoint.y*l,c=J.whitePoint.z*c,new J(a,l,c)}function Kl(r){function e(l){return l>H.epsilon?Math.pow(l,1/3):(H.kappa*l+16)/116}let t=e(r.x/J.whitePoint.x),o=e(r.y/J.whitePoint.y),i=e(r.z/J.whitePoint.z),s=116*o-16,n=500*(t-o),a=200*(o-i);return new H(s,n,a)}function _o(r){function e(l){return l<=.04045?l/12.92:Math.pow((l+.055)/1.055,2.4)}let t=e(r.r),o=e(r.g),i=e(r.b),s=t*.4124564+o*.3575761+i*.1804375,n=t*.2126729+o*.7151522+i*.072175,a=t*.0193339+o*.119192+i*.9503041;return new J(s,n,a)}function gs(r,e=1){function t(n){return n<=.0031308?n*12.92:1.055*Math.pow(n,1/2.4)-.055}let o=t(r.x*3.2404542-r.y*1.5371385-r.z*.4985314),i=t(r.x*-.969266+r.y*1.8760108+r.z*.041556),s=t(r.x*.0556434-r.y*.2040259+r.z*1.0572252);return new V(o,i,s,e)}function kr(r){return Kl(_o(r))}function Lo(r,e=1){return gs(Jl(r),e)}function Ar(r){return Zl(kr(r))}function Po(r,e=1){return Lo(Ql(r),e)}function xs(r,e,t=18){let o=Ar(r),i=o.c+e*t;return i<0&&(i=0),Po(new Xe(o.l,i,o.h))}function vs(r,e){return r*e}function ys(r,e){return new V(vs(r.r,e.r),vs(r.g,e.g),vs(r.b,e.b),1)}function bs(r,e){return r<.5?ae(2*e*r,0,1):ae(1-2*(1-e)*(1-r),0,1)}function ws(r,e){return new V(bs(r.r,e.r),bs(r.g,e.g),bs(r.b,e.b),1)}var ra;(function(r){r[r.Burn=0]="Burn",r[r.Color=1]="Color",r[r.Darken=2]="Darken",r[r.Dodge=3]="Dodge",r[r.Lighten=4]="Lighten",r[r.Multiply=5]="Multiply",r[r.Overlay=6]="Overlay",r[r.Screen=7]="Screen"})(ra||(ra={}));function ec(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new V(j(r,e.r,t.r),j(r,e.g,t.g),j(r,e.b,t.b),j(r,e.a,t.a))}function tc(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new Ve(Fo(r,e.h,t.h),j(r,e.s,t.s),j(r,e.l,t.l))}function rc(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new Ht(Fo(r,e.h,t.h),j(r,e.s,t.s),j(r,e.v,t.v))}function oc(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new J(j(r,e.x,t.x),j(r,e.y,t.y),j(r,e.z,t.z))}function ic(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new H(j(r,e.l,t.l),j(r,e.a,t.a),j(r,e.b,t.b))}function sc(r,e,t){return isNaN(r)||r<=0?e:r>=1?t:new Xe(j(r,e.l,t.l),j(r,e.c,t.c),Fo(r,e.h,t.h))}var q;(function(r){r[r.RGB=0]="RGB",r[r.HSL=1]="HSL",r[r.HSV=2]="HSV",r[r.XYZ=3]="XYZ",r[r.LAB=4]="LAB",r[r.LCH=5]="LCH"})(q||(q={}));function pt(r,e,t,o){if(isNaN(r)||r<=0)return t;if(r>=1)return o;switch(e){case q.HSL:return Bt(tc(r,Fe(t),Fe(o)));case q.HSV:return ta(rc(r,ms(t),ms(o)));case q.XYZ:return gs(oc(r,_o(t),_o(o)));case q.LAB:return Lo(ic(r,kr(t),kr(o)));case q.LCH:return Po(sc(r,Ar(t),Ar(o)));default:return ec(r,t,o)}}var be=class r{constructor(e){if(e==null||e.length===0)throw new Error("The stops argument must be non-empty");this.stops=this.sortColorScaleStops(e)}static createBalancedColorScale(e){if(e==null||e.length===0)throw new Error("The colors argument must be non-empty");let t=new Array(e.length);for(let o=0;o<e.length;o++)o===0?t[o]={color:e[o],position:0}:o===e.length-1?t[o]={color:e[o],position:1}:t[o]={color:e[o],position:o*(1/(e.length-1))};return new r(t)}getColor(e,t=q.RGB){if(this.stops.length===1)return this.stops[0].color;if(e<=0)return this.stops[0].color;if(e>=1)return this.stops[this.stops.length-1].color;let o=0;for(let n=0;n<this.stops.length;n++)this.stops[n].position<=e&&(o=n);let i=o+1;i>=this.stops.length&&(i=this.stops.length-1);let s=(e-this.stops[o].position)*(1/(this.stops[i].position-this.stops[o].position));return pt(s,t,this.stops[o].color,this.stops[i].color)}trim(e,t,o=q.RGB){if(e<0||t>1||t<e)throw new Error("Invalid bounds");if(e===t)return new r([{color:this.getColor(e,o),position:0}]);let i=[];for(let a=0;a<this.stops.length;a++)this.stops[a].position>=e&&this.stops[a].position<=t&&i.push(this.stops[a]);if(i.length===0)return new r([{color:this.getColor(e),position:e},{color:this.getColor(t),position:t}]);i[0].position!==e&&i.unshift({color:this.getColor(e),position:e}),i[i.length-1].position!==t&&i.push({color:this.getColor(t),position:t});let s=t-e,n=new Array(i.length);for(let a=0;a<i.length;a++)n[a]={color:i[a].color,position:(i[a].position-e)/s};return new r(n)}findNextColor(e,t,o=!1,i=q.RGB,s=.005,n=32){isNaN(e)||e<=0?e=0:e>=1&&(e=1);let a=this.getColor(e,i),l=o?0:1,c=this.getColor(l,i);if(fs(a,c)<=t)return l;let p=o?0:e,g=o?e:0,$=l,E=0;for(;E<=n;){$=Math.abs(g-p)/2+p;let A=this.getColor($,i),Y=fs(a,A);if(Math.abs(Y-t)<=s)return $;Y>t?o?p=$:g=$:o?g=$:p=$,E++}return $}clone(){let e=new Array(this.stops.length);for(let t=0;t<e.length;t++)e[t]={color:this.stops[t].color,position:this.stops[t].position};return new r(e)}sortColorScaleStops(e){return e.sort((t,o)=>{let i=t.position,s=o.position;return i<s?-1:i>s?1:0})}};var nc=/^#((?:[0-9a-f]{6}|[0-9a-f]{3}))$/i;function xe(r){let e=nc.exec(r);if(e===null)return null;let t=e[1];if(t.length===3){let i=t.charAt(0),s=t.charAt(1),n=t.charAt(2);t=i.concat(i,s,s,n,n)}let o=parseInt(t,16);return isNaN(o)?null:new V(Vo((o&16711680)>>>16,0,255),Vo((o&65280)>>>8,0,255),Vo(o&255,0,255),1)}var Te=class r{constructor(e){this.config=Object.assign({},r.defaultPaletteConfig,e),this.palette=[],this.updatePaletteColors()}updatePaletteGenerationValues(e){let t=!1;for(let o in e)this.config[o]&&(this.config[o].equalValue?this.config[o].equalValue(e[o])||(this.config[o]=e[o],t=!0):e[o]!==this.config[o]&&(this.config[o]=e[o],t=!0));return t&&this.updatePaletteColors(),t}updatePaletteColors(){let e=this.generatePaletteColorScale();for(let t=0;t<this.config.steps;t++)this.palette[t]=e.getColor(t/(this.config.steps-1),this.config.interpolationMode)}generatePaletteColorScale(){let e=Fe(this.config.baseColor),o=new be([{position:0,color:this.config.scaleColorLight},{position:.5,color:this.config.baseColor},{position:1,color:this.config.scaleColorDark}]).trim(this.config.clipLight,1-this.config.clipDark),i=o.getColor(0),s=o.getColor(1),n=i,a=s;if(e.s>=this.config.saturationAdjustmentCutoff&&(n=xs(n,this.config.saturationLight),a=xs(a,this.config.saturationDark)),this.config.multiplyLight!==0){let l=ys(this.config.baseColor,n);n=pt(this.config.multiplyLight,this.config.interpolationMode,n,l)}if(this.config.multiplyDark!==0){let l=ys(this.config.baseColor,a);a=pt(this.config.multiplyDark,this.config.interpolationMode,a,l)}if(this.config.overlayLight!==0){let l=ws(this.config.baseColor,n);n=pt(this.config.overlayLight,this.config.interpolationMode,n,l)}if(this.config.overlayDark!==0){let l=ws(this.config.baseColor,a);a=pt(this.config.overlayDark,this.config.interpolationMode,a,l)}return this.config.baseScalePosition?this.config.baseScalePosition<=0?new be([{position:0,color:this.config.baseColor},{position:1,color:a.clamp()}]):this.config.baseScalePosition>=1?new be([{position:0,color:n.clamp()},{position:1,color:this.config.baseColor}]):new be([{position:0,color:n.clamp()},{position:this.config.baseScalePosition,color:this.config.baseColor},{position:1,color:a.clamp()}]):new be([{position:0,color:n.clamp()},{position:.5,color:this.config.baseColor},{position:1,color:a.clamp()}])}};Te.defaultPaletteConfig={baseColor:xe("#808080"),steps:11,interpolationMode:q.RGB,scaleColorLight:new V(1,1,1,1),scaleColorDark:new V(0,0,0,1),clipLight:.185,clipDark:.16,saturationAdjustmentCutoff:.05,saturationLight:.35,saturationDark:1.25,overlayLight:0,overlayDark:.25,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};Te.greyscalePaletteConfig={baseColor:xe("#808080"),steps:11,interpolationMode:q.RGB,scaleColorLight:new V(1,1,1,1),scaleColorDark:new V(0,0,0,1),clipLight:0,clipDark:0,saturationAdjustmentCutoff:0,saturationLight:0,saturationDark:0,overlayLight:0,overlayDark:0,multiplyLight:0,multiplyDark:0,baseScalePosition:.5};var eb={targetSize:63,spacing:4,scaleColorLight:Te.defaultPaletteConfig.scaleColorLight,scaleColorDark:Te.defaultPaletteConfig.scaleColorDark};var Er=class r{constructor(e){this.palette=[],this.config=Object.assign({},r.defaultPaletteConfig,e),this.regenPalettes()}regenPalettes(){let e=this.config.steps;(isNaN(e)||e<3)&&(e=3);let t=.14,o=.06,i=new V(t,t,t,1),s=94,a=new Te(Object.assign(Object.assign({},Te.greyscalePaletteConfig),{baseColor:i,baseScalePosition:(1-t)*100/s,steps:e})).palette,l=Io(this.config.baseColor),c=Fe(this.config.baseColor).l,u=(l+c)/2,g=this.matchRelativeLuminanceIndex(u,a)/(e-1),E=this.matchRelativeLuminanceIndex(t,a)/(e-1),A=Fe(this.config.baseColor),Y=Bt(Ve.fromObject({h:A.h,s:A.s,l:t})),Je=Bt(Ve.fromObject({h:A.h,s:A.s,l:o})),Se=new Array(5);Se[0]={position:0,color:new V(1,1,1,1)},Se[1]={position:g,color:this.config.baseColor},Se[2]={position:E,color:Y},Se[3]={position:.99,color:Je},Se[4]={position:1,color:new V(0,0,0,1)};let tl=new be(Se);this.palette=new Array(e);for(let Hr=0;Hr<e;Hr++){let rl=tl.getColor(Hr/(e-1),q.RGB);this.palette[Hr]=rl}}matchRelativeLuminanceIndex(e,t){let o=Number.MAX_VALUE,i=0,s=0,n=t.length;for(;s<n;s++){let a=Math.abs(Io(t[s])-e);a<o&&(o=a,i=s)}return i}};Er.defaultPaletteConfig={baseColor:xe("#808080"),steps:94};function Do(r,e){let t=r.relativeLuminance>e.relativeLuminance?r:e,o=r.relativeLuminance>e.relativeLuminance?e:r;return(t.relativeLuminance+.05)/(o.relativeLuminance+.05)}var de=Object.freeze({create(r,e,t){return new Mo(r,e,t)},from(r){return new Mo(r.r,r.g,r.b)}});function oa(r){let e={r:0,g:0,b:0,toColorString:()=>"",contrast:()=>0,relativeLuminance:0};for(let t in e)if(typeof e[t]!=typeof r[t])return!1;return!0}var Mo=class r extends V{constructor(e,t,o){super(e,t,o,1),this.toColorString=this.toStringHexRGB,this.contrast=Do.bind(null,this),this.createCSS=this.toColorString,this.relativeLuminance=To(this)}static fromObject(e){return new r(e.r,e.g,e.b)}};function No(r,e,t=0,o=r.length-1){if(o===t)return r[t];let i=Math.floor((o-t)/2)+t;return e(r[i])?No(r,e,t,i):No(r,e,i+1,o)}var ac=(-.1+Math.sqrt(.21))/2;function ia(r){return r.relativeLuminance<=ac}function ee(r){return ia(r)?-1:1}function lc(r,e,t){return typeof r=="number"?Rr.from(de.create(r,e,t)):Rr.from(r)}function cc(r){return oa(r)?Ho.from(r):Ho.from(de.create(r.r,r.g,r.b))}var Rr=Object.freeze({create:lc,from:cc}),Ho=class r{constructor(e,t){this.closestIndexCache=new Map,this.source=e,this.swatches=t,this.reversedSwatches=Object.freeze([...this.swatches].reverse()),this.lastIndex=this.swatches.length-1}colorContrast(e,t,o,i){o===void 0&&(o=this.closestIndexOf(e));let s=this.swatches,n=this.lastIndex,a=o;i===void 0&&(i=ee(e));let l=c=>Do(e,c)>=t;return i===-1&&(s=this.reversedSwatches,a=n-a),No(s,l,a,n)}get(e){return this.swatches[e]||this.swatches[ae(e,0,this.lastIndex)]}closestIndexOf(e){if(this.closestIndexCache.has(e.relativeLuminance))return this.closestIndexCache.get(e.relativeLuminance);let t=this.swatches.indexOf(e);if(t!==-1)return this.closestIndexCache.set(e.relativeLuminance,t),t;let o=this.swatches.reduce((i,s)=>Math.abs(s.relativeLuminance-e.relativeLuminance)<Math.abs(i.relativeLuminance-e.relativeLuminance)?s:i);return t=this.swatches.indexOf(o),this.closestIndexCache.set(e.relativeLuminance,t),t}static from(e){return new r(e,Object.freeze(new Er({baseColor:V.fromObject(e)}).palette.map(t=>{let o=xe(t.toStringHexRGB());return de.create(o.r,o.g,o.b)})))}};function sa(r,e,t,o,i,s,n,a,l){let c=r.source,u=e.closestIndexOf(t),p=Math.max(n,a,l),g=u>=p?-1:1,E=r.closestIndexOf(c),A=E+g*-1*o,Y=A+g*i,Je=A+g*s;return{rest:r.get(A),hover:r.get(E),active:r.get(Y),focus:r.get(Je)}}function na(r,e,t,o,i,s,n){let a=r.source,l=r.closestIndexOf(a),c=ee(e),u=l+(c===1?Math.min(o,i):Math.max(c*o,c*i)),p=r.colorContrast(e,t,u,c),g=r.closestIndexOf(p),$=g+c*Math.abs(o-i),E=c===1?o<i:c*o>c*i,A,Y;return E?(A=g,Y=$):(A=$,Y=g),{rest:r.get(A),hover:r.get(Y),active:r.get(A+c*s),focus:r.get(A+c*n)}}var Cs=de.create(1,1,1),aa=de.create(0,0,0),la=de.from(xe("#808080")),ca=de.from(xe("#DA1A5F"));function ua(r,e){return r.contrast(Cs)>=e?Cs:aa}function ha(r,e,t,o,i,s){let n=r.closestIndexOf(e),a=Math.max(t,o,i,s),l=n>=a?-1:1;return{rest:r.get(n+l*t),hover:r.get(n+l*o),active:r.get(n+l*i),focus:r.get(n+l*s)}}function da(r,e,t,o,i,s){let n=ee(e),a=r.closestIndexOf(e);return{rest:r.get(a-n*t),hover:r.get(a-n*o),active:r.get(a-n*i),focus:r.get(a-n*s)}}function pa(r,e,t){let o=r.closestIndexOf(e);return r.get(o-(o<t?t*-1:t))}function fa(r,e,t,o,i,s,n,a,l,c){let u=Math.max(t,o,i,s,n,a,l,c),p=r.closestIndexOf(e),g=p>=u?-1:1;return{rest:r.get(p+g*t),hover:r.get(p+g*o),active:r.get(p+g*i),focus:r.get(p+g*s)}}function ma(r,e,t,o,i,s){let n=ee(e),a=r.closestIndexOf(r.colorContrast(e,4.5)),l=a+n*Math.abs(t-o),c=n===1?t<o:n*t>n*o,u,p;return c?(u=a,p=l):(u=l,p=a),{rest:r.get(u),hover:r.get(p),active:r.get(u+n*i),focus:r.get(u+n*s)}}function ga(r,e){return r.colorContrast(e,3.5)}function va(r,e,t){return r.colorContrast(t,3.5,r.closestIndexOf(r.source),ee(e)*-1)}function ba(r,e){return r.colorContrast(e,14)}function xa(r,e){return r.colorContrast(e,4.5)}function Ye(r){return de.create(r,r,r)}var ya={LightMode:1,DarkMode:.23};function wa(r,e,t){return r.get(r.closestIndexOf(Ye(e))+t)}function Ca(r,e,t){let o=r.closestIndexOf(Ye(e))-t;return r.get(o-t)}function Sa(r,e){return r.get(r.closestIndexOf(Ye(e)))}function Or(r,e,t,o,i,s){return Math.max(r.closestIndexOf(Ye(e))+t,o,i,s)}function $a(r,e,t,o,i,s){return r.get(Or(r,e,t,o,i,s))}function ka(r,e,t,o,i,s){return r.get(Or(r,e,t,o,i,s)+t)}function Aa(r,e,t,o,i,s){return r.get(Or(r,e,t,o,i,s)+t*2)}function Ea(r,e,t,o,i,s){let n=r.closestIndexOf(e),a=ee(e),l=n+a*t,c=l+a*(o-t),u=l+a*(i-t),p=l+a*(s-t);return{rest:r.get(l),hover:r.get(c),active:r.get(u),focus:r.get(p)}}function Ra(r,e,t){return r.get(r.closestIndexOf(e)+ee(e)*t)}var{create:d}=dt;function b(r){return dt.create({name:r,cssCustomPropertyName:null})}var Bo=d("body-font").withDefault('aktiv-grotesk, "Segoe UI", Arial, Helvetica, sans-serif'),Ss=d("base-height-multiplier").withDefault(10),Fx=d("base-horizontal-spacing-multiplier").withDefault(3),jt=d("base-layer-luminance").withDefault(ya.DarkMode),ft=d("control-corner-radius").withDefault(4),$s=d("density").withDefault(0),W=d("design-unit").withDefault(4),Tx=d("direction").withDefault(So.ltr),zt=d("disabled-opacity").withDefault(.3),Ie=d("stroke-width").withDefault(1),le=d("focus-stroke-width").withDefault(2),Gt=d("type-ramp-base-font-size").withDefault("14px"),Ut=d("type-ramp-base-line-height").withDefault("20px"),Ix=d("type-ramp-minus-1-font-size").withDefault("12px"),_x=d("type-ramp-minus-1-line-height").withDefault("16px"),Lx=d("type-ramp-minus-2-font-size").withDefault("10px"),Px=d("type-ramp-minus-2-line-height").withDefault("16px"),Dx=d("type-ramp-plus-1-font-size").withDefault("16px"),Mx=d("type-ramp-plus-1-line-height").withDefault("24px"),Nx=d("type-ramp-plus-2-font-size").withDefault("20px"),Hx=d("type-ramp-plus-2-line-height").withDefault("28px"),Bx=d("type-ramp-plus-3-font-size").withDefault("28px"),jx=d("type-ramp-plus-3-line-height").withDefault("36px"),zx=d("type-ramp-plus-4-font-size").withDefault("34px"),Gx=d("type-ramp-plus-4-line-height").withDefault("44px"),Ux=d("type-ramp-plus-5-font-size").withDefault("46px"),qx=d("type-ramp-plus-5-line-height").withDefault("56px"),Wx=d("type-ramp-plus-6-font-size").withDefault("60px"),Xx=d("type-ramp-plus-6-line-height").withDefault("72px"),Yx=b("accent-fill-rest-delta").withDefault(0),uc=b("accent-fill-hover-delta").withDefault(4),hc=b("accent-fill-active-delta").withDefault(-5),dc=b("accent-fill-focus-delta").withDefault(0),pc=b("accent-foreground-rest-delta").withDefault(0),fc=b("accent-foreground-hover-delta").withDefault(6),mc=b("accent-foreground-active-delta").withDefault(-4),gc=b("accent-foreground-focus-delta").withDefault(0),qt=b("neutral-fill-rest-delta").withDefault(7),Wt=b("neutral-fill-hover-delta").withDefault(10),Xt=b("neutral-fill-active-delta").withDefault(5),Oa=b("neutral-fill-focus-delta").withDefault(0),vc=b("neutral-fill-input-rest-delta").withDefault(0),bc=b("neutral-fill-input-hover-delta").withDefault(0),xc=b("neutral-fill-input-active-delta").withDefault(0),yc=b("neutral-fill-input-focus-delta").withDefault(0),wc=b("neutral-fill-stealth-rest-delta").withDefault(0),Cc=b("neutral-fill-stealth-hover-delta").withDefault(5),Sc=b("neutral-fill-stealth-active-delta").withDefault(3),$c=b("neutral-fill-stealth-focus-delta").withDefault(0),kc=b("neutral-fill-strong-rest-delta").withDefault(0),Ac=b("neutral-fill-strong-hover-delta").withDefault(8),Ec=b("neutral-fill-strong-active-delta").withDefault(-5),Rc=b("neutral-fill-strong-focus-delta").withDefault(0),Yt=b("neutral-fill-layer-rest-delta").withDefault(3),Oc=b("neutral-stroke-rest-delta").withDefault(25),Vc=b("neutral-stroke-hover-delta").withDefault(40),Fc=b("neutral-stroke-active-delta").withDefault(16),Tc=b("neutral-stroke-focus-delta").withDefault(25),Ic=b("neutral-stroke-divider-rest-delta").withDefault(8),_c=d("neutral-color").withDefault(la),z=b("neutral-palette").withDefault(r=>Rr.from(_c.getValueFor(r))),Lc=d("accent-color").withDefault(ca),ks=b("accent-palette").withDefault(r=>Rr.from(Lc.getValueFor(r))),Pc=b("neutral-layer-card-container-recipe").withDefault({evaluate:r=>wa(z.getValueFor(r),jt.getValueFor(r),Yt.getValueFor(r))}),Qx=d("neutral-layer-card-container").withDefault(r=>Pc.getValueFor(r).evaluate(r)),Dc=b("neutral-layer-floating-recipe").withDefault({evaluate:r=>Ca(z.getValueFor(r),jt.getValueFor(r),Yt.getValueFor(r))}),Zx=d("neutral-layer-floating").withDefault(r=>Dc.getValueFor(r).evaluate(r)),Mc=b("neutral-layer-1-recipe").withDefault({evaluate:r=>Sa(z.getValueFor(r),jt.getValueFor(r))}),Nc=d("neutral-layer-1").withDefault(r=>Mc.getValueFor(r).evaluate(r)),Hc=b("neutral-layer-2-recipe").withDefault({evaluate:r=>$a(z.getValueFor(r),jt.getValueFor(r),Yt.getValueFor(r),qt.getValueFor(r),Wt.getValueFor(r),Xt.getValueFor(r))}),Jx=d("neutral-layer-2").withDefault(r=>Hc.getValueFor(r).evaluate(r)),Bc=b("neutral-layer-3-recipe").withDefault({evaluate:r=>ka(z.getValueFor(r),jt.getValueFor(r),Yt.getValueFor(r),qt.getValueFor(r),Wt.getValueFor(r),Xt.getValueFor(r))}),Kx=d("neutral-layer-3").withDefault(r=>Bc.getValueFor(r).evaluate(r)),jc=b("neutral-layer-4-recipe").withDefault({evaluate:r=>Aa(z.getValueFor(r),jt.getValueFor(r),Yt.getValueFor(r),qt.getValueFor(r),Wt.getValueFor(r),Xt.getValueFor(r))}),ey=d("neutral-layer-4").withDefault(r=>jc.getValueFor(r).evaluate(r)),K=d("fill-color").withDefault(r=>Nc.getValueFor(r)),Vr;(function(r){r[r.normal=4.5]="normal",r[r.large=7]="large"})(Vr||(Vr={}));var jo=d({name:"accent-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>sa(ks.getValueFor(r),z.getValueFor(r),e||K.getValueFor(r),uc.getValueFor(r),hc.getValueFor(r),dc.getValueFor(r),qt.getValueFor(r),Wt.getValueFor(r),Xt.getValueFor(r))}),mt=d("accent-fill-rest").withDefault(r=>jo.getValueFor(r).evaluate(r).rest),Qt=d("accent-fill-hover").withDefault(r=>jo.getValueFor(r).evaluate(r).hover),Zt=d("accent-fill-active").withDefault(r=>jo.getValueFor(r).evaluate(r).active),zo=d("accent-fill-focus").withDefault(r=>jo.getValueFor(r).evaluate(r).focus),Va=r=>(e,t)=>ua(t||mt.getValueFor(e),r),Go=b("foreground-on-accent-recipe").withDefault({evaluate:(r,e)=>Va(Vr.normal)(r,e)}),Fa=d("foreground-on-accent-rest").withDefault(r=>Go.getValueFor(r).evaluate(r,mt.getValueFor(r))),Ta=d("foreground-on-accent-hover").withDefault(r=>Go.getValueFor(r).evaluate(r,Qt.getValueFor(r))),Ia=d("foreground-on-accent-active").withDefault(r=>Go.getValueFor(r).evaluate(r,Zt.getValueFor(r))),_a=d("foreground-on-accent-focus").withDefault(r=>Go.getValueFor(r).evaluate(r,zo.getValueFor(r))),Uo=b("foreground-on-accent-large-recipe").withDefault({evaluate:(r,e)=>Va(Vr.large)(r,e)}),ty=d("foreground-on-accent-rest-large").withDefault(r=>Uo.getValueFor(r).evaluate(r,mt.getValueFor(r))),ry=d("foreground-on-accent-hover-large").withDefault(r=>Uo.getValueFor(r).evaluate(r,Qt.getValueFor(r))),oy=d("foreground-on-accent-active-large").withDefault(r=>Uo.getValueFor(r).evaluate(r,Zt.getValueFor(r))),iy=d("foreground-on-accent-focus-large").withDefault(r=>Uo.getValueFor(r).evaluate(r,zo.getValueFor(r))),zc=r=>(e,t)=>na(ks.getValueFor(e),t||K.getValueFor(e),r,pc.getValueFor(e),fc.getValueFor(e),mc.getValueFor(e),gc.getValueFor(e)),qo=d({name:"accent-foreground-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>zc(Vr.normal)(r,e)}),sy=d("accent-foreground-rest").withDefault(r=>qo.getValueFor(r).evaluate(r).rest),ny=d("accent-foreground-hover").withDefault(r=>qo.getValueFor(r).evaluate(r).hover),ay=d("accent-foreground-active").withDefault(r=>qo.getValueFor(r).evaluate(r).active),ly=d("accent-foreground-focus").withDefault(r=>qo.getValueFor(r).evaluate(r).focus),Wo=d({name:"neutral-fill-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>ha(z.getValueFor(r),e||K.getValueFor(r),qt.getValueFor(r),Wt.getValueFor(r),Xt.getValueFor(r),Oa.getValueFor(r))}),cy=d("neutral-fill-rest").withDefault(r=>Wo.getValueFor(r).evaluate(r).rest),uy=d("neutral-fill-hover").withDefault(r=>Wo.getValueFor(r).evaluate(r).hover),hy=d("neutral-fill-active").withDefault(r=>Wo.getValueFor(r).evaluate(r).active),dy=d("neutral-fill-focus").withDefault(r=>Wo.getValueFor(r).evaluate(r).focus),Xo=d({name:"neutral-fill-input-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>da(z.getValueFor(r),e||K.getValueFor(r),vc.getValueFor(r),bc.getValueFor(r),xc.getValueFor(r),yc.getValueFor(r))}),La=d("neutral-fill-input-rest").withDefault(r=>Xo.getValueFor(r).evaluate(r).rest),Pa=d("neutral-fill-input-hover").withDefault(r=>Xo.getValueFor(r).evaluate(r).hover),Da=d("neutral-fill-input-active").withDefault(r=>Xo.getValueFor(r).evaluate(r).active),py=d("neutral-fill-input-focus").withDefault(r=>Xo.getValueFor(r).evaluate(r).focus),Yo=d({name:"neutral-fill-stealth-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>fa(z.getValueFor(r),e||K.getValueFor(r),wc.getValueFor(r),Cc.getValueFor(r),Sc.getValueFor(r),$c.getValueFor(r),qt.getValueFor(r),Wt.getValueFor(r),Xt.getValueFor(r),Oa.getValueFor(r))}),Qo=d("neutral-fill-stealth-rest").withDefault(r=>Yo.getValueFor(r).evaluate(r).rest),Ma=d("neutral-fill-stealth-hover").withDefault(r=>Yo.getValueFor(r).evaluate(r).hover),Na=d("neutral-fill-stealth-active").withDefault(r=>Yo.getValueFor(r).evaluate(r).active),fy=d("neutral-fill-stealth-focus").withDefault(r=>Yo.getValueFor(r).evaluate(r).focus),Zo=d({name:"neutral-fill-strong-recipe",cssCustomPropertyName:null}).withDefault({evaluate:(r,e)=>ma(z.getValueFor(r),e||K.getValueFor(r),kc.getValueFor(r),Ac.getValueFor(r),Ec.getValueFor(r),Rc.getValueFor(r))}),my=d("neutral-fill-strong-rest").withDefault(r=>Zo.getValueFor(r).evaluate(r).rest),gy=d("neutral-fill-strong-hover").withDefault(r=>Zo.getValueFor(r).evaluate(r).hover),vy=d("neutral-fill-strong-active").withDefault(r=>Zo.getValueFor(r).evaluate(r).active),by=d("neutral-fill-strong-focus").withDefault(r=>Zo.getValueFor(r).evaluate(r).focus),Gc=b("neutral-fill-layer-recipe").withDefault({evaluate:(r,e)=>pa(z.getValueFor(r),e||K.getValueFor(r),Yt.getValueFor(r))}),xy=d("neutral-fill-layer-rest").withDefault(r=>Gc.getValueFor(r).evaluate(r)),Uc=b("focus-stroke-outer-recipe").withDefault({evaluate:r=>ga(z.getValueFor(r),K.getValueFor(r))}),pe=d("focus-stroke-outer").withDefault(r=>Uc.getValueFor(r).evaluate(r)),qc=b("focus-stroke-inner-recipe").withDefault({evaluate:r=>va(ks.getValueFor(r),K.getValueFor(r),pe.getValueFor(r))}),Jo=d("focus-stroke-inner").withDefault(r=>qc.getValueFor(r).evaluate(r)),Wc=b("neutral-foreground-hint-recipe").withDefault({evaluate:r=>xa(z.getValueFor(r),K.getValueFor(r))}),yy=d("neutral-foreground-hint").withDefault(r=>Wc.getValueFor(r).evaluate(r)),Xc=b("neutral-foreground-recipe").withDefault({evaluate:r=>ba(z.getValueFor(r),K.getValueFor(r))}),Fr=d("neutral-foreground-rest").withDefault(r=>Xc.getValueFor(r).evaluate(r)),Ko=d({name:"neutral-stroke-recipe",cssCustomPropertyName:null}).withDefault({evaluate:r=>Ea(z.getValueFor(r),K.getValueFor(r),Oc.getValueFor(r),Vc.getValueFor(r),Fc.getValueFor(r),Tc.getValueFor(r))}),Ha=d("neutral-stroke-rest").withDefault(r=>Ko.getValueFor(r).evaluate(r).rest),wy=d("neutral-stroke-hover").withDefault(r=>Ko.getValueFor(r).evaluate(r).hover),Cy=d("neutral-stroke-active").withDefault(r=>Ko.getValueFor(r).evaluate(r).active),Sy=d("neutral-stroke-focus").withDefault(r=>Ko.getValueFor(r).evaluate(r).focus),Yc=b("neutral-stroke-divider-recipe").withDefault({evaluate:(r,e)=>Ra(z.getValueFor(r),e||K.getValueFor(r),Ic.getValueFor(r))}),$y=d("neutral-stroke-divider-rest").withDefault(r=>Yc.getValueFor(r).evaluate(r)),Ba=dt.create({name:"height-number",cssCustomPropertyName:null}).withDefault(r=>(Ss.getValueFor(r)+$s.getValueFor(r))*W.getValueFor(r));var _e=Hi`(${Ss} + ${$s}) * ${W}`;var Qc="0 0 calc((var(--elevation) * 0.225px) + 2px) rgba(0, 0, 0, calc(.11 * (2 - var(--background-luminance, 1))))",Zc="0 calc(var(--elevation) * 0.4px) calc((var(--elevation) * 0.9px)) rgba(0, 0, 0, calc(.13 * (2 - var(--background-luminance, 1))))",As=`box-shadow: ${Qc}, ${Zc};`;var ja=(r,e)=>{let t=r.tagFor(U),o=r.name===r.tagFor(Re)?"":".listbox";return D`
        ${o?"":Oe("inline-flex")}

        :host ${o} {
            background: ${K};
            border: calc(${Ie} * 1px) solid ${Ha};
            border-radius: calc(${ft} * 1px);
            box-sizing: border-box;
            flex-direction: column;
            padding: calc(${W} * 1px) 0;
        }

        ${o?"":D`
            :host(:focus-within:not([disabled])) {
                border-color: ${pe};
                box-shadow: 0 0 0
                    calc((${le} - ${Ie}) * 1px)
                    ${pe} inset;
            }

            :host([disabled]) ::slotted(*) {
                cursor: ${te};
                opacity: ${zt};
                pointer-events: none;
            }
        `}

        ${o||":host([size])"} {
            max-height: calc(
                (var(--size) * ${_e} + (${W} * ${Ie} * 2)) * 1px
            );
            overflow-y: auto;
        }

        :host([size="0"]) ${o} {
            max-height: none;
        }
    `.withBehaviors(Nt(D`
                :host(:not([multiple]):${L}) ::slotted(${t}[aria-selected="true"]),
                :host([multiple]:${L}) ::slotted(${t}[aria-checked="true"]) {
                    border-color: ${C.ButtonText};
                    box-shadow: 0 0 0 calc(${le} * 1px) inset ${C.HighlightText};
                }

                :host(:not([multiple]):${L}) ::slotted(${t}[aria-selected="true"]) {
                    background: ${C.Highlight};
                    color: ${C.HighlightText};
                    fill: currentcolor;
                }

                ::slotted(${t}[aria-selected="true"]:not([aria-checked="true"])) {
                    background: ${C.Highlight};
                    border-color: ${C.HighlightText};
                    color: ${C.HighlightText};
                }
            `))};var za=(r,e)=>{let t=r.name===r.tagFor(he);return D`
        ${Oe("inline-flex")}

        :host {
            --elevation: 14;
            background: ${La};
            border-radius: calc(${ft} * 1px);
            border: calc(${Ie} * 1px) solid ${mt};
            box-sizing: border-box;
            color: ${Fr};
            font-family: ${Bo};
            height: calc(${_e} * 1px);
            position: relative;
            user-select: none;
            min-width: 250px;
            outline: none;
            vertical-align: top;
        }

        ${t?D`
            :host(:not([aria-haspopup])) {
                --elevation: 0;
                border: 0;
                height: auto;
                min-width: 0;
            }
        `:""}

        ${ja(r,e)}

        :host .listbox {
            ${As}
            border: none;
            display: flex;
            left: 0;
            position: absolute;
            width: 100%;
            z-index: 1;
        }

        .control + .listbox {
            --stroke-size: calc(${W} * ${Ie} * 2);
            max-height: calc(
                (var(--listbox-max-height) * ${_e} + var(--stroke-size)) * 1px
            );
        }

        ${t?D`
            :host(:not([aria-haspopup])) .listbox {
                left: auto;
                position: static;
                z-index: auto;
            }
        `:""}

        .listbox[hidden] {
            display: none;
        }

        .control {
            align-items: center;
            box-sizing: border-box;
            cursor: pointer;
            display: flex;
            font-size: ${Gt};
            font-family: inherit;
            line-height: ${Ut};
            min-height: 100%;
            padding: 0 calc(${W} * 2.25px);
            width: 100%;
        }

        :host(:not([disabled]):hover) {
            background: ${Pa};
            border-color: ${Qt};
        }

        :host(:${L}) {
            border-color: ${pe};
        }

        :host(:not([size]):not([multiple]):not([open]):${L}),
        :host([multiple]:${L}),
        :host([size]:${L}) {
            box-shadow: 0 0 0 calc(${le} * 1px) ${pe};
        }

        :host(:not([multiple]):not([size]):${L}) ::slotted(${r.tagFor(U)}[aria-selected="true"]:not([disabled])) {
            box-shadow: 0 0 0 calc(${le} * 1px) inset ${Jo};
            border-color: ${pe};
            background: ${zo};
            color: ${_a};
        }

        :host([disabled]) {
            cursor: ${te};
            opacity: ${zt};
        }

        :host([disabled]) .control {
            cursor: ${te};
            user-select: none;
        }

        :host([disabled]:hover) {
            background: ${Qo};
            color: ${Fr};
            fill: currentcolor;
        }

        :host(:not([disabled])) .control:active {
            background: ${Da};
            border-color: ${Zt};
            border-radius: calc(${ft} * 1px);
        }

        :host([open][position="above"]) .listbox {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            border-bottom: 0;
            bottom: calc(${_e} * 1px);
        }

        :host([open][position="below"]) .listbox {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            border-top: 0;
            top: calc(${_e} * 1px);
        }

        .selected-value {
            flex: 1 1 auto;
            font-family: inherit;
            min-width: calc(var(--listbox-scroll-width, 0) - (${W} * 4) * 1px);
            overflow: hidden;
            text-align: start;
            text-overflow: ellipsis;
            white-space: nowrap;
        }

        .indicator {
            flex: 0 0 auto;
            margin-inline-start: 1em;
        }

        slot[name="listbox"] {
            display: none;
            width: 100%;
        }

        :host([open]) slot[name="listbox"] {
            display: flex;
            position: absolute;
            ${As}
        }

        .end {
            margin-inline-start: auto;
        }

        .start,
        .end,
        .indicator,
        .select-indicator,
        ::slotted(svg) {
            /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
            fill: currentcolor;
            height: 1em;
            min-height: calc(${W} * 4px);
            min-width: calc(${W} * 4px);
            width: 1em;
        }

        ::slotted([role="option"]),
        ::slotted(option) {
            flex: 0 0 auto;
        }
    `.withBehaviors(Nt(D`
                :host(:not([disabled]):hover),
                :host(:not([disabled]):active) {
                    border-color: ${C.Highlight};
                }

                :host(:not([disabled]):${L}) {
                    background-color: ${C.ButtonFace};
                    box-shadow: 0 0 0 calc(${le} * 1px) ${C.Highlight};
                    color: ${C.ButtonText};
                    fill: currentcolor;
                    forced-color-adjust: none;
                }

                :host(:not([disabled]):${L}) .listbox {
                    background: ${C.ButtonFace};
                }

                :host([disabled]) {
                    border-color: ${C.GrayText};
                    background-color: ${C.ButtonFace};
                    color: ${C.GrayText};
                    fill: currentcolor;
                    opacity: 1;
                    forced-color-adjust: none;
                }

                :host([disabled]:hover) {
                    background: ${C.ButtonFace};
                }

                :host([disabled]) .control {
                    color: ${C.GrayText};
                    border-color: ${C.GrayText};
                }

                :host([disabled]) .control .select-indicator {
                    fill: ${C.GrayText};
                }

                :host(:${L}) ::slotted([aria-selected="true"][role="option"]),
                :host(:${L}) ::slotted(option[aria-selected="true"]),
                :host(:${L}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
                    background: ${C.Highlight};
                    border-color: ${C.ButtonText};
                    box-shadow: 0 0 0 calc(${le} * 1px) inset ${C.HighlightText};
                    color: ${C.HighlightText};
                    fill: currentcolor;
                }

                .start,
                .end,
                .indicator,
                .select-indicator,
                ::slotted(svg) {
                    color: ${C.ButtonText};
                    fill: currentcolor;
                }
            `))};var Ga=(r,e)=>D`
    ${za(r,e)}

    :host(:empty) .listbox {
        display: none;
    }

    :host([disabled]) *,
    :host([disabled]) {
        cursor: ${te};
        user-select: none;
    }

    .selected-value {
        -webkit-appearance: none;
        background: transparent;
        border: none;
        color: inherit;
        font-size: ${Gt};
        line-height: ${Ut};
        height: calc(100% - (${Ie} * 1px));
        margin: auto 0;
        width: 100%;
    }

    .selected-value:hover,
    .selected-value:${L},
    .selected-value:disabled,
    .selected-value:active {
        outline: none;
    }
`;var Es=class extends ne{maxHeightChanged(e,t){this.updateComputedStylesheet()}updateComputedStylesheet(){this.computedStylesheet&&this.$fastController.removeStyles(this.computedStylesheet);let e=Math.floor(this.maxHeight/Ba.getValueFor(this)).toString();this.computedStylesheet=D`
            :host {
                --listbox-max-height: ${e};
            }
        `,this.$fastController.addStyles(this.computedStylesheet)}},Rs=Es.compose({baseName:"combobox",baseClass:ne,template:Yn,styles:Ga,shadowOptions:{delegatesFocus:!0},indicator:`
        <svg
            class="select-indicator"
            part="select-indicator"
            viewBox="0 0 12 7"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M11.85.65c.2.2.2.5 0 .7L6.4 6.84a.55.55 0 01-.78 0L.14 1.35a.5.5 0 11.71-.7L6 5.8 11.15.65c.2-.2.5-.2.7 0z"
            />
        </svg>
    `});var Ua=(r,e)=>D`
        ${Oe("inline-flex")} :host {
            align-items: center;
            font-family: ${Bo};
            border-radius: calc(${ft} * 1px);
            border: calc(${le} * 1px) solid transparent;
            box-sizing: border-box;
            background: ${Qo};
            color: ${Fr};
            cursor: pointer;
            flex: 0 0 auto;
            fill: currentcolor;
            font-size: ${Gt};
            height: calc(${_e} * 1px);
            line-height: ${Ut};
            margin: 0 calc((${W} - ${le}) * 1px);
            outline: none;
            overflow: hidden;
            padding: 0 1ch;
            user-select: none;
            white-space: nowrap;
        }

        :host(:not([disabled]):not([aria-selected="true"]):hover) {
            background: ${Ma};
        }

        :host(:not([disabled]):not([aria-selected="true"]):active) {
            background: ${Na};
        }

        :host([aria-selected="true"]) {
            background: ${mt};
            color: ${Fa};
        }

        :host(:not([disabled])[aria-selected="true"]:hover) {
            background: ${Qt};
            color: ${Ta};
        }

        :host(:not([disabled])[aria-selected="true"]:active) {
            background: ${Zt};
            color: ${Ia};
        }

        :host([disabled]) {
            cursor: ${te};
            opacity: ${zt};
        }

        .content {
            grid-column-start: 2;
            justify-self: start;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .start,
        .end,
        ::slotted(svg) {
            display: flex;
        }

        ::slotted(svg) {
            /* TODO: adaptive typography https://github.com/microsoft/fast/issues/2432 */
            height: calc(${W} * 4px);
            width: calc(${W} * 4px);
        }

        ::slotted([slot="end"]) {
            margin-inline-start: 1ch;
        }

        ::slotted([slot="start"]) {
            margin-inline-end: 1ch;
        }

        :host([aria-checked="true"][aria-selected="false"]) {
            border-color: ${pe};
        }

        :host([aria-checked="true"][aria-selected="true"]) {
            border-color: ${pe};
            box-shadow: 0 0 0 calc(${le} * 2 * 1px) inset
                ${Jo};
        }
    `.withBehaviors(Nt(D`
                :host {
                    border-color: transparent;
                    forced-color-adjust: none;
                    color: ${C.ButtonText};
                    fill: currentcolor;
                }

                :host(:not([aria-selected="true"]):hover),
                :host([aria-selected="true"]) {
                    background: ${C.Highlight};
                    color: ${C.HighlightText};
                }

                :host([disabled]),
                :host([disabled][aria-selected="false"]:hover) {
                    background: ${C.Canvas};
                    color: ${C.GrayText};
                    fill: currentcolor;
                    opacity: 1;
                }

                :host([aria-checked="true"][aria-selected="false"]) {
                    background: ${C.ButtonFace};
                    color: ${C.ButtonText};
                    border-color: ${C.ButtonText};
                }

                :host([aria-checked="true"][aria-selected="true"]),
                :host([aria-checked="true"][aria-selected="true"]:hover) {
                    background: ${C.Highlight};
                    color: ${C.HighlightText};
                    border-color: ${C.ButtonText};
                }
            `));var Os=U.compose({baseName:"option",template:Zn,styles:Ua});function qa(r){return us.getOrCreate(r).withPrefix("fast")}var Wa="2.3rem",Jc="100px",Tr="1",Xa="0.25rem",Kc="1rem",Vs="4",Ya=()=>D`
  ${Oe("inline-flex")} :host {
    background: var(--select-field-background-color);
    box-sizing: border-box;
    color: var(--foreground-color);
    contain: contents;
    font-family: inherit;
    position: relative;
    user-select: none;
    min-width: ${Jc};
    outline: none;
    vertical-align: top;
  }
  .control {
    align-items: center;
    box-sizing: border-box;
    border: calc(${Tr} * 1px) solid var(--field-border-color);
    border-radius: ${Xa};
    cursor: pointer;
    display: flex;
    font-family: inherit;
    font-size: inherit;
    line-height: normal;
    min-height: 100%;
    padding: 2px 6px 2px 8px;
    width: 100%;
  }
  input {
    -webkit-appearance: none;
    font: inherit;
    background: transparent;
    border: 0;
    color: inherit;
    outline: none;
    padding-top: 0.375rem;
    padding-bottom: 0.375rem;
  }
  .listbox {
    background: var(--background-color);
    --tw-ring-color: var(--focus-border-color);
    --tw-ring-offset-width: 0px;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
    border-radius: ${Kc};
    box-sizing: border-box;
    display: inline-flex;
    flex-direction: column;
    left: 0;
    max-height: 200px;
    padding: 0 0 calc(${Vs} * 1px) 0;
    overflow-y: auto;
    position: absolute;
    width: 100%;
    z-index: 1;
  }
  .listbox[hidden] {
    display: none;
  }
  :host(:${L}) .control {
    border-color: var(--focus-border-color);
  }
  :host(:not([disabled]):hover) {
    background: var(--select-field-background-color);
    border-color: var(--field-border-color);
  }
  :host(:${L}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
    background: var(--active-selection-background-color);
    border: calc(${Tr} * 1px) solid var(--focus-border-color);
    color: var(--foreground-color);
  }
  :host([disabled]) {
    cursor: ${te};
    opacity: 0.4;
  }
  :host([disabled]) .control {
    cursor: ${te};
    user-select: none;
  }
  :host([disabled]:hover) {
    background: var(--select-field-background-color);
    color: var(--foreground-color);
    fill: currentcolor;
  }
  :host(:not([disabled])) .control:active {
    --tw-ring-color: var(--focus-border-color);
    --tw-ring-offset-width: 0px;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  }
  :host(:focus-within) .control {
    --tw-ring-color: var(--focus-border-color);
    --tw-ring-offset-width: 0px;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  }
  :host(:empty) .listbox {
    display: none;
  }
  :host([open]) .control {
    --tw-ring-color: var(--focus-border-color);
    --tw-ring-offset-width: 0px;
    box-shadow: var(--tw-ring-inset) 0 0 0
      calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  }
  :host([open][position='above']) .listbox,
  :host([open][position='below']) .control {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
  :host([open][position='above']) .control,
  :host([open][position='below']) .listbox {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  :host([open][position='above']) .listbox {
    bottom: ${Wa};
  }
  :host([open][position='below']) .listbox {
    top: ${Wa};
  }
  .selected-value {
    flex: 1 1 auto;
    font-family: inherit;
    overflow: hidden;
    text-align: start;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .indicator {
    flex: 0 0 auto;
    margin-inline-start: 1em;
  }
  slot[name='listbox'] {
    display: none;
    width: 100%;
  }
  :host([open]) slot[name='listbox'] {
    display: flex;
    position: absolute;
  }
  .end {
    margin-inline-start: auto;
  }
  .start,
  .end,
  .indicator,
  .select-indicator,
  ::slotted(svg),
  ::slotted(span) {
    fill: currentcolor;
    height: 1em;
    min-height: calc(${Vs} * 4px);
    min-width: calc(${Vs} * 4px);
    width: 1em;
  }
  ::slotted([role='option']),
  ::slotted(option) {
    flex: 0 0 auto;
  }
`,Qa=()=>D`
  ${Oe("inline-flex")} :host {
    font-family: inherit;
    border-radius: ${Xa};
    border: calc(${Tr} * 1px) solid transparent;
    box-sizing: border-box;
    color: var(--foreground-color);
    cursor: pointer;
    fill: currentcolor;
    font-size: inherit;
    line-height: normal;
    margin: 0;
    outline: none;
    overflow: hidden;
    padding: 0.125rem 0.5rem 0.5rem;
    user-select: none;
    white-space: nowrap;
  }
  :host(:${L}) {
    border-color: var(--focus-border-color);
    background: var(--active-selection-background-color);
    color: var(--foreground-color);
  }
  :host([aria-selected='true']) {
    background: var(--active-selection-background-color);
    border: calc(${Tr} * 1px) solid var(--focus-border-color);
    color: var(--foreground-color);
  }
  :host(:active) {
    background: var(--active-selection-background-color);
    color: var(--foreground-color);
  }
  :host(:not([aria-selected='true']):hover) {
    background: var(--active-selection-background-color);
    border: calc(${Tr} * 1px) solid var(--focus-border-color);
    color: var(--foreground-color);
  }
  :host(:not([aria-selected='true']):active) {
    background: var(--active-selection-background-color);
    color: var(--foreground-color);
  }
  :host([disabled]) {
    cursor: ${te};
    opacity: 0.4;
  }
  :host([disabled]:hover) {
    background-color: inherit;
  }
  .content {
    grid-column-start: 2;
    justify-self: start;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;var Fs={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},_r=r=>(...e)=>({_$litDirective$:r,values:e}),Ir=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,o){this._$Ct=e,this._$AM=t,this._$Ci=o}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}};var{I:S0}=rn;var Za=r=>r.strings===void 0;var Lr=(r,e)=>{var t,o;let i=r._$AN;if(i===void 0)return!1;for(let s of i)(o=(t=s)._$AO)===null||o===void 0||o.call(t,e,!1),Lr(s,e);return!0},ei=r=>{let e,t;do{if((e=r._$AM)===void 0)break;t=e._$AN,t.delete(r),r=e}while(t?.size===0)},Ja=r=>{for(let e;e=r._$AM;r=e){let t=e._$AN;if(t===void 0)e._$AN=t=new Set;else if(t.has(r))break;t.add(r),ru(e)}};function eu(r){this._$AN!==void 0?(ei(this),this._$AM=r,Ja(this)):this._$AM=r}function tu(r,e=!1,t=0){let o=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(e)if(Array.isArray(o))for(let s=t;s<o.length;s++)Lr(o[s],!1),ei(o[s]);else o!=null&&(Lr(o,!1),ei(o));else Lr(this,r)}var ru=r=>{var e,t,o,i;r.type==Fs.CHILD&&((e=(o=r)._$AP)!==null&&e!==void 0||(o._$AP=tu),(t=(i=r)._$AQ)!==null&&t!==void 0||(i._$AQ=eu))},ti=class extends Ir{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,o){super._$AT(e,t,o),Ja(this),this.isConnected=e._$AU}_$AO(e,t=!0){var o,i;e!==this.isConnected&&(this.isConnected=e,e?(o=this.reconnected)===null||o===void 0||o.call(this):(i=this.disconnected)===null||i===void 0||i.call(this)),t&&(Lr(this,e),ei(this))}setValue(e){if(Za(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}};var ri=class extends ti{constructor(){super(...arguments),this.prevData={}}render(e){return P}update(e,[t]){var o;this.element!==e.element&&(this.element=e.element),this.host=((o=e.options)===null||o===void 0?void 0:o.host)||this.element,this.apply(t),this.groom(t),this.prevData={...t}}apply(e){if(!e)return;let{prevData:t,element:o}=this;for(let i in e){let s=e[i];s!==t[i]&&(o[i]=s)}}groom(e){let{prevData:t,element:o}=this;if(t)for(let i in t)(!e||!(i in e)&&o[i]===t[i])&&(o[i]=void 0)}},_0=_r(ri),oi=class extends ri{constructor(){super(...arguments),this.eventData={}}apply(e){if(e)for(let t in e){let o=e[t];o!==this.eventData[t]&&this.applyEvent(t,o)}}applyEvent(e,t){let{prevData:o,element:i}=this;this.eventData[e]=t,o[e]&&i.removeEventListener(e,this,t),i.addEventListener(e,this,t)}groom(e){let{prevData:t,element:o}=this;if(t)for(let i in t)(!e||!(i in e)&&o[i]===t[i])&&this.groomEvent(i,t[i])}groomEvent(e,t){let{element:o}=this;delete this.eventData[e],o.removeEventListener(e,this,t)}handleEvent(e){let t=this.eventData[e.type];typeof t=="function"?t.call(this.host,e):t.handleEvent(e)}disconnected(){let{eventData:e,element:t}=this;for(let o in e){let i=o.slice(1),s=e[o];t.removeEventListener(i,this,s)}}reconnected(){let{eventData:e,element:t}=this;for(let o in e){let i=o.slice(1),s=e[o];t.addEventListener(i,this,s)}}},L0=_r(oi),Ts=class extends oi{apply(e){if(!e)return;let{prevData:t,element:o}=this;for(let i in e){let s=e[i];if(s===t[i])continue;let n=i.slice(1);switch(i[0]){case"@":this.eventData[n]=s,this.applyEvent(n,s);break;case".":o[n]=s;break;case"?":s?o.setAttribute(n,""):o.removeAttribute(n);break;default:s!=null?o.setAttribute(i,String(s)):o.removeAttribute(i);break}}}groom(e){let{prevData:t,element:o}=this;if(t)for(let i in t){let s=i.slice(1);if(!e||!(i in e)&&o[s]===t[i])switch(i[0]){case"@":this.groomEvent(s,t[i]);break;case".":o[s]=void 0;break;case"?":o.removeAttribute(s);break;default:o.removeAttribute(i);break}}}},B=_r(Ts);var X="focus:ring-2 focus:ring-focusBorder focus:outline-none",ye="bg-fieldBackground border border-fieldBorder",we="px-2 py-1.5",Qe=r=>r?"!ring-2 !ring-error focus:!ring-error":"",Ka=r=>r?"--border-width: 1; --field-border-color: var(--vscode-inputValidation-errorBorder); --focus-border-color: var(--vscode-inputValidation-errorBorder); --vscode-focusBorder: var(--vscode-inputValidation-errorBorder);":"";var el=r=>class extends r{render(){return h`
        <div
          class="${this.shouldRenderError()?"border-error":this.shouldRenderChanged()?"border-primary":"border-transparent"} flex flex-col border-l-4 py-2 pl-3"
        >
          <label for="${this.fieldId}"
            >${this.option.name}${this.option.isRequired?"*":""}</label
          >
          <div class="mt-2 flex flex-row items-start gap-2">
            ${this.renderField()}
            <p class="text-mutedForeground self-center">
              ${this.option.description}
            </p>
            ${G(this.shouldRenderError()&&typeof this.validation=="string",()=>h`<p
                class="text-sm text-error ${G(this.editor==="intellij",()=>"mt-1")}"
                id="${this.fieldId}-error"
                aria-live="polite"
              >
                ${this.validation}
              </p>
              </div>`)}
          </div>
        </div>
      `}};var ii=r=>{class e extends r{constructor(...i){super();this.touched=!1;this.isDefaultValue=!0;this.submitted=!1;new re(this,{context:ki,callback:s=>{this.formValuesService=s,s.registerValidationListener(this.option.name,n=>this.validation=n),s.registerTouchedListener(this.option.name,n=>this.touched=n),s.registerDefaultValueListener(this.option.name,n=>this.isDefaultValue=n)},subscribe:!1}),new re(this,{context:eo,callback:s=>this.submitted=s,subscribe:!0}),new re(this,{context:hr,callback:s=>this.generatorContext=s,subscribe:!0})}getFormValues(){return this.formValuesService.getFormValues()}shouldRenderError(){return this.validation!==void 0&&this.validation!==!0&&(this.touched||this.submitted)}shouldRenderChanged(){return this.touched&&!this.isDefaultValue}createRenderRoot(){return this}}return f([F()],e.prototype,"validation",2),f([F()],e.prototype,"touched",2),f([F()],e.prototype,"isDefaultValue",2),f([F()],e.prototype,"submitted",2),f([F()],e.prototype,"generatorContext",2),e};var ce=r=>{class e extends ii(M(r)){dispatchValue(i){let s=Pe(this.option),n=Zr(i,s);this.dispatchEvent(new CustomEvent("option-changed",{bubbles:!0,composed:!0,detail:{name:this.option.name,value:i,isDefaultValue:n}}))}firstUpdated(i){if(super.updated(i),this.generatorContext){let a=this.generatorContext.prefillValues?.[this.option.name];if(a){this.setFieldValue(a),this.dispatchValue(a);return}}let s=Pe(this.option);if(s){this.setFieldValue(s),this.dispatchValue(s);return}let n=this.getFormValues()[this.option.name];if(n){this.setFieldValue(n),this.dispatchValue(n);return}this.dispatchValue(void 0)}get fieldId(){return`${this.option.name}-field`}get ariaAttributes(){return{id:this.fieldId,"aria-invalid":`${this.shouldRenderError()}`,"aria-describedby":`${this.fieldId}-error`}}createRenderRoot(){return this}setFieldValue(i){throw new Error("Not implemented")}renderField(){throw new Error("Not implemented")}}return f([R()],e.prototype,"option",2),e};var si=class extends el(ce(w)){renderField(){return this.editor==="intellij"?h`<input
        type="checkbox"
        class="form-checkbox ${ye} checked:bg-primary ${X} h-5 w-5 rounded checked:border-transparent focus:ring-offset-0"
        @input="${this.handleChange}"
        ${B(this.ariaAttributes)}
      />`:h`<vscode-checkbox
        @change="${this.handleChange}"
        style="${this.shouldRenderError()?"--border-width: 1; --checkbox-border: var(--vscode-inputValidation-errorBorder); --focus-border: var(--vscode-inputValidation-errorBorder);":""}"
        ${B(this.ariaAttributes)}
        ?invalid=${this.shouldRenderError()}
      ></vscode-checkbox>`}setFieldValue(e){let t=this.renderRoot.querySelector(this.editor==="intellij"?"input":"vscode-checkbox");t&&(t.checked=!!e)}handleChange(e){let t=e.target.checked;this.dispatchValue(t)}};si=f([k("checkbox-field")],si);var Ce=r=>class extends r{render(){return h`
        <div
          class="${this.shouldRenderError()?"border-error":this.shouldRenderChanged()?"border-primary":"border-transparent"} flex flex-col border-l-4 py-2 pl-3"
        >
          <div class="flex items-center gap-3">
            <label for="${this.fieldId}"
              >${this.option.name}${this.option.isRequired?"*":""}</label
            >
            ${G(this.option["x-hint"],()=>h`
                  <popover-element
                    class="flex items-start"
                    .content="${this.option["x-hint"]}"
                  >
                    <icon-element class="flex items-start" icon="question">
                    </icon-element>
                  </popover-element>
                `)}
          </div>
          <p class="text-mutedForeground mb-2">${this.option.description}</p>
          ${this.renderField()}
          ${G(this.shouldRenderError()&&typeof this.validation=="string",()=>h`<p
                class="text-error ${G(this.editor==="intellij",()=>"mt-1")} text-sm"
                id="${this.fieldId}-error"
                aria-live="polite"
              >
                ${this.validation}
              </p>`)}
        </div>
      `}};var Pr=class extends Ce(ce(w)){constructor(){super(...arguments);this.elements=[]}renderField(){return h`<div>
      <div class="flex flex-row gap-2">
        ${this.renderInputField()}
        <button-element
          text="Add"
          appearance="secondary"
          @click="${this.addValue}"
          data-cy="${this.fieldId}-add-button"
          class="flex items-center self-center"
          style="${this.shouldRenderError()?"--field-border-color: var(--error-color); --focus-border-color: var(--error-color);":""}"
        ></button-element>
      </div>
      <div class="mt-2">
        <p>${this.elements.length} items</p>
        <div class="mt-2 flex flex-row gap-4">
          ${this.elements.map((t,o)=>h`<badge-element
                text="${t}"
                fieldId="${this.fieldId}"
                @remove="${()=>this.removeValue(o)}"
              ></badge-element>`)}
        </div>
      </div>
    </div>`}renderInputField(){return this.editor==="intellij"?h` <input
        class="${ye} ${X} ${we} ${Qe(this.shouldRenderError())})} grow rounded"
        type="text"
        @keydown="${this.handleEnterKeyAdd}"
        ${B(this.ariaAttributes)}
      />`:h`<vscode-textfield
        type="text"
        class="focus:border-focusBorder grow "
        @keydown="${this.handleEnterKeyAdd}"
        style="border-width: calc(var(--border-width) * 1px);"
        ?invalid=${this.shouldRenderError()}
        ${B(this.ariaAttributes)}
      ></vscode-textfield>`}get inputFieldSelector(){return this.editor==="intellij"?"input":"vscode-textfield"}handleEnterKeyAdd(t){t.key==="Enter"&&this.addValue()}addValue(){let t=this.querySelector(this.inputFieldSelector),o=t?.value;o&&(this.elements=[...this.elements,o],t.value="",this.dispatchValue(this.elements))}removeValue(t){let o=[...this.elements];o.splice(t,1),this.elements=o,this.dispatchValue(this.elements)}setFieldValue(t){typeof t=="string"?this.elements=t.split(","):Array.isArray(t)&&(this.elements=t)}};f([F()],Pr.prototype,"elements",2),Pr=f([k("array-field")],Pr);var ni=class extends Ce(ce(w)){renderField(){let e=this.shouldRenderError();return this.editor==="intellij"?h`
        <input
          class="${ye} ${X} ${we} ${Qe(e)} rounded"
          type="text"
          @input="${this.handleChange}"
          ${B(this.ariaAttributes)}
        />
      `:h`
        <vscode-textfield
          type="text"
          @input="${this.handleChange}"
          style="border-width: calc(var(--border-width) * 1px);"
          class="focus:border-focusBorder w-full"
          ?invalid=${this.shouldRenderError()}
          ${B(this.ariaAttributes)}
        >
        </vscode-textfield>
      `}handleChange(e){let t=e.target.value;this.dispatchValue(t)}setFieldValue(e){let t=this.renderRoot.querySelector(this.editor==="intellij"?"input":"vscode-textfield");t&&(t.value=`${e}`)}};ni=f([k("input-field")],ni);function*Le(r,e){if(r!==void 0){let t=0;for(let o of r)yield e(o,t++)}}var Dr=class extends Ce(ce(w)){constructor(){super(...arguments);this.selectedElements=[]}renderField(){return h`
      <div class="flex flex-col">
        ${this.renderSelectField()}
        <div class="mt-2">
          ${G(this.selectedElements.length>0,()=>h`<p>Selected:</p>`)}
          <div class="mt-2 flex flex-row gap-4">
            ${this.selectedElements.map((t,o)=>h`<badge-element
                  text="${t}"
                  fieldId="${this.fieldId}"
                  @remove="${()=>this.removeValue(o)}"
                ></badge-element>`)}
          </div>
        </div>
      </div>
    `}renderSelectField(){if(this.editor==="intellij")return h`<select
        @change="${this.addValue}"
        class="bg-selectFieldBackground border-fieldBorder ${X} ${we} ${Qe(this.shouldRenderError())})} grow rounded border"
        ${B(this.ariaAttributes)}
      >
        <option value="">
          ${this.selectedElements.length?"Add another value":"Select a value"}
        </option>
        ${Le(this.extractItemOptions(this.option),t=>h`<option value="${t}" title="${t}">${t}</option>`)}
      </select>`;{let t=this.shouldRenderError();return h` <vscode-single-select
        @change="${this.addValue}"
        style="${Ka(t)}"
        ?invalid=${t}
        ${B(this.ariaAttributes)}
      >
        <vscode-option value="">
          ${this.selectedElements.length?"Add another value":"Select a value"}
        </vscode-option>
        ${Le(this.extractItemOptions(this.option),o=>h`<vscode-option value="${o}" title="${o}"
              >${o}</vscode-option
            >`)}
      </vscode-single-select>`}}removeValue(t){let o=[...this.selectedElements];o.splice(t,1),this.selectedElements=o,this.dispatchValue(this.selectedElements)}addValue(t){let o=t.target,i=o.value;i&&(this.selectedElements=[...this.selectedElements,i],o.value="",this.dispatchValue(this.selectedElements))}setFieldValue(t){let o=[];typeof t=="string"?o=t.split(","):Array.isArray(t)&&(o=t);let i=this.extractItemOptions(this.option);this.selectedElements=o.filter(s=>i.includes(s)),this.dispatchValue(this.selectedElements)}extractItemOptions(t){if(!t.items)return[];let o;return Array.isArray(t.items)?o=t.items:o=t.items.enum,o.filter(i=>!this.selectedElements.includes(i))}};f([F()],Dr.prototype,"selectedElements",2),Dr=f([k("multiselect-field")],Dr);var ai=class extends Ce(ce(w)){renderField(){return this.editor==="intellij"?this.renderIntellij():this.renderVscode()}renderIntellij(){return h`
      <select
        @change="${this.handleChange}"
        class="form-select bg-selectFieldBackground border-fieldBorder ${X} ${we} ${Qe(this.shouldRenderError())} rounded border"
        ${B(this.ariaAttributes)}
      >
        ${G(Pe(this.option)===void 0,()=>h`<option value="">--</option>`)}
        ${Le(De(this.option),e=>h`<option value="${e}" title="${e}">${e}</option>`)}
      </select>
    `}renderVscode(){let e=De(this.option),t=Pe(this.option);return h`
      <vscode-single-select
        @change="${this.handleChange}"
        class="w-full"
        ?invalid=${this.shouldRenderError()}
        ${B(this.ariaAttributes)}
      >
        ${G(t===void 0,()=>h`<vscode-option value="">--</vscode-option>`)}
        ${Le(e,o=>h`<vscode-option value="${o}" title="${o}"
              >${o}</vscode-option
            >`)}
      </vscode-single-select>
    `}setFieldValue(e){let t=this.renderRoot.querySelector(this.editor==="intellij"?"select":"vscode-single-select");t&&(t.value=e?`${e}`:"")}handleChange(e){let t=e.target.value;this.dispatchValue(t)}};ai=f([k("select-field")],ai);var li=class extends Ce(ce(w)){renderField(){return this.editor==="vscode"?this.renderVSCode():this.renderIntellij()}renderVSCode(){return h`
      <vscode-single-select
        @change="${this.handleChange}"
        ${B(this.ariaAttributes)}
        ?invalid=${this.shouldRenderError()}
        class="w-full"
        filter="fuzzy"
        combobox
      >
        ${Le(De(this.option),e=>h`<vscode-option value="${e}">${e}</vscode-option>`)}
      </vscode-single-select>
    `}renderIntellij(){return h`
      <intellij-combobox
        autocomplete="list"
        position="below"
        @change="${this.handleChange}"
        ${B(this.ariaAttributes)}
      >
        ${Le(De(this.option),e=>h`<intellij-option value="${e}">${e}</intellij-option>`)}
      </intellij-combobox>
    `}updated(){let e=this.editor==="vscode"?"vscode-combobox":"intellij-combobox",t=this.renderRoot.querySelector(e);t&&(t.filterOptions=function(){(!this.autocomplete||this.autocomplete===ut.none)&&(this.filter="");let o=this.filter.toLowerCase();this.filteredOptions=this._options.filter(i=>i.text.toLowerCase().includes(this.filter.toLowerCase())),this.isAutocompleteList&&(!this.filteredOptions.length&&!o&&(this.filteredOptions=this._options),this._options.forEach(i=>{i.hidden=!this.filteredOptions.includes(i)}))})}handleChange(e){let t=e.target.value;this.dispatchValue(t)}setFieldValue(e){let t=this.editor==="vscode"?"vscode-combobox":"intellij-combobox",o=this.renderRoot.querySelector(t);o&&customElements.whenDefined(t).then(()=>{o.value=e?`${e}`:""})}};li=f([k("autocomplete-field")],li);var Jt=window?.navigator?.userAgent?.includes("Win")?"\\":"/",Kt=class extends ro(M(w)){constructor(){super(...arguments);this._path="";this.isEditable=!1}set path(t){this._path=t.startsWith(Jt)?t.substring(1):t}get path(){return this._path}toggleEdit(){this.isEditable=!this.isEditable,this.isEditable&&setTimeout(()=>{this.renderRoot.querySelector(this.editor==="vscode"?"vscode-textfield":"input")?.focus()},0)}confirmEdit(){this.path=this.renderRoot.querySelector(this.editor==="vscode"?"vscode-textfield":"input")?.value||"",this.isEditable=!1,this.dispatchValue()}editToSegment(t){let o=this.path.split(Jt);this.path=o.slice(0,t+1).join(Jt),this.dispatchValue()}resetPath(){this.path="",this.isEditable=!1,this.dispatchValue()}render(){let t=this.path.split(Jt),o=t.filter(i=>!!i).length>0;return h`
      <div
        data-cy="cwd-breadcrumb"
        class="text-mutedForeground flex flex-wrap items-center rounded py-2 text-sm leading-none"
      >
        <span class="pr-2"> Working Directory: </span>
        <span
          @click="${o?this.resetPath:()=>{}}"
          class="${o?"hover:text-primary cursor-pointer underline":""}"
        >
          {workspaceRoot}
        </span>
        <span class="mx-2">${Jt}</span>
        ${this.isEditable?h`
              ${this.renderInlineEdit()}
              <icon-element
                @click="${this.toggleEdit}"
                icon="close"
                data-cy="inline-edit-cancel"
              ></icon-element>
              <icon-element
                @click="${this.confirmEdit}"
                icon="check"
                data-cy="inline-edit-confirm"
              ></icon-element>
            `:h`
              ${t.map((i,s)=>h`
                  <span
                    data-cy="cwd-breadcrumb-segment-${s}"
                    class="${s!==t.length-1?"underline cursor-pointer hover:text-primary":""}"
                    @click="${()=>this.editToSegment(s)}"
                    >${i}</span
                  >
                  ${s<t.length-1?h`<span class="mx-2">${Jt}</span>`:""}
                `)}
              <button-element
                @click="${this.toggleEdit}"
                color="var(--muted-foreground-color)"
                ?applyFillColor="false"
                appearance="icon"
                text="edit"
                class="self-center"
                data-cy="inline-edit-button"
              ></button-element>
            `}
      </div>
    `}renderInlineEdit(){return this.editor==="vscode"?h` <vscode-textfield
        type="text"
        .value="${this.path}"
        @keydown="${this.handleInlineEditKeydown}"
        data-cy="inline-edit-field"
        style="border-width: calc(var(--border-width) * 1px);"
        class="focus:border-focusBorder"
      >
      </vscode-textfield>`:h`
        <input
          class="${ye} ${X} ${we} cursor-pointer rounded"
          type="text"
          .value="${this.path}"
          @keydown="${this.handleInlineEditKeydown}"
          data-cy="inline-edit-field"
        />
      `}handleInlineEditKeydown(t){t.key==="Enter"&&this.confirmEdit(),t.key==="Escape"&&this.toggleEdit()}updated(t){if(super.updated(t),t.has("generatorContext")){let o=this.generatorContext?.prefillValues?.cwd;o&&(this.path=o,this.dispatchValue())}}dispatchValue(){this.dispatchEvent(new CustomEvent("cwd-changed",{bubbles:!0,composed:!0,detail:this.path}))}createRenderRoot(){return this}};f([F()],Kt.prototype,"_path",2),f([F()],Kt.prototype,"isEditable",2),Kt=f([k("cwd-breadcrumb")],Kt);var Ze=class extends M(w){constructor(){super(...arguments);this.appearance="primary";this.applyFillColor=!1}render(){return this.editor==="vscode"?this.renderVSCode():this.renderIntellij()}renderVSCode(){return this.appearance==="icon"?h`
        <vscode-button
          icon="${this.text}"
          style="
          --vscode-button-background: none;
          --vscode-button-foreground: ${this.color??"var(--foreground-color)"};
          --vscode-button-hoverBackground: var(--field-nav-hover-color);"
          class="h-[1.25rem] w-[1.25rem]"
        >
        </vscode-button>
      `:h`<vscode-button ?secondary="${this.appearance==="secondary"}"
      >${this.text}</vscode-button
    >`}renderIntellij(){return this.appearance==="icon"?h`<div
        class="hover:bg-fieldNavHoverBackground cursor-pointer rounded p-1"
      >
        <icon-element
          icon="${this.text}"
          color="${this.color}"
          ?applyFillColor="${this.applyFillColor}"
        ></icon-element>
      </div>`:h`<button
      class="${X} ${this.appearance==="primary"?"bg-primary focus:!ring-offset-1 focus:!ring-offset-background":'border !border-fieldBorder focus:!border-focusBorder"}'} whitespace-nowrap rounded px-4 py-1"
    >
      ${this.text}
    </button>`}createRenderRoot(){return this}};f([R()],Ze.prototype,"text",2),f([R()],Ze.prototype,"appearance",2),f([R()],Ze.prototype,"color",2),f([R({type:Boolean})],Ze.prototype,"applyFillColor",2),Ze=f([k("button-element")],Ze);var gt=class extends ro(M(w)){constructor(){super(...arguments);this.showMore=!1}toggleShowMore(){this.showMore=!this.showMore}render(){let{optionsWithMetadata:t,numOfImportantOptions:o,numOfOtherOptions:i}=iu(this.options,this.searchValue),s=this.showMore||!!this.searchValue||o===0,n=!!this.searchValue||i===0||o===0;return h`
      <div class="flex h-full w-full">
        <div
          class="border-separator ${this.editor==="intellij"?"hidden md:block":"max-sm:hidden md:w-64"} fixed h-full w-52 overflow-y-auto border-r-2  p-6"
        >
          ${this.renderOptionNav(t,s)}
        </div>
        <div
          class="${this.editor==="intellij"?"md:ml-52 md:p-6":"sm:ml-52 sm:p-6 md:ml-64"} w-full pt-6"
        >
          ${this.renderOptionsWithDivider(t,s,n)}
        </div>
      </div>
    `}renderOptionNav(t,o){return h`
      <ul>
        ${t.map(i=>{let s=this.searchValue&&!i.isInSearchResults,n=!o&&!i.isImportant;return h`<field-nav-item
            class="${s?"hidden":""}"
            .option="${i.option}"
            .greyedOut="${n}"
            @click=${a=>this.handleTreeClickEvent(a,n)}
          ></field-nav-item>`})}
      </ul>
    `}renderOptionsWithDivider(t,o,i){let s=(l,c=!1)=>{let u=ou(l.option);return h` <div
        class="${c?"hidden":""} mb-4"
        id="option-${l.option.name}"
      >
        ${u}
      </div>`};if(this.searchValue&&t.every(l=>!l.isInSearchResults))return h` <div class="flex flex-col">
        <div class="m-auto">
          Couldn't find any options matching "${this.searchValue}"
        </div>
        <button-element
          appearance="secondary"
          text="Clear Search"
          class="m-auto pt-2"
          @click=${()=>this.clearSearch()}
        ></button-element>

        <div></div>
      </div>`;if(this.searchValue)return h`<div>
        ${t.map(l=>s(l,!l.isInSearchResults))}
      </div>`;let n=t.filter(l=>l.isImportant),a=t.filter(l=>!l.isImportant);return h`
      ${n.map(l=>s(l,!1))}
      <show-more-divider
        .showMore=${this.showMore}
        @show-more=${this.toggleShowMore}
        class="${i?"hidden":""}"
      ></show-more-divider>
      ${a.map(l=>s(l,!o))}
    `}firstUpdated(){this.updateComplete.then(()=>{let t=Array.from(this.renderRoot.querySelectorAll("*")).find(o=>o.id.toLowerCase().endsWith("-field")&&o instanceof HTMLElement);t&&t.focus()})}handleTreeClickEvent(t,o){let i=t.target.innerText;o&&(this.showMore=!0),setTimeout(()=>{let s=this.querySelector(`#option-${i}`);if(!s)return;s.scrollIntoView({behavior:"smooth",block:"start"});let n=this.querySelector(`#${i}-field`);if(!n)return;let a=new IntersectionObserver(l=>{l[0].isIntersecting&&(n.focus(),a.disconnect())},{rootMargin:"0px",threshold:1});a.observe(s)},100)}clearSearch(){let t=new CustomEvent("clear-search",{});this.dispatchEvent(t)}createRenderRoot(){return this}};f([R()],gt.prototype,"options",2),f([R()],gt.prototype,"searchValue",2),f([F()],gt.prototype,"showMore",2),gt=f([k("field-list")],gt);var ou=r=>r.type==="boolean"?h` <checkbox-field .option=${r}></checkbox-field>`:r.type==="array"?r.items?h` <multiselect-field .option=${r}></multiselect-field> `:h` <array-field .option=${r}></array-field>`:r.items?De(r).length>10?h`<autocomplete-field .option=${r}></autocomplete-field>`:h` <select-field .option=${r}></select-field>`:h` <input-field .option=${r}></input-field>`,iu=(r,e)=>{let t=r.map(o=>({option:o,isInSearchResults:!e||o.name.includes(e),isImportant:o.isRequired||o["x-priority"]==="important"}));return{optionsWithMetadata:t,numOfImportantOptions:t.filter(o=>o.isImportant).length,numOfOtherOptions:t.filter(o=>!o.isImportant).length}};var ci=class extends M(w){render(){return this.editor==="intellij"?h`
        <div class="relative inline-block w-full">
          <input
            class="${ye} ${X} text-foreground w-full rounded px-2 py-2 pl-8 text-black"
            type="text"
            placeholder="Search..."
            @input="${this.handleInput}"
            id="search-bar"
          />
          <icon-element
            icon="search"
            class="absolute left-2 top-[0.7rem]"
          ></icon-element>
          <div class="absolute right-2 top-2.5">
            <kbd
              class="border-fieldBorder bg-selectFieldBackground whitespace-nowrap rounded-md border p-1 shadow"
              >${this.getKeyboardShortcutSymbol()}S</kbd
            >
          </div>
        </div>
      `:h`
        <vscode-textfield
          style="border-width: calc(var(--border-width)* 1px);"
          class="w-full"
          placeholder="Search..."
          type="text"
          @input="${this.handleInput}"
          id="search-bar"
        >
          <vscode-icon
            slot="content-before"
            name="search"
            title="search"
          ></vscode-icon>
          <div slot="content-after">
            <kbd class="bg-background whitespace-nowrap"
              >${this.getKeyboardShortcutSymbol()}S</kbd
            >
          </div>
        </vscode-textfield>
      `}clearSearch(){let e=this.renderRoot.querySelector(this.editor==="vscode"?"vscode-textfield":"input");e&&(e.value="",e.dispatchEvent(new Event("input")))}getKeyboardShortcutSymbol(){return window.navigator.platform.toLowerCase().includes("mac")?"\u2318":"Ctrl "}createRenderRoot(){return this}handleInput(e){let t=new CustomEvent("search-input",{detail:e.target.value});this.dispatchEvent(t)}};ci=f([k("search-bar")],ci);var vt=class extends M(w){constructor(){super(...arguments);this.message="";this.type="warning";this.dismissed=!1}dismiss(){this.dismissed=!0}render(){let t=this.type==="error"?"bg-bannerError":"bg-bannerWarning";return this.dismissed?h``:h`
      <div
        class="${t} text-bannerText mt-2 flex w-full flex-row rounded p-2 text-left opacity-80"
      >
        <p class="grow">${this.message}</p>
        <div @click="${this.dismiss}" class="px-2 py-1">
          ${this.editor==="intellij"?h`<icon-element
                icon="close"
                color="${getComputedStyle(this).getPropertyValue("--banner-text-color")}"
              ></icon-element>`:h`<icon-element icon="close"></icon-element>`}
        </div>
      </div>
    `}createRenderRoot(){return this}};f([R()],vt.prototype,"message",2),f([R()],vt.prototype,"type",2),f([F()],vt.prototype,"dismissed",2),vt=f([k("banner-element")],vt);var bt=class extends M(w){constructor(){super(...arguments);this.color="";this.applyFillColor=!1}render(){return this.editor==="intellij"?h`<img
        src="./icons/${this.icon}.svg"
        class="h-[1.25rem]"
        @load="${this.applyColorToSVG}"
      ></img>`:h`<span
        class="codicon codicon-${this.icon}"
        style="text-align: center; font-size: 0.9rem; color: ${this.color}"
      ></span>`}async applyColorToSVG(){if(!this.color)return;let o=await(await fetch(`./icons/${this.icon}.svg`)).text(),s=new DOMParser().parseFromString(o,"image/svg+xml");s.querySelectorAll("path").forEach(l=>{this.applyFillColor&&l.setAttribute("fill",this.color),l.setAttribute("stroke",this.color)});let a=this.querySelector("img");a&&a.remove(),s.documentElement.classList.add("h-[1.25rem]"),this.appendChild(s.documentElement)}createRenderRoot(){return this}};f([R()],bt.prototype,"icon",2),f([R()],bt.prototype,"color",2),f([R({type:Boolean})],bt.prototype,"applyFillColor",2),bt=f([k("icon-element")],bt);var er=class extends ii(w){constructor(){super(...arguments);this.greyedOut=!1}render(){return h`
      <li
        data-cy="field-nav-item-${this.option.name}"
        @click="${this.handleTreeClickEvent}"
        class="${this.shouldRenderError()?"text-error":this.shouldRenderChanged()?"text-primary":this.greyedOut?"text-mutedForeground":"text-foreground"} hover:bg-fieldNavHoverBackground  cursor-pointer overflow-hidden 
          text-ellipsis"
      >
        ${this.option.name}
      </li>
    `}handleTreeClickEvent(){let t=new CustomEvent("click",{detail:this.option.name});this.dispatchEvent(t)}createRenderRoot(){return this}};f([R()],er.prototype,"option",2),f([R()],er.prototype,"greyedOut",2),er=f([k("field-nav-item")],er);var Mr=class extends M(w){constructor(){super(...arguments);this.showMore=!1}render(){return h`
      <div
        class="flex flex-row items-center space-x-4 pl-4"
        @click=${this.toggleShowMore}
        data-cy="show-more"
      >
        <hr
          class="grow h-0 ${this.editor==="intellij"?"border-separator":""}"
          style="${this.editor==="vscode"?"border-top: calc(var(--border-width) * 1px) solid var(--separator-color);":""}"
        />

        <div tabindex="0" aria-role="button" class="flex flex-row gap-2 leading-none focus:ring-1 focus:ring-focusBorder focus:outline-none" @keydown="${this.handleKeyEvent}">${this.showMore?"Show fewer options":"Show all options"} <icon-element icon="${this.showMore?"chevron-up":"chevron-down"}" class="self-center"></div>
      </div>
    `}handleKeyEvent(t){(t.key==="Enter"||t.key===" ")&&this.toggleShowMore(),t.key==="Tab"&&!t.shiftKey&&!this.showMore&&this.toggleShowMore()}toggleShowMore(){this.showMore=!this.showMore,this.dispatchEvent(new CustomEvent("show-more",{detail:this.showMore}))}createRenderRoot(){return this}};f([R()],Mr.prototype,"showMore",2),Mr=f([k("show-more-divider")],Mr);var tr=class extends M(w){render(){return h`
      <div
        tabindex="0"
        class="bg-badgeBackground text-badgeForeground focus:ring-focusBorder ${this.editorSpecificStyles()} flex flex-row gap-1 rounded p-2 pb-0 focus:outline-none"
        @keydown="${this.handleEnterKeyRemove}"
        data-cy="${this.fieldId}-item"
      >
        <p class="leading-none">${this.text}</p>
        <icon-element
          @click="${this.handleClickRemove}"
          icon="close"
          data-cy="${this.fieldId}-remove-button"
        ></icon-element>
      </div>
    `}editorSpecificStyles(){return this.editor==="intellij"?"border border-fieldBorder focus:ring-2":"focus:ring-1 focus:!ring-offset-1 focus:!ring-offset-background"}handleEnterKeyRemove(t){(t.key==="Enter"||t.key===" ")&&this.dispatchEvent(new CustomEvent("remove"))}handleClickRemove(){this.dispatchEvent(new CustomEvent("remove"))}createRenderRoot(){return this}};f([R()],tr.prototype,"text",2),f([R()],tr.prototype,"fieldId",2),tr=f([k("badge-element")],tr);var rr=class extends w{constructor(){super();this.content="";this.isPopoverVisible=!1;this.addEventListener("mouseover",this.showTooltip),this.addEventListener("mouseout",this.hideTooltip)}showTooltip(){this.isPopoverVisible=!0}hideTooltip(){this.isPopoverVisible=!1}render(){return h`
      <div class="relative inline-block">
        <slot></slot>
        <div
          class="${this.isPopoverVisible?"block":"hidden"}  tooltip-content border-fieldBorder bg-badgeBackground text-foreground absolute left-0 z-10 w-max max-w-md whitespace-normal border p-1 shadow-md"
          data-cy="popover-content"
        >
          ${this.content}
        </div>
      </div>
    `}createRenderRoot(){return this}};f([R({type:String})],rr.prototype,"content",2),f([F()],rr.prototype,"isPopoverVisible",2),rr=f([k("popover-element")],rr);qa().register(Rs({prefix:"intellij",styles:Ya,indicator:`<img
        src="./icons/chevron-down.svg"
        class="h-[1.25rem]"
      ></img>`}),Os({prefix:"intellij",styles:Qa}));var Nr=class extends w{constructor(){super();this.searchValue="";this.rootStyles=hi`
    --border-width: 1;
  `;this.icc=new oo(this),this.formValuesService=new to(this),window.addEventListener("keydown",t=>this.handleGlobalKeyboardShortcuts(t))}render(){let t=this.icc.generatorSchema?.options;return h` <div
      class="text-foreground m-auto flex h-screen max-w-screen-xl flex-col p-6"
      style="${this.rootStyles}"
    >
      <div
        class="bg-background border-separator sticky top-0 z-50 w-full border-b-2 pb-3"
      >
        ${this.renderHeader()}
      </div>
      <div class="grow overflow-auto">
        ${!t||t.length===0?h`<p>No options</p>`:h` <field-list
              class="h-full"
              .options="${t}"
              .searchValue="${this.searchValue}"
              @clear-search="${()=>this.clearSearch()}"
            ></field-list>`}
      </div>
    </div>`}renderHeader(){let t=this.icc.generatorSchema?.collectionName?.includes("@nx")||this.icc.generatorSchema?.collectionName?.includes("@nrwl"),o=`https://nx.dev/packages/${this.icc.generatorSchema?.collectionName?.replace("@nrwl/","")?.replace("@nx/","")}/generators/${this.icc.generatorSchema?.generatorName}`;return h`
      <div>
        <header class="flex items-center justify-between">
          <div class="flex flex-col flex-wrap items-start gap-2">
            <h1 class="text-xl font-bold leading-none" data-cy="title">
              ${nn(this.icc.generatorSchema)}
            </h1>
            <h2
              class="inline-flex text-lg font-medium leading-none"
              data-cy="subtitle"
            >
              ${this.icc.generatorSchema?.collectionName}
              <popover-element
                class="flex items-center pl-2 text-base"
                .content="${this.icc.generatorSchema?.description}"
              >
                <icon-element class="flex items-start" icon="info">
                </icon-element>
              </popover-element>
            </h2>
          </div>

          <div class="flex shrink-0">
            ${G(t&&this.icc.editor==="vscode",()=>h`
                  <button-element
                    @click="${()=>this.openNxDev(o)}"
                    title="Open generator documentation on nx.dev"
                    appearance="icon"
                    text="link-external"
                    class="self-center py-2 pl-3"
                  >
                  </button-element>
                `)}
            <button-element
              class="self-center py-2 pl-3"
              appearance="icon"
              text="copy"
              title="Copy generate command to clipboard"
              @click="${()=>this.formValuesService.copyCommandToClipboard()}"
              data-cy="copy-button"
            >
            </button-element>
            ${G(!this.icc.configuration?.enableTaskExecutionDryRunOnChange,()=>h`<button-element
                    class="self-center py-2 pl-3 sm:hidden"
                    @click="${()=>this.formValuesService.runGenerator(!0)}"
                    text="debug"
                    appearance="icon"
                    title="Dry Run"
                  >
                  </button-element>
                  <button-element
                    class="hidden py-2 pl-3 sm:block"
                    @click="${()=>this.formValuesService.runGenerator(!0)}"
                    text="Dry Run"
                    appearance="secondary"
                  >
                  </button-element> `)}

            <button-element
              class="py-2 pl-3"
              @click="${()=>this.formValuesService.runGenerator()}"
              text="Generate"
              data-cy="generate-button"
            >
            </button-element>
          </div>
        </header>
        ${G(this.icc.banner,()=>h` <banner-element
              message="${this.icc.banner?.message}"
              type="${this.icc.banner?.type}"
            ></banner-element>`)}
        <div class="mt-5">
          <search-bar
            @search-input="${this.handleSearchValueChange}"
          ></search-bar>
          <cwd-breadcrumb></cwd-breadcrumb>
        </div>
      </div>
    `}handleSearchValueChange(t){this.searchValue=t.detail}clearSearch(){let t=this.renderRoot.querySelector("search-bar");t&&t.clearSearch()}handleGlobalKeyboardShortcuts(t){if(t.key==="Enter"&&(t.metaKey||t.ctrlKey)&&(t.preventDefault(),t.shiftKey?this.formValuesService.runGenerator(!0):this.formValuesService.runGenerator()),t.key==="s"&&(t.metaKey||t.ctrlKey)){t.preventDefault();let o=this.renderRoot.querySelector('[id="search-bar"]');o&&o.focus()}}openNxDev(t){let o=document.createElement("a");o.href=t,o.target="_blank",o.style.display="none",document.body.appendChild(o),o.click(),document.body.removeChild(o)}createRenderRoot(){return this}};f([F()],Nr.prototype,"searchValue",2),Nr=f([k("root-element")],Nr);export{Nr as Root};
/*! Bundled license information:

@lit-labs/ssr-dom-shim/lib/element-internals.js:
  (**
   * @license
   * Copyright 2023 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/ssr-dom-shim/index.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/node/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directives/when.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/context-request-event.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/create-context.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/controllers/context-consumer.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/value-notifier.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/controllers/context-provider.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/context-root.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/decorators/provide.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/lib/decorators/consume.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit-labs/context/index.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

tslib/tslib.es6.js:
  (*! *****************************************************************************
  Copyright (c) Microsoft Corporation.
  
  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.
  
  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** *)

lit-html/node/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directive-helpers.js:
  (**
   * @license
   * Copyright 2020 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/async-directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/node/directives/map.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
