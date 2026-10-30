var dE=Object.defineProperty;var pE=(o,e,i)=>e in o?dE(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var ve=(o,e,i)=>pE(o,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var xd={exports:{}},hl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y_;function mE(){if(y_)return hl;y_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:c}}return hl.Fragment=e,hl.jsx=i,hl.jsxs=i,hl}var S_;function gE(){return S_||(S_=1,xd.exports=mE()),xd.exports}var lt=gE(),yd={exports:{}},fe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var M_;function vE(){if(M_)return fe;M_=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),S=Symbol.iterator;function E(G){return G===null||typeof G!="object"?null:(G=S&&G[S]||G["@@iterator"],typeof G=="function"?G:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,v={};function b(G,dt,k){this.props=G,this.context=dt,this.refs=v,this.updater=k||R}b.prototype.isReactComponent={},b.prototype.setState=function(G,dt){if(typeof G!="object"&&typeof G!="function"&&G!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,G,dt,"setState")},b.prototype.forceUpdate=function(G){this.updater.enqueueForceUpdate(this,G,"forceUpdate")};function N(){}N.prototype=b.prototype;function C(G,dt,k){this.props=G,this.context=dt,this.refs=v,this.updater=k||R}var I=C.prototype=new N;I.constructor=C,M(I,b.prototype),I.isPureReactComponent=!0;var z=Array.isArray;function P(){}var V={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function w(G,dt,k){var Q=k.ref;return{$$typeof:o,type:G,key:dt,ref:Q!==void 0?Q:null,props:k}}function H(G,dt){return w(G.type,dt,G.props)}function W(G){return typeof G=="object"&&G!==null&&G.$$typeof===o}function K(G){var dt={"=":"=0",":":"=2"};return"$"+G.replace(/[=:]/g,function(k){return dt[k]})}var ht=/\/+/g;function at(G,dt){return typeof G=="object"&&G!==null&&G.key!=null?K(""+G.key):dt.toString(36)}function F(G){switch(G.status){case"fulfilled":return G.value;case"rejected":throw G.reason;default:switch(typeof G.status=="string"?G.then(P,P):(G.status="pending",G.then(function(dt){G.status==="pending"&&(G.status="fulfilled",G.value=dt)},function(dt){G.status==="pending"&&(G.status="rejected",G.reason=dt)})),G.status){case"fulfilled":return G.value;case"rejected":throw G.reason}}throw G}function nt(G,dt,k,Q,pt){var Tt=typeof G;(Tt==="undefined"||Tt==="boolean")&&(G=null);var bt=!1;if(G===null)bt=!0;else switch(Tt){case"bigint":case"string":case"number":bt=!0;break;case"object":switch(G.$$typeof){case o:case e:bt=!0;break;case _:return bt=G._init,nt(bt(G._payload),dt,k,Q,pt)}}if(bt)return pt=pt(G),bt=Q===""?"."+at(G,0):Q,z(pt)?(k="",bt!=null&&(k=bt.replace(ht,"$&/")+"/"),nt(pt,dt,k,"",function(O){return O})):pt!=null&&(W(pt)&&(pt=H(pt,k+(pt.key==null||G&&G.key===pt.key?"":(""+pt.key).replace(ht,"$&/")+"/")+bt)),dt.push(pt)),1;bt=0;var yt=Q===""?".":Q+":";if(z(G))for(var Ut=0;Ut<G.length;Ut++)Q=G[Ut],Tt=yt+at(Q,Ut),bt+=nt(Q,dt,k,Tt,pt);else if(Ut=E(G),typeof Ut=="function")for(G=Ut.call(G),Ut=0;!(Q=G.next()).done;)Q=Q.value,Tt=yt+at(Q,Ut++),bt+=nt(Q,dt,k,Tt,pt);else if(Tt==="object"){if(typeof G.then=="function")return nt(F(G),dt,k,Q,pt);throw dt=String(G),Error("Objects are not valid as a React child (found: "+(dt==="[object Object]"?"object with keys {"+Object.keys(G).join(", ")+"}":dt)+"). If you meant to render a collection of children, use an array instead.")}return bt}function j(G,dt,k){if(G==null)return G;var Q=[],pt=0;return nt(G,Q,"","",function(Tt){return dt.call(k,Tt,pt++)}),Q}function ct(G){if(G._status===-1){var dt=G._result,k=dt();k.then(function(Q){(G._status===0||G._status===-1)&&(G._status=1,G._result=Q,k.status===void 0&&(k.status="fulfilled",k.value=Q))},function(Q){(G._status===0||G._status===-1)&&(G._status=2,G._result=Q,k.status===void 0&&(k.status="rejected",k.reason=Q))}),G._status===-1&&(G._status=0,G._result=k)}if(G._status===1)return G._result.default;throw G._result}var St=typeof reportError=="function"?reportError:function(G){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var dt=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof G=="object"&&G!==null&&typeof G.message=="string"?String(G.message):String(G),error:G});if(!window.dispatchEvent(dt))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",G);return}console.error(G)};function Et(G){var dt=V.T,k={};k.types=dt!==null?dt.types:null,V.T=k;try{var Q=G(),pt=V.S;pt!==null&&pt(k,Q),typeof Q=="object"&&Q!==null&&typeof Q.then=="function"&&Q.then(P,St)}catch(Tt){St(Tt)}finally{dt!==null&&k.types!==null&&(dt.types=k.types),V.T=dt}}function Ft(G){var dt=V.T;if(dt!==null){var k=dt.types;k===null?dt.types=[G]:k.indexOf(G)===-1&&k.push(G)}else Et(Ft.bind(null,G))}var oe={map:j,forEach:function(G,dt,k){j(G,function(){dt.apply(this,arguments)},k)},count:function(G){var dt=0;return j(G,function(){dt++}),dt},toArray:function(G){return j(G,function(dt){return dt})||[]},only:function(G){if(!W(G))throw Error("React.Children.only expected to receive a single React element child.");return G}};return fe.Activity=g,fe.Children=oe,fe.Component=b,fe.Fragment=i,fe.Profiler=l,fe.PureComponent=C,fe.StrictMode=r,fe.Suspense=p,fe.ViewTransition=x,fe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=V,fe.__COMPILER_RUNTIME={__proto__:null,c:function(G){return V.H.useMemoCache(G)}},fe.addTransitionType=Ft,fe.cache=function(G){return function(){return G.apply(null,arguments)}},fe.cacheSignal=function(){return null},fe.cloneElement=function(G,dt,k){if(G==null)throw Error("The argument must be a React element, but you passed "+G+".");var Q=M({},G.props),pt=G.key;if(dt!=null)for(Tt in dt.key!==void 0&&(pt=""+dt.key),dt)!U.call(dt,Tt)||Tt==="key"||Tt==="__self"||Tt==="__source"||Tt==="ref"&&dt.ref===void 0||(Q[Tt]=dt[Tt]);var Tt=arguments.length-2;if(Tt===1)Q.children=k;else if(1<Tt){for(var bt=Array(Tt),yt=0;yt<Tt;yt++)bt[yt]=arguments[yt+2];Q.children=bt}return w(G.type,pt,Q)},fe.createContext=function(G){return G={$$typeof:h,_currentValue:G,_currentValue2:G,_threadCount:0,Provider:null,Consumer:null},G.Provider=G,G.Consumer={$$typeof:c,_context:G},G},fe.createElement=function(G,dt,k){var Q,pt={},Tt=null;if(dt!=null)for(Q in dt.key!==void 0&&(Tt=""+dt.key),dt)U.call(dt,Q)&&Q!=="key"&&Q!=="__self"&&Q!=="__source"&&(pt[Q]=dt[Q]);var bt=arguments.length-2;if(bt===1)pt.children=k;else if(1<bt){for(var yt=Array(bt),Ut=0;Ut<bt;Ut++)yt[Ut]=arguments[Ut+2];pt.children=yt}if(G&&G.defaultProps)for(Q in bt=G.defaultProps,bt)pt[Q]===void 0&&(pt[Q]=bt[Q]);return w(G,Tt,pt)},fe.createRef=function(){return{current:null}},fe.forwardRef=function(G){return{$$typeof:d,render:G}},fe.isValidElement=W,fe.lazy=function(G){return{$$typeof:_,_payload:{_status:-1,_result:G},_init:ct}},fe.memo=function(G,dt){return{$$typeof:m,type:G,compare:dt===void 0?null:dt}},fe.startTransition=Et,fe.unstable_useCacheRefresh=function(){return V.H.useCacheRefresh()},fe.use=function(G){return V.H.use(G)},fe.useActionState=function(G,dt,k){return V.H.useActionState(G,dt,k)},fe.useCallback=function(G,dt){return V.H.useCallback(G,dt)},fe.useContext=function(G){return V.H.useContext(G)},fe.useDebugValue=function(){},fe.useDeferredValue=function(G,dt){return V.H.useDeferredValue(G,dt)},fe.useEffect=function(G,dt){return V.H.useEffect(G,dt)},fe.useEffectEvent=function(G){return V.H.useEffectEvent(G)},fe.useId=function(){return V.H.useId()},fe.useImperativeHandle=function(G,dt,k){return V.H.useImperativeHandle(G,dt,k)},fe.useInsertionEffect=function(G,dt){return V.H.useInsertionEffect(G,dt)},fe.useLayoutEffect=function(G,dt){return V.H.useLayoutEffect(G,dt)},fe.useMemo=function(G,dt){return V.H.useMemo(G,dt)},fe.useOptimistic=function(G,dt){return V.H.useOptimistic(G,dt)},fe.useReducer=function(G,dt,k){return V.H.useReducer(G,dt,k)},fe.useRef=function(G){return V.H.useRef(G)},fe.useState=function(G){return V.H.useState(G)},fe.useSyncExternalStore=function(G,dt,k){return V.H.useSyncExternalStore(G,dt,k)},fe.useTransition=function(){return V.H.useTransition()},fe.version="19.3.1",fe}var E_;function Zp(){return E_||(E_=1,yd.exports=vE()),yd.exports}var me=Zp(),Sd={exports:{}},dl={},Md={exports:{}},Ed={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var T_;function _E(){return T_||(T_=1,(function(o){function e(F,nt){var j=F.length;F.push(nt);t:for(;0<j;){var ct=j-1>>>1,St=F[ct];if(0<l(St,nt))F[ct]=nt,F[j]=St,j=ct;else break t}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var nt=F[0],j=F.pop();if(j!==nt){F[0]=j;t:for(var ct=0,St=F.length,Et=St>>>1;ct<Et;){var Ft=2*(ct+1)-1,oe=F[Ft],G=Ft+1,dt=F[G];if(0>l(oe,j))G<St&&0>l(dt,oe)?(F[ct]=dt,F[G]=j,ct=G):(F[ct]=oe,F[Ft]=j,ct=Ft);else if(G<St&&0>l(dt,j))F[ct]=dt,F[G]=j,ct=G;else break t}}return nt}function l(F,nt){var j=F.sortIndex-nt.sortIndex;return j!==0?j:F.id-nt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],m=[],_=1,g=null,x=3,S=!1,E=!1,R=!1,M=!1,v=typeof setTimeout=="function"?setTimeout:null,b=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function C(F){for(var nt=i(m);nt!==null;){if(nt.callback===null)r(m);else if(nt.startTime<=F)r(m),nt.sortIndex=nt.expirationTime,e(p,nt);else break;nt=i(m)}}function I(F){if(R=!1,C(F),!E)if(i(p)!==null)E=!0,z||(z=!0,W());else{var nt=i(m);nt!==null&&at(I,nt.startTime-F)}}var z=!1,P=-1,V=5,U=-1;function w(){return M?!0:!(o.unstable_now()-U<V)}function H(){if(M=!1,z){var F=o.unstable_now();U=F;var nt=!0;try{t:{E=!1,R&&(R=!1,b(P),P=-1),S=!0;var j=x;try{e:{for(C(F),g=i(p);g!==null&&!(g.expirationTime>F&&w());){var ct=g.callback;if(typeof ct=="function"){g.callback=null,x=g.priorityLevel;var St=ct(g.expirationTime<=F);if(F=o.unstable_now(),typeof St=="function"){g.callback=St,C(F),nt=!0;break e}g===i(p)&&r(p),C(F)}else r(p);g=i(p)}if(g!==null)nt=!0;else{var Et=i(m);Et!==null&&at(I,Et.startTime-F),nt=!1}}break t}finally{g=null,x=j,S=!1}nt=void 0}}finally{nt?W():z=!1}}}var W;if(typeof N=="function")W=function(){N(H)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,ht=K.port2;K.port1.onmessage=H,W=function(){ht.postMessage(null)}}else W=function(){v(H,0)};function at(F,nt){P=v(function(){F(o.unstable_now())},nt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):V=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(F){switch(x){case 1:case 2:case 3:var nt=3;break;default:nt=x}var j=x;x=nt;try{return F()}finally{x=j}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(F,nt){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var j=x;x=F;try{return nt()}finally{x=j}},o.unstable_scheduleCallback=function(F,nt,j){var ct=o.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ct+j:ct):j=ct,F){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=j+St,F={id:_++,callback:nt,priorityLevel:F,startTime:j,expirationTime:St,sortIndex:-1},j>ct?(F.sortIndex=j,e(m,F),i(p)===null&&F===i(m)&&(R?(b(P),P=-1):R=!0,at(I,j-ct))):(F.sortIndex=St,e(p,F),E||S||(E=!0,z||(z=!0,W()))),F},o.unstable_shouldYield=w,o.unstable_wrapCallback=function(F){var nt=x;return function(){var j=x;x=nt;try{return F.apply(this,arguments)}finally{x=j}}}})(Ed)),Ed}var b_;function xE(){return b_||(b_=1,Md.exports=_E()),Md.exports}var Td={exports:{}},Pn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A_;function yE(){if(A_)return Pn;A_=1;var o=Zp();function e(_){var g="https://react.dev/errors/"+_;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)g+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+_+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(_,g,x){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:S===h?h:""+S,children:_,containerInfo:g,implementation:x}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(_,g){if(_==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Pn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Pn.browser=function(_){return{$$typeof:c,_reason:_}},Pn.createPortal=function(_,g){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return d(_,g,null,x)},Pn.flushSync=function(_){var g=p.T,x=r.p;try{if(p.T=null,r.p=2,_)return _()}finally{p.T=g,r.p=x,r.d.f()}},Pn.preconnect=function(_,g){typeof _=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,r.d.C(_,g))},Pn.prefetchDNS=function(_){typeof _=="string"&&r.d.D(_)},Pn.preinit=function(_,g){if(typeof _=="string"&&g&&typeof g.as=="string"){var x=g.as,S=m(x,g.crossOrigin),E=typeof g.integrity=="string"?g.integrity:void 0,R=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;x==="style"?r.d.S(_,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:E,fetchPriority:R}):x==="script"&&r.d.X(_,{crossOrigin:S,integrity:E,fetchPriority:R,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Pn.preinitModule=function(_,g){if(typeof _=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var x=m(g.as,g.crossOrigin);r.d.M(_,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&r.d.M(_)},Pn.preload=function(_,g){if(typeof _=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var x=g.as,S=m(x,g.crossOrigin);r.d.L(_,x,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Pn.preloadModule=function(_,g){if(typeof _=="string")if(g){var x=m(g.as,g.crossOrigin);r.d.m(_,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else r.d.m(_)},Pn.requestFormReset=function(_){r.d.r(_)},Pn.unstable_batchedUpdates=function(_,g){return _(g)},Pn.useFormState=function(_,g,x){return p.H.useFormState(_,g,x)},Pn.useFormStatus=function(){return p.H.useHostTransitionStatus()},Pn.version="19.3.1",Pn}var R_;function SE(){if(R_)return Td.exports;R_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Td.exports=yE(),Td.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var C_;function ME(){if(C_)return dl;C_=1;var o=xE(),e=Zp(),i=SE();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),t;if(f===s)return p(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var y=!1,T=u.child;T;){if(T===a){y=!0,a=u,s=f;break}if(T===s){y=!0,s=u,a=f;break}T=T.sibling}if(!y){for(T=f.child;T;){if(T===a){y=!0,a=f,s=u;break}if(T===s){y=!0,s=f,a=u;break}T=T.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function _(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=_(t),n!==null)return n;t=t.sibling}return null}function g(t,n,a,s,u,f){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,s,u,f)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&g(t.child,n,a,s,u,f))return!0;t=t.sibling}return!1}function x(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function S(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function E(t){var n=[null,null],a=x(t);return a===null||R(n,t,a.child,{foundSelf:!1}),n}function R(t,n,a,s){for(;a!==null;){if(a===n)s.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(s.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&R(t,n,a.child,s))return!0;a=a.sibling}return!1}function M(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(r(559))}}var v=null,b=null;function N(t,n,a){return t===a?!0:t===n?(v=t,!0):!1}function C(t,n,a){return t===a?(b=t,!1):t===n?(b!==null&&(v=t),!0):!1}function I(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function z(t,n,a){for(var s=0,u=t;u;u=a(u))s++;u=0;for(var f=n;f;f=a(f))u++;for(;0<s-u;)t=a(t),s--;for(;0<u-s;)n=a(n),u--;for(;s--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var P=Object.assign,V=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),w=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),W=Symbol.for("react.strict_mode"),K=Symbol.for("react.profiler"),ht=Symbol.for("react.consumer"),at=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),nt=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),ct=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),Ft=Symbol.for("react.legacy_hidden"),oe=Symbol.for("react.memo_cache_sentinel"),G=Symbol.for("react.view_transition"),dt=Symbol.for("react.recoverable"),k=Symbol.iterator;function Q(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var pt=Symbol.for("react.client.reference");function Tt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===pt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case K:return"Profiler";case W:return"StrictMode";case nt:return"Suspense";case j:return"SuspenseList";case Et:return"Activity";case G:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case w:return"Portal";case at:return t.displayName||"Context";case ht:return(t._context.displayName||"Context")+".Consumer";case F:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ct:return n=t.displayName||null,n!==null?n:Tt(t.type)||"Memo";case St:n=t._payload,t=t._init;try{return Tt(t(n))}catch{}}return null}var bt=Array.isArray,yt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ut=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O={pending:!1,data:null,method:null,action:null},le=[],qt=-1;function Bt(t){return{current:t}}function Ot(t){0>qt||(t.current=le[qt],le[qt]=null,qt--)}function $t(t,n){qt++,le[qt]=t.current,t.current=n}var Ht=Bt(null),ee=Bt(null),Ue=Bt(null),Ye=Bt(null);function L(t,n){switch($t(Ue,n),$t(ee,t),$t(Ht,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?wv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=wv(n),t=Dv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Ot(Ht),$t(Ht,t)}function A(){Ot(Ht),Ot(ee),Ot(Ue)}function rt(t){var n=t.memoizedState;n!==null&&(Fs._currentValue=n.memoizedState,$t(Ye,t)),n=Ht.current;var a=Dv(n,t.type);n!==a&&($t(ee,t),$t(Ht,a))}function vt(t){ee.current===t&&(Ot(Ht),Ot(ee)),Ye.current===t&&(Ot(Ye),Fs._currentValue=O)}var At,mt;function Wt(t){if(At===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);At=n&&n[1]||"",mt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+At+t+mt}var Lt=!1;function Zt(t,n){if(!t||Lt)return"";Lt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(It){var Z=It}Reflect.construct(t,[],xt)}else{try{xt.call()}catch(It){Z=It}xt=!1;try{var st=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),xt=!0,new t}finally{xt&&(st!==void 0?Object.defineProperty(t.prototype,"props",st):delete t.prototype.props)}}}else{try{throw Error()}catch(It){Z=It}(xt=t())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(It){if(It&&Z&&typeof It.stack=="string")return[It.stack,Z.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),y=f[0],T=f[1];if(y&&T){var B=y.split(`
`),$=T.split(`
`);for(u=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(s===B.length||u===$.length)for(s=B.length-1,u=$.length-1;1<=s&&0<=u&&B[s]!==$[u];)u--;for(;1<=s&&0<=u;s--,u--)if(B[s]!==$[u]){if(s!==1||u!==1)do if(s--,u--,0>u||B[s]!==$[u]){var ot=`
`+B[s].replace(" at new "," at ");return t.displayName&&ot.includes("<anonymous>")&&(ot=ot.replace("<anonymous>",t.displayName)),ot}while(1<=s&&0<=u);break}}}finally{Lt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Wt(a):""}function gt(t,n){switch(t.tag){case 26:case 27:case 5:return Wt(t.type);case 16:return Wt("Lazy");case 13:return t.child!==n&&n!==null?Wt("Suspense Fallback"):Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return Zt(t.type,!1);case 11:return Zt(t.type.render,!1);case 1:return Zt(t.type,!0);case 31:return Wt("Activity");case 30:return Wt("ViewTransition");default:return""}}function Rt(t){try{var n="",a=null;do n+=gt(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Dt=Object.prototype.hasOwnProperty,ie=o.unstable_scheduleCallback,te=o.unstable_cancelCallback,Gt=o.unstable_shouldYield,ge=o.unstable_requestPaint,q=o.unstable_now,Nt=o.unstable_getCurrentPriorityLevel,zt=o.unstable_ImmediatePriority,jt=o.unstable_UserBlockingPriority,Ct=o.unstable_NormalPriority,Mt=o.unstable_LowPriority,Jt=o.unstable_IdlePriority,de=o.log,We=o.unstable_setDisableYieldValue,Ae=null,en=null;function yn(t){if(typeof de=="function"&&We(t),en&&typeof en.setStrictMode=="function")try{en.setStrictMode(Ae,t)}catch{}}var zn=Math.clz32?Math.clz32:Il,oa=Math.log,Mo=Math.LN2;function Il(t){return t>>>=0,t===0?32:31-(oa(t)/Mo|0)|0}var mr=256,la=262144,gr=4194304;function _i(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function vr(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,y=t.pingedLanes;t=t.warmLanes;var T=s&134217727;return T!==0?(s=T&~f,s!==0?u=_i(s):(y&=T,y!==0?u=_i(y):a||(a=T&~t,a!==0&&(u=_i(a))))):(T=s&~f,T!==0?u=_i(T):y!==0?u=_i(y):a||(a=s&~t,a!==0&&(u=_i(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function La(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Bl(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var s=31-zn(a),u=1<<s;n|=t[s],a&=~u}return n}function Yc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fl(){var t=gr;return gr<<=1,(gr&62914560)===0&&(gr=4194304),t}function Eo(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function _r(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Wc(t,n,a,s,u,f){var y=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,$=t.hiddenUpdates;for(a=y&~a;0<a;){var ot=31-zn(a),xt=1<<ot;T[ot]=0,B[ot]=-1;var Z=$[ot];if(Z!==null)for($[ot]=null,ot=0;ot<Z.length;ot++){var st=Z[ot];st!==null&&(st.lane&=-536870913)}a&=~xt}s!==0&&D(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(y&~n))}function D(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-zn(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function tt(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-zn(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function ut(t,n){var a=n&-n;return a=(a&42)!==0?1:ft(a),(a&(t.suspendedLanes|n))!==0?0:a}function ft(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function et(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function wt(){var t=Ut.p;return t!==0?t:(t=window.event,t===void 0?32:d_(t.type))}function Vt(t,n){var a=Ut.p;try{return Ut.p=t,n()}finally{Ut.p=a}}var Xt=Math.random().toString(36).slice(2),Pt="__reactFiber$"+Xt,Qt="__reactProps$"+Xt,se="__reactContainer$"+Xt,ae="__reactEvents$"+Xt,Ee="__reactListeners$"+Xt,Fe="__reactHandles$"+Xt,$e="__reactResources$"+Xt,ze="__reactMarker$"+Xt,Le="__reactLoad$"+Xt;function re(t){delete t[Pt],delete t[Qt],delete t[Ee],delete t[Fe]}function Ie(t){var n;if(n=t[Pt])return n;for(var a=t.parentNode;a;){if(n=a[se]||a[Pt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Wv(t);t!==null;){if(a=t[Pt])return a;t=Wv(t)}return n}t=a,a=t.parentNode}return null}function Se(t){if(t=t[Pt]||t[se]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Sn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function ai(t){var n=t[$e];return n||(n=t[$e]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Oe(t){t[ze]=!0}function Oa(t){t[Le]=void 0}var Qe=new Set,Xn={};function cn(t,n){rn(t,n),rn(t+"Capture",n)}function rn(t,n){for(Xn[t]=n,t=0;t<n.length;t++)Qe.add(n[t])}var In=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ns={},Xi={};function Ny(t){return Dt.call(Xi,t)?!0:Dt.call(ns,t)?!1:In.test(t)?Xi[t]=!0:(ns[t]=!0,!1)}var Pe=!1;function mm(){var t=Pe;return Pe=!1,t}function Hl(t,n,a){if(Ny(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Gl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function ua(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,s)}}function ri(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gm(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ly(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(y){a=""+y,f.call(this,y)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function jc(t){if(!t._valueTracker){var n=gm(t)?"checked":"value";t._valueTracker=Ly(t,n,""+t[n])}}function vm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=gm(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}var Oy=/[\n"\\]/g;function xi(t){return t.replace(Oy,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Zc(t,n,a,s,u,f,y,T){t.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?t.type=y:t.removeAttribute("type"),n!=null?y==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ri(n)):t.value!==""+ri(n)&&(t.value=""+ri(n)):y!=="submit"&&y!=="reset"||t.removeAttribute("value"),n!=null?y==="number"&&t.value==n?Qc(t,ri(t.value)):Qc(t,ri(n)):a!=null?Qc(t,ri(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+ri(T):t.removeAttribute("name")}function _m(t,n,a,s,u,f,y,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){jc(t);return}a=a!=null?""+ri(a):"",n=n!=null?""+ri(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=T?t.checked:!!s,t.defaultChecked=!!s,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(t.name=y),jc(t)}function Qc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function is(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+ri(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function xm(t,n,a){if(n!=null&&(n=""+ri(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ri(a):""}function ym(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(bt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ri(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),jc(t)}function as(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Py=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sm(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Py.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Mm(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="",Pe=!0);for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&(Sm(t,u,s),Pe=!0)}else for(var f in n)n.hasOwnProperty(f)&&Sm(t,f,n[f])}function Kc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zy=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Iy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vl(t){return Iy.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function qi(){}var Jc=null;function $c(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var rs=null,ss=null;function Em(t){var n=Se(t);if(n&&(t=n.stateNode)){var a=t[Qt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Zc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+xi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[Qt]||null;if(!u)throw Error(r(90));Zc(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&vm(s)}break t;case"textarea":xm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&is(t,!!a.multiple,n,!1)}}}var tf=!1;function Tm(t,n,a){if(tf)return t(n,a);tf=!0;try{var s=t(n);return s}finally{if(tf=!1,(rs!==null||ss!==null)&&(Vu(),rs&&(n=rs,t=ss,ss=rs=null,Em(n),t)))for(n=0;n<t.length;n++)Em(t[n])}}function To(t,n){var a=t.stateNode;if(a===null)return null;var s=a[Qt]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var ca=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ef=!1;if(ca)try{var bo={};Object.defineProperty(bo,"passive",{get:function(){ef=!0}}),window.addEventListener("test",bo,bo),window.removeEventListener("test",bo,bo)}catch{ef=!1}var Pa=null,nf=null,kl=null;function bm(){if(kl)return kl;var t,n=nf,a=n.length,s,u="value"in Pa?Pa.value:Pa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var y=a-t;for(s=1;s<=y&&n[a-s]===u[f-s];s++);return kl=u.slice(t,1<s?1-s:void 0)}function Xl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function ql(){return!0}function Am(){return!1}function qn(t){function n(a,s,u,f,y){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=y,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?ql:Am,this.isPropagationStopped=Am,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ql)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ql)},persist:function(){},isPersistent:ql}),n}var za={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yl=qn(za),Ao=P({},za,{view:0,detail:0}),By=qn(Ao),af,rf,Ro,Wl=P({},Ao,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:of,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ro&&(Ro&&t.type==="mousemove"?(af=t.screenX-Ro.screenX,rf=t.screenY-Ro.screenY):rf=af=0,Ro=t),af)},movementY:function(t){return"movementY"in t?t.movementY:rf}}),Rm=qn(Wl),Fy=P({},Wl,{dataTransfer:0}),Hy=qn(Fy),Gy=P({},Ao,{relatedTarget:0}),sf=qn(Gy),Vy=P({},za,{animationName:0,elapsedTime:0,pseudoElement:0}),ky=qn(Vy),Xy=P({},za,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qy=qn(Xy),Yy=P({},za,{data:0}),Cm=qn(Yy),Wy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},jy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qy(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Zy[t])?!!n[t]:!1}function of(){return Qy}var Ky=P({},Ao,{key:function(t){if(t.key){var n=Wy[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Xl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?jy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:of,charCode:function(t){return t.type==="keypress"?Xl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Xl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Jy=qn(Ky),$y=P({},Wl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wm=qn($y),tS=P({},za,{submitter:0}),eS=qn(tS),nS=P({},Ao,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:of}),iS=qn(nS),aS=P({},za,{propertyName:0,elapsedTime:0,pseudoElement:0}),rS=qn(aS),sS=P({},Wl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),oS=qn(sS),lS=P({},za,{newState:0,oldState:0,source:0}),uS=qn(lS),cS=[9,13,27,32],lf=ca&&"CompositionEvent"in window,Co=null;ca&&"documentMode"in document&&(Co=document.documentMode);var fS=ca&&"TextEvent"in window&&!Co,Dm=ca&&(!lf||Co&&8<Co&&11>=Co),Um=" ",Nm=!1;function Lm(t,n){switch(t){case"keyup":return cS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Om(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var os=!1;function hS(t,n){switch(t){case"compositionend":return Om(n);case"keypress":return n.which!==32?null:(Nm=!0,Um);case"textInput":return t=n.data,t===Um&&Nm?null:t;default:return null}}function dS(t,n){if(os)return t==="compositionend"||!lf&&Lm(t,n)?(t=bm(),kl=nf=Pa=null,os=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Dm&&n.locale!=="ko"?null:n.data;default:return null}}var pS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Pm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!pS[t.type]:n==="textarea"}function zm(t,n,a,s){rs?ss?ss.push(s):ss=[s]:rs=s,n=ju(n,"onChange"),0<n.length&&(a=new Yl("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var wo=null,Do=null;function mS(t){Ev(t,0)}function jl(t){var n=Sn(t);if(vm(n))return t}function Im(t,n){if(t==="change")return n}var Bm=!1;if(ca){var uf;if(ca){var cf="oninput"in document;if(!cf){var Fm=document.createElement("div");Fm.setAttribute("oninput","return;"),cf=typeof Fm.oninput=="function"}uf=cf}else uf=!1;Bm=uf&&(!document.documentMode||9<document.documentMode)}function Hm(){wo&&(wo.detachEvent("onpropertychange",Gm),Do=wo=null)}function Gm(t){if(t.propertyName==="value"&&jl(Do)){var n=[];zm(n,Do,t,$c(t)),Tm(mS,n)}}function gS(t,n,a){t==="focusin"?(Hm(),wo=n,Do=a,wo.attachEvent("onpropertychange",Gm)):t==="focusout"&&Hm()}function vS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return jl(Do)}function _S(t,n){if(t==="click")return jl(n)}function xS(t,n){if(t==="input"||t==="change")return jl(n)}function yS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var si=typeof Object.is=="function"?Object.is:yS;function Uo(t,n){if(si(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!Dt.call(n,u)||!si(t[u],n[u]))return!1}return!0}function ff(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Vm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function km(t,n){var a=Vm(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Vm(a)}}function Xm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Xm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function qm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ff(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ff(t.document)}return n}function hf(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var SS=ca&&"documentMode"in document&&11>=document.documentMode,ls=null,df=null,No=null,pf=!1;function Ym(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pf||ls==null||ls!==ff(s)||(s=ls,"selectionStart"in s&&hf(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),No&&Uo(No,s)||(No=s,s=ju(df,"onSelect"),0<s.length&&(n=new Yl("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=ls)))}function xr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var us={animationend:xr("Animation","AnimationEnd"),animationiteration:xr("Animation","AnimationIteration"),animationstart:xr("Animation","AnimationStart"),transitionrun:xr("Transition","TransitionRun"),transitionstart:xr("Transition","TransitionStart"),transitioncancel:xr("Transition","TransitionCancel"),transitionend:xr("Transition","TransitionEnd")},mf={},Wm={};ca&&(Wm=document.createElement("div").style,"AnimationEvent"in window||(delete us.animationend.animation,delete us.animationiteration.animation,delete us.animationstart.animation),"TransitionEvent"in window||delete us.transitionend.transition);function yr(t){if(mf[t])return mf[t];if(!us[t])return t;var n=us[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Wm)return mf[t]=n[a];return t}var jm=yr("animationend"),Zm=yr("animationiteration"),Qm=yr("animationstart"),MS=yr("transitionrun"),ES=yr("transitionstart"),TS=yr("transitioncancel"),Km=yr("transitionend"),Jm=new Map,gf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gf.push("scrollEnd");function Di(t,n){Jm.set(t,n),cn(n,[t])}var bS=0;function fa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Oi.identifierPrefix;var a=bS++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function $m(t){if(t==null||typeof t=="string")return t;var n=null,a=ws;if(a!==null)for(var s=0;s<a.length;s++){var u=t[a[s]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function ha(t,n){return t=$m(t),n=$m(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Zl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},yi=[],cs=0,vf=0;function Ql(){for(var t=cs,n=vf=cs=0;n<t;){var a=yi[n];yi[n++]=null;var s=yi[n];yi[n++]=null;var u=yi[n];yi[n++]=null;var f=yi[n];if(yi[n++]=null,s!==null&&u!==null){var y=s.pending;y===null?u.next=u:(u.next=y.next,y.next=u),s.pending=u}f!==0&&tg(a,u,f)}}function Kl(t,n,a,s){yi[cs++]=t,yi[cs++]=n,yi[cs++]=a,yi[cs++]=s,vf|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function _f(t,n,a,s){return Kl(t,n,a,s),Jl(t)}function Sr(t,n){return Kl(t,null,null,n),Jl(t)}function tg(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-zn(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function Jl(t){if(50<tl)throw tl=0,Gu=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var fs={};function AS(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(t,n,a,s){return new AS(t,n,a,s)}function xf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function da(t,n){var a=t.alternate;return a===null?(a=Jn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function eg(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function $l(t,n,a,s,u,f){var y=0;if(s=t,typeof s=="function")xf(s)&&(y=1);else if(typeof s=="string")y=tE(t,a,Ht.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(s){case Et:return t=Jn(31,a,n,u),t.elementType=Et,t.lanes=f,t;case H:return Mr(a.children,u,f,n);case W:y=8,u|=24;break;case K:return t=Jn(12,a,n,u|2),t.elementType=K,t.lanes=f,t;case nt:return t=Jn(13,a,n,u),t.elementType=nt,t.lanes=f,t;case j:return t=Jn(19,a,n,u),t.elementType=j,t.lanes=f,t;case Ft:case G:return t=u|32,t=Jn(30,a,n,t),t.elementType=G,t.lanes=f,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof s=="object"&&s!==null)switch(s.$$typeof){case at:y=10;break t;case ht:y=9;break t;case F:y=11;break t;case ct:y=14;break t;case St:y=16,s=null;break t}y=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Jn(y,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function Mr(t,n,a,s){return t=Jn(7,t,s,n),t.lanes=a,t}function yf(t,n,a){return t=Jn(6,t,null,n),t.lanes=a,t}function ng(t){var n=Jn(18,null,null,0);return n.stateNode=t,n}function Sf(t,n,a){return n=Jn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var ig=new WeakMap;function Si(t,n){if(typeof t=="object"&&t!==null){var a=ig.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Rt(n)},ig.set(t,n),n)}return{value:t,source:n,stack:Rt(n)}}var hs=[],ds=0,tu=null,Lo=0,Mi=[],Ei=0,Ia=null,Yi=1,Wi="";function pa(t,n){hs[ds++]=Lo,hs[ds++]=tu,tu=t,Lo=n}function ag(t,n,a){Mi[Ei++]=Yi,Mi[Ei++]=Wi,Mi[Ei++]=Ia,Ia=t;var s=Yi;t=Wi;var u=32-zn(s)-1;s&=~(1<<u),a+=1;var f=32-zn(n)+u;if(30<f){var y=u-u%5;f=(s&(1<<y)-1).toString(32),s>>=y,u-=y,Yi=1<<32-zn(n)+u|a<<u|s,Wi=f+t}else Yi=1<<f|a<<u|s,Wi=t}function eu(t){t.return!==null&&(pa(t,1),ag(t,1,0))}function Mf(t){for(;t===tu;)tu=hs[--ds],hs[ds]=null,Lo=hs[--ds],hs[ds]=null;for(;t===Ia;)Ia=Mi[--Ei],Mi[Ei]=null,Wi=Mi[--Ei],Mi[Ei]=null,Yi=Mi[--Ei],Mi[Ei]=null}function rg(t,n){Mi[Ei++]=Yi,Mi[Ei++]=Wi,Mi[Ei++]=Ia,Yi=n.id,Wi=n.overflow,Ia=t}var An=null,Ke=null,Me=!1,Ba=null,Ti=!1,Ef=Error(r(519));function Fa(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Oo(Si(n,t)),Ef}function sg(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[Pt]=t,n[Qt]=s,a){case"dialog":be("cancel",n),be("close",n);break;case"iframe":case"object":case"embed":be("load",n);break;case"video":case"audio":for(a=0;a<nl.length;a++)be(nl[a],n);break;case"source":be("error",n);break;case"img":case"image":case"link":be("error",n),be("load",n);break;case"details":be("toggle",n);break;case"input":be("invalid",n),_m(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":be("invalid",n);break;case"textarea":be("invalid",n),ym(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Rv(n.textContent,a)?(s.popover!=null&&(be("beforetoggle",n),be("toggle",n)),s.onScroll!=null&&be("scroll",n),s.onScrollEnd!=null&&be("scrollend",n),s.onClick!=null&&(n.onclick=qi),n=!0):n=!1,n||Fa(t,!0)}function nu(t){for(An=t.return;An;)switch(An.tag){case 5:case 31:case 13:Ti=!1;return;case 27:case 3:Ti=!0;return;default:An=An.return}}function ps(t){if(t!==An)return!1;if(!Me)return nu(t),Me=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||$h(t.type,t.memoizedProps)),a=!a),a&&Ke&&Fa(t),nu(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=Yv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Ke=Yv(t)}else n===27?(n=Ke,er(t.type)?(t=ld,ld=null,Ke=t):Ke=n):Ke=An?Ai(t.stateNode.nextSibling):null;return!0}function Er(){Ke=An=null,Me=!1}function Tf(){var t=Ba;return t!==null&&(ei===null?ei=t:ei.push.apply(ei,t),Ba=null),t}function Oo(t){Ba===null?Ba=[t]:Ba.push(t)}var bf=Bt(null),Tr=null,ma=null;function Ha(t,n,a){$t(bf,n._currentValue),n._currentValue=a}function ga(t){t._currentValue=bf.current,Ot(bf)}function iu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function Af(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var y=u.child;f=f.firstContext;t:for(;f!==null;){var T=f;f=u;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),iu(f.return,a,t),s||(y=null);break t}f=T.next}}else if(u.tag===18){if(y=u.return,y===null)throw Error(r(341));y.lanes|=a,f=y.alternate,f!==null&&(f.lanes|=a),iu(y,a,t),y=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,y=u.alternate,y!==null&&(y.lanes|=a),iu(u.return,a,t),y=u.child,y=y!==null?y.sibling:null):y=u.child;if(y!==null)y.return=u;else for(y=u;y!==null;){if(y===t){y=null;break}if(u=y.sibling,u!==null){u.return=y.return,y=u;break}y=y.return}u=y}}function br(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var y=u.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var T=u.type;si(u.pendingProps.value,y.value)||(t!==null?t.push(T):t=[T])}}else if(u===Ye.current){if(y=u.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Fs):t=[Fs])}u=u.return}return t!==null&&Af(n,t,a,s),n.flags|=262144,t!==null}function au(t){for(t=t.firstContext;t!==null;){if(!si(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Ar(t){Tr=t,ma=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Dn(t){return og(Tr,t)}function ru(t,n){return Tr===null&&Ar(t),og(t,n)}function og(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ma===null){if(t===null)throw Error(r(308));ma=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ma=ma.next=n;return a}var RS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},CS=o.unstable_scheduleCallback,wS=o.unstable_NormalPriority,fn={$$typeof:at,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rf(){return{controller:new RS,data:new Map,refCount:0}}function Po(t){t.refCount--,t.refCount===0&&CS(wS,function(){t.controller.abort()})}function lg(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var s=n[t];a.indexOf(s)===-1&&a.push(s)}}}var zo=null;function DS(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Io=null,Cf=0,Rr=0,ms=null;function US(t,n){if(Io===null){var a=Io=[];Cf=0,Rr=Xh(),ms={status:"pending",value:void 0,then:function(s){a.push(s)}}}return Cf++,n.then(ug,ug),n}function ug(){if(--Cf===0&&(zo=null,Io!==null)){ms!==null&&(ms.status="fulfilled");var t=Io;Io=null,Rr=0,ms=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function NS(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var cg=yt.S;yt.S=function(t,n){if(nv=q(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&US(t,n),zo!==null)for(var a=Ls;a!==null;)lg(a,zo),a=a.next;if(a=t.types,a!==null){for(var s=Ls;s!==null;)lg(s,a),s=s.next;if(Rr!==0){s=zo,s===null&&(s=zo=[]);for(var u=0;u<a.length;u++){var f=a[u];s.indexOf(f)===-1&&s.push(f)}}}cg!==null&&cg(t,n)};var Cr=Bt(null);function wf(){var t=Cr.current;return t!==null?t:Ze.pooledCache}function su(t,n){n===null?$t(Cr,Cr.current):$t(Cr,n.pool)}function fg(){var t=wf();return t===null?null:{parent:fn._currentValue,pool:t}}var gs=Error(r(460)),Df=Error(r(474)),ou=Error(r(542)),lu={then:function(){}};function hg(t){return t=t.status,t==="fulfilled"||t==="rejected"}function dg(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(qi,qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,mg(t),t===void 0&&!("reason"in n)?Error(r(600)):t;default:if(typeof n.status=="string")n.then(qi,qi);else{if(t=Ze,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,mg(t),t}throw Dr=n,gs}}function wr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Dr=a,gs):a}}var Dr=null;function pg(){if(Dr===null)throw Error(r(459));var t=Dr;return Dr=null,t}function mg(t){if(t===gs||t===ou)throw Error(r(483))}var vs=null,Bo=0;function uu(t){var n=Bo;return Bo+=1,vs===null&&(vs=[]),dg(vs,t,n)}function Ga(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function cu(t,n){throw n.$$typeof===V?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function gg(t){function n(J,X){if(t){var it=J.deletions;it===null?(J.deletions=[X],J.flags|=16):it.push(X)}}function a(J,X){if(!t)return null;for(;X!==null;)n(J,X),X=X.sibling;return null}function s(J){for(var X=new Map;J!==null;)J.key===null?X.set(J.index,J):X.set(J.key,J),J=J.sibling;return X}function u(J,X){return J=da(J,X),J.index=0,J.sibling=null,J}function f(J,X,it){return J.index=it,t?(it=J.alternate,it!==null?(it=it.index,it<X?(J.flags|=2,X):it):(J.flags|=134217730,X)):(J.flags|=1048576,X)}function y(J){return t&&J.alternate===null&&(J.flags|=134217730),J}function T(J,X,it,_t){return X===null||X.tag!==6?(X=yf(it,J.mode,_t),X.return=J,X):(X=u(X,it),X.return=J,X)}function B(J,X,it,_t){var Yt=it.type;return Yt===H?(J=ot(J,X,it.props.children,_t,it.key),Ga(J,it),J):X!==null&&(X.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===St&&wr(Yt)===X.type)?(X=u(X,it.props),Ga(X,it),X.return=J,X):(X=$l(it.type,it.key,it.props,null,J.mode,_t),Ga(X,it),X.return=J,X)}function $(J,X,it,_t){return X===null||X.tag!==4||X.stateNode.containerInfo!==it.containerInfo||X.stateNode.implementation!==it.implementation?(X=Sf(it,J.mode,_t),X.return=J,X):(X=u(X,it.children||[]),X.return=J,X)}function ot(J,X,it,_t,Yt){return X===null||X.tag!==7?(X=Mr(it,J.mode,_t,Yt),X.return=J,X):(X=u(X,it),X.return=J,X)}function xt(J,X,it){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=yf(""+X,J.mode,it),X.return=J,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case U:return it=$l(X.type,X.key,X.props,null,J.mode,it),Ga(it,X),it.return=J,it;case w:return X=Sf(X,J.mode,it),X.return=J,X;case St:return X=wr(X),xt(J,X,it)}if(bt(X)||Q(X))return X=Mr(X,J.mode,it,null),X.return=J,X;if(typeof X.then=="function")return xt(J,uu(X),it);if(X.$$typeof===at)return xt(J,ru(J,X),it);cu(J,X)}return null}function Z(J,X,it,_t){var Yt=X!==null?X.key:null;if(typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint")return Yt!==null?null:T(J,X,""+it,_t);if(typeof it=="object"&&it!==null){switch(it.$$typeof){case U:return it.key===Yt?B(J,X,it,_t):null;case w:return it.key===Yt?$(J,X,it,_t):null;case St:return it=wr(it),Z(J,X,it,_t)}if(bt(it)||Q(it))return Yt!==null?null:ot(J,X,it,_t,null);if(typeof it.then=="function")return Z(J,X,uu(it),_t);if(it.$$typeof===at)return Z(J,X,ru(J,it),_t);cu(J,it)}return null}function st(J,X,it,_t,Yt){if(typeof _t=="string"&&_t!==""||typeof _t=="number"||typeof _t=="bigint")return J=J.get(it)||null,T(X,J,""+_t,Yt);if(typeof _t=="object"&&_t!==null){switch(_t.$$typeof){case U:return J=J.get(_t.key===null?it:_t.key)||null,B(X,J,_t,Yt);case w:return J=J.get(_t.key===null?it:_t.key)||null,$(X,J,_t,Yt);case St:return _t=wr(_t),st(J,X,it,_t,Yt)}if(bt(_t)||Q(_t))return J=J.get(it)||null,ot(X,J,_t,Yt,null);if(typeof _t.then=="function")return st(J,X,it,uu(_t),Yt);if(_t.$$typeof===at)return st(J,X,it,ru(X,_t),Yt);cu(X,_t)}return null}function It(J,X,it,_t){for(var Yt=null,Ce=null,ne=X,ce=X=0,pn=null;ne!==null&&ce<it.length;ce++){ne.index>ce?(pn=ne,ne=null):pn=ne.sibling;var De=Z(J,ne,it[ce],_t);if(De===null){ne===null&&(ne=pn);break}t&&ne&&De.alternate===null&&n(J,ne),X=f(De,X,ce),Ce===null?Yt=De:Ce.sibling=De,Ce=De,ne=pn}if(ce===it.length)return a(J,ne),Me&&pa(J,ce),Yt;if(ne===null){for(;ce<it.length;ce++)ne=xt(J,it[ce],_t),ne!==null&&(X=f(ne,X,ce),Ce===null?Yt=ne:Ce.sibling=ne,Ce=ne);return Me&&pa(J,ce),Yt}for(ne=s(ne);ce<it.length;ce++)pn=st(ne,J,ce,it[ce],_t),pn!==null&&(t&&(De=pn.alternate,De!==null&&ne.delete(De.key===null?ce:De.key)),X=f(pn,X,ce),Ce===null?Yt=pn:Ce.sibling=pn,Ce=pn);return t&&ne.forEach(function(sr){return n(J,sr)}),Me&&pa(J,ce),Yt}function Kt(J,X,it,_t){if(it==null)throw Error(r(151));for(var Yt=null,Ce=null,ne=X,ce=X=0,pn=null,De=it.next();ne!==null&&!De.done;ce++,De=it.next()){ne.index>ce?(pn=ne,ne=null):pn=ne.sibling;var sr=Z(J,ne,De.value,_t);if(sr===null){ne===null&&(ne=pn);break}t&&ne&&sr.alternate===null&&n(J,ne),X=f(sr,X,ce),Ce===null?Yt=sr:Ce.sibling=sr,Ce=sr,ne=pn}if(De.done)return a(J,ne),Me&&pa(J,ce),Yt;if(ne===null){for(;!De.done;ce++,De=it.next())De=xt(J,De.value,_t),De!==null&&(X=f(De,X,ce),Ce===null?Yt=De:Ce.sibling=De,Ce=De);return Me&&pa(J,ce),Yt}for(ne=s(ne);!De.done;ce++,De=it.next())De=st(ne,J,ce,De.value,_t),De!==null&&(t&&(pn=De.alternate,pn!==null&&ne.delete(pn.key===null?ce:pn.key)),X=f(De,X,ce),Ce===null?Yt=De:Ce.sibling=De,Ce=De);return t&&ne.forEach(function(hE){return n(J,hE)}),Me&&pa(J,ce),Yt}function xe(J,X,it,_t){if(typeof it=="object"&&it!==null&&it.type===H&&it.key===null&&it.props.ref===void 0&&(it=it.props.children),typeof it=="object"&&it!==null){switch(it.$$typeof){case U:t:{for(var Yt=it.key;X!==null;){if(X.key===Yt){if(Yt=it.type,Yt===H){if(X.tag===7){a(J,X.sibling),_t=u(X,it.props.children),Ga(_t,it),_t.return=J,J=_t;break t}}else if(X.elementType===Yt||typeof Yt=="object"&&Yt!==null&&Yt.$$typeof===St&&wr(Yt)===X.type){a(J,X.sibling),_t=u(X,it.props),Ga(_t,it),_t.return=J,J=_t;break t}a(J,X);break}else n(J,X);X=X.sibling}it.type===H?(_t=Mr(it.props.children,J.mode,_t,it.key),Ga(_t,it),_t.return=J,J=_t):(_t=$l(it.type,it.key,it.props,null,J.mode,_t),Ga(_t,it),_t.return=J,J=_t)}return y(J);case w:t:{for(Yt=it.key;X!==null;){if(X.key===Yt)if(X.tag===4&&X.stateNode.containerInfo===it.containerInfo&&X.stateNode.implementation===it.implementation){a(J,X.sibling),_t=u(X,it.children||[]),_t.return=J,J=_t;break t}else{a(J,X);break}else n(J,X);X=X.sibling}_t=Sf(it,J.mode,_t),_t.return=J,J=_t}return y(J);case St:return it=wr(it),xe(J,X,it,_t)}if(bt(it))return It(J,X,it,_t);if(Q(it)){if(Yt=Q(it),typeof Yt!="function")throw Error(r(150));return it=Yt.call(it),Kt(J,X,it,_t)}if(typeof it.then=="function")return xe(J,X,uu(it),_t);if(it.$$typeof===at)return xe(J,X,ru(J,it),_t);cu(J,it)}return typeof it=="string"&&it!==""||typeof it=="number"||typeof it=="bigint"?(it=""+it,X!==null&&X.tag===6?(a(J,X.sibling),_t=u(X,it),_t.return=J,J=_t):(a(J,X),_t=yf(it,J.mode,_t),_t.return=J,J=_t),y(J)):a(J,X)}return function(J,X,it,_t){try{Bo=0;var Yt=xe(J,X,it,_t);return vs=null,Yt}catch(ne){if(ne===gs||ne===ou)throw ne;var Ce=Jn(29,ne,null,J.mode);return Ce.lanes=_t,Ce.return=J,Ce}finally{}}}var Ur=gg(!0),vg=gg(!1),Va=!1;function Uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ka(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Xa(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Be&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Jl(t),tg(t,null,a),n}return Kl(t,s,n,a),Jl(t)}function Fo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,tt(t,a)}}function Lf(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=y:f=f.next=y,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var Of=!1;function Ho(){if(Of){var t=ms;if(t!==null)throw t}}function Go(t,n,a,s){Of=!1;var u=t.updateQueue;Va=!1;var f=u.firstBaseUpdate,y=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,$=B.next;B.next=null,y===null?f=$:y.next=$,y=B;var ot=t.alternate;ot!==null&&(ot=ot.updateQueue,T=ot.lastBaseUpdate,T!==y&&(T===null?ot.firstBaseUpdate=$:T.next=$,ot.lastBaseUpdate=B))}if(f!==null){var xt=u.baseState;y=0,ot=$=B=null,T=f;do{var Z=T.lane&-536870913,st=Z!==T.lane;if(st?(Re&Z)===Z:(s&Z)===Z){Z!==0&&Z===Rr&&(Of=!0),ot!==null&&(ot=ot.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var It=t,Kt=T;Z=n;var xe=a;switch(Kt.tag){case 1:if(It=Kt.payload,typeof It=="function"){xt=It.call(xe,xt,Z);break t}xt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=Kt.payload,Z=typeof It=="function"?It.call(xe,xt,Z):It,Z==null)break t;xt=P({},xt,Z);break t;case 2:Va=!0}}Z=T.callback,Z!==null&&(t.flags|=64,st&&(t.flags|=8192),st=u.callbacks,st===null?u.callbacks=[Z]:st.push(Z))}else st={lane:Z,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ot===null?($=ot=st,B=xt):ot=ot.next=st,y|=Z;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;st=T,T=st.next,st.next=null,u.lastBaseUpdate=st,u.shared.pending=null}}while(!0);ot===null&&(B=xt),u.baseState=B,u.firstBaseUpdate=$,u.lastBaseUpdate=ot,f===null&&(u.shared.lanes=0),Ka|=y,t.lanes=y,t.memoizedState=xt}}function _g(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function xg(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)_g(a[t],n)}var qa=Bt(null),fu=Bt(0);function yg(t,n){t=Sa,$t(fu,t),$t(qa,n),Sa=t|n.baseLanes}function Pf(){$t(fu,Sa),$t(qa,qa.current)}function zf(){Sa=fu.current,Ot(qa),Ot(fu)}var Un=Bt(null),Bn=null;function Ya(t){var n=t.alternate;$t(Nn,Nn.current&1),$t(Un,t),Bn===null&&(n===null||qa.current!==null||n.memoizedState!==null)&&(Bn=t)}function If(t){$t(Nn,Nn.current),$t(Un,t),Bn===null&&(Bn=t)}function Sg(t){t.tag===22?($t(Nn,Nn.current),$t(Un,t),Bn===null&&(Bn=t)):Wa()}function Wa(){$t(Nn,Nn.current),$t(Un,Un.current)}function oi(t){Ot(Un),Bn===t&&(Bn=null),Ot(Nn)}var Nn=Bt(0);function Vo(t,n){$t(Un,Un.current),$t(Nn,n)}function Bf(t){Ot(Nn),Ot(Un),Bn===t&&(Bn=null)}function hu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||sd(a)||od(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var va=0,_e=null,je=null,hn=null,du=!1,_s=!1,Nr=!1,pu=0,ko=0,xs=null,LS=0;function sn(){throw Error(r(321))}function Ff(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!si(t[a],n[a]))return!1;return!0}function Hf(t,n,a,s,u,f){return va=f,_e=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,yt.H=t===null||t.memoizedState===null?a0:r0,Nr=!1,f=a(s,u),Nr=!1,_s&&(f=Eg(n,a,s,u)),Mg(t),f}function Mg(t){yt.H=Su;var n=je!==null&&je.next!==null;if(va=0,hn=je=_e=null,du=!1,ko=0,xs=null,n)throw Error(r(300));t===null||dn||(t=t.dependencies,t!==null&&au(t)&&(dn=!0))}function Eg(t,n,a,s){_e=t;var u=0;do{if(_s&&(xs=null),ko=0,_s=!1,25<=u)throw Error(r(301));if(u+=1,hn=je=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}yt.H=GS,f=n(a,s)}while(_s);return f}function OS(){var t=yt.H,n=t.useState()[0];return n=typeof n.then=="function"?Xo(n):n,t=t.useState()[0],(je!==null?je.memoizedState:null)!==t&&(_e.flags|=1024),n}function Gf(){var t=pu!==0;return pu=0,t}function Vf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function kf(t){if(du){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}du=!1}va=0,hn=je=_e=null,_s=!1,ko=pu=0,xs=null}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return hn===null?_e.memoizedState=hn=t:hn=hn.next=t,hn}function un(){if(je===null){var t=_e.alternate;t=t!==null?t.memoizedState:null}else t=je.next;var n=hn===null?_e.memoizedState:hn.next;if(n!==null)hn=n,je=t;else{if(t===null)throw _e.alternate===null?Error(r(467)):Error(r(310));je=t,t={memoizedState:je.memoizedState,baseState:je.baseState,baseQueue:je.baseQueue,queue:je.queue,next:null},hn===null?_e.memoizedState=hn=t:hn=hn.next=t}return hn}function mu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Xo(t){var n=ko;return ko+=1,xs===null&&(xs=[]),t=dg(xs,t,n),n=_e,(hn===null?n.memoizedState:hn.next)===null&&(n=n.alternate,yt.H=n===null||n.memoizedState===null?a0:r0),t}function gu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Xo(t);if(t.$$typeof===dt)return;if(t.$$typeof===at)return Dn(t)}throw Error(r(438,String(t)))}function Xf(t){var n=null,a=_e.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=_e.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=mu(),_e.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=oe;return n.index++,a}function _a(t,n){return typeof n=="function"?n(t):n}function vu(t){var n=un();return qf(n,je,t)}function qf(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var y=u.next;u.next=f.next,f.next=y}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=y=null,B=null,$=n,ot=!1;do{var xt=$.lane&-536870913;if(xt!==$.lane?(Re&xt)===xt:(va&xt)===xt){var Z=$.revertLane;if(Z===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),xt===Rr&&(ot=!0);else if((va&Z)===Z){$=$.next,Z===Rr&&(ot=!0);continue}else xt={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(T=B=xt,y=f):B=B.next=xt,_e.lanes|=Z,Ka|=Z;xt=$.action,Nr&&a(f,xt),f=$.hasEagerState?$.eagerState:a(f,xt)}else Z={lane:xt,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(T=B=Z,y=f):B=B.next=Z,_e.lanes|=xt,Ka|=xt;$=$.next}while($!==null&&$!==n);if(B===null?y=f:B.next=T,!si(f,t.memoizedState)&&(dn=!0,ot&&(a=ms,a!==null)))throw a;t.memoizedState=f,t.baseState=y,t.baseQueue=B,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Yf(t){var n=un(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var y=u=u.next;do f=t(f,y.action),y=y.next;while(y!==u);si(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Tg(t,n,a){var s=_e,u=un(),f=Me;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var y=!si((je||u).memoizedState,a);if(y&&(u.memoizedState=a,dn=!0),u=u.queue,Zf(Rg.bind(null,s,u,t),[t]),t=u.getSnapshot!==n||y||hn!==null&&(hn.memoizedState.tag&1)!==0,ys(t?9:8,{destroy:void 0},Ag.bind(null,s,u,a,n),null),t){if(s.flags|=2048,Ze===null)throw Error(r(349));f||(va&127)!==0||bg(s,n,a)}return a}function bg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=_e.updateQueue,n===null?(n=mu(),_e.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Ag(t,n,a,s){n.value=a,n.getSnapshot=s,Cg(n)&&wg(t)}function Rg(t,n,a){return a(function(){Cg(n)&&wg(t)})}function Cg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!si(t,a)}catch{return!0}}function wg(t){var n=Sr(t,2);n!==null&&ni(n,t,2)}function Wf(t){var n=Yn();if(typeof t=="function"){var a=t;if(t=a(),Nr){yn(!0);try{a()}finally{yn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:t},n}function Dg(t,n,a,s){return t.baseState=a,qf(t,je,typeof s=="function"?s:_a)}function PS(t,n,a,s,u){if(yu(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){f.listeners.push(y)}};yt.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Ug(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Ug(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=yt.T,y={};y.types=f!==null?f.types:null,yt.T=y;try{var T=a(u,s),B=yt.S;B!==null&&B(y,T),Ng(t,n,T)}catch($){jf(t,n,$)}finally{f!==null&&y.types!==null&&(f.types=y.types),yt.T=f}}else try{f=a(u,s),Ng(t,n,f)}catch($){jf(t,n,$)}}function Ng(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Lg(t,n,s)},function(s){return jf(t,n,s)}):Lg(t,n,a)}function Lg(t,n,a){n.status="fulfilled",n.value=a,Og(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Ug(t,a)))}function jf(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Og(n),n=n.next;while(n!==s)}t.action=null}function Og(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Pg(t,n){return n}function zg(t,n){if(Me){var a=Ze.formState;if(a!==null){t:{var s=_e;if(Me){if(Ke){e:{for(var u=Ke,f=Ti;u.nodeType!==8;){if(!f){u=null;break e}if(u=Ai(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Ke=Ai(u.nextSibling),s=u.data==="F!";break t}}Fa(s)}s=!1}s&&(n=a[0])}}return a=Yn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pg,lastRenderedState:n},a.queue=s,a=e0.bind(null,_e,s),s.dispatch=a,s=Wf(!1),f=th.bind(null,_e,!1,s.queue),s=Yn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=PS.bind(null,_e,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function Ig(t){var n=un();return Bg(n,je,t)}function Bg(t,n,a){if(n=qf(t,n,Pg)[0],t=vu(_a)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Xo(n)}catch(y){throw y===gs?ou:y}else s=n;n=un();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(_e.flags|=2048,ys(9,{destroy:void 0},zS.bind(null,u,a),null)),[s,f,t]}function zS(t,n){t.action=n}function Fg(t){var n=un(),a=je;if(a!==null)return Bg(n,a,t);un(),n=n.memoizedState,a=un();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function ys(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=_e.updateQueue,n===null&&(n=mu(),_e.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Hg(){return un().memoizedState}function _u(t,n,a,s){var u=Yn();_e.flags|=t,u.memoizedState=ys(1|n,{destroy:void 0},a,s===void 0?null:s)}function xu(t,n,a,s){var u=un();s=s===void 0?null:s;var f=u.memoizedState.inst;je!==null&&s!==null&&Ff(s,je.memoizedState.deps)?u.memoizedState=ys(n,f,a,s):(_e.flags|=t,u.memoizedState=ys(1|n,f,a,s))}function Gg(t,n){_u(8390656,8,t,n)}function Zf(t,n){xu(2048,8,t,n)}function IS(t){_e.flags|=4;var n=_e.updateQueue;if(n===null)n=mu(),_e.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Vg(t){var n=un().memoizedState;return IS({ref:n,nextImpl:t}),function(){if((Be&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function kg(t,n){return xu(4,2,t,n)}function Xg(t,n){return xu(4,4,t,n)}function qg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Yg(t,n,a){a=a!=null?a.concat([t]):null,xu(4,4,qg.bind(null,n,t),a)}function Qf(){}function Wg(t,n){var a=un();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Ff(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function jg(t,n){var a=un();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Ff(n,s[1]))return s[0];if(s=t(),Nr){yn(!0);try{t()}finally{yn(!1)}}return a.memoizedState=[s,n],s}function Kf(t,n,a){return a===void 0||(va&1073741824)!==0&&(Re&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=av(),_e.lanes|=t,Ka|=t,a)}function Zg(t,n,a,s){return si(a,n)?a:qa.current!==null?(t=Kf(t,a,s),si(t,n)||(dn=!0),t):(va&106)===0||(va&1073741824)!==0&&(Re&261930)===0?(dn=!0,t.memoizedState=a):(t=av(),_e.lanes|=t,Ka|=t,n)}function Qg(t,n,a,s,u){var f=Ut.p;Ut.p=f!==0&&8>f?f:8;var y=yt.T,T={};T.types=y!==null?y.types:null,yt.T=T,th(t,!1,n,a);try{var B=u(),$=yt.S;if($!==null&&$(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ot=NS(B,s);qo(t,n,ot,fi(t))}else qo(t,n,s,fi(t))}catch(xt){qo(t,n,{then:function(){},status:"rejected",reason:xt},fi())}finally{Ut.p=f,y!==null&&T.types!==null&&(y.types=T.types),yt.T=y}}function BS(){}function Jf(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=Kg(t).queue;Qg(t,u,n,O,a===null?BS:function(){return Jg(t),a(s)})}function Kg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:O,baseState:O,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:O},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:_a,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Jg(t){var n=Kg(t);n.next===null&&(n=t.alternate.memoizedState),qo(t,n.next.queue,{},fi())}function $f(){return Dn(Fs)}function $g(){return un().memoizedState}function t0(){return un().memoizedState}function FS(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=fi();t=ka(a);var s=Xa(n,t,a);s!==null&&(ni(s,n,a),Fo(s,n,a)),n={cache:Rf()},t.payload=n;return}n=n.return}}function HS(t,n,a){var s=fi();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},yu(t)?n0(n,a):(a=_f(t,n,a,s),a!==null&&(ni(a,t,s),i0(a,n,s)))}function e0(t,n,a){var s=fi();qo(t,n,a,s)}function qo(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(yu(t))n0(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var y=n.lastRenderedState,T=f(y,a);if(u.hasEagerState=!0,u.eagerState=T,si(T,y))return Kl(t,n,u,0),Ze===null&&Ql(),!1}catch{}finally{}if(a=_f(t,n,u,s),a!==null)return ni(a,t,s),i0(a,n,s),!0}return!1}function th(t,n,a,s){if(s={lane:2,revertLane:Xh(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},yu(t)){if(n)throw Error(r(479))}else n=_f(t,a,s,2),n!==null&&ni(n,t,2)}function yu(t){var n=t.alternate;return t===_e||n!==null&&n===_e}function n0(t,n){_s=du=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function i0(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,tt(t,a)}}var Su={readContext:Dn,use:gu,useCallback:sn,useContext:sn,useEffect:sn,useImperativeHandle:sn,useLayoutEffect:sn,useInsertionEffect:sn,useMemo:sn,useReducer:sn,useRef:sn,useState:sn,useDebugValue:sn,useDeferredValue:sn,useTransition:sn,useSyncExternalStore:sn,useId:sn,useHostTransitionStatus:sn,useFormState:sn,useActionState:sn,useOptimistic:sn,useMemoCache:sn,useCacheRefresh:sn,useEffectEvent:sn},a0={readContext:Dn,use:gu,useCallback:function(t,n){return Yn().memoizedState=[t,n===void 0?null:n],t},useContext:Dn,useEffect:Gg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,_u(4194308,4,qg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return _u(4194308,4,t,n)},useInsertionEffect:function(t,n){_u(4,2,t,n)},useMemo:function(t,n){var a=Yn();n=n===void 0?null:n;var s=t();if(Nr){yn(!0);try{t()}finally{yn(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Yn();if(a!==void 0){var u=a(n);if(Nr){yn(!0);try{a(n)}finally{yn(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=HS.bind(null,_e,t),[s.memoizedState,t]},useRef:function(t){var n=Yn();return t={current:t},n.memoizedState=t},useState:function(t){t=Wf(t);var n=t.queue,a=e0.bind(null,_e,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Qf,useDeferredValue:function(t,n){var a=Yn();return Kf(a,t,n)},useTransition:function(){var t=Wf(!1);return t=Qg.bind(null,_e,t.queue,!0,!1),Yn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=_e,u=Yn();if(Me){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Ze===null)throw Error(r(349));(Re&127)!==0||bg(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,Gg(Rg.bind(null,s,f,t),[t]),s.flags|=2048,ys(9,{destroy:void 0},Ag.bind(null,s,f,a,n),null),a},useId:function(){var t=Yn(),n=Ze.identifierPrefix;if(Me){var a=Wi,s=Yi;a=(s&~(1<<32-zn(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=pu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=LS++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:$f,useFormState:zg,useActionState:zg,useOptimistic:function(t){var n=Yn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=th.bind(null,_e,!0,a),a.dispatch=n,[t,n]},useMemoCache:Xf,useCacheRefresh:function(){return Yn().memoizedState=FS.bind(null,_e)},useEffectEvent:function(t){var n=Yn(),a={impl:t};return n.memoizedState=a,function(){if((Be&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},r0={readContext:Dn,use:gu,useCallback:Wg,useContext:Dn,useEffect:Zf,useImperativeHandle:Yg,useInsertionEffect:kg,useLayoutEffect:Xg,useMemo:jg,useReducer:vu,useRef:Hg,useState:function(){return vu(_a)},useDebugValue:Qf,useDeferredValue:function(t,n){var a=un();return Zg(a,je.memoizedState,t,n)},useTransition:function(){var t=vu(_a)[0],n=un().memoizedState;return[typeof t=="boolean"?t:Xo(t),n]},useSyncExternalStore:Tg,useId:$g,useHostTransitionStatus:$f,useFormState:Ig,useActionState:Ig,useOptimistic:function(t,n){var a=un();return Dg(a,je,t,n)},useMemoCache:Xf,useCacheRefresh:t0,useEffectEvent:Vg},GS={readContext:Dn,use:gu,useCallback:Wg,useContext:Dn,useEffect:Zf,useImperativeHandle:Yg,useInsertionEffect:kg,useLayoutEffect:Xg,useMemo:jg,useReducer:Yf,useRef:Hg,useState:function(){return Yf(_a)},useDebugValue:Qf,useDeferredValue:function(t,n){var a=un();return je===null?Kf(a,t,n):Zg(a,je.memoizedState,t,n)},useTransition:function(){var t=Yf(_a)[0],n=un().memoizedState;return[typeof t=="boolean"?t:Xo(t),n]},useSyncExternalStore:Tg,useId:$g,useHostTransitionStatus:$f,useFormState:Fg,useActionState:Fg,useOptimistic:function(t,n){var a=un();return je!==null?Dg(a,je,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Xf,useCacheRefresh:t0,useEffectEvent:Vg};function eh(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:P({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var nh={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=fi(),u=ka(s);u.payload=n,a!=null&&(u.callback=a),n=Xa(t,u,s),n!==null&&(ni(n,t,s),Fo(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=fi(),u=ka(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Xa(t,u,s),n!==null&&(ni(n,t,s),Fo(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=fi(),s=ka(a);s.tag=2,n!=null&&(s.callback=n),n=Xa(t,s,a),n!==null&&(ni(n,t,a),Fo(n,t,a))}};function s0(t,n,a,s,u,f,y){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,y):n.prototype&&n.prototype.isPureReactComponent?!Uo(a,s)||!Uo(u,f):!0}function o0(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&nh.enqueueReplaceState(n,n.state,null)}function Lr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=P({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function l0(t){Zl(t)}function u0(t){console.error(t)}function c0(t){Zl(t)}function Mu(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function f0(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function ih(t,n,a){return a=ka(a),a.tag=3,a.payload={element:null},a.callback=function(){Mu(t,n)},a}function h0(t){return t=ka(t),t.tag=3,t}function d0(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){f0(n,a,s)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(t.callback=function(){f0(n,a,s),typeof u!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var T=s.stack;this.componentDidCatch(s.value,{componentStack:T!==null?T:""})})}function VS(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&br(n,a,u,!0),a=Un.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Bn===null?ku():a.alternate===null&&on===0&&(on=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===lu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),Gh(t,s,u)),!1;case 22:return a.flags|=65536,s===lu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),Gh(t,s,u)),!1}throw Error(r(435,a.tag))}return Gh(t,s,u),ku(),!1}if(Me)return n=Un.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==Ef&&(t=Error(r(422),{cause:s}),Oo(Si(t,a)))):(s!==Ef&&(n=Error(r(423),{cause:s}),Oo(Si(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Si(s,a),u=ih(t.stateNode,s,u),Lf(t,u),on!==4&&(on=2)),!1;var f=Error(r(520),{cause:s});if(f=Si(f,a),$o===null?$o=[f]:$o.push(f),on!==4&&(on=2),n===null)return!0;s=Si(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=ih(a.stateNode,s,t),Lf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ja===null||!Ja.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=h0(u),d0(u,t,a,s),Lf(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var ah=Error(r(461)),dn=!1;function Mn(t,n,a,s){n.child=t===null?vg(n,null,a,s):Ur(n,t.child,a,s)}function p0(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var y={};for(var T in s)T!=="ref"&&(y[T]=s[T])}else y=s;return Ar(n),s=Hf(t,n,a,y,f,u),T=Gf(),t!==null&&!dn?(Vf(t,n,u),xa(t,n,u)):(Me&&T&&eu(n),n.flags|=1,Mn(t,n,s,u),n.child)}function m0(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!xf(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,g0(t,n,f,s,u)):(t=$l(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!hh(t,u)){var y=f.memoizedProps;if(a=a.compare,a=a!==null?a:Uo,a(y,s)&&t.ref===n.ref)return xa(t,n,u)}return n.flags|=1,t=da(f,s),t.ref=n.ref,t.return=n,n.child=t}function g0(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Uo(f,s)&&t.ref===n.ref)if(dn=!1,n.pendingProps=s=f,hh(t,u))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,xa(t,n,u)}return rh(t,n,a,s,u)}function v0(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return _0(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&su(n,f!==null?f.cachePool:null),f!==null?yg(n,f):Pf(),Sg(n);else return s=n.lanes=536870912,_0(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(su(n,f.cachePool),yg(n,f),Wa(),n.memoizedState=null):(t!==null&&su(n,null),Pf(),Wa());return Mn(t,n,u,a),n.child}function Yo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function _0(t,n,a,s,u){var f=wf();return f=f===null?null:{parent:fn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&su(n,null),Pf(),Sg(n),t!==null&&br(t,n,s,!0),n.childLanes=u,null}function Eu(t,n){return n=Tu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function x0(t,n,a){return Ur(n,t.child,null,a),t=Eu(n,n.pendingProps),t.flags|=2,oi(n),n.memoizedState=null,t}function kS(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(Me){if(s.mode==="hidden")return t=Eu(n,s),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Yo(null,t);if(If(n),(t=Ke)?(t=qv(t,Ti),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:Yi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},a=ng(t),a.return=n,n.child=a,An=n,Ke=null)):t=null,t===null)throw Fa(n);return n.lanes=536870912,null}return Eu(n,s)}var f=t.memoizedState;if(f!==null){var y=f.dehydrated;if(If(n),u)if(n.flags&256)n.flags&=-257,n=x0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(dn||br(t,n,a,!1),u=(a&t.childLanes)!==0,dn||u){if(qa.current===null){if(s=Ze,s!==null&&(y=ut(s,a),y!==0&&y!==f.retryLane))throw f.retryLane=y,Sr(t,y),ni(s,t,y),ah;ku()}n=x0(t,n,a)}else t=f.treeContext,Ke=Ai(y.nextSibling),An=n,Me=!0,Ba=null,Ti=!1,t!==null&&rg(n,t),n=Eu(n,s),n.flags|=134221824;return n}return t=da(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ss(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function rh(t,n,a,s,u){return Ar(n),a=Hf(t,n,a,s,void 0,u),s=Gf(),t!==null&&!dn?(Vf(t,n,u),xa(t,n,u)):(Me&&s&&eu(n),n.flags|=1,Mn(t,n,a,u),n.child)}function y0(t,n,a,s,u,f){return Ar(n),n.updateQueue=null,a=Eg(n,s,a,u),Mg(t),s=Gf(),t!==null&&!dn?(Vf(t,n,f),xa(t,n,f)):(Me&&s&&eu(n),n.flags|=1,Mn(t,n,a,f),n.child)}function S0(t,n,a,s,u){if(Ar(n),n.stateNode===null){var f=fs,y=a.contextType;typeof y=="object"&&y!==null&&(f=Dn(y)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=nh,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Uf(n),y=a.contextType,f.context=typeof y=="object"&&y!==null?Dn(y):fs,f.state=n.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(eh(n,a,y,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(y=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),y!==f.state&&nh.enqueueReplaceState(f,f.state,null),Go(n,s,f,u),Ho(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,B=Lr(a,T);f.props=B;var $=f.context,ot=a.contextType;y=fs,typeof ot=="object"&&ot!==null&&(y=Dn(ot));var xt=a.getDerivedStateFromProps;ot=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ot||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==y)&&o0(n,f,s,y),Va=!1;var Z=n.memoizedState;f.state=Z,Go(n,s,f,u),Ho(),$=n.memoizedState,T||Z!==$||Va?(typeof xt=="function"&&(eh(n,a,xt,s),$=n.memoizedState),(B=Va||s0(n,a,B,s,Z,$,y))?(ot||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=$),f.props=s,f.state=$,f.context=y,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Nf(t,n),y=n.memoizedProps,ot=Lr(a,y),f.props=ot,xt=n.pendingProps,Z=f.context,$=a.contextType,B=fs,typeof $=="object"&&$!==null&&(B=Dn($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(y!==xt||Z!==B)&&o0(n,f,s,B),Va=!1,Z=n.memoizedState,f.state=Z,Go(n,s,f,u),Ho();var st=n.memoizedState;y!==xt||Z!==st||Va||t!==null&&t.dependencies!==null&&au(t.dependencies)?(typeof T=="function"&&(eh(n,a,T,s),st=n.memoizedState),(ot=Va||s0(n,a,ot,s,Z,st,B)||t!==null&&t.dependencies!==null&&au(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,st,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,st,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&Z===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&Z===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=st),f.props=s,f.state=st,f.context=B,s=ot):(typeof f.componentDidUpdate!="function"||y===t.memoizedProps&&Z===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||y===t.memoizedProps&&Z===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ss(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Ur(n,t.child,null,u),n.child=Ur(n,null,a,u)):Mn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=xa(t,n,u),t}function M0(t,n,a,s){return Er(),n.flags|=256,Mn(t,n,a,s),n.child}var sh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function oh(t){return{baseLanes:t,cachePool:fg()}}function lh(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ci),t}function E0(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,y;if((y=f)||(y=t!==null&&t.memoizedState===null?!1:(Nn.current&2)!==0),y&&(u=!0,n.flags&=-129),y=(n.flags&32)!==0,n.flags&=-33,t===null){if(Me){if(u?Ya(n):Wa(),(t=Ke)?(t=qv(t,Ti),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Ia!==null?{id:Yi,overflow:Wi}:null,retryLane:536870912,hydrationErrors:null},a=ng(t),a.return=n,n.child=a,An=n,Ke=null)):t=null,t===null)throw Fa(n);return od(t)?n.lanes=32:n.lanes=536870912,null}return f=s.children,s=s.fallback,u?(Wa(),u=n.mode,f=Tu({mode:"hidden",children:f},u),s=Mr(s,u,a,null),f.return=n,s.return=n,f.sibling=s,n.child=f,s=n.child,s.memoizedState=oh(a),s.childLanes=lh(t,y,a),n.memoizedState=sh,Yo(null,s)):(Ya(n),uh(n,f))}var T=t.memoizedState;if(T!==null){var B=T.dehydrated;if(B!==null)return XS(t,n,f,y,s,B,T,a)}return u?(Wa(),u=s.fallback,f=n.mode,T=t.child,B=T.sibling,s=da(T,{mode:"hidden",children:s.children}),s.subtreeFlags=T.subtreeFlags&1206910976,B!==null?u=da(B,u):(u=Mr(u,f,a,null),u.flags|=2),u.return=n,s.return=n,s.sibling=u,n.child=s,Yo(null,s),s=n.child,u=t.child.memoizedState,u===null?u=oh(a):(f=u.cachePool,f!==null?(T=fn._currentValue,f=f.parent!==T?{parent:T,pool:T}:f):f=fg(),u={baseLanes:u.baseLanes|a,cachePool:f}),s.memoizedState=u,s.childLanes=lh(t,y,a),n.memoizedState=sh,Yo(t.child,s)):(Ya(n),a=t.child,t=a.sibling,a=da(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(y=n.deletions,y===null?(n.deletions=[t],n.flags|=16):y.push(t)),n.child=a,n.memoizedState=null,a)}function uh(t,n){return n=Tu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Tu(t,n){return t=Jn(22,t,null,n),t.lanes=0,t}function bu(t,n,a){return Ur(n,t.child,null,a),t=uh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function XS(t,n,a,s,u,f,y,T){if(a)return n.flags&256?(Ya(n),n.flags&=-257,bu(t,n,T)):n.memoizedState!==null?(Wa(),n.child=t.child,n.flags|=128,null):(Wa(),f=u.fallback,y=n.mode,u=Tu({mode:"visible",children:u.children},y),f=Mr(f,y,T,null),f.flags|=2,u.return=n,f.return=n,u.sibling=f,n.child=u,Ur(n,t.child,null,T),u=n.child,u.memoizedState=oh(T),u.childLanes=lh(t,s,T),n.memoizedState=sh,Yo(null,u));if(Ya(n),od(f)){if(s=f.nextSibling&&f.nextSibling.dataset,s)var B=s.dgst;return s=B,s!==""&&(u=Error(r(419)),u.stack="",u.digest=s,Oo({value:u,source:null,stack:null})),bu(t,n,T)}if(dn||br(t,n,T,!1),s=(T&t.childLanes)!==0,dn||s){if(qa.current!==null)return bu(t,n,T);if(s=Ze,s!==null&&(u=ut(s,T),u!==0&&u!==y.retryLane))throw y.retryLane=u,Sr(t,u),ni(s,t,u),ah;return sd(f)||ku(),bu(t,n,T)}return sd(f)?(n.flags|=192,n.child=t.child,null):(t=y.treeContext,Ke=Ai(f.nextSibling),An=n,Me=!0,Ba=null,Ti=!1,t!==null&&rg(n,t),n=uh(n,u.children),n.flags|=134221824,n)}function T0(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),iu(t.return,n,a)}function b0(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&hu(a)===null&&(n=t),t=t.sibling}return n}function Au(t,n,a,s,u,f){var y=t.memoizedState;y===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(y.isBackwards=n,y.rendering=null,y.renderingStartTime=0,y.last=s,y.tail=a,y.tailMode=u,y.treeForkCount=f)}function ch(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function fh(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var y=Nn.current;if(n.flags&128)return Vo(n,y),null;var T=(y&2)!==0;if(T?(y=y&1|2,n.flags|=128):y&=1,Vo(n,y),u==="backwards"&&t!==null?(ch(t),Mn(t,n,s,a),ch(t)):Mn(t,n,s,a),s=Me?Lo:0,!T&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&T0(t,a,n);else if(t.tag===19)T0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=b0(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,ch(n)),Au(n,!0,u,null,f,s);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&hu(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Au(n,!0,a,null,f,s);break;case"together":Au(n,!1,null,null,void 0,s);break;case"independent":n.memoizedState=null;break;default:a=b0(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Au(n,!1,u,a,f,s)}return n.child}function A0(t,n,a){var s=n.pendingProps;return Ha(n,n.type,s.value),Mn(t,n,s.children,a),n.child}function xa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ka|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(br(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=da(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=da(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function hh(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&au(t)))}function qS(t,n,a){switch(n.tag){case 3:L(n,n.stateNode.containerInfo),Ha(n,fn,t.memoizedState.cache),Er();break;case 27:case 5:rt(n);break;case 4:L(n,n.stateNode.containerInfo);break;case 10:Ha(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,If(n),null;break;case 13:var s=n.memoizedState;if(s!==null){if(s.dehydrated!==null)return Ya(n),n.flags|=128,null;s=br(t,n,a,!1);var u=n.child.childLanes;return s||(a&u)!==0?E0(t,n,a):(Ya(n),t=xa(t,n,a),t!==null?t.sibling:null)}Ya(n);break;case 19:if(n.flags&128)return fh(t,n,a);if(u=(t.flags&128)!==0,s=(a&n.childLanes)!==0,s||(br(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return fh(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Vo(n,Nn.current),s)break;return null;case 22:return n.lanes=0,v0(t,n,a,n.pendingProps);case 24:Ha(n,fn,t.memoizedState.cache)}return xa(t,n,a)}function R0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!hh(t,a)&&(n.flags&128)===0)return dn=!1,qS(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,Me&&(n.flags&1048576)!==0&&ag(n,Lo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=wr(n.elementType),n.type=t,typeof t=="function")xf(t)?(s=Lr(t,s),n.tag=1,n=S0(null,n,t,s,a)):(n.tag=0,n=rh(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===F){n.tag=11,n=p0(null,n,t,s,a);break t}else if(u===ct){n.tag=14,n=m0(null,n,t,s,a);break t}else if(u===at){n.tag=10,n.type=t,n=A0(null,n,a);break t}}throw n=Tt(t)||t,Error(r(306,n,""))}}return n;case 0:return rh(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=Lr(s,n.pendingProps),S0(t,n,s,u,a);case 3:t:{if(L(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,Nf(t,n),Go(n,s,null,a);var y=n.memoizedState;if(s=y.cache,Ha(n,fn,s),s!==f.cache&&Af(n,[fn],a,!0),Ho(),s=y.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:y.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=M0(t,n,s,a);break t}else if(s!==u){u=Si(Error(r(424)),n),Oo(u),n=M0(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ke=Ai(t.firstChild),An=n,Me=!0,Ba=null,Ti=!0,a=vg(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Er(),s===u){n=xa(t,n,a);break t}Mn(t,n,s,a)}n=n.child}return n;case 26:return Ss(t,n),t===null?(a=Jv(n.type,null,n.pendingProps,null))?n.memoizedState=a:Me||(n.stateNode=Uv(n.type,n.pendingProps,Ue.current,n)):n.memoizedState=Jv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return rt(n),t===null&&Me&&(s=n.stateNode=jv(n.type,n.pendingProps,Ue.current),An=n,Ti=!0,u=Ke,er(n.type)?(ld=u,Ke=Ai(s.firstChild)):Ke=u),Mn(t,n,n.pendingProps.children,a),Ss(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&Me&&((u=s=Ke)&&(s=FM(s,n.type,n.pendingProps,Ti),s!==null?(n.stateNode=s,An=n,Ke=Ai(s.firstChild),Ti=!1,u=!0):u=!1),u||Fa(n)),rt(n),u=n.type,f=n.pendingProps,y=t!==null?t.memoizedProps:null,s=f.children,$h(u,f)?s=null:y!==null&&$h(u,y)&&(n.flags|=32),n.memoizedState!==null&&(u=Hf(t,n,OS,null,null,a),Fs._currentValue=u),Ss(t,n),Mn(t,n,s,a),n.child;case 6:return t===null&&Me&&((t=a=Ke)&&(a=HM(a,n.pendingProps,Ti),a!==null?(n.stateNode=a,An=n,Ke=null,t=!0):t=!1),t||Fa(n)),null;case 13:return E0(t,n,a);case 4:return L(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Ur(n,null,s,a):Mn(t,n,s,a),n.child;case 11:return p0(t,n,n.type,n.pendingProps,a);case 7:return s=n.pendingProps,Ss(t,n),Mn(t,n,s,a),n.child;case 8:return Mn(t,n,n.pendingProps.children,a),n.child;case 12:return Mn(t,n,n.pendingProps.children,a),n.child;case 10:return A0(t,n,a);case 9:return u=n.type._context,s=n.pendingProps.children,Ar(n),u=Dn(u),s=s(u),n.flags|=1,Mn(t,n,s,a),n.child;case 14:return m0(t,n,n.type,n.pendingProps,a);case 15:return g0(t,n,n.type,n.pendingProps,a);case 19:return fh(t,n,a);case 31:return kS(t,n,a);case 22:return v0(t,n,a,n.pendingProps);case 24:return Ar(n),s=Dn(fn),t===null?(u=wf(),u===null&&(u=Ze,f=Rf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},Uf(n),Ha(n,fn,u)):((t.lanes&a)!==0&&(Nf(t,n),Go(n,null,null,a),Ho()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ha(n,fn,s)):(s=f.cache,Ha(n,fn,s),s!==u.cache&&Af(n,[fn],a,!0))),Mn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),s=n.pendingProps,s.name!=null&&s.name!=="auto"?n.flags|=t===null?18882560:18874368:Me&&eu(n),t!==null&&t.memoizedProps.name!==s.name?n.flags|=4194816:Ss(t,n),Mn(t,n,s.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function ya(t){t.flags|=4}function dh(t,n,a,s,u){var f;if((f=(t.mode&32)!==0)&&(f=a===null?n_(n,s):n_(n,s)&&(s.src!==a.src||s.srcSet!==a.srcSet)),f){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(lv())t.flags|=8192;else throw Dr=lu,Df}else t.flags&=-16777217}function C0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!i_(n))if(lv())t.flags|=8192;else throw Dr=lu,Df}function Ru(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Fl():536870912,t.lanes|=n,As|=n)}function Wo(t,n){if(!Me)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&1206910976,s|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function YS(t,n,a){var s=n.pendingProps;switch(Mf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Je(n),null;case 1:return Je(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),ga(fn),A(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ps(n)?ya(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tf())),Je(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(ya(n),f!==null?(Je(n),C0(n,f)):(Je(n),dh(n,u,null,s,a))):f?f!==t.memoizedState?(ya(n),Je(n),C0(n,f)):(Je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&ya(n),Je(n),dh(n,u,t,s,a)),null;case 27:if(vt(n),a=Ue.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ya(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Je(n),n.subtreeFlags&=-33554433,null}t=Ht.current,ps(n)?sg(n):(t=jv(u,s,a),n.stateNode=t,ya(n))}return Je(n),n.subtreeFlags&=-33554433,null;case 5:if(vt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&ya(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Je(n),n.subtreeFlags&=-33554433,null}if(f=Ht.current,ps(n))sg(n);else{var y=al(Ue.current);switch(f){case 1:f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=y.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=y.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=y.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?y.createElement("select",{is:s.is}):y.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?y.createElement(u,{is:s.is}):y.createElement(u)}}f[Pt]=n,f[Qt]=s;t:for(y=n.child;y!==null;){if(y.tag===5||y.tag===6)f.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===n)break t;for(;y.sibling===null;){if(y.return===null||y.return===n)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}n.stateNode=f;t:switch(On(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&ya(n)}}return Je(n),n.subtreeFlags&=-33554433,dh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&ya(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Ue.current,ps(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=An,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[Pt]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Rv(t.nodeValue,a)),t||Fa(n,!0)}else t=al(t).createTextNode(s),t[Pt]=n,n.stateNode=t}return Je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=ps(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[Pt]=n}else Er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),t=!1}else a=Tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(oi(n),n):(oi(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Je(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ps(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[Pt]=n}else Er(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Je(n),u=!1}else u=Tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(oi(n),n):(oi(n),null)}return oi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ru(n,n.updateQueue),Je(n),null);case 4:return A(),t===null&&jh(n.stateNode.containerInfo),n.flags|=67108864,Je(n),null;case 10:return ga(n.type),Je(n),null;case 19:if(Bf(n),s=n.memoizedState,s===null)return Je(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)Wo(s,!1);else{if(on!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=hu(t),f!==null){for(n.flags|=128,Wo(s,!1),t=f.updateQueue,n.updateQueue=t,Ru(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)eg(a,t),a=a.sibling;return Vo(n,Nn.current&1|2),Me&&pa(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&q()>Fu&&(n.flags|=128,u=!0,Wo(s,!1),n.lanes=4194304)}else{if(!u)if(t=hu(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,Ru(n,t),Wo(s,!0),s.tail===null&&s.tailMode!=="collapsed"&&s.tailMode!=="visible"&&!f.alternate&&!Me)return Je(n),null}else 2*q()-s.renderingStartTime>Fu&&a!==536870912&&(n.flags|=128,u=!0,Wo(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}if(s.tail!==null){t=s.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return s.rendering=t,s.tail=t.sibling,s.renderingStartTime=q(),t.sibling=null,f=Nn.current,f=u?f&1|2:f&1,s.tailMode==="visible"||s.tailMode==="collapsed"||!a||Me?Vo(n,f):(a=f,$t(Un,n),$t(Nn,a),Bn===null&&(Bn=n)),Me&&pa(n,s.treeForkCount),t}return Je(n),null;case 22:case 23:return oi(n),zf(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Je(n),n.subtreeFlags&6&&(n.flags|=8192)):Je(n),a=n.updateQueue,a!==null&&Ru(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Ot(Cr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ga(fn),Je(n),null;case 25:return null;case 30:return n.flags|=33554432,Je(n),null}throw Error(r(156,n.tag))}function WS(t,n){switch(Mf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ga(fn),A(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return vt(n),null;case 31:if(n.memoizedState!==null){if(oi(n),n.alternate===null)throw Error(r(340));Er()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(oi(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Er()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Bf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return A(),null;case 10:return ga(n.type),null;case 22:case 23:return oi(n),zf(),t!==null&&Ot(Cr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ga(fn),null;case 25:return null;default:return null}}function w0(t,n){switch(Mf(n),n.tag){case 3:ga(fn),A();break;case 26:case 27:case 5:vt(n);break;case 4:A();break;case 31:n.memoizedState!==null&&oi(n);break;case 13:oi(n);break;case 19:Bf(n);break;case 10:ga(n.type);break;case 22:case 23:oi(n),zf(),t!==null&&Ot(Cr);break;case 24:ga(fn)}}function jo(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,y=a.inst;s=f(),y.destroy=s}a=a.next}while(a!==u)}}catch(T){Ve(n,n.return,T)}}function ja(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var y=s.inst,T=y.destroy;if(T!==void 0){y.destroy=void 0,u=n;var B=a,$=T;try{$()}catch(ot){Ve(u,B,ot)}}}s=s.next}while(s!==f)}}catch(ot){Ve(n,n.return,ot)}}function D0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{xg(n,a)}catch(s){Ve(t,t.return,s)}}}function U0(t,n,a){a.props=Lr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Ve(t,n,s)}}function ji(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:var u=t.stateNode,f=fa(t.memoizedProps,u);(u.ref===null||u.ref.name!==f)&&(u.ref=Bv(f)),s=u.ref;break;case 7:if(t.stateNode===null){var y=new hi(t);g(t.child,!1,IM,y,void 0,void 0),t.stateNode=y}s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(T){Ve(t,n,T)}}function Ln(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Ve(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ve(t,n,u)}else a.current=null}function Cu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)Xv(t.stateNode,n[a])}function N0(t){for(var n=t.return;n!==null&&(mh(n)&&Xv(t.stateNode,n.stateNode),!ph(n));)n=n.return}function Zo(t){for(var n=t.return;n!==null&&(mh(n)&&BM(t.stateNode,n.stateNode),!ph(n));)n=n.return}function ph(t){return t.tag===5||t.tag===3||t.tag===27}function mh(t){return t&&t.tag===7&&t.stateNode!==null}function gh(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Ve(t,t.return,u)}}function vh(t,n,a){try{var s=t.stateNode;xM(s,t.type,a,n),s[Qt]=n}catch(u){Ve(t,t.return,u)}}function L0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&er(t.type)||t.tag===4}function _h(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||L0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&er(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xh(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=qi)),Cu(t,s),Pe=!0;else if(u!==4&&(u===27&&(Cu(t,s),s=null,er(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(xh(t,n,a,s),t=t.sibling;t!==null;)xh(t,n,a,s),t=t.sibling}function wu(t,n,a,s){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Cu(t,s),Pe=!0;else if(u!==4&&(u===27&&(Cu(t,s),s=null,er(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(wu(t,n,a,s),t=t.sibling;t!==null;)wu(t,n,a,s),t=t.sibling}function O0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);On(n,s,a),n[Pt]=t,n[Qt]=a}catch(f){Ve(t,t.return,f)}}var Du=!1,li=null;function P0(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(Du=!0)}var Zi=null;function z0(){var t=Zi;return Zi=null,t}var $n=0;function Ms(t,n,a,s,u){return $n=0,I0(t.child,n,a,s,u)}function I0(t,n,a,s,u){for(var f=!1;t!==null;){if(t.tag===5){var y=t.stateNode;if(s!==null){var T=nd(y);s.push(T),T.view&&(f=!0)}else f||nd(y).view&&(f=!0);Du=!0,zv(y,$n===0?n:n+"_"+$n,a),$n++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||I0(t.child,n,a,s,u)&&(f=!0));t=t.sibling}return f}function Qi(t,n){for(;t!==null;)t.tag===5?Iv(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Qi(t.child,n)),t=t.sibling}function Uu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Uu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(r(544));var a=n.name;n=ha(n.default,n.share),n!=="none"&&(Ms(t,a,n,null,!1)||Qi(t.child,!1))}t=t.sibling}}function yh(t,n){if(t.tag===30){var a=t.stateNode,s=t.memoizedProps,u=fa(s,a),f=ha(s.default,a.paired?s.share:s.enter);f!=="none"?Ms(t,u,f,null,!1)?(Uu(t),a.paired||n||Ds(t,s.onEnter)):Qi(t.child,!1):Uu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)yh(t,n),t=t.sibling;else Uu(t)}function Sh(t){if(li!==null&&li.size!==0){var n=li;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,s=a.name;if(s!=null&&s!=="auto"){var u=n.get(s);if(u!==void 0){var f=ha(a.default,a.share);if(f!=="none"&&(Ms(t,s,f,null,!1)?(f=t.stateNode,u.paired=f,f.paired=u,Ds(t,a.onShare)):Qi(t.child,!1)),n.delete(s),n.size===0)break}}}Sh(t)}t=t.sibling}}}function Mh(t){if(t.tag===30){var n=t.memoizedProps,a=fa(n,t.stateNode),s=li!==null?li.get(a):void 0,u=ha(n.default,s!==void 0?n.share:n.exit);u!=="none"&&(Ms(t,a,u,null,!1)?s!==void 0?(u=t.stateNode,s.paired=u,u.paired=s,li.delete(a),Ds(t,n.onShare)):Ds(t,n.onExit):Qi(t.child,!1)),li!==null&&Sh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Mh(t),t=t.sibling;else li!==null&&Sh(t)}function B0(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=fa(n,t.stateNode);n=ha(n.default,n.update),t.flags&=-5,n!=="none"&&Ms(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&B0(t);t=t.sibling}}function Eh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Qi(t.child,!1))}Eh(t)}t=t.sibling}}function Nu(t){if(t.tag===30)t.stateNode.paired=null,Qi(t.child,!1),Eh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Nu(t),t=t.sibling;else Eh(t)}function F0(t){for(t=t.child;t!==null;)t.tag===30?Qi(t.child,!1):(t.subtreeFlags&33554432)!==0&&F0(t),t=t.sibling}function Th(t,n,a,s,u,f,y){for(var T=!1;n!==null;){if(n.tag===5){var B=n.stateNode;if(f!==null&&$n<f.length){var $=f[$n],ot=nd(B);($.view||ot.view)&&(T=!0);var xt;if(xt=(t.flags&4)===0)if(ot.clip)xt=!0;else{xt=$.rect;var Z=ot.rect;xt=xt.y!==Z.y||xt.x!==Z.x||xt.height!==Z.height||xt.width!==Z.width}xt&&(t.flags|=4),ot.abs?ot=!$.abs:($=$.rect,ot=ot.rect,ot=$.height!==ot.height||$.width!==ot.width),ot&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&zv(B,$n===0?a:a+"_"+$n,u),T&&(t.flags&4)!==0||(Zi===null&&(Zi=[]),Zi.push(B,$n===0?s:s+"_"+$n,n.memoizedProps)),$n++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&y?t.flags|=n.flags&32:Th(t,n.child,a,s,u,f,y)&&(T=!0));n=n.sibling}return T}function H0(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,s=t.stateNode,u=fa(a,s),f=ha(a.default,a.update),y;y=t.memoizedState,t.memoizedState=null,s=t;var T=t.child;$n=0,u=Th(s,T,u,u,f,y,!1),(t.flags&4)!==0&&u&&Ds(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&H0(t);t=t.sibling}}var Rn=!1,He=!1,Ki=!1,bh=!1,G0=typeof WeakSet=="function"?WeakSet:Set,Cn=null,Ji=!1,Qo=!1,Lu=!1,Ah=!1;function jS(t,n,a){if(t=t.containerInfo,Kh=Hs,t=qm(t),hf(t)){if("selectionStart"in t)var s={start:t.selectionStart,end:t.selectionEnd};else t:{s=(s=t.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var f=u.anchorOffset,y=u.focusNode;u=u.focusOffset;try{s.nodeType,y.nodeType}catch{s=null;break t}var T=0,B=-1,$=-1,ot=0,xt=0,Z=t,st=null;e:for(;;){for(var It;Z!==s||f!==0&&Z.nodeType!==3||(B=T+f),Z!==y||u!==0&&Z.nodeType!==3||($=T+u),Z.nodeType===3&&(T+=Z.nodeValue.length),(It=Z.firstChild)!==null;)st=Z,Z=It;for(;;){if(Z===t)break e;if(st===s&&++ot===f&&(B=T),st===y&&++xt===u&&($=T),(It=Z.nextSibling)!==null)break;Z=st,st=Z.parentNode}Z=It}s=B===-1||$===-1?null:{start:B,end:$}}else s=null}s=s||{start:0,end:0}}else s=null;for(Jh={focusedElem:t,selectionRange:s},Hs=!1,a=(a&335544064)===a,Cn=n,n=a?9270:1024;Cn!==null;){if(t=Cn,a&&(s=t.deletions,s!==null))for(f=0;f<s.length;f++)a&&Mh(s[f]);if(t.alternate===null&&(t.flags&2)!==0)a&&P0(t),Ou(a);else{if(t.tag===22){if(s=t.alternate,t.memoizedState!==null){s!==null&&s.memoizedState===null&&a&&Mh(s),Ou(a);continue}else if(s!==null&&s.memoizedState!==null){a&&P0(t),Ou(a);continue}}s=t.child,(t.subtreeFlags&n)!==0&&s!==null?(s.return=t,Cn=s):(a&&B0(t),Ou(a))}}li=null}function Ou(t){for(;Cn!==null;){var n=Cn,a=t,s=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&s!==null){a=void 0,u=s.memoizedProps,s=s.memoizedState;var f=n.stateNode;try{var y=Lr(n.type,u);a=f.getSnapshotBeforeUpdate(y,s),f.__reactInternalSnapshotBeforeUpdate=a}catch(T){Ve(n,n.return,T)}}break;case 3:if((u&1024)!==0){if(s=n.stateNode.containerInfo,a=s.nodeType,a===9)rd(s);else if(a===1)switch(s.nodeName){case"HEAD":case"HTML":case"BODY":rd(s);break;default:s.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&s!==null&&(a=fa(s.memoizedProps,s.stateNode),u=n.memoizedProps,u=ha(u.default,u.update),u!=="none"&&Ms(s,a,u,s.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(r(163))}if(s=n.sibling,s!==null){s.return=n.return,Cn=s;break}Cn=n.return}}function V0(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:$i(t,a),s&4&&jo(5,a);break;case 1:if($i(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(y){Ve(a,a.return,y)}else{var u=Lr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(y){Ve(a,a.return,y)}}s&64&&D0(a),s&512&&ji(a,a.return);break;case 3:if($i(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{xg(t,n)}catch(y){Ve(a,a.return,y)}}break;case 27:n===null&&s&4&&O0(a);case 26:case 5:$i(t,a),n===null&&s&4&&gh(a),s&512&&ji(a,a.return);break;case 12:$i(t,a);break;case 31:$i(t,a),s&4&&Y0(t,a);break;case 13:$i(t,a),s&4&&W0(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=sM.bind(null,a),GM(t,a))));break;case 22:if(s=a.memoizedState!==null||Rn,!s){var f=n!==null&&n.memoizedState!==null||He;n=Rn,u=He,Rn=s,(He=f)&&!u?(s=2,(a.subtreeFlags&8772)!==0&&(s|=1),Li(t,a,s)):$i(t,a),Rn=n,He=u}break;case 30:$i(t,a),s&512&&ji(a,a.return);break;case 7:s&512&&ji(a,a.return);default:$i(t,a)}}function Rh(t,n){for(t=t.child;t!==null;)k0(t,n),t=t.sibling}function k0(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var s=a.style;typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"}else{var u=t.stateNode,f=t.memoizedProps.style,y=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=y==null||typeof y=="boolean"?"":(""+y).trim()}}catch(B){Ve(t,t.return,B)}Ch(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Pe=!0}catch(B){Ve(t,t.return,B)}break;case 18:try{var T=t.stateNode;n?Pv(T,!0):Pv(t.stateNode,!1)}catch(B){Ve(t,t.return,B)}break;case 22:case 23:t.memoizedState===null&&Rh(t,n);break;default:Rh(t,n)}}function Ch(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,s=n;switch(a.tag){case 4:k0(a,s);break t;case 22:a.memoizedState===null&&Ch(a,s);break t;default:Ch(a,s)}}t=t.sibling}}function X0(t){var n=t.alternate;n!==null&&(t.alternate=null,X0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&re(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var tn=null,ti=!1;function Ui(t,n,a){for(a=a.child;a!==null;)q0(t,n,a),a=a.sibling}function q0(t,n,a){if(en&&typeof en.onCommitFiberUnmount=="function")try{en.onCommitFiberUnmount(Ae,a)}catch{}switch(a.tag){case 26:He||Ln(a,n),Ui(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!He&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:He||Ln(a,n),Zo(a);var s=tn,u=ti;er(a.type)&&(tn=a.stateNode,ti=!1),Ui(t,n,a),Zv(a.stateNode,a.type,a.memoizedProps),tn=s,ti=u;break;case 5:He||Ln(a,n),Zo(a);case 6:if(a.tag===6&&Zo(a),s=tn,u=ti,tn=null,Ui(t,n,a),tn=s,ti=u,tn!==null)if(ti)try{(tn.nodeType===9?tn.body:tn.nodeName==="HTML"?tn.ownerDocument.body:tn).removeChild(a.stateNode),Pe=!0}catch(f){Ve(a,n,f)}else try{tn.removeChild(a.stateNode),Pe=!0}catch(f){Ve(a,n,f)}break;case 18:tn!==null&&(ti?(t=tn,Ov(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Gs(t)):Ov(tn,a.stateNode));break;case 4:s=tn,u=ti,tn=a.stateNode.containerInfo,ti=!0,Ui(t,n,a),tn=s,ti=u;break;case 0:case 11:case 14:case 15:ja(2,a,n),He||ja(4,a,n),Ui(t,n,a);break;case 1:He||(Ln(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&U0(a,n,s)),Ui(t,n,a);break;case 21:Ui(t,n,a);break;case 22:He=(s=He)||a.memoizedState!==null,Ui(t,n,a),He=s;break;case 30:Ln(a,n),Ui(t,n,a);break;case 7:He||Ln(a,n),Ui(t,n,a);break;default:Ui(t,n,a)}}function Y0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Gs(t)}catch(a){Ve(n,n.return,a)}}}function W0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Gs(t)}catch(a){Ve(n,n.return,a)}}function ZS(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new G0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new G0),n;default:throw Error(r(435,t.tag))}}function Pu(t,n){var a=ZS(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=oM.bind(null,t,s);s.then(u,u)}})}function Wn(t,n,a){var s=n.deletions;if(s!==null)for(var u=0;u<s.length;u++){var f=s[u],y=t,T=n,B=T;t:for(;B!==null;){switch(B.tag){case 27:if(er(B.type)){tn=B.stateNode,ti=!1;break t}break;case 5:tn=B.stateNode,ti=!1;break t;case 3:case 4:tn=B.stateNode.containerInfo,ti=!0;break t}B=B.return}if(tn===null)throw Error(r(160));q0(y,T,f),tn=null,ti=!1,y=f.alternate,y!==null&&(y.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)j0(n,t,a),n=n.sibling}var Ni=null;function j0(t,n,a){var s=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(s=t.updateQueue,s=s!==null?s.events:null,s!==null))for(var f=0;f<s.length;f++){var y=s[f];y.ref.impl=y.nextImpl}Wn(n,t,a),jn(t),u&4&&(ja(3,t,t.return),jo(3,t),ja(5,t,t.return));break;case 1:Wn(n,t,a),jn(t),u&512&&(He||s===null||Ln(s,s.return)),u&64&&Rn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(f=Ni,Wn(n,t,a),jn(t),u&512&&(He||s===null||Ln(s,s.return)),u&4)if(u=s!==null?s.memoizedState:null,a=t.memoizedState,s===null)if(a===null)if(t.stateNode===null)if(Rn)t.stateNode=Uv(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=f.ownerDocument||f;e:switch(n){case"title":s=u.getElementsByTagName("title")[0],(!s||s[ze]||s[Pt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=u.createElement(n),u.head.insertBefore(s,u.querySelector("head > title"))),On(s,n,a),s[Pt]=t,Oe(s),n=s;break t;case"link":if(f=e_("link","href",u).get(n+(a.href||""))){for(y=0;y<f.length;y++)if(s=f[y],s.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&s.getAttribute("rel")===(a.rel==null?null:a.rel)&&s.getAttribute("title")===(a.title==null?null:a.title)&&s.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){f.splice(y,1);break e}}s=u.createElement(n),On(s,n,a),u.head.appendChild(s);break;case"meta":if(f=e_("meta","content",u).get(n+(a.content||""))){for(y=0;y<f.length;y++)if(s=f[y],s.getAttribute("content")===(a.content==null?null:""+a.content)&&s.getAttribute("name")===(a.name==null?null:a.name)&&s.getAttribute("property")===(a.property==null?null:a.property)&&s.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&s.getAttribute("charset")===(a.charSet==null?null:a.charSet)){f.splice(y,1);break e}}s=u.createElement(n),On(s,n,a),u.head.appendChild(s);break;default:throw Error(r(468,n))}s[Pt]=t,Oe(s),n=s}t.stateNode=n}else Rn||hd(f,t.type,t.stateNode);else t.stateNode=t_(f,a,t.memoizedProps);else u!==a?(u===null?(n=s.stateNode,n===null||He||n.parentNode.removeChild(n)):u.count--,a===null?Rn||hd(f,t.type,t.stateNode):t_(f,a,t.memoizedProps)):a===null&&t.stateNode!==null&&vh(t,t.memoizedProps,s.memoizedProps);break;case 27:Wn(n,t,a),jn(t),u&512&&(He||s===null||Ln(s,s.return)),s!==null&&u&4&&vh(t,t.memoizedProps,s.memoizedProps);break;case 5:if(f=Ki,Ki=!1,Wn(n,t,a),Ki=f,jn(t),u&512&&(He||s===null||Ln(s,s.return)),t.flags&32){n=t.stateNode;try{as(n,""),Pe=!0}catch(ot){Ve(t,t.return,ot)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,vh(t,n,s!==null?s.memoizedProps:n)),u&1024&&(bh=!0);break;case 6:if(Wn(n,t,a),jn(t),u&4){if(t.stateNode===null)throw Error(r(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Pe=!0}catch(ot){Ve(t,t.return,ot)}}break;case 3:if(Pe=!1,Qu=null,f=Ni,Ni=rl(n.containerInfo),Wn(n,t,a),Ni=f,jn(t),u&4&&s!==null&&s.memoizedState.isDehydrated)try{Gs(n.containerInfo)}catch(ot){Ve(t,t.return,ot)}bh&&(bh=!1,Z0(t)),Pe=!1;break;case 4:u=Ki,Ki=Rn,s=mm(),f=Ni,Ni=rl(t.stateNode.containerInfo),Wn(n,t,a),jn(t),Ni=f,Pe&&Qo&&(Lu=!0),Pe=s,Ki=u;break;case 12:Wn(n,t,a),jn(t);break;case 31:Wn(n,t,a),jn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Pu(t,n)));break;case 13:Wn(n,t,a),jn(t),t.child.flags&8192&&t.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Bu=q()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Pu(t,n)));break;case 22:f=t.memoizedState!==null,y=s!==null&&s.memoizedState!==null;var T=Rn,B=He,$=Ki;Rn=T||f,Ki=$||f,He=B||y,Wn(n,t,a),He=B,Ki=$,Rn=T,jn(t),u&8192&&(n=t.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,!f||s===null||y||Rn||He||(n=y||He,a=Rn,s=He,Rn=f||Rn,He=n,Za(t,2),Rn=a,He=s),!f&&Ki||Rh(t,f)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Pu(t,a))));break;case 19:Wn(n,t,a),jn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Pu(t,n)));break;case 30:u&512&&(He||s===null||Ln(s,s.return)),u=mm(),f=Qo,y=(a&335544064)===a,T=t.memoizedProps,Qo=y&&ha(T.default,T.update)!=="none",Wn(n,t,a),jn(t),y&&s!==null&&Pe&&(t.flags|=4),Qo=f,Pe=u;break;case 21:break;case 7:u&512&&(He||s===null||Ln(s,s.return)),s&&s.stateNode!==null&&(s.stateNode._fragmentFiber=t);default:Wn(n,t,a),jn(t)}}function jn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(L0(s)){a=s;break}s=s.return}s=null;for(var u=t.return;u!==null;){if(mh(u)){var f=u.stateNode;s===null?s=[f]:s.push(f)}if(ph(u))break;u=u.return}var y=s;if(a==null)throw Error(r(160));switch(a.tag){case 27:var T=a.stateNode,B=_h(t);wu(t,B,T,y);break;case 5:var $=a.stateNode;a.flags&32&&(as($,""),a.flags&=-33);var ot=_h(t);wu(t,ot,$,y);break;case 3:case 4:var xt=a.stateNode.containerInfo,Z=_h(t);xh(t,Z,xt,y);break;default:throw Error(r(161))}}catch(st){Ve(t,t.return,st)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Z0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Z0(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Hs=!0,n.reset(),Hs=!1),t=t.sibling}}function Es(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Q0(n,t),n=n.sibling;else H0(n)}function Q0(t,n){var a=t.alternate;if(a===null)yh(t,!1);else switch(t.tag){case 3:if(Ah=Ji=!1,z0(),Es(n,t),!Ji&&!Lu){if(t=Zi,t!==null)for(var s=0;s<t.length;s+=3){a=t[s];var u=t[s+1];Iv(a,t[s+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Ah=!0}Zi=null;break;case 5:Es(n,t);break;case 4:s=Ji,Ji=!1,Es(n,t),Ji&&(Lu=!0),Ji=s;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?yh(t,!1):Es(n,t));break;case 30:s=Ji,u=z0(),Ji=!1,Es(n,t),Ji&&(t.flags|=4);var f=t.memoizedProps,y=t.stateNode;n=fa(f,y),y=fa(a.memoizedProps,y);var T=ha(f.default,f.update);T==="none"?n=!1:(f=a.memoizedState,a.memoizedState=null,a=t.child,$n=0,n=Th(t,a,n,y,T,f,!0),$n!==(f===null?0:f.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Ds(t,t.memoizedProps.onUpdate),Zi=u):u!==null&&(u.push.apply(u,Zi),Zi=u),Ji=(t.flags&32)!==0?!0:s;break;default:Es(n,t)}}function $i(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)V0(t,n.alternate,n),n=n.sibling}function Za(t,n){for(t=t.child;t!==null;){var a=t,s=n;switch(a.tag){case 0:case 11:case 14:case 15:ja(4,a,a.return),Za(a,s);break;case 1:Ln(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&U0(a,a.return,u),Za(a,s);break;case 27:(s&2)!==0&&Zv(a.stateNode,a.type,a.memoizedProps);case 5:Ln(a,a.return),a.tag!==5&&a.tag!==27||Zo(a),Za(a,s);break;case 6:Zo(a);break;case 26:Ln(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||He||u.parentNode.removeChild(u),Za(a,s);break;case 22:a.memoizedState===null&&Za(a,s);break;case 30:Ln(a,a.return),Za(a,s);break;case 7:Ln(a,a.return);default:Za(a,s)}t=t.sibling}}function Li(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,y=f.flags,T=(a&1)!==0;switch(f.tag){case 0:case 11:case 15:Li(u,f,a),jo(4,f);break;case 1:if(Li(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ot){Ve(s,s.return,ot)}if(s=f,u=s.updateQueue,u!==null){var B=s.stateNode;try{var $=u.shared.hiddenCallbacks;if($!==null)for(u.shared.hiddenCallbacks=null,u=0;u<$.length;u++)_g($[u],B)}catch(ot){Ve(s,s.return,ot)}}T&&y&64&&D0(f),ji(f,f.return);break;case 27:(a&2)!==0&&O0(f);case 5:f.tag!==5&&f.tag!==27||N0(f),Li(u,f,a),T&&s===null&&y&4&&gh(f),ji(f,f.return);break;case 6:N0(f);break;case 26:B=f.stateNode,f.memoizedState!==null||B===null||Rn||hd(rl(B.ownerDocument),f.type,B),Li(u,f,a),T&&s===null&&y&4&&gh(f),ji(f,f.return);break;case 12:Li(u,f,a);break;case 31:Li(u,f,a),T&&y&4&&Y0(u,f);break;case 13:Li(u,f,a),T&&y&4&&W0(u,f);break;case 22:f.memoizedState===null&&Li(u,f,a),ji(f,f.return);break;case 30:Li(u,f,a),ji(f,f.return);break;case 7:ji(f,f.return);default:Li(u,f,a)}n=n.sibling}}function wh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Po(a))}function Dh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Po(t))}function bi(t,n,a,s){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)K0(t,n,a,s),n=n.sibling;else u&&F0(n)}function K0(t,n,a,s){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Nu(n);var f=n.flags;switch(n.tag){case 0:case 11:case 15:bi(t,n,a,s),f&2048&&jo(9,n);break;case 1:bi(t,n,a,s);break;case 3:bi(t,n,a,s),u&&Ah&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),f&2048&&(f=null,n.alternate!==null&&(f=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==f&&(n.refCount++,f!=null&&Po(f)));break;case 12:if(f&2048){bi(t,n,a,s),f=n.stateNode;try{var y=n.memoizedProps,T=y.id,B=y.onPostCommit;typeof B=="function"&&B(T,n.alternate===null?"mount":"update",f.passiveEffectDuration,-0)}catch($){Ve(n,n.return,$)}}else bi(t,n,a,s);break;case 31:bi(t,n,a,s);break;case 13:bi(t,n,a,s);break;case 23:break;case 22:y=n.stateNode,T=n.alternate,n.memoizedState!==null?(u&&T!==null&&T.memoizedState===null&&Nu(T),y._visibility&2?bi(t,n,a,s):Ko(t,n)):(u&&T!==null&&T.memoizedState!==null&&Nu(n),y._visibility&2?bi(t,n,a,s):(y._visibility|=2,Ts(t,n,a,s,(n.subtreeFlags&10256)!==0||!1))),f&2048&&wh(T,n);break;case 24:bi(t,n,a,s),f&2048&&Dh(n.alternate,n);break;case 30:u&&(f=n.alternate,f!==null&&(Qi(f.child,!0),Qi(n.child,!0))),bi(t,n,a,s);break;default:bi(t,n,a,s)}}function Ts(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,y=n,T=a,B=s,$=y.flags;switch(y.tag){case 0:case 11:case 15:Ts(f,y,T,B,u),jo(8,y);break;case 23:break;case 22:var ot=y.stateNode;y.memoizedState!==null?ot._visibility&2?Ts(f,y,T,B,u):Ko(f,y):(ot._visibility|=2,Ts(f,y,T,B,u)),u&&$&2048&&wh(y.alternate,y);break;case 24:Ts(f,y,T,B,u),u&&$&2048&&Dh(y.alternate,y);break;default:Ts(f,y,T,B,u)}n=n.sibling}}function Ko(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:Ko(a,s),u&2048&&wh(s.alternate,s);break;case 24:Ko(a,s),u&2048&&Dh(s.alternate,s);break;default:Ko(a,s)}n=n.sibling}}var Or=8192;function Pr(t,n,a){if(t.subtreeFlags&Or)for(t=t.child;t!==null;)J0(t,n,a),t=t.sibling}function J0(t,n,a){switch(t.tag){case 26:Pr(t,n,a),t.flags&Or&&(t.memoizedState!==null?eE(a,Ni,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&r_(a,t)));break;case 5:Pr(t,n,a),t.flags&Or&&(t=t.stateNode,(n&335544128)===n&&r_(a,t));break;case 3:case 4:var s=Ni;Ni=rl(t.stateNode.containerInfo),Pr(t,n,a),Ni=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=Or,Or=16777216,Pr(t,n,a),Or=s):Pr(t,n,a));break;case 30:if((t.flags&Or)!==0&&(s=t.memoizedProps.name,s!=null&&s!=="auto")){var u=t.stateNode;u.paired=null,li===null&&(li=new Map),li.set(s,u)}Pr(t,n,a);break;default:Pr(t,n,a)}}function $0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Jo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Cn=s,ev(s,t)}$0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)tv(t),t=t.sibling}function tv(t){switch(t.tag){case 0:case 11:case 15:Jo(t),t.flags&2048&&ja(9,t,t.return);break;case 3:Jo(t);break;case 12:Jo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,zu(t)):Jo(t);break;default:Jo(t)}}function zu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Cn=s,ev(s,t)}$0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ja(8,n,n.return),zu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,zu(n));break;default:zu(n)}t=t.sibling}}function ev(t,n){for(;Cn!==null;){var a=Cn;switch(a.tag){case 0:case 11:case 15:ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Po(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Cn=s;else t:for(a=t;Cn!==null;){s=Cn;var u=s.sibling,f=s.return;if(X0(s),s===a){Cn=null;break t}if(u!==null){u.return=f,Cn=u;break t}Cn=f}}}var QS={getCacheForType:function(t){var n=Dn(fn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Dn(fn).controller.signal}},KS=typeof WeakMap=="function"?WeakMap:Map,Be=0,Ze=null,Te=null,Re=0,Ge=0,ui=null,Qa=!1,bs=!1,Uh=!1,Sa=0,on=0,Ka=0,zr=0,Iu=0,ci=0,As=0,$o=null,ei=null,Nh=!1,Bu=0,nv=0,Fu=1/0,Hu=null,Ja=null,nn=0,Oi=null,Ir=null,ta=0,Lh=0,Oh=null,iv=null,Rs=null,Cs=null,ws=null,tl=0,Gu=null;function fi(){return(Be&2)!==0&&Re!==0?Re&-Re:yt.T!==null?Xh():wt()}function av(){if(ci===0)if((Re&536870912)===0||Me){var t=la;la<<=1,(la&3932160)===0&&(la=262144),ci=t}else ci=536870912;return t=Un.current,t!==null&&(t.flags|=32),ci}function Ds(t,n){if(n!=null){var a=t.stateNode,s=a.ref;s===null&&(s=a.ref=Bv(fa(t.memoizedProps,a))),Cs===null&&(Cs=[]),Cs.push(n.bind(null,s))}}function ni(t,n,a){(t===Ze&&(Ge===2||Ge===9)||t.cancelPendingCommit!==null)&&(Us(t,0),$a(t,Re,ci,!1)),_r(t,a),((Be&2)===0||t!==Ze)&&(t===Ze&&((Be&2)===0&&(zr|=a),on===4&&$a(t,Re,ci,!1)),ea(t))}function rv(t,n,a){if((Be&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||La(t,n),u=s?tM(t,n):zh(t,n,!0),f=s;do{if(u===0){bs&&!s&&$a(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!JS(a)){u=zh(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var y=0;else y=t.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){n=y;t:{var T=t;u=$o;var B=T.current.memoizedState.isDehydrated;if(B&&(Us(T,y).flags|=256),y=zh(T,y,!1),y!==2&&y!==6){if(Uh&&!B){T.errorRecoveryDisabledLanes|=f,zr|=f,u=4;break t}f=ei,ei=u,f!==null&&(ei===null?ei=f:ei.push.apply(ei,f))}u=y}if(f=!1,u!==2)continue}}if(u===1){Us(t,0),$a(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:$a(s,n,ci,!Qa);break t;case 2:ei=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Bu+300-q(),10<u)){if($a(s,n,ci,!Qa),vr(s,0,!0)!==0)break t;ta=n,s.timeoutHandle=ed(sv.bind(null,s,a,ei,Hu,Nh,n,ci,zr,As,Qa,f,"Throttled",-0,0),u);break t}sv(s,a,ei,Hu,Nh,n,ci,zr,As,Qa,f,null,-0,0)}}break}while(!0);ea(t)}function sv(t,n,a,s,u,f,y,T,B,$,ot,xt,Z,st){t.timeoutHandle=-1;var It=n.subtreeFlags,Kt=(f&335544064)===f;if(xt=null,(Kt||It&8192||(It&16785408)===16785408)&&(xt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qi},li=null,J0(n,f,xt),Kt&&(It=xt,Kt=t.containerInfo,Kt=(Kt.nodeType===9?Kt:Kt.ownerDocument).__reactViewTransition,Kt!=null&&(It.count++,It.waitingForViewTransition=!0,It=ll.bind(It),Kt.finished.then(It,It))),It=(f&62914560)===f?Bu-q():(f&4194048)===f?nv-q():0,It=nE(xt,It),It!==null)){ta=f,t.cancelPendingCommit=It(pv.bind(null,t,n,f,a,s,u,y,T,B,$,ot,xt,null,Z,st)),$a(t,f,y,!$);return}pv(t,n,f,a,s,u,y,T,B,$,ot,xt)}function JS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!si(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function $a(t,n,a,s){n=Bl(t,n),n&=~Iu,n&=~zr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-zn(u),y=1<<f;s[f]=-1,u&=~y}a!==0&&D(t,a,n)}function Vu(){return(Be&6)===0?(el(0),!1):!0}function Ph(){if(Te!==null){if(Ge===0)var t=Te.return;else t=Te,ma=Tr=null,kf(t),vs=null,Bo=0,t=Te;for(;t!==null;)w0(t.alternate,t),t=t.return;Te=null}}function Us(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,MM(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),ta=0,Ph(),Ze=t,Te=a=da(t.current,null),Re=n,Ge=0,ui=null,Qa=!1,bs=La(t,n),Uh=!1,As=ci=Iu=zr=Ka=on=0,ei=$o=null,Nh=!1,Sa=Bl(t,n),Ql(),a}function ov(t,n){_e=null,yt.H=Su,n===gs||n===ou?(n=pg(),Ge=3):n===Df?(n=pg(),Ge=4):Ge=n===ah?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ui=n,Te===null&&(on=1,Mu(t,Si(n,t.current)))}function lv(){var t=Un.current;return t===null?!0:(Re&4194048)===Re?Bn===null:(Re&62914560)===Re||(Re&536870912)!==0?t===Bn:!1}function uv(){var t=yt.H;return yt.H=Su,t===null?Su:t}function cv(){var t=yt.A;return yt.A=QS,t}function ku(){on=4,Qa||(Re&4194048)!==Re&&Un.current!==null||(bs=!0),(Ka&134217727)===0&&(zr&134217727)===0||Ze===null||$a(Ze,Re,ci,!1)}function zh(t,n,a){var s=Be;Be|=2;var u=uv(),f=cv();(Ze!==t||Re!==n)&&(Hu=null,Us(t,n)),n=!1;var y=on;t:do try{if(Ge!==0&&Te!==null){var T=Te,B=ui;switch(Ge){case 8:Ph(),y=6;break t;case 3:case 2:case 9:case 6:Un.current===null&&(n=!0);var $=Ge;if(Ge=0,ui=null,Ns(t,T,B,$),a&&bs){y=0;break t}break;default:$=Ge,Ge=0,ui=null,Ns(t,T,B,$)}}$S(),y=on;break}catch(ot){ov(t,ot)}while(!0);return n&&t.shellSuspendCounter++,ma=Tr=null,Be=s,yt.H=u,yt.A=f,Te===null&&(Ze=null,Re=0,Ql()),y}function $S(){for(;Te!==null;)fv(Te)}function tM(t,n){var a=Be;Be|=2;var s=uv(),u=cv();Ze!==t||Re!==n?(Hu=null,Fu=q()+500,Us(t,n)):bs=La(t,n);t:do try{if(Ge!==0&&Te!==null){n=Te;var f=ui;e:switch(Ge){case 1:Ge=0,ui=null,Ns(t,n,f,1);break;case 2:case 9:if(hg(f)){Ge=0,ui=null,hv(n);break}n=function(){Ge!==2&&Ge!==9||Ze!==t||(Ge=7),ea(t)},f.then(n,n);break t;case 3:Ge=7;break t;case 4:Ge=5;break t;case 7:hg(f)?(Ge=0,ui=null,hv(n)):(Ge=0,ui=null,Ns(t,n,f,7));break;case 5:var y=null;switch(Te.tag){case 26:y=Te.memoizedState;case 5:case 27:var T=Te;if(y?i_(y):T.stateNode.complete){Ge=0,ui=null;var B=T.sibling;if(B!==null)Te=B;else{var $=T.return;$!==null?(Te=$,Xu($)):Te=null}break e}}Ge=0,ui=null,Ns(t,n,f,5);break;case 6:Ge=0,ui=null,Ns(t,n,f,6);break;case 8:Ph(),on=6;break t;default:throw Error(r(462))}}eM();break}catch(ot){ov(t,ot)}while(!0);return ma=Tr=null,yt.H=s,yt.A=u,Be=a,Te!==null?0:(Ze=null,Re=0,Ql(),on)}function eM(){for(;Te!==null&&!Gt();)fv(Te)}function fv(t){var n=R0(t.alternate,t,Sa);t.memoizedProps=t.pendingProps,n===null?Xu(t):Te=n}function hv(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=y0(a,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=y0(a,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:kf(n);var s=n;s===An&&(Me?(nu(s),s.tag===5&&s.stateNode!=null&&(Ke=s.stateNode)):(nu(s),Me=!0));default:w0(a,n),n=Te=eg(n,Sa),n=R0(a,n,Sa)}t.memoizedProps=t.pendingProps,n===null?Xu(t):Te=n}function Ns(t,n,a,s){ma=Tr=null,kf(n),vs=null,Bo=0;var u=n.return;try{if(VS(t,u,n,a,Re)){on=1,Mu(t,Si(a,t.current)),Te=null;return}}catch(f){if(u!==null)throw Te=u,f;on=1,Mu(t,Si(a,t.current)),Te=null;return}n.flags&32768?(Me||s===1?t=!0:bs||(Re&536870912)!==0?t=!1:(Qa=t=!0,(s===2||s===9||s===3||s===6)&&(s=Un.current,s!==null&&s.tag===13&&(s.flags|=16384))),dv(n,t)):Xu(n)}function Xu(t){var n=t;do{if((n.flags&32768)!==0){dv(n,Qa);return}t=n.return;var a=YS(n.alternate,n,Sa);if(a!==null){Te=a;return}if(n=n.sibling,n!==null){Te=n;return}Te=n=t}while(n!==null);on===0&&(on=5)}function dv(t,n){do{var a=WS(t.alternate,t);if(a!==null){a.flags&=32767,Te=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){Te=t;return}Te=t=a}while(t!==null);on=6,Te=null}function pv(t,n,a,s,u,f,y,T,B,$,ot,xt){t.cancelPendingCommit=null;do qu();while(nn!==0);if((Be&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));t===Ze&&(Te=Ze=null,Re=0),Ir=n,Oi=t,ta=a,Oh=u,iv=s,nM(t,n,a,y,T,B,xt)}}function nM(t,n,a,s,u,f,y){var T=n.lanes|n.childLanes;if(Lh=T,T|=vf,Wc(t,a,T,s,u,f),Cs=null,(a&335544064)===a?(ws=DS(t),s=10262):(ws=null,s=10256),(n.subtreeFlags&s)!==0||(n.flags&s)!==0?(t.callbackNode=null,t.callbackPriority=0,lM(Ct,function(){return Hh(),null})):(t.callbackNode=null,t.callbackPriority=0),Du=!1,s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=yt.T,yt.T=null,u=Ut.p,Ut.p=2,f=Be,Be|=4;try{jS(t,n,a)}finally{Be=f,Ut.p=u,yt.T=s}}nn=1,Du?Rs=CM(y,t.containerInfo,ws,Ih,Bh,aM,Fh,Hh,iM):(Ih(),Bh(),Fh())}function iM(t){if(nn!==0){var n=Oi.onRecoverableError;n(t,{componentStack:null})}}function aM(){nn===3&&(nn=0,Q0(Ir,Oi),nn=4)}function Ih(){if(nn===1){nn=0;var t=Oi,n=Ir,a=ta,s=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||s){s=yt.T,yt.T=null;var u=Ut.p;Ut.p=2;var f=Be;Be|=4;try{Qo=Lu=!1,j0(n,t,a),a=Jh;var y=qm(t.containerInfo),T=a.focusedElem,B=a.selectionRange;if(y!==T&&T&&T.ownerDocument&&Xm(T.ownerDocument.documentElement,T)){if(B!==null&&hf(T)){var $=B.start,ot=B.end;if(ot===void 0&&(ot=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(ot,T.value.length);else{var xt=T.ownerDocument||document,Z=xt&&xt.defaultView||window;if(Z.getSelection){var st=Z.getSelection(),It=T.textContent.length,Kt=Math.min(B.start,It),xe=B.end===void 0?Kt:Math.min(B.end,It);!st.extend&&Kt>xe&&(y=xe,xe=Kt,Kt=y);var J=km(T,Kt),X=km(T,xe);if(J&&X&&(st.rangeCount!==1||st.anchorNode!==J.node||st.anchorOffset!==J.offset||st.focusNode!==X.node||st.focusOffset!==X.offset)){var it=xt.createRange();it.setStart(J.node,J.offset),st.removeAllRanges(),Kt>xe?(st.addRange(it),st.extend(X.node,X.offset)):(it.setEnd(X.node,X.offset),st.addRange(it))}}}}for(xt=[],st=T;st=st.parentNode;)st.nodeType===1&&xt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<xt.length;T++){var _t=xt[T];_t.element.scrollLeft=_t.left,_t.element.scrollTop=_t.top}}Hs=!!Kh,Jh=Kh=null}finally{Be=f,Ut.p=u,yt.T=s}}t.current=n,nn=2}}function Bh(){if(nn===2){nn=0;var t=Oi,n=Ir,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=yt.T,yt.T=null;var s=Ut.p;Ut.p=2;var u=Be;Be|=4;try{V0(t,n.alternate,n)}finally{Be=u,Ut.p=s,yt.T=a}}nn=3}}function Fh(){if(nn===4||nn===3){nn=0;var t=Rs;Rs=null,ge();var n=Oi,a=Ir,s=ta,u=iv,f=(s&335544064)===s?10262:10256;if((a.subtreeFlags&f)!==0||(a.flags&f)!==0?nn=5:(nn=0,Ir=Oi=null,mv(n,n.pendingLanes)),f=n.pendingLanes,f===0&&(Ja=null),et(s),a=a.stateNode,en&&typeof en.onCommitFiberRoot=="function")try{en.onCommitFiberRoot(Ae,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=yt.T,f=Ut.p,Ut.p=2,yt.T=null;try{for(var y=n.onRecoverableError,T=0;T<u.length;T++){var B=u[T];y(B.value,{componentStack:B.stack})}}finally{yt.T=a,Ut.p=f}}if(u=Cs,y=ws,ws=null,u!==null&&(Cs=null,y===null&&(y=[]),t!==null))for(B=0;B<u.length;B++)a=(0,u[B])(y),a!==void 0&&t.finished.finally(a);(ta&3)!==0&&qu(),ea(n),f=n.pendingLanes,(s&261930)!==0&&(f&42)!==0?n===Gu?tl++:(tl=0,Gu=n):(tl=0,Gu=null),el(0)}}function mv(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Po(n)))}function qu(){return Rs!==null&&(Rs.skipTransition(),Rs=null),Ih(),Bh(),Fh(),Hh()}function Hh(){if(nn!==5)return!1;var t=Oi,n=Lh;Lh=0;var a=et(ta),s=yt.T,u=Ut.p;try{Ut.p=32>a?32:a,yt.T=null,a=Oh,Oh=null;var f=Oi,y=ta;if(nn=0,Ir=Oi=null,ta=0,(Be&6)!==0)throw Error(r(331));var T=Be;if(Be|=4,tv(f.current),K0(f,f.current,y,a),Be=T,el(0,!1),en&&typeof en.onPostCommitFiberRoot=="function")try{en.onPostCommitFiberRoot(Ae,f)}catch{}return!0}finally{Ut.p=u,yt.T=s,mv(t,n)}}function gv(t,n,a){n=Si(a,n),n=ih(t.stateNode,n,2),t=Xa(t,n,2),t!==null&&(_r(t,2),ea(t))}function Ve(t,n,a){if(t.tag===3)gv(t,t,a);else for(;n!==null;){if(n.tag===3){gv(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ja===null||!Ja.has(s))){t=Si(a,t),a=h0(2),s=Xa(n,a,2),s!==null&&(d0(a,s,n,t),_r(s,2),ea(s));break}}n=n.return}}function Gh(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new KS;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(Uh=!0,u.add(a),t=rM.bind(null,t,n,a),n.then(t,t))}function rM(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Ze===t&&(Re&a)===a&&((on===4||on===3&&(Re&62914560)===Re&&300>q()-Bu)&&(Be&2)===0?Us(t,0):Iu|=a,As===Re&&(As=0)),ea(t)}function vv(t,n){n===0&&(n=Fl()),t=Sr(t,n),t!==null&&(_r(t,n),ea(t))}function sM(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),vv(t,a)}function oM(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),vv(t,a)}function lM(t,n){return ie(t,n)}var Ls=null,Os=null,Vh=!1,Yu=!1,kh=!1,tr=0;function ea(t){t!==Os&&t.next===null&&(Os===null?Ls=Os=t:Os=Os.next=t),Yu=!0,Vh||(Vh=!0,cM())}function el(t,n){if(!kh&&Yu){kh=!0;do for(var a=!1,s=Ls;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var y=s.suspendedLanes,T=s.pingedLanes;f=(1<<31-zn(42|t)+1)-1,f&=u&~(y&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Sv(s,f))}else f=Re,f=vr(s,s===Ze?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||La(s,f)||(a=!0,Sv(s,f));s=s.next}while(a);kh=!1}}function uM(){_v()}function _v(){Yu=Vh=!1;var t=0;tr!==0&&SM()&&(t=tr);for(var n=q(),a=null,s=Ls;s!==null;){var u=s.next,f=xv(s,n);f===0?(s.next=null,a===null?Ls=u:a.next=u,u===null&&(Os=a)):(a=s,(t!==0||(f&3)!==0)&&(Yu=!0)),s=u}nn!==0&&nn!==5||el(t),tr!==0&&(tr=0)}function xv(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var y=31-zn(f),T=1<<y,B=u[y];B===-1?((T&a)===0||(T&s)!==0)&&(u[y]=Yc(T,n)):B<=n&&(t.expiredLanes|=T),f&=~T}if(n=Ze,a=Re,a=vr(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(Ge===2||Ge===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&te(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||La(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&te(s),et(a)){case 2:case 8:a=jt;break;case 32:a=Ct;break;case 268435456:a=Jt;break;default:a=Ct}return s=yv.bind(null,t),a=ie(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&te(s),t.callbackPriority=2,t.callbackNode=null,2}function yv(t,n){if(nn!==0&&nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(qu()&&t.callbackNode!==a)return null;var s=Re;return s=vr(t,t===Ze?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(rv(t,s,n),xv(t,q()),t.callbackNode!=null&&t.callbackNode===a?yv.bind(null,t):null)}function Sv(t,n){if(qu())return null;rv(t,n,!0)}function cM(){EM(function(){(Be&6)!==0?ie(zt,uM):_v()})}function Xh(){if(tr===0){var t=Rr;t===0&&(t=mr,mr<<=1,(mr&261888)===0&&(mr=256)),tr=t}return tr}function Mv(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Vl(t)}function fM(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=Mv((u[Qt]||null).action),y=s.submitter;y&&(n=(n=y[Qt]||null)?Mv(n.formAction):y.getAttribute("formAction"),n!==null&&(f=n,y=null));var T=new Yl("action","action",null,s,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(tr!==0){var B=new FormData(u,y);Jf(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=new FormData(u,y),Jf(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var qh=0;qh<gf.length;qh++){var Yh=gf[qh],hM=Yh.toLowerCase(),dM=Yh[0].toUpperCase()+Yh.slice(1);Di(hM,"on"+dM)}Di(jm,"onAnimationEnd"),Di(Zm,"onAnimationIteration"),Di(Qm,"onAnimationStart"),Di("dblclick","onDoubleClick"),Di("focusin","onFocus"),Di("focusout","onBlur"),Di(MS,"onTransitionRun"),Di(ES,"onTransitionStart"),Di(TS,"onTransitionCancel"),Di(Km,"onTransitionEnd"),rn("onMouseEnter",["mouseout","mouseover"]),rn("onMouseLeave",["mouseout","mouseover"]),rn("onPointerEnter",["pointerout","pointerover"]),rn("onPointerLeave",["pointerout","pointerover"]),cn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),cn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),cn("onBeforeInput",["compositionend","keypress","textInput","paste"]),cn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),cn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),cn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var nl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nl));function Ev(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var y=s.length-1;0<=y;y--){var T=s[y],B=T.instance,$=T.currentTarget;if(T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=$;try{f(u)}catch(ot){Zl(ot)}u.currentTarget=null,f=B}else for(y=0;y<s.length;y++){if(T=s[y],B=T.instance,$=T.currentTarget,T=T.listener,B!==f&&u.isPropagationStopped())break t;f=T,u.currentTarget=$;try{f(u)}catch(ot){Zl(ot)}u.currentTarget=null,f=B}}}}function be(t,n){var a=n[ae];a===void 0&&(a=n[ae]=new Set);var s=t+"__bubble";a.has(s)||(Tv(n,t,2,!1),a.add(s))}function Wh(t,n,a){var s=0;n&&(s|=4),Tv(a,t,s,n)}var Wu="_reactListening"+Math.random().toString(36).slice(2);function jh(t){if(!t[Wu]){t[Wu]=!0,Qe.forEach(function(a){a!=="selectionchange"&&(pM.has(a)||Wh(a,!1,t),Wh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Wu]||(n[Wu]=!0,Wh("selectionchange",!1,n))}}function Tv(t,n,a,s){switch(d_(n)){case 2:var u=sE;break;case 8:u=oE;break;default:u=pd}a=u.bind(null,n,a,t),u=void 0,!ef||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Zh(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var y=s.tag;if(y===3||y===4){var T=s.stateNode.containerInfo;if(T===u)break;if(y===4)for(y=s.return;y!==null;){var B=y.tag;if((B===3||B===4)&&y.stateNode.containerInfo===u)return;y=y.return}for(;T!==null;){if(y=Ie(T),y===null)return;if(B=y.tag,B===5||B===6||B===26||B===27){s=f=y;continue t}T=T.parentNode}}s=s.return}Tm(function(){var $=f,ot=$c(a),xt=[];t:{var Z=Jm.get(t);if(Z!==void 0){var st=Yl,It=t;switch(t){case"keypress":if(Xl(a)===0)break t;case"keydown":case"keyup":st=Jy;break;case"focusin":It="focus",st=sf;break;case"focusout":It="blur",st=sf;break;case"beforeblur":case"afterblur":st=sf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=Hy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=iS;break;case jm:case Zm:case Qm:st=ky;break;case Km:st=rS;break;case"scroll":case"scrollend":st=By;break;case"wheel":st=oS;break;case"copy":case"cut":case"paste":st=qy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=wm;break;case"submit":st=eS;break;case"toggle":case"beforetoggle":st=uS}var Kt=(n&4)!==0,xe=!Kt&&(t==="scroll"||t==="scrollend"),J=Kt?Z!==null?Z+"Capture":null:Z;Kt=[];for(var X=$,it;X!==null;){var _t=X;if(it=_t.stateNode,_t=_t.tag,_t!==5&&_t!==26&&_t!==27||it===null||J===null||(_t=To(X,J),_t!=null&&Kt.push(il(X,_t,it))),xe)break;X=X.return}0<Kt.length&&(Z=new st(Z,It,null,a,ot),xt.push({event:Z,listeners:Kt}))}}if((n&7)===0){t:{if(st=t==="mouseover"||t==="pointerover",Z=t==="mouseout"||t==="pointerout",st&&a!==Jc&&(It=a.relatedTarget||a.fromElement)&&(Ie(It)||It[se]))break t;(Z||st)&&(It=ot.window===ot?ot:(st=ot.ownerDocument)?st.defaultView||st.parentWindow:window,Z?(st=a.relatedTarget||a.toElement,Z=$,st=st?Ie(st):null,st!==null&&(xe=c(st),Kt=st.tag,st!==xe||Kt!==5&&Kt!==27&&Kt!==6)&&(st=null)):(Z=null,st=$),Z!==st&&(Kt=Rm,_t="onMouseLeave",J="onMouseEnter",X="mouse",(t==="pointerout"||t==="pointerover")&&(Kt=wm,_t="onPointerLeave",J="onPointerEnter",X="pointer"),xe=Z==null?It:Sn(Z),it=st==null?It:Sn(st),It=new Kt(_t,X+"leave",Z,a,ot),It.target=xe,It.relatedTarget=it,_t=null,Ie(ot)===$&&(Kt=new Kt(J,X+"enter",st,a,ot),Kt.target=it,Kt.relatedTarget=xe,_t=Kt),xe=_t,Kt=Z&&st?z(Z,st,mM):null,Z!==null&&bv(xt,It,Z,Kt,!1),st!==null&&xe!==null&&bv(xt,xe,st,Kt,!0)))}t:{if(Z=$?Sn($):window,st=Z.nodeName&&Z.nodeName.toLowerCase(),st==="select"||st==="input"&&Z.type==="file")var Yt=Im;else if(Pm(Z))if(Bm)Yt=xS;else{Yt=vS;var Ce=gS}else st=Z.nodeName,!st||st.toLowerCase()!=="input"||Z.type!=="checkbox"&&Z.type!=="radio"?$&&Kc($.elementType)&&(Yt=Im):Yt=_S;if(Yt&&(Yt=Yt(t,$))){zm(xt,Yt,a,ot);break t}Ce&&Ce(t,Z,$)}switch(Ce=$?Sn($):window,t){case"focusin":(Pm(Ce)||Ce.contentEditable==="true")&&(ls=Ce,df=$,No=null);break;case"focusout":No=df=ls=null;break;case"mousedown":pf=!0;break;case"contextmenu":case"mouseup":case"dragend":pf=!1,Ym(xt,a,ot);break;case"selectionchange":if(SS)break;case"keydown":case"keyup":Ym(xt,a,ot)}var ne;if(lf)t:{switch(t){case"compositionstart":var ce="onCompositionStart";break t;case"compositionend":ce="onCompositionEnd";break t;case"compositionupdate":ce="onCompositionUpdate";break t}ce=void 0}else os?Lm(t,a)&&(ce="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ce="onCompositionStart");ce&&(Dm&&a.locale!=="ko"&&(os||ce!=="onCompositionStart"?ce==="onCompositionEnd"&&os&&(ne=bm()):(Pa=ot,nf="value"in Pa?Pa.value:Pa.textContent,os=!0)),Ce=ju($,ce),0<Ce.length&&(ce=new Cm(ce,t,null,a,ot),xt.push({event:ce,listeners:Ce}),ne?ce.data=ne:(ne=Om(a),ne!==null&&(ce.data=ne)))),(ne=fS?hS(t,a):dS(t,a))&&(ce=ju($,"onBeforeInput"),0<ce.length&&(Ce=new Cm("onBeforeInput","beforeinput",null,a,ot),xt.push({event:Ce,listeners:ce}),Ce.data=ne)),fM(xt,t,$,a,ot)}Ev(xt,n)})}function il(t,n,a){return{instance:t,listener:n,currentTarget:a}}function ju(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=To(t,a),u!=null&&s.unshift(il(t,u,f)),u=To(t,n),u!=null&&s.push(il(t,u,f))),t.tag===3)return s;t=t.return}return[]}function mM(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function bv(t,n,a,s,u){for(var f=n._reactName,y=[];a!==null&&a!==s;){var T=a,B=T.alternate,$=T.stateNode;if(T=T.tag,B!==null&&B===s)break;T!==5&&T!==26&&T!==27||$===null||(B=$,u?($=To(a,f),$!=null&&y.unshift(il(a,$,B))):u||($=To(a,f),$!=null&&y.push(il(a,$,B)))),a=a.return}y.length!==0&&t.push({event:n,listeners:y})}var gM=/\r\n?/g,vM=/\u0000|\uFFFD/g;function Av(t){return(typeof t=="string"?t:""+t).replace(gM,`
`).replace(vM,"")}function Rv(t,n){return n=Av(n),Av(t)===n}function ke(t,n,a,s,u,f){switch(a){case"children":if(typeof s=="string")n==="body"||n==="textarea"&&s===""||as(t,s);else if(typeof s=="number"||typeof s=="bigint")n!=="body"&&as(t,""+s);else return;break;case"className":Gl(t,"class",s);break;case"tabIndex":Gl(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Gl(t,a,s);break;case"style":Mm(t,s,f);return;case"data":if(n!=="object"){Gl(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Vl(s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&ke(t,n,"name",u.name,u,null),ke(t,n,"formEncType",u.formEncType,u,null),ke(t,n,"formMethod",u.formMethod,u,null),ke(t,n,"formTarget",u.formTarget,u,null)):(ke(t,n,"encType",u.encType,u,null),ke(t,n,"method",u.method,u,null),ke(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Vl(s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=qi);return;case"onScroll":s!=null&&be("scroll",t);return;case"onScrollEnd":s!=null&&be("scrollend",t);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));(f!=null?f.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Vl(s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":be("beforetoggle",t),be("toggle",t),Hl(t,"popover",s);break;case"xlinkActuate":ua(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":ua(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":ua(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":ua(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":ua(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":ua(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":ua(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":ua(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":ua(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":Hl(t,"is",s);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=zy.get(a)||a,Hl(t,a,s);else return}Pe=!0}function Qh(t,n,a,s,u,f){switch(a){case"style":Mm(t,s,f);return;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));(f!=null?f.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof s=="string")as(t,s);else if(typeof s=="number"||typeof s=="bigint")as(t,""+s);else return;break;case"onScroll":s!=null&&be("scroll",t);return;case"onScrollEnd":s!=null&&be("scrollend",t);return;case"onClick":s!=null&&(t.onclick=qi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Xn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),f=a.slice(2,u?a.length-7:void 0),n=t[Qt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(f,n,u),typeof s=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(f,s,u);break t}Pe=!0,a in t?t[a]=s:s===!0?t.setAttribute(a,""):Hl(t,a,s)}return}Pe=!0}function On(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":be("error",t),be("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var y=a[f];if(y!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ke(t,n,f,y,a,null)}}u&&ke(t,n,"srcSet",a.srcSet,a,null),s&&ke(t,n,"src",a.src,a,null);return;case"input":be("invalid",t);var T=f=y=u=null,B=null,$=null;for(s in a)if(a.hasOwnProperty(s)){var ot=a[s];if(ot!=null)switch(s){case"name":u=ot;break;case"type":y=ot;break;case"checked":B=ot;break;case"defaultChecked":$=ot;break;case"value":f=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(r(137,n));break;default:ke(t,n,s,ot,a,null)}}_m(t,f,T,B,$,y,u,!1);return;case"select":be("invalid",t),s=y=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":y=T;break;case"multiple":s=T;default:ke(t,n,u,T,a,null)}n=f,a=y,t.multiple=!!s,n!=null?is(t,!!s,n,!1):a!=null&&is(t,!!s,a,!0);return;case"textarea":be("invalid",t),f=u=s=null;for(y in a)if(a.hasOwnProperty(y)&&(T=a[y],T!=null))switch(y){case"value":s=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:ke(t,n,y,T,a,null)}ym(t,s,u,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(s=a[B],s!=null))switch(B){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:ke(t,n,B,s,a,null)}return;case"dialog":be("beforetoggle",t),be("toggle",t),be("cancel",t),be("close",t);break;case"iframe":case"object":be("load",t);break;case"video":case"audio":for(s=0;s<nl.length;s++)be(nl[s],t);break;case"image":be("error",t),be("load",t);break;case"details":be("toggle",t);break;case"embed":case"source":case"link":be("error",t),be("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(s=a[$],s!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:ke(t,n,$,s,a,null)}return;default:if(Kc(n)){for(ot in a)a.hasOwnProperty(ot)&&(s=a[ot],s!==void 0&&Qh(t,n,ot,s,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(s=a[T],s!=null&&ke(t,n,T,s,a,null))}var _M={};function xM(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,y=null,T=null,B=null,$=null,ot=null;for(st in a){var xt=a[st];if(a.hasOwnProperty(st)&&xt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":B=xt;default:s.hasOwnProperty(st)||ke(t,n,st,null,s,xt)}}for(var Z in s){var st=s[Z];if(xt=a[Z],s.hasOwnProperty(Z)&&(st!=null||xt!=null))switch(Z){case"type":st!==xt&&(Pe=!0),f=st;break;case"name":st!==xt&&(Pe=!0),u=st;break;case"checked":st!==xt&&(Pe=!0),$=st;break;case"defaultChecked":st!==xt&&(Pe=!0),ot=st;break;case"value":st!==xt&&(Pe=!0),y=st;break;case"defaultValue":st!==xt&&(Pe=!0),T=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:st!==xt&&ke(t,n,Z,st,s,xt)}}Zc(t,y,T,B,$,ot,f,u);return;case"select":st=y=T=Z=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":st=B;default:s.hasOwnProperty(f)||ke(t,n,f,null,s,B)}for(u in s)if(f=s[u],B=a[u],s.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":f!==B&&(Pe=!0),Z=f;break;case"defaultValue":f!==B&&(Pe=!0),T=f;break;case"multiple":f!==B&&(Pe=!0),y=f;default:f!==B&&ke(t,n,u,f,s,B)}n=T,a=y,s=st,Z!=null?is(t,!!a,Z,!1):!!s!=!!a&&(n!=null?is(t,!!a,n,!0):is(t,!!a,a?[]:"",!1));return;case"textarea":st=Z=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!s.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:ke(t,n,T,null,s,u)}for(y in s)if(u=s[y],f=a[y],s.hasOwnProperty(y)&&(u!=null||f!=null))switch(y){case"value":u!==f&&(Pe=!0),Z=u;break;case"defaultValue":u!==f&&(Pe=!0),st=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&ke(t,n,y,u,s,f)}xm(t,Z,st);return;case"option":for(var It in a)if(Z=a[It],a.hasOwnProperty(It)&&Z!=null&&!s.hasOwnProperty(It))switch(It){case"selected":t.selected=!1;break;default:ke(t,n,It,null,s,Z)}for(B in s)if(Z=s[B],st=a[B],s.hasOwnProperty(B)&&Z!==st&&(Z!=null||st!=null))switch(B){case"selected":Z!==st&&(Pe=!0),t.selected=Z&&typeof Z!="function"&&typeof Z!="symbol";break;default:ke(t,n,B,Z,s,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Kt in a)Z=a[Kt],a.hasOwnProperty(Kt)&&Z!=null&&!s.hasOwnProperty(Kt)&&ke(t,n,Kt,null,s,Z);for($ in s)if(Z=s[$],st=a[$],s.hasOwnProperty($)&&Z!==st&&(Z!=null||st!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(Z!=null)throw Error(r(137,n));break;default:ke(t,n,$,Z,s,st)}return;default:if(Kc(n)){for(var xe in a)Z=a[xe],a.hasOwnProperty(xe)&&Z!==void 0&&!s.hasOwnProperty(xe)&&Qh(t,n,xe,void 0,s,Z);for(ot in s)Z=s[ot],st=a[ot],!s.hasOwnProperty(ot)||Z===st||Z===void 0&&st===void 0||Qh(t,n,ot,Z,s,st);return}}for(var J in a)Z=a[J],a.hasOwnProperty(J)&&Z!=null&&!s.hasOwnProperty(J)&&ke(t,n,J,null,s,Z);for(xt in s)Z=s[xt],st=a[xt],!s.hasOwnProperty(xt)||Z===st||Z==null&&st==null||ke(t,n,xt,Z,s,st)}function Cv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yM(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,y=u.initiatorType,T=u.duration;if(f&&T&&Cv(y)){for(y=0,T=u.responseEnd,s+=1;s<a.length;s++){var B=a[s],$=B.startTime;if($>T)break;var ot=B.transferSize,xt=B.initiatorType;ot&&Cv(xt)&&(B=B.responseEnd,y+=ot*(B<T?1:(T-$)/(B-$)))}if(--s,n+=8*(f+y)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Kh=null,Jh=null;function al(t){return t.nodeType===9?t:t.ownerDocument}function wv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Uv(t,n,a,s){return a=al(a).createElement(t),a[Pt]=s,a[Qt]=n,On(a,t,n),Oe(a),a}function $h(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var td=null;function SM(){var t=window.event;return t&&t.type==="popstate"?t===td?!1:(td=t,!0):(td=null,!1)}var ed=typeof setTimeout=="function"?setTimeout:void 0,MM=typeof clearTimeout=="function"?clearTimeout:void 0,Nv=typeof Promise=="function"?Promise:void 0,Lv=typeof requestAnimationFrame=="function"?requestAnimationFrame:ed,EM=typeof queueMicrotask=="function"?queueMicrotask:typeof Nv<"u"?function(t){return Nv.resolve(null).then(t).catch(TM)}:ed;function TM(t){setTimeout(function(){throw t})}function er(t){return t==="head"}function Ov(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),Gs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")ud(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,ud(a);for(var f=a.firstChild;f;){var y=f.nextSibling,T=f.nodeName;f[ze]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=y}}else a==="body"&&ud(t.ownerDocument.body);a=u}while(a);Gs(n)}function Pv(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function zv(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var s=1;else for(var u=s=0;u<n.length;u++){var f=n[u];0<f.width&&0<f.height&&s++}s===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function Iv(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function bM(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function nd(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return bM(n,a,t)}function AM(t){return t.documentElement.clientHeight}function RM(t){this.addEventListener("load",t),this.addEventListener("error",t)}function CM(t,n,a,s,u,f,y,T,B){var $=n.nodeType===9?n:n.ownerDocument;try{var ot=$.startViewTransition({update:function(){var Z=$.defaultView,st=Z.navigation&&Z.navigation.transition,It=$.fonts.status;s();var Kt=[];if(It==="loaded"&&(AM($),$.fonts.status==="loading"&&Kt.push($.fonts.ready)),It=Kt.length,t!==null)for(var xe=t.suspenseyImages,J=0,X=0;X<xe.length;X++){var it=xe[X];if(!it.complete){var _t=it.getBoundingClientRect();if(0<_t.bottom&&0<_t.right&&_t.top<Z.innerHeight&&_t.left<Z.innerWidth){if(J+=a_(it),J>Ku){Kt.length=It;break}it=new Promise(RM.bind(it)),Kt.push(it)}}}if(0<Kt.length)return Z=Promise.race([Promise.all(Kt),new Promise(function(Yt){return setTimeout(Yt,500)})]).then(u,u),(st?Promise.allSettled([st.finished,Z]):Z).then(f,f);if(u(),st)return st.finished.then(f,f);f()},types:a});$.__reactViewTransition=ot;var xt=[];return ot.ready.then(function(){for(var Z=$.documentElement.getAnimations({subtree:!0}),st=0;st<Z.length;st++){var It=Z[st],Kt=It.effect,xe=Kt.pseudoElement;if(xe!=null&&xe.startsWith("::view-transition")){xt.push(It),It=Kt.getKeyframes();for(var J=xe=void 0,X=!0,it=0;it<It.length;it++){var _t=It[it],Yt=_t.width;if(xe===void 0)xe=Yt;else if(xe!==Yt){X=!1;break}if(Yt=_t.height,J===void 0)J=Yt;else if(J!==Yt){X=!1;break}delete _t.width,delete _t.height,_t.transform==="none"&&delete _t.transform}X&&xe!==void 0&&J!==void 0&&(Kt.setKeyframes(It),X=getComputedStyle(Kt.target,Kt.pseudoElement),X.width!==xe||X.height!==J)&&(X=It[0],X.width=xe,X.height=J,X=It[It.length-1],X.width=xe,X.height=J,Kt.setKeyframes(It))}}y()},function(Z){$.__reactViewTransition===ot&&($.__reactViewTransition=null);try{if(typeof Z=="object"&&Z!==null)switch(Z.name){case"InvalidStateError":(Z.message==="View transition was skipped because document visibility state is hidden."||Z.message==="Skipping view transition because document visibility state has become hidden."||Z.message==="Skipping view transition because viewport size changed."||Z.message==="Transition was aborted because of invalid state")&&(Z=null)}Z!==null&&B(Z)}finally{s(),u(),y()}}),ot.finished.finally(function(){for(var Z=0;Z<xt.length;Z++)xt[Z].cancel();$.__reactViewTransition===ot&&($.__reactViewTransition=null),T()}),ot}catch{return s(),u(),y(),null}}function Br(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Br.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Br.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),s=[],u=0;u<a.length;u++){var f=a[u].effect;f!==null&&f.target===t&&f.pseudoElement===n&&s.push(a[u])}return s},Br.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function Bv(t){return{name:t,group:new Br("group",t),imagePair:new Br("image-pair",t),old:new Br("old",t),new:new Br("new",t)}}function hi(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}hi.prototype.addEventListener=function(t,n,a){var s=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(s=a.signal||null,s!==null&&s.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var f=this._eventListeners;if(Hv(f,t,n,a)===-1){var y=this,T=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(T=function(B){y.removeEventListener(t,n,a),typeof n=="function"?n.call(this,B):n.handleEvent(B)}),s!==null&&(u=y.removeEventListener.bind(y,t,n,a),s.addEventListener("abort",u,{once:!0}),u=s.removeEventListener.bind(s,"abort",u)),s=Ps(a),f.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:T,cleanup:u}),g(this._fragmentFiber.child,!1,wM,t,T,s)}this._eventListeners=f}};function wM(t,n,a,s){return M(t).addEventListener(n,a,s),!1}hi.prototype.removeEventListener=function(t,n,a){var s=this._eventListeners;if(s!==null&&(n=Hv(s,t,n,a),n!==-1)){var u=s[n];a=u.attachedListener;var f=u.cleanup;u=Ps(u.optionsOrUseCapture),g(this._fragmentFiber.child,!1,DM,t,a,u),s.splice(n,1),f!==null&&f()}};function DM(t,n,a,s){return M(t).removeEventListener(n,a,s),!1}function Ps(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function Fv(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function Hv(t,n,a,s){if(t.length===0)return-1;s=Fv(s);for(var u=0;u<t.length;u++){var f=t[u];if(f.type===n&&f.listener===a&&Fv(f.optionsOrUseCapture)===s)return u}return-1}hi.prototype.dispatchEvent=function(t){var n=x(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var s=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var f=a[u];s.addEventListener(f.type,f.attachedListener,Ps(f.optionsOrUseCapture))}if(n.appendChild(s),t=s.dispatchEvent(t),a)for(u=0;u<a.length;u++)f=a[u],s.removeEventListener(f.type,f.attachedListener,Ps(f.optionsOrUseCapture));return n.removeChild(s),t}return n.dispatchEvent(t)},hi.prototype.focus=function(t){g(this._fragmentFiber.child,!0,Gv,t,void 0,void 0)};function Gv(t,n){return t.tag===6?!1:(t=M(t),VM(t,n))}hi.prototype.focusLast=function(t){var n=[];g(this._fragmentFiber.child,!0,id,n,void 0,void 0);for(var a=n.length-1;0<=a&&!Gv(n[a],t);a--);};function id(t,n){return n.push(t),!1}hi.prototype.blur=function(){var t=x(this._fragmentFiber);t!==null&&(t=M(t),t=al(t).activeElement,t!==null&&g(this._fragmentFiber.child,!1,UM,t,void 0,void 0))};function UM(t,n){return t.tag===6?!1:(t=M(t),t===n||t.contains(n)?(n.blur(),!0):!1)}hi.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),g(this._fragmentFiber.child,!1,NM,t,void 0,void 0)};function NM(t,n){return t.tag===6||(t=M(t),n.observe(t)),!1}hi.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),g(this._fragmentFiber.child,!1,LM,t,void 0,void 0);for(var a=n=0;a<Pi.length;a++){var s=Pi[a];s.fragmentInstance===this&&s.observer===t?t.unobserve(s.instance):Pi[n++]=s}Pi.length=n}};function LM(t,n){return t.tag===6||(t=M(t),n.unobserve(t)),!1}var Pi=[],ad=!1;function OM(t,n,a){Pi.push({fragmentInstance:t,observer:n,instance:a}),ad||(ad=!0,kM(function(){ad=!1;var s=Pi;Pi=[];for(var u=0;u<s.length;u++){var f=s[u];f.observer.unobserve(f.instance)}}))}hi.prototype.getClientRects=function(){var t=[];return g(this._fragmentFiber.child,!1,PM,t,void 0,void 0),t};function PM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=M(t),n.push.apply(n,t.getClientRects());return!1}hi.prototype.getRootNode=function(t){var n=x(this._fragmentFiber);return n===null?this:M(n).getRootNode(t)},hi.prototype.compareDocumentPosition=function(t){var n=x(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,id,a,void 0,void 0);var s=M(n);if(a.length===0){if(a=s,S(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=s=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:s&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=M(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),u=M(a[a.length-1]);var f=S(this._fragmentFiber)?n.parentElement:s;if(f==null)return Node.DOCUMENT_POSITION_DISCONNECTED;s=f.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,f=f.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var y=n.compareDocumentPosition(t),T=u.compareDocumentPosition(t),B=y&Node.DOCUMENT_POSITION_CONTAINED_BY||T&Node.DOCUMENT_POSITION_CONTAINED_BY;return T=s&&f&&y&Node.DOCUMENT_POSITION_FOLLOWING&&T&Node.DOCUMENT_POSITION_PRECEDING,n=s&&n===t||f&&u===t||B||T?Node.DOCUMENT_POSITION_CONTAINED_BY:!s&&n===t||!f&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:y,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||zM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function zM(t,n,a,s,u){var f=Ie(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!f)t:{for(;f!==null;){if(f.tag===7&&(f===n||f.alternate===n)){a=!0;break t}f=f.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(f===null)return f=u.ownerDocument,u===f||u===f.documentElement||u===f.body;t:{for(f=n,n=x(n);f!==null;){if(!(f.tag!==5&&f.tag!==3&&f.tag!==27||f!==n&&f.alternate!==n)){f=!0;break t}f=f.return}f=!1}return f}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!f)&&!(n=f===a)&&(n=z(a,f,I),n===null?n=!1:(g(n,!0,N,f,a),f=v,v=null,n=f!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!f)&&!(n=f===s)&&(n=z(s,f,I),n===null?n=!1:(g(n,!0,C,f,s),f=v,b=v=null,n=f!==null)),n):!1}function Vv(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}hi.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(r(566));var n=[];g(this._fragmentFiber.child,!1,id,n,void 0,void 0);var a=t!==!1;if(n.length===0){var s=E(this._fragmentFiber);if(s=a?s[1]||s[0]||x(this._fragmentFiber):s[0]||s[1],s===null)return;if(s.tag===6){t=M(s),Vv(t,a);return}if(s=M(s),s.nodeType!==9){if(s.nodeType===11){a="host"in s?s.host:null,a!==null&&a.scrollIntoView(t);return}s.scrollIntoView(t)}}for(s=a?n.length-1:0;s!==(a?-1:n.length);){var u=n[s];u.tag===6?(u=M(u),Vv(u,a)):M(u).scrollIntoView(t),s+=a?-1:1}};function IM(t,n){return t=M(t),kv(t,n),!1}function kv(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function Xv(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.addEventListener(u.type,u.attachedListener,Ps(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){for(var y=0,T=0;T<Pi.length;T++){var B=Pi[T];(B.fragmentInstance!==n||B.observer!==f||B.instance!==t)&&(Pi[y++]=B)}Pi.length=y,f.observe(t)}),kv(t,n))}function BM(t,n){var a=n._eventListeners;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s];t.removeEventListener(u.type,u.attachedListener,Ps(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(f){typeof f.rootMargin=="string"?OM(n,f,t):f.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function rd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":rd(a),re(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function FM(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[ze])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=Ai(t.nextSibling),t===null)break}return null}function HM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Ai(t.nextSibling),t===null))return null;return t}function qv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Ai(t.nextSibling),t===null))return null;return t}function sd(t){return t.data==="$?"||t.data==="$~"}function od(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function GM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function Ai(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var ld=null;function Yv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Ai(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Wv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function VM(t,n){function a(){s=!0}if(t.ownerDocument.activeElement===t)return!0;var s=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return s}function kM(t){Lv(function(){Lv(function(n){return t(n)})})}function jv(t,n,a){switch(n=al(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Zv(t,n,a){for(var s in a){var u=a[s];a.hasOwnProperty(s)&&u!=null&&ke(t,n,s,null,_M,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===qi&&(t.onclick=null),re(t)}function ud(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);re(t)}var Ri=new Map,Qv=new Set;function rl(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var Ma=Ut.d;Ut.d={f:XM,r:qM,D:YM,C:WM,L:jM,m:ZM,X:KM,S:QM,M:JM};function XM(){var t=Ma.f(),n=Vu();return t||n}function qM(t){var n=Se(t);n!==null&&n.tag===5&&n.type==="form"?Jg(n):Ma.r(t)}var zs=typeof document>"u"?null:document;function Kv(t,n,a){var s=zs;if(s&&typeof n=="string"&&n){var u=xi(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),Qv.has(u)||(Qv.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),On(n,"link",t),Oe(n),s.head.appendChild(n)))}}function YM(t){Ma.D(t),Kv("dns-prefetch",t,null)}function WM(t,n){Ma.C(t,n),Kv("preconnect",t,n)}function jM(t,n,a){Ma.L(t,n,a);var s=zs;if(s&&t&&n){var u='link[rel="preload"][as="'+xi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+xi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+xi(a.imageSizes)+'"]')):u+='[href="'+xi(t)+'"]';var f=u;switch(n){case"style":f=Is(t);break;case"script":f=Bs(t)}if(!(Ri.has(f)||(t=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Ri.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(sl(f))||n==="script"&&s.querySelector(ol(f))))){var y=s.createElement("link");On(y,"link",t),n==="style"&&(y[Le]=!0,y.onload=y.onerror=function(){Oa(y)}),Oe(y),s.head.appendChild(y)}}}function ZM(t,n){Ma.m(t,n);var a=zs;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+xi(s)+'"][href="'+xi(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Bs(t)}if(!Ri.has(f)&&(t=P({rel:"modulepreload",href:t},n),Ri.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ol(f)))return}s=a.createElement("link"),On(s,"link",t),Oe(s),a.head.appendChild(s)}}}function QM(t,n,a){Ma.S(t,n,a);var s=zs;if(s&&t){var u=ai(s).hoistableStyles,f=Is(t);n=n||"default";var y=u.get(f);if(!y){var T={loading:0,preload:null};if(y=s.querySelector(sl(f)))T.loading=5;else{t=P({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Ri.get(f))&&cd(t,a);var B=y=s.createElement("link");Oe(B),On(B,"link",t),B._p=new Promise(function($,ot){B.onload=$,B.onerror=ot}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Zu(y,n,s)}y={type:"stylesheet",instance:y,count:1,state:T},u.set(f,y)}}}function KM(t,n){Ma.X(t,n);var a=zs;if(a&&t){var s=ai(a).hoistableScripts,u=Bs(t),f=s.get(u);f||(f=a.querySelector(ol(u)),f||(t=P({src:t,async:!0},n),(n=Ri.get(u))&&fd(t,n),f=a.createElement("script"),Oe(f),On(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function JM(t,n){Ma.M(t,n);var a=zs;if(a&&t){var s=ai(a).hoistableScripts,u=Bs(t),f=s.get(u);f||(f=a.querySelector(ol(u)),f||(t=P({src:t,async:!0,type:"module"},n),(n=Ri.get(u))&&fd(t,n),f=a.createElement("script"),Oe(f),On(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function Jv(t,n,a,s){var u=(u=Ue.current)?rl(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Is(a.href),n=ai(u).hoistableStyles,s=n.get(a),s||(s={type:"style",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Is(a.href);var f=ai(u).hoistableStyles,y=f.get(t);if(y||(u=u.ownerDocument||u,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,y),(f=u.querySelector(sl(t)))?f._p||(y.instance=f,y.state.loading=5):(f=Ri.get(t),f||(f={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ri.set(t,f)),$M(u,t,f,y.state))),n&&s===null)throw Error(r(528,""));return y}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Bs(a),n=ai(u).hoistableScripts,s=n.get(a),s||(s={type:"script",instance:null,count:0,state:null},n.set(a,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Is(t){return'href="'+xi(t)+'"'}function sl(t){return'link[rel="stylesheet"]['+t+"]"}function $v(t){return P({},t,{"data-precedence":t.precedence,precedence:null})}function $M(t,n,a,s){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Le]!==!0){s.loading=1;return}}else n=t.createElement("link"),n[Le]=!0,n.onload=n.onerror=Oa.bind(null,n),On(n,"link",a),Oe(n),t.head.appendChild(n);s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2})}function Bs(t){return'[src="'+xi(t)+'"]'}function ol(t){return"script[async]"+t}function t_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+xi(a.href)+'"]');if(s)return n.instance=s,Oe(s),s;var u=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Oe(s),On(s,"style",u),Zu(s,a.precedence,t),n.instance=s;case"stylesheet":u=Is(a.href);var f=t.querySelector(sl(u));if(f)return n.state.loading|=4,n.instance=f,Oe(f),f;s=$v(a),(u=Ri.get(u))&&cd(s,u),f=(t.ownerDocument||t).createElement("link"),Oe(f);var y=f;return y._p=new Promise(function(T,B){y.onload=T,y.onerror=B}),On(f,"link",s),n.state.loading|=4,Zu(f,a.precedence,t),n.instance=f;case"script":return f=Bs(a.src),(u=t.querySelector(ol(f)))?(n.instance=u,Oe(u),u):(s=a,(u=Ri.get(f))&&(s=P({},a),fd(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),Oe(u),On(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Zu(s,a.precedence,t));return n.instance}function Zu(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,y=0;y<s.length;y++){var T=s[y];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function cd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function fd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Qu=null;function e_(t,n,a){if(Qu===null){var s=new Map,u=Qu=new Map;u.set(a,s)}else u=Qu,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[ze]||f[Pt]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var y=f.getAttribute(n)||"";y=t+y;var T=s.get(y);T?T.push(f):s.set(y,[f])}}return s}function hd(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function tE(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function n_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function i_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function a_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function r_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=a_(n),t.suspenseyImages.push(n)),t=iE.bind(t),n.decode().then(t,t))}function eE(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Is(s.href),f=n.querySelector(sl(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=ll.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Oe(f);return}f=n.ownerDocument||n,s=$v(s),(u=Ri.get(u))&&cd(s,u),f=f.createElement("link"),Oe(f);var y=f;y._p=new Promise(function(T,B){y.onload=T,y.onerror=B}),On(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=ll.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ku=0;function nE(t,n){return t.stylesheets&&t.count===0&&$u(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&$u(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Ku===0&&(Ku=62500*yM());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&$u(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Ku?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function s_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)$u(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function ll(){this.count--,s_(this)}function iE(){this.imgCount--,s_(this)}var Ju=null;function $u(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ju=new Map,n.forEach(aE,t),Ju=null,ll.call(t))}function aE(t,n){if(!(n.state.loading&4)){var a=Ju.get(t);if(a)var s=a.get(null);else{a=new Map,Ju.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var y=u[f];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),s=y)}s&&a.set(null,s)}u=n.instance,y=u.getAttribute("data-precedence"),f=a.get(y)||s,f===s&&a.set(null,u),a.set(y,u),this.count++,s=ll.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Fs={$$typeof:at,Provider:null,Consumer:null,_currentValue:O,_currentValue2:O,_threadCount:0};function rE(t,n,a,s,u,f,y,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Eo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Eo(0),this.hiddenUpdates=Eo(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.transitionTypes=null,this.incompleteTransitions=new Map}function o_(t,n,a,s,u,f,y,T,B,$,ot,xt){return t=new rE(t,n,a,y,B,$,ot,xt,T),n=1,f===!0&&(n|=24),f=Jn(3,null,null,n),t.current=f,f.stateNode=t,n=Rf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Uf(f),t}function l_(t){return t?(t=fs,t):fs}function u_(t,n,a,s,u,f){u=l_(u),s.context===null?s.context=u:s.pendingContext=u,s=ka(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Xa(t,s,n),a!==null&&(ni(a,t,n),Fo(a,t,n))}function c_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function dd(t,n){c_(t,n),(t=t.alternate)&&c_(t,n)}function f_(t){if(t.tag===13||t.tag===31){var n=Sr(t,67108864);n!==null&&ni(n,t,67108864),dd(t,67108864)}}function h_(t){if(t.tag===13||t.tag===31){var n=fi();n=ft(n);var a=Sr(t,n);a!==null&&ni(a,t,n),dd(t,n)}}var Hs=!0;function sE(t,n,a,s){var u=yt.T;yt.T=null;var f=Ut.p;try{Ut.p=2,pd(t,n,a,s)}finally{Ut.p=f,yt.T=u}}function oE(t,n,a,s){var u=yt.T;yt.T=null;var f=Ut.p;try{Ut.p=8,pd(t,n,a,s)}finally{Ut.p=f,yt.T=u}}function pd(t,n,a,s){if(Hs){var u=md(s);if(u===null)Zh(t,n,s,tc,a),p_(t,s);else if(uE(u,t,n,a,s))s.stopPropagation();else if(p_(t,s),n&4&&-1<lE.indexOf(t)){for(;u!==null;){var f=Se(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var y=_i(f.pendingLanes);if(y!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;y;){var B=1<<31-zn(y);T.entanglements[1]|=B,y&=~B}ea(f),(Be&6)===0&&(Fu=q()+500,el(0))}}break;case 31:case 13:T=Sr(f,2),T!==null&&ni(T,f,2),Vu(),dd(f,2)}if(f=md(s),f===null&&Zh(t,n,s,tc,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else Zh(t,n,s,null,a)}}function md(t){return t=$c(t),gd(t)}var tc=null;function gd(t){if(tc=null,t=Ie(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return tc=t,null}function d_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nt()){case zt:return 2;case jt:return 8;case Ct:case Mt:return 32;case Jt:return 268435456;default:return 32}default:return 32}}var vd=!1,nr=null,ir=null,ar=null,ul=new Map,cl=new Map,rr=[],lE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function p_(t,n){switch(t){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":ul.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":cl.delete(n.pointerId)}}function fl(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Se(n),n!==null&&f_(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function uE(t,n,a,s,u){switch(n){case"focusin":return nr=fl(nr,t,n,a,s,u),!0;case"dragenter":return ir=fl(ir,t,n,a,s,u),!0;case"mouseover":return ar=fl(ar,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return ul.set(f,fl(ul.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,cl.set(f,fl(cl.get(f)||null,t,n,a,s,u)),!0}return!1}function m_(t){var n=Ie(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Vt(t.priority,function(){h_(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Vt(t.priority,function(){h_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ec(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=md(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Jc=s,a.target.dispatchEvent(s),Jc=null}else return n=Se(a),n!==null&&f_(n),t.blockedOn=a,!1;n.shift()}return!0}function g_(t,n,a){ec(t)&&a.delete(n)}function cE(){vd=!1,nr!==null&&ec(nr)&&(nr=null),ir!==null&&ec(ir)&&(ir=null),ar!==null&&ec(ar)&&(ar=null),ul.forEach(g_),cl.forEach(g_)}function nc(t,n){t.blockedOn===n&&(t.blockedOn=null,vd||(vd=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,cE)))}var ic=null;function v_(t){ic!==t&&(ic=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ic===t&&(ic=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(gd(s||a)===null)continue;break}var f=Se(a);f!==null&&(t.splice(n,3),n-=3,Jf(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function Gs(t){function n(B){return nc(B,t)}nr!==null&&nc(nr,t),ir!==null&&nc(ir,t),ar!==null&&nc(ar,t),ul.forEach(n),cl.forEach(n);for(var a=0;a<rr.length;a++){var s=rr[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<rr.length&&(a=rr[0],a.blockedOn===null);)m_(a),a.blockedOn===null&&rr.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],y=u[Qt]||null;if(typeof f=="function")y||v_(a);else if(y){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,y=f[Qt]||null)T=y.formAction;else if(gd(u)!==null)continue}else T=y.action;typeof T=="function"?a[s+1]=T:(a.splice(s,3),s-=3),v_(a)}}}function __(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(y){return u=y})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function _d(t){this._internalRoot=t}ac.prototype.render=_d.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=fi();u_(a,s,t,n,null,null)},ac.prototype.unmount=_d.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;u_(t.current,2,null,t,null,null),Vu(),n[se]=null}};function ac(t){this._internalRoot=t}ac.prototype.unstable_scheduleHydration=function(t){if(t){var n=wt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<rr.length&&n!==0&&n<rr[a].priority;a++);rr.splice(a,0,t),a===0&&m_(t)}};var x_=e.version;if(x_!=="19.3.1")throw Error(r(527,x_,"19.3.1"));Ut.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?_(t):null,t=t===null?null:t.stateNode,t};var fE={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:yt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{Ae=rc.inject(fE),en=rc}catch{}}return dl.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=l0,f=u0,y=c0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(y=n.onRecoverableError)),n=o_(t,1,!1,null,null,a,s,null,u,f,y,__),t[se]=n.current,jh(t),new _d(n)},dl.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=l0,y=u0,T=c0,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=o_(t,1,!0,n,a??null,s,u,B,f,y,T,__),n.context=l_(null),a=n.current,s=fi(),s=ft(s),u=ka(s),u.callback=null,Xa(a,u,s),a=s,n.current.lanes=a,_r(n,a),ea(n),t[se]=n.current,jh(t),new ac(n)},dl.version="19.3.1",dl}var w_;function EE(){if(w_)return Sd.exports;w_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Sd.exports=ME(),Sd.exports}var TE=EE();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),kx=(...o)=>o.filter((e,i,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var AE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=me.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:h,...d},p)=>me.createElement("svg",{ref:p,...AE,width:e,height:e,stroke:o,strokeWidth:r?Number(i)*24/Number(e):i,className:kx("lucide",l),...d},[...h.map(([m,_])=>me.createElement(m,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=(o,e)=>{const i=me.forwardRef(({className:r,...l},c)=>me.createElement(RE,{ref:c,iconNode:e,className:kx(`lucide-${bE(o)}`,r),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=Kn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=Kn("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=Kn("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=Kn("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=Kn("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=Kn("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=Kn("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=Kn("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=Kn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=Kn("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=Kn("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=Kn("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=Kn("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=Kn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=Kn("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qp="180",BE=0,O_=1,FE=2,Xx=1,HE=2,Ca=3,pr=0,Gn=1,ia=2,Da=0,oo=1,Rl=2,P_=3,z_=4,GE=5,Wr=100,VE=101,kE=102,XE=103,qE=104,YE=200,WE=201,jE=202,ZE=203,rp=204,sp=205,QE=206,KE=207,JE=208,$E=209,t1=210,e1=211,n1=212,i1=213,a1=214,op=0,lp=1,up=2,uo=3,cp=4,fp=5,hp=6,dp=7,qx=0,r1=1,s1=2,Ua=0,Yx=1,Wx=2,jx=3,Kp=4,Zx=5,Qx=6,Kx=7,Jx=300,co=301,fo=302,pp=303,mp=304,Xc=306,gp=1e3,Zr=1001,vp=1002,vi=1003,o1=1004,sc=1005,aa=1006,Ad=1007,Qr=1008,Vi=1009,$x=1010,ty=1011,Cl=1012,Jp=1013,Jr=1014,ra=1015,Gi=1016,$p=1017,tm=1018,wl=1020,ey=35902,ny=35899,iy=1021,ay=1022,Hi=1023,Dl=1026,Ul=1027,em=1028,nm=1029,ry=1030,im=1031,am=1033,Lc=33776,Oc=33777,Pc=33778,zc=33779,_p=35840,xp=35841,yp=35842,Sp=35843,Mp=36196,Ep=37492,Tp=37496,bp=37808,Ap=37809,Rp=37810,Cp=37811,wp=37812,Dp=37813,Up=37814,Np=37815,Lp=37816,Op=37817,Pp=37818,zp=37819,Ip=37820,Bp=37821,Fp=36492,Hp=36494,Gp=36495,Vp=36283,kp=36284,Xp=36285,qp=36286,l1=3200,u1=3201,sy=0,c1=1,dr="",ii="srgb",ho="srgb-linear",Fc="linear",Xe="srgb",Vs=7680,I_=519,f1=512,h1=513,d1=514,oy=515,p1=516,m1=517,g1=518,v1=519,B_=35044,F_="300 es",sa=2e3,Hc=2001;class go{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Fn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let H_=1234567;const bl=Math.PI/180,Nl=180/Math.PI;function vo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Fn[o&255]+Fn[o>>8&255]+Fn[o>>16&255]+Fn[o>>24&255]+"-"+Fn[e&255]+Fn[e>>8&255]+"-"+Fn[e>>16&15|64]+Fn[e>>24&255]+"-"+Fn[i&63|128]+Fn[i>>8&255]+"-"+Fn[i>>16&255]+Fn[i>>24&255]+Fn[r&255]+Fn[r>>8&255]+Fn[r>>16&255]+Fn[r>>24&255]).toLowerCase()}function we(o,e,i){return Math.max(e,Math.min(i,o))}function rm(o,e){return(o%e+e)%e}function _1(o,e,i,r,l){return r+(o-e)*(l-r)/(i-e)}function x1(o,e,i){return o!==e?(i-o)/(e-o):0}function Al(o,e,i){return(1-i)*o+i*e}function y1(o,e,i,r){return Al(o,e,1-Math.exp(-i*r))}function S1(o,e=1){return e-Math.abs(rm(o,e*2)-e)}function M1(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function E1(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function T1(o,e){return o+Math.floor(Math.random()*(e-o+1))}function b1(o,e){return o+Math.random()*(e-o)}function A1(o){return o*(.5-Math.random())}function R1(o){o!==void 0&&(H_=o);let e=H_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function C1(o){return o*bl}function w1(o){return o*Nl}function D1(o){return(o&o-1)===0&&o!==0}function U1(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function N1(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function L1(o,e,i,r,l){const c=Math.cos,h=Math.sin,d=c(i/2),p=h(i/2),m=c((e+r)/2),_=h((e+r)/2),g=c((e-r)/2),x=h((e-r)/2),S=c((r-e)/2),E=h((r-e)/2);switch(l){case"XYX":o.set(d*_,p*g,p*x,d*m);break;case"YZY":o.set(p*x,d*_,p*g,d*m);break;case"ZXZ":o.set(p*g,p*x,d*_,d*m);break;case"XZX":o.set(d*_,p*E,p*S,d*m);break;case"YXY":o.set(p*S,d*_,p*E,d*m);break;case"ZYZ":o.set(p*E,p*S,d*_,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function ao(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Zn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const gn={DEG2RAD:bl,RAD2DEG:Nl,generateUUID:vo,clamp:we,euclideanModulo:rm,mapLinear:_1,inverseLerp:x1,lerp:Al,damp:y1,pingpong:S1,smoothstep:M1,smootherstep:E1,randInt:T1,randFloat:b1,randFloatSpread:A1,seededRandom:R1,degToRad:C1,radToDeg:w1,isPowerOfTwo:D1,ceilPowerOfTwo:U1,floorPowerOfTwo:N1,setQuaternionFromProperEuler:L1,normalize:Zn,denormalize:ao};class he{constructor(e=0,i=0){he.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=we(this.x,e.x,i.x),this.y=we(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=we(this.x,e,i),this.y=we(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(we(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(we(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gi{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let p=r[l+0],m=r[l+1],_=r[l+2],g=r[l+3];const x=c[h+0],S=c[h+1],E=c[h+2],R=c[h+3];if(d===0){e[i+0]=p,e[i+1]=m,e[i+2]=_,e[i+3]=g;return}if(d===1){e[i+0]=x,e[i+1]=S,e[i+2]=E,e[i+3]=R;return}if(g!==R||p!==x||m!==S||_!==E){let M=1-d;const v=p*x+m*S+_*E+g*R,b=v>=0?1:-1,N=1-v*v;if(N>Number.EPSILON){const I=Math.sqrt(N),z=Math.atan2(I,v*b);M=Math.sin(M*z)/I,d=Math.sin(d*z)/I}const C=d*b;if(p=p*M+x*C,m=m*M+S*C,_=_*M+E*C,g=g*M+R*C,M===1-d){const I=1/Math.sqrt(p*p+m*m+_*_+g*g);p*=I,m*=I,_*=I,g*=I}}e[i]=p,e[i+1]=m,e[i+2]=_,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],p=r[l+1],m=r[l+2],_=r[l+3],g=c[h],x=c[h+1],S=c[h+2],E=c[h+3];return e[i]=d*E+_*g+p*S-m*x,e[i+1]=p*E+_*x+m*g-d*S,e[i+2]=m*E+_*S+d*x-p*g,e[i+3]=_*E-d*g-p*x-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(r/2),_=d(l/2),g=d(c/2),x=p(r/2),S=p(l/2),E=p(c/2);switch(h){case"XYZ":this._x=x*_*g+m*S*E,this._y=m*S*g-x*_*E,this._z=m*_*E+x*S*g,this._w=m*_*g-x*S*E;break;case"YXZ":this._x=x*_*g+m*S*E,this._y=m*S*g-x*_*E,this._z=m*_*E-x*S*g,this._w=m*_*g+x*S*E;break;case"ZXY":this._x=x*_*g-m*S*E,this._y=m*S*g+x*_*E,this._z=m*_*E+x*S*g,this._w=m*_*g-x*S*E;break;case"ZYX":this._x=x*_*g-m*S*E,this._y=m*S*g+x*_*E,this._z=m*_*E-x*S*g,this._w=m*_*g+x*S*E;break;case"YZX":this._x=x*_*g+m*S*E,this._y=m*S*g+x*_*E,this._z=m*_*E-x*S*g,this._w=m*_*g-x*S*E;break;case"XZY":this._x=x*_*g-m*S*E,this._y=m*S*g-x*_*E,this._z=m*_*E+x*S*g,this._w=m*_*g+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],m=i[2],_=i[6],g=i[10],x=r+d+g;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(_-p)*S,this._y=(c-m)*S,this._z=(h-l)*S}else if(r>d&&r>g){const S=2*Math.sqrt(1+r-d-g);this._w=(_-p)/S,this._x=.25*S,this._y=(l+h)/S,this._z=(c+m)/S}else if(d>g){const S=2*Math.sqrt(1+d-r-g);this._w=(c-m)/S,this._x=(l+h)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+g-r-d);this._w=(h-l)/S,this._x=(c+m)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(we(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,p=i._y,m=i._z,_=i._w;return this._x=r*_+h*d+l*m-c*p,this._y=l*_+h*p+c*d-r*m,this._z=c*_+h*m+r*p-l*d,this._w=h*_-r*d-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,h=this._w;let d=h*e._w+r*e._x+l*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=r,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const S=1-i;return this._w=S*h+i*this._w,this._x=S*r+i*this._x,this._y=S*l+i*this._y,this._z=S*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),_=Math.atan2(m,d),g=Math.sin((1-i)*_)/m,x=Math.sin(i*_)/m;return this._w=h*g+this._w*x,this._x=r*g+this._x*x,this._y=l*g+this._y*x,this._z=c*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,i=0,r=0){Y.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(G_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(G_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*r),_=2*(d*i-c*l),g=2*(c*r-h*i);return this.x=i+p*m+h*g-d*_,this.y=r+p*_+d*m-c*g,this.z=l+p*g+c*_-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=we(this.x,e.x,i.x),this.y=we(this.y,e.y,i.y),this.z=we(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=we(this.x,e,i),this.y=we(this.y,e,i),this.z=we(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(we(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-r*p,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Rd.copy(this).projectOnVector(e),this.sub(Rd)}reflect(e){return this.sub(Rd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(we(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rd=new Y,G_=new gi;class pe{constructor(e,i,r,l,c,h,d,p,m){pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,p,m)}set(e,i,r,l,c,h,d,p,m){const _=this.elements;return _[0]=e,_[1]=l,_[2]=d,_[3]=i,_[4]=c,_[5]=p,_[6]=r,_[7]=h,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],_=r[4],g=r[7],x=r[2],S=r[5],E=r[8],R=l[0],M=l[3],v=l[6],b=l[1],N=l[4],C=l[7],I=l[2],z=l[5],P=l[8];return c[0]=h*R+d*b+p*I,c[3]=h*M+d*N+p*z,c[6]=h*v+d*C+p*P,c[1]=m*R+_*b+g*I,c[4]=m*M+_*N+g*z,c[7]=m*v+_*C+g*P,c[2]=x*R+S*b+E*I,c[5]=x*M+S*N+E*z,c[8]=x*v+S*C+E*P,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],_=e[8];return i*h*_-i*d*m-r*c*_+r*d*p+l*c*m-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],_=e[8],g=_*h-d*m,x=d*p-_*c,S=m*c-h*p,E=i*g+r*x+l*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=g*R,e[1]=(l*m-_*r)*R,e[2]=(d*r-l*h)*R,e[3]=x*R,e[4]=(_*i-l*p)*R,e[5]=(l*c-d*i)*R,e[6]=S*R,e[7]=(r*p-m*i)*R,e[8]=(h*i-r*c)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Cd.makeScale(e,i)),this}rotate(e){return this.premultiply(Cd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Cd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Cd=new pe;function ly(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Gc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function O1(){const o=Gc("canvas");return o.style.display="block",o}const V_={};function Ll(o){o in V_||(V_[o]=!0,console.warn(o))}function P1(o,e,i){return new Promise(function(r,l){function c(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}const k_=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),X_=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function z1(){const o={enabled:!0,workingColorSpace:ho,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Xe&&(l.r=Na(l.r),l.g=Na(l.g),l.b=Na(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Xe&&(l.r=lo(l.r),l.g=lo(l.g),l.b=lo(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===dr?Fc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Ll("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Ll("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[ho]:{primaries:e,whitePoint:r,transfer:Fc,toXYZ:k_,fromXYZ:X_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:e,whitePoint:r,transfer:Xe,toXYZ:k_,fromXYZ:X_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),o}const Ne=z1();function Na(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function lo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ks;class I1{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ks===void 0&&(ks=Gc("canvas")),ks.width=e.width,ks.height=e.height;const l=ks.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ks}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Gc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Na(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Na(i[r]/255)*255):i[r]=Na(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let B1=0;class sm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=vo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(wd(l[h].image)):c.push(wd(l[h]))}else c=wd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function wd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?I1.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let F1=0;const Dd=new Y;class Vn extends go{constructor(e=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,r=Zr,l=Zr,c=aa,h=Qr,d=Hi,p=Vi,m=Vn.DEFAULT_ANISOTROPY,_=dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:F1++}),this.uuid=vo(),this.name="",this.source=new sm(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new he(0,0),this.repeat=new he(1,1),this.center=new he(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Dd).x}get height(){return this.source.getSize(Dd).y}get depth(){return this.source.getSize(Dd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case gp:e.x=e.x-Math.floor(e.x);break;case Zr:e.x=e.x<0?0:1;break;case vp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case gp:e.y=e.y-Math.floor(e.y);break;case Zr:e.y=e.y<0?0:1;break;case vp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Jx;Vn.DEFAULT_ANISOTROPY=1;class ln{constructor(e=0,i=0,r=0,l=1){ln.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const p=e.elements,m=p[0],_=p[4],g=p[8],x=p[1],S=p[5],E=p[9],R=p[2],M=p[6],v=p[10];if(Math.abs(_-x)<.01&&Math.abs(g-R)<.01&&Math.abs(E-M)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+R)<.1&&Math.abs(E+M)<.1&&Math.abs(m+S+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(m+1)/2,C=(S+1)/2,I=(v+1)/2,z=(_+x)/4,P=(g+R)/4,V=(E+M)/4;return N>C&&N>I?N<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(N),l=z/r,c=P/r):C>I?C<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(C),r=z/l,c=V/l):I<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),r=P/c,l=V/c),this.set(r,l,c,i),this}let b=Math.sqrt((M-E)*(M-E)+(g-R)*(g-R)+(x-_)*(x-_));return Math.abs(b)<.001&&(b=1),this.x=(M-E)/b,this.y=(g-R)/b,this.z=(x-_)/b,this.w=Math.acos((m+S+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=we(this.x,e.x,i.x),this.y=we(this.y,e.y,i.y),this.z=we(this.z,e.z,i.z),this.w=we(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=we(this.x,e,i),this.y=we(this.y,e,i),this.z=we(this.z,e,i),this.w=we(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(we(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class H1 extends go{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:aa,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new ln(0,0,e,i),this.scissorTest=!1,this.viewport=new ln(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Vn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:aa,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new sm(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends H1{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class uy extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class G1 extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=vi,this.minFilter=vi,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $r{constructor(e=new Y(1/0,1/0,1/0),i=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(zi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(zi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=zi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,zi):zi.fromBufferAttribute(c,h),zi.applyMatrix4(e.matrixWorld),this.expandByPoint(zi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),oc.copy(r.boundingBox)),oc.applyMatrix4(e.matrixWorld),this.union(oc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zi),zi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pl),lc.subVectors(this.max,pl),Xs.subVectors(e.a,pl),qs.subVectors(e.b,pl),Ys.subVectors(e.c,pl),or.subVectors(qs,Xs),lr.subVectors(Ys,qs),Fr.subVectors(Xs,Ys);let i=[0,-or.z,or.y,0,-lr.z,lr.y,0,-Fr.z,Fr.y,or.z,0,-or.x,lr.z,0,-lr.x,Fr.z,0,-Fr.x,-or.y,or.x,0,-lr.y,lr.x,0,-Fr.y,Fr.x,0];return!Ud(i,Xs,qs,Ys,lc)||(i=[1,0,0,0,1,0,0,0,1],!Ud(i,Xs,qs,Ys,lc))?!1:(uc.crossVectors(or,lr),i=[uc.x,uc.y,uc.z],Ud(i,Xs,qs,Ys,lc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ea),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ea=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],zi=new Y,oc=new $r,Xs=new Y,qs=new Y,Ys=new Y,or=new Y,lr=new Y,Fr=new Y,pl=new Y,lc=new Y,uc=new Y,Hr=new Y;function Ud(o,e,i,r,l){for(let c=0,h=o.length-3;c<=h;c+=3){Hr.fromArray(o,c);const d=l.x*Math.abs(Hr.x)+l.y*Math.abs(Hr.y)+l.z*Math.abs(Hr.z),p=e.dot(Hr),m=i.dot(Hr),_=r.dot(Hr);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>d)return!1}return!0}const V1=new $r,ml=new Y,Nd=new Y;class ts{constructor(e=new Y,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):V1.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ml.subVectors(e,this.center);const i=ml.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(ml,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ml.copy(e.center).add(Nd)),this.expandByPoint(ml.copy(e.center).sub(Nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Ta=new Y,Ld=new Y,cc=new Y,ur=new Y,Od=new Y,fc=new Y,Pd=new Y;class om{constructor(e=new Y,i=new Y(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ta)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Ta.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Ta.copy(this.origin).addScaledVector(this.direction,i),Ta.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Ld.copy(e).add(i).multiplyScalar(.5),cc.copy(i).sub(e).normalize(),ur.copy(this.origin).sub(Ld);const c=e.distanceTo(i)*.5,h=-this.direction.dot(cc),d=ur.dot(this.direction),p=-ur.dot(cc),m=ur.lengthSq(),_=Math.abs(1-h*h);let g,x,S,E;if(_>0)if(g=h*p-d,x=h*d-p,E=c*_,g>=0)if(x>=-E)if(x<=E){const R=1/_;g*=R,x*=R,S=g*(g+h*x+2*d)+x*(h*g+x+2*p)+m}else x=c,g=Math.max(0,-(h*x+d)),S=-g*g+x*(x+2*p)+m;else x=-c,g=Math.max(0,-(h*x+d)),S=-g*g+x*(x+2*p)+m;else x<=-E?(g=Math.max(0,-(-h*c+d)),x=g>0?-c:Math.min(Math.max(-c,-p),c),S=-g*g+x*(x+2*p)+m):x<=E?(g=0,x=Math.min(Math.max(-c,-p),c),S=x*(x+2*p)+m):(g=Math.max(0,-(h*c+d)),x=g>0?c:Math.min(Math.max(-c,-p),c),S=-g*g+x*(x+2*p)+m);else x=h>0?-c:c,g=Math.max(0,-(h*x+d)),S=-g*g+x*(x+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(Ld).addScaledVector(cc,x),S}intersectSphere(e,i){Ta.subVectors(e.center,this.origin);const r=Ta.dot(this.direction),l=Ta.dot(Ta)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,p;const m=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return m>=0?(r=(e.min.x-x.x)*m,l=(e.max.x-x.x)*m):(r=(e.max.x-x.x)*m,l=(e.min.x-x.x)*m),_>=0?(c=(e.min.y-x.y)*_,h=(e.max.y-x.y)*_):(c=(e.max.y-x.y)*_,h=(e.min.y-x.y)*_),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),g>=0?(d=(e.min.z-x.z)*g,p=(e.max.z-x.z)*g):(d=(e.max.z-x.z)*g,p=(e.min.z-x.z)*g),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Ta)!==null}intersectTriangle(e,i,r,l,c){Od.subVectors(i,e),fc.subVectors(r,e),Pd.crossVectors(Od,fc);let h=this.direction.dot(Pd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;ur.subVectors(this.origin,e);const p=d*this.direction.dot(fc.crossVectors(ur,fc));if(p<0)return null;const m=d*this.direction.dot(Od.cross(ur));if(m<0||p+m>h)return null;const _=-d*ur.dot(Pd);return _<0?null:this.at(_/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qe{constructor(e,i,r,l,c,h,d,p,m,_,g,x,S,E,R,M){qe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,p,m,_,g,x,S,E,R,M)}set(e,i,r,l,c,h,d,p,m,_,g,x,S,E,R,M){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=h,v[9]=d,v[13]=p,v[2]=m,v[6]=_,v[10]=g,v[14]=x,v[3]=S,v[7]=E,v[11]=R,v[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qe().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/Ws.setFromMatrixColumn(e,0).length(),c=1/Ws.setFromMatrixColumn(e,1).length(),h=1/Ws.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),_=Math.cos(c),g=Math.sin(c);if(e.order==="XYZ"){const x=h*_,S=h*g,E=d*_,R=d*g;i[0]=p*_,i[4]=-p*g,i[8]=m,i[1]=S+E*m,i[5]=x-R*m,i[9]=-d*p,i[2]=R-x*m,i[6]=E+S*m,i[10]=h*p}else if(e.order==="YXZ"){const x=p*_,S=p*g,E=m*_,R=m*g;i[0]=x+R*d,i[4]=E*d-S,i[8]=h*m,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=S*d-E,i[6]=R+x*d,i[10]=h*p}else if(e.order==="ZXY"){const x=p*_,S=p*g,E=m*_,R=m*g;i[0]=x-R*d,i[4]=-h*g,i[8]=E+S*d,i[1]=S+E*d,i[5]=h*_,i[9]=R-x*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const x=h*_,S=h*g,E=d*_,R=d*g;i[0]=p*_,i[4]=E*m-S,i[8]=x*m+R,i[1]=p*g,i[5]=R*m+x,i[9]=S*m-E,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const x=h*p,S=h*m,E=d*p,R=d*m;i[0]=p*_,i[4]=R-x*g,i[8]=E*g+S,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-m*_,i[6]=S*g+E,i[10]=x-R*g}else if(e.order==="XZY"){const x=h*p,S=h*m,E=d*p,R=d*m;i[0]=p*_,i[4]=-g,i[8]=m*_,i[1]=x*g+R,i[5]=h*_,i[9]=S*g-E,i[2]=E*g-S,i[6]=d*_,i[10]=R*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(k1,e,X1)}lookAt(e,i,r){const l=this.elements;return di.subVectors(e,i),di.lengthSq()===0&&(di.z=1),di.normalize(),cr.crossVectors(r,di),cr.lengthSq()===0&&(Math.abs(r.z)===1?di.x+=1e-4:di.z+=1e-4,di.normalize(),cr.crossVectors(r,di)),cr.normalize(),hc.crossVectors(di,cr),l[0]=cr.x,l[4]=hc.x,l[8]=di.x,l[1]=cr.y,l[5]=hc.y,l[9]=di.y,l[2]=cr.z,l[6]=hc.z,l[10]=di.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],_=r[1],g=r[5],x=r[9],S=r[13],E=r[2],R=r[6],M=r[10],v=r[14],b=r[3],N=r[7],C=r[11],I=r[15],z=l[0],P=l[4],V=l[8],U=l[12],w=l[1],H=l[5],W=l[9],K=l[13],ht=l[2],at=l[6],F=l[10],nt=l[14],j=l[3],ct=l[7],St=l[11],Et=l[15];return c[0]=h*z+d*w+p*ht+m*j,c[4]=h*P+d*H+p*at+m*ct,c[8]=h*V+d*W+p*F+m*St,c[12]=h*U+d*K+p*nt+m*Et,c[1]=_*z+g*w+x*ht+S*j,c[5]=_*P+g*H+x*at+S*ct,c[9]=_*V+g*W+x*F+S*St,c[13]=_*U+g*K+x*nt+S*Et,c[2]=E*z+R*w+M*ht+v*j,c[6]=E*P+R*H+M*at+v*ct,c[10]=E*V+R*W+M*F+v*St,c[14]=E*U+R*K+M*nt+v*Et,c[3]=b*z+N*w+C*ht+I*j,c[7]=b*P+N*H+C*at+I*ct,c[11]=b*V+N*W+C*F+I*St,c[15]=b*U+N*K+C*nt+I*Et,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],p=e[9],m=e[13],_=e[2],g=e[6],x=e[10],S=e[14],E=e[3],R=e[7],M=e[11],v=e[15];return E*(+c*p*g-l*m*g-c*d*x+r*m*x+l*d*S-r*p*S)+R*(+i*p*S-i*m*x+c*h*x-l*h*S+l*m*_-c*p*_)+M*(+i*m*g-i*d*S-c*h*g+r*h*S+c*d*_-r*m*_)+v*(-l*d*_-i*p*g+i*d*x+l*h*g-r*h*x+r*p*_)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],_=e[8],g=e[9],x=e[10],S=e[11],E=e[12],R=e[13],M=e[14],v=e[15],b=g*M*m-R*x*m+R*p*S-d*M*S-g*p*v+d*x*v,N=E*x*m-_*M*m-E*p*S+h*M*S+_*p*v-h*x*v,C=_*R*m-E*g*m+E*d*S-h*R*S-_*d*v+h*g*v,I=E*g*p-_*R*p-E*d*x+h*R*x+_*d*M-h*g*M,z=i*b+r*N+l*C+c*I;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/z;return e[0]=b*P,e[1]=(R*x*c-g*M*c-R*l*S+r*M*S+g*l*v-r*x*v)*P,e[2]=(d*M*c-R*p*c+R*l*m-r*M*m-d*l*v+r*p*v)*P,e[3]=(g*p*c-d*x*c-g*l*m+r*x*m+d*l*S-r*p*S)*P,e[4]=N*P,e[5]=(_*M*c-E*x*c+E*l*S-i*M*S-_*l*v+i*x*v)*P,e[6]=(E*p*c-h*M*c-E*l*m+i*M*m+h*l*v-i*p*v)*P,e[7]=(h*x*c-_*p*c+_*l*m-i*x*m-h*l*S+i*p*S)*P,e[8]=C*P,e[9]=(E*g*c-_*R*c-E*r*S+i*R*S+_*r*v-i*g*v)*P,e[10]=(h*R*c-E*d*c+E*r*m-i*R*m-h*r*v+i*d*v)*P,e[11]=(_*d*c-h*g*c-_*r*m+i*g*m+h*r*S-i*d*S)*P,e[12]=I*P,e[13]=(_*R*l-E*g*l+E*r*x-i*R*x-_*r*M+i*g*M)*P,e[14]=(E*d*l-h*R*l-E*r*p+i*R*p+h*r*M-i*d*M)*P,e[15]=(h*g*l-_*d*l+_*r*p-i*g*p-h*r*x+i*d*x)*P,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,p=e.z,m=c*h,_=c*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,_*d+r,_*p-l*h,0,m*p-l*d,_*p+l*h,c*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,m=c+c,_=h+h,g=d+d,x=c*m,S=c*_,E=c*g,R=h*_,M=h*g,v=d*g,b=p*m,N=p*_,C=p*g,I=r.x,z=r.y,P=r.z;return l[0]=(1-(R+v))*I,l[1]=(S+C)*I,l[2]=(E-N)*I,l[3]=0,l[4]=(S-C)*z,l[5]=(1-(x+v))*z,l[6]=(M+b)*z,l[7]=0,l[8]=(E+N)*P,l[9]=(M-b)*P,l[10]=(1-(x+R))*P,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=Ws.set(l[0],l[1],l[2]).length();const h=Ws.set(l[4],l[5],l[6]).length(),d=Ws.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],Ii.copy(this);const m=1/c,_=1/h,g=1/d;return Ii.elements[0]*=m,Ii.elements[1]*=m,Ii.elements[2]*=m,Ii.elements[4]*=_,Ii.elements[5]*=_,Ii.elements[6]*=_,Ii.elements[8]*=g,Ii.elements[9]*=g,Ii.elements[10]*=g,i.setFromRotationMatrix(Ii),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=sa,p=!1){const m=this.elements,_=2*c/(i-e),g=2*c/(r-l),x=(i+e)/(i-e),S=(r+l)/(r-l);let E,R;if(p)E=c/(h-c),R=h*c/(h-c);else if(d===sa)E=-(h+c)/(h-c),R=-2*h*c/(h-c);else if(d===Hc)E=-h/(h-c),R=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=x,m[12]=0,m[1]=0,m[5]=g,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=sa,p=!1){const m=this.elements,_=2/(i-e),g=2/(r-l),x=-(i+e)/(i-e),S=-(r+l)/(r-l);let E,R;if(p)E=1/(h-c),R=h/(h-c);else if(d===sa)E=-2/(h-c),R=-(h+c)/(h-c);else if(d===Hc)E=-1/(h-c),R=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=_,m[4]=0,m[8]=0,m[12]=x,m[1]=0,m[5]=g,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=E,m[14]=R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const Ws=new Y,Ii=new qe,k1=new Y(0,0,0),X1=new Y(1,1,1),cr=new Y,hc=new Y,di=new Y,q_=new qe,Y_=new gi;class ki{constructor(e=0,i=0,r=0,l=ki.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],_=l[9],g=l[2],x=l[6],S=l[10];switch(i){case"XYZ":this._y=Math.asin(we(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(x,m),this._z=0);break;case"YXZ":this._x=Math.asin(-we(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(we(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-we(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(we(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-we(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-_,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return q_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(q_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Y_.setFromEuler(this),this.setFromQuaternion(Y_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ki.DEFAULT_ORDER="XYZ";class cy{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let q1=0;const W_=new Y,js=new gi,ba=new qe,dc=new Y,gl=new Y,Y1=new Y,W1=new gi,j_=new Y(1,0,0),Z_=new Y(0,1,0),Q_=new Y(0,0,1),K_={type:"added"},j1={type:"removed"},Zs={type:"childadded",child:null},zd={type:"childremoved",child:null};class _n extends go{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:q1++}),this.uuid=vo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_n.DEFAULT_UP.clone();const e=new Y,i=new ki,r=new gi,l=new Y(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new qe},normalMatrix:{value:new pe}}),this.matrix=new qe,this.matrixWorld=new qe,this.matrixAutoUpdate=_n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cy,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return js.setFromAxisAngle(e,i),this.quaternion.multiply(js),this}rotateOnWorldAxis(e,i){return js.setFromAxisAngle(e,i),this.quaternion.premultiply(js),this}rotateX(e){return this.rotateOnAxis(j_,e)}rotateY(e){return this.rotateOnAxis(Z_,e)}rotateZ(e){return this.rotateOnAxis(Q_,e)}translateOnAxis(e,i){return W_.copy(e).applyQuaternion(this.quaternion),this.position.add(W_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(j_,e)}translateY(e){return this.translateOnAxis(Z_,e)}translateZ(e){return this.translateOnAxis(Q_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ba.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?dc.copy(e):dc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),gl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ba.lookAt(gl,dc,this.up):ba.lookAt(dc,gl,this.up),this.quaternion.setFromRotationMatrix(ba),l&&(ba.extractRotation(l.matrixWorld),js.setFromRotationMatrix(ba),this.quaternion.premultiply(js.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(K_),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(j1),zd.child=e,this.dispatchEvent(zd),zd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ba.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ba.multiply(e.parent.matrixWorld)),e.applyMatrix4(ba),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(K_),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gl,e,Y1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gl,W1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const g=p[m];c(e.shapes,g)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),_=h(e.images),g=h(e.shapes),x=h(e.skeletons),S=h(e.animations),E=h(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const p=[];for(const m in d){const _=d[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}_n.DEFAULT_UP=new Y(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bi=new Y,Aa=new Y,Id=new Y,Ra=new Y,Qs=new Y,Ks=new Y,J_=new Y,Bd=new Y,Fd=new Y,Hd=new Y,Gd=new ln,Vd=new ln,kd=new ln;class Fi{constructor(e=new Y,i=new Y,r=new Y){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Bi.subVectors(e,i),l.cross(Bi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Bi.subVectors(l,i),Aa.subVectors(r,i),Id.subVectors(e,i);const h=Bi.dot(Bi),d=Bi.dot(Aa),p=Bi.dot(Id),m=Aa.dot(Aa),_=Aa.dot(Id),g=h*m-d*d;if(g===0)return c.set(0,0,0),null;const x=1/g,S=(m*p-d*_)*x,E=(h*_-d*p)*x;return c.set(1-S-E,E,S)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(e,i,r,l,c,h,d,p){return this.getBarycoord(e,i,r,l,Ra)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ra.x),p.addScaledVector(h,Ra.y),p.addScaledVector(d,Ra.z),p)}static getInterpolatedAttribute(e,i,r,l,c,h){return Gd.setScalar(0),Vd.setScalar(0),kd.setScalar(0),Gd.fromBufferAttribute(e,i),Vd.fromBufferAttribute(e,r),kd.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Gd,c.x),h.addScaledVector(Vd,c.y),h.addScaledVector(kd,c.z),h}static isFrontFacing(e,i,r,l){return Bi.subVectors(r,i),Aa.subVectors(e,i),Bi.cross(Aa).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),Aa.subVectors(this.a,this.b),Bi.cross(Aa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Fi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Fi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return Fi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return Fi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Fi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;Qs.subVectors(l,r),Ks.subVectors(c,r),Bd.subVectors(e,r);const p=Qs.dot(Bd),m=Ks.dot(Bd);if(p<=0&&m<=0)return i.copy(r);Fd.subVectors(e,l);const _=Qs.dot(Fd),g=Ks.dot(Fd);if(_>=0&&g<=_)return i.copy(l);const x=p*g-_*m;if(x<=0&&p>=0&&_<=0)return h=p/(p-_),i.copy(r).addScaledVector(Qs,h);Hd.subVectors(e,c);const S=Qs.dot(Hd),E=Ks.dot(Hd);if(E>=0&&S<=E)return i.copy(c);const R=S*m-p*E;if(R<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(r).addScaledVector(Ks,d);const M=_*E-S*g;if(M<=0&&g-_>=0&&S-E>=0)return J_.subVectors(c,l),d=(g-_)/(g-_+(S-E)),i.copy(l).addScaledVector(J_,d);const v=1/(M+R+x);return h=R*v,d=x*v,i.copy(r).addScaledVector(Qs,h).addScaledVector(Ks,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const fy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fr={h:0,s:0,l:0},pc={h:0,s:0,l:0};function Xd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class ue{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ne.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Ne.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ne.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Ne.workingColorSpace){if(e=rm(e,1),i=we(i,0,1),r=we(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=Xd(h,c,e+1/3),this.g=Xd(h,c,e),this.b=Xd(h,c,e-1/3)}return Ne.colorSpaceToWorking(this,l),this}setStyle(e,i=ii){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ii){const r=fy[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Na(e.r),this.g=Na(e.g),this.b=Na(e.b),this}copyLinearToSRGB(e){return this.r=lo(e.r),this.g=lo(e.g),this.b=lo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return Ne.workingToColorSpace(Hn.copy(this),e),Math.round(we(Hn.r*255,0,255))*65536+Math.round(we(Hn.g*255,0,255))*256+Math.round(we(Hn.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ne.workingColorSpace){Ne.workingToColorSpace(Hn.copy(this),i);const r=Hn.r,l=Hn.g,c=Hn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let p,m;const _=(d+h)/2;if(d===h)p=0,m=0;else{const g=h-d;switch(m=_<=.5?g/(h+d):g/(2-h-d),h){case r:p=(l-c)/g+(l<c?6:0);break;case l:p=(c-r)/g+2;break;case c:p=(r-l)/g+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,i=Ne.workingColorSpace){return Ne.workingToColorSpace(Hn.copy(this),i),e.r=Hn.r,e.g=Hn.g,e.b=Hn.b,e}getStyle(e=ii){Ne.workingToColorSpace(Hn.copy(this),e);const i=Hn.r,r=Hn.g,l=Hn.b;return e!==ii?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(fr),this.setHSL(fr.h+e,fr.s+i,fr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(fr),e.getHSL(pc);const r=Al(fr.h,pc.h,i),l=Al(fr.s,pc.s,i),c=Al(fr.l,pc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Hn=new ue;ue.NAMES=fy;let Z1=0;class es extends go{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=vo(),this.name="",this.type="Material",this.blending=oo,this.side=pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=rp,this.blendDst=sp,this.blendEquation=Wr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=uo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=I_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Vs,this.stencilZFail=Vs,this.stencilZPass=Vs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==oo&&(r.blending=this.blending),this.side!==pr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==rp&&(r.blendSrc=this.blendSrc),this.blendDst!==sp&&(r.blendDst=this.blendDst),this.blendEquation!==Wr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==uo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==I_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Vs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Vs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Vs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ol extends es{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.combine=qx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mn=new Y,mc=new he;let Q1=0;class En{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Q1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=B_,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)mc.fromBufferAttribute(this,i),mc.applyMatrix3(e),this.setXY(i,mc.x,mc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix3(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyMatrix4(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.applyNormalMatrix(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)mn.fromBufferAttribute(this,i),mn.transformDirection(e),this.setXYZ(i,mn.x,mn.y,mn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=ao(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Zn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ao(i,this.array)),i}setX(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ao(i,this.array)),i}setY(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ao(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ao(i,this.array)),i}setW(e,i){return this.normalized&&(i=Zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array),l=Zn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Zn(i,this.array),r=Zn(r,this.array),l=Zn(l,this.array),c=Zn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==B_&&(e.usage=this.usage),e}}class hy extends En{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class dy extends En{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class xn extends En{constructor(e,i,r){super(new Float32Array(e),i,r)}}let K1=0;const Ci=new qe,qd=new _n,Js=new Y,pi=new $r,vl=new $r,wn=new Y;class kn extends go{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=vo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ly(e)?dy:hy)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new pe().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ci.makeRotationFromQuaternion(e),this.applyMatrix4(Ci),this}rotateX(e){return Ci.makeRotationX(e),this.applyMatrix4(Ci),this}rotateY(e){return Ci.makeRotationY(e),this.applyMatrix4(Ci),this}rotateZ(e){return Ci.makeRotationZ(e),this.applyMatrix4(Ci),this}translate(e,i,r){return Ci.makeTranslation(e,i,r),this.applyMatrix4(Ci),this}scale(e,i,r){return Ci.makeScale(e,i,r),this.applyMatrix4(Ci),this}lookAt(e){return qd.lookAt(e),qd.updateMatrix(),this.applyMatrix4(qd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new xn(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $r);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];pi.setFromBufferAttribute(c),this.morphTargetsRelative?(wn.addVectors(this.boundingBox.min,pi.min),this.boundingBox.expandByPoint(wn),wn.addVectors(this.boundingBox.max,pi.max),this.boundingBox.expandByPoint(wn)):(this.boundingBox.expandByPoint(pi.min),this.boundingBox.expandByPoint(pi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ts);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(e){const r=this.boundingSphere.center;if(pi.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];vl.setFromBufferAttribute(d),this.morphTargetsRelative?(wn.addVectors(pi.min,vl.min),pi.expandByPoint(wn),wn.addVectors(pi.max,vl.max),pi.expandByPoint(wn)):(pi.expandByPoint(vl.min),pi.expandByPoint(vl.max))}pi.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)wn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(wn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,_=d.count;m<_;m++)wn.fromBufferAttribute(d,m),p&&(Js.fromBufferAttribute(e,m),wn.add(Js)),l=Math.max(l,r.distanceToSquared(wn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new En(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let V=0;V<r.count;V++)d[V]=new Y,p[V]=new Y;const m=new Y,_=new Y,g=new Y,x=new he,S=new he,E=new he,R=new Y,M=new Y;function v(V,U,w){m.fromBufferAttribute(r,V),_.fromBufferAttribute(r,U),g.fromBufferAttribute(r,w),x.fromBufferAttribute(c,V),S.fromBufferAttribute(c,U),E.fromBufferAttribute(c,w),_.sub(m),g.sub(m),S.sub(x),E.sub(x);const H=1/(S.x*E.y-E.x*S.y);isFinite(H)&&(R.copy(_).multiplyScalar(E.y).addScaledVector(g,-S.y).multiplyScalar(H),M.copy(g).multiplyScalar(S.x).addScaledVector(_,-E.x).multiplyScalar(H),d[V].add(R),d[U].add(R),d[w].add(R),p[V].add(M),p[U].add(M),p[w].add(M))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let V=0,U=b.length;V<U;++V){const w=b[V],H=w.start,W=w.count;for(let K=H,ht=H+W;K<ht;K+=3)v(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const N=new Y,C=new Y,I=new Y,z=new Y;function P(V){I.fromBufferAttribute(l,V),z.copy(I);const U=d[V];N.copy(U),N.sub(I.multiplyScalar(I.dot(U))).normalize(),C.crossVectors(z,U);const H=C.dot(p[V])<0?-1:1;h.setXYZW(V,N.x,N.y,N.z,H)}for(let V=0,U=b.length;V<U;++V){const w=b[V],H=w.start,W=w.count;for(let K=H,ht=H+W;K<ht;K+=3)P(e.getX(K+0)),P(e.getX(K+1)),P(e.getX(K+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new En(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const l=new Y,c=new Y,h=new Y,d=new Y,p=new Y,m=new Y,_=new Y,g=new Y;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),R=e.getX(x+1),M=e.getX(x+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,M),d.add(_),p.add(_),m.add(_),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let x=0,S=i.count;x<S;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,c),g.subVectors(l,c),_.cross(g),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)wn.fromBufferAttribute(e,i),wn.normalize(),e.setXYZ(i,wn.x,wn.y,wn.z)}toNonIndexed(){function e(d,p){const m=d.array,_=d.itemSize,g=d.normalized,x=new m.constructor(p.length*_);let S=0,E=0;for(let R=0,M=p.length;R<M;R++){d.isInterleavedBufferAttribute?S=p[R]*d.data.stride+d.offset:S=p[R]*_;for(let v=0;v<_;v++)x[E++]=m[S++]}return new En(x,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new kn,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,r);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let _=0,g=m.length;_<g;_++){const x=m[_],S=e(x,r);p.push(S)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let g=0,x=m.length;g<x;g++){const S=m[g];_.push(S.toJSON(e.data))}_.length>0&&(l[p]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(i))}const c=e.morphAttributes;for(const m in c){const _=[],g=c[m];for(let x=0,S=g.length;x<S;x++)_.push(g[x].clone(i));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,_=h.length;m<_;m++){const g=h[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $_=new qe,Gr=new om,gc=new ts,tx=new Y,vc=new Y,_c=new Y,xc=new Y,Yd=new Y,yc=new Y,ex=new Y,Sc=new Y;class vn extends _n{constructor(e=new kn,i=new Ol){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){yc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=d[p],g=c[p];_!==0&&(Yd.fromBufferAttribute(g,e),h?yc.addScaledVector(Yd,_):yc.addScaledVector(Yd.sub(i),_))}i.add(yc)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),gc.copy(r.boundingSphere),gc.applyMatrix4(c),Gr.copy(e.ray).recast(e.near),!(gc.containsPoint(Gr.origin)===!1&&(Gr.intersectSphere(gc,tx)===null||Gr.origin.distanceToSquared(tx)>(e.far-e.near)**2))&&($_.copy(c).invert(),Gr.copy(e.ray).applyMatrix4($_),!(r.boundingBox!==null&&Gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,Gr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,g=c.attributes.normal,x=c.groups,S=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,R=x.length;E<R;E++){const M=x[E],v=h[M.materialIndex],b=Math.max(M.start,S.start),N=Math.min(d.count,Math.min(M.start+M.count,S.start+S.count));for(let C=b,I=N;C<I;C+=3){const z=d.getX(C),P=d.getX(C+1),V=d.getX(C+2);l=Mc(this,v,e,r,m,_,g,z,P,V),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),R=Math.min(d.count,S.start+S.count);for(let M=E,v=R;M<v;M+=3){const b=d.getX(M),N=d.getX(M+1),C=d.getX(M+2);l=Mc(this,h,e,r,m,_,g,b,N,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,R=x.length;E<R;E++){const M=x[E],v=h[M.materialIndex],b=Math.max(M.start,S.start),N=Math.min(p.count,Math.min(M.start+M.count,S.start+S.count));for(let C=b,I=N;C<I;C+=3){const z=C,P=C+1,V=C+2;l=Mc(this,v,e,r,m,_,g,z,P,V),l&&(l.faceIndex=Math.floor(C/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,S.start),R=Math.min(p.count,S.start+S.count);for(let M=E,v=R;M<v;M+=3){const b=M,N=M+1,C=M+2;l=Mc(this,h,e,r,m,_,g,b,N,C),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function J1(o,e,i,r,l,c,h,d){let p;if(e.side===Gn?p=r.intersectTriangle(h,c,l,!0,d):p=r.intersectTriangle(l,c,h,e.side===pr,d),p===null)return null;Sc.copy(d),Sc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Sc);return m<i.near||m>i.far?null:{distance:m,point:Sc.clone(),object:o}}function Mc(o,e,i,r,l,c,h,d,p,m){o.getVertexPosition(d,vc),o.getVertexPosition(p,_c),o.getVertexPosition(m,xc);const _=J1(o,e,i,r,vc,_c,xc,ex);if(_){const g=new Y;Fi.getBarycoord(ex,vc,_c,xc,g),l&&(_.uv=Fi.getInterpolatedAttribute(l,d,p,m,g,new he)),c&&(_.uv1=Fi.getInterpolatedAttribute(c,d,p,m,g,new he)),h&&(_.normal=Fi.getInterpolatedAttribute(h,d,p,m,g,new Y),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:p,c:m,normal:new Y,materialIndex:0};Fi.getNormal(vc,_c,xc,x.normal),_.face=x,_.barycoord=g}return _}class _o extends kn{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],m=[],_=[],g=[];let x=0,S=0;E("z","y","x",-1,-1,r,i,e,h,c,0),E("z","y","x",1,-1,r,i,-e,h,c,1),E("x","z","y",1,1,e,r,i,l,h,2),E("x","z","y",1,-1,e,r,-i,l,h,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new xn(m,3)),this.setAttribute("normal",new xn(_,3)),this.setAttribute("uv",new xn(g,2));function E(R,M,v,b,N,C,I,z,P,V,U){const w=C/P,H=I/V,W=C/2,K=I/2,ht=z/2,at=P+1,F=V+1;let nt=0,j=0;const ct=new Y;for(let St=0;St<F;St++){const Et=St*H-K;for(let Ft=0;Ft<at;Ft++){const oe=Ft*w-W;ct[R]=oe*b,ct[M]=Et*N,ct[v]=ht,m.push(ct.x,ct.y,ct.z),ct[R]=0,ct[M]=0,ct[v]=z>0?1:-1,_.push(ct.x,ct.y,ct.z),g.push(Ft/P),g.push(1-St/V),nt+=1}}for(let St=0;St<V;St++)for(let Et=0;Et<P;Et++){const Ft=x+Et+at*St,oe=x+Et+at*(St+1),G=x+(Et+1)+at*(St+1),dt=x+(Et+1)+at*St;p.push(Ft,oe,dt),p.push(oe,G,dt),j+=6}d.addGroup(S,j,U),S+=j,x+=nt}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function po(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Qn(o){const e={};for(let i=0;i<o.length;i++){const r=po(o[i]);for(const l in r)e[l]=r[l]}return e}function $1(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function py(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ne.workingColorSpace}const Pl={clone:po,merge:Qn};var tT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,eT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends es{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tT,this.fragmentShader=eT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=po(e.uniforms),this.uniformsGroups=$1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class my extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qe,this.projectionMatrix=new qe,this.projectionMatrixInverse=new qe,this.coordinateSystem=sa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hr=new Y,nx=new he,ix=new he;class mi extends my{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Nl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Nl*2*Math.atan(Math.tan(bl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,i){return this.getViewBounds(e,nx,ix),i.subVectors(ix,nx)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(bl*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const $s=-90,to=1;class nT extends _n{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new mi($s,to,e,i);l.layers=this.layers,this.add(l);const c=new mi($s,to,e,i);c.layers=this.layers,this.add(c);const h=new mi($s,to,e,i);h.layers=this.layers,this.add(h);const d=new mi($s,to,e,i);d.layers=this.layers,this.add(d);const p=new mi($s,to,e,i);p.layers=this.layers,this.add(p);const m=new mi($s,to,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,p]=i;for(const m of i)this.remove(m);if(e===sa)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Hc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,m,_]=this.children,g=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,_),e.setRenderTarget(g,x,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class gy extends Vn{constructor(e=[],i=co,r,l,c,h,d,p,m,_){super(e,i,r,l,c,h,d,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iT extends wi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new gy(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new _o(5,5,5),c=new an({name:"CubemapFromEquirect",uniforms:po(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:Da});c.uniforms.tEquirect.value=i;const h=new vn(l,c),d=i.minFilter;return i.minFilter===Qr&&(i.minFilter=aa),new nT(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class Kr extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}}const aT={type:"move"};class Wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Kr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Kr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Kr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const R of e.hand.values()){const M=i.getJointPose(R,r),v=this._getHandJoint(m,R);M!==null&&(v.matrix.fromArray(M.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=M.radius),v.visible=M!==null}const _=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],x=_.position.distanceTo(g.position),S=.02,E=.005;m.inputState.pinching&&x>S+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&x<=S-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(aT)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new Kr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class vy extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ki,this.environmentIntensity=1,this.environmentRotation=new ki,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class rT extends Vn{constructor(e=null,i=1,r=1,l,c,h,d,p,m=vi,_=vi,g,x){super(null,h,d,p,m,_,l,c,g,x),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ax extends En{constructor(e,i,r,l=1){super(e,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const eo=new qe,rx=new qe,Ec=[],sx=new $r,sT=new qe,_l=new vn,xl=new ts;class oT extends vn{constructor(e,i,r){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new ax(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<r;l++)this.setMatrixAt(l,sT)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new $r),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,eo),sx.copy(e.boundingBox).applyMatrix4(eo),this.boundingBox.union(sx)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new ts),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,eo),xl.copy(e.boundingSphere).applyMatrix4(eo),this.boundingSphere.union(xl)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const r=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=r.length+1,h=e*c+1;for(let d=0;d<r.length;d++)r[d]=l[h+d]}raycast(e,i){const r=this.matrixWorld,l=this.count;if(_l.geometry=this.geometry,_l.material=this.material,_l.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xl.copy(this.boundingSphere),xl.applyMatrix4(r),e.ray.intersectsSphere(xl)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,eo),rx.multiplyMatrices(r,eo),_l.matrixWorld=rx,_l.raycast(e,Ec);for(let h=0,d=Ec.length;h<d;h++){const p=Ec[h];p.instanceId=c,p.object=this,i.push(p)}Ec.length=0}}setColorAt(e,i){this.instanceColor===null&&(this.instanceColor=new ax(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,i){i.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,i){const r=i.morphTargetInfluences,l=r.length+1;this.morphTexture===null&&(this.morphTexture=new rT(new Float32Array(l*this.count),l,this.count,em,ra));const c=this.morphTexture.source.data.data;let h=0;for(let m=0;m<r.length;m++)h+=r[m];const d=this.geometry.morphTargetsRelative?1:1-h,p=l*e;c[p]=d,c.set(r,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const jd=new Y,lT=new Y,uT=new pe;class qr{constructor(e=new Y(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=jd.subVectors(r,i).cross(lT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(jd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||uT.getNormalMatrix(e),l=this.coplanarPoint(jd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Vr=new ts,cT=new he(.5,.5),Tc=new Y;class lm{constructor(e=new qr,i=new qr,r=new qr,l=new qr,c=new qr,h=new qr){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=sa,r=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],p=c[2],m=c[3],_=c[4],g=c[5],x=c[6],S=c[7],E=c[8],R=c[9],M=c[10],v=c[11],b=c[12],N=c[13],C=c[14],I=c[15];if(l[0].setComponents(m-h,S-_,v-E,I-b).normalize(),l[1].setComponents(m+h,S+_,v+E,I+b).normalize(),l[2].setComponents(m+d,S+g,v+R,I+N).normalize(),l[3].setComponents(m-d,S-g,v-R,I-N).normalize(),r)l[4].setComponents(p,x,M,C).normalize(),l[5].setComponents(m-p,S-x,v-M,I-C).normalize();else if(l[4].setComponents(m-p,S-x,v-M,I-C).normalize(),i===sa)l[5].setComponents(m+p,S+x,v+M,I+C).normalize();else if(i===Hc)l[5].setComponents(p,x,M,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Vr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Vr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Vr)}intersectsSprite(e){Vr.center.set(0,0,0);const i=cT.distanceTo(e.center);return Vr.radius=.7071067811865476+i,Vr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Vr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(Tc.x=l.normal.x>0?e.max.x:e.min.x,Tc.y=l.normal.y>0?e.max.y:e.min.y,Tc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Tc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class fT extends es{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Vc=new Y,kc=new Y,ox=new qe,yl=new om,bc=new ts,Zd=new Y,lx=new Y;class _y extends _n{constructor(e=new kn,i=new fT){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[0];for(let l=1,c=i.count;l<c;l++)Vc.fromBufferAttribute(i,l-1),kc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Vc.distanceTo(kc);e.setAttribute("lineDistance",new xn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),bc.copy(r.boundingSphere),bc.applyMatrix4(l),bc.radius+=c,e.ray.intersectsSphere(bc)===!1)return;ox.copy(l).invert(),yl.copy(e.ray).applyMatrix4(ox);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const S=Math.max(0,h.start),E=Math.min(_.count,h.start+h.count);for(let R=S,M=E-1;R<M;R+=m){const v=_.getX(R),b=_.getX(R+1),N=Ac(this,e,yl,p,v,b,R);N&&i.push(N)}if(this.isLineLoop){const R=_.getX(E-1),M=_.getX(S),v=Ac(this,e,yl,p,R,M,E-1);v&&i.push(v)}}else{const S=Math.max(0,h.start),E=Math.min(x.count,h.start+h.count);for(let R=S,M=E-1;R<M;R+=m){const v=Ac(this,e,yl,p,R,R+1,R);v&&i.push(v)}if(this.isLineLoop){const R=Ac(this,e,yl,p,E-1,S,E-1);R&&i.push(R)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Ac(o,e,i,r,l,c,h){const d=o.geometry.attributes.position;if(Vc.fromBufferAttribute(d,l),kc.fromBufferAttribute(d,c),i.distanceSqToSegment(Vc,kc,Zd,lx)>r)return;Zd.applyMatrix4(o.matrixWorld);const m=e.ray.origin.distanceTo(Zd);if(!(m<e.near||m>e.far))return{distance:m,point:lx.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const ux=new Y,cx=new Y;class hT extends _y{constructor(e,i){super(e,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const i=e.attributes.position,r=[];for(let l=0,c=i.count;l<c;l+=2)ux.fromBufferAttribute(i,l),cx.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+ux.distanceTo(cx);e.setAttribute("lineDistance",new xn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dT extends es{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const fx=new qe,Yp=new om,Rc=new ts,Cc=new Y;class xy extends _n{constructor(e=new kn,i=new dT){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Rc.copy(r.boundingSphere),Rc.applyMatrix4(l),Rc.radius+=c,e.ray.intersectsSphere(Rc)===!1)return;fx.copy(l).invert(),Yp.copy(e.ray).applyMatrix4(fx);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=r.index,g=r.attributes.position;if(m!==null){const x=Math.max(0,h.start),S=Math.min(m.count,h.start+h.count);for(let E=x,R=S;E<R;E++){const M=m.getX(E);Cc.fromBufferAttribute(g,M),hx(Cc,M,p,l,e,i,this)}}else{const x=Math.max(0,h.start),S=Math.min(g.count,h.start+h.count);for(let E=x,R=S;E<R;E++)Cc.fromBufferAttribute(g,E),hx(Cc,E,p,l,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function hx(o,e,i,r,l,c,h){const d=Yp.distanceSqToPoint(o);if(d<i){const p=new Y;Yp.closestPointToPoint(o,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class pT extends Vn{constructor(e,i,r,l,c,h,d,p,m){super(e,i,r,l,c,h,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yy extends Vn{constructor(e,i,r=Jr,l,c,h,d=vi,p=vi,m,_=Dl,g=1){if(_!==Dl&&_!==Ul)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:g};super(x,l,c,h,d,p,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Sy extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class um extends kn{constructor(e=[],i=[],r=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:i,radius:r,detail:l};const c=[],h=[];d(l),m(r),_(),this.setAttribute("position",new xn(c,3)),this.setAttribute("normal",new xn(c.slice(),3)),this.setAttribute("uv",new xn(h,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(b){const N=new Y,C=new Y,I=new Y;for(let z=0;z<i.length;z+=3)S(i[z+0],N),S(i[z+1],C),S(i[z+2],I),p(N,C,I,b)}function p(b,N,C,I){const z=I+1,P=[];for(let V=0;V<=z;V++){P[V]=[];const U=b.clone().lerp(C,V/z),w=N.clone().lerp(C,V/z),H=z-V;for(let W=0;W<=H;W++)W===0&&V===z?P[V][W]=U:P[V][W]=U.clone().lerp(w,W/H)}for(let V=0;V<z;V++)for(let U=0;U<2*(z-V)-1;U++){const w=Math.floor(U/2);U%2===0?(x(P[V][w+1]),x(P[V+1][w]),x(P[V][w])):(x(P[V][w+1]),x(P[V+1][w+1]),x(P[V+1][w]))}}function m(b){const N=new Y;for(let C=0;C<c.length;C+=3)N.x=c[C+0],N.y=c[C+1],N.z=c[C+2],N.normalize().multiplyScalar(b),c[C+0]=N.x,c[C+1]=N.y,c[C+2]=N.z}function _(){const b=new Y;for(let N=0;N<c.length;N+=3){b.x=c[N+0],b.y=c[N+1],b.z=c[N+2];const C=M(b)/2/Math.PI+.5,I=v(b)/Math.PI+.5;h.push(C,1-I)}E(),g()}function g(){for(let b=0;b<h.length;b+=6){const N=h[b+0],C=h[b+2],I=h[b+4],z=Math.max(N,C,I),P=Math.min(N,C,I);z>.9&&P<.1&&(N<.2&&(h[b+0]+=1),C<.2&&(h[b+2]+=1),I<.2&&(h[b+4]+=1))}}function x(b){c.push(b.x,b.y,b.z)}function S(b,N){const C=b*3;N.x=e[C+0],N.y=e[C+1],N.z=e[C+2]}function E(){const b=new Y,N=new Y,C=new Y,I=new Y,z=new he,P=new he,V=new he;for(let U=0,w=0;U<c.length;U+=9,w+=6){b.set(c[U+0],c[U+1],c[U+2]),N.set(c[U+3],c[U+4],c[U+5]),C.set(c[U+6],c[U+7],c[U+8]),z.set(h[w+0],h[w+1]),P.set(h[w+2],h[w+3]),V.set(h[w+4],h[w+5]),I.copy(b).add(N).add(C).divideScalar(3);const H=M(I);R(z,w+0,b,H),R(P,w+2,N,H),R(V,w+4,C,H)}}function R(b,N,C,I){I<0&&b.x===1&&(h[N]=b.x-1),C.x===0&&C.z===0&&(h[N]=I/2/Math.PI+.5)}function M(b){return Math.atan2(b.z,-b.x)}function v(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new um(e.vertices,e.indices,e.radius,e.details)}}class cm extends um{constructor(e=1,i=0){const r=(1+Math.sqrt(5))/2,l=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,e,i),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:i}}static fromJSON(e){return new cm(e.radius,e.detail)}}class xo extends kn{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,_=p+1,g=e/d,x=i/p,S=[],E=[],R=[],M=[];for(let v=0;v<_;v++){const b=v*x-h;for(let N=0;N<m;N++){const C=N*g-c;E.push(C,-b,0),R.push(0,0,1),M.push(N/d),M.push(1-v/p)}}for(let v=0;v<p;v++)for(let b=0;b<d;b++){const N=b+m*v,C=b+m*(v+1),I=b+1+m*(v+1),z=b+1+m*v;S.push(N,C,z),S.push(C,I,z)}this.setIndex(S),this.setAttribute("position",new xn(E,3)),this.setAttribute("normal",new xn(R,3)),this.setAttribute("uv",new xn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xo(e.width,e.height,e.widthSegments,e.heightSegments)}}class fm extends kn{constructor(e=.5,i=1,r=32,l=1,c=0,h=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:i,thetaSegments:r,phiSegments:l,thetaStart:c,thetaLength:h},r=Math.max(3,r),l=Math.max(1,l);const d=[],p=[],m=[],_=[];let g=e;const x=(i-e)/l,S=new Y,E=new he;for(let R=0;R<=l;R++){for(let M=0;M<=r;M++){const v=c+M/r*h;S.x=g*Math.cos(v),S.y=g*Math.sin(v),p.push(S.x,S.y,S.z),m.push(0,0,1),E.x=(S.x/i+1)/2,E.y=(S.y/i+1)/2,_.push(E.x,E.y)}g+=x}for(let R=0;R<l;R++){const M=R*(r+1);for(let v=0;v<r;v++){const b=v+M,N=b,C=b+r+1,I=b+r+2,z=b+1;d.push(N,C,z),d.push(C,I,z)}}this.setIndex(d),this.setAttribute("position",new xn(p,3)),this.setAttribute("normal",new xn(m,3)),this.setAttribute("uv",new xn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fm(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class zl extends kn{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(h+d,Math.PI);let m=0;const _=[],g=new Y,x=new Y,S=[],E=[],R=[],M=[];for(let v=0;v<=r;v++){const b=[],N=v/r;let C=0;v===0&&h===0?C=.5/i:v===r&&p===Math.PI&&(C=-.5/i);for(let I=0;I<=i;I++){const z=I/i;g.x=-e*Math.cos(l+z*c)*Math.sin(h+N*d),g.y=e*Math.cos(h+N*d),g.z=e*Math.sin(l+z*c)*Math.sin(h+N*d),E.push(g.x,g.y,g.z),x.copy(g).normalize(),R.push(x.x,x.y,x.z),M.push(z+C,1-N),b.push(m++)}_.push(b)}for(let v=0;v<r;v++)for(let b=0;b<i;b++){const N=_[v][b+1],C=_[v][b],I=_[v+1][b],z=_[v+1][b+1];(v!==0||h>0)&&S.push(N,C,z),(v!==r-1||p<Math.PI)&&S.push(C,I,z)}this.setIndex(S),this.setAttribute("position",new xn(E,3)),this.setAttribute("normal",new xn(R,3)),this.setAttribute("uv",new xn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class mT extends an{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class gT extends es{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sy,this.normalScale=new he(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ki,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class vT extends es{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class _T extends es{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class My extends _n{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class xT extends My{constructor(e,i,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Qd=new qe,dx=new Y,px=new Y;class yT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new he(512,512),this.mapType=Vi,this.map=null,this.mapPass=null,this.matrix=new qe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lm,this._frameExtents=new he(1,1),this._viewportCount=1,this._viewports=[new ln(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;dx.setFromMatrixPosition(e.matrixWorld),i.position.copy(dx),px.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(px),i.updateMatrixWorld(),Qd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Qd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class hm extends my{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,d-=_*this.view.offsetY,p=d-_*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class ST extends yT{constructor(){super(new hm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class MT extends My{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new ST}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ET extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ey{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function mx(o,e,i,r){const l=TT(r);switch(i){case iy:return o*e;case em:return o*e/l.components*l.byteLength;case nm:return o*e/l.components*l.byteLength;case ry:return o*e*2/l.components*l.byteLength;case im:return o*e*2/l.components*l.byteLength;case ay:return o*e*3/l.components*l.byteLength;case Hi:return o*e*4/l.components*l.byteLength;case am:return o*e*4/l.components*l.byteLength;case Lc:case Oc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Pc:case zc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case xp:case Sp:return Math.max(o,16)*Math.max(e,8)/4;case _p:case yp:return Math.max(o,8)*Math.max(e,8)/2;case Mp:case Ep:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Tp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case bp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Ap:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Rp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case Cp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case wp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Dp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Up:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Np:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Lp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Op:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Pp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case zp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Ip:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case Bp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Fp:case Hp:case Gp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Vp:case kp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Xp:case qp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function TT(o){switch(o){case Vi:case $x:return{byteLength:1,components:1};case Cl:case ty:case Gi:return{byteLength:2,components:1};case $p:case tm:return{byteLength:2,components:4};case Jr:case Jp:case ra:return{byteLength:4,components:1};case ey:case ny:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ty(){let o=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function bT(o){const e=new WeakMap;function i(d,p){const m=d.array,_=d.usage,g=m.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,m,_),d.onUploadCallback();let S;if(m instanceof Float32Array)S=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=o.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?S=o.HALF_FLOAT:S=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=o.SHORT;else if(m instanceof Uint32Array)S=o.UNSIGNED_INT;else if(m instanceof Int32Array)S=o.INT;else if(m instanceof Int8Array)S=o.BYTE;else if(m instanceof Uint8Array)S=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:x,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,p,m){const _=p.array,g=p.updateRanges;if(o.bindBuffer(m,d),g.length===0)o.bufferSubData(m,0,_);else{g.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<g.length;S++){const E=g[x],R=g[S];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++x,g[x]=R)}g.length=x+1;for(let S=0,E=g.length;S<E;S++){const R=g[S];o.bufferSubData(m,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=e.get(d);(!_||_.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:h}}var AT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,RT=`#ifdef USE_ALPHAHASH
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
#endif`,CT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,NT=`#ifdef USE_AOMAP
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
#endif`,LT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OT=`#ifdef USE_BATCHING
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
#endif`,PT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,FT=`#ifdef USE_IRIDESCENCE
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
#endif`,HT=`#ifdef USE_BUMPMAP
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
#endif`,GT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,VT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,kT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,XT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,YT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jT=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ZT=`#define PI 3.141592653589793
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
} // validated`,QT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,KT=`vec3 transformedNormal = objectNormal;
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
#endif`,JT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,$T=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,nb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ib=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ab=`#ifdef USE_ENVMAP
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
	
#endif`,sb=`#ifdef USE_ENVMAP
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
#endif`,ob=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lb=`#ifdef USE_ENVMAP
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
#endif`,ub=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,db=`#ifdef USE_GRADIENTMAP
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
}`,pb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,gb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vb=`uniform bool receiveShadow;
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
#endif`,_b=`#ifdef USE_ENVMAP
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
#endif`,xb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Mb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Eb=`PhysicalMaterial material;
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
#endif`,Tb=`struct PhysicalMaterial {
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
}`,bb=`
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
#endif`,Ab=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Db=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ub=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Lb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ob=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pb=`#if defined( USE_POINTS_UV )
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
#endif`,zb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ib=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Fb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Gb=`#ifdef USE_MORPHTARGETS
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
#endif`,Vb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jb=`#ifdef USE_NORMALMAP
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
#endif`,Zb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$b=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aA=`#ifdef DITHERING
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
#endif`,sA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,uA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cA=`float getShadowMask() {
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
}`,fA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hA=`#ifdef USE_SKINNING
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
#endif`,dA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pA=`#ifdef USE_SKINNING
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
#endif`,mA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,_A=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xA=`#ifdef USE_TRANSMISSION
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
#endif`,yA=`#ifdef USE_TRANSMISSION
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
#endif`,SA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,EA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,AA=`uniform sampler2D t2D;
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
}`,RA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UA=`#include <common>
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
}`,NA=`#if DEPTH_PACKING == 3200
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
}`,LA=`#define DISTANCE
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
}`,OA=`#define DISTANCE
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
}`,PA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IA=`uniform float scale;
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
}`,BA=`uniform vec3 diffuse;
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
}`,FA=`#include <common>
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
}`,HA=`uniform vec3 diffuse;
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
}`,GA=`#define LAMBERT
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
}`,VA=`#define LAMBERT
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
}`,kA=`#define MATCAP
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
}`,XA=`#define MATCAP
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
}`,qA=`#define NORMAL
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
}`,YA=`#define NORMAL
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
}`,WA=`#define PHONG
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
}`,jA=`#define PHONG
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
}`,ZA=`#define STANDARD
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
}`,QA=`#define STANDARD
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
}`,KA=`#define TOON
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
}`,JA=`#define TOON
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
}`,$A=`uniform float size;
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
}`,t2=`uniform vec3 diffuse;
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
}`,e2=`#include <common>
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
}`,n2=`uniform vec3 color;
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
}`,i2=`uniform float rotation;
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
}`,a2=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:AT,alphahash_pars_fragment:RT,alphamap_fragment:CT,alphamap_pars_fragment:wT,alphatest_fragment:DT,alphatest_pars_fragment:UT,aomap_fragment:NT,aomap_pars_fragment:LT,batching_pars_vertex:OT,batching_vertex:PT,begin_vertex:zT,beginnormal_vertex:IT,bsdfs:BT,iridescence_fragment:FT,bumpmap_pars_fragment:HT,clipping_planes_fragment:GT,clipping_planes_pars_fragment:VT,clipping_planes_pars_vertex:kT,clipping_planes_vertex:XT,color_fragment:qT,color_pars_fragment:YT,color_pars_vertex:WT,color_vertex:jT,common:ZT,cube_uv_reflection_fragment:QT,defaultnormal_vertex:KT,displacementmap_pars_vertex:JT,displacementmap_vertex:$T,emissivemap_fragment:tb,emissivemap_pars_fragment:eb,colorspace_fragment:nb,colorspace_pars_fragment:ib,envmap_fragment:ab,envmap_common_pars_fragment:rb,envmap_pars_fragment:sb,envmap_pars_vertex:ob,envmap_physical_pars_fragment:_b,envmap_vertex:lb,fog_vertex:ub,fog_pars_vertex:cb,fog_fragment:fb,fog_pars_fragment:hb,gradientmap_pars_fragment:db,lightmap_pars_fragment:pb,lights_lambert_fragment:mb,lights_lambert_pars_fragment:gb,lights_pars_begin:vb,lights_toon_fragment:xb,lights_toon_pars_fragment:yb,lights_phong_fragment:Sb,lights_phong_pars_fragment:Mb,lights_physical_fragment:Eb,lights_physical_pars_fragment:Tb,lights_fragment_begin:bb,lights_fragment_maps:Ab,lights_fragment_end:Rb,logdepthbuf_fragment:Cb,logdepthbuf_pars_fragment:wb,logdepthbuf_pars_vertex:Db,logdepthbuf_vertex:Ub,map_fragment:Nb,map_pars_fragment:Lb,map_particle_fragment:Ob,map_particle_pars_fragment:Pb,metalnessmap_fragment:zb,metalnessmap_pars_fragment:Ib,morphinstance_vertex:Bb,morphcolor_vertex:Fb,morphnormal_vertex:Hb,morphtarget_pars_vertex:Gb,morphtarget_vertex:Vb,normal_fragment_begin:kb,normal_fragment_maps:Xb,normal_pars_fragment:qb,normal_pars_vertex:Yb,normal_vertex:Wb,normalmap_pars_fragment:jb,clearcoat_normal_fragment_begin:Zb,clearcoat_normal_fragment_maps:Qb,clearcoat_pars_fragment:Kb,iridescence_pars_fragment:Jb,opaque_fragment:$b,packing:tA,premultiplied_alpha_fragment:eA,project_vertex:nA,dithering_fragment:iA,dithering_pars_fragment:aA,roughnessmap_fragment:rA,roughnessmap_pars_fragment:sA,shadowmap_pars_fragment:oA,shadowmap_pars_vertex:lA,shadowmap_vertex:uA,shadowmask_pars_fragment:cA,skinbase_vertex:fA,skinning_pars_vertex:hA,skinning_vertex:dA,skinnormal_vertex:pA,specularmap_fragment:mA,specularmap_pars_fragment:gA,tonemapping_fragment:vA,tonemapping_pars_fragment:_A,transmission_fragment:xA,transmission_pars_fragment:yA,uv_pars_fragment:SA,uv_pars_vertex:MA,uv_vertex:EA,worldpos_vertex:TA,background_vert:bA,background_frag:AA,backgroundCube_vert:RA,backgroundCube_frag:CA,cube_vert:wA,cube_frag:DA,depth_vert:UA,depth_frag:NA,distanceRGBA_vert:LA,distanceRGBA_frag:OA,equirect_vert:PA,equirect_frag:zA,linedashed_vert:IA,linedashed_frag:BA,meshbasic_vert:FA,meshbasic_frag:HA,meshlambert_vert:GA,meshlambert_frag:VA,meshmatcap_vert:kA,meshmatcap_frag:XA,meshnormal_vert:qA,meshnormal_frag:YA,meshphong_vert:WA,meshphong_frag:jA,meshphysical_vert:ZA,meshphysical_frag:QA,meshtoon_vert:KA,meshtoon_frag:JA,points_vert:$A,points_frag:t2,shadow_vert:e2,shadow_frag:n2,sprite_vert:i2,sprite_frag:a2},kt={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new he(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new he(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},na={basic:{uniforms:Qn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Qn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ue(0)}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Qn([kt.common,kt.specularmap,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,kt.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Qn([kt.common,kt.envmap,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.roughnessmap,kt.metalnessmap,kt.fog,kt.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Qn([kt.common,kt.aomap,kt.lightmap,kt.emissivemap,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.gradientmap,kt.fog,kt.lights,{emissive:{value:new ue(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Qn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,kt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Qn([kt.points,kt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Qn([kt.common,kt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Qn([kt.common,kt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Qn([kt.common,kt.bumpmap,kt.normalmap,kt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Qn([kt.sprite,kt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distanceRGBA:{uniforms:Qn([kt.common,kt.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distanceRGBA_vert,fragmentShader:ye.distanceRGBA_frag},shadow:{uniforms:Qn([kt.lights,kt.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};na.physical={uniforms:Qn([na.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new he(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new he},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new he},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};const wc={r:0,b:0,g:0},kr=new ki,r2=new qe;function s2(o,e,i,r,l,c,h){const d=new ue(0);let p=c===!0?0:1,m,_,g=null,x=0,S=null;function E(N){let C=N.isScene===!0?N.background:null;return C&&C.isTexture&&(C=(N.backgroundBlurriness>0?i:e).get(C)),C}function R(N){let C=!1;const I=E(N);I===null?v(d,p):I&&I.isColor&&(v(I,1),C=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||C)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(N,C){const I=E(C);I&&(I.isCubeTexture||I.mapping===Xc)?(_===void 0&&(_=new vn(new _o(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:po(na.backgroundCube.uniforms),vertexShader:na.backgroundCube.vertexShader,fragmentShader:na.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,P,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),kr.copy(C.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),_.material.uniforms.envMap.value=I,_.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(r2.makeRotationFromEuler(kr)),_.material.toneMapped=Ne.getTransfer(I.colorSpace)!==Xe,(g!==I||x!==I.version||S!==o.toneMapping)&&(_.material.needsUpdate=!0,g=I,x=I.version,S=o.toneMapping),_.layers.enableAll(),N.unshift(_,_.geometry,_.material,0,0,null)):I&&I.isTexture&&(m===void 0&&(m=new vn(new xo(2,2),new an({name:"BackgroundMaterial",uniforms:po(na.background.uniforms),vertexShader:na.background.vertexShader,fragmentShader:na.background.fragmentShader,side:pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=I,m.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,m.material.toneMapped=Ne.getTransfer(I.colorSpace)!==Xe,I.matrixAutoUpdate===!0&&I.updateMatrix(),m.material.uniforms.uvTransform.value.copy(I.matrix),(g!==I||x!==I.version||S!==o.toneMapping)&&(m.material.needsUpdate=!0,g=I,x=I.version,S=o.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function v(N,C){N.getRGB(wc,py(o)),r.buffers.color.setClear(wc.r,wc.g,wc.b,C,h)}function b(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,C=1){d.set(N),p=C,v(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(N){p=N,v(d,p)},render:R,addToRenderList:M,dispose:b}}function o2(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,h=!1;function d(w,H,W,K,ht){let at=!1;const F=g(K,W,H);c!==F&&(c=F,m(c.object)),at=S(w,K,W,ht),at&&E(w,K,W,ht),ht!==null&&e.update(ht,o.ELEMENT_ARRAY_BUFFER),(at||h)&&(h=!1,C(w,H,W,K),ht!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ht).buffer))}function p(){return o.createVertexArray()}function m(w){return o.bindVertexArray(w)}function _(w){return o.deleteVertexArray(w)}function g(w,H,W){const K=W.wireframe===!0;let ht=r[w.id];ht===void 0&&(ht={},r[w.id]=ht);let at=ht[H.id];at===void 0&&(at={},ht[H.id]=at);let F=at[K];return F===void 0&&(F=x(p()),at[K]=F),F}function x(w){const H=[],W=[],K=[];for(let ht=0;ht<i;ht++)H[ht]=0,W[ht]=0,K[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:W,attributeDivisors:K,object:w,attributes:{},index:null}}function S(w,H,W,K){const ht=c.attributes,at=H.attributes;let F=0;const nt=W.getAttributes();for(const j in nt)if(nt[j].location>=0){const St=ht[j];let Et=at[j];if(Et===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(Et=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(Et=w.instanceColor)),St===void 0||St.attribute!==Et||Et&&St.data!==Et.data)return!0;F++}return c.attributesNum!==F||c.index!==K}function E(w,H,W,K){const ht={},at=H.attributes;let F=0;const nt=W.getAttributes();for(const j in nt)if(nt[j].location>=0){let St=at[j];St===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(St=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(St=w.instanceColor));const Et={};Et.attribute=St,St&&St.data&&(Et.data=St.data),ht[j]=Et,F++}c.attributes=ht,c.attributesNum=F,c.index=K}function R(){const w=c.newAttributes;for(let H=0,W=w.length;H<W;H++)w[H]=0}function M(w){v(w,0)}function v(w,H){const W=c.newAttributes,K=c.enabledAttributes,ht=c.attributeDivisors;W[w]=1,K[w]===0&&(o.enableVertexAttribArray(w),K[w]=1),ht[w]!==H&&(o.vertexAttribDivisor(w,H),ht[w]=H)}function b(){const w=c.newAttributes,H=c.enabledAttributes;for(let W=0,K=H.length;W<K;W++)H[W]!==w[W]&&(o.disableVertexAttribArray(W),H[W]=0)}function N(w,H,W,K,ht,at,F){F===!0?o.vertexAttribIPointer(w,H,W,ht,at):o.vertexAttribPointer(w,H,W,K,ht,at)}function C(w,H,W,K){R();const ht=K.attributes,at=W.getAttributes(),F=H.defaultAttributeValues;for(const nt in at){const j=at[nt];if(j.location>=0){let ct=ht[nt];if(ct===void 0&&(nt==="instanceMatrix"&&w.instanceMatrix&&(ct=w.instanceMatrix),nt==="instanceColor"&&w.instanceColor&&(ct=w.instanceColor)),ct!==void 0){const St=ct.normalized,Et=ct.itemSize,Ft=e.get(ct);if(Ft===void 0)continue;const oe=Ft.buffer,G=Ft.type,dt=Ft.bytesPerElement,k=G===o.INT||G===o.UNSIGNED_INT||ct.gpuType===Jp;if(ct.isInterleavedBufferAttribute){const Q=ct.data,pt=Q.stride,Tt=ct.offset;if(Q.isInstancedInterleavedBuffer){for(let bt=0;bt<j.locationSize;bt++)v(j.location+bt,Q.meshPerAttribute);w.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let bt=0;bt<j.locationSize;bt++)M(j.location+bt);o.bindBuffer(o.ARRAY_BUFFER,oe);for(let bt=0;bt<j.locationSize;bt++)N(j.location+bt,Et/j.locationSize,G,St,pt*dt,(Tt+Et/j.locationSize*bt)*dt,k)}else{if(ct.isInstancedBufferAttribute){for(let Q=0;Q<j.locationSize;Q++)v(j.location+Q,ct.meshPerAttribute);w.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=ct.meshPerAttribute*ct.count)}else for(let Q=0;Q<j.locationSize;Q++)M(j.location+Q);o.bindBuffer(o.ARRAY_BUFFER,oe);for(let Q=0;Q<j.locationSize;Q++)N(j.location+Q,Et/j.locationSize,G,St,Et*dt,Et/j.locationSize*Q*dt,k)}}else if(F!==void 0){const St=F[nt];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(j.location,St);break;case 3:o.vertexAttrib3fv(j.location,St);break;case 4:o.vertexAttrib4fv(j.location,St);break;default:o.vertexAttrib1fv(j.location,St)}}}}b()}function I(){V();for(const w in r){const H=r[w];for(const W in H){const K=H[W];for(const ht in K)_(K[ht].object),delete K[ht];delete H[W]}delete r[w]}}function z(w){if(r[w.id]===void 0)return;const H=r[w.id];for(const W in H){const K=H[W];for(const ht in K)_(K[ht].object),delete K[ht];delete H[W]}delete r[w.id]}function P(w){for(const H in r){const W=r[H];if(W[w.id]===void 0)continue;const K=W[w.id];for(const ht in K)_(K[ht].object),delete K[ht];delete W[w.id]}}function V(){U(),h=!0,c!==l&&(c=l,m(c.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:V,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:z,releaseStatesOfProgram:P,initAttributes:R,enableAttribute:M,disableUnusedAttributes:b}}function l2(o,e,i){let r;function l(m){r=m}function c(m,_){o.drawArrays(r,m,_),i.update(_,r,1)}function h(m,_,g){g!==0&&(o.drawArraysInstanced(r,m,_,g),i.update(_,r,g))}function d(m,_,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,_,0,g);let S=0;for(let E=0;E<g;E++)S+=_[E];i.update(S,r,1)}function p(m,_,g,x){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<m.length;E++)h(m[E],_[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(r,m,0,_,0,x,0,g);let E=0;for(let R=0;R<g;R++)E+=_[R]*x[R];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function u2(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(P){return!(P!==Hi&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const V=P===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Vi&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ra&&!V)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const _=p(m);_!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),S=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),b=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),N=o.getParameter(o.MAX_VARYING_VECTORS),C=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),I=E>0,z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:M,maxAttributes:v,maxVertexUniforms:b,maxVaryings:N,maxFragmentUniforms:C,vertexTextures:I,maxSamples:z}}function c2(o){const e=this;let i=null,r=0,l=!1,c=!1;const h=new qr,d=new pe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const S=g.length!==0||x||r!==0||l;return l=x,r=g.length,S},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,x){i=_(g,x,0)},this.setState=function(g,x,S){const E=g.clippingPlanes,R=g.clipIntersection,M=g.clipShadows,v=o.get(g);if(!l||E===null||E.length===0||c&&!M)c?_(null):m();else{const b=c?0:r,N=b*4;let C=v.clippingState||null;p.value=C,C=_(E,x,N,S);for(let I=0;I!==N;++I)C[I]=i[I];v.clippingState=C,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=b}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(g,x,S,E){const R=g!==null?g.length:0;let M=null;if(R!==0){if(M=p.value,E!==!0||M===null){const v=S+R*4,b=x.matrixWorldInverse;d.getNormalMatrix(b),(M===null||M.length<v)&&(M=new Float32Array(v));for(let N=0,C=S;N!==R;++N,C+=4)h.copy(g[N]).applyMatrix4(b,d),h.normal.toArray(M,C),M[C+3]=h.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,M}}function f2(o){let e=new WeakMap;function i(h,d){return d===pp?h.mapping=co:d===mp&&(h.mapping=fo),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===pp||d===mp)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new iT(p.height);return m.fromEquirectangularTexture(o,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const so=4,gx=[.125,.215,.35,.446,.526,.582],jr=20,Kd=new hm,vx=new ue;let Jd=null,$d=0,tp=0,ep=!1;const Yr=(1+Math.sqrt(5))/2,no=1/Yr,_x=[new Y(-Yr,no,0),new Y(Yr,no,0),new Y(-no,0,Yr),new Y(no,0,Yr),new Y(0,Yr,-no),new Y(0,Yr,no),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)],h2=new Y;class xx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=h2}=c;Jd=this._renderer.getRenderTarget(),$d=this._renderer.getActiveCubeFace(),tp=this._renderer.getActiveMipmapLevel(),ep=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Mx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jd,$d,tp),this._renderer.xr.enabled=ep,e.scissorTest=!1,Dc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===co||e.mapping===fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jd=this._renderer.getRenderTarget(),$d=this._renderer.getActiveCubeFace(),tp=this._renderer.getActiveMipmapLevel(),ep=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:aa,minFilter:aa,generateMipmaps:!1,type:Gi,format:Hi,colorSpace:ho,depthBuffer:!1},l=yx(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yx(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=d2(c)),this._blurMaterial=p2(c,e,i)}return l}_compileMaterial(e){const i=new vn(this._lodPlanes[0],e);this._renderer.compile(i,Kd)}_sceneToCubeUV(e,i,r,l,c){const p=new mi(90,1,i,r),m=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,S=g.toneMapping;g.getClearColor(vx),g.toneMapping=Ua,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const R=new Ol({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1}),M=new vn(new _o,R);let v=!1;const b=e.background;b?b.isColor&&(R.color.copy(b),e.background=null,v=!0):(R.color.copy(vx),v=!0);for(let N=0;N<6;N++){const C=N%3;C===0?(p.up.set(0,m[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+_[N],c.y,c.z)):C===1?(p.up.set(0,0,m[N]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+_[N],c.z)):(p.up.set(0,m[N],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+_[N]));const I=this._cubeSize;Dc(l,C*I,N>2?I:0,I,I),g.setRenderTarget(l),v&&g.render(M,p),g.render(e,p)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=S,g.autoClear=x,e.background=b}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===co||e.mapping===fo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Mx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sx());const c=l?this._cubemapMaterial:this._equirectMaterial,h=new vn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;Dc(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,Kd)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const h=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=_x[(l-c-1)%_x.length];this._blur(e,c-1,c,h,d)}i.autoClear=r}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new vn(this._lodPlanes[l],m),x=m.uniforms,S=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*S):2*Math.PI/(2*jr-1),R=c/E,M=isFinite(c)?1+Math.floor(_*R):jr;M>jr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${jr}`);const v=[];let b=0;for(let P=0;P<jr;++P){const V=P/R,U=Math.exp(-V*V/2);v.push(U),P===0?b+=U:P<M&&(b+=2*U)}for(let P=0;P<v.length;P++)v[P]=v[P]/b;x.envMap.value=e.texture,x.samples.value=M,x.weights.value=v,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=E,x.mipInt.value=N-r;const C=this._sizeLods[l],I=3*C*(l>N-so?l-N+so:0),z=4*(this._cubeSize-C);Dc(i,I,z,3*C,2*C),p.setRenderTarget(i),p.render(g,Kd)}}function d2(o){const e=[],i=[],r=[];let l=o;const c=o-so+1+gx.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-so?p=gx[h-o+so-1]:h===0&&(p=0),r.push(p);const m=1/(d-2),_=-m,g=1+m,x=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,E=6,R=3,M=2,v=1,b=new Float32Array(R*E*S),N=new Float32Array(M*E*S),C=new Float32Array(v*E*S);for(let z=0;z<S;z++){const P=z%3*2/3-1,V=z>2?0:-1,U=[P,V,0,P+2/3,V,0,P+2/3,V+1,0,P,V,0,P+2/3,V+1,0,P,V+1,0];b.set(U,R*E*z),N.set(x,M*E*z);const w=[z,z,z,z,z,z];C.set(w,v*E*z)}const I=new kn;I.setAttribute("position",new En(b,R)),I.setAttribute("uv",new En(N,M)),I.setAttribute("faceIndex",new En(C,v)),e.push(I),l>so&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function yx(o,e,i){const r=new wi(o,e,i);return r.texture.mapping=Xc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Dc(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function p2(o,e,i){const r=new Float32Array(jr),l=new Y(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:jr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:dm(),fragmentShader:`

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
		`,blending:Da,depthTest:!1,depthWrite:!1})}function Sx(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dm(),fragmentShader:`

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
		`,blending:Da,depthTest:!1,depthWrite:!1})}function Mx(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Da,depthTest:!1,depthWrite:!1})}function dm(){return`

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
	`}function m2(o){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===pp||p===mp,_=p===co||p===fo;if(m||_){let g=e.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new xx(o)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return m&&S&&S.height>0||_&&S&&l(S)?(i===null&&(i=new xx(o)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let p=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function g2(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Ll("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function v2(o,e,i,r){const l={},c=new WeakMap;function h(g){const x=g.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",h),delete l[x.id];const S=c.get(x);S&&(e.remove(S),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function p(g){const x=g.attributes;for(const S in x)e.update(x[S],o.ARRAY_BUFFER)}function m(g){const x=[],S=g.index,E=g.attributes.position;let R=0;if(S!==null){const b=S.array;R=S.version;for(let N=0,C=b.length;N<C;N+=3){const I=b[N+0],z=b[N+1],P=b[N+2];x.push(I,z,z,P,P,I)}}else if(E!==void 0){const b=E.array;R=E.version;for(let N=0,C=b.length/3-1;N<C;N+=3){const I=N+0,z=N+1,P=N+2;x.push(I,z,z,P,P,I)}}else return;const M=new(ly(x)?dy:hy)(x,1);M.version=R;const v=c.get(g);v&&e.remove(v),c.set(g,M)}function _(g){const x=c.get(g);if(x){const S=g.index;S!==null&&x.version<S.version&&m(g)}else m(g);return c.get(g)}return{get:d,update:p,getWireframeAttribute:_}}function _2(o,e,i){let r;function l(x){r=x}let c,h;function d(x){c=x.type,h=x.bytesPerElement}function p(x,S){o.drawElements(r,S,c,x*h),i.update(S,r,1)}function m(x,S,E){E!==0&&(o.drawElementsInstanced(r,S,c,x*h,E),i.update(S,r,E))}function _(x,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,c,x,0,E);let M=0;for(let v=0;v<E;v++)M+=S[v];i.update(M,r,1)}function g(x,S,E,R){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let v=0;v<x.length;v++)m(x[v]/h,S[v],R[v]);else{M.multiDrawElementsInstancedWEBGL(r,S,0,c,x,0,R,0,E);let v=0;for(let b=0;b<E;b++)v+=S[b]*R[b];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function x2(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(c/3);break;case o.LINES:i.lines+=d*(c/2);break;case o.LINE_STRIP:i.lines+=d*(c-1);break;case o.LINE_LOOP:i.lines+=d*c;break;case o.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function y2(o,e,i){const r=new WeakMap,l=new ln;function c(h,d,p){const m=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==g){let w=function(){V.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var S=w;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],b=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let C=0;E===!0&&(C=1),R===!0&&(C=2),M===!0&&(C=3);let I=d.attributes.position.count*C,z=1;I>e.maxTextureSize&&(z=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const P=new Float32Array(I*z*4*g),V=new uy(P,I,z,g);V.type=ra,V.needsUpdate=!0;const U=C*4;for(let H=0;H<g;H++){const W=v[H],K=b[H],ht=N[H],at=I*z*4*H;for(let F=0;F<W.count;F++){const nt=F*U;E===!0&&(l.fromBufferAttribute(W,F),P[at+nt+0]=l.x,P[at+nt+1]=l.y,P[at+nt+2]=l.z,P[at+nt+3]=0),R===!0&&(l.fromBufferAttribute(K,F),P[at+nt+4]=l.x,P[at+nt+5]=l.y,P[at+nt+6]=l.z,P[at+nt+7]=0),M===!0&&(l.fromBufferAttribute(ht,F),P[at+nt+8]=l.x,P[at+nt+9]=l.y,P[at+nt+10]=l.z,P[at+nt+11]=ht.itemSize===4?l.w:1)}}x={count:g,texture:V,size:new he(I,z)},r.set(d,x),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<m.length;M++)E+=m[M];const R=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",R),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function S2(o,e,i,r){let l=new WeakMap;function c(p){const m=r.render.frame,_=p.geometry,g=e.get(p,_);if(l.get(g)!==m&&(e.update(g),l.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==m&&(x.update(),l.set(x,m))}return g}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:h}}const by=new Vn,Ex=new yy(1,1),Ay=new uy,Ry=new G1,Cy=new gy,Tx=[],bx=[],Ax=new Float32Array(16),Rx=new Float32Array(9),Cx=new Float32Array(4);function yo(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=Tx[l];if(c===void 0&&(c=new Float32Array(l),Tx[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(c,d)}return c}function Tn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function bn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function qc(o,e){let i=bx[e];i===void 0&&(i=new Int32Array(e),bx[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function M2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function E2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;o.uniform2fv(this.addr,e),bn(i,e)}}function T2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(Tn(i,e))return;o.uniform3fv(this.addr,e),bn(i,e)}}function b2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;o.uniform4fv(this.addr,e),bn(i,e)}}function A2(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Tn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),bn(i,e)}else{if(Tn(i,r))return;Cx.set(r),o.uniformMatrix2fv(this.addr,!1,Cx),bn(i,r)}}function R2(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Tn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),bn(i,e)}else{if(Tn(i,r))return;Rx.set(r),o.uniformMatrix3fv(this.addr,!1,Rx),bn(i,r)}}function C2(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(Tn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),bn(i,e)}else{if(Tn(i,r))return;Ax.set(r),o.uniformMatrix4fv(this.addr,!1,Ax),bn(i,r)}}function w2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function D2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;o.uniform2iv(this.addr,e),bn(i,e)}}function U2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;o.uniform3iv(this.addr,e),bn(i,e)}}function N2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;o.uniform4iv(this.addr,e),bn(i,e)}}function L2(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function O2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(Tn(i,e))return;o.uniform2uiv(this.addr,e),bn(i,e)}}function P2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(Tn(i,e))return;o.uniform3uiv(this.addr,e),bn(i,e)}}function z2(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(Tn(i,e))return;o.uniform4uiv(this.addr,e),bn(i,e)}}function I2(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let c;this.type===o.SAMPLER_2D_SHADOW?(Ex.compareFunction=oy,c=Ex):c=by,i.setTexture2D(e||c,l)}function B2(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Ry,l)}function F2(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Cy,l)}function H2(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Ay,l)}function G2(o){switch(o){case 5126:return M2;case 35664:return E2;case 35665:return T2;case 35666:return b2;case 35674:return A2;case 35675:return R2;case 35676:return C2;case 5124:case 35670:return w2;case 35667:case 35671:return D2;case 35668:case 35672:return U2;case 35669:case 35673:return N2;case 5125:return L2;case 36294:return O2;case 36295:return P2;case 36296:return z2;case 35678:case 36198:case 36298:case 36306:case 35682:return I2;case 35679:case 36299:case 36307:return B2;case 35680:case 36300:case 36308:case 36293:return F2;case 36289:case 36303:case 36311:case 36292:return H2}}function V2(o,e){o.uniform1fv(this.addr,e)}function k2(o,e){const i=yo(e,this.size,2);o.uniform2fv(this.addr,i)}function X2(o,e){const i=yo(e,this.size,3);o.uniform3fv(this.addr,i)}function q2(o,e){const i=yo(e,this.size,4);o.uniform4fv(this.addr,i)}function Y2(o,e){const i=yo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function W2(o,e){const i=yo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function j2(o,e){const i=yo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function Z2(o,e){o.uniform1iv(this.addr,e)}function Q2(o,e){o.uniform2iv(this.addr,e)}function K2(o,e){o.uniform3iv(this.addr,e)}function J2(o,e){o.uniform4iv(this.addr,e)}function $2(o,e){o.uniform1uiv(this.addr,e)}function tR(o,e){o.uniform2uiv(this.addr,e)}function eR(o,e){o.uniform3uiv(this.addr,e)}function nR(o,e){o.uniform4uiv(this.addr,e)}function iR(o,e,i){const r=this.cache,l=e.length,c=qc(i,l);Tn(r,c)||(o.uniform1iv(this.addr,c),bn(r,c));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||by,c[h])}function aR(o,e,i){const r=this.cache,l=e.length,c=qc(i,l);Tn(r,c)||(o.uniform1iv(this.addr,c),bn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Ry,c[h])}function rR(o,e,i){const r=this.cache,l=e.length,c=qc(i,l);Tn(r,c)||(o.uniform1iv(this.addr,c),bn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Cy,c[h])}function sR(o,e,i){const r=this.cache,l=e.length,c=qc(i,l);Tn(r,c)||(o.uniform1iv(this.addr,c),bn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||Ay,c[h])}function oR(o){switch(o){case 5126:return V2;case 35664:return k2;case 35665:return X2;case 35666:return q2;case 35674:return Y2;case 35675:return W2;case 35676:return j2;case 5124:case 35670:return Z2;case 35667:case 35671:return Q2;case 35668:case 35672:return K2;case 35669:case 35673:return J2;case 5125:return $2;case 36294:return tR;case 36295:return eR;case 36296:return nR;case 35678:case 36198:case 36298:case 36306:case 35682:return iR;case 35679:case 36299:case 36307:return aR;case 35680:case 36300:case 36308:case 36293:return rR;case 36289:case 36303:case 36311:case 36292:return sR}}class lR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=G2(i.type)}}class uR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=oR(i.type)}}class cR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const np=/(\w+)(\])?(\[|\.)?/g;function wx(o,e){o.seq.push(e),o.map[e.id]=e}function fR(o,e,i){const r=o.name,l=r.length;for(np.lastIndex=0;;){const c=np.exec(r),h=np.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){wx(i,m===void 0?new lR(d,o,e):new uR(d,o,e));break}else{let g=i.map[d];g===void 0&&(g=new cR(d),wx(i,g)),i=g}}}class Ic{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),h=e.getUniformLocation(i,c.name);fR(c,h,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function Dx(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const hR=37297;let dR=0;function pR(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Ux=new pe;function mR(o){Ne._getMatrix(Ux,Ne.workingColorSpace,o);const e=`mat3( ${Ux.elements.map(i=>i.toFixed(4))} )`;switch(Ne.getTransfer(o)){case Fc:return[e,"LinearTransferOETF"];case Xe:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Nx(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),c=(o.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+pR(o.getShaderSource(e),d)}else return c}function gR(o,e){const i=mR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function vR(o,e){let i;switch(e){case Yx:i="Linear";break;case Wx:i="Reinhard";break;case jx:i="Cineon";break;case Kp:i="ACESFilmic";break;case Qx:i="AgX";break;case Kx:i="Neutral";break;case Zx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Uc=new Y;function _R(){Ne.getLuminanceCoefficients(Uc);const o=Uc.x.toFixed(4),e=Uc.y.toFixed(4),i=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Tl).join(`
`)}function yR(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function SR(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),h=c.name;let d=1;c.type===o.FLOAT_MAT2&&(d=2),c.type===o.FLOAT_MAT3&&(d=3),c.type===o.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function Tl(o){return o!==""}function Lx(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ox(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const MR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wp(o){return o.replace(MR,TR)}const ER=new Map;function TR(o,e){let i=ye[e];if(i===void 0){const r=ER.get(e);if(r!==void 0)i=ye[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Wp(i)}const bR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Px(o){return o.replace(bR,AR)}function AR(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function zx(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function RR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Xx?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===HE?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ca&&(e="SHADOWMAP_TYPE_VSM"),e}function CR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case co:case fo:e="ENVMAP_TYPE_CUBE";break;case Xc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case fo:e="ENVMAP_MODE_REFRACTION";break}return e}function DR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case qx:e="ENVMAP_BLENDING_MULTIPLY";break;case r1:e="ENVMAP_BLENDING_MIX";break;case s1:e="ENVMAP_BLENDING_ADD";break}return e}function UR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function NR(o,e,i,r){const l=o.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=RR(i),m=CR(i),_=wR(i),g=DR(i),x=UR(i),S=xR(i),E=yR(c),R=l.createProgram();let M,v,b=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Tl).join(`
`),M.length>0&&(M+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Tl).join(`
`),v.length>0&&(v+=`
`)):(M=[zx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Tl).join(`
`),v=[zx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ua?"#define TONE_MAPPING":"",i.toneMapping!==Ua?ye.tonemapping_pars_fragment:"",i.toneMapping!==Ua?vR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,gR("linearToOutputTexel",i.outputColorSpace),_R(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Tl).join(`
`)),h=Wp(h),h=Lx(h,i),h=Ox(h,i),d=Wp(d),d=Lx(d,i),d=Ox(d,i),h=Px(h),d=Px(d),i.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,M=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,v=["#define varying in",i.glslVersion===F_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===F_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const N=b+M+h,C=b+v+d,I=Dx(l,l.VERTEX_SHADER,N),z=Dx(l,l.FRAGMENT_SHADER,C);l.attachShader(R,I),l.attachShader(R,z),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function P(H){if(o.debug.checkShaderErrors){const W=l.getProgramInfoLog(R)||"",K=l.getShaderInfoLog(I)||"",ht=l.getShaderInfoLog(z)||"",at=W.trim(),F=K.trim(),nt=ht.trim();let j=!0,ct=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(j=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,I,z);else{const St=Nx(l,I,"vertex"),Et=Nx(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+at+`
`+St+`
`+Et)}else at!==""?console.warn("THREE.WebGLProgram: Program Info Log:",at):(F===""||nt==="")&&(ct=!1);ct&&(H.diagnostics={runnable:j,programLog:at,vertexShader:{log:F,prefix:M},fragmentShader:{log:nt,prefix:v}})}l.deleteShader(I),l.deleteShader(z),V=new Ic(l,R),U=SR(l,R)}let V;this.getUniforms=function(){return V===void 0&&P(this),V};let U;this.getAttributes=function(){return U===void 0&&P(this),U};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,hR)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=dR++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=I,this.fragmentShader=z,this}let LR=0;class OR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new PR(e),i.set(e,r)),r}}class PR{constructor(e){this.id=LR++,this.code=e,this.usedTimes=0}}function zR(o,e,i,r,l,c,h){const d=new cy,p=new OR,m=new Set,_=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let S=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(U){return m.add(U),U===0?"uv":`uv${U}`}function M(U,w,H,W,K){const ht=W.fog,at=K.geometry,F=U.isMeshStandardMaterial?W.environment:null,nt=(U.isMeshStandardMaterial?i:e).get(U.envMap||F),j=nt&&nt.mapping===Xc?nt.image.height:null,ct=E[U.type];U.precision!==null&&(S=l.getMaxPrecision(U.precision),S!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",S,"instead."));const St=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Et=St!==void 0?St.length:0;let Ft=0;at.morphAttributes.position!==void 0&&(Ft=1),at.morphAttributes.normal!==void 0&&(Ft=2),at.morphAttributes.color!==void 0&&(Ft=3);let oe,G,dt,k;if(ct){const Ae=na[ct];oe=Ae.vertexShader,G=Ae.fragmentShader}else oe=U.vertexShader,G=U.fragmentShader,p.update(U),dt=p.getVertexShaderID(U),k=p.getFragmentShaderID(U);const Q=o.getRenderTarget(),pt=o.state.buffers.depth.getReversed(),Tt=K.isInstancedMesh===!0,bt=K.isBatchedMesh===!0,yt=!!U.map,Ut=!!U.matcap,O=!!nt,le=!!U.aoMap,qt=!!U.lightMap,Bt=!!U.bumpMap,Ot=!!U.normalMap,$t=!!U.displacementMap,Ht=!!U.emissiveMap,ee=!!U.metalnessMap,Ue=!!U.roughnessMap,Ye=U.anisotropy>0,L=U.clearcoat>0,A=U.dispersion>0,rt=U.iridescence>0,vt=U.sheen>0,At=U.transmission>0,mt=Ye&&!!U.anisotropyMap,Wt=L&&!!U.clearcoatMap,Lt=L&&!!U.clearcoatNormalMap,Zt=L&&!!U.clearcoatRoughnessMap,gt=rt&&!!U.iridescenceMap,Rt=rt&&!!U.iridescenceThicknessMap,Dt=vt&&!!U.sheenColorMap,ie=vt&&!!U.sheenRoughnessMap,te=!!U.specularMap,Gt=!!U.specularColorMap,ge=!!U.specularIntensityMap,q=At&&!!U.transmissionMap,Nt=At&&!!U.thicknessMap,zt=!!U.gradientMap,jt=!!U.alphaMap,Ct=U.alphaTest>0,Mt=!!U.alphaHash,Jt=!!U.extensions;let de=Ua;U.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(de=o.toneMapping);const We={shaderID:ct,shaderType:U.type,shaderName:U.name,vertexShader:oe,fragmentShader:G,defines:U.defines,customVertexShaderID:dt,customFragmentShaderID:k,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:S,batching:bt,batchingColor:bt&&K._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&K.instanceColor!==null,instancingMorph:Tt&&K.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Q===null?o.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ho,alphaToCoverage:!!U.alphaToCoverage,map:yt,matcap:Ut,envMap:O,envMapMode:O&&nt.mapping,envMapCubeUVHeight:j,aoMap:le,lightMap:qt,bumpMap:Bt,normalMap:Ot,displacementMap:x&&$t,emissiveMap:Ht,normalMapObjectSpace:Ot&&U.normalMapType===c1,normalMapTangentSpace:Ot&&U.normalMapType===sy,metalnessMap:ee,roughnessMap:Ue,anisotropy:Ye,anisotropyMap:mt,clearcoat:L,clearcoatMap:Wt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Zt,dispersion:A,iridescence:rt,iridescenceMap:gt,iridescenceThicknessMap:Rt,sheen:vt,sheenColorMap:Dt,sheenRoughnessMap:ie,specularMap:te,specularColorMap:Gt,specularIntensityMap:ge,transmission:At,transmissionMap:q,thicknessMap:Nt,gradientMap:zt,opaque:U.transparent===!1&&U.blending===oo&&U.alphaToCoverage===!1,alphaMap:jt,alphaTest:Ct,alphaHash:Mt,combine:U.combine,mapUv:yt&&R(U.map.channel),aoMapUv:le&&R(U.aoMap.channel),lightMapUv:qt&&R(U.lightMap.channel),bumpMapUv:Bt&&R(U.bumpMap.channel),normalMapUv:Ot&&R(U.normalMap.channel),displacementMapUv:$t&&R(U.displacementMap.channel),emissiveMapUv:Ht&&R(U.emissiveMap.channel),metalnessMapUv:ee&&R(U.metalnessMap.channel),roughnessMapUv:Ue&&R(U.roughnessMap.channel),anisotropyMapUv:mt&&R(U.anisotropyMap.channel),clearcoatMapUv:Wt&&R(U.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&R(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Zt&&R(U.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&R(U.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&R(U.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&R(U.sheenColorMap.channel),sheenRoughnessMapUv:ie&&R(U.sheenRoughnessMap.channel),specularMapUv:te&&R(U.specularMap.channel),specularColorMapUv:Gt&&R(U.specularColorMap.channel),specularIntensityMapUv:ge&&R(U.specularIntensityMap.channel),transmissionMapUv:q&&R(U.transmissionMap.channel),thicknessMapUv:Nt&&R(U.thicknessMap.channel),alphaMapUv:jt&&R(U.alphaMap.channel),vertexTangents:!!at.attributes.tangent&&(Ot||Ye),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!at.attributes.uv&&(yt||jt),fog:!!ht,useFog:U.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:pt,skinning:K.isSkinnedMesh===!0,morphTargets:at.morphAttributes.position!==void 0,morphNormals:at.morphAttributes.normal!==void 0,morphColors:at.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Ft,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:U.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:de,decodeVideoTexture:yt&&U.map.isVideoTexture===!0&&Ne.getTransfer(U.map.colorSpace)===Xe,decodeVideoTextureEmissive:Ht&&U.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(U.emissiveMap.colorSpace)===Xe,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===ia,flipSided:U.side===Gn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:Jt&&U.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&U.extensions.multiDraw===!0||bt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return We.vertexUv1s=m.has(1),We.vertexUv2s=m.has(2),We.vertexUv3s=m.has(3),m.clear(),We}function v(U){const w=[];if(U.shaderID?w.push(U.shaderID):(w.push(U.customVertexShaderID),w.push(U.customFragmentShaderID)),U.defines!==void 0)for(const H in U.defines)w.push(H),w.push(U.defines[H]);return U.isRawShaderMaterial===!1&&(b(w,U),N(w,U),w.push(o.outputColorSpace)),w.push(U.customProgramCacheKey),w.join()}function b(U,w){U.push(w.precision),U.push(w.outputColorSpace),U.push(w.envMapMode),U.push(w.envMapCubeUVHeight),U.push(w.mapUv),U.push(w.alphaMapUv),U.push(w.lightMapUv),U.push(w.aoMapUv),U.push(w.bumpMapUv),U.push(w.normalMapUv),U.push(w.displacementMapUv),U.push(w.emissiveMapUv),U.push(w.metalnessMapUv),U.push(w.roughnessMapUv),U.push(w.anisotropyMapUv),U.push(w.clearcoatMapUv),U.push(w.clearcoatNormalMapUv),U.push(w.clearcoatRoughnessMapUv),U.push(w.iridescenceMapUv),U.push(w.iridescenceThicknessMapUv),U.push(w.sheenColorMapUv),U.push(w.sheenRoughnessMapUv),U.push(w.specularMapUv),U.push(w.specularColorMapUv),U.push(w.specularIntensityMapUv),U.push(w.transmissionMapUv),U.push(w.thicknessMapUv),U.push(w.combine),U.push(w.fogExp2),U.push(w.sizeAttenuation),U.push(w.morphTargetsCount),U.push(w.morphAttributeCount),U.push(w.numDirLights),U.push(w.numPointLights),U.push(w.numSpotLights),U.push(w.numSpotLightMaps),U.push(w.numHemiLights),U.push(w.numRectAreaLights),U.push(w.numDirLightShadows),U.push(w.numPointLightShadows),U.push(w.numSpotLightShadows),U.push(w.numSpotLightShadowsWithMaps),U.push(w.numLightProbes),U.push(w.shadowMapType),U.push(w.toneMapping),U.push(w.numClippingPlanes),U.push(w.numClipIntersection),U.push(w.depthPacking)}function N(U,w){d.disableAll(),w.supportsVertexTextures&&d.enable(0),w.instancing&&d.enable(1),w.instancingColor&&d.enable(2),w.instancingMorph&&d.enable(3),w.matcap&&d.enable(4),w.envMap&&d.enable(5),w.normalMapObjectSpace&&d.enable(6),w.normalMapTangentSpace&&d.enable(7),w.clearcoat&&d.enable(8),w.iridescence&&d.enable(9),w.alphaTest&&d.enable(10),w.vertexColors&&d.enable(11),w.vertexAlphas&&d.enable(12),w.vertexUv1s&&d.enable(13),w.vertexUv2s&&d.enable(14),w.vertexUv3s&&d.enable(15),w.vertexTangents&&d.enable(16),w.anisotropy&&d.enable(17),w.alphaHash&&d.enable(18),w.batching&&d.enable(19),w.dispersion&&d.enable(20),w.batchingColor&&d.enable(21),w.gradientMap&&d.enable(22),U.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),U.push(d.mask)}function C(U){const w=E[U.type];let H;if(w){const W=na[w];H=Pl.clone(W.uniforms)}else H=U.uniforms;return H}function I(U,w){let H;for(let W=0,K=_.length;W<K;W++){const ht=_[W];if(ht.cacheKey===w){H=ht,++H.usedTimes;break}}return H===void 0&&(H=new NR(o,w,U,c),_.push(H)),H}function z(U){if(--U.usedTimes===0){const w=_.indexOf(U);_[w]=_[_.length-1],_.pop(),U.destroy()}}function P(U){p.remove(U)}function V(){p.dispose()}return{getParameters:M,getProgramCacheKey:v,getUniforms:C,acquireProgram:I,releaseProgram:z,releaseShaderCache:P,programs:_,dispose:V}}function IR(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function c(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function BR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function Ix(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Bx(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(g,x,S,E,R,M){let v=o[e];return v===void 0?(v={id:g.id,object:g,geometry:x,material:S,groupOrder:E,renderOrder:g.renderOrder,z:R,group:M},o[e]=v):(v.id=g.id,v.object=g,v.geometry=x,v.material=S,v.groupOrder=E,v.renderOrder=g.renderOrder,v.z=R,v.group=M),e++,v}function d(g,x,S,E,R,M){const v=h(g,x,S,E,R,M);S.transmission>0?r.push(v):S.transparent===!0?l.push(v):i.push(v)}function p(g,x,S,E,R,M){const v=h(g,x,S,E,R,M);S.transmission>0?r.unshift(v):S.transparent===!0?l.unshift(v):i.unshift(v)}function m(g,x){i.length>1&&i.sort(g||BR),r.length>1&&r.sort(x||Ix),l.length>1&&l.sort(x||Ix)}function _(){for(let g=e,x=o.length;g<x;g++){const S=o[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:p,finish:_,sort:m}}function FR(){let o=new WeakMap;function e(r,l){const c=o.get(r);let h;return c===void 0?(h=new Bx,o.set(r,[h])):l>=c.length?(h=new Bx,c.push(h)):h=c[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function HR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Y,color:new ue};break;case"SpotLight":i={position:new Y,direction:new Y,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Y,color:new ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Y,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":i={color:new ue,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return o[e.id]=i,i}}}function GR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new he,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let VR=0;function kR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function XR(o){const e=new HR,i=GR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Y);const l=new Y,c=new qe,h=new qe;function d(m){let _=0,g=0,x=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let S=0,E=0,R=0,M=0,v=0,b=0,N=0,C=0,I=0,z=0,P=0;m.sort(kR);for(let U=0,w=m.length;U<w;U++){const H=m[U],W=H.color,K=H.intensity,ht=H.distance,at=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)_+=W.r*K,g+=W.g*K,x+=W.b*K;else if(H.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(H.sh.coefficients[F],K);P++}else if(H.isDirectionalLight){const F=e.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const nt=H.shadow,j=i.get(H);j.shadowIntensity=nt.intensity,j.shadowBias=nt.bias,j.shadowNormalBias=nt.normalBias,j.shadowRadius=nt.radius,j.shadowMapSize=nt.mapSize,r.directionalShadow[S]=j,r.directionalShadowMap[S]=at,r.directionalShadowMatrix[S]=H.shadow.matrix,b++}r.directional[S]=F,S++}else if(H.isSpotLight){const F=e.get(H);F.position.setFromMatrixPosition(H.matrixWorld),F.color.copy(W).multiplyScalar(K),F.distance=ht,F.coneCos=Math.cos(H.angle),F.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),F.decay=H.decay,r.spot[R]=F;const nt=H.shadow;if(H.map&&(r.spotLightMap[I]=H.map,I++,nt.updateMatrices(H),H.castShadow&&z++),r.spotLightMatrix[R]=nt.matrix,H.castShadow){const j=i.get(H);j.shadowIntensity=nt.intensity,j.shadowBias=nt.bias,j.shadowNormalBias=nt.normalBias,j.shadowRadius=nt.radius,j.shadowMapSize=nt.mapSize,r.spotShadow[R]=j,r.spotShadowMap[R]=at,C++}R++}else if(H.isRectAreaLight){const F=e.get(H);F.color.copy(W).multiplyScalar(K),F.halfWidth.set(H.width*.5,0,0),F.halfHeight.set(0,H.height*.5,0),r.rectArea[M]=F,M++}else if(H.isPointLight){const F=e.get(H);if(F.color.copy(H.color).multiplyScalar(H.intensity),F.distance=H.distance,F.decay=H.decay,H.castShadow){const nt=H.shadow,j=i.get(H);j.shadowIntensity=nt.intensity,j.shadowBias=nt.bias,j.shadowNormalBias=nt.normalBias,j.shadowRadius=nt.radius,j.shadowMapSize=nt.mapSize,j.shadowCameraNear=nt.camera.near,j.shadowCameraFar=nt.camera.far,r.pointShadow[E]=j,r.pointShadowMap[E]=at,r.pointShadowMatrix[E]=H.shadow.matrix,N++}r.point[E]=F,E++}else if(H.isHemisphereLight){const F=e.get(H);F.skyColor.copy(H.color).multiplyScalar(K),F.groundColor.copy(H.groundColor).multiplyScalar(K),r.hemi[v]=F,v++}}M>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=kt.LTC_FLOAT_1,r.rectAreaLTC2=kt.LTC_FLOAT_2):(r.rectAreaLTC1=kt.LTC_HALF_1,r.rectAreaLTC2=kt.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=x;const V=r.hash;(V.directionalLength!==S||V.pointLength!==E||V.spotLength!==R||V.rectAreaLength!==M||V.hemiLength!==v||V.numDirectionalShadows!==b||V.numPointShadows!==N||V.numSpotShadows!==C||V.numSpotMaps!==I||V.numLightProbes!==P)&&(r.directional.length=S,r.spot.length=R,r.rectArea.length=M,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=C,r.spotShadowMap.length=C,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=C+I-z,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=P,V.directionalLength=S,V.pointLength=E,V.spotLength=R,V.rectAreaLength=M,V.hemiLength=v,V.numDirectionalShadows=b,V.numPointShadows=N,V.numSpotShadows=C,V.numSpotMaps=I,V.numLightProbes=P,r.version=VR++)}function p(m,_){let g=0,x=0,S=0,E=0,R=0;const M=_.matrixWorldInverse;for(let v=0,b=m.length;v<b;v++){const N=m[v];if(N.isDirectionalLight){const C=r.directional[g];C.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),g++}else if(N.isSpotLight){const C=r.spot[S];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(M),C.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),C.direction.sub(l),C.direction.transformDirection(M),S++}else if(N.isRectAreaLight){const C=r.rectArea[E];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(M),h.identity(),c.copy(N.matrixWorld),c.premultiply(M),h.extractRotation(c),C.halfWidth.set(N.width*.5,0,0),C.halfHeight.set(0,N.height*.5,0),C.halfWidth.applyMatrix4(h),C.halfHeight.applyMatrix4(h),E++}else if(N.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(N.matrixWorld),C.position.applyMatrix4(M),x++}else if(N.isHemisphereLight){const C=r.hemi[R];C.direction.setFromMatrixPosition(N.matrixWorld),C.direction.transformDirection(M),R++}}}return{setup:d,setupView:p,state:r}}function Fx(o){const e=new XR(o),i=[],r=[];function l(_){m.camera=_,i.length=0,r.length=0}function c(_){i.push(_)}function h(_){r.push(_)}function d(){e.setup(i)}function p(_){e.setupView(i,_)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:h}}function qR(o){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new Fx(o),e.set(l,[d])):c>=h.length?(d=new Fx(o),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const YR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WR=`uniform sampler2D shadow_pass;
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
}`;function jR(o,e,i){let r=new lm;const l=new he,c=new he,h=new ln,d=new vT({depthPacking:u1}),p=new _T,m={},_=i.maxTextureSize,g={[pr]:Gn,[Gn]:pr,[ia]:ia},x=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new he},radius:{value:4}},vertexShader:YR,fragmentShader:WR}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new kn;E.setAttribute("position",new En(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new vn(E,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xx;let v=this.type;this.render=function(z,P,V){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;const U=o.getRenderTarget(),w=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),W=o.state;W.setBlending(Da),W.buffers.depth.getReversed()===!0?W.buffers.color.setClear(0,0,0,0):W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const K=v!==Ca&&this.type===Ca,ht=v===Ca&&this.type!==Ca;for(let at=0,F=z.length;at<F;at++){const nt=z[at],j=nt.shadow;if(j===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;l.copy(j.mapSize);const ct=j.getFrameExtents();if(l.multiply(ct),c.copy(j.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/ct.x),l.x=c.x*ct.x,j.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/ct.y),l.y=c.y*ct.y,j.mapSize.y=c.y)),j.map===null||K===!0||ht===!0){const Et=this.type!==Ca?{minFilter:vi,magFilter:vi}:{};j.map!==null&&j.map.dispose(),j.map=new wi(l.x,l.y,Et),j.map.texture.name=nt.name+".shadowMap",j.camera.updateProjectionMatrix()}o.setRenderTarget(j.map),o.clear();const St=j.getViewportCount();for(let Et=0;Et<St;Et++){const Ft=j.getViewport(Et);h.set(c.x*Ft.x,c.y*Ft.y,c.x*Ft.z,c.y*Ft.w),W.viewport(h),j.updateMatrices(nt,Et),r=j.getFrustum(),C(P,V,j.camera,nt,this.type)}j.isPointLightShadow!==!0&&this.type===Ca&&b(j,V),j.needsUpdate=!1}v=this.type,M.needsUpdate=!1,o.setRenderTarget(U,w,H)};function b(z,P){const V=e.update(R);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,S.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new wi(l.x,l.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(P,null,V,x,R,null),S.uniforms.shadow_pass.value=z.mapPass.texture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(P,null,V,S,R,null)}function N(z,P,V,U){let w=null;const H=V.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(H!==void 0)w=H;else if(w=V.isPointLight===!0?p:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const W=w.uuid,K=P.uuid;let ht=m[W];ht===void 0&&(ht={},m[W]=ht);let at=ht[K];at===void 0&&(at=w.clone(),ht[K]=at,P.addEventListener("dispose",I)),w=at}if(w.visible=P.visible,w.wireframe=P.wireframe,U===Ca?w.side=P.shadowSide!==null?P.shadowSide:P.side:w.side=P.shadowSide!==null?P.shadowSide:g[P.side],w.alphaMap=P.alphaMap,w.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,w.map=P.map,w.clipShadows=P.clipShadows,w.clippingPlanes=P.clippingPlanes,w.clipIntersection=P.clipIntersection,w.displacementMap=P.displacementMap,w.displacementScale=P.displacementScale,w.displacementBias=P.displacementBias,w.wireframeLinewidth=P.wireframeLinewidth,w.linewidth=P.linewidth,V.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const W=o.properties.get(w);W.light=V}return w}function C(z,P,V,U,w){if(z.visible===!1)return;if(z.layers.test(P.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&w===Ca)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,z.matrixWorld);const K=e.update(z),ht=z.material;if(Array.isArray(ht)){const at=K.groups;for(let F=0,nt=at.length;F<nt;F++){const j=at[F],ct=ht[j.materialIndex];if(ct&&ct.visible){const St=N(z,ct,U,w);z.onBeforeShadow(o,z,P,V,K,St,j),o.renderBufferDirect(V,null,K,St,z,j),z.onAfterShadow(o,z,P,V,K,St,j)}}}else if(ht.visible){const at=N(z,ht,U,w);z.onBeforeShadow(o,z,P,V,K,at,null),o.renderBufferDirect(V,null,K,at,z,null),z.onAfterShadow(o,z,P,V,K,at,null)}}const W=z.children;for(let K=0,ht=W.length;K<ht;K++)C(W[K],P,V,U,w)}function I(z){z.target.removeEventListener("dispose",I);for(const V in m){const U=m[V],w=z.target.uuid;w in U&&(U[w].dispose(),delete U[w])}}}const ZR={[op]:lp,[up]:hp,[cp]:dp,[uo]:fp,[lp]:op,[hp]:up,[dp]:cp,[fp]:uo};function QR(o,e){function i(){let q=!1;const Nt=new ln;let zt=null;const jt=new ln(0,0,0,0);return{setMask:function(Ct){zt!==Ct&&!q&&(o.colorMask(Ct,Ct,Ct,Ct),zt=Ct)},setLocked:function(Ct){q=Ct},setClear:function(Ct,Mt,Jt,de,We){We===!0&&(Ct*=de,Mt*=de,Jt*=de),Nt.set(Ct,Mt,Jt,de),jt.equals(Nt)===!1&&(o.clearColor(Ct,Mt,Jt,de),jt.copy(Nt))},reset:function(){q=!1,zt=null,jt.set(-1,0,0,0)}}}function r(){let q=!1,Nt=!1,zt=null,jt=null,Ct=null;return{setReversed:function(Mt){if(Nt!==Mt){const Jt=e.get("EXT_clip_control");Mt?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT),Nt=Mt;const de=Ct;Ct=null,this.setClear(de)}},getReversed:function(){return Nt},setTest:function(Mt){Mt?Q(o.DEPTH_TEST):pt(o.DEPTH_TEST)},setMask:function(Mt){zt!==Mt&&!q&&(o.depthMask(Mt),zt=Mt)},setFunc:function(Mt){if(Nt&&(Mt=ZR[Mt]),jt!==Mt){switch(Mt){case op:o.depthFunc(o.NEVER);break;case lp:o.depthFunc(o.ALWAYS);break;case up:o.depthFunc(o.LESS);break;case uo:o.depthFunc(o.LEQUAL);break;case cp:o.depthFunc(o.EQUAL);break;case fp:o.depthFunc(o.GEQUAL);break;case hp:o.depthFunc(o.GREATER);break;case dp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}jt=Mt}},setLocked:function(Mt){q=Mt},setClear:function(Mt){Ct!==Mt&&(Nt&&(Mt=1-Mt),o.clearDepth(Mt),Ct=Mt)},reset:function(){q=!1,zt=null,jt=null,Ct=null,Nt=!1}}}function l(){let q=!1,Nt=null,zt=null,jt=null,Ct=null,Mt=null,Jt=null,de=null,We=null;return{setTest:function(Ae){q||(Ae?Q(o.STENCIL_TEST):pt(o.STENCIL_TEST))},setMask:function(Ae){Nt!==Ae&&!q&&(o.stencilMask(Ae),Nt=Ae)},setFunc:function(Ae,en,yn){(zt!==Ae||jt!==en||Ct!==yn)&&(o.stencilFunc(Ae,en,yn),zt=Ae,jt=en,Ct=yn)},setOp:function(Ae,en,yn){(Mt!==Ae||Jt!==en||de!==yn)&&(o.stencilOp(Ae,en,yn),Mt=Ae,Jt=en,de=yn)},setLocked:function(Ae){q=Ae},setClear:function(Ae){We!==Ae&&(o.clearStencil(Ae),We=Ae)},reset:function(){q=!1,Nt=null,zt=null,jt=null,Ct=null,Mt=null,Jt=null,de=null,We=null}}}const c=new i,h=new r,d=new l,p=new WeakMap,m=new WeakMap;let _={},g={},x=new WeakMap,S=[],E=null,R=!1,M=null,v=null,b=null,N=null,C=null,I=null,z=null,P=new ue(0,0,0),V=0,U=!1,w=null,H=null,W=null,K=null,ht=null;const at=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,nt=0;const j=o.getParameter(o.VERSION);j.indexOf("WebGL")!==-1?(nt=parseFloat(/^WebGL (\d)/.exec(j)[1]),F=nt>=1):j.indexOf("OpenGL ES")!==-1&&(nt=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),F=nt>=2);let ct=null,St={};const Et=o.getParameter(o.SCISSOR_BOX),Ft=o.getParameter(o.VIEWPORT),oe=new ln().fromArray(Et),G=new ln().fromArray(Ft);function dt(q,Nt,zt,jt){const Ct=new Uint8Array(4),Mt=o.createTexture();o.bindTexture(q,Mt),o.texParameteri(q,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(q,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Jt=0;Jt<zt;Jt++)q===o.TEXTURE_3D||q===o.TEXTURE_2D_ARRAY?o.texImage3D(Nt,0,o.RGBA,1,1,jt,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(Nt+Jt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Mt}const k={};k[o.TEXTURE_2D]=dt(o.TEXTURE_2D,o.TEXTURE_2D,1),k[o.TEXTURE_CUBE_MAP]=dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[o.TEXTURE_2D_ARRAY]=dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),k[o.TEXTURE_3D]=dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Q(o.DEPTH_TEST),h.setFunc(uo),Bt(!1),Ot(O_),Q(o.CULL_FACE),le(Da);function Q(q){_[q]!==!0&&(o.enable(q),_[q]=!0)}function pt(q){_[q]!==!1&&(o.disable(q),_[q]=!1)}function Tt(q,Nt){return g[q]!==Nt?(o.bindFramebuffer(q,Nt),g[q]=Nt,q===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Nt),q===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Nt),!0):!1}function bt(q,Nt){let zt=S,jt=!1;if(q){zt=x.get(Nt),zt===void 0&&(zt=[],x.set(Nt,zt));const Ct=q.textures;if(zt.length!==Ct.length||zt[0]!==o.COLOR_ATTACHMENT0){for(let Mt=0,Jt=Ct.length;Mt<Jt;Mt++)zt[Mt]=o.COLOR_ATTACHMENT0+Mt;zt.length=Ct.length,jt=!0}}else zt[0]!==o.BACK&&(zt[0]=o.BACK,jt=!0);jt&&o.drawBuffers(zt)}function yt(q){return E!==q?(o.useProgram(q),E=q,!0):!1}const Ut={[Wr]:o.FUNC_ADD,[VE]:o.FUNC_SUBTRACT,[kE]:o.FUNC_REVERSE_SUBTRACT};Ut[XE]=o.MIN,Ut[qE]=o.MAX;const O={[YE]:o.ZERO,[WE]:o.ONE,[jE]:o.SRC_COLOR,[rp]:o.SRC_ALPHA,[t1]:o.SRC_ALPHA_SATURATE,[JE]:o.DST_COLOR,[QE]:o.DST_ALPHA,[ZE]:o.ONE_MINUS_SRC_COLOR,[sp]:o.ONE_MINUS_SRC_ALPHA,[$E]:o.ONE_MINUS_DST_COLOR,[KE]:o.ONE_MINUS_DST_ALPHA,[e1]:o.CONSTANT_COLOR,[n1]:o.ONE_MINUS_CONSTANT_COLOR,[i1]:o.CONSTANT_ALPHA,[a1]:o.ONE_MINUS_CONSTANT_ALPHA};function le(q,Nt,zt,jt,Ct,Mt,Jt,de,We,Ae){if(q===Da){R===!0&&(pt(o.BLEND),R=!1);return}if(R===!1&&(Q(o.BLEND),R=!0),q!==GE){if(q!==M||Ae!==U){if((v!==Wr||C!==Wr)&&(o.blendEquation(o.FUNC_ADD),v=Wr,C=Wr),Ae)switch(q){case oo:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Rl:o.blendFunc(o.ONE,o.ONE);break;case P_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case z_:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case oo:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Rl:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case P_:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case z_:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}b=null,N=null,I=null,z=null,P.set(0,0,0),V=0,M=q,U=Ae}return}Ct=Ct||Nt,Mt=Mt||zt,Jt=Jt||jt,(Nt!==v||Ct!==C)&&(o.blendEquationSeparate(Ut[Nt],Ut[Ct]),v=Nt,C=Ct),(zt!==b||jt!==N||Mt!==I||Jt!==z)&&(o.blendFuncSeparate(O[zt],O[jt],O[Mt],O[Jt]),b=zt,N=jt,I=Mt,z=Jt),(de.equals(P)===!1||We!==V)&&(o.blendColor(de.r,de.g,de.b,We),P.copy(de),V=We),M=q,U=!1}function qt(q,Nt){q.side===ia?pt(o.CULL_FACE):Q(o.CULL_FACE);let zt=q.side===Gn;Nt&&(zt=!zt),Bt(zt),q.blending===oo&&q.transparent===!1?le(Da):le(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),h.setFunc(q.depthFunc),h.setTest(q.depthTest),h.setMask(q.depthWrite),c.setMask(q.colorWrite);const jt=q.stencilWrite;d.setTest(jt),jt&&(d.setMask(q.stencilWriteMask),d.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),d.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ht(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?Q(o.SAMPLE_ALPHA_TO_COVERAGE):pt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(q){w!==q&&(q?o.frontFace(o.CW):o.frontFace(o.CCW),w=q)}function Ot(q){q!==BE?(Q(o.CULL_FACE),q!==H&&(q===O_?o.cullFace(o.BACK):q===FE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):pt(o.CULL_FACE),H=q}function $t(q){q!==W&&(F&&o.lineWidth(q),W=q)}function Ht(q,Nt,zt){q?(Q(o.POLYGON_OFFSET_FILL),(K!==Nt||ht!==zt)&&(o.polygonOffset(Nt,zt),K=Nt,ht=zt)):pt(o.POLYGON_OFFSET_FILL)}function ee(q){q?Q(o.SCISSOR_TEST):pt(o.SCISSOR_TEST)}function Ue(q){q===void 0&&(q=o.TEXTURE0+at-1),ct!==q&&(o.activeTexture(q),ct=q)}function Ye(q,Nt,zt){zt===void 0&&(ct===null?zt=o.TEXTURE0+at-1:zt=ct);let jt=St[zt];jt===void 0&&(jt={type:void 0,texture:void 0},St[zt]=jt),(jt.type!==q||jt.texture!==Nt)&&(ct!==zt&&(o.activeTexture(zt),ct=zt),o.bindTexture(q,Nt||k[q]),jt.type=q,jt.texture=Nt)}function L(){const q=St[ct];q!==void 0&&q.type!==void 0&&(o.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function A(){try{o.compressedTexImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function rt(){try{o.compressedTexImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function vt(){try{o.texSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function At(){try{o.texSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function mt(){try{o.compressedTexSubImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Wt(){try{o.compressedTexSubImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Lt(){try{o.texStorage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Zt(){try{o.texStorage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function gt(){try{o.texImage2D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Rt(){try{o.texImage3D(...arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Dt(q){oe.equals(q)===!1&&(o.scissor(q.x,q.y,q.z,q.w),oe.copy(q))}function ie(q){G.equals(q)===!1&&(o.viewport(q.x,q.y,q.z,q.w),G.copy(q))}function te(q,Nt){let zt=m.get(Nt);zt===void 0&&(zt=new WeakMap,m.set(Nt,zt));let jt=zt.get(q);jt===void 0&&(jt=o.getUniformBlockIndex(Nt,q.name),zt.set(q,jt))}function Gt(q,Nt){const jt=m.get(Nt).get(q);p.get(Nt)!==jt&&(o.uniformBlockBinding(Nt,jt,q.__bindingPointIndex),p.set(Nt,jt))}function ge(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},ct=null,St={},g={},x=new WeakMap,S=[],E=null,R=!1,M=null,v=null,b=null,N=null,C=null,I=null,z=null,P=new ue(0,0,0),V=0,U=!1,w=null,H=null,W=null,K=null,ht=null,oe.set(0,0,o.canvas.width,o.canvas.height),G.set(0,0,o.canvas.width,o.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:Q,disable:pt,bindFramebuffer:Tt,drawBuffers:bt,useProgram:yt,setBlending:le,setMaterial:qt,setFlipSided:Bt,setCullFace:Ot,setLineWidth:$t,setPolygonOffset:Ht,setScissorTest:ee,activeTexture:Ue,bindTexture:Ye,unbindTexture:L,compressedTexImage2D:A,compressedTexImage3D:rt,texImage2D:gt,texImage3D:Rt,updateUBOMapping:te,uniformBlockBinding:Gt,texStorage2D:Lt,texStorage3D:Zt,texSubImage2D:vt,texSubImage3D:At,compressedTexSubImage2D:mt,compressedTexSubImage3D:Wt,scissor:Dt,viewport:ie,reset:ge}}function KR(o,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new he,_=new WeakMap;let g;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,A){return S?new OffscreenCanvas(L,A):Gc("canvas")}function R(L,A,rt){let vt=1;const At=Ye(L);if((At.width>rt||At.height>rt)&&(vt=rt/Math.max(At.width,At.height)),vt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const mt=Math.floor(vt*At.width),Wt=Math.floor(vt*At.height);g===void 0&&(g=E(mt,Wt));const Lt=A?E(mt,Wt):g;return Lt.width=mt,Lt.height=Wt,Lt.getContext("2d").drawImage(L,0,0,mt,Wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+At.width+"x"+At.height+") to ("+mt+"x"+Wt+")."),Lt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+At.width+"x"+At.height+")."),L;return L}function M(L){return L.generateMipmaps}function v(L){o.generateMipmap(L)}function b(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function N(L,A,rt,vt,At=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let mt=A;if(A===o.RED&&(rt===o.FLOAT&&(mt=o.R32F),rt===o.HALF_FLOAT&&(mt=o.R16F),rt===o.UNSIGNED_BYTE&&(mt=o.R8)),A===o.RED_INTEGER&&(rt===o.UNSIGNED_BYTE&&(mt=o.R8UI),rt===o.UNSIGNED_SHORT&&(mt=o.R16UI),rt===o.UNSIGNED_INT&&(mt=o.R32UI),rt===o.BYTE&&(mt=o.R8I),rt===o.SHORT&&(mt=o.R16I),rt===o.INT&&(mt=o.R32I)),A===o.RG&&(rt===o.FLOAT&&(mt=o.RG32F),rt===o.HALF_FLOAT&&(mt=o.RG16F),rt===o.UNSIGNED_BYTE&&(mt=o.RG8)),A===o.RG_INTEGER&&(rt===o.UNSIGNED_BYTE&&(mt=o.RG8UI),rt===o.UNSIGNED_SHORT&&(mt=o.RG16UI),rt===o.UNSIGNED_INT&&(mt=o.RG32UI),rt===o.BYTE&&(mt=o.RG8I),rt===o.SHORT&&(mt=o.RG16I),rt===o.INT&&(mt=o.RG32I)),A===o.RGB_INTEGER&&(rt===o.UNSIGNED_BYTE&&(mt=o.RGB8UI),rt===o.UNSIGNED_SHORT&&(mt=o.RGB16UI),rt===o.UNSIGNED_INT&&(mt=o.RGB32UI),rt===o.BYTE&&(mt=o.RGB8I),rt===o.SHORT&&(mt=o.RGB16I),rt===o.INT&&(mt=o.RGB32I)),A===o.RGBA_INTEGER&&(rt===o.UNSIGNED_BYTE&&(mt=o.RGBA8UI),rt===o.UNSIGNED_SHORT&&(mt=o.RGBA16UI),rt===o.UNSIGNED_INT&&(mt=o.RGBA32UI),rt===o.BYTE&&(mt=o.RGBA8I),rt===o.SHORT&&(mt=o.RGBA16I),rt===o.INT&&(mt=o.RGBA32I)),A===o.RGB&&(rt===o.UNSIGNED_INT_5_9_9_9_REV&&(mt=o.RGB9_E5),rt===o.UNSIGNED_INT_10F_11F_11F_REV&&(mt=o.R11F_G11F_B10F)),A===o.RGBA){const Wt=At?Fc:Ne.getTransfer(vt);rt===o.FLOAT&&(mt=o.RGBA32F),rt===o.HALF_FLOAT&&(mt=o.RGBA16F),rt===o.UNSIGNED_BYTE&&(mt=Wt===Xe?o.SRGB8_ALPHA8:o.RGBA8),rt===o.UNSIGNED_SHORT_4_4_4_4&&(mt=o.RGBA4),rt===o.UNSIGNED_SHORT_5_5_5_1&&(mt=o.RGB5_A1)}return(mt===o.R16F||mt===o.R32F||mt===o.RG16F||mt===o.RG32F||mt===o.RGBA16F||mt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),mt}function C(L,A){let rt;return L?A===null||A===Jr||A===wl?rt=o.DEPTH24_STENCIL8:A===ra?rt=o.DEPTH32F_STENCIL8:A===Cl&&(rt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===Jr||A===wl?rt=o.DEPTH_COMPONENT24:A===ra?rt=o.DEPTH_COMPONENT32F:A===Cl&&(rt=o.DEPTH_COMPONENT16),rt}function I(L,A){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==vi&&L.minFilter!==aa?Math.log2(Math.max(A.width,A.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?A.mipmaps.length:1}function z(L){const A=L.target;A.removeEventListener("dispose",z),V(A),A.isVideoTexture&&_.delete(A)}function P(L){const A=L.target;A.removeEventListener("dispose",P),w(A)}function V(L){const A=r.get(L);if(A.__webglInit===void 0)return;const rt=L.source,vt=x.get(rt);if(vt){const At=vt[A.__cacheKey];At.usedTimes--,At.usedTimes===0&&U(L),Object.keys(vt).length===0&&x.delete(rt)}r.remove(L)}function U(L){const A=r.get(L);o.deleteTexture(A.__webglTexture);const rt=L.source,vt=x.get(rt);delete vt[A.__cacheKey],h.memory.textures--}function w(L){const A=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(A.__webglFramebuffer[vt]))for(let At=0;At<A.__webglFramebuffer[vt].length;At++)o.deleteFramebuffer(A.__webglFramebuffer[vt][At]);else o.deleteFramebuffer(A.__webglFramebuffer[vt]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[vt])}else{if(Array.isArray(A.__webglFramebuffer))for(let vt=0;vt<A.__webglFramebuffer.length;vt++)o.deleteFramebuffer(A.__webglFramebuffer[vt]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let vt=0;vt<A.__webglColorRenderbuffer.length;vt++)A.__webglColorRenderbuffer[vt]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[vt]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const rt=L.textures;for(let vt=0,At=rt.length;vt<At;vt++){const mt=r.get(rt[vt]);mt.__webglTexture&&(o.deleteTexture(mt.__webglTexture),h.memory.textures--),r.remove(rt[vt])}r.remove(L)}let H=0;function W(){H=0}function K(){const L=H;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),H+=1,L}function ht(L){const A=[];return A.push(L.wrapS),A.push(L.wrapT),A.push(L.wrapR||0),A.push(L.magFilter),A.push(L.minFilter),A.push(L.anisotropy),A.push(L.internalFormat),A.push(L.format),A.push(L.type),A.push(L.generateMipmaps),A.push(L.premultiplyAlpha),A.push(L.flipY),A.push(L.unpackAlignment),A.push(L.colorSpace),A.join()}function at(L,A){const rt=r.get(L);if(L.isVideoTexture&&ee(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&rt.__version!==L.version){const vt=L.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{k(rt,L,A);return}}else L.isExternalTexture&&(rt.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,rt.__webglTexture,o.TEXTURE0+A)}function F(L,A){const rt=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&rt.__version!==L.version){k(rt,L,A);return}i.bindTexture(o.TEXTURE_2D_ARRAY,rt.__webglTexture,o.TEXTURE0+A)}function nt(L,A){const rt=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&rt.__version!==L.version){k(rt,L,A);return}i.bindTexture(o.TEXTURE_3D,rt.__webglTexture,o.TEXTURE0+A)}function j(L,A){const rt=r.get(L);if(L.version>0&&rt.__version!==L.version){Q(rt,L,A);return}i.bindTexture(o.TEXTURE_CUBE_MAP,rt.__webglTexture,o.TEXTURE0+A)}const ct={[gp]:o.REPEAT,[Zr]:o.CLAMP_TO_EDGE,[vp]:o.MIRRORED_REPEAT},St={[vi]:o.NEAREST,[o1]:o.NEAREST_MIPMAP_NEAREST,[sc]:o.NEAREST_MIPMAP_LINEAR,[aa]:o.LINEAR,[Ad]:o.LINEAR_MIPMAP_NEAREST,[Qr]:o.LINEAR_MIPMAP_LINEAR},Et={[f1]:o.NEVER,[v1]:o.ALWAYS,[h1]:o.LESS,[oy]:o.LEQUAL,[d1]:o.EQUAL,[g1]:o.GEQUAL,[p1]:o.GREATER,[m1]:o.NOTEQUAL};function Ft(L,A){if(A.type===ra&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===aa||A.magFilter===Ad||A.magFilter===sc||A.magFilter===Qr||A.minFilter===aa||A.minFilter===Ad||A.minFilter===sc||A.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,ct[A.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,ct[A.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,ct[A.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,St[A.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,St[A.minFilter]),A.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,Et[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===vi||A.minFilter!==sc&&A.minFilter!==Qr||A.type===ra&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||r.get(A).__currentAnisotropy){const rt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(L,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),r.get(A).__currentAnisotropy=A.anisotropy}}}function oe(L,A){let rt=!1;L.__webglInit===void 0&&(L.__webglInit=!0,A.addEventListener("dispose",z));const vt=A.source;let At=x.get(vt);At===void 0&&(At={},x.set(vt,At));const mt=ht(A);if(mt!==L.__cacheKey){At[mt]===void 0&&(At[mt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,rt=!0),At[mt].usedTimes++;const Wt=At[L.__cacheKey];Wt!==void 0&&(At[L.__cacheKey].usedTimes--,Wt.usedTimes===0&&U(A)),L.__cacheKey=mt,L.__webglTexture=At[mt].texture}return rt}function G(L,A,rt){return Math.floor(Math.floor(L/rt)/A)}function dt(L,A,rt,vt){const mt=L.updateRanges;if(mt.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,A.width,A.height,rt,vt,A.data);else{mt.sort((Rt,Dt)=>Rt.start-Dt.start);let Wt=0;for(let Rt=1;Rt<mt.length;Rt++){const Dt=mt[Wt],ie=mt[Rt],te=Dt.start+Dt.count,Gt=G(ie.start,A.width,4),ge=G(Dt.start,A.width,4);ie.start<=te+1&&Gt===ge&&G(ie.start+ie.count-1,A.width,4)===Gt?Dt.count=Math.max(Dt.count,ie.start+ie.count-Dt.start):(++Wt,mt[Wt]=ie)}mt.length=Wt+1;const Lt=o.getParameter(o.UNPACK_ROW_LENGTH),Zt=o.getParameter(o.UNPACK_SKIP_PIXELS),gt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,A.width);for(let Rt=0,Dt=mt.length;Rt<Dt;Rt++){const ie=mt[Rt],te=Math.floor(ie.start/4),Gt=Math.ceil(ie.count/4),ge=te%A.width,q=Math.floor(te/A.width),Nt=Gt,zt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ge),o.pixelStorei(o.UNPACK_SKIP_ROWS,q),i.texSubImage2D(o.TEXTURE_2D,0,ge,q,Nt,zt,rt,vt,A.data)}L.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Lt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Zt),o.pixelStorei(o.UNPACK_SKIP_ROWS,gt)}}function k(L,A,rt){let vt=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(vt=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(vt=o.TEXTURE_3D);const At=oe(L,A),mt=A.source;i.bindTexture(vt,L.__webglTexture,o.TEXTURE0+rt);const Wt=r.get(mt);if(mt.version!==Wt.__version||At===!0){i.activeTexture(o.TEXTURE0+rt);const Lt=Ne.getPrimaries(Ne.workingColorSpace),Zt=A.colorSpace===dr?null:Ne.getPrimaries(A.colorSpace),gt=A.colorSpace===dr||Lt===Zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);let Rt=R(A.image,!1,l.maxTextureSize);Rt=Ue(A,Rt);const Dt=c.convert(A.format,A.colorSpace),ie=c.convert(A.type);let te=N(A.internalFormat,Dt,ie,A.colorSpace,A.isVideoTexture);Ft(vt,A);let Gt;const ge=A.mipmaps,q=A.isVideoTexture!==!0,Nt=Wt.__version===void 0||At===!0,zt=mt.dataReady,jt=I(A,Rt);if(A.isDepthTexture)te=C(A.format===Ul,A.type),Nt&&(q?i.texStorage2D(o.TEXTURE_2D,1,te,Rt.width,Rt.height):i.texImage2D(o.TEXTURE_2D,0,te,Rt.width,Rt.height,0,Dt,ie,null));else if(A.isDataTexture)if(ge.length>0){q&&Nt&&i.texStorage2D(o.TEXTURE_2D,jt,te,ge[0].width,ge[0].height);for(let Ct=0,Mt=ge.length;Ct<Mt;Ct++)Gt=ge[Ct],q?zt&&i.texSubImage2D(o.TEXTURE_2D,Ct,0,0,Gt.width,Gt.height,Dt,ie,Gt.data):i.texImage2D(o.TEXTURE_2D,Ct,te,Gt.width,Gt.height,0,Dt,ie,Gt.data);A.generateMipmaps=!1}else q?(Nt&&i.texStorage2D(o.TEXTURE_2D,jt,te,Rt.width,Rt.height),zt&&dt(A,Rt,Dt,ie)):i.texImage2D(o.TEXTURE_2D,0,te,Rt.width,Rt.height,0,Dt,ie,Rt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){q&&Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,jt,te,ge[0].width,ge[0].height,Rt.depth);for(let Ct=0,Mt=ge.length;Ct<Mt;Ct++)if(Gt=ge[Ct],A.format!==Hi)if(Dt!==null)if(q){if(zt)if(A.layerUpdates.size>0){const Jt=mx(Gt.width,Gt.height,A.format,A.type);for(const de of A.layerUpdates){const We=Gt.data.subarray(de*Jt/Gt.data.BYTES_PER_ELEMENT,(de+1)*Jt/Gt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ct,0,0,de,Gt.width,Gt.height,1,Dt,We)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Ct,0,0,0,Gt.width,Gt.height,Rt.depth,Dt,Gt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Ct,te,Gt.width,Gt.height,Rt.depth,0,Gt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else q?zt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Ct,0,0,0,Gt.width,Gt.height,Rt.depth,Dt,ie,Gt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Ct,te,Gt.width,Gt.height,Rt.depth,0,Dt,ie,Gt.data)}else{q&&Nt&&i.texStorage2D(o.TEXTURE_2D,jt,te,ge[0].width,ge[0].height);for(let Ct=0,Mt=ge.length;Ct<Mt;Ct++)Gt=ge[Ct],A.format!==Hi?Dt!==null?q?zt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Ct,0,0,Gt.width,Gt.height,Dt,Gt.data):i.compressedTexImage2D(o.TEXTURE_2D,Ct,te,Gt.width,Gt.height,0,Gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):q?zt&&i.texSubImage2D(o.TEXTURE_2D,Ct,0,0,Gt.width,Gt.height,Dt,ie,Gt.data):i.texImage2D(o.TEXTURE_2D,Ct,te,Gt.width,Gt.height,0,Dt,ie,Gt.data)}else if(A.isDataArrayTexture)if(q){if(Nt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,jt,te,Rt.width,Rt.height,Rt.depth),zt)if(A.layerUpdates.size>0){const Ct=mx(Rt.width,Rt.height,A.format,A.type);for(const Mt of A.layerUpdates){const Jt=Rt.data.subarray(Mt*Ct/Rt.data.BYTES_PER_ELEMENT,(Mt+1)*Ct/Rt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Mt,Rt.width,Rt.height,1,Dt,ie,Jt)}A.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Rt.width,Rt.height,Rt.depth,Dt,ie,Rt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,te,Rt.width,Rt.height,Rt.depth,0,Dt,ie,Rt.data);else if(A.isData3DTexture)q?(Nt&&i.texStorage3D(o.TEXTURE_3D,jt,te,Rt.width,Rt.height,Rt.depth),zt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Rt.width,Rt.height,Rt.depth,Dt,ie,Rt.data)):i.texImage3D(o.TEXTURE_3D,0,te,Rt.width,Rt.height,Rt.depth,0,Dt,ie,Rt.data);else if(A.isFramebufferTexture){if(Nt)if(q)i.texStorage2D(o.TEXTURE_2D,jt,te,Rt.width,Rt.height);else{let Ct=Rt.width,Mt=Rt.height;for(let Jt=0;Jt<jt;Jt++)i.texImage2D(o.TEXTURE_2D,Jt,te,Ct,Mt,0,Dt,ie,null),Ct>>=1,Mt>>=1}}else if(ge.length>0){if(q&&Nt){const Ct=Ye(ge[0]);i.texStorage2D(o.TEXTURE_2D,jt,te,Ct.width,Ct.height)}for(let Ct=0,Mt=ge.length;Ct<Mt;Ct++)Gt=ge[Ct],q?zt&&i.texSubImage2D(o.TEXTURE_2D,Ct,0,0,Dt,ie,Gt):i.texImage2D(o.TEXTURE_2D,Ct,te,Dt,ie,Gt);A.generateMipmaps=!1}else if(q){if(Nt){const Ct=Ye(Rt);i.texStorage2D(o.TEXTURE_2D,jt,te,Ct.width,Ct.height)}zt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Dt,ie,Rt)}else i.texImage2D(o.TEXTURE_2D,0,te,Dt,ie,Rt);M(A)&&v(vt),Wt.__version=mt.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function Q(L,A,rt){if(A.image.length!==6)return;const vt=oe(L,A),At=A.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+rt);const mt=r.get(At);if(At.version!==mt.__version||vt===!0){i.activeTexture(o.TEXTURE0+rt);const Wt=Ne.getPrimaries(Ne.workingColorSpace),Lt=A.colorSpace===dr?null:Ne.getPrimaries(A.colorSpace),Zt=A.colorSpace===dr||Wt===Lt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);const gt=A.isCompressedTexture||A.image[0].isCompressedTexture,Rt=A.image[0]&&A.image[0].isDataTexture,Dt=[];for(let Mt=0;Mt<6;Mt++)!gt&&!Rt?Dt[Mt]=R(A.image[Mt],!0,l.maxCubemapSize):Dt[Mt]=Rt?A.image[Mt].image:A.image[Mt],Dt[Mt]=Ue(A,Dt[Mt]);const ie=Dt[0],te=c.convert(A.format,A.colorSpace),Gt=c.convert(A.type),ge=N(A.internalFormat,te,Gt,A.colorSpace),q=A.isVideoTexture!==!0,Nt=mt.__version===void 0||vt===!0,zt=At.dataReady;let jt=I(A,ie);Ft(o.TEXTURE_CUBE_MAP,A);let Ct;if(gt){q&&Nt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,jt,ge,ie.width,ie.height);for(let Mt=0;Mt<6;Mt++){Ct=Dt[Mt].mipmaps;for(let Jt=0;Jt<Ct.length;Jt++){const de=Ct[Jt];A.format!==Hi?te!==null?q?zt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Jt,0,0,de.width,de.height,te,de.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Jt,ge,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):q?zt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Jt,0,0,de.width,de.height,te,Gt,de.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Jt,ge,de.width,de.height,0,te,Gt,de.data)}}}else{if(Ct=A.mipmaps,q&&Nt){Ct.length>0&&jt++;const Mt=Ye(Dt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,jt,ge,Mt.width,Mt.height)}for(let Mt=0;Mt<6;Mt++)if(Rt){q?zt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,Dt[Mt].width,Dt[Mt].height,te,Gt,Dt[Mt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ge,Dt[Mt].width,Dt[Mt].height,0,te,Gt,Dt[Mt].data);for(let Jt=0;Jt<Ct.length;Jt++){const We=Ct[Jt].image[Mt].image;q?zt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Jt+1,0,0,We.width,We.height,te,Gt,We.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Jt+1,ge,We.width,We.height,0,te,Gt,We.data)}}else{q?zt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,0,0,te,Gt,Dt[Mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0,ge,te,Gt,Dt[Mt]);for(let Jt=0;Jt<Ct.length;Jt++){const de=Ct[Jt];q?zt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Jt+1,0,0,te,Gt,de.image[Mt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Jt+1,ge,te,Gt,de.image[Mt])}}}M(A)&&v(o.TEXTURE_CUBE_MAP),mt.__version=At.version,A.onUpdate&&A.onUpdate(A)}L.__version=A.version}function pt(L,A,rt,vt,At,mt){const Wt=c.convert(rt.format,rt.colorSpace),Lt=c.convert(rt.type),Zt=N(rt.internalFormat,Wt,Lt,rt.colorSpace),gt=r.get(A),Rt=r.get(rt);if(Rt.__renderTarget=A,!gt.__hasExternalTextures){const Dt=Math.max(1,A.width>>mt),ie=Math.max(1,A.height>>mt);At===o.TEXTURE_3D||At===o.TEXTURE_2D_ARRAY?i.texImage3D(At,mt,Zt,Dt,ie,A.depth,0,Wt,Lt,null):i.texImage2D(At,mt,Zt,Dt,ie,0,Wt,Lt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),Ht(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,vt,At,Rt.__webglTexture,0,$t(A)):(At===o.TEXTURE_2D||At>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&At<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,vt,At,Rt.__webglTexture,mt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Tt(L,A,rt){if(o.bindRenderbuffer(o.RENDERBUFFER,L),A.depthBuffer){const vt=A.depthTexture,At=vt&&vt.isDepthTexture?vt.type:null,mt=C(A.stencilBuffer,At),Wt=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Lt=$t(A);Ht(A)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Lt,mt,A.width,A.height):rt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Lt,mt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,mt,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Wt,o.RENDERBUFFER,L)}else{const vt=A.textures;for(let At=0;At<vt.length;At++){const mt=vt[At],Wt=c.convert(mt.format,mt.colorSpace),Lt=c.convert(mt.type),Zt=N(mt.internalFormat,Wt,Lt,mt.colorSpace),gt=$t(A);rt&&Ht(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,gt,Zt,A.width,A.height):Ht(A)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,gt,Zt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Zt,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function bt(L,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=r.get(A.depthTexture);vt.__renderTarget=A,(!vt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),at(A.depthTexture,0);const At=vt.__webglTexture,mt=$t(A);if(A.depthTexture.format===Dl)Ht(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,At,0,mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,At,0);else if(A.depthTexture.format===Ul)Ht(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,At,0,mt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,At,0);else throw new Error("Unknown depthTexture format")}function yt(L){const A=r.get(L),rt=L.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==L.depthTexture){const vt=L.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),vt){const At=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,vt.removeEventListener("dispose",At)};vt.addEventListener("dispose",At),A.__depthDisposeCallback=At}A.__boundDepthTexture=vt}if(L.depthTexture&&!A.__autoAllocateDepthBuffer){if(rt)throw new Error("target.depthTexture not supported in Cube render targets");const vt=L.texture.mipmaps;vt&&vt.length>0?bt(A.__webglFramebuffer[0],L):bt(A.__webglFramebuffer,L)}else if(rt){A.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[vt]),A.__webglDepthbuffer[vt]===void 0)A.__webglDepthbuffer[vt]=o.createRenderbuffer(),Tt(A.__webglDepthbuffer[vt],L,!1);else{const At=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=A.__webglDepthbuffer[vt];o.bindRenderbuffer(o.RENDERBUFFER,mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,At,o.RENDERBUFFER,mt)}}else{const vt=L.texture.mipmaps;if(vt&&vt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),Tt(A.__webglDepthbuffer,L,!1);else{const At=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,mt=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,mt),o.framebufferRenderbuffer(o.FRAMEBUFFER,At,o.RENDERBUFFER,mt)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ut(L,A,rt){const vt=r.get(L);A!==void 0&&pt(vt.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),rt!==void 0&&yt(L)}function O(L){const A=L.texture,rt=r.get(L),vt=r.get(A);L.addEventListener("dispose",P);const At=L.textures,mt=L.isWebGLCubeRenderTarget===!0,Wt=At.length>1;if(Wt||(vt.__webglTexture===void 0&&(vt.__webglTexture=o.createTexture()),vt.__version=A.version,h.memory.textures++),mt){rt.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(A.mipmaps&&A.mipmaps.length>0){rt.__webglFramebuffer[Lt]=[];for(let Zt=0;Zt<A.mipmaps.length;Zt++)rt.__webglFramebuffer[Lt][Zt]=o.createFramebuffer()}else rt.__webglFramebuffer[Lt]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){rt.__webglFramebuffer=[];for(let Lt=0;Lt<A.mipmaps.length;Lt++)rt.__webglFramebuffer[Lt]=o.createFramebuffer()}else rt.__webglFramebuffer=o.createFramebuffer();if(Wt)for(let Lt=0,Zt=At.length;Lt<Zt;Lt++){const gt=r.get(At[Lt]);gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&Ht(L)===!1){rt.__webglMultisampledFramebuffer=o.createFramebuffer(),rt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let Lt=0;Lt<At.length;Lt++){const Zt=At[Lt];rt.__webglColorRenderbuffer[Lt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,rt.__webglColorRenderbuffer[Lt]);const gt=c.convert(Zt.format,Zt.colorSpace),Rt=c.convert(Zt.type),Dt=N(Zt.internalFormat,gt,Rt,Zt.colorSpace,L.isXRRenderTarget===!0),ie=$t(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,ie,Dt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.RENDERBUFFER,rt.__webglColorRenderbuffer[Lt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(rt.__webglDepthRenderbuffer=o.createRenderbuffer(),Tt(rt.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(mt){i.bindTexture(o.TEXTURE_CUBE_MAP,vt.__webglTexture),Ft(o.TEXTURE_CUBE_MAP,A);for(let Lt=0;Lt<6;Lt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Zt=0;Zt<A.mipmaps.length;Zt++)pt(rt.__webglFramebuffer[Lt][Zt],L,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Zt);else pt(rt.__webglFramebuffer[Lt],L,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);M(A)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Wt){for(let Lt=0,Zt=At.length;Lt<Zt;Lt++){const gt=At[Lt],Rt=r.get(gt);let Dt=o.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Dt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,Rt.__webglTexture),Ft(Dt,gt),pt(rt.__webglFramebuffer,L,gt,o.COLOR_ATTACHMENT0+Lt,Dt,0),M(gt)&&v(Dt)}i.unbindTexture()}else{let Lt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Lt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Lt,vt.__webglTexture),Ft(Lt,A),A.mipmaps&&A.mipmaps.length>0)for(let Zt=0;Zt<A.mipmaps.length;Zt++)pt(rt.__webglFramebuffer[Zt],L,A,o.COLOR_ATTACHMENT0,Lt,Zt);else pt(rt.__webglFramebuffer,L,A,o.COLOR_ATTACHMENT0,Lt,0);M(A)&&v(Lt),i.unbindTexture()}L.depthBuffer&&yt(L)}function le(L){const A=L.textures;for(let rt=0,vt=A.length;rt<vt;rt++){const At=A[rt];if(M(At)){const mt=b(L),Wt=r.get(At).__webglTexture;i.bindTexture(mt,Wt),v(mt),i.unbindTexture()}}}const qt=[],Bt=[];function Ot(L){if(L.samples>0){if(Ht(L)===!1){const A=L.textures,rt=L.width,vt=L.height;let At=o.COLOR_BUFFER_BIT;const mt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Wt=r.get(L),Lt=A.length>1;if(Lt)for(let gt=0;gt<A.length;gt++)i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+gt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+gt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer);const Zt=L.texture.mipmaps;Zt&&Zt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let gt=0;gt<A.length;gt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(At|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(At|=o.STENCIL_BUFFER_BIT)),Lt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[gt]);const Rt=r.get(A[gt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Rt,0)}o.blitFramebuffer(0,0,rt,vt,0,0,rt,vt,At,o.NEAREST),p===!0&&(qt.length=0,Bt.length=0,qt.push(o.COLOR_ATTACHMENT0+gt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(qt.push(mt),Bt.push(mt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Bt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,qt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Lt)for(let gt=0;gt<A.length;gt++){i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+gt,o.RENDERBUFFER,Wt.__webglColorRenderbuffer[gt]);const Rt=r.get(A[gt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Wt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+gt,o.TEXTURE_2D,Rt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&p){const A=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function $t(L){return Math.min(l.maxSamples,L.samples)}function Ht(L){const A=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function ee(L){const A=h.render.frame;_.get(L)!==A&&(_.set(L,A),L.update())}function Ue(L,A){const rt=L.colorSpace,vt=L.format,At=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||rt!==ho&&rt!==dr&&(Ne.getTransfer(rt)===Xe?(vt!==Hi||At!==Vi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",rt)),A}function Ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(m.width=L.naturalWidth||L.width,m.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(m.width=L.displayWidth,m.height=L.displayHeight):(m.width=L.width,m.height=L.height),m}this.allocateTextureUnit=K,this.resetTextureUnits=W,this.setTexture2D=at,this.setTexture2DArray=F,this.setTexture3D=nt,this.setTextureCube=j,this.rebindTextures=Ut,this.setupRenderTarget=O,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=Ot,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Ht}function JR(o,e){function i(r,l=dr){let c;const h=Ne.getTransfer(l);if(r===Vi)return o.UNSIGNED_BYTE;if(r===$p)return o.UNSIGNED_SHORT_4_4_4_4;if(r===tm)return o.UNSIGNED_SHORT_5_5_5_1;if(r===ey)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===ny)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===$x)return o.BYTE;if(r===ty)return o.SHORT;if(r===Cl)return o.UNSIGNED_SHORT;if(r===Jp)return o.INT;if(r===Jr)return o.UNSIGNED_INT;if(r===ra)return o.FLOAT;if(r===Gi)return o.HALF_FLOAT;if(r===iy)return o.ALPHA;if(r===ay)return o.RGB;if(r===Hi)return o.RGBA;if(r===Dl)return o.DEPTH_COMPONENT;if(r===Ul)return o.DEPTH_STENCIL;if(r===em)return o.RED;if(r===nm)return o.RED_INTEGER;if(r===ry)return o.RG;if(r===im)return o.RG_INTEGER;if(r===am)return o.RGBA_INTEGER;if(r===Lc||r===Oc||r===Pc||r===zc)if(h===Xe)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Lc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===zc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Lc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Oc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===zc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===_p||r===xp||r===yp||r===Sp)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===_p)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===xp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===yp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Sp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Mp||r===Ep||r===Tp)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Mp||r===Ep)return h===Xe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Tp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bp||r===Ap||r===Rp||r===Cp||r===wp||r===Dp||r===Up||r===Np||r===Lp||r===Op||r===Pp||r===zp||r===Ip||r===Bp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===bp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ap)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Rp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Cp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===wp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Dp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Up)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Np)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Lp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Op)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Pp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===zp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Ip)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Bp)return h===Xe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Fp||r===Hp||r===Gp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Fp)return h===Xe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Hp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Gp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Vp||r===kp||r===Xp||r===qp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Vp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===kp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Xp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===qp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===wl?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const $R=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tC=`
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

}`;class eC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Sy(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new an({vertexShader:$R,fragmentShader:tC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new vn(new xo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nC extends go{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",p=1,m=null,_=null,g=null,x=null,S=null,E=null;const R=typeof XRWebGLBinding<"u",M=new eC,v={},b=i.getContextAttributes();let N=null,C=null;const I=[],z=[],P=new he;let V=null;const U=new mi;U.viewport=new ln;const w=new mi;w.viewport=new ln;const H=[U,w],W=new ET;let K=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let Q=I[k];return Q===void 0&&(Q=new Wd,I[k]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(k){let Q=I[k];return Q===void 0&&(Q=new Wd,I[k]=Q),Q.getGripSpace()},this.getHand=function(k){let Q=I[k];return Q===void 0&&(Q=new Wd,I[k]=Q),Q.getHandSpace()};function at(k){const Q=z.indexOf(k.inputSource);if(Q===-1)return;const pt=I[Q];pt!==void 0&&(pt.update(k.inputSource,k.frame,m||h),pt.dispatchEvent({type:k.type,data:k.inputSource}))}function F(){l.removeEventListener("select",at),l.removeEventListener("selectstart",at),l.removeEventListener("selectend",at),l.removeEventListener("squeeze",at),l.removeEventListener("squeezestart",at),l.removeEventListener("squeezeend",at),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",nt);for(let k=0;k<I.length;k++){const Q=z[k];Q!==null&&(z[k]=null,I[k].disconnect(Q))}K=null,ht=null,M.reset();for(const k in v)delete v[k];e.setRenderTarget(N),S=null,x=null,g=null,l=null,C=null,dt.stop(),r.isPresenting=!1,e.setPixelRatio(V),e.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){c=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){d=k,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(k){m=k},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return g===null&&R&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(k){if(l=k,l!==null){if(N=e.getRenderTarget(),l.addEventListener("select",at),l.addEventListener("selectstart",at),l.addEventListener("selectend",at),l.addEventListener("squeeze",at),l.addEventListener("squeezestart",at),l.addEventListener("squeezeend",at),l.addEventListener("end",F),l.addEventListener("inputsourceschange",nt),b.xrCompatible!==!0&&await i.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(P),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let pt=null,Tt=null,bt=null;b.depth&&(bt=b.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,pt=b.stencil?Ul:Dl,Tt=b.stencil?wl:Jr);const yt={colorFormat:i.RGBA8,depthFormat:bt,scaleFactor:c};g=this.getBinding(),x=g.createProjectionLayer(yt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),C=new wi(x.textureWidth,x.textureHeight,{format:Hi,type:Vi,depthTexture:new yy(x.textureWidth,x.textureHeight,Tt,void 0,void 0,void 0,void 0,void 0,void 0,pt),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const pt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,i,pt),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new wi(S.framebufferWidth,S.framebufferHeight,{format:Hi,type:Vi,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),dt.setContext(l),dt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function nt(k){for(let Q=0;Q<k.removed.length;Q++){const pt=k.removed[Q],Tt=z.indexOf(pt);Tt>=0&&(z[Tt]=null,I[Tt].disconnect(pt))}for(let Q=0;Q<k.added.length;Q++){const pt=k.added[Q];let Tt=z.indexOf(pt);if(Tt===-1){for(let yt=0;yt<I.length;yt++)if(yt>=z.length){z.push(pt),Tt=yt;break}else if(z[yt]===null){z[yt]=pt,Tt=yt;break}if(Tt===-1)break}const bt=I[Tt];bt&&bt.connect(pt)}}const j=new Y,ct=new Y;function St(k,Q,pt){j.setFromMatrixPosition(Q.matrixWorld),ct.setFromMatrixPosition(pt.matrixWorld);const Tt=j.distanceTo(ct),bt=Q.projectionMatrix.elements,yt=pt.projectionMatrix.elements,Ut=bt[14]/(bt[10]-1),O=bt[14]/(bt[10]+1),le=(bt[9]+1)/bt[5],qt=(bt[9]-1)/bt[5],Bt=(bt[8]-1)/bt[0],Ot=(yt[8]+1)/yt[0],$t=Ut*Bt,Ht=Ut*Ot,ee=Tt/(-Bt+Ot),Ue=ee*-Bt;if(Q.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Ue),k.translateZ(ee),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),bt[10]===-1)k.projectionMatrix.copy(Q.projectionMatrix),k.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const Ye=Ut+ee,L=O+ee,A=$t-Ue,rt=Ht+(Tt-Ue),vt=le*O/L*Ye,At=qt*O/L*Ye;k.projectionMatrix.makePerspective(A,rt,vt,At,Ye,L),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function Et(k,Q){Q===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(Q.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(l===null)return;let Q=k.near,pt=k.far;M.texture!==null&&(M.depthNear>0&&(Q=M.depthNear),M.depthFar>0&&(pt=M.depthFar)),W.near=w.near=U.near=Q,W.far=w.far=U.far=pt,(K!==W.near||ht!==W.far)&&(l.updateRenderState({depthNear:W.near,depthFar:W.far}),K=W.near,ht=W.far),W.layers.mask=k.layers.mask|6,U.layers.mask=W.layers.mask&3,w.layers.mask=W.layers.mask&5;const Tt=k.parent,bt=W.cameras;Et(W,Tt);for(let yt=0;yt<bt.length;yt++)Et(bt[yt],Tt);bt.length===2?St(W,U,w):W.projectionMatrix.copy(U.projectionMatrix),Ft(k,W,Tt)};function Ft(k,Q,pt){pt===null?k.matrix.copy(Q.matrixWorld):(k.matrix.copy(pt.matrixWorld),k.matrix.invert(),k.matrix.multiply(Q.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(Q.projectionMatrix),k.projectionMatrixInverse.copy(Q.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=Nl*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return W},this.getFoveation=function(){if(!(x===null&&S===null))return p},this.setFoveation=function(k){p=k,x!==null&&(x.fixedFoveation=k),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=k)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(W)},this.getCameraTexture=function(k){return v[k]};let oe=null;function G(k,Q){if(_=Q.getViewerPose(m||h),E=Q,_!==null){const pt=_.views;S!==null&&(e.setRenderTargetFramebuffer(C,S.framebuffer),e.setRenderTarget(C));let Tt=!1;pt.length!==W.cameras.length&&(W.cameras.length=0,Tt=!0);for(let O=0;O<pt.length;O++){const le=pt[O];let qt=null;if(S!==null)qt=S.getViewport(le);else{const Ot=g.getViewSubImage(x,le);qt=Ot.viewport,O===0&&(e.setRenderTargetTextures(C,Ot.colorTexture,Ot.depthStencilTexture),e.setRenderTarget(C))}let Bt=H[O];Bt===void 0&&(Bt=new mi,Bt.layers.enable(O),Bt.viewport=new ln,H[O]=Bt),Bt.matrix.fromArray(le.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(le.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(qt.x,qt.y,qt.width,qt.height),O===0&&(W.matrix.copy(Bt.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale)),Tt===!0&&W.cameras.push(Bt)}const bt=l.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){g=r.getBinding();const O=g.getDepthInformation(pt[0]);O&&O.isValid&&O.texture&&M.init(O,l.renderState)}if(bt&&bt.includes("camera-access")&&R){e.state.unbindTexture(),g=r.getBinding();for(let O=0;O<pt.length;O++){const le=pt[O].camera;if(le){let qt=v[le];qt||(qt=new Sy,v[le]=qt);const Bt=g.getCameraImage(le);qt.sourceTexture=Bt}}}}for(let pt=0;pt<I.length;pt++){const Tt=z[pt],bt=I[pt];Tt!==null&&bt!==void 0&&bt.update(Tt,Q,m||h)}oe&&oe(k,Q),Q.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:Q}),E=null}const dt=new Ty;dt.setAnimationLoop(G),this.setAnimationLoop=function(k){oe=k},this.dispose=function(){}}}const Xr=new ki,iC=new qe;function aC(o,e){function i(M,v){M.matrixAutoUpdate===!0&&M.updateMatrix(),v.value.copy(M.matrix)}function r(M,v){v.color.getRGB(M.fogColor.value,py(o)),v.isFog?(M.fogNear.value=v.near,M.fogFar.value=v.far):v.isFogExp2&&(M.fogDensity.value=v.density)}function l(M,v,b,N,C){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(M,v):v.isMeshToonMaterial?(c(M,v),g(M,v)):v.isMeshPhongMaterial?(c(M,v),_(M,v)):v.isMeshStandardMaterial?(c(M,v),x(M,v),v.isMeshPhysicalMaterial&&S(M,v,C)):v.isMeshMatcapMaterial?(c(M,v),E(M,v)):v.isMeshDepthMaterial?c(M,v):v.isMeshDistanceMaterial?(c(M,v),R(M,v)):v.isMeshNormalMaterial?c(M,v):v.isLineBasicMaterial?(h(M,v),v.isLineDashedMaterial&&d(M,v)):v.isPointsMaterial?p(M,v,b,N):v.isSpriteMaterial?m(M,v):v.isShadowMaterial?(M.color.value.copy(v.color),M.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(M,v){M.opacity.value=v.opacity,v.color&&M.diffuse.value.copy(v.color),v.emissive&&M.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.bumpMap&&(M.bumpMap.value=v.bumpMap,i(v.bumpMap,M.bumpMapTransform),M.bumpScale.value=v.bumpScale,v.side===Gn&&(M.bumpScale.value*=-1)),v.normalMap&&(M.normalMap.value=v.normalMap,i(v.normalMap,M.normalMapTransform),M.normalScale.value.copy(v.normalScale),v.side===Gn&&M.normalScale.value.negate()),v.displacementMap&&(M.displacementMap.value=v.displacementMap,i(v.displacementMap,M.displacementMapTransform),M.displacementScale.value=v.displacementScale,M.displacementBias.value=v.displacementBias),v.emissiveMap&&(M.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,M.emissiveMapTransform)),v.specularMap&&(M.specularMap.value=v.specularMap,i(v.specularMap,M.specularMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest);const b=e.get(v),N=b.envMap,C=b.envMapRotation;N&&(M.envMap.value=N,Xr.copy(C),Xr.x*=-1,Xr.y*=-1,Xr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Xr.y*=-1,Xr.z*=-1),M.envMapRotation.value.setFromMatrix4(iC.makeRotationFromEuler(Xr)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=v.reflectivity,M.ior.value=v.ior,M.refractionRatio.value=v.refractionRatio),v.lightMap&&(M.lightMap.value=v.lightMap,M.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,M.lightMapTransform)),v.aoMap&&(M.aoMap.value=v.aoMap,M.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,M.aoMapTransform))}function h(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform))}function d(M,v){M.dashSize.value=v.dashSize,M.totalSize.value=v.dashSize+v.gapSize,M.scale.value=v.scale}function p(M,v,b,N){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.size.value=v.size*b,M.scale.value=N*.5,v.map&&(M.map.value=v.map,i(v.map,M.uvTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function m(M,v){M.diffuse.value.copy(v.color),M.opacity.value=v.opacity,M.rotation.value=v.rotation,v.map&&(M.map.value=v.map,i(v.map,M.mapTransform)),v.alphaMap&&(M.alphaMap.value=v.alphaMap,i(v.alphaMap,M.alphaMapTransform)),v.alphaTest>0&&(M.alphaTest.value=v.alphaTest)}function _(M,v){M.specular.value.copy(v.specular),M.shininess.value=Math.max(v.shininess,1e-4)}function g(M,v){v.gradientMap&&(M.gradientMap.value=v.gradientMap)}function x(M,v){M.metalness.value=v.metalness,v.metalnessMap&&(M.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,M.metalnessMapTransform)),M.roughness.value=v.roughness,v.roughnessMap&&(M.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,M.roughnessMapTransform)),v.envMap&&(M.envMapIntensity.value=v.envMapIntensity)}function S(M,v,b){M.ior.value=v.ior,v.sheen>0&&(M.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),M.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(M.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,M.sheenColorMapTransform)),v.sheenRoughnessMap&&(M.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,M.sheenRoughnessMapTransform))),v.clearcoat>0&&(M.clearcoat.value=v.clearcoat,M.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(M.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,M.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(M.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Gn&&M.clearcoatNormalScale.value.negate())),v.dispersion>0&&(M.dispersion.value=v.dispersion),v.iridescence>0&&(M.iridescence.value=v.iridescence,M.iridescenceIOR.value=v.iridescenceIOR,M.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(M.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,M.iridescenceMapTransform)),v.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),v.transmission>0&&(M.transmission.value=v.transmission,M.transmissionSamplerMap.value=b.texture,M.transmissionSamplerSize.value.set(b.width,b.height),v.transmissionMap&&(M.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,M.transmissionMapTransform)),M.thickness.value=v.thickness,v.thicknessMap&&(M.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=v.attenuationDistance,M.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(M.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(M.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=v.specularIntensity,M.specularColor.value.copy(v.specularColor),v.specularColorMap&&(M.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,M.specularColorMapTransform)),v.specularIntensityMap&&(M.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,v){v.matcap&&(M.matcap.value=v.matcap)}function R(M,v){const b=e.get(v).light;M.referencePosition.value.setFromMatrixPosition(b.matrixWorld),M.nearDistance.value=b.shadow.camera.near,M.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function rC(o,e,i,r){let l={},c={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(b,N){const C=N.program;r.uniformBlockBinding(b,C)}function m(b,N){let C=l[b.id];C===void 0&&(E(b),C=_(b),l[b.id]=C,b.addEventListener("dispose",M));const I=N.program;r.updateUBOMapping(b,I);const z=e.render.frame;c[b.id]!==z&&(x(b),c[b.id]=z)}function _(b){const N=g();b.__bindingPointIndex=N;const C=o.createBuffer(),I=b.__size,z=b.usage;return o.bindBuffer(o.UNIFORM_BUFFER,C),o.bufferData(o.UNIFORM_BUFFER,I,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,N,C),C}function g(){for(let b=0;b<d;b++)if(h.indexOf(b)===-1)return h.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(b){const N=l[b.id],C=b.uniforms,I=b.__cache;o.bindBuffer(o.UNIFORM_BUFFER,N);for(let z=0,P=C.length;z<P;z++){const V=Array.isArray(C[z])?C[z]:[C[z]];for(let U=0,w=V.length;U<w;U++){const H=V[U];if(S(H,z,U,I)===!0){const W=H.__offset,K=Array.isArray(H.value)?H.value:[H.value];let ht=0;for(let at=0;at<K.length;at++){const F=K[at],nt=R(F);typeof F=="number"||typeof F=="boolean"?(H.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,W+ht,H.__data)):F.isMatrix3?(H.__data[0]=F.elements[0],H.__data[1]=F.elements[1],H.__data[2]=F.elements[2],H.__data[3]=0,H.__data[4]=F.elements[3],H.__data[5]=F.elements[4],H.__data[6]=F.elements[5],H.__data[7]=0,H.__data[8]=F.elements[6],H.__data[9]=F.elements[7],H.__data[10]=F.elements[8],H.__data[11]=0):(F.toArray(H.__data,ht),ht+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,W,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function S(b,N,C,I){const z=b.value,P=N+"_"+C;if(I[P]===void 0)return typeof z=="number"||typeof z=="boolean"?I[P]=z:I[P]=z.clone(),!0;{const V=I[P];if(typeof z=="number"||typeof z=="boolean"){if(V!==z)return I[P]=z,!0}else if(V.equals(z)===!1)return V.copy(z),!0}return!1}function E(b){const N=b.uniforms;let C=0;const I=16;for(let P=0,V=N.length;P<V;P++){const U=Array.isArray(N[P])?N[P]:[N[P]];for(let w=0,H=U.length;w<H;w++){const W=U[w],K=Array.isArray(W.value)?W.value:[W.value];for(let ht=0,at=K.length;ht<at;ht++){const F=K[ht],nt=R(F),j=C%I,ct=j%nt.boundary,St=j+ct;C+=ct,St!==0&&I-St<nt.storage&&(C+=I-St),W.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=C,C+=nt.storage}}}const z=C%I;return z>0&&(C+=I-z),b.__size=C,b.__cache={},this}function R(b){const N={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(N.boundary=4,N.storage=4):b.isVector2?(N.boundary=8,N.storage=8):b.isVector3||b.isColor?(N.boundary=16,N.storage=12):b.isVector4?(N.boundary=16,N.storage=16):b.isMatrix3?(N.boundary=48,N.storage=48):b.isMatrix4?(N.boundary=64,N.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),N}function M(b){const N=b.target;N.removeEventListener("dispose",M);const C=h.indexOf(N.__bindingPointIndex);h.splice(C,1),o.deleteBuffer(l[N.id]),delete l[N.id],delete c[N.id]}function v(){for(const b in l)o.deleteBuffer(l[b]);h=[],l={},c={}}return{bind:p,update:m,dispose:v}}class sC{constructor(e={}){const{canvas:i=O1(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=h;const E=new Uint32Array(4),R=new Int32Array(4);let M=null,v=null;const b=[],N=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ua,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let I=!1;this._outputColorSpace=ii;let z=0,P=0,V=null,U=-1,w=null;const H=new ln,W=new ln;let K=null;const ht=new ue(0);let at=0,F=i.width,nt=i.height,j=1,ct=null,St=null;const Et=new ln(0,0,F,nt),Ft=new ln(0,0,F,nt);let oe=!1;const G=new lm;let dt=!1,k=!1;const Q=new qe,pt=new Y,Tt=new ln,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function Ut(){return V===null?j:1}let O=r;function le(D,tt){return i.getContext(D,tt)}try{const D={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Qp}`),i.addEventListener("webglcontextlost",zt,!1),i.addEventListener("webglcontextrestored",jt,!1),i.addEventListener("webglcontextcreationerror",Ct,!1),O===null){const tt="webgl2";if(O=le(tt,D),O===null)throw le(tt)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let qt,Bt,Ot,$t,Ht,ee,Ue,Ye,L,A,rt,vt,At,mt,Wt,Lt,Zt,gt,Rt,Dt,ie,te,Gt,ge;function q(){qt=new g2(O),qt.init(),te=new JR(O,qt),Bt=new u2(O,qt,e,te),Ot=new QR(O,qt),Bt.reversedDepthBuffer&&x&&Ot.buffers.depth.setReversed(!0),$t=new x2(O),Ht=new IR,ee=new KR(O,qt,Ot,Ht,Bt,te,$t),Ue=new f2(C),Ye=new m2(C),L=new bT(O),Gt=new o2(O,L),A=new v2(O,L,$t,Gt),rt=new S2(O,A,L,$t),Rt=new y2(O,Bt,ee),Lt=new c2(Ht),vt=new zR(C,Ue,Ye,qt,Bt,Gt,Lt),At=new aC(C,Ht),mt=new FR,Wt=new qR(qt),gt=new s2(C,Ue,Ye,Ot,rt,S,p),Zt=new jR(C,rt,Bt),ge=new rC(O,$t,Bt,Ot),Dt=new l2(O,qt,$t),ie=new _2(O,qt,$t),$t.programs=vt.programs,C.capabilities=Bt,C.extensions=qt,C.properties=Ht,C.renderLists=mt,C.shadowMap=Zt,C.state=Ot,C.info=$t}q();const Nt=new nC(C,O);this.xr=Nt,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const D=qt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=qt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(D){D!==void 0&&(j=D,this.setSize(F,nt,!1))},this.getSize=function(D){return D.set(F,nt)},this.setSize=function(D,tt,ut=!0){if(Nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=D,nt=tt,i.width=Math.floor(D*j),i.height=Math.floor(tt*j),ut===!0&&(i.style.width=D+"px",i.style.height=tt+"px"),this.setViewport(0,0,D,tt)},this.getDrawingBufferSize=function(D){return D.set(F*j,nt*j).floor()},this.setDrawingBufferSize=function(D,tt,ut){F=D,nt=tt,j=ut,i.width=Math.floor(D*ut),i.height=Math.floor(tt*ut),this.setViewport(0,0,D,tt)},this.getCurrentViewport=function(D){return D.copy(H)},this.getViewport=function(D){return D.copy(Et)},this.setViewport=function(D,tt,ut,ft){D.isVector4?Et.set(D.x,D.y,D.z,D.w):Et.set(D,tt,ut,ft),Ot.viewport(H.copy(Et).multiplyScalar(j).round())},this.getScissor=function(D){return D.copy(Ft)},this.setScissor=function(D,tt,ut,ft){D.isVector4?Ft.set(D.x,D.y,D.z,D.w):Ft.set(D,tt,ut,ft),Ot.scissor(W.copy(Ft).multiplyScalar(j).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(D){Ot.setScissorTest(oe=D)},this.setOpaqueSort=function(D){ct=D},this.setTransparentSort=function(D){St=D},this.getClearColor=function(D){return D.copy(gt.getClearColor())},this.setClearColor=function(){gt.setClearColor(...arguments)},this.getClearAlpha=function(){return gt.getClearAlpha()},this.setClearAlpha=function(){gt.setClearAlpha(...arguments)},this.clear=function(D=!0,tt=!0,ut=!0){let ft=0;if(D){let et=!1;if(V!==null){const wt=V.texture.format;et=wt===am||wt===im||wt===nm}if(et){const wt=V.texture.type,Vt=wt===Vi||wt===Jr||wt===Cl||wt===wl||wt===$p||wt===tm,Xt=gt.getClearColor(),Pt=gt.getClearAlpha(),Qt=Xt.r,se=Xt.g,ae=Xt.b;Vt?(E[0]=Qt,E[1]=se,E[2]=ae,E[3]=Pt,O.clearBufferuiv(O.COLOR,0,E)):(R[0]=Qt,R[1]=se,R[2]=ae,R[3]=Pt,O.clearBufferiv(O.COLOR,0,R))}else ft|=O.COLOR_BUFFER_BIT}tt&&(ft|=O.DEPTH_BUFFER_BIT),ut&&(ft|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(ft)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",zt,!1),i.removeEventListener("webglcontextrestored",jt,!1),i.removeEventListener("webglcontextcreationerror",Ct,!1),gt.dispose(),mt.dispose(),Wt.dispose(),Ht.dispose(),Ue.dispose(),Ye.dispose(),rt.dispose(),Gt.dispose(),ge.dispose(),vt.dispose(),Nt.dispose(),Nt.removeEventListener("sessionstart",yn),Nt.removeEventListener("sessionend",zn),oa.stop()};function zt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function jt(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const D=$t.autoReset,tt=Zt.enabled,ut=Zt.autoUpdate,ft=Zt.needsUpdate,et=Zt.type;q(),$t.autoReset=D,Zt.enabled=tt,Zt.autoUpdate=ut,Zt.needsUpdate=ft,Zt.type=et}function Ct(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Mt(D){const tt=D.target;tt.removeEventListener("dispose",Mt),Jt(tt)}function Jt(D){de(D),Ht.remove(D)}function de(D){const tt=Ht.get(D).programs;tt!==void 0&&(tt.forEach(function(ut){vt.releaseProgram(ut)}),D.isShaderMaterial&&vt.releaseShaderCache(D))}this.renderBufferDirect=function(D,tt,ut,ft,et,wt){tt===null&&(tt=bt);const Vt=et.isMesh&&et.matrixWorld.determinant()<0,Xt=Bl(D,tt,ut,ft,et);Ot.setMaterial(ft,Vt);let Pt=ut.index,Qt=1;if(ft.wireframe===!0){if(Pt=A.getWireframeAttribute(ut),Pt===void 0)return;Qt=2}const se=ut.drawRange,ae=ut.attributes.position;let Ee=se.start*Qt,Fe=(se.start+se.count)*Qt;wt!==null&&(Ee=Math.max(Ee,wt.start*Qt),Fe=Math.min(Fe,(wt.start+wt.count)*Qt)),Pt!==null?(Ee=Math.max(Ee,0),Fe=Math.min(Fe,Pt.count)):ae!=null&&(Ee=Math.max(Ee,0),Fe=Math.min(Fe,ae.count));const $e=Fe-Ee;if($e<0||$e===1/0)return;Gt.setup(et,ft,Xt,ut,Pt);let ze,Le=Dt;if(Pt!==null&&(ze=L.get(Pt),Le=ie,Le.setIndex(ze)),et.isMesh)ft.wireframe===!0?(Ot.setLineWidth(ft.wireframeLinewidth*Ut()),Le.setMode(O.LINES)):Le.setMode(O.TRIANGLES);else if(et.isLine){let re=ft.linewidth;re===void 0&&(re=1),Ot.setLineWidth(re*Ut()),et.isLineSegments?Le.setMode(O.LINES):et.isLineLoop?Le.setMode(O.LINE_LOOP):Le.setMode(O.LINE_STRIP)}else et.isPoints?Le.setMode(O.POINTS):et.isSprite&&Le.setMode(O.TRIANGLES);if(et.isBatchedMesh)if(et._multiDrawInstances!==null)Ll("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Le.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances);else if(qt.get("WEBGL_multi_draw"))Le.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else{const re=et._multiDrawStarts,Ie=et._multiDrawCounts,Se=et._multiDrawCount,Sn=Pt?L.get(Pt).bytesPerElement:1,ai=Ht.get(ft).currentProgram.getUniforms();for(let Oe=0;Oe<Se;Oe++)ai.setValue(O,"_gl_DrawID",Oe),Le.render(re[Oe]/Sn,Ie[Oe])}else if(et.isInstancedMesh)Le.renderInstances(Ee,$e,et.count);else if(ut.isInstancedBufferGeometry){const re=ut._maxInstanceCount!==void 0?ut._maxInstanceCount:1/0,Ie=Math.min(ut.instanceCount,re);Le.renderInstances(Ee,$e,Ie)}else Le.render(Ee,$e)};function We(D,tt,ut){D.transparent===!0&&D.side===ia&&D.forceSinglePass===!1?(D.side=Gn,D.needsUpdate=!0,_i(D,tt,ut),D.side=pr,D.needsUpdate=!0,_i(D,tt,ut),D.side=ia):_i(D,tt,ut)}this.compile=function(D,tt,ut=null){ut===null&&(ut=D),v=Wt.get(ut),v.init(tt),N.push(v),ut.traverseVisible(function(et){et.isLight&&et.layers.test(tt.layers)&&(v.pushLight(et),et.castShadow&&v.pushShadow(et))}),D!==ut&&D.traverseVisible(function(et){et.isLight&&et.layers.test(tt.layers)&&(v.pushLight(et),et.castShadow&&v.pushShadow(et))}),v.setupLights();const ft=new Set;return D.traverse(function(et){if(!(et.isMesh||et.isPoints||et.isLine||et.isSprite))return;const wt=et.material;if(wt)if(Array.isArray(wt))for(let Vt=0;Vt<wt.length;Vt++){const Xt=wt[Vt];We(Xt,ut,et),ft.add(Xt)}else We(wt,ut,et),ft.add(wt)}),v=N.pop(),ft},this.compileAsync=function(D,tt,ut=null){const ft=this.compile(D,tt,ut);return new Promise(et=>{function wt(){if(ft.forEach(function(Vt){Ht.get(Vt).currentProgram.isReady()&&ft.delete(Vt)}),ft.size===0){et(D);return}setTimeout(wt,10)}qt.get("KHR_parallel_shader_compile")!==null?wt():setTimeout(wt,10)})};let Ae=null;function en(D){Ae&&Ae(D)}function yn(){oa.stop()}function zn(){oa.start()}const oa=new Ty;oa.setAnimationLoop(en),typeof self<"u"&&oa.setContext(self),this.setAnimationLoop=function(D){Ae=D,Nt.setAnimationLoop(D),D===null?oa.stop():oa.start()},Nt.addEventListener("sessionstart",yn),Nt.addEventListener("sessionend",zn),this.render=function(D,tt){if(tt!==void 0&&tt.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),tt.parent===null&&tt.matrixWorldAutoUpdate===!0&&tt.updateMatrixWorld(),Nt.enabled===!0&&Nt.isPresenting===!0&&(Nt.cameraAutoUpdate===!0&&Nt.updateCamera(tt),tt=Nt.getCamera()),D.isScene===!0&&D.onBeforeRender(C,D,tt,V),v=Wt.get(D,N.length),v.init(tt),N.push(v),Q.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),G.setFromProjectionMatrix(Q,sa,tt.reversedDepth),k=this.localClippingEnabled,dt=Lt.init(this.clippingPlanes,k),M=mt.get(D,b.length),M.init(),b.push(M),Nt.enabled===!0&&Nt.isPresenting===!0){const wt=C.xr.getDepthSensingMesh();wt!==null&&Mo(wt,tt,-1/0,C.sortObjects)}Mo(D,tt,0,C.sortObjects),M.finish(),C.sortObjects===!0&&M.sort(ct,St),yt=Nt.enabled===!1||Nt.isPresenting===!1||Nt.hasDepthSensing()===!1,yt&&gt.addToRenderList(M,D),this.info.render.frame++,dt===!0&&Lt.beginShadows();const ut=v.state.shadowsArray;Zt.render(ut,D,tt),dt===!0&&Lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ft=M.opaque,et=M.transmissive;if(v.setupLights(),tt.isArrayCamera){const wt=tt.cameras;if(et.length>0)for(let Vt=0,Xt=wt.length;Vt<Xt;Vt++){const Pt=wt[Vt];mr(ft,et,D,Pt)}yt&&gt.render(D);for(let Vt=0,Xt=wt.length;Vt<Xt;Vt++){const Pt=wt[Vt];Il(M,D,Pt,Pt.viewport)}}else et.length>0&&mr(ft,et,D,tt),yt&&gt.render(D),Il(M,D,tt);V!==null&&P===0&&(ee.updateMultisampleRenderTarget(V),ee.updateRenderTargetMipmap(V)),D.isScene===!0&&D.onAfterRender(C,D,tt),Gt.resetDefaultState(),U=-1,w=null,N.pop(),N.length>0?(v=N[N.length-1],dt===!0&&Lt.setGlobalState(C.clippingPlanes,v.state.camera)):v=null,b.pop(),b.length>0?M=b[b.length-1]:M=null};function Mo(D,tt,ut,ft){if(D.visible===!1)return;if(D.layers.test(tt.layers)){if(D.isGroup)ut=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(tt);else if(D.isLight)v.pushLight(D),D.castShadow&&v.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||G.intersectsSprite(D)){ft&&Tt.setFromMatrixPosition(D.matrixWorld).applyMatrix4(Q);const Vt=rt.update(D),Xt=D.material;Xt.visible&&M.push(D,Vt,Xt,ut,Tt.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||G.intersectsObject(D))){const Vt=rt.update(D),Xt=D.material;if(ft&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),Tt.copy(D.boundingSphere.center)):(Vt.boundingSphere===null&&Vt.computeBoundingSphere(),Tt.copy(Vt.boundingSphere.center)),Tt.applyMatrix4(D.matrixWorld).applyMatrix4(Q)),Array.isArray(Xt)){const Pt=Vt.groups;for(let Qt=0,se=Pt.length;Qt<se;Qt++){const ae=Pt[Qt],Ee=Xt[ae.materialIndex];Ee&&Ee.visible&&M.push(D,Vt,Ee,ut,Tt.z,ae)}}else Xt.visible&&M.push(D,Vt,Xt,ut,Tt.z,null)}}const wt=D.children;for(let Vt=0,Xt=wt.length;Vt<Xt;Vt++)Mo(wt[Vt],tt,ut,ft)}function Il(D,tt,ut,ft){const et=D.opaque,wt=D.transmissive,Vt=D.transparent;v.setupLightsView(ut),dt===!0&&Lt.setGlobalState(C.clippingPlanes,ut),ft&&Ot.viewport(H.copy(ft)),et.length>0&&la(et,tt,ut),wt.length>0&&la(wt,tt,ut),Vt.length>0&&la(Vt,tt,ut),Ot.buffers.depth.setTest(!0),Ot.buffers.depth.setMask(!0),Ot.buffers.color.setMask(!0),Ot.setPolygonOffset(!1)}function mr(D,tt,ut,ft){if((ut.isScene===!0?ut.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ft.id]===void 0&&(v.state.transmissionRenderTarget[ft.id]=new wi(1,1,{generateMipmaps:!0,type:qt.has("EXT_color_buffer_half_float")||qt.has("EXT_color_buffer_float")?Gi:Vi,minFilter:Qr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const wt=v.state.transmissionRenderTarget[ft.id],Vt=ft.viewport||H;wt.setSize(Vt.z*C.transmissionResolutionScale,Vt.w*C.transmissionResolutionScale);const Xt=C.getRenderTarget(),Pt=C.getActiveCubeFace(),Qt=C.getActiveMipmapLevel();C.setRenderTarget(wt),C.getClearColor(ht),at=C.getClearAlpha(),at<1&&C.setClearColor(16777215,.5),C.clear(),yt&&gt.render(ut);const se=C.toneMapping;C.toneMapping=Ua;const ae=ft.viewport;if(ft.viewport!==void 0&&(ft.viewport=void 0),v.setupLightsView(ft),dt===!0&&Lt.setGlobalState(C.clippingPlanes,ft),la(D,ut,ft),ee.updateMultisampleRenderTarget(wt),ee.updateRenderTargetMipmap(wt),qt.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let Fe=0,$e=tt.length;Fe<$e;Fe++){const ze=tt[Fe],Le=ze.object,re=ze.geometry,Ie=ze.material,Se=ze.group;if(Ie.side===ia&&Le.layers.test(ft.layers)){const Sn=Ie.side;Ie.side=Gn,Ie.needsUpdate=!0,gr(Le,ut,ft,re,Ie,Se),Ie.side=Sn,Ie.needsUpdate=!0,Ee=!0}}Ee===!0&&(ee.updateMultisampleRenderTarget(wt),ee.updateRenderTargetMipmap(wt))}C.setRenderTarget(Xt,Pt,Qt),C.setClearColor(ht,at),ae!==void 0&&(ft.viewport=ae),C.toneMapping=se}function la(D,tt,ut){const ft=tt.isScene===!0?tt.overrideMaterial:null;for(let et=0,wt=D.length;et<wt;et++){const Vt=D[et],Xt=Vt.object,Pt=Vt.geometry,Qt=Vt.group;let se=Vt.material;se.allowOverride===!0&&ft!==null&&(se=ft),Xt.layers.test(ut.layers)&&gr(Xt,tt,ut,Pt,se,Qt)}}function gr(D,tt,ut,ft,et,wt){D.onBeforeRender(C,tt,ut,ft,et,wt),D.modelViewMatrix.multiplyMatrices(ut.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),et.onBeforeRender(C,tt,ut,ft,D,wt),et.transparent===!0&&et.side===ia&&et.forceSinglePass===!1?(et.side=Gn,et.needsUpdate=!0,C.renderBufferDirect(ut,tt,ft,et,D,wt),et.side=pr,et.needsUpdate=!0,C.renderBufferDirect(ut,tt,ft,et,D,wt),et.side=ia):C.renderBufferDirect(ut,tt,ft,et,D,wt),D.onAfterRender(C,tt,ut,ft,et,wt)}function _i(D,tt,ut){tt.isScene!==!0&&(tt=bt);const ft=Ht.get(D),et=v.state.lights,wt=v.state.shadowsArray,Vt=et.state.version,Xt=vt.getParameters(D,et.state,wt,tt,ut),Pt=vt.getProgramCacheKey(Xt);let Qt=ft.programs;ft.environment=D.isMeshStandardMaterial?tt.environment:null,ft.fog=tt.fog,ft.envMap=(D.isMeshStandardMaterial?Ye:Ue).get(D.envMap||ft.environment),ft.envMapRotation=ft.environment!==null&&D.envMap===null?tt.environmentRotation:D.envMapRotation,Qt===void 0&&(D.addEventListener("dispose",Mt),Qt=new Map,ft.programs=Qt);let se=Qt.get(Pt);if(se!==void 0){if(ft.currentProgram===se&&ft.lightsStateVersion===Vt)return La(D,Xt),se}else Xt.uniforms=vt.getUniforms(D),D.onBeforeCompile(Xt,C),se=vt.acquireProgram(Xt,Pt),Qt.set(Pt,se),ft.uniforms=Xt.uniforms;const ae=ft.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ae.clippingPlanes=Lt.uniform),La(D,Xt),ft.needsLights=Fl(D),ft.lightsStateVersion=Vt,ft.needsLights&&(ae.ambientLightColor.value=et.state.ambient,ae.lightProbe.value=et.state.probe,ae.directionalLights.value=et.state.directional,ae.directionalLightShadows.value=et.state.directionalShadow,ae.spotLights.value=et.state.spot,ae.spotLightShadows.value=et.state.spotShadow,ae.rectAreaLights.value=et.state.rectArea,ae.ltc_1.value=et.state.rectAreaLTC1,ae.ltc_2.value=et.state.rectAreaLTC2,ae.pointLights.value=et.state.point,ae.pointLightShadows.value=et.state.pointShadow,ae.hemisphereLights.value=et.state.hemi,ae.directionalShadowMap.value=et.state.directionalShadowMap,ae.directionalShadowMatrix.value=et.state.directionalShadowMatrix,ae.spotShadowMap.value=et.state.spotShadowMap,ae.spotLightMatrix.value=et.state.spotLightMatrix,ae.spotLightMap.value=et.state.spotLightMap,ae.pointShadowMap.value=et.state.pointShadowMap,ae.pointShadowMatrix.value=et.state.pointShadowMatrix),ft.currentProgram=se,ft.uniformsList=null,se}function vr(D){if(D.uniformsList===null){const tt=D.currentProgram.getUniforms();D.uniformsList=Ic.seqWithValue(tt.seq,D.uniforms)}return D.uniformsList}function La(D,tt){const ut=Ht.get(D);ut.outputColorSpace=tt.outputColorSpace,ut.batching=tt.batching,ut.batchingColor=tt.batchingColor,ut.instancing=tt.instancing,ut.instancingColor=tt.instancingColor,ut.instancingMorph=tt.instancingMorph,ut.skinning=tt.skinning,ut.morphTargets=tt.morphTargets,ut.morphNormals=tt.morphNormals,ut.morphColors=tt.morphColors,ut.morphTargetsCount=tt.morphTargetsCount,ut.numClippingPlanes=tt.numClippingPlanes,ut.numIntersection=tt.numClipIntersection,ut.vertexAlphas=tt.vertexAlphas,ut.vertexTangents=tt.vertexTangents,ut.toneMapping=tt.toneMapping}function Bl(D,tt,ut,ft,et){tt.isScene!==!0&&(tt=bt),ee.resetTextureUnits();const wt=tt.fog,Vt=ft.isMeshStandardMaterial?tt.environment:null,Xt=V===null?C.outputColorSpace:V.isXRRenderTarget===!0?V.texture.colorSpace:ho,Pt=(ft.isMeshStandardMaterial?Ye:Ue).get(ft.envMap||Vt),Qt=ft.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,se=!!ut.attributes.tangent&&(!!ft.normalMap||ft.anisotropy>0),ae=!!ut.morphAttributes.position,Ee=!!ut.morphAttributes.normal,Fe=!!ut.morphAttributes.color;let $e=Ua;ft.toneMapped&&(V===null||V.isXRRenderTarget===!0)&&($e=C.toneMapping);const ze=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Le=ze!==void 0?ze.length:0,re=Ht.get(ft),Ie=v.state.lights;if(dt===!0&&(k===!0||D!==w)){const rn=D===w&&ft.id===U;Lt.setState(ft,D,rn)}let Se=!1;ft.version===re.__version?(re.needsLights&&re.lightsStateVersion!==Ie.state.version||re.outputColorSpace!==Xt||et.isBatchedMesh&&re.batching===!1||!et.isBatchedMesh&&re.batching===!0||et.isBatchedMesh&&re.batchingColor===!0&&et.colorTexture===null||et.isBatchedMesh&&re.batchingColor===!1&&et.colorTexture!==null||et.isInstancedMesh&&re.instancing===!1||!et.isInstancedMesh&&re.instancing===!0||et.isSkinnedMesh&&re.skinning===!1||!et.isSkinnedMesh&&re.skinning===!0||et.isInstancedMesh&&re.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&re.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&re.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&re.instancingMorph===!1&&et.morphTexture!==null||re.envMap!==Pt||ft.fog===!0&&re.fog!==wt||re.numClippingPlanes!==void 0&&(re.numClippingPlanes!==Lt.numPlanes||re.numIntersection!==Lt.numIntersection)||re.vertexAlphas!==Qt||re.vertexTangents!==se||re.morphTargets!==ae||re.morphNormals!==Ee||re.morphColors!==Fe||re.toneMapping!==$e||re.morphTargetsCount!==Le)&&(Se=!0):(Se=!0,re.__version=ft.version);let Sn=re.currentProgram;Se===!0&&(Sn=_i(ft,tt,et));let ai=!1,Oe=!1,Oa=!1;const Qe=Sn.getUniforms(),Xn=re.uniforms;if(Ot.useProgram(Sn.program)&&(ai=!0,Oe=!0,Oa=!0),ft.id!==U&&(U=ft.id,Oe=!0),ai||w!==D){Ot.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Qe.setValue(O,"projectionMatrix",D.projectionMatrix),Qe.setValue(O,"viewMatrix",D.matrixWorldInverse);const In=Qe.map.cameraPosition;In!==void 0&&In.setValue(O,pt.setFromMatrixPosition(D.matrixWorld)),Bt.logarithmicDepthBuffer&&Qe.setValue(O,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(ft.isMeshPhongMaterial||ft.isMeshToonMaterial||ft.isMeshLambertMaterial||ft.isMeshBasicMaterial||ft.isMeshStandardMaterial||ft.isShaderMaterial)&&Qe.setValue(O,"isOrthographic",D.isOrthographicCamera===!0),w!==D&&(w=D,Oe=!0,Oa=!0)}if(et.isSkinnedMesh){Qe.setOptional(O,et,"bindMatrix"),Qe.setOptional(O,et,"bindMatrixInverse");const rn=et.skeleton;rn&&(rn.boneTexture===null&&rn.computeBoneTexture(),Qe.setValue(O,"boneTexture",rn.boneTexture,ee))}et.isBatchedMesh&&(Qe.setOptional(O,et,"batchingTexture"),Qe.setValue(O,"batchingTexture",et._matricesTexture,ee),Qe.setOptional(O,et,"batchingIdTexture"),Qe.setValue(O,"batchingIdTexture",et._indirectTexture,ee),Qe.setOptional(O,et,"batchingColorTexture"),et._colorsTexture!==null&&Qe.setValue(O,"batchingColorTexture",et._colorsTexture,ee));const cn=ut.morphAttributes;if((cn.position!==void 0||cn.normal!==void 0||cn.color!==void 0)&&Rt.update(et,ut,Sn),(Oe||re.receiveShadow!==et.receiveShadow)&&(re.receiveShadow=et.receiveShadow,Qe.setValue(O,"receiveShadow",et.receiveShadow)),ft.isMeshGouraudMaterial&&ft.envMap!==null&&(Xn.envMap.value=Pt,Xn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),ft.isMeshStandardMaterial&&ft.envMap===null&&tt.environment!==null&&(Xn.envMapIntensity.value=tt.environmentIntensity),Oe&&(Qe.setValue(O,"toneMappingExposure",C.toneMappingExposure),re.needsLights&&Yc(Xn,Oa),wt&&ft.fog===!0&&At.refreshFogUniforms(Xn,wt),At.refreshMaterialUniforms(Xn,ft,j,nt,v.state.transmissionRenderTarget[D.id]),Ic.upload(O,vr(re),Xn,ee)),ft.isShaderMaterial&&ft.uniformsNeedUpdate===!0&&(Ic.upload(O,vr(re),Xn,ee),ft.uniformsNeedUpdate=!1),ft.isSpriteMaterial&&Qe.setValue(O,"center",et.center),Qe.setValue(O,"modelViewMatrix",et.modelViewMatrix),Qe.setValue(O,"normalMatrix",et.normalMatrix),Qe.setValue(O,"modelMatrix",et.matrixWorld),ft.isShaderMaterial||ft.isRawShaderMaterial){const rn=ft.uniformsGroups;for(let In=0,ns=rn.length;In<ns;In++){const Xi=rn[In];ge.update(Xi,Sn),ge.bind(Xi,Sn)}}return Sn}function Yc(D,tt){D.ambientLightColor.needsUpdate=tt,D.lightProbe.needsUpdate=tt,D.directionalLights.needsUpdate=tt,D.directionalLightShadows.needsUpdate=tt,D.pointLights.needsUpdate=tt,D.pointLightShadows.needsUpdate=tt,D.spotLights.needsUpdate=tt,D.spotLightShadows.needsUpdate=tt,D.rectAreaLights.needsUpdate=tt,D.hemisphereLights.needsUpdate=tt}function Fl(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return V},this.setRenderTargetTextures=function(D,tt,ut){const ft=Ht.get(D);ft.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,ft.__autoAllocateDepthBuffer===!1&&(ft.__useRenderToTexture=!1),Ht.get(D.texture).__webglTexture=tt,Ht.get(D.depthTexture).__webglTexture=ft.__autoAllocateDepthBuffer?void 0:ut,ft.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,tt){const ut=Ht.get(D);ut.__webglFramebuffer=tt,ut.__useDefaultFramebuffer=tt===void 0};const Eo=O.createFramebuffer();this.setRenderTarget=function(D,tt=0,ut=0){V=D,z=tt,P=ut;let ft=!0,et=null,wt=!1,Vt=!1;if(D){const Pt=Ht.get(D);if(Pt.__useDefaultFramebuffer!==void 0)Ot.bindFramebuffer(O.FRAMEBUFFER,null),ft=!1;else if(Pt.__webglFramebuffer===void 0)ee.setupRenderTarget(D);else if(Pt.__hasExternalTextures)ee.rebindTextures(D,Ht.get(D.texture).__webglTexture,Ht.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const ae=D.depthTexture;if(Pt.__boundDepthTexture!==ae){if(ae!==null&&Ht.has(ae)&&(D.width!==ae.image.width||D.height!==ae.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(D)}}const Qt=D.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(Vt=!0);const se=Ht.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(se[tt])?et=se[tt][ut]:et=se[tt],wt=!0):D.samples>0&&ee.useMultisampledRTT(D)===!1?et=Ht.get(D).__webglMultisampledFramebuffer:Array.isArray(se)?et=se[ut]:et=se,H.copy(D.viewport),W.copy(D.scissor),K=D.scissorTest}else H.copy(Et).multiplyScalar(j).floor(),W.copy(Ft).multiplyScalar(j).floor(),K=oe;if(ut!==0&&(et=Eo),Ot.bindFramebuffer(O.FRAMEBUFFER,et)&&ft&&Ot.drawBuffers(D,et),Ot.viewport(H),Ot.scissor(W),Ot.setScissorTest(K),wt){const Pt=Ht.get(D.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Pt.__webglTexture,ut)}else if(Vt){const Pt=tt;for(let Qt=0;Qt<D.textures.length;Qt++){const se=Ht.get(D.textures[Qt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Qt,se.__webglTexture,ut,Pt)}}else if(D!==null&&ut!==0){const Pt=Ht.get(D.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Pt.__webglTexture,ut)}U=-1},this.readRenderTargetPixels=function(D,tt,ut,ft,et,wt,Vt,Xt=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=Ht.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Vt!==void 0&&(Pt=Pt[Vt]),Pt){Ot.bindFramebuffer(O.FRAMEBUFFER,Pt);try{const Qt=D.textures[Xt],se=Qt.format,ae=Qt.type;if(!Bt.textureFormatReadable(se)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Bt.textureTypeReadable(ae)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}tt>=0&&tt<=D.width-ft&&ut>=0&&ut<=D.height-et&&(D.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Xt),O.readPixels(tt,ut,ft,et,te.convert(se),te.convert(ae),wt))}finally{const Qt=V!==null?Ht.get(V).__webglFramebuffer:null;Ot.bindFramebuffer(O.FRAMEBUFFER,Qt)}}},this.readRenderTargetPixelsAsync=async function(D,tt,ut,ft,et,wt,Vt,Xt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pt=Ht.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Vt!==void 0&&(Pt=Pt[Vt]),Pt)if(tt>=0&&tt<=D.width-ft&&ut>=0&&ut<=D.height-et){Ot.bindFramebuffer(O.FRAMEBUFFER,Pt);const Qt=D.textures[Xt],se=Qt.format,ae=Qt.type;if(!Bt.textureFormatReadable(se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Bt.textureTypeReadable(ae))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ee=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Ee),O.bufferData(O.PIXEL_PACK_BUFFER,wt.byteLength,O.STREAM_READ),D.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+Xt),O.readPixels(tt,ut,ft,et,te.convert(se),te.convert(ae),0);const Fe=V!==null?Ht.get(V).__webglFramebuffer:null;Ot.bindFramebuffer(O.FRAMEBUFFER,Fe);const $e=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await P1(O,$e,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Ee),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,wt),O.deleteBuffer(Ee),O.deleteSync($e),wt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,tt=null,ut=0){const ft=Math.pow(2,-ut),et=Math.floor(D.image.width*ft),wt=Math.floor(D.image.height*ft),Vt=tt!==null?tt.x:0,Xt=tt!==null?tt.y:0;ee.setTexture2D(D,0),O.copyTexSubImage2D(O.TEXTURE_2D,ut,0,0,Vt,Xt,et,wt),Ot.unbindTexture()};const _r=O.createFramebuffer(),Wc=O.createFramebuffer();this.copyTextureToTexture=function(D,tt,ut=null,ft=null,et=0,wt=null){wt===null&&(et!==0?(Ll("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),wt=et,et=0):wt=0);let Vt,Xt,Pt,Qt,se,ae,Ee,Fe,$e;const ze=D.isCompressedTexture?D.mipmaps[wt]:D.image;if(ut!==null)Vt=ut.max.x-ut.min.x,Xt=ut.max.y-ut.min.y,Pt=ut.isBox3?ut.max.z-ut.min.z:1,Qt=ut.min.x,se=ut.min.y,ae=ut.isBox3?ut.min.z:0;else{const cn=Math.pow(2,-et);Vt=Math.floor(ze.width*cn),Xt=Math.floor(ze.height*cn),D.isDataArrayTexture?Pt=ze.depth:D.isData3DTexture?Pt=Math.floor(ze.depth*cn):Pt=1,Qt=0,se=0,ae=0}ft!==null?(Ee=ft.x,Fe=ft.y,$e=ft.z):(Ee=0,Fe=0,$e=0);const Le=te.convert(tt.format),re=te.convert(tt.type);let Ie;tt.isData3DTexture?(ee.setTexture3D(tt,0),Ie=O.TEXTURE_3D):tt.isDataArrayTexture||tt.isCompressedArrayTexture?(ee.setTexture2DArray(tt,0),Ie=O.TEXTURE_2D_ARRAY):(ee.setTexture2D(tt,0),Ie=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,tt.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,tt.unpackAlignment);const Se=O.getParameter(O.UNPACK_ROW_LENGTH),Sn=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ai=O.getParameter(O.UNPACK_SKIP_PIXELS),Oe=O.getParameter(O.UNPACK_SKIP_ROWS),Oa=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,ze.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,ze.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Qt),O.pixelStorei(O.UNPACK_SKIP_ROWS,se),O.pixelStorei(O.UNPACK_SKIP_IMAGES,ae);const Qe=D.isDataArrayTexture||D.isData3DTexture,Xn=tt.isDataArrayTexture||tt.isData3DTexture;if(D.isDepthTexture){const cn=Ht.get(D),rn=Ht.get(tt),In=Ht.get(cn.__renderTarget),ns=Ht.get(rn.__renderTarget);Ot.bindFramebuffer(O.READ_FRAMEBUFFER,In.__webglFramebuffer),Ot.bindFramebuffer(O.DRAW_FRAMEBUFFER,ns.__webglFramebuffer);for(let Xi=0;Xi<Pt;Xi++)Qe&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ht.get(D).__webglTexture,et,ae+Xi),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ht.get(tt).__webglTexture,wt,$e+Xi)),O.blitFramebuffer(Qt,se,Vt,Xt,Ee,Fe,Vt,Xt,O.DEPTH_BUFFER_BIT,O.NEAREST);Ot.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(et!==0||D.isRenderTargetTexture||Ht.has(D)){const cn=Ht.get(D),rn=Ht.get(tt);Ot.bindFramebuffer(O.READ_FRAMEBUFFER,_r),Ot.bindFramebuffer(O.DRAW_FRAMEBUFFER,Wc);for(let In=0;In<Pt;In++)Qe?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,cn.__webglTexture,et,ae+In):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,cn.__webglTexture,et),Xn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,rn.__webglTexture,wt,$e+In):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,rn.__webglTexture,wt),et!==0?O.blitFramebuffer(Qt,se,Vt,Xt,Ee,Fe,Vt,Xt,O.COLOR_BUFFER_BIT,O.NEAREST):Xn?O.copyTexSubImage3D(Ie,wt,Ee,Fe,$e+In,Qt,se,Vt,Xt):O.copyTexSubImage2D(Ie,wt,Ee,Fe,Qt,se,Vt,Xt);Ot.bindFramebuffer(O.READ_FRAMEBUFFER,null),Ot.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Xn?D.isDataTexture||D.isData3DTexture?O.texSubImage3D(Ie,wt,Ee,Fe,$e,Vt,Xt,Pt,Le,re,ze.data):tt.isCompressedArrayTexture?O.compressedTexSubImage3D(Ie,wt,Ee,Fe,$e,Vt,Xt,Pt,Le,ze.data):O.texSubImage3D(Ie,wt,Ee,Fe,$e,Vt,Xt,Pt,Le,re,ze):D.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,wt,Ee,Fe,Vt,Xt,Le,re,ze.data):D.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,wt,Ee,Fe,ze.width,ze.height,Le,ze.data):O.texSubImage2D(O.TEXTURE_2D,wt,Ee,Fe,Vt,Xt,Le,re,ze);O.pixelStorei(O.UNPACK_ROW_LENGTH,Se),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Sn),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ai),O.pixelStorei(O.UNPACK_SKIP_ROWS,Oe),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Oa),wt===0&&tt.generateMipmaps&&O.generateMipmap(Ie),Ot.unbindTexture()},this.initRenderTarget=function(D){Ht.get(D).__webglFramebuffer===void 0&&ee.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?ee.setTextureCube(D,0):D.isData3DTexture?ee.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?ee.setTexture2DArray(D,0):ee.setTexture2D(D,0),Ot.unbindTexture()},this.resetState=function(){z=0,P=0,V=null,Ot.reset(),Gt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return sa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ne._getUnpackColorSpace()}}const Bc={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class So{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const oC=new hm(-1,1,1,-1,0,1);class lC extends kn{constructor(){super(),this.setAttribute("position",new xn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new xn([0,2,0,0,2,0],2))}}const uC=new lC;class pm{constructor(e){this._mesh=new vn(uC,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,oC)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class cC extends So{constructor(e,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,e instanceof an?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Pl.clone(e.uniforms),this.material=new an({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new pm(this.material)}render(e,i,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Hx extends So{constructor(e,i){super(),this.scene=e,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,i,r){const l=e.getContext(),c=e.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let h,d;this.inverse?(h=0,d=1):(h=1,d=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,h,4294967295),c.buffers.stencil.setClear(d),c.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class fC extends So{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class hC{constructor(e,i){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),i===void 0){const r=e.getSize(new he);this._width=r.width,this._height=r.height,i=new wi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gi}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cC(Bc),this.copyPass.material.blending=Da,this.clock=new Ey}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,i){this.passes.splice(i,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const i=this.passes.indexOf(e);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(e){for(let i=e+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const i=this.renderer.getRenderTarget();let r=!1;for(let l=0,c=this.passes.length;l<c;l++){const h=this.passes[l];if(h.enabled!==!1){if(h.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),h.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),h.needsSwap){if(r){const d=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),p.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}Hx!==void 0&&(h instanceof Hx?r=!0:h instanceof fC&&(r=!1))}}this.renderer.setRenderTarget(i)}reset(e){if(e===void 0){const i=this.renderer.getSize(new he);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,i){this._width=e,this._height=i;const r=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(r,l),this.renderTarget2.setSize(r,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(r,l)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class dC extends So{constructor(e,i,r=null,l=null,c=null){super(),this.scene=e,this.camera=i,this.overrideMaterial=r,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ue}render(e,i,r){const l=e.autoClear;e.autoClear=!1;let c,h;this.overrideMaterial!==null&&(h=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(c=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=h),e.autoClear=l}}const pC={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ue(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class mo extends So{constructor(e,i=1,r,l){super(),this.strength=i,this.radius=r,this.threshold=l,this.resolution=e!==void 0?new he(e.x,e.y):new he(256,256),this.clearColor=new ue(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);this.renderTargetBright=new wi(c,h,{type:Gi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let _=0;_<this.nMips;_++){const g=new wi(c,h,{type:Gi});g.texture.name="UnrealBloomPass.h"+_,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const x=new wi(c,h,{type:Gi});x.texture.name="UnrealBloomPass.v"+_,x.texture.generateMipmaps=!1,this.renderTargetsVertical.push(x),c=Math.round(c/2),h=Math.round(h/2)}const d=pC;this.highPassUniforms=Pl.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new an({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const p=[3,5,7,9,11];c=Math.round(this.resolution.x/2),h=Math.round(this.resolution.y/2);for(let _=0;_<this.nMips;_++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[_])),this.separableBlurMaterials[_].uniforms.invSize.value=new he(1/c,1/h),c=Math.round(c/2),h=Math.round(h/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const m=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=m,this.bloomTintColors=[new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1),new Y(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Pl.clone(Bc.uniforms),this.blendMaterial=new an({uniforms:this.copyUniforms,vertexShader:Bc.vertexShader,fragmentShader:Bc.fragmentShader,blending:Rl,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ue,this._oldClearAlpha=1,this._basic=new Ol,this._fsQuad=new pm(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,i){let r=Math.round(e/2),l=Math.round(i/2);this.renderTargetBright.setSize(r,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(r,l),this.renderTargetsVertical[c].setSize(r,l),this.separableBlurMaterials[c].uniforms.invSize.value=new he(1/r,1/l),r=Math.round(r/2),l=Math.round(l/2)}render(e,i,r,l,c){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const h=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),c&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let d=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[p].uniforms.direction.value=mo.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[p]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=mo.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[p]),e.clear(),this._fsQuad.render(e),d=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=h}_getSeparableBlurMaterial(e){const i=[];for(let r=0;r<e;r++)i.push(.39894*Math.exp(-.5*r*r/(e*e))/e);return new an({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new he(.5,.5)},direction:{value:new he(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`varying vec2 vUv;
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
				}`})}}mo.BlurDirectionX=new he(1,0);mo.BlurDirectionY=new he(0,1);const Nc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class mC extends So{constructor(){super(),this.uniforms=Pl.clone(Nc.uniforms),this.material=new mT({name:Nc.name,uniforms:this.uniforms,vertexShader:Nc.vertexShader,fragmentShader:Nc.fragmentShader}),this._fsQuad=new pm(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,i,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ne.getTransfer(this._outputColorSpace)===Xe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Yx?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wx?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===jx?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Kp?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Qx?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Kx?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Zx&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const io=(o,e,i)=>Math.min(i,Math.max(e,o)),Sl=(o,e,i,r)=>e+(o-e)*Math.exp(-i*r),wy=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]);class gC{constructor(){ve(this,"shipQuaternion",new gi);ve(this,"lookQuaternion",new gi);ve(this,"position",new Y);ve(this,"yaw",0);ve(this,"pitch",0);ve(this,"yawVelocity",0);ve(this,"pitchVelocity",0);ve(this,"speed",0);ve(this,"lookYaw",0);ve(this,"lookPitch",0);ve(this,"lookTargetYaw",0);ve(this,"lookTargetPitch",0);ve(this,"touchX",0);ve(this,"touchY",0);ve(this,"touchSteering",!1);ve(this,"keys",new Set);ve(this,"elapsed",0);ve(this,"lastContext","");ve(this,"euler",new ki(0,0,0,"YXZ"));ve(this,"forward",new Y)}key(e,i){wy.has(e)&&(i?this.touchSteering||this.keys.add(e):this.keys.delete(e))}steerTouch(e,i,r){this.touchSteering=r,this.keys.clear();const l=Math.hypot(e,i),c=r?io((l-.1)/.9,0,1):0;this.touchX=l?e/l*c:0,this.touchY=l?i/l*c:0}look(e,i,r,l){if(l.paused||l.blocked)return;const c=r?l.touchSensitivity:l.sensitivity;this.lookTargetYaw=io(this.lookTargetYaw-io(e,-.2,.2)*c*1.6*(!r&&l.invertMouseX?-1:1),-.85,.85),this.lookTargetPitch=io(this.lookTargetPitch-io(i,-.2,.2)*c*1.6*(!r&&l.invertMouseY?-1:1),-.5,.5)}reset(e=!1){this.keys.clear(),this.steerTouch(0,0,!1),e&&(this.yawVelocity=this.pitchVelocity=0,this.lookTargetYaw=this.lookYaw,this.lookTargetPitch=this.lookPitch)}step(e,i){const r=`${i.mode}/${i.paused}/${i.started}/${i.blocked}`;if(this.lastContext&&r!==this.lastContext&&this.reset(i.paused||i.blocked),this.lastContext=r,!Number.isFinite(e)||e<=0||e>.25||i.paused)return;const l=Math.min(e,.1);this.elapsed+=l;const c=i.mode==="Manual Flight"&&i.started&&!i.blocked;let h=0,d=0;if(c){h=this.touchSteering?this.touchX:Number(this.keys.has("KeyD")||this.keys.has("ArrowRight"))-Number(this.keys.has("KeyA")||this.keys.has("ArrowLeft")),d=this.touchSteering?this.touchY:Number(this.keys.has("KeyS")||this.keys.has("ArrowDown"))-Number(this.keys.has("KeyW")||this.keys.has("ArrowUp"));const v=Math.max(1,Math.hypot(h,d));h/=v,d/=v}const p=i.reduced?.45:1,m=this.touchSteering?i.touchSensitivity:i.sensitivity,_=i.started&&i.mode!=="Manual Flight"&&!i.blocked&&!i.reduced?i.motion*(i.mode==="Meditation"?.002:.006):0,g=c?-h*.22*m*p:Math.sin(this.elapsed*.055)*_,x=c?-d*.16*m*p:Math.sin(this.elapsed*.08)*_*.3,S=3,E=(1-Math.exp(-S*l))/S;this.yaw+=g*l+(this.yawVelocity-g)*E,this.pitch=io(this.pitch+x*l+(this.pitchVelocity-x)*E,-.75,.75),this.yawVelocity=Sl(this.yawVelocity,g,S,l),this.pitchVelocity=Sl(this.pitchVelocity,x,S,l),Math.abs(this.pitch)>=.75&&Math.sign(this.pitchVelocity)===Math.sign(this.pitch)&&(this.pitchVelocity=0),this.yaw=Math.atan2(Math.sin(this.yaw),Math.cos(this.yaw)),this.shipQuaternion.setFromEuler(this.euler.set(this.pitch,this.yaw,0,"YXZ")),this.lookYaw=Sl(this.lookYaw,this.lookTargetYaw,6,l),this.lookPitch=Sl(this.lookPitch,this.lookTargetPitch,6,l),this.lookQuaternion.setFromEuler(this.euler.set(this.lookPitch,this.lookYaw,0,"YXZ"));const R=i.started?i.speed*(i.mode==="Meditation"?.15:1)*(i.reduced?.3:1):2,M=R*l+(this.speed-R)*(1-Math.exp(-.8*l))/.8;this.speed=Sl(this.speed,R,.8,l),this.forward.set(0,0,-1).applyQuaternion(this.shipQuaternion),this.position.addScaledVector(this.forward,M)}}function vC(o,e,i,r){let l=null,c=null,h="";const d=[],p=(v,b,N,C)=>{v.addEventListener(b,N,C),d.push(()=>v.removeEventListener(b,N,C))},m=()=>!r().paused&&!r().blocked&&document.visibilityState!=="hidden",_=()=>m()&&r().started&&r().mode==="Manual Flight",g=(v,b)=>{e.style.setProperty("--stick-x",`${v*34}px`),e.style.setProperty("--stick-y",`${b*34}px`)},x=()=>{const v=l;l=null,v&&o.hasPointerCapture(v.id)&&o.releasePointerCapture(v.id)},S=()=>{const v=c;c=null,i.steerTouch(0,0,!1),g(0,0),v!==null&&e.hasPointerCapture(v)&&e.releasePointerCapture(v)},E=()=>{x(),S(),i.reset(!0)};p(o,"pointerdown",(v=>{!m()||l||v.pointerType==="mouse"&&(v.button!==0||c!==null)||(v.preventDefault(),l={id:v.pointerId,type:v.pointerType,x:v.clientX,y:v.clientY},o.setPointerCapture(v.pointerId))})),p(o,"pointermove",(v=>{if((l==null?void 0:l.id)!==v.pointerId)return;if(!m()||v.pointerType==="mouse"&&!(v.buttons&1)){x();return}v.preventDefault();const b=Math.max(240,Math.min(o.clientWidth,o.clientHeight));i.look((v.clientX-l.x)/b,(v.clientY-l.y)/b,l.type!=="mouse",r()),l.x=v.clientX,l.y=v.clientY}));for(const v of["pointerup","pointercancel","lostpointercapture"])p(o,v,(b=>{b.pointerId===(l==null?void 0:l.id)&&x()}));const R=v=>{const b=e.getBoundingClientRect();let N=(v.clientX-b.left-b.width/2)/(b.width*.35),C=(v.clientY-b.top-b.height/2)/(b.height*.35);const I=Math.max(1,Math.hypot(N,C));N/=I,C/=I,i.steerTouch(N,C,!0),g(N,C)};p(e,"pointerdown",(v=>{v.pointerType==="mouse"||c!==null||!_()||(v.preventDefault(),v.stopPropagation(),(l==null?void 0:l.type)==="mouse"&&x(),c=v.pointerId,e.setPointerCapture(v.pointerId),R(v))})),p(e,"pointermove",(v=>{if(v.pointerId===c){if(!_()){S();return}v.preventDefault(),R(v)}}));for(const v of["pointerup","pointercancel","lostpointercapture"])p(e,v,(b=>{b.pointerId===c&&S()}));const M=v=>v instanceof HTMLElement&&!!v.closest('input,select,textarea,[contenteditable="true"]');return p(window,"keydown",(v=>{!wy.has(v.code)||M(v.target)||!_()||v.ctrlKey||v.metaKey||v.altKey||(v.preventDefault(),i.key(v.code,!0))})),p(window,"keyup",(v=>i.key(v.code,!1))),p(window,"blur",E),p(document,"visibilitychange",E),p(window,"resize",E),p(window,"orientationchange",E),p(o,"contextmenu",v=>v.preventDefault()),p(e,"contextmenu",v=>v.preventDefault()),{sync(){const v=r(),b=`${v.mode}/${v.paused}/${v.started}/${v.blocked}`;h&&b!==h&&(x(),S(),i.reset(v.paused||v.blocked)),h=b},dispose(){E(),d.forEach(v=>v())}}}function _C(o,e,i){if(!Number.isFinite(e)||e<=0||e>.25||i.paused){o.step(0,i);return}const r=Math.ceil(e/(1/60)),l=e/r;for(let c=0;c<r;c++)o.step(l,i)}class xC{constructor(){ve(this,"scale",1);ve(this,"elapsed",0);ve(this,"average",1/60);ve(this,"nextDecision",3)}reset(){this.scale=1,this.elapsed=0,this.average=1/60,this.nextDecision=3}observe(e,i,r){if(!i||r||!Number.isFinite(e)||e<=0||e>1||(this.elapsed+=e,this.average+=(Math.min(e,.2)-this.average)*(1-Math.exp(-e/1.5)),this.elapsed<this.nextDecision))return!1;const l=this.scale;return this.average>.028?(this.scale=Math.max(.6,Math.round((this.scale-.1)*100)/100),this.nextDecision=this.elapsed+3):this.average<.018?(this.scale=Math.min(1,Math.round((this.scale+.05)*100)/100),this.nextDecision=this.elapsed+10):this.nextDecision=this.elapsed+3,l!==this.scale}}const Ml=o=>(o=Math.max(0,Math.min(1,o)),o*o*(3-2*o)),yC=[2,4,1,0,3],SC=10.2;class Dy{constructor(){ve(this,"phase","idle");ve(this,"elapsed",0);ve(this,"destination",0);ve(this,"seed",7123);ve(this,"committed",!1);ve(this,"justCommitted",!1);ve(this,"energy",0);ve(this,"charge",0);ve(this,"veil",0)}get busy(){return this.phase!=="idle"}start(e,i,r=!1){return this.busy||r?!1:(this.destination=yC[e]??(e+1)%5,this.seed=Math.imul(i|0,1664525)+1013904223>>>0||1,this.elapsed=0,this.committed=!1,this.justCommitted=!1,this.energy=0,this.veil=0,this.charge=0,this.phase="charging",!0)}advance(e,i=!1){if(this.justCommitted=!1,!this.busy||i||!Number.isFinite(e)||e<=0)return;this.elapsed+=Math.min(e,.25);const r=this.elapsed;r<1.4?(this.phase="charging",this.charge=Ml(r/1.4),this.energy=this.charge*.035):r<4?(this.phase="accelerating",this.charge=1,this.energy=.035+.965*Ml((r-1.4)/2.6)):r<5.6?(this.phase="transit",this.charge=1,this.energy=1):r<9?(this.phase="arriving",this.energy=1-Ml((r-5.6)/3.4),this.charge=this.energy):r<SC?(this.phase="stabilized",this.energy=0,this.charge=0):(this.phase="idle",this.energy=0,this.charge=0),this.veil=r<4?0:r<4.8?Ml((r-4)/.8):r<5.6?1:1-Ml((r-5.6)/1.7),!this.committed&&r>=4.8&&(this.committed=!0,this.justCommitted=!0)}}function MC(o){const i=new Float32Array(4680),r=new Float32Array(780*2),l=new Float32Array(780*2*3);let c=4171;const h=()=>(c=c*16807%2147483647,(c-1)/2147483646);for(let E=0;E<780;E++){const R=h()*Math.PI*2,M=18+Math.pow(h(),1.3)*550,v=h();for(let b=0;b<2;b++)i.set([Math.cos(R)*M,Math.sin(R)*M*.72,v],(E*2+b)*3),r[E*2+b]=b}const d=new kn;d.setAttribute("position",new En(l,3)),d.setAttribute("lane",new En(i,3)),d.setAttribute("endpoint",new En(r,1));const p={time:{value:0},energy:{value:0},tint:{value:new ue("#b7d8ef")}},m=new ue("#d4ecfa"),_=new an({uniforms:p,transparent:!0,depthWrite:!1,blending:Rl,vertexShader:`attribute vec3 lane;attribute float endpoint;uniform float time,energy;varying float fade;
      void main(){float z=-12.-fract(lane.z+time)*800.;float trailLength=energy*(22.+energy*155.);
      vec3 p=vec3(lane.xy,z-endpoint*trailLength);fade=smoothstep(15.,65.,-z)*(1.-smoothstep(650.,810.,-z))*(.35+endpoint*.4);
      gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,fragmentShader:`uniform float energy;uniform vec3 tint;varying float fade;void main(){gl_FragColor=vec4(tint*1.35,fade*energy*.7);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`}),g=new hT(d,_);g.name="light-jump-streaks",g.frustumCulled=!1,g.renderOrder=3,o.add(g);let x=!0,S=0;return{configure(E,R){d.setDrawRange(0,(R?70:E==="Low"?180:E==="Medium"?420:780)*2),x=!0},update(E,R,M){R>0&&(S+=E*(.18+R*1.7)),p.time.value=S,p.energy.value=R,p.tint.value.copy(M).lerp(m,.7),g.visible=R>.001||x,x=!1}}}const EC=`
varying vec3 localPoint, surfaceNormal, worldPoint;
void main(){localPoint=position;worldPoint=(modelMatrix*vec4(position,1.)).xyz;surfaceNormal=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`,TC=`
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
`,El=[[[-480,-45,-1500],[1250,380,-4300],[-2200,950,-8200],[500,1600,-12e3],[2450,-500,-9200],[-700,850,-7900]],[[-540,-120,-1850],[1300,300,-4800],[-1450,420,-5700],[500,-90,-10800],[2600,700,-9600],[-850,900,-8200]],[[480,-100,-1800],[-1500,380,-3800],[1750,300,-6800],[-500,200,-10500],[3e3,-500,-9600],[-1100,900,-8500]],[[-470,35,-1900],[1350,500,-4600],[-2e3,-50,-7200],[700,120,-10500],[2400,-350,-8500],[-1e3,850,-9200]],[[-800,-200,-3500],[1900,430,-6800],[-2600,150,-9e3],[200,300,-12e3],[2900,-500,-1e4],[-1200,1e3,-10500]]].map(o=>o.map(e=>new Y(...e))),bC=[6,5,6,5,4],ip=[[135,310,180,570,150,90],[150,310,190,500,170,100],[135,360,210,650,190,95],[160,340,210,580,170,100],[180,420,260,820,180,100]],ro=[["#315e9c","#9c8fbd","#77758e","#3a4d6a","#6a6c7c","#8b829c"],["#276992","#8e9eae","#8b8e96","#31495f","#858d97","#6a849f"],["#857260","#b5956e","#92877a","#655c54","#8a7a67","#b3a38b"],["#2b7886","#7c9ba9","#7b8d94","#385765","#849b9e","#6f8e9f"],["#46576e","#6d768b","#6c7180","#293c58","#6d788a","#56697f"]].map(o=>o.map(e=>new ue(e))),ap=ro.map(o=>o.map(e=>e.clone().lerp(new ue("#cfbd9c"),.38)));function AC(o){const e=new Kr;e.name="regional-celestial-bodies",o.add(e);const i=new zl(1,32,20),r=(w,H)=>{const W=new an({uniforms:{baseColor:{value:ro[0][H].clone()},detailColor:{value:ap[0][H].clone()},kind:{value:w},alpha:{value:1},seed:{value:H*7.3+2.1},lightDirection:{value:H===3?new Y(-.85,.2,-.6):new Y(-.65,.4,H===1?.28:.75)}},vertexShader:EC,fragmentShader:TC,transparent:!0,depthWrite:!0}),K=new vn(i,W);return K.renderOrder=4,K.userData.kind=w>1.5?"rocky-body":"planet",e.add(K),K},l=[0,1,2,2,2,2].map((w,H)=>r(w,H)),c=El[0].map(w=>w.clone()),h=ip[0].slice(),d=new gi,p=new Y,m=new Y,_=l.map(()=>new Y),g=new Float32Array(6).fill(1);let x=0;const S=[0,1,2].map((w,H)=>{const W=r(2,H+2);return W.userData.kind="moon",{mesh:W,parent:w,radius:[29,44,52][H]}}),E=new an({uniforms:{color:{value:new ue("#a5a091")},alpha:{value:1}},transparent:!0,depthWrite:!1,side:ia,vertexShader:"varying vec2 point;void main(){point=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec2 point;uniform vec3 color;uniform float alpha;void main(){float r=length(point);float edge=smoothstep(1.32,1.42,r)*(1.-smoothstep(2.05,2.2,r));float bands=.35+.25*sin(r*180.)+.2*sin(r*47.);gl_FragColor=vec4(color*.65,edge*max(.1,bands)*alpha);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}),R=new vn(new fm(1.32,2.2,64),E);R.rotation.set(1.12,.2,-.27),R.renderOrder=5,e.add(R);const M=R.quaternion.clone(),v=new gT({color:"#76818c",roughness:1,metalness:0,transparent:!0,depthWrite:!1}),b=new oT(new cm(1,0),v,72);b.name="distant-rock-cluster",e.add(b);const N=new _n;let C=8353;const I=()=>(C=C*16807%2147483647,(C-1)/2147483646);for(let w=0;w<72;w++){N.position.set((I()-.5)*700,(I()-.5)*180,(I()-.5)*450),N.rotation.set(I()*3,I()*3,I()*3);const H=4+I()*10;N.scale.set(H,H*.7,H*1.2),N.updateMatrix(),b.setMatrixAt(w,N.matrix)}b.instanceMatrix.needsUpdate=!0,b.computeBoundingSphere();const z=[new Y(-1e3,80,-2800),new Y(1300,-180,-3600),new Y(-1700,-180,-4300),new Y(1600,80,-3900),new Y(-2200,-250,-6500)],P=z[0].clone();let V=6,U=3;return{group:e,setJump(w){x=w},reseed(w,H,W,K){m.copy(W),K?d.copy(K):d.identity();let ht=w>>>0;const at=()=>(ht=Math.imul(ht,1664525)+1013904223>>>0,ht/4294967296);for(let F=0;F<l.length;F++)_[F].set((at()-.5)*900,(at()-.5)*500,(at()-.5)*1e3),g[F]=.72+at()*.56,c[F].copy(El[H][F]).add(_[F]),h[F]=ip[H][F]*g[F],l[F].material.uniforms.seed.value=at()*90+1,(F===0||F===4)&&(l[F].material.uniforms.kind.value=at()>.5?0:2);for(const F of S)F.mesh.material.uniforms.seed.value=at()*90+1;P.copy(z[H]),P.x+=(at()-.5)*1300,P.y+=(at()-.5)*300},dispose(){b.dispose()},configure(w){V=w==="Low"?4:6,U=w==="Low"?2:3,b.count=w==="Low"?24:w==="Medium"?48:72},update(w,H,W,K){const ht=1-Math.exp(-w*.28),at=1-gn.smoothstep(x,.12,.65);for(let F=0;F<l.length;F++){const nt=l[F];c[F].x=gn.lerp(c[F].x,El[W][F].x+_[F].x,ht),c[F].y=gn.lerp(c[F].y,El[W][F].y+_[F].y,ht),c[F].z=gn.lerp(c[F].z,El[W][F].z+_[F].z,ht),h[F]=gn.lerp(h[F],ip[W][F]*g[F],ht),nt.visible=F<Math.min(V,bC[W]),nt.position.copy(c[F]).applyQuaternion(d).add(m).sub(K),nt.scale.setScalar(h[F]),nt.rotation.y=H*.002+F*.5,nt.material.uniforms.baseColor.value.lerp(ro[W][F],ht),nt.material.uniforms.detailColor.value.lerp(ap[W][F],ht),nt.material.uniforms.alpha.value=gn.smoothstep(nt.position.length()/h[F],1.05,1.4)*at}for(let F=0;F<S.length;F++){const{mesh:nt,parent:j,radius:ct}=S[F],St=l[j];nt.visible=F<U&&St.visible,nt.scale.setScalar(ct),p.set(h[j]*1.8,h[j]*.5,h[j]*.4).applyQuaternion(d),nt.position.copy(St.position).add(p),nt.material.uniforms.alpha.value=St.material.uniforms.alpha.value,nt.material.uniforms.baseColor.value.lerp(ro[W][2],ht),nt.material.uniforms.detailColor.value.lerp(ap[W][2],ht)}R.quaternion.copy(d).multiply(M),R.position.copy(l[1].position),R.scale.setScalar(h[1]),E.uniforms.alpha.value=l[1].material.uniforms.alpha.value,E.uniforms.color.value.lerp(ro[W][1],ht),P.lerp(z[W],ht),b.quaternion.copy(d),b.position.copy(P).applyQuaternion(d).add(m).sub(K),v.opacity=at,b.visible=at>.005,v.color.lerp(ro[W][2],ht)}}}const jp={Low:{pixelRatio:.9,stars:[550,2400,7800],cloudScale:.32,volumes:1,steps:4,octaves:2,bloom:!1},Medium:{pixelRatio:1,stars:[1e3,4800,19e3],cloudScale:.4,volumes:2,steps:7,octaves:2,bloom:!1},High:{pixelRatio:1.35,stars:[2200,1e4,48e3],cloudScale:.5,volumes:3,steps:10,octaves:3,bloom:!0}},Gx={Dark:{exposure:.8,cabin:.7,nebula:.65},Balanced:{exposure:1.12,cabin:1,nebula:.9},Cinematic:{exposure:1.32,cabin:1.12,nebula:1.08}},wa=[{name:"Violet Nebula",subtitle:"THE PERSEUS ARM",color:"#a879ef",second:"#315fab",accent:"#f4a4cf",density:1.05,band:.8,structure:1.15,bandWidth:1,warmth:.25,stars:.87,exposure:1},{name:"Stellar Ocean",subtitle:"AN ENDLESS SEA OF LIGHT",color:"#88bcf2",second:"#234a89",accent:"#c3dcff",density:.38,band:.7,structure:1.4,bandWidth:.65,warmth:.07,stars:1,exposure:1.04},{name:"Golden Core",subtitle:"THE HEART OF THE GALAXY",color:"#edbd79",second:"#956753",accent:"#fff2c9",density:.85,band:1.65,structure:1.8,bandWidth:1.4,warmth:.88,stars:1.4,exposure:.93},{name:"Cosmic Clouds",subtitle:"WHERE THE STARS ARE BORN",color:"#67cbbf",second:"#306c9c",accent:"#b1d5e8",density:1.3,band:.5,structure:.65,bandWidth:1.1,warmth:.16,stars:.7,exposure:1},{name:"Deep Silence",subtitle:"FAR FROM EVERYTHING",color:"#6d7fbb",second:"#253553",accent:"#a6b8e1",density:.12,band:.15,structure:.8,bandWidth:.45,warmth:.12,stars:.23,exposure:.84}],Uy=`
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
`,RC=`
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
`,CC=`
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
`,wC=`
varying vec3 worldPoint;
void main(){vec4 p=modelMatrix*vec4(position,1.);worldPoint=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}
`,DC=`
precision highp float;
varying vec3 worldPoint;
uniform vec3 center, radii, tint, second, accent;
uniform float time, density, visibility, energy, seed, structure;
uniform int steps, octaves;
uniform mat3 volumeRotation;
${Uy}
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
`,UC=`
varying vec3 direction;
void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`,NC=`
varying vec3 direction;
uniform vec3 tint, second, accent;
uniform float band, density, energy, bandWidth;
uniform mat3 layoutRotation, destinationRotation, volumeRotation;
uniform int octaves;
${Uy}
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
`;function LC(o){const e=wa[0],i=new vy,r=new wi(1,1,{type:Gi,depthBuffer:!1}),l=new pe,c={sky:{value:r.texture},reprojection:{value:l},tanHalf:{value:.6745},wideTanHalf:{value:.7554},aspect:{value:1},veil:{value:0},jumpTint:{value:new ue("#92bce0")}},h=new vn(new xo(2,2),new an({uniforms:c,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 uvv;void main(){uvv=uv;gl_Position=vec4(position.xy,1.,1.);}",fragmentShader:`varying vec2 uvv;uniform sampler2D sky;uniform mat3 reprojection;uniform float tanHalf,wideTanHalf,aspect,veil;uniform vec3 jumpTint;
      void main(){vec3 ray=reprojection*vec3((uvv-.5)*2.*tanHalf*vec2(aspect,1.),-1.);
      vec2 sampleUV=ray.xy/max(.001,-ray.z)/(2.*wideTanHalf*vec2(aspect,1.))+.5;
      gl_FragColor=texture2D(sky,clamp(sampleUV,.001,.999));gl_FragColor.rgb=mix(gl_FragColor.rgb,jumpTint*.38,veil*.985);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`}));h.frustumCulled=!1,h.renderOrder=-10,o.add(h);const d=new mi(75,1,.1,16e3),p=new gi,m=new gi,_=new gi,g=new Y,x=new Y,S=new qe,E=new Y,R=new Y;let M=!0,v=-1/0,b=1/24;const N=AC(o),C=new Y,I=new Y,z=new gi,P=new gi,V=new pe,U=new qe,w=new pe,H=new pe,W=wa.map(k=>({tint:new ue(k.color),second:new ue(k.second),accent:new ue(k.accent)})),K={jumpAmount:{value:0},layoutRotation:{value:V},destinationRotation:{value:w},volumeRotation:{value:H},time:{value:0},tint:{value:W[0].tint.clone()},second:{value:W[0].second.clone()},accent:{value:W[0].accent.clone()},density:{value:Number(e.density)},band:{value:Number(e.band)},warmth:{value:Number(e.warmth)},abundance:{value:e.stars/1.4},structure:{value:Number(e.structure)},bandWidth:{value:Number(e.bandWidth)},energy:{value:.9},octaves:{value:3},halo:{value:1}};let ht=7123;const at=()=>(ht=ht*16807%2147483647,(ht-1)/2147483646),F=()=>Math.sqrt(-2*Math.log(Math.max(1e-5,at())))*Math.cos(2*Math.PI*at()),j=[new Y(1900,1400,1900),new Y(5400,4e3,5400),new Y(15e3,11e3,15e3)].map((k,Q)=>{const pt=jp.High.stars[Q],Tt=new Float32Array(pt*3),bt=new Float32Array(pt),yt=new Float32Array(pt),Ut=new Float32Array(pt);for(let Bt=0;Bt<pt;Bt++){let Ot=(at()-.5)*k.x,$t=(at()-.5)*k.z,Ht=(at()-.5)*k.y;if(Q>0&&at()<.72){if(at()<.28){const Ue=Math.floor(at()*4);Ot=(Ue%2?.22:-.24)*k.x+F()*k.x*.045,$t=(Ue<2?-.27:.22)*k.z+F()*k.z*.055}Ht=-.42*Ot+F()*k.y*.035+Math.sin($t/k.z*5)*k.y*.045}Tt.set([Ot,Ht,$t],Bt*3);const ee=at();bt[Bt]=(ee>.987?12+at()*14:1.3+at()*4.6)*[.7,1.1,2][Q],yt[Bt]=at(),Ut[Bt]=at()}const O=new kn;O.setAttribute("position",new En(Tt,3)),O.setAttribute("radius",new En(bt,1)),O.setAttribute("temperature",new En(yt,1)),O.setAttribute("identity",new En(Ut,1));const le=new an({uniforms:{...K,offset:{value:new Y},span:{value:k},layoutOffset:{value:new Y},pixels:{value:400},dpr:{value:1}},vertexShader:RC,fragmentShader:CC,transparent:!0,depthWrite:!1,blending:Rl}),qt=new xy(O,le);return qt.frustumCulled=!1,qt.renderOrder=3,o.add(qt),qt}),ct=new vn(new zl(12500,32,16),new an({uniforms:K,vertexShader:UC,fragmentShader:NC,side:Gn,depthWrite:!1}));ct.renderOrder=-2,ct.frustumCulled=!1,i.add(ct);const St=new zl(1,24,16),Et=[{center:new Y(-180,110,-820),radii:new Y(680,330,770)},{center:new Y(600,-140,-1600),radii:new Y(1050,480,1e3)},{center:new Y(-850,220,-2400),radii:new Y(1200,520,1050)},{center:new Y(450,420,1200),radii:new Y(850,600,1e3)}],Ft=Et.map(()=>new Y),oe=Et.map((k,Q)=>{const pt=new an({uniforms:{...K,center:{value:k.center.clone()},radii:{value:k.radii},steps:{value:10},visibility:{value:1},seed:{value:4.3+Q*9.7}},vertexShader:wC,fragmentShader:DC,transparent:!0,depthWrite:!1,side:Gn}),Tt=new vn(St,pt);return Tt.position.copy(k.center),Tt.scale.copy(k.radii),Tt.renderOrder=1,i.add(Tt),Tt}),G=new xT("#b7c6ef","#080e1d",1.6);o.add(G);const dt=new MT("#dae6ff",2.8);return dt.position.set(-3,4,1),o.add(dt),{tint:K.tint.value,setJump(k,Q){K.jumpAmount.value=Math.max(k,Q),c.veil.value=Q,c.jumpTint.value.copy(K.tint.value).lerp(K.accent.value,.35),N.setJump(Math.max(k,Q))},reseed(k,Q,pt,Tt){C.copy(pt),Tt?z.copy(Tt):z.identity(),P.copy(z).invert(),w.setFromMatrix4(U.makeRotationFromQuaternion(z)),H.copy(w).transpose();for(const Ut of oe)Ut.quaternion.copy(z);let bt=k>>>0;const yt=()=>(bt=Math.imul(bt,1664525)+1013904223>>>0,bt/4294967296);U.makeRotationY((yt()-.5)*1.2),U.multiply(new qe().makeRotationZ((yt()-.5)*.8)),V.setFromMatrix4(U);for(const Ut of j){const O=Ut.material.uniforms.span.value;Ut.material.uniforms.layoutOffset.value.set((yt()-.5)*O.x,(yt()-.5)*O.y,(yt()-.5)*O.z)}for(let Ut=0;Ut<oe.length;Ut++)Ft[Ut].set((yt()-.5)*600,(yt()-.5)*250,(yt()-.5)*500),oe[Ut].material.uniforms.seed.value=yt()*80+2;N.reseed(k,Q,pt,z),M=!0},renderAtmosphere(k,Q,pt=!1){Q.updateWorldMatrix(!0,!1),Q.matrixWorld.decompose(g,p,x);const Tt=Q,bt=Math.tan(gn.degToRad(Tt.fov)*.5);(c.aspect.value!==Tt.aspect||c.tanHalf.value!==bt)&&(M=!0),c.tanHalf.value=bt,c.wideTanHalf.value=bt*1.12,c.aspect.value=Tt.aspect;const yt=performance.now()/1e3;if(pt||M||yt-v>=b||p.angleTo(m)>.075||E.distanceToSquared(R)>900){d.fov=gn.radToDeg(2*Math.atan(bt*1.12)),d.aspect=Tt.aspect,d.near=Tt.near,d.far=Tt.far,d.updateProjectionMatrix(),d.position.copy(g),d.quaternion.copy(p);const Ut=k.toneMapping;k.toneMapping=Ua,k.setRenderTarget(r),k.render(i,d),k.setRenderTarget(null),k.toneMapping=Ut,m.copy(p),R.copy(E),v=performance.now()/1e3,M=!1}_.copy(m).invert().multiply(p),S.makeRotationFromQuaternion(_),l.setFromMatrix4(S)},dispose(){r.dispose(),N.dispose();const k=new Set,Q=new Set;i.traverse(pt=>{pt instanceof vn&&(k.add(pt.geometry),Q.add(pt.material))}),k.forEach(pt=>pt.dispose()),Q.forEach(pt=>pt.dispose())},configure(k,Q,pt,Tt,bt,yt,Ut=!1){M=!0,b=Ut?1/15:k==="Low"?1/20:k==="Medium"?1/24:1/30;const O=jp[k];N.configure(k),K.octaves.value=O.octaves;const le=yt&&k!=="Low"?Gi:Vi;r.texture.type!==le&&(r.dispose(),r.texture.type=le),r.setSize(Math.max(1,Math.round(pt*Q*(Ut?.26:O.cloudScale))),Math.max(1,Math.round(Tt*Q*(Ut?.26:O.cloudScale)))),K.halo.value=.75+bt*.8,j.forEach((qt,Bt)=>{qt.geometry.setDrawRange(0,O.stars[Bt]),qt.material.uniforms.pixels.value=Tt*.64*Q,qt.material.uniforms.dpr.value=Q}),oe.forEach((qt,Bt)=>{qt.visible=Bt<O.volumes,qt.material.uniforms.steps.value=O.steps})},update(k,Q,pt,Tt,bt){I.copy(Tt).sub(C).applyQuaternion(P),E.copy(I),N.update(k,Q,pt,Tt);const yt=wa[pt],Ut=W[pt],O=1-Math.exp(-k*.55);K.time.value=Q,K.tint.value.lerp(Ut.tint,O),K.second.value.lerp(Ut.second,O),K.accent.value.lerp(Ut.accent,O),K.density.value=gn.lerp(K.density.value,yt.density,O),K.band.value=gn.lerp(K.band.value,yt.band,O),K.structure.value=gn.lerp(K.structure.value,yt.structure,O),K.bandWidth.value=gn.lerp(K.bandWidth.value,yt.bandWidth,O),K.warmth.value=gn.lerp(K.warmth.value,yt.warmth,O),K.abundance.value=gn.lerp(K.abundance.value,yt.stars/1.4,O),K.energy.value=gn.lerp(K.energy.value,bt,O),j.forEach(le=>le.material.uniforms.offset.value.copy(I)),oe.forEach((le,qt)=>{const Bt=Et[qt].center;le.position.set(gn.euclideanModulo(Bt.x+Ft[qt].x-I.x+4600,9200)-4600,gn.euclideanModulo(Bt.y+Ft[qt].y-I.y+3600,7200)-3600,gn.euclideanModulo(Bt.z+Ft[qt].z-I.z+4600,9200)-4600);const Ot=Math.max(Math.abs(le.position.x)/4600,Math.abs(le.position.y)/3600,Math.abs(le.position.z)/4600);le.position.applyQuaternion(z),le.material.uniforms.center.value.copy(le.position),le.material.uniforms.visibility.value=1-gn.smoothstep(Ot,.65,.95)})}}}function OC(o,e=!1){const i=o[0].index!==null,r=new Set(Object.keys(o[0].attributes)),l=new Set(Object.keys(o[0].morphAttributes)),c={},h={},d=o[0].morphTargetsRelative,p=new kn;let m=0;for(let _=0;_<o.length;++_){const g=o[_];let x=0;if(i!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+_+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const S in g.attributes){if(!r.has(S))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+_+'. All geometries must have compatible attributes; make sure "'+S+'" attribute exists among all geometries, or in none of them.'),null;c[S]===void 0&&(c[S]=[]),c[S].push(g.attributes[S]),x++}if(x!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+_+". Make sure all geometries have the same number of attributes."),null;if(d!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+_+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const S in g.morphAttributes){if(!l.has(S))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+_+".  .morphAttributes must be consistent throughout all geometries."),null;h[S]===void 0&&(h[S]=[]),h[S].push(g.morphAttributes[S])}if(e){let S;if(i)S=g.index.count;else if(g.attributes.position!==void 0)S=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+_+". The geometry must have either an index or a position attribute"),null;p.addGroup(m,S,_),m+=S}}if(i){let _=0;const g=[];for(let x=0;x<o.length;++x){const S=o[x].index;for(let E=0;E<S.count;++E)g.push(S.getX(E)+_);_+=o[x].attributes.position.count}p.setIndex(g)}for(const _ in c){const g=Vx(c[_]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+_+" attribute."),null;p.setAttribute(_,g)}for(const _ in h){const g=h[_][0].length;if(g===0)break;p.morphAttributes=p.morphAttributes||{},p.morphAttributes[_]=[];for(let x=0;x<g;++x){const S=[];for(let R=0;R<h[_].length;++R)S.push(h[_][R][x]);const E=Vx(S);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+_+" morphAttribute."),null;p.morphAttributes[_].push(E)}}return p}function Vx(o){let e,i,r,l=-1,c=0;for(let m=0;m<o.length;++m){const _=o[m];if(e===void 0&&(e=_.array.constructor),e!==_.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=_.itemSize),i!==_.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(r===void 0&&(r=_.normalized),r!==_.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(l===-1&&(l=_.gpuType),l!==_.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;c+=_.count*i}const h=new e(c),d=new En(h,i,r);let p=0;for(let m=0;m<o.length;++m){const _=o[m];if(_.isInterleavedBufferAttribute){const g=p/i;for(let x=0,S=_.count;x<S;x++)for(let E=0;E<i;E++){const R=_.getComponent(x,E);d.setComponent(x+g,E,R)}}else h.set(_.array,p);p+=_.count*i}return l!==void 0&&(d.gpuType=l),d}function PC(o){const e=new Kr;e.name="enclosed-flight-deck",o.add(e);const i={value:new ue("#ae80f0")},r={value:1},l=new ue("#c8d7e4"),c=(b,N)=>new an({uniforms:{baseColor:{value:new ue(b)},tint:i,brightness:r,polish:{value:N}},vertexShader:"varying vec3 point,faceNormal;void main(){point=position;faceNormal=normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 point,faceNormal;uniform vec3 baseColor,tint;uniform float brightness,polish;
      void main(){vec3 n=normalize(faceNormal),v=normalize(-point),l=normalize(vec3(0.,.95,.2)-point);
      float diffuse=max(0.,dot(n,l));float spec=pow(max(0.,dot(n,normalize(l+v))),24.);
      float front=max(0.,dot(n,normalize(vec3(0.,.7,-2.1)-point)));
      float fresnel=pow(1.-max(0.,dot(n,v)),2.);
      vec3 color=baseColor*(.55+diffuse*.7)+vec3(.65,.75,.85)*spec*polish+tint*(front*.05+fresnel*.035);
      gl_FragColor=vec4(color*brightness,1.);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`}),h=c("#3d4a57",.12),d=c("#73818c",.22),p=c("#1b2835",.04),m=new Ol({color:"#9bb9d1"}),_=new Map,g=(b,N)=>{let C=_.get(N);C||(C=[],_.set(N,C)),C.push(b)};function x(b,N,C,I,z,P,V,U=0,w=0,H=0){const W=new _o(z,P,V);W.rotateX(U),W.rotateY(w),W.rotateZ(H),W.translate(N,C,I),g(W,b)}for(const b of[-1,1])x(h,b*2.85,0,-.4,.24,3.9,5.8);x(h,0,1.86,-.4,5.95,.24,5.8),x(h,0,-1.84,-.4,5.95,.24,5.8),x(h,0,0,2.43,5.95,3.9,.24),x(h,0,1.64,-3.25,5.9,.42,.38),x(h,0,-1.5,-3.25,5.9,.72,.5);for(const b of[-1,1])x(h,b*2.7,.05,-3.25,.34,3.2,.4,0,0,b*.08),x(d,b*2.52,.06,-3.02,.055,2.95,.09,0,0,b*.08),x(m,b*2.475,.06,-2.99,.012,2.86,.018,0,0,b*.08);x(d,0,1.385,-3.04,5.12,.07,.11),x(m,0,1.335,-2.98,5.03,.012,.018),x(d,0,-1.12,-2.98,5.1,.075,.16),x(m,0,-1.07,-2.9,4.98,.012,.02),x(p,0,-1.4,-2.72,4.9,.44,1.12,.1),x(h,0,-1.46,-2.1,2.15,.3,1.05,.13),x(p,0,-1.12,-2.51,1.98,.56,.2,-.24);for(const b of[-1,1]){x(p,b*1.88,-1.18,-2.62,.91,.44,.22,-.15,-b*.18),x(h,b*2.08,-1.36,-1.05,.7,.38,2,.04,0,b*.04),x(d,b*2.08,-1.15,-1.05,.61,.025,1.8);for(let N=0;N<6;N++)x(N===0?m:p,b*(1.85+N%3*.15),-1.125,-.5-Math.floor(N/3)*.16,.075,.012,.06);for(const N of[-1.55,.05,1.65])x(p,b*2.7,.12,N,.08,1.6,1.28),x(d,b*2.63,.92,N,.045,.035,1.26),x(m,b*2.62,-.67,N,.018,.012,1.1);x(d,b*2.69,1.4,-.42,.13,.12,5.35),x(m,b*2.61,1.39,-.42,.018,.018,5.12),x(m,b*1.35,-1.705,.1,.025,.012,3.2)}for(const b of[-1.6,.35,1.9])x(d,0,1.69,b,5.42,.13,.12);x(p,0,1.68,.3,1.45,.08,1.4),x(m,0,1.62,.3,.65,.012,.15),x(p,0,-1.42,.45,1.15,.48,1.15),x(p,0,-.42,1,1.18,1.62,.3,-.1),x(p,0,-.05,2.25,1.4,3,.12),x(d,.72,-.05,2.14,.035,2.95,.02),x(m,-.72,-.05,2.14,.015,2.95,.02);const S=document.createElement("canvas");S.width=768,S.height=192;const E=S.getContext("2d");E.fillStyle="#0b1b28",E.fillRect(0,0,768,192),E.strokeStyle="#355865",E.lineWidth=1;for(let b=18;b<768;b+=28)E.beginPath(),E.moveTo(b,32),E.lineTo(b,174),E.stroke();E.strokeStyle="#9bcbd3",E.lineWidth=2,E.beginPath(),E.arc(100,103,51,.3,Math.PI*1.8),E.stroke(),E.fillStyle="#c2e1e6",E.font="18px monospace",E.fillText("AETHER / FLIGHT DECK",190,43),E.font="13px monospace",E.fillText("NAVIGATION  /  STABLE",190,89),E.fillText("LIFE SUPPORT  /  NOMINAL",190,122),E.fillStyle="#5c989f",E.fillRect(190,151,410,3);const R=new pT(S);R.colorSpace=ii;const M=new Ol({map:R,color:"#b8d3df"});function v(b,N,C,I,z,P,V=0){const U=new xo(I,z);U.rotateX(P),U.rotateY(V),U.translate(b,N,C),g(U,M)}v(0,-1.08,-2.38,1.77,.42,-.24);for(const b of[-1,1])v(b*1.87,-1.15,-2.48,.77,.3,-.15,-b*.18);for(const[b,N]of _){const C=OC(N);N.forEach(z=>z.dispose());const I=new vn(C,b);I.name=b===h?"enclosure-shell":"cabin-details",e.add(I)}return{group:e,update(b,N,C,I){e.visible=I;const z=C?.5:1;i.value.copy(b),r.value=N*z,m.color.lerpColors(b,l,.55).multiplyScalar(.6*N*z),M.color.copy(m.color).multiplyScalar(C?.5:1)},dispose(){R.dispose()}}}function zC(o,e,i,r,l={}){const c=new sC({antialias:!0,alpha:!1,powerPreference:"high-performance"});c.setClearColor("#040710"),c.outputColorSpace=ii,c.toneMapping=Kp,c.toneMappingExposure=Gx.Balanced.exposure,o.appendChild(c.domElement);const h=new vy,d=new mi(68,1,.1,16e3),p=new Kr;p.position.z=5,p.add(d),h.add(p);const m=l.jump??new Dy;let _=m.phase;const g={...e()},x=()=>(Object.assign(g,e()),g.blocked=g.blocked||m.busy,g),S=LC(h),E=MC(p),R=new ue,M=new ue("#bad9f3"),v=PC(p),b=vC(c.domElement,r,i,x),N=new Ey,C=new xC;let I=e().quality,z=e().performanceMode,P=e().adaptive,V=0,U=0,w=0,H="",W=!1,K=null,ht=null;const at=()=>{K&&(K.passes.forEach(ct=>ct.dispose()),K.dispose(),K=null,ht=null)},F=()=>{const ct=e(),St=ct.performanceMode?"Low":ct.quality,Et=jp[St],Ft=Math.max(1,o.clientWidth),oe=Math.max(1,o.clientHeight),G=Math.min(window.devicePixelRatio||1,Et.pixelRatio)*(ct.performanceMode?.85:ct.adaptive?C.scale:1);c.setPixelRatio(G),c.setSize(Ft,oe),d.aspect=Ft/oe,d.updateProjectionMatrix();const dt=!ct.performanceMode&&Et.bloom&&ct.bloom>0&&c.extensions.has("EXT_color_buffer_float");dt&&!K?(K=new hC(c),K.addPass(new dC(h,d)),ht=new mo(new he(Ft,oe),.2,.55,1.1),K.addPass(ht),K.addPass(new mC)):dt||at(),K&&(K.setPixelRatio(G),K.setSize(Ft,oe)),S.configure(St,G,Ft,oe,ct.bloom,c.extensions.has("EXT_color_buffer_float"),ct.performanceMode),E.configure(St,ct.reduced),H=`${ct.quality}/${ct.bloom}/${ct.performanceMode}/${ct.adaptive}/${ct.reduced}`},nt=()=>{var ct;N.getDelta(),i.reset(!0),(ct=l.onAudio)==null||ct.call(l,0,0,!0)};document.addEventListener("visibilitychange",nt),window.addEventListener("resize",F),F();const j=()=>{var Q,pt,Tt;if(W)return;V=requestAnimationFrame(j);const ct=N.getDelta(),St=ct>.25?0:ct,Et=e();if(document.hidden){i.reset(!0);return}const Ft=Math.min(ct,.25);m.advance(ct,Et.paused),m.phase!==_&&(_=m.phase,(Q=l.onPhase)==null||Q.call(l,m.phase)),m.justCommitted&&(S.reseed(m.seed,m.destination,i.position,i.shipQuaternion),(pt=l.onDestination)==null||pt.call(l,m.destination,m.seed));const oe=m.busy&&m.committed?m.destination:Et.region,G=m.energy*(Et.reduced?.16:Et.mode==="Meditation"?.55:1);b.sync(),x(),m.busy&&(g.mode="Autopilot",g.motion=0,g.started=!0,g.speed=Et.speed+Math.pow(m.energy,2)*(Et.reduced?100:360)),_C(i,ct,g),(Tt=l.onAudio)==null||Tt.call(l,G,m.charge,Et.paused),(Et.quality!==I||Et.performanceMode!==z||Et.adaptive!==P)&&(C.reset(),I=Et.quality,z=Et.performanceMode,P=Et.adaptive);const dt=C.observe(ct,Et.adaptive&&!Et.performanceMode,Et.paused);(H!==`${Et.quality}/${Et.bloom}/${Et.performanceMode}/${Et.adaptive}/${Et.reduced}`||dt)&&F(),Et.paused||(U+=St);const k=Gx[Et.lighting];c.toneMappingExposure=gn.damp(c.toneMappingExposure,k.exposure*wa[oe].exposure,.8,Ft),S.setJump(G,m.veil),S.update(Ft,U,oe,i.position,k.nebula),p.quaternion.copy(i.shipQuaternion),d.quaternion.copy(i.lookQuaternion),R.copy(S.tint).lerp(M,m.charge*.3),v.update(R,k.cabin*(1+m.charge*.12),Et.mode==="Meditation",Et.cockpit),E.update(Et.paused?0:Math.min(ct,.1),G,S.tint),ht&&(ht.strength=Et.bloom*(Et.mode==="Meditation"?.45:.8+G*.2)),w+=ct,!(Et.paused&&w<1/15)&&(w=0,S.renderAtmosphere(c,d),K?K.render():c.render(h,d))};return j(),()=>{var Et;W=!0,cancelAnimationFrame(V),b.dispose(),window.removeEventListener("resize",F),document.removeEventListener("visibilitychange",nt),(Et=l.onAudio)==null||Et.call(l,0,0,!0),at(),v.dispose(),S.dispose();const ct=new Set,St=new Set;h.traverse(Ft=>{if(Ft instanceof vn||Ft instanceof xy||Ft instanceof _y){ct.add(Ft.geometry);for(const oe of Array.isArray(Ft.material)?Ft.material:[Ft.material])St.add(oe)}}),ct.forEach(Ft=>Ft.dispose()),St.forEach(Ft=>Ft.dispose()),c.dispose(),c.domElement.remove()}}class IC{constructor(){ve(this,"ctx",null);ve(this,"master");ve(this,"engine");ve(this,"music");ve(this,"jumpGain");ve(this,"jumpTone");ve(this,"jumpFilter");ve(this,"lastDrive",-1);ve(this,"lastCharge",-1)}async start(){if(!this.ctx){const e=this.ctx=new AudioContext;this.master=e.createGain(),this.master.gain.value=0,this.master.connect(e.destination),this.engine=e.createGain(),this.music=e.createGain(),this.engine.connect(this.master),this.music.connect(this.master),[38,57,76].forEach(h=>{const d=e.createOscillator();d.type="sine",d.frequency.value=h;const p=e.createGain();p.gain.value=.09,d.connect(p).connect(this.engine),d.start()}),[130.81,196,261.63,293.66,392].forEach((h,d)=>{const p=e.createOscillator();p.frequency.value=h;const m=e.createGain();m.gain.value=.025;const _=e.createOscillator();_.frequency.value=.035+d*.009;const g=e.createGain();g.gain.value=.012,_.connect(g).connect(m.gain),p.connect(m).connect(this.music),p.start(),_.start()}),this.jumpGain=e.createGain(),this.jumpGain.gain.value=0,this.jumpGain.connect(this.engine),this.jumpTone=e.createOscillator(),this.jumpTone.frequency.value=42,this.jumpTone.connect(this.jumpGain),this.jumpTone.start();const i=e.createBuffer(1,e.sampleRate*2,e.sampleRate),r=i.getChannelData(0);let l=1237;for(let h=0;h<r.length;h++)l=l*16807%2147483647,r[h]=((l-1)/2147483646-.5)*.35;const c=e.createBufferSource();c.buffer=i,c.loop=!0,this.jumpFilter=e.createBiquadFilter(),this.jumpFilter.type="lowpass",this.jumpFilter.frequency.value=250,c.connect(this.jumpFilter).connect(this.jumpGain),c.start()}await this.ctx.resume()}set(e,i,r,l){var h,d,p;if(!this.ctx)return;const c=this.ctx.currentTime;(h=this.master)==null||h.gain.setTargetAtTime(e&&!l?.65:0,c,.4),(d=this.engine)==null||d.gain.setTargetAtTime(i,c,.2),(p=this.music)==null||p.gain.setTargetAtTime(r,c,.2)}jump(e,i,r){if(!this.ctx||!this.jumpGain||(r&&(e=i=0),Math.abs(e-this.lastDrive)<.01&&Math.abs(i-this.lastCharge)<.01&&!(e===0&&this.lastDrive!==0)))return;this.lastDrive=e,this.lastCharge=i;const l=this.ctx.currentTime;this.jumpGain.gain.cancelScheduledValues(l),this.jumpGain.gain.setTargetAtTime(.018*i+.055*e,l,.15),this.jumpTone.frequency.cancelScheduledValues(l),this.jumpTone.frequency.setTargetAtTime(42+i*12+e*145,l,.25),this.jumpFilter.frequency.cancelScheduledValues(l),this.jumpFilter.frequency.setTargetAtTime(250+e*1100,l,.25)}dispose(){var e;(e=this.ctx)==null||e.close()}}function BC(){const[o,e]=me.useState("Autopilot"),[i,r]=me.useState(18),[l,c]=me.useState(!1),[h,d]=me.useState(0),[p,m]=me.useState(()=>matchMedia("(any-pointer: coarse)").matches?"Low":"Medium"),[_,g]=me.useState(matchMedia("(prefers-reduced-motion: reduce)").matches),[x,S]=me.useState(.6),[E,R]=me.useState(!0),[M,v]=me.useState(!1),[b,N]=me.useState(!1),[C,I]=me.useState(""),[z,P]=me.useState(!1),[V,U]=me.useState(.35),[w,H]=me.useState(.5),[W,K]=me.useState(!0),[ht,at]=me.useState(""),[F,nt]=me.useState(!1),[j,ct]=me.useState(1),[St,Et]=me.useState(.7),[Ft,oe]=me.useState(!1),[G,dt]=me.useState(!1),[k,Q]=me.useState("Balanced"),[pt,Tt]=me.useState(.28),[bt,yt]=me.useState(!1),[Ut,O]=me.useState(!0),[le,qt]=me.useState("idle"),[Bt,Ot]=me.useState(7123),$t=me.useRef(new Dy),Ht=me.useRef(()=>{}),ee=le!=="idle",Ue=me.useRef(null),Ye=me.useRef(new gC),L=me.useRef(null),A=me.useRef(new IC),rt=me.useRef({mode:o,speed:i,paused:l,region:h,quality:p,reduced:_,motion:x,cockpit:E,started:M,blocked:!!C||ee,sensitivity:j,touchSensitivity:St,invertMouseX:Ft,invertMouseY:G,lighting:k,bloom:pt,performanceMode:bt,adaptive:Ut,worldSeed:Bt});rt.current={mode:o,speed:i,paused:l,region:h,quality:p,reduced:_,motion:x,cockpit:E,started:M,blocked:!!C||ee,sensitivity:j,touchSensitivity:St,invertMouseX:Ft,invertMouseY:G,lighting:k,bloom:pt,performanceMode:bt,adaptive:Ut,worldSeed:Bt},me.useEffect(()=>{try{return zC(L.current,()=>rt.current,Ye.current,Ue.current,{jump:$t.current,onPhase:qt,onDestination:(gt,Rt)=>{d(gt),Ot(Rt)},onAudio:(gt,Rt,Dt)=>A.current.jump(gt,Rt,Dt)})}catch{at("WebGL could not start. Please enable hardware acceleration and reload.")}},[]),me.useEffect(()=>()=>A.current.dispose(),[]),me.useEffect(()=>{A.current.set(z,V,w,l)},[z,V,w,l]),me.useEffect(()=>{const gt=setInterval(()=>{W&&M&&!l&&!$t.current.busy&&d(Rt=>(Rt+1)%5)},9e4);return()=>clearInterval(gt)},[W,M,l]),me.useEffect(()=>{const gt=Dt=>{Dt.target instanceof HTMLElement&&Dt.target.closest('input,select,textarea,[contenteditable="true"]')||(Dt.code==="KeyJ"&&!Dt.repeat&&!Dt.ctrlKey&&!Dt.metaKey&&!Dt.altKey&&(Dt.preventDefault(),Ht.current()),Dt.key.toLowerCase()==="h"&&N(ie=>!ie),Dt.code==="Space"&&!(Dt.target instanceof HTMLElement&&Dt.target.closest("button,a"))&&(Dt.preventDefault(),c(ie=>!ie)),Dt.key==="Escape"&&(N(!1),I("")))},Rt=()=>nt(!!document.fullscreenElement);return window.addEventListener("keydown",gt),document.addEventListener("fullscreenchange",Rt),()=>{window.removeEventListener("keydown",gt),document.removeEventListener("fullscreenchange",Rt)}},[]);const vt=async()=>{try{await A.current.start(),P(gt=>!gt)}catch{at("Audio is unavailable in this browser. The journey can continue silently.")}},At=()=>{v(!0),c(!1)},mt=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{at("Fullscreen is unavailable in this browser.")}},Wt=gt=>{$t.current.busy||(e(gt),v(!0))},Lt=()=>{$t.current.start(h,Bt,l)&&(v(!0),I(""),qt("charging"))};Ht.current=Lt;const Zt=l&&ee?"Jump paused":le==="charging"?"Charging drive…":le==="accelerating"?"Accelerating…":le==="transit"?"Crossing the light…":le==="arriving"?`Entering ${wa[$t.current.destination].name}…`:le==="stabilized"?`Arrived: ${wa[$t.current.destination].name}`:"";return lt.jsxs("main",{"data-jump-phase":le,"data-world-seed":Bt,className:`${b?"hidden-ui":""} ${o==="Meditation"?"meditation":""} ${o==="Manual Flight"?"manual-flight":""} ${C||l||ee?"controls-blocked":""} ${ee?"jump-active":""}`,children:[lt.jsx("div",{className:"universe",ref:L}),lt.jsx("div",{className:"vignette"}),lt.jsxs("div",{className:"touch-controls ui",children:[lt.jsxs("div",{ref:Ue,className:"touch-joystick",role:"group","aria-label":"Touch flight joystick",children:[lt.jsx("span",{className:"stick-cross",children:"+"}),lt.jsx("span",{className:"stick-thumb"}),lt.jsx("small",{children:"STEER"})]}),lt.jsx("span",{className:"touch-look-hint",children:"DRAG SPACE TO LOOK"})]}),lt.jsxs("header",{className:"ui",children:[lt.jsxs("a",{className:"brand",href:"#",onClick:gt=>{gt.preventDefault(),N(!1)},children:[lt.jsx(UE,{size:32}),lt.jsxs("span",{children:["COSMIC DRIFT",lt.jsx("small",{children:"A QUIETER KIND OF JOURNEY"})]})]}),lt.jsxs("nav",{children:[lt.jsx("span",{className:"live-dot"})," ALL SYSTEMS AT PEACE ",lt.jsx("span",{className:"nav-line"}),lt.jsx("button",{title:"Audio settings",onClick:()=>I(C==="audio"?"":"audio"),children:lt.jsx(bd,{size:18})}),lt.jsx("button",{title:"Settings",onClick:()=>I(C==="settings"?"":"settings"),children:lt.jsx(OE,{size:18})}),lt.jsx("button",{title:"Fullscreen",onClick:mt,children:lt.jsx(N_,{size:18})})]})]}),lt.jsxs("section",{className:"intro ui",children:[lt.jsxs("div",{className:"eyebrow",children:[lt.jsx("span",{})," LEAVE THE NOISE BEHIND"]}),lt.jsxs("h1",{children:["Nowhere to be.",lt.jsx("br",{}),"Just ",lt.jsx("em",{children:"drift."})]}),lt.jsxs("p",{children:["A quiet passage through an infinite universe.",lt.jsx("br",{}),"No destination. No demands. Just you and the stars."]}),lt.jsxs("button",{className:"start",onClick:At,children:[M?l?"Resume journey":"Journey in progress":"Start journey",lt.jsx(CE,{size:18})]}),lt.jsxs("div",{className:"intro-note",children:[lt.jsx("span",{})," ",M?"TAKE YOUR TIME. YOU HAVE ALL OF IT.":"YOUR OWN LITTLE CORNER OF INFINITY"]})]}),lt.jsxs("aside",{className:"region-label ui",children:[lt.jsx("span",{className:"coordinate",children:"SECTOR 07 / PERSEUS"}),lt.jsx("div",{className:"region-rule"}),lt.jsx("span",{className:"eyebrow",children:"YOU ARE DRIFTING THROUGH"}),lt.jsx("h2",{children:wa[h].name}),lt.jsx("p",{children:wa[h].subtitle}),lt.jsxs("button",{disabled:ee,onClick:()=>I(C==="regions"?"":"regions"),children:["Explore regions ",lt.jsx(D_,{size:14})]})]}),lt.jsxs("div",{className:"travel-marker ui",children:[lt.jsx("span",{children:"✧"}),lt.jsx("i",{}),lt.jsx("small",{children:"AN INFINITE UNIVERSE. AN UNHURRIED YOU."})]}),lt.jsxs("section",{className:"flight-deck ui",children:[lt.jsxs("div",{className:"deck-top",children:[lt.jsxs("div",{className:"deck-label",children:[lt.jsx("span",{className:"live-dot"}),l?"JOURNEY PAUSED":M?"JOURNEY ACTIVE":"READY WHEN YOU ARE"]}),lt.jsxs("div",{className:"jump-tools",children:[lt.jsx("span",{className:"jump-status",role:"status","aria-live":"polite",children:Zt}),lt.jsx("span",{className:"ship-name",children:"AETHER–01"}),lt.jsxs("button",{className:"jump-button",disabled:ee||l,onClick:Lt,"aria-keyshortcuts":"J",children:[lt.jsx(IE,{size:14}),"Light Jump",lt.jsx("kbd",{children:"J"})]})]})]}),lt.jsxs("div",{className:"deck-controls",children:[lt.jsx("div",{className:"mode-controls",children:[{name:"Autopilot",icon:wE},{name:"Manual Flight",icon:DE},{name:"Meditation",icon:zE}].map(gt=>lt.jsxs("button",{disabled:ee,className:o===gt.name?"selected":"",onClick:()=>Wt(gt.name),children:[lt.jsx(gt.icon,{size:17}),lt.jsxs("span",{children:[gt.name,gt.name==="Meditation"?" mode":""]})]},gt.name))}),lt.jsxs("div",{className:"speed",children:[lt.jsxs("label",{htmlFor:"speed",children:["DRIFT SPEED ",lt.jsxs("span",{children:[i.toFixed(0)," ",lt.jsx("small",{children:"km/s"})]})]}),lt.jsx("input",{id:"speed",disabled:ee,type:"range",min:"1",max:"80",value:i,onChange:gt=>r(+gt.target.value)}),lt.jsxs("div",{children:[lt.jsx("span",{children:"GENTLE"}),lt.jsx("span",{children:"SWIFT"})]})]}),lt.jsxs("div",{className:"deck-actions",children:[lt.jsx("button",{title:l?"Resume":"Pause",onClick:()=>c(gt=>!gt),children:l?lt.jsx(LE,{size:19}):lt.jsx(NE,{size:19})}),lt.jsx("button",{title:z?"Mute audio":"Enable audio",onClick:vt,children:z?lt.jsx(bd,{size:19}):lt.jsx(PE,{size:19})}),lt.jsx("button",{title:"Hide interface (H)",onClick:()=>N(!0),children:lt.jsx(U_,{size:19})})]})]})]}),lt.jsxs("footer",{className:"ui",children:[lt.jsxs("span",{children:[lt.jsx("span",{className:"key",children:"DRAG"})," TO LOOK AROUND ",lt.jsx("i",{})," ",lt.jsx("span",{className:"key",children:o==="Manual Flight"?"W A S D":"H"})," ",o==="Manual Flight"?"TO STEER":"TO HIDE INTERFACE"]}),lt.jsxs("span",{children:["BUILT FOR WANDERING ",lt.jsx("span",{className:"tiny-star",children:"✦"})]})]}),b&&lt.jsxs("button",{className:"restore",onClick:()=>N(!1),children:[lt.jsx(U_,{size:16})," Show controls · H"]}),C&&lt.jsxs("div",{className:"panel ui",children:[lt.jsxs("div",{className:"panel-head",children:[lt.jsx("span",{children:C==="regions"?"Choose your horizon":C==="audio"?"The sound of stillness":"Make space your own"}),lt.jsx("button",{title:"Close settings",onClick:()=>I(""),children:lt.jsx(L_,{size:19})})]}),C==="regions"?lt.jsxs(lt.Fragment,{children:[lt.jsx("p",{children:"Every corner of the universe has a different kind of quiet."}),wa.map((gt,Rt)=>lt.jsxs("button",{disabled:ee,className:`region-option ${h===Rt?"active":""}`,onClick:()=>d(Rt),children:[lt.jsx("span",{className:"orb",style:{background:`radial-gradient(circle at 30% 30%,${gt.color},${gt.second},#070a12)`}}),lt.jsxs("span",{children:[gt.name,lt.jsx("small",{children:gt.subtitle})]}),h===Rt?"●":lt.jsx(D_,{size:15})]},gt.name)),lt.jsxs("label",{className:"check",children:[lt.jsx("input",{type:"checkbox",checked:W,onChange:gt=>K(gt.target.checked)})," Automatically drift between regions · 90s"]})]}):C==="audio"?lt.jsxs(lt.Fragment,{children:[lt.jsx("p",{children:"Original ambient tones, synthesized just for this journey."}),lt.jsxs("button",{className:"sound-toggle",onClick:vt,children:[z?"Mute all audio":"Enable sound",lt.jsx(bd,{size:17})]}),lt.jsxs("label",{className:"setting",children:["Engine hum",lt.jsx("input",{"aria-label":"Engine volume",type:"range",min:"0",max:"1",step:".01",value:V,onChange:gt=>U(+gt.target.value)})]}),lt.jsxs("label",{className:"setting",children:["Ambient music",lt.jsx("input",{"aria-label":"Music volume",type:"range",min:"0",max:"1",step:".01",value:w,onChange:gt=>H(+gt.target.value)})]})]}):lt.jsxs(lt.Fragment,{children:[lt.jsxs("label",{className:"setting",children:["Graphics quality",lt.jsx("select",{"aria-label":"Graphics quality",value:p,onChange:gt=>m(gt.target.value),children:["Low","Medium","High"].map(gt=>lt.jsx("option",{children:gt},gt))})]}),lt.jsxs("label",{className:"check",children:[lt.jsx("input",{type:"checkbox",checked:bt,onChange:gt=>yt(gt.target.checked)})," Performance mode"]}),lt.jsxs("label",{className:"check",children:[lt.jsx("input",{type:"checkbox",checked:Ut,onChange:gt=>O(gt.target.checked)})," Adaptive resolution"]}),lt.jsx("small",{className:"setting-note",children:"Performance mode prioritizes smooth flight. Adaptive resolution adjusts image detail when rendering is slow."}),lt.jsxs("label",{className:"setting",children:["Environment lighting",lt.jsx("select",{"aria-label":"Environment lighting",value:k,onChange:gt=>Q(gt.target.value),children:["Dark","Balanced","Cinematic"].map(gt=>lt.jsx("option",{children:gt},gt))})]}),lt.jsxs("label",{className:"setting",children:["Soft bloom ",lt.jsxs("output",{children:[Math.round(pt*100),"%"]}),lt.jsx("input",{"aria-label":"Soft bloom",type:"range",min:"0",max:".6",step:".02",value:pt,onChange:gt=>Tt(+gt.target.value)}),lt.jsx("small",{className:"setting-note",children:"Low / Medium use lightweight star halos; High can add post-processing bloom."})]}),lt.jsxs("label",{className:"setting",children:["Steering / mouse sensitivity ",lt.jsxs("output",{children:[j.toFixed(2),"×"]}),lt.jsx("input",{"aria-label":"Steering and mouse sensitivity",type:"range",min:".25",max:"2",step:".05",value:j,onChange:gt=>ct(+gt.target.value)})]}),lt.jsxs("label",{className:"setting",children:["Touch sensitivity ",lt.jsxs("output",{children:[St.toFixed(2),"×"]}),lt.jsx("input",{"aria-label":"Touch sensitivity",type:"range",min:".25",max:"1.5",step:".05",value:St,onChange:gt=>Et(+gt.target.value)})]}),lt.jsxs("label",{className:"check",children:[lt.jsx("input",{type:"checkbox",checked:Ft,onChange:gt=>oe(gt.target.checked)})," Invert mouse horizontal axis"]}),lt.jsxs("label",{className:"check",children:[lt.jsx("input",{type:"checkbox",checked:G,onChange:gt=>dt(gt.target.checked)})," Invert mouse vertical axis"]}),lt.jsxs("label",{className:"setting",children:["Camera movement",lt.jsx("input",{"aria-label":"Camera movement",type:"range",min:"0",max:"1",step:".05",value:x,onChange:gt=>S(+gt.target.value)})]}),lt.jsxs("label",{className:"check",children:[lt.jsx("input",{type:"checkbox",checked:_,onChange:gt=>g(gt.target.checked)})," Reduced motion"]}),lt.jsxs("label",{className:"check",children:[lt.jsx("input",{type:"checkbox",checked:E,onChange:gt=>R(gt.target.checked)})," Show cockpit"]}),lt.jsxs("button",{className:"sound-toggle",onClick:mt,children:[F?"Exit fullscreen":"Enter fullscreen",lt.jsx(N_,{size:16})]})]})]}),ht&&lt.jsxs("div",{role:"alert",className:"error",children:[ht,lt.jsx("button",{onClick:()=>at(""),"aria-label":"Dismiss error",children:lt.jsx(L_,{size:16})})]})]})}TE.createRoot(document.getElementById("root")).render(lt.jsx(BC,{}));
