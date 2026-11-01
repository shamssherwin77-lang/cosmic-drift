var p1=Object.defineProperty;var m1=(o,e,i)=>e in o?p1(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var ve=(o,e,i)=>m1(o,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var xd={exports:{}},fl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var S_;function g1(){if(S_)return fl;S_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:c}}return fl.Fragment=e,fl.jsx=i,fl.jsxs=i,fl}var M_;function v1(){return M_||(M_=1,xd.exports=g1()),xd.exports}var lt=v1(),yd={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E_;function _1(){if(E_)return fe;E_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),S=Symbol.iterator;function E(G){return G===null||typeof G!="object"?null:(G=S&&G[S]||G["@@iterator"],typeof G=="function"?G:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,v={};function A(G,dt,k){this.props=G,this.context=dt,this.refs=v,this.updater=k||b}A.prototype.isReactComponent={},A.prototype.setState=function(G,dt){if(typeof G!="object"&&typeof G!="function"&&G!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,G,dt,"setState")},A.prototype.forceUpdate=function(G){this.updater.enqueueForceUpdate(this,G,"forceUpdate")};function N(){}N.prototype=A.prototype;function w(G,dt,k){this.props=G,this.context=dt,this.refs=v,this.updater=k||b}var I=w.prototype=new N;I.constructor=w,M(I,A.prototype),I.isPureReactComponent=!0;var z=Array.isArray;function P(){}var V={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function C(G,dt,k){var K=k.ref;return{$$typeof:o,type:G,key:dt,ref:K!==void 0?K:null,props:k}}function H(G,dt){return C(G.type,dt,G.props)}function Y(G){return typeof G=="object"&&G!==null&&G.$$typeof===o}function Q(G){var dt={"=":"=0",":":"=2"};return"$"+G.replace(/[=:]/g,function(k){return dt[k]})}var pt=/\/+/g;function at(G,dt){return typeof G=="object"&&G!==null&&G.key!=null?Q(""+G.key):dt.toString(36)}function F(G){switch(G.status){case"fulfilled":return G.value;case"rejected":throw G.reason;default:switch(typeof G.status=="string"?G.then(P,P):(G.status="pending",G.then(function(dt){G.status==="pending"&&(G.status="fulfilled",G.value=dt)},function(dt){G.status==="pending"&&(G.status="rejected",G.reason=dt)})),G.status){case"fulfilled":return G.value;case"rejected":throw G.reason}}throw G}function nt(G,dt,k,K,mt){var Tt=typeof G;(Tt==="undefined"||Tt==="boolean")&&(G=null);var bt=!1;if(G===null)bt=!0;else switch(Tt){case"bigint":case"string":case"number":bt=!0;break;case"object":switch(G.$$typeof){case o:case e:bt=!0;break;case _:return bt=G._init,nt(bt(G._payload),dt,k,K,mt)}}if(bt)return mt=mt(G),bt=K===""?"."+at(G,0):K,z(mt)?(k="",bt!=null&&(k=bt.replace(pt,"$&/")+"/"),nt(mt,dt,k,"",function(O){return O})):mt!=null&&(Y(mt)&&(mt=H(mt,k+(mt.key==null||G&&G.key===mt.key?"":(""+mt.key).replace(pt,"$&/")+"/")+bt)),dt.push(mt)),1;bt=0;var yt=K===""?".":K+":";if(z(G))for(var Dt=0;Dt<G.length;Dt++)K=G[Dt],Tt=yt+at(K,Dt),bt+=nt(K,dt,k,Tt,mt);else if(Dt=E(G),typeof Dt=="function")for(G=Dt.call(G),Dt=0;!(K=G.next()).done;)K=K.value,Tt=yt+at(K,Dt++),bt+=nt(K,dt,k,Tt,mt);else if(Tt==="object"){if(typeof G.then=="function")return nt(F(G),dt,k,K,mt);throw dt=String(G),Error("Objects are not valid as a React child (found: "+(dt==="[object Object]"?"object with keys {"+Object.keys(G).join(", ")+"}":dt)+"). If you meant to render a collection of children, use an array instead.")}return bt}function j(G,dt,k){if(G==null)return G;var K=[],mt=0;return nt(G,K,"","",function(Tt){return dt.call(k,Tt,mt++)}),K}function ft(G){if(G._status===-1){var dt=G._result,k=dt();k.then(function(K){(G._status===0||G._status===-1)&&(G._status=1,G._result=K,k.status===void 0&&(k.status="fulfilled",k.value=K))},function(K){(G._status===0||G._status===-1)&&(G._status=2,G._result=K,k.status===void 0&&(k.status="rejected",k.reason=K))}),G._status===-1&&(G._status=0,G._result=k)}if(G._status===1)return G._result.default;throw G._result}var St=typeof reportError=="function"?reportError:function(G){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var dt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof G=="object"&&G!==null&&typeof G.message=="string"?String(G.message):String(G),error:G});if(!window.dispatchEvent(dt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",G);return}console.error(G)};function Et(G){var dt=V.T,k={};k.types=dt!==null?dt.types:null,V.T=k;try{var K=G(),mt=V.S;mt!==null&&mt(k,K),typeof K=="object"&&K!==null&&typeof K.then=="function"&&K.then(P,St)}catch(Tt){St(Tt)}finally{dt!==null&&k.types!==null&&(dt.types=k.types),V.T=dt}}function Ht(G){var dt=V.T;if(dt!==null){var k=dt.types;k===null?dt.types=[G]:k.indexOf(G)===-1&&k.push(G)}else Et(Ht.bind(null,G))}var oe={map:j,forEach:function(G,dt,k){j(G,function(){dt.apply(this,arguments)},k)},count:function(G){var dt=0;return j(G,function(){dt++}),dt},toArray:function(G){return j(G,function(dt){return dt})||[]},only:function(G){if(!Y(G))throw Error("React.Children.only expected to receive a single React element child.");return G}};return fe.Activity=m,fe.Children=oe,fe.Component=A,fe.Fragment=i,fe.Profiler=l,fe.PureComponent=w,fe.StrictMode=s,fe.Suspense=p,fe.ViewTransition=x,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,fe.__COMPILER_RUNTIME={__proto__:null,c:function(G){return V.H.useMemoCache(G)}},fe.addTransitionType=Ht,fe.cache=function(G){return function(){return G.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(G,dt,k){if(G==null)throw Error("The argument must be a React element, but you passed "+G+".");var K=M({},G.props),mt=G.key;if(dt!=null)for(Tt in dt.key!==void 0&&(mt=""+dt.key),dt)!U.call(dt,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&dt.ref===void 0||(K[Tt]=dt[Tt]);var Tt=arguments.length-2;if(Tt===1)K.children=k;else if(1<Tt){for(var bt=Array(Tt),yt=0;yt<Tt;yt++)bt[yt]=arguments[yt+2];K.children=bt}return C(G.type,mt,K)},fe.createContext=function(G){return G={$$typeof:h,_currentValue:G,_currentValue2:G,_threadCount:0,Provider:null,Consumer:null},G.Provider=G,G.Consumer={$$typeof:c,_context:G},G},fe.createElement=function(G,dt,k){var K,mt={},Tt=null;if(dt!=null)for(K in dt.key!==void 0&&(Tt=""+dt.key),dt)U.call(dt,K)&&K!=="key"&&K!=="__self"&&K!=="__source"&&(mt[K]=dt[K]);var bt=arguments.length-2;if(bt===1)mt.children=k;else if(1<bt){for(var yt=Array(bt),Dt=0;Dt<bt;Dt++)yt[Dt]=arguments[Dt+2];mt.children=yt}if(G&&G.defaultProps)for(K in bt=G.defaultProps,bt)mt[K]===void 0&&(mt[K]=bt[K]);return C(G,Tt,mt)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(G){return{$$typeof:d,render:G}},fe.isValidElement=Y,fe.lazy=function(G){return{$$typeof:_,_payload:{_status:-1,_result:G},_init:ft}},fe.memo=function(G,dt){return{$$typeof:g,type:G,compare:dt===void 0?null:dt}},fe.startTransition=Et,fe.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},fe.use=function(G){return V.H.use(G)},fe.useActionState=function(G,dt,k){return V.H.useActionState(G,dt,k)},fe.useCallback=function(G,dt){return V.H.useCallback(G,dt)},fe.useContext=function(G){return V.H.useContext(G)},fe.useDebugValue=function(){},fe.useDeferredValue=function(G,dt){return V.H.useDeferredValue(G,dt)},fe.useEffect=function(G,dt){return V.H.useEffect(G,dt)},fe.useEffectEvent=function(G){return V.H.useEffectEvent(G)},fe.useId=function(){return V.H.useId()},fe.useImperativeHandle=function(G,dt,k){return V.H.useImperativeHandle(G,dt,k)},fe.useInsertionEffect=function(G,dt){return V.H.useInsertionEffect(G,dt)},fe.useLayoutEffect=function(G,dt){return V.H.useLayoutEffect(G,dt)},fe.useMemo=function(G,dt){return V.H.useMemo(G,dt)},fe.useOptimistic=function(G,dt){return V.H.useOptimistic(G,dt)},fe.useReducer=function(G,dt,k){return V.H.useReducer(G,dt,k)},fe.useRef=function(G){return V.H.useRef(G)},fe.useState=function(G){return V.H.useState(G)},fe.useSyncExternalStore=function(G,dt,k){return V.H.useSyncExternalStore(G,dt,k)},fe.useTransition=function(){return V.H.useTransition()},fe.version="19.3.1",fe}var T_;function Qp(){return T_||(T_=1,yd.exports=_1()),yd.exports}var he=Qp(),Sd={exports:{}},hl={},Md={exports:{}},Ed={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b_;function x1(){return b_||(b_=1,(function(o){function e(F,nt){var j=F.length;F.push(nt);t:for(;0<j;){var ft=j-1>>>1,St=F[ft];if(0<l(St,nt))F[ft]=nt,F[j]=St,j=ft;else break t}}function i(F){return F.length===0?null:F[0]}function s(F){if(F.length===0)return null;var nt=F[0],j=F.pop();if(j!==nt){F[0]=j;t:for(var ft=0,St=F.length,Et=St>>>1;ft<Et;){var Ht=2*(ft+1)-1,oe=F[Ht],G=Ht+1,dt=F[G];if(0>l(oe,j))G<St&&0>l(dt,oe)?(F[ft]=dt,F[G]=j,ft=G):(F[ft]=oe,F[Ht]=j,ft=Ht);else if(G<St&&0>l(dt,j))F[ft]=dt,F[G]=j,ft=G;else break t}}return nt}function l(F,nt){var j=F.sortIndex-nt.sortIndex;return j!==0?j:F.id-nt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],g=[],_=1,m=null,x=3,S=!1,E=!1,b=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,A=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function w(F){for(var nt=i(g);nt!==null;){if(nt.callback===null)s(g);else if(nt.startTime<=F)s(g),nt.sortIndex=nt.expirationTime,e(p,nt);else break;nt=i(g)}}function I(F){if(b=!1,w(F),!E)if(i(p)!==null)E=!0,z||(z=!0,Y());else{var nt=i(g);nt!==null&&at(I,nt.startTime-F)}}var z=!1,P=-1,V=5,U=-1;function C(){return M?!0:!(o.unstable_now()-U<V)}function H(){if(M=!1,z){var F=o.unstable_now();U=F;var nt=!0;try{t:{E=!1,b&&(b=!1,A(P),P=-1),S=!0;var j=x;try{e:{for(w(F),m=i(p);m!==null&&!(m.expirationTime>F&&C());){var ft=m.callback;if(typeof ft=="function"){m.callback=null,x=m.priorityLevel;var St=ft(m.expirationTime<=F);if(F=o.unstable_now(),typeof St=="function"){m.callback=St,w(F),nt=!0;break e}m===i(p)&&s(p),w(F)}else s(p);m=i(p)}if(m!==null)nt=!0;else{var Et=i(g);Et!==null&&at(I,Et.startTime-F),nt=!1}}break t}finally{m=null,x=j,S=!1}nt=void 0}}finally{nt?Y():z=!1}}}var Y;if(typeof N=="function")Y=function(){N(H)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,pt=Q.port2;Q.port1.onmessage=H,Y=function(){pt.postMessage(null)}}else Y=function(){v(H,0)};function at(F,nt){P=v(function(){F(o.unstable_now())},nt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(F){switch(x){case 1:case 2:case 3:var nt=3;break;default:nt=x}var j=x;x=nt;try{return F()}finally{x=j}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(F,nt){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var j=x;x=F;try{return nt()}finally{x=j}},o.unstable_scheduleCallback=function(F,nt,j){var ft=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ft+j:ft):j=ft,F){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=j+St,F={id:_++,callback:nt,priorityLevel:F,startTime:j,expirationTime:St,sortIndex:-1},j>ft?(F.sortIndex=j,e(g,F),i(p)===null&&F===i(g)&&(b?(A(P),P=-1):b=!0,at(I,j-ft))):(F.sortIndex=St,e(p,F),E||S||(E=!0,z||(z=!0,Y()))),F},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(F){var nt=x;return function(){var j=x;x=nt;try{return F.apply(this,arguments)}finally{x=j}}}})(Ed)),Ed}var A_;function y1(){return A_||(A_=1,Md.exports=x1()),Md.exports}var Td={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R_;function S1(){if(R_)return Pn;R_=1;var o=Qp();function e(_){var m="https://react.dev/errors/"+_;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)m+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+_+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(_,m,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:S===h?h:""+S,children:_,containerInfo:m,implementation:x}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(_,m){if(_==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Pn.browser=function(_){return{$$typeof:c,_reason:_}},Pn.createPortal=function(_,m){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return d(_,m,null,x)},Pn.flushSync=function(_){var m=p.T,x=s.p;try{if(p.T=null,s.p=2,_)return _()}finally{p.T=m,s.p=x,s.d.f()}},Pn.preconnect=function(_,m){typeof _=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(_,m))},Pn.prefetchDNS=function(_){typeof _=="string"&&s.d.D(_)},Pn.preinit=function(_,m){if(typeof _=="string"&&m&&typeof m.as=="string"){var x=m.as,S=g(x,m.crossOrigin),E=typeof m.integrity=="string"?m.integrity:void 0,b=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;x==="style"?s.d.S(_,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:S,integrity:E,fetchPriority:b}):x==="script"&&s.d.X(_,{crossOrigin:S,integrity:E,fetchPriority:b,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Pn.preinitModule=function(_,m){if(typeof _=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var x=g(m.as,m.crossOrigin);s.d.M(_,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&s.d.M(_)},Pn.preload=function(_,m){if(typeof _=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var x=m.as,S=g(x,m.crossOrigin);s.d.L(_,x,{crossOrigin:S,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Pn.preloadModule=function(_,m){if(typeof _=="string")if(m){var x=g(m.as,m.crossOrigin);s.d.m(_,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else s.d.m(_)},Pn.requestFormReset=function(_){s.d.r(_)},Pn.unstable_batchedUpdates=function(_,m){return _(m)},Pn.useFormState=function(_,m,x){return p.H.useFormState(_,m,x)},Pn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Pn.version="19.3.1",Pn}var C_;function M1(){if(C_)return Td.exports;C_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Td.exports=S1(),Td.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var w_;function E1(){if(w_)return hl;w_=1;var o=y1(),e=Qp(),i=M1();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(s(188))}function g(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),t;if(f===r)return p(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=f;else{for(var y=!1,T=u.child;T;){if(T===a){y=!0,a=u,r=f;break}if(T===r){y=!0,r=u,a=f;break}T=T.sibling}if(!y){for(T=f.child;T;){if(T===a){y=!0,a=f,r=u;break}if(T===r){y=!0,r=f,a=u;break}T=T.sibling}if(!y)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}function m(t,n,a,r,u,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,u,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&m(t.child,n,a,r,u,f))return!0;t=t.sibling}return!1}function x(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function S(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function E(t){var n=[null,null],a=x(t);return a===null||b(n,t,a.child,{foundSelf:!1}),n}function b(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&b(t,n,a.child,r))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var v=null,A=null;function N(t,n,a){return t===a?!0:t===n?(v=t,!0):!1}function w(t,n,a){return t===a?(A=t,!1):t===n?(A!==null&&(v=t),!0):!1}function I(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function z(t,n,a){for(var r=0,u=t;u;u=a(u))r++;u=0;for(var f=n;f;f=a(f))u++;for(;0<r-u;)t=a(t),r--;for(;0<u-r;)n=a(n),u--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var P=Object.assign,V=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),pt=Symbol.for("react.consumer"),at=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),nt=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),ft=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),Ht=Symbol.for("react.legacy_hidden"),oe=Symbol.for("react.memo_cache_sentinel"),G=Symbol.for("react.view_transition"),dt=Symbol.for("react.recoverable"),k=Symbol.iterator;function K(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var mt=Symbol.for("react.client.reference");function Tt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===mt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case Q:return"Profiler";case Y:return"StrictMode";case nt:return"Suspense";case j:return"SuspenseList";case Et:return"Activity";case G:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case at:return t.displayName||"Context";case pt:return(t._context.displayName||"Context")+".Consumer";case F:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ft:return n=t.displayName||null,n!==null?n:Tt(t.type)||"Memo";case St:n=t._payload,t=t._init;try{return Tt(t(n))}catch{}}return null}var bt=Array.isArray,yt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Dt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O={pending:!1,data:null,method:null,action:null},le=[],qt=-1;function Bt(t){return{current:t}}function Lt(t){0>qt||(t.current=le[qt],le[qt]=null,qt--)}function ee(t,n){qt++,le[qt]=t.current,t.current=n}var Gt=Bt(null),se=Bt(null),Ne=Bt(null),Te=Bt(null);function L(t,n){switch(ee(Ne,n),ee(se,t),ee(Gt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Dv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Dv(n),t=Uv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Lt(Gt),ee(Gt,t)}function R(){Lt(Gt),Lt(se),Lt(Ne)}function st(t){var n=t.memoizedState;n!==null&&(Fr._currentValue=n.memoizedState,ee(Te,t)),n=Gt.current;var a=Uv(n,t.type);n!==a&&(ee(se,t),ee(Gt,a))}function vt(t){se.current===t&&(Lt(Gt),Lt(se)),Te.current===t&&(Lt(Te),Fr._currentValue=O)}var At,gt;function Wt(t){if(At===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);At=n&&n[1]||"",gt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+At+t+gt}var Nt=!1;function Qt(t,n){if(!t||Nt)return"";Nt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(zt){var Z=zt}Reflect.construct(t,[],xt)}else{try{xt.call()}catch(zt){Z=zt}xt=!1;try{var rt=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),xt=!0,new t}finally{xt&&(rt!==void 0?Object.defineProperty(t.prototype,"props",rt):delete t.prototype.props)}}}else{try{throw Error()}catch(zt){Z=zt}(xt=t())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(zt){if(zt&&Z&&typeof zt.stack=="string")return[zt.stack,Z.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=r.DetermineComponentFrameRoot(),y=f[0],T=f[1];if(y&&T){var B=y.split(`
`),$=T.split(`
`);for(u=r=0;r<B.length&&!B[r].includes("DetermineComponentFrameRoot");)r++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(r===B.length||u===$.length)for(r=B.length-1,u=$.length-1;1<=r&&0<=u&&B[r]!==$[u];)u--;for(;1<=r&&0<=u;r--,u--)if(B[r]!==$[u]){if(r!==1||u!==1)do if(r--,u--,0>u||B[r]!==$[u]){var ot=`
`+B[r].replace(" at new "," at ");return t.displayName&&ot.includes("<anonymous>")&&(ot=ot.replace("<anonymous>",t.displayName)),ot}while(1<=r&&0<=u);break}}}finally{Nt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Wt(a):""}function te(t,n){switch(t.tag){case 26:case 27:case 5:return Wt(t.type);case 16:return Wt("Lazy");case 13:return t.child!==n&&n!==null?Wt("Suspense Fallback"):Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return Qt(t.type,!1);case 11:return Qt(t.type.render,!1);case 1:return Qt(t.type,!0);case 31:return Wt("Activity");case 30:return Wt("ViewTransition");default:return""}}function Ct(t){try{var n="",a=null;do n+=te(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var ut=Object.prototype.hasOwnProperty,Zt=o.unstable_scheduleCallback,Ft=o.unstable_cancelCallback,It=o.unstable_shouldYield,ge=o.unstable_requestPaint,q=o.unstable_now,Ut=o.unstable_getCurrentPriorityLevel,Pt=o.unstable_ImmediatePriority,jt=o.unstable_UserBlockingPriority,Rt=o.unstable_NormalPriority,Mt=o.unstable_LowPriority,$t=o.unstable_IdlePriority,pe=o.log,We=o.unstable_setDisableYieldValue,Re=null,en=null;function yn(t){if(typeof pe=="function"&&We(t),en&&typeof en.setStrictMode=="function")try{en.setStrictMode(Re,t)}catch{}}var zn=Math.clz32?Math.clz32:Il,oa=Math.log,So=Math.LN2;function Il(t){return t>>>=0,t===0?32:31-(oa(t)/So|0)|0}var ms=256,la=262144,gs=4194304;function _i(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function vs(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,f=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var T=r&134217727;return T!==0?(r=T&~f,r!==0?u=_i(r):(y&=T,y!==0?u=_i(y):a||(a=T&~t,a!==0&&(u=_i(a))))):(T=r&~f,T!==0?u=_i(T):y!==0?u=_i(y):a||(a=r&~t,a!==0&&(u=_i(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function La(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Bl(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-zn(a),u=1<<r;n|=t[r],a&=~u}return n}function Yc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fl(){var t=gs;return gs<<=1,(gs&62914560)===0&&(gs=4194304),t}function Mo(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function _s(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Wc(t,n,a,r,u,f){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,$=t.hiddenUpdates;for(a=y&~a;0<a;){var ot=31-zn(a),xt=1<<ot;T[ot]=0,B[ot]=-1;var Z=$[ot];if(Z!==null)for($[ot]=null,ot=0;ot<Z.length;ot++){var rt=Z[ot];rt!==null&&(rt.lane&=-536870913)}a&=~xt}r!==0&&D(t,r,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(y&~n))}function D(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-zn(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function tt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-zn(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function ct(t,n){var a=n&-n;return a=(a&42)!==0?1:ht(a),(a&(t.suspendedLanes|n))!==0?0:a}function ht(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function et(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function wt(){var t=Dt.p;return t!==0?t:(t=window.event,t===void 0?32:p_(t.type))}function Vt(t,n){var a=Dt.p;try{return Dt.p=t,n()}finally{Dt.p=a}}var Xt=Math.random().toString(36).slice(2),Ot="__reactFiber$"+Xt,Kt="__reactProps$"+Xt,re="__reactContainer$"+Xt,ie="__reactEvents$"+Xt,Ee="__reactListeners$"+Xt,He="__reactHandles$"+Xt,$e="__reactResources$"+Xt,Ie="__reactMarker$"+Xt,Oe="__reactLoad$"+Xt;function ae(t){delete t[Ot],delete t[Kt],delete t[Ee],delete t[He]}function Be(t){var n;if(n=t[Ot])return n;for(var a=t.parentNode;a;){if(n=a[re]||a[Ot]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=jv(t);t!==null;){if(a=t[Ot])return a;t=jv(t)}return n}t=a,a=t.parentNode}return null}function Se(t){if(t=t[Ot]||t[re]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Sn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function si(t){var n=t[$e];return n||(n=t[$e]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Pe(t){t[Ie]=!0}function Oa(t){t[Oe]=void 0}var Qe=new Set,Xn={};function hn(t,n){sn(t,n),sn(t+"Capture",n)}function sn(t,n){for(Xn[t]=n,t=0;t<n.length;t++)Qe.add(n[t])}var In=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nr={},Xi={};function Ly(t){return ut.call(Xi,t)?!0:ut.call(nr,t)?!1:In.test(t)?Xi[t]=!0:(nr[t]=!0,!1)}var ze=!1;function gm(){var t=ze;return ze=!1,t}function Hl(t,n,a){if(Ly(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Gl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ua(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function ri(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function vm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Oy(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,f=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function jc(t){if(!t._valueTracker){var n=vm(t)?"checked":"value";t._valueTracker=Oy(t,n,""+t[n])}}function _m(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=vm(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var Py=/[\n"\\]/g;function xi(t){return t.replace(Py,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Zc(t,n,a,r,u,f,y,T){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ri(n)):t.value!==""+ri(n)&&(t.value=""+ri(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?y==="number"&&t.value==n?Qc(t,ri(t.value)):Qc(t,ri(n)):a!=null?Qc(t,ri(a)):r!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ri(T):t.removeAttribute("name")}function xm(t,n,a,r,u,f,y,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){jc(t);return}a=a!=null?""+ri(a):"",n=n!=null?""+ri(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=T?t.checked:!!r,t.defaultChecked=!!r,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),jc(t)}function Qc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function ir(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ri(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function ym(t,n,a){if(n!=null&&(n=""+ri(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ri(a):""}function Sm(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(bt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ri(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),jc(t)}function ar(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var zy=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mm(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||zy.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Em(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",ze=!0);for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&(Mm(t,u,r),ze=!0)}else for(var f in n)n.hasOwnProperty(f)&&Mm(t,f,n[f])}function Kc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Iy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),By=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vl(t){return By.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qi(){}var Jc=null;function $c(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var sr=null,rr=null;function Tm(t){var n=Se(t);if(n&&(t=n.stateNode)){var a=t[Kt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Zc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[Kt]||null;if(!u)throw Error(s(90));Zc(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&_m(r)}break t;case"textarea":ym(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ir(t,!!a.multiple,n,!1)}}}var tf=!1;function bm(t,n,a){if(tf)return t(n,a);tf=!0;try{var r=t(n);return r}finally{if(tf=!1,(sr!==null||rr!==null)&&(Vu(),sr&&(n=sr,t=rr,rr=sr=null,Tm(n),t)))for(n=0;n<t.length;n++)Tm(t[n])}}function Eo(t,n){var a=t.stateNode;if(a===null)return null;var r=a[Kt]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ef=!1;if(ca)try{var To={};Object.defineProperty(To,"passive",{get:function(){ef=!0}}),window.addEventListener("test",To,To),window.removeEventListener("test",To,To)}catch{ef=!1}var Pa=null,nf=null,kl=null;function Am(){if(kl)return kl;var t,n=nf,a=n.length,r,u="value"in Pa?Pa.value:Pa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(r=1;r<=y&&n[a-r]===u[f-r];r++);return kl=u.slice(t,1<r?1-r:void 0)}function Xl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ql(){return!0}function Rm(){return!1}function qn(t){function n(a,r,u,f,y){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ql:Rm,this.isPropagationStopped=Rm,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ql)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ql)},persist:function(){},isPersistent:ql}),n}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=qn(za),bo=P({},za,{view:0,detail:0}),Fy=qn(bo),af,sf,Ao,Wl=P({},bo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ao&&(Ao&&t.type==="mousemove"?(af=t.screenX-Ao.screenX,sf=t.screenY-Ao.screenY):sf=af=0,Ao=t),af)},movementY:function(t){return"movementY"in t?t.movementY:sf}}),Cm=qn(Wl),Hy=P({},Wl,{dataTransfer:0}),Gy=qn(Hy),Vy=P({},bo,{relatedTarget:0}),rf=qn(Vy),ky=P({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),Xy=qn(ky),qy=P({},za,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Yy=qn(qy),Wy=P({},za,{data:0}),wm=qn(Wy),jy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ky(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Qy[t])?!!n[t]:!1}function of(){return Ky}var Jy=P({},bo,{key:function(t){if(t.key){var n=jy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(t){return t.type==="keypress"?Xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$y=qn(Jy),tS=P({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Dm=qn(tS),eS=P({},za,{submitter:0}),nS=qn(eS),iS=P({},bo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),aS=qn(iS),sS=P({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),rS=qn(sS),oS=P({},Wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),lS=qn(oS),uS=P({},za,{newState:0,oldState:0,source:0}),cS=qn(uS),fS=[9,13,27,32],lf=ca&&"CompositionEvent"in window,Ro=null;ca&&"documentMode"in document&&(Ro=document.documentMode);var hS=ca&&"TextEvent"in window&&!Ro,Um=ca&&(!lf||Ro&&8<Ro&&11>=Ro),Nm=" ",Lm=!1;function Om(t,n){switch(t){case"keyup":return fS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var or=!1;function dS(t,n){switch(t){case"compositionend":return Pm(n);case"keypress":return n.which!==32?null:(Lm=!0,Nm);case"textInput":return t=n.data,t===Nm&&Lm?null:t;default:return null}}function pS(t,n){if(or)return t==="compositionend"||!lf&&Om(t,n)?(t=Am(),kl=nf=Pa=null,or=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Um&&n.locale!=="ko"?null:n.data;default:return null}}var mS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function zm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!mS[t.type]:n==="textarea"}function Im(t,n,a,r){sr?rr?rr.push(r):rr=[r]:sr=r,n=ju(n,"onChange"),0<n.length&&(a=new Yl("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Co=null,wo=null;function gS(t){Tv(t,0)}function jl(t){var n=Sn(t);if(_m(n))return t}function Bm(t,n){if(t==="change")return n}var Fm=!1;if(ca){var uf;if(ca){var cf="oninput"in document;if(!cf){var Hm=document.createElement("div");Hm.setAttribute("oninput","return;"),cf=typeof Hm.oninput=="function"}uf=cf}else uf=!1;Fm=uf&&(!document.documentMode||9<document.documentMode)}function Gm(){Co&&(Co.detachEvent("onpropertychange",Vm),wo=Co=null)}function Vm(t){if(t.propertyName==="value"&&jl(wo)){var n=[];Im(n,wo,t,$c(t)),bm(gS,n)}}function vS(t,n,a){t==="focusin"?(Gm(),Co=n,wo=a,Co.attachEvent("onpropertychange",Vm)):t==="focusout"&&Gm()}function _S(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jl(wo)}function xS(t,n){if(t==="click")return jl(n)}function yS(t,n){if(t==="input"||t==="change")return jl(n)}function SS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var oi=typeof Object.is=="function"?Object.is:SS;function Do(t,n){if(oi(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!ut.call(n,u)||!oi(t[u],n[u]))return!1}return!0}function ff(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function km(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Xm(t,n){var a=km(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=km(a)}}function qm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?qm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Ym(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ff(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ff(t.document)}return n}function hf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var MS=ca&&"documentMode"in document&&11>=document.documentMode,lr=null,df=null,Uo=null,pf=!1;function Wm(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pf||lr==null||lr!==ff(r)||(r=lr,"selectionStart"in r&&hf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Uo&&Do(Uo,r)||(Uo=r,r=ju(df,"onSelect"),0<r.length&&(n=new Yl("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=lr)))}function xs(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ur={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionrun:xs("Transition","TransitionRun"),transitionstart:xs("Transition","TransitionStart"),transitioncancel:xs("Transition","TransitionCancel"),transitionend:xs("Transition","TransitionEnd")},mf={},jm={};ca&&(jm=document.createElement("div").style,"AnimationEvent"in window||(delete ur.animationend.animation,delete ur.animationiteration.animation,delete ur.animationstart.animation),"TransitionEvent"in window||delete ur.transitionend.transition);function ys(t){if(mf[t])return mf[t];if(!ur[t])return t;var n=ur[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in jm)return mf[t]=n[a];return t}var Zm=ys("animationend"),Qm=ys("animationiteration"),Km=ys("animationstart"),ES=ys("transitionrun"),TS=ys("transitionstart"),bS=ys("transitioncancel"),Jm=ys("transitionend"),$m=new Map,gf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gf.push("scrollEnd");function Ui(t,n){$m.set(t,n),hn(n,[t])}var AS=0;function fa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Pi.identifierPrefix;var a=AS++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function tg(t){if(t==null||typeof t=="string")return t;var n=null,a=wr;if(a!==null)for(var r=0;r<a.length;r++){var u=t[a[r]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function ha(t,n){return t=tg(t),n=tg(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Zl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},yi=[],cr=0,vf=0;function Ql(){for(var t=cr,n=vf=cr=0;n<t;){var a=yi[n];yi[n++]=null;var r=yi[n];yi[n++]=null;var u=yi[n];yi[n++]=null;var f=yi[n];if(yi[n++]=null,r!==null&&u!==null){var y=r.pending;y===null?u.next=u:(u.next=y.next,y.next=u),r.pending=u}f!==0&&eg(a,u,f)}}function Kl(t,n,a,r){yi[cr++]=t,yi[cr++]=n,yi[cr++]=a,yi[cr++]=r,vf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function _f(t,n,a,r){return Kl(t,n,a,r),Jl(t)}function Ss(t,n){return Kl(t,null,null,n),Jl(t)}function eg(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,r=f.alternate,r!==null&&(r.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-zn(a),t=f.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),f):null}function Jl(t){if(50<$o)throw $o=0,Gu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var fr={};function RS(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,n,a,r){return new RS(t,n,a,r)}function xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function da(t,n){var a=t.alternate;return a===null?(a=Jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function ng(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function $l(t,n,a,r,u,f){var y=0;if(r=t,typeof r=="function")xf(r)&&(y=1);else if(typeof r=="string")y=e1(t,a,Gt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Et:return t=Jn(31,a,n,u),t.elementType=Et,t.lanes=f,t;case H:return Ms(a.children,u,f,n);case Y:y=8,u|=24;break;case Q:return t=Jn(12,a,n,u|2),t.elementType=Q,t.lanes=f,t;case nt:return t=Jn(13,a,n,u),t.elementType=nt,t.lanes=f,t;case j:return t=Jn(19,a,n,u),t.elementType=j,t.lanes=f,t;case Ht:case G:return t=u|32,t=Jn(30,a,n,t),t.elementType=G,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case at:y=10;break t;case pt:y=9;break t;case F:y=11;break t;case ft:y=14;break t;case St:y=16,r=null;break t}y=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Jn(y,a,n,u),n.elementType=t,n.type=r,n.lanes=f,n}function Ms(t,n,a,r){return t=Jn(7,t,r,n),t.lanes=a,t}function yf(t,n,a){return t=Jn(6,t,null,n),t.lanes=a,t}function ig(t){var n=Jn(18,null,null,0);return n.stateNode=t,n}function Sf(t,n,a){return n=Jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var ag=new WeakMap;function Si(t,n){if(typeof t=="object"&&t!==null){var a=ag.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ct(n)},ag.set(t,n),n)}return{value:t,source:n,stack:Ct(n)}}var hr=[],dr=0,tu=null,No=0,Mi=[],Ei=0,Ia=null,Yi=1,Wi="";function pa(t,n){hr[dr++]=No,hr[dr++]=tu,tu=t,No=n}function sg(t,n,a){Mi[Ei++]=Yi,Mi[Ei++]=Wi,Mi[Ei++]=Ia,Ia=t;var r=Yi;t=Wi;var u=32-zn(r)-1;r&=~(1<<u),a+=1;var f=32-zn(n)+u;if(30<f){var y=u-u%5;f=(r&(1<<y)-1).toString(32),r>>=y,u-=y,Yi=1<<32-zn(n)+u|a<<u|r,Wi=f+t}else Yi=1<<f|a<<u|r,Wi=t}function eu(t){t.return!==null&&(pa(t,1),sg(t,1,0))}function Mf(t){for(;t===tu;)tu=hr[--dr],hr[dr]=null,No=hr[--dr],hr[dr]=null;for(;t===Ia;)Ia=Mi[--Ei],Mi[Ei]=null,Wi=Mi[--Ei],Mi[Ei]=null,Yi=Mi[--Ei],Mi[Ei]=null}function rg(t,n){Mi[Ei++]=Yi,Mi[Ei++]=Wi,Mi[Ei++]=Ia,Yi=n.id,Wi=n.overflow,Ia=t}var An=null,Ke=null,Me=!1,Ba=null,Ti=!1,Ef=Error(s(519));function Fa(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Lo(Si(n,t)),Ef}function og(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[Ot]=t,n[Kt]=r,a){case"dialog":Ae("cancel",n),Ae("close",n);break;case"iframe":case"object":case"embed":Ae("load",n);break;case"video":case"audio":for(a=0;a<el.length;a++)Ae(el[a],n);break;case"source":Ae("error",n);break;case"img":case"image":case"link":Ae("error",n),Ae("load",n);break;case"details":Ae("toggle",n);break;case"input":Ae("invalid",n),xm(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ae("invalid",n);break;case"textarea":Ae("invalid",n),Sm(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Cv(n.textContent,a)?(r.popover!=null&&(Ae("beforetoggle",n),Ae("toggle",n)),r.onScroll!=null&&Ae("scroll",n),r.onScrollEnd!=null&&Ae("scrollend",n),r.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||Fa(t,!0)}function nu(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:An=An.return}}function pr(t){if(t!==An)return!1;if(!Me)return nu(t),Me=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||$h(t.type,t.memoizedProps)),a=!a),a&&Ke&&Fa(t),nu(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ke=Wv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ke=Wv(t)}else n===27?(n=Ke,es(t.type)?(t=ld,ld=null,Ke=t):Ke=n):Ke=An?Ai(t.stateNode.nextSibling):null;return!0}function Es(){Ke=An=null,Me=!1}function Tf(){var t=Ba;return t!==null&&(ei===null?ei=t:ei.push.apply(ei,t),Ba=null),t}function Lo(t){Ba===null?Ba=[t]:Ba.push(t)}var bf=Bt(null),Ts=null,ma=null;function Ha(t,n,a){ee(bf,n._currentValue),n._currentValue=a}function ga(t){t._currentValue=bf.current,Lt(bf)}function iu(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function Af(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),iu(f.return,a,t),r||(y=null);break t}f=T.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(s(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),iu(y,a,t),y=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,y=u.alternate,y!==null&&(y.lanes|=a),iu(u.return,a,t),y=u.child,y=y!==null?y.sibling:null):y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function bs(t,n,a,r){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(s(387));if(y=y.memoizedProps,y!==null){var T=u.type;oi(u.pendingProps.value,y.value)||(t!==null?t.push(T):t=[T])}}else if(u===Te.current){if(y=u.alternate,y===null)throw Error(s(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Fr):t=[Fr])}u=u.return}return t!==null&&Af(n,t,a,r),n.flags|=262144,t!==null}function au(t){for(t=t.firstContext;t!==null;){if(!oi(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function As(t){Ts=t,ma=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Dn(t){return lg(Ts,t)}function su(t,n){return Ts===null&&As(t),lg(t,n)}function lg(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ma===null){if(t===null)throw Error(s(308));ma=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ma=ma.next=n;return a}var CS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},wS=o.unstable_scheduleCallback,DS=o.unstable_NormalPriority,dn={$$typeof:at,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rf(){return{controller:new CS,data:new Map,refCount:0}}function Oo(t){t.refCount--,t.refCount===0&&wS(DS,function(){t.controller.abort()})}function ug(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var Po=null;function US(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var zo=null,Cf=0,Rs=0,mr=null;function NS(t,n){if(zo===null){var a=zo=[];Cf=0,Rs=Xh(),mr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Cf++,n.then(cg,cg),n}function cg(){if(--Cf===0&&(Po=null,zo!==null)){mr!==null&&(mr.status="fulfilled");var t=zo;zo=null,Rs=0,mr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function LS(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var fg=yt.S;yt.S=function(t,n){if(iv=q(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&NS(t,n),Po!==null)for(var a=Lr;a!==null;)ug(a,Po),a=a.next;if(a=t.types,a!==null){for(var r=Lr;r!==null;)ug(r,a),r=r.next;if(Rs!==0){r=Po,r===null&&(r=Po=[]);for(var u=0;u<a.length;u++){var f=a[u];r.indexOf(f)===-1&&r.push(f)}}}fg!==null&&fg(t,n)};var Cs=Bt(null);function wf(){var t=Cs.current;return t!==null?t:Ze.pooledCache}function ru(t,n){n===null?ee(Cs,Cs.current):ee(Cs,n.pool)}function hg(){var t=wf();return t===null?null:{parent:dn._currentValue,pool:t}}var gr=Error(s(460)),Df=Error(s(474)),ou=Error(s(542)),lu={then:function(){}};function dg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function pg(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,gg(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(qi,qi);else{if(t=Ze,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,gg(t),t}throw Ds=n,gr}}function ws(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ds=a,gr):a}}var Ds=null;function mg(){if(Ds===null)throw Error(s(459));var t=Ds;return Ds=null,t}function gg(t){if(t===gr||t===ou)throw Error(s(483))}var vr=null,Io=0;function uu(t){var n=Io;return Io+=1,vr===null&&(vr=[]),pg(vr,t,n)}function Ga(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function cu(t,n){throw n.$$typeof===V?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function vg(t){function n(J,X){if(t){var it=J.deletions;it===null?(J.deletions=[X],J.flags|=16):it.push(X)}}function a(J,X){if(!t)return null;for(;X!==null;)n(J,X),X=X.sibling;return null}function r(J){for(var X=new Map;J!==null;)J.key===null?X.set(J.index,J):X.set(J.key,J),J=J.sibling;return X}function u(J,X){return J=da(J,X),J.index=0,J.sibling=null,J}function f(J,X,it){return J.index=it,t?(it=J.alternate,it!==null?(it=it.index,it<X?(J.flags|=2,X):it):(J.flags|=134217730,X)):(J.flags|=1048576,X)}function y(J){return t&&J.alternate===null&&(J.flags|=134217730),J}function T(J,X,it,_t){return X===null||X.tag!==6?(X=yf(it,J.mode,_t),X.return=J,X):(X=u(X,it),X.return=J,X)}function B(J,X,it,_t){var Yt=it.type;return Yt===H?(J=ot(J,X,it.props.children,_t,it.key),Ga(J,it),J):X!==null&&(X.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===St&&ws(Yt)===X.type)?(X=u(X,it.props),Ga(X,it),X.return=J,X):(X=$l(it.type,it.key,it.props,null,J.mode,_t),Ga(X,it),X.return=J,X)}function $(J,X,it,_t){return X===null||X.tag!==4||X.stateNode.containerInfo!==it.containerInfo||X.stateNode.implementation!==it.implementation?(X=Sf(it,J.mode,_t),X.return=J,X):(X=u(X,it.children||[]),X.return=J,X)}function ot(J,X,it,_t,Yt){return X===null||X.tag!==7?(X=Ms(it,J.mode,_t,Yt),X.return=J,X):(X=u(X,it),X.return=J,X)}function xt(J,X,it){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=yf(""+X,J.mode,it),X.return=J,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case U:return it=$l(X.type,X.key,X.props,null,J.mode,it),Ga(it,X),it.return=J,it;case C:return X=Sf(X,J.mode,it),X.return=J,X;case St:return X=ws(X),xt(J,X,it)}if(bt(X)||K(X))return X=Ms(X,J.mode,it,null),X.return=J,X;if(typeof X.then=="function")return xt(J,uu(X),it);if(X.$$typeof===at)return xt(J,su(J,X),it);cu(J,X)}return null}function Z(J,X,it,_t){var Yt=X!==null?X.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return Yt!==null?null:T(J,X,""+it,_t);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case U:return it.key===Yt?B(J,X,it,_t):null;case C:return it.key===Yt?$(J,X,it,_t):null;case St:return it=ws(it),Z(J,X,it,_t)}if(bt(it)||K(it))return Yt!==null?null:ot(J,X,it,_t,null);if(typeof it.then=="function")return Z(J,X,uu(it),_t);if(it.$$typeof===at)return Z(J,X,su(J,it),_t);cu(J,it)}return null}function rt(J,X,it,_t,Yt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return J=J.get(it)||null,T(X,J,""+_t,Yt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case U:return J=J.get(_t.key===null?it:_t.key)||null,B(X,J,_t,Yt);case C:return J=J.get(_t.key===null?it:_t.key)||null,$(X,J,_t,Yt);case St:return _t=ws(_t),rt(J,X,it,_t,Yt)}if(bt(_t)||K(_t))return J=J.get(it)||null,ot(X,J,_t,Yt,null);if(typeof _t.then=="function")return rt(J,X,it,uu(_t),Yt);if(_t.$$typeof===at)return rt(J,X,it,su(X,_t),Yt);cu(X,_t)}return null}function zt(J,X,it,_t){for(var Yt=null,we=null,ne=X,ce=X=0,gn=null;ne!==null&&ce<it.length;ce++){ne.index>ce?(gn=ne,ne=null):gn=ne.sibling;var Ue=Z(J,ne,it[ce],_t);if(Ue===null){ne===null&&(ne=gn);break}t&&ne&&Ue.alternate===null&&n(J,ne),X=f(Ue,X,ce),we===null?Yt=Ue:we.sibling=Ue,we=Ue,ne=gn}if(ce===it.length)return a(J,ne),Me&&pa(J,ce),Yt;if(ne===null){for(;ce<it.length;ce++)ne=xt(J,it[ce],_t),ne!==null&&(X=f(ne,X,ce),we===null?Yt=ne:we.sibling=ne,we=ne);return Me&&pa(J,ce),Yt}for(ne=r(ne);ce<it.length;ce++)gn=rt(ne,J,ce,it[ce],_t),gn!==null&&(t&&(Ue=gn.alternate,Ue!==null&&ne.delete(Ue.key===null?ce:Ue.key)),X=f(gn,X,ce),we===null?Yt=gn:we.sibling=gn,we=gn);return t&&ne.forEach(function(rs){return n(J,rs)}),Me&&pa(J,ce),Yt}function Jt(J,X,it,_t){if(it==null)throw Error(s(151));for(var Yt=null,we=null,ne=X,ce=X=0,gn=null,Ue=it.next();ne!==null&&!Ue.done;ce++,Ue=it.next()){ne.index>ce?(gn=ne,ne=null):gn=ne.sibling;var rs=Z(J,ne,Ue.value,_t);if(rs===null){ne===null&&(ne=gn);break}t&&ne&&rs.alternate===null&&n(J,ne),X=f(rs,X,ce),we===null?Yt=rs:we.sibling=rs,we=rs,ne=gn}if(Ue.done)return a(J,ne),Me&&pa(J,ce),Yt;if(ne===null){for(;!Ue.done;ce++,Ue=it.next())Ue=xt(J,Ue.value,_t),Ue!==null&&(X=f(Ue,X,ce),we===null?Yt=Ue:we.sibling=Ue,we=Ue);return Me&&pa(J,ce),Yt}for(ne=r(ne);!Ue.done;ce++,Ue=it.next())Ue=rt(ne,J,ce,Ue.value,_t),Ue!==null&&(t&&(gn=Ue.alternate,gn!==null&&ne.delete(gn.key===null?ce:gn.key)),X=f(Ue,X,ce),we===null?Yt=Ue:we.sibling=Ue,we=Ue);return t&&ne.forEach(function(d1){return n(J,d1)}),Me&&pa(J,ce),Yt}function xe(J,X,it,_t){if(typeof it=="object"&&it!==null&&it.type===H&&it.key===null&&it.props.ref===void 0&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case U:t:{for(var Yt=it.key;X!==null;){if(X.key===Yt){if(Yt=it.type,Yt===H){if(X.tag===7){a(J,X.sibling),_t=u(X,it.props.children),Ga(_t,it),_t.return=J,J=_t;break t}}else if(X.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===St&&ws(Yt)===X.type){a(J,X.sibling),_t=u(X,it.props),Ga(_t,it),_t.return=J,J=_t;break t}a(J,X);break}else n(J,X);X=X.sibling}it.type===H?(_t=Ms(it.props.children,J.mode,_t,it.key),Ga(_t,it),_t.return=J,J=_t):(_t=$l(it.type,it.key,it.props,null,J.mode,_t),Ga(_t,it),_t.return=J,J=_t)}return y(J);case C:t:{for(Yt=it.key;X!==null;){if(X.key===Yt)if(X.tag===4&&X.stateNode.containerInfo===it.containerInfo&&X.stateNode.implementation===it.implementation){a(J,X.sibling),_t=u(X,it.children||[]),_t.return=J,J=_t;break t}else{a(J,X);break}else n(J,X);X=X.sibling}_t=Sf(it,J.mode,_t),_t.return=J,J=_t}return y(J);case St:return it=ws(it),xe(J,X,it,_t)}if(bt(it))return zt(J,X,it,_t);if(K(it)){if(Yt=K(it),typeof Yt!="function")throw Error(s(150));return it=Yt.call(it),Jt(J,X,it,_t)}if(typeof it.then=="function")return xe(J,X,uu(it),_t);if(it.$$typeof===at)return xe(J,X,su(J,it),_t);cu(J,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,X!==null&&X.tag===6?(a(J,X.sibling),_t=u(X,it),_t.return=J,J=_t):(a(J,X),_t=yf(it,J.mode,_t),_t.return=J,J=_t),y(J)):a(J,X)}return function(J,X,it,_t){try{Io=0;var Yt=xe(J,X,it,_t);return vr=null,Yt}catch(ne){if(ne===gr||ne===ou)throw ne;var we=Jn(29,ne,null,J.mode);return we.lanes=_t,we.return=J,we}finally{}}}var Us=vg(!0),_g=vg(!1),Va=!1;function Uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Xa(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Fe&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=Jl(t),eg(t,null,a),n}return Kl(t,r,n,a),Jl(t)}function Bo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,tt(t,a)}}function Lf(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Of=!1;function Fo(){if(Of){var t=mr;if(t!==null)throw t}}function Ho(t,n,a,r){Of=!1;var u=t.updateQueue;Va=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,$=B.next;B.next=null,y===null?f=$:y.next=$,y=B;var ot=t.alternate;ot!==null&&(ot=ot.updateQueue,T=ot.lastBaseUpdate,T!==y&&(T===null?ot.firstBaseUpdate=$:T.next=$,ot.lastBaseUpdate=B))}if(f!==null){var xt=u.baseState;y=0,ot=$=B=null,T=f;do{var Z=T.lane&-536870913,rt=Z!==T.lane;if(rt?(Ce&Z)===Z:(r&Z)===Z){Z!==0&&Z===Rs&&(Of=!0),ot!==null&&(ot=ot.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var zt=t,Jt=T;Z=n;var xe=a;switch(Jt.tag){case 1:if(zt=Jt.payload,typeof zt=="function"){xt=zt.call(xe,xt,Z);break t}xt=zt;break t;case 3:zt.flags=zt.flags&-65537|128;case 0:if(zt=Jt.payload,Z=typeof zt=="function"?zt.call(xe,xt,Z):zt,Z==null)break t;xt=P({},xt,Z);break t;case 2:Va=!0}}Z=T.callback,Z!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[Z]:rt.push(Z))}else rt={lane:Z,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ot===null?($=ot=rt,B=xt):ot=ot.next=rt,y|=Z;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;rt=T,T=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);ot===null&&(B=xt),u.baseState=B,u.firstBaseUpdate=$,u.lastBaseUpdate=ot,f===null&&(u.shared.lanes=0),Ka|=y,t.lanes=y,t.memoizedState=xt}}function xg(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function yg(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)xg(a[t],n)}var qa=Bt(null),fu=Bt(0);function Sg(t,n){t=Sa,ee(fu,t),ee(qa,n),Sa=t|n.baseLanes}function Pf(){ee(fu,Sa),ee(qa,qa.current)}function zf(){Sa=fu.current,Lt(qa),Lt(fu)}var Un=Bt(null),Bn=null;function Ya(t){var n=t.alternate;ee(Nn,Nn.current&1),ee(Un,t),Bn===null&&(n===null||qa.current!==null||n.memoizedState!==null)&&(Bn=t)}function If(t){ee(Nn,Nn.current),ee(Un,t),Bn===null&&(Bn=t)}function Mg(t){t.tag===22?(ee(Nn,Nn.current),ee(Un,t),Bn===null&&(Bn=t)):Wa()}function Wa(){ee(Nn,Nn.current),ee(Un,Un.current)}function li(t){Lt(Un),Bn===t&&(Bn=null),Lt(Nn)}var Nn=Bt(0);function Go(t,n){ee(Un,Un.current),ee(Nn,n)}function Bf(t){Lt(Nn),Lt(Un),Bn===t&&(Bn=null)}function hu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||rd(a)||od(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var va=0,_e=null,je=null,pn=null,du=!1,_r=!1,Ns=!1,pu=0,Vo=0,xr=null,OS=0;function rn(){throw Error(s(321))}function Ff(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!oi(t[a],n[a]))return!1;return!0}function Hf(t,n,a,r,u,f){return va=f,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,yt.H=t===null||t.memoizedState===null?s0:r0,Ns=!1,f=a(r,u),Ns=!1,_r&&(f=Tg(n,a,r,u)),Eg(t),f}function Eg(t){yt.H=Su;var n=je!==null&&je.next!==null;if(va=0,pn=je=_e=null,du=!1,Vo=0,xr=null,n)throw Error(s(300));t===null||mn||(t=t.dependencies,t!==null&&au(t)&&(mn=!0))}function Tg(t,n,a,r){_e=t;var u=0;do{if(_r&&(xr=null),Vo=0,_r=!1,25<=u)throw Error(s(301));if(u+=1,pn=je=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}yt.H=VS,f=n(a,r)}while(_r);return f}function PS(){var t=yt.H,n=t.useState()[0];return n=typeof n.then=="function"?ko(n):n,t=t.useState()[0],(je!==null?je.memoizedState:null)!==t&&(_e.flags|=1024),n}function Gf(){var t=pu!==0;return pu=0,t}function Vf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function kf(t){if(du){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}du=!1}va=0,pn=je=_e=null,_r=!1,Vo=pu=0,xr=null}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pn===null?_e.memoizedState=pn=t:pn=pn.next=t,pn}function cn(){if(je===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var n=pn===null?_e.memoizedState:pn.next;if(n!==null)pn=n,je=t;else{if(t===null)throw _e.alternate===null?Error(s(467)):Error(s(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},pn===null?_e.memoizedState=pn=t:pn=pn.next=t}return pn}function mu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ko(t){var n=Vo;return Vo+=1,xr===null&&(xr=[]),t=pg(xr,t,n),n=_e,(pn===null?n.memoizedState:pn.next)===null&&(n=n.alternate,yt.H=n===null||n.memoizedState===null?s0:r0),t}function gu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return ko(t);if(t.$$typeof===dt)return;if(t.$$typeof===at)return Dn(t)}throw Error(s(438,String(t)))}function Xf(t){var n=null,a=_e.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=_e.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=mu(),_e.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=oe;return n.index++,a}function _a(t,n){return typeof n=="function"?n(t):n}function vu(t){var n=cn();return qf(n,je,t)}function qf(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,f=r.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,r.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=y=null,B=null,$=n,ot=!1;do{var xt=$.lane&-536870913;if(xt!==$.lane?(Ce&xt)===xt:(va&xt)===xt){var Z=$.revertLane;if(Z===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),xt===Rs&&(ot=!0);else if((va&Z)===Z){$=$.next,Z===Rs&&(ot=!0);continue}else xt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(T=B=xt,y=f):B=B.next=xt,_e.lanes|=Z,Ka|=Z;xt=$.action,Ns&&a(f,xt),f=$.hasEagerState?$.eagerState:a(f,xt)}else Z={lane:xt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(T=B=Z,y=f):B=B.next=Z,_e.lanes|=xt,Ka|=xt;$=$.next}while($!==null&&$!==n);if(B===null?y=f:B.next=T,!oi(f,t.memoizedState)&&(mn=!0,ot&&(a=mr,a!==null)))throw a;t.memoizedState=f,t.baseState=y,t.baseQueue=B,r.lastRenderedState=f}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Yf(t){var n=cn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=t(f,y.action),y=y.next;while(y!==u);oi(f,n.memoizedState)||(mn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,r]}function bg(t,n,a){var r=_e,u=cn(),f=Me;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var y=!oi((je||u).memoizedState,a);if(y&&(u.memoizedState=a,mn=!0),u=u.queue,Zf(Cg.bind(null,r,u,t),[t]),t=u.getSnapshot!==n||y||pn!==null&&(pn.memoizedState.tag&1)!==0,yr(t?9:8,{destroy:void 0},Rg.bind(null,r,u,a,n),null),t){if(r.flags|=2048,Ze===null)throw Error(s(349));f||(va&127)!==0||Ag(r,n,a)}return a}function Ag(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=_e.updateQueue,n===null?(n=mu(),_e.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Rg(t,n,a,r){n.value=a,n.getSnapshot=r,wg(n)&&Dg(t)}function Cg(t,n,a){return a(function(){wg(n)&&Dg(t)})}function wg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!oi(t,a)}catch{return!0}}function Dg(t){var n=Ss(t,2);n!==null&&ni(n,t,2)}function Wf(t){var n=Yn();if(typeof t=="function"){var a=t;if(t=a(),Ns){yn(!0);try{a()}finally{yn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:t},n}function Ug(t,n,a,r){return t.baseState=a,qf(t,je,typeof r=="function"?r:_a)}function zS(t,n,a,r,u){if(yu(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};yt.T!==null?a(!0):f.isTransition=!1,r(f),a=n.pending,a===null?(f.next=n.pending=f,Ng(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Ng(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var f=yt.T,y={};y.types=f!==null?f.types:null,yt.T=y;try{var T=a(u,r),B=yt.S;B!==null&&B(y,T),Lg(t,n,T)}catch($){jf(t,n,$)}finally{f!==null&&y.types!==null&&(f.types=y.types),yt.T=f}}else try{f=a(u,r),Lg(t,n,f)}catch($){jf(t,n,$)}}function Lg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){Og(t,n,r)},function(r){return jf(t,n,r)}):Og(t,n,a)}function Og(t,n,a){n.status="fulfilled",n.value=a,Pg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Ng(t,a)))}function jf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,Pg(n),n=n.next;while(n!==r)}t.action=null}function Pg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function zg(t,n){return n}function Ig(t,n){if(Me){var a=Ze.formState;if(a!==null){t:{var r=_e;if(Me){if(Ke){e:{for(var u=Ke,f=Ti;u.nodeType!==8;){if(!f){u=null;break e}if(u=Ai(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ke=Ai(u.nextSibling),r=u.data==="F!";break t}}Fa(r)}r=!1}r&&(n=a[0])}}return a=Yn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zg,lastRenderedState:n},a.queue=r,a=n0.bind(null,_e,r),r.dispatch=a,r=Wf(!1),f=th.bind(null,_e,!1,r.queue),r=Yn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=zS.bind(null,_e,u,f,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function Bg(t){var n=cn();return Fg(n,je,t)}function Fg(t,n,a){if(n=qf(t,n,zg)[0],t=vu(_a)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=ko(n)}catch(y){throw y===gr?ou:y}else r=n;n=cn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(_e.flags|=2048,yr(9,{destroy:void 0},IS.bind(null,u,a),null)),[r,f,t]}function IS(t,n){t.action=n}function Hg(t){var n=cn(),a=je;if(a!==null)return Fg(n,a,t);cn(),n=n.memoizedState,a=cn();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function yr(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=_e.updateQueue,n===null&&(n=mu(),_e.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function Gg(){return cn().memoizedState}function _u(t,n,a,r){var u=Yn();_e.flags|=t,u.memoizedState=yr(1|n,{destroy:void 0},a,r===void 0?null:r)}function xu(t,n,a,r){var u=cn();r=r===void 0?null:r;var f=u.memoizedState.inst;je!==null&&r!==null&&Ff(r,je.memoizedState.deps)?u.memoizedState=yr(n,f,a,r):(_e.flags|=t,u.memoizedState=yr(1|n,f,a,r))}function Vg(t,n){_u(8390656,8,t,n)}function Zf(t,n){xu(2048,8,t,n)}function BS(t){_e.flags|=4;var n=_e.updateQueue;if(n===null)n=mu(),_e.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function kg(t){var n=cn().memoizedState;return BS({ref:n,nextImpl:t}),function(){if((Fe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Xg(t,n){return xu(4,2,t,n)}function qg(t,n){return xu(4,4,t,n)}function Yg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Wg(t,n,a){a=a!=null?a.concat([t]):null,xu(4,4,Yg.bind(null,n,t),a)}function Qf(){}function jg(t,n){var a=cn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Ff(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function Zg(t,n){var a=cn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Ff(n,r[1]))return r[0];if(r=t(),Ns){yn(!0);try{t()}finally{yn(!1)}}return a.memoizedState=[r,n],r}function Kf(t,n,a){return a===void 0||(va&1073741824)!==0&&(Ce&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=sv(),_e.lanes|=t,Ka|=t,a)}function Qg(t,n,a,r){return oi(a,n)?a:qa.current!==null?(t=Kf(t,a,r),oi(t,n)||(mn=!0),t):(va&106)===0||(va&1073741824)!==0&&(Ce&261930)===0?(mn=!0,t.memoizedState=a):(t=sv(),_e.lanes|=t,Ka|=t,n)}function Kg(t,n,a,r,u){var f=Dt.p;Dt.p=f!==0&&8>f?f:8;var y=yt.T,T={};T.types=y!==null?y.types:null,yt.T=T,th(t,!1,n,a);try{var B=u(),$=yt.S;if($!==null&&$(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ot=LS(B,r);Xo(t,n,ot,hi(t))}else Xo(t,n,r,hi(t))}catch(xt){Xo(t,n,{then:function(){},status:"rejected",reason:xt},hi())}finally{Dt.p=f,y!==null&&T.types!==null&&(y.types=T.types),yt.T=y}}function FS(){}function Jf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=Jg(t).queue;Kg(t,u,n,O,a===null?FS:function(){return $g(t),a(r)})}function Jg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:O,baseState:O,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:O},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function $g(t){var n=Jg(t);n.next===null&&(n=t.alternate.memoizedState),Xo(t,n.next.queue,{},hi())}function $f(){return Dn(Fr)}function t0(){return cn().memoizedState}function e0(){return cn().memoizedState}function HS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=hi();t=ka(a);var r=Xa(n,t,a);r!==null&&(ni(r,n,a),Bo(r,n,a)),n={cache:Rf()},t.payload=n;return}n=n.return}}function GS(t,n,a){var r=hi();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},yu(t)?i0(n,a):(a=_f(t,n,a,r),a!==null&&(ni(a,t,r),a0(a,n,r)))}function n0(t,n,a){var r=hi();Xo(t,n,a,r)}function Xo(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(yu(t))i0(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,T=f(y,a);if(u.hasEagerState=!0,u.eagerState=T,oi(T,y))return Kl(t,n,u,0),Ze===null&&Ql(),!1}catch{}finally{}if(a=_f(t,n,u,r),a!==null)return ni(a,t,r),a0(a,n,r),!0}return!1}function th(t,n,a,r){if(r={lane:2,revertLane:Xh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},yu(t)){if(n)throw Error(s(479))}else n=_f(t,a,r,2),n!==null&&ni(n,t,2)}function yu(t){var n=t.alternate;return t===_e||n!==null&&n===_e}function i0(t,n){_r=du=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function a0(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,tt(t,a)}}var Su={readContext:Dn,use:gu,useCallback:rn,useContext:rn,useEffect:rn,useImperativeHandle:rn,useLayoutEffect:rn,useInsertionEffect:rn,useMemo:rn,useReducer:rn,useRef:rn,useState:rn,useDebugValue:rn,useDeferredValue:rn,useTransition:rn,useSyncExternalStore:rn,useId:rn,useHostTransitionStatus:rn,useFormState:rn,useActionState:rn,useOptimistic:rn,useMemoCache:rn,useCacheRefresh:rn,useEffectEvent:rn},s0={readContext:Dn,use:gu,useCallback:function(t,n){return Yn().memoizedState=[t,n===void 0?null:n],t},useContext:Dn,useEffect:Vg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,_u(4194308,4,Yg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return _u(4194308,4,t,n)},useInsertionEffect:function(t,n){_u(4,2,t,n)},useMemo:function(t,n){var a=Yn();n=n===void 0?null:n;var r=t();if(Ns){yn(!0);try{t()}finally{yn(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Yn();if(a!==void 0){var u=a(n);if(Ns){yn(!0);try{a(n)}finally{yn(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=GS.bind(null,_e,t),[r.memoizedState,t]},useRef:function(t){var n=Yn();return t={current:t},n.memoizedState=t},useState:function(t){t=Wf(t);var n=t.queue,a=n0.bind(null,_e,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Qf,useDeferredValue:function(t,n){var a=Yn();return Kf(a,t,n)},useTransition:function(){var t=Wf(!1);return t=Kg.bind(null,_e,t.queue,!0,!1),Yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=_e,u=Yn();if(Me){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ze===null)throw Error(s(349));(Ce&127)!==0||Ag(r,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Vg(Cg.bind(null,r,f,t),[t]),r.flags|=2048,yr(9,{destroy:void 0},Rg.bind(null,r,f,a,n),null),a},useId:function(){var t=Yn(),n=Ze.identifierPrefix;if(Me){var a=Wi,r=Yi;a=(r&~(1<<32-zn(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=pu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=OS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:$f,useFormState:Ig,useActionState:Ig,useOptimistic:function(t){var n=Yn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=th.bind(null,_e,!0,a),a.dispatch=n,[t,n]},useMemoCache:Xf,useCacheRefresh:function(){return Yn().memoizedState=HS.bind(null,_e)},useEffectEvent:function(t){var n=Yn(),a={impl:t};return n.memoizedState=a,function(){if((Fe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},r0={readContext:Dn,use:gu,useCallback:jg,useContext:Dn,useEffect:Zf,useImperativeHandle:Wg,useInsertionEffect:Xg,useLayoutEffect:qg,useMemo:Zg,useReducer:vu,useRef:Gg,useState:function(){return vu(_a)},useDebugValue:Qf,useDeferredValue:function(t,n){var a=cn();return Qg(a,je.memoizedState,t,n)},useTransition:function(){var t=vu(_a)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:ko(t),n]},useSyncExternalStore:bg,useId:t0,useHostTransitionStatus:$f,useFormState:Bg,useActionState:Bg,useOptimistic:function(t,n){var a=cn();return Ug(a,je,t,n)},useMemoCache:Xf,useCacheRefresh:e0,useEffectEvent:kg},VS={readContext:Dn,use:gu,useCallback:jg,useContext:Dn,useEffect:Zf,useImperativeHandle:Wg,useInsertionEffect:Xg,useLayoutEffect:qg,useMemo:Zg,useReducer:Yf,useRef:Gg,useState:function(){return Yf(_a)},useDebugValue:Qf,useDeferredValue:function(t,n){var a=cn();return je===null?Kf(a,t,n):Qg(a,je.memoizedState,t,n)},useTransition:function(){var t=Yf(_a)[0],n=cn().memoizedState;return[typeof t=="boolean"?t:ko(t),n]},useSyncExternalStore:bg,useId:t0,useHostTransitionStatus:$f,useFormState:Hg,useActionState:Hg,useOptimistic:function(t,n){var a=cn();return je!==null?Ug(a,je,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Xf,useCacheRefresh:e0,useEffectEvent:kg};function eh(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var nh={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=hi(),u=ka(r);u.payload=n,a!=null&&(u.callback=a),n=Xa(t,u,r),n!==null&&(ni(n,t,r),Bo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=hi(),u=ka(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Xa(t,u,r),n!==null&&(ni(n,t,r),Bo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=hi(),r=ka(a);r.tag=2,n!=null&&(r.callback=n),n=Xa(t,r,a),n!==null&&(ni(n,t,a),Bo(n,t,a))}};function o0(t,n,a,r,u,f,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,f,y):n.prototype&&n.prototype.isPureReactComponent?!Do(a,r)||!Do(u,f):!0}function l0(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&nh.enqueueReplaceState(n,n.state,null)}function Ls(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=P({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function u0(t){Zl(t)}function c0(t){console.error(t)}function f0(t){Zl(t)}function Mu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function h0(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ih(t,n,a){return a=ka(a),a.tag=3,a.payload={element:null},a.callback=function(){Mu(t,n)},a}function d0(t){return t=ka(t),t.tag=3,t}function p0(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=r.value;t.payload=function(){return u(f)},t.callback=function(){h0(n,a,r)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){h0(n,a,r),typeof u!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var T=r.stack;this.componentDidCatch(r.value,{componentStack:T!==null?T:""})})}function kS(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&bs(n,a,u,!0),a=Un.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Bn===null?ku():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===lu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Gh(t,r,u)),!1;case 22:return a.flags|=65536,r===lu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Gh(t,r,u)),!1}throw Error(s(435,a.tag))}return Gh(t,r,u),ku(),!1}if(Me)return n=Un.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==Ef&&(t=Error(s(422),{cause:r}),Lo(Si(t,a)))):(r!==Ef&&(n=Error(s(423),{cause:r}),Lo(Si(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=Si(r,a),u=ih(t.stateNode,r,u),Lf(t,u),on!==4&&(on=2)),!1;var f=Error(s(520),{cause:r});if(f=Si(f,a),Jo===null?Jo=[f]:Jo.push(f),on!==4&&(on=2),n===null)return!0;r=Si(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=ih(a.stateNode,r,t),Lf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ja===null||!Ja.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=d0(u),p0(u,t,a,r),Lf(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var ah=Error(s(461)),mn=!1;function Mn(t,n,a,r){n.child=t===null?_g(n,null,a,r):Us(n,t.child,a,r)}function m0(t,n,a,r,u){a=a.render;var f=n.ref;if("ref"in r){var y={};for(var T in r)T!=="ref"&&(y[T]=r[T])}else y=r;return As(n),r=Hf(t,n,a,y,f,u),T=Gf(),t!==null&&!mn?(Vf(t,n,u),xa(t,n,u)):(Me&&T&&eu(n),n.flags|=1,Mn(t,n,r,u),n.child)}function g0(t,n,a,r,u){if(t===null){var f=a.type;return typeof f=="function"&&!xf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,v0(t,n,f,r,u)):(t=$l(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!hh(t,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Do,a(y,r)&&t.ref===n.ref)return xa(t,n,u)}return n.flags|=1,t=da(f,r),t.ref=n.ref,t.return=n,n.child=t}function v0(t,n,a,r,u){if(t!==null){var f=t.memoizedProps;if(Do(f,r)&&t.ref===n.ref)if(mn=!1,n.pendingProps=r=f,hh(t,u))(t.flags&131072)!==0&&(mn=!0);else return n.lanes=t.lanes,xa(t,n,u)}return sh(t,n,a,r,u)}function _0(t,n,a,r){var u=r.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~f}else r=0,n.child=null;return x0(t,n,f,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&ru(n,f!==null?f.cachePool:null),f!==null?Sg(n,f):Pf(),Mg(n);else return r=n.lanes=536870912,x0(t,n,f!==null?f.baseLanes|a:a,a,r)}else f!==null?(ru(n,f.cachePool),Sg(n,f),Wa(),n.memoizedState=null):(t!==null&&ru(n,null),Pf(),Wa());return Mn(t,n,u,a),n.child}function qo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function x0(t,n,a,r,u){var f=wf();return f=f===null?null:{parent:dn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&ru(n,null),Pf(),Mg(n),t!==null&&bs(t,n,r,!0),n.childLanes=u,null}function Eu(t,n){return n=Tu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function y0(t,n,a){return Us(n,t.child,null,a),t=Eu(n,n.pendingProps),t.flags|=2,li(n),n.memoizedState=null,t}function XS(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Me){if(r.mode==="hidden")return t=Eu(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},qo(null,t);if(If(n),(t=Ke)?(t=Yv(t,Ti),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:Yi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},a=ig(t),a.return=n,n.child=a,An=n,Ke=null)):t=null,t===null)throw Fa(n);return n.lanes=536870912,null}return Eu(n,r)}var f=t.memoizedState;if(f!==null){var y=f.dehydrated;if(If(n),u)if(n.flags&256)n.flags&=-257,n=y0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(mn||bs(t,n,a,!1),u=(a&t.childLanes)!==0,mn||u){if(qa.current===null){if(r=Ze,r!==null&&(y=ct(r,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,Ss(t,y),ni(r,t,y),ah;ku()}n=y0(t,n,a)}else t=f.treeContext,Ke=Ai(y.nextSibling),An=n,Me=!0,Ba=null,Ti=!1,t!==null&&rg(n,t),n=Eu(n,r),n.flags|=134221824;return n}return t=da(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Sr(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function sh(t,n,a,r,u){return As(n),a=Hf(t,n,a,r,void 0,u),r=Gf(),t!==null&&!mn?(Vf(t,n,u),xa(t,n,u)):(Me&&r&&eu(n),n.flags|=1,Mn(t,n,a,u),n.child)}function S0(t,n,a,r,u,f){return As(n),n.updateQueue=null,a=Tg(n,r,a,u),Eg(t),r=Gf(),t!==null&&!mn?(Vf(t,n,f),xa(t,n,f)):(Me&&r&&eu(n),n.flags|=1,Mn(t,n,a,f),n.child)}function M0(t,n,a,r,u){if(As(n),n.stateNode===null){var f=fr,y=a.contextType;typeof y=="object"&&y!==null&&(f=Dn(y)),f=new a(r,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=nh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=r,f.state=n.memoizedState,f.refs={},Uf(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Dn(y):fr,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(eh(n,a,y,r),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&nh.enqueueReplaceState(f,f.state,null),Ho(n,r,f,u),Fo(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,B=Ls(a,T);f.props=B;var $=f.context,ot=a.contextType;y=fr,typeof ot=="object"&&ot!==null&&(y=Dn(ot));var xt=a.getDerivedStateFromProps;ot=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ot||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==y)&&l0(n,f,r,y),Va=!1;var Z=n.memoizedState;f.state=Z,Ho(n,r,f,u),Fo(),$=n.memoizedState,T||Z!==$||Va?(typeof xt=="function"&&(eh(n,a,xt,r),$=n.memoizedState),(B=Va||o0(n,a,B,r,Z,$,y))?(ot||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=$),f.props=r,f.state=$,f.context=y,r=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{f=n.stateNode,Nf(t,n),y=n.memoizedProps,ot=Ls(a,y),f.props=ot,xt=n.pendingProps,Z=f.context,$=a.contextType,B=fr,typeof $=="object"&&$!==null&&(B=Dn($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==xt||Z!==B)&&l0(n,f,r,B),Va=!1,Z=n.memoizedState,f.state=Z,Ho(n,r,f,u),Fo();var rt=n.memoizedState;y!==xt||Z!==rt||Va||t!==null&&t.dependencies!==null&&au(t.dependencies)?(typeof T=="function"&&(eh(n,a,T,r),rt=n.memoizedState),(ot=Va||o0(n,a,ot,r,Z,rt,B)||t!==null&&t.dependencies!==null&&au(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(r,rt,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(r,rt,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&Z===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&Z===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=rt),f.props=r,f.state=rt,f.context=B,r=ot):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&Z===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&Z===t.memoizedState||(n.flags|=1024),r=!1)}return f=r,Sr(t,n),r=(n.flags&128)!==0,f||r?(f=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&r?(n.child=Us(n,t.child,null,u),n.child=Us(n,null,a,u)):Mn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=xa(t,n,u),t}function E0(t,n,a,r){return Es(),n.flags|=256,Mn(t,n,a,r),n.child}var rh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function oh(t){return{baseLanes:t,cachePool:hg()}}function lh(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=fi),t}function T0(t,n,a){var r=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=t!==null&&t.memoizedState===null?!1:(Nn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Me){if(u?Ya(n):Wa(),(t=Ke)?(t=Yv(t,Ti),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:Yi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},a=ig(t),a.return=n,n.child=a,An=n,Ke=null)):t=null,t===null)throw Fa(n);return od(t)?n.lanes=32:n.lanes=536870912,null}return f=r.children,r=r.fallback,u?(Wa(),u=n.mode,f=Tu({mode:"hidden",children:f},u),r=Ms(r,u,a,null),f.return=n,r.return=n,f.sibling=r,n.child=f,r=n.child,r.memoizedState=oh(a),r.childLanes=lh(t,y,a),n.memoizedState=rh,qo(null,r)):(Ya(n),uh(n,f))}var T=t.memoizedState;if(T!==null){var B=T.dehydrated;if(B!==null)return qS(t,n,f,y,r,B,T,a)}return u?(Wa(),u=r.fallback,f=n.mode,T=t.child,B=T.sibling,r=da(T,{mode:"hidden",children:r.children}),r.subtreeFlags=T.subtreeFlags&1206910976,B!==null?u=da(B,u):(u=Ms(u,f,a,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,qo(null,r),r=n.child,u=t.child.memoizedState,u===null?u=oh(a):(f=u.cachePool,f!==null?(T=dn._currentValue,f=f.parent!==T?{parent:T,pool:T}:f):f=hg(),u={baseLanes:u.baseLanes|a,cachePool:f}),r.memoizedState=u,r.childLanes=lh(t,y,a),n.memoizedState=rh,qo(t.child,r)):(Ya(n),a=t.child,t=a.sibling,a=da(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function uh(t,n){return n=Tu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Tu(t,n){return t=Jn(22,t,null,n),t.lanes=0,t}function bu(t,n,a){return Us(n,t.child,null,a),t=uh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function qS(t,n,a,r,u,f,y,T){if(a)return n.flags&256?(Ya(n),n.flags&=-257,bu(t,n,T)):n.memoizedState!==null?(Wa(),n.child=t.child,n.flags|=128,null):(Wa(),f=u.fallback,y=n.mode,u=Tu({mode:"visible",children:u.children},y),f=Ms(f,y,T,null),f.flags|=2,u.return=n,f.return=n,u.sibling=f,n.child=u,Us(n,t.child,null,T),u=n.child,u.memoizedState=oh(T),u.childLanes=lh(t,r,T),n.memoizedState=rh,qo(null,u));if(Ya(n),od(f)){if(r=f.nextSibling&&f.nextSibling.dataset,r)var B=r.dgst;return r=B,r!==""&&(u=Error(s(419)),u.stack="",u.digest=r,Lo({value:u,source:null,stack:null})),bu(t,n,T)}if(mn||bs(t,n,T,!1),r=(T&t.childLanes)!==0,mn||r){if(qa.current!==null)return bu(t,n,T);if(r=Ze,r!==null&&(u=ct(r,T),u!==0&&u!==y.retryLane))throw y.retryLane=u,Ss(t,u),ni(r,t,u),ah;return rd(f)||ku(),bu(t,n,T)}return rd(f)?(n.flags|=192,n.child=t.child,null):(t=y.treeContext,Ke=Ai(f.nextSibling),An=n,Me=!0,Ba=null,Ti=!1,t!==null&&rg(n,t),n=uh(n,u.children),n.flags|=134221824,n)}function b0(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),iu(t.return,n,a)}function A0(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&hu(a)===null&&(n=t),t=t.sibling}return n}function Au(t,n,a,r,u,f){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=r,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function ch(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function fh(t,n,a){var r=n.pendingProps,u=r.revealOrder,f=r.tail;r=r.children;var y=Nn.current;if(n.flags&128)return Go(n,y),null;var T=(y&2)!==0;if(T?(y=y&1|2,n.flags|=128):y&=1,Go(n,y),u==="backwards"&&t!==null?(ch(t),Mn(t,n,r,a),ch(t)):Mn(t,n,r,a),r=Me?No:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&b0(t,a,n);else if(t.tag===19)b0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=A0(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,ch(n)),Au(n,!0,u,null,f,r);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&hu(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Au(n,!0,a,null,f,r);break;case"together":Au(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=A0(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Au(n,!1,u,a,f,r)}return n.child}function R0(t,n,a){var r=n.pendingProps;return Ha(n,n.type,r.value),Mn(t,n,r.children,a),n.child}function xa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ka|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(bs(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=da(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=da(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function hh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&au(t)))}function YS(t,n,a){switch(n.tag){case 3:L(n,n.stateNode.containerInfo),Ha(n,dn,t.memoizedState.cache),Es();break;case 27:case 5:st(n);break;case 4:L(n,n.stateNode.containerInfo);break;case 10:Ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,If(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ya(n),n.flags|=128,null;r=bs(t,n,a,!1);var u=n.child.childLanes;return r||(a&u)!==0?T0(t,n,a):(Ya(n),t=xa(t,n,a),t!==null?t.sibling:null)}Ya(n);break;case 19:if(n.flags&128)return fh(t,n,a);if(u=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(bs(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return fh(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Go(n,Nn.current),r)break;return null;case 22:return n.lanes=0,_0(t,n,a,n.pendingProps);case 24:Ha(n,dn,t.memoizedState.cache)}return xa(t,n,a)}function C0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)mn=!0;else{if(!hh(t,a)&&(n.flags&128)===0)return mn=!1,YS(t,n,a);mn=(t.flags&131072)!==0}else mn=!1,Me&&(n.flags&1048576)!==0&&sg(n,No,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=ws(n.elementType),n.type=t,typeof t=="function")xf(t)?(r=Ls(t,r),n.tag=1,n=M0(null,n,t,r,a)):(n.tag=0,n=sh(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===F){n.tag=11,n=m0(null,n,t,r,a);break t}else if(u===ft){n.tag=14,n=g0(null,n,t,r,a);break t}else if(u===at){n.tag=10,n.type=t,n=R0(null,n,a);break t}}throw n=Tt(t)||t,Error(s(306,n,""))}}return n;case 0:return sh(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Ls(r,n.pendingProps),M0(t,n,r,u,a);case 3:t:{if(L(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var f=n.memoizedState;u=f.element,Nf(t,n),Ho(n,r,null,a);var y=n.memoizedState;if(r=y.cache,Ha(n,dn,r),r!==f.cache&&Af(n,[dn],a,!0),Fo(),r=y.element,f.isDehydrated)if(f={element:r,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=E0(t,n,r,a);break t}else if(r!==u){u=Si(Error(s(424)),n),Lo(u),n=E0(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ke=Ai(t.firstChild),An=n,Me=!0,Ba=null,Ti=!0,a=_g(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Es(),r===u){n=xa(t,n,a);break t}Mn(t,n,r,a)}n=n.child}return n;case 26:return Sr(t,n),t===null?(a=$v(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(n.stateNode=Nv(n.type,n.pendingProps,Ne.current,n)):n.memoizedState=$v(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return st(n),t===null&&Me&&(r=n.stateNode=Zv(n.type,n.pendingProps,Ne.current),An=n,Ti=!0,u=Ke,es(n.type)?(ld=u,Ke=Ai(r.firstChild)):Ke=u),Mn(t,n,n.pendingProps.children,a),Sr(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Me&&((u=r=Ke)&&(r=HM(r,n.type,n.pendingProps,Ti),r!==null?(n.stateNode=r,An=n,Ke=Ai(r.firstChild),Ti=!1,u=!0):u=!1),u||Fa(n)),st(n),u=n.type,f=n.pendingProps,y=t!==null?t.memoizedProps:null,r=f.children,$h(u,f)?r=null:y!==null&&$h(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Hf(t,n,PS,null,null,a),Fr._currentValue=u),Sr(t,n),Mn(t,n,r,a),n.child;case 6:return t===null&&Me&&((t=a=Ke)&&(a=GM(a,n.pendingProps,Ti),a!==null?(n.stateNode=a,An=n,Ke=null,t=!0):t=!1),t||Fa(n)),null;case 13:return T0(t,n,a);case 4:return L(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Us(n,null,r,a):Mn(t,n,r,a),n.child;case 11:return m0(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Sr(t,n),Mn(t,n,r,a),n.child;case 8:return Mn(t,n,n.pendingProps.children,a),n.child;case 12:return Mn(t,n,n.pendingProps.children,a),n.child;case 10:return R0(t,n,a);case 9:return u=n.type._context,r=n.pendingProps.children,As(n),u=Dn(u),r=r(u),n.flags|=1,Mn(t,n,r,a),n.child;case 14:return g0(t,n,n.type,n.pendingProps,a);case 15:return v0(t,n,n.type,n.pendingProps,a);case 19:return fh(t,n,a);case 31:return XS(t,n,a);case 22:return _0(t,n,a,n.pendingProps);case 24:return As(n),r=Dn(dn),t===null?(u=wf(),u===null&&(u=Ze,f=Rf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:r,cache:u},Uf(n),Ha(n,dn,u)):((t.lanes&a)!==0&&(Nf(t,n),Ho(n,null,null,a),Fo()),u=t.memoizedState,f=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ha(n,dn,r)):(r=f.cache,Ha(n,dn,r),r!==u.cache&&Af(n,[dn],a,!0))),Mn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:Me&&eu(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:Sr(t,n),Mn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ya(t){t.flags|=4}function dh(t,n,a,r,u){var f;if((f=(t.mode&32)!==0)&&(f=a===null?i_(n,r):i_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(uv())t.flags|=8192;else throw Ds=lu,Df}else t.flags&=-16777217}function w0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!a_(n))if(uv())t.flags|=8192;else throw Ds=lu,Df}function Ru(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Fl():536870912,t.lanes|=n,Ar|=n)}function Yo(t,n){if(!Me)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&1206910976,r|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function WS(t,n,a){var r=n.pendingProps;switch(Mf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ga(dn),R(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(pr(n)?ya(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tf())),Je(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ya(n),f!==null?(Je(n),w0(n,f)):(Je(n),dh(n,u,null,r,a))):f?f!==t.memoizedState?(ya(n),Je(n),w0(n,f)):(Je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ya(n),Je(n),dh(n,u,t,r,a)),null;case 27:if(vt(n),a=Ne.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Je(n),n.subtreeFlags&=-33554433,null}t=Gt.current,pr(n)?og(n):(t=Zv(u,r,a),n.stateNode=t,ya(n))}return Je(n),n.subtreeFlags&=-33554433,null;case 5:if(vt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Je(n),n.subtreeFlags&=-33554433,null}if(f=Gt.current,pr(n))og(n);else{var y=il(Ne.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof r.is=="string"?y.createElement("select",{is:r.is}):y.createElement("select"),r.multiple?f.multiple=!0:r.size&&(f.size=r.size);break;default:f=typeof r.is=="string"?y.createElement(u,{is:r.is}):y.createElement(u)}}f[Ot]=n,f[Kt]=r;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(On(f,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ya(n)}}return Je(n),n.subtreeFlags&=-33554433,dh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ya(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Ne.current,pr(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=An,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[Ot]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Cv(t.nodeValue,a)),t||Fa(n,!0)}else t=il(t).createTextNode(r),t[Ot]=n,n.stateNode=t}return Je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=pr(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Ot]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),t=!1}else a=Tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(li(n),n):(li(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Je(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=pr(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Ot]=n}else Es(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),u=!1}else u=Tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(li(n),n):(li(n),null)}return li(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),f=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(f=r.memoizedState.cachePool.pool),f!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ru(n,n.updateQueue),Je(n),null);case 4:return R(),t===null&&jh(n.stateNode.containerInfo),n.flags|=67108864,Je(n),null;case 10:return ga(n.type),Je(n),null;case 19:if(Bf(n),r=n.memoizedState,r===null)return Je(n),null;if(u=(n.flags&128)!==0,f=r.rendering,f===null)if(u)Yo(r,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=hu(t),f!==null){for(n.flags|=128,Yo(r,!1),t=f.updateQueue,n.updateQueue=t,Ru(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)ng(a,t),a=a.sibling;return Go(n,Nn.current&1|2),Me&&pa(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&q()>Fu&&(n.flags|=128,u=!0,Yo(r,!1),n.lanes=4194304)}else{if(!u)if(t=hu(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Ru(n,t),Yo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!f.alternate&&!Me)return Je(n),null}else 2*q()-r.renderingStartTime>Fu&&a!==536870912&&(n.flags|=128,u=!0,Yo(r,!1),n.lanes=4194304);r.isBackwards?(f.sibling=n.child,n.child=f):(t=r.last,t!==null?t.sibling=f:n.child=f,r.last=f)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=q(),t.sibling=null,f=Nn.current,f=u?f&1|2:f&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Me?Go(n,f):(a=f,ee(Un,n),ee(Nn,a),Bn===null&&(Bn=n)),Me&&pa(n,r.treeForkCount),t}return Je(n),null;case 22:case 23:return li(n),zf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&Ru(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Lt(Cs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ga(dn),Je(n),null;case 25:return null;case 30:return n.flags|=33554432,Je(n),null}throw Error(s(156,n.tag))}function jS(t,n){switch(Mf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ga(dn),R(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return vt(n),null;case 31:if(n.memoizedState!==null){if(li(n),n.alternate===null)throw Error(s(340));Es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(li(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Es()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Bf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return R(),null;case 10:return ga(n.type),null;case 22:case 23:return li(n),zf(),t!==null&&Lt(Cs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ga(dn),null;case 25:return null;default:return null}}function D0(t,n){switch(Mf(n),n.tag){case 3:ga(dn),R();break;case 26:case 27:case 5:vt(n);break;case 4:R();break;case 31:n.memoizedState!==null&&li(n);break;case 13:li(n);break;case 19:Bf(n);break;case 10:ga(n.type);break;case 22:case 23:li(n),zf(),t!==null&&Lt(Cs);break;case 24:ga(dn)}}function Wo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var f=a.create,y=a.inst;r=f(),y.destroy=r}a=a.next}while(a!==u)}}catch(T){ke(n,n.return,T)}}function ja(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var f=u.next;r=f;do{if((r.tag&t)===t){var y=r.inst,T=y.destroy;if(T!==void 0){y.destroy=void 0,u=n;var B=a,$=T;try{$()}catch(ot){ke(u,B,ot)}}}r=r.next}while(r!==f)}}catch(ot){ke(n,n.return,ot)}}function U0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{yg(n,a)}catch(r){ke(t,t.return,r)}}}function N0(t,n,a){a.props=Ls(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){ke(t,n,r)}}function ji(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var u=t.stateNode,f=fa(t.memoizedProps,u);(u.ref===null||u.ref.name!==f)&&(u.ref=Fv(f)),r=u.ref;break;case 7:if(t.stateNode===null){var y=new di(t);m(t.child,!1,BM,y,void 0,void 0),t.stateNode=y}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(T){ke(t,n,T)}}function Ln(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){ke(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){ke(t,n,u)}else a.current=null}function Cu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)qv(t.stateNode,n[a])}function L0(t){for(var n=t.return;n!==null&&(mh(n)&&qv(t.stateNode,n.stateNode),!ph(n));)n=n.return}function jo(t){for(var n=t.return;n!==null&&(mh(n)&&FM(t.stateNode,n.stateNode),!ph(n));)n=n.return}function ph(t){return t.tag===5||t.tag===3||t.tag===27}function mh(t){return t&&t.tag===7&&t.stateNode!==null}function gh(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){ke(t,t.return,u)}}function vh(t,n,a){try{var r=t.stateNode;yM(r,t.type,a,n),r[Kt]=n}catch(u){ke(t,t.return,u)}}function O0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&es(t.type)||t.tag===4}function _h(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||O0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&es(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xh(t,n,a,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi)),Cu(t,r),ze=!0;else if(u!==4&&(u===27&&(Cu(t,r),r=null,es(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(xh(t,n,a,r),t=t.sibling;t!==null;)xh(t,n,a,r),t=t.sibling}function wu(t,n,a,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Cu(t,r),ze=!0;else if(u!==4&&(u===27&&(Cu(t,r),r=null,es(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(wu(t,n,a,r),t=t.sibling;t!==null;)wu(t,n,a,r),t=t.sibling}function P0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);On(n,r,a),n[Ot]=t,n[Kt]=a}catch(f){ke(t,t.return,f)}}var Du=!1,ui=null;function z0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Du=!0)}var Zi=null;function I0(){var t=Zi;return Zi=null,t}var $n=0;function Mr(t,n,a,r,u){return $n=0,B0(t.child,n,a,r,u)}function B0(t,n,a,r,u){for(var f=!1;t!==null;){if(t.tag===5){var y=t.stateNode;if(r!==null){var T=nd(y);r.push(T),T.view&&(f=!0)}else f||nd(y).view&&(f=!0);Du=!0,Iv(y,$n===0?n:n+"_"+$n,a),$n++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||B0(t.child,n,a,r,u)&&(f=!0));t=t.sibling}return f}function Qi(t,n){for(;t!==null;)t.tag===5?Bv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Qi(t.child,n)),t=t.sibling}function Uu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Uu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=ha(n.default,n.share),n!=="none"&&(Mr(t,a,n,null,!1)||Qi(t.child,!1))}t=t.sibling}}function yh(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,u=fa(r,a),f=ha(r.default,a.paired?r.share:r.enter);f!=="none"?Mr(t,u,f,null,!1)?(Uu(t),a.paired||n||Dr(t,r.onEnter)):Qi(t.child,!1):Uu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)yh(t,n),t=t.sibling;else Uu(t)}function Sh(t){if(ui!==null&&ui.size!==0){var n=ui;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var u=n.get(r);if(u!==void 0){var f=ha(a.default,a.share);if(f!=="none"&&(Mr(t,r,f,null,!1)?(f=t.stateNode,u.paired=f,f.paired=u,Dr(t,a.onShare)):Qi(t.child,!1)),n.delete(r),n.size===0)break}}}Sh(t)}t=t.sibling}}}function Mh(t){if(t.tag===30){var n=t.memoizedProps,a=fa(n,t.stateNode),r=ui!==null?ui.get(a):void 0,u=ha(n.default,r!==void 0?n.share:n.exit);u!=="none"&&(Mr(t,a,u,null,!1)?r!==void 0?(u=t.stateNode,r.paired=u,u.paired=r,ui.delete(a),Dr(t,n.onShare)):Dr(t,n.onExit):Qi(t.child,!1)),ui!==null&&Sh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Mh(t),t=t.sibling;else ui!==null&&Sh(t)}function F0(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=fa(n,t.stateNode);n=ha(n.default,n.update),t.flags&=-5,n!=="none"&&Mr(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&F0(t);t=t.sibling}}function Eh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Qi(t.child,!1))}Eh(t)}t=t.sibling}}function Nu(t){if(t.tag===30)t.stateNode.paired=null,Qi(t.child,!1),Eh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Nu(t),t=t.sibling;else Eh(t)}function H0(t){for(t=t.child;t!==null;)t.tag===30?Qi(t.child,!1):(t.subtreeFlags&33554432)!==0&&H0(t),t=t.sibling}function Th(t,n,a,r,u,f,y){for(var T=!1;n!==null;){if(n.tag===5){var B=n.stateNode;if(f!==null&&$n<f.length){var $=f[$n],ot=nd(B);($.view||ot.view)&&(T=!0);var xt;if(xt=(t.flags&4)===0)if(ot.clip)xt=!0;else{xt=$.rect;var Z=ot.rect;xt=xt.y!==Z.y||xt.x!==Z.x||xt.height!==Z.height||xt.width!==Z.width}xt&&(t.flags|=4),ot.abs?ot=!$.abs:($=$.rect,ot=ot.rect,ot=$.height!==ot.height||$.width!==ot.width),ot&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&Iv(B,$n===0?a:a+"_"+$n,u),T&&(t.flags&4)!==0||(Zi===null&&(Zi=[]),Zi.push(B,$n===0?r:r+"_"+$n,n.memoizedProps)),$n++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&y?t.flags|=n.flags&32:Th(t,n.child,a,r,u,f,y)&&(T=!0));n=n.sibling}return T}function G0(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,u=fa(a,r),f=ha(a.default,a.update),y;y=t.memoizedState,t.memoizedState=null,r=t;var T=t.child;$n=0,u=Th(r,T,u,u,f,y,!1),(t.flags&4)!==0&&u&&Dr(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&G0(t);t=t.sibling}}var Rn=!1,Ge=!1,Ki=!1,bh=!1,V0=typeof WeakSet=="function"?WeakSet:Set,Cn=null,Ji=!1,Zo=!1,Lu=!1,Ah=!1;function ZS(t,n,a){if(t=t.containerInfo,Kh=Hr,t=Ym(t),hf(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var f=u.anchorOffset,y=u.focusNode;u=u.focusOffset;try{r.nodeType,y.nodeType}catch{r=null;break t}var T=0,B=-1,$=-1,ot=0,xt=0,Z=t,rt=null;e:for(;;){for(var zt;Z!==r||f!==0&&Z.nodeType!==3||(B=T+f),Z!==y||u!==0&&Z.nodeType!==3||($=T+u),Z.nodeType===3&&(T+=Z.nodeValue.length),(zt=Z.firstChild)!==null;)rt=Z,Z=zt;for(;;){if(Z===t)break e;if(rt===r&&++ot===f&&(B=T),rt===y&&++xt===u&&($=T),(zt=Z.nextSibling)!==null)break;Z=rt,rt=Z.parentNode}Z=zt}r=B===-1||$===-1?null:{start:B,end:$}}else r=null}r=r||{start:0,end:0}}else r=null;for(Jh={focusedElem:t,selectionRange:r},Hr=!1,a=(a&335544064)===a,Cn=n,n=a?9270:1024;Cn!==null;){if(t=Cn,a&&(r=t.deletions,r!==null))for(f=0;f<r.length;f++)a&&Mh(r[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&z0(t),Ou(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&Mh(r),Ou(a);continue}else if(r!==null&&r.memoizedState!==null){a&&z0(t),Ou(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,Cn=r):(a&&F0(t),Ou(a))}}ui=null}function Ou(t){for(;Cn!==null;){var n=Cn,a=t,r=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&r!==null){a=void 0,u=r.memoizedProps,r=r.memoizedState;var f=n.stateNode;try{var y=Ls(n.type,u);a=f.getSnapshotBeforeUpdate(y,r),f.__reactInternalSnapshotBeforeUpdate=a}catch(T){ke(n,n.return,T)}}break;case 3:if((u&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)sd(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":sd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=fa(r.memoizedProps,r.stateNode),u=n.memoizedProps,u=ha(u.default,u.update),u!=="none"&&Mr(r,a,u,r.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Cn=r;break}Cn=n.return}}function k0(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:$i(t,a),r&4&&Wo(5,a);break;case 1:if($i(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){ke(a,a.return,y)}else{var u=Ls(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){ke(a,a.return,y)}}r&64&&U0(a),r&512&&ji(a,a.return);break;case 3:if($i(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{yg(t,n)}catch(y){ke(a,a.return,y)}}break;case 27:n===null&&r&4&&P0(a);case 26:case 5:$i(t,a),n===null&&r&4&&gh(a),r&512&&ji(a,a.return);break;case 12:$i(t,a);break;case 31:$i(t,a),r&4&&W0(t,a);break;case 13:$i(t,a),r&4&&j0(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=oM.bind(null,a),VM(t,a))));break;case 22:if(r=a.memoizedState!==null||Rn,!r){var f=n!==null&&n.memoizedState!==null||Ge;n=Rn,u=Ge,Rn=r,(Ge=f)&&!u?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Oi(t,a,r)):$i(t,a),Rn=n,Ge=u}break;case 30:$i(t,a),r&512&&ji(a,a.return);break;case 7:r&512&&ji(a,a.return);default:$i(t,a)}}function Rh(t,n){for(t=t.child;t!==null;)X0(t,n),t=t.sibling}function X0(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var u=t.stateNode,f=t.memoizedProps.style,y=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(B){ke(t,t.return,B)}Ch(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,ze=!0}catch(B){ke(t,t.return,B)}break;case 18:try{var T=t.stateNode;n?zv(T,!0):zv(t.stateNode,!1)}catch(B){ke(t,t.return,B)}break;case 22:case 23:t.memoizedState===null&&Rh(t,n);break;default:Rh(t,n)}}function Ch(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:X0(a,r);break t;case 22:a.memoizedState===null&&Ch(a,r);break t;default:Ch(a,r)}}t=t.sibling}}function q0(t){var n=t.alternate;n!==null&&(t.alternate=null,q0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ae(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,ti=!1;function Ni(t,n,a){for(a=a.child;a!==null;)Y0(t,n,a),a=a.sibling}function Y0(t,n,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Re,a)}catch{}switch(a.tag){case 26:Ge||Ln(a,n),Ni(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ge&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ge||Ln(a,n),jo(a);var r=tn,u=ti;es(a.type)&&(tn=a.stateNode,ti=!1),Ni(t,n,a),Qv(a.stateNode,a.type,a.memoizedProps),tn=r,ti=u;break;case 5:Ge||Ln(a,n),jo(a);case 6:if(a.tag===6&&jo(a),r=tn,u=ti,tn=null,Ni(t,n,a),tn=r,ti=u,tn!==null)if(ti)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode),ze=!0}catch(f){ke(a,n,f)}else try{tn.removeChild(a.stateNode),ze=!0}catch(f){ke(a,n,f)}break;case 18:tn!==null&&(ti?(t=tn,Pv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Gr(t)):Pv(tn,a.stateNode));break;case 4:r=tn,u=ti,tn=a.stateNode.containerInfo,ti=!0,Ni(t,n,a),tn=r,ti=u;break;case 0:case 11:case 14:case 15:ja(2,a,n),Ge||ja(4,a,n),Ni(t,n,a);break;case 1:Ge||(Ln(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&N0(a,n,r)),Ni(t,n,a);break;case 21:Ni(t,n,a);break;case 22:Ge=(r=Ge)||a.memoizedState!==null,Ni(t,n,a),Ge=r;break;case 30:Ln(a,n),Ni(t,n,a);break;case 7:Ge||Ln(a,n),Ni(t,n,a);break;default:Ni(t,n,a)}}function W0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Gr(t)}catch(a){ke(n,n.return,a)}}}function j0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Gr(t)}catch(a){ke(n,n.return,a)}}function QS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new V0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new V0),n;default:throw Error(s(435,t.tag))}}function Pu(t,n){var a=QS(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=lM.bind(null,t,r);r.then(u,u)}})}function Wn(t,n,a){var r=n.deletions;if(r!==null)for(var u=0;u<r.length;u++){var f=r[u],y=t,T=n,B=T;t:for(;B!==null;){switch(B.tag){case 27:if(es(B.type)){tn=B.stateNode,ti=!1;break t}break;case 5:tn=B.stateNode,ti=!1;break t;case 3:case 4:tn=B.stateNode.containerInfo,ti=!0;break t}B=B.return}if(tn===null)throw Error(s(160));Y0(y,T,f),tn=null,ti=!1,y=f.alternate,y!==null&&(y.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Z0(n,t,a),n=n.sibling}var Li=null;function Z0(t,n,a){var r=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var f=0;f<r.length;f++){var y=r[f];y.ref.impl=y.nextImpl}Wn(n,t,a),jn(t),u&4&&(ja(3,t,t.return),Wo(3,t),ja(5,t,t.return));break;case 1:Wn(n,t,a),jn(t),u&512&&(Ge||r===null||Ln(r,r.return)),u&64&&Rn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Li,Wn(n,t,a),jn(t),u&512&&(Ge||r===null||Ln(r,r.return)),u&4)if(u=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(Rn)t.stateNode=Nv(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=f.ownerDocument||f;e:switch(n){case"title":r=u.getElementsByTagName("title")[0],(!r||r[Ie]||r[Ot]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=u.createElement(n),u.head.insertBefore(r,u.querySelector("head > title"))),On(r,n,a),r[Ot]=t,Pe(r),n=r;break t;case"link":if(f=n_("link","href",u).get(n+(a.href||""))){for(y=0;y<f.length;y++)if(r=f[y],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(y,1);break e}}r=u.createElement(n),On(r,n,a),u.head.appendChild(r);break;case"meta":if(f=n_("meta","content",u).get(n+(a.content||""))){for(y=0;y<f.length;y++)if(r=f[y],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(y,1);break e}}r=u.createElement(n),On(r,n,a),u.head.appendChild(r);break;default:throw Error(s(468,n))}r[Ot]=t,Pe(r),n=r}t.stateNode=n}else Rn||hd(f,t.type,t.stateNode);else t.stateNode=e_(f,a,t.memoizedProps);else u!==a?(u===null?(n=r.stateNode,n===null||Ge||n.parentNode.removeChild(n)):u.count--,a===null?Rn||hd(f,t.type,t.stateNode):e_(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&vh(t,t.memoizedProps,r.memoizedProps);break;case 27:Wn(n,t,a),jn(t),u&512&&(Ge||r===null||Ln(r,r.return)),r!==null&&u&4&&vh(t,t.memoizedProps,r.memoizedProps);break;case 5:if(f=Ki,Ki=!1,Wn(n,t,a),Ki=f,jn(t),u&512&&(Ge||r===null||Ln(r,r.return)),t.flags&32){n=t.stateNode;try{ar(n,""),ze=!0}catch(ot){ke(t,t.return,ot)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,vh(t,n,r!==null?r.memoizedProps:n)),u&1024&&(bh=!0);break;case 6:if(Wn(n,t,a),jn(t),u&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,ze=!0}catch(ot){ke(t,t.return,ot)}}break;case 3:if(ze=!1,Qu=null,f=Li,Li=al(n.containerInfo),Wn(n,t,a),Li=f,jn(t),u&4&&r!==null&&r.memoizedState.isDehydrated)try{Gr(n.containerInfo)}catch(ot){ke(t,t.return,ot)}bh&&(bh=!1,Q0(t)),ze=!1;break;case 4:u=Ki,Ki=Rn,r=gm(),f=Li,Li=al(t.stateNode.containerInfo),Wn(n,t,a),jn(t),Li=f,ze&&Zo&&(Lu=!0),ze=r,Ki=u;break;case 12:Wn(n,t,a),jn(t);break;case 31:Wn(n,t,a),jn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Pu(t,n)));break;case 13:Wn(n,t,a),jn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Bu=q()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Pu(t,n)));break;case 22:f=t.memoizedState!==null,y=r!==null&&r.memoizedState!==null;var T=Rn,B=Ge,$=Ki;Rn=T||f,Ki=$||f,Ge=B||y,Wn(n,t,a),Ge=B,Ki=$,Rn=T,jn(t),u&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||r===null||y||Rn||Ge||(n=y||Ge,a=Rn,r=Ge,Rn=f||Rn,Ge=n,Za(t,2),Rn=a,Ge=r),!f&&Ki||Rh(t,f)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Pu(t,a))));break;case 19:Wn(n,t,a),jn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Pu(t,n)));break;case 30:u&512&&(Ge||r===null||Ln(r,r.return)),u=gm(),f=Zo,y=(a&335544064)===a,T=t.memoizedProps,Zo=y&&ha(T.default,T.update)!=="none",Wn(n,t,a),jn(t),y&&r!==null&&ze&&(t.flags|=4),Zo=f,ze=u;break;case 21:break;case 7:u&512&&(Ge||r===null||Ln(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Wn(n,t,a),jn(t)}}function jn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(O0(r)){a=r;break}r=r.return}r=null;for(var u=t.return;u!==null;){if(mh(u)){var f=u.stateNode;r===null?r=[f]:r.push(f)}if(ph(u))break;u=u.return}var y=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var T=a.stateNode,B=_h(t);wu(t,B,T,y);break;case 5:var $=a.stateNode;a.flags&32&&(ar($,""),a.flags&=-33);var ot=_h(t);wu(t,ot,$,y);break;case 3:case 4:var xt=a.stateNode.containerInfo,Z=_h(t);xh(t,Z,xt,y);break;default:throw Error(s(161))}}catch(rt){ke(t,t.return,rt)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Q0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Q0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Hr=!0,n.reset(),Hr=!1),t=t.sibling}}function Er(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)K0(n,t),n=n.sibling;else G0(n)}function K0(t,n){var a=t.alternate;if(a===null)yh(t,!1);else switch(t.tag){case 3:if(Ah=Ji=!1,I0(),Er(n,t),!Ji&&!Lu){if(t=Zi,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var u=t[r+1];Bv(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ah=!0}Zi=null;break;case 5:Er(n,t);break;case 4:r=Ji,Ji=!1,Er(n,t),Ji&&(Lu=!0),Ji=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?yh(t,!1):Er(n,t));break;case 30:r=Ji,u=I0(),Ji=!1,Er(n,t),Ji&&(t.flags|=4);var f=t.memoizedProps,y=t.stateNode;n=fa(f,y),y=fa(a.memoizedProps,y);var T=ha(f.default,f.update);T==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,$n=0,n=Th(t,a,n,y,T,f,!0),$n!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Dr(t,t.memoizedProps.onUpdate),Zi=u):u!==null&&(u.push.apply(u,Zi),Zi=u),Ji=(t.flags&32)!==0?!0:r;break;default:Er(n,t)}}function $i(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)k0(t,n.alternate,n),n=n.sibling}function Za(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:ja(4,a,a.return),Za(a,r);break;case 1:Ln(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&N0(a,a.return,u),Za(a,r);break;case 27:(r&2)!==0&&Qv(a.stateNode,a.type,a.memoizedProps);case 5:Ln(a,a.return),a.tag!==5&&a.tag!==27||jo(a),Za(a,r);break;case 6:jo(a);break;case 26:Ln(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||Ge||u.parentNode.removeChild(u),Za(a,r);break;case 22:a.memoizedState===null&&Za(a,r);break;case 30:Ln(a,a.return),Za(a,r);break;case 7:Ln(a,a.return);default:Za(a,r)}t=t.sibling}}function Oi(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,u=t,f=n,y=f.flags,T=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Oi(u,f,a),Wo(4,f);break;case 1:if(Oi(u,f,a),r=f,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ot){ke(r,r.return,ot)}if(r=f,u=r.updateQueue,u!==null){var B=r.stateNode;try{var $=u.shared.hiddenCallbacks;if($!==null)for(u.shared.hiddenCallbacks=null,u=0;u<$.length;u++)xg($[u],B)}catch(ot){ke(r,r.return,ot)}}T&&y&64&&U0(f),ji(f,f.return);break;case 27:(a&2)!==0&&P0(f);case 5:f.tag!==5&&f.tag!==27||L0(f),Oi(u,f,a),T&&r===null&&y&4&&gh(f),ji(f,f.return);break;case 6:L0(f);break;case 26:B=f.stateNode,f.memoizedState!==null||B===null||Rn||hd(al(B.ownerDocument),f.type,B),Oi(u,f,a),T&&r===null&&y&4&&gh(f),ji(f,f.return);break;case 12:Oi(u,f,a);break;case 31:Oi(u,f,a),T&&y&4&&W0(u,f);break;case 13:Oi(u,f,a),T&&y&4&&j0(u,f);break;case 22:f.memoizedState===null&&Oi(u,f,a),ji(f,f.return);break;case 30:Oi(u,f,a),ji(f,f.return);break;case 7:ji(f,f.return);default:Oi(u,f,a)}n=n.sibling}}function wh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Oo(a))}function Dh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Oo(t))}function bi(t,n,a,r){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)J0(t,n,a,r),n=n.sibling;else u&&H0(n)}function J0(t,n,a,r){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Nu(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:bi(t,n,a,r),f&2048&&Wo(9,n);break;case 1:bi(t,n,a,r);break;case 3:bi(t,n,a,r),u&&Ah&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Oo(f)));break;case 12:if(f&2048){bi(t,n,a,r),f=n.stateNode;try{var y=n.memoizedProps,T=y.id,B=y.onPostCommit;typeof B=="function"&&B(T,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch($){ke(n,n.return,$)}}else bi(t,n,a,r);break;case 31:bi(t,n,a,r);break;case 13:bi(t,n,a,r);break;case 23:break;case 22:y=n.stateNode,T=n.alternate,n.memoizedState!==null?(u&&T!==null&&T.memoizedState===null&&Nu(T),y._visibility&2?bi(t,n,a,r):Qo(t,n)):(u&&T!==null&&T.memoizedState!==null&&Nu(n),y._visibility&2?bi(t,n,a,r):(y._visibility|=2,Tr(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),f&2048&&wh(T,n);break;case 24:bi(t,n,a,r),f&2048&&Dh(n.alternate,n);break;case 30:u&&(f=n.alternate,f!==null&&(Qi(f.child,!0),Qi(n.child,!0))),bi(t,n,a,r);break;default:bi(t,n,a,r)}}function Tr(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,y=n,T=a,B=r,$=y.flags;switch(y.tag){case 0:case 11:case 15:Tr(f,y,T,B,u),Wo(8,y);break;case 23:break;case 22:var ot=y.stateNode;y.memoizedState!==null?ot._visibility&2?Tr(f,y,T,B,u):Qo(f,y):(ot._visibility|=2,Tr(f,y,T,B,u)),u&&$&2048&&wh(y.alternate,y);break;case 24:Tr(f,y,T,B,u),u&&$&2048&&Dh(y.alternate,y);break;default:Tr(f,y,T,B,u)}n=n.sibling}}function Qo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:Qo(a,r),u&2048&&wh(r.alternate,r);break;case 24:Qo(a,r),u&2048&&Dh(r.alternate,r);break;default:Qo(a,r)}n=n.sibling}}var Os=8192;function Ps(t,n,a){if(t.subtreeFlags&Os)for(t=t.child;t!==null;)$0(t,n,a),t=t.sibling}function $0(t,n,a){switch(t.tag){case 26:Ps(t,n,a),t.flags&Os&&(t.memoizedState!==null?n1(a,Li,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&r_(a,t)));break;case 5:Ps(t,n,a),t.flags&Os&&(t=t.stateNode,(n&335544128)===n&&r_(a,t));break;case 3:case 4:var r=Li;Li=al(t.stateNode.containerInfo),Ps(t,n,a),Li=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Os,Os=16777216,Ps(t,n,a),Os=r):Ps(t,n,a));break;case 30:if((t.flags&Os)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var u=t.stateNode;u.paired=null,ui===null&&(ui=new Map),ui.set(r,u)}Ps(t,n,a);break;default:Ps(t,n,a)}}function tv(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Ko(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Cn=r,nv(r,t)}tv(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)ev(t),t=t.sibling}function ev(t){switch(t.tag){case 0:case 11:case 15:Ko(t),t.flags&2048&&ja(9,t,t.return);break;case 3:Ko(t);break;case 12:Ko(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,zu(t)):Ko(t);break;default:Ko(t)}}function zu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Cn=r,nv(r,t)}tv(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ja(8,n,n.return),zu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zu(n));break;default:zu(n)}t=t.sibling}}function nv(t,n){for(;Cn!==null;){var a=Cn;switch(a.tag){case 0:case 11:case 15:ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Oo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Cn=r;else t:for(a=t;Cn!==null;){r=Cn;var u=r.sibling,f=r.return;if(q0(r),r===a){Cn=null;break t}if(u!==null){u.return=f,Cn=u;break t}Cn=f}}}var KS={getCacheForType:function(t){var n=Dn(dn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Dn(dn).controller.signal}},JS=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Ze=null,be=null,Ce=0,Ve=0,ci=null,Qa=!1,br=!1,Uh=!1,Sa=0,on=0,Ka=0,zs=0,Iu=0,fi=0,Ar=0,Jo=null,ei=null,Nh=!1,Bu=0,iv=0,Fu=1/0,Hu=null,Ja=null,nn=0,Pi=null,Is=null,ta=0,Lh=0,Oh=null,av=null,Rr=null,Cr=null,wr=null,$o=0,Gu=null;function hi(){return(Fe&2)!==0&&Ce!==0?Ce&-Ce:yt.T!==null?Xh():wt()}function sv(){if(fi===0)if((Ce&536870912)===0||Me){var t=la;la<<=1,(la&3932160)===0&&(la=262144),fi=t}else fi=536870912;return t=Un.current,t!==null&&(t.flags|=32),fi}function Dr(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=Fv(fa(t.memoizedProps,a))),Cr===null&&(Cr=[]),Cr.push(n.bind(null,r))}}function ni(t,n,a){(t===Ze&&(Ve===2||Ve===9)||t.cancelPendingCommit!==null)&&(Ur(t,0),$a(t,Ce,fi,!1)),_s(t,a),((Fe&2)===0||t!==Ze)&&(t===Ze&&((Fe&2)===0&&(zs|=a),on===4&&$a(t,Ce,fi,!1)),ea(t))}function rv(t,n,a){if((Fe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||La(t,n),u=r?eM(t,n):zh(t,n,!0),f=r;do{if(u===0){br&&!r&&$a(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!$S(a)){u=zh(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var T=t;u=Jo;var B=T.current.memoizedState.isDehydrated;if(B&&(Ur(T,y).flags|=256),y=zh(T,y,!1),y!==2&&y!==6){if(Uh&&!B){T.errorRecoveryDisabledLanes|=f,zs|=f,u=4;break t}f=ei,ei=u,f!==null&&(ei===null?ei=f:ei.push.apply(ei,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){Ur(t,0),$a(t,n,0,!0);break}t:{switch(r=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:$a(r,n,fi,!Qa);break t;case 2:ei=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Bu+300-q(),10<u)){if($a(r,n,fi,!Qa),vs(r,0,!0)!==0)break t;ta=n,r.timeoutHandle=ed(ov.bind(null,r,a,ei,Hu,Nh,n,fi,zs,Ar,Qa,f,"Throttled",-0,0),u);break t}ov(r,a,ei,Hu,Nh,n,fi,zs,Ar,Qa,f,null,-0,0)}}break}while(!0);ea(t)}function ov(t,n,a,r,u,f,y,T,B,$,ot,xt,Z,rt){t.timeoutHandle=-1;var zt=n.subtreeFlags,Jt=(f&335544064)===f;if(xt=null,(Jt||zt&8192||(zt&16785408)===16785408)&&(xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},ui=null,$0(n,f,xt),Jt&&(zt=xt,Jt=t.containerInfo,Jt=(Jt.nodeType===9?Jt:Jt.ownerDocument).__reactViewTransition,Jt!=null&&(zt.count++,zt.waitingForViewTransition=!0,zt=ol.bind(zt),Jt.finished.then(zt,zt))),zt=(f&62914560)===f?Bu-q():(f&4194048)===f?iv-q():0,zt=i1(xt,zt),zt!==null)){ta=f,t.cancelPendingCommit=zt(mv.bind(null,t,n,f,a,r,u,y,T,B,$,ot,xt,null,Z,rt)),$a(t,f,y,!$);return}mv(t,n,f,a,r,u,y,T,B,$,ot,xt)}function $S(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],f=u.getSnapshot;u=u.value;try{if(!oi(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function $a(t,n,a,r){n=Bl(t,n),n&=~Iu,n&=~zs,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var f=31-zn(u),y=1<<f;r[f]=-1,u&=~y}a!==0&&D(t,a,n)}function Vu(){return(Fe&6)===0?(tl(0),!1):!0}function Ph(){if(be!==null){if(Ve===0)var t=be.return;else t=be,ma=Ts=null,kf(t),vr=null,Io=0,t=be;for(;t!==null;)D0(t.alternate,t),t=t.return;be=null}}function Ur(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,EM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ta=0,Ph(),Ze=t,be=a=da(t.current,null),Ce=n,Ve=0,ci=null,Qa=!1,br=La(t,n),Uh=!1,Ar=fi=Iu=zs=Ka=on=0,ei=Jo=null,Nh=!1,Sa=Bl(t,n),Ql(),a}function lv(t,n){_e=null,yt.H=Su,n===gr||n===ou?(n=mg(),Ve=3):n===Df?(n=mg(),Ve=4):Ve=n===ah?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ci=n,be===null&&(on=1,Mu(t,Si(n,t.current)))}function uv(){var t=Un.current;return t===null?!0:(Ce&4194048)===Ce?Bn===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?t===Bn:!1}function cv(){var t=yt.H;return yt.H=Su,t===null?Su:t}function fv(){var t=yt.A;return yt.A=KS,t}function ku(){on=4,Qa||(Ce&4194048)!==Ce&&Un.current!==null||(br=!0),(Ka&134217727)===0&&(zs&134217727)===0||Ze===null||$a(Ze,Ce,fi,!1)}function zh(t,n,a){var r=Fe;Fe|=2;var u=cv(),f=fv();(Ze!==t||Ce!==n)&&(Hu=null,Ur(t,n)),n=!1;var y=on;t:do try{if(Ve!==0&&be!==null){var T=be,B=ci;switch(Ve){case 8:Ph(),y=6;break t;case 3:case 2:case 9:case 6:Un.current===null&&(n=!0);var $=Ve;if(Ve=0,ci=null,Nr(t,T,B,$),a&&br){y=0;break t}break;default:$=Ve,Ve=0,ci=null,Nr(t,T,B,$)}}tM(),y=on;break}catch(ot){lv(t,ot)}while(!0);return n&&t.shellSuspendCounter++,ma=Ts=null,Fe=r,yt.H=u,yt.A=f,be===null&&(Ze=null,Ce=0,Ql()),y}function tM(){for(;be!==null;)hv(be)}function eM(t,n){var a=Fe;Fe|=2;var r=cv(),u=fv();Ze!==t||Ce!==n?(Hu=null,Fu=q()+500,Ur(t,n)):br=La(t,n);t:do try{if(Ve!==0&&be!==null){n=be;var f=ci;e:switch(Ve){case 1:Ve=0,ci=null,Nr(t,n,f,1);break;case 2:case 9:if(dg(f)){Ve=0,ci=null,dv(n);break}n=function(){Ve!==2&&Ve!==9||Ze!==t||(Ve=7),ea(t)},f.then(n,n);break t;case 3:Ve=7;break t;case 4:Ve=5;break t;case 7:dg(f)?(Ve=0,ci=null,dv(n)):(Ve=0,ci=null,Nr(t,n,f,7));break;case 5:var y=null;switch(be.tag){case 26:y=be.memoizedState;case 5:case 27:var T=be;if(y?a_(y):T.stateNode.complete){Ve=0,ci=null;var B=T.sibling;if(B!==null)be=B;else{var $=T.return;$!==null?(be=$,Xu($)):be=null}break e}}Ve=0,ci=null,Nr(t,n,f,5);break;case 6:Ve=0,ci=null,Nr(t,n,f,6);break;case 8:Ph(),on=6;break t;default:throw Error(s(462))}}nM();break}catch(ot){lv(t,ot)}while(!0);return ma=Ts=null,yt.H=r,yt.A=u,Fe=a,be!==null?0:(Ze=null,Ce=0,Ql(),on)}function nM(){for(;be!==null&&!It();)hv(be)}function hv(t){var n=C0(t.alternate,t,Sa);t.memoizedProps=t.pendingProps,n===null?Xu(t):be=n}function dv(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=S0(a,n,n.pendingProps,n.type,void 0,Ce);break;case 11:n=S0(a,n,n.pendingProps,n.type.render,n.ref,Ce);break;case 5:kf(n);var r=n;r===An&&(Me?(nu(r),r.tag===5&&r.stateNode!=null&&(Ke=r.stateNode)):(nu(r),Me=!0));default:D0(a,n),n=be=ng(n,Sa),n=C0(a,n,Sa)}t.memoizedProps=t.pendingProps,n===null?Xu(t):be=n}function Nr(t,n,a,r){ma=Ts=null,kf(n),vr=null,Io=0;var u=n.return;try{if(kS(t,u,n,a,Ce)){on=1,Mu(t,Si(a,t.current)),be=null;return}}catch(f){if(u!==null)throw be=u,f;on=1,Mu(t,Si(a,t.current)),be=null;return}n.flags&32768?(Me||r===1?t=!0:br||(Ce&536870912)!==0?t=!1:(Qa=t=!0,(r===2||r===9||r===3||r===6)&&(r=Un.current,r!==null&&r.tag===13&&(r.flags|=16384))),pv(n,t)):Xu(n)}function Xu(t){var n=t;do{if((n.flags&32768)!==0){pv(n,Qa);return}t=n.return;var a=WS(n.alternate,n,Sa);if(a!==null){be=a;return}if(n=n.sibling,n!==null){be=n;return}be=n=t}while(n!==null);on===0&&(on=5)}function pv(t,n){do{var a=jS(t.alternate,t);if(a!==null){a.flags&=32767,be=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){be=t;return}be=t=a}while(t!==null);on=6,be=null}function mv(t,n,a,r,u,f,y,T,B,$,ot,xt){t.cancelPendingCommit=null;do qu();while(nn!==0);if((Fe&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Ze&&(be=Ze=null,Ce=0),Is=n,Pi=t,ta=a,Oh=u,av=r,iM(t,n,a,y,T,B,xt)}}function iM(t,n,a,r,u,f,y){var T=n.lanes|n.childLanes;if(Lh=T,T|=vf,Wc(t,a,T,r,u,f),Cr=null,(a&335544064)===a?(wr=US(t),r=10262):(wr=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,uM(Rt,function(){return Hh(),null})):(t.callbackNode=null,t.callbackPriority=0),Du=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=yt.T,yt.T=null,u=Dt.p,Dt.p=2,f=Fe,Fe|=4;try{ZS(t,n,a)}finally{Fe=f,Dt.p=u,yt.T=r}}nn=1,Du?Rr=wM(y,t.containerInfo,wr,Ih,Bh,sM,Fh,Hh,aM):(Ih(),Bh(),Fh())}function aM(t){if(nn!==0){var n=Pi.onRecoverableError;n(t,{componentStack:null})}}function sM(){nn===3&&(nn=0,K0(Is,Pi),nn=4)}function Ih(){if(nn===1){nn=0;var t=Pi,n=Is,a=ta,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=yt.T,yt.T=null;var u=Dt.p;Dt.p=2;var f=Fe;Fe|=4;try{Zo=Lu=!1,Z0(n,t,a),a=Jh;var y=Ym(t.containerInfo),T=a.focusedElem,B=a.selectionRange;if(y!==T&&T&&T.ownerDocument&&qm(T.ownerDocument.documentElement,T)){if(B!==null&&hf(T)){var $=B.start,ot=B.end;if(ot===void 0&&(ot=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(ot,T.value.length);else{var xt=T.ownerDocument||document,Z=xt&&xt.defaultView||window;if(Z.getSelection){var rt=Z.getSelection(),zt=T.textContent.length,Jt=Math.min(B.start,zt),xe=B.end===void 0?Jt:Math.min(B.end,zt);!rt.extend&&Jt>xe&&(y=xe,xe=Jt,Jt=y);var J=Xm(T,Jt),X=Xm(T,xe);if(J&&X&&(rt.rangeCount!==1||rt.anchorNode!==J.node||rt.anchorOffset!==J.offset||rt.focusNode!==X.node||rt.focusOffset!==X.offset)){var it=xt.createRange();it.setStart(J.node,J.offset),rt.removeAllRanges(),Jt>xe?(rt.addRange(it),rt.extend(X.node,X.offset)):(it.setEnd(X.node,X.offset),rt.addRange(it))}}}}for(xt=[],rt=T;rt=rt.parentNode;)rt.nodeType===1&&xt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<xt.length;T++){var _t=xt[T];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}Hr=!!Kh,Jh=Kh=null}finally{Fe=f,Dt.p=u,yt.T=r}}t.current=n,nn=2}}function Bh(){if(nn===2){nn=0;var t=Pi,n=Is,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=yt.T,yt.T=null;var r=Dt.p;Dt.p=2;var u=Fe;Fe|=4;try{k0(t,n.alternate,n)}finally{Fe=u,Dt.p=r,yt.T=a}}nn=3}}function Fh(){if(nn===4||nn===3){nn=0;var t=Rr;Rr=null,ge();var n=Pi,a=Is,r=ta,u=av,f=(r&335544064)===r?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?nn=5:(nn=0,Is=Pi=null,gv(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(Ja=null),et(r),a=a.stateNode,en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Re,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=yt.T,f=Dt.p,Dt.p=2,yt.T=null;try{for(var y=n.onRecoverableError,T=0;T<u.length;T++){var B=u[T];y(B.value,{componentStack:B.stack})}}finally{yt.T=a,Dt.p=f}}if(u=Cr,y=wr,wr=null,u!==null&&(Cr=null,y===null&&(y=[]),t!==null))for(B=0;B<u.length;B++)a=(0,u[B])(y),a!==void 0&&t.finished.finally(a);(ta&3)!==0&&qu(),ea(n),f=n.pendingLanes,(r&261930)!==0&&(f&42)!==0?n===Gu?$o++:($o=0,Gu=n):($o=0,Gu=null),tl(0)}}function gv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Oo(n)))}function qu(){return Rr!==null&&(Rr.skipTransition(),Rr=null),Ih(),Bh(),Fh(),Hh()}function Hh(){if(nn!==5)return!1;var t=Pi,n=Lh;Lh=0;var a=et(ta),r=yt.T,u=Dt.p;try{Dt.p=32>a?32:a,yt.T=null,a=Oh,Oh=null;var f=Pi,y=ta;if(nn=0,Is=Pi=null,ta=0,(Fe&6)!==0)throw Error(s(331));var T=Fe;if(Fe|=4,ev(f.current),J0(f,f.current,y,a),Fe=T,tl(0,!1),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Re,f)}catch{}return!0}finally{Dt.p=u,yt.T=r,gv(t,n)}}function vv(t,n,a){n=Si(a,n),n=ih(t.stateNode,n,2),t=Xa(t,n,2),t!==null&&(_s(t,2),ea(t))}function ke(t,n,a){if(t.tag===3)vv(t,t,a);else for(;n!==null;){if(n.tag===3){vv(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ja===null||!Ja.has(r))){t=Si(a,t),a=d0(2),r=Xa(n,a,2),r!==null&&(p0(a,r,n,t),_s(r,2),ea(r));break}}n=n.return}}function Gh(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new JS;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Uh=!0,u.add(a),t=rM.bind(null,t,n,a),n.then(t,t))}function rM(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ze===t&&(Ce&a)===a&&((on===4||on===3&&(Ce&62914560)===Ce&&300>q()-Bu)&&(Fe&2)===0?Ur(t,0):Iu|=a,Ar===Ce&&(Ar=0)),ea(t)}function _v(t,n){n===0&&(n=Fl()),t=Ss(t,n),t!==null&&(_s(t,n),ea(t))}function oM(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),_v(t,a)}function lM(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),_v(t,a)}function uM(t,n){return Zt(t,n)}var Lr=null,Or=null,Vh=!1,Yu=!1,kh=!1,ts=0;function ea(t){t!==Or&&t.next===null&&(Or===null?Lr=Or=t:Or=Or.next=t),Yu=!0,Vh||(Vh=!0,fM())}function tl(t,n){if(!kh&&Yu){kh=!0;do for(var a=!1,r=Lr;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var f=0;else{var y=r.suspendedLanes,T=r.pingedLanes;f=(1<<31-zn(42|t)+1)-1,f&=u&~(y&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Mv(r,f))}else f=Ce,f=vs(r,r===Ze?f:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(f&3)===0||La(r,f)||(a=!0,Mv(r,f));r=r.next}while(a);kh=!1}}function cM(){xv()}function xv(){Yu=Vh=!1;var t=0;ts!==0&&MM()&&(t=ts);for(var n=q(),a=null,r=Lr;r!==null;){var u=r.next,f=yv(r,n);f===0?(r.next=null,a===null?Lr=u:a.next=u,u===null&&(Or=a)):(a=r,(t!==0||(f&3)!==0)&&(Yu=!0)),r=u}nn!==0&&nn!==5||tl(t),ts!==0&&(ts=0)}function yv(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var y=31-zn(f),T=1<<y,B=u[y];B===-1?((T&a)===0||(T&r)!==0)&&(u[y]=Yc(T,n)):B<=n&&(t.expiredLanes|=T),f&=~T}if(n=Ze,a=Ce,a=vs(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Ve===2||Ve===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Ft(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||La(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Ft(r),et(a)){case 2:case 8:a=jt;break;case 32:a=Rt;break;case 268435456:a=$t;break;default:a=Rt}return r=Sv.bind(null,t),a=Zt(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Ft(r),t.callbackPriority=2,t.callbackNode=null,2}function Sv(t,n){if(nn!==0&&nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(qu()&&t.callbackNode!==a)return null;var r=Ce;return r=vs(t,t===Ze?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(rv(t,r,n),yv(t,q()),t.callbackNode!=null&&t.callbackNode===a?Sv.bind(null,t):null)}function Mv(t,n){if(qu())return null;rv(t,n,!0)}function fM(){TM(function(){(Fe&6)!==0?Zt(Pt,cM):xv()})}function Xh(){if(ts===0){var t=Rs;t===0&&(t=ms,ms<<=1,(ms&261888)===0&&(ms=256)),ts=t}return ts}function Ev(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Vl(t)}function hM(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var f=Ev((u[Kt]||null).action),y=r.submitter;y&&(n=(n=y[Kt]||null)?Ev(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var T=new Yl("action","action",null,r,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(ts!==0){var B=new FormData(u,y);Jf(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=new FormData(u,y),Jf(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var qh=0;qh<gf.length;qh++){var Yh=gf[qh],dM=Yh.toLowerCase(),pM=Yh[0].toUpperCase()+Yh.slice(1);Ui(dM,"on"+pM)}Ui(Zm,"onAnimationEnd"),Ui(Qm,"onAnimationIteration"),Ui(Km,"onAnimationStart"),Ui("dblclick","onDoubleClick"),Ui("focusin","onFocus"),Ui("focusout","onBlur"),Ui(ES,"onTransitionRun"),Ui(TS,"onTransitionStart"),Ui(bS,"onTransitionCancel"),Ui(Jm,"onTransitionEnd"),sn("onMouseEnter",["mouseout","mouseover"]),sn("onMouseLeave",["mouseout","mouseover"]),sn("onPointerEnter",["pointerout","pointerover"]),sn("onPointerLeave",["pointerout","pointerover"]),hn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),hn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),hn("onBeforeInput",["compositionend","keypress","textInput","paste"]),hn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),hn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),hn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var el="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(el));function Tv(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;t:{var f=void 0;if(n)for(var y=r.length-1;0<=y;y--){var T=r[y],B=T.instance,$=T.currentTarget;if(T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=$;try{f(u)}catch(ot){Zl(ot)}u.currentTarget=null,f=B}else for(y=0;y<r.length;y++){if(T=r[y],B=T.instance,$=T.currentTarget,T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=$;try{f(u)}catch(ot){Zl(ot)}u.currentTarget=null,f=B}}}}function Ae(t,n){var a=n[ie];a===void 0&&(a=n[ie]=new Set);var r=t+"__bubble";a.has(r)||(bv(n,t,2,!1),a.add(r))}function Wh(t,n,a){var r=0;n&&(r|=4),bv(a,t,r,n)}var Wu="_reactListening"+Math.random().toString(36).slice(2);function jh(t){if(!t[Wu]){t[Wu]=!0,Qe.forEach(function(a){a!=="selectionchange"&&(mM.has(a)||Wh(a,!1,t),Wh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Wu]||(n[Wu]=!0,Wh("selectionchange",!1,n))}}function bv(t,n,a,r){switch(p_(n)){case 2:var u=o1;break;case 8:u=l1;break;default:u=pd}a=u.bind(null,n,a,t),u=void 0,!ef||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Zh(t,n,a,r,u){var f=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var y=r.tag;if(y===3||y===4){var T=r.stateNode.containerInfo;if(T===u)break;if(y===4)for(y=r.return;y!==null;){var B=y.tag;if((B===3||B===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;T!==null;){if(y=Be(T),y===null)return;if(B=y.tag,B===5||B===6||B===26||B===27){r=f=y;continue t}T=T.parentNode}}r=r.return}bm(function(){var $=f,ot=$c(a),xt=[];t:{var Z=$m.get(t);if(Z!==void 0){var rt=Yl,zt=t;switch(t){case"keypress":if(Xl(a)===0)break t;case"keydown":case"keyup":rt=$y;break;case"focusin":zt="focus",rt=rf;break;case"focusout":zt="blur",rt=rf;break;case"beforeblur":case"afterblur":rt=rf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=Gy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=aS;break;case Zm:case Qm:case Km:rt=Xy;break;case Jm:rt=rS;break;case"scroll":case"scrollend":rt=Fy;break;case"wheel":rt=lS;break;case"copy":case"cut":case"paste":rt=Yy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Dm;break;case"submit":rt=nS;break;case"toggle":case"beforetoggle":rt=cS}var Jt=(n&4)!==0,xe=!Jt&&(t==="scroll"||t==="scrollend"),J=Jt?Z!==null?Z+"Capture":null:Z;Jt=[];for(var X=$,it;X!==null;){var _t=X;if(it=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||it===null||J===null||(_t=Eo(X,J),_t!=null&&Jt.push(nl(X,_t,it))),xe)break;X=X.return}0<Jt.length&&(Z=new rt(Z,zt,null,a,ot),xt.push({event:Z,listeners:Jt}))}}if((n&7)===0){t:{if(rt=t==="mouseover"||t==="pointerover",Z=t==="mouseout"||t==="pointerout",rt&&a!==Jc&&(zt=a.relatedTarget||a.fromElement)&&(Be(zt)||zt[re]))break t;(Z||rt)&&(zt=ot.window===ot?ot:(rt=ot.ownerDocument)?rt.defaultView||rt.parentWindow:window,Z?(rt=a.relatedTarget||a.toElement,Z=$,rt=rt?Be(rt):null,rt!==null&&(xe=c(rt),Jt=rt.tag,rt!==xe||Jt!==5&&Jt!==27&&Jt!==6)&&(rt=null)):(Z=null,rt=$),Z!==rt&&(Jt=Cm,_t="onMouseLeave",J="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(Jt=Dm,_t="onPointerLeave",J="onPointerEnter",X="pointer"),xe=Z==null?zt:Sn(Z),it=rt==null?zt:Sn(rt),zt=new Jt(_t,X+"leave",Z,a,ot),zt.target=xe,zt.relatedTarget=it,_t=null,Be(ot)===$&&(Jt=new Jt(J,X+"enter",rt,a,ot),Jt.target=it,Jt.relatedTarget=xe,_t=Jt),xe=_t,Jt=Z&&rt?z(Z,rt,gM):null,Z!==null&&Av(xt,zt,Z,Jt,!1),rt!==null&&xe!==null&&Av(xt,xe,rt,Jt,!0)))}t:{if(Z=$?Sn($):window,rt=Z.nodeName&&Z.nodeName.toLowerCase(),rt==="select"||rt==="input"&&Z.type==="file")var Yt=Bm;else if(zm(Z))if(Fm)Yt=yS;else{Yt=_S;var we=vS}else rt=Z.nodeName,!rt||rt.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?$&&Kc($.elementType)&&(Yt=Bm):Yt=xS;if(Yt&&(Yt=Yt(t,$))){Im(xt,Yt,a,ot);break t}we&&we(t,Z,$)}switch(we=$?Sn($):window,t){case"focusin":(zm(we)||we.contentEditable==="true")&&(lr=we,df=$,Uo=null);break;case"focusout":Uo=df=lr=null;break;case"mousedown":pf=!0;break;case"contextmenu":case"mouseup":case"dragend":pf=!1,Wm(xt,a,ot);break;case"selectionchange":if(MS)break;case"keydown":case"keyup":Wm(xt,a,ot)}var ne;if(lf)t:{switch(t){case"compositionstart":var ce="onCompositionStart";break t;case"compositionend":ce="onCompositionEnd";break t;case"compositionupdate":ce="onCompositionUpdate";break t}ce=void 0}else or?Om(t,a)&&(ce="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ce="onCompositionStart");ce&&(Um&&a.locale!=="ko"&&(or||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&or&&(ne=Am()):(Pa=ot,nf="value"in Pa?Pa.value:Pa.textContent,or=!0)),we=ju($,ce),0<we.length&&(ce=new wm(ce,t,null,a,ot),xt.push({event:ce,listeners:we}),ne?ce.data=ne:(ne=Pm(a),ne!==null&&(ce.data=ne)))),(ne=hS?dS(t,a):pS(t,a))&&(ce=ju($,"onBeforeInput"),0<ce.length&&(we=new wm("onBeforeInput","beforeinput",null,a,ot),xt.push({event:we,listeners:ce}),we.data=ne)),hM(xt,t,$,a,ot)}Tv(xt,n)})}function nl(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ju(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Eo(t,a),u!=null&&r.unshift(nl(t,u,f)),u=Eo(t,n),u!=null&&r.push(nl(t,u,f))),t.tag===3)return r;t=t.return}return[]}function gM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Av(t,n,a,r,u){for(var f=n._reactName,y=[];a!==null&&a!==r;){var T=a,B=T.alternate,$=T.stateNode;if(T=T.tag,B!==null&&B===r)break;T!==5&&T!==26&&T!==27||$===null||(B=$,u?($=Eo(a,f),$!=null&&y.unshift(nl(a,$,B))):u||($=Eo(a,f),$!=null&&y.push(nl(a,$,B)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var vM=/\r\n?/g,_M=/\u0000|\uFFFD/g;function Rv(t){return(typeof t=="string"?t:""+t).replace(vM,`
`).replace(_M,"")}function Cv(t,n){return n=Rv(n),Rv(t)===n}function Xe(t,n,a,r,u,f){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||ar(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&ar(t,""+r);else return;break;case"className":Gl(t,"class",r);break;case"tabIndex":Gl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Gl(t,a,r);break;case"style":Em(t,r,f);return;case"data":if(n!=="object"){Gl(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Vl(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Xe(t,n,"name",u.name,u,null),Xe(t,n,"formEncType",u.formEncType,u,null),Xe(t,n,"formMethod",u.formMethod,u,null),Xe(t,n,"formTarget",u.formTarget,u,null)):(Xe(t,n,"encType",u.encType,u,null),Xe(t,n,"method",u.method,u,null),Xe(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Vl(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=qi);return;case"onScroll":r!=null&&Ae("scroll",t);return;case"onScrollEnd":r!=null&&Ae("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Vl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":Ae("beforetoggle",t),Ae("toggle",t),Hl(t,"popover",r);break;case"xlinkActuate":ua(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ua(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ua(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ua(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ua(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ua(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ua(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ua(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ua(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Hl(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Iy.get(a)||a,Hl(t,a,r);else return}ze=!0}function Qh(t,n,a,r,u,f){switch(a){case"style":Em(t,r,f);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));(f!=null?f.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")ar(t,r);else if(typeof r=="number"||typeof r=="bigint")ar(t,""+r);else return;break;case"onScroll":r!=null&&Ae("scroll",t);return;case"onScrollEnd":r!=null&&Ae("scrollend",t);return;case"onClick":r!=null&&(t.onclick=qi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Xn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),f=a.slice(2,u?a.length-7:void 0),n=t[Kt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,u),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,r,u);break t}ze=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):Hl(t,a,r)}return}ze=!0}function On(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ae("error",t),Ae("load",t);var r=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(t,n,f,y,a,null)}}u&&Xe(t,n,"srcSet",a.srcSet,a,null),r&&Xe(t,n,"src",a.src,a,null);return;case"input":Ae("invalid",t);var T=f=y=u=null,B=null,$=null;for(r in a)if(a.hasOwnProperty(r)){var ot=a[r];if(ot!=null)switch(r){case"name":u=ot;break;case"type":y=ot;break;case"checked":B=ot;break;case"defaultChecked":$=ot;break;case"value":f=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:Xe(t,n,r,ot,a,null)}}xm(t,f,T,B,$,y,u,!1);return;case"select":Ae("invalid",t),r=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":y=T;break;case"multiple":r=T;default:Xe(t,n,u,T,a,null)}n=f,a=y,t.multiple=!!r,n!=null?ir(t,!!r,n,!1):a!=null&&ir(t,!!r,a,!0);return;case"textarea":Ae("invalid",t),f=u=r=null;for(y in a)if(a.hasOwnProperty(y)&&(T=a[y],T!=null))switch(y){case"value":r=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Xe(t,n,y,T,a,null)}Sm(t,r,u,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(r=a[B],r!=null))switch(B){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Xe(t,n,B,r,a,null)}return;case"dialog":Ae("beforetoggle",t),Ae("toggle",t),Ae("cancel",t),Ae("close",t);break;case"iframe":case"object":Ae("load",t);break;case"video":case"audio":for(r=0;r<el.length;r++)Ae(el[r],t);break;case"image":Ae("error",t),Ae("load",t);break;case"details":Ae("toggle",t);break;case"embed":case"source":case"link":Ae("error",t),Ae("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(r=a[$],r!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Xe(t,n,$,r,a,null)}return;default:if(Kc(n)){for(ot in a)a.hasOwnProperty(ot)&&(r=a[ot],r!==void 0&&Qh(t,n,ot,r,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(r=a[T],r!=null&&Xe(t,n,T,r,a,null))}var xM={};function yM(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,T=null,B=null,$=null,ot=null;for(rt in a){var xt=a[rt];if(a.hasOwnProperty(rt)&&xt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":B=xt;default:r.hasOwnProperty(rt)||Xe(t,n,rt,null,r,xt)}}for(var Z in r){var rt=r[Z];if(xt=a[Z],r.hasOwnProperty(Z)&&(rt!=null||xt!=null))switch(Z){case"type":rt!==xt&&(ze=!0),f=rt;break;case"name":rt!==xt&&(ze=!0),u=rt;break;case"checked":rt!==xt&&(ze=!0),$=rt;break;case"defaultChecked":rt!==xt&&(ze=!0),ot=rt;break;case"value":rt!==xt&&(ze=!0),y=rt;break;case"defaultValue":rt!==xt&&(ze=!0),T=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:rt!==xt&&Xe(t,n,Z,rt,r,xt)}}Zc(t,y,T,B,$,ot,f,u);return;case"select":rt=y=T=Z=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":rt=B;default:r.hasOwnProperty(f)||Xe(t,n,f,null,r,B)}for(u in r)if(f=r[u],B=a[u],r.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":f!==B&&(ze=!0),Z=f;break;case"defaultValue":f!==B&&(ze=!0),T=f;break;case"multiple":f!==B&&(ze=!0),y=f;default:f!==B&&Xe(t,n,u,f,r,B)}n=T,a=y,r=rt,Z!=null?ir(t,!!a,Z,!1):!!r!=!!a&&(n!=null?ir(t,!!a,n,!0):ir(t,!!a,a?[]:"",!1));return;case"textarea":rt=Z=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!r.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Xe(t,n,T,null,r,u)}for(y in r)if(u=r[y],f=a[y],r.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":u!==f&&(ze=!0),Z=u;break;case"defaultValue":u!==f&&(ze=!0),rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Xe(t,n,y,u,r,f)}ym(t,Z,rt);return;case"option":for(var zt in a)if(Z=a[zt],a.hasOwnProperty(zt)&&Z!=null&&!r.hasOwnProperty(zt))switch(zt){case"selected":t.selected=!1;break;default:Xe(t,n,zt,null,r,Z)}for(B in r)if(Z=r[B],rt=a[B],r.hasOwnProperty(B)&&Z!==rt&&(Z!=null||rt!=null))switch(B){case"selected":Z!==rt&&(ze=!0),t.selected=Z&&typeof Z!="function"&&typeof Z!="symbol";break;default:Xe(t,n,B,Z,r,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Jt in a)Z=a[Jt],a.hasOwnProperty(Jt)&&Z!=null&&!r.hasOwnProperty(Jt)&&Xe(t,n,Jt,null,r,Z);for($ in r)if(Z=r[$],rt=a[$],r.hasOwnProperty($)&&Z!==rt&&(Z!=null||rt!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(s(137,n));break;default:Xe(t,n,$,Z,r,rt)}return;default:if(Kc(n)){for(var xe in a)Z=a[xe],a.hasOwnProperty(xe)&&Z!==void 0&&!r.hasOwnProperty(xe)&&Qh(t,n,xe,void 0,r,Z);for(ot in r)Z=r[ot],rt=a[ot],!r.hasOwnProperty(ot)||Z===rt||Z===void 0&&rt===void 0||Qh(t,n,ot,Z,r,rt);return}}for(var J in a)Z=a[J],a.hasOwnProperty(J)&&Z!=null&&!r.hasOwnProperty(J)&&Xe(t,n,J,null,r,Z);for(xt in r)Z=r[xt],rt=a[xt],!r.hasOwnProperty(xt)||Z===rt||Z==null&&rt==null||Xe(t,n,xt,Z,r,rt)}function wv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function SM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],f=u.transferSize,y=u.initiatorType,T=u.duration;if(f&&T&&wv(y)){for(y=0,T=u.responseEnd,r+=1;r<a.length;r++){var B=a[r],$=B.startTime;if($>T)break;var ot=B.transferSize,xt=B.initiatorType;ot&&wv(xt)&&(B=B.responseEnd,y+=ot*(B<T?1:(T-$)/(B-$)))}if(--r,n+=8*(f+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Kh=null,Jh=null;function il(t){return t.nodeType===9?t:t.ownerDocument}function Dv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Uv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Nv(t,n,a,r){return a=il(a).createElement(t),a[Ot]=r,a[Kt]=n,On(a,t,n),Pe(a),a}function $h(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var td=null;function MM(){var t=window.event;return t&&t.type==="popstate"?t===td?!1:(td=t,!0):(td=null,!1)}var ed=typeof setTimeout=="function"?setTimeout:void 0,EM=typeof clearTimeout=="function"?clearTimeout:void 0,Lv=typeof Promise=="function"?Promise:void 0,Ov=typeof requestAnimationFrame=="function"?requestAnimationFrame:ed,TM=typeof queueMicrotask=="function"?queueMicrotask:typeof Lv<"u"?function(t){return Lv.resolve(null).then(t).catch(bM)}:ed;function bM(t){setTimeout(function(){throw t})}function es(t){return t==="head"}function Pv(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),Gr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")ud(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,ud(a);for(var f=a.firstChild;f;){var y=f.nextSibling,T=f.nodeName;f[Ie]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&ud(t.ownerDocument.body);a=u}while(a);Gr(n)}function zv(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function Iv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var u=r=0;u<n.length;u++){var f=n[u];0<f.width&&0<f.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function Bv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function AM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function nd(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return AM(n,a,t)}function RM(t){return t.documentElement.clientHeight}function CM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function wM(t,n,a,r,u,f,y,T,B){var $=n.nodeType===9?n:n.ownerDocument;try{var ot=$.startViewTransition({update:function(){var Z=$.defaultView,rt=Z.navigation&&Z.navigation.transition,zt=$.fonts.status;r();var Jt=[];if(zt==="loaded"&&(RM($),$.fonts.status==="loading"&&Jt.push($.fonts.ready)),zt=Jt.length,t!==null)for(var xe=t.suspenseyImages,J=0,X=0;X<xe.length;X++){var it=xe[X];if(!it.complete){var _t=it.getBoundingClientRect();if(0<_t.bottom&&0<_t.right&&_t.top<Z.innerHeight&&_t.left<Z.innerWidth){if(J+=s_(it),J>Ku){Jt.length=zt;break}it=new Promise(CM.bind(it)),Jt.push(it)}}}if(0<Jt.length)return Z=Promise.race([Promise.all(Jt),new Promise(function(Yt){return setTimeout(Yt,500)})]).then(u,u),(rt?Promise.allSettled([rt.finished,Z]):Z).then(f,f);if(u(),rt)return rt.finished.then(f,f);f()},types:a});$.__reactViewTransition=ot;var xt=[];return ot.ready.then(function(){for(var Z=$.documentElement.getAnimations({subtree:!0}),rt=0;rt<Z.length;rt++){var zt=Z[rt],Jt=zt.effect,xe=Jt.pseudoElement;if(xe!=null&&xe.startsWith("::view-transition")){xt.push(zt),zt=Jt.getKeyframes();for(var J=xe=void 0,X=!0,it=0;it<zt.length;it++){var _t=zt[it],Yt=_t.width;if(xe===void 0)xe=Yt;else if(xe!==Yt){X=!1;break}if(Yt=_t.height,J===void 0)J=Yt;else if(J!==Yt){X=!1;break}delete _t.width,delete _t.height,_t.transform==="none"&&delete _t.transform}X&&xe!==void 0&&J!==void 0&&(Jt.setKeyframes(zt),X=getComputedStyle(Jt.target,Jt.pseudoElement),X.width!==xe||X.height!==J)&&(X=zt[0],X.width=xe,X.height=J,X=zt[zt.length-1],X.width=xe,X.height=J,Jt.setKeyframes(zt))}}y()},function(Z){$.__reactViewTransition===ot&&($.__reactViewTransition=null);try{if(typeof Z=="object"&&Z!==null)switch(Z.name){case"InvalidStateError":(Z.message==="View transition was skipped because document visibility state is hidden."||Z.message==="Skipping view transition because document visibility state has become hidden."||Z.message==="Skipping view transition because viewport size changed."||Z.message==="Transition was aborted because of invalid state")&&(Z=null)}Z!==null&&B(Z)}finally{r(),u(),y()}}),ot.finished.finally(function(){for(var Z=0;Z<xt.length;Z++)xt[Z].cancel();$.__reactViewTransition===ot&&($.__reactViewTransition=null),T()}),ot}catch{return r(),u(),y(),null}}function Bs(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Bs.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Bs.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],u=0;u<a.length;u++){var f=a[u].effect;f!==null&&f.target===t&&f.pseudoElement===n&&r.push(a[u])}return r},Bs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Fv(t){return{name:t,group:new Bs("group",t),imagePair:new Bs("image-pair",t),old:new Bs("old",t),new:new Bs("new",t)}}function di(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}di.prototype.addEventListener=function(t,n,a){var r=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(Gv(f,t,n,a)===-1){var y=this,T=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(T=function(B){y.removeEventListener(t,n,a),typeof n=="function"?n.call(this,B):n.handleEvent(B)}),r!==null&&(u=y.removeEventListener.bind(y,t,n,a),r.addEventListener("abort",u,{once:!0}),u=r.removeEventListener.bind(r,"abort",u)),r=Pr(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:T,cleanup:u}),m(this._fragmentFiber.child,!1,DM,t,T,r)}this._eventListeners=f}};function DM(t,n,a,r){return M(t).addEventListener(n,a,r),!1}di.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=Gv(r,t,n,a),n!==-1)){var u=r[n];a=u.attachedListener;var f=u.cleanup;u=Pr(u.optionsOrUseCapture),m(this._fragmentFiber.child,!1,UM,t,a,u),r.splice(n,1),f!==null&&f()}};function UM(t,n,a,r){return M(t).removeEventListener(n,a,r),!1}function Pr(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function Hv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function Gv(t,n,a,r){if(t.length===0)return-1;r=Hv(r);for(var u=0;u<t.length;u++){var f=t[u];if(f.type===n&&f.listener===a&&Hv(f.optionsOrUseCapture)===r)return u}return-1}di.prototype.dispatchEvent=function(t){var n=x(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var f=a[u];r.addEventListener(f.type,f.attachedListener,Pr(f.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(u=0;u<a.length;u++)f=a[u],r.removeEventListener(f.type,f.attachedListener,Pr(f.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},di.prototype.focus=function(t){m(this._fragmentFiber.child,!0,Vv,t,void 0,void 0)};function Vv(t,n){return t.tag===6?!1:(t=M(t),kM(t,n))}di.prototype.focusLast=function(t){var n=[];m(this._fragmentFiber.child,!0,id,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Vv(n[a],t);a--);};function id(t,n){return n.push(t),!1}di.prototype.blur=function(){var t=x(this._fragmentFiber);t!==null&&(t=M(t),t=il(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,NM,t,void 0,void 0))};function NM(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}di.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,LM,t,void 0,void 0)};function LM(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}di.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),m(this._fragmentFiber.child,!1,OM,t,void 0,void 0);for(var a=n=0;a<zi.length;a++){var r=zi[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):zi[n++]=r}zi.length=n}};function OM(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var zi=[],ad=!1;function PM(t,n,a){zi.push({fragmentInstance:t,observer:n,instance:a}),ad||(ad=!0,XM(function(){ad=!1;var r=zi;zi=[];for(var u=0;u<r.length;u++){var f=r[u];f.observer.unobserve(f.instance)}}))}di.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,zM,t,void 0,void 0),t};function zM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}di.prototype.getRootNode=function(t){var n=x(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},di.prototype.compareDocumentPosition=function(t){var n=x(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];m(this._fragmentFiber.child,!1,id,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,S(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=r=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),u=M(a[a.length-1]);var f=S(this._fragmentFiber)?n.parentElement:r;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var y=n.compareDocumentPosition(t),T=u.compareDocumentPosition(t),B=y&Node.DOCUMENT_POSITION_CONTAINED_BY||T&Node.DOCUMENT_POSITION_CONTAINED_BY;return T=r&&f&&y&Node.DOCUMENT_POSITION_FOLLOWING&&T&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||f&&u===t||B||T?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!f&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:y,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||IM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function IM(t,n,a,r,u){var f=Be(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=u.ownerDocument,u===f||u===f.documentElement||u===f.body;t:{for(f=n,n=x(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=z(a,f,I),n===null?n=!1:(m(n,!0,N,f,a),f=v,v=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===r)&&(n=z(r,f,I),n===null?n=!1:(m(n,!0,w,f,r),f=v,A=v=null,n=f!==null)),n):!1}function kv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}di.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];m(this._fragmentFiber.child,!1,id,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=E(this._fragmentFiber);if(r=a?r[1]||r[0]||x(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=M(r),kv(t,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var u=n[r];u.tag===6?(u=M(u),kv(u,a)):M(u).scrollIntoView(t),r+=a?-1:1}};function BM(t,n){return t=M(t),Xv(t,n),!1}function Xv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function qv(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];t.addEventListener(u.type,u.attachedListener,Pr(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var y=0,T=0;T<zi.length;T++){var B=zi[T];(B.fragmentInstance!==n||B.observer!==f||B.instance!==t)&&(zi[y++]=B)}zi.length=y,f.observe(t)}),Xv(t,n))}function FM(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];t.removeEventListener(u.type,u.attachedListener,Pr(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?PM(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function sd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":sd(a),ae(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function HM(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ie])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ai(t.nextSibling),t===null)break}return null}function GM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ai(t.nextSibling),t===null))return null;return t}function Yv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ai(t.nextSibling),t===null))return null;return t}function rd(t){return t.data==="$?"||t.data==="$~"}function od(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function VM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Ai(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ld=null;function Wv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ai(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function jv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function kM(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function XM(t){Ov(function(){Ov(function(n){return t(n)})})}function Zv(t,n,a){switch(n=il(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Qv(t,n,a){for(var r in a){var u=a[r];a.hasOwnProperty(r)&&u!=null&&Xe(t,n,r,null,xM,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===qi&&(t.onclick=null),ae(t)}function ud(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ae(t)}var Ri=new Map,Kv=new Set;function al(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Ma=Dt.d;Dt.d={f:qM,r:YM,D:WM,C:jM,L:ZM,m:QM,X:JM,S:KM,M:$M};function qM(){var t=Ma.f(),n=Vu();return t||n}function YM(t){var n=Se(t);n!==null&&n.tag===5&&n.type==="form"?$g(n):Ma.r(t)}var zr=typeof document>"u"?null:document;function Jv(t,n,a){var r=zr;if(r&&typeof n=="string"&&n){var u=xi(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Kv.has(u)||(Kv.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),On(n,"link",t),Pe(n),r.head.appendChild(n)))}}function WM(t){Ma.D(t),Jv("dns-prefetch",t,null)}function jM(t,n){Ma.C(t,n),Jv("preconnect",t,n)}function ZM(t,n,a){Ma.L(t,n,a);var r=zr;if(r&&t&&n){var u='link[rel="preload"][as="'+xi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+xi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+xi(a.imageSizes)+'"]')):u+='[href="'+xi(t)+'"]';var f=u;switch(n){case"style":f=Ir(t);break;case"script":f=Br(t)}if(!(Ri.has(f)||(t=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ri.set(f,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(sl(f))||n==="script"&&r.querySelector(rl(f))))){var y=r.createElement("link");On(y,"link",t),n==="style"&&(y[Oe]=!0,y.onload=y.onerror=function(){Oa(y)}),Pe(y),r.head.appendChild(y)}}}function QM(t,n){Ma.m(t,n);var a=zr;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+xi(r)+'"][href="'+xi(t)+'"]',f=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Br(t)}if(!Ri.has(f)&&(t=P({rel:"modulepreload",href:t},n),Ri.set(f,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(rl(f)))return}r=a.createElement("link"),On(r,"link",t),Pe(r),a.head.appendChild(r)}}}function KM(t,n,a){Ma.S(t,n,a);var r=zr;if(r&&t){var u=si(r).hoistableStyles,f=Ir(t);n=n||"default";var y=u.get(f);if(!y){var T={loading:0,preload:null};if(y=r.querySelector(sl(f)))T.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ri.get(f))&&cd(t,a);var B=y=r.createElement("link");Pe(B),On(B,"link",t),B._p=new Promise(function($,ot){B.onload=$,B.onerror=ot}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Zu(y,n,r)}y={type:"stylesheet",instance:y,count:1,state:T},u.set(f,y)}}}function JM(t,n){Ma.X(t,n);var a=zr;if(a&&t){var r=si(a).hoistableScripts,u=Br(t),f=r.get(u);f||(f=a.querySelector(rl(u)),f||(t=P({src:t,async:!0},n),(n=Ri.get(u))&&fd(t,n),f=a.createElement("script"),Pe(f),On(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function $M(t,n){Ma.M(t,n);var a=zr;if(a&&t){var r=si(a).hoistableScripts,u=Br(t),f=r.get(u);f||(f=a.querySelector(rl(u)),f||(t=P({src:t,async:!0,type:"module"},n),(n=Ri.get(u))&&fd(t,n),f=a.createElement("script"),Pe(f),On(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},r.set(u,f))}}function $v(t,n,a,r){var u=(u=Ne.current)?al(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Ir(a.href),n=si(u).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ir(a.href);var f=si(u).hoistableStyles,y=f.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,y),(f=u.querySelector(sl(t)))?f._p||(y.instance=f,y.state.loading=5):(f=Ri.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ri.set(t,f)),t1(u,t,f,y.state))),n&&r===null)throw Error(s(528,""));return y}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Br(a),n=si(u).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ir(t){return'href="'+xi(t)+'"'}function sl(t){return'link[rel="stylesheet"]['+t+"]"}function t_(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function t1(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Oe]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[Oe]=!0,n.onload=n.onerror=Oa.bind(null,n),On(n,"link",a),Pe(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Br(t){return'[src="'+xi(t)+'"]'}function rl(t){return"script[async]"+t}function e_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+xi(a.href)+'"]');if(r)return n.instance=r,Pe(r),r;var u=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Pe(r),On(r,"style",u),Zu(r,a.precedence,t),n.instance=r;case"stylesheet":u=Ir(a.href);var f=t.querySelector(sl(u));if(f)return n.state.loading|=4,n.instance=f,Pe(f),f;r=t_(a),(u=Ri.get(u))&&cd(r,u),f=(t.ownerDocument||t).createElement("link"),Pe(f);var y=f;return y._p=new Promise(function(T,B){y.onload=T,y.onerror=B}),On(f,"link",r),n.state.loading|=4,Zu(f,a.precedence,t),n.instance=f;case"script":return f=Br(a.src),(u=t.querySelector(rl(f)))?(n.instance=u,Pe(u),u):(r=a,(u=Ri.get(f))&&(r=P({},a),fd(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),Pe(u),On(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Zu(r,a.precedence,t));return n.instance}function Zu(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,f=u,y=0;y<r.length;y++){var T=r[y];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function cd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function fd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Qu=null;function n_(t,n,a){if(Qu===null){var r=new Map,u=Qu=new Map;u.set(a,r)}else u=Qu,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ie]||f[Ot]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=t+y;var T=r.get(y);T?T.push(f):r.set(y,[f])}}return r}function hd(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function e1(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function i_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function a_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function s_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function r_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=s_(n),t.suspenseyImages.push(n)),t=a1.bind(t),n.decode().then(t,t))}function n1(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ir(r.href),f=n.querySelector(sl(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ol.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Pe(f);return}f=n.ownerDocument||n,r=t_(r),(u=Ri.get(u))&&cd(r,u),f=f.createElement("link"),Pe(f);var y=f;y._p=new Promise(function(T,B){y.onload=T,y.onerror=B}),On(f,"link",r),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ol.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ku=0;function i1(t,n){return t.stylesheets&&t.count===0&&$u(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&$u(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Ku===0&&(Ku=62500*SM());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&$u(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Ku?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function o_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)$u(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function ol(){this.count--,o_(this)}function a1(){this.imgCount--,o_(this)}var Ju=null;function $u(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ju=new Map,n.forEach(s1,t),Ju=null,ol.call(t))}function s1(t,n){if(!(n.state.loading&4)){var a=Ju.get(t);if(a)var r=a.get(null);else{a=new Map,Ju.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),r=y)}r&&a.set(null,r)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||r,f===r&&a.set(null,u),a.set(y,u),this.count++,r=ol.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Fr={$$typeof:at,Provider:null,Consumer:null,_currentValue:O,_currentValue2:O,_threadCount:0};function r1(t,n,a,r,u,f,y,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Mo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Mo(0),this.hiddenUpdates=Mo(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function l_(t,n,a,r,u,f,y,T,B,$,ot,xt){return t=new r1(t,n,a,y,B,$,ot,xt,T),n=1,f===!0&&(n|=24),f=Jn(3,null,null,n),t.current=f,f.stateNode=t,n=Rf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:r,isDehydrated:a,cache:n},Uf(f),t}function u_(t){return t?(t=fr,t):fr}function c_(t,n,a,r,u,f){u=u_(u),r.context===null?r.context=u:r.pendingContext=u,r=ka(n),r.payload={element:a},f=f===void 0?null:f,f!==null&&(r.callback=f),a=Xa(t,r,n),a!==null&&(ni(a,t,n),Bo(a,t,n))}function f_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function dd(t,n){f_(t,n),(t=t.alternate)&&f_(t,n)}function h_(t){if(t.tag===13||t.tag===31){var n=Ss(t,67108864);n!==null&&ni(n,t,67108864),dd(t,67108864)}}function d_(t){if(t.tag===13||t.tag===31){var n=hi();n=ht(n);var a=Ss(t,n);a!==null&&ni(a,t,n),dd(t,n)}}var Hr=!0;function o1(t,n,a,r){var u=yt.T;yt.T=null;var f=Dt.p;try{Dt.p=2,pd(t,n,a,r)}finally{Dt.p=f,yt.T=u}}function l1(t,n,a,r){var u=yt.T;yt.T=null;var f=Dt.p;try{Dt.p=8,pd(t,n,a,r)}finally{Dt.p=f,yt.T=u}}function pd(t,n,a,r){if(Hr){var u=md(r);if(u===null)Zh(t,n,r,tc,a),m_(t,r);else if(c1(u,t,n,a,r))r.stopPropagation();else if(m_(t,r),n&4&&-1<u1.indexOf(t)){for(;u!==null;){var f=Se(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=_i(f.pendingLanes);if(y!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;y;){var B=1<<31-zn(y);T.entanglements[1]|=B,y&=~B}ea(f),(Fe&6)===0&&(Fu=q()+500,tl(0))}}break;case 31:case 13:T=Ss(f,2),T!==null&&ni(T,f,2),Vu(),dd(f,2)}if(f=md(r),f===null&&Zh(t,n,r,tc,a),f===u)break;u=f}u!==null&&r.stopPropagation()}else Zh(t,n,r,null,a)}}function md(t){return t=$c(t),gd(t)}var tc=null;function gd(t){if(tc=null,t=Be(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return tc=t,null}function p_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ut()){case Pt:return 2;case jt:return 8;case Rt:case Mt:return 32;case $t:return 268435456;default:return 32}default:return 32}}var vd=!1,ns=null,is=null,as=null,ll=new Map,ul=new Map,ss=[],u1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function m_(t,n){switch(t){case"focusin":case"focusout":ns=null;break;case"dragenter":case"dragleave":is=null;break;case"mouseover":case"mouseout":as=null;break;case"pointerover":case"pointerout":ll.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ul.delete(n.pointerId)}}function cl(t,n,a,r,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Se(n),n!==null&&h_(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function c1(t,n,a,r,u){switch(n){case"focusin":return ns=cl(ns,t,n,a,r,u),!0;case"dragenter":return is=cl(is,t,n,a,r,u),!0;case"mouseover":return as=cl(as,t,n,a,r,u),!0;case"pointerover":var f=u.pointerId;return ll.set(f,cl(ll.get(f)||null,t,n,a,r,u)),!0;case"gotpointercapture":return f=u.pointerId,ul.set(f,cl(ul.get(f)||null,t,n,a,r,u)),!0}return!1}function g_(t){var n=Be(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Vt(t.priority,function(){d_(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Vt(t.priority,function(){d_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ec(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=md(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Jc=r,a.target.dispatchEvent(r),Jc=null}else return n=Se(a),n!==null&&h_(n),t.blockedOn=a,!1;n.shift()}return!0}function v_(t,n,a){ec(t)&&a.delete(n)}function f1(){vd=!1,ns!==null&&ec(ns)&&(ns=null),is!==null&&ec(is)&&(is=null),as!==null&&ec(as)&&(as=null),ll.forEach(v_),ul.forEach(v_)}function nc(t,n){t.blockedOn===n&&(t.blockedOn=null,vd||(vd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,f1)))}var ic=null;function __(t){ic!==t&&(ic=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ic===t&&(ic=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(gd(r||a)===null)continue;break}var f=Se(a);f!==null&&(t.splice(n,3),n-=3,Jf(f,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function Gr(t){function n(B){return nc(B,t)}ns!==null&&nc(ns,t),is!==null&&nc(is,t),as!==null&&nc(as,t),ll.forEach(n),ul.forEach(n);for(var a=0;a<ss.length;a++){var r=ss[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<ss.length&&(a=ss[0],a.blockedOn===null);)g_(a),a.blockedOn===null&&ss.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],f=a[r+1],y=u[Kt]||null;if(typeof f=="function")y||__(a);else if(y){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[Kt]||null)T=y.formAction;else if(gd(u)!==null)continue}else T=y.action;typeof T=="function"?a[r+1]=T:(a.splice(r,3),r-=3),__(a)}}}function x_(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function _d(t){this._internalRoot=t}ac.prototype.render=_d.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=hi();c_(a,r,t,n,null,null)},ac.prototype.unmount=_d.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;c_(t.current,2,null,t,null,null),Vu(),n[re]=null}};function ac(t){this._internalRoot=t}ac.prototype.unstable_scheduleHydration=function(t){if(t){var n=wt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<ss.length&&n!==0&&n<ss[a].priority;a++);ss.splice(a,0,t),a===0&&g_(t)}};var y_=e.version;if(y_!=="19.3.1")throw Error(s(527,y_,"19.3.1"));Dt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var h1={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:yt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sc.isDisabled&&sc.supportsFiber)try{Re=sc.inject(h1),en=sc}catch{}}return hl.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=u0,f=c0,y=f0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=l_(t,1,!1,null,null,a,r,null,u,f,y,x_),t[re]=n.current,jh(t),new _d(n)},hl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",f=u0,y=c0,T=f0,B=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=l_(t,1,!0,n,a??null,r,u,B,f,y,T,x_),n.context=u_(null),a=n.current,r=hi(),r=ht(r),u=ka(r),u.callback=null,Xa(a,u,r),a=r,n.current.lanes=a,_s(n,a),ea(n),t[re]=n.current,jh(t),new ac(n)},hl.version="19.3.1",hl}var D_;function T1(){if(D_)return Sd.exports;D_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Sd.exports=E1(),Sd.exports}var b1=T1();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Xx=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var R1={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=he.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:h,...d},p)=>he.createElement("svg",{ref:p,...R1,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:Xx("lucide",l),...d},[...h.map(([g,_])=>he.createElement(g,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=(o,e)=>{const i=he.forwardRef(({className:s,...l},c)=>he.createElement(C1,{ref:c,iconNode:e,className:Xx(`lucide-${A1(o)}`,s),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=Kn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=Kn("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=Kn("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=Kn("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=Kn("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=Kn("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=Kn("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=Kn("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=Kn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=Kn("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=Kn("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=Kn("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=Kn("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=Kn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=Kn("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kp="180",F1=0,P_=1,H1=2,qx=1,G1=2,Ca=3,ps=0,Gn=1,ia=2,Da=0,ro=1,Rl=2,z_=3,I_=4,V1=5,Ws=100,k1=101,X1=102,q1=103,Y1=104,W1=200,j1=201,Z1=202,Q1=203,sp=204,rp=205,K1=206,J1=207,$1=208,tE=209,eE=210,nE=211,iE=212,aE=213,sE=214,op=0,lp=1,up=2,lo=3,cp=4,fp=5,hp=6,dp=7,Yx=0,rE=1,oE=2,Ua=0,Wx=1,jx=2,Zx=3,Jp=4,Qx=5,Kx=6,Jx=7,$x=300,uo=301,co=302,pp=303,mp=304,Xc=306,gp=1e3,Zs=1001,vp=1002,vi=1003,lE=1004,rc=1005,aa=1006,Ad=1007,Qs=1008,ki=1009,ty=1010,ey=1011,Cl=1012,$p=1013,Js=1014,sa=1015,Vi=1016,tm=1017,em=1018,wl=1020,ny=35902,iy=35899,ay=1021,sy=1022,Gi=1023,Dl=1026,Ul=1027,nm=1028,im=1029,ry=1030,am=1031,sm=1033,Lc=33776,Oc=33777,Pc=33778,zc=33779,_p=35840,xp=35841,yp=35842,Sp=35843,Mp=36196,Ep=37492,Tp=37496,bp=37808,Ap=37809,Rp=37810,Cp=37811,wp=37812,Dp=37813,Up=37814,Np=37815,Lp=37816,Op=37817,Pp=37818,zp=37819,Ip=37820,Bp=37821,Fp=36492,Hp=36494,Gp=36495,Vp=36283,kp=36284,Xp=36285,qp=36286,uE=3200,cE=3201,oy=0,fE=1,ds="",ii="srgb",fo="srgb-linear",Fc="linear",qe="srgb",Vr=7680,B_=519,hE=512,dE=513,pE=514,ly=515,mE=516,gE=517,vE=518,_E=519,F_=35044,H_="300 es",ra=2e3,Hc=2001;class mo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let G_=1234567;const bl=Math.PI/180,Nl=180/Math.PI;function go(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Fn[o&255]+Fn[o>>8&255]+Fn[o>>16&255]+Fn[o>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[s&255]+Fn[s>>8&255]+Fn[s>>16&255]+Fn[s>>24&255]).toLowerCase()}function De(o,e,i){return Math.max(e,Math.min(i,o))}function rm(o,e){return(o%e+e)%e}function xE(o,e,i,s,l){return s+(o-e)*(l-s)/(i-e)}function yE(o,e,i){return o!==e?(i-o)/(e-o):0}function Al(o,e,i){return(1-i)*o+i*e}function SE(o,e,i,s){return Al(o,e,1-Math.exp(-i*s))}function ME(o,e=1){return e-Math.abs(rm(o,e*2)-e)}function EE(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function TE(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function bE(o,e){return o+Math.floor(Math.random()*(e-o+1))}function AE(o,e){return o+Math.random()*(e-o)}function RE(o){return o*(.5-Math.random())}function CE(o){o!==void 0&&(G_=o);let e=G_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function wE(o){return o*bl}function DE(o){return o*Nl}function UE(o){return(o&o-1)===0&&o!==0}function NE(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function LE(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function OE(o,e,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),p=h(i/2),g=c((e+s)/2),_=h((e+s)/2),m=c((e-s)/2),x=h((e-s)/2),S=c((s-e)/2),E=h((s-e)/2);switch(l){case"XYX":o.set(d*_,p*m,p*x,d*g);break;case"YZY":o.set(p*x,d*_,p*m,d*g);break;case"ZXZ":o.set(p*m,p*x,d*_,d*g);break;case"XZX":o.set(d*_,p*E,p*S,d*g);break;case"YXY":o.set(p*S,d*_,p*E,d*g);break;case"ZYZ":o.set(p*E,p*S,d*_,d*g);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function io(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Zn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const fn={DEG2RAD:bl,RAD2DEG:Nl,generateUUID:go,clamp:De,euclideanModulo:rm,mapLinear:xE,inverseLerp:yE,lerp:Al,damp:SE,pingpong:ME,smoothstep:EE,smootherstep:TE,randInt:bE,randFloat:AE,randFloatSpread:RE,seededRandom:CE,degToRad:wE,radToDeg:DE,isPowerOfTwo:UE,ceilPowerOfTwo:NE,floorPowerOfTwo:LE,setQuaternionFromProperEuler:OE,normalize:Zn,denormalize:io};class de{constructor(e=0,i=0){de.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=De(this.x,e.x,i.x),this.y=De(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=De(this.x,e,i),this.y=De(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(De(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ai{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,d){let p=s[l+0],g=s[l+1],_=s[l+2],m=s[l+3];const x=c[h+0],S=c[h+1],E=c[h+2],b=c[h+3];if(d===0){e[i+0]=p,e[i+1]=g,e[i+2]=_,e[i+3]=m;return}if(d===1){e[i+0]=x,e[i+1]=S,e[i+2]=E,e[i+3]=b;return}if(m!==b||p!==x||g!==S||_!==E){let M=1-d;const v=p*x+g*S+_*E+m*b,A=v>=0?1:-1,N=1-v*v;if(N>Number.EPSILON){const I=Math.sqrt(N),z=Math.atan2(I,v*A);M=Math.sin(M*z)/I,d=Math.sin(d*z)/I}const w=d*A;if(p=p*M+x*w,g=g*M+S*w,_=_*M+E*w,m=m*M+b*w,M===1-d){const I=1/Math.sqrt(p*p+g*g+_*_+m*m);p*=I,g*=I,_*=I,m*=I}}e[i]=p,e[i+1]=g,e[i+2]=_,e[i+3]=m}static multiplyQuaternionsFlat(e,i,s,l,c,h){const d=s[l],p=s[l+1],g=s[l+2],_=s[l+3],m=c[h],x=c[h+1],S=c[h+2],E=c[h+3];return e[i]=d*E+_*m+p*S-g*x,e[i+1]=p*E+_*x+g*m-d*S,e[i+2]=g*E+_*S+d*x-p*m,e[i+3]=_*E-d*m-p*x-g*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,p=Math.sin,g=d(s/2),_=d(l/2),m=d(c/2),x=p(s/2),S=p(l/2),E=p(c/2);switch(h){case"XYZ":this._x=x*_*m+g*S*E,this._y=g*S*m-x*_*E,this._z=g*_*E+x*S*m,this._w=g*_*m-x*S*E;break;case"YXZ":this._x=x*_*m+g*S*E,this._y=g*S*m-x*_*E,this._z=g*_*E-x*S*m,this._w=g*_*m+x*S*E;break;case"ZXY":this._x=x*_*m-g*S*E,this._y=g*S*m+x*_*E,this._z=g*_*E+x*S*m,this._w=g*_*m-x*S*E;break;case"ZYX":this._x=x*_*m-g*S*E,this._y=g*S*m+x*_*E,this._z=g*_*E-x*S*m,this._w=g*_*m+x*S*E;break;case"YZX":this._x=x*_*m+g*S*E,this._y=g*S*m+x*_*E,this._z=g*_*E-x*S*m,this._w=g*_*m-x*S*E;break;case"XZY":this._x=x*_*m-g*S*E,this._y=g*S*m-x*_*E,this._z=g*_*E+x*S*m,this._w=g*_*m+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],g=i[2],_=i[6],m=i[10],x=s+d+m;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-p)*S,this._y=(c-g)*S,this._z=(h-l)*S}else if(s>d&&s>m){const S=2*Math.sqrt(1+s-d-m);this._w=(_-p)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+g)/S}else if(d>m){const S=2*Math.sqrt(1+d-s-m);this._w=(c-g)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+m-s-d);this._w=(h-l)/S,this._x=(c+g)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(De(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,d=i._x,p=i._y,g=i._z,_=i._w;return this._x=s*_+h*d+l*g-c*p,this._y=l*_+h*p+c*d-s*g,this._z=c*_+h*g+s*p-l*d,this._w=h*_-s*d-l*p-c*g,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*s+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const g=Math.sqrt(p),_=Math.atan2(g,d),m=Math.sin((1-i)*_)/g,x=Math.sin(i*_)/g;return this._w=h*m+this._w*x,this._x=s*m+this._x*x,this._y=l*m+this._y*x,this._z=c*m+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,i=0,s=0){W.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(V_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(V_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,d=e.z,p=e.w,g=2*(h*l-d*s),_=2*(d*i-c*l),m=2*(c*s-h*i);return this.x=i+p*g+h*m-d*_,this.y=s+p*_+d*g-c*m,this.z=l+p*m+c*_-h*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=De(this.x,e.x,i.x),this.y=De(this.y,e.y,i.y),this.z=De(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=De(this.x,e,i),this.y=De(this.y,e,i),this.z=De(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-s*p,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Rd.copy(this).projectOnVector(e),this.sub(Rd)}reflect(e){return this.sub(Rd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(De(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rd=new W,V_=new ai;class me{constructor(e,i,s,l,c,h,d,p,g){me.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,p,g)}set(e,i,s,l,c,h,d,p,g){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=p,_[6]=s,_[7]=h,_[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],p=s[6],g=s[1],_=s[4],m=s[7],x=s[2],S=s[5],E=s[8],b=l[0],M=l[3],v=l[6],A=l[1],N=l[4],w=l[7],I=l[2],z=l[5],P=l[8];return c[0]=h*b+d*A+p*I,c[3]=h*M+d*N+p*z,c[6]=h*v+d*w+p*P,c[1]=g*b+_*A+m*I,c[4]=g*M+_*N+m*z,c[7]=g*v+_*w+m*P,c[2]=x*b+S*A+E*I,c[5]=x*M+S*N+E*z,c[8]=x*v+S*w+E*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],g=e[7],_=e[8];return i*h*_-i*d*g-s*c*_+s*d*p+l*c*g-l*h*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],g=e[7],_=e[8],m=_*h-d*g,x=d*p-_*c,S=g*c-h*p,E=i*m+s*x+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return e[0]=m*b,e[1]=(l*g-_*s)*b,e[2]=(d*s-l*h)*b,e[3]=x*b,e[4]=(_*i-l*p)*b,e[5]=(l*c-d*i)*b,e[6]=S*b,e[7]=(s*p-g*i)*b,e[8]=(h*i-s*c)*b,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,d){const p=Math.cos(c),g=Math.sin(c);return this.set(s*p,s*g,-s*(p*h+g*d)+h+e,-l*g,l*p,-l*(-g*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Cd.makeScale(e,i)),this}rotate(e){return this.premultiply(Cd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Cd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cd=new me;function uy(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Gc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function PE(){const o=Gc("canvas");return o.style.display="block",o}const k_={};function Ll(o){o in k_||(k_[o]=!0,console.warn(o))}function zE(o,e,i){return new Promise(function(s,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const X_=new me().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),q_=new me().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function IE(){const o={enabled:!0,workingColorSpace:fo,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===qe&&(l.r=Na(l.r),l.g=Na(l.g),l.b=Na(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===qe&&(l.r=oo(l.r),l.g=oo(l.g),l.b=oo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ds?Fc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ll("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ll("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[fo]:{primaries:e,whitePoint:s,transfer:Fc,toXYZ:X_,fromXYZ:q_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:e,whitePoint:s,transfer:qe,toXYZ:X_,fromXYZ:q_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),o}const Le=IE();function Na(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function oo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let kr;class BE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{kr===void 0&&(kr=Gc("canvas")),kr.width=e.width,kr.height=e.height;const l=kr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=kr}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Gc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Na(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Na(i[s]/255)*255):i[s]=Na(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let FE=0;class om{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:FE++}),this.uuid=go(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(wd(l[h].image)):c.push(wd(l[h]))}else c=wd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function wd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?BE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let HE=0;const Dd=new W;class Vn extends mo{constructor(e=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,s=Zs,l=Zs,c=aa,h=Qs,d=Gi,p=ki,g=Vn.DEFAULT_ANISOTROPY,_=ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=go(),this.name="",this.source=new om(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=p,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new me,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dd).x}get height(){return this.source.getSize(Dd).y}get depth(){return this.source.getSize(Dd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$x)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gp:e.x=e.x-Math.floor(e.x);break;case Zs:e.x=e.x<0?0:1;break;case vp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gp:e.y=e.y-Math.floor(e.y);break;case Zs:e.y=e.y<0?0:1;break;case vp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=$x;Vn.DEFAULT_ANISOTROPY=1;class ln{constructor(e=0,i=0,s=0,l=1){ln.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const p=e.elements,g=p[0],_=p[4],m=p[8],x=p[1],S=p[5],E=p[9],b=p[2],M=p[6],v=p[10];if(Math.abs(_-x)<.01&&Math.abs(m-b)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+x)<.1&&Math.abs(m+b)<.1&&Math.abs(E+M)<.1&&Math.abs(g+S+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(g+1)/2,w=(S+1)/2,I=(v+1)/2,z=(_+x)/4,P=(m+b)/4,V=(E+M)/4;return N>w&&N>I?N<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(N),l=z/s,c=P/s):w>I?w<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(w),s=z/l,c=V/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=P/c,l=V/c),this.set(s,l,c,i),this}let A=Math.sqrt((M-E)*(M-E)+(m-b)*(m-b)+(x-_)*(x-_));return Math.abs(A)<.001&&(A=1),this.x=(M-E)/A,this.y=(m-b)/A,this.z=(x-_)/A,this.w=Math.acos((g+S+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=De(this.x,e.x,i.x),this.y=De(this.y,e.y,i.y),this.z=De(this.z,e.z,i.z),this.w=De(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=De(this.x,e,i),this.y=De(this.y,e,i),this.z=De(this.z,e,i),this.w=De(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(De(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class GE extends mo{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:aa,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new Vn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:aa,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new om(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends GE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class cy extends Vn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=Zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class VE extends Vn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=Zs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $s{constructor(e=new W(1/0,1/0,1/0),i=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ii.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ii.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ii.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ii):Ii.fromBufferAttribute(c,h),Ii.applyMatrix4(e.matrixWorld),this.expandByPoint(Ii);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),oc.copy(s.boundingBox)),oc.applyMatrix4(e.matrixWorld),this.union(oc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ii),Ii.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(dl),lc.subVectors(this.max,dl),Xr.subVectors(e.a,dl),qr.subVectors(e.b,dl),Yr.subVectors(e.c,dl),os.subVectors(qr,Xr),ls.subVectors(Yr,qr),Fs.subVectors(Xr,Yr);let i=[0,-os.z,os.y,0,-ls.z,ls.y,0,-Fs.z,Fs.y,os.z,0,-os.x,ls.z,0,-ls.x,Fs.z,0,-Fs.x,-os.y,os.x,0,-ls.y,ls.x,0,-Fs.y,Fs.x,0];return!Ud(i,Xr,qr,Yr,lc)||(i=[1,0,0,0,1,0,0,0,1],!Ud(i,Xr,qr,Yr,lc))?!1:(uc.crossVectors(os,ls),i=[uc.x,uc.y,uc.z],Ud(i,Xr,qr,Yr,lc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ii).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ii).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ea),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ea=[new W,new W,new W,new W,new W,new W,new W,new W],Ii=new W,oc=new $s,Xr=new W,qr=new W,Yr=new W,os=new W,ls=new W,Fs=new W,dl=new W,lc=new W,uc=new W,Hs=new W;function Ud(o,e,i,s,l){for(let c=0,h=o.length-3;c<=h;c+=3){Hs.fromArray(o,c);const d=l.x*Math.abs(Hs.x)+l.y*Math.abs(Hs.y)+l.z*Math.abs(Hs.z),p=e.dot(Hs),g=i.dot(Hs),_=s.dot(Hs);if(Math.max(-Math.max(p,g,_),Math.min(p,g,_))>d)return!1}return!0}const kE=new $s,pl=new W,Nd=new W;class tr{constructor(e=new W,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):kE.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;pl.subVectors(e,this.center);const i=pl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(pl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(pl.copy(e.center).add(Nd)),this.expandByPoint(pl.copy(e.center).sub(Nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ta=new W,Ld=new W,cc=new W,us=new W,Od=new W,fc=new W,Pd=new W;class lm{constructor(e=new W,i=new W(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ta)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ta.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ta.copy(this.origin).addScaledVector(this.direction,i),Ta.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Ld.copy(e).add(i).multiplyScalar(.5),cc.copy(i).sub(e).normalize(),us.copy(this.origin).sub(Ld);const c=e.distanceTo(i)*.5,h=-this.direction.dot(cc),d=us.dot(this.direction),p=-us.dot(cc),g=us.lengthSq(),_=Math.abs(1-h*h);let m,x,S,E;if(_>0)if(m=h*p-d,x=h*d-p,E=c*_,m>=0)if(x>=-E)if(x<=E){const b=1/_;m*=b,x*=b,S=m*(m+h*x+2*d)+x*(h*m+x+2*p)+g}else x=c,m=Math.max(0,-(h*x+d)),S=-m*m+x*(x+2*p)+g;else x=-c,m=Math.max(0,-(h*x+d)),S=-m*m+x*(x+2*p)+g;else x<=-E?(m=Math.max(0,-(-h*c+d)),x=m>0?-c:Math.min(Math.max(-c,-p),c),S=-m*m+x*(x+2*p)+g):x<=E?(m=0,x=Math.min(Math.max(-c,-p),c),S=x*(x+2*p)+g):(m=Math.max(0,-(h*c+d)),x=m>0?c:Math.min(Math.max(-c,-p),c),S=-m*m+x*(x+2*p)+g);else x=h>0?-c:c,m=Math.max(0,-(h*x+d)),S=-m*m+x*(x+2*p)+g;return s&&s.copy(this.origin).addScaledVector(this.direction,m),l&&l.copy(Ld).addScaledVector(cc,x),S}intersectSphere(e,i){Ta.subVectors(e.center,this.origin);const s=Ta.dot(this.direction),l=Ta.dot(Ta)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,d,p;const g=1/this.direction.x,_=1/this.direction.y,m=1/this.direction.z,x=this.origin;return g>=0?(s=(e.min.x-x.x)*g,l=(e.max.x-x.x)*g):(s=(e.max.x-x.x)*g,l=(e.min.x-x.x)*g),_>=0?(c=(e.min.y-x.y)*_,h=(e.max.y-x.y)*_):(c=(e.max.y-x.y)*_,h=(e.min.y-x.y)*_),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),m>=0?(d=(e.min.z-x.z)*m,p=(e.max.z-x.z)*m):(d=(e.max.z-x.z)*m,p=(e.min.z-x.z)*m),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,Ta)!==null}intersectTriangle(e,i,s,l,c){Od.subVectors(i,e),fc.subVectors(s,e),Pd.crossVectors(Od,fc);let h=this.direction.dot(Pd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;us.subVectors(this.origin,e);const p=d*this.direction.dot(fc.crossVectors(us,fc));if(p<0)return null;const g=d*this.direction.dot(Od.cross(us));if(g<0||p+g>h)return null;const _=-d*us.dot(Pd);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(e,i,s,l,c,h,d,p,g,_,m,x,S,E,b,M){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,p,g,_,m,x,S,E,b,M)}set(e,i,s,l,c,h,d,p,g,_,m,x,S,E,b,M){const v=this.elements;return v[0]=e,v[4]=i,v[8]=s,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=p,v[2]=g,v[6]=_,v[10]=m,v[14]=x,v[3]=S,v[7]=E,v[11]=b,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/Wr.setFromMatrixColumn(e,0).length(),c=1/Wr.setFromMatrixColumn(e,1).length(),h=1/Wr.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),g=Math.sin(l),_=Math.cos(c),m=Math.sin(c);if(e.order==="XYZ"){const x=h*_,S=h*m,E=d*_,b=d*m;i[0]=p*_,i[4]=-p*m,i[8]=g,i[1]=S+E*g,i[5]=x-b*g,i[9]=-d*p,i[2]=b-x*g,i[6]=E+S*g,i[10]=h*p}else if(e.order==="YXZ"){const x=p*_,S=p*m,E=g*_,b=g*m;i[0]=x+b*d,i[4]=E*d-S,i[8]=h*g,i[1]=h*m,i[5]=h*_,i[9]=-d,i[2]=S*d-E,i[6]=b+x*d,i[10]=h*p}else if(e.order==="ZXY"){const x=p*_,S=p*m,E=g*_,b=g*m;i[0]=x-b*d,i[4]=-h*m,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*_,i[9]=b-x*d,i[2]=-h*g,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const x=h*_,S=h*m,E=d*_,b=d*m;i[0]=p*_,i[4]=E*g-S,i[8]=x*g+b,i[1]=p*m,i[5]=b*g+x,i[9]=S*g-E,i[2]=-g,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const x=h*p,S=h*g,E=d*p,b=d*g;i[0]=p*_,i[4]=b-x*m,i[8]=E*m+S,i[1]=m,i[5]=h*_,i[9]=-d*_,i[2]=-g*_,i[6]=S*m+E,i[10]=x-b*m}else if(e.order==="XZY"){const x=h*p,S=h*g,E=d*p,b=d*g;i[0]=p*_,i[4]=-m,i[8]=g*_,i[1]=x*m+b,i[5]=h*_,i[9]=S*m-E,i[2]=E*m-S,i[6]=d*_,i[10]=b*m+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(XE,e,qE)}lookAt(e,i,s){const l=this.elements;return pi.subVectors(e,i),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),cs.crossVectors(s,pi),cs.lengthSq()===0&&(Math.abs(s.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),cs.crossVectors(s,pi)),cs.normalize(),hc.crossVectors(pi,cs),l[0]=cs.x,l[4]=hc.x,l[8]=pi.x,l[1]=cs.y,l[5]=hc.y,l[9]=pi.y,l[2]=cs.z,l[6]=hc.z,l[10]=pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],p=s[8],g=s[12],_=s[1],m=s[5],x=s[9],S=s[13],E=s[2],b=s[6],M=s[10],v=s[14],A=s[3],N=s[7],w=s[11],I=s[15],z=l[0],P=l[4],V=l[8],U=l[12],C=l[1],H=l[5],Y=l[9],Q=l[13],pt=l[2],at=l[6],F=l[10],nt=l[14],j=l[3],ft=l[7],St=l[11],Et=l[15];return c[0]=h*z+d*C+p*pt+g*j,c[4]=h*P+d*H+p*at+g*ft,c[8]=h*V+d*Y+p*F+g*St,c[12]=h*U+d*Q+p*nt+g*Et,c[1]=_*z+m*C+x*pt+S*j,c[5]=_*P+m*H+x*at+S*ft,c[9]=_*V+m*Y+x*F+S*St,c[13]=_*U+m*Q+x*nt+S*Et,c[2]=E*z+b*C+M*pt+v*j,c[6]=E*P+b*H+M*at+v*ft,c[10]=E*V+b*Y+M*F+v*St,c[14]=E*U+b*Q+M*nt+v*Et,c[3]=A*z+N*C+w*pt+I*j,c[7]=A*P+N*H+w*at+I*ft,c[11]=A*V+N*Y+w*F+I*St,c[15]=A*U+N*Q+w*nt+I*Et,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],d=e[5],p=e[9],g=e[13],_=e[2],m=e[6],x=e[10],S=e[14],E=e[3],b=e[7],M=e[11],v=e[15];return E*(+c*p*m-l*g*m-c*d*x+s*g*x+l*d*S-s*p*S)+b*(+i*p*S-i*g*x+c*h*x-l*h*S+l*g*_-c*p*_)+M*(+i*g*m-i*d*S-c*h*m+s*h*S+c*d*_-s*g*_)+v*(-l*d*_-i*p*m+i*d*x+l*h*m-s*h*x+s*p*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],g=e[7],_=e[8],m=e[9],x=e[10],S=e[11],E=e[12],b=e[13],M=e[14],v=e[15],A=m*M*g-b*x*g+b*p*S-d*M*S-m*p*v+d*x*v,N=E*x*g-_*M*g-E*p*S+h*M*S+_*p*v-h*x*v,w=_*b*g-E*m*g+E*d*S-h*b*S-_*d*v+h*m*v,I=E*m*p-_*b*p-E*d*x+h*b*x+_*d*M-h*m*M,z=i*A+s*N+l*w+c*I;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/z;return e[0]=A*P,e[1]=(b*x*c-m*M*c-b*l*S+s*M*S+m*l*v-s*x*v)*P,e[2]=(d*M*c-b*p*c+b*l*g-s*M*g-d*l*v+s*p*v)*P,e[3]=(m*p*c-d*x*c-m*l*g+s*x*g+d*l*S-s*p*S)*P,e[4]=N*P,e[5]=(_*M*c-E*x*c+E*l*S-i*M*S-_*l*v+i*x*v)*P,e[6]=(E*p*c-h*M*c-E*l*g+i*M*g+h*l*v-i*p*v)*P,e[7]=(h*x*c-_*p*c+_*l*g-i*x*g-h*l*S+i*p*S)*P,e[8]=w*P,e[9]=(E*m*c-_*b*c-E*s*S+i*b*S+_*s*v-i*m*v)*P,e[10]=(h*b*c-E*d*c+E*s*g-i*b*g-h*s*v+i*d*v)*P,e[11]=(_*d*c-h*m*c-_*s*g+i*m*g+h*s*S-i*d*S)*P,e[12]=I*P,e[13]=(_*b*l-E*m*l+E*s*x-i*b*x-_*s*M+i*m*M)*P,e[14]=(E*d*l-h*b*l-E*s*p+i*b*p+h*s*M-i*d*M)*P,e[15]=(h*m*l-_*d*l+_*s*p-i*m*p-h*s*x+i*d*x)*P,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,d=e.y,p=e.z,g=c*h,_=c*d;return this.set(g*h+s,g*d-l*p,g*p+l*d,0,g*d+l*p,_*d+s,_*p-l*h,0,g*p-l*d,_*p+l*h,c*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,g=c+c,_=h+h,m=d+d,x=c*g,S=c*_,E=c*m,b=h*_,M=h*m,v=d*m,A=p*g,N=p*_,w=p*m,I=s.x,z=s.y,P=s.z;return l[0]=(1-(b+v))*I,l[1]=(S+w)*I,l[2]=(E-N)*I,l[3]=0,l[4]=(S-w)*z,l[5]=(1-(x+v))*z,l[6]=(M+A)*z,l[7]=0,l[8]=(E+N)*P,l[9]=(M-A)*P,l[10]=(1-(x+b))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let c=Wr.set(l[0],l[1],l[2]).length();const h=Wr.set(l[4],l[5],l[6]).length(),d=Wr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Bi.copy(this);const g=1/c,_=1/h,m=1/d;return Bi.elements[0]*=g,Bi.elements[1]*=g,Bi.elements[2]*=g,Bi.elements[4]*=_,Bi.elements[5]*=_,Bi.elements[6]*=_,Bi.elements[8]*=m,Bi.elements[9]*=m,Bi.elements[10]*=m,i.setFromRotationMatrix(Bi),s.x=c,s.y=h,s.z=d,this}makePerspective(e,i,s,l,c,h,d=ra,p=!1){const g=this.elements,_=2*c/(i-e),m=2*c/(s-l),x=(i+e)/(i-e),S=(s+l)/(s-l);let E,b;if(p)E=c/(h-c),b=h*c/(h-c);else if(d===ra)E=-(h+c)/(h-c),b=-2*h*c/(h-c);else if(d===Hc)E=-h/(h-c),b=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return g[0]=_,g[4]=0,g[8]=x,g[12]=0,g[1]=0,g[5]=m,g[9]=S,g[13]=0,g[2]=0,g[6]=0,g[10]=E,g[14]=b,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(e,i,s,l,c,h,d=ra,p=!1){const g=this.elements,_=2/(i-e),m=2/(s-l),x=-(i+e)/(i-e),S=-(s+l)/(s-l);let E,b;if(p)E=1/(h-c),b=h/(h-c);else if(d===ra)E=-2/(h-c),b=-(h+c)/(h-c);else if(d===Hc)E=-1/(h-c),b=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return g[0]=_,g[4]=0,g[8]=0,g[12]=x,g[1]=0,g[5]=m,g[9]=0,g[13]=S,g[2]=0,g[6]=0,g[10]=E,g[14]=b,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Wr=new W,Bi=new Ye,XE=new W(0,0,0),qE=new W(1,1,1),cs=new W,hc=new W,pi=new W,Y_=new Ye,W_=new ai;class Di{constructor(e=0,i=0,s=0,l=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],g=l[5],_=l[9],m=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(De(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,g),this._z=0);break;case"YXZ":this._x=Math.asin(-De(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,g)):(this._y=Math.atan2(-m,c),this._z=0);break;case"ZXY":this._x=Math.asin(De(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-m,S),this._z=Math.atan2(-h,g)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-De(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,g));break;case"YZX":this._z=Math.asin(De(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,g),this._y=Math.atan2(-m,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,g),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Y_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Y_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return W_.setFromEuler(this),this.setFromQuaternion(W_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class fy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let YE=0;const j_=new W,jr=new ai,ba=new Ye,dc=new W,ml=new W,WE=new W,jE=new ai,Z_=new W(1,0,0),Q_=new W(0,1,0),K_=new W(0,0,1),J_={type:"added"},ZE={type:"removed"},Zr={type:"childadded",child:null},zd={type:"childremoved",child:null};class _n extends mo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YE++}),this.uuid=go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new W,i=new Di,s=new ai,l=new W(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new me}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return jr.setFromAxisAngle(e,i),this.quaternion.multiply(jr),this}rotateOnWorldAxis(e,i){return jr.setFromAxisAngle(e,i),this.quaternion.premultiply(jr),this}rotateX(e){return this.rotateOnAxis(Z_,e)}rotateY(e){return this.rotateOnAxis(Q_,e)}rotateZ(e){return this.rotateOnAxis(K_,e)}translateOnAxis(e,i){return j_.copy(e).applyQuaternion(this.quaternion),this.position.add(j_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Z_,e)}translateY(e){return this.translateOnAxis(Q_,e)}translateZ(e){return this.translateOnAxis(K_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ba.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?dc.copy(e):dc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ba.lookAt(ml,dc,this.up):ba.lookAt(dc,ml,this.up),this.quaternion.setFromRotationMatrix(ba),l&&(ba.extractRotation(l.matrixWorld),jr.setFromRotationMatrix(ba),this.quaternion.premultiply(jr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(J_),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(ZE),zd.child=e,this.dispatchEvent(zd),zd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ba.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ba.multiply(e.parent.matrixWorld)),e.applyMatrix4(ba),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(J_),Zr.child=e,this.dispatchEvent(Zr),Zr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,e,WE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ml,jE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let g=0,_=p.length;g<_;g++){const m=p[g];c(e.shapes,m)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,g=this.material.length;p<g;p++)d.push(c(e.materials,this.material[p]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),g=h(e.textures),_=h(e.images),m=h(e.shapes),x=h(e.skeletons),S=h(e.animations),E=h(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),g.length>0&&(s.textures=g),_.length>0&&(s.images=_),m.length>0&&(s.shapes=m),x.length>0&&(s.skeletons=x),S.length>0&&(s.animations=S),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const p=[];for(const g in d){const _=d[g];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}_n.DEFAULT_UP=new W(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Fi=new W,Aa=new W,Id=new W,Ra=new W,Qr=new W,Kr=new W,$_=new W,Bd=new W,Fd=new W,Hd=new W,Gd=new ln,Vd=new ln,kd=new ln;class Hi{constructor(e=new W,i=new W,s=new W){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Fi.subVectors(e,i),l.cross(Fi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){Fi.subVectors(l,i),Aa.subVectors(s,i),Id.subVectors(e,i);const h=Fi.dot(Fi),d=Fi.dot(Aa),p=Fi.dot(Id),g=Aa.dot(Aa),_=Aa.dot(Id),m=h*g-d*d;if(m===0)return c.set(0,0,0),null;const x=1/m,S=(g*p-d*_)*x,E=(h*_-d*p)*x;return c.set(1-S-E,E,S)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(e,i,s,l,c,h,d,p){return this.getBarycoord(e,i,s,l,Ra)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ra.x),p.addScaledVector(h,Ra.y),p.addScaledVector(d,Ra.z),p)}static getInterpolatedAttribute(e,i,s,l,c,h){return Gd.setScalar(0),Vd.setScalar(0),kd.setScalar(0),Gd.fromBufferAttribute(e,i),Vd.fromBufferAttribute(e,s),kd.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Gd,c.x),h.addScaledVector(Vd,c.y),h.addScaledVector(kd,c.z),h}static isFrontFacing(e,i,s,l){return Fi.subVectors(s,i),Aa.subVectors(e,i),Fi.cross(Aa).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Fi.cross(Aa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Hi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Hi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Hi.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Hi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Hi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,d;Qr.subVectors(l,s),Kr.subVectors(c,s),Bd.subVectors(e,s);const p=Qr.dot(Bd),g=Kr.dot(Bd);if(p<=0&&g<=0)return i.copy(s);Fd.subVectors(e,l);const _=Qr.dot(Fd),m=Kr.dot(Fd);if(_>=0&&m<=_)return i.copy(l);const x=p*m-_*g;if(x<=0&&p>=0&&_<=0)return h=p/(p-_),i.copy(s).addScaledVector(Qr,h);Hd.subVectors(e,c);const S=Qr.dot(Hd),E=Kr.dot(Hd);if(E>=0&&S<=E)return i.copy(c);const b=S*g-p*E;if(b<=0&&g>=0&&E<=0)return d=g/(g-E),i.copy(s).addScaledVector(Kr,d);const M=_*E-S*m;if(M<=0&&m-_>=0&&S-E>=0)return $_.subVectors(c,l),d=(m-_)/(m-_+(S-E)),i.copy(l).addScaledVector($_,d);const v=1/(M+b+x);return h=b*v,d=x*v,i.copy(s).addScaledVector(Qr,h).addScaledVector(Kr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const hy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fs={h:0,s:0,l:0},pc={h:0,s:0,l:0};function Xd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class ue{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Le.workingColorSpace){return this.r=e,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Le.workingColorSpace){if(e=rm(e,1),i=De(i,0,1),s=De(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=Xd(h,c,e+1/3),this.g=Xd(h,c,e),this.b=Xd(h,c,e-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(e,i=ii){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ii){const s=hy[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Na(e.r),this.g=Na(e.g),this.b=Na(e.b),this}copyLinearToSRGB(e){return this.r=oo(e.r),this.g=oo(e.g),this.b=oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return Le.workingToColorSpace(Hn.copy(this),e),Math.round(De(Hn.r*255,0,255))*65536+Math.round(De(Hn.g*255,0,255))*256+Math.round(De(Hn.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Le.workingColorSpace){Le.workingToColorSpace(Hn.copy(this),i);const s=Hn.r,l=Hn.g,c=Hn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let p,g;const _=(d+h)/2;if(d===h)p=0,g=0;else{const m=h-d;switch(g=_<=.5?m/(h+d):m/(2-h-d),h){case s:p=(l-c)/m+(l<c?6:0);break;case l:p=(c-s)/m+2;break;case c:p=(s-l)/m+4;break}p/=6}return e.h=p,e.s=g,e.l=_,e}getRGB(e,i=Le.workingColorSpace){return Le.workingToColorSpace(Hn.copy(this),i),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=ii){Le.workingToColorSpace(Hn.copy(this),e);const i=Hn.r,s=Hn.g,l=Hn.b;return e!==ii?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(fs),this.setHSL(fs.h+e,fs.s+i,fs.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(fs),e.getHSL(pc);const s=Al(fs.h,pc.h,i),l=Al(fs.s,pc.s,i),c=Al(fs.l,pc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new ue;ue.NAMES=hy;let QE=0;class er extends mo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QE++}),this.uuid=go(),this.name="",this.type="Material",this.blending=ro,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sp,this.blendDst=rp,this.blendEquation=Ws,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=B_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vr,this.stencilZFail=Vr,this.stencilZPass=Vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ro&&(s.blending=this.blending),this.side!==ps&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==sp&&(s.blendSrc=this.blendSrc),this.blendDst!==rp&&(s.blendDst=this.blendDst),this.blendEquation!==Ws&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==lo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==B_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Vr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Vr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ol extends er{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Yx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const vn=new W,mc=new de;let KE=0;class En{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:KE++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=F_,this.updateRanges=[],this.gpuType=sa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)mc.fromBufferAttribute(this,i),mc.applyMatrix3(e),this.setXY(i,mc.x,mc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix3(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyMatrix4(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.applyNormalMatrix(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)vn.fromBufferAttribute(this,i),vn.transformDirection(e),this.setXYZ(i,vn.x,vn.y,vn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=io(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Zn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=io(i,this.array)),i}setX(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=io(i,this.array)),i}setY(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=io(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=io(i,this.array)),i}setW(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),s=Zn(s,this.array),l=Zn(l,this.array),c=Zn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==F_&&(e.usage=this.usage),e}}class dy extends En{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class py extends En{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class xn extends En{constructor(e,i,s){super(new Float32Array(e),i,s)}}let JE=0;const Ci=new Ye,qd=new _n,Jr=new W,mi=new $s,gl=new $s,wn=new W;class kn extends mo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=go(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uy(e)?py:dy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new me().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,i,s){return Ci.makeTranslation(e,i,s),this.applyMatrix4(Ci),this}scale(e,i,s){return Ci.makeScale(e,i,s),this.applyMatrix4(Ci),this}lookAt(e){return qd.lookAt(e),qd.updateMatrix(),this.applyMatrix4(qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Jr).negate(),this.translate(Jr.x,Jr.y,Jr.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new xn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $s);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];mi.setFromBufferAttribute(c),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tr);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new W,1/0);return}if(e){const s=this.boundingSphere.center;if(mi.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];gl.setFromBufferAttribute(d),this.morphTargetsRelative?(wn.addVectors(mi.min,gl.min),mi.expandByPoint(wn),wn.addVectors(mi.max,gl.max),mi.expandByPoint(wn)):(mi.expandByPoint(gl.min),mi.expandByPoint(gl.max))}mi.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)wn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(wn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let g=0,_=d.count;g<_;g++)wn.fromBufferAttribute(d,g),p&&(Jr.fromBufferAttribute(e,g),wn.add(Jr)),l=Math.max(l,s.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let V=0;V<s.count;V++)d[V]=new W,p[V]=new W;const g=new W,_=new W,m=new W,x=new de,S=new de,E=new de,b=new W,M=new W;function v(V,U,C){g.fromBufferAttribute(s,V),_.fromBufferAttribute(s,U),m.fromBufferAttribute(s,C),x.fromBufferAttribute(c,V),S.fromBufferAttribute(c,U),E.fromBufferAttribute(c,C),_.sub(g),m.sub(g),S.sub(x),E.sub(x);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(b.copy(_).multiplyScalar(E.y).addScaledVector(m,-S.y).multiplyScalar(H),M.copy(m).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(H),d[V].add(b),d[U].add(b),d[C].add(b),p[V].add(M),p[U].add(M),p[C].add(M))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let V=0,U=A.length;V<U;++V){const C=A[V],H=C.start,Y=C.count;for(let Q=H,pt=H+Y;Q<pt;Q+=3)v(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const N=new W,w=new W,I=new W,z=new W;function P(V){I.fromBufferAttribute(l,V),z.copy(I);const U=d[V];N.copy(U),N.sub(I.multiplyScalar(I.dot(U))).normalize(),w.crossVectors(z,U);const H=w.dot(p[V])<0?-1:1;h.setXYZW(V,N.x,N.y,N.z,H)}for(let V=0,U=A.length;V<U;++V){const C=A[V],H=C.start,Y=C.count;for(let Q=H,pt=H+Y;Q<pt;Q+=3)P(e.getX(Q+0)),P(e.getX(Q+1)),P(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new En(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,S=s.count;x<S;x++)s.setXYZ(x,0,0,0);const l=new W,c=new W,h=new W,d=new W,p=new W,g=new W,_=new W,m=new W;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),b=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,b),h.fromBufferAttribute(i,M),_.subVectors(h,c),m.subVectors(l,c),_.cross(m),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,b),g.fromBufferAttribute(s,M),d.add(_),p.add(_),g.add(_),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(M,g.x,g.y,g.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,c),m.subVectors(l,c),_.cross(m),s.setXYZ(x+0,_.x,_.y,_.z),s.setXYZ(x+1,_.x,_.y,_.z),s.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)wn.fromBufferAttribute(e,i),wn.normalize(),e.setXYZ(i,wn.x,wn.y,wn.z)}toNonIndexed(){function e(d,p){const g=d.array,_=d.itemSize,m=d.normalized,x=new g.constructor(p.length*_);let S=0,E=0;for(let b=0,M=p.length;b<M;b++){d.isInterleavedBufferAttribute?S=p[b]*d.data.stride+d.offset:S=p[b]*_;for(let v=0;v<_;v++)x[E++]=g[S++]}return new En(x,_,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new kn,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],g=e(p,s);i.setAttribute(d,g)}const c=this.morphAttributes;for(const d in c){const p=[],g=c[d];for(let _=0,m=g.length;_<m;_++){const x=g[_],S=e(x,s);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const g=h[d];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const g in p)p[g]!==void 0&&(e[g]=p[g]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const g=s[p];e.data.attributes[p]=g.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const g=this.morphAttributes[p],_=[];for(let m=0,x=g.length;m<x;m++){const S=g[m];_.push(S.toJSON(e.data))}_.length>0&&(l[p]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const g in l){const _=l[g];this.setAttribute(g,_.clone(i))}const c=e.morphAttributes;for(const g in c){const _=[],m=c[g];for(let x=0,S=m.length;x<S;x++)_.push(m[x].clone(i));this.morphAttributes[g]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let g=0,_=h.length;g<_;g++){const m=h[g];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const tx=new Ye,Gs=new lm,gc=new tr,ex=new W,vc=new W,_c=new W,xc=new W,Yd=new W,yc=new W,nx=new W,Sc=new W;class un extends _n{constructor(e=new kn,i=new Ol){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){yc.set(0,0,0);for(let p=0,g=c.length;p<g;p++){const _=d[p],m=c[p];_!==0&&(Yd.fromBufferAttribute(m,e),h?yc.addScaledVector(Yd,_):yc.addScaledVector(Yd.sub(i),_))}i.add(yc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),gc.copy(s.boundingSphere),gc.applyMatrix4(c),Gs.copy(e.ray).recast(e.near),!(gc.containsPoint(Gs.origin)===!1&&(Gs.intersectSphere(gc,ex)===null||Gs.origin.distanceToSquared(ex)>(e.far-e.near)**2))&&(tx.copy(c).invert(),Gs.copy(e.ray).applyMatrix4(tx),!(s.boundingBox!==null&&Gs.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Gs)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,g=c.attributes.uv,_=c.attributes.uv1,m=c.attributes.normal,x=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,b=x.length;E<b;E++){const M=x[E],v=h[M.materialIndex],A=Math.max(M.start,S.start),N=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let w=A,I=N;w<I;w+=3){const z=d.getX(w),P=d.getX(w+1),V=d.getX(w+2);l=Mc(this,v,e,s,g,_,m,z,P,V),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(d.count,S.start+S.count);for(let M=E,v=b;M<v;M+=3){const A=d.getX(M),N=d.getX(M+1),w=d.getX(M+2);l=Mc(this,h,e,s,g,_,m,A,N,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,b=x.length;E<b;E++){const M=x[E],v=h[M.materialIndex],A=Math.max(M.start,S.start),N=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let w=A,I=N;w<I;w+=3){const z=w,P=w+1,V=w+2;l=Mc(this,v,e,s,g,_,m,z,P,V),l&&(l.faceIndex=Math.floor(w/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),b=Math.min(p.count,S.start+S.count);for(let M=E,v=b;M<v;M+=3){const A=M,N=M+1,w=M+2;l=Mc(this,h,e,s,g,_,m,A,N,w),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function $E(o,e,i,s,l,c,h,d){let p;if(e.side===Gn?p=s.intersectTriangle(h,c,l,!0,d):p=s.intersectTriangle(l,c,h,e.side===ps,d),p===null)return null;Sc.copy(d),Sc.applyMatrix4(o.matrixWorld);const g=i.ray.origin.distanceTo(Sc);return g<i.near||g>i.far?null:{distance:g,point:Sc.clone(),object:o}}function Mc(o,e,i,s,l,c,h,d,p,g){o.getVertexPosition(d,vc),o.getVertexPosition(p,_c),o.getVertexPosition(g,xc);const _=$E(o,e,i,s,vc,_c,xc,nx);if(_){const m=new W;Hi.getBarycoord(nx,vc,_c,xc,m),l&&(_.uv=Hi.getInterpolatedAttribute(l,d,p,g,m,new de)),c&&(_.uv1=Hi.getInterpolatedAttribute(c,d,p,g,m,new de)),h&&(_.normal=Hi.getInterpolatedAttribute(h,d,p,g,m,new W),_.normal.dot(s.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:g,normal:new W,materialIndex:0};Hi.getNormal(vc,_c,xc,x.normal),_.face=x,_.barycoord=m}return _}class vo extends kn{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],g=[],_=[],m=[];let x=0,S=0;E("z","y","x",-1,-1,s,i,e,h,c,0),E("z","y","x",1,-1,s,i,-e,h,c,1),E("x","z","y",1,1,e,s,i,l,h,2),E("x","z","y",1,-1,e,s,-i,l,h,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new xn(g,3)),this.setAttribute("normal",new xn(_,3)),this.setAttribute("uv",new xn(m,2));function E(b,M,v,A,N,w,I,z,P,V,U){const C=w/P,H=I/V,Y=w/2,Q=I/2,pt=z/2,at=P+1,F=V+1;let nt=0,j=0;const ft=new W;for(let St=0;St<F;St++){const Et=St*H-Q;for(let Ht=0;Ht<at;Ht++){const oe=Ht*C-Y;ft[b]=oe*A,ft[M]=Et*N,ft[v]=pt,g.push(ft.x,ft.y,ft.z),ft[b]=0,ft[M]=0,ft[v]=z>0?1:-1,_.push(ft.x,ft.y,ft.z),m.push(Ht/P),m.push(1-St/V),nt+=1}}for(let St=0;St<V;St++)for(let Et=0;Et<P;Et++){const Ht=x+Et+at*St,oe=x+Et+at*(St+1),G=x+(Et+1)+at*(St+1),dt=x+(Et+1)+at*St;p.push(Ht,oe,dt),p.push(oe,G,dt),j+=6}d.addGroup(S,j,U),S+=j,x+=nt}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ho(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Qn(o){const e={};for(let i=0;i<o.length;i++){const s=ho(o[i]);for(const l in s)e[l]=s[l]}return e}function tT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function my(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Le.workingColorSpace}const Pl={clone:ho,merge:Qn};var eT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends er{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eT,this.fragmentShader=nT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=tT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class gy extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ra,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hs=new W,ix=new de,ax=new de;class gi extends gy{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Nl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nl*2*Math.atan(Math.tan(bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hs.x,hs.y).multiplyScalar(-e/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(hs.x,hs.y).multiplyScalar(-e/hs.z)}getViewSize(e,i){return this.getViewBounds(e,ix,ax),i.subVectors(ax,ix)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(bl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,g=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*s/g,l*=h.width/p,s*=h.height/g}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const $r=-90,to=1;class iT extends _n{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new gi($r,to,e,i);l.layers=this.layers,this.add(l);const c=new gi($r,to,e,i);c.layers=this.layers,this.add(c);const h=new gi($r,to,e,i);h.layers=this.layers,this.add(h);const d=new gi($r,to,e,i);d.layers=this.layers,this.add(d);const p=new gi($r,to,e,i);p.layers=this.layers,this.add(p);const g=new gi($r,to,e,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,p]=i;for(const g of i)this.remove(g);if(e===ra)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Hc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of i)this.add(g),g.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,g,_]=this.children,m=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,g),s.texture.generateMipmaps=b,e.setRenderTarget(s,5,l),e.render(i,_),e.setRenderTarget(m,x,S),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class vy extends Vn{constructor(e=[],i=uo,s,l,c,h,d,p,g,_){super(e,i,s,l,c,h,d,p,g,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class aT extends wi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new vy(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new vo(5,5,5),c=new an({name:"CubemapFromEquirect",uniforms:ho(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Gn,blending:Da});c.uniforms.tEquirect.value=i;const h=new un(l,c),d=i.minFilter;return i.minFilter===Qs&&(i.minFilter=aa),new iT(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}class Ks extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sT={type:"move"};class Wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,g=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(g&&e.hand){h=!0;for(const b of e.hand.values()){const M=i.getJointPose(b,s),v=this._getHandJoint(g,b);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const _=g.joints["index-finger-tip"],m=g.joints["thumb-tip"],x=_.position.distanceTo(m.position),S=.02,E=.005;g.inputState.pinching&&x>S+E?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&x<=S-E&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(sT)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),g!==null&&(g.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Ks;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class _y extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class rT extends Vn{constructor(e=null,i=1,s=1,l,c,h,d,p,g=vi,_=vi,m,x){super(null,h,d,p,g,_,l,c,m,x),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class sx extends En{constructor(e,i,s,l=1){super(e,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const eo=new Ye,rx=new Ye,Ec=[],ox=new $s,oT=new Ye,vl=new un,_l=new tr;class lT extends un{constructor(e,i,s){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new sx(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,oT)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new $s),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,eo),ox.copy(e.boundingBox).applyMatrix4(eo),this.boundingBox.union(ox)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new tr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,eo),_l.copy(e.boundingSphere).applyMatrix4(eo),this.boundingSphere.union(_l)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,h=e*c+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(e,i){const s=this.matrixWorld,l=this.count;if(vl.geometry=this.geometry,vl.material=this.material,vl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),_l.copy(this.boundingSphere),_l.applyMatrix4(s),e.ray.intersectsSphere(_l)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,eo),rx.multiplyMatrices(s,eo),vl.matrixWorld=rx,vl.raycast(e,Ec);for(let h=0,d=Ec.length;h<d;h++){const p=Ec[h];p.instanceId=c,p.object=this,i.push(p)}Ec.length=0}}setColorAt(e,i){this.instanceColor===null&&(this.instanceColor=new sx(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,i){i.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new rT(new Float32Array(l*this.count),l,this.count,nm,sa));const c=this.morphTexture.source.data.data;let h=0;for(let g=0;g<s.length;g++)h+=s[g];const d=this.geometry.morphTargetsRelative?1:1-h,p=l*e;c[p]=d,c.set(s,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const jd=new W,uT=new W,cT=new me;class qs{constructor(e=new W(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=jd.subVectors(s,i).cross(uT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(jd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||cT.getNormalMatrix(e),l=this.coplanarPoint(jd).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vs=new tr,fT=new de(.5,.5),Tc=new W;class um{constructor(e=new qs,i=new qs,s=new qs,l=new qs,c=new qs,h=new qs){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ra,s=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],p=c[2],g=c[3],_=c[4],m=c[5],x=c[6],S=c[7],E=c[8],b=c[9],M=c[10],v=c[11],A=c[12],N=c[13],w=c[14],I=c[15];if(l[0].setComponents(g-h,S-_,v-E,I-A).normalize(),l[1].setComponents(g+h,S+_,v+E,I+A).normalize(),l[2].setComponents(g+d,S+m,v+b,I+N).normalize(),l[3].setComponents(g-d,S-m,v-b,I-N).normalize(),s)l[4].setComponents(p,x,M,w).normalize(),l[5].setComponents(g-p,S-x,v-M,I-w).normalize();else if(l[4].setComponents(g-p,S-x,v-M,I-w).normalize(),i===ra)l[5].setComponents(g+p,S+x,v+M,I+w).normalize();else if(i===Hc)l[5].setComponents(p,x,M,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vs)}intersectsSprite(e){Vs.center.set(0,0,0);const i=fT.distanceTo(e.center);return Vs.radius=.7071067811865476+i,Vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vs)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Tc.x=l.normal.x>0?e.max.x:e.min.x,Tc.y=l.normal.y>0?e.max.y:e.min.y,Tc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hT extends er{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vc=new W,kc=new W,lx=new Ye,xl=new lm,bc=new tr,Zd=new W,ux=new W;class xy extends _n{constructor(e=new kn,i=new hT){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)Vc.fromBufferAttribute(i,l-1),kc.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=Vc.distanceTo(kc);e.setAttribute("lineDistance",new xn(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),bc.copy(s.boundingSphere),bc.applyMatrix4(l),bc.radius+=c,e.ray.intersectsSphere(bc)===!1)return;lx.copy(l).invert(),xl.copy(e.ray).applyMatrix4(lx);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,g=this.isLineSegments?2:1,_=s.index,x=s.attributes.position;if(_!==null){const S=Math.max(0,h.start),E=Math.min(_.count,h.start+h.count);for(let b=S,M=E-1;b<M;b+=g){const v=_.getX(b),A=_.getX(b+1),N=Ac(this,e,xl,p,v,A,b);N&&i.push(N)}if(this.isLineLoop){const b=_.getX(E-1),M=_.getX(S),v=Ac(this,e,xl,p,b,M,E-1);v&&i.push(v)}}else{const S=Math.max(0,h.start),E=Math.min(x.count,h.start+h.count);for(let b=S,M=E-1;b<M;b+=g){const v=Ac(this,e,xl,p,b,b+1,b);v&&i.push(v)}if(this.isLineLoop){const b=Ac(this,e,xl,p,E-1,S,E-1);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Ac(o,e,i,s,l,c,h){const d=o.geometry.attributes.position;if(Vc.fromBufferAttribute(d,l),kc.fromBufferAttribute(d,c),i.distanceSqToSegment(Vc,kc,Zd,ux)>s)return;Zd.applyMatrix4(o.matrixWorld);const g=e.ray.origin.distanceTo(Zd);if(!(g<e.near||g>e.far))return{distance:g,point:ux.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const cx=new W,fx=new W;class dT extends xy{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)cx.fromBufferAttribute(i,l),fx.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+cx.distanceTo(fx);e.setAttribute("lineDistance",new xn(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pT extends er{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hx=new Ye,Yp=new lm,Rc=new tr,Cc=new W;class yy extends _n{constructor(e=new kn,i=new pT){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(l),Rc.radius+=c,e.ray.intersectsSphere(Rc)===!1)return;hx.copy(l).invert(),Yp.copy(e.ray).applyMatrix4(hx);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,g=s.index,m=s.attributes.position;if(g!==null){const x=Math.max(0,h.start),S=Math.min(g.count,h.start+h.count);for(let E=x,b=S;E<b;E++){const M=g.getX(E);Cc.fromBufferAttribute(m,M),dx(Cc,M,p,l,e,i,this)}}else{const x=Math.max(0,h.start),S=Math.min(m.count,h.start+h.count);for(let E=x,b=S;E<b;E++)Cc.fromBufferAttribute(m,E),dx(Cc,E,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function dx(o,e,i,s,l,c,h){const d=Yp.distanceSqToPoint(o);if(d<i){const p=new W;Yp.closestPointToPoint(o,p),p.applyMatrix4(s);const g=l.ray.origin.distanceTo(p);if(g<l.near||g>l.far)return;c.push({distance:g,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class mT extends Vn{constructor(e,i,s,l,c,h,d,p,g){super(e,i,s,l,c,h,d,p,g),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sy extends Vn{constructor(e,i,s=Js,l,c,h,d=vi,p=vi,g,_=Dl,m=1){if(_!==Dl&&_!==Ul)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:m};super(x,l,c,h,d,p,_,s,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new om(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class My extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class cm extends kn{constructor(e=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:s,detail:l};const c=[],h=[];d(l),g(s),_(),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(c.slice(),3)),this.setAttribute("uv",new xn(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(A){const N=new W,w=new W,I=new W;for(let z=0;z<i.length;z+=3)S(i[z+0],N),S(i[z+1],w),S(i[z+2],I),p(N,w,I,A)}function p(A,N,w,I){const z=I+1,P=[];for(let V=0;V<=z;V++){P[V]=[];const U=A.clone().lerp(w,V/z),C=N.clone().lerp(w,V/z),H=z-V;for(let Y=0;Y<=H;Y++)Y===0&&V===z?P[V][Y]=U:P[V][Y]=U.clone().lerp(C,Y/H)}for(let V=0;V<z;V++)for(let U=0;U<2*(z-V)-1;U++){const C=Math.floor(U/2);U%2===0?(x(P[V][C+1]),x(P[V+1][C]),x(P[V][C])):(x(P[V][C+1]),x(P[V+1][C+1]),x(P[V+1][C]))}}function g(A){const N=new W;for(let w=0;w<c.length;w+=3)N.x=c[w+0],N.y=c[w+1],N.z=c[w+2],N.normalize().multiplyScalar(A),c[w+0]=N.x,c[w+1]=N.y,c[w+2]=N.z}function _(){const A=new W;for(let N=0;N<c.length;N+=3){A.x=c[N+0],A.y=c[N+1],A.z=c[N+2];const w=M(A)/2/Math.PI+.5,I=v(A)/Math.PI+.5;h.push(w,1-I)}E(),m()}function m(){for(let A=0;A<h.length;A+=6){const N=h[A+0],w=h[A+2],I=h[A+4],z=Math.max(N,w,I),P=Math.min(N,w,I);z>.9&&P<.1&&(N<.2&&(h[A+0]+=1),w<.2&&(h[A+2]+=1),I<.2&&(h[A+4]+=1))}}function x(A){c.push(A.x,A.y,A.z)}function S(A,N){const w=A*3;N.x=e[w+0],N.y=e[w+1],N.z=e[w+2]}function E(){const A=new W,N=new W,w=new W,I=new W,z=new de,P=new de,V=new de;for(let U=0,C=0;U<c.length;U+=9,C+=6){A.set(c[U+0],c[U+1],c[U+2]),N.set(c[U+3],c[U+4],c[U+5]),w.set(c[U+6],c[U+7],c[U+8]),z.set(h[C+0],h[C+1]),P.set(h[C+2],h[C+3]),V.set(h[C+4],h[C+5]),I.copy(A).add(N).add(w).divideScalar(3);const H=M(I);b(z,C+0,A,H),b(P,C+2,N,H),b(V,C+4,w,H)}}function b(A,N,w,I){I<0&&A.x===1&&(h[N]=A.x-1),w.x===0&&w.z===0&&(h[N]=I/2/Math.PI+.5)}function M(A){return Math.atan2(A.z,-A.x)}function v(A){return Math.atan2(-A.y,Math.sqrt(A.x*A.x+A.z*A.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cm(e.vertices,e.indices,e.radius,e.details)}}class fm extends cm{constructor(e=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new fm(e.radius,e.detail)}}class _o extends kn{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(s),p=Math.floor(l),g=d+1,_=p+1,m=e/d,x=i/p,S=[],E=[],b=[],M=[];for(let v=0;v<_;v++){const A=v*x-h;for(let N=0;N<g;N++){const w=N*m-c;E.push(w,-A,0),b.push(0,0,1),M.push(N/d),M.push(1-v/p)}}for(let v=0;v<p;v++)for(let A=0;A<d;A++){const N=A+g*v,w=A+g*(v+1),I=A+1+g*(v+1),z=A+1+g*v;S.push(N,w,z),S.push(w,I,z)}this.setIndex(S),this.setAttribute("position",new xn(E,3)),this.setAttribute("normal",new xn(b,3)),this.setAttribute("uv",new xn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.widthSegments,e.heightSegments)}}class hm extends kn{constructor(e=.5,i=1,s=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:h},s=Math.max(3,s),l=Math.max(1,l);const d=[],p=[],g=[],_=[];let m=e;const x=(i-e)/l,S=new W,E=new de;for(let b=0;b<=l;b++){for(let M=0;M<=s;M++){const v=c+M/s*h;S.x=m*Math.cos(v),S.y=m*Math.sin(v),p.push(S.x,S.y,S.z),g.push(0,0,1),E.x=(S.x/i+1)/2,E.y=(S.y/i+1)/2,_.push(E.x,E.y)}m+=x}for(let b=0;b<l;b++){const M=b*(s+1);for(let v=0;v<s;v++){const A=v+M,N=A,w=A+s+1,I=A+s+2,z=A+1;d.push(N,w,z),d.push(w,I,z)}}this.setIndex(d),this.setAttribute("position",new xn(p,3)),this.setAttribute("normal",new xn(g,3)),this.setAttribute("uv",new xn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hm(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class zl extends kn{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(h+d,Math.PI);let g=0;const _=[],m=new W,x=new W,S=[],E=[],b=[],M=[];for(let v=0;v<=s;v++){const A=[],N=v/s;let w=0;v===0&&h===0?w=.5/i:v===s&&p===Math.PI&&(w=-.5/i);for(let I=0;I<=i;I++){const z=I/i;m.x=-e*Math.cos(l+z*c)*Math.sin(h+N*d),m.y=e*Math.cos(h+N*d),m.z=e*Math.sin(l+z*c)*Math.sin(h+N*d),E.push(m.x,m.y,m.z),x.copy(m).normalize(),b.push(x.x,x.y,x.z),M.push(z+w,1-N),A.push(g++)}_.push(A)}for(let v=0;v<s;v++)for(let A=0;A<i;A++){const N=_[v][A+1],w=_[v][A],I=_[v+1][A],z=_[v+1][A+1];(v!==0||h>0)&&S.push(N,w,z),(v!==s-1||p<Math.PI)&&S.push(w,I,z)}this.setIndex(S),this.setAttribute("position",new xn(E,3)),this.setAttribute("normal",new xn(b,3)),this.setAttribute("uv",new xn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class gT extends an{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vT extends er{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=oy,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _T extends er{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=uE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class xT extends er{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ey extends _n{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class yT extends Ey{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Qd=new Ye,px=new W,mx=new W;class ST{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=ki,this.map=null,this.mapPass=null,this.matrix=new Ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new um,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;px.setFromMatrixPosition(e.matrixWorld),i.position.copy(px),mx.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(mx),i.updateMatrixWorld(),Qd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Qd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class dm extends gy{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=g*this.view.offsetX,h=c+g*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class MT extends ST{constructor(){super(new dm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ET extends Ey{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new MT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class TT extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ty{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function gx(o,e,i,s){const l=bT(s);switch(i){case ay:return o*e;case nm:return o*e/l.components*l.byteLength;case im:return o*e/l.components*l.byteLength;case ry:return o*e*2/l.components*l.byteLength;case am:return o*e*2/l.components*l.byteLength;case sy:return o*e*3/l.components*l.byteLength;case Gi:return o*e*4/l.components*l.byteLength;case sm:return o*e*4/l.components*l.byteLength;case Lc:case Oc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Pc:case zc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xp:case Sp:return Math.max(o,16)*Math.max(e,8)/4;case _p:case yp:return Math.max(o,8)*Math.max(e,8)/2;case Mp:case Ep:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Tp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case bp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ap:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Rp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Cp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case wp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Dp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Up:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Np:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Lp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Op:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Pp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case zp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ip:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Bp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Fp:case Hp:case Gp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Vp:case kp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Xp:case qp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function bT(o){switch(o){case ki:case ty:return{byteLength:1,components:1};case Cl:case ey:case Vi:return{byteLength:2,components:1};case tm:case em:return{byteLength:2,components:4};case Js:case $p:case sa:return{byteLength:4,components:1};case ny:case iy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function by(){let o=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function AT(o){const e=new WeakMap;function i(d,p){const g=d.array,_=d.usage,m=g.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,g,_),d.onUploadCallback();let S;if(g instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)S=o.HALF_FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)S=o.SHORT;else if(g instanceof Uint32Array)S=o.UNSIGNED_INT;else if(g instanceof Int32Array)S=o.INT;else if(g instanceof Int8Array)S=o.BYTE;else if(g instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:x,type:S,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:m}}function s(d,p,g){const _=p.array,m=p.updateRanges;if(o.bindBuffer(g,d),m.length===0)o.bufferSubData(g,0,_);else{m.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<m.length;S++){const E=m[x],b=m[S];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++x,m[x]=b)}m.length=x+1;for(let S=0,E=m.length;S<E;S++){const b=m[S];o.bufferSubData(g,b.start*_.BYTES_PER_ELEMENT,_,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=e.get(d);if(g===void 0)e.set(d,i(d,p));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(g.buffer,d,p),g.version=d.version}}return{get:l,remove:c,update:h}}var RT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CT=`#ifdef USE_ALPHAHASH
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
#endif`,wT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,UT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LT=`#ifdef USE_AOMAP
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
#endif`,OT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,PT=`#ifdef USE_BATCHING
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
#endif`,zT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,IT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,FT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,HT=`#ifdef USE_IRIDESCENCE
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
#endif`,GT=`#ifdef USE_BUMPMAP
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
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,WT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ZT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,QT=`#define PI 3.141592653589793
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
} // validated`,KT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,JT=`vec3 transformedNormal = objectNormal;
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
#endif`,$T=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,eb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ib="gl_FragColor = linearToOutputTexel( gl_FragColor );",ab=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sb=`#ifdef USE_ENVMAP
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
#endif`,rb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ob=`#ifdef USE_ENVMAP
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
#endif`,lb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ub=`#ifdef USE_ENVMAP
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
#endif`,cb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,db=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pb=`#ifdef USE_GRADIENTMAP
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
}`,mb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_b=`uniform bool receiveShadow;
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
#endif`,xb=`#ifdef USE_ENVMAP
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
#endif`,yb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Mb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tb=`PhysicalMaterial material;
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
#endif`,bb=`struct PhysicalMaterial {
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
}`,Ab=`
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
#endif`,Rb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Cb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Db=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ub=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ob=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Pb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zb=`#if defined( USE_POINTS_UV )
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
#endif`,Ib=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Fb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vb=`#ifdef USE_MORPHTARGETS
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
#endif`,kb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,qb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zb=`#ifdef USE_NORMALMAP
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
#endif`,Qb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Kb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$b=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,tA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,nA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,iA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,lA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fA=`float getShadowMask() {
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
}`,hA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dA=`#ifdef USE_SKINNING
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
#endif`,pA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mA=`#ifdef USE_SKINNING
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
#endif`,gA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_A=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yA=`#ifdef USE_TRANSMISSION
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
#endif`,SA=`#ifdef USE_TRANSMISSION
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
#endif`,MA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const AA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RA=`uniform sampler2D t2D;
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
}`,CA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,DA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NA=`#include <common>
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
}`,LA=`#if DEPTH_PACKING == 3200
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
}`,OA=`#define DISTANCE
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
}`,PA=`#define DISTANCE
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
}`,zA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BA=`uniform float scale;
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
}`,FA=`uniform vec3 diffuse;
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
}`,HA=`#include <common>
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
}`,GA=`uniform vec3 diffuse;
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
}`,VA=`#define LAMBERT
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
}`,kA=`#define LAMBERT
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
}`,XA=`#define MATCAP
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
}`,qA=`#define MATCAP
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
}`,YA=`#define NORMAL
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
}`,WA=`#define NORMAL
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
}`,jA=`#define PHONG
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
}`,ZA=`#define PHONG
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
}`,QA=`#define STANDARD
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
}`,KA=`#define STANDARD
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
}`,JA=`#define TOON
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
}`,$A=`#define TOON
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
}`,t2=`uniform float size;
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
}`,e2=`uniform vec3 diffuse;
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
}`,n2=`#include <common>
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
}`,i2=`uniform vec3 color;
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
}`,a2=`uniform float rotation;
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
}`,s2=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:RT,alphahash_pars_fragment:CT,alphamap_fragment:wT,alphamap_pars_fragment:DT,alphatest_fragment:UT,alphatest_pars_fragment:NT,aomap_fragment:LT,aomap_pars_fragment:OT,batching_pars_vertex:PT,batching_vertex:zT,begin_vertex:IT,beginnormal_vertex:BT,bsdfs:FT,iridescence_fragment:HT,bumpmap_pars_fragment:GT,clipping_planes_fragment:VT,clipping_planes_pars_fragment:kT,clipping_planes_pars_vertex:XT,clipping_planes_vertex:qT,color_fragment:YT,color_pars_fragment:WT,color_pars_vertex:jT,color_vertex:ZT,common:QT,cube_uv_reflection_fragment:KT,defaultnormal_vertex:JT,displacementmap_pars_vertex:$T,displacementmap_vertex:tb,emissivemap_fragment:eb,emissivemap_pars_fragment:nb,colorspace_fragment:ib,colorspace_pars_fragment:ab,envmap_fragment:sb,envmap_common_pars_fragment:rb,envmap_pars_fragment:ob,envmap_pars_vertex:lb,envmap_physical_pars_fragment:xb,envmap_vertex:ub,fog_vertex:cb,fog_pars_vertex:fb,fog_fragment:hb,fog_pars_fragment:db,gradientmap_pars_fragment:pb,lightmap_pars_fragment:mb,lights_lambert_fragment:gb,lights_lambert_pars_fragment:vb,lights_pars_begin:_b,lights_toon_fragment:yb,lights_toon_pars_fragment:Sb,lights_phong_fragment:Mb,lights_phong_pars_fragment:Eb,lights_physical_fragment:Tb,lights_physical_pars_fragment:bb,lights_fragment_begin:Ab,lights_fragment_maps:Rb,lights_fragment_end:Cb,logdepthbuf_fragment:wb,logdepthbuf_pars_fragment:Db,logdepthbuf_pars_vertex:Ub,logdepthbuf_vertex:Nb,map_fragment:Lb,map_pars_fragment:Ob,map_particle_fragment:Pb,map_particle_pars_fragment:zb,metalnessmap_fragment:Ib,metalnessmap_pars_fragment:Bb,morphinstance_vertex:Fb,morphcolor_vertex:Hb,morphnormal_vertex:Gb,morphtarget_pars_vertex:Vb,morphtarget_vertex:kb,normal_fragment_begin:Xb,normal_fragment_maps:qb,normal_pars_fragment:Yb,normal_pars_vertex:Wb,normal_vertex:jb,normalmap_pars_fragment:Zb,clearcoat_normal_fragment_begin:Qb,clearcoat_normal_fragment_maps:Kb,clearcoat_pars_fragment:Jb,iridescence_pars_fragment:$b,opaque_fragment:tA,packing:eA,premultiplied_alpha_fragment:nA,project_vertex:iA,dithering_fragment:aA,dithering_pars_fragment:sA,roughnessmap_fragment:rA,roughnessmap_pars_fragment:oA,shadowmap_pars_fragment:lA,shadowmap_pars_vertex:uA,shadowmap_vertex:cA,shadowmask_pars_fragment:fA,skinbase_vertex:hA,skinning_pars_vertex:dA,skinning_vertex:pA,skinnormal_vertex:mA,specularmap_fragment:gA,specularmap_pars_fragment:vA,tonemapping_fragment:_A,tonemapping_pars_fragment:xA,transmission_fragment:yA,transmission_pars_fragment:SA,uv_pars_fragment:MA,uv_pars_vertex:EA,uv_vertex:TA,worldpos_vertex:bA,background_vert:AA,background_frag:RA,backgroundCube_vert:CA,backgroundCube_frag:wA,cube_vert:DA,cube_frag:UA,depth_vert:NA,depth_frag:LA,distanceRGBA_vert:OA,distanceRGBA_frag:PA,equirect_vert:zA,equirect_frag:IA,linedashed_vert:BA,linedashed_frag:FA,meshbasic_vert:HA,meshbasic_frag:GA,meshlambert_vert:VA,meshlambert_frag:kA,meshmatcap_vert:XA,meshmatcap_frag:qA,meshnormal_vert:YA,meshnormal_frag:WA,meshphong_vert:jA,meshphong_frag:ZA,meshphysical_vert:QA,meshphysical_frag:KA,meshtoon_vert:JA,meshtoon_frag:$A,points_vert:t2,points_frag:e2,shadow_vert:n2,shadow_frag:i2,sprite_vert:a2,sprite_frag:s2},kt={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new me}},envmap:{envMap:{value:null},envMapRotation:{value:new me},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new me}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new me}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new me},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new me},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new me},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new me}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new me}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new me}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0},uvTransform:{value:new me}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new me},alphaMap:{value:null},alphaMapTransform:{value:new me},alphaTest:{value:0}}},na={basic:{uniforms:Qn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Qn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ue(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Qn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Qn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Qn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new ue(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Qn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Qn([kt.points,kt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Qn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Qn([kt.common,kt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Qn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Qn([kt.sprite,kt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new me},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new me}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:Qn([kt.common,kt.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:Qn([kt.lights,kt.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};na.physical={uniforms:Qn([na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new me},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new me},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new me},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new me},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new me},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new me},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new me},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new me},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new me},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new me},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new me},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new me}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const wc={r:0,b:0,g:0},ks=new Di,r2=new Ye;function o2(o,e,i,s,l,c,h){const d=new ue(0);let p=c===!0?0:1,g,_,m=null,x=0,S=null;function E(N){let w=N.isScene===!0?N.background:null;return w&&w.isTexture&&(w=(N.backgroundBlurriness>0?i:e).get(w)),w}function b(N){let w=!1;const I=E(N);I===null?v(d,p):I&&I.isColor&&(v(I,1),w=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(N,w){const I=E(w);I&&(I.isCubeTexture||I.mapping===Xc)?(_===void 0&&(_=new un(new vo(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:ho(na.backgroundCube.uniforms),vertexShader:na.backgroundCube.vertexShader,fragmentShader:na.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,P,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),ks.copy(w.backgroundRotation),ks.x*=-1,ks.y*=-1,ks.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(ks.y*=-1,ks.z*=-1),_.material.uniforms.envMap.value=I,_.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(r2.makeRotationFromEuler(ks)),_.material.toneMapped=Le.getTransfer(I.colorSpace)!==qe,(m!==I||x!==I.version||S!==o.toneMapping)&&(_.material.needsUpdate=!0,m=I,x=I.version,S=o.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):I&&I.isTexture&&(g===void 0&&(g=new un(new _o(2,2),new an({name:"BackgroundMaterial",uniforms:ho(na.background.uniforms),vertexShader:na.background.vertexShader,fragmentShader:na.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(g)),g.material.uniforms.t2D.value=I,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.toneMapped=Le.getTransfer(I.colorSpace)!==qe,I.matrixAutoUpdate===!0&&I.updateMatrix(),g.material.uniforms.uvTransform.value.copy(I.matrix),(m!==I||x!==I.version||S!==o.toneMapping)&&(g.material.needsUpdate=!0,m=I,x=I.version,S=o.toneMapping),g.layers.enableAll(),N.unshift(g,g.geometry,g.material,0,0,null))}function v(N,w){N.getRGB(wc,my(o)),s.buffers.color.setClear(wc.r,wc.g,wc.b,w,h)}function A(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,w=1){d.set(N),p=w,v(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,v(d,p)},render:b,addToRenderList:M,dispose:A}}function l2(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let c=l,h=!1;function d(C,H,Y,Q,pt){let at=!1;const F=m(Q,Y,H);c!==F&&(c=F,g(c.object)),at=S(C,Q,Y,pt),at&&E(C,Q,Y,pt),pt!==null&&e.update(pt,o.ELEMENT_ARRAY_BUFFER),(at||h)&&(h=!1,w(C,H,Y,Q),pt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(pt).buffer))}function p(){return o.createVertexArray()}function g(C){return o.bindVertexArray(C)}function _(C){return o.deleteVertexArray(C)}function m(C,H,Y){const Q=Y.wireframe===!0;let pt=s[C.id];pt===void 0&&(pt={},s[C.id]=pt);let at=pt[H.id];at===void 0&&(at={},pt[H.id]=at);let F=at[Q];return F===void 0&&(F=x(p()),at[Q]=F),F}function x(C){const H=[],Y=[],Q=[];for(let pt=0;pt<i;pt++)H[pt]=0,Y[pt]=0,Q[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:Q,object:C,attributes:{},index:null}}function S(C,H,Y,Q){const pt=c.attributes,at=H.attributes;let F=0;const nt=Y.getAttributes();for(const j in nt)if(nt[j].location>=0){const St=pt[j];let Et=at[j];if(Et===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(Et=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(Et=C.instanceColor)),St===void 0||St.attribute!==Et||Et&&St.data!==Et.data)return!0;F++}return c.attributesNum!==F||c.index!==Q}function E(C,H,Y,Q){const pt={},at=H.attributes;let F=0;const nt=Y.getAttributes();for(const j in nt)if(nt[j].location>=0){let St=at[j];St===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(St=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(St=C.instanceColor));const Et={};Et.attribute=St,St&&St.data&&(Et.data=St.data),pt[j]=Et,F++}c.attributes=pt,c.attributesNum=F,c.index=Q}function b(){const C=c.newAttributes;for(let H=0,Y=C.length;H<Y;H++)C[H]=0}function M(C){v(C,0)}function v(C,H){const Y=c.newAttributes,Q=c.enabledAttributes,pt=c.attributeDivisors;Y[C]=1,Q[C]===0&&(o.enableVertexAttribArray(C),Q[C]=1),pt[C]!==H&&(o.vertexAttribDivisor(C,H),pt[C]=H)}function A(){const C=c.newAttributes,H=c.enabledAttributes;for(let Y=0,Q=H.length;Y<Q;Y++)H[Y]!==C[Y]&&(o.disableVertexAttribArray(Y),H[Y]=0)}function N(C,H,Y,Q,pt,at,F){F===!0?o.vertexAttribIPointer(C,H,Y,pt,at):o.vertexAttribPointer(C,H,Y,Q,pt,at)}function w(C,H,Y,Q){b();const pt=Q.attributes,at=Y.getAttributes(),F=H.defaultAttributeValues;for(const nt in at){const j=at[nt];if(j.location>=0){let ft=pt[nt];if(ft===void 0&&(nt==="instanceMatrix"&&C.instanceMatrix&&(ft=C.instanceMatrix),nt==="instanceColor"&&C.instanceColor&&(ft=C.instanceColor)),ft!==void 0){const St=ft.normalized,Et=ft.itemSize,Ht=e.get(ft);if(Ht===void 0)continue;const oe=Ht.buffer,G=Ht.type,dt=Ht.bytesPerElement,k=G===o.INT||G===o.UNSIGNED_INT||ft.gpuType===$p;if(ft.isInterleavedBufferAttribute){const K=ft.data,mt=K.stride,Tt=ft.offset;if(K.isInstancedInterleavedBuffer){for(let bt=0;bt<j.locationSize;bt++)v(j.location+bt,K.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let bt=0;bt<j.locationSize;bt++)M(j.location+bt);o.bindBuffer(o.ARRAY_BUFFER,oe);for(let bt=0;bt<j.locationSize;bt++)N(j.location+bt,Et/j.locationSize,G,St,mt*dt,(Tt+Et/j.locationSize*bt)*dt,k)}else{if(ft.isInstancedBufferAttribute){for(let K=0;K<j.locationSize;K++)v(j.location+K,ft.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let K=0;K<j.locationSize;K++)M(j.location+K);o.bindBuffer(o.ARRAY_BUFFER,oe);for(let K=0;K<j.locationSize;K++)N(j.location+K,Et/j.locationSize,G,St,Et*dt,Et/j.locationSize*K*dt,k)}}else if(F!==void 0){const St=F[nt];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(j.location,St);break;case 3:o.vertexAttrib3fv(j.location,St);break;case 4:o.vertexAttrib4fv(j.location,St);break;default:o.vertexAttrib1fv(j.location,St)}}}}A()}function I(){V();for(const C in s){const H=s[C];for(const Y in H){const Q=H[Y];for(const pt in Q)_(Q[pt].object),delete Q[pt];delete H[Y]}delete s[C]}}function z(C){if(s[C.id]===void 0)return;const H=s[C.id];for(const Y in H){const Q=H[Y];for(const pt in Q)_(Q[pt].object),delete Q[pt];delete H[Y]}delete s[C.id]}function P(C){for(const H in s){const Y=s[H];if(Y[C.id]===void 0)continue;const Q=Y[C.id];for(const pt in Q)_(Q[pt].object),delete Q[pt];delete Y[C.id]}}function V(){U(),h=!0,c!==l&&(c=l,g(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:z,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:M,disableUnusedAttributes:A}}function u2(o,e,i){let s;function l(g){s=g}function c(g,_){o.drawArrays(s,g,_),i.update(_,s,1)}function h(g,_,m){m!==0&&(o.drawArraysInstanced(s,g,_,m),i.update(_,s,m))}function d(g,_,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,_,0,m);let S=0;for(let E=0;E<m;E++)S+=_[E];i.update(S,s,1)}function p(g,_,m,x){if(m===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<g.length;E++)h(g[E],_[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(s,g,0,_,0,x,0,m);let E=0;for(let b=0;b<m;b++)E+=_[b]*x[b];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function c2(o,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Gi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const V=P===Vi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==ki&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==sa&&!V)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const _=p(g);_!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",_,"instead."),g=_);const m=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),A=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=E>0,z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:m,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:A,maxVaryings:N,maxFragmentUniforms:w,vertexTextures:I,maxSamples:z}}function f2(o){const e=this;let i=null,s=0,l=!1,c=!1;const h=new qs,d=new me,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,x){const S=m.length!==0||x||s!==0||l;return l=x,s=m.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(m,x){i=_(m,x,0)},this.setState=function(m,x,S){const E=m.clippingPlanes,b=m.clipIntersection,M=m.clipShadows,v=o.get(m);if(!l||E===null||E.length===0||c&&!M)c?_(null):g();else{const A=c?0:s,N=A*4;let w=v.clippingState||null;p.value=w,w=_(E,x,N,S);for(let I=0;I!==N;++I)w[I]=i[I];v.clippingState=w,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=A}};function g(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function _(m,x,S,E){const b=m!==null?m.length:0;let M=null;if(b!==0){if(M=p.value,E!==!0||M===null){const v=S+b*4,A=x.matrixWorldInverse;d.getNormalMatrix(A),(M===null||M.length<v)&&(M=new Float32Array(v));for(let N=0,w=S;N!==b;++N,w+=4)h.copy(m[N]).applyMatrix4(A,d),h.normal.toArray(M,w),M[w+3]=h.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,M}}function h2(o){let e=new WeakMap;function i(h,d){return d===pp?h.mapping=uo:d===mp&&(h.mapping=co),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===pp||d===mp)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const g=new aT(p.height);return g.fromEquirectangularTexture(o,h),e.set(h,g),h.addEventListener("dispose",l),i(g.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const so=4,vx=[.125,.215,.35,.446,.526,.582],js=20,Kd=new dm,_x=new ue;let Jd=null,$d=0,tp=0,ep=!1;const Ys=(1+Math.sqrt(5))/2,no=1/Ys,xx=[new W(-Ys,no,0),new W(Ys,no,0),new W(-no,0,Ys),new W(no,0,Ys),new W(0,Ys,-no),new W(0,Ys,no),new W(-1,1,-1),new W(1,1,-1),new W(-1,1,1),new W(1,1,1)],d2=new W;class yx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=d2}=c;Jd=this._renderer.getRenderTarget(),$d=this._renderer.getActiveCubeFace(),tp=this._renderer.getActiveMipmapLevel(),ep=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ex(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jd,$d,tp),this._renderer.xr.enabled=ep,e.scissorTest=!1,Dc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===uo||e.mapping===co?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jd=this._renderer.getRenderTarget(),$d=this._renderer.getActiveCubeFace(),tp=this._renderer.getActiveMipmapLevel(),ep=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:aa,minFilter:aa,generateMipmaps:!1,type:Vi,format:Gi,colorSpace:fo,depthBuffer:!1},l=Sx(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sx(e,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=p2(c)),this._blurMaterial=m2(c,e,i)}return l}_compileMaterial(e){const i=new un(this._lodPlanes[0],e);this._renderer.compile(i,Kd)}_sceneToCubeUV(e,i,s,l,c){const p=new gi(90,1,i,s),g=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],m=this._renderer,x=m.autoClear,S=m.toneMapping;m.getClearColor(_x),m.toneMapping=Ua,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(l),m.clearDepth(),m.setRenderTarget(null));const b=new Ol({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),M=new un(new vo,b);let v=!1;const A=e.background;A?A.isColor&&(b.color.copy(A),e.background=null,v=!0):(b.color.copy(_x),v=!0);for(let N=0;N<6;N++){const w=N%3;w===0?(p.up.set(0,g[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[N],c.y,c.z)):w===1?(p.up.set(0,0,g[N]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[N],c.z)):(p.up.set(0,g[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[N]));const I=this._cubeSize;Dc(l,w*I,N>2?I:0,I,I),m.setRenderTarget(l),v&&m.render(M,p),m.render(e,p)}M.geometry.dispose(),M.material.dispose(),m.toneMapping=S,m.autoClear=x,e.background=A}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===uo||e.mapping===co;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ex()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Mx());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new un(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;Dc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,Kd)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=xx[(l-c-1)%xx.length];this._blur(e,c-1,c,h,d)}i.autoClear=s}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,d){const p=this._renderer,g=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,m=new un(this._lodPlanes[l],g),x=g.uniforms,S=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*js-1),b=c/E,M=isFinite(c)?1+Math.floor(_*b):js;M>js&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${js}`);const v=[];let A=0;for(let P=0;P<js;++P){const V=P/b,U=Math.exp(-V*V/2);v.push(U),P===0?A+=U:P<M&&(A+=2*U)}for(let P=0;P<v.length;P++)v[P]=v[P]/A;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=v,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=E,x.mipInt.value=N-s;const w=this._sizeLods[l],I=3*w*(l>N-so?l-N+so:0),z=4*(this._cubeSize-w);Dc(i,I,z,3*w,2*w),p.setRenderTarget(i),p.render(m,Kd)}}function p2(o){const e=[],i=[],s=[];let l=o;const c=o-so+1+vx.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-so?p=vx[h-o+so-1]:h===0&&(p=0),s.push(p);const g=1/(d-2),_=-g,m=1+g,x=[_,_,m,_,m,m,_,_,m,m,_,m],S=6,E=6,b=3,M=2,v=1,A=new Float32Array(b*E*S),N=new Float32Array(M*E*S),w=new Float32Array(v*E*S);for(let z=0;z<S;z++){const P=z%3*2/3-1,V=z>2?0:-1,U=[P,V,0,P+2/3,V,0,P+2/3,V+1,0,P,V,0,P+2/3,V+1,0,P,V+1,0];A.set(U,b*E*z),N.set(x,M*E*z);const C=[z,z,z,z,z,z];w.set(C,v*E*z)}const I=new kn;I.setAttribute("position",new En(A,b)),I.setAttribute("uv",new En(N,M)),I.setAttribute("faceIndex",new En(w,v)),e.push(I),l>so&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function Sx(o,e,i){const s=new wi(o,e,i);return s.texture.mapping=Xc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Dc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function m2(o,e,i){const s=new Float32Array(js),l=new W(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:pm(),fragmentShader:`

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
		`,blending:Da,depthTest:!1,depthWrite:!1})}function Mx(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pm(),fragmentShader:`

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
		`,blending:Da,depthTest:!1,depthWrite:!1})}function Ex(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function pm(){return`

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
	`}function g2(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,g=p===pp||p===mp,_=p===uo||p===co;if(g||_){let m=e.get(d);const x=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new yx(o)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const S=d.image;return g&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new yx(o)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",c),m.texture):null}}}return d}function l(d){let p=0;const g=6;for(let _=0;_<g;_++)d[_]!==void 0&&p++;return p===g}function c(d){const p=d.target;p.removeEventListener("dispose",c);const g=e.get(p);g!==void 0&&(e.delete(p),g.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function v2(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Ll("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function _2(o,e,i,s){const l={},c=new WeakMap;function h(m){const x=m.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",h),delete l[x.id];const S=c.get(x);S&&(e.remove(S),c.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(m,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function p(m){const x=m.attributes;for(const S in x)e.update(x[S],o.ARRAY_BUFFER)}function g(m){const x=[],S=m.index,E=m.attributes.position;let b=0;if(S!==null){const A=S.array;b=S.version;for(let N=0,w=A.length;N<w;N+=3){const I=A[N+0],z=A[N+1],P=A[N+2];x.push(I,z,z,P,P,I)}}else if(E!==void 0){const A=E.array;b=E.version;for(let N=0,w=A.length/3-1;N<w;N+=3){const I=N+0,z=N+1,P=N+2;x.push(I,z,z,P,P,I)}}else return;const M=new(uy(x)?py:dy)(x,1);M.version=b;const v=c.get(m);v&&e.remove(v),c.set(m,M)}function _(m){const x=c.get(m);if(x){const S=m.index;S!==null&&x.version<S.version&&g(m)}else g(m);return c.get(m)}return{get:d,update:p,getWireframeAttribute:_}}function x2(o,e,i){let s;function l(x){s=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function p(x,S){o.drawElements(s,S,c,x*h),i.update(S,s,1)}function g(x,S,E){E!==0&&(o.drawElementsInstanced(s,S,c,x*h,E),i.update(S,s,E))}function _(x,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,c,x,0,E);let M=0;for(let v=0;v<E;v++)M+=S[v];i.update(M,s,1)}function m(x,S,E,b){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<x.length;v++)g(x[v]/h,S[v],b[v]);else{M.multiDrawElementsInstancedWEBGL(s,S,0,c,x,0,b,0,E);let v=0;for(let A=0;A<E;A++)v+=S[A]*b[A];i.update(v,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=g,this.renderMultiDraw=_,this.renderMultiDrawInstances=m}function y2(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function S2(o,e,i){const s=new WeakMap,l=new ln;function c(h,d,p){const g=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=_!==void 0?_.length:0;let x=s.get(d);if(x===void 0||x.count!==m){let C=function(){V.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var S=C;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],A=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let w=0;E===!0&&(w=1),b===!0&&(w=2),M===!0&&(w=3);let I=d.attributes.position.count*w,z=1;I>e.maxTextureSize&&(z=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const P=new Float32Array(I*z*4*m),V=new cy(P,I,z,m);V.type=sa,V.needsUpdate=!0;const U=w*4;for(let H=0;H<m;H++){const Y=v[H],Q=A[H],pt=N[H],at=I*z*4*H;for(let F=0;F<Y.count;F++){const nt=F*U;E===!0&&(l.fromBufferAttribute(Y,F),P[at+nt+0]=l.x,P[at+nt+1]=l.y,P[at+nt+2]=l.z,P[at+nt+3]=0),b===!0&&(l.fromBufferAttribute(Q,F),P[at+nt+4]=l.x,P[at+nt+5]=l.y,P[at+nt+6]=l.z,P[at+nt+7]=0),M===!0&&(l.fromBufferAttribute(pt,F),P[at+nt+8]=l.x,P[at+nt+9]=l.y,P[at+nt+10]=l.z,P[at+nt+11]=pt.itemSize===4?l.w:1)}}x={count:m,texture:V,size:new de(I,z)},s.set(d,x),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<g.length;M++)E+=g[M];const b=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",b),p.getUniforms().setValue(o,"morphTargetInfluences",g)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function M2(o,e,i,s){let l=new WeakMap;function c(p){const g=s.render.frame,_=p.geometry,m=e.get(p,_);if(l.get(m)!==g&&(e.update(m),l.set(m,g)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==g&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,g))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==g&&(x.update(),l.set(x,g))}return m}function h(){l=new WeakMap}function d(p){const g=p.target;g.removeEventListener("dispose",d),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:c,dispose:h}}const Ay=new Vn,Tx=new Sy(1,1),Ry=new cy,Cy=new VE,wy=new vy,bx=[],Ax=[],Rx=new Float32Array(16),Cx=new Float32Array(9),wx=new Float32Array(4);function xo(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let c=bx[l];if(c===void 0&&(c=new Float32Array(l),bx[l]=c),e!==0){s.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function Tn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function bn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function qc(o,e){let i=Ax[e];i===void 0&&(i=new Int32Array(e),Ax[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function E2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function T2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;o.uniform2fv(this.addr,e),bn(i,e)}}function b2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Tn(i,e))return;o.uniform3fv(this.addr,e),bn(i,e)}}function A2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;o.uniform4fv(this.addr,e),bn(i,e)}}function R2(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Tn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),bn(i,e)}else{if(Tn(i,s))return;wx.set(s),o.uniformMatrix2fv(this.addr,!1,wx),bn(i,s)}}function C2(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Tn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),bn(i,e)}else{if(Tn(i,s))return;Cx.set(s),o.uniformMatrix3fv(this.addr,!1,Cx),bn(i,s)}}function w2(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(Tn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),bn(i,e)}else{if(Tn(i,s))return;Rx.set(s),o.uniformMatrix4fv(this.addr,!1,Rx),bn(i,s)}}function D2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function U2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;o.uniform2iv(this.addr,e),bn(i,e)}}function N2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;o.uniform3iv(this.addr,e),bn(i,e)}}function L2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;o.uniform4iv(this.addr,e),bn(i,e)}}function O2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function P2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;o.uniform2uiv(this.addr,e),bn(i,e)}}function z2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;o.uniform3uiv(this.addr,e),bn(i,e)}}function I2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;o.uniform4uiv(this.addr,e),bn(i,e)}}function B2(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Tx.compareFunction=ly,c=Tx):c=Ay,i.setTexture2D(e||c,l)}function F2(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Cy,l)}function H2(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||wy,l)}function G2(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||Ry,l)}function V2(o){switch(o){case 5126:return E2;case 35664:return T2;case 35665:return b2;case 35666:return A2;case 35674:return R2;case 35675:return C2;case 35676:return w2;case 5124:case 35670:return D2;case 35667:case 35671:return U2;case 35668:case 35672:return N2;case 35669:case 35673:return L2;case 5125:return O2;case 36294:return P2;case 36295:return z2;case 36296:return I2;case 35678:case 36198:case 36298:case 36306:case 35682:return B2;case 35679:case 36299:case 36307:return F2;case 35680:case 36300:case 36308:case 36293:return H2;case 36289:case 36303:case 36311:case 36292:return G2}}function k2(o,e){o.uniform1fv(this.addr,e)}function X2(o,e){const i=xo(e,this.size,2);o.uniform2fv(this.addr,i)}function q2(o,e){const i=xo(e,this.size,3);o.uniform3fv(this.addr,i)}function Y2(o,e){const i=xo(e,this.size,4);o.uniform4fv(this.addr,i)}function W2(o,e){const i=xo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function j2(o,e){const i=xo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function Z2(o,e){const i=xo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Q2(o,e){o.uniform1iv(this.addr,e)}function K2(o,e){o.uniform2iv(this.addr,e)}function J2(o,e){o.uniform3iv(this.addr,e)}function $2(o,e){o.uniform4iv(this.addr,e)}function tR(o,e){o.uniform1uiv(this.addr,e)}function eR(o,e){o.uniform2uiv(this.addr,e)}function nR(o,e){o.uniform3uiv(this.addr,e)}function iR(o,e){o.uniform4uiv(this.addr,e)}function aR(o,e,i){const s=this.cache,l=e.length,c=qc(i,l);Tn(s,c)||(o.uniform1iv(this.addr,c),bn(s,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Ay,c[h])}function sR(o,e,i){const s=this.cache,l=e.length,c=qc(i,l);Tn(s,c)||(o.uniform1iv(this.addr,c),bn(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Cy,c[h])}function rR(o,e,i){const s=this.cache,l=e.length,c=qc(i,l);Tn(s,c)||(o.uniform1iv(this.addr,c),bn(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||wy,c[h])}function oR(o,e,i){const s=this.cache,l=e.length,c=qc(i,l);Tn(s,c)||(o.uniform1iv(this.addr,c),bn(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Ry,c[h])}function lR(o){switch(o){case 5126:return k2;case 35664:return X2;case 35665:return q2;case 35666:return Y2;case 35674:return W2;case 35675:return j2;case 35676:return Z2;case 5124:case 35670:return Q2;case 35667:case 35671:return K2;case 35668:case 35672:return J2;case 35669:case 35673:return $2;case 5125:return tR;case 36294:return eR;case 36295:return nR;case 36296:return iR;case 35678:case 36198:case 36298:case 36306:case 35682:return aR;case 35679:case 36299:case 36307:return sR;case 35680:case 36300:case 36308:case 36293:return rR;case 36289:case 36303:case 36311:case 36292:return oR}}class uR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=V2(i.type)}}class cR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=lR(i.type)}}class fR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const np=/(\w+)(\])?(\[|\.)?/g;function Dx(o,e){o.seq.push(e),o.map[e.id]=e}function hR(o,e,i){const s=o.name,l=s.length;for(np.lastIndex=0;;){const c=np.exec(s),h=np.lastIndex;let d=c[1];const p=c[2]==="]",g=c[3];if(p&&(d=d|0),g===void 0||g==="["&&h+2===l){Dx(i,g===void 0?new uR(d,o,e):new cR(d,o,e));break}else{let m=i.map[d];m===void 0&&(m=new fR(d),Dx(i,m)),i=m}}}class Ic{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);hR(c,h,this)}}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function Ux(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const dR=37297;let pR=0;function mR(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Nx=new me;function gR(o){Le._getMatrix(Nx,Le.workingColorSpace,o);const e=`mat3( ${Nx.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(o)){case Fc:return[e,"LinearTransferOETF"];case qe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Lx(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+mR(o.getShaderSource(e),d)}else return c}function vR(o,e){const i=gR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function _R(o,e){let i;switch(e){case Wx:i="Linear";break;case jx:i="Reinhard";break;case Zx:i="Cineon";break;case Jp:i="ACESFilmic";break;case Kx:i="AgX";break;case Jx:i="Neutral";break;case Qx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uc=new W;function xR(){Le.getLuminanceCoefficients(Uc);const o=Uc.x.toFixed(4),e=Uc.y.toFixed(4),i=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tl).join(`
`)}function SR(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function MR(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Tl(o){return o!==""}function Ox(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Px(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ER=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wp(o){return o.replace(ER,bR)}const TR=new Map;function bR(o,e){let i=ye[e];if(i===void 0){const s=TR.get(e);if(s!==void 0)i=ye[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Wp(i)}const AR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zx(o){return o.replace(AR,RR)}function RR(o,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Ix(o){let e=`precision ${o.precision} float;
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
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function CR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===qx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===G1?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ca&&(e="SHADOWMAP_TYPE_VSM"),e}function wR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case uo:case co:e="ENVMAP_TYPE_CUBE";break;case Xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function DR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case co:e="ENVMAP_MODE_REFRACTION";break}return e}function UR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Yx:e="ENVMAP_BLENDING_MULTIPLY";break;case rE:e="ENVMAP_BLENDING_MIX";break;case oE:e="ENVMAP_BLENDING_ADD";break}return e}function NR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function LR(o,e,i,s){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=CR(i),g=wR(i),_=DR(i),m=UR(i),x=NR(i),S=yR(i),E=SR(c),b=l.createProgram();let M,v,A=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Tl).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Tl).join(`
`),v.length>0&&(v+=`
`)):(M=[Ix(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tl).join(`
`),v=[Ix(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+_:"",i.envMap?"#define "+m:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ua?"#define TONE_MAPPING":"",i.toneMapping!==Ua?ye.tonemapping_pars_fragment:"",i.toneMapping!==Ua?_R("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,vR("linearToOutputTexel",i.outputColorSpace),xR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Tl).join(`
`)),h=Wp(h),h=Ox(h,i),h=Px(h,i),d=Wp(d),d=Ox(d,i),d=Px(d,i),h=zx(h),d=zx(d),i.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===H_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===H_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=A+M+h,w=A+v+d,I=Ux(l,l.VERTEX_SHADER,N),z=Ux(l,l.FRAGMENT_SHADER,w);l.attachShader(b,I),l.attachShader(b,z),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function P(H){if(o.debug.checkShaderErrors){const Y=l.getProgramInfoLog(b)||"",Q=l.getShaderInfoLog(I)||"",pt=l.getShaderInfoLog(z)||"",at=Y.trim(),F=Q.trim(),nt=pt.trim();let j=!0,ft=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(j=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,b,I,z);else{const St=Lx(l,I,"vertex"),Et=Lx(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+at+`
`+St+`
`+Et)}else at!==""?console.warn("THREE.WebGLProgram: Program Info Log:",at):(F===""||nt==="")&&(ft=!1);ft&&(H.diagnostics={runnable:j,programLog:at,vertexShader:{log:F,prefix:M},fragmentShader:{log:nt,prefix:v}})}l.deleteShader(I),l.deleteShader(z),V=new Ic(l,b),U=MR(l,b)}let V;this.getUniforms=function(){return V===void 0&&P(this),V};let U;this.getAttributes=function(){return U===void 0&&P(this),U};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(b,dR)),C},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=pR++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=I,this.fragmentShader=z,this}let OR=0;class PR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new zR(e),i.set(e,s)),s}}class zR{constructor(e){this.id=OR++,this.code=e,this.usedTimes=0}}function IR(o,e,i,s,l,c,h){const d=new fy,p=new PR,g=new Set,_=[],m=l.logarithmicDepthBuffer,x=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(U){return g.add(U),U===0?"uv":`uv${U}`}function M(U,C,H,Y,Q){const pt=Y.fog,at=Q.geometry,F=U.isMeshStandardMaterial?Y.environment:null,nt=(U.isMeshStandardMaterial?i:e).get(U.envMap||F),j=nt&&nt.mapping===Xc?nt.image.height:null,ft=E[U.type];U.precision!==null&&(S=l.getMaxPrecision(U.precision),S!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",S,"instead."));const St=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Et=St!==void 0?St.length:0;let Ht=0;at.morphAttributes.position!==void 0&&(Ht=1),at.morphAttributes.normal!==void 0&&(Ht=2),at.morphAttributes.color!==void 0&&(Ht=3);let oe,G,dt,k;if(ft){const Re=na[ft];oe=Re.vertexShader,G=Re.fragmentShader}else oe=U.vertexShader,G=U.fragmentShader,p.update(U),dt=p.getVertexShaderID(U),k=p.getFragmentShaderID(U);const K=o.getRenderTarget(),mt=o.state.buffers.depth.getReversed(),Tt=Q.isInstancedMesh===!0,bt=Q.isBatchedMesh===!0,yt=!!U.map,Dt=!!U.matcap,O=!!nt,le=!!U.aoMap,qt=!!U.lightMap,Bt=!!U.bumpMap,Lt=!!U.normalMap,ee=!!U.displacementMap,Gt=!!U.emissiveMap,se=!!U.metalnessMap,Ne=!!U.roughnessMap,Te=U.anisotropy>0,L=U.clearcoat>0,R=U.dispersion>0,st=U.iridescence>0,vt=U.sheen>0,At=U.transmission>0,gt=Te&&!!U.anisotropyMap,Wt=L&&!!U.clearcoatMap,Nt=L&&!!U.clearcoatNormalMap,Qt=L&&!!U.clearcoatRoughnessMap,te=st&&!!U.iridescenceMap,Ct=st&&!!U.iridescenceThicknessMap,ut=vt&&!!U.sheenColorMap,Zt=vt&&!!U.sheenRoughnessMap,Ft=!!U.specularMap,It=!!U.specularColorMap,ge=!!U.specularIntensityMap,q=At&&!!U.transmissionMap,Ut=At&&!!U.thicknessMap,Pt=!!U.gradientMap,jt=!!U.alphaMap,Rt=U.alphaTest>0,Mt=!!U.alphaHash,$t=!!U.extensions;let pe=Ua;U.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(pe=o.toneMapping);const We={shaderID:ft,shaderType:U.type,shaderName:U.name,vertexShader:oe,fragmentShader:G,defines:U.defines,customVertexShaderID:dt,customFragmentShaderID:k,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:S,batching:bt,batchingColor:bt&&Q._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&Q.instanceColor!==null,instancingMorph:Tt&&Q.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:K===null?o.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:fo,alphaToCoverage:!!U.alphaToCoverage,map:yt,matcap:Dt,envMap:O,envMapMode:O&&nt.mapping,envMapCubeUVHeight:j,aoMap:le,lightMap:qt,bumpMap:Bt,normalMap:Lt,displacementMap:x&&ee,emissiveMap:Gt,normalMapObjectSpace:Lt&&U.normalMapType===fE,normalMapTangentSpace:Lt&&U.normalMapType===oy,metalnessMap:se,roughnessMap:Ne,anisotropy:Te,anisotropyMap:gt,clearcoat:L,clearcoatMap:Wt,clearcoatNormalMap:Nt,clearcoatRoughnessMap:Qt,dispersion:R,iridescence:st,iridescenceMap:te,iridescenceThicknessMap:Ct,sheen:vt,sheenColorMap:ut,sheenRoughnessMap:Zt,specularMap:Ft,specularColorMap:It,specularIntensityMap:ge,transmission:At,transmissionMap:q,thicknessMap:Ut,gradientMap:Pt,opaque:U.transparent===!1&&U.blending===ro&&U.alphaToCoverage===!1,alphaMap:jt,alphaTest:Rt,alphaHash:Mt,combine:U.combine,mapUv:yt&&b(U.map.channel),aoMapUv:le&&b(U.aoMap.channel),lightMapUv:qt&&b(U.lightMap.channel),bumpMapUv:Bt&&b(U.bumpMap.channel),normalMapUv:Lt&&b(U.normalMap.channel),displacementMapUv:ee&&b(U.displacementMap.channel),emissiveMapUv:Gt&&b(U.emissiveMap.channel),metalnessMapUv:se&&b(U.metalnessMap.channel),roughnessMapUv:Ne&&b(U.roughnessMap.channel),anisotropyMapUv:gt&&b(U.anisotropyMap.channel),clearcoatMapUv:Wt&&b(U.clearcoatMap.channel),clearcoatNormalMapUv:Nt&&b(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&b(U.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&b(U.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&b(U.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&b(U.sheenColorMap.channel),sheenRoughnessMapUv:Zt&&b(U.sheenRoughnessMap.channel),specularMapUv:Ft&&b(U.specularMap.channel),specularColorMapUv:It&&b(U.specularColorMap.channel),specularIntensityMapUv:ge&&b(U.specularIntensityMap.channel),transmissionMapUv:q&&b(U.transmissionMap.channel),thicknessMapUv:Ut&&b(U.thicknessMap.channel),alphaMapUv:jt&&b(U.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(Lt||Te),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!at.attributes.uv&&(yt||jt),fog:!!pt,useFog:U.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:mt,skinning:Q.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Ht,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:pe,decodeVideoTexture:yt&&U.map.isVideoTexture===!0&&Le.getTransfer(U.map.colorSpace)===qe,decodeVideoTextureEmissive:Gt&&U.emissiveMap.isVideoTexture===!0&&Le.getTransfer(U.emissiveMap.colorSpace)===qe,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===ia,flipSided:U.side===Gn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:$t&&U.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&U.extensions.multiDraw===!0||bt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return We.vertexUv1s=g.has(1),We.vertexUv2s=g.has(2),We.vertexUv3s=g.has(3),g.clear(),We}function v(U){const C=[];if(U.shaderID?C.push(U.shaderID):(C.push(U.customVertexShaderID),C.push(U.customFragmentShaderID)),U.defines!==void 0)for(const H in U.defines)C.push(H),C.push(U.defines[H]);return U.isRawShaderMaterial===!1&&(A(C,U),N(C,U),C.push(o.outputColorSpace)),C.push(U.customProgramCacheKey),C.join()}function A(U,C){U.push(C.precision),U.push(C.outputColorSpace),U.push(C.envMapMode),U.push(C.envMapCubeUVHeight),U.push(C.mapUv),U.push(C.alphaMapUv),U.push(C.lightMapUv),U.push(C.aoMapUv),U.push(C.bumpMapUv),U.push(C.normalMapUv),U.push(C.displacementMapUv),U.push(C.emissiveMapUv),U.push(C.metalnessMapUv),U.push(C.roughnessMapUv),U.push(C.anisotropyMapUv),U.push(C.clearcoatMapUv),U.push(C.clearcoatNormalMapUv),U.push(C.clearcoatRoughnessMapUv),U.push(C.iridescenceMapUv),U.push(C.iridescenceThicknessMapUv),U.push(C.sheenColorMapUv),U.push(C.sheenRoughnessMapUv),U.push(C.specularMapUv),U.push(C.specularColorMapUv),U.push(C.specularIntensityMapUv),U.push(C.transmissionMapUv),U.push(C.thicknessMapUv),U.push(C.combine),U.push(C.fogExp2),U.push(C.sizeAttenuation),U.push(C.morphTargetsCount),U.push(C.morphAttributeCount),U.push(C.numDirLights),U.push(C.numPointLights),U.push(C.numSpotLights),U.push(C.numSpotLightMaps),U.push(C.numHemiLights),U.push(C.numRectAreaLights),U.push(C.numDirLightShadows),U.push(C.numPointLightShadows),U.push(C.numSpotLightShadows),U.push(C.numSpotLightShadowsWithMaps),U.push(C.numLightProbes),U.push(C.shadowMapType),U.push(C.toneMapping),U.push(C.numClippingPlanes),U.push(C.numClipIntersection),U.push(C.depthPacking)}function N(U,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),U.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),U.push(d.mask)}function w(U){const C=E[U.type];let H;if(C){const Y=na[C];H=Pl.clone(Y.uniforms)}else H=U.uniforms;return H}function I(U,C){let H;for(let Y=0,Q=_.length;Y<Q;Y++){const pt=_[Y];if(pt.cacheKey===C){H=pt,++H.usedTimes;break}}return H===void 0&&(H=new LR(o,C,U,c),_.push(H)),H}function z(U){if(--U.usedTimes===0){const C=_.indexOf(U);_[C]=_[_.length-1],_.pop(),U.destroy()}}function P(U){p.remove(U)}function V(){p.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:w,acquireProgram:I,releaseProgram:z,releaseShaderCache:P,programs:_,dispose:V}}function BR(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function c(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function FR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Bx(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Fx(){const o=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(m,x,S,E,b,M){let v=o[e];return v===void 0?(v={id:m.id,object:m,geometry:x,material:S,groupOrder:E,renderOrder:m.renderOrder,z:b,group:M},o[e]=v):(v.id=m.id,v.object=m,v.geometry=x,v.material=S,v.groupOrder=E,v.renderOrder=m.renderOrder,v.z=b,v.group=M),e++,v}function d(m,x,S,E,b,M){const v=h(m,x,S,E,b,M);S.transmission>0?s.push(v):S.transparent===!0?l.push(v):i.push(v)}function p(m,x,S,E,b,M){const v=h(m,x,S,E,b,M);S.transmission>0?s.unshift(v):S.transparent===!0?l.unshift(v):i.unshift(v)}function g(m,x){i.length>1&&i.sort(m||FR),s.length>1&&s.sort(x||Bx),l.length>1&&l.sort(x||Bx)}function _(){for(let m=e,x=o.length;m<x;m++){const S=o[m];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:p,finish:_,sort:g}}function HR(){let o=new WeakMap;function e(s,l){const c=o.get(s);let h;return c===void 0?(h=new Fx,o.set(s,[h])):l>=c.length?(h=new Fx,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function GR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new W,color:new ue};break;case"SpotLight":i={position:new W,direction:new W,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new W,color:new ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new W,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":i={color:new ue,position:new W,halfWidth:new W,halfHeight:new W};break}return o[e.id]=i,i}}}function VR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let kR=0;function XR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function qR(o){const e=new GR,i=VR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)s.probe.push(new W);const l=new W,c=new Ye,h=new Ye;function d(g){let _=0,m=0,x=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let S=0,E=0,b=0,M=0,v=0,A=0,N=0,w=0,I=0,z=0,P=0;g.sort(XR);for(let U=0,C=g.length;U<C;U++){const H=g[U],Y=H.color,Q=H.intensity,pt=H.distance,at=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=Y.r*Q,m+=Y.g*Q,x+=Y.b*Q;else if(H.isLightProbe){for(let F=0;F<9;F++)s.probe[F].addScaledVector(H.sh.coefficients[F],Q);P++}else if(H.isDirectionalLight){const F=e.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const nt=H.shadow,j=i.get(H);j.shadowIntensity=nt.intensity,j.shadowBias=nt.bias,j.shadowNormalBias=nt.normalBias,j.shadowRadius=nt.radius,j.shadowMapSize=nt.mapSize,s.directionalShadow[S]=j,s.directionalShadowMap[S]=at,s.directionalShadowMatrix[S]=H.shadow.matrix,A++}s.directional[S]=F,S++}else if(H.isSpotLight){const F=e.get(H);F.position.setFromMatrixPosition(H.matrixWorld),F.color.copy(Y).multiplyScalar(Q),F.distance=pt,F.coneCos=Math.cos(H.angle),F.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),F.decay=H.decay,s.spot[b]=F;const nt=H.shadow;if(H.map&&(s.spotLightMap[I]=H.map,I++,nt.updateMatrices(H),H.castShadow&&z++),s.spotLightMatrix[b]=nt.matrix,H.castShadow){const j=i.get(H);j.shadowIntensity=nt.intensity,j.shadowBias=nt.bias,j.shadowNormalBias=nt.normalBias,j.shadowRadius=nt.radius,j.shadowMapSize=nt.mapSize,s.spotShadow[b]=j,s.spotShadowMap[b]=at,w++}b++}else if(H.isRectAreaLight){const F=e.get(H);F.color.copy(Y).multiplyScalar(Q),F.halfWidth.set(H.width*.5,0,0),F.halfHeight.set(0,H.height*.5,0),s.rectArea[M]=F,M++}else if(H.isPointLight){const F=e.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),F.distance=H.distance,F.decay=H.decay,H.castShadow){const nt=H.shadow,j=i.get(H);j.shadowIntensity=nt.intensity,j.shadowBias=nt.bias,j.shadowNormalBias=nt.normalBias,j.shadowRadius=nt.radius,j.shadowMapSize=nt.mapSize,j.shadowCameraNear=nt.camera.near,j.shadowCameraFar=nt.camera.far,s.pointShadow[E]=j,s.pointShadowMap[E]=at,s.pointShadowMatrix[E]=H.shadow.matrix,N++}s.point[E]=F,E++}else if(H.isHemisphereLight){const F=e.get(H);F.skyColor.copy(H.color).multiplyScalar(Q),F.groundColor.copy(H.groundColor).multiplyScalar(Q),s.hemi[v]=F,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=kt.LTC_FLOAT_1,s.rectAreaLTC2=kt.LTC_FLOAT_2):(s.rectAreaLTC1=kt.LTC_HALF_1,s.rectAreaLTC2=kt.LTC_HALF_2)),s.ambient[0]=_,s.ambient[1]=m,s.ambient[2]=x;const V=s.hash;(V.directionalLength!==S||V.pointLength!==E||V.spotLength!==b||V.rectAreaLength!==M||V.hemiLength!==v||V.numDirectionalShadows!==A||V.numPointShadows!==N||V.numSpotShadows!==w||V.numSpotMaps!==I||V.numLightProbes!==P)&&(s.directional.length=S,s.spot.length=b,s.rectArea.length=M,s.point.length=E,s.hemi.length=v,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=w+I-z,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=P,V.directionalLength=S,V.pointLength=E,V.spotLength=b,V.rectAreaLength=M,V.hemiLength=v,V.numDirectionalShadows=A,V.numPointShadows=N,V.numSpotShadows=w,V.numSpotMaps=I,V.numLightProbes=P,s.version=kR++)}function p(g,_){let m=0,x=0,S=0,E=0,b=0;const M=_.matrixWorldInverse;for(let v=0,A=g.length;v<A;v++){const N=g[v];if(N.isDirectionalLight){const w=s.directional[m];w.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),m++}else if(N.isSpotLight){const w=s.spot[S];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(M),w.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),w.direction.sub(l),w.direction.transformDirection(M),S++}else if(N.isRectAreaLight){const w=s.rectArea[E];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(M),h.identity(),c.copy(N.matrixWorld),c.premultiply(M),h.extractRotation(c),w.halfWidth.set(N.width*.5,0,0),w.halfHeight.set(0,N.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),E++}else if(N.isPointLight){const w=s.point[x];w.position.setFromMatrixPosition(N.matrixWorld),w.position.applyMatrix4(M),x++}else if(N.isHemisphereLight){const w=s.hemi[b];w.direction.setFromMatrixPosition(N.matrixWorld),w.direction.transformDirection(M),b++}}}return{setup:d,setupView:p,state:s}}function Hx(o){const e=new qR(o),i=[],s=[];function l(_){g.camera=_,i.length=0,s.length=0}function c(_){i.push(_)}function h(_){s.push(_)}function d(){e.setup(i)}function p(_){e.setupView(i,_)}const g={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:g,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:h}}function YR(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new Hx(o),e.set(l,[d])):c>=h.length?(d=new Hx(o),h.push(d)):d=h[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const WR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jR=`uniform sampler2D shadow_pass;
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
}`;function ZR(o,e,i){let s=new um;const l=new de,c=new de,h=new ln,d=new _T({depthPacking:cE}),p=new xT,g={},_=i.maxTextureSize,m={[ps]:Gn,[Gn]:ps,[ia]:ia},x=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:WR,fragmentShader:jR}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new kn;E.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new un(E,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qx;let v=this.type;this.render=function(z,P,V){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;const U=o.getRenderTarget(),C=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),Y=o.state;Y.setBlending(Da),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const Q=v!==Ca&&this.type===Ca,pt=v===Ca&&this.type!==Ca;for(let at=0,F=z.length;at<F;at++){const nt=z[at],j=nt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const ft=j.getFrameExtents();if(l.multiply(ft),c.copy(j.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ft.x),l.x=c.x*ft.x,j.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ft.y),l.y=c.y*ft.y,j.mapSize.y=c.y)),j.map===null||Q===!0||pt===!0){const Et=this.type!==Ca?{minFilter:vi,magFilter:vi}:{};j.map!==null&&j.map.dispose(),j.map=new wi(l.x,l.y,Et),j.map.texture.name=nt.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const St=j.getViewportCount();for(let Et=0;Et<St;Et++){const Ht=j.getViewport(Et);h.set(c.x*Ht.x,c.y*Ht.y,c.x*Ht.z,c.y*Ht.w),Y.viewport(h),j.updateMatrices(nt,Et),s=j.getFrustum(),w(P,V,j.camera,nt,this.type)}j.isPointLightShadow!==!0&&this.type===Ca&&A(j,V),j.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(U,C,H)};function A(z,P){const V=e.update(b);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new wi(l.x,l.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(P,null,V,x,b,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(P,null,V,S,b,null)}function N(z,P,V,U){let C=null;const H=V.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)C=H;else if(C=V.isPointLight===!0?p:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Y=C.uuid,Q=P.uuid;let pt=g[Y];pt===void 0&&(pt={},g[Y]=pt);let at=pt[Q];at===void 0&&(at=C.clone(),pt[Q]=at,P.addEventListener("dispose",I)),C=at}if(C.visible=P.visible,C.wireframe=P.wireframe,U===Ca?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:m[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,V.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const Y=o.properties.get(C);Y.light=V}return C}function w(z,P,V,U,C){if(z.visible===!1)return;if(z.layers.test(P.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&C===Ca)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,z.matrixWorld);const Q=e.update(z),pt=z.material;if(Array.isArray(pt)){const at=Q.groups;for(let F=0,nt=at.length;F<nt;F++){const j=at[F],ft=pt[j.materialIndex];if(ft&&ft.visible){const St=N(z,ft,U,C);z.onBeforeShadow(o,z,P,V,Q,St,j),o.renderBufferDirect(V,null,Q,St,z,j),z.onAfterShadow(o,z,P,V,Q,St,j)}}}else if(pt.visible){const at=N(z,pt,U,C);z.onBeforeShadow(o,z,P,V,Q,at,null),o.renderBufferDirect(V,null,Q,at,z,null),z.onAfterShadow(o,z,P,V,Q,at,null)}}const Y=z.children;for(let Q=0,pt=Y.length;Q<pt;Q++)w(Y[Q],P,V,U,C)}function I(z){z.target.removeEventListener("dispose",I);for(const V in g){const U=g[V],C=z.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}const QR={[op]:lp,[up]:hp,[cp]:dp,[lo]:fp,[lp]:op,[hp]:up,[dp]:cp,[fp]:lo};function KR(o,e){function i(){let q=!1;const Ut=new ln;let Pt=null;const jt=new ln(0,0,0,0);return{setMask:function(Rt){Pt!==Rt&&!q&&(o.colorMask(Rt,Rt,Rt,Rt),Pt=Rt)},setLocked:function(Rt){q=Rt},setClear:function(Rt,Mt,$t,pe,We){We===!0&&(Rt*=pe,Mt*=pe,$t*=pe),Ut.set(Rt,Mt,$t,pe),jt.equals(Ut)===!1&&(o.clearColor(Rt,Mt,$t,pe),jt.copy(Ut))},reset:function(){q=!1,Pt=null,jt.set(-1,0,0,0)}}}function s(){let q=!1,Ut=!1,Pt=null,jt=null,Rt=null;return{setReversed:function(Mt){if(Ut!==Mt){const $t=e.get("EXT_clip_control");Mt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT),Ut=Mt;const pe=Rt;Rt=null,this.setClear(pe)}},getReversed:function(){return Ut},setTest:function(Mt){Mt?K(o.DEPTH_TEST):mt(o.DEPTH_TEST)},setMask:function(Mt){Pt!==Mt&&!q&&(o.depthMask(Mt),Pt=Mt)},setFunc:function(Mt){if(Ut&&(Mt=QR[Mt]),jt!==Mt){switch(Mt){case op:o.depthFunc(o.NEVER);break;case lp:o.depthFunc(o.ALWAYS);break;case up:o.depthFunc(o.LESS);break;case lo:o.depthFunc(o.LEQUAL);break;case cp:o.depthFunc(o.EQUAL);break;case fp:o.depthFunc(o.GEQUAL);break;case hp:o.depthFunc(o.GREATER);break;case dp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}jt=Mt}},setLocked:function(Mt){q=Mt},setClear:function(Mt){Rt!==Mt&&(Ut&&(Mt=1-Mt),o.clearDepth(Mt),Rt=Mt)},reset:function(){q=!1,Pt=null,jt=null,Rt=null,Ut=!1}}}function l(){let q=!1,Ut=null,Pt=null,jt=null,Rt=null,Mt=null,$t=null,pe=null,We=null;return{setTest:function(Re){q||(Re?K(o.STENCIL_TEST):mt(o.STENCIL_TEST))},setMask:function(Re){Ut!==Re&&!q&&(o.stencilMask(Re),Ut=Re)},setFunc:function(Re,en,yn){(Pt!==Re||jt!==en||Rt!==yn)&&(o.stencilFunc(Re,en,yn),Pt=Re,jt=en,Rt=yn)},setOp:function(Re,en,yn){(Mt!==Re||$t!==en||pe!==yn)&&(o.stencilOp(Re,en,yn),Mt=Re,$t=en,pe=yn)},setLocked:function(Re){q=Re},setClear:function(Re){We!==Re&&(o.clearStencil(Re),We=Re)},reset:function(){q=!1,Ut=null,Pt=null,jt=null,Rt=null,Mt=null,$t=null,pe=null,We=null}}}const c=new i,h=new s,d=new l,p=new WeakMap,g=new WeakMap;let _={},m={},x=new WeakMap,S=[],E=null,b=!1,M=null,v=null,A=null,N=null,w=null,I=null,z=null,P=new ue(0,0,0),V=0,U=!1,C=null,H=null,Y=null,Q=null,pt=null;const at=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,nt=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(j)[1]),F=nt>=1):j.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),F=nt>=2);let ft=null,St={};const Et=o.getParameter(o.SCISSOR_BOX),Ht=o.getParameter(o.VIEWPORT),oe=new ln().fromArray(Et),G=new ln().fromArray(Ht);function dt(q,Ut,Pt,jt){const Rt=new Uint8Array(4),Mt=o.createTexture();o.bindTexture(q,Mt),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let $t=0;$t<Pt;$t++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Ut,0,o.RGBA,1,1,jt,0,o.RGBA,o.UNSIGNED_BYTE,Rt):o.texImage2D(Ut+$t,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Rt);return Mt}const k={};k[o.TEXTURE_2D]=dt(o.TEXTURE_2D,o.TEXTURE_2D,1),k[o.TEXTURE_CUBE_MAP]=dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[o.TEXTURE_2D_ARRAY]=dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),k[o.TEXTURE_3D]=dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),K(o.DEPTH_TEST),h.setFunc(lo),Bt(!1),Lt(P_),K(o.CULL_FACE),le(Da);function K(q){_[q]!==!0&&(o.enable(q),_[q]=!0)}function mt(q){_[q]!==!1&&(o.disable(q),_[q]=!1)}function Tt(q,Ut){return m[q]!==Ut?(o.bindFramebuffer(q,Ut),m[q]=Ut,q===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=Ut),q===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=Ut),!0):!1}function bt(q,Ut){let Pt=S,jt=!1;if(q){Pt=x.get(Ut),Pt===void 0&&(Pt=[],x.set(Ut,Pt));const Rt=q.textures;if(Pt.length!==Rt.length||Pt[0]!==o.COLOR_ATTACHMENT0){for(let Mt=0,$t=Rt.length;Mt<$t;Mt++)Pt[Mt]=o.COLOR_ATTACHMENT0+Mt;Pt.length=Rt.length,jt=!0}}else Pt[0]!==o.BACK&&(Pt[0]=o.BACK,jt=!0);jt&&o.drawBuffers(Pt)}function yt(q){return E!==q?(o.useProgram(q),E=q,!0):!1}const Dt={[Ws]:o.FUNC_ADD,[k1]:o.FUNC_SUBTRACT,[X1]:o.FUNC_REVERSE_SUBTRACT};Dt[q1]=o.MIN,Dt[Y1]=o.MAX;const O={[W1]:o.ZERO,[j1]:o.ONE,[Z1]:o.SRC_COLOR,[sp]:o.SRC_ALPHA,[eE]:o.SRC_ALPHA_SATURATE,[$1]:o.DST_COLOR,[K1]:o.DST_ALPHA,[Q1]:o.ONE_MINUS_SRC_COLOR,[rp]:o.ONE_MINUS_SRC_ALPHA,[tE]:o.ONE_MINUS_DST_COLOR,[J1]:o.ONE_MINUS_DST_ALPHA,[nE]:o.CONSTANT_COLOR,[iE]:o.ONE_MINUS_CONSTANT_COLOR,[aE]:o.CONSTANT_ALPHA,[sE]:o.ONE_MINUS_CONSTANT_ALPHA};function le(q,Ut,Pt,jt,Rt,Mt,$t,pe,We,Re){if(q===Da){b===!0&&(mt(o.BLEND),b=!1);return}if(b===!1&&(K(o.BLEND),b=!0),q!==V1){if(q!==M||Re!==U){if((v!==Ws||w!==Ws)&&(o.blendEquation(o.FUNC_ADD),v=Ws,w=Ws),Re)switch(q){case ro:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Rl:o.blendFunc(o.ONE,o.ONE);break;case z_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case I_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case ro:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Rl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case z_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case I_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}A=null,N=null,I=null,z=null,P.set(0,0,0),V=0,M=q,U=Re}return}Rt=Rt||Ut,Mt=Mt||Pt,$t=$t||jt,(Ut!==v||Rt!==w)&&(o.blendEquationSeparate(Dt[Ut],Dt[Rt]),v=Ut,w=Rt),(Pt!==A||jt!==N||Mt!==I||$t!==z)&&(o.blendFuncSeparate(O[Pt],O[jt],O[Mt],O[$t]),A=Pt,N=jt,I=Mt,z=$t),(pe.equals(P)===!1||We!==V)&&(o.blendColor(pe.r,pe.g,pe.b,We),P.copy(pe),V=We),M=q,U=!1}function qt(q,Ut){q.side===ia?mt(o.CULL_FACE):K(o.CULL_FACE);let Pt=q.side===Gn;Ut&&(Pt=!Pt),Bt(Pt),q.blending===ro&&q.transparent===!1?le(Da):le(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),h.setFunc(q.depthFunc),h.setTest(q.depthTest),h.setMask(q.depthWrite),c.setMask(q.colorWrite);const jt=q.stencilWrite;d.setTest(jt),jt&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Gt(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?K(o.SAMPLE_ALPHA_TO_COVERAGE):mt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(q){C!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),C=q)}function Lt(q){q!==F1?(K(o.CULL_FACE),q!==H&&(q===P_?o.cullFace(o.BACK):q===H1?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):mt(o.CULL_FACE),H=q}function ee(q){q!==Y&&(F&&o.lineWidth(q),Y=q)}function Gt(q,Ut,Pt){q?(K(o.POLYGON_OFFSET_FILL),(Q!==Ut||pt!==Pt)&&(o.polygonOffset(Ut,Pt),Q=Ut,pt=Pt)):mt(o.POLYGON_OFFSET_FILL)}function se(q){q?K(o.SCISSOR_TEST):mt(o.SCISSOR_TEST)}function Ne(q){q===void 0&&(q=o.TEXTURE0+at-1),ft!==q&&(o.activeTexture(q),ft=q)}function Te(q,Ut,Pt){Pt===void 0&&(ft===null?Pt=o.TEXTURE0+at-1:Pt=ft);let jt=St[Pt];jt===void 0&&(jt={type:void 0,texture:void 0},St[Pt]=jt),(jt.type!==q||jt.texture!==Ut)&&(ft!==Pt&&(o.activeTexture(Pt),ft=Pt),o.bindTexture(q,Ut||k[q]),jt.type=q,jt.texture=Ut)}function L(){const q=St[ft];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function R(){try{o.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function st(){try{o.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function vt(){try{o.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function At(){try{o.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function gt(){try{o.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Wt(){try{o.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Nt(){try{o.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Qt(){try{o.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function te(){try{o.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ct(){try{o.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ut(q){oe.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),oe.copy(q))}function Zt(q){G.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),G.copy(q))}function Ft(q,Ut){let Pt=g.get(Ut);Pt===void 0&&(Pt=new WeakMap,g.set(Ut,Pt));let jt=Pt.get(q);jt===void 0&&(jt=o.getUniformBlockIndex(Ut,q.name),Pt.set(q,jt))}function It(q,Ut){const jt=g.get(Ut).get(q);p.get(Ut)!==jt&&(o.uniformBlockBinding(Ut,jt,q.__bindingPointIndex),p.set(Ut,jt))}function ge(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},ft=null,St={},m={},x=new WeakMap,S=[],E=null,b=!1,M=null,v=null,A=null,N=null,w=null,I=null,z=null,P=new ue(0,0,0),V=0,U=!1,C=null,H=null,Y=null,Q=null,pt=null,oe.set(0,0,o.canvas.width,o.canvas.height),G.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:K,disable:mt,bindFramebuffer:Tt,drawBuffers:bt,useProgram:yt,setBlending:le,setMaterial:qt,setFlipSided:Bt,setCullFace:Lt,setLineWidth:ee,setPolygonOffset:Gt,setScissorTest:se,activeTexture:Ne,bindTexture:Te,unbindTexture:L,compressedTexImage2D:R,compressedTexImage3D:st,texImage2D:te,texImage3D:Ct,updateUBOMapping:Ft,uniformBlockBinding:It,texStorage2D:Nt,texStorage3D:Qt,texSubImage2D:vt,texSubImage3D:At,compressedTexSubImage2D:gt,compressedTexSubImage3D:Wt,scissor:ut,viewport:Zt,reset:ge}}function JR(o,e,i,s,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new de,_=new WeakMap;let m;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,R){return S?new OffscreenCanvas(L,R):Gc("canvas")}function b(L,R,st){let vt=1;const At=Te(L);if((At.width>st||At.height>st)&&(vt=st/Math.max(At.width,At.height)),vt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const gt=Math.floor(vt*At.width),Wt=Math.floor(vt*At.height);m===void 0&&(m=E(gt,Wt));const Nt=R?E(gt,Wt):m;return Nt.width=gt,Nt.height=Wt,Nt.getContext("2d").drawImage(L,0,0,gt,Wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+At.width+"x"+At.height+") to ("+gt+"x"+Wt+")."),Nt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+At.width+"x"+At.height+")."),L;return L}function M(L){return L.generateMipmaps}function v(L){o.generateMipmap(L)}function A(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(L,R,st,vt,At=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let gt=R;if(R===o.RED&&(st===o.FLOAT&&(gt=o.R32F),st===o.HALF_FLOAT&&(gt=o.R16F),st===o.UNSIGNED_BYTE&&(gt=o.R8)),R===o.RED_INTEGER&&(st===o.UNSIGNED_BYTE&&(gt=o.R8UI),st===o.UNSIGNED_SHORT&&(gt=o.R16UI),st===o.UNSIGNED_INT&&(gt=o.R32UI),st===o.BYTE&&(gt=o.R8I),st===o.SHORT&&(gt=o.R16I),st===o.INT&&(gt=o.R32I)),R===o.RG&&(st===o.FLOAT&&(gt=o.RG32F),st===o.HALF_FLOAT&&(gt=o.RG16F),st===o.UNSIGNED_BYTE&&(gt=o.RG8)),R===o.RG_INTEGER&&(st===o.UNSIGNED_BYTE&&(gt=o.RG8UI),st===o.UNSIGNED_SHORT&&(gt=o.RG16UI),st===o.UNSIGNED_INT&&(gt=o.RG32UI),st===o.BYTE&&(gt=o.RG8I),st===o.SHORT&&(gt=o.RG16I),st===o.INT&&(gt=o.RG32I)),R===o.RGB_INTEGER&&(st===o.UNSIGNED_BYTE&&(gt=o.RGB8UI),st===o.UNSIGNED_SHORT&&(gt=o.RGB16UI),st===o.UNSIGNED_INT&&(gt=o.RGB32UI),st===o.BYTE&&(gt=o.RGB8I),st===o.SHORT&&(gt=o.RGB16I),st===o.INT&&(gt=o.RGB32I)),R===o.RGBA_INTEGER&&(st===o.UNSIGNED_BYTE&&(gt=o.RGBA8UI),st===o.UNSIGNED_SHORT&&(gt=o.RGBA16UI),st===o.UNSIGNED_INT&&(gt=o.RGBA32UI),st===o.BYTE&&(gt=o.RGBA8I),st===o.SHORT&&(gt=o.RGBA16I),st===o.INT&&(gt=o.RGBA32I)),R===o.RGB&&(st===o.UNSIGNED_INT_5_9_9_9_REV&&(gt=o.RGB9_E5),st===o.UNSIGNED_INT_10F_11F_11F_REV&&(gt=o.R11F_G11F_B10F)),R===o.RGBA){const Wt=At?Fc:Le.getTransfer(vt);st===o.FLOAT&&(gt=o.RGBA32F),st===o.HALF_FLOAT&&(gt=o.RGBA16F),st===o.UNSIGNED_BYTE&&(gt=Wt===qe?o.SRGB8_ALPHA8:o.RGBA8),st===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),st===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),gt}function w(L,R){let st;return L?R===null||R===Js||R===wl?st=o.DEPTH24_STENCIL8:R===sa?st=o.DEPTH32F_STENCIL8:R===Cl&&(st=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Js||R===wl?st=o.DEPTH_COMPONENT24:R===sa?st=o.DEPTH_COMPONENT32F:R===Cl&&(st=o.DEPTH_COMPONENT16),st}function I(L,R){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==vi&&L.minFilter!==aa?Math.log2(Math.max(R.width,R.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?R.mipmaps.length:1}function z(L){const R=L.target;R.removeEventListener("dispose",z),V(R),R.isVideoTexture&&_.delete(R)}function P(L){const R=L.target;R.removeEventListener("dispose",P),C(R)}function V(L){const R=s.get(L);if(R.__webglInit===void 0)return;const st=L.source,vt=x.get(st);if(vt){const At=vt[R.__cacheKey];At.usedTimes--,At.usedTimes===0&&U(L),Object.keys(vt).length===0&&x.delete(st)}s.remove(L)}function U(L){const R=s.get(L);o.deleteTexture(R.__webglTexture);const st=L.source,vt=x.get(st);delete vt[R.__cacheKey],h.memory.textures--}function C(L){const R=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(R.__webglFramebuffer[vt]))for(let At=0;At<R.__webglFramebuffer[vt].length;At++)o.deleteFramebuffer(R.__webglFramebuffer[vt][At]);else o.deleteFramebuffer(R.__webglFramebuffer[vt]);R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer[vt])}else{if(Array.isArray(R.__webglFramebuffer))for(let vt=0;vt<R.__webglFramebuffer.length;vt++)o.deleteFramebuffer(R.__webglFramebuffer[vt]);else o.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&o.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&o.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let vt=0;vt<R.__webglColorRenderbuffer.length;vt++)R.__webglColorRenderbuffer[vt]&&o.deleteRenderbuffer(R.__webglColorRenderbuffer[vt]);R.__webglDepthRenderbuffer&&o.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const st=L.textures;for(let vt=0,At=st.length;vt<At;vt++){const gt=s.get(st[vt]);gt.__webglTexture&&(o.deleteTexture(gt.__webglTexture),h.memory.textures--),s.remove(st[vt])}s.remove(L)}let H=0;function Y(){H=0}function Q(){const L=H;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),H+=1,L}function pt(L){const R=[];return R.push(L.wrapS),R.push(L.wrapT),R.push(L.wrapR||0),R.push(L.magFilter),R.push(L.minFilter),R.push(L.anisotropy),R.push(L.internalFormat),R.push(L.format),R.push(L.type),R.push(L.generateMipmaps),R.push(L.premultiplyAlpha),R.push(L.flipY),R.push(L.unpackAlignment),R.push(L.colorSpace),R.join()}function at(L,R){const st=s.get(L);if(L.isVideoTexture&&se(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&st.__version!==L.version){const vt=L.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(st,L,R);return}}else L.isExternalTexture&&(st.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,st.__webglTexture,o.TEXTURE0+R)}function F(L,R){const st=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&st.__version!==L.version){k(st,L,R);return}i.bindTexture(o.TEXTURE_2D_ARRAY,st.__webglTexture,o.TEXTURE0+R)}function nt(L,R){const st=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&st.__version!==L.version){k(st,L,R);return}i.bindTexture(o.TEXTURE_3D,st.__webglTexture,o.TEXTURE0+R)}function j(L,R){const st=s.get(L);if(L.version>0&&st.__version!==L.version){K(st,L,R);return}i.bindTexture(o.TEXTURE_CUBE_MAP,st.__webglTexture,o.TEXTURE0+R)}const ft={[gp]:o.REPEAT,[Zs]:o.CLAMP_TO_EDGE,[vp]:o.MIRRORED_REPEAT},St={[vi]:o.NEAREST,[lE]:o.NEAREST_MIPMAP_NEAREST,[rc]:o.NEAREST_MIPMAP_LINEAR,[aa]:o.LINEAR,[Ad]:o.LINEAR_MIPMAP_NEAREST,[Qs]:o.LINEAR_MIPMAP_LINEAR},Et={[hE]:o.NEVER,[_E]:o.ALWAYS,[dE]:o.LESS,[ly]:o.LEQUAL,[pE]:o.EQUAL,[vE]:o.GEQUAL,[mE]:o.GREATER,[gE]:o.NOTEQUAL};function Ht(L,R){if(R.type===sa&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===aa||R.magFilter===Ad||R.magFilter===rc||R.magFilter===Qs||R.minFilter===aa||R.minFilter===Ad||R.minFilter===rc||R.minFilter===Qs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,ft[R.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,ft[R.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,ft[R.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,St[R.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,St[R.minFilter]),R.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,Et[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===vi||R.minFilter!==rc&&R.minFilter!==Qs||R.type===sa&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||s.get(R).__currentAnisotropy){const st=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,l.getMaxAnisotropy())),s.get(R).__currentAnisotropy=R.anisotropy}}}function oe(L,R){let st=!1;L.__webglInit===void 0&&(L.__webglInit=!0,R.addEventListener("dispose",z));const vt=R.source;let At=x.get(vt);At===void 0&&(At={},x.set(vt,At));const gt=pt(R);if(gt!==L.__cacheKey){At[gt]===void 0&&(At[gt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,st=!0),At[gt].usedTimes++;const Wt=At[L.__cacheKey];Wt!==void 0&&(At[L.__cacheKey].usedTimes--,Wt.usedTimes===0&&U(R)),L.__cacheKey=gt,L.__webglTexture=At[gt].texture}return st}function G(L,R,st){return Math.floor(Math.floor(L/st)/R)}function dt(L,R,st,vt){const gt=L.updateRanges;if(gt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,R.width,R.height,st,vt,R.data);else{gt.sort((Ct,ut)=>Ct.start-ut.start);let Wt=0;for(let Ct=1;Ct<gt.length;Ct++){const ut=gt[Wt],Zt=gt[Ct],Ft=ut.start+ut.count,It=G(Zt.start,R.width,4),ge=G(ut.start,R.width,4);Zt.start<=Ft+1&&It===ge&&G(Zt.start+Zt.count-1,R.width,4)===It?ut.count=Math.max(ut.count,Zt.start+Zt.count-ut.start):(++Wt,gt[Wt]=Zt)}gt.length=Wt+1;const Nt=o.getParameter(o.UNPACK_ROW_LENGTH),Qt=o.getParameter(o.UNPACK_SKIP_PIXELS),te=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,R.width);for(let Ct=0,ut=gt.length;Ct<ut;Ct++){const Zt=gt[Ct],Ft=Math.floor(Zt.start/4),It=Math.ceil(Zt.count/4),ge=Ft%R.width,q=Math.floor(Ft/R.width),Ut=It,Pt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ge),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),i.texSubImage2D(o.TEXTURE_2D,0,ge,q,Ut,Pt,st,vt,R.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Nt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qt),o.pixelStorei(o.UNPACK_SKIP_ROWS,te)}}function k(L,R,st){let vt=o.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(vt=o.TEXTURE_2D_ARRAY),R.isData3DTexture&&(vt=o.TEXTURE_3D);const At=oe(L,R),gt=R.source;i.bindTexture(vt,L.__webglTexture,o.TEXTURE0+st);const Wt=s.get(gt);if(gt.version!==Wt.__version||At===!0){i.activeTexture(o.TEXTURE0+st);const Nt=Le.getPrimaries(Le.workingColorSpace),Qt=R.colorSpace===ds?null:Le.getPrimaries(R.colorSpace),te=R.colorSpace===ds||Nt===Qt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Ct=b(R.image,!1,l.maxTextureSize);Ct=Ne(R,Ct);const ut=c.convert(R.format,R.colorSpace),Zt=c.convert(R.type);let Ft=N(R.internalFormat,ut,Zt,R.colorSpace,R.isVideoTexture);Ht(vt,R);let It;const ge=R.mipmaps,q=R.isVideoTexture!==!0,Ut=Wt.__version===void 0||At===!0,Pt=gt.dataReady,jt=I(R,Ct);if(R.isDepthTexture)Ft=w(R.format===Ul,R.type),Ut&&(q?i.texStorage2D(o.TEXTURE_2D,1,Ft,Ct.width,Ct.height):i.texImage2D(o.TEXTURE_2D,0,Ft,Ct.width,Ct.height,0,ut,Zt,null));else if(R.isDataTexture)if(ge.length>0){q&&Ut&&i.texStorage2D(o.TEXTURE_2D,jt,Ft,ge[0].width,ge[0].height);for(let Rt=0,Mt=ge.length;Rt<Mt;Rt++)It=ge[Rt],q?Pt&&i.texSubImage2D(o.TEXTURE_2D,Rt,0,0,It.width,It.height,ut,Zt,It.data):i.texImage2D(o.TEXTURE_2D,Rt,Ft,It.width,It.height,0,ut,Zt,It.data);R.generateMipmaps=!1}else q?(Ut&&i.texStorage2D(o.TEXTURE_2D,jt,Ft,Ct.width,Ct.height),Pt&&dt(R,Ct,ut,Zt)):i.texImage2D(o.TEXTURE_2D,0,Ft,Ct.width,Ct.height,0,ut,Zt,Ct.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){q&&Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,jt,Ft,ge[0].width,ge[0].height,Ct.depth);for(let Rt=0,Mt=ge.length;Rt<Mt;Rt++)if(It=ge[Rt],R.format!==Gi)if(ut!==null)if(q){if(Pt)if(R.layerUpdates.size>0){const $t=gx(It.width,It.height,R.format,R.type);for(const pe of R.layerUpdates){const We=It.data.subarray(pe*$t/It.data.BYTES_PER_ELEMENT,(pe+1)*$t/It.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Rt,0,0,pe,It.width,It.height,1,ut,We)}R.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Rt,0,0,0,It.width,It.height,Ct.depth,ut,It.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Rt,Ft,It.width,It.height,Ct.depth,0,It.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?Pt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Rt,0,0,0,It.width,It.height,Ct.depth,ut,Zt,It.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Rt,Ft,It.width,It.height,Ct.depth,0,ut,Zt,It.data)}else{q&&Ut&&i.texStorage2D(o.TEXTURE_2D,jt,Ft,ge[0].width,ge[0].height);for(let Rt=0,Mt=ge.length;Rt<Mt;Rt++)It=ge[Rt],R.format!==Gi?ut!==null?q?Pt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Rt,0,0,It.width,It.height,ut,It.data):i.compressedTexImage2D(o.TEXTURE_2D,Rt,Ft,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?Pt&&i.texSubImage2D(o.TEXTURE_2D,Rt,0,0,It.width,It.height,ut,Zt,It.data):i.texImage2D(o.TEXTURE_2D,Rt,Ft,It.width,It.height,0,ut,Zt,It.data)}else if(R.isDataArrayTexture)if(q){if(Ut&&i.texStorage3D(o.TEXTURE_2D_ARRAY,jt,Ft,Ct.width,Ct.height,Ct.depth),Pt)if(R.layerUpdates.size>0){const Rt=gx(Ct.width,Ct.height,R.format,R.type);for(const Mt of R.layerUpdates){const $t=Ct.data.subarray(Mt*Rt/Ct.data.BYTES_PER_ELEMENT,(Mt+1)*Rt/Ct.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Mt,Ct.width,Ct.height,1,ut,Zt,$t)}R.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Ct.width,Ct.height,Ct.depth,ut,Zt,Ct.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ft,Ct.width,Ct.height,Ct.depth,0,ut,Zt,Ct.data);else if(R.isData3DTexture)q?(Ut&&i.texStorage3D(o.TEXTURE_3D,jt,Ft,Ct.width,Ct.height,Ct.depth),Pt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Ct.width,Ct.height,Ct.depth,ut,Zt,Ct.data)):i.texImage3D(o.TEXTURE_3D,0,Ft,Ct.width,Ct.height,Ct.depth,0,ut,Zt,Ct.data);else if(R.isFramebufferTexture){if(Ut)if(q)i.texStorage2D(o.TEXTURE_2D,jt,Ft,Ct.width,Ct.height);else{let Rt=Ct.width,Mt=Ct.height;for(let $t=0;$t<jt;$t++)i.texImage2D(o.TEXTURE_2D,$t,Ft,Rt,Mt,0,ut,Zt,null),Rt>>=1,Mt>>=1}}else if(ge.length>0){if(q&&Ut){const Rt=Te(ge[0]);i.texStorage2D(o.TEXTURE_2D,jt,Ft,Rt.width,Rt.height)}for(let Rt=0,Mt=ge.length;Rt<Mt;Rt++)It=ge[Rt],q?Pt&&i.texSubImage2D(o.TEXTURE_2D,Rt,0,0,ut,Zt,It):i.texImage2D(o.TEXTURE_2D,Rt,Ft,ut,Zt,It);R.generateMipmaps=!1}else if(q){if(Ut){const Rt=Te(Ct);i.texStorage2D(o.TEXTURE_2D,jt,Ft,Rt.width,Rt.height)}Pt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,ut,Zt,Ct)}else i.texImage2D(o.TEXTURE_2D,0,Ft,ut,Zt,Ct);M(R)&&v(vt),Wt.__version=gt.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function K(L,R,st){if(R.image.length!==6)return;const vt=oe(L,R),At=R.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+st);const gt=s.get(At);if(At.version!==gt.__version||vt===!0){i.activeTexture(o.TEXTURE0+st);const Wt=Le.getPrimaries(Le.workingColorSpace),Nt=R.colorSpace===ds?null:Le.getPrimaries(R.colorSpace),Qt=R.colorSpace===ds||Wt===Nt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,R.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,R.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const te=R.isCompressedTexture||R.image[0].isCompressedTexture,Ct=R.image[0]&&R.image[0].isDataTexture,ut=[];for(let Mt=0;Mt<6;Mt++)!te&&!Ct?ut[Mt]=b(R.image[Mt],!0,l.maxCubemapSize):ut[Mt]=Ct?R.image[Mt].image:R.image[Mt],ut[Mt]=Ne(R,ut[Mt]);const Zt=ut[0],Ft=c.convert(R.format,R.colorSpace),It=c.convert(R.type),ge=N(R.internalFormat,Ft,It,R.colorSpace),q=R.isVideoTexture!==!0,Ut=gt.__version===void 0||vt===!0,Pt=At.dataReady;let jt=I(R,Zt);Ht(o.TEXTURE_CUBE_MAP,R);let Rt;if(te){q&&Ut&&i.texStorage2D(o.TEXTURE_CUBE_MAP,jt,ge,Zt.width,Zt.height);for(let Mt=0;Mt<6;Mt++){Rt=ut[Mt].mipmaps;for(let $t=0;$t<Rt.length;$t++){const pe=Rt[$t];R.format!==Gi?Ft!==null?q?Pt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,$t,0,0,pe.width,pe.height,Ft,pe.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,$t,ge,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?Pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,$t,0,0,pe.width,pe.height,Ft,It,pe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,$t,ge,pe.width,pe.height,0,Ft,It,pe.data)}}}else{if(Rt=R.mipmaps,q&&Ut){Rt.length>0&&jt++;const Mt=Te(ut[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,jt,ge,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(Ct){q?Pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,ut[Mt].width,ut[Mt].height,Ft,It,ut[Mt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ge,ut[Mt].width,ut[Mt].height,0,Ft,It,ut[Mt].data);for(let $t=0;$t<Rt.length;$t++){const We=Rt[$t].image[Mt].image;q?Pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,$t+1,0,0,We.width,We.height,Ft,It,We.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,$t+1,ge,We.width,We.height,0,Ft,It,We.data)}}else{q?Pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Ft,It,ut[Mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ge,Ft,It,ut[Mt]);for(let $t=0;$t<Rt.length;$t++){const pe=Rt[$t];q?Pt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,$t+1,0,0,Ft,It,pe.image[Mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,$t+1,ge,Ft,It,pe.image[Mt])}}}M(R)&&v(o.TEXTURE_CUBE_MAP),gt.__version=At.version,R.onUpdate&&R.onUpdate(R)}L.__version=R.version}function mt(L,R,st,vt,At,gt){const Wt=c.convert(st.format,st.colorSpace),Nt=c.convert(st.type),Qt=N(st.internalFormat,Wt,Nt,st.colorSpace),te=s.get(R),Ct=s.get(st);if(Ct.__renderTarget=R,!te.__hasExternalTextures){const ut=Math.max(1,R.width>>gt),Zt=Math.max(1,R.height>>gt);At===o.TEXTURE_3D||At===o.TEXTURE_2D_ARRAY?i.texImage3D(At,gt,Qt,ut,Zt,R.depth,0,Wt,Nt,null):i.texImage2D(At,gt,Qt,ut,Zt,0,Wt,Nt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Gt(R)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,vt,At,Ct.__webglTexture,0,ee(R)):(At===o.TEXTURE_2D||At>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&At<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,vt,At,Ct.__webglTexture,gt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Tt(L,R,st){if(o.bindRenderbuffer(o.RENDERBUFFER,L),R.depthBuffer){const vt=R.depthTexture,At=vt&&vt.isDepthTexture?vt.type:null,gt=w(R.stencilBuffer,At),Wt=R.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=ee(R);Gt(R)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Nt,gt,R.width,R.height):st?o.renderbufferStorageMultisample(o.RENDERBUFFER,Nt,gt,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,gt,R.width,R.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Wt,o.RENDERBUFFER,L)}else{const vt=R.textures;for(let At=0;At<vt.length;At++){const gt=vt[At],Wt=c.convert(gt.format,gt.colorSpace),Nt=c.convert(gt.type),Qt=N(gt.internalFormat,Wt,Nt,gt.colorSpace),te=ee(R);st&&Gt(R)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,te,Qt,R.width,R.height):Gt(R)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,te,Qt,R.width,R.height):o.renderbufferStorage(o.RENDERBUFFER,Qt,R.width,R.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function bt(L,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=s.get(R.depthTexture);vt.__renderTarget=R,(!vt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),at(R.depthTexture,0);const At=vt.__webglTexture,gt=ee(R);if(R.depthTexture.format===Dl)Gt(R)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,At,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,At,0);else if(R.depthTexture.format===Ul)Gt(R)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,At,0,gt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,At,0);else throw new Error("Unknown depthTexture format")}function yt(L){const R=s.get(L),st=L.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==L.depthTexture){const vt=L.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),vt){const At=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,vt.removeEventListener("dispose",At)};vt.addEventListener("dispose",At),R.__depthDisposeCallback=At}R.__boundDepthTexture=vt}if(L.depthTexture&&!R.__autoAllocateDepthBuffer){if(st)throw new Error("target.depthTexture not supported in Cube render targets");const vt=L.texture.mipmaps;vt&&vt.length>0?bt(R.__webglFramebuffer[0],L):bt(R.__webglFramebuffer,L)}else if(st){R.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[vt]),R.__webglDepthbuffer[vt]===void 0)R.__webglDepthbuffer[vt]=o.createRenderbuffer(),Tt(R.__webglDepthbuffer[vt],L,!1);else{const At=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,gt=R.__webglDepthbuffer[vt];o.bindRenderbuffer(o.RENDERBUFFER,gt),o.framebufferRenderbuffer(o.FRAMEBUFFER,At,o.RENDERBUFFER,gt)}}else{const vt=L.texture.mipmaps;if(vt&&vt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=o.createRenderbuffer(),Tt(R.__webglDepthbuffer,L,!1);else{const At=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,gt=R.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,gt),o.framebufferRenderbuffer(o.FRAMEBUFFER,At,o.RENDERBUFFER,gt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Dt(L,R,st){const vt=s.get(L);R!==void 0&&mt(vt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),st!==void 0&&yt(L)}function O(L){const R=L.texture,st=s.get(L),vt=s.get(R);L.addEventListener("dispose",P);const At=L.textures,gt=L.isWebGLCubeRenderTarget===!0,Wt=At.length>1;if(Wt||(vt.__webglTexture===void 0&&(vt.__webglTexture=o.createTexture()),vt.__version=R.version,h.memory.textures++),gt){st.__webglFramebuffer=[];for(let Nt=0;Nt<6;Nt++)if(R.mipmaps&&R.mipmaps.length>0){st.__webglFramebuffer[Nt]=[];for(let Qt=0;Qt<R.mipmaps.length;Qt++)st.__webglFramebuffer[Nt][Qt]=o.createFramebuffer()}else st.__webglFramebuffer[Nt]=o.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){st.__webglFramebuffer=[];for(let Nt=0;Nt<R.mipmaps.length;Nt++)st.__webglFramebuffer[Nt]=o.createFramebuffer()}else st.__webglFramebuffer=o.createFramebuffer();if(Wt)for(let Nt=0,Qt=At.length;Nt<Qt;Nt++){const te=s.get(At[Nt]);te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&Gt(L)===!1){st.__webglMultisampledFramebuffer=o.createFramebuffer(),st.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let Nt=0;Nt<At.length;Nt++){const Qt=At[Nt];st.__webglColorRenderbuffer[Nt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,st.__webglColorRenderbuffer[Nt]);const te=c.convert(Qt.format,Qt.colorSpace),Ct=c.convert(Qt.type),ut=N(Qt.internalFormat,te,Ct,Qt.colorSpace,L.isXRRenderTarget===!0),Zt=ee(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,ut,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,st.__webglColorRenderbuffer[Nt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(st.__webglDepthRenderbuffer=o.createRenderbuffer(),Tt(st.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(gt){i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),Ht(o.TEXTURE_CUBE_MAP,R);for(let Nt=0;Nt<6;Nt++)if(R.mipmaps&&R.mipmaps.length>0)for(let Qt=0;Qt<R.mipmaps.length;Qt++)mt(st.__webglFramebuffer[Nt][Qt],L,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Qt);else mt(st.__webglFramebuffer[Nt],L,R,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0);M(R)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Wt){for(let Nt=0,Qt=At.length;Nt<Qt;Nt++){const te=At[Nt],Ct=s.get(te);let ut=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(ut=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(ut,Ct.__webglTexture),Ht(ut,te),mt(st.__webglFramebuffer,L,te,o.COLOR_ATTACHMENT0+Nt,ut,0),M(te)&&v(ut)}i.unbindTexture()}else{let Nt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Nt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Nt,vt.__webglTexture),Ht(Nt,R),R.mipmaps&&R.mipmaps.length>0)for(let Qt=0;Qt<R.mipmaps.length;Qt++)mt(st.__webglFramebuffer[Qt],L,R,o.COLOR_ATTACHMENT0,Nt,Qt);else mt(st.__webglFramebuffer,L,R,o.COLOR_ATTACHMENT0,Nt,0);M(R)&&v(Nt),i.unbindTexture()}L.depthBuffer&&yt(L)}function le(L){const R=L.textures;for(let st=0,vt=R.length;st<vt;st++){const At=R[st];if(M(At)){const gt=A(L),Wt=s.get(At).__webglTexture;i.bindTexture(gt,Wt),v(gt),i.unbindTexture()}}}const qt=[],Bt=[];function Lt(L){if(L.samples>0){if(Gt(L)===!1){const R=L.textures,st=L.width,vt=L.height;let At=o.COLOR_BUFFER_BIT;const gt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Wt=s.get(L),Nt=R.length>1;if(Nt)for(let te=0;te<R.length;te++)i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer);const Qt=L.texture.mipmaps;Qt&&Qt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let te=0;te<R.length;te++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(At|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(At|=o.STENCIL_BUFFER_BIT)),Nt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[te]);const Ct=s.get(R[te]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Ct,0)}o.blitFramebuffer(0,0,st,vt,0,0,st,vt,At,o.NEAREST),p===!0&&(qt.length=0,Bt.length=0,qt.push(o.COLOR_ATTACHMENT0+te),L.depthBuffer&&L.resolveDepthBuffer===!1&&(qt.push(gt),Bt.push(gt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Bt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,qt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Nt)for(let te=0;te<R.length;te++){i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[te]);const Ct=s.get(R[te]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,Ct,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const R=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[R])}}}function ee(L){return Math.min(l.maxSamples,L.samples)}function Gt(L){const R=s.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function se(L){const R=h.render.frame;_.get(L)!==R&&(_.set(L,R),L.update())}function Ne(L,R){const st=L.colorSpace,vt=L.format,At=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||st!==fo&&st!==ds&&(Le.getTransfer(st)===qe?(vt!==Gi||At!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",st)),R}function Te(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(g.width=L.naturalWidth||L.width,g.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(g.width=L.displayWidth,g.height=L.displayHeight):(g.width=L.width,g.height=L.height),g}this.allocateTextureUnit=Q,this.resetTextureUnits=Y,this.setTexture2D=at,this.setTexture2DArray=F,this.setTexture3D=nt,this.setTextureCube=j,this.rebindTextures=Dt,this.setupRenderTarget=O,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Gt}function $R(o,e){function i(s,l=ds){let c;const h=Le.getTransfer(l);if(s===ki)return o.UNSIGNED_BYTE;if(s===tm)return o.UNSIGNED_SHORT_4_4_4_4;if(s===em)return o.UNSIGNED_SHORT_5_5_5_1;if(s===ny)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===iy)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===ty)return o.BYTE;if(s===ey)return o.SHORT;if(s===Cl)return o.UNSIGNED_SHORT;if(s===$p)return o.INT;if(s===Js)return o.UNSIGNED_INT;if(s===sa)return o.FLOAT;if(s===Vi)return o.HALF_FLOAT;if(s===ay)return o.ALPHA;if(s===sy)return o.RGB;if(s===Gi)return o.RGBA;if(s===Dl)return o.DEPTH_COMPONENT;if(s===Ul)return o.DEPTH_STENCIL;if(s===nm)return o.RED;if(s===im)return o.RED_INTEGER;if(s===ry)return o.RG;if(s===am)return o.RG_INTEGER;if(s===sm)return o.RGBA_INTEGER;if(s===Lc||s===Oc||s===Pc||s===zc)if(h===qe)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Lc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Lc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Oc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Pc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_p||s===xp||s===yp||s===Sp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===_p)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Sp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Mp||s===Ep||s===Tp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Mp||s===Ep)return h===qe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Tp)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===bp||s===Ap||s===Rp||s===Cp||s===wp||s===Dp||s===Up||s===Np||s===Lp||s===Op||s===Pp||s===zp||s===Ip||s===Bp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===bp)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Ap)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Rp)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Cp)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wp)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Dp)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Up)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Np)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Lp)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Op)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Pp)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===zp)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ip)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bp)return h===qe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Fp||s===Hp||s===Gp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Fp)return h===qe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Hp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Gp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Vp||s===kp||s===Xp||s===qp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Vp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===kp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===qp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===wl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const tC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eC=`
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

}`;class nC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new My(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new an({vertexShader:tC,fragmentShader:eC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new un(new _o(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class iC extends mo{constructor(e,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",p=1,g=null,_=null,m=null,x=null,S=null,E=null;const b=typeof XRWebGLBinding<"u",M=new nC,v={},A=i.getContextAttributes();let N=null,w=null;const I=[],z=[],P=new de;let V=null;const U=new gi;U.viewport=new ln;const C=new gi;C.viewport=new ln;const H=[U,C],Y=new TT;let Q=null,pt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let K=I[k];return K===void 0&&(K=new Wd,I[k]=K),K.getTargetRaySpace()},this.getControllerGrip=function(k){let K=I[k];return K===void 0&&(K=new Wd,I[k]=K),K.getGripSpace()},this.getHand=function(k){let K=I[k];return K===void 0&&(K=new Wd,I[k]=K),K.getHandSpace()};function at(k){const K=z.indexOf(k.inputSource);if(K===-1)return;const mt=I[K];mt!==void 0&&(mt.update(k.inputSource,k.frame,g||h),mt.dispatchEvent({type:k.type,data:k.inputSource}))}function F(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",nt);for(let k=0;k<I.length;k++){const K=z[k];K!==null&&(z[k]=null,I[k].disconnect(K))}Q=null,pt=null,M.reset();for(const k in v)delete v[k];e.setRenderTarget(N),S=null,x=null,m=null,l=null,w=null,dt.stop(),s.isPresenting=!1,e.setPixelRatio(V),e.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){c=k,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){d=k,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||h},this.setReferenceSpace=function(k){g=k},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return m===null&&b&&(m=new XRWebGLBinding(l,i)),m},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(k){if(l=k,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",F),l.addEventListener("inputsourceschange",nt),A.xrCompatible!==!0&&await i.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(P),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,Tt=null,bt=null;A.depth&&(bt=A.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,mt=A.stencil?Ul:Dl,Tt=A.stencil?wl:Js);const yt={colorFormat:i.RGBA8,depthFormat:bt,scaleFactor:c};m=this.getBinding(),x=m.createProjectionLayer(yt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),w=new wi(x.textureWidth,x.textureHeight,{format:Gi,type:ki,depthTexture:new Sy(x.textureWidth,x.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const mt={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,mt),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),w=new wi(S.framebufferWidth,S.framebufferHeight,{format:Gi,type:ki,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(p),g=null,h=await l.requestReferenceSpace(d),dt.setContext(l),dt.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function nt(k){for(let K=0;K<k.removed.length;K++){const mt=k.removed[K],Tt=z.indexOf(mt);Tt>=0&&(z[Tt]=null,I[Tt].disconnect(mt))}for(let K=0;K<k.added.length;K++){const mt=k.added[K];let Tt=z.indexOf(mt);if(Tt===-1){for(let yt=0;yt<I.length;yt++)if(yt>=z.length){z.push(mt),Tt=yt;break}else if(z[yt]===null){z[yt]=mt,Tt=yt;break}if(Tt===-1)break}const bt=I[Tt];bt&&bt.connect(mt)}}const j=new W,ft=new W;function St(k,K,mt){j.setFromMatrixPosition(K.matrixWorld),ft.setFromMatrixPosition(mt.matrixWorld);const Tt=j.distanceTo(ft),bt=K.projectionMatrix.elements,yt=mt.projectionMatrix.elements,Dt=bt[14]/(bt[10]-1),O=bt[14]/(bt[10]+1),le=(bt[9]+1)/bt[5],qt=(bt[9]-1)/bt[5],Bt=(bt[8]-1)/bt[0],Lt=(yt[8]+1)/yt[0],ee=Dt*Bt,Gt=Dt*Lt,se=Tt/(-Bt+Lt),Ne=se*-Bt;if(K.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ne),k.translateZ(se),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),bt[10]===-1)k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const Te=Dt+se,L=O+se,R=ee-Ne,st=Gt+(Tt-Ne),vt=le*O/L*Te,At=qt*O/L*Te;k.projectionMatrix.makePerspective(R,st,vt,At,Te,L),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Et(k,K){K===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(K.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(l===null)return;let K=k.near,mt=k.far;M.texture!==null&&(M.depthNear>0&&(K=M.depthNear),M.depthFar>0&&(mt=M.depthFar)),Y.near=C.near=U.near=K,Y.far=C.far=U.far=mt,(Q!==Y.near||pt!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),Q=Y.near,pt=Y.far),Y.layers.mask=k.layers.mask|6,U.layers.mask=Y.layers.mask&3,C.layers.mask=Y.layers.mask&5;const Tt=k.parent,bt=Y.cameras;Et(Y,Tt);for(let yt=0;yt<bt.length;yt++)Et(bt[yt],Tt);bt.length===2?St(Y,U,C):Y.projectionMatrix.copy(U.projectionMatrix),Ht(k,Y,Tt)};function Ht(k,K,mt){mt===null?k.matrix.copy(K.matrixWorld):(k.matrix.copy(mt.matrixWorld),k.matrix.invert(),k.matrix.multiply(K.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(K.projectionMatrix),k.projectionMatrixInverse.copy(K.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Nl*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(k){p=k,x!==null&&(x.fixedFoveation=k),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=k)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Y)},this.getCameraTexture=function(k){return v[k]};let oe=null;function G(k,K){if(_=K.getViewerPose(g||h),E=K,_!==null){const mt=_.views;S!==null&&(e.setRenderTargetFramebuffer(w,S.framebuffer),e.setRenderTarget(w));let Tt=!1;mt.length!==Y.cameras.length&&(Y.cameras.length=0,Tt=!0);for(let O=0;O<mt.length;O++){const le=mt[O];let qt=null;if(S!==null)qt=S.getViewport(le);else{const Lt=m.getViewSubImage(x,le);qt=Lt.viewport,O===0&&(e.setRenderTargetTextures(w,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(w))}let Bt=H[O];Bt===void 0&&(Bt=new gi,Bt.layers.enable(O),Bt.viewport=new ln,H[O]=Bt),Bt.matrix.fromArray(le.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(le.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(qt.x,qt.y,qt.width,qt.height),O===0&&(Y.matrix.copy(Bt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Tt===!0&&Y.cameras.push(Bt)}const bt=l.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&b){m=s.getBinding();const O=m.getDepthInformation(mt[0]);O&&O.isValid&&O.texture&&M.init(O,l.renderState)}if(bt&&bt.includes("camera-access")&&b){e.state.unbindTexture(),m=s.getBinding();for(let O=0;O<mt.length;O++){const le=mt[O].camera;if(le){let qt=v[le];qt||(qt=new My,v[le]=qt);const Bt=m.getCameraImage(le);qt.sourceTexture=Bt}}}}for(let mt=0;mt<I.length;mt++){const Tt=z[mt],bt=I[mt];Tt!==null&&bt!==void 0&&bt.update(Tt,K,g||h)}oe&&oe(k,K),K.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:K}),E=null}const dt=new by;dt.setAnimationLoop(G),this.setAnimationLoop=function(k){oe=k},this.dispose=function(){}}}const Xs=new Di,aC=new Ye;function sC(o,e){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function s(M,v){v.color.getRGB(M.fogColor.value,my(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,A,N,w){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),m(M,v)):v.isMeshPhongMaterial?(c(M,v),_(M,v)):v.isMeshStandardMaterial?(c(M,v),x(M,v),v.isMeshPhysicalMaterial&&S(M,v,w)):v.isMeshMatcapMaterial?(c(M,v),E(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),b(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?p(M,v,A,N):v.isSpriteMaterial?g(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Gn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Gn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const A=e.get(v),N=A.envMap,w=A.envMapRotation;N&&(M.envMap.value=N,Xs.copy(w),Xs.x*=-1,Xs.y*=-1,Xs.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Xs.y*=-1,Xs.z*=-1),M.envMapRotation.value.setFromMatrix4(aC.makeRotationFromEuler(Xs)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function p(M,v,A,N){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*A,M.scale.value=N*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function g(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function _(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function m(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function x(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function S(M,v,A){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Gn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=A.texture,M.transmissionSamplerSize.value.set(A.width,A.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,v){v.matcap&&(M.matcap.value=v.matcap)}function b(M,v){const A=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(A.matrixWorld),M.nearDistance.value=A.shadow.camera.near,M.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function rC(o,e,i,s){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(A,N){const w=N.program;s.uniformBlockBinding(A,w)}function g(A,N){let w=l[A.id];w===void 0&&(E(A),w=_(A),l[A.id]=w,A.addEventListener("dispose",M));const I=N.program;s.updateUBOMapping(A,I);const z=e.render.frame;c[A.id]!==z&&(x(A),c[A.id]=z)}function _(A){const N=m();A.__bindingPointIndex=N;const w=o.createBuffer(),I=A.__size,z=A.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,I,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,w),w}function m(){for(let A=0;A<d;A++)if(h.indexOf(A)===-1)return h.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(A){const N=l[A.id],w=A.uniforms,I=A.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let z=0,P=w.length;z<P;z++){const V=Array.isArray(w[z])?w[z]:[w[z]];for(let U=0,C=V.length;U<C;U++){const H=V[U];if(S(H,z,U,I)===!0){const Y=H.__offset,Q=Array.isArray(H.value)?H.value:[H.value];let pt=0;for(let at=0;at<Q.length;at++){const F=Q[at],nt=b(F);typeof F=="number"||typeof F=="boolean"?(H.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,Y+pt,H.__data)):F.isMatrix3?(H.__data[0]=F.elements[0],H.__data[1]=F.elements[1],H.__data[2]=F.elements[2],H.__data[3]=0,H.__data[4]=F.elements[3],H.__data[5]=F.elements[4],H.__data[6]=F.elements[5],H.__data[7]=0,H.__data[8]=F.elements[6],H.__data[9]=F.elements[7],H.__data[10]=F.elements[8],H.__data[11]=0):(F.toArray(H.__data,pt),pt+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Y,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(A,N,w,I){const z=A.value,P=N+"_"+w;if(I[P]===void 0)return typeof z=="number"||typeof z=="boolean"?I[P]=z:I[P]=z.clone(),!0;{const V=I[P];if(typeof z=="number"||typeof z=="boolean"){if(V!==z)return I[P]=z,!0}else if(V.equals(z)===!1)return V.copy(z),!0}return!1}function E(A){const N=A.uniforms;let w=0;const I=16;for(let P=0,V=N.length;P<V;P++){const U=Array.isArray(N[P])?N[P]:[N[P]];for(let C=0,H=U.length;C<H;C++){const Y=U[C],Q=Array.isArray(Y.value)?Y.value:[Y.value];for(let pt=0,at=Q.length;pt<at;pt++){const F=Q[pt],nt=b(F),j=w%I,ft=j%nt.boundary,St=j+ft;w+=ft,St!==0&&I-St<nt.storage&&(w+=I-St),Y.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=nt.storage}}}const z=w%I;return z>0&&(w+=I-z),A.__size=w,A.__cache={},this}function b(A){const N={boundary:0,storage:0};return typeof A=="number"||typeof A=="boolean"?(N.boundary=4,N.storage=4):A.isVector2?(N.boundary=8,N.storage=8):A.isVector3||A.isColor?(N.boundary=16,N.storage=12):A.isVector4?(N.boundary=16,N.storage=16):A.isMatrix3?(N.boundary=48,N.storage=48):A.isMatrix4?(N.boundary=64,N.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),N}function M(A){const N=A.target;N.removeEventListener("dispose",M);const w=h.indexOf(N.__bindingPointIndex);h.splice(w,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function v(){for(const A in l)o.deleteBuffer(l[A]);h=[],l={},c={}}return{bind:p,update:g,dispose:v}}class oC{constructor(e={}){const{canvas:i=PE(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:g=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=h;const E=new Uint32Array(4),b=new Int32Array(4);let M=null,v=null;const A=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ua,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let I=!1;this._outputColorSpace=ii;let z=0,P=0,V=null,U=-1,C=null;const H=new ln,Y=new ln;let Q=null;const pt=new ue(0);let at=0,F=i.width,nt=i.height,j=1,ft=null,St=null;const Et=new ln(0,0,F,nt),Ht=new ln(0,0,F,nt);let oe=!1;const G=new um;let dt=!1,k=!1;const K=new Ye,mt=new W,Tt=new ln,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Dt(){return V===null?j:1}let O=s;function le(D,tt){return i.getContext(D,tt)}try{const D={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:g,powerPreference:_,failIfMajorPerformanceCaveat:m};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Kp}`),i.addEventListener("webglcontextlost",Pt,!1),i.addEventListener("webglcontextrestored",jt,!1),i.addEventListener("webglcontextcreationerror",Rt,!1),O===null){const tt="webgl2";if(O=le(tt,D),O===null)throw le(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let qt,Bt,Lt,ee,Gt,se,Ne,Te,L,R,st,vt,At,gt,Wt,Nt,Qt,te,Ct,ut,Zt,Ft,It,ge;function q(){qt=new v2(O),qt.init(),Ft=new $R(O,qt),Bt=new c2(O,qt,e,Ft),Lt=new KR(O,qt),Bt.reversedDepthBuffer&&x&&Lt.buffers.depth.setReversed(!0),ee=new y2(O),Gt=new BR,se=new JR(O,qt,Lt,Gt,Bt,Ft,ee),Ne=new h2(w),Te=new g2(w),L=new AT(O),It=new l2(O,L),R=new _2(O,L,ee,It),st=new M2(O,R,L,ee),Ct=new S2(O,Bt,se),Nt=new f2(Gt),vt=new IR(w,Ne,Te,qt,Bt,It,Nt),At=new sC(w,Gt),gt=new HR,Wt=new YR(qt),te=new o2(w,Ne,Te,Lt,st,S,p),Qt=new ZR(w,st,Bt),ge=new rC(O,ee,Bt,Lt),ut=new u2(O,qt,ee),Zt=new x2(O,qt,ee),ee.programs=vt.programs,w.capabilities=Bt,w.extensions=qt,w.properties=Gt,w.renderLists=gt,w.shadowMap=Qt,w.state=Lt,w.info=ee}q();const Ut=new iC(w,O);this.xr=Ut,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const D=qt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=qt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(D){D!==void 0&&(j=D,this.setSize(F,nt,!1))},this.getSize=function(D){return D.set(F,nt)},this.setSize=function(D,tt,ct=!0){if(Ut.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=D,nt=tt,i.width=Math.floor(D*j),i.height=Math.floor(tt*j),ct===!0&&(i.style.width=D+"px",i.style.height=tt+"px"),this.setViewport(0,0,D,tt)},this.getDrawingBufferSize=function(D){return D.set(F*j,nt*j).floor()},this.setDrawingBufferSize=function(D,tt,ct){F=D,nt=tt,j=ct,i.width=Math.floor(D*ct),i.height=Math.floor(tt*ct),this.setViewport(0,0,D,tt)},this.getCurrentViewport=function(D){return D.copy(H)},this.getViewport=function(D){return D.copy(Et)},this.setViewport=function(D,tt,ct,ht){D.isVector4?Et.set(D.x,D.y,D.z,D.w):Et.set(D,tt,ct,ht),Lt.viewport(H.copy(Et).multiplyScalar(j).round())},this.getScissor=function(D){return D.copy(Ht)},this.setScissor=function(D,tt,ct,ht){D.isVector4?Ht.set(D.x,D.y,D.z,D.w):Ht.set(D,tt,ct,ht),Lt.scissor(Y.copy(Ht).multiplyScalar(j).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(D){Lt.setScissorTest(oe=D)},this.setOpaqueSort=function(D){ft=D},this.setTransparentSort=function(D){St=D},this.getClearColor=function(D){return D.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(D=!0,tt=!0,ct=!0){let ht=0;if(D){let et=!1;if(V!==null){const wt=V.texture.format;et=wt===sm||wt===am||wt===im}if(et){const wt=V.texture.type,Vt=wt===ki||wt===Js||wt===Cl||wt===wl||wt===tm||wt===em,Xt=te.getClearColor(),Ot=te.getClearAlpha(),Kt=Xt.r,re=Xt.g,ie=Xt.b;Vt?(E[0]=Kt,E[1]=re,E[2]=ie,E[3]=Ot,O.clearBufferuiv(O.COLOR,0,E)):(b[0]=Kt,b[1]=re,b[2]=ie,b[3]=Ot,O.clearBufferiv(O.COLOR,0,b))}else ht|=O.COLOR_BUFFER_BIT}tt&&(ht|=O.DEPTH_BUFFER_BIT),ct&&(ht|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ht)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Pt,!1),i.removeEventListener("webglcontextrestored",jt,!1),i.removeEventListener("webglcontextcreationerror",Rt,!1),te.dispose(),gt.dispose(),Wt.dispose(),Gt.dispose(),Ne.dispose(),Te.dispose(),st.dispose(),It.dispose(),ge.dispose(),vt.dispose(),Ut.dispose(),Ut.removeEventListener("sessionstart",yn),Ut.removeEventListener("sessionend",zn),oa.stop()};function Pt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function jt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const D=ee.autoReset,tt=Qt.enabled,ct=Qt.autoUpdate,ht=Qt.needsUpdate,et=Qt.type;q(),ee.autoReset=D,Qt.enabled=tt,Qt.autoUpdate=ct,Qt.needsUpdate=ht,Qt.type=et}function Rt(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Mt(D){const tt=D.target;tt.removeEventListener("dispose",Mt),$t(tt)}function $t(D){pe(D),Gt.remove(D)}function pe(D){const tt=Gt.get(D).programs;tt!==void 0&&(tt.forEach(function(ct){vt.releaseProgram(ct)}),D.isShaderMaterial&&vt.releaseShaderCache(D))}this.renderBufferDirect=function(D,tt,ct,ht,et,wt){tt===null&&(tt=bt);const Vt=et.isMesh&&et.matrixWorld.determinant()<0,Xt=Bl(D,tt,ct,ht,et);Lt.setMaterial(ht,Vt);let Ot=ct.index,Kt=1;if(ht.wireframe===!0){if(Ot=R.getWireframeAttribute(ct),Ot===void 0)return;Kt=2}const re=ct.drawRange,ie=ct.attributes.position;let Ee=re.start*Kt,He=(re.start+re.count)*Kt;wt!==null&&(Ee=Math.max(Ee,wt.start*Kt),He=Math.min(He,(wt.start+wt.count)*Kt)),Ot!==null?(Ee=Math.max(Ee,0),He=Math.min(He,Ot.count)):ie!=null&&(Ee=Math.max(Ee,0),He=Math.min(He,ie.count));const $e=He-Ee;if($e<0||$e===1/0)return;It.setup(et,ht,Xt,ct,Ot);let Ie,Oe=ut;if(Ot!==null&&(Ie=L.get(Ot),Oe=Zt,Oe.setIndex(Ie)),et.isMesh)ht.wireframe===!0?(Lt.setLineWidth(ht.wireframeLinewidth*Dt()),Oe.setMode(O.LINES)):Oe.setMode(O.TRIANGLES);else if(et.isLine){let ae=ht.linewidth;ae===void 0&&(ae=1),Lt.setLineWidth(ae*Dt()),et.isLineSegments?Oe.setMode(O.LINES):et.isLineLoop?Oe.setMode(O.LINE_LOOP):Oe.setMode(O.LINE_STRIP)}else et.isPoints?Oe.setMode(O.POINTS):et.isSprite&&Oe.setMode(O.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)Ll("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))Oe.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const ae=et._multiDrawStarts,Be=et._multiDrawCounts,Se=et._multiDrawCount,Sn=Ot?L.get(Ot).bytesPerElement:1,si=Gt.get(ht).currentProgram.getUniforms();for(let Pe=0;Pe<Se;Pe++)si.setValue(O,"_gl_DrawID",Pe),Oe.render(ae[Pe]/Sn,Be[Pe])}else if(et.isInstancedMesh)Oe.renderInstances(Ee,$e,et.count);else if(ct.isInstancedBufferGeometry){const ae=ct._maxInstanceCount!==void 0?ct._maxInstanceCount:1/0,Be=Math.min(ct.instanceCount,ae);Oe.renderInstances(Ee,$e,Be)}else Oe.render(Ee,$e)};function We(D,tt,ct){D.transparent===!0&&D.side===ia&&D.forceSinglePass===!1?(D.side=Gn,D.needsUpdate=!0,_i(D,tt,ct),D.side=ps,D.needsUpdate=!0,_i(D,tt,ct),D.side=ia):_i(D,tt,ct)}this.compile=function(D,tt,ct=null){ct===null&&(ct=D),v=Wt.get(ct),v.init(tt),N.push(v),ct.traverseVisible(function(et){et.isLight&&et.layers.test(tt.layers)&&(v.pushLight(et),et.castShadow&&v.pushShadow(et))}),D!==ct&&D.traverseVisible(function(et){et.isLight&&et.layers.test(tt.layers)&&(v.pushLight(et),et.castShadow&&v.pushShadow(et))}),v.setupLights();const ht=new Set;return D.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const wt=et.material;if(wt)if(Array.isArray(wt))for(let Vt=0;Vt<wt.length;Vt++){const Xt=wt[Vt];We(Xt,ct,et),ht.add(Xt)}else We(wt,ct,et),ht.add(wt)}),v=N.pop(),ht},this.compileAsync=function(D,tt,ct=null){const ht=this.compile(D,tt,ct);return new Promise(et=>{function wt(){if(ht.forEach(function(Vt){Gt.get(Vt).currentProgram.isReady()&&ht.delete(Vt)}),ht.size===0){et(D);return}setTimeout(wt,10)}qt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Re=null;function en(D){Re&&Re(D)}function yn(){oa.stop()}function zn(){oa.start()}const oa=new by;oa.setAnimationLoop(en),typeof self<"u"&&oa.setContext(self),this.setAnimationLoop=function(D){Re=D,Ut.setAnimationLoop(D),D===null?oa.stop():oa.start()},Ut.addEventListener("sessionstart",yn),Ut.addEventListener("sessionend",zn),this.render=function(D,tt){if(tt!==void 0&&tt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),Ut.enabled===!0&&Ut.isPresenting===!0&&(Ut.cameraAutoUpdate===!0&&Ut.updateCamera(tt),tt=Ut.getCamera()),D.isScene===!0&&D.onBeforeRender(w,D,tt,V),v=Wt.get(D,N.length),v.init(tt),N.push(v),K.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),G.setFromProjectionMatrix(K,ra,tt.reversedDepth),k=this.localClippingEnabled,dt=Nt.init(this.clippingPlanes,k),M=gt.get(D,A.length),M.init(),A.push(M),Ut.enabled===!0&&Ut.isPresenting===!0){const wt=w.xr.getDepthSensingMesh();wt!==null&&So(wt,tt,-1/0,w.sortObjects)}So(D,tt,0,w.sortObjects),M.finish(),w.sortObjects===!0&&M.sort(ft,St),yt=Ut.enabled===!1||Ut.isPresenting===!1||Ut.hasDepthSensing()===!1,yt&&te.addToRenderList(M,D),this.info.render.frame++,dt===!0&&Nt.beginShadows();const ct=v.state.shadowsArray;Qt.render(ct,D,tt),dt===!0&&Nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ht=M.opaque,et=M.transmissive;if(v.setupLights(),tt.isArrayCamera){const wt=tt.cameras;if(et.length>0)for(let Vt=0,Xt=wt.length;Vt<Xt;Vt++){const Ot=wt[Vt];ms(ht,et,D,Ot)}yt&&te.render(D);for(let Vt=0,Xt=wt.length;Vt<Xt;Vt++){const Ot=wt[Vt];Il(M,D,Ot,Ot.viewport)}}else et.length>0&&ms(ht,et,D,tt),yt&&te.render(D),Il(M,D,tt);V!==null&&P===0&&(se.updateMultisampleRenderTarget(V),se.updateRenderTargetMipmap(V)),D.isScene===!0&&D.onAfterRender(w,D,tt),It.resetDefaultState(),U=-1,C=null,N.pop(),N.length>0?(v=N[N.length-1],dt===!0&&Nt.setGlobalState(w.clippingPlanes,v.state.camera)):v=null,A.pop(),A.length>0?M=A[A.length-1]:M=null};function So(D,tt,ct,ht){if(D.visible===!1)return;if(D.layers.test(tt.layers)){if(D.isGroup)ct=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(tt);else if(D.isLight)v.pushLight(D),D.castShadow&&v.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||G.intersectsSprite(D)){ht&&Tt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(K);const Vt=st.update(D),Xt=D.material;Xt.visible&&M.push(D,Vt,Xt,ct,Tt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||G.intersectsObject(D))){const Vt=st.update(D),Xt=D.material;if(ht&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Tt.copy(D.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),Tt.copy(Vt.boundingSphere.center)),Tt.applyMatrix4(D.matrixWorld).applyMatrix4(K)),Array.isArray(Xt)){const Ot=Vt.groups;for(let Kt=0,re=Ot.length;Kt<re;Kt++){const ie=Ot[Kt],Ee=Xt[ie.materialIndex];Ee&&Ee.visible&&M.push(D,Vt,Ee,ct,Tt.z,ie)}}else Xt.visible&&M.push(D,Vt,Xt,ct,Tt.z,null)}}const wt=D.children;for(let Vt=0,Xt=wt.length;Vt<Xt;Vt++)So(wt[Vt],tt,ct,ht)}function Il(D,tt,ct,ht){const et=D.opaque,wt=D.transmissive,Vt=D.transparent;v.setupLightsView(ct),dt===!0&&Nt.setGlobalState(w.clippingPlanes,ct),ht&&Lt.viewport(H.copy(ht)),et.length>0&&la(et,tt,ct),wt.length>0&&la(wt,tt,ct),Vt.length>0&&la(Vt,tt,ct),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function ms(D,tt,ct,ht){if((ct.isScene===!0?ct.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ht.id]===void 0&&(v.state.transmissionRenderTarget[ht.id]=new wi(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?Vi:ki,minFilter:Qs,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const wt=v.state.transmissionRenderTarget[ht.id],Vt=ht.viewport||H;wt.setSize(Vt.z*w.transmissionResolutionScale,Vt.w*w.transmissionResolutionScale);const Xt=w.getRenderTarget(),Ot=w.getActiveCubeFace(),Kt=w.getActiveMipmapLevel();w.setRenderTarget(wt),w.getClearColor(pt),at=w.getClearAlpha(),at<1&&w.setClearColor(16777215,.5),w.clear(),yt&&te.render(ct);const re=w.toneMapping;w.toneMapping=Ua;const ie=ht.viewport;if(ht.viewport!==void 0&&(ht.viewport=void 0),v.setupLightsView(ht),dt===!0&&Nt.setGlobalState(w.clippingPlanes,ht),la(D,ct,ht),se.updateMultisampleRenderTarget(wt),se.updateRenderTargetMipmap(wt),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let He=0,$e=tt.length;He<$e;He++){const Ie=tt[He],Oe=Ie.object,ae=Ie.geometry,Be=Ie.material,Se=Ie.group;if(Be.side===ia&&Oe.layers.test(ht.layers)){const Sn=Be.side;Be.side=Gn,Be.needsUpdate=!0,gs(Oe,ct,ht,ae,Be,Se),Be.side=Sn,Be.needsUpdate=!0,Ee=!0}}Ee===!0&&(se.updateMultisampleRenderTarget(wt),se.updateRenderTargetMipmap(wt))}w.setRenderTarget(Xt,Ot,Kt),w.setClearColor(pt,at),ie!==void 0&&(ht.viewport=ie),w.toneMapping=re}function la(D,tt,ct){const ht=tt.isScene===!0?tt.overrideMaterial:null;for(let et=0,wt=D.length;et<wt;et++){const Vt=D[et],Xt=Vt.object,Ot=Vt.geometry,Kt=Vt.group;let re=Vt.material;re.allowOverride===!0&&ht!==null&&(re=ht),Xt.layers.test(ct.layers)&&gs(Xt,tt,ct,Ot,re,Kt)}}function gs(D,tt,ct,ht,et,wt){D.onBeforeRender(w,tt,ct,ht,et,wt),D.modelViewMatrix.multiplyMatrices(ct.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),et.onBeforeRender(w,tt,ct,ht,D,wt),et.transparent===!0&&et.side===ia&&et.forceSinglePass===!1?(et.side=Gn,et.needsUpdate=!0,w.renderBufferDirect(ct,tt,ht,et,D,wt),et.side=ps,et.needsUpdate=!0,w.renderBufferDirect(ct,tt,ht,et,D,wt),et.side=ia):w.renderBufferDirect(ct,tt,ht,et,D,wt),D.onAfterRender(w,tt,ct,ht,et,wt)}function _i(D,tt,ct){tt.isScene!==!0&&(tt=bt);const ht=Gt.get(D),et=v.state.lights,wt=v.state.shadowsArray,Vt=et.state.version,Xt=vt.getParameters(D,et.state,wt,tt,ct),Ot=vt.getProgramCacheKey(Xt);let Kt=ht.programs;ht.environment=D.isMeshStandardMaterial?tt.environment:null,ht.fog=tt.fog,ht.envMap=(D.isMeshStandardMaterial?Te:Ne).get(D.envMap||ht.environment),ht.envMapRotation=ht.environment!==null&&D.envMap===null?tt.environmentRotation:D.envMapRotation,Kt===void 0&&(D.addEventListener("dispose",Mt),Kt=new Map,ht.programs=Kt);let re=Kt.get(Ot);if(re!==void 0){if(ht.currentProgram===re&&ht.lightsStateVersion===Vt)return La(D,Xt),re}else Xt.uniforms=vt.getUniforms(D),D.onBeforeCompile(Xt,w),re=vt.acquireProgram(Xt,Ot),Kt.set(Ot,re),ht.uniforms=Xt.uniforms;const ie=ht.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ie.clippingPlanes=Nt.uniform),La(D,Xt),ht.needsLights=Fl(D),ht.lightsStateVersion=Vt,ht.needsLights&&(ie.ambientLightColor.value=et.state.ambient,ie.lightProbe.value=et.state.probe,ie.directionalLights.value=et.state.directional,ie.directionalLightShadows.value=et.state.directionalShadow,ie.spotLights.value=et.state.spot,ie.spotLightShadows.value=et.state.spotShadow,ie.rectAreaLights.value=et.state.rectArea,ie.ltc_1.value=et.state.rectAreaLTC1,ie.ltc_2.value=et.state.rectAreaLTC2,ie.pointLights.value=et.state.point,ie.pointLightShadows.value=et.state.pointShadow,ie.hemisphereLights.value=et.state.hemi,ie.directionalShadowMap.value=et.state.directionalShadowMap,ie.directionalShadowMatrix.value=et.state.directionalShadowMatrix,ie.spotShadowMap.value=et.state.spotShadowMap,ie.spotLightMatrix.value=et.state.spotLightMatrix,ie.spotLightMap.value=et.state.spotLightMap,ie.pointShadowMap.value=et.state.pointShadowMap,ie.pointShadowMatrix.value=et.state.pointShadowMatrix),ht.currentProgram=re,ht.uniformsList=null,re}function vs(D){if(D.uniformsList===null){const tt=D.currentProgram.getUniforms();D.uniformsList=Ic.seqWithValue(tt.seq,D.uniforms)}return D.uniformsList}function La(D,tt){const ct=Gt.get(D);ct.outputColorSpace=tt.outputColorSpace,ct.batching=tt.batching,ct.batchingColor=tt.batchingColor,ct.instancing=tt.instancing,ct.instancingColor=tt.instancingColor,ct.instancingMorph=tt.instancingMorph,ct.skinning=tt.skinning,ct.morphTargets=tt.morphTargets,ct.morphNormals=tt.morphNormals,ct.morphColors=tt.morphColors,ct.morphTargetsCount=tt.morphTargetsCount,ct.numClippingPlanes=tt.numClippingPlanes,ct.numIntersection=tt.numClipIntersection,ct.vertexAlphas=tt.vertexAlphas,ct.vertexTangents=tt.vertexTangents,ct.toneMapping=tt.toneMapping}function Bl(D,tt,ct,ht,et){tt.isScene!==!0&&(tt=bt),se.resetTextureUnits();const wt=tt.fog,Vt=ht.isMeshStandardMaterial?tt.environment:null,Xt=V===null?w.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:fo,Ot=(ht.isMeshStandardMaterial?Te:Ne).get(ht.envMap||Vt),Kt=ht.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,re=!!ct.attributes.tangent&&(!!ht.normalMap||ht.anisotropy>0),ie=!!ct.morphAttributes.position,Ee=!!ct.morphAttributes.normal,He=!!ct.morphAttributes.color;let $e=Ua;ht.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&($e=w.toneMapping);const Ie=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Oe=Ie!==void 0?Ie.length:0,ae=Gt.get(ht),Be=v.state.lights;if(dt===!0&&(k===!0||D!==C)){const sn=D===C&&ht.id===U;Nt.setState(ht,D,sn)}let Se=!1;ht.version===ae.__version?(ae.needsLights&&ae.lightsStateVersion!==Be.state.version||ae.outputColorSpace!==Xt||et.isBatchedMesh&&ae.batching===!1||!et.isBatchedMesh&&ae.batching===!0||et.isBatchedMesh&&ae.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&ae.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&ae.instancing===!1||!et.isInstancedMesh&&ae.instancing===!0||et.isSkinnedMesh&&ae.skinning===!1||!et.isSkinnedMesh&&ae.skinning===!0||et.isInstancedMesh&&ae.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&ae.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&ae.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&ae.instancingMorph===!1&&et.morphTexture!==null||ae.envMap!==Ot||ht.fog===!0&&ae.fog!==wt||ae.numClippingPlanes!==void 0&&(ae.numClippingPlanes!==Nt.numPlanes||ae.numIntersection!==Nt.numIntersection)||ae.vertexAlphas!==Kt||ae.vertexTangents!==re||ae.morphTargets!==ie||ae.morphNormals!==Ee||ae.morphColors!==He||ae.toneMapping!==$e||ae.morphTargetsCount!==Oe)&&(Se=!0):(Se=!0,ae.__version=ht.version);let Sn=ae.currentProgram;Se===!0&&(Sn=_i(ht,tt,et));let si=!1,Pe=!1,Oa=!1;const Qe=Sn.getUniforms(),Xn=ae.uniforms;if(Lt.useProgram(Sn.program)&&(si=!0,Pe=!0,Oa=!0),ht.id!==U&&(U=ht.id,Pe=!0),si||C!==D){Lt.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Qe.setValue(O,"projectionMatrix",D.projectionMatrix),Qe.setValue(O,"viewMatrix",D.matrixWorldInverse);const In=Qe.map.cameraPosition;In!==void 0&&In.setValue(O,mt.setFromMatrixPosition(D.matrixWorld)),Bt.logarithmicDepthBuffer&&Qe.setValue(O,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ht.isMeshPhongMaterial||ht.isMeshToonMaterial||ht.isMeshLambertMaterial||ht.isMeshBasicMaterial||ht.isMeshStandardMaterial||ht.isShaderMaterial)&&Qe.setValue(O,"isOrthographic",D.isOrthographicCamera===!0),C!==D&&(C=D,Pe=!0,Oa=!0)}if(et.isSkinnedMesh){Qe.setOptional(O,et,"bindMatrix"),Qe.setOptional(O,et,"bindMatrixInverse");const sn=et.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),Qe.setValue(O,"boneTexture",sn.boneTexture,se))}et.isBatchedMesh&&(Qe.setOptional(O,et,"batchingTexture"),Qe.setValue(O,"batchingTexture",et._matricesTexture,se),Qe.setOptional(O,et,"batchingIdTexture"),Qe.setValue(O,"batchingIdTexture",et._indirectTexture,se),Qe.setOptional(O,et,"batchingColorTexture"),et._colorsTexture!==null&&Qe.setValue(O,"batchingColorTexture",et._colorsTexture,se));const hn=ct.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Ct.update(et,ct,Sn),(Pe||ae.receiveShadow!==et.receiveShadow)&&(ae.receiveShadow=et.receiveShadow,Qe.setValue(O,"receiveShadow",et.receiveShadow)),ht.isMeshGouraudMaterial&&ht.envMap!==null&&(Xn.envMap.value=Ot,Xn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),ht.isMeshStandardMaterial&&ht.envMap===null&&tt.environment!==null&&(Xn.envMapIntensity.value=tt.environmentIntensity),Pe&&(Qe.setValue(O,"toneMappingExposure",w.toneMappingExposure),ae.needsLights&&Yc(Xn,Oa),wt&&ht.fog===!0&&At.refreshFogUniforms(Xn,wt),At.refreshMaterialUniforms(Xn,ht,j,nt,v.state.transmissionRenderTarget[D.id]),Ic.upload(O,vs(ae),Xn,se)),ht.isShaderMaterial&&ht.uniformsNeedUpdate===!0&&(Ic.upload(O,vs(ae),Xn,se),ht.uniformsNeedUpdate=!1),ht.isSpriteMaterial&&Qe.setValue(O,"center",et.center),Qe.setValue(O,"modelViewMatrix",et.modelViewMatrix),Qe.setValue(O,"normalMatrix",et.normalMatrix),Qe.setValue(O,"modelMatrix",et.matrixWorld),ht.isShaderMaterial||ht.isRawShaderMaterial){const sn=ht.uniformsGroups;for(let In=0,nr=sn.length;In<nr;In++){const Xi=sn[In];ge.update(Xi,Sn),ge.bind(Xi,Sn)}}return Sn}function Yc(D,tt){D.ambientLightColor.needsUpdate=tt,D.lightProbe.needsUpdate=tt,D.directionalLights.needsUpdate=tt,D.directionalLightShadows.needsUpdate=tt,D.pointLights.needsUpdate=tt,D.pointLightShadows.needsUpdate=tt,D.spotLights.needsUpdate=tt,D.spotLightShadows.needsUpdate=tt,D.rectAreaLights.needsUpdate=tt,D.hemisphereLights.needsUpdate=tt}function Fl(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(D,tt,ct){const ht=Gt.get(D);ht.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ht.__autoAllocateDepthBuffer===!1&&(ht.__useRenderToTexture=!1),Gt.get(D.texture).__webglTexture=tt,Gt.get(D.depthTexture).__webglTexture=ht.__autoAllocateDepthBuffer?void 0:ct,ht.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,tt){const ct=Gt.get(D);ct.__webglFramebuffer=tt,ct.__useDefaultFramebuffer=tt===void 0};const Mo=O.createFramebuffer();this.setRenderTarget=function(D,tt=0,ct=0){V=D,z=tt,P=ct;let ht=!0,et=null,wt=!1,Vt=!1;if(D){const Ot=Gt.get(D);if(Ot.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(O.FRAMEBUFFER,null),ht=!1;else if(Ot.__webglFramebuffer===void 0)se.setupRenderTarget(D);else if(Ot.__hasExternalTextures)se.rebindTextures(D,Gt.get(D.texture).__webglTexture,Gt.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const ie=D.depthTexture;if(Ot.__boundDepthTexture!==ie){if(ie!==null&&Gt.has(ie)&&(D.width!==ie.image.width||D.height!==ie.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");se.setupDepthRenderbuffer(D)}}const Kt=D.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(Vt=!0);const re=Gt.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(re[tt])?et=re[tt][ct]:et=re[tt],wt=!0):D.samples>0&&se.useMultisampledRTT(D)===!1?et=Gt.get(D).__webglMultisampledFramebuffer:Array.isArray(re)?et=re[ct]:et=re,H.copy(D.viewport),Y.copy(D.scissor),Q=D.scissorTest}else H.copy(Et).multiplyScalar(j).floor(),Y.copy(Ht).multiplyScalar(j).floor(),Q=oe;if(ct!==0&&(et=Mo),Lt.bindFramebuffer(O.FRAMEBUFFER,et)&&ht&&Lt.drawBuffers(D,et),Lt.viewport(H),Lt.scissor(Y),Lt.setScissorTest(Q),wt){const Ot=Gt.get(D.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Ot.__webglTexture,ct)}else if(Vt){const Ot=tt;for(let Kt=0;Kt<D.textures.length;Kt++){const re=Gt.get(D.textures[Kt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Kt,re.__webglTexture,ct,Ot)}}else if(D!==null&&ct!==0){const Ot=Gt.get(D.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ot.__webglTexture,ct)}U=-1},this.readRenderTargetPixels=function(D,tt,ct,ht,et,wt,Vt,Xt=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Gt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Vt!==void 0&&(Ot=Ot[Vt]),Ot){Lt.bindFramebuffer(O.FRAMEBUFFER,Ot);try{const Kt=D.textures[Xt],re=Kt.format,ie=Kt.type;if(!Bt.textureFormatReadable(re)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=D.width-ht&&ct>=0&&ct<=D.height-et&&(D.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Xt),O.readPixels(tt,ct,ht,et,Ft.convert(re),Ft.convert(ie),wt))}finally{const Kt=V!==null?Gt.get(V).__webglFramebuffer:null;Lt.bindFramebuffer(O.FRAMEBUFFER,Kt)}}},this.readRenderTargetPixelsAsync=async function(D,tt,ct,ht,et,wt,Vt,Xt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Gt.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Vt!==void 0&&(Ot=Ot[Vt]),Ot)if(tt>=0&&tt<=D.width-ht&&ct>=0&&ct<=D.height-et){Lt.bindFramebuffer(O.FRAMEBUFFER,Ot);const Kt=D.textures[Xt],re=Kt.format,ie=Kt.type;if(!Bt.textureFormatReadable(re))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ee=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ee),O.bufferData(O.PIXEL_PACK_BUFFER,wt.byteLength,O.STREAM_READ),D.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Xt),O.readPixels(tt,ct,ht,et,Ft.convert(re),Ft.convert(ie),0);const He=V!==null?Gt.get(V).__webglFramebuffer:null;Lt.bindFramebuffer(O.FRAMEBUFFER,He);const $e=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await zE(O,$e,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ee),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,wt),O.deleteBuffer(Ee),O.deleteSync($e),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,tt=null,ct=0){const ht=Math.pow(2,-ct),et=Math.floor(D.image.width*ht),wt=Math.floor(D.image.height*ht),Vt=tt!==null?tt.x:0,Xt=tt!==null?tt.y:0;se.setTexture2D(D,0),O.copyTexSubImage2D(O.TEXTURE_2D,ct,0,0,Vt,Xt,et,wt),Lt.unbindTexture()};const _s=O.createFramebuffer(),Wc=O.createFramebuffer();this.copyTextureToTexture=function(D,tt,ct=null,ht=null,et=0,wt=null){wt===null&&(et!==0?(Ll("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),wt=et,et=0):wt=0);let Vt,Xt,Ot,Kt,re,ie,Ee,He,$e;const Ie=D.isCompressedTexture?D.mipmaps[wt]:D.image;if(ct!==null)Vt=ct.max.x-ct.min.x,Xt=ct.max.y-ct.min.y,Ot=ct.isBox3?ct.max.z-ct.min.z:1,Kt=ct.min.x,re=ct.min.y,ie=ct.isBox3?ct.min.z:0;else{const hn=Math.pow(2,-et);Vt=Math.floor(Ie.width*hn),Xt=Math.floor(Ie.height*hn),D.isDataArrayTexture?Ot=Ie.depth:D.isData3DTexture?Ot=Math.floor(Ie.depth*hn):Ot=1,Kt=0,re=0,ie=0}ht!==null?(Ee=ht.x,He=ht.y,$e=ht.z):(Ee=0,He=0,$e=0);const Oe=Ft.convert(tt.format),ae=Ft.convert(tt.type);let Be;tt.isData3DTexture?(se.setTexture3D(tt,0),Be=O.TEXTURE_3D):tt.isDataArrayTexture||tt.isCompressedArrayTexture?(se.setTexture2DArray(tt,0),Be=O.TEXTURE_2D_ARRAY):(se.setTexture2D(tt,0),Be=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,tt.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,tt.unpackAlignment);const Se=O.getParameter(O.UNPACK_ROW_LENGTH),Sn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),si=O.getParameter(O.UNPACK_SKIP_PIXELS),Pe=O.getParameter(O.UNPACK_SKIP_ROWS),Oa=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ie.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ie.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Kt),O.pixelStorei(O.UNPACK_SKIP_ROWS,re),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ie);const Qe=D.isDataArrayTexture||D.isData3DTexture,Xn=tt.isDataArrayTexture||tt.isData3DTexture;if(D.isDepthTexture){const hn=Gt.get(D),sn=Gt.get(tt),In=Gt.get(hn.__renderTarget),nr=Gt.get(sn.__renderTarget);Lt.bindFramebuffer(O.READ_FRAMEBUFFER,In.__webglFramebuffer),Lt.bindFramebuffer(O.DRAW_FRAMEBUFFER,nr.__webglFramebuffer);for(let Xi=0;Xi<Ot;Xi++)Qe&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Gt.get(D).__webglTexture,et,ie+Xi),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Gt.get(tt).__webglTexture,wt,$e+Xi)),O.blitFramebuffer(Kt,re,Vt,Xt,Ee,He,Vt,Xt,O.DEPTH_BUFFER_BIT,O.NEAREST);Lt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(et!==0||D.isRenderTargetTexture||Gt.has(D)){const hn=Gt.get(D),sn=Gt.get(tt);Lt.bindFramebuffer(O.READ_FRAMEBUFFER,_s),Lt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Wc);for(let In=0;In<Ot;In++)Qe?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,hn.__webglTexture,et,ie+In):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,hn.__webglTexture,et),Xn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,sn.__webglTexture,wt,$e+In):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,sn.__webglTexture,wt),et!==0?O.blitFramebuffer(Kt,re,Vt,Xt,Ee,He,Vt,Xt,O.COLOR_BUFFER_BIT,O.NEAREST):Xn?O.copyTexSubImage3D(Be,wt,Ee,He,$e+In,Kt,re,Vt,Xt):O.copyTexSubImage2D(Be,wt,Ee,He,Kt,re,Vt,Xt);Lt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Xn?D.isDataTexture||D.isData3DTexture?O.texSubImage3D(Be,wt,Ee,He,$e,Vt,Xt,Ot,Oe,ae,Ie.data):tt.isCompressedArrayTexture?O.compressedTexSubImage3D(Be,wt,Ee,He,$e,Vt,Xt,Ot,Oe,Ie.data):O.texSubImage3D(Be,wt,Ee,He,$e,Vt,Xt,Ot,Oe,ae,Ie):D.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,wt,Ee,He,Vt,Xt,Oe,ae,Ie.data):D.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,wt,Ee,He,Ie.width,Ie.height,Oe,Ie.data):O.texSubImage2D(O.TEXTURE_2D,wt,Ee,He,Vt,Xt,Oe,ae,Ie);O.pixelStorei(O.UNPACK_ROW_LENGTH,Se),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Sn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,si),O.pixelStorei(O.UNPACK_SKIP_ROWS,Pe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Oa),wt===0&&tt.generateMipmaps&&O.generateMipmap(Be),Lt.unbindTexture()},this.initRenderTarget=function(D){Gt.get(D).__webglFramebuffer===void 0&&se.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?se.setTextureCube(D,0):D.isData3DTexture?se.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?se.setTexture2DArray(D,0):se.setTexture2D(D,0),Lt.unbindTexture()},this.resetState=function(){z=0,P=0,V=null,Lt.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ra}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(e),i.unpackColorSpace=Le._getUnpackColorSpace()}}const Bc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class yo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const lC=new dm(-1,1,1,-1,0,1);class uC extends kn{constructor(){super(),this.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xn([0,2,0,0,2,0],2))}}const cC=new uC;class mm{constructor(e){this._mesh=new un(cC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,lC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class fC extends yo{constructor(e,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,e instanceof an?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pl.clone(e.uniforms),this.material=new an({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new mm(this.material)}render(e,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Gx extends yo{constructor(e,i){super(),this.scene=e,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,i,s){const l=e.getContext(),c=e.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let h,d;this.inverse?(h=0,d=1):(h=1,d=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,h,4294967295),c.buffers.stencil.setClear(d),c.buffers.stencil.setLocked(!0),e.setRenderTarget(s),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class hC extends yo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class dC{constructor(e,i){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),i===void 0){const s=e.getSize(new de);this._width=s.width,this._height=s.height,i=new wi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Vi}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new fC(Bc),this.copyPass.material.blending=Da,this.clock=new Ty}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,i){this.passes.splice(i,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const i=this.passes.indexOf(e);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(e){for(let i=e+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,c=this.passes.length;l<c;l++){const h=this.passes[l];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),h.render(this.renderer,this.writeBuffer,this.readBuffer,e,s),h.needsSwap){if(s){const d=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),p.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}Gx!==void 0&&(h instanceof Gx?s=!0:h instanceof hC&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(e){if(e===void 0){const i=this.renderer.getSize(new de);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,i){this._width=e,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,l)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class pC extends yo{constructor(e,i,s=null,l=null,c=null){super(),this.scene=e,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ue}render(e,i,s){const l=e.autoClear;e.autoClear=!1;let c,h;this.overrideMaterial!==null&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(c=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=h),e.autoClear=l}}const mC={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ue(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class po extends yo{constructor(e,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=e!==void 0?new de(e.x,e.y):new de(256,256),this.clearColor=new ue(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);this.renderTargetBright=new wi(c,h,{type:Vi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let _=0;_<this.nMips;_++){const m=new wi(c,h,{type:Vi});m.texture.name="UnrealBloomPass.h"+_,m.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(m);const x=new wi(c,h,{type:Vi});x.texture.name="UnrealBloomPass.v"+_,x.texture.generateMipmaps=!1,this.renderTargetsVertical.push(x),c=Math.round(c/2),h=Math.round(h/2)}const d=mC;this.highPassUniforms=Pl.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new an({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const p=[3,5,7,9,11];c=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);for(let _=0;_<this.nMips;_++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[_])),this.separableBlurMaterials[_].uniforms.invSize.value=new de(1/c,1/h),c=Math.round(c/2),h=Math.round(h/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const g=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=g,this.bloomTintColors=[new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1),new W(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Pl.clone(Bc.uniforms),this.blendMaterial=new an({uniforms:this.copyUniforms,vertexShader:Bc.vertexShader,fragmentShader:Bc.fragmentShader,blending:Rl,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ue,this._oldClearAlpha=1,this._basic=new Ol,this._fsQuad=new mm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,i){let s=Math.round(e/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(s,l),this.renderTargetsVertical[c].setSize(s,l),this.separableBlurMaterials[c].uniforms.invSize.value=new de(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(e,i,s,l,c){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const h=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),c&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let d=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[p].uniforms.direction.value=po.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[p]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=po.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[p]),e.clear(),this._fsQuad.render(e),d=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(s),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=h}_getSeparableBlurMaterial(e){const i=[];for(let s=0;s<e;s++)i.push(.39894*Math.exp(-.5*s*s/(e*e))/e);return new an({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new de(.5,.5)},direction:{value:new de(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(e){return new an({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}po.BlurDirectionX=new de(1,0);po.BlurDirectionY=new de(0,1);const Nc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class gC extends yo{constructor(){super(),this.uniforms=Pl.clone(Nc.uniforms),this.material=new gT({name:Nc.name,uniforms:this.uniforms,vertexShader:Nc.vertexShader,fragmentShader:Nc.fragmentShader}),this._fsQuad=new mm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,i,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Le.getTransfer(this._outputColorSpace)===qe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Wx?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===jx?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Zx?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Jp?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Kx?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Jx?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Qx&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const yl=(o,e,i)=>Math.min(i,Math.max(e,o)),Sl=(o,e,i,s)=>e+(o-e)*Math.exp(-i*s),Dy=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]);class vC{constructor(){ve(this,"shipQuaternion",new ai);ve(this,"lookQuaternion",new ai);ve(this,"position",new W);ve(this,"yaw",0);ve(this,"pitch",0);ve(this,"yawVelocity",0);ve(this,"pitchVelocity",0);ve(this,"speed",0);ve(this,"lookYaw",0);ve(this,"lookPitch",0);ve(this,"lookTargetYaw",0);ve(this,"lookTargetPitch",0);ve(this,"touchX",0);ve(this,"touchY",0);ve(this,"touchSteering",!1);ve(this,"keys",new Set);ve(this,"elapsed",0);ve(this,"lastContext","");ve(this,"euler",new Di(0,0,0,"YXZ"));ve(this,"forward",new W)}key(e,i){Dy.has(e)&&(i?this.touchSteering||this.keys.add(e):this.keys.delete(e))}steerTouch(e,i,s){this.touchSteering=s,this.keys.clear();const l=Math.hypot(e,i),c=s?yl((l-.1)/.9,0,1):0;this.touchX=l?e/l*c:0,this.touchY=l?i/l*c:0}look(e,i,s,l){if(l.paused||l.blocked)return;const c=s?l.touchSensitivity:l.sensitivity;this.lookTargetYaw=yl(this.lookTargetYaw-yl(e,-.2,.2)*c*1.6*(!s&&l.invertMouseX?-1:1),-.85,.85),this.lookTargetPitch=yl(this.lookTargetPitch-yl(i,-.2,.2)*c*1.6*(!s&&l.invertMouseY?-1:1),-.5,.5)}reset(e=!1){this.keys.clear(),this.steerTouch(0,0,!1),e&&(this.yawVelocity=this.pitchVelocity=0,this.lookTargetYaw=this.lookYaw,this.lookTargetPitch=this.lookPitch)}step(e,i){const s=`${i.mode}/${i.paused}/${i.started}/${i.blocked}`;if(this.lastContext&&s!==this.lastContext&&this.reset(i.paused||i.blocked),this.lastContext=s,!Number.isFinite(e)||e<=0||e>.25||i.paused)return;const l=Math.min(e,.1);this.elapsed+=l;const c=i.mode==="Manual Flight"&&i.started&&!i.blocked;let h=0,d=0;if(c){h=this.touchSteering?this.touchX:Number(this.keys.has("KeyD")||this.keys.has("ArrowRight"))-Number(this.keys.has("KeyA")||this.keys.has("ArrowLeft")),d=this.touchSteering?this.touchY:Number(this.keys.has("KeyS")||this.keys.has("ArrowDown"))-Number(this.keys.has("KeyW")||this.keys.has("ArrowUp"));const v=Math.max(1,Math.hypot(h,d));h/=v,d/=v}const p=i.reduced?.45:1,g=this.touchSteering?i.touchSensitivity:i.sensitivity,_=i.started&&i.mode!=="Manual Flight"&&!i.blocked&&!i.reduced?i.motion*(i.mode==="Meditation"?.002:.006):0,m=c?-h*.22*g*p:Math.sin(this.elapsed*.055)*_,x=c?-d*.16*g*p:Math.sin(this.elapsed*.08)*_*.3,S=3,E=(1-Math.exp(-S*l))/S;this.yaw+=m*l+(this.yawVelocity-m)*E,this.pitch+=x*l+(this.pitchVelocity-x)*E,this.yawVelocity=Sl(this.yawVelocity,m,S,l),this.pitchVelocity=Sl(this.pitchVelocity,x,S,l),this.pitch=Math.atan2(Math.sin(this.pitch),Math.cos(this.pitch)),this.yaw=Math.atan2(Math.sin(this.yaw),Math.cos(this.yaw)),this.shipQuaternion.setFromEuler(this.euler.set(this.pitch,this.yaw,0,"YXZ")),this.lookYaw=Sl(this.lookYaw,this.lookTargetYaw,6,l),this.lookPitch=Sl(this.lookPitch,this.lookTargetPitch,6,l),this.lookQuaternion.setFromEuler(this.euler.set(this.lookPitch,this.lookYaw,0,"YXZ"));const b=i.started?Math.max(0,i.speed)*(i.mode==="Meditation"?.15:1)*(i.reduced?.3:1):2,M=b*l+(this.speed-b)*(1-Math.exp(-.8*l))/.8;this.speed=Sl(this.speed,b,.8,l),this.forward.set(0,0,-1).applyQuaternion(this.shipQuaternion),this.position.addScaledVector(this.forward,M)}}function _C(o,e,i,s){let l=null,c=null,h="";const d=[],p=(v,A,N,w)=>{v.addEventListener(A,N,w),d.push(()=>v.removeEventListener(A,N,w))},g=()=>!s().paused&&!s().blocked&&document.visibilityState!=="hidden",_=()=>g()&&s().started&&s().mode==="Manual Flight",m=(v,A)=>{e.style.setProperty("--stick-x",`${v*34}px`),e.style.setProperty("--stick-y",`${A*34}px`)},x=()=>{const v=l;l=null,v&&o.hasPointerCapture(v.id)&&o.releasePointerCapture(v.id)},S=()=>{const v=c;c=null,i.steerTouch(0,0,!1),m(0,0),v!==null&&e.hasPointerCapture(v)&&e.releasePointerCapture(v)},E=()=>{x(),S(),i.reset(!0)};p(o,"pointerdown",(v=>{!g()||l||v.pointerType==="mouse"&&(v.button!==0||c!==null)||(v.preventDefault(),l={id:v.pointerId,type:v.pointerType,x:v.clientX,y:v.clientY},o.setPointerCapture(v.pointerId))})),p(o,"pointermove",(v=>{if((l==null?void 0:l.id)!==v.pointerId)return;if(!g()||v.pointerType==="mouse"&&!(v.buttons&1)){x();return}v.preventDefault();const A=Math.max(240,Math.min(o.clientWidth,o.clientHeight));i.look((v.clientX-l.x)/A,(v.clientY-l.y)/A,l.type!=="mouse",s()),l.x=v.clientX,l.y=v.clientY}));for(const v of["pointerup","pointercancel","lostpointercapture"])p(o,v,(A=>{A.pointerId===(l==null?void 0:l.id)&&x()}));const b=v=>{const A=e.getBoundingClientRect();let N=(v.clientX-A.left-A.width/2)/(A.width*.35),w=(v.clientY-A.top-A.height/2)/(A.height*.35);const I=Math.max(1,Math.hypot(N,w));N/=I,w/=I,i.steerTouch(N,w,!0),m(N,w)};p(e,"pointerdown",(v=>{v.pointerType==="mouse"||c!==null||!_()||(v.preventDefault(),v.stopPropagation(),(l==null?void 0:l.type)==="mouse"&&x(),c=v.pointerId,e.setPointerCapture(v.pointerId),b(v))})),p(e,"pointermove",(v=>{if(v.pointerId===c){if(!_()){S();return}v.preventDefault(),b(v)}}));for(const v of["pointerup","pointercancel","lostpointercapture"])p(e,v,(A=>{A.pointerId===c&&S()}));const M=v=>v instanceof HTMLElement&&!!v.closest('input,select,textarea,[contenteditable="true"]');return p(window,"keydown",(v=>{!Dy.has(v.code)||M(v.target)||!_()||v.ctrlKey||v.metaKey||v.altKey||(v.preventDefault(),i.key(v.code,!0))})),p(window,"keyup",(v=>i.key(v.code,!1))),p(window,"blur",E),p(document,"visibilitychange",E),p(window,"resize",E),p(window,"orientationchange",E),p(o,"contextmenu",v=>v.preventDefault()),p(e,"contextmenu",v=>v.preventDefault()),{sync(){const v=s(),A=`${v.mode}/${v.paused}/${v.started}/${v.blocked}`;h&&A!==h&&(x(),S(),i.reset(v.paused||v.blocked)),h=A},dispose(){E(),d.forEach(v=>v())}}}function xC(o,e,i){if(!Number.isFinite(e)||e<=0||e>.25||i.paused){o.step(0,i);return}const s=Math.ceil(e/(1/60)),l=e/s;for(let c=0;c<s;c++)o.step(l,i)}class yC{constructor(){ve(this,"scale",1);ve(this,"elapsed",0);ve(this,"average",1/60);ve(this,"nextDecision",3)}reset(){this.scale=1,this.elapsed=0,this.average=1/60,this.nextDecision=3}observe(e,i,s){if(!i||s||!Number.isFinite(e)||e<=0||e>1||(this.elapsed+=e,this.average+=(Math.min(e,.2)-this.average)*(1-Math.exp(-e/1.5)),this.elapsed<this.nextDecision))return!1;const l=this.scale;return this.average>.028?(this.scale=Math.max(.6,Math.round((this.scale-.1)*100)/100),this.nextDecision=this.elapsed+3):this.average<.018?(this.scale=Math.min(1,Math.round((this.scale+.05)*100)/100),this.nextDecision=this.elapsed+10):this.nextDecision=this.elapsed+3,l!==this.scale}}const Ml=o=>(o=Math.max(0,Math.min(1,o)),o*o*(3-2*o)),SC=[2,4,1,0,3],MC=10.2;class Uy{constructor(){ve(this,"phase","idle");ve(this,"elapsed",0);ve(this,"destination",0);ve(this,"seed",7123);ve(this,"committed",!1);ve(this,"justCommitted",!1);ve(this,"energy",0);ve(this,"charge",0);ve(this,"veil",0)}get busy(){return this.phase!=="idle"}start(e,i,s=!1){return this.busy||s?!1:(this.destination=SC[e]??(e+1)%5,this.seed=Math.imul(i|0,1664525)+1013904223>>>0||1,this.elapsed=0,this.committed=!1,this.justCommitted=!1,this.energy=0,this.veil=0,this.charge=0,this.phase="charging",!0)}advance(e,i=!1){if(this.justCommitted=!1,!this.busy||i||!Number.isFinite(e)||e<=0)return;this.elapsed+=Math.min(e,.25);const s=this.elapsed;s<1.4?(this.phase="charging",this.charge=Ml(s/1.4),this.energy=this.charge*.035):s<4?(this.phase="accelerating",this.charge=1,this.energy=.035+.965*Ml((s-1.4)/2.6)):s<5.6?(this.phase="transit",this.charge=1,this.energy=1):s<9?(this.phase="arriving",this.energy=1-Ml((s-5.6)/3.4),this.charge=this.energy):s<MC?(this.phase="stabilized",this.energy=0,this.charge=0):(this.phase="idle",this.energy=0,this.charge=0),this.veil=s<4?0:s<4.8?Ml((s-4)/.8):s<5.6?1:1-Ml((s-5.6)/1.7),!this.committed&&s>=4.8&&(this.committed=!0,this.justCommitted=!0)}}function EC(o){const i=new Float32Array(4680),s=new Float32Array(780*2),l=new Float32Array(780*2*3);let c=4171;const h=()=>(c=c*16807%2147483647,(c-1)/2147483646);for(let E=0;E<780;E++){const b=h()*Math.PI*2,M=18+Math.pow(h(),1.3)*550,v=h();for(let A=0;A<2;A++)i.set([Math.cos(b)*M,Math.sin(b)*M*.72,v],(E*2+A)*3),s[E*2+A]=A}const d=new kn;d.setAttribute("position",new En(l,3)),d.setAttribute("lane",new En(i,3)),d.setAttribute("endpoint",new En(s,1));const p={time:{value:0},energy:{value:0},tint:{value:new ue("#b7d8ef")}},g=new ue("#d4ecfa"),_=new an({uniforms:p,transparent:!0,depthWrite:!1,blending:Rl,vertexShader:`attribute vec3 lane;attribute float endpoint;uniform float time,energy;varying float fade;
      void main(){float z=-12.-fract(lane.z+time)*800.;float trailLength=energy*(22.+energy*155.);
      vec3 p=vec3(lane.xy,z-endpoint*trailLength);fade=smoothstep(15.,65.,-z)*(1.-smoothstep(650.,810.,-z))*(.35+endpoint*.4);
      gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,fragmentShader:`uniform float energy;uniform vec3 tint;varying float fade;void main(){gl_FragColor=vec4(tint*1.35,fade*energy*.7);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`}),m=new dT(d,_);m.name="light-jump-streaks",m.frustumCulled=!1,m.renderOrder=3,o.add(m);let x=!0,S=0;return{configure(E,b){d.setDrawRange(0,(b?70:E==="Low"?180:E==="Medium"?420:780)*2),x=!0},update(E,b,M){b>0&&(S+=E*(.18+b*1.7)),p.time.value=S,p.energy.value=b,p.tint.value.copy(M).lerp(g,.7),m.visible=b>.001||x,x=!1}}}const TC=`
varying vec3 localPoint, surfaceNormal, worldPoint;
void main(){localPoint=position;worldPoint=(modelMatrix*vec4(position,1.)).xyz;surfaceNormal=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`,bC=`
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
`,El=[[[-480,-45,-1500],[1250,380,-4300],[-2200,950,-8200],[500,1600,-12e3],[2450,-500,-9200],[-700,850,-7900]],[[-540,-120,-1850],[1300,300,-4800],[-1450,420,-5700],[500,-90,-10800],[2600,700,-9600],[-850,900,-8200]],[[480,-100,-1800],[-1500,380,-3800],[1750,300,-6800],[-500,200,-10500],[3e3,-500,-9600],[-1100,900,-8500]],[[-470,35,-1900],[1350,500,-4600],[-2e3,-50,-7200],[700,120,-10500],[2400,-350,-8500],[-1e3,850,-9200]],[[-800,-200,-3500],[1900,430,-6800],[-2600,150,-9e3],[200,300,-12e3],[2900,-500,-1e4],[-1200,1e3,-10500]]].map(o=>o.map(e=>new W(...e))),AC=[6,5,6,5,4],ip=[[135,310,180,570,150,90],[150,310,190,500,170,100],[135,360,210,650,190,95],[160,340,210,580,170,100],[180,420,260,820,180,100]],ao=[["#315e9c","#9c8fbd","#77758e","#3a4d6a","#6a6c7c","#8b829c"],["#276992","#8e9eae","#8b8e96","#31495f","#858d97","#6a849f"],["#857260","#b5956e","#92877a","#655c54","#8a7a67","#b3a38b"],["#2b7886","#7c9ba9","#7b8d94","#385765","#849b9e","#6f8e9f"],["#46576e","#6d768b","#6c7180","#293c58","#6d788a","#56697f"]].map(o=>o.map(e=>new ue(e))),ap=ao.map(o=>o.map(e=>e.clone().lerp(new ue("#cfbd9c"),.38)));function RC(o){const e=new Ks;e.name="regional-celestial-bodies",o.add(e);const i=new zl(1,32,20),s=(C,H)=>{const Y=new an({uniforms:{baseColor:{value:ao[0][H].clone()},detailColor:{value:ap[0][H].clone()},kind:{value:C},alpha:{value:1},seed:{value:H*7.3+2.1},lightDirection:{value:H===3?new W(-.85,.2,-.6):new W(-.65,.4,H===1?.28:.75)}},vertexShader:TC,fragmentShader:bC,transparent:!0,depthWrite:!0}),Q=new un(i,Y);return Q.renderOrder=4,Q.userData.kind=C>1.5?"rocky-body":"planet",e.add(Q),Q},l=[0,1,2,2,2,2].map((C,H)=>s(C,H)),c=El[0].map(C=>C.clone()),h=ip[0].slice(),d=new ai,p=new W,g=new W,_=l.map(()=>new W),m=new Float32Array(6).fill(1);let x=0;const S=[0,1,2].map((C,H)=>{const Y=s(2,H+2);return Y.userData.kind="moon",{mesh:Y,parent:C,radius:[29,44,52][H]}}),E=new an({uniforms:{color:{value:new ue("#a5a091")},alpha:{value:1}},transparent:!0,depthWrite:!1,side:ia,vertexShader:"varying vec2 point;void main(){point=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec2 point;uniform vec3 color;uniform float alpha;void main(){float r=length(point);float edge=smoothstep(1.32,1.42,r)*(1.-smoothstep(2.05,2.2,r));float bands=.35+.25*sin(r*180.)+.2*sin(r*47.);gl_FragColor=vec4(color*.65,edge*max(.1,bands)*alpha);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}),b=new un(new hm(1.32,2.2,64),E);b.rotation.set(1.12,.2,-.27),b.renderOrder=5,e.add(b);const M=b.quaternion.clone(),v=new vT({color:"#76818c",roughness:1,metalness:0,transparent:!0,depthWrite:!1}),A=new lT(new fm(1,0),v,72);A.name="distant-rock-cluster",e.add(A);const N=new _n;let w=8353;const I=()=>(w=w*16807%2147483647,(w-1)/2147483646);for(let C=0;C<72;C++){N.position.set((I()-.5)*700,(I()-.5)*180,(I()-.5)*450),N.rotation.set(I()*3,I()*3,I()*3);const H=4+I()*10;N.scale.set(H,H*.7,H*1.2),N.updateMatrix(),A.setMatrixAt(C,N.matrix)}A.instanceMatrix.needsUpdate=!0,A.computeBoundingSphere();const z=[new W(-1e3,80,-2800),new W(1300,-180,-3600),new W(-1700,-180,-4300),new W(1600,80,-3900),new W(-2200,-250,-6500)],P=z[0].clone();let V=6,U=3;return{group:e,setJump(C){x=C},reseed(C,H,Y,Q){g.copy(Y),Q?d.copy(Q):d.identity();let pt=C>>>0;const at=()=>(pt=Math.imul(pt,1664525)+1013904223>>>0,pt/4294967296);for(let F=0;F<l.length;F++)_[F].set((at()-.5)*900,(at()-.5)*500,(at()-.5)*1e3),m[F]=.72+at()*.56,c[F].copy(El[H][F]).add(_[F]),h[F]=ip[H][F]*m[F],l[F].material.uniforms.seed.value=at()*90+1,(F===0||F===4)&&(l[F].material.uniforms.kind.value=at()>.5?0:2);for(const F of S)F.mesh.material.uniforms.seed.value=at()*90+1;P.copy(z[H]),P.x+=(at()-.5)*1300,P.y+=(at()-.5)*300},dispose(){e.removeFromParent();const C=new Set,H=new Set;e.traverse(Y=>{if(Y instanceof un){C.add(Y.geometry);for(const Q of Array.isArray(Y.material)?Y.material:[Y.material])H.add(Q)}}),A.dispose(),C.forEach(Y=>Y.dispose()),H.forEach(Y=>Y.dispose())},configure(C){V=6,U=3,A.count=C==="Low"?24:C==="Medium"?48:72},update(C,H,Y,Q){const pt=1-Math.exp(-C*.28),at=1-fn.smoothstep(x,.12,.65);for(let F=0;F<l.length;F++){const nt=l[F];c[F].x=fn.lerp(c[F].x,El[Y][F].x+_[F].x,pt),c[F].y=fn.lerp(c[F].y,El[Y][F].y+_[F].y,pt),c[F].z=fn.lerp(c[F].z,El[Y][F].z+_[F].z,pt),h[F]=fn.lerp(h[F],ip[Y][F]*m[F],pt),nt.visible=F<Math.min(V,AC[Y]),nt.position.copy(c[F]).applyQuaternion(d).add(g).sub(Q),nt.scale.setScalar(h[F]),nt.rotation.y=H*.002+F*.5,nt.material.uniforms.baseColor.value.lerp(ao[Y][F],pt),nt.material.uniforms.detailColor.value.lerp(ap[Y][F],pt),nt.material.uniforms.alpha.value=fn.smoothstep(nt.position.length()/h[F],1.05,1.4)*at}for(let F=0;F<S.length;F++){const{mesh:nt,parent:j,radius:ft}=S[F],St=l[j];nt.visible=F<U&&St.visible,nt.scale.setScalar(ft),p.set(h[j]*1.8,h[j]*.5,h[j]*.4).applyQuaternion(d),nt.position.copy(St.position).add(p),nt.material.uniforms.alpha.value=St.material.uniforms.alpha.value,nt.material.uniforms.baseColor.value.lerp(ao[Y][2],pt),nt.material.uniforms.detailColor.value.lerp(ap[Y][2],pt)}b.visible=!0,b.quaternion.copy(d).multiply(M),b.position.copy(l[1].position),b.scale.setScalar(h[1]),E.uniforms.alpha.value=l[1].material.uniforms.alpha.value,E.uniforms.color.value.lerp(ao[Y][1],pt),A.quaternion.copy(d),A.position.copy(P).applyQuaternion(d).add(g).sub(Q),v.opacity=at,A.visible=at>.005,v.color.lerp(ao[Y][2],pt)}}}const jp=18e3;function CC(o){return[o.x,o.y,o.z].map(e=>Math.floor((e+jp/2)/jp))}function wC(o,e,i){let s=(Math.imul(o,73856093)^Math.imul(e,19349663)^Math.imul(i,83492791)^7123)>>>0;const l=s,c=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296),h=o===0&&e===0&&i===0,d=h?0:l%5,p=new ai().setFromEuler(new Di(c()*Math.PI*2,c()*Math.PI*2,c()*Math.PI*2));return h&&p.identity(),{key:`${o}/${e}/${i}`,seed:l,region:d,heading:p,anchor:new W(o,e,i).multiplyScalar(jp)}}function DC(o){const e=Array.from({length:27},()=>({bodies:RC(o),sector:null}));let i="",s="Medium";const l=c=>{const[h,d,p]=CC(c),g=`${h}/${d}/${p}`;if(g===i)return;i=g;const _=new Map;for(let m=-1;m<=1;m++)for(let x=-1;x<=1;x++)for(let S=-1;S<=1;S++){const E=wC(h+m,d+x,p+S);_.set(E.key,E)}for(const m of e)m.sector&&_.has(m.sector.key)?_.delete(m.sector.key):m.sector=null;for(const m of _.values()){const x=e.find(S=>!S.sector);x.sector=m,x.bodies.reseed(m.seed,m.region,m.anchor,m.heading),x.bodies.update(1e3,0,m.region,c),x.bodies.configure(s)}};return{setJump(c){for(const h of e)h.bodies.setJump(c)},configure(c){s=c;for(const h of e)h.bodies.configure(c)},update(c,h,d,p){var g;l(p);for(const _ of e){const m=_.sector;_.bodies.update(c,h,m.region,p);for(const x of _.bodies.group.children){const S=x.position.length(),E=1-fn.smoothstep(S,1e4,13e3);if(x instanceof un){const b=x.material;(g=b.uniforms)!=null&&g.alpha?b.uniforms.alpha.value*=E:"opacity"in b&&(b.opacity*=E)}x.visible=x.visible&&E>0}}},dispose(){for(const c of e)c.bodies.dispose()}}}const Zp={Low:{pixelRatio:.9,stars:[550,2400,7800],cloudScale:.32,volumes:1,steps:4,octaves:2,bloom:!1},Medium:{pixelRatio:1,stars:[1e3,4800,19e3],cloudScale:.4,volumes:2,steps:7,octaves:2,bloom:!1},High:{pixelRatio:1.35,stars:[2200,1e4,48e3],cloudScale:.5,volumes:3,steps:10,octaves:3,bloom:!0}},Vx={Dark:{exposure:.8,cabin:.7,nebula:.65},Balanced:{exposure:1.12,cabin:1,nebula:.9},Cinematic:{exposure:1.32,cabin:1.12,nebula:1.08}},wa=[{name:"Violet Nebula",subtitle:"THE PERSEUS ARM",color:"#a879ef",second:"#315fab",accent:"#f4a4cf",density:1.05,band:.8,structure:1.15,bandWidth:1,warmth:.25,stars:.87,exposure:1},{name:"Stellar Ocean",subtitle:"AN ENDLESS SEA OF LIGHT",color:"#88bcf2",second:"#234a89",accent:"#c3dcff",density:.38,band:.7,structure:1.4,bandWidth:.65,warmth:.07,stars:1,exposure:1.04},{name:"Golden Core",subtitle:"THE HEART OF THE GALAXY",color:"#edbd79",second:"#956753",accent:"#fff2c9",density:.85,band:1.65,structure:1.8,bandWidth:1.4,warmth:.88,stars:1.4,exposure:.93},{name:"Cosmic Clouds",subtitle:"WHERE THE STARS ARE BORN",color:"#67cbbf",second:"#306c9c",accent:"#b1d5e8",density:1.3,band:.5,structure:.65,bandWidth:1.1,warmth:.16,stars:.7,exposure:1},{name:"Deep Silence",subtitle:"FAR FROM EVERYTHING",color:"#6d7fbb",second:"#253553",accent:"#a6b8e1",density:.12,band:.15,structure:.8,bandWidth:.45,warmth:.12,stars:.23,exposure:.84}],Ny=`
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
`,UC=`
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
`,NC=`
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
`,LC=`
varying vec3 worldPoint;
void main(){vec4 p=modelMatrix*vec4(position,1.);worldPoint=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}
`,OC=`
precision highp float;
varying vec3 worldPoint;
uniform vec3 center, radii, tint, second, accent;
uniform float time, density, visibility, energy, seed, structure;
uniform int steps, octaves;
uniform mat3 volumeRotation;
${Ny}
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
`,PC=`
varying vec3 direction;
void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`,zC=`
varying vec3 direction;
uniform vec3 tint, second, accent;
uniform float band, density, energy, bandWidth;
uniform mat3 layoutRotation, destinationRotation, volumeRotation;
uniform int octaves;
${Ny}
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
`;function IC(o){const e=wa[0],i=new _y,s=new wi(1,1,{type:Vi,depthBuffer:!1}),l=new me,c={sky:{value:s.texture},reprojection:{value:l},tanHalf:{value:.6745},wideTanHalf:{value:.7554},aspect:{value:1},veil:{value:0},jumpTint:{value:new ue("#92bce0")}},h=new un(new _o(2,2),new an({uniforms:c,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 uvv;void main(){uvv=uv;gl_Position=vec4(position.xy,1.,1.);}",fragmentShader:`varying vec2 uvv;uniform sampler2D sky;uniform mat3 reprojection;uniform float tanHalf,wideTanHalf,aspect,veil;uniform vec3 jumpTint;
      void main(){vec3 ray=reprojection*vec3((uvv-.5)*2.*tanHalf*vec2(aspect,1.),-1.);
      vec2 sampleUV=ray.xy/max(.001,-ray.z)/(2.*wideTanHalf*vec2(aspect,1.))+.5;
      gl_FragColor=texture2D(sky,clamp(sampleUV,.001,.999));gl_FragColor.rgb=mix(gl_FragColor.rgb,jumpTint*.38,veil*.985);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`}));h.frustumCulled=!1,h.renderOrder=-10,o.add(h);const d=new gi(75,1,.1,16e3),p=new ai,g=new ai,_=new ai,m=new W,x=new W,S=new Ye,E=new W,b=new W;let M=!0,v=-1/0,A=1/24;const N=DC(o),w=new W,I=new W,z=new ai,P=new ai,V=new me,U=new Ye,C=new me,H=new me,Y=wa.map(k=>({tint:new ue(k.color),second:new ue(k.second),accent:new ue(k.accent)})),Q={jumpAmount:{value:0},layoutRotation:{value:V},destinationRotation:{value:C},volumeRotation:{value:H},time:{value:0},tint:{value:Y[0].tint.clone()},second:{value:Y[0].second.clone()},accent:{value:Y[0].accent.clone()},density:{value:Number(e.density)},band:{value:Number(e.band)},warmth:{value:Number(e.warmth)},abundance:{value:e.stars/1.4},structure:{value:Number(e.structure)},bandWidth:{value:Number(e.bandWidth)},energy:{value:.9},octaves:{value:3},halo:{value:1}};let pt=7123;const at=()=>(pt=pt*16807%2147483647,(pt-1)/2147483646),F=()=>Math.sqrt(-2*Math.log(Math.max(1e-5,at())))*Math.cos(2*Math.PI*at()),j=[new W(1900,1400,1900),new W(5400,4e3,5400),new W(15e3,11e3,15e3)].map((k,K)=>{const mt=Zp.High.stars[K],Tt=new Float32Array(mt*3),bt=new Float32Array(mt),yt=new Float32Array(mt),Dt=new Float32Array(mt);for(let Bt=0;Bt<mt;Bt++){let Lt=(at()-.5)*k.x,ee=(at()-.5)*k.z,Gt=(at()-.5)*k.y;if(K>0&&at()<.72){if(at()<.28){const Ne=Math.floor(at()*4);Lt=(Ne%2?.22:-.24)*k.x+F()*k.x*.045,ee=(Ne<2?-.27:.22)*k.z+F()*k.z*.055}Gt=-.42*Lt+F()*k.y*.035+Math.sin(ee/k.z*5)*k.y*.045}Tt.set([Lt,Gt,ee],Bt*3);const se=at();bt[Bt]=(se>.987?12+at()*14:1.3+at()*4.6)*[.7,1.1,2][K],yt[Bt]=at(),Dt[Bt]=at()}const O=new kn;O.setAttribute("position",new En(Tt,3)),O.setAttribute("radius",new En(bt,1)),O.setAttribute("temperature",new En(yt,1)),O.setAttribute("identity",new En(Dt,1));const le=new an({uniforms:{...Q,offset:{value:new W},span:{value:k},layoutOffset:{value:new W},pixels:{value:400},dpr:{value:1}},vertexShader:UC,fragmentShader:NC,transparent:!0,depthWrite:!1,blending:Rl}),qt=new yy(O,le);return qt.frustumCulled=!1,qt.renderOrder=3,o.add(qt),qt}),ft=new un(new zl(12500,32,16),new an({uniforms:Q,vertexShader:PC,fragmentShader:zC,side:Gn,depthWrite:!1}));ft.renderOrder=-2,ft.frustumCulled=!1,i.add(ft);const St=new zl(1,24,16),Et=[{center:new W(-180,110,-820),radii:new W(680,330,770)},{center:new W(600,-140,-1600),radii:new W(1050,480,1e3)},{center:new W(-850,220,-2400),radii:new W(1200,520,1050)},{center:new W(450,420,1200),radii:new W(850,600,1e3)}],Ht=Et.map(()=>new W),oe=Et.map((k,K)=>{const mt=new an({uniforms:{...Q,center:{value:k.center.clone()},radii:{value:k.radii},steps:{value:10},visibility:{value:1},seed:{value:4.3+K*9.7}},vertexShader:LC,fragmentShader:OC,transparent:!0,depthWrite:!1,side:Gn}),Tt=new un(St,mt);return Tt.position.copy(k.center),Tt.scale.copy(k.radii),Tt.renderOrder=1,i.add(Tt),Tt}),G=new yT("#b7c6ef","#080e1d",1.6);o.add(G);const dt=new ET("#dae6ff",2.8);return dt.position.set(-3,4,1),o.add(dt),{tint:Q.tint.value,setJump(k,K){Q.jumpAmount.value=Math.max(k,K),c.veil.value=K,c.jumpTint.value.copy(Q.tint.value).lerp(Q.accent.value,.35),N.setJump(Math.max(k,K))},reseed(k,K,mt,Tt){w.copy(mt),Tt?z.copy(Tt):z.identity(),P.copy(z).invert(),C.setFromMatrix4(U.makeRotationFromQuaternion(z)),H.copy(C).transpose();for(const Dt of oe)Dt.quaternion.copy(z);let bt=k>>>0;const yt=()=>(bt=Math.imul(bt,1664525)+1013904223>>>0,bt/4294967296);U.makeRotationY((yt()-.5)*1.2),U.multiply(new Ye().makeRotationZ((yt()-.5)*.8)),V.setFromMatrix4(U);for(const Dt of j){const O=Dt.material.uniforms.span.value;Dt.material.uniforms.layoutOffset.value.set((yt()-.5)*O.x,(yt()-.5)*O.y,(yt()-.5)*O.z)}for(let Dt=0;Dt<oe.length;Dt++)Ht[Dt].set((yt()-.5)*600,(yt()-.5)*250,(yt()-.5)*500),oe[Dt].material.uniforms.seed.value=yt()*80+2;M=!0},renderAtmosphere(k,K,mt=!1){K.updateWorldMatrix(!0,!1),K.matrixWorld.decompose(m,p,x);const Tt=K,bt=Math.tan(fn.degToRad(Tt.fov)*.5);(c.aspect.value!==Tt.aspect||c.tanHalf.value!==bt)&&(M=!0),c.tanHalf.value=bt,c.wideTanHalf.value=bt*1.12,c.aspect.value=Tt.aspect;const yt=performance.now()/1e3;if(mt||M||yt-v>=A||p.angleTo(g)>.075||E.distanceToSquared(b)>900){d.fov=fn.radToDeg(2*Math.atan(bt*1.12)),d.aspect=Tt.aspect,d.near=Tt.near,d.far=Tt.far,d.updateProjectionMatrix(),d.position.copy(m),d.quaternion.copy(p);const Dt=k.toneMapping;k.toneMapping=Ua,k.setRenderTarget(s),k.render(i,d),k.setRenderTarget(null),k.toneMapping=Dt,g.copy(p),b.copy(E),v=performance.now()/1e3,M=!1}_.copy(g).invert().multiply(p),S.makeRotationFromQuaternion(_),l.setFromMatrix4(S)},dispose(){s.dispose(),N.dispose();const k=new Set,K=new Set;i.traverse(mt=>{mt instanceof un&&(k.add(mt.geometry),K.add(mt.material))}),k.forEach(mt=>mt.dispose()),K.forEach(mt=>mt.dispose())},configure(k,K,mt,Tt,bt,yt,Dt=!1){M=!0,A=Dt?1/15:k==="Low"?1/20:k==="Medium"?1/24:1/30;const O=Zp[k];N.configure(k),Q.octaves.value=O.octaves;const le=yt&&k!=="Low"?Vi:ki;s.texture.type!==le&&(s.dispose(),s.texture.type=le),s.setSize(Math.max(1,Math.round(mt*K*(Dt?.26:O.cloudScale))),Math.max(1,Math.round(Tt*K*(Dt?.26:O.cloudScale)))),Q.halo.value=.75+bt*.8,j.forEach((qt,Bt)=>{qt.geometry.setDrawRange(0,O.stars[Bt]),qt.material.uniforms.pixels.value=Tt*.64*K,qt.material.uniforms.dpr.value=K}),oe.forEach((qt,Bt)=>{qt.visible=Bt<O.volumes,qt.material.uniforms.steps.value=O.steps})},update(k,K,mt,Tt,bt){I.copy(Tt).sub(w).applyQuaternion(P),E.copy(I),N.update(k,K,mt,Tt);const yt=wa[mt],Dt=Y[mt],O=1-Math.exp(-k*.55);Q.time.value=K,Q.tint.value.lerp(Dt.tint,O),Q.second.value.lerp(Dt.second,O),Q.accent.value.lerp(Dt.accent,O),Q.density.value=fn.lerp(Q.density.value,yt.density,O),Q.band.value=fn.lerp(Q.band.value,yt.band,O),Q.structure.value=fn.lerp(Q.structure.value,yt.structure,O),Q.bandWidth.value=fn.lerp(Q.bandWidth.value,yt.bandWidth,O),Q.warmth.value=fn.lerp(Q.warmth.value,yt.warmth,O),Q.abundance.value=fn.lerp(Q.abundance.value,yt.stars/1.4,O),Q.energy.value=fn.lerp(Q.energy.value,bt,O),j.forEach(le=>le.material.uniforms.offset.value.copy(I)),oe.forEach((le,qt)=>{const Bt=Et[qt].center;le.position.set(fn.euclideanModulo(Bt.x+Ht[qt].x-I.x+4600,9200)-4600,fn.euclideanModulo(Bt.y+Ht[qt].y-I.y+3600,7200)-3600,fn.euclideanModulo(Bt.z+Ht[qt].z-I.z+4600,9200)-4600);const Lt=Math.max(Math.abs(le.position.x)/4600,Math.abs(le.position.y)/3600,Math.abs(le.position.z)/4600);le.position.applyQuaternion(z),le.material.uniforms.center.value.copy(le.position),le.material.uniforms.visibility.value=1-fn.smoothstep(Lt,.65,.95)})}}}function BC(o,e=!1){const i=o[0].index!==null,s=new Set(Object.keys(o[0].attributes)),l=new Set(Object.keys(o[0].morphAttributes)),c={},h={},d=o[0].morphTargetsRelative,p=new kn;let g=0;for(let _=0;_<o.length;++_){const m=o[_];let x=0;if(i!==(m.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+_+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const S in m.attributes){if(!s.has(S))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+_+'. All geometries must have compatible attributes; make sure "'+S+'" attribute exists among all geometries, or in none of them.'),null;c[S]===void 0&&(c[S]=[]),c[S].push(m.attributes[S]),x++}if(x!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+_+". Make sure all geometries have the same number of attributes."),null;if(d!==m.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+_+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const S in m.morphAttributes){if(!l.has(S))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+_+".  .morphAttributes must be consistent throughout all geometries."),null;h[S]===void 0&&(h[S]=[]),h[S].push(m.morphAttributes[S])}if(e){let S;if(i)S=m.index.count;else if(m.attributes.position!==void 0)S=m.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+_+". The geometry must have either an index or a position attribute"),null;p.addGroup(g,S,_),g+=S}}if(i){let _=0;const m=[];for(let x=0;x<o.length;++x){const S=o[x].index;for(let E=0;E<S.count;++E)m.push(S.getX(E)+_);_+=o[x].attributes.position.count}p.setIndex(m)}for(const _ in c){const m=kx(c[_]);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+_+" attribute."),null;p.setAttribute(_,m)}for(const _ in h){const m=h[_][0].length;if(m===0)break;p.morphAttributes=p.morphAttributes||{},p.morphAttributes[_]=[];for(let x=0;x<m;++x){const S=[];for(let b=0;b<h[_].length;++b)S.push(h[_][b][x]);const E=kx(S);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+_+" morphAttribute."),null;p.morphAttributes[_].push(E)}}return p}function kx(o){let e,i,s,l=-1,c=0;for(let g=0;g<o.length;++g){const _=o[g];if(e===void 0&&(e=_.array.constructor),e!==_.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=_.itemSize),i!==_.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(s===void 0&&(s=_.normalized),s!==_.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(l===-1&&(l=_.gpuType),l!==_.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;c+=_.count*i}const h=new e(c),d=new En(h,i,s);let p=0;for(let g=0;g<o.length;++g){const _=o[g];if(_.isInterleavedBufferAttribute){const m=p/i;for(let x=0,S=_.count;x<S;x++)for(let E=0;E<i;E++){const b=_.getComponent(x,E);d.setComponent(x+m,E,b)}}else h.set(_.array,p);p+=_.count*i}return l!==void 0&&(d.gpuType=l),d}function FC(o){const e=new Ks;e.name="enclosed-flight-deck",o.add(e);const i={value:new ue("#ae80f0")},s={value:1},l=new ue("#c8d7e4"),c=(A,N)=>new an({uniforms:{baseColor:{value:new ue(A)},tint:i,brightness:s,polish:{value:N}},vertexShader:"varying vec3 point,faceNormal;void main(){point=position;faceNormal=normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 point,faceNormal;uniform vec3 baseColor,tint;uniform float brightness,polish;
      void main(){vec3 n=normalize(faceNormal),v=normalize(-point),l=normalize(vec3(0.,.95,.2)-point);
      float diffuse=max(0.,dot(n,l));float spec=pow(max(0.,dot(n,normalize(l+v))),24.);
      float front=max(0.,dot(n,normalize(vec3(0.,.7,-2.1)-point)));
      float fresnel=pow(1.-max(0.,dot(n,v)),2.);
      vec3 color=baseColor*(.55+diffuse*.7)+vec3(.65,.75,.85)*spec*polish+tint*(front*.05+fresnel*.035);
      gl_FragColor=vec4(color*brightness,1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`}),h=c("#3d4a57",.12),d=c("#73818c",.22),p=c("#1b2835",.04),g=new Ol({color:"#9bb9d1"}),_=new Map,m=(A,N)=>{let w=_.get(N);w||(w=[],_.set(N,w)),w.push(A)};function x(A,N,w,I,z,P,V,U=0,C=0,H=0){const Y=new vo(z,P,V);Y.rotateX(U),Y.rotateY(C),Y.rotateZ(H),Y.translate(N,w,I),m(Y,A)}for(const A of[-1,1])x(h,A*2.85,0,-.4,.24,3.9,5.8);x(h,0,1.86,-.4,5.95,.24,5.8),x(h,0,-1.84,-.4,5.95,.24,5.8),x(h,0,0,2.43,5.95,3.9,.24),x(h,0,1.64,-3.25,5.9,.42,.38),x(h,0,-1.5,-3.25,5.9,.72,.5);for(const A of[-1,1])x(h,A*2.7,.05,-3.25,.34,3.2,.4,0,0,A*.08),x(d,A*2.52,.06,-3.02,.055,2.95,.09,0,0,A*.08),x(g,A*2.475,.06,-2.99,.012,2.86,.018,0,0,A*.08);x(d,0,1.385,-3.04,5.12,.07,.11),x(g,0,1.335,-2.98,5.03,.012,.018),x(d,0,-1.12,-2.98,5.1,.075,.16),x(g,0,-1.07,-2.9,4.98,.012,.02),x(p,0,-1.4,-2.72,4.9,.44,1.12,.1),x(h,0,-1.46,-2.1,2.15,.3,1.05,.13),x(p,0,-1.12,-2.51,1.98,.56,.2,-.24);for(const A of[-1,1]){x(p,A*1.88,-1.18,-2.62,.91,.44,.22,-.15,-A*.18),x(h,A*2.08,-1.36,-1.05,.7,.38,2,.04,0,A*.04),x(d,A*2.08,-1.15,-1.05,.61,.025,1.8);for(let N=0;N<6;N++)x(N===0?g:p,A*(1.85+N%3*.15),-1.125,-.5-Math.floor(N/3)*.16,.075,.012,.06);for(const N of[-1.55,.05,1.65])x(p,A*2.7,.12,N,.08,1.6,1.28),x(d,A*2.63,.92,N,.045,.035,1.26),x(g,A*2.62,-.67,N,.018,.012,1.1);x(d,A*2.69,1.4,-.42,.13,.12,5.35),x(g,A*2.61,1.39,-.42,.018,.018,5.12),x(g,A*1.35,-1.705,.1,.025,.012,3.2)}for(const A of[-1.6,.35,1.9])x(d,0,1.69,A,5.42,.13,.12);x(p,0,1.68,.3,1.45,.08,1.4),x(g,0,1.62,.3,.65,.012,.15),x(p,0,-1.42,.45,1.15,.48,1.15),x(p,0,-.42,1,1.18,1.62,.3,-.1),x(p,0,-.05,2.25,1.4,3,.12),x(d,.72,-.05,2.14,.035,2.95,.02),x(g,-.72,-.05,2.14,.015,2.95,.02);const S=document.createElement("canvas");S.width=768,S.height=192;const E=S.getContext("2d");E.fillStyle="#0b1b28",E.fillRect(0,0,768,192),E.strokeStyle="#355865",E.lineWidth=1;for(let A=18;A<768;A+=28)E.beginPath(),E.moveTo(A,32),E.lineTo(A,174),E.stroke();E.strokeStyle="#9bcbd3",E.lineWidth=2,E.beginPath(),E.arc(100,103,51,.3,Math.PI*1.8),E.stroke(),E.fillStyle="#c2e1e6",E.font="18px monospace",E.fillText("AETHER / FLIGHT DECK",190,43),E.font="13px monospace",E.fillText("NAVIGATION  /  STABLE",190,89),E.fillText("LIFE SUPPORT  /  NOMINAL",190,122),E.fillStyle="#5c989f",E.fillRect(190,151,410,3);const b=new mT(S);b.colorSpace=ii;const M=new Ol({map:b,color:"#b8d3df"});function v(A,N,w,I,z,P,V=0){const U=new _o(I,z);U.rotateX(P),U.rotateY(V),U.translate(A,N,w),m(U,M)}v(0,-1.08,-2.38,1.77,.42,-.24);for(const A of[-1,1])v(A*1.87,-1.15,-2.48,.77,.3,-.15,-A*.18);for(const[A,N]of _){const w=BC(N);N.forEach(z=>z.dispose());const I=new un(w,A);I.name=A===h?"enclosure-shell":"cabin-details",e.add(I)}return{group:e,update(A,N,w,I){e.visible=I;const z=w?.5:1;i.value.copy(A),s.value=N*z,g.color.lerpColors(A,l,.55).multiplyScalar(.6*N*z),M.color.copy(g.color).multiplyScalar(w?.5:1)},dispose(){b.dispose()}}}function HC(o,e,i,s,l={}){const c=new oC({antialias:!0,alpha:!1,powerPreference:"high-performance"});c.setClearColor("#040710"),c.outputColorSpace=ii,c.toneMapping=Jp,c.toneMappingExposure=Vx.Balanced.exposure,o.appendChild(c.domElement);const h=new _y,d=new gi(68,1,.1,16e3),p=new Ks;p.position.z=5,p.add(d),h.add(p);const g=l.jump??new Uy;let _=g.phase;const m={...e()},x=()=>(Object.assign(m,e()),m.blocked=m.blocked||g.busy,m),S=IC(h),E=EC(p),b=new ue,M=new ue("#bad9f3"),v=FC(p),A=_C(c.domElement,s,i,x),N=new Ty,w=new yC;let I=e().quality,z=e().performanceMode,P=e().adaptive,V=0,U=0,C=0,H="",Y=!1,Q=null,pt=null;const at=()=>{Q&&(Q.passes.forEach(ft=>ft.dispose()),Q.dispose(),Q=null,pt=null)},F=()=>{const ft=e(),St=ft.performanceMode?"Low":ft.quality,Et=Zp[St],Ht=Math.max(1,o.clientWidth),oe=Math.max(1,o.clientHeight),G=Math.min(window.devicePixelRatio||1,Et.pixelRatio)*(ft.performanceMode?.85:ft.adaptive?w.scale:1);c.setPixelRatio(G),c.setSize(Ht,oe),d.aspect=Ht/oe,d.updateProjectionMatrix();const dt=!ft.performanceMode&&Et.bloom&&ft.bloom>0&&c.extensions.has("EXT_color_buffer_float");dt&&!Q?(Q=new dC(c),Q.addPass(new pC(h,d)),pt=new po(new de(Ht,oe),.2,.55,1.1),Q.addPass(pt),Q.addPass(new gC)):dt||at(),Q&&(Q.setPixelRatio(G),Q.setSize(Ht,oe)),S.configure(St,G,Ht,oe,ft.bloom,c.extensions.has("EXT_color_buffer_float"),ft.performanceMode),E.configure(St,ft.reduced),H=`${ft.quality}/${ft.bloom}/${ft.performanceMode}/${ft.adaptive}/${ft.reduced}`},nt=()=>{var ft;N.getDelta(),i.reset(!0),(ft=l.onAudio)==null||ft.call(l,0,0,!0)};document.addEventListener("visibilitychange",nt),window.addEventListener("resize",F),F();const j=()=>{var K,mt,Tt;if(Y)return;V=requestAnimationFrame(j);const ft=N.getDelta(),St=ft>.25?0:ft,Et=e();if(document.hidden){i.reset(!0);return}const Ht=Math.min(ft,.25);g.advance(ft,Et.paused),g.phase!==_&&(_=g.phase,(K=l.onPhase)==null||K.call(l,g.phase)),g.justCommitted&&(S.reseed(g.seed,g.destination,i.position,i.shipQuaternion),(mt=l.onDestination)==null||mt.call(l,g.destination,g.seed));const oe=g.busy&&g.committed?g.destination:Et.region,G=g.energy*(Et.reduced?.16:Et.mode==="Meditation"?.55:1);A.sync(),x(),g.busy&&(m.mode="Autopilot",m.motion=0,m.started=!0,m.speed=Et.speed+Math.pow(g.energy,2)*(Et.reduced?100:360)),xC(i,ft,m),(Tt=l.onAudio)==null||Tt.call(l,G,g.charge,Et.paused),(Et.quality!==I||Et.performanceMode!==z||Et.adaptive!==P)&&(w.reset(),I=Et.quality,z=Et.performanceMode,P=Et.adaptive);const dt=w.observe(ft,Et.adaptive&&!Et.performanceMode,Et.paused);(H!==`${Et.quality}/${Et.bloom}/${Et.performanceMode}/${Et.adaptive}/${Et.reduced}`||dt)&&F(),Et.paused||(U+=St);const k=Vx[Et.lighting];c.toneMappingExposure=fn.damp(c.toneMappingExposure,k.exposure*wa[oe].exposure,.8,Ht),S.setJump(G,g.veil),S.update(Ht,U,oe,i.position,k.nebula),p.quaternion.copy(i.shipQuaternion),d.quaternion.copy(i.lookQuaternion),b.copy(S.tint).lerp(M,g.charge*.3),v.update(b,k.cabin*(1+g.charge*.12),Et.mode==="Meditation",Et.cockpit),E.update(Et.paused?0:Math.min(ft,.1),G,S.tint),pt&&(pt.strength=Et.bloom*(Et.mode==="Meditation"?.45:.8+G*.2)),C+=ft,!(Et.paused&&C<1/15)&&(C=0,S.renderAtmosphere(c,d),Q?Q.render():c.render(h,d))};return j(),()=>{var Et;Y=!0,cancelAnimationFrame(V),A.dispose(),window.removeEventListener("resize",F),document.removeEventListener("visibilitychange",nt),(Et=l.onAudio)==null||Et.call(l,0,0,!0),at(),v.dispose(),S.dispose();const ft=new Set,St=new Set;h.traverse(Ht=>{if(Ht instanceof un||Ht instanceof yy||Ht instanceof xy){ft.add(Ht.geometry);for(const oe of Array.isArray(Ht.material)?Ht.material:[Ht.material])St.add(oe)}}),ft.forEach(Ht=>Ht.dispose()),St.forEach(Ht=>Ht.dispose()),c.dispose(),c.domElement.remove()}}class GC{constructor(){ve(this,"ctx",null);ve(this,"master");ve(this,"engine");ve(this,"music");ve(this,"jumpGain");ve(this,"jumpTone");ve(this,"jumpFilter");ve(this,"lastDrive",-1);ve(this,"lastCharge",-1)}async start(){if(!this.ctx){const e=this.ctx=new AudioContext;this.master=e.createGain(),this.master.gain.value=0,this.master.connect(e.destination),this.engine=e.createGain(),this.music=e.createGain(),this.engine.connect(this.master),this.music.connect(this.master),[38,57,76].forEach(h=>{const d=e.createOscillator();d.type="sine",d.frequency.value=h;const p=e.createGain();p.gain.value=.09,d.connect(p).connect(this.engine),d.start()}),[130.81,196,261.63,293.66,392].forEach((h,d)=>{const p=e.createOscillator();p.frequency.value=h;const g=e.createGain();g.gain.value=.025;const _=e.createOscillator();_.frequency.value=.035+d*.009;const m=e.createGain();m.gain.value=.012,_.connect(m).connect(g.gain),p.connect(g).connect(this.music),p.start(),_.start()}),this.jumpGain=e.createGain(),this.jumpGain.gain.value=0,this.jumpGain.connect(this.engine),this.jumpTone=e.createOscillator(),this.jumpTone.frequency.value=42,this.jumpTone.connect(this.jumpGain),this.jumpTone.start();const i=e.createBuffer(1,e.sampleRate*2,e.sampleRate),s=i.getChannelData(0);let l=1237;for(let h=0;h<s.length;h++)l=l*16807%2147483647,s[h]=((l-1)/2147483646-.5)*.35;const c=e.createBufferSource();c.buffer=i,c.loop=!0,this.jumpFilter=e.createBiquadFilter(),this.jumpFilter.type="lowpass",this.jumpFilter.frequency.value=250,c.connect(this.jumpFilter).connect(this.jumpGain),c.start()}await this.ctx.resume()}set(e,i,s,l){var h,d,p;if(!this.ctx)return;const c=this.ctx.currentTime;(h=this.master)==null||h.gain.setTargetAtTime(e&&!l?.65:0,c,.4),(d=this.engine)==null||d.gain.setTargetAtTime(i,c,.2),(p=this.music)==null||p.gain.setTargetAtTime(s,c,.2)}jump(e,i,s){if(!this.ctx||!this.jumpGain||(s&&(e=i=0),Math.abs(e-this.lastDrive)<.01&&Math.abs(i-this.lastCharge)<.01&&!(e===0&&this.lastDrive!==0)))return;this.lastDrive=e,this.lastCharge=i;const l=this.ctx.currentTime;this.jumpGain.gain.cancelScheduledValues(l),this.jumpGain.gain.setTargetAtTime(.018*i+.055*e,l,.15),this.jumpTone.frequency.cancelScheduledValues(l),this.jumpTone.frequency.setTargetAtTime(42+i*12+e*145,l,.25),this.jumpFilter.frequency.cancelScheduledValues(l),this.jumpFilter.frequency.setTargetAtTime(250+e*1100,l,.25)}dispose(){var e;(e=this.ctx)==null||e.close()}}function VC(){const[o,e]=he.useState("Autopilot"),[i,s]=he.useState(18),[l,c]=he.useState(!1),[h,d]=he.useState(0),[p,g]=he.useState(()=>matchMedia("(any-pointer: coarse)").matches?"Low":"Medium"),[_,m]=he.useState(matchMedia("(prefers-reduced-motion: reduce)").matches),[x,S]=he.useState(.6),[E,b]=he.useState(!0),[M,v]=he.useState(!1),[A,N]=he.useState(!1),[w,I]=he.useState(""),[z,P]=he.useState(!1),[V,U]=he.useState(.35),[C,H]=he.useState(.5),[Y,Q]=he.useState(!0),[pt,at]=he.useState(""),[F,nt]=he.useState(!1),[j,ft]=he.useState(1),[St,Et]=he.useState(.7),[Ht,oe]=he.useState(!1),[G,dt]=he.useState(!1),[k,K]=he.useState("Balanced"),[mt,Tt]=he.useState(.28),[bt,yt]=he.useState(!1),[Dt,O]=he.useState(!0),[le,qt]=he.useState("idle"),[Bt,Lt]=he.useState(7123),[ee,Gt]=he.useState(0),se=he.useRef(new Uy),Ne=he.useRef(()=>{}),Te=le!=="idle",L=he.useRef(null),R=he.useRef(new vC),st=he.useRef(null),vt=he.useRef(new GC),At=he.useRef({mode:o,speed:i,paused:l,region:h,quality:p,reduced:_,motion:x,cockpit:E,started:M,blocked:!!w||Te,sensitivity:j,touchSensitivity:St,invertMouseX:Ht,invertMouseY:G,lighting:k,bloom:mt,performanceMode:bt,adaptive:Dt,worldSeed:Bt});At.current={mode:o,speed:i,paused:l,region:h,quality:p,reduced:_,motion:x,cockpit:E,started:M,blocked:!!w||Te,sensitivity:j,touchSensitivity:St,invertMouseX:Ht,invertMouseY:G,lighting:k,bloom:mt,performanceMode:bt,adaptive:Dt,worldSeed:Bt},he.useEffect(()=>{try{return HC(st.current,()=>At.current,R.current,L.current,{jump:se.current,onPhase:qt,onDestination:(ut,Zt)=>{d(ut),Lt(Zt)},onAudio:(ut,Zt,Ft)=>vt.current.jump(ut,Zt,Ft)})}catch{at("WebGL could not start. Please enable hardware acceleration and reload.")}},[]),he.useEffect(()=>()=>vt.current.dispose(),[]),he.useEffect(()=>{const ut=setInterval(()=>Gt(R.current.speed),200);return()=>clearInterval(ut)},[]),he.useEffect(()=>{vt.current.set(z,V,C,l)},[z,V,C,l]),he.useEffect(()=>{const ut=setInterval(()=>{Y&&M&&!l&&!se.current.busy&&d(Zt=>(Zt+1)%5)},9e4);return()=>clearInterval(ut)},[Y,M,l]),he.useEffect(()=>{const ut=Ft=>{Ft.target instanceof HTMLElement&&Ft.target.closest('input,select,textarea,[contenteditable="true"]')||(Ft.code==="KeyJ"&&!Ft.repeat&&!Ft.ctrlKey&&!Ft.metaKey&&!Ft.altKey&&(Ft.preventDefault(),Ne.current()),Ft.key.toLowerCase()==="h"&&N(It=>!It),Ft.code==="Space"&&!(Ft.target instanceof HTMLElement&&Ft.target.closest("button,a"))&&(Ft.preventDefault(),c(It=>!It)),Ft.key==="Escape"&&(N(!1),I("")))},Zt=()=>nt(!!document.fullscreenElement);return window.addEventListener("keydown",ut),document.addEventListener("fullscreenchange",Zt),()=>{window.removeEventListener("keydown",ut),document.removeEventListener("fullscreenchange",Zt)}},[]);const gt=async()=>{try{await vt.current.start(),P(ut=>!ut)}catch{at("Audio is unavailable in this browser. The journey can continue silently.")}},Wt=()=>{v(!0),c(!1)},Nt=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{at("Fullscreen is unavailable in this browser.")}},Qt=ut=>{se.current.busy||(e(ut),v(!0))},te=()=>{se.current.start(h,Bt,l)&&(v(!0),I(""),qt("charging"))};Ne.current=te;const Ct=l&&Te?"Jump paused":le==="charging"?"Charging drive…":le==="accelerating"?"Accelerating…":le==="transit"?"Crossing the light…":le==="arriving"?`Entering ${wa[se.current.destination].name}…`:le==="stabilized"?`Arrived: ${wa[se.current.destination].name}`:"";return lt.jsxs("main",{"data-jump-phase":le,"data-world-seed":Bt,className:`${A?"hidden-ui":""} ${o==="Meditation"?"meditation":""} ${o==="Manual Flight"?"manual-flight":""} ${w||l||Te?"controls-blocked":""} ${Te?"jump-active":""}`,children:[lt.jsx("div",{className:"universe",ref:st}),lt.jsx("div",{className:"vignette"}),lt.jsxs("div",{className:"touch-controls ui",children:[lt.jsxs("div",{ref:L,className:"touch-joystick",role:"group","aria-label":"Touch flight joystick",children:[lt.jsx("span",{className:"stick-cross",children:"+"}),lt.jsx("span",{className:"stick-thumb"}),lt.jsx("small",{children:"STEER"})]}),lt.jsx("span",{className:"touch-look-hint",children:"DRAG SPACE TO LOOK"})]}),lt.jsxs("header",{className:"ui",children:[lt.jsxs("a",{className:"brand",href:"#",onClick:ut=>{ut.preventDefault(),N(!1)},children:[lt.jsx(N1,{size:32}),lt.jsxs("span",{children:["COSMIC DRIFT",lt.jsx("small",{children:"A QUIETER KIND OF JOURNEY"})]})]}),lt.jsxs("nav",{children:[lt.jsx("span",{className:"live-dot"})," ALL SYSTEMS AT PEACE ",lt.jsx("span",{className:"nav-line"}),lt.jsx("button",{title:"Audio settings",onClick:()=>I(w==="audio"?"":"audio"),children:lt.jsx(bd,{size:18})}),lt.jsx("button",{title:"Settings",onClick:()=>I(w==="settings"?"":"settings"),children:lt.jsx(P1,{size:18})}),lt.jsx("button",{title:"Fullscreen",onClick:Nt,children:lt.jsx(L_,{size:18})})]})]}),lt.jsxs("section",{className:"intro ui",children:[lt.jsxs("div",{className:"eyebrow",children:[lt.jsx("span",{})," LEAVE THE NOISE BEHIND"]}),lt.jsxs("h1",{children:["Nowhere to be.",lt.jsx("br",{}),"Just ",lt.jsx("em",{children:"drift."})]}),lt.jsxs("p",{children:["A quiet passage through an infinite universe.",lt.jsx("br",{}),"No destination. No demands. Just you and the stars."]}),lt.jsxs("button",{className:"start",onClick:Wt,children:[M?l?"Resume journey":"Journey in progress":"Start journey",lt.jsx(w1,{size:18})]}),lt.jsxs("div",{className:"intro-note",children:[lt.jsx("span",{})," ",M?"TAKE YOUR TIME. YOU HAVE ALL OF IT.":"YOUR OWN LITTLE CORNER OF INFINITY"]})]}),lt.jsxs("aside",{className:"region-label ui",children:[lt.jsx("span",{className:"coordinate",children:"SECTOR 07 / PERSEUS"}),lt.jsx("div",{className:"region-rule"}),lt.jsx("span",{className:"eyebrow",children:"YOU ARE DRIFTING THROUGH"}),lt.jsx("h2",{children:wa[h].name}),lt.jsx("p",{children:wa[h].subtitle}),lt.jsxs("button",{disabled:Te,onClick:()=>I(w==="regions"?"":"regions"),children:["Explore regions ",lt.jsx(U_,{size:14})]})]}),lt.jsxs("div",{className:"travel-marker ui",children:[lt.jsx("span",{children:"✧"}),lt.jsx("i",{}),lt.jsx("small",{children:"AN INFINITE UNIVERSE. AN UNHURRIED YOU."})]}),lt.jsxs("section",{className:"flight-deck ui",children:[lt.jsxs("div",{className:"deck-top",children:[lt.jsxs("div",{className:"deck-label",children:[lt.jsx("span",{className:"live-dot"}),l?"JOURNEY PAUSED":M?"JOURNEY ACTIVE":"READY WHEN YOU ARE"]}),lt.jsxs("div",{className:"jump-tools",children:[lt.jsx("span",{className:"jump-status",role:"status","aria-live":"polite",children:Ct}),lt.jsx("span",{className:"ship-name",children:"AETHER–01"}),lt.jsxs("button",{className:"jump-button",disabled:Te||l,onClick:te,"aria-keyshortcuts":"J",children:[lt.jsx(B1,{size:14}),"Light Jump",lt.jsx("kbd",{children:"J"})]})]})]}),lt.jsxs("div",{className:"deck-controls",children:[lt.jsx("div",{className:"mode-controls",children:[{name:"Autopilot",icon:D1},{name:"Manual Flight",icon:U1},{name:"Meditation",icon:I1}].map(ut=>lt.jsxs("button",{disabled:Te,className:o===ut.name?"selected":"",onClick:()=>Qt(ut.name),children:[lt.jsx(ut.icon,{size:17}),lt.jsxs("span",{children:[ut.name,ut.name==="Meditation"?" mode":""]})]},ut.name))}),lt.jsxs("div",{className:"speed",children:[lt.jsxs("label",{htmlFor:"speed",children:["DRIFT SPEED ",lt.jsxs("span",{children:[ee.toFixed(0)," ",lt.jsx("small",{children:"km/s"})]})]}),lt.jsx("input",{id:"speed",disabled:Te,type:"range",min:"0",max:"1200",value:i,onChange:ut=>s(+ut.target.value)}),lt.jsxs("div",{children:[lt.jsx("span",{children:"0 · BRAKE"}),lt.jsx("span",{children:"INTERSTELLAR"})]})]}),lt.jsxs("div",{className:"deck-actions",children:[lt.jsx("button",{title:l?"Resume":"Pause",onClick:()=>c(ut=>!ut),children:l?lt.jsx(O1,{size:19}):lt.jsx(L1,{size:19})}),lt.jsx("button",{title:z?"Mute audio":"Enable audio",onClick:gt,children:z?lt.jsx(bd,{size:19}):lt.jsx(z1,{size:19})}),lt.jsx("button",{title:"Hide interface (H)",onClick:()=>N(!0),children:lt.jsx(N_,{size:19})})]})]})]}),lt.jsxs("footer",{className:"ui",children:[lt.jsxs("span",{children:[lt.jsx("span",{className:"key",children:"DRAG"})," TO LOOK AROUND ",lt.jsx("i",{})," ",lt.jsx("span",{className:"key",children:o==="Manual Flight"?"W A S D":"H"})," ",o==="Manual Flight"?"TO STEER":"TO HIDE INTERFACE"]}),lt.jsxs("span",{children:["BUILT FOR WANDERING ",lt.jsx("span",{className:"tiny-star",children:"✦"})]})]}),A&&lt.jsxs("button",{className:"restore",onClick:()=>N(!1),children:[lt.jsx(N_,{size:16})," Show controls · H"]}),w&&lt.jsxs("div",{className:"panel ui",children:[lt.jsxs("div",{className:"panel-head",children:[lt.jsx("span",{children:w==="regions"?"Choose your horizon":w==="audio"?"The sound of stillness":"Make space your own"}),lt.jsx("button",{title:"Close settings",onClick:()=>I(""),children:lt.jsx(O_,{size:19})})]}),w==="regions"?lt.jsxs(lt.Fragment,{children:[lt.jsx("p",{children:"Every corner of the universe has a different kind of quiet."}),wa.map((ut,Zt)=>lt.jsxs("button",{disabled:Te,className:`region-option ${h===Zt?"active":""}`,onClick:()=>d(Zt),children:[lt.jsx("span",{className:"orb",style:{background:`radial-gradient(circle at 30% 30%,${ut.color},${ut.second},#070a12)`}}),lt.jsxs("span",{children:[ut.name,lt.jsx("small",{children:ut.subtitle})]}),h===Zt?"●":lt.jsx(U_,{size:15})]},ut.name)),lt.jsxs("label",{className:"check",children:[lt.jsx("input",{type:"checkbox",checked:Y,onChange:ut=>Q(ut.target.checked)})," Automatically drift between regions · 90s"]})]}):w==="audio"?lt.jsxs(lt.Fragment,{children:[lt.jsx("p",{children:"Original ambient tones, synthesized just for this journey."}),lt.jsxs("button",{className:"sound-toggle",onClick:gt,children:[z?"Mute all audio":"Enable sound",lt.jsx(bd,{size:17})]}),lt.jsxs("label",{className:"setting",children:["Engine hum",lt.jsx("input",{"aria-label":"Engine volume",type:"range",min:"0",max:"1",step:".01",value:V,onChange:ut=>U(+ut.target.value)})]}),lt.jsxs("label",{className:"setting",children:["Ambient music",lt.jsx("input",{"aria-label":"Music volume",type:"range",min:"0",max:"1",step:".01",value:C,onChange:ut=>H(+ut.target.value)})]})]}):lt.jsxs(lt.Fragment,{children:[lt.jsxs("label",{className:"setting",children:["Graphics quality",lt.jsx("select",{"aria-label":"Graphics quality",value:p,onChange:ut=>g(ut.target.value),children:["Low","Medium","High"].map(ut=>lt.jsx("option",{children:ut},ut))})]}),lt.jsxs("label",{className:"check",children:[lt.jsx("input",{type:"checkbox",checked:bt,onChange:ut=>yt(ut.target.checked)})," Performance mode"]}),lt.jsxs("label",{className:"check",children:[lt.jsx("input",{type:"checkbox",checked:Dt,onChange:ut=>O(ut.target.checked)})," Adaptive resolution"]}),lt.jsx("small",{className:"setting-note",children:"Performance mode prioritizes smooth flight. Adaptive resolution adjusts image detail when rendering is slow."}),lt.jsxs("label",{className:"setting",children:["Environment lighting",lt.jsx("select",{"aria-label":"Environment lighting",value:k,onChange:ut=>K(ut.target.value),children:["Dark","Balanced","Cinematic"].map(ut=>lt.jsx("option",{children:ut},ut))})]}),lt.jsxs("label",{className:"setting",children:["Soft bloom ",lt.jsxs("output",{children:[Math.round(mt*100),"%"]}),lt.jsx("input",{"aria-label":"Soft bloom",type:"range",min:"0",max:".6",step:".02",value:mt,onChange:ut=>Tt(+ut.target.value)}),lt.jsx("small",{className:"setting-note",children:"Low / Medium use lightweight star halos; High can add post-processing bloom."})]}),lt.jsxs("label",{className:"setting",children:["Steering / mouse sensitivity ",lt.jsxs("output",{children:[j.toFixed(2),"×"]}),lt.jsx("input",{"aria-label":"Steering and mouse sensitivity",type:"range",min:".25",max:"2",step:".05",value:j,onChange:ut=>ft(+ut.target.value)})]}),lt.jsxs("label",{className:"setting",children:["Touch sensitivity ",lt.jsxs("output",{children:[St.toFixed(2),"×"]}),lt.jsx("input",{"aria-label":"Touch sensitivity",type:"range",min:".25",max:"1.5",step:".05",value:St,onChange:ut=>Et(+ut.target.value)})]}),lt.jsxs("label",{className:"check",children:[lt.jsx("input",{type:"checkbox",checked:Ht,onChange:ut=>oe(ut.target.checked)})," Invert mouse horizontal axis"]}),lt.jsxs("label",{className:"check",children:[lt.jsx("input",{type:"checkbox",checked:G,onChange:ut=>dt(ut.target.checked)})," Invert mouse vertical axis"]}),lt.jsxs("label",{className:"setting",children:["Camera movement",lt.jsx("input",{"aria-label":"Camera movement",type:"range",min:"0",max:"1",step:".05",value:x,onChange:ut=>S(+ut.target.value)})]}),lt.jsxs("label",{className:"check",children:[lt.jsx("input",{type:"checkbox",checked:_,onChange:ut=>m(ut.target.checked)})," Reduced motion"]}),lt.jsxs("label",{className:"check",children:[lt.jsx("input",{type:"checkbox",checked:E,onChange:ut=>b(ut.target.checked)})," Show cockpit"]}),lt.jsxs("button",{className:"sound-toggle",onClick:Nt,children:[F?"Exit fullscreen":"Enter fullscreen",lt.jsx(L_,{size:16})]})]})]}),pt&&lt.jsxs("div",{role:"alert",className:"error",children:[pt,lt.jsx("button",{onClick:()=>at(""),"aria-label":"Dismiss error",children:lt.jsx(O_,{size:16})})]})]})}b1.createRoot(document.getElementById("root")).render(lt.jsx(VC,{}));
