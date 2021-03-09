(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 9603:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _extends
/* harmony export */ });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ 120:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _objectWithoutPropertiesLoose
/* harmony export */ });
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ 3800:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;
/** @license React v17.0.1
 * react-dom-server.node.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(2525),n=__webpack_require__(7378),aa=__webpack_require__(2413);function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var q=60106,r=60107,u=60108,z=60114,B=60109,ba=60110,ca=60112,D=60113,da=60120,ea=60115,fa=60116,ha=60121,ia=60117,ja=60119,ka=60129,la=60131;
if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;q=E("react.portal");r=E("react.fragment");u=E("react.strict_mode");z=E("react.profiler");B=E("react.provider");ba=E("react.context");ca=E("react.forward_ref");D=E("react.suspense");da=E("react.suspense_list");ea=E("react.memo");fa=E("react.lazy");ha=E("react.block");ia=E("react.fundamental");ja=E("react.scope");ka=E("react.debug_trace_mode");la=E("react.legacy_hidden")}
function F(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case r:return"Fragment";case q:return"Portal";case z:return"Profiler";case u:return"StrictMode";case D:return"Suspense";case da:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case ba:return(a.displayName||"Context")+".Consumer";case B:return(a._context.displayName||"Context")+".Provider";case ca:var b=a.render;b=b.displayName||b.name||"";return a.displayName||
(""!==b?"ForwardRef("+b+")":"ForwardRef");case ea:return F(a.type);case ha:return F(a._render);case fa:b=a._payload;a=a._init;try{return F(a(b))}catch(c){}}return null}var ma=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,na={};function I(a,b){for(var c=a._threadCount|0;c<=b;c++)a[c]=a._currentValue2,a._threadCount=c+1}function oa(a,b,c,d){if(d&&(d=a.contextType,"object"===typeof d&&null!==d))return I(d,c),d[c];if(a=a.contextTypes){c={};for(var f in a)c[f]=b[f];b=c}else b=na;return b}
for(var J=new Uint16Array(16),K=0;15>K;K++)J[K]=K+1;J[15]=0;var pa=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qa=Object.prototype.hasOwnProperty,ra={},sa={};
function ta(a){if(qa.call(sa,a))return!0;if(qa.call(ra,a))return!1;if(pa.test(a))return sa[a]=!0;ra[a]=!0;return!1}function ua(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function va(a,b,c,d){if(null===b||"undefined"===typeof b||ua(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function M(a,b,c,d,f,h,t){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=f;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=h;this.removeEmptyString=t}var N={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){N[a]=new M(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];N[b]=new M(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){N[a]=new M(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){N[a]=new M(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){N[a]=new M(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){N[a]=new M(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){N[a]=new M(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){N[a]=new M(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){N[a]=new M(a,5,!1,a.toLowerCase(),null,!1,!1)});var wa=/[\-:]([a-z])/g;function xa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(wa,
xa);N[b]=new M(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(wa,xa);N[b]=new M(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(wa,xa);N[b]=new M(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){N[a]=new M(a,1,!1,a.toLowerCase(),null,!1,!1)});
N.xlinkHref=new M("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){N[a]=new M(a,1,!1,a.toLowerCase(),null,!0,!0)});var ya=/["'&<>]/;
function O(a){if("boolean"===typeof a||"number"===typeof a)return""+a;a=""+a;var b=ya.exec(a);if(b){var c="",d,f=0;for(d=b.index;d<a.length;d++){switch(a.charCodeAt(d)){case 34:b="&quot;";break;case 38:b="&amp;";break;case 39:b="&#x27;";break;case 60:b="&lt;";break;case 62:b="&gt;";break;default:continue}f!==d&&(c+=a.substring(f,d));f=d+1;c+=b}a=f!==d?c+a.substring(f,d):c}return a}
function za(a,b){var c=N.hasOwnProperty(a)?N[a]:null;var d;if(d="style"!==a)d=null!==c?0===c.type:!(2<a.length)||"o"!==a[0]&&"O"!==a[0]||"n"!==a[1]&&"N"!==a[1]?!1:!0;if(d||va(a,b,c,!1))return"";if(null!==c){a=c.attributeName;d=c.type;if(3===d||4===d&&!0===b)return a+'=""';c.sanitizeURL&&(b=""+b);return a+'="'+(O(b)+'"')}return ta(a)?a+'="'+(O(b)+'"'):""}function Aa(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}
var Ba="function"===typeof Object.is?Object.is:Aa,P=null,Q=null,R=null,S=!1,T=!1,U=null,V=0;function W(){if(null===P)throw Error(p(321));return P}function Ca(){if(0<V)throw Error(p(312));return{memoizedState:null,queue:null,next:null}}function Da(){null===R?null===Q?(S=!1,Q=R=Ca()):(S=!0,R=Q):null===R.next?(S=!1,R=R.next=Ca()):(S=!0,R=R.next);return R}function Ea(a,b,c,d){for(;T;)T=!1,V+=1,R=null,c=a(b,d);Fa();return c}function Fa(){P=null;T=!1;Q=null;V=0;R=U=null}
function Ga(a,b){return"function"===typeof b?b(a):b}function Ha(a,b,c){P=W();R=Da();if(S){var d=R.queue;b=d.dispatch;if(null!==U&&(c=U.get(d),void 0!==c)){U.delete(d);d=R.memoizedState;do d=a(d,c.action),c=c.next;while(null!==c);R.memoizedState=d;return[d,b]}return[R.memoizedState,b]}a=a===Ga?"function"===typeof b?b():b:void 0!==c?c(b):b;R.memoizedState=a;a=R.queue={last:null,dispatch:null};a=a.dispatch=Ia.bind(null,P,a);return[R.memoizedState,a]}
function Ja(a,b){P=W();R=Da();b=void 0===b?null:b;if(null!==R){var c=R.memoizedState;if(null!==c&&null!==b){var d=c[1];a:if(null===d)d=!1;else{for(var f=0;f<d.length&&f<b.length;f++)if(!Ba(b[f],d[f])){d=!1;break a}d=!0}if(d)return c[0]}}a=a();R.memoizedState=[a,b];return a}function Ia(a,b,c){if(!(25>V))throw Error(p(301));if(a===P)if(T=!0,a={action:c,next:null},null===U&&(U=new Map),c=U.get(b),void 0===c)U.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}}function Ka(){}
var X=null,La={readContext:function(a){var b=X.threadID;I(a,b);return a[b]},useContext:function(a){W();var b=X.threadID;I(a,b);return a[b]},useMemo:Ja,useReducer:Ha,useRef:function(a){P=W();R=Da();var b=R.memoizedState;return null===b?(a={current:a},R.memoizedState=a):b},useState:function(a){return Ha(Ga,a)},useLayoutEffect:function(){},useCallback:function(a,b){return Ja(function(){return a},b)},useImperativeHandle:Ka,useEffect:Ka,useDebugValue:Ka,useDeferredValue:function(a){W();return a},useTransition:function(){W();
return[function(a){a()},!1]},useOpaqueIdentifier:function(){return(X.identifierPrefix||"")+"R:"+(X.uniqueID++).toString(36)},useMutableSource:function(a,b){W();return b(a._source)}},Ma={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Na(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}
var Oa={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},Pa=l({menuitem:!0},Oa),Y={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,
gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qa=["Webkit","ms","Moz","O"];Object.keys(Y).forEach(function(a){Qa.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Y[b]=Y[a]})});
var Ra=/([A-Z])/g,Sa=/^ms-/,Z=n.Children.toArray,Ta=ma.ReactCurrentDispatcher,Ua={listing:!0,pre:!0,textarea:!0},Va=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,Wa={},Xa={};function Ya(a){if(void 0===a||null===a)return a;var b="";n.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}var Za=Object.prototype.hasOwnProperty,$a={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null,suppressHydrationWarning:null};function ab(a,b){if(void 0===a)throw Error(p(152,F(b)||"Component"));}
function bb(a,b,c){function d(d,h){var e=h.prototype&&h.prototype.isReactComponent,f=oa(h,b,c,e),t=[],g=!1,m={isMounted:function(){return!1},enqueueForceUpdate:function(){if(null===t)return null},enqueueReplaceState:function(a,b){g=!0;t=[b]},enqueueSetState:function(a,b){if(null===t)return null;t.push(b)}};if(e){if(e=new h(d.props,f,m),"function"===typeof h.getDerivedStateFromProps){var k=h.getDerivedStateFromProps.call(null,d.props,e.state);null!=k&&(e.state=l({},e.state,k))}}else if(P={},e=h(d.props,
f,m),e=Ea(h,d.props,e,f),null==e||null==e.render){a=e;ab(a,h);return}e.props=d.props;e.context=f;e.updater=m;m=e.state;void 0===m&&(e.state=m=null);if("function"===typeof e.UNSAFE_componentWillMount||"function"===typeof e.componentWillMount)if("function"===typeof e.componentWillMount&&"function"!==typeof h.getDerivedStateFromProps&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&"function"!==typeof h.getDerivedStateFromProps&&e.UNSAFE_componentWillMount(),t.length){m=t;var v=
g;t=null;g=!1;if(v&&1===m.length)e.state=m[0];else{k=v?m[0]:e.state;var H=!0;for(v=v?1:0;v<m.length;v++){var x=m[v];x="function"===typeof x?x.call(e,k,d.props,f):x;null!=x&&(H?(H=!1,k=l({},k,x)):l(k,x))}e.state=k}}else t=null;a=e.render();ab(a,h);if("function"===typeof e.getChildContext&&(d=h.childContextTypes,"object"===typeof d)){var y=e.getChildContext();for(var A in y)if(!(A in d))throw Error(p(108,F(h)||"Unknown",A));}y&&(b=l({},b,y))}for(;n.isValidElement(a);){var f=a,h=f.type;if("function"!==
typeof h)break;d(f,h)}return{child:a,context:b}}
var cb=function(){function a(a,b,f){n.isValidElement(a)?a.type!==r?a=[a]:(a=a.props.children,a=n.isValidElement(a)?[a]:Z(a)):a=Z(a);a={type:null,domNamespace:Ma.html,children:a,childIndex:0,context:na,footer:""};var c=J[0];if(0===c){var d=J;c=d.length;var g=2*c;if(!(65536>=g))throw Error(p(304));var e=new Uint16Array(g);e.set(d);J=e;J[0]=c+1;for(d=c;d<g-1;d++)J[d]=d+1;J[g-1]=0}else J[0]=J[c];this.threadID=c;this.stack=[a];this.exhausted=!1;this.currentSelectValue=null;this.previousWasTextNode=!1;
this.makeStaticMarkup=b;this.suspenseDepth=0;this.contextIndex=-1;this.contextStack=[];this.contextValueStack=[];this.uniqueID=0;this.identifierPrefix=f&&f.identifierPrefix||""}var b=a.prototype;b.destroy=function(){if(!this.exhausted){this.exhausted=!0;this.clearProviders();var a=this.threadID;J[a]=J[0];J[0]=a}};b.pushProvider=function(a){var b=++this.contextIndex,c=a.type._context,h=this.threadID;I(c,h);var t=c[h];this.contextStack[b]=c;this.contextValueStack[b]=t;c[h]=a.props.value};b.popProvider=
function(){var a=this.contextIndex,b=this.contextStack[a],f=this.contextValueStack[a];this.contextStack[a]=null;this.contextValueStack[a]=null;this.contextIndex--;b[this.threadID]=f};b.clearProviders=function(){for(var a=this.contextIndex;0<=a;a--)this.contextStack[a][this.threadID]=this.contextValueStack[a]};b.read=function(a){if(this.exhausted)return null;var b=X;X=this;var c=Ta.current;Ta.current=La;try{for(var h=[""],t=!1;h[0].length<a;){if(0===this.stack.length){this.exhausted=!0;var g=this.threadID;
J[g]=J[0];J[0]=g;break}var e=this.stack[this.stack.length-1];if(t||e.childIndex>=e.children.length){var L=e.footer;""!==L&&(this.previousWasTextNode=!1);this.stack.pop();if("select"===e.type)this.currentSelectValue=null;else if(null!=e.type&&null!=e.type.type&&e.type.type.$$typeof===B)this.popProvider(e.type);else if(e.type===D){this.suspenseDepth--;var G=h.pop();if(t){t=!1;var C=e.fallbackFrame;if(!C)throw Error(p(303));this.stack.push(C);h[this.suspenseDepth]+="\x3c!--$!--\x3e";continue}else h[this.suspenseDepth]+=
G}h[this.suspenseDepth]+=L}else{var m=e.children[e.childIndex++],k="";try{k+=this.render(m,e.context,e.domNamespace)}catch(v){if(null!=v&&"function"===typeof v.then)throw Error(p(294));throw v;}finally{}h.length<=this.suspenseDepth&&h.push("");h[this.suspenseDepth]+=k}}return h[0]}finally{Ta.current=c,X=b,Fa()}};b.render=function(a,b,f){if("string"===typeof a||"number"===typeof a){f=""+a;if(""===f)return"";if(this.makeStaticMarkup)return O(f);if(this.previousWasTextNode)return"\x3c!-- --\x3e"+O(f);
this.previousWasTextNode=!0;return O(f)}b=bb(a,b,this.threadID);a=b.child;b=b.context;if(null===a||!1===a)return"";if(!n.isValidElement(a)){if(null!=a&&null!=a.$$typeof){f=a.$$typeof;if(f===q)throw Error(p(257));throw Error(p(258,f.toString()));}a=Z(a);this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""});return""}var c=a.type;if("string"===typeof c)return this.renderDOM(a,b,f);switch(c){case la:case ka:case u:case z:case da:case r:return a=Z(a.props.children),this.stack.push({type:null,
domNamespace:f,children:a,childIndex:0,context:b,footer:""}),"";case D:throw Error(p(294));case ja:throw Error(p(343));}if("object"===typeof c&&null!==c)switch(c.$$typeof){case ca:P={};var d=c.render(a.props,a.ref);d=Ea(c.render,a.props,d,a.ref);d=Z(d);this.stack.push({type:null,domNamespace:f,children:d,childIndex:0,context:b,footer:""});return"";case ea:return a=[n.createElement(c.type,l({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,context:b,footer:""}),
"";case B:return c=Z(a.props.children),f={type:a,domNamespace:f,children:c,childIndex:0,context:b,footer:""},this.pushProvider(a),this.stack.push(f),"";case ba:c=a.type;d=a.props;var g=this.threadID;I(c,g);c=Z(d.children(c[g]));this.stack.push({type:a,domNamespace:f,children:c,childIndex:0,context:b,footer:""});return"";case ia:throw Error(p(338));case fa:return c=a.type,d=c._init,c=d(c._payload),a=[n.createElement(c,l({ref:a.ref},a.props))],this.stack.push({type:null,domNamespace:f,children:a,childIndex:0,
context:b,footer:""}),""}throw Error(p(130,null==c?c:typeof c,""));};b.renderDOM=function(a,b,f){var c=a.type.toLowerCase();f===Ma.html&&Na(c);if(!Wa.hasOwnProperty(c)){if(!Va.test(c))throw Error(p(65,c));Wa[c]=!0}var d=a.props;if("input"===c)d=l({type:void 0},d,{defaultChecked:void 0,defaultValue:void 0,value:null!=d.value?d.value:d.defaultValue,checked:null!=d.checked?d.checked:d.defaultChecked});else if("textarea"===c){var g=d.value;if(null==g){g=d.defaultValue;var e=d.children;if(null!=e){if(null!=
g)throw Error(p(92));if(Array.isArray(e)){if(!(1>=e.length))throw Error(p(93));e=e[0]}g=""+e}null==g&&(g="")}d=l({},d,{value:void 0,children:""+g})}else if("select"===c)this.currentSelectValue=null!=d.value?d.value:d.defaultValue,d=l({},d,{value:void 0});else if("option"===c){e=this.currentSelectValue;var L=Ya(d.children);if(null!=e){var G=null!=d.value?d.value+"":L;g=!1;if(Array.isArray(e))for(var C=0;C<e.length;C++){if(""+e[C]===G){g=!0;break}}else g=""+e===G;d=l({selected:void 0,children:void 0},
d,{selected:g,children:L})}}if(g=d){if(Pa[c]&&(null!=g.children||null!=g.dangerouslySetInnerHTML))throw Error(p(137,c));if(null!=g.dangerouslySetInnerHTML){if(null!=g.children)throw Error(p(60));if(!("object"===typeof g.dangerouslySetInnerHTML&&"__html"in g.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=g.style&&"object"!==typeof g.style)throw Error(p(62));}g=d;e=this.makeStaticMarkup;L=1===this.stack.length;G="<"+a.type;b:if(-1===c.indexOf("-"))C="string"===typeof g.is;else switch(c){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":C=
!1;break b;default:C=!0}for(w in g)if(Za.call(g,w)){var m=g[w];if(null!=m){if("style"===w){var k=void 0,v="",H="";for(k in m)if(m.hasOwnProperty(k)){var x=0===k.indexOf("--"),y=m[k];if(null!=y){if(x)var A=k;else if(A=k,Xa.hasOwnProperty(A))A=Xa[A];else{var eb=A.replace(Ra,"-$1").toLowerCase().replace(Sa,"-ms-");A=Xa[A]=eb}v+=H+A+":";H=k;x=null==y||"boolean"===typeof y||""===y?"":x||"number"!==typeof y||0===y||Y.hasOwnProperty(H)&&Y[H]?(""+y).trim():y+"px";v+=x;H=";"}}m=v||null}k=null;C?$a.hasOwnProperty(w)||
(k=w,k=ta(k)&&null!=m?k+'="'+(O(m)+'"'):""):k=za(w,m);k&&(G+=" "+k)}}e||L&&(G+=' data-reactroot=""');var w=G;g="";Oa.hasOwnProperty(c)?w+="/>":(w+=">",g="</"+a.type+">");a:{e=d.dangerouslySetInnerHTML;if(null!=e){if(null!=e.__html){e=e.__html;break a}}else if(e=d.children,"string"===typeof e||"number"===typeof e){e=O(e);break a}e=null}null!=e?(d=[],Ua.hasOwnProperty(c)&&"\n"===e.charAt(0)&&(w+="\n"),w+=e):d=Z(d.children);a=a.type;f=null==f||"http://www.w3.org/1999/xhtml"===f?Na(a):"http://www.w3.org/2000/svg"===
f&&"foreignObject"===a?"http://www.w3.org/1999/xhtml":f;this.stack.push({domNamespace:f,type:c,children:d,childIndex:0,context:b,footer:g});this.previousWasTextNode=!1;return w};return a}();function db(a,b){a.prototype=Object.create(b.prototype);a.prototype.constructor=a;a.__proto__=b}
var fb=function(a){function b(b,c,h){var d=a.call(this,{})||this;d.partialRenderer=new cb(b,c,h);return d}db(b,a);var c=b.prototype;c._destroy=function(a,b){this.partialRenderer.destroy();b(a)};c._read=function(a){try{this.push(this.partialRenderer.read(a))}catch(f){this.destroy(f)}};return b}(aa.Readable);__webpack_unused_export__=function(a,b){return new fb(a,!1,b)};__webpack_unused_export__=function(a,b){a=new cb(a,!0,b);try{return a.read(Infinity)}finally{a.destroy()}};
__webpack_unused_export__=function(a,b){return new fb(a,!0,b)};exports.renderToString=function(a,b){a=new cb(a,!1,b);try{return a.read(Infinity)}finally{a.destroy()}};__webpack_unused_export__="17.0.1";


/***/ }),

/***/ 5771:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.1
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/*
 Modernizr 3.0.0pre (Custom Build) | MIT
*/
var aa=__webpack_require__(7378),m=__webpack_require__(2525),r=__webpack_require__(1102);function y(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!aa)throw Error(y(227));var ba=new Set,ca={};function da(a,b){ea(a,b);ea(a+"Capture",b)}
function ea(a,b){ca[a]=b;for(a=0;a<b.length;a++)ba.add(b[a])}
var fa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ha=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ia=Object.prototype.hasOwnProperty,
ja={},ka={};function la(a){if(ia.call(ka,a))return!0;if(ia.call(ja,a))return!1;if(ha.test(a))return ka[a]=!0;ja[a]=!0;return!1}function ma(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case "function":case "symbol":return!0;case "boolean":if(d)return!1;if(null!==c)return!c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return"data-"!==a&&"aria-"!==a;default:return!1}}
function na(a,b,c,d){if(null===b||"undefined"===typeof b||ma(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function B(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g}var D={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){D[a]=new B(a,0,!1,a,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];D[b]=new B(b,1,!1,a[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(a){D[a]=new B(a,2,!1,a.toLowerCase(),null,!1,!1)});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){D[a]=new B(a,2,!1,a,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){D[a]=new B(a,3,!1,a.toLowerCase(),null,!1,!1)});
["checked","multiple","muted","selected"].forEach(function(a){D[a]=new B(a,3,!0,a,null,!1,!1)});["capture","download"].forEach(function(a){D[a]=new B(a,4,!1,a,null,!1,!1)});["cols","rows","size","span"].forEach(function(a){D[a]=new B(a,6,!1,a,null,!1,!1)});["rowSpan","start"].forEach(function(a){D[a]=new B(a,5,!1,a.toLowerCase(),null,!1,!1)});var oa=/[\-:]([a-z])/g;function pa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(oa,
pa);D[b]=new B(b,1,!1,a,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(oa,pa);D[b]=new B(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!1,!1)});
D.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){D[a]=new B(a,1,!1,a.toLowerCase(),null,!0,!0)});
function qa(a,b,c,d){var e=D.hasOwnProperty(b)?D[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(na(b,c,e,d)&&(c=null),d||null===e?la(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}
var ra=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,sa=60103,ta=60106,ua=60107,wa=60108,xa=60114,ya=60109,za=60110,Aa=60112,Ba=60113,Ca=60120,Da=60115,Ea=60116,Fa=60121,Ga=60128,Ha=60129,Ia=60130,Ja=60131;
if("function"===typeof Symbol&&Symbol.for){var E=Symbol.for;sa=E("react.element");ta=E("react.portal");ua=E("react.fragment");wa=E("react.strict_mode");xa=E("react.profiler");ya=E("react.provider");za=E("react.context");Aa=E("react.forward_ref");Ba=E("react.suspense");Ca=E("react.suspense_list");Da=E("react.memo");Ea=E("react.lazy");Fa=E("react.block");E("react.scope");Ga=E("react.opaque.id");Ha=E("react.debug_trace_mode");Ia=E("react.offscreen");Ja=E("react.legacy_hidden")}
var Ka="function"===typeof Symbol&&Symbol.iterator;function La(a){if(null===a||"object"!==typeof a)return null;a=Ka&&a[Ka]||a["@@iterator"];return"function"===typeof a?a:null}var Ma;function Na(a){if(void 0===Ma)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);Ma=b&&b[1]||""}return"\n"+Ma+a}var Oa=!1;
function Pa(a,b){if(!a||Oa)return"";Oa=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[])}catch(k){var d=k}Reflect.construct(a,[],b)}else{try{b.call()}catch(k){d=k}a.call(b.prototype)}else{try{throw Error();}catch(k){d=k}a()}}catch(k){if(k&&d&&"string"===typeof k.stack){for(var e=k.stack.split("\n"),
f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h])return"\n"+e[g].replace(" at new "," at ");while(1<=g&&0<=h)}break}}}finally{Oa=!1,Error.prepareStackTrace=c}return(a=a?a.displayName||a.name:"")?Na(a):""}
function Qa(a){switch(a.tag){case 5:return Na(a.type);case 16:return Na("Lazy");case 13:return Na("Suspense");case 19:return Na("SuspenseList");case 0:case 2:case 15:return a=Pa(a.type,!1),a;case 11:return a=Pa(a.type.render,!1),a;case 22:return a=Pa(a.type._render,!1),a;case 1:return a=Pa(a.type,!0),a;default:return""}}
function Ra(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ua:return"Fragment";case ta:return"Portal";case xa:return"Profiler";case wa:return"StrictMode";case Ba:return"Suspense";case Ca:return"SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case za:return(a.displayName||"Context")+".Consumer";case ya:return(a._context.displayName||"Context")+".Provider";case Aa:var b=a.render;b=b.displayName||b.name||"";
return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case Da:return Ra(a.type);case Fa:return Ra(a._render);case Ea:b=a._payload;a=a._init;try{return Ra(a(b))}catch(c){}}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;default:return""}}function Ta(a){var b=a.type;return(a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=""+a},stopTracking:function(){a._valueTracker=
null;delete a[b]}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a))}function Wa(a){if(!a)return!1;var b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
function Ya(a,b){var c=b.checked;return m({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value}}function $a(a,b){b=b.checked;null!=b&&qa(a,"checked",b,!1)}
function ab(a,b){$a(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?bb(a,b.type,c):b.hasOwnProperty("defaultValue")&&bb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}
function cb(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c)}
function bb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c)}function db(a){var b="";aa.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function eb(a,b){a=m({children:void 0},b);if(b=db(b.children))a.children=b;return a}
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(y(91));return m({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(y(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(y(93));c=c[0]}b=c}null==b&&(b="");c=b}a._wrapperState={initialValue:Sa(c)}}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d)}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b)}var kb={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};
function lb(a){switch(a){case "svg":return"http://www.w3.org/2000/svg";case "math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function mb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?lb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var nb,ob=function(a){return"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(a.namespaceURI!==kb.svg||"innerHTML"in a)a.innerHTML=b;else{nb=nb||document.createElement("div");nb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=nb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}});
function pb(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b}
var qb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,
floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},rb=["Webkit","ms","Moz","O"];Object.keys(qb).forEach(function(a){rb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);qb[b]=qb[a]})});function sb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||qb.hasOwnProperty(a)&&qb[a]?(""+b).trim():b+"px"}
function tb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=sb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e}}var ub=m({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function vb(a,b){if(b){if(ub[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(y(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(y(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(y(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(y(62));}}
function wb(a,b){if(-1===a.indexOf("-"))return"string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return!1;default:return!0}}function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(y(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b))}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a])}}function Gb(a,b){return a(b)}function Hb(a,b,c,d,e){return a(b,c,d,e)}function Ib(){}var Jb=Gb,Kb=!1,Lb=!1;function Mb(){if(null!==zb||null!==Ab)Ib(),Fb()}
function Nb(a,b,c){if(Lb)return a(b,c);Lb=!0;try{return Jb(a,b,c)}finally{Lb=!1,Mb()}}
function Ob(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1}if(a)return null;if(c&&"function"!==
typeof c)throw Error(y(231,b,typeof c));return c}var Pb=!1;if(fa)try{var Qb={};Object.defineProperty(Qb,"passive",{get:function(){Pb=!0}});window.addEventListener("test",Qb,Qb);window.removeEventListener("test",Qb,Qb)}catch(a){Pb=!1}function Rb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l)}catch(n){this.onError(n)}}var Sb=!1,Tb=null,Ub=!1,Vb=null,Wb={onError:function(a){Sb=!0;Tb=a}};function Xb(a,b,c,d,e,f,g,h,k){Sb=!1;Tb=null;Rb.apply(Wb,arguments)}
function Yb(a,b,c,d,e,f,g,h,k){Xb.apply(this,arguments);if(Sb){if(Sb){var l=Tb;Sb=!1;Tb=null}else throw Error(y(198));Ub||(Ub=!0,Vb=l)}}function Zb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else{a=b;do b=a,0!==(b.flags&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function $b(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function ac(a){if(Zb(a)!==a)throw Error(y(188));}
function bc(a){var b=a.alternate;if(!b){b=Zb(a);if(null===b)throw Error(y(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return ac(e),a;if(f===d)return ac(e),b;f=f.sibling}throw Error(y(188));}if(c.return!==d.return)c=e,d=f;else{for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}if(!g)throw Error(y(189));}}if(c.alternate!==d)throw Error(y(190));}if(3!==c.tag)throw Error(y(188));return c.stateNode.current===c?a:b}function cc(a){a=bc(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}
function dc(a,b){for(var c=a.alternate;null!==b;){if(b===a||b===c)return!0;b=b.return}return!1}var ec,fc,gc,hc,ic=!1,jc=[],kc=null,lc=null,mc=null,nc=new Map,oc=new Map,pc=[],qc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function rc(a,b,c,d,e){return{blockedOn:a,domEventName:b,eventSystemFlags:c|16,nativeEvent:e,targetContainers:[d]}}function sc(a,b){switch(a){case "focusin":case "focusout":kc=null;break;case "dragenter":case "dragleave":lc=null;break;case "mouseover":case "mouseout":mc=null;break;case "pointerover":case "pointerout":nc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":oc.delete(b.pointerId)}}
function tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=rc(b,c,d,e,f),null!==b&&(b=Cb(b),null!==b&&fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function uc(a,b,c,d,e){switch(b){case "focusin":return kc=tc(kc,a,b,c,d,e),!0;case "dragenter":return lc=tc(lc,a,b,c,d,e),!0;case "mouseover":return mc=tc(mc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;nc.set(f,tc(nc.get(f)||null,a,b,c,d,e));return!0;case "gotpointercapture":return f=e.pointerId,oc.set(f,tc(oc.get(f)||null,a,b,c,d,e)),!0}return!1}
function vc(a){var b=wc(a.target);if(null!==b){var c=Zb(b);if(null!==c)if(b=c.tag,13===b){if(b=$b(c),null!==b){a.blockedOn=b;hc(a.lanePriority,function(){r.unstable_runWithPriority(a.priority,function(){gc(c)})});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null}
function xc(a){if(null!==a.blockedOn)return!1;for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c)return b=Cb(c),null!==b&&fc(b),a.blockedOn=c,!1;b.shift()}return!0}function zc(a,b,c){xc(a)&&c.delete(b)}
function Ac(){for(ic=!1;0<jc.length;){var a=jc[0];if(null!==a.blockedOn){a=Cb(a.blockedOn);null!==a&&ec(a);break}for(var b=a.targetContainers;0<b.length;){var c=yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null!==c){a.blockedOn=c;break}b.shift()}null===a.blockedOn&&jc.shift()}null!==kc&&xc(kc)&&(kc=null);null!==lc&&xc(lc)&&(lc=null);null!==mc&&xc(mc)&&(mc=null);nc.forEach(zc);oc.forEach(zc)}
function Bc(a,b){a.blockedOn===b&&(a.blockedOn=null,ic||(ic=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,Ac)))}
function Cc(a){function b(b){return Bc(b,a)}if(0<jc.length){Bc(jc[0],a);for(var c=1;c<jc.length;c++){var d=jc[c];d.blockedOn===a&&(d.blockedOn=null)}}null!==kc&&Bc(kc,a);null!==lc&&Bc(lc,a);null!==mc&&Bc(mc,a);nc.forEach(b);oc.forEach(b);for(c=0;c<pc.length;c++)d=pc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<pc.length&&(c=pc[0],null===c.blockedOn);)vc(c),null===c.blockedOn&&pc.shift()}
function Dc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var Ec={animationend:Dc("Animation","AnimationEnd"),animationiteration:Dc("Animation","AnimationIteration"),animationstart:Dc("Animation","AnimationStart"),transitionend:Dc("Transition","TransitionEnd")},Fc={},Gc={};
fa&&(Gc=document.createElement("div").style,"AnimationEvent"in window||(delete Ec.animationend.animation,delete Ec.animationiteration.animation,delete Ec.animationstart.animation),"TransitionEvent"in window||delete Ec.transitionend.transition);function Hc(a){if(Fc[a])return Fc[a];if(!Ec[a])return a;var b=Ec[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Gc)return Fc[a]=b[c];return a}
var Ic=Hc("animationend"),Jc=Hc("animationiteration"),Kc=Hc("animationstart"),Lc=Hc("transitionend"),Mc=new Map,Nc=new Map,Oc=["abort","abort",Ic,"animationEnd",Jc,"animationIteration",Kc,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart",
"lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Lc,"transitionEnd","waiting","waiting"];function Pc(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1];e="on"+(e[0].toUpperCase()+e.slice(1));Nc.set(d,b);Mc.set(d,e);da(e,[d])}}var Qc=r.unstable_now;Qc();var F=8;
function Rc(a){if(0!==(1&a))return F=15,1;if(0!==(2&a))return F=14,2;if(0!==(4&a))return F=13,4;var b=24&a;if(0!==b)return F=12,b;if(0!==(a&32))return F=11,32;b=192&a;if(0!==b)return F=10,b;if(0!==(a&256))return F=9,256;b=3584&a;if(0!==b)return F=8,b;if(0!==(a&4096))return F=7,4096;b=4186112&a;if(0!==b)return F=6,b;b=62914560&a;if(0!==b)return F=5,b;if(a&67108864)return F=4,67108864;if(0!==(a&134217728))return F=3,134217728;b=805306368&a;if(0!==b)return F=2,b;if(0!==(1073741824&a))return F=1,1073741824;
F=8;return a}function Sc(a){switch(a){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Tc(a){switch(a){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(y(358,a));}}
function Uc(a,b){var c=a.pendingLanes;if(0===c)return F=0;var d=0,e=0,f=a.expiredLanes,g=a.suspendedLanes,h=a.pingedLanes;if(0!==f)d=f,e=F=15;else if(f=c&134217727,0!==f){var k=f&~g;0!==k?(d=Rc(k),e=F):(h&=f,0!==h&&(d=Rc(h),e=F))}else f=c&~g,0!==f?(d=Rc(f),e=F):0!==h&&(d=Rc(h),e=F);if(0===d)return 0;d=31-Vc(d);d=c&((0>d?0:1<<d)<<1)-1;if(0!==b&&b!==d&&0===(b&g)){Rc(b);if(e<=F)return b;F=e}b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-Vc(b),e=1<<c,d|=a[c],b&=~e;return d}
function Wc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function Xc(a,b){switch(a){case 15:return 1;case 14:return 2;case 12:return a=Yc(24&~b),0===a?Xc(10,b):a;case 10:return a=Yc(192&~b),0===a?Xc(8,b):a;case 8:return a=Yc(3584&~b),0===a&&(a=Yc(4186112&~b),0===a&&(a=512)),a;case 2:return b=Yc(805306368&~b),0===b&&(b=268435456),b}throw Error(y(358,a));}function Yc(a){return a&-a}function Zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function $c(a,b,c){a.pendingLanes|=b;var d=b-1;a.suspendedLanes&=d;a.pingedLanes&=d;a=a.eventTimes;b=31-Vc(b);a[b]=c}var Vc=Math.clz32?Math.clz32:ad,bd=Math.log,cd=Math.LN2;function ad(a){return 0===a?32:31-(bd(a)/cd|0)|0}var dd=r.unstable_UserBlockingPriority,ed=r.unstable_runWithPriority,fd=!0;function gd(a,b,c,d){Kb||Ib();var e=hd,f=Kb;Kb=!0;try{Hb(e,a,b,c,d)}finally{(Kb=f)||Mb()}}function id(a,b,c,d){ed(dd,hd.bind(null,a,b,c,d))}
function hd(a,b,c,d){if(fd){var e;if((e=0===(b&4))&&0<jc.length&&-1<qc.indexOf(a))a=rc(null,a,b,c,d),jc.push(a);else{var f=yc(a,b,c,d);if(null===f)e&&sc(a,d);else{if(e){if(-1<qc.indexOf(a)){a=rc(f,a,b,c,d);jc.push(a);return}if(uc(f,a,b,c,d))return;sc(a,d)}jd(a,b,d,null,c)}}}}
function yc(a,b,c,d){var e=xb(d);e=wc(e);if(null!==e){var f=Zb(e);if(null===f)e=null;else{var g=f.tag;if(13===g){e=$b(f);if(null!==e)return e;e=null}else if(3===g){if(f.stateNode.hydrate)return 3===f.tag?f.stateNode.containerInfo:null;e=null}else f!==e&&(e=null)}}jd(a,b,d,e,c);return null}var kd=null,ld=null,md=null;
function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return!0}function qd(){return!1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}m(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd)},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=m({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=m({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return"movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=m({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=m({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=m({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=m({},sd,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=m({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=m({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return"keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return"keypress"===a.type?od(a):0},keyCode:function(a){return"keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return"keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=m({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=m({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=m({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=m({},Ad,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=fa&&"CompositionEvent"in window,be=null;fa&&"documentMode"in document&&(be=document.documentMode);var ce=fa&&"TextEvent"in window&&!be,de=fa&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
function ge(a,b){switch(a){case "keyup":return-1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return!0;default:return!1}}function he(a){a=a.detail;return"object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
function ke(a,b){if(ie)return"compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return"input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}))}var pe=null,qe=null;function re(a){se(a,0)}function te(a){var b=ue(a);if(Wa(b))return a}
function ve(a,b){if("change"===a)return b}var we=!1;if(fa){var xe;if(fa){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput}xe=ye}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode)}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null)}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));a=re;if(Kb)a(b);else{Kb=!0;try{Gb(a,b)}finally{Kb=!1,Mb()}}}}
function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae()}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge,Ie=Object.prototype.hasOwnProperty;
function Je(a,b){if(He(a,b))return!0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Ie.call(b,c[d])||!He(a[c[d]],b[c[d]]))return!1;return!0}function Ke(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Le(a,b){var c=Ke(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Ke(c)}}function Me(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Me(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Ne(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=Xa(a.document)}return b}function Oe(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
var Pe=fa&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Oe(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Je(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)))}
Pc("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
0);Pc("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Pc(Oc,2);for(var Ve="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),We=0;We<Ve.length;We++)Nc.set(Ve[We],0);ea("onMouseEnter",["mouseout","mouseover"]);
ea("onMouseLeave",["mouseout","mouseover"]);ea("onPointerEnter",["pointerout","pointerover"]);ea("onPointerLeave",["pointerout","pointerover"]);da("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));da("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));da("onBeforeInput",["compositionend","keypress","textInput","paste"]);da("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));
da("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));da("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xe="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ye=new Set("cancel close invalid load scroll toggle".split(" ").concat(Xe));
function Ze(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Yb(d,b,void 0,a);a.currentTarget=null}
function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;Ze(e,h,l);f=k}}}if(Ub)throw a=Vb,Ub=!1,Vb=null,a;}
function G(a,b){var c=$e(b),d=a+"__bubble";c.has(d)||(af(b,a,2,!1),c.add(d))}var bf="_reactListening"+Math.random().toString(36).slice(2);function cf(a){a[bf]||(a[bf]=!0,ba.forEach(function(b){Ye.has(b)||df(b,!1,a,null);df(b,!0,a,null)}))}
function df(a,b,c,d){var e=4<arguments.length&&void 0!==arguments[4]?arguments[4]:0,f=c;"selectionchange"===a&&9!==c.nodeType&&(f=c.ownerDocument);if(null!==d&&!b&&Ye.has(a)){if("scroll"!==a)return;e|=2;f=d}var g=$e(f),h=a+"__"+(b?"capture":"bubble");g.has(h)||(b&&(e|=4),af(f,a,e,b),g.add(h))}
function af(a,b,c,d){var e=Nc.get(b);switch(void 0===e?2:e){case 0:e=gd;break;case 1:e=id;break;default:e=hd}c=e.bind(null,b,c,a);e=void 0;!Pb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1)}
function jd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return}for(;null!==h;){g=wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode}}d=d.return}Nb(function(){var d=f,e=xb(c),g=[];
a:{var h=Mc.get(a);if(void 0!==h){var k=td,x=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":x="focus";k=Fd;break;case "focusout":x="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case Ic:case Jc:case Kc:k=Hd;break;case Lc:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td}var w=0!==(b&4),z=!w&&"scroll"===a,u=w?null!==h?h+"Capture":null:h;w=[];for(var t=d,q;null!==
t;){q=t;var v=q.stateNode;5===q.tag&&null!==v&&(q=v,null!==u&&(v=Ob(t,u),null!=v&&w.push(ef(t,v,q))));if(z)break;t=t.return}0<w.length&&(h=new k(h,x,null,c,e),g.push({event:h,listeners:w}))}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&0===(b&16)&&(x=c.relatedTarget||c.fromElement)&&(wc(x)||x[ff]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(x=c.relatedTarget||c.toElement,k=d,x=x?wc(x):null,null!==
x&&(z=Zb(x),x!==z||5!==x.tag&&6!==x.tag))x=null}else k=null,x=d;if(k!==x){w=Bd;v="onMouseLeave";u="onMouseEnter";t="mouse";if("pointerout"===a||"pointerover"===a)w=Td,v="onPointerLeave",u="onPointerEnter",t="pointer";z=null==k?h:ue(k);q=null==x?h:ue(x);h=new w(v,t+"leave",k,c,e);h.target=z;h.relatedTarget=q;v=null;wc(e)===d&&(w=new w(u,t+"enter",x,c,e),w.target=q,w.relatedTarget=z,v=w);z=v;if(k&&x)b:{w=k;u=x;t=0;for(q=w;q;q=gf(q))t++;q=0;for(v=u;v;v=gf(v))q++;for(;0<t-q;)w=gf(w),t--;for(;0<q-t;)u=
gf(u),q--;for(;t--;){if(w===u||null!==u&&w===u.alternate)break b;w=gf(w);u=gf(u)}w=null}else w=null;null!==k&&hf(g,h,k,w,!1);null!==x&&null!==z&&hf(g,z,x,w,!0)}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var J=ve;else if(me(h))if(we)J=Fe;else{J=De;var K=Ce}else(k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(J=Ee);if(J&&(J=J(a,d))){ne(g,J,c,e);break a}K&&K(a,h,d);"focusout"===a&&(K=h._wrapperState)&&
K.controlled&&"number"===h.type&&bb(h,"number",h.value)}K=d?ue(d):window;switch(a){case "focusin":if(me(K)||"true"===K.contentEditable)Qe=K,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e)}var Q;if(ae)b:{switch(a){case "compositionstart":var L="onCompositionStart";break b;case "compositionend":L="onCompositionEnd";break b;
case "compositionupdate":L="onCompositionUpdate";break b}L=void 0}else ie?ge(a,c)&&(L="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(L="onCompositionStart");L&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==L?"onCompositionEnd"===L&&ie&&(Q=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),K=oe(d,L),0<K.length&&(L=new Ld(L,a,null,c,e),g.push({event:L,listeners:K}),Q?L.data=Q:(Q=he(c),null!==Q&&(L.data=Q))));if(Q=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),0<d.length&&(e=new Ld("onBeforeInput",
"beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=Q)}se(g,b)})}function ef(a,b,c){return{instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Ob(a,c),null!=f&&d.unshift(ef(a,f,e)),f=Ob(a,b),null!=f&&d.push(ef(a,f,e)));a=a.return}return d}function gf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function hf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Ob(c,f),null!=k&&g.unshift(ef(c,k,h))):e||(k=Ob(c,f),null!=k&&g.push(ef(c,k,h))));c=c.return}0!==g.length&&a.push({event:b,listeners:g})}function jf(){}var kf=null,lf=null;function mf(a,b){switch(a){case "button":case "input":case "select":case "textarea":return!!b.autoFocus}return!1}
function nf(a,b){return"textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}var of="function"===typeof setTimeout?setTimeout:void 0,pf="function"===typeof clearTimeout?clearTimeout:void 0;function qf(a){1===a.nodeType?a.textContent="":9===a.nodeType&&(a=a.body,null!=a&&(a.textContent=""))}
function rf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function sf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--}else"/$"===c&&b++}a=a.previousSibling}return null}var tf=0;function uf(a){return{$$typeof:Ga,toString:a,valueOf:a}}var vf=Math.random().toString(36).slice(2),wf="__reactFiber$"+vf,xf="__reactProps$"+vf,ff="__reactContainer$"+vf,yf="__reactEvents$"+vf;
function wc(a){var b=a[wf];if(b)return b;for(var c=a.parentNode;c;){if(b=c[ff]||c[wf]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=sf(a);null!==a;){if(c=a[wf])return c;a=sf(a)}return b}a=c;c=a.parentNode}return null}function Cb(a){a=a[wf]||a[ff];return!a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(y(33));}function Db(a){return a[xf]||null}
function $e(a){var b=a[yf];void 0===b&&(b=a[yf]=new Set);return b}var zf=[],Af=-1;function Bf(a){return{current:a}}function H(a){0>Af||(a.current=zf[Af],zf[Af]=null,Af--)}function I(a,b){Af++;zf[Af]=a.current;a.current=b}var Cf={},M=Bf(Cf),N=Bf(!1),Df=Cf;
function Ef(a,b){var c=a.type.contextTypes;if(!c)return Cf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function Ff(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Gf(){H(N);H(M)}function Hf(a,b,c){if(M.current!==Cf)throw Error(y(168));I(M,b);I(N,c)}
function If(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(y(108,Ra(b)||"Unknown",e));return m({},c,d)}function Jf(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Cf;Df=M.current;I(M,a);I(N,N.current);return!0}function Kf(a,b,c){var d=a.stateNode;if(!d)throw Error(y(169));c?(a=If(a,b,Df),d.__reactInternalMemoizedMergedChildContext=a,H(N),H(M),I(M,a)):H(N);I(N,c)}
var Lf=null,Mf=null,Nf=r.unstable_runWithPriority,Of=r.unstable_scheduleCallback,Pf=r.unstable_cancelCallback,Qf=r.unstable_shouldYield,Rf=r.unstable_requestPaint,Sf=r.unstable_now,Tf=r.unstable_getCurrentPriorityLevel,Uf=r.unstable_ImmediatePriority,Vf=r.unstable_UserBlockingPriority,Wf=r.unstable_NormalPriority,Xf=r.unstable_LowPriority,Yf=r.unstable_IdlePriority,Zf={},$f=void 0!==Rf?Rf:function(){},ag=null,bg=null,cg=!1,dg=Sf(),O=1E4>dg?Sf:function(){return Sf()-dg};
function eg(){switch(Tf()){case Uf:return 99;case Vf:return 98;case Wf:return 97;case Xf:return 96;case Yf:return 95;default:throw Error(y(332));}}function fg(a){switch(a){case 99:return Uf;case 98:return Vf;case 97:return Wf;case 96:return Xf;case 95:return Yf;default:throw Error(y(332));}}function gg(a,b){a=fg(a);return Nf(a,b)}function hg(a,b,c){a=fg(a);return Of(a,b,c)}function ig(){if(null!==bg){var a=bg;bg=null;Pf(a)}jg()}
function jg(){if(!cg&&null!==ag){cg=!0;var a=0;try{var b=ag;gg(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});ag=null}catch(c){throw null!==ag&&(ag=ag.slice(a+1)),Of(Uf,ig),c;}finally{cg=!1}}}var kg=ra.ReactCurrentBatchConfig;function lg(a,b){if(a&&a.defaultProps){b=m({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var mg=Bf(null),ng=null,og=null,pg=null;function qg(){pg=og=ng=null}
function rg(a){var b=mg.current;H(mg);a.type._context._currentValue=b}function sg(a,b){for(;null!==a;){var c=a.alternate;if((a.childLanes&b)===b)if(null===c||(c.childLanes&b)===b)break;else c.childLanes|=b;else a.childLanes|=b,null!==c&&(c.childLanes|=b);a=a.return}}function tg(a,b){ng=a;pg=og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(ug=!0),a.firstContext=null)}
function vg(a,b){if(pg!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)pg=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===og){if(null===ng)throw Error(y(308));og=b;ng.dependencies={lanes:0,firstContext:b,responders:null}}else og=og.next=b}return a._currentValue}var wg=!1;function xg(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}
function yg(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects})}function zg(a,b){return{eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}function Ag(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b}}
function Bg(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next}while(null!==c);null===f?e=f=b:f=f.next=b}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b}
function Cg(a,b,c,d){var e=a.updateQueue;wg=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var n=a.alternate;if(null!==n){n=n.updateQueue;var A=n.lastBaseUpdate;A!==g&&(null===A?n.firstBaseUpdate=l:A.next=l,n.lastBaseUpdate=k)}}if(null!==f){A=e.baseState;g=0;n=l=k=null;do{h=f.lane;var p=f.eventTime;if((d&h)===h){null!==n&&(n=n.next={eventTime:p,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,
next:null});a:{var C=a,x=f;h=b;p=c;switch(x.tag){case 1:C=x.payload;if("function"===typeof C){A=C.call(p,A,h);break a}A=C;break a;case 3:C.flags=C.flags&-4097|64;case 0:C=x.payload;h="function"===typeof C?C.call(p,A,h):C;if(null===h||void 0===h)break a;A=m({},A,h);break a;case 2:wg=!0}}null!==f.callback&&(a.flags|=32,h=e.effects,null===h?e.effects=[f]:h.push(f))}else p={eventTime:p,lane:h,tag:f.tag,payload:f.payload,callback:f.callback,next:null},null===n?(l=n=p,k=A):n=n.next=p,g|=h;f=f.next;if(null===
f)if(h=e.shared.pending,null===h)break;else f=h.next,h.next=null,e.lastBaseUpdate=h,e.shared.pending=null}while(1);null===n&&(k=A);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=n;Dg|=g;a.lanes=g;a.memoizedState=A}}function Eg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(y(191,e));e.call(d)}}}var Fg=(new aa.Component).refs;
function Gg(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:m({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c)}
var Kg={isMounted:function(a){return(a=a._reactInternals)?Zb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=Hg(),e=Ig(a),f=zg(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);Ag(a,f);Jg(a,e,d)},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=Hg(),d=Ig(a),e=zg(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=
b);Ag(a,e);Jg(a,d,c)}};function Lg(a,b,c,d,e,f,g){a=a.stateNode;return"function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Je(c,d)||!Je(e,f):!0}
function Mg(a,b,c){var d=!1,e=Cf;var f=b.contextType;"object"===typeof f&&null!==f?f=vg(f):(e=Ff(b)?Df:M.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Ef(a,e):Cf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Kg;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function Ng(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Kg.enqueueReplaceState(b,b.state,null)}
function Og(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=Fg;xg(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=vg(f):(f=Ff(b)?Df:M.current,e.context=Ef(a,f));Cg(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Gg(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||
(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Kg.enqueueReplaceState(e,e.state,null),Cg(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4)}var Pg=Array.isArray;
function Qg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(y(309));var d=c.stateNode}if(!d)throw Error(y(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===Fg&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}if("string"!==typeof a)throw Error(y(284));if(!c._owner)throw Error(y(290,a));}return a}
function Rg(a,b){if("textarea"!==a.type)throw Error(y(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b));}
function Sg(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.flags=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Tg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags=2,
c):d;b.flags=2;return c}function g(b){a&&null===b.alternate&&(b.flags=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Ug(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Qg(a,b,c),d.return=a,d;d=Vg(c.type,c.key,c.props,null,a.mode,d);d.ref=Qg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=
Wg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function n(a,b,c,d,f){if(null===b||7!==b.tag)return b=Xg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function A(a,b,c){if("string"===typeof b||"number"===typeof b)return b=Ug(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case sa:return c=Vg(b.type,b.key,b.props,null,a.mode,c),c.ref=Qg(a,null,b),c.return=a,c;case ta:return b=Wg(b,a.mode,c),b.return=a,b}if(Pg(b)||La(b))return b=Xg(b,
a.mode,c,null),b.return=a,b;Rg(a,b)}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case sa:return c.key===e?c.type===ua?n(a,b,c.props.children,d,e):k(a,b,c,d):null;case ta:return c.key===e?l(a,b,c,d):null}if(Pg(c)||La(c))return null!==e?null:n(a,b,c,d,null);Rg(a,c)}return null}function C(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||
null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case sa:return a=a.get(null===d.key?c:d.key)||null,d.type===ua?n(b,a,d.props.children,e,d.key):k(b,a,d,e);case ta:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e)}if(Pg(d)||La(d))return a=a.get(c)||null,n(b,a,d,e,null);Rg(b,d)}return null}function x(e,g,h,k){for(var l=null,t=null,u=g,z=g=0,q=null;null!==u&&z<h.length;z++){u.index>z?(q=u,u=null):q=u.sibling;var n=p(e,u,h[z],k);if(null===n){null===u&&(u=q);break}a&&u&&null===
n.alternate&&b(e,u);g=f(n,g,z);null===t?l=n:t.sibling=n;t=n;u=q}if(z===h.length)return c(e,u),l;if(null===u){for(;z<h.length;z++)u=A(e,h[z],k),null!==u&&(g=f(u,g,z),null===t?l=u:t.sibling=u,t=u);return l}for(u=d(e,u);z<h.length;z++)q=C(u,e,z,h[z],k),null!==q&&(a&&null!==q.alternate&&u.delete(null===q.key?z:q.key),g=f(q,g,z),null===t?l=q:t.sibling=q,t=q);a&&u.forEach(function(a){return b(e,a)});return l}function w(e,g,h,k){var l=La(h);if("function"!==typeof l)throw Error(y(150));h=l.call(h);if(null==
h)throw Error(y(151));for(var t=l=null,u=g,z=g=0,q=null,n=h.next();null!==u&&!n.done;z++,n=h.next()){u.index>z?(q=u,u=null):q=u.sibling;var w=p(e,u,n.value,k);if(null===w){null===u&&(u=q);break}a&&u&&null===w.alternate&&b(e,u);g=f(w,g,z);null===t?l=w:t.sibling=w;t=w;u=q}if(n.done)return c(e,u),l;if(null===u){for(;!n.done;z++,n=h.next())n=A(e,n.value,k),null!==n&&(g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);return l}for(u=d(e,u);!n.done;z++,n=h.next())n=C(u,e,z,n.value,k),null!==n&&(a&&null!==n.alternate&&
u.delete(null===n.key?z:n.key),g=f(n,g,z),null===t?l=n:t.sibling=n,t=n);a&&u.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k="object"===typeof f&&null!==f&&f.type===ua&&null===f.key;k&&(f=f.props.children);var l="object"===typeof f&&null!==f;if(l)switch(f.$$typeof){case sa:a:{l=f.key;for(k=d;null!==k;){if(k.key===l){switch(k.tag){case 7:if(f.type===ua){c(a,k.sibling);d=e(k,f.props.children);d.return=a;a=d;break a}break;default:if(k.elementType===f.type){c(a,k.sibling);
d=e(k,f.props);d.ref=Qg(a,k,f);d.return=a;a=d;break a}}c(a,k);break}else b(a,k);k=k.sibling}f.type===ua?(d=Xg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Vg(f.type,f.key,f.props,null,a.mode,h),h.ref=Qg(a,d,f),h.return=a,a=h)}return g(a);case ta:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=
Wg(f,a.mode,h);d.return=a;a=d}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=Ug(f,a.mode,h),d.return=a,a=d),g(a);if(Pg(f))return x(a,d,f,h);if(La(f))return w(a,d,f,h);l&&Rg(a,f);if("undefined"===typeof f&&!k)switch(a.tag){case 1:case 22:case 0:case 11:case 15:throw Error(y(152,Ra(a.type)||"Component"));}return c(a,d)}}var Yg=Sg(!0),Zg=Sg(!1),$g={},ah=Bf($g),bh=Bf($g),ch=Bf($g);
function dh(a){if(a===$g)throw Error(y(174));return a}function eh(a,b){I(ch,b);I(bh,a);I(ah,$g);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:mb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=mb(b,a)}H(ah);I(ah,b)}function fh(){H(ah);H(bh);H(ch)}function gh(a){dh(ch.current);var b=dh(ah.current);var c=mb(b,a.type);b!==c&&(I(bh,a),I(ah,c))}function hh(a){bh.current===a&&(H(ah),H(bh))}var P=Bf(0);
function ih(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}return null}var jh=null,kh=null,lh=!1;
function mh(a,b){var c=nh(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.flags=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function oh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}
function ph(a){if(lh){var b=kh;if(b){var c=b;if(!oh(a,b)){b=rf(c.nextSibling);if(!b||!oh(a,b)){a.flags=a.flags&-1025|2;lh=!1;jh=a;return}mh(jh,c)}jh=a;kh=rf(b.firstChild)}else a.flags=a.flags&-1025|2,lh=!1,jh=a}}function qh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;jh=a}
function rh(a){if(a!==jh)return!1;if(!lh)return qh(a),lh=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==b&&!nf(b,a.memoizedProps))for(b=kh;b;)mh(a,b),b=rf(b.nextSibling);qh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(y(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){kh=rf(a.nextSibling);break a}b--}else"$"!==c&&"$!"!==c&&"$?"!==c||b++}a=a.nextSibling}kh=null}}else kh=jh?rf(a.stateNode.nextSibling):null;return!0}
function sh(){kh=jh=null;lh=!1}var th=[];function uh(){for(var a=0;a<th.length;a++)th[a]._workInProgressVersionPrimary=null;th.length=0}var vh=ra.ReactCurrentDispatcher,wh=ra.ReactCurrentBatchConfig,xh=0,R=null,S=null,T=null,yh=!1,zh=!1;function Ah(){throw Error(y(321));}function Bh(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return!1;return!0}
function Ch(a,b,c,d,e,f){xh=f;R=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;vh.current=null===a||null===a.memoizedState?Dh:Eh;a=c(d,e);if(zh){f=0;do{zh=!1;if(!(25>f))throw Error(y(301));f+=1;T=S=null;b.updateQueue=null;vh.current=Fh;a=c(d,e)}while(zh)}vh.current=Gh;b=null!==S&&null!==S.next;xh=0;T=S=R=null;yh=!1;if(b)throw Error(y(300));return a}function Hh(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===T?R.memoizedState=T=a:T=T.next=a;return T}
function Ih(){if(null===S){var a=R.alternate;a=null!==a?a.memoizedState:null}else a=S.next;var b=null===T?R.memoizedState:T.next;if(null!==b)T=b,S=a;else{if(null===a)throw Error(y(310));S=a;a={memoizedState:S.memoizedState,baseState:S.baseState,baseQueue:S.baseQueue,queue:S.queue,next:null};null===T?R.memoizedState=T=a:T=T.next=a}return T}function Jh(a,b){return"function"===typeof b?b(a):b}
function Kh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=S,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g}d.baseQueue=e=f;c.pending=null}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,k=e;do{var l=k.lane;if((xh&l)===l)null!==h&&(h=h.next={lane:0,action:k.action,eagerReducer:k.eagerReducer,eagerState:k.eagerState,next:null}),d=k.eagerReducer===a?k.eagerState:a(d,k.action);else{var n={lane:l,action:k.action,eagerReducer:k.eagerReducer,
eagerState:k.eagerState,next:null};null===h?(g=h=n,f=d):h=h.next=n;R.lanes|=l;Dg|=l}k=k.next}while(null!==k&&k!==e);null===h?f=d:h.next=g;He(d,b.memoizedState)||(ug=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d}return[b.memoizedState,c.dispatch]}
function Lh(a){var b=Ih(),c=b.queue;if(null===c)throw Error(y(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f}return[f,d]}
function Mh(a,b,c){var d=b._getVersion;d=d(b._source);var e=b._workInProgressVersionPrimary;if(null!==e)a=e===d;else if(a=a.mutableReadLanes,a=(xh&a)===a)b._workInProgressVersionPrimary=d,th.push(b);if(a)return c(b._source);th.push(b);throw Error(y(350));}
function Nh(a,b,c,d){var e=U;if(null===e)throw Error(y(349));var f=b._getVersion,g=f(b._source),h=vh.current,k=h.useState(function(){return Mh(e,b,c)}),l=k[1],n=k[0];k=T;var A=a.memoizedState,p=A.refs,C=p.getSnapshot,x=A.source;A=A.subscribe;var w=R;a.memoizedState={refs:p,source:b,subscribe:d};h.useEffect(function(){p.getSnapshot=c;p.setSnapshot=l;var a=f(b._source);if(!He(g,a)){a=c(b._source);He(n,a)||(l(a),a=Ig(w),e.mutableReadLanes|=a&e.pendingLanes);a=e.mutableReadLanes;e.entangledLanes|=a;for(var d=
e.entanglements,h=a;0<h;){var k=31-Vc(h),v=1<<k;d[k]|=a;h&=~v}}},[c,b,d]);h.useEffect(function(){return d(b._source,function(){var a=p.getSnapshot,c=p.setSnapshot;try{c(a(b._source));var d=Ig(w);e.mutableReadLanes|=d&e.pendingLanes}catch(q){c(function(){throw q;})}})},[b,d]);He(C,c)&&He(x,b)&&He(A,d)||(a={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:n},a.dispatch=l=Oh.bind(null,R,a),k.queue=a,k.baseQueue=null,n=Mh(e,b,c),k.memoizedState=k.baseState=n);return n}
function Ph(a,b,c){var d=Ih();return Nh(d,a,b,c)}function Qh(a){var b=Hh();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Jh,lastRenderedState:a};a=a.dispatch=Oh.bind(null,R,a);return[b.memoizedState,a]}
function Rh(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=R.updateQueue;null===b?(b={lastEffect:null},R.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function Sh(a){var b=Hh();a={current:a};return b.memoizedState=a}function Th(){return Ih().memoizedState}function Uh(a,b,c,d){var e=Hh();R.flags|=a;e.memoizedState=Rh(1|b,c,void 0,void 0===d?null:d)}
function Vh(a,b,c,d){var e=Ih();d=void 0===d?null:d;var f=void 0;if(null!==S){var g=S.memoizedState;f=g.destroy;if(null!==d&&Bh(d,g.deps)){Rh(b,c,f,d);return}}R.flags|=a;e.memoizedState=Rh(1|b,c,f,d)}function Wh(a,b){return Uh(516,4,a,b)}function Xh(a,b){return Vh(516,4,a,b)}function Yh(a,b){return Vh(4,2,a,b)}function Zh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}
function $h(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Vh(4,2,Zh.bind(null,b,a),c)}function ai(){}function bi(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function ci(a,b){var c=Ih();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Bh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}
function di(a,b){var c=eg();gg(98>c?98:c,function(){a(!0)});gg(97<c?97:c,function(){var c=wh.transition;wh.transition=1;try{a(!1),b()}finally{wh.transition=c}})}
function Oh(a,b,c){var d=Hg(),e=Ig(a),f={lane:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.pending;null===g?f.next=f:(f.next=g.next,g.next=f);b.pending=f;g=a.alternate;if(a===R||null!==g&&g===R)zh=yh=!0;else{if(0===a.lanes&&(null===g||0===g.lanes)&&(g=b.lastRenderedReducer,null!==g))try{var h=b.lastRenderedState,k=g(h,c);f.eagerReducer=g;f.eagerState=k;if(He(k,h))return}catch(l){}finally{}Jg(a,e,d)}}
var Gh={readContext:vg,useCallback:Ah,useContext:Ah,useEffect:Ah,useImperativeHandle:Ah,useLayoutEffect:Ah,useMemo:Ah,useReducer:Ah,useRef:Ah,useState:Ah,useDebugValue:Ah,useDeferredValue:Ah,useTransition:Ah,useMutableSource:Ah,useOpaqueIdentifier:Ah,unstable_isNewReconciler:!1},Dh={readContext:vg,useCallback:function(a,b){Hh().memoizedState=[a,void 0===b?null:b];return a},useContext:vg,useEffect:Wh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Uh(4,2,Zh.bind(null,
b,a),c)},useLayoutEffect:function(a,b){return Uh(4,2,a,b)},useMemo:function(a,b){var c=Hh();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Hh();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=Oh.bind(null,R,a);return[d.memoizedState,a]},useRef:Sh,useState:Qh,useDebugValue:ai,useDeferredValue:function(a){var b=Qh(a),c=b[0],d=b[1];Wh(function(){var b=wh.transition;
wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Qh(!1),b=a[0];a=di.bind(null,a[1]);Sh(a);return[a,b]},useMutableSource:function(a,b,c){var d=Hh();d.memoizedState={refs:{getSnapshot:b,setSnapshot:null},source:a,subscribe:c};return Nh(d,a,b,c)},useOpaqueIdentifier:function(){if(lh){var a=!1,b=uf(function(){a||(a=!0,c("r:"+(tf++).toString(36)));throw Error(y(355));}),c=Qh(b)[1];0===(R.mode&2)&&(R.flags|=516,Rh(5,function(){c("r:"+(tf++).toString(36))},
void 0,null));return b}b="r:"+(tf++).toString(36);Qh(b);return b},unstable_isNewReconciler:!1},Eh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Kh,useRef:Th,useState:function(){return Kh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Kh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Kh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Kh(Jh)[0]},unstable_isNewReconciler:!1},Fh={readContext:vg,useCallback:bi,useContext:vg,useEffect:Xh,useImperativeHandle:$h,useLayoutEffect:Yh,useMemo:ci,useReducer:Lh,useRef:Th,useState:function(){return Lh(Jh)},useDebugValue:ai,useDeferredValue:function(a){var b=Lh(Jh),c=b[0],d=b[1];Xh(function(){var b=wh.transition;wh.transition=1;try{d(a)}finally{wh.transition=b}},[a]);return c},useTransition:function(){var a=Lh(Jh)[0];return[Th().current,
a]},useMutableSource:Ph,useOpaqueIdentifier:function(){return Lh(Jh)[0]},unstable_isNewReconciler:!1},ei=ra.ReactCurrentOwner,ug=!1;function fi(a,b,c,d){b.child=null===a?Zg(b,null,c,d):Yg(b,a.child,c,d)}function gi(a,b,c,d,e){c=c.render;var f=b.ref;tg(b,e);d=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,d,e);return b.child}
function ii(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!ji(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ki(a,b,g,d,e,f);a=Vg(c.type,null,d,b,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(0===(e&f)&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Je,c(e,d)&&a.ref===b.ref))return hi(a,b,f);b.flags|=1;a=Tg(g,d);a.ref=b.ref;a.return=b;return b.child=a}
function ki(a,b,c,d,e,f){if(null!==a&&Je(a.memoizedProps,d)&&a.ref===b.ref)if(ug=!1,0!==(f&e))0!==(a.flags&16384)&&(ug=!0);else return b.lanes=a.lanes,hi(a,b,f);return li(a,b,c,d,f)}
function mi(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode||"unstable-defer-without-hiding"===d.mode)if(0===(b.mode&4))b.memoizedState={baseLanes:0},ni(b,c);else if(0!==(c&1073741824))b.memoizedState={baseLanes:0},ni(b,null!==f?f.baseLanes:c);else return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a},ni(b,a),null;else null!==f?(d=f.baseLanes|c,b.memoizedState=null):d=c,ni(b,d);fi(a,b,e,c);return b.child}
function oi(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=128}function li(a,b,c,d,e){var f=Ff(c)?Df:M.current;f=Ef(b,f);tg(b,e);c=Ch(a,b,c,d,f,e);if(null!==a&&!ug)return b.updateQueue=a.updateQueue,b.flags&=-517,a.lanes&=~e,hi(a,b,e);b.flags|=1;fi(a,b,c,e);return b.child}
function pi(a,b,c,d,e){if(Ff(c)){var f=!0;Jf(b)}else f=!1;tg(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),Mg(b,c,d),Og(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=vg(l):(l=Ff(c)?Df:M.current,l=Ef(b,l));var n=c.getDerivedStateFromProps,A="function"===typeof n||"function"===typeof g.getSnapshotBeforeUpdate;A||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&
"function"!==typeof g.componentWillReceiveProps||(h!==d||k!==l)&&Ng(b,g,d,l);wg=!1;var p=b.memoizedState;g.state=p;Cg(b,d,g,e);k=b.memoizedState;h!==d||p!==k||N.current||wg?("function"===typeof n&&(Gg(b,c,n,d),k=b.memoizedState),(h=wg||Lg(b,c,h,d,p,k,l))?(A||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===
typeof g.componentDidMount&&(b.flags|=4)):("function"===typeof g.componentDidMount&&(b.flags|=4),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4),d=!1)}else{g=b.stateNode;yg(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:lg(b.type,h);g.props=l;A=b.pendingProps;p=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=vg(k):(k=Ff(c)?Df:M.current,k=Ef(b,k));var C=c.getDerivedStateFromProps;(n="function"===typeof C||
"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==A||p!==k)&&Ng(b,g,d,k);wg=!1;p=b.memoizedState;g.state=p;Cg(b,d,g,e);var x=b.memoizedState;h!==A||p!==x||N.current||wg?("function"===typeof C&&(Gg(b,c,C,d),x=b.memoizedState),(l=wg||Lg(b,c,l,d,p,x,k))?(n||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,
x,k),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,x,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),b.memoizedProps=d,b.memoizedState=x),g.props=d,g.state=x,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||
h===a.memoizedProps&&p===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&p===a.memoizedState||(b.flags|=256),d=!1)}return qi(a,b,c,d,f,e)}
function qi(a,b,c,d,e,f){oi(a,b);var g=0!==(b.flags&64);if(!d&&!g)return e&&Kf(b,c,!1),hi(a,b,f);d=b.stateNode;ei.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Yg(b,a.child,null,f),b.child=Yg(b,null,h,f)):fi(a,b,h,f);b.memoizedState=d.state;e&&Kf(b,c,!0);return b.child}function ri(a){var b=a.stateNode;b.pendingContext?Hf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Hf(a,b.context,!1);eh(a,b.containerInfo)}
var si={dehydrated:null,retryLane:0};
function ti(a,b,c){var d=b.pendingProps,e=P.current,f=!1,g;(g=0!==(b.flags&64))||(g=null!==a&&null===a.memoizedState?!1:0!==(e&2));g?(f=!0,b.flags&=-65):null!==a&&null===a.memoizedState||void 0===d.fallback||!0===d.unstable_avoidThisFallback||(e|=1);I(P,e&1);if(null===a){void 0!==d.fallback&&ph(b);a=d.children;e=d.fallback;if(f)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},b.memoizedState=si,a;if("number"===typeof d.unstable_expectedLoadTime)return a=ui(b,a,e,c),b.child.memoizedState={baseLanes:c},
b.memoizedState=si,b.lanes=33554432,a;c=vi({mode:"visible",children:a},b.mode,c,null);c.return=b;return b.child=c}if(null!==a.memoizedState){if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}if(f)return d=wi(a,b,d.children,d.fallback,c),f=b.child,e=a.child.memoizedState,f.memoizedState=null===e?{baseLanes:c}:
{baseLanes:e.baseLanes|c},f.childLanes=a.childLanes&~c,b.memoizedState=si,d;c=xi(a,b,d.children,c);b.memoizedState=null;return c}function ui(a,b,c,d){var e=a.mode,f=a.child;b={mode:"hidden",children:b};0===(e&2)&&null!==f?(f.childLanes=0,f.pendingProps=b):f=vi(b,e,0,null);c=Xg(c,e,d,null);f.return=a;c.return=a;f.sibling=c;a.child=f;return c}
function xi(a,b,c,d){var e=a.child;a=e.sibling;c=Tg(e,{mode:"visible",children:c});0===(b.mode&2)&&(c.lanes=d);c.return=b;c.sibling=null;null!==a&&(a.nextEffect=null,a.flags=8,b.firstEffect=b.lastEffect=a);return b.child=c}
function wi(a,b,c,d,e){var f=b.mode,g=a.child;a=g.sibling;var h={mode:"hidden",children:c};0===(f&2)&&b.child!==g?(c=b.child,c.childLanes=0,c.pendingProps=h,g=c.lastEffect,null!==g?(b.firstEffect=c.firstEffect,b.lastEffect=g,g.nextEffect=null):b.firstEffect=b.lastEffect=null):c=Tg(g,h);null!==a?d=Tg(a,d):(d=Xg(d,f,e,null),d.flags|=2);d.return=b;c.return=b;c.sibling=d;b.child=c;return d}function yi(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);sg(a.return,b)}
function zi(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e,lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailMode=e,g.lastEffect=f)}
function Ai(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;fi(a,b,d.children,c);d=P.current;if(0!==(d&2))d=d&1|2,b.flags|=64;else{if(null!==a&&0!==(a.flags&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&yi(a,c);else if(19===a.tag)yi(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return}a.sibling.return=a.return;a=a.sibling}d&=1}I(P,d);if(0===(b.mode&2))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===ih(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);zi(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===ih(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a}zi(b,!0,c,null,f,b.lastEffect);break;case "together":zi(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null}return b.child}
function hi(a,b,c){null!==a&&(b.dependencies=a.dependencies);Dg|=b.lanes;if(0!==(c&b.childLanes)){if(null!==a&&b.child!==a.child)throw Error(y(153));if(null!==b.child){a=b.child;c=Tg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Tg(a,a.pendingProps),c.return=b;c.sibling=null}return b.child}return null}var Bi,Ci,Di,Ei;
Bi=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};Ci=function(){};
Di=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;dh(ah.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "option":e=eb(a,e);d=eb(a,d);f=[];break;case "select":e=m({},e,{value:void 0});d=m({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=jf)}vb(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===
l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&(c||(c={}),c[g]="")}else"dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ca.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||
(c={}),c[g]=k[g])}else c||(f||(f=[]),f.push(l,c)),c=k;else"dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ca.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&G("scroll",a),f||h===k||(f=[])):"object"===typeof k&&null!==k&&k.$$typeof===Ga?k.toString():(f=f||[]).push(l,k))}c&&(f=f||[]).push("style",
c);var l=f;if(b.updateQueue=l)b.flags|=4}};Ei=function(a,b,c,d){c!==d&&(b.flags|=4)};function Fi(a,b){if(!lh)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null}}
function Gi(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ff(b.type)&&Gf(),null;case 3:fh();H(N);H(M);uh();d=b.stateNode;d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)rh(b)?b.flags|=4:d.hydrate||(b.flags|=256);Ci(b);return null;case 5:hh(b);var e=dh(ch.current);c=b.type;if(null!==a&&null!=b.stateNode)Di(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=128);else{if(!d){if(null===
b.stateNode)throw Error(y(166));return null}a=dh(ah.current);if(rh(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[wf]=b;d[xf]=f;switch(c){case "dialog":G("cancel",d);G("close",d);break;case "iframe":case "object":case "embed":G("load",d);break;case "video":case "audio":for(a=0;a<Xe.length;a++)G(Xe[a],d);break;case "source":G("error",d);break;case "img":case "image":case "link":G("error",d);G("load",d);break;case "details":G("toggle",d);break;case "input":Za(d,f);G("invalid",d);break;case "select":d._wrapperState=
{wasMultiple:!!f.multiple};G("invalid",d);break;case "textarea":hb(d,f),G("invalid",d)}vb(c,f);a=null;for(var g in f)f.hasOwnProperty(g)&&(e=f[g],"children"===g?"string"===typeof e?d.textContent!==e&&(a=["children",e]):"number"===typeof e&&d.textContent!==""+e&&(a=["children",""+e]):ca.hasOwnProperty(g)&&null!=e&&"onScroll"===g&&G("scroll",d));switch(c){case "input":Va(d);cb(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=
jf)}d=a;b.updateQueue=d;null!==d&&(b.flags|=4)}else{g=9===e.nodeType?e:e.ownerDocument;a===kb.html&&(a=lb(c));a===kb.html?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[wf]=b;a[xf]=d;Bi(a,b,!1,!1);b.stateNode=a;g=wb(c,d);switch(c){case "dialog":G("cancel",a);G("close",a);
e=d;break;case "iframe":case "object":case "embed":G("load",a);e=d;break;case "video":case "audio":for(e=0;e<Xe.length;e++)G(Xe[e],a);e=d;break;case "source":G("error",a);e=d;break;case "img":case "image":case "link":G("error",a);G("load",a);e=d;break;case "details":G("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);G("invalid",a);break;case "option":e=eb(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=m({},d,{value:void 0});G("invalid",a);break;case "textarea":hb(a,d);e=
gb(a,d);G("invalid",a);break;default:e=d}vb(c,e);var h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?tb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&ob(a,k)):"children"===f?"string"===typeof k?("textarea"!==c||""!==k)&&pb(a,k):"number"===typeof k&&pb(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ca.hasOwnProperty(f)?null!=k&&"onScroll"===f&&G("scroll",a):null!=k&&qa(a,f,k,g))}switch(c){case "input":Va(a);cb(a,d,!1);
break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof e.onClick&&(a.onclick=jf)}mf(c,d)&&(b.flags|=4)}null!==b.ref&&(b.flags|=128)}return null;case 6:if(a&&null!=b.stateNode)Ei(a,b,a.memoizedProps,d);else{if("string"!==typeof d&&null===b.stateNode)throw Error(y(166));
c=dh(ch.current);dh(ah.current);rh(b)?(d=b.stateNode,c=b.memoizedProps,d[wf]=b,d.nodeValue!==c&&(b.flags|=4)):(d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[wf]=b,b.stateNode=d)}return null;case 13:H(P);d=b.memoizedState;if(0!==(b.flags&64))return b.lanes=c,b;d=null!==d;c=!1;null===a?void 0!==b.memoizedProps.fallback&&rh(b):c=null!==a.memoizedState;if(d&&!c&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||0!==(P.current&1))0===V&&(V=3);else{if(0===V||3===V)V=
4;null===U||0===(Dg&134217727)&&0===(Hi&134217727)||Ii(U,W)}if(d||c)b.flags|=4;return null;case 4:return fh(),Ci(b),null===a&&cf(b.stateNode.containerInfo),null;case 10:return rg(b),null;case 17:return Ff(b.type)&&Gf(),null;case 19:H(P);d=b.memoizedState;if(null===d)return null;f=0!==(b.flags&64);g=d.rendering;if(null===g)if(f)Fi(d,!1);else{if(0!==V||null!==a&&0!==(a.flags&64))for(a=b.child;null!==a;){g=ih(a);if(null!==g){b.flags|=64;Fi(d,!1);f=g.updateQueue;null!==f&&(b.updateQueue=f,b.flags|=4);
null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=2,f.nextEffect=null,f.firstEffect=null,f.lastEffect=null,g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,
f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;I(P,P.current&1|2);return b.child}a=a.sibling}null!==d.tail&&O()>Ji&&(b.flags|=64,f=!0,Fi(d,!1),b.lanes=33554432)}else{if(!f)if(a=ih(g),null!==a){if(b.flags|=64,f=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Fi(d,!0),null===d.tail&&"hidden"===d.tailMode&&!g.alternate&&!lh)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*O()-d.renderingStartTime>Ji&&1073741824!==c&&(b.flags|=
64,f=!0,Fi(d,!1),b.lanes=33554432);d.isBackwards?(g.sibling=b.child,b.child=g):(c=d.last,null!==c?c.sibling=g:b.child=g,d.last=g)}return null!==d.tail?(c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=O(),c.sibling=null,b=P.current,I(P,f?b&1|2:b&1),c):null;case 23:case 24:return Ki(),null!==a&&null!==a.memoizedState!==(null!==b.memoizedState)&&"unstable-defer-without-hiding"!==d.mode&&(b.flags|=4),null}throw Error(y(156,b.tag));}
function Li(a){switch(a.tag){case 1:Ff(a.type)&&Gf();var b=a.flags;return b&4096?(a.flags=b&-4097|64,a):null;case 3:fh();H(N);H(M);uh();b=a.flags;if(0!==(b&64))throw Error(y(285));a.flags=b&-4097|64;return a;case 5:return hh(a),null;case 13:return H(P),b=a.flags,b&4096?(a.flags=b&-4097|64,a):null;case 19:return H(P),null;case 4:return fh(),null;case 10:return rg(a),null;case 23:case 24:return Ki(),null;default:return null}}
function Mi(a,b){try{var c="",d=b;do c+=Qa(d),d=d.return;while(d);var e=c}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack}return{value:a,source:b,stack:e}}function Ni(a,b){try{console.error(b.value)}catch(c){setTimeout(function(){throw c;})}}var Oi="function"===typeof WeakMap?WeakMap:Map;function Pi(a,b,c){c=zg(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Qi||(Qi=!0,Ri=d);Ni(a,b)};return c}
function Si(a,b,c){c=zg(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Ni(a,b);return d(e)}}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&(null===Ti?Ti=new Set([this]):Ti.add(this),Ni(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""})});return c}var Ui="function"===typeof WeakSet?WeakSet:Set;
function Vi(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null)}catch(c){Wi(a,c)}else b.current=null}function Xi(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.flags&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:lg(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}return;case 3:b.flags&256&&qf(b.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(y(163));}
function Yi(a,b,c){switch(c.tag){case 0:case 11:case 15:case 22:b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{if(3===(a.tag&3)){var d=a.create;a.destroy=d()}a=a.next}while(a!==b)}b=c.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){a=b=b.next;do{var e=a;d=e.next;e=e.tag;0!==(e&4)&&0!==(e&1)&&(Zi(c,a),$i(c,a));a=d}while(a!==b)}return;case 1:a=c.stateNode;c.flags&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:lg(c.type,b.memoizedProps),a.componentDidUpdate(d,
b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Eg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode}Eg(c,b,a)}return;case 5:a=c.stateNode;null===b&&c.flags&4&&mf(c.type,c.memoizedProps)&&a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&Cc(c))));
return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(y(163));}
function aj(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d=d.style,"function"===typeof d.setProperty?d.setProperty("display","none","important"):d.display="none";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null;d.style.display=sb("display",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?"":c.memoizedProps;else if((23!==c.tag&&24!==c.tag||null===c.memoizedState||c===a)&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===
a)break;for(;null===c.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}
function bj(a,b){if(Mf&&"function"===typeof Mf.onCommitFiberUnmount)try{Mf.onCommitFiberUnmount(Lf,b)}catch(f){}switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var c=a=a.next;do{var d=c,e=d.destroy;d=d.tag;if(void 0!==e)if(0!==(d&4))Zi(b,c);else{d=b;try{e()}catch(f){Wi(d,f)}}c=c.next}while(c!==a)}break;case 1:Vi(b);a=b.stateNode;if("function"===typeof a.componentWillUnmount)try{a.props=b.memoizedProps,a.state=b.memoizedState,a.componentWillUnmount()}catch(f){Wi(b,
f)}break;case 5:Vi(b);break;case 4:cj(a,b)}}function dj(a){a.alternate=null;a.child=null;a.dependencies=null;a.firstEffect=null;a.lastEffect=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.return=null;a.updateQueue=null}function ej(a){return 5===a.tag||3===a.tag||4===a.tag}
function fj(a){a:{for(var b=a.return;null!==b;){if(ej(b))break a;b=b.return}throw Error(y(160));}var c=b;b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(y(161));}c.flags&16&&(pb(b,""),c.flags&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||ej(c.return)){c=null;break a}c=c.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.flags&2)continue b;if(null===
c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.flags&2)){c=c.stateNode;break a}}d?gj(a,c,b):hj(a,c,b)}
function gj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=jf));else if(4!==d&&(a=a.child,null!==a))for(gj(a,b,c),a=a.sibling;null!==a;)gj(a,b,c),a=a.sibling}
function hj(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(hj(a,b,c),a=a.sibling;null!==a;)hj(a,b,c),a=a.sibling}
function cj(a,b){for(var c=b,d=!1,e,f;;){if(!d){d=c.return;a:for(;;){if(null===d)throw Error(y(160));e=d.stateNode;switch(d.tag){case 5:f=!1;break a;case 3:e=e.containerInfo;f=!0;break a;case 4:e=e.containerInfo;f=!0;break a}d=d.return}d=!0}if(5===c.tag||6===c.tag){a:for(var g=a,h=c,k=h;;)if(bj(g,k),null!==k.child&&4!==k.tag)k.child.return=k,k=k.child;else{if(k===h)break a;for(;null===k.sibling;){if(null===k.return||k.return===h)break a;k=k.return}k.sibling.return=k.return;k=k.sibling}f?(g=e,h=c.stateNode,
8===g.nodeType?g.parentNode.removeChild(h):g.removeChild(h)):e.removeChild(c.stateNode)}else if(4===c.tag){if(null!==c.child){e=c.stateNode.containerInfo;f=!0;c.child.return=c;c=c.child;continue}}else if(bj(a,c),null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;4===c.tag&&(d=!1)}c.sibling.return=c.return;c=c.sibling}}
function ij(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:var c=b.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do 3===(d.tag&3)&&(a=d.destroy,d.destroy=void 0,void 0!==a&&a()),d=d.next;while(d!==c)}return;case 1:return;case 5:c=b.stateNode;if(null!=c){d=b.memoizedProps;var e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[xf]=d;"input"===a&&"radio"===d.type&&null!=d.name&&$a(c,d);wb(a,e);b=wb(a,d);for(e=0;e<f.length;e+=
2){var g=f[e],h=f[e+1];"style"===g?tb(c,h):"dangerouslySetInnerHTML"===g?ob(c,h):"children"===g?pb(c,h):qa(c,g,h,b)}switch(a){case "input":ab(c,d);break;case "textarea":ib(c,d);break;case "select":a=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,f=d.value,null!=f?fb(c,!!d.multiple,f,!1):a!==!!d.multiple&&(null!=d.defaultValue?fb(c,!!d.multiple,d.defaultValue,!0):fb(c,!!d.multiple,d.multiple?[]:"",!1))}}}return;case 6:if(null===b.stateNode)throw Error(y(162));b.stateNode.nodeValue=
b.memoizedProps;return;case 3:c=b.stateNode;c.hydrate&&(c.hydrate=!1,Cc(c.containerInfo));return;case 12:return;case 13:null!==b.memoizedState&&(jj=O(),aj(b.child,!0));kj(b);return;case 19:kj(b);return;case 17:return;case 23:case 24:aj(b,null!==b.memoizedState);return}throw Error(y(163));}function kj(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Ui);b.forEach(function(b){var d=lj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d))})}}
function mj(a,b){return null!==a&&(a=a.memoizedState,null===a||null!==a.dehydrated)?(b=b.memoizedState,null!==b&&null===b.dehydrated):!1}var nj=Math.ceil,oj=ra.ReactCurrentDispatcher,pj=ra.ReactCurrentOwner,X=0,U=null,Y=null,W=0,qj=0,rj=Bf(0),V=0,sj=null,tj=0,Dg=0,Hi=0,uj=0,vj=null,jj=0,Ji=Infinity;function wj(){Ji=O()+500}var Z=null,Qi=!1,Ri=null,Ti=null,xj=!1,yj=null,zj=90,Aj=[],Bj=[],Cj=null,Dj=0,Ej=null,Fj=-1,Gj=0,Hj=0,Ij=null,Jj=!1;function Hg(){return 0!==(X&48)?O():-1!==Fj?Fj:Fj=O()}
function Ig(a){a=a.mode;if(0===(a&2))return 1;if(0===(a&4))return 99===eg()?1:2;0===Gj&&(Gj=tj);if(0!==kg.transition){0!==Hj&&(Hj=null!==vj?vj.pendingLanes:0);a=Gj;var b=4186112&~Hj;b&=-b;0===b&&(a=4186112&~a,b=a&-a,0===b&&(b=8192));return b}a=eg();0!==(X&4)&&98===a?a=Xc(12,Gj):(a=Sc(a),a=Xc(a,Gj));return a}
function Jg(a,b,c){if(50<Dj)throw Dj=0,Ej=null,Error(y(185));a=Kj(a,b);if(null===a)return null;$c(a,b,c);a===U&&(Hi|=b,4===V&&Ii(a,W));var d=eg();1===b?0!==(X&8)&&0===(X&48)?Lj(a):(Mj(a,c),0===X&&(wj(),ig())):(0===(X&4)||98!==d&&99!==d||(null===Cj?Cj=new Set([a]):Cj.add(a)),Mj(a,c));vj=a}function Kj(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}
function Mj(a,b){for(var c=a.callbackNode,d=a.suspendedLanes,e=a.pingedLanes,f=a.expirationTimes,g=a.pendingLanes;0<g;){var h=31-Vc(g),k=1<<h,l=f[h];if(-1===l){if(0===(k&d)||0!==(k&e)){l=b;Rc(k);var n=F;f[h]=10<=n?l+250:6<=n?l+5E3:-1}}else l<=b&&(a.expiredLanes|=k);g&=~k}d=Uc(a,a===U?W:0);b=F;if(0===d)null!==c&&(c!==Zf&&Pf(c),a.callbackNode=null,a.callbackPriority=0);else{if(null!==c){if(a.callbackPriority===b)return;c!==Zf&&Pf(c)}15===b?(c=Lj.bind(null,a),null===ag?(ag=[c],bg=Of(Uf,jg)):ag.push(c),
c=Zf):14===b?c=hg(99,Lj.bind(null,a)):(c=Tc(b),c=hg(c,Nj.bind(null,a)));a.callbackPriority=b;a.callbackNode=c}}
function Nj(a){Fj=-1;Hj=Gj=0;if(0!==(X&48))throw Error(y(327));var b=a.callbackNode;if(Oj()&&a.callbackNode!==b)return null;var c=Uc(a,a===U?W:0);if(0===c)return null;var d=c;var e=X;X|=16;var f=Pj();if(U!==a||W!==d)wj(),Qj(a,d);do try{Rj();break}catch(h){Sj(a,h)}while(1);qg();oj.current=f;X=e;null!==Y?d=0:(U=null,W=0,d=V);if(0!==(tj&Hi))Qj(a,0);else if(0!==d){2===d&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),c=Wc(a),0!==c&&(d=Tj(a,c)));if(1===d)throw b=sj,Qj(a,0),Ii(a,c),Mj(a,O()),b;a.finishedWork=
a.current.alternate;a.finishedLanes=c;switch(d){case 0:case 1:throw Error(y(345));case 2:Uj(a);break;case 3:Ii(a,c);if((c&62914560)===c&&(d=jj+500-O(),10<d)){if(0!==Uc(a,0))break;e=a.suspendedLanes;if((e&c)!==c){Hg();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=of(Uj.bind(null,a),d);break}Uj(a);break;case 4:Ii(a,c);if((c&4186112)===c)break;d=a.eventTimes;for(e=-1;0<c;){var g=31-Vc(c);f=1<<g;g=d[g];g>e&&(e=g);c&=~f}c=e;c=O()-c;c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3E3>c?3E3:4320>
c?4320:1960*nj(c/1960))-c;if(10<c){a.timeoutHandle=of(Uj.bind(null,a),c);break}Uj(a);break;case 5:Uj(a);break;default:throw Error(y(329));}}Mj(a,O());return a.callbackNode===b?Nj.bind(null,a):null}function Ii(a,b){b&=~uj;b&=~Hi;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-Vc(b),d=1<<c;a[c]=-1;b&=~d}}
function Lj(a){if(0!==(X&48))throw Error(y(327));Oj();if(a===U&&0!==(a.expiredLanes&W)){var b=W;var c=Tj(a,b);0!==(tj&Hi)&&(b=Uc(a,b),c=Tj(a,b))}else b=Uc(a,0),c=Tj(a,b);0!==a.tag&&2===c&&(X|=64,a.hydrate&&(a.hydrate=!1,qf(a.containerInfo)),b=Wc(a),0!==b&&(c=Tj(a,b)));if(1===c)throw c=sj,Qj(a,0),Ii(a,b),Mj(a,O()),c;a.finishedWork=a.current.alternate;a.finishedLanes=b;Uj(a);Mj(a,O());return null}
function Vj(){if(null!==Cj){var a=Cj;Cj=null;a.forEach(function(a){a.expiredLanes|=24&a.pendingLanes;Mj(a,O())})}ig()}function Wj(a,b){var c=X;X|=1;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function Xj(a,b){var c=X;X&=-2;X|=8;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}}function ni(a,b){I(rj,qj);qj|=b;tj|=b}function Ki(){qj=rj.current;H(rj)}
function Qj(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,pf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&Gf();break;case 3:fh();H(N);H(M);uh();break;case 5:hh(d);break;case 4:fh();break;case 13:H(P);break;case 19:H(P);break;case 10:rg(d);break;case 23:case 24:Ki()}c=c.return}U=a;Y=Tg(a.current,null);W=qj=tj=b;V=0;sj=null;uj=Hi=Dg=0}
function Sj(a,b){do{var c=Y;try{qg();vh.current=Gh;if(yh){for(var d=R.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next}yh=!1}xh=0;T=S=R=null;zh=!1;pj.current=null;if(null===c||null===c.return){V=1;sj=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=W;h.flags|=2048;h.firstEffect=h.lastEffect=null;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k;if(0===(h.mode&2)){var n=h.alternate;n?(h.updateQueue=n.updateQueue,h.memoizedState=n.memoizedState,h.lanes=n.lanes):
(h.updateQueue=null,h.memoizedState=null)}var A=0!==(P.current&1),p=g;do{var C;if(C=13===p.tag){var x=p.memoizedState;if(null!==x)C=null!==x.dehydrated?!0:!1;else{var w=p.memoizedProps;C=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:A?!1:!0}}if(C){var z=p.updateQueue;if(null===z){var u=new Set;u.add(l);p.updateQueue=u}else z.add(l);if(0===(p.mode&2)){p.flags|=64;h.flags|=16384;h.flags&=-2981;if(1===h.tag)if(null===h.alternate)h.tag=17;else{var t=zg(-1,1);t.tag=2;Ag(h,t)}h.lanes|=1;break a}k=
void 0;h=b;var q=f.pingCache;null===q?(q=f.pingCache=new Oi,k=new Set,q.set(l,k)):(k=q.get(l),void 0===k&&(k=new Set,q.set(l,k)));if(!k.has(h)){k.add(h);var v=Yj.bind(null,f,l,h);l.then(v,v)}p.flags|=4096;p.lanes=b;break a}p=p.return}while(null!==p);k=Error((Ra(h.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.")}5!==V&&(V=2);k=Mi(k,h);p=
g;do{switch(p.tag){case 3:f=k;p.flags|=4096;b&=-b;p.lanes|=b;var J=Pi(p,f,b);Bg(p,J);break a;case 1:f=k;var K=p.type,Q=p.stateNode;if(0===(p.flags&64)&&("function"===typeof K.getDerivedStateFromError||null!==Q&&"function"===typeof Q.componentDidCatch&&(null===Ti||!Ti.has(Q)))){p.flags|=4096;b&=-b;p.lanes|=b;var L=Si(p,f,b);Bg(p,L);break a}}p=p.return}while(null!==p)}Zj(c)}catch(va){b=va;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}
function Pj(){var a=oj.current;oj.current=Gh;return null===a?Gh:a}function Tj(a,b){var c=X;X|=16;var d=Pj();U===a&&W===b||Qj(a,b);do try{ak();break}catch(e){Sj(a,e)}while(1);qg();X=c;oj.current=d;if(null!==Y)throw Error(y(261));U=null;W=0;return V}function ak(){for(;null!==Y;)bk(Y)}function Rj(){for(;null!==Y&&!Qf();)bk(Y)}function bk(a){var b=ck(a.alternate,a,qj);a.memoizedProps=a.pendingProps;null===b?Zj(a):Y=b;pj.current=null}
function Zj(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&2048)){c=Gi(c,b,qj);if(null!==c){Y=c;return}c=b;if(24!==c.tag&&23!==c.tag||null===c.memoizedState||0!==(qj&1073741824)||0===(c.mode&4)){for(var d=0,e=c.child;null!==e;)d|=e.lanes|e.childLanes,e=e.sibling;c.childLanes=d}null!==a&&0===(a.flags&2048)&&(null===a.firstEffect&&(a.firstEffect=b.firstEffect),null!==b.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=b.firstEffect),a.lastEffect=b.lastEffect),1<b.flags&&(null!==
a.lastEffect?a.lastEffect.nextEffect=b:a.firstEffect=b,a.lastEffect=b))}else{c=Li(b);if(null!==c){c.flags&=2047;Y=c;return}null!==a&&(a.firstEffect=a.lastEffect=null,a.flags|=2048)}b=b.sibling;if(null!==b){Y=b;return}Y=b=a}while(null!==b);0===V&&(V=5)}function Uj(a){var b=eg();gg(99,dk.bind(null,a,b));return null}
function dk(a,b){do Oj();while(null!==yj);if(0!==(X&48))throw Error(y(327));var c=a.finishedWork;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(y(177));a.callbackNode=null;var d=c.lanes|c.childLanes,e=d,f=a.pendingLanes&~e;a.pendingLanes=e;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=e;a.mutableReadLanes&=e;a.entangledLanes&=e;e=a.entanglements;for(var g=a.eventTimes,h=a.expirationTimes;0<f;){var k=31-Vc(f),l=1<<k;e[k]=0;g[k]=-1;h[k]=-1;f&=~l}null!==
Cj&&0===(d&24)&&Cj.has(a)&&Cj.delete(a);a===U&&(Y=U=null,W=0);1<c.flags?null!==c.lastEffect?(c.lastEffect.nextEffect=c,d=c.firstEffect):d=c:d=c.firstEffect;if(null!==d){e=X;X|=32;pj.current=null;kf=fd;g=Ne();if(Oe(g)){if("selectionStart"in g)h={start:g.selectionStart,end:g.selectionEnd};else a:if(h=(h=g.ownerDocument)&&h.defaultView||window,(l=h.getSelection&&h.getSelection())&&0!==l.rangeCount){h=l.anchorNode;f=l.anchorOffset;k=l.focusNode;l=l.focusOffset;try{h.nodeType,k.nodeType}catch(va){h=null;
break a}var n=0,A=-1,p=-1,C=0,x=0,w=g,z=null;b:for(;;){for(var u;;){w!==h||0!==f&&3!==w.nodeType||(A=n+f);w!==k||0!==l&&3!==w.nodeType||(p=n+l);3===w.nodeType&&(n+=w.nodeValue.length);if(null===(u=w.firstChild))break;z=w;w=u}for(;;){if(w===g)break b;z===h&&++C===f&&(A=n);z===k&&++x===l&&(p=n);if(null!==(u=w.nextSibling))break;w=z;z=w.parentNode}w=u}h=-1===A||-1===p?null:{start:A,end:p}}else h=null;h=h||{start:0,end:0}}else h=null;lf={focusedElem:g,selectionRange:h};fd=!1;Ij=null;Jj=!1;Z=d;do try{ek()}catch(va){if(null===
Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Ij=null;Z=d;do try{for(g=a;null!==Z;){var t=Z.flags;t&16&&pb(Z.stateNode,"");if(t&128){var q=Z.alternate;if(null!==q){var v=q.ref;null!==v&&("function"===typeof v?v(null):v.current=null)}}switch(t&1038){case 2:fj(Z);Z.flags&=-3;break;case 6:fj(Z);Z.flags&=-3;ij(Z.alternate,Z);break;case 1024:Z.flags&=-1025;break;case 1028:Z.flags&=-1025;ij(Z.alternate,Z);break;case 4:ij(Z.alternate,Z);break;case 8:h=Z;cj(g,h);var J=h.alternate;dj(h);null!==
J&&dj(J)}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);v=lf;q=Ne();t=v.focusedElem;g=v.selectionRange;if(q!==t&&t&&t.ownerDocument&&Me(t.ownerDocument.documentElement,t)){null!==g&&Oe(t)&&(q=g.start,v=g.end,void 0===v&&(v=q),"selectionStart"in t?(t.selectionStart=q,t.selectionEnd=Math.min(v,t.value.length)):(v=(q=t.ownerDocument||document)&&q.defaultView||window,v.getSelection&&(v=v.getSelection(),h=t.textContent.length,J=Math.min(g.start,h),g=void 0===
g.end?J:Math.min(g.end,h),!v.extend&&J>g&&(h=g,g=J,J=h),h=Le(t,J),f=Le(t,g),h&&f&&(1!==v.rangeCount||v.anchorNode!==h.node||v.anchorOffset!==h.offset||v.focusNode!==f.node||v.focusOffset!==f.offset)&&(q=q.createRange(),q.setStart(h.node,h.offset),v.removeAllRanges(),J>g?(v.addRange(q),v.extend(f.node,f.offset)):(q.setEnd(f.node,f.offset),v.addRange(q))))));q=[];for(v=t;v=v.parentNode;)1===v.nodeType&&q.push({element:v,left:v.scrollLeft,top:v.scrollTop});"function"===typeof t.focus&&t.focus();for(t=
0;t<q.length;t++)v=q[t],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}fd=!!kf;lf=kf=null;a.current=c;Z=d;do try{for(t=a;null!==Z;){var K=Z.flags;K&36&&Yi(t,Z.alternate,Z);if(K&128){q=void 0;var Q=Z.ref;if(null!==Q){var L=Z.stateNode;switch(Z.tag){case 5:q=L;break;default:q=L}"function"===typeof Q?Q(q):Q.current=q}}Z=Z.nextEffect}}catch(va){if(null===Z)throw Error(y(330));Wi(Z,va);Z=Z.nextEffect}while(null!==Z);Z=null;$f();X=e}else a.current=c;if(xj)xj=!1,yj=a,zj=b;else for(Z=d;null!==Z;)b=
Z.nextEffect,Z.nextEffect=null,Z.flags&8&&(K=Z,K.sibling=null,K.stateNode=null),Z=b;d=a.pendingLanes;0===d&&(Ti=null);1===d?a===Ej?Dj++:(Dj=0,Ej=a):Dj=0;c=c.stateNode;if(Mf&&"function"===typeof Mf.onCommitFiberRoot)try{Mf.onCommitFiberRoot(Lf,c,void 0,64===(c.current.flags&64))}catch(va){}Mj(a,O());if(Qi)throw Qi=!1,a=Ri,Ri=null,a;if(0!==(X&8))return null;ig();return null}
function ek(){for(;null!==Z;){var a=Z.alternate;Jj||null===Ij||(0!==(Z.flags&8)?dc(Z,Ij)&&(Jj=!0):13===Z.tag&&mj(a,Z)&&dc(Z,Ij)&&(Jj=!0));var b=Z.flags;0!==(b&256)&&Xi(a,Z);0===(b&512)||xj||(xj=!0,hg(97,function(){Oj();return null}));Z=Z.nextEffect}}function Oj(){if(90!==zj){var a=97<zj?97:zj;zj=90;return gg(a,fk)}return!1}function $i(a,b){Aj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}function Zi(a,b){Bj.push(b,a);xj||(xj=!0,hg(97,function(){Oj();return null}))}
function fk(){if(null===yj)return!1;var a=yj;yj=null;if(0!==(X&48))throw Error(y(331));var b=X;X|=32;var c=Bj;Bj=[];for(var d=0;d<c.length;d+=2){var e=c[d],f=c[d+1],g=e.destroy;e.destroy=void 0;if("function"===typeof g)try{g()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}c=Aj;Aj=[];for(d=0;d<c.length;d+=2){e=c[d];f=c[d+1];try{var h=e.create;e.destroy=h()}catch(k){if(null===f)throw Error(y(330));Wi(f,k)}}for(h=a.current.firstEffect;null!==h;)a=h.nextEffect,h.nextEffect=null,h.flags&8&&(h.sibling=
null,h.stateNode=null),h=a;X=b;ig();return!0}function gk(a,b,c){b=Mi(c,b);b=Pi(a,b,1);Ag(a,b);b=Hg();a=Kj(a,1);null!==a&&($c(a,1,b),Mj(a,b))}
function Wi(a,b){if(3===a.tag)gk(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){gk(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d))){a=Mi(b,a);var e=Si(c,a,1);Ag(c,e);e=Hg();c=Kj(c,1);if(null!==c)$c(c,1,e),Mj(c,e);else if("function"===typeof d.componentDidCatch&&(null===Ti||!Ti.has(d)))try{d.componentDidCatch(b,a)}catch(f){}break}}c=c.return}}
function Yj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=Hg();a.pingedLanes|=a.suspendedLanes&c;U===a&&(W&c)===c&&(4===V||3===V&&(W&62914560)===W&&500>O()-jj?Qj(a,0):uj|=c);Mj(a,b)}function lj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=a.mode,0===(b&2)?b=1:0===(b&4)?b=99===eg()?1:2:(0===Gj&&(Gj=tj),b=Yc(62914560&~Gj),0===b&&(b=4194304)));c=Hg();a=Kj(a,b);null!==a&&($c(a,b,c),Mj(a,c))}var ck;
ck=function(a,b,c){var d=b.lanes;if(null!==a)if(a.memoizedProps!==b.pendingProps||N.current)ug=!0;else if(0!==(c&d))ug=0!==(a.flags&16384)?!0:!1;else{ug=!1;switch(b.tag){case 3:ri(b);sh();break;case 5:gh(b);break;case 1:Ff(b.type)&&Jf(b);break;case 4:eh(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;var e=b.type._context;I(mg,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){if(0!==(c&b.child.childLanes))return ti(a,b,c);I(P,P.current&1);b=hi(a,b,c);return null!==
b?b.sibling:null}I(P,P.current&1);break;case 19:d=0!==(c&b.childLanes);if(0!==(a.flags&64)){if(d)return Ai(a,b,c);b.flags|=64}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);I(P,P.current);if(d)break;else return null;case 23:case 24:return b.lanes=0,mi(a,b,c)}return hi(a,b,c)}else ug=!1;b.lanes=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);a=b.pendingProps;e=Ef(b,M.current);tg(b,c);e=Ch(null,b,d,a,e,c);b.flags|=1;if("object"===
typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(Ff(d)){var f=!0;Jf(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;xg(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Gg(b,d,g,a);e.updater=Kg;b.stateNode=e;e._reactInternals=b;Og(b,d,a,c);b=qi(null,b,d,!0,f,c)}else b.tag=0,fi(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;a:{null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);
a=b.pendingProps;f=e._init;e=f(e._payload);b.type=e;f=b.tag=hk(e);a=lg(e,a);switch(f){case 0:b=li(null,b,e,a,c);break a;case 1:b=pi(null,b,e,a,c);break a;case 11:b=gi(null,b,e,a,c);break a;case 14:b=ii(null,b,e,lg(e.type,a),d,c);break a}throw Error(y(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),li(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),pi(a,b,d,e,c);case 3:ri(b);d=b.updateQueue;if(null===a||null===d)throw Error(y(282));
d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;yg(a,b);Cg(b,d,null,c);d=b.memoizedState.element;if(d===e)sh(),b=hi(a,b,c);else{e=b.stateNode;if(f=e.hydrate)kh=rf(b.stateNode.containerInfo.firstChild),jh=b,f=lh=!0;if(f){a=e.mutableSourceEagerHydrationData;if(null!=a)for(e=0;e<a.length;e+=2)f=a[e],f._workInProgressVersionPrimary=a[e+1],th.push(f);c=Zg(b,null,d,c);for(b.child=c;c;)c.flags=c.flags&-3|1024,c=c.sibling}else fi(a,b,d,c),sh();b=b.child}return b;case 5:return gh(b),null===a&&
ph(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,nf(d,e)?g=null:null!==f&&nf(d,f)&&(b.flags|=16),oi(a,b),fi(a,b,g,c),b.child;case 6:return null===a&&ph(b),null;case 13:return ti(a,b,c);case 4:return eh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Yg(b,null,d,c):fi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),gi(a,b,d,e,c);case 7:return fi(a,b,b.pendingProps,c),b.child;case 8:return fi(a,b,b.pendingProps.children,
c),b.child;case 12:return fi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;I(mg,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=He(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!N.current){b=hi(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var k=h.dependencies;if(null!==k){g=h.child;for(var l=
k.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=zg(-1,c&-c),l.tag=2,Ag(h,l));h.lanes|=c;l=h.alternate;null!==l&&(l.lanes|=c);sg(h.return,c);k.lanes|=c;break}l=l.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}fi(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,tg(b,c),e=vg(e,
f.unstable_observedBits),d=d(e),b.flags|=1,fi(a,b,d,c),b.child;case 14:return e=b.type,f=lg(e,b.pendingProps),f=lg(e.type,f),ii(a,b,e,f,d,c);case 15:return ki(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:lg(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2),b.tag=1,Ff(d)?(a=!0,Jf(b)):a=!1,tg(b,c),Mg(b,d,e),Og(b,d,e,c),qi(null,b,d,!0,a,c);case 19:return Ai(a,b,c);case 23:return mi(a,b,c);case 24:return mi(a,b,c)}throw Error(y(156,b.tag));
};function ik(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.flags=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childLanes=this.lanes=0;this.alternate=null}function nh(a,b,c,d){return new ik(a,b,c,d)}function ji(a){a=a.prototype;return!(!a||!a.isReactComponent)}
function hk(a){if("function"===typeof a)return ji(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Aa)return 11;if(a===Da)return 14}return 2}
function Tg(a,b){var c=a.alternate;null===c?(c=nh(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function Vg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)ji(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ua:return Xg(c.children,e,f,b);case Ha:g=8;e|=16;break;case wa:g=8;e|=1;break;case xa:return a=nh(12,c,b,e|8),a.elementType=xa,a.type=xa,a.lanes=f,a;case Ba:return a=nh(13,c,b,e),a.type=Ba,a.elementType=Ba,a.lanes=f,a;case Ca:return a=nh(19,c,b,e),a.elementType=Ca,a.lanes=f,a;case Ia:return vi(c,e,f,b);case Ja:return a=nh(24,c,b,e),a.elementType=Ja,a.lanes=f,a;default:if("object"===
typeof a&&null!==a)switch(a.$$typeof){case ya:g=10;break a;case za:g=9;break a;case Aa:g=11;break a;case Da:g=14;break a;case Ea:g=16;d=null;break a;case Fa:g=22;break a}throw Error(y(130,null==a?a:typeof a,""));}b=nh(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Xg(a,b,c,d){a=nh(7,a,d,b);a.lanes=c;return a}function vi(a,b,c,d){a=nh(23,a,d,b);a.elementType=Ia;a.lanes=c;return a}function Ug(a,b,c){a=nh(6,a,null,b);a.lanes=c;return a}
function Wg(a,b,c){b=nh(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function jk(a,b,c){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=0;this.eventTimes=Zc(0);this.expirationTimes=Zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=Zc(0);this.mutableSourceEagerHydrationData=null}
function kk(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:ta,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function lk(a,b,c,d){var e=b.current,f=Hg(),g=Ig(e);a:if(c){c=c._reactInternals;b:{if(Zb(c)!==c||1!==c.tag)throw Error(y(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(Ff(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return}while(null!==h);throw Error(y(171));}if(1===c.tag){var k=c.type;if(Ff(k)){c=If(c,k,h);break a}}c=h}else c=Cf;null===b.context?b.context=c:b.pendingContext=c;b=zg(f,g);b.payload={element:a};d=void 0===d?null:d;null!==
d&&(b.callback=d);Ag(e,b);Jg(e,g,f);return g}function mk(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function nk(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b}}function ok(a,b){nk(a,b);(a=a.alternate)&&nk(a,b)}function pk(){return null}
function qk(a,b,c){var d=null!=c&&null!=c.hydrationOptions&&c.hydrationOptions.mutableSources||null;c=new jk(a,b,null!=c&&!0===c.hydrate);b=nh(3,null,null,2===b?7:1===b?3:0);c.current=b;b.stateNode=c;xg(b);a[ff]=c.current;cf(8===a.nodeType?a.parentNode:a);if(d)for(a=0;a<d.length;a++){b=d[a];var e=b._getVersion;e=e(b._source);null==c.mutableSourceEagerHydrationData?c.mutableSourceEagerHydrationData=[b,e]:c.mutableSourceEagerHydrationData.push(b,e)}this._internalRoot=c}
qk.prototype.render=function(a){lk(a,this._internalRoot,null,null)};qk.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;lk(null,a,null,function(){b[ff]=null})};function rk(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}
function sk(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new qk(a,0,b?{hydrate:!0}:void 0)}
function tk(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;if("function"===typeof e){var h=e;e=function(){var a=mk(g);h.call(a)}}lk(b,g,a,e)}else{f=c._reactRootContainer=sk(c,d);g=f._internalRoot;if("function"===typeof e){var k=e;e=function(){var a=mk(g);k.call(a)}}Xj(function(){lk(b,g,a,e)})}return mk(g)}ec=function(a){if(13===a.tag){var b=Hg();Jg(a,4,b);ok(a,4)}};fc=function(a){if(13===a.tag){var b=Hg();Jg(a,67108864,b);ok(a,67108864)}};
gc=function(a){if(13===a.tag){var b=Hg(),c=Ig(a);Jg(a,c,b);ok(a,c)}};hc=function(a,b){return b()};
yb=function(a,b,c){switch(b){case "input":ab(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(y(90));Wa(d);ab(d,e)}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1)}};Gb=Wj;
Hb=function(a,b,c,d,e){var f=X;X|=4;try{return gg(98,a.bind(null,b,c,d,e))}finally{X=f,0===X&&(wj(),ig())}};Ib=function(){0===(X&49)&&(Vj(),Oj())};Jb=function(a,b){var c=X;X|=2;try{return a(b)}finally{X=c,0===X&&(wj(),ig())}};function uk(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!rk(b))throw Error(y(200));return kk(a,b,null,c)}var vk={Events:[Cb,ue,Db,Eb,Fb,Oj,{current:!1}]},wk={findFiberByHostInstance:wc,bundleType:0,version:"17.0.1",rendererPackageName:"react-dom"};
var xk={bundleType:wk.bundleType,version:wk.version,rendererPackageName:wk.rendererPackageName,rendererConfig:wk.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ra.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=cc(a);return null===a?null:a.stateNode},findFiberByHostInstance:wk.findFiberByHostInstance||
pk,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var yk=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yk.isDisabled&&yk.supportsFiber)try{Lf=yk.inject(xk),Mf=yk}catch(a){}}exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vk;exports.createPortal=uk;
exports.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(y(188));throw Error(y(268,Object.keys(a)));}a=cc(b);a=null===a?null:a.stateNode;return a};exports.flushSync=function(a,b){var c=X;if(0!==(c&48))return a(b);X|=1;try{if(a)return gg(99,a.bind(null,b))}finally{X=c,ig()}};exports.hydrate=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!0,c)};
exports.render=function(a,b,c){if(!rk(b))throw Error(y(200));return tk(null,a,b,!1,c)};exports.unmountComponentAtNode=function(a){if(!rk(a))throw Error(y(40));return a._reactRootContainer?(Xj(function(){tk(null,null,a,!1,function(){a._reactRootContainer=null;a[ff]=null})}),!0):!1};exports.unstable_batchedUpdates=Wj;exports.unstable_createPortal=function(a,b){return uk(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};
exports.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!rk(c))throw Error(y(200));if(null==a||void 0===a._reactInternals)throw Error(y(38));return tk(a,b,c,!1,d)};exports.version="17.0.1";


/***/ }),

/***/ 6794:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(5771);
} else {}


/***/ }),

/***/ 4118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


module.exports = __webpack_require__(4467);


/***/ }),

/***/ 4467:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(3800);
} else {}


/***/ }),

/***/ 9361:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M423.5 44H407v-8.5c0-12.958-10.542-23.5-23.5-23.5S360 22.542 360 35.5V44H103v-8.5C103 22.542 92.458 12 79.5 12S56 22.542 56 35.5V44H39.5C17.72 44 0 61.72 0 83.5v328C0 433.28 17.72 451 39.5 451h384c21.78 0 39.5-17.72 39.5-39.5v-328c0-21.78-17.72-39.5-39.5-39.5zM375 35.5c0-4.687 3.813-8.5 8.5-8.5s8.5 3.813 8.5 8.5v15.942c0 .02-.003.038-.003.058s.003.038.003.058V67.5c0 4.687-3.813 8.5-8.5 8.5s-8.5-3.813-8.5-8.5v-32zM79.5 27c4.687 0 8.5 3.813 8.5 8.5v32c0 4.687-3.813 8.5-8.5 8.5S71 72.187 71 67.5V51.558c0-.02.003-.038.003-.058S71 51.462 71 51.442V35.5c0-4.687 3.813-8.5 8.5-8.5zm344 409h-384C25.99 436 15 425.01 15 411.5V123h56.498c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5H15V83.5C15 69.99 25.99 59 39.5 59H56v8.5C56 80.458 66.542 91 79.5 91S103 80.458 103 67.5V59h257v8.5c0 12.958 10.542 23.5 23.5 23.5S407 80.458 407 67.5V59h16.5c13.51 0 24.5 10.99 24.5 24.5V108h-40.497c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5H448v288.5c0 13.51-10.99 24.5-24.5 24.5z"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M375.498 108h-15.997c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h15.997c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5zM335.001 115.5c0-4.143-3.357-7.5-7.5-7.5H103.497c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h224.004c4.143 0 7.5-3.357 7.5-7.5zM330.271 235.762h-56.27a5.69 5.69 0 01-5.424-3.94l-17.388-53.516v-.001C248.366 169.615 240.638 164 231.5 164s-16.866 5.615-19.69 14.306l-17.388 53.516a5.69 5.69 0 01-5.424 3.94h-56.27c-9.138 0-16.866 5.615-19.69 14.306-2.823 8.69.129 17.776 7.521 23.146l45.522 33.074a5.69 5.69 0 012.072 6.377l-17.389 53.515c-2.823 8.69.129 17.776 7.521 23.147s16.947 5.371 24.338 0l45.522-33.074a5.689 5.689 0 016.705 0l45.522 33.074c3.696 2.686 7.933 4.028 12.169 4.028s8.473-1.343 12.169-4.028c7.393-5.371 10.345-14.457 7.521-23.147l-17.389-53.515a5.69 5.69 0 012.072-6.377l45.522-33.074c7.393-5.37 10.345-14.456 7.521-23.146-2.819-8.691-10.548-14.306-19.686-14.306zm3.353 25.317l-45.522 33.074a20.65 20.65 0 00-7.521 23.146l17.389 53.515c1.188 3.657-1.286 5.806-2.072 6.377-.785.572-3.592 2.263-6.705.001l-45.522-33.074c-3.64-2.645-7.904-3.967-12.169-3.967s-8.529 1.322-12.169 3.967l-45.522 33.074c-3.113 2.262-5.919.571-6.705-.001-.786-.571-3.26-2.72-2.072-6.377L182.42 317.3a20.65 20.65 0 00-7.521-23.146l-45.522-33.074c-3.11-2.26-2.372-5.452-2.071-6.376.3-.925 1.579-3.941 5.424-3.941H189a20.651 20.651 0 0019.689-14.306l17.388-53.515c1.188-3.657 4.453-3.941 5.425-3.941s4.236.284 5.425 3.94l17.388 53.516a20.651 20.651 0 0019.689 14.306h56.27c3.845 0 5.124 3.017 5.424 3.941.298.923 1.036 4.115-2.074 6.375z"
});

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M267.893 269.317c-11.736 9.127-19.098 22.842-20.198 37.628a52.613 52.613 0 001.938 18.569 7.503 7.503 0 007.201 5.419 7.5 7.5 0 007.209-9.585 37.628 37.628 0 01-1.39-13.29c.786-10.566 6.053-20.371 14.448-26.901a7.499 7.499 0 001.315-10.524 7.496 7.496 0 00-10.523-1.316zM238.553 242.9a7.5 7.5 0 00-9.604-4.502 7.5 7.5 0 00-4.502 9.604 52.585 52.585 0 009.561 16.413 7.486 7.486 0 005.697 2.617 7.501 7.501 0 005.69-12.383 37.603 37.603 0 01-6.842-11.749z"
});

function SvgCalendar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 463 463"
  }, props), _ref, _ref2, _ref3);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgCalendar);

/***/ }),

/***/ 3781:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M6.226 4.811A1 1 0 004.81 6.225L10.586 12l-5.774 5.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.415 12l5.774-5.775a1 1 0 10-1.414-1.414L12 10.586 6.226 4.81z"
});

function SvgClose(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 24,
    height: 24,
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _ref);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgClose);

/***/ }),

/***/ 2956:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  transform: "translate(4 -5)",
  stroke: "#314E55",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M43 32v13s-6.553 4-17 4-17-4-17-4V32",
  fill: "#D8D8D8"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M1.78 27.66c-.983-.505-.981-1.322 0-1.825l22.193-11.37c.983-.504 2.579-.503 3.56 0l22.193 11.37c.983.504.981 1.321 0 1.824L27.533 39.03c-.983.504-2.579.503-3.56 0L1.78 27.66z",
  fill: "#D8D8D8"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M39 34v18"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  fill: "#fff",
  cx: 39,
  cy: 55,
  r: 3
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M10 27l4-2m0 4l4-2"
}));

function SvgEducation(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 50,
    height: 50,
    viewBox: "0 0 60 60",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _ref);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgEducation);

/***/ }),

/***/ 745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  transform: "translate(138 516)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  fill: "#D8D8D8",
  width: 231,
  height: 136,
  rx: 8
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M0 18h231v110.005c0 4.416-3.582 7.995-8.002 7.995H8.002C3.582 136 0 132.42 0 128.005V18z",
  fill: "#F4F4F4"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  transform: "translate(6 6)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  fill: "#DF4E47",
  cx: 4,
  cy: 4,
  r: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  fill: "#D1A839",
  cx: 16,
  cy: 4,
  r: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  fill: "#34B18F",
  cx: 28,
  cy: 4,
  r: 4
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  transform: "translate(650 516)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  fill: "#D8D8D8",
  width: 231,
  height: 136,
  rx: 8
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M0 18h231v110.005c0 4.416-3.582 7.995-8.002 7.995H8.002C3.582 136 0 132.42 0 128.005V18z",
  fill: "#F4F4F4"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  transform: "translate(6 6)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  fill: "#DF4E47",
  cx: 4,
  cy: 4,
  r: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  fill: "#D1A839",
  cx: 16,
  cy: 4,
  r: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  fill: "#34B18F",
  cx: 28,
  cy: 4,
  r: 4
}))));

function SvgClients(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 743,
    height: 136,
    viewBox: "138 516 743 136",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _ref);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgClients);

/***/ }),

/***/ 9616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M423.472 236.786c-.628 0-1.248.034-1.873.048.606-4.96.923-10.008.923-15.131 0-68.231-55.312-123.544-123.544-123.544-42.999 0-80.861 21.971-102.988 55.295-17.892-8.578-37.936-13.385-59.103-13.385C61.287 140.069 0 201.354 0 276.955s61.287 136.886 136.887 136.886h286.584c48.893 0 88.528-39.635 88.528-88.528.001-48.892-39.635-88.527-88.527-88.527z",
  fill: "#8ccfde"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M443.743 393.571H157.158c-75.601 0-136.887-61.287-136.887-136.886 0-32.637 11.428-62.6 30.493-86.123C19.799 195.659 0 233.991 0 276.955c0 75.601 61.287 136.886 136.887 136.886h286.584c29.622 0 55.825-14.563 71.896-36.903-14.534 10.456-32.353 16.633-51.624 16.633zM253.149 189.617c-5.343-22.677-17.562-44.083-34.493-61.768a124.238 124.238 0 00-22.666 25.605c-.615-.295 32.981 17.108 49.354 39.976 2.784 3.884 8.901.839 7.805-3.813z",
  opacity: 0.1
});

function SvgCloud(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512"
  }, props), _ref, _ref2);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgCloud);

/***/ }),

/***/ 8335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  id: "earth_svg__a",
  d: "M0 779h779V0H0z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M389.5 779C174.388 779 0 604.612 0 389.5S174.388 0 389.5 0 779 174.388 779 389.5 604.612 779 389.5 779z",
  id: "earth_svg__d"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("radialGradient", {
  cx: "44.596%",
  cy: "27.344%",
  fx: "44.596%",
  fy: "27.344%",
  r: "33.543%",
  id: "earth_svg__c"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
  stopColor: "#CEE8FC",
  offset: "0%"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("stop", {
  stopColor: "#88C9F9",
  offset: "100%"
})));

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  transform: "matrix(1 0 0 -1 4.765 771.359)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("mask", {
  id: "earth_svg__b",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
  xlinkHref: "#earth_svg__a"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  mask: "url(#earth_svg__b)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M779 389.5C779 174.388 604.612 0 389.5 0S0 174.388 0 389.5 174.388 779 389.5 779 779 604.612 779 389.5",
  fill: "url(#earth_svg__c)",
  fillRule: "nonzero"
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  transform: "matrix(1 0 0 -1 -3.716 770.658)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("mask", {
  id: "earth_svg__e",
  fill: "#fff"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", {
  xlinkHref: "#earth_svg__d"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M166.349 738.427c-43.278 8.115-140.653-52.756-158.224-73.031-17.592-20.276-60.87-124.424-68.984-158.245-8.115-33.8 14.866-178.5 20.275-221.777 5.41-43.278 67.643-119.014 86.577-108.195 18.934 10.82 16.23 31.095 14.866 52.734-1.341 21.64-1.341 25.707-1.341 51.393 0 25.707 12.16 21.638 24.322 33.821 12.183 12.161 9.478 13.524 29.753 26.854 20.298 13.33 9.478 28.585 8.115 36.7-1.342 8.114-13.524 1.363-33.8-1.342-20.276-2.705-13.524 6.751-25.685 12.161-12.183 5.41-17.593 13.524-25.707 37.868-8.115 24.344-9.457 31.095-6.752 51.392 2.705 20.276 12.161 1.342 13.525-20.297 1.341-21.639 20.275-13.524 20.275-27.048 0-13.525 27.049-28.39 33.8-32.459 6.773-4.046 25.707 20.297 32.48 27.049 6.751 6.773 14.866 16.229 17.57 21.639 2.706 5.41 36.506 9.478 43.279 9.478 6.751 0 23.002-20.298 23.002-29.754 0-9.478 8.114-35.163 14.866-50.03 6.773-14.887 21.639-17.591 35.163-28.41 13.524-10.82 20.276-1.343 20.276-1.343s-5.41 22.981-5.41 41.915c0 18.934 16.229 35.163 16.229 35.163s25.707-18.934 27.049-24.344c1.363-5.41 21.66-24.343 23.002-33.8 1.363-9.477 12.182-21.638 32.09-24.343 19.93-2.705 5.778 22.98 12.55 40.573 6.752 17.57 16.23 20.275 28.391 22.98 12.183 2.705 21.639 13.524 29.754 24.344 8.114 10.82 23.002 25.685 21.638 37.868-1.341 12.161-5.41 20.276-10.819 35.163-5.41 14.866 16.23 20.276 25.707 37.868 9.456 17.571 0 0 21.639 5.41 21.617 5.41 12.16 5.41 16.207 13.524 4.068 8.115 6.773 16.23 2.705 31.117-4.046 14.866-18.912 0-33.8 0-14.866 0 5.41 20.276 6.773 36.505 1.342 16.229 20.276 12.182 33.8 13.524 13.525 1.363 17.571-17.57 21.64-21.639 4.046-4.046 45.982 27.049 56.801 41.915 10.82 14.887-9.478 10.82-4.068 17.094 5.41 6.276-32.458 7.552-47.324 9.954-14.888 2.424-52.734 4.068-67.622 13.243-14.866 9.197-71.668 2.272-86.555-5.106-14.866-7.4-24.344.605-31.095 10.819-6.773 10.192-35.185 5.085-43.3 10.82-8.114 5.712-16.229-9.478-27.048-13.525-10.82-4.068-14.866-5.41-28.39 2.705-13.525 8.115 4.046 17.57-14.888 24.344-18.913 6.751-42.997-2.683-93.307 6.751zm178.52-420.606c0-14.866-10.819-31.095 0-45.982 10.82-14.888 20.276-14.888 29.754-16.23 9.456-1.363 36.527 0 14.888 17.571-21.66 17.593-33.822 4.068-31.117 24.366 2.705 20.275-13.524 20.275-13.524 20.275zm151.473 216.39c0-14.867-10.82-31.096 0-45.984 10.82-14.887-21.639-27.048-12.161-28.411 9.456-1.342 50.03 4.068 28.39 21.638-21.639 17.593-5.41 12.183-2.705 32.48 2.705 20.276-13.524 20.276-13.524 20.276zm-98.654-236.676c-10.754-20.276 17.506-12.161 30.922-27.049 13.416-14.866 8.223 0 25.815 6.773 17.571 6.751-14.887 21.617-25.707 29.732-10.82 8.115-21.574 8.417-31.03-9.456zm85.13-11.01c-15.948 8.223-5.41-10.625 0-31.29s25.685-5.042 44.64-15.861c18.935-10.82 20.276 4.068 37.869-1.342 17.57-5.41 24.322-17.592 41.2-16.23 16.857 1.343-12.81 13.525-19.583 21.64-6.751 8.114-21.617 12.16-37.846 11.793-16.23-.39-14.888 17.96-31.117 16.597-16.23-1.342-27.828 10.906-35.163 14.693zM340.062 183.93c-19.432-18.913-8.72-6.752 0-18.934 8.72-12.162-9.565-50.051-10.906-71.668-1.364-21.64 34.643 6.75 48.168 9.456 13.524 2.705 9.543 10.82 20.362 18.934 10.82 8.114 17.852 10.019 29.732-.8 11.858-10.82 27.438-20.84 27.438-33 0-12.183 42.845-32.459 59.074-24.344 16.23 8.115 25.685 24.344 40.573 37.846 14.866 13.525 9.456 39.232 13.524 55.46 4.047 16.23-9.478 13.525-16.229 27.05-6.773 13.524-26.53 25.728-34.644 32.566-8.114 6.838-20.816 9.175-31.636 5.193-10.82-3.981-17.57 0-22.98 10.712-5.41 10.71-14.888 6.989-23.002 5.626-8.115-1.342-40.573-14.888-59.507-24.344-18.934-9.478-27.547-17.679-39.967-29.753z",
  fill: "#5C913B",
  fillRule: "nonzero",
  mask: "url(#earth_svg__e)"
})));

function SvgEarth(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 793,
    height: 786,
    viewBox: "-9 -9 793 786",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, props), _ref, _ref2);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgEarth);

/***/ }),

/***/ 3948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  fill: "none"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#06384A",
  d: "M441.852 522.355l-14.142 14.142-60.103-60.103 14.142-14.142z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#084B63",
  d: "M381.749 462.251l-14.143 14.142-60.102-60.102 14.142-14.142z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#419EBE",
  d: "M222.65 338.508l-21.213 21.213 44.194 44.194 17.677-3.536 3.536-17.677-20.329-34.472zm42.426-42.427l-21.213 21.213 9.723 23.865 34.471 20.33 17.678-3.536 3.535-17.678z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#82C8DB",
  d: "M243.863 317.294l-21.213 21.214 44.194 44.194 17.678-3.536 3.535-17.677z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#146A8A",
  d: "M311.038 426.896l-16.794-30.936-27.4-13.258-21.213 21.213 44.194 44.194zm42.426-42.426l-44.194-44.195-21.213 21.214 13.258 27.4 30.936 16.794z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#419EBE",
  d: "M311.038 426.896l-44.193-44.193 21.214-21.213 44.192 44.193z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#146A8A",
  d: "M417.104 532.962l-21.213 21.213 44.194 44.194 17.678-3.535 3.535-17.678-13.258-27.4zm42.426-42.426l-21.213 21.213 16.794 30.936 27.4 13.258 17.678-3.536 3.536-17.677z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#2089B0",
  d: "M438.317 511.749l-21.213 21.213 44.194 44.194 17.678-3.535 3.535-17.678z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#06384A",
  d: "M505.492 621.35l-9.722-23.865-34.472-20.329-21.213 21.213 44.194 44.195zm42.427-42.426l-44.194-44.194-21.214 21.213 20.33 34.471 23.865 9.723z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#146A8A",
  d: "M505.492 621.35l-44.193-44.192 21.213-21.213 44.193 44.193z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#06384A",
  d: "M339.322 525.89l-32.527 32.527-21.213-21.213 32.527-32.527zm169.706-169.705l-21.213-21.213H459.53l17.678 31.82 31.82 17.678z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#62B3CD",
  d: "M459.53 334.972l-35.355 35.355 24.749 24.749 31.82-17.678 3.535-17.677z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#2089B0",
  d: "M473.672 419.824l-24.748-24.75 35.355-35.355 24.749 24.75z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#82C8DB",
  d: "M417.104 349.114L289.825 476.393l38.891 38.891 63.639-49.497 63.64-77.782z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#419EBE",
  d: "M367.608 554.173l-38.89-38.89 127.277-127.276 38.89 38.89z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#06384A",
  d: "M243.355 613.771l-21.214 21.214L208 620.842l21.213-21.213z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#146A8A",
  d: "M238.468 594.743l16.977-32.22-17.694-9.323-23.849 45.26 15.819 15.819h14.142v-14.142z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#06384A",
  d: "M290.8 606.249l-9.323-17.694-32.22 16.977-5.394-5.395-14.142 14.142 15.819 15.819z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M167.69 492.462l91.924 91.924 33.588-19.445 19.445-33.588c-39.281-39.281-94.905-52.244-144.957-38.891z",
  fill: "#FFF"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M312.647 531.353l-53.033 53.033 91.924 91.924c13.353-50.052.39-105.676-38.891-144.957z",
  fill: "#A3DDE9"
}));

function SvgSatellite(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 381,
    height: 381,
    viewBox: "167 296 381 381",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _ref);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgSatellite);

/***/ }),

/***/ 7746:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  transform: "translate(0 83)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M138.43 50c0 4.418-4.162 8-9.298 8H9.298C4.163 58 0 54.426 0 50V15h138.43",
  fill: "#BCBCBC"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M138.43 46c0 4.418-4.162 8-9.298 8H9.298C4.163 54 0 50.426 0 46V11h138.43",
  fill: "#D8D8D8"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#BCBCBC",
  d: "M0 0h138.43v5H0z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  fill: "#BDBDBD",
  x: 91,
  y: 32,
  width: 32,
  height: 9,
  rx: 4.5
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  transform: "translate(13 32)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  fill: "#FFF",
  cx: 28,
  cy: 4,
  r: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  fill: "#5DA3BC",
  cx: 4,
  cy: 4,
  r: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  fill: "#5DBC85",
  cx: 16,
  cy: 4,
  r: 4
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  transform: "translate(0 51)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#D8D8D8",
  d: "M0 0h138.43v43H0z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#BCBCBC",
  d: "M0 38h138.43v5H0z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  fill: "#BDBDBD",
  x: 91,
  y: 17,
  width: 32,
  height: 9,
  rx: 4.5
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  transform: "translate(13 17)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  fill: "#FFF",
  cx: 4,
  cy: 4,
  r: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  fill: "#FFF",
  cx: 28,
  cy: 4,
  r: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  fill: "#5DBC85",
  cx: 16,
  cy: 4,
  r: 4
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  transform: "translate(0 8)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M0 8c0-4.418 3.579-8 7.99-8h122.45a7.99 7.99 0 017.99 8v35H0V8z",
  fill: "#D8D8D8"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  fill: "#BCBCBC",
  d: "M0 38h138.43v5H0z"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
  fill: "#BDBDBD",
  x: 91,
  y: 17,
  width: 32,
  height: 9,
  rx: 4.5
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  transform: "translate(13 18)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  fill: "#FFF",
  cx: 16,
  cy: 4,
  r: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  fill: "#FFF",
  cx: 28,
  cy: 4,
  r: 4
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  fill: "#5DBC85",
  cx: 4,
  cy: 4,
  r: 4
}))));

function SvgServer(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 139,
    height: 134,
    viewBox: "0 8 139 134",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _ref);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgServer);

/***/ }),

/***/ 4978:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  transform: "rotate(90 414 414)",
  fill: "#FFF",
  opacity: 0.25
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 736.67,
  cy: 428.49,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 780.49,
  cy: 289.85,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 559.24,
  cy: 199.33,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 758.22,
  cy: 139.71,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 816.7,
  cy: 441.84,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 846.87,
  cy: 431.79,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 937.38,
  cy: 469.14,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 930.19,
  cy: 438.97,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 811.67,
  cy: 364.98,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 713.26,
  cy: 325.47,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 744.9,
  cy: 378.72,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 731.22,
  cy: 321.87,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 701.77,
  cy: 293.86,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 790.12,
  cy: 228.49,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 839.68,
  cy: 260.81,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 869.14,
  cy: 234.23,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 841.84,
  cy: 186.82,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 627.78,
  cy: 149.47,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 680.22,
  cy: 132.94,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 795.15,
  cy: 216.27,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 762.83,
  cy: 248.6,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 786.53,
  cy: 200.47,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 653.64,
  cy: 337.68,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 623.47,
  cy: 367.85,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 701.05,
  cy: 465.55,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 709.67,
  cy: 497.16,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 522.91,
  cy: 356.36,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 627.78,
  cy: 622.15,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 655.08,
  cy: 613.53,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 745.59,
  cy: 650.89,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 738.4,
  cy: 620.72,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 621.32,
  cy: 545.29,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 816.7,
  cy: 607.07,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 818.14,
  cy: 582.64,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 879.91,
  cy: 658.79,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 860.52,
  cy: 556.06,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 908.64,
  cy: 565.4,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1055.78,
  cy: 636.48,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1083.07,
  cy: 627.86,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1173.58,
  cy: 665.21,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1166.4,
  cy: 635.04,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 703.92,
  cy: 706.92,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 467.3,
  cy: 410.53,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 423.48,
  cy: 549.18,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 644.72,
  cy: 639.69,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 381.47,
  cy: 647.37,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 337.79,
  cy: 762.17,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 530.8,
  cy: 762.17,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 389.3,
  cy: 395.15,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 359.13,
  cy: 405.21,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 268.62,
  cy: 367.85,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 275.81,
  cy: 398.02,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 394.33,
  cy: 472.01,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 492.74,
  cy: 511.52,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 485.09,
  cy: 493.97,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 474.78,
  cy: 515.12,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 504.23,
  cy: 543.13,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 415.88,
  cy: 608.5,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 366.31,
  cy: 576.18,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 336.86,
  cy: 602.76,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 364.16,
  cy: 650.17,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 578.22,
  cy: 687.53,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 525.78,
  cy: 704.05,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 410.85,
  cy: 620.72,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 443.17,
  cy: 588.39,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 419.47,
  cy: 636.52,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 552.36,
  cy: 499.31,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 582.53,
  cy: 469.14,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 504.95,
  cy: 371.44,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 496.33,
  cy: 339.83,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 683.09,
  cy: 480.63,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 578.22,
  cy: 214.84,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 550.92,
  cy: 223.46,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 460.41,
  cy: 186.1,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 467.6,
  cy: 216.27,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 584.68,
  cy: 291.7,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 389.3,
  cy: 229.92,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 387.86,
  cy: 254.35,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 326.09,
  cy: 178.2,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 345.48,
  cy: 280.93,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 297.36,
  cy: 271.59,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 495.61,
  cy: 53.2,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 468.32,
  cy: 61.82,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 377.81,
  cy: 24.47,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 384.99,
  cy: 54.64,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 502.08,
  cy: 130.07,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 971.51,
  cy: 306.5,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 904.46,
  cy: 177.47,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 684.02,
  cy: 269.92,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 782.56,
  cy: 87.06,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 620.02,
  cy: 56.58,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1038.55,
  cy: 259.76,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1052.78,
  cy: 231.32,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1150.47,
  cy: 189.19,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1116.78,
  cy: 177.47,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1255.95,
  cy: 257.73,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1348.39,
  cy: 251.64,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1334.17,
  cy: 431.46,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 980.65,
  cy: 208.97,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 883.13,
  cy: 250.62,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 938.16,
  cy: 290.78,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 893.29,
  cy: 235.38,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 852.65,
  cy: 236.4,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 868.91,
  cy: 127.69,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 926.81,
  cy: 115.5,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 928.84,
  cy: 75.88,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 876.02,
  cy: 61.66,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 698.24,
  cy: 186.62,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 723.64,
  cy: 137.85,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 863.83,
  cy: 115.5,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 863.83,
  cy: 161.22,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 846.56,
  cy: 110.42,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 849.61,
  cy: 301.42,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 849.61,
  cy: 344.09,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 973.54,
  cy: 358.31,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1001.98,
  cy: 374.56,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 770.37,
  cy: 407.07,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1032.46,
  cy: 520.86,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1045.67,
  cy: 495.46,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1136.08,
  cy: 457.87,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1109.66,
  cy: 441.62,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 973.54,
  cy: 471.08,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1152.5,
  cy: 405.58,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1438.97,
  cy: 416.76,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1236.65,
  cy: 368.47,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1150.3,
  cy: 309.54,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1190.93,
  cy: 282.11,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1205.15,
  cy: 576.73,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1311.55,
  cy: 669.72,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1415.17,
  cy: 636.2,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1455.8,
  cy: 648.39,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1483.23,
  cy: 635.18,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1375.55,
  cy: 615.88,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1431.42,
  cy: 717.47,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1398.91,
  cy: 733.73,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1429.39,
  cy: 740.84,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1171.8,
  cy: 598.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1495.42,
  cy: 714.42,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1464.94,
  cy: 698.17,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1433.45,
  cy: 753.03,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1483.23,
  cy: 742.87,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1483.23,
  cy: 742.87,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1375.55,
  cy: 727.63,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1146.24,
  cy: 526.95,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 768.34,
  cy: 484.28,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 835.38,
  cy: 613.31,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1055.82,
  cy: 520.86,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 991.83,
  cy: 510.7,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 957.29,
  cy: 703.73,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 703.32,
  cy: 528.99,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 689.1,
  cy: 557.43,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 598.69,
  cy: 595.02,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 624.09,
  cy: 589.94,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 534.69,
  cy: 581.81,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 625.1,
  cy: 611.28,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 761.23,
  cy: 579.78,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 858.75,
  cy: 538.13,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 847.57,
  cy: 547.27,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 848.59,
  cy: 553.37,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 889.22,
  cy: 552.35,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 872.97,
  cy: 661.06,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 815.07,
  cy: 673.25,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 813.04,
  cy: 712.87,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 865.86,
  cy: 727.09,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1043.63,
  cy: 602.13,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1018.24,
  cy: 650.9,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 878.05,
  cy: 673.25,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 878.05,
  cy: 627.53,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 895.32,
  cy: 678.33,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 892.27,
  cy: 487.33,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 892.27,
  cy: 444.66,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 768.34,
  cy: 430.44,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 739.89,
  cy: 414.19,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 971.51,
  cy: 381.68,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 709.42,
  cy: 267.89,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 696.21,
  cy: 293.29,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 605.8,
  cy: 330.88,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 632.21,
  cy: 347.13,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 768.34,
  cy: 317.67,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 586.5,
  cy: 412.15,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 602.75,
  cy: 430.44,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 505.23,
  cy: 420.28,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 591.58,
  cy: 479.21,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 426.17,
  cy: 451.3,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 536.72,
  cy: 212.02,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 523.52,
  cy: 237.41,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 433.11,
  cy: 275,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 459.52,
  cy: 291.26,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1386.5,
  cy: 394.86,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1435.48,
  cy: 652.45,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1563.93,
  cy: 624.02,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1457.83,
  cy: 801.79,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1308.5,
  cy: 379.48,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1278.33,
  cy: 389.54,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1187.82,
  cy: 352.18,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1195.01,
  cy: 382.35,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1313.53,
  cy: 456.35,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1505.58,
  cy: 614.86,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1380.3,
  cy: 442.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1487.29,
  cy: 617.91,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1516.75,
  cy: 646.36,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1428.37,
  cy: 711.38,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1378.6,
  cy: 678.87,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1349.14,
  cy: 705.28,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1376.56,
  cy: 753.03,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1497.42,
  cy: 671.86,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1538.08,
  cy: 806.87,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1423.29,
  cy: 723.57,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1455.8,
  cy: 691.06,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1432.44,
  cy: 739.82,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1564.5,
  cy: 602.67,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1501.73,
  cy: 453.47,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1424.15,
  cy: 355.77,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1415.53,
  cy: 324.16,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1497.42,
  cy: 199.17,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1470.12,
  cy: 207.79,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1379.62,
  cy: 170.43,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1386.8,
  cy: 200.6,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1503.88,
  cy: 276.03,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1308.5,
  cy: 214.25,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1307.07,
  cy: 238.68,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1245.29,
  cy: 162.53,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1264.68,
  cy: 265.26,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1216.56,
  cy: 255.92,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1069.42,
  cy: 184.84,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1042.13,
  cy: 193.46,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 951.62,
  cy: 156.11,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 958.8,
  cy: 186.28,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1421.28,
  cy: 114.4,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1478.45,
  cy: 183.66,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1592.37,
  cy: 61.18,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1546.98,
  cy: 133.8,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1572.84,
  cy: 322.01,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1542.67,
  cy: 352.18,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1442.11,
  cy: 340.69,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1546.98,
  cy: 606.48,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1574.28,
  cy: 597.86,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1540.52,
  cy: 529.62,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1151.66,
  cy: 516.86,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1311.55,
  cy: 764.21,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1531.99,
  cy: 671.76,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1242.91,
  cy: 728.65,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1585.26,
  cy: 728.65,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1086.65,
  cy: 561.56,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1072.42,
  cy: 590,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 974.73,
  cy: 632.13,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1008.43,
  cy: 643.85,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 869.25,
  cy: 563.59,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1144.55,
  cy: 612.35,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1326.79,
  cy: 685.98,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1187.04,
  cy: 530.54,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1324.76,
  cy: 704.27,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1365.39,
  cy: 703.25,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1349.14,
  cy: 811.95,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1198.39,
  cy: 705.82,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1196.36,
  cy: 745.44,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1249.18,
  cy: 759.66,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1519.8,
  cy: 753.03,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1494.4,
  cy: 801.79,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1354.22,
  cy: 778.43,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1278.64,
  cy: 710.9,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1368.44,
  cy: 638.23,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1368.44,
  cy: 595.56,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1151.66,
  cy: 463.01,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1123.22,
  cy: 446.76,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1354.83,
  cy: 414.25,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1092.74,
  cy: 300.46,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1079.54,
  cy: 325.86,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 989.12,
  cy: 363.45,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1015.54,
  cy: 379.71,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1151.66,
  cy: 350.24,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 972.7,
  cy: 415.74,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 888.55,
  cy: 452.85,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 974.9,
  cy: 511.78,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 934.27,
  cy: 539.21,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 920.05,
  cy: 244.59,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 906.84,
  cy: 269.99,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 842.84,
  cy: 323.83,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 953.4,
  cy: 222.71,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 842.84,
  cy: 212.08,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 978.97,
  cy: 294.37,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1354.83,
  cy: 339.07,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1287.78,
  cy: 210.05,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1067.34,
  cy: 302.5,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1131.34,
  cy: 312.65,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1165.88,
  cy: 119.63,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1421.88,
  cy: 292.34,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1436.1,
  cy: 263.89,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1526.51,
  cy: 226.3,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1501.11,
  cy: 231.38,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1590.51,
  cy: 239.51,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1500.1,
  cy: 210.05,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1363.97,
  cy: 241.54,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1266.45,
  cy: 283.19,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1277.63,
  cy: 274.05,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1010.28,
  cy: 135.34,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1235.98,
  cy: 268.97,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1252.23,
  cy: 160.26,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1310.13,
  cy: 148.07,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1312.17,
  cy: 108.45,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1259.34,
  cy: 94.23,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1081.57,
  cy: 219.19,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1106.96,
  cy: 170.42,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1247.15,
  cy: 148.07,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1247.15,
  cy: 193.79,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1229.88,
  cy: 142.99,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1232.93,
  cy: 333.99,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1232.93,
  cy: 376.66,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1356.86,
  cy: 390.88,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1385.31,
  cy: 407.14,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1153.69,
  cy: 439.65,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1508.62,
  cy: 671.76,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1359.74,
  cy: 734.74,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1519.4,
  cy: 490.44,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1492.99,
  cy: 474.19,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1449.71,
  cy: 621.97,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1538.7,
  cy: 409.17,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1522.45,
  cy: 390.88,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1533.62,
  cy: 342.12,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1574.26,
  cy: 314.69,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1588.48,
  cy: 609.31,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1529.56,
  cy: 559.53,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 595.64,
  cy: 261.8,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 228.08,
  cy: 231.86,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 210.81,
  cy: 235.92,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 88.91,
  cy: 226.78,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 95,
  cy: 348.69,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 101.1,
  cy: 625.02,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 388.19,
  cy: 518.49,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 376.7,
  cy: 486.88,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 302.71,
  cy: 342.49,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 355.15,
  cy: 325.97,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 328.57,
  cy: 530.71,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 298.4,
  cy: 560.88,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 375.98,
  cy: 658.58,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 384.6,
  cy: 690.18,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 197.83,
  cy: 549.38,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 296.24,
  cy: 738.32,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 142.23,
  cy: 603.56,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 98.41,
  cy: 742.2,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 64.23,
  cy: 588.18,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 34.06,
  cy: 598.23,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 131.48,
  cy: 551.73,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 138.67,
  cy: 581.91,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 69.26,
  cy: 665.04,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 167.67,
  cy: 704.55,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 153.3,
  cy: 703.11,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 149.71,
  cy: 708.14,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 179.16,
  cy: 736.16,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 227.29,
  cy: 692.34,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 257.45,
  cy: 662.17,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 179.88,
  cy: 564.47,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 171.26,
  cy: 532.86,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 358.02,
  cy: 673.66,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 253.14,
  cy: 407.86,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 225.85,
  cy: 416.48,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 135.34,
  cy: 379.13,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 142.52,
  cy: 409.3,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 259.61,
  cy: 484.73,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 64.23,
  cy: 422.95,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 62.79,
  cy: 447.37,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1.02,
  cy: 371.23,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 20.41,
  cy: 473.95,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 2.76,
  cy: 444.3,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 170.54,
  cy: 246.23,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 143.24,
  cy: 254.85,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 52.73,
  cy: 217.5,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 59.92,
  cy: 247.67,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 177,
  cy: 323.1,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 358.95,
  cy: 462.95,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 292.08,
  cy: 57.12,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 373.17,
  cy: 379.64,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 378.25,
  cy: 722.01,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 364.03,
  cy: 750.46,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 384.35,
  cy: 460.92,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 295.12,
  cy: 216.62,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 280.73,
  cy: 523.91,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 307.14,
  cy: 540.16,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 261.43,
  cy: 605.18,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 277.68,
  cy: 623.47,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 180.16,
  cy: 613.31,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 266.51,
  cy: 672.23,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 225.87,
  cy: 699.66,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 352.37,
  cy: 152.96,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 310.36,
  cy: 251.16,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 403.67,
  cy: 118.9,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 344.77,
  cy: 212.29,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 295.2,
  cy: 179.96,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 265.75,
  cy: 206.54,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 293.05,
  cy: 253.96,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 339.74,
  cy: 224.5,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 372.06,
  cy: 192.18,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 348.36,
  cy: 240.31,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 317.08,
  cy: 122.28,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 257.46,
  cy: 134.49,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 227.29,
  cy: 164.66,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 304.87,
  cy: 262.36,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 313.49,
  cy: 293.97,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 126.72,
  cy: 153.17,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 225.13,
  cy: 342.1,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 96.56,
  cy: 308.34,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 108.05,
  cy: 339.95,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 156.18,
  cy: 296.13,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 186.35,
  cy: 265.95,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 108.77,
  cy: 168.26,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 100.15,
  cy: 136.65,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 286.91,
  cy: 277.45,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 307.14,
  cy: 325.8,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 292.92,
  cy: 354.25,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 209.62,
  cy: 127.69,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 236.03,
  cy: 143.95,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 190.32,
  cy: 208.97,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 206.57,
  cy: 227.25,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 109.05,
  cy: 217.09,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 195.4,
  cy: 276.02,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 154.76,
  cy: 303.45,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 211.65,
  cy: 405.04,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 198.44,
  cy: 430.44,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 108.03,
  cy: 468.03,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 134.45,
  cy: 484.28,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1462.91,
  cy: 641.28,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1315.71,
  cy: 469.37,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1331.09,
  cy: 389.33,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1321.03,
  cy: 359.16,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1358.39,
  cy: 268.64,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1328.22,
  cy: 275.83,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1254.23,
  cy: 394.36,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1214.72,
  cy: 492.78,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1325.77,
  cy: 603.69,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1211.13,
  cy: 474.82,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1202.28,
  cy: 528.51,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1350.15,
  cy: 701.22,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1447.67,
  cy: 624.01,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1388.18,
  cy: 472.63,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1511.39,
  cy: 578.26,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1502.77,
  cy: 550.96,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1509.95,
  cy: 467.63,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1496.3,
  cy: 389.33,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1471.88,
  cy: 387.89,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1445.3,
  cy: 345.51,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1454.64,
  cy: 297.38,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1398.91,
  cy: 624.01,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1312.57,
  cy: 669.72,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1514.21,
  cy: 536.76,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1501.96,
  cy: 498.17,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1451.23,
  cy: 433.14,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1434.97,
  cy: 459.55,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1165.38,
  cy: 61.18,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1564.94,
  cy: 156.68,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1499.45,
  cy: 90.94,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1377.55,
  cy: 97.04,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1207.76,
  cy: 388.22,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1239.36,
  cy: 376.72,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1383.74,
  cy: 302.73,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1400.26,
  cy: 355.17,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1195.54,
  cy: 328.59,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1193.39,
  cy: 171.27,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1318.38,
  cy: 253.16,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1309.76,
  cy: 225.87,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1347.11,
  cy: 135.35,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1316.94,
  cy: 142.54,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1241.52,
  cy: 259.63,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1303.29,
  cy: 64.23,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1278.87,
  cy: 62.8,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1355.01,
  cy: 1.02,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1252.29,
  cy: 20.41,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1281.95,
  cy: 2.76,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1480,
  cy: 170.55,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1471.38,
  cy: 143.25,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1508.73,
  cy: 52.74,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1478.56,
  cy: 59.92,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1403.14,
  cy: 177.02,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1263.29,
  cy: 361.01,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1476.62,
  cy: 297.01,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1346.59,
  cy: 373.2,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1265.33,
  cy: 384.38,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1122.03,
  cy: 241,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1202.34,
  cy: 280.75,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1321.2,
  cy: 211.67,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 118.75,
  cy: 150.23,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 110.13,
  cy: 122.93,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 147.49,
  cy: 32.42,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 117.32,
  cy: 39.6,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 41.89,
  cy: 156.7,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 145.86,
  cy: 157.82,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 359.19,
  cy: 93.82,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 229.16,
  cy: 170.01,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 147.89,
  cy: 181.19,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 4.59,
  cy: 37.81,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 84.9,
  cy: 77.56,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 203.76,
  cy: 8.48,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1295.8,
  cy: 198.46,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1258.21,
  cy: 108.04,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1241.96,
  cy: 134.46,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1031.62,
  cy: 118.07,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 270.57,
  cy: 454.82,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 629.34,
  cy: 739.82,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 62.49,
  cy: 519.37,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 206.74,
  cy: 75.4,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1344.5,
  cy: 519.37,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1293.71,
  cy: 542.73,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1058.03,
  cy: 717.47,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1600.05,
  cy: 662.61,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 491.18,
  cy: 640.26,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 32.02,
  cy: 811.95,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 251.44,
  cy: 51.02,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1403.42,
  cy: 531.56,
  r: 2.03
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 698.42,
  cy: 9.37,
  r: 1.02
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 1354.39,
  cy: 826.72,
  r: 1.02
}));

function SvgStars(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 830,
    height: 1603,
    viewBox: "-1 -1 830 1603",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _ref);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgStars);

/***/ }),

/***/ 9699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  cx: 16,
  cy: 16,
  r: 16,
  fill: "#66BB6A"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M18.623 11.6L15.839 20h-1.656l-2.076-6.216L9.995 20H8.327l-2.784-8.4h1.62l2.088 6.384 2.172-6.384h1.44l2.124 6.42 2.148-6.42h1.488zm7.857 7.08V20h-7.164v-1.044l4.944-6.036H19.4V11.6h6.924v1.044L21.38 18.68h5.1z",
  fill: "#fff"
});

function SvgWazzup24(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: "1rem",
    height: "1rem",
    viewBox: "0 0 32 32",
    fill: "none"
  }, props), _ref, _ref2);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgWazzup24);

/***/ }),

/***/ 1354:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M184.333 0C102.01 0 35.036 66.974 35.036 149.297c0 33.969 11.132 65.96 32.193 92.515 27.27 34.383 106.572 116.021 109.934 119.479l7.169 7.375 7.17-7.374c3.364-3.46 82.69-85.116 109.964-119.51 21.042-26.534 32.164-58.514 32.164-92.485C333.63 66.974 266.656 0 184.333 0zm101.462 229.355c-21.956 27.687-80.92 89.278-101.462 110.581-20.54-21.302-79.483-82.875-101.434-110.552-18.228-22.984-27.863-50.677-27.863-80.087C55.036 78.002 113.038 20 184.333 20c71.294 0 129.297 58.002 129.296 129.297 0 29.412-9.625 57.096-27.834 80.058z"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M184.333 59.265c-48.73 0-88.374 39.644-88.374 88.374s39.645 88.374 88.374 88.374 88.374-39.645 88.374-88.374-39.644-88.374-88.374-88.374zm0 156.748c-37.702 0-68.374-30.673-68.374-68.374 0-37.702 30.673-68.374 68.374-68.374s68.373 30.673 68.374 68.374c0 37.702-30.672 68.374-68.374 68.374z"
});

function SvgLocation(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 368.666 368.666"
  }, props), _ref, _ref2);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgLocation);

/***/ }),

/***/ 3458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M449.379 467.081c-15.536-26.845-44.543-44.919-77.791-44.919H172.734c-33.248 0-62.255 18.075-77.791 44.919A89.394 89.394 0 0082.896 512h378.531c0-16.37-4.4-31.702-12.048-44.919z",
  fill: "#782cc9"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M449.379 467.081c-15.536-26.845-44.543-44.919-77.791-44.919h-99.447V512h189.285a89.384 89.384 0 00-12.047-44.919z",
  fill: "#3d1163"
});

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M399.898 327.561l26.3 20.574c27.107-34.65 41.435-76.269 41.435-120.359 0-44.61-15.423-88.244-43.429-122.867l-25.961 21-126.1 100.612 127.755 101.04z",
  fill: "#1f0f29"
});

var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M313.043 217.012l148.89-116.309-10.295-13.158C408.116 31.909 342.692 0 272.142 0 146.546 0 44.366 102.18 44.366 227.777c0 92.285 55.166 171.925 134.252 207.679h187.409c33.056-14.935 62.437-37.827 85.609-67.448l10.295-13.158-148.886-116.308-.002-21.53z",
  fill: "#782cc9"
});

var _ref5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M366.029 435.456c33.056-14.935 62.437-37.827 85.609-67.448l10.295-13.158-148.888-116.308-.002-21.531 148.89-116.307-10.295-13.158C408.116 31.909 342.692 0 272.142 0v435.456h93.887z",
  fill: "#3d1163"
});

var _ref6 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M371.589 422.161H172.735c-33.248 0-62.255 18.075-77.791 44.919h354.435c-15.535-26.845-44.543-44.919-77.79-44.919z",
  fill: "#b7b9c0"
});

var _ref7 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  r: 55.564,
  cy: 227.773,
  cx: 272.161,
  fill: "#1f0f29"
});

var _ref8 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M327.726 227.777c0 30.688-24.877 55.564-55.564 55.564V172.213c30.687-.001 55.564 24.876 55.564 55.564z",
  fill: "#1f0f29"
});

var _ref9 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
  r: 24.48,
  cy: 227.773,
  cx: 272.161,
  fill: "#b7b9c0"
});

var _ref10 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M296.641 227.777c0 13.52-10.96 24.48-24.48 24.48v-48.959c13.52-.002 24.48 10.958 24.48 24.479zM449.379 467.081c-15.536-26.845-44.543-44.919-77.791-44.919h-99.447v44.919h177.238z",
  fill: "#9b9da6"
});

function SvgLogoDefault(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    viewBox: "0 0 512 512",
    xmlns: "http://www.w3.org/2000/svg"
  }, props), _ref, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _ref10);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgLogoDefault);

/***/ }),

/***/ 223:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M437.5 59.3h-401C16.4 59.3 0 75.7 0 95.8v282.4c0 20.1 16.4 36.5 36.5 36.5h401c20.1 0 36.5-16.4 36.5-36.5V95.8c0-20.1-16.4-36.5-36.5-36.5zm-5.3 27L239.5 251.1 46.8 86.3h385.4zM447 378.2c0 5.2-4.3 9.5-9.5 9.5h-401c-5.2 0-9.5-4.3-9.5-9.5V104.9l203.7 174.2c.1.1.3.2.4.3.1.1.3.2.4.3.3.2.5.4.8.5.1.1.2.1.3.2l1.2.6c.1 0 .2.1.3.1.3.1.6.3 1 .4.1 0 .3.1.4.1.3.1.6.2.9.2.1 0 .3.1.4.1.3.1.7.1 1 .2h.3c.4 0 .9.1 1.3.1s.9 0 1.3-.1h.3c.3 0 .7-.1 1-.2.1 0 .3-.1.4-.1.3-.1.6-.2.9-.2.1 0 .3-.1.4-.1.3-.1.6-.2 1-.4.1 0 .2-.1.3-.1l1.2-.6c.1-.1.2-.1.3-.2.3-.2.5-.3.8-.5.1-.1.3-.2.4-.3.1-.1.3-.2.4-.3L447 109.2v269z"
});

function SvgMail(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 474 474"
  }, props), _ref);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgMail);

/***/ }),

/***/ 3011:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M0 0h2500v2500H0z",
  fill: "#c00"
});

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M1241.5 268.5h-973v1962.9h972.9V763.5h495v1467.9h495V268.5z",
  fill: "#fff"
});

function SvgNpmLogo(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    viewBox: "0 0 2500 2500",
    xmlns: "http://www.w3.org/2000/svg",
    width: 50,
    height: 50
  }, props), _ref, _ref2);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgNpmLogo);

/***/ }),

/***/ 2377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
  fill: "#161614"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M127.505 0C57.095 0 0 57.085 0 127.505c0 56.336 36.534 104.13 87.196 120.99 6.372 1.18 8.712-2.766 8.712-6.134 0-3.04-.119-13.085-.173-23.739-35.473 7.713-42.958-15.044-42.958-15.044-5.8-14.738-14.157-18.656-14.157-18.656-11.568-7.914.872-7.752.872-7.752 12.804.9 19.546 13.14 19.546 13.14 11.372 19.493 29.828 13.857 37.104 10.6 1.144-8.242 4.449-13.866 8.095-17.05-28.32-3.225-58.092-14.158-58.092-63.014 0-13.92 4.981-25.295 13.138-34.224-1.324-3.212-5.688-16.18 1.235-33.743 0 0 10.707-3.427 35.073 13.07 10.17-2.826 21.078-4.242 31.914-4.29 10.836.048 21.752 1.464 31.942 4.29 24.337-16.497 35.029-13.07 35.029-13.07 6.94 17.563 2.574 30.531 1.25 33.743 8.175 8.929 13.122 20.303 13.122 34.224 0 48.972-29.828 59.756-58.22 62.912 4.573 3.957 8.648 11.717 8.648 23.612 0 17.06-.148 30.791-.148 34.991 0 3.393 2.295 7.369 8.759 6.117 50.634-16.879 87.122-64.656 87.122-120.973C255.009 57.085 197.922 0 127.505 0"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M47.755 181.634c-.28.633-1.278.823-2.185.389-.925-.416-1.445-1.28-1.145-1.916.275-.652 1.273-.834 2.196-.396.927.415 1.455 1.287 1.134 1.923m6.272 5.596c-.608.564-1.797.302-2.604-.589-.834-.889-.99-2.077-.373-2.65.627-.563 1.78-.3 2.616.59.834.899.996 2.08.36 2.65m4.304 7.159c-.782.543-2.06.034-2.849-1.1-.781-1.133-.781-2.493.017-3.038.792-.545 2.05-.055 2.85 1.07.78 1.153.78 2.513-.019 3.069m7.277 8.292c-.699.77-2.187.564-3.277-.488-1.114-1.028-1.425-2.487-.724-3.258.707-.772 2.204-.555 3.302.488 1.107 1.026 1.445 2.496.7 3.258m9.403 2.8c-.307.998-1.741 1.452-3.185 1.028-1.442-.437-2.386-1.607-2.095-2.616.3-1.005 1.74-1.478 3.195-1.024 1.44.435 2.386 1.596 2.086 2.612m10.703 1.187c.036 1.052-1.189 1.924-2.705 1.943-1.525.033-2.758-.818-2.774-1.852 0-1.062 1.197-1.926 2.721-1.951 1.516-.03 2.758.815 2.758 1.86m10.514-.403c.182 1.026-.872 2.08-2.377 2.36-1.48.27-2.85-.363-3.039-1.38-.184-1.052.89-2.105 2.367-2.378 1.508-.262 2.857.355 3.049 1.398"
}));

function SvgGithub(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    width: 256,
    height: 256,
    viewBox: "0 -3.5 256 256",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMinYMin meet"
  }, props), _ref);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgGithub);

/***/ }),

/***/ 6416:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M206.045 87.682c32.726 28.83 27.592 96.299 24.888 134.754-.092 1.421-.688 2.521-1.467 3.346-.229 1.421-1.1 2.796-2.613 3.209-13.613 3.713-31.213.779-44.964-1.696-1.421-.229-1.971-1.329-1.925-2.429-.092-.183-.092-.413-.137-.596-.871-.825-1.421-2.108-1.238-3.804 1.421-15.355 2.2-30.709 1.833-46.156-.183-7.654-.504-15.492-1.375-23.101-1.925-17.188-19.067-35.751-35.155-21.771-22.642 19.617-12.421 70.723-10.679 96.94.137 1.788-1.054 2.75-2.383 2.979-.413.917-1.146 1.742-2.383 2.2-7.379 2.658-16.18 2.521-23.972 2.658-6.967.183-14.621.779-20.855-2.704-.183-.092-.275-.275-.412-.458-1.421-.642-2.521-1.925-2.613-3.896-1.283-47.668-5.958-100.057 3.713-146.946.183-.871.642-1.375 1.238-1.65.321-.229.642-.458 1.054-.596 10.909-3.071 25.576.596 36.714 1.833 3.529.367 7.013.458 8.892 3.85.688 1.283 1.008 2.933 1.1 4.675 17.463-17.6 55.23-16.042 72.739-.641zM59.787 82.869c.596.871.963 1.879.871 2.979-4.629 48.081-5.408 96.207-2.383 144.425.183 3.117-2.658 5.317-5.454 5.5a545.393 545.393 0 01-41.526.779c-3.071-.046-5.363-2.475-5.454-5.454-1.65-48.035-5.821-101.982 5.363-149.1.321-1.329 1.146-2.017 2.108-2.292.046-.137.137-.275.229-.412-.229-.963.183-2.017 1.054-2.521 4.904-3.163 11.917-1.467 17.6-1.512 8.159-.092 16.363-.321 24.476.137 4.353.275 5.362 5.042 3.116 7.471zM37.649 61.693c-1.696.138-3.3 0-4.813-.275-20.9 3.438-28.967-28.417-19.755-44.459C18.398 7.7 28.986.046 39.986 0c11.321 0 20.488 9.9 24.109 19.892 7.151 19.617-5.133 40.38-26.446 41.801z",
  fill: "#0071bc"
});

function SvgLinkedin(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 236.656 236.656"
  }, props), _ref);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgLinkedin);

/***/ }),

/***/ 2076:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M4.453 173.33c9.763-1.192 19.663.092 29.426-1.512 4.904-.779 9.396-2.429 13.842-4.171-11-7.058-20.901-15.125-30.113-24.796-3.3-3.438-.917-9.213 3.896-9.35a46.097 46.097 0 0011.55-.917c-9.58-12.146-17.005-25.209-22.78-39.876-1.558-3.942 3.025-7.929 6.738-6.738 2.154.871 4.354 1.467 6.6 1.925-6.829-16.409-8.25-32.955-4.446-51.106.871-4.171 6.371-5.179 9.167-2.429 21.909 21.541 49.593 31.9 79.202 36.85-2.613-20.259 11.78-41.801 30.663-48.86 15.676-5.821 36.714-1.833 47.256 11.367 7.059-4.446 16.821-5.913 24.659-7.288 4.125-.688 8.113 3.346 5.684 7.425-2.842 4.767-5.546 9.854-8.525 14.713 6.05-1.788 12.284-2.888 18.517-3.667 4.492-.596 7.196 6.325 3.759 9.075-7.288 5.821-14.53 12.467-22.276 17.784-.229 51.472-15.263 94.649-61.235 123.937-38.319 24.477-109.546 20.352-142.867-12.97h-.046c-1.467-.367-2.246-1.467-2.521-2.658-1.283-1.925-.367-4.308 1.329-5.225.642-.78 1.467-1.376 2.521-1.513z",
  fill: "#3fa9f5"
});

function SvgTwitter(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 231.104 231.104"
  }, props), _ref);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgTwitter);

/***/ }),

/***/ 9433:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7378);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
});

function SvgTelephone(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 482.6 482.6"
  }, props), _ref);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgTelephone);

/***/ }),

/***/ 5839:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var reactIs = __webpack_require__(9185);

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
var REACT_STATICS = {
  childContextTypes: true,
  contextType: true,
  contextTypes: true,
  defaultProps: true,
  displayName: true,
  getDefaultProps: true,
  getDerivedStateFromError: true,
  getDerivedStateFromProps: true,
  mixins: true,
  propTypes: true,
  type: true
};
var KNOWN_STATICS = {
  name: true,
  length: true,
  prototype: true,
  caller: true,
  callee: true,
  arguments: true,
  arity: true
};
var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

function getStatics(component) {
  // React v16.11 and below
  if (reactIs.isMemo(component)) {
    return MEMO_STATICS;
  } // React v16.12 and above


  return TYPE_STATICS[component['$$typeof']] || REACT_STATICS;
}

var defineProperty = Object.defineProperty;
var getOwnPropertyNames = Object.getOwnPropertyNames;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var getPrototypeOf = Object.getPrototypeOf;
var objectPrototype = Object.prototype;
function hoistNonReactStatics(targetComponent, sourceComponent, blacklist) {
  if (typeof sourceComponent !== 'string') {
    // don't hoist over string (html) components
    if (objectPrototype) {
      var inheritedComponent = getPrototypeOf(sourceComponent);

      if (inheritedComponent && inheritedComponent !== objectPrototype) {
        hoistNonReactStatics(targetComponent, inheritedComponent, blacklist);
      }
    }

    var keys = getOwnPropertyNames(sourceComponent);

    if (getOwnPropertySymbols) {
      keys = keys.concat(getOwnPropertySymbols(sourceComponent));
    }

    var targetStatics = getStatics(targetComponent);
    var sourceStatics = getStatics(sourceComponent);

    for (var i = 0; i < keys.length; ++i) {
      var key = keys[i];

      if (!KNOWN_STATICS[key] && !(blacklist && blacklist[key]) && !(sourceStatics && sourceStatics[key]) && !(targetStatics && targetStatics[key])) {
        var descriptor = getOwnPropertyDescriptor(sourceComponent, key);

        try {
          // Avoid failures from read-only properties
          defineProperty(targetComponent, key, descriptor);
        } catch (e) {}
      }
    }
  }

  return targetComponent;
}

module.exports = hoistNonReactStatics;


/***/ }),

/***/ 2553:
/***/ ((module) => {

// Module
var code = "<p>As we all know, React Router is almost the official routing library in React and hardly anyone knows of any alternatives. While building some screens using a <a href=\"https://en.wikipedia.org/wiki/Query_string\"><code>Query string</code></a> I ran into some problems, mainly how to get my object given a query string.</p> <h2 id=\"determination-of-volume\">Determination of volume</h2> <p>I had issues with the query string, but for the client-side router I needed something that would manage the URL path, manage history, and render my components according to the URL path (getting ids or parameters that make up the route) ... We will need soon:</p> <ul> <li>Parameter control</li> <li>Rendering the path</li> <li>Query string control</li> <li>Access to history</li> <li>Browser navigation control</li> </ul> <p>Now that we have what we need to do, let's see what we want to have as the final code.</p> <pre><code class=\"language-js\">const history = History();\r\nconst App = () => (\r\n    &#x3C;Router history={history}>\r\n        &#x3C;Route path=\"/\" component={Root} />\r\n        &#x3C;Route path=\"/orders/:id\" component={ViewOrders} />\r\n        &#x3C;Route path=\"/orders/:id/:operation\" component={CrudOrders} />\r\n    &#x3C;/Router>\r\n);\n</code></pre> <p>The router is usually at the top level of our application, covering all the components, so we can create <code>&#x3C;Route /></code> different ones. It is the <code>&#x3C;Router /></code> who provides the context for our routes and is responsible for managing the rendering of each route.</p> <p>To create a router, we have to follow these steps:</p> <ul> <li>Create context a <a href=\"https://github.com/ReactTraining/history\"><code>history</code></a>.</li> <li>Control all paths with received routes.</li> <li>Register the routes according to the rendering of the child routers.</li> </ul> <p>The history package was used to ensure consistency across browsers. For our context, we have:</p> <pre><code class=\"language-js\">import { createBrowserHistory } from \"history\";\r\nimport { createContext } from \"react\";\r\n\r\nexport const History = createBrowserHistory();\r\nexport const HistoryContext = createContext({ ...History, params: {} });\n</code></pre> <p>Thanks to this, we can create our <code>&#x3C;Router /></code> component that will provide our context for each element displayed on the screen.</p> <pre><code class=\"language-js\">import { pathToRegexp } from \"path-to-regexp\";\r\n\r\n// Defining types so we can work\r\ninterface MatchRoute {\r\n    regex: RegExp;\r\n    path: string;\r\n    component: FC;\r\n    params: Array&#x3C;{\r\n        name: string;\r\n        prefix: string;\r\n        suffix: string;\r\n        pattern: string;\r\n        modifier: string;\r\n    }>;\r\n}\r\n\r\ninterface RouterProps {\r\n    notFound: FC;\r\n}\r\n\r\ninterface Render {\r\n    Component: FC&#x3C;any>;\r\n    params: { [k: string]: any };\r\n}\r\n\r\nexport const Router: FC&#x3C;RouterProps> = ({ children, notFound: NotFound }) => {\r\n    const [location, setLocation] = useState(() => History.location);\r\n    const [pathname, setPathName] = useState(History.location.pathname);\r\n\r\n    /*\r\n        This is the callback that builds our state, taking children\r\n        and assembling the routes based on the \"path\" of each &#x3C;Route />\r\n    */\r\n    const init = useCallback(() => {\r\n        /*\r\n            Using Children.toArray, we take all the children of our &#x3C;Router /> \r\n            .sort (), which we do so that routes without parameters are prioritized \r\n            so as not to break the path regex.\r\n        */\r\n        const routes = Children.toArray(children).sort((a: any, b: any) => {\r\n            const x: RouteProps = a.props;\r\n            const y: RouteProps = b.props;\r\n            const xHas = x.path.includes(\":\");\r\n            const yHas = y.path.includes(\":\");\r\n\r\n            if (!xHas || x.path === \"/\") return -1;\r\n            if (yHas) return 1;\r\n            return 0;\r\n        });\r\n\r\n        \r\n        // With this map, we create each regex for the paths \r\n        // specified in the route components\r\n        const rules = routes.map((x: any) => {\r\n            const params: any[] = [];\r\n            const regex = pathToRegexp(x.props.path, params);\r\n            return { ...x.props, regex, params };\r\n        });\r\n\r\n        return { routes, rules };\r\n    }, [children]);\r\n\r\n    // Status initialization via function\r\n    const controller = useMemo&#x3C;{\r\n        rules: MatchRoute[];\r\n        routes: any[];\r\n    }>(init, [init]);\r\n\r\n    useEffect(() => {\r\n        History.listen((e) => {\r\n            setLocation(e.location);\r\n            setPathName(e.location.pathname);\r\n        });\r\n    }, []);\r\n\r\n    // A memo that will take care of rendering and obtaining the `params` \r\n    // given our current path In it we will make the route comparisons and \r\n    // define whether such a route exists or not\r\n    const render = useMemo((): Render => {\r\n        const params: any = {};\r\n        // Early return to the root\r\n        if (pathname === \"/\") {\r\n            const current = controller.routes.find((x) => x.props.path === \"/\");\r\n            if (current) {\r\n                return {\r\n                    Component: current.props.component,\r\n                    params\r\n                };\r\n            }\r\n            // Route / has not been registered and will be redirected to NotFound\r\n            return { Component: NotFound, params };\r\n        }\r\n\r\n        const index = controller.rules.findIndex((x) => {\r\n            const exec = x.regex.exec(pathName);\r\n            // If the regex of the current route does not match, return false\r\n            if (exec === null) return false;\r\n            // Regex group object returned, we can capture the values \r\n            // in an array using the destruction, taking from item 1 onwards.\r\n            const [, ...groups] = exec;\r\n            // Assigning values to params\r\n            groups.forEach((val, i) => {\r\n                const regex = x.params[i].name;\r\n                // a light theft to parse the values safely\r\n                try {\r\n                    params[regex] = JSON.parse(val);\r\n                } catch (error) {\r\n                    params[regex] = val;\r\n                }\r\n            });\r\n            return true;\r\n        });\r\n        const current = controller.routes[index];\r\n        // If my current is undefined, the route does not exist \r\n        // and is redirected to NotFound\r\n        if (current === undefined) {\r\n            return { Component: NotFound, params };\r\n        }\r\n\r\n        return { Component: current.props.component, params };\r\n    }, [controller, NotFound, pathName]);\r\n\r\n    // history props\r\n    const historyComponent = useMemo(() => ({ ...History, location }), [\r\n        location,\r\n    ]);\r\n\r\n    // Our context delivered and the router rendering only our target path component\r\n    return (\r\n        &#x3C;HistoryContext.Provider value={{ ...History, params: render.params }}>\r\n            &#x3C;render.Component history={historyComponent} />\r\n        &#x3C;/HistoryContext.Provider>\r\n    );\r\n};\n</code></pre> <p>And with that we have a router, but we are still missing a way to create our <code>&#x3C;Route /></code></p> <pre><code class=\"language-js\">type RouteProps {\r\n    path: string;\r\n    component: FC;\r\n}\r\n\r\nexport const Route = (props: RouteProps) => {\r\n    const router = useContext(HistoryContext);\r\n    // any is so that we can ignore and inject history props into our components\r\n    return &#x3C;props.component {...(router as any)} />\r\n};\n</code></pre> <p>But there was also no way to create links to navigate between pages. To do this, we can create a component that uses the <code>&#x3C;a/></code> href attribute itself, so that we have an accessible and semantic way to create our links.</p> <pre><code class=\"language-js\">export const Link: React.FC&#x3C;A> = ({ onClick, state, href, ...props }) => {\r\n    // the click callback that prevents the default of the element\r\n    const click = useCallback(\r\n        (e: React.MouseEvent&#x3C;HTMLAnchorElement, MouseEvent>) => {\r\n            onClick?.(e);\r\n            if (!href.startsWith(\"http\")) {\r\n                e.preventDefault();\r\n                return History.push(href, state);\r\n            }\r\n        },\r\n        [onClick, href, state]\r\n    );\r\n    return &#x3C;a {...props} href={href} onClick={click} />\r\n};\n</code></pre> <p>And with that, we have all the necessary elements for the base of the router.</p> ";
// Exports
module.exports = code;

/***/ }),

/***/ 8302:
/***/ ((module) => {

// Module
var code = "";
// Exports
module.exports = code;

/***/ }),

/***/ 2525:
/***/ ((module) => {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 8772:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(331);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 3615:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(8772)();
}


/***/ }),

/***/ 331:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 8702:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),

/***/ 9185:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(8702);
} else {}


/***/ }),

/***/ 5243:
/***/ ((module) => {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),

/***/ 4039:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isarray = __webpack_require__(5243)

/**
 * Expose `pathToRegexp`.
 */
module.exports = pathToRegexp
module.exports.parse = parse
module.exports.compile = compile
module.exports.tokensToFunction = tokensToFunction
module.exports.tokensToRegExp = tokensToRegExp

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g')

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = []
  var key = 0
  var index = 0
  var path = ''
  var defaultDelimiter = options && options.delimiter || '/'
  var res

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0]
    var escaped = res[1]
    var offset = res.index
    path += str.slice(index, offset)
    index = offset + m.length

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1]
      continue
    }

    var next = str[index]
    var prefix = res[2]
    var name = res[3]
    var capture = res[4]
    var group = res[5]
    var modifier = res[6]
    var asterisk = res[7]

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path)
      path = ''
    }

    var partial = prefix != null && next != null && next !== prefix
    var repeat = modifier === '+' || modifier === '*'
    var optional = modifier === '?' || modifier === '*'
    var delimiter = res[2] || defaultDelimiter
    var pattern = capture || group

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    })
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index)
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path)
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length)

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options))
    }
  }

  return function (obj, opts) {
    var path = ''
    var data = obj || {}
    var options = opts || {}
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i]

      if (typeof token === 'string') {
        path += token

        continue
      }

      var value = data[token.name]
      var segment

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j])

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value)

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g)

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      })
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = []

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source)
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  var strict = options.strict
  var end = options.end !== false
  var route = ''

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i]

    if (typeof token === 'string') {
      route += escapeString(token)
    } else {
      var prefix = escapeString(token.prefix)
      var capture = '(?:' + token.pattern + ')'

      keys.push(token)

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*'
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?'
        } else {
          capture = prefix + '(' + capture + ')?'
        }
      } else {
        capture = prefix + '(' + capture + ')'
      }

      route += capture
    }
  }

  var delimiter = escapeString(options.delimiter || '/')
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?'
  }

  if (end) {
    route += '$'
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)'
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options)
    keys = []
  }

  options = options || {}

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}


/***/ }),

/***/ 9760:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({ value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _extends = _interopDefault(__webpack_require__(9603));
var _objectWithoutPropertiesLoose = _interopDefault(__webpack_require__(120));
var React = _interopDefault(__webpack_require__(7378));
var renderprops = __webpack_require__(5249);

const El = renderprops.Globals.defaultElement;
const AnimatedDiv = renderprops.animated(El);

const _React$createContext = React.createContext(null),
      Provider = _React$createContext.Provider,
      Consumer = _React$createContext.Consumer;

function getScrollType(horizontal) {
  return horizontal ? 'scrollLeft' : 'scrollTop';
}

const START_TRANSLATE_3D = 'translate3d(0px,0px,0px)';
const START_TRANSLATE = 'translate(0px,0px)';
class ParallaxLayer extends React.PureComponent {
  componentDidMount() {
    const parent = this.parent;

    if (parent) {
      parent.layers = parent.layers.concat(this);
      parent.update();
    }
  }

  componentWillUnmount() {
    const parent = this.parent;

    if (parent) {
      parent.layers = parent.layers.filter(layer => layer !== this);
      parent.update();
    }
  }

  setPosition(height, scrollTop, immediate) {
    if (immediate === void 0) {
      immediate = false;
    }

    const config = this.parent.props.config;
    const targetScroll = Math.floor(this.props.offset) * height;
    const offset = height * this.props.offset + targetScroll * this.props.speed;
    const to = parseFloat(-(scrollTop * this.props.speed) + offset);
    this.controller.update({
      translate: to,
      config,
      immediate
    });
  }

  setHeight(height, immediate) {
    if (immediate === void 0) {
      immediate = false;
    }

    const config = this.parent.props.config;
    const to = parseFloat(height * this.props.factor);
    this.controller.update({
      space: to,
      config,
      immediate
    });
  }

  initialize() {
    const props = this.props;
    const parent = this.parent;
    const targetScroll = Math.floor(props.offset) * parent.space;
    const offset = parent.space * props.offset + targetScroll * props.speed;
    const to = parseFloat(-(parent.current * props.speed) + offset);
    this.controller = new renderprops.Controller({
      space: parent.space * props.factor,
      translate: to
    });
  }

  renderLayer() {
    const _this$props = this.props,
          style = _this$props.style,
          children = _this$props.children,
          offset = _this$props.offset,
          speed = _this$props.speed,
          factor = _this$props.factor,
          className = _this$props.className,
          props = _objectWithoutPropertiesLoose(_this$props, ["style", "children", "offset", "speed", "factor", "className"]);

    const horizontal = this.parent.props.horizontal;
    const translate3d = this.controller.interpolations.translate.interpolate(x => horizontal ? `translate3d(${x}px,0,0)` : `translate3d(0,${x}px,0)`);
    return React.createElement(AnimatedDiv, _extends({}, props, {
      className: className,
      style: _extends({
        position: 'absolute',
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        willChange: 'transform',
        [horizontal ? 'height' : 'width']: '100%',
        [horizontal ? 'width' : 'height']: this.controller.interpolations.space,
        WebkitTransform: translate3d,
        MsTransform: translate3d,
        transform: translate3d
      }, style)
    }), children);
  }

  render() {
    return React.createElement(Consumer, null, parent => {
      if (parent && !this.parent) {
        this.parent = parent;
        this.initialize();
      }

      return this.renderLayer();
    });
  }

}
ParallaxLayer.defaultProps = {
  factor: 1,
  offset: 0,
  speed: 0
};
class Parallax extends React.PureComponent {
  // TODO keep until major release
  constructor(props) {
    super();

    this.moveItems = () => {
      this.layers.forEach(layer => layer.setPosition(this.space, this.current));
      this.busy = false;
    };

    this.scrollerRaf = () => renderprops.Globals.requestFrame(this.moveItems);

    this.onScroll = event => {
      const horizontal = this.props.horizontal;

      if (!this.busy) {
        this.busy = true;
        this.scrollerRaf();
        this.current = event.target[getScrollType(horizontal)];
      }
    };

    this.update = () => {
      const _this$props2 = this.props,
            scrolling = _this$props2.scrolling,
            horizontal = _this$props2.horizontal;
      const scrollType = getScrollType(horizontal);
      if (!this.container) return;
      this.space = this.container[horizontal ? 'clientWidth' : 'clientHeight'];
      if (scrolling) this.current = this.container[scrollType];else this.container[scrollType] = this.current = this.offset * this.space;
      if (this.content) this.content.style[horizontal ? 'width' : 'height'] = `${this.space * this.props.pages}px`;
      this.layers.forEach(layer => {
        layer.setHeight(this.space, true);
        layer.setPosition(this.space, this.current, true);
      });
    };

    this.updateRaf = () => {
      renderprops.Globals.requestFrame(this.update); // Some browsers don't fire on maximize

      setTimeout(this.update, 150);
    };

    this.scrollStop = event => this.controller.stop();

    this.state = {
      ready: false
    };
    this.layers = [];
    this.space = 0;
    this.current = 0;
    this.offset = 0;
    this.busy = false;
    this.controller = new renderprops.Controller({
      scroll: 0
    });
  }

  scrollTo(offset) {
    const _this$props3 = this.props,
          horizontal = _this$props3.horizontal,
          config = _this$props3.config;
    const scrollType = getScrollType(horizontal);
    this.scrollStop();
    this.offset = offset;
    const target = this.container;
    this.controller.update({
      scroll: offset * this.space,
      config,
      onFrame: (_ref) => {
        let scroll = _ref.scroll;
        return target[scrollType] = scroll;
      }
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateRaf, false);
    this.update();
    this.setState({
      ready: true
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateRaf, false);
  }

  componentDidUpdate() {
    this.update();
  }

  render() {
    const _this$props4 = this.props,
          style = _this$props4.style,
          innerStyle = _this$props4.innerStyle,
          pages = _this$props4.pages,
          id = _this$props4.id,
          className = _this$props4.className,
          scrolling = _this$props4.scrolling,
          children = _this$props4.children,
          horizontal = _this$props4.horizontal;
    const overflow = scrolling ? 'scroll' : 'hidden';
    return React.createElement(El, {
      ref: node => this.container = node,
      onScroll: this.onScroll,
      onWheel: scrolling ? this.scrollStop : null,
      onTouchStart: scrolling ? this.scrollStop : null,
      style: _extends({
        position: 'absolute',
        width: '100%',
        height: '100%',
        overflow,
        overflowY: horizontal ? 'hidden' : overflow,
        overflowX: horizontal ? overflow : 'hidden',
        WebkitOverflowScrolling: 'touch',
        WebkitTransform: START_TRANSLATE,
        MsTransform: START_TRANSLATE,
        transform: START_TRANSLATE_3D
      }, style),
      id: id,
      className: className
    }, this.state.ready && React.createElement(El, {
      ref: node => this.content = node,
      style: _extends({
        position: 'absolute',
        [horizontal ? 'height' : 'width']: '100%',
        WebkitTransform: START_TRANSLATE,
        MsTransform: START_TRANSLATE,
        transform: START_TRANSLATE_3D,
        overflow: 'hidden',
        [horizontal ? 'width' : 'height']: this.space * pages
      }, innerStyle)
    }, React.createElement(Provider, {
      value: this
    }, children)));
  }

}
Parallax.Layer = ParallaxLayer;
Parallax.defaultProps = {
  config: renderprops.config.slow,
  scrolling: true,
  horizontal: false
};

exports.VS = Parallax;
exports._L = ParallaxLayer;


/***/ }),

/***/ 5249:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _objectWithoutPropertiesLoose = _interopDefault(__webpack_require__(120));
var _extends = _interopDefault(__webpack_require__(9603));
var React = __webpack_require__(7378);
var React__default = _interopDefault(React);
var ReactDOM = _interopDefault(__webpack_require__(6794));

let bugfixes = undefined;
let applyAnimatedValues = undefined;
let colorNames = [];
let requestFrame = cb => typeof window !== 'undefined' && window.requestAnimationFrame(cb);
let cancelFrame = cb => typeof window !== 'undefined' && window.cancelAnimationFrame(cb);
let interpolation = undefined;
let now = () => Date.now();
let defaultElement = undefined;
let createAnimatedStyle = undefined;
const injectApplyAnimatedValues = (fn, transform) => applyAnimatedValues = {
  fn,
  transform
};
const injectColorNames = names => colorNames = names;
const injectBugfixes = fn => bugfixes = fn;
const injectInterpolation = cls => interpolation = cls;
const injectFrame = (raf, caf) => {
  var _ref = [raf, caf];
  requestFrame = _ref[0];
  cancelFrame = _ref[1];
  return _ref;
};
const injectNow = nowFn => now = nowFn;
const injectDefaultElement = el => defaultElement = el;
const injectCreateAnimatedStyle = factory => createAnimatedStyle = factory;

var Globals = /*#__PURE__*/Object.freeze({
  get bugfixes () { return bugfixes; },
  get applyAnimatedValues () { return applyAnimatedValues; },
  get colorNames () { return colorNames; },
  get requestFrame () { return requestFrame; },
  get cancelFrame () { return cancelFrame; },
  get interpolation () { return interpolation; },
  get now () { return now; },
  get defaultElement () { return defaultElement; },
  get createAnimatedStyle () { return createAnimatedStyle; },
  injectApplyAnimatedValues: injectApplyAnimatedValues,
  injectColorNames: injectColorNames,
  injectBugfixes: injectBugfixes,
  injectInterpolation: injectInterpolation,
  injectFrame: injectFrame,
  injectNow: injectNow,
  injectDefaultElement: injectDefaultElement,
  injectCreateAnimatedStyle: injectCreateAnimatedStyle
});

class Animated {
  attach() {}

  detach() {}

  getValue() {}

  getAnimatedValue() {
    return this.getValue();
  }

  addChild(child) {}

  removeChild(child) {}

  getChildren() {
    return [];
  }

}

const getValues = object => Object.keys(object).map(k => object[k]);

class AnimatedWithChildren extends Animated {
  constructor() {
    var _this;

    super(...arguments);
    _this = this;
    this.children = [];

    this.getChildren = () => this.children;

    this.getPayload = function (index) {
      if (index === void 0) {
        index = undefined;
      }

      return index !== void 0 && _this.payload ? _this.payload[index] : _this.payload || _this;
    };
  }

  addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  }

}
class AnimatedArrayWithChildren extends AnimatedWithChildren {
  constructor() {
    super(...arguments);
    this.payload = [];

    this.getAnimatedValue = () => this.getValue();

    this.attach = () => this.payload.forEach(p => p instanceof Animated && p.addChild(this));

    this.detach = () => this.payload.forEach(p => p instanceof Animated && p.removeChild(this));
  }

}
class AnimatedObjectWithChildren extends AnimatedWithChildren {
  constructor() {
    super(...arguments);
    this.payload = {};

    this.getAnimatedValue = () => this.getValue(true);

    this.attach = () => getValues(this.payload).forEach(s => s instanceof Animated && s.addChild(this));

    this.detach = () => getValues(this.payload).forEach(s => s instanceof Animated && s.removeChild(this));
  }

  getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    const payload = {};

    for (const key in this.payload) {
      const value = this.payload[key];
      if (animated && !(value instanceof Animated)) continue;
      payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  }

}

class AnimatedStyle extends AnimatedObjectWithChildren {
  constructor(style) {
    super();
    style = style || {};
    if (style.transform && !(style.transform instanceof Animated)) style = applyAnimatedValues.transform(style);
    this.payload = style;
  }

}

// http://www.w3.org/TR/css3-color/#svg-color
const colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

class Interpolation {
  // Default config = config, args
  // Short config   = range, output, extrapolate
  static create(config, output, extra) {
    if (typeof config === 'function') return config;else if (interpolation && config.output && typeof config.output[0] === 'string') return interpolation(config);else if (Array.isArray(config)) return Interpolation.create({
      range: config,
      output,
      extrapolate: extra || 'extend'
    });
    let outputRange = config.output;
    let inputRange = config.range || [0, 1];

    let easing = config.easing || (t => t);

    let extrapolateLeft = 'extend';
    let map = config.map;
    if (config.extrapolateLeft !== undefined) extrapolateLeft = config.extrapolateLeft;else if (config.extrapolate !== undefined) extrapolateLeft = config.extrapolate;
    let extrapolateRight = 'extend';
    if (config.extrapolateRight !== undefined) extrapolateRight = config.extrapolateRight;else if (config.extrapolate !== undefined) extrapolateRight = config.extrapolate;
    return input => {
      let range = findRange(input, inputRange);
      return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, map);
    };
  }

}

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

  return i - 1;
}

// const INTEGER = '[-+]?\\d+';
const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call() {
  return '\\(\\s*(' + Array.prototype.slice.call(arguments).join(')\\s*,\\s*(') + ')\\s*\\)';
}

const rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor(color) {
  let match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors.hasOwnProperty(color)) return colors[color];

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 0xff000000) >>> 24;
  let g = (int32Color & 0x00ff0000) >>> 16;
  let b = (int32Color & 0x0000ff00) >>> 8;
  let a = (int32Color & 0x000000ff) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


const stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

const colorNamesRegex = new RegExp(`(${Object.keys(colors).join('|')})`, 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

function createInterpolation(config) {
  // Replace colors with rgba
  const outputRange = config.output.map(rangeValue => rangeValue.replace(colorRegex, colorToRgba)).map(rangeValue => rangeValue.replace(colorNamesRegex, colorToRgba)); // ->
  // [
  //   [0, 50],
  //   [100, 150],
  //   [200, 250],
  //   [0, 0.5],
  // ]

  const outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
  outputRange.forEach(value => {
    value.match(stringShapeRegex).forEach((number, i) => outputRanges[i].push(+number));
  });
  const interpolations = outputRange[0].match(stringShapeRegex).map((value, i) => {
    return Interpolation.create(_extends({}, config, {
      output: outputRanges[i]
    }));
  });
  return input => {
    let i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, () => interpolations[i++](input)) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`);
  };
}

class AnimatedInterpolation extends AnimatedArrayWithChildren {
  constructor(parents, _config, _arg) {
    super();

    this.getValue = () => this.calc(...this.payload.map(value => value.getValue()));

    this.updateConfig = (config, arg) => this.calc = Interpolation.create(config, arg);

    this.interpolate = (config, arg) => new AnimatedInterpolation(this, config, arg);

    this.payload = // AnimatedArrays should unfold, except AnimatedInterpolation which is taken as is
    parents instanceof AnimatedArrayWithChildren && !parents.updateConfig ? parents.payload : Array.isArray(parents) ? parents : [parents];
    this.calc = Interpolation.create(_config, _arg);
  }

}
const interpolate$1 = (parents, config, arg) => parents && new AnimatedInterpolation(parents, config, arg);

/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an Animated.Value is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */

function findAnimatedStyles(node, styles) {
  if (typeof node.update === 'function') styles.add(node);else node.getChildren().forEach(child => findAnimatedStyles(child, styles));
}
/**
 * Standard value for driving animations.  One `Animated.Value` can drive
 * multiple properties in a synchronized fashion, but can only be driven by one
 * mechanism at a time.  Using a new mechanism (e.g. starting a new animation,
 * or calling `setValue`) will stop any previous ones.
 */


class AnimatedValue extends AnimatedWithChildren {
  constructor(_value) {
    var _this;

    super();
    _this = this;

    this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    this.getValue = () => this.value;

    this.updateStyles = () => findAnimatedStyles(this, this.animatedStyles);

    this.updateValue = value => this.flush(this.value = value);

    this.interpolate = (config, arg) => new AnimatedInterpolation(this, config, arg);

    this.value = _value;
    this.animatedStyles = new Set();
    this.done = false;
    this.startPosition = _value;
    this.lastPosition = _value;
    this.lastVelocity = undefined;
    this.lastTime = undefined;
    this.controller = undefined;
  }

  flush() {
    if (this.animatedStyles.size === 0) this.updateStyles();
    this.animatedStyles.forEach(animatedStyle => animatedStyle.update());
  }

  prepare(controller) {
    // Values stay loyal to their original controller, this is also a way to
    // detect trailing values originating from a foreign controller
    if (this.controller === undefined) this.controller = controller;

    if (this.controller === controller) {
      this.startPosition = this.value;
      this.lastPosition = this.value;
      this.lastVelocity = controller.isActive ? this.lastVelocity : undefined;
      this.lastTime = controller.isActive ? this.lastTime : undefined;
      this.done = false;
      this.animatedStyles.clear();
    }
  }

}

class AnimatedArray extends AnimatedArrayWithChildren {
  constructor(array) {
    var _this;

    super();
    _this = this;

    this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      if (Array.isArray(value)) {
        if (value.length === _this.payload.length) value.forEach((v, i) => _this.payload[i].setValue(v, flush));
      } else _this.payload.forEach((v, i) => _this.payload[i].setValue(value, flush));
    };

    this.getValue = () => this.payload.map(v => v.getValue());

    this.interpolate = (config, arg) => new AnimatedInterpolation(this, config, arg);

    this.payload = array.map(n => new AnimatedValue(n));
  }

}

function withDefault(value, defaultValue) {
  return value === undefined || value === null ? defaultValue : value;
}
function toArray(a) {
  return a !== void 0 ? Array.isArray(a) ? a : [a] : [];
}
function shallowEqual(a, b) {
  if (typeof a !== typeof b) return false;
  if (typeof a === 'string' || typeof a === 'number') return a === b;
  let i;

  for (i in a) if (!(i in b)) return false;

  for (i in b) if (a[i] !== b[i]) return false;

  return i === void 0 ? a === b : true;
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return typeof obj === 'function' ? obj(...args) : obj;
}
function getValues$1(object) {
  return Object.keys(object).map(k => object[k]);
}
function getForwardProps(props) {
  const to = props.to,
        from = props.from,
        config = props.config,
        native = props.native,
        onStart = props.onStart,
        onRest = props.onRest,
        onFrame = props.onFrame,
        children = props.children,
        reset = props.reset,
        reverse = props.reverse,
        force = props.force,
        immediate = props.immediate,
        impl = props.impl,
        inject = props.inject,
        delay = props.delay,
        attach = props.attach,
        destroyed = props.destroyed,
        interpolateTo = props.interpolateTo,
        autoStart = props.autoStart,
        ref = props.ref,
        forward = _objectWithoutPropertiesLoose(props, ["to", "from", "config", "native", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "impl", "inject", "delay", "attach", "destroyed", "interpolateTo", "autoStart", "ref"]);

  return forward;
}
function interpolateTo(props) {
  const forward = getForwardProps(props);
  const rest = Object.keys(props).reduce((a, k) => forward[k] !== void 0 ? a : _extends({}, a, {
    [k]: props[k]
  }), {});
  return _extends({
    to: forward
  }, rest);
}
function convertToAnimatedValue(acc, _ref) {
  let name = _ref[0],
      value = _ref[1];
  return _extends({}, acc, {
    [name]: new (Array.isArray(value) ? AnimatedArray : AnimatedValue)(value)
  });
}
function convertValues(props) {
  const from = props.from,
        to = props.to,
        native = props.native;
  const allProps = Object.entries(_extends({}, from, to));
  return native ? allProps.reduce(convertToAnimatedValue, {}) : _extends({}, from, to);
}
function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (typeof forward === 'function') forward(ref);else if (typeof forward === 'object') {
      // If it's an object and has a 'current' property, assume it's a ref object
      forward.current = ref;
    }
  }

  return ref;
}

const check = value => value === 'auto';

const overwrite = (width, height) => (acc, _ref) => {
  let name = _ref[0],
      value = _ref[1];
  return _extends({}, acc, {
    [name]: value === 'auto' ? ~name.indexOf('height') ? height : width : value
  });
};

function fixAuto(props, callback) {
  const from = props.from,
        to = props.to,
        children = props.children; // Dry-route props back if nothing's using 'auto' in there
  // TODO: deal with "null"

  if (!(getValues$1(to).some(check) || getValues$1(from).some(check))) return; // Fetch render v-dom

  let element = children(convertValues(props)); // A spring can return undefined/null, check against that (#153)

  if (!element) return; // Or it could be an array (#346) ...

  if (Array.isArray(element)) element = {
    type: 'div',
    props: {
      children: element
    } // Extract styles

  };
  const elementStyles = element.props.style; // Return v.dom with injected ref

  return React__default.createElement(element.type, _extends({
    key: element.key ? element.key : undefined
  }, element.props, {
    style: _extends({}, elementStyles, {
      position: 'absolute',
      visibility: 'hidden'
    }),
    ref: _ref2 => {
      if (_ref2) {
        // Once it's rendered out, fetch bounds (minus padding/margin/borders)
        let node = ReactDOM.findDOMNode(_ref2);
        let width, height;
        let cs = getComputedStyle(node);

        if (cs.boxSizing === 'border-box') {
          width = node.offsetWidth;
          height = node.offsetHeight;
        } else {
          const paddingX = parseFloat(cs.paddingLeft || 0) + parseFloat(cs.paddingRight || 0);
          const paddingY = parseFloat(cs.paddingTop || 0) + parseFloat(cs.paddingBottom || 0);
          const borderX = parseFloat(cs.borderLeftWidth || 0) + parseFloat(cs.borderRightWidth || 0);
          const borderY = parseFloat(cs.borderTopWidth || 0) + parseFloat(cs.borderBottomWidth || 0);
          width = node.offsetWidth - paddingX - borderX;
          height = node.offsetHeight - paddingY - borderY;
        }

        const convert = overwrite(width, height);
        callback(_extends({}, props, {
          from: Object.entries(from).reduce(convert, from),
          to: Object.entries(to).reduce(convert, to)
        }));
      }
    }
  }));
}

let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

const attributeCache = {};
injectCreateAnimatedStyle(style => new AnimatedStyle(style));
injectDefaultElement('div');
injectInterpolation(createInterpolation);
injectColorNames(colors);
injectBugfixes(fixAuto);
injectApplyAnimatedValues((instance, props) => {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    const style = props.style,
          children = props.children,
          scrollTop = props.scrollTop,
          scrollLeft = props.scrollLeft,
          attributes = _objectWithoutPropertiesLoose(props, ["style", "children", "scrollTop", "scrollLeft"]);

    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (let styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (let name in attributes) {
      // Attributes are written in dash case
      const dashCase = attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase()));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }
  } else return false;
}, style => style);

let active = false;
const controllers = new Set();

const frameLoop = () => {
  let time = now();

  for (let controller of controllers) {
    let isDone = true;
    let noChange = true;

    for (let configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      let config = controller.configs[configIdx];
      let endOfAnimation, lastTime;

      for (let valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        let animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        let from = config.fromValues[valIdx];
        let to = config.toValues[valIdx];
        let position = animation.lastPosition;
        let isAnimated = to instanceof Animated;
        let velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;
        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate || !isAnimated && !config.decay && from === to) {
          animation.updateValue(to);
          animation.done = true;
          continue;
        } // Doing delay here instead of setTimeout is one async worry less


        if (config.delay && time - controller.startTime < config.delay) {
          isDone = false;
          continue;
        } // Flag change


        noChange = false; // Break animation when string values are involved

        if (typeof from === 'string' || typeof to === 'string') {
          animation.updateValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - controller.startTime - config.delay) / config.duration) * (to - from);
          endOfAnimation = time >= controller.startTime + config.delay + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - controller.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          let numSteps = Math.floor(time - lastTime);

          for (let i = 0; i < numSteps; ++i) {
            let force = -config.tension * (position - to);
            let damping = -config.friction * velocity;
            let acceleration = (force + damping) / config.mass;
            velocity = velocity + acceleration * 1 / 1000;
            position = position + velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          let isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          let isVelocity = Math.abs(velocity) <= config.precision;
          let isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isDone = false;

        animation.updateValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame || !controller.props.native) controller.animatedProps[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame || !controller.props.native) {
      if (!controller.props.native && controller.onUpdate) controller.onUpdate();
      if (controller.props.onFrame) controller.props.onFrame(controller.animatedProps);
    } // Either call onEnd or next frame


    if (isDone) {
      controllers.delete(controller);
      controller.debouncedOnEnd({
        finished: true,
        noChange
      });
    }
  } // Loop over as long as there are controllers ...


  if (controllers.size) requestFrame(frameLoop);else active = false;
};

const addController = controller => {
  if (!controllers.has(controller)) {
    controllers.add(controller);
    if (!active) requestFrame(frameLoop);
    active = true;
  }
};

const removeController = controller => {
  if (controllers.has(controller)) {
    controllers.delete(controller);
  }
};

class Controller {
  constructor(props, config) {
    if (config === void 0) {
      config = {
        native: true,
        interpolateTo: true,
        autoStart: true
      };
    }

    this.getValues = () => this.props.native ? this.interpolations : this.animatedProps;

    this.dependents = new Set();
    this.isActive = false;
    this.hasChanged = false;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.animatedProps = {};
    this.configs = [];
    this.frame = undefined;
    this.startTime = undefined;
    this.lastTime = undefined;
    this.update(_extends({}, props, config));
  }

  update(props) {
    this.props = _extends({}, this.props, props);

    let _ref = this.props.interpolateTo ? interpolateTo(this.props) : this.props,
        _ref$from = _ref.from,
        from = _ref$from === void 0 ? {} : _ref$from,
        _ref$to = _ref.to,
        to = _ref$to === void 0 ? {} : _ref$to,
        _ref$config = _ref.config,
        config = _ref$config === void 0 ? {} : _ref$config,
        _ref$delay = _ref.delay,
        delay = _ref$delay === void 0 ? 0 : _ref$delay,
        reverse = _ref.reverse,
        attach = _ref.attach,
        reset = _ref.reset,
        immediate = _ref.immediate,
        autoStart = _ref.autoStart,
        ref = _ref.ref; // Reverse values when requested


    if (reverse) {
      var _ref2 = [to, from];
      from = _ref2[0];
      to = _ref2[1];
    }

    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    let target = attach && attach(this); // Reset merged props when necessary

    let extra = reset ? {} : this.merged; // This will collect all props that were ever set

    this.merged = _extends({}, from, extra, to); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce((acc, _ref3, i) => {
      let name = _ref3[0],
          value = _ref3[1];
      // Issue cached entries, except on reset
      let entry = !reset && acc[name] || {}; // Figure out what the value is supposed to be

      const isNumber = typeof value === 'number';
      const isString = typeof value === 'string' && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      const isArray = !isNumber && !isString && Array.isArray(value);
      let fromValue = from[name] !== undefined ? from[name] : value;
      let toValue = isNumber || isArray ? value : isString ? value : 1;
      let toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent; // Detect changes, animated values will be checked in the raf-loop

      if (toConfig.decay !== void 0 || !shallowEqual(entry.changes, value)) {
        this.hasChanged = true;
        let parent, interpolation$$1;
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedArray(fromValue);else {
          const prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);

          const range = {
            output: [prev !== void 0 ? prev : fromValue, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        } // Set immediate values

        if (callProp(immediate, name)) parent.setValue(value, false); // Reset animated values

        const animatedValues = toArray(parent.getPayload());
        animatedValues.forEach(value => value.prepare(this));
        return _extends({}, acc, {
          [name]: _extends({}, entry, {
            name,
            parent,
            interpolation: interpolation$$1,
            animatedValues,
            changes: value,
            fromValues: toArray(parent.getValue()),
            toValues: toArray(target ? toValue.getPayload() : toValue),
            immediate: callProp(immediate, name),
            delay: withDefault(toConfig.delay, delay || 0),
            initialVelocity: withDefault(toConfig.velocity, 0),
            clamp: withDefault(toConfig.clamp, false),
            precision: withDefault(toConfig.precision, 0.01),
            tension: withDefault(toConfig.tension, 170),
            friction: withDefault(toConfig.friction, 26),
            mass: withDefault(toConfig.mass, 1),
            duration: toConfig.duration,
            easing: withDefault(toConfig.easing, t => t),
            decay: toConfig.decay
          })
        });
      } else return acc;
    }, this.animations);

    if (this.hasChanged) {
      this.configs = getValues$1(this.animations);
      this.animatedProps = {};
      this.interpolations = {};

      for (let key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.animatedProps[key] = this.animations[key].interpolation.getValue();
      }
    } // TODO: clean up ref in controller


    for (var _len = arguments.length, start = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      start[_key - 1] = arguments[_key];
    }

    if (!ref && (autoStart || start.length)) this.start(...start);
    const onEnd = start[0],
          onUpdate = start[1];
    this.onEnd = typeof onEnd === 'function' && onEnd;
    this.onUpdate = onUpdate;
    return this.getValues();
  }

  start(onEnd, onUpdate) {
    this.startTime = now();
    if (this.isActive) this.stop();
    this.isActive = true;
    this.onEnd = typeof onEnd === 'function' && onEnd;
    this.onUpdate = onUpdate;
    if (this.props.onStart) this.props.onStart();
    addController(this);
    return new Promise(res => this.resolve = res);
  }

  stop(finished) {
    if (finished === void 0) {
      finished = false;
    }

    // Reset collected changes since the animation has been stopped cold turkey
    if (finished) getValues$1(this.animations).forEach(a => a.changes = undefined);
    this.debouncedOnEnd({
      finished
    });
  }

  destroy() {
    removeController(this);
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.animatedProps = {};
    this.configs = [];
  }

  debouncedOnEnd(result) {
    removeController(this);
    this.isActive = false;
    const onEnd = this.onEnd;
    this.onEnd = null;
    if (onEnd) onEnd(result);
    if (this.resolve) this.resolve();
    this.resolve = null;
  }

}

class AnimatedProps extends AnimatedObjectWithChildren {
  constructor(props, callback) {
    super();
    if (props.style) props = _extends({}, props, {
      style: createAnimatedStyle(props.style)
    });
    this.payload = props;
    this.update = callback;
    this.attach();
  }

}

function createAnimatedComponent(Component) {
  class AnimatedComponent extends React__default.Component {
    constructor(props) {
      super();

      this.callback = () => {
        if (this.node) {
          const didUpdate = applyAnimatedValues.fn(this.node, this.propsAnimated.getAnimatedValue(), this);
          if (didUpdate === false) this.forceUpdate();
        }
      };

      this.attachProps(props);
    }

    componentWillUnmount() {
      this.propsAnimated && this.propsAnimated.detach();
    }

    setNativeProps(props) {
      const didUpdate = applyAnimatedValues.fn(this.node, props, this);
      if (didUpdate === false) this.forceUpdate();
    } // The system is best designed when setNativeProps is implemented. It is
    // able to avoid re-rendering and directly set the attributes that
    // changed. However, setNativeProps can only be implemented on leaf
    // native components. If you want to animate a composite component, you
    // need to re-render it. In this case, we have a fallback that uses
    // forceUpdate.


    attachProps(_ref) {
      let forwardRef = _ref.forwardRef,
          nextProps = _objectWithoutPropertiesLoose(_ref, ["forwardRef"]);

      const oldPropsAnimated = this.propsAnimated;
      this.propsAnimated = new AnimatedProps(nextProps, this.callback); // When you call detach, it removes the element from the parent list
      // of children. If it goes to 0, then the parent also detaches itself
      // and so on.
      // An optimization is to attach the new elements and THEN detach the old
      // ones instead of detaching and THEN attaching.
      // This way the intermediate state isn't to go to 0 and trigger
      // this expensive recursive detaching to then re-attach everything on
      // the very next operation.

      oldPropsAnimated && oldPropsAnimated.detach();
    }

    shouldComponentUpdate(props) {
      const style = props.style,
            nextProps = _objectWithoutPropertiesLoose(props, ["style"]);

      const _this$props = this.props,
            currentStyle = _this$props.style,
            currentProps = _objectWithoutPropertiesLoose(_this$props, ["style"]);

      if (!shallowEqual(currentProps, nextProps) || !shallowEqual(currentStyle, style)) {
        this.attachProps(props);
        return true;
      }

      return false;
    }

    render() {
      const _this$propsAnimated$g = this.propsAnimated.getValue(),
            scrollTop = _this$propsAnimated$g.scrollTop,
            scrollLeft = _this$propsAnimated$g.scrollLeft,
            animatedProps = _objectWithoutPropertiesLoose(_this$propsAnimated$g, ["scrollTop", "scrollLeft"]);

      return React__default.createElement(Component, _extends({}, animatedProps, {
        ref: node => this.node = handleRef(node, this.props.forwardRef)
      }));
    }

  }

  return React__default.forwardRef((props, ref) => React__default.createElement(AnimatedComponent, _extends({}, props, {
    forwardRef: ref
  })));
}

const config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};

class Spring extends React__default.Component {
  constructor() {
    super(...arguments);
    this.state = {
      lastProps: {
        from: {},
        to: {}
      },
      propsChanged: false,
      internal: false
    };
    this.controller = new Controller(null, null);
    this.didUpdate = false;
    this.didInject = false;
    this.finished = true;

    this.start = () => {
      this.finished = false;
      let wasMounted = this.mounted;
      this.controller.start(props => this.finish(_extends({}, props, {
        wasMounted
      })), this.update);
    };

    this.stop = () => this.controller.stop(true);

    this.update = () => this.mounted && this.setState({
      internal: true
    });

    this.finish = (_ref) => {
      let finished = _ref.finished,
          noChange = _ref.noChange,
          wasMounted = _ref.wasMounted;
      this.finished = true;

      if (this.mounted && finished) {
        // Only call onRest if either we *were* mounted, or when there were changes
        if (this.props.onRest && (wasMounted || !noChange)) this.props.onRest(this.controller.merged); // Restore end-state

        if (this.mounted && this.didInject) {
          this.afterInject = convertValues(this.props);
          this.setState({
            internal: true
          });
        } // If we have an inject or values to apply after the animation we ping here


        if (this.mounted && (this.didInject || this.props.after)) this.setState({
          internal: true
        });
        this.didInject = false;
      }
    };
  }

  componentDidMount() {
    // componentDidUpdate isn't called on mount, we call it here to start animating
    this.componentDidUpdate();
    this.mounted = true;
  }

  componentWillUnmount() {
    // Stop all ongoing animtions
    this.mounted = false;
    this.stop();
  }

  static getDerivedStateFromProps(props, _ref2) {
    let internal = _ref2.internal,
        lastProps = _ref2.lastProps;
    // The following is a test against props that could alter the animation
    const from = props.from,
          to = props.to,
          reset = props.reset,
          force = props.force;
    const propsChanged = !shallowEqual(to, lastProps.to) || !shallowEqual(from, lastProps.from) || reset && !internal || force && !internal;
    return {
      propsChanged,
      lastProps: props,
      internal: false
    };
  }

  render() {
    const children = this.props.children;
    const propsChanged = this.state.propsChanged; // Inject phase -----------------------------------------------------------
    // Handle injected frames, for instance targets/web/fix-auto
    // An inject will return an intermediary React node which measures itself out
    // .. and returns a callback when the values sought after are ready, usually "auto".

    if (this.props.inject && propsChanged && !this.injectProps) {
      const frame = this.props.inject(this.props, injectProps => {
        // The inject frame has rendered, now let's update animations...
        this.injectProps = injectProps;
        this.setState({
          internal: true
        });
      }); // Render out injected frame

      if (frame) return frame;
    } // Update phase -----------------------------------------------------------


    if (this.injectProps || propsChanged) {
      // We can potentially cause setState, but we're inside render, the flag prevents that
      this.didInject = false; // Update animations, this turns from/to props into AnimatedValues
      // An update can occur on injected props, or when own-props have changed.

      if (this.injectProps) {
        this.controller.update(this.injectProps); // didInject is needed, because there will be a 3rd stage, where the original values
        // .. will be restored after the animation is finished. When someone animates towards
        // .. "auto", the end-result should be "auto", not "1999px", which would block nested
        // .. height/width changes.

        this.didInject = true;
      } else if (propsChanged) this.controller.update(this.props); // Flag an update that occured, componentDidUpdate will start the animation later on


      this.didUpdate = true;
      this.afterInject = undefined;
      this.injectProps = undefined;
    } // Render phase -----------------------------------------------------------
    // Render out raw values or AnimatedValues depending on "native"


    let values = _extends({}, this.controller.getValues(), this.afterInject);

    if (this.finished) values = _extends({}, values, this.props.after);
    return Object.keys(values).length ? children(values) : null;
  }

  componentDidUpdate() {
    // The animation has to start *after* render, since at that point the scene
    // .. graph should be established, so we do it here. Unfortunatelly, non-native
    // .. animations as well as "auto"-injects call forceUpdate, so it's causing a loop.
    // .. didUpdate prevents that as it gets set only on prop changes.
    if (this.didUpdate) this.start();
    this.didUpdate = false;
  }

}
Spring.defaultProps = {
  from: {},
  to: {},
  config: config.default,
  native: false,
  immediate: false,
  reset: false,
  force: false,
  inject: bugfixes
};

class Trail extends React__default.PureComponent {
  constructor() {
    super(...arguments);
    this.first = true;
    this.instances = new Set();

    this.hook = (instance, index, length, reverse) => {
      // Add instance to set
      this.instances.add(instance); // Return undefined on the first index and from then on the previous instance

      if (reverse ? index === length - 1 : index === 0) return undefined;else return Array.from(this.instances)[reverse ? index + 1 : index - 1];
    };
  }

  render() {
    const _this$props = this.props,
          items = _this$props.items,
          _children = _this$props.children,
          _this$props$from = _this$props.from,
          from = _this$props$from === void 0 ? {} : _this$props$from,
          initial = _this$props.initial,
          reverse = _this$props.reverse,
          keys = _this$props.keys,
          delay = _this$props.delay,
          onRest = _this$props.onRest,
          props = _objectWithoutPropertiesLoose(_this$props, ["items", "children", "from", "initial", "reverse", "keys", "delay", "onRest"]);

    const array = toArray(items);
    return toArray(array).map((item, i) => React__default.createElement(Spring, _extends({
      onRest: i === 0 ? onRest : null,
      key: typeof keys === 'function' ? keys(item) : toArray(keys)[i],
      from: this.first && initial !== void 0 ? initial || {} : from
    }, props, {
      delay: i === 0 && delay || undefined,
      attach: instance => this.hook(instance, i, array.length, reverse),
      children: props => {
        const child = _children(item, i);

        return child ? child(props) : null;
      }
    })));
  }

  componentDidUpdate(prevProps) {
    this.first = false;
    if (prevProps.items !== this.props.items) this.instances.clear();
  }

}
Trail.defaultProps = {
  keys: item => item
};

const DEFAULT = '__default';

class KeyframesImpl extends React__default.PureComponent {
  constructor() {
    var _this;

    super(...arguments);
    _this = this;
    this.guid = 0;
    this.state = {
      props: {},
      resolve: () => null,
      last: true,
      index: 0
    };

    this.next = function (props, last, index) {
      if (last === void 0) {
        last = true;
      }

      if (index === void 0) {
        index = 0;
      }

      _this.running = true;
      return new Promise(resolve => {
        _this.mounted && _this.setState(state => ({
          props,
          resolve,
          last,
          index
        }), () => _this.running = false);
      });
    };
  }

  componentDidMount() {
    this.mounted = true;
    this.componentDidUpdate({});
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  componentDidUpdate(previous) {
    var _this2 = this;

    const _this$props = this.props,
          states = _this$props.states,
          f = _this$props.filter,
          state = _this$props.state;

    if (previous.state !== this.props.state || this.props.reset && !this.running || !shallowEqual(states[state], previous.states[previous.state])) {
      if (states && state && states[state]) {
        const localId = ++this.guid;
        const slots = states[state];

        if (slots) {
          if (Array.isArray(slots)) {
            let q = Promise.resolve();

            for (let i = 0; i < slots.length; i++) {
              let index = i;
              let slot = slots[index];
              let last = index === slots.length - 1;
              q = q.then(() => localId === this.guid && this.next(f(slot), last, index));
            }
          } else if (typeof slots === 'function') {
            let index = 0;
            slots( // next
            function (props, last) {
              if (last === void 0) {
                last = false;
              }

              return localId === _this2.guid && _this2.next(f(props), last, index++);
            }, // cancel
            () => requestFrame(() => this.instance && this.instance.stop()), // ownprops
            this.props);
          } else {
            this.next(f(states[state]));
          }
        }
      }
    }
  }

  render() {
    const _this$state = this.state,
          props = _this$state.props,
          resolve = _this$state.resolve,
          last = _this$state.last,
          index = _this$state.index;
    if (!props || Object.keys(props).length === 0) return null;

    let _this$props2 = this.props,
        state = _this$props2.state,
        filter = _this$props2.filter,
        states = _this$props2.states,
        config = _this$props2.config,
        Component = _this$props2.primitive,
        _onRest = _this$props2.onRest,
        forwardRef = _this$props2.forwardRef,
        rest = _objectWithoutPropertiesLoose(_this$props2, ["state", "filter", "states", "config", "primitive", "onRest", "forwardRef"]); // Arrayed configs need an index to process


    if (Array.isArray(config)) config = config[index];
    return React__default.createElement(Component, _extends({
      ref: _ref => this.instance = handleRef(_ref, forwardRef),
      config: config
    }, rest, props, {
      onRest: args => {
        resolve(args);
        if (_onRest && last) _onRest(args);
      }
    }));
  }

}

KeyframesImpl.defaultProps = {
  state: DEFAULT
};
const Keyframes = React__default.forwardRef((props, ref) => React__default.createElement(KeyframesImpl, _extends({}, props, {
  forwardRef: ref
})));

Keyframes.create = primitive => function (states, filter) {
  if (filter === void 0) {
    filter = states => states;
  }

  if (typeof states === 'function' || Array.isArray(states)) states = {
    [DEFAULT]: states
  };
  return props => React__default.createElement(KeyframesImpl, _extends({
    primitive: primitive,
    states: states,
    filter: filter
  }, props));
};

Keyframes.Spring = states => Keyframes.create(Spring)(states, interpolateTo);

Keyframes.Trail = states => Keyframes.create(Trail)(states, interpolateTo);

let guid = 0;

let get = props => {
  let items = props.items,
      keys = props.keys,
      rest = _objectWithoutPropertiesLoose(props, ["items", "keys"]);

  items = toArray(items !== void 0 ? items : null);
  keys = typeof keys === 'function' ? items.map(keys) : toArray(keys); // Make sure numeric keys are interpreted as Strings (5 !== "5")

  return _extends({
    items,
    keys: keys.map(key => String(key))
  }, rest);
};

class Transition extends React__default.PureComponent {
  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  constructor(prevProps) {
    super(prevProps);

    this.destroyItem = (item, key, state) => values => {
      const _this$props = this.props,
            onRest = _this$props.onRest,
            onDestroyed = _this$props.onDestroyed;

      if (this.mounted) {
        onDestroyed && onDestroyed(item);
        this.setState((_ref) => {
          let deleted = _ref.deleted;
          return {
            deleted: deleted.filter(t => t.key !== key)
          };
        });
        onRest && onRest(item, state, values);
      }
    };

    this.state = {
      first: true,
      transitions: [],
      current: {},
      deleted: [],
      prevProps
    };
  }

  static getDerivedStateFromProps(props, _ref2) {
    let first = _ref2.first,
        prevProps = _ref2.prevProps,
        state = _objectWithoutPropertiesLoose(_ref2, ["first", "prevProps"]);

    let _get = get(props),
        items = _get.items,
        keys = _get.keys,
        initial = _get.initial,
        from = _get.from,
        enter = _get.enter,
        leave = _get.leave,
        update = _get.update,
        _get$trail = _get.trail,
        trail = _get$trail === void 0 ? 0 : _get$trail,
        unique = _get.unique,
        config = _get.config;

    let _get2 = get(prevProps),
        _keys = _get2.keys,
        _items = _get2.items;

    let current = _extends({}, state.current);

    let deleted = [...state.deleted]; // Compare next keys with current keys

    let currentKeys = Object.keys(current);
    let currentSet = new Set(currentKeys);
    let nextSet = new Set(keys);
    let added = keys.filter(item => !currentSet.has(item));
    let removed = state.transitions.filter(item => !item.destroyed && !nextSet.has(item.originalKey)).map(i => i.originalKey);
    let updated = keys.filter(item => currentSet.has(item));
    let delay = 0;
    added.forEach(key => {
      // In unique mode, remove fading out transitions if their key comes in again
      if (unique && deleted.find(d => d.originalKey === key)) deleted = deleted.filter(t => t.originalKey !== key);
      const keyIndex = keys.indexOf(key);
      const item = items[keyIndex];
      const state = 'enter';
      current[key] = {
        state,
        originalKey: key,
        key: unique ? String(key) : guid++,
        item,
        trail: delay = delay + trail,
        config: callProp(config, item, state),
        from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
        to: callProp(enter, item)
      };
    });
    removed.forEach(key => {
      const keyIndex = _keys.indexOf(key);

      const item = _items[keyIndex];
      const state = 'leave';
      deleted.push(_extends({}, current[key], {
        state,
        destroyed: true,
        left: _keys[Math.max(0, keyIndex - 1)],
        right: _keys[Math.min(_keys.length, keyIndex + 1)],
        trail: delay = delay + trail,
        config: callProp(config, item, state),
        to: callProp(leave, item)
      }));
      delete current[key];
    });
    updated.forEach(key => {
      const keyIndex = keys.indexOf(key);
      const item = items[keyIndex];
      const state = 'update';
      current[key] = _extends({}, current[key], {
        item,
        state,
        trail: delay = delay + trail,
        config: callProp(config, item, state),
        to: callProp(update, item)
      });
    }); // This tries to restore order for deleted items by finding their last known siblings

    let out = keys.map(key => current[key]);
    deleted.forEach((_ref3) => {
      let left = _ref3.left,
          right = _ref3.right,
          transition = _objectWithoutPropertiesLoose(_ref3, ["left", "right"]);

      let pos; // Was it the element on the left, if yes, move there ...

      if ((pos = out.findIndex(t => t.originalKey === left)) !== -1) pos += 1; // Or how about the element on the right ...

      if (pos === -1) pos = out.findIndex(t => t.originalKey === right); // Maybe we'll find it in the list of deleted items

      if (pos === -1) pos = deleted.findIndex(t => t.originalKey === left); // Checking right side as well

      if (pos === -1) pos = deleted.findIndex(t => t.originalKey === right); // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

      pos = Math.max(0, pos);
      out = [...out.slice(0, pos), transition, ...out.slice(pos)];
    });
    return {
      first: first && added.length === 0,
      transitions: out,
      current,
      deleted,
      prevProps: props
    };
  }

  render() {
    const _this$props2 = this.props,
          initial = _this$props2.initial,
          _this$props2$from = _this$props2.from,
          _this$props2$enter = _this$props2.enter,
          _this$props2$leave = _this$props2.leave,
          _this$props2$update = _this$props2.update,
          onDestroyed = _this$props2.onDestroyed,
          keys = _this$props2.keys,
          items = _this$props2.items,
          onFrame = _this$props2.onFrame,
          onRest = _this$props2.onRest,
          onStart = _this$props2.onStart,
          trail = _this$props2.trail,
          config = _this$props2.config,
          _children = _this$props2.children,
          unique = _this$props2.unique,
          reset = _this$props2.reset,
          extra = _objectWithoutPropertiesLoose(_this$props2, ["initial", "from", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "trail", "config", "children", "unique", "reset"]);

    return this.state.transitions.map((_ref4, i) => {
      let state = _ref4.state,
          key = _ref4.key,
          item = _ref4.item,
          from = _ref4.from,
          to = _ref4.to,
          trail = _ref4.trail,
          config = _ref4.config,
          destroyed = _ref4.destroyed;
      return React__default.createElement(Keyframes, _extends({
        reset: reset && state === 'enter',
        primitive: Spring,
        state: state,
        filter: interpolateTo,
        states: {
          [state]: to
        },
        key: key,
        onRest: destroyed ? this.destroyItem(item, key, state) : onRest && (values => onRest(item, state, values)),
        onStart: onStart && (() => onStart(item, state)),
        onFrame: onFrame && (values => onFrame(item, state, values)),
        delay: trail,
        config: config
      }, extra, {
        from: from,
        children: props => {
          const child = _children(item, state, i);

          return child ? child(props) : null;
        }
      }));
    });
  }

}
Transition.defaultProps = {
  keys: item => item,
  unique: false,
  reset: false
};

const domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
const extendedAnimated = domElements.reduce((acc, element) => {
  acc[element] = createAnimatedComponent(element);
  return acc;
}, createAnimatedComponent);

exports.Spring = Spring;
exports.Keyframes = Keyframes;
exports.Transition = Transition;
exports.Trail = Trail;
exports.Controller = Controller;
exports.config = config;
exports.animated = extendedAnimated;
exports.interpolate = interpolate$1;
exports.Globals = Globals;


/***/ }),

/***/ 1426:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.1
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
__webpack_require__(2525);var f=__webpack_require__(7378),g=60103;exports.Fragment=60107;if("function"===typeof Symbol&&Symbol.for){var h=Symbol.for;g=h("react.element");exports.Fragment=h("react.fragment")}var m=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n=Object.prototype.hasOwnProperty,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,k){var b,d={},e=null,l=null;void 0!==k&&(e=""+k);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(l=a.ref);for(b in a)n.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:g,type:c,key:e,ref:l,props:d,_owner:m.current}}exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ 1535:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/** @license React v17.0.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=__webpack_require__(2525),n=60103,p=60106;exports.Fragment=60107;exports.StrictMode=60108;exports.Profiler=60114;var q=60109,r=60110,t=60112;exports.Suspense=60113;var u=60115,v=60116;
if("function"===typeof Symbol&&Symbol.for){var w=Symbol.for;n=w("react.element");p=w("react.portal");exports.Fragment=w("react.fragment");exports.StrictMode=w("react.strict_mode");exports.Profiler=w("react.profiler");q=w("react.provider");r=w("react.context");t=w("react.forward_ref");exports.Suspense=w("react.suspense");u=w("react.memo");v=w("react.lazy")}var x="function"===typeof Symbol&&Symbol.iterator;
function y(a){if(null===a||"object"!==typeof a)return null;a=x&&a[x]||a["@@iterator"];return"function"===typeof a?a:null}function z(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return"Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},B={};function C(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}C.prototype.isReactComponent={};C.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(z(85));this.updater.enqueueSetState(this,a,b,"setState")};C.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};
function D(){}D.prototype=C.prototype;function E(a,b,c){this.props=a;this.context=b;this.refs=B;this.updater=c||A}var F=E.prototype=new D;F.constructor=E;l(F,C.prototype);F.isPureReactComponent=!0;var G={current:null},H=Object.prototype.hasOwnProperty,I={key:!0,ref:!0,__self:!0,__source:!0};
function J(a,b,c){var e,d={},k=null,h=null;if(null!=b)for(e in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)H.call(b,e)&&!I.hasOwnProperty(e)&&(d[e]=b[e]);var g=arguments.length-2;if(1===g)d.children=c;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];d.children=f}if(a&&a.defaultProps)for(e in g=a.defaultProps,g)void 0===d[e]&&(d[e]=g[e]);return{$$typeof:n,type:a,key:k,ref:h,props:d,_owner:G.current}}
function K(a,b){return{$$typeof:n,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function L(a){return"object"===typeof a&&null!==a&&a.$$typeof===n}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var M=/\/+/g;function N(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function O(a,b,c,e,d){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case n:case p:h=!0}}if(h)return h=a,d=d(h),a=""===e?"."+N(h,0):e,Array.isArray(d)?(c="",null!=a&&(c=a.replace(M,"$&/")+"/"),O(d,b,c,"",function(a){return a})):null!=d&&(L(d)&&(d=K(d,c+(!d.key||h&&h.key===d.key?"":(""+d.key).replace(M,"$&/")+"/")+a)),b.push(d)),1;h=0;e=""===e?".":e+":";if(Array.isArray(a))for(var g=
0;g<a.length;g++){k=a[g];var f=e+N(k,g);h+=O(k,b,c,f,d)}else if(f=y(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=e+N(k,g++),h+=O(k,b,c,f,d);else if("object"===k)throw b=""+a,Error(z(31,"[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b));return h}function P(a,b,c){if(null==a)return a;var e=[],d=0;O(a,e,"","",function(a){return b.call(c,a,d++)});return e}
function Q(a){if(-1===a._status){var b=a._result;b=b();a._status=0;a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)})}if(1===a._status)return a._result;throw a._result;}var R={current:null};function S(){var a=R.current;if(null===a)throw Error(z(321));return a}var T={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:G,IsSomeRendererActing:{current:!1},assign:l};
exports.Children={map:P,forEach:function(a,b,c){P(a,function(){b.apply(this,arguments)},c)},count:function(a){var b=0;P(a,function(){b++});return b},toArray:function(a){return P(a,function(a){return a})||[]},only:function(a){if(!L(a))throw Error(z(143));return a}};exports.Component=C;exports.PureComponent=E;exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T;
exports.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(z(267,a));var e=l({},a.props),d=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=G.current);void 0!==b.key&&(d=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)H.call(b,f)&&!I.hasOwnProperty(f)&&(e[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)e.children=c;else if(1<f){g=Array(f);for(var m=0;m<f;m++)g[m]=arguments[m+2];e.children=g}return{$$typeof:n,type:a.type,
key:d,ref:k,props:e,_owner:h}};exports.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:r,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:q,_context:a};return a.Consumer=a};exports.createElement=J;exports.createFactory=function(a){var b=J.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};exports.forwardRef=function(a){return{$$typeof:t,render:a}};exports.isValidElement=L;
exports.lazy=function(a){return{$$typeof:v,_payload:{_status:-1,_result:a},_init:Q}};exports.memo=function(a,b){return{$$typeof:u,type:a,compare:void 0===b?null:b}};exports.useCallback=function(a,b){return S().useCallback(a,b)};exports.useContext=function(a,b){return S().useContext(a,b)};exports.useDebugValue=function(){};exports.useEffect=function(a,b){return S().useEffect(a,b)};exports.useImperativeHandle=function(a,b,c){return S().useImperativeHandle(a,b,c)};
exports.useLayoutEffect=function(a,b){return S().useLayoutEffect(a,b)};exports.useMemo=function(a,b){return S().useMemo(a,b)};exports.useReducer=function(a,b,c){return S().useReducer(a,b,c)};exports.useRef=function(a){return S().useRef(a)};exports.useState=function(a){return S().useState(a)};exports.version="17.0.1";


/***/ }),

/***/ 7378:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(1535);
} else {}


/***/ }),

/***/ 4246:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(1426);
} else {}


/***/ }),

/***/ 3323:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v0.20.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f,g,h,k;if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}
if("undefined"===typeof window||"function"!==typeof MessageChannel){var t=null,u=null,w=function(){if(null!==t)try{var a=exports.unstable_now();t(!0,a);t=null}catch(b){throw setTimeout(w,0),b;}};f=function(a){null!==t?setTimeout(f,0,a):(t=a,setTimeout(w,0))};g=function(a,b){u=setTimeout(a,b)};h=function(){clearTimeout(u)};exports.unstable_shouldYield=function(){return!1};k=exports.unstable_forceFrameRate=function(){}}else{var x=window.setTimeout,y=window.clearTimeout;if("undefined"!==typeof console){var z=
window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills");"function"!==typeof z&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var A=!1,B=null,C=-1,D=5,E=0;exports.unstable_shouldYield=function(){return exports.unstable_now()>=
E};k=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<a?Math.floor(1E3/a):5};var F=new MessageChannel,G=F.port2;F.port1.onmessage=function(){if(null!==B){var a=exports.unstable_now();E=a+D;try{B(!0,a)?G.postMessage(null):(A=!1,B=null)}catch(b){throw G.postMessage(null),b;}}else A=!1};f=function(a){B=a;A||(A=!0,G.postMessage(null))};g=function(a,b){C=
x(function(){a(exports.unstable_now())},b)};h=function(){y(C);C=-1}}function H(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<I(e,b))a[d]=b,a[c]=e,c=d;else break a}}function J(a){a=a[0];return void 0===a?null:a}
function K(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>I(n,c))void 0!==r&&0>I(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>I(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function I(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var L=[],M=[],N=1,O=null,P=3,Q=!1,R=!1,S=!1;
function T(a){for(var b=J(M);null!==b;){if(null===b.callback)K(M);else if(b.startTime<=a)K(M),b.sortIndex=b.expirationTime,H(L,b);else break;b=J(M)}}function U(a){S=!1;T(a);if(!R)if(null!==J(L))R=!0,f(V);else{var b=J(M);null!==b&&g(U,b.startTime-a)}}
function V(a,b){R=!1;S&&(S=!1,h());Q=!0;var c=P;try{T(b);for(O=J(L);null!==O&&(!(O.expirationTime>b)||a&&!exports.unstable_shouldYield());){var d=O.callback;if("function"===typeof d){O.callback=null;P=O.priorityLevel;var e=d(O.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?O.callback=e:O===J(L)&&K(L);T(b)}else K(L);O=J(L)}if(null!==O)var m=!0;else{var n=J(M);null!==n&&g(U,n.startTime-b);m=!1}return m}finally{O=null,P=c,Q=!1}}var W=k;exports.unstable_IdlePriority=5;
exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){R||Q||(R=!0,f(V))};exports.unstable_getCurrentPriorityLevel=function(){return P};exports.unstable_getFirstCallbackNode=function(){return J(L)};
exports.unstable_next=function(a){switch(P){case 1:case 2:case 3:var b=3;break;default:b=P}var c=P;P=b;try{return a()}finally{P=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=W;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=P;P=a;try{return b()}finally{P=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:N++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,H(M,a),null===J(L)&&a===J(M)&&(S?h():S=!0,g(U,c-d))):(a.sortIndex=e,H(L,a),R||Q||(R=!0,f(V)));return a};
exports.unstable_wrapCallback=function(a){var b=P;return function(){var c=P;P=b;try{return a.apply(this,arguments)}finally{P=c}}};


/***/ }),

/***/ 1102:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(3323);
} else {}


/***/ }),

/***/ 4445:
/***/ ((module) => {

//

module.exports = function shallowEqual(objA, objB, compare, compareContext) {
  var ret = compare ? compare.call(compareContext, objA, objB) : void 0;

  if (ret !== void 0) {
    return !!ret;
  }

  if (objA === objB) {
    return true;
  }

  if (typeof objA !== "object" || !objA || typeof objB !== "object" || !objB) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);

  // Test for A's keys different from B.
  for (var idx = 0; idx < keysA.length; idx++) {
    var key = keysA[idx];

    if (!bHasOwnProperty(key)) {
      return false;
    }

    var valueA = objA[key];
    var valueB = objB[key];

    ret = compare ? compare.call(compareContext, valueA, valueB, key) : void 0;

    if (ret === false || (ret === void 0 && valueA !== valueB)) {
      return false;
    }
  }

  return true;
};


/***/ }),

/***/ 3732:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => /* binding */ server_Static
});

// EXTERNAL MODULE: ../node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4246);
// EXTERNAL MODULE: ../node_modules/@hot-loader/react-dom/server.js
var server = __webpack_require__(4118);
;// CONCATENATED MODULE: ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}
// EXTERNAL MODULE: ../node_modules/react/index.js
var react = __webpack_require__(7378);
// EXTERNAL MODULE: ../node_modules/prop-types/index.js
var prop_types = __webpack_require__(3615);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(9603);
;// CONCATENATED MODULE: ../node_modules/resolve-pathname/esm/resolve-pathname.js
function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

/* harmony default export */ const resolve_pathname = (resolvePathname);

;// CONCATENATED MODULE: ../node_modules/value-equal/esm/value-equal.js
function value_equal_valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function value_equal_valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return value_equal_valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = value_equal_valueOf(a);
    var bValue = value_equal_valueOf(b);

    if (aValue !== a || bValue !== b) return value_equal_valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return value_equal_valueEqual(a[key], b[key]);
    });
  }

  return false;
}

/* harmony default export */ const value_equal = (value_equal_valueEqual);

;// CONCATENATED MODULE: ../node_modules/react-router/node_modules/history/esm/history.js






function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = (0,esm_extends.default)({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && value_equal(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     false ? 0 : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           false ? 0 : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? 0 : invariant(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     false ? 0 : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? 0 : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? 0 : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var HashChangeEvent$1 = 'hashchange';
var HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: stripLeadingSlash,
    decodePath: addLeadingSlash
  },
  slash: {
    encodePath: addLeadingSlash,
    decodePath: addLeadingSlash
  }
};

function stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function pushHashPath(path) {
  window.location.hash = path;
}

function replaceHashPath(path) {
  window.location.replace(stripHash(window.location.href) + '#' + path);
}

function createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  false ? 0 : invariant(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(getHashPath());
     false ? 0 : void 0;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + createPath(location));
  }

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         false ? 0 : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     false ? 0 : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = createTransitionManager();

  function setState(nextState) {
    (0,esm_extends.default)(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? createLocation(entry, undefined, createKey()) : createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = createPath;

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}



;// CONCATENATED MODULE: ../node_modules/mini-create-react-context/dist/esm/index.js





var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

function getUniqueId() {
  var key = '__global_unique_id__';
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
}

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + getUniqueId() + '__';

  var Provider = /*#__PURE__*/function (_Component) {
    _inheritsLoose(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          if (false) {}

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = (prop_types_default()).object.isRequired, _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_Component2) {
    _inheritsLoose(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = (prop_types_default()).object, _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = react.createContext || createReactContext;

/* harmony default export */ const esm = (index);

;// CONCATENATED MODULE: ../node_modules/tiny-invariant/dist/tiny-invariant.esm.js
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function tiny_invariant_esm_invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ''));
}

/* harmony default export */ const tiny_invariant_esm = (tiny_invariant_esm_invariant);

// EXTERNAL MODULE: ../node_modules/react-router/node_modules/path-to-regexp/index.js
var path_to_regexp = __webpack_require__(4039);
var path_to_regexp_default = /*#__PURE__*/__webpack_require__.n(path_to_regexp);
// EXTERNAL MODULE: ../node_modules/react-is/index.js
var react_is = __webpack_require__(9185);
// EXTERNAL MODULE: ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(120);
// EXTERNAL MODULE: ../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js
var hoist_non_react_statics_cjs = __webpack_require__(5839);
var hoist_non_react_statics_cjs_default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics_cjs);
;// CONCATENATED MODULE: ../node_modules/react-router/esm/react-router.js













// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = esm();
  context.displayName = name;
  return context;
};

var historyContext =
/*#__PURE__*/
createNamedContext("Router-History");

// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext$1 = function createNamedContext(name) {
  var context = esm();
  context.displayName = name;
  return context;
};

var context =
/*#__PURE__*/
createNamedContext$1("Router");

/**
 * The public API for putting history on context.
 */

var Router =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location: location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  };

  _proto.render = function render() {
    return react.createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, react.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}(react.Component);

if (false) {}

/**
 * The public API for a <Router> that stores location in memory.
 */

var MemoryRouter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(MemoryRouter, _React$Component);

  function MemoryRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createMemoryHistory(_this.props);
    return _this;
  }

  var _proto = MemoryRouter.prototype;

  _proto.render = function render() {
    return react.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return MemoryRouter;
}(react.Component);

if (false) {}

var Lifecycle =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(react.Component);

/**
 * The public API for prompting the user before navigating away from a screen.
 */

function Prompt(_ref) {
  var message = _ref.message,
      _ref$when = _ref.when,
      when = _ref$when === void 0 ? true : _ref$when;
  return React.createElement(context.Consumer, null, function (context) {
    !context ?  false ? 0 : invariant(false) : void 0;
    if (!when || context.staticContext) return null;
    var method = context.history.block;
    return React.createElement(Lifecycle, {
      onMount: function onMount(self) {
        self.release = method(message);
      },
      onUpdate: function onUpdate(self, prevProps) {
        if (prevProps.message !== message) {
          self.release();
          self.release = method(message);
        }
      },
      onUnmount: function onUnmount(self) {
        self.release();
      },
      message: message
    });
  });
}

if (false) { var messageType; }

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = path_to_regexp_default().compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return react.createElement(context.Consumer, null, function (context) {
    !context ?  false ? 0 : tiny_invariant_esm(false) : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = createLocation(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : (0,esm_extends.default)({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return react.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = createLocation(prevProps.to);

        if (!locationsAreEqual(prevLocation, (0,esm_extends.default)({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

if (false) {}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = path_to_regexp_default()(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}

function isEmptyChildren(children) {
  return React.Children.count(children) === 0;
}

function evalChildrenDev(children, props, path) {
  var value = children(props);
   false ? 0 : void 0;
  return value || null;
}
/**
 * The public API for matching a single path and rendering.
 */


var Route =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return react.createElement(context.Consumer, null, function (context$1) {
      !context$1 ?  false ? 0 : tiny_invariant_esm(false) : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = (0,esm_extends.default)({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && children.length === 0) {
        children = null;
      }

      return react.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  false ? 0 : children(props) : children : component ? react.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  false ? 0 : children(props) : null);
    });
  };

  return Route;
}(react.Component);

if (false) {}

function react_router_addLeadingSlash(path) {
  return path.charAt(0) === "/" ? path : "/" + path;
}

function addBasename(basename, location) {
  if (!basename) return location;
  return (0,esm_extends.default)({}, location, {
    pathname: react_router_addLeadingSlash(basename) + location.pathname
  });
}

function react_router_stripBasename(basename, location) {
  if (!basename) return location;
  var base = react_router_addLeadingSlash(basename);
  if (location.pathname.indexOf(base) !== 0) return location;
  return (0,esm_extends.default)({}, location, {
    pathname: location.pathname.substr(base.length)
  });
}

function createURL(location) {
  return typeof location === "string" ? location : createPath(location);
}

function staticHandler(methodName) {
  return function () {
      false ? 0 : tiny_invariant_esm(false) ;
  };
}

function noop() {}
/**
 * The public top-level API for a "static" <Router>, so-called because it
 * can't actually change the current location. Instead, it just records
 * location changes in a context object. Useful mainly in testing and
 * server-rendering scenarios.
 */


var StaticRouter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(StaticRouter, _React$Component);

  function StaticRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.handlePush = function (location) {
      return _this.navigateTo(location, "PUSH");
    };

    _this.handleReplace = function (location) {
      return _this.navigateTo(location, "REPLACE");
    };

    _this.handleListen = function () {
      return noop;
    };

    _this.handleBlock = function () {
      return noop;
    };

    return _this;
  }

  var _proto = StaticRouter.prototype;

  _proto.navigateTo = function navigateTo(location, action) {
    var _this$props = this.props,
        _this$props$basename = _this$props.basename,
        basename = _this$props$basename === void 0 ? "" : _this$props$basename,
        _this$props$context = _this$props.context,
        context = _this$props$context === void 0 ? {} : _this$props$context;
    context.action = action;
    context.location = addBasename(basename, createLocation(location));
    context.url = createURL(context.location);
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        _this$props2$basename = _this$props2.basename,
        basename = _this$props2$basename === void 0 ? "" : _this$props2$basename,
        _this$props2$context = _this$props2.context,
        context = _this$props2$context === void 0 ? {} : _this$props2$context,
        _this$props2$location = _this$props2.location,
        location = _this$props2$location === void 0 ? "/" : _this$props2$location,
        rest = (0,objectWithoutPropertiesLoose.default)(_this$props2, ["basename", "context", "location"]);

    var history = {
      createHref: function createHref(path) {
        return react_router_addLeadingSlash(basename + createURL(path));
      },
      action: "POP",
      location: react_router_stripBasename(basename, createLocation(location)),
      push: this.handlePush,
      replace: this.handleReplace,
      go: staticHandler("go"),
      goBack: staticHandler("goBack"),
      goForward: staticHandler("goForward"),
      listen: this.handleListen,
      block: this.handleBlock
    };
    return react.createElement(Router, (0,esm_extends.default)({}, rest, {
      history: history,
      staticContext: context
    }));
  };

  return StaticRouter;
}(react.Component);

if (false) {}

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return react.createElement(context.Consumer, null, function (context) {
      !context ?  false ? 0 : tiny_invariant_esm(false) : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      react.Children.forEach(_this.props.children, function (child) {
        if (match == null && react.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, (0,esm_extends.default)({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? react.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(react.Component);

if (false) {}

/**
 * A public higher-order component to access the imperative API
 */

function withRouter(Component) {
  var displayName = "withRouter(" + (Component.displayName || Component.name) + ")";

  var C = function C(props) {
    var wrappedComponentRef = props.wrappedComponentRef,
        remainingProps = _objectWithoutPropertiesLoose(props, ["wrappedComponentRef"]);

    return React.createElement(context.Consumer, null, function (context) {
      !context ?  false ? 0 : invariant(false) : void 0;
      return React.createElement(Component, _extends({}, remainingProps, context, {
        ref: wrappedComponentRef
      }));
    });
  };

  C.displayName = displayName;
  C.WrappedComponent = Component;

  if (false) {}

  return hoistStatics(C, Component);
}

var useContext = react.useContext;
function useHistory() {
  if (false) {}

  return useContext(historyContext);
}
function useLocation() {
  if (false) {}

  return useContext(context).location;
}
function useParams() {
  if (false) {}

  var match = useContext(context).match;
  return match ? match.params : {};
}
function useRouteMatch(path) {
  if (false) {}

  var location = useLocation();
  var match = useContext(context).match;
  return path ? matchPath(location.pathname, path) : match;
}

if (false) { var secondaryBuildName, initialBuildName, buildNames, key, react_router_global; }


//# sourceMappingURL=react-router.js.map

;// CONCATENATED MODULE: ./utils/flattenContent.ts
/**
 * Deep flatten the given `tree`s child nodes
 *
 * @example
 *  # output
 *   ```
 *     [
 *         {
 *             "path": "src/content/sample/sample.md",
 *             "name": "sample.md",
 *             "size": 10641,
 *             "extension": ".md",
 *             "type": "file",
 *             "url": "/sample/",
 *             "anchors": [
 *             {
 *                 "title": "The Name",
 *                 "id": "the-name",
 *                 "level": 2
 *             }
 *             ],
 *             "title": "sample-title",
 *             "source": "https://raw.githubusercontent.com/**",
 *             "edit": "https://github.com/**",
 *             "repo": "https://github.com/**"
 *         },
 *     ]
 *   ```
 */
var flattenContent = function (tree) {
    if (tree.children) {
        var flattenedTree = tree.children.reduce(function (previousValue, currentValue) {
            var concatedValue = previousValue.concat(Array.isArray(currentValue.children)
                ? flattenContent(currentValue)
                : currentValue);
            return concatedValue;
        }, []);
        return flattenedTree;
    }
    else
        return [];
};

;// CONCATENATED MODULE: ./utils/findInContent.ts

/**
 * Find an item within the given `tree`
 */
var findInContent = function (tree, test) { return flattenContent(tree).find(test); };

;// CONCATENATED MODULE: ./utils/getPageTitle.ts

/**
 * Retrieve the page title from the given `tree` based on the given `path`
 */
var getPageTitle = function (tree, path) {
    var page = findInContent(tree, function (item) { return item.url === path; });
    var title;
    if (!page) {
        if (!path.endsWith("/"))
            path += "/";
        title = path.replace(/.*\/(.+)\//g, "$1");
        title = title.replace(/-/g, " ");
    }
    else if (path === "/") {
        title = page.title;
    }
    else
        title = "" + page.title;
    return title;
};

;// CONCATENATED MODULE: ./utils/enforce.ts
/**
 * As github pages uses trailing slash, we need to provide it
 * to canonicals for consistency between canonical href and
 * final url served by github pages.
 */
var enforceTrailingSlash = function (url) {
    return url.replace(/\/?$/, "/");
};

// EXTERNAL MODULE: ../public/assets/images/favicon/favicon.ico
var favicon = __webpack_require__(4566);
// EXTERNAL MODULE: ../public/assets/images/logo/logo-on-white-bg.svg
var logo_on_white_bg = __webpack_require__(502);
// EXTERNAL MODULE: ../public/assets/images/icons/icon-pwa-512x512.png
var icon_pwa_512x512 = __webpack_require__(3476);
;// CONCATENATED MODULE: ./components/markup/Head.tsx






var Head = function (_a) {
    var locals = _a.locals;
    var assets = locals.webpackStats.compilation.assets;
    var title = getPageTitle(locals.content, locals.path);
    var description = "arma73 github portfolio";
    return ((0,jsx_runtime.jsxs)("head", { children: [(0,jsx_runtime.jsx)("meta", { charSet: "utf-8" }, void 0),
            (0,jsx_runtime.jsx)("meta", { name: "theme-color", content: "#3d1163" }, void 0),
            (0,jsx_runtime.jsx)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0),
            (0,jsx_runtime.jsx)("title", { children: title }, void 0),
            (0,jsx_runtime.jsx)("meta", { name: "description", content: description }, void 0),
            (0,jsx_runtime.jsx)("meta", { property: "og:site_name", content: "arma73" }, void 0),
            (0,jsx_runtime.jsx)("meta", { property: "og:type", content: "website" }, void 0),
            (0,jsx_runtime.jsx)("meta", { property: "og:title", content: title }, void 0),
            (0,jsx_runtime.jsx)("meta", { property: "og:description", name: "description", content: description }, void 0),
            (0,jsx_runtime.jsx)("meta", { property: "og:image", content: "https://arma73.github.io" + icon_pwa_512x512 }, void 0),
            (0,jsx_runtime.jsx)("meta", { property: "twitter:card", content: "summary" }, void 0),
            (0,jsx_runtime.jsx)("meta", { property: "twitter:site", content: "@arma73" }, void 0),
            (0,jsx_runtime.jsx)("meta", { property: "twitter:creator", content: "@arma73" }, void 0),
            (0,jsx_runtime.jsx)("meta", { property: "twitter:domain", content: "https://arma73.github.io/" }, void 0),
            (0,jsx_runtime.jsx)("link", { rel: "icon", type: "image/x-icon", href: favicon }, void 0),
            Object.keys(assets)
                .filter(function (asset) { return /\.css$/.test(asset); })
                .map(function (path) { return ((0,jsx_runtime.jsx)("link", { rel: "stylesheet", href: "/" + path }, path)); }),
            (0,jsx_runtime.jsx)("link", { rel: "manifest", href: "/manifest.json" }, void 0),
            (0,jsx_runtime.jsx)("link", { rel: "canonical", href: "https://arma73.github.io" + enforceTrailingSlash(locals.path) }, void 0),
            (0,jsx_runtime.jsx)("meta", { name: "mobile-web-app-capable", content: "yes" }, void 0),
            (0,jsx_runtime.jsx)("link", { rel: "icon", sizes: "192x192", href: "/icon_192x192.png" }, void 0),
            (0,jsx_runtime.jsx)("link", { rel: "icon", sizes: "512x512", href: "/icon_512x512.png" }, void 0),
            (0,jsx_runtime.jsx)("meta", { name: "apple-mobile-web-app-capable", content: "yes" }, void 0),
            (0,jsx_runtime.jsx)("meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }, void 0),
            (0,jsx_runtime.jsx)("meta", { name: "apple-mobile-web-app-title", content: "arma73" }, void 0),
            (0,jsx_runtime.jsx)("link", { rel: "apple-touch-icon", sizes: "180x180", href: "/icon_180x180.png" }, void 0),
            (0,jsx_runtime.jsx)("link", { rel: "mask-icon", href: logo_on_white_bg, color: "#3d1163" }, void 0),
            (0,jsx_runtime.jsx)("meta", { name: "msapplication-TileImage", content: "/icon_150x150.png" }, void 0),
            (0,jsx_runtime.jsx)("meta", { name: "msapplication-TileColor", content: "#3d1163" }, void 0)] }, void 0));
};
/* harmony default export */ const markup_Head = (Head);

;// CONCATENATED MODULE: ../node_modules/@mdx-js/react/dist/esm.js


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function dist_esm_extends() {
  dist_esm_extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return dist_esm_extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function esm_objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = esm_objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, dist_esm_extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react.createElement(react.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return React.createElement.apply(null, createElementArgArray);
  }

  return React.createElement.apply(null, args);
}



;// CONCATENATED MODULE: ./settings/path.routes.ts
var PUBLIC_URL = "/" || 0;
// eslint-disable-next-line @typescript-eslint/no-extraneous-class
var RoutePage = /** @class */ (function () {
    function RoutePage() {
    }
    RoutePage.MAIN = PUBLIC_URL;
    RoutePage.ARTICLES = PUBLIC_URL + "articles/";
    RoutePage.ABOUTME = PUBLIC_URL + "aboutme/";
    RoutePage.EXPERIENCE = PUBLIC_URL + "experience/";
    return RoutePage;
}());


;// CONCATENATED MODULE: ./interfaces/content.interface.ts
var ContentExtension;
(function (ContentExtension) {
    ContentExtension["MD"] = ".md";
    ContentExtension["MDX"] = ".mdx";
})(ContentExtension || (ContentExtension = {}));
var StructureContentType;
(function (StructureContentType) {
    StructureContentType["DIRECTORY"] = "directory";
    StructureContentType["FILE"] = "file";
})(StructureContentType || (StructureContentType = {}));

;// CONCATENATED MODULE: ./utils/extract.ts


/**
 * Get top-level sections
 *
 * @return {array}       - Immediate children of the given `tree` that are directories
 */
var extractSections = function (tree) {
    return tree.children.filter(function (item) { return item.type === StructureContentType.DIRECTORY; });
};
/**
 * Find content with matching location pathname
 */
var extractCurrentSection = function (sections, pathname) {
    return sections.find(function (_a) {
        var url = _a.url;
        return pathname.startsWith(url);
    });
};
/**
 * Get all markdown pages
 */
var extractPages = function (tree) {
    return flattenContent(tree).filter(function (item) {
        return item.extension === ContentExtension.MD ||
            item.extension === ContentExtension.MDX;
    });
};
var extractHeadArticles = function (listArticles) {
    return listArticles.map(function (_a) {
        var desc = _a.desc, title = _a.title, url = _a.url;
        return ({
            desc: desc,
            title: title,
            url: url,
        });
    });
};

;// CONCATENATED MODULE: ./utils/_strip.ts
/**
 * Strip any non-applicable properties
 */
var _strip = function (items) {
    var anchorTitleIndex = items.findIndex(function (item) { return item.name.toLowerCase() === "index.md"; });
    if (anchorTitleIndex !== -1) {
        // changes the location of the file index.md to the starting position in the array items
        items.unshift(items[anchorTitleIndex]);
        items.splice(anchorTitleIndex + 1, 1);
    }
    return items.map(function (_a) {
        var title = _a.title, desc = _a.desc, name = _a.name, url = _a.url, group = _a.group, sort = _a.sort, anchors = _a.anchors, children = _a.children;
        return ({
            "title": title || name,
            "children": children ? _strip(children) : [],
            group: group,
            desc: desc,
            url: url,
            sort: sort,
            anchors: anchors,
        });
    });
};

;// CONCATENATED MODULE: ./settings/_content.json
const _content_namespaceObject = JSON.parse("{\"path\":\"./src/content\",\"name\":\"content\",\"children\":[{\"path\":\"src\\\\content\\\\articles\",\"name\":\"articles\",\"children\":[{\"path\":\"src/content/articles/custom-route.md\",\"name\":\"custom-route.md\",\"size\":8036,\"extension\":\".md\",\"type\":\"file\",\"url\":\"/articles/custom-route/\",\"anchors\":[{\"title\":\"Determination of volume\",\"id\":\"determination-of-volume\",\"level\":2}],\"title\":\"Create a custom route\",\"desc\":\"Demystifying the React Router Concept\"}],\"size\":8036,\"type\":\"directory\",\"url\":\"/articles/\"},{\"path\":\"src/content/index.md\",\"name\":\"index.md\",\"size\":32,\"extension\":\".md\",\"type\":\"file\",\"url\":\"/\",\"anchors\":[],\"title\":\"arma73\",\"sort\":-1}],\"size\":8068,\"type\":\"directory\",\"url\":\"/src/content/\"}");
;// CONCATENATED MODULE: ./hoc/withContent.tsx
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};





var withContent = function (WrappedComponent) {
    return function ProvideContent(props) {
        var location = useLocation();
        var sections = extractSections(_content_namespaceObject);
        var currentSection = extractCurrentSection(sections, location.pathname);
        var pages = extractPages(_content_namespaceObject);
        var articlItems = currentSection
            ? currentSection.children
            : _content_namespaceObject.children.filter(function (item) { return item.type !== "directory" && item.url !== "/"; });
        var sidebarPages = [];
        var headArticles = [];
        if (articlItems) {
            sidebarPages = _strip(articlItems);
            headArticles = extractHeadArticles(sidebarPages);
        }
        return ((0,jsx_runtime.jsx)(WrappedComponent, __assign({}, props, { sections: sections, currentSection: currentSection, pages: pages, location: location, sidebarPages: sidebarPages, headArticles: headArticles }), void 0));
    };
};
/* harmony default export */ const hoc_withContent = (withContent);

;// CONCATENATED MODULE: ../node_modules/clsx/dist/clsx.m.js
function toVal(mix) {
	var k, y, str='';

	if (typeof mix === 'string' || typeof mix === 'number') {
		str += mix;
	} else if (typeof mix === 'object') {
		if (Array.isArray(mix)) {
			for (k=0; k < mix.length; k++) {
				if (mix[k]) {
					if (y = toVal(mix[k])) {
						str && (str += ' ');
						str += y;
					}
				}
			}
		} else {
			for (k in mix) {
				if (mix[k]) {
					str && (str += ' ');
					str += k;
				}
			}
		}
	}

	return str;
}

/* harmony default export */ function clsx_m() {
	var i=0, tmp, x, str='';
	while (i < arguments.length) {
		if (tmp = arguments[i++]) {
			if (x = toVal(tmp)) {
				str && (str += ' ');
				str += x
			}
		}
	}
	return str;
}

;// CONCATENATED MODULE: ./components/container/Container.tsx
var Container_assign = (undefined && undefined.__assign) || function () {
    Container_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Container_assign.apply(this, arguments);
};



var Container = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b;
    return ((0,jsx_runtime.jsx)("main", Container_assign({ className: clsx_m("container", className) }, { children: children }), void 0));
};
/* harmony default export */ const container_Container = (Container);

;// CONCATENATED MODULE: ./components/container/index.ts


;// CONCATENATED MODULE: ./components/markdown/Markdown.tsx
var Markdown_assign = (undefined && undefined.__assign) || function () {
    Markdown_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Markdown_assign.apply(this, arguments);
};



var Markdown = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.title, title = _c === void 0 ? "" : _c, pageContent = _a.pageContent;
    var _d = (0,react.useState)(null), render = _d[0], setRender = _d[1];
    (0,react.useEffect)(function () {
        var renderElement = ((0,jsx_runtime.jsx)("div", { dangerouslySetInnerHTML: {
                "__html": pageContent || "",
            } }, void 0));
        setRender(renderElement);
    }, [pageContent]);
    return ((0,jsx_runtime.jsxs)("div", Markdown_assign({ className: "markdown" }, { children: [(0,jsx_runtime.jsx)("h1", Markdown_assign({ className: "md--title" }, { children: title }), void 0), render, children] }), void 0));
};
/* harmony default export */ const markdown_Markdown = (Markdown);

;// CONCATENATED MODULE: ./components/markdown/index.ts


;// CONCATENATED MODULE: ./components/placeholder/Placeholder.tsx
var Placeholder_assign = (undefined && undefined.__assign) || function () {
    Placeholder_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Placeholder_assign.apply(this, arguments);
};

var Placeholder = function () { return (_jsxs("div", Placeholder_assign({ className: "placeholder" }, { children: [_jsx("p", { children: "\u00A0" }, void 0),
        _jsx("p", { children: "\u00A0" }, void 0),
        _jsx("p", { children: "\u00A0" }, void 0)] }), void 0)); };
/* harmony default export */ const placeholder_Placeholder = ((/* unused pure expression or super */ null && (Placeholder)));

;// CONCATENATED MODULE: ./components/placeholder/PlaceholderString.ts
var PlaceholderString = function () { return "\n  <div class=\"placeholder\">\n    <p class=\"placeholder__medium\">&nbsp;</p>\n    <p class=\"placeholder__large\">&nbsp;</p>\n    <p class=\"placeholder__small\">&nbsp;</p>\n    <h2 class=\"placeholder__xsmall\">&nbsp;</h2>\n    <p class=\"placeholder__large\">&nbsp;</p>\n    <p class=\"placeholder__small\">&nbsp;</p>\n    <p class=\"placeholder__medium\">&nbsp;</p>\n    <h2 class=\"placeholder__small\">&nbsp;</h2>\n    <p class=\"placeholder__large\">&nbsp;</p>\n    <p class=\"placeholder__medium\">&nbsp;</p>\n    <p class=\"placeholder__xsmall\">&nbsp;</p>\n    <h2 class=\"placeholder__xsmall\">&nbsp;</h2>\n    <p class=\"placeholder__large\">&nbsp;</p>\n    <p class=\"placeholder__small\">&nbsp;</p>\n    <p class=\"placeholder__medium\">&nbsp;</p>\n  </div>\n"; };

;// CONCATENATED MODULE: ./components/placeholder/index.ts




;// CONCATENATED MODULE: ./components/article/Article.tsx
var Article_assign = (undefined && undefined.__assign) || function () {
    Article_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Article_assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var Article = function (_a) {
    var content = _a.content, _b = _a.title, title = _b === void 0 ? "" : _b;
    var _c = (0,react.useState)(null), pageContent = _c[0], setPageContent = _c[1];
    (0,react.useEffect)(function () {
        var contentValue = null;
        if (content instanceof Promise) {
            contentValue = PlaceholderString();
        }
        setPageContent(contentValue);
    }, [content]);
    (0,react.useEffect)(function () {
        function setContent() {
            return __awaiter(this, void 0, void 0, function () {
                var contentData, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, content];
                        case 1:
                            contentData = _b.sent();
                            setPageContent(contentData.default);
                            return [3 /*break*/, 3];
                        case 2:
                            _a = _b.sent();
                            setPageContent("Error loading content.");
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        }
        if (content instanceof Promise) {
            setContent();
        }
    }, [content]);
    return ((0,jsx_runtime.jsx)("div", Article_assign({ className: "article" }, { children: (0,jsx_runtime.jsx)(markdown_Markdown, { title: title, pageContent: pageContent }, void 0) }), void 0));
};
/* harmony default export */ const article_Article = (Article);

;// CONCATENATED MODULE: ./components/article/index.ts


;// CONCATENATED MODULE: ./utils/isClient.ts
var isClient = window !== undefined && window.document !== undefined;
var isClient_canUseDOM = !!(typeof window !== "undefined" &&
    window.document &&
    window.document.createElement);

;// CONCATENATED MODULE: ./hoc/withServiceWorker.tsx
var withServiceWorker_assign = (undefined && undefined.__assign) || function () {
    withServiceWorker_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return withServiceWorker_assign.apply(this, arguments);
};



var withServiceWorker = function (WrappedComponent) {
    return function ServiceWorkerRegister(props) {
        (0,react.useEffect)(function () {
            if (isClient) {
                if (true) {
                    // only register sw.js in production
                    if ("serviceWorker" in navigator) {
                        // dynamic load sw https://developers.google.com/web/tools/workbox/modules/workbox-window
                        __webpack_require__.e(/* import() */ 706).then(__webpack_require__.bind(__webpack_require__, 7706)).then(function (_a) {
                            var Workbox = _a.Workbox;
                            var wb = new Workbox("/sw.js");
                            // listen to `waiting` event
                            wb.addEventListener("waiting", function () {
                                // log and show updateBox
                                console.log("A new service worker has installed, but it can't activate until all tabs \
                                    running the current version have been unloaded");
                            });
                            // register the service worker
                            wb.register();
                        });
                    }
                }
            }
        }, []);
        return (0,jsx_runtime.jsx)(WrappedComponent, withServiceWorker_assign({}, props), void 0);
    };
};
/* harmony default export */ const hoc_withServiceWorker = (withServiceWorker);

;// CONCATENATED MODULE: ./components/layout/Layout.tsx
var Layout_assign = (undefined && undefined.__assign) || function () {
    Layout_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Layout_assign.apply(this, arguments);
};



var Layout = function (_a) {
    var children = _a.children, className = _a.className;
    return ((0,jsx_runtime.jsx)("main", Layout_assign({ className: clsx_m("layout", className) }, { children: children }), void 0));
};
/* harmony default export */ const layout_Layout = (hoc_withServiceWorker(Layout));

;// CONCATENATED MODULE: ./components/layout/index.ts


;// CONCATENATED MODULE: ../node_modules/react-router-dom/node_modules/history/esm/history.js






function history_addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function history_stripLeadingSlash(path) {
  return path.charAt(0) === '/' ? path.substr(1) : path;
}
function history_hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function history_stripBasename(path, prefix) {
  return history_hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function history_stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function history_parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function history_createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function history_createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = history_parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = (0,esm_extends.default)({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolve_pathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function history_locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
}

function history_createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
     false ? 0 : void 0;
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
           false ? 0 : void 0;
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var history_canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function history_getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function history_supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function history_supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function history_supportsGoWithoutReloadUsingHash() {
  return window.navigator.userAgent.indexOf('Firefox') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function history_isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var history_PopStateEvent = 'popstate';
var history_HashChangeEvent = 'hashchange';

function history_getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function history_createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !history_canUseDOM ?  false ? 0 : tiny_invariant_esm(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = history_supportsHistory();
  var needsHashChangeListener = !history_supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? history_getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? history_stripTrailingSlash(history_addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
     false ? 0 : void 0;
    if (basename) path = history_stripBasename(path, basename);
    return history_createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = history_createTransitionManager();

  function setState(nextState) {
    (0,esm_extends.default)(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (history_isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(history_getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(history_getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + history_createPath(location);
  }

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = history_createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? 0 : void 0;
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = history_createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
         false ? 0 : void 0;
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(history_PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(history_HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(history_PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(history_HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var history_HashChangeEvent$1 = 'hashchange';
var history_HashPathCoders = {
  hashbang: {
    encodePath: function encodePath(path) {
      return path.charAt(0) === '!' ? path : '!/' + history_stripLeadingSlash(path);
    },
    decodePath: function decodePath(path) {
      return path.charAt(0) === '!' ? path.substr(1) : path;
    }
  },
  noslash: {
    encodePath: history_stripLeadingSlash,
    decodePath: history_addLeadingSlash
  },
  slash: {
    encodePath: history_addLeadingSlash,
    decodePath: history_addLeadingSlash
  }
};

function history_stripHash(url) {
  var hashIndex = url.indexOf('#');
  return hashIndex === -1 ? url : url.slice(0, hashIndex);
}

function history_getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var hashIndex = href.indexOf('#');
  return hashIndex === -1 ? '' : href.substring(hashIndex + 1);
}

function history_pushHashPath(path) {
  window.location.hash = path;
}

function history_replaceHashPath(path) {
  window.location.replace(history_stripHash(window.location.href) + '#' + path);
}

function history_createHashHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !history_canUseDOM ?  false ? 0 : tiny_invariant_esm(false) : void 0;
  var globalHistory = window.history;
  var canGoWithoutReload = history_supportsGoWithoutReloadUsingHash();
  var _props = props,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? history_getConfirmation : _props$getUserConfirm,
      _props$hashType = _props.hashType,
      hashType = _props$hashType === void 0 ? 'slash' : _props$hashType;
  var basename = props.basename ? history_stripTrailingSlash(history_addLeadingSlash(props.basename)) : '';
  var _HashPathCoders$hashT = history_HashPathCoders[hashType],
      encodePath = _HashPathCoders$hashT.encodePath,
      decodePath = _HashPathCoders$hashT.decodePath;

  function getDOMLocation() {
    var path = decodePath(history_getHashPath());
     false ? 0 : void 0;
    if (basename) path = history_stripBasename(path, basename);
    return history_createLocation(path);
  }

  var transitionManager = history_createTransitionManager();

  function setState(nextState) {
    (0,esm_extends.default)(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  var forceNextPop = false;
  var ignorePath = null;

  function locationsAreEqual$$1(a, b) {
    return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash;
  }

  function handleHashChange() {
    var path = history_getHashPath();
    var encodedPath = encodePath(path);

    if (path !== encodedPath) {
      // Ensure we always have a properly-encoded hash.
      history_replaceHashPath(encodedPath);
    } else {
      var location = getDOMLocation();
      var prevLocation = history.location;
      if (!forceNextPop && locationsAreEqual$$1(prevLocation, location)) return; // A hashchange doesn't always == location change.

      if (ignorePath === history_createPath(location)) return; // Ignore this change; we already setState in push/replace.

      ignorePath = null;
      handlePop(location);
    }
  }

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of paths we've seen in sessionStorage.
    // Instead, we just default to 0 for paths we don't know.

    var toIndex = allPaths.lastIndexOf(history_createPath(toLocation));
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allPaths.lastIndexOf(history_createPath(fromLocation));
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  } // Ensure the hash is encoded properly before doing anything else.


  var path = history_getHashPath();
  var encodedPath = encodePath(path);
  if (path !== encodedPath) history_replaceHashPath(encodedPath);
  var initialLocation = getDOMLocation();
  var allPaths = [history_createPath(initialLocation)]; // Public interface

  function createHref(location) {
    var baseTag = document.querySelector('base');
    var href = '';

    if (baseTag && baseTag.getAttribute('href')) {
      href = history_stripHash(window.location.href);
    }

    return href + '#' + encodePath(basename + history_createPath(location));
  }

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = history_createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = history_createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = history_getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a PUSH, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        history_pushHashPath(encodedPath);
        var prevIndex = allPaths.lastIndexOf(history_createPath(history.location));
        var nextPaths = allPaths.slice(0, prevIndex + 1);
        nextPaths.push(path);
        allPaths = nextPaths;
        setState({
          action: action,
          location: location
        });
      } else {
         false ? 0 : void 0;
        setState();
      }
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = history_createLocation(path, undefined, undefined, history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var path = history_createPath(location);
      var encodedPath = encodePath(basename + path);
      var hashChanged = history_getHashPath() !== encodedPath;

      if (hashChanged) {
        // We cannot tell if a hashchange was caused by a REPLACE, so we'd
        // rather setState here and ignore the hashchange. The caveat here
        // is that other hash histories in the page will consider it a POP.
        ignorePath = path;
        history_replaceHashPath(encodedPath);
      }

      var prevIndex = allPaths.indexOf(history_createPath(history.location));
      if (prevIndex !== -1) allPaths[prevIndex] = path;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
     false ? 0 : void 0;
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(history_HashChangeEvent$1, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(history_HashChangeEvent$1, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

function history_clamp(n, lowerBound, upperBound) {
  return Math.min(Math.max(n, lowerBound), upperBound);
}
/**
 * Creates a history object that stores locations in memory.
 */


function history_createMemoryHistory(props) {
  if (props === void 0) {
    props = {};
  }

  var _props = props,
      getUserConfirmation = _props.getUserConfirmation,
      _props$initialEntries = _props.initialEntries,
      initialEntries = _props$initialEntries === void 0 ? ['/'] : _props$initialEntries,
      _props$initialIndex = _props.initialIndex,
      initialIndex = _props$initialIndex === void 0 ? 0 : _props$initialIndex,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var transitionManager = history_createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = history.entries.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var index = history_clamp(initialIndex, 0, initialEntries.length - 1);
  var entries = initialEntries.map(function (entry) {
    return typeof entry === 'string' ? history_createLocation(entry, undefined, createKey()) : history_createLocation(entry, undefined, entry.key || createKey());
  }); // Public interface

  var createHref = history_createPath;

  function push(path, state) {
     false ? 0 : void 0;
    var action = 'PUSH';
    var location = history_createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var prevIndex = history.index;
      var nextIndex = prevIndex + 1;
      var nextEntries = history.entries.slice(0);

      if (nextEntries.length > nextIndex) {
        nextEntries.splice(nextIndex, nextEntries.length - nextIndex, location);
      } else {
        nextEntries.push(location);
      }

      setState({
        action: action,
        location: location,
        index: nextIndex,
        entries: nextEntries
      });
    });
  }

  function replace(path, state) {
     false ? 0 : void 0;
    var action = 'REPLACE';
    var location = history_createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      history.entries[history.index] = location;
      setState({
        action: action,
        location: location
      });
    });
  }

  function go(n) {
    var nextIndex = history_clamp(history.index + n, 0, history.entries.length - 1);
    var action = 'POP';
    var location = history.entries[nextIndex];
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (ok) {
        setState({
          action: action,
          location: location,
          index: nextIndex
        });
      } else {
        // Mimic the behavior of DOM histories by
        // causing a render after a cancelled POP.
        setState();
      }
    });
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function canGo(n) {
    var nextIndex = history.index + n;
    return nextIndex >= 0 && nextIndex < history.entries.length;
  }

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    return transitionManager.setPrompt(prompt);
  }

  function listen(listener) {
    return transitionManager.appendListener(listener);
  }

  var history = {
    length: entries.length,
    action: 'POP',
    location: entries[index],
    index: index,
    entries: entries,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    canGo: canGo,
    block: block,
    listen: listen
  };
  return history;
}



;// CONCATENATED MODULE: ../node_modules/react-router-dom/esm/react-router-dom.js











/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = history_createBrowserHistory(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return react.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(react.Component);

if (false) {}

/**
 * The public API for a <Router> that uses window.location.hash.
 */

var HashRouter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(HashRouter, _React$Component);

  function HashRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = history_createHashHistory(_this.props);
    return _this;
  }

  var _proto = HashRouter.prototype;

  _proto.render = function render() {
    return react.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return HashRouter;
}(react.Component);

if (false) {}

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? history_createLocation(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef = react.forwardRef;

if (typeof forwardRef === "undefined") {
  forwardRef = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = (0,objectWithoutPropertiesLoose.default)(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = (0,esm_extends.default)({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return react.createElement("a", props);
});

if (false) {}
/**
 * The public API for rendering a history-aware <a>.
 */


var react_router_dom_Link = forwardRef(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = (0,objectWithoutPropertiesLoose.default)(_ref2, ["component", "replace", "to", "innerRef"]);

  return react.createElement(context.Consumer, null, function (context) {
    !context ?  false ? 0 : tiny_invariant_esm(false) : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = (0,esm_extends.default)({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var method = replace ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react.createElement(component, props);
  });
});

if (false) { var refType, toType; }

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = react.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = (0,objectWithoutPropertiesLoose.default)(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return react.createElement(context.Consumer, null, function (context) {
    !context ?  false ? 0 : tiny_invariant_esm(false) : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? matchPath(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? (0,esm_extends.default)({}, styleProp, {}, activeStyle) : styleProp;

    var props = (0,esm_extends.default)({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return react.createElement(react_router_dom_Link, props);
  });
});

if (false) { var ariaCurrentType; }


//# sourceMappingURL=react-router-dom.js.map

// EXTERNAL MODULE: ./theme/icons/logo-default.svg
var logo_default = __webpack_require__(3458);
;// CONCATENATED MODULE: ./components/logo/Logo.tsx
var Logo_assign = (undefined && undefined.__assign) || function () {
    Logo_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Logo_assign.apply(this, arguments);
};





var Logo = function (_a) {
    var _b = _a.theme, theme = _b === void 0 ? "light" : _b;
    return ((0,jsx_runtime.jsx)(react_router_dom_Link, Logo_assign({ to: RoutePage.MAIN, className: "logo logo--" + theme }, { children: (0,jsx_runtime.jsx)(logo_default.default, { width: "35px" }, void 0) }), void 0));
};
/* harmony default export */ const logo_Logo = (Logo);

;// CONCATENATED MODULE: ./components/logo/index.ts


;// CONCATENATED MODULE: ./components/layout/header/Header.tsx
var Header_assign = (undefined && undefined.__assign) || function () {
    Header_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Header_assign.apply(this, arguments);
};




var Header = function (_a) {
    var _b = _a.className, className = _b === void 0 ? "" : _b;
    return ((0,jsx_runtime.jsx)("header", Header_assign({ className: clsx_m("header", "center", className) }, { children: (0,jsx_runtime.jsx)(logo_Logo, {}, void 0) }), void 0));
};
/* harmony default export */ const header_Header = (Header);

;// CONCATENATED MODULE: ./components/layout/header/index.ts


;// CONCATENATED MODULE: ./components/navigation/move.ts
var move_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var move_generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
/* eslint-disable max-lines */

var move = function (id, color) { return move_awaiter(void 0, void 0, void 0, function () {
    var gsap, tl, position;
    return move_generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!isClient_canUseDOM)
                    return [2 /*return*/];
                return [4 /*yield*/, __webpack_require__.e(/* import() */ 667).then(__webpack_require__.bind(__webpack_require__, 9667))];
            case 1:
                gsap = (_a.sent());
                tl = new gsap.TimelineMax();
                position = id !== 0 ? (id - 1) * 100 + 50 + "px" : "0px";
                tl.to("#bgBubble", { "duration": 0.15, "bottom": "-30px", "ease": "ease-out" }, 0)
                    .to("#bubble1", {
                    "duration": 0.1,
                    "y": "120%",
                    "boxShadow": "none",
                    "ease": "ease-out",
                }, 0)
                    .to("#bubble2", {
                    "duration": 0.1,
                    "y": "120%",
                    "boxShadow": "none",
                    "ease": "ease-out",
                }, 0)
                    .to("#bubble3", {
                    "duration": 0.1,
                    "y": "120%",
                    "boxShadow": "none",
                    "ease": "ease-out",
                }, 0)
                    .to("#bubble4", {
                    "duration": 0.1,
                    "y": "120%",
                    "boxShadow": "none",
                    "ease": "ease-out",
                }, 0)
                    .to(".icon", { "duration": 0.05, "opacity": 0, "ease": "ease-out" }, 0)
                    .to("#bgBubble", { "duration": 0.2, "left": position, "ease": "ease-in-out" }, 0.1)
                    .to("#bgBubble", { "duration": 0.15, "bottom": "-50px", "ease": "ease-out" }, "-=0.2")
                    .to("" + (id === 0 ? ".bubble" : "#bubble" + id), {
                    "duration": 0.15,
                    "y": "0%",
                    "opacity": 1,
                    "boxShadow": "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
                    "ease": "ease-out",
                }, "-=0.1")
                    .to("" + (id === 0 ? ".bubble" : "#bubble" + id + "> span"), {
                    "duration": 0.15,
                    "y": "9%",
                    "x": "1px",
                    "opacity": id === 0 ? 1 : 0.7,
                    "ease": "ease-out",
                }, "-=0.1")
                    .to("#navbarContainer", {
                    "duration": 0.3,
                    "backgroundColor": color,
                    "ease": "ease-in-out",
                }, 0)
                    .to("#bg", {
                    "duration": 0.3,
                    "backgroundColor": color,
                    "ease": "ease-in-out",
                }, 0)
                    .to("#bgBubble", {
                    "duration": 0.3,
                    "backgroundColor": "transparent",
                    "ease": "ease-in-out",
                }, 0);
                return [2 /*return*/];
        }
    });
}); };

;// CONCATENATED MODULE: ./pages/error/404/Error404.tsx
var Error404_assign = (undefined && undefined.__assign) || function () {
    Error404_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Error404_assign.apply(this, arguments);
};






var Error404 = function () {
    (0,react.useEffect)(function () {
        move(0, "#eb4a4a");
    }, []);
    return ((0,jsx_runtime.jsxs)(layout_Layout, Error404_assign({ className: "error-page" }, { children: [(0,jsx_runtime.jsx)(header_Header, {}, void 0),
            (0,jsx_runtime.jsx)("div", Error404_assign({ className: "error404" }, { children: (0,jsx_runtime.jsx)("span", { children: " Page not found 404 " }, void 0) }), void 0)] }), void 0));
};
/* harmony default export */ const _404_Error404 = (Error404);

;// CONCATENATED MODULE: ./pages/error/404/index.ts


;// CONCATENATED MODULE: ./routes/Content.routes.tsx
var Content_routes_assign = (undefined && undefined.__assign) || function () {
    Content_routes_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Content_routes_assign.apply(this, arguments);
};





// FIXME: change directory name

var ContentRoute = function (_a) {
    var pages = _a.pages, importContent = _a.importContent;
    var mapPages = function () {
        return pages.map(function (page) {
            var path = page.path.replace("src/content/", "");
            var content = importContent(path);
            return ((0,jsx_runtime.jsx)(Route, Content_routes_assign({ exact: true, path: page.url }, { children: (0,jsx_runtime.jsx)(article_Article, { title: page.title, content: content }, void 0) }), page.url));
        });
    };
    return ((0,jsx_runtime.jsx)(container_Container, { children: (0,jsx_runtime.jsxs)(Switch, { children: [mapPages(), (0,jsx_runtime.jsx)(Route, Content_routes_assign({ path: "**" }, { children: (0,jsx_runtime.jsx)(_404_Error404, {}, void 0) }), void 0)] }, void 0) }, void 0));
};
/* harmony default export */ const Content_routes = (hoc_withContent(ContentRoute));

;// CONCATENATED MODULE: ./components/block/Block.tsx
var Block_assign = (undefined && undefined.__assign) || function () {
    Block_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Block_assign.apply(this, arguments);
};



var Block = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b;
    return ((0,jsx_runtime.jsx)("div", Block_assign({ className: clsx_m("block", className) }, { children: children }), void 0));
};
/* harmony default export */ const block_Block = (Block);

;// CONCATENATED MODULE: ./components/block/index.ts


;// CONCATENATED MODULE: ./hooks/useHover.ts

var useHover = function () {
    var _a = (0,react.useState)(false), isHovered = _a[0], setIsHovered = _a[1];
    var bind = (0,react.useMemo)(function () { return ({
        "onMouseOver": function () { return setIsHovered(true); },
        "onMouseLeave": function () { return setIsHovered(false); },
    }); }, []);
    return [isHovered, bind];
};

;// CONCATENATED MODULE: ./components/form/Section.tsx
var Section_assign = (undefined && undefined.__assign) || function () {
    Section_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Section_assign.apply(this, arguments);
};



var Section = function (_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? "" : _b, _c = _a.style, style = _c === void 0 ? {} : _c;
    return ((0,jsx_runtime.jsx)("section", Section_assign({ className: clsx_m("section", className), style: style }, { children: children }), void 0));
};
/* harmony default export */ const form_Section = (Section);

;// CONCATENATED MODULE: ./components/straightline/StraightLine.tsx



var StraightLine = function (_a) {
    var _b = _a.options, options = _b === void 0 ? {} : _b, _c = _a.lines, lines = _c === void 0 ? 3 : _c;
    var _d = options.fill, fill = _d === void 0 ? false : _d, _e = options.short, short = _e === void 0 ? false : _e, _f = options.withAnimation, withAnimation = _f === void 0 ? false : _f;
    var mapLines = function () { return ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [fill && ((0,jsx_runtime.jsx)("div", { className: clsx_m("straight-line", withAnimation && "animation") }, void 0)),
            new Array(lines).fill(null).map(function (_, index) { return ((0,jsx_runtime.jsx)("div", { className: clsx_m("straight-line-full", withAnimation && "animation") }, index)); }),
            short && ((0,jsx_runtime.jsx)("div", { className: clsx_m("shortened straight-line-full", withAnimation && "animation") }, void 0))] }, void 0)); };
    return mapLines();
};
/* harmony default export */ const straightline_StraightLine = (StraightLine);

;// CONCATENATED MODULE: ./components/straightline/index.ts


// EXTERNAL MODULE: ../node_modules/react-spring/renderprops.js
var renderprops = __webpack_require__(5249);
;// CONCATENATED MODULE: ./components/animated/RiseAnimated.tsx
var RiseAnimated_assign = (undefined && undefined.__assign) || function () {
    RiseAnimated_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return RiseAnimated_assign.apply(this, arguments);
};




var RiseAnimated = (0,react.forwardRef)(function RiseAnimatedComp(_a, externalRef) {
    var _b = _a.fromX, fromX = _b === void 0 ? "0px" : _b, _c = _a.fromY, fromY = _c === void 0 ? "0px" : _c, toX = _a.toX, toY = _a.toY, children = _a.children;
    var ref = (0,react.useRef)(null);
    var _d = useHover(), isHovered = _d[0], bind = _d[1];
    (0,react.useImperativeHandle)(externalRef, function () { return ref.current; });
    return ((0,jsx_runtime.jsx)(renderprops.Spring, RiseAnimated_assign({ immediate: !ref.current, reset: true, from: {
            "transform": "translateX(" + fromX + ") translateY(" + fromY + ")",
        }, to: { "transform": "translateX(" + toX + ") translateY(" + toY + ")" }, reverse: !isHovered }, { children: function (props) {
            return react.Children.map(children, function (child) {
                if ((0,react.isValidElement)(child)) {
                    return (0,react.cloneElement)(child, RiseAnimated_assign({ "style": props, ref: ref, "data-hovered": isHovered }, bind));
                }
                return child;
            });
        } }), void 0));
});
/* harmony default export */ const animated_RiseAnimated = (RiseAnimated);

;// CONCATENATED MODULE: ../node_modules/react-spring/web.js




const is = {
  arr: Array.isArray,
  obj: a => Object.prototype.toString.call(a) === '[object Object]',
  fun: a => typeof a === 'function',
  str: a => typeof a === 'string',
  num: a => typeof a === 'number',
  und: a => a === void 0,
  nul: a => a === null,
  set: a => a instanceof Set,
  map: a => a instanceof Map,

  equ(a, b) {
    if (typeof a !== typeof b) return false;
    if (is.str(a) || is.num(a)) return a === b;
    if (is.obj(a) && is.obj(b) && Object.keys(a).length + Object.keys(b).length === 0) return true;
    let i;

    for (i in a) if (!(i in b)) return false;

    for (i in b) if (a[i] !== b[i]) return false;

    return is.und(i) ? a === b : true;
  }

};
function merge(target, lowercase) {
  if (lowercase === void 0) {
    lowercase = true;
  }

  return object => (is.arr(object) ? object : Object.keys(object)).reduce((acc, element) => {
    const key = lowercase ? element[0].toLowerCase() + element.substring(1) : element;
    acc[key] = target(key);
    return acc;
  }, target);
}
function useForceUpdate() {
  const _useState = (0,react.useState)(false),
        f = _useState[1];

  const forceUpdate = (0,react.useCallback)(() => f(v => !v), []);
  return forceUpdate;
}
function withDefault(value, defaultValue) {
  return is.und(value) || is.nul(value) ? defaultValue : value;
}
function toArray(a) {
  return !is.und(a) ? is.arr(a) ? a : [a] : [];
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return is.fun(obj) ? obj(...args) : obj;
}

function getForwardProps(props) {
  const to = props.to,
        from = props.from,
        config = props.config,
        onStart = props.onStart,
        onRest = props.onRest,
        onFrame = props.onFrame,
        children = props.children,
        reset = props.reset,
        reverse = props.reverse,
        force = props.force,
        immediate = props.immediate,
        delay = props.delay,
        attach = props.attach,
        destroyed = props.destroyed,
        interpolateTo = props.interpolateTo,
        ref = props.ref,
        lazy = props.lazy,
        forward = (0,objectWithoutPropertiesLoose.default)(props, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);

  return forward;
}

function interpolateTo(props) {
  const forward = getForwardProps(props);
  if (is.und(forward)) return (0,esm_extends.default)({
    to: forward
  }, props);
  const rest = Object.keys(props).reduce((a, k) => !is.und(forward[k]) ? a : (0,esm_extends.default)({}, a, {
    [k]: props[k]
  }), {});
  return (0,esm_extends.default)({
    to: forward
  }, rest);
}
function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (is.fun(forward)) forward(ref);else if (is.obj(forward)) {
      forward.current = ref;
    }
  }

  return ref;
}

class Animated {
  constructor() {
    this.payload = void 0;
    this.children = [];
  }

  getAnimatedValue() {
    return this.getValue();
  }

  getPayload() {
    return this.payload || this;
  }

  attach() {}

  detach() {}

  getChildren() {
    return this.children;
  }

  addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  }

}
class AnimatedArray extends Animated {
  constructor() {
    super(...arguments);
    this.payload = [];

    this.attach = () => this.payload.forEach(p => p instanceof Animated && p.addChild(this));

    this.detach = () => this.payload.forEach(p => p instanceof Animated && p.removeChild(this));
  }

}
class AnimatedObject extends Animated {
  constructor() {
    super(...arguments);
    this.payload = {};

    this.attach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.addChild(this));

    this.detach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.removeChild(this));
  }

  getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    const payload = {};

    for (const key in this.payload) {
      const value = this.payload[key];
      if (animated && !(value instanceof Animated)) continue;
      payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  }

  getAnimatedValue() {
    return this.getValue(true);
  }

}

let applyAnimatedValues;
function injectApplyAnimatedValues(fn, transform) {
  applyAnimatedValues = {
    fn,
    transform
  };
}
let colorNames;
function injectColorNames(names) {
  colorNames = names;
}
let requestFrame = cb => typeof window !== 'undefined' ? window.requestAnimationFrame(cb) : -1;
let cancelFrame = id => {
  typeof window !== 'undefined' && window.cancelAnimationFrame(id);
};
function injectFrame(raf, caf) {
  requestFrame = raf;
  cancelFrame = caf;
}
let interpolation;
function injectStringInterpolator(fn) {
  interpolation = fn;
}
let now = () => Date.now();
function injectNow(nowFn) {
  now = nowFn;
}
let defaultElement;
function injectDefaultElement(el) {
  defaultElement = el;
}
let animatedApi = node => node.current;
function injectAnimatedApi(fn) {
  animatedApi = fn;
}
let createAnimatedStyle;
function injectCreateAnimatedStyle(factory) {
  createAnimatedStyle = factory;
}
let manualFrameloop;
function injectManualFrameloop(callback) {
  manualFrameloop = callback;
}

var Globals = /*#__PURE__*/Object.freeze({
  get applyAnimatedValues () { return applyAnimatedValues; },
  injectApplyAnimatedValues: injectApplyAnimatedValues,
  get colorNames () { return colorNames; },
  injectColorNames: injectColorNames,
  get requestFrame () { return requestFrame; },
  get cancelFrame () { return cancelFrame; },
  injectFrame: injectFrame,
  get interpolation () { return interpolation; },
  injectStringInterpolator: injectStringInterpolator,
  get now () { return now; },
  injectNow: injectNow,
  get defaultElement () { return defaultElement; },
  injectDefaultElement: injectDefaultElement,
  get animatedApi () { return animatedApi; },
  injectAnimatedApi: injectAnimatedApi,
  get createAnimatedStyle () { return createAnimatedStyle; },
  injectCreateAnimatedStyle: injectCreateAnimatedStyle,
  get manualFrameloop () { return manualFrameloop; },
  injectManualFrameloop: injectManualFrameloop
});

/**
 * Wraps the `style` property with `AnimatedStyle`.
 */

class AnimatedProps extends AnimatedObject {
  constructor(props, callback) {
    super();
    this.update = void 0;
    this.payload = !props.style ? props : (0,esm_extends.default)({}, props, {
      style: createAnimatedStyle(props.style)
    });
    this.update = callback;
    this.attach();
  }

}

const isFunctionComponent = val => is.fun(val) && !(val.prototype instanceof react.Component);

const createAnimatedComponent = Component => {
  const AnimatedComponent = (0,react.forwardRef)((props, ref) => {
    const forceUpdate = useForceUpdate();
    const mounted = (0,react.useRef)(true);
    const propsAnimated = (0,react.useRef)(null);
    const node = (0,react.useRef)(null);
    const attachProps = (0,react.useCallback)(props => {
      const oldPropsAnimated = propsAnimated.current;

      const callback = () => {
        let didUpdate = false;

        if (node.current) {
          didUpdate = applyAnimatedValues.fn(node.current, propsAnimated.current.getAnimatedValue());
        }

        if (!node.current || didUpdate === false) {
          // If no referenced node has been found, or the update target didn't have a
          // native-responder, then forceUpdate the animation ...
          forceUpdate();
        }
      };

      propsAnimated.current = new AnimatedProps(props, callback);
      oldPropsAnimated && oldPropsAnimated.detach();
    }, []);
    (0,react.useEffect)(() => () => {
      mounted.current = false;
      propsAnimated.current && propsAnimated.current.detach();
    }, []);
    (0,react.useImperativeHandle)(ref, () => animatedApi(node, mounted, forceUpdate));
    attachProps(props);

    const _getValue = propsAnimated.current.getValue(),
          scrollTop = _getValue.scrollTop,
          scrollLeft = _getValue.scrollLeft,
          animatedProps = (0,objectWithoutPropertiesLoose.default)(_getValue, ["scrollTop", "scrollLeft"]); // Functions cannot have refs, see:
    // See: https://github.com/react-spring/react-spring/issues/569


    const refFn = isFunctionComponent(Component) ? undefined : childRef => node.current = handleRef(childRef, ref);
    return react.createElement(Component, (0,esm_extends.default)({}, animatedProps, {
      ref: refFn
    }));
  });
  return AnimatedComponent;
};

let active = false;
const controllers = new Set();

const update = () => {
  if (!active) return false;
  let time = now();

  for (let controller of controllers) {
    let isActive = false;

    for (let configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      let config = controller.configs[configIdx];
      let endOfAnimation, lastTime;

      for (let valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        let animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        let from = config.fromValues[valIdx];
        let to = config.toValues[valIdx];
        let position = animation.lastPosition;
        let isAnimated = to instanceof Animated;
        let velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;
        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate) {
          animation.setValue(to);
          animation.done = true;
          continue;
        } // Break animation when string values are involved


        if (typeof from === 'string' || typeof to === 'string') {
          animation.setValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - animation.startTime) / config.duration) * (to - from);
          endOfAnimation = time >= animation.startTime + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - animation.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          let numSteps = Math.floor(time - lastTime);

          for (let i = 0; i < numSteps; ++i) {
            let force = -config.tension * (position - to);
            let damping = -config.friction * velocity;
            let acceleration = (force + damping) / config.mass;
            velocity = velocity + acceleration * 1 / 1000;
            position = position + velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          let isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          let isVelocity = Math.abs(velocity) <= config.precision;
          let isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isActive = true;

        animation.setValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame) controller.values[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame) controller.props.onFrame(controller.values); // Either call onEnd or next frame

    if (!isActive) {
      controllers.delete(controller);
      controller.stop(true);
    }
  } // Loop over as long as there are controllers ...


  if (controllers.size) {
    if (manualFrameloop) manualFrameloop();else requestFrame(update);
  } else {
    active = false;
  }

  return active;
};

const start = controller => {
  if (!controllers.has(controller)) controllers.add(controller);

  if (!active) {
    active = true;
    if (manualFrameloop) requestFrame(manualFrameloop);else requestFrame(update);
  }
};

const stop = controller => {
  if (controllers.has(controller)) controllers.delete(controller);
};

function createInterpolator(range, output, extrapolate) {
  if (typeof range === 'function') {
    return range;
  }

  if (Array.isArray(range)) {
    return createInterpolator({
      range,
      output: output,
      extrapolate
    });
  }

  if (interpolation && typeof range.output[0] === 'string') {
    return interpolation(range);
  }

  const config = range;
  const outputRange = config.output;
  const inputRange = config.range || [0, 1];
  const extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
  const extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

  const easing = config.easing || (t => t);

  return input => {
    const range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
  };
}

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

  return i - 1;
}

class AnimatedInterpolation extends AnimatedArray {
  constructor(parents, range, output, extrapolate) {
    super();
    this.calc = void 0;
    this.payload = parents instanceof AnimatedArray && !(parents instanceof AnimatedInterpolation) ? parents.getPayload() : Array.isArray(parents) ? parents : [parents];
    this.calc = createInterpolator(range, output, extrapolate);
  }

  getValue() {
    return this.calc(...this.payload.map(value => value.getValue()));
  }

  updateConfig(range, output, extrapolate) {
    this.calc = createInterpolator(range, output, extrapolate);
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

const interpolate$1 = (parents, range, output) => parents && new AnimatedInterpolation(parents, range, output);

const config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};

/** API
 *  useChain(references, timeSteps, timeFrame)
 */

function useChain(refs, timeSteps, timeFrame) {
  if (timeFrame === void 0) {
    timeFrame = 1000;
  }

  const previous = useRef();
  useEffect(() => {
    if (is.equ(refs, previous.current)) refs.forEach((_ref) => {
      let current = _ref.current;
      return current && current.start();
    });else if (timeSteps) {
      refs.forEach((_ref2, index) => {
        let current = _ref2.current;

        if (current) {
          const ctrls = current.controllers;

          if (ctrls.length) {
            const t = timeFrame * timeSteps[index];
            ctrls.forEach(ctrl => {
              ctrl.queue = ctrl.queue.map(e => _extends({}, e, {
                delay: e.delay + t
              }));
              ctrl.start();
            });
          }
        }
      });
    } else refs.reduce((q, _ref3, rI) => {
      let current = _ref3.current;
      return q = q.then(() => current.start());
    }, Promise.resolve());
    previous.current = refs;
  });
}

/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an AnimatedValue is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */
function addAnimatedStyles(node, styles) {
  if ('update' in node) {
    styles.add(node);
  } else {
    node.getChildren().forEach(child => addAnimatedStyles(child, styles));
  }
}

class AnimatedValue extends Animated {
  constructor(_value) {
    var _this;

    super();
    _this = this;
    this.animatedStyles = new Set();
    this.value = void 0;
    this.startPosition = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.startTime = void 0;
    this.lastTime = void 0;
    this.done = false;

    this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    this.value = _value;
    this.startPosition = _value;
    this.lastPosition = _value;
  }

  flush() {
    if (this.animatedStyles.size === 0) {
      addAnimatedStyles(this, this.animatedStyles);
    }

    this.animatedStyles.forEach(animatedStyle => animatedStyle.update());
  }

  clearStyles() {
    this.animatedStyles.clear();
  }

  getValue() {
    return this.value;
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

class AnimatedValueArray extends AnimatedArray {
  constructor(values) {
    super();
    this.payload = values.map(n => new AnimatedValue(n));
  }

  setValue(value, flush) {
    if (flush === void 0) {
      flush = true;
    }

    if (Array.isArray(value)) {
      if (value.length === this.payload.length) {
        value.forEach((v, i) => this.payload[i].setValue(v, flush));
      }
    } else {
      this.payload.forEach(p => p.setValue(value, flush));
    }
  }

  getValue() {
    return this.payload.map(v => v.getValue());
  }

  interpolate(range, output) {
    return new AnimatedInterpolation(this, range, output);
  }

}

let G = 0;

class Controller {
  constructor() {
    this.id = void 0;
    this.idle = true;
    this.hasChanged = false;
    this.guid = 0;
    this.local = 0;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.listeners = [];
    this.queue = [];
    this.localQueue = void 0;

    this.getValues = () => this.interpolations;

    this.id = G++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */


  update(args) {
    //this._id = n + this.id
    if (!args) return this; // Extract delay and the to-prop from props

    const _ref = interpolateTo(args),
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          to = _ref.to,
          props = (0,objectWithoutPropertiesLoose.default)(_ref, ["delay", "to"]);

    if (is.arr(to) || is.fun(to)) {
      // If config is either a function or an array queue it up as is
      this.queue.push((0,esm_extends.default)({}, props, {
        delay,
        to
      }));
    } else if (to) {
      // Otherwise go through each key since it could be delayed individually
      let ops = {};
      Object.entries(to).forEach((_ref2) => {
        let k = _ref2[0],
            v = _ref2[1];

        // Fetch delay and create an entry, consisting of the to-props, the delay, and basic props
        const entry = (0,esm_extends.default)({
          to: {
            [k]: v
          },
          delay: callProp(delay, k)
        }, props);

        const previous = ops[entry.delay] && ops[entry.delay].to;
        ops[entry.delay] = (0,esm_extends.default)({}, ops[entry.delay], entry, {
          to: (0,esm_extends.default)({}, previous, entry.to)
        });
      });
      this.queue = Object.values(ops);
    } // Sort queue, so that async calls go last


    this.queue = this.queue.sort((a, b) => a.delay - b.delay); // Diff the reduced props immediately (they'll contain the from-prop and some config)

    this.diff(props);
    return this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */


  start(onEnd) {
    // If a queue is present we must excecute it
    if (this.queue.length) {
      this.idle = false; // Updates can interrupt trailing queues, in that case we just merge values

      if (this.localQueue) {
        this.localQueue.forEach((_ref3) => {
          let _ref3$from = _ref3.from,
              from = _ref3$from === void 0 ? {} : _ref3$from,
              _ref3$to = _ref3.to,
              to = _ref3$to === void 0 ? {} : _ref3$to;
          if (is.obj(from)) this.merged = (0,esm_extends.default)({}, from, this.merged);
          if (is.obj(to)) this.merged = (0,esm_extends.default)({}, this.merged, to);
        });
      } // The guid helps us tracking frames, a new queue over an old one means an override
      // We discard async calls in that caseÍ


      const local = this.local = ++this.guid;
      const queue = this.localQueue = this.queue;
      this.queue = []; // Go through each entry and execute it

      queue.forEach((_ref4, index) => {
        let delay = _ref4.delay,
            props = (0,objectWithoutPropertiesLoose.default)(_ref4, ["delay"]);

        const cb = finished => {
          if (index === queue.length - 1 && local === this.guid && finished) {
            this.idle = true;
            if (this.props.onRest) this.props.onRest(this.merged);
          }

          if (onEnd) onEnd();
        }; // Entries can be delayed, ansyc or immediate


        let async = is.arr(props.to) || is.fun(props.to);

        if (delay) {
          setTimeout(() => {
            if (local === this.guid) {
              if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
            }
          }, delay);
        } else if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
      });
    } // Otherwise we kick of the frameloop
    else {
        if (is.fun(onEnd)) this.listeners.push(onEnd);
        if (this.props.onStart) this.props.onStart();
        start(this);
      }

    return this;
  }

  stop(finished) {
    this.listeners.forEach(onEnd => onEnd(finished));
    this.listeners = [];
    return this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */


  pause(finished) {
    this.stop(true);
    if (finished) stop(this);
    return this;
  }

  runAsync(_ref5, onEnd) {
    var _this = this;

    let delay = _ref5.delay,
        props = (0,objectWithoutPropertiesLoose.default)(_ref5, ["delay"]);

    const local = this.local; // If "to" is either a function or an array it will be processed async, therefor "to" should be empty right now
    // If the view relies on certain values "from" has to be present

    let queue = Promise.resolve(undefined);

    if (is.arr(props.to)) {
      for (let i = 0; i < props.to.length; i++) {
        const index = i;

        const fresh = (0,esm_extends.default)({}, props, interpolateTo(props.to[index]));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        queue = queue.then(() => {
          //this.stop()
          if (local === this.guid) return new Promise(r => this.diff(fresh).start(r));
        });
      }
    } else if (is.fun(props.to)) {
      let index = 0;
      let last;
      queue = queue.then(() => props.to( // next(props)
      p => {
        const fresh = (0,esm_extends.default)({}, props, interpolateTo(p));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        index++; //this.stop()

        if (local === this.guid) return last = new Promise(r => this.diff(fresh).start(r));
        return;
      }, // cancel()
      function (finished) {
        if (finished === void 0) {
          finished = true;
        }

        return _this.stop(finished);
      }).then(() => last));
    }

    queue.then(onEnd);
  }

  diff(props) {
    this.props = (0,esm_extends.default)({}, this.props, props);
    let _this$props = this.props,
        _this$props$from = _this$props.from,
        from = _this$props$from === void 0 ? {} : _this$props$from,
        _this$props$to = _this$props.to,
        to = _this$props$to === void 0 ? {} : _this$props$to,
        _this$props$config = _this$props.config,
        config = _this$props$config === void 0 ? {} : _this$props$config,
        reverse = _this$props.reverse,
        attach = _this$props.attach,
        reset = _this$props.reset,
        immediate = _this$props.immediate; // Reverse values when requested

    if (reverse) {
      var _ref6 = [to, from];
      from = _ref6[0];
      to = _ref6[1];
    } // This will collect all props that were ever set, reset merged props when necessary


    this.merged = (0,esm_extends.default)({}, from, this.merged, to);
    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    let target = attach && attach(this); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce((acc, _ref7) => {
      let name = _ref7[0],
          value = _ref7[1];
      // Issue cached entries, except on reset
      let entry = acc[name] || {}; // Figure out what the value is supposed to be

      const isNumber = is.num(value);
      const isString = is.str(value) && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      const isArray = is.arr(value);
      const isInterpolation = !isNumber && !isArray && !isString;
      let fromValue = !is.und(from[name]) ? from[name] : value;
      let toValue = isNumber || isArray ? value : isString ? value : 1;
      let toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent;
      let parent = entry.parent,
          interpolation$$1 = entry.interpolation,
          toValues = toArray(target ? toValue.getPayload() : toValue),
          animatedValues;
      let newValue = value;
      if (isInterpolation) newValue = interpolation({
        range: [0, 1],
        output: [value, value]
      })(1);
      let currentValue = interpolation$$1 && interpolation$$1.getValue(); // Change detection flags

      const isFirst = is.und(parent);
      const isActive = !isFirst && entry.animatedValues.some(v => !v.done);
      const currentValueDiffersFromGoal = !is.equ(newValue, currentValue);
      const hasNewGoal = !is.equ(newValue, entry.previous);
      const hasNewConfig = !is.equ(toConfig, entry.config); // Change animation props when props indicate a new goal (new value differs from previous one)
      // and current values differ from it. Config changes trigger a new update as well (though probably shouldn't?)

      if (reset || hasNewGoal && currentValueDiffersFromGoal || hasNewConfig) {
        // Convert regular values into animated values, ALWAYS re-use if possible
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedValueArray(fromValue);else if (isInterpolation) {
          let prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);
          prev = prev !== void 0 && !reset ? prev : fromValue;

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);

          const range = {
            output: [prev, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        }
        toValues = toArray(target ? toValue.getPayload() : toValue);
        animatedValues = toArray(parent.getPayload());
        if (reset && !isInterpolation) parent.setValue(fromValue, false);
        this.hasChanged = true; // Reset animated values

        animatedValues.forEach(value => {
          value.startPosition = value.value;
          value.lastPosition = value.value;
          value.lastVelocity = isActive ? value.lastVelocity : undefined;
          value.lastTime = isActive ? value.lastTime : undefined;
          value.startTime = now();
          value.done = false;
          value.animatedStyles.clear();
        }); // Set immediate values

        if (callProp(immediate, name)) {
          parent.setValue(isInterpolation ? toValue : value, false);
        }

        return (0,esm_extends.default)({}, acc, {
          [name]: (0,esm_extends.default)({}, entry, {
            name,
            parent,
            interpolation: interpolation$$1,
            animatedValues,
            toValues,
            previous: newValue,
            config: toConfig,
            fromValues: toArray(parent.getValue()),
            immediate: callProp(immediate, name),
            initialVelocity: withDefault(toConfig.velocity, 0),
            clamp: withDefault(toConfig.clamp, false),
            precision: withDefault(toConfig.precision, 0.01),
            tension: withDefault(toConfig.tension, 170),
            friction: withDefault(toConfig.friction, 26),
            mass: withDefault(toConfig.mass, 1),
            duration: toConfig.duration,
            easing: withDefault(toConfig.easing, t => t),
            decay: toConfig.decay
          })
        });
      } else {
        if (!currentValueDiffersFromGoal) {
          // So ... the current target value (newValue) appears to be different from the previous value,
          // which normally constitutes an update, but the actual value (currentValue) matches the target!
          // In order to resolve this without causing an animation update we silently flag the animation as done,
          // which it technically is. Interpolations also needs a config update with their target set to 1.
          if (isInterpolation) {
            parent.setValue(1, false);
            interpolation$$1.updateConfig({
              output: [newValue, newValue]
            });
          }

          parent.done = true;
          this.hasChanged = true;
          return (0,esm_extends.default)({}, acc, {
            [name]: (0,esm_extends.default)({}, acc[name], {
              previous: newValue
            })
          });
        }

        return acc;
      }
    }, this.animations);

    if (this.hasChanged) {
      // Make animations available to frameloop
      this.configs = Object.values(this.animations);
      this.values = {};
      this.interpolations = {};

      for (let key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.values[key] = this.animations[key].interpolation.getValue();
      }
    }

    return this;
  }

  destroy() {
    this.stop();
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.local = 0;
  }

}

/** API
 * const props = useSprings(number, [{ ... }, { ... }, ...])
 * const [props, set] = useSprings(number, (i, controller) => ({ ... }))
 */

const useSprings = (length, props) => {
  const mounted = useRef(false);
  const ctrl = useRef();
  const isFn = is.fun(props); // The controller maintains the animation values, starts and stops animations

  const _useMemo = useMemo(() => {
    // Remove old controllers
    if (ctrl.current) {
      ctrl.current.map(c => c.destroy());
      ctrl.current = undefined;
    }

    let ref;
    return [new Array(length).fill().map((_, i) => {
      const ctrl = new Controller();
      const newProps = isFn ? callProp(props, i, ctrl) : props[i];
      if (i === 0) ref = newProps.ref;
      ctrl.update(newProps);
      if (!ref) ctrl.start();
      return ctrl;
    }), ref];
  }, [length]),
        controllers = _useMemo[0],
        ref = _useMemo[1];

  ctrl.current = controllers; // The hooks reference api gets defined here ...

  const api = useImperativeHandle(ref, () => ({
    start: () => Promise.all(ctrl.current.map(c => new Promise(r => c.start(r)))),
    stop: finished => ctrl.current.forEach(c => c.stop(finished)),

    get controllers() {
      return ctrl.current;
    }

  })); // This function updates the controllers

  const updateCtrl = useMemo(() => updateProps => ctrl.current.map((c, i) => {
    c.update(isFn ? callProp(updateProps, i, c) : updateProps[i]);
    if (!ref) c.start();
  }), [length]); // Update controller if props aren't functional

  useEffect(() => {
    if (mounted.current) {
      if (!isFn) updateCtrl(props);
    } else if (!ref) ctrl.current.forEach(c => c.start());
  }); // Update mounted flag and destroy controller on unmount

  useEffect(() => (mounted.current = true, () => ctrl.current.forEach(c => c.destroy())), []); // Return animated props, or, anim-props + the update-setter above

  const propValues = ctrl.current.map(c => c.getValues());
  return isFn ? [propValues, updateCtrl, finished => ctrl.current.forEach(c => c.pause(finished))] : propValues;
};

/** API
 * const props = useSpring({ ... })
 * const [props, set] = useSpring(() => ({ ... }))
 */

const useSpring = props => {
  const isFn = is.fun(props);

  const _useSprings = useSprings(1, isFn ? props : [props]),
        result = _useSprings[0],
        set = _useSprings[1],
        pause = _useSprings[2];

  return isFn ? [result[0], set, pause] : result;
};

/** API
 * const trails = useTrail(number, { ... })
 * const [trails, set] = useTrail(number, () => ({ ... }))
 */

const useTrail = (length, props) => {
  const mounted = useRef(false);
  const isFn = is.fun(props);
  const updateProps = callProp(props);
  const instances = useRef();

  const _useSprings = useSprings(length, (i, ctrl) => {
    if (i === 0) instances.current = [];
    instances.current.push(ctrl);
    return _extends({}, updateProps, {
      config: callProp(updateProps.config, i),
      attach: i > 0 && (() => instances.current[i - 1])
    });
  }),
        result = _useSprings[0],
        set = _useSprings[1],
        pause = _useSprings[2]; // Set up function to update controller


  const updateCtrl = useMemo(() => props => set((i, ctrl) => {
    const last = props.reverse ? i === 0 : length - 1 === i;
    const attachIdx = props.reverse ? i + 1 : i - 1;
    const attachController = instances.current[attachIdx];
    return _extends({}, props, {
      config: callProp(props.config || updateProps.config, i),
      attach: attachController && (() => attachController)
    });
  }), [length, updateProps.reverse]); // Update controller if props aren't functional

  useEffect(() => void (mounted.current && !isFn && updateCtrl(props))); // Update mounted flag and destroy controller on unmount

  useEffect(() => void (mounted.current = true), []);
  return isFn ? [result, updateCtrl, pause] : result;
};

/** API
 * const transitions = useTransition(items, itemKeys, { ... })
 * const [transitions, update] = useTransition(items, itemKeys, () => ({ ... }))
 */

let guid = 0;
const ENTER = 'enter';
const LEAVE = 'leave';
const UPDATE = 'update';

const mapKeys = (items, keys) => (typeof keys === 'function' ? items.map(keys) : toArray(keys)).map(String);

const get = props => {
  let items = props.items,
      _props$keys = props.keys,
      keys = _props$keys === void 0 ? item => item : _props$keys,
      rest = (0,objectWithoutPropertiesLoose.default)(props, ["items", "keys"]);

  items = toArray(items !== void 0 ? items : null);
  return (0,esm_extends.default)({
    items,
    keys: mapKeys(items, keys)
  }, rest);
};

function useTransition(input, keyTransform, config) {
  const props = (0,esm_extends.default)({
    items: input,
    keys: keyTransform || (i => i)
  }, config);

  const _get = get(props),
        _get$lazy = _get.lazy,
        lazy = _get$lazy === void 0 ? false : _get$lazy,
        _get$unique = _get.unique,
        _get$reset = _get.reset,
        reset = _get$reset === void 0 ? false : _get$reset,
        enter = _get.enter,
        leave = _get.leave,
        update = _get.update,
        onDestroyed = _get.onDestroyed,
        keys = _get.keys,
        items = _get.items,
        onFrame = _get.onFrame,
        _onRest = _get.onRest,
        onStart = _get.onStart,
        ref = _get.ref,
        extra = (0,objectWithoutPropertiesLoose.default)(_get, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]);

  const forceUpdate = useForceUpdate();
  const mounted = (0,react.useRef)(false);
  const state = (0,react.useRef)({
    mounted: false,
    first: true,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!props.ref,
    instances: !mounted.current && new Map(),
    forceUpdate
  });
  (0,react.useImperativeHandle)(props.ref, () => ({
    start: () => Promise.all(Array.from(state.current.instances).map((_ref) => {
      let c = _ref[1];
      return new Promise(r => c.start(r));
    })),
    stop: finished => Array.from(state.current.instances).forEach((_ref2) => {
      let c = _ref2[1];
      return c.stop(finished);
    }),

    get controllers() {
      return Array.from(state.current.instances).map((_ref3) => {
        let c = _ref3[1];
        return c;
      });
    }

  })); // Update state

  state.current = diffItems(state.current, props);

  if (state.current.changed) {
    // Update state
    state.current.transitions.forEach(transition => {
      const slot = transition.slot,
            from = transition.from,
            to = transition.to,
            config = transition.config,
            trail = transition.trail,
            key = transition.key,
            item = transition.item;
      if (!state.current.instances.has(key)) state.current.instances.set(key, new Controller()); // update the map object

      const ctrl = state.current.instances.get(key);

      const newProps = (0,esm_extends.default)({}, extra, {
        to,
        from,
        config,
        ref,
        onRest: values => {
          if (state.current.mounted) {
            if (transition.destroyed) {
              // If no ref is given delete destroyed items immediately
              if (!ref && !lazy) cleanUp(state, key);
              if (onDestroyed) onDestroyed(item);
            } // A transition comes to rest once all its springs conclude


            const curInstances = Array.from(state.current.instances);
            const active = curInstances.some((_ref4) => {
              let c = _ref4[1];
              return !c.idle;
            });
            if (!active && (ref || lazy) && state.current.deleted.length > 0) cleanUp(state);
            if (_onRest) _onRest(item, slot, values);
          }
        },
        onStart: onStart && (() => onStart(item, slot)),
        onFrame: onFrame && (values => onFrame(item, slot, values)),
        delay: trail,
        reset: reset && slot === ENTER // Update controller

      });

      ctrl.update(newProps);
      if (!state.current.paused) ctrl.start();
    });
  }

  (0,react.useEffect)(() => {
    state.current.mounted = mounted.current = true;
    return () => {
      state.current.mounted = mounted.current = false;
      Array.from(state.current.instances).map((_ref5) => {
        let c = _ref5[1];
        return c.destroy();
      });
      state.current.instances.clear();
    };
  }, []);
  return state.current.transitions.map((_ref6) => {
    let item = _ref6.item,
        slot = _ref6.slot,
        key = _ref6.key;
    return {
      item,
      key,
      state: slot,
      props: state.current.instances.get(key).getValues()
    };
  });
}

function cleanUp(state, filterKey) {
  const deleted = state.current.deleted;

  for (let _ref7 of deleted) {
    let key = _ref7.key;

    const filter = t => t.key !== key;

    if (is.und(filterKey) || filterKey === key) {
      state.current.instances.delete(key);
      state.current.transitions = state.current.transitions.filter(filter);
      state.current.deleted = state.current.deleted.filter(filter);
    }
  }

  state.current.forceUpdate();
}

function diffItems(_ref8, props) {
  let first = _ref8.first,
      prevProps = _ref8.prevProps,
      state = (0,objectWithoutPropertiesLoose.default)(_ref8, ["first", "prevProps"]);

  let _get2 = get(props),
      items = _get2.items,
      keys = _get2.keys,
      initial = _get2.initial,
      from = _get2.from,
      enter = _get2.enter,
      leave = _get2.leave,
      update = _get2.update,
      _get2$trail = _get2.trail,
      trail = _get2$trail === void 0 ? 0 : _get2$trail,
      unique = _get2.unique,
      config = _get2.config,
      _get2$order = _get2.order,
      order = _get2$order === void 0 ? [ENTER, LEAVE, UPDATE] : _get2$order;

  let _get3 = get(prevProps),
      _keys = _get3.keys,
      _items = _get3.items;

  let current = (0,esm_extends.default)({}, state.current);

  let deleted = [...state.deleted]; // Compare next keys with current keys

  let currentKeys = Object.keys(current);
  let currentSet = new Set(currentKeys);
  let nextSet = new Set(keys);
  let added = keys.filter(item => !currentSet.has(item));
  let removed = state.transitions.filter(item => !item.destroyed && !nextSet.has(item.originalKey)).map(i => i.originalKey);
  let updated = keys.filter(item => currentSet.has(item));
  let delay = -trail;

  while (order.length) {
    const changeType = order.shift();

    switch (changeType) {
      case ENTER:
        {
          added.forEach((key, index) => {
            // In unique mode, remove fading out transitions if their key comes in again
            if (unique && deleted.find(d => d.originalKey === key)) deleted = deleted.filter(t => t.originalKey !== key);
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = first && initial !== void 0 ? 'initial' : ENTER;
            current[key] = {
              slot,
              originalKey: key,
              key: unique ? String(key) : guid++,
              item,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
              to: callProp(enter, item)
            };
          });
          break;
        }

      case LEAVE:
        {
          removed.forEach(key => {
            const keyIndex = _keys.indexOf(key);

            const item = _items[keyIndex];
            const slot = LEAVE;
            deleted.unshift((0,esm_extends.default)({}, current[key], {
              slot,
              destroyed: true,
              left: _keys[Math.max(0, keyIndex - 1)],
              right: _keys[Math.min(_keys.length, keyIndex + 1)],
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(leave, item)
            }));
            delete current[key];
          });
          break;
        }

      case UPDATE:
        {
          updated.forEach(key => {
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = UPDATE;
            current[key] = (0,esm_extends.default)({}, current[key], {
              item,
              slot,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(update, item)
            });
          });
          break;
        }
    }
  }

  let out = keys.map(key => current[key]); // This tries to restore order for deleted items by finding their last known siblings
  // only using the left sibling to keep order placement consistent for all deleted items

  deleted.forEach((_ref9) => {
    let left = _ref9.left,
        right = _ref9.right,
        item = (0,objectWithoutPropertiesLoose.default)(_ref9, ["left", "right"]);

    let pos; // Was it the element on the left, if yes, move there ...

    if ((pos = out.findIndex(t => t.originalKey === left)) !== -1) pos += 1; // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

    pos = Math.max(0, pos);
    out = [...out.slice(0, pos), item, ...out.slice(pos)];
  });
  return (0,esm_extends.default)({}, state, {
    changed: added.length || removed.length || updated.length,
    first: first && added.length === 0,
    transitions: out,
    current,
    deleted,
    prevProps: props
  });
}

class AnimatedStyle extends AnimatedObject {
  constructor(style) {
    if (style === void 0) {
      style = {};
    }

    super();

    if (style.transform && !(style.transform instanceof Animated)) {
      style = applyAnimatedValues.transform(style);
    }

    this.payload = style;
  }

}

// http://www.w3.org/TR/css3-color/#svg-color
const colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

// const INTEGER = '[-+]?\\d+';
const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call() {
  for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
    parts[_key] = arguments[_key];
  }

  return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
}

const rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor(color) {
  let match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors.hasOwnProperty(color)) return colors[color];

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 0xff000000) >>> 24;
  let g = (int32Color & 0x00ff0000) >>> 16;
  let b = (int32Color & 0x0000ff00) >>> 8;
  let a = (int32Color & 0x000000ff) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


const stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

const colorNamesRegex = new RegExp(`(${Object.keys(colors).join('|')})`, 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

const createStringInterpolator = config => {
  // Replace colors with rgba
  const outputRange = config.output.map(rangeValue => rangeValue.replace(colorRegex, colorToRgba)).map(rangeValue => rangeValue.replace(colorNamesRegex, colorToRgba));
  const outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
  outputRange.forEach(value => {
    value.match(stringShapeRegex).forEach((number, i) => outputRanges[i].push(+number));
  });
  const interpolations = outputRange[0].match(stringShapeRegex).map((_value, i) => createInterpolator((0,esm_extends.default)({}, config, {
    output: outputRanges[i]
  })));
  return input => {
    let i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, () => interpolations[i++](input)) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`);
  };
};

let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

const attributeCache = {};
injectCreateAnimatedStyle(style => new AnimatedStyle(style));
injectDefaultElement('div');
injectStringInterpolator(createStringInterpolator);
injectColorNames(colors);
injectApplyAnimatedValues((instance, props) => {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    const style = props.style,
          children = props.children,
          scrollTop = props.scrollTop,
          scrollLeft = props.scrollLeft,
          attributes = (0,objectWithoutPropertiesLoose.default)(props, ["style", "children", "scrollTop", "scrollLeft"]);

    const filter = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter';
    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (let styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (let name in attributes) {
      // Attributes are written in dash case
      const dashCase = filter ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase()));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }

    return;
  } else return false;
}, style => style);

const domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
// Extend animated with all the available THREE elements
const apply = merge(createAnimatedComponent, false);
const extendedAnimated = apply(domElements);



;// CONCATENATED MODULE: ./components/animated/TransitionShow.tsx
var TransitionShow_assign = (undefined && undefined.__assign) || function () {
    TransitionShow_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return TransitionShow_assign.apply(this, arguments);
};


var TransitionShow = function (_a) {
    var show = _a.show, render = _a.render;
    var transitions = useTransition(show, null, {
        "from": { "opacity": 0 },
        "enter": { "opacity": 1 },
        "leave": { "opacity": 0 },
    });
    return ((0,jsx_runtime.jsx)(jsx_runtime.Fragment, { children: transitions.map(function (_a) {
            var item = _a.item, key = _a.key, props = _a.props;
            return item && ((0,jsx_runtime.jsx)(extendedAnimated.div, TransitionShow_assign({ style: props, className: "non-selective" }, { children: render }), key));
        }) }, void 0));
};
/* harmony default export */ const animated_TransitionShow = (TransitionShow);

;// CONCATENATED MODULE: ./components/animated/index.ts



;// CONCATENATED MODULE: ./components/tooltip/Tooltip.tsx
var Tooltip_assign = (undefined && undefined.__assign) || function () {
    Tooltip_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Tooltip_assign.apply(this, arguments);
};




var Tooltip = function (_a) {
    var _b = _a.show, show = _b === void 0 ? false : _b, _c = _a.text, text = _c === void 0 ? "" : _c, _d = _a.className, className = _d === void 0 ? "" : _d;
    var render = ((0,jsx_runtime.jsx)("div", Tooltip_assign({ className: clsx_m("tooltip", "center", className) }, { children: (0,jsx_runtime.jsx)("p", { children: (0,jsx_runtime.jsx)("strong", { children: text }, void 0) }, void 0) }), void 0));
    return (0,jsx_runtime.jsx)(animated_TransitionShow, { show: show, render: render }, void 0);
};
/* harmony default export */ const tooltip_Tooltip = (Tooltip);

;// CONCATENATED MODULE: ./components/tooltip/index.ts


;// CONCATENATED MODULE: ./components/aboutme/AboutMe.tsx
var AboutMe_assign = (undefined && undefined.__assign) || function () {
    AboutMe_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return AboutMe_assign.apply(this, arguments);
};








var AboutMe = function () {
    var location = useLocation();
    var _a = useHover(), isHovered = _a[0], bind = _a[1];
    return ((0,jsx_runtime.jsxs)(form_Section, AboutMe_assign({ className: "aboutme" }, { children: [(0,jsx_runtime.jsx)(react_router_dom_Link, AboutMe_assign({ to: {
                    "pathname": RoutePage.ABOUTME,
                    "state": { "showcase": location },
                } }, { children: (0,jsx_runtime.jsxs)("div", AboutMe_assign({ className: "box--aboutme" }, bind, { children: [(0,jsx_runtime.jsx)("h3", AboutMe_assign({ className: "title" }, { children: "A" }), void 0),
                        (0,jsx_runtime.jsx)(straightline_StraightLine, { options: {
                                "fill": true,
                                "short": true,
                            }, lines: 5 }, void 0)] }), void 0) }), void 0),
            (0,jsx_runtime.jsx)(tooltip_Tooltip, { show: isHovered, text: "About me" }, void 0)] }), void 0));
};
/* harmony default export */ const aboutme_AboutMe = (AboutMe);

;// CONCATENATED MODULE: ./components/aboutme/index.ts


;// CONCATENATED MODULE: ./components/articlestower/ArticlesTower.tsx
var ArticlesTower_assign = (undefined && undefined.__assign) || function () {
    ArticlesTower_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return ArticlesTower_assign.apply(this, arguments);
};








var ArticlesTower = function () {
    var _a = useHover(), isHovered = _a[0], bind = _a[1];
    return ((0,jsx_runtime.jsxs)(form_Section, ArticlesTower_assign({ className: "tower--articles" }, { children: [(0,jsx_runtime.jsxs)("div", ArticlesTower_assign({ className: "box--articles" }, { children: [(0,jsx_runtime.jsx)(react_router_dom_Link, ArticlesTower_assign({ to: RoutePage.ARTICLES, className: "layer preserve-3d" }, bind, { children: (0,jsx_runtime.jsx)("div", { className: "layer__top-bar" }, void 0) }), void 0),
                    (0,jsx_runtime.jsx)("div", { className: clsx_m("layer__square-1", "preserve-3d", {
                            "square-1__hovered": isHovered,
                        }) }, void 0),
                    (0,jsx_runtime.jsx)("div", { className: clsx_m("layer__square-2", "preserve-3d", {
                            "square-2__hovered": isHovered,
                        }) }, void 0),
                    (0,jsx_runtime.jsx)("div", { className: "layer__square-bottom" }, void 0)] }), void 0),
            (0,jsx_runtime.jsx)(tooltip_Tooltip, { show: isHovered, text: "Articles" }, void 0)] }), void 0));
};
/* harmony default export */ const articlestower_ArticlesTower = (ArticlesTower);

;// CONCATENATED MODULE: ./components/articlestower/index.ts


;// CONCATENATED MODULE: ./components/decorators/LineGroup.tsx
var LineGroup_assign = (undefined && undefined.__assign) || function () {
    LineGroup_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return LineGroup_assign.apply(this, arguments);
};



var LineGroup = function () { return ((0,jsx_runtime.jsx)(form_Section, LineGroup_assign({ className: "decorator-line" }, { children: (0,jsx_runtime.jsx)(form_Section, LineGroup_assign({ className: "decorators", style: { "padding": "0px 55px 0px 25px" } }, { children: (0,jsx_runtime.jsx)(straightline_StraightLine, { options: { "short": true } }, void 0) }), void 0) }), void 0)); };
/* harmony default export */ const decorators_LineGroup = (LineGroup);

;// CONCATENATED MODULE: ./hooks/useToggle.ts

var useToggle = function (initialValue) {
    if (initialValue === void 0) { initialValue = false; }
    var _a = (0,react.useState)(initialValue), isToggled = _a[0], setToggle = _a[1];
    var callToggle = (0,react.useCallback)(function () { return setToggle(function (prevState) { return !prevState; }); }, []);
    var positiveToggle = (0,react.useCallback)(function () { return setToggle(true); }, []);
    var negativeToggle = (0,react.useCallback)(function () { return setToggle(false); }, []);
    return { isToggled: isToggled, setToggle: setToggle, callToggle: callToggle, positiveToggle: positiveToggle, negativeToggle: negativeToggle };
};

// EXTERNAL MODULE: ./theme/icons/close.svg
var icons_close = __webpack_require__(3781);
;// CONCATENATED MODULE: ./components/modal/Close.tsx
var Close_assign = (undefined && undefined.__assign) || function () {
    Close_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Close_assign.apply(this, arguments);
};



var Close = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.color, color = _c === void 0 ? "#807b7b" : _c, onClick = _a.onClick, _d = _a.icon, icon = _d === void 0 ? (0,jsx_runtime.jsx)(icons_close.default, {}, void 0) : _d;
    return ((0,jsx_runtime.jsxs)("span", Close_assign({ className: "closeModal", style: { "fill": color }, onClick: onClick }, { children: [icon, children] }), void 0));
};
/* harmony default export */ const modal_Close = (Close);

// EXTERNAL MODULE: ../node_modules/shallowequal/index.js
var shallowequal = __webpack_require__(4445);
var shallowequal_default = /*#__PURE__*/__webpack_require__.n(shallowequal);
;// CONCATENATED MODULE: ../node_modules/@emotion/stylis/dist/stylis.esm.js
function stylis_min (W) {
  function M(d, c, e, h, a) {
    for (var m = 0, b = 0, v = 0, n = 0, q, g, x = 0, K = 0, k, u = k = q = 0, l = 0, r = 0, I = 0, t = 0, B = e.length, J = B - 1, y, f = '', p = '', F = '', G = '', C; l < B;) {
      g = e.charCodeAt(l);
      l === J && 0 !== b + n + v + m && (0 !== b && (g = 47 === b ? 10 : 47), n = v = m = 0, B++, J++);

      if (0 === b + n + v + m) {
        if (l === J && (0 < r && (f = f.replace(N, '')), 0 < f.trim().length)) {
          switch (g) {
            case 32:
            case 9:
            case 59:
            case 13:
            case 10:
              break;

            default:
              f += e.charAt(l);
          }

          g = 59;
        }

        switch (g) {
          case 123:
            f = f.trim();
            q = f.charCodeAt(0);
            k = 1;

            for (t = ++l; l < B;) {
              switch (g = e.charCodeAt(l)) {
                case 123:
                  k++;
                  break;

                case 125:
                  k--;
                  break;

                case 47:
                  switch (g = e.charCodeAt(l + 1)) {
                    case 42:
                    case 47:
                      a: {
                        for (u = l + 1; u < J; ++u) {
                          switch (e.charCodeAt(u)) {
                            case 47:
                              if (42 === g && 42 === e.charCodeAt(u - 1) && l + 2 !== u) {
                                l = u + 1;
                                break a;
                              }

                              break;

                            case 10:
                              if (47 === g) {
                                l = u + 1;
                                break a;
                              }

                          }
                        }

                        l = u;
                      }

                  }

                  break;

                case 91:
                  g++;

                case 40:
                  g++;

                case 34:
                case 39:
                  for (; l++ < J && e.charCodeAt(l) !== g;) {
                  }

              }

              if (0 === k) break;
              l++;
            }

            k = e.substring(t, l);
            0 === q && (q = (f = f.replace(ca, '').trim()).charCodeAt(0));

            switch (q) {
              case 64:
                0 < r && (f = f.replace(N, ''));
                g = f.charCodeAt(1);

                switch (g) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    r = c;
                    break;

                  default:
                    r = O;
                }

                k = M(c, r, k, g, a + 1);
                t = k.length;
                0 < A && (r = X(O, f, I), C = H(3, k, r, c, D, z, t, g, a, h), f = r.join(''), void 0 !== C && 0 === (t = (k = C.trim()).length) && (g = 0, k = ''));
                if (0 < t) switch (g) {
                  case 115:
                    f = f.replace(da, ea);

                  case 100:
                  case 109:
                  case 45:
                    k = f + '{' + k + '}';
                    break;

                  case 107:
                    f = f.replace(fa, '$1 $2');
                    k = f + '{' + k + '}';
                    k = 1 === w || 2 === w && L('@' + k, 3) ? '@-webkit-' + k + '@' + k : '@' + k;
                    break;

                  default:
                    k = f + k, 112 === h && (k = (p += k, ''));
                } else k = '';
                break;

              default:
                k = M(c, X(c, f, I), k, h, a + 1);
            }

            F += k;
            k = I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
            break;

          case 125:
          case 59:
            f = (0 < r ? f.replace(N, '') : f).trim();
            if (1 < (t = f.length)) switch (0 === u && (q = f.charCodeAt(0), 45 === q || 96 < q && 123 > q) && (t = (f = f.replace(' ', ':')).length), 0 < A && void 0 !== (C = H(1, f, c, d, D, z, p.length, h, a, h)) && 0 === (t = (f = C.trim()).length) && (f = '\x00\x00'), q = f.charCodeAt(0), g = f.charCodeAt(1), q) {
              case 0:
                break;

              case 64:
                if (105 === g || 99 === g) {
                  G += f + e.charAt(l);
                  break;
                }

              default:
                58 !== f.charCodeAt(t - 1) && (p += P(f, q, g, f.charCodeAt(2)));
            }
            I = r = u = q = 0;
            f = '';
            g = e.charCodeAt(++l);
        }
      }

      switch (g) {
        case 13:
        case 10:
          47 === b ? b = 0 : 0 === 1 + q && 107 !== h && 0 < f.length && (r = 1, f += '\x00');
          0 < A * Y && H(0, f, c, d, D, z, p.length, h, a, h);
          z = 1;
          D++;
          break;

        case 59:
        case 125:
          if (0 === b + n + v + m) {
            z++;
            break;
          }

        default:
          z++;
          y = e.charAt(l);

          switch (g) {
            case 9:
            case 32:
              if (0 === n + m + b) switch (x) {
                case 44:
                case 58:
                case 9:
                case 32:
                  y = '';
                  break;

                default:
                  32 !== g && (y = ' ');
              }
              break;

            case 0:
              y = '\\0';
              break;

            case 12:
              y = '\\f';
              break;

            case 11:
              y = '\\v';
              break;

            case 38:
              0 === n + b + m && (r = I = 1, y = '\f' + y);
              break;

            case 108:
              if (0 === n + b + m + E && 0 < u) switch (l - u) {
                case 2:
                  112 === x && 58 === e.charCodeAt(l - 3) && (E = x);

                case 8:
                  111 === K && (E = K);
              }
              break;

            case 58:
              0 === n + b + m && (u = l);
              break;

            case 44:
              0 === b + v + n + m && (r = 1, y += '\r');
              break;

            case 34:
            case 39:
              0 === b && (n = n === g ? 0 : 0 === n ? g : n);
              break;

            case 91:
              0 === n + b + v && m++;
              break;

            case 93:
              0 === n + b + v && m--;
              break;

            case 41:
              0 === n + b + m && v--;
              break;

            case 40:
              if (0 === n + b + m) {
                if (0 === q) switch (2 * x + 3 * K) {
                  case 533:
                    break;

                  default:
                    q = 1;
                }
                v++;
              }

              break;

            case 64:
              0 === b + v + n + m + u + k && (k = 1);
              break;

            case 42:
            case 47:
              if (!(0 < n + m + v)) switch (b) {
                case 0:
                  switch (2 * g + 3 * e.charCodeAt(l + 1)) {
                    case 235:
                      b = 47;
                      break;

                    case 220:
                      t = l, b = 42;
                  }

                  break;

                case 42:
                  47 === g && 42 === x && t + 2 !== l && (33 === e.charCodeAt(t + 2) && (p += e.substring(t, l + 1)), y = '', b = 0);
              }
          }

          0 === b && (f += y);
      }

      K = x;
      x = g;
      l++;
    }

    t = p.length;

    if (0 < t) {
      r = c;
      if (0 < A && (C = H(2, p, r, d, D, z, t, h, a, h), void 0 !== C && 0 === (p = C).length)) return G + p + F;
      p = r.join(',') + '{' + p + '}';

      if (0 !== w * E) {
        2 !== w || L(p, 2) || (E = 0);

        switch (E) {
          case 111:
            p = p.replace(ha, ':-moz-$1') + p;
            break;

          case 112:
            p = p.replace(Q, '::-webkit-input-$1') + p.replace(Q, '::-moz-$1') + p.replace(Q, ':-ms-input-$1') + p;
        }

        E = 0;
      }
    }

    return G + p + F;
  }

  function X(d, c, e) {
    var h = c.trim().split(ia);
    c = h;
    var a = h.length,
        m = d.length;

    switch (m) {
      case 0:
      case 1:
        var b = 0;

        for (d = 0 === m ? '' : d[0] + ' '; b < a; ++b) {
          c[b] = Z(d, c[b], e).trim();
        }

        break;

      default:
        var v = b = 0;

        for (c = []; b < a; ++b) {
          for (var n = 0; n < m; ++n) {
            c[v++] = Z(d[n] + ' ', h[b], e).trim();
          }
        }

    }

    return c;
  }

  function Z(d, c, e) {
    var h = c.charCodeAt(0);
    33 > h && (h = (c = c.trim()).charCodeAt(0));

    switch (h) {
      case 38:
        return c.replace(F, '$1' + d.trim());

      case 58:
        return d.trim() + c.replace(F, '$1' + d.trim());

      default:
        if (0 < 1 * e && 0 < c.indexOf('\f')) return c.replace(F, (58 === d.charCodeAt(0) ? '' : '$1') + d.trim());
    }

    return d + c;
  }

  function P(d, c, e, h) {
    var a = d + ';',
        m = 2 * c + 3 * e + 4 * h;

    if (944 === m) {
      d = a.indexOf(':', 9) + 1;
      var b = a.substring(d, a.length - 1).trim();
      b = a.substring(0, d).trim() + b + ';';
      return 1 === w || 2 === w && L(b, 1) ? '-webkit-' + b + b : b;
    }

    if (0 === w || 2 === w && !L(a, 1)) return a;

    switch (m) {
      case 1015:
        return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a;

      case 951:
        return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a;

      case 963:
        return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a;

      case 1009:
        if (100 !== a.charCodeAt(4)) break;

      case 969:
      case 942:
        return '-webkit-' + a + a;

      case 978:
        return '-webkit-' + a + '-moz-' + a + a;

      case 1019:
      case 983:
        return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a;

      case 883:
        if (45 === a.charCodeAt(8)) return '-webkit-' + a + a;
        if (0 < a.indexOf('image-set(', 11)) return a.replace(ja, '$1-webkit-$2') + a;
        break;

      case 932:
        if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
          case 103:
            return '-webkit-box-' + a.replace('-grow', '') + '-webkit-' + a + '-ms-' + a.replace('grow', 'positive') + a;

          case 115:
            return '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a;

          case 98:
            return '-webkit-' + a + '-ms-' + a.replace('basis', 'preferred-size') + a;
        }
        return '-webkit-' + a + '-ms-' + a + a;

      case 964:
        return '-webkit-' + a + '-ms-flex-' + a + a;

      case 1023:
        if (99 !== a.charCodeAt(8)) break;
        b = a.substring(a.indexOf(':', 15)).replace('flex-', '').replace('space-between', 'justify');
        return '-webkit-box-pack' + b + '-webkit-' + a + '-ms-flex-pack' + b + a;

      case 1005:
        return ka.test(a) ? a.replace(aa, ':-webkit-') + a.replace(aa, ':-moz-') + a : a;

      case 1e3:
        b = a.substring(13).trim();
        c = b.indexOf('-') + 1;

        switch (b.charCodeAt(0) + b.charCodeAt(c)) {
          case 226:
            b = a.replace(G, 'tb');
            break;

          case 232:
            b = a.replace(G, 'tb-rl');
            break;

          case 220:
            b = a.replace(G, 'lr');
            break;

          default:
            return a;
        }

        return '-webkit-' + a + '-ms-' + b + a;

      case 1017:
        if (-1 === a.indexOf('sticky', 9)) break;

      case 975:
        c = (a = d).length - 10;
        b = (33 === a.charCodeAt(c) ? a.substring(0, c) : a).substring(d.indexOf(':', 7) + 1).trim();

        switch (m = b.charCodeAt(0) + (b.charCodeAt(7) | 0)) {
          case 203:
            if (111 > b.charCodeAt(8)) break;

          case 115:
            a = a.replace(b, '-webkit-' + b) + ';' + a;
            break;

          case 207:
          case 102:
            a = a.replace(b, '-webkit-' + (102 < m ? 'inline-' : '') + 'box') + ';' + a.replace(b, '-webkit-' + b) + ';' + a.replace(b, '-ms-' + b + 'box') + ';' + a;
        }

        return a + ';';

      case 938:
        if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
          case 105:
            return b = a.replace('-items', ''), '-webkit-' + a + '-webkit-box-' + b + '-ms-flex-' + b + a;

          case 115:
            return '-webkit-' + a + '-ms-flex-item-' + a.replace(ba, '') + a;

          default:
            return '-webkit-' + a + '-ms-flex-line-pack' + a.replace('align-content', '').replace(ba, '') + a;
        }
        break;

      case 973:
      case 989:
        if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;

      case 931:
      case 953:
        if (!0 === la.test(d)) return 115 === (b = d.substring(d.indexOf(':') + 1)).charCodeAt(0) ? P(d.replace('stretch', 'fill-available'), c, e, h).replace(':fill-available', ':stretch') : a.replace(b, '-webkit-' + b) + a.replace(b, '-moz-' + b.replace('fill-', '')) + a;
        break;

      case 962:
        if (a = '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a, 211 === e + h && 105 === a.charCodeAt(13) && 0 < a.indexOf('transform', 10)) return a.substring(0, a.indexOf(';', 27) + 1).replace(ma, '$1-webkit-$2') + a;
    }

    return a;
  }

  function L(d, c) {
    var e = d.indexOf(1 === c ? ':' : '{'),
        h = d.substring(0, 3 !== c ? e : 10);
    e = d.substring(e + 1, d.length - 1);
    return R(2 !== c ? h : h.replace(na, '$1'), e, c);
  }

  function ea(d, c) {
    var e = P(c, c.charCodeAt(0), c.charCodeAt(1), c.charCodeAt(2));
    return e !== c + ';' ? e.replace(oa, ' or ($1)').substring(4) : '(' + c + ')';
  }

  function H(d, c, e, h, a, m, b, v, n, q) {
    for (var g = 0, x = c, w; g < A; ++g) {
      switch (w = S[g].call(B, d, x, e, h, a, m, b, v, n, q)) {
        case void 0:
        case !1:
        case !0:
        case null:
          break;

        default:
          x = w;
      }
    }

    if (x !== c) return x;
  }

  function T(d) {
    switch (d) {
      case void 0:
      case null:
        A = S.length = 0;
        break;

      default:
        if ('function' === typeof d) S[A++] = d;else if ('object' === typeof d) for (var c = 0, e = d.length; c < e; ++c) {
          T(d[c]);
        } else Y = !!d | 0;
    }

    return T;
  }

  function U(d) {
    d = d.prefix;
    void 0 !== d && (R = null, d ? 'function' !== typeof d ? w = 1 : (w = 2, R = d) : w = 0);
    return U;
  }

  function B(d, c) {
    var e = d;
    33 > e.charCodeAt(0) && (e = e.trim());
    V = e;
    e = [V];

    if (0 < A) {
      var h = H(-1, c, e, e, D, z, 0, 0, 0, 0);
      void 0 !== h && 'string' === typeof h && (c = h);
    }

    var a = M(O, e, c, 0, 0);
    0 < A && (h = H(-2, a, e, e, D, z, a.length, 0, 0, 0), void 0 !== h && (a = h));
    V = '';
    E = 0;
    z = D = 1;
    return a;
  }

  var ca = /^\0+/g,
      N = /[\0\r\f]/g,
      aa = /: */g,
      ka = /zoo|gra/,
      ma = /([,: ])(transform)/g,
      ia = /,\r+?/g,
      F = /([\t\r\n ])*\f?&/g,
      fa = /@(k\w+)\s*(\S*)\s*/,
      Q = /::(place)/g,
      ha = /:(read-only)/g,
      G = /[svh]\w+-[tblr]{2}/,
      da = /\(\s*(.*)\s*\)/g,
      oa = /([\s\S]*?);/g,
      ba = /-self|flex-/g,
      na = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      la = /stretch|:\s*\w+\-(?:conte|avail)/,
      ja = /([^-])(image-set\()/,
      z = 1,
      D = 1,
      E = 0,
      w = 1,
      O = [],
      S = [],
      A = 0,
      R = null,
      Y = 0,
      V = '';
  B.use = T;
  B.set = U;
  void 0 !== W && U(W);
  return B;
}

/* harmony default export */ const stylis_esm = (stylis_min);

;// CONCATENATED MODULE: ../node_modules/@emotion/unitless/dist/unitless.esm.js
var unitlessKeys = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
};

/* harmony default export */ const unitless_esm = (unitlessKeys);

;// CONCATENATED MODULE: ../node_modules/@emotion/memoize/dist/memoize.esm.js
function memoize(fn) {
  var cache = {};
  return function (arg) {
    if (cache[arg] === undefined) cache[arg] = fn(arg);
    return cache[arg];
  };
}

/* harmony default export */ const memoize_esm = (memoize);

;// CONCATENATED MODULE: ../node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js


var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var is_prop_valid_esm_index = memoize_esm(function (prop) {
  return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111
  /* o */
  && prop.charCodeAt(1) === 110
  /* n */
  && prop.charCodeAt(2) < 91;
}
/* Z+1 */
);

/* harmony default export */ const is_prop_valid_esm = (is_prop_valid_esm_index);

;// CONCATENATED MODULE: ../node_modules/styled-components/dist/styled-components.esm.js
function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var y=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},g=function(t){return null!==t&&"object"==typeof t&&"[object Object]"===(t.toString?t.toString():Object.prototype.toString.call(t))&&!(0,react_is.typeOf)(t)},S=Object.freeze([]),w=Object.freeze({});function E(e){return"function"==typeof e}function b(e){return false||e.displayName||e.name||"Component"}function N(e){return e&&"string"==typeof e.styledComponentId}var _= true&&(({"ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\user\\AppData\\Roaming","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"132458377610238835","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\crashpad_8996_BKZEXZIJHPKONUIR","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"WIN-DUTQ08SBL96","COMSPEC":"C:\\Windows\\system32\\cmd.exe","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EXEPATH":"C:\\Program Files\\Git\\bin","GIT_ASKPASS":"c:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\user","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\user","INIT_CWD":"C:\\My\\Software\\Projects\\arma73","IntelliJ IDEA Community Edition":"C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2020.2.2\\bin;","LANG":"ru_RU.UTF-8","LOCALAPPDATA":"C:\\Users\\user\\AppData\\Local","LOGONSERVER":"\\\\WIN-DUTQ08SBL96","MSYSTEM":"MINGW64","NODE":"C:\\Program Files\\nodejs\\node.exe","NODE_ENV":"production","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"predeploy\"],\"original\":[\"deploy\"]}","npm_config_bin_links":"true","npm_config_bit_registry":"https://node.bit.dev","npm_config_ignore_optional":"","npm_config_ignore_scripts":"","npm_config_init_license":"MIT","npm_config_init_version":"1.0.0","npm_config_package_lock":"","npm_config_registry":"https://registry.yarnpkg.com","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_config_user_agent":"yarn/1.22.5 npm/? node/v12.18.4 win32 x64","npm_config_version_commit_hooks":"true","npm_config_version_git_message":"v%s","npm_config_version_git_sign":"","npm_config_version_git_tag":"true","npm_config_version_tag_prefix":"v","npm_config_wrap_output":"","npm_config__bit_registry":"https://node.bit.dev","npm_execpath":"C:\\Program Files (x86)\\Yarn\\bin\\yarn.js","npm_lifecycle_event":"build:ssg","npm_lifecycle_script":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --ssg","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_author_email":"arma.biz9805@gmail.com","npm_package_author_name":"Arman Khilko","npm_package_dependencies_clsx":"^1.1.1","npm_package_dependencies_gsap":"^3.6.0","npm_package_dependencies_history":"^5.0.0","npm_package_dependencies_normalize_css":"^8.0.1","npm_package_dependencies_postcss":"^8.1.14","npm_package_dependencies_raf":"^3.4.1","npm_package_dependencies_react":"^17.0.1","npm_package_dependencies_react_document_title":"^2.0.3","npm_package_dependencies_react_dom":"^17.0.1","npm_package_dependencies_react_router_dom":"^5.2.0","npm_package_dependencies_react_spring":"^8.0.27","npm_package_dependencies_react_tiny_popover":"^6.0.3","npm_package_dependencies_styled_components":"^5.2.1","npm_package_dependencies_workbox_window":"^6.0.2","npm_package_dependencies__mdx_js_react":"^1.6.22","npm_package_devDependencies_autoprefixer":"^10.0.4","npm_package_devDependencies_babel_loader":"^8.2.2","npm_package_devDependencies_babel_plugin_styled_components":"^1.12.0","npm_package_devDependencies_babel_plugin_transform_react_remove_prop_types":"^0.4.24","npm_package_devDependencies_cache_loader":"^4.1.0","npm_package_devDependencies_case_sensitive_paths_webpack_plugin":"^2.3.0","npm_package_devDependencies_chalk":"^4.1.0","npm_package_devDependencies_cheerio":"^1.0.0-rc.5","npm_package_devDependencies_clean_webpack_plugin":"^3.0.0","npm_package_devDependencies_copy_webpack_plugin":"^6.3.2","npm_package_devDependencies_cross_env":"^7.0.3","npm_package_devDependencies_cssnano":"^4.1.10","npm_package_devDependencies_csstype":"^3.0.7","npm_package_devDependencies_css_loader":"^5.0.1","npm_package_devDependencies_css_minimizer_webpack_plugin":"^1.2.0","npm_package_devDependencies_detect_port_alt":"^1.1.6","npm_package_devDependencies_directory_tree_webpack_plugin":"^1.0.2","npm_package_devDependencies_dotenv":"^8.2.0","npm_package_devDependencies_eslint":"^7.15.0","npm_package_devDependencies_eslint_config_prettier":"^8.0.0","npm_package_devDependencies_eslint_plugin_jsx_a11y":"^6.4.1","npm_package_devDependencies_eslint_plugin_prettier":"^3.3.1","npm_package_devDependencies_eslint_plugin_react":"^7.21.5","npm_package_devDependencies_eslint_plugin_react_hooks":"^4.2.0","npm_package_devDependencies_friendly_errors_webpack_plugin":"^1.7.0","npm_package_devDependencies_front_matter":"^4.0.2","npm_package_devDependencies_gh_pages":"^3.1.0","npm_package_devDependencies_html_loader":"^1.3.2","npm_package_devDependencies_html_webpack_plugin":"^5.0.0-alpha.15","npm_package_devDependencies_husky":"^4.3.5","npm_package_devDependencies_inquirer":"^7.3.3","npm_package_devDependencies_lint_staged":"^10.5.3","npm_package_devDependencies_mini_css_extract_plugin":"^1.3.2","npm_package_devDependencies_ndb":"^1.1.5","npm_package_devDependencies_node_sass":"^5.0.0","npm_package_devDependencies_npm_run_all":"^4.1.5","npm_package_devDependencies_null_loader":"^4.0.1","npm_package_devDependencies_path_browserify":"^1.0.1","npm_package_devDependencies_postcss_calc":"^7.0.5","npm_package_devDependencies_postcss_custom_media":"^7.0.8","npm_package_devDependencies_postcss_custom_properties":"^10.0.0","npm_package_devDependencies_postcss_discard_comments":"^4.0.2","npm_package_devDependencies_postcss_import":"^13.0.0","npm_package_devDependencies_postcss_loader":"^4.1.0","npm_package_devDependencies_postcss_nested":"^5.0.3","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_scss":"^3.0.4","npm_package_devDependencies_postcss_simple_vars":"^6.0.1","npm_package_devDependencies_prettier":"^2.2.1","npm_package_devDependencies_react_hot_loader":"^4.13.0","npm_package_devDependencies_redirect_webpack_plugin":"^1.0.0","npm_package_devDependencies_remark":"^13.0.0","npm_package_devDependencies_remark_custom_blockquotes":"^1.0.1","npm_package_devDependencies_remark_emoji":"^2.1.0","npm_package_devDependencies_remark_extract_anchors":"^1.1.1","npm_package_devDependencies_remark_frontmatter":"^3.0.0","npm_package_devDependencies_remark_gfm":"^1.0.0","npm_package_devDependencies_remark_html":"^13.0.1","npm_package_devDependencies_remark_loader":"^2.0.0","npm_package_devDependencies_remark_slug":"^6.0.0","npm_package_devDependencies_sass_loader":"^10.1.0","npm_package_devDependencies_source_map_loader":"^1.1.3","npm_package_devDependencies_static_site_generator_webpack_plugin":"^3.4.2","npm_package_devDependencies_style_loader":"^2.0.0","npm_package_devDependencies_terser_webpack_plugin":"^5.0.3","npm_package_devDependencies_thread_loader":"^3.0.1","npm_package_devDependencies_ts_loader":"^8.0.17","npm_package_devDependencies_typescript":"^4.1.5","npm_package_devDependencies_webpack":"^5.12.2","npm_package_devDependencies_webpackbar":"^5.0.0-3","npm_package_devDependencies_webpack_bundle_analyzer":"^4.2.0","npm_package_devDependencies_webpack_cli":"^4.3.1","npm_package_devDependencies_webpack_dev_server":"^4.0.0-beta.0","npm_package_devDependencies_webpack_hot_middleware":"^2.25.0","npm_package_devDependencies_webpack_merge":"^5.7.3","npm_package_devDependencies_webpack_pwa_manifest":"^4.3.0","npm_package_devDependencies_workbox_webpack_plugin":"^6.0.2","npm_package_devDependencies__babel_core":"^7.12.9","npm_package_devDependencies__babel_eslint_parser":"^7.12.1","npm_package_devDependencies__babel_eslint_plugin":"^7.13.0","npm_package_devDependencies__babel_plugin_proposal_class_properties":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_decorators":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_export_default_from":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_export_namespace_from":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_optional_chaining":"^7.12.7","npm_package_devDependencies__babel_plugin_syntax_dynamic_import":"^7.8.3","npm_package_devDependencies__babel_plugin_transform_react_constant_elements":"^7.12.1","npm_package_devDependencies__babel_plugin_transform_react_jsx":"^7.12.7","npm_package_devDependencies__babel_plugin_transform_runtime":"^7.12.1","npm_package_devDependencies__babel_preset_env":"^7.12.11","npm_package_devDependencies__babel_preset_react":"^7.12.10","npm_package_devDependencies__babel_preset_typescript":"^7.13.0","npm_package_devDependencies__hot_loader_react_dom":"^17.0.1","npm_package_devDependencies__mdx_js_loader":"^1.6.22","npm_package_devDependencies__svgr_webpack":"^5.5.0","npm_package_devDependencies__typescript_eslint_eslint_plugin":"^4.15.2","npm_package_devDependencies__typescript_eslint_parser":"^4.15.2","npm_package_devDependencies__types_mdx_js__react":"^1.5.3","npm_package_devDependencies__types_react":"^17.0.2","npm_package_devDependencies__types_react_dom":"^17.0.1","npm_package_devDependencies__types_react_router_dom":"^5.1.7","npm_package_devDependencies__types_styled_components":"^5.1.7","npm_package_devDependencies__types_webpack":"^4.41.26","npm_package_engines_node":">=10.x","npm_package_homepage":"https://arma73.github.io/","npm_package_husky_hooks_pre_commit":"lint-staged","npm_package_license":"MIT","npm_package_lint_staged____ts_tsx__0":"npm run lint","npm_package_main":"dist/index.js","npm_package_name":"arma73.github.io","npm_package_private":"true","npm_package_readmeFilename":"README.md","npm_package_repository_type":"git","npm_package_repository_url":"https://github.com/arma73/arma73.github.io","npm_package_scripts_analyze_prod":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --analyze","npm_package_scripts_build":"run-s content build:ssg build:prod","npm_package_scripts_build_prod":"cross-env-shell NODE_ENV=production node \"./configs/scripts\"","npm_package_scripts_build_ssg":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --ssg","npm_package_scripts_content":"node configs/utils/buildContentTree.js ./src/content ./src/settings/_content.json","npm_package_scripts_debug_dev":"cross-env-shell NODE_ENV=development ndb node \"./configs/scripts\"","npm_package_scripts_debug_prod":"cross-env-shell NODE_ENV=production ndb node \"./configs/scripts\"","npm_package_scripts_debug_ssg":"cross-env-shell NODE_ENV=production ndb node \"./configs/scripts\" --ssg","npm_package_scripts_deploy":"node ./configs/deploy/ghPages","npm_package_scripts_lint":"eslint src/**/*.{js,jsx,ts,tsx} --quiet","npm_package_scripts_lint_fix":"eslint src/**/*.{js,jsx,ts,tsx} --quiet --fix","npm_package_scripts_predeploy":"run-s build","npm_package_scripts_start":"cross-env-shell NODE_ENV=development node \"./configs/scripts\"","npm_package_version":"0.0.1","NUMBER_OF_PROCESSORS":"4","NVM_HOME":"C:\\Users\\user\\AppData\\Roaming\\nvm","NVM_SYMLINK":"C:\\Program Files\\nodejs","OneDrive":"C:\\Users\\user\\OneDrive","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PATH":"C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307346133-0.2775536100596714;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307343722-0.0003793961626172848;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307342659-0.958532583449504;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\user\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python38\\Scripts;C:\\Python38;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files (x86)\\Yarn\\bin;C:\\Program Files\\MongoDB\\Server\\4.4\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\user\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\PostgreSQL\\13\\bin;C:\\Ruby27-x64\\bin;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Users\\user\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\user\\AppData\\Roaming\\npm;C:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2020.2.2\\bin;C:\\Users\\user\\AppData\\Local\\Yarn\\bin;C:\\Users\\user\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\user\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\heroku\\bin","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.RB;.RBW","PLINK_PROTOCOL":"ssh","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 42 Stepping 7, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"2a07","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules","PUBLIC":"C:\\Users\\Public","PUBLIC_URL":"/","PWD":"/c/My/Software/Projects/arma73","REACT_APP_DESCRIPTION":"portfolio for arma73","REACT_APP_HOST":"localhost","REACT_APP_NAME":"arma73","REACT_APP_PORT":"3000","REACT_APP_ROOT_DOM_NODE_ID":"app","REACT_APP_SHORT_NAME":"arma73","RUBYOPT":"-Eutf-8","SESSIONNAME":"Console","SHLVL":"2","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\Windows","TEMP":"C:\\Users\\user\\AppData\\Local\\Temp","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.54.1","TMP":"C:\\Users\\user\\AppData\\Local\\Temp","USERDOMAIN":"WIN-DUTQ08SBL96","USERDOMAIN_ROAMINGPROFILE":"WIN-DUTQ08SBL96","USERNAME":"user","USERPROFILE":"C:\\Users\\user","VLC_PLUGIN_PATH":"C:\\Users\\user\\AppData\\Local\\AzTorrent\\plugins","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-f359979e15-sock","WINDIR":"C:\\Windows","YARN_WRAP_OUTPUT":"false","_":"/usr/bin/winpty"}).REACT_APP_SC_ATTR||({"ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\user\\AppData\\Roaming","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"132458377610238835","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\crashpad_8996_BKZEXZIJHPKONUIR","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"WIN-DUTQ08SBL96","COMSPEC":"C:\\Windows\\system32\\cmd.exe","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EXEPATH":"C:\\Program Files\\Git\\bin","GIT_ASKPASS":"c:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\user","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\user","INIT_CWD":"C:\\My\\Software\\Projects\\arma73","IntelliJ IDEA Community Edition":"C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2020.2.2\\bin;","LANG":"ru_RU.UTF-8","LOCALAPPDATA":"C:\\Users\\user\\AppData\\Local","LOGONSERVER":"\\\\WIN-DUTQ08SBL96","MSYSTEM":"MINGW64","NODE":"C:\\Program Files\\nodejs\\node.exe","NODE_ENV":"production","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"predeploy\"],\"original\":[\"deploy\"]}","npm_config_bin_links":"true","npm_config_bit_registry":"https://node.bit.dev","npm_config_ignore_optional":"","npm_config_ignore_scripts":"","npm_config_init_license":"MIT","npm_config_init_version":"1.0.0","npm_config_package_lock":"","npm_config_registry":"https://registry.yarnpkg.com","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_config_user_agent":"yarn/1.22.5 npm/? node/v12.18.4 win32 x64","npm_config_version_commit_hooks":"true","npm_config_version_git_message":"v%s","npm_config_version_git_sign":"","npm_config_version_git_tag":"true","npm_config_version_tag_prefix":"v","npm_config_wrap_output":"","npm_config__bit_registry":"https://node.bit.dev","npm_execpath":"C:\\Program Files (x86)\\Yarn\\bin\\yarn.js","npm_lifecycle_event":"build:ssg","npm_lifecycle_script":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --ssg","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_author_email":"arma.biz9805@gmail.com","npm_package_author_name":"Arman Khilko","npm_package_dependencies_clsx":"^1.1.1","npm_package_dependencies_gsap":"^3.6.0","npm_package_dependencies_history":"^5.0.0","npm_package_dependencies_normalize_css":"^8.0.1","npm_package_dependencies_postcss":"^8.1.14","npm_package_dependencies_raf":"^3.4.1","npm_package_dependencies_react":"^17.0.1","npm_package_dependencies_react_document_title":"^2.0.3","npm_package_dependencies_react_dom":"^17.0.1","npm_package_dependencies_react_router_dom":"^5.2.0","npm_package_dependencies_react_spring":"^8.0.27","npm_package_dependencies_react_tiny_popover":"^6.0.3","npm_package_dependencies_styled_components":"^5.2.1","npm_package_dependencies_workbox_window":"^6.0.2","npm_package_dependencies__mdx_js_react":"^1.6.22","npm_package_devDependencies_autoprefixer":"^10.0.4","npm_package_devDependencies_babel_loader":"^8.2.2","npm_package_devDependencies_babel_plugin_styled_components":"^1.12.0","npm_package_devDependencies_babel_plugin_transform_react_remove_prop_types":"^0.4.24","npm_package_devDependencies_cache_loader":"^4.1.0","npm_package_devDependencies_case_sensitive_paths_webpack_plugin":"^2.3.0","npm_package_devDependencies_chalk":"^4.1.0","npm_package_devDependencies_cheerio":"^1.0.0-rc.5","npm_package_devDependencies_clean_webpack_plugin":"^3.0.0","npm_package_devDependencies_copy_webpack_plugin":"^6.3.2","npm_package_devDependencies_cross_env":"^7.0.3","npm_package_devDependencies_cssnano":"^4.1.10","npm_package_devDependencies_csstype":"^3.0.7","npm_package_devDependencies_css_loader":"^5.0.1","npm_package_devDependencies_css_minimizer_webpack_plugin":"^1.2.0","npm_package_devDependencies_detect_port_alt":"^1.1.6","npm_package_devDependencies_directory_tree_webpack_plugin":"^1.0.2","npm_package_devDependencies_dotenv":"^8.2.0","npm_package_devDependencies_eslint":"^7.15.0","npm_package_devDependencies_eslint_config_prettier":"^8.0.0","npm_package_devDependencies_eslint_plugin_jsx_a11y":"^6.4.1","npm_package_devDependencies_eslint_plugin_prettier":"^3.3.1","npm_package_devDependencies_eslint_plugin_react":"^7.21.5","npm_package_devDependencies_eslint_plugin_react_hooks":"^4.2.0","npm_package_devDependencies_friendly_errors_webpack_plugin":"^1.7.0","npm_package_devDependencies_front_matter":"^4.0.2","npm_package_devDependencies_gh_pages":"^3.1.0","npm_package_devDependencies_html_loader":"^1.3.2","npm_package_devDependencies_html_webpack_plugin":"^5.0.0-alpha.15","npm_package_devDependencies_husky":"^4.3.5","npm_package_devDependencies_inquirer":"^7.3.3","npm_package_devDependencies_lint_staged":"^10.5.3","npm_package_devDependencies_mini_css_extract_plugin":"^1.3.2","npm_package_devDependencies_ndb":"^1.1.5","npm_package_devDependencies_node_sass":"^5.0.0","npm_package_devDependencies_npm_run_all":"^4.1.5","npm_package_devDependencies_null_loader":"^4.0.1","npm_package_devDependencies_path_browserify":"^1.0.1","npm_package_devDependencies_postcss_calc":"^7.0.5","npm_package_devDependencies_postcss_custom_media":"^7.0.8","npm_package_devDependencies_postcss_custom_properties":"^10.0.0","npm_package_devDependencies_postcss_discard_comments":"^4.0.2","npm_package_devDependencies_postcss_import":"^13.0.0","npm_package_devDependencies_postcss_loader":"^4.1.0","npm_package_devDependencies_postcss_nested":"^5.0.3","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_scss":"^3.0.4","npm_package_devDependencies_postcss_simple_vars":"^6.0.1","npm_package_devDependencies_prettier":"^2.2.1","npm_package_devDependencies_react_hot_loader":"^4.13.0","npm_package_devDependencies_redirect_webpack_plugin":"^1.0.0","npm_package_devDependencies_remark":"^13.0.0","npm_package_devDependencies_remark_custom_blockquotes":"^1.0.1","npm_package_devDependencies_remark_emoji":"^2.1.0","npm_package_devDependencies_remark_extract_anchors":"^1.1.1","npm_package_devDependencies_remark_frontmatter":"^3.0.0","npm_package_devDependencies_remark_gfm":"^1.0.0","npm_package_devDependencies_remark_html":"^13.0.1","npm_package_devDependencies_remark_loader":"^2.0.0","npm_package_devDependencies_remark_slug":"^6.0.0","npm_package_devDependencies_sass_loader":"^10.1.0","npm_package_devDependencies_source_map_loader":"^1.1.3","npm_package_devDependencies_static_site_generator_webpack_plugin":"^3.4.2","npm_package_devDependencies_style_loader":"^2.0.0","npm_package_devDependencies_terser_webpack_plugin":"^5.0.3","npm_package_devDependencies_thread_loader":"^3.0.1","npm_package_devDependencies_ts_loader":"^8.0.17","npm_package_devDependencies_typescript":"^4.1.5","npm_package_devDependencies_webpack":"^5.12.2","npm_package_devDependencies_webpackbar":"^5.0.0-3","npm_package_devDependencies_webpack_bundle_analyzer":"^4.2.0","npm_package_devDependencies_webpack_cli":"^4.3.1","npm_package_devDependencies_webpack_dev_server":"^4.0.0-beta.0","npm_package_devDependencies_webpack_hot_middleware":"^2.25.0","npm_package_devDependencies_webpack_merge":"^5.7.3","npm_package_devDependencies_webpack_pwa_manifest":"^4.3.0","npm_package_devDependencies_workbox_webpack_plugin":"^6.0.2","npm_package_devDependencies__babel_core":"^7.12.9","npm_package_devDependencies__babel_eslint_parser":"^7.12.1","npm_package_devDependencies__babel_eslint_plugin":"^7.13.0","npm_package_devDependencies__babel_plugin_proposal_class_properties":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_decorators":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_export_default_from":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_export_namespace_from":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_optional_chaining":"^7.12.7","npm_package_devDependencies__babel_plugin_syntax_dynamic_import":"^7.8.3","npm_package_devDependencies__babel_plugin_transform_react_constant_elements":"^7.12.1","npm_package_devDependencies__babel_plugin_transform_react_jsx":"^7.12.7","npm_package_devDependencies__babel_plugin_transform_runtime":"^7.12.1","npm_package_devDependencies__babel_preset_env":"^7.12.11","npm_package_devDependencies__babel_preset_react":"^7.12.10","npm_package_devDependencies__babel_preset_typescript":"^7.13.0","npm_package_devDependencies__hot_loader_react_dom":"^17.0.1","npm_package_devDependencies__mdx_js_loader":"^1.6.22","npm_package_devDependencies__svgr_webpack":"^5.5.0","npm_package_devDependencies__typescript_eslint_eslint_plugin":"^4.15.2","npm_package_devDependencies__typescript_eslint_parser":"^4.15.2","npm_package_devDependencies__types_mdx_js__react":"^1.5.3","npm_package_devDependencies__types_react":"^17.0.2","npm_package_devDependencies__types_react_dom":"^17.0.1","npm_package_devDependencies__types_react_router_dom":"^5.1.7","npm_package_devDependencies__types_styled_components":"^5.1.7","npm_package_devDependencies__types_webpack":"^4.41.26","npm_package_engines_node":">=10.x","npm_package_homepage":"https://arma73.github.io/","npm_package_husky_hooks_pre_commit":"lint-staged","npm_package_license":"MIT","npm_package_lint_staged____ts_tsx__0":"npm run lint","npm_package_main":"dist/index.js","npm_package_name":"arma73.github.io","npm_package_private":"true","npm_package_readmeFilename":"README.md","npm_package_repository_type":"git","npm_package_repository_url":"https://github.com/arma73/arma73.github.io","npm_package_scripts_analyze_prod":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --analyze","npm_package_scripts_build":"run-s content build:ssg build:prod","npm_package_scripts_build_prod":"cross-env-shell NODE_ENV=production node \"./configs/scripts\"","npm_package_scripts_build_ssg":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --ssg","npm_package_scripts_content":"node configs/utils/buildContentTree.js ./src/content ./src/settings/_content.json","npm_package_scripts_debug_dev":"cross-env-shell NODE_ENV=development ndb node \"./configs/scripts\"","npm_package_scripts_debug_prod":"cross-env-shell NODE_ENV=production ndb node \"./configs/scripts\"","npm_package_scripts_debug_ssg":"cross-env-shell NODE_ENV=production ndb node \"./configs/scripts\" --ssg","npm_package_scripts_deploy":"node ./configs/deploy/ghPages","npm_package_scripts_lint":"eslint src/**/*.{js,jsx,ts,tsx} --quiet","npm_package_scripts_lint_fix":"eslint src/**/*.{js,jsx,ts,tsx} --quiet --fix","npm_package_scripts_predeploy":"run-s build","npm_package_scripts_start":"cross-env-shell NODE_ENV=development node \"./configs/scripts\"","npm_package_version":"0.0.1","NUMBER_OF_PROCESSORS":"4","NVM_HOME":"C:\\Users\\user\\AppData\\Roaming\\nvm","NVM_SYMLINK":"C:\\Program Files\\nodejs","OneDrive":"C:\\Users\\user\\OneDrive","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PATH":"C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307346133-0.2775536100596714;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307343722-0.0003793961626172848;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307342659-0.958532583449504;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\user\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python38\\Scripts;C:\\Python38;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files (x86)\\Yarn\\bin;C:\\Program Files\\MongoDB\\Server\\4.4\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\user\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\PostgreSQL\\13\\bin;C:\\Ruby27-x64\\bin;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Users\\user\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\user\\AppData\\Roaming\\npm;C:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2020.2.2\\bin;C:\\Users\\user\\AppData\\Local\\Yarn\\bin;C:\\Users\\user\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\user\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\heroku\\bin","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.RB;.RBW","PLINK_PROTOCOL":"ssh","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 42 Stepping 7, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"2a07","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules","PUBLIC":"C:\\Users\\Public","PUBLIC_URL":"/","PWD":"/c/My/Software/Projects/arma73","REACT_APP_DESCRIPTION":"portfolio for arma73","REACT_APP_HOST":"localhost","REACT_APP_NAME":"arma73","REACT_APP_PORT":"3000","REACT_APP_ROOT_DOM_NODE_ID":"app","REACT_APP_SHORT_NAME":"arma73","RUBYOPT":"-Eutf-8","SESSIONNAME":"Console","SHLVL":"2","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\Windows","TEMP":"C:\\Users\\user\\AppData\\Local\\Temp","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.54.1","TMP":"C:\\Users\\user\\AppData\\Local\\Temp","USERDOMAIN":"WIN-DUTQ08SBL96","USERDOMAIN_ROAMINGPROFILE":"WIN-DUTQ08SBL96","USERNAME":"user","USERPROFILE":"C:\\Users\\user","VLC_PLUGIN_PATH":"C:\\Users\\user\\AppData\\Local\\AzTorrent\\plugins","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-f359979e15-sock","WINDIR":"C:\\Windows","YARN_WRAP_OUTPUT":"false","_":"/usr/bin/winpty"}).SC_ATTR)||"data-styled",C="5.2.1",A="undefined"!=typeof window&&"HTMLElement"in window,I=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY: true&&void 0!==({"ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\user\\AppData\\Roaming","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"132458377610238835","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\crashpad_8996_BKZEXZIJHPKONUIR","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"WIN-DUTQ08SBL96","COMSPEC":"C:\\Windows\\system32\\cmd.exe","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EXEPATH":"C:\\Program Files\\Git\\bin","GIT_ASKPASS":"c:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\user","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\user","INIT_CWD":"C:\\My\\Software\\Projects\\arma73","IntelliJ IDEA Community Edition":"C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2020.2.2\\bin;","LANG":"ru_RU.UTF-8","LOCALAPPDATA":"C:\\Users\\user\\AppData\\Local","LOGONSERVER":"\\\\WIN-DUTQ08SBL96","MSYSTEM":"MINGW64","NODE":"C:\\Program Files\\nodejs\\node.exe","NODE_ENV":"production","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"predeploy\"],\"original\":[\"deploy\"]}","npm_config_bin_links":"true","npm_config_bit_registry":"https://node.bit.dev","npm_config_ignore_optional":"","npm_config_ignore_scripts":"","npm_config_init_license":"MIT","npm_config_init_version":"1.0.0","npm_config_package_lock":"","npm_config_registry":"https://registry.yarnpkg.com","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_config_user_agent":"yarn/1.22.5 npm/? node/v12.18.4 win32 x64","npm_config_version_commit_hooks":"true","npm_config_version_git_message":"v%s","npm_config_version_git_sign":"","npm_config_version_git_tag":"true","npm_config_version_tag_prefix":"v","npm_config_wrap_output":"","npm_config__bit_registry":"https://node.bit.dev","npm_execpath":"C:\\Program Files (x86)\\Yarn\\bin\\yarn.js","npm_lifecycle_event":"build:ssg","npm_lifecycle_script":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --ssg","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_author_email":"arma.biz9805@gmail.com","npm_package_author_name":"Arman Khilko","npm_package_dependencies_clsx":"^1.1.1","npm_package_dependencies_gsap":"^3.6.0","npm_package_dependencies_history":"^5.0.0","npm_package_dependencies_normalize_css":"^8.0.1","npm_package_dependencies_postcss":"^8.1.14","npm_package_dependencies_raf":"^3.4.1","npm_package_dependencies_react":"^17.0.1","npm_package_dependencies_react_document_title":"^2.0.3","npm_package_dependencies_react_dom":"^17.0.1","npm_package_dependencies_react_router_dom":"^5.2.0","npm_package_dependencies_react_spring":"^8.0.27","npm_package_dependencies_react_tiny_popover":"^6.0.3","npm_package_dependencies_styled_components":"^5.2.1","npm_package_dependencies_workbox_window":"^6.0.2","npm_package_dependencies__mdx_js_react":"^1.6.22","npm_package_devDependencies_autoprefixer":"^10.0.4","npm_package_devDependencies_babel_loader":"^8.2.2","npm_package_devDependencies_babel_plugin_styled_components":"^1.12.0","npm_package_devDependencies_babel_plugin_transform_react_remove_prop_types":"^0.4.24","npm_package_devDependencies_cache_loader":"^4.1.0","npm_package_devDependencies_case_sensitive_paths_webpack_plugin":"^2.3.0","npm_package_devDependencies_chalk":"^4.1.0","npm_package_devDependencies_cheerio":"^1.0.0-rc.5","npm_package_devDependencies_clean_webpack_plugin":"^3.0.0","npm_package_devDependencies_copy_webpack_plugin":"^6.3.2","npm_package_devDependencies_cross_env":"^7.0.3","npm_package_devDependencies_cssnano":"^4.1.10","npm_package_devDependencies_csstype":"^3.0.7","npm_package_devDependencies_css_loader":"^5.0.1","npm_package_devDependencies_css_minimizer_webpack_plugin":"^1.2.0","npm_package_devDependencies_detect_port_alt":"^1.1.6","npm_package_devDependencies_directory_tree_webpack_plugin":"^1.0.2","npm_package_devDependencies_dotenv":"^8.2.0","npm_package_devDependencies_eslint":"^7.15.0","npm_package_devDependencies_eslint_config_prettier":"^8.0.0","npm_package_devDependencies_eslint_plugin_jsx_a11y":"^6.4.1","npm_package_devDependencies_eslint_plugin_prettier":"^3.3.1","npm_package_devDependencies_eslint_plugin_react":"^7.21.5","npm_package_devDependencies_eslint_plugin_react_hooks":"^4.2.0","npm_package_devDependencies_friendly_errors_webpack_plugin":"^1.7.0","npm_package_devDependencies_front_matter":"^4.0.2","npm_package_devDependencies_gh_pages":"^3.1.0","npm_package_devDependencies_html_loader":"^1.3.2","npm_package_devDependencies_html_webpack_plugin":"^5.0.0-alpha.15","npm_package_devDependencies_husky":"^4.3.5","npm_package_devDependencies_inquirer":"^7.3.3","npm_package_devDependencies_lint_staged":"^10.5.3","npm_package_devDependencies_mini_css_extract_plugin":"^1.3.2","npm_package_devDependencies_ndb":"^1.1.5","npm_package_devDependencies_node_sass":"^5.0.0","npm_package_devDependencies_npm_run_all":"^4.1.5","npm_package_devDependencies_null_loader":"^4.0.1","npm_package_devDependencies_path_browserify":"^1.0.1","npm_package_devDependencies_postcss_calc":"^7.0.5","npm_package_devDependencies_postcss_custom_media":"^7.0.8","npm_package_devDependencies_postcss_custom_properties":"^10.0.0","npm_package_devDependencies_postcss_discard_comments":"^4.0.2","npm_package_devDependencies_postcss_import":"^13.0.0","npm_package_devDependencies_postcss_loader":"^4.1.0","npm_package_devDependencies_postcss_nested":"^5.0.3","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_scss":"^3.0.4","npm_package_devDependencies_postcss_simple_vars":"^6.0.1","npm_package_devDependencies_prettier":"^2.2.1","npm_package_devDependencies_react_hot_loader":"^4.13.0","npm_package_devDependencies_redirect_webpack_plugin":"^1.0.0","npm_package_devDependencies_remark":"^13.0.0","npm_package_devDependencies_remark_custom_blockquotes":"^1.0.1","npm_package_devDependencies_remark_emoji":"^2.1.0","npm_package_devDependencies_remark_extract_anchors":"^1.1.1","npm_package_devDependencies_remark_frontmatter":"^3.0.0","npm_package_devDependencies_remark_gfm":"^1.0.0","npm_package_devDependencies_remark_html":"^13.0.1","npm_package_devDependencies_remark_loader":"^2.0.0","npm_package_devDependencies_remark_slug":"^6.0.0","npm_package_devDependencies_sass_loader":"^10.1.0","npm_package_devDependencies_source_map_loader":"^1.1.3","npm_package_devDependencies_static_site_generator_webpack_plugin":"^3.4.2","npm_package_devDependencies_style_loader":"^2.0.0","npm_package_devDependencies_terser_webpack_plugin":"^5.0.3","npm_package_devDependencies_thread_loader":"^3.0.1","npm_package_devDependencies_ts_loader":"^8.0.17","npm_package_devDependencies_typescript":"^4.1.5","npm_package_devDependencies_webpack":"^5.12.2","npm_package_devDependencies_webpackbar":"^5.0.0-3","npm_package_devDependencies_webpack_bundle_analyzer":"^4.2.0","npm_package_devDependencies_webpack_cli":"^4.3.1","npm_package_devDependencies_webpack_dev_server":"^4.0.0-beta.0","npm_package_devDependencies_webpack_hot_middleware":"^2.25.0","npm_package_devDependencies_webpack_merge":"^5.7.3","npm_package_devDependencies_webpack_pwa_manifest":"^4.3.0","npm_package_devDependencies_workbox_webpack_plugin":"^6.0.2","npm_package_devDependencies__babel_core":"^7.12.9","npm_package_devDependencies__babel_eslint_parser":"^7.12.1","npm_package_devDependencies__babel_eslint_plugin":"^7.13.0","npm_package_devDependencies__babel_plugin_proposal_class_properties":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_decorators":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_export_default_from":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_export_namespace_from":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_optional_chaining":"^7.12.7","npm_package_devDependencies__babel_plugin_syntax_dynamic_import":"^7.8.3","npm_package_devDependencies__babel_plugin_transform_react_constant_elements":"^7.12.1","npm_package_devDependencies__babel_plugin_transform_react_jsx":"^7.12.7","npm_package_devDependencies__babel_plugin_transform_runtime":"^7.12.1","npm_package_devDependencies__babel_preset_env":"^7.12.11","npm_package_devDependencies__babel_preset_react":"^7.12.10","npm_package_devDependencies__babel_preset_typescript":"^7.13.0","npm_package_devDependencies__hot_loader_react_dom":"^17.0.1","npm_package_devDependencies__mdx_js_loader":"^1.6.22","npm_package_devDependencies__svgr_webpack":"^5.5.0","npm_package_devDependencies__typescript_eslint_eslint_plugin":"^4.15.2","npm_package_devDependencies__typescript_eslint_parser":"^4.15.2","npm_package_devDependencies__types_mdx_js__react":"^1.5.3","npm_package_devDependencies__types_react":"^17.0.2","npm_package_devDependencies__types_react_dom":"^17.0.1","npm_package_devDependencies__types_react_router_dom":"^5.1.7","npm_package_devDependencies__types_styled_components":"^5.1.7","npm_package_devDependencies__types_webpack":"^4.41.26","npm_package_engines_node":">=10.x","npm_package_homepage":"https://arma73.github.io/","npm_package_husky_hooks_pre_commit":"lint-staged","npm_package_license":"MIT","npm_package_lint_staged____ts_tsx__0":"npm run lint","npm_package_main":"dist/index.js","npm_package_name":"arma73.github.io","npm_package_private":"true","npm_package_readmeFilename":"README.md","npm_package_repository_type":"git","npm_package_repository_url":"https://github.com/arma73/arma73.github.io","npm_package_scripts_analyze_prod":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --analyze","npm_package_scripts_build":"run-s content build:ssg build:prod","npm_package_scripts_build_prod":"cross-env-shell NODE_ENV=production node \"./configs/scripts\"","npm_package_scripts_build_ssg":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --ssg","npm_package_scripts_content":"node configs/utils/buildContentTree.js ./src/content ./src/settings/_content.json","npm_package_scripts_debug_dev":"cross-env-shell NODE_ENV=development ndb node \"./configs/scripts\"","npm_package_scripts_debug_prod":"cross-env-shell NODE_ENV=production ndb node \"./configs/scripts\"","npm_package_scripts_debug_ssg":"cross-env-shell NODE_ENV=production ndb node \"./configs/scripts\" --ssg","npm_package_scripts_deploy":"node ./configs/deploy/ghPages","npm_package_scripts_lint":"eslint src/**/*.{js,jsx,ts,tsx} --quiet","npm_package_scripts_lint_fix":"eslint src/**/*.{js,jsx,ts,tsx} --quiet --fix","npm_package_scripts_predeploy":"run-s build","npm_package_scripts_start":"cross-env-shell NODE_ENV=development node \"./configs/scripts\"","npm_package_version":"0.0.1","NUMBER_OF_PROCESSORS":"4","NVM_HOME":"C:\\Users\\user\\AppData\\Roaming\\nvm","NVM_SYMLINK":"C:\\Program Files\\nodejs","OneDrive":"C:\\Users\\user\\OneDrive","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PATH":"C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307346133-0.2775536100596714;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307343722-0.0003793961626172848;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307342659-0.958532583449504;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\user\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python38\\Scripts;C:\\Python38;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files (x86)\\Yarn\\bin;C:\\Program Files\\MongoDB\\Server\\4.4\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\user\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\PostgreSQL\\13\\bin;C:\\Ruby27-x64\\bin;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Users\\user\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\user\\AppData\\Roaming\\npm;C:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2020.2.2\\bin;C:\\Users\\user\\AppData\\Local\\Yarn\\bin;C:\\Users\\user\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\user\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\heroku\\bin","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.RB;.RBW","PLINK_PROTOCOL":"ssh","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 42 Stepping 7, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"2a07","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules","PUBLIC":"C:\\Users\\Public","PUBLIC_URL":"/","PWD":"/c/My/Software/Projects/arma73","REACT_APP_DESCRIPTION":"portfolio for arma73","REACT_APP_HOST":"localhost","REACT_APP_NAME":"arma73","REACT_APP_PORT":"3000","REACT_APP_ROOT_DOM_NODE_ID":"app","REACT_APP_SHORT_NAME":"arma73","RUBYOPT":"-Eutf-8","SESSIONNAME":"Console","SHLVL":"2","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\Windows","TEMP":"C:\\Users\\user\\AppData\\Local\\Temp","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.54.1","TMP":"C:\\Users\\user\\AppData\\Local\\Temp","USERDOMAIN":"WIN-DUTQ08SBL96","USERDOMAIN_ROAMINGPROFILE":"WIN-DUTQ08SBL96","USERNAME":"user","USERPROFILE":"C:\\Users\\user","VLC_PLUGIN_PATH":"C:\\Users\\user\\AppData\\Local\\AzTorrent\\plugins","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-f359979e15-sock","WINDIR":"C:\\Windows","YARN_WRAP_OUTPUT":"false","_":"/usr/bin/winpty"}).REACT_APP_SC_DISABLE_SPEEDY&&""!==({"ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\user\\AppData\\Roaming","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"132458377610238835","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\crashpad_8996_BKZEXZIJHPKONUIR","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"WIN-DUTQ08SBL96","COMSPEC":"C:\\Windows\\system32\\cmd.exe","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EXEPATH":"C:\\Program Files\\Git\\bin","GIT_ASKPASS":"c:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\user","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\user","INIT_CWD":"C:\\My\\Software\\Projects\\arma73","IntelliJ IDEA Community Edition":"C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2020.2.2\\bin;","LANG":"ru_RU.UTF-8","LOCALAPPDATA":"C:\\Users\\user\\AppData\\Local","LOGONSERVER":"\\\\WIN-DUTQ08SBL96","MSYSTEM":"MINGW64","NODE":"C:\\Program Files\\nodejs\\node.exe","NODE_ENV":"production","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"predeploy\"],\"original\":[\"deploy\"]}","npm_config_bin_links":"true","npm_config_bit_registry":"https://node.bit.dev","npm_config_ignore_optional":"","npm_config_ignore_scripts":"","npm_config_init_license":"MIT","npm_config_init_version":"1.0.0","npm_config_package_lock":"","npm_config_registry":"https://registry.yarnpkg.com","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_config_user_agent":"yarn/1.22.5 npm/? node/v12.18.4 win32 x64","npm_config_version_commit_hooks":"true","npm_config_version_git_message":"v%s","npm_config_version_git_sign":"","npm_config_version_git_tag":"true","npm_config_version_tag_prefix":"v","npm_config_wrap_output":"","npm_config__bit_registry":"https://node.bit.dev","npm_execpath":"C:\\Program Files (x86)\\Yarn\\bin\\yarn.js","npm_lifecycle_event":"build:ssg","npm_lifecycle_script":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --ssg","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_author_email":"arma.biz9805@gmail.com","npm_package_author_name":"Arman Khilko","npm_package_dependencies_clsx":"^1.1.1","npm_package_dependencies_gsap":"^3.6.0","npm_package_dependencies_history":"^5.0.0","npm_package_dependencies_normalize_css":"^8.0.1","npm_package_dependencies_postcss":"^8.1.14","npm_package_dependencies_raf":"^3.4.1","npm_package_dependencies_react":"^17.0.1","npm_package_dependencies_react_document_title":"^2.0.3","npm_package_dependencies_react_dom":"^17.0.1","npm_package_dependencies_react_router_dom":"^5.2.0","npm_package_dependencies_react_spring":"^8.0.27","npm_package_dependencies_react_tiny_popover":"^6.0.3","npm_package_dependencies_styled_components":"^5.2.1","npm_package_dependencies_workbox_window":"^6.0.2","npm_package_dependencies__mdx_js_react":"^1.6.22","npm_package_devDependencies_autoprefixer":"^10.0.4","npm_package_devDependencies_babel_loader":"^8.2.2","npm_package_devDependencies_babel_plugin_styled_components":"^1.12.0","npm_package_devDependencies_babel_plugin_transform_react_remove_prop_types":"^0.4.24","npm_package_devDependencies_cache_loader":"^4.1.0","npm_package_devDependencies_case_sensitive_paths_webpack_plugin":"^2.3.0","npm_package_devDependencies_chalk":"^4.1.0","npm_package_devDependencies_cheerio":"^1.0.0-rc.5","npm_package_devDependencies_clean_webpack_plugin":"^3.0.0","npm_package_devDependencies_copy_webpack_plugin":"^6.3.2","npm_package_devDependencies_cross_env":"^7.0.3","npm_package_devDependencies_cssnano":"^4.1.10","npm_package_devDependencies_csstype":"^3.0.7","npm_package_devDependencies_css_loader":"^5.0.1","npm_package_devDependencies_css_minimizer_webpack_plugin":"^1.2.0","npm_package_devDependencies_detect_port_alt":"^1.1.6","npm_package_devDependencies_directory_tree_webpack_plugin":"^1.0.2","npm_package_devDependencies_dotenv":"^8.2.0","npm_package_devDependencies_eslint":"^7.15.0","npm_package_devDependencies_eslint_config_prettier":"^8.0.0","npm_package_devDependencies_eslint_plugin_jsx_a11y":"^6.4.1","npm_package_devDependencies_eslint_plugin_prettier":"^3.3.1","npm_package_devDependencies_eslint_plugin_react":"^7.21.5","npm_package_devDependencies_eslint_plugin_react_hooks":"^4.2.0","npm_package_devDependencies_friendly_errors_webpack_plugin":"^1.7.0","npm_package_devDependencies_front_matter":"^4.0.2","npm_package_devDependencies_gh_pages":"^3.1.0","npm_package_devDependencies_html_loader":"^1.3.2","npm_package_devDependencies_html_webpack_plugin":"^5.0.0-alpha.15","npm_package_devDependencies_husky":"^4.3.5","npm_package_devDependencies_inquirer":"^7.3.3","npm_package_devDependencies_lint_staged":"^10.5.3","npm_package_devDependencies_mini_css_extract_plugin":"^1.3.2","npm_package_devDependencies_ndb":"^1.1.5","npm_package_devDependencies_node_sass":"^5.0.0","npm_package_devDependencies_npm_run_all":"^4.1.5","npm_package_devDependencies_null_loader":"^4.0.1","npm_package_devDependencies_path_browserify":"^1.0.1","npm_package_devDependencies_postcss_calc":"^7.0.5","npm_package_devDependencies_postcss_custom_media":"^7.0.8","npm_package_devDependencies_postcss_custom_properties":"^10.0.0","npm_package_devDependencies_postcss_discard_comments":"^4.0.2","npm_package_devDependencies_postcss_import":"^13.0.0","npm_package_devDependencies_postcss_loader":"^4.1.0","npm_package_devDependencies_postcss_nested":"^5.0.3","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_scss":"^3.0.4","npm_package_devDependencies_postcss_simple_vars":"^6.0.1","npm_package_devDependencies_prettier":"^2.2.1","npm_package_devDependencies_react_hot_loader":"^4.13.0","npm_package_devDependencies_redirect_webpack_plugin":"^1.0.0","npm_package_devDependencies_remark":"^13.0.0","npm_package_devDependencies_remark_custom_blockquotes":"^1.0.1","npm_package_devDependencies_remark_emoji":"^2.1.0","npm_package_devDependencies_remark_extract_anchors":"^1.1.1","npm_package_devDependencies_remark_frontmatter":"^3.0.0","npm_package_devDependencies_remark_gfm":"^1.0.0","npm_package_devDependencies_remark_html":"^13.0.1","npm_package_devDependencies_remark_loader":"^2.0.0","npm_package_devDependencies_remark_slug":"^6.0.0","npm_package_devDependencies_sass_loader":"^10.1.0","npm_package_devDependencies_source_map_loader":"^1.1.3","npm_package_devDependencies_static_site_generator_webpack_plugin":"^3.4.2","npm_package_devDependencies_style_loader":"^2.0.0","npm_package_devDependencies_terser_webpack_plugin":"^5.0.3","npm_package_devDependencies_thread_loader":"^3.0.1","npm_package_devDependencies_ts_loader":"^8.0.17","npm_package_devDependencies_typescript":"^4.1.5","npm_package_devDependencies_webpack":"^5.12.2","npm_package_devDependencies_webpackbar":"^5.0.0-3","npm_package_devDependencies_webpack_bundle_analyzer":"^4.2.0","npm_package_devDependencies_webpack_cli":"^4.3.1","npm_package_devDependencies_webpack_dev_server":"^4.0.0-beta.0","npm_package_devDependencies_webpack_hot_middleware":"^2.25.0","npm_package_devDependencies_webpack_merge":"^5.7.3","npm_package_devDependencies_webpack_pwa_manifest":"^4.3.0","npm_package_devDependencies_workbox_webpack_plugin":"^6.0.2","npm_package_devDependencies__babel_core":"^7.12.9","npm_package_devDependencies__babel_eslint_parser":"^7.12.1","npm_package_devDependencies__babel_eslint_plugin":"^7.13.0","npm_package_devDependencies__babel_plugin_proposal_class_properties":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_decorators":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_export_default_from":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_export_namespace_from":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_optional_chaining":"^7.12.7","npm_package_devDependencies__babel_plugin_syntax_dynamic_import":"^7.8.3","npm_package_devDependencies__babel_plugin_transform_react_constant_elements":"^7.12.1","npm_package_devDependencies__babel_plugin_transform_react_jsx":"^7.12.7","npm_package_devDependencies__babel_plugin_transform_runtime":"^7.12.1","npm_package_devDependencies__babel_preset_env":"^7.12.11","npm_package_devDependencies__babel_preset_react":"^7.12.10","npm_package_devDependencies__babel_preset_typescript":"^7.13.0","npm_package_devDependencies__hot_loader_react_dom":"^17.0.1","npm_package_devDependencies__mdx_js_loader":"^1.6.22","npm_package_devDependencies__svgr_webpack":"^5.5.0","npm_package_devDependencies__typescript_eslint_eslint_plugin":"^4.15.2","npm_package_devDependencies__typescript_eslint_parser":"^4.15.2","npm_package_devDependencies__types_mdx_js__react":"^1.5.3","npm_package_devDependencies__types_react":"^17.0.2","npm_package_devDependencies__types_react_dom":"^17.0.1","npm_package_devDependencies__types_react_router_dom":"^5.1.7","npm_package_devDependencies__types_styled_components":"^5.1.7","npm_package_devDependencies__types_webpack":"^4.41.26","npm_package_engines_node":">=10.x","npm_package_homepage":"https://arma73.github.io/","npm_package_husky_hooks_pre_commit":"lint-staged","npm_package_license":"MIT","npm_package_lint_staged____ts_tsx__0":"npm run lint","npm_package_main":"dist/index.js","npm_package_name":"arma73.github.io","npm_package_private":"true","npm_package_readmeFilename":"README.md","npm_package_repository_type":"git","npm_package_repository_url":"https://github.com/arma73/arma73.github.io","npm_package_scripts_analyze_prod":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --analyze","npm_package_scripts_build":"run-s content build:ssg build:prod","npm_package_scripts_build_prod":"cross-env-shell NODE_ENV=production node \"./configs/scripts\"","npm_package_scripts_build_ssg":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --ssg","npm_package_scripts_content":"node configs/utils/buildContentTree.js ./src/content ./src/settings/_content.json","npm_package_scripts_debug_dev":"cross-env-shell NODE_ENV=development ndb node \"./configs/scripts\"","npm_package_scripts_debug_prod":"cross-env-shell NODE_ENV=production ndb node \"./configs/scripts\"","npm_package_scripts_debug_ssg":"cross-env-shell NODE_ENV=production ndb node \"./configs/scripts\" --ssg","npm_package_scripts_deploy":"node ./configs/deploy/ghPages","npm_package_scripts_lint":"eslint src/**/*.{js,jsx,ts,tsx} --quiet","npm_package_scripts_lint_fix":"eslint src/**/*.{js,jsx,ts,tsx} --quiet --fix","npm_package_scripts_predeploy":"run-s build","npm_package_scripts_start":"cross-env-shell NODE_ENV=development node \"./configs/scripts\"","npm_package_version":"0.0.1","NUMBER_OF_PROCESSORS":"4","NVM_HOME":"C:\\Users\\user\\AppData\\Roaming\\nvm","NVM_SYMLINK":"C:\\Program Files\\nodejs","OneDrive":"C:\\Users\\user\\OneDrive","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PATH":"C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307346133-0.2775536100596714;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307343722-0.0003793961626172848;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307342659-0.958532583449504;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\user\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python38\\Scripts;C:\\Python38;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files (x86)\\Yarn\\bin;C:\\Program Files\\MongoDB\\Server\\4.4\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\user\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\PostgreSQL\\13\\bin;C:\\Ruby27-x64\\bin;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Users\\user\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\user\\AppData\\Roaming\\npm;C:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2020.2.2\\bin;C:\\Users\\user\\AppData\\Local\\Yarn\\bin;C:\\Users\\user\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\user\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\heroku\\bin","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.RB;.RBW","PLINK_PROTOCOL":"ssh","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 42 Stepping 7, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"2a07","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules","PUBLIC":"C:\\Users\\Public","PUBLIC_URL":"/","PWD":"/c/My/Software/Projects/arma73","REACT_APP_DESCRIPTION":"portfolio for arma73","REACT_APP_HOST":"localhost","REACT_APP_NAME":"arma73","REACT_APP_PORT":"3000","REACT_APP_ROOT_DOM_NODE_ID":"app","REACT_APP_SHORT_NAME":"arma73","RUBYOPT":"-Eutf-8","SESSIONNAME":"Console","SHLVL":"2","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\Windows","TEMP":"C:\\Users\\user\\AppData\\Local\\Temp","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.54.1","TMP":"C:\\Users\\user\\AppData\\Local\\Temp","USERDOMAIN":"WIN-DUTQ08SBL96","USERDOMAIN_ROAMINGPROFILE":"WIN-DUTQ08SBL96","USERNAME":"user","USERPROFILE":"C:\\Users\\user","VLC_PLUGIN_PATH":"C:\\Users\\user\\AppData\\Local\\AzTorrent\\plugins","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-f359979e15-sock","WINDIR":"C:\\Windows","YARN_WRAP_OUTPUT":"false","_":"/usr/bin/winpty"}).REACT_APP_SC_DISABLE_SPEEDY?"false"!==({"ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\user\\AppData\\Roaming","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"132458377610238835","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\crashpad_8996_BKZEXZIJHPKONUIR","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"WIN-DUTQ08SBL96","COMSPEC":"C:\\Windows\\system32\\cmd.exe","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EXEPATH":"C:\\Program Files\\Git\\bin","GIT_ASKPASS":"c:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\user","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\user","INIT_CWD":"C:\\My\\Software\\Projects\\arma73","IntelliJ IDEA Community Edition":"C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2020.2.2\\bin;","LANG":"ru_RU.UTF-8","LOCALAPPDATA":"C:\\Users\\user\\AppData\\Local","LOGONSERVER":"\\\\WIN-DUTQ08SBL96","MSYSTEM":"MINGW64","NODE":"C:\\Program Files\\nodejs\\node.exe","NODE_ENV":"production","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"predeploy\"],\"original\":[\"deploy\"]}","npm_config_bin_links":"true","npm_config_bit_registry":"https://node.bit.dev","npm_config_ignore_optional":"","npm_config_ignore_scripts":"","npm_config_init_license":"MIT","npm_config_init_version":"1.0.0","npm_config_package_lock":"","npm_config_registry":"https://registry.yarnpkg.com","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_config_user_agent":"yarn/1.22.5 npm/? node/v12.18.4 win32 x64","npm_config_version_commit_hooks":"true","npm_config_version_git_message":"v%s","npm_config_version_git_sign":"","npm_config_version_git_tag":"true","npm_config_version_tag_prefix":"v","npm_config_wrap_output":"","npm_config__bit_registry":"https://node.bit.dev","npm_execpath":"C:\\Program Files (x86)\\Yarn\\bin\\yarn.js","npm_lifecycle_event":"build:ssg","npm_lifecycle_script":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --ssg","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_author_email":"arma.biz9805@gmail.com","npm_package_author_name":"Arman Khilko","npm_package_dependencies_clsx":"^1.1.1","npm_package_dependencies_gsap":"^3.6.0","npm_package_dependencies_history":"^5.0.0","npm_package_dependencies_normalize_css":"^8.0.1","npm_package_dependencies_postcss":"^8.1.14","npm_package_dependencies_raf":"^3.4.1","npm_package_dependencies_react":"^17.0.1","npm_package_dependencies_react_document_title":"^2.0.3","npm_package_dependencies_react_dom":"^17.0.1","npm_package_dependencies_react_router_dom":"^5.2.0","npm_package_dependencies_react_spring":"^8.0.27","npm_package_dependencies_react_tiny_popover":"^6.0.3","npm_package_dependencies_styled_components":"^5.2.1","npm_package_dependencies_workbox_window":"^6.0.2","npm_package_dependencies__mdx_js_react":"^1.6.22","npm_package_devDependencies_autoprefixer":"^10.0.4","npm_package_devDependencies_babel_loader":"^8.2.2","npm_package_devDependencies_babel_plugin_styled_components":"^1.12.0","npm_package_devDependencies_babel_plugin_transform_react_remove_prop_types":"^0.4.24","npm_package_devDependencies_cache_loader":"^4.1.0","npm_package_devDependencies_case_sensitive_paths_webpack_plugin":"^2.3.0","npm_package_devDependencies_chalk":"^4.1.0","npm_package_devDependencies_cheerio":"^1.0.0-rc.5","npm_package_devDependencies_clean_webpack_plugin":"^3.0.0","npm_package_devDependencies_copy_webpack_plugin":"^6.3.2","npm_package_devDependencies_cross_env":"^7.0.3","npm_package_devDependencies_cssnano":"^4.1.10","npm_package_devDependencies_csstype":"^3.0.7","npm_package_devDependencies_css_loader":"^5.0.1","npm_package_devDependencies_css_minimizer_webpack_plugin":"^1.2.0","npm_package_devDependencies_detect_port_alt":"^1.1.6","npm_package_devDependencies_directory_tree_webpack_plugin":"^1.0.2","npm_package_devDependencies_dotenv":"^8.2.0","npm_package_devDependencies_eslint":"^7.15.0","npm_package_devDependencies_eslint_config_prettier":"^8.0.0","npm_package_devDependencies_eslint_plugin_jsx_a11y":"^6.4.1","npm_package_devDependencies_eslint_plugin_prettier":"^3.3.1","npm_package_devDependencies_eslint_plugin_react":"^7.21.5","npm_package_devDependencies_eslint_plugin_react_hooks":"^4.2.0","npm_package_devDependencies_friendly_errors_webpack_plugin":"^1.7.0","npm_package_devDependencies_front_matter":"^4.0.2","npm_package_devDependencies_gh_pages":"^3.1.0","npm_package_devDependencies_html_loader":"^1.3.2","npm_package_devDependencies_html_webpack_plugin":"^5.0.0-alpha.15","npm_package_devDependencies_husky":"^4.3.5","npm_package_devDependencies_inquirer":"^7.3.3","npm_package_devDependencies_lint_staged":"^10.5.3","npm_package_devDependencies_mini_css_extract_plugin":"^1.3.2","npm_package_devDependencies_ndb":"^1.1.5","npm_package_devDependencies_node_sass":"^5.0.0","npm_package_devDependencies_npm_run_all":"^4.1.5","npm_package_devDependencies_null_loader":"^4.0.1","npm_package_devDependencies_path_browserify":"^1.0.1","npm_package_devDependencies_postcss_calc":"^7.0.5","npm_package_devDependencies_postcss_custom_media":"^7.0.8","npm_package_devDependencies_postcss_custom_properties":"^10.0.0","npm_package_devDependencies_postcss_discard_comments":"^4.0.2","npm_package_devDependencies_postcss_import":"^13.0.0","npm_package_devDependencies_postcss_loader":"^4.1.0","npm_package_devDependencies_postcss_nested":"^5.0.3","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_scss":"^3.0.4","npm_package_devDependencies_postcss_simple_vars":"^6.0.1","npm_package_devDependencies_prettier":"^2.2.1","npm_package_devDependencies_react_hot_loader":"^4.13.0","npm_package_devDependencies_redirect_webpack_plugin":"^1.0.0","npm_package_devDependencies_remark":"^13.0.0","npm_package_devDependencies_remark_custom_blockquotes":"^1.0.1","npm_package_devDependencies_remark_emoji":"^2.1.0","npm_package_devDependencies_remark_extract_anchors":"^1.1.1","npm_package_devDependencies_remark_frontmatter":"^3.0.0","npm_package_devDependencies_remark_gfm":"^1.0.0","npm_package_devDependencies_remark_html":"^13.0.1","npm_package_devDependencies_remark_loader":"^2.0.0","npm_package_devDependencies_remark_slug":"^6.0.0","npm_package_devDependencies_sass_loader":"^10.1.0","npm_package_devDependencies_source_map_loader":"^1.1.3","npm_package_devDependencies_static_site_generator_webpack_plugin":"^3.4.2","npm_package_devDependencies_style_loader":"^2.0.0","npm_package_devDependencies_terser_webpack_plugin":"^5.0.3","npm_package_devDependencies_thread_loader":"^3.0.1","npm_package_devDependencies_ts_loader":"^8.0.17","npm_package_devDependencies_typescript":"^4.1.5","npm_package_devDependencies_webpack":"^5.12.2","npm_package_devDependencies_webpackbar":"^5.0.0-3","npm_package_devDependencies_webpack_bundle_analyzer":"^4.2.0","npm_package_devDependencies_webpack_cli":"^4.3.1","npm_package_devDependencies_webpack_dev_server":"^4.0.0-beta.0","npm_package_devDependencies_webpack_hot_middleware":"^2.25.0","npm_package_devDependencies_webpack_merge":"^5.7.3","npm_package_devDependencies_webpack_pwa_manifest":"^4.3.0","npm_package_devDependencies_workbox_webpack_plugin":"^6.0.2","npm_package_devDependencies__babel_core":"^7.12.9","npm_package_devDependencies__babel_eslint_parser":"^7.12.1","npm_package_devDependencies__babel_eslint_plugin":"^7.13.0","npm_package_devDependencies__babel_plugin_proposal_class_properties":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_decorators":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_export_default_from":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_export_namespace_from":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_optional_chaining":"^7.12.7","npm_package_devDependencies__babel_plugin_syntax_dynamic_import":"^7.8.3","npm_package_devDependencies__babel_plugin_transform_react_constant_elements":"^7.12.1","npm_package_devDependencies__babel_plugin_transform_react_jsx":"^7.12.7","npm_package_devDependencies__babel_plugin_transform_runtime":"^7.12.1","npm_package_devDependencies__babel_preset_env":"^7.12.11","npm_package_devDependencies__babel_preset_react":"^7.12.10","npm_package_devDependencies__babel_preset_typescript":"^7.13.0","npm_package_devDependencies__hot_loader_react_dom":"^17.0.1","npm_package_devDependencies__mdx_js_loader":"^1.6.22","npm_package_devDependencies__svgr_webpack":"^5.5.0","npm_package_devDependencies__typescript_eslint_eslint_plugin":"^4.15.2","npm_package_devDependencies__typescript_eslint_parser":"^4.15.2","npm_package_devDependencies__types_mdx_js__react":"^1.5.3","npm_package_devDependencies__types_react":"^17.0.2","npm_package_devDependencies__types_react_dom":"^17.0.1","npm_package_devDependencies__types_react_router_dom":"^5.1.7","npm_package_devDependencies__types_styled_components":"^5.1.7","npm_package_devDependencies__types_webpack":"^4.41.26","npm_package_engines_node":">=10.x","npm_package_homepage":"https://arma73.github.io/","npm_package_husky_hooks_pre_commit":"lint-staged","npm_package_license":"MIT","npm_package_lint_staged____ts_tsx__0":"npm run lint","npm_package_main":"dist/index.js","npm_package_name":"arma73.github.io","npm_package_private":"true","npm_package_readmeFilename":"README.md","npm_package_repository_type":"git","npm_package_repository_url":"https://github.com/arma73/arma73.github.io","npm_package_scripts_analyze_prod":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --analyze","npm_package_scripts_build":"run-s content build:ssg build:prod","npm_package_scripts_build_prod":"cross-env-shell NODE_ENV=production node \"./configs/scripts\"","npm_package_scripts_build_ssg":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --ssg","npm_package_scripts_content":"node configs/utils/buildContentTree.js ./src/content ./src/settings/_content.json","npm_package_scripts_debug_dev":"cross-env-shell NODE_ENV=development ndb node \"./configs/scripts\"","npm_package_scripts_debug_prod":"cross-env-shell NODE_ENV=production ndb node \"./configs/scripts\"","npm_package_scripts_debug_ssg":"cross-env-shell NODE_ENV=production ndb node \"./configs/scripts\" --ssg","npm_package_scripts_deploy":"node ./configs/deploy/ghPages","npm_package_scripts_lint":"eslint src/**/*.{js,jsx,ts,tsx} --quiet","npm_package_scripts_lint_fix":"eslint src/**/*.{js,jsx,ts,tsx} --quiet --fix","npm_package_scripts_predeploy":"run-s build","npm_package_scripts_start":"cross-env-shell NODE_ENV=development node \"./configs/scripts\"","npm_package_version":"0.0.1","NUMBER_OF_PROCESSORS":"4","NVM_HOME":"C:\\Users\\user\\AppData\\Roaming\\nvm","NVM_SYMLINK":"C:\\Program Files\\nodejs","OneDrive":"C:\\Users\\user\\OneDrive","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PATH":"C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307346133-0.2775536100596714;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307343722-0.0003793961626172848;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307342659-0.958532583449504;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\user\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python38\\Scripts;C:\\Python38;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files (x86)\\Yarn\\bin;C:\\Program Files\\MongoDB\\Server\\4.4\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\user\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\PostgreSQL\\13\\bin;C:\\Ruby27-x64\\bin;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Users\\user\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\user\\AppData\\Roaming\\npm;C:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2020.2.2\\bin;C:\\Users\\user\\AppData\\Local\\Yarn\\bin;C:\\Users\\user\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\user\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\heroku\\bin","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.RB;.RBW","PLINK_PROTOCOL":"ssh","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 42 Stepping 7, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"2a07","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules","PUBLIC":"C:\\Users\\Public","PUBLIC_URL":"/","PWD":"/c/My/Software/Projects/arma73","REACT_APP_DESCRIPTION":"portfolio for arma73","REACT_APP_HOST":"localhost","REACT_APP_NAME":"arma73","REACT_APP_PORT":"3000","REACT_APP_ROOT_DOM_NODE_ID":"app","REACT_APP_SHORT_NAME":"arma73","RUBYOPT":"-Eutf-8","SESSIONNAME":"Console","SHLVL":"2","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\Windows","TEMP":"C:\\Users\\user\\AppData\\Local\\Temp","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.54.1","TMP":"C:\\Users\\user\\AppData\\Local\\Temp","USERDOMAIN":"WIN-DUTQ08SBL96","USERDOMAIN_ROAMINGPROFILE":"WIN-DUTQ08SBL96","USERNAME":"user","USERPROFILE":"C:\\Users\\user","VLC_PLUGIN_PATH":"C:\\Users\\user\\AppData\\Local\\AzTorrent\\plugins","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-f359979e15-sock","WINDIR":"C:\\Windows","YARN_WRAP_OUTPUT":"false","_":"/usr/bin/winpty"}).REACT_APP_SC_DISABLE_SPEEDY&&({"ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\user\\AppData\\Roaming","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"132458377610238835","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\crashpad_8996_BKZEXZIJHPKONUIR","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"WIN-DUTQ08SBL96","COMSPEC":"C:\\Windows\\system32\\cmd.exe","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EXEPATH":"C:\\Program Files\\Git\\bin","GIT_ASKPASS":"c:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\user","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\user","INIT_CWD":"C:\\My\\Software\\Projects\\arma73","IntelliJ IDEA Community Edition":"C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2020.2.2\\bin;","LANG":"ru_RU.UTF-8","LOCALAPPDATA":"C:\\Users\\user\\AppData\\Local","LOGONSERVER":"\\\\WIN-DUTQ08SBL96","MSYSTEM":"MINGW64","NODE":"C:\\Program Files\\nodejs\\node.exe","NODE_ENV":"production","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"predeploy\"],\"original\":[\"deploy\"]}","npm_config_bin_links":"true","npm_config_bit_registry":"https://node.bit.dev","npm_config_ignore_optional":"","npm_config_ignore_scripts":"","npm_config_init_license":"MIT","npm_config_init_version":"1.0.0","npm_config_package_lock":"","npm_config_registry":"https://registry.yarnpkg.com","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_config_user_agent":"yarn/1.22.5 npm/? node/v12.18.4 win32 x64","npm_config_version_commit_hooks":"true","npm_config_version_git_message":"v%s","npm_config_version_git_sign":"","npm_config_version_git_tag":"true","npm_config_version_tag_prefix":"v","npm_config_wrap_output":"","npm_config__bit_registry":"https://node.bit.dev","npm_execpath":"C:\\Program Files (x86)\\Yarn\\bin\\yarn.js","npm_lifecycle_event":"build:ssg","npm_lifecycle_script":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --ssg","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_author_email":"arma.biz9805@gmail.com","npm_package_author_name":"Arman Khilko","npm_package_dependencies_clsx":"^1.1.1","npm_package_dependencies_gsap":"^3.6.0","npm_package_dependencies_history":"^5.0.0","npm_package_dependencies_normalize_css":"^8.0.1","npm_package_dependencies_postcss":"^8.1.14","npm_package_dependencies_raf":"^3.4.1","npm_package_dependencies_react":"^17.0.1","npm_package_dependencies_react_document_title":"^2.0.3","npm_package_dependencies_react_dom":"^17.0.1","npm_package_dependencies_react_router_dom":"^5.2.0","npm_package_dependencies_react_spring":"^8.0.27","npm_package_dependencies_react_tiny_popover":"^6.0.3","npm_package_dependencies_styled_components":"^5.2.1","npm_package_dependencies_workbox_window":"^6.0.2","npm_package_dependencies__mdx_js_react":"^1.6.22","npm_package_devDependencies_autoprefixer":"^10.0.4","npm_package_devDependencies_babel_loader":"^8.2.2","npm_package_devDependencies_babel_plugin_styled_components":"^1.12.0","npm_package_devDependencies_babel_plugin_transform_react_remove_prop_types":"^0.4.24","npm_package_devDependencies_cache_loader":"^4.1.0","npm_package_devDependencies_case_sensitive_paths_webpack_plugin":"^2.3.0","npm_package_devDependencies_chalk":"^4.1.0","npm_package_devDependencies_cheerio":"^1.0.0-rc.5","npm_package_devDependencies_clean_webpack_plugin":"^3.0.0","npm_package_devDependencies_copy_webpack_plugin":"^6.3.2","npm_package_devDependencies_cross_env":"^7.0.3","npm_package_devDependencies_cssnano":"^4.1.10","npm_package_devDependencies_csstype":"^3.0.7","npm_package_devDependencies_css_loader":"^5.0.1","npm_package_devDependencies_css_minimizer_webpack_plugin":"^1.2.0","npm_package_devDependencies_detect_port_alt":"^1.1.6","npm_package_devDependencies_directory_tree_webpack_plugin":"^1.0.2","npm_package_devDependencies_dotenv":"^8.2.0","npm_package_devDependencies_eslint":"^7.15.0","npm_package_devDependencies_eslint_config_prettier":"^8.0.0","npm_package_devDependencies_eslint_plugin_jsx_a11y":"^6.4.1","npm_package_devDependencies_eslint_plugin_prettier":"^3.3.1","npm_package_devDependencies_eslint_plugin_react":"^7.21.5","npm_package_devDependencies_eslint_plugin_react_hooks":"^4.2.0","npm_package_devDependencies_friendly_errors_webpack_plugin":"^1.7.0","npm_package_devDependencies_front_matter":"^4.0.2","npm_package_devDependencies_gh_pages":"^3.1.0","npm_package_devDependencies_html_loader":"^1.3.2","npm_package_devDependencies_html_webpack_plugin":"^5.0.0-alpha.15","npm_package_devDependencies_husky":"^4.3.5","npm_package_devDependencies_inquirer":"^7.3.3","npm_package_devDependencies_lint_staged":"^10.5.3","npm_package_devDependencies_mini_css_extract_plugin":"^1.3.2","npm_package_devDependencies_ndb":"^1.1.5","npm_package_devDependencies_node_sass":"^5.0.0","npm_package_devDependencies_npm_run_all":"^4.1.5","npm_package_devDependencies_null_loader":"^4.0.1","npm_package_devDependencies_path_browserify":"^1.0.1","npm_package_devDependencies_postcss_calc":"^7.0.5","npm_package_devDependencies_postcss_custom_media":"^7.0.8","npm_package_devDependencies_postcss_custom_properties":"^10.0.0","npm_package_devDependencies_postcss_discard_comments":"^4.0.2","npm_package_devDependencies_postcss_import":"^13.0.0","npm_package_devDependencies_postcss_loader":"^4.1.0","npm_package_devDependencies_postcss_nested":"^5.0.3","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_scss":"^3.0.4","npm_package_devDependencies_postcss_simple_vars":"^6.0.1","npm_package_devDependencies_prettier":"^2.2.1","npm_package_devDependencies_react_hot_loader":"^4.13.0","npm_package_devDependencies_redirect_webpack_plugin":"^1.0.0","npm_package_devDependencies_remark":"^13.0.0","npm_package_devDependencies_remark_custom_blockquotes":"^1.0.1","npm_package_devDependencies_remark_emoji":"^2.1.0","npm_package_devDependencies_remark_extract_anchors":"^1.1.1","npm_package_devDependencies_remark_frontmatter":"^3.0.0","npm_package_devDependencies_remark_gfm":"^1.0.0","npm_package_devDependencies_remark_html":"^13.0.1","npm_package_devDependencies_remark_loader":"^2.0.0","npm_package_devDependencies_remark_slug":"^6.0.0","npm_package_devDependencies_sass_loader":"^10.1.0","npm_package_devDependencies_source_map_loader":"^1.1.3","npm_package_devDependencies_static_site_generator_webpack_plugin":"^3.4.2","npm_package_devDependencies_style_loader":"^2.0.0","npm_package_devDependencies_terser_webpack_plugin":"^5.0.3","npm_package_devDependencies_thread_loader":"^3.0.1","npm_package_devDependencies_ts_loader":"^8.0.17","npm_package_devDependencies_typescript":"^4.1.5","npm_package_devDependencies_webpack":"^5.12.2","npm_package_devDependencies_webpackbar":"^5.0.0-3","npm_package_devDependencies_webpack_bundle_analyzer":"^4.2.0","npm_package_devDependencies_webpack_cli":"^4.3.1","npm_package_devDependencies_webpack_dev_server":"^4.0.0-beta.0","npm_package_devDependencies_webpack_hot_middleware":"^2.25.0","npm_package_devDependencies_webpack_merge":"^5.7.3","npm_package_devDependencies_webpack_pwa_manifest":"^4.3.0","npm_package_devDependencies_workbox_webpack_plugin":"^6.0.2","npm_package_devDependencies__babel_core":"^7.12.9","npm_package_devDependencies__babel_eslint_parser":"^7.12.1","npm_package_devDependencies__babel_eslint_plugin":"^7.13.0","npm_package_devDependencies__babel_plugin_proposal_class_properties":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_decorators":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_export_default_from":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_export_namespace_from":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_optional_chaining":"^7.12.7","npm_package_devDependencies__babel_plugin_syntax_dynamic_import":"^7.8.3","npm_package_devDependencies__babel_plugin_transform_react_constant_elements":"^7.12.1","npm_package_devDependencies__babel_plugin_transform_react_jsx":"^7.12.7","npm_package_devDependencies__babel_plugin_transform_runtime":"^7.12.1","npm_package_devDependencies__babel_preset_env":"^7.12.11","npm_package_devDependencies__babel_preset_react":"^7.12.10","npm_package_devDependencies__babel_preset_typescript":"^7.13.0","npm_package_devDependencies__hot_loader_react_dom":"^17.0.1","npm_package_devDependencies__mdx_js_loader":"^1.6.22","npm_package_devDependencies__svgr_webpack":"^5.5.0","npm_package_devDependencies__typescript_eslint_eslint_plugin":"^4.15.2","npm_package_devDependencies__typescript_eslint_parser":"^4.15.2","npm_package_devDependencies__types_mdx_js__react":"^1.5.3","npm_package_devDependencies__types_react":"^17.0.2","npm_package_devDependencies__types_react_dom":"^17.0.1","npm_package_devDependencies__types_react_router_dom":"^5.1.7","npm_package_devDependencies__types_styled_components":"^5.1.7","npm_package_devDependencies__types_webpack":"^4.41.26","npm_package_engines_node":">=10.x","npm_package_homepage":"https://arma73.github.io/","npm_package_husky_hooks_pre_commit":"lint-staged","npm_package_license":"MIT","npm_package_lint_staged____ts_tsx__0":"npm run lint","npm_package_main":"dist/index.js","npm_package_name":"arma73.github.io","npm_package_private":"true","npm_package_readmeFilename":"README.md","npm_package_repository_type":"git","npm_package_repository_url":"https://github.com/arma73/arma73.github.io","npm_package_scripts_analyze_prod":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --analyze","npm_package_scripts_build":"run-s content build:ssg build:prod","npm_package_scripts_build_prod":"cross-env-shell NODE_ENV=production node \"./configs/scripts\"","npm_package_scripts_build_ssg":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --ssg","npm_package_scripts_content":"node configs/utils/buildContentTree.js ./src/content ./src/settings/_content.json","npm_package_scripts_debug_dev":"cross-env-shell NODE_ENV=development ndb node \"./configs/scripts\"","npm_package_scripts_debug_prod":"cross-env-shell NODE_ENV=production ndb node \"./configs/scripts\"","npm_package_scripts_debug_ssg":"cross-env-shell NODE_ENV=production ndb node \"./configs/scripts\" --ssg","npm_package_scripts_deploy":"node ./configs/deploy/ghPages","npm_package_scripts_lint":"eslint src/**/*.{js,jsx,ts,tsx} --quiet","npm_package_scripts_lint_fix":"eslint src/**/*.{js,jsx,ts,tsx} --quiet --fix","npm_package_scripts_predeploy":"run-s build","npm_package_scripts_start":"cross-env-shell NODE_ENV=development node \"./configs/scripts\"","npm_package_version":"0.0.1","NUMBER_OF_PROCESSORS":"4","NVM_HOME":"C:\\Users\\user\\AppData\\Roaming\\nvm","NVM_SYMLINK":"C:\\Program Files\\nodejs","OneDrive":"C:\\Users\\user\\OneDrive","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PATH":"C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307346133-0.2775536100596714;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307343722-0.0003793961626172848;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307342659-0.958532583449504;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\user\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python38\\Scripts;C:\\Python38;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files (x86)\\Yarn\\bin;C:\\Program Files\\MongoDB\\Server\\4.4\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\user\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\PostgreSQL\\13\\bin;C:\\Ruby27-x64\\bin;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Users\\user\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\user\\AppData\\Roaming\\npm;C:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2020.2.2\\bin;C:\\Users\\user\\AppData\\Local\\Yarn\\bin;C:\\Users\\user\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\user\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\heroku\\bin","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.RB;.RBW","PLINK_PROTOCOL":"ssh","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 42 Stepping 7, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"2a07","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules","PUBLIC":"C:\\Users\\Public","PUBLIC_URL":"/","PWD":"/c/My/Software/Projects/arma73","REACT_APP_DESCRIPTION":"portfolio for arma73","REACT_APP_HOST":"localhost","REACT_APP_NAME":"arma73","REACT_APP_PORT":"3000","REACT_APP_ROOT_DOM_NODE_ID":"app","REACT_APP_SHORT_NAME":"arma73","RUBYOPT":"-Eutf-8","SESSIONNAME":"Console","SHLVL":"2","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\Windows","TEMP":"C:\\Users\\user\\AppData\\Local\\Temp","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.54.1","TMP":"C:\\Users\\user\\AppData\\Local\\Temp","USERDOMAIN":"WIN-DUTQ08SBL96","USERDOMAIN_ROAMINGPROFILE":"WIN-DUTQ08SBL96","USERNAME":"user","USERPROFILE":"C:\\Users\\user","VLC_PLUGIN_PATH":"C:\\Users\\user\\AppData\\Local\\AzTorrent\\plugins","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-f359979e15-sock","WINDIR":"C:\\Windows","YARN_WRAP_OUTPUT":"false","_":"/usr/bin/winpty"}).REACT_APP_SC_DISABLE_SPEEDY: true&&void 0!==({"ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\user\\AppData\\Roaming","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"132458377610238835","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\crashpad_8996_BKZEXZIJHPKONUIR","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"WIN-DUTQ08SBL96","COMSPEC":"C:\\Windows\\system32\\cmd.exe","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EXEPATH":"C:\\Program Files\\Git\\bin","GIT_ASKPASS":"c:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\user","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\user","INIT_CWD":"C:\\My\\Software\\Projects\\arma73","IntelliJ IDEA Community Edition":"C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2020.2.2\\bin;","LANG":"ru_RU.UTF-8","LOCALAPPDATA":"C:\\Users\\user\\AppData\\Local","LOGONSERVER":"\\\\WIN-DUTQ08SBL96","MSYSTEM":"MINGW64","NODE":"C:\\Program Files\\nodejs\\node.exe","NODE_ENV":"production","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"predeploy\"],\"original\":[\"deploy\"]}","npm_config_bin_links":"true","npm_config_bit_registry":"https://node.bit.dev","npm_config_ignore_optional":"","npm_config_ignore_scripts":"","npm_config_init_license":"MIT","npm_config_init_version":"1.0.0","npm_config_package_lock":"","npm_config_registry":"https://registry.yarnpkg.com","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_config_user_agent":"yarn/1.22.5 npm/? node/v12.18.4 win32 x64","npm_config_version_commit_hooks":"true","npm_config_version_git_message":"v%s","npm_config_version_git_sign":"","npm_config_version_git_tag":"true","npm_config_version_tag_prefix":"v","npm_config_wrap_output":"","npm_config__bit_registry":"https://node.bit.dev","npm_execpath":"C:\\Program Files (x86)\\Yarn\\bin\\yarn.js","npm_lifecycle_event":"build:ssg","npm_lifecycle_script":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --ssg","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_author_email":"arma.biz9805@gmail.com","npm_package_author_name":"Arman Khilko","npm_package_dependencies_clsx":"^1.1.1","npm_package_dependencies_gsap":"^3.6.0","npm_package_dependencies_history":"^5.0.0","npm_package_dependencies_normalize_css":"^8.0.1","npm_package_dependencies_postcss":"^8.1.14","npm_package_dependencies_raf":"^3.4.1","npm_package_dependencies_react":"^17.0.1","npm_package_dependencies_react_document_title":"^2.0.3","npm_package_dependencies_react_dom":"^17.0.1","npm_package_dependencies_react_router_dom":"^5.2.0","npm_package_dependencies_react_spring":"^8.0.27","npm_package_dependencies_react_tiny_popover":"^6.0.3","npm_package_dependencies_styled_components":"^5.2.1","npm_package_dependencies_workbox_window":"^6.0.2","npm_package_dependencies__mdx_js_react":"^1.6.22","npm_package_devDependencies_autoprefixer":"^10.0.4","npm_package_devDependencies_babel_loader":"^8.2.2","npm_package_devDependencies_babel_plugin_styled_components":"^1.12.0","npm_package_devDependencies_babel_plugin_transform_react_remove_prop_types":"^0.4.24","npm_package_devDependencies_cache_loader":"^4.1.0","npm_package_devDependencies_case_sensitive_paths_webpack_plugin":"^2.3.0","npm_package_devDependencies_chalk":"^4.1.0","npm_package_devDependencies_cheerio":"^1.0.0-rc.5","npm_package_devDependencies_clean_webpack_plugin":"^3.0.0","npm_package_devDependencies_copy_webpack_plugin":"^6.3.2","npm_package_devDependencies_cross_env":"^7.0.3","npm_package_devDependencies_cssnano":"^4.1.10","npm_package_devDependencies_csstype":"^3.0.7","npm_package_devDependencies_css_loader":"^5.0.1","npm_package_devDependencies_css_minimizer_webpack_plugin":"^1.2.0","npm_package_devDependencies_detect_port_alt":"^1.1.6","npm_package_devDependencies_directory_tree_webpack_plugin":"^1.0.2","npm_package_devDependencies_dotenv":"^8.2.0","npm_package_devDependencies_eslint":"^7.15.0","npm_package_devDependencies_eslint_config_prettier":"^8.0.0","npm_package_devDependencies_eslint_plugin_jsx_a11y":"^6.4.1","npm_package_devDependencies_eslint_plugin_prettier":"^3.3.1","npm_package_devDependencies_eslint_plugin_react":"^7.21.5","npm_package_devDependencies_eslint_plugin_react_hooks":"^4.2.0","npm_package_devDependencies_friendly_errors_webpack_plugin":"^1.7.0","npm_package_devDependencies_front_matter":"^4.0.2","npm_package_devDependencies_gh_pages":"^3.1.0","npm_package_devDependencies_html_loader":"^1.3.2","npm_package_devDependencies_html_webpack_plugin":"^5.0.0-alpha.15","npm_package_devDependencies_husky":"^4.3.5","npm_package_devDependencies_inquirer":"^7.3.3","npm_package_devDependencies_lint_staged":"^10.5.3","npm_package_devDependencies_mini_css_extract_plugin":"^1.3.2","npm_package_devDependencies_ndb":"^1.1.5","npm_package_devDependencies_node_sass":"^5.0.0","npm_package_devDependencies_npm_run_all":"^4.1.5","npm_package_devDependencies_null_loader":"^4.0.1","npm_package_devDependencies_path_browserify":"^1.0.1","npm_package_devDependencies_postcss_calc":"^7.0.5","npm_package_devDependencies_postcss_custom_media":"^7.0.8","npm_package_devDependencies_postcss_custom_properties":"^10.0.0","npm_package_devDependencies_postcss_discard_comments":"^4.0.2","npm_package_devDependencies_postcss_import":"^13.0.0","npm_package_devDependencies_postcss_loader":"^4.1.0","npm_package_devDependencies_postcss_nested":"^5.0.3","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_scss":"^3.0.4","npm_package_devDependencies_postcss_simple_vars":"^6.0.1","npm_package_devDependencies_prettier":"^2.2.1","npm_package_devDependencies_react_hot_loader":"^4.13.0","npm_package_devDependencies_redirect_webpack_plugin":"^1.0.0","npm_package_devDependencies_remark":"^13.0.0","npm_package_devDependencies_remark_custom_blockquotes":"^1.0.1","npm_package_devDependencies_remark_emoji":"^2.1.0","npm_package_devDependencies_remark_extract_anchors":"^1.1.1","npm_package_devDependencies_remark_frontmatter":"^3.0.0","npm_package_devDependencies_remark_gfm":"^1.0.0","npm_package_devDependencies_remark_html":"^13.0.1","npm_package_devDependencies_remark_loader":"^2.0.0","npm_package_devDependencies_remark_slug":"^6.0.0","npm_package_devDependencies_sass_loader":"^10.1.0","npm_package_devDependencies_source_map_loader":"^1.1.3","npm_package_devDependencies_static_site_generator_webpack_plugin":"^3.4.2","npm_package_devDependencies_style_loader":"^2.0.0","npm_package_devDependencies_terser_webpack_plugin":"^5.0.3","npm_package_devDependencies_thread_loader":"^3.0.1","npm_package_devDependencies_ts_loader":"^8.0.17","npm_package_devDependencies_typescript":"^4.1.5","npm_package_devDependencies_webpack":"^5.12.2","npm_package_devDependencies_webpackbar":"^5.0.0-3","npm_package_devDependencies_webpack_bundle_analyzer":"^4.2.0","npm_package_devDependencies_webpack_cli":"^4.3.1","npm_package_devDependencies_webpack_dev_server":"^4.0.0-beta.0","npm_package_devDependencies_webpack_hot_middleware":"^2.25.0","npm_package_devDependencies_webpack_merge":"^5.7.3","npm_package_devDependencies_webpack_pwa_manifest":"^4.3.0","npm_package_devDependencies_workbox_webpack_plugin":"^6.0.2","npm_package_devDependencies__babel_core":"^7.12.9","npm_package_devDependencies__babel_eslint_parser":"^7.12.1","npm_package_devDependencies__babel_eslint_plugin":"^7.13.0","npm_package_devDependencies__babel_plugin_proposal_class_properties":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_decorators":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_export_default_from":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_export_namespace_from":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_optional_chaining":"^7.12.7","npm_package_devDependencies__babel_plugin_syntax_dynamic_import":"^7.8.3","npm_package_devDependencies__babel_plugin_transform_react_constant_elements":"^7.12.1","npm_package_devDependencies__babel_plugin_transform_react_jsx":"^7.12.7","npm_package_devDependencies__babel_plugin_transform_runtime":"^7.12.1","npm_package_devDependencies__babel_preset_env":"^7.12.11","npm_package_devDependencies__babel_preset_react":"^7.12.10","npm_package_devDependencies__babel_preset_typescript":"^7.13.0","npm_package_devDependencies__hot_loader_react_dom":"^17.0.1","npm_package_devDependencies__mdx_js_loader":"^1.6.22","npm_package_devDependencies__svgr_webpack":"^5.5.0","npm_package_devDependencies__typescript_eslint_eslint_plugin":"^4.15.2","npm_package_devDependencies__typescript_eslint_parser":"^4.15.2","npm_package_devDependencies__types_mdx_js__react":"^1.5.3","npm_package_devDependencies__types_react":"^17.0.2","npm_package_devDependencies__types_react_dom":"^17.0.1","npm_package_devDependencies__types_react_router_dom":"^5.1.7","npm_package_devDependencies__types_styled_components":"^5.1.7","npm_package_devDependencies__types_webpack":"^4.41.26","npm_package_engines_node":">=10.x","npm_package_homepage":"https://arma73.github.io/","npm_package_husky_hooks_pre_commit":"lint-staged","npm_package_license":"MIT","npm_package_lint_staged____ts_tsx__0":"npm run lint","npm_package_main":"dist/index.js","npm_package_name":"arma73.github.io","npm_package_private":"true","npm_package_readmeFilename":"README.md","npm_package_repository_type":"git","npm_package_repository_url":"https://github.com/arma73/arma73.github.io","npm_package_scripts_analyze_prod":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --analyze","npm_package_scripts_build":"run-s content build:ssg build:prod","npm_package_scripts_build_prod":"cross-env-shell NODE_ENV=production node \"./configs/scripts\"","npm_package_scripts_build_ssg":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --ssg","npm_package_scripts_content":"node configs/utils/buildContentTree.js ./src/content ./src/settings/_content.json","npm_package_scripts_debug_dev":"cross-env-shell NODE_ENV=development ndb node \"./configs/scripts\"","npm_package_scripts_debug_prod":"cross-env-shell NODE_ENV=production ndb node \"./configs/scripts\"","npm_package_scripts_debug_ssg":"cross-env-shell NODE_ENV=production ndb node \"./configs/scripts\" --ssg","npm_package_scripts_deploy":"node ./configs/deploy/ghPages","npm_package_scripts_lint":"eslint src/**/*.{js,jsx,ts,tsx} --quiet","npm_package_scripts_lint_fix":"eslint src/**/*.{js,jsx,ts,tsx} --quiet --fix","npm_package_scripts_predeploy":"run-s build","npm_package_scripts_start":"cross-env-shell NODE_ENV=development node \"./configs/scripts\"","npm_package_version":"0.0.1","NUMBER_OF_PROCESSORS":"4","NVM_HOME":"C:\\Users\\user\\AppData\\Roaming\\nvm","NVM_SYMLINK":"C:\\Program Files\\nodejs","OneDrive":"C:\\Users\\user\\OneDrive","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PATH":"C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307346133-0.2775536100596714;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307343722-0.0003793961626172848;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307342659-0.958532583449504;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\user\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python38\\Scripts;C:\\Python38;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files (x86)\\Yarn\\bin;C:\\Program Files\\MongoDB\\Server\\4.4\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\user\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\PostgreSQL\\13\\bin;C:\\Ruby27-x64\\bin;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Users\\user\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\user\\AppData\\Roaming\\npm;C:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2020.2.2\\bin;C:\\Users\\user\\AppData\\Local\\Yarn\\bin;C:\\Users\\user\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\user\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\heroku\\bin","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.RB;.RBW","PLINK_PROTOCOL":"ssh","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 42 Stepping 7, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"2a07","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules","PUBLIC":"C:\\Users\\Public","PUBLIC_URL":"/","PWD":"/c/My/Software/Projects/arma73","REACT_APP_DESCRIPTION":"portfolio for arma73","REACT_APP_HOST":"localhost","REACT_APP_NAME":"arma73","REACT_APP_PORT":"3000","REACT_APP_ROOT_DOM_NODE_ID":"app","REACT_APP_SHORT_NAME":"arma73","RUBYOPT":"-Eutf-8","SESSIONNAME":"Console","SHLVL":"2","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\Windows","TEMP":"C:\\Users\\user\\AppData\\Local\\Temp","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.54.1","TMP":"C:\\Users\\user\\AppData\\Local\\Temp","USERDOMAIN":"WIN-DUTQ08SBL96","USERDOMAIN_ROAMINGPROFILE":"WIN-DUTQ08SBL96","USERNAME":"user","USERPROFILE":"C:\\Users\\user","VLC_PLUGIN_PATH":"C:\\Users\\user\\AppData\\Local\\AzTorrent\\plugins","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-f359979e15-sock","WINDIR":"C:\\Windows","YARN_WRAP_OUTPUT":"false","_":"/usr/bin/winpty"}).SC_DISABLE_SPEEDY&&""!==({"ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\user\\AppData\\Roaming","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"132458377610238835","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\crashpad_8996_BKZEXZIJHPKONUIR","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"WIN-DUTQ08SBL96","COMSPEC":"C:\\Windows\\system32\\cmd.exe","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EXEPATH":"C:\\Program Files\\Git\\bin","GIT_ASKPASS":"c:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\user","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\user","INIT_CWD":"C:\\My\\Software\\Projects\\arma73","IntelliJ IDEA Community Edition":"C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2020.2.2\\bin;","LANG":"ru_RU.UTF-8","LOCALAPPDATA":"C:\\Users\\user\\AppData\\Local","LOGONSERVER":"\\\\WIN-DUTQ08SBL96","MSYSTEM":"MINGW64","NODE":"C:\\Program Files\\nodejs\\node.exe","NODE_ENV":"production","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"predeploy\"],\"original\":[\"deploy\"]}","npm_config_bin_links":"true","npm_config_bit_registry":"https://node.bit.dev","npm_config_ignore_optional":"","npm_config_ignore_scripts":"","npm_config_init_license":"MIT","npm_config_init_version":"1.0.0","npm_config_package_lock":"","npm_config_registry":"https://registry.yarnpkg.com","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_config_user_agent":"yarn/1.22.5 npm/? node/v12.18.4 win32 x64","npm_config_version_commit_hooks":"true","npm_config_version_git_message":"v%s","npm_config_version_git_sign":"","npm_config_version_git_tag":"true","npm_config_version_tag_prefix":"v","npm_config_wrap_output":"","npm_config__bit_registry":"https://node.bit.dev","npm_execpath":"C:\\Program Files (x86)\\Yarn\\bin\\yarn.js","npm_lifecycle_event":"build:ssg","npm_lifecycle_script":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --ssg","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_author_email":"arma.biz9805@gmail.com","npm_package_author_name":"Arman Khilko","npm_package_dependencies_clsx":"^1.1.1","npm_package_dependencies_gsap":"^3.6.0","npm_package_dependencies_history":"^5.0.0","npm_package_dependencies_normalize_css":"^8.0.1","npm_package_dependencies_postcss":"^8.1.14","npm_package_dependencies_raf":"^3.4.1","npm_package_dependencies_react":"^17.0.1","npm_package_dependencies_react_document_title":"^2.0.3","npm_package_dependencies_react_dom":"^17.0.1","npm_package_dependencies_react_router_dom":"^5.2.0","npm_package_dependencies_react_spring":"^8.0.27","npm_package_dependencies_react_tiny_popover":"^6.0.3","npm_package_dependencies_styled_components":"^5.2.1","npm_package_dependencies_workbox_window":"^6.0.2","npm_package_dependencies__mdx_js_react":"^1.6.22","npm_package_devDependencies_autoprefixer":"^10.0.4","npm_package_devDependencies_babel_loader":"^8.2.2","npm_package_devDependencies_babel_plugin_styled_components":"^1.12.0","npm_package_devDependencies_babel_plugin_transform_react_remove_prop_types":"^0.4.24","npm_package_devDependencies_cache_loader":"^4.1.0","npm_package_devDependencies_case_sensitive_paths_webpack_plugin":"^2.3.0","npm_package_devDependencies_chalk":"^4.1.0","npm_package_devDependencies_cheerio":"^1.0.0-rc.5","npm_package_devDependencies_clean_webpack_plugin":"^3.0.0","npm_package_devDependencies_copy_webpack_plugin":"^6.3.2","npm_package_devDependencies_cross_env":"^7.0.3","npm_package_devDependencies_cssnano":"^4.1.10","npm_package_devDependencies_csstype":"^3.0.7","npm_package_devDependencies_css_loader":"^5.0.1","npm_package_devDependencies_css_minimizer_webpack_plugin":"^1.2.0","npm_package_devDependencies_detect_port_alt":"^1.1.6","npm_package_devDependencies_directory_tree_webpack_plugin":"^1.0.2","npm_package_devDependencies_dotenv":"^8.2.0","npm_package_devDependencies_eslint":"^7.15.0","npm_package_devDependencies_eslint_config_prettier":"^8.0.0","npm_package_devDependencies_eslint_plugin_jsx_a11y":"^6.4.1","npm_package_devDependencies_eslint_plugin_prettier":"^3.3.1","npm_package_devDependencies_eslint_plugin_react":"^7.21.5","npm_package_devDependencies_eslint_plugin_react_hooks":"^4.2.0","npm_package_devDependencies_friendly_errors_webpack_plugin":"^1.7.0","npm_package_devDependencies_front_matter":"^4.0.2","npm_package_devDependencies_gh_pages":"^3.1.0","npm_package_devDependencies_html_loader":"^1.3.2","npm_package_devDependencies_html_webpack_plugin":"^5.0.0-alpha.15","npm_package_devDependencies_husky":"^4.3.5","npm_package_devDependencies_inquirer":"^7.3.3","npm_package_devDependencies_lint_staged":"^10.5.3","npm_package_devDependencies_mini_css_extract_plugin":"^1.3.2","npm_package_devDependencies_ndb":"^1.1.5","npm_package_devDependencies_node_sass":"^5.0.0","npm_package_devDependencies_npm_run_all":"^4.1.5","npm_package_devDependencies_null_loader":"^4.0.1","npm_package_devDependencies_path_browserify":"^1.0.1","npm_package_devDependencies_postcss_calc":"^7.0.5","npm_package_devDependencies_postcss_custom_media":"^7.0.8","npm_package_devDependencies_postcss_custom_properties":"^10.0.0","npm_package_devDependencies_postcss_discard_comments":"^4.0.2","npm_package_devDependencies_postcss_import":"^13.0.0","npm_package_devDependencies_postcss_loader":"^4.1.0","npm_package_devDependencies_postcss_nested":"^5.0.3","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_scss":"^3.0.4","npm_package_devDependencies_postcss_simple_vars":"^6.0.1","npm_package_devDependencies_prettier":"^2.2.1","npm_package_devDependencies_react_hot_loader":"^4.13.0","npm_package_devDependencies_redirect_webpack_plugin":"^1.0.0","npm_package_devDependencies_remark":"^13.0.0","npm_package_devDependencies_remark_custom_blockquotes":"^1.0.1","npm_package_devDependencies_remark_emoji":"^2.1.0","npm_package_devDependencies_remark_extract_anchors":"^1.1.1","npm_package_devDependencies_remark_frontmatter":"^3.0.0","npm_package_devDependencies_remark_gfm":"^1.0.0","npm_package_devDependencies_remark_html":"^13.0.1","npm_package_devDependencies_remark_loader":"^2.0.0","npm_package_devDependencies_remark_slug":"^6.0.0","npm_package_devDependencies_sass_loader":"^10.1.0","npm_package_devDependencies_source_map_loader":"^1.1.3","npm_package_devDependencies_static_site_generator_webpack_plugin":"^3.4.2","npm_package_devDependencies_style_loader":"^2.0.0","npm_package_devDependencies_terser_webpack_plugin":"^5.0.3","npm_package_devDependencies_thread_loader":"^3.0.1","npm_package_devDependencies_ts_loader":"^8.0.17","npm_package_devDependencies_typescript":"^4.1.5","npm_package_devDependencies_webpack":"^5.12.2","npm_package_devDependencies_webpackbar":"^5.0.0-3","npm_package_devDependencies_webpack_bundle_analyzer":"^4.2.0","npm_package_devDependencies_webpack_cli":"^4.3.1","npm_package_devDependencies_webpack_dev_server":"^4.0.0-beta.0","npm_package_devDependencies_webpack_hot_middleware":"^2.25.0","npm_package_devDependencies_webpack_merge":"^5.7.3","npm_package_devDependencies_webpack_pwa_manifest":"^4.3.0","npm_package_devDependencies_workbox_webpack_plugin":"^6.0.2","npm_package_devDependencies__babel_core":"^7.12.9","npm_package_devDependencies__babel_eslint_parser":"^7.12.1","npm_package_devDependencies__babel_eslint_plugin":"^7.13.0","npm_package_devDependencies__babel_plugin_proposal_class_properties":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_decorators":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_export_default_from":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_export_namespace_from":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_optional_chaining":"^7.12.7","npm_package_devDependencies__babel_plugin_syntax_dynamic_import":"^7.8.3","npm_package_devDependencies__babel_plugin_transform_react_constant_elements":"^7.12.1","npm_package_devDependencies__babel_plugin_transform_react_jsx":"^7.12.7","npm_package_devDependencies__babel_plugin_transform_runtime":"^7.12.1","npm_package_devDependencies__babel_preset_env":"^7.12.11","npm_package_devDependencies__babel_preset_react":"^7.12.10","npm_package_devDependencies__babel_preset_typescript":"^7.13.0","npm_package_devDependencies__hot_loader_react_dom":"^17.0.1","npm_package_devDependencies__mdx_js_loader":"^1.6.22","npm_package_devDependencies__svgr_webpack":"^5.5.0","npm_package_devDependencies__typescript_eslint_eslint_plugin":"^4.15.2","npm_package_devDependencies__typescript_eslint_parser":"^4.15.2","npm_package_devDependencies__types_mdx_js__react":"^1.5.3","npm_package_devDependencies__types_react":"^17.0.2","npm_package_devDependencies__types_react_dom":"^17.0.1","npm_package_devDependencies__types_react_router_dom":"^5.1.7","npm_package_devDependencies__types_styled_components":"^5.1.7","npm_package_devDependencies__types_webpack":"^4.41.26","npm_package_engines_node":">=10.x","npm_package_homepage":"https://arma73.github.io/","npm_package_husky_hooks_pre_commit":"lint-staged","npm_package_license":"MIT","npm_package_lint_staged____ts_tsx__0":"npm run lint","npm_package_main":"dist/index.js","npm_package_name":"arma73.github.io","npm_package_private":"true","npm_package_readmeFilename":"README.md","npm_package_repository_type":"git","npm_package_repository_url":"https://github.com/arma73/arma73.github.io","npm_package_scripts_analyze_prod":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --analyze","npm_package_scripts_build":"run-s content build:ssg build:prod","npm_package_scripts_build_prod":"cross-env-shell NODE_ENV=production node \"./configs/scripts\"","npm_package_scripts_build_ssg":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --ssg","npm_package_scripts_content":"node configs/utils/buildContentTree.js ./src/content ./src/settings/_content.json","npm_package_scripts_debug_dev":"cross-env-shell NODE_ENV=development ndb node \"./configs/scripts\"","npm_package_scripts_debug_prod":"cross-env-shell NODE_ENV=production ndb node \"./configs/scripts\"","npm_package_scripts_debug_ssg":"cross-env-shell NODE_ENV=production ndb node \"./configs/scripts\" --ssg","npm_package_scripts_deploy":"node ./configs/deploy/ghPages","npm_package_scripts_lint":"eslint src/**/*.{js,jsx,ts,tsx} --quiet","npm_package_scripts_lint_fix":"eslint src/**/*.{js,jsx,ts,tsx} --quiet --fix","npm_package_scripts_predeploy":"run-s build","npm_package_scripts_start":"cross-env-shell NODE_ENV=development node \"./configs/scripts\"","npm_package_version":"0.0.1","NUMBER_OF_PROCESSORS":"4","NVM_HOME":"C:\\Users\\user\\AppData\\Roaming\\nvm","NVM_SYMLINK":"C:\\Program Files\\nodejs","OneDrive":"C:\\Users\\user\\OneDrive","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PATH":"C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307346133-0.2775536100596714;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307343722-0.0003793961626172848;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307342659-0.958532583449504;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\user\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python38\\Scripts;C:\\Python38;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files (x86)\\Yarn\\bin;C:\\Program Files\\MongoDB\\Server\\4.4\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\user\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\PostgreSQL\\13\\bin;C:\\Ruby27-x64\\bin;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Users\\user\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\user\\AppData\\Roaming\\npm;C:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2020.2.2\\bin;C:\\Users\\user\\AppData\\Local\\Yarn\\bin;C:\\Users\\user\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\user\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\heroku\\bin","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.RB;.RBW","PLINK_PROTOCOL":"ssh","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 42 Stepping 7, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"2a07","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules","PUBLIC":"C:\\Users\\Public","PUBLIC_URL":"/","PWD":"/c/My/Software/Projects/arma73","REACT_APP_DESCRIPTION":"portfolio for arma73","REACT_APP_HOST":"localhost","REACT_APP_NAME":"arma73","REACT_APP_PORT":"3000","REACT_APP_ROOT_DOM_NODE_ID":"app","REACT_APP_SHORT_NAME":"arma73","RUBYOPT":"-Eutf-8","SESSIONNAME":"Console","SHLVL":"2","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\Windows","TEMP":"C:\\Users\\user\\AppData\\Local\\Temp","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.54.1","TMP":"C:\\Users\\user\\AppData\\Local\\Temp","USERDOMAIN":"WIN-DUTQ08SBL96","USERDOMAIN_ROAMINGPROFILE":"WIN-DUTQ08SBL96","USERNAME":"user","USERPROFILE":"C:\\Users\\user","VLC_PLUGIN_PATH":"C:\\Users\\user\\AppData\\Local\\AzTorrent\\plugins","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-f359979e15-sock","WINDIR":"C:\\Windows","YARN_WRAP_OUTPUT":"false","_":"/usr/bin/winpty"}).SC_DISABLE_SPEEDY?"false"!==({"ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\user\\AppData\\Roaming","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"132458377610238835","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\crashpad_8996_BKZEXZIJHPKONUIR","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"WIN-DUTQ08SBL96","COMSPEC":"C:\\Windows\\system32\\cmd.exe","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EXEPATH":"C:\\Program Files\\Git\\bin","GIT_ASKPASS":"c:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\user","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\user","INIT_CWD":"C:\\My\\Software\\Projects\\arma73","IntelliJ IDEA Community Edition":"C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2020.2.2\\bin;","LANG":"ru_RU.UTF-8","LOCALAPPDATA":"C:\\Users\\user\\AppData\\Local","LOGONSERVER":"\\\\WIN-DUTQ08SBL96","MSYSTEM":"MINGW64","NODE":"C:\\Program Files\\nodejs\\node.exe","NODE_ENV":"production","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"predeploy\"],\"original\":[\"deploy\"]}","npm_config_bin_links":"true","npm_config_bit_registry":"https://node.bit.dev","npm_config_ignore_optional":"","npm_config_ignore_scripts":"","npm_config_init_license":"MIT","npm_config_init_version":"1.0.0","npm_config_package_lock":"","npm_config_registry":"https://registry.yarnpkg.com","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_config_user_agent":"yarn/1.22.5 npm/? node/v12.18.4 win32 x64","npm_config_version_commit_hooks":"true","npm_config_version_git_message":"v%s","npm_config_version_git_sign":"","npm_config_version_git_tag":"true","npm_config_version_tag_prefix":"v","npm_config_wrap_output":"","npm_config__bit_registry":"https://node.bit.dev","npm_execpath":"C:\\Program Files (x86)\\Yarn\\bin\\yarn.js","npm_lifecycle_event":"build:ssg","npm_lifecycle_script":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --ssg","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_author_email":"arma.biz9805@gmail.com","npm_package_author_name":"Arman Khilko","npm_package_dependencies_clsx":"^1.1.1","npm_package_dependencies_gsap":"^3.6.0","npm_package_dependencies_history":"^5.0.0","npm_package_dependencies_normalize_css":"^8.0.1","npm_package_dependencies_postcss":"^8.1.14","npm_package_dependencies_raf":"^3.4.1","npm_package_dependencies_react":"^17.0.1","npm_package_dependencies_react_document_title":"^2.0.3","npm_package_dependencies_react_dom":"^17.0.1","npm_package_dependencies_react_router_dom":"^5.2.0","npm_package_dependencies_react_spring":"^8.0.27","npm_package_dependencies_react_tiny_popover":"^6.0.3","npm_package_dependencies_styled_components":"^5.2.1","npm_package_dependencies_workbox_window":"^6.0.2","npm_package_dependencies__mdx_js_react":"^1.6.22","npm_package_devDependencies_autoprefixer":"^10.0.4","npm_package_devDependencies_babel_loader":"^8.2.2","npm_package_devDependencies_babel_plugin_styled_components":"^1.12.0","npm_package_devDependencies_babel_plugin_transform_react_remove_prop_types":"^0.4.24","npm_package_devDependencies_cache_loader":"^4.1.0","npm_package_devDependencies_case_sensitive_paths_webpack_plugin":"^2.3.0","npm_package_devDependencies_chalk":"^4.1.0","npm_package_devDependencies_cheerio":"^1.0.0-rc.5","npm_package_devDependencies_clean_webpack_plugin":"^3.0.0","npm_package_devDependencies_copy_webpack_plugin":"^6.3.2","npm_package_devDependencies_cross_env":"^7.0.3","npm_package_devDependencies_cssnano":"^4.1.10","npm_package_devDependencies_csstype":"^3.0.7","npm_package_devDependencies_css_loader":"^5.0.1","npm_package_devDependencies_css_minimizer_webpack_plugin":"^1.2.0","npm_package_devDependencies_detect_port_alt":"^1.1.6","npm_package_devDependencies_directory_tree_webpack_plugin":"^1.0.2","npm_package_devDependencies_dotenv":"^8.2.0","npm_package_devDependencies_eslint":"^7.15.0","npm_package_devDependencies_eslint_config_prettier":"^8.0.0","npm_package_devDependencies_eslint_plugin_jsx_a11y":"^6.4.1","npm_package_devDependencies_eslint_plugin_prettier":"^3.3.1","npm_package_devDependencies_eslint_plugin_react":"^7.21.5","npm_package_devDependencies_eslint_plugin_react_hooks":"^4.2.0","npm_package_devDependencies_friendly_errors_webpack_plugin":"^1.7.0","npm_package_devDependencies_front_matter":"^4.0.2","npm_package_devDependencies_gh_pages":"^3.1.0","npm_package_devDependencies_html_loader":"^1.3.2","npm_package_devDependencies_html_webpack_plugin":"^5.0.0-alpha.15","npm_package_devDependencies_husky":"^4.3.5","npm_package_devDependencies_inquirer":"^7.3.3","npm_package_devDependencies_lint_staged":"^10.5.3","npm_package_devDependencies_mini_css_extract_plugin":"^1.3.2","npm_package_devDependencies_ndb":"^1.1.5","npm_package_devDependencies_node_sass":"^5.0.0","npm_package_devDependencies_npm_run_all":"^4.1.5","npm_package_devDependencies_null_loader":"^4.0.1","npm_package_devDependencies_path_browserify":"^1.0.1","npm_package_devDependencies_postcss_calc":"^7.0.5","npm_package_devDependencies_postcss_custom_media":"^7.0.8","npm_package_devDependencies_postcss_custom_properties":"^10.0.0","npm_package_devDependencies_postcss_discard_comments":"^4.0.2","npm_package_devDependencies_postcss_import":"^13.0.0","npm_package_devDependencies_postcss_loader":"^4.1.0","npm_package_devDependencies_postcss_nested":"^5.0.3","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_scss":"^3.0.4","npm_package_devDependencies_postcss_simple_vars":"^6.0.1","npm_package_devDependencies_prettier":"^2.2.1","npm_package_devDependencies_react_hot_loader":"^4.13.0","npm_package_devDependencies_redirect_webpack_plugin":"^1.0.0","npm_package_devDependencies_remark":"^13.0.0","npm_package_devDependencies_remark_custom_blockquotes":"^1.0.1","npm_package_devDependencies_remark_emoji":"^2.1.0","npm_package_devDependencies_remark_extract_anchors":"^1.1.1","npm_package_devDependencies_remark_frontmatter":"^3.0.0","npm_package_devDependencies_remark_gfm":"^1.0.0","npm_package_devDependencies_remark_html":"^13.0.1","npm_package_devDependencies_remark_loader":"^2.0.0","npm_package_devDependencies_remark_slug":"^6.0.0","npm_package_devDependencies_sass_loader":"^10.1.0","npm_package_devDependencies_source_map_loader":"^1.1.3","npm_package_devDependencies_static_site_generator_webpack_plugin":"^3.4.2","npm_package_devDependencies_style_loader":"^2.0.0","npm_package_devDependencies_terser_webpack_plugin":"^5.0.3","npm_package_devDependencies_thread_loader":"^3.0.1","npm_package_devDependencies_ts_loader":"^8.0.17","npm_package_devDependencies_typescript":"^4.1.5","npm_package_devDependencies_webpack":"^5.12.2","npm_package_devDependencies_webpackbar":"^5.0.0-3","npm_package_devDependencies_webpack_bundle_analyzer":"^4.2.0","npm_package_devDependencies_webpack_cli":"^4.3.1","npm_package_devDependencies_webpack_dev_server":"^4.0.0-beta.0","npm_package_devDependencies_webpack_hot_middleware":"^2.25.0","npm_package_devDependencies_webpack_merge":"^5.7.3","npm_package_devDependencies_webpack_pwa_manifest":"^4.3.0","npm_package_devDependencies_workbox_webpack_plugin":"^6.0.2","npm_package_devDependencies__babel_core":"^7.12.9","npm_package_devDependencies__babel_eslint_parser":"^7.12.1","npm_package_devDependencies__babel_eslint_plugin":"^7.13.0","npm_package_devDependencies__babel_plugin_proposal_class_properties":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_decorators":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_export_default_from":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_export_namespace_from":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_optional_chaining":"^7.12.7","npm_package_devDependencies__babel_plugin_syntax_dynamic_import":"^7.8.3","npm_package_devDependencies__babel_plugin_transform_react_constant_elements":"^7.12.1","npm_package_devDependencies__babel_plugin_transform_react_jsx":"^7.12.7","npm_package_devDependencies__babel_plugin_transform_runtime":"^7.12.1","npm_package_devDependencies__babel_preset_env":"^7.12.11","npm_package_devDependencies__babel_preset_react":"^7.12.10","npm_package_devDependencies__babel_preset_typescript":"^7.13.0","npm_package_devDependencies__hot_loader_react_dom":"^17.0.1","npm_package_devDependencies__mdx_js_loader":"^1.6.22","npm_package_devDependencies__svgr_webpack":"^5.5.0","npm_package_devDependencies__typescript_eslint_eslint_plugin":"^4.15.2","npm_package_devDependencies__typescript_eslint_parser":"^4.15.2","npm_package_devDependencies__types_mdx_js__react":"^1.5.3","npm_package_devDependencies__types_react":"^17.0.2","npm_package_devDependencies__types_react_dom":"^17.0.1","npm_package_devDependencies__types_react_router_dom":"^5.1.7","npm_package_devDependencies__types_styled_components":"^5.1.7","npm_package_devDependencies__types_webpack":"^4.41.26","npm_package_engines_node":">=10.x","npm_package_homepage":"https://arma73.github.io/","npm_package_husky_hooks_pre_commit":"lint-staged","npm_package_license":"MIT","npm_package_lint_staged____ts_tsx__0":"npm run lint","npm_package_main":"dist/index.js","npm_package_name":"arma73.github.io","npm_package_private":"true","npm_package_readmeFilename":"README.md","npm_package_repository_type":"git","npm_package_repository_url":"https://github.com/arma73/arma73.github.io","npm_package_scripts_analyze_prod":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --analyze","npm_package_scripts_build":"run-s content build:ssg build:prod","npm_package_scripts_build_prod":"cross-env-shell NODE_ENV=production node \"./configs/scripts\"","npm_package_scripts_build_ssg":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --ssg","npm_package_scripts_content":"node configs/utils/buildContentTree.js ./src/content ./src/settings/_content.json","npm_package_scripts_debug_dev":"cross-env-shell NODE_ENV=development ndb node \"./configs/scripts\"","npm_package_scripts_debug_prod":"cross-env-shell NODE_ENV=production ndb node \"./configs/scripts\"","npm_package_scripts_debug_ssg":"cross-env-shell NODE_ENV=production ndb node \"./configs/scripts\" --ssg","npm_package_scripts_deploy":"node ./configs/deploy/ghPages","npm_package_scripts_lint":"eslint src/**/*.{js,jsx,ts,tsx} --quiet","npm_package_scripts_lint_fix":"eslint src/**/*.{js,jsx,ts,tsx} --quiet --fix","npm_package_scripts_predeploy":"run-s build","npm_package_scripts_start":"cross-env-shell NODE_ENV=development node \"./configs/scripts\"","npm_package_version":"0.0.1","NUMBER_OF_PROCESSORS":"4","NVM_HOME":"C:\\Users\\user\\AppData\\Roaming\\nvm","NVM_SYMLINK":"C:\\Program Files\\nodejs","OneDrive":"C:\\Users\\user\\OneDrive","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PATH":"C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307346133-0.2775536100596714;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307343722-0.0003793961626172848;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307342659-0.958532583449504;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\user\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python38\\Scripts;C:\\Python38;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files (x86)\\Yarn\\bin;C:\\Program Files\\MongoDB\\Server\\4.4\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\user\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\PostgreSQL\\13\\bin;C:\\Ruby27-x64\\bin;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Users\\user\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\user\\AppData\\Roaming\\npm;C:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2020.2.2\\bin;C:\\Users\\user\\AppData\\Local\\Yarn\\bin;C:\\Users\\user\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\user\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\heroku\\bin","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.RB;.RBW","PLINK_PROTOCOL":"ssh","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 42 Stepping 7, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"2a07","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules","PUBLIC":"C:\\Users\\Public","PUBLIC_URL":"/","PWD":"/c/My/Software/Projects/arma73","REACT_APP_DESCRIPTION":"portfolio for arma73","REACT_APP_HOST":"localhost","REACT_APP_NAME":"arma73","REACT_APP_PORT":"3000","REACT_APP_ROOT_DOM_NODE_ID":"app","REACT_APP_SHORT_NAME":"arma73","RUBYOPT":"-Eutf-8","SESSIONNAME":"Console","SHLVL":"2","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\Windows","TEMP":"C:\\Users\\user\\AppData\\Local\\Temp","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.54.1","TMP":"C:\\Users\\user\\AppData\\Local\\Temp","USERDOMAIN":"WIN-DUTQ08SBL96","USERDOMAIN_ROAMINGPROFILE":"WIN-DUTQ08SBL96","USERNAME":"user","USERPROFILE":"C:\\Users\\user","VLC_PLUGIN_PATH":"C:\\Users\\user\\AppData\\Local\\AzTorrent\\plugins","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-f359979e15-sock","WINDIR":"C:\\Windows","YARN_WRAP_OUTPUT":"false","_":"/usr/bin/winpty"}).SC_DISABLE_SPEEDY&&({"ALLUSERSPROFILE":"C:\\ProgramData","APPDATA":"C:\\Users\\user\\AppData\\Roaming","ChocolateyInstall":"C:\\ProgramData\\chocolatey","ChocolateyLastPathUpdate":"132458377610238835","CHROME_CRASHPAD_PIPE_NAME":"\\\\.\\pipe\\crashpad_8996_BKZEXZIJHPKONUIR","COLORTERM":"truecolor","COMMONPROGRAMFILES":"C:\\Program Files\\Common Files","CommonProgramFiles(x86)":"C:\\Program Files (x86)\\Common Files","CommonProgramW6432":"C:\\Program Files\\Common Files","COMPUTERNAME":"WIN-DUTQ08SBL96","COMSPEC":"C:\\Windows\\system32\\cmd.exe","DriverData":"C:\\Windows\\System32\\Drivers\\DriverData","EXEPATH":"C:\\Program Files\\Git\\bin","GIT_ASKPASS":"c:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh","HOME":"C:\\Users\\user","HOMEDRIVE":"C:","HOMEPATH":"\\Users\\user","INIT_CWD":"C:\\My\\Software\\Projects\\arma73","IntelliJ IDEA Community Edition":"C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2020.2.2\\bin;","LANG":"ru_RU.UTF-8","LOCALAPPDATA":"C:\\Users\\user\\AppData\\Local","LOGONSERVER":"\\\\WIN-DUTQ08SBL96","MSYSTEM":"MINGW64","NODE":"C:\\Program Files\\nodejs\\node.exe","NODE_ENV":"production","npm_config_argv":"{\"remain\":[],\"cooked\":[\"run\",\"predeploy\"],\"original\":[\"deploy\"]}","npm_config_bin_links":"true","npm_config_bit_registry":"https://node.bit.dev","npm_config_ignore_optional":"","npm_config_ignore_scripts":"","npm_config_init_license":"MIT","npm_config_init_version":"1.0.0","npm_config_package_lock":"","npm_config_registry":"https://registry.yarnpkg.com","npm_config_save_prefix":"^","npm_config_strict_ssl":"true","npm_config_user_agent":"yarn/1.22.5 npm/? node/v12.18.4 win32 x64","npm_config_version_commit_hooks":"true","npm_config_version_git_message":"v%s","npm_config_version_git_sign":"","npm_config_version_git_tag":"true","npm_config_version_tag_prefix":"v","npm_config_wrap_output":"","npm_config__bit_registry":"https://node.bit.dev","npm_execpath":"C:\\Program Files (x86)\\Yarn\\bin\\yarn.js","npm_lifecycle_event":"build:ssg","npm_lifecycle_script":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --ssg","npm_node_execpath":"C:\\Program Files\\nodejs\\node.exe","npm_package_author_email":"arma.biz9805@gmail.com","npm_package_author_name":"Arman Khilko","npm_package_dependencies_clsx":"^1.1.1","npm_package_dependencies_gsap":"^3.6.0","npm_package_dependencies_history":"^5.0.0","npm_package_dependencies_normalize_css":"^8.0.1","npm_package_dependencies_postcss":"^8.1.14","npm_package_dependencies_raf":"^3.4.1","npm_package_dependencies_react":"^17.0.1","npm_package_dependencies_react_document_title":"^2.0.3","npm_package_dependencies_react_dom":"^17.0.1","npm_package_dependencies_react_router_dom":"^5.2.0","npm_package_dependencies_react_spring":"^8.0.27","npm_package_dependencies_react_tiny_popover":"^6.0.3","npm_package_dependencies_styled_components":"^5.2.1","npm_package_dependencies_workbox_window":"^6.0.2","npm_package_dependencies__mdx_js_react":"^1.6.22","npm_package_devDependencies_autoprefixer":"^10.0.4","npm_package_devDependencies_babel_loader":"^8.2.2","npm_package_devDependencies_babel_plugin_styled_components":"^1.12.0","npm_package_devDependencies_babel_plugin_transform_react_remove_prop_types":"^0.4.24","npm_package_devDependencies_cache_loader":"^4.1.0","npm_package_devDependencies_case_sensitive_paths_webpack_plugin":"^2.3.0","npm_package_devDependencies_chalk":"^4.1.0","npm_package_devDependencies_cheerio":"^1.0.0-rc.5","npm_package_devDependencies_clean_webpack_plugin":"^3.0.0","npm_package_devDependencies_copy_webpack_plugin":"^6.3.2","npm_package_devDependencies_cross_env":"^7.0.3","npm_package_devDependencies_cssnano":"^4.1.10","npm_package_devDependencies_csstype":"^3.0.7","npm_package_devDependencies_css_loader":"^5.0.1","npm_package_devDependencies_css_minimizer_webpack_plugin":"^1.2.0","npm_package_devDependencies_detect_port_alt":"^1.1.6","npm_package_devDependencies_directory_tree_webpack_plugin":"^1.0.2","npm_package_devDependencies_dotenv":"^8.2.0","npm_package_devDependencies_eslint":"^7.15.0","npm_package_devDependencies_eslint_config_prettier":"^8.0.0","npm_package_devDependencies_eslint_plugin_jsx_a11y":"^6.4.1","npm_package_devDependencies_eslint_plugin_prettier":"^3.3.1","npm_package_devDependencies_eslint_plugin_react":"^7.21.5","npm_package_devDependencies_eslint_plugin_react_hooks":"^4.2.0","npm_package_devDependencies_friendly_errors_webpack_plugin":"^1.7.0","npm_package_devDependencies_front_matter":"^4.0.2","npm_package_devDependencies_gh_pages":"^3.1.0","npm_package_devDependencies_html_loader":"^1.3.2","npm_package_devDependencies_html_webpack_plugin":"^5.0.0-alpha.15","npm_package_devDependencies_husky":"^4.3.5","npm_package_devDependencies_inquirer":"^7.3.3","npm_package_devDependencies_lint_staged":"^10.5.3","npm_package_devDependencies_mini_css_extract_plugin":"^1.3.2","npm_package_devDependencies_ndb":"^1.1.5","npm_package_devDependencies_node_sass":"^5.0.0","npm_package_devDependencies_npm_run_all":"^4.1.5","npm_package_devDependencies_null_loader":"^4.0.1","npm_package_devDependencies_path_browserify":"^1.0.1","npm_package_devDependencies_postcss_calc":"^7.0.5","npm_package_devDependencies_postcss_custom_media":"^7.0.8","npm_package_devDependencies_postcss_custom_properties":"^10.0.0","npm_package_devDependencies_postcss_discard_comments":"^4.0.2","npm_package_devDependencies_postcss_import":"^13.0.0","npm_package_devDependencies_postcss_loader":"^4.1.0","npm_package_devDependencies_postcss_nested":"^5.0.3","npm_package_devDependencies_postcss_preset_env":"^6.7.0","npm_package_devDependencies_postcss_scss":"^3.0.4","npm_package_devDependencies_postcss_simple_vars":"^6.0.1","npm_package_devDependencies_prettier":"^2.2.1","npm_package_devDependencies_react_hot_loader":"^4.13.0","npm_package_devDependencies_redirect_webpack_plugin":"^1.0.0","npm_package_devDependencies_remark":"^13.0.0","npm_package_devDependencies_remark_custom_blockquotes":"^1.0.1","npm_package_devDependencies_remark_emoji":"^2.1.0","npm_package_devDependencies_remark_extract_anchors":"^1.1.1","npm_package_devDependencies_remark_frontmatter":"^3.0.0","npm_package_devDependencies_remark_gfm":"^1.0.0","npm_package_devDependencies_remark_html":"^13.0.1","npm_package_devDependencies_remark_loader":"^2.0.0","npm_package_devDependencies_remark_slug":"^6.0.0","npm_package_devDependencies_sass_loader":"^10.1.0","npm_package_devDependencies_source_map_loader":"^1.1.3","npm_package_devDependencies_static_site_generator_webpack_plugin":"^3.4.2","npm_package_devDependencies_style_loader":"^2.0.0","npm_package_devDependencies_terser_webpack_plugin":"^5.0.3","npm_package_devDependencies_thread_loader":"^3.0.1","npm_package_devDependencies_ts_loader":"^8.0.17","npm_package_devDependencies_typescript":"^4.1.5","npm_package_devDependencies_webpack":"^5.12.2","npm_package_devDependencies_webpackbar":"^5.0.0-3","npm_package_devDependencies_webpack_bundle_analyzer":"^4.2.0","npm_package_devDependencies_webpack_cli":"^4.3.1","npm_package_devDependencies_webpack_dev_server":"^4.0.0-beta.0","npm_package_devDependencies_webpack_hot_middleware":"^2.25.0","npm_package_devDependencies_webpack_merge":"^5.7.3","npm_package_devDependencies_webpack_pwa_manifest":"^4.3.0","npm_package_devDependencies_workbox_webpack_plugin":"^6.0.2","npm_package_devDependencies__babel_core":"^7.12.9","npm_package_devDependencies__babel_eslint_parser":"^7.12.1","npm_package_devDependencies__babel_eslint_plugin":"^7.13.0","npm_package_devDependencies__babel_plugin_proposal_class_properties":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_decorators":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_export_default_from":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_export_namespace_from":"^7.12.1","npm_package_devDependencies__babel_plugin_proposal_optional_chaining":"^7.12.7","npm_package_devDependencies__babel_plugin_syntax_dynamic_import":"^7.8.3","npm_package_devDependencies__babel_plugin_transform_react_constant_elements":"^7.12.1","npm_package_devDependencies__babel_plugin_transform_react_jsx":"^7.12.7","npm_package_devDependencies__babel_plugin_transform_runtime":"^7.12.1","npm_package_devDependencies__babel_preset_env":"^7.12.11","npm_package_devDependencies__babel_preset_react":"^7.12.10","npm_package_devDependencies__babel_preset_typescript":"^7.13.0","npm_package_devDependencies__hot_loader_react_dom":"^17.0.1","npm_package_devDependencies__mdx_js_loader":"^1.6.22","npm_package_devDependencies__svgr_webpack":"^5.5.0","npm_package_devDependencies__typescript_eslint_eslint_plugin":"^4.15.2","npm_package_devDependencies__typescript_eslint_parser":"^4.15.2","npm_package_devDependencies__types_mdx_js__react":"^1.5.3","npm_package_devDependencies__types_react":"^17.0.2","npm_package_devDependencies__types_react_dom":"^17.0.1","npm_package_devDependencies__types_react_router_dom":"^5.1.7","npm_package_devDependencies__types_styled_components":"^5.1.7","npm_package_devDependencies__types_webpack":"^4.41.26","npm_package_engines_node":">=10.x","npm_package_homepage":"https://arma73.github.io/","npm_package_husky_hooks_pre_commit":"lint-staged","npm_package_license":"MIT","npm_package_lint_staged____ts_tsx__0":"npm run lint","npm_package_main":"dist/index.js","npm_package_name":"arma73.github.io","npm_package_private":"true","npm_package_readmeFilename":"README.md","npm_package_repository_type":"git","npm_package_repository_url":"https://github.com/arma73/arma73.github.io","npm_package_scripts_analyze_prod":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --analyze","npm_package_scripts_build":"run-s content build:ssg build:prod","npm_package_scripts_build_prod":"cross-env-shell NODE_ENV=production node \"./configs/scripts\"","npm_package_scripts_build_ssg":"cross-env-shell NODE_ENV=production node \"./configs/scripts\" --ssg","npm_package_scripts_content":"node configs/utils/buildContentTree.js ./src/content ./src/settings/_content.json","npm_package_scripts_debug_dev":"cross-env-shell NODE_ENV=development ndb node \"./configs/scripts\"","npm_package_scripts_debug_prod":"cross-env-shell NODE_ENV=production ndb node \"./configs/scripts\"","npm_package_scripts_debug_ssg":"cross-env-shell NODE_ENV=production ndb node \"./configs/scripts\" --ssg","npm_package_scripts_deploy":"node ./configs/deploy/ghPages","npm_package_scripts_lint":"eslint src/**/*.{js,jsx,ts,tsx} --quiet","npm_package_scripts_lint_fix":"eslint src/**/*.{js,jsx,ts,tsx} --quiet --fix","npm_package_scripts_predeploy":"run-s build","npm_package_scripts_start":"cross-env-shell NODE_ENV=development node \"./configs/scripts\"","npm_package_version":"0.0.1","NUMBER_OF_PROCESSORS":"4","NVM_HOME":"C:\\Users\\user\\AppData\\Roaming\\nvm","NVM_SYMLINK":"C:\\Program Files\\nodejs","OneDrive":"C:\\Users\\user\\OneDrive","ORIGINAL_XDG_CURRENT_DESKTOP":"undefined","OS":"Windows_NT","PATH":"C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307346133-0.2775536100596714;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307343722-0.0003793961626172848;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Users\\user\\AppData\\Local\\Temp\\yarn--1615307342659-0.958532583449504;C:\\My\\Software\\Projects\\arma73\\node_modules\\.bin;C:\\Users\\user\\AppData\\Local\\Yarn\\Data\\link\\node_modules\\.bin;C:\\Program Files\\libexec\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\lib\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\nodejs\\node_modules\\npm\\bin\\node-gyp-bin;C:\\Program Files\\Git\\mingw64\\bin;C:\\Program Files\\Git\\usr\\bin;C:\\Users\\user\\bin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Python38\\Scripts;C:\\Python38;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\ProgramData\\chocolatey\\bin;C:\\Program Files (x86)\\Yarn\\bin;C:\\Program Files\\MongoDB\\Server\\4.4\\bin;C:\\Program Files\\Git\\cmd;C:\\Users\\user\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\PostgreSQL\\13\\bin;C:\\Ruby27-x64\\bin;C:\\Program Files\\MySQL\\MySQL Shell 8.0\\bin;C:\\Users\\user\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\user\\AppData\\Roaming\\npm;C:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Program Files\\JetBrains\\IntelliJ IDEA Community Edition 2020.2.2\\bin;C:\\Users\\user\\AppData\\Local\\Yarn\\bin;C:\\Users\\user\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\user\\AppData\\Roaming\\nvm;C:\\Program Files\\nodejs;C:\\Program Files\\heroku\\bin","PATHEXT":".COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JSE;.WSF;.WSH;.MSC;.PY;.PYW;.RB;.RBW","PLINK_PROTOCOL":"ssh","PROCESSOR_ARCHITECTURE":"AMD64","PROCESSOR_IDENTIFIER":"Intel64 Family 6 Model 42 Stepping 7, GenuineIntel","PROCESSOR_LEVEL":"6","PROCESSOR_REVISION":"2a07","ProgramData":"C:\\ProgramData","PROGRAMFILES":"C:\\Program Files","ProgramFiles(x86)":"C:\\Program Files (x86)","ProgramW6432":"C:\\Program Files","PROMPT":"$P$G","PSModulePath":"C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules","PUBLIC":"C:\\Users\\Public","PUBLIC_URL":"/","PWD":"/c/My/Software/Projects/arma73","REACT_APP_DESCRIPTION":"portfolio for arma73","REACT_APP_HOST":"localhost","REACT_APP_NAME":"arma73","REACT_APP_PORT":"3000","REACT_APP_ROOT_DOM_NODE_ID":"app","REACT_APP_SHORT_NAME":"arma73","RUBYOPT":"-Eutf-8","SESSIONNAME":"Console","SHLVL":"2","SYSTEMDRIVE":"C:","SYSTEMROOT":"C:\\Windows","TEMP":"C:\\Users\\user\\AppData\\Local\\Temp","TERM_PROGRAM":"vscode","TERM_PROGRAM_VERSION":"1.54.1","TMP":"C:\\Users\\user\\AppData\\Local\\Temp","USERDOMAIN":"WIN-DUTQ08SBL96","USERDOMAIN_ROAMINGPROFILE":"WIN-DUTQ08SBL96","USERNAME":"user","USERPROFILE":"C:\\Users\\user","VLC_PLUGIN_PATH":"C:\\Users\\user\\AppData\\Local\\AzTorrent\\plugins","VSCODE_GIT_ASKPASS_MAIN":"c:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js","VSCODE_GIT_ASKPASS_NODE":"C:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe","VSCODE_GIT_IPC_HANDLE":"\\\\.\\pipe\\vscode-git-f359979e15-sock","WINDIR":"C:\\Windows","YARN_WRAP_OUTPUT":"false","_":"/usr/bin/winpty"}).SC_DISABLE_SPEEDY:"production"!=="production"),P={},O= false?0:{};function R(){for(var e=arguments.length<=0?void 0:arguments[0],t=[],n=1,r=arguments.length;n<r;n+=1)t.push(n<0||arguments.length<=n?void 0:arguments[n]);return t.forEach((function(t){e=e.replace(/%[a-z]/,t)})),e}function D(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw true?new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):"")):0}var j=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)(o<<=1)<0&&D(16,""+e);this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=r;s<o;s++)this.groupSizes[s]=0}for(var i=this.indexOfGroup(e+1),a=0,c=t.length;a<c;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,s=r;s<o;s++)t+=this.tag.getRule(s)+"/*!sc*/\n";return t},e}(),T=new Map,x=new Map,k=1,V=function(e){if(T.has(e))return T.get(e);for(;x.has(k);)k++;var t=k++;return false&&0,T.set(e,t),x.set(t,e),t},M=function(e){return x.get(e)},B=function(e,t){T.set(e,t),x.set(t,e)},z="style["+_+'][data-styled-version="5.2.1"]',L=new RegExp("^"+_+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),styled_components_esm_G=function(e,t,n){for(var r,o=n.split(","),s=0,i=o.length;s<i;s++)(r=o[s])&&e.registerName(t,r)},F=function(e,t){for(var n=t.innerHTML.split("/*!sc*/\n"),r=[],o=0,s=n.length;o<s;o++){var i=n[o].trim();if(i){var a=i.match(L);if(a){var c=0|parseInt(a[1],10),u=a[2];0!==c&&(B(u,c),styled_components_esm_G(e,u,a[3]),e.getTag().insertRules(c,r)),r.length=0}else r.push(i)}}},Y=function(){return true?__webpack_require__.nc:0},q=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(_))return r}}(n),s=void 0!==o?o.nextSibling:null;r.setAttribute(_,"active"),r.setAttribute("data-styled-version","5.2.1");var i=Y();return i&&r.setAttribute("nonce",i),n.insertBefore(r,s),r},H=function(){function e(e){var t=this.element=q(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}D(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),$=function(){function e(e){var t=this.element=q(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),W=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),U=A,J={isServer:!A,useCSSOMInjection:!I},Z=function(){function e(e,t,n){void 0===e&&(e=w),void 0===t&&(t={}),this.options=v({},J,{},e),this.gs=t,this.names=new Map(n),!this.options.isServer&&A&&U&&(U=!1,function(e){for(var t=document.querySelectorAll(z),n=0,r=t.length;n<r;n++){var o=t[n];o&&"active"!==o.getAttribute(_)&&(F(e,o),o.parentNode&&o.parentNode.removeChild(o))}}(this))}e.registerId=function(e){return V(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(v({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,o=t.target,e=n?new W(o):r?new H(o):new $(o),new j(e)));var e,t,n,r,o},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(V(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(V(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(V(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=0;o<n;o++){var s=M(o);if(void 0!==s){var i=e.names.get(s),a=t.getGroup(o);if(void 0!==i&&0!==a.length){var c=_+".g"+o+'[id="'+s+'"]',u="";void 0!==i&&i.forEach((function(e){e.length>0&&(u+=e+",")})),r+=""+a+c+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),X=/(a)(d)/gi,K=function(e){return String.fromCharCode(e+(e>25?39:97))};function Q(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=K(t%52)+n;return(K(t%52)+n).replace(X,"$1-$2")}var ee=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},te=function(e){return ee(5381,e)};function ne(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(E(n)&&!N(n))return!1}return!0}var re=te("5.2.1"),oe=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic= true&&(void 0===n||n.isStatic)&&ne(e),this.componentId=t,this.baseHash=ee(re,t),this.baseStyle=n,Z.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))o.push(this.staticRulesId);else{var s=Ne(this.rules,e,t,n).join(""),i=Q(ee(this.baseHash,s.length)>>>0);if(!t.hasNameForId(r,i)){var a=n(s,"."+i,void 0,r);t.insertRules(r,i,a)}o.push(i),this.staticRulesId=i}else{for(var c=this.rules.length,u=ee(this.baseHash,n.hash),l="",d=0;d<c;d++){var h=this.rules[d];if("string"==typeof h)l+=h, false&&(0);else if(h){var p=Ne(h,e,t,n),f=Array.isArray(p)?p.join(""):p;u=ee(u,f+d),l+=f}}if(l){var m=Q(u>>>0);if(!t.hasNameForId(r,m)){var v=n(l,"."+m,void 0,r);t.insertRules(r,m,v)}o.push(m)}}return o.join(" ")},e}(),se=/^\s*\/\/.*$/gm,ie=[":","[",".","#"];function ae(e){var t,n,r,o,s=void 0===e?w:e,i=s.options,a=void 0===i?w:i,c=s.plugins,u=void 0===c?S:c,l=new stylis_esm(a),d=[],p=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,o,s,i,a,c,u,l,d){switch(n){case 1:if(0===l&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(o[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}((function(e){d.push(e)})),f=function(e,r,s){return 0===r&&ie.includes(s[n.length])||s.match(o)?e:"."+t};function m(e,s,i,a){void 0===a&&(a="&");var c=e.replace(se,""),u=s&&i?i+" "+s+" { "+c+" }":c;return t=a,n=s,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),l(i||!s?"":s,u)}return l.use([].concat(u,[function(e,t,o){2===e&&o.length&&o[0].lastIndexOf(n)>0&&(o[0]=o[0].replace(r,f))},p,function(e){if(-2===e){var t=d;return d=[],t}}])),m.hash=u.length?u.reduce((function(e,t){return t.name||D(15),ee(e,t.name)}),5381).toString():"",m}var ce=react.createContext(),ue=ce.Consumer,le=react.createContext(),de=(le.Consumer,new Z),he=ae();function pe(){return (0,react.useContext)(ce)||de}function fe(){return (0,react.useContext)(le)||he}function me(e){var t=(0,react.useState)(e.stylisPlugins),n=t[0],s=t[1],c=pe(),u=(0,react.useMemo)((function(){var t=c;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target]),l=(0,react.useMemo)((function(){return ae({options:{prefix:!e.disableVendorPrefixes},plugins:n})}),[e.disableVendorPrefixes,n]);return (0,react.useEffect)((function(){shallowequal_default()(n,e.stylisPlugins)||s(e.stylisPlugins)}),[e.stylisPlugins]),react.createElement(ce.Provider,{value:u},react.createElement(le.Provider,{value:l}, false?0:e.children))}var ve=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=he);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return D(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=he),this.name+e.hash},e}(),ye=/([A-Z])/,ge=/([A-Z])/g,Se=/^ms-/,we=function(e){return"-"+e.toLowerCase()};function Ee(e){return ye.test(e)?e.replace(ge,we).replace(Se,"-ms-"):e}var be=function(e){return null==e||!1===e||""===e};function Ne(e,n,r,o){if(Array.isArray(e)){for(var s,i=[],a=0,c=e.length;a<c;a+=1)""!==(s=Ne(e[a],n,r,o))&&(Array.isArray(s)?i.push.apply(i,s):i.push(s));return i}if(be(e))return"";if(N(e))return"."+e.styledComponentId;if(E(e)){if("function"!=typeof(l=e)||l.prototype&&l.prototype.isReactComponent||!n)return e;var u=e(n);return false&&0,Ne(u,n,r,o)}var l;return e instanceof ve?r?(e.inject(r,o),e.getName(o)):e:g(e)?function e(t,n){var r,o,s=[];for(var i in t)t.hasOwnProperty(i)&&!be(t[i])&&(g(t[i])?s.push.apply(s,e(t[i],i)):E(t[i])?s.push(Ee(i)+":",t[i],";"):s.push(Ee(i)+": "+(r=i,null==(o=t[i])||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in unitless_esm?String(o).trim():o+"px")+";"));return n?[n+" {"].concat(s,["}"]):s}(e):e.toString()}function _e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return E(e)||g(e)?Ne(y(S,[e].concat(n))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:Ne(y(e,n))}var Ce=/invalid hook call/i,Ae=new Set,Ie=function(e,t){if(false){ var n; }},Pe=function(e,t,n){return void 0===n&&(n=w),e.theme!==n.theme&&e.theme||t||n.theme},Oe=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Re=/(^-|-$)/g;function De(e){return e.replace(Oe,"-").replace(Re,"")}var je=function(e){return Q(te(e)>>>0)};function Te(e){return"string"==typeof e&&( true||0)}var xe=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},ke=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Ve(e,t,n){var r=e[n];xe(t)&&xe(r)?Me(r,t):e[n]=t}function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,s=n;o<s.length;o++){var i=s[o];if(xe(i))for(var a in i)ke(a)&&Ve(e,i[a],a)}return e}var Be=react.createContext(),ze=Be.Consumer;function Le(e){var t=s(Be),n=i((function(){return function(e,t){if(!e)return D(14);if(E(e)){var n=e(t);return true?n:0}return Array.isArray(e)||"object"!=typeof e?D(8):t?v({},t,{},e):e}(e.theme,t)}),[e.theme,t]);return e.children?r.createElement(Be.Provider,{value:n},e.children):null}var Ge={};function Fe(e,t,n){var o=N(e),i=!Te(e),a=t.attrs,c=void 0===a?S:a,d=t.componentId,h=void 0===d?function(e,t){var n="string"!=typeof e?"sc":De(e);Ge[n]=(Ge[n]||0)+1;var r=n+"-"+je("5.2.1"+n+Ge[n]);return t?t+"-"+r:r}(t.displayName,t.parentComponentId):d,p=t.displayName,y=void 0===p?function(e){return Te(e)?"styled."+e:"Styled("+b(e)+")"}(e):p,g=t.displayName&&t.componentId?De(t.displayName)+"-"+t.componentId:t.componentId||h,_=o&&e.attrs?Array.prototype.concat(e.attrs,c).filter(Boolean):c,C=t.shouldForwardProp;o&&e.shouldForwardProp&&(C=t.shouldForwardProp?function(n,r){return e.shouldForwardProp(n,r)&&t.shouldForwardProp(n,r)}:e.shouldForwardProp);var A,I=new oe(n,g,o?e.componentStyle:void 0),P=I.isStatic&&0===c.length,O=function(e,t){return function(e,t,n,r){var o=e.attrs,i=e.componentStyle,a=e.defaultProps,c=e.foldedComponentIds,d=e.shouldForwardProp,h=e.styledComponentId,p=e.target; false&&0;var m=function(e,t,n){void 0===e&&(e=w);var r=v({},t,{theme:e}),o={};return n.forEach((function(e){var t,n,s,i=e;for(t in E(i)&&(i=i(r)),i)r[t]=o[t]="className"===t?(n=o[t],s=i[t],n&&s?n+" "+s:n||s):i[t]})),[r,o]}(Pe(t,(0,react.useContext)(Be),a)||w,t,o),y=m[0],g=m[1],S=function(e,t,n,r){var o=pe(),s=fe(),i=t?e.generateAndInjectStyles(w,o,s):e.generateAndInjectStyles(n,o,s);return false&&0, false&&0,i}(i,r,y, false?0:void 0),b=n,N=g.$as||t.$as||g.as||t.as||p,_=Te(N),C=g!==t?v({},t,{},g):t,A={};for(var I in C)"$"!==I[0]&&"as"!==I&&("forwardedAs"===I?A.as=C[I]:(d?d(I,is_prop_valid_esm):!_||is_prop_valid_esm(I))&&(A[I]=C[I]));return t.style&&g.style!==t.style&&(A.style=v({},t.style,{},g.style)),A.className=Array.prototype.concat(c,h,S!==h?S:null,t.className,g.className).filter(Boolean).join(" "),A.ref=b,(0,react.createElement)(N,A)}(A,e,t,P)};return O.displayName=y,(A=react.forwardRef(O)).attrs=_,A.componentStyle=I,A.displayName=y,A.shouldForwardProp=C,A.foldedComponentIds=o?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):S,A.styledComponentId=g,A.target=o?e.target:e,A.withComponent=function(e){var r=t.componentId,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["componentId"]),s=r&&r+"-"+(Te(e)?e:De(b(e)));return Fe(e,v({},o,{attrs:_,componentId:s}),n)},Object.defineProperty(A,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=o?Me({},e.defaultProps,t):t}}), false&&(0),A.toString=function(){return"."+A.styledComponentId},i&&hoist_non_react_statics_cjs_default()(A,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),A}var Ye=function(e){return function e(t,r,o){if(void 0===o&&(o=w),!(0,react_is.isValidElementType)(r))return D(1,String(r));var s=function(){return t(r,o,_e.apply(void 0,arguments))};return s.withConfig=function(n){return e(t,r,v({},o,{},n))},s.attrs=function(n){return e(t,r,v({},o,{attrs:Array.prototype.concat(o.attrs,n).filter(Boolean)}))},s}(Fe,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].forEach((function(e){Ye[e]=Ye(e)}));var qe=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ne(e),Z.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var o=r(Ne(this.rules,t,n,r).join(""),""),s=this.componentId+e;n.insertRules(s,s,o)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&Z.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function He(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var i=_e.apply(void 0,[e].concat(n)),a="sc-global-"+je(JSON.stringify(i)),u=new qe(i,a);function l(e){var t=pe(),n=fe(),o=s(Be),u=c(t.allocateGSInstance(a)).current;return false&&0, false&&0,d(u,e,t,o,n),null}function d(e,t,n,r,o){if(u.isStatic)u.renderStyles(e,P,n,o);else{var s=v({},t,{theme:Pe(t,r,l.defaultProps)});u.renderStyles(e,s,n,o)}}return false&&0,r.memo(l)}function $e(e){ false&&0;for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=_e.apply(void 0,[e].concat(n)).join(""),s=je(o);return new ve(s,o)}var We=/^\s*<\/[a-z]/i,Ue=function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString(),n=Y();return"<style "+[n&&'nonce="'+n+'"',_+'="true"','data-styled-version="5.2.1"'].filter(Boolean).join(" ")+">"+t+"</style>"},this.getStyleTags=function(){return e.sealed?D(2):e._emitSheetCSS()},this.getStyleElement=function(){var t;if(e.sealed)return D(2);var n=((t={})[_]="",t["data-styled-version"]="5.2.1",t.dangerouslySetInnerHTML={__html:e.instance.toString()},t),o=Y();return o&&(n.nonce=o),[react.createElement("style",v({},n,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Z({isServer:!0}),this.sealed=!1}var t=e.prototype;return t.collectStyles=function(e){return this.sealed?D(2):react.createElement(me,{sheet:this.instance},e)},t.interleaveWithNodeStream=function(e){if(A)return D(3);if(this.sealed)return D(2);this.seal();var t=__webpack_require__(2413),n=(t.Readable,t.Transform),r=e,o=this.instance,s=this._emitSheetCSS,i=new n({transform:function(e,t,n){var r=e.toString(),i=s();if(o.clearTag(),We.test(r)){var a=r.indexOf(">")+1,c=r.slice(0,a),u=r.slice(a);this.push(c+i+u)}else this.push(i+r);n()}});return r.on("error",(function(e){i.emit("error",e)})),r.pipe(i)},e}(),Je=function(e){var t=r.forwardRef((function(t,n){var o=s(Be),i=e.defaultProps,a=Pe(t,o,i);return false&&0,r.createElement(e,v({},t,{theme:a,ref:n}))}));return m(t,e),t.displayName="WithTheme("+b(e)+")",t},Ze=function(){return s(Be)},Xe={StyleSheet:Z,masterSheet:de}; false&&0, false&&0;/* harmony default export */ const styled_components_esm = (Ye);
//# sourceMappingURL=styled-components.esm.js.map

;// CONCATENATED MODULE: ./components/modal/styled.sc.ts
var __makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var styled_sc_assign = (undefined && undefined.__assign) || function () {
    styled_sc_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return styled_sc_assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

var ModalView = styled_components_esm.div.attrs(function (_a) {
    var _b = _a.visible, visible = _b === void 0 ? false : _b, props = __rest(_a, ["visible"]);
    return (styled_sc_assign(styled_sc_assign({}, props), { "speed": props.speed, "visible": visible, "maskPaddingVertical": props.maskPaddingVertical || "3rem" }));
})(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: ", ";\n    top: 0;\n    left: 0;\n    z-index: 2000;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    position: fixed;\n    padding-top: ", ";\n    padding-bottom: ", ";\n    background-color: rgba(0, 0, 0, 0.65);\n    animation: fading ", "ms forwards ease-out;\n\n    @keyframes fading {\n        0% {\n            opacity: 0;\n        }\n        100% {\n            opacity: 1;\n        }\n    }\n"], ["\n    display: ", ";\n    top: 0;\n    left: 0;\n    z-index: 2000;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    position: fixed;\n    padding-top: ", ";\n    padding-bottom: ", ";\n    background-color: rgba(0, 0, 0, 0.65);\n    animation: fading ", "ms forwards ease-out;\n\n    @keyframes fading {\n        0% {\n            opacity: 0;\n        }\n        100% {\n            opacity: 1;\n        }\n    }\n"])), function (props) { return (props.visible ? "block" : "none"); }, function (props) { return props.maskPaddingVertical; }, function (props) { return props.maskPaddingVertical; }, function (props) { return props.speed; });
var templateObject_1;

;// CONCATENATED MODULE: ./components/grid/Flex.sc.ts
var Flex_sc_makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var Flex_sc_assign = (undefined && undefined.__assign) || function () {
    Flex_sc_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Flex_sc_assign.apply(this, arguments);
};
var Flex_sc_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

var Flex = styled_components_esm.div.attrs(function (_a) {
    var _b = _a.direction, direction = _b === void 0 ? "row" : _b, props = Flex_sc_rest(_a, ["direction"]);
    var span = props.span || "100%";
    var xsmall = props.xsmall || "100%";
    var small = props.small || "100%";
    var medium = props.medium || span;
    var large = props.large || span;
    var xlarge = props.xlarge || span;
    return Flex_sc_assign(Flex_sc_assign({}, props), { span: span,
        xsmall: xsmall,
        medium: medium,
        large: large,
        small: small,
        xlarge: xlarge,
        direction: direction });
})(Flex_sc_templateObject_1 || (Flex_sc_templateObject_1 = Flex_sc_makeTemplateObject(["\n    display: flex;\n    flex: 0 0 ", ";\n    flex-wrap: wrap;\n    flex-direction: ", ";\n    @media only screen and (max-width: 600px) {\n        flex: 0 0 ", ";\n    }\n    @media only screen and (min-width: 600px) {\n        flex: 0 0 ", ";\n    }\n    @media only screen and (min-width: 768px) {\n        flex: 0 0 ", ";\n    }\n    @media only screen and (min-width: 992px) {\n        flex: 0 0 ", ";\n    }\n    @media only screen and (min-width: 1200px) {\n        flex: 0 0 ", ";\n    }\n"], ["\n    display: flex;\n    flex: 0 0 ", ";\n    flex-wrap: wrap;\n    flex-direction: ", ";\n    @media only screen and (max-width: 600px) {\n        flex: 0 0 ", ";\n    }\n    @media only screen and (min-width: 600px) {\n        flex: 0 0 ", ";\n    }\n    @media only screen and (min-width: 768px) {\n        flex: 0 0 ", ";\n    }\n    @media only screen and (min-width: 992px) {\n        flex: 0 0 ", ";\n    }\n    @media only screen and (min-width: 1200px) {\n        flex: 0 0 ", ";\n    }\n"])), function (_a) {
    var span = _a.span;
    return span;
}, function (_a) {
    var direction = _a.direction;
    return direction;
}, function (_a) {
    var xsmall = _a.xsmall;
    return xsmall;
}, function (_a) {
    var small = _a.small;
    return small;
}, function (_a) {
    var medium = _a.medium;
    return medium;
}, function (_a) {
    var large = _a.large;
    return large;
}, function (_a) {
    var xlarge = _a.xlarge;
    return xlarge;
});
/* harmony default export */ const Flex_sc = (Flex);
var Flex_sc_templateObject_1;

;// CONCATENATED MODULE: ./components/grid/Collapse.tsx
/* provided dependency */ var Collapse_React = __webpack_require__(7378);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Collapse_assign = (undefined && undefined.__assign) || function () {
    Collapse_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Collapse_assign.apply(this, arguments);
};

var isOpenStyle = { "height": "auto", "overflow": "initial" };
var isCloseStyle = { "height": "0px", "overflow": "hidden" };
var Collapse = /** @class */ (function (_super) {
    __extends(Collapse, _super);
    function Collapse(props) {
        var _this = _super.call(this, props) || this;
        _this.timeout = undefined;
        _this.container = undefined;
        _this.content = undefined;
        _this.onResize = function () {
            window.clearTimeout(_this.timeout);
            if (!_this.container || !_this.content) {
                return;
            }
            var _a = _this.props, isOpened = _a.isOpened, checkTimeout = _a.checkTimeout;
            var containerHeight = _this.container["clientHeight"];
            var contentHeight = _this.content["clientHeight"];
            var isFullyOpened = isOpened && contentHeight === containerHeight;
            var isFullyClosed = !isOpened && containerHeight === 0;
            if (isFullyOpened || isFullyClosed) {
                _this.onRest({
                    isFullyOpened: isFullyOpened,
                    isFullyClosed: isFullyClosed,
                    isOpened: isOpened,
                    containerHeight: containerHeight,
                    contentHeight: contentHeight,
                });
            }
            else {
                _this.onWork({
                    isFullyOpened: isFullyOpened,
                    isFullyClosed: isFullyClosed,
                    isOpened: isOpened,
                    containerHeight: containerHeight,
                    contentHeight: contentHeight,
                });
                _this.timeout = window.setTimeout(function () { return _this.onResize(); }, checkTimeout);
            }
        };
        _this.onRest = function (_a) {
            var isFullyOpened = _a.isFullyOpened, isFullyClosed = _a.isFullyClosed, isOpened = _a.isOpened, containerHeight = _a.containerHeight, contentHeight = _a.contentHeight;
            if (!_this.container || !_this.content) {
                return;
            }
            var hasOpened = isOpened &&
                _this.container.style.height === contentHeight + "px";
            var hasClosed = !isOpened && _this.container.style.height === "0px";
            if (hasOpened || hasClosed) {
                _this.container.style.overflow = isOpened
                    ? "initial"
                    : "hidden";
                _this.container.style.height = isOpened ? "auto" : "0px";
                var onRest = _this.props.onRest;
                if (onRest) {
                    onRest({
                        isFullyOpened: isFullyOpened,
                        isFullyClosed: isFullyClosed,
                        isOpened: isOpened,
                        containerHeight: containerHeight,
                        contentHeight: contentHeight,
                    });
                }
            }
        };
        _this.onWork = function (_a) {
            var isFullyOpened = _a.isFullyOpened, isFullyClosed = _a.isFullyClosed, isOpened = _a.isOpened, containerHeight = _a.containerHeight, contentHeight = _a.contentHeight;
            if (!_this.container || !_this.content) {
                return;
            }
            var isOpenining = isOpened &&
                _this.container.style.height === contentHeight + "px";
            var isClosing = !isOpened && _this.container.style.height === "0px";
            if (isOpenining || isClosing) {
                return;
            }
            _this.container.style.overflow = "hidden";
            _this.container.style.height = isOpened
                ? contentHeight + "px"
                : "0px";
            var onWork = _this.props.onWork;
            if (onWork) {
                onWork({
                    isFullyOpened: isFullyOpened,
                    isFullyClosed: isFullyClosed,
                    isOpened: isOpened,
                    containerHeight: containerHeight,
                    contentHeight: contentHeight,
                });
            }
        };
        if (props.initialStyle) {
            _this.initialStyle = props.initialStyle;
        }
        else {
            _this.initialStyle = props.isOpened ? isOpenStyle : isCloseStyle;
        }
        return _this;
    }
    Collapse.prototype.componentDidMount = function () {
        this.onResize();
    };
    Collapse.prototype.shouldComponentUpdate = function (nextProps) {
        var _a = this.props, theme = _a.theme, isOpened = _a.isOpened, children = _a.children;
        return (children !== nextProps.children ||
            isOpened !== nextProps.isOpened ||
            Object.keys(theme).some(function (c) { return theme[c] !== nextProps.theme[c]; }));
    };
    Collapse.prototype.getSnapshotBeforeUpdate = function () {
        if (!this.container || !this.content) {
            return null;
        }
        if (this.container.style.height === "auto") {
            var contentHeight = this.content["clientHeight"];
            this.container.style.height = contentHeight + "px";
        }
        return null;
    };
    Collapse.prototype.componentDidUpdate = function () {
        this.onResize();
    };
    Collapse.prototype.componentWillUnmount = function () {
        window.clearTimeout(this.timeout);
    };
    Collapse.prototype.render = function () {
        var _this = this;
        var _a = this.props, theme = _a.theme, children = _a.children;
        return ((0,jsx_runtime.jsx)("div", Collapse_assign({ ref: function (container) { return Object.assign(_this, { container: container }); }, className: theme.collapse, style: Collapse_assign(Collapse_assign({}, this.initialStyle), { "transition": "height " + this.props.time + "ms" }) }, { children: (0,jsx_runtime.jsx)("div", Collapse_assign({ ref: function (content) { return Object.assign(_this, { content: content }); }, className: theme.content }, { children: children }), void 0) }), void 0));
    };
    Collapse.defaultProps = {
        "theme": {
            "collapse": "--collapse",
            "content": "--content",
        },
        "initialStyle": undefined,
        "onRest": undefined,
        "onWork": undefined,
        "checkTimeout": 50,
    };
    return Collapse;
}(Collapse_React.Component));
/* harmony default export */ const grid_Collapse = (Collapse);

;// CONCATENATED MODULE: ./components/grid/Responsive.tsx
/* provided dependency */ var Responsive_React = __webpack_require__(7378);
var Responsive_assign = (undefined && undefined.__assign) || function () {
    Responsive_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Responsive_assign.apply(this, arguments);
};
var Responsive_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



var Responsive = Responsive_React.forwardRef(function ResponseRef(_a, ref) {
    var children = _a.children, _b = _a.Component, Component = _b === void 0 ? Flex_sc : _b, _c = _a.htmlTag, htmlTag = _c === void 0 ? "div" : _c, _d = _a.isCollapse, isCollapse = _d === void 0 ? false : _d, _e = _a.show, show = _e === void 0 ? true : _e, _f = _a.time, time = _f === void 0 ? 450 : _f, props = Responsive_rest(_a, ["children", "Component", "htmlTag", "isCollapse", "show", "time"]);
    if (!isCollapse) {
        return ((0,jsx_runtime.jsx)(Component, Responsive_assign({ as: htmlTag }, props, { ref: ref }, { children: children }), void 0));
    }
    return ((0,jsx_runtime.jsx)(grid_Collapse, Responsive_assign({ isOpened: show, time: time }, { children: (0,jsx_runtime.jsx)(Component, Responsive_assign({ as: htmlTag }, props, { ref: ref }, { children: children }), void 0) }), void 0));
});
/* harmony default export */ const grid_Responsive = (Responsive);

;// CONCATENATED MODULE: ./components/grid/View.sc.ts
var View_sc_makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var View = styled_components_esm(grid_Responsive)(View_sc_templateObject_1 || (View_sc_templateObject_1 = View_sc_makeTemplateObject(["\n    justify-items: center;\n    flex-wrap: wrap;\n"], ["\n    justify-items: center;\n    flex-wrap: wrap;\n"])));
/* harmony default export */ const View_sc = (View);
var View_sc_templateObject_1;

;// CONCATENATED MODULE: ./components/grid/Container.sc.ts
var Container_sc_makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var Container_sc_Container = styled_components_esm(grid_Responsive)(Container_sc_templateObject_1 || (Container_sc_templateObject_1 = Container_sc_makeTemplateObject(["\n    display: flex;\n    flex-wrap: wrap;\n    justify-items: center;\n    width: 100%;\n"], ["\n    display: flex;\n    flex-wrap: wrap;\n    justify-items: center;\n    width: 100%;\n"])));
/* harmony default export */ const Container_sc = (Container_sc_Container);
var Container_sc_templateObject_1;

;// CONCATENATED MODULE: ./components/grid/index.ts




;// CONCATENATED MODULE: ./components/modal/ModalContent.tsx
var ModalContent_assign = (undefined && undefined.__assign) || function () {
    ModalContent_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return ModalContent_assign.apply(this, arguments);
};



var ModalContent = (0,react.forwardRef)(function ModalContentRef(_a, ref) {
    var children = _a.children, width = _a.width, onClick = _a.onClick;
    return ((0,jsx_runtime.jsx)("div", ModalContent_assign({ className: "modalContent", style: { width: width }, onClick: onClick, ref: ref }, { children: children }), void 0));
});
/* harmony default export */ const modal_ModalContent = (ModalContent);

// EXTERNAL MODULE: ../node_modules/@hot-loader/react-dom/index.js
var react_dom = __webpack_require__(6794);
;// CONCATENATED MODULE: ./components/portal/Portal.tsx
var Portal_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



var ReactPortal = function (_a) {
    var _b = _a.element, element = _b === void 0 ? "div" : _b, props = Portal_rest(_a, ["element"]);
    var defaultNode = (0,react.useRef)(null);
    (0,react.useEffect)(function () { return function () {
        if (defaultNode.current) {
            document.body.removeChild(defaultNode.current);
        }
        defaultNode.current = null;
    }; }, []);
    if (!isClient_canUseDOM) {
        return null;
    }
    if (!props.node && !defaultNode.current) {
        defaultNode.current = document.createElement(element);
        if (props.className && defaultNode.current) {
            defaultNode.current.setAttribute("class", props.className);
        }
        document.body.appendChild(defaultNode.current);
    }
    return react_dom.createPortal(props.children, props.node || defaultNode.current);
};
/* harmony default export */ const Portal = (ReactPortal);

;// CONCATENATED MODULE: ./components/portal/index.ts


;// CONCATENATED MODULE: ./settings/keyboard.ts
/* eslint-disable max-lines */
var keyboard = {
    "backspace": 8,
    "tab": 9,
    "enter": 13,
    "shift": 16,
    "ctrl": 17,
    "alt": 18,
    "pauseBreak": 19,
    "capsLock": 20,
    "esc": 27,
    "pageUp": 33,
    "space": 32,
    "pageDown": 34,
    "end": 35,
    "home": 36,
    "arrowLeft": 37,
    "arrowUp": 38,
    "arrowRight": 39,
    "arrowDown": 40,
    "printScreen": 44,
    "insert": 45,
    "delete": 46,
    "0": 48,
    "1": 49,
    "2": 50,
    "3": 51,
    "4": 52,
    "5": 53,
    "6": 54,
    "7": 55,
    "8": 56,
    "9": 57,
    "a": 65,
    "b": 66,
    "c": 67,
    "d": 68,
    "e": 69,
    "f": 70,
    "g": 71,
    "h": 72,
    "i": 73,
    "j": 74,
    "k": 75,
    "l": 76,
    "m": 77,
    "n": 78,
    "o": 79,
    "p": 80,
    "q": 81,
    "r": 82,
    "s": 83,
    "t": 84,
    "u": 85,
    "v": 86,
    "w": 87,
    "x": 88,
    "y": 89,
    "z": 90,
    "leftWindowKey": 91,
    "rightWindowKey": 92,
    "selectKey": 93,
    "numpad0": 96,
    "numpad1": 97,
    "numpad2": 98,
    "numpad3": 99,
    "numpad4": 100,
    "numpad5": 101,
    "numpad6": 102,
    "numpad7": 103,
    "numpad8": 104,
    "numpad9": 105,
    "multiply": 106,
    "add": 107,
    "subtract": 109,
    "decimalPoint": 110,
    "divide": 111,
    "f1": 112,
    "f2": 113,
    "f3": 114,
    "f4": 115,
    "f5": 116,
    "f6": 117,
    "f7": 118,
    "f8": 119,
    "f9": 120,
    "f10": 121,
    "f11": 122,
    "f12": 123,
    "numLock": 144,
    "scrollLock": 145,
    "myComputer": 182,
    "calculator": 183,
    "semiColon": 186,
    "equalSign": 187,
    "comma": 188,
    "dash": 189,
    "period": 190,
    "forwardSlash": 191,
    "openBracket": 219,
    "backSlash": 220,
    "closeBracket": 221,
    "singleQuote": 222,
};

;// CONCATENATED MODULE: ./hooks/useBlockScroll.ts


var useHookBlockScroll = function (visible) {
    var domRef = (0,react.useRef)({ "overflowY": document.body.style.overflowY });
    (0,react.useEffect)(function () {
        var copyRef = domRef.current;
        if (visible) {
            document.body.style.overflowY = "hidden";
            document.documentElement.style.overflowY = "hidden";
        }
        else {
            domRef.current.overflowY = document.body.style.overflowY;
            document.body.style.overflowY = domRef.current.overflowY;
            document.documentElement.style.overflowY = domRef.current.overflowY;
        }
        return function () {
            document.body.style.overflowY = copyRef.overflowY;
            document.documentElement.style.overflowY = copyRef.overflowY;
        };
    }, [visible]);
};
var useBlockScroll = isClient_canUseDOM ? useHookBlockScroll : function () { };

;// CONCATENATED MODULE: ./hooks/useOnClickOutside.ts

var useOnClickOutside = function (ref, handler) {
    (0,react.useEffect)(function () {
        var listener = function (event) {
            var el = ref === null || ref === void 0 ? void 0 : ref.current;
            // Do nothing if clicking ref's element or descendent elements
            if (!el || el.contains((event === null || event === void 0 ? void 0 : event.target) || null)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("click", listener);
        document.addEventListener("touchstart", listener);
        return function () {
            document.removeEventListener("click", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
};

;// CONCATENATED MODULE: ./components/modal/Modal.tsx
/* provided dependency */ var Modal_React = __webpack_require__(7378);
var Modal_assign = (undefined && undefined.__assign) || function () {
    Modal_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Modal_assign.apply(this, arguments);
};

/* eslint-disable max-lines */









var defaultModalPartProps = {
    "span": "100%",
    "style": {
        "padding": "1rem",
    },
};
var Modal = Modal_React.forwardRef(function ModalRef(_a, externalRef) {
    var visible = _a.visible, _b = _a.width, width = _b === void 0 ? "60%" : _b, _c = _a.closeOnMask, closeOnMask = _c === void 0 ? true : _c, footer = _a.footer, closeIcon = _a.closeIcon, onClose = _a.onClose, _d = _a.maskPaddingVertical, maskPaddingVertical = _d === void 0 ? "3rem" : _d, _e = _a.headerProps, headerProps = _e === void 0 ? defaultModalPartProps : _e, _f = _a.bodyProps, bodyProps = _f === void 0 ? defaultModalPartProps : _f, _g = _a.footerProps, footerProps = _g === void 0 ? defaultModalPartProps : _g, title = _a.title, closeColor = _a.closeColor, _h = _a.closeOnEsc, closeOnEsc = _h === void 0 ? true : _h, children = _a.children, _j = _a.animationTime, animationTime = _j === void 0 ? 950 : _j;
    var ref = (0,react.useRef)(null);
    (0,react.useImperativeHandle)(externalRef, function () { return ref.current; });
    useBlockScroll(visible);
    var onClickMask = function (e) {
        if (closeOnMask && visible) {
            e.stopPropagation();
            onClose();
        }
    };
    useOnClickOutside(ref, onClickMask);
    (0,react.useEffect)(function () {
        var toggleVisibility = function (e) {
            if (e.keyCode === keyboard.esc && closeOnEsc && visible) {
                onClose();
            }
        };
        window.addEventListener("keydown", toggleVisibility);
        return function () { return window.removeEventListener("keydown", toggleVisibility); };
    }, [closeOnEsc, onClose, visible]);
    var onModalClick = function (event) {
        event.persist();
        event.stopPropagation();
    };
    var headerViewProps = Modal_assign(Modal_assign({}, headerProps), { "style": Modal_assign(Modal_assign({ "borderBottom": "1px solid #12121270", "justifyContent": "space-between" }, defaultModalPartProps.style), headerProps.style) });
    var bodyViewProps = Modal_assign(Modal_assign({}, bodyProps), { "style": Modal_assign(Modal_assign({}, defaultModalPartProps.style), bodyProps.style) });
    var footerViewProps = Modal_assign(Modal_assign({}, footerProps), { "style": Modal_assign(Modal_assign({ "textAlign": "right" }, defaultModalPartProps.style), footerProps.style) });
    return ((0,jsx_runtime.jsx)(Portal, { children: (0,jsx_runtime.jsx)(ModalView, Modal_assign({ visible: visible, maskPaddingVertical: maskPaddingVertical, speed: animationTime }, { children: (0,jsx_runtime.jsxs)(modal_ModalContent, Modal_assign({ ref: ref, onClick: onModalClick, width: width }, { children: [(0,jsx_runtime.jsxs)(View_sc, Modal_assign({}, headerViewProps, { children: [(0,jsx_runtime.jsx)(View_sc, Modal_assign({ span: "100%", xsmall: "90%", small: "90%" }, { children: title }), void 0),
                            (0,jsx_runtime.jsx)(modal_Close, { color: closeColor, onClick: onClose, icon: closeIcon }, void 0)] }), void 0),
                    (0,jsx_runtime.jsx)(View_sc, Modal_assign({}, bodyViewProps, { children: children }), void 0),
                    !!footer && (0,jsx_runtime.jsx)(View_sc, Modal_assign({}, footerViewProps, { children: footer }), void 0)] }), void 0) }), void 0) }, void 0));
});
/* harmony default export */ const modal_Modal = (Modal);

;// CONCATENATED MODULE: ./components/modal/index.ts


;// CONCATENATED MODULE: ./components/styled/Contacts.sc.ts
var Contacts_sc_makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};


var Contacts = styled_components_esm(Container_sc)(Contacts_sc_templateObject_1 || (Contacts_sc_templateObject_1 = Contacts_sc_makeTemplateObject(["\n    justify-content: space-around;\n    align-items: center;\n    padding: 1rem;\n"], ["\n    justify-content: space-around;\n    align-items: center;\n    padding: 1rem;\n"])));
var ContactItem = styled_components_esm.address(templateObject_2 || (templateObject_2 = Contacts_sc_makeTemplateObject(["\n    display: flex;\n    align-items: center;\n    color: #626262;\n    svg {\n        margin-right: 6px;\n        fill: #626262;\n    }\n"], ["\n    display: flex;\n    align-items: center;\n    color: #626262;\n    svg {\n        margin-right: 6px;\n        fill: #626262;\n    }\n"])));
var Contacts_sc_templateObject_1, templateObject_2;

;// CONCATENATED MODULE: ./components/styled/Name.sc.ts
var Name_sc_makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var Name = styled_components_esm.h2(Name_sc_templateObject_1 || (Name_sc_templateObject_1 = Name_sc_makeTemplateObject(["\n    margin: 5px 0 0;\n    font-size: 35px;\n    font-weight: 600;\n    color: #222f5c;\n"], ["\n    margin: 5px 0 0;\n    font-size: 35px;\n    font-weight: 600;\n    color: #222f5c;\n"])));
var Name_sc_templateObject_1;

;// CONCATENATED MODULE: ./components/styled/Text.sc.ts
var Text_sc_makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var Text_sc_assign = (undefined && undefined.__assign) || function () {
    Text_sc_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Text_sc_assign.apply(this, arguments);
};
var Text_sc_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

var Text = styled_components_esm.p.attrs(function (_a) {
    var _b = _a.size, size = _b === void 0 ? "18px" : _b, _c = _a.color, color = _c === void 0 ? "#5e6788" : _c, _d = _a.height, height = _d === void 0 ? "1.5em" : _d, _e = _a.weight, weight = _e === void 0 ? 500 : _e, props = Text_sc_rest(_a, ["size", "color", "height", "weight"]);
    return (Text_sc_assign(Text_sc_assign({}, props), { size: size,
        color: color,
        height: height,
        weight: weight }));
})(Text_sc_templateObject_1 || (Text_sc_templateObject_1 = Text_sc_makeTemplateObject(["\n    margin-top: 1em;\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n    text-align: left;\n    line-height: ", ";\n"], ["\n    margin-top: 1em;\n    font-size: ", ";\n    font-weight: ", ";\n    color: ", ";\n    text-align: left;\n    line-height: ", ";\n"])), function (_a) {
    var size = _a.size;
    return size;
}, function (_a) {
    var weight = _a.weight;
    return weight;
}, function (_a) {
    var color = _a.color;
    return color;
}, function (_a) {
    var height = _a.height;
    return height;
});
var Text_sc_templateObject_1;

;// CONCATENATED MODULE: ./components/styled/Title.sc.ts
var Title_sc_makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var Title = styled_components_esm.h1(Title_sc_templateObject_1 || (Title_sc_templateObject_1 = Title_sc_makeTemplateObject(["\n    color: #7d7d7d;\n    font-size: 22px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin: 0;\n"], ["\n    color: #7d7d7d;\n    font-size: 22px;\n    font-weight: 400;\n    text-transform: uppercase;\n    margin: 0;\n"])));
var Title_sc_templateObject_1;

;// CONCATENATED MODULE: ./components/styled/index.ts





// EXTERNAL MODULE: ./theme/icons/location.svg
var icons_location = __webpack_require__(1354);
// EXTERNAL MODULE: ./theme/icons/mail.svg
var mail = __webpack_require__(223);
// EXTERNAL MODULE: ./theme/icons/telephone.svg
var telephone = __webpack_require__(9433);
// EXTERNAL MODULE: ./theme/icons/calendar.svg
var calendar = __webpack_require__(9361);
;// CONCATENATED MODULE: ./components/showcase/sh_aboutme/ShowAboutMe.tsx
var ShowAboutMe_assign = (undefined && undefined.__assign) || function () {
    ShowAboutMe_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return ShowAboutMe_assign.apply(this, arguments);
};










var ShowAboutMe = function () {
    var history = useHistory();
    var handleRoute = function () { return history.push(RoutePage.MAIN); };
    return ((0,jsx_runtime.jsxs)(modal_Modal, ShowAboutMe_assign({ visible: true, onClose: handleRoute, title: (0,jsx_runtime.jsx)(Title, { children: "About me" }, void 0), bodyProps: {
            "style": {
                "background": "#fff",
            },
        } }, { children: [(0,jsx_runtime.jsx)(Container_sc, { children: (0,jsx_runtime.jsx)(Name, { children: "Arman Khilko" }, void 0) }, void 0),
            (0,jsx_runtime.jsxs)(Contacts, { children: [(0,jsx_runtime.jsxs)(ContactItem, { children: [" ", (0,jsx_runtime.jsx)(icons_location.default, { width: "20px" }, void 0), " Armenia, Yerevan", " "] }, void 0),
                    (0,jsx_runtime.jsxs)(ContactItem, { children: [" ", (0,jsx_runtime.jsx)(mail.default, { width: "20px" }, void 0), " ", (0,jsx_runtime.jsx)("a", ShowAboutMe_assign({ href: "mailto:arma739805@gmail.com" }, { children: "arma739805@gmail.com" }), void 0), " "] }, void 0),
                    (0,jsx_runtime.jsxs)(ContactItem, { children: [" ", (0,jsx_runtime.jsx)(telephone.default, { width: "20px" }, void 0), " ", (0,jsx_runtime.jsx)("a", ShowAboutMe_assign({ href: "tel:+374-98-220-530" }, { children: "+374-98-220-530" }), void 0), " "] }, void 0),
                    (0,jsx_runtime.jsxs)(ContactItem, { children: [" ", (0,jsx_runtime.jsx)(calendar.default, { width: "20px" }, void 0), " 07.09.1998", " "] }, void 0)] }, void 0),
            (0,jsx_runtime.jsxs)(Container_sc, { children: [(0,jsx_runtime.jsxs)(Text, { children: ["Hi there", " ", (0,jsx_runtime.jsx)("span", ShowAboutMe_assign({ role: "img", "aria-label": "wave" }, { children: "\uD83D\uDC4B" }), void 0), ". I am very glad that you are here now and can get to know me better. My path as a programmer began three years ago. After a few months I did an internship as a webmaster and have not stopped since then", " ", (0,jsx_runtime.jsx)("span", ShowAboutMe_assign({ role: "img", "aria-label": "winking face" }, { children: "\uD83D\uDE09" }), void 0), ". It's been three years since I had the opportunity to work with great people, learn every day, mostly always, and make great friendships. Currently, I continue to seek new skills, learn and share my humble knowledge as much as possible."] }, void 0),
                    (0,jsx_runtime.jsx)(Text, { children: "I strive to contribute to the success of the team hard work, attention to detail, and excellent organizational skills. A clear of the stack of network protocols and technologies that I own. Motivated to learn, grow, and succeed in IT. I'm interested in the best practices for organizing code, and I have a goal and desire to become an architect in my field." }, void 0)] }, void 0)] }), void 0));
};
/* harmony default export */ const sh_aboutme_ShowAboutMe = (ShowAboutMe);

;// CONCATENATED MODULE: ./components/showcase/sh_aboutme/index.ts


;// CONCATENATED MODULE: ./hoc/withUnmount.tsx
var withUnmount_assign = (undefined && undefined.__assign) || function () {
    withUnmount_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return withUnmount_assign.apply(this, arguments);
};
var withUnmount_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


var withUnmount = function (WrappedComponent) {
    return function UnmountHOC(_a) {
        var onLoaded = _a.onLoaded, props = withUnmount_rest(_a, ["onLoaded"]);
        (0,react.useEffect)(function () { return function () {
            onLoaded();
        }; }, [onLoaded]);
        return (0,jsx_runtime.jsx)(WrappedComponent, withUnmount_assign({}, props), void 0);
    };
};
/* harmony default export */ const hoc_withUnmount = (withUnmount);

;// CONCATENATED MODULE: ./components/loading/RingLoading.sc.tsx
var RingLoading_sc_makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var RingLoading_sc_assign = (undefined && undefined.__assign) || function () {
    RingLoading_sc_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return RingLoading_sc_assign.apply(this, arguments);
};
var RingLoading_sc_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


var RingLoading = hoc_withUnmount(styled_components_esm.div.attrs(function (_a) {
    var _b = _a.color, color = _b === void 0 ? "#fff" : _b, _c = _a.size, size = _c === void 0 ? "50px" : _c, _d = _a.backColor, backColor = _d === void 0 ? "#c3c3c3" : _d, props = RingLoading_sc_rest(_a, ["color", "size", "backColor"]);
    return (RingLoading_sc_assign(RingLoading_sc_assign({}, props), { size: size,
        color: color,
        backColor: backColor }));
})(RingLoading_sc_templateObject_1 || (RingLoading_sc_templateObject_1 = RingLoading_sc_makeTemplateObject(["\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    border: 0.25rem solid;\n    border-color: ", ";\n    border-top-color: ", ";\n    animation: spin 1s infinite linear;\n\n    @keyframes spin {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n"], ["\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    border: 0.25rem solid;\n    border-color: ", ";\n    border-top-color: ", ";\n    animation: spin 1s infinite linear;\n\n    @keyframes spin {\n        0% {\n            transform: rotate(0deg);\n        }\n        100% {\n            transform: rotate(360deg);\n        }\n    }\n"])), function (_a) {
    var size = _a.size;
    return size;
}, function (_a) {
    var size = _a.size;
    return size;
}, function (_a) {
    var backColor = _a.backColor;
    return backColor;
}, function (_a) {
    var color = _a.color;
    return color;
}));
var RingLoading_sc_templateObject_1;

;// CONCATENATED MODULE: ./components/loading/index.ts


;// CONCATENATED MODULE: ./components/icon/SVG.tsx
var SVG_assign = (undefined && undefined.__assign) || function () {
    SVG_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return SVG_assign.apply(this, arguments);
};



var SVG = function (_a) {
    var id = _a.id, size = _a.size, path = _a.path, _b = _a.onLoaded, onLoaded = _b === void 0 ? function () { } : _b;
    var pathname = path ? path + "/" : "";
    var IconComponent = (0,react.lazy)(function () { return __webpack_require__(7597)("./" + pathname + id + ".svg"); });
    return ((0,jsx_runtime.jsx)(react.Suspense, SVG_assign({ fallback: (0,jsx_runtime.jsx)(RingLoading, { color: "#7d7d7d", backColor: "#fff", size: size, onLoaded: onLoaded }, void 0) }, { children: (0,jsx_runtime.jsx)(IconComponent, { width: size, height: size }, void 0) }), void 0));
};

;// CONCATENATED MODULE: ./components/icon/Icon.tsx
var Icon_assign = (undefined && undefined.__assign) || function () {
    Icon_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Icon_assign.apply(this, arguments);
};



var Icon = function (_a) {
    var icon = _a.icon, onClick = _a.onClick, className = _a.className, path = _a.path, _b = _a.size, size = _b === void 0 ? "50px" : _b, onLoaded = _a.onLoaded;
    return ((0,jsx_runtime.jsx)("div", Icon_assign({ className: className, onClick: onClick }, { children: (0,jsx_runtime.jsx)(SVG, { id: icon, size: size, path: path, onLoaded: onLoaded }, void 0) }), void 0));
};
/* harmony default export */ const icon_Icon = ((0,react.memo)(Icon));

;// CONCATENATED MODULE: ./components/icon/index.ts



;// CONCATENATED MODULE: ./components/showcase/sh_skills/SkillItem.tsx
var SkillItem_makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var SkillItem_assign = (undefined && undefined.__assign) || function () {
    SkillItem_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return SkillItem_assign.apply(this, arguments);
};
var SkillItem_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





var Degree;
(function (Degree) {
    Degree["JUNIOR"] = "#c52323";
    Degree["MIDDLE"] = "#237ec5";
    Degree["SENIOR"] = "#23c534";
})(Degree || (Degree = {}));
// eslint-disable-next-line @typescript-eslint/no-unused-vars
var CircleItem = styled_components_esm(function (_a) {
    var fill = _a.fill, color = _a.color, props = SkillItem_rest(_a, ["fill", "color"]);
    return ((0,jsx_runtime.jsx)("div", SkillItem_assign({}, props), void 0));
})(SkillItem_templateObject_1 || (SkillItem_templateObject_1 = SkillItem_makeTemplateObject(["\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    border: 1px solid ", ";\n    background-color: ", ";\n"], ["\n    width: 8px;\n    height: 8px;\n    border-radius: 50%;\n    border: 1px solid ", ";\n    background-color: ", ";\n"])), function (_a) {
    var color = _a.color;
    return color;
}, function (_a) {
    var fill = _a.fill, color = _a.color;
    return (fill ? color : "transparent");
});
var CircleContainer = styled_components_esm(Container_sc)(SkillItem_templateObject_2 || (SkillItem_templateObject_2 = SkillItem_makeTemplateObject(["\n    justify-content: space-between;\n"], ["\n    justify-content: space-between;\n"])));
var StyleSkillItem = styled_components_esm.div(templateObject_3 || (templateObject_3 = SkillItem_makeTemplateObject(["\n    margin: 10px;\n"], ["\n    margin: 10px;\n"])));
var SkillItem = function (_a) {
    var performance = _a.performance, _b = _a.path, path = _b === void 0 ? "skills" : _b, props = SkillItem_rest(_a, ["performance", "path"]);
    var _c = useToggle(), isToggled = _c.isToggled, positiveToggle = _c.positiveToggle;
    var color = performance < 3
        ? Degree.JUNIOR
        : performance <= 4
            ? Degree.MIDDLE
            : Degree.SENIOR;
    var performanceMap = Array(5)
        .fill(null)
        .map(function (_, index) { return ((0,jsx_runtime.jsx)(CircleItem, { fill: index + 1 <= performance, color: color }, index)); });
    return ((0,jsx_runtime.jsxs)(StyleSkillItem, { children: [(0,jsx_runtime.jsx)(icon_Icon, SkillItem_assign({ path: path, onLoaded: positiveToggle }, props), void 0),
            isToggled && (0,jsx_runtime.jsx)(CircleContainer, { children: performanceMap }, void 0)] }, void 0));
};
/* harmony default export */ const sh_skills_SkillItem = (SkillItem);
var SkillItem_templateObject_1, SkillItem_templateObject_2, templateObject_3;

;// CONCATENATED MODULE: ./components/showcase/sh_skills/ShowSkills.tsx
var ShowSkills_makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var ShowSkills_assign = (undefined && undefined.__assign) || function () {
    ShowSkills_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return ShowSkills_assign.apply(this, arguments);
};






var Skills = styled_components_esm(Container_sc)(ShowSkills_templateObject_1 || (ShowSkills_templateObject_1 = ShowSkills_makeTemplateObject(["\n    justify-content: space-around;\n    margin: 10px;\n    flex: initial;\n"], ["\n    justify-content: space-around;\n    margin: 10px;\n    flex: initial;\n"])));
var ShowSkills = function (_a) {
    var onClose = _a.onClose, visible = _a.visible;
    return ((0,jsx_runtime.jsxs)(modal_Modal, ShowSkills_assign({ title: (0,jsx_runtime.jsx)(Title, { children: "Skills" }, void 0), onClose: onClose, visible: visible }, { children: [(0,jsx_runtime.jsxs)(Container_sc, { children: [(0,jsx_runtime.jsx)(Name, { children: "Software Development" }, void 0),
                    (0,jsx_runtime.jsxs)(Skills, { children: [(0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "javascript-logo", performance: 5 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "typescript-logo", performance: 4 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "java-logo", performance: 2 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "apollographql-logo", performance: 4 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "graphql-logo", performance: 4 }, void 0)] }, void 0)] }, void 0),
            (0,jsx_runtime.jsxs)(Container_sc, { children: [(0,jsx_runtime.jsx)(Name, { children: "Front End" }, void 0),
                    (0,jsx_runtime.jsxs)(Skills, { children: [(0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "html-logo", performance: 5 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "css-logo", performance: 5 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "sass-logo", performance: 5 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "postcss-logo", performance: 5 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "react-logo", performance: 5 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "redux-logo", performance: 4 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "redux-saga-logo", performance: 3 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "styled-components-logo", performance: 4 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "next-js-logo", performance: 3 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "antd-logo", performance: 4 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "jquery-logo", performance: 2 }, void 0)] }, void 0)] }, void 0),
            (0,jsx_runtime.jsxs)(Container_sc, { children: [(0,jsx_runtime.jsx)(Name, { children: "Back End" }, void 0),
                    (0,jsx_runtime.jsxs)(Skills, { children: [(0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "node-js-logo", performance: 4 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "ts-node-logo", performance: 4 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "express-logo", performance: 4 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "mongodb-logo", performance: 2 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "postgresql-logo", performance: 3 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "typeorm-logo", performance: 4 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "sequelize-logo", performance: 3 }, void 0)] }, void 0)] }, void 0),
            (0,jsx_runtime.jsxs)(Container_sc, { children: [(0,jsx_runtime.jsx)(Name, { children: "Tools" }, void 0),
                    (0,jsx_runtime.jsx)(Skills, { children: (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "webpack-logo", performance: 4 }, void 0) }, void 0)] }, void 0),
            (0,jsx_runtime.jsxs)(Container_sc, { children: [(0,jsx_runtime.jsx)(Name, { children: "IDEA" }, void 0),
                    (0,jsx_runtime.jsxs)(Skills, { children: [(0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "visual-studio-code-logo", performance: 5 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "intellij-idea-logo", performance: 2 }, void 0)] }, void 0)] }, void 0),
            (0,jsx_runtime.jsxs)(Container_sc, { children: [(0,jsx_runtime.jsx)(Name, { children: "System & Networking" }, void 0),
                    (0,jsx_runtime.jsxs)(Skills, { children: [(0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "git-logo", performance: 4 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "github-logo", performance: 4 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "gitlab-logo", performance: 3 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "gitkraken-logo", performance: 3 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "npm-logo", performance: 4 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "linux-logo", performance: 2 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "cloudinary-logo", performance: 3 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "twilio-logo", performance: 3 }, void 0),
                            (0,jsx_runtime.jsx)(sh_skills_SkillItem, { icon: "stripe-logo", performance: 3 }, void 0)] }, void 0)] }, void 0)] }), void 0));
};
/* harmony default export */ const sh_skills_ShowSkills = (ShowSkills);
var ShowSkills_templateObject_1;

;// CONCATENATED MODULE: ./components/showcase/sh_skills/index.ts


;// CONCATENATED MODULE: ./components/showcase/sh_passions/ShowPassions.tsx
var ShowPassions_makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var ShowPassions_assign = (undefined && undefined.__assign) || function () {
    ShowPassions_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return ShowPassions_assign.apply(this, arguments);
};






var PassionItems = styled_components_esm(Container_sc)(ShowPassions_templateObject_1 || (ShowPassions_templateObject_1 = ShowPassions_makeTemplateObject(["\n    justify-content: space-around;\n    flex: inherit;\n"], ["\n    justify-content: space-around;\n    flex: inherit;\n"])));
var ShowPassions = function (_a) {
    var onClose = _a.onClose, visible = _a.visible;
    return ((0,jsx_runtime.jsx)(modal_Modal, ShowPassions_assign({ title: (0,jsx_runtime.jsx)(Title, { children: "Passions" }, void 0), onClose: onClose, visible: visible }, { children: (0,jsx_runtime.jsxs)(PassionItems, { children: [(0,jsx_runtime.jsx)(icon_Icon, { icon: "travel", path: "passions" }, void 0),
                (0,jsx_runtime.jsx)(icon_Icon, { icon: "compose", path: "passions" }, void 0),
                (0,jsx_runtime.jsx)(icon_Icon, { icon: "book", path: "passions" }, void 0),
                (0,jsx_runtime.jsx)(icon_Icon, { icon: "sport", path: "passions" }, void 0),
                (0,jsx_runtime.jsx)(icon_Icon, { icon: "coffee", path: "passions" }, void 0),
                (0,jsx_runtime.jsx)(icon_Icon, { icon: "music", path: "passions" }, void 0)] }, void 0) }), void 0));
};
/* harmony default export */ const sh_passions_ShowPassions = (ShowPassions);
var ShowPassions_templateObject_1;

;// CONCATENATED MODULE: ./components/showcase/sh_passions/index.ts


;// CONCATENATED MODULE: ./components/links/LinkButton.tsx
var LinkButton_makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var LinkButton_assign = (undefined && undefined.__assign) || function () {
    LinkButton_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return LinkButton_assign.apply(this, arguments);
};
var LinkButton_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



var NormalizeButton = styled_components_esm.button(LinkButton_templateObject_1 || (LinkButton_templateObject_1 = LinkButton_makeTemplateObject(["\n    background: none;\n    color: inherit;\n    border: none;\n    padding: 0;\n    font: inherit;\n    cursor: pointer;\n    outline: inherit;\n"], ["\n    background: none;\n    color: inherit;\n    border: none;\n    padding: 0;\n    font: inherit;\n    cursor: pointer;\n    outline: inherit;\n"])));
var LinkButton = function (_a) {
    var to = _a.to, children = _a.children, className = _a.className, id = _a.id, onClick = _a.onClick, props = LinkButton_rest(_a, ["to", "children", "className", "id", "onClick"]);
    return (_jsx(Link, LinkButton_assign({ to: to }, props, { children: _jsx(NormalizeButton, LinkButton_assign({ onClick: onClick, id: id, className: className }, { children: children }), void 0) }), void 0));
};
var LinkButton_templateObject_1;

;// CONCATENATED MODULE: ./components/links/UnifiedLink.tsx
var UnifiedLink_assign = (undefined && undefined.__assign) || function () {
    UnifiedLink_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return UnifiedLink_assign.apply(this, arguments);
};


var isExternalLink = function (url) {
    return typeof url === "string" &&
        (url.startsWith("http") ||
            url.startsWith("https") ||
            url.startsWith("mailto") ||
            url.startsWith("tel:"));
};
var UnifiedLink = function (_a) {
    var to = _a.to, children = _a.children, _b = _a.target, target = _b === void 0 ? "" : _b, className = _a.className;
    var Component = (to && isExternalLink(to)) || !!target ? "a" : react_router_dom_Link;
    return Component === "a" ? ((0,jsx_runtime.jsx)(Component, UnifiedLink_assign({ className: className, target: target, href: to }, { children: children }), void 0)) : ((0,jsx_runtime.jsx)(Component, UnifiedLink_assign({ to: to, className: className }, { children: children }), void 0));
};

;// CONCATENATED MODULE: ./components/links/index.ts



// EXTERNAL MODULE: ./theme/icons/education.svg
var education = __webpack_require__(2956);
;// CONCATENATED MODULE: ./components/showcase/sh_education/ShowEducation.tsx
var ShowEducation_makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var ShowEducation_assign = (undefined && undefined.__assign) || function () {
    ShowEducation_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return ShowEducation_assign.apply(this, arguments);
};







var StyledEducationItem = styled_components_esm(Container_sc)(ShowEducation_templateObject_1 || (ShowEducation_templateObject_1 = ShowEducation_makeTemplateObject(["\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n\n    .university {\n        font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\";\n        flex: 1 0 60%;\n        text-decoration: underline;\n        font-weight: 500;\n        text-align: justify;\n        margin-left: 30px;\n    }\n"], ["\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n\n    .university {\n        font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\";\n        flex: 1 0 60%;\n        text-decoration: underline;\n        font-weight: 500;\n        text-align: justify;\n        margin-left: 30px;\n    }\n"])));
var ShowEducation = function (_a) {
    var onClose = _a.onClose, visible = _a.visible;
    return ((0,jsx_runtime.jsx)(modal_Modal, ShowEducation_assign({ title: (0,jsx_runtime.jsx)(Title, { children: "Education" }, void 0), onClose: onClose, visible: visible, width: "50%" }, { children: (0,jsx_runtime.jsxs)(StyledEducationItem, { children: [(0,jsx_runtime.jsx)(education.default, { width: "50px" }, void 0),
                (0,jsx_runtime.jsx)(UnifiedLink, ShowEducation_assign({ to: "https://polytech.am/", className: "university", target: "_blank" }, { children: (0,jsx_runtime.jsx)("span", { children: "Bachelor of Architecture (B.Arch.), Computer science | National Polytechnic University of Armenia" }, void 0) }), void 0)] }, void 0) }), void 0));
};
/* harmony default export */ const sh_education_ShowEducation = (ShowEducation);
var ShowEducation_templateObject_1;

;// CONCATENATED MODULE: ./components/showcase/sh_education/index.ts


;// CONCATENATED MODULE: ./components/showcase/index.ts





;// CONCATENATED MODULE: ./components/passions/Passions.tsx
var Passions_assign = (undefined && undefined.__assign) || function () {
    Passions_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Passions_assign.apply(this, arguments);
};









var Passions = function () {
    var _a = useHover(), isHovered = _a[0], bind = _a[1];
    var _b = useToggle(), isToggled = _b.isToggled, negativeToggle = _b.negativeToggle, positiveToggle = _b.positiveToggle;
    return ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsxs)(form_Section, Passions_assign({ className: "passions" }, { children: [(0,jsx_runtime.jsx)("div", Passions_assign({ className: "box--passions", onClick: positiveToggle }, bind, { children: (0,jsx_runtime.jsx)(animated_RiseAnimated, Passions_assign({ toX: "-4px", toY: "-4px" }, { children: (0,jsx_runtime.jsx)("div", { className: "bar--passions" }, void 0) }), void 0) }), void 0),
                    (0,jsx_runtime.jsx)(tooltip_Tooltip, { show: isHovered, text: "Passions" }, void 0)] }), void 0),
            (0,jsx_runtime.jsx)(sh_passions_ShowPassions, { onClose: negativeToggle, visible: isToggled }, void 0)] }, void 0));
};
/* harmony default export */ const passions_Passions = ((0,react.memo)(Passions));

;// CONCATENATED MODULE: ./components/passions/index.ts


;// CONCATENATED MODULE: ./components/avatar/Avatar.tsx
var Avatar_assign = (undefined && undefined.__assign) || function () {
    Avatar_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Avatar_assign.apply(this, arguments);
};




var Avatar = function () { return ((0,jsx_runtime.jsx)(form_Section, Avatar_assign({ className: "avatar" }, { children: (0,jsx_runtime.jsxs)("div", Avatar_assign({ className: "avatar-photo--box center" }, { children: [(0,jsx_runtime.jsx)(logo_default.default, { width: "85px", height: "86px", className: "avatar-photo" }, void 0),
            (0,jsx_runtime.jsx)("div", { className: "arrow-down" }, void 0)] }), void 0) }), void 0)); };
/* harmony default export */ const avatar_Avatar = (Avatar);

;// CONCATENATED MODULE: ./components/avatar/index.ts


;// CONCATENATED MODULE: ./components/shapes/circle/Circle.tsx


var Circle = function () { return (0,jsx_runtime.jsx)("div", { className: "circle" }, void 0); };
/* harmony default export */ const circle_Circle = (Circle);

;// CONCATENATED MODULE: ./components/shapes/circle/index.ts


;// CONCATENATED MODULE: ./components/cards/cardpackage/CardPackage.tsx
var CardPackage_assign = (undefined && undefined.__assign) || function () {
    CardPackage_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return CardPackage_assign.apply(this, arguments);
};






var CardPackage = function (_a) {
    var _b = _a.isAnimated, isAnimated = _b === void 0 ? false : _b, _c = _a.children, children = _c === void 0 ? null : _c, className = _a.className;
    return ((0,jsx_runtime.jsx)("div", CardPackage_assign({ className: clsx_m("card--package", className) }, { children: isAnimated ? ((0,jsx_runtime.jsx)(animated_RiseAnimated, CardPackage_assign({ toX: "-4px", toY: "-4px" }, { children: (0,jsx_runtime.jsxs)("div", CardPackage_assign({ className: "card--column" }, { children: [(0,jsx_runtime.jsx)(circle_Circle, {}, void 0), children, (0,jsx_runtime.jsx)(straightline_StraightLine, {}, void 0)] }), void 0) }), void 0)) : ((0,jsx_runtime.jsxs)("div", CardPackage_assign({ className: "card--column empty" }, { children: [(0,jsx_runtime.jsx)(circle_Circle, {}, void 0),
                (0,jsx_runtime.jsx)(straightline_StraightLine, {}, void 0)] }), void 0)) }), void 0));
};
/* harmony default export */ const cardpackage_CardPackage = (CardPackage);

;// CONCATENATED MODULE: ./components/cards/cardpackage/index.ts


// EXTERNAL MODULE: ./theme/icons/skills/npm-logo.svg
var npm_logo = __webpack_require__(3011);
;// CONCATENATED MODULE: ./components/packages/Packages.tsx
var Packages_assign = (undefined && undefined.__assign) || function () {
    Packages_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Packages_assign.apply(this, arguments);
};







var Packages = function () { return ((0,jsx_runtime.jsxs)(form_Section, Packages_assign({ className: "packages" }, { children: [(0,jsx_runtime.jsx)(UnifiedLink, Packages_assign({ to: "https://www.npmjs.com/package/m-head", target: "_blank" }, { children: (0,jsx_runtime.jsx)(cardpackage_CardPackage, Packages_assign({ isAnimated: true, className: "link--package" }, { children: (0,jsx_runtime.jsx)(npm_logo.default, { className: "npm-icon" }, void 0) }), void 0) }), void 0),
        (0,jsx_runtime.jsx)(cardpackage_CardPackage, {}, void 0),
        (0,jsx_runtime.jsx)(cardpackage_CardPackage, {}, void 0)] }), void 0)); };
/* harmony default export */ const packages_Packages = ((0,react.memo)(Packages));

;// CONCATENATED MODULE: ./components/packages/index.ts


;// CONCATENATED MODULE: ./components/education/Education.tsx
var Education_assign = (undefined && undefined.__assign) || function () {
    Education_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Education_assign.apply(this, arguments);
};







var Education = function () {
    var _a = useHover(), isHovered = _a[0], bind = _a[1];
    var _b = useToggle(), isToggled = _b.isToggled, negativeToggle = _b.negativeToggle, positiveToggle = _b.positiveToggle;
    return ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsxs)("div", Education_assign({ className: "education" }, bind, { onClick: positiveToggle }, { children: [(0,jsx_runtime.jsx)(straightline_StraightLine, { options: {
                            "short": true,
                        }, lines: 4 }, void 0),
                    (0,jsx_runtime.jsx)(tooltip_Tooltip, { show: isHovered, text: "Education" }, void 0)] }), void 0),
            (0,jsx_runtime.jsx)(sh_education_ShowEducation, { visible: isToggled, onClose: negativeToggle }, void 0)] }, void 0));
};
/* harmony default export */ const education_Education = (Education);

;// CONCATENATED MODULE: ./components/education/index.ts


// EXTERNAL MODULE: ./theme/icons/social/github.svg
var github = __webpack_require__(2377);
// EXTERNAL MODULE: ./theme/icons/social/linkedin.svg
var linkedin = __webpack_require__(6416);
// EXTERNAL MODULE: ./theme/icons/social/twitter.svg
var twitter = __webpack_require__(2076);
;// CONCATENATED MODULE: ./components/social/Social.tsx
var Social_assign = (undefined && undefined.__assign) || function () {
    Social_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Social_assign.apply(this, arguments);
};






var Social = function () { return ((0,jsx_runtime.jsx)("div", Social_assign({ className: "social" }, { children: (0,jsx_runtime.jsxs)("div", Social_assign({ className: "social-block" }, { children: [(0,jsx_runtime.jsx)(UnifiedLink, Social_assign({ to: "https://github.com/arma73", target: "_blank", className: "social-item" }, { children: (0,jsx_runtime.jsx)(github.default, { width: "20px", height: "20px" }, void 0) }), void 0),
            (0,jsx_runtime.jsx)(UnifiedLink, Social_assign({ to: "https://www.linkedin.com/in/arman-khilko/", target: "_blank", className: "social-item" }, { children: (0,jsx_runtime.jsx)(linkedin.default, { width: "20px", height: "20px" }, void 0) }), void 0),
            (0,jsx_runtime.jsx)(UnifiedLink, Social_assign({ to: "https://twitter.com/_arma73", target: "_blank", className: "social-item" }, { children: (0,jsx_runtime.jsx)(twitter.default, { width: "20px", height: "20px" }, void 0) }), void 0)] }), void 0) }), void 0)); };
/* harmony default export */ const social_Social = (Social);

;// CONCATENATED MODULE: ./components/social/index.ts


;// CONCATENATED MODULE: ./components/personality/Personality.tsx
var Personality_assign = (undefined && undefined.__assign) || function () {
    Personality_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Personality_assign.apply(this, arguments);
};





var Personality = function () { return ((0,jsx_runtime.jsxs)("div", Personality_assign({ className: "personality" }, { children: [(0,jsx_runtime.jsx)(animated_RiseAnimated, Personality_assign({ toX: "-4px", toY: "-4px" }, { children: (0,jsx_runtime.jsx)("div", Personality_assign({ className: "box--education" }, { children: (0,jsx_runtime.jsx)(education_Education, {}, void 0) }), void 0) }), void 0),
        (0,jsx_runtime.jsx)(social_Social, {}, void 0)] }), void 0)); };
/* harmony default export */ const personality_Personality = (Personality);

;// CONCATENATED MODULE: ./components/personality/index.ts


;// CONCATENATED MODULE: ./components/shapes/square/Square.tsx
var Square_assign = (undefined && undefined.__assign) || function () {
    Square_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Square_assign.apply(this, arguments);
};



var Square = function (_a) {
    var _b = _a.children, children = _b === void 0 ? null : _b, _c = _a.className, className = _c === void 0 ? "" : _c;
    return ((0,jsx_runtime.jsx)("div", Square_assign({ className: clsx_m("square", className) }, { children: children }), void 0));
};
/* harmony default export */ const square_Square = (Square);

;// CONCATENATED MODULE: ./components/shapes/square/index.ts


;// CONCATENATED MODULE: ./components/experience/Experience.tsx
var Experience_assign = (undefined && undefined.__assign) || function () {
    Experience_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Experience_assign.apply(this, arguments);
};








var Experience = function () {
    var history = useHistory();
    var _a = useHover(), isHovered = _a[0], bind = _a[1];
    var handleRoute = function () { return history.push(RoutePage.EXPERIENCE); };
    return ((0,jsx_runtime.jsxs)("div", Experience_assign({ className: "experience" }, { children: [(0,jsx_runtime.jsx)("div", Experience_assign({}, bind, { onClick: handleRoute }, { children: (0,jsx_runtime.jsx)(animated_RiseAnimated, Experience_assign({ toX: "-4px", toY: "-4px" }, { children: (0,jsx_runtime.jsxs)("div", Experience_assign({ className: "experience-shapes" }, { children: [(0,jsx_runtime.jsx)(square_Square, { className: "connector" }, void 0),
                            (0,jsx_runtime.jsx)(square_Square, { className: "connector" }, void 0),
                            (0,jsx_runtime.jsx)(square_Square, {}, void 0)] }), void 0) }), void 0) }), void 0),
            (0,jsx_runtime.jsx)(tooltip_Tooltip, { show: isHovered, text: "Experience" }, void 0)] }), void 0));
};
/* harmony default export */ const experience_Experience = (Experience);

;// CONCATENATED MODULE: ./components/experience/index.ts


;// CONCATENATED MODULE: ./components/intelligence/Intelligence.tsx
var Intelligence_assign = (undefined && undefined.__assign) || function () {
    Intelligence_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Intelligence_assign.apply(this, arguments);
};






var Intelligence = function () { return ((0,jsx_runtime.jsxs)(form_Section, Intelligence_assign({ className: "intelligence" }, { children: [(0,jsx_runtime.jsx)(experience_Experience, {}, void 0),
        (0,jsx_runtime.jsx)(personality_Personality, {}, void 0)] }), void 0)); };
/* harmony default export */ const intelligence_Intelligence = ((0,react.memo)(Intelligence));

;// CONCATENATED MODULE: ./components/intelligence/index.ts


;// CONCATENATED MODULE: ./components/topbar/TopBar.tsx
var TopBar_assign = (undefined && undefined.__assign) || function () {
    TopBar_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return TopBar_assign.apply(this, arguments);
};


var TopBar = function () { return ((0,jsx_runtime.jsxs)("div", TopBar_assign({ className: "top-bar" }, { children: [(0,jsx_runtime.jsx)("div", { className: "dot" }, void 0),
        (0,jsx_runtime.jsx)("div", { className: "dot" }, void 0),
        (0,jsx_runtime.jsx)("div", { className: "dot" }, void 0)] }), void 0)); };
/* harmony default export */ const topbar_TopBar = (TopBar);

;// CONCATENATED MODULE: ./components/topbar/index.ts


;// CONCATENATED MODULE: ./components/skills/Skills.tsx
var Skills_assign = (undefined && undefined.__assign) || function () {
    Skills_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Skills_assign.apply(this, arguments);
};









var Skills_Skills = function () {
    var _a = useHover(), isHovered = _a[0], bind = _a[1];
    var _b = useToggle(), isToggled = _b.isToggled, negativeToggle = _b.negativeToggle, positiveToggle = _b.positiveToggle;
    return ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsxs)(form_Section, Skills_assign({ className: "skills" }, { children: [(0,jsx_runtime.jsx)("div", Skills_assign({ className: "box--skills" }, bind, { children: (0,jsx_runtime.jsx)(animated_RiseAnimated, Skills_assign({ toX: "-4px", toY: "-4px" }, { children: (0,jsx_runtime.jsxs)("div", Skills_assign({ className: "circles", onClick: positiveToggle }, { children: [(0,jsx_runtime.jsx)("div", { className: "circle-top preserve-3d" }, void 0),
                                    (0,jsx_runtime.jsx)("div", { className: "circle-top preserve-3d" }, void 0),
                                    (0,jsx_runtime.jsx)("div", { className: "circle-top" }, void 0)] }), void 0) }), void 0) }), void 0),
                    (0,jsx_runtime.jsx)(tooltip_Tooltip, { show: isHovered, text: "Skills" }, void 0)] }), void 0),
            (0,jsx_runtime.jsx)(sh_skills_ShowSkills, { onClose: negativeToggle, visible: isToggled }, void 0)] }, void 0));
};
/* harmony default export */ const skills_Skills = ((0,react.memo)(Skills_Skills));

;// CONCATENATED MODULE: ./components/skills/index.ts


;// CONCATENATED MODULE: ./components/portfolio/Portfolio.tsx
var Portfolio_assign = (undefined && undefined.__assign) || function () {
    Portfolio_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Portfolio_assign.apply(this, arguments);
};













var Portfolio = function () { return ((0,jsx_runtime.jsx)("div", Portfolio_assign({ className: "portfolio--layout center" }, { children: (0,jsx_runtime.jsx)("div", Portfolio_assign({ className: "portfolio--box" }, { children: (0,jsx_runtime.jsx)("div", Portfolio_assign({ className: "portfolio--illustration preserve-3d" }, { children: (0,jsx_runtime.jsxs)("div", Portfolio_assign({ className: "portfolio" }, { children: [(0,jsx_runtime.jsx)(topbar_TopBar, {}, void 0),
                    (0,jsx_runtime.jsx)(skills_Skills, {}, void 0),
                    (0,jsx_runtime.jsxs)(container_Container, Portfolio_assign({ className: "portfolio--container row" }, { children: [(0,jsx_runtime.jsxs)(block_Block, Portfolio_assign({ className: "portfolio--block col col-md-1" }, { children: [(0,jsx_runtime.jsx)(aboutme_AboutMe, {}, void 0),
                                    (0,jsx_runtime.jsx)(articlestower_ArticlesTower, {}, void 0),
                                    (0,jsx_runtime.jsx)(decorators_LineGroup, {}, void 0),
                                    (0,jsx_runtime.jsx)(passions_Passions, {}, void 0)] }), void 0),
                            (0,jsx_runtime.jsxs)(block_Block, Portfolio_assign({ className: "portfolio--block col col-md-2" }, { children: [(0,jsx_runtime.jsx)(avatar_Avatar, {}, void 0),
                                    (0,jsx_runtime.jsx)(packages_Packages, {}, void 0),
                                    (0,jsx_runtime.jsx)(intelligence_Intelligence, {}, void 0)] }), void 0)] }), void 0)] }), void 0) }), void 0) }), void 0) }), void 0)); };
/* harmony default export */ const portfolio_Portfolio = (Portfolio);

;// CONCATENATED MODULE: ./components/portfolio/index.ts


;// CONCATENATED MODULE: ./hooks/useWindowSize.ts
var useWindowSize_assign = (undefined && undefined.__assign) || function () {
    useWindowSize_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return useWindowSize_assign.apply(this, arguments);
};

var useWindowSize = function () {
    var _a = (0,react.useState)(function () { return ({
        "width": window.innerWidth,
        "height": window.innerHeight,
    }); }), size = _a[0], setSize = _a[1];
    (0,react.useEffect)(function () {
        var handleResize = function () {
            var width = window["innerWidth"], height = window["innerHeight"];
            setSize(function (state) { return (useWindowSize_assign(useWindowSize_assign({}, state), { width: width, height: height })); });
        };
        window.addEventListener("resize", handleResize);
        return function () {
            window.removeEventListener("resize", handleResize);
        };
    });
    return size;
};

;// CONCATENATED MODULE: ./components/ui/Galaxy.tsx
var Galaxy_makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var Galaxy_assign = (undefined && undefined.__assign) || function () {
    Galaxy_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Galaxy_assign.apply(this, arguments);
};
var Galaxy_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};





var starPosition = function (_a) {
    var width = _a.width, height = _a.height;
    var randX = Math.floor(Math.random() * width);
    var randY = Math.floor(Math.random() * (height / 2));
    return { randX: randX, randY: randY };
};
var StyledSmollStar = styled_components_esm.div.attrs(function (_a) {
    var x = _a.x, y = _a.y, props = Galaxy_rest(_a, ["x", "y"]);
    return (Galaxy_assign(Galaxy_assign({}, props), { x: x, y: y }));
})(Galaxy_templateObject_1 || (Galaxy_templateObject_1 = Galaxy_makeTemplateObject(["\n    top: ", "px;\n    left: ", "px;\n    opacity: ", ";\n"], ["\n    top: ", "px;\n    left: ", "px;\n    opacity: ", ";\n"])), function (_a) {
    var y = _a.y;
    return y;
}, function (_a) {
    var x = _a.x;
    return x;
}, function () { return Math.random() - 0.2; });
var Galaxy = function () {
    var size = useWindowSize();
    var mapStars = (0,react.useMemo)(function () {
        return Array(20)
            .fill(null)
            .map(function (_, index) {
            var _a = starPosition(size), randX = _a.randX, randY = _a.randY;
            return ((0,jsx_runtime.jsx)(StyledSmollStar, { x: randX, y: randY, className: "small-star" }, index));
        });
    }, [size]);
    var mapCircles = function () {
        return Array(7)
            .fill(null)
            .map(function (_, index) { return ((0,jsx_runtime.jsx)("div", { className: "circle-" + (index + 1) + " circle" }, index)); });
    };
    return ((0,jsx_runtime.jsxs)("div", Galaxy_assign({ className: "galaxy" }, { children: [(0,jsx_runtime.jsxs)("div", Galaxy_assign({ className: "container" }, { children: [(0,jsx_runtime.jsx)("div", Galaxy_assign({ className: "pink-planet" }, { children: (0,jsx_runtime.jsx)("div", Galaxy_assign({ className: "circles" }, { children: mapCircles() }), void 0) }), void 0),
                    (0,jsx_runtime.jsx)("div", { className: "blue-planet" }, void 0)] }), void 0),
            (0,jsx_runtime.jsx)("div", Galaxy_assign({ className: "small-stars" }, { children: mapStars }), void 0),
            (0,jsx_runtime.jsx)("div", { className: "white-gradient" }, void 0)] }), void 0));
};
/* harmony default export */ const ui_Galaxy = (Galaxy);
var Galaxy_templateObject_1;

;// CONCATENATED MODULE: ./pages/main/Main.tsx
var Main_assign = (undefined && undefined.__assign) || function () {
    Main_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Main_assign.apply(this, arguments);
};





var Main = function () { return ((0,jsx_runtime.jsxs)(layout_Layout, Main_assign({ className: "portfolio--page" }, { children: [(0,jsx_runtime.jsx)(ui_Galaxy, {}, void 0),
        (0,jsx_runtime.jsx)(portfolio_Portfolio, {}, void 0)] }), void 0)); };
/* harmony default export */ const main_Main = (Main);

;// CONCATENATED MODULE: ./pages/main/index.ts


;// CONCATENATED MODULE: ./pages/aboutme/AboutMe.tsx
var aboutme_AboutMe_assign = (undefined && undefined.__assign) || function () {
    aboutme_AboutMe_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return aboutme_AboutMe_assign.apply(this, arguments);
};









var PageAboutMe = function () { return ((0,jsx_runtime.jsxs)(layout_Layout, aboutme_AboutMe_assign({ className: "aboutme" }, { children: [(0,jsx_runtime.jsx)(header_Header, {}, void 0),
        (0,jsx_runtime.jsx)(Container_sc, { children: (0,jsx_runtime.jsx)(Name, { children: "Arman Khilko" }, void 0) }, void 0),
        (0,jsx_runtime.jsxs)(Contacts, { children: [(0,jsx_runtime.jsxs)(ContactItem, { children: [" ", (0,jsx_runtime.jsx)(icons_location.default, { width: "20px" }, void 0), " Armenia, Yerevan", " "] }, void 0),
                (0,jsx_runtime.jsxs)(ContactItem, { children: [" ", (0,jsx_runtime.jsx)(mail.default, { width: "20px" }, void 0), " ", (0,jsx_runtime.jsx)("a", aboutme_AboutMe_assign({ href: "mailto:arma739805@gmail.com" }, { children: "arma739805@gmail.com" }), void 0), " "] }, void 0),
                (0,jsx_runtime.jsxs)(ContactItem, { children: [" ", (0,jsx_runtime.jsx)(telephone.default, { width: "20px" }, void 0), " ", (0,jsx_runtime.jsx)("a", aboutme_AboutMe_assign({ href: "tel:+374-98-220-530" }, { children: "+374-98-220-530" }), void 0), " "] }, void 0),
                (0,jsx_runtime.jsxs)(ContactItem, { children: [" ", (0,jsx_runtime.jsx)(calendar.default, { width: "20px" }, void 0), " 07.09.1998", " "] }, void 0)] }, void 0),
        (0,jsx_runtime.jsxs)(Container_sc, { children: [(0,jsx_runtime.jsxs)(Text, { children: ["Hi there", " ", (0,jsx_runtime.jsx)("span", aboutme_AboutMe_assign({ role: "img", "aria-label": "wave" }, { children: "\uD83D\uDC4B" }), void 0), ". I am very glad that you are here now and can get to know me better. My path as a programmer began three years ago. After a few months I did an internship as a webmaster and have not stopped since then", " ", (0,jsx_runtime.jsx)("span", aboutme_AboutMe_assign({ role: "img", "aria-label": "winking face" }, { children: "\uD83D\uDE09" }), void 0), ". It's been three years since I had the opportunity to work with great people, learn every day, mostly always, and make great friendships. Currently, I continue to seek new skills, learn and share my humble knowledge as much as possible."] }, void 0),
                (0,jsx_runtime.jsx)(Text, { children: "I strive to contribute to the success of the team hard work, attention to detail, and excellent organizational skills. A clear of the stack of network protocols and technologies that I own. Motivated to learn, grow, and succeed in IT. I'm interested in the best practices for organizing code, and I have a goal and desire to become an architect in my field." }, void 0)] }, void 0)] }), void 0)); };
/* harmony default export */ const pages_aboutme_AboutMe = (PageAboutMe);

;// CONCATENATED MODULE: ./pages/aboutme/index.ts


;// CONCATENATED MODULE: ./routes/Showcase.routes.tsx




var ShowcaseRoutes = function () { return ((0,jsx_runtime.jsx)(Switch, { children: (0,jsx_runtime.jsx)(Route, { exact: true, path: RoutePage.ABOUTME, component: sh_aboutme_ShowAboutMe }, void 0) }, void 0)); };
/* harmony default export */ const Showcase_routes = (ShowcaseRoutes);

// EXTERNAL MODULE: ../node_modules/react-spring/renderprops-addons.js
var renderprops_addons = __webpack_require__(9760);
;// CONCATENATED MODULE: ./context/types/breakpoint.ts
var breakpoint_BreakpointTypes;
(function (BreakpointTypes) {
    BreakpointTypes["SET_ACTIVE_BREAKPOINT"] = "SET_ACTIVE_BREAKPOINT";
})(breakpoint_BreakpointTypes || (breakpoint_BreakpointTypes = {}));

;// CONCATENATED MODULE: ./context/types/index.ts


;// CONCATENATED MODULE: ./context/actions/setBreakpoint.ts

/**
 * @description Changes the active breakpoint.
 */
var setActiveBreakpoint = function (breakpointName, breakpointSize) { return ({
    "type": breakpoint_BreakpointTypes.SET_ACTIVE_BREAKPOINT,
    "payload": {
        breakpointName: breakpointName,
        breakpointSize: breakpointSize,
    },
}); };

;// CONCATENATED MODULE: ./context/actions/index.ts


;// CONCATENATED MODULE: ./context/MediaReducer.ts
var MediaReducer_assign = (undefined && undefined.__assign) || function () {
    MediaReducer_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return MediaReducer_assign.apply(this, arguments);
};

var MediaReducer_mediaReducer = function (state, _a) {
    var type = _a.type, payload = _a.payload;
    switch (type) {
        case BreakpointTypes.SET_ACTIVE_BREAKPOINT:
            return MediaReducer_assign(MediaReducer_assign({}, state), { "breakpoint": payload.breakpointName, "size": payload.breakpointSize });
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./settings/breakpoint.ts
var breakpoint_DisplayBreakpoints;
(function (DisplayBreakpoints) {
    DisplayBreakpoints[DisplayBreakpoints["DESKTOP_LG"] = 1400] = "DESKTOP_LG";
    DisplayBreakpoints[DisplayBreakpoints["DESKTOP_MD"] = 1300] = "DESKTOP_MD";
    DisplayBreakpoints[DisplayBreakpoints["DESKTOP_SM"] = 1200] = "DESKTOP_SM";
    DisplayBreakpoints[DisplayBreakpoints["TABLET_LG"] = 1040] = "TABLET_LG";
    DisplayBreakpoints[DisplayBreakpoints["TABLET_MD"] = 991] = "TABLET_MD";
    DisplayBreakpoints[DisplayBreakpoints["TABLET_SM"] = 840] = "TABLET_SM";
    DisplayBreakpoints[DisplayBreakpoints["MOBILE_LG"] = 767] = "MOBILE_LG";
    DisplayBreakpoints[DisplayBreakpoints["MOBILE_MD"] = 540] = "MOBILE_MD";
    DisplayBreakpoints[DisplayBreakpoints["MOBILE_SM"] = 400] = "MOBILE_SM";
})(breakpoint_DisplayBreakpoints || (breakpoint_DisplayBreakpoints = {}));

;// CONCATENATED MODULE: ./context/MediaContext.tsx
var MediaContext_assign = (undefined && undefined.__assign) || function () {
    MediaContext_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return MediaContext_assign.apply(this, arguments);
};




var initialState = {
    "breakpoint": "DESKTOP_MD",
    "size": breakpoint_DisplayBreakpoints.MOBILE_MD,
};
var MediaContext = (0,react.createContext)({
    "state": initialState,
    "dispatch": function () { return null; },
});
var mainReducer = function (state, action) {
    return mediaReducer(state, action);
};
var MediaProvider = function (_a) {
    var children = _a.children;
    var _b = useReducer(mainReducer, initialState), state = _b[0], dispatch = _b[1];
    return (_jsx(MediaContext.Provider, MediaContext_assign({ value: { state: state, dispatch: dispatch } }, { children: children }), void 0));
};
var useMediaContext = function () { return (0,react.useContext)(MediaContext); };

;// CONCATENATED MODULE: ./hoc/withMediaQueryListener.tsx
var withMediaQueryListener_assign = (undefined && undefined.__assign) || function () {
    withMediaQueryListener_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return withMediaQueryListener_assign.apply(this, arguments);
};

/* eslint-disable max-lines */




var withMediaQueryListener = function (WrappedComponent) {
    /**
     * This component will house the event handler for your changing breakpoints, and will
     * also communicate with your store to report the active breakpoints on initial mount
     * as well as updating the store with the new breakpoint value as the window is resized.
     */
    return (0,react.forwardRef)(function MediaListener(props, externalRef) {
        var _a = useMediaContext(), breakpointState = _a["state"], dispatch = _a.dispatch;
        var mediaQueryState = (0,react.useMemo)(function () { return []; }, []);
        /**
         * Create the function that will prepare our breakpoint object for dispatch.
         */
        var dispatchActiveQuery = (0,react.useCallback)(function () {
            var _a;
            // Assuming a desktop first responsive system, the active breakpoint will
            // always be the smallest one that satisfies the media query. We use
            // reduce to travel down the matched media queries and return the smallest
            // item that matches. In the event no breakpoints match (such as when the
            // viewport is larger than our largest breakpoint), we return null
            var activeQuery = mediaQueryState.length
                ? mediaQueryState.reduce(function (prev, curr) {
                    return curr.matches
                        ? curr
                        : prev && prev.matches
                            ? prev
                            : null;
                }, [])
                : null;
            // In the event null was returned by activeQuery, we substitute 'default',
            // which will be the active breakpoint when no other breakpoint is matched
            var breakpointName = activeQuery
                ? activeQuery.breakpointName
                : breakpointState.breakpoint;
            // We will also record the numerical value for the matched breakpoint as breakpointSize
            var breakpointSize = (_a = (activeQuery && activeQuery.breakpoint)) !== null && _a !== void 0 ? _a : breakpointState.size;
            if (breakpointSize === breakpointState.size &&
                breakpointName === breakpointState.breakpoint) {
                return;
            }
            // Now dispatch both values using the setActiveBreakpoint action
            dispatch(setActiveBreakpoint(breakpointName, breakpointSize));
        }, [
            breakpointState.breakpoint,
            breakpointState.size,
            dispatch,
            mediaQueryState,
        ]);
        (0,react.useEffect)(function () {
            /**
             * Create the function that will run each time the breakpoint is changed.
             */
            var breakpointChange = function () { return dispatchActiveQuery(); };
            // loop over our breakpoints object to create a media query
            // instance for each of our breakpoints
            var displaysName = Object.keys(breakpoint_DisplayBreakpoints);
            displaysName.forEach(function (key) {
                // create a new media query object using the window.matchMedia api.
                var query = window.matchMedia("(max-width: " + breakpoint_DisplayBreakpoints[key] + "px)");
                // add the breakpoint value to the media query object
                query.breakpoint = breakpoint_DisplayBreakpoints[key];
                // add the name
                query.breakpointName = key;
                // Attach the even listener to the query
                try {
                    // Chrome & Firefox
                    query.addEventListener("change", breakpointChange);
                }
                catch (error) {
                    try {
                        // Safari
                        query.addListener(breakpointChange);
                    }
                    catch (error) {
                        console.error(error);
                    }
                }
                // push this query to our mediaQueryState array, after the loops has run its
                // course, we will have an array that houses a mediaQuery object for each
                // breakpoint in our breakpoints object.
                mediaQueryState.push(query);
            });
            // run the function once on componentDidMount to
            // record the initial breakpoint state of our viewport
            dispatchActiveQuery();
        }, [dispatchActiveQuery, mediaQueryState]);
        return ((0,jsx_runtime.jsx)(WrappedComponent, withMediaQueryListener_assign({}, props, { ref: externalRef, breakpoint: breakpointState }), void 0));
    });
};
/* harmony default export */ const hoc_withMediaQueryListener = (withMediaQueryListener);

;// CONCATENATED MODULE: ./utils/responsiveHelpers.ts

/**
 * Returns a string of classes that match / are adjacent to the current breakpoint.
 *
 * @example
 * - setClass({ "default": "center", "mobileLg": "right" }, breakpoint);
 *
 * @return {string}                         Returns class string that matches correct breakpoint.
 */
var setClass = function (compliance, state) {
    // including the "default" key in the classObj is optional,
    // if its not provided it will be set to an empty string.
    var _a = compliance.defaultBreakpointName, defaultBreakpointName = _a === void 0 ? "DESKTOP_MD" : _a, _b = compliance.defaultClass, defaultClass = _b === void 0 ? "" : _b;
    // if default is the current breakpoint, we simply return
    // the class strings that pair with the default key
    if (state.breakpoint === defaultBreakpointName)
        return defaultClass;
    // We now compare the breakpoint.name (the currently active breakpoint) against each key in the
    // "breakpoints" object (created in step 2), and return the first matched pair.
    var breakpointsName = Object.keys(DisplayBreakpoints).reverse();
    var startingIndex = breakpointsName.indexOf(state.breakpoint);
    var firstMatchedKey = breakpointsName.slice(startingIndex).find(function (key) { return compliance[key]; }) ||
        defaultBreakpointName;
    return compliance[firstMatchedKey];
};
/**
 * Returns a boolean indicating whether or not the currentBreakpointSize
 * value is greater than the passed breakpointToCompare value.
 *
 * @return {boolean}                             Returns boolean that indicates whether the passed
 *                                               breakpointToCompare is currently greater than
 *                                               the currentBreakpointSize
 */
var breakpointIsGreaterThan = function (breakpointToCompare, currentBreakpointSize) { return currentBreakpointSize > breakpoint_DisplayBreakpoints[breakpointToCompare]; };
/**
 * Returns a boolean indicating whether or not the currentBreakpointSize
 * value is less than the passed breakpointToCompare value.
 *
 * @return {boolean}                             Returns boolean that indicates whether the passed
 *                                               breakpointToCompare is currently less than the
 *                                               currentBreakpointSize
 */
var breakpointIsLessThan = function (breakpointToCompare, currentBreakpointSize) { return currentBreakpointSize <= DisplayBreakpoints[breakpointToCompare]; };

;// CONCATENATED MODULE: ./components/ui/Saturn.tsx
var Saturn_assign = (undefined && undefined.__assign) || function () {
    Saturn_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Saturn_assign.apply(this, arguments);
};


var Saturn = function () { return ((0,jsx_runtime.jsxs)("div", Saturn_assign({ className: "planet" }, { children: [(0,jsx_runtime.jsxs)("div", Saturn_assign({ className: "planet_area" }, { children: [(0,jsx_runtime.jsx)("div", { className: "border" }, void 0),
                (0,jsx_runtime.jsx)("div", { className: "part_1" }, void 0),
                (0,jsx_runtime.jsx)("div", { className: "part_2" }, void 0),
                (0,jsx_runtime.jsx)("div", { className: "part_3" }, void 0),
                (0,jsx_runtime.jsx)("div", { className: "part_4" }, void 0),
                (0,jsx_runtime.jsx)("div", { className: "part_5" }, void 0),
                (0,jsx_runtime.jsx)("div", { className: "part_6" }, void 0)] }), void 0),
        (0,jsx_runtime.jsx)("div", { className: "ring" }, void 0)] }), void 0)); };
/* harmony default export */ const ui_Saturn = (Saturn);

// EXTERNAL MODULE: ./theme/icons/experience/stars.svg
var stars = __webpack_require__(4978);
// EXTERNAL MODULE: ./theme/icons/experience/earth.svg
var earth = __webpack_require__(8335);
// EXTERNAL MODULE: ./theme/icons/experience/cloud.svg
var cloud = __webpack_require__(9616);
// EXTERNAL MODULE: ./theme/icons/experience/satellite.svg
var satellite = __webpack_require__(3948);
// EXTERNAL MODULE: ./theme/icons/experience/clients.svg
var clients = __webpack_require__(745);
// EXTERNAL MODULE: ./theme/icons/experience/server.svg
var experience_server = __webpack_require__(7746);
;// CONCATENATED MODULE: ./components/scrolling/ParallaxScrolling.tsx
var ParallaxScrolling_makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var ParallaxScrolling_assign = (undefined && undefined.__assign) || function () {
    ParallaxScrolling_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return ParallaxScrolling_assign.apply(this, arguments);
};
var ParallaxScrolling_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

/* eslint-disable max-lines */












var StyledParallaxLayer = styled_components_esm(renderprops_addons/* ParallaxLayer */._L).attrs(function (_a) {
    var _b = _a.opacity, opacity = _b === void 0 ? 1 : _b, props = ParallaxScrolling_rest(_a, ["opacity"]);
    return (ParallaxScrolling_assign(ParallaxScrolling_assign({}, props), { opacity: opacity }));
})(ParallaxScrolling_templateObject_1 || (ParallaxScrolling_templateObject_1 = ParallaxScrolling_makeTemplateObject(["\n    opacity: ", ";\n"], ["\n    opacity: ", ";\n"])), function (_a) {
    var opacity = _a.opacity;
    return opacity;
});
var ParallaxScrolling = (0,react.forwardRef)(function ParallaxComponent(_a, ref) {
    var viewFirst = _a.viewFirst, viewSecond = _a.viewSecond, breakpoint = _a.breakpoint;
    console.log(ref);
    return ((0,jsx_runtime.jsxs)(renderprops_addons/* Parallax */.VS, ParallaxScrolling_assign({ ref: ref, pages: 3 }, { children: [(0,jsx_runtime.jsx)(StyledParallaxLayer, ParallaxScrolling_assign({ offset: 0, speed: 0, factor: 3 }, { children: (0,jsx_runtime.jsx)(stars.default, { width: "100%", height: "100%" }, void 0) }), void 0),
            (0,jsx_runtime.jsx)(StyledParallaxLayer, ParallaxScrolling_assign({ offset: 1.3, speed: -0.3 }, { children: (0,jsx_runtime.jsx)(ui_Saturn, {}, void 0) }), void 0),
            (0,jsx_runtime.jsxs)(StyledParallaxLayer, ParallaxScrolling_assign({ offset: 1, speed: 0.8, opacity: 0.1 }, { children: [(0,jsx_runtime.jsx)(cloud.default, { width: "200px", style: { "marginLeft": "55%" } }, void 0),
                    (0,jsx_runtime.jsx)(cloud.default, { width: "100px", style: { "marginLeft": "15%" } }, void 0)] }), void 0),
            (0,jsx_runtime.jsxs)(StyledParallaxLayer, ParallaxScrolling_assign({ offset: 1.75, speed: 0.5, opacity: 0.1 }, { children: [(0,jsx_runtime.jsx)(cloud.default, { width: "200px", style: { "marginLeft": "70%" } }, void 0),
                    (0,jsx_runtime.jsx)(cloud.default, { width: "210px", style: { "marginLeft": "40%" } }, void 0)] }), void 0),
            (0,jsx_runtime.jsxs)(StyledParallaxLayer, ParallaxScrolling_assign({ offset: 1, speed: 0.2, opacity: 0.2 }, { children: [(0,jsx_runtime.jsx)(cloud.default, { width: "100px", style: { "marginLeft": "10%" } }, void 0),
                    (0,jsx_runtime.jsx)(cloud.default, { width: "200px", style: { "marginLeft": "75%" } }, void 0)] }), void 0),
            (0,jsx_runtime.jsxs)(StyledParallaxLayer, ParallaxScrolling_assign({ offset: 1.6, speed: -0.1, opacity: 0.4 }, { children: [(0,jsx_runtime.jsx)(cloud.default, { width: "200px", style: { "marginLeft": "60%" } }, void 0),
                    (0,jsx_runtime.jsx)(cloud.default, { width: "240px", style: { "marginLeft": "30%" } }, void 0),
                    (0,jsx_runtime.jsx)(cloud.default, { width: "100px", style: { "marginLeft": "80%" } }, void 0)] }), void 0),
            (0,jsx_runtime.jsxs)(StyledParallaxLayer, ParallaxScrolling_assign({ offset: 2.6, speed: 0.4, opacity: 0.6 }, { children: [(0,jsx_runtime.jsx)(cloud.default, { width: "200px", style: { "marginLeft": "5%" } }, void 0),
                    (0,jsx_runtime.jsx)(cloud.default, { width: "150px", style: { "marginLeft": "75%" } }, void 0)] }), void 0),
            (0,jsx_runtime.jsx)(renderprops_addons/* ParallaxLayer */._L, ParallaxScrolling_assign({ offset: 2.5, speed: -0.4 }, { children: (0,jsx_runtime.jsx)("div", ParallaxScrolling_assign({ className: "center", style: { "height": "100%" } }, { children: (0,jsx_runtime.jsx)(earth.default, { width: "60%" }, void 0) }), void 0) }), void 0),
            (0,jsx_runtime.jsx)(StyledParallaxLayer, ParallaxScrolling_assign({ offset: 0, speed: -0.3 }, { children: (0,jsx_runtime.jsx)(satellite.default, { width: "150px", height: "220px", style: { "marginLeft": "80%" } }, void 0) }), void 0),
            (0,jsx_runtime.jsx)(StyledParallaxLayer, ParallaxScrolling_assign({ offset: 0, speed: -0.3 }, { children: (0,jsx_runtime.jsx)("div", ParallaxScrolling_assign({ className: "center", style: { "height": "100%" } }, { children: (0,jsx_runtime.jsx)(clients.default, { width: "90%", height: "100%" }, void 0) }), void 0) }), void 0),
            (0,jsx_runtime.jsx)(StyledParallaxLayer, ParallaxScrolling_assign({ offset: 0, speed: 0.1 }, { children: (0,jsx_runtime.jsx)("div", ParallaxScrolling_assign({ className: "center", style: { "height": "100%" } }, { children: viewFirst }), void 0) }), void 0),
            (0,jsx_runtime.jsx)(StyledParallaxLayer, ParallaxScrolling_assign({ offset: 1, speed: 0.1 }, { children: (0,jsx_runtime.jsxs)("div", ParallaxScrolling_assign({ className: "center", style: { "height": "100%" } }, { children: [viewSecond, breakpointIsGreaterThan("MOBILE_MD", breakpoint.size) ? ((0,jsx_runtime.jsx)(experience_server.default, { width: "20%", height: "40%", style: { "marginLeft": "25px" } }, void 0)) : null] }), void 0) }), void 0),
            (0,jsx_runtime.jsx)(StyledParallaxLayer, ParallaxScrolling_assign({ offset: 2, speed: -0 }, { children: (0,jsx_runtime.jsx)("div", { className: "center", style: { "height": "100%" } }, void 0) }), void 0)] }), void 0));
});
/* harmony default export */ const scrolling_ParallaxScrolling = (hoc_withMediaQueryListener(ParallaxScrolling));
var ParallaxScrolling_templateObject_1;

;// CONCATENATED MODULE: ./components/ui/WindowIOS.tsx
var WindowIOS_makeTemplateObject = (undefined && undefined.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var WindowIOS_assign = (undefined && undefined.__assign) || function () {
    WindowIOS_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return WindowIOS_assign.apply(this, arguments);
};
var WindowIOS_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



var StyledWindowIOS = styled_components_esm.div.attrs(function (_a) {
    var _b = _a.width, width = _b === void 0 ? "600px" : _b, _c = _a.height, height = _c === void 0 ? "auto" : _c, props = WindowIOS_rest(_a, ["width", "height"]);
    return (WindowIOS_assign(WindowIOS_assign({}, props), { width: width,
        height: height }));
})(WindowIOS_templateObject_1 || (WindowIOS_templateObject_1 = WindowIOS_makeTemplateObject(["\n    display: block;\n    width: 50%;\n    max-width: ", ";\n    height: ", ";\n    background: white;\n    border: 1px solid #ebebeb;\n    border-radius: 15px;\n    margin: 0 auto;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    .window-viewport {\n        width: 100%;\n        min-height: 300px;\n        height: max-content;\n        overflow: hidden;\n    }\n"], ["\n    display: block;\n    width: 50%;\n    max-width: ", ";\n    height: ", ";\n    background: white;\n    border: 1px solid #ebebeb;\n    border-radius: 15px;\n    margin: 0 auto;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n\n    .window-viewport {\n        width: 100%;\n        min-height: 300px;\n        height: max-content;\n        overflow: hidden;\n    }\n"])), function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
});
var WindowIOS = function (_a) {
    var children = _a.children, width = _a.width, height = _a.height;
    return ((0,jsx_runtime.jsxs)(StyledWindowIOS, WindowIOS_assign({ width: width, height: height, className: "windowIOS" }, { children: [(0,jsx_runtime.jsxs)("div", WindowIOS_assign({ className: "window-top" }, { children: [(0,jsx_runtime.jsx)("div", { className: "button x" }, void 0),
                    (0,jsx_runtime.jsx)("div", { className: "button min" }, void 0),
                    (0,jsx_runtime.jsx)("div", { className: "button max" }, void 0)] }), void 0),
            (0,jsx_runtime.jsx)("div", WindowIOS_assign({ className: "window-viewport" }, { children: children }), void 0)] }), void 0));
};
/* harmony default export */ const ui_WindowIOS = (WindowIOS);
var WindowIOS_templateObject_1;

;// CONCATENATED MODULE: ./components/ui/Terminal.tsx
var Terminal_assign = (undefined && undefined.__assign) || function () {
    Terminal_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Terminal_assign.apply(this, arguments);
};




var Terminal = function (_a) {
    var children = _a.children, href = _a.href, Icon = _a.Icon, title = _a.title;
    var ref = (0,react.useRef)(null);
    (0,react.useEffect)(function () {
        var timeId;
        var caretToggle = function () {
            var _a, _b;
            if ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.classList.contains("blink")) {
                ref.current.classList.remove("blink");
            }
            else {
                (_b = ref.current) === null || _b === void 0 ? void 0 : _b.classList.add("blink");
            }
        };
        if (ref) {
            timeId = window.setInterval(caretToggle, 500);
        }
        return function () {
            if (timeId) {
                window.clearInterval(timeId);
            }
        };
    }, []);
    return ((0,jsx_runtime.jsxs)("div", Terminal_assign({ id: "term", className: "term" }, { children: [(0,jsx_runtime.jsx)("input", { className: "term-input-hide" }, void 0),
            (0,jsx_runtime.jsxs)("div", Terminal_assign({ className: "term-bar" }, { children: [(0,jsx_runtime.jsxs)("div", Terminal_assign({ className: "term-winctrl" }, { children: [(0,jsx_runtime.jsx)("span", { className: "term-btn close" }, void 0),
                            (0,jsx_runtime.jsx)("span", { className: "term-btn minimise" }, void 0),
                            (0,jsx_runtime.jsx)("span", { className: "term-btn maximise" }, void 0)] }), void 0),
                    (0,jsx_runtime.jsx)(UnifiedLink, Terminal_assign({ to: href, target: "_blank", className: "term-bar-gh" }, { children: (0,jsx_runtime.jsx)(Icon, {}, void 0) }), void 0)] }), void 0),
            (0,jsx_runtime.jsx)("div", Terminal_assign({ className: "term-cont" }, { children: (0,jsx_runtime.jsxs)("div", Terminal_assign({ className: "term-line" }, { children: [(0,jsx_runtime.jsx)("span", Terminal_assign({ className: "term-prompt" }, { children: "~/ # " }), void 0),
                        (0,jsx_runtime.jsx)("span", Terminal_assign({ className: "term-cmd current" }, { children: title }), void 0), children, (0,jsx_runtime.jsxs)("span", Terminal_assign({ className: "term-prompt" }, { children: [(0,jsx_runtime.jsx)("br", {}, void 0), " ", (0,jsx_runtime.jsx)("br", {}, void 0), " ~/ #", " "] }), void 0),
                        (0,jsx_runtime.jsx)("span", Terminal_assign({ className: "term-caret", ref: ref }, { children: "\u2588" }), void 0)] }), void 0) }), void 0)] }), void 0));
};
/* harmony default export */ const ui_Terminal = (Terminal);

;// CONCATENATED MODULE: ./components/img/Img.tsx
var Img_assign = (undefined && undefined.__assign) || function () {
    Img_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Img_assign.apply(this, arguments);
};
var Img_rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};



var Img = function (_a) {
    var _b = _a["component"], ComponentIMG = _b === void 0 ? "img" : _b, className = _a.className, src = _a.src, _c = _a.alt, alt = _c === void 0 ? "" : _c, restProps = Img_rest(_a, ["component", "className", "src", "alt"]);
    if (ComponentIMG === "div") {
        return ((0,jsx_runtime.jsx)(ComponentIMG, Img_assign({ className: clsx_m("bg", className) }, restProps, { style: { "backgroundImage": "url(" + src + ")" } }), void 0));
    }
    return ((0,jsx_runtime.jsx)(ComponentIMG, Img_assign({ className: clsx_m("img", className), src: src, alt: alt }, restProps), void 0));
};
/* harmony default export */ const img_Img = (Img);

;// CONCATENATED MODULE: ./components/img/index.ts


// EXTERNAL MODULE: ./theme/icons/experience/jointohire.png
var jointohire = __webpack_require__(5445);
// EXTERNAL MODULE: ./theme/icons/experience/wazzup24.svg
var wazzup24 = __webpack_require__(9699);
;// CONCATENATED MODULE: ./pages/experience/Experience.tsx
var experience_Experience_assign = (undefined && undefined.__assign) || function () {
    experience_Experience_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return experience_Experience_assign.apply(this, arguments);
};













var WorkOnJoinToHire = function () { return ((0,jsx_runtime.jsxs)(ui_WindowIOS, { children: [(0,jsx_runtime.jsx)(Container_sc, experience_Experience_assign({ className: "center" }, { children: (0,jsx_runtime.jsx)(UnifiedLink, experience_Experience_assign({ to: "https://jointohire.com/", target: "_blank" }, { children: (0,jsx_runtime.jsx)(img_Img, { src: jointohire, alt: "JoinToHire", style: {
                        "width": "120px",
                        "height": "20px",
                        "marginTop": "10px",
                    } }, void 0) }), void 0) }), void 0),
        (0,jsx_runtime.jsx)(Container_sc, experience_Experience_assign({ style: { "padding": "0 10px" } }, { children: (0,jsx_runtime.jsxs)(Text, experience_Experience_assign({ size: "15px" }, { children: ["As the first workplace in the IT sector, I was pleasantly surprised by good mutual understanding with colleagues and warm relations between them. My job was to create interfaces for the company's product and various freelance jobs, using React and Mobx/Redux as our state management system. The focus is on creating reusable components that the team can use in future projects.", (0,jsx_runtime.jsx)("br", {}, void 0), " - Using my knowledge of front-end design to determine the structure and components of a project, making sure they can be reused.", (0,jsx_runtime.jsx)("br", {}, void 0), " - Keep your code quality high. ", (0,jsx_runtime.jsx)("br", {}, void 0), "- Interact with the designer to suggest changes and to make sure the view he has about the design is translated into actual functionality"] }), void 0) }), void 0)] }, void 0)); };
var WorkOnWazzup24 = function () { return ((0,jsx_runtime.jsxs)(ui_Terminal, experience_Experience_assign({ href: "https://wazzup24.com", Icon: wazzup24.default, title: "Wazzup 24" }, { children: [(0,jsx_runtime.jsx)("br", {}, void 0),
        (0,jsx_runtime.jsx)("br", {}, void 0), " - Microservice architecture, single repository on GitLab. ", (0,jsx_runtime.jsx)("br", {}, void 0), " ", "- We work on the principles of CI / CD. Everything is run by Kubernetes.", " ", (0,jsx_runtime.jsx)("br", {}, void 0), " - Node.js: api on express, we interact with the base on PostgreSQL via Sequelize. ", (0,jsx_runtime.jsx)("br", {}, void 0), " - We write logs in MongoDB, our bot sends critical errors to telegrams. ", (0,jsx_runtime.jsx)("br", {}, void 0), " - For queues - RabbitMQ, for storing content - Rook + Minio, for caching Redis."] }), void 0)); };
var Experience_Experience = function () {
    var ref = (0,react.useRef)(null);
    var handleScrollTo = function (count) {
        if (ref.current) {
            // ref.current.scrollTo(count);
        }
    };
    return ((0,jsx_runtime.jsx)(layout_Layout, experience_Experience_assign({ className: "experience-page", "data-spy": "scroll" }, { children: (0,jsx_runtime.jsx)(scrolling_ParallaxScrolling, { viewFirst: (0,jsx_runtime.jsx)(WorkOnJoinToHire, {}, void 0), viewSecond: (0,jsx_runtime.jsx)(WorkOnWazzup24, {}, void 0), ref: ref, handleScrollTo: handleScrollTo }, void 0) }), void 0));
};
/* harmony default export */ const pages_experience_Experience = (Experience_Experience);

;// CONCATENATED MODULE: ./pages/experience/index.ts


;// CONCATENATED MODULE: ./components/cards/cardarticle/CardArticle.tsx
var CardArticle_assign = (undefined && undefined.__assign) || function () {
    CardArticle_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return CardArticle_assign.apply(this, arguments);
};



var CardArticle = function (_a) {
    var _b = _a.desc, desc = _b === void 0 ? "" : _b, _c = _a.title, title = _c === void 0 ? "" : _c, _d = _a.url, url = _d === void 0 ? "" : _d;
    return ((0,jsx_runtime.jsx)("article", CardArticle_assign({ className: "card--article" }, { children: (0,jsx_runtime.jsx)("div", CardArticle_assign({ className: "article--body" }, { children: (0,jsx_runtime.jsxs)("div", CardArticle_assign({ className: "body--content" }, { children: [(0,jsx_runtime.jsx)(react_router_dom_Link, CardArticle_assign({ to: url, className: "content--title" }, { children: (0,jsx_runtime.jsx)("h3", CardArticle_assign({ className: "title--text" }, { children: title }), void 0) }), void 0),
                    (0,jsx_runtime.jsx)("div", CardArticle_assign({ className: "content--description" }, { children: (0,jsx_runtime.jsx)("p", { children: desc }, void 0) }), void 0)] }), void 0) }), void 0) }), void 0));
};
/* harmony default export */ const cardarticle_CardArticle = (CardArticle);

;// CONCATENATED MODULE: ./components/cards/cardarticle/index.ts


;// CONCATENATED MODULE: ./pages/articles/Articles.tsx
var Articles_assign = (undefined && undefined.__assign) || function () {
    Articles_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Articles_assign.apply(this, arguments);
};






var Articles = function (_a) {
    var headArticles = _a.headArticles;
    var mapArticles = function () {
        return headArticles.map(function (item) { return ((0,jsx_runtime.jsx)(cardarticle_CardArticle, { desc: item.desc, title: item.title, url: item.url }, item.url)); });
    };
    return ((0,jsx_runtime.jsxs)(layout_Layout, Articles_assign({ className: "articles" }, { children: [(0,jsx_runtime.jsx)(header_Header, {}, void 0), mapArticles()] }), void 0));
};
/* harmony default export */ const articles_Articles = (hoc_withContent(Articles));

;// CONCATENATED MODULE: ./pages/articles/index.ts


;// CONCATENATED MODULE: ./routes/Site.routes.tsx
var Site_routes_assign = (undefined && undefined.__assign) || function () {
    Site_routes_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Site_routes_assign.apply(this, arguments);
};










var SiteRoutes = function (props) {
    var location = useLocation();
    var showcase = location.state && location.state.showcase;
    return ((0,jsx_runtime.jsxs)(MDXProvider, Site_routes_assign({ components: {} }, { children: [(0,jsx_runtime.jsxs)(Switch, Site_routes_assign({ location: showcase || location }, { children: [(0,jsx_runtime.jsx)(Route, { exact: true, strict: true, path: "/:url*", render: function (_a) {
                            var location = _a.location;
                            return ((0,jsx_runtime.jsx)(Redirect, { to: location.pathname + "/" }, void 0));
                        } }, void 0),
                    (0,jsx_runtime.jsx)(Route, { exact: true, path: RoutePage.MAIN, component: main_Main }, void 0),
                    (0,jsx_runtime.jsx)(Route, { exact: true, path: RoutePage.ARTICLES, component: articles_Articles }, void 0),
                    (0,jsx_runtime.jsx)(Route, { exact: true, path: RoutePage.ABOUTME, component: pages_aboutme_AboutMe }, void 0),
                    (0,jsx_runtime.jsx)(Route, { exact: true, path: RoutePage.EXPERIENCE, component: pages_experience_Experience }, void 0),
                    (0,jsx_runtime.jsx)(Route, { render: function () { return (0,jsx_runtime.jsx)(Content_routes, Site_routes_assign({}, props), void 0); } }, void 0)] }), void 0),
            showcase && (0,jsx_runtime.jsx)(Showcase_routes, {}, void 0)] }), void 0));
};
/* harmony default export */ const Site_routes = (SiteRoutes);

;// CONCATENATED MODULE: ./settings/constants.ts
var REACT_APP_ROOT_DOM_NODE_ID = "app";
var ROOT_DOM_ID = REACT_APP_ROOT_DOM_NODE_ID || "app";

;// CONCATENATED MODULE: ./components/markup/Body.tsx
var Body_assign = (undefined && undefined.__assign) || function () {
    Body_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Body_assign.apply(this, arguments);
};





var Body = function () { return ((0,jsx_runtime.jsx)("body", { children: (0,jsx_runtime.jsx)("div", Body_assign({ id: ROOT_DOM_ID }, { children: (0,jsx_runtime.jsx)(Route, { path: PUBLIC_URL, render: function (props) { return ((0,jsx_runtime.jsx)(Site_routes, Body_assign({}, props, { 
                // eslint-disable-next-line @typescript-eslint/no-require-imports
                importContent: function (path) { return __webpack_require__(9280)("./" + path); } }), void 0)); } }, void 0) }), void 0) }, void 0)); };
/* harmony default export */ const markup_Body = (Body);

;// CONCATENATED MODULE: ./components/markup/Markup.tsx
var Markup_assign = (undefined && undefined.__assign) || function () {
    Markup_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Markup_assign.apply(this, arguments);
};



var Markup = function (_a) {
    var locals = _a.locals;
    return ((0,jsx_runtime.jsxs)("html", Markup_assign({ lang: "en" }, { children: [(0,jsx_runtime.jsx)(markup_Head, { locals: locals }, void 0),
            (0,jsx_runtime.jsx)(markup_Body, {}, void 0)] }), void 0));
};
/* harmony default export */ const markup_Markup = (Markup);

;// CONCATENATED MODULE: ./components/markup/index.ts


;// CONCATENATED MODULE: ./server/Static.tsx
var Static_assign = (undefined && undefined.__assign) || function () {
    Static_assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return Static_assign.apply(this, arguments);
};




var Static = function (locals) {
    var renderedHtml = server.renderToString((0,jsx_runtime.jsx)(StaticRouter, Static_assign({ location: locals.path, context: {} }, { children: (0,jsx_runtime.jsx)(markup_Markup, { locals: locals }, void 0) }), void 0));
    return "<!DOCTYPE html>" + renderedHtml;
};
/* harmony default export */ const server_Static = (Static);


/***/ }),

/***/ 4566:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/favicon.a3071ba8a8ad978cd984.ico";

/***/ }),

/***/ 3476:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/icon-pwa-512x512.551d55793d40f3946eda.png";

/***/ }),

/***/ 502:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/logo-on-white-bg.206fe056740757473479.svg";

/***/ }),

/***/ 9280:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./articles/custom-route.md": 2553,
	"./index.md": 8302
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 9280;

/***/ }),

/***/ 5445:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "img/jointohire.a21a2501a604f5a85d74.png";

/***/ }),

/***/ 7597:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./3d-house.svg": [
		3638,
		638
	],
	"./calendar.svg": [
		9361
	],
	"./close.svg": [
		3781
	],
	"./edit.svg": [
		7229,
		229
	],
	"./education.svg": [
		2956
	],
	"./experience/clients.svg": [
		745
	],
	"./experience/cloud.svg": [
		9616
	],
	"./experience/earth.svg": [
		8335
	],
	"./experience/satellite.svg": [
		3948
	],
	"./experience/server.svg": [
		7746
	],
	"./experience/stars.svg": [
		4978
	],
	"./experience/wazzup24.svg": [
		9699
	],
	"./icon-print.svg": [
		6807,
		807
	],
	"./location.svg": [
		1354
	],
	"./logo-default.svg": [
		3458
	],
	"./mail.svg": [
		223
	],
	"./passions/book.svg": [
		3025,
		25
	],
	"./passions/coffee.svg": [
		2293,
		293
	],
	"./passions/compose.svg": [
		1952,
		952
	],
	"./passions/music.svg": [
		6604,
		604
	],
	"./passions/sport.svg": [
		628,
		628
	],
	"./passions/travel.svg": [
		7485,
		485
	],
	"./piled-files.svg": [
		7195,
		195
	],
	"./profile-user.svg": [
		336,
		535
	],
	"./skills/antd-logo.svg": [
		7610,
		610
	],
	"./skills/apollographql-logo.svg": [
		5844,
		844
	],
	"./skills/cloudinary-logo.svg": [
		2184,
		184
	],
	"./skills/css-logo.svg": [
		3397,
		397
	],
	"./skills/express-logo.svg": [
		2637,
		637
	],
	"./skills/git-logo.svg": [
		5697,
		697
	],
	"./skills/github-logo.svg": [
		9371,
		371
	],
	"./skills/gitkraken-logo.svg": [
		6525,
		525
	],
	"./skills/gitlab-logo.svg": [
		5404,
		404
	],
	"./skills/graphql-logo.svg": [
		4483,
		483
	],
	"./skills/html-logo.svg": [
		1737,
		737
	],
	"./skills/intellij-idea-logo.svg": [
		5346,
		346
	],
	"./skills/java-logo.svg": [
		5848,
		848
	],
	"./skills/javascript-logo.svg": [
		5769,
		769
	],
	"./skills/jest-logo.svg": [
		3778,
		778
	],
	"./skills/jquery-logo.svg": [
		20,
		20
	],
	"./skills/linux-logo.svg": [
		820,
		820
	],
	"./skills/mongodb-logo.svg": [
		5729,
		729
	],
	"./skills/next-js-logo.svg": [
		1657,
		657
	],
	"./skills/node-js-logo.svg": [
		2174,
		174
	],
	"./skills/npm-logo.svg": [
		3011
	],
	"./skills/postcss-logo.svg": [
		1897,
		897
	],
	"./skills/postgresql-logo.svg": [
		5267,
		267
	],
	"./skills/react-logo.svg": [
		1305,
		305
	],
	"./skills/redux-logo.svg": [
		7542,
		542
	],
	"./skills/redux-saga-logo.svg": [
		1861,
		861
	],
	"./skills/sass-logo.svg": [
		3786,
		786
	],
	"./skills/sequelize-logo.svg": [
		5752,
		752
	],
	"./skills/stripe-logo.svg": [
		2718,
		718
	],
	"./skills/styled-components-logo.svg": [
		1223,
		223
	],
	"./skills/ts-node-logo.svg": [
		8357,
		357
	],
	"./skills/twilio-logo.svg": [
		9622,
		622
	],
	"./skills/typeorm-logo.svg": [
		4940,
		940
	],
	"./skills/typescript-logo.svg": [
		8781,
		781
	],
	"./skills/visual-studio-code-logo.svg": [
		7131,
		131
	],
	"./skills/webpack-logo.svg": [
		1994,
		994
	],
	"./social/github.svg": [
		2377
	],
	"./social/linkedin.svg": [
		6416
	],
	"./social/twitter.svg": [
		2076
	],
	"./telephone.svg": [
		9433
	],
	"./work.svg": [
		2044,
		44
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => Object.keys(map);
webpackAsyncContext.id = 7597;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 2413:
/***/ ((module) => {

"use strict";
module.exports = require("stream");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "js/" + chunkId + "." + {"20":"b7e8ca","25":"e83a14","44":"c9bd53","131":"86ac9a","174":"b809a1","184":"cb1a7a","195":"1f60bb","223":"ecaf51","229":"eed117","267":"21de4a","293":"ecf7c2","305":"d75924","346":"6cae26","357":"5a5efa","371":"6f889a","397":"559b52","404":"c2cfc7","483":"2d722b","485":"d73c5b","525":"959e5d","535":"14af21","542":"eb0082","604":"a8fa9d","610":"01f2ad","622":"09afa8","628":"8e0552","637":"448d09","638":"a66b50","657":"7bf1b8","667":"5d37f8","697":"926d3b","706":"4771f6","718":"a04268","729":"542ebf","737":"4f736d","752":"f79b52","769":"d1c22a","778":"d1f847","781":"879b07","786":"367827","807":"883cb6","820":"17a027","844":"764969","848":"bd9cef","861":"27a68a","897":"d39ce6","940":"f7c048","952":"ef57e6","994":"719ade"}[chunkId] + "." + chunkId + ".c.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === 826) return "styles/index.undefined.css";
/******/ 			// return url for filenames based on template
/******/ 			return "styles/" + chunkId + "." + {"20":"b7e8ca056ebcd10ae4d6","25":"e83a14c3c1b6ce0b7794","44":"c9bd53f0b0c3f6b269e4","131":"86ac9a26a1fa16fc6e3c","174":"b809a168bffc4ad4a807","184":"cb1a7ad09c31c132377a","195":"1f60bb06ffa48b1070fa","223":"ecaf5153f5695ef22ea8","229":"eed117c32a9b627039ee","267":"21de4a95ad15b0faa478","293":"ecf7c26caffac0b69c2f","305":"d75924b7e4cba0a9458b","346":"6cae26402eac6cbcaff0","357":"5a5efa9b085ffd9c6a63","371":"6f889a3ea0b457601f93","397":"559b522b349ac137c2fa","404":"c2cfc7b20efe359ad5c2","483":"2d722b88fc10bea155b7","485":"d73c5bf897d1e29335ae","525":"959e5db2688684371f1b","535":"14af2112f0df1a788e40","542":"eb0082fb2f8876da17c3","604":"a8fa9da7b23b3d1b59aa","610":"01f2adcfbaab285eeafc","622":"09afa8eabc6418071f04","628":"8e05527a19a86edb5e6c","637":"448d098e8a67ca369140","638":"a66b509b5731ce071646","657":"7bf1b88bb044a21b6b8b","667":"5d37f858b71e6abe5332","697":"926d3b0636930eae4508","706":"4771f6bd95b863464f73","718":"a04268a656f4bd4d71b4","729":"542ebf79d0ab207276dc","737":"4f736ddd6ae3940ab03c","752":"f79b528cd9111d4133c5","769":"d1c22acee4b2e441d4d4","778":"d1f847a934d1f5aeec14","781":"879b07aed9de74706195","786":"367827d135bda0c759f1","807":"883cb617c8b2420cb735","820":"17a02746aee0138aa154","844":"76496934239b3256e59b","848":"bd9cef7e94f01ed80e2b","861":"27a68a4bc3f793b56ab2","897":"d39ce6f288452ad1450a","940":"f7c0486892d6936bf93a","952":"ef57e6fc6d6a0000755d","994":"719ade407331583a5699"}[chunkId] + ".css";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			826: 1
/******/ 		};
/******/ 		
/******/ 		var installChunk = (chunk) => {
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids, runtime = chunk.runtime;
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 1;
/******/ 		};
/******/ 		
/******/ 		// require() chunk loading for javascript
/******/ 		__webpack_require__.f.require = function(chunkId, promises) {
/******/ 		
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					installChunk(require("../" + __webpack_require__.u(chunkId)));
/******/ 				} else installedChunks[chunkId] = 1;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(3732);
/******/ })()
;
});