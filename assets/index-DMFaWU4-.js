var eE=Object.defineProperty;var nE=(o,t,i)=>t in o?eE(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var xe=(o,t,i)=>nE(o,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Pd={exports:{}},vl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_;function iE(){if(W_)return vl;W_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:u}}return vl.Fragment=t,vl.jsx=i,vl.jsxs=i,vl}var j_;function aE(){return j_||(j_=1,Pd.exports=iE()),Pd.exports}var ct=aE(),zd={exports:{}},pe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function sE(){if(Z_)return pe;Z_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),S=Symbol.iterator;function T(X){return X===null||typeof X!="object"?null:(X=S&&X[S]||X["@@iterator"],typeof X=="function"?X:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,_={};function w(X,gt,Y){this.props=X,this.context=gt,this.refs=_,this.updater=Y||A}w.prototype.isReactComponent={},w.prototype.setState=function(X,gt){if(typeof X!="object"&&typeof X!="function"&&X!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,X,gt,"setState")},w.prototype.forceUpdate=function(X){this.updater.enqueueForceUpdate(this,X,"forceUpdate")};function D(){}D.prototype=w.prototype;function b(X,gt,Y){this.props=X,this.context=gt,this.refs=_,this.updater=Y||A}var I=b.prototype=new D;I.constructor=b,M(I,w.prototype),I.isPureReactComponent=!0;var z=Array.isArray;function P(){}var V={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function E(X,gt,Y){var J=Y.ref;return{$$typeof:o,type:X,key:gt,ref:J!==void 0?J:null,props:Y}}function U(X,gt){return E(X.type,gt,X.props)}function H(X){return typeof X=="object"&&X!==null&&X.$$typeof===o}function q(X){var gt={"=":"=0",":":"=2"};return"$"+X.replace(/[=:]/g,function(Y){return gt[Y]})}var nt=/\/+/g;function Q(X,gt){return typeof X=="object"&&X!==null&&X.key!=null?q(""+X.key):gt.toString(36)}function F(X){switch(X.status){case"fulfilled":return X.value;case"rejected":throw X.reason;default:switch(typeof X.status=="string"?X.then(P,P):(X.status="pending",X.then(function(gt){X.status==="pending"&&(X.status="fulfilled",X.value=gt)},function(gt){X.status==="pending"&&(X.status="rejected",X.reason=gt)})),X.status){case"fulfilled":return X.value;case"rejected":throw X.reason}}throw X}function $(X,gt,Y,J,yt){var Rt=typeof X;(Rt==="undefined"||Rt==="boolean")&&(X=null);var wt=!1;if(X===null)wt=!0;else switch(Rt){case"bigint":case"string":case"number":wt=!0;break;case"object":switch(X.$$typeof){case o:case t:wt=!0;break;case v:return wt=X._init,$(wt(X._payload),gt,Y,J,yt)}}if(wt)return yt=yt(X),wt=J===""?"."+Q(X,0):J,z(yt)?(Y="",wt!=null&&(Y=wt.replace(nt,"$&/")+"/"),$(yt,gt,Y,"",function(B){return B})):yt!=null&&(H(yt)&&(yt=U(yt,Y+(yt.key==null||X&&X.key===yt.key?"":(""+yt.key).replace(nt,"$&/")+"/")+wt)),gt.push(yt)),1;wt=0;var At=J===""?".":J+":";if(z(X))for(var Lt=0;Lt<X.length;Lt++)J=X[Lt],Rt=At+Q(J,Lt),wt+=$(J,gt,Y,Rt,yt);else if(Lt=T(X),typeof Lt=="function")for(X=Lt.call(X),Lt=0;!(J=X.next()).done;)J=J.value,Rt=At+Q(J,Lt++),wt+=$(J,gt,Y,Rt,yt);else if(Rt==="object"){if(typeof X.then=="function")return $(F(X),gt,Y,J,yt);throw gt=String(X),Error("Objects are not valid as a React child (found: "+(gt==="[object Object]"?"object with keys {"+Object.keys(X).join(", ")+"}":gt)+"). If you meant to render a collection of children, use an array instead.")}return wt}function Z(X,gt,Y){if(X==null)return X;var J=[],yt=0;return $(X,J,"","",function(Rt){return gt.call(Y,Rt,yt++)}),J}function lt(X){if(X._status===-1){var gt=X._result,Y=gt();Y.then(function(J){(X._status===0||X._status===-1)&&(X._status=1,X._result=J,Y.status===void 0&&(Y.status="fulfilled",Y.value=J))},function(J){(X._status===0||X._status===-1)&&(X._status=2,X._result=J,Y.status===void 0&&(Y.status="rejected",Y.reason=J))}),X._status===-1&&(X._status=0,X._result=Y)}if(X._status===1)return X._result.default;throw X._result}var xt=typeof reportError=="function"?reportError:function(X){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var gt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof X=="object"&&X!==null&&typeof X.message=="string"?String(X.message):String(X),error:X});if(!window.dispatchEvent(gt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",X);return}console.error(X)};function Tt(X){var gt=V.T,Y={};Y.types=gt!==null?gt.types:null,V.T=Y;try{var J=X(),yt=V.S;yt!==null&&yt(Y,J),typeof J=="object"&&J!==null&&typeof J.then=="function"&&J.then(P,xt)}catch(Rt){xt(Rt)}finally{gt!==null&&Y.types!==null&&(gt.types=Y.types),V.T=gt}}function Vt(X){var gt=V.T;if(gt!==null){var Y=gt.types;Y===null?gt.types=[X]:Y.indexOf(X)===-1&&Y.push(X)}else Tt(Vt.bind(null,X))}var se={map:Z,forEach:function(X,gt,Y){Z(X,function(){gt.apply(this,arguments)},Y)},count:function(X){var gt=0;return Z(X,function(){gt++}),gt},toArray:function(X){return Z(X,function(gt){return gt})||[]},only:function(X){if(!H(X))throw Error("React.Children.only expected to receive a single React element child.");return X}};return pe.Activity=m,pe.Children=se,pe.Component=w,pe.Fragment=i,pe.Profiler=l,pe.PureComponent=b,pe.StrictMode=s,pe.Suspense=p,pe.ViewTransition=x,pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,pe.__COMPILER_RUNTIME={__proto__:null,c:function(X){return V.H.useMemoCache(X)}},pe.addTransitionType=Vt,pe.cache=function(X){return function(){return X.apply(null,arguments)}},pe.cacheSignal=function(){return null},pe.cloneElement=function(X,gt,Y){if(X==null)throw Error("The argument must be a React element, but you passed "+X+".");var J=M({},X.props),yt=X.key;if(gt!=null)for(Rt in gt.key!==void 0&&(yt=""+gt.key),gt)!N.call(gt,Rt)||Rt==="key"||Rt==="__self"||Rt==="__source"||Rt==="ref"&&gt.ref===void 0||(J[Rt]=gt[Rt]);var Rt=arguments.length-2;if(Rt===1)J.children=Y;else if(1<Rt){for(var wt=Array(Rt),At=0;At<Rt;At++)wt[At]=arguments[At+2];J.children=wt}return E(X.type,yt,J)},pe.createContext=function(X){return X={$$typeof:h,_currentValue:X,_currentValue2:X,_threadCount:0,Provider:null,Consumer:null},X.Provider=X,X.Consumer={$$typeof:u,_context:X},X},pe.createElement=function(X,gt,Y){var J,yt={},Rt=null;if(gt!=null)for(J in gt.key!==void 0&&(Rt=""+gt.key),gt)N.call(gt,J)&&J!=="key"&&J!=="__self"&&J!=="__source"&&(yt[J]=gt[J]);var wt=arguments.length-2;if(wt===1)yt.children=Y;else if(1<wt){for(var At=Array(wt),Lt=0;Lt<wt;Lt++)At[Lt]=arguments[Lt+2];yt.children=At}if(X&&X.defaultProps)for(J in wt=X.defaultProps,wt)yt[J]===void 0&&(yt[J]=wt[J]);return E(X,Rt,yt)},pe.createRef=function(){return{current:null}},pe.forwardRef=function(X){return{$$typeof:d,render:X}},pe.isValidElement=H,pe.lazy=function(X){return{$$typeof:v,_payload:{_status:-1,_result:X},_init:lt}},pe.memo=function(X,gt){return{$$typeof:g,type:X,compare:gt===void 0?null:gt}},pe.startTransition=Tt,pe.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},pe.use=function(X){return V.H.use(X)},pe.useActionState=function(X,gt,Y){return V.H.useActionState(X,gt,Y)},pe.useCallback=function(X,gt){return V.H.useCallback(X,gt)},pe.useContext=function(X){return V.H.useContext(X)},pe.useDebugValue=function(){},pe.useDeferredValue=function(X,gt){return V.H.useDeferredValue(X,gt)},pe.useEffect=function(X,gt){return V.H.useEffect(X,gt)},pe.useEffectEvent=function(X){return V.H.useEffectEvent(X)},pe.useId=function(){return V.H.useId()},pe.useImperativeHandle=function(X,gt,Y){return V.H.useImperativeHandle(X,gt,Y)},pe.useInsertionEffect=function(X,gt){return V.H.useInsertionEffect(X,gt)},pe.useLayoutEffect=function(X,gt){return V.H.useLayoutEffect(X,gt)},pe.useMemo=function(X,gt){return V.H.useMemo(X,gt)},pe.useOptimistic=function(X,gt){return V.H.useOptimistic(X,gt)},pe.useReducer=function(X,gt,Y){return V.H.useReducer(X,gt,Y)},pe.useRef=function(X){return V.H.useRef(X)},pe.useState=function(X){return V.H.useState(X)},pe.useSyncExternalStore=function(X,gt,Y){return V.H.useSyncExternalStore(X,gt,Y)},pe.useTransition=function(){return V.H.useTransition()},pe.version="19.3.1",pe}var Q_;function _m(){return Q_||(Q_=1,zd.exports=sE()),zd.exports}var me=_m(),Id={exports:{}},_l={},Bd={exports:{}},Fd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K_;function rE(){return K_||(K_=1,(function(o){function t(F,$){var Z=F.length;F.push($);t:for(;0<Z;){var lt=Z-1>>>1,xt=F[lt];if(0<l(xt,$))F[lt]=$,F[Z]=xt,Z=lt;else break t}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var $=F[0],Z=F.pop();if(Z!==$){F[0]=Z;t:for(var lt=0,xt=F.length,Tt=xt>>>1;lt<Tt;){var Vt=2*(lt+1)-1,se=F[Vt],X=Vt+1,gt=F[X];if(0>l(se,Z))X<xt&&0>l(gt,se)?(F[lt]=gt,F[X]=Z,lt=X):(F[lt]=se,F[Vt]=Z,lt=Vt);else if(X<xt&&0>l(gt,Z))F[lt]=gt,F[X]=Z,lt=X;else break t}}return $}function l(F,$){var Z=F.sortIndex-$.sortIndex;return Z!==0?Z:F.id-$.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],g=[],v=1,m=null,x=3,S=!1,T=!1,A=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function b(F){for(var $=i(g);$!==null;){if($.callback===null)s(g);else if($.startTime<=F)s(g),$.sortIndex=$.expirationTime,t(p,$);else break;$=i(g)}}function I(F){if(A=!1,b(F),!T)if(i(p)!==null)T=!0,z||(z=!0,H());else{var $=i(g);$!==null&&Q(I,$.startTime-F)}}var z=!1,P=-1,V=5,N=-1;function E(){return M?!0:!(o.unstable_now()-N<V)}function U(){if(M=!1,z){var F=o.unstable_now();N=F;var $=!0;try{t:{T=!1,A&&(A=!1,w(P),P=-1),S=!0;var Z=x;try{e:{for(b(F),m=i(p);m!==null&&!(m.expirationTime>F&&E());){var lt=m.callback;if(typeof lt=="function"){m.callback=null,x=m.priorityLevel;var xt=lt(m.expirationTime<=F);if(F=o.unstable_now(),typeof xt=="function"){m.callback=xt,b(F),$=!0;break e}m===i(p)&&s(p),b(F)}else s(p);m=i(p)}if(m!==null)$=!0;else{var Tt=i(g);Tt!==null&&Q(I,Tt.startTime-F),$=!1}}break t}finally{m=null,x=Z,S=!1}$=void 0}}finally{$?H():z=!1}}}var H;if(typeof D=="function")H=function(){D(U)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,nt=q.port2;q.port1.onmessage=U,H=function(){nt.postMessage(null)}}else H=function(){_(U,0)};function Q(F,$){P=_(function(){F(o.unstable_now())},$)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(F){switch(x){case 1:case 2:case 3:var $=3;break;default:$=x}var Z=x;x=$;try{return F()}finally{x=Z}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(F,$){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var Z=x;x=F;try{return $()}finally{x=Z}},o.unstable_scheduleCallback=function(F,$,Z){var lt=o.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?lt+Z:lt):Z=lt,F){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=Z+xt,F={id:v++,callback:$,priorityLevel:F,startTime:Z,expirationTime:xt,sortIndex:-1},Z>lt?(F.sortIndex=Z,t(g,F),i(p)===null&&F===i(g)&&(A?(w(P),P=-1):A=!0,Q(I,Z-lt))):(F.sortIndex=xt,t(p,F),T||S||(T=!0,z||(z=!0,H()))),F},o.unstable_shouldYield=E,o.unstable_wrapCallback=function(F){var $=x;return function(){var Z=x;x=$;try{return F.apply(this,arguments)}finally{x=Z}}}})(Fd)),Fd}var J_;function oE(){return J_||(J_=1,Bd.exports=rE()),Bd.exports}var Hd={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function lE(){if($_)return In;$_=1;var o=_m();function t(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)m+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,m,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:S===h?h:""+S,children:v,containerInfo:m,implementation:x}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,In.browser=function(v){return{$$typeof:u,_reason:v}},In.createPortal=function(v,m){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(t(299));return d(v,m,null,x)},In.flushSync=function(v){var m=p.T,x=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=m,s.p=x,s.d.f()}},In.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(v,m))},In.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},In.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var x=m.as,S=g(x,m.crossOrigin),T=typeof m.integrity=="string"?m.integrity:void 0,A=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;x==="style"?s.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:T,fetchPriority:A}):x==="script"&&s.d.X(v,{crossOrigin:S,integrity:T,fetchPriority:A,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},In.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var x=g(m.as,m.crossOrigin);s.d.M(v,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&s.d.M(v)},In.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var x=m.as,S=g(x,m.crossOrigin);s.d.L(v,x,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},In.preloadModule=function(v,m){if(typeof v=="string")if(m){var x=g(m.as,m.crossOrigin);s.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else s.d.m(v)},In.requestFormReset=function(v){s.d.r(v)},In.unstable_batchedUpdates=function(v,m){return v(m)},In.useFormState=function(v,m,x){return p.H.useFormState(v,m,x)},In.useFormStatus=function(){return p.H.useHostTransitionStatus()},In.version="19.3.1",In}var tx;function uE(){if(tx)return Hd.exports;tx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Hd.exports=lE(),Hd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ex;function cE(){if(ex)return _l;ex=1;var o=oE(),t=_m(),i=uE();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function h(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(s(188))}function g(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return p(c),e;if(f===r)return p(c),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=f;else{for(var y=!1,C=c.child;C;){if(C===a){y=!0,a=c,r=f;break}if(C===r){y=!0,r=c,a=f;break}C=C.sibling}if(!y){for(C=f.child;C;){if(C===a){y=!0,a=f,r=c;break}if(C===r){y=!0,r=f,a=c;break}C=C.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}function m(e,n,a,r,c,f){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,c,f)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&m(e.child,n,a,r,c,f))return!0;e=e.sibling}return!1}function x(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function S(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function T(e){var n=[null,null],a=x(e);return a===null||A(n,e,a.child,{foundSelf:!1}),n}function A(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&A(e,n,a.child,r))return!0;a=a.sibling}return!1}function M(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var _=null,w=null;function D(e,n,a){return e===a?!0:e===n?(_=e,!0):!1}function b(e,n,a){return e===a?(w=e,!1):e===n?(w!==null&&(_=e),!0):!1}function I(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function z(e,n,a){for(var r=0,c=e;c;c=a(c))r++;c=0;for(var f=n;f;f=a(f))c++;for(;0<r-c;)e=a(e),r--;for(;0<c-r;)n=a(n),c--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var P=Object.assign,V=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),nt=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),Z=Symbol.for("react.suspense_list"),lt=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),Tt=Symbol.for("react.activity"),Vt=Symbol.for("react.legacy_hidden"),se=Symbol.for("react.memo_cache_sentinel"),X=Symbol.for("react.view_transition"),gt=Symbol.for("react.recoverable"),Y=Symbol.iterator;function J(e){return e===null||typeof e!="object"?null:(e=Y&&e[Y]||e["@@iterator"],typeof e=="function"?e:null)}var yt=Symbol.for("react.client.reference");function Rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===yt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case q:return"Profiler";case H:return"StrictMode";case $:return"Suspense";case Z:return"SuspenseList";case Tt:return"Activity";case X:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case Q:return e.displayName||"Context";case nt:return(e._context.displayName||"Context")+".Consumer";case F:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lt:return n=e.displayName||null,n!==null?n:Rt(e.type)||"Memo";case xt:n=e._payload,e=e._init;try{return Rt(e(n))}catch{}}return null}var wt=Array.isArray,At=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Lt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,B={pending:!1,data:null,method:null,action:null},Mt=[],_t=-1;function ht(e){return{current:e}}function vt(e){0>_t||(e.current=Mt[_t],Mt[_t]=null,_t--)}function Ct(e,n){_t++,Mt[_t]=e.current,e.current=n}var Nt=ht(null),zt=ht(null),oe=ht(null),re=ht(null);function O(e,n){switch(Ct(oe,n),Ct(zt,e),Ct(Nt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?n_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=n_(n),e=i_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(Nt),Ct(Nt,e)}function R(){vt(Nt),vt(zt),vt(oe)}function st(e){var n=e.memoizedState;n!==null&&(kr._currentValue=n.memoizedState,Ct(re,e)),n=Nt.current;var a=i_(n,e.type);n!==a&&(Ct(zt,e),Ct(Nt,a))}function pt(e){zt.current===e&&(vt(Nt),vt(zt)),re.current===e&&(vt(re),kr._currentValue=B)}var Ut,St;function Qt(e){if(Ut===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ut=n&&n[1]||"",St=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ut+e+St}var Bt=!1;function Jt(e,n){if(!e||Bt)return"";Bt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var bt=function(){throw Error()};if(Object.defineProperty(bt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(bt,[])}catch(Xt){var K=Xt}Reflect.construct(e,[],bt)}else{try{bt.call()}catch(Xt){K=Xt}bt=!1;try{var ot=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),bt=!0,new e}finally{bt&&(ot!==void 0?Object.defineProperty(e.prototype,"props",ot):delete e.prototype.props)}}}else{try{throw Error()}catch(Xt){K=Xt}(bt=e())&&typeof bt.catch=="function"&&bt.catch(function(){})}}catch(Xt){if(Xt&&K&&typeof Xt.stack=="string")return[Xt.stack,K.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),y=f[0],C=f[1];if(y&&C){var k=y.split(`
`),et=C.split(`
`);for(c=r=0;r<k.length&&!k[r].includes("DetermineComponentFrameRoot");)r++;for(;c<et.length&&!et[c].includes("DetermineComponentFrameRoot");)c++;if(r===k.length||c===et.length)for(r=k.length-1,c=et.length-1;1<=r&&0<=c&&k[r]!==et[c];)c--;for(;1<=r&&0<=c;r--,c--)if(k[r]!==et[c]){if(r!==1||c!==1)do if(r--,c--,0>c||k[r]!==et[c]){var ut=`
`+k[r].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=r&&0<=c);break}}}finally{Bt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Qt(a):""}function te(e,n){switch(e.tag){case 26:case 27:case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return e.child!==n&&n!==null?Qt("Suspense Fallback"):Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return Jt(e.type,!1);case 11:return Jt(e.type.render,!1);case 1:return Jt(e.type,!0);case 31:return Qt("Activity");case 30:return Qt("ViewTransition");default:return""}}function Ot(e){try{var n="",a=null;do n+=te(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var ft=Object.prototype.hasOwnProperty,ee=o.unstable_scheduleCallback,Yt=o.unstable_cancelCallback,qt=o.unstable_shouldYield,_e=o.unstable_requestPaint,j=o.unstable_now,Ft=o.unstable_getCurrentPriorityLevel,kt=o.unstable_ImmediatePriority,$t=o.unstable_UserBlockingPriority,Pt=o.unstable_NormalPriority,Dt=o.unstable_LowPriority,ae=o.unstable_IdlePriority,ge=o.log,We=o.unstable_setDisableYieldValue,we=null,nn=null;function Sn(e){if(typeof ge=="function"&&We(e),nn&&typeof nn.setStrictMode=="function")try{nn.setStrictMode(we,e)}catch{}}var Bn=Math.clz32?Math.clz32:jl,ua=Math.log,Ro=Math.LN2;function jl(e){return e>>>=0,e===0?32:31-(ua(e)/Ro|0)|0}var vs=256,ca=262144,_s=4194304;function xi(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xs(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,f=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var C=r&134217727;return C!==0?(r=C&~f,r!==0?c=xi(r):(y&=C,y!==0?c=xi(y):a||(a=C&~e,a!==0&&(c=xi(a))))):(C=r&~f,C!==0?c=xi(C):y!==0?c=xi(y):a||(a=r&~e,a!==0&&(c=xi(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Pa(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Zl(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-Bn(a),c=1<<r;n|=e[r],a&=~c}return n}function uf(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ql(){var e=_s;return _s<<=1,(_s&62914560)===0&&(_s=4194304),e}function Co(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function ys(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function cf(e,n,a,r,c,f){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,k=e.expirationTimes,et=e.hiddenUpdates;for(a=y&~a;0<a;){var ut=31-Bn(a),bt=1<<ut;C[ut]=0,k[ut]=-1;var K=et[ut];if(K!==null)for(et[ut]=null,ut=0;ut<K.length;ut++){var ot=K[ut];ot!==null&&(ot.lane&=-536870913)}a&=~bt}r!==0&&L(e,r,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(y&~n))}function L(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Bn(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function it(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Bn(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function dt(e,n){var a=n&-n;return a=(a&42)!==0?1:mt(a),(a&(e.suspendedLanes|n))!==0?0:a}function mt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function at(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function It(){var e=Lt.p;return e!==0?e:(e=window.event,e===void 0?32:H_(e.type))}function Wt(e,n){var a=Lt.p;try{return Lt.p=e,n()}finally{Lt.p=a}}var Zt=Math.random().toString(36).slice(2),Gt="__reactFiber$"+Zt,ne="__reactProps$"+Zt,fe="__reactContainer$"+Zt,ue="__reactEvents$"+Zt,be="__reactListeners$"+Zt,He="__reactHandles$"+Zt,tn="__reactResources$"+Zt,Ie="__reactMarker$"+Zt,Oe="__reactLoad$"+Zt;function ce(e){delete e[Gt],delete e[ne],delete e[be],delete e[He]}function Be(e){var n;if(n=e[Gt])return n;for(var a=e.parentNode;a;){if(n=a[fe]||a[Gt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=y_(e);e!==null;){if(a=e[Gt])return a;e=y_(e)}return n}e=a,a=e.parentNode}return null}function Ee(e){if(e=e[Gt]||e[fe]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Mn(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ri(e){var n=e[tn];return n||(n=e[tn]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Pe(e){e[Ie]=!0}function za(e){e[Oe]=void 0}var Ke=new Set,qn={};function pn(e,n){on(e,n),on(e+"Capture",n)}function on(e,n){for(qn[e]=n,e=0;e<n.length;e++)Ke.add(n[e])}var Fn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),rr={},Yi={};function yS(e){return ft.call(Yi,e)?!0:ft.call(rr,e)?!1:Fn.test(e)?Yi[e]=!0:(rr[e]=!0,!1)}var ze=!1;function Vm(){var e=ze;return ze=!1,e}function Kl(e,n,a){if(yS(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function Jl(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function fa(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function oi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function km(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function SS(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,f=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ff(e){if(!e._valueTracker){var n=km(e)?"checked":"value";e._valueTracker=SS(e,n,""+e[n])}}function Xm(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=km(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var MS=/[\n"\\]/g;function yi(e){return e.replace(MS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function hf(e,n,a,r,c,f,y,C){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),n!=null?y==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+oi(n)):e.value!==""+oi(n)&&(e.value=""+oi(n)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),n!=null?y==="number"&&e.value==n?df(e,oi(e.value)):df(e,oi(n)):a!=null?df(e,oi(a)):r!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+oi(C):e.removeAttribute("name")}function qm(e,n,a,r,c,f,y,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){ff(e);return}a=a!=null?""+oi(a):"",n=n!=null?""+oi(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=C?e.checked:!!r,e.defaultChecked=!!r,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),ff(e)}function df(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function or(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+oi(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Ym(e,n,a){if(n!=null&&(n=""+oi(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+oi(a):""}function Wm(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(wt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=oi(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),ff(e)}function lr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var ES=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function jm(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||ES.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Zm(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",ze=!0);for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&(jm(e,c,r),ze=!0)}else for(var f in n)n.hasOwnProperty(f)&&jm(e,f,n[f])}function pf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var TS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function $l(e){return bS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wi(){}var mf=null;function gf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ur=null,cr=null;function Qm(e){var n=Ee(e);if(n&&(e=n.stateNode)){var a=e[ne]||null;t:switch(e=n.stateNode,n.type){case"input":if(hf(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+yi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[ne]||null;if(!c)throw Error(s(90));hf(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Xm(r)}break t;case"textarea":Ym(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&or(e,!!a.multiple,n,!1)}}}var vf=!1;function Km(e,n,a){if(vf)return e(n,a);vf=!0;try{var r=e(n);return r}finally{if(vf=!1,(ur!==null||cr!==null)&&($u(),ur&&(n=ur,e=cr,cr=ur=null,Qm(n),e)))for(n=0;n<e.length;n++)Qm(e[n])}}function wo(e,n){var a=e.stateNode;if(a===null)return null;var r=a[ne]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),_f=!1;if(ha)try{var Do={};Object.defineProperty(Do,"passive",{get:function(){_f=!0}}),window.addEventListener("test",Do,Do),window.removeEventListener("test",Do,Do)}catch{_f=!1}var Ia=null,xf=null,tu=null;function Jm(){if(tu)return tu;var e,n=xf,a=n.length,r,c="value"in Ia?Ia.value:Ia.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var y=a-e;for(r=1;r<=y&&n[a-r]===c[f-r];r++);return tu=c.slice(e,1<r?1-r:void 0)}function eu(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function nu(){return!0}function $m(){return!1}function Yn(e){function n(a,r,c,f,y){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?nu:$m,this.isPropagationStopped=$m,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=nu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=nu)},persist:function(){},isPersistent:nu}),n}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},iu=Yn(Ba),No=P({},Ba,{view:0,detail:0}),AS=Yn(No),yf,Sf,Uo,au=P({},No,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ef,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Uo&&(Uo&&e.type==="mousemove"?(yf=e.screenX-Uo.screenX,Sf=e.screenY-Uo.screenY):Sf=yf=0,Uo=e),yf)},movementY:function(e){return"movementY"in e?e.movementY:Sf}}),t0=Yn(au),RS=P({},au,{dataTransfer:0}),CS=Yn(RS),wS=P({},No,{relatedTarget:0}),Mf=Yn(wS),DS=P({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),NS=Yn(DS),US=P({},Ba,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),LS=Yn(US),OS=P({},Ba,{data:0}),e0=Yn(OS),PS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},zS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},IS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function BS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=IS[e])?!!n[e]:!1}function Ef(){return BS}var FS=P({},No,{key:function(e){if(e.key){var n=PS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=eu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?zS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ef,charCode:function(e){return e.type==="keypress"?eu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?eu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),HS=Yn(FS),GS=P({},au,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),n0=Yn(GS),VS=P({},Ba,{submitter:0}),kS=Yn(VS),XS=P({},No,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ef}),qS=Yn(XS),YS=P({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),WS=Yn(YS),jS=P({},au,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ZS=Yn(jS),QS=P({},Ba,{newState:0,oldState:0,source:0}),KS=Yn(QS),JS=[9,13,27,32],Tf=ha&&"CompositionEvent"in window,Lo=null;ha&&"documentMode"in document&&(Lo=document.documentMode);var $S=ha&&"TextEvent"in window&&!Lo,i0=ha&&(!Tf||Lo&&8<Lo&&11>=Lo),a0=" ",s0=!1;function r0(e,n){switch(e){case"keyup":return JS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function o0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fr=!1;function tM(e,n){switch(e){case"compositionend":return o0(n);case"keypress":return n.which!==32?null:(s0=!0,a0);case"textInput":return e=n.data,e===a0&&s0?null:e;default:return null}}function eM(e,n){if(fr)return e==="compositionend"||!Tf&&r0(e,n)?(e=Jm(),tu=xf=Ia=null,fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return i0&&n.locale!=="ko"?null:n.data;default:return null}}var nM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function l0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!nM[e.type]:n==="textarea"}function u0(e,n,a,r){ur?cr?cr.push(r):cr=[r]:ur=r,n=sc(n,"onChange"),0<n.length&&(a=new iu("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Oo=null,Po=null;function iM(e){Qv(e,0)}function su(e){var n=Mn(e);if(Xm(n))return e}function c0(e,n){if(e==="change")return n}var f0=!1;if(ha){var bf;if(ha){var Af="oninput"in document;if(!Af){var h0=document.createElement("div");h0.setAttribute("oninput","return;"),Af=typeof h0.oninput=="function"}bf=Af}else bf=!1;f0=bf&&(!document.documentMode||9<document.documentMode)}function d0(){Oo&&(Oo.detachEvent("onpropertychange",p0),Po=Oo=null)}function p0(e){if(e.propertyName==="value"&&su(Po)){var n=[];u0(n,Po,e,gf(e)),Km(iM,n)}}function aM(e,n,a){e==="focusin"?(d0(),Oo=n,Po=a,Oo.attachEvent("onpropertychange",p0)):e==="focusout"&&d0()}function sM(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return su(Po)}function rM(e,n){if(e==="click")return su(n)}function oM(e,n){if(e==="input"||e==="change")return su(n)}function lM(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var li=typeof Object.is=="function"?Object.is:lM;function zo(e,n){if(li(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!ft.call(n,c)||!li(e[c],n[c]))return!1}return!0}function Rf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function m0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function g0(e,n){var a=m0(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=m0(a)}}function v0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?v0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function _0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Rf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Rf(e.document)}return n}function Cf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var uM=ha&&"documentMode"in document&&11>=document.documentMode,hr=null,wf=null,Io=null,Df=!1;function x0(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Df||hr==null||hr!==Rf(r)||(r=hr,"selectionStart"in r&&Cf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Io&&zo(Io,r)||(Io=r,r=sc(wf,"onSelect"),0<r.length&&(n=new iu("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=hr)))}function Ss(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var dr={animationend:Ss("Animation","AnimationEnd"),animationiteration:Ss("Animation","AnimationIteration"),animationstart:Ss("Animation","AnimationStart"),transitionrun:Ss("Transition","TransitionRun"),transitionstart:Ss("Transition","TransitionStart"),transitioncancel:Ss("Transition","TransitionCancel"),transitionend:Ss("Transition","TransitionEnd")},Nf={},y0={};ha&&(y0=document.createElement("div").style,"AnimationEvent"in window||(delete dr.animationend.animation,delete dr.animationiteration.animation,delete dr.animationstart.animation),"TransitionEvent"in window||delete dr.transitionend.transition);function Ms(e){if(Nf[e])return Nf[e];if(!dr[e])return e;var n=dr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in y0)return Nf[e]=n[a];return e}var S0=Ms("animationend"),M0=Ms("animationiteration"),E0=Ms("animationstart"),cM=Ms("transitionrun"),fM=Ms("transitionstart"),hM=Ms("transitioncancel"),T0=Ms("transitionend"),b0=new Map,Uf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Uf.push("scrollEnd");function Ui(e,n){b0.set(e,n),pn(n,[e])}var dM=0;function da(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=zi.identifierPrefix;var a=dM++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function A0(e){if(e==null||typeof e=="string")return e;var n=null,a=Lr;if(a!==null)for(var r=0;r<a.length;r++){var c=e[a[r]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??e.default}function pa(e,n){return e=A0(e),n=A0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var ru=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Si=[],pr=0,Lf=0;function ou(){for(var e=pr,n=Lf=pr=0;n<e;){var a=Si[n];Si[n++]=null;var r=Si[n];Si[n++]=null;var c=Si[n];Si[n++]=null;var f=Si[n];if(Si[n++]=null,r!==null&&c!==null){var y=r.pending;y===null?c.next=c:(c.next=y.next,y.next=c),r.pending=c}f!==0&&R0(a,c,f)}}function lu(e,n,a,r){Si[pr++]=e,Si[pr++]=n,Si[pr++]=a,Si[pr++]=r,Lf|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Of(e,n,a,r){return lu(e,n,a,r),uu(e)}function Es(e,n){return lu(e,null,null,n),uu(e)}function R0(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Bn(a),e=f.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),f):null}function uu(e){if(50<sl)throw sl=0,Ju=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var mr={};function pM(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,r){return new pM(e,n,a,r)}function Pf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ma(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function C0(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function cu(e,n,a,r,c,f){var y=0;if(r=e,typeof r=="function")Pf(r)&&(y=1);else if(typeof r=="string")y=V1(e,a,Nt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(r){case Tt:return e=ti(31,a,n,c),e.elementType=Tt,e.lanes=f,e;case U:return Ts(a.children,c,f,n);case H:y=8,c|=24;break;case q:return e=ti(12,a,n,c|2),e.elementType=q,e.lanes=f,e;case $:return e=ti(13,a,n,c),e.elementType=$,e.lanes=f,e;case Z:return e=ti(19,a,n,c),e.elementType=Z,e.lanes=f,e;case Vt:case X:return e=c|32,e=ti(30,a,n,e),e.elementType=X,e.lanes=f,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case Q:y=10;break t;case nt:y=9;break t;case F:y=11;break t;case lt:y=14;break t;case xt:y=16,r=null;break t}y=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=ti(y,a,n,c),n.elementType=e,n.type=r,n.lanes=f,n}function Ts(e,n,a,r){return e=ti(7,e,r,n),e.lanes=a,e}function zf(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function w0(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function If(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var D0=new WeakMap;function Mi(e,n){if(typeof e=="object"&&e!==null){var a=D0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ot(n)},D0.set(e,n),n)}return{value:e,source:n,stack:Ot(n)}}var gr=[],vr=0,fu=null,Bo=0,Ei=[],Ti=0,Fa=null,ji=1,Zi="";function ga(e,n){gr[vr++]=Bo,gr[vr++]=fu,fu=e,Bo=n}function N0(e,n,a){Ei[Ti++]=ji,Ei[Ti++]=Zi,Ei[Ti++]=Fa,Fa=e;var r=ji;e=Zi;var c=32-Bn(r)-1;r&=~(1<<c),a+=1;var f=32-Bn(n)+c;if(30<f){var y=c-c%5;f=(r&(1<<y)-1).toString(32),r>>=y,c-=y,ji=1<<32-Bn(n)+c|a<<c|r,Zi=f+e}else ji=1<<f|a<<c|r,Zi=e}function hu(e){e.return!==null&&(ga(e,1),N0(e,1,0))}function Bf(e){for(;e===fu;)fu=gr[--vr],gr[vr]=null,Bo=gr[--vr],gr[vr]=null;for(;e===Fa;)Fa=Ei[--Ti],Ei[Ti]=null,Zi=Ei[--Ti],Ei[Ti]=null,ji=Ei[--Ti],Ei[Ti]=null}function U0(e,n){Ei[Ti++]=ji,Ei[Ti++]=Zi,Ei[Ti++]=Fa,ji=n.id,Zi=n.overflow,Fa=e}var Cn=null,Je=null,Te=!1,Ha=null,bi=!1,Ff=Error(s(519));function Ga(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fo(Mi(n,e)),Ff}function L0(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[Gt]=e,n[ne]=r,a){case"dialog":Ce("cancel",n),Ce("close",n);break;case"iframe":case"object":case"embed":Ce("load",n);break;case"video":case"audio":for(a=0;a<ol.length;a++)Ce(ol[a],n);break;case"source":Ce("error",n);break;case"img":case"image":case"link":Ce("error",n),Ce("load",n);break;case"details":Ce("toggle",n);break;case"input":Ce("invalid",n),qm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ce("invalid",n);break;case"textarea":Ce("invalid",n),Wm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||t_(n.textContent,a)?(r.popover!=null&&(Ce("beforetoggle",n),Ce("toggle",n)),r.onScroll!=null&&Ce("scroll",n),r.onScrollEnd!=null&&Ce("scrollend",n),r.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||Ga(e,!0)}function du(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:bi=!1;return;case 27:case 3:bi=!0;return;default:Cn=Cn.return}}function _r(e){if(e!==Cn)return!1;if(!Te)return du(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||md(e.type,e.memoizedProps)),a=!a),a&&Je&&Ga(e),du(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=x_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=x_(e)}else n===27?(n=Je,is(e.type)?(e=Td,Td=null,Je=e):Je=n):Je=Cn?Ri(e.stateNode.nextSibling):null;return!0}function bs(){Je=Cn=null,Te=!1}function Hf(){var e=Ha;return e!==null&&(ii===null?ii=e:ii.push.apply(ii,e),Ha=null),e}function Fo(e){Ha===null?Ha=[e]:Ha.push(e)}var Gf=ht(null),As=null,va=null;function Va(e,n,a){Ct(Gf,n._currentValue),n._currentValue=a}function _a(e){e._currentValue=Gf.current,vt(Gf)}function pu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Vf(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var y=c.child;f=f.firstContext;t:for(;f!==null;){var C=f;f=c;for(var k=0;k<n.length;k++)if(C.context===n[k]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),pu(f.return,a,e),r||(y=null);break t}f=C.next}}else if(c.tag===18){if(y=c.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),pu(y,a,e),y=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,y=c.alternate,y!==null&&(y.lanes|=a),pu(c.return,a,e),y=c.child,y=y!==null?y.sibling:null):y=c.child;if(y!==null)y.return=c;else for(y=c;y!==null;){if(y===e){y=null;break}if(c=y.sibling,c!==null){c.return=y.return,y=c;break}y=y.return}c=y}}function Rs(e,n,a,r){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var y=c.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var C=c.type;li(c.pendingProps.value,y.value)||(e!==null?e.push(C):e=[C])}}else if(c===re.current){if(y=c.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(kr):e=[kr])}c=c.return}return e!==null&&Vf(n,e,a,r),n.flags|=262144,e!==null}function mu(e){for(e=e.firstContext;e!==null;){if(!li(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Cs(e){As=e,va=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return O0(As,e)}function gu(e,n){return As===null&&Cs(e),O0(e,n)}function O0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},va===null){if(e===null)throw Error(s(308));va=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else va=va.next=n;return a}var mM=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},gM=o.unstable_scheduleCallback,vM=o.unstable_NormalPriority,mn={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function kf(){return{controller:new mM,data:new Map,refCount:0}}function Ho(e){e.refCount--,e.refCount===0&&gM(vM,function(){e.controller.abort()})}function P0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var Go=null;function _M(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Vo=null,Xf=0,ws=0,xr=null;function xM(e,n){if(Vo===null){var a=Vo=[];Xf=0,ws=rd(),xr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Xf++,n.then(z0,z0),n}function z0(){if(--Xf===0&&(Go=null,Vo!==null)){xr!==null&&(xr.status="fulfilled");var e=Vo;Vo=null,ws=0,xr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function yM(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var I0=At.S;At.S=function(e,n){if(wv=j(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&xM(e,n),Go!==null)for(var a=Ir;a!==null;)P0(a,Go),a=a.next;if(a=e.types,a!==null){for(var r=Ir;r!==null;)P0(r,a),r=r.next;if(ws!==0){r=Go,r===null&&(r=Go=[]);for(var c=0;c<a.length;c++){var f=a[c];r.indexOf(f)===-1&&r.push(f)}}}I0!==null&&I0(e,n)};var Ds=ht(null);function qf(){var e=Ds.current;return e!==null?e:Qe.pooledCache}function vu(e,n){n===null?Ct(Ds,Ds.current):Ct(Ds,n.pool)}function B0(){var e=qf();return e===null?null:{parent:mn._currentValue,pool:e}}var yr=Error(s(460)),Yf=Error(s(474)),_u=Error(s(542)),xu={then:function(){}};function F0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function H0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,V0(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,V0(e),e}throw Us=n,yr}}function Ns(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Us=a,yr):a}}var Us=null;function G0(){if(Us===null)throw Error(s(459));var e=Us;return Us=null,e}function V0(e){if(e===yr||e===_u)throw Error(s(483))}var Sr=null,ko=0;function yu(e){var n=ko;return ko+=1,Sr===null&&(Sr=[]),H0(Sr,e,n)}function ka(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Su(e,n){throw n.$$typeof===V?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function k0(e){function n(tt,W){if(e){var rt=tt.deletions;rt===null?(tt.deletions=[W],tt.flags|=16):rt.push(W)}}function a(tt,W){if(!e)return null;for(;W!==null;)n(tt,W),W=W.sibling;return null}function r(tt){for(var W=new Map;tt!==null;)tt.key===null?W.set(tt.index,tt):W.set(tt.key,tt),tt=tt.sibling;return W}function c(tt,W){return tt=ma(tt,W),tt.index=0,tt.sibling=null,tt}function f(tt,W,rt){return tt.index=rt,e?(rt=tt.alternate,rt!==null?(rt=rt.index,rt<W?(tt.flags|=2,W):rt):(tt.flags|=134217730,W)):(tt.flags|=1048576,W)}function y(tt){return e&&tt.alternate===null&&(tt.flags|=134217730),tt}function C(tt,W,rt,Et){return W===null||W.tag!==6?(W=zf(rt,tt.mode,Et),W.return=tt,W):(W=c(W,rt),W.return=tt,W)}function k(tt,W,rt,Et){var Kt=rt.type;return Kt===U?(tt=ut(tt,W,rt.props.children,Et,rt.key),ka(tt,rt),tt):W!==null&&(W.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===xt&&Ns(Kt)===W.type)?(W=c(W,rt.props),ka(W,rt),W.return=tt,W):(W=cu(rt.type,rt.key,rt.props,null,tt.mode,Et),ka(W,rt),W.return=tt,W)}function et(tt,W,rt,Et){return W===null||W.tag!==4||W.stateNode.containerInfo!==rt.containerInfo||W.stateNode.implementation!==rt.implementation?(W=If(rt,tt.mode,Et),W.return=tt,W):(W=c(W,rt.children||[]),W.return=tt,W)}function ut(tt,W,rt,Et,Kt){return W===null||W.tag!==7?(W=Ts(rt,tt.mode,Et,Kt),W.return=tt,W):(W=c(W,rt),W.return=tt,W)}function bt(tt,W,rt){if(typeof W=="string"&&W!==""||typeof W=="number"||typeof W=="bigint")return W=zf(""+W,tt.mode,rt),W.return=tt,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case N:return rt=cu(W.type,W.key,W.props,null,tt.mode,rt),ka(rt,W),rt.return=tt,rt;case E:return W=If(W,tt.mode,rt),W.return=tt,W;case xt:return W=Ns(W),bt(tt,W,rt)}if(wt(W)||J(W))return W=Ts(W,tt.mode,rt,null),W.return=tt,W;if(typeof W.then=="function")return bt(tt,yu(W),rt);if(W.$$typeof===Q)return bt(tt,gu(tt,W),rt);Su(tt,W)}return null}function K(tt,W,rt,Et){var Kt=W!==null?W.key:null;if(typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint")return Kt!==null?null:C(tt,W,""+rt,Et);if(typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case N:return rt.key===Kt?k(tt,W,rt,Et):null;case E:return rt.key===Kt?et(tt,W,rt,Et):null;case xt:return rt=Ns(rt),K(tt,W,rt,Et)}if(wt(rt)||J(rt))return Kt!==null?null:ut(tt,W,rt,Et,null);if(typeof rt.then=="function")return K(tt,W,yu(rt),Et);if(rt.$$typeof===Q)return K(tt,W,gu(tt,rt),Et);Su(tt,rt)}return null}function ot(tt,W,rt,Et,Kt){if(typeof Et=="string"&&Et!==""||typeof Et=="number"||typeof Et=="bigint")return tt=tt.get(rt)||null,C(W,tt,""+Et,Kt);if(typeof Et=="object"&&Et!==null){switch(Et.$$typeof){case N:return tt=tt.get(Et.key===null?rt:Et.key)||null,k(W,tt,Et,Kt);case E:return tt=tt.get(Et.key===null?rt:Et.key)||null,et(W,tt,Et,Kt);case xt:return Et=Ns(Et),ot(tt,W,rt,Et,Kt)}if(wt(Et)||J(Et))return tt=tt.get(rt)||null,ut(W,tt,Et,Kt,null);if(typeof Et.then=="function")return ot(tt,W,rt,yu(Et),Kt);if(Et.$$typeof===Q)return ot(tt,W,rt,gu(W,Et),Kt);Su(W,Et)}return null}function Xt(tt,W,rt,Et){for(var Kt=null,Ne=null,le=W,de=W=0,_n=null;le!==null&&de<rt.length;de++){le.index>de?(_n=le,le=null):_n=le.sibling;var Ue=K(tt,le,rt[de],Et);if(Ue===null){le===null&&(le=_n);break}e&&le&&Ue.alternate===null&&n(tt,le),W=f(Ue,W,de),Ne===null?Kt=Ue:Ne.sibling=Ue,Ne=Ue,le=_n}if(de===rt.length)return a(tt,le),Te&&ga(tt,de),Kt;if(le===null){for(;de<rt.length;de++)le=bt(tt,rt[de],Et),le!==null&&(W=f(le,W,de),Ne===null?Kt=le:Ne.sibling=le,Ne=le);return Te&&ga(tt,de),Kt}for(le=r(le);de<rt.length;de++)_n=ot(le,tt,de,rt[de],Et),_n!==null&&(e&&(Ue=_n.alternate,Ue!==null&&le.delete(Ue.key===null?de:Ue.key)),W=f(_n,W,de),Ne===null?Kt=_n:Ne.sibling=_n,Ne=_n);return e&&le.forEach(function(ls){return n(tt,ls)}),Te&&ga(tt,de),Kt}function ie(tt,W,rt,Et){if(rt==null)throw Error(s(151));for(var Kt=null,Ne=null,le=W,de=W=0,_n=null,Ue=rt.next();le!==null&&!Ue.done;de++,Ue=rt.next()){le.index>de?(_n=le,le=null):_n=le.sibling;var ls=K(tt,le,Ue.value,Et);if(ls===null){le===null&&(le=_n);break}e&&le&&ls.alternate===null&&n(tt,le),W=f(ls,W,de),Ne===null?Kt=ls:Ne.sibling=ls,Ne=ls,le=_n}if(Ue.done)return a(tt,le),Te&&ga(tt,de),Kt;if(le===null){for(;!Ue.done;de++,Ue=rt.next())Ue=bt(tt,Ue.value,Et),Ue!==null&&(W=f(Ue,W,de),Ne===null?Kt=Ue:Ne.sibling=Ue,Ne=Ue);return Te&&ga(tt,de),Kt}for(le=r(le);!Ue.done;de++,Ue=rt.next())Ue=ot(le,tt,de,Ue.value,Et),Ue!==null&&(e&&(_n=Ue.alternate,_n!==null&&le.delete(_n.key===null?de:_n.key)),W=f(Ue,W,de),Ne===null?Kt=Ue:Ne.sibling=Ue,Ne=Ue);return e&&le.forEach(function(tE){return n(tt,tE)}),Te&&ga(tt,de),Kt}function Se(tt,W,rt,Et){if(typeof rt=="object"&&rt!==null&&rt.type===U&&rt.key===null&&rt.props.ref===void 0&&(rt=rt.props.children),typeof rt=="object"&&rt!==null){switch(rt.$$typeof){case N:t:{for(var Kt=rt.key;W!==null;){if(W.key===Kt){if(Kt=rt.type,Kt===U){if(W.tag===7){a(tt,W.sibling),Et=c(W,rt.props.children),ka(Et,rt),Et.return=tt,tt=Et;break t}}else if(W.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===xt&&Ns(Kt)===W.type){a(tt,W.sibling),Et=c(W,rt.props),ka(Et,rt),Et.return=tt,tt=Et;break t}a(tt,W);break}else n(tt,W);W=W.sibling}rt.type===U?(Et=Ts(rt.props.children,tt.mode,Et,rt.key),ka(Et,rt),Et.return=tt,tt=Et):(Et=cu(rt.type,rt.key,rt.props,null,tt.mode,Et),ka(Et,rt),Et.return=tt,tt=Et)}return y(tt);case E:t:{for(Kt=rt.key;W!==null;){if(W.key===Kt)if(W.tag===4&&W.stateNode.containerInfo===rt.containerInfo&&W.stateNode.implementation===rt.implementation){a(tt,W.sibling),Et=c(W,rt.children||[]),Et.return=tt,tt=Et;break t}else{a(tt,W);break}else n(tt,W);W=W.sibling}Et=If(rt,tt.mode,Et),Et.return=tt,tt=Et}return y(tt);case xt:return rt=Ns(rt),Se(tt,W,rt,Et)}if(wt(rt))return Xt(tt,W,rt,Et);if(J(rt)){if(Kt=J(rt),typeof Kt!="function")throw Error(s(150));return rt=Kt.call(rt),ie(tt,W,rt,Et)}if(typeof rt.then=="function")return Se(tt,W,yu(rt),Et);if(rt.$$typeof===Q)return Se(tt,W,gu(tt,rt),Et);Su(tt,rt)}return typeof rt=="string"&&rt!==""||typeof rt=="number"||typeof rt=="bigint"?(rt=""+rt,W!==null&&W.tag===6?(a(tt,W.sibling),Et=c(W,rt),Et.return=tt,tt=Et):(a(tt,W),Et=zf(rt,tt.mode,Et),Et.return=tt,tt=Et),y(tt)):a(tt,W)}return function(tt,W,rt,Et){try{ko=0;var Kt=Se(tt,W,rt,Et);return Sr=null,Kt}catch(le){if(le===yr||le===_u)throw le;var Ne=ti(29,le,null,tt.mode);return Ne.lanes=Et,Ne.return=tt,Ne}finally{}}}var Ls=k0(!0),X0=k0(!1),Xa=!1;function Wf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function jf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function qa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Fe&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=uu(e),R0(e,null,a),n}return lu(e,r,n,a),uu(e)}function Xo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,it(e,a)}}function Zf(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Qf=!1;function qo(){if(Qf){var e=xr;if(e!==null)throw e}}function Yo(e,n,a,r){Qf=!1;var c=e.updateQueue;Xa=!1;var f=c.firstBaseUpdate,y=c.lastBaseUpdate,C=c.shared.pending;if(C!==null){c.shared.pending=null;var k=C,et=k.next;k.next=null,y===null?f=et:y.next=et,y=k;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,C=ut.lastBaseUpdate,C!==y&&(C===null?ut.firstBaseUpdate=et:C.next=et,ut.lastBaseUpdate=k))}if(f!==null){var bt=c.baseState;y=0,ut=et=k=null,C=f;do{var K=C.lane&-536870913,ot=K!==C.lane;if(ot?(De&K)===K:(r&K)===K){K!==0&&K===ws&&(Qf=!0),ut!==null&&(ut=ut.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var Xt=e,ie=C;K=n;var Se=a;switch(ie.tag){case 1:if(Xt=ie.payload,typeof Xt=="function"){bt=Xt.call(Se,bt,K);break t}bt=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=ie.payload,K=typeof Xt=="function"?Xt.call(Se,bt,K):Xt,K==null)break t;bt=P({},bt,K);break t;case 2:Xa=!0}}K=C.callback,K!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[K]:ot.push(K))}else ot={lane:K,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ut===null?(et=ut=ot,k=bt):ut=ut.next=ot,y|=K;if(C=C.next,C===null){if(C=c.shared.pending,C===null)break;ot=C,C=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ut===null&&(k=bt),c.baseState=k,c.firstBaseUpdate=et,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),$a|=y,e.lanes=y,e.memoizedState=bt}}function q0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function Y0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)q0(a[e],n)}var Wa=ht(null),Mu=ht(0);function W0(e,n){e=Ea,Ct(Mu,e),Ct(Wa,n),Ea=e|n.baseLanes}function Kf(){Ct(Mu,Ea),Ct(Wa,Wa.current)}function Jf(){Ea=Mu.current,vt(Wa),vt(Mu)}var Ln=ht(null),Hn=null;function ja(e){var n=e.alternate;Ct(On,On.current&1),Ct(Ln,e),Hn===null&&(n===null||Wa.current!==null||n.memoizedState!==null)&&(Hn=e)}function $f(e){Ct(On,On.current),Ct(Ln,e),Hn===null&&(Hn=e)}function j0(e){e.tag===22?(Ct(On,On.current),Ct(Ln,e),Hn===null&&(Hn=e)):Za()}function Za(){Ct(On,On.current),Ct(Ln,Ln.current)}function ui(e){vt(Ln),Hn===e&&(Hn=null),vt(On)}var On=ht(0);function Wo(e,n){Ct(Ln,Ln.current),Ct(On,n)}function th(e){vt(On),vt(Ln),Hn===e&&(Hn=null)}function Eu(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Md(a)||Ed(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var xa=0,ye=null,je=null,gn=null,Tu=!1,Mr=!1,Os=!1,bu=0,jo=0,Er=null,SM=0;function ln(){throw Error(s(321))}function eh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!li(e[a],n[a]))return!1;return!0}function nh(e,n,a,r,c,f){return xa=f,ye=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,At.H=e===null||e.memoizedState===null?Ng:Ug,Os=!1,f=a(r,c),Os=!1,Mr&&(f=Q0(n,a,r,c)),Z0(e),f}function Z0(e){At.H=Uu;var n=je!==null&&je.next!==null;if(xa=0,gn=je=ye=null,Tu=!1,jo=0,Er=null,n)throw Error(s(300));e===null||vn||(e=e.dependencies,e!==null&&mu(e)&&(vn=!0))}function Q0(e,n,a,r){ye=e;var c=0;do{if(Mr&&(Er=null),jo=0,Mr=!1,25<=c)throw Error(s(301));if(c+=1,gn=je=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}At.H=wM,f=n(a,r)}while(Mr);return f}function MM(){var e=At.H,n=e.useState()[0];return n=typeof n.then=="function"?Zo(n):n,e=e.useState()[0],(je!==null?je.memoizedState:null)!==e&&(ye.flags|=1024),n}function ih(){var e=bu!==0;return bu=0,e}function ah(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function sh(e){if(Tu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Tu=!1}xa=0,gn=je=ye=null,Mr=!1,jo=bu=0,Er=null}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?ye.memoizedState=gn=e:gn=gn.next=e,gn}function hn(){if(je===null){var e=ye.alternate;e=e!==null?e.memoizedState:null}else e=je.next;var n=gn===null?ye.memoizedState:gn.next;if(n!==null)gn=n,je=e;else{if(e===null)throw ye.alternate===null?Error(s(467)):Error(s(310));je=e,e={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},gn===null?ye.memoizedState=gn=e:gn=gn.next=e}return gn}function Au(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zo(e){var n=jo;return jo+=1,Er===null&&(Er=[]),e=H0(Er,e,n),n=ye,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,At.H=n===null||n.memoizedState===null?Ng:Ug),e}function Ru(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Zo(e);if(e.$$typeof===gt)return;if(e.$$typeof===Q)return Un(e)}throw Error(s(438,String(e)))}function rh(e){var n=null,a=ye.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ye.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Au(),ye.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=se;return n.index++,a}function ya(e,n){return typeof n=="function"?n(e):n}function Cu(e){var n=hn();return oh(n,je,e)}function oh(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,f=r.pending;if(f!==null){if(c!==null){var y=c.next;c.next=f.next,f.next=y}n.baseQueue=c=f,r.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var C=y=null,k=null,et=n,ut=!1;do{var bt=et.lane&-536870913;if(bt!==et.lane?(De&bt)===bt:(xa&bt)===bt){var K=et.revertLane;if(K===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null}),bt===ws&&(ut=!0);else if((xa&K)===K){et=et.next,K===ws&&(ut=!0);continue}else bt={lane:0,revertLane:et.revertLane,gesture:null,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},k===null?(C=k=bt,y=f):k=k.next=bt,ye.lanes|=K,$a|=K;bt=et.action,Os&&a(f,bt),f=et.hasEagerState?et.eagerState:a(f,bt)}else K={lane:bt,revertLane:et.revertLane,gesture:et.gesture,action:et.action,hasEagerState:et.hasEagerState,eagerState:et.eagerState,next:null},k===null?(C=k=K,y=f):k=k.next=K,ye.lanes|=bt,$a|=bt;et=et.next}while(et!==null&&et!==n);if(k===null?y=f:k.next=C,!li(f,e.memoizedState)&&(vn=!0,ut&&(a=xr,a!==null)))throw a;e.memoizedState=f,e.baseState=y,e.baseQueue=k,r.lastRenderedState=f}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function lh(e){var n=hn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var y=c=c.next;do f=e(f,y.action),y=y.next;while(y!==c);li(f,n.memoizedState)||(vn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function K0(e,n,a){var r=ye,c=hn(),f=Te;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!li((je||c).memoizedState,a);if(y&&(c.memoizedState=a,vn=!0),c=c.queue,fh(tg.bind(null,r,c,e),[e]),e=c.getSnapshot!==n||y||gn!==null&&(gn.memoizedState.tag&1)!==0,Tr(e?9:8,{destroy:void 0},$0.bind(null,r,c,a,n),null),e){if(r.flags|=2048,Qe===null)throw Error(s(349));f||(xa&127)!==0||J0(r,n,a)}return a}function J0(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ye.updateQueue,n===null?(n=Au(),ye.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function $0(e,n,a,r){n.value=a,n.getSnapshot=r,eg(n)&&ng(e)}function tg(e,n,a){return a(function(){eg(n)&&ng(e)})}function eg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!li(e,a)}catch{return!0}}function ng(e){var n=Es(e,2);n!==null&&ai(n,e,2)}function uh(e){var n=Wn();if(typeof e=="function"){var a=e;if(e=a(),Os){Sn(!0);try{a()}finally{Sn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:e},n}function ig(e,n,a,r){return e.baseState=a,oh(e,je,typeof r=="function"?r:ya)}function EM(e,n,a,r,c){if(Nu(e))throw Error(s(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};At.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,ag(n,f)):(f.next=a.next,n.pending=a.next=f)}}function ag(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var f=At.T,y={};y.types=f!==null?f.types:null,At.T=y;try{var C=a(c,r),k=At.S;k!==null&&k(y,C),sg(e,n,C)}catch(et){ch(e,n,et)}finally{f!==null&&y.types!==null&&(f.types=y.types),At.T=f}}else try{f=a(c,r),sg(e,n,f)}catch(et){ch(e,n,et)}}function sg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){rg(e,n,r)},function(r){return ch(e,n,r)}):rg(e,n,a)}function rg(e,n,a){n.status="fulfilled",n.value=a,og(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,ag(e,a)))}function ch(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,og(n),n=n.next;while(n!==r)}e.action=null}function og(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function lg(e,n){return n}function ug(e,n){if(Te){var a=Qe.formState;if(a!==null){t:{var r=ye;if(Te){if(Je){e:{for(var c=Je,f=bi;c.nodeType!==8;){if(!f){c=null;break e}if(c=Ri(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){Je=Ri(c.nextSibling),r=c.data==="F!";break t}}Ga(r)}r=!1}r&&(n=a[0])}}return a=Wn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:lg,lastRenderedState:n},a.queue=r,a=Cg.bind(null,ye,r),r.dispatch=a,r=uh(!1),f=gh.bind(null,ye,!1,r.queue),r=Wn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=EM.bind(null,ye,c,f,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function cg(e){var n=hn();return fg(n,je,e)}function fg(e,n,a){if(n=oh(e,n,lg)[0],e=Cu(ya)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Zo(n)}catch(y){throw y===yr?_u:y}else r=n;n=hn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(ye.flags|=2048,Tr(9,{destroy:void 0},TM.bind(null,c,a),null)),[r,f,e]}function TM(e,n){e.action=n}function hg(e){var n=hn(),a=je;if(a!==null)return fg(n,a,e);hn(),n=n.memoizedState,a=hn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Tr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=ye.updateQueue,n===null&&(n=Au(),ye.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function dg(){return hn().memoizedState}function wu(e,n,a,r){var c=Wn();ye.flags|=e,c.memoizedState=Tr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Du(e,n,a,r){var c=hn();r=r===void 0?null:r;var f=c.memoizedState.inst;je!==null&&r!==null&&eh(r,je.memoizedState.deps)?c.memoizedState=Tr(n,f,a,r):(ye.flags|=e,c.memoizedState=Tr(1|n,f,a,r))}function pg(e,n){wu(8390656,8,e,n)}function fh(e,n){Du(2048,8,e,n)}function bM(e){ye.flags|=4;var n=ye.updateQueue;if(n===null)n=Au(),ye.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function mg(e){var n=hn().memoizedState;return bM({ref:n,nextImpl:e}),function(){if((Fe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function gg(e,n){return Du(4,2,e,n)}function vg(e,n){return Du(4,4,e,n)}function _g(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function xg(e,n,a){a=a!=null?a.concat([e]):null,Du(4,4,_g.bind(null,n,e),a)}function hh(){}function yg(e,n){var a=hn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&eh(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function Sg(e,n){var a=hn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&eh(n,r[1]))return r[0];if(r=e(),Os){Sn(!0);try{e()}finally{Sn(!1)}}return a.memoizedState=[r,n],r}function dh(e,n,a){return a===void 0||(xa&1073741824)!==0&&(De&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Nv(),ye.lanes|=e,$a|=e,a)}function Mg(e,n,a,r){return li(a,n)?a:Wa.current!==null?(e=dh(e,a,r),li(e,n)||(vn=!0),e):(xa&106)===0||(xa&1073741824)!==0&&(De&261930)===0?(vn=!0,e.memoizedState=a):(e=Nv(),ye.lanes|=e,$a|=e,n)}function Eg(e,n,a,r,c){var f=Lt.p;Lt.p=f!==0&&8>f?f:8;var y=At.T,C={};C.types=y!==null?y.types:null,At.T=C,gh(e,!1,n,a);try{var k=c(),et=At.S;if(et!==null&&et(C,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var ut=yM(k,r);Qo(e,n,ut,di(e))}else Qo(e,n,r,di(e))}catch(bt){Qo(e,n,{then:function(){},status:"rejected",reason:bt},di())}finally{Lt.p=f,y!==null&&C.types!==null&&(y.types=C.types),At.T=y}}function AM(){}function ph(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=Tg(e).queue;Eg(e,c,n,B,a===null?AM:function(){return bg(e),a(r)})}function Tg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:B,baseState:B,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:B},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function bg(e){var n=Tg(e);n.next===null&&(n=e.alternate.memoizedState),Qo(e,n.next.queue,{},di())}function mh(){return Un(kr)}function Ag(){return hn().memoizedState}function Rg(){return hn().memoizedState}function RM(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=di();e=qa(a);var r=Ya(n,e,a);r!==null&&(ai(r,n,a),Xo(r,n,a)),n={cache:kf()},e.payload=n;return}n=n.return}}function CM(e,n,a){var r=di();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Nu(e)?wg(n,a):(a=Of(e,n,a,r),a!==null&&(ai(a,e,r),Dg(a,n,r)))}function Cg(e,n,a){var r=di();Qo(e,n,a,r)}function Qo(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Nu(e))wg(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,C=f(y,a);if(c.hasEagerState=!0,c.eagerState=C,li(C,y))return lu(e,n,c,0),Qe===null&&ou(),!1}catch{}finally{}if(a=Of(e,n,c,r),a!==null)return ai(a,e,r),Dg(a,n,r),!0}return!1}function gh(e,n,a,r){if(r={lane:2,revertLane:rd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Nu(e)){if(n)throw Error(s(479))}else n=Of(e,a,r,2),n!==null&&ai(n,e,2)}function Nu(e){var n=e.alternate;return e===ye||n!==null&&n===ye}function wg(e,n){Mr=Tu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Dg(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,it(e,a)}}var Uu={readContext:Un,use:Ru,useCallback:ln,useContext:ln,useEffect:ln,useImperativeHandle:ln,useLayoutEffect:ln,useInsertionEffect:ln,useMemo:ln,useReducer:ln,useRef:ln,useState:ln,useDebugValue:ln,useDeferredValue:ln,useTransition:ln,useSyncExternalStore:ln,useId:ln,useHostTransitionStatus:ln,useFormState:ln,useActionState:ln,useOptimistic:ln,useMemoCache:ln,useCacheRefresh:ln,useEffectEvent:ln},Ng={readContext:Un,use:Ru,useCallback:function(e,n){return Wn().memoizedState=[e,n===void 0?null:n],e},useContext:Un,useEffect:pg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,wu(4194308,4,_g.bind(null,n,e),a)},useLayoutEffect:function(e,n){return wu(4194308,4,e,n)},useInsertionEffect:function(e,n){wu(4,2,e,n)},useMemo:function(e,n){var a=Wn();n=n===void 0?null:n;var r=e();if(Os){Sn(!0);try{e()}finally{Sn(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Wn();if(a!==void 0){var c=a(n);if(Os){Sn(!0);try{a(n)}finally{Sn(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=CM.bind(null,ye,e),[r.memoizedState,e]},useRef:function(e){var n=Wn();return e={current:e},n.memoizedState=e},useState:function(e){e=uh(e);var n=e.queue,a=Cg.bind(null,ye,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:hh,useDeferredValue:function(e,n){var a=Wn();return dh(a,e,n)},useTransition:function(){var e=uh(!1);return e=Eg.bind(null,ye,e.queue,!0,!1),Wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=ye,c=Wn();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Qe===null)throw Error(s(349));(De&127)!==0||J0(r,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,pg(tg.bind(null,r,f,e),[e]),r.flags|=2048,Tr(9,{destroy:void 0},$0.bind(null,r,f,a,n),null),a},useId:function(){var e=Wn(),n=Qe.identifierPrefix;if(Te){var a=Zi,r=ji;a=(r&~(1<<32-Bn(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=bu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=SM++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:mh,useFormState:ug,useActionState:ug,useOptimistic:function(e){var n=Wn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=gh.bind(null,ye,!0,a),a.dispatch=n,[e,n]},useMemoCache:rh,useCacheRefresh:function(){return Wn().memoizedState=RM.bind(null,ye)},useEffectEvent:function(e){var n=Wn(),a={impl:e};return n.memoizedState=a,function(){if((Fe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Ug={readContext:Un,use:Ru,useCallback:yg,useContext:Un,useEffect:fh,useImperativeHandle:xg,useInsertionEffect:gg,useLayoutEffect:vg,useMemo:Sg,useReducer:Cu,useRef:dg,useState:function(){return Cu(ya)},useDebugValue:hh,useDeferredValue:function(e,n){var a=hn();return Mg(a,je.memoizedState,e,n)},useTransition:function(){var e=Cu(ya)[0],n=hn().memoizedState;return[typeof e=="boolean"?e:Zo(e),n]},useSyncExternalStore:K0,useId:Ag,useHostTransitionStatus:mh,useFormState:cg,useActionState:cg,useOptimistic:function(e,n){var a=hn();return ig(a,je,e,n)},useMemoCache:rh,useCacheRefresh:Rg,useEffectEvent:mg},wM={readContext:Un,use:Ru,useCallback:yg,useContext:Un,useEffect:fh,useImperativeHandle:xg,useInsertionEffect:gg,useLayoutEffect:vg,useMemo:Sg,useReducer:lh,useRef:dg,useState:function(){return lh(ya)},useDebugValue:hh,useDeferredValue:function(e,n){var a=hn();return je===null?dh(a,e,n):Mg(a,je.memoizedState,e,n)},useTransition:function(){var e=lh(ya)[0],n=hn().memoizedState;return[typeof e=="boolean"?e:Zo(e),n]},useSyncExternalStore:K0,useId:Ag,useHostTransitionStatus:mh,useFormState:hg,useActionState:hg,useOptimistic:function(e,n){var a=hn();return je!==null?ig(a,je,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:rh,useCacheRefresh:Rg,useEffectEvent:mg};function vh(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var _h={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=di(),c=qa(r);c.payload=n,a!=null&&(c.callback=a),n=Ya(e,c,r),n!==null&&(ai(n,e,r),Xo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=di(),c=qa(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ya(e,c,r),n!==null&&(ai(n,e,r),Xo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=di(),r=qa(a);r.tag=2,n!=null&&(r.callback=n),n=Ya(e,r,a),n!==null&&(ai(n,e,a),Xo(n,e,a))}};function Lg(e,n,a,r,c,f,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,f,y):n.prototype&&n.prototype.isPureReactComponent?!zo(a,r)||!zo(c,f):!0}function Og(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&_h.enqueueReplaceState(n,n.state,null)}function Ps(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=P({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Pg(e){ru(e)}function zg(e){console.error(e)}function Ig(e){ru(e)}function Lu(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Bg(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function xh(e,n,a){return a=qa(a),a.tag=3,a.payload={element:null},a.callback=function(){Lu(e,n)},a}function Fg(e){return e=qa(e),e.tag=3,e}function Hg(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;e.payload=function(){return c(f)},e.callback=function(){Bg(n,a,r)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){Bg(n,a,r),typeof c!="function"&&(ts===null?ts=new Set([this]):ts.add(this));var C=r.stack;this.componentDidCatch(r.value,{componentStack:C!==null?C:""})})}function DM(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Rs(n,a,c,!0),a=Ln.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Hn===null?tc():a.alternate===null&&un===0&&(un=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===xu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),id(e,r,c)),!1;case 22:return a.flags|=65536,r===xu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),id(e,r,c)),!1}throw Error(s(435,a.tag))}return id(e,r,c),tc(),!1}if(Te)return n=Ln.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==Ff&&(e=Error(s(422),{cause:r}),Fo(Mi(e,a)))):(r!==Ff&&(n=Error(s(423),{cause:r}),Fo(Mi(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=Mi(r,a),c=xh(e.stateNode,r,c),Zf(e,c),un!==4&&(un=2)),!1;var f=Error(s(520),{cause:r});if(f=Mi(f,a),al===null?al=[f]:al.push(f),un!==4&&(un=2),n===null)return!0;r=Mi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=xh(a.stateNode,r,e),Zf(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ts===null||!ts.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Fg(c),Hg(c,e,a,r),Zf(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var yh=Error(s(461)),vn=!1;function En(e,n,a,r){n.child=e===null?X0(n,null,a,r):Ls(n,e.child,a,r)}function Gg(e,n,a,r,c){a=a.render;var f=n.ref;if("ref"in r){var y={};for(var C in r)C!=="ref"&&(y[C]=r[C])}else y=r;return Cs(n),r=nh(e,n,a,y,f,c),C=ih(),e!==null&&!vn?(ah(e,n,c),Sa(e,n,c)):(Te&&C&&hu(n),n.flags|=1,En(e,n,r,c),n.child)}function Vg(e,n,a,r,c){if(e===null){var f=a.type;return typeof f=="function"&&!Pf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,kg(e,n,f,r,c)):(e=cu(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ch(e,c)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:zo,a(y,r)&&e.ref===n.ref)return Sa(e,n,c)}return n.flags|=1,e=ma(f,r),e.ref=n.ref,e.return=n,n.child=e}function kg(e,n,a,r,c){if(e!==null){var f=e.memoizedProps;if(zo(f,r)&&e.ref===n.ref)if(vn=!1,n.pendingProps=r=f,Ch(e,c))(e.flags&131072)!==0&&(vn=!0);else return n.lanes=e.lanes,Sa(e,n,c)}return Sh(e,n,a,r,c)}function Xg(e,n,a,r){var c=r.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~f}else r=0,n.child=null;return qg(e,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&vu(n,f!==null?f.cachePool:null),f!==null?W0(n,f):Kf(),j0(n);else return r=n.lanes=536870912,qg(e,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(vu(n,f.cachePool),W0(n,f),Za(),n.memoizedState=null):(e!==null&&vu(n,null),Kf(),Za());return En(e,n,c,a),n.child}function Ko(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function qg(e,n,a,r,c){var f=qf();return f=f===null?null:{parent:mn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&vu(n,null),Kf(),j0(n),e!==null&&Rs(e,n,r,!0),n.childLanes=c,null}function Ou(e,n){return n=Pu({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Yg(e,n,a){return Ls(n,e.child,null,a),e=Ou(n,n.pendingProps),e.flags|=2,ui(n),n.memoizedState=null,e}function NM(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(r.mode==="hidden")return e=Ou(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Ko(null,e);if($f(n),(e=Je)?(e=__(e,bi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:ji,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=w0(e),a.return=n,n.child=a,Cn=n,Je=null)):e=null,e===null)throw Ga(n);return n.lanes=536870912,null}return Ou(n,r)}var f=e.memoizedState;if(f!==null){var y=f.dehydrated;if($f(n),c)if(n.flags&256)n.flags&=-257,n=Yg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(vn||Rs(e,n,a,!1),c=(a&e.childLanes)!==0,vn||c){if(Wa.current===null){if(r=Qe,r!==null&&(y=dt(r,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,Es(e,y),ai(r,e,y),yh;tc()}n=Yg(e,n,a)}else e=f.treeContext,Je=Ri(y.nextSibling),Cn=n,Te=!0,Ha=null,bi=!1,e!==null&&U0(n,e),n=Ou(n,r),n.flags|=134221824;return n}return e=ma(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function br(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Sh(e,n,a,r,c){return Cs(n),a=nh(e,n,a,r,void 0,c),r=ih(),e!==null&&!vn?(ah(e,n,c),Sa(e,n,c)):(Te&&r&&hu(n),n.flags|=1,En(e,n,a,c),n.child)}function Wg(e,n,a,r,c,f){return Cs(n),n.updateQueue=null,a=Q0(n,r,a,c),Z0(e),r=ih(),e!==null&&!vn?(ah(e,n,f),Sa(e,n,f)):(Te&&r&&hu(n),n.flags|=1,En(e,n,a,f),n.child)}function jg(e,n,a,r,c){if(Cs(n),n.stateNode===null){var f=mr,y=a.contextType;typeof y=="object"&&y!==null&&(f=Un(y)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=_h,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Wf(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Un(y):mr,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(vh(n,a,y,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&_h.enqueueReplaceState(f,f.state,null),Yo(n,r,f,c),qo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){f=n.stateNode;var C=n.memoizedProps,k=Ps(a,C);f.props=k;var et=f.context,ut=a.contextType;y=mr,typeof ut=="object"&&ut!==null&&(y=Un(ut));var bt=a.getDerivedStateFromProps;ut=typeof bt=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||et!==y)&&Og(n,f,r,y),Xa=!1;var K=n.memoizedState;f.state=K,Yo(n,r,f,c),qo(),et=n.memoizedState,C||K!==et||Xa?(typeof bt=="function"&&(vh(n,a,bt,r),et=n.memoizedState),(k=Xa||Lg(n,a,k,r,K,et,y))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=et),f.props=r,f.state=et,f.context=y,r=k):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,jf(e,n),y=n.memoizedProps,ut=Ps(a,y),f.props=ut,bt=n.pendingProps,K=f.context,et=a.contextType,k=mr,typeof et=="object"&&et!==null&&(k=Un(et)),C=a.getDerivedStateFromProps,(et=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==bt||K!==k)&&Og(n,f,r,k),Xa=!1,K=n.memoizedState,f.state=K,Yo(n,r,f,c),qo();var ot=n.memoizedState;y!==bt||K!==ot||Xa||e!==null&&e.dependencies!==null&&mu(e.dependencies)?(typeof C=="function"&&(vh(n,a,C,r),ot=n.memoizedState),(ut=Xa||Lg(n,a,ut,r,K,ot,k)||e!==null&&e.dependencies!==null&&mu(e.dependencies))?(et||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,ot,k),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,ot,k)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&K===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&K===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=ot),f.props=r,f.state=ot,f.context=k,r=ut):(typeof f.componentDidUpdate!="function"||y===e.memoizedProps&&K===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&K===e.memoizedState||(n.flags|=1024),r=!1)}return f=r,br(e,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&r?(n.child=Ls(n,e.child,null,c),n.child=Ls(n,null,a,c)):En(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Sa(e,n,c),e}function Zg(e,n,a,r){return bs(),n.flags|=256,En(e,n,a,r),n.child}var Mh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Eh(e){return{baseLanes:e,cachePool:B0()}}function Th(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=hi),e}function Qg(e,n,a){var r=n.pendingProps,c=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=e!==null&&e.memoizedState===null?!1:(On.current&2)!==0),y&&(c=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(c?ja(n):Za(),(e=Je)?(e=__(e,bi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Fa!==null?{id:ji,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=w0(e),a.return=n,n.child=a,Cn=n,Je=null)):e=null,e===null)throw Ga(n);return Ed(e)?n.lanes=32:n.lanes=536870912,null}return f=r.children,r=r.fallback,c?(Za(),c=n.mode,f=Pu({mode:"hidden",children:f},c),r=Ts(r,c,a,null),f.return=n,r.return=n,f.sibling=r,n.child=f,r=n.child,r.memoizedState=Eh(a),r.childLanes=Th(e,y,a),n.memoizedState=Mh,Ko(null,r)):(ja(n),bh(n,f))}var C=e.memoizedState;if(C!==null){var k=C.dehydrated;if(k!==null)return UM(e,n,f,y,r,k,C,a)}return c?(Za(),c=r.fallback,f=n.mode,C=e.child,k=C.sibling,r=ma(C,{mode:"hidden",children:r.children}),r.subtreeFlags=C.subtreeFlags&1206910976,k!==null?c=ma(k,c):(c=Ts(c,f,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,Ko(null,r),r=n.child,c=e.child.memoizedState,c===null?c=Eh(a):(f=c.cachePool,f!==null?(C=mn._currentValue,f=f.parent!==C?{parent:C,pool:C}:f):f=B0(),c={baseLanes:c.baseLanes|a,cachePool:f}),r.memoizedState=c,r.childLanes=Th(e,y,a),n.memoizedState=Mh,Ko(e.child,r)):(ja(n),a=e.child,e=a.sibling,a=ma(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(y=n.deletions,y===null?(n.deletions=[e],n.flags|=16):y.push(e)),n.child=a,n.memoizedState=null,a)}function bh(e,n){return n=Pu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Pu(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function zu(e,n,a){return Ls(n,e.child,null,a),e=bh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function UM(e,n,a,r,c,f,y,C){if(a)return n.flags&256?(ja(n),n.flags&=-257,zu(e,n,C)):n.memoizedState!==null?(Za(),n.child=e.child,n.flags|=128,null):(Za(),f=c.fallback,y=n.mode,c=Pu({mode:"visible",children:c.children},y),f=Ts(f,y,C,null),f.flags|=2,c.return=n,f.return=n,c.sibling=f,n.child=c,Ls(n,e.child,null,C),c=n.child,c.memoizedState=Eh(C),c.childLanes=Th(e,r,C),n.memoizedState=Mh,Ko(null,c));if(ja(n),Ed(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var k=r.dgst;return r=k,r!==""&&(c=Error(s(419)),c.stack="",c.digest=r,Fo({value:c,source:null,stack:null})),zu(e,n,C)}if(vn||Rs(e,n,C,!1),r=(C&e.childLanes)!==0,vn||r){if(Wa.current!==null)return zu(e,n,C);if(r=Qe,r!==null&&(c=dt(r,C),c!==0&&c!==y.retryLane))throw y.retryLane=c,Es(e,c),ai(r,e,c),yh;return Md(f)||tc(),zu(e,n,C)}return Md(f)?(n.flags|=192,n.child=e.child,null):(e=y.treeContext,Je=Ri(f.nextSibling),Cn=n,Te=!0,Ha=null,bi=!1,e!==null&&U0(n,e),n=bh(n,c.children),n.flags|=134221824,n)}function Kg(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),pu(e.return,n,a)}function Jg(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&Eu(a)===null&&(n=e),e=e.sibling}return n}function Iu(e,n,a,r,c,f){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=r,y.tail=a,y.tailMode=c,y.treeForkCount=f)}function Ah(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function Rh(e,n,a){var r=n.pendingProps,c=r.revealOrder,f=r.tail;r=r.children;var y=On.current;if(n.flags&128)return Wo(n,y),null;var C=(y&2)!==0;if(C?(y=y&1|2,n.flags|=128):y&=1,Wo(n,y),c==="backwards"&&e!==null?(Ah(e),En(e,n,r,a),Ah(e)):En(e,n,r,a),r=Te?Bo:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Kg(e,a,n);else if(e.tag===19)Kg(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"backwards":a=Jg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,Ah(n)),Iu(n,!0,c,null,f,r);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Eu(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Iu(n,!0,a,null,f,r);break;case"together":Iu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=Jg(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Iu(n,!1,c,a,f,r)}return n.child}function $g(e,n,a){var r=n.pendingProps;return Va(n,n.type,r.value),En(e,n,r.children,a),n.child}function Sa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),$a|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Rs(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ma(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ma(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ch(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&mu(e)))}function LM(e,n,a){switch(n.tag){case 3:O(n,n.stateNode.containerInfo),Va(n,mn,e.memoizedState.cache),bs();break;case 27:case 5:st(n);break;case 4:O(n,n.stateNode.containerInfo);break;case 10:Va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,$f(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return ja(n),n.flags|=128,null;r=Rs(e,n,a,!1);var c=n.child.childLanes;return r||(a&c)!==0?Qg(e,n,a):(ja(n),e=Sa(e,n,a),e!==null?e.sibling:null)}ja(n);break;case 19:if(n.flags&128)return Rh(e,n,a);if(c=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Rs(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Rh(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Wo(n,On.current),r)break;return null;case 22:return n.lanes=0,Xg(e,n,a,n.pendingProps);case 24:Va(n,mn,e.memoizedState.cache)}return Sa(e,n,a)}function tv(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)vn=!0;else{if(!Ch(e,a)&&(n.flags&128)===0)return vn=!1,LM(e,n,a);vn=(e.flags&131072)!==0}else vn=!1,Te&&(n.flags&1048576)!==0&&N0(n,Bo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=Ns(n.elementType),n.type=e,typeof e=="function")Pf(e)?(r=Ps(e,r),n.tag=1,n=jg(null,n,e,r,a)):(n.tag=0,n=Sh(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===F){n.tag=11,n=Gg(null,n,e,r,a);break t}else if(c===lt){n.tag=14,n=Vg(null,n,e,r,a);break t}else if(c===Q){n.tag=10,n.type=e,n=$g(null,n,a);break t}}throw n=Rt(e)||e,Error(s(306,n,""))}}return n;case 0:return Sh(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=Ps(r,n.pendingProps),jg(e,n,r,c,a);case 3:t:{if(O(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;c=f.element,jf(e,n),Yo(n,r,null,a);var y=n.memoizedState;if(r=y.cache,Va(n,mn,r),r!==f.cache&&Vf(n,[mn],a,!0),qo(),r=y.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Zg(e,n,r,a);break t}else if(r!==c){c=Mi(Error(s(424)),n),Fo(c),n=Zg(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=Ri(e.firstChild),Cn=n,Te=!0,Ha=null,bi=!0,a=X0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(bs(),r===c){n=Sa(e,n,a);break t}En(e,n,r,a)}n=n.child}return n;case 26:return br(e,n),e===null?(a=b_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(n.stateNode=a_(n.type,n.pendingProps,oe.current,n)):n.memoizedState=b_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return st(n),e===null&&Te&&(r=n.stateNode=S_(n.type,n.pendingProps,oe.current),Cn=n,bi=!0,c=Je,is(n.type)?(Td=c,Je=Ri(r.firstChild)):Je=c),En(e,n,n.pendingProps.children,a),br(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((c=r=Je)&&(r=R1(r,n.type,n.pendingProps,bi),r!==null?(n.stateNode=r,Cn=n,Je=Ri(r.firstChild),bi=!1,c=!0):c=!1),c||Ga(n)),st(n),c=n.type,f=n.pendingProps,y=e!==null?e.memoizedProps:null,r=f.children,md(c,f)?r=null:y!==null&&md(c,y)&&(n.flags|=32),n.memoizedState!==null&&(c=nh(e,n,MM,null,null,a),kr._currentValue=c),br(e,n),En(e,n,r,a),n.child;case 6:return e===null&&Te&&((e=a=Je)&&(a=C1(a,n.pendingProps,bi),a!==null?(n.stateNode=a,Cn=n,Je=null,e=!0):e=!1),e||Ga(n)),null;case 13:return Qg(e,n,a);case 4:return O(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Ls(n,null,r,a):En(e,n,r,a),n.child;case 11:return Gg(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,br(e,n),En(e,n,r,a),n.child;case 8:return En(e,n,n.pendingProps.children,a),n.child;case 12:return En(e,n,n.pendingProps.children,a),n.child;case 10:return $g(e,n,a);case 9:return c=n.type._context,r=n.pendingProps.children,Cs(n),c=Un(c),r=r(c),n.flags|=1,En(e,n,r,a),n.child;case 14:return Vg(e,n,n.type,n.pendingProps,a);case 15:return kg(e,n,n.type,n.pendingProps,a);case 19:return Rh(e,n,a);case 31:return NM(e,n,a);case 22:return Xg(e,n,a,n.pendingProps);case 24:return Cs(n),r=Un(mn),e===null?(c=qf(),c===null&&(c=Qe,f=kf(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:r,cache:c},Wf(n),Va(n,mn,c)):((e.lanes&a)!==0&&(jf(e,n),Yo(n,null,null,a),qo()),c=e.memoizedState,f=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Va(n,mn,r)):(r=f.cache,Va(n,mn,r),r!==c.cache&&Vf(n,[mn],a,!0))),En(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:Te&&hu(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:br(e,n),En(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ma(e){e.flags|=4}function wh(e,n,a,r,c){var f;if((f=(e.mode&32)!==0)&&(f=a===null?w_(n,r):w_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),f){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Pv())e.flags|=8192;else throw Us=xu,Yf}else e.flags&=-16777217}function ev(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!D_(n))if(Pv())e.flags|=8192;else throw Us=xu,Yf}function Bu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ql():536870912,e.lanes|=n,Dr|=n)}function Jo(e,n){if(!Te)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function $e(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&1206910976,r|=c.flags&1206910976,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function OM(e,n,a){var r=n.pendingProps;switch(Bf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return $e(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),_a(mn),R(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(_r(n)?Ma(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Hf())),$e(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Ma(n),f!==null?($e(n),ev(n,f)):($e(n),wh(n,c,null,r,a))):f?f!==e.memoizedState?(Ma(n),$e(n),ev(n,f)):($e(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Ma(n),$e(n),wh(n,c,e,r,a)),null;case 27:if(pt(n),a=oe.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),n.subtreeFlags&=-33554433,null}e=Nt.current,_r(n)?L0(n):(e=S_(c,r,a),n.stateNode=e,Ma(n))}return $e(n),n.subtreeFlags&=-33554433,null;case 5:if(pt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),n.subtreeFlags&=-33554433,null}if(f=Nt.current,_r(n))L0(n);else{var y=ul(oe.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?y.createElement("select",{is:r.is}):y.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?y.createElement(c,{is:r.is}):y.createElement(c)}}f[Gt]=n,f[ne]=r;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(zn(f,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Ma(n)}}return $e(n),n.subtreeFlags&=-33554433,wh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=oe.current,_r(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=Cn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[Gt]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||t_(e.nodeValue,a)),e||Ga(n,!0)}else e=ul(e).createTextNode(r),e[Gt]=n,n.stateNode=e}return $e(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=_r(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Gt]=n}else bs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),e=!1}else a=Hf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ui(n),n):(ui(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $e(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=_r(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Gt]=n}else bs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),c=!1}else c=Hf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ui(n),n):(ui(n),null)}return ui(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Bu(n,n.updateQueue),$e(n),null);case 4:return R(),e===null&&cd(n.stateNode.containerInfo),n.flags|=67108864,$e(n),null;case 10:return _a(n.type),$e(n),null;case 19:if(th(n),r=n.memoizedState,r===null)return $e(n),null;if(c=(n.flags&128)!==0,f=r.rendering,f===null)if(c)Jo(r,!1);else{if(un!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Eu(e),f!==null){for(n.flags|=128,Jo(r,!1),e=f.updateQueue,n.updateQueue=e,Bu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)C0(a,e),a=a.sibling;return Wo(n,On.current&1|2),Te&&ga(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&j()>Qu&&(n.flags|=128,c=!0,Jo(r,!1),n.lanes=4194304)}else{if(!c)if(e=Eu(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Bu(n,e),Jo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!f.alternate&&!Te)return $e(n),null}else 2*j()-r.renderingStartTime>Qu&&a!==536870912&&(n.flags|=128,c=!0,Jo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(e=r.last,e!==null?e.sibling=f:n.child=f,r.last=f)}if(r.tail!==null){e=r.tail;t:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=j(),e.sibling=null,f=On.current,f=c?f&1|2:f&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Te?Wo(n,f):(a=f,Ct(Ln,n),Ct(On,a),Hn===null&&(Hn=n)),Te&&ga(n,r.treeForkCount),e}return $e(n),null;case 22:case 23:return ui(n),Jf(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),a=n.updateQueue,a!==null&&Bu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&vt(Ds),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),_a(mn),$e(n),null;case 25:return null;case 30:return n.flags|=33554432,$e(n),null}throw Error(s(156,n.tag))}function PM(e,n){switch(Bf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return _a(mn),R(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return pt(n),null;case 31:if(n.memoizedState!==null){if(ui(n),n.alternate===null)throw Error(s(340));bs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ui(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));bs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return th(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return R(),null;case 10:return _a(n.type),null;case 22:case 23:return ui(n),Jf(),e!==null&&vt(Ds),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return _a(mn),null;case 25:return null;default:return null}}function nv(e,n){switch(Bf(n),n.tag){case 3:_a(mn),R();break;case 26:case 27:case 5:pt(n);break;case 4:R();break;case 31:n.memoizedState!==null&&ui(n);break;case 13:ui(n);break;case 19:th(n);break;case 10:_a(n.type);break;case 22:case 23:ui(n),Jf(),e!==null&&vt(Ds);break;case 24:_a(mn)}}function $o(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var f=a.create,y=a.inst;r=f(),y.destroy=r}a=a.next}while(a!==c)}}catch(C){Xe(n,n.return,C)}}function Qa(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var f=c.next;r=f;do{if((r.tag&e)===e){var y=r.inst,C=y.destroy;if(C!==void 0){y.destroy=void 0,c=n;var k=a,et=C;try{et()}catch(ut){Xe(c,k,ut)}}}r=r.next}while(r!==f)}}catch(ut){Xe(n,n.return,ut)}}function iv(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Y0(n,a)}catch(r){Xe(e,e.return,r)}}}function av(e,n,a){a.props=Ps(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Xe(e,n,r)}}function Qi(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var c=e.stateNode,f=da(e.memoizedProps,c);(c.ref===null||c.ref.name!==f)&&(c.ref=f_(f)),r=c.ref;break;case 7:if(e.stateNode===null){var y=new pi(e);m(e.child,!1,b1,y,void 0,void 0),e.stateNode=y}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(C){Xe(e,n,C)}}function Pn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Xe(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Xe(e,n,c)}else a.current=null}function Fu(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)v_(e.stateNode,n[a])}function sv(e){for(var n=e.return;n!==null&&(Nh(n)&&v_(e.stateNode,n.stateNode),!Dh(n));)n=n.return}function tl(e){for(var n=e.return;n!==null&&(Nh(n)&&A1(e.stateNode,n.stateNode),!Dh(n));)n=n.return}function Dh(e){return e.tag===5||e.tag===3||e.tag===27}function Nh(e){return e&&e.tag===7&&e.stateNode!==null}function Uh(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Xe(e,e.return,c)}}function Lh(e,n,a){try{var r=e.stateNode;o1(r,e.type,a,n),r[ne]=n}catch(c){Xe(e,e.return,c)}}function rv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&is(e.type)||e.tag===4}function Oh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||rv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&is(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ph(e,n,a,r){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi)),Fu(e,r),ze=!0;else if(c!==4&&(c===27&&(Fu(e,r),r=null,is(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(Ph(e,n,a,r),e=e.sibling;e!==null;)Ph(e,n,a,r),e=e.sibling}function Hu(e,n,a,r){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Fu(e,r),ze=!0;else if(c!==4&&(c===27&&(Fu(e,r),r=null,is(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Hu(e,n,a,r),e=e.sibling;e!==null;)Hu(e,n,a,r),e=e.sibling}function ov(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);zn(n,r,a),n[Gt]=e,n[ne]=a}catch(f){Xe(e,e.return,f)}}var Gu=!1,ci=null;function lv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Gu=!0)}var Ki=null;function uv(){var e=Ki;return Ki=null,e}var ei=0;function Ar(e,n,a,r,c){return ei=0,cv(e.child,n,a,r,c)}function cv(e,n,a,r,c){for(var f=!1;e!==null;){if(e.tag===5){var y=e.stateNode;if(r!==null){var C=_d(y);r.push(C),C.view&&(f=!0)}else f||_d(y).view&&(f=!0);Gu=!0,u_(y,ei===0?n:n+"_"+ei,a),ei++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c||cv(e.child,n,a,r,c)&&(f=!0));e=e.sibling}return f}function Ji(e,n){for(;e!==null;)e.tag===5?c_(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||Ji(e.child,n)),e=e.sibling}function Vu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Vu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=pa(n.default,n.share),n!=="none"&&(Ar(e,a,n,null,!1)||Ji(e.child,!1))}e=e.sibling}}function zh(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,c=da(r,a),f=pa(r.default,a.paired?r.share:r.enter);f!=="none"?Ar(e,c,f,null,!1)?(Vu(e),a.paired||n||Or(e,r.onEnter)):Ji(e.child,!1):Vu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)zh(e,n),e=e.sibling;else Vu(e)}function Ih(e){if(ci!==null&&ci.size!==0){var n=ci;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var c=n.get(r);if(c!==void 0){var f=pa(a.default,a.share);if(f!=="none"&&(Ar(e,r,f,null,!1)?(f=e.stateNode,c.paired=f,f.paired=c,Or(e,a.onShare)):Ji(e.child,!1)),n.delete(r),n.size===0)break}}}Ih(e)}e=e.sibling}}}function Bh(e){if(e.tag===30){var n=e.memoizedProps,a=da(n,e.stateNode),r=ci!==null?ci.get(a):void 0,c=pa(n.default,r!==void 0?n.share:n.exit);c!=="none"&&(Ar(e,a,c,null,!1)?r!==void 0?(c=e.stateNode,r.paired=c,c.paired=r,ci.delete(a),Or(e,n.onShare)):Or(e,n.onExit):Ji(e.child,!1)),ci!==null&&Ih(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Bh(e),e=e.sibling;else ci!==null&&Ih(e)}function fv(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=da(n,e.stateNode);n=pa(n.default,n.update),e.flags&=-5,n!=="none"&&Ar(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&fv(e);e=e.sibling}}function Fh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,Ji(e.child,!1))}Fh(e)}e=e.sibling}}function ku(e){if(e.tag===30)e.stateNode.paired=null,Ji(e.child,!1),Fh(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)ku(e),e=e.sibling;else Fh(e)}function hv(e){for(e=e.child;e!==null;)e.tag===30?Ji(e.child,!1):(e.subtreeFlags&33554432)!==0&&hv(e),e=e.sibling}function Hh(e,n,a,r,c,f,y){for(var C=!1;n!==null;){if(n.tag===5){var k=n.stateNode;if(f!==null&&ei<f.length){var et=f[ei],ut=_d(k);(et.view||ut.view)&&(C=!0);var bt;if(bt=(e.flags&4)===0)if(ut.clip)bt=!0;else{bt=et.rect;var K=ut.rect;bt=bt.y!==K.y||bt.x!==K.x||bt.height!==K.height||bt.width!==K.width}bt&&(e.flags|=4),ut.abs?ut=!et.abs:(et=et.rect,ut=ut.rect,ut=et.height!==ut.height||et.width!==ut.width),ut&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&u_(k,ei===0?a:a+"_"+ei,c),C&&(e.flags&4)!==0||(Ki===null&&(Ki=[]),Ki.push(k,ei===0?r:r+"_"+ei,n.memoizedProps)),ei++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&y?e.flags|=n.flags&32:Hh(e,n.child,a,r,c,f,y)&&(C=!0));n=n.sibling}return C}function dv(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,c=da(a,r),f=pa(a.default,a.update),y;y=e.memoizedState,e.memoizedState=null,r=e;var C=e.child;ei=0,c=Hh(r,C,c,c,f,y,!1),(e.flags&4)!==0&&c&&Or(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&dv(e);e=e.sibling}}var wn=!1,Ge=!1,$i=!1,Gh=!1,pv=typeof WeakSet=="function"?WeakSet:Set,Dn=null,ta=!1,el=!1,Xu=!1,Vh=!1;function zM(e,n,a){if(e=e.containerInfo,dd=Xr,e=_0(e),Cf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var f=c.anchorOffset,y=c.focusNode;c=c.focusOffset;try{r.nodeType,y.nodeType}catch{r=null;break t}var C=0,k=-1,et=-1,ut=0,bt=0,K=e,ot=null;e:for(;;){for(var Xt;K!==r||f!==0&&K.nodeType!==3||(k=C+f),K!==y||c!==0&&K.nodeType!==3||(et=C+c),K.nodeType===3&&(C+=K.nodeValue.length),(Xt=K.firstChild)!==null;)ot=K,K=Xt;for(;;){if(K===e)break e;if(ot===r&&++ut===f&&(k=C),ot===y&&++bt===c&&(et=C),(Xt=K.nextSibling)!==null)break;K=ot,ot=K.parentNode}K=Xt}r=k===-1||et===-1?null:{start:k,end:et}}else r=null}r=r||{start:0,end:0}}else r=null;for(pd={focusedElem:e,selectionRange:r},Xr=!1,a=(a&335544064)===a,Dn=n,n=a?9270:1024;Dn!==null;){if(e=Dn,a&&(r=e.deletions,r!==null))for(f=0;f<r.length;f++)a&&Bh(r[f]);if(e.alternate===null&&(e.flags&2)!==0)a&&lv(e),qu(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&Bh(r),qu(a);continue}else if(r!==null&&r.memoizedState!==null){a&&lv(e),qu(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,Dn=r):(a&&fv(e),qu(a))}}ci=null}function qu(e){for(;Dn!==null;){var n=Dn,a=e,r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&r!==null){a=void 0,c=r.memoizedProps,r=r.memoizedState;var f=n.stateNode;try{var y=Ps(n.type,c);a=f.getSnapshotBeforeUpdate(y,r),f.__reactInternalSnapshotBeforeUpdate=a}catch(C){Xe(n,n.return,C)}}break;case 3:if((c&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Sd(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Sd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=da(r.memoizedProps,r.stateNode),c=n.memoizedProps,c=pa(c.default,c.update),c!=="none"&&Ar(r,a,c,r.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Dn=r;break}Dn=n.return}}function mv(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ea(e,a),r&4&&$o(5,a);break;case 1:if(ea(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(y){Xe(a,a.return,y)}else{var c=Ps(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Xe(a,a.return,y)}}r&64&&iv(a),r&512&&Qi(a,a.return);break;case 3:if(ea(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Y0(e,n)}catch(y){Xe(a,a.return,y)}}break;case 27:n===null&&r&4&&ov(a);case 26:case 5:ea(e,a),n===null&&r&4&&Uh(a),r&512&&Qi(a,a.return);break;case 12:ea(e,a);break;case 31:ea(e,a),r&4&&xv(e,a);break;case 13:ea(e,a),r&4&&yv(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=jM.bind(null,a),w1(e,a))));break;case 22:if(r=a.memoizedState!==null||wn,!r){var f=n!==null&&n.memoizedState!==null||Ge;n=wn,c=Ge,wn=r,(Ge=f)&&!c?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Pi(e,a,r)):ea(e,a),wn=n,Ge=c}break;case 30:ea(e,a),r&512&&Qi(a,a.return);break;case 7:r&512&&Qi(a,a.return);default:ea(e,a)}}function kh(e,n){for(e=e.child;e!==null;)gv(e,n),e=e.sibling}function gv(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var c=e.stateNode,f=e.memoizedProps.style,y=f!=null&&f.hasOwnProperty("display")?f.display:null;c.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(k){Xe(e,e.return,k)}Xh(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,ze=!0}catch(k){Xe(e,e.return,k)}break;case 18:try{var C=e.stateNode;n?l_(C,!0):l_(e.stateNode,!1)}catch(k){Xe(e,e.return,k)}break;case 22:case 23:e.memoizedState===null&&kh(e,n);break;default:kh(e,n)}}function Xh(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var a=e,r=n;switch(a.tag){case 4:gv(a,r);break t;case 22:a.memoizedState===null&&Xh(a,r);break t;default:Xh(a,r)}}e=e.sibling}}function vv(e){var n=e.alternate;n!==null&&(e.alternate=null,vv(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ce(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var en=null,ni=!1;function Li(e,n,a){for(a=a.child;a!==null;)_v(e,n,a),a=a.sibling}function _v(e,n,a){if(nn&&typeof nn.onCommitFiberUnmount=="function")try{nn.onCommitFiberUnmount(we,a)}catch{}switch(a.tag){case 26:Ge||Pn(a,n),Li(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ge&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ge||Pn(a,n),tl(a);var r=en,c=ni;is(a.type)&&(en=a.stateNode,ni=!1),Li(e,n,a),M_(a.stateNode,a.type,a.memoizedProps),en=r,ni=c;break;case 5:Ge||Pn(a,n),tl(a);case 6:if(a.tag===6&&tl(a),r=en,c=ni,en=null,Li(e,n,a),en=r,ni=c,en!==null)if(ni)try{(en.nodeType===9?en.body:en.nodeName==="HTML"?en.ownerDocument.body:en).removeChild(a.stateNode),ze=!0}catch(f){Xe(a,n,f)}else try{en.removeChild(a.stateNode),ze=!0}catch(f){Xe(a,n,f)}break;case 18:en!==null&&(ni?(e=en,o_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),qr(e)):o_(en,a.stateNode));break;case 4:r=en,c=ni,en=a.stateNode.containerInfo,ni=!0,Li(e,n,a),en=r,ni=c;break;case 0:case 11:case 14:case 15:Qa(2,a,n),Ge||Qa(4,a,n),Li(e,n,a);break;case 1:Ge||(Pn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&av(a,n,r)),Li(e,n,a);break;case 21:Li(e,n,a);break;case 22:Ge=(r=Ge)||a.memoizedState!==null,Li(e,n,a),Ge=r;break;case 30:Pn(a,n),Li(e,n,a);break;case 7:Ge||Pn(a,n),Li(e,n,a);break;default:Li(e,n,a)}}function xv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{qr(e)}catch(a){Xe(n,n.return,a)}}}function yv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{qr(e)}catch(a){Xe(n,n.return,a)}}function IM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new pv),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new pv),n;default:throw Error(s(435,e.tag))}}function Yu(e,n){var a=IM(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=ZM.bind(null,e,r);r.then(c,c)}})}function jn(e,n,a){var r=n.deletions;if(r!==null)for(var c=0;c<r.length;c++){var f=r[c],y=e,C=n,k=C;t:for(;k!==null;){switch(k.tag){case 27:if(is(k.type)){en=k.stateNode,ni=!1;break t}break;case 5:en=k.stateNode,ni=!1;break t;case 3:case 4:en=k.stateNode.containerInfo,ni=!0;break t}k=k.return}if(en===null)throw Error(s(160));_v(y,C,f),en=null,ni=!1,y=f.alternate,y!==null&&(y.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Sv(n,e,a),n=n.sibling}var Oi=null;function Sv(e,n,a){var r=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var f=0;f<r.length;f++){var y=r[f];y.ref.impl=y.nextImpl}jn(n,e,a),Zn(e),c&4&&(Qa(3,e,e.return),$o(3,e),Qa(5,e,e.return));break;case 1:jn(n,e,a),Zn(e),c&512&&(Ge||r===null||Pn(r,r.return)),c&64&&wn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Oi,jn(n,e,a),Zn(e),c&512&&(Ge||r===null||Pn(r,r.return)),c&4)if(c=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(wn)e.stateNode=a_(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,a=e.memoizedProps,c=f.ownerDocument||f;e:switch(n){case"title":r=c.getElementsByTagName("title")[0],(!r||r[Ie]||r[Gt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=c.createElement(n),c.head.insertBefore(r,c.querySelector("head > title"))),zn(r,n,a),r[Gt]=e,Pe(r),n=r;break t;case"link":if(f=C_("link","href",c).get(n+(a.href||""))){for(y=0;y<f.length;y++)if(r=f[y],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(y,1);break e}}r=c.createElement(n),zn(r,n,a),c.head.appendChild(r);break;case"meta":if(f=C_("meta","content",c).get(n+(a.content||""))){for(y=0;y<f.length;y++)if(r=f[y],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(y,1);break e}}r=c.createElement(n),zn(r,n,a),c.head.appendChild(r);break;default:throw Error(s(468,n))}r[Gt]=e,Pe(r),n=r}e.stateNode=n}else wn||Cd(f,e.type,e.stateNode);else e.stateNode=R_(f,a,e.memoizedProps);else c!==a?(c===null?(n=r.stateNode,n===null||Ge||n.parentNode.removeChild(n)):c.count--,a===null?wn||Cd(f,e.type,e.stateNode):R_(f,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Lh(e,e.memoizedProps,r.memoizedProps);break;case 27:jn(n,e,a),Zn(e),c&512&&(Ge||r===null||Pn(r,r.return)),r!==null&&c&4&&Lh(e,e.memoizedProps,r.memoizedProps);break;case 5:if(f=$i,$i=!1,jn(n,e,a),$i=f,Zn(e),c&512&&(Ge||r===null||Pn(r,r.return)),e.flags&32){n=e.stateNode;try{lr(n,""),ze=!0}catch(ut){Xe(e,e.return,ut)}}c&4&&e.stateNode!=null&&(n=e.memoizedProps,Lh(e,n,r!==null?r.memoizedProps:n)),c&1024&&(Gh=!0);break;case 6:if(jn(n,e,a),Zn(e),c&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,ze=!0}catch(ut){Xe(e,e.return,ut)}}break;case 3:if(ze=!1,oc=null,f=Oi,Oi=cl(n.containerInfo),jn(n,e,a),Oi=f,Zn(e),c&4&&r!==null&&r.memoizedState.isDehydrated)try{qr(n.containerInfo)}catch(ut){Xe(e,e.return,ut)}Gh&&(Gh=!1,Mv(e)),ze=!1;break;case 4:c=$i,$i=wn,r=Vm(),f=Oi,Oi=cl(e.stateNode.containerInfo),jn(n,e,a),Zn(e),Oi=f,ze&&el&&(Xu=!0),ze=r,$i=c;break;case 12:jn(n,e,a),Zn(e);break;case 31:jn(n,e,a),Zn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Yu(e,n)));break;case 13:jn(n,e,a),Zn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Zu=j()),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Yu(e,n)));break;case 22:f=e.memoizedState!==null,y=r!==null&&r.memoizedState!==null;var C=wn,k=Ge,et=$i;wn=C||f,$i=et||f,Ge=k||y,jn(n,e,a),Ge=k,$i=et,wn=C,Zn(e),c&8192&&(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||r===null||y||wn||Ge||(n=y||Ge,a=wn,r=Ge,wn=f||wn,Ge=n,Ka(e,2),wn=a,Ge=r),!f&&$i||kh(e,f)),c&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Yu(e,a))));break;case 19:jn(n,e,a),Zn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Yu(e,n)));break;case 30:c&512&&(Ge||r===null||Pn(r,r.return)),c=Vm(),f=el,y=(a&335544064)===a,C=e.memoizedProps,el=y&&pa(C.default,C.update)!=="none",jn(n,e,a),Zn(e),y&&r!==null&&ze&&(e.flags|=4),el=f,ze=c;break;case 21:break;case 7:c&512&&(Ge||r===null||Pn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:jn(n,e,a),Zn(e)}}function Zn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(rv(r)){a=r;break}r=r.return}r=null;for(var c=e.return;c!==null;){if(Nh(c)){var f=c.stateNode;r===null?r=[f]:r.push(f)}if(Dh(c))break;c=c.return}var y=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var C=a.stateNode,k=Oh(e);Hu(e,k,C,y);break;case 5:var et=a.stateNode;a.flags&32&&(lr(et,""),a.flags&=-33);var ut=Oh(e);Hu(e,ut,et,y);break;case 3:case 4:var bt=a.stateNode.containerInfo,K=Oh(e);Ph(e,K,bt,y);break;default:throw Error(s(161))}}catch(ot){Xe(e,e.return,ot)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Mv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Mv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Xr=!0,n.reset(),Xr=!1),e=e.sibling}}function Rr(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Ev(n,e),n=n.sibling;else dv(n)}function Ev(e,n){var a=e.alternate;if(a===null)zh(e,!1);else switch(e.tag){case 3:if(Vh=ta=!1,uv(),Rr(n,e),!ta&&!Xu){if(e=Ki,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var c=e[r+1];c_(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Vh=!0}Ki=null;break;case 5:Rr(n,e);break;case 4:r=ta,ta=!1,Rr(n,e),ta&&(Xu=!0),ta=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?zh(e,!1):Rr(n,e));break;case 30:r=ta,c=uv(),ta=!1,Rr(n,e),ta&&(e.flags|=4);var f=e.memoizedProps,y=e.stateNode;n=da(f,y),y=da(a.memoizedProps,y);var C=pa(f.default,f.update);C==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=e.child,ei=0,n=Hh(e,a,n,y,C,f,!0),ei!==(f===null?0:f.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Or(e,e.memoizedProps.onUpdate),Ki=c):c!==null&&(c.push.apply(c,Ki),Ki=c),ta=(e.flags&32)!==0?!0:r;break;default:Rr(n,e)}}function ea(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)mv(e,n.alternate,n),n=n.sibling}function Ka(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Qa(4,a,a.return),Ka(a,r);break;case 1:Pn(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&av(a,a.return,c),Ka(a,r);break;case 27:(r&2)!==0&&M_(a.stateNode,a.type,a.memoizedProps);case 5:Pn(a,a.return),a.tag!==5&&a.tag!==27||tl(a),Ka(a,r);break;case 6:tl(a);break;case 26:Pn(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||Ge||c.parentNode.removeChild(c),Ka(a,r);break;case 22:a.memoizedState===null&&Ka(a,r);break;case 30:Pn(a,a.return),Ka(a,r);break;case 7:Pn(a,a.return);default:Ka(a,r)}e=e.sibling}}function Pi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,c=e,f=n,y=f.flags,C=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Pi(c,f,a),$o(4,f);break;case 1:if(Pi(c,f,a),r=f,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ut){Xe(r,r.return,ut)}if(r=f,c=r.updateQueue,c!==null){var k=r.stateNode;try{var et=c.shared.hiddenCallbacks;if(et!==null)for(c.shared.hiddenCallbacks=null,c=0;c<et.length;c++)q0(et[c],k)}catch(ut){Xe(r,r.return,ut)}}C&&y&64&&iv(f),Qi(f,f.return);break;case 27:(a&2)!==0&&ov(f);case 5:f.tag!==5&&f.tag!==27||sv(f),Pi(c,f,a),C&&r===null&&y&4&&Uh(f),Qi(f,f.return);break;case 6:sv(f);break;case 26:k=f.stateNode,f.memoizedState!==null||k===null||wn||Cd(cl(k.ownerDocument),f.type,k),Pi(c,f,a),C&&r===null&&y&4&&Uh(f),Qi(f,f.return);break;case 12:Pi(c,f,a);break;case 31:Pi(c,f,a),C&&y&4&&xv(c,f);break;case 13:Pi(c,f,a),C&&y&4&&yv(c,f);break;case 22:f.memoizedState===null&&Pi(c,f,a),Qi(f,f.return);break;case 30:Pi(c,f,a),Qi(f,f.return);break;case 7:Qi(f,f.return);default:Pi(c,f,a)}n=n.sibling}}function qh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ho(a))}function Yh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ho(e))}function Ai(e,n,a,r){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)Tv(e,n,a,r),n=n.sibling;else c&&hv(n)}function Tv(e,n,a,r){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&ku(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(e,n,a,r),f&2048&&$o(9,n);break;case 1:Ai(e,n,a,r);break;case 3:Ai(e,n,a,r),c&&Vh&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Ho(f)));break;case 12:if(f&2048){Ai(e,n,a,r),f=n.stateNode;try{var y=n.memoizedProps,C=y.id,k=y.onPostCommit;typeof k=="function"&&k(C,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch(et){Xe(n,n.return,et)}}else Ai(e,n,a,r);break;case 31:Ai(e,n,a,r);break;case 13:Ai(e,n,a,r);break;case 23:break;case 22:y=n.stateNode,C=n.alternate,n.memoizedState!==null?(c&&C!==null&&C.memoizedState===null&&ku(C),y._visibility&2?Ai(e,n,a,r):nl(e,n)):(c&&C!==null&&C.memoizedState!==null&&ku(n),y._visibility&2?Ai(e,n,a,r):(y._visibility|=2,Cr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),f&2048&&qh(C,n);break;case 24:Ai(e,n,a,r),f&2048&&Yh(n.alternate,n);break;case 30:c&&(f=n.alternate,f!==null&&(Ji(f.child,!0),Ji(n.child,!0))),Ai(e,n,a,r);break;default:Ai(e,n,a,r)}}function Cr(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,y=n,C=a,k=r,et=y.flags;switch(y.tag){case 0:case 11:case 15:Cr(f,y,C,k,c),$o(8,y);break;case 23:break;case 22:var ut=y.stateNode;y.memoizedState!==null?ut._visibility&2?Cr(f,y,C,k,c):nl(f,y):(ut._visibility|=2,Cr(f,y,C,k,c)),c&&et&2048&&qh(y.alternate,y);break;case 24:Cr(f,y,C,k,c),c&&et&2048&&Yh(y.alternate,y);break;default:Cr(f,y,C,k,c)}n=n.sibling}}function nl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:nl(a,r),c&2048&&qh(r.alternate,r);break;case 24:nl(a,r),c&2048&&Yh(r.alternate,r);break;default:nl(a,r)}n=n.sibling}}var zs=8192;function Is(e,n,a){if(e.subtreeFlags&zs)for(e=e.child;e!==null;)bv(e,n,a),e=e.sibling}function bv(e,n,a){switch(e.tag){case 26:Is(e,n,a),e.flags&zs&&(e.memoizedState!==null?k1(a,Oi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&U_(a,e)));break;case 5:Is(e,n,a),e.flags&zs&&(e=e.stateNode,(n&335544128)===n&&U_(a,e));break;case 3:case 4:var r=Oi;Oi=cl(e.stateNode.containerInfo),Is(e,n,a),Oi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=zs,zs=16777216,Is(e,n,a),zs=r):Is(e,n,a));break;case 30:if((e.flags&zs)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var c=e.stateNode;c.paired=null,ci===null&&(ci=new Map),ci.set(r,c)}Is(e,n,a);break;default:Is(e,n,a)}}function Av(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function il(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Dn=r,Cv(r,e)}Av(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Rv(e),e=e.sibling}function Rv(e){switch(e.tag){case 0:case 11:case 15:il(e),e.flags&2048&&Qa(9,e,e.return);break;case 3:il(e);break;case 12:il(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Wu(e)):il(e);break;default:il(e)}}function Wu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Dn=r,Cv(r,e)}Av(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Qa(8,n,n.return),Wu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Wu(n));break;default:Wu(n)}e=e.sibling}}function Cv(e,n){for(;Dn!==null;){var a=Dn;switch(a.tag){case 0:case 11:case 15:Qa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ho(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Dn=r;else t:for(a=e;Dn!==null;){r=Dn;var c=r.sibling,f=r.return;if(vv(r),r===a){Dn=null;break t}if(c!==null){c.return=f,Dn=c;break t}Dn=f}}}var BM={getCacheForType:function(e){var n=Un(mn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Un(mn).controller.signal}},FM=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Qe=null,Re=null,De=0,ke=0,fi=null,Ja=!1,wr=!1,Wh=!1,Ea=0,un=0,$a=0,Bs=0,ju=0,hi=0,Dr=0,al=null,ii=null,jh=!1,Zu=0,wv=0,Qu=1/0,Ku=null,ts=null,an=0,zi=null,Fs=null,na=0,Zh=0,Qh=null,Dv=null,Nr=null,Ur=null,Lr=null,sl=0,Ju=null;function di(){return(Fe&2)!==0&&De!==0?De&-De:At.T!==null?rd():It()}function Nv(){if(hi===0)if((De&536870912)===0||Te){var e=ca;ca<<=1,(ca&3932160)===0&&(ca=262144),hi=e}else hi=536870912;return e=Ln.current,e!==null&&(e.flags|=32),hi}function Or(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=f_(da(e.memoizedProps,a))),Ur===null&&(Ur=[]),Ur.push(n.bind(null,r))}}function ai(e,n,a){(e===Qe&&(ke===2||ke===9)||e.cancelPendingCommit!==null)&&(Pr(e,0),es(e,De,hi,!1)),ys(e,a),((Fe&2)===0||e!==Qe)&&(e===Qe&&((Fe&2)===0&&(Bs|=a),un===4&&es(e,De,hi,!1)),ia(e))}function Uv(e,n,a){if((Fe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Pa(e,n),c=r?VM(e,n):Jh(e,n,!0),f=r;do{if(c===0){wr&&!r&&es(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!HM(a)){c=Jh(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var C=e;c=al;var k=C.current.memoizedState.isDehydrated;if(k&&(Pr(C,y).flags|=256),y=Jh(C,y,!1),y!==2&&y!==6){if(Wh&&!k){C.errorRecoveryDisabledLanes|=f,Bs|=f,c=4;break t}f=ii,ii=c,f!==null&&(ii===null?ii=f:ii.push.apply(ii,f))}c=y}if(f=!1,c!==2)continue}}if(c===1){Pr(e,0),es(e,n,0,!0);break}t:{switch(r=e,f=c,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:es(r,n,hi,!Ja);break t;case 2:ii=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Zu+300-j(),10<c)){if(es(r,n,hi,!Ja),xs(r,0,!0)!==0)break t;na=n,r.timeoutHandle=vd(Lv.bind(null,r,a,ii,Ku,jh,n,hi,Bs,Dr,Ja,f,"Throttled",-0,0),c);break t}Lv(r,a,ii,Ku,jh,n,hi,Bs,Dr,Ja,f,null,-0,0)}}break}while(!0);ia(e)}function Lv(e,n,a,r,c,f,y,C,k,et,ut,bt,K,ot){e.timeoutHandle=-1;var Xt=n.subtreeFlags,ie=(f&335544064)===f;if(bt=null,(ie||Xt&8192||(Xt&16785408)===16785408)&&(bt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},ci=null,bv(n,f,bt),ie&&(Xt=bt,ie=e.containerInfo,ie=(ie.nodeType===9?ie:ie.ownerDocument).__reactViewTransition,ie!=null&&(Xt.count++,Xt.waitingForViewTransition=!0,Xt=dl.bind(Xt),ie.finished.then(Xt,Xt))),Xt=(f&62914560)===f?Zu-j():(f&4194048)===f?wv-j():0,Xt=X1(bt,Xt),Xt!==null)){na=f,e.cancelPendingCommit=Xt(Gv.bind(null,e,n,f,a,r,c,y,C,k,et,ut,bt,null,K,ot)),es(e,f,y,!et);return}Gv(e,n,f,a,r,c,y,C,k,et,ut,bt)}function HM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],f=c.getSnapshot;c=c.value;try{if(!li(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function es(e,n,a,r){n=Zl(e,n),n&=~ju,n&=~Bs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var f=31-Bn(c),y=1<<f;r[f]=-1,c&=~y}a!==0&&L(e,a,n)}function $u(){return(Fe&6)===0?(rl(0),!1):!0}function Kh(){if(Re!==null){if(ke===0)var e=Re.return;else e=Re,va=As=null,sh(e),Sr=null,ko=0,e=Re;for(;e!==null;)nv(e.alternate,e),e=e.return;Re=null}}function Pr(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,c1(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),na=0,Kh(),Qe=e,Re=a=ma(e.current,null),De=n,ke=0,fi=null,Ja=!1,wr=Pa(e,n),Wh=!1,Dr=hi=ju=Bs=$a=un=0,ii=al=null,jh=!1,Ea=Zl(e,n),ou(),a}function Ov(e,n){ye=null,At.H=Uu,n===yr||n===_u?(n=G0(),ke=3):n===Yf?(n=G0(),ke=4):ke=n===yh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,fi=n,Re===null&&(un=1,Lu(e,Mi(n,e.current)))}function Pv(){var e=Ln.current;return e===null?!0:(De&4194048)===De?Hn===null:(De&62914560)===De||(De&536870912)!==0?e===Hn:!1}function zv(){var e=At.H;return At.H=Uu,e===null?Uu:e}function Iv(){var e=At.A;return At.A=BM,e}function tc(){un=4,Ja||(De&4194048)!==De&&Ln.current!==null||(wr=!0),($a&134217727)===0&&(Bs&134217727)===0||Qe===null||es(Qe,De,hi,!1)}function Jh(e,n,a){var r=Fe;Fe|=2;var c=zv(),f=Iv();(Qe!==e||De!==n)&&(Ku=null,Pr(e,n)),n=!1;var y=un;t:do try{if(ke!==0&&Re!==null){var C=Re,k=fi;switch(ke){case 8:Kh(),y=6;break t;case 3:case 2:case 9:case 6:Ln.current===null&&(n=!0);var et=ke;if(ke=0,fi=null,zr(e,C,k,et),a&&wr){y=0;break t}break;default:et=ke,ke=0,fi=null,zr(e,C,k,et)}}GM(),y=un;break}catch(ut){Ov(e,ut)}while(!0);return n&&e.shellSuspendCounter++,va=As=null,Fe=r,At.H=c,At.A=f,Re===null&&(Qe=null,De=0,ou()),y}function GM(){for(;Re!==null;)Bv(Re)}function VM(e,n){var a=Fe;Fe|=2;var r=zv(),c=Iv();Qe!==e||De!==n?(Ku=null,Qu=j()+500,Pr(e,n)):wr=Pa(e,n);t:do try{if(ke!==0&&Re!==null){n=Re;var f=fi;e:switch(ke){case 1:ke=0,fi=null,zr(e,n,f,1);break;case 2:case 9:if(F0(f)){ke=0,fi=null,Fv(n);break}n=function(){ke!==2&&ke!==9||Qe!==e||(ke=7),ia(e)},f.then(n,n);break t;case 3:ke=7;break t;case 4:ke=5;break t;case 7:F0(f)?(ke=0,fi=null,Fv(n)):(ke=0,fi=null,zr(e,n,f,7));break;case 5:var y=null;switch(Re.tag){case 26:y=Re.memoizedState;case 5:case 27:var C=Re;if(y?D_(y):C.stateNode.complete){ke=0,fi=null;var k=C.sibling;if(k!==null)Re=k;else{var et=C.return;et!==null?(Re=et,ec(et)):Re=null}break e}}ke=0,fi=null,zr(e,n,f,5);break;case 6:ke=0,fi=null,zr(e,n,f,6);break;case 8:Kh(),un=6;break t;default:throw Error(s(462))}}kM();break}catch(ut){Ov(e,ut)}while(!0);return va=As=null,At.H=r,At.A=c,Fe=a,Re!==null?0:(Qe=null,De=0,ou(),un)}function kM(){for(;Re!==null&&!qt();)Bv(Re)}function Bv(e){var n=tv(e.alternate,e,Ea);e.memoizedProps=e.pendingProps,n===null?ec(e):Re=n}function Fv(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Wg(a,n,n.pendingProps,n.type,void 0,De);break;case 11:n=Wg(a,n,n.pendingProps,n.type.render,n.ref,De);break;case 5:sh(n);var r=n;r===Cn&&(Te?(du(r),r.tag===5&&r.stateNode!=null&&(Je=r.stateNode)):(du(r),Te=!0));default:nv(a,n),n=Re=C0(n,Ea),n=tv(a,n,Ea)}e.memoizedProps=e.pendingProps,n===null?ec(e):Re=n}function zr(e,n,a,r){va=As=null,sh(n),Sr=null,ko=0;var c=n.return;try{if(DM(e,c,n,a,De)){un=1,Lu(e,Mi(a,e.current)),Re=null;return}}catch(f){if(c!==null)throw Re=c,f;un=1,Lu(e,Mi(a,e.current)),Re=null;return}n.flags&32768?(Te||r===1?e=!0:wr||(De&536870912)!==0?e=!1:(Ja=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ln.current,r!==null&&r.tag===13&&(r.flags|=16384))),Hv(n,e)):ec(n)}function ec(e){var n=e;do{if((n.flags&32768)!==0){Hv(n,Ja);return}e=n.return;var a=OM(n.alternate,n,Ea);if(a!==null){Re=a;return}if(n=n.sibling,n!==null){Re=n;return}Re=n=e}while(n!==null);un===0&&(un=5)}function Hv(e,n){do{var a=PM(e.alternate,e);if(a!==null){a.flags&=32767,Re=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Re=e;return}Re=e=a}while(e!==null);un=6,Re=null}function Gv(e,n,a,r,c,f,y,C,k,et,ut,bt){e.cancelPendingCommit=null;do nc();while(an!==0);if((Fe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===Qe&&(Re=Qe=null,De=0),Fs=n,zi=e,na=a,Qh=c,Dv=r,XM(e,n,a,y,C,k,bt)}}function XM(e,n,a,r,c,f,y){var C=n.lanes|n.childLanes;if(Zh=C,C|=Lf,cf(e,a,C,r,c,f),Ur=null,(a&335544064)===a?(Lr=_M(e),r=10262):(Lr=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,QM(Pt,function(){return nd(),null})):(e.callbackNode=null,e.callbackPriority=0),Gu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=At.T,At.T=null,c=Lt.p,Lt.p=2,f=Fe,Fe|=4;try{zM(e,n,a)}finally{Fe=f,Lt.p=c,At.T=r}}an=1,Gu?Nr=g1(y,e.containerInfo,Lr,$h,td,YM,ed,nd,qM):($h(),td(),ed())}function qM(e){if(an!==0){var n=zi.onRecoverableError;n(e,{componentStack:null})}}function YM(){an===3&&(an=0,Ev(Fs,zi),an=4)}function $h(){if(an===1){an=0;var e=zi,n=Fs,a=na,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=At.T,At.T=null;var c=Lt.p;Lt.p=2;var f=Fe;Fe|=4;try{el=Xu=!1,Sv(n,e,a),a=pd;var y=_0(e.containerInfo),C=a.focusedElem,k=a.selectionRange;if(y!==C&&C&&C.ownerDocument&&v0(C.ownerDocument.documentElement,C)){if(k!==null&&Cf(C)){var et=k.start,ut=k.end;if(ut===void 0&&(ut=et),"selectionStart"in C)C.selectionStart=et,C.selectionEnd=Math.min(ut,C.value.length);else{var bt=C.ownerDocument||document,K=bt&&bt.defaultView||window;if(K.getSelection){var ot=K.getSelection(),Xt=C.textContent.length,ie=Math.min(k.start,Xt),Se=k.end===void 0?ie:Math.min(k.end,Xt);!ot.extend&&ie>Se&&(y=Se,Se=ie,ie=y);var tt=g0(C,ie),W=g0(C,Se);if(tt&&W&&(ot.rangeCount!==1||ot.anchorNode!==tt.node||ot.anchorOffset!==tt.offset||ot.focusNode!==W.node||ot.focusOffset!==W.offset)){var rt=bt.createRange();rt.setStart(tt.node,tt.offset),ot.removeAllRanges(),ie>Se?(ot.addRange(rt),ot.extend(W.node,W.offset)):(rt.setEnd(W.node,W.offset),ot.addRange(rt))}}}}for(bt=[],ot=C;ot=ot.parentNode;)ot.nodeType===1&&bt.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<bt.length;C++){var Et=bt[C];Et.element.scrollLeft=Et.left,Et.element.scrollTop=Et.top}}Xr=!!dd,pd=dd=null}finally{Fe=f,Lt.p=c,At.T=r}}e.current=n,an=2}}function td(){if(an===2){an=0;var e=zi,n=Fs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=At.T,At.T=null;var r=Lt.p;Lt.p=2;var c=Fe;Fe|=4;try{mv(e,n.alternate,n)}finally{Fe=c,Lt.p=r,At.T=a}}an=3}}function ed(){if(an===4||an===3){an=0;var e=Nr;Nr=null,_e();var n=zi,a=Fs,r=na,c=Dv,f=(r&335544064)===r?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?an=5:(an=0,Fs=zi=null,Vv(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(ts=null),at(r),a=a.stateNode,nn&&typeof nn.onCommitFiberRoot=="function")try{nn.onCommitFiberRoot(we,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=At.T,f=Lt.p,Lt.p=2,At.T=null;try{for(var y=n.onRecoverableError,C=0;C<c.length;C++){var k=c[C];y(k.value,{componentStack:k.stack})}}finally{At.T=a,Lt.p=f}}if(c=Ur,y=Lr,Lr=null,c!==null&&(Ur=null,y===null&&(y=[]),e!==null))for(k=0;k<c.length;k++)a=(0,c[k])(y),a!==void 0&&e.finished.finally(a);(na&3)!==0&&nc(),ia(n),f=n.pendingLanes,(r&261930)!==0&&(f&42)!==0?n===Ju?sl++:(sl=0,Ju=n):(sl=0,Ju=null),rl(0)}}function Vv(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ho(n)))}function nc(){return Nr!==null&&(Nr.skipTransition(),Nr=null),$h(),td(),ed(),nd()}function nd(){if(an!==5)return!1;var e=zi,n=Zh;Zh=0;var a=at(na),r=At.T,c=Lt.p;try{Lt.p=32>a?32:a,At.T=null,a=Qh,Qh=null;var f=zi,y=na;if(an=0,Fs=zi=null,na=0,(Fe&6)!==0)throw Error(s(331));var C=Fe;if(Fe|=4,Rv(f.current),Tv(f,f.current,y,a),Fe=C,rl(0,!1),nn&&typeof nn.onPostCommitFiberRoot=="function")try{nn.onPostCommitFiberRoot(we,f)}catch{}return!0}finally{Lt.p=c,At.T=r,Vv(e,n)}}function kv(e,n,a){n=Mi(a,n),n=xh(e.stateNode,n,2),e=Ya(e,n,2),e!==null&&(ys(e,2),ia(e))}function Xe(e,n,a){if(e.tag===3)kv(e,e,a);else for(;n!==null;){if(n.tag===3){kv(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ts===null||!ts.has(r))){e=Mi(a,e),a=Fg(2),r=Ya(n,a,2),r!==null&&(Hg(a,r,n,e),ys(r,2),ia(r));break}}n=n.return}}function id(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new FM;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Wh=!0,c.add(a),e=WM.bind(null,e,n,a),n.then(e,e))}function WM(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Qe===e&&(De&a)===a&&((un===4||un===3&&(De&62914560)===De&&300>j()-Zu)&&(Fe&2)===0?Pr(e,0):ju|=a,Dr===De&&(Dr=0)),ia(e)}function Xv(e,n){n===0&&(n=Ql()),e=Es(e,n),e!==null&&(ys(e,n),ia(e))}function jM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Xv(e,a)}function ZM(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Xv(e,a)}function QM(e,n){return ee(e,n)}var Ir=null,Br=null,ad=!1,ic=!1,sd=!1,ns=0;function ia(e){e!==Br&&e.next===null&&(Br===null?Ir=Br=e:Br=Br.next=e),ic=!0,ad||(ad=!0,JM())}function rl(e,n){if(!sd&&ic){sd=!0;do for(var a=!1,r=Ir;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var f=0;else{var y=r.suspendedLanes,C=r.pingedLanes;f=(1<<31-Bn(42|e)+1)-1,f&=c&~(y&~C),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,jv(r,f))}else f=De,f=xs(r,r===Qe?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||Pa(r,f)||(a=!0,jv(r,f));r=r.next}while(a);sd=!1}}function KM(){qv()}function qv(){ic=ad=!1;var e=0;ns!==0&&u1()&&(e=ns);for(var n=j(),a=null,r=Ir;r!==null;){var c=r.next,f=Yv(r,n);f===0?(r.next=null,a===null?Ir=c:a.next=c,c===null&&(Br=a)):(a=r,(e!==0||(f&3)!==0)&&(ic=!0)),r=c}an!==0&&an!==5||rl(e),ns!==0&&(ns=0)}function Yv(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var y=31-Bn(f),C=1<<y,k=c[y];k===-1?((C&a)===0||(C&r)!==0)&&(c[y]=uf(C,n)):k<=n&&(e.expiredLanes|=C),f&=~C}if(n=Qe,a=De,a=xs(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(ke===2||ke===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&Yt(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Pa(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&Yt(r),at(a)){case 2:case 8:a=$t;break;case 32:a=Pt;break;case 268435456:a=ae;break;default:a=Pt}return r=Wv.bind(null,e),a=ee(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&Yt(r),e.callbackPriority=2,e.callbackNode=null,2}function Wv(e,n){if(an!==0&&an!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(nc()&&e.callbackNode!==a)return null;var r=De;return r=xs(e,e===Qe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Uv(e,r,n),Yv(e,j()),e.callbackNode!=null&&e.callbackNode===a?Wv.bind(null,e):null)}function jv(e,n){if(nc())return null;Uv(e,n,!0)}function JM(){f1(function(){(Fe&6)!==0?ee(kt,KM):qv()})}function rd(){if(ns===0){var e=ws;e===0&&(e=vs,vs<<=1,(vs&261888)===0&&(vs=256)),ns=e}return ns}function Zv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:$l(e)}function $M(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var f=Zv((c[ne]||null).action),y=r.submitter;y&&(n=(n=y[ne]||null)?Zv(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var C=new iu("action","action",null,r,c);e.push({event:C,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ns!==0){var k=new FormData(c,y);ph(a,{pending:!0,data:k,method:c.method,action:f},null,k)}}else typeof f=="function"&&(C.preventDefault(),k=new FormData(c,y),ph(a,{pending:!0,data:k,method:c.method,action:f},f,k))},currentTarget:c}]})}}for(var od=0;od<Uf.length;od++){var ld=Uf[od],t1=ld.toLowerCase(),e1=ld[0].toUpperCase()+ld.slice(1);Ui(t1,"on"+e1)}Ui(S0,"onAnimationEnd"),Ui(M0,"onAnimationIteration"),Ui(E0,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(cM,"onTransitionRun"),Ui(fM,"onTransitionStart"),Ui(hM,"onTransitionCancel"),Ui(T0,"onTransitionEnd"),on("onMouseEnter",["mouseout","mouseover"]),on("onMouseLeave",["mouseout","mouseover"]),on("onPointerEnter",["pointerout","pointerover"]),on("onPointerLeave",["pointerout","pointerover"]),pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pn("onBeforeInput",["compositionend","keypress","textInput","paste"]),pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ol="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),n1=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ol));function Qv(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var y=r.length-1;0<=y;y--){var C=r[y],k=C.instance,et=C.currentTarget;if(C=C.listener,k!==f&&c.isPropagationStopped())break t;f=C,c.currentTarget=et;try{f(c)}catch(ut){ru(ut)}c.currentTarget=null,f=k}else for(y=0;y<r.length;y++){if(C=r[y],k=C.instance,et=C.currentTarget,C=C.listener,k!==f&&c.isPropagationStopped())break t;f=C,c.currentTarget=et;try{f(c)}catch(ut){ru(ut)}c.currentTarget=null,f=k}}}}function Ce(e,n){var a=n[ue];a===void 0&&(a=n[ue]=new Set);var r=e+"__bubble";a.has(r)||(Kv(n,e,2,!1),a.add(r))}function ud(e,n,a){var r=0;n&&(r|=4),Kv(a,e,r,n)}var ac="_reactListening"+Math.random().toString(36).slice(2);function cd(e){if(!e[ac]){e[ac]=!0,Ke.forEach(function(a){a!=="selectionchange"&&(n1.has(a)||ud(a,!1,e),ud(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ac]||(n[ac]=!0,ud("selectionchange",!1,n))}}function Kv(e,n,a,r){switch(H_(n)){case 2:var c=j1;break;case 8:c=Z1;break;default:c=Dd}a=c.bind(null,n,a,e),c=void 0,!_f||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function fd(e,n,a,r,c){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var y=r.tag;if(y===3||y===4){var C=r.stateNode.containerInfo;if(C===c)break;if(y===4)for(y=r.return;y!==null;){var k=y.tag;if((k===3||k===4)&&y.stateNode.containerInfo===c)return;y=y.return}for(;C!==null;){if(y=Be(C),y===null)return;if(k=y.tag,k===5||k===6||k===26||k===27){r=f=y;continue t}C=C.parentNode}}r=r.return}Km(function(){var et=f,ut=gf(a),bt=[];t:{var K=b0.get(e);if(K!==void 0){var ot=iu,Xt=e;switch(e){case"keypress":if(eu(a)===0)break t;case"keydown":case"keyup":ot=HS;break;case"focusin":Xt="focus",ot=Mf;break;case"focusout":Xt="blur",ot=Mf;break;case"beforeblur":case"afterblur":ot=Mf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=t0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=CS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=qS;break;case S0:case M0:case E0:ot=NS;break;case T0:ot=WS;break;case"scroll":case"scrollend":ot=AS;break;case"wheel":ot=ZS;break;case"copy":case"cut":case"paste":ot=LS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=n0;break;case"submit":ot=kS;break;case"toggle":case"beforetoggle":ot=KS}var ie=(n&4)!==0,Se=!ie&&(e==="scroll"||e==="scrollend"),tt=ie?K!==null?K+"Capture":null:K;ie=[];for(var W=et,rt;W!==null;){var Et=W;if(rt=Et.stateNode,Et=Et.tag,Et!==5&&Et!==26&&Et!==27||rt===null||tt===null||(Et=wo(W,tt),Et!=null&&ie.push(ll(W,Et,rt))),Se)break;W=W.return}0<ie.length&&(K=new ot(K,Xt,null,a,ut),bt.push({event:K,listeners:ie}))}}if((n&7)===0){t:{if(ot=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",ot&&a!==mf&&(Xt=a.relatedTarget||a.fromElement)&&(Be(Xt)||Xt[fe]))break t;(K||ot)&&(Xt=ut.window===ut?ut:(ot=ut.ownerDocument)?ot.defaultView||ot.parentWindow:window,K?(ot=a.relatedTarget||a.toElement,K=et,ot=ot?Be(ot):null,ot!==null&&(Se=u(ot),ie=ot.tag,ot!==Se||ie!==5&&ie!==27&&ie!==6)&&(ot=null)):(K=null,ot=et),K!==ot&&(ie=t0,Et="onMouseLeave",tt="onMouseEnter",W="mouse",(e==="pointerout"||e==="pointerover")&&(ie=n0,Et="onPointerLeave",tt="onPointerEnter",W="pointer"),Se=K==null?Xt:Mn(K),rt=ot==null?Xt:Mn(ot),Xt=new ie(Et,W+"leave",K,a,ut),Xt.target=Se,Xt.relatedTarget=rt,Et=null,Be(ut)===et&&(ie=new ie(tt,W+"enter",ot,a,ut),ie.target=rt,ie.relatedTarget=Se,Et=ie),Se=Et,ie=K&&ot?z(K,ot,i1):null,K!==null&&Jv(bt,Xt,K,ie,!1),ot!==null&&Se!==null&&Jv(bt,Se,ot,ie,!0)))}t:{if(K=et?Mn(et):window,ot=K.nodeName&&K.nodeName.toLowerCase(),ot==="select"||ot==="input"&&K.type==="file")var Kt=c0;else if(l0(K))if(f0)Kt=oM;else{Kt=sM;var Ne=aM}else ot=K.nodeName,!ot||ot.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?et&&pf(et.elementType)&&(Kt=c0):Kt=rM;if(Kt&&(Kt=Kt(e,et))){u0(bt,Kt,a,ut);break t}Ne&&Ne(e,K,et)}switch(Ne=et?Mn(et):window,e){case"focusin":(l0(Ne)||Ne.contentEditable==="true")&&(hr=Ne,wf=et,Io=null);break;case"focusout":Io=wf=hr=null;break;case"mousedown":Df=!0;break;case"contextmenu":case"mouseup":case"dragend":Df=!1,x0(bt,a,ut);break;case"selectionchange":if(uM)break;case"keydown":case"keyup":x0(bt,a,ut)}var le;if(Tf)t:{switch(e){case"compositionstart":var de="onCompositionStart";break t;case"compositionend":de="onCompositionEnd";break t;case"compositionupdate":de="onCompositionUpdate";break t}de=void 0}else fr?r0(e,a)&&(de="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(de="onCompositionStart");de&&(i0&&a.locale!=="ko"&&(fr||de!=="onCompositionStart"?de==="onCompositionEnd"&&fr&&(le=Jm()):(Ia=ut,xf="value"in Ia?Ia.value:Ia.textContent,fr=!0)),Ne=sc(et,de),0<Ne.length&&(de=new e0(de,e,null,a,ut),bt.push({event:de,listeners:Ne}),le?de.data=le:(le=o0(a),le!==null&&(de.data=le)))),(le=$S?tM(e,a):eM(e,a))&&(de=sc(et,"onBeforeInput"),0<de.length&&(Ne=new e0("onBeforeInput","beforeinput",null,a,ut),bt.push({event:Ne,listeners:de}),Ne.data=le)),$M(bt,e,et,a,ut)}Qv(bt,n)})}function ll(e,n,a){return{instance:e,listener:n,currentTarget:a}}function sc(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=wo(e,a),c!=null&&r.unshift(ll(e,c,f)),c=wo(e,n),c!=null&&r.push(ll(e,c,f))),e.tag===3)return r;e=e.return}return[]}function i1(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Jv(e,n,a,r,c){for(var f=n._reactName,y=[];a!==null&&a!==r;){var C=a,k=C.alternate,et=C.stateNode;if(C=C.tag,k!==null&&k===r)break;C!==5&&C!==26&&C!==27||et===null||(k=et,c?(et=wo(a,f),et!=null&&y.unshift(ll(a,et,k))):c||(et=wo(a,f),et!=null&&y.push(ll(a,et,k)))),a=a.return}y.length!==0&&e.push({event:n,listeners:y})}var a1=/\r\n?/g,s1=/\u0000|\uFFFD/g;function $v(e){return(typeof e=="string"?e:""+e).replace(a1,`
`).replace(s1,"")}function t_(e,n){return n=$v(n),$v(e)===n}function qe(e,n,a,r,c,f){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||lr(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&lr(e,""+r);else return;break;case"className":Jl(e,"class",r);break;case"tabIndex":Jl(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Jl(e,a,r);break;case"style":Zm(e,r,f);return;case"data":if(n!=="object"){Jl(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=$l(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&qe(e,n,"name",c.name,c,null),qe(e,n,"formEncType",c.formEncType,c,null),qe(e,n,"formMethod",c.formMethod,c,null),qe(e,n,"formTarget",c.formTarget,c,null)):(qe(e,n,"encType",c.encType,c,null),qe(e,n,"method",c.method,c,null),qe(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=$l(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=Wi);return;case"onScroll":r!=null&&Ce("scroll",e);return;case"onScrollEnd":r!=null&&Ce("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=$l(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),Kl(e,"popover",r);break;case"xlinkActuate":fa(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":fa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":fa(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":fa(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":fa(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":fa(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":fa(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":fa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":fa(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Kl(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=TS.get(a)||a,Kl(e,a,r);else return}ze=!0}function hd(e,n,a,r,c,f){switch(a){case"style":Zm(e,r,f);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")lr(e,r);else if(typeof r=="number"||typeof r=="bigint")lr(e,""+r);else return;break;case"onScroll":r!=null&&Ce("scroll",e);return;case"onScrollEnd":r!=null&&Ce("scrollend",e);return;case"onClick":r!=null&&(e.onclick=Wi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!qn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),f=a.slice(2,c?a.length-7:void 0),n=e[ne]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(f,n,c),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(f,r,c);break t}ze=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):Kl(e,a,r)}return}ze=!0}function zn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var r=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(e,n,f,y,a,null)}}c&&qe(e,n,"srcSet",a.srcSet,a,null),r&&qe(e,n,"src",a.src,a,null);return;case"input":Ce("invalid",e);var C=f=y=c=null,k=null,et=null;for(r in a)if(a.hasOwnProperty(r)){var ut=a[r];if(ut!=null)switch(r){case"name":c=ut;break;case"type":y=ut;break;case"checked":k=ut;break;case"defaultChecked":et=ut;break;case"value":f=ut;break;case"defaultValue":C=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(s(137,n));break;default:qe(e,n,r,ut,a,null)}}qm(e,f,C,k,et,y,c,!1);return;case"select":Ce("invalid",e),r=y=f=null;for(c in a)if(a.hasOwnProperty(c)&&(C=a[c],C!=null))switch(c){case"value":f=C;break;case"defaultValue":y=C;break;case"multiple":r=C;default:qe(e,n,c,C,a,null)}n=f,a=y,e.multiple=!!r,n!=null?or(e,!!r,n,!1):a!=null&&or(e,!!r,a,!0);return;case"textarea":Ce("invalid",e),f=c=r=null;for(y in a)if(a.hasOwnProperty(y)&&(C=a[y],C!=null))switch(y){case"value":r=C;break;case"defaultValue":c=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:qe(e,n,y,C,a,null)}Wm(e,r,c,f);return;case"option":for(k in a)if(a.hasOwnProperty(k)&&(r=a[k],r!=null))switch(k){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:qe(e,n,k,r,a,null)}return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(r=0;r<ol.length;r++)Ce(ol[r],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(et in a)if(a.hasOwnProperty(et)&&(r=a[et],r!=null))switch(et){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(e,n,et,r,a,null)}return;default:if(pf(n)){for(ut in a)a.hasOwnProperty(ut)&&(r=a[ut],r!==void 0&&hd(e,n,ut,r,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(r=a[C],r!=null&&qe(e,n,C,r,a,null))}var r1={};function o1(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,y=null,C=null,k=null,et=null,ut=null;for(ot in a){var bt=a[ot];if(a.hasOwnProperty(ot)&&bt!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":k=bt;default:r.hasOwnProperty(ot)||qe(e,n,ot,null,r,bt)}}for(var K in r){var ot=r[K];if(bt=a[K],r.hasOwnProperty(K)&&(ot!=null||bt!=null))switch(K){case"type":ot!==bt&&(ze=!0),f=ot;break;case"name":ot!==bt&&(ze=!0),c=ot;break;case"checked":ot!==bt&&(ze=!0),et=ot;break;case"defaultChecked":ot!==bt&&(ze=!0),ut=ot;break;case"value":ot!==bt&&(ze=!0),y=ot;break;case"defaultValue":ot!==bt&&(ze=!0),C=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==bt&&qe(e,n,K,ot,r,bt)}}hf(e,y,C,k,et,ut,f,c);return;case"select":ot=y=C=K=null;for(f in a)if(k=a[f],a.hasOwnProperty(f)&&k!=null)switch(f){case"value":break;case"multiple":ot=k;default:r.hasOwnProperty(f)||qe(e,n,f,null,r,k)}for(c in r)if(f=r[c],k=a[c],r.hasOwnProperty(c)&&(f!=null||k!=null))switch(c){case"value":f!==k&&(ze=!0),K=f;break;case"defaultValue":f!==k&&(ze=!0),C=f;break;case"multiple":f!==k&&(ze=!0),y=f;default:f!==k&&qe(e,n,c,f,r,k)}n=C,a=y,r=ot,K!=null?or(e,!!a,K,!1):!!r!=!!a&&(n!=null?or(e,!!a,n,!0):or(e,!!a,a?[]:"",!1));return;case"textarea":ot=K=null;for(C in a)if(c=a[C],a.hasOwnProperty(C)&&c!=null&&!r.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:qe(e,n,C,null,r,c)}for(y in r)if(c=r[y],f=a[y],r.hasOwnProperty(y)&&(c!=null||f!=null))switch(y){case"value":c!==f&&(ze=!0),K=c;break;case"defaultValue":c!==f&&(ze=!0),ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==f&&qe(e,n,y,c,r,f)}Ym(e,K,ot);return;case"option":for(var Xt in a)if(K=a[Xt],a.hasOwnProperty(Xt)&&K!=null&&!r.hasOwnProperty(Xt))switch(Xt){case"selected":e.selected=!1;break;default:qe(e,n,Xt,null,r,K)}for(k in r)if(K=r[k],ot=a[k],r.hasOwnProperty(k)&&K!==ot&&(K!=null||ot!=null))switch(k){case"selected":K!==ot&&(ze=!0),e.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:qe(e,n,k,K,r,ot)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)K=a[ie],a.hasOwnProperty(ie)&&K!=null&&!r.hasOwnProperty(ie)&&qe(e,n,ie,null,r,K);for(et in r)if(K=r[et],ot=a[et],r.hasOwnProperty(et)&&K!==ot&&(K!=null||ot!=null))switch(et){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(s(137,n));break;default:qe(e,n,et,K,r,ot)}return;default:if(pf(n)){for(var Se in a)K=a[Se],a.hasOwnProperty(Se)&&K!==void 0&&!r.hasOwnProperty(Se)&&hd(e,n,Se,void 0,r,K);for(ut in r)K=r[ut],ot=a[ut],!r.hasOwnProperty(ut)||K===ot||K===void 0&&ot===void 0||hd(e,n,ut,K,r,ot);return}}for(var tt in a)K=a[tt],a.hasOwnProperty(tt)&&K!=null&&!r.hasOwnProperty(tt)&&qe(e,n,tt,null,r,K);for(bt in r)K=r[bt],ot=a[bt],!r.hasOwnProperty(bt)||K===ot||K==null&&ot==null||qe(e,n,bt,K,r,ot)}function e_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function l1(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],f=c.transferSize,y=c.initiatorType,C=c.duration;if(f&&C&&e_(y)){for(y=0,C=c.responseEnd,r+=1;r<a.length;r++){var k=a[r],et=k.startTime;if(et>C)break;var ut=k.transferSize,bt=k.initiatorType;ut&&e_(bt)&&(k=k.responseEnd,y+=ut*(k<C?1:(C-et)/(k-et)))}if(--r,n+=8*(f+y)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var dd=null,pd=null;function ul(e){return e.nodeType===9?e:e.ownerDocument}function n_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function i_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function a_(e,n,a,r){return a=ul(a).createElement(e),a[Gt]=r,a[ne]=n,zn(a,e,n),Pe(a),a}function md(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var gd=null;function u1(){var e=window.event;return e&&e.type==="popstate"?e===gd?!1:(gd=e,!0):(gd=null,!1)}var vd=typeof setTimeout=="function"?setTimeout:void 0,c1=typeof clearTimeout=="function"?clearTimeout:void 0,s_=typeof Promise=="function"?Promise:void 0,r_=typeof requestAnimationFrame=="function"?requestAnimationFrame:vd,f1=typeof queueMicrotask=="function"?queueMicrotask:typeof s_<"u"?function(e){return s_.resolve(null).then(e).catch(h1)}:vd;function h1(e){setTimeout(function(){throw e})}function is(e){return e==="head"}function o_(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),qr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")bd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,bd(a);for(var f=a.firstChild;f;){var y=f.nextSibling,C=f.nodeName;f[Ie]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&bd(e.ownerDocument.body);a=c}while(a);qr(n)}function l_(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function u_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var c=r=0;c<n.length;c++){var f=n[c];0<f.width&&0<f.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function c_(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function d1(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function _d(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return d1(n,a,e)}function p1(e){return e.documentElement.clientHeight}function m1(e){this.addEventListener("load",e),this.addEventListener("error",e)}function g1(e,n,a,r,c,f,y,C,k){var et=n.nodeType===9?n:n.ownerDocument;try{var ut=et.startViewTransition({update:function(){var K=et.defaultView,ot=K.navigation&&K.navigation.transition,Xt=et.fonts.status;r();var ie=[];if(Xt==="loaded"&&(p1(et),et.fonts.status==="loading"&&ie.push(et.fonts.ready)),Xt=ie.length,e!==null)for(var Se=e.suspenseyImages,tt=0,W=0;W<Se.length;W++){var rt=Se[W];if(!rt.complete){var Et=rt.getBoundingClientRect();if(0<Et.bottom&&0<Et.right&&Et.top<K.innerHeight&&Et.left<K.innerWidth){if(tt+=N_(rt),tt>lc){ie.length=Xt;break}rt=new Promise(m1.bind(rt)),ie.push(rt)}}}if(0<ie.length)return K=Promise.race([Promise.all(ie),new Promise(function(Kt){return setTimeout(Kt,500)})]).then(c,c),(ot?Promise.allSettled([ot.finished,K]):K).then(f,f);if(c(),ot)return ot.finished.then(f,f);f()},types:a});et.__reactViewTransition=ut;var bt=[];return ut.ready.then(function(){for(var K=et.documentElement.getAnimations({subtree:!0}),ot=0;ot<K.length;ot++){var Xt=K[ot],ie=Xt.effect,Se=ie.pseudoElement;if(Se!=null&&Se.startsWith("::view-transition")){bt.push(Xt),Xt=ie.getKeyframes();for(var tt=Se=void 0,W=!0,rt=0;rt<Xt.length;rt++){var Et=Xt[rt],Kt=Et.width;if(Se===void 0)Se=Kt;else if(Se!==Kt){W=!1;break}if(Kt=Et.height,tt===void 0)tt=Kt;else if(tt!==Kt){W=!1;break}delete Et.width,delete Et.height,Et.transform==="none"&&delete Et.transform}W&&Se!==void 0&&tt!==void 0&&(ie.setKeyframes(Xt),W=getComputedStyle(ie.target,ie.pseudoElement),W.width!==Se||W.height!==tt)&&(W=Xt[0],W.width=Se,W.height=tt,W=Xt[Xt.length-1],W.width=Se,W.height=tt,ie.setKeyframes(Xt))}}y()},function(K){et.__reactViewTransition===ut&&(et.__reactViewTransition=null);try{if(typeof K=="object"&&K!==null)switch(K.name){case"InvalidStateError":(K.message==="View transition was skipped because document visibility state is hidden."||K.message==="Skipping view transition because document visibility state has become hidden."||K.message==="Skipping view transition because viewport size changed."||K.message==="Transition was aborted because of invalid state")&&(K=null)}K!==null&&k(K)}finally{r(),c(),y()}}),ut.finished.finally(function(){for(var K=0;K<bt.length;K++)bt[K].cancel();et.__reactViewTransition===ut&&(et.__reactViewTransition=null),C()}),ut}catch{return r(),c(),y(),null}}function Hs(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Hs.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Hs.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],c=0;c<a.length;c++){var f=a[c].effect;f!==null&&f.target===e&&f.pseudoElement===n&&r.push(a[c])}return r},Hs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function f_(e){return{name:e,group:new Hs("group",e),imagePair:new Hs("image-pair",e),old:new Hs("old",e),new:new Hs("new",e)}}function pi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}pi.prototype.addEventListener=function(e,n,a){var r=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(d_(f,e,n,a)===-1){var y=this,C=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(C=function(k){y.removeEventListener(e,n,a),typeof n=="function"?n.call(this,k):n.handleEvent(k)}),r!==null&&(c=y.removeEventListener.bind(y,e,n,a),r.addEventListener("abort",c,{once:!0}),c=r.removeEventListener.bind(r,"abort",c)),r=Fr(a),f.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:C,cleanup:c}),m(this._fragmentFiber.child,!1,v1,e,C,r)}this._eventListeners=f}};function v1(e,n,a,r){return M(e).addEventListener(n,a,r),!1}pi.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=d_(r,e,n,a),n!==-1)){var c=r[n];a=c.attachedListener;var f=c.cleanup;c=Fr(c.optionsOrUseCapture),m(this._fragmentFiber.child,!1,_1,e,a,c),r.splice(n,1),f!==null&&f()}};function _1(e,n,a,r){return M(e).removeEventListener(n,a,r),!1}function Fr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function h_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function d_(e,n,a,r){if(e.length===0)return-1;r=h_(r);for(var c=0;c<e.length;c++){var f=e[c];if(f.type===n&&f.listener===a&&h_(f.optionsOrUseCapture)===r)return c}return-1}pi.prototype.dispatchEvent=function(e){var n=x(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var f=a[c];r.addEventListener(f.type,f.attachedListener,Fr(f.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(c=0;c<a.length;c++)f=a[c],r.removeEventListener(f.type,f.attachedListener,Fr(f.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},pi.prototype.focus=function(e){m(this._fragmentFiber.child,!0,p_,e,void 0,void 0)};function p_(e,n){return e.tag===6?!1:(e=M(e),D1(e,n))}pi.prototype.focusLast=function(e){var n=[];m(this._fragmentFiber.child,!0,xd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!p_(n[a],e);a--);};function xd(e,n){return n.push(e),!1}pi.prototype.blur=function(){var e=x(this._fragmentFiber);e!==null&&(e=M(e),e=ul(e).activeElement,e!==null&&m(this._fragmentFiber.child,!1,x1,e,void 0,void 0))};function x1(e,n){return e.tag===6?!1:(e=M(e),e===n||e.contains(n)?(n.blur(),!0):!1)}pi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),m(this._fragmentFiber.child,!1,y1,e,void 0,void 0)};function y1(e,n){return e.tag===6||(e=M(e),n.observe(e)),!1}pi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),m(this._fragmentFiber.child,!1,S1,e,void 0,void 0);for(var a=n=0;a<Ii.length;a++){var r=Ii[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Ii[n++]=r}Ii.length=n}};function S1(e,n){return e.tag===6||(e=M(e),n.unobserve(e)),!1}var Ii=[],yd=!1;function M1(e,n,a){Ii.push({fragmentInstance:e,observer:n,instance:a}),yd||(yd=!0,N1(function(){yd=!1;var r=Ii;Ii=[];for(var c=0;c<r.length;c++){var f=r[c];f.observer.unobserve(f.instance)}}))}pi.prototype.getClientRects=function(){var e=[];return m(this._fragmentFiber.child,!1,E1,e,void 0,void 0),e};function E1(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=M(e),n.push.apply(n,e.getClientRects());return!1}pi.prototype.getRootNode=function(e){var n=x(this._fragmentFiber);return n===null?this:M(n).getRootNode(e)},pi.prototype.compareDocumentPosition=function(e){var n=x(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];m(this._fragmentFiber.child,!1,xd,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,S(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=r=a.compareDocumentPosition(e);return a===e?c=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=T(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(e=M(a).compareDocumentPosition(e),c=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),c=M(a[a.length-1]);var f=S(this._fragmentFiber)?n.parentElement:r;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var y=n.compareDocumentPosition(e),C=c.compareDocumentPosition(e),k=y&Node.DOCUMENT_POSITION_CONTAINED_BY||C&Node.DOCUMENT_POSITION_CONTAINED_BY;return C=r&&f&&y&Node.DOCUMENT_POSITION_FOLLOWING&&C&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||f&&c===e||k||C?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!f&&c===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:y,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||T1(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function T1(e,n,a,r,c){var f=Be(c);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=c.ownerDocument,c===f||c===f.documentElement||c===f.body;t:{for(f=n,n=x(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=z(a,f,I),n===null?n=!1:(m(n,!0,D,f,a),f=_,_=null,n=f!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===r)&&(n=z(r,f,I),n===null?n=!1:(m(n,!0,b,f,r),f=_,w=_=null,n=f!==null)),n):!1}function m_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}pi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];m(this._fragmentFiber.child,!1,xd,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=T(this._fragmentFiber);if(r=a?r[1]||r[0]||x(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=M(r),m_(e,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var c=n[r];c.tag===6?(c=M(c),m_(c,a)):M(c).scrollIntoView(e),r+=a?-1:1}};function b1(e,n){return e=M(e),g_(e,n),!1}function g_(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function v_(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];e.addEventListener(c.type,c.attachedListener,Fr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var y=0,C=0;C<Ii.length;C++){var k=Ii[C];(k.fragmentInstance!==n||k.observer!==f||k.instance!==e)&&(Ii[y++]=k)}Ii.length=y,f.observe(e)}),g_(e,n))}function A1(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];e.removeEventListener(c.type,c.attachedListener,Fr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?M1(n,f,e):f.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function Sd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Sd(a),ce(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function R1(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ie])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ri(e.nextSibling),e===null)break}return null}function C1(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ri(e.nextSibling),e===null))return null;return e}function __(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ri(e.nextSibling),e===null))return null;return e}function Md(e){return e.data==="$?"||e.data==="$~"}function Ed(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function w1(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ri(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Td=null;function x_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ri(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function y_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function D1(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function N1(e){r_(function(){r_(function(n){return e(n)})})}function S_(e,n,a){switch(n=ul(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function M_(e,n,a){for(var r in a){var c=a[r];a.hasOwnProperty(r)&&c!=null&&qe(e,n,r,null,r1,c)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Wi&&(e.onclick=null),ce(e)}function bd(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ce(e)}var Ci=new Map,E_=new Set;function cl(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Ta=Lt.d;Lt.d={f:U1,r:L1,D:O1,C:P1,L:z1,m:I1,X:F1,S:B1,M:H1};function U1(){var e=Ta.f(),n=$u();return e||n}function L1(e){var n=Ee(e);n!==null&&n.tag===5&&n.type==="form"?bg(n):Ta.r(e)}var Hr=typeof document>"u"?null:document;function T_(e,n,a){var r=Hr;if(r&&typeof n=="string"&&n){var c=yi(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),E_.has(c)||(E_.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),zn(n,"link",e),Pe(n),r.head.appendChild(n)))}}function O1(e){Ta.D(e),T_("dns-prefetch",e,null)}function P1(e,n){Ta.C(e,n),T_("preconnect",e,n)}function z1(e,n,a){Ta.L(e,n,a);var r=Hr;if(r&&e&&n){var c='link[rel="preload"][as="'+yi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+yi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+yi(a.imageSizes)+'"]')):c+='[href="'+yi(e)+'"]';var f=c;switch(n){case"style":f=Gr(e);break;case"script":f=Vr(e)}if(!(Ci.has(f)||(e=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ci.set(f,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(fl(f))||n==="script"&&r.querySelector(hl(f))))){var y=r.createElement("link");zn(y,"link",e),n==="style"&&(y[Oe]=!0,y.onload=y.onerror=function(){za(y)}),Pe(y),r.head.appendChild(y)}}}function I1(e,n){Ta.m(e,n);var a=Hr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+yi(r)+'"][href="'+yi(e)+'"]',f=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Vr(e)}if(!Ci.has(f)&&(e=P({rel:"modulepreload",href:e},n),Ci.set(f,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(hl(f)))return}r=a.createElement("link"),zn(r,"link",e),Pe(r),a.head.appendChild(r)}}}function B1(e,n,a){Ta.S(e,n,a);var r=Hr;if(r&&e){var c=ri(r).hoistableStyles,f=Gr(e);n=n||"default";var y=c.get(f);if(!y){var C={loading:0,preload:null};if(y=r.querySelector(fl(f)))C.loading=5;else{e=P({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ci.get(f))&&Ad(e,a);var k=y=r.createElement("link");Pe(k),zn(k,"link",e),k._p=new Promise(function(et,ut){k.onload=et,k.onerror=ut}),k.addEventListener("load",function(){C.loading|=1}),k.addEventListener("error",function(){C.loading|=2}),C.loading|=4,rc(y,n,r)}y={type:"stylesheet",instance:y,count:1,state:C},c.set(f,y)}}}function F1(e,n){Ta.X(e,n);var a=Hr;if(a&&e){var r=ri(a).hoistableScripts,c=Vr(e),f=r.get(c);f||(f=a.querySelector(hl(c)),f||(e=P({src:e,async:!0},n),(n=Ci.get(c))&&Rd(e,n),f=a.createElement("script"),Pe(f),zn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function H1(e,n){Ta.M(e,n);var a=Hr;if(a&&e){var r=ri(a).hoistableScripts,c=Vr(e),f=r.get(c);f||(f=a.querySelector(hl(c)),f||(e=P({src:e,async:!0,type:"module"},n),(n=Ci.get(c))&&Rd(e,n),f=a.createElement("script"),Pe(f),zn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(c,f))}}function b_(e,n,a,r){var c=(c=oe.current)?cl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Gr(a.href),n=ri(c).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Gr(a.href);var f=ri(c).hoistableStyles,y=f.get(e);if(y||(c=c.ownerDocument||c,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,y),(f=c.querySelector(fl(e)))?f._p||(y.instance=f,y.state.loading=5):(f=Ci.get(e),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ci.set(e,f)),G1(c,e,f,y.state))),n&&r===null)throw Error(s(528,""));return y}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Vr(a),n=ri(c).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Gr(e){return'href="'+yi(e)+'"'}function fl(e){return'link[rel="stylesheet"]['+e+"]"}function A_(e){return P({},e,{"data-precedence":e.precedence,precedence:null})}function G1(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Oe]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[Oe]=!0,n.onload=n.onerror=za.bind(null,n),zn(n,"link",a),Pe(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Vr(e){return'[src="'+yi(e)+'"]'}function hl(e){return"script[async]"+e}function R_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+yi(a.href)+'"]');if(r)return n.instance=r,Pe(r),r;var c=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Pe(r),zn(r,"style",c),rc(r,a.precedence,e),n.instance=r;case"stylesheet":c=Gr(a.href);var f=e.querySelector(fl(c));if(f)return n.state.loading|=4,n.instance=f,Pe(f),f;r=A_(a),(c=Ci.get(c))&&Ad(r,c),f=(e.ownerDocument||e).createElement("link"),Pe(f);var y=f;return y._p=new Promise(function(C,k){y.onload=C,y.onerror=k}),zn(f,"link",r),n.state.loading|=4,rc(f,a.precedence,e),n.instance=f;case"script":return f=Vr(a.src),(c=e.querySelector(hl(f)))?(n.instance=c,Pe(c),c):(r=a,(c=Ci.get(f))&&(r=P({},a),Rd(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),Pe(c),zn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,rc(r,a.precedence,e));return n.instance}function rc(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,f=c,y=0;y<r.length;y++){var C=r[y];if(C.dataset.precedence===n)f=C;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Ad(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Rd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var oc=null;function C_(e,n,a){if(oc===null){var r=new Map,c=oc=new Map;c.set(a,r)}else c=oc,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ie]||f[Gt]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=e+y;var C=r.get(y);C?C.push(f):r.set(y,[f])}}return r}function Cd(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function V1(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function w_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function D_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function N_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function U_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=N_(n),e.suspenseyImages.push(n)),e=q1.bind(e),n.decode().then(e,e))}function k1(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Gr(r.href),f=n.querySelector(fl(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=dl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,Pe(f);return}f=n.ownerDocument||n,r=A_(r),(c=Ci.get(c))&&Ad(r,c),f=f.createElement("link"),Pe(f);var y=f;y._p=new Promise(function(C,k){y.onload=C,y.onerror=k}),zn(f,"link",r),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=dl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var lc=0;function X1(e,n){return e.stylesheets&&e.count===0&&cc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&lc===0&&(lc=62500*l1());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&cc(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>lc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function L_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)cc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function dl(){this.count--,L_(this)}function q1(){this.imgCount--,L_(this)}var uc=null;function cc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,uc=new Map,n.forEach(Y1,e),uc=null,dl.call(e))}function Y1(e,n){if(!(n.state.loading&4)){var a=uc.get(e);if(a)var r=a.get(null);else{a=new Map,uc.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var y=c[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),r=y)}r&&a.set(null,r)}c=n.instance,y=c.getAttribute("data-precedence"),f=a.get(y)||r,f===r&&a.set(null,c),a.set(y,c),this.count++,r=dl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var kr={$$typeof:Q,Provider:null,Consumer:null,_currentValue:B,_currentValue2:B,_threadCount:0};function W1(e,n,a,r,c,f,y,C,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Co(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Co(0),this.hiddenUpdates=Co(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.transitionTypes=null,this.incompleteTransitions=new Map}function O_(e,n,a,r,c,f,y,C,k,et,ut,bt){return e=new W1(e,n,a,y,k,et,ut,bt,C),n=1,f===!0&&(n|=24),f=ti(3,null,null,n),e.current=f,f.stateNode=e,n=kf(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Wf(f),e}function P_(e){return e?(e=mr,e):mr}function z_(e,n,a,r,c,f){c=P_(c),r.context===null?r.context=c:r.pendingContext=c,r=qa(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Ya(e,r,n),a!==null&&(ai(a,e,n),Xo(a,e,n))}function I_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function wd(e,n){I_(e,n),(e=e.alternate)&&I_(e,n)}function B_(e){if(e.tag===13||e.tag===31){var n=Es(e,67108864);n!==null&&ai(n,e,67108864),wd(e,67108864)}}function F_(e){if(e.tag===13||e.tag===31){var n=di();n=mt(n);var a=Es(e,n);a!==null&&ai(a,e,n),wd(e,n)}}var Xr=!0;function j1(e,n,a,r){var c=At.T;At.T=null;var f=Lt.p;try{Lt.p=2,Dd(e,n,a,r)}finally{Lt.p=f,At.T=c}}function Z1(e,n,a,r){var c=At.T;At.T=null;var f=Lt.p;try{Lt.p=8,Dd(e,n,a,r)}finally{Lt.p=f,At.T=c}}function Dd(e,n,a,r){if(Xr){var c=Nd(r);if(c===null)fd(e,n,r,fc,a),G_(e,r);else if(K1(c,e,n,a,r))r.stopPropagation();else if(G_(e,r),n&4&&-1<Q1.indexOf(e)){for(;c!==null;){var f=Ee(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=xi(f.pendingLanes);if(y!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;y;){var k=1<<31-Bn(y);C.entanglements[1]|=k,y&=~k}ia(f),(Fe&6)===0&&(Qu=j()+500,rl(0))}}break;case 31:case 13:C=Es(f,2),C!==null&&ai(C,f,2),$u(),wd(f,2)}if(f=Nd(r),f===null&&fd(e,n,r,fc,a),f===c)break;c=f}c!==null&&r.stopPropagation()}else fd(e,n,r,null,a)}}function Nd(e){return e=gf(e),Ud(e)}var fc=null;function Ud(e){if(fc=null,e=Be(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=h(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return fc=e,null}function H_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ft()){case kt:return 2;case $t:return 8;case Pt:case Dt:return 32;case ae:return 268435456;default:return 32}default:return 32}}var Ld=!1,as=null,ss=null,rs=null,pl=new Map,ml=new Map,os=[],Q1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function G_(e,n){switch(e){case"focusin":case"focusout":as=null;break;case"dragenter":case"dragleave":ss=null;break;case"mouseover":case"mouseout":rs=null;break;case"pointerover":case"pointerout":pl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ml.delete(n.pointerId)}}function gl(e,n,a,r,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[c]},n!==null&&(n=Ee(n),n!==null&&B_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function K1(e,n,a,r,c){switch(n){case"focusin":return as=gl(as,e,n,a,r,c),!0;case"dragenter":return ss=gl(ss,e,n,a,r,c),!0;case"mouseover":return rs=gl(rs,e,n,a,r,c),!0;case"pointerover":var f=c.pointerId;return pl.set(f,gl(pl.get(f)||null,e,n,a,r,c)),!0;case"gotpointercapture":return f=c.pointerId,ml.set(f,gl(ml.get(f)||null,e,n,a,r,c)),!0}return!1}function V_(e){var n=Be(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){e.blockedOn=n,Wt(e.priority,function(){F_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Wt(e.priority,function(){F_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Nd(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);mf=r,a.target.dispatchEvent(r),mf=null}else return n=Ee(a),n!==null&&B_(n),e.blockedOn=a,!1;n.shift()}return!0}function k_(e,n,a){hc(e)&&a.delete(n)}function J1(){Ld=!1,as!==null&&hc(as)&&(as=null),ss!==null&&hc(ss)&&(ss=null),rs!==null&&hc(rs)&&(rs=null),pl.forEach(k_),ml.forEach(k_)}function dc(e,n){e.blockedOn===n&&(e.blockedOn=null,Ld||(Ld=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,J1)))}var pc=null;function X_(e){pc!==e&&(pc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){pc===e&&(pc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(Ud(r||a)===null)continue;break}var f=Ee(a);f!==null&&(e.splice(n,3),n-=3,ph(f,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function qr(e){function n(k){return dc(k,e)}as!==null&&dc(as,e),ss!==null&&dc(ss,e),rs!==null&&dc(rs,e),pl.forEach(n),ml.forEach(n);for(var a=0;a<os.length;a++){var r=os[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<os.length&&(a=os[0],a.blockedOn===null);)V_(a),a.blockedOn===null&&os.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],f=a[r+1],y=c[ne]||null;if(typeof f=="function")y||X_(a);else if(y){var C=null;if(f&&f.hasAttribute("formAction")){if(c=f,y=f[ne]||null)C=y.formAction;else if(Ud(c)!==null)continue}else C=y.action;typeof C=="function"?a[r+1]=C:(a.splice(r,3),r-=3),X_(a)}}}function q_(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return c=y})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Od(e){this._internalRoot=e}mc.prototype.render=Od.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=di();z_(a,r,e,n,null,null)},mc.prototype.unmount=Od.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;z_(e.current,2,null,e,null,null),$u(),n[fe]=null}};function mc(e){this._internalRoot=e}mc.prototype.unstable_scheduleHydration=function(e){if(e){var n=It();e={blockedOn:null,target:e,priority:n};for(var a=0;a<os.length&&n!==0&&n<os[a].priority;a++);os.splice(a,0,e),a===0&&V_(e)}};var Y_=t.version;if(Y_!=="19.3.1")throw Error(s(527,Y_,"19.3.1"));Lt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=g(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var $1={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:At,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gc.isDisabled&&gc.supportsFiber)try{we=gc.inject($1),nn=gc}catch{}}return _l.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=Pg,f=zg,y=Ig;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=O_(e,1,!1,null,null,a,r,null,c,f,y,q_),e[fe]=n.current,cd(e),new Od(n)},_l.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",f=Pg,y=zg,C=Ig,k=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(k=a.formState)),n=O_(e,1,!0,n,a??null,r,c,k,f,y,C,q_),n.context=P_(null),a=n.current,r=di(),r=mt(r),c=qa(r),c.callback=null,Ya(a,c,r),a=r,n.current.lanes=a,ys(n,a),ia(n),e[fe]=n.current,cd(e),new mc(n)},_l.version="19.3.1",_l}var nx;function fE(){if(nx)return Id.exports;nx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Id.exports=cE(),Id.exports}var hE=fE();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dE=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Sy=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mE=me.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:h,...d},p)=>me.createElement("svg",{ref:p,...pE,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:Sy("lucide",l),...d},[...h.map(([g,v])=>me.createElement(g,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=(o,t)=>{const i=me.forwardRef(({className:s,...l},u)=>me.createElement(mE,{ref:u,iconNode:t,className:Sy(`lucide-${dE(o)}`,s),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=$n("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=$n("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vE=$n("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ax=$n("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=$n("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _E=$n("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=$n("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yE=$n("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SE=$n("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=$n("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=$n("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=$n("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=$n("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=$n("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=$n("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xm="180",AE=0,ox=1,RE=2,My=1,CE=2,Da=3,gs=0,kn=1,Gi=2,Ua=0,fo=1,zl=2,lx=3,ux=4,wE=5,Zs=100,DE=101,NE=102,UE=103,LE=104,OE=200,PE=201,zE=202,IE=203,Tp=204,bp=205,BE=206,FE=207,HE=208,GE=209,VE=210,kE=211,XE=212,qE=213,YE=214,Ap=0,Rp=1,Cp=2,po=3,wp=4,Dp=5,Np=6,Up=7,Ey=0,WE=1,jE=2,La=0,Ty=1,by=2,Ay=3,ym=4,Ry=5,Cy=6,wy=7,Dy=300,mo=301,go=302,Lp=303,Op=304,of=306,Pp=1e3,Ks=1001,zp=1002,_i=1003,ZE=1004,vc=1005,sa=1006,Vd=1007,Js=1008,qi=1009,Ny=1010,Uy=1011,Il=1012,Sm=1013,tr=1014,ra=1015,Xi=1016,Mm=1017,Em=1018,Bl=1020,Ly=35902,Oy=35899,Py=1021,zy=1022,ki=1023,Fl=1026,Hl=1027,Tm=1028,bm=1029,Iy=1030,Am=1031,Rm=1033,Wc=33776,jc=33777,Zc=33778,Qc=33779,Ip=35840,Bp=35841,Fp=35842,Hp=35843,Gp=36196,Vp=37492,kp=37496,Xp=37808,qp=37809,Yp=37810,Wp=37811,jp=37812,Zp=37813,Qp=37814,Kp=37815,Jp=37816,$p=37817,tm=37818,em=37819,nm=37820,im=37821,am=36492,sm=36494,rm=36495,om=36283,lm=36284,um=36285,cm=36286,QE=3200,KE=3201,By=0,JE=1,ms="",si="srgb",vo="srgb-linear",$c="linear",Ye="srgb",Yr=7680,cx=519,$E=512,tT=513,eT=514,Fy=515,nT=516,iT=517,aT=518,sT=519,fx=35044,hx="300 es",oa=2e3,tf=2001;class Mo{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dx=1234567;const Ul=Math.PI/180,Gl=180/Math.PI;function nr(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Gn[o&255]+Gn[o>>8&255]+Gn[o>>16&255]+Gn[o>>24&255]+"-"+Gn[t&255]+Gn[t>>8&255]+"-"+Gn[t>>16&15|64]+Gn[t>>24&255]+"-"+Gn[i&63|128]+Gn[i>>8&255]+"-"+Gn[i>>16&255]+Gn[i>>24&255]+Gn[s&255]+Gn[s>>8&255]+Gn[s>>16&255]+Gn[s>>24&255]).toLowerCase()}function Ae(o,t,i){return Math.max(t,Math.min(i,o))}function Cm(o,t){return(o%t+t)%t}function rT(o,t,i,s,l){return s+(o-t)*(l-s)/(i-t)}function oT(o,t,i){return o!==t?(i-o)/(t-o):0}function Ll(o,t,i){return(1-i)*o+i*t}function lT(o,t,i,s){return Ll(o,t,1-Math.exp(-i*s))}function uT(o,t=1){return t-Math.abs(Cm(o,t*2)-t)}function cT(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function fT(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function hT(o,t){return o+Math.floor(Math.random()*(t-o+1))}function dT(o,t){return o+Math.random()*(t-o)}function pT(o){return o*(.5-Math.random())}function mT(o){o!==void 0&&(dx=o);let t=dx+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function gT(o){return o*Ul}function vT(o){return o*Gl}function _T(o){return(o&o-1)===0&&o!==0}function xT(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function yT(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function ST(o,t,i,s,l){const u=Math.cos,h=Math.sin,d=u(i/2),p=h(i/2),g=u((t+s)/2),v=h((t+s)/2),m=u((t-s)/2),x=h((t-s)/2),S=u((s-t)/2),T=h((s-t)/2);switch(l){case"XYX":o.set(d*v,p*m,p*x,d*g);break;case"YZY":o.set(p*x,d*v,p*m,d*g);break;case"ZXZ":o.set(p*m,p*x,d*v,d*g);break;case"XZX":o.set(d*v,p*T,p*S,d*g);break;case"YXY":o.set(p*S,d*v,p*T,d*g);break;case"ZYZ":o.set(p*T,p*S,d*v,d*g);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function oo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Qn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const dn={DEG2RAD:Ul,RAD2DEG:Gl,generateUUID:nr,clamp:Ae,euclideanModulo:Cm,mapLinear:rT,inverseLerp:oT,lerp:Ll,damp:lT,pingpong:uT,smoothstep:cT,smootherstep:fT,randInt:hT,randFloat:dT,randFloatSpread:pT,seededRandom:mT,degToRad:gT,radToDeg:vT,isPowerOfTwo:_T,ceilPowerOfTwo:xT,floorPowerOfTwo:yT,setQuaternionFromProperEuler:ST,normalize:Qn,denormalize:oo};class Ht{constructor(t=0,i=0){Ht.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ae(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*s-h*l+t.x,this.y=u*l+h*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jn{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,h,d){let p=s[l+0],g=s[l+1],v=s[l+2],m=s[l+3];const x=u[h+0],S=u[h+1],T=u[h+2],A=u[h+3];if(d===0){t[i+0]=p,t[i+1]=g,t[i+2]=v,t[i+3]=m;return}if(d===1){t[i+0]=x,t[i+1]=S,t[i+2]=T,t[i+3]=A;return}if(m!==A||p!==x||g!==S||v!==T){let M=1-d;const _=p*x+g*S+v*T+m*A,w=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const I=Math.sqrt(D),z=Math.atan2(I,_*w);M=Math.sin(M*z)/I,d=Math.sin(d*z)/I}const b=d*w;if(p=p*M+x*b,g=g*M+S*b,v=v*M+T*b,m=m*M+A*b,M===1-d){const I=1/Math.sqrt(p*p+g*g+v*v+m*m);p*=I,g*=I,v*=I,m*=I}}t[i]=p,t[i+1]=g,t[i+2]=v,t[i+3]=m}static multiplyQuaternionsFlat(t,i,s,l,u,h){const d=s[l],p=s[l+1],g=s[l+2],v=s[l+3],m=u[h],x=u[h+1],S=u[h+2],T=u[h+3];return t[i]=d*T+v*m+p*S-g*x,t[i+1]=p*T+v*x+g*m-d*S,t[i+2]=g*T+v*S+d*x-p*m,t[i+3]=v*T-d*m-p*x-g*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,p=Math.sin,g=d(s/2),v=d(l/2),m=d(u/2),x=p(s/2),S=p(l/2),T=p(u/2);switch(h){case"XYZ":this._x=x*v*m+g*S*T,this._y=g*S*m-x*v*T,this._z=g*v*T+x*S*m,this._w=g*v*m-x*S*T;break;case"YXZ":this._x=x*v*m+g*S*T,this._y=g*S*m-x*v*T,this._z=g*v*T-x*S*m,this._w=g*v*m+x*S*T;break;case"ZXY":this._x=x*v*m-g*S*T,this._y=g*S*m+x*v*T,this._z=g*v*T+x*S*m,this._w=g*v*m-x*S*T;break;case"ZYX":this._x=x*v*m-g*S*T,this._y=g*S*m+x*v*T,this._z=g*v*T-x*S*m,this._w=g*v*m+x*S*T;break;case"YZX":this._x=x*v*m+g*S*T,this._y=g*S*m+x*v*T,this._z=g*v*T-x*S*m,this._w=g*v*m-x*S*T;break;case"XZY":this._x=x*v*m-g*S*T,this._y=g*S*m-x*v*T,this._z=g*v*T+x*S*m,this._w=g*v*m+x*S*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],h=i[1],d=i[5],p=i[9],g=i[2],v=i[6],m=i[10],x=s+d+m;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(v-p)*S,this._y=(u-g)*S,this._z=(h-l)*S}else if(s>d&&s>m){const S=2*Math.sqrt(1+s-d-m);this._w=(v-p)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(u+g)/S}else if(d>m){const S=2*Math.sqrt(1+d-s-m);this._w=(u-g)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+m-s-d);this._w=(h-l)/S,this._x=(u+g)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,h=t._w,d=i._x,p=i._y,g=i._z,v=i._w;return this._x=s*v+h*d+l*g-u*p,this._y=l*v+h*p+u*d-s*g,this._z=u*v+h*g+s*p-l*d,this._w=h*v-s*d-l*p-u*g,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=s,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*u+i*this._z,this.normalize(),this}const g=Math.sqrt(p),v=Math.atan2(g,d),m=Math.sin((1-i)*v)/g,x=Math.sin(i*v)/g;return this._w=h*m+this._w*x,this._x=s*m+this._x*x,this._y=l*m+this._y*x,this._z=u*m+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,i=0,s=0){G.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(px.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(px.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,h=t.y,d=t.z,p=t.w,g=2*(h*l-d*s),v=2*(d*i-u*l),m=2*(u*s-h*i);return this.x=i+p*g+h*m-d*v,this.y=s+p*v+d*g-u*m,this.z=l+p*m+u*v-h*g,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*h-s*p,this.z=s*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return kd.copy(this).projectOnVector(t),this.sub(kd)}reflect(t){return this.sub(kd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ae(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kd=new G,px=new Jn;class ve{constructor(t,i,s,l,u,h,d,p,g){ve.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,p,g)}set(t,i,s,l,u,h,d,p,g){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=p,v[6]=s,v[7]=h,v[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[3],p=s[6],g=s[1],v=s[4],m=s[7],x=s[2],S=s[5],T=s[8],A=l[0],M=l[3],_=l[6],w=l[1],D=l[4],b=l[7],I=l[2],z=l[5],P=l[8];return u[0]=h*A+d*w+p*I,u[3]=h*M+d*D+p*z,u[6]=h*_+d*b+p*P,u[1]=g*A+v*w+m*I,u[4]=g*M+v*D+m*z,u[7]=g*_+v*b+m*P,u[2]=x*A+S*w+T*I,u[5]=x*M+S*D+T*z,u[8]=x*_+S*b+T*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],g=t[7],v=t[8];return i*h*v-i*d*g-s*u*v+s*d*p+l*u*g-l*h*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],g=t[7],v=t[8],m=v*h-d*g,x=d*p-v*u,S=g*u-h*p,T=i*m+s*x+l*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=m*A,t[1]=(l*g-v*s)*A,t[2]=(d*s-l*h)*A,t[3]=x*A,t[4]=(v*i-l*p)*A,t[5]=(l*u-d*i)*A,t[6]=S*A,t[7]=(s*p-g*i)*A,t[8]=(h*i-s*u)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,h,d){const p=Math.cos(u),g=Math.sin(u);return this.set(s*p,s*g,-s*(p*h+g*d)+h+t,-l*g,l*p,-l*(-g*h+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Xd.makeScale(t,i)),this}rotate(t){return this.premultiply(Xd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Xd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Xd=new ve;function Hy(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function ef(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function MT(){const o=ef("canvas");return o.style.display="block",o}const mx={};function Vl(o){o in mx||(mx[o]=!0,console.warn(o))}function ET(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const gx=new ve().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),vx=new ve().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function TT(){const o={enabled:!0,workingColorSpace:vo,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Ye&&(l.r=Oa(l.r),l.g=Oa(l.g),l.b=Oa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ye&&(l.r=ho(l.r),l.g=ho(l.g),l.b=ho(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ms?$c:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Vl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Vl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[vo]:{primaries:t,whitePoint:s,transfer:$c,toXYZ:gx,fromXYZ:vx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:s,transfer:Ye,toXYZ:gx,fromXYZ:vx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),o}const Le=TT();function Oa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ho(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Wr;class bT{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Wr===void 0&&(Wr=ef("canvas")),Wr.width=t.width,Wr.height=t.height;const l=Wr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Wr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ef("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=Oa(u[h]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Oa(i[s]/255)*255):i[s]=Oa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let AT=0;class wm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:AT++}),this.uuid=nr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(qd(l[h].image)):u.push(qd(l[h]))}else u=qd(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function qd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?bT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RT=0;const Yd=new G;class Xn extends Mo{constructor(t=Xn.DEFAULT_IMAGE,i=Xn.DEFAULT_MAPPING,s=Ks,l=Ks,u=sa,h=Js,d=ki,p=qi,g=Xn.DEFAULT_ANISOTROPY,v=ms){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RT++}),this.uuid=nr(),this.name="",this.source=new wm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ve,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Yd).x}get height(){return this.source.getSize(Yd).y}get depth(){return this.source.getSize(Yd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pp:t.x=t.x-Math.floor(t.x);break;case Ks:t.x=t.x<0?0:1;break;case zp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pp:t.y=t.y-Math.floor(t.y);break;case Ks:t.y=t.y<0?0:1;break;case zp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Xn.DEFAULT_IMAGE=null;Xn.DEFAULT_MAPPING=Dy;Xn.DEFAULT_ANISOTROPY=1;class cn{constructor(t=0,i=0,s=0,l=1){cn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const p=t.elements,g=p[0],v=p[4],m=p[8],x=p[1],S=p[5],T=p[9],A=p[2],M=p[6],_=p[10];if(Math.abs(v-x)<.01&&Math.abs(m-A)<.01&&Math.abs(T-M)<.01){if(Math.abs(v+x)<.1&&Math.abs(m+A)<.1&&Math.abs(T+M)<.1&&Math.abs(g+S+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(g+1)/2,b=(S+1)/2,I=(_+1)/2,z=(v+x)/4,P=(m+A)/4,V=(T+M)/4;return D>b&&D>I?D<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(D),l=z/s,u=P/s):b>I?b<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(b),s=z/l,u=V/l):I<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(I),s=P/u,l=V/u),this.set(s,l,u,i),this}let w=Math.sqrt((M-T)*(M-T)+(m-A)*(m-A)+(x-v)*(x-v));return Math.abs(w)<.001&&(w=1),this.x=(M-T)/w,this.y=(m-A)/w,this.z=(x-v)/w,this.w=Math.acos((g+S+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this.w=Ae(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this.w=Ae(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CT extends Mo{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sa,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new cn(0,0,t,i),this.scissorTest=!1,this.viewport=new cn(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new Xn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:sa,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new wm(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends CT{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Gy extends Xn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class wT extends Xn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=_i,this.minFilter=_i,this.wrapR=Ks,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ir{constructor(t=new G(1/0,1/0,1/0),i=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Bi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Bi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Bi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,Bi):Bi.fromBufferAttribute(u,h),Bi.applyMatrix4(t.matrixWorld),this.expandByPoint(Bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_c.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),_c.copy(s.boundingBox)),_c.applyMatrix4(t.matrixWorld),this.union(_c)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bi),Bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xl),xc.subVectors(this.max,xl),jr.subVectors(t.a,xl),Zr.subVectors(t.b,xl),Qr.subVectors(t.c,xl),us.subVectors(Zr,jr),cs.subVectors(Qr,Zr),Gs.subVectors(jr,Qr);let i=[0,-us.z,us.y,0,-cs.z,cs.y,0,-Gs.z,Gs.y,us.z,0,-us.x,cs.z,0,-cs.x,Gs.z,0,-Gs.x,-us.y,us.x,0,-cs.y,cs.x,0,-Gs.y,Gs.x,0];return!Wd(i,jr,Zr,Qr,xc)||(i=[1,0,0,0,1,0,0,0,1],!Wd(i,jr,Zr,Qr,xc))?!1:(yc.crossVectors(us,cs),i=[yc.x,yc.y,yc.z],Wd(i,jr,Zr,Qr,xc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ba),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ba=[new G,new G,new G,new G,new G,new G,new G,new G],Bi=new G,_c=new ir,jr=new G,Zr=new G,Qr=new G,us=new G,cs=new G,Gs=new G,xl=new G,xc=new G,yc=new G,Vs=new G;function Wd(o,t,i,s,l){for(let u=0,h=o.length-3;u<=h;u+=3){Vs.fromArray(o,u);const d=l.x*Math.abs(Vs.x)+l.y*Math.abs(Vs.y)+l.z*Math.abs(Vs.z),p=t.dot(Vs),g=i.dot(Vs),v=s.dot(Vs);if(Math.max(-Math.max(p,g,v),Math.min(p,g,v))>d)return!1}return!0}const DT=new ir,yl=new G,jd=new G;class ar{constructor(t=new G,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):DT.setFromPoints(t).getCenter(s);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yl.subVectors(t,this.center);const i=yl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(yl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(jd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yl.copy(t.center).add(jd)),this.expandByPoint(yl.copy(t.center).sub(jd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Aa=new G,Zd=new G,Sc=new G,fs=new G,Qd=new G,Mc=new G,Kd=new G;class Dm{constructor(t=new G,i=new G(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Aa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Aa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Aa.copy(this.origin).addScaledVector(this.direction,i),Aa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){Zd.copy(t).add(i).multiplyScalar(.5),Sc.copy(i).sub(t).normalize(),fs.copy(this.origin).sub(Zd);const u=t.distanceTo(i)*.5,h=-this.direction.dot(Sc),d=fs.dot(this.direction),p=-fs.dot(Sc),g=fs.lengthSq(),v=Math.abs(1-h*h);let m,x,S,T;if(v>0)if(m=h*p-d,x=h*d-p,T=u*v,m>=0)if(x>=-T)if(x<=T){const A=1/v;m*=A,x*=A,S=m*(m+h*x+2*d)+x*(h*m+x+2*p)+g}else x=u,m=Math.max(0,-(h*x+d)),S=-m*m+x*(x+2*p)+g;else x=-u,m=Math.max(0,-(h*x+d)),S=-m*m+x*(x+2*p)+g;else x<=-T?(m=Math.max(0,-(-h*u+d)),x=m>0?-u:Math.min(Math.max(-u,-p),u),S=-m*m+x*(x+2*p)+g):x<=T?(m=0,x=Math.min(Math.max(-u,-p),u),S=x*(x+2*p)+g):(m=Math.max(0,-(h*u+d)),x=m>0?u:Math.min(Math.max(-u,-p),u),S=-m*m+x*(x+2*p)+g);else x=h>0?-u:u,m=Math.max(0,-(h*x+d)),S=-m*m+x*(x+2*p)+g;return s&&s.copy(this.origin).addScaledVector(this.direction,m),l&&l.copy(Zd).addScaledVector(Sc,x),S}intersectSphere(t,i){Aa.subVectors(t.center,this.origin);const s=Aa.dot(this.direction),l=Aa.dot(Aa)-s*s,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,h,d,p;const g=1/this.direction.x,v=1/this.direction.y,m=1/this.direction.z,x=this.origin;return g>=0?(s=(t.min.x-x.x)*g,l=(t.max.x-x.x)*g):(s=(t.max.x-x.x)*g,l=(t.min.x-x.x)*g),v>=0?(u=(t.min.y-x.y)*v,h=(t.max.y-x.y)*v):(u=(t.max.y-x.y)*v,h=(t.min.y-x.y)*v),s>h||u>l||((u>s||isNaN(s))&&(s=u),(h<l||isNaN(l))&&(l=h),m>=0?(d=(t.min.z-x.z)*m,p=(t.max.z-x.z)*m):(d=(t.max.z-x.z)*m,p=(t.min.z-x.z)*m),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Aa)!==null}intersectTriangle(t,i,s,l,u){Qd.subVectors(i,t),Mc.subVectors(s,t),Kd.crossVectors(Qd,Mc);let h=this.direction.dot(Kd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;fs.subVectors(this.origin,t);const p=d*this.direction.dot(Mc.crossVectors(fs,Mc));if(p<0)return null;const g=d*this.direction.dot(Qd.cross(fs));if(g<0||p+g>h)return null;const v=-d*fs.dot(Kd);return v<0?null:this.at(v/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(t,i,s,l,u,h,d,p,g,v,m,x,S,T,A,M){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,h,d,p,g,v,m,x,S,T,A,M)}set(t,i,s,l,u,h,d,p,g,v,m,x,S,T,A,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=h,_[9]=d,_[13]=p,_[2]=g,_[6]=v,_[10]=m,_[14]=x,_[3]=S,_[7]=T,_[11]=A,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/Kr.setFromMatrixColumn(t,0).length(),u=1/Kr.setFromMatrixColumn(t,1).length(),h=1/Kr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),g=Math.sin(l),v=Math.cos(u),m=Math.sin(u);if(t.order==="XYZ"){const x=h*v,S=h*m,T=d*v,A=d*m;i[0]=p*v,i[4]=-p*m,i[8]=g,i[1]=S+T*g,i[5]=x-A*g,i[9]=-d*p,i[2]=A-x*g,i[6]=T+S*g,i[10]=h*p}else if(t.order==="YXZ"){const x=p*v,S=p*m,T=g*v,A=g*m;i[0]=x+A*d,i[4]=T*d-S,i[8]=h*g,i[1]=h*m,i[5]=h*v,i[9]=-d,i[2]=S*d-T,i[6]=A+x*d,i[10]=h*p}else if(t.order==="ZXY"){const x=p*v,S=p*m,T=g*v,A=g*m;i[0]=x-A*d,i[4]=-h*m,i[8]=T+S*d,i[1]=S+T*d,i[5]=h*v,i[9]=A-x*d,i[2]=-h*g,i[6]=d,i[10]=h*p}else if(t.order==="ZYX"){const x=h*v,S=h*m,T=d*v,A=d*m;i[0]=p*v,i[4]=T*g-S,i[8]=x*g+A,i[1]=p*m,i[5]=A*g+x,i[9]=S*g-T,i[2]=-g,i[6]=d*p,i[10]=h*p}else if(t.order==="YZX"){const x=h*p,S=h*g,T=d*p,A=d*g;i[0]=p*v,i[4]=A-x*m,i[8]=T*m+S,i[1]=m,i[5]=h*v,i[9]=-d*v,i[2]=-g*v,i[6]=S*m+T,i[10]=x-A*m}else if(t.order==="XZY"){const x=h*p,S=h*g,T=d*p,A=d*g;i[0]=p*v,i[4]=-m,i[8]=g*v,i[1]=x*m+A,i[5]=h*v,i[9]=S*m-T,i[2]=T*m-S,i[6]=d*v,i[10]=A*m+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(NT,t,UT)}lookAt(t,i,s){const l=this.elements;return mi.subVectors(t,i),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),hs.crossVectors(s,mi),hs.lengthSq()===0&&(Math.abs(s.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),hs.crossVectors(s,mi)),hs.normalize(),Ec.crossVectors(mi,hs),l[0]=hs.x,l[4]=Ec.x,l[8]=mi.x,l[1]=hs.y,l[5]=Ec.y,l[9]=mi.y,l[2]=hs.z,l[6]=Ec.z,l[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,h=s[0],d=s[4],p=s[8],g=s[12],v=s[1],m=s[5],x=s[9],S=s[13],T=s[2],A=s[6],M=s[10],_=s[14],w=s[3],D=s[7],b=s[11],I=s[15],z=l[0],P=l[4],V=l[8],N=l[12],E=l[1],U=l[5],H=l[9],q=l[13],nt=l[2],Q=l[6],F=l[10],$=l[14],Z=l[3],lt=l[7],xt=l[11],Tt=l[15];return u[0]=h*z+d*E+p*nt+g*Z,u[4]=h*P+d*U+p*Q+g*lt,u[8]=h*V+d*H+p*F+g*xt,u[12]=h*N+d*q+p*$+g*Tt,u[1]=v*z+m*E+x*nt+S*Z,u[5]=v*P+m*U+x*Q+S*lt,u[9]=v*V+m*H+x*F+S*xt,u[13]=v*N+m*q+x*$+S*Tt,u[2]=T*z+A*E+M*nt+_*Z,u[6]=T*P+A*U+M*Q+_*lt,u[10]=T*V+A*H+M*F+_*xt,u[14]=T*N+A*q+M*$+_*Tt,u[3]=w*z+D*E+b*nt+I*Z,u[7]=w*P+D*U+b*Q+I*lt,u[11]=w*V+D*H+b*F+I*xt,u[15]=w*N+D*q+b*$+I*Tt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],h=t[1],d=t[5],p=t[9],g=t[13],v=t[2],m=t[6],x=t[10],S=t[14],T=t[3],A=t[7],M=t[11],_=t[15];return T*(+u*p*m-l*g*m-u*d*x+s*g*x+l*d*S-s*p*S)+A*(+i*p*S-i*g*x+u*h*x-l*h*S+l*g*v-u*p*v)+M*(+i*g*m-i*d*S-u*h*m+s*h*S+u*d*v-s*g*v)+_*(-l*d*v-i*p*m+i*d*x+l*h*m-s*h*x+s*p*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],h=t[4],d=t[5],p=t[6],g=t[7],v=t[8],m=t[9],x=t[10],S=t[11],T=t[12],A=t[13],M=t[14],_=t[15],w=m*M*g-A*x*g+A*p*S-d*M*S-m*p*_+d*x*_,D=T*x*g-v*M*g-T*p*S+h*M*S+v*p*_-h*x*_,b=v*A*g-T*m*g+T*d*S-h*A*S-v*d*_+h*m*_,I=T*m*p-v*A*p-T*d*x+h*A*x+v*d*M-h*m*M,z=i*w+s*D+l*b+u*I;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/z;return t[0]=w*P,t[1]=(A*x*u-m*M*u-A*l*S+s*M*S+m*l*_-s*x*_)*P,t[2]=(d*M*u-A*p*u+A*l*g-s*M*g-d*l*_+s*p*_)*P,t[3]=(m*p*u-d*x*u-m*l*g+s*x*g+d*l*S-s*p*S)*P,t[4]=D*P,t[5]=(v*M*u-T*x*u+T*l*S-i*M*S-v*l*_+i*x*_)*P,t[6]=(T*p*u-h*M*u-T*l*g+i*M*g+h*l*_-i*p*_)*P,t[7]=(h*x*u-v*p*u+v*l*g-i*x*g-h*l*S+i*p*S)*P,t[8]=b*P,t[9]=(T*m*u-v*A*u-T*s*S+i*A*S+v*s*_-i*m*_)*P,t[10]=(h*A*u-T*d*u+T*s*g-i*A*g-h*s*_+i*d*_)*P,t[11]=(v*d*u-h*m*u-v*s*g+i*m*g+h*s*S-i*d*S)*P,t[12]=I*P,t[13]=(v*A*l-T*m*l+T*s*x-i*A*x-v*s*M+i*m*M)*P,t[14]=(T*d*l-h*A*l-T*s*p+i*A*p+h*s*M-i*d*M)*P,t[15]=(h*m*l-v*d*l+v*s*p-i*m*p-h*s*x+i*d*x)*P,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,h=t.x,d=t.y,p=t.z,g=u*h,v=u*d;return this.set(g*h+s,g*d-l*p,g*p+l*d,0,g*d+l*p,v*d+s,v*p-l*h,0,g*p-l*d,v*p+l*h,u*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,h){return this.set(1,s,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,h=i._y,d=i._z,p=i._w,g=u+u,v=h+h,m=d+d,x=u*g,S=u*v,T=u*m,A=h*v,M=h*m,_=d*m,w=p*g,D=p*v,b=p*m,I=s.x,z=s.y,P=s.z;return l[0]=(1-(A+_))*I,l[1]=(S+b)*I,l[2]=(T-D)*I,l[3]=0,l[4]=(S-b)*z,l[5]=(1-(x+_))*z,l[6]=(M+w)*z,l[7]=0,l[8]=(T+D)*P,l[9]=(M-w)*P,l[10]=(1-(x+A))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=Kr.set(l[0],l[1],l[2]).length();const h=Kr.set(l[4],l[5],l[6]).length(),d=Kr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Fi.copy(this);const g=1/u,v=1/h,m=1/d;return Fi.elements[0]*=g,Fi.elements[1]*=g,Fi.elements[2]*=g,Fi.elements[4]*=v,Fi.elements[5]*=v,Fi.elements[6]*=v,Fi.elements[8]*=m,Fi.elements[9]*=m,Fi.elements[10]*=m,i.setFromRotationMatrix(Fi),s.x=u,s.y=h,s.z=d,this}makePerspective(t,i,s,l,u,h,d=oa,p=!1){const g=this.elements,v=2*u/(i-t),m=2*u/(s-l),x=(i+t)/(i-t),S=(s+l)/(s-l);let T,A;if(p)T=u/(h-u),A=h*u/(h-u);else if(d===oa)T=-(h+u)/(h-u),A=-2*h*u/(h-u);else if(d===tf)T=-h/(h-u),A=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return g[0]=v,g[4]=0,g[8]=x,g[12]=0,g[1]=0,g[5]=m,g[9]=S,g[13]=0,g[2]=0,g[6]=0,g[10]=T,g[14]=A,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(t,i,s,l,u,h,d=oa,p=!1){const g=this.elements,v=2/(i-t),m=2/(s-l),x=-(i+t)/(i-t),S=-(s+l)/(s-l);let T,A;if(p)T=1/(h-u),A=h/(h-u);else if(d===oa)T=-2/(h-u),A=-(h+u)/(h-u);else if(d===tf)T=-1/(h-u),A=-u/(h-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return g[0]=v,g[4]=0,g[8]=0,g[12]=x,g[1]=0,g[5]=m,g[9]=0,g[13]=S,g[2]=0,g[6]=0,g[10]=T,g[14]=A,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Kr=new G,Fi=new Ve,NT=new G(0,0,0),UT=new G(1,1,1),hs=new G,Ec=new G,mi=new G,_x=new Ve,xx=new Jn;class Ni{constructor(t=0,i=0,s=0,l=Ni.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],p=l[1],g=l[5],v=l[9],m=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,g),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-m,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-m,S),this._z=Math.atan2(-h,g)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Ae(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-h,g));break;case"YZX":this._z=Math.asin(Ae(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,g),this._y=Math.atan2(-m,u)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,g),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return _x.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_x,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return xx.setFromEuler(this),this.setFromQuaternion(xx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ni.DEFAULT_ORDER="XYZ";class Vy{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let LT=0;const yx=new G,Jr=new Jn,Ra=new Ve,Tc=new G,Sl=new G,OT=new G,PT=new Jn,Sx=new G(1,0,0),Mx=new G(0,1,0),Ex=new G(0,0,1),Tx={type:"added"},zT={type:"removed"},$r={type:"childadded",child:null},Jd={type:"childremoved",child:null};class yn extends Mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:LT++}),this.uuid=nr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=yn.DEFAULT_UP.clone();const t=new G,i=new Ni,s=new Jn,l=new G(1,1,1);function u(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ve},normalMatrix:{value:new ve}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=yn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return Jr.setFromAxisAngle(t,i),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(t,i){return Jr.setFromAxisAngle(t,i),this.quaternion.premultiply(Jr),this}rotateX(t){return this.rotateOnAxis(Sx,t)}rotateY(t){return this.rotateOnAxis(Mx,t)}rotateZ(t){return this.rotateOnAxis(Ex,t)}translateOnAxis(t,i){return yx.copy(t).applyQuaternion(this.quaternion),this.position.add(yx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Sx,t)}translateY(t){return this.translateOnAxis(Mx,t)}translateZ(t){return this.translateOnAxis(Ex,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ra.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Tc.copy(t):Tc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ra.lookAt(Sl,Tc,this.up):Ra.lookAt(Tc,Sl,this.up),this.quaternion.setFromRotationMatrix(Ra),l&&(Ra.extractRotation(l.matrixWorld),Jr.setFromRotationMatrix(Ra),this.quaternion.premultiply(Jr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tx),$r.child=t,this.dispatchEvent($r),$r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(zT),Jd.child=t,this.dispatchEvent(Jd),Jd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ra.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ra.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ra),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tx),$r.child=t,this.dispatchEvent($r),$r.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sl,t,OT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sl,PT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let g=0,v=p.length;g<v;g++){const m=p[g];u(t.shapes,m)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,g=this.material.length;p<g;p++)d.push(u(t.materials,this.material[p]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(t.animations,p))}}if(i){const d=h(t.geometries),p=h(t.materials),g=h(t.textures),v=h(t.images),m=h(t.shapes),x=h(t.skeletons),S=h(t.animations),T=h(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),g.length>0&&(s.textures=g),v.length>0&&(s.images=v),m.length>0&&(s.shapes=m),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const p=[];for(const g in d){const v=d[g];delete v.metadata,p.push(v)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}yn.DEFAULT_UP=new G(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hi=new G,Ca=new G,$d=new G,wa=new G,to=new G,eo=new G,bx=new G,tp=new G,ep=new G,np=new G,ip=new cn,ap=new cn,sp=new cn;class Vi{constructor(t=new G,i=new G,s=new G){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Hi.subVectors(t,i),l.cross(Hi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Hi.subVectors(l,i),Ca.subVectors(s,i),$d.subVectors(t,i);const h=Hi.dot(Hi),d=Hi.dot(Ca),p=Hi.dot($d),g=Ca.dot(Ca),v=Ca.dot($d),m=h*g-d*d;if(m===0)return u.set(0,0,0),null;const x=1/m,S=(g*p-d*v)*x,T=(h*v-d*p)*x;return u.set(1-S-T,T,S)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,wa)===null?!1:wa.x>=0&&wa.y>=0&&wa.x+wa.y<=1}static getInterpolation(t,i,s,l,u,h,d,p){return this.getBarycoord(t,i,s,l,wa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,wa.x),p.addScaledVector(h,wa.y),p.addScaledVector(d,wa.z),p)}static getInterpolatedAttribute(t,i,s,l,u,h){return ip.setScalar(0),ap.setScalar(0),sp.setScalar(0),ip.fromBufferAttribute(t,i),ap.fromBufferAttribute(t,s),sp.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(ip,u.x),h.addScaledVector(ap,u.y),h.addScaledVector(sp,u.z),h}static isFrontFacing(t,i,s,l){return Hi.subVectors(s,i),Ca.subVectors(t,i),Hi.cross(Ca).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Hi.subVectors(this.c,this.b),Ca.subVectors(this.a,this.b),Hi.cross(Ca).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Vi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Vi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let h,d;to.subVectors(l,s),eo.subVectors(u,s),tp.subVectors(t,s);const p=to.dot(tp),g=eo.dot(tp);if(p<=0&&g<=0)return i.copy(s);ep.subVectors(t,l);const v=to.dot(ep),m=eo.dot(ep);if(v>=0&&m<=v)return i.copy(l);const x=p*m-v*g;if(x<=0&&p>=0&&v<=0)return h=p/(p-v),i.copy(s).addScaledVector(to,h);np.subVectors(t,u);const S=to.dot(np),T=eo.dot(np);if(T>=0&&S<=T)return i.copy(u);const A=S*g-p*T;if(A<=0&&g>=0&&T<=0)return d=g/(g-T),i.copy(s).addScaledVector(eo,d);const M=v*T-S*m;if(M<=0&&m-v>=0&&S-T>=0)return bx.subVectors(u,l),d=(m-v)/(m-v+(S-T)),i.copy(l).addScaledVector(bx,d);const _=1/(M+A+x);return h=A*_,d=x*_,i.copy(s).addScaledVector(to,h).addScaledVector(eo,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ky={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},bc={h:0,s:0,l:0};function rp(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class he{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=Cm(t,1),i=Ae(i,0,1),s=Ae(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,h=2*s-u;this.r=rp(h,u,t+1/3),this.g=rp(h,u,t),this.b=rp(h,u,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=si){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=si){const s=ky[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oa(t.r),this.g=Oa(t.g),this.b=Oa(t.b),this}copyLinearToSRGB(t){return this.r=ho(t.r),this.g=ho(t.g),this.b=ho(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return Le.workingToColorSpace(Vn.copy(this),t),Math.round(Ae(Vn.r*255,0,255))*65536+Math.round(Ae(Vn.g*255,0,255))*256+Math.round(Ae(Vn.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(Vn.copy(this),i);const s=Vn.r,l=Vn.g,u=Vn.b,h=Math.max(s,l,u),d=Math.min(s,l,u);let p,g;const v=(d+h)/2;if(d===h)p=0,g=0;else{const m=h-d;switch(g=v<=.5?m/(h+d):m/(2-h-d),h){case s:p=(l-u)/m+(l<u?6:0);break;case l:p=(u-s)/m+2;break;case u:p=(s-l)/m+4;break}p/=6}return t.h=p,t.s=g,t.l=v,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(Vn.copy(this),i),t.r=Vn.r,t.g=Vn.g,t.b=Vn.b,t}getStyle(t=si){Le.workingToColorSpace(Vn.copy(this),t);const i=Vn.r,s=Vn.g,l=Vn.b;return t!==si?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ds),this.setHSL(ds.h+t,ds.s+i,ds.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ds),t.getHSL(bc);const s=Ll(ds.h,bc.h,i),l=Ll(ds.s,bc.s,i),u=Ll(ds.l,bc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new he;he.NAMES=ky;let IT=0;class sr extends Mo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=nr(),this.name="",this.type="Material",this.blending=fo,this.side=gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Tp,this.blendDst=bp,this.blendEquation=Zs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new he(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yr,this.stencilZFail=Yr,this.stencilZPass=Yr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==fo&&(s.blending=this.blending),this.side!==gs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Tp&&(s.blendSrc=this.blendSrc),this.blendDst!==bp&&(s.blendDst=this.blendDst),this.blendEquation!==Zs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==po&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cx&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Yr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Yr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const h=[];for(const d in u){const p=u[d];delete p.metadata,h.push(p)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(s.textures=u),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class kl extends sr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new he(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.combine=Ey,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xn=new G,Ac=new Ht;let BT=0;class Tn{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:BT++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=fx,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Ac.fromBufferAttribute(this,i),Ac.applyMatrix3(t),this.setXY(i,Ac.x,Ac.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix3(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix4(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyNormalMatrix(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.transformDirection(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=oo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Qn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=oo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=oo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=oo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=oo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Qn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),l=Qn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Qn(i,this.array),s=Qn(s,this.array),l=Qn(l,this.array),u=Qn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==fx&&(t.usage=this.usage),t}}class Xy extends Tn{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class qy extends Tn{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ze extends Tn{constructor(t,i,s){super(new Float32Array(t),i,s)}}let FT=0;const wi=new Ve,op=new yn,no=new G,gi=new ir,Ml=new ir,Nn=new G;class Rn extends Mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FT++}),this.uuid=nr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hy(t)?qy:Xy)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ve().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wi.makeRotationFromQuaternion(t),this.applyMatrix4(wi),this}rotateX(t){return wi.makeRotationX(t),this.applyMatrix4(wi),this}rotateY(t){return wi.makeRotationY(t),this.applyMatrix4(wi),this}rotateZ(t){return wi.makeRotationZ(t),this.applyMatrix4(wi),this}translate(t,i,s){return wi.makeTranslation(t,i,s),this.applyMatrix4(wi),this}scale(t,i,s){return wi.makeScale(t,i,s),this.applyMatrix4(wi),this}lookAt(t){return op.lookAt(t),op.updateMatrix(),this.applyMatrix4(op.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(no).negate(),this.translate(no.x,no.y,no.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ze(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ir);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];gi.setFromBufferAttribute(u),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ar);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const s=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Ml.setFromBufferAttribute(d),this.morphTargetsRelative?(Nn.addVectors(gi.min,Ml.min),gi.expandByPoint(Nn),Nn.addVectors(gi.max,Ml.max),gi.expandByPoint(Nn)):(gi.expandByPoint(Ml.min),gi.expandByPoint(Ml.max))}gi.getCenter(s);let l=0;for(let u=0,h=t.count;u<h;u++)Nn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(Nn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],p=this.morphTargetsRelative;for(let g=0,v=d.count;g<v;g++)Nn.fromBufferAttribute(d,g),p&&(no.fromBufferAttribute(t,g),Nn.add(no)),l=Math.max(l,s.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let V=0;V<s.count;V++)d[V]=new G,p[V]=new G;const g=new G,v=new G,m=new G,x=new Ht,S=new Ht,T=new Ht,A=new G,M=new G;function _(V,N,E){g.fromBufferAttribute(s,V),v.fromBufferAttribute(s,N),m.fromBufferAttribute(s,E),x.fromBufferAttribute(u,V),S.fromBufferAttribute(u,N),T.fromBufferAttribute(u,E),v.sub(g),m.sub(g),S.sub(x),T.sub(x);const U=1/(S.x*T.y-T.x*S.y);isFinite(U)&&(A.copy(v).multiplyScalar(T.y).addScaledVector(m,-S.y).multiplyScalar(U),M.copy(m).multiplyScalar(S.x).addScaledVector(v,-T.x).multiplyScalar(U),d[V].add(A),d[N].add(A),d[E].add(A),p[V].add(M),p[N].add(M),p[E].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let V=0,N=w.length;V<N;++V){const E=w[V],U=E.start,H=E.count;for(let q=U,nt=U+H;q<nt;q+=3)_(t.getX(q+0),t.getX(q+1),t.getX(q+2))}const D=new G,b=new G,I=new G,z=new G;function P(V){I.fromBufferAttribute(l,V),z.copy(I);const N=d[V];D.copy(N),D.sub(I.multiplyScalar(I.dot(N))).normalize(),b.crossVectors(z,N);const U=b.dot(p[V])<0?-1:1;h.setXYZW(V,D.x,D.y,D.z,U)}for(let V=0,N=w.length;V<N;++V){const E=w[V],U=E.start,H=E.count;for(let q=U,nt=U+H;q<nt;q+=3)P(t.getX(q+0)),P(t.getX(q+1)),P(t.getX(q+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Tn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const l=new G,u=new G,h=new G,d=new G,p=new G,g=new G,v=new G,m=new G;if(t)for(let x=0,S=t.count;x<S;x+=3){const T=t.getX(x+0),A=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,M),v.subVectors(h,u),m.subVectors(l,u),v.cross(m),d.fromBufferAttribute(s,T),p.fromBufferAttribute(s,A),g.fromBufferAttribute(s,M),d.add(v),p.add(v),g.add(v),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(A,p.x,p.y,p.z),s.setXYZ(M,g.x,g.y,g.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),v.subVectors(h,u),m.subVectors(l,u),v.cross(m),s.setXYZ(x+0,v.x,v.y,v.z),s.setXYZ(x+1,v.x,v.y,v.z),s.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Nn.fromBufferAttribute(t,i),Nn.normalize(),t.setXYZ(i,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function t(d,p){const g=d.array,v=d.itemSize,m=d.normalized,x=new g.constructor(p.length*v);let S=0,T=0;for(let A=0,M=p.length;A<M;A++){d.isInterleavedBufferAttribute?S=p[A]*d.data.stride+d.offset:S=p[A]*v;for(let _=0;_<v;_++)x[T++]=g[S++]}return new Tn(x,v,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Rn,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],g=t(p,s);i.setAttribute(d,g)}const u=this.morphAttributes;for(const d in u){const p=[],g=u[d];for(let v=0,m=g.length;v<m;v++){const x=g[v],S=t(x,s);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const g=h[d];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(t[g]=p[g]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const g=s[p];t.data.attributes[p]=g.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],v=[];for(let m=0,x=g.length;m<x;m++){const S=g[m];v.push(S.toJSON(t.data))}v.length>0&&(l[p]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const g in l){const v=l[g];this.setAttribute(g,v.clone(i))}const u=t.morphAttributes;for(const g in u){const v=[],m=u[g];for(let x=0,S=m.length;x<S;x++)v.push(m[x].clone(i));this.morphAttributes[g]=v}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let g=0,v=h.length;g<v;g++){const m=h[g];this.addGroup(m.start,m.count,m.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ax=new Ve,ks=new Dm,Rc=new ar,Rx=new G,Cc=new G,wc=new G,Dc=new G,lp=new G,Nc=new G,Cx=new G,Uc=new G;class fn extends yn{constructor(t=new Rn,i=new kl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Nc.set(0,0,0);for(let p=0,g=u.length;p<g;p++){const v=d[p],m=u[p];v!==0&&(lp.fromBufferAttribute(m,t),h?Nc.addScaledVector(lp,v):Nc.addScaledVector(lp.sub(i),v))}i.add(Nc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(u),ks.copy(t.ray).recast(t.near),!(Rc.containsPoint(ks.origin)===!1&&(ks.intersectSphere(Rc,Rx)===null||ks.origin.distanceToSquared(Rx)>(t.far-t.near)**2))&&(Ax.copy(u).invert(),ks.copy(t.ray).applyMatrix4(Ax),!(s.boundingBox!==null&&ks.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,ks)))}_computeIntersections(t,i,s){let l;const u=this.geometry,h=this.material,d=u.index,p=u.attributes.position,g=u.attributes.uv,v=u.attributes.uv1,m=u.attributes.normal,x=u.groups,S=u.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,A=x.length;T<A;T++){const M=x[T],_=h[M.materialIndex],w=Math.max(M.start,S.start),D=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let b=w,I=D;b<I;b+=3){const z=d.getX(b),P=d.getX(b+1),V=d.getX(b+2);l=Lc(this,_,t,s,g,v,m,z,P,V),l&&(l.faceIndex=Math.floor(b/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),A=Math.min(d.count,S.start+S.count);for(let M=T,_=A;M<_;M+=3){const w=d.getX(M),D=d.getX(M+1),b=d.getX(M+2);l=Lc(this,h,t,s,g,v,m,w,D,b),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let T=0,A=x.length;T<A;T++){const M=x[T],_=h[M.materialIndex],w=Math.max(M.start,S.start),D=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let b=w,I=D;b<I;b+=3){const z=b,P=b+1,V=b+2;l=Lc(this,_,t,s,g,v,m,z,P,V),l&&(l.faceIndex=Math.floor(b/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const T=Math.max(0,S.start),A=Math.min(p.count,S.start+S.count);for(let M=T,_=A;M<_;M+=3){const w=M,D=M+1,b=M+2;l=Lc(this,h,t,s,g,v,m,w,D,b),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function HT(o,t,i,s,l,u,h,d){let p;if(t.side===kn?p=s.intersectTriangle(h,u,l,!0,d):p=s.intersectTriangle(l,u,h,t.side===gs,d),p===null)return null;Uc.copy(d),Uc.applyMatrix4(o.matrixWorld);const g=i.ray.origin.distanceTo(Uc);return g<i.near||g>i.far?null:{distance:g,point:Uc.clone(),object:o}}function Lc(o,t,i,s,l,u,h,d,p,g){o.getVertexPosition(d,Cc),o.getVertexPosition(p,wc),o.getVertexPosition(g,Dc);const v=HT(o,t,i,s,Cc,wc,Dc,Cx);if(v){const m=new G;Vi.getBarycoord(Cx,Cc,wc,Dc,m),l&&(v.uv=Vi.getInterpolatedAttribute(l,d,p,g,m,new Ht)),u&&(v.uv1=Vi.getInterpolatedAttribute(u,d,p,g,m,new Ht)),h&&(v.normal=Vi.getInterpolatedAttribute(h,d,p,g,m,new G),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:p,c:g,normal:new G,materialIndex:0};Vi.getNormal(Cc,wc,Dc,x.normal),v.face=x,v.barycoord=m}return v}class Eo extends Rn{constructor(t=1,i=1,s=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const p=[],g=[],v=[],m=[];let x=0,S=0;T("z","y","x",-1,-1,s,i,t,h,u,0),T("z","y","x",1,-1,s,i,-t,h,u,1),T("x","z","y",1,1,t,s,i,l,h,2),T("x","z","y",1,-1,t,s,-i,l,h,3),T("x","y","z",1,-1,t,i,s,l,u,4),T("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(p),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(v,3)),this.setAttribute("uv",new Ze(m,2));function T(A,M,_,w,D,b,I,z,P,V,N){const E=b/P,U=I/V,H=b/2,q=I/2,nt=z/2,Q=P+1,F=V+1;let $=0,Z=0;const lt=new G;for(let xt=0;xt<F;xt++){const Tt=xt*U-q;for(let Vt=0;Vt<Q;Vt++){const se=Vt*E-H;lt[A]=se*w,lt[M]=Tt*D,lt[_]=nt,g.push(lt.x,lt.y,lt.z),lt[A]=0,lt[M]=0,lt[_]=z>0?1:-1,v.push(lt.x,lt.y,lt.z),m.push(Vt/P),m.push(1-xt/V),$+=1}}for(let xt=0;xt<V;xt++)for(let Tt=0;Tt<P;Tt++){const Vt=x+Tt+Q*xt,se=x+Tt+Q*(xt+1),X=x+(Tt+1)+Q*(xt+1),gt=x+(Tt+1)+Q*xt;p.push(Vt,se,gt),p.push(se,X,gt),Z+=6}d.addGroup(S,Z,N),S+=Z,x+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Eo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function _o(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Kn(o){const t={};for(let i=0;i<o.length;i++){const s=_o(o[i]);for(const l in s)t[l]=s[l]}return t}function GT(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Yy(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const Xl={clone:_o,merge:Kn};var VT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends sr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VT,this.fragmentShader=kT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_o(t.uniforms),this.uniformsGroups=GT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Wy extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=oa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ps=new G,wx=new Ht,Dx=new Ht;class vi extends Wy{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Gl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ul*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gl*2*Math.atan(Math.tan(Ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){ps.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ps.x,ps.y).multiplyScalar(-t/ps.z),ps.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ps.x,ps.y).multiplyScalar(-t/ps.z)}getViewSize(t,i){return this.getViewBounds(t,wx,Dx),i.subVectors(Dx,wx)}setViewOffset(t,i,s,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Ul*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,g=h.fullHeight;u+=h.offsetX*l/p,i-=h.offsetY*s/g,l*=h.width/p,s*=h.height/g}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const io=-90,ao=1;class XT extends yn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new vi(io,ao,t,i);l.layers=this.layers,this.add(l);const u=new vi(io,ao,t,i);u.layers=this.layers,this.add(u);const h=new vi(io,ao,t,i);h.layers=this.layers,this.add(h);const d=new vi(io,ao,t,i);d.layers=this.layers,this.add(d);const p=new vi(io,ao,t,i);p.layers=this.layers,this.add(p);const g=new vi(io,ao,t,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,h,d,p]=i;for(const g of i)this.remove(g);if(t===oa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===tf)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const g of i)this.add(g),g.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,p,g,v]=this.children,m=t.getRenderTarget(),x=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,h),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,g),s.texture.generateMipmaps=A,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(m,x,S),t.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class jy extends Xn{constructor(t=[],i=mo,s,l,u,h,d,p,g,v){super(t,i,s,l,u,h,d,p,g,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qT extends Di{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new jy(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Eo(5,5,5),u=new rn({name:"CubemapFromEquirect",uniforms:_o(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:kn,blending:Ua});u.uniforms.tEquirect.value=i;const h=new fn(l,u),d=i.minFilter;return i.minFilter===Js&&(i.minFilter=sa),new XT(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,s,l);t.setRenderTarget(u)}}class $s extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const YT={type:"move"};class up{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $s,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $s,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $s,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,h=null;const d=this._targetRay,p=this._grip,g=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(g&&t.hand){h=!0;for(const A of t.hand.values()){const M=i.getJointPose(A,s),_=this._getHandJoint(g,A);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const v=g.joints["index-finger-tip"],m=g.joints["thumb-tip"],x=v.position.distanceTo(m.position),S=.02,T=.005;g.inputState.pinching&&x>S+T?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!g.inputState.pinching&&x<=S-T&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(YT)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),g!==null&&(g.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new $s;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class Zy extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ni,this.environmentIntensity=1,this.environmentRotation=new Ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class WT extends Xn{constructor(t=null,i=1,s=1,l,u,h,d,p,g=_i,v=_i,m,x){super(null,h,d,p,g,v,l,u,m,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nx extends Tn{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const so=new Ve,Ux=new Ve,Oc=[],Lx=new ir,jT=new Ve,El=new fn,Tl=new ar;class ZT extends fn{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Nx(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,jT)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new ir),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,so),Lx.copy(t.boundingBox).applyMatrix4(so),this.boundingBox.union(Lx)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new ar),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,so),Tl.copy(t.boundingSphere).applyMatrix4(so),this.boundingSphere.union(Tl)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,u=s.length+1,h=t*u+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(El.geometry=this.geometry,El.material=this.material,El.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Tl.copy(this.boundingSphere),Tl.applyMatrix4(s),t.ray.intersectsSphere(Tl)!==!1))for(let u=0;u<l;u++){this.getMatrixAt(u,so),Ux.multiplyMatrices(s,so),El.matrixWorld=Ux,El.raycast(t,Oc);for(let h=0,d=Oc.length;h<d;h++){const p=Oc[h];p.instanceId=u,p.object=this,i.push(p)}Oc.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new Nx(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new WT(new Float32Array(l*this.count),l,this.count,Tm,ra));const u=this.morphTexture.source.data.data;let h=0;for(let g=0;g<s.length;g++)h+=s[g];const d=this.geometry.morphTargetsRelative?1:1-h,p=l*t;u[p]=d,u.set(s,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const cp=new G,QT=new G,KT=new ve;class Ws{constructor(t=new G(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=cp.subVectors(s,i).cross(QT.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(cp),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||KT.getNormalMatrix(t),l=this.coplanarPoint(cp).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xs=new ar,JT=new Ht(.5,.5),Pc=new G;class Nm{constructor(t=new Ws,i=new Ws,s=new Ws,l=new Ws,u=new Ws,h=new Ws){this.planes=[t,i,s,l,u,h]}set(t,i,s,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=oa,s=!1){const l=this.planes,u=t.elements,h=u[0],d=u[1],p=u[2],g=u[3],v=u[4],m=u[5],x=u[6],S=u[7],T=u[8],A=u[9],M=u[10],_=u[11],w=u[12],D=u[13],b=u[14],I=u[15];if(l[0].setComponents(g-h,S-v,_-T,I-w).normalize(),l[1].setComponents(g+h,S+v,_+T,I+w).normalize(),l[2].setComponents(g+d,S+m,_+A,I+D).normalize(),l[3].setComponents(g-d,S-m,_-A,I-D).normalize(),s)l[4].setComponents(p,x,M,b).normalize(),l[5].setComponents(g-p,S-x,_-M,I-b).normalize();else if(l[4].setComponents(g-p,S-x,_-M,I-b).normalize(),i===oa)l[5].setComponents(g+p,S+x,_+M,I+b).normalize();else if(i===tf)l[5].setComponents(p,x,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Xs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Xs.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Xs)}intersectsSprite(t){Xs.center.set(0,0,0);const i=JT.distanceTo(t.center);return Xs.radius=.7071067811865476+i,Xs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Xs)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Pc.x=l.normal.x>0?t.max.x:t.min.x,Pc.y=l.normal.y>0?t.max.y:t.min.y,Pc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Pc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $T extends sr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new he(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const nf=new G,af=new G,Ox=new Ve,bl=new Dm,zc=new ar,fp=new G,Px=new G;class Qy extends yn{constructor(t=new Rn,i=new $T){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)nf.fromBufferAttribute(i,l-1),af.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=nf.distanceTo(af);t.setAttribute("lineDistance",new Ze(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),zc.copy(s.boundingSphere),zc.applyMatrix4(l),zc.radius+=u,t.ray.intersectsSphere(zc)===!1)return;Ox.copy(l).invert(),bl.copy(t.ray).applyMatrix4(Ox);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,g=this.isLineSegments?2:1,v=s.index,x=s.attributes.position;if(v!==null){const S=Math.max(0,h.start),T=Math.min(v.count,h.start+h.count);for(let A=S,M=T-1;A<M;A+=g){const _=v.getX(A),w=v.getX(A+1),D=Ic(this,t,bl,p,_,w,A);D&&i.push(D)}if(this.isLineLoop){const A=v.getX(T-1),M=v.getX(S),_=Ic(this,t,bl,p,A,M,T-1);_&&i.push(_)}}else{const S=Math.max(0,h.start),T=Math.min(x.count,h.start+h.count);for(let A=S,M=T-1;A<M;A+=g){const _=Ic(this,t,bl,p,A,A+1,A);_&&i.push(_)}if(this.isLineLoop){const A=Ic(this,t,bl,p,T-1,S,T-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Ic(o,t,i,s,l,u,h){const d=o.geometry.attributes.position;if(nf.fromBufferAttribute(d,l),af.fromBufferAttribute(d,u),i.distanceSqToSegment(nf,af,fp,Px)>s)return;fp.applyMatrix4(o.matrixWorld);const g=t.ray.origin.distanceTo(fp);if(!(g<t.near||g>t.far))return{distance:g,point:Px.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const zx=new G,Ix=new G;class tb extends Qy{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)zx.fromBufferAttribute(i,l),Ix.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+zx.distanceTo(Ix);t.setAttribute("lineDistance",new Ze(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class eb extends sr{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new he(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Bx=new Ve,fm=new Dm,Bc=new ar,Fc=new G;class Ky extends yn{constructor(t=new Rn,i=new eb){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Bc.copy(s.boundingSphere),Bc.applyMatrix4(l),Bc.radius+=u,t.ray.intersectsSphere(Bc)===!1)return;Bx.copy(l).invert(),fm.copy(t.ray).applyMatrix4(Bx);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,g=s.index,m=s.attributes.position;if(g!==null){const x=Math.max(0,h.start),S=Math.min(g.count,h.start+h.count);for(let T=x,A=S;T<A;T++){const M=g.getX(T);Fc.fromBufferAttribute(m,M),Fx(Fc,M,p,l,t,i,this)}}else{const x=Math.max(0,h.start),S=Math.min(m.count,h.start+h.count);for(let T=x,A=S;T<A;T++)Fc.fromBufferAttribute(m,T),Fx(Fc,T,p,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Fx(o,t,i,s,l,u,h){const d=fm.distanceSqToPoint(o);if(d<i){const p=new G;fm.closestPointToPoint(o,p),p.applyMatrix4(s);const g=l.ray.origin.distanceTo(p);if(g<l.near||g>l.far)return;u.push({distance:g,distanceToRay:Math.sqrt(d),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class nb extends Xn{constructor(t,i,s,l,u,h,d,p,g){super(t,i,s,l,u,h,d,p,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Jy extends Xn{constructor(t,i,s=tr,l,u,h,d=_i,p=_i,g,v=Fl,m=1){if(v!==Fl&&v!==Hl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:m};super(x,l,u,h,d,p,v,s,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new wm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class $y extends Xn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Um extends Rn{constructor(t=1,i=1,s=1,l=32,u=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:h,thetaStart:d,thetaLength:p};const g=this;l=Math.floor(l),u=Math.floor(u);const v=[],m=[],x=[],S=[];let T=0;const A=[],M=s/2;let _=0;w(),h===!1&&(t>0&&D(!0),i>0&&D(!1)),this.setIndex(v),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(x,3)),this.setAttribute("uv",new Ze(S,2));function w(){const b=new G,I=new G;let z=0;const P=(i-t)/s;for(let V=0;V<=u;V++){const N=[],E=V/u,U=E*(i-t)+t;for(let H=0;H<=l;H++){const q=H/l,nt=q*p+d,Q=Math.sin(nt),F=Math.cos(nt);I.x=U*Q,I.y=-E*s+M,I.z=U*F,m.push(I.x,I.y,I.z),b.set(Q,P,F).normalize(),x.push(b.x,b.y,b.z),S.push(q,1-E),N.push(T++)}A.push(N)}for(let V=0;V<l;V++)for(let N=0;N<u;N++){const E=A[N][V],U=A[N+1][V],H=A[N+1][V+1],q=A[N][V+1];(t>0||N!==0)&&(v.push(E,U,q),z+=3),(i>0||N!==u-1)&&(v.push(U,H,q),z+=3)}g.addGroup(_,z,0),_+=z}function D(b){const I=T,z=new Ht,P=new G;let V=0;const N=b===!0?t:i,E=b===!0?1:-1;for(let H=1;H<=l;H++)m.push(0,M*E,0),x.push(0,E,0),S.push(.5,.5),T++;const U=T;for(let H=0;H<=l;H++){const nt=H/l*p+d,Q=Math.cos(nt),F=Math.sin(nt);P.x=N*F,P.y=M*E,P.z=N*Q,m.push(P.x,P.y,P.z),x.push(0,E,0),z.x=Q*.5+.5,z.y=F*.5*E+.5,S.push(z.x,z.y),T++}for(let H=0;H<l;H++){const q=I+H,nt=U+H;b===!0?v.push(nt,nt+1,q):v.push(nt+1,nt,q),V+=3}g.addGroup(_,V,b===!0?1:2),_+=V}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Um(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Lm extends Rn{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const u=[],h=[];d(l),g(s),v(),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(u.slice(),3)),this.setAttribute("uv",new Ze(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(w){const D=new G,b=new G,I=new G;for(let z=0;z<i.length;z+=3)S(i[z+0],D),S(i[z+1],b),S(i[z+2],I),p(D,b,I,w)}function p(w,D,b,I){const z=I+1,P=[];for(let V=0;V<=z;V++){P[V]=[];const N=w.clone().lerp(b,V/z),E=D.clone().lerp(b,V/z),U=z-V;for(let H=0;H<=U;H++)H===0&&V===z?P[V][H]=N:P[V][H]=N.clone().lerp(E,H/U)}for(let V=0;V<z;V++)for(let N=0;N<2*(z-V)-1;N++){const E=Math.floor(N/2);N%2===0?(x(P[V][E+1]),x(P[V+1][E]),x(P[V][E])):(x(P[V][E+1]),x(P[V+1][E+1]),x(P[V+1][E]))}}function g(w){const D=new G;for(let b=0;b<u.length;b+=3)D.x=u[b+0],D.y=u[b+1],D.z=u[b+2],D.normalize().multiplyScalar(w),u[b+0]=D.x,u[b+1]=D.y,u[b+2]=D.z}function v(){const w=new G;for(let D=0;D<u.length;D+=3){w.x=u[D+0],w.y=u[D+1],w.z=u[D+2];const b=M(w)/2/Math.PI+.5,I=_(w)/Math.PI+.5;h.push(b,1-I)}T(),m()}function m(){for(let w=0;w<h.length;w+=6){const D=h[w+0],b=h[w+2],I=h[w+4],z=Math.max(D,b,I),P=Math.min(D,b,I);z>.9&&P<.1&&(D<.2&&(h[w+0]+=1),b<.2&&(h[w+2]+=1),I<.2&&(h[w+4]+=1))}}function x(w){u.push(w.x,w.y,w.z)}function S(w,D){const b=w*3;D.x=t[b+0],D.y=t[b+1],D.z=t[b+2]}function T(){const w=new G,D=new G,b=new G,I=new G,z=new Ht,P=new Ht,V=new Ht;for(let N=0,E=0;N<u.length;N+=9,E+=6){w.set(u[N+0],u[N+1],u[N+2]),D.set(u[N+3],u[N+4],u[N+5]),b.set(u[N+6],u[N+7],u[N+8]),z.set(h[E+0],h[E+1]),P.set(h[E+2],h[E+3]),V.set(h[E+4],h[E+5]),I.copy(w).add(D).add(b).divideScalar(3);const U=M(I);A(z,E+0,w,U),A(P,E+2,D,U),A(V,E+4,b,U)}}function A(w,D,b,I){I<0&&w.x===1&&(h[D]=w.x-1),b.x===0&&b.z===0&&(h[D]=I/2/Math.PI+.5)}function M(w){return Math.atan2(w.z,-w.x)}function _(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Lm(t.vertices,t.indices,t.radius,t.details)}}class la{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),u=0;i.push(0);for(let h=1;h<=t;h++)s=this.getPoint(h/t),u+=s.distanceTo(l),i.push(u),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const u=s.length;let h;i?h=i:h=t*s[u-1];let d=0,p=u-1,g;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),g=s[l]-h,g<0)d=l+1;else if(g>0)p=l-1;else{p=l;break}if(l=p,s[l]===h)return l/(u-1);const v=s[l],x=s[l+1]-v,S=(h-v)/x;return(l+S)/(u-1)}getTangent(t,i){let l=t-1e-4,u=t+1e-4;l<0&&(l=0),u>1&&(u=1);const h=this.getPoint(l),d=this.getPoint(u),p=i||(h.isVector2?new Ht:new G);return p.copy(d).sub(h).normalize(),p}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new G,l=[],u=[],h=[],d=new G,p=new Ve;for(let S=0;S<=t;S++){const T=S/t;l[S]=this.getTangentAt(T,new G)}u[0]=new G,h[0]=new G;let g=Number.MAX_VALUE;const v=Math.abs(l[0].x),m=Math.abs(l[0].y),x=Math.abs(l[0].z);v<=g&&(g=v,s.set(1,0,0)),m<=g&&(g=m,s.set(0,1,0)),x<=g&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),u[0].crossVectors(l[0],d),h[0].crossVectors(l[0],u[0]);for(let S=1;S<=t;S++){if(u[S]=u[S-1].clone(),h[S]=h[S-1].clone(),d.crossVectors(l[S-1],l[S]),d.length()>Number.EPSILON){d.normalize();const T=Math.acos(Ae(l[S-1].dot(l[S]),-1,1));u[S].applyMatrix4(p.makeRotationAxis(d,T))}h[S].crossVectors(l[S],u[S])}if(i===!0){let S=Math.acos(Ae(u[0].dot(u[t]),-1,1));S/=t,l[0].dot(d.crossVectors(u[0],u[t]))>0&&(S=-S);for(let T=1;T<=t;T++)u[T].applyMatrix4(p.makeRotationAxis(l[T],S*T)),h[T].crossVectors(l[T],u[T])}return{tangents:l,normals:u,binormals:h}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Om extends la{constructor(t=0,i=0,s=1,l=1,u=0,h=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=u,this.aEndAngle=h,this.aClockwise=d,this.aRotation=p}getPoint(t,i=new Ht){const s=i,l=Math.PI*2;let u=this.aEndAngle-this.aStartAngle;const h=Math.abs(u)<Number.EPSILON;for(;u<0;)u+=l;for(;u>l;)u-=l;u<Number.EPSILON&&(h?u=0:u=l),this.aClockwise===!0&&!h&&(u===l?u=-l:u=u-l);const d=this.aStartAngle+t*u;let p=this.aX+this.xRadius*Math.cos(d),g=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),m=Math.sin(this.aRotation),x=p-this.aX,S=g-this.aY;p=x*v-S*m+this.aX,g=x*m+S*v+this.aY}return s.set(p,g)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ib extends Om{constructor(t,i,s,l,u,h){super(t,i,s,s,l,u,h),this.isArcCurve=!0,this.type="ArcCurve"}}function Pm(){let o=0,t=0,i=0,s=0;function l(u,h,d,p){o=u,t=d,i=-3*u+3*h-2*d-p,s=2*u-2*h+d+p}return{initCatmullRom:function(u,h,d,p,g){l(h,d,g*(d-u),g*(p-h))},initNonuniformCatmullRom:function(u,h,d,p,g,v,m){let x=(h-u)/g-(d-u)/(g+v)+(d-h)/v,S=(d-h)/v-(p-h)/(v+m)+(p-d)/m;x*=v,S*=v,l(h,d,x,S)},calc:function(u){const h=u*u,d=h*u;return o+t*u+i*h+s*d}}}const Hc=new G,hp=new Pm,dp=new Pm,pp=new Pm;class hm extends la{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new G){const s=i,l=this.points,u=l.length,h=(u-(this.closed?0:1))*t;let d=Math.floor(h),p=h-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/u)+1)*u:p===0&&d===u-1&&(d=u-2,p=1);let g,v;this.closed||d>0?g=l[(d-1)%u]:(Hc.subVectors(l[0],l[1]).add(l[0]),g=Hc);const m=l[d%u],x=l[(d+1)%u];if(this.closed||d+2<u?v=l[(d+2)%u]:(Hc.subVectors(l[u-1],l[u-2]).add(l[u-1]),v=Hc),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let T=Math.pow(g.distanceToSquared(m),S),A=Math.pow(m.distanceToSquared(x),S),M=Math.pow(x.distanceToSquared(v),S);A<1e-4&&(A=1),T<1e-4&&(T=A),M<1e-4&&(M=A),hp.initNonuniformCatmullRom(g.x,m.x,x.x,v.x,T,A,M),dp.initNonuniformCatmullRom(g.y,m.y,x.y,v.y,T,A,M),pp.initNonuniformCatmullRom(g.z,m.z,x.z,v.z,T,A,M)}else this.curveType==="catmullrom"&&(hp.initCatmullRom(g.x,m.x,x.x,v.x,this.tension),dp.initCatmullRom(g.y,m.y,x.y,v.y,this.tension),pp.initCatmullRom(g.z,m.z,x.z,v.z,this.tension));return s.set(hp.calc(p),dp.calc(p),pp.calc(p)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new G().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Hx(o,t,i,s,l){const u=(s-t)*.5,h=(l-i)*.5,d=o*o,p=o*d;return(2*i-2*s+u+h)*p+(-3*i+3*s-2*u-h)*d+u*o+i}function ab(o,t){const i=1-o;return i*i*t}function sb(o,t){return 2*(1-o)*o*t}function rb(o,t){return o*o*t}function Ol(o,t,i,s){return ab(o,t)+sb(o,i)+rb(o,s)}function ob(o,t){const i=1-o;return i*i*i*t}function lb(o,t){const i=1-o;return 3*i*i*o*t}function ub(o,t){return 3*(1-o)*o*o*t}function cb(o,t){return o*o*o*t}function Pl(o,t,i,s,l){return ob(o,t)+lb(o,i)+ub(o,s)+cb(o,l)}class tS extends la{constructor(t=new Ht,i=new Ht,s=new Ht,l=new Ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new Ht){const s=i,l=this.v0,u=this.v1,h=this.v2,d=this.v3;return s.set(Pl(t,l.x,u.x,h.x,d.x),Pl(t,l.y,u.y,h.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class fb extends la{constructor(t=new G,i=new G,s=new G,l=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new G){const s=i,l=this.v0,u=this.v1,h=this.v2,d=this.v3;return s.set(Pl(t,l.x,u.x,h.x,d.x),Pl(t,l.y,u.y,h.y,d.y),Pl(t,l.z,u.z,h.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class eS extends la{constructor(t=new Ht,i=new Ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Ht){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Ht){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class hb extends la{constructor(t=new G,i=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new G){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new G){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nS extends la{constructor(t=new Ht,i=new Ht,s=new Ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new Ht){const s=i,l=this.v0,u=this.v1,h=this.v2;return s.set(Ol(t,l.x,u.x,h.x),Ol(t,l.y,u.y,h.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class iS extends la{constructor(t=new G,i=new G,s=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new G){const s=i,l=this.v0,u=this.v1,h=this.v2;return s.set(Ol(t,l.x,u.x,h.x),Ol(t,l.y,u.y,h.y),Ol(t,l.z,u.z,h.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class aS extends la{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Ht){const s=i,l=this.points,u=(l.length-1)*t,h=Math.floor(u),d=u-h,p=l[h===0?h:h-1],g=l[h],v=l[h>l.length-2?l.length-1:h+1],m=l[h>l.length-3?l.length-1:h+2];return s.set(Hx(d,p.x,g.x,v.x,m.x),Hx(d,p.y,g.y,v.y,m.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Ht().fromArray(l))}return this}}var sf=Object.freeze({__proto__:null,ArcCurve:ib,CatmullRomCurve3:hm,CubicBezierCurve:tS,CubicBezierCurve3:fb,EllipseCurve:Om,LineCurve:eS,LineCurve3:hb,QuadraticBezierCurve:nS,QuadraticBezierCurve3:iS,SplineCurve:aS});class db extends la{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sf[s](i,t))}return this}getPoint(t,i){const s=t*this.getLength(),l=this.getCurveLengths();let u=0;for(;u<l.length;){if(l[u]>=s){const h=l[u]-s,d=this.curves[u],p=d.getLength(),g=p===0?0:1-h/p;return d.getPointAt(g,i)}u++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let s=0,l=this.curves.length;s<l;s++)i+=this.curves[s].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let s;for(let l=0,u=this.curves;l<u.length;l++){const h=u[l],d=h.isEllipseCurve?t*2:h.isLineCurve||h.isLineCurve3?1:h.isSplineCurve?t*h.points.length:t,p=h.getPoints(d);for(let g=0;g<p.length;g++){const v=p[g];s&&s.equals(v)||(i.push(v),s=v)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,s=this.curves.length;i<s;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(new sf[l.type]().fromJSON(l))}return this}}class Gx extends db{constructor(t){super(),this.type="Path",this.currentPoint=new Ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,s=t.length;i<s;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const s=new eS(this.currentPoint.clone(),new Ht(t,i));return this.curves.push(s),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,s,l){const u=new nS(this.currentPoint.clone(),new Ht(t,i),new Ht(s,l));return this.curves.push(u),this.currentPoint.set(s,l),this}bezierCurveTo(t,i,s,l,u,h){const d=new tS(this.currentPoint.clone(),new Ht(t,i),new Ht(s,l),new Ht(u,h));return this.curves.push(d),this.currentPoint.set(u,h),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),s=new aS(i);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,s,l,u,h){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(t+d,i+p,s,l,u,h),this}absarc(t,i,s,l,u,h){return this.absellipse(t,i,s,s,l,u,h),this}ellipse(t,i,s,l,u,h,d,p){const g=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(t+g,i+v,s,l,u,h,d,p),this}absellipse(t,i,s,l,u,h,d,p){const g=new Om(t,i,s,l,u,h,d,p);if(this.curves.length>0){const m=g.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(g);const v=g.getPoint(1);return this.currentPoint.copy(v),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class sS extends Gx{constructor(t){super(t),this.uuid=nr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const i=[];for(let s=0,l=this.holes.length;s<l;s++)i[s]=this.holes[s].getPoints(t);return i}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let i=0,s=this.holes.length;i<s;i++){const l=this.holes[i];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(new Gx().fromJSON(l))}return this}}function pb(o,t,i=2){const s=t&&t.length,l=s?t[0]*i:o.length;let u=rS(o,0,l,i,!0);const h=[];if(!u||u.next===u.prev)return h;let d,p,g;if(s&&(u=xb(o,t,u,i)),o.length>80*i){d=1/0,p=1/0;let v=-1/0,m=-1/0;for(let x=i;x<l;x+=i){const S=o[x],T=o[x+1];S<d&&(d=S),T<p&&(p=T),S>v&&(v=S),T>m&&(m=T)}g=Math.max(v-d,m-p),g=g!==0?32767/g:0}return ql(u,h,i,d,p,g,0),h}function rS(o,t,i,s,l){let u;if(l===Db(o,t,i,s)>0)for(let h=t;h<i;h+=s)u=Vx(h/s|0,o[h],o[h+1],u);else for(let h=i-s;h>=t;h-=s)u=Vx(h/s|0,o[h],o[h+1],u);return u&&xo(u,u.next)&&(Wl(u),u=u.next),u}function er(o,t){if(!o)return o;t||(t=o);let i=o,s;do if(s=!1,!i.steiner&&(xo(i,i.next)||sn(i.prev,i,i.next)===0)){if(Wl(i),i=t=i.prev,i===i.next)break;s=!0}else i=i.next;while(s||i!==t);return t}function ql(o,t,i,s,l,u,h){if(!o)return;!h&&u&&Tb(o,s,l,u);let d=o;for(;o.prev!==o.next;){const p=o.prev,g=o.next;if(u?gb(o,s,l,u):mb(o)){t.push(p.i,o.i,g.i),Wl(o),o=g.next,d=g.next;continue}if(o=g,o===d){h?h===1?(o=vb(er(o),t),ql(o,t,i,s,l,u,2)):h===2&&_b(o,t,i,s,l,u):ql(er(o),t,i,s,l,u,1);break}}}function mb(o){const t=o.prev,i=o,s=o.next;if(sn(t,i,s)>=0)return!1;const l=t.x,u=i.x,h=s.x,d=t.y,p=i.y,g=s.y,v=Math.min(l,u,h),m=Math.min(d,p,g),x=Math.max(l,u,h),S=Math.max(d,p,g);let T=s.next;for(;T!==t;){if(T.x>=v&&T.x<=x&&T.y>=m&&T.y<=S&&Dl(l,d,u,p,h,g,T.x,T.y)&&sn(T.prev,T,T.next)>=0)return!1;T=T.next}return!0}function gb(o,t,i,s){const l=o.prev,u=o,h=o.next;if(sn(l,u,h)>=0)return!1;const d=l.x,p=u.x,g=h.x,v=l.y,m=u.y,x=h.y,S=Math.min(d,p,g),T=Math.min(v,m,x),A=Math.max(d,p,g),M=Math.max(v,m,x),_=dm(S,T,t,i,s),w=dm(A,M,t,i,s);let D=o.prevZ,b=o.nextZ;for(;D&&D.z>=_&&b&&b.z<=w;){if(D.x>=S&&D.x<=A&&D.y>=T&&D.y<=M&&D!==l&&D!==h&&Dl(d,v,p,m,g,x,D.x,D.y)&&sn(D.prev,D,D.next)>=0||(D=D.prevZ,b.x>=S&&b.x<=A&&b.y>=T&&b.y<=M&&b!==l&&b!==h&&Dl(d,v,p,m,g,x,b.x,b.y)&&sn(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;D&&D.z>=_;){if(D.x>=S&&D.x<=A&&D.y>=T&&D.y<=M&&D!==l&&D!==h&&Dl(d,v,p,m,g,x,D.x,D.y)&&sn(D.prev,D,D.next)>=0)return!1;D=D.prevZ}for(;b&&b.z<=w;){if(b.x>=S&&b.x<=A&&b.y>=T&&b.y<=M&&b!==l&&b!==h&&Dl(d,v,p,m,g,x,b.x,b.y)&&sn(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function vb(o,t){let i=o;do{const s=i.prev,l=i.next.next;!xo(s,l)&&lS(s,i,i.next,l)&&Yl(s,l)&&Yl(l,s)&&(t.push(s.i,i.i,l.i),Wl(i),Wl(i.next),i=o=l),i=i.next}while(i!==o);return er(i)}function _b(o,t,i,s,l,u){let h=o;do{let d=h.next.next;for(;d!==h.prev;){if(h.i!==d.i&&Rb(h,d)){let p=uS(h,d);h=er(h,h.next),p=er(p,p.next),ql(h,t,i,s,l,u,0),ql(p,t,i,s,l,u,0);return}d=d.next}h=h.next}while(h!==o)}function xb(o,t,i,s){const l=[];for(let u=0,h=t.length;u<h;u++){const d=t[u]*s,p=u<h-1?t[u+1]*s:o.length,g=rS(o,d,p,s,!1);g===g.next&&(g.steiner=!0),l.push(Ab(g))}l.sort(yb);for(let u=0;u<l.length;u++)i=Sb(l[u],i);return i}function yb(o,t){let i=o.x-t.x;if(i===0&&(i=o.y-t.y,i===0)){const s=(o.next.y-o.y)/(o.next.x-o.x),l=(t.next.y-t.y)/(t.next.x-t.x);i=s-l}return i}function Sb(o,t){const i=Mb(o,t);if(!i)return t;const s=uS(i,o);return er(s,s.next),er(i,i.next)}function Mb(o,t){let i=t;const s=o.x,l=o.y;let u=-1/0,h;if(xo(o,i))return i;do{if(xo(o,i.next))return i.next;if(l<=i.y&&l>=i.next.y&&i.next.y!==i.y){const m=i.x+(l-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(m<=s&&m>u&&(u=m,h=i.x<i.next.x?i:i.next,m===s))return h}i=i.next}while(i!==t);if(!h)return null;const d=h,p=h.x,g=h.y;let v=1/0;i=h;do{if(s>=i.x&&i.x>=p&&s!==i.x&&oS(l<g?s:u,l,p,g,l<g?u:s,l,i.x,i.y)){const m=Math.abs(l-i.y)/(s-i.x);Yl(i,o)&&(m<v||m===v&&(i.x>h.x||i.x===h.x&&Eb(h,i)))&&(h=i,v=m)}i=i.next}while(i!==d);return h}function Eb(o,t){return sn(o.prev,o,t.prev)<0&&sn(t.next,o,o.next)<0}function Tb(o,t,i,s){let l=o;do l.z===0&&(l.z=dm(l.x,l.y,t,i,s)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==o);l.prevZ.nextZ=null,l.prevZ=null,bb(l)}function bb(o){let t,i=1;do{let s=o,l;o=null;let u=null;for(t=0;s;){t++;let h=s,d=0;for(let g=0;g<i&&(d++,h=h.nextZ,!!h);g++);let p=i;for(;d>0||p>0&&h;)d!==0&&(p===0||!h||s.z<=h.z)?(l=s,s=s.nextZ,d--):(l=h,h=h.nextZ,p--),u?u.nextZ=l:o=l,l.prevZ=u,u=l;s=h}u.nextZ=null,i*=2}while(t>1);return o}function dm(o,t,i,s,l){return o=(o-i)*l|0,t=(t-s)*l|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,o|t<<1}function Ab(o){let t=o,i=o;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==o);return i}function oS(o,t,i,s,l,u,h,d){return(l-h)*(t-d)>=(o-h)*(u-d)&&(o-h)*(s-d)>=(i-h)*(t-d)&&(i-h)*(u-d)>=(l-h)*(s-d)}function Dl(o,t,i,s,l,u,h,d){return!(o===h&&t===d)&&oS(o,t,i,s,l,u,h,d)}function Rb(o,t){return o.next.i!==t.i&&o.prev.i!==t.i&&!Cb(o,t)&&(Yl(o,t)&&Yl(t,o)&&wb(o,t)&&(sn(o.prev,o,t.prev)||sn(o,t.prev,t))||xo(o,t)&&sn(o.prev,o,o.next)>0&&sn(t.prev,t,t.next)>0)}function sn(o,t,i){return(t.y-o.y)*(i.x-t.x)-(t.x-o.x)*(i.y-t.y)}function xo(o,t){return o.x===t.x&&o.y===t.y}function lS(o,t,i,s){const l=Vc(sn(o,t,i)),u=Vc(sn(o,t,s)),h=Vc(sn(i,s,o)),d=Vc(sn(i,s,t));return!!(l!==u&&h!==d||l===0&&Gc(o,i,t)||u===0&&Gc(o,s,t)||h===0&&Gc(i,o,s)||d===0&&Gc(i,t,s))}function Gc(o,t,i){return t.x<=Math.max(o.x,i.x)&&t.x>=Math.min(o.x,i.x)&&t.y<=Math.max(o.y,i.y)&&t.y>=Math.min(o.y,i.y)}function Vc(o){return o>0?1:o<0?-1:0}function Cb(o,t){let i=o;do{if(i.i!==o.i&&i.next.i!==o.i&&i.i!==t.i&&i.next.i!==t.i&&lS(i,i.next,o,t))return!0;i=i.next}while(i!==o);return!1}function Yl(o,t){return sn(o.prev,o,o.next)<0?sn(o,t,o.next)>=0&&sn(o,o.prev,t)>=0:sn(o,t,o.prev)<0||sn(o,o.next,t)<0}function wb(o,t){let i=o,s=!1;const l=(o.x+t.x)/2,u=(o.y+t.y)/2;do i.y>u!=i.next.y>u&&i.next.y!==i.y&&l<(i.next.x-i.x)*(u-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==o);return s}function uS(o,t){const i=pm(o.i,o.x,o.y),s=pm(t.i,t.x,t.y),l=o.next,u=t.prev;return o.next=t,t.prev=o,i.next=l,l.prev=i,s.next=i,i.prev=s,u.next=s,s.prev=u,s}function Vx(o,t,i,s){const l=pm(o,t,i);return s?(l.next=s.next,l.prev=s,s.next.prev=l,s.next=l):(l.prev=l,l.next=l),l}function Wl(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function pm(o,t,i){return{i:o,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Db(o,t,i,s){let l=0;for(let u=t,h=i-s;u<i;u+=s)l+=(o[h]-o[u])*(o[u+1]+o[h+1]),h=u;return l}class Nb{static triangulate(t,i,s=2){return pb(t,i,s)}}class uo{static area(t){const i=t.length;let s=0;for(let l=i-1,u=0;u<i;l=u++)s+=t[l].x*t[u].y-t[u].x*t[l].y;return s*.5}static isClockWise(t){return uo.area(t)<0}static triangulateShape(t,i){const s=[],l=[],u=[];kx(t),Xx(s,t);let h=t.length;i.forEach(kx);for(let p=0;p<i.length;p++)l.push(h),h+=i[p].length,Xx(s,i[p]);const d=Nb.triangulate(s,l);for(let p=0;p<d.length;p+=3)u.push(d.slice(p,p+3));return u}}function kx(o){const t=o.length;t>2&&o[t-1].equals(o[0])&&o.pop()}function Xx(o,t){for(let i=0;i<t.length;i++)o.push(t[i].x),o.push(t[i].y)}class zm extends Rn{constructor(t=new sS([new Ht(.5,.5),new Ht(-.5,.5),new Ht(-.5,-.5),new Ht(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];const s=this,l=[],u=[];for(let d=0,p=t.length;d<p;d++){const g=t[d];h(g)}this.setAttribute("position",new Ze(l,3)),this.setAttribute("uv",new Ze(u,2)),this.computeVertexNormals();function h(d){const p=[],g=i.curveSegments!==void 0?i.curveSegments:12,v=i.steps!==void 0?i.steps:1,m=i.depth!==void 0?i.depth:1;let x=i.bevelEnabled!==void 0?i.bevelEnabled:!0,S=i.bevelThickness!==void 0?i.bevelThickness:.2,T=i.bevelSize!==void 0?i.bevelSize:S-.1,A=i.bevelOffset!==void 0?i.bevelOffset:0,M=i.bevelSegments!==void 0?i.bevelSegments:3;const _=i.extrudePath,w=i.UVGenerator!==void 0?i.UVGenerator:Ub;let D,b=!1,I,z,P,V;_&&(D=_.getSpacedPoints(v),b=!0,x=!1,I=_.computeFrenetFrames(v,!1),z=new G,P=new G,V=new G),x||(M=0,S=0,T=0,A=0);const N=d.extractPoints(g);let E=N.shape;const U=N.holes;if(!uo.isClockWise(E)){E=E.reverse();for(let Mt=0,_t=U.length;Mt<_t;Mt++){const ht=U[Mt];uo.isClockWise(ht)&&(U[Mt]=ht.reverse())}}function q(Mt){const ht=10000000000000001e-36;let vt=Mt[0];for(let Ct=1;Ct<=Mt.length;Ct++){const Nt=Ct%Mt.length,zt=Mt[Nt],oe=zt.x-vt.x,re=zt.y-vt.y,O=oe*oe+re*re,R=Math.max(Math.abs(zt.x),Math.abs(zt.y),Math.abs(vt.x),Math.abs(vt.y)),st=ht*R*R;if(O<=st){Mt.splice(Nt,1),Ct--;continue}vt=zt}}q(E),U.forEach(q);const nt=U.length,Q=E;for(let Mt=0;Mt<nt;Mt++){const _t=U[Mt];E=E.concat(_t)}function F(Mt,_t,ht){return _t||console.error("THREE.ExtrudeGeometry: vec does not exist"),Mt.clone().addScaledVector(_t,ht)}const $=E.length;function Z(Mt,_t,ht){let vt,Ct,Nt;const zt=Mt.x-_t.x,oe=Mt.y-_t.y,re=ht.x-Mt.x,O=ht.y-Mt.y,R=zt*zt+oe*oe,st=zt*O-oe*re;if(Math.abs(st)>Number.EPSILON){const pt=Math.sqrt(R),Ut=Math.sqrt(re*re+O*O),St=_t.x-oe/pt,Qt=_t.y+zt/pt,Bt=ht.x-O/Ut,Jt=ht.y+re/Ut,te=((Bt-St)*O-(Jt-Qt)*re)/(zt*O-oe*re);vt=St+zt*te-Mt.x,Ct=Qt+oe*te-Mt.y;const Ot=vt*vt+Ct*Ct;if(Ot<=2)return new Ht(vt,Ct);Nt=Math.sqrt(Ot/2)}else{let pt=!1;zt>Number.EPSILON?re>Number.EPSILON&&(pt=!0):zt<-Number.EPSILON?re<-Number.EPSILON&&(pt=!0):Math.sign(oe)===Math.sign(O)&&(pt=!0),pt?(vt=-oe,Ct=zt,Nt=Math.sqrt(R)):(vt=zt,Ct=oe,Nt=Math.sqrt(R/2))}return new Ht(vt/Nt,Ct/Nt)}const lt=[];for(let Mt=0,_t=Q.length,ht=_t-1,vt=Mt+1;Mt<_t;Mt++,ht++,vt++)ht===_t&&(ht=0),vt===_t&&(vt=0),lt[Mt]=Z(Q[Mt],Q[ht],Q[vt]);const xt=[];let Tt,Vt=lt.concat();for(let Mt=0,_t=nt;Mt<_t;Mt++){const ht=U[Mt];Tt=[];for(let vt=0,Ct=ht.length,Nt=Ct-1,zt=vt+1;vt<Ct;vt++,Nt++,zt++)Nt===Ct&&(Nt=0),zt===Ct&&(zt=0),Tt[vt]=Z(ht[vt],ht[Nt],ht[zt]);xt.push(Tt),Vt=Vt.concat(Tt)}let se;if(M===0)se=uo.triangulateShape(Q,U);else{const Mt=[],_t=[];for(let ht=0;ht<M;ht++){const vt=ht/M,Ct=S*Math.cos(vt*Math.PI/2),Nt=T*Math.sin(vt*Math.PI/2)+A;for(let zt=0,oe=Q.length;zt<oe;zt++){const re=F(Q[zt],lt[zt],Nt);Rt(re.x,re.y,-Ct),vt===0&&Mt.push(re)}for(let zt=0,oe=nt;zt<oe;zt++){const re=U[zt];Tt=xt[zt];const O=[];for(let R=0,st=re.length;R<st;R++){const pt=F(re[R],Tt[R],Nt);Rt(pt.x,pt.y,-Ct),vt===0&&O.push(pt)}vt===0&&_t.push(O)}}se=uo.triangulateShape(Mt,_t)}const X=se.length,gt=T+A;for(let Mt=0;Mt<$;Mt++){const _t=x?F(E[Mt],Vt[Mt],gt):E[Mt];b?(P.copy(I.normals[0]).multiplyScalar(_t.x),z.copy(I.binormals[0]).multiplyScalar(_t.y),V.copy(D[0]).add(P).add(z),Rt(V.x,V.y,V.z)):Rt(_t.x,_t.y,0)}for(let Mt=1;Mt<=v;Mt++)for(let _t=0;_t<$;_t++){const ht=x?F(E[_t],Vt[_t],gt):E[_t];b?(P.copy(I.normals[Mt]).multiplyScalar(ht.x),z.copy(I.binormals[Mt]).multiplyScalar(ht.y),V.copy(D[Mt]).add(P).add(z),Rt(V.x,V.y,V.z)):Rt(ht.x,ht.y,m/v*Mt)}for(let Mt=M-1;Mt>=0;Mt--){const _t=Mt/M,ht=S*Math.cos(_t*Math.PI/2),vt=T*Math.sin(_t*Math.PI/2)+A;for(let Ct=0,Nt=Q.length;Ct<Nt;Ct++){const zt=F(Q[Ct],lt[Ct],vt);Rt(zt.x,zt.y,m+ht)}for(let Ct=0,Nt=U.length;Ct<Nt;Ct++){const zt=U[Ct];Tt=xt[Ct];for(let oe=0,re=zt.length;oe<re;oe++){const O=F(zt[oe],Tt[oe],vt);b?Rt(O.x,O.y+D[v-1].y,D[v-1].x+ht):Rt(O.x,O.y,m+ht)}}}Y(),J();function Y(){const Mt=l.length/3;if(x){let _t=0,ht=$*_t;for(let vt=0;vt<X;vt++){const Ct=se[vt];wt(Ct[2]+ht,Ct[1]+ht,Ct[0]+ht)}_t=v+M*2,ht=$*_t;for(let vt=0;vt<X;vt++){const Ct=se[vt];wt(Ct[0]+ht,Ct[1]+ht,Ct[2]+ht)}}else{for(let _t=0;_t<X;_t++){const ht=se[_t];wt(ht[2],ht[1],ht[0])}for(let _t=0;_t<X;_t++){const ht=se[_t];wt(ht[0]+$*v,ht[1]+$*v,ht[2]+$*v)}}s.addGroup(Mt,l.length/3-Mt,0)}function J(){const Mt=l.length/3;let _t=0;yt(Q,_t),_t+=Q.length;for(let ht=0,vt=U.length;ht<vt;ht++){const Ct=U[ht];yt(Ct,_t),_t+=Ct.length}s.addGroup(Mt,l.length/3-Mt,1)}function yt(Mt,_t){let ht=Mt.length;for(;--ht>=0;){const vt=ht;let Ct=ht-1;Ct<0&&(Ct=Mt.length-1);for(let Nt=0,zt=v+M*2;Nt<zt;Nt++){const oe=$*Nt,re=$*(Nt+1),O=_t+vt+oe,R=_t+Ct+oe,st=_t+Ct+re,pt=_t+vt+re;At(O,R,st,pt)}}}function Rt(Mt,_t,ht){p.push(Mt),p.push(_t),p.push(ht)}function wt(Mt,_t,ht){Lt(Mt),Lt(_t),Lt(ht);const vt=l.length/3,Ct=w.generateTopUV(s,l,vt-3,vt-2,vt-1);B(Ct[0]),B(Ct[1]),B(Ct[2])}function At(Mt,_t,ht,vt){Lt(Mt),Lt(_t),Lt(vt),Lt(_t),Lt(ht),Lt(vt);const Ct=l.length/3,Nt=w.generateSideWallUV(s,l,Ct-6,Ct-3,Ct-2,Ct-1);B(Nt[0]),B(Nt[1]),B(Nt[3]),B(Nt[1]),B(Nt[2]),B(Nt[3])}function Lt(Mt){l.push(p[Mt*3+0]),l.push(p[Mt*3+1]),l.push(p[Mt*3+2])}function B(Mt){u.push(Mt.x),u.push(Mt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes,s=this.parameters.options;return Lb(i,s,t)}static fromJSON(t,i){const s=[];for(let u=0,h=t.shapes.length;u<h;u++){const d=i[t.shapes[u]];s.push(d)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new sf[l.type]().fromJSON(l)),new zm(s,t.options)}}const Ub={generateTopUV:function(o,t,i,s,l){const u=t[i*3],h=t[i*3+1],d=t[s*3],p=t[s*3+1],g=t[l*3],v=t[l*3+1];return[new Ht(u,h),new Ht(d,p),new Ht(g,v)]},generateSideWallUV:function(o,t,i,s,l,u){const h=t[i*3],d=t[i*3+1],p=t[i*3+2],g=t[s*3],v=t[s*3+1],m=t[s*3+2],x=t[l*3],S=t[l*3+1],T=t[l*3+2],A=t[u*3],M=t[u*3+1],_=t[u*3+2];return Math.abs(d-v)<Math.abs(h-g)?[new Ht(h,1-p),new Ht(g,1-m),new Ht(x,1-T),new Ht(A,1-_)]:[new Ht(d,1-p),new Ht(v,1-m),new Ht(S,1-T),new Ht(M,1-_)]}};function Lb(o,t,i){if(i.shapes=[],Array.isArray(o))for(let s=0,l=o.length;s<l;s++){const u=o[s];i.shapes.push(u.uuid)}else i.shapes.push(o.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}class Im extends Lm{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,u,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Im(t.radius,t.detail)}}class To extends Rn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(s),p=Math.floor(l),g=d+1,v=p+1,m=t/d,x=i/p,S=[],T=[],A=[],M=[];for(let _=0;_<v;_++){const w=_*x-h;for(let D=0;D<g;D++){const b=D*m-u;T.push(b,-w,0),A.push(0,0,1),M.push(D/d),M.push(1-_/p)}}for(let _=0;_<p;_++)for(let w=0;w<d;w++){const D=w+g*_,b=w+g*(_+1),I=w+1+g*(_+1),z=w+1+g*_;S.push(D,b,z),S.push(b,I,z)}this.setIndex(S),this.setAttribute("position",new Ze(T,3)),this.setAttribute("normal",new Ze(A,3)),this.setAttribute("uv",new Ze(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new To(t.width,t.height,t.widthSegments,t.heightSegments)}}class Bm extends Rn{constructor(t=.5,i=1,s=32,l=1,u=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:u,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],p=[],g=[],v=[];let m=t;const x=(i-t)/l,S=new G,T=new Ht;for(let A=0;A<=l;A++){for(let M=0;M<=s;M++){const _=u+M/s*h;S.x=m*Math.cos(_),S.y=m*Math.sin(_),p.push(S.x,S.y,S.z),g.push(0,0,1),T.x=(S.x/i+1)/2,T.y=(S.y/i+1)/2,v.push(T.x,T.y)}m+=x}for(let A=0;A<l;A++){const M=A*(s+1);for(let _=0;_<s;_++){const w=_+M,D=w,b=w+s+1,I=w+s+2,z=w+1;d.push(D,b,z),d.push(b,I,z)}}this.setIndex(d),this.setAttribute("position",new Ze(p,3)),this.setAttribute("normal",new Ze(g,3)),this.setAttribute("uv",new Ze(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bm(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class yo extends Rn{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(h+d,Math.PI);let g=0;const v=[],m=new G,x=new G,S=[],T=[],A=[],M=[];for(let _=0;_<=s;_++){const w=[],D=_/s;let b=0;_===0&&h===0?b=.5/i:_===s&&p===Math.PI&&(b=-.5/i);for(let I=0;I<=i;I++){const z=I/i;m.x=-t*Math.cos(l+z*u)*Math.sin(h+D*d),m.y=t*Math.cos(h+D*d),m.z=t*Math.sin(l+z*u)*Math.sin(h+D*d),T.push(m.x,m.y,m.z),x.copy(m).normalize(),A.push(x.x,x.y,x.z),M.push(z+b,1-D),w.push(g++)}v.push(w)}for(let _=0;_<s;_++)for(let w=0;w<i;w++){const D=v[_][w+1],b=v[_][w],I=v[_+1][w],z=v[_+1][w+1];(_!==0||h>0)&&S.push(D,b,z),(_!==s-1||p<Math.PI)&&S.push(b,I,z)}this.setIndex(S),this.setAttribute("position",new Ze(T,3)),this.setAttribute("normal",new Ze(A,3)),this.setAttribute("uv",new Ze(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yo(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class rf extends Rn{constructor(t=new iS(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),i=64,s=1,l=8,u=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:l,closed:u};const h=t.computeFrenetFrames(i,u);this.tangents=h.tangents,this.normals=h.normals,this.binormals=h.binormals;const d=new G,p=new G,g=new Ht;let v=new G;const m=[],x=[],S=[],T=[];A(),this.setIndex(T),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(x,3)),this.setAttribute("uv",new Ze(S,2));function A(){for(let D=0;D<i;D++)M(D);M(u===!1?i:0),w(),_()}function M(D){v=t.getPointAt(D/i,v);const b=h.normals[D],I=h.binormals[D];for(let z=0;z<=l;z++){const P=z/l*Math.PI*2,V=Math.sin(P),N=-Math.cos(P);p.x=N*b.x+V*I.x,p.y=N*b.y+V*I.y,p.z=N*b.z+V*I.z,p.normalize(),x.push(p.x,p.y,p.z),d.x=v.x+s*p.x,d.y=v.y+s*p.y,d.z=v.z+s*p.z,m.push(d.x,d.y,d.z)}}function _(){for(let D=1;D<=i;D++)for(let b=1;b<=l;b++){const I=(l+1)*(D-1)+(b-1),z=(l+1)*D+(b-1),P=(l+1)*D+b,V=(l+1)*(D-1)+b;T.push(I,z,V),T.push(z,P,V)}}function w(){for(let D=0;D<=i;D++)for(let b=0;b<=l;b++)g.x=D/i,g.y=b/l,S.push(g.x,g.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new rf(new sf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Ob extends rn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Pb extends sr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new he(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new he(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=By,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zb extends sr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=QE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ib extends sr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class cS extends yn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new he(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class Bb extends cS{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new he(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const mp=new Ve,qx=new G,Yx=new G;class Fb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=qi,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nm,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new cn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;qx.setFromMatrixPosition(t.matrixWorld),i.position.copy(qx),Yx.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Yx),i.updateMatrixWorld(),mp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mp,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(mp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Fm extends Wy{constructor(t=-1,i=1,s=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,h=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=g*this.view.offsetX,h=u+g*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Hb extends Fb{constructor(){super(new Fm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Gb extends cS{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new Hb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Vb extends vi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class fS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Wx(o,t,i,s){const l=kb(s);switch(i){case Py:return o*t;case Tm:return o*t/l.components*l.byteLength;case bm:return o*t/l.components*l.byteLength;case Iy:return o*t*2/l.components*l.byteLength;case Am:return o*t*2/l.components*l.byteLength;case zy:return o*t*3/l.components*l.byteLength;case ki:return o*t*4/l.components*l.byteLength;case Rm:return o*t*4/l.components*l.byteLength;case Wc:case jc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Zc:case Qc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Bp:case Hp:return Math.max(o,16)*Math.max(t,8)/4;case Ip:case Fp:return Math.max(o,8)*Math.max(t,8)/2;case Gp:case Vp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case kp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Xp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case qp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Yp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Wp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case jp:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Zp:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Qp:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Kp:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Jp:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case $p:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case tm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case em:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case nm:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case im:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case am:case sm:case rm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case om:case lm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case um:case cm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function kb(o){switch(o){case qi:case Ny:return{byteLength:1,components:1};case Il:case Uy:case Xi:return{byteLength:2,components:1};case Mm:case Em:return{byteLength:2,components:4};case tr:case Sm:case ra:return{byteLength:4,components:1};case Ly:case Oy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hS(){let o=null,t=!1,i=null,s=null;function l(u,h){i(u,h),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Xb(o){const t=new WeakMap;function i(d,p){const g=d.array,v=d.usage,m=g.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,g,v),d.onUploadCallback();let S;if(g instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)S=o.HALF_FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)S=o.SHORT;else if(g instanceof Uint32Array)S=o.UNSIGNED_INT;else if(g instanceof Int32Array)S=o.INT;else if(g instanceof Int8Array)S=o.BYTE;else if(g instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:x,type:S,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:m}}function s(d,p,g){const v=p.array,m=p.updateRanges;if(o.bindBuffer(g,d),m.length===0)o.bufferSubData(g,0,v);else{m.sort((S,T)=>S.start-T.start);let x=0;for(let S=1;S<m.length;S++){const T=m[x],A=m[S];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++x,m[x]=A)}m.length=x+1;for(let S=0,T=m.length;S<T;S++){const A=m[S];o.bufferSubData(g,A.start*v.BYTES_PER_ELEMENT,v,A.start,A.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(o.deleteBuffer(p.buffer),t.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=t.get(d);if(g===void 0)t.set(d,i(d,p));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(g.buffer,d,p),g.version=d.version}}return{get:l,remove:u,update:h}}var qb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Yb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Kb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Jb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$b=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,tA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,eA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,aA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,sA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,rA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,oA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,dA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,pA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,mA=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,gA=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,vA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_A=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,yA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,SA="gl_FragColor = linearToOutputTexel( gl_FragColor );",MA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,TA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,bA=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,AA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RA=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,CA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,DA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UA=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,LA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,OA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PA=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zA=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,IA=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,BA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FA=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,GA=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,VA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kA=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,XA=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,qA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,YA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,WA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,KA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,JA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$A=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,t2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,e2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,n2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,i2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,a2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,s2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,r2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,o2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,l2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,u2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,c2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,f2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,d2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,p2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,m2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,g2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,v2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,_2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,x2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,y2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,S2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,M2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,E2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,T2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,b2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,A2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,R2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,C2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,w2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,D2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,N2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,U2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L2=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,O2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,P2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,z2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,I2=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,B2=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,F2=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,H2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,G2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,V2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,k2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const X2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,q2=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Y2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,W2=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,j2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Z2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Q2=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,K2=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,J2=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,$2=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,tR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,eR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nR=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iR=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,aR=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,sR=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rR=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oR=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,lR=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,uR=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cR=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,fR=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hR=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dR=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pR=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,mR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_R=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,xR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,SR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,MR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ER=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Me={alphahash_fragment:qb,alphahash_pars_fragment:Yb,alphamap_fragment:Wb,alphamap_pars_fragment:jb,alphatest_fragment:Zb,alphatest_pars_fragment:Qb,aomap_fragment:Kb,aomap_pars_fragment:Jb,batching_pars_vertex:$b,batching_vertex:tA,begin_vertex:eA,beginnormal_vertex:nA,bsdfs:iA,iridescence_fragment:aA,bumpmap_pars_fragment:sA,clipping_planes_fragment:rA,clipping_planes_pars_fragment:oA,clipping_planes_pars_vertex:lA,clipping_planes_vertex:uA,color_fragment:cA,color_pars_fragment:fA,color_pars_vertex:hA,color_vertex:dA,common:pA,cube_uv_reflection_fragment:mA,defaultnormal_vertex:gA,displacementmap_pars_vertex:vA,displacementmap_vertex:_A,emissivemap_fragment:xA,emissivemap_pars_fragment:yA,colorspace_fragment:SA,colorspace_pars_fragment:MA,envmap_fragment:EA,envmap_common_pars_fragment:TA,envmap_pars_fragment:bA,envmap_pars_vertex:AA,envmap_physical_pars_fragment:IA,envmap_vertex:RA,fog_vertex:CA,fog_pars_vertex:wA,fog_fragment:DA,fog_pars_fragment:NA,gradientmap_pars_fragment:UA,lightmap_pars_fragment:LA,lights_lambert_fragment:OA,lights_lambert_pars_fragment:PA,lights_pars_begin:zA,lights_toon_fragment:BA,lights_toon_pars_fragment:FA,lights_phong_fragment:HA,lights_phong_pars_fragment:GA,lights_physical_fragment:VA,lights_physical_pars_fragment:kA,lights_fragment_begin:XA,lights_fragment_maps:qA,lights_fragment_end:YA,logdepthbuf_fragment:WA,logdepthbuf_pars_fragment:jA,logdepthbuf_pars_vertex:ZA,logdepthbuf_vertex:QA,map_fragment:KA,map_pars_fragment:JA,map_particle_fragment:$A,map_particle_pars_fragment:t2,metalnessmap_fragment:e2,metalnessmap_pars_fragment:n2,morphinstance_vertex:i2,morphcolor_vertex:a2,morphnormal_vertex:s2,morphtarget_pars_vertex:r2,morphtarget_vertex:o2,normal_fragment_begin:l2,normal_fragment_maps:u2,normal_pars_fragment:c2,normal_pars_vertex:f2,normal_vertex:h2,normalmap_pars_fragment:d2,clearcoat_normal_fragment_begin:p2,clearcoat_normal_fragment_maps:m2,clearcoat_pars_fragment:g2,iridescence_pars_fragment:v2,opaque_fragment:_2,packing:x2,premultiplied_alpha_fragment:y2,project_vertex:S2,dithering_fragment:M2,dithering_pars_fragment:E2,roughnessmap_fragment:T2,roughnessmap_pars_fragment:b2,shadowmap_pars_fragment:A2,shadowmap_pars_vertex:R2,shadowmap_vertex:C2,shadowmask_pars_fragment:w2,skinbase_vertex:D2,skinning_pars_vertex:N2,skinning_vertex:U2,skinnormal_vertex:L2,specularmap_fragment:O2,specularmap_pars_fragment:P2,tonemapping_fragment:z2,tonemapping_pars_fragment:I2,transmission_fragment:B2,transmission_pars_fragment:F2,uv_pars_fragment:H2,uv_pars_vertex:G2,uv_vertex:V2,worldpos_vertex:k2,background_vert:X2,background_frag:q2,backgroundCube_vert:Y2,backgroundCube_frag:W2,cube_vert:j2,cube_frag:Z2,depth_vert:Q2,depth_frag:K2,distanceRGBA_vert:J2,distanceRGBA_frag:$2,equirect_vert:tR,equirect_frag:eR,linedashed_vert:nR,linedashed_frag:iR,meshbasic_vert:aR,meshbasic_frag:sR,meshlambert_vert:rR,meshlambert_frag:oR,meshmatcap_vert:lR,meshmatcap_frag:uR,meshnormal_vert:cR,meshnormal_frag:fR,meshphong_vert:hR,meshphong_frag:dR,meshphysical_vert:pR,meshphysical_frag:mR,meshtoon_vert:gR,meshtoon_frag:vR,points_vert:_R,points_frag:xR,shadow_vert:yR,shadow_frag:SR,sprite_vert:MR,sprite_frag:ER},jt={common:{diffuse:{value:new he(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ve}},envmap:{envMap:{value:null},envMapRotation:{value:new ve},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ve}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ve}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ve},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ve},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ve},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ve}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ve}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ve}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new he(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new he(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0},uvTransform:{value:new ve}},sprite:{diffuse:{value:new he(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ve},alphaMap:{value:null},alphaMapTransform:{value:new ve},alphaTest:{value:0}}},aa={basic:{uniforms:Kn([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:Kn([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new he(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:Kn([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new he(0)},specular:{value:new he(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:Kn([jt.common,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.roughnessmap,jt.metalnessmap,jt.fog,jt.lights,{emissive:{value:new he(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:Kn([jt.common,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.gradientmap,jt.fog,jt.lights,{emissive:{value:new he(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:Kn([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:Kn([jt.points,jt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:Kn([jt.common,jt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:Kn([jt.common,jt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:Kn([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:Kn([jt.sprite,jt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new ve},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ve}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distanceRGBA:{uniforms:Kn([jt.common,jt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distanceRGBA_vert,fragmentShader:Me.distanceRGBA_frag},shadow:{uniforms:Kn([jt.lights,jt.fog,{color:{value:new he(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};aa.physical={uniforms:Kn([aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ve},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ve},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ve},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ve},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ve},sheen:{value:0},sheenColor:{value:new he(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ve},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ve},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ve},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ve},attenuationDistance:{value:0},attenuationColor:{value:new he(0)},specularColor:{value:new he(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ve},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ve},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ve}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const kc={r:0,b:0,g:0},qs=new Ni,TR=new Ve;function bR(o,t,i,s,l,u,h){const d=new he(0);let p=u===!0?0:1,g,v,m=null,x=0,S=null;function T(D){let b=D.isScene===!0?D.background:null;return b&&b.isTexture&&(b=(D.backgroundBlurriness>0?i:t).get(b)),b}function A(D){let b=!1;const I=T(D);I===null?_(d,p):I&&I.isColor&&(_(I,1),b=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||b)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(D,b){const I=T(b);I&&(I.isCubeTexture||I.mapping===of)?(v===void 0&&(v=new fn(new Eo(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:_o(aa.backgroundCube.uniforms),vertexShader:aa.backgroundCube.vertexShader,fragmentShader:aa.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(z,P,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),qs.copy(b.backgroundRotation),qs.x*=-1,qs.y*=-1,qs.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(qs.y*=-1,qs.z*=-1),v.material.uniforms.envMap.value=I,v.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(TR.makeRotationFromEuler(qs)),v.material.toneMapped=Le.getTransfer(I.colorSpace)!==Ye,(m!==I||x!==I.version||S!==o.toneMapping)&&(v.material.needsUpdate=!0,m=I,x=I.version,S=o.toneMapping),v.layers.enableAll(),D.unshift(v,v.geometry,v.material,0,0,null)):I&&I.isTexture&&(g===void 0&&(g=new fn(new To(2,2),new rn({name:"BackgroundMaterial",uniforms:_o(aa.background.uniforms),vertexShader:aa.background.vertexShader,fragmentShader:aa.background.fragmentShader,side:gs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(g)),g.material.uniforms.t2D.value=I,g.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,g.material.toneMapped=Le.getTransfer(I.colorSpace)!==Ye,I.matrixAutoUpdate===!0&&I.updateMatrix(),g.material.uniforms.uvTransform.value.copy(I.matrix),(m!==I||x!==I.version||S!==o.toneMapping)&&(g.material.needsUpdate=!0,m=I,x=I.version,S=o.toneMapping),g.layers.enableAll(),D.unshift(g,g.geometry,g.material,0,0,null))}function _(D,b){D.getRGB(kc,Yy(o)),s.buffers.color.setClear(kc.r,kc.g,kc.b,b,h)}function w(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,b=1){d.set(D),p=b,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,_(d,p)},render:A,addToRenderList:M,dispose:w}}function AR(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let u=l,h=!1;function d(E,U,H,q,nt){let Q=!1;const F=m(q,H,U);u!==F&&(u=F,g(u.object)),Q=S(E,q,H,nt),Q&&T(E,q,H,nt),nt!==null&&t.update(nt,o.ELEMENT_ARRAY_BUFFER),(Q||h)&&(h=!1,b(E,U,H,q),nt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(nt).buffer))}function p(){return o.createVertexArray()}function g(E){return o.bindVertexArray(E)}function v(E){return o.deleteVertexArray(E)}function m(E,U,H){const q=H.wireframe===!0;let nt=s[E.id];nt===void 0&&(nt={},s[E.id]=nt);let Q=nt[U.id];Q===void 0&&(Q={},nt[U.id]=Q);let F=Q[q];return F===void 0&&(F=x(p()),Q[q]=F),F}function x(E){const U=[],H=[],q=[];for(let nt=0;nt<i;nt++)U[nt]=0,H[nt]=0,q[nt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:H,attributeDivisors:q,object:E,attributes:{},index:null}}function S(E,U,H,q){const nt=u.attributes,Q=U.attributes;let F=0;const $=H.getAttributes();for(const Z in $)if($[Z].location>=0){const xt=nt[Z];let Tt=Q[Z];if(Tt===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(Tt=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(Tt=E.instanceColor)),xt===void 0||xt.attribute!==Tt||Tt&&xt.data!==Tt.data)return!0;F++}return u.attributesNum!==F||u.index!==q}function T(E,U,H,q){const nt={},Q=U.attributes;let F=0;const $=H.getAttributes();for(const Z in $)if($[Z].location>=0){let xt=Q[Z];xt===void 0&&(Z==="instanceMatrix"&&E.instanceMatrix&&(xt=E.instanceMatrix),Z==="instanceColor"&&E.instanceColor&&(xt=E.instanceColor));const Tt={};Tt.attribute=xt,xt&&xt.data&&(Tt.data=xt.data),nt[Z]=Tt,F++}u.attributes=nt,u.attributesNum=F,u.index=q}function A(){const E=u.newAttributes;for(let U=0,H=E.length;U<H;U++)E[U]=0}function M(E){_(E,0)}function _(E,U){const H=u.newAttributes,q=u.enabledAttributes,nt=u.attributeDivisors;H[E]=1,q[E]===0&&(o.enableVertexAttribArray(E),q[E]=1),nt[E]!==U&&(o.vertexAttribDivisor(E,U),nt[E]=U)}function w(){const E=u.newAttributes,U=u.enabledAttributes;for(let H=0,q=U.length;H<q;H++)U[H]!==E[H]&&(o.disableVertexAttribArray(H),U[H]=0)}function D(E,U,H,q,nt,Q,F){F===!0?o.vertexAttribIPointer(E,U,H,nt,Q):o.vertexAttribPointer(E,U,H,q,nt,Q)}function b(E,U,H,q){A();const nt=q.attributes,Q=H.getAttributes(),F=U.defaultAttributeValues;for(const $ in Q){const Z=Q[$];if(Z.location>=0){let lt=nt[$];if(lt===void 0&&($==="instanceMatrix"&&E.instanceMatrix&&(lt=E.instanceMatrix),$==="instanceColor"&&E.instanceColor&&(lt=E.instanceColor)),lt!==void 0){const xt=lt.normalized,Tt=lt.itemSize,Vt=t.get(lt);if(Vt===void 0)continue;const se=Vt.buffer,X=Vt.type,gt=Vt.bytesPerElement,Y=X===o.INT||X===o.UNSIGNED_INT||lt.gpuType===Sm;if(lt.isInterleavedBufferAttribute){const J=lt.data,yt=J.stride,Rt=lt.offset;if(J.isInstancedInterleavedBuffer){for(let wt=0;wt<Z.locationSize;wt++)_(Z.location+wt,J.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let wt=0;wt<Z.locationSize;wt++)M(Z.location+wt);o.bindBuffer(o.ARRAY_BUFFER,se);for(let wt=0;wt<Z.locationSize;wt++)D(Z.location+wt,Tt/Z.locationSize,X,xt,yt*gt,(Rt+Tt/Z.locationSize*wt)*gt,Y)}else{if(lt.isInstancedBufferAttribute){for(let J=0;J<Z.locationSize;J++)_(Z.location+J,lt.meshPerAttribute);E.isInstancedMesh!==!0&&q._maxInstanceCount===void 0&&(q._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let J=0;J<Z.locationSize;J++)M(Z.location+J);o.bindBuffer(o.ARRAY_BUFFER,se);for(let J=0;J<Z.locationSize;J++)D(Z.location+J,Tt/Z.locationSize,X,xt,Tt*gt,Tt/Z.locationSize*J*gt,Y)}}else if(F!==void 0){const xt=F[$];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(Z.location,xt);break;case 3:o.vertexAttrib3fv(Z.location,xt);break;case 4:o.vertexAttrib4fv(Z.location,xt);break;default:o.vertexAttrib1fv(Z.location,xt)}}}}w()}function I(){V();for(const E in s){const U=s[E];for(const H in U){const q=U[H];for(const nt in q)v(q[nt].object),delete q[nt];delete U[H]}delete s[E]}}function z(E){if(s[E.id]===void 0)return;const U=s[E.id];for(const H in U){const q=U[H];for(const nt in q)v(q[nt].object),delete q[nt];delete U[H]}delete s[E.id]}function P(E){for(const U in s){const H=s[U];if(H[E.id]===void 0)continue;const q=H[E.id];for(const nt in q)v(q[nt].object),delete q[nt];delete H[E.id]}}function V(){N(),h=!0,u!==l&&(u=l,g(u.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:N,dispose:I,releaseStatesOfGeometry:z,releaseStatesOfProgram:P,initAttributes:A,enableAttribute:M,disableUnusedAttributes:w}}function RR(o,t,i){let s;function l(g){s=g}function u(g,v){o.drawArrays(s,g,v),i.update(v,s,1)}function h(g,v,m){m!==0&&(o.drawArraysInstanced(s,g,v,m),i.update(v,s,m))}function d(g,v,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,v,0,m);let S=0;for(let T=0;T<m;T++)S+=v[T];i.update(S,s,1)}function p(g,v,m,x){if(m===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<g.length;T++)h(g[T],v[T],x[T]);else{S.multiDrawArraysInstancedWEBGL(s,g,0,v,0,x,0,m);let T=0;for(let A=0;A<m;A++)T+=v[A]*x[A];i.update(T,s,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function CR(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==ki&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const V=P===Xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==qi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ra&&!V)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const v=p(g);v!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",v,"instead."),g=v);const m=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),w=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),D=o.getParameter(o.MAX_VARYING_VECTORS),b=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=T>0,z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:m,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:w,maxVaryings:D,maxFragmentUniforms:b,vertexTextures:I,maxSamples:z}}function wR(o){const t=this;let i=null,s=0,l=!1,u=!1;const h=new Ws,d=new ve,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,x){const S=m.length!==0||x||s!==0||l;return l=x,s=m.length,S},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(m,x){i=v(m,x,0)},this.setState=function(m,x,S){const T=m.clippingPlanes,A=m.clipIntersection,M=m.clipShadows,_=o.get(m);if(!l||T===null||T.length===0||u&&!M)u?v(null):g();else{const w=u?0:s,D=w*4;let b=_.clippingState||null;p.value=b,b=v(T,x,D,S);for(let I=0;I!==D;++I)b[I]=i[I];_.clippingState=b,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=w}};function g(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(m,x,S,T){const A=m!==null?m.length:0;let M=null;if(A!==0){if(M=p.value,T!==!0||M===null){const _=S+A*4,w=x.matrixWorldInverse;d.getNormalMatrix(w),(M===null||M.length<_)&&(M=new Float32Array(_));for(let D=0,b=S;D!==A;++D,b+=4)h.copy(m[D]).applyMatrix4(w,d),h.normal.toArray(M,b),M[b+3]=h.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,M}}function DR(o){let t=new WeakMap;function i(h,d){return d===Lp?h.mapping=mo:d===Op&&(h.mapping=go),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Lp||d===Op)if(t.has(h)){const p=t.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const g=new qT(p.height);return g.fromEquirectangularTexture(o,h),t.set(h,g),h.addEventListener("dispose",l),i(g.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const co=4,jx=[.125,.215,.35,.446,.526,.582],Qs=20,gp=new Fm,Zx=new he;let vp=null,_p=0,xp=0,yp=!1;const js=(1+Math.sqrt(5))/2,ro=1/js,Qx=[new G(-js,ro,0),new G(js,ro,0),new G(-ro,0,js),new G(ro,0,js),new G(0,js,-ro),new G(0,js,ro),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],NR=new G;class Kx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,u={}){const{size:h=256,position:d=NR}=u;vp=this._renderer.getRenderTarget(),_p=this._renderer.getActiveCubeFace(),xp=this._renderer.getActiveMipmapLevel(),yp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ty(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$x(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vp,_p,xp),this._renderer.xr.enabled=yp,t.scissorTest=!1,Xc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===mo||t.mapping===go?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vp=this._renderer.getRenderTarget(),_p=this._renderer.getActiveCubeFace(),xp=this._renderer.getActiveMipmapLevel(),yp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:sa,minFilter:sa,generateMipmaps:!1,type:Xi,format:ki,colorSpace:vo,depthBuffer:!1},l=Jx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Jx(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=UR(u)),this._blurMaterial=LR(u,t,i)}return l}_compileMaterial(t){const i=new fn(this._lodPlanes[0],t);this._renderer.compile(i,gp)}_sceneToCubeUV(t,i,s,l,u){const p=new vi(90,1,i,s),g=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],m=this._renderer,x=m.autoClear,S=m.toneMapping;m.getClearColor(Zx),m.toneMapping=La,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(l),m.clearDepth(),m.setRenderTarget(null));const A=new kl({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),M=new fn(new Eo,A);let _=!1;const w=t.background;w?w.isColor&&(A.color.copy(w),t.background=null,_=!0):(A.color.copy(Zx),_=!0);for(let D=0;D<6;D++){const b=D%3;b===0?(p.up.set(0,g[D],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+v[D],u.y,u.z)):b===1?(p.up.set(0,0,g[D]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+v[D],u.z)):(p.up.set(0,g[D],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+v[D]));const I=this._cubeSize;Xc(l,b*I,D>2?I:0,I,I),m.setRenderTarget(l),_&&m.render(M,p),m.render(t,p)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=S,m.autoClear=x,t.background=w}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===mo||t.mapping===go;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ty()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$x());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new fn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const p=this._cubeSize;Xc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,gp)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=Qx[(l-u-1)%Qx.length];this._blur(t,u-1,u,h,d)}i.autoClear=s}_blur(t,i,s,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,s,l,"latitudinal",u),this._halfBlur(h,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,h,d){const p=this._renderer,g=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,m=new fn(this._lodPlanes[l],g),x=g.uniforms,S=this._sizeLods[s]-1,T=isFinite(u)?Math.PI/(2*S):2*Math.PI/(2*Qs-1),A=u/T,M=isFinite(u)?1+Math.floor(v*A):Qs;M>Qs&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Qs}`);const _=[];let w=0;for(let P=0;P<Qs;++P){const V=P/A,N=Math.exp(-V*V/2);_.push(N),P===0?w+=N:P<M&&(w+=2*N)}for(let P=0;P<_.length;P++)_[P]=_[P]/w;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=_,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:D}=this;x.dTheta.value=T,x.mipInt.value=D-s;const b=this._sizeLods[l],I=3*b*(l>D-co?l-D+co:0),z=4*(this._cubeSize-b);Xc(i,I,z,3*b,2*b),p.setRenderTarget(i),p.render(m,gp)}}function UR(o){const t=[],i=[],s=[];let l=o;const u=o-co+1+jx.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-co?p=jx[h-o+co-1]:h===0&&(p=0),s.push(p);const g=1/(d-2),v=-g,m=1+g,x=[v,v,m,v,m,m,v,v,m,m,v,m],S=6,T=6,A=3,M=2,_=1,w=new Float32Array(A*T*S),D=new Float32Array(M*T*S),b=new Float32Array(_*T*S);for(let z=0;z<S;z++){const P=z%3*2/3-1,V=z>2?0:-1,N=[P,V,0,P+2/3,V,0,P+2/3,V+1,0,P,V,0,P+2/3,V+1,0,P,V+1,0];w.set(N,A*T*z),D.set(x,M*T*z);const E=[z,z,z,z,z,z];b.set(E,_*T*z)}const I=new Rn;I.setAttribute("position",new Tn(w,A)),I.setAttribute("uv",new Tn(D,M)),I.setAttribute("faceIndex",new Tn(b,_)),t.push(I),l>co&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function Jx(o,t,i){const s=new Di(o,t,i);return s.texture.mapping=of,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Xc(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function LR(o,t,i){const s=new Float32Array(Qs),l=new G(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Qs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Hm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function $x(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Hm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function ty(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Hm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ua,depthTest:!1,depthWrite:!1})}function Hm(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function OR(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,g=p===Lp||p===Op,v=p===mo||p===go;if(g||v){let m=t.get(d);const x=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Kx(o)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const S=d.image;return g&&S&&S.height>0||v&&S&&l(S)?(i===null&&(i=new Kx(o)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",u),m.texture):null}}}return d}function l(d){let p=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&p++;return p===g}function u(d){const p=d.target;p.removeEventListener("dispose",u);const g=t.get(p);g!==void 0&&(t.delete(p),g.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function PR(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Vl("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function zR(o,t,i,s){const l={},u=new WeakMap;function h(m){const x=m.target;x.index!==null&&t.remove(x.index);for(const T in x.attributes)t.remove(x.attributes[T]);x.removeEventListener("dispose",h),delete l[x.id];const S=u.get(x);S&&(t.remove(S),u.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(m,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function p(m){const x=m.attributes;for(const S in x)t.update(x[S],o.ARRAY_BUFFER)}function g(m){const x=[],S=m.index,T=m.attributes.position;let A=0;if(S!==null){const w=S.array;A=S.version;for(let D=0,b=w.length;D<b;D+=3){const I=w[D+0],z=w[D+1],P=w[D+2];x.push(I,z,z,P,P,I)}}else if(T!==void 0){const w=T.array;A=T.version;for(let D=0,b=w.length/3-1;D<b;D+=3){const I=D+0,z=D+1,P=D+2;x.push(I,z,z,P,P,I)}}else return;const M=new(Hy(x)?qy:Xy)(x,1);M.version=A;const _=u.get(m);_&&t.remove(_),u.set(m,M)}function v(m){const x=u.get(m);if(x){const S=m.index;S!==null&&x.version<S.version&&g(m)}else g(m);return u.get(m)}return{get:d,update:p,getWireframeAttribute:v}}function IR(o,t,i){let s;function l(x){s=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function p(x,S){o.drawElements(s,S,u,x*h),i.update(S,s,1)}function g(x,S,T){T!==0&&(o.drawElementsInstanced(s,S,u,x*h,T),i.update(S,s,T))}function v(x,S,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,u,x,0,T);let M=0;for(let _=0;_<T;_++)M+=S[_];i.update(M,s,1)}function m(x,S,T,A){if(T===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<x.length;_++)g(x[_]/h,S[_],A[_]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,u,x,0,A,0,T);let _=0;for(let w=0;w<T;w++)_+=S[w]*A[w];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=g,this.renderMultiDraw=v,this.renderMultiDrawInstances=m}function BR(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function FR(o,t,i){const s=new WeakMap,l=new cn;function u(h,d,p){const g=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=v!==void 0?v.length:0;let x=s.get(d);if(x===void 0||x.count!==m){let E=function(){V.dispose(),s.delete(d),d.removeEventListener("dispose",E)};var S=E;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let b=0;T===!0&&(b=1),A===!0&&(b=2),M===!0&&(b=3);let I=d.attributes.position.count*b,z=1;I>t.maxTextureSize&&(z=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const P=new Float32Array(I*z*4*m),V=new Gy(P,I,z,m);V.type=ra,V.needsUpdate=!0;const N=b*4;for(let U=0;U<m;U++){const H=_[U],q=w[U],nt=D[U],Q=I*z*4*U;for(let F=0;F<H.count;F++){const $=F*N;T===!0&&(l.fromBufferAttribute(H,F),P[Q+$+0]=l.x,P[Q+$+1]=l.y,P[Q+$+2]=l.z,P[Q+$+3]=0),A===!0&&(l.fromBufferAttribute(q,F),P[Q+$+4]=l.x,P[Q+$+5]=l.y,P[Q+$+6]=l.z,P[Q+$+7]=0),M===!0&&(l.fromBufferAttribute(nt,F),P[Q+$+8]=l.x,P[Q+$+9]=l.y,P[Q+$+10]=l.z,P[Q+$+11]=nt.itemSize===4?l.w:1)}}x={count:m,texture:V,size:new Ht(I,z)},s.set(d,x),d.addEventListener("dispose",E)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let M=0;M<g.length;M++)T+=g[M];const A=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",A),p.getUniforms().setValue(o,"morphTargetInfluences",g)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function HR(o,t,i,s){let l=new WeakMap;function u(p){const g=s.render.frame,v=p.geometry,m=t.get(p,v);if(l.get(m)!==g&&(t.update(m),l.set(m,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==g&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,g))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==g&&(x.update(),l.set(x,g))}return m}function h(){l=new WeakMap}function d(p){const g=p.target;g.removeEventListener("dispose",d),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:u,dispose:h}}const dS=new Xn,ey=new Jy(1,1),pS=new Gy,mS=new wT,gS=new jy,ny=[],iy=[],ay=new Float32Array(16),sy=new Float32Array(9),ry=new Float32Array(4);function bo(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=ny[l];if(u===void 0&&(u=new Float32Array(l),ny[l]=u),t!==0){s.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function bn(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function An(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function lf(o,t){let i=iy[t];i===void 0&&(i=new Int32Array(t),iy[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function GR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function VR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;o.uniform2fv(this.addr,t),An(i,t)}}function kR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(bn(i,t))return;o.uniform3fv(this.addr,t),An(i,t)}}function XR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;o.uniform4fv(this.addr,t),An(i,t)}}function qR(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(bn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),An(i,t)}else{if(bn(i,s))return;ry.set(s),o.uniformMatrix2fv(this.addr,!1,ry),An(i,s)}}function YR(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(bn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),An(i,t)}else{if(bn(i,s))return;sy.set(s),o.uniformMatrix3fv(this.addr,!1,sy),An(i,s)}}function WR(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(bn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),An(i,t)}else{if(bn(i,s))return;ay.set(s),o.uniformMatrix4fv(this.addr,!1,ay),An(i,s)}}function jR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function ZR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;o.uniform2iv(this.addr,t),An(i,t)}}function QR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bn(i,t))return;o.uniform3iv(this.addr,t),An(i,t)}}function KR(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;o.uniform4iv(this.addr,t),An(i,t)}}function JR(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function $R(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(bn(i,t))return;o.uniform2uiv(this.addr,t),An(i,t)}}function tC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(bn(i,t))return;o.uniform3uiv(this.addr,t),An(i,t)}}function eC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(bn(i,t))return;o.uniform4uiv(this.addr,t),An(i,t)}}function nC(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(ey.compareFunction=Fy,u=ey):u=dS,i.setTexture2D(t||u,l)}function iC(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||mS,l)}function aC(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||gS,l)}function sC(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||pS,l)}function rC(o){switch(o){case 5126:return GR;case 35664:return VR;case 35665:return kR;case 35666:return XR;case 35674:return qR;case 35675:return YR;case 35676:return WR;case 5124:case 35670:return jR;case 35667:case 35671:return ZR;case 35668:case 35672:return QR;case 35669:case 35673:return KR;case 5125:return JR;case 36294:return $R;case 36295:return tC;case 36296:return eC;case 35678:case 36198:case 36298:case 36306:case 35682:return nC;case 35679:case 36299:case 36307:return iC;case 35680:case 36300:case 36308:case 36293:return aC;case 36289:case 36303:case 36311:case 36292:return sC}}function oC(o,t){o.uniform1fv(this.addr,t)}function lC(o,t){const i=bo(t,this.size,2);o.uniform2fv(this.addr,i)}function uC(o,t){const i=bo(t,this.size,3);o.uniform3fv(this.addr,i)}function cC(o,t){const i=bo(t,this.size,4);o.uniform4fv(this.addr,i)}function fC(o,t){const i=bo(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function hC(o,t){const i=bo(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function dC(o,t){const i=bo(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function pC(o,t){o.uniform1iv(this.addr,t)}function mC(o,t){o.uniform2iv(this.addr,t)}function gC(o,t){o.uniform3iv(this.addr,t)}function vC(o,t){o.uniform4iv(this.addr,t)}function _C(o,t){o.uniform1uiv(this.addr,t)}function xC(o,t){o.uniform2uiv(this.addr,t)}function yC(o,t){o.uniform3uiv(this.addr,t)}function SC(o,t){o.uniform4uiv(this.addr,t)}function MC(o,t,i){const s=this.cache,l=t.length,u=lf(i,l);bn(s,u)||(o.uniform1iv(this.addr,u),An(s,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||dS,u[h])}function EC(o,t,i){const s=this.cache,l=t.length,u=lf(i,l);bn(s,u)||(o.uniform1iv(this.addr,u),An(s,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||mS,u[h])}function TC(o,t,i){const s=this.cache,l=t.length,u=lf(i,l);bn(s,u)||(o.uniform1iv(this.addr,u),An(s,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||gS,u[h])}function bC(o,t,i){const s=this.cache,l=t.length,u=lf(i,l);bn(s,u)||(o.uniform1iv(this.addr,u),An(s,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||pS,u[h])}function AC(o){switch(o){case 5126:return oC;case 35664:return lC;case 35665:return uC;case 35666:return cC;case 35674:return fC;case 35675:return hC;case 35676:return dC;case 5124:case 35670:return pC;case 35667:case 35671:return mC;case 35668:case 35672:return gC;case 35669:case 35673:return vC;case 5125:return _C;case 36294:return xC;case 36295:return yC;case 36296:return SC;case 35678:case 36198:case 36298:case 36306:case 35682:return MC;case 35679:case 36299:case 36307:return EC;case 35680:case 36300:case 36308:case 36293:return TC;case 36289:case 36303:case 36311:case 36292:return bC}}class RC{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=rC(i.type)}}class CC{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=AC(i.type)}}class wC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const Sp=/(\w+)(\])?(\[|\.)?/g;function oy(o,t){o.seq.push(t),o.map[t.id]=t}function DC(o,t,i){const s=o.name,l=s.length;for(Sp.lastIndex=0;;){const u=Sp.exec(s),h=Sp.lastIndex;let d=u[1];const p=u[2]==="]",g=u[3];if(p&&(d=d|0),g===void 0||g==="["&&h+2===l){oy(i,g===void 0?new RC(d,o,t):new CC(d,o,t));break}else{let m=i.map[d];m===void 0&&(m=new wC(d),oy(i,m)),i=m}}}class Kc{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);DC(u,h,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&s.push(h)}return s}}function ly(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const NC=37297;let UC=0;function LC(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;s.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const uy=new ve;function OC(o){Le._getMatrix(uy,Le.workingColorSpace,o);const t=`mat3( ${uy.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(o)){case $c:return[t,"LinearTransferOETF"];case Ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function cy(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const h=/ERROR: 0:(\d+)/.exec(u);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+u+`

`+LC(o.getShaderSource(t),d)}else return u}function PC(o,t){const i=OC(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function zC(o,t){let i;switch(t){case Ty:i="Linear";break;case by:i="Reinhard";break;case Ay:i="Cineon";break;case ym:i="ACESFilmic";break;case Cy:i="AgX";break;case wy:i="Neutral";break;case Ry:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const qc=new G;function IC(){Le.getLuminanceCoefficients(qc);const o=qc.x.toFixed(4),t=qc.y.toFixed(4),i=qc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nl).join(`
`)}function FC(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function HC(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Nl(o){return o!==""}function fy(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function hy(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const GC=/^[ \t]*#include +<([\w\d./]+)>/gm;function mm(o){return o.replace(GC,kC)}const VC=new Map;function kC(o,t){let i=Me[t];if(i===void 0){const s=VC.get(t);if(s!==void 0)i=Me[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return mm(i)}const XC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dy(o){return o.replace(XC,qC)}function qC(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function py(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function YC(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===My?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===CE?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Da&&(t="SHADOWMAP_TYPE_VSM"),t}function WC(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case mo:case go:t="ENVMAP_TYPE_CUBE";break;case of:t="ENVMAP_TYPE_CUBE_UV";break}return t}function jC(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case go:t="ENVMAP_MODE_REFRACTION";break}return t}function ZC(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Ey:t="ENVMAP_BLENDING_MULTIPLY";break;case WE:t="ENVMAP_BLENDING_MIX";break;case jE:t="ENVMAP_BLENDING_ADD";break}return t}function QC(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function KC(o,t,i,s){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=YC(i),g=WC(i),v=jC(i),m=ZC(i),x=QC(i),S=BC(i),T=FC(u),A=l.createProgram();let M,_,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Nl).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(Nl).join(`
`),_.length>0&&(_+=`
`)):(M=[py(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nl).join(`
`),_=[py(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",i.envMap?"#define "+m:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==La?"#define TONE_MAPPING":"",i.toneMapping!==La?Me.tonemapping_pars_fragment:"",i.toneMapping!==La?zC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,PC("linearToOutputTexel",i.outputColorSpace),IC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Nl).join(`
`)),h=mm(h),h=fy(h,i),h=hy(h,i),d=mm(d),d=fy(d,i),d=hy(d,i),h=dy(h),d=dy(d),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===hx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===hx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=w+M+h,b=w+_+d,I=ly(l,l.VERTEX_SHADER,D),z=ly(l,l.FRAGMENT_SHADER,b);l.attachShader(A,I),l.attachShader(A,z),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function P(U){if(o.debug.checkShaderErrors){const H=l.getProgramInfoLog(A)||"",q=l.getShaderInfoLog(I)||"",nt=l.getShaderInfoLog(z)||"",Q=H.trim(),F=q.trim(),$=nt.trim();let Z=!0,lt=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(Z=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,I,z);else{const xt=cy(l,I,"vertex"),Tt=cy(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Q+`
`+xt+`
`+Tt)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(F===""||$==="")&&(lt=!1);lt&&(U.diagnostics={runnable:Z,programLog:Q,vertexShader:{log:F,prefix:M},fragmentShader:{log:$,prefix:_}})}l.deleteShader(I),l.deleteShader(z),V=new Kc(l,A),N=HC(l,A)}let V;this.getUniforms=function(){return V===void 0&&P(this),V};let N;this.getAttributes=function(){return N===void 0&&P(this),N};let E=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=l.getProgramParameter(A,NC)),E},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=UC++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=I,this.fragmentShader=z,this}let JC=0;class $C{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new tw(t),i.set(t,s)),s}}class tw{constructor(t){this.id=JC++,this.code=t,this.usedTimes=0}}function ew(o,t,i,s,l,u,h){const d=new Vy,p=new $C,g=new Set,v=[],m=l.logarithmicDepthBuffer,x=l.vertexTextures;let S=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(N){return g.add(N),N===0?"uv":`uv${N}`}function M(N,E,U,H,q){const nt=H.fog,Q=q.geometry,F=N.isMeshStandardMaterial?H.environment:null,$=(N.isMeshStandardMaterial?i:t).get(N.envMap||F),Z=$&&$.mapping===of?$.image.height:null,lt=T[N.type];N.precision!==null&&(S=l.getMaxPrecision(N.precision),S!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",S,"instead."));const xt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Tt=xt!==void 0?xt.length:0;let Vt=0;Q.morphAttributes.position!==void 0&&(Vt=1),Q.morphAttributes.normal!==void 0&&(Vt=2),Q.morphAttributes.color!==void 0&&(Vt=3);let se,X,gt,Y;if(lt){const we=aa[lt];se=we.vertexShader,X=we.fragmentShader}else se=N.vertexShader,X=N.fragmentShader,p.update(N),gt=p.getVertexShaderID(N),Y=p.getFragmentShaderID(N);const J=o.getRenderTarget(),yt=o.state.buffers.depth.getReversed(),Rt=q.isInstancedMesh===!0,wt=q.isBatchedMesh===!0,At=!!N.map,Lt=!!N.matcap,B=!!$,Mt=!!N.aoMap,_t=!!N.lightMap,ht=!!N.bumpMap,vt=!!N.normalMap,Ct=!!N.displacementMap,Nt=!!N.emissiveMap,zt=!!N.metalnessMap,oe=!!N.roughnessMap,re=N.anisotropy>0,O=N.clearcoat>0,R=N.dispersion>0,st=N.iridescence>0,pt=N.sheen>0,Ut=N.transmission>0,St=re&&!!N.anisotropyMap,Qt=O&&!!N.clearcoatMap,Bt=O&&!!N.clearcoatNormalMap,Jt=O&&!!N.clearcoatRoughnessMap,te=st&&!!N.iridescenceMap,Ot=st&&!!N.iridescenceThicknessMap,ft=pt&&!!N.sheenColorMap,ee=pt&&!!N.sheenRoughnessMap,Yt=!!N.specularMap,qt=!!N.specularColorMap,_e=!!N.specularIntensityMap,j=Ut&&!!N.transmissionMap,Ft=Ut&&!!N.thicknessMap,kt=!!N.gradientMap,$t=!!N.alphaMap,Pt=N.alphaTest>0,Dt=!!N.alphaHash,ae=!!N.extensions;let ge=La;N.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(ge=o.toneMapping);const We={shaderID:lt,shaderType:N.type,shaderName:N.name,vertexShader:se,fragmentShader:X,defines:N.defines,customVertexShaderID:gt,customFragmentShaderID:Y,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:S,batching:wt,batchingColor:wt&&q._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&q.instanceColor!==null,instancingMorph:Rt&&q.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:J===null?o.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:vo,alphaToCoverage:!!N.alphaToCoverage,map:At,matcap:Lt,envMap:B,envMapMode:B&&$.mapping,envMapCubeUVHeight:Z,aoMap:Mt,lightMap:_t,bumpMap:ht,normalMap:vt,displacementMap:x&&Ct,emissiveMap:Nt,normalMapObjectSpace:vt&&N.normalMapType===JE,normalMapTangentSpace:vt&&N.normalMapType===By,metalnessMap:zt,roughnessMap:oe,anisotropy:re,anisotropyMap:St,clearcoat:O,clearcoatMap:Qt,clearcoatNormalMap:Bt,clearcoatRoughnessMap:Jt,dispersion:R,iridescence:st,iridescenceMap:te,iridescenceThicknessMap:Ot,sheen:pt,sheenColorMap:ft,sheenRoughnessMap:ee,specularMap:Yt,specularColorMap:qt,specularIntensityMap:_e,transmission:Ut,transmissionMap:j,thicknessMap:Ft,gradientMap:kt,opaque:N.transparent===!1&&N.blending===fo&&N.alphaToCoverage===!1,alphaMap:$t,alphaTest:Pt,alphaHash:Dt,combine:N.combine,mapUv:At&&A(N.map.channel),aoMapUv:Mt&&A(N.aoMap.channel),lightMapUv:_t&&A(N.lightMap.channel),bumpMapUv:ht&&A(N.bumpMap.channel),normalMapUv:vt&&A(N.normalMap.channel),displacementMapUv:Ct&&A(N.displacementMap.channel),emissiveMapUv:Nt&&A(N.emissiveMap.channel),metalnessMapUv:zt&&A(N.metalnessMap.channel),roughnessMapUv:oe&&A(N.roughnessMap.channel),anisotropyMapUv:St&&A(N.anisotropyMap.channel),clearcoatMapUv:Qt&&A(N.clearcoatMap.channel),clearcoatNormalMapUv:Bt&&A(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&A(N.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&A(N.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&A(N.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&A(N.sheenColorMap.channel),sheenRoughnessMapUv:ee&&A(N.sheenRoughnessMap.channel),specularMapUv:Yt&&A(N.specularMap.channel),specularColorMapUv:qt&&A(N.specularColorMap.channel),specularIntensityMapUv:_e&&A(N.specularIntensityMap.channel),transmissionMapUv:j&&A(N.transmissionMap.channel),thicknessMapUv:Ft&&A(N.thicknessMap.channel),alphaMapUv:$t&&A(N.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(vt||re),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:q.isPoints===!0&&!!Q.attributes.uv&&(At||$t),fog:!!nt,useFog:N.fog===!0,fogExp2:!!nt&&nt.isFogExp2,flatShading:N.flatShading===!0&&N.wireframe===!1,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:yt,skinning:q.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:Vt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:N.dithering,shadowMapEnabled:o.shadowMap.enabled&&U.length>0,shadowMapType:o.shadowMap.type,toneMapping:ge,decodeVideoTexture:At&&N.map.isVideoTexture===!0&&Le.getTransfer(N.map.colorSpace)===Ye,decodeVideoTextureEmissive:Nt&&N.emissiveMap.isVideoTexture===!0&&Le.getTransfer(N.emissiveMap.colorSpace)===Ye,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===Gi,flipSided:N.side===kn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:ae&&N.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&N.extensions.multiDraw===!0||wt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return We.vertexUv1s=g.has(1),We.vertexUv2s=g.has(2),We.vertexUv3s=g.has(3),g.clear(),We}function _(N){const E=[];if(N.shaderID?E.push(N.shaderID):(E.push(N.customVertexShaderID),E.push(N.customFragmentShaderID)),N.defines!==void 0)for(const U in N.defines)E.push(U),E.push(N.defines[U]);return N.isRawShaderMaterial===!1&&(w(E,N),D(E,N),E.push(o.outputColorSpace)),E.push(N.customProgramCacheKey),E.join()}function w(N,E){N.push(E.precision),N.push(E.outputColorSpace),N.push(E.envMapMode),N.push(E.envMapCubeUVHeight),N.push(E.mapUv),N.push(E.alphaMapUv),N.push(E.lightMapUv),N.push(E.aoMapUv),N.push(E.bumpMapUv),N.push(E.normalMapUv),N.push(E.displacementMapUv),N.push(E.emissiveMapUv),N.push(E.metalnessMapUv),N.push(E.roughnessMapUv),N.push(E.anisotropyMapUv),N.push(E.clearcoatMapUv),N.push(E.clearcoatNormalMapUv),N.push(E.clearcoatRoughnessMapUv),N.push(E.iridescenceMapUv),N.push(E.iridescenceThicknessMapUv),N.push(E.sheenColorMapUv),N.push(E.sheenRoughnessMapUv),N.push(E.specularMapUv),N.push(E.specularColorMapUv),N.push(E.specularIntensityMapUv),N.push(E.transmissionMapUv),N.push(E.thicknessMapUv),N.push(E.combine),N.push(E.fogExp2),N.push(E.sizeAttenuation),N.push(E.morphTargetsCount),N.push(E.morphAttributeCount),N.push(E.numDirLights),N.push(E.numPointLights),N.push(E.numSpotLights),N.push(E.numSpotLightMaps),N.push(E.numHemiLights),N.push(E.numRectAreaLights),N.push(E.numDirLightShadows),N.push(E.numPointLightShadows),N.push(E.numSpotLightShadows),N.push(E.numSpotLightShadowsWithMaps),N.push(E.numLightProbes),N.push(E.shadowMapType),N.push(E.toneMapping),N.push(E.numClippingPlanes),N.push(E.numClipIntersection),N.push(E.depthPacking)}function D(N,E){d.disableAll(),E.supportsVertexTextures&&d.enable(0),E.instancing&&d.enable(1),E.instancingColor&&d.enable(2),E.instancingMorph&&d.enable(3),E.matcap&&d.enable(4),E.envMap&&d.enable(5),E.normalMapObjectSpace&&d.enable(6),E.normalMapTangentSpace&&d.enable(7),E.clearcoat&&d.enable(8),E.iridescence&&d.enable(9),E.alphaTest&&d.enable(10),E.vertexColors&&d.enable(11),E.vertexAlphas&&d.enable(12),E.vertexUv1s&&d.enable(13),E.vertexUv2s&&d.enable(14),E.vertexUv3s&&d.enable(15),E.vertexTangents&&d.enable(16),E.anisotropy&&d.enable(17),E.alphaHash&&d.enable(18),E.batching&&d.enable(19),E.dispersion&&d.enable(20),E.batchingColor&&d.enable(21),E.gradientMap&&d.enable(22),N.push(d.mask),d.disableAll(),E.fog&&d.enable(0),E.useFog&&d.enable(1),E.flatShading&&d.enable(2),E.logarithmicDepthBuffer&&d.enable(3),E.reversedDepthBuffer&&d.enable(4),E.skinning&&d.enable(5),E.morphTargets&&d.enable(6),E.morphNormals&&d.enable(7),E.morphColors&&d.enable(8),E.premultipliedAlpha&&d.enable(9),E.shadowMapEnabled&&d.enable(10),E.doubleSided&&d.enable(11),E.flipSided&&d.enable(12),E.useDepthPacking&&d.enable(13),E.dithering&&d.enable(14),E.transmission&&d.enable(15),E.sheen&&d.enable(16),E.opaque&&d.enable(17),E.pointsUvs&&d.enable(18),E.decodeVideoTexture&&d.enable(19),E.decodeVideoTextureEmissive&&d.enable(20),E.alphaToCoverage&&d.enable(21),N.push(d.mask)}function b(N){const E=T[N.type];let U;if(E){const H=aa[E];U=Xl.clone(H.uniforms)}else U=N.uniforms;return U}function I(N,E){let U;for(let H=0,q=v.length;H<q;H++){const nt=v[H];if(nt.cacheKey===E){U=nt,++U.usedTimes;break}}return U===void 0&&(U=new KC(o,E,N,u),v.push(U)),U}function z(N){if(--N.usedTimes===0){const E=v.indexOf(N);v[E]=v[v.length-1],v.pop(),N.destroy()}}function P(N){p.remove(N)}function V(){p.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:b,acquireProgram:I,releaseProgram:z,releaseShaderCache:P,programs:v,dispose:V}}function nw(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function iw(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function my(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function gy(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function h(m,x,S,T,A,M){let _=o[t];return _===void 0?(_={id:m.id,object:m,geometry:x,material:S,groupOrder:T,renderOrder:m.renderOrder,z:A,group:M},o[t]=_):(_.id=m.id,_.object=m,_.geometry=x,_.material=S,_.groupOrder=T,_.renderOrder=m.renderOrder,_.z=A,_.group=M),t++,_}function d(m,x,S,T,A,M){const _=h(m,x,S,T,A,M);S.transmission>0?s.push(_):S.transparent===!0?l.push(_):i.push(_)}function p(m,x,S,T,A,M){const _=h(m,x,S,T,A,M);S.transmission>0?s.unshift(_):S.transparent===!0?l.unshift(_):i.unshift(_)}function g(m,x){i.length>1&&i.sort(m||iw),s.length>1&&s.sort(x||my),l.length>1&&l.sort(x||my)}function v(){for(let m=t,x=o.length;m<x;m++){const S=o[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:p,finish:v,sort:g}}function aw(){let o=new WeakMap;function t(s,l){const u=o.get(s);let h;return u===void 0?(h=new gy,o.set(s,[h])):l>=u.length?(h=new gy,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function sw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new G,color:new he};break;case"SpotLight":i={position:new G,direction:new G,color:new he,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new G,color:new he,distance:0,decay:0};break;case"HemisphereLight":i={direction:new G,skyColor:new he,groundColor:new he};break;case"RectAreaLight":i={color:new he,position:new G,halfWidth:new G,halfHeight:new G};break}return o[t.id]=i,i}}}function rw(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let ow=0;function lw(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function uw(o){const t=new sw,i=rw(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)s.probe.push(new G);const l=new G,u=new Ve,h=new Ve;function d(g){let v=0,m=0,x=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let S=0,T=0,A=0,M=0,_=0,w=0,D=0,b=0,I=0,z=0,P=0;g.sort(lw);for(let N=0,E=g.length;N<E;N++){const U=g[N],H=U.color,q=U.intensity,nt=U.distance,Q=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)v+=H.r*q,m+=H.g*q,x+=H.b*q;else if(U.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(U.sh.coefficients[F],q);P++}else if(U.isDirectionalLight){const F=t.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){const $=U.shadow,Z=i.get(U);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,s.directionalShadow[S]=Z,s.directionalShadowMap[S]=Q,s.directionalShadowMatrix[S]=U.shadow.matrix,w++}s.directional[S]=F,S++}else if(U.isSpotLight){const F=t.get(U);F.position.setFromMatrixPosition(U.matrixWorld),F.color.copy(H).multiplyScalar(q),F.distance=nt,F.coneCos=Math.cos(U.angle),F.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),F.decay=U.decay,s.spot[A]=F;const $=U.shadow;if(U.map&&(s.spotLightMap[I]=U.map,I++,$.updateMatrices(U),U.castShadow&&z++),s.spotLightMatrix[A]=$.matrix,U.castShadow){const Z=i.get(U);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,s.spotShadow[A]=Z,s.spotShadowMap[A]=Q,b++}A++}else if(U.isRectAreaLight){const F=t.get(U);F.color.copy(H).multiplyScalar(q),F.halfWidth.set(U.width*.5,0,0),F.halfHeight.set(0,U.height*.5,0),s.rectArea[M]=F,M++}else if(U.isPointLight){const F=t.get(U);if(F.color.copy(U.color).multiplyScalar(U.intensity),F.distance=U.distance,F.decay=U.decay,U.castShadow){const $=U.shadow,Z=i.get(U);Z.shadowIntensity=$.intensity,Z.shadowBias=$.bias,Z.shadowNormalBias=$.normalBias,Z.shadowRadius=$.radius,Z.shadowMapSize=$.mapSize,Z.shadowCameraNear=$.camera.near,Z.shadowCameraFar=$.camera.far,s.pointShadow[T]=Z,s.pointShadowMap[T]=Q,s.pointShadowMatrix[T]=U.shadow.matrix,D++}s.point[T]=F,T++}else if(U.isHemisphereLight){const F=t.get(U);F.skyColor.copy(U.color).multiplyScalar(q),F.groundColor.copy(U.groundColor).multiplyScalar(q),s.hemi[_]=F,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=jt.LTC_FLOAT_1,s.rectAreaLTC2=jt.LTC_FLOAT_2):(s.rectAreaLTC1=jt.LTC_HALF_1,s.rectAreaLTC2=jt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=m,s.ambient[2]=x;const V=s.hash;(V.directionalLength!==S||V.pointLength!==T||V.spotLength!==A||V.rectAreaLength!==M||V.hemiLength!==_||V.numDirectionalShadows!==w||V.numPointShadows!==D||V.numSpotShadows!==b||V.numSpotMaps!==I||V.numLightProbes!==P)&&(s.directional.length=S,s.spot.length=A,s.rectArea.length=M,s.point.length=T,s.hemi.length=_,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=b+I-z,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=P,V.directionalLength=S,V.pointLength=T,V.spotLength=A,V.rectAreaLength=M,V.hemiLength=_,V.numDirectionalShadows=w,V.numPointShadows=D,V.numSpotShadows=b,V.numSpotMaps=I,V.numLightProbes=P,s.version=ow++)}function p(g,v){let m=0,x=0,S=0,T=0,A=0;const M=v.matrixWorldInverse;for(let _=0,w=g.length;_<w;_++){const D=g[_];if(D.isDirectionalLight){const b=s.directional[m];b.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),b.direction.sub(l),b.direction.transformDirection(M),m++}else if(D.isSpotLight){const b=s.spot[S];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(M),b.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),b.direction.sub(l),b.direction.transformDirection(M),S++}else if(D.isRectAreaLight){const b=s.rectArea[T];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(M),h.identity(),u.copy(D.matrixWorld),u.premultiply(M),h.extractRotation(u),b.halfWidth.set(D.width*.5,0,0),b.halfHeight.set(0,D.height*.5,0),b.halfWidth.applyMatrix4(h),b.halfHeight.applyMatrix4(h),T++}else if(D.isPointLight){const b=s.point[x];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(M),x++}else if(D.isHemisphereLight){const b=s.hemi[A];b.direction.setFromMatrixPosition(D.matrixWorld),b.direction.transformDirection(M),A++}}}return{setup:d,setupView:p,state:s}}function vy(o){const t=new uw(o),i=[],s=[];function l(v){g.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function h(v){s.push(v)}function d(){t.setup(i)}function p(v){t.setupView(i,v)}const g={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:g,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:h}}function cw(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new vy(o),t.set(l,[d])):u>=h.length?(d=new vy(o),h.push(d)):d=h[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const fw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hw=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function dw(o,t,i){let s=new Nm;const l=new Ht,u=new Ht,h=new cn,d=new zb({depthPacking:KE}),p=new Ib,g={},v=i.maxTextureSize,m={[gs]:kn,[kn]:gs,[Gi]:Gi},x=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:fw,fragmentShader:hw}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const T=new Rn;T.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new fn(T,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=My;let _=this.type;this.render=function(z,P,V){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;const N=o.getRenderTarget(),E=o.getActiveCubeFace(),U=o.getActiveMipmapLevel(),H=o.state;H.setBlending(Ua),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const q=_!==Da&&this.type===Da,nt=_===Da&&this.type!==Da;for(let Q=0,F=z.length;Q<F;Q++){const $=z[Q],Z=$.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;l.copy(Z.mapSize);const lt=Z.getFrameExtents();if(l.multiply(lt),u.copy(Z.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/lt.x),l.x=u.x*lt.x,Z.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/lt.y),l.y=u.y*lt.y,Z.mapSize.y=u.y)),Z.map===null||q===!0||nt===!0){const Tt=this.type!==Da?{minFilter:_i,magFilter:_i}:{};Z.map!==null&&Z.map.dispose(),Z.map=new Di(l.x,l.y,Tt),Z.map.texture.name=$.name+".shadowMap",Z.camera.updateProjectionMatrix()}o.setRenderTarget(Z.map),o.clear();const xt=Z.getViewportCount();for(let Tt=0;Tt<xt;Tt++){const Vt=Z.getViewport(Tt);h.set(u.x*Vt.x,u.y*Vt.y,u.x*Vt.z,u.y*Vt.w),H.viewport(h),Z.updateMatrices($,Tt),s=Z.getFrustum(),b(P,V,Z.camera,$,this.type)}Z.isPointLightShadow!==!0&&this.type===Da&&w(Z,V),Z.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(N,E,U)};function w(z,P){const V=t.update(A);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Di(l.x,l.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(P,null,V,x,A,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(P,null,V,S,A,null)}function D(z,P,V,N){let E=null;const U=V.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(U!==void 0)E=U;else if(E=V.isPointLight===!0?p:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const H=E.uuid,q=P.uuid;let nt=g[H];nt===void 0&&(nt={},g[H]=nt);let Q=nt[q];Q===void 0&&(Q=E.clone(),nt[q]=Q,P.addEventListener("dispose",I)),E=Q}if(E.visible=P.visible,E.wireframe=P.wireframe,N===Da?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:m[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,V.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const H=o.properties.get(E);H.light=V}return E}function b(z,P,V,N,E){if(z.visible===!1)return;if(z.layers.test(P.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&E===Da)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,z.matrixWorld);const q=t.update(z),nt=z.material;if(Array.isArray(nt)){const Q=q.groups;for(let F=0,$=Q.length;F<$;F++){const Z=Q[F],lt=nt[Z.materialIndex];if(lt&&lt.visible){const xt=D(z,lt,N,E);z.onBeforeShadow(o,z,P,V,q,xt,Z),o.renderBufferDirect(V,null,q,xt,z,Z),z.onAfterShadow(o,z,P,V,q,xt,Z)}}}else if(nt.visible){const Q=D(z,nt,N,E);z.onBeforeShadow(o,z,P,V,q,Q,null),o.renderBufferDirect(V,null,q,Q,z,null),z.onAfterShadow(o,z,P,V,q,Q,null)}}const H=z.children;for(let q=0,nt=H.length;q<nt;q++)b(H[q],P,V,N,E)}function I(z){z.target.removeEventListener("dispose",I);for(const V in g){const N=g[V],E=z.target.uuid;E in N&&(N[E].dispose(),delete N[E])}}}const pw={[Ap]:Rp,[Cp]:Np,[wp]:Up,[po]:Dp,[Rp]:Ap,[Np]:Cp,[Up]:wp,[Dp]:po};function mw(o,t){function i(){let j=!1;const Ft=new cn;let kt=null;const $t=new cn(0,0,0,0);return{setMask:function(Pt){kt!==Pt&&!j&&(o.colorMask(Pt,Pt,Pt,Pt),kt=Pt)},setLocked:function(Pt){j=Pt},setClear:function(Pt,Dt,ae,ge,We){We===!0&&(Pt*=ge,Dt*=ge,ae*=ge),Ft.set(Pt,Dt,ae,ge),$t.equals(Ft)===!1&&(o.clearColor(Pt,Dt,ae,ge),$t.copy(Ft))},reset:function(){j=!1,kt=null,$t.set(-1,0,0,0)}}}function s(){let j=!1,Ft=!1,kt=null,$t=null,Pt=null;return{setReversed:function(Dt){if(Ft!==Dt){const ae=t.get("EXT_clip_control");Dt?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),Ft=Dt;const ge=Pt;Pt=null,this.setClear(ge)}},getReversed:function(){return Ft},setTest:function(Dt){Dt?J(o.DEPTH_TEST):yt(o.DEPTH_TEST)},setMask:function(Dt){kt!==Dt&&!j&&(o.depthMask(Dt),kt=Dt)},setFunc:function(Dt){if(Ft&&(Dt=pw[Dt]),$t!==Dt){switch(Dt){case Ap:o.depthFunc(o.NEVER);break;case Rp:o.depthFunc(o.ALWAYS);break;case Cp:o.depthFunc(o.LESS);break;case po:o.depthFunc(o.LEQUAL);break;case wp:o.depthFunc(o.EQUAL);break;case Dp:o.depthFunc(o.GEQUAL);break;case Np:o.depthFunc(o.GREATER);break;case Up:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}$t=Dt}},setLocked:function(Dt){j=Dt},setClear:function(Dt){Pt!==Dt&&(Ft&&(Dt=1-Dt),o.clearDepth(Dt),Pt=Dt)},reset:function(){j=!1,kt=null,$t=null,Pt=null,Ft=!1}}}function l(){let j=!1,Ft=null,kt=null,$t=null,Pt=null,Dt=null,ae=null,ge=null,We=null;return{setTest:function(we){j||(we?J(o.STENCIL_TEST):yt(o.STENCIL_TEST))},setMask:function(we){Ft!==we&&!j&&(o.stencilMask(we),Ft=we)},setFunc:function(we,nn,Sn){(kt!==we||$t!==nn||Pt!==Sn)&&(o.stencilFunc(we,nn,Sn),kt=we,$t=nn,Pt=Sn)},setOp:function(we,nn,Sn){(Dt!==we||ae!==nn||ge!==Sn)&&(o.stencilOp(we,nn,Sn),Dt=we,ae=nn,ge=Sn)},setLocked:function(we){j=we},setClear:function(we){We!==we&&(o.clearStencil(we),We=we)},reset:function(){j=!1,Ft=null,kt=null,$t=null,Pt=null,Dt=null,ae=null,ge=null,We=null}}}const u=new i,h=new s,d=new l,p=new WeakMap,g=new WeakMap;let v={},m={},x=new WeakMap,S=[],T=null,A=!1,M=null,_=null,w=null,D=null,b=null,I=null,z=null,P=new he(0,0,0),V=0,N=!1,E=null,U=null,H=null,q=null,nt=null;const Q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,$=0;const Z=o.getParameter(o.VERSION);Z.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Z)[1]),F=$>=1):Z.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),F=$>=2);let lt=null,xt={};const Tt=o.getParameter(o.SCISSOR_BOX),Vt=o.getParameter(o.VIEWPORT),se=new cn().fromArray(Tt),X=new cn().fromArray(Vt);function gt(j,Ft,kt,$t){const Pt=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(j,Dt),o.texParameteri(j,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(j,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ae=0;ae<kt;ae++)j===o.TEXTURE_3D||j===o.TEXTURE_2D_ARRAY?o.texImage3D(Ft,0,o.RGBA,1,1,$t,0,o.RGBA,o.UNSIGNED_BYTE,Pt):o.texImage2D(Ft+ae,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Pt);return Dt}const Y={};Y[o.TEXTURE_2D]=gt(o.TEXTURE_2D,o.TEXTURE_2D,1),Y[o.TEXTURE_CUBE_MAP]=gt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Y[o.TEXTURE_2D_ARRAY]=gt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Y[o.TEXTURE_3D]=gt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),J(o.DEPTH_TEST),h.setFunc(po),ht(!1),vt(ox),J(o.CULL_FACE),Mt(Ua);function J(j){v[j]!==!0&&(o.enable(j),v[j]=!0)}function yt(j){v[j]!==!1&&(o.disable(j),v[j]=!1)}function Rt(j,Ft){return m[j]!==Ft?(o.bindFramebuffer(j,Ft),m[j]=Ft,j===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=Ft),j===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=Ft),!0):!1}function wt(j,Ft){let kt=S,$t=!1;if(j){kt=x.get(Ft),kt===void 0&&(kt=[],x.set(Ft,kt));const Pt=j.textures;if(kt.length!==Pt.length||kt[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,ae=Pt.length;Dt<ae;Dt++)kt[Dt]=o.COLOR_ATTACHMENT0+Dt;kt.length=Pt.length,$t=!0}}else kt[0]!==o.BACK&&(kt[0]=o.BACK,$t=!0);$t&&o.drawBuffers(kt)}function At(j){return T!==j?(o.useProgram(j),T=j,!0):!1}const Lt={[Zs]:o.FUNC_ADD,[DE]:o.FUNC_SUBTRACT,[NE]:o.FUNC_REVERSE_SUBTRACT};Lt[UE]=o.MIN,Lt[LE]=o.MAX;const B={[OE]:o.ZERO,[PE]:o.ONE,[zE]:o.SRC_COLOR,[Tp]:o.SRC_ALPHA,[VE]:o.SRC_ALPHA_SATURATE,[HE]:o.DST_COLOR,[BE]:o.DST_ALPHA,[IE]:o.ONE_MINUS_SRC_COLOR,[bp]:o.ONE_MINUS_SRC_ALPHA,[GE]:o.ONE_MINUS_DST_COLOR,[FE]:o.ONE_MINUS_DST_ALPHA,[kE]:o.CONSTANT_COLOR,[XE]:o.ONE_MINUS_CONSTANT_COLOR,[qE]:o.CONSTANT_ALPHA,[YE]:o.ONE_MINUS_CONSTANT_ALPHA};function Mt(j,Ft,kt,$t,Pt,Dt,ae,ge,We,we){if(j===Ua){A===!0&&(yt(o.BLEND),A=!1);return}if(A===!1&&(J(o.BLEND),A=!0),j!==wE){if(j!==M||we!==N){if((_!==Zs||b!==Zs)&&(o.blendEquation(o.FUNC_ADD),_=Zs,b=Zs),we)switch(j){case fo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case zl:o.blendFunc(o.ONE,o.ONE);break;case lx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case ux:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case fo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case zl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case lx:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ux:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}w=null,D=null,I=null,z=null,P.set(0,0,0),V=0,M=j,N=we}return}Pt=Pt||Ft,Dt=Dt||kt,ae=ae||$t,(Ft!==_||Pt!==b)&&(o.blendEquationSeparate(Lt[Ft],Lt[Pt]),_=Ft,b=Pt),(kt!==w||$t!==D||Dt!==I||ae!==z)&&(o.blendFuncSeparate(B[kt],B[$t],B[Dt],B[ae]),w=kt,D=$t,I=Dt,z=ae),(ge.equals(P)===!1||We!==V)&&(o.blendColor(ge.r,ge.g,ge.b,We),P.copy(ge),V=We),M=j,N=!1}function _t(j,Ft){j.side===Gi?yt(o.CULL_FACE):J(o.CULL_FACE);let kt=j.side===kn;Ft&&(kt=!kt),ht(kt),j.blending===fo&&j.transparent===!1?Mt(Ua):Mt(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),h.setFunc(j.depthFunc),h.setTest(j.depthTest),h.setMask(j.depthWrite),u.setMask(j.colorWrite);const $t=j.stencilWrite;d.setTest($t),$t&&(d.setMask(j.stencilWriteMask),d.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),d.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),Nt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?J(o.SAMPLE_ALPHA_TO_COVERAGE):yt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ht(j){E!==j&&(j?o.frontFace(o.CW):o.frontFace(o.CCW),E=j)}function vt(j){j!==AE?(J(o.CULL_FACE),j!==U&&(j===ox?o.cullFace(o.BACK):j===RE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):yt(o.CULL_FACE),U=j}function Ct(j){j!==H&&(F&&o.lineWidth(j),H=j)}function Nt(j,Ft,kt){j?(J(o.POLYGON_OFFSET_FILL),(q!==Ft||nt!==kt)&&(o.polygonOffset(Ft,kt),q=Ft,nt=kt)):yt(o.POLYGON_OFFSET_FILL)}function zt(j){j?J(o.SCISSOR_TEST):yt(o.SCISSOR_TEST)}function oe(j){j===void 0&&(j=o.TEXTURE0+Q-1),lt!==j&&(o.activeTexture(j),lt=j)}function re(j,Ft,kt){kt===void 0&&(lt===null?kt=o.TEXTURE0+Q-1:kt=lt);let $t=xt[kt];$t===void 0&&($t={type:void 0,texture:void 0},xt[kt]=$t),($t.type!==j||$t.texture!==Ft)&&(lt!==kt&&(o.activeTexture(kt),lt=kt),o.bindTexture(j,Ft||Y[j]),$t.type=j,$t.texture=Ft)}function O(){const j=xt[lt];j!==void 0&&j.type!==void 0&&(o.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function R(){try{o.compressedTexImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function st(){try{o.compressedTexImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function pt(){try{o.texSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ut(){try{o.texSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function St(){try{o.compressedTexSubImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Qt(){try{o.compressedTexSubImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Bt(){try{o.texStorage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Jt(){try{o.texStorage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function te(){try{o.texImage2D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ot(){try{o.texImage3D(...arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ft(j){se.equals(j)===!1&&(o.scissor(j.x,j.y,j.z,j.w),se.copy(j))}function ee(j){X.equals(j)===!1&&(o.viewport(j.x,j.y,j.z,j.w),X.copy(j))}function Yt(j,Ft){let kt=g.get(Ft);kt===void 0&&(kt=new WeakMap,g.set(Ft,kt));let $t=kt.get(j);$t===void 0&&($t=o.getUniformBlockIndex(Ft,j.name),kt.set(j,$t))}function qt(j,Ft){const $t=g.get(Ft).get(j);p.get(Ft)!==$t&&(o.uniformBlockBinding(Ft,$t,j.__bindingPointIndex),p.set(Ft,$t))}function _e(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},lt=null,xt={},m={},x=new WeakMap,S=[],T=null,A=!1,M=null,_=null,w=null,D=null,b=null,I=null,z=null,P=new he(0,0,0),V=0,N=!1,E=null,U=null,H=null,q=null,nt=null,se.set(0,0,o.canvas.width,o.canvas.height),X.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:J,disable:yt,bindFramebuffer:Rt,drawBuffers:wt,useProgram:At,setBlending:Mt,setMaterial:_t,setFlipSided:ht,setCullFace:vt,setLineWidth:Ct,setPolygonOffset:Nt,setScissorTest:zt,activeTexture:oe,bindTexture:re,unbindTexture:O,compressedTexImage2D:R,compressedTexImage3D:st,texImage2D:te,texImage3D:Ot,updateUBOMapping:Yt,uniformBlockBinding:qt,texStorage2D:Bt,texStorage3D:Jt,texSubImage2D:pt,texSubImage3D:Ut,compressedTexSubImage2D:St,compressedTexSubImage3D:Qt,scissor:ft,viewport:ee,reset:_e}}function gw(o,t,i,s,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Ht,v=new WeakMap;let m;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(O,R){return S?new OffscreenCanvas(O,R):ef("canvas")}function A(O,R,st){let pt=1;const Ut=re(O);if((Ut.width>st||Ut.height>st)&&(pt=st/Math.max(Ut.width,Ut.height)),pt<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){const St=Math.floor(pt*Ut.width),Qt=Math.floor(pt*Ut.height);m===void 0&&(m=T(St,Qt));const Bt=R?T(St,Qt):m;return Bt.width=St,Bt.height=Qt,Bt.getContext("2d").drawImage(O,0,0,St,Qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ut.width+"x"+Ut.height+") to ("+St+"x"+Qt+")."),Bt}else return"data"in O&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ut.width+"x"+Ut.height+")."),O;return O}function M(O){return O.generateMipmaps}function _(O){o.generateMipmap(O)}function w(O){return O.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?o.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function D(O,R,st,pt,Ut=!1){if(O!==null){if(o[O]!==void 0)return o[O];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let St=R;if(R===o.RED&&(st===o.FLOAT&&(St=o.R32F),st===o.HALF_FLOAT&&(St=o.R16F),st===o.UNSIGNED_BYTE&&(St=o.R8)),R===o.RED_INTEGER&&(st===o.UNSIGNED_BYTE&&(St=o.R8UI),st===o.UNSIGNED_SHORT&&(St=o.R16UI),st===o.UNSIGNED_INT&&(St=o.R32UI),st===o.BYTE&&(St=o.R8I),st===o.SHORT&&(St=o.R16I),st===o.INT&&(St=o.R32I)),R===o.RG&&(st===o.FLOAT&&(St=o.RG32F),st===o.HALF_FLOAT&&(St=o.RG16F),st===o.UNSIGNED_BYTE&&(St=o.RG8)),R===o.RG_INTEGER&&(st===o.UNSIGNED_BYTE&&(St=o.RG8UI),st===o.UNSIGNED_SHORT&&(St=o.RG16UI),st===o.UNSIGNED_INT&&(St=o.RG32UI),st===o.BYTE&&(St=o.RG8I),st===o.SHORT&&(St=o.RG16I),st===o.INT&&(St=o.RG32I)),R===o.RGB_INTEGER&&(st===o.UNSIGNED_BYTE&&(St=o.RGB8UI),st===o.UNSIGNED_SHORT&&(St=o.RGB16UI),st===o.UNSIGNED_INT&&(St=o.RGB32UI),st===o.BYTE&&(St=o.RGB8I),st===o.SHORT&&(St=o.RGB16I),st===o.INT&&(St=o.RGB32I)),R===o.RGBA_INTEGER&&(st===o.UNSIGNED_BYTE&&(St=o.RGBA8UI),st===o.UNSIGNED_SHORT&&(St=o.RGBA16UI),st===o.UNSIGNED_INT&&(St=o.RGBA32UI),st===o.BYTE&&(St=o.RGBA8I),st===o.SHORT&&(St=o.RGBA16I),st===o.INT&&(St=o.RGBA32I)),R===o.RGB&&(st===o.UNSIGNED_INT_5_9_9_9_REV&&(St=o.RGB9_E5),st===o.UNSIGNED_INT_10F_11F_11F_REV&&(St=o.R11F_G11F_B10F)),R===o.RGBA){const Qt=Ut?$c:Le.getTransfer(pt);st===o.FLOAT&&(St=o.RGBA32F),st===o.HALF_FLOAT&&(St=o.RGBA16F),st===o.UNSIGNED_BYTE&&(St=Qt===Ye?o.SRGB8_ALPHA8:o.RGBA8),st===o.UNSIGNED_SHORT_4_4_4_4&&(St=o.RGBA4),st===o.UNSIGNED_SHORT_5_5_5_1&&(St=o.RGB5_A1)}return(St===o.R16F||St===o.R32F||St===o.RG16F||St===o.RG32F||St===o.RGBA16F||St===o.RGBA32F)&&t.get("EXT_color_buffer_float"),St}function b(O,R){let st;return O?R===null||R===tr||R===Bl?st=o.DEPTH24_STENCIL8:R===ra?st=o.DEPTH32F_STENCIL8:R===Il&&(st=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===tr||R===Bl?st=o.DEPTH_COMPONENT24:R===ra?st=o.DEPTH_COMPONENT32F:R===Il&&(st=o.DEPTH_COMPONENT16),st}function I(O,R){return M(O)===!0||O.isFramebufferTexture&&O.minFilter!==_i&&O.minFilter!==sa?Math.log2(Math.max(R.width,R.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?R.mipmaps.length:1}function z(O){const R=O.target;R.removeEventListener("dispose",z),V(R),R.isVideoTexture&&v.delete(R)}function P(O){const R=O.target;R.removeEventListener("dispose",P),E(R)}function V(O){const R=s.get(O);if(R.__webglInit===void 0)return;const st=O.source,pt=x.get(st);if(pt){const Ut=pt[R.__cacheKey];Ut.usedTimes--,Ut.usedTimes===0&&N(O),Object.keys(pt).length===0&&x.delete(st)}s.remove(O)}function N(O){const R=s.get(O);o.deleteTexture(R.__webglTexture);const st=O.source,pt=x.get(st);delete pt[R.__cacheKey],h.memory.textures--}function E(O){const R=s.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),s.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(R.__webglFramebuffer[pt]))for(let Ut=0;Ut<R.__webglFramebuffer[pt].length;Ut++)o.deleteFramebuffer(R.__webglFramebuffer[pt][Ut]);else o.deleteFramebuffer(R.__webglFramebuffer[pt]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[pt])}else{if(Array.isArray(R.__webglFramebuffer))for(let pt=0;pt<R.__webglFramebuffer.length;pt++)o.deleteFramebuffer(R.__webglFramebuffer[pt]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let pt=0;pt<R.__webglColorRenderbuffer.length;pt++)R.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[pt]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const st=O.textures;for(let pt=0,Ut=st.length;pt<Ut;pt++){const St=s.get(st[pt]);St.__webglTexture&&(o.deleteTexture(St.__webglTexture),h.memory.textures--),s.remove(st[pt])}s.remove(O)}let U=0;function H(){U=0}function q(){const O=U;return O>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+O+" texture units while this GPU supports only "+l.maxTextures),U+=1,O}function nt(O){const R=[];return R.push(O.wrapS),R.push(O.wrapT),R.push(O.wrapR||0),R.push(O.magFilter),R.push(O.minFilter),R.push(O.anisotropy),R.push(O.internalFormat),R.push(O.format),R.push(O.type),R.push(O.generateMipmaps),R.push(O.premultiplyAlpha),R.push(O.flipY),R.push(O.unpackAlignment),R.push(O.colorSpace),R.join()}function Q(O,R){const st=s.get(O);if(O.isVideoTexture&&zt(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&st.__version!==O.version){const pt=O.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(st,O,R);return}}else O.isExternalTexture&&(st.__webglTexture=O.sourceTexture?O.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,st.__webglTexture,o.TEXTURE0+R)}function F(O,R){const st=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&st.__version!==O.version){Y(st,O,R);return}i.bindTexture(o.TEXTURE_2D_ARRAY,st.__webglTexture,o.TEXTURE0+R)}function $(O,R){const st=s.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&st.__version!==O.version){Y(st,O,R);return}i.bindTexture(o.TEXTURE_3D,st.__webglTexture,o.TEXTURE0+R)}function Z(O,R){const st=s.get(O);if(O.version>0&&st.__version!==O.version){J(st,O,R);return}i.bindTexture(o.TEXTURE_CUBE_MAP,st.__webglTexture,o.TEXTURE0+R)}const lt={[Pp]:o.REPEAT,[Ks]:o.CLAMP_TO_EDGE,[zp]:o.MIRRORED_REPEAT},xt={[_i]:o.NEAREST,[ZE]:o.NEAREST_MIPMAP_NEAREST,[vc]:o.NEAREST_MIPMAP_LINEAR,[sa]:o.LINEAR,[Vd]:o.LINEAR_MIPMAP_NEAREST,[Js]:o.LINEAR_MIPMAP_LINEAR},Tt={[$E]:o.NEVER,[sT]:o.ALWAYS,[tT]:o.LESS,[Fy]:o.LEQUAL,[eT]:o.EQUAL,[aT]:o.GEQUAL,[nT]:o.GREATER,[iT]:o.NOTEQUAL};function Vt(O,R){if(R.type===ra&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===sa||R.magFilter===Vd||R.magFilter===vc||R.magFilter===Js||R.minFilter===sa||R.minFilter===Vd||R.minFilter===vc||R.minFilter===Js)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(O,o.TEXTURE_WRAP_S,lt[R.wrapS]),o.texParameteri(O,o.TEXTURE_WRAP_T,lt[R.wrapT]),(O===o.TEXTURE_3D||O===o.TEXTURE_2D_ARRAY)&&o.texParameteri(O,o.TEXTURE_WRAP_R,lt[R.wrapR]),o.texParameteri(O,o.TEXTURE_MAG_FILTER,xt[R.magFilter]),o.texParameteri(O,o.TEXTURE_MIN_FILTER,xt[R.minFilter]),R.compareFunction&&(o.texParameteri(O,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(O,o.TEXTURE_COMPARE_FUNC,Tt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===_i||R.minFilter!==vc&&R.minFilter!==Js||R.type===ra&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||s.get(R).__currentAnisotropy){const st=t.get("EXT_texture_filter_anisotropic");o.texParameterf(O,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,l.getMaxAnisotropy())),s.get(R).__currentAnisotropy=R.anisotropy}}}function se(O,R){let st=!1;O.__webglInit===void 0&&(O.__webglInit=!0,R.addEventListener("dispose",z));const pt=R.source;let Ut=x.get(pt);Ut===void 0&&(Ut={},x.set(pt,Ut));const St=nt(R);if(St!==O.__cacheKey){Ut[St]===void 0&&(Ut[St]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,st=!0),Ut[St].usedTimes++;const Qt=Ut[O.__cacheKey];Qt!==void 0&&(Ut[O.__cacheKey].usedTimes--,Qt.usedTimes===0&&N(R)),O.__cacheKey=St,O.__webglTexture=Ut[St].texture}return st}function X(O,R,st){return Math.floor(Math.floor(O/st)/R)}function gt(O,R,st,pt){const St=O.updateRanges;if(St.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,R.width,R.height,st,pt,R.data);else{St.sort((Ot,ft)=>Ot.start-ft.start);let Qt=0;for(let Ot=1;Ot<St.length;Ot++){const ft=St[Qt],ee=St[Ot],Yt=ft.start+ft.count,qt=X(ee.start,R.width,4),_e=X(ft.start,R.width,4);ee.start<=Yt+1&&qt===_e&&X(ee.start+ee.count-1,R.width,4)===qt?ft.count=Math.max(ft.count,ee.start+ee.count-ft.start):(++Qt,St[Qt]=ee)}St.length=Qt+1;const Bt=o.getParameter(o.UNPACK_ROW_LENGTH),Jt=o.getParameter(o.UNPACK_SKIP_PIXELS),te=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,R.width);for(let Ot=0,ft=St.length;Ot<ft;Ot++){const ee=St[Ot],Yt=Math.floor(ee.start/4),qt=Math.ceil(ee.count/4),_e=Yt%R.width,j=Math.floor(Yt/R.width),Ft=qt,kt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,_e),o.pixelStorei(o.UNPACK_SKIP_ROWS,j),i.texSubImage2D(o.TEXTURE_2D,0,_e,j,Ft,kt,st,pt,R.data)}O.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Bt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,te)}}function Y(O,R,st){let pt=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(pt=o.TEXTURE_3D);const Ut=se(O,R),St=R.source;i.bindTexture(pt,O.__webglTexture,o.TEXTURE0+st);const Qt=s.get(St);if(St.version!==Qt.__version||Ut===!0){i.activeTexture(o.TEXTURE0+st);const Bt=Le.getPrimaries(Le.workingColorSpace),Jt=R.colorSpace===ms?null:Le.getPrimaries(R.colorSpace),te=R.colorSpace===ms||Bt===Jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Ot=A(R.image,!1,l.maxTextureSize);Ot=oe(R,Ot);const ft=u.convert(R.format,R.colorSpace),ee=u.convert(R.type);let Yt=D(R.internalFormat,ft,ee,R.colorSpace,R.isVideoTexture);Vt(pt,R);let qt;const _e=R.mipmaps,j=R.isVideoTexture!==!0,Ft=Qt.__version===void 0||Ut===!0,kt=St.dataReady,$t=I(R,Ot);if(R.isDepthTexture)Yt=b(R.format===Hl,R.type),Ft&&(j?i.texStorage2D(o.TEXTURE_2D,1,Yt,Ot.width,Ot.height):i.texImage2D(o.TEXTURE_2D,0,Yt,Ot.width,Ot.height,0,ft,ee,null));else if(R.isDataTexture)if(_e.length>0){j&&Ft&&i.texStorage2D(o.TEXTURE_2D,$t,Yt,_e[0].width,_e[0].height);for(let Pt=0,Dt=_e.length;Pt<Dt;Pt++)qt=_e[Pt],j?kt&&i.texSubImage2D(o.TEXTURE_2D,Pt,0,0,qt.width,qt.height,ft,ee,qt.data):i.texImage2D(o.TEXTURE_2D,Pt,Yt,qt.width,qt.height,0,ft,ee,qt.data);R.generateMipmaps=!1}else j?(Ft&&i.texStorage2D(o.TEXTURE_2D,$t,Yt,Ot.width,Ot.height),kt&&gt(R,Ot,ft,ee)):i.texImage2D(o.TEXTURE_2D,0,Yt,Ot.width,Ot.height,0,ft,ee,Ot.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){j&&Ft&&i.texStorage3D(o.TEXTURE_2D_ARRAY,$t,Yt,_e[0].width,_e[0].height,Ot.depth);for(let Pt=0,Dt=_e.length;Pt<Dt;Pt++)if(qt=_e[Pt],R.format!==ki)if(ft!==null)if(j){if(kt)if(R.layerUpdates.size>0){const ae=Wx(qt.width,qt.height,R.format,R.type);for(const ge of R.layerUpdates){const We=qt.data.subarray(ge*ae/qt.data.BYTES_PER_ELEMENT,(ge+1)*ae/qt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Pt,0,0,ge,qt.width,qt.height,1,ft,We)}R.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Pt,0,0,0,qt.width,qt.height,Ot.depth,ft,qt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Pt,Yt,qt.width,qt.height,Ot.depth,0,qt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else j?kt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Pt,0,0,0,qt.width,qt.height,Ot.depth,ft,ee,qt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Pt,Yt,qt.width,qt.height,Ot.depth,0,ft,ee,qt.data)}else{j&&Ft&&i.texStorage2D(o.TEXTURE_2D,$t,Yt,_e[0].width,_e[0].height);for(let Pt=0,Dt=_e.length;Pt<Dt;Pt++)qt=_e[Pt],R.format!==ki?ft!==null?j?kt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Pt,0,0,qt.width,qt.height,ft,qt.data):i.compressedTexImage2D(o.TEXTURE_2D,Pt,Yt,qt.width,qt.height,0,qt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):j?kt&&i.texSubImage2D(o.TEXTURE_2D,Pt,0,0,qt.width,qt.height,ft,ee,qt.data):i.texImage2D(o.TEXTURE_2D,Pt,Yt,qt.width,qt.height,0,ft,ee,qt.data)}else if(R.isDataArrayTexture)if(j){if(Ft&&i.texStorage3D(o.TEXTURE_2D_ARRAY,$t,Yt,Ot.width,Ot.height,Ot.depth),kt)if(R.layerUpdates.size>0){const Pt=Wx(Ot.width,Ot.height,R.format,R.type);for(const Dt of R.layerUpdates){const ae=Ot.data.subarray(Dt*Pt/Ot.data.BYTES_PER_ELEMENT,(Dt+1)*Pt/Ot.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Dt,Ot.width,Ot.height,1,ft,ee,ae)}R.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ot.width,Ot.height,Ot.depth,ft,ee,Ot.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Yt,Ot.width,Ot.height,Ot.depth,0,ft,ee,Ot.data);else if(R.isData3DTexture)j?(Ft&&i.texStorage3D(o.TEXTURE_3D,$t,Yt,Ot.width,Ot.height,Ot.depth),kt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ot.width,Ot.height,Ot.depth,ft,ee,Ot.data)):i.texImage3D(o.TEXTURE_3D,0,Yt,Ot.width,Ot.height,Ot.depth,0,ft,ee,Ot.data);else if(R.isFramebufferTexture){if(Ft)if(j)i.texStorage2D(o.TEXTURE_2D,$t,Yt,Ot.width,Ot.height);else{let Pt=Ot.width,Dt=Ot.height;for(let ae=0;ae<$t;ae++)i.texImage2D(o.TEXTURE_2D,ae,Yt,Pt,Dt,0,ft,ee,null),Pt>>=1,Dt>>=1}}else if(_e.length>0){if(j&&Ft){const Pt=re(_e[0]);i.texStorage2D(o.TEXTURE_2D,$t,Yt,Pt.width,Pt.height)}for(let Pt=0,Dt=_e.length;Pt<Dt;Pt++)qt=_e[Pt],j?kt&&i.texSubImage2D(o.TEXTURE_2D,Pt,0,0,ft,ee,qt):i.texImage2D(o.TEXTURE_2D,Pt,Yt,ft,ee,qt);R.generateMipmaps=!1}else if(j){if(Ft){const Pt=re(Ot);i.texStorage2D(o.TEXTURE_2D,$t,Yt,Pt.width,Pt.height)}kt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,ft,ee,Ot)}else i.texImage2D(o.TEXTURE_2D,0,Yt,ft,ee,Ot);M(R)&&_(pt),Qt.__version=St.version,R.onUpdate&&R.onUpdate(R)}O.__version=R.version}function J(O,R,st){if(R.image.length!==6)return;const pt=se(O,R),Ut=R.source;i.bindTexture(o.TEXTURE_CUBE_MAP,O.__webglTexture,o.TEXTURE0+st);const St=s.get(Ut);if(Ut.version!==St.__version||pt===!0){i.activeTexture(o.TEXTURE0+st);const Qt=Le.getPrimaries(Le.workingColorSpace),Bt=R.colorSpace===ms?null:Le.getPrimaries(R.colorSpace),Jt=R.colorSpace===ms||Qt===Bt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);const te=R.isCompressedTexture||R.image[0].isCompressedTexture,Ot=R.image[0]&&R.image[0].isDataTexture,ft=[];for(let Dt=0;Dt<6;Dt++)!te&&!Ot?ft[Dt]=A(R.image[Dt],!0,l.maxCubemapSize):ft[Dt]=Ot?R.image[Dt].image:R.image[Dt],ft[Dt]=oe(R,ft[Dt]);const ee=ft[0],Yt=u.convert(R.format,R.colorSpace),qt=u.convert(R.type),_e=D(R.internalFormat,Yt,qt,R.colorSpace),j=R.isVideoTexture!==!0,Ft=St.__version===void 0||pt===!0,kt=Ut.dataReady;let $t=I(R,ee);Vt(o.TEXTURE_CUBE_MAP,R);let Pt;if(te){j&&Ft&&i.texStorage2D(o.TEXTURE_CUBE_MAP,$t,_e,ee.width,ee.height);for(let Dt=0;Dt<6;Dt++){Pt=ft[Dt].mipmaps;for(let ae=0;ae<Pt.length;ae++){const ge=Pt[ae];R.format!==ki?Yt!==null?j?kt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,ae,0,0,ge.width,ge.height,Yt,ge.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,ae,_e,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):j?kt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,ae,0,0,ge.width,ge.height,Yt,qt,ge.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,ae,_e,ge.width,ge.height,0,Yt,qt,ge.data)}}}else{if(Pt=R.mipmaps,j&&Ft){Pt.length>0&&$t++;const Dt=re(ft[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,$t,_e,Dt.width,Dt.height)}for(let Dt=0;Dt<6;Dt++)if(Ot){j?kt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,ft[Dt].width,ft[Dt].height,Yt,qt,ft[Dt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,_e,ft[Dt].width,ft[Dt].height,0,Yt,qt,ft[Dt].data);for(let ae=0;ae<Pt.length;ae++){const We=Pt[ae].image[Dt].image;j?kt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,ae+1,0,0,We.width,We.height,Yt,qt,We.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,ae+1,_e,We.width,We.height,0,Yt,qt,We.data)}}else{j?kt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,Yt,qt,ft[Dt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,_e,Yt,qt,ft[Dt]);for(let ae=0;ae<Pt.length;ae++){const ge=Pt[ae];j?kt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,ae+1,0,0,Yt,qt,ge.image[Dt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,ae+1,_e,Yt,qt,ge.image[Dt])}}}M(R)&&_(o.TEXTURE_CUBE_MAP),St.__version=Ut.version,R.onUpdate&&R.onUpdate(R)}O.__version=R.version}function yt(O,R,st,pt,Ut,St){const Qt=u.convert(st.format,st.colorSpace),Bt=u.convert(st.type),Jt=D(st.internalFormat,Qt,Bt,st.colorSpace),te=s.get(R),Ot=s.get(st);if(Ot.__renderTarget=R,!te.__hasExternalTextures){const ft=Math.max(1,R.width>>St),ee=Math.max(1,R.height>>St);Ut===o.TEXTURE_3D||Ut===o.TEXTURE_2D_ARRAY?i.texImage3D(Ut,St,Jt,ft,ee,R.depth,0,Qt,Bt,null):i.texImage2D(Ut,St,Jt,ft,ee,0,Qt,Bt,null)}i.bindFramebuffer(o.FRAMEBUFFER,O),Nt(R)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,Ut,Ot.__webglTexture,0,Ct(R)):(Ut===o.TEXTURE_2D||Ut>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ut<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,Ut,Ot.__webglTexture,St),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Rt(O,R,st){if(o.bindRenderbuffer(o.RENDERBUFFER,O),R.depthBuffer){const pt=R.depthTexture,Ut=pt&&pt.isDepthTexture?pt.type:null,St=b(R.stencilBuffer,Ut),Qt=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Bt=Ct(R);Nt(R)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Bt,St,R.width,R.height):st?o.renderbufferStorageMultisample(o.RENDERBUFFER,Bt,St,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,St,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Qt,o.RENDERBUFFER,O)}else{const pt=R.textures;for(let Ut=0;Ut<pt.length;Ut++){const St=pt[Ut],Qt=u.convert(St.format,St.colorSpace),Bt=u.convert(St.type),Jt=D(St.internalFormat,Qt,Bt,St.colorSpace),te=Ct(R);st&&Nt(R)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,te,Jt,R.width,R.height):Nt(R)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,te,Jt,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,Jt,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function wt(O,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,O),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=s.get(R.depthTexture);pt.__renderTarget=R,(!pt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),Q(R.depthTexture,0);const Ut=pt.__webglTexture,St=Ct(R);if(R.depthTexture.format===Fl)Nt(R)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ut,0,St):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ut,0);else if(R.depthTexture.format===Hl)Nt(R)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ut,0,St):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ut,0);else throw new Error("Unknown depthTexture format")}function At(O){const R=s.get(O),st=O.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==O.depthTexture){const pt=O.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),pt){const Ut=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,pt.removeEventListener("dispose",Ut)};pt.addEventListener("dispose",Ut),R.__depthDisposeCallback=Ut}R.__boundDepthTexture=pt}if(O.depthTexture&&!R.__autoAllocateDepthBuffer){if(st)throw new Error("target.depthTexture not supported in Cube render targets");const pt=O.texture.mipmaps;pt&&pt.length>0?wt(R.__webglFramebuffer[0],O):wt(R.__webglFramebuffer,O)}else if(st){R.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[pt]),R.__webglDepthbuffer[pt]===void 0)R.__webglDepthbuffer[pt]=o.createRenderbuffer(),Rt(R.__webglDepthbuffer[pt],O,!1);else{const Ut=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,St=R.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,St),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ut,o.RENDERBUFFER,St)}}else{const pt=O.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),Rt(R.__webglDepthbuffer,O,!1);else{const Ut=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,St=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,St),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ut,o.RENDERBUFFER,St)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Lt(O,R,st){const pt=s.get(O);R!==void 0&&yt(pt.__webglFramebuffer,O,O.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),st!==void 0&&At(O)}function B(O){const R=O.texture,st=s.get(O),pt=s.get(R);O.addEventListener("dispose",P);const Ut=O.textures,St=O.isWebGLCubeRenderTarget===!0,Qt=Ut.length>1;if(Qt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=R.version,h.memory.textures++),St){st.__webglFramebuffer=[];for(let Bt=0;Bt<6;Bt++)if(R.mipmaps&&R.mipmaps.length>0){st.__webglFramebuffer[Bt]=[];for(let Jt=0;Jt<R.mipmaps.length;Jt++)st.__webglFramebuffer[Bt][Jt]=o.createFramebuffer()}else st.__webglFramebuffer[Bt]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){st.__webglFramebuffer=[];for(let Bt=0;Bt<R.mipmaps.length;Bt++)st.__webglFramebuffer[Bt]=o.createFramebuffer()}else st.__webglFramebuffer=o.createFramebuffer();if(Qt)for(let Bt=0,Jt=Ut.length;Bt<Jt;Bt++){const te=s.get(Ut[Bt]);te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture(),h.memory.textures++)}if(O.samples>0&&Nt(O)===!1){st.__webglMultisampledFramebuffer=o.createFramebuffer(),st.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let Bt=0;Bt<Ut.length;Bt++){const Jt=Ut[Bt];st.__webglColorRenderbuffer[Bt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,st.__webglColorRenderbuffer[Bt]);const te=u.convert(Jt.format,Jt.colorSpace),Ot=u.convert(Jt.type),ft=D(Jt.internalFormat,te,Ot,Jt.colorSpace,O.isXRRenderTarget===!0),ee=Ct(O);o.renderbufferStorageMultisample(o.RENDERBUFFER,ee,ft,O.width,O.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Bt,o.RENDERBUFFER,st.__webglColorRenderbuffer[Bt])}o.bindRenderbuffer(o.RENDERBUFFER,null),O.depthBuffer&&(st.__webglDepthRenderbuffer=o.createRenderbuffer(),Rt(st.__webglDepthRenderbuffer,O,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(St){i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),Vt(o.TEXTURE_CUBE_MAP,R);for(let Bt=0;Bt<6;Bt++)if(R.mipmaps&&R.mipmaps.length>0)for(let Jt=0;Jt<R.mipmaps.length;Jt++)yt(st.__webglFramebuffer[Bt][Jt],O,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,Jt);else yt(st.__webglFramebuffer[Bt],O,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0);M(R)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Qt){for(let Bt=0,Jt=Ut.length;Bt<Jt;Bt++){const te=Ut[Bt],Ot=s.get(te);let ft=o.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(ft=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ft,Ot.__webglTexture),Vt(ft,te),yt(st.__webglFramebuffer,O,te,o.COLOR_ATTACHMENT0+Bt,ft,0),M(te)&&_(ft)}i.unbindTexture()}else{let Bt=o.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(Bt=O.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Bt,pt.__webglTexture),Vt(Bt,R),R.mipmaps&&R.mipmaps.length>0)for(let Jt=0;Jt<R.mipmaps.length;Jt++)yt(st.__webglFramebuffer[Jt],O,R,o.COLOR_ATTACHMENT0,Bt,Jt);else yt(st.__webglFramebuffer,O,R,o.COLOR_ATTACHMENT0,Bt,0);M(R)&&_(Bt),i.unbindTexture()}O.depthBuffer&&At(O)}function Mt(O){const R=O.textures;for(let st=0,pt=R.length;st<pt;st++){const Ut=R[st];if(M(Ut)){const St=w(O),Qt=s.get(Ut).__webglTexture;i.bindTexture(St,Qt),_(St),i.unbindTexture()}}}const _t=[],ht=[];function vt(O){if(O.samples>0){if(Nt(O)===!1){const R=O.textures,st=O.width,pt=O.height;let Ut=o.COLOR_BUFFER_BIT;const St=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Qt=s.get(O),Bt=R.length>1;if(Bt)for(let te=0;te<R.length;te++)i.bindFramebuffer(o.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer);const Jt=O.texture.mipmaps;Jt&&Jt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let te=0;te<R.length;te++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(Ut|=o.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(Ut|=o.STENCIL_BUFFER_BIT)),Bt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Qt.__webglColorRenderbuffer[te]);const Ot=s.get(R[te]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ot,0)}o.blitFramebuffer(0,0,st,pt,0,0,st,pt,Ut,o.NEAREST),p===!0&&(_t.length=0,ht.length=0,_t.push(o.COLOR_ATTACHMENT0+te),O.depthBuffer&&O.resolveDepthBuffer===!1&&(_t.push(St),ht.push(St),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ht)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,_t))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Bt)for(let te=0;te<R.length;te++){i.bindFramebuffer(o.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,Qt.__webglColorRenderbuffer[te]);const Ot=s.get(R[te]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,Ot,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.resolveDepthBuffer===!1&&p){const R=O.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function Ct(O){return Math.min(l.maxSamples,O.samples)}function Nt(O){const R=s.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function zt(O){const R=h.render.frame;v.get(O)!==R&&(v.set(O,R),O.update())}function oe(O,R){const st=O.colorSpace,pt=O.format,Ut=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||st!==vo&&st!==ms&&(Le.getTransfer(st)===Ye?(pt!==ki||Ut!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",st)),R}function re(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(g.width=O.naturalWidth||O.width,g.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(g.width=O.displayWidth,g.height=O.displayHeight):(g.width=O.width,g.height=O.height),g}this.allocateTextureUnit=q,this.resetTextureUnits=H,this.setTexture2D=Q,this.setTexture2DArray=F,this.setTexture3D=$,this.setTextureCube=Z,this.rebindTextures=Lt,this.setupRenderTarget=B,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Nt}function vw(o,t){function i(s,l=ms){let u;const h=Le.getTransfer(l);if(s===qi)return o.UNSIGNED_BYTE;if(s===Mm)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Em)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Ly)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Oy)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Ny)return o.BYTE;if(s===Uy)return o.SHORT;if(s===Il)return o.UNSIGNED_SHORT;if(s===Sm)return o.INT;if(s===tr)return o.UNSIGNED_INT;if(s===ra)return o.FLOAT;if(s===Xi)return o.HALF_FLOAT;if(s===Py)return o.ALPHA;if(s===zy)return o.RGB;if(s===ki)return o.RGBA;if(s===Fl)return o.DEPTH_COMPONENT;if(s===Hl)return o.DEPTH_STENCIL;if(s===Tm)return o.RED;if(s===bm)return o.RED_INTEGER;if(s===Iy)return o.RG;if(s===Am)return o.RG_INTEGER;if(s===Rm)return o.RGBA_INTEGER;if(s===Wc||s===jc||s===Zc||s===Qc)if(h===Ye)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Wc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===jc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Wc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===jc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Ip||s===Bp||s===Fp||s===Hp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Ip)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Bp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Fp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Hp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Gp||s===Vp||s===kp)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Gp||s===Vp)return h===Ye?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===kp)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Xp||s===qp||s===Yp||s===Wp||s===jp||s===Zp||s===Qp||s===Kp||s===Jp||s===$p||s===tm||s===em||s===nm||s===im)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Xp)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===qp)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Yp)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Wp)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===jp)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Zp)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Qp)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Kp)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Jp)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$p)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===tm)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===em)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===nm)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===im)return h===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===am||s===sm||s===rm)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===am)return h===Ye?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===sm)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===rm)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===om||s===lm||s===um||s===cm)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===om)return u.COMPRESSED_RED_RGTC1_EXT;if(s===lm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===um)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===cm)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Bl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const _w=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,xw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class yw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new $y(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new rn({vertexShader:_w,fragmentShader:xw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new fn(new To(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sw extends Mo{constructor(t,i){super();const s=this;let l=null,u=1,h=null,d="local-floor",p=1,g=null,v=null,m=null,x=null,S=null,T=null;const A=typeof XRWebGLBinding<"u",M=new yw,_={},w=i.getContextAttributes();let D=null,b=null;const I=[],z=[],P=new Ht;let V=null;const N=new vi;N.viewport=new cn;const E=new vi;E.viewport=new cn;const U=[N,E],H=new Vb;let q=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let J=I[Y];return J===void 0&&(J=new up,I[Y]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Y){let J=I[Y];return J===void 0&&(J=new up,I[Y]=J),J.getGripSpace()},this.getHand=function(Y){let J=I[Y];return J===void 0&&(J=new up,I[Y]=J),J.getHandSpace()};function Q(Y){const J=z.indexOf(Y.inputSource);if(J===-1)return;const yt=I[J];yt!==void 0&&(yt.update(Y.inputSource,Y.frame,g||h),yt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){l.removeEventListener("select",Q),l.removeEventListener("selectstart",Q),l.removeEventListener("selectend",Q),l.removeEventListener("squeeze",Q),l.removeEventListener("squeezestart",Q),l.removeEventListener("squeezeend",Q),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",$);for(let Y=0;Y<I.length;Y++){const J=z[Y];J!==null&&(z[Y]=null,I[Y].disconnect(J))}q=null,nt=null,M.reset();for(const Y in _)delete _[Y];t.setRenderTarget(D),S=null,x=null,m=null,l=null,b=null,gt.stop(),s.isPresenting=!1,t.setPixelRatio(V),t.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){u=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){d=Y,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||h},this.setReferenceSpace=function(Y){g=Y},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return m===null&&A&&(m=new XRWebGLBinding(l,i)),m},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(Y){if(l=Y,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",Q),l.addEventListener("selectstart",Q),l.addEventListener("selectend",Q),l.addEventListener("squeeze",Q),l.addEventListener("squeezestart",Q),l.addEventListener("squeezeend",Q),l.addEventListener("end",F),l.addEventListener("inputsourceschange",$),w.xrCompatible!==!0&&await i.makeXRCompatible(),V=t.getPixelRatio(),t.getSize(P),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,Rt=null,wt=null;w.depth&&(wt=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=w.stencil?Hl:Fl,Rt=w.stencil?Bl:tr);const At={colorFormat:i.RGBA8,depthFormat:wt,scaleFactor:u};m=this.getBinding(),x=m.createProjectionLayer(At),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),b=new Di(x.textureWidth,x.textureHeight,{format:ki,type:qi,depthTexture:new Jy(x.textureWidth,x.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const yt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:u};S=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),b=new Di(S.framebufferWidth,S.framebufferHeight,{format:ki,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(p),g=null,h=await l.requestReferenceSpace(d),gt.setContext(l),gt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function $(Y){for(let J=0;J<Y.removed.length;J++){const yt=Y.removed[J],Rt=z.indexOf(yt);Rt>=0&&(z[Rt]=null,I[Rt].disconnect(yt))}for(let J=0;J<Y.added.length;J++){const yt=Y.added[J];let Rt=z.indexOf(yt);if(Rt===-1){for(let At=0;At<I.length;At++)if(At>=z.length){z.push(yt),Rt=At;break}else if(z[At]===null){z[At]=yt,Rt=At;break}if(Rt===-1)break}const wt=I[Rt];wt&&wt.connect(yt)}}const Z=new G,lt=new G;function xt(Y,J,yt){Z.setFromMatrixPosition(J.matrixWorld),lt.setFromMatrixPosition(yt.matrixWorld);const Rt=Z.distanceTo(lt),wt=J.projectionMatrix.elements,At=yt.projectionMatrix.elements,Lt=wt[14]/(wt[10]-1),B=wt[14]/(wt[10]+1),Mt=(wt[9]+1)/wt[5],_t=(wt[9]-1)/wt[5],ht=(wt[8]-1)/wt[0],vt=(At[8]+1)/At[0],Ct=Lt*ht,Nt=Lt*vt,zt=Rt/(-ht+vt),oe=zt*-ht;if(J.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(oe),Y.translateZ(zt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),wt[10]===-1)Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const re=Lt+zt,O=B+zt,R=Ct-oe,st=Nt+(Rt-oe),pt=Mt*B/O*re,Ut=_t*B/O*re;Y.projectionMatrix.makePerspective(R,st,pt,Ut,re,O),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function Tt(Y,J){J===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(J.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(l===null)return;let J=Y.near,yt=Y.far;M.texture!==null&&(M.depthNear>0&&(J=M.depthNear),M.depthFar>0&&(yt=M.depthFar)),H.near=E.near=N.near=J,H.far=E.far=N.far=yt,(q!==H.near||nt!==H.far)&&(l.updateRenderState({depthNear:H.near,depthFar:H.far}),q=H.near,nt=H.far),H.layers.mask=Y.layers.mask|6,N.layers.mask=H.layers.mask&3,E.layers.mask=H.layers.mask&5;const Rt=Y.parent,wt=H.cameras;Tt(H,Rt);for(let At=0;At<wt.length;At++)Tt(wt[At],Rt);wt.length===2?xt(H,N,E):H.projectionMatrix.copy(N.projectionMatrix),Vt(Y,H,Rt)};function Vt(Y,J,yt){yt===null?Y.matrix.copy(J.matrixWorld):(Y.matrix.copy(yt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(J.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(J.projectionMatrix),Y.projectionMatrixInverse.copy(J.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Gl*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(Y){p=Y,x!==null&&(x.fixedFoveation=Y),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Y)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(H)},this.getCameraTexture=function(Y){return _[Y]};let se=null;function X(Y,J){if(v=J.getViewerPose(g||h),T=J,v!==null){const yt=v.views;S!==null&&(t.setRenderTargetFramebuffer(b,S.framebuffer),t.setRenderTarget(b));let Rt=!1;yt.length!==H.cameras.length&&(H.cameras.length=0,Rt=!0);for(let B=0;B<yt.length;B++){const Mt=yt[B];let _t=null;if(S!==null)_t=S.getViewport(Mt);else{const vt=m.getViewSubImage(x,Mt);_t=vt.viewport,B===0&&(t.setRenderTargetTextures(b,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(b))}let ht=U[B];ht===void 0&&(ht=new vi,ht.layers.enable(B),ht.viewport=new cn,U[B]=ht),ht.matrix.fromArray(Mt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Mt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(_t.x,_t.y,_t.width,_t.height),B===0&&(H.matrix.copy(ht.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Rt===!0&&H.cameras.push(ht)}const wt=l.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&A){m=s.getBinding();const B=m.getDepthInformation(yt[0]);B&&B.isValid&&B.texture&&M.init(B,l.renderState)}if(wt&&wt.includes("camera-access")&&A){t.state.unbindTexture(),m=s.getBinding();for(let B=0;B<yt.length;B++){const Mt=yt[B].camera;if(Mt){let _t=_[Mt];_t||(_t=new $y,_[Mt]=_t);const ht=m.getCameraImage(Mt);_t.sourceTexture=ht}}}}for(let yt=0;yt<I.length;yt++){const Rt=z[yt],wt=I[yt];Rt!==null&&wt!==void 0&&wt.update(Rt,J,g||h)}se&&se(Y,J),J.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:J}),T=null}const gt=new hS;gt.setAnimationLoop(X),this.setAnimationLoop=function(Y){se=Y},this.dispose=function(){}}}const Ys=new Ni,Mw=new Ve;function Ew(o,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function s(M,_){_.color.getRGB(M.fogColor.value,Yy(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,w,D,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(M,_):_.isMeshToonMaterial?(u(M,_),m(M,_)):_.isMeshPhongMaterial?(u(M,_),v(M,_)):_.isMeshStandardMaterial?(u(M,_),x(M,_),_.isMeshPhysicalMaterial&&S(M,_,b)):_.isMeshMatcapMaterial?(u(M,_),T(M,_)):_.isMeshDepthMaterial?u(M,_):_.isMeshDistanceMaterial?(u(M,_),A(M,_)):_.isMeshNormalMaterial?u(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?p(M,_,w,D):_.isSpriteMaterial?g(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===kn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===kn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const w=t.get(_),D=w.envMap,b=w.envMapRotation;D&&(M.envMap.value=D,Ys.copy(b),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),M.envMapRotation.value.setFromMatrix4(Mw.makeRotationFromEuler(Ys)),M.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function p(M,_,w,D){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*w,M.scale.value=D*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function v(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function m(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function x(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function S(M,_,w){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===kn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function T(M,_){_.matcap&&(M.matcap.value=_.matcap)}function A(M,_){const w=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function Tw(o,t,i,s){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(w,D){const b=D.program;s.uniformBlockBinding(w,b)}function g(w,D){let b=l[w.id];b===void 0&&(T(w),b=v(w),l[w.id]=b,w.addEventListener("dispose",M));const I=D.program;s.updateUBOMapping(w,I);const z=t.render.frame;u[w.id]!==z&&(x(w),u[w.id]=z)}function v(w){const D=m();w.__bindingPointIndex=D;const b=o.createBuffer(),I=w.__size,z=w.usage;return o.bindBuffer(o.UNIFORM_BUFFER,b),o.bufferData(o.UNIFORM_BUFFER,I,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,b),b}function m(){for(let w=0;w<d;w++)if(h.indexOf(w)===-1)return h.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(w){const D=l[w.id],b=w.uniforms,I=w.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let z=0,P=b.length;z<P;z++){const V=Array.isArray(b[z])?b[z]:[b[z]];for(let N=0,E=V.length;N<E;N++){const U=V[N];if(S(U,z,N,I)===!0){const H=U.__offset,q=Array.isArray(U.value)?U.value:[U.value];let nt=0;for(let Q=0;Q<q.length;Q++){const F=q[Q],$=A(F);typeof F=="number"||typeof F=="boolean"?(U.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,H+nt,U.__data)):F.isMatrix3?(U.__data[0]=F.elements[0],U.__data[1]=F.elements[1],U.__data[2]=F.elements[2],U.__data[3]=0,U.__data[4]=F.elements[3],U.__data[5]=F.elements[4],U.__data[6]=F.elements[5],U.__data[7]=0,U.__data[8]=F.elements[6],U.__data[9]=F.elements[7],U.__data[10]=F.elements[8],U.__data[11]=0):(F.toArray(U.__data,nt),nt+=$.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,H,U.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(w,D,b,I){const z=w.value,P=D+"_"+b;if(I[P]===void 0)return typeof z=="number"||typeof z=="boolean"?I[P]=z:I[P]=z.clone(),!0;{const V=I[P];if(typeof z=="number"||typeof z=="boolean"){if(V!==z)return I[P]=z,!0}else if(V.equals(z)===!1)return V.copy(z),!0}return!1}function T(w){const D=w.uniforms;let b=0;const I=16;for(let P=0,V=D.length;P<V;P++){const N=Array.isArray(D[P])?D[P]:[D[P]];for(let E=0,U=N.length;E<U;E++){const H=N[E],q=Array.isArray(H.value)?H.value:[H.value];for(let nt=0,Q=q.length;nt<Q;nt++){const F=q[nt],$=A(F),Z=b%I,lt=Z%$.boundary,xt=Z+lt;b+=lt,xt!==0&&I-xt<$.storage&&(b+=I-xt),H.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=$.storage}}}const z=b%I;return z>0&&(b+=I-z),w.__size=b,w.__cache={},this}function A(w){const D={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(D.boundary=4,D.storage=4):w.isVector2?(D.boundary=8,D.storage=8):w.isVector3||w.isColor?(D.boundary=16,D.storage=12):w.isVector4?(D.boundary=16,D.storage=16):w.isMatrix3?(D.boundary=48,D.storage=48):w.isMatrix4?(D.boundary=64,D.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),D}function M(w){const D=w.target;D.removeEventListener("dispose",M);const b=h.indexOf(D.__bindingPointIndex);h.splice(b,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete u[D.id]}function _(){for(const w in l)o.deleteBuffer(l[w]);h=[],l={},u={}}return{bind:p,update:g,dispose:_}}class bw{constructor(t={}){const{canvas:i=MT(),context:s=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=h;const T=new Uint32Array(4),A=new Int32Array(4);let M=null,_=null;const w=[],D=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=La,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let I=!1;this._outputColorSpace=si;let z=0,P=0,V=null,N=-1,E=null;const U=new cn,H=new cn;let q=null;const nt=new he(0);let Q=0,F=i.width,$=i.height,Z=1,lt=null,xt=null;const Tt=new cn(0,0,F,$),Vt=new cn(0,0,F,$);let se=!1;const X=new Nm;let gt=!1,Y=!1;const J=new Ve,yt=new G,Rt=new cn,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function Lt(){return V===null?Z:1}let B=s;function Mt(L,it){return i.getContext(L,it)}try{const L={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:m};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${xm}`),i.addEventListener("webglcontextlost",kt,!1),i.addEventListener("webglcontextrestored",$t,!1),i.addEventListener("webglcontextcreationerror",Pt,!1),B===null){const it="webgl2";if(B=Mt(it,L),B===null)throw Mt(it)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let _t,ht,vt,Ct,Nt,zt,oe,re,O,R,st,pt,Ut,St,Qt,Bt,Jt,te,Ot,ft,ee,Yt,qt,_e;function j(){_t=new PR(B),_t.init(),Yt=new vw(B,_t),ht=new CR(B,_t,t,Yt),vt=new mw(B,_t),ht.reversedDepthBuffer&&x&&vt.buffers.depth.setReversed(!0),Ct=new BR(B),Nt=new nw,zt=new gw(B,_t,vt,Nt,ht,Yt,Ct),oe=new DR(b),re=new OR(b),O=new Xb(B),qt=new AR(B,O),R=new zR(B,O,Ct,qt),st=new HR(B,R,O,Ct),Ot=new FR(B,ht,zt),Bt=new wR(Nt),pt=new ew(b,oe,re,_t,ht,qt,Bt),Ut=new Ew(b,Nt),St=new aw,Qt=new cw(_t),te=new bR(b,oe,re,vt,st,S,p),Jt=new dw(b,st,ht),_e=new Tw(B,Ct,ht,vt),ft=new RR(B,_t,Ct),ee=new IR(B,_t,Ct),Ct.programs=pt.programs,b.capabilities=ht,b.extensions=_t,b.properties=Nt,b.renderLists=St,b.shadowMap=Jt,b.state=vt,b.info=Ct}j();const Ft=new Sw(b,B);this.xr=Ft,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const L=_t.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=_t.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(L){L!==void 0&&(Z=L,this.setSize(F,$,!1))},this.getSize=function(L){return L.set(F,$)},this.setSize=function(L,it,dt=!0){if(Ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=L,$=it,i.width=Math.floor(L*Z),i.height=Math.floor(it*Z),dt===!0&&(i.style.width=L+"px",i.style.height=it+"px"),this.setViewport(0,0,L,it)},this.getDrawingBufferSize=function(L){return L.set(F*Z,$*Z).floor()},this.setDrawingBufferSize=function(L,it,dt){F=L,$=it,Z=dt,i.width=Math.floor(L*dt),i.height=Math.floor(it*dt),this.setViewport(0,0,L,it)},this.getCurrentViewport=function(L){return L.copy(U)},this.getViewport=function(L){return L.copy(Tt)},this.setViewport=function(L,it,dt,mt){L.isVector4?Tt.set(L.x,L.y,L.z,L.w):Tt.set(L,it,dt,mt),vt.viewport(U.copy(Tt).multiplyScalar(Z).round())},this.getScissor=function(L){return L.copy(Vt)},this.setScissor=function(L,it,dt,mt){L.isVector4?Vt.set(L.x,L.y,L.z,L.w):Vt.set(L,it,dt,mt),vt.scissor(H.copy(Vt).multiplyScalar(Z).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(L){vt.setScissorTest(se=L)},this.setOpaqueSort=function(L){lt=L},this.setTransparentSort=function(L){xt=L},this.getClearColor=function(L){return L.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(L=!0,it=!0,dt=!0){let mt=0;if(L){let at=!1;if(V!==null){const It=V.texture.format;at=It===Rm||It===Am||It===bm}if(at){const It=V.texture.type,Wt=It===qi||It===tr||It===Il||It===Bl||It===Mm||It===Em,Zt=te.getClearColor(),Gt=te.getClearAlpha(),ne=Zt.r,fe=Zt.g,ue=Zt.b;Wt?(T[0]=ne,T[1]=fe,T[2]=ue,T[3]=Gt,B.clearBufferuiv(B.COLOR,0,T)):(A[0]=ne,A[1]=fe,A[2]=ue,A[3]=Gt,B.clearBufferiv(B.COLOR,0,A))}else mt|=B.COLOR_BUFFER_BIT}it&&(mt|=B.DEPTH_BUFFER_BIT),dt&&(mt|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(mt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",kt,!1),i.removeEventListener("webglcontextrestored",$t,!1),i.removeEventListener("webglcontextcreationerror",Pt,!1),te.dispose(),St.dispose(),Qt.dispose(),Nt.dispose(),oe.dispose(),re.dispose(),st.dispose(),qt.dispose(),_e.dispose(),pt.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",Sn),Ft.removeEventListener("sessionend",Bn),ua.stop()};function kt(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function $t(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const L=Ct.autoReset,it=Jt.enabled,dt=Jt.autoUpdate,mt=Jt.needsUpdate,at=Jt.type;j(),Ct.autoReset=L,Jt.enabled=it,Jt.autoUpdate=dt,Jt.needsUpdate=mt,Jt.type=at}function Pt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Dt(L){const it=L.target;it.removeEventListener("dispose",Dt),ae(it)}function ae(L){ge(L),Nt.remove(L)}function ge(L){const it=Nt.get(L).programs;it!==void 0&&(it.forEach(function(dt){pt.releaseProgram(dt)}),L.isShaderMaterial&&pt.releaseShaderCache(L))}this.renderBufferDirect=function(L,it,dt,mt,at,It){it===null&&(it=wt);const Wt=at.isMesh&&at.matrixWorld.determinant()<0,Zt=Zl(L,it,dt,mt,at);vt.setMaterial(mt,Wt);let Gt=dt.index,ne=1;if(mt.wireframe===!0){if(Gt=R.getWireframeAttribute(dt),Gt===void 0)return;ne=2}const fe=dt.drawRange,ue=dt.attributes.position;let be=fe.start*ne,He=(fe.start+fe.count)*ne;It!==null&&(be=Math.max(be,It.start*ne),He=Math.min(He,(It.start+It.count)*ne)),Gt!==null?(be=Math.max(be,0),He=Math.min(He,Gt.count)):ue!=null&&(be=Math.max(be,0),He=Math.min(He,ue.count));const tn=He-be;if(tn<0||tn===1/0)return;qt.setup(at,mt,Zt,dt,Gt);let Ie,Oe=ft;if(Gt!==null&&(Ie=O.get(Gt),Oe=ee,Oe.setIndex(Ie)),at.isMesh)mt.wireframe===!0?(vt.setLineWidth(mt.wireframeLinewidth*Lt()),Oe.setMode(B.LINES)):Oe.setMode(B.TRIANGLES);else if(at.isLine){let ce=mt.linewidth;ce===void 0&&(ce=1),vt.setLineWidth(ce*Lt()),at.isLineSegments?Oe.setMode(B.LINES):at.isLineLoop?Oe.setMode(B.LINE_LOOP):Oe.setMode(B.LINE_STRIP)}else at.isPoints?Oe.setMode(B.POINTS):at.isSprite&&Oe.setMode(B.TRIANGLES);if(at.isBatchedMesh)if(at._multiDrawInstances!==null)Vl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount,at._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))Oe.renderMultiDraw(at._multiDrawStarts,at._multiDrawCounts,at._multiDrawCount);else{const ce=at._multiDrawStarts,Be=at._multiDrawCounts,Ee=at._multiDrawCount,Mn=Gt?O.get(Gt).bytesPerElement:1,ri=Nt.get(mt).currentProgram.getUniforms();for(let Pe=0;Pe<Ee;Pe++)ri.setValue(B,"_gl_DrawID",Pe),Oe.render(ce[Pe]/Mn,Be[Pe])}else if(at.isInstancedMesh)Oe.renderInstances(be,tn,at.count);else if(dt.isInstancedBufferGeometry){const ce=dt._maxInstanceCount!==void 0?dt._maxInstanceCount:1/0,Be=Math.min(dt.instanceCount,ce);Oe.renderInstances(be,tn,Be)}else Oe.render(be,tn)};function We(L,it,dt){L.transparent===!0&&L.side===Gi&&L.forceSinglePass===!1?(L.side=kn,L.needsUpdate=!0,xi(L,it,dt),L.side=gs,L.needsUpdate=!0,xi(L,it,dt),L.side=Gi):xi(L,it,dt)}this.compile=function(L,it,dt=null){dt===null&&(dt=L),_=Qt.get(dt),_.init(it),D.push(_),dt.traverseVisible(function(at){at.isLight&&at.layers.test(it.layers)&&(_.pushLight(at),at.castShadow&&_.pushShadow(at))}),L!==dt&&L.traverseVisible(function(at){at.isLight&&at.layers.test(it.layers)&&(_.pushLight(at),at.castShadow&&_.pushShadow(at))}),_.setupLights();const mt=new Set;return L.traverse(function(at){if(!(at.isMesh||at.isPoints||at.isLine||at.isSprite))return;const It=at.material;if(It)if(Array.isArray(It))for(let Wt=0;Wt<It.length;Wt++){const Zt=It[Wt];We(Zt,dt,at),mt.add(Zt)}else We(It,dt,at),mt.add(It)}),_=D.pop(),mt},this.compileAsync=function(L,it,dt=null){const mt=this.compile(L,it,dt);return new Promise(at=>{function It(){if(mt.forEach(function(Wt){Nt.get(Wt).currentProgram.isReady()&&mt.delete(Wt)}),mt.size===0){at(L);return}setTimeout(It,10)}_t.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let we=null;function nn(L){we&&we(L)}function Sn(){ua.stop()}function Bn(){ua.start()}const ua=new hS;ua.setAnimationLoop(nn),typeof self<"u"&&ua.setContext(self),this.setAnimationLoop=function(L){we=L,Ft.setAnimationLoop(L),L===null?ua.stop():ua.start()},Ft.addEventListener("sessionstart",Sn),Ft.addEventListener("sessionend",Bn),this.render=function(L,it){if(it!==void 0&&it.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),it.parent===null&&it.matrixWorldAutoUpdate===!0&&it.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(it),it=Ft.getCamera()),L.isScene===!0&&L.onBeforeRender(b,L,it,V),_=Qt.get(L,D.length),_.init(it),D.push(_),J.multiplyMatrices(it.projectionMatrix,it.matrixWorldInverse),X.setFromProjectionMatrix(J,oa,it.reversedDepth),Y=this.localClippingEnabled,gt=Bt.init(this.clippingPlanes,Y),M=St.get(L,w.length),M.init(),w.push(M),Ft.enabled===!0&&Ft.isPresenting===!0){const It=b.xr.getDepthSensingMesh();It!==null&&Ro(It,it,-1/0,b.sortObjects)}Ro(L,it,0,b.sortObjects),M.finish(),b.sortObjects===!0&&M.sort(lt,xt),At=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,At&&te.addToRenderList(M,L),this.info.render.frame++,gt===!0&&Bt.beginShadows();const dt=_.state.shadowsArray;Jt.render(dt,L,it),gt===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset();const mt=M.opaque,at=M.transmissive;if(_.setupLights(),it.isArrayCamera){const It=it.cameras;if(at.length>0)for(let Wt=0,Zt=It.length;Wt<Zt;Wt++){const Gt=It[Wt];vs(mt,at,L,Gt)}At&&te.render(L);for(let Wt=0,Zt=It.length;Wt<Zt;Wt++){const Gt=It[Wt];jl(M,L,Gt,Gt.viewport)}}else at.length>0&&vs(mt,at,L,it),At&&te.render(L),jl(M,L,it);V!==null&&P===0&&(zt.updateMultisampleRenderTarget(V),zt.updateRenderTargetMipmap(V)),L.isScene===!0&&L.onAfterRender(b,L,it),qt.resetDefaultState(),N=-1,E=null,D.pop(),D.length>0?(_=D[D.length-1],gt===!0&&Bt.setGlobalState(b.clippingPlanes,_.state.camera)):_=null,w.pop(),w.length>0?M=w[w.length-1]:M=null};function Ro(L,it,dt,mt){if(L.visible===!1)return;if(L.layers.test(it.layers)){if(L.isGroup)dt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(it);else if(L.isLight)_.pushLight(L),L.castShadow&&_.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||X.intersectsSprite(L)){mt&&Rt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(J);const Wt=st.update(L),Zt=L.material;Zt.visible&&M.push(L,Wt,Zt,dt,Rt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||X.intersectsObject(L))){const Wt=st.update(L),Zt=L.material;if(mt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Rt.copy(L.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),Rt.copy(Wt.boundingSphere.center)),Rt.applyMatrix4(L.matrixWorld).applyMatrix4(J)),Array.isArray(Zt)){const Gt=Wt.groups;for(let ne=0,fe=Gt.length;ne<fe;ne++){const ue=Gt[ne],be=Zt[ue.materialIndex];be&&be.visible&&M.push(L,Wt,be,dt,Rt.z,ue)}}else Zt.visible&&M.push(L,Wt,Zt,dt,Rt.z,null)}}const It=L.children;for(let Wt=0,Zt=It.length;Wt<Zt;Wt++)Ro(It[Wt],it,dt,mt)}function jl(L,it,dt,mt){const at=L.opaque,It=L.transmissive,Wt=L.transparent;_.setupLightsView(dt),gt===!0&&Bt.setGlobalState(b.clippingPlanes,dt),mt&&vt.viewport(U.copy(mt)),at.length>0&&ca(at,it,dt),It.length>0&&ca(It,it,dt),Wt.length>0&&ca(Wt,it,dt),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function vs(L,it,dt,mt){if((dt.isScene===!0?dt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[mt.id]===void 0&&(_.state.transmissionRenderTarget[mt.id]=new Di(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?Xi:qi,minFilter:Js,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const It=_.state.transmissionRenderTarget[mt.id],Wt=mt.viewport||U;It.setSize(Wt.z*b.transmissionResolutionScale,Wt.w*b.transmissionResolutionScale);const Zt=b.getRenderTarget(),Gt=b.getActiveCubeFace(),ne=b.getActiveMipmapLevel();b.setRenderTarget(It),b.getClearColor(nt),Q=b.getClearAlpha(),Q<1&&b.setClearColor(16777215,.5),b.clear(),At&&te.render(dt);const fe=b.toneMapping;b.toneMapping=La;const ue=mt.viewport;if(mt.viewport!==void 0&&(mt.viewport=void 0),_.setupLightsView(mt),gt===!0&&Bt.setGlobalState(b.clippingPlanes,mt),ca(L,dt,mt),zt.updateMultisampleRenderTarget(It),zt.updateRenderTargetMipmap(It),_t.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let He=0,tn=it.length;He<tn;He++){const Ie=it[He],Oe=Ie.object,ce=Ie.geometry,Be=Ie.material,Ee=Ie.group;if(Be.side===Gi&&Oe.layers.test(mt.layers)){const Mn=Be.side;Be.side=kn,Be.needsUpdate=!0,_s(Oe,dt,mt,ce,Be,Ee),Be.side=Mn,Be.needsUpdate=!0,be=!0}}be===!0&&(zt.updateMultisampleRenderTarget(It),zt.updateRenderTargetMipmap(It))}b.setRenderTarget(Zt,Gt,ne),b.setClearColor(nt,Q),ue!==void 0&&(mt.viewport=ue),b.toneMapping=fe}function ca(L,it,dt){const mt=it.isScene===!0?it.overrideMaterial:null;for(let at=0,It=L.length;at<It;at++){const Wt=L[at],Zt=Wt.object,Gt=Wt.geometry,ne=Wt.group;let fe=Wt.material;fe.allowOverride===!0&&mt!==null&&(fe=mt),Zt.layers.test(dt.layers)&&_s(Zt,it,dt,Gt,fe,ne)}}function _s(L,it,dt,mt,at,It){L.onBeforeRender(b,it,dt,mt,at,It),L.modelViewMatrix.multiplyMatrices(dt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),at.onBeforeRender(b,it,dt,mt,L,It),at.transparent===!0&&at.side===Gi&&at.forceSinglePass===!1?(at.side=kn,at.needsUpdate=!0,b.renderBufferDirect(dt,it,mt,at,L,It),at.side=gs,at.needsUpdate=!0,b.renderBufferDirect(dt,it,mt,at,L,It),at.side=Gi):b.renderBufferDirect(dt,it,mt,at,L,It),L.onAfterRender(b,it,dt,mt,at,It)}function xi(L,it,dt){it.isScene!==!0&&(it=wt);const mt=Nt.get(L),at=_.state.lights,It=_.state.shadowsArray,Wt=at.state.version,Zt=pt.getParameters(L,at.state,It,it,dt),Gt=pt.getProgramCacheKey(Zt);let ne=mt.programs;mt.environment=L.isMeshStandardMaterial?it.environment:null,mt.fog=it.fog,mt.envMap=(L.isMeshStandardMaterial?re:oe).get(L.envMap||mt.environment),mt.envMapRotation=mt.environment!==null&&L.envMap===null?it.environmentRotation:L.envMapRotation,ne===void 0&&(L.addEventListener("dispose",Dt),ne=new Map,mt.programs=ne);let fe=ne.get(Gt);if(fe!==void 0){if(mt.currentProgram===fe&&mt.lightsStateVersion===Wt)return Pa(L,Zt),fe}else Zt.uniforms=pt.getUniforms(L),L.onBeforeCompile(Zt,b),fe=pt.acquireProgram(Zt,Gt),ne.set(Gt,fe),mt.uniforms=Zt.uniforms;const ue=mt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ue.clippingPlanes=Bt.uniform),Pa(L,Zt),mt.needsLights=Ql(L),mt.lightsStateVersion=Wt,mt.needsLights&&(ue.ambientLightColor.value=at.state.ambient,ue.lightProbe.value=at.state.probe,ue.directionalLights.value=at.state.directional,ue.directionalLightShadows.value=at.state.directionalShadow,ue.spotLights.value=at.state.spot,ue.spotLightShadows.value=at.state.spotShadow,ue.rectAreaLights.value=at.state.rectArea,ue.ltc_1.value=at.state.rectAreaLTC1,ue.ltc_2.value=at.state.rectAreaLTC2,ue.pointLights.value=at.state.point,ue.pointLightShadows.value=at.state.pointShadow,ue.hemisphereLights.value=at.state.hemi,ue.directionalShadowMap.value=at.state.directionalShadowMap,ue.directionalShadowMatrix.value=at.state.directionalShadowMatrix,ue.spotShadowMap.value=at.state.spotShadowMap,ue.spotLightMatrix.value=at.state.spotLightMatrix,ue.spotLightMap.value=at.state.spotLightMap,ue.pointShadowMap.value=at.state.pointShadowMap,ue.pointShadowMatrix.value=at.state.pointShadowMatrix),mt.currentProgram=fe,mt.uniformsList=null,fe}function xs(L){if(L.uniformsList===null){const it=L.currentProgram.getUniforms();L.uniformsList=Kc.seqWithValue(it.seq,L.uniforms)}return L.uniformsList}function Pa(L,it){const dt=Nt.get(L);dt.outputColorSpace=it.outputColorSpace,dt.batching=it.batching,dt.batchingColor=it.batchingColor,dt.instancing=it.instancing,dt.instancingColor=it.instancingColor,dt.instancingMorph=it.instancingMorph,dt.skinning=it.skinning,dt.morphTargets=it.morphTargets,dt.morphNormals=it.morphNormals,dt.morphColors=it.morphColors,dt.morphTargetsCount=it.morphTargetsCount,dt.numClippingPlanes=it.numClippingPlanes,dt.numIntersection=it.numClipIntersection,dt.vertexAlphas=it.vertexAlphas,dt.vertexTangents=it.vertexTangents,dt.toneMapping=it.toneMapping}function Zl(L,it,dt,mt,at){it.isScene!==!0&&(it=wt),zt.resetTextureUnits();const It=it.fog,Wt=mt.isMeshStandardMaterial?it.environment:null,Zt=V===null?b.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:vo,Gt=(mt.isMeshStandardMaterial?re:oe).get(mt.envMap||Wt),ne=mt.vertexColors===!0&&!!dt.attributes.color&&dt.attributes.color.itemSize===4,fe=!!dt.attributes.tangent&&(!!mt.normalMap||mt.anisotropy>0),ue=!!dt.morphAttributes.position,be=!!dt.morphAttributes.normal,He=!!dt.morphAttributes.color;let tn=La;mt.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&(tn=b.toneMapping);const Ie=dt.morphAttributes.position||dt.morphAttributes.normal||dt.morphAttributes.color,Oe=Ie!==void 0?Ie.length:0,ce=Nt.get(mt),Be=_.state.lights;if(gt===!0&&(Y===!0||L!==E)){const on=L===E&&mt.id===N;Bt.setState(mt,L,on)}let Ee=!1;mt.version===ce.__version?(ce.needsLights&&ce.lightsStateVersion!==Be.state.version||ce.outputColorSpace!==Zt||at.isBatchedMesh&&ce.batching===!1||!at.isBatchedMesh&&ce.batching===!0||at.isBatchedMesh&&ce.batchingColor===!0&&at.colorTexture===null||at.isBatchedMesh&&ce.batchingColor===!1&&at.colorTexture!==null||at.isInstancedMesh&&ce.instancing===!1||!at.isInstancedMesh&&ce.instancing===!0||at.isSkinnedMesh&&ce.skinning===!1||!at.isSkinnedMesh&&ce.skinning===!0||at.isInstancedMesh&&ce.instancingColor===!0&&at.instanceColor===null||at.isInstancedMesh&&ce.instancingColor===!1&&at.instanceColor!==null||at.isInstancedMesh&&ce.instancingMorph===!0&&at.morphTexture===null||at.isInstancedMesh&&ce.instancingMorph===!1&&at.morphTexture!==null||ce.envMap!==Gt||mt.fog===!0&&ce.fog!==It||ce.numClippingPlanes!==void 0&&(ce.numClippingPlanes!==Bt.numPlanes||ce.numIntersection!==Bt.numIntersection)||ce.vertexAlphas!==ne||ce.vertexTangents!==fe||ce.morphTargets!==ue||ce.morphNormals!==be||ce.morphColors!==He||ce.toneMapping!==tn||ce.morphTargetsCount!==Oe)&&(Ee=!0):(Ee=!0,ce.__version=mt.version);let Mn=ce.currentProgram;Ee===!0&&(Mn=xi(mt,it,at));let ri=!1,Pe=!1,za=!1;const Ke=Mn.getUniforms(),qn=ce.uniforms;if(vt.useProgram(Mn.program)&&(ri=!0,Pe=!0,za=!0),mt.id!==N&&(N=mt.id,Pe=!0),ri||E!==L){vt.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Ke.setValue(B,"projectionMatrix",L.projectionMatrix),Ke.setValue(B,"viewMatrix",L.matrixWorldInverse);const Fn=Ke.map.cameraPosition;Fn!==void 0&&Fn.setValue(B,yt.setFromMatrixPosition(L.matrixWorld)),ht.logarithmicDepthBuffer&&Ke.setValue(B,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(mt.isMeshPhongMaterial||mt.isMeshToonMaterial||mt.isMeshLambertMaterial||mt.isMeshBasicMaterial||mt.isMeshStandardMaterial||mt.isShaderMaterial)&&Ke.setValue(B,"isOrthographic",L.isOrthographicCamera===!0),E!==L&&(E=L,Pe=!0,za=!0)}if(at.isSkinnedMesh){Ke.setOptional(B,at,"bindMatrix"),Ke.setOptional(B,at,"bindMatrixInverse");const on=at.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),Ke.setValue(B,"boneTexture",on.boneTexture,zt))}at.isBatchedMesh&&(Ke.setOptional(B,at,"batchingTexture"),Ke.setValue(B,"batchingTexture",at._matricesTexture,zt),Ke.setOptional(B,at,"batchingIdTexture"),Ke.setValue(B,"batchingIdTexture",at._indirectTexture,zt),Ke.setOptional(B,at,"batchingColorTexture"),at._colorsTexture!==null&&Ke.setValue(B,"batchingColorTexture",at._colorsTexture,zt));const pn=dt.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Ot.update(at,dt,Mn),(Pe||ce.receiveShadow!==at.receiveShadow)&&(ce.receiveShadow=at.receiveShadow,Ke.setValue(B,"receiveShadow",at.receiveShadow)),mt.isMeshGouraudMaterial&&mt.envMap!==null&&(qn.envMap.value=Gt,qn.flipEnvMap.value=Gt.isCubeTexture&&Gt.isRenderTargetTexture===!1?-1:1),mt.isMeshStandardMaterial&&mt.envMap===null&&it.environment!==null&&(qn.envMapIntensity.value=it.environmentIntensity),Pe&&(Ke.setValue(B,"toneMappingExposure",b.toneMappingExposure),ce.needsLights&&uf(qn,za),It&&mt.fog===!0&&Ut.refreshFogUniforms(qn,It),Ut.refreshMaterialUniforms(qn,mt,Z,$,_.state.transmissionRenderTarget[L.id]),Kc.upload(B,xs(ce),qn,zt)),mt.isShaderMaterial&&mt.uniformsNeedUpdate===!0&&(Kc.upload(B,xs(ce),qn,zt),mt.uniformsNeedUpdate=!1),mt.isSpriteMaterial&&Ke.setValue(B,"center",at.center),Ke.setValue(B,"modelViewMatrix",at.modelViewMatrix),Ke.setValue(B,"normalMatrix",at.normalMatrix),Ke.setValue(B,"modelMatrix",at.matrixWorld),mt.isShaderMaterial||mt.isRawShaderMaterial){const on=mt.uniformsGroups;for(let Fn=0,rr=on.length;Fn<rr;Fn++){const Yi=on[Fn];_e.update(Yi,Mn),_e.bind(Yi,Mn)}}return Mn}function uf(L,it){L.ambientLightColor.needsUpdate=it,L.lightProbe.needsUpdate=it,L.directionalLights.needsUpdate=it,L.directionalLightShadows.needsUpdate=it,L.pointLights.needsUpdate=it,L.pointLightShadows.needsUpdate=it,L.spotLights.needsUpdate=it,L.spotLightShadows.needsUpdate=it,L.rectAreaLights.needsUpdate=it,L.hemisphereLights.needsUpdate=it}function Ql(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(L,it,dt){const mt=Nt.get(L);mt.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,mt.__autoAllocateDepthBuffer===!1&&(mt.__useRenderToTexture=!1),Nt.get(L.texture).__webglTexture=it,Nt.get(L.depthTexture).__webglTexture=mt.__autoAllocateDepthBuffer?void 0:dt,mt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,it){const dt=Nt.get(L);dt.__webglFramebuffer=it,dt.__useDefaultFramebuffer=it===void 0};const Co=B.createFramebuffer();this.setRenderTarget=function(L,it=0,dt=0){V=L,z=it,P=dt;let mt=!0,at=null,It=!1,Wt=!1;if(L){const Gt=Nt.get(L);if(Gt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(B.FRAMEBUFFER,null),mt=!1;else if(Gt.__webglFramebuffer===void 0)zt.setupRenderTarget(L);else if(Gt.__hasExternalTextures)zt.rebindTextures(L,Nt.get(L.texture).__webglTexture,Nt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const ue=L.depthTexture;if(Gt.__boundDepthTexture!==ue){if(ue!==null&&Nt.has(ue)&&(L.width!==ue.image.width||L.height!==ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");zt.setupDepthRenderbuffer(L)}}const ne=L.texture;(ne.isData3DTexture||ne.isDataArrayTexture||ne.isCompressedArrayTexture)&&(Wt=!0);const fe=Nt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(fe[it])?at=fe[it][dt]:at=fe[it],It=!0):L.samples>0&&zt.useMultisampledRTT(L)===!1?at=Nt.get(L).__webglMultisampledFramebuffer:Array.isArray(fe)?at=fe[dt]:at=fe,U.copy(L.viewport),H.copy(L.scissor),q=L.scissorTest}else U.copy(Tt).multiplyScalar(Z).floor(),H.copy(Vt).multiplyScalar(Z).floor(),q=se;if(dt!==0&&(at=Co),vt.bindFramebuffer(B.FRAMEBUFFER,at)&&mt&&vt.drawBuffers(L,at),vt.viewport(U),vt.scissor(H),vt.setScissorTest(q),It){const Gt=Nt.get(L.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+it,Gt.__webglTexture,dt)}else if(Wt){const Gt=it;for(let ne=0;ne<L.textures.length;ne++){const fe=Nt.get(L.textures[ne]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+ne,fe.__webglTexture,dt,Gt)}}else if(L!==null&&dt!==0){const Gt=Nt.get(L.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Gt.__webglTexture,dt)}N=-1},this.readRenderTargetPixels=function(L,it,dt,mt,at,It,Wt,Zt=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Gt=Nt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Wt!==void 0&&(Gt=Gt[Wt]),Gt){vt.bindFramebuffer(B.FRAMEBUFFER,Gt);try{const ne=L.textures[Zt],fe=ne.format,ue=ne.type;if(!ht.textureFormatReadable(fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}it>=0&&it<=L.width-mt&&dt>=0&&dt<=L.height-at&&(L.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Zt),B.readPixels(it,dt,mt,at,Yt.convert(fe),Yt.convert(ue),It))}finally{const ne=V!==null?Nt.get(V).__webglFramebuffer:null;vt.bindFramebuffer(B.FRAMEBUFFER,ne)}}},this.readRenderTargetPixelsAsync=async function(L,it,dt,mt,at,It,Wt,Zt=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Gt=Nt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Wt!==void 0&&(Gt=Gt[Wt]),Gt)if(it>=0&&it<=L.width-mt&&dt>=0&&dt<=L.height-at){vt.bindFramebuffer(B.FRAMEBUFFER,Gt);const ne=L.textures[Zt],fe=ne.format,ue=ne.type;if(!ht.textureFormatReadable(fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,be),B.bufferData(B.PIXEL_PACK_BUFFER,It.byteLength,B.STREAM_READ),L.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Zt),B.readPixels(it,dt,mt,at,Yt.convert(fe),Yt.convert(ue),0);const He=V!==null?Nt.get(V).__webglFramebuffer:null;vt.bindFramebuffer(B.FRAMEBUFFER,He);const tn=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await ET(B,tn,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,be),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,It),B.deleteBuffer(be),B.deleteSync(tn),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,it=null,dt=0){const mt=Math.pow(2,-dt),at=Math.floor(L.image.width*mt),It=Math.floor(L.image.height*mt),Wt=it!==null?it.x:0,Zt=it!==null?it.y:0;zt.setTexture2D(L,0),B.copyTexSubImage2D(B.TEXTURE_2D,dt,0,0,Wt,Zt,at,It),vt.unbindTexture()};const ys=B.createFramebuffer(),cf=B.createFramebuffer();this.copyTextureToTexture=function(L,it,dt=null,mt=null,at=0,It=null){It===null&&(at!==0?(Vl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),It=at,at=0):It=0);let Wt,Zt,Gt,ne,fe,ue,be,He,tn;const Ie=L.isCompressedTexture?L.mipmaps[It]:L.image;if(dt!==null)Wt=dt.max.x-dt.min.x,Zt=dt.max.y-dt.min.y,Gt=dt.isBox3?dt.max.z-dt.min.z:1,ne=dt.min.x,fe=dt.min.y,ue=dt.isBox3?dt.min.z:0;else{const pn=Math.pow(2,-at);Wt=Math.floor(Ie.width*pn),Zt=Math.floor(Ie.height*pn),L.isDataArrayTexture?Gt=Ie.depth:L.isData3DTexture?Gt=Math.floor(Ie.depth*pn):Gt=1,ne=0,fe=0,ue=0}mt!==null?(be=mt.x,He=mt.y,tn=mt.z):(be=0,He=0,tn=0);const Oe=Yt.convert(it.format),ce=Yt.convert(it.type);let Be;it.isData3DTexture?(zt.setTexture3D(it,0),Be=B.TEXTURE_3D):it.isDataArrayTexture||it.isCompressedArrayTexture?(zt.setTexture2DArray(it,0),Be=B.TEXTURE_2D_ARRAY):(zt.setTexture2D(it,0),Be=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,it.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,it.unpackAlignment);const Ee=B.getParameter(B.UNPACK_ROW_LENGTH),Mn=B.getParameter(B.UNPACK_IMAGE_HEIGHT),ri=B.getParameter(B.UNPACK_SKIP_PIXELS),Pe=B.getParameter(B.UNPACK_SKIP_ROWS),za=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ie.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ie.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ne),B.pixelStorei(B.UNPACK_SKIP_ROWS,fe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ue);const Ke=L.isDataArrayTexture||L.isData3DTexture,qn=it.isDataArrayTexture||it.isData3DTexture;if(L.isDepthTexture){const pn=Nt.get(L),on=Nt.get(it),Fn=Nt.get(pn.__renderTarget),rr=Nt.get(on.__renderTarget);vt.bindFramebuffer(B.READ_FRAMEBUFFER,Fn.__webglFramebuffer),vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,rr.__webglFramebuffer);for(let Yi=0;Yi<Gt;Yi++)Ke&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Nt.get(L).__webglTexture,at,ue+Yi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Nt.get(it).__webglTexture,It,tn+Yi)),B.blitFramebuffer(ne,fe,Wt,Zt,be,He,Wt,Zt,B.DEPTH_BUFFER_BIT,B.NEAREST);vt.bindFramebuffer(B.READ_FRAMEBUFFER,null),vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(at!==0||L.isRenderTargetTexture||Nt.has(L)){const pn=Nt.get(L),on=Nt.get(it);vt.bindFramebuffer(B.READ_FRAMEBUFFER,ys),vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,cf);for(let Fn=0;Fn<Gt;Fn++)Ke?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,pn.__webglTexture,at,ue+Fn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pn.__webglTexture,at),qn?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,on.__webglTexture,It,tn+Fn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,on.__webglTexture,It),at!==0?B.blitFramebuffer(ne,fe,Wt,Zt,be,He,Wt,Zt,B.COLOR_BUFFER_BIT,B.NEAREST):qn?B.copyTexSubImage3D(Be,It,be,He,tn+Fn,ne,fe,Wt,Zt):B.copyTexSubImage2D(Be,It,be,He,ne,fe,Wt,Zt);vt.bindFramebuffer(B.READ_FRAMEBUFFER,null),vt.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else qn?L.isDataTexture||L.isData3DTexture?B.texSubImage3D(Be,It,be,He,tn,Wt,Zt,Gt,Oe,ce,Ie.data):it.isCompressedArrayTexture?B.compressedTexSubImage3D(Be,It,be,He,tn,Wt,Zt,Gt,Oe,Ie.data):B.texSubImage3D(Be,It,be,He,tn,Wt,Zt,Gt,Oe,ce,Ie):L.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,It,be,He,Wt,Zt,Oe,ce,Ie.data):L.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,It,be,He,Ie.width,Ie.height,Oe,Ie.data):B.texSubImage2D(B.TEXTURE_2D,It,be,He,Wt,Zt,Oe,ce,Ie);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ee),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Mn),B.pixelStorei(B.UNPACK_SKIP_PIXELS,ri),B.pixelStorei(B.UNPACK_SKIP_ROWS,Pe),B.pixelStorei(B.UNPACK_SKIP_IMAGES,za),It===0&&it.generateMipmaps&&B.generateMipmap(Be),vt.unbindTexture()},this.initRenderTarget=function(L){Nt.get(L).__webglFramebuffer===void 0&&zt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?zt.setTextureCube(L,0):L.isData3DTexture?zt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?zt.setTexture2DArray(L,0):zt.setTexture2D(L,0),vt.unbindTexture()},this.resetState=function(){z=0,P=0,V=null,vt.reset(),qt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const Jc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ao{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Aw=new Fm(-1,1,1,-1,0,1);class Rw extends Rn{constructor(){super(),this.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ze([0,2,0,0,2,0],2))}}const Cw=new Rw;class Gm{constructor(t){this._mesh=new fn(Cw,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Aw)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class ww extends Ao{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof rn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Xl.clone(t.uniforms),this.material=new rn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Gm(this.material)}render(t,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class _y extends Ao{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,s){const l=t.getContext(),u=t.state;u.buffers.color.setMask(!1),u.buffers.depth.setMask(!1),u.buffers.color.setLocked(!0),u.buffers.depth.setLocked(!0);let h,d;this.inverse?(h=0,d=1):(h=1,d=0),u.buffers.stencil.setTest(!0),u.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),u.buffers.stencil.setFunc(l.ALWAYS,h,4294967295),u.buffers.stencil.setClear(d),u.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),u.buffers.color.setLocked(!1),u.buffers.depth.setLocked(!1),u.buffers.color.setMask(!0),u.buffers.depth.setMask(!0),u.buffers.stencil.setLocked(!1),u.buffers.stencil.setFunc(l.EQUAL,1,4294967295),u.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),u.buffers.stencil.setLocked(!0)}}class Dw extends Ao{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Nw{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const s=t.getSize(new Ht);this._width=s.width,this._height=s.height,i=new Di(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xi}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ww(Jc),this.copyPass.material.blending=Ua,this.clock=new fS}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,u=this.passes.length;l<u;l++){const h=this.passes[l];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),h.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),h.needsSwap){if(s){const d=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),p.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}_y!==void 0&&(h instanceof _y?s=!0:h instanceof Dw&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new Ht);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let u=0;u<this.passes.length;u++)this.passes[u].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Uw extends Ao{constructor(t,i,s=null,l=null,u=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=u,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new he}render(t,i,s){const l=t.autoClear;t.autoClear=!1;let u,h;this.overrideMaterial!==null&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(u=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(u),this.overrideMaterial!==null&&(this.scene.overrideMaterial=h),t.autoClear=l}}const Lw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new he(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class So extends Ao{constructor(t,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=t!==void 0?new Ht(t.x,t.y):new Ht(256,256),this.clearColor=new he(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let u=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);this.renderTargetBright=new Di(u,h,{type:Xi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const m=new Di(u,h,{type:Xi});m.texture.name="UnrealBloomPass.h"+v,m.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(m);const x=new Di(u,h,{type:Xi});x.texture.name="UnrealBloomPass.v"+v,x.texture.generateMipmaps=!1,this.renderTargetsVertical.push(x),u=Math.round(u/2),h=Math.round(h/2)}const d=Lw;this.highPassUniforms=Xl.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new rn({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const p=[3,5,7,9,11];u=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new Ht(1/u,1/h),u=Math.round(u/2),h=Math.round(h/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const g=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=g,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Xl.clone(Jc.uniforms),this.blendMaterial=new rn({uniforms:this.copyUniforms,vertexShader:Jc.vertexShader,fragmentShader:Jc.fragmentShader,blending:zl,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new he,this._oldClearAlpha=1,this._basic=new kl,this._fsQuad=new Gm(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let s=Math.round(t/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let u=0;u<this.nMips;u++)this.renderTargetsHorizontal[u].setSize(s,l),this.renderTargetsVertical[u].setSize(s,l),this.separableBlurMaterials[u].uniforms.invSize.value=new Ht(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(t,i,s,l,u){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const h=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),u&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let d=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[p].uniforms.direction.value=So.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[p]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=So.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[p]),t.clear(),this._fsQuad.render(t),d=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,u&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(s),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=h}_getSeparableBlurMaterial(t){const i=[];for(let s=0;s<t;s++)i.push(.39894*Math.exp(-.5*s*s/(t*t))/t);return new rn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ht(.5,.5)},direction:{value:new Ht(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}_getCompositeMaterial(t){return new rn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}So.BlurDirectionX=new Ht(1,0);So.BlurDirectionY=new Ht(0,1);const Yc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class Ow extends Ao{constructor(){super(),this.uniforms=Xl.clone(Yc.uniforms),this.material=new Ob({name:Yc.name,uniforms:this.uniforms,vertexShader:Yc.vertexShader,fragmentShader:Yc.fragmentShader}),this._fsQuad=new Gm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,i,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Le.getTransfer(this._outputColorSpace)===Ye&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ty?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===by?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ay?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ym?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Cy?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===wy?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ry&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Al=(o,t,i)=>Math.min(i,Math.max(t,o)),Rl=(o,t,i,s)=>t+(o-t)*Math.exp(-i*s),vS=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]);class Pw{constructor(){xe(this,"shipQuaternion",new Jn);xe(this,"lookQuaternion",new Jn);xe(this,"position",new G);xe(this,"yaw",0);xe(this,"pitch",0);xe(this,"yawVelocity",0);xe(this,"pitchVelocity",0);xe(this,"speed",0);xe(this,"lookYaw",0);xe(this,"lookPitch",0);xe(this,"lookTargetYaw",0);xe(this,"lookTargetPitch",0);xe(this,"touchX",0);xe(this,"touchY",0);xe(this,"touchSteering",!1);xe(this,"keys",new Set);xe(this,"elapsed",0);xe(this,"lastContext","");xe(this,"euler",new Ni(0,0,0,"YXZ"));xe(this,"forward",new G)}key(t,i){vS.has(t)&&(i?this.touchSteering||this.keys.add(t):this.keys.delete(t))}steerTouch(t,i,s){this.touchSteering=s,this.keys.clear();const l=Math.hypot(t,i),u=s?Al((l-.1)/.9,0,1):0;this.touchX=l?t/l*u:0,this.touchY=l?i/l*u:0}look(t,i,s,l){if(l.paused||l.blocked)return;const u=s?l.touchSensitivity:l.sensitivity;this.lookTargetYaw=Al(this.lookTargetYaw-Al(t,-.2,.2)*u*1.6*(!s&&l.invertMouseX?-1:1),-.85,.85),this.lookTargetPitch=Al(this.lookTargetPitch-Al(i,-.2,.2)*u*1.6*(!s&&l.invertMouseY?-1:1),-.5,.5)}reset(t=!1){this.keys.clear(),this.steerTouch(0,0,!1),t&&(this.yawVelocity=this.pitchVelocity=0,this.lookTargetYaw=this.lookYaw,this.lookTargetPitch=this.lookPitch)}step(t,i){const s=`${i.mode}/${i.paused}/${i.started}/${i.blocked}`;if(this.lastContext&&s!==this.lastContext&&this.reset(i.paused||i.blocked),this.lastContext=s,!Number.isFinite(t)||t<=0||t>.25||i.paused)return;const l=Math.min(t,.1);this.elapsed+=l;const u=i.mode==="Manual Flight"&&i.started&&!i.blocked;let h=0,d=0;if(u){h=this.touchSteering?this.touchX:Number(this.keys.has("KeyD")||this.keys.has("ArrowRight"))-Number(this.keys.has("KeyA")||this.keys.has("ArrowLeft")),d=this.touchSteering?this.touchY:Number(this.keys.has("KeyS")||this.keys.has("ArrowDown"))-Number(this.keys.has("KeyW")||this.keys.has("ArrowUp"));const _=Math.max(1,Math.hypot(h,d));h/=_,d/=_}const p=i.reduced?.45:1,g=this.touchSteering?i.touchSensitivity:i.sensitivity,v=i.started&&i.mode!=="Manual Flight"&&!i.blocked&&!i.reduced?i.motion*(i.mode==="Meditation"?.002:.006):0,m=u?-h*.22*g*p:Math.sin(this.elapsed*.055)*v,x=u?-d*.16*g*p:Math.sin(this.elapsed*.08)*v*.3,S=3,T=(1-Math.exp(-S*l))/S;this.yaw+=m*l+(this.yawVelocity-m)*T,this.pitch+=x*l+(this.pitchVelocity-x)*T,this.yawVelocity=Rl(this.yawVelocity,m,S,l),this.pitchVelocity=Rl(this.pitchVelocity,x,S,l),this.pitch=Math.atan2(Math.sin(this.pitch),Math.cos(this.pitch)),this.yaw=Math.atan2(Math.sin(this.yaw),Math.cos(this.yaw)),this.shipQuaternion.setFromEuler(this.euler.set(this.pitch,this.yaw,0,"YXZ")),this.lookYaw=Rl(this.lookYaw,this.lookTargetYaw,6,l),this.lookPitch=Rl(this.lookPitch,this.lookTargetPitch,6,l),this.lookQuaternion.setFromEuler(this.euler.set(this.lookPitch,this.lookYaw,0,"YXZ"));const A=i.started?Math.max(0,i.speed)*(i.mode==="Meditation"?.15:1)*(i.reduced?.3:1):2,M=A*l+(this.speed-A)*(1-Math.exp(-.8*l))/.8;this.speed=Rl(this.speed,A,.8,l),this.forward.set(0,0,-1).applyQuaternion(this.shipQuaternion),this.position.addScaledVector(this.forward,M)}}function zw(o,t,i,s){let l=null,u=null,h="";const d=[],p=(_,w,D,b)=>{_.addEventListener(w,D,b),d.push(()=>_.removeEventListener(w,D,b))},g=()=>!s().paused&&!s().blocked&&document.visibilityState!=="hidden",v=()=>g()&&s().started&&s().mode==="Manual Flight",m=(_,w)=>{t.style.setProperty("--stick-x",`${_*34}px`),t.style.setProperty("--stick-y",`${w*34}px`)},x=()=>{const _=l;l=null,_&&o.hasPointerCapture(_.id)&&o.releasePointerCapture(_.id)},S=()=>{const _=u;u=null,i.steerTouch(0,0,!1),m(0,0),_!==null&&t.hasPointerCapture(_)&&t.releasePointerCapture(_)},T=()=>{x(),S(),i.reset(!0)};p(o,"pointerdown",(_=>{!g()||l||_.pointerType==="mouse"&&(_.button!==0||u!==null)||(_.preventDefault(),l={id:_.pointerId,type:_.pointerType,x:_.clientX,y:_.clientY},o.setPointerCapture(_.pointerId))})),p(o,"pointermove",(_=>{if((l==null?void 0:l.id)!==_.pointerId)return;if(!g()||_.pointerType==="mouse"&&!(_.buttons&1)){x();return}_.preventDefault();const w=Math.max(240,Math.min(o.clientWidth,o.clientHeight));i.look((_.clientX-l.x)/w,(_.clientY-l.y)/w,l.type!=="mouse",s()),l.x=_.clientX,l.y=_.clientY}));for(const _ of["pointerup","pointercancel","lostpointercapture"])p(o,_,(w=>{w.pointerId===(l==null?void 0:l.id)&&x()}));const A=_=>{const w=t.getBoundingClientRect();let D=(_.clientX-w.left-w.width/2)/(w.width*.35),b=(_.clientY-w.top-w.height/2)/(w.height*.35);const I=Math.max(1,Math.hypot(D,b));D/=I,b/=I,i.steerTouch(D,b,!0),m(D,b)};p(t,"pointerdown",(_=>{_.pointerType==="mouse"||u!==null||!v()||(_.preventDefault(),_.stopPropagation(),(l==null?void 0:l.type)==="mouse"&&x(),u=_.pointerId,t.setPointerCapture(_.pointerId),A(_))})),p(t,"pointermove",(_=>{if(_.pointerId===u){if(!v()){S();return}_.preventDefault(),A(_)}}));for(const _ of["pointerup","pointercancel","lostpointercapture"])p(t,_,(w=>{w.pointerId===u&&S()}));const M=_=>_ instanceof HTMLElement&&!!_.closest('input,select,textarea,[contenteditable="true"]');return p(window,"keydown",(_=>{!vS.has(_.code)||M(_.target)||!v()||_.ctrlKey||_.metaKey||_.altKey||(_.preventDefault(),i.key(_.code,!0))})),p(window,"keyup",(_=>i.key(_.code,!1))),p(window,"blur",T),p(document,"visibilitychange",T),p(window,"resize",T),p(window,"orientationchange",T),p(o,"contextmenu",_=>_.preventDefault()),p(t,"contextmenu",_=>_.preventDefault()),{sync(){const _=s(),w=`${_.mode}/${_.paused}/${_.started}/${_.blocked}`;h&&w!==h&&(x(),S(),i.reset(_.paused||_.blocked)),h=w},dispose(){T(),d.forEach(_=>_())}}}function Iw(o,t,i){if(!Number.isFinite(t)||t<=0||t>.25||i.paused){o.step(0,i);return}const s=Math.ceil(t/(1/60)),l=t/s;for(let u=0;u<s;u++)o.step(l,i)}class Bw{constructor(){xe(this,"scale",1);xe(this,"elapsed",0);xe(this,"average",1/60);xe(this,"nextDecision",3)}reset(){this.scale=1,this.elapsed=0,this.average=1/60,this.nextDecision=3}observe(t,i,s){if(!i||s||!Number.isFinite(t)||t<=0||t>1||(this.elapsed+=t,this.average+=(Math.min(t,.2)-this.average)*(1-Math.exp(-t/1.5)),this.elapsed<this.nextDecision))return!1;const l=this.scale;return this.average>.028?(this.scale=Math.max(.6,Math.round((this.scale-.1)*100)/100),this.nextDecision=this.elapsed+3):this.average<.018?(this.scale=Math.min(1,Math.round((this.scale+.05)*100)/100),this.nextDecision=this.elapsed+10):this.nextDecision=this.elapsed+3,l!==this.scale}}const Cl=o=>(o=Math.max(0,Math.min(1,o)),o*o*(3-2*o)),Fw=[2,4,1,0,3],Hw=10.2;class _S{constructor(){xe(this,"phase","idle");xe(this,"elapsed",0);xe(this,"destination",0);xe(this,"seed",7123);xe(this,"committed",!1);xe(this,"justCommitted",!1);xe(this,"energy",0);xe(this,"charge",0);xe(this,"veil",0)}get busy(){return this.phase!=="idle"}start(t,i,s=!1){return this.busy||s?!1:(this.destination=Fw[t]??(t+1)%5,this.seed=Math.imul(i|0,1664525)+1013904223>>>0||1,this.elapsed=0,this.committed=!1,this.justCommitted=!1,this.energy=0,this.veil=0,this.charge=0,this.phase="charging",!0)}advance(t,i=!1){if(this.justCommitted=!1,!this.busy||i||!Number.isFinite(t)||t<=0)return;this.elapsed+=Math.min(t,.25);const s=this.elapsed;s<1.4?(this.phase="charging",this.charge=Cl(s/1.4),this.energy=this.charge*.035):s<4?(this.phase="accelerating",this.charge=1,this.energy=.035+.965*Cl((s-1.4)/2.6)):s<5.6?(this.phase="transit",this.charge=1,this.energy=1):s<9?(this.phase="arriving",this.energy=1-Cl((s-5.6)/3.4),this.charge=this.energy):s<Hw?(this.phase="stabilized",this.energy=0,this.charge=0):(this.phase="idle",this.energy=0,this.charge=0),this.veil=s<4?0:s<4.8?Cl((s-4)/.8):s<5.6?1:1-Cl((s-5.6)/1.7),!this.committed&&s>=4.8&&(this.committed=!0,this.justCommitted=!0)}}function Gw(o){const i=new Float32Array(4680),s=new Float32Array(780*2),l=new Float32Array(780*2*3);let u=4171;const h=()=>(u=u*16807%2147483647,(u-1)/2147483646);for(let T=0;T<780;T++){const A=h()*Math.PI*2,M=18+Math.pow(h(),1.3)*550,_=h();for(let w=0;w<2;w++)i.set([Math.cos(A)*M,Math.sin(A)*M*.72,_],(T*2+w)*3),s[T*2+w]=w}const d=new Rn;d.setAttribute("position",new Tn(l,3)),d.setAttribute("lane",new Tn(i,3)),d.setAttribute("endpoint",new Tn(s,1));const p={time:{value:0},energy:{value:0},tint:{value:new he("#b7d8ef")}},g=new he("#d4ecfa"),v=new rn({uniforms:p,transparent:!0,depthWrite:!1,blending:zl,vertexShader:`attribute vec3 lane;attribute float endpoint;uniform float time,energy;varying float fade;
      void main(){float z=-12.-fract(lane.z+time)*800.;float trailLength=energy*(22.+energy*155.);
      vec3 p=vec3(lane.xy,z-endpoint*trailLength);fade=smoothstep(15.,65.,-z)*(1.-smoothstep(650.,810.,-z))*(.35+endpoint*.4);
      gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,fragmentShader:`uniform float energy;uniform vec3 tint;varying float fade;void main(){gl_FragColor=vec4(tint*1.35,fade*energy*.7);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`}),m=new tb(d,v);m.name="light-jump-streaks",m.frustumCulled=!1,m.renderOrder=3,o.add(m);let x=!0,S=0;return{configure(T,A){d.setDrawRange(0,(A?70:T==="Low"?180:T==="Medium"?420:780)*2),x=!0},update(T,A,M){A>0&&(S+=T*(.18+A*1.7)),p.time.value=S,p.energy.value=A,p.tint.value.copy(M).lerp(g,.7),m.visible=A>.001||x,x=!1}}}const Vw=`
varying vec3 localPoint, surfaceNormal, worldPoint;
void main(){localPoint=position;worldPoint=(modelMatrix*vec4(position,1.)).xyz;surfaceNormal=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`,kw=`
varying vec3 localPoint,surfaceNormal,worldPoint;
uniform vec3 baseColor,detailColor,lightDirection;
uniform float kind,alpha,seed;
float hash(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);}
float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+1.),f.x),f.y),f.z);}
void main(){
 if(alpha<.005)discard;
 vec3 p=localPoint;float n=noise(p*5.+seed),fine=noise(p*17.+seed);
 float bands=.5+.25*sin(p.y*55.+n*5.)+.16*sin(p.y*19.+fine*2.);
 float terrain=noise(p*3.+seed)*.6+n*.28+fine*.12;float land=smoothstep(.46,.6,terrain);
 float feature=kind>.5&&kind<1.5?bands:land;
 vec3 color=mix(baseColor,detailColor,feature*(kind>1.5?.5:.35));
 if(kind>1.5)color*=.67+fine*.43;
 if(kind<.5){float clouds=smoothstep(.63,.83,noise(p*9.+seed+8.));color=mix(color,vec3(.7,.8,.84),clouds*.15);}
 vec3 normal=normalize(surfaceNormal);float day=max(0.,dot(normal,normalize(lightDirection)));
 float rim=pow(1.-abs(dot(normal,normalize(cameraPosition-worldPoint))),3.);
 gl_FragColor=vec4(color*(.065+day*.92)+baseColor*rim*.07,alpha);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
}
`,wl=[[[-480,-45,-1500],[1250,380,-4300],[-2200,950,-8200],[500,1600,-12e3],[2450,-500,-9200],[-700,850,-7900]],[[-540,-120,-1850],[1300,300,-4800],[-1450,420,-5700],[500,-90,-10800],[2600,700,-9600],[-850,900,-8200]],[[480,-100,-1800],[-1500,380,-3800],[1750,300,-6800],[-500,200,-10500],[3e3,-500,-9600],[-1100,900,-8500]],[[-470,35,-1900],[1350,500,-4600],[-2e3,-50,-7200],[700,120,-10500],[2400,-350,-8500],[-1e3,850,-9200]],[[-800,-200,-3500],[1900,430,-6800],[-2600,150,-9e3],[200,300,-12e3],[2900,-500,-1e4],[-1200,1e3,-10500]]].map(o=>o.map(t=>new G(...t))),Xw=[6,5,6,5,4],Mp=[[135,310,180,570,150,90],[150,310,190,500,170,100],[135,360,210,650,190,95],[160,340,210,580,170,100],[180,420,260,820,180,100]],lo=[["#315e9c","#9c8fbd","#77758e","#3a4d6a","#6a6c7c","#8b829c"],["#276992","#8e9eae","#8b8e96","#31495f","#858d97","#6a849f"],["#857260","#b5956e","#92877a","#655c54","#8a7a67","#b3a38b"],["#2b7886","#7c9ba9","#7b8d94","#385765","#849b9e","#6f8e9f"],["#46576e","#6d768b","#6c7180","#293c58","#6d788a","#56697f"]].map(o=>o.map(t=>new he(t))),Ep=lo.map(o=>o.map(t=>t.clone().lerp(new he("#cfbd9c"),.38)));function qw(o){const t=new $s;t.name="regional-celestial-bodies",o.add(t);const i=new yo(1,32,20),s=(E,U)=>{const H=new rn({uniforms:{baseColor:{value:lo[0][U].clone()},detailColor:{value:Ep[0][U].clone()},kind:{value:E},alpha:{value:1},seed:{value:U*7.3+2.1},lightDirection:{value:U===3?new G(-.85,.2,-.6):new G(-.65,.4,U===1?.28:.75)}},vertexShader:Vw,fragmentShader:kw,transparent:!0,depthWrite:!0}),q=new fn(i,H);return q.renderOrder=4,q.userData.kind=E>1.5?"rocky-body":"planet",t.add(q),q},l=[0,1,2,2,2,2].map((E,U)=>s(E,U)),u=wl[0].map(E=>E.clone()),h=Mp[0].slice(),d=new Jn,p=new G,g=new G,v=l.map(()=>new G),m=new Float32Array(6).fill(1);let x=0;const S=[0,1,2].map((E,U)=>{const H=s(2,U+2);return H.userData.kind="moon",{mesh:H,parent:E,radius:[29,44,52][U]}}),T=new rn({uniforms:{color:{value:new he("#a5a091")},alpha:{value:1}},transparent:!0,depthWrite:!1,side:Gi,vertexShader:"varying vec2 point;void main(){point=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec2 point;uniform vec3 color;uniform float alpha;void main(){float r=length(point);float edge=smoothstep(1.32,1.42,r)*(1.-smoothstep(2.05,2.2,r));float bands=.35+.25*sin(r*180.)+.2*sin(r*47.);gl_FragColor=vec4(color*.65,edge*max(.1,bands)*alpha);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}),A=new fn(new Bm(1.32,2.2,64),T);A.rotation.set(1.12,.2,-.27),A.renderOrder=5,t.add(A);const M=A.quaternion.clone(),_=new Pb({color:"#76818c",roughness:1,metalness:0,transparent:!0,depthWrite:!1}),w=new ZT(new Im(1,0),_,72);w.name="distant-rock-cluster",t.add(w);const D=new yn;let b=8353;const I=()=>(b=b*16807%2147483647,(b-1)/2147483646);for(let E=0;E<72;E++){D.position.set((I()-.5)*700,(I()-.5)*180,(I()-.5)*450),D.rotation.set(I()*3,I()*3,I()*3);const U=4+I()*10;D.scale.set(U,U*.7,U*1.2),D.updateMatrix(),w.setMatrixAt(E,D.matrix)}w.instanceMatrix.needsUpdate=!0,w.computeBoundingSphere();const z=[new G(-1e3,80,-2800),new G(1300,-180,-3600),new G(-1700,-180,-4300),new G(1600,80,-3900),new G(-2200,-250,-6500)],P=z[0].clone();let V=6,N=3;return{group:t,setJump(E){x=E},reseed(E,U,H,q){g.copy(H),q?d.copy(q):d.identity();let nt=E>>>0;const Q=()=>(nt=Math.imul(nt,1664525)+1013904223>>>0,nt/4294967296);for(let F=0;F<l.length;F++)v[F].set((Q()-.5)*900,(Q()-.5)*500,(Q()-.5)*1e3),m[F]=.72+Q()*.56,u[F].copy(wl[U][F]).add(v[F]),h[F]=Mp[U][F]*m[F],l[F].material.uniforms.seed.value=Q()*90+1,(F===0||F===4)&&(l[F].material.uniforms.kind.value=Q()>.5?0:2);for(const F of S)F.mesh.material.uniforms.seed.value=Q()*90+1;P.copy(z[U]),P.x+=(Q()-.5)*1300,P.y+=(Q()-.5)*300},dispose(){t.removeFromParent();const E=new Set,U=new Set;t.traverse(H=>{if(H instanceof fn){E.add(H.geometry);for(const q of Array.isArray(H.material)?H.material:[H.material])U.add(q)}}),w.dispose(),E.forEach(H=>H.dispose()),U.forEach(H=>H.dispose())},configure(E){V=6,N=3,w.count=E==="Low"?24:E==="Medium"?48:72},update(E,U,H,q){const nt=1-Math.exp(-E*.28),Q=1-dn.smoothstep(x,.12,.65);for(let F=0;F<l.length;F++){const $=l[F];u[F].x=dn.lerp(u[F].x,wl[H][F].x+v[F].x,nt),u[F].y=dn.lerp(u[F].y,wl[H][F].y+v[F].y,nt),u[F].z=dn.lerp(u[F].z,wl[H][F].z+v[F].z,nt),h[F]=dn.lerp(h[F],Mp[H][F]*m[F],nt),$.visible=F<Math.min(V,Xw[H]),$.position.copy(u[F]).applyQuaternion(d).add(g).sub(q),$.scale.setScalar(h[F]),$.rotation.y=U*.002+F*.5,$.material.uniforms.baseColor.value.lerp(lo[H][F],nt),$.material.uniforms.detailColor.value.lerp(Ep[H][F],nt),$.material.uniforms.alpha.value=dn.smoothstep($.position.length()/h[F],1.05,1.4)*Q}for(let F=0;F<S.length;F++){const{mesh:$,parent:Z,radius:lt}=S[F],xt=l[Z];$.visible=F<N&&xt.visible,$.scale.setScalar(lt),p.set(h[Z]*1.8,h[Z]*.5,h[Z]*.4).applyQuaternion(d),$.position.copy(xt.position).add(p),$.material.uniforms.alpha.value=xt.material.uniforms.alpha.value,$.material.uniforms.baseColor.value.lerp(lo[H][2],nt),$.material.uniforms.detailColor.value.lerp(Ep[H][2],nt)}A.visible=!0,A.quaternion.copy(d).multiply(M),A.position.copy(l[1].position),A.scale.setScalar(h[1]),T.uniforms.alpha.value=l[1].material.uniforms.alpha.value,T.uniforms.color.value.lerp(lo[H][1],nt),w.quaternion.copy(d),w.position.copy(P).applyQuaternion(d).add(g).sub(q),_.opacity=Q,w.visible=Q>.005,_.color.lerp(lo[H][2],nt)}}}const gm=18e3;function Yw(o){return[o.x,o.y,o.z].map(t=>Math.floor((t+gm/2)/gm))}function Ww(o,t,i){let s=(Math.imul(o,73856093)^Math.imul(t,19349663)^Math.imul(i,83492791)^7123)>>>0;const l=s,u=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296),h=o===0&&t===0&&i===0,d=h?0:l%5,p=new Jn().setFromEuler(new Ni(u()*Math.PI*2,u()*Math.PI*2,u()*Math.PI*2));return h&&p.identity(),{key:`${o}/${t}/${i}`,seed:l,region:d,heading:p,anchor:new G(o,t,i).multiplyScalar(gm)}}function jw(o){const t=Array.from({length:27},()=>({bodies:qw(o),sector:null}));let i="",s="Medium";const l=u=>{const[h,d,p]=Yw(u),g=`${h}/${d}/${p}`;if(g===i)return;i=g;const v=new Map;for(let m=-1;m<=1;m++)for(let x=-1;x<=1;x++)for(let S=-1;S<=1;S++){const T=Ww(h+m,d+x,p+S);v.set(T.key,T)}for(const m of t)m.sector&&v.has(m.sector.key)?v.delete(m.sector.key):m.sector=null;for(const m of v.values()){const x=t.find(S=>!S.sector);x.sector=m,x.bodies.reseed(m.seed,m.region,m.anchor,m.heading),x.bodies.update(1e3,0,m.region,u),x.bodies.configure(s)}};return{setJump(u){for(const h of t)h.bodies.setJump(u)},configure(u){s=u;for(const h of t)h.bodies.configure(u)},update(u,h,d,p){var g;l(p);for(const v of t){const m=v.sector;v.bodies.update(u,h,m.region,p);for(const x of v.bodies.group.children){const S=x.position.length(),T=1-dn.smoothstep(S,1e4,13e3);if(x instanceof fn){const A=x.material;(g=A.uniforms)!=null&&g.alpha?A.uniforms.alpha.value*=T:"opacity"in A&&(A.opacity*=T)}x.visible=x.visible&&T>0}}},dispose(){for(const u of t)u.bodies.dispose()}}}const vm={Low:{pixelRatio:.9,stars:[550,2400,7800],cloudScale:.32,volumes:1,steps:4,octaves:2,bloom:!1},Medium:{pixelRatio:1,stars:[1e3,4800,19e3],cloudScale:.4,volumes:2,steps:7,octaves:2,bloom:!1},High:{pixelRatio:1.35,stars:[2200,1e4,48e3],cloudScale:.5,volumes:3,steps:10,octaves:3,bloom:!0}},xy={Dark:{exposure:.8,cabin:.7,nebula:.65},Balanced:{exposure:1.12,cabin:1,nebula:.9},Cinematic:{exposure:1.32,cabin:1.12,nebula:1.08}},Na=[{name:"Violet Nebula",subtitle:"THE PERSEUS ARM",color:"#a879ef",second:"#315fab",accent:"#f4a4cf",density:1.05,band:.8,structure:1.15,bandWidth:1,warmth:.25,stars:.87,exposure:1},{name:"Stellar Ocean",subtitle:"AN ENDLESS SEA OF LIGHT",color:"#88bcf2",second:"#234a89",accent:"#c3dcff",density:.38,band:.7,structure:1.4,bandWidth:.65,warmth:.07,stars:1,exposure:1.04},{name:"Golden Core",subtitle:"THE HEART OF THE GALAXY",color:"#edbd79",second:"#956753",accent:"#fff2c9",density:.85,band:1.65,structure:1.8,bandWidth:1.4,warmth:.88,stars:1.4,exposure:.93},{name:"Cosmic Clouds",subtitle:"WHERE THE STARS ARE BORN",color:"#67cbbf",second:"#306c9c",accent:"#b1d5e8",density:1.3,band:.5,structure:.65,bandWidth:1.1,warmth:.16,stars:.7,exposure:1},{name:"Deep Silence",subtitle:"FAR FROM EVERYTHING",color:"#6d7fbb",second:"#253553",accent:"#a6b8e1",density:.12,band:.15,structure:.8,bandWidth:.45,warmth:.12,stars:.23,exposure:.84}],xS=`
float hash3(vec3 p) {
  p = fract(p * .1031); p += dot(p, p.yzx + 33.33);
  return fract((p.x + p.y) * p.z);
}
float noise3(vec3 p) {
  vec3 i = floor(p), f = fract(p); f = f*f*(3.-2.*f);
  return mix(mix(mix(hash3(i),hash3(i+vec3(1,0,0)),f.x),
    mix(hash3(i+vec3(0,1,0)),hash3(i+vec3(1,1,0)),f.x),f.y),
    mix(mix(hash3(i+vec3(0,0,1)),hash3(i+vec3(1,0,1)),f.x),
    mix(hash3(i+vec3(0,1,1)),hash3(i+vec3(1,1,1)),f.x),f.y),f.z);
}
float fbm(vec3 p) {
  float f=0., a=.55;
  for(int i=0;i<4;i++) { if(i>=octaves) break; f+=a*noise3(p);p=p*2.03+vec3(7.1,3.7,1.9);a*=.5; }
  return f;
}
`,Zw=`
attribute float radius, temperature, identity;
uniform vec3 offset, span, layoutOffset;
uniform mat3 layoutRotation, destinationRotation;
uniform float pixels, dpr, warmth, abundance;
varying vec3 starColor;
varying float visibility, glowWeight;
void main(){
  vec3 p=mod(layoutRotation*position+layoutOffset-offset+span*.5,span)-span*.5;
  float boundary=max(max(abs(p.x)/(span.x*.5),abs(p.y)/(span.y*.5)),abs(p.z)/(span.z*.5));
  vec4 view=modelViewMatrix*vec4(destinationRotation*p,1.);
  visibility=(1.-smoothstep(.78,1.,boundary))*smoothstep(12.,65.,length(p));
  visibility*=1.-smoothstep(abundance-.08,abundance,identity);
  starColor=mix(vec3(.62,.79,1.),vec3(1.,.97,.89),smoothstep(.1,.65,temperature));
  starColor=mix(starColor,vec3(1.,.64,.32),smoothstep(1.-warmth*.8,1.,temperature)*.8);
  glowWeight=smoothstep(3.,9.,radius);
  gl_Position=projectionMatrix*view;
  gl_PointSize=clamp(radius*pixels/max(12.,-view.z),1.3*dpr,40.*dpr);
}
`,Qw=`
uniform float halo,jumpAmount;
varying vec3 starColor;
varying float visibility, glowWeight;
void main(){
  float d=length(gl_PointCoord-.5)*2.;
  float core=exp(-d*d*55.);
  float aura=exp(-d*d*5.5)*(.1+glowWeight*.17)*halo;
  float fade=1.-smoothstep(.8,1.,d);
  gl_FragColor=vec4(starColor*(core*3.2+aura)*fade,visibility*(1.-jumpAmount));
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,Kw=`
varying vec3 worldPoint;
void main(){vec4 p=modelMatrix*vec4(position,1.);worldPoint=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}
`,Jw=`
precision highp float;
varying vec3 worldPoint;
uniform vec3 center, radii, tint, second, accent;
uniform float time, density, visibility, energy, seed, structure;
uniform int steps, octaves;
uniform mat3 volumeRotation;
${xS}
void main(){
  vec3 origin=(volumeRotation*(cameraPosition-center))/radii;
  vec3 ray=(volumeRotation*normalize(worldPoint-cameraPosition))/radii;
  float a=dot(ray,ray),b=dot(origin,ray),c=dot(origin,origin)-1.;
  float discriminant=b*b-a*c;
  if(discriminant<0.)discard;
  float entry=max(0.,(-b-sqrt(discriminant))/a),exit=(-b+sqrt(discriminant))/a;
  float stride=(exit-entry)/float(steps);
  vec3 accumulated=vec3(0.);float opacity=0.;
  for(int i=0;i<14;i++){
    if(i>=steps)break;
    vec3 p=origin+ray*(entry+(float(i)+.5)*stride);
    vec3 q=p*vec3(2.6,2.6*structure,2.6)+vec3(seed,seed*.7,time*.006);
    float coarse=noise3(q*1.1);
    float f=fbm(q+coarse*1.6);
    float filament=pow(max(0.,1.-abs(f-.48)*2.),4.);
    float edge=pow(max(0.,1.-dot(p,p)),1.4);
    float gas=smoothstep(.23,.7,f)*edge;
    float absorption=1.-exp(-gas*stride/max(radii.x,max(radii.y,radii.z))*3.8*density);
    vec3 color=mix(second,tint,smoothstep(.2,.72,f+p.y*.12));
    color=mix(color,accent,pow(coarse,3.)*.65);
    float darkLane=smoothstep(.32,.65,noise3(q*2.7+12.));
    vec3 emission=color*(.28+filament*1.05)*(.12+darkLane*1.1)*energy;
    accumulated+=(1.-opacity)*absorption*emission;
    opacity+=(1.-opacity)*absorption;
  }
  float alpha=opacity*visibility;
  gl_FragColor=vec4(accumulated/max(opacity,.001),alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`,$w=`
varying vec3 direction;
void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`,t3=`
varying vec3 direction;
uniform vec3 tint, second, accent;
uniform float band, density, energy, bandWidth;
uniform mat3 layoutRotation, destinationRotation, volumeRotation;
uniform int octaves;
${xS}
void main(){
  vec3 d=normalize(layoutRotation*volumeRotation*direction);
  float n=fbm(d*4.+2.);
  float latitude=d.y*.88+d.x*.37+.09*sin(d.z*4.);
  float belt=exp(-pow(latitude/((.105+n*.16)*bandWidth),2.));
  float dust=fbm(d*21.+7.);
  float lanes=smoothstep(.23,.62,dust);
  float core=pow(max(0.,dot(d,normalize(vec3(.22,.05,-1.)))),12.);
  vec3 color=mix(second,tint,n);
  vec3 bandColor=mix(color,accent,core*.55);
  vec3 glow=bandColor*belt*(.065+core*.22)*band*(.3+lanes*1.5);
  vec3 horizon=color*pow(n,3.)*.09*density;
  gl_FragColor=vec4((vec3(.0015,.0025,.006)+glow+horizon)*energy,1.);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}
`;function e3(o){const t=Na[0],i=new Zy,s=new Di(1,1,{type:Xi,depthBuffer:!1}),l=new ve,u={sky:{value:s.texture},reprojection:{value:l},tanHalf:{value:.6745},wideTanHalf:{value:.7554},aspect:{value:1},veil:{value:0},jumpTint:{value:new he("#92bce0")}},h=new fn(new To(2,2),new rn({uniforms:u,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 uvv;void main(){uvv=uv;gl_Position=vec4(position.xy,1.,1.);}",fragmentShader:`varying vec2 uvv;uniform sampler2D sky;uniform mat3 reprojection;uniform float tanHalf,wideTanHalf,aspect,veil;uniform vec3 jumpTint;
      void main(){vec3 ray=reprojection*vec3((uvv-.5)*2.*tanHalf*vec2(aspect,1.),-1.);
      vec2 sampleUV=ray.xy/max(.001,-ray.z)/(2.*wideTanHalf*vec2(aspect,1.))+.5;
      gl_FragColor=texture2D(sky,clamp(sampleUV,.001,.999));gl_FragColor.rgb=mix(gl_FragColor.rgb,jumpTint*.38,veil*.985);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`}));h.frustumCulled=!1,h.renderOrder=-10,o.add(h);const d=new vi(75,1,.1,16e3),p=new Jn,g=new Jn,v=new Jn,m=new G,x=new G,S=new Ve,T=new G,A=new G;let M=!0,_=-1/0,w=1/24;const D=jw(o),b=new G,I=new G,z=new Jn,P=new Jn,V=new ve,N=new Ve,E=new ve,U=new ve,H=Na.map(Y=>({tint:new he(Y.color),second:new he(Y.second),accent:new he(Y.accent)})),q={jumpAmount:{value:0},layoutRotation:{value:V},destinationRotation:{value:E},volumeRotation:{value:U},time:{value:0},tint:{value:H[0].tint.clone()},second:{value:H[0].second.clone()},accent:{value:H[0].accent.clone()},density:{value:Number(t.density)},band:{value:Number(t.band)},warmth:{value:Number(t.warmth)},abundance:{value:t.stars/1.4},structure:{value:Number(t.structure)},bandWidth:{value:Number(t.bandWidth)},energy:{value:.9},octaves:{value:3},halo:{value:1}};let nt=7123;const Q=()=>(nt=nt*16807%2147483647,(nt-1)/2147483646),F=()=>Math.sqrt(-2*Math.log(Math.max(1e-5,Q())))*Math.cos(2*Math.PI*Q()),Z=[new G(1900,1400,1900),new G(5400,4e3,5400),new G(15e3,11e3,15e3)].map((Y,J)=>{const yt=vm.High.stars[J],Rt=new Float32Array(yt*3),wt=new Float32Array(yt),At=new Float32Array(yt),Lt=new Float32Array(yt);for(let ht=0;ht<yt;ht++){let vt=(Q()-.5)*Y.x,Ct=(Q()-.5)*Y.z,Nt=(Q()-.5)*Y.y;if(J>0&&Q()<.72){if(Q()<.28){const oe=Math.floor(Q()*4);vt=(oe%2?.22:-.24)*Y.x+F()*Y.x*.045,Ct=(oe<2?-.27:.22)*Y.z+F()*Y.z*.055}Nt=-.42*vt+F()*Y.y*.035+Math.sin(Ct/Y.z*5)*Y.y*.045}Rt.set([vt,Nt,Ct],ht*3);const zt=Q();wt[ht]=(zt>.987?12+Q()*14:1.3+Q()*4.6)*[.7,1.1,2][J],At[ht]=Q(),Lt[ht]=Q()}const B=new Rn;B.setAttribute("position",new Tn(Rt,3)),B.setAttribute("radius",new Tn(wt,1)),B.setAttribute("temperature",new Tn(At,1)),B.setAttribute("identity",new Tn(Lt,1));const Mt=new rn({uniforms:{...q,offset:{value:new G},span:{value:Y},layoutOffset:{value:new G},pixels:{value:400},dpr:{value:1}},vertexShader:Zw,fragmentShader:Qw,transparent:!0,depthWrite:!1,blending:zl}),_t=new Ky(B,Mt);return _t.frustumCulled=!1,_t.renderOrder=3,o.add(_t),_t}),lt=new fn(new yo(12500,32,16),new rn({uniforms:q,vertexShader:$w,fragmentShader:t3,side:kn,depthWrite:!1}));lt.renderOrder=-2,lt.frustumCulled=!1,i.add(lt);const xt=new yo(1,24,16),Tt=[{center:new G(-180,110,-820),radii:new G(680,330,770)},{center:new G(600,-140,-1600),radii:new G(1050,480,1e3)},{center:new G(-850,220,-2400),radii:new G(1200,520,1050)},{center:new G(450,420,1200),radii:new G(850,600,1e3)}],Vt=Tt.map(()=>new G),se=Tt.map((Y,J)=>{const yt=new rn({uniforms:{...q,center:{value:Y.center.clone()},radii:{value:Y.radii},steps:{value:10},visibility:{value:1},seed:{value:4.3+J*9.7}},vertexShader:Kw,fragmentShader:Jw,transparent:!0,depthWrite:!1,side:kn}),Rt=new fn(xt,yt);return Rt.position.copy(Y.center),Rt.scale.copy(Y.radii),Rt.renderOrder=1,i.add(Rt),Rt}),X=new Bb("#b7c6ef","#080e1d",1.6);o.add(X);const gt=new Gb("#dae6ff",2.8);return gt.position.set(-3,4,1),o.add(gt),{tint:q.tint.value,setJump(Y,J){q.jumpAmount.value=Math.max(Y,J),u.veil.value=J,u.jumpTint.value.copy(q.tint.value).lerp(q.accent.value,.35),D.setJump(Math.max(Y,J))},reseed(Y,J,yt,Rt){b.copy(yt),Rt?z.copy(Rt):z.identity(),P.copy(z).invert(),E.setFromMatrix4(N.makeRotationFromQuaternion(z)),U.copy(E).transpose();for(const Lt of se)Lt.quaternion.copy(z);let wt=Y>>>0;const At=()=>(wt=Math.imul(wt,1664525)+1013904223>>>0,wt/4294967296);N.makeRotationY((At()-.5)*1.2),N.multiply(new Ve().makeRotationZ((At()-.5)*.8)),V.setFromMatrix4(N);for(const Lt of Z){const B=Lt.material.uniforms.span.value;Lt.material.uniforms.layoutOffset.value.set((At()-.5)*B.x,(At()-.5)*B.y,(At()-.5)*B.z)}for(let Lt=0;Lt<se.length;Lt++)Vt[Lt].set((At()-.5)*600,(At()-.5)*250,(At()-.5)*500),se[Lt].material.uniforms.seed.value=At()*80+2;M=!0},renderAtmosphere(Y,J,yt=!1){J.updateWorldMatrix(!0,!1),J.matrixWorld.decompose(m,p,x);const Rt=J,wt=Math.tan(dn.degToRad(Rt.fov)*.5);(u.aspect.value!==Rt.aspect||u.tanHalf.value!==wt)&&(M=!0),u.tanHalf.value=wt,u.wideTanHalf.value=wt*1.12,u.aspect.value=Rt.aspect;const At=performance.now()/1e3;if(yt||M||At-_>=w||p.angleTo(g)>.075||T.distanceToSquared(A)>900){d.fov=dn.radToDeg(2*Math.atan(wt*1.12)),d.aspect=Rt.aspect,d.near=Rt.near,d.far=Rt.far,d.updateProjectionMatrix(),d.position.copy(m),d.quaternion.copy(p);const Lt=Y.toneMapping;Y.toneMapping=La,Y.setRenderTarget(s),Y.render(i,d),Y.setRenderTarget(null),Y.toneMapping=Lt,g.copy(p),A.copy(T),_=performance.now()/1e3,M=!1}v.copy(g).invert().multiply(p),S.makeRotationFromQuaternion(v),l.setFromMatrix4(S)},dispose(){s.dispose(),D.dispose();const Y=new Set,J=new Set;i.traverse(yt=>{yt instanceof fn&&(Y.add(yt.geometry),J.add(yt.material))}),Y.forEach(yt=>yt.dispose()),J.forEach(yt=>yt.dispose())},configure(Y,J,yt,Rt,wt,At,Lt=!1){M=!0,w=Lt?1/15:Y==="Low"?1/20:Y==="Medium"?1/24:1/30;const B=vm[Y];D.configure(Y),q.octaves.value=B.octaves;const Mt=At&&Y!=="Low"?Xi:qi;s.texture.type!==Mt&&(s.dispose(),s.texture.type=Mt),s.setSize(Math.max(1,Math.round(yt*J*(Lt?.26:B.cloudScale))),Math.max(1,Math.round(Rt*J*(Lt?.26:B.cloudScale)))),q.halo.value=.75+wt*.8,Z.forEach((_t,ht)=>{_t.geometry.setDrawRange(0,B.stars[ht]),_t.material.uniforms.pixels.value=Rt*.64*J,_t.material.uniforms.dpr.value=J}),se.forEach((_t,ht)=>{_t.visible=ht<B.volumes,_t.material.uniforms.steps.value=B.steps})},update(Y,J,yt,Rt,wt){I.copy(Rt).sub(b).applyQuaternion(P),T.copy(I),D.update(Y,J,yt,Rt);const At=Na[yt],Lt=H[yt],B=1-Math.exp(-Y*.55);q.time.value=J,q.tint.value.lerp(Lt.tint,B),q.second.value.lerp(Lt.second,B),q.accent.value.lerp(Lt.accent,B),q.density.value=dn.lerp(q.density.value,At.density,B),q.band.value=dn.lerp(q.band.value,At.band,B),q.structure.value=dn.lerp(q.structure.value,At.structure,B),q.bandWidth.value=dn.lerp(q.bandWidth.value,At.bandWidth,B),q.warmth.value=dn.lerp(q.warmth.value,At.warmth,B),q.abundance.value=dn.lerp(q.abundance.value,At.stars/1.4,B),q.energy.value=dn.lerp(q.energy.value,wt,B),Z.forEach(Mt=>Mt.material.uniforms.offset.value.copy(I)),se.forEach((Mt,_t)=>{const ht=Tt[_t].center;Mt.position.set(dn.euclideanModulo(ht.x+Vt[_t].x-I.x+4600,9200)-4600,dn.euclideanModulo(ht.y+Vt[_t].y-I.y+3600,7200)-3600,dn.euclideanModulo(ht.z+Vt[_t].z-I.z+4600,9200)-4600);const vt=Math.max(Math.abs(Mt.position.x)/4600,Math.abs(Mt.position.y)/3600,Math.abs(Mt.position.z)/4600);Mt.position.applyQuaternion(z),Mt.material.uniforms.center.value.copy(Mt.position),Mt.material.uniforms.visibility.value=1-dn.smoothstep(vt,.65,.95)})}}}function n3(o,t=!1){const i=o[0].index!==null,s=new Set(Object.keys(o[0].attributes)),l=new Set(Object.keys(o[0].morphAttributes)),u={},h={},d=o[0].morphTargetsRelative,p=new Rn;let g=0;for(let v=0;v<o.length;++v){const m=o[v];let x=0;if(i!==(m.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const S in m.attributes){if(!s.has(S))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+'. All geometries must have compatible attributes; make sure "'+S+'" attribute exists among all geometries, or in none of them.'),null;u[S]===void 0&&(u[S]=[]),u[S].push(m.attributes[S]),x++}if(x!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". Make sure all geometries have the same number of attributes."),null;if(d!==m.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const S in m.morphAttributes){if(!l.has(S))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+".  .morphAttributes must be consistent throughout all geometries."),null;h[S]===void 0&&(h[S]=[]),h[S].push(m.morphAttributes[S])}if(t){let S;if(i)S=m.index.count;else if(m.attributes.position!==void 0)S=m.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". The geometry must have either an index or a position attribute"),null;p.addGroup(g,S,v),g+=S}}if(i){let v=0;const m=[];for(let x=0;x<o.length;++x){const S=o[x].index;for(let T=0;T<S.count;++T)m.push(S.getX(T)+v);v+=o[x].attributes.position.count}p.setIndex(m)}for(const v in u){const m=yy(u[v]);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+v+" attribute."),null;p.setAttribute(v,m)}for(const v in h){const m=h[v][0].length;if(m===0)break;p.morphAttributes=p.morphAttributes||{},p.morphAttributes[v]=[];for(let x=0;x<m;++x){const S=[];for(let A=0;A<h[v].length;++A)S.push(h[v][A][x]);const T=yy(S);if(!T)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+v+" morphAttribute."),null;p.morphAttributes[v].push(T)}}return p}function yy(o){let t,i,s,l=-1,u=0;for(let g=0;g<o.length;++g){const v=o[g];if(t===void 0&&(t=v.array.constructor),t!==v.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=v.itemSize),i!==v.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(s===void 0&&(s=v.normalized),s!==v.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(l===-1&&(l=v.gpuType),l!==v.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;u+=v.count*i}const h=new t(u),d=new Tn(h,i,s);let p=0;for(let g=0;g<o.length;++g){const v=o[g];if(v.isInterleavedBufferAttribute){const m=p/i;for(let x=0,S=v.count;x<S;x++)for(let T=0;T<i;T++){const A=v.getComponent(x,T);d.setComponent(x+m,T,A)}}else h.set(v.array,p);p+=v.count*i}return l!==void 0&&(d.gpuType=l),d}function i3(o){const t=new $s;t.name="enclosed-flight-deck",o.add(t);const i={value:new he("#ae80f0")},s={value:1},l=(E,U)=>new rn({uniforms:{baseColor:{value:new he(E)},tint:i,brightness:s,polish:{value:U}},vertexShader:"varying vec3 point,faceNormal;void main(){point=position;faceNormal=normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 point,faceNormal;uniform vec3 baseColor,tint;uniform float brightness,polish;
      float hash(vec3 p){return fract(sin(dot(p,vec3(12.9898,78.233,37.719)))*43758.5453);}
      void main(){vec3 n=normalize(faceNormal),v=normalize(-point),l=normalize(vec3(0.,1.8,-1.)-point);
      float diffuse=max(0.,dot(n,l)),spec=pow(max(0.,dot(n,normalize(l+v))),38.);
      float wear=step(.995,hash(floor(point*240.)))*.02;
      float brushed=sin(point.z*360.+point.x*170.)*.012;
      float rim=pow(1.-abs(dot(n,v)),3.);
      vec3 color=baseColor*(.65+diffuse*.85+brushed)+vec3(.34,.44,.49)*spec*polish;
      color+=tint*(rim*.024)+vec3(.25,.35,.35)*wear;
      gl_FragColor=vec4(color*brightness,1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`}),u=l("#141d23",.3),h=l("#2b393e",.5),d=l("#070b10",.12),p=new kl({color:"#52d9d5"}),g=new Map,v=(E,U)=>{g.has(U)||g.set(U,[]),g.get(U).push(E)};function m(E,U,H,q,nt,Q,F,$=0,Z=0,lt=0){const xt=new Eo(nt,Q,F);xt.rotateX($),xt.rotateY(Z),xt.rotateZ(lt),xt.translate(U,H,q),v(xt,E)}function x(E,U,H,q){const nt=new Um(q,q,U.distanceTo(H),8);nt.applyQuaternion(new Jn().setFromUnitVectors(new G(0,1,0),H.clone().sub(U).normalize())),nt.translate(...U.clone().add(H).multiplyScalar(.5).toArray()),v(nt,E)}function S(E,U,H,q,nt){const Q=Array.from({length:41},(F,$)=>{const Z=-.12+$/40*(Math.PI+.24);return new G(Math.cos(Z)*U,-.95+Math.sin(Z)*H,E)});v(new rf(new hm(Q),48,q,8,!1),nt)}m(u,0,-2.02,.25,7.3,.22,7),m(u,0,3.35,-.4,7.3,.2,7.3),m(u,0,.6,2.55,7.3,5.7,.2);for(const E of[-1,1]){m(u,E*3.55,-.15,.4,.2,6.8,5),m(u,E*2.62,-1.52,-1.9,.65,.76,4,0,E*-.1),x(h,new G(E*1.35,-.3,-3.18),new G(E*2.72,-1.4,.25),.075),x(u,new G(E*1.48,-.38,-3.2),new G(E*2.85,-1.47,.35),.14),x(h,new G(E*2.9,-.95,-3.2),new G(E*3.12,-1.25,.5),.055),x(p,new G(E*1.52,-.49,-3.1),new G(E*2.77,-1.54,.15),.009);for(let U=0;U<13;U++){const H=U/12;m(h,E*(1.48+H*1.33),-.4-H*1.08,-3.14+H*3.35,.035,.035,.028)}}S(-3.35,2.92,3.62,.085,u),S(-3.32,2.84,3.57,.025,h),S(-3.29,2.81,3.53,.008,p),S(.7,3.15,3.9,.12,u),x(u,new G(0,2.68,-3.35),new G(0,2.95,.8),.065);const T=new sS;T.moveTo(-1.62,-1.85),T.lineTo(-1.44,-.58),T.bezierCurveTo(-1.2,-.12,-.92,.48,-.58,.55),T.quadraticCurveTo(0,.72,.58,.55),T.bezierCurveTo(.92,.48,1.2,-.12,1.44,-.58),T.lineTo(1.62,-1.85),T.closePath();const A=new zm(T,{depth:.24,bevelEnabled:!0,bevelSize:.045,bevelThickness:.045,bevelSegments:2,steps:1});A.translate(0,-.12,-3.18),v(A,d);const M=[new G(-1.4,-.62,-2.89),new G(-.88,.23,-2.89),new G(0,.52,-2.89),new G(.88,.23,-2.89),new G(1.4,-.62,-2.89)];v(new rf(new hm(M),40,.045,8,!1),h),m(h,0,-.13,-2.84,1.19,.76,.12,-.1),m(d,0,-.13,-2.755,1.13,.7,.035,-.1),m(u,0,-.74,-2.72,1.32,.18,.22),m(d,0,-.72,-2.58,.85,.09,.06);for(const E of[-1,1]){m(u,E*1.14,-1.05,-1.62,.78,.25,1.75,.18,0,E*.12),m(d,E*1.14,-.91,-1.62,.69,.035,1.66,.18,0,E*.12),x(h,new G(E*1.59,-1.13,-.65),new G(E*1.61,-.78,-2.5),.045),x(h,new G(E*.73,-1.12,-.72),new G(E*.75,-.87,-2.35),.035),m(d,E*.97,-.63,-2.36,.59,.44,.12,-.34,-E*.18);for(let U=0;U<3;U++)for(let H=0;H<4;H++)m(h,E*1.15+(H-1.5)*.12,-.76-U*.035,-1.8+U*.18,.085,.04,.105,.18);for(let U=0;U<5;U++)m(d,E*1.23,-.83,-.96-U*.15,.12,.07,.085,.18),m(h,E*.94,-.79,-.98-U*.15,.045,.06,.065,.18);m(d,E*.65,-1.11,-1.78,.26,.11,.3),x(h,new G(E*.65,-1.07,-1.78),new G(E*.59,-.78,-1.86),.043),m(d,E*.59,-.72,-1.87,.11,.19,.16,-.25,0,E*.15),m(p,E*.59,-.625,-1.84,.035,.008,.045),m(h,E*.22,-1.74,-2.16,.2,.09,.34,.5);for(let U=0;U<6;U++)m(d,E*.22,-1.69+U*.013,-2.29+U*.04,.14,.014,.012,.5);m(p,E*1.34,-1.82,-.45,.025,.025,.58);for(let U=0;U<18;U++)m(h,E*1.32,-1.91,-.9+U*.085,.28,.014,.012)}m(d,0,-1.66,-.08,.99,.25,1.4),m(u,0,-.74,1,1.12,1.65,.28,-.13),m(d,0,-.72,.82,.91,1.44,.14,-.13),m(d,0,-.04,2.39,1.5,3,.1);for(const E of[-1,1])m(h,E*.79,-.04,2.29,.035,3,.035);const _=document.createElement("canvas");_.width=_.height=1024;const w=_.getContext("2d");w.fillStyle="#020b10",w.fillRect(0,0,1024,1024);const D=(E,U,H,q,nt="#40bfbf")=>{w.strokeStyle=nt,w.beginPath(),w.moveTo(E,U),w.lineTo(H,q),w.stroke()},b=(E,U,H,q=10,nt="#6ee9dd")=>{w.font=`${q}px monospace`,w.fillStyle=nt,w.fillText(E,U,H)};w.strokeStyle="#65eddf",w.lineWidth=3,w.strokeRect(5,5,630,354),b("A E T H E R   /   DEEP SPACE NAVIGATION",20,26,12),b("FLIGHT SYSTEMS",21,53),b("VECTOR  /  LOCK",465,53),w.lineWidth=1;for(let E=0;E<11;E++)D(20,70+E*22,164,70+E*22,"#154c58"),b(["NAV  ONLINE","DRIVE NOMINAL","O2   100.0%","HULL  STABLE"][E%4],24,84+E*22,8),D(460,70+E*22,610,70+E*22,"#154c58"),b(`${(E*173.29+72).toFixed(2)} / ${E%3===0?"ACTIVE":"SYNC"}`,467,84+E*22,8);for(let E=0;E<9;E++){const U=18+E*11;w.strokeStyle=E%2?"#174b59":"#21838b",w.beginPath(),w.arc(320,185,U,0,Math.PI*2),w.stroke()}for(let E=0;E<12;E++){const U=E/12*Math.PI*2;D(320+Math.cos(U)*19,185+Math.sin(U)*19,320+Math.cos(U)*107,185+Math.sin(U)*107,"#18525e")}const I=w.createRadialGradient(320,185,1,320,185,65);I.addColorStop(0,"#8bfff5"),I.addColorStop(.18,"#1dd7d5"),I.addColorStop(1,"#05303b00"),w.fillStyle=I,w.fillRect(250,115,140,140);for(let E=0;E<60;E++)D(185+E*4.4,317+Math.sin(E*.7)*7,189+E*4.4,317+Math.sin((E+1)*.7)*7,"#50cec5");b("PERSEUS // CONTINUOUS NAVIGATION",183,345,9),w.fillStyle="#04100a",w.fillRect(0,390,400,220);for(let E=0;E<18;E++)b(`${E.toString(16).padStart(2,"0")}  ${["SYSTEM LINK ESTABLISHED","TRAJECTORY COMPUTED","DEEP FIELD SCAN / OK","> AETHER FLIGHT COMPUTER"][E%4]}`,12,405+E*11,9,"#80c858");w.fillStyle="#063547",w.fillRect(430,390,350,180);for(let E=0;E<5;E++)b(["ATTITUDE","ENGINE","COOLANT","SIGNAL","ENERGY"][E],445,413+E*30,12),w.fillStyle="#47e4ef",w.fillRect(550,402+E*30,38+E*28,9);const z=["#f3d238","#28becf","#e35345","#9cd357","#c7e9de"];for(let E=0;E<4;E++)for(let U=0;U<8;U++){const H=12+U*48,q=650+E*48;w.fillStyle="#101e22",w.fillRect(H,q,40,40),w.fillStyle=z[(E*3+U)%5],w.fillRect(H+4,q+4,32,25),D(H+9,q+34,H+30,q+34,"#899d94")}for(let E=0;E<2;E++){const U=540+E*220,H=750;for(const q of[65,57,45])w.strokeStyle="#8df6e5",w.lineWidth=q===57?5:2,w.beginPath(),w.arc(U,H,q,-.9,4.9),w.stroke();w.fillStyle="#bdfff2",w.beginPath(),w.arc(U,H,12,0,Math.PI*2),w.fill(),D(U,H,U+34,H-24,"#bdfff2"),b(E?"OXYGEN":"VELOCITY",U-30,H+91,11)}for(let E=0;E<12;E++)w.fillStyle=z[E%5],w.fillRect(20+E*45,900,31,16),b(E%3===0?"ARM":"ON",22+E*45,935,8);const P=new nb(_);P.colorSpace=si,P.anisotropy=2;const V=new kl({map:P,color:"#d8fff5",side:Gi});function N(E,U,H,q,nt,Q,F=0,$=0,Z=0){const lt=new To(q,nt),xt=lt.getAttribute("uv");for(let Tt=0;Tt<xt.count;Tt++)xt.setXY(Tt,(Q[0]+xt.getX(Tt)*Q[2])/1024,1-(Q[1]+(1-xt.getY(Tt))*Q[3])/1024);lt.rotateX(F),lt.rotateY($),lt.rotateZ(Z),lt.translate(E,U,H),v(lt,V)}N(0,-.13,-2.727,1.07,.6,[0,0,640,365],-.1),N(-.73,-.39,-2.72,.32,.36,[455,663,170,190]),N(.73,-.39,-2.72,.32,.36,[675,663,170,190]),N(-.98,-.61,-2.265,.49,.32,[430,390,350,180],-.34,.18,.1),N(.98,-.61,-2.265,.49,.32,[0,390,400,220],-.34,-.18,-.1),N(0,-1.02,-2.39,.62,.3,[0,640,400,205],-.4),N(0,-.59,-2.71,1.46,.085,[0,890,560,65]);for(const E of[-1,1])N(E*1.14,-.86,-1.53,.5,.53,[0,640,400,205],-Math.PI/2+.18,0,E*.12),N(E*.65,-1.038,-1.67,.23,.09,[0,890,250,45],-Math.PI/2),N(E*1.14,-.77,-2.03,.54,.11,[0,890,560,65],-Math.PI/2+.18);for(const E of[-1,1])for(let U=0;U<3;U++)for(let H=0;H<4;H++)N(E*1.15+(H-1.5)*.12,-.734-U*.035,-1.8+U*.18,.065,.08,[16+(U*3+H)%8*48,654+U*48,30,25],-Math.PI/2+.18);for(const E of M){const U=new yo(.022,6,4);U.translate(E.x,E.y,E.z+.055),v(U,h)}for(const[E,U]of g){for(const nt of U){if(nt.index){const Q=nt.toNonIndexed();nt.copy(Q),Q.dispose()}nt.deleteAttribute("uv1")}const H=n3(U);U.forEach(nt=>nt.dispose());const q=new fn(H,E);q.name=E===u?"enclosure-shell":E===V?"instrument-displays":"cabin-details",t.add(q)}return{group:t,update(E,U,H,q){t.visible=q;const nt=H?.5:1;i.value.copy(E),s.value=U*nt,p.color.set("#50d7ce").multiplyScalar(.7*U*nt),V.color.set("#d8fff5").multiplyScalar((.8+U*.2)*(H?.5:1))},dispose(){P.dispose()}}}function a3(o,t,i,s,l={}){const u=new bw({antialias:!0,alpha:!1,powerPreference:"high-performance"});u.setClearColor("#040710"),u.outputColorSpace=si,u.toneMapping=ym,u.toneMappingExposure=xy.Balanced.exposure,o.appendChild(u.domElement);const h=new Zy,d=new vi(68,1,.1,16e3),p=new $s;p.position.z=5,p.add(d),h.add(p);const g=l.jump??new _S;let v=g.phase;const m={...t()},x=()=>(Object.assign(m,t()),m.blocked=m.blocked||g.busy,m),S=e3(h),T=Gw(p),A=new he,M=new he("#bad9f3"),_=i3(p),w=zw(u.domElement,s,i,x),D=new fS,b=new Bw;let I=t().quality,z=t().performanceMode,P=t().adaptive,V=0,N=0,E=0,U="",H=!1,q=null,nt=null;const Q=()=>{q&&(q.passes.forEach(lt=>lt.dispose()),q.dispose(),q=null,nt=null)},F=()=>{const lt=t(),xt=lt.performanceMode?"Low":lt.quality,Tt=vm[xt],Vt=Math.max(1,o.clientWidth),se=Math.max(1,o.clientHeight),X=Math.min(window.devicePixelRatio||1,Tt.pixelRatio)*(lt.performanceMode?.85:lt.adaptive?b.scale:1);u.setPixelRatio(X),u.setSize(Vt,se),d.aspect=Vt/se,d.updateProjectionMatrix();const gt=!lt.performanceMode&&Tt.bloom&&lt.bloom>0&&u.extensions.has("EXT_color_buffer_float");gt&&!q?(q=new Nw(u),q.addPass(new Uw(h,d)),nt=new So(new Ht(Vt,se),.2,.55,1.1),q.addPass(nt),q.addPass(new Ow)):gt||Q(),q&&(q.setPixelRatio(X),q.setSize(Vt,se)),S.configure(xt,X,Vt,se,lt.bloom,u.extensions.has("EXT_color_buffer_float"),lt.performanceMode),T.configure(xt,lt.reduced),U=`${lt.quality}/${lt.bloom}/${lt.performanceMode}/${lt.adaptive}/${lt.reduced}`},$=()=>{var lt;D.getDelta(),i.reset(!0),(lt=l.onAudio)==null||lt.call(l,0,0,!0)};document.addEventListener("visibilitychange",$),window.addEventListener("resize",F),F();const Z=()=>{var J,yt,Rt;if(H)return;V=requestAnimationFrame(Z);const lt=D.getDelta(),xt=lt>.25?0:lt,Tt=t();if(document.hidden){i.reset(!0);return}const Vt=Math.min(lt,.25);g.advance(lt,Tt.paused),g.phase!==v&&(v=g.phase,(J=l.onPhase)==null||J.call(l,g.phase)),g.justCommitted&&(S.reseed(g.seed,g.destination,i.position,i.shipQuaternion),(yt=l.onDestination)==null||yt.call(l,g.destination,g.seed));const se=g.busy&&g.committed?g.destination:Tt.region,X=g.energy*(Tt.reduced?.16:Tt.mode==="Meditation"?.55:1);w.sync(),x(),g.busy&&(m.mode="Autopilot",m.motion=0,m.started=!0,m.speed=Tt.speed+Math.pow(g.energy,2)*(Tt.reduced?100:360)),Iw(i,lt,m),(Rt=l.onAudio)==null||Rt.call(l,X,g.charge,Tt.paused),(Tt.quality!==I||Tt.performanceMode!==z||Tt.adaptive!==P)&&(b.reset(),I=Tt.quality,z=Tt.performanceMode,P=Tt.adaptive);const gt=b.observe(lt,Tt.adaptive&&!Tt.performanceMode,Tt.paused);(U!==`${Tt.quality}/${Tt.bloom}/${Tt.performanceMode}/${Tt.adaptive}/${Tt.reduced}`||gt)&&F(),Tt.paused||(N+=xt);const Y=xy[Tt.lighting];u.toneMappingExposure=dn.damp(u.toneMappingExposure,Y.exposure*Na[se].exposure,.8,Vt),S.setJump(X,g.veil),S.update(Vt,N,se,i.position,Y.nebula),p.quaternion.copy(i.shipQuaternion),d.quaternion.copy(i.lookQuaternion),A.copy(S.tint).lerp(M,g.charge*.3),_.update(A,Y.cabin*(1+g.charge*.12),Tt.mode==="Meditation",Tt.cockpit),T.update(Tt.paused?0:Math.min(lt,.1),X,S.tint),nt&&(nt.strength=Tt.bloom*(Tt.mode==="Meditation"?.45:.8+X*.2)),E+=lt,!(Tt.paused&&E<1/15)&&(E=0,S.renderAtmosphere(u,d),q?q.render():u.render(h,d))};return Z(),()=>{var Tt;H=!0,cancelAnimationFrame(V),w.dispose(),window.removeEventListener("resize",F),document.removeEventListener("visibilitychange",$),(Tt=l.onAudio)==null||Tt.call(l,0,0,!0),Q(),_.dispose(),S.dispose();const lt=new Set,xt=new Set;h.traverse(Vt=>{if(Vt instanceof fn||Vt instanceof Ky||Vt instanceof Qy){lt.add(Vt.geometry);for(const se of Array.isArray(Vt.material)?Vt.material:[Vt.material])xt.add(se)}}),lt.forEach(Vt=>Vt.dispose()),xt.forEach(Vt=>Vt.dispose()),u.dispose(),u.domElement.remove()}}class s3{constructor(){xe(this,"ctx",null);xe(this,"master");xe(this,"engine");xe(this,"music");xe(this,"jumpGain");xe(this,"jumpTone");xe(this,"jumpFilter");xe(this,"lastDrive",-1);xe(this,"lastCharge",-1)}async start(){if(!this.ctx){const t=this.ctx=new AudioContext;this.master=t.createGain(),this.master.gain.value=0,this.master.connect(t.destination),this.engine=t.createGain(),this.music=t.createGain(),this.engine.connect(this.master),this.music.connect(this.master),[38,57,76].forEach(h=>{const d=t.createOscillator();d.type="sine",d.frequency.value=h;const p=t.createGain();p.gain.value=.09,d.connect(p).connect(this.engine),d.start()}),[130.81,196,261.63,293.66,392].forEach((h,d)=>{const p=t.createOscillator();p.frequency.value=h;const g=t.createGain();g.gain.value=.025;const v=t.createOscillator();v.frequency.value=.035+d*.009;const m=t.createGain();m.gain.value=.012,v.connect(m).connect(g.gain),p.connect(g).connect(this.music),p.start(),v.start()}),this.jumpGain=t.createGain(),this.jumpGain.gain.value=0,this.jumpGain.connect(this.engine),this.jumpTone=t.createOscillator(),this.jumpTone.frequency.value=42,this.jumpTone.connect(this.jumpGain),this.jumpTone.start();const i=t.createBuffer(1,t.sampleRate*2,t.sampleRate),s=i.getChannelData(0);let l=1237;for(let h=0;h<s.length;h++)l=l*16807%2147483647,s[h]=((l-1)/2147483646-.5)*.35;const u=t.createBufferSource();u.buffer=i,u.loop=!0,this.jumpFilter=t.createBiquadFilter(),this.jumpFilter.type="lowpass",this.jumpFilter.frequency.value=250,u.connect(this.jumpFilter).connect(this.jumpGain),u.start()}await this.ctx.resume()}set(t,i,s,l){var h,d,p;if(!this.ctx)return;const u=this.ctx.currentTime;(h=this.master)==null||h.gain.setTargetAtTime(t&&!l?.65:0,u,.4),(d=this.engine)==null||d.gain.setTargetAtTime(i,u,.2),(p=this.music)==null||p.gain.setTargetAtTime(s,u,.2)}jump(t,i,s){if(!this.ctx||!this.jumpGain||(s&&(t=i=0),Math.abs(t-this.lastDrive)<.01&&Math.abs(i-this.lastCharge)<.01&&!(t===0&&this.lastDrive!==0)))return;this.lastDrive=t,this.lastCharge=i;const l=this.ctx.currentTime;this.jumpGain.gain.cancelScheduledValues(l),this.jumpGain.gain.setTargetAtTime(.018*i+.055*t,l,.15),this.jumpTone.frequency.cancelScheduledValues(l),this.jumpTone.frequency.setTargetAtTime(42+i*12+t*145,l,.25),this.jumpFilter.frequency.cancelScheduledValues(l),this.jumpFilter.frequency.setTargetAtTime(250+t*1100,l,.25)}dispose(){var t;(t=this.ctx)==null||t.close()}}function r3(){const[o,t]=me.useState("Autopilot"),[i,s]=me.useState(18),[l,u]=me.useState(!1),[h,d]=me.useState(0),[p,g]=me.useState(()=>matchMedia("(any-pointer: coarse)").matches?"Low":"Medium"),[v,m]=me.useState(matchMedia("(prefers-reduced-motion: reduce)").matches),[x,S]=me.useState(.6),[T,A]=me.useState(!0),[M,_]=me.useState(!1),[w,D]=me.useState(!1),[b,I]=me.useState(""),[z,P]=me.useState(!1),[V,N]=me.useState(.35),[E,U]=me.useState(.5),[H,q]=me.useState(!0),[nt,Q]=me.useState(""),[F,$]=me.useState(!1),[Z,lt]=me.useState(1),[xt,Tt]=me.useState(.7),[Vt,se]=me.useState(!1),[X,gt]=me.useState(!1),[Y,J]=me.useState("Balanced"),[yt,Rt]=me.useState(.28),[wt,At]=me.useState(!1),[Lt,B]=me.useState(!0),[Mt,_t]=me.useState("idle"),[ht,vt]=me.useState(7123),[Ct,Nt]=me.useState(0),zt=me.useRef(new _S),oe=me.useRef(()=>{}),re=Mt!=="idle",O=me.useRef(null),R=me.useRef(new Pw),st=me.useRef(null),pt=me.useRef(new s3),Ut=me.useRef({mode:o,speed:i,paused:l,region:h,quality:p,reduced:v,motion:x,cockpit:T,started:M,blocked:!!b||re,sensitivity:Z,touchSensitivity:xt,invertMouseX:Vt,invertMouseY:X,lighting:Y,bloom:yt,performanceMode:wt,adaptive:Lt,worldSeed:ht});Ut.current={mode:o,speed:i,paused:l,region:h,quality:p,reduced:v,motion:x,cockpit:T,started:M,blocked:!!b||re,sensitivity:Z,touchSensitivity:xt,invertMouseX:Vt,invertMouseY:X,lighting:Y,bloom:yt,performanceMode:wt,adaptive:Lt,worldSeed:ht},me.useEffect(()=>{try{return a3(st.current,()=>Ut.current,R.current,O.current,{jump:zt.current,onPhase:_t,onDestination:(ft,ee)=>{d(ft),vt(ee)},onAudio:(ft,ee,Yt)=>pt.current.jump(ft,ee,Yt)})}catch{Q("WebGL could not start. Please enable hardware acceleration and reload.")}},[]),me.useEffect(()=>()=>pt.current.dispose(),[]),me.useEffect(()=>{const ft=setInterval(()=>Nt(R.current.speed),200);return()=>clearInterval(ft)},[]),me.useEffect(()=>{pt.current.set(z,V,E,l)},[z,V,E,l]),me.useEffect(()=>{const ft=setInterval(()=>{H&&M&&!l&&!zt.current.busy&&d(ee=>(ee+1)%5)},9e4);return()=>clearInterval(ft)},[H,M,l]),me.useEffect(()=>{const ft=Yt=>{Yt.target instanceof HTMLElement&&Yt.target.closest('input,select,textarea,[contenteditable="true"]')||(Yt.code==="KeyJ"&&!Yt.repeat&&!Yt.ctrlKey&&!Yt.metaKey&&!Yt.altKey&&(Yt.preventDefault(),oe.current()),Yt.key.toLowerCase()==="h"&&D(qt=>!qt),Yt.code==="Space"&&!(Yt.target instanceof HTMLElement&&Yt.target.closest("button,a"))&&(Yt.preventDefault(),u(qt=>!qt)),Yt.key==="Escape"&&(D(!1),I("")))},ee=()=>$(!!document.fullscreenElement);return window.addEventListener("keydown",ft),document.addEventListener("fullscreenchange",ee),()=>{window.removeEventListener("keydown",ft),document.removeEventListener("fullscreenchange",ee)}},[]);const St=async()=>{try{await pt.current.start(),P(ft=>!ft)}catch{Q("Audio is unavailable in this browser. The journey can continue silently.")}},Qt=()=>{_(!0),u(!1)},Bt=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{Q("Fullscreen is unavailable in this browser.")}},Jt=ft=>{zt.current.busy||(t(ft),_(!0))},te=()=>{zt.current.start(h,ht,l)&&(_(!0),I(""),_t("charging"))};oe.current=te;const Ot=l&&re?"Jump paused":Mt==="charging"?"Charging drive…":Mt==="accelerating"?"Accelerating…":Mt==="transit"?"Crossing the light…":Mt==="arriving"?`Entering ${Na[zt.current.destination].name}…`:Mt==="stabilized"?`Arrived: ${Na[zt.current.destination].name}`:"";return ct.jsxs("main",{"data-jump-phase":Mt,"data-world-seed":ht,className:`${w?"hidden-ui":""} ${o==="Meditation"?"meditation":""} ${o==="Manual Flight"?"manual-flight":""} ${b||l||re?"controls-blocked":""} ${re?"jump-active":""}`,children:[ct.jsx("div",{className:"universe",ref:st}),ct.jsx("div",{className:"vignette"}),ct.jsxs("div",{className:"touch-controls ui",children:[ct.jsxs("div",{ref:O,className:"touch-joystick",role:"group","aria-label":"Touch flight joystick",children:[ct.jsx("span",{className:"stick-cross",children:"+"}),ct.jsx("span",{className:"stick-thumb"}),ct.jsx("small",{children:"STEER"})]}),ct.jsx("span",{className:"touch-look-hint",children:"DRAG SPACE TO LOOK"})]}),ct.jsxs("header",{className:"ui",children:[ct.jsxs("a",{className:"brand",href:"#",onClick:ft=>{ft.preventDefault(),D(!1)},children:[ct.jsx(xE,{size:32}),ct.jsxs("span",{children:["COSMIC DRIFT",ct.jsx("small",{children:"A QUIETER KIND OF JOURNEY"})]})]}),ct.jsxs("nav",{children:[ct.jsx("span",{className:"live-dot"})," ALL SYSTEMS AT PEACE ",ct.jsx("span",{className:"nav-line"}),ct.jsx("button",{title:"Audio settings",onClick:()=>I(b==="audio"?"":"audio"),children:ct.jsx(Gd,{size:18})}),ct.jsx("button",{title:"Settings",onClick:()=>I(b==="settings"?"":"settings"),children:ct.jsx(ME,{size:18})}),ct.jsx("button",{title:"Fullscreen",onClick:Bt,children:ct.jsx(sx,{size:18})})]})]}),ct.jsxs("section",{className:"intro ui",children:[ct.jsxs("div",{className:"eyebrow",children:[ct.jsx("span",{})," LEAVE THE NOISE BEHIND"]}),ct.jsxs("h1",{children:["Nowhere to be.",ct.jsx("br",{}),"Just ",ct.jsx("em",{children:"drift."})]}),ct.jsxs("p",{children:["A quiet passage through an infinite universe.",ct.jsx("br",{}),"No destination. No demands. Just you and the stars."]}),ct.jsxs("button",{className:"start",onClick:Qt,children:[M?l?"Resume journey":"Journey in progress":"Start journey",ct.jsx(gE,{size:18})]}),ct.jsxs("div",{className:"intro-note",children:[ct.jsx("span",{})," ",M?"TAKE YOUR TIME. YOU HAVE ALL OF IT.":"YOUR OWN LITTLE CORNER OF INFINITY"]})]}),ct.jsxs("aside",{className:"region-label ui",children:[ct.jsx("span",{className:"coordinate",children:"SECTOR 07 / PERSEUS"}),ct.jsx("div",{className:"region-rule"}),ct.jsx("span",{className:"eyebrow",children:"YOU ARE DRIFTING THROUGH"}),ct.jsx("h2",{children:Na[h].name}),ct.jsx("p",{children:Na[h].subtitle}),ct.jsxs("button",{disabled:re,onClick:()=>I(b==="regions"?"":"regions"),children:["Explore regions ",ct.jsx(ix,{size:14})]})]}),ct.jsxs("div",{className:"travel-marker ui",children:[ct.jsx("span",{children:"✧"}),ct.jsx("i",{}),ct.jsx("small",{children:"AN INFINITE UNIVERSE. AN UNHURRIED YOU."})]}),ct.jsxs("section",{className:"flight-deck ui",children:[ct.jsxs("div",{className:"deck-top",children:[ct.jsxs("div",{className:"deck-label",children:[ct.jsx("span",{className:"live-dot"}),l?"JOURNEY PAUSED":M?"JOURNEY ACTIVE":"READY WHEN YOU ARE"]}),ct.jsxs("div",{className:"jump-tools",children:[ct.jsx("span",{className:"jump-status",role:"status","aria-live":"polite",children:Ot}),ct.jsx("span",{className:"ship-name",children:"AETHER–01"}),ct.jsxs("button",{className:"jump-button",disabled:re||l,onClick:te,"aria-keyshortcuts":"J",children:[ct.jsx(bE,{size:14}),"Light Jump",ct.jsx("kbd",{children:"J"})]})]})]}),ct.jsxs("div",{className:"deck-controls",children:[ct.jsx("div",{className:"mode-controls",children:[{name:"Autopilot",icon:vE},{name:"Manual Flight",icon:_E},{name:"Meditation",icon:TE}].map(ft=>ct.jsxs("button",{disabled:re,className:o===ft.name?"selected":"",onClick:()=>Jt(ft.name),children:[ct.jsx(ft.icon,{size:17}),ct.jsxs("span",{children:[ft.name,ft.name==="Meditation"?" mode":""]})]},ft.name))}),ct.jsxs("div",{className:"speed",children:[ct.jsxs("label",{htmlFor:"speed",children:["DRIFT SPEED ",ct.jsxs("span",{children:[Ct.toFixed(0)," ",ct.jsx("small",{children:"km/s"})]})]}),ct.jsx("input",{id:"speed",disabled:re,type:"range",min:"0",max:"1200",value:i,onChange:ft=>s(+ft.target.value)}),ct.jsxs("div",{children:[ct.jsx("span",{children:"0 · BRAKE"}),ct.jsx("span",{children:"INTERSTELLAR"})]})]}),ct.jsxs("div",{className:"deck-actions",children:[ct.jsx("button",{title:l?"Resume":"Pause",onClick:()=>u(ft=>!ft),children:l?ct.jsx(SE,{size:19}):ct.jsx(yE,{size:19})}),ct.jsx("button",{title:z?"Mute audio":"Enable audio",onClick:St,children:z?ct.jsx(Gd,{size:19}):ct.jsx(EE,{size:19})}),ct.jsx("button",{title:"Hide interface (H)",onClick:()=>D(!0),children:ct.jsx(ax,{size:19})})]})]})]}),ct.jsxs("footer",{className:"ui",children:[ct.jsxs("span",{children:[ct.jsx("span",{className:"key",children:"DRAG"})," TO LOOK AROUND ",ct.jsx("i",{})," ",ct.jsx("span",{className:"key",children:o==="Manual Flight"?"W A S D":"H"})," ",o==="Manual Flight"?"TO STEER":"TO HIDE INTERFACE"]}),ct.jsxs("span",{children:["BUILT FOR WANDERING ",ct.jsx("span",{className:"tiny-star",children:"✦"})]})]}),w&&ct.jsxs("button",{className:"restore",onClick:()=>D(!1),children:[ct.jsx(ax,{size:16})," Show controls · H"]}),b&&ct.jsxs("div",{className:"panel ui",children:[ct.jsxs("div",{className:"panel-head",children:[ct.jsx("span",{children:b==="regions"?"Choose your horizon":b==="audio"?"The sound of stillness":"Make space your own"}),ct.jsx("button",{title:"Close settings",onClick:()=>I(""),children:ct.jsx(rx,{size:19})})]}),b==="regions"?ct.jsxs(ct.Fragment,{children:[ct.jsx("p",{children:"Every corner of the universe has a different kind of quiet."}),Na.map((ft,ee)=>ct.jsxs("button",{disabled:re,className:`region-option ${h===ee?"active":""}`,onClick:()=>d(ee),children:[ct.jsx("span",{className:"orb",style:{background:`radial-gradient(circle at 30% 30%,${ft.color},${ft.second},#070a12)`}}),ct.jsxs("span",{children:[ft.name,ct.jsx("small",{children:ft.subtitle})]}),h===ee?"●":ct.jsx(ix,{size:15})]},ft.name)),ct.jsxs("label",{className:"check",children:[ct.jsx("input",{type:"checkbox",checked:H,onChange:ft=>q(ft.target.checked)})," Automatically drift between regions · 90s"]})]}):b==="audio"?ct.jsxs(ct.Fragment,{children:[ct.jsx("p",{children:"Original ambient tones, synthesized just for this journey."}),ct.jsxs("button",{className:"sound-toggle",onClick:St,children:[z?"Mute all audio":"Enable sound",ct.jsx(Gd,{size:17})]}),ct.jsxs("label",{className:"setting",children:["Engine hum",ct.jsx("input",{"aria-label":"Engine volume",type:"range",min:"0",max:"1",step:".01",value:V,onChange:ft=>N(+ft.target.value)})]}),ct.jsxs("label",{className:"setting",children:["Ambient music",ct.jsx("input",{"aria-label":"Music volume",type:"range",min:"0",max:"1",step:".01",value:E,onChange:ft=>U(+ft.target.value)})]})]}):ct.jsxs(ct.Fragment,{children:[ct.jsxs("label",{className:"setting",children:["Graphics quality",ct.jsx("select",{"aria-label":"Graphics quality",value:p,onChange:ft=>g(ft.target.value),children:["Low","Medium","High"].map(ft=>ct.jsx("option",{children:ft},ft))})]}),ct.jsxs("label",{className:"check",children:[ct.jsx("input",{type:"checkbox",checked:wt,onChange:ft=>At(ft.target.checked)})," Performance mode"]}),ct.jsxs("label",{className:"check",children:[ct.jsx("input",{type:"checkbox",checked:Lt,onChange:ft=>B(ft.target.checked)})," Adaptive resolution"]}),ct.jsx("small",{className:"setting-note",children:"Performance mode prioritizes smooth flight. Adaptive resolution adjusts image detail when rendering is slow."}),ct.jsxs("label",{className:"setting",children:["Environment lighting",ct.jsx("select",{"aria-label":"Environment lighting",value:Y,onChange:ft=>J(ft.target.value),children:["Dark","Balanced","Cinematic"].map(ft=>ct.jsx("option",{children:ft},ft))})]}),ct.jsxs("label",{className:"setting",children:["Soft bloom ",ct.jsxs("output",{children:[Math.round(yt*100),"%"]}),ct.jsx("input",{"aria-label":"Soft bloom",type:"range",min:"0",max:".6",step:".02",value:yt,onChange:ft=>Rt(+ft.target.value)}),ct.jsx("small",{className:"setting-note",children:"Low / Medium use lightweight star halos; High can add post-processing bloom."})]}),ct.jsxs("label",{className:"setting",children:["Steering / mouse sensitivity ",ct.jsxs("output",{children:[Z.toFixed(2),"×"]}),ct.jsx("input",{"aria-label":"Steering and mouse sensitivity",type:"range",min:".25",max:"2",step:".05",value:Z,onChange:ft=>lt(+ft.target.value)})]}),ct.jsxs("label",{className:"setting",children:["Touch sensitivity ",ct.jsxs("output",{children:[xt.toFixed(2),"×"]}),ct.jsx("input",{"aria-label":"Touch sensitivity",type:"range",min:".25",max:"1.5",step:".05",value:xt,onChange:ft=>Tt(+ft.target.value)})]}),ct.jsxs("label",{className:"check",children:[ct.jsx("input",{type:"checkbox",checked:Vt,onChange:ft=>se(ft.target.checked)})," Invert mouse horizontal axis"]}),ct.jsxs("label",{className:"check",children:[ct.jsx("input",{type:"checkbox",checked:X,onChange:ft=>gt(ft.target.checked)})," Invert mouse vertical axis"]}),ct.jsxs("label",{className:"setting",children:["Camera movement",ct.jsx("input",{"aria-label":"Camera movement",type:"range",min:"0",max:"1",step:".05",value:x,onChange:ft=>S(+ft.target.value)})]}),ct.jsxs("label",{className:"check",children:[ct.jsx("input",{type:"checkbox",checked:v,onChange:ft=>m(ft.target.checked)})," Reduced motion"]}),ct.jsxs("label",{className:"check",children:[ct.jsx("input",{type:"checkbox",checked:T,onChange:ft=>A(ft.target.checked)})," Show cockpit"]}),ct.jsxs("button",{className:"sound-toggle",onClick:Bt,children:[F?"Exit fullscreen":"Enter fullscreen",ct.jsx(sx,{size:16})]})]})]}),nt&&ct.jsxs("div",{role:"alert",className:"error",children:[nt,ct.jsx("button",{onClick:()=>Q(""),"aria-label":"Dismiss error",children:ct.jsx(rx,{size:16})})]})]})}hE.createRoot(document.getElementById("root")).render(ct.jsx(r3,{}));
