var lE=Object.defineProperty;var uE=(o,t,i)=>t in o?lE(o,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[t]=i;var de=(o,t,i)=>uE(o,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Fd={exports:{}},_l={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function cE(){if($_)return _l;$_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:s,key:f,ref:l!==void 0?l:null,props:u}}return _l.Fragment=t,_l.jsx=i,_l.jsxs=i,_l}var ty;function fE(){return ty||(ty=1,Fd.exports=cE()),Fd.exports}var J=fE(),Hd={exports:{}},ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ey;function hE(){if(ey)return ve;ey=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),x=Symbol.iterator;function E(G){return G===null||typeof G!="object"?null:(G=x&&G[x]||G["@@iterator"],typeof G=="function"?G:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,_={};function D(G,ft,j){this.props=G,this.context=ft,this.refs=_,this.updater=j||b}D.prototype.isReactComponent={},D.prototype.setState=function(G,ft){if(typeof G!="object"&&typeof G!="function"&&G!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,G,ft,"setState")},D.prototype.forceUpdate=function(G){this.updater.enqueueForceUpdate(this,G,"forceUpdate")};function R(){}R.prototype=D.prototype;function T(G,ft,j){this.props=G,this.context=ft,this.refs=_,this.updater=j||b}var L=T.prototype=new R;L.constructor=T,M(L,D.prototype),L.isPureReactComponent=!0;var z=Array.isArray;function P(){}var I={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function A(G,ft,j){var et=j.ref;return{$$typeof:o,type:G,key:ft,ref:et!==void 0?et:null,props:j}}function F(G,ft){return A(G.type,ft,G.props)}function Z(G){return typeof G=="object"&&G!==null&&G.$$typeof===o}function U(G){var ft={"=":"=0",":":"=2"};return"$"+G.replace(/[=:]/g,function(j){return ft[j]})}var Y=/\/+/g;function q(G,ft){return typeof G=="object"&&G!==null&&G.key!=null?U(""+G.key):ft.toString(36)}function k(G){switch(G.status){case"fulfilled":return G.value;case"rejected":throw G.reason;default:switch(typeof G.status=="string"?G.then(P,P):(G.status="pending",G.then(function(ft){G.status==="pending"&&(G.status="fulfilled",G.value=ft)},function(ft){G.status==="pending"&&(G.status="rejected",G.reason=ft)})),G.status){case"fulfilled":return G.value;case"rejected":throw G.reason}}throw G}function $(G,ft,j,et,xt){var Ct=typeof G;(Ct==="undefined"||Ct==="boolean")&&(G=null);var wt=!1;if(G===null)wt=!0;else switch(Ct){case"bigint":case"string":case"number":wt=!0;break;case"object":switch(G.$$typeof){case o:case t:wt=!0;break;case v:return wt=G._init,$(wt(G._payload),ft,j,et,xt)}}if(wt)return xt=xt(G),wt=et===""?"."+q(G,0):et,z(xt)?(j="",wt!=null&&(j=wt.replace(Y,"$&/")+"/"),$(xt,ft,j,"",function(H){return H})):xt!=null&&(Z(xt)&&(xt=F(xt,j+(xt.key==null||G&&G.key===xt.key?"":(""+xt.key).replace(Y,"$&/")+"/")+wt)),ft.push(xt)),1;wt=0;var Mt=et===""?".":et+":";if(z(G))for(var Lt=0;Lt<G.length;Lt++)et=G[Lt],Ct=Mt+q(et,Lt),wt+=$(et,ft,j,Ct,xt);else if(Lt=E(G),typeof Lt=="function")for(G=Lt.call(G),Lt=0;!(et=G.next()).done;)et=et.value,Ct=Mt+q(et,Lt++),wt+=$(et,ft,j,Ct,xt);else if(Ct==="object"){if(typeof G.then=="function")return $(k(G),ft,j,et,xt);throw ft=String(G),Error("Objects are not valid as a React child (found: "+(ft==="[object Object]"?"object with keys {"+Object.keys(G).join(", ")+"}":ft)+"). If you meant to render a collection of children, use an array instead.")}return wt}function Q(G,ft,j){if(G==null)return G;var et=[],xt=0;return $(G,et,"","",function(Ct){return ft.call(j,Ct,xt++)}),et}function gt(G){if(G._status===-1){var ft=G._result,j=ft();j.then(function(et){(G._status===0||G._status===-1)&&(G._status=1,G._result=et,j.status===void 0&&(j.status="fulfilled",j.value=et))},function(et){(G._status===0||G._status===-1)&&(G._status=2,G._result=et,j.status===void 0&&(j.status="rejected",j.reason=et))}),G._status===-1&&(G._status=0,G._result=j)}if(G._status===1)return G._result.default;throw G._result}var St=typeof reportError=="function"?reportError:function(G){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ft=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof G=="object"&&G!==null&&typeof G.message=="string"?String(G.message):String(G),error:G});if(!window.dispatchEvent(ft))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",G);return}console.error(G)};function At(G){var ft=I.T,j={};j.types=ft!==null?ft.types:null,I.T=j;try{var et=G(),xt=I.S;xt!==null&&xt(j,et),typeof et=="object"&&et!==null&&typeof et.then=="function"&&et.then(P,St)}catch(Ct){St(Ct)}finally{ft!==null&&j.types!==null&&(ft.types=j.types),I.T=ft}}function qt(G){var ft=I.T;if(ft!==null){var j=ft.types;j===null?ft.types=[G]:j.indexOf(G)===-1&&j.push(G)}else At(qt.bind(null,G))}var Ot={map:Q,forEach:function(G,ft,j){Q(G,function(){ft.apply(this,arguments)},j)},count:function(G){var ft=0;return Q(G,function(){ft++}),ft},toArray:function(G){return Q(G,function(ft){return ft})||[]},only:function(G){if(!Z(G))throw Error("React.Children.only expected to receive a single React element child.");return G}};return ve.Activity=g,ve.Children=Ot,ve.Component=D,ve.Fragment=i,ve.Profiler=l,ve.PureComponent=T,ve.StrictMode=s,ve.Suspense=p,ve.ViewTransition=y,ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,ve.__COMPILER_RUNTIME={__proto__:null,c:function(G){return I.H.useMemoCache(G)}},ve.addTransitionType=qt,ve.cache=function(G){return function(){return G.apply(null,arguments)}},ve.cacheSignal=function(){return null},ve.cloneElement=function(G,ft,j){if(G==null)throw Error("The argument must be a React element, but you passed "+G+".");var et=M({},G.props),xt=G.key;if(ft!=null)for(Ct in ft.key!==void 0&&(xt=""+ft.key),ft)!N.call(ft,Ct)||Ct==="key"||Ct==="__self"||Ct==="__source"||Ct==="ref"&&ft.ref===void 0||(et[Ct]=ft[Ct]);var Ct=arguments.length-2;if(Ct===1)et.children=j;else if(1<Ct){for(var wt=Array(Ct),Mt=0;Mt<Ct;Mt++)wt[Mt]=arguments[Mt+2];et.children=wt}return A(G.type,xt,et)},ve.createContext=function(G){return G={$$typeof:f,_currentValue:G,_currentValue2:G,_threadCount:0,Provider:null,Consumer:null},G.Provider=G,G.Consumer={$$typeof:u,_context:G},G},ve.createElement=function(G,ft,j){var et,xt={},Ct=null;if(ft!=null)for(et in ft.key!==void 0&&(Ct=""+ft.key),ft)N.call(ft,et)&&et!=="key"&&et!=="__self"&&et!=="__source"&&(xt[et]=ft[et]);var wt=arguments.length-2;if(wt===1)xt.children=j;else if(1<wt){for(var Mt=Array(wt),Lt=0;Lt<wt;Lt++)Mt[Lt]=arguments[Lt+2];xt.children=Mt}if(G&&G.defaultProps)for(et in wt=G.defaultProps,wt)xt[et]===void 0&&(xt[et]=wt[et]);return A(G,Ct,xt)},ve.createRef=function(){return{current:null}},ve.forwardRef=function(G){return{$$typeof:d,render:G}},ve.isValidElement=Z,ve.lazy=function(G){return{$$typeof:v,_payload:{_status:-1,_result:G},_init:gt}},ve.memo=function(G,ft){return{$$typeof:m,type:G,compare:ft===void 0?null:ft}},ve.startTransition=At,ve.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},ve.use=function(G){return I.H.use(G)},ve.useActionState=function(G,ft,j){return I.H.useActionState(G,ft,j)},ve.useCallback=function(G,ft){return I.H.useCallback(G,ft)},ve.useContext=function(G){return I.H.useContext(G)},ve.useDebugValue=function(){},ve.useDeferredValue=function(G,ft){return I.H.useDeferredValue(G,ft)},ve.useEffect=function(G,ft){return I.H.useEffect(G,ft)},ve.useEffectEvent=function(G){return I.H.useEffectEvent(G)},ve.useId=function(){return I.H.useId()},ve.useImperativeHandle=function(G,ft,j){return I.H.useImperativeHandle(G,ft,j)},ve.useInsertionEffect=function(G,ft){return I.H.useInsertionEffect(G,ft)},ve.useLayoutEffect=function(G,ft){return I.H.useLayoutEffect(G,ft)},ve.useMemo=function(G,ft){return I.H.useMemo(G,ft)},ve.useOptimistic=function(G,ft){return I.H.useOptimistic(G,ft)},ve.useReducer=function(G,ft,j){return I.H.useReducer(G,ft,j)},ve.useRef=function(G){return I.H.useRef(G)},ve.useState=function(G){return I.H.useState(G)},ve.useSyncExternalStore=function(G,ft,j){return I.H.useSyncExternalStore(G,ft,j)},ve.useTransition=function(){return I.H.useTransition()},ve.version="19.3.1",ve}var ny;function Em(){return ny||(ny=1,Hd.exports=hE()),Hd.exports}var ge=Em(),Gd={exports:{}},yl={},Vd={exports:{}},kd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iy;function dE(){return iy||(iy=1,(function(o){function t(k,$){var Q=k.length;k.push($);t:for(;0<Q;){var gt=Q-1>>>1,St=k[gt];if(0<l(St,$))k[gt]=$,k[Q]=St,Q=gt;else break t}}function i(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var $=k[0],Q=k.pop();if(Q!==$){k[0]=Q;t:for(var gt=0,St=k.length,At=St>>>1;gt<At;){var qt=2*(gt+1)-1,Ot=k[qt],G=qt+1,ft=k[G];if(0>l(Ot,Q))G<St&&0>l(ft,Ot)?(k[gt]=ft,k[G]=Q,gt=G):(k[gt]=Ot,k[qt]=Q,gt=qt);else if(G<St&&0>l(ft,Q))k[gt]=ft,k[G]=Q,gt=G;else break t}}return $}function l(k,$){var Q=k.sortIndex-$.sortIndex;return Q!==0?Q:k.id-$.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();o.unstable_now=function(){return f.now()-d}}var p=[],m=[],v=1,g=null,y=3,x=!1,E=!1,b=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;function T(k){for(var $=i(m);$!==null;){if($.callback===null)s(m);else if($.startTime<=k)s(m),$.sortIndex=$.expirationTime,t(p,$);else break;$=i(m)}}function L(k){if(b=!1,T(k),!E)if(i(p)!==null)E=!0,z||(z=!0,Z());else{var $=i(m);$!==null&&q(L,$.startTime-k)}}var z=!1,P=-1,I=5,N=-1;function A(){return M?!0:!(o.unstable_now()-N<I)}function F(){if(M=!1,z){var k=o.unstable_now();N=k;var $=!0;try{t:{E=!1,b&&(b=!1,D(P),P=-1),x=!0;var Q=y;try{e:{for(T(k),g=i(p);g!==null&&!(g.expirationTime>k&&A());){var gt=g.callback;if(typeof gt=="function"){g.callback=null,y=g.priorityLevel;var St=gt(g.expirationTime<=k);if(k=o.unstable_now(),typeof St=="function"){g.callback=St,T(k),$=!0;break e}g===i(p)&&s(p),T(k)}else s(p);g=i(p)}if(g!==null)$=!0;else{var At=i(m);At!==null&&q(L,At.startTime-k),$=!1}}break t}finally{g=null,y=Q,x=!1}$=void 0}}finally{$?Z():z=!1}}}var Z;if(typeof R=="function")Z=function(){R(F)};else if(typeof MessageChannel<"u"){var U=new MessageChannel,Y=U.port2;U.port1.onmessage=F,Z=function(){Y.postMessage(null)}}else Z=function(){_(F,0)};function q(k,$){P=_(function(){k(o.unstable_now())},$)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return y},o.unstable_next=function(k){switch(y){case 1:case 2:case 3:var $=3;break;default:$=y}var Q=y;y=$;try{return k()}finally{y=Q}},o.unstable_requestPaint=function(){M=!0},o.unstable_runWithPriority=function(k,$){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var Q=y;y=k;try{return $()}finally{y=Q}},o.unstable_scheduleCallback=function(k,$,Q){var gt=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?gt+Q:gt):Q=gt,k){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=Q+St,k={id:v++,callback:$,priorityLevel:k,startTime:Q,expirationTime:St,sortIndex:-1},Q>gt?(k.sortIndex=Q,t(m,k),i(p)===null&&k===i(m)&&(b?(D(P),P=-1):b=!0,q(L,Q-gt))):(k.sortIndex=St,t(p,k),E||x||(E=!0,z||(z=!0,Z()))),k},o.unstable_shouldYield=A,o.unstable_wrapCallback=function(k){var $=y;return function(){var Q=y;y=$;try{return k.apply(this,arguments)}finally{y=Q}}}})(kd)),kd}var ay;function pE(){return ay||(ay=1,Vd.exports=dE()),Vd.exports}var Xd={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy;function mE(){if(sy)return In;sy=1;var o=Em();function t(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),f=Symbol.for("react.optimistic_key");function d(v,g,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:x===f?f:""+x,children:v,containerInfo:g,implementation:y}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,In.browser=function(v){return{$$typeof:u,_reason:v}},In.createPortal=function(v,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return d(v,g,null,y)},In.flushSync=function(v){var g=p.T,y=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=g,s.p=y,s.d.f()}},In.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(v,g))},In.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},In.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var y=g.as,x=m(y,g.crossOrigin),E=typeof g.integrity=="string"?g.integrity:void 0,b=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:E,fetchPriority:b}):y==="script"&&s.d.X(v,{crossOrigin:x,integrity:E,fetchPriority:b,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},In.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=m(g.as,g.crossOrigin);s.d.M(v,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(v)},In.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,x=m(y,g.crossOrigin);s.d.L(v,y,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},In.preloadModule=function(v,g){if(typeof v=="string")if(g){var y=m(g.as,g.crossOrigin);s.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(v)},In.requestFormReset=function(v){s.d.r(v)},In.unstable_batchedUpdates=function(v,g){return v(g)},In.useFormState=function(v,g,y){return p.H.useFormState(v,g,y)},In.useFormStatus=function(){return p.H.useHostTransitionStatus()},In.version="19.3.1",In}var ry;function gE(){if(ry)return Xd.exports;ry=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Xd.exports=mE(),Xd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oy;function vE(){if(oy)return yl;oy=1;var o=pE(),t=Em(),i=gE();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,r=n;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){if(r=c.return,r!==null){a=r;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===a)return p(c),e;if(h===r)return p(c),n;h=h.sibling}throw Error(s(188))}if(a.return!==r.return)a=c,r=h;else{for(var S=!1,C=c.child;C;){if(C===a){S=!0,a=c,r=h;break}if(C===r){S=!0,r=c,a=h;break}C=C.sibling}if(!S){for(C=h.child;C;){if(C===a){S=!0,a=h,r=c;break}if(C===r){S=!0,r=h,a=c;break}C=C.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}function g(e,n,a,r,c,h){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,r,c,h)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&g(e.child,n,a,r,c,h))return!0;e=e.sibling}return!1}function y(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function x(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function E(e){var n=[null,null],a=y(e);return a===null||b(n,e,a.child,{foundSelf:!1}),n}function b(e,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&b(e,n,a.child,r))return!0;a=a.sibling}return!1}function M(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var _=null,D=null;function R(e,n,a){return e===a?!0:e===n?(_=e,!0):!1}function T(e,n,a){return e===a?(D=e,!1):e===n?(D!==null&&(_=e),!0):!1}function L(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function z(e,n,a){for(var r=0,c=e;c;c=a(c))r++;c=0;for(var h=n;h;h=a(h))c++;for(;0<r-c;)e=a(e),r--;for(;0<c-r;)n=a(n),c--;for(;r--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var P=Object.assign,I=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),Z=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),q=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),gt=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),At=Symbol.for("react.activity"),qt=Symbol.for("react.legacy_hidden"),Ot=Symbol.for("react.memo_cache_sentinel"),G=Symbol.for("react.view_transition"),ft=Symbol.for("react.recoverable"),j=Symbol.iterator;function et(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var xt=Symbol.for("react.client.reference");function Ct(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===xt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case F:return"Fragment";case U:return"Profiler";case Z:return"StrictMode";case $:return"Suspense";case Q:return"SuspenseList";case At:return"Activity";case G:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case q:return e.displayName||"Context";case Y:return(e._context.displayName||"Context")+".Consumer";case k:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case gt:return n=e.displayName||null,n!==null?n:Ct(e.type)||"Memo";case St:n=e._payload,e=e._init;try{return Ct(e(n))}catch{}}return null}var wt=Array.isArray,Mt=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Lt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H={pending:!1,data:null,method:null,action:null},bt=[],yt=-1;function ht(e){return{current:e}}function vt(e){0>yt||(e.current=bt[yt],bt[yt]=null,yt--)}function Rt(e,n){yt++,bt[yt]=e.current,e.current=n}var Nt=ht(null),It=ht(null),re=ht(null),oe=ht(null);function B(e,n){switch(Rt(re,n),Rt(It,e),Rt(Nt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?l_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=l_(n),e=u_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}vt(Nt),Rt(Nt,e)}function w(){vt(Nt),vt(It),vt(re)}function rt(e){var n=e.memoizedState;n!==null&&(Wr._currentValue=n.memoizedState,Rt(oe,e)),n=Nt.current;var a=u_(n,e.type);n!==a&&(Rt(It,e),Rt(Nt,a))}function dt(e){It.current===e&&(vt(Nt),vt(It)),oe.current===e&&(vt(oe),Wr._currentValue=H)}var Ut,_t;function Zt(e){if(Ut===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ut=n&&n[1]||"",_t=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ut+e+_t}var Gt=!1;function Jt(e,n){if(!e||Gt)return"";Gt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var Tt=function(){throw Error()};if(Object.defineProperty(Tt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Tt,[])}catch(Xt){var tt=Xt}Reflect.construct(e,[],Tt)}else{try{Tt.call()}catch(Xt){tt=Xt}Tt=!1;try{var lt=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Tt=!0,new e}finally{Tt&&(lt!==void 0?Object.defineProperty(e.prototype,"props",lt):delete e.prototype.props)}}}else{try{throw Error()}catch(Xt){tt=Xt}(Tt=e())&&typeof Tt.catch=="function"&&Tt.catch(function(){})}}catch(Xt){if(Xt&&tt&&typeof Xt.stack=="string")return[Xt.stack,tt.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=r.DetermineComponentFrameRoot(),S=h[0],C=h[1];if(S&&C){var X=S.split(`
`),it=C.split(`
`);for(c=r=0;r<X.length&&!X[r].includes("DetermineComponentFrameRoot");)r++;for(;c<it.length&&!it[c].includes("DetermineComponentFrameRoot");)c++;if(r===X.length||c===it.length)for(r=X.length-1,c=it.length-1;1<=r&&0<=c&&X[r]!==it[c];)c--;for(;1<=r&&0<=c;r--,c--)if(X[r]!==it[c]){if(r!==1||c!==1)do if(r--,c--,0>c||X[r]!==it[c]){var ct=`
`+X[r].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=r&&0<=c);break}}}finally{Gt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Zt(a):""}function te(e,n){switch(e.tag){case 26:case 27:case 5:return Zt(e.type);case 16:return Zt("Lazy");case 13:return e.child!==n&&n!==null?Zt("Suspense Fallback"):Zt("Suspense");case 19:return Zt("SuspenseList");case 0:case 15:return Jt(e.type,!1);case 11:return Jt(e.type.render,!1);case 1:return Jt(e.type,!0);case 31:return Zt("Activity");case 30:return Zt("ViewTransition");default:return""}}function Pt(e){try{var n="",a=null;do n+=te(e,a),a=e,e=e.return;while(e);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Yt=Object.prototype.hasOwnProperty,he=o.unstable_scheduleCallback,ie=o.unstable_cancelCallback,ut=o.unstable_shouldYield,se=o.unstable_requestPaint,W=o.unstable_now,Bt=o.unstable_getCurrentPriorityLevel,kt=o.unstable_ImmediatePriority,$t=o.unstable_UserBlockingPriority,zt=o.unstable_NormalPriority,Dt=o.unstable_LowPriority,ae=o.unstable_IdlePriority,_e=o.log,je=o.unstable_setDisableYieldValue,Re=null,sn=null;function Mn(e){if(typeof _e=="function"&&je(e),sn&&typeof sn.setStrictMode=="function")try{sn.setStrictMode(Re,e)}catch{}}var Bn=Math.clz32?Math.clz32:Yl,ua=Math.log,Co=Math.LN2;function Yl(e){return e>>>=0,e===0?32:31-(ua(e)/Co|0)|0}var Ss=256,ca=262144,Ms=4194304;function Si(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Es(e,n,a){var r=e.pendingLanes;if(r===0)return 0;var c=0,h=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var C=r&134217727;return C!==0?(r=C&~h,r!==0?c=Si(r):(S&=C,S!==0?c=Si(S):a||(a=C&~e,a!==0&&(c=Si(a))))):(C=r&~h,C!==0?c=Si(C):S!==0?c=Si(S):a||(a=r&~e,a!==0&&(c=Si(a)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:c}function Ia(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function jl(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var r=31-Bn(a),c=1<<r;n|=e[r],a&=~c}return n}function df(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wl(){var e=Ms;return Ms<<=1,(Ms&62914560)===0&&(Ms=4194304),e}function Ro(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ts(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pf(e,n,a,r,c,h){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,X=e.expirationTimes,it=e.hiddenUpdates;for(a=S&~a;0<a;){var ct=31-Bn(a),Tt=1<<ct;C[ct]=0,X[ct]=-1;var tt=it[ct];if(tt!==null)for(it[ct]=null,ct=0;ct<tt.length;ct++){var lt=tt[ct];lt!==null&&(lt.lane&=-536870913)}a&=~Tt}r!==0&&O(e,r,0),h!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=h&~(S&~n))}function O(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var r=31-Bn(n);e.entangledLanes|=n,e.entanglements[r]=e.entanglements[r]|1073741824|a&261930}function at(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var r=31-Bn(a),c=1<<r;c&n|e[r]&n&&(e[r]|=n),a&=~c}}function pt(e,n){var a=n&-n;return a=(a&42)!==0?1:mt(a),(a&(e.suspendedLanes|n))!==0?0:a}function mt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function st(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ft(){var e=Lt.p;return e!==0?e:(e=window.event,e===void 0?32:Y_(e.type))}function jt(e,n){var a=Lt.p;try{return Lt.p=e,n()}finally{Lt.p=a}}var Qt=Math.random().toString(36).slice(2),Vt="__reactFiber$"+Qt,ee="__reactProps$"+Qt,pe="__reactContainer$"+Qt,ce="__reactEvents$"+Qt,be="__reactListeners$"+Qt,He="__reactHandles$"+Qt,tn="__reactResources$"+Qt,Ie="__reactMarker$"+Qt,Oe="__reactLoad$"+Qt;function fe(e){delete e[Vt],delete e[ee],delete e[be],delete e[He]}function Be(e){var n;if(n=e[Vt])return n;for(var a=e.parentNode;a;){if(n=a[pe]||a[Vt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=A_(e);e!==null;){if(a=e[Vt])return a;e=A_(e)}return n}e=a,a=e.parentNode}return null}function Ee(e){if(e=e[Vt]||e[pe]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function En(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ri(e){var n=e[tn];return n||(n=e[tn]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Pe(e){e[Ie]=!0}function Ba(e){e[Oe]=void 0}var Ke=new Set,Yn={};function pn(e,n){ln(e,n),ln(e+"Capture",n)}function ln(e,n){for(Yn[e]=n,e=0;e<n.length;e++)Ke.add(n[e])}var Fn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fr={},Yi={};function wS(e){return Yt.call(Yi,e)?!0:Yt.call(fr,e)?!1:Fn.test(e)?Yi[e]=!0:(fr[e]=!0,!1)}var ze=!1;function Wm(){var e=ze;return ze=!1,e}function Zl(e,n,a){if(wS(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function Ql(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function fa(e,n,a,r){if(r===null)e.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,r)}}function oi(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zm(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function CS(e,n,a){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var c=r.get,h=r.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){a=""+S,h.call(this,S)}}),Object.defineProperty(e,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function mf(e){if(!e._valueTracker){var n=Zm(e)?"checked":"value";e._valueTracker=CS(e,n,""+e[n])}}function Qm(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return e&&(r=Zm(e)?e.checked?"true":"false":e.value),e=r,e!==a?(n.setValue(e),!0):!1}var RS=/[\n"\\]/g;function Mi(e){return e.replace(RS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function gf(e,n,a,r,c,h,S,C){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+oi(n)):e.value!==""+oi(n)&&(e.value=""+oi(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?S==="number"&&e.value==n?vf(e,oi(e.value)):vf(e,oi(n)):a!=null?vf(e,oi(a)):r!=null&&e.removeAttribute("value"),c==null&&h!=null&&(e.defaultChecked=!!h),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+oi(C):e.removeAttribute("name")}function Km(e,n,a,r,c,h,S,C){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){mf(e);return}a=a!=null?""+oi(a):"",n=n!=null?""+oi(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}r=r??c,r=typeof r!="function"&&typeof r!="symbol"&&!!r,e.checked=C?e.checked:!!r,e.defaultChecked=!!r,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),mf(e)}function vf(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function hr(e,n,a,r){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&r&&(e[a].defaultSelected=!0)}else{for(a=""+oi(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,r&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Jm(e,n,a){if(n!=null&&(n=""+oi(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+oi(a):""}function $m(e,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(wt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=oi(n),e.defaultValue=a,r=e.textContent,r===a&&r!==""&&r!==null&&(e.value=r),mf(e)}function dr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var DS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function t0(e,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":r?e.setProperty(n,a):typeof a!="number"||a===0||DS.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function e0(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?e.setProperty(r,""):r==="float"?e.cssFloat="":e[r]="",ze=!0);for(var c in n)r=n[c],n.hasOwnProperty(c)&&a[c]!==r&&(t0(e,c,r),ze=!0)}else for(var h in n)n.hasOwnProperty(h)&&t0(e,h,n[h])}function _f(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var NS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),US=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Kl(e){return US.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var yf=null;function xf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pr=null,mr=null;function n0(e){var n=Ee(e);if(n&&(e=n.stateNode)){var a=e[ee]||null;t:switch(e=n.stateNode,n.type){case"input":if(gf(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Mi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==e&&r.form===e.form){var c=r[ee]||null;if(!c)throw Error(s(90));gf(r,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===e.form&&Qm(r)}break t;case"textarea":Jm(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&hr(e,!!a.multiple,n,!1)}}}var Sf=!1;function i0(e,n,a){if(Sf)return e(n,a);Sf=!0;try{var r=e(n);return r}finally{if(Sf=!1,(pr!==null||mr!==null)&&(Ku(),pr&&(n=pr,e=mr,mr=pr=null,n0(n),e)))for(n=0;n<e.length;n++)n0(e[n])}}function Do(e,n){var a=e.stateNode;if(a===null)return null;var r=a[ee]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ha=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Mf=!1;if(ha)try{var No={};Object.defineProperty(No,"passive",{get:function(){Mf=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{Mf=!1}var Fa=null,Ef=null,Jl=null;function a0(){if(Jl)return Jl;var e,n=Ef,a=n.length,r,c="value"in Fa?Fa.value:Fa.textContent,h=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(r=1;r<=S&&n[a-r]===c[h-r];r++);return Jl=c.slice(e,1<r?1-r:void 0)}function $l(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function tu(){return!0}function s0(){return!1}function jn(e){function n(a,r,c,h,S){this._reactName=a,this._targetInst=c,this.type=r,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(h):h[C]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?tu:s0,this.isPropagationStopped=s0,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=tu)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=tu)},persist:function(){},isPersistent:tu}),n}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},eu=jn(Ha),Uo=P({},Ha,{view:0,detail:0}),LS=jn(Uo),Tf,bf,Lo,nu=P({},Uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Lo&&(Lo&&e.type==="mousemove"?(Tf=e.screenX-Lo.screenX,bf=e.screenY-Lo.screenY):bf=Tf=0,Lo=e),Tf)},movementY:function(e){return"movementY"in e?e.movementY:bf}}),r0=jn(nu),OS=P({},nu,{dataTransfer:0}),PS=jn(OS),zS=P({},Uo,{relatedTarget:0}),Af=jn(zS),IS=P({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),BS=jn(IS),FS=P({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),HS=jn(FS),GS=P({},Ha,{data:0}),o0=jn(GS),VS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},XS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=XS[e])?!!n[e]:!1}function wf(){return qS}var YS=P({},Uo,{key:function(e){if(e.key){var n=VS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=$l(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?kS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wf,charCode:function(e){return e.type==="keypress"?$l(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?$l(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),jS=jn(YS),WS=P({},nu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),l0=jn(WS),ZS=P({},Ha,{submitter:0}),QS=jn(ZS),KS=P({},Uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wf}),JS=jn(KS),$S=P({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),t1=jn($S),e1=P({},nu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),n1=jn(e1),i1=P({},Ha,{newState:0,oldState:0,source:0}),a1=jn(i1),s1=[9,13,27,32],Cf=ha&&"CompositionEvent"in window,Oo=null;ha&&"documentMode"in document&&(Oo=document.documentMode);var r1=ha&&"TextEvent"in window&&!Oo,u0=ha&&(!Cf||Oo&&8<Oo&&11>=Oo),c0=" ",f0=!1;function h0(e,n){switch(e){case"keyup":return s1.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function d0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gr=!1;function o1(e,n){switch(e){case"compositionend":return d0(n);case"keypress":return n.which!==32?null:(f0=!0,c0);case"textInput":return e=n.data,e===c0&&f0?null:e;default:return null}}function l1(e,n){if(gr)return e==="compositionend"||!Cf&&h0(e,n)?(e=a0(),Jl=Ef=Fa=null,gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return u0&&n.locale!=="ko"?null:n.data;default:return null}}var u1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function p0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!u1[e.type]:n==="textarea"}function m0(e,n,a,r){pr?mr?mr.push(r):mr=[r]:pr=r,n=ic(n,"onChange"),0<n.length&&(a=new eu("onChange","change",null,a,r),e.push({event:a,listeners:n}))}var Po=null,zo=null;function c1(e){n_(e,0)}function iu(e){var n=En(e);if(Qm(n))return e}function g0(e,n){if(e==="change")return n}var v0=!1;if(ha){var Rf;if(ha){var Df="oninput"in document;if(!Df){var _0=document.createElement("div");_0.setAttribute("oninput","return;"),Df=typeof _0.oninput=="function"}Rf=Df}else Rf=!1;v0=Rf&&(!document.documentMode||9<document.documentMode)}function y0(){Po&&(Po.detachEvent("onpropertychange",x0),zo=Po=null)}function x0(e){if(e.propertyName==="value"&&iu(zo)){var n=[];m0(n,zo,e,xf(e)),i0(c1,n)}}function f1(e,n,a){e==="focusin"?(y0(),Po=n,zo=a,Po.attachEvent("onpropertychange",x0)):e==="focusout"&&y0()}function h1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return iu(zo)}function d1(e,n){if(e==="click")return iu(n)}function p1(e,n){if(e==="input"||e==="change")return iu(n)}function m1(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var li=typeof Object.is=="function"?Object.is:m1;function Io(e,n){if(li(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var c=a[r];if(!Yt.call(n,c)||!li(e[c],n[c]))return!1}return!0}function Nf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function S0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function M0(e,n){var a=S0(e);e=0;for(var r;a;){if(a.nodeType===3){if(r=e+a.textContent.length,e<=n&&r>=n)return{node:a,offset:n-e};e=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=S0(a)}}function E0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?E0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function T0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Nf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Nf(e.document)}return n}function Uf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var g1=ha&&"documentMode"in document&&11>=document.documentMode,vr=null,Lf=null,Bo=null,Of=!1;function b0(e,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Of||vr==null||vr!==Nf(r)||(r=vr,"selectionStart"in r&&Uf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Bo&&Io(Bo,r)||(Bo=r,r=ic(Lf,"onSelect"),0<r.length&&(n=new eu("onSelect","select",null,n,a),e.push({event:n,listeners:r}),n.target=vr)))}function bs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var _r={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionrun:bs("Transition","TransitionRun"),transitionstart:bs("Transition","TransitionStart"),transitioncancel:bs("Transition","TransitionCancel"),transitionend:bs("Transition","TransitionEnd")},Pf={},A0={};ha&&(A0=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function As(e){if(Pf[e])return Pf[e];if(!_r[e])return e;var n=_r[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in A0)return Pf[e]=n[a];return e}var w0=As("animationend"),C0=As("animationiteration"),R0=As("animationstart"),v1=As("transitionrun"),_1=As("transitionstart"),y1=As("transitioncancel"),D0=As("transitionend"),N0=new Map,zf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");zf.push("scrollEnd");function Li(e,n){N0.set(e,n),pn(n,[e])}var x1=0;function da(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Ii.identifierPrefix;var a=x1++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function U0(e){if(e==null||typeof e=="string")return e;var n=null,a=Br;if(a!==null)for(var r=0;r<a.length;r++){var c=e[a[r]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??e.default}function pa(e,n){return e=U0(e),n=U0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var au=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ei=[],yr=0,If=0;function su(){for(var e=yr,n=If=yr=0;n<e;){var a=Ei[n];Ei[n++]=null;var r=Ei[n];Ei[n++]=null;var c=Ei[n];Ei[n++]=null;var h=Ei[n];if(Ei[n++]=null,r!==null&&c!==null){var S=r.pending;S===null?c.next=c:(c.next=S.next,S.next=c),r.pending=c}h!==0&&L0(a,c,h)}}function ru(e,n,a,r){Ei[yr++]=e,Ei[yr++]=n,Ei[yr++]=a,Ei[yr++]=r,If|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function Bf(e,n,a,r){return ru(e,n,a,r),ou(e)}function ws(e,n){return ru(e,null,null,n),ou(e)}function L0(e,n,a){e.lanes|=a;var r=e.alternate;r!==null&&(r.lanes|=a);for(var c=!1,h=e.return;h!==null;)h.childLanes|=a,r=h.alternate,r!==null&&(r.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(c=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,c&&n!==null&&(c=31-Bn(a),e=h.hiddenUpdates,r=e[c],r===null?e[c]=[n]:r.push(n),n.lane=a|536870912),h):null}function ou(e){if(50<rl)throw rl=0,Qu=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var xr={};function S1(e,n,a,r){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,r){return new S1(e,n,a,r)}function Ff(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ma(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function O0(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function lu(e,n,a,r,c,h){var S=0;if(r=e,typeof r=="function")Ff(r)&&(S=1);else if(typeof r=="string")S=ZM(e,a,Nt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(r){case At:return e=ti(31,a,n,c),e.elementType=At,e.lanes=h,e;case F:return Cs(a.children,c,h,n);case Z:S=8,c|=24;break;case U:return e=ti(12,a,n,c|2),e.elementType=U,e.lanes=h,e;case $:return e=ti(13,a,n,c),e.elementType=$,e.lanes=h,e;case Q:return e=ti(19,a,n,c),e.elementType=Q,e.lanes=h,e;case qt:case G:return e=c|32,e=ti(30,a,n,e),e.elementType=G,e.lanes=h,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case q:S=10;break t;case Y:S=9;break t;case k:S=11;break t;case gt:S=14;break t;case St:S=16,r=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),r=null}return n=ti(S,a,n,c),n.elementType=e,n.type=r,n.lanes=h,n}function Cs(e,n,a,r){return e=ti(7,e,r,n),e.lanes=a,e}function Hf(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function P0(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Gf(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var z0=new WeakMap;function Ti(e,n){if(typeof e=="object"&&e!==null){var a=z0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Pt(n)},z0.set(e,n),n)}return{value:e,source:n,stack:Pt(n)}}var Sr=[],Mr=0,uu=null,Fo=0,bi=[],Ai=0,Ga=null,Wi=1,Zi="";function ga(e,n){Sr[Mr++]=Fo,Sr[Mr++]=uu,uu=e,Fo=n}function I0(e,n,a){bi[Ai++]=Wi,bi[Ai++]=Zi,bi[Ai++]=Ga,Ga=e;var r=Wi;e=Zi;var c=32-Bn(r)-1;r&=~(1<<c),a+=1;var h=32-Bn(n)+c;if(30<h){var S=c-c%5;h=(r&(1<<S)-1).toString(32),r>>=S,c-=S,Wi=1<<32-Bn(n)+c|a<<c|r,Zi=h+e}else Wi=1<<h|a<<c|r,Zi=e}function cu(e){e.return!==null&&(ga(e,1),I0(e,1,0))}function Vf(e){for(;e===uu;)uu=Sr[--Mr],Sr[Mr]=null,Fo=Sr[--Mr],Sr[Mr]=null;for(;e===Ga;)Ga=bi[--Ai],bi[Ai]=null,Zi=bi[--Ai],bi[Ai]=null,Wi=bi[--Ai],bi[Ai]=null}function B0(e,n){bi[Ai++]=Wi,bi[Ai++]=Zi,bi[Ai++]=Ga,Wi=n.id,Zi=n.overflow,Ga=e}var Cn=null,Je=null,Te=!1,Va=null,wi=!1,kf=Error(s(519));function ka(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ho(Ti(n,e)),kf}function F0(e){var n=e.stateNode,a=e.type,r=e.memoizedProps;switch(n[Vt]=e,n[ee]=r,a){case"dialog":Ce("cancel",n),Ce("close",n);break;case"iframe":case"object":case"embed":Ce("load",n);break;case"video":case"audio":for(a=0;a<ll.length;a++)Ce(ll[a],n);break;case"source":Ce("error",n);break;case"img":case"image":case"link":Ce("error",n),Ce("load",n);break;case"details":Ce("toggle",n);break;case"input":Ce("invalid",n),Km(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":Ce("invalid",n);break;case"textarea":Ce("invalid",n),$m(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||r_(n.textContent,a)?(r.popover!=null&&(Ce("beforetoggle",n),Ce("toggle",n)),r.onScroll!=null&&Ce("scroll",n),r.onScrollEnd!=null&&Ce("scrollend",n),r.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||ka(e,!0)}function fu(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:Cn=Cn.return}}function Er(e){if(e!==Cn)return!1;if(!Te)return fu(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||yd(e.type,e.memoizedProps)),a=!a),a&&Je&&ka(e),fu(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=b_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Je=b_(e)}else n===27?(n=Je,ss(e.type)?(e=Cd,Cd=null,Je=e):Je=n):Je=Cn?Ri(e.stateNode.nextSibling):null;return!0}function Rs(){Je=Cn=null,Te=!1}function Xf(){var e=Va;return e!==null&&(ii===null?ii=e:ii.push.apply(ii,e),Va=null),e}function Ho(e){Va===null?Va=[e]:Va.push(e)}var qf=ht(null),Ds=null,va=null;function Xa(e,n,a){Rt(qf,n._currentValue),n._currentValue=a}function _a(e){e._currentValue=qf.current,vt(qf)}function hu(e,n,a){for(;e!==null;){var r=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),e===a)break;e=e.return}}function Yf(e,n,a,r){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var h=c.dependencies;if(h!==null){var S=c.child;h=h.firstContext;t:for(;h!==null;){var C=h;h=c;for(var X=0;X<n.length;X++)if(C.context===n[X]){h.lanes|=a,C=h.alternate,C!==null&&(C.lanes|=a),hu(h.return,a,e),r||(S=null);break t}h=C.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(s(341));S.lanes|=a,h=S.alternate,h!==null&&(h.lanes|=a),hu(S,a,e),S=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,S=c.alternate,S!==null&&(S.lanes|=a),hu(c.return,a,e),S=c.child,S=S!==null?S.sibling:null):S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Ns(e,n,a,r){e=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var C=c.type;li(c.pendingProps.value,S.value)||(e!==null?e.push(C):e=[C])}}else if(c===oe.current){if(S=c.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Wr):e=[Wr])}c=c.return}return e!==null&&Yf(n,e,a,r),n.flags|=262144,e!==null}function du(e){for(e=e.firstContext;e!==null;){if(!li(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Us(e){Ds=e,va=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return H0(Ds,e)}function pu(e,n){return Ds===null&&Us(e),H0(e,n)}function H0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},va===null){if(e===null)throw Error(s(308));va=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else va=va.next=n;return a}var M1=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,r){e.push(r)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},E1=o.unstable_scheduleCallback,T1=o.unstable_NormalPriority,mn={$$typeof:q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function jf(){return{controller:new M1,data:new Map,refCount:0}}function Go(e){e.refCount--,e.refCount===0&&E1(T1,function(){e.controller.abort()})}function G0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var r=n[e];a.indexOf(r)===-1&&a.push(r)}}}var Vo=null;function b1(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var ko=null,Wf=0,Ls=0,Tr=null;function A1(e,n){if(ko===null){var a=ko=[];Wf=0,Ls=cd(),Tr={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Wf++,n.then(V0,V0),n}function V0(){if(--Wf===0&&(Vo=null,ko!==null)){Tr!==null&&(Tr.status="fulfilled");var e=ko;ko=null,Ls=0,Tr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function w1(e,n){var a=[],r={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){r.status="fulfilled",r.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(r.status="rejected",r.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),r}var k0=Mt.S;Mt.S=function(e,n){if(Pv=W(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&A1(e,n),Vo!==null)for(var a=Vr;a!==null;)G0(a,Vo),a=a.next;if(a=e.types,a!==null){for(var r=Vr;r!==null;)G0(r,a),r=r.next;if(Ls!==0){r=Vo,r===null&&(r=Vo=[]);for(var c=0;c<a.length;c++){var h=a[c];r.indexOf(h)===-1&&r.push(h)}}}k0!==null&&k0(e,n)};var Os=ht(null);function Zf(){var e=Os.current;return e!==null?e:Qe.pooledCache}function mu(e,n){n===null?Rt(Os,Os.current):Rt(Os,n.pool)}function X0(){var e=Zf();return e===null?null:{parent:mn._currentValue,pool:e}}var br=Error(s(460)),Qf=Error(s(474)),gu=Error(s(542)),vu={then:function(){}};function q0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Y0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,W0(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(ji,ji);else{if(e=Qe,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(r){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=r}},function(r){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,W0(e),e}throw zs=n,br}}function Ps(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(zs=a,br):a}}var zs=null;function j0(){if(zs===null)throw Error(s(459));var e=zs;return zs=null,e}function W0(e){if(e===br||e===gu)throw Error(s(483))}var Ar=null,Xo=0;function _u(e){var n=Xo;return Xo+=1,Ar===null&&(Ar=[]),Y0(Ar,e,n)}function qa(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function yu(e,n){throw n.$$typeof===I?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Z0(e){function n(nt,K){if(e){var ot=nt.deletions;ot===null?(nt.deletions=[K],nt.flags|=16):ot.push(K)}}function a(nt,K){if(!e)return null;for(;K!==null;)n(nt,K),K=K.sibling;return null}function r(nt){for(var K=new Map;nt!==null;)nt.key===null?K.set(nt.index,nt):K.set(nt.key,nt),nt=nt.sibling;return K}function c(nt,K){return nt=ma(nt,K),nt.index=0,nt.sibling=null,nt}function h(nt,K,ot){return nt.index=ot,e?(ot=nt.alternate,ot!==null?(ot=ot.index,ot<K?(nt.flags|=2,K):ot):(nt.flags|=134217730,K)):(nt.flags|=1048576,K)}function S(nt){return e&&nt.alternate===null&&(nt.flags|=134217730),nt}function C(nt,K,ot,Et){return K===null||K.tag!==6?(K=Hf(ot,nt.mode,Et),K.return=nt,K):(K=c(K,ot),K.return=nt,K)}function X(nt,K,ot,Et){var Kt=ot.type;return Kt===F?(nt=ct(nt,K,ot.props.children,Et,ot.key),qa(nt,ot),nt):K!==null&&(K.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===St&&Ps(Kt)===K.type)?(K=c(K,ot.props),qa(K,ot),K.return=nt,K):(K=lu(ot.type,ot.key,ot.props,null,nt.mode,Et),qa(K,ot),K.return=nt,K)}function it(nt,K,ot,Et){return K===null||K.tag!==4||K.stateNode.containerInfo!==ot.containerInfo||K.stateNode.implementation!==ot.implementation?(K=Gf(ot,nt.mode,Et),K.return=nt,K):(K=c(K,ot.children||[]),K.return=nt,K)}function ct(nt,K,ot,Et,Kt){return K===null||K.tag!==7?(K=Cs(ot,nt.mode,Et,Kt),K.return=nt,K):(K=c(K,ot),K.return=nt,K)}function Tt(nt,K,ot){if(typeof K=="string"&&K!==""||typeof K=="number"||typeof K=="bigint")return K=Hf(""+K,nt.mode,ot),K.return=nt,K;if(typeof K=="object"&&K!==null){switch(K.$$typeof){case N:return ot=lu(K.type,K.key,K.props,null,nt.mode,ot),qa(ot,K),ot.return=nt,ot;case A:return K=Gf(K,nt.mode,ot),K.return=nt,K;case St:return K=Ps(K),Tt(nt,K,ot)}if(wt(K)||et(K))return K=Cs(K,nt.mode,ot,null),K.return=nt,K;if(typeof K.then=="function")return Tt(nt,_u(K),ot);if(K.$$typeof===q)return Tt(nt,pu(nt,K),ot);yu(nt,K)}return null}function tt(nt,K,ot,Et){var Kt=K!==null?K.key:null;if(typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint")return Kt!==null?null:C(nt,K,""+ot,Et);if(typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case N:return ot.key===Kt?X(nt,K,ot,Et):null;case A:return ot.key===Kt?it(nt,K,ot,Et):null;case St:return ot=Ps(ot),tt(nt,K,ot,Et)}if(wt(ot)||et(ot))return Kt!==null?null:ct(nt,K,ot,Et,null);if(typeof ot.then=="function")return tt(nt,K,_u(ot),Et);if(ot.$$typeof===q)return tt(nt,K,pu(nt,ot),Et);yu(nt,ot)}return null}function lt(nt,K,ot,Et,Kt){if(typeof Et=="string"&&Et!==""||typeof Et=="number"||typeof Et=="bigint")return nt=nt.get(ot)||null,C(K,nt,""+Et,Kt);if(typeof Et=="object"&&Et!==null){switch(Et.$$typeof){case N:return nt=nt.get(Et.key===null?ot:Et.key)||null,X(K,nt,Et,Kt);case A:return nt=nt.get(Et.key===null?ot:Et.key)||null,it(K,nt,Et,Kt);case St:return Et=Ps(Et),lt(nt,K,ot,Et,Kt)}if(wt(Et)||et(Et))return nt=nt.get(ot)||null,ct(K,nt,Et,Kt,null);if(typeof Et.then=="function")return lt(nt,K,ot,_u(Et),Kt);if(Et.$$typeof===q)return lt(nt,K,ot,pu(K,Et),Kt);yu(K,Et)}return null}function Xt(nt,K,ot,Et){for(var Kt=null,Ne=null,le=K,me=K=0,_n=null;le!==null&&me<ot.length;me++){le.index>me?(_n=le,le=null):_n=le.sibling;var Ue=tt(nt,le,ot[me],Et);if(Ue===null){le===null&&(le=_n);break}e&&le&&Ue.alternate===null&&n(nt,le),K=h(Ue,K,me),Ne===null?Kt=Ue:Ne.sibling=Ue,Ne=Ue,le=_n}if(me===ot.length)return a(nt,le),Te&&ga(nt,me),Kt;if(le===null){for(;me<ot.length;me++)le=Tt(nt,ot[me],Et),le!==null&&(K=h(le,K,me),Ne===null?Kt=le:Ne.sibling=le,Ne=le);return Te&&ga(nt,me),Kt}for(le=r(le);me<ot.length;me++)_n=lt(le,nt,me,ot[me],Et),_n!==null&&(e&&(Ue=_n.alternate,Ue!==null&&le.delete(Ue.key===null?me:Ue.key)),K=h(_n,K,me),Ne===null?Kt=_n:Ne.sibling=_n,Ne=_n);return e&&le.forEach(function(cs){return n(nt,cs)}),Te&&ga(nt,me),Kt}function ne(nt,K,ot,Et){if(ot==null)throw Error(s(151));for(var Kt=null,Ne=null,le=K,me=K=0,_n=null,Ue=ot.next();le!==null&&!Ue.done;me++,Ue=ot.next()){le.index>me?(_n=le,le=null):_n=le.sibling;var cs=tt(nt,le,Ue.value,Et);if(cs===null){le===null&&(le=_n);break}e&&le&&cs.alternate===null&&n(nt,le),K=h(cs,K,me),Ne===null?Kt=cs:Ne.sibling=cs,Ne=cs,le=_n}if(Ue.done)return a(nt,le),Te&&ga(nt,me),Kt;if(le===null){for(;!Ue.done;me++,Ue=ot.next())Ue=Tt(nt,Ue.value,Et),Ue!==null&&(K=h(Ue,K,me),Ne===null?Kt=Ue:Ne.sibling=Ue,Ne=Ue);return Te&&ga(nt,me),Kt}for(le=r(le);!Ue.done;me++,Ue=ot.next())Ue=lt(le,nt,me,Ue.value,Et),Ue!==null&&(e&&(_n=Ue.alternate,_n!==null&&le.delete(_n.key===null?me:_n.key)),K=h(Ue,K,me),Ne===null?Kt=Ue:Ne.sibling=Ue,Ne=Ue);return e&&le.forEach(function(oE){return n(nt,oE)}),Te&&ga(nt,me),Kt}function Se(nt,K,ot,Et){if(typeof ot=="object"&&ot!==null&&ot.type===F&&ot.key===null&&ot.props.ref===void 0&&(ot=ot.props.children),typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case N:t:{for(var Kt=ot.key;K!==null;){if(K.key===Kt){if(Kt=ot.type,Kt===F){if(K.tag===7){a(nt,K.sibling),Et=c(K,ot.props.children),qa(Et,ot),Et.return=nt,nt=Et;break t}}else if(K.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===St&&Ps(Kt)===K.type){a(nt,K.sibling),Et=c(K,ot.props),qa(Et,ot),Et.return=nt,nt=Et;break t}a(nt,K);break}else n(nt,K);K=K.sibling}ot.type===F?(Et=Cs(ot.props.children,nt.mode,Et,ot.key),qa(Et,ot),Et.return=nt,nt=Et):(Et=lu(ot.type,ot.key,ot.props,null,nt.mode,Et),qa(Et,ot),Et.return=nt,nt=Et)}return S(nt);case A:t:{for(Kt=ot.key;K!==null;){if(K.key===Kt)if(K.tag===4&&K.stateNode.containerInfo===ot.containerInfo&&K.stateNode.implementation===ot.implementation){a(nt,K.sibling),Et=c(K,ot.children||[]),Et.return=nt,nt=Et;break t}else{a(nt,K);break}else n(nt,K);K=K.sibling}Et=Gf(ot,nt.mode,Et),Et.return=nt,nt=Et}return S(nt);case St:return ot=Ps(ot),Se(nt,K,ot,Et)}if(wt(ot))return Xt(nt,K,ot,Et);if(et(ot)){if(Kt=et(ot),typeof Kt!="function")throw Error(s(150));return ot=Kt.call(ot),ne(nt,K,ot,Et)}if(typeof ot.then=="function")return Se(nt,K,_u(ot),Et);if(ot.$$typeof===q)return Se(nt,K,pu(nt,ot),Et);yu(nt,ot)}return typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint"?(ot=""+ot,K!==null&&K.tag===6?(a(nt,K.sibling),Et=c(K,ot),Et.return=nt,nt=Et):(a(nt,K),Et=Hf(ot,nt.mode,Et),Et.return=nt,nt=Et),S(nt)):a(nt,K)}return function(nt,K,ot,Et){try{Xo=0;var Kt=Se(nt,K,ot,Et);return Ar=null,Kt}catch(le){if(le===br||le===gu)throw le;var Ne=ti(29,le,null,nt.mode);return Ne.lanes=Et,Ne.return=nt,Ne}finally{}}}var Is=Z0(!0),Q0=Z0(!1),Ya=!1;function Kf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Jf(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Wa(e,n,a){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Fe&2)!==0){var c=r.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),r.pending=n,n=ou(e),L0(e,null,a),n}return ru(e,r,n,a),ou(e)}function qo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,at(e,a)}}function $f(e,n){var a=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var c=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?c=h=S:h=h.next=S,a=a.next}while(a!==null);h===null?c=h=n:h=h.next=n}else c=h=n;a={baseState:r.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:r.shared,callbacks:r.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var th=!1;function Yo(){if(th){var e=Tr;if(e!==null)throw e}}function jo(e,n,a,r){th=!1;var c=e.updateQueue;Ya=!1;var h=c.firstBaseUpdate,S=c.lastBaseUpdate,C=c.shared.pending;if(C!==null){c.shared.pending=null;var X=C,it=X.next;X.next=null,S===null?h=it:S.next=it,S=X;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,C=ct.lastBaseUpdate,C!==S&&(C===null?ct.firstBaseUpdate=it:C.next=it,ct.lastBaseUpdate=X))}if(h!==null){var Tt=c.baseState;S=0,ct=it=X=null,C=h;do{var tt=C.lane&-536870913,lt=tt!==C.lane;if(lt?(De&tt)===tt:(r&tt)===tt){tt!==0&&tt===Ls&&(th=!0),ct!==null&&(ct=ct.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var Xt=e,ne=C;tt=n;var Se=a;switch(ne.tag){case 1:if(Xt=ne.payload,typeof Xt=="function"){Tt=Xt.call(Se,Tt,tt);break t}Tt=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=ne.payload,tt=typeof Xt=="function"?Xt.call(Se,Tt,tt):Xt,tt==null)break t;Tt=P({},Tt,tt);break t;case 2:Ya=!0}}tt=C.callback,tt!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[tt]:lt.push(tt))}else lt={lane:tt,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ct===null?(it=ct=lt,X=Tt):ct=ct.next=lt,S|=tt;if(C=C.next,C===null){if(C=c.shared.pending,C===null)break;lt=C,C=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);ct===null&&(X=Tt),c.baseState=X,c.firstBaseUpdate=it,c.lastBaseUpdate=ct,h===null&&(c.shared.lanes=0),es|=S,e.lanes=S,e.memoizedState=Tt}}function K0(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function J0(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)K0(a[e],n)}var Za=ht(null),xu=ht(0);function $0(e,n){e=Ea,Rt(xu,e),Rt(Za,n),Ea=e|n.baseLanes}function eh(){Rt(xu,Ea),Rt(Za,Za.current)}function nh(){Ea=xu.current,vt(Za),vt(xu)}var Ln=ht(null),Hn=null;function Qa(e){var n=e.alternate;Rt(On,On.current&1),Rt(Ln,e),Hn===null&&(n===null||Za.current!==null||n.memoizedState!==null)&&(Hn=e)}function ih(e){Rt(On,On.current),Rt(Ln,e),Hn===null&&(Hn=e)}function tg(e){e.tag===22?(Rt(On,On.current),Rt(Ln,e),Hn===null&&(Hn=e)):Ka()}function Ka(){Rt(On,On.current),Rt(Ln,Ln.current)}function ui(e){vt(Ln),Hn===e&&(Hn=null),vt(On)}var On=ht(0);function Wo(e,n){Rt(Ln,Ln.current),Rt(On,n)}function ah(e){vt(On),vt(Ln),Hn===e&&(Hn=null)}function Su(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ad(a)||wd(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ya=0,xe=null,We=null,gn=null,Mu=!1,wr=!1,Bs=!1,Eu=0,Zo=0,Cr=null,C1=0;function un(){throw Error(s(321))}function sh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!li(e[a],n[a]))return!1;return!0}function rh(e,n,a,r,c,h){return ya=h,xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Mt.H=e===null||e.memoizedState===null?Ig:Bg,Bs=!1,h=a(r,c),Bs=!1,wr&&(h=ng(n,a,r,c)),eg(e),h}function eg(e){Mt.H=Du;var n=We!==null&&We.next!==null;if(ya=0,gn=We=xe=null,Mu=!1,Zo=0,Cr=null,n)throw Error(s(300));e===null||vn||(e=e.dependencies,e!==null&&du(e)&&(vn=!0))}function ng(e,n,a,r){xe=e;var c=0;do{if(wr&&(Cr=null),Zo=0,wr=!1,25<=c)throw Error(s(301));if(c+=1,gn=We=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}Mt.H=z1,h=n(a,r)}while(wr);return h}function R1(){var e=Mt.H,n=e.useState()[0];return n=typeof n.then=="function"?Qo(n):n,e=e.useState()[0],(We!==null?We.memoizedState:null)!==e&&(xe.flags|=1024),n}function oh(){var e=Eu!==0;return Eu=0,e}function lh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function uh(e){if(Mu){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Mu=!1}ya=0,gn=We=xe=null,wr=!1,Zo=Eu=0,Cr=null}function Wn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?xe.memoizedState=gn=e:gn=gn.next=e,gn}function dn(){if(We===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=We.next;var n=gn===null?xe.memoizedState:gn.next;if(n!==null)gn=n,We=e;else{if(e===null)throw xe.alternate===null?Error(s(467)):Error(s(310));We=e,e={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},gn===null?xe.memoizedState=gn=e:gn=gn.next=e}return gn}function Tu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Qo(e){var n=Zo;return Zo+=1,Cr===null&&(Cr=[]),e=Y0(Cr,e,n),n=xe,(gn===null?n.memoizedState:gn.next)===null&&(n=n.alternate,Mt.H=n===null||n.memoizedState===null?Ig:Bg),e}function bu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Qo(e);if(e.$$typeof===ft)return;if(e.$$typeof===q)return Un(e)}throw Error(s(438,String(e)))}function ch(e){var n=null,a=xe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=xe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Tu(),xe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),r=0;r<e;r++)a[r]=Ot;return n.index++,a}function xa(e,n){return typeof n=="function"?n(e):n}function Au(e){var n=dn();return fh(n,We,e)}function fh(e,n,a){var r=e.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var c=e.baseQueue,h=r.pending;if(h!==null){if(c!==null){var S=c.next;c.next=h.next,h.next=S}n.baseQueue=c=h,r.pending=null}if(h=e.baseState,c===null)e.memoizedState=h;else{n=c.next;var C=S=null,X=null,it=n,ct=!1;do{var Tt=it.lane&-536870913;if(Tt!==it.lane?(De&Tt)===Tt:(ya&Tt)===Tt){var tt=it.revertLane;if(tt===0)X!==null&&(X=X.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),Tt===Ls&&(ct=!0);else if((ya&tt)===tt){it=it.next,tt===Ls&&(ct=!0);continue}else Tt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},X===null?(C=X=Tt,S=h):X=X.next=Tt,xe.lanes|=tt,es|=tt;Tt=it.action,Bs&&a(h,Tt),h=it.hasEagerState?it.eagerState:a(h,Tt)}else tt={lane:Tt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},X===null?(C=X=tt,S=h):X=X.next=tt,xe.lanes|=Tt,es|=Tt;it=it.next}while(it!==null&&it!==n);if(X===null?S=h:X.next=C,!li(h,e.memoizedState)&&(vn=!0,ct&&(a=Tr,a!==null)))throw a;e.memoizedState=h,e.baseState=S,e.baseQueue=X,r.lastRenderedState=h}return c===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function hh(e){var n=dn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var r=a.dispatch,c=a.pending,h=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do h=e(h,S.action),S=S.next;while(S!==c);li(h,n.memoizedState)||(vn=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,r]}function ig(e,n,a){var r=xe,c=dn(),h=Te;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!li((We||c).memoizedState,a);if(S&&(c.memoizedState=a,vn=!0),c=c.queue,mh(rg.bind(null,r,c,e),[e]),e=c.getSnapshot!==n||S||gn!==null&&(gn.memoizedState.tag&1)!==0,Rr(e?9:8,{destroy:void 0},sg.bind(null,r,c,a,n),null),e){if(r.flags|=2048,Qe===null)throw Error(s(349));h||(ya&127)!==0||ag(r,n,a)}return a}function ag(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=xe.updateQueue,n===null?(n=Tu(),xe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function sg(e,n,a,r){n.value=a,n.getSnapshot=r,og(n)&&lg(e)}function rg(e,n,a){return a(function(){og(n)&&lg(e)})}function og(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!li(e,a)}catch{return!0}}function lg(e){var n=ws(e,2);n!==null&&ai(n,e,2)}function dh(e){var n=Wn();if(typeof e=="function"){var a=e;if(e=a(),Bs){Mn(!0);try{a()}finally{Mn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:e},n}function ug(e,n,a,r){return e.baseState=a,fh(e,We,typeof r=="function"?r:xa)}function D1(e,n,a,r,c){if(Ru(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};Mt.T!==null?a(!0):h.isTransition=!1,r(h),a=n.pending,a===null?(h.next=n.pending=h,cg(n,h)):(h.next=a.next,n.pending=a.next=h)}}function cg(e,n){var a=n.action,r=n.payload,c=e.state;if(n.isTransition){var h=Mt.T,S={};S.types=h!==null?h.types:null,Mt.T=S;try{var C=a(c,r),X=Mt.S;X!==null&&X(S,C),fg(e,n,C)}catch(it){ph(e,n,it)}finally{h!==null&&S.types!==null&&(h.types=S.types),Mt.T=h}}else try{h=a(c,r),fg(e,n,h)}catch(it){ph(e,n,it)}}function fg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){hg(e,n,r)},function(r){return ph(e,n,r)}):hg(e,n,a)}function hg(e,n,a){n.status="fulfilled",n.value=a,dg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,cg(e,a)))}function ph(e,n,a){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,dg(n),n=n.next;while(n!==r)}e.action=null}function dg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function pg(e,n){return n}function mg(e,n){if(Te){var a=Qe.formState;if(a!==null){t:{var r=xe;if(Te){if(Je){e:{for(var c=Je,h=wi;c.nodeType!==8;){if(!h){c=null;break e}if(c=Ri(c.nextSibling),c===null){c=null;break e}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){Je=Ri(c.nextSibling),r=c.data==="F!";break t}}ka(r)}r=!1}r&&(n=a[0])}}return a=Wn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pg,lastRenderedState:n},a.queue=r,a=Og.bind(null,xe,r),r.dispatch=a,r=dh(!1),h=xh.bind(null,xe,!1,r.queue),r=Wn(),c={state:n,dispatch:null,action:e,pending:null},r.queue=c,a=D1.bind(null,xe,c,h,a),c.dispatch=a,r.memoizedState=e,[n,a,!1]}function gg(e){var n=dn();return vg(n,We,e)}function vg(e,n,a){if(n=fh(e,n,pg)[0],e=Au(xa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Qo(n)}catch(S){throw S===br?gu:S}else r=n;n=dn();var c=n.queue,h=c.dispatch;return a!==n.memoizedState&&(xe.flags|=2048,Rr(9,{destroy:void 0},N1.bind(null,c,a),null)),[r,h,e]}function N1(e,n){e.action=n}function _g(e){var n=dn(),a=We;if(a!==null)return vg(n,a,e);dn(),n=n.memoizedState,a=dn();var r=a.queue.dispatch;return a.memoizedState=e,[n,r,!1]}function Rr(e,n,a,r){return e={tag:e,create:a,deps:r,inst:n,next:null},n=xe.updateQueue,n===null&&(n=Tu(),xe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(r=a.next,a.next=e,e.next=r,n.lastEffect=e),e}function yg(){return dn().memoizedState}function wu(e,n,a,r){var c=Wn();xe.flags|=e,c.memoizedState=Rr(1|n,{destroy:void 0},a,r===void 0?null:r)}function Cu(e,n,a,r){var c=dn();r=r===void 0?null:r;var h=c.memoizedState.inst;We!==null&&r!==null&&sh(r,We.memoizedState.deps)?c.memoizedState=Rr(n,h,a,r):(xe.flags|=e,c.memoizedState=Rr(1|n,h,a,r))}function xg(e,n){wu(8390656,8,e,n)}function mh(e,n){Cu(2048,8,e,n)}function U1(e){xe.flags|=4;var n=xe.updateQueue;if(n===null)n=Tu(),xe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Sg(e){var n=dn().memoizedState;return U1({ref:n,nextImpl:e}),function(){if((Fe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Mg(e,n){return Cu(4,2,e,n)}function Eg(e,n){return Cu(4,4,e,n)}function Tg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function bg(e,n,a){a=a!=null?a.concat([e]):null,Cu(4,4,Tg.bind(null,n,e),a)}function gh(){}function Ag(e,n){var a=dn();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&sh(n,r[1])?r[0]:(a.memoizedState=[e,n],e)}function wg(e,n){var a=dn();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&sh(n,r[1]))return r[0];if(r=e(),Bs){Mn(!0);try{e()}finally{Mn(!1)}}return a.memoizedState=[r,n],r}function vh(e,n,a){return a===void 0||(ya&1073741824)!==0&&(De&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Iv(),xe.lanes|=e,es|=e,a)}function Cg(e,n,a,r){return li(a,n)?a:Za.current!==null?(e=vh(e,a,r),li(e,n)||(vn=!0),e):(ya&106)===0||(ya&1073741824)!==0&&(De&261930)===0?(vn=!0,e.memoizedState=a):(e=Iv(),xe.lanes|=e,es|=e,n)}function Rg(e,n,a,r,c){var h=Lt.p;Lt.p=h!==0&&8>h?h:8;var S=Mt.T,C={};C.types=S!==null?S.types:null,Mt.T=C,xh(e,!1,n,a);try{var X=c(),it=Mt.S;if(it!==null&&it(C,X),X!==null&&typeof X=="object"&&typeof X.then=="function"){var ct=w1(X,r);Ko(e,n,ct,di(e))}else Ko(e,n,r,di(e))}catch(Tt){Ko(e,n,{then:function(){},status:"rejected",reason:Tt},di())}finally{Lt.p=h,S!==null&&C.types!==null&&(S.types=C.types),Mt.T=S}}function L1(){}function _h(e,n,a,r){if(e.tag!==5)throw Error(s(476));var c=Dg(e).queue;Rg(e,c,n,H,a===null?L1:function(){return Ng(e),a(r)})}function Dg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:H,baseState:H,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:H},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:xa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Ng(e){var n=Dg(e);n.next===null&&(n=e.alternate.memoizedState),Ko(e,n.next.queue,{},di())}function yh(){return Un(Wr)}function Ug(){return dn().memoizedState}function Lg(){return dn().memoizedState}function O1(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=di();e=ja(a);var r=Wa(n,e,a);r!==null&&(ai(r,n,a),qo(r,n,a)),n={cache:jf()},e.payload=n;return}n=n.return}}function P1(e,n,a){var r=di();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ru(e)?Pg(n,a):(a=Bf(e,n,a,r),a!==null&&(ai(a,e,r),zg(a,n,r)))}function Og(e,n,a){var r=di();Ko(e,n,a,r)}function Ko(e,n,a,r){var c={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ru(e))Pg(n,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,C=h(S,a);if(c.hasEagerState=!0,c.eagerState=C,li(C,S))return ru(e,n,c,0),Qe===null&&su(),!1}catch{}finally{}if(a=Bf(e,n,c,r),a!==null)return ai(a,e,r),zg(a,n,r),!0}return!1}function xh(e,n,a,r){if(r={lane:2,revertLane:cd(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ru(e)){if(n)throw Error(s(479))}else n=Bf(e,a,r,2),n!==null&&ai(n,e,2)}function Ru(e){var n=e.alternate;return e===xe||n!==null&&n===xe}function Pg(e,n){wr=Mu=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function zg(e,n,a){if((a&4194048)!==0){var r=n.lanes;r&=e.pendingLanes,a|=r,n.lanes=a,at(e,a)}}var Du={readContext:Un,use:bu,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un,useEffectEvent:un},Ig={readContext:Un,use:bu,useCallback:function(e,n){return Wn().memoizedState=[e,n===void 0?null:n],e},useContext:Un,useEffect:xg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,wu(4194308,4,Tg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return wu(4194308,4,e,n)},useInsertionEffect:function(e,n){wu(4,2,e,n)},useMemo:function(e,n){var a=Wn();n=n===void 0?null:n;var r=e();if(Bs){Mn(!0);try{e()}finally{Mn(!1)}}return a.memoizedState=[r,n],r},useReducer:function(e,n,a){var r=Wn();if(a!==void 0){var c=a(n);if(Bs){Mn(!0);try{a(n)}finally{Mn(!1)}}}else c=n;return r.memoizedState=r.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},r.queue=e,e=e.dispatch=P1.bind(null,xe,e),[r.memoizedState,e]},useRef:function(e){var n=Wn();return e={current:e},n.memoizedState=e},useState:function(e){e=dh(e);var n=e.queue,a=Og.bind(null,xe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:gh,useDeferredValue:function(e,n){var a=Wn();return vh(a,e,n)},useTransition:function(){var e=dh(!1);return e=Rg.bind(null,xe,e.queue,!0,!1),Wn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var r=xe,c=Wn();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Qe===null)throw Error(s(349));(De&127)!==0||ag(r,n,a)}c.memoizedState=a;var h={value:a,getSnapshot:n};return c.queue=h,xg(rg.bind(null,r,h,e),[e]),r.flags|=2048,Rr(9,{destroy:void 0},sg.bind(null,r,h,a,n),null),a},useId:function(){var e=Wn(),n=Qe.identifierPrefix;if(Te){var a=Zi,r=Wi;a=(r&~(1<<32-Bn(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Eu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=C1++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:yh,useFormState:mg,useActionState:mg,useOptimistic:function(e){var n=Wn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=xh.bind(null,xe,!0,a),a.dispatch=n,[e,n]},useMemoCache:ch,useCacheRefresh:function(){return Wn().memoizedState=O1.bind(null,xe)},useEffectEvent:function(e){var n=Wn(),a={impl:e};return n.memoizedState=a,function(){if((Fe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Bg={readContext:Un,use:bu,useCallback:Ag,useContext:Un,useEffect:mh,useImperativeHandle:bg,useInsertionEffect:Mg,useLayoutEffect:Eg,useMemo:wg,useReducer:Au,useRef:yg,useState:function(){return Au(xa)},useDebugValue:gh,useDeferredValue:function(e,n){var a=dn();return Cg(a,We.memoizedState,e,n)},useTransition:function(){var e=Au(xa)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:Qo(e),n]},useSyncExternalStore:ig,useId:Ug,useHostTransitionStatus:yh,useFormState:gg,useActionState:gg,useOptimistic:function(e,n){var a=dn();return ug(a,We,e,n)},useMemoCache:ch,useCacheRefresh:Lg,useEffectEvent:Sg},z1={readContext:Un,use:bu,useCallback:Ag,useContext:Un,useEffect:mh,useImperativeHandle:bg,useInsertionEffect:Mg,useLayoutEffect:Eg,useMemo:wg,useReducer:hh,useRef:yg,useState:function(){return hh(xa)},useDebugValue:gh,useDeferredValue:function(e,n){var a=dn();return We===null?vh(a,e,n):Cg(a,We.memoizedState,e,n)},useTransition:function(){var e=hh(xa)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:Qo(e),n]},useSyncExternalStore:ig,useId:Ug,useHostTransitionStatus:yh,useFormState:_g,useActionState:_g,useOptimistic:function(e,n){var a=dn();return We!==null?ug(a,We,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:ch,useCacheRefresh:Lg,useEffectEvent:Sg};function Sh(e,n,a,r){n=e.memoizedState,a=a(r,n),a=a==null?n:P({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Mh={enqueueSetState:function(e,n,a){e=e._reactInternals;var r=di(),c=ja(r);c.payload=n,a!=null&&(c.callback=a),n=Wa(e,c,r),n!==null&&(ai(n,e,r),qo(n,e,r))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var r=di(),c=ja(r);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Wa(e,c,r),n!==null&&(ai(n,e,r),qo(n,e,r))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=di(),r=ja(a);r.tag=2,n!=null&&(r.callback=n),n=Wa(e,r,a),n!==null&&(ai(n,e,a),qo(n,e,a))}};function Fg(e,n,a,r,c,h,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,h,S):n.prototype&&n.prototype.isPureReactComponent?!Io(a,r)||!Io(c,h):!0}function Hg(e,n,a,r){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==e&&Mh.enqueueReplaceState(n,n.state,null)}function Fs(e,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(e=e.defaultProps){a===n&&(a=P({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Gg(e){au(e)}function Vg(e){console.error(e)}function kg(e){au(e)}function Nu(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Xg(e,n,a){try{var r=e.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Eh(e,n,a){return a=ja(a),a.tag=3,a.payload={element:null},a.callback=function(){Nu(e,n)},a}function qg(e){return e=ja(e),e.tag=3,e}function Yg(e,n,a,r){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var h=r.value;e.payload=function(){return c(h)},e.callback=function(){Xg(n,a,r)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Xg(n,a,r),typeof c!="function"&&(ns===null?ns=new Set([this]):ns.add(this));var C=r.stack;this.componentDidCatch(r.value,{componentStack:C!==null?C:""})})}function I1(e,n,a,r,c){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&Ns(n,a,c,!0),a=Ln.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Hn===null?Ju():a.alternate===null&&cn===0&&(cn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,r===vu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),od(e,r,c)),!1;case 22:return a.flags|=65536,r===vu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),od(e,r,c)),!1}throw Error(s(435,a.tag))}return od(e,r,c),Ju(),!1}if(Te)return n=Ln.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,r!==kf&&(e=Error(s(422),{cause:r}),Ho(Ti(e,a)))):(r!==kf&&(n=Error(s(423),{cause:r}),Ho(Ti(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,r=Ti(r,a),c=Eh(e.stateNode,r,c),$f(e,c),cn!==4&&(cn=2)),!1;var h=Error(s(520),{cause:r});if(h=Ti(h,a),sl===null?sl=[h]:sl.push(h),cn!==4&&(cn=2),n===null)return!0;r=Ti(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Eh(a.stateNode,r,e),$f(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(ns===null||!ns.has(h))))return a.flags|=65536,c&=-c,a.lanes|=c,c=qg(c),Yg(c,e,a,r),$f(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Th=Error(s(461)),vn=!1;function Tn(e,n,a,r){n.child=e===null?Q0(n,null,a,r):Is(n,e.child,a,r)}function jg(e,n,a,r,c){a=a.render;var h=n.ref;if("ref"in r){var S={};for(var C in r)C!=="ref"&&(S[C]=r[C])}else S=r;return Us(n),r=rh(e,n,a,S,h,c),C=oh(),e!==null&&!vn?(lh(e,n,c),Sa(e,n,c)):(Te&&C&&cu(n),n.flags|=1,Tn(e,n,r,c),n.child)}function Wg(e,n,a,r,c){if(e===null){var h=a.type;return typeof h=="function"&&!Ff(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Zg(e,n,h,r,c)):(e=lu(a.type,null,r,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Uh(e,c)){var S=h.memoizedProps;if(a=a.compare,a=a!==null?a:Io,a(S,r)&&e.ref===n.ref)return Sa(e,n,c)}return n.flags|=1,e=ma(h,r),e.ref=n.ref,e.return=n,n.child=e}function Zg(e,n,a,r,c){if(e!==null){var h=e.memoizedProps;if(Io(h,r)&&e.ref===n.ref)if(vn=!1,n.pendingProps=r=h,Uh(e,c))(e.flags&131072)!==0&&(vn=!0);else return n.lanes=e.lanes,Sa(e,n,c)}return bh(e,n,a,r,c)}function Qg(e,n,a,r){var c=r.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(r=n.child=e.child,c=0;r!==null;)c=c|r.lanes|r.childLanes,r=r.sibling;r=c&~h}else r=0,n.child=null;return Kg(e,n,h,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&mu(n,h!==null?h.cachePool:null),h!==null?$0(n,h):eh(),tg(n);else return r=n.lanes=536870912,Kg(e,n,h!==null?h.baseLanes|a:a,a,r)}else h!==null?(mu(n,h.cachePool),$0(n,h),Ka(),n.memoizedState=null):(e!==null&&mu(n,null),eh(),Ka());return Tn(e,n,c,a),n.child}function Jo(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Kg(e,n,a,r,c){var h=Zf();return h=h===null?null:{parent:mn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&mu(n,null),eh(),tg(n),e!==null&&Ns(e,n,r,!0),n.childLanes=c,null}function Uu(e,n){return n=Lu({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Jg(e,n,a){return Is(n,e.child,null,a),e=Uu(n,n.pendingProps),e.flags|=2,ui(n),n.memoizedState=null,e}function B1(e,n,a){var r=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(r.mode==="hidden")return e=Uu(n,r),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},Jo(null,e);if(ih(n),(e=Je)?(e=T_(e,wi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ga!==null?{id:Wi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=P0(e),a.return=n,n.child=a,Cn=n,Je=null)):e=null,e===null)throw ka(n);return n.lanes=536870912,null}return Uu(n,r)}var h=e.memoizedState;if(h!==null){var S=h.dehydrated;if(ih(n),c)if(n.flags&256)n.flags&=-257,n=Jg(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(vn||Ns(e,n,a,!1),c=(a&e.childLanes)!==0,vn||c){if(Za.current===null){if(r=Qe,r!==null&&(S=pt(r,a),S!==0&&S!==h.retryLane))throw h.retryLane=S,ws(e,S),ai(r,e,S),Th;Ju()}n=Jg(e,n,a)}else e=h.treeContext,Je=Ri(S.nextSibling),Cn=n,Te=!0,Va=null,wi=!1,e!==null&&B0(n,e),n=Uu(n,r),n.flags|=134221824;return n}return e=ma(e.child,{mode:r.mode,children:r.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Dr(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function bh(e,n,a,r,c){return Us(n),a=rh(e,n,a,r,void 0,c),r=oh(),e!==null&&!vn?(lh(e,n,c),Sa(e,n,c)):(Te&&r&&cu(n),n.flags|=1,Tn(e,n,a,c),n.child)}function $g(e,n,a,r,c,h){return Us(n),n.updateQueue=null,a=ng(n,r,a,c),eg(e),r=oh(),e!==null&&!vn?(lh(e,n,h),Sa(e,n,h)):(Te&&r&&cu(n),n.flags|=1,Tn(e,n,a,h),n.child)}function tv(e,n,a,r,c){if(Us(n),n.stateNode===null){var h=xr,S=a.contextType;typeof S=="object"&&S!==null&&(h=Un(S)),h=new a(r,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Mh,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=r,h.state=n.memoizedState,h.refs={},Kf(n),S=a.contextType,h.context=typeof S=="object"&&S!==null?Un(S):xr,h.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Sh(n,a,S,r),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&Mh.enqueueReplaceState(h,h.state,null),jo(n,r,h,c),Yo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(e===null){h=n.stateNode;var C=n.memoizedProps,X=Fs(a,C);h.props=X;var it=h.context,ct=a.contextType;S=xr,typeof ct=="object"&&ct!==null&&(S=Un(ct));var Tt=a.getDerivedStateFromProps;ct=typeof Tt=="function"||typeof h.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,ct||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(C||it!==S)&&Hg(n,h,r,S),Ya=!1;var tt=n.memoizedState;h.state=tt,jo(n,r,h,c),Yo(),it=n.memoizedState,C||tt!==it||Ya?(typeof Tt=="function"&&(Sh(n,a,Tt,r),it=n.memoizedState),(X=Ya||Fg(n,a,X,r,tt,it,S))?(ct||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=it),h.props=r,h.state=it,h.context=S,r=X):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{h=n.stateNode,Jf(e,n),S=n.memoizedProps,ct=Fs(a,S),h.props=ct,Tt=n.pendingProps,tt=h.context,it=a.contextType,X=xr,typeof it=="object"&&it!==null&&(X=Un(it)),C=a.getDerivedStateFromProps,(it=typeof C=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==Tt||tt!==X)&&Hg(n,h,r,X),Ya=!1,tt=n.memoizedState,h.state=tt,jo(n,r,h,c),Yo();var lt=n.memoizedState;S!==Tt||tt!==lt||Ya||e!==null&&e.dependencies!==null&&du(e.dependencies)?(typeof C=="function"&&(Sh(n,a,C,r),lt=n.memoizedState),(ct=Ya||Fg(n,a,ct,r,tt,lt,X)||e!==null&&e.dependencies!==null&&du(e.dependencies))?(it||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(r,lt,X),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(r,lt,X)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=lt),h.props=r,h.state=lt,h.context=X,r=ct):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),r=!1)}return h=r,Dr(e,n),r=(n.flags&128)!==0,h||r?(h=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&r?(n.child=Is(n,e.child,null,c),n.child=Is(n,null,a,c)):Tn(e,n,a,c),n.memoizedState=h.state,e=n.child):e=Sa(e,n,c),e}function ev(e,n,a,r){return Rs(),n.flags|=256,Tn(e,n,a,r),n.child}var Ah={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function wh(e){return{baseLanes:e,cachePool:X0()}}function Ch(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=hi),e}function nv(e,n,a){var r=n.pendingProps,c=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=e!==null&&e.memoizedState===null?!1:(On.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(c?Qa(n):Ka(),(e=Je)?(e=T_(e,wi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ga!==null?{id:Wi,overflow:Zi}:null,retryLane:536870912,hydrationErrors:null},a=P0(e),a.return=n,n.child=a,Cn=n,Je=null)):e=null,e===null)throw ka(n);return wd(e)?n.lanes=32:n.lanes=536870912,null}return h=r.children,r=r.fallback,c?(Ka(),c=n.mode,h=Lu({mode:"hidden",children:h},c),r=Cs(r,c,a,null),h.return=n,r.return=n,h.sibling=r,n.child=h,r=n.child,r.memoizedState=wh(a),r.childLanes=Ch(e,S,a),n.memoizedState=Ah,Jo(null,r)):(Qa(n),Rh(n,h))}var C=e.memoizedState;if(C!==null){var X=C.dehydrated;if(X!==null)return F1(e,n,h,S,r,X,C,a)}return c?(Ka(),c=r.fallback,h=n.mode,C=e.child,X=C.sibling,r=ma(C,{mode:"hidden",children:r.children}),r.subtreeFlags=C.subtreeFlags&1206910976,X!==null?c=ma(X,c):(c=Cs(c,h,a,null),c.flags|=2),c.return=n,r.return=n,r.sibling=c,n.child=r,Jo(null,r),r=n.child,c=e.child.memoizedState,c===null?c=wh(a):(h=c.cachePool,h!==null?(C=mn._currentValue,h=h.parent!==C?{parent:C,pool:C}:h):h=X0(),c={baseLanes:c.baseLanes|a,cachePool:h}),r.memoizedState=c,r.childLanes=Ch(e,S,a),n.memoizedState=Ah,Jo(e.child,r)):(Qa(n),a=e.child,e=a.sibling,a=ma(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Rh(e,n){return n=Lu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Lu(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function Ou(e,n,a){return Is(n,e.child,null,a),e=Rh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function F1(e,n,a,r,c,h,S,C){if(a)return n.flags&256?(Qa(n),n.flags&=-257,Ou(e,n,C)):n.memoizedState!==null?(Ka(),n.child=e.child,n.flags|=128,null):(Ka(),h=c.fallback,S=n.mode,c=Lu({mode:"visible",children:c.children},S),h=Cs(h,S,C,null),h.flags|=2,c.return=n,h.return=n,c.sibling=h,n.child=c,Is(n,e.child,null,C),c=n.child,c.memoizedState=wh(C),c.childLanes=Ch(e,r,C),n.memoizedState=Ah,Jo(null,c));if(Qa(n),wd(h)){if(r=h.nextSibling&&h.nextSibling.dataset,r)var X=r.dgst;return r=X,r!==""&&(c=Error(s(419)),c.stack="",c.digest=r,Ho({value:c,source:null,stack:null})),Ou(e,n,C)}if(vn||Ns(e,n,C,!1),r=(C&e.childLanes)!==0,vn||r){if(Za.current!==null)return Ou(e,n,C);if(r=Qe,r!==null&&(c=pt(r,C),c!==0&&c!==S.retryLane))throw S.retryLane=c,ws(e,c),ai(r,e,c),Th;return Ad(h)||Ju(),Ou(e,n,C)}return Ad(h)?(n.flags|=192,n.child=e.child,null):(e=S.treeContext,Je=Ri(h.nextSibling),Cn=n,Te=!0,Va=null,wi=!1,e!==null&&B0(n,e),n=Rh(n,c.children),n.flags|=134221824,n)}function iv(e,n,a){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n),hu(e.return,n,a)}function av(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&Su(a)===null&&(n=e),e=e.sibling}return n}function Pu(e,n,a,r,c,h){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:c,treeForkCount:h}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=r,S.tail=a,S.tailMode=c,S.treeForkCount=h)}function Dh(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function Nh(e,n,a){var r=n.pendingProps,c=r.revealOrder,h=r.tail;r=r.children;var S=On.current;if(n.flags&128)return Wo(n,S),null;var C=(S&2)!==0;if(C?(S=S&1|2,n.flags|=128):S&=1,Wo(n,S),c==="backwards"&&e!==null?(Dh(e),Tn(e,n,r,a),Dh(e)):Tn(e,n,r,a),r=Te?Fo:0,!C&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&iv(e,a,n);else if(e.tag===19)iv(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"backwards":a=av(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,Dh(n)),Pu(n,!0,c,null,h,r);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Su(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Pu(n,!0,a,null,h,r);break;case"together":Pu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=av(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Pu(n,!1,c,a,h,r)}return n.child}function sv(e,n,a){var r=n.pendingProps;return Xa(n,n.type,r.value),Tn(e,n,r.children,a),n.child}function Sa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),es|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ns(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=ma(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ma(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Uh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&du(e)))}function H1(e,n,a){switch(n.tag){case 3:B(n,n.stateNode.containerInfo),Xa(n,mn,e.memoizedState.cache),Rs();break;case 27:case 5:rt(n);break;case 4:B(n,n.stateNode.containerInfo);break;case 10:Xa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ih(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Qa(n),n.flags|=128,null;r=Ns(e,n,a,!1);var c=n.child.childLanes;return r||(a&c)!==0?nv(e,n,a):(Qa(n),e=Sa(e,n,a),e!==null?e.sibling:null)}Qa(n);break;case 19:if(n.flags&128)return Nh(e,n,a);if(c=(e.flags&128)!==0,r=(a&n.childLanes)!==0,r||(Ns(e,n,a,!1),r=(a&n.childLanes)!==0),c){if(r)return Nh(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Wo(n,On.current),r)break;return null;case 22:return n.lanes=0,Qg(e,n,a,n.pendingProps);case 24:Xa(n,mn,e.memoizedState.cache)}return Sa(e,n,a)}function rv(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)vn=!0;else{if(!Uh(e,a)&&(n.flags&128)===0)return vn=!1,H1(e,n,a);vn=(e.flags&131072)!==0}else vn=!1,Te&&(n.flags&1048576)!==0&&I0(n,Fo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(e=Ps(n.elementType),n.type=e,typeof e=="function")Ff(e)?(r=Fs(e,r),n.tag=1,n=tv(null,n,e,r,a)):(n.tag=0,n=bh(null,n,e,r,a));else{if(e!=null){var c=e.$$typeof;if(c===k){n.tag=11,n=jg(null,n,e,r,a);break t}else if(c===gt){n.tag=14,n=Wg(null,n,e,r,a);break t}else if(c===q){n.tag=10,n.type=e,n=sv(null,n,a);break t}}throw n=Ct(e)||e,Error(s(306,n,""))}}return n;case 0:return bh(e,n,n.type,n.pendingProps,a);case 1:return r=n.type,c=Fs(r,n.pendingProps),tv(e,n,r,c,a);case 3:t:{if(B(n,n.stateNode.containerInfo),e===null)throw Error(s(387));r=n.pendingProps;var h=n.memoizedState;c=h.element,Jf(e,n),jo(n,r,null,a);var S=n.memoizedState;if(r=S.cache,Xa(n,mn,r),r!==h.cache&&Yf(n,[mn],a,!0),Yo(),r=S.element,h.isDehydrated)if(h={element:r,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=ev(e,n,r,a);break t}else if(r!==c){c=Ti(Error(s(424)),n),Ho(c),n=ev(e,n,r,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Je=Ri(e.firstChild),Cn=n,Te=!0,Va=null,wi=!0,a=Q0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Rs(),r===c){n=Sa(e,n,a);break t}Tn(e,n,r,a)}n=n.child}return n;case 26:return Dr(e,n),e===null?(a=N_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(n.stateNode=c_(n.type,n.pendingProps,re.current,n)):n.memoizedState=N_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return rt(n),e===null&&Te&&(r=n.stateNode=w_(n.type,n.pendingProps,re.current),Cn=n,wi=!0,c=Je,ss(n.type)?(Cd=c,Je=Ri(r.firstChild)):Je=c),Tn(e,n,n.pendingProps.children,a),Dr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((c=r=Je)&&(r=OM(r,n.type,n.pendingProps,wi),r!==null?(n.stateNode=r,Cn=n,Je=Ri(r.firstChild),wi=!1,c=!0):c=!1),c||ka(n)),rt(n),c=n.type,h=n.pendingProps,S=e!==null?e.memoizedProps:null,r=h.children,yd(c,h)?r=null:S!==null&&yd(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=rh(e,n,R1,null,null,a),Wr._currentValue=c),Dr(e,n),Tn(e,n,r,a),n.child;case 6:return e===null&&Te&&((e=a=Je)&&(a=PM(a,n.pendingProps,wi),a!==null?(n.stateNode=a,Cn=n,Je=null,e=!0):e=!1),e||ka(n)),null;case 13:return nv(e,n,a);case 4:return B(n,n.stateNode.containerInfo),r=n.pendingProps,e===null?n.child=Is(n,null,r,a):Tn(e,n,r,a),n.child;case 11:return jg(e,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Dr(e,n),Tn(e,n,r,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return sv(e,n,a);case 9:return c=n.type._context,r=n.pendingProps.children,Us(n),c=Un(c),r=r(c),n.flags|=1,Tn(e,n,r,a),n.child;case 14:return Wg(e,n,n.type,n.pendingProps,a);case 15:return Zg(e,n,n.type,n.pendingProps,a);case 19:return Nh(e,n,a);case 31:return B1(e,n,a);case 22:return Qg(e,n,a,n.pendingProps);case 24:return Us(n),r=Un(mn),e===null?(c=Zf(),c===null&&(c=Qe,h=jf(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=a),c=h),n.memoizedState={parent:r,cache:c},Kf(n),Xa(n,mn,c)):((e.lanes&a)!==0&&(Jf(e,n),jo(n,null,null,a),Yo()),c=e.memoizedState,h=n.memoizedState,c.parent!==r?(c={parent:r,cache:r},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Xa(n,mn,r)):(r=h.cache,Xa(n,mn,r),r!==c.cache&&Yf(n,[mn],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=e===null?18882560:18874368:Te&&cu(n),e!==null&&e.memoizedProps.name!==r.name?n.flags|=4194816:Dr(e,n),Tn(e,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ma(e){e.flags|=4}function Lh(e,n,a,r,c){var h;if((h=(e.mode&32)!==0)&&(h=a===null?P_(n,r):P_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),h){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Gv())e.flags|=8192;else throw zs=vu,Qf}else e.flags&=-16777217}function ov(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!z_(n))if(Gv())e.flags|=8192;else throw zs=vu,Qf}function zu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Wl():536870912,e.lanes|=n,Pr|=n)}function $o(e,n){if(!Te)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function $e(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,r=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags&1206910976,r|=c.flags&1206910976,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,r|=c.subtreeFlags,r|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=r,e.childLanes=a,n}function G1(e,n,a){var r=n.pendingProps;switch(Vf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $e(n),null;case 1:return $e(n),null;case 3:return a=n.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),_a(mn),w(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Er(n)?Ma(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Xf())),$e(n),null;case 26:var c=n.type,h=n.memoizedState;return e===null?(Ma(n),h!==null?($e(n),ov(n,h)):($e(n),Lh(n,c,null,r,a))):h?h!==e.memoizedState?(Ma(n),$e(n),ov(n,h)):($e(n),n.flags&=-16777217):(e=e.memoizedProps,e!==r&&Ma(n),$e(n),Lh(n,c,e,r,a)),null;case 27:if(dt(n),a=re.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),n.subtreeFlags&=-33554433,null}e=Nt.current,Er(n)?F0(n):(e=w_(c,r,a),n.stateNode=e,Ma(n))}return $e(n),n.subtreeFlags&=-33554433,null;case 5:if(dt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return $e(n),n.subtreeFlags&=-33554433,null}if(h=Nt.current,Er(n))F0(n);else{var S=cl(re.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof r.is=="string"?S.createElement("select",{is:r.is}):S.createElement("select"),r.multiple?h.multiple=!0:r.size&&(h.size=r.size);break;default:h=typeof r.is=="string"?S.createElement(c,{is:r.is}):S.createElement(c)}}h[Vt]=n,h[ee]=r;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=h;t:switch(zn(h,c,r),c){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&Ma(n)}}return $e(n),n.subtreeFlags&=-33554433,Lh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==r&&Ma(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(e=re.current,Er(n)){if(e=n.stateNode,a=n.memoizedProps,r=null,c=Cn,c!==null)switch(c.tag){case 27:case 5:r=c.memoizedProps}e[Vt]=n,e=!!(e.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||r_(e.nodeValue,a)),e||ka(n,!0)}else e=cl(e).createTextNode(r),e[Vt]=n,n.stateNode=e}return $e(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(r=Er(n),a!==null){if(e===null){if(!r)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Vt]=n}else Rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),e=!1}else a=Xf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ui(n),n):(ui(n),null);if((n.flags&128)!==0)throw Error(s(558))}return $e(n),null;case 13:if(r=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Er(n),r!==null&&r.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Vt]=n}else Rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;$e(n),c=!1}else c=Xf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ui(n),n):(ui(n),null)}return ui(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,e=e!==null&&e.memoizedState!==null,a&&(r=n.child,c=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(c=r.alternate.memoizedState.cachePool.pool),h=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(h=r.memoizedState.cachePool.pool),h!==c&&(r.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),zu(n,n.updateQueue),$e(n),null);case 4:return w(),e===null&&pd(n.stateNode.containerInfo),n.flags|=67108864,$e(n),null;case 10:return _a(n.type),$e(n),null;case 19:if(ah(n),r=n.memoizedState,r===null)return $e(n),null;if(c=(n.flags&128)!==0,h=r.rendering,h===null)if(c)$o(r,!1);else{if(cn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Su(e),h!==null){for(n.flags|=128,$o(r,!1),e=h.updateQueue,n.updateQueue=e,zu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)O0(a,e),a=a.sibling;return Wo(n,On.current&1|2),Te&&ga(n,r.treeForkCount),n.child}e=e.sibling}r.tail!==null&&W()>Wu&&(n.flags|=128,c=!0,$o(r,!1),n.lanes=4194304)}else{if(!c)if(e=Su(h),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,zu(n,e),$o(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!h.alternate&&!Te)return $e(n),null}else 2*W()-r.renderingStartTime>Wu&&a!==536870912&&(n.flags|=128,c=!0,$o(r,!1),n.lanes=4194304);r.isBackwards?(h.sibling=n.child,n.child=h):(e=r.last,e!==null?e.sibling=h:n.child=h,r.last=h)}if(r.tail!==null){e=r.tail;t:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=e,r.tail=e.sibling,r.renderingStartTime=W(),e.sibling=null,h=On.current,h=c?h&1|2:h&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||Te?Wo(n,h):(a=h,Rt(Ln,n),Rt(On,a),Hn===null&&(Hn=n)),Te&&ga(n,r.treeForkCount),e}return $e(n),null;case 22:case 23:return ui(n),nh(),r=n.memoizedState!==null,e!==null?e.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&($e(n),n.subtreeFlags&6&&(n.flags|=8192)):$e(n),a=n.updateQueue,a!==null&&zu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),e!==null&&vt(Os),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),_a(mn),$e(n),null;case 25:return null;case 30:return n.flags|=33554432,$e(n),null}throw Error(s(156,n.tag))}function V1(e,n){switch(Vf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return _a(mn),w(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return dt(n),null;case 31:if(n.memoizedState!==null){if(ui(n),n.alternate===null)throw Error(s(340));Rs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ui(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Rs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ah(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return w(),null;case 10:return _a(n.type),null;case 22:case 23:return ui(n),nh(),e!==null&&vt(Os),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return _a(mn),null;case 25:return null;default:return null}}function lv(e,n){switch(Vf(n),n.tag){case 3:_a(mn),w();break;case 26:case 27:case 5:dt(n);break;case 4:w();break;case 31:n.memoizedState!==null&&ui(n);break;case 13:ui(n);break;case 19:ah(n);break;case 10:_a(n.type);break;case 22:case 23:ui(n),nh(),e!==null&&vt(Os);break;case 24:_a(mn)}}function tl(e,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var c=r.next;a=c;do{if((a.tag&e)===e){r=void 0;var h=a.create,S=a.inst;r=h(),S.destroy=r}a=a.next}while(a!==c)}}catch(C){Xe(n,n.return,C)}}function Ja(e,n,a){try{var r=n.updateQueue,c=r!==null?r.lastEffect:null;if(c!==null){var h=c.next;r=h;do{if((r.tag&e)===e){var S=r.inst,C=S.destroy;if(C!==void 0){S.destroy=void 0,c=n;var X=a,it=C;try{it()}catch(ct){Xe(c,X,ct)}}}r=r.next}while(r!==h)}}catch(ct){Xe(n,n.return,ct)}}function uv(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{J0(n,a)}catch(r){Xe(e,e.return,r)}}}function cv(e,n,a){a.props=Fs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(r){Xe(e,n,r)}}function Qi(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:var c=e.stateNode,h=da(e.memoizedProps,c);(c.ref===null||c.ref.name!==h)&&(c.ref=v_(h)),r=c.ref;break;case 7:if(e.stateNode===null){var S=new pi(e);g(e.child,!1,UM,S,void 0,void 0),e.stateNode=S}r=e.stateNode;break;default:r=e.stateNode}typeof a=="function"?e.refCleanup=a(r):a.current=r}}catch(C){Xe(e,n,C)}}function Pn(e,n){var a=e.ref,r=e.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(c){Xe(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Xe(e,n,c)}else a.current=null}function Iu(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)E_(e.stateNode,n[a])}function fv(e){for(var n=e.return;n!==null&&(Ph(n)&&E_(e.stateNode,n.stateNode),!Oh(n));)n=n.return}function el(e){for(var n=e.return;n!==null&&(Ph(n)&&LM(e.stateNode,n.stateNode),!Oh(n));)n=n.return}function Oh(e){return e.tag===5||e.tag===3||e.tag===27}function Ph(e){return e&&e.tag===7&&e.stateNode!==null}function zh(e){var n=e.type,a=e.memoizedProps,r=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(c){Xe(e,e.return,c)}}function Ih(e,n,a){try{var r=e.stateNode;pM(r,e.type,a,n),r[ee]=n}catch(c){Xe(e,e.return,c)}}function hv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ss(e.type)||e.tag===4}function Bh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||hv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ss(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Fh(e,n,a,r){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji)),Iu(e,r),ze=!0;else if(c!==4&&(c===27&&(Iu(e,r),r=null,ss(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(Fh(e,n,a,r),e=e.sibling;e!==null;)Fh(e,n,a,r),e=e.sibling}function Bu(e,n,a,r){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Iu(e,r),ze=!0;else if(c!==4&&(c===27&&(Iu(e,r),r=null,ss(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Bu(e,n,a,r),e=e.sibling;e!==null;)Bu(e,n,a,r),e=e.sibling}function dv(e){var n=e.stateNode,a=e.memoizedProps;try{for(var r=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);zn(n,r,a),n[Vt]=e,n[ee]=a}catch(h){Xe(e,e.return,h)}}var Fu=!1,ci=null;function pv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(Fu=!0)}var Ki=null;function mv(){var e=Ki;return Ki=null,e}var ei=0;function Nr(e,n,a,r,c){return ei=0,gv(e.child,n,a,r,c)}function gv(e,n,a,r,c){for(var h=!1;e!==null;){if(e.tag===5){var S=e.stateNode;if(r!==null){var C=Md(S);r.push(C),C.view&&(h=!0)}else h||Md(S).view&&(h=!0);Fu=!0,m_(S,ei===0?n:n+"_"+ei,a),ei++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c||gv(e.child,n,a,r,c)&&(h=!0));e=e.sibling}return h}function Ji(e,n){for(;e!==null;)e.tag===5?g_(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||Ji(e.child,n)),e=e.sibling}function Hu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Hu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=pa(n.default,n.share),n!=="none"&&(Nr(e,a,n,null,!1)||Ji(e.child,!1))}e=e.sibling}}function Hh(e,n){if(e.tag===30){var a=e.stateNode,r=e.memoizedProps,c=da(r,a),h=pa(r.default,a.paired?r.share:r.enter);h!=="none"?Nr(e,c,h,null,!1)?(Hu(e),a.paired||n||Fr(e,r.onEnter)):Ji(e.child,!1):Hu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Hh(e,n),e=e.sibling;else Hu(e)}function Gh(e){if(ci!==null&&ci.size!==0){var n=ci;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var c=n.get(r);if(c!==void 0){var h=pa(a.default,a.share);if(h!=="none"&&(Nr(e,r,h,null,!1)?(h=e.stateNode,c.paired=h,h.paired=c,Fr(e,a.onShare)):Ji(e.child,!1)),n.delete(r),n.size===0)break}}}Gh(e)}e=e.sibling}}}function Vh(e){if(e.tag===30){var n=e.memoizedProps,a=da(n,e.stateNode),r=ci!==null?ci.get(a):void 0,c=pa(n.default,r!==void 0?n.share:n.exit);c!=="none"&&(Nr(e,a,c,null,!1)?r!==void 0?(c=e.stateNode,r.paired=c,c.paired=r,ci.delete(a),Fr(e,n.onShare)):Fr(e,n.onExit):Ji(e.child,!1)),ci!==null&&Gh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Vh(e),e=e.sibling;else ci!==null&&Gh(e)}function vv(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=da(n,e.stateNode);n=pa(n.default,n.update),e.flags&=-5,n!=="none"&&Nr(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&vv(e);e=e.sibling}}function kh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,Ji(e.child,!1))}kh(e)}e=e.sibling}}function Gu(e){if(e.tag===30)e.stateNode.paired=null,Ji(e.child,!1),kh(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Gu(e),e=e.sibling;else kh(e)}function _v(e){for(e=e.child;e!==null;)e.tag===30?Ji(e.child,!1):(e.subtreeFlags&33554432)!==0&&_v(e),e=e.sibling}function Xh(e,n,a,r,c,h,S){for(var C=!1;n!==null;){if(n.tag===5){var X=n.stateNode;if(h!==null&&ei<h.length){var it=h[ei],ct=Md(X);(it.view||ct.view)&&(C=!0);var Tt;if(Tt=(e.flags&4)===0)if(ct.clip)Tt=!0;else{Tt=it.rect;var tt=ct.rect;Tt=Tt.y!==tt.y||Tt.x!==tt.x||Tt.height!==tt.height||Tt.width!==tt.width}Tt&&(e.flags|=4),ct.abs?ct=!it.abs:(it=it.rect,ct=ct.rect,ct=it.height!==ct.height||it.width!==ct.width),ct&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&m_(X,ei===0?a:a+"_"+ei,c),C&&(e.flags&4)!==0||(Ki===null&&(Ki=[]),Ki.push(X,ei===0?r:r+"_"+ei,n.memoizedProps)),ei++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&S?e.flags|=n.flags&32:Xh(e,n.child,a,r,c,h,S)&&(C=!0));n=n.sibling}return C}function yv(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,r=e.stateNode,c=da(a,r),h=pa(a.default,a.update),S;S=e.memoizedState,e.memoizedState=null,r=e;var C=e.child;ei=0,c=Xh(r,C,c,c,h,S,!1),(e.flags&4)!==0&&c&&Fr(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&yv(e);e=e.sibling}}var Rn=!1,Ge=!1,$i=!1,qh=!1,xv=typeof WeakSet=="function"?WeakSet:Set,Dn=null,ta=!1,nl=!1,Vu=!1,Yh=!1;function k1(e,n,a){if(e=e.containerInfo,vd=Zr,e=T0(e),Uf(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else t:{r=(r=e.ownerDocument)&&r.defaultView||window;var c=r.getSelection&&r.getSelection();if(c&&c.rangeCount!==0){r=c.anchorNode;var h=c.anchorOffset,S=c.focusNode;c=c.focusOffset;try{r.nodeType,S.nodeType}catch{r=null;break t}var C=0,X=-1,it=-1,ct=0,Tt=0,tt=e,lt=null;e:for(;;){for(var Xt;tt!==r||h!==0&&tt.nodeType!==3||(X=C+h),tt!==S||c!==0&&tt.nodeType!==3||(it=C+c),tt.nodeType===3&&(C+=tt.nodeValue.length),(Xt=tt.firstChild)!==null;)lt=tt,tt=Xt;for(;;){if(tt===e)break e;if(lt===r&&++ct===h&&(X=C),lt===S&&++Tt===c&&(it=C),(Xt=tt.nextSibling)!==null)break;tt=lt,lt=tt.parentNode}tt=Xt}r=X===-1||it===-1?null:{start:X,end:it}}else r=null}r=r||{start:0,end:0}}else r=null;for(_d={focusedElem:e,selectionRange:r},Zr=!1,a=(a&335544064)===a,Dn=n,n=a?9270:1024;Dn!==null;){if(e=Dn,a&&(r=e.deletions,r!==null))for(h=0;h<r.length;h++)a&&Vh(r[h]);if(e.alternate===null&&(e.flags&2)!==0)a&&pv(e),ku(a);else{if(e.tag===22){if(r=e.alternate,e.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&Vh(r),ku(a);continue}else if(r!==null&&r.memoizedState!==null){a&&pv(e),ku(a);continue}}r=e.child,(e.subtreeFlags&n)!==0&&r!==null?(r.return=e,Dn=r):(a&&vv(e),ku(a))}}ci=null}function ku(e){for(;Dn!==null;){var n=Dn,a=e,r=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&r!==null){a=void 0,c=r.memoizedProps,r=r.memoizedState;var h=n.stateNode;try{var S=Fs(n.type,c);a=h.getSnapshotBeforeUpdate(S,r),h.__reactInternalSnapshotBeforeUpdate=a}catch(C){Xe(n,n.return,C)}}break;case 3:if((c&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)bd(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":bd(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=da(r.memoizedProps,r.stateNode),c=n.memoizedProps,c=pa(c.default,c.update),c!=="none"&&Nr(r,a,c,r.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Dn=r;break}Dn=n.return}}function Sv(e,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:ea(e,a),r&4&&tl(5,a);break;case 1:if(ea(e,a),r&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){Xe(a,a.return,S)}else{var c=Fs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Xe(a,a.return,S)}}r&64&&uv(a),r&512&&Qi(a,a.return);break;case 3:if(ea(e,a),r&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{J0(e,n)}catch(S){Xe(a,a.return,S)}}break;case 27:n===null&&r&4&&dv(a);case 26:case 5:ea(e,a),n===null&&r&4&&zh(a),r&512&&Qi(a,a.return);break;case 12:ea(e,a);break;case 31:ea(e,a),r&4&&bv(e,a);break;case 13:ea(e,a),r&4&&Av(e,a),r&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=eM.bind(null,a),zM(e,a))));break;case 22:if(r=a.memoizedState!==null||Rn,!r){var h=n!==null&&n.memoizedState!==null||Ge;n=Rn,c=Ge,Rn=r,(Ge=h)&&!c?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),zi(e,a,r)):ea(e,a),Rn=n,Ge=c}break;case 30:ea(e,a),r&512&&Qi(a,a.return);break;case 7:r&512&&Qi(a,a.return);default:ea(e,a)}}function jh(e,n){for(e=e.child;e!==null;)Mv(e,n),e=e.sibling}function Mv(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var c=e.stateNode,h=e.memoizedProps.style,S=h!=null&&h.hasOwnProperty("display")?h.display:null;c.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(X){Xe(e,e.return,X)}Wh(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,ze=!0}catch(X){Xe(e,e.return,X)}break;case 18:try{var C=e.stateNode;n?p_(C,!0):p_(e.stateNode,!1)}catch(X){Xe(e,e.return,X)}break;case 22:case 23:e.memoizedState===null&&jh(e,n);break;default:jh(e,n)}}function Wh(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var a=e,r=n;switch(a.tag){case 4:Mv(a,r);break t;case 22:a.memoizedState===null&&Wh(a,r);break t;default:Wh(a,r)}}e=e.sibling}}function Ev(e){var n=e.alternate;n!==null&&(e.alternate=null,Ev(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&fe(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var nn=null,ni=!1;function Oi(e,n,a){for(a=a.child;a!==null;)Tv(e,n,a),a=a.sibling}function Tv(e,n,a){if(sn&&typeof sn.onCommitFiberUnmount=="function")try{sn.onCommitFiberUnmount(Re,a)}catch{}switch(a.tag){case 26:Ge||Pn(a,n),Oi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Ge&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ge||Pn(a,n),el(a);var r=nn,c=ni;ss(a.type)&&(nn=a.stateNode,ni=!1),Oi(e,n,a),C_(a.stateNode,a.type,a.memoizedProps),nn=r,ni=c;break;case 5:Ge||Pn(a,n),el(a);case 6:if(a.tag===6&&el(a),r=nn,c=ni,nn=null,Oi(e,n,a),nn=r,ni=c,nn!==null)if(ni)try{(nn.nodeType===9?nn.body:nn.nodeName==="HTML"?nn.ownerDocument.body:nn).removeChild(a.stateNode),ze=!0}catch(h){Xe(a,n,h)}else try{nn.removeChild(a.stateNode),ze=!0}catch(h){Xe(a,n,h)}break;case 18:nn!==null&&(ni?(e=nn,d_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Qr(e)):d_(nn,a.stateNode));break;case 4:r=nn,c=ni,nn=a.stateNode.containerInfo,ni=!0,Oi(e,n,a),nn=r,ni=c;break;case 0:case 11:case 14:case 15:Ja(2,a,n),Ge||Ja(4,a,n),Oi(e,n,a);break;case 1:Ge||(Pn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&cv(a,n,r)),Oi(e,n,a);break;case 21:Oi(e,n,a);break;case 22:Ge=(r=Ge)||a.memoizedState!==null,Oi(e,n,a),Ge=r;break;case 30:Pn(a,n),Oi(e,n,a);break;case 7:Ge||Pn(a,n),Oi(e,n,a);break;default:Oi(e,n,a)}}function bv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Qr(e)}catch(a){Xe(n,n.return,a)}}}function Av(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qr(e)}catch(a){Xe(n,n.return,a)}}function X1(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new xv),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new xv),n;default:throw Error(s(435,e.tag))}}function Xu(e,n){var a=X1(e);n.forEach(function(r){if(!a.has(r)){a.add(r);var c=nM.bind(null,e,r);r.then(c,c)}})}function Zn(e,n,a){var r=n.deletions;if(r!==null)for(var c=0;c<r.length;c++){var h=r[c],S=e,C=n,X=C;t:for(;X!==null;){switch(X.tag){case 27:if(ss(X.type)){nn=X.stateNode,ni=!1;break t}break;case 5:nn=X.stateNode,ni=!1;break t;case 3:case 4:nn=X.stateNode.containerInfo,ni=!0;break t}X=X.return}if(nn===null)throw Error(s(160));Tv(S,C,h),nn=null,ni=!1,S=h.alternate,S!==null&&(S.return=null),h.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)wv(n,e,a),n=n.sibling}var Pi=null;function wv(e,n,a){var r=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(r=e.updateQueue,r=r!==null?r.events:null,r!==null))for(var h=0;h<r.length;h++){var S=r[h];S.ref.impl=S.nextImpl}Zn(n,e,a),Qn(e),c&4&&(Ja(3,e,e.return),tl(3,e),Ja(5,e,e.return));break;case 1:Zn(n,e,a),Qn(e),c&512&&(Ge||r===null||Pn(r,r.return)),c&64&&Rn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(h=Pi,Zn(n,e,a),Qn(e),c&512&&(Ge||r===null||Pn(r,r.return)),c&4)if(c=r!==null?r.memoizedState:null,a=e.memoizedState,r===null)if(a===null)if(e.stateNode===null)if(Rn)e.stateNode=c_(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,a=e.memoizedProps,c=h.ownerDocument||h;e:switch(n){case"title":r=c.getElementsByTagName("title")[0],(!r||r[Ie]||r[Vt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=c.createElement(n),c.head.insertBefore(r,c.querySelector("head > title"))),zn(r,n,a),r[Vt]=e,Pe(r),n=r;break t;case"link":if(h=O_("link","href",c).get(n+(a.href||""))){for(S=0;S<h.length;S++)if(r=h[S],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){h.splice(S,1);break e}}r=c.createElement(n),zn(r,n,a),c.head.appendChild(r);break;case"meta":if(h=O_("meta","content",c).get(n+(a.content||""))){for(S=0;S<h.length;S++)if(r=h[S],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){h.splice(S,1);break e}}r=c.createElement(n),zn(r,n,a),c.head.appendChild(r);break;default:throw Error(s(468,n))}r[Vt]=e,Pe(r),n=r}e.stateNode=n}else Rn||Ud(h,e.type,e.stateNode);else e.stateNode=L_(h,a,e.memoizedProps);else c!==a?(c===null?(n=r.stateNode,n===null||Ge||n.parentNode.removeChild(n)):c.count--,a===null?Rn||Ud(h,e.type,e.stateNode):L_(h,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Ih(e,e.memoizedProps,r.memoizedProps);break;case 27:Zn(n,e,a),Qn(e),c&512&&(Ge||r===null||Pn(r,r.return)),r!==null&&c&4&&Ih(e,e.memoizedProps,r.memoizedProps);break;case 5:if(h=$i,$i=!1,Zn(n,e,a),$i=h,Qn(e),c&512&&(Ge||r===null||Pn(r,r.return)),e.flags&32){n=e.stateNode;try{dr(n,""),ze=!0}catch(ct){Xe(e,e.return,ct)}}c&4&&e.stateNode!=null&&(n=e.memoizedProps,Ih(e,n,r!==null?r.memoizedProps:n)),c&1024&&(qh=!0);break;case 6:if(Zn(n,e,a),Qn(e),c&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,ze=!0}catch(ct){Xe(e,e.return,ct)}}break;case 3:if(ze=!1,sc=null,h=Pi,Pi=fl(n.containerInfo),Zn(n,e,a),Pi=h,Qn(e),c&4&&r!==null&&r.memoizedState.isDehydrated)try{Qr(n.containerInfo)}catch(ct){Xe(e,e.return,ct)}qh&&(qh=!1,Cv(e)),ze=!1;break;case 4:c=$i,$i=Rn,r=Wm(),h=Pi,Pi=fl(e.stateNode.containerInfo),Zn(n,e,a),Qn(e),Pi=h,ze&&nl&&(Vu=!0),ze=r,$i=c;break;case 12:Zn(n,e,a),Qn(e);break;case 31:Zn(n,e,a),Qn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Xu(e,n)));break;case 13:Zn(n,e,a),Qn(e),e.child.flags&8192&&e.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(ju=W()),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Xu(e,n)));break;case 22:h=e.memoizedState!==null,S=r!==null&&r.memoizedState!==null;var C=Rn,X=Ge,it=$i;Rn=C||h,$i=it||h,Ge=X||S,Zn(n,e,a),Ge=X,$i=it,Rn=C,Qn(e),c&8192&&(n=e.stateNode,n._visibility=h?n._visibility&-2:n._visibility|1,!h||r===null||S||Rn||Ge||(n=S||Ge,a=Rn,r=Ge,Rn=h||Rn,Ge=n,$a(e,2),Rn=a,Ge=r),!h&&$i||jh(e,h)),c&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Xu(e,a))));break;case 19:Zn(n,e,a),Qn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Xu(e,n)));break;case 30:c&512&&(Ge||r===null||Pn(r,r.return)),c=Wm(),h=nl,S=(a&335544064)===a,C=e.memoizedProps,nl=S&&pa(C.default,C.update)!=="none",Zn(n,e,a),Qn(e),S&&r!==null&&ze&&(e.flags|=4),nl=h,ze=c;break;case 21:break;case 7:c&512&&(Ge||r===null||Pn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=e);default:Zn(n,e,a),Qn(e)}}function Qn(e){var n=e.flags;if(n&2){try{for(var a,r=e.return;r!==null;){if(hv(r)){a=r;break}r=r.return}r=null;for(var c=e.return;c!==null;){if(Ph(c)){var h=c.stateNode;r===null?r=[h]:r.push(h)}if(Oh(c))break;c=c.return}var S=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var C=a.stateNode,X=Bh(e);Bu(e,X,C,S);break;case 5:var it=a.stateNode;a.flags&32&&(dr(it,""),a.flags&=-33);var ct=Bh(e);Bu(e,ct,it,S);break;case 3:case 4:var Tt=a.stateNode.containerInfo,tt=Bh(e);Fh(e,tt,Tt,S);break;default:throw Error(s(161))}}catch(lt){Xe(e,e.return,lt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Cv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Cv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Zr=!0,n.reset(),Zr=!1),e=e.sibling}}function Ur(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Rv(n,e),n=n.sibling;else yv(n)}function Rv(e,n){var a=e.alternate;if(a===null)Hh(e,!1);else switch(e.tag){case 3:if(Yh=ta=!1,mv(),Ur(n,e),!ta&&!Vu){if(e=Ki,e!==null)for(var r=0;r<e.length;r+=3){a=e[r];var c=e[r+1];g_(a,e[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Yh=!0}Ki=null;break;case 5:Ur(n,e);break;case 4:r=ta,ta=!1,Ur(n,e),ta&&(Vu=!0),ta=r;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Hh(e,!1):Ur(n,e));break;case 30:r=ta,c=mv(),ta=!1,Ur(n,e),ta&&(e.flags|=4);var h=e.memoizedProps,S=e.stateNode;n=da(h,S),S=da(a.memoizedProps,S);var C=pa(h.default,h.update);C==="none"?n=!1:(h=a.memoizedState,a.memoizedState=null,a=e.child,ei=0,n=Xh(e,a,n,S,C,h,!0),ei!==(h===null?0:h.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Fr(e,e.memoizedProps.onUpdate),Ki=c):c!==null&&(c.push.apply(c,Ki),Ki=c),ta=(e.flags&32)!==0?!0:r;break;default:Ur(n,e)}}function ea(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Sv(e,n.alternate,n),n=n.sibling}function $a(e,n){for(e=e.child;e!==null;){var a=e,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Ja(4,a,a.return),$a(a,r);break;case 1:Pn(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&cv(a,a.return,c),$a(a,r);break;case 27:(r&2)!==0&&C_(a.stateNode,a.type,a.memoizedProps);case 5:Pn(a,a.return),a.tag!==5&&a.tag!==27||el(a),$a(a,r);break;case 6:el(a);break;case 26:Pn(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||Ge||c.parentNode.removeChild(c),$a(a,r);break;case 22:a.memoizedState===null&&$a(a,r);break;case 30:Pn(a,a.return),$a(a,r);break;case 7:Pn(a,a.return);default:$a(a,r)}e=e.sibling}}function zi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,c=e,h=n,S=h.flags,C=(a&1)!==0;switch(h.tag){case 0:case 11:case 15:zi(c,h,a),tl(4,h);break;case 1:if(zi(c,h,a),r=h,c=r.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ct){Xe(r,r.return,ct)}if(r=h,c=r.updateQueue,c!==null){var X=r.stateNode;try{var it=c.shared.hiddenCallbacks;if(it!==null)for(c.shared.hiddenCallbacks=null,c=0;c<it.length;c++)K0(it[c],X)}catch(ct){Xe(r,r.return,ct)}}C&&S&64&&uv(h),Qi(h,h.return);break;case 27:(a&2)!==0&&dv(h);case 5:h.tag!==5&&h.tag!==27||fv(h),zi(c,h,a),C&&r===null&&S&4&&zh(h),Qi(h,h.return);break;case 6:fv(h);break;case 26:X=h.stateNode,h.memoizedState!==null||X===null||Rn||Ud(fl(X.ownerDocument),h.type,X),zi(c,h,a),C&&r===null&&S&4&&zh(h),Qi(h,h.return);break;case 12:zi(c,h,a);break;case 31:zi(c,h,a),C&&S&4&&bv(c,h);break;case 13:zi(c,h,a),C&&S&4&&Av(c,h);break;case 22:h.memoizedState===null&&zi(c,h,a),Qi(h,h.return);break;case 30:zi(c,h,a),Qi(h,h.return);break;case 7:Qi(h,h.return);default:zi(c,h,a)}n=n.sibling}}function Zh(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Go(a))}function Qh(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Go(e))}function Ci(e,n,a,r){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)Dv(e,n,a,r),n=n.sibling;else c&&_v(n)}function Dv(e,n,a,r){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Gu(n);var h=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(e,n,a,r),h&2048&&tl(9,n);break;case 1:Ci(e,n,a,r);break;case 3:Ci(e,n,a,r),c&&Yh&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),h&2048&&(h=null,n.alternate!==null&&(h=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==h&&(n.refCount++,h!=null&&Go(h)));break;case 12:if(h&2048){Ci(e,n,a,r),h=n.stateNode;try{var S=n.memoizedProps,C=S.id,X=S.onPostCommit;typeof X=="function"&&X(C,n.alternate===null?"mount":"update",h.passiveEffectDuration,-0)}catch(it){Xe(n,n.return,it)}}else Ci(e,n,a,r);break;case 31:Ci(e,n,a,r);break;case 13:Ci(e,n,a,r);break;case 23:break;case 22:S=n.stateNode,C=n.alternate,n.memoizedState!==null?(c&&C!==null&&C.memoizedState===null&&Gu(C),S._visibility&2?Ci(e,n,a,r):il(e,n)):(c&&C!==null&&C.memoizedState!==null&&Gu(n),S._visibility&2?Ci(e,n,a,r):(S._visibility|=2,Lr(e,n,a,r,(n.subtreeFlags&10256)!==0||!1))),h&2048&&Zh(C,n);break;case 24:Ci(e,n,a,r),h&2048&&Qh(n.alternate,n);break;case 30:c&&(h=n.alternate,h!==null&&(Ji(h.child,!0),Ji(n.child,!0))),Ci(e,n,a,r);break;default:Ci(e,n,a,r)}}function Lr(e,n,a,r,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,S=n,C=a,X=r,it=S.flags;switch(S.tag){case 0:case 11:case 15:Lr(h,S,C,X,c),tl(8,S);break;case 23:break;case 22:var ct=S.stateNode;S.memoizedState!==null?ct._visibility&2?Lr(h,S,C,X,c):il(h,S):(ct._visibility|=2,Lr(h,S,C,X,c)),c&&it&2048&&Zh(S.alternate,S);break;case 24:Lr(h,S,C,X,c),c&&it&2048&&Qh(S.alternate,S);break;default:Lr(h,S,C,X,c)}n=n.sibling}}function il(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,r=n,c=r.flags;switch(r.tag){case 22:il(a,r),c&2048&&Zh(r.alternate,r);break;case 24:il(a,r),c&2048&&Qh(r.alternate,r);break;default:il(a,r)}n=n.sibling}}var Hs=8192;function Gs(e,n,a){if(e.subtreeFlags&Hs)for(e=e.child;e!==null;)Nv(e,n,a),e=e.sibling}function Nv(e,n,a){switch(e.tag){case 26:Gs(e,n,a),e.flags&Hs&&(e.memoizedState!==null?QM(a,Pi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&B_(a,e)));break;case 5:Gs(e,n,a),e.flags&Hs&&(e=e.stateNode,(n&335544128)===n&&B_(a,e));break;case 3:case 4:var r=Pi;Pi=fl(e.stateNode.containerInfo),Gs(e,n,a),Pi=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Hs,Hs=16777216,Gs(e,n,a),Hs=r):Gs(e,n,a));break;case 30:if((e.flags&Hs)!==0&&(r=e.memoizedProps.name,r!=null&&r!=="auto")){var c=e.stateNode;c.paired=null,ci===null&&(ci=new Map),ci.set(r,c)}Gs(e,n,a);break;default:Gs(e,n,a)}}function Uv(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function al(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Dn=r,Ov(r,e)}Uv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Lv(e),e=e.sibling}function Lv(e){switch(e.tag){case 0:case 11:case 15:al(e),e.flags&2048&&Ja(9,e,e.return);break;case 3:al(e);break;case 12:al(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,qu(e)):al(e);break;default:al(e)}}function qu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Dn=r,Ov(r,e)}Uv(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ja(8,n,n.return),qu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,qu(n));break;default:qu(n)}e=e.sibling}}function Ov(e,n){for(;Dn!==null;){var a=Dn;switch(a.tag){case 0:case 11:case 15:Ja(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Go(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Dn=r;else t:for(a=e;Dn!==null;){r=Dn;var c=r.sibling,h=r.return;if(Ev(r),r===a){Dn=null;break t}if(c!==null){c.return=h,Dn=c;break t}Dn=h}}}var q1={getCacheForType:function(e){var n=Un(mn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Un(mn).controller.signal}},Y1=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Qe=null,we=null,De=0,ke=0,fi=null,ts=!1,Or=!1,Kh=!1,Ea=0,cn=0,es=0,Vs=0,Yu=0,hi=0,Pr=0,sl=null,ii=null,Jh=!1,ju=0,Pv=0,Wu=1/0,Zu=null,ns=null,rn=0,Ii=null,ks=null,na=0,$h=0,td=null,zv=null,zr=null,Ir=null,Br=null,rl=0,Qu=null;function di(){return(Fe&2)!==0&&De!==0?De&-De:Mt.T!==null?cd():Ft()}function Iv(){if(hi===0)if((De&536870912)===0||Te){var e=ca;ca<<=1,(ca&3932160)===0&&(ca=262144),hi=e}else hi=536870912;return e=Ln.current,e!==null&&(e.flags|=32),hi}function Fr(e,n){if(n!=null){var a=e.stateNode,r=a.ref;r===null&&(r=a.ref=v_(da(e.memoizedProps,a))),Ir===null&&(Ir=[]),Ir.push(n.bind(null,r))}}function ai(e,n,a){(e===Qe&&(ke===2||ke===9)||e.cancelPendingCommit!==null)&&(Hr(e,0),is(e,De,hi,!1)),Ts(e,a),((Fe&2)===0||e!==Qe)&&(e===Qe&&((Fe&2)===0&&(Vs|=a),cn===4&&is(e,De,hi,!1)),ia(e))}function Bv(e,n,a){if((Fe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ia(e,n),c=r?Z1(e,n):nd(e,n,!0),h=r;do{if(c===0){Or&&!r&&is(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!j1(a)){c=nd(e,n,!1),h=!1;continue}if(c===2){if(h=n,e.errorRecoveryDisabledLanes&h)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var C=e;c=sl;var X=C.current.memoizedState.isDehydrated;if(X&&(Hr(C,S).flags|=256),S=nd(C,S,!1),S!==2&&S!==6){if(Kh&&!X){C.errorRecoveryDisabledLanes|=h,Vs|=h,c=4;break t}h=ii,ii=c,h!==null&&(ii===null?ii=h:ii.push.apply(ii,h))}c=S}if(h=!1,c!==2)continue}}if(c===1){Hr(e,0),is(e,n,0,!0);break}t:{switch(r=e,h=c,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:is(r,n,hi,!ts);break t;case 2:ii=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=ju+300-W(),10<c)){if(is(r,n,hi,!ts),Es(r,0,!0)!==0)break t;na=n,r.timeoutHandle=Sd(Fv.bind(null,r,a,ii,Zu,Jh,n,hi,Vs,Pr,ts,h,"Throttled",-0,0),c);break t}Fv(r,a,ii,Zu,Jh,n,hi,Vs,Pr,ts,h,null,-0,0)}}break}while(!0);ia(e)}function Fv(e,n,a,r,c,h,S,C,X,it,ct,Tt,tt,lt){e.timeoutHandle=-1;var Xt=n.subtreeFlags,ne=(h&335544064)===h;if(Tt=null,(ne||Xt&8192||(Xt&16785408)===16785408)&&(Tt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},ci=null,Nv(n,h,Tt),ne&&(Xt=Tt,ne=e.containerInfo,ne=(ne.nodeType===9?ne:ne.ownerDocument).__reactViewTransition,ne!=null&&(Xt.count++,Xt.waitingForViewTransition=!0,Xt=pl.bind(Xt),ne.finished.then(Xt,Xt))),Xt=(h&62914560)===h?ju-W():(h&4194048)===h?Pv-W():0,Xt=KM(Tt,Xt),Xt!==null)){na=h,e.cancelPendingCommit=Xt(jv.bind(null,e,n,h,a,r,c,S,C,X,it,ct,Tt,null,tt,lt)),is(e,h,S,!it);return}jv(e,n,h,a,r,c,S,C,X,it,ct,Tt)}function j1(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var c=a[r],h=c.getSnapshot;c=c.value;try{if(!li(h(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function is(e,n,a,r){n=jl(e,n),n&=~Yu,n&=~Vs,e.suspendedLanes|=n,e.pingedLanes&=~n,r&&(e.warmLanes|=n),r=e.expirationTimes;for(var c=n;0<c;){var h=31-Bn(c),S=1<<h;r[h]=-1,c&=~S}a!==0&&O(e,a,n)}function Ku(){return(Fe&6)===0?(ol(0),!1):!0}function ed(){if(we!==null){if(ke===0)var e=we.return;else e=we,va=Ds=null,uh(e),Ar=null,Xo=0,e=we;for(;e!==null;)lv(e.alternate,e),e=e.return;we=null}}function Hr(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,vM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),na=0,ed(),Qe=e,we=a=ma(e.current,null),De=n,ke=0,fi=null,ts=!1,Or=Ia(e,n),Kh=!1,Pr=hi=Yu=Vs=es=cn=0,ii=sl=null,Jh=!1,Ea=jl(e,n),su(),a}function Hv(e,n){xe=null,Mt.H=Du,n===br||n===gu?(n=j0(),ke=3):n===Qf?(n=j0(),ke=4):ke=n===Th?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,fi=n,we===null&&(cn=1,Nu(e,Ti(n,e.current)))}function Gv(){var e=Ln.current;return e===null?!0:(De&4194048)===De?Hn===null:(De&62914560)===De||(De&536870912)!==0?e===Hn:!1}function Vv(){var e=Mt.H;return Mt.H=Du,e===null?Du:e}function kv(){var e=Mt.A;return Mt.A=q1,e}function Ju(){cn=4,ts||(De&4194048)!==De&&Ln.current!==null||(Or=!0),(es&134217727)===0&&(Vs&134217727)===0||Qe===null||is(Qe,De,hi,!1)}function nd(e,n,a){var r=Fe;Fe|=2;var c=Vv(),h=kv();(Qe!==e||De!==n)&&(Zu=null,Hr(e,n)),n=!1;var S=cn;t:do try{if(ke!==0&&we!==null){var C=we,X=fi;switch(ke){case 8:ed(),S=6;break t;case 3:case 2:case 9:case 6:Ln.current===null&&(n=!0);var it=ke;if(ke=0,fi=null,Gr(e,C,X,it),a&&Or){S=0;break t}break;default:it=ke,ke=0,fi=null,Gr(e,C,X,it)}}W1(),S=cn;break}catch(ct){Hv(e,ct)}while(!0);return n&&e.shellSuspendCounter++,va=Ds=null,Fe=r,Mt.H=c,Mt.A=h,we===null&&(Qe=null,De=0,su()),S}function W1(){for(;we!==null;)Xv(we)}function Z1(e,n){var a=Fe;Fe|=2;var r=Vv(),c=kv();Qe!==e||De!==n?(Zu=null,Wu=W()+500,Hr(e,n)):Or=Ia(e,n);t:do try{if(ke!==0&&we!==null){n=we;var h=fi;e:switch(ke){case 1:ke=0,fi=null,Gr(e,n,h,1);break;case 2:case 9:if(q0(h)){ke=0,fi=null,qv(n);break}n=function(){ke!==2&&ke!==9||Qe!==e||(ke=7),ia(e)},h.then(n,n);break t;case 3:ke=7;break t;case 4:ke=5;break t;case 7:q0(h)?(ke=0,fi=null,qv(n)):(ke=0,fi=null,Gr(e,n,h,7));break;case 5:var S=null;switch(we.tag){case 26:S=we.memoizedState;case 5:case 27:var C=we;if(S?z_(S):C.stateNode.complete){ke=0,fi=null;var X=C.sibling;if(X!==null)we=X;else{var it=C.return;it!==null?(we=it,$u(it)):we=null}break e}}ke=0,fi=null,Gr(e,n,h,5);break;case 6:ke=0,fi=null,Gr(e,n,h,6);break;case 8:ed(),cn=6;break t;default:throw Error(s(462))}}Q1();break}catch(ct){Hv(e,ct)}while(!0);return va=Ds=null,Mt.H=r,Mt.A=c,Fe=a,we!==null?0:(Qe=null,De=0,su(),cn)}function Q1(){for(;we!==null&&!ut();)Xv(we)}function Xv(e){var n=rv(e.alternate,e,Ea);e.memoizedProps=e.pendingProps,n===null?$u(e):we=n}function qv(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=$g(a,n,n.pendingProps,n.type,void 0,De);break;case 11:n=$g(a,n,n.pendingProps,n.type.render,n.ref,De);break;case 5:uh(n);var r=n;r===Cn&&(Te?(fu(r),r.tag===5&&r.stateNode!=null&&(Je=r.stateNode)):(fu(r),Te=!0));default:lv(a,n),n=we=O0(n,Ea),n=rv(a,n,Ea)}e.memoizedProps=e.pendingProps,n===null?$u(e):we=n}function Gr(e,n,a,r){va=Ds=null,uh(n),Ar=null,Xo=0;var c=n.return;try{if(I1(e,c,n,a,De)){cn=1,Nu(e,Ti(a,e.current)),we=null;return}}catch(h){if(c!==null)throw we=c,h;cn=1,Nu(e,Ti(a,e.current)),we=null;return}n.flags&32768?(Te||r===1?e=!0:Or||(De&536870912)!==0?e=!1:(ts=e=!0,(r===2||r===9||r===3||r===6)&&(r=Ln.current,r!==null&&r.tag===13&&(r.flags|=16384))),Yv(n,e)):$u(n)}function $u(e){var n=e;do{if((n.flags&32768)!==0){Yv(n,ts);return}e=n.return;var a=G1(n.alternate,n,Ea);if(a!==null){we=a;return}if(n=n.sibling,n!==null){we=n;return}we=n=e}while(n!==null);cn===0&&(cn=5)}function Yv(e,n){do{var a=V1(e.alternate,e);if(a!==null){a.flags&=32767,we=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){we=e;return}we=e=a}while(e!==null);cn=6,we=null}function jv(e,n,a,r,c,h,S,C,X,it,ct,Tt){e.cancelPendingCommit=null;do tc();while(rn!==0);if((Fe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===Qe&&(we=Qe=null,De=0),ks=n,Ii=e,na=a,td=c,zv=r,K1(e,n,a,S,C,X,Tt)}}function K1(e,n,a,r,c,h,S){var C=n.lanes|n.childLanes;if($h=C,C|=If,pf(e,a,C,r,c,h),Ir=null,(a&335544064)===a?(Br=b1(e),r=10262):(Br=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(e.callbackNode=null,e.callbackPriority=0,iM(zt,function(){return rd(),null})):(e.callbackNode=null,e.callbackPriority=0),Fu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Mt.T,Mt.T=null,c=Lt.p,Lt.p=2,h=Fe,Fe|=4;try{k1(e,n,a)}finally{Fe=h,Lt.p=c,Mt.T=r}}rn=1,Fu?zr=EM(S,e.containerInfo,Br,id,ad,$1,sd,rd,J1):(id(),ad(),sd())}function J1(e){if(rn!==0){var n=Ii.onRecoverableError;n(e,{componentStack:null})}}function $1(){rn===3&&(rn=0,Rv(ks,Ii),rn=4)}function id(){if(rn===1){rn=0;var e=Ii,n=ks,a=na,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Mt.T,Mt.T=null;var c=Lt.p;Lt.p=2;var h=Fe;Fe|=4;try{nl=Vu=!1,wv(n,e,a),a=_d;var S=T0(e.containerInfo),C=a.focusedElem,X=a.selectionRange;if(S!==C&&C&&C.ownerDocument&&E0(C.ownerDocument.documentElement,C)){if(X!==null&&Uf(C)){var it=X.start,ct=X.end;if(ct===void 0&&(ct=it),"selectionStart"in C)C.selectionStart=it,C.selectionEnd=Math.min(ct,C.value.length);else{var Tt=C.ownerDocument||document,tt=Tt&&Tt.defaultView||window;if(tt.getSelection){var lt=tt.getSelection(),Xt=C.textContent.length,ne=Math.min(X.start,Xt),Se=X.end===void 0?ne:Math.min(X.end,Xt);!lt.extend&&ne>Se&&(S=Se,Se=ne,ne=S);var nt=M0(C,ne),K=M0(C,Se);if(nt&&K&&(lt.rangeCount!==1||lt.anchorNode!==nt.node||lt.anchorOffset!==nt.offset||lt.focusNode!==K.node||lt.focusOffset!==K.offset)){var ot=Tt.createRange();ot.setStart(nt.node,nt.offset),lt.removeAllRanges(),ne>Se?(lt.addRange(ot),lt.extend(K.node,K.offset)):(ot.setEnd(K.node,K.offset),lt.addRange(ot))}}}}for(Tt=[],lt=C;lt=lt.parentNode;)lt.nodeType===1&&Tt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<Tt.length;C++){var Et=Tt[C];Et.element.scrollLeft=Et.left,Et.element.scrollTop=Et.top}}Zr=!!vd,_d=vd=null}finally{Fe=h,Lt.p=c,Mt.T=r}}e.current=n,rn=2}}function ad(){if(rn===2){rn=0;var e=Ii,n=ks,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Mt.T,Mt.T=null;var r=Lt.p;Lt.p=2;var c=Fe;Fe|=4;try{Sv(e,n.alternate,n)}finally{Fe=c,Lt.p=r,Mt.T=a}}rn=3}}function sd(){if(rn===4||rn===3){rn=0;var e=zr;zr=null,se();var n=Ii,a=ks,r=na,c=zv,h=(r&335544064)===r?10262:10256;if((a.subtreeFlags&h)!==0||(a.flags&h)!==0?rn=5:(rn=0,ks=Ii=null,Wv(n,n.pendingLanes)),h=n.pendingLanes,h===0&&(ns=null),st(r),a=a.stateNode,sn&&typeof sn.onCommitFiberRoot=="function")try{sn.onCommitFiberRoot(Re,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=Mt.T,h=Lt.p,Lt.p=2,Mt.T=null;try{for(var S=n.onRecoverableError,C=0;C<c.length;C++){var X=c[C];S(X.value,{componentStack:X.stack})}}finally{Mt.T=a,Lt.p=h}}if(c=Ir,S=Br,Br=null,c!==null&&(Ir=null,S===null&&(S=[]),e!==null))for(X=0;X<c.length;X++)a=(0,c[X])(S),a!==void 0&&e.finished.finally(a);(na&3)!==0&&tc(),ia(n),h=n.pendingLanes,(r&261930)!==0&&(h&42)!==0?n===Qu?rl++:(rl=0,Qu=n):(rl=0,Qu=null),ol(0)}}function Wv(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Go(n)))}function tc(){return zr!==null&&(zr.skipTransition(),zr=null),id(),ad(),sd(),rd()}function rd(){if(rn!==5)return!1;var e=Ii,n=$h;$h=0;var a=st(na),r=Mt.T,c=Lt.p;try{Lt.p=32>a?32:a,Mt.T=null,a=td,td=null;var h=Ii,S=na;if(rn=0,ks=Ii=null,na=0,(Fe&6)!==0)throw Error(s(331));var C=Fe;if(Fe|=4,Lv(h.current),Dv(h,h.current,S,a),Fe=C,ol(0,!1),sn&&typeof sn.onPostCommitFiberRoot=="function")try{sn.onPostCommitFiberRoot(Re,h)}catch{}return!0}finally{Lt.p=c,Mt.T=r,Wv(e,n)}}function Zv(e,n,a){n=Ti(a,n),n=Eh(e.stateNode,n,2),e=Wa(e,n,2),e!==null&&(Ts(e,2),ia(e))}function Xe(e,n,a){if(e.tag===3)Zv(e,e,a);else for(;n!==null;){if(n.tag===3){Zv(n,e,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ns===null||!ns.has(r))){e=Ti(a,e),a=qg(2),r=Wa(n,a,2),r!==null&&(Yg(a,r,n,e),Ts(r,2),ia(r));break}}n=n.return}}function od(e,n,a){var r=e.pingCache;if(r===null){r=e.pingCache=new Y1;var c=new Set;r.set(n,c)}else c=r.get(n),c===void 0&&(c=new Set,r.set(n,c));c.has(a)||(Kh=!0,c.add(a),e=tM.bind(null,e,n,a),n.then(e,e))}function tM(e,n,a){var r=e.pingCache;r!==null&&r.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Qe===e&&(De&a)===a&&((cn===4||cn===3&&(De&62914560)===De&&300>W()-ju)&&(Fe&2)===0?Hr(e,0):Yu|=a,Pr===De&&(Pr=0)),ia(e)}function Qv(e,n){n===0&&(n=Wl()),e=ws(e,n),e!==null&&(Ts(e,n),ia(e))}function eM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Qv(e,a)}function nM(e,n){var a=0;switch(e.tag){case 31:case 13:var r=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),Qv(e,a)}function iM(e,n){return he(e,n)}var Vr=null,kr=null,ld=!1,ec=!1,ud=!1,as=0;function ia(e){e!==kr&&e.next===null&&(kr===null?Vr=kr=e:kr=kr.next=e),ec=!0,ld||(ld=!0,sM())}function ol(e,n){if(!ud&&ec){ud=!0;do for(var a=!1,r=Vr;r!==null;){if(e!==0){var c=r.pendingLanes;if(c===0)var h=0;else{var S=r.suspendedLanes,C=r.pingedLanes;h=(1<<31-Bn(42|e)+1)-1,h&=c&~(S&~C),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,t_(r,h))}else h=De,h=Es(r,r===Qe?h:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(h&3)===0||Ia(r,h)||(a=!0,t_(r,h));r=r.next}while(a);ud=!1}}function aM(){Kv()}function Kv(){ec=ld=!1;var e=0;as!==0&&gM()&&(e=as);for(var n=W(),a=null,r=Vr;r!==null;){var c=r.next,h=Jv(r,n);h===0?(r.next=null,a===null?Vr=c:a.next=c,c===null&&(kr=a)):(a=r,(e!==0||(h&3)!==0)&&(ec=!0)),r=c}rn!==0&&rn!==5||ol(e),as!==0&&(as=0)}function Jv(e,n){for(var a=e.suspendedLanes,r=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var S=31-Bn(h),C=1<<S,X=c[S];X===-1?((C&a)===0||(C&r)!==0)&&(c[S]=df(C,n)):X<=n&&(e.expiredLanes|=C),h&=~C}if(n=Qe,a=De,a=Es(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,a===0||e===n&&(ke===2||ke===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&ie(r),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ia(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(r!==null&&ie(r),st(a)){case 2:case 8:a=$t;break;case 32:a=zt;break;case 268435456:a=ae;break;default:a=zt}return r=$v.bind(null,e),a=he(a,r),e.callbackPriority=n,e.callbackNode=a,n}return r!==null&&r!==null&&ie(r),e.callbackPriority=2,e.callbackNode=null,2}function $v(e,n){if(rn!==0&&rn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(tc()&&e.callbackNode!==a)return null;var r=De;return r=Es(e,e===Qe?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(Bv(e,r,n),Jv(e,W()),e.callbackNode!=null&&e.callbackNode===a?$v.bind(null,e):null)}function t_(e,n){if(tc())return null;Bv(e,n,!0)}function sM(){_M(function(){(Fe&6)!==0?he(kt,aM):Kv()})}function cd(){if(as===0){var e=Ls;e===0&&(e=Ss,Ss<<=1,(Ss&261888)===0&&(Ss=256)),as=e}return as}function e_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Kl(e)}function rM(e,n,a,r,c){if(n==="submit"&&a&&a.stateNode===c){var h=e_((c[ee]||null).action),S=r.submitter;S&&(n=(n=S[ee]||null)?e_(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var C=new eu("action","action",null,r,c);e.push({event:C,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(as!==0){var X=new FormData(c,S);_h(a,{pending:!0,data:X,method:c.method,action:h},null,X)}}else typeof h=="function"&&(C.preventDefault(),X=new FormData(c,S),_h(a,{pending:!0,data:X,method:c.method,action:h},h,X))},currentTarget:c}]})}}for(var fd=0;fd<zf.length;fd++){var hd=zf[fd],oM=hd.toLowerCase(),lM=hd[0].toUpperCase()+hd.slice(1);Li(oM,"on"+lM)}Li(w0,"onAnimationEnd"),Li(C0,"onAnimationIteration"),Li(R0,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(v1,"onTransitionRun"),Li(_1,"onTransitionStart"),Li(y1,"onTransitionCancel"),Li(D0,"onTransitionEnd"),ln("onMouseEnter",["mouseout","mouseover"]),ln("onMouseLeave",["mouseout","mouseover"]),ln("onPointerEnter",["pointerout","pointerover"]),ln("onPointerLeave",["pointerout","pointerover"]),pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),pn("onBeforeInput",["compositionend","keypress","textInput","paste"]),pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ll="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ll));function n_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var r=e[a],c=r.event;r=r.listeners;t:{var h=void 0;if(n)for(var S=r.length-1;0<=S;S--){var C=r[S],X=C.instance,it=C.currentTarget;if(C=C.listener,X!==h&&c.isPropagationStopped())break t;h=C,c.currentTarget=it;try{h(c)}catch(ct){au(ct)}c.currentTarget=null,h=X}else for(S=0;S<r.length;S++){if(C=r[S],X=C.instance,it=C.currentTarget,C=C.listener,X!==h&&c.isPropagationStopped())break t;h=C,c.currentTarget=it;try{h(c)}catch(ct){au(ct)}c.currentTarget=null,h=X}}}}function Ce(e,n){var a=n[ce];a===void 0&&(a=n[ce]=new Set);var r=e+"__bubble";a.has(r)||(i_(n,e,2,!1),a.add(r))}function dd(e,n,a){var r=0;n&&(r|=4),i_(a,e,r,n)}var nc="_reactListening"+Math.random().toString(36).slice(2);function pd(e){if(!e[nc]){e[nc]=!0,Ke.forEach(function(a){a!=="selectionchange"&&(uM.has(a)||dd(a,!1,e),dd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[nc]||(n[nc]=!0,dd("selectionchange",!1,n))}}function i_(e,n,a,r){switch(Y_(n)){case 2:var c=eE;break;case 8:c=nE;break;default:c=Od}a=c.bind(null,n,a,e),c=void 0,!Mf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),r?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function md(e,n,a,r,c){var h=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var S=r.tag;if(S===3||S===4){var C=r.stateNode.containerInfo;if(C===c)break;if(S===4)for(S=r.return;S!==null;){var X=S.tag;if((X===3||X===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;C!==null;){if(S=Be(C),S===null)return;if(X=S.tag,X===5||X===6||X===26||X===27){r=h=S;continue t}C=C.parentNode}}r=r.return}i0(function(){var it=h,ct=xf(a),Tt=[];t:{var tt=N0.get(e);if(tt!==void 0){var lt=eu,Xt=e;switch(e){case"keypress":if($l(a)===0)break t;case"keydown":case"keyup":lt=jS;break;case"focusin":Xt="focus",lt=Af;break;case"focusout":Xt="blur",lt=Af;break;case"beforeblur":case"afterblur":lt=Af;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=r0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=PS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=JS;break;case w0:case C0:case R0:lt=BS;break;case D0:lt=t1;break;case"scroll":case"scrollend":lt=LS;break;case"wheel":lt=n1;break;case"copy":case"cut":case"paste":lt=HS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=l0;break;case"submit":lt=QS;break;case"toggle":case"beforetoggle":lt=a1}var ne=(n&4)!==0,Se=!ne&&(e==="scroll"||e==="scrollend"),nt=ne?tt!==null?tt+"Capture":null:tt;ne=[];for(var K=it,ot;K!==null;){var Et=K;if(ot=Et.stateNode,Et=Et.tag,Et!==5&&Et!==26&&Et!==27||ot===null||nt===null||(Et=Do(K,nt),Et!=null&&ne.push(ul(K,Et,ot))),Se)break;K=K.return}0<ne.length&&(tt=new lt(tt,Xt,null,a,ct),Tt.push({event:tt,listeners:ne}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",tt=e==="mouseout"||e==="pointerout",lt&&a!==yf&&(Xt=a.relatedTarget||a.fromElement)&&(Be(Xt)||Xt[pe]))break t;(tt||lt)&&(Xt=ct.window===ct?ct:(lt=ct.ownerDocument)?lt.defaultView||lt.parentWindow:window,tt?(lt=a.relatedTarget||a.toElement,tt=it,lt=lt?Be(lt):null,lt!==null&&(Se=u(lt),ne=lt.tag,lt!==Se||ne!==5&&ne!==27&&ne!==6)&&(lt=null)):(tt=null,lt=it),tt!==lt&&(ne=r0,Et="onMouseLeave",nt="onMouseEnter",K="mouse",(e==="pointerout"||e==="pointerover")&&(ne=l0,Et="onPointerLeave",nt="onPointerEnter",K="pointer"),Se=tt==null?Xt:En(tt),ot=lt==null?Xt:En(lt),Xt=new ne(Et,K+"leave",tt,a,ct),Xt.target=Se,Xt.relatedTarget=ot,Et=null,Be(ct)===it&&(ne=new ne(nt,K+"enter",lt,a,ct),ne.target=ot,ne.relatedTarget=Se,Et=ne),Se=Et,ne=tt&&lt?z(tt,lt,cM):null,tt!==null&&a_(Tt,Xt,tt,ne,!1),lt!==null&&Se!==null&&a_(Tt,Se,lt,ne,!0)))}t:{if(tt=it?En(it):window,lt=tt.nodeName&&tt.nodeName.toLowerCase(),lt==="select"||lt==="input"&&tt.type==="file")var Kt=g0;else if(p0(tt))if(v0)Kt=p1;else{Kt=h1;var Ne=f1}else lt=tt.nodeName,!lt||lt.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?it&&_f(it.elementType)&&(Kt=g0):Kt=d1;if(Kt&&(Kt=Kt(e,it))){m0(Tt,Kt,a,ct);break t}Ne&&Ne(e,tt,it)}switch(Ne=it?En(it):window,e){case"focusin":(p0(Ne)||Ne.contentEditable==="true")&&(vr=Ne,Lf=it,Bo=null);break;case"focusout":Bo=Lf=vr=null;break;case"mousedown":Of=!0;break;case"contextmenu":case"mouseup":case"dragend":Of=!1,b0(Tt,a,ct);break;case"selectionchange":if(g1)break;case"keydown":case"keyup":b0(Tt,a,ct)}var le;if(Cf)t:{switch(e){case"compositionstart":var me="onCompositionStart";break t;case"compositionend":me="onCompositionEnd";break t;case"compositionupdate":me="onCompositionUpdate";break t}me=void 0}else gr?h0(e,a)&&(me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(u0&&a.locale!=="ko"&&(gr||me!=="onCompositionStart"?me==="onCompositionEnd"&&gr&&(le=a0()):(Fa=ct,Ef="value"in Fa?Fa.value:Fa.textContent,gr=!0)),Ne=ic(it,me),0<Ne.length&&(me=new o0(me,e,null,a,ct),Tt.push({event:me,listeners:Ne}),le?me.data=le:(le=d0(a),le!==null&&(me.data=le)))),(le=r1?o1(e,a):l1(e,a))&&(me=ic(it,"onBeforeInput"),0<me.length&&(Ne=new o0("onBeforeInput","beforeinput",null,a,ct),Tt.push({event:Ne,listeners:me}),Ne.data=le)),rM(Tt,e,it,a,ct)}n_(Tt,n)})}function ul(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ic(e,n){for(var a=n+"Capture",r=[];e!==null;){var c=e,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=Do(e,a),c!=null&&r.unshift(ul(e,c,h)),c=Do(e,n),c!=null&&r.push(ul(e,c,h))),e.tag===3)return r;e=e.return}return[]}function cM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function a_(e,n,a,r,c){for(var h=n._reactName,S=[];a!==null&&a!==r;){var C=a,X=C.alternate,it=C.stateNode;if(C=C.tag,X!==null&&X===r)break;C!==5&&C!==26&&C!==27||it===null||(X=it,c?(it=Do(a,h),it!=null&&S.unshift(ul(a,it,X))):c||(it=Do(a,h),it!=null&&S.push(ul(a,it,X)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var fM=/\r\n?/g,hM=/\u0000|\uFFFD/g;function s_(e){return(typeof e=="string"?e:""+e).replace(fM,`
`).replace(hM,"")}function r_(e,n){return n=s_(n),s_(e)===n}function qe(e,n,a,r,c,h){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||dr(e,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&dr(e,""+r);else return;break;case"className":Ql(e,"class",r);break;case"tabIndex":Ql(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Ql(e,a,r);break;case"style":e0(e,r,h);return;case"data":if(n!=="object"){Ql(e,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Kl(r),e.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&qe(e,n,"name",c.name,c,null),qe(e,n,"formEncType",c.formEncType,c,null),qe(e,n,"formMethod",c.formMethod,c,null),qe(e,n,"formTarget",c.formTarget,c,null)):(qe(e,n,"encType",c.encType,c,null),qe(e,n,"method",c.method,c,null),qe(e,n,"target",c.target,c,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){e.removeAttribute(a);break}r=Kl(r),e.setAttribute(a,r);break;case"onClick":r!=null&&(e.onclick=ji);return;case"onScroll":r!=null&&Ce("scroll",e);return;case"onScrollEnd":r!=null&&Ce("scrollend",e);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(h!=null?h.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":e.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){e.removeAttribute("xlink:href");break}a=Kl(r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":r===!0?e.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?e.setAttribute(a,r):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?e.setAttribute(a,r):e.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?e.removeAttribute(a):e.setAttribute(a,r);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),Zl(e,"popover",r);break;case"xlinkActuate":fa(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":fa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":fa(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":fa(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":fa(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":fa(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":fa(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":fa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":fa(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Zl(e,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=NS.get(a)||a,Zl(e,a,r);else return}ze=!0}function gd(e,n,a,r,c,h){switch(a){case"style":e0(e,r,h);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(c.children!=null)throw Error(s(60));(h!=null?h.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof r=="string")dr(e,r);else if(typeof r=="number"||typeof r=="bigint")dr(e,""+r);else return;break;case"onScroll":r!=null&&Ce("scroll",e);return;case"onScrollEnd":r!=null&&Ce("scrollend",e);return;case"onClick":r!=null&&(e.onclick=ji);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Yn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),h=a.slice(2,c?a.length-7:void 0),n=e[ee]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(h,n,c),typeof r=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(h,r,c);break t}ze=!0,a in e?e[a]=r:r===!0?e.setAttribute(a,""):Zl(e,a,r)}return}ze=!0}function zn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var r=!1,c=!1,h;for(h in a)if(a.hasOwnProperty(h)){var S=a[h];if(S!=null)switch(h){case"src":r=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(e,n,h,S,a,null)}}c&&qe(e,n,"srcSet",a.srcSet,a,null),r&&qe(e,n,"src",a.src,a,null);return;case"input":Ce("invalid",e);var C=h=S=c=null,X=null,it=null;for(r in a)if(a.hasOwnProperty(r)){var ct=a[r];if(ct!=null)switch(r){case"name":c=ct;break;case"type":S=ct;break;case"checked":X=ct;break;case"defaultChecked":it=ct;break;case"value":h=ct;break;case"defaultValue":C=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:qe(e,n,r,ct,a,null)}}Km(e,h,C,X,it,S,c,!1);return;case"select":Ce("invalid",e),r=S=h=null;for(c in a)if(a.hasOwnProperty(c)&&(C=a[c],C!=null))switch(c){case"value":h=C;break;case"defaultValue":S=C;break;case"multiple":r=C;default:qe(e,n,c,C,a,null)}n=h,a=S,e.multiple=!!r,n!=null?hr(e,!!r,n,!1):a!=null&&hr(e,!!r,a,!0);return;case"textarea":Ce("invalid",e),h=c=r=null;for(S in a)if(a.hasOwnProperty(S)&&(C=a[S],C!=null))switch(S){case"value":r=C;break;case"defaultValue":c=C;break;case"children":h=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:qe(e,n,S,C,a,null)}$m(e,r,c,h);return;case"option":for(X in a)if(a.hasOwnProperty(X)&&(r=a[X],r!=null))switch(X){case"selected":e.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:qe(e,n,X,r,a,null)}return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(r=0;r<ll.length;r++)Ce(ll[r],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(r=a[it],r!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:qe(e,n,it,r,a,null)}return;default:if(_f(n)){for(ct in a)a.hasOwnProperty(ct)&&(r=a[ct],r!==void 0&&gd(e,n,ct,r,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(r=a[C],r!=null&&qe(e,n,C,r,a,null))}var dM={};function pM(e,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,S=null,C=null,X=null,it=null,ct=null;for(lt in a){var Tt=a[lt];if(a.hasOwnProperty(lt)&&Tt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":X=Tt;default:r.hasOwnProperty(lt)||qe(e,n,lt,null,r,Tt)}}for(var tt in r){var lt=r[tt];if(Tt=a[tt],r.hasOwnProperty(tt)&&(lt!=null||Tt!=null))switch(tt){case"type":lt!==Tt&&(ze=!0),h=lt;break;case"name":lt!==Tt&&(ze=!0),c=lt;break;case"checked":lt!==Tt&&(ze=!0),it=lt;break;case"defaultChecked":lt!==Tt&&(ze=!0),ct=lt;break;case"value":lt!==Tt&&(ze=!0),S=lt;break;case"defaultValue":lt!==Tt&&(ze=!0),C=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==Tt&&qe(e,n,tt,lt,r,Tt)}}gf(e,S,C,X,it,ct,h,c);return;case"select":lt=S=C=tt=null;for(h in a)if(X=a[h],a.hasOwnProperty(h)&&X!=null)switch(h){case"value":break;case"multiple":lt=X;default:r.hasOwnProperty(h)||qe(e,n,h,null,r,X)}for(c in r)if(h=r[c],X=a[c],r.hasOwnProperty(c)&&(h!=null||X!=null))switch(c){case"value":h!==X&&(ze=!0),tt=h;break;case"defaultValue":h!==X&&(ze=!0),C=h;break;case"multiple":h!==X&&(ze=!0),S=h;default:h!==X&&qe(e,n,c,h,r,X)}n=C,a=S,r=lt,tt!=null?hr(e,!!a,tt,!1):!!r!=!!a&&(n!=null?hr(e,!!a,n,!0):hr(e,!!a,a?[]:"",!1));return;case"textarea":lt=tt=null;for(C in a)if(c=a[C],a.hasOwnProperty(C)&&c!=null&&!r.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:qe(e,n,C,null,r,c)}for(S in r)if(c=r[S],h=a[S],r.hasOwnProperty(S)&&(c!=null||h!=null))switch(S){case"value":c!==h&&(ze=!0),tt=c;break;case"defaultValue":c!==h&&(ze=!0),lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==h&&qe(e,n,S,c,r,h)}Jm(e,tt,lt);return;case"option":for(var Xt in a)if(tt=a[Xt],a.hasOwnProperty(Xt)&&tt!=null&&!r.hasOwnProperty(Xt))switch(Xt){case"selected":e.selected=!1;break;default:qe(e,n,Xt,null,r,tt)}for(X in r)if(tt=r[X],lt=a[X],r.hasOwnProperty(X)&&tt!==lt&&(tt!=null||lt!=null))switch(X){case"selected":tt!==lt&&(ze=!0),e.selected=tt&&typeof tt!="function"&&typeof tt!="symbol";break;default:qe(e,n,X,tt,r,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)tt=a[ne],a.hasOwnProperty(ne)&&tt!=null&&!r.hasOwnProperty(ne)&&qe(e,n,ne,null,r,tt);for(it in r)if(tt=r[it],lt=a[it],r.hasOwnProperty(it)&&tt!==lt&&(tt!=null||lt!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:qe(e,n,it,tt,r,lt)}return;default:if(_f(n)){for(var Se in a)tt=a[Se],a.hasOwnProperty(Se)&&tt!==void 0&&!r.hasOwnProperty(Se)&&gd(e,n,Se,void 0,r,tt);for(ct in r)tt=r[ct],lt=a[ct],!r.hasOwnProperty(ct)||tt===lt||tt===void 0&&lt===void 0||gd(e,n,ct,tt,r,lt);return}}for(var nt in a)tt=a[nt],a.hasOwnProperty(nt)&&tt!=null&&!r.hasOwnProperty(nt)&&qe(e,n,nt,null,r,tt);for(Tt in r)tt=r[Tt],lt=a[Tt],!r.hasOwnProperty(Tt)||tt===lt||tt==null&&lt==null||qe(e,n,Tt,tt,r,lt)}function o_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var c=a[r],h=c.transferSize,S=c.initiatorType,C=c.duration;if(h&&C&&o_(S)){for(S=0,C=c.responseEnd,r+=1;r<a.length;r++){var X=a[r],it=X.startTime;if(it>C)break;var ct=X.transferSize,Tt=X.initiatorType;ct&&o_(Tt)&&(X=X.responseEnd,S+=ct*(X<C?1:(C-it)/(X-it)))}if(--r,n+=8*(h+S)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var vd=null,_d=null;function cl(e){return e.nodeType===9?e:e.ownerDocument}function l_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function u_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function c_(e,n,a,r){return a=cl(a).createElement(e),a[Vt]=r,a[ee]=n,zn(a,e,n),Pe(a),a}function yd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xd=null;function gM(){var e=window.event;return e&&e.type==="popstate"?e===xd?!1:(xd=e,!0):(xd=null,!1)}var Sd=typeof setTimeout=="function"?setTimeout:void 0,vM=typeof clearTimeout=="function"?clearTimeout:void 0,f_=typeof Promise=="function"?Promise:void 0,h_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Sd,_M=typeof queueMicrotask=="function"?queueMicrotask:typeof f_<"u"?function(e){return f_.resolve(null).then(e).catch(yM)}:Sd;function yM(e){setTimeout(function(){throw e})}function ss(e){return e==="head"}function d_(e,n){var a=n,r=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(r===0){e.removeChild(c),Qr(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Rd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Rd(a);for(var h=a.firstChild;h;){var S=h.nextSibling,C=h.nodeName;h[Ie]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=S}}else a==="body"&&Rd(e.ownerDocument.body);a=c}while(a);Qr(n)}function p_(e,n){var a=e;e=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=r}while(a)}function m_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var r=1;else for(var c=r=0;c<n.length;c++){var h=n[c];0<h.width&&0<h.height&&r++}r===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function g_(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function xM(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function Md(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return xM(n,a,e)}function SM(e){return e.documentElement.clientHeight}function MM(e){this.addEventListener("load",e),this.addEventListener("error",e)}function EM(e,n,a,r,c,h,S,C,X){var it=n.nodeType===9?n:n.ownerDocument;try{var ct=it.startViewTransition({update:function(){var tt=it.defaultView,lt=tt.navigation&&tt.navigation.transition,Xt=it.fonts.status;r();var ne=[];if(Xt==="loaded"&&(SM(it),it.fonts.status==="loading"&&ne.push(it.fonts.ready)),Xt=ne.length,e!==null)for(var Se=e.suspenseyImages,nt=0,K=0;K<Se.length;K++){var ot=Se[K];if(!ot.complete){var Et=ot.getBoundingClientRect();if(0<Et.bottom&&0<Et.right&&Et.top<tt.innerHeight&&Et.left<tt.innerWidth){if(nt+=I_(ot),nt>rc){ne.length=Xt;break}ot=new Promise(MM.bind(ot)),ne.push(ot)}}}if(0<ne.length)return tt=Promise.race([Promise.all(ne),new Promise(function(Kt){return setTimeout(Kt,500)})]).then(c,c),(lt?Promise.allSettled([lt.finished,tt]):tt).then(h,h);if(c(),lt)return lt.finished.then(h,h);h()},types:a});it.__reactViewTransition=ct;var Tt=[];return ct.ready.then(function(){for(var tt=it.documentElement.getAnimations({subtree:!0}),lt=0;lt<tt.length;lt++){var Xt=tt[lt],ne=Xt.effect,Se=ne.pseudoElement;if(Se!=null&&Se.startsWith("::view-transition")){Tt.push(Xt),Xt=ne.getKeyframes();for(var nt=Se=void 0,K=!0,ot=0;ot<Xt.length;ot++){var Et=Xt[ot],Kt=Et.width;if(Se===void 0)Se=Kt;else if(Se!==Kt){K=!1;break}if(Kt=Et.height,nt===void 0)nt=Kt;else if(nt!==Kt){K=!1;break}delete Et.width,delete Et.height,Et.transform==="none"&&delete Et.transform}K&&Se!==void 0&&nt!==void 0&&(ne.setKeyframes(Xt),K=getComputedStyle(ne.target,ne.pseudoElement),K.width!==Se||K.height!==nt)&&(K=Xt[0],K.width=Se,K.height=nt,K=Xt[Xt.length-1],K.width=Se,K.height=nt,ne.setKeyframes(Xt))}}S()},function(tt){it.__reactViewTransition===ct&&(it.__reactViewTransition=null);try{if(typeof tt=="object"&&tt!==null)switch(tt.name){case"InvalidStateError":(tt.message==="View transition was skipped because document visibility state is hidden."||tt.message==="Skipping view transition because document visibility state has become hidden."||tt.message==="Skipping view transition because viewport size changed."||tt.message==="Transition was aborted because of invalid state")&&(tt=null)}tt!==null&&X(tt)}finally{r(),c(),S()}}),ct.finished.finally(function(){for(var tt=0;tt<Tt.length;tt++)Tt[tt].cancel();it.__reactViewTransition===ct&&(it.__reactViewTransition=null),C()}),ct}catch{return r(),c(),S(),null}}function Xs(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Xs.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Xs.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),r=[],c=0;c<a.length;c++){var h=a[c].effect;h!==null&&h.target===e&&h.pseudoElement===n&&r.push(a[c])}return r},Xs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function v_(e){return{name:e,group:new Xs("group",e),imagePair:new Xs("image-pair",e),old:new Xs("old",e),new:new Xs("new",e)}}function pi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}pi.prototype.addEventListener=function(e,n,a){var r=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var h=this._eventListeners;if(y_(h,e,n,a)===-1){var S=this,C=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(C=function(X){S.removeEventListener(e,n,a),typeof n=="function"?n.call(this,X):n.handleEvent(X)}),r!==null&&(c=S.removeEventListener.bind(S,e,n,a),r.addEventListener("abort",c,{once:!0}),c=r.removeEventListener.bind(r,"abort",c)),r=Xr(a),h.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:C,cleanup:c}),g(this._fragmentFiber.child,!1,TM,e,C,r)}this._eventListeners=h}};function TM(e,n,a,r){return M(e).addEventListener(n,a,r),!1}pi.prototype.removeEventListener=function(e,n,a){var r=this._eventListeners;if(r!==null&&(n=y_(r,e,n,a),n!==-1)){var c=r[n];a=c.attachedListener;var h=c.cleanup;c=Xr(c.optionsOrUseCapture),g(this._fragmentFiber.child,!1,bM,e,a,c),r.splice(n,1),h!==null&&h()}};function bM(e,n,a,r){return M(e).removeEventListener(n,a,r),!1}function Xr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function __(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function y_(e,n,a,r){if(e.length===0)return-1;r=__(r);for(var c=0;c<e.length;c++){var h=e[c];if(h.type===n&&h.listener===a&&__(h.optionsOrUseCapture)===r)return c}return-1}pi.prototype.dispatchEvent=function(e){var n=y(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var h=a[c];r.addEventListener(h.type,h.attachedListener,Xr(h.optionsOrUseCapture))}if(n.appendChild(r),e=r.dispatchEvent(e),a)for(c=0;c<a.length;c++)h=a[c],r.removeEventListener(h.type,h.attachedListener,Xr(h.optionsOrUseCapture));return n.removeChild(r),e}return n.dispatchEvent(e)},pi.prototype.focus=function(e){g(this._fragmentFiber.child,!0,x_,e,void 0,void 0)};function x_(e,n){return e.tag===6?!1:(e=M(e),IM(e,n))}pi.prototype.focusLast=function(e){var n=[];g(this._fragmentFiber.child,!0,Ed,n,void 0,void 0);for(var a=n.length-1;0<=a&&!x_(n[a],e);a--);};function Ed(e,n){return n.push(e),!1}pi.prototype.blur=function(){var e=y(this._fragmentFiber);e!==null&&(e=M(e),e=cl(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,AM,e,void 0,void 0))};function AM(e,n){return e.tag===6?!1:(e=M(e),e===n||e.contains(n)?(n.blur(),!0):!1)}pi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,wM,e,void 0,void 0)};function wM(e,n){return e.tag===6||(e=M(e),n.observe(e)),!1}pi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),g(this._fragmentFiber.child,!1,CM,e,void 0,void 0);for(var a=n=0;a<Bi.length;a++){var r=Bi[a];r.fragmentInstance===this&&r.observer===e?e.unobserve(r.instance):Bi[n++]=r}Bi.length=n}};function CM(e,n){return e.tag===6||(e=M(e),n.unobserve(e)),!1}var Bi=[],Td=!1;function RM(e,n,a){Bi.push({fragmentInstance:e,observer:n,instance:a}),Td||(Td=!0,BM(function(){Td=!1;var r=Bi;Bi=[];for(var c=0;c<r.length;c++){var h=r[c];h.observer.unobserve(h.instance)}}))}pi.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,DM,e,void 0,void 0),e};function DM(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=M(e),n.push.apply(n,e.getClientRects());return!1}pi.prototype.getRootNode=function(e){var n=y(this._fragmentFiber);return n===null?this:M(n).getRootNode(e)},pi.prototype.compareDocumentPosition=function(e){var n=y(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,Ed,a,void 0,void 0);var r=M(n);if(a.length===0){if(a=r,x(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=r=a.compareDocumentPosition(e);return a===e?c=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(e=M(a).compareDocumentPosition(e),c=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),c=M(a[a.length-1]);var h=x(this._fragmentFiber)?n.parentElement:r;if(h==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=h.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,h=h.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var S=n.compareDocumentPosition(e),C=c.compareDocumentPosition(e),X=S&Node.DOCUMENT_POSITION_CONTAINED_BY||C&Node.DOCUMENT_POSITION_CONTAINED_BY;return C=r&&h&&S&Node.DOCUMENT_POSITION_FOLLOWING&&C&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===e||h&&c===e||X||C?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===e||!h&&c===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:S,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||NM(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function NM(e,n,a,r,c){var h=Be(c);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!h)t:{for(;h!==null;){if(h.tag===7&&(h===n||h.alternate===n)){a=!0;break t}h=h.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(h===null)return h=c.ownerDocument,c===h||c===h.documentElement||c===h.body;t:{for(h=n,n=y(n);h!==null;){if(!(h.tag!==5&&h.tag!==3&&h.tag!==27||h!==n&&h.alternate!==n)){h=!0;break t}h=h.return}h=!1}return h}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!h)&&!(n=h===a)&&(n=z(a,h,L),n===null?n=!1:(g(n,!0,R,h,a),h=_,_=null,n=h!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!h)&&!(n=h===r)&&(n=z(r,h,L),n===null?n=!1:(g(n,!0,T,h,r),h=_,D=_=null,n=h!==null)),n):!1}function S_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}pi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];g(this._fragmentFiber.child,!1,Ed,n,void 0,void 0);var a=e!==!1;if(n.length===0){var r=E(this._fragmentFiber);if(r=a?r[1]||r[0]||y(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){e=M(r),S_(e,a);return}if(r=M(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(e);return}r.scrollIntoView(e)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var c=n[r];c.tag===6?(c=M(c),S_(c,a)):M(c).scrollIntoView(e),r+=a?-1:1}};function UM(e,n){return e=M(e),M_(e,n),!1}function M_(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function E_(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];e.addEventListener(c.type,c.attachedListener,Xr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(h){for(var S=0,C=0;C<Bi.length;C++){var X=Bi[C];(X.fragmentInstance!==n||X.observer!==h||X.instance!==e)&&(Bi[S++]=X)}Bi.length=S,h.observe(e)}),M_(e,n))}function LM(e,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var c=a[r];e.removeEventListener(c.type,c.attachedListener,Xr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(h){typeof h.rootMargin=="string"?RM(n,h,e):h.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function bd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":bd(a),fe(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function OM(e,n,a,r){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(r){if(!e[Ie])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Ri(e.nextSibling),e===null)break}return null}function PM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ri(e.nextSibling),e===null))return null;return e}function T_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ri(e.nextSibling),e===null))return null;return e}function Ad(e){return e.data==="$?"||e.data==="$~"}function wd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function zM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}function Ri(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Cd=null;function b_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ri(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function A_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function IM(e,n){function a(){r=!0}if(e.ownerDocument.activeElement===e)return!0;var r=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return r}function BM(e){h_(function(){h_(function(n){return e(n)})})}function w_(e,n,a){switch(n=cl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function C_(e,n,a){for(var r in a){var c=a[r];a.hasOwnProperty(r)&&c!=null&&qe(e,n,r,null,dM,c)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ji&&(e.onclick=null),fe(e)}function Rd(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);fe(e)}var Di=new Map,R_=new Set;function fl(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Ta=Lt.d;Lt.d={f:FM,r:HM,D:GM,C:VM,L:kM,m:XM,X:YM,S:qM,M:jM};function FM(){var e=Ta.f(),n=Ku();return e||n}function HM(e){var n=Ee(e);n!==null&&n.tag===5&&n.type==="form"?Ng(n):Ta.r(e)}var qr=typeof document>"u"?null:document;function D_(e,n,a){var r=qr;if(r&&typeof n=="string"&&n){var c=Mi(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),R_.has(c)||(R_.add(c),e={rel:e,crossOrigin:a,href:n},r.querySelector(c)===null&&(n=r.createElement("link"),zn(n,"link",e),Pe(n),r.head.appendChild(n)))}}function GM(e){Ta.D(e),D_("dns-prefetch",e,null)}function VM(e,n){Ta.C(e,n),D_("preconnect",e,n)}function kM(e,n,a){Ta.L(e,n,a);var r=qr;if(r&&e&&n){var c='link[rel="preload"][as="'+Mi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Mi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Mi(a.imageSizes)+'"]')):c+='[href="'+Mi(e)+'"]';var h=c;switch(n){case"style":h=Yr(e);break;case"script":h=jr(e)}if(!(Di.has(h)||(e=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Di.set(h,e),r.querySelector(c)!==null||n==="style"&&r.querySelector(hl(h))||n==="script"&&r.querySelector(dl(h))))){var S=r.createElement("link");zn(S,"link",e),n==="style"&&(S[Oe]=!0,S.onload=S.onerror=function(){Ba(S)}),Pe(S),r.head.appendChild(S)}}}function XM(e,n){Ta.m(e,n);var a=qr;if(a&&e){var r=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Mi(r)+'"][href="'+Mi(e)+'"]',h=c;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=jr(e)}if(!Di.has(h)&&(e=P({rel:"modulepreload",href:e},n),Di.set(h,e),a.querySelector(c)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(dl(h)))return}r=a.createElement("link"),zn(r,"link",e),Pe(r),a.head.appendChild(r)}}}function qM(e,n,a){Ta.S(e,n,a);var r=qr;if(r&&e){var c=ri(r).hoistableStyles,h=Yr(e);n=n||"default";var S=c.get(h);if(!S){var C={loading:0,preload:null};if(S=r.querySelector(hl(h)))C.loading=5;else{e=P({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Di.get(h))&&Dd(e,a);var X=S=r.createElement("link");Pe(X),zn(X,"link",e),X._p=new Promise(function(it,ct){X.onload=it,X.onerror=ct}),X.addEventListener("load",function(){C.loading|=1}),X.addEventListener("error",function(){C.loading|=2}),C.loading|=4,ac(S,n,r)}S={type:"stylesheet",instance:S,count:1,state:C},c.set(h,S)}}}function YM(e,n){Ta.X(e,n);var a=qr;if(a&&e){var r=ri(a).hoistableScripts,c=jr(e),h=r.get(c);h||(h=a.querySelector(dl(c)),h||(e=P({src:e,async:!0},n),(n=Di.get(c))&&Nd(e,n),h=a.createElement("script"),Pe(h),zn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},r.set(c,h))}}function jM(e,n){Ta.M(e,n);var a=qr;if(a&&e){var r=ri(a).hoistableScripts,c=jr(e),h=r.get(c);h||(h=a.querySelector(dl(c)),h||(e=P({src:e,async:!0,type:"module"},n),(n=Di.get(c))&&Nd(e,n),h=a.createElement("script"),Pe(h),zn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},r.set(c,h))}}function N_(e,n,a,r){var c=(c=re.current)?fl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Yr(a.href),n=ri(c).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Yr(a.href);var h=ri(c).hoistableStyles,S=h.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,S),(h=c.querySelector(hl(e)))?h._p||(S.instance=h,S.state.loading=5):(h=Di.get(e),h||(h={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Di.set(e,h)),WM(c,e,h,S.state))),n&&r===null)throw Error(s(528,""));return S}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=jr(a),n=ri(c).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Yr(e){return'href="'+Mi(e)+'"'}function hl(e){return'link[rel="stylesheet"]['+e+"]"}function U_(e){return P({},e,{"data-precedence":e.precedence,precedence:null})}function WM(e,n,a,r){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Oe]!==!0){r.loading=1;return}}else n=e.createElement("link"),n[Oe]=!0,n.onload=n.onerror=Ba.bind(null,n),zn(n,"link",a),Pe(n),e.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function jr(e){return'[src="'+Mi(e)+'"]'}function dl(e){return"script[async]"+e}function L_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=e.querySelector('style[data-href~="'+Mi(a.href)+'"]');if(r)return n.instance=r,Pe(r),r;var c=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement("style"),Pe(r),zn(r,"style",c),ac(r,a.precedence,e),n.instance=r;case"stylesheet":c=Yr(a.href);var h=e.querySelector(hl(c));if(h)return n.state.loading|=4,n.instance=h,Pe(h),h;r=U_(a),(c=Di.get(c))&&Dd(r,c),h=(e.ownerDocument||e).createElement("link"),Pe(h);var S=h;return S._p=new Promise(function(C,X){S.onload=C,S.onerror=X}),zn(h,"link",r),n.state.loading|=4,ac(h,a.precedence,e),n.instance=h;case"script":return h=jr(a.src),(c=e.querySelector(dl(h)))?(n.instance=c,Pe(c),c):(r=a,(c=Di.get(h))&&(r=P({},a),Nd(r,c)),e=e.ownerDocument||e,c=e.createElement("script"),Pe(c),zn(c,"link",r),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,ac(r,a.precedence,e));return n.instance}function ac(e,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=r.length?r[r.length-1]:null,h=c,S=0;S<r.length;S++){var C=r[S];if(C.dataset.precedence===n)h=C;else if(h!==c)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Dd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Nd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var sc=null;function O_(e,n,a){if(sc===null){var r=new Map,c=sc=new Map;c.set(a,r)}else c=sc,r=c.get(a),r||(r=new Map,c.set(a,r));if(r.has(e))return r;for(r.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var h=a[c];if(!(h[Ie]||h[Vt]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=e+S;var C=r.get(S);C?C.push(h):r.set(S,[h])}}return r}function Ud(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function ZM(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function P_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function z_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function I_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function B_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=I_(n),e.suspenseyImages.push(n)),e=JM.bind(e),n.decode().then(e,e))}function QM(e,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=Yr(r.href),h=n.querySelector(hl(c));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=pl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,Pe(h);return}h=n.ownerDocument||n,r=U_(r),(c=Di.get(c))&&Dd(r,c),h=h.createElement("link"),Pe(h);var S=h;S._p=new Promise(function(C,X){S.onload=C,S.onerror=X}),zn(h,"link",r),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=pl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var rc=0;function KM(e,n){return e.stylesheets&&e.count===0&&lc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var r=setTimeout(function(){if(e.stylesheets&&lc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&rc===0&&(rc=62500*mM());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>rc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(c)}}:null}function F_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)lc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function pl(){this.count--,F_(this)}function JM(){this.imgCount--,F_(this)}var oc=null;function lc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,oc=new Map,n.forEach($M,e),oc=null,pl.call(e))}function $M(e,n){if(!(n.state.loading&4)){var a=oc.get(e);if(a)var r=a.get(null);else{a=new Map,oc.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var S=c[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),r=S)}r&&a.set(null,r)}c=n.instance,S=c.getAttribute("data-precedence"),h=a.get(S)||r,h===r&&a.set(null,c),a.set(S,c),this.count++,r=pl.bind(this),c.addEventListener("load",r),c.addEventListener("error",r),h?h.parentNode.insertBefore(c,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Wr={$$typeof:q,Provider:null,Consumer:null,_currentValue:H,_currentValue2:H,_threadCount:0};function tE(e,n,a,r,c,h,S,C,X){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ro(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ro(0),this.hiddenUpdates=Ro(null),this.identifierPrefix=r,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=X,this.transitionTypes=null,this.incompleteTransitions=new Map}function H_(e,n,a,r,c,h,S,C,X,it,ct,Tt){return e=new tE(e,n,a,S,X,it,ct,Tt,C),n=1,h===!0&&(n|=24),h=ti(3,null,null,n),e.current=h,h.stateNode=e,n=jf(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:r,isDehydrated:a,cache:n},Kf(h),e}function G_(e){return e?(e=xr,e):xr}function V_(e,n,a,r,c,h){c=G_(c),r.context===null?r.context=c:r.pendingContext=c,r=ja(n),r.payload={element:a},h=h===void 0?null:h,h!==null&&(r.callback=h),a=Wa(e,r,n),a!==null&&(ai(a,e,n),qo(a,e,n))}function k_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Ld(e,n){k_(e,n),(e=e.alternate)&&k_(e,n)}function X_(e){if(e.tag===13||e.tag===31){var n=ws(e,67108864);n!==null&&ai(n,e,67108864),Ld(e,67108864)}}function q_(e){if(e.tag===13||e.tag===31){var n=di();n=mt(n);var a=ws(e,n);a!==null&&ai(a,e,n),Ld(e,n)}}var Zr=!0;function eE(e,n,a,r){var c=Mt.T;Mt.T=null;var h=Lt.p;try{Lt.p=2,Od(e,n,a,r)}finally{Lt.p=h,Mt.T=c}}function nE(e,n,a,r){var c=Mt.T;Mt.T=null;var h=Lt.p;try{Lt.p=8,Od(e,n,a,r)}finally{Lt.p=h,Mt.T=c}}function Od(e,n,a,r){if(Zr){var c=Pd(r);if(c===null)md(e,n,r,uc,a),j_(e,r);else if(aE(c,e,n,a,r))r.stopPropagation();else if(j_(e,r),n&4&&-1<iE.indexOf(e)){for(;c!==null;){var h=Ee(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Si(h.pendingLanes);if(S!==0){var C=h;for(C.pendingLanes|=2,C.entangledLanes|=2;S;){var X=1<<31-Bn(S);C.entanglements[1]|=X,S&=~X}ia(h),(Fe&6)===0&&(Wu=W()+500,ol(0))}}break;case 31:case 13:C=ws(h,2),C!==null&&ai(C,h,2),Ku(),Ld(h,2)}if(h=Pd(r),h===null&&md(e,n,r,uc,a),h===c)break;c=h}c!==null&&r.stopPropagation()}else md(e,n,r,null,a)}}function Pd(e){return e=xf(e),zd(e)}var uc=null;function zd(e){if(uc=null,e=Be(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return uc=e,null}function Y_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Bt()){case kt:return 2;case $t:return 8;case zt:case Dt:return 32;case ae:return 268435456;default:return 32}default:return 32}}var Id=!1,rs=null,os=null,ls=null,ml=new Map,gl=new Map,us=[],iE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function j_(e,n){switch(e){case"focusin":case"focusout":rs=null;break;case"dragenter":case"dragleave":os=null;break;case"mouseover":case"mouseout":ls=null;break;case"pointerover":case"pointerout":ml.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":gl.delete(n.pointerId)}}function vl(e,n,a,r,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:h,targetContainers:[c]},n!==null&&(n=Ee(n),n!==null&&X_(n)),e):(e.eventSystemFlags|=r,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function aE(e,n,a,r,c){switch(n){case"focusin":return rs=vl(rs,e,n,a,r,c),!0;case"dragenter":return os=vl(os,e,n,a,r,c),!0;case"mouseover":return ls=vl(ls,e,n,a,r,c),!0;case"pointerover":var h=c.pointerId;return ml.set(h,vl(ml.get(h)||null,e,n,a,r,c)),!0;case"gotpointercapture":return h=c.pointerId,gl.set(h,vl(gl.get(h)||null,e,n,a,r,c)),!0}return!1}function W_(e){var n=Be(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,jt(e.priority,function(){q_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,jt(e.priority,function(){q_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function cc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Pd(e.nativeEvent);if(a===null){a=e.nativeEvent;var r=new a.constructor(a.type,a);yf=r,a.target.dispatchEvent(r),yf=null}else return n=Ee(a),n!==null&&X_(n),e.blockedOn=a,!1;n.shift()}return!0}function Z_(e,n,a){cc(e)&&a.delete(n)}function sE(){Id=!1,rs!==null&&cc(rs)&&(rs=null),os!==null&&cc(os)&&(os=null),ls!==null&&cc(ls)&&(ls=null),ml.forEach(Z_),gl.forEach(Z_)}function fc(e,n){e.blockedOn===n&&(e.blockedOn=null,Id||(Id=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,sE)))}var hc=null;function Q_(e){hc!==e&&(hc=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){hc===e&&(hc=null);for(var n=0;n<e.length;n+=3){var a=e[n],r=e[n+1],c=e[n+2];if(typeof r!="function"){if(zd(r||a)===null)continue;break}var h=Ee(a);h!==null&&(e.splice(n,3),n-=3,_h(h,{pending:!0,data:c,method:a.method,action:r},r,c))}}))}function Qr(e){function n(X){return fc(X,e)}rs!==null&&fc(rs,e),os!==null&&fc(os,e),ls!==null&&fc(ls,e),ml.forEach(n),gl.forEach(n);for(var a=0;a<us.length;a++){var r=us[a];r.blockedOn===e&&(r.blockedOn=null)}for(;0<us.length&&(a=us[0],a.blockedOn===null);)W_(a),a.blockedOn===null&&us.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var c=a[r],h=a[r+1],S=c[ee]||null;if(typeof h=="function")S||Q_(a);else if(S){var C=null;if(h&&h.hasAttribute("formAction")){if(c=h,S=h[ee]||null)C=S.formAction;else if(zd(c)!==null)continue}else C=S.action;typeof C=="function"?a[r+1]=C:(a.splice(r,3),r-=3),Q_(a)}}}function K_(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return c=S})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Bd(e){this._internalRoot=e}dc.prototype.render=Bd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=di();V_(a,r,e,n,null,null)},dc.prototype.unmount=Bd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;V_(e.current,2,null,e,null,null),Ku(),n[pe]=null}};function dc(e){this._internalRoot=e}dc.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ft();e={blockedOn:null,target:e,priority:n};for(var a=0;a<us.length&&n!==0&&n<us[a].priority;a++);us.splice(a,0,e),a===0&&W_(e)}};var J_=t.version;if(J_!=="19.3.1")throw Error(s(527,J_,"19.3.1"));Lt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var rE={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Mt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{Re=pc.inject(rE),sn=pc}catch{}}return yl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,r="",c=Gg,h=Vg,S=kg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=H_(e,1,!1,null,null,a,r,null,c,h,S,K_),e[pe]=n.current,pd(e),new Bd(n)},yl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var r=!1,c="",h=Gg,S=Vg,C=kg,X=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.formState!==void 0&&(X=a.formState)),n=H_(e,1,!0,n,a??null,r,c,X,h,S,C,K_),n.context=G_(null),a=n.current,r=di(),r=mt(r),c=ja(r),c.callback=null,Wa(a,c,r),a=r,n.current.lanes=a,Ts(n,a),ia(n),e[pe]=n.current,pd(e),new dc(n)},yl.version="19.3.1",yl}var ly;function _E(){if(ly)return Gd.exports;ly=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Gd.exports=vE(),Gd.exports}var yE=_E();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Cx=(...o)=>o.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var SE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ME=ge.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:f,...d},p)=>ge.createElement("svg",{ref:p,...SE,width:t,height:t,stroke:o,strokeWidth:s?Number(i)*24/Number(t):i,className:Cx("lucide",l),...d},[...f.map(([m,v])=>ge.createElement(m,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=(o,t)=>{const i=ge.forwardRef(({className:s,...l},u)=>ge.createElement(ME,{ref:u,iconNode:t,className:Cx(`lucide-${xE(o)}`,s),...l}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EE=$n("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=$n("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=$n("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=$n("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=$n("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TE=$n("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bE=$n("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AE=$n("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=$n("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=$n("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=$n("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rx=$n("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=$n("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=$n("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=$n("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tm="180",DE=0,fy=1,NE=2,Dx=1,UE=2,Da=3,ys=0,Xn=1,_i=2,La=0,go=1,ir=2,hy=3,dy=4,LE=5,$s=100,OE=101,PE=102,zE=103,IE=104,BE=200,FE=201,HE=202,GE=203,Rp=204,Dp=205,VE=206,kE=207,XE=208,qE=209,YE=210,jE=211,WE=212,ZE=213,QE=214,Np=0,Up=1,Lp=2,_o=3,Op=4,Pp=5,zp=6,Ip=7,Nx=0,KE=1,JE=2,Oa=0,Ux=1,Lx=2,Ox=3,bm=4,Px=5,zx=6,Ix=7,Bx=300,yo=301,xo=302,Bp=303,Fp=304,ff=306,Hp=1e3,er=1001,Gp=1002,yi=1003,$E=1004,mc=1005,sa=1006,Wd=1007,nr=1008,qi=1009,Fx=1010,Hx=1011,Ol=1012,Am=1013,ar=1014,ra=1015,Xi=1016,wm=1017,Cm=1018,Pl=1020,Gx=35902,Vx=35899,kx=1021,Xx=1022,ki=1023,zl=1026,Il=1027,Rm=1028,Dm=1029,qx=1030,Nm=1031,Um=1033,Wc=33776,Zc=33777,Qc=33778,Kc=33779,Vp=35840,kp=35841,Xp=35842,qp=35843,Yp=36196,jp=37492,Wp=37496,Zp=37808,Qp=37809,Kp=37810,Jp=37811,$p=37812,tm=37813,em=37814,nm=37815,im=37816,am=37817,sm=37818,rm=37819,om=37820,lm=37821,um=36492,cm=36494,fm=36495,hm=36283,dm=36284,pm=36285,mm=36286,tT=3200,eT=3201,Yx=0,nT=1,vs="",si="srgb",So="srgb-linear",ef="linear",Ye="srgb",Kr=7680,py=519,iT=512,aT=513,sT=514,jx=515,rT=516,oT=517,lT=518,uT=519,my=35044,gy="300 es",oa=2e3,nf=2001;class bo{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,t);t.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let vy=1234567;const Dl=Math.PI/180,Bl=180/Math.PI;function rr(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Gn[o&255]+Gn[o>>8&255]+Gn[o>>16&255]+Gn[o>>24&255]+"-"+Gn[t&255]+Gn[t>>8&255]+"-"+Gn[t>>16&15|64]+Gn[t>>24&255]+"-"+Gn[i&63|128]+Gn[i>>8&255]+"-"+Gn[i>>16&255]+Gn[i>>24&255]+Gn[s&255]+Gn[s>>8&255]+Gn[s>>16&255]+Gn[s>>24&255]).toLowerCase()}function Ae(o,t,i){return Math.max(t,Math.min(i,o))}function Lm(o,t){return(o%t+t)%t}function cT(o,t,i,s,l){return s+(o-t)*(l-s)/(i-t)}function fT(o,t,i){return o!==t?(i-o)/(t-o):0}function Nl(o,t,i){return(1-i)*o+i*t}function hT(o,t,i,s){return Nl(o,t,1-Math.exp(-i*s))}function dT(o,t=1){return t-Math.abs(Lm(o,t*2)-t)}function pT(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*(3-2*o))}function mT(o,t,i){return o<=t?0:o>=i?1:(o=(o-t)/(i-t),o*o*o*(o*(o*6-15)+10))}function gT(o,t){return o+Math.floor(Math.random()*(t-o+1))}function vT(o,t){return o+Math.random()*(t-o)}function _T(o){return o*(.5-Math.random())}function yT(o){o!==void 0&&(vy=o);let t=vy+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function xT(o){return o*Dl}function ST(o){return o*Bl}function MT(o){return(o&o-1)===0&&o!==0}function ET(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function TT(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function bT(o,t,i,s,l){const u=Math.cos,f=Math.sin,d=u(i/2),p=f(i/2),m=u((t+s)/2),v=f((t+s)/2),g=u((t-s)/2),y=f((t-s)/2),x=u((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":o.set(d*v,p*g,p*y,d*m);break;case"YZY":o.set(p*y,d*v,p*g,d*m);break;case"ZXZ":o.set(p*g,p*y,d*v,d*m);break;case"XZX":o.set(d*v,p*E,p*x,d*m);break;case"YXY":o.set(p*x,d*v,p*E,d*m);break;case"ZYZ":o.set(p*E,p*x,d*v,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function ho(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Kn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const bn={DEG2RAD:Dl,RAD2DEG:Bl,generateUUID:rr,clamp:Ae,euclideanModulo:Lm,mapLinear:cT,inverseLerp:fT,lerp:Nl,damp:hT,pingpong:dT,smoothstep:pT,smootherstep:mT,randInt:gT,randFloat:vT,randFloatSpread:_T,seededRandom:yT,degToRad:xT,radToDeg:ST,isPowerOfTwo:MT,ceilPowerOfTwo:ET,floorPowerOfTwo:TT,setQuaternionFromProperEuler:bT,normalize:Kn,denormalize:ho};class Ht{constructor(t=0,i=0){Ht.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ae(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,f=this.y-t.y;return this.x=u*s-f*l+t.x,this.y=u*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kn{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,f,d){let p=s[l+0],m=s[l+1],v=s[l+2],g=s[l+3];const y=u[f+0],x=u[f+1],E=u[f+2],b=u[f+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=v,t[i+3]=g;return}if(d===1){t[i+0]=y,t[i+1]=x,t[i+2]=E,t[i+3]=b;return}if(g!==b||p!==y||m!==x||v!==E){let M=1-d;const _=p*y+m*x+v*E+g*b,D=_>=0?1:-1,R=1-_*_;if(R>Number.EPSILON){const L=Math.sqrt(R),z=Math.atan2(L,_*D);M=Math.sin(M*z)/L,d=Math.sin(d*z)/L}const T=d*D;if(p=p*M+y*T,m=m*M+x*T,v=v*M+E*T,g=g*M+b*T,M===1-d){const L=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=L,m*=L,v*=L,g*=L}}t[i]=p,t[i+1]=m,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,u,f){const d=s[l],p=s[l+1],m=s[l+2],v=s[l+3],g=u[f],y=u[f+1],x=u[f+2],E=u[f+3];return t[i]=d*E+v*g+p*x-m*y,t[i+1]=p*E+v*y+m*g-d*x,t[i+2]=m*E+v*x+d*y-p*g,t[i+3]=v*E-d*g-p*y-m*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,f=t._order,d=Math.cos,p=Math.sin,m=d(s/2),v=d(l/2),g=d(u/2),y=p(s/2),x=p(l/2),E=p(u/2);switch(f){case"XYZ":this._x=y*v*g+m*x*E,this._y=m*x*g-y*v*E,this._z=m*v*E+y*x*g,this._w=m*v*g-y*x*E;break;case"YXZ":this._x=y*v*g+m*x*E,this._y=m*x*g-y*v*E,this._z=m*v*E-y*x*g,this._w=m*v*g+y*x*E;break;case"ZXY":this._x=y*v*g-m*x*E,this._y=m*x*g+y*v*E,this._z=m*v*E+y*x*g,this._w=m*v*g-y*x*E;break;case"ZYX":this._x=y*v*g-m*x*E,this._y=m*x*g+y*v*E,this._z=m*v*E-y*x*g,this._w=m*v*g+y*x*E;break;case"YZX":this._x=y*v*g+m*x*E,this._y=m*x*g+y*v*E,this._z=m*v*E-y*x*g,this._w=m*v*g-y*x*E;break;case"XZY":this._x=y*v*g-m*x*E,this._y=m*x*g-y*v*E,this._z=m*v*E+y*x*g,this._w=m*v*g+y*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],f=i[1],d=i[5],p=i[9],m=i[2],v=i[6],g=i[10],y=s+d+g;if(y>0){const x=.5/Math.sqrt(y+1);this._w=.25/x,this._x=(v-p)*x,this._y=(u-m)*x,this._z=(f-l)*x}else if(s>d&&s>g){const x=2*Math.sqrt(1+s-d-g);this._w=(v-p)/x,this._x=.25*x,this._y=(l+f)/x,this._z=(u+m)/x}else if(d>g){const x=2*Math.sqrt(1+d-s-g);this._w=(u-m)/x,this._x=(l+f)/x,this._y=.25*x,this._z=(p+v)/x}else{const x=2*Math.sqrt(1+g-s-d);this._w=(f-l)/x,this._x=(u+m)/x,this._y=(p+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,f=t._w,d=i._x,p=i._y,m=i._z,v=i._w;return this._x=s*v+f*d+l*m-u*p,this._y=l*v+f*p+u*d-s*m,this._z=u*v+f*m+s*p-l*d,this._w=f*v-s*d-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,f=this._w;let d=f*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=s,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const x=1-i;return this._w=x*f+i*this._w,this._x=x*s+i*this._x,this._y=x*l+i*this._y,this._z=x*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),g=Math.sin((1-i)*v)/m,y=Math.sin(i*v)/m;return this._w=f*g+this._w*y,this._x=s*g+this._x*y,this._y=l*g+this._y*y,this._z=u*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(t=0,i=0,s=0){V.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(_y.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(_y.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,f=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,f=t.y,d=t.z,p=t.w,m=2*(f*l-d*s),v=2*(d*i-u*l),g=2*(u*s-f*i);return this.x=i+p*m+f*g-d*v,this.y=s+p*v+d*m-u*g,this.z=l+p*g+u*v-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*f-s*p,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Zd.copy(this).projectOnVector(t),this.sub(Zd)}reflect(t){return this.sub(Zd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ae(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zd=new V,_y=new kn;class ye{constructor(t,i,s,l,u,f,d,p,m){ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,f,d,p,m)}set(t,i,s,l,u,f,d,p,m){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=p,v[6]=s,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,f=s[0],d=s[3],p=s[6],m=s[1],v=s[4],g=s[7],y=s[2],x=s[5],E=s[8],b=l[0],M=l[3],_=l[6],D=l[1],R=l[4],T=l[7],L=l[2],z=l[5],P=l[8];return u[0]=f*b+d*D+p*L,u[3]=f*M+d*R+p*z,u[6]=f*_+d*T+p*P,u[1]=m*b+v*D+g*L,u[4]=m*M+v*R+g*z,u[7]=m*_+v*T+g*P,u[2]=y*b+x*D+E*L,u[5]=y*M+x*R+E*z,u[8]=y*_+x*T+E*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],m=t[7],v=t[8];return i*f*v-i*d*m-s*u*v+s*d*p+l*u*m-l*f*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],m=t[7],v=t[8],g=v*f-d*m,y=d*p-v*u,x=m*u-f*p,E=i*g+s*y+l*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/E;return t[0]=g*b,t[1]=(l*m-v*s)*b,t[2]=(d*s-l*f)*b,t[3]=y*b,t[4]=(v*i-l*p)*b,t[5]=(l*u-d*i)*b,t[6]=x*b,t[7]=(s*p-m*i)*b,t[8]=(f*i-s*u)*b,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(s*p,s*m,-s*(p*f+m*d)+f+t,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(Qd.makeScale(t,i)),this}rotate(t){return this.premultiply(Qd.makeRotation(-t)),this}translate(t,i){return this.premultiply(Qd.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Qd=new ye;function Wx(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function af(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function AT(){const o=af("canvas");return o.style.display="block",o}const yy={};function Fl(o){o in yy||(yy[o]=!0,console.warn(o))}function wT(o,t,i){return new Promise(function(s,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const xy=new ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Sy=new ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function CT(){const o={enabled:!0,workingColorSpace:So,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Ye&&(l.r=Pa(l.r),l.g=Pa(l.g),l.b=Pa(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Ye&&(l.r=vo(l.r),l.g=vo(l.g),l.b=vo(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===vs?ef:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Fl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Fl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[So]:{primaries:t,whitePoint:s,transfer:ef,toXYZ:xy,fromXYZ:Sy,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:t,whitePoint:s,transfer:Ye,toXYZ:xy,fromXYZ:Sy,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:si}}}),o}const Le=CT();function Pa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function vo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Jr;class RT{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Jr===void 0&&(Jr=af("canvas")),Jr.width=t.width,Jr.height=t.height;const l=Jr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Jr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=af("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=Pa(u[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Pa(i[s]/255)*255):i[s]=Pa(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let DT=0;class Om{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:DT++}),this.uuid=rr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?u.push(Kd(l[f].image)):u.push(Kd(l[f]))}else u=Kd(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function Kd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?RT.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let NT=0;const Jd=new V;class qn extends bo{constructor(t=qn.DEFAULT_IMAGE,i=qn.DEFAULT_MAPPING,s=er,l=er,u=sa,f=nr,d=ki,p=qi,m=qn.DEFAULT_ANISOTROPY,v=vs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:NT++}),this.uuid=rr(),this.name="",this.source=new Om(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Ht(0,0),this.repeat=new Ht(1,1),this.center=new Ht(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Jd).x}get height(){return this.source.getSize(Jd).y}get depth(){return this.source.getSize(Jd).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Hp:t.x=t.x-Math.floor(t.x);break;case er:t.x=t.x<0?0:1;break;case Gp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Hp:t.y=t.y-Math.floor(t.y);break;case er:t.y=t.y<0?0:1;break;case Gp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}qn.DEFAULT_IMAGE=null;qn.DEFAULT_MAPPING=Bx;qn.DEFAULT_ANISOTROPY=1;class fn{constructor(t=0,i=0,s=0,l=1){fn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const p=t.elements,m=p[0],v=p[4],g=p[8],y=p[1],x=p[5],E=p[9],b=p[2],M=p[6],_=p[10];if(Math.abs(v-y)<.01&&Math.abs(g-b)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+y)<.1&&Math.abs(g+b)<.1&&Math.abs(E+M)<.1&&Math.abs(m+x+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const R=(m+1)/2,T=(x+1)/2,L=(_+1)/2,z=(v+y)/4,P=(g+b)/4,I=(E+M)/4;return R>T&&R>L?R<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(R),l=z/s,u=P/s):T>L?T<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(T),s=z/l,u=I/l):L<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(L),s=P/u,l=I/u),this.set(s,l,u,i),this}let D=Math.sqrt((M-E)*(M-E)+(g-b)*(g-b)+(y-v)*(y-v));return Math.abs(D)<.001&&(D=1),this.x=(M-E)/D,this.y=(g-b)/D,this.z=(y-v)/D,this.w=Math.acos((m+x+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this.w=Ae(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this.w=Ae(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class UT extends bo{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sa,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new fn(0,0,t,i),this.scissorTest=!1,this.viewport=new fn(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new qn(l);this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:sa,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Om(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends UT{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class Zx extends qn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class LT extends qn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class or{constructor(t=new V(1/0,1/0,1/0),i=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Fi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Fi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Fi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Fi):Fi.fromBufferAttribute(u,f),Fi.applyMatrix4(t.matrixWorld),this.expandByPoint(Fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),gc.copy(s.boundingBox)),gc.applyMatrix4(t.matrixWorld),this.union(gc)}const l=t.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fi),Fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(xl),vc.subVectors(this.max,xl),$r.subVectors(t.a,xl),to.subVectors(t.b,xl),eo.subVectors(t.c,xl),fs.subVectors(to,$r),hs.subVectors(eo,to),qs.subVectors($r,eo);let i=[0,-fs.z,fs.y,0,-hs.z,hs.y,0,-qs.z,qs.y,fs.z,0,-fs.x,hs.z,0,-hs.x,qs.z,0,-qs.x,-fs.y,fs.x,0,-hs.y,hs.x,0,-qs.y,qs.x,0];return!$d(i,$r,to,eo,vc)||(i=[1,0,0,0,1,0,0,0,1],!$d(i,$r,to,eo,vc))?!1:(_c.crossVectors(fs,hs),i=[_c.x,_c.y,_c.z],$d(i,$r,to,eo,vc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ba[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ba[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ba[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ba[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ba[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ba[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ba[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ba[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ba),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ba=[new V,new V,new V,new V,new V,new V,new V,new V],Fi=new V,gc=new or,$r=new V,to=new V,eo=new V,fs=new V,hs=new V,qs=new V,xl=new V,vc=new V,_c=new V,Ys=new V;function $d(o,t,i,s,l){for(let u=0,f=o.length-3;u<=f;u+=3){Ys.fromArray(o,u);const d=l.x*Math.abs(Ys.x)+l.y*Math.abs(Ys.y)+l.z*Math.abs(Ys.z),p=t.dot(Ys),m=i.dot(Ys),v=s.dot(Ys);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const OT=new or,Sl=new V,tp=new V;class lr{constructor(t=new V,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):OT.setFromPoints(t).getCenter(s);let l=0;for(let u=0,f=t.length;u<f;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Sl.subVectors(t,this.center);const i=Sl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Sl,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(tp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Sl.copy(t.center).add(tp)),this.expandByPoint(Sl.copy(t.center).sub(tp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Aa=new V,ep=new V,yc=new V,ds=new V,np=new V,xc=new V,ip=new V;class Pm{constructor(t=new V,i=new V(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Aa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Aa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Aa.copy(this.origin).addScaledVector(this.direction,i),Aa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){ep.copy(t).add(i).multiplyScalar(.5),yc.copy(i).sub(t).normalize(),ds.copy(this.origin).sub(ep);const u=t.distanceTo(i)*.5,f=-this.direction.dot(yc),d=ds.dot(this.direction),p=-ds.dot(yc),m=ds.lengthSq(),v=Math.abs(1-f*f);let g,y,x,E;if(v>0)if(g=f*p-d,y=f*d-p,E=u*v,g>=0)if(y>=-E)if(y<=E){const b=1/v;g*=b,y*=b,x=g*(g+f*y+2*d)+y*(f*g+y+2*p)+m}else y=u,g=Math.max(0,-(f*y+d)),x=-g*g+y*(y+2*p)+m;else y=-u,g=Math.max(0,-(f*y+d)),x=-g*g+y*(y+2*p)+m;else y<=-E?(g=Math.max(0,-(-f*u+d)),y=g>0?-u:Math.min(Math.max(-u,-p),u),x=-g*g+y*(y+2*p)+m):y<=E?(g=0,y=Math.min(Math.max(-u,-p),u),x=y*(y+2*p)+m):(g=Math.max(0,-(f*u+d)),y=g>0?u:Math.min(Math.max(-u,-p),u),x=-g*g+y*(y+2*p)+m);else y=f>0?-u:u,g=Math.max(0,-(f*y+d)),x=-g*g+y*(y+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(ep).addScaledVector(yc,y),x}intersectSphere(t,i){Aa.subVectors(t.center,this.origin);const s=Aa.dot(this.direction),l=Aa.dot(Aa)-s*s,u=t.radius*t.radius;if(l>u)return null;const f=Math.sqrt(u-l),d=s-f,p=s+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,f,d,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,y=this.origin;return m>=0?(s=(t.min.x-y.x)*m,l=(t.max.x-y.x)*m):(s=(t.max.x-y.x)*m,l=(t.min.x-y.x)*m),v>=0?(u=(t.min.y-y.y)*v,f=(t.max.y-y.y)*v):(u=(t.max.y-y.y)*v,f=(t.min.y-y.y)*v),s>f||u>l||((u>s||isNaN(s))&&(s=u),(f<l||isNaN(l))&&(l=f),g>=0?(d=(t.min.z-y.z)*g,p=(t.max.z-y.z)*g):(d=(t.max.z-y.z)*g,p=(t.min.z-y.z)*g),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Aa)!==null}intersectTriangle(t,i,s,l,u){np.subVectors(i,t),xc.subVectors(s,t),ip.crossVectors(np,xc);let f=this.direction.dot(ip),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ds.subVectors(this.origin,t);const p=d*this.direction.dot(xc.crossVectors(ds,xc));if(p<0)return null;const m=d*this.direction.dot(np.cross(ds));if(m<0||p+m>f)return null;const v=-d*ds.dot(ip);return v<0?null:this.at(v/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ve{constructor(t,i,s,l,u,f,d,p,m,v,g,y,x,E,b,M){Ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,f,d,p,m,v,g,y,x,E,b,M)}set(t,i,s,l,u,f,d,p,m,v,g,y,x,E,b,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=f,_[9]=d,_[13]=p,_[2]=m,_[6]=v,_[10]=g,_[14]=y,_[3]=x,_[7]=E,_[11]=b,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ve().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/no.setFromMatrixColumn(t,0).length(),u=1/no.setFromMatrixColumn(t,1).length(),f=1/no.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,f=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),v=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const y=f*v,x=f*g,E=d*v,b=d*g;i[0]=p*v,i[4]=-p*g,i[8]=m,i[1]=x+E*m,i[5]=y-b*m,i[9]=-d*p,i[2]=b-y*m,i[6]=E+x*m,i[10]=f*p}else if(t.order==="YXZ"){const y=p*v,x=p*g,E=m*v,b=m*g;i[0]=y+b*d,i[4]=E*d-x,i[8]=f*m,i[1]=f*g,i[5]=f*v,i[9]=-d,i[2]=x*d-E,i[6]=b+y*d,i[10]=f*p}else if(t.order==="ZXY"){const y=p*v,x=p*g,E=m*v,b=m*g;i[0]=y-b*d,i[4]=-f*g,i[8]=E+x*d,i[1]=x+E*d,i[5]=f*v,i[9]=b-y*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(t.order==="ZYX"){const y=f*v,x=f*g,E=d*v,b=d*g;i[0]=p*v,i[4]=E*m-x,i[8]=y*m+b,i[1]=p*g,i[5]=b*m+y,i[9]=x*m-E,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(t.order==="YZX"){const y=f*p,x=f*m,E=d*p,b=d*m;i[0]=p*v,i[4]=b-y*g,i[8]=E*g+x,i[1]=g,i[5]=f*v,i[9]=-d*v,i[2]=-m*v,i[6]=x*g+E,i[10]=y-b*g}else if(t.order==="XZY"){const y=f*p,x=f*m,E=d*p,b=d*m;i[0]=p*v,i[4]=-g,i[8]=m*v,i[1]=y*g+b,i[5]=f*v,i[9]=x*g-E,i[2]=E*g-x,i[6]=d*v,i[10]=b*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(PT,t,zT)}lookAt(t,i,s){const l=this.elements;return mi.subVectors(t,i),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),ps.crossVectors(s,mi),ps.lengthSq()===0&&(Math.abs(s.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),ps.crossVectors(s,mi)),ps.normalize(),Sc.crossVectors(mi,ps),l[0]=ps.x,l[4]=Sc.x,l[8]=mi.x,l[1]=ps.y,l[5]=Sc.y,l[9]=mi.y,l[2]=ps.z,l[6]=Sc.z,l[10]=mi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,f=s[0],d=s[4],p=s[8],m=s[12],v=s[1],g=s[5],y=s[9],x=s[13],E=s[2],b=s[6],M=s[10],_=s[14],D=s[3],R=s[7],T=s[11],L=s[15],z=l[0],P=l[4],I=l[8],N=l[12],A=l[1],F=l[5],Z=l[9],U=l[13],Y=l[2],q=l[6],k=l[10],$=l[14],Q=l[3],gt=l[7],St=l[11],At=l[15];return u[0]=f*z+d*A+p*Y+m*Q,u[4]=f*P+d*F+p*q+m*gt,u[8]=f*I+d*Z+p*k+m*St,u[12]=f*N+d*U+p*$+m*At,u[1]=v*z+g*A+y*Y+x*Q,u[5]=v*P+g*F+y*q+x*gt,u[9]=v*I+g*Z+y*k+x*St,u[13]=v*N+g*U+y*$+x*At,u[2]=E*z+b*A+M*Y+_*Q,u[6]=E*P+b*F+M*q+_*gt,u[10]=E*I+b*Z+M*k+_*St,u[14]=E*N+b*U+M*$+_*At,u[3]=D*z+R*A+T*Y+L*Q,u[7]=D*P+R*F+T*q+L*gt,u[11]=D*I+R*Z+T*k+L*St,u[15]=D*N+R*U+T*$+L*At,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],f=t[1],d=t[5],p=t[9],m=t[13],v=t[2],g=t[6],y=t[10],x=t[14],E=t[3],b=t[7],M=t[11],_=t[15];return E*(+u*p*g-l*m*g-u*d*y+s*m*y+l*d*x-s*p*x)+b*(+i*p*x-i*m*y+u*f*y-l*f*x+l*m*v-u*p*v)+M*(+i*m*g-i*d*x-u*f*g+s*f*x+u*d*v-s*m*v)+_*(-l*d*v-i*p*g+i*d*y+l*f*g-s*f*y+s*p*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],m=t[7],v=t[8],g=t[9],y=t[10],x=t[11],E=t[12],b=t[13],M=t[14],_=t[15],D=g*M*m-b*y*m+b*p*x-d*M*x-g*p*_+d*y*_,R=E*y*m-v*M*m-E*p*x+f*M*x+v*p*_-f*y*_,T=v*b*m-E*g*m+E*d*x-f*b*x-v*d*_+f*g*_,L=E*g*p-v*b*p-E*d*y+f*b*y+v*d*M-f*g*M,z=i*D+s*R+l*T+u*L;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/z;return t[0]=D*P,t[1]=(b*y*u-g*M*u-b*l*x+s*M*x+g*l*_-s*y*_)*P,t[2]=(d*M*u-b*p*u+b*l*m-s*M*m-d*l*_+s*p*_)*P,t[3]=(g*p*u-d*y*u-g*l*m+s*y*m+d*l*x-s*p*x)*P,t[4]=R*P,t[5]=(v*M*u-E*y*u+E*l*x-i*M*x-v*l*_+i*y*_)*P,t[6]=(E*p*u-f*M*u-E*l*m+i*M*m+f*l*_-i*p*_)*P,t[7]=(f*y*u-v*p*u+v*l*m-i*y*m-f*l*x+i*p*x)*P,t[8]=T*P,t[9]=(E*g*u-v*b*u-E*s*x+i*b*x+v*s*_-i*g*_)*P,t[10]=(f*b*u-E*d*u+E*s*m-i*b*m-f*s*_+i*d*_)*P,t[11]=(v*d*u-f*g*u-v*s*m+i*g*m+f*s*x-i*d*x)*P,t[12]=L*P,t[13]=(v*b*l-E*g*l+E*s*y-i*b*y-v*s*M+i*g*M)*P,t[14]=(E*d*l-f*b*l-E*s*p+i*b*p+f*s*M-i*d*M)*P,t[15]=(f*g*l-v*d*l+v*s*p-i*g*p-f*s*y+i*d*y)*P,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,f=t.x,d=t.y,p=t.z,m=u*f,v=u*d;return this.set(m*f+s,m*d-l*p,m*p+l*d,0,m*d+l*p,v*d+s,v*p-l*f,0,m*p-l*d,v*p+l*f,u*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,f){return this.set(1,s,u,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,f=i._y,d=i._z,p=i._w,m=u+u,v=f+f,g=d+d,y=u*m,x=u*v,E=u*g,b=f*v,M=f*g,_=d*g,D=p*m,R=p*v,T=p*g,L=s.x,z=s.y,P=s.z;return l[0]=(1-(b+_))*L,l[1]=(x+T)*L,l[2]=(E-R)*L,l[3]=0,l[4]=(x-T)*z,l[5]=(1-(y+_))*z,l[6]=(M+D)*z,l[7]=0,l[8]=(E+R)*P,l[9]=(M-D)*P,l[10]=(1-(y+b))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=no.set(l[0],l[1],l[2]).length();const f=no.set(l[4],l[5],l[6]).length(),d=no.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Hi.copy(this);const m=1/u,v=1/f,g=1/d;return Hi.elements[0]*=m,Hi.elements[1]*=m,Hi.elements[2]*=m,Hi.elements[4]*=v,Hi.elements[5]*=v,Hi.elements[6]*=v,Hi.elements[8]*=g,Hi.elements[9]*=g,Hi.elements[10]*=g,i.setFromRotationMatrix(Hi),s.x=u,s.y=f,s.z=d,this}makePerspective(t,i,s,l,u,f,d=oa,p=!1){const m=this.elements,v=2*u/(i-t),g=2*u/(s-l),y=(i+t)/(i-t),x=(s+l)/(s-l);let E,b;if(p)E=u/(f-u),b=f*u/(f-u);else if(d===oa)E=-(f+u)/(f-u),b=-2*f*u/(f-u);else if(d===nf)E=-f/(f-u),b=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,u,f,d=oa,p=!1){const m=this.elements,v=2/(i-t),g=2/(s-l),y=-(i+t)/(i-t),x=-(s+l)/(s-l);let E,b;if(p)E=1/(f-u),b=f/(f-u);else if(d===oa)E=-2/(f-u),b=-(f+u)/(f-u);else if(d===nf)E=-1/(f-u),b=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=y,m[1]=0,m[5]=g,m[9]=0,m[13]=x,m[2]=0,m[6]=0,m[10]=E,m[14]=b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const no=new V,Hi=new Ve,PT=new V(0,0,0),zT=new V(1,1,1),ps=new V,Sc=new V,mi=new V,My=new Ve,Ey=new kn;class xi{constructor(t=0,i=0,s=0,l=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],f=l[4],d=l[8],p=l[1],m=l[5],v=l[9],g=l[2],y=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Ae(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,x),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Ae(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return My.makeRotationFromQuaternion(t),this.setFromRotationMatrix(My,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Ey.setFromEuler(this),this.setFromQuaternion(Ey,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class Qx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let IT=0;const Ty=new V,io=new kn,wa=new Ve,Mc=new V,Ml=new V,BT=new V,FT=new kn,by=new V(1,0,0),Ay=new V(0,1,0),wy=new V(0,0,1),Cy={type:"added"},HT={type:"removed"},ao={type:"childadded",child:null},ap={type:"childremoved",child:null};class xn extends bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const t=new V,i=new xi,s=new kn,l=new V(1,1,1);function u(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ve},normalMatrix:{value:new ye}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return io.setFromAxisAngle(t,i),this.quaternion.multiply(io),this}rotateOnWorldAxis(t,i){return io.setFromAxisAngle(t,i),this.quaternion.premultiply(io),this}rotateX(t){return this.rotateOnAxis(by,t)}rotateY(t){return this.rotateOnAxis(Ay,t)}rotateZ(t){return this.rotateOnAxis(wy,t)}translateOnAxis(t,i){return Ty.copy(t).applyQuaternion(this.quaternion),this.position.add(Ty.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(by,t)}translateY(t){return this.translateOnAxis(Ay,t)}translateZ(t){return this.translateOnAxis(wy,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wa.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Mc.copy(t):Mc.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wa.lookAt(Ml,Mc,this.up):wa.lookAt(Mc,Ml,this.up),this.quaternion.setFromRotationMatrix(wa),l&&(wa.extractRotation(l.matrixWorld),io.setFromRotationMatrix(wa),this.quaternion.premultiply(io.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cy),ao.child=t,this.dispatchEvent(ao),ao.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(HT),ap.child=t,this.dispatchEvent(ap),ap.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wa.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wa.multiply(t.parent.matrixWorld)),t.applyMatrix4(wa),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cy),ao.child=t,this.dispatchEvent(ao),ao.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,t,BT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,FT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];u(t.shapes,g)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(t.materials,this.material[p]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(t.animations,p))}}if(i){const d=f(t.geometries),p=f(t.materials),m=f(t.textures),v=f(t.images),g=f(t.shapes),y=f(t.skeletons),x=f(t.animations),E=f(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),y.length>0&&(s.skeletons=y),x.length>0&&(s.animations=x),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}xn.DEFAULT_UP=new V(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gi=new V,Ca=new V,sp=new V,Ra=new V,so=new V,ro=new V,Ry=new V,rp=new V,op=new V,lp=new V,up=new fn,cp=new fn,fp=new fn;class Vi{constructor(t=new V,i=new V,s=new V){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Gi.subVectors(t,i),l.cross(Gi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Gi.subVectors(l,i),Ca.subVectors(s,i),sp.subVectors(t,i);const f=Gi.dot(Gi),d=Gi.dot(Ca),p=Gi.dot(sp),m=Ca.dot(Ca),v=Ca.dot(sp),g=f*m-d*d;if(g===0)return u.set(0,0,0),null;const y=1/g,x=(m*p-d*v)*y,E=(f*v-d*p)*y;return u.set(1-x-E,E,x)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ra)===null?!1:Ra.x>=0&&Ra.y>=0&&Ra.x+Ra.y<=1}static getInterpolation(t,i,s,l,u,f,d,p){return this.getBarycoord(t,i,s,l,Ra)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ra.x),p.addScaledVector(f,Ra.y),p.addScaledVector(d,Ra.z),p)}static getInterpolatedAttribute(t,i,s,l,u,f){return up.setScalar(0),cp.setScalar(0),fp.setScalar(0),up.fromBufferAttribute(t,i),cp.fromBufferAttribute(t,s),fp.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(up,u.x),f.addScaledVector(cp,u.y),f.addScaledVector(fp,u.z),f}static isFrontFacing(t,i,s,l){return Gi.subVectors(s,i),Ca.subVectors(t,i),Gi.cross(Ca).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gi.subVectors(this.c,this.b),Ca.subVectors(this.a,this.b),Gi.cross(Ca).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Vi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Vi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let f,d;so.subVectors(l,s),ro.subVectors(u,s),rp.subVectors(t,s);const p=so.dot(rp),m=ro.dot(rp);if(p<=0&&m<=0)return i.copy(s);op.subVectors(t,l);const v=so.dot(op),g=ro.dot(op);if(v>=0&&g<=v)return i.copy(l);const y=p*g-v*m;if(y<=0&&p>=0&&v<=0)return f=p/(p-v),i.copy(s).addScaledVector(so,f);lp.subVectors(t,u);const x=so.dot(lp),E=ro.dot(lp);if(E>=0&&x<=E)return i.copy(u);const b=x*m-p*E;if(b<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(s).addScaledVector(ro,d);const M=v*E-x*g;if(M<=0&&g-v>=0&&x-E>=0)return Ry.subVectors(u,l),d=(g-v)/(g-v+(x-E)),i.copy(l).addScaledVector(Ry,d);const _=1/(M+b+y);return f=b*_,d=y*_,i.copy(s).addScaledVector(so,f).addScaledVector(ro,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Kx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ms={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function hp(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class ue{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=Lm(t,1),i=Ae(i,0,1),s=Ae(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,f=2*s-u;this.r=hp(f,u,t+1/3),this.g=hp(f,u,t),this.b=hp(f,u,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=si){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=si){const s=Kx[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Pa(t.r),this.g=Pa(t.g),this.b=Pa(t.b),this}copyLinearToSRGB(t){return this.r=vo(t.r),this.g=vo(t.g),this.b=vo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return Le.workingToColorSpace(Vn.copy(this),t),Math.round(Ae(Vn.r*255,0,255))*65536+Math.round(Ae(Vn.g*255,0,255))*256+Math.round(Ae(Vn.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(Vn.copy(this),i);const s=Vn.r,l=Vn.g,u=Vn.b,f=Math.max(s,l,u),d=Math.min(s,l,u);let p,m;const v=(d+f)/2;if(d===f)p=0,m=0;else{const g=f-d;switch(m=v<=.5?g/(f+d):g/(2-f-d),f){case s:p=(l-u)/g+(l<u?6:0);break;case l:p=(u-s)/g+2;break;case u:p=(s-l)/g+4;break}p/=6}return t.h=p,t.s=m,t.l=v,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(Vn.copy(this),i),t.r=Vn.r,t.g=Vn.g,t.b=Vn.b,t}getStyle(t=si){Le.workingToColorSpace(Vn.copy(this),t);const i=Vn.r,s=Vn.g,l=Vn.b;return t!==si?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(ms),this.setHSL(ms.h+t,ms.s+i,ms.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(ms),t.getHSL(Ec);const s=Nl(ms.h,Ec.h,i),l=Nl(ms.s,Ec.s,i),u=Nl(ms.l,Ec.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new ue;ue.NAMES=Kx;let GT=0;class ur extends bo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GT++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=go,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rp,this.blendDst=Dp,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ue(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=py,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==go&&(s.blending=this.blending),this.side!==ys&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Rp&&(s.blendSrc=this.blendSrc),this.blendDst!==Dp&&(s.blendDst=this.blendDst),this.blendEquation!==$s&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==py&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(i){const u=l(t.textures),f=l(t.images);u.length>0&&(s.textures=u),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class _s extends ur{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Nx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const yn=new V,Tc=new Ht;let VT=0;class hn{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:VT++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=my,this.updateRanges=[],this.gpuType=ra,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Tc.fromBufferAttribute(this,i),Tc.applyMatrix3(t),this.setXY(i,Tc.x,Tc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix3(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyMatrix4(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.applyNormalMatrix(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)yn.fromBufferAttribute(this,i),yn.transformDirection(t),this.setXYZ(i,yn.x,yn.y,yn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=ho(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Kn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=ho(i,this.array)),i}setX(t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=ho(i,this.array)),i}setY(t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=ho(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=ho(i,this.array)),i}setW(t,i){return this.normalized&&(i=Kn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Kn(i,this.array),s=Kn(s,this.array),l=Kn(l,this.array),u=Kn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==my&&(t.usage=this.usage),t}}class Jx extends hn{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class $x extends hn{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ze extends hn{constructor(t,i,s){super(new Float32Array(t),i,s)}}let kT=0;const Ni=new Ve,dp=new xn,oo=new V,gi=new or,El=new or,Nn=new V;class Sn extends bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kT++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wx(t)?$x:Jx)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new ye().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ni.makeRotationFromQuaternion(t),this.applyMatrix4(Ni),this}rotateX(t){return Ni.makeRotationX(t),this.applyMatrix4(Ni),this}rotateY(t){return Ni.makeRotationY(t),this.applyMatrix4(Ni),this}rotateZ(t){return Ni.makeRotationZ(t),this.applyMatrix4(Ni),this}translate(t,i,s){return Ni.makeTranslation(t,i,s),this.applyMatrix4(Ni),this}scale(t,i,s){return Ni.makeScale(t,i,s),this.applyMatrix4(Ni),this}lookAt(t){return dp.lookAt(t),dp.updateMatrix(),this.applyMatrix4(dp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ze(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];gi.setFromBufferAttribute(u),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new V,1/0);return}if(t){const s=this.boundingSphere.center;if(gi.setFromBufferAttribute(t),i)for(let u=0,f=i.length;u<f;u++){const d=i[u];El.setFromBufferAttribute(d),this.morphTargetsRelative?(Nn.addVectors(gi.min,El.min),gi.expandByPoint(Nn),Nn.addVectors(gi.max,El.max),gi.expandByPoint(Nn)):(gi.expandByPoint(El.min),gi.expandByPoint(El.max))}gi.getCenter(s);let l=0;for(let u=0,f=t.count;u<f;u++)Nn.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(Nn));if(i)for(let u=0,f=i.length;u<f;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)Nn.fromBufferAttribute(d,m),p&&(oo.fromBufferAttribute(t,m),Nn.add(oo)),l=Math.max(l,s.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let I=0;I<s.count;I++)d[I]=new V,p[I]=new V;const m=new V,v=new V,g=new V,y=new Ht,x=new Ht,E=new Ht,b=new V,M=new V;function _(I,N,A){m.fromBufferAttribute(s,I),v.fromBufferAttribute(s,N),g.fromBufferAttribute(s,A),y.fromBufferAttribute(u,I),x.fromBufferAttribute(u,N),E.fromBufferAttribute(u,A),v.sub(m),g.sub(m),x.sub(y),E.sub(y);const F=1/(x.x*E.y-E.x*x.y);isFinite(F)&&(b.copy(v).multiplyScalar(E.y).addScaledVector(g,-x.y).multiplyScalar(F),M.copy(g).multiplyScalar(x.x).addScaledVector(v,-E.x).multiplyScalar(F),d[I].add(b),d[N].add(b),d[A].add(b),p[I].add(M),p[N].add(M),p[A].add(M))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let I=0,N=D.length;I<N;++I){const A=D[I],F=A.start,Z=A.count;for(let U=F,Y=F+Z;U<Y;U+=3)_(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const R=new V,T=new V,L=new V,z=new V;function P(I){L.fromBufferAttribute(l,I),z.copy(L);const N=d[I];R.copy(N),R.sub(L.multiplyScalar(L.dot(N))).normalize(),T.crossVectors(z,N);const F=T.dot(p[I])<0?-1:1;f.setXYZW(I,R.x,R.y,R.z,F)}for(let I=0,N=D.length;I<N;++I){const A=D[I],F=A.start,Z=A.count;for(let U=F,Y=F+Z;U<Y;U+=3)P(t.getX(U+0)),P(t.getX(U+1)),P(t.getX(U+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new hn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,x=s.count;y<x;y++)s.setXYZ(y,0,0,0);const l=new V,u=new V,f=new V,d=new V,p=new V,m=new V,v=new V,g=new V;if(t)for(let y=0,x=t.count;y<x;y+=3){const E=t.getX(y+0),b=t.getX(y+1),M=t.getX(y+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,M),v.subVectors(f,u),g.subVectors(l,u),v.cross(g),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,b),m.fromBufferAttribute(s,M),d.add(v),p.add(v),m.add(v),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(b,p.x,p.y,p.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let y=0,x=i.count;y<x;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),v.subVectors(f,u),g.subVectors(l,u),v.cross(g),s.setXYZ(y+0,v.x,v.y,v.z),s.setXYZ(y+1,v.x,v.y,v.z),s.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Nn.fromBufferAttribute(t,i),Nn.normalize(),t.setXYZ(i,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function t(d,p){const m=d.array,v=d.itemSize,g=d.normalized,y=new m.constructor(p.length*v);let x=0,E=0;for(let b=0,M=p.length;b<M;b++){d.isInterleavedBufferAttribute?x=p[b]*d.data.stride+d.offset:x=p[b]*v;for(let _=0;_<v;_++)y[E++]=m[x++]}return new hn(y,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Sn,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let v=0,g=m.length;v<g;v++){const y=m[v],x=t(y,s);p.push(x)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,y=m.length;g<y;g++){const x=m[g];v.push(x.toJSON(t.data))}v.length>0&&(l[p]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const u=t.morphAttributes;for(const m in u){const v=[],g=u[m];for(let y=0,x=g.length;y<x;y++)v.push(g[y].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,v=f.length;m<v;m++){const g=f[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dy=new Ve,js=new Pm,bc=new lr,Ny=new V,Ac=new V,wc=new V,Cc=new V,pp=new V,Rc=new V,Uy=new V,Dc=new V;class an extends xn{constructor(t=new Sn,i=new _s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Rc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=d[p],g=u[p];v!==0&&(pp.fromBufferAttribute(g,t),f?Rc.addScaledVector(pp,v):Rc.addScaledVector(pp.sub(i),v))}i.add(Rc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),bc.copy(s.boundingSphere),bc.applyMatrix4(u),js.copy(t.ray).recast(t.near),!(bc.containsPoint(js.origin)===!1&&(js.intersectSphere(bc,Ny)===null||js.origin.distanceToSquared(Ny)>(t.far-t.near)**2))&&(Dy.copy(u).invert(),js.copy(t.ray).applyMatrix4(Dy),!(s.boundingBox!==null&&js.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,js)))}_computeIntersections(t,i,s){let l;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,y=u.groups,x=u.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,b=y.length;E<b;E++){const M=y[E],_=f[M.materialIndex],D=Math.max(M.start,x.start),R=Math.min(d.count,Math.min(M.start+M.count,x.start+x.count));for(let T=D,L=R;T<L;T+=3){const z=d.getX(T),P=d.getX(T+1),I=d.getX(T+2);l=Nc(this,_,t,s,m,v,g,z,P,I),l&&(l.faceIndex=Math.floor(T/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),b=Math.min(d.count,x.start+x.count);for(let M=E,_=b;M<_;M+=3){const D=d.getX(M),R=d.getX(M+1),T=d.getX(M+2);l=Nc(this,f,t,s,m,v,g,D,R,T),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,b=y.length;E<b;E++){const M=y[E],_=f[M.materialIndex],D=Math.max(M.start,x.start),R=Math.min(p.count,Math.min(M.start+M.count,x.start+x.count));for(let T=D,L=R;T<L;T+=3){const z=T,P=T+1,I=T+2;l=Nc(this,_,t,s,m,v,g,z,P,I),l&&(l.faceIndex=Math.floor(T/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),b=Math.min(p.count,x.start+x.count);for(let M=E,_=b;M<_;M+=3){const D=M,R=M+1,T=M+2;l=Nc(this,f,t,s,m,v,g,D,R,T),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function XT(o,t,i,s,l,u,f,d){let p;if(t.side===Xn?p=s.intersectTriangle(f,u,l,!0,d):p=s.intersectTriangle(l,u,f,t.side===ys,d),p===null)return null;Dc.copy(d),Dc.applyMatrix4(o.matrixWorld);const m=i.ray.origin.distanceTo(Dc);return m<i.near||m>i.far?null:{distance:m,point:Dc.clone(),object:o}}function Nc(o,t,i,s,l,u,f,d,p,m){o.getVertexPosition(d,Ac),o.getVertexPosition(p,wc),o.getVertexPosition(m,Cc);const v=XT(o,t,i,s,Ac,wc,Cc,Uy);if(v){const g=new V;Vi.getBarycoord(Uy,Ac,wc,Cc,g),l&&(v.uv=Vi.getInterpolatedAttribute(l,d,p,m,g,new Ht)),u&&(v.uv1=Vi.getInterpolatedAttribute(u,d,p,m,g,new Ht)),f&&(v.normal=Vi.getInterpolatedAttribute(f,d,p,m,g,new V),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new V,materialIndex:0};Vi.getNormal(Ac,wc,Cc,y.normal),v.face=y,v.barycoord=g}return v}class cr extends Sn{constructor(t=1,i=1,s=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:f};const d=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],v=[],g=[];let y=0,x=0;E("z","y","x",-1,-1,s,i,t,f,u,0),E("z","y","x",1,-1,s,i,-t,f,u,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,u,4),E("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(p),this.setAttribute("position",new Ze(m,3)),this.setAttribute("normal",new Ze(v,3)),this.setAttribute("uv",new Ze(g,2));function E(b,M,_,D,R,T,L,z,P,I,N){const A=T/P,F=L/I,Z=T/2,U=L/2,Y=z/2,q=P+1,k=I+1;let $=0,Q=0;const gt=new V;for(let St=0;St<k;St++){const At=St*F-U;for(let qt=0;qt<q;qt++){const Ot=qt*A-Z;gt[b]=Ot*D,gt[M]=At*R,gt[_]=Y,m.push(gt.x,gt.y,gt.z),gt[b]=0,gt[M]=0,gt[_]=z>0?1:-1,v.push(gt.x,gt.y,gt.z),g.push(qt/P),g.push(1-St/I),$+=1}}for(let St=0;St<I;St++)for(let At=0;At<P;At++){const qt=y+At+q*St,Ot=y+At+q*(St+1),G=y+(At+1)+q*(St+1),ft=y+(At+1)+q*St;p.push(qt,Ot,ft),p.push(Ot,G,ft),Q+=6}d.addGroup(x,Q,N),x+=Q,y+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Mo(o){const t={};for(const i in o){t[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function Jn(o){const t={};for(let i=0;i<o.length;i++){const s=Mo(o[i]);for(const l in s)t[l]=s[l]}return t}function qT(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function tS(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const Hl={clone:Mo,merge:Jn};var YT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class en extends ur{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YT,this.fragmentShader=jT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mo(t.uniforms),this.uniformsGroups=qT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class eS extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=oa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const gs=new V,Ly=new Ht,Oy=new Ht;class vi extends eS{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Bl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Dl*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bl*2*Math.atan(Math.tan(Dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){gs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(gs.x,gs.y).multiplyScalar(-t/gs.z),gs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(gs.x,gs.y).multiplyScalar(-t/gs.z)}getViewSize(t,i){return this.getViewBounds(t,Ly,Oy),i.subVectors(Oy,Ly)}setViewOffset(t,i,s,l,u,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Dl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*l/p,i-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const lo=-90,uo=1;class WT extends xn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new vi(lo,uo,t,i);l.layers=this.layers,this.add(l);const u=new vi(lo,uo,t,i);u.layers=this.layers,this.add(u);const f=new vi(lo,uo,t,i);f.layers=this.layers,this.add(f);const d=new vi(lo,uo,t,i);d.layers=this.layers,this.add(d);const p=new vi(lo,uo,t,i);p.layers=this.layers,this.add(p);const m=new vi(lo,uo,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,f,d,p]=i;for(const m of i)this.remove(m);if(t===oa)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===nf)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,v]=this.children,g=t.getRenderTarget(),y=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const b=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=b,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(g,y,x),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class nS extends qn{constructor(t=[],i=yo,s,l,u,f,d,p,m,v){super(t,i,s,l,u,f,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ZT extends Ui{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new nS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new cr(5,5,5),u=new en({name:"CubemapFromEquirect",uniforms:Mo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Xn,blending:La});u.uniforms.tEquirect.value=i;const f=new an(l,u),d=i.minFilter;return i.minFilter===nr&&(i.minFilter=sa),new WT(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(u)}}class Ua extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const QT={type:"move"};class mp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ua,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ua,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ua,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const b of t.hand.values()){const M=i.getJointPose(b,s),_=this._getHandJoint(m,b);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],y=v.position.distanceTo(g.position),x=.02,E=.005;m.inputState.pinching&&y>x+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&y<=x-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(QT)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Ua;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class iS extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class KT extends qn{constructor(t=null,i=1,s=1,l,u,f,d,p,m=yi,v=yi,g,y){super(null,f,d,p,m,v,l,u,g,y),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Py extends hn{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const co=new Ve,zy=new Ve,Uc=[],Iy=new or,JT=new Ve,Tl=new an,bl=new lr;class $T extends an{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Py(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,JT)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new or),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,co),Iy.copy(t.boundingBox).applyMatrix4(co),this.boundingBox.union(Iy)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new lr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,co),bl.copy(t.boundingSphere).applyMatrix4(co),this.boundingSphere.union(bl)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,u=s.length+1,f=t*u+1;for(let d=0;d<s.length;d++)s[d]=l[f+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Tl.geometry=this.geometry,Tl.material=this.material,Tl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bl.copy(this.boundingSphere),bl.applyMatrix4(s),t.ray.intersectsSphere(bl)!==!1))for(let u=0;u<l;u++){this.getMatrixAt(u,co),zy.multiplyMatrices(s,co),Tl.matrixWorld=zy,Tl.raycast(t,Uc);for(let f=0,d=Uc.length;f<d;f++){const p=Uc[f];p.instanceId=u,p.object=this,i.push(p)}Uc.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new Py(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new KT(new Float32Array(l*this.count),l,this.count,Rm,ra));const u=this.morphTexture.source.data.data;let f=0;for(let m=0;m<s.length;m++)f+=s[m];const d=this.geometry.morphTargetsRelative?1:1-f,p=l*t;u[p]=d,u.set(s,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const gp=new V,tb=new V,eb=new ye;class Ks{constructor(t=new V(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=gp.subVectors(s,i).cross(tb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(gp),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||eb.getNormalMatrix(t),l=this.coplanarPoint(gp).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ws=new lr,nb=new Ht(.5,.5),Lc=new V;class zm{constructor(t=new Ks,i=new Ks,s=new Ks,l=new Ks,u=new Ks,f=new Ks){this.planes=[t,i,s,l,u,f]}set(t,i,s,l,u,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=oa,s=!1){const l=this.planes,u=t.elements,f=u[0],d=u[1],p=u[2],m=u[3],v=u[4],g=u[5],y=u[6],x=u[7],E=u[8],b=u[9],M=u[10],_=u[11],D=u[12],R=u[13],T=u[14],L=u[15];if(l[0].setComponents(m-f,x-v,_-E,L-D).normalize(),l[1].setComponents(m+f,x+v,_+E,L+D).normalize(),l[2].setComponents(m+d,x+g,_+b,L+R).normalize(),l[3].setComponents(m-d,x-g,_-b,L-R).normalize(),s)l[4].setComponents(p,y,M,T).normalize(),l[5].setComponents(m-p,x-y,_-M,L-T).normalize();else if(l[4].setComponents(m-p,x-y,_-M,L-T).normalize(),i===oa)l[5].setComponents(m+p,x+y,_+M,L+T).normalize();else if(i===nf)l[5].setComponents(p,y,M,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(t){Ws.center.set(0,0,0);const i=nb.distanceTo(t.center);return Ws.radius=.7071067811865476+i,Ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Lc.x=l.normal.x>0?t.max.x:t.min.x,Lc.y=l.normal.y>0?t.max.y:t.min.y,Lc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ib extends ur{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const sf=new V,rf=new V,By=new Ve,Al=new Pm,Oc=new lr,vp=new V,Fy=new V;class aS extends xn{constructor(t=new Sn,i=new ib){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)sf.fromBufferAttribute(i,l-1),rf.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=sf.distanceTo(rf);t.setAttribute("lineDistance",new Ze(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Oc.copy(s.boundingSphere),Oc.applyMatrix4(l),Oc.radius+=u,t.ray.intersectsSphere(Oc)===!1)return;By.copy(l).invert(),Al.copy(t.ray).applyMatrix4(By);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,v=s.index,y=s.attributes.position;if(v!==null){const x=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let b=x,M=E-1;b<M;b+=m){const _=v.getX(b),D=v.getX(b+1),R=Pc(this,t,Al,p,_,D,b);R&&i.push(R)}if(this.isLineLoop){const b=v.getX(E-1),M=v.getX(x),_=Pc(this,t,Al,p,b,M,E-1);_&&i.push(_)}}else{const x=Math.max(0,f.start),E=Math.min(y.count,f.start+f.count);for(let b=x,M=E-1;b<M;b+=m){const _=Pc(this,t,Al,p,b,b+1,b);_&&i.push(_)}if(this.isLineLoop){const b=Pc(this,t,Al,p,E-1,x,E-1);b&&i.push(b)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Pc(o,t,i,s,l,u,f){const d=o.geometry.attributes.position;if(sf.fromBufferAttribute(d,l),rf.fromBufferAttribute(d,u),i.distanceSqToSegment(sf,rf,vp,Fy)>s)return;vp.applyMatrix4(o.matrixWorld);const m=t.ray.origin.distanceTo(vp);if(!(m<t.near||m>t.far))return{distance:m,point:Fy.clone().applyMatrix4(o.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:o}}const Hy=new V,Gy=new V;class ab extends aS{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)Hy.fromBufferAttribute(i,l),Gy.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Hy.distanceTo(Gy);t.setAttribute("lineDistance",new Ze(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sb extends ur{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Vy=new Ve,gm=new Pm,zc=new lr,Ic=new V;class Im extends xn{constructor(t=new Sn,i=new sb){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),zc.copy(s.boundingSphere),zc.applyMatrix4(l),zc.radius+=u,t.ray.intersectsSphere(zc)===!1)return;Vy.copy(l).invert(),gm.copy(t.ray).applyMatrix4(Vy);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=s.index,g=s.attributes.position;if(m!==null){const y=Math.max(0,f.start),x=Math.min(m.count,f.start+f.count);for(let E=y,b=x;E<b;E++){const M=m.getX(E);Ic.fromBufferAttribute(g,M),ky(Ic,M,p,l,t,i,this)}}else{const y=Math.max(0,f.start),x=Math.min(g.count,f.start+f.count);for(let E=y,b=x;E<b;E++)Ic.fromBufferAttribute(g,E),ky(Ic,E,p,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function ky(o,t,i,s,l,u,f){const d=gm.distanceSqToPoint(o);if(d<i){const p=new V;gm.closestPointToPoint(o,p),p.applyMatrix4(s);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class rb extends qn{constructor(t,i,s,l,u,f,d,p,m){super(t,i,s,l,u,f,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class sS extends qn{constructor(t,i,s=ar,l,u,f,d=yi,p=yi,m,v=zl,g=1){if(v!==zl&&v!==Il)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:g};super(y,l,u,f,d,p,v,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Om(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class rS extends qn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Bm extends Sn{constructor(t=1,i=1,s=1,l=32,u=1,f=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:f,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),u=Math.floor(u);const v=[],g=[],y=[],x=[];let E=0;const b=[],M=s/2;let _=0;D(),f===!1&&(t>0&&R(!0),i>0&&R(!1)),this.setIndex(v),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(y,3)),this.setAttribute("uv",new Ze(x,2));function D(){const T=new V,L=new V;let z=0;const P=(i-t)/s;for(let I=0;I<=u;I++){const N=[],A=I/u,F=A*(i-t)+t;for(let Z=0;Z<=l;Z++){const U=Z/l,Y=U*p+d,q=Math.sin(Y),k=Math.cos(Y);L.x=F*q,L.y=-A*s+M,L.z=F*k,g.push(L.x,L.y,L.z),T.set(q,P,k).normalize(),y.push(T.x,T.y,T.z),x.push(U,1-A),N.push(E++)}b.push(N)}for(let I=0;I<l;I++)for(let N=0;N<u;N++){const A=b[N][I],F=b[N+1][I],Z=b[N+1][I+1],U=b[N][I+1];(t>0||N!==0)&&(v.push(A,F,U),z+=3),(i>0||N!==u-1)&&(v.push(F,Z,U),z+=3)}m.addGroup(_,z,0),_+=z}function R(T){const L=E,z=new Ht,P=new V;let I=0;const N=T===!0?t:i,A=T===!0?1:-1;for(let Z=1;Z<=l;Z++)g.push(0,M*A,0),y.push(0,A,0),x.push(.5,.5),E++;const F=E;for(let Z=0;Z<=l;Z++){const Y=Z/l*p+d,q=Math.cos(Y),k=Math.sin(Y);P.x=N*k,P.y=M*A,P.z=N*q,g.push(P.x,P.y,P.z),y.push(0,A,0),z.x=q*.5+.5,z.y=k*.5*A+.5,x.push(z.x,z.y),E++}for(let Z=0;Z<l;Z++){const U=L+Z,Y=F+Z;T===!0?v.push(Y,Y+1,U):v.push(Y+1,Y,U),I+=3}m.addGroup(_,I,T===!0?1:2),_+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Bm(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Fm extends Sn{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const u=[],f=[];d(l),m(s),v(),this.setAttribute("position",new Ze(u,3)),this.setAttribute("normal",new Ze(u.slice(),3)),this.setAttribute("uv",new Ze(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(D){const R=new V,T=new V,L=new V;for(let z=0;z<i.length;z+=3)x(i[z+0],R),x(i[z+1],T),x(i[z+2],L),p(R,T,L,D)}function p(D,R,T,L){const z=L+1,P=[];for(let I=0;I<=z;I++){P[I]=[];const N=D.clone().lerp(T,I/z),A=R.clone().lerp(T,I/z),F=z-I;for(let Z=0;Z<=F;Z++)Z===0&&I===z?P[I][Z]=N:P[I][Z]=N.clone().lerp(A,Z/F)}for(let I=0;I<z;I++)for(let N=0;N<2*(z-I)-1;N++){const A=Math.floor(N/2);N%2===0?(y(P[I][A+1]),y(P[I+1][A]),y(P[I][A])):(y(P[I][A+1]),y(P[I+1][A+1]),y(P[I+1][A]))}}function m(D){const R=new V;for(let T=0;T<u.length;T+=3)R.x=u[T+0],R.y=u[T+1],R.z=u[T+2],R.normalize().multiplyScalar(D),u[T+0]=R.x,u[T+1]=R.y,u[T+2]=R.z}function v(){const D=new V;for(let R=0;R<u.length;R+=3){D.x=u[R+0],D.y=u[R+1],D.z=u[R+2];const T=M(D)/2/Math.PI+.5,L=_(D)/Math.PI+.5;f.push(T,1-L)}E(),g()}function g(){for(let D=0;D<f.length;D+=6){const R=f[D+0],T=f[D+2],L=f[D+4],z=Math.max(R,T,L),P=Math.min(R,T,L);z>.9&&P<.1&&(R<.2&&(f[D+0]+=1),T<.2&&(f[D+2]+=1),L<.2&&(f[D+4]+=1))}}function y(D){u.push(D.x,D.y,D.z)}function x(D,R){const T=D*3;R.x=t[T+0],R.y=t[T+1],R.z=t[T+2]}function E(){const D=new V,R=new V,T=new V,L=new V,z=new Ht,P=new Ht,I=new Ht;for(let N=0,A=0;N<u.length;N+=9,A+=6){D.set(u[N+0],u[N+1],u[N+2]),R.set(u[N+3],u[N+4],u[N+5]),T.set(u[N+6],u[N+7],u[N+8]),z.set(f[A+0],f[A+1]),P.set(f[A+2],f[A+3]),I.set(f[A+4],f[A+5]),L.copy(D).add(R).add(T).divideScalar(3);const F=M(L);b(z,A+0,D,F),b(P,A+2,R,F),b(I,A+4,T,F)}}function b(D,R,T,L){L<0&&D.x===1&&(f[R]=D.x-1),T.x===0&&T.z===0&&(f[R]=L/2/Math.PI+.5)}function M(D){return Math.atan2(D.z,-D.x)}function _(D){return Math.atan2(-D.y,Math.sqrt(D.x*D.x+D.z*D.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fm(t.vertices,t.indices,t.radius,t.details)}}class la{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),u=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),u+=s.distanceTo(l),i.push(u),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const u=s.length;let f;i?f=i:f=t*s[u-1];let d=0,p=u-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=s[l]-f,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,s[l]===f)return l/(u-1);const v=s[l],y=s[l+1]-v,x=(f-v)/y;return(l+x)/(u-1)}getTangent(t,i){let l=t-1e-4,u=t+1e-4;l<0&&(l=0),u>1&&(u=1);const f=this.getPoint(l),d=this.getPoint(u),p=i||(f.isVector2?new Ht:new V);return p.copy(d).sub(f).normalize(),p}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new V,l=[],u=[],f=[],d=new V,p=new Ve;for(let x=0;x<=t;x++){const E=x/t;l[x]=this.getTangentAt(E,new V)}u[0]=new V,f[0]=new V;let m=Number.MAX_VALUE;const v=Math.abs(l[0].x),g=Math.abs(l[0].y),y=Math.abs(l[0].z);v<=m&&(m=v,s.set(1,0,0)),g<=m&&(m=g,s.set(0,1,0)),y<=m&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),u[0].crossVectors(l[0],d),f[0].crossVectors(l[0],u[0]);for(let x=1;x<=t;x++){if(u[x]=u[x-1].clone(),f[x]=f[x-1].clone(),d.crossVectors(l[x-1],l[x]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Ae(l[x-1].dot(l[x]),-1,1));u[x].applyMatrix4(p.makeRotationAxis(d,E))}f[x].crossVectors(l[x],u[x])}if(i===!0){let x=Math.acos(Ae(u[0].dot(u[t]),-1,1));x/=t,l[0].dot(d.crossVectors(u[0],u[t]))>0&&(x=-x);for(let E=1;E<=t;E++)u[E].applyMatrix4(p.makeRotationAxis(l[E],x*E)),f[E].crossVectors(l[E],u[E])}return{tangents:l,normals:u,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Hm extends la{constructor(t=0,i=0,s=1,l=1,u=0,f=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=u,this.aEndAngle=f,this.aClockwise=d,this.aRotation=p}getPoint(t,i=new Ht){const s=i,l=Math.PI*2;let u=this.aEndAngle-this.aStartAngle;const f=Math.abs(u)<Number.EPSILON;for(;u<0;)u+=l;for(;u>l;)u-=l;u<Number.EPSILON&&(f?u=0:u=l),this.aClockwise===!0&&!f&&(u===l?u=-l:u=u-l);const d=this.aStartAngle+t*u;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),g=Math.sin(this.aRotation),y=p-this.aX,x=m-this.aY;p=y*v-x*g+this.aX,m=y*g+x*v+this.aY}return s.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ob extends Hm{constructor(t,i,s,l,u,f){super(t,i,s,s,l,u,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Gm(){let o=0,t=0,i=0,s=0;function l(u,f,d,p){o=u,t=d,i=-3*u+3*f-2*d-p,s=2*u-2*f+d+p}return{initCatmullRom:function(u,f,d,p,m){l(f,d,m*(d-u),m*(p-f))},initNonuniformCatmullRom:function(u,f,d,p,m,v,g){let y=(f-u)/m-(d-u)/(m+v)+(d-f)/v,x=(d-f)/v-(p-f)/(v+g)+(p-d)/g;y*=v,x*=v,l(f,d,y,x)},calc:function(u){const f=u*u,d=f*u;return o+t*u+i*f+s*d}}}const Bc=new V,_p=new Gm,yp=new Gm,xp=new Gm;class vm extends la{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new V){const s=i,l=this.points,u=l.length,f=(u-(this.closed?0:1))*t;let d=Math.floor(f),p=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/u)+1)*u:p===0&&d===u-1&&(d=u-2,p=1);let m,v;this.closed||d>0?m=l[(d-1)%u]:(Bc.subVectors(l[0],l[1]).add(l[0]),m=Bc);const g=l[d%u],y=l[(d+1)%u];if(this.closed||d+2<u?v=l[(d+2)%u]:(Bc.subVectors(l[u-1],l[u-2]).add(l[u-1]),v=Bc),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(g),x),b=Math.pow(g.distanceToSquared(y),x),M=Math.pow(y.distanceToSquared(v),x);b<1e-4&&(b=1),E<1e-4&&(E=b),M<1e-4&&(M=b),_p.initNonuniformCatmullRom(m.x,g.x,y.x,v.x,E,b,M),yp.initNonuniformCatmullRom(m.y,g.y,y.y,v.y,E,b,M),xp.initNonuniformCatmullRom(m.z,g.z,y.z,v.z,E,b,M)}else this.curveType==="catmullrom"&&(_p.initCatmullRom(m.x,g.x,y.x,v.x,this.tension),yp.initCatmullRom(m.y,g.y,y.y,v.y,this.tension),xp.initCatmullRom(m.z,g.z,y.z,v.z,this.tension));return s.set(_p.calc(p),yp.calc(p),xp.calc(p)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new V().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Xy(o,t,i,s,l){const u=(s-t)*.5,f=(l-i)*.5,d=o*o,p=o*d;return(2*i-2*s+u+f)*p+(-3*i+3*s-2*u-f)*d+u*o+i}function lb(o,t){const i=1-o;return i*i*t}function ub(o,t){return 2*(1-o)*o*t}function cb(o,t){return o*o*t}function Ul(o,t,i,s){return lb(o,t)+ub(o,i)+cb(o,s)}function fb(o,t){const i=1-o;return i*i*i*t}function hb(o,t){const i=1-o;return 3*i*i*o*t}function db(o,t){return 3*(1-o)*o*o*t}function pb(o,t){return o*o*o*t}function Ll(o,t,i,s,l){return fb(o,t)+hb(o,i)+db(o,s)+pb(o,l)}class oS extends la{constructor(t=new Ht,i=new Ht,s=new Ht,l=new Ht){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new Ht){const s=i,l=this.v0,u=this.v1,f=this.v2,d=this.v3;return s.set(Ll(t,l.x,u.x,f.x,d.x),Ll(t,l.y,u.y,f.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mb extends la{constructor(t=new V,i=new V,s=new V,l=new V){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new V){const s=i,l=this.v0,u=this.v1,f=this.v2,d=this.v3;return s.set(Ll(t,l.x,u.x,f.x,d.x),Ll(t,l.y,u.y,f.y,d.y),Ll(t,l.z,u.z,f.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class lS extends la{constructor(t=new Ht,i=new Ht){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Ht){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Ht){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gb extends la{constructor(t=new V,i=new V){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new V){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new V){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class uS extends la{constructor(t=new Ht,i=new Ht,s=new Ht){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new Ht){const s=i,l=this.v0,u=this.v1,f=this.v2;return s.set(Ul(t,l.x,u.x,f.x),Ul(t,l.y,u.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class cS extends la{constructor(t=new V,i=new V,s=new V){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new V){const s=i,l=this.v0,u=this.v1,f=this.v2;return s.set(Ul(t,l.x,u.x,f.x),Ul(t,l.y,u.y,f.y),Ul(t,l.z,u.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fS extends la{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Ht){const s=i,l=this.points,u=(l.length-1)*t,f=Math.floor(u),d=u-f,p=l[f===0?f:f-1],m=l[f],v=l[f>l.length-2?l.length-1:f+1],g=l[f>l.length-3?l.length-1:f+2];return s.set(Xy(d,p.x,m.x,v.x,g.x),Xy(d,p.y,m.y,v.y,g.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Ht().fromArray(l))}return this}}var of=Object.freeze({__proto__:null,ArcCurve:ob,CatmullRomCurve3:vm,CubicBezierCurve:oS,CubicBezierCurve3:mb,EllipseCurve:Hm,LineCurve:lS,LineCurve3:gb,QuadraticBezierCurve:uS,QuadraticBezierCurve3:cS,SplineCurve:fS});class vb extends la{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new of[s](i,t))}return this}getPoint(t,i){const s=t*this.getLength(),l=this.getCurveLengths();let u=0;for(;u<l.length;){if(l[u]>=s){const f=l[u]-s,d=this.curves[u],p=d.getLength(),m=p===0?0:1-f/p;return d.getPointAt(m,i)}u++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let s=0,l=this.curves.length;s<l;s++)i+=this.curves[s].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let s;for(let l=0,u=this.curves;l<u.length;l++){const f=u[l],d=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,p=f.getPoints(d);for(let m=0;m<p.length;m++){const v=p[m];s&&s.equals(v)||(i.push(v),s=v)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,s=this.curves.length;i<s;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(new of[l.type]().fromJSON(l))}return this}}class qy extends vb{constructor(t){super(),this.type="Path",this.currentPoint=new Ht,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,s=t.length;i<s;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const s=new lS(this.currentPoint.clone(),new Ht(t,i));return this.curves.push(s),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,s,l){const u=new uS(this.currentPoint.clone(),new Ht(t,i),new Ht(s,l));return this.curves.push(u),this.currentPoint.set(s,l),this}bezierCurveTo(t,i,s,l,u,f){const d=new oS(this.currentPoint.clone(),new Ht(t,i),new Ht(s,l),new Ht(u,f));return this.curves.push(d),this.currentPoint.set(u,f),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),s=new fS(i);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,s,l,u,f){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(t+d,i+p,s,l,u,f),this}absarc(t,i,s,l,u,f){return this.absellipse(t,i,s,s,l,u,f),this}ellipse(t,i,s,l,u,f,d,p){const m=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(t+m,i+v,s,l,u,f,d,p),this}absellipse(t,i,s,l,u,f,d,p){const m=new Hm(t,i,s,l,u,f,d,p);if(this.curves.length>0){const g=m.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(m);const v=m.getPoint(1);return this.currentPoint.copy(v),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class lf extends qy{constructor(t){super(t),this.uuid=rr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const i=[];for(let s=0,l=this.holes.length;s<l;s++)i[s]=this.holes[s].getPoints(t);return i}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let i=0,s=this.holes.length;i<s;i++){const l=this.holes[i];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(new qy().fromJSON(l))}return this}}function _b(o,t,i=2){const s=t&&t.length,l=s?t[0]*i:o.length;let u=hS(o,0,l,i,!0);const f=[];if(!u||u.next===u.prev)return f;let d,p,m;if(s&&(u=Eb(o,t,u,i)),o.length>80*i){d=1/0,p=1/0;let v=-1/0,g=-1/0;for(let y=i;y<l;y+=i){const x=o[y],E=o[y+1];x<d&&(d=x),E<p&&(p=E),x>v&&(v=x),E>g&&(g=E)}m=Math.max(v-d,g-p),m=m!==0?32767/m:0}return Gl(u,f,i,d,p,m,0),f}function hS(o,t,i,s,l){let u;if(l===Ob(o,t,i,s)>0)for(let f=t;f<i;f+=s)u=Yy(f/s|0,o[f],o[f+1],u);else for(let f=i-s;f>=t;f-=s)u=Yy(f/s|0,o[f],o[f+1],u);return u&&Eo(u,u.next)&&(kl(u),u=u.next),u}function sr(o,t){if(!o)return o;t||(t=o);let i=o,s;do if(s=!1,!i.steiner&&(Eo(i,i.next)||on(i.prev,i,i.next)===0)){if(kl(i),i=t=i.prev,i===i.next)break;s=!0}else i=i.next;while(s||i!==t);return t}function Gl(o,t,i,s,l,u,f){if(!o)return;!f&&u&&Cb(o,s,l,u);let d=o;for(;o.prev!==o.next;){const p=o.prev,m=o.next;if(u?xb(o,s,l,u):yb(o)){t.push(p.i,o.i,m.i),kl(o),o=m.next,d=m.next;continue}if(o=m,o===d){f?f===1?(o=Sb(sr(o),t),Gl(o,t,i,s,l,u,2)):f===2&&Mb(o,t,i,s,l,u):Gl(sr(o),t,i,s,l,u,1);break}}}function yb(o){const t=o.prev,i=o,s=o.next;if(on(t,i,s)>=0)return!1;const l=t.x,u=i.x,f=s.x,d=t.y,p=i.y,m=s.y,v=Math.min(l,u,f),g=Math.min(d,p,m),y=Math.max(l,u,f),x=Math.max(d,p,m);let E=s.next;for(;E!==t;){if(E.x>=v&&E.x<=y&&E.y>=g&&E.y<=x&&Cl(l,d,u,p,f,m,E.x,E.y)&&on(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function xb(o,t,i,s){const l=o.prev,u=o,f=o.next;if(on(l,u,f)>=0)return!1;const d=l.x,p=u.x,m=f.x,v=l.y,g=u.y,y=f.y,x=Math.min(d,p,m),E=Math.min(v,g,y),b=Math.max(d,p,m),M=Math.max(v,g,y),_=_m(x,E,t,i,s),D=_m(b,M,t,i,s);let R=o.prevZ,T=o.nextZ;for(;R&&R.z>=_&&T&&T.z<=D;){if(R.x>=x&&R.x<=b&&R.y>=E&&R.y<=M&&R!==l&&R!==f&&Cl(d,v,p,g,m,y,R.x,R.y)&&on(R.prev,R,R.next)>=0||(R=R.prevZ,T.x>=x&&T.x<=b&&T.y>=E&&T.y<=M&&T!==l&&T!==f&&Cl(d,v,p,g,m,y,T.x,T.y)&&on(T.prev,T,T.next)>=0))return!1;T=T.nextZ}for(;R&&R.z>=_;){if(R.x>=x&&R.x<=b&&R.y>=E&&R.y<=M&&R!==l&&R!==f&&Cl(d,v,p,g,m,y,R.x,R.y)&&on(R.prev,R,R.next)>=0)return!1;R=R.prevZ}for(;T&&T.z<=D;){if(T.x>=x&&T.x<=b&&T.y>=E&&T.y<=M&&T!==l&&T!==f&&Cl(d,v,p,g,m,y,T.x,T.y)&&on(T.prev,T,T.next)>=0)return!1;T=T.nextZ}return!0}function Sb(o,t){let i=o;do{const s=i.prev,l=i.next.next;!Eo(s,l)&&pS(s,i,i.next,l)&&Vl(s,l)&&Vl(l,s)&&(t.push(s.i,i.i,l.i),kl(i),kl(i.next),i=o=l),i=i.next}while(i!==o);return sr(i)}function Mb(o,t,i,s,l,u){let f=o;do{let d=f.next.next;for(;d!==f.prev;){if(f.i!==d.i&&Nb(f,d)){let p=mS(f,d);f=sr(f,f.next),p=sr(p,p.next),Gl(f,t,i,s,l,u,0),Gl(p,t,i,s,l,u,0);return}d=d.next}f=f.next}while(f!==o)}function Eb(o,t,i,s){const l=[];for(let u=0,f=t.length;u<f;u++){const d=t[u]*s,p=u<f-1?t[u+1]*s:o.length,m=hS(o,d,p,s,!1);m===m.next&&(m.steiner=!0),l.push(Db(m))}l.sort(Tb);for(let u=0;u<l.length;u++)i=bb(l[u],i);return i}function Tb(o,t){let i=o.x-t.x;if(i===0&&(i=o.y-t.y,i===0)){const s=(o.next.y-o.y)/(o.next.x-o.x),l=(t.next.y-t.y)/(t.next.x-t.x);i=s-l}return i}function bb(o,t){const i=Ab(o,t);if(!i)return t;const s=mS(i,o);return sr(s,s.next),sr(i,i.next)}function Ab(o,t){let i=t;const s=o.x,l=o.y;let u=-1/0,f;if(Eo(o,i))return i;do{if(Eo(o,i.next))return i.next;if(l<=i.y&&l>=i.next.y&&i.next.y!==i.y){const g=i.x+(l-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(g<=s&&g>u&&(u=g,f=i.x<i.next.x?i:i.next,g===s))return f}i=i.next}while(i!==t);if(!f)return null;const d=f,p=f.x,m=f.y;let v=1/0;i=f;do{if(s>=i.x&&i.x>=p&&s!==i.x&&dS(l<m?s:u,l,p,m,l<m?u:s,l,i.x,i.y)){const g=Math.abs(l-i.y)/(s-i.x);Vl(i,o)&&(g<v||g===v&&(i.x>f.x||i.x===f.x&&wb(f,i)))&&(f=i,v=g)}i=i.next}while(i!==d);return f}function wb(o,t){return on(o.prev,o,t.prev)<0&&on(t.next,o,o.next)<0}function Cb(o,t,i,s){let l=o;do l.z===0&&(l.z=_m(l.x,l.y,t,i,s)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==o);l.prevZ.nextZ=null,l.prevZ=null,Rb(l)}function Rb(o){let t,i=1;do{let s=o,l;o=null;let u=null;for(t=0;s;){t++;let f=s,d=0;for(let m=0;m<i&&(d++,f=f.nextZ,!!f);m++);let p=i;for(;d>0||p>0&&f;)d!==0&&(p===0||!f||s.z<=f.z)?(l=s,s=s.nextZ,d--):(l=f,f=f.nextZ,p--),u?u.nextZ=l:o=l,l.prevZ=u,u=l;s=f}u.nextZ=null,i*=2}while(t>1);return o}function _m(o,t,i,s,l){return o=(o-i)*l|0,t=(t-s)*l|0,o=(o|o<<8)&16711935,o=(o|o<<4)&252645135,o=(o|o<<2)&858993459,o=(o|o<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,o|t<<1}function Db(o){let t=o,i=o;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==o);return i}function dS(o,t,i,s,l,u,f,d){return(l-f)*(t-d)>=(o-f)*(u-d)&&(o-f)*(s-d)>=(i-f)*(t-d)&&(i-f)*(u-d)>=(l-f)*(s-d)}function Cl(o,t,i,s,l,u,f,d){return!(o===f&&t===d)&&dS(o,t,i,s,l,u,f,d)}function Nb(o,t){return o.next.i!==t.i&&o.prev.i!==t.i&&!Ub(o,t)&&(Vl(o,t)&&Vl(t,o)&&Lb(o,t)&&(on(o.prev,o,t.prev)||on(o,t.prev,t))||Eo(o,t)&&on(o.prev,o,o.next)>0&&on(t.prev,t,t.next)>0)}function on(o,t,i){return(t.y-o.y)*(i.x-t.x)-(t.x-o.x)*(i.y-t.y)}function Eo(o,t){return o.x===t.x&&o.y===t.y}function pS(o,t,i,s){const l=Hc(on(o,t,i)),u=Hc(on(o,t,s)),f=Hc(on(i,s,o)),d=Hc(on(i,s,t));return!!(l!==u&&f!==d||l===0&&Fc(o,i,t)||u===0&&Fc(o,s,t)||f===0&&Fc(i,o,s)||d===0&&Fc(i,t,s))}function Fc(o,t,i){return t.x<=Math.max(o.x,i.x)&&t.x>=Math.min(o.x,i.x)&&t.y<=Math.max(o.y,i.y)&&t.y>=Math.min(o.y,i.y)}function Hc(o){return o>0?1:o<0?-1:0}function Ub(o,t){let i=o;do{if(i.i!==o.i&&i.next.i!==o.i&&i.i!==t.i&&i.next.i!==t.i&&pS(i,i.next,o,t))return!0;i=i.next}while(i!==o);return!1}function Vl(o,t){return on(o.prev,o,o.next)<0?on(o,t,o.next)>=0&&on(o,o.prev,t)>=0:on(o,t,o.prev)<0||on(o,o.next,t)<0}function Lb(o,t){let i=o,s=!1;const l=(o.x+t.x)/2,u=(o.y+t.y)/2;do i.y>u!=i.next.y>u&&i.next.y!==i.y&&l<(i.next.x-i.x)*(u-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==o);return s}function mS(o,t){const i=ym(o.i,o.x,o.y),s=ym(t.i,t.x,t.y),l=o.next,u=t.prev;return o.next=t,t.prev=o,i.next=l,l.prev=i,s.next=i,i.prev=s,u.next=s,s.prev=u,s}function Yy(o,t,i,s){const l=ym(o,t,i);return s?(l.next=s.next,l.prev=s,s.next.prev=l,s.next=l):(l.prev=l,l.next=l),l}function kl(o){o.next.prev=o.prev,o.prev.next=o.next,o.prevZ&&(o.prevZ.nextZ=o.nextZ),o.nextZ&&(o.nextZ.prevZ=o.prevZ)}function ym(o,t,i){return{i:o,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ob(o,t,i,s){let l=0;for(let u=t,f=i-s;u<i;u+=s)l+=(o[f]-o[u])*(o[u+1]+o[f+1]),f=u;return l}class Pb{static triangulate(t,i,s=2){return _b(t,i,s)}}class po{static area(t){const i=t.length;let s=0;for(let l=i-1,u=0;u<i;l=u++)s+=t[l].x*t[u].y-t[u].x*t[l].y;return s*.5}static isClockWise(t){return po.area(t)<0}static triangulateShape(t,i){const s=[],l=[],u=[];jy(t),Wy(s,t);let f=t.length;i.forEach(jy);for(let p=0;p<i.length;p++)l.push(f),f+=i[p].length,Wy(s,i[p]);const d=Pb.triangulate(s,l);for(let p=0;p<d.length;p+=3)u.push(d.slice(p,p+3));return u}}function jy(o){const t=o.length;t>2&&o[t-1].equals(o[0])&&o.pop()}function Wy(o,t){for(let i=0;i<t.length;i++)o.push(t[i].x),o.push(t[i].y)}class Xl extends Sn{constructor(t=new lf([new Ht(.5,.5),new Ht(-.5,.5),new Ht(-.5,-.5),new Ht(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];const s=this,l=[],u=[];for(let d=0,p=t.length;d<p;d++){const m=t[d];f(m)}this.setAttribute("position",new Ze(l,3)),this.setAttribute("uv",new Ze(u,2)),this.computeVertexNormals();function f(d){const p=[],m=i.curveSegments!==void 0?i.curveSegments:12,v=i.steps!==void 0?i.steps:1,g=i.depth!==void 0?i.depth:1;let y=i.bevelEnabled!==void 0?i.bevelEnabled:!0,x=i.bevelThickness!==void 0?i.bevelThickness:.2,E=i.bevelSize!==void 0?i.bevelSize:x-.1,b=i.bevelOffset!==void 0?i.bevelOffset:0,M=i.bevelSegments!==void 0?i.bevelSegments:3;const _=i.extrudePath,D=i.UVGenerator!==void 0?i.UVGenerator:zb;let R,T=!1,L,z,P,I;_&&(R=_.getSpacedPoints(v),T=!0,y=!1,L=_.computeFrenetFrames(v,!1),z=new V,P=new V,I=new V),y||(M=0,x=0,E=0,b=0);const N=d.extractPoints(m);let A=N.shape;const F=N.holes;if(!po.isClockWise(A)){A=A.reverse();for(let bt=0,yt=F.length;bt<yt;bt++){const ht=F[bt];po.isClockWise(ht)&&(F[bt]=ht.reverse())}}function U(bt){const ht=10000000000000001e-36;let vt=bt[0];for(let Rt=1;Rt<=bt.length;Rt++){const Nt=Rt%bt.length,It=bt[Nt],re=It.x-vt.x,oe=It.y-vt.y,B=re*re+oe*oe,w=Math.max(Math.abs(It.x),Math.abs(It.y),Math.abs(vt.x),Math.abs(vt.y)),rt=ht*w*w;if(B<=rt){bt.splice(Nt,1),Rt--;continue}vt=It}}U(A),F.forEach(U);const Y=F.length,q=A;for(let bt=0;bt<Y;bt++){const yt=F[bt];A=A.concat(yt)}function k(bt,yt,ht){return yt||console.error("THREE.ExtrudeGeometry: vec does not exist"),bt.clone().addScaledVector(yt,ht)}const $=A.length;function Q(bt,yt,ht){let vt,Rt,Nt;const It=bt.x-yt.x,re=bt.y-yt.y,oe=ht.x-bt.x,B=ht.y-bt.y,w=It*It+re*re,rt=It*B-re*oe;if(Math.abs(rt)>Number.EPSILON){const dt=Math.sqrt(w),Ut=Math.sqrt(oe*oe+B*B),_t=yt.x-re/dt,Zt=yt.y+It/dt,Gt=ht.x-B/Ut,Jt=ht.y+oe/Ut,te=((Gt-_t)*B-(Jt-Zt)*oe)/(It*B-re*oe);vt=_t+It*te-bt.x,Rt=Zt+re*te-bt.y;const Pt=vt*vt+Rt*Rt;if(Pt<=2)return new Ht(vt,Rt);Nt=Math.sqrt(Pt/2)}else{let dt=!1;It>Number.EPSILON?oe>Number.EPSILON&&(dt=!0):It<-Number.EPSILON?oe<-Number.EPSILON&&(dt=!0):Math.sign(re)===Math.sign(B)&&(dt=!0),dt?(vt=-re,Rt=It,Nt=Math.sqrt(w)):(vt=It,Rt=re,Nt=Math.sqrt(w/2))}return new Ht(vt/Nt,Rt/Nt)}const gt=[];for(let bt=0,yt=q.length,ht=yt-1,vt=bt+1;bt<yt;bt++,ht++,vt++)ht===yt&&(ht=0),vt===yt&&(vt=0),gt[bt]=Q(q[bt],q[ht],q[vt]);const St=[];let At,qt=gt.concat();for(let bt=0,yt=Y;bt<yt;bt++){const ht=F[bt];At=[];for(let vt=0,Rt=ht.length,Nt=Rt-1,It=vt+1;vt<Rt;vt++,Nt++,It++)Nt===Rt&&(Nt=0),It===Rt&&(It=0),At[vt]=Q(ht[vt],ht[Nt],ht[It]);St.push(At),qt=qt.concat(At)}let Ot;if(M===0)Ot=po.triangulateShape(q,F);else{const bt=[],yt=[];for(let ht=0;ht<M;ht++){const vt=ht/M,Rt=x*Math.cos(vt*Math.PI/2),Nt=E*Math.sin(vt*Math.PI/2)+b;for(let It=0,re=q.length;It<re;It++){const oe=k(q[It],gt[It],Nt);Ct(oe.x,oe.y,-Rt),vt===0&&bt.push(oe)}for(let It=0,re=Y;It<re;It++){const oe=F[It];At=St[It];const B=[];for(let w=0,rt=oe.length;w<rt;w++){const dt=k(oe[w],At[w],Nt);Ct(dt.x,dt.y,-Rt),vt===0&&B.push(dt)}vt===0&&yt.push(B)}}Ot=po.triangulateShape(bt,yt)}const G=Ot.length,ft=E+b;for(let bt=0;bt<$;bt++){const yt=y?k(A[bt],qt[bt],ft):A[bt];T?(P.copy(L.normals[0]).multiplyScalar(yt.x),z.copy(L.binormals[0]).multiplyScalar(yt.y),I.copy(R[0]).add(P).add(z),Ct(I.x,I.y,I.z)):Ct(yt.x,yt.y,0)}for(let bt=1;bt<=v;bt++)for(let yt=0;yt<$;yt++){const ht=y?k(A[yt],qt[yt],ft):A[yt];T?(P.copy(L.normals[bt]).multiplyScalar(ht.x),z.copy(L.binormals[bt]).multiplyScalar(ht.y),I.copy(R[bt]).add(P).add(z),Ct(I.x,I.y,I.z)):Ct(ht.x,ht.y,g/v*bt)}for(let bt=M-1;bt>=0;bt--){const yt=bt/M,ht=x*Math.cos(yt*Math.PI/2),vt=E*Math.sin(yt*Math.PI/2)+b;for(let Rt=0,Nt=q.length;Rt<Nt;Rt++){const It=k(q[Rt],gt[Rt],vt);Ct(It.x,It.y,g+ht)}for(let Rt=0,Nt=F.length;Rt<Nt;Rt++){const It=F[Rt];At=St[Rt];for(let re=0,oe=It.length;re<oe;re++){const B=k(It[re],At[re],vt);T?Ct(B.x,B.y+R[v-1].y,R[v-1].x+ht):Ct(B.x,B.y,g+ht)}}}j(),et();function j(){const bt=l.length/3;if(y){let yt=0,ht=$*yt;for(let vt=0;vt<G;vt++){const Rt=Ot[vt];wt(Rt[2]+ht,Rt[1]+ht,Rt[0]+ht)}yt=v+M*2,ht=$*yt;for(let vt=0;vt<G;vt++){const Rt=Ot[vt];wt(Rt[0]+ht,Rt[1]+ht,Rt[2]+ht)}}else{for(let yt=0;yt<G;yt++){const ht=Ot[yt];wt(ht[2],ht[1],ht[0])}for(let yt=0;yt<G;yt++){const ht=Ot[yt];wt(ht[0]+$*v,ht[1]+$*v,ht[2]+$*v)}}s.addGroup(bt,l.length/3-bt,0)}function et(){const bt=l.length/3;let yt=0;xt(q,yt),yt+=q.length;for(let ht=0,vt=F.length;ht<vt;ht++){const Rt=F[ht];xt(Rt,yt),yt+=Rt.length}s.addGroup(bt,l.length/3-bt,1)}function xt(bt,yt){let ht=bt.length;for(;--ht>=0;){const vt=ht;let Rt=ht-1;Rt<0&&(Rt=bt.length-1);for(let Nt=0,It=v+M*2;Nt<It;Nt++){const re=$*Nt,oe=$*(Nt+1),B=yt+vt+re,w=yt+Rt+re,rt=yt+Rt+oe,dt=yt+vt+oe;Mt(B,w,rt,dt)}}}function Ct(bt,yt,ht){p.push(bt),p.push(yt),p.push(ht)}function wt(bt,yt,ht){Lt(bt),Lt(yt),Lt(ht);const vt=l.length/3,Rt=D.generateTopUV(s,l,vt-3,vt-2,vt-1);H(Rt[0]),H(Rt[1]),H(Rt[2])}function Mt(bt,yt,ht,vt){Lt(bt),Lt(yt),Lt(vt),Lt(yt),Lt(ht),Lt(vt);const Rt=l.length/3,Nt=D.generateSideWallUV(s,l,Rt-6,Rt-3,Rt-2,Rt-1);H(Nt[0]),H(Nt[1]),H(Nt[3]),H(Nt[1]),H(Nt[2]),H(Nt[3])}function Lt(bt){l.push(p[bt*3+0]),l.push(p[bt*3+1]),l.push(p[bt*3+2])}function H(bt){u.push(bt.x),u.push(bt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes,s=this.parameters.options;return Ib(i,s,t)}static fromJSON(t,i){const s=[];for(let u=0,f=t.shapes.length;u<f;u++){const d=i[t.shapes[u]];s.push(d)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new of[l.type]().fromJSON(l)),new Xl(s,t.options)}}const zb={generateTopUV:function(o,t,i,s,l){const u=t[i*3],f=t[i*3+1],d=t[s*3],p=t[s*3+1],m=t[l*3],v=t[l*3+1];return[new Ht(u,f),new Ht(d,p),new Ht(m,v)]},generateSideWallUV:function(o,t,i,s,l,u){const f=t[i*3],d=t[i*3+1],p=t[i*3+2],m=t[s*3],v=t[s*3+1],g=t[s*3+2],y=t[l*3],x=t[l*3+1],E=t[l*3+2],b=t[u*3],M=t[u*3+1],_=t[u*3+2];return Math.abs(d-v)<Math.abs(f-m)?[new Ht(f,1-p),new Ht(m,1-g),new Ht(y,1-E),new Ht(b,1-_)]:[new Ht(d,1-p),new Ht(v,1-g),new Ht(x,1-E),new Ht(M,1-_)]}};function Ib(o,t,i){if(i.shapes=[],Array.isArray(o))for(let s=0,l=o.length;s<l;s++){const u=o[s];i.shapes.push(u.uuid)}else i.shapes.push(o.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}class Vm extends Fm{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,u,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Vm(t.radius,t.detail)}}class xs extends Sn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,f=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,v=p+1,g=t/d,y=i/p,x=[],E=[],b=[],M=[];for(let _=0;_<v;_++){const D=_*y-f;for(let R=0;R<m;R++){const T=R*g-u;E.push(T,-D,0),b.push(0,0,1),M.push(R/d),M.push(1-_/p)}}for(let _=0;_<p;_++)for(let D=0;D<d;D++){const R=D+m*_,T=D+m*(_+1),L=D+1+m*(_+1),z=D+1+m*_;x.push(R,T,z),x.push(T,L,z)}this.setIndex(x),this.setAttribute("position",new Ze(E,3)),this.setAttribute("normal",new Ze(b,3)),this.setAttribute("uv",new Ze(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xs(t.width,t.height,t.widthSegments,t.heightSegments)}}class km extends Sn{constructor(t=.5,i=1,s=32,l=1,u=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:u,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const d=[],p=[],m=[],v=[];let g=t;const y=(i-t)/l,x=new V,E=new Ht;for(let b=0;b<=l;b++){for(let M=0;M<=s;M++){const _=u+M/s*f;x.x=g*Math.cos(_),x.y=g*Math.sin(_),p.push(x.x,x.y,x.z),m.push(0,0,1),E.x=(x.x/i+1)/2,E.y=(x.y/i+1)/2,v.push(E.x,E.y)}g+=y}for(let b=0;b<l;b++){const M=b*(s+1);for(let _=0;_<s;_++){const D=_+M,R=D,T=D+s+1,L=D+s+2,z=D+1;d.push(R,T,z),d.push(T,L,z)}}this.setIndex(d),this.setAttribute("position",new Ze(p,3)),this.setAttribute("normal",new Ze(m,3)),this.setAttribute("uv",new Ze(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new km(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class za extends Sn{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(f+d,Math.PI);let m=0;const v=[],g=new V,y=new V,x=[],E=[],b=[],M=[];for(let _=0;_<=s;_++){const D=[],R=_/s;let T=0;_===0&&f===0?T=.5/i:_===s&&p===Math.PI&&(T=-.5/i);for(let L=0;L<=i;L++){const z=L/i;g.x=-t*Math.cos(l+z*u)*Math.sin(f+R*d),g.y=t*Math.cos(f+R*d),g.z=t*Math.sin(l+z*u)*Math.sin(f+R*d),E.push(g.x,g.y,g.z),y.copy(g).normalize(),b.push(y.x,y.y,y.z),M.push(z+T,1-R),D.push(m++)}v.push(D)}for(let _=0;_<s;_++)for(let D=0;D<i;D++){const R=v[_][D+1],T=v[_][D],L=v[_+1][D],z=v[_+1][D+1];(_!==0||f>0)&&x.push(R,T,z),(_!==s-1||p<Math.PI)&&x.push(T,L,z)}this.setIndex(x),this.setAttribute("position",new Ze(E,3)),this.setAttribute("normal",new Ze(b,3)),this.setAttribute("uv",new Ze(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new za(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class uf extends Sn{constructor(t=new cS(new V(-1,-1,0),new V(-1,1,0),new V(1,1,0)),i=64,s=1,l=8,u=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:l,closed:u};const f=t.computeFrenetFrames(i,u);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const d=new V,p=new V,m=new Ht;let v=new V;const g=[],y=[],x=[],E=[];b(),this.setIndex(E),this.setAttribute("position",new Ze(g,3)),this.setAttribute("normal",new Ze(y,3)),this.setAttribute("uv",new Ze(x,2));function b(){for(let R=0;R<i;R++)M(R);M(u===!1?i:0),D(),_()}function M(R){v=t.getPointAt(R/i,v);const T=f.normals[R],L=f.binormals[R];for(let z=0;z<=l;z++){const P=z/l*Math.PI*2,I=Math.sin(P),N=-Math.cos(P);p.x=N*T.x+I*L.x,p.y=N*T.y+I*L.y,p.z=N*T.z+I*L.z,p.normalize(),y.push(p.x,p.y,p.z),d.x=v.x+s*p.x,d.y=v.y+s*p.y,d.z=v.z+s*p.z,g.push(d.x,d.y,d.z)}}function _(){for(let R=1;R<=i;R++)for(let T=1;T<=l;T++){const L=(l+1)*(R-1)+(T-1),z=(l+1)*R+(T-1),P=(l+1)*R+T,I=(l+1)*(R-1)+T;E.push(L,z,I),E.push(z,P,I)}}function D(){for(let R=0;R<=i;R++)for(let T=0;T<=l;T++)m.x=R/i,m.y=T/l,x.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new uf(new of[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Bb extends en{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Jc extends ur{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Yx,this.normalScale=new Ht(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fb extends ur{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=tT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Hb extends ur{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class gS extends xn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ue(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class Gb extends gS{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ue(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Sp=new Ve,Zy=new V,Qy=new V;class Vb{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ht(512,512),this.mapType=qi,this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zm,this._frameExtents=new Ht(1,1),this._viewportCount=1,this._viewports=[new fn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Zy.setFromMatrixPosition(t.matrixWorld),i.position.copy(Zy),Qy.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Qy),i.updateMatrixWorld(),Sp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sp,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Sp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Xm extends eS{constructor(t=-1,i=1,s=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,f=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class kb extends Vb{constructor(){super(new Xm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Xb extends gS{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new kb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class qb extends vi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class vS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Ky(o,t,i,s){const l=Yb(s);switch(i){case kx:return o*t;case Rm:return o*t/l.components*l.byteLength;case Dm:return o*t/l.components*l.byteLength;case qx:return o*t*2/l.components*l.byteLength;case Nm:return o*t*2/l.components*l.byteLength;case Xx:return o*t*3/l.components*l.byteLength;case ki:return o*t*4/l.components*l.byteLength;case Um:return o*t*4/l.components*l.byteLength;case Wc:case Zc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Qc:case Kc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case kp:case qp:return Math.max(o,16)*Math.max(t,8)/4;case Vp:case Xp:return Math.max(o,8)*Math.max(t,8)/2;case Yp:case jp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Wp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Zp:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Qp:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Kp:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Jp:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case $p:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case tm:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case em:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case nm:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case im:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case am:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case sm:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case rm:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case om:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case lm:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case um:case cm:case fm:return Math.ceil(o/4)*Math.ceil(t/4)*16;case hm:case dm:return Math.ceil(o/4)*Math.ceil(t/4)*8;case pm:case mm:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Yb(o){switch(o){case qi:case Fx:return{byteLength:1,components:1};case Ol:case Hx:case Xi:return{byteLength:2,components:1};case wm:case Cm:return{byteLength:2,components:4};case ar:case Am:case ra:return{byteLength:4,components:1};case Gx:case Vx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function _S(){let o=null,t=!1,i=null,s=null;function l(u,f){i(u,f),s=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function jb(o){const t=new WeakMap;function i(d,p){const m=d.array,v=d.usage,g=m.byteLength,y=o.createBuffer();o.bindBuffer(p,y),o.bufferData(p,m,v),d.onUploadCallback();let x;if(m instanceof Float32Array)x=o.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)x=o.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?x=o.HALF_FLOAT:x=o.UNSIGNED_SHORT;else if(m instanceof Int16Array)x=o.SHORT;else if(m instanceof Uint32Array)x=o.UNSIGNED_INT;else if(m instanceof Int32Array)x=o.INT;else if(m instanceof Int8Array)x=o.BYTE;else if(m instanceof Uint8Array)x=o.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)x=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:x,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,p,m){const v=p.array,g=p.updateRanges;if(o.bindBuffer(m,d),g.length===0)o.bufferSubData(m,0,v);else{g.sort((x,E)=>x.start-E.start);let y=0;for(let x=1;x<g.length;x++){const E=g[y],b=g[x];b.start<=E.start+E.count+1?E.count=Math.max(E.count,b.start+b.count-E.start):(++y,g[y]=b)}g.length=y+1;for(let x=0,E=g.length;x<E;x++){const b=g[x];o.bufferSubData(m,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(o.deleteBuffer(p.buffer),t.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:f}}var Wb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zb=`#ifdef USE_ALPHAHASH
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
#endif`,Qb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Kb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$b=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tA=`#ifdef USE_AOMAP
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
#endif`,eA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nA=`#ifdef USE_BATCHING
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
#endif`,iA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,aA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oA=`#ifdef USE_IRIDESCENCE
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
#endif`,lA=`#ifdef USE_BUMPMAP
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
#endif`,uA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vA=`#define PI 3.141592653589793
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
} // validated`,_A=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,yA=`vec3 transformedNormal = objectNormal;
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
#endif`,xA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,MA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,TA="gl_FragColor = linearToOutputTexel( gl_FragColor );",bA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AA=`#ifdef USE_ENVMAP
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
#endif`,wA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,CA=`#ifdef USE_ENVMAP
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
#endif`,RA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DA=`#ifdef USE_ENVMAP
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
#endif`,NA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,UA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,PA=`#ifdef USE_GRADIENTMAP
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
}`,zA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,IA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,FA=`uniform bool receiveShadow;
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
#endif`,HA=`#ifdef USE_ENVMAP
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
#endif`,GA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qA=`PhysicalMaterial material;
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
#endif`,YA=`struct PhysicalMaterial {
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
}`,jA=`
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
#endif`,WA=`#if defined( RE_IndirectDiffuse )
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
#endif`,ZA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$A=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,t2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,e2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,n2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,i2=`#if defined( USE_POINTS_UV )
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
#endif`,a2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,s2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,r2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,o2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,l2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,u2=`#ifdef USE_MORPHTARGETS
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
#endif`,c2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,f2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,h2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,d2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,p2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,m2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,g2=`#ifdef USE_NORMALMAP
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
#endif`,v2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,y2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,x2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,S2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,M2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,E2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,T2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,b2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,A2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,w2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,C2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,R2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,D2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,N2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,U2=`float getShadowMask() {
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
}`,L2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,O2=`#ifdef USE_SKINNING
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
#endif`,P2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,z2=`#ifdef USE_SKINNING
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
#endif`,I2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,B2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,F2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,H2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,G2=`#ifdef USE_TRANSMISSION
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
#endif`,V2=`#ifdef USE_TRANSMISSION
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
#endif`,k2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,X2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Y2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const j2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,W2=`uniform sampler2D t2D;
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
}`,Z2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Q2=`#ifdef ENVMAP_TYPE_CUBE
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
}`,K2=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,J2=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$2=`#include <common>
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
}`,tw=`#if DEPTH_PACKING == 3200
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
}`,ew=`#define DISTANCE
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
}`,nw=`#define DISTANCE
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
}`,iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,aw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sw=`uniform float scale;
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
}`,rw=`uniform vec3 diffuse;
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
}`,ow=`#include <common>
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
}`,lw=`uniform vec3 diffuse;
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
}`,uw=`#define LAMBERT
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
}`,cw=`#define LAMBERT
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
}`,fw=`#define MATCAP
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
}`,hw=`#define MATCAP
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
}`,dw=`#define NORMAL
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
}`,pw=`#define NORMAL
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
}`,mw=`#define PHONG
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
}`,gw=`#define PHONG
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
}`,vw=`#define STANDARD
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
}`,_w=`#define STANDARD
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
}`,yw=`#define TOON
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
}`,xw=`#define TOON
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
}`,Sw=`uniform float size;
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
}`,Mw=`uniform vec3 diffuse;
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
}`,Ew=`#include <common>
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
}`,Tw=`uniform vec3 color;
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
}`,bw=`uniform float rotation;
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
}`,Aw=`uniform vec3 diffuse;
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
}`,Me={alphahash_fragment:Wb,alphahash_pars_fragment:Zb,alphamap_fragment:Qb,alphamap_pars_fragment:Kb,alphatest_fragment:Jb,alphatest_pars_fragment:$b,aomap_fragment:tA,aomap_pars_fragment:eA,batching_pars_vertex:nA,batching_vertex:iA,begin_vertex:aA,beginnormal_vertex:sA,bsdfs:rA,iridescence_fragment:oA,bumpmap_pars_fragment:lA,clipping_planes_fragment:uA,clipping_planes_pars_fragment:cA,clipping_planes_pars_vertex:fA,clipping_planes_vertex:hA,color_fragment:dA,color_pars_fragment:pA,color_pars_vertex:mA,color_vertex:gA,common:vA,cube_uv_reflection_fragment:_A,defaultnormal_vertex:yA,displacementmap_pars_vertex:xA,displacementmap_vertex:SA,emissivemap_fragment:MA,emissivemap_pars_fragment:EA,colorspace_fragment:TA,colorspace_pars_fragment:bA,envmap_fragment:AA,envmap_common_pars_fragment:wA,envmap_pars_fragment:CA,envmap_pars_vertex:RA,envmap_physical_pars_fragment:HA,envmap_vertex:DA,fog_vertex:NA,fog_pars_vertex:UA,fog_fragment:LA,fog_pars_fragment:OA,gradientmap_pars_fragment:PA,lightmap_pars_fragment:zA,lights_lambert_fragment:IA,lights_lambert_pars_fragment:BA,lights_pars_begin:FA,lights_toon_fragment:GA,lights_toon_pars_fragment:VA,lights_phong_fragment:kA,lights_phong_pars_fragment:XA,lights_physical_fragment:qA,lights_physical_pars_fragment:YA,lights_fragment_begin:jA,lights_fragment_maps:WA,lights_fragment_end:ZA,logdepthbuf_fragment:QA,logdepthbuf_pars_fragment:KA,logdepthbuf_pars_vertex:JA,logdepthbuf_vertex:$A,map_fragment:t2,map_pars_fragment:e2,map_particle_fragment:n2,map_particle_pars_fragment:i2,metalnessmap_fragment:a2,metalnessmap_pars_fragment:s2,morphinstance_vertex:r2,morphcolor_vertex:o2,morphnormal_vertex:l2,morphtarget_pars_vertex:u2,morphtarget_vertex:c2,normal_fragment_begin:f2,normal_fragment_maps:h2,normal_pars_fragment:d2,normal_pars_vertex:p2,normal_vertex:m2,normalmap_pars_fragment:g2,clearcoat_normal_fragment_begin:v2,clearcoat_normal_fragment_maps:_2,clearcoat_pars_fragment:y2,iridescence_pars_fragment:x2,opaque_fragment:S2,packing:M2,premultiplied_alpha_fragment:E2,project_vertex:T2,dithering_fragment:b2,dithering_pars_fragment:A2,roughnessmap_fragment:w2,roughnessmap_pars_fragment:C2,shadowmap_pars_fragment:R2,shadowmap_pars_vertex:D2,shadowmap_vertex:N2,shadowmask_pars_fragment:U2,skinbase_vertex:L2,skinning_pars_vertex:O2,skinning_vertex:P2,skinnormal_vertex:z2,specularmap_fragment:I2,specularmap_pars_fragment:B2,tonemapping_fragment:F2,tonemapping_pars_fragment:H2,transmission_fragment:G2,transmission_pars_fragment:V2,uv_pars_fragment:k2,uv_pars_vertex:X2,uv_vertex:q2,worldpos_vertex:Y2,background_vert:j2,background_frag:W2,backgroundCube_vert:Z2,backgroundCube_frag:Q2,cube_vert:K2,cube_frag:J2,depth_vert:$2,depth_frag:tw,distanceRGBA_vert:ew,distanceRGBA_frag:nw,equirect_vert:iw,equirect_frag:aw,linedashed_vert:sw,linedashed_frag:rw,meshbasic_vert:ow,meshbasic_frag:lw,meshlambert_vert:uw,meshlambert_frag:cw,meshmatcap_vert:fw,meshmatcap_frag:hw,meshnormal_vert:dw,meshnormal_frag:pw,meshphong_vert:mw,meshphong_frag:gw,meshphysical_vert:vw,meshphysical_frag:_w,meshtoon_vert:yw,meshtoon_frag:xw,points_vert:Sw,points_frag:Mw,shadow_vert:Ew,shadow_frag:Tw,sprite_vert:bw,sprite_frag:Aw},Wt={common:{diffuse:{value:new ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},envMapRotation:{value:new ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new Ht(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new ue(16777215)},opacity:{value:1},center:{value:new Ht(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}}},aa={basic:{uniforms:Jn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:Jn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new ue(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:Jn([Wt.common,Wt.specularmap,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,Wt.lights,{emissive:{value:new ue(0)},specular:{value:new ue(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:Jn([Wt.common,Wt.envmap,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.roughnessmap,Wt.metalnessmap,Wt.fog,Wt.lights,{emissive:{value:new ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:Jn([Wt.common,Wt.aomap,Wt.lightmap,Wt.emissivemap,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.gradientmap,Wt.fog,Wt.lights,{emissive:{value:new ue(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:Jn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,Wt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:Jn([Wt.points,Wt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:Jn([Wt.common,Wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:Jn([Wt.common,Wt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:Jn([Wt.common,Wt.bumpmap,Wt.normalmap,Wt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:Jn([Wt.sprite,Wt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ye}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distanceRGBA:{uniforms:Jn([Wt.common,Wt.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distanceRGBA_vert,fragmentShader:Me.distanceRGBA_frag},shadow:{uniforms:Jn([Wt.lights,Wt.fog,{color:{value:new ue(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};aa.physical={uniforms:Jn([aa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new Ht(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new Ht},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new ue(0)},specularColor:{value:new ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye},anisotropyVector:{value:new Ht},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ye}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const Gc={r:0,b:0,g:0},Zs=new xi,ww=new Ve;function Cw(o,t,i,s,l,u,f){const d=new ue(0);let p=u===!0?0:1,m,v,g=null,y=0,x=null;function E(R){let T=R.isScene===!0?R.background:null;return T&&T.isTexture&&(T=(R.backgroundBlurriness>0?i:t).get(T)),T}function b(R){let T=!1;const L=E(R);L===null?_(d,p):L&&L.isColor&&(_(L,1),T=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(o.autoClear||T)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function M(R,T){const L=E(T);L&&(L.isCubeTexture||L.mapping===ff)?(v===void 0&&(v=new an(new cr(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Mo(aa.backgroundCube.uniforms),vertexShader:aa.backgroundCube.vertexShader,fragmentShader:aa.backgroundCube.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(z,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Zs.copy(T.backgroundRotation),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),v.material.uniforms.envMap.value=L,v.material.uniforms.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(ww.makeRotationFromEuler(Zs)),v.material.toneMapped=Le.getTransfer(L.colorSpace)!==Ye,(g!==L||y!==L.version||x!==o.toneMapping)&&(v.material.needsUpdate=!0,g=L,y=L.version,x=o.toneMapping),v.layers.enableAll(),R.unshift(v,v.geometry,v.material,0,0,null)):L&&L.isTexture&&(m===void 0&&(m=new an(new xs(2,2),new en({name:"BackgroundMaterial",uniforms:Mo(aa.background.uniforms),vertexShader:aa.background.vertexShader,fragmentShader:aa.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=L,m.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,m.material.toneMapped=Le.getTransfer(L.colorSpace)!==Ye,L.matrixAutoUpdate===!0&&L.updateMatrix(),m.material.uniforms.uvTransform.value.copy(L.matrix),(g!==L||y!==L.version||x!==o.toneMapping)&&(m.material.needsUpdate=!0,g=L,y=L.version,x=o.toneMapping),m.layers.enableAll(),R.unshift(m,m.geometry,m.material,0,0,null))}function _(R,T){R.getRGB(Gc,tS(o)),s.buffers.color.setClear(Gc.r,Gc.g,Gc.b,T,f)}function D(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(R,T=1){d.set(R),p=T,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(R){p=R,_(d,p)},render:b,addToRenderList:M,dispose:D}}function Rw(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=y(null);let u=l,f=!1;function d(A,F,Z,U,Y){let q=!1;const k=g(U,Z,F);u!==k&&(u=k,m(u.object)),q=x(A,U,Z,Y),q&&E(A,U,Z,Y),Y!==null&&t.update(Y,o.ELEMENT_ARRAY_BUFFER),(q||f)&&(f=!1,T(A,F,Z,U),Y!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function p(){return o.createVertexArray()}function m(A){return o.bindVertexArray(A)}function v(A){return o.deleteVertexArray(A)}function g(A,F,Z){const U=Z.wireframe===!0;let Y=s[A.id];Y===void 0&&(Y={},s[A.id]=Y);let q=Y[F.id];q===void 0&&(q={},Y[F.id]=q);let k=q[U];return k===void 0&&(k=y(p()),q[U]=k),k}function y(A){const F=[],Z=[],U=[];for(let Y=0;Y<i;Y++)F[Y]=0,Z[Y]=0,U[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:Z,attributeDivisors:U,object:A,attributes:{},index:null}}function x(A,F,Z,U){const Y=u.attributes,q=F.attributes;let k=0;const $=Z.getAttributes();for(const Q in $)if($[Q].location>=0){const St=Y[Q];let At=q[Q];if(At===void 0&&(Q==="instanceMatrix"&&A.instanceMatrix&&(At=A.instanceMatrix),Q==="instanceColor"&&A.instanceColor&&(At=A.instanceColor)),St===void 0||St.attribute!==At||At&&St.data!==At.data)return!0;k++}return u.attributesNum!==k||u.index!==U}function E(A,F,Z,U){const Y={},q=F.attributes;let k=0;const $=Z.getAttributes();for(const Q in $)if($[Q].location>=0){let St=q[Q];St===void 0&&(Q==="instanceMatrix"&&A.instanceMatrix&&(St=A.instanceMatrix),Q==="instanceColor"&&A.instanceColor&&(St=A.instanceColor));const At={};At.attribute=St,St&&St.data&&(At.data=St.data),Y[Q]=At,k++}u.attributes=Y,u.attributesNum=k,u.index=U}function b(){const A=u.newAttributes;for(let F=0,Z=A.length;F<Z;F++)A[F]=0}function M(A){_(A,0)}function _(A,F){const Z=u.newAttributes,U=u.enabledAttributes,Y=u.attributeDivisors;Z[A]=1,U[A]===0&&(o.enableVertexAttribArray(A),U[A]=1),Y[A]!==F&&(o.vertexAttribDivisor(A,F),Y[A]=F)}function D(){const A=u.newAttributes,F=u.enabledAttributes;for(let Z=0,U=F.length;Z<U;Z++)F[Z]!==A[Z]&&(o.disableVertexAttribArray(Z),F[Z]=0)}function R(A,F,Z,U,Y,q,k){k===!0?o.vertexAttribIPointer(A,F,Z,Y,q):o.vertexAttribPointer(A,F,Z,U,Y,q)}function T(A,F,Z,U){b();const Y=U.attributes,q=Z.getAttributes(),k=F.defaultAttributeValues;for(const $ in q){const Q=q[$];if(Q.location>=0){let gt=Y[$];if(gt===void 0&&($==="instanceMatrix"&&A.instanceMatrix&&(gt=A.instanceMatrix),$==="instanceColor"&&A.instanceColor&&(gt=A.instanceColor)),gt!==void 0){const St=gt.normalized,At=gt.itemSize,qt=t.get(gt);if(qt===void 0)continue;const Ot=qt.buffer,G=qt.type,ft=qt.bytesPerElement,j=G===o.INT||G===o.UNSIGNED_INT||gt.gpuType===Am;if(gt.isInterleavedBufferAttribute){const et=gt.data,xt=et.stride,Ct=gt.offset;if(et.isInstancedInterleavedBuffer){for(let wt=0;wt<Q.locationSize;wt++)_(Q.location+wt,et.meshPerAttribute);A.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let wt=0;wt<Q.locationSize;wt++)M(Q.location+wt);o.bindBuffer(o.ARRAY_BUFFER,Ot);for(let wt=0;wt<Q.locationSize;wt++)R(Q.location+wt,At/Q.locationSize,G,St,xt*ft,(Ct+At/Q.locationSize*wt)*ft,j)}else{if(gt.isInstancedBufferAttribute){for(let et=0;et<Q.locationSize;et++)_(Q.location+et,gt.meshPerAttribute);A.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let et=0;et<Q.locationSize;et++)M(Q.location+et);o.bindBuffer(o.ARRAY_BUFFER,Ot);for(let et=0;et<Q.locationSize;et++)R(Q.location+et,At/Q.locationSize,G,St,At*ft,At/Q.locationSize*et*ft,j)}}else if(k!==void 0){const St=k[$];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(Q.location,St);break;case 3:o.vertexAttrib3fv(Q.location,St);break;case 4:o.vertexAttrib4fv(Q.location,St);break;default:o.vertexAttrib1fv(Q.location,St)}}}}D()}function L(){I();for(const A in s){const F=s[A];for(const Z in F){const U=F[Z];for(const Y in U)v(U[Y].object),delete U[Y];delete F[Z]}delete s[A]}}function z(A){if(s[A.id]===void 0)return;const F=s[A.id];for(const Z in F){const U=F[Z];for(const Y in U)v(U[Y].object),delete U[Y];delete F[Z]}delete s[A.id]}function P(A){for(const F in s){const Z=s[F];if(Z[A.id]===void 0)continue;const U=Z[A.id];for(const Y in U)v(U[Y].object),delete U[Y];delete Z[A.id]}}function I(){N(),f=!0,u!==l&&(u=l,m(u.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:I,resetDefaultState:N,dispose:L,releaseStatesOfGeometry:z,releaseStatesOfProgram:P,initAttributes:b,enableAttribute:M,disableUnusedAttributes:D}}function Dw(o,t,i){let s;function l(m){s=m}function u(m,v){o.drawArrays(s,m,v),i.update(v,s,1)}function f(m,v,g){g!==0&&(o.drawArraysInstanced(s,m,v,g),i.update(v,s,g))}function d(m,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,v,0,g);let x=0;for(let E=0;E<g;E++)x+=v[E];i.update(x,s,1)}function p(m,v,g,y){if(g===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<m.length;E++)f(m[E],v[E],y[E]);else{x.multiDrawArraysInstancedWEBGL(s,m,0,v,0,y,0,g);let E=0;for(let b=0;b<g;b++)E+=v[b]*y[b];i.update(E,s,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Nw(o,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(P){return!(P!==ki&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const I=P===Xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==qi&&s.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ra&&!I)}function p(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_TEXTURE_SIZE),M=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),D=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),R=o.getParameter(o.MAX_VARYING_VECTORS),T=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),L=E>0,z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:x,maxVertexTextures:E,maxTextureSize:b,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:D,maxVaryings:R,maxFragmentUniforms:T,vertexTextures:L,maxSamples:z}}function Uw(o){const t=this;let i=null,s=0,l=!1,u=!1;const f=new Ks,d=new ye,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const x=g.length!==0||y||s!==0||l;return l=y,s=g.length,x},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,y){i=v(g,y,0)},this.setState=function(g,y,x){const E=g.clippingPlanes,b=g.clipIntersection,M=g.clipShadows,_=o.get(g);if(!l||E===null||E.length===0||u&&!M)u?v(null):m();else{const D=u?0:s,R=D*4;let T=_.clippingState||null;p.value=T,T=v(E,y,R,x);for(let L=0;L!==R;++L)T[L]=i[L];_.clippingState=T,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=D}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(g,y,x,E){const b=g!==null?g.length:0;let M=null;if(b!==0){if(M=p.value,E!==!0||M===null){const _=x+b*4,D=y.matrixWorldInverse;d.getNormalMatrix(D),(M===null||M.length<_)&&(M=new Float32Array(_));for(let R=0,T=x;R!==b;++R,T+=4)f.copy(g[R]).applyMatrix4(D,d),f.normal.toArray(M,T),M[T+3]=f.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=b,t.numIntersection=0,M}}function Lw(o){let t=new WeakMap;function i(f,d){return d===Bp?f.mapping=yo:d===Fp&&(f.mapping=xo),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===Bp||d===Fp)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new ZT(p.height);return m.fromEquirectangularTexture(o,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const mo=4,Jy=[.125,.215,.35,.446,.526,.582],tr=20,Mp=new Xm,$y=new ue;let Ep=null,Tp=0,bp=0,Ap=!1;const Js=(1+Math.sqrt(5))/2,fo=1/Js,tx=[new V(-Js,fo,0),new V(Js,fo,0),new V(-fo,0,Js),new V(fo,0,Js),new V(0,Js,-fo),new V(0,Js,fo),new V(-1,1,-1),new V(1,1,-1),new V(-1,1,1),new V(1,1,1)],Ow=new V;class ex{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,u={}){const{size:f=256,position:d=Ow}=u;Ep=this._renderer.getRenderTarget(),Tp=this._renderer.getActiveCubeFace(),bp=this._renderer.getActiveMipmapLevel(),Ap=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ax(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ix(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ep,Tp,bp),this._renderer.xr.enabled=Ap,t.scissorTest=!1,Vc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===yo||t.mapping===xo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ep=this._renderer.getRenderTarget(),Tp=this._renderer.getActiveCubeFace(),bp=this._renderer.getActiveMipmapLevel(),Ap=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:sa,minFilter:sa,generateMipmaps:!1,type:Xi,format:ki,colorSpace:So,depthBuffer:!1},l=nx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nx(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pw(u)),this._blurMaterial=zw(u,t,i)}return l}_compileMaterial(t){const i=new an(this._lodPlanes[0],t);this._renderer.compile(i,Mp)}_sceneToCubeUV(t,i,s,l,u){const p=new vi(90,1,i,s),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,x=g.toneMapping;g.getClearColor($y),g.toneMapping=Oa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const b=new _s({name:"PMREM.Background",side:Xn,depthWrite:!1,depthTest:!1}),M=new an(new cr,b);let _=!1;const D=t.background;D?D.isColor&&(b.color.copy(D),t.background=null,_=!0):(b.color.copy($y),_=!0);for(let R=0;R<6;R++){const T=R%3;T===0?(p.up.set(0,m[R],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+v[R],u.y,u.z)):T===1?(p.up.set(0,0,m[R]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+v[R],u.z)):(p.up.set(0,m[R],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+v[R]));const L=this._cubeSize;Vc(l,T*L,R>2?L:0,L,L),g.setRenderTarget(l),_&&g.render(M,p),g.render(t,p)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=x,g.autoClear=y,t.background=D}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===yo||t.mapping===xo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=ax()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ix());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new an(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const p=this._cubeSize;Vc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(f,Mp)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=tx[(l-u-1)%tx.length];this._blur(t,u-1,u,f,d)}i.autoClear=s}_blur(t,i,s,l,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",u),this._halfBlur(f,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new an(this._lodPlanes[l],m),y=m.uniforms,x=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*x):2*Math.PI/(2*tr-1),b=u/E,M=isFinite(u)?1+Math.floor(v*b):tr;M>tr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${tr}`);const _=[];let D=0;for(let P=0;P<tr;++P){const I=P/b,N=Math.exp(-I*I/2);_.push(N),P===0?D+=N:P<M&&(D+=2*N)}for(let P=0;P<_.length;P++)_[P]=_[P]/D;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=_,y.latitudinal.value=f==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:R}=this;y.dTheta.value=E,y.mipInt.value=R-s;const T=this._sizeLods[l],L=3*T*(l>R-mo?l-R+mo:0),z=4*(this._cubeSize-T);Vc(i,L,z,3*T,2*T),p.setRenderTarget(i),p.render(g,Mp)}}function Pw(o){const t=[],i=[],s=[];let l=o;const u=o-mo+1+Jy.length;for(let f=0;f<u;f++){const d=Math.pow(2,l);i.push(d);let p=1/d;f>o-mo?p=Jy[f-o+mo-1]:f===0&&(p=0),s.push(p);const m=1/(d-2),v=-m,g=1+m,y=[v,v,g,v,g,g,v,v,g,g,v,g],x=6,E=6,b=3,M=2,_=1,D=new Float32Array(b*E*x),R=new Float32Array(M*E*x),T=new Float32Array(_*E*x);for(let z=0;z<x;z++){const P=z%3*2/3-1,I=z>2?0:-1,N=[P,I,0,P+2/3,I,0,P+2/3,I+1,0,P,I,0,P+2/3,I+1,0,P,I+1,0];D.set(N,b*E*z),R.set(y,M*E*z);const A=[z,z,z,z,z,z];T.set(A,_*E*z)}const L=new Sn;L.setAttribute("position",new hn(D,b)),L.setAttribute("uv",new hn(R,M)),L.setAttribute("faceIndex",new hn(T,_)),t.push(L),l>mo&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function nx(o,t,i){const s=new Ui(o,t,i);return s.texture.mapping=ff,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Vc(o,t,i,s,l){o.viewport.set(t,i,s,l),o.scissor.set(t,i,s,l)}function zw(o,t,i){const s=new Float32Array(tr),l=new V(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:qm(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function ix(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qm(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function ax(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function qm(){return`

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
	`}function Iw(o){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Bp||p===Fp,v=p===yo||p===xo;if(m||v){let g=t.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new ex(o)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const x=d.image;return m&&x&&x.height>0||v&&x&&l(x)?(i===null&&(i=new ex(o)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function l(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Bw(o){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Fl("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function Fw(o,t,i,s){const l={},u=new WeakMap;function f(g){const y=g.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",f),delete l[y.id];const x=u.get(y);x&&(t.remove(x),u.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(g,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function p(g){const y=g.attributes;for(const x in y)t.update(y[x],o.ARRAY_BUFFER)}function m(g){const y=[],x=g.index,E=g.attributes.position;let b=0;if(x!==null){const D=x.array;b=x.version;for(let R=0,T=D.length;R<T;R+=3){const L=D[R+0],z=D[R+1],P=D[R+2];y.push(L,z,z,P,P,L)}}else if(E!==void 0){const D=E.array;b=E.version;for(let R=0,T=D.length/3-1;R<T;R+=3){const L=R+0,z=R+1,P=R+2;y.push(L,z,z,P,P,L)}}else return;const M=new(Wx(y)?$x:Jx)(y,1);M.version=b;const _=u.get(g);_&&t.remove(_),u.set(g,M)}function v(g){const y=u.get(g);if(y){const x=g.index;x!==null&&y.version<x.version&&m(g)}else m(g);return u.get(g)}return{get:d,update:p,getWireframeAttribute:v}}function Hw(o,t,i){let s;function l(y){s=y}let u,f;function d(y){u=y.type,f=y.bytesPerElement}function p(y,x){o.drawElements(s,x,u,y*f),i.update(x,s,1)}function m(y,x,E){E!==0&&(o.drawElementsInstanced(s,x,u,y*f,E),i.update(x,s,E))}function v(y,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,u,y,0,E);let M=0;for(let _=0;_<E;_++)M+=x[_];i.update(M,s,1)}function g(y,x,E,b){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<y.length;_++)m(y[_]/f,x[_],b[_]);else{M.multiDrawElementsInstancedWEBGL(s,x,0,u,y,0,b,0,E);let _=0;for(let D=0;D<E;D++)_+=x[D]*b[D];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function Gw(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,f,d){switch(i.calls++,f){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Vw(o,t,i){const s=new WeakMap,l=new fn;function u(f,d,p){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let y=s.get(d);if(y===void 0||y.count!==g){let A=function(){I.dispose(),s.delete(d),d.removeEventListener("dispose",A)};var x=A;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,b=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],R=d.morphAttributes.color||[];let T=0;E===!0&&(T=1),b===!0&&(T=2),M===!0&&(T=3);let L=d.attributes.position.count*T,z=1;L>t.maxTextureSize&&(z=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const P=new Float32Array(L*z*4*g),I=new Zx(P,L,z,g);I.type=ra,I.needsUpdate=!0;const N=T*4;for(let F=0;F<g;F++){const Z=_[F],U=D[F],Y=R[F],q=L*z*4*F;for(let k=0;k<Z.count;k++){const $=k*N;E===!0&&(l.fromBufferAttribute(Z,k),P[q+$+0]=l.x,P[q+$+1]=l.y,P[q+$+2]=l.z,P[q+$+3]=0),b===!0&&(l.fromBufferAttribute(U,k),P[q+$+4]=l.x,P[q+$+5]=l.y,P[q+$+6]=l.z,P[q+$+7]=0),M===!0&&(l.fromBufferAttribute(Y,k),P[q+$+8]=l.x,P[q+$+9]=l.y,P[q+$+10]=l.z,P[q+$+11]=Y.itemSize===4?l.w:1)}}y={count:g,texture:I,size:new Ht(L,z)},s.set(d,y),d.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<m.length;M++)E+=m[M];const b=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(o,"morphTargetBaseInfluence",b),p.getUniforms().setValue(o,"morphTargetInfluences",m)}p.getUniforms().setValue(o,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",y.size)}return{update:u}}function kw(o,t,i,s){let l=new WeakMap;function u(p){const m=s.render.frame,v=p.geometry,g=t.get(p,v);if(l.get(g)!==m&&(t.update(g),l.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return g}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:f}}const yS=new qn,sx=new sS(1,1),xS=new Zx,SS=new LT,MS=new nS,rx=[],ox=[],lx=new Float32Array(16),ux=new Float32Array(9),cx=new Float32Array(4);function Ao(o,t,i){const s=o[0];if(s<=0||s>0)return o;const l=t*i;let u=rx[l];if(u===void 0&&(u=new Float32Array(l),rx[l]=u),t!==0){s.toArray(u,0);for(let f=1,d=0;f!==t;++f)d+=i,o[f].toArray(u,d)}return u}function An(o,t){if(o.length!==t.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==t[i])return!1;return!0}function wn(o,t){for(let i=0,s=t.length;i<s;i++)o[i]=t[i]}function hf(o,t){let i=ox[t];i===void 0&&(i=new Int32Array(t),ox[t]=i);for(let s=0;s!==t;++s)i[s]=o.allocateTextureUnit();return i}function Xw(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function qw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(An(i,t))return;o.uniform2fv(this.addr,t),wn(i,t)}}function Yw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(An(i,t))return;o.uniform3fv(this.addr,t),wn(i,t)}}function jw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(An(i,t))return;o.uniform4fv(this.addr,t),wn(i,t)}}function Ww(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(An(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),wn(i,t)}else{if(An(i,s))return;cx.set(s),o.uniformMatrix2fv(this.addr,!1,cx),wn(i,s)}}function Zw(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(An(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),wn(i,t)}else{if(An(i,s))return;ux.set(s),o.uniformMatrix3fv(this.addr,!1,ux),wn(i,s)}}function Qw(o,t){const i=this.cache,s=t.elements;if(s===void 0){if(An(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),wn(i,t)}else{if(An(i,s))return;lx.set(s),o.uniformMatrix4fv(this.addr,!1,lx),wn(i,s)}}function Kw(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function Jw(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(An(i,t))return;o.uniform2iv(this.addr,t),wn(i,t)}}function $w(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(An(i,t))return;o.uniform3iv(this.addr,t),wn(i,t)}}function tC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(An(i,t))return;o.uniform4iv(this.addr,t),wn(i,t)}}function eC(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function nC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(An(i,t))return;o.uniform2uiv(this.addr,t),wn(i,t)}}function iC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(An(i,t))return;o.uniform3uiv(this.addr,t),wn(i,t)}}function aC(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(An(i,t))return;o.uniform4uiv(this.addr,t),wn(i,t)}}function sC(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(sx.compareFunction=jx,u=sx):u=yS,i.setTexture2D(t||u,l)}function rC(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||SS,l)}function oC(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||MS,l)}function lC(o,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||xS,l)}function uC(o){switch(o){case 5126:return Xw;case 35664:return qw;case 35665:return Yw;case 35666:return jw;case 35674:return Ww;case 35675:return Zw;case 35676:return Qw;case 5124:case 35670:return Kw;case 35667:case 35671:return Jw;case 35668:case 35672:return $w;case 35669:case 35673:return tC;case 5125:return eC;case 36294:return nC;case 36295:return iC;case 36296:return aC;case 35678:case 36198:case 36298:case 36306:case 35682:return sC;case 35679:case 36299:case 36307:return rC;case 35680:case 36300:case 36308:case 36293:return oC;case 36289:case 36303:case 36311:case 36292:return lC}}function cC(o,t){o.uniform1fv(this.addr,t)}function fC(o,t){const i=Ao(t,this.size,2);o.uniform2fv(this.addr,i)}function hC(o,t){const i=Ao(t,this.size,3);o.uniform3fv(this.addr,i)}function dC(o,t){const i=Ao(t,this.size,4);o.uniform4fv(this.addr,i)}function pC(o,t){const i=Ao(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function mC(o,t){const i=Ao(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function gC(o,t){const i=Ao(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function vC(o,t){o.uniform1iv(this.addr,t)}function _C(o,t){o.uniform2iv(this.addr,t)}function yC(o,t){o.uniform3iv(this.addr,t)}function xC(o,t){o.uniform4iv(this.addr,t)}function SC(o,t){o.uniform1uiv(this.addr,t)}function MC(o,t){o.uniform2uiv(this.addr,t)}function EC(o,t){o.uniform3uiv(this.addr,t)}function TC(o,t){o.uniform4uiv(this.addr,t)}function bC(o,t,i){const s=this.cache,l=t.length,u=hf(i,l);An(s,u)||(o.uniform1iv(this.addr,u),wn(s,u));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||yS,u[f])}function AC(o,t,i){const s=this.cache,l=t.length,u=hf(i,l);An(s,u)||(o.uniform1iv(this.addr,u),wn(s,u));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||SS,u[f])}function wC(o,t,i){const s=this.cache,l=t.length,u=hf(i,l);An(s,u)||(o.uniform1iv(this.addr,u),wn(s,u));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||MS,u[f])}function CC(o,t,i){const s=this.cache,l=t.length,u=hf(i,l);An(s,u)||(o.uniform1iv(this.addr,u),wn(s,u));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||xS,u[f])}function RC(o){switch(o){case 5126:return cC;case 35664:return fC;case 35665:return hC;case 35666:return dC;case 35674:return pC;case 35675:return mC;case 35676:return gC;case 5124:case 35670:return vC;case 35667:case 35671:return _C;case 35668:case 35672:return yC;case 35669:case 35673:return xC;case 5125:return SC;case 36294:return MC;case 36295:return EC;case 36296:return TC;case 35678:case 36198:case 36298:case 36306:case 35682:return bC;case 35679:case 36299:case 36307:return AC;case 35680:case 36300:case 36308:case 36293:return wC;case 36289:case 36303:case 36311:case 36292:return CC}}class DC{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=uC(i.type)}}class NC{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=RC(i.type)}}class UC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const wp=/(\w+)(\])?(\[|\.)?/g;function fx(o,t){o.seq.push(t),o.map[t.id]=t}function LC(o,t,i){const s=o.name,l=s.length;for(wp.lastIndex=0;;){const u=wp.exec(s),f=wp.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){fx(i,m===void 0?new DC(d,o,t):new NC(d,o,t));break}else{let g=i.map[d];g===void 0&&(g=new UC(d),fx(i,g)),i=g}}}class $c{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),f=t.getUniformLocation(i,u.name);LC(u,f,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,f=i.length;u!==f;++u){const d=i[u],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function hx(o,t,i){const s=o.createShader(t);return o.shaderSource(s,i),o.compileShader(s),s}const OC=37297;let PC=0;function zC(o,t){const i=o.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let f=l;f<u;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const dx=new ye;function IC(o){Le._getMatrix(dx,Le.workingColorSpace,o);const t=`mat3( ${dx.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(o)){case ef:return[t,"LinearTransferOETF"];case Ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function px(o,t,i){const s=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+zC(o.getShaderSource(t),d)}else return u}function BC(o,t){const i=IC(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function FC(o,t){let i;switch(t){case Ux:i="Linear";break;case Lx:i="Reinhard";break;case Ox:i="Cineon";break;case bm:i="ACESFilmic";break;case zx:i="AgX";break;case Ix:i="Neutral";break;case Px:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const kc=new V;function HC(){Le.getLuminanceCoefficients(kc);const o=kc.x.toFixed(4),t=kc.y.toFixed(4),i=kc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function GC(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rl).join(`
`)}function VC(o){const t=[];for(const i in o){const s=o[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function kC(o,t){const i={},s=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=o.getActiveAttrib(t,l),f=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[f]={type:u.type,location:o.getAttribLocation(t,f),locationSize:d}}return i}function Rl(o){return o!==""}function mx(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gx(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const XC=/^[ \t]*#include +<([\w\d./]+)>/gm;function xm(o){return o.replace(XC,YC)}const qC=new Map;function YC(o,t){let i=Me[t];if(i===void 0){const s=qC.get(t);if(s!==void 0)i=Me[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return xm(i)}const jC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vx(o){return o.replace(jC,WC)}function WC(o,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function _x(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function ZC(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Dx?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===UE?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Da&&(t="SHADOWMAP_TYPE_VSM"),t}function QC(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case yo:case xo:t="ENVMAP_TYPE_CUBE";break;case ff:t="ENVMAP_TYPE_CUBE_UV";break}return t}function KC(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case xo:t="ENVMAP_MODE_REFRACTION";break}return t}function JC(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Nx:t="ENVMAP_BLENDING_MULTIPLY";break;case KE:t="ENVMAP_BLENDING_MIX";break;case JE:t="ENVMAP_BLENDING_ADD";break}return t}function $C(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function tR(o,t,i,s){const l=o.getContext(),u=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=ZC(i),m=QC(i),v=KC(i),g=JC(i),y=$C(i),x=GC(i),E=VC(u),b=l.createProgram();let M,_,D=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Rl).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Rl).join(`
`),_.length>0&&(_+=`
`)):(M=[_x(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rl).join(`
`),_=[_x(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Oa?"#define TONE_MAPPING":"",i.toneMapping!==Oa?Me.tonemapping_pars_fragment:"",i.toneMapping!==Oa?FC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,BC("linearToOutputTexel",i.outputColorSpace),HC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Rl).join(`
`)),f=xm(f),f=mx(f,i),f=gx(f,i),d=xm(d),d=mx(d,i),d=gx(d,i),f=vx(f),d=vx(d),i.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===gy?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===gy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const R=D+M+f,T=D+_+d,L=hx(l,l.VERTEX_SHADER,R),z=hx(l,l.FRAGMENT_SHADER,T);l.attachShader(b,L),l.attachShader(b,z),i.index0AttributeName!==void 0?l.bindAttribLocation(b,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function P(F){if(o.debug.checkShaderErrors){const Z=l.getProgramInfoLog(b)||"",U=l.getShaderInfoLog(L)||"",Y=l.getShaderInfoLog(z)||"",q=Z.trim(),k=U.trim(),$=Y.trim();let Q=!0,gt=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(Q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,b,L,z);else{const St=px(l,L,"vertex"),At=px(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+q+`
`+St+`
`+At)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(k===""||$==="")&&(gt=!1);gt&&(F.diagnostics={runnable:Q,programLog:q,vertexShader:{log:k,prefix:M},fragmentShader:{log:$,prefix:_}})}l.deleteShader(L),l.deleteShader(z),I=new $c(l,b),N=kC(l,b)}let I;this.getUniforms=function(){return I===void 0&&P(this),I};let N;this.getAttributes=function(){return N===void 0&&P(this),N};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(b,OC)),A},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=PC++,this.cacheKey=t,this.usedTimes=1,this.program=b,this.vertexShader=L,this.fragmentShader=z,this}let eR=0;class nR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new iR(t),i.set(t,s)),s}}class iR{constructor(t){this.id=eR++,this.code=t,this.usedTimes=0}}function aR(o,t,i,s,l,u,f){const d=new Qx,p=new nR,m=new Set,v=[],g=l.logarithmicDepthBuffer,y=l.vertexTextures;let x=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function b(N){return m.add(N),N===0?"uv":`uv${N}`}function M(N,A,F,Z,U){const Y=Z.fog,q=U.geometry,k=N.isMeshStandardMaterial?Z.environment:null,$=(N.isMeshStandardMaterial?i:t).get(N.envMap||k),Q=$&&$.mapping===ff?$.image.height:null,gt=E[N.type];N.precision!==null&&(x=l.getMaxPrecision(N.precision),x!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",x,"instead."));const St=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,At=St!==void 0?St.length:0;let qt=0;q.morphAttributes.position!==void 0&&(qt=1),q.morphAttributes.normal!==void 0&&(qt=2),q.morphAttributes.color!==void 0&&(qt=3);let Ot,G,ft,j;if(gt){const Re=aa[gt];Ot=Re.vertexShader,G=Re.fragmentShader}else Ot=N.vertexShader,G=N.fragmentShader,p.update(N),ft=p.getVertexShaderID(N),j=p.getFragmentShaderID(N);const et=o.getRenderTarget(),xt=o.state.buffers.depth.getReversed(),Ct=U.isInstancedMesh===!0,wt=U.isBatchedMesh===!0,Mt=!!N.map,Lt=!!N.matcap,H=!!$,bt=!!N.aoMap,yt=!!N.lightMap,ht=!!N.bumpMap,vt=!!N.normalMap,Rt=!!N.displacementMap,Nt=!!N.emissiveMap,It=!!N.metalnessMap,re=!!N.roughnessMap,oe=N.anisotropy>0,B=N.clearcoat>0,w=N.dispersion>0,rt=N.iridescence>0,dt=N.sheen>0,Ut=N.transmission>0,_t=oe&&!!N.anisotropyMap,Zt=B&&!!N.clearcoatMap,Gt=B&&!!N.clearcoatNormalMap,Jt=B&&!!N.clearcoatRoughnessMap,te=rt&&!!N.iridescenceMap,Pt=rt&&!!N.iridescenceThicknessMap,Yt=dt&&!!N.sheenColorMap,he=dt&&!!N.sheenRoughnessMap,ie=!!N.specularMap,ut=!!N.specularColorMap,se=!!N.specularIntensityMap,W=Ut&&!!N.transmissionMap,Bt=Ut&&!!N.thicknessMap,kt=!!N.gradientMap,$t=!!N.alphaMap,zt=N.alphaTest>0,Dt=!!N.alphaHash,ae=!!N.extensions;let _e=Oa;N.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(_e=o.toneMapping);const je={shaderID:gt,shaderType:N.type,shaderName:N.name,vertexShader:Ot,fragmentShader:G,defines:N.defines,customVertexShaderID:ft,customFragmentShaderID:j,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:x,batching:wt,batchingColor:wt&&U._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&U.instanceColor!==null,instancingMorph:Ct&&U.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:et===null?o.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:So,alphaToCoverage:!!N.alphaToCoverage,map:Mt,matcap:Lt,envMap:H,envMapMode:H&&$.mapping,envMapCubeUVHeight:Q,aoMap:bt,lightMap:yt,bumpMap:ht,normalMap:vt,displacementMap:y&&Rt,emissiveMap:Nt,normalMapObjectSpace:vt&&N.normalMapType===nT,normalMapTangentSpace:vt&&N.normalMapType===Yx,metalnessMap:It,roughnessMap:re,anisotropy:oe,anisotropyMap:_t,clearcoat:B,clearcoatMap:Zt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:Jt,dispersion:w,iridescence:rt,iridescenceMap:te,iridescenceThicknessMap:Pt,sheen:dt,sheenColorMap:Yt,sheenRoughnessMap:he,specularMap:ie,specularColorMap:ut,specularIntensityMap:se,transmission:Ut,transmissionMap:W,thicknessMap:Bt,gradientMap:kt,opaque:N.transparent===!1&&N.blending===go&&N.alphaToCoverage===!1,alphaMap:$t,alphaTest:zt,alphaHash:Dt,combine:N.combine,mapUv:Mt&&b(N.map.channel),aoMapUv:bt&&b(N.aoMap.channel),lightMapUv:yt&&b(N.lightMap.channel),bumpMapUv:ht&&b(N.bumpMap.channel),normalMapUv:vt&&b(N.normalMap.channel),displacementMapUv:Rt&&b(N.displacementMap.channel),emissiveMapUv:Nt&&b(N.emissiveMap.channel),metalnessMapUv:It&&b(N.metalnessMap.channel),roughnessMapUv:re&&b(N.roughnessMap.channel),anisotropyMapUv:_t&&b(N.anisotropyMap.channel),clearcoatMapUv:Zt&&b(N.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&b(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&b(N.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&b(N.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&b(N.iridescenceThicknessMap.channel),sheenColorMapUv:Yt&&b(N.sheenColorMap.channel),sheenRoughnessMapUv:he&&b(N.sheenRoughnessMap.channel),specularMapUv:ie&&b(N.specularMap.channel),specularColorMapUv:ut&&b(N.specularColorMap.channel),specularIntensityMapUv:se&&b(N.specularIntensityMap.channel),transmissionMapUv:W&&b(N.transmissionMap.channel),thicknessMapUv:Bt&&b(N.thicknessMap.channel),alphaMapUv:$t&&b(N.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(vt||oe),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!q.attributes.uv&&(Mt||$t),fog:!!Y,useFog:N.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:N.flatShading===!0&&N.wireframe===!1,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:xt,skinning:U.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:qt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:N.dithering,shadowMapEnabled:o.shadowMap.enabled&&F.length>0,shadowMapType:o.shadowMap.type,toneMapping:_e,decodeVideoTexture:Mt&&N.map.isVideoTexture===!0&&Le.getTransfer(N.map.colorSpace)===Ye,decodeVideoTextureEmissive:Nt&&N.emissiveMap.isVideoTexture===!0&&Le.getTransfer(N.emissiveMap.colorSpace)===Ye,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===_i,flipSided:N.side===Xn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:ae&&N.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&N.extensions.multiDraw===!0||wt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return je.vertexUv1s=m.has(1),je.vertexUv2s=m.has(2),je.vertexUv3s=m.has(3),m.clear(),je}function _(N){const A=[];if(N.shaderID?A.push(N.shaderID):(A.push(N.customVertexShaderID),A.push(N.customFragmentShaderID)),N.defines!==void 0)for(const F in N.defines)A.push(F),A.push(N.defines[F]);return N.isRawShaderMaterial===!1&&(D(A,N),R(A,N),A.push(o.outputColorSpace)),A.push(N.customProgramCacheKey),A.join()}function D(N,A){N.push(A.precision),N.push(A.outputColorSpace),N.push(A.envMapMode),N.push(A.envMapCubeUVHeight),N.push(A.mapUv),N.push(A.alphaMapUv),N.push(A.lightMapUv),N.push(A.aoMapUv),N.push(A.bumpMapUv),N.push(A.normalMapUv),N.push(A.displacementMapUv),N.push(A.emissiveMapUv),N.push(A.metalnessMapUv),N.push(A.roughnessMapUv),N.push(A.anisotropyMapUv),N.push(A.clearcoatMapUv),N.push(A.clearcoatNormalMapUv),N.push(A.clearcoatRoughnessMapUv),N.push(A.iridescenceMapUv),N.push(A.iridescenceThicknessMapUv),N.push(A.sheenColorMapUv),N.push(A.sheenRoughnessMapUv),N.push(A.specularMapUv),N.push(A.specularColorMapUv),N.push(A.specularIntensityMapUv),N.push(A.transmissionMapUv),N.push(A.thicknessMapUv),N.push(A.combine),N.push(A.fogExp2),N.push(A.sizeAttenuation),N.push(A.morphTargetsCount),N.push(A.morphAttributeCount),N.push(A.numDirLights),N.push(A.numPointLights),N.push(A.numSpotLights),N.push(A.numSpotLightMaps),N.push(A.numHemiLights),N.push(A.numRectAreaLights),N.push(A.numDirLightShadows),N.push(A.numPointLightShadows),N.push(A.numSpotLightShadows),N.push(A.numSpotLightShadowsWithMaps),N.push(A.numLightProbes),N.push(A.shadowMapType),N.push(A.toneMapping),N.push(A.numClippingPlanes),N.push(A.numClipIntersection),N.push(A.depthPacking)}function R(N,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),A.gradientMap&&d.enable(22),N.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reversedDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),N.push(d.mask)}function T(N){const A=E[N.type];let F;if(A){const Z=aa[A];F=Hl.clone(Z.uniforms)}else F=N.uniforms;return F}function L(N,A){let F;for(let Z=0,U=v.length;Z<U;Z++){const Y=v[Z];if(Y.cacheKey===A){F=Y,++F.usedTimes;break}}return F===void 0&&(F=new tR(o,A,N,u),v.push(F)),F}function z(N){if(--N.usedTimes===0){const A=v.indexOf(N);v[A]=v[v.length-1],v.pop(),N.destroy()}}function P(N){p.remove(N)}function I(){p.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:T,acquireProgram:L,releaseProgram:z,releaseShaderCache:P,programs:v,dispose:I}}function sR(){let o=new WeakMap;function t(f){return o.has(f)}function i(f){let d=o.get(f);return d===void 0&&(d={},o.set(f,d)),d}function s(f){o.delete(f)}function l(f,d,p){o.get(f)[d]=p}function u(){o=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function rR(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function yx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function xx(){const o=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function f(g,y,x,E,b,M){let _=o[t];return _===void 0?(_={id:g.id,object:g,geometry:y,material:x,groupOrder:E,renderOrder:g.renderOrder,z:b,group:M},o[t]=_):(_.id=g.id,_.object=g,_.geometry=y,_.material=x,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=b,_.group=M),t++,_}function d(g,y,x,E,b,M){const _=f(g,y,x,E,b,M);x.transmission>0?s.push(_):x.transparent===!0?l.push(_):i.push(_)}function p(g,y,x,E,b,M){const _=f(g,y,x,E,b,M);x.transmission>0?s.unshift(_):x.transparent===!0?l.unshift(_):i.unshift(_)}function m(g,y){i.length>1&&i.sort(g||rR),s.length>1&&s.sort(y||yx),l.length>1&&l.sort(y||yx)}function v(){for(let g=t,y=o.length;g<y;g++){const x=o[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:p,finish:v,sort:m}}function oR(){let o=new WeakMap;function t(s,l){const u=o.get(s);let f;return u===void 0?(f=new xx,o.set(s,[f])):l>=u.length?(f=new xx,u.push(f)):f=u[l],f}function i(){o=new WeakMap}return{get:t,dispose:i}}function lR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new V,color:new ue};break;case"SpotLight":i={position:new V,direction:new V,color:new ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new V,color:new ue,distance:0,decay:0};break;case"HemisphereLight":i={direction:new V,skyColor:new ue,groundColor:new ue};break;case"RectAreaLight":i={color:new ue,position:new V,halfWidth:new V,halfHeight:new V};break}return o[t.id]=i,i}}}function uR(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ht,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let cR=0;function fR(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function hR(o){const t=new lR,i=uR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new V);const l=new V,u=new Ve,f=new Ve;function d(m){let v=0,g=0,y=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let x=0,E=0,b=0,M=0,_=0,D=0,R=0,T=0,L=0,z=0,P=0;m.sort(fR);for(let N=0,A=m.length;N<A;N++){const F=m[N],Z=F.color,U=F.intensity,Y=F.distance,q=F.shadow&&F.shadow.map?F.shadow.map.texture:null;if(F.isAmbientLight)v+=Z.r*U,g+=Z.g*U,y+=Z.b*U;else if(F.isLightProbe){for(let k=0;k<9;k++)s.probe[k].addScaledVector(F.sh.coefficients[k],U);P++}else if(F.isDirectionalLight){const k=t.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){const $=F.shadow,Q=i.get(F);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,s.directionalShadow[x]=Q,s.directionalShadowMap[x]=q,s.directionalShadowMatrix[x]=F.shadow.matrix,D++}s.directional[x]=k,x++}else if(F.isSpotLight){const k=t.get(F);k.position.setFromMatrixPosition(F.matrixWorld),k.color.copy(Z).multiplyScalar(U),k.distance=Y,k.coneCos=Math.cos(F.angle),k.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),k.decay=F.decay,s.spot[b]=k;const $=F.shadow;if(F.map&&(s.spotLightMap[L]=F.map,L++,$.updateMatrices(F),F.castShadow&&z++),s.spotLightMatrix[b]=$.matrix,F.castShadow){const Q=i.get(F);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,s.spotShadow[b]=Q,s.spotShadowMap[b]=q,T++}b++}else if(F.isRectAreaLight){const k=t.get(F);k.color.copy(Z).multiplyScalar(U),k.halfWidth.set(F.width*.5,0,0),k.halfHeight.set(0,F.height*.5,0),s.rectArea[M]=k,M++}else if(F.isPointLight){const k=t.get(F);if(k.color.copy(F.color).multiplyScalar(F.intensity),k.distance=F.distance,k.decay=F.decay,F.castShadow){const $=F.shadow,Q=i.get(F);Q.shadowIntensity=$.intensity,Q.shadowBias=$.bias,Q.shadowNormalBias=$.normalBias,Q.shadowRadius=$.radius,Q.shadowMapSize=$.mapSize,Q.shadowCameraNear=$.camera.near,Q.shadowCameraFar=$.camera.far,s.pointShadow[E]=Q,s.pointShadowMap[E]=q,s.pointShadowMatrix[E]=F.shadow.matrix,R++}s.point[E]=k,E++}else if(F.isHemisphereLight){const k=t.get(F);k.skyColor.copy(F.color).multiplyScalar(U),k.groundColor.copy(F.groundColor).multiplyScalar(U),s.hemi[_]=k,_++}}M>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Wt.LTC_FLOAT_1,s.rectAreaLTC2=Wt.LTC_FLOAT_2):(s.rectAreaLTC1=Wt.LTC_HALF_1,s.rectAreaLTC2=Wt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=y;const I=s.hash;(I.directionalLength!==x||I.pointLength!==E||I.spotLength!==b||I.rectAreaLength!==M||I.hemiLength!==_||I.numDirectionalShadows!==D||I.numPointShadows!==R||I.numSpotShadows!==T||I.numSpotMaps!==L||I.numLightProbes!==P)&&(s.directional.length=x,s.spot.length=b,s.rectArea.length=M,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=D,s.directionalShadowMap.length=D,s.pointShadow.length=R,s.pointShadowMap.length=R,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=D,s.pointShadowMatrix.length=R,s.spotLightMatrix.length=T+L-z,s.spotLightMap.length=L,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=P,I.directionalLength=x,I.pointLength=E,I.spotLength=b,I.rectAreaLength=M,I.hemiLength=_,I.numDirectionalShadows=D,I.numPointShadows=R,I.numSpotShadows=T,I.numSpotMaps=L,I.numLightProbes=P,s.version=cR++)}function p(m,v){let g=0,y=0,x=0,E=0,b=0;const M=v.matrixWorldInverse;for(let _=0,D=m.length;_<D;_++){const R=m[_];if(R.isDirectionalLight){const T=s.directional[g];T.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(l),T.direction.transformDirection(M),g++}else if(R.isSpotLight){const T=s.spot[x];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(M),T.direction.setFromMatrixPosition(R.matrixWorld),l.setFromMatrixPosition(R.target.matrixWorld),T.direction.sub(l),T.direction.transformDirection(M),x++}else if(R.isRectAreaLight){const T=s.rectArea[E];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(M),f.identity(),u.copy(R.matrixWorld),u.premultiply(M),f.extractRotation(u),T.halfWidth.set(R.width*.5,0,0),T.halfHeight.set(0,R.height*.5,0),T.halfWidth.applyMatrix4(f),T.halfHeight.applyMatrix4(f),E++}else if(R.isPointLight){const T=s.point[y];T.position.setFromMatrixPosition(R.matrixWorld),T.position.applyMatrix4(M),y++}else if(R.isHemisphereLight){const T=s.hemi[b];T.direction.setFromMatrixPosition(R.matrixWorld),T.direction.transformDirection(M),b++}}}return{setup:d,setupView:p,state:s}}function Sx(o){const t=new hR(o),i=[],s=[];function l(v){m.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function f(v){s.push(v)}function d(){t.setup(i)}function p(v){t.setupView(i,v)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function dR(o){let t=new WeakMap;function i(l,u=0){const f=t.get(l);let d;return f===void 0?(d=new Sx(o),t.set(l,[d])):u>=f.length?(d=new Sx(o),f.push(d)):d=f[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const pR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mR=`uniform sampler2D shadow_pass;
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
}`;function gR(o,t,i){let s=new zm;const l=new Ht,u=new Ht,f=new fn,d=new Fb({depthPacking:eT}),p=new Hb,m={},v=i.maxTextureSize,g={[ys]:Xn,[Xn]:ys,[_i]:_i},y=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ht},radius:{value:4}},vertexShader:pR,fragmentShader:mR}),x=y.clone();x.defines.HORIZONTAL_PASS=1;const E=new Sn;E.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new an(E,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dx;let _=this.type;this.render=function(z,P,I){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;const N=o.getRenderTarget(),A=o.getActiveCubeFace(),F=o.getActiveMipmapLevel(),Z=o.state;Z.setBlending(La),Z.buffers.depth.getReversed()===!0?Z.buffers.color.setClear(0,0,0,0):Z.buffers.color.setClear(1,1,1,1),Z.buffers.depth.setTest(!0),Z.setScissorTest(!1);const U=_!==Da&&this.type===Da,Y=_===Da&&this.type!==Da;for(let q=0,k=z.length;q<k;q++){const $=z[q],Q=$.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;l.copy(Q.mapSize);const gt=Q.getFrameExtents();if(l.multiply(gt),u.copy(Q.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/gt.x),l.x=u.x*gt.x,Q.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/gt.y),l.y=u.y*gt.y,Q.mapSize.y=u.y)),Q.map===null||U===!0||Y===!0){const At=this.type!==Da?{minFilter:yi,magFilter:yi}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Ui(l.x,l.y,At),Q.map.texture.name=$.name+".shadowMap",Q.camera.updateProjectionMatrix()}o.setRenderTarget(Q.map),o.clear();const St=Q.getViewportCount();for(let At=0;At<St;At++){const qt=Q.getViewport(At);f.set(u.x*qt.x,u.y*qt.y,u.x*qt.z,u.y*qt.w),Z.viewport(f),Q.updateMatrices($,At),s=Q.getFrustum(),T(P,I,Q.camera,$,this.type)}Q.isPointLightShadow!==!0&&this.type===Da&&D(Q,I),Q.needsUpdate=!1}_=this.type,M.needsUpdate=!1,o.setRenderTarget(N,A,F)};function D(z,P){const I=t.update(b);y.defines.VSM_SAMPLES!==z.blurSamples&&(y.defines.VSM_SAMPLES=z.blurSamples,x.defines.VSM_SAMPLES=z.blurSamples,y.needsUpdate=!0,x.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Ui(l.x,l.y)),y.uniforms.shadow_pass.value=z.map.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(P,null,I,y,b,null),x.uniforms.shadow_pass.value=z.mapPass.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(P,null,I,x,b,null)}function R(z,P,I,N){let A=null;const F=I.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(F!==void 0)A=F;else if(A=I.isPointLight===!0?p:d,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Z=A.uuid,U=P.uuid;let Y=m[Z];Y===void 0&&(Y={},m[Z]=Y);let q=Y[U];q===void 0&&(q=A.clone(),Y[U]=q,P.addEventListener("dispose",L)),A=q}if(A.visible=P.visible,A.wireframe=P.wireframe,N===Da?A.side=P.shadowSide!==null?P.shadowSide:P.side:A.side=P.shadowSide!==null?P.shadowSide:g[P.side],A.alphaMap=P.alphaMap,A.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,A.map=P.map,A.clipShadows=P.clipShadows,A.clippingPlanes=P.clippingPlanes,A.clipIntersection=P.clipIntersection,A.displacementMap=P.displacementMap,A.displacementScale=P.displacementScale,A.displacementBias=P.displacementBias,A.wireframeLinewidth=P.wireframeLinewidth,A.linewidth=P.linewidth,I.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const Z=o.properties.get(A);Z.light=I}return A}function T(z,P,I,N,A){if(z.visible===!1)return;if(z.layers.test(P.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&A===Da)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,z.matrixWorld);const U=t.update(z),Y=z.material;if(Array.isArray(Y)){const q=U.groups;for(let k=0,$=q.length;k<$;k++){const Q=q[k],gt=Y[Q.materialIndex];if(gt&&gt.visible){const St=R(z,gt,N,A);z.onBeforeShadow(o,z,P,I,U,St,Q),o.renderBufferDirect(I,null,U,St,z,Q),z.onAfterShadow(o,z,P,I,U,St,Q)}}}else if(Y.visible){const q=R(z,Y,N,A);z.onBeforeShadow(o,z,P,I,U,q,null),o.renderBufferDirect(I,null,U,q,z,null),z.onAfterShadow(o,z,P,I,U,q,null)}}const Z=z.children;for(let U=0,Y=Z.length;U<Y;U++)T(Z[U],P,I,N,A)}function L(z){z.target.removeEventListener("dispose",L);for(const I in m){const N=m[I],A=z.target.uuid;A in N&&(N[A].dispose(),delete N[A])}}}const vR={[Np]:Up,[Lp]:zp,[Op]:Ip,[_o]:Pp,[Up]:Np,[zp]:Lp,[Ip]:Op,[Pp]:_o};function _R(o,t){function i(){let W=!1;const Bt=new fn;let kt=null;const $t=new fn(0,0,0,0);return{setMask:function(zt){kt!==zt&&!W&&(o.colorMask(zt,zt,zt,zt),kt=zt)},setLocked:function(zt){W=zt},setClear:function(zt,Dt,ae,_e,je){je===!0&&(zt*=_e,Dt*=_e,ae*=_e),Bt.set(zt,Dt,ae,_e),$t.equals(Bt)===!1&&(o.clearColor(zt,Dt,ae,_e),$t.copy(Bt))},reset:function(){W=!1,kt=null,$t.set(-1,0,0,0)}}}function s(){let W=!1,Bt=!1,kt=null,$t=null,zt=null;return{setReversed:function(Dt){if(Bt!==Dt){const ae=t.get("EXT_clip_control");Dt?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),Bt=Dt;const _e=zt;zt=null,this.setClear(_e)}},getReversed:function(){return Bt},setTest:function(Dt){Dt?et(o.DEPTH_TEST):xt(o.DEPTH_TEST)},setMask:function(Dt){kt!==Dt&&!W&&(o.depthMask(Dt),kt=Dt)},setFunc:function(Dt){if(Bt&&(Dt=vR[Dt]),$t!==Dt){switch(Dt){case Np:o.depthFunc(o.NEVER);break;case Up:o.depthFunc(o.ALWAYS);break;case Lp:o.depthFunc(o.LESS);break;case _o:o.depthFunc(o.LEQUAL);break;case Op:o.depthFunc(o.EQUAL);break;case Pp:o.depthFunc(o.GEQUAL);break;case zp:o.depthFunc(o.GREATER);break;case Ip:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}$t=Dt}},setLocked:function(Dt){W=Dt},setClear:function(Dt){zt!==Dt&&(Bt&&(Dt=1-Dt),o.clearDepth(Dt),zt=Dt)},reset:function(){W=!1,kt=null,$t=null,zt=null,Bt=!1}}}function l(){let W=!1,Bt=null,kt=null,$t=null,zt=null,Dt=null,ae=null,_e=null,je=null;return{setTest:function(Re){W||(Re?et(o.STENCIL_TEST):xt(o.STENCIL_TEST))},setMask:function(Re){Bt!==Re&&!W&&(o.stencilMask(Re),Bt=Re)},setFunc:function(Re,sn,Mn){(kt!==Re||$t!==sn||zt!==Mn)&&(o.stencilFunc(Re,sn,Mn),kt=Re,$t=sn,zt=Mn)},setOp:function(Re,sn,Mn){(Dt!==Re||ae!==sn||_e!==Mn)&&(o.stencilOp(Re,sn,Mn),Dt=Re,ae=sn,_e=Mn)},setLocked:function(Re){W=Re},setClear:function(Re){je!==Re&&(o.clearStencil(Re),je=Re)},reset:function(){W=!1,Bt=null,kt=null,$t=null,zt=null,Dt=null,ae=null,_e=null,je=null}}}const u=new i,f=new s,d=new l,p=new WeakMap,m=new WeakMap;let v={},g={},y=new WeakMap,x=[],E=null,b=!1,M=null,_=null,D=null,R=null,T=null,L=null,z=null,P=new ue(0,0,0),I=0,N=!1,A=null,F=null,Z=null,U=null,Y=null;const q=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,$=0;const Q=o.getParameter(o.VERSION);Q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(Q)[1]),k=$>=1):Q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),k=$>=2);let gt=null,St={};const At=o.getParameter(o.SCISSOR_BOX),qt=o.getParameter(o.VIEWPORT),Ot=new fn().fromArray(At),G=new fn().fromArray(qt);function ft(W,Bt,kt,$t){const zt=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(W,Dt),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ae=0;ae<kt;ae++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Bt,0,o.RGBA,1,1,$t,0,o.RGBA,o.UNSIGNED_BYTE,zt):o.texImage2D(Bt+ae,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,zt);return Dt}const j={};j[o.TEXTURE_2D]=ft(o.TEXTURE_2D,o.TEXTURE_2D,1),j[o.TEXTURE_CUBE_MAP]=ft(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[o.TEXTURE_2D_ARRAY]=ft(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),j[o.TEXTURE_3D]=ft(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),et(o.DEPTH_TEST),f.setFunc(_o),ht(!1),vt(fy),et(o.CULL_FACE),bt(La);function et(W){v[W]!==!0&&(o.enable(W),v[W]=!0)}function xt(W){v[W]!==!1&&(o.disable(W),v[W]=!1)}function Ct(W,Bt){return g[W]!==Bt?(o.bindFramebuffer(W,Bt),g[W]=Bt,W===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Bt),W===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Bt),!0):!1}function wt(W,Bt){let kt=x,$t=!1;if(W){kt=y.get(Bt),kt===void 0&&(kt=[],y.set(Bt,kt));const zt=W.textures;if(kt.length!==zt.length||kt[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,ae=zt.length;Dt<ae;Dt++)kt[Dt]=o.COLOR_ATTACHMENT0+Dt;kt.length=zt.length,$t=!0}}else kt[0]!==o.BACK&&(kt[0]=o.BACK,$t=!0);$t&&o.drawBuffers(kt)}function Mt(W){return E!==W?(o.useProgram(W),E=W,!0):!1}const Lt={[$s]:o.FUNC_ADD,[OE]:o.FUNC_SUBTRACT,[PE]:o.FUNC_REVERSE_SUBTRACT};Lt[zE]=o.MIN,Lt[IE]=o.MAX;const H={[BE]:o.ZERO,[FE]:o.ONE,[HE]:o.SRC_COLOR,[Rp]:o.SRC_ALPHA,[YE]:o.SRC_ALPHA_SATURATE,[XE]:o.DST_COLOR,[VE]:o.DST_ALPHA,[GE]:o.ONE_MINUS_SRC_COLOR,[Dp]:o.ONE_MINUS_SRC_ALPHA,[qE]:o.ONE_MINUS_DST_COLOR,[kE]:o.ONE_MINUS_DST_ALPHA,[jE]:o.CONSTANT_COLOR,[WE]:o.ONE_MINUS_CONSTANT_COLOR,[ZE]:o.CONSTANT_ALPHA,[QE]:o.ONE_MINUS_CONSTANT_ALPHA};function bt(W,Bt,kt,$t,zt,Dt,ae,_e,je,Re){if(W===La){b===!0&&(xt(o.BLEND),b=!1);return}if(b===!1&&(et(o.BLEND),b=!0),W!==LE){if(W!==M||Re!==N){if((_!==$s||T!==$s)&&(o.blendEquation(o.FUNC_ADD),_=$s,T=$s),Re)switch(W){case go:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ir:o.blendFunc(o.ONE,o.ONE);break;case hy:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case dy:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case go:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case ir:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case hy:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case dy:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}D=null,R=null,L=null,z=null,P.set(0,0,0),I=0,M=W,N=Re}return}zt=zt||Bt,Dt=Dt||kt,ae=ae||$t,(Bt!==_||zt!==T)&&(o.blendEquationSeparate(Lt[Bt],Lt[zt]),_=Bt,T=zt),(kt!==D||$t!==R||Dt!==L||ae!==z)&&(o.blendFuncSeparate(H[kt],H[$t],H[Dt],H[ae]),D=kt,R=$t,L=Dt,z=ae),(_e.equals(P)===!1||je!==I)&&(o.blendColor(_e.r,_e.g,_e.b,je),P.copy(_e),I=je),M=W,N=!1}function yt(W,Bt){W.side===_i?xt(o.CULL_FACE):et(o.CULL_FACE);let kt=W.side===Xn;Bt&&(kt=!kt),ht(kt),W.blending===go&&W.transparent===!1?bt(La):bt(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),u.setMask(W.colorWrite);const $t=W.stencilWrite;d.setTest($t),$t&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Nt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?et(o.SAMPLE_ALPHA_TO_COVERAGE):xt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ht(W){A!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),A=W)}function vt(W){W!==DE?(et(o.CULL_FACE),W!==F&&(W===fy?o.cullFace(o.BACK):W===NE?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):xt(o.CULL_FACE),F=W}function Rt(W){W!==Z&&(k&&o.lineWidth(W),Z=W)}function Nt(W,Bt,kt){W?(et(o.POLYGON_OFFSET_FILL),(U!==Bt||Y!==kt)&&(o.polygonOffset(Bt,kt),U=Bt,Y=kt)):xt(o.POLYGON_OFFSET_FILL)}function It(W){W?et(o.SCISSOR_TEST):xt(o.SCISSOR_TEST)}function re(W){W===void 0&&(W=o.TEXTURE0+q-1),gt!==W&&(o.activeTexture(W),gt=W)}function oe(W,Bt,kt){kt===void 0&&(gt===null?kt=o.TEXTURE0+q-1:kt=gt);let $t=St[kt];$t===void 0&&($t={type:void 0,texture:void 0},St[kt]=$t),($t.type!==W||$t.texture!==Bt)&&(gt!==kt&&(o.activeTexture(kt),gt=kt),o.bindTexture(W,Bt||j[W]),$t.type=W,$t.texture=Bt)}function B(){const W=St[gt];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function w(){try{o.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function rt(){try{o.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function dt(){try{o.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ut(){try{o.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function _t(){try{o.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Zt(){try{o.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Gt(){try{o.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Jt(){try{o.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function te(){try{o.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pt(){try{o.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Yt(W){Ot.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),Ot.copy(W))}function he(W){G.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),G.copy(W))}function ie(W,Bt){let kt=m.get(Bt);kt===void 0&&(kt=new WeakMap,m.set(Bt,kt));let $t=kt.get(W);$t===void 0&&($t=o.getUniformBlockIndex(Bt,W.name),kt.set(W,$t))}function ut(W,Bt){const $t=m.get(Bt).get(W);p.get(Bt)!==$t&&(o.uniformBlockBinding(Bt,$t,W.__bindingPointIndex),p.set(Bt,$t))}function se(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),f.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},gt=null,St={},g={},y=new WeakMap,x=[],E=null,b=!1,M=null,_=null,D=null,R=null,T=null,L=null,z=null,P=new ue(0,0,0),I=0,N=!1,A=null,F=null,Z=null,U=null,Y=null,Ot.set(0,0,o.canvas.width,o.canvas.height),G.set(0,0,o.canvas.width,o.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:et,disable:xt,bindFramebuffer:Ct,drawBuffers:wt,useProgram:Mt,setBlending:bt,setMaterial:yt,setFlipSided:ht,setCullFace:vt,setLineWidth:Rt,setPolygonOffset:Nt,setScissorTest:It,activeTexture:re,bindTexture:oe,unbindTexture:B,compressedTexImage2D:w,compressedTexImage3D:rt,texImage2D:te,texImage3D:Pt,updateUBOMapping:ie,uniformBlockBinding:ut,texStorage2D:Gt,texStorage3D:Jt,texSubImage2D:dt,texSubImage3D:Ut,compressedTexSubImage2D:_t,compressedTexSubImage3D:Zt,scissor:Yt,viewport:he,reset:se}}function yR(o,t,i,s,l,u,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ht,v=new WeakMap;let g;const y=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(B,w){return x?new OffscreenCanvas(B,w):af("canvas")}function b(B,w,rt){let dt=1;const Ut=oe(B);if((Ut.width>rt||Ut.height>rt)&&(dt=rt/Math.max(Ut.width,Ut.height)),dt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const _t=Math.floor(dt*Ut.width),Zt=Math.floor(dt*Ut.height);g===void 0&&(g=E(_t,Zt));const Gt=w?E(_t,Zt):g;return Gt.width=_t,Gt.height=Zt,Gt.getContext("2d").drawImage(B,0,0,_t,Zt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ut.width+"x"+Ut.height+") to ("+_t+"x"+Zt+")."),Gt}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ut.width+"x"+Ut.height+")."),B;return B}function M(B){return B.generateMipmaps}function _(B){o.generateMipmap(B)}function D(B){return B.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?o.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function R(B,w,rt,dt,Ut=!1){if(B!==null){if(o[B]!==void 0)return o[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let _t=w;if(w===o.RED&&(rt===o.FLOAT&&(_t=o.R32F),rt===o.HALF_FLOAT&&(_t=o.R16F),rt===o.UNSIGNED_BYTE&&(_t=o.R8)),w===o.RED_INTEGER&&(rt===o.UNSIGNED_BYTE&&(_t=o.R8UI),rt===o.UNSIGNED_SHORT&&(_t=o.R16UI),rt===o.UNSIGNED_INT&&(_t=o.R32UI),rt===o.BYTE&&(_t=o.R8I),rt===o.SHORT&&(_t=o.R16I),rt===o.INT&&(_t=o.R32I)),w===o.RG&&(rt===o.FLOAT&&(_t=o.RG32F),rt===o.HALF_FLOAT&&(_t=o.RG16F),rt===o.UNSIGNED_BYTE&&(_t=o.RG8)),w===o.RG_INTEGER&&(rt===o.UNSIGNED_BYTE&&(_t=o.RG8UI),rt===o.UNSIGNED_SHORT&&(_t=o.RG16UI),rt===o.UNSIGNED_INT&&(_t=o.RG32UI),rt===o.BYTE&&(_t=o.RG8I),rt===o.SHORT&&(_t=o.RG16I),rt===o.INT&&(_t=o.RG32I)),w===o.RGB_INTEGER&&(rt===o.UNSIGNED_BYTE&&(_t=o.RGB8UI),rt===o.UNSIGNED_SHORT&&(_t=o.RGB16UI),rt===o.UNSIGNED_INT&&(_t=o.RGB32UI),rt===o.BYTE&&(_t=o.RGB8I),rt===o.SHORT&&(_t=o.RGB16I),rt===o.INT&&(_t=o.RGB32I)),w===o.RGBA_INTEGER&&(rt===o.UNSIGNED_BYTE&&(_t=o.RGBA8UI),rt===o.UNSIGNED_SHORT&&(_t=o.RGBA16UI),rt===o.UNSIGNED_INT&&(_t=o.RGBA32UI),rt===o.BYTE&&(_t=o.RGBA8I),rt===o.SHORT&&(_t=o.RGBA16I),rt===o.INT&&(_t=o.RGBA32I)),w===o.RGB&&(rt===o.UNSIGNED_INT_5_9_9_9_REV&&(_t=o.RGB9_E5),rt===o.UNSIGNED_INT_10F_11F_11F_REV&&(_t=o.R11F_G11F_B10F)),w===o.RGBA){const Zt=Ut?ef:Le.getTransfer(dt);rt===o.FLOAT&&(_t=o.RGBA32F),rt===o.HALF_FLOAT&&(_t=o.RGBA16F),rt===o.UNSIGNED_BYTE&&(_t=Zt===Ye?o.SRGB8_ALPHA8:o.RGBA8),rt===o.UNSIGNED_SHORT_4_4_4_4&&(_t=o.RGBA4),rt===o.UNSIGNED_SHORT_5_5_5_1&&(_t=o.RGB5_A1)}return(_t===o.R16F||_t===o.R32F||_t===o.RG16F||_t===o.RG32F||_t===o.RGBA16F||_t===o.RGBA32F)&&t.get("EXT_color_buffer_float"),_t}function T(B,w){let rt;return B?w===null||w===ar||w===Pl?rt=o.DEPTH24_STENCIL8:w===ra?rt=o.DEPTH32F_STENCIL8:w===Ol&&(rt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===ar||w===Pl?rt=o.DEPTH_COMPONENT24:w===ra?rt=o.DEPTH_COMPONENT32F:w===Ol&&(rt=o.DEPTH_COMPONENT16),rt}function L(B,w){return M(B)===!0||B.isFramebufferTexture&&B.minFilter!==yi&&B.minFilter!==sa?Math.log2(Math.max(w.width,w.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?w.mipmaps.length:1}function z(B){const w=B.target;w.removeEventListener("dispose",z),I(w),w.isVideoTexture&&v.delete(w)}function P(B){const w=B.target;w.removeEventListener("dispose",P),A(w)}function I(B){const w=s.get(B);if(w.__webglInit===void 0)return;const rt=B.source,dt=y.get(rt);if(dt){const Ut=dt[w.__cacheKey];Ut.usedTimes--,Ut.usedTimes===0&&N(B),Object.keys(dt).length===0&&y.delete(rt)}s.remove(B)}function N(B){const w=s.get(B);o.deleteTexture(w.__webglTexture);const rt=B.source,dt=y.get(rt);delete dt[w.__cacheKey],f.memory.textures--}function A(B){const w=s.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),s.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(w.__webglFramebuffer[dt]))for(let Ut=0;Ut<w.__webglFramebuffer[dt].length;Ut++)o.deleteFramebuffer(w.__webglFramebuffer[dt][Ut]);else o.deleteFramebuffer(w.__webglFramebuffer[dt]);w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer[dt])}else{if(Array.isArray(w.__webglFramebuffer))for(let dt=0;dt<w.__webglFramebuffer.length;dt++)o.deleteFramebuffer(w.__webglFramebuffer[dt]);else o.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&o.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&o.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let dt=0;dt<w.__webglColorRenderbuffer.length;dt++)w.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(w.__webglColorRenderbuffer[dt]);w.__webglDepthRenderbuffer&&o.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const rt=B.textures;for(let dt=0,Ut=rt.length;dt<Ut;dt++){const _t=s.get(rt[dt]);_t.__webglTexture&&(o.deleteTexture(_t.__webglTexture),f.memory.textures--),s.remove(rt[dt])}s.remove(B)}let F=0;function Z(){F=0}function U(){const B=F;return B>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+l.maxTextures),F+=1,B}function Y(B){const w=[];return w.push(B.wrapS),w.push(B.wrapT),w.push(B.wrapR||0),w.push(B.magFilter),w.push(B.minFilter),w.push(B.anisotropy),w.push(B.internalFormat),w.push(B.format),w.push(B.type),w.push(B.generateMipmaps),w.push(B.premultiplyAlpha),w.push(B.flipY),w.push(B.unpackAlignment),w.push(B.colorSpace),w.join()}function q(B,w){const rt=s.get(B);if(B.isVideoTexture&&It(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&rt.__version!==B.version){const dt=B.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(rt,B,w);return}}else B.isExternalTexture&&(rt.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,rt.__webglTexture,o.TEXTURE0+w)}function k(B,w){const rt=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&rt.__version!==B.version){j(rt,B,w);return}i.bindTexture(o.TEXTURE_2D_ARRAY,rt.__webglTexture,o.TEXTURE0+w)}function $(B,w){const rt=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&rt.__version!==B.version){j(rt,B,w);return}i.bindTexture(o.TEXTURE_3D,rt.__webglTexture,o.TEXTURE0+w)}function Q(B,w){const rt=s.get(B);if(B.version>0&&rt.__version!==B.version){et(rt,B,w);return}i.bindTexture(o.TEXTURE_CUBE_MAP,rt.__webglTexture,o.TEXTURE0+w)}const gt={[Hp]:o.REPEAT,[er]:o.CLAMP_TO_EDGE,[Gp]:o.MIRRORED_REPEAT},St={[yi]:o.NEAREST,[$E]:o.NEAREST_MIPMAP_NEAREST,[mc]:o.NEAREST_MIPMAP_LINEAR,[sa]:o.LINEAR,[Wd]:o.LINEAR_MIPMAP_NEAREST,[nr]:o.LINEAR_MIPMAP_LINEAR},At={[iT]:o.NEVER,[uT]:o.ALWAYS,[aT]:o.LESS,[jx]:o.LEQUAL,[sT]:o.EQUAL,[lT]:o.GEQUAL,[rT]:o.GREATER,[oT]:o.NOTEQUAL};function qt(B,w){if(w.type===ra&&t.has("OES_texture_float_linear")===!1&&(w.magFilter===sa||w.magFilter===Wd||w.magFilter===mc||w.magFilter===nr||w.minFilter===sa||w.minFilter===Wd||w.minFilter===mc||w.minFilter===nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(B,o.TEXTURE_WRAP_S,gt[w.wrapS]),o.texParameteri(B,o.TEXTURE_WRAP_T,gt[w.wrapT]),(B===o.TEXTURE_3D||B===o.TEXTURE_2D_ARRAY)&&o.texParameteri(B,o.TEXTURE_WRAP_R,gt[w.wrapR]),o.texParameteri(B,o.TEXTURE_MAG_FILTER,St[w.magFilter]),o.texParameteri(B,o.TEXTURE_MIN_FILTER,St[w.minFilter]),w.compareFunction&&(o.texParameteri(B,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(B,o.TEXTURE_COMPARE_FUNC,At[w.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===yi||w.minFilter!==mc&&w.minFilter!==nr||w.type===ra&&t.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const rt=t.get("EXT_texture_filter_anisotropic");o.texParameterf(B,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,l.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function Ot(B,w){let rt=!1;B.__webglInit===void 0&&(B.__webglInit=!0,w.addEventListener("dispose",z));const dt=w.source;let Ut=y.get(dt);Ut===void 0&&(Ut={},y.set(dt,Ut));const _t=Y(w);if(_t!==B.__cacheKey){Ut[_t]===void 0&&(Ut[_t]={texture:o.createTexture(),usedTimes:0},f.memory.textures++,rt=!0),Ut[_t].usedTimes++;const Zt=Ut[B.__cacheKey];Zt!==void 0&&(Ut[B.__cacheKey].usedTimes--,Zt.usedTimes===0&&N(w)),B.__cacheKey=_t,B.__webglTexture=Ut[_t].texture}return rt}function G(B,w,rt){return Math.floor(Math.floor(B/rt)/w)}function ft(B,w,rt,dt){const _t=B.updateRanges;if(_t.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,w.width,w.height,rt,dt,w.data);else{_t.sort((Pt,Yt)=>Pt.start-Yt.start);let Zt=0;for(let Pt=1;Pt<_t.length;Pt++){const Yt=_t[Zt],he=_t[Pt],ie=Yt.start+Yt.count,ut=G(he.start,w.width,4),se=G(Yt.start,w.width,4);he.start<=ie+1&&ut===se&&G(he.start+he.count-1,w.width,4)===ut?Yt.count=Math.max(Yt.count,he.start+he.count-Yt.start):(++Zt,_t[Zt]=he)}_t.length=Zt+1;const Gt=o.getParameter(o.UNPACK_ROW_LENGTH),Jt=o.getParameter(o.UNPACK_SKIP_PIXELS),te=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,w.width);for(let Pt=0,Yt=_t.length;Pt<Yt;Pt++){const he=_t[Pt],ie=Math.floor(he.start/4),ut=Math.ceil(he.count/4),se=ie%w.width,W=Math.floor(ie/w.width),Bt=ut,kt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,se),o.pixelStorei(o.UNPACK_SKIP_ROWS,W),i.texSubImage2D(o.TEXTURE_2D,0,se,W,Bt,kt,rt,dt,w.data)}B.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Gt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,te)}}function j(B,w,rt){let dt=o.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),w.isData3DTexture&&(dt=o.TEXTURE_3D);const Ut=Ot(B,w),_t=w.source;i.bindTexture(dt,B.__webglTexture,o.TEXTURE0+rt);const Zt=s.get(_t);if(_t.version!==Zt.__version||Ut===!0){i.activeTexture(o.TEXTURE0+rt);const Gt=Le.getPrimaries(Le.workingColorSpace),Jt=w.colorSpace===vs?null:Le.getPrimaries(w.colorSpace),te=w.colorSpace===vs||Gt===Jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Pt=b(w.image,!1,l.maxTextureSize);Pt=re(w,Pt);const Yt=u.convert(w.format,w.colorSpace),he=u.convert(w.type);let ie=R(w.internalFormat,Yt,he,w.colorSpace,w.isVideoTexture);qt(dt,w);let ut;const se=w.mipmaps,W=w.isVideoTexture!==!0,Bt=Zt.__version===void 0||Ut===!0,kt=_t.dataReady,$t=L(w,Pt);if(w.isDepthTexture)ie=T(w.format===Il,w.type),Bt&&(W?i.texStorage2D(o.TEXTURE_2D,1,ie,Pt.width,Pt.height):i.texImage2D(o.TEXTURE_2D,0,ie,Pt.width,Pt.height,0,Yt,he,null));else if(w.isDataTexture)if(se.length>0){W&&Bt&&i.texStorage2D(o.TEXTURE_2D,$t,ie,se[0].width,se[0].height);for(let zt=0,Dt=se.length;zt<Dt;zt++)ut=se[zt],W?kt&&i.texSubImage2D(o.TEXTURE_2D,zt,0,0,ut.width,ut.height,Yt,he,ut.data):i.texImage2D(o.TEXTURE_2D,zt,ie,ut.width,ut.height,0,Yt,he,ut.data);w.generateMipmaps=!1}else W?(Bt&&i.texStorage2D(o.TEXTURE_2D,$t,ie,Pt.width,Pt.height),kt&&ft(w,Pt,Yt,he)):i.texImage2D(o.TEXTURE_2D,0,ie,Pt.width,Pt.height,0,Yt,he,Pt.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){W&&Bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,$t,ie,se[0].width,se[0].height,Pt.depth);for(let zt=0,Dt=se.length;zt<Dt;zt++)if(ut=se[zt],w.format!==ki)if(Yt!==null)if(W){if(kt)if(w.layerUpdates.size>0){const ae=Ky(ut.width,ut.height,w.format,w.type);for(const _e of w.layerUpdates){const je=ut.data.subarray(_e*ae/ut.data.BYTES_PER_ELEMENT,(_e+1)*ae/ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,zt,0,0,_e,ut.width,ut.height,1,Yt,je)}w.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,zt,0,0,0,ut.width,ut.height,Pt.depth,Yt,ut.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,zt,ie,ut.width,ut.height,Pt.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?kt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,zt,0,0,0,ut.width,ut.height,Pt.depth,Yt,he,ut.data):i.texImage3D(o.TEXTURE_2D_ARRAY,zt,ie,ut.width,ut.height,Pt.depth,0,Yt,he,ut.data)}else{W&&Bt&&i.texStorage2D(o.TEXTURE_2D,$t,ie,se[0].width,se[0].height);for(let zt=0,Dt=se.length;zt<Dt;zt++)ut=se[zt],w.format!==ki?Yt!==null?W?kt&&i.compressedTexSubImage2D(o.TEXTURE_2D,zt,0,0,ut.width,ut.height,Yt,ut.data):i.compressedTexImage2D(o.TEXTURE_2D,zt,ie,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?kt&&i.texSubImage2D(o.TEXTURE_2D,zt,0,0,ut.width,ut.height,Yt,he,ut.data):i.texImage2D(o.TEXTURE_2D,zt,ie,ut.width,ut.height,0,Yt,he,ut.data)}else if(w.isDataArrayTexture)if(W){if(Bt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,$t,ie,Pt.width,Pt.height,Pt.depth),kt)if(w.layerUpdates.size>0){const zt=Ky(Pt.width,Pt.height,w.format,w.type);for(const Dt of w.layerUpdates){const ae=Pt.data.subarray(Dt*zt/Pt.data.BYTES_PER_ELEMENT,(Dt+1)*zt/Pt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,Dt,Pt.width,Pt.height,1,Yt,he,ae)}w.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Pt.width,Pt.height,Pt.depth,Yt,he,Pt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,ie,Pt.width,Pt.height,Pt.depth,0,Yt,he,Pt.data);else if(w.isData3DTexture)W?(Bt&&i.texStorage3D(o.TEXTURE_3D,$t,ie,Pt.width,Pt.height,Pt.depth),kt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Pt.width,Pt.height,Pt.depth,Yt,he,Pt.data)):i.texImage3D(o.TEXTURE_3D,0,ie,Pt.width,Pt.height,Pt.depth,0,Yt,he,Pt.data);else if(w.isFramebufferTexture){if(Bt)if(W)i.texStorage2D(o.TEXTURE_2D,$t,ie,Pt.width,Pt.height);else{let zt=Pt.width,Dt=Pt.height;for(let ae=0;ae<$t;ae++)i.texImage2D(o.TEXTURE_2D,ae,ie,zt,Dt,0,Yt,he,null),zt>>=1,Dt>>=1}}else if(se.length>0){if(W&&Bt){const zt=oe(se[0]);i.texStorage2D(o.TEXTURE_2D,$t,ie,zt.width,zt.height)}for(let zt=0,Dt=se.length;zt<Dt;zt++)ut=se[zt],W?kt&&i.texSubImage2D(o.TEXTURE_2D,zt,0,0,Yt,he,ut):i.texImage2D(o.TEXTURE_2D,zt,ie,Yt,he,ut);w.generateMipmaps=!1}else if(W){if(Bt){const zt=oe(Pt);i.texStorage2D(o.TEXTURE_2D,$t,ie,zt.width,zt.height)}kt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Yt,he,Pt)}else i.texImage2D(o.TEXTURE_2D,0,ie,Yt,he,Pt);M(w)&&_(dt),Zt.__version=_t.version,w.onUpdate&&w.onUpdate(w)}B.__version=w.version}function et(B,w,rt){if(w.image.length!==6)return;const dt=Ot(B,w),Ut=w.source;i.bindTexture(o.TEXTURE_CUBE_MAP,B.__webglTexture,o.TEXTURE0+rt);const _t=s.get(Ut);if(Ut.version!==_t.__version||dt===!0){i.activeTexture(o.TEXTURE0+rt);const Zt=Le.getPrimaries(Le.workingColorSpace),Gt=w.colorSpace===vs?null:Le.getPrimaries(w.colorSpace),Jt=w.colorSpace===vs||Zt===Gt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,w.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,w.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);const te=w.isCompressedTexture||w.image[0].isCompressedTexture,Pt=w.image[0]&&w.image[0].isDataTexture,Yt=[];for(let Dt=0;Dt<6;Dt++)!te&&!Pt?Yt[Dt]=b(w.image[Dt],!0,l.maxCubemapSize):Yt[Dt]=Pt?w.image[Dt].image:w.image[Dt],Yt[Dt]=re(w,Yt[Dt]);const he=Yt[0],ie=u.convert(w.format,w.colorSpace),ut=u.convert(w.type),se=R(w.internalFormat,ie,ut,w.colorSpace),W=w.isVideoTexture!==!0,Bt=_t.__version===void 0||dt===!0,kt=Ut.dataReady;let $t=L(w,he);qt(o.TEXTURE_CUBE_MAP,w);let zt;if(te){W&&Bt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,$t,se,he.width,he.height);for(let Dt=0;Dt<6;Dt++){zt=Yt[Dt].mipmaps;for(let ae=0;ae<zt.length;ae++){const _e=zt[ae];w.format!==ki?ie!==null?W?kt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,ae,0,0,_e.width,_e.height,ie,_e.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,ae,se,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?kt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,ae,0,0,_e.width,_e.height,ie,ut,_e.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,ae,se,_e.width,_e.height,0,ie,ut,_e.data)}}}else{if(zt=w.mipmaps,W&&Bt){zt.length>0&&$t++;const Dt=oe(Yt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,$t,se,Dt.width,Dt.height)}for(let Dt=0;Dt<6;Dt++)if(Pt){W?kt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,Yt[Dt].width,Yt[Dt].height,ie,ut,Yt[Dt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,se,Yt[Dt].width,Yt[Dt].height,0,ie,ut,Yt[Dt].data);for(let ae=0;ae<zt.length;ae++){const je=zt[ae].image[Dt].image;W?kt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,ae+1,0,0,je.width,je.height,ie,ut,je.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,ae+1,se,je.width,je.height,0,ie,ut,je.data)}}else{W?kt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,0,0,ie,ut,Yt[Dt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0,se,ie,ut,Yt[Dt]);for(let ae=0;ae<zt.length;ae++){const _e=zt[ae];W?kt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,ae+1,0,0,ie,ut,_e.image[Dt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,ae+1,se,ie,ut,_e.image[Dt])}}}M(w)&&_(o.TEXTURE_CUBE_MAP),_t.__version=Ut.version,w.onUpdate&&w.onUpdate(w)}B.__version=w.version}function xt(B,w,rt,dt,Ut,_t){const Zt=u.convert(rt.format,rt.colorSpace),Gt=u.convert(rt.type),Jt=R(rt.internalFormat,Zt,Gt,rt.colorSpace),te=s.get(w),Pt=s.get(rt);if(Pt.__renderTarget=w,!te.__hasExternalTextures){const Yt=Math.max(1,w.width>>_t),he=Math.max(1,w.height>>_t);Ut===o.TEXTURE_3D||Ut===o.TEXTURE_2D_ARRAY?i.texImage3D(Ut,_t,Jt,Yt,he,w.depth,0,Zt,Gt,null):i.texImage2D(Ut,_t,Jt,Yt,he,0,Zt,Gt,null)}i.bindFramebuffer(o.FRAMEBUFFER,B),Nt(w)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,Ut,Pt.__webglTexture,0,Rt(w)):(Ut===o.TEXTURE_2D||Ut>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Ut<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,Ut,Pt.__webglTexture,_t),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ct(B,w,rt){if(o.bindRenderbuffer(o.RENDERBUFFER,B),w.depthBuffer){const dt=w.depthTexture,Ut=dt&&dt.isDepthTexture?dt.type:null,_t=T(w.stencilBuffer,Ut),Zt=w.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Gt=Rt(w);Nt(w)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Gt,_t,w.width,w.height):rt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Gt,_t,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,_t,w.width,w.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Zt,o.RENDERBUFFER,B)}else{const dt=w.textures;for(let Ut=0;Ut<dt.length;Ut++){const _t=dt[Ut],Zt=u.convert(_t.format,_t.colorSpace),Gt=u.convert(_t.type),Jt=R(_t.internalFormat,Zt,Gt,_t.colorSpace),te=Rt(w);rt&&Nt(w)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,te,Jt,w.width,w.height):Nt(w)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,te,Jt,w.width,w.height):o.renderbufferStorage(o.RENDERBUFFER,Jt,w.width,w.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function wt(B,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,B),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(w.depthTexture);dt.__renderTarget=w,(!dt.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),q(w.depthTexture,0);const Ut=dt.__webglTexture,_t=Rt(w);if(w.depthTexture.format===zl)Nt(w)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ut,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Ut,0);else if(w.depthTexture.format===Il)Nt(w)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ut,0,_t):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Ut,0);else throw new Error("Unknown depthTexture format")}function Mt(B){const w=s.get(B),rt=B.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==B.depthTexture){const dt=B.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),dt){const Ut=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,dt.removeEventListener("dispose",Ut)};dt.addEventListener("dispose",Ut),w.__depthDisposeCallback=Ut}w.__boundDepthTexture=dt}if(B.depthTexture&&!w.__autoAllocateDepthBuffer){if(rt)throw new Error("target.depthTexture not supported in Cube render targets");const dt=B.texture.mipmaps;dt&&dt.length>0?wt(w.__webglFramebuffer[0],B):wt(w.__webglFramebuffer,B)}else if(rt){w.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[dt]),w.__webglDepthbuffer[dt]===void 0)w.__webglDepthbuffer[dt]=o.createRenderbuffer(),Ct(w.__webglDepthbuffer[dt],B,!1);else{const Ut=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_t=w.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,_t),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ut,o.RENDERBUFFER,_t)}}else{const dt=B.texture.mipmaps;if(dt&&dt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=o.createRenderbuffer(),Ct(w.__webglDepthbuffer,B,!1);else{const Ut=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,_t=w.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,_t),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ut,o.RENDERBUFFER,_t)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Lt(B,w,rt){const dt=s.get(B);w!==void 0&&xt(dt.__webglFramebuffer,B,B.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),rt!==void 0&&Mt(B)}function H(B){const w=B.texture,rt=s.get(B),dt=s.get(w);B.addEventListener("dispose",P);const Ut=B.textures,_t=B.isWebGLCubeRenderTarget===!0,Zt=Ut.length>1;if(Zt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=w.version,f.memory.textures++),_t){rt.__webglFramebuffer=[];for(let Gt=0;Gt<6;Gt++)if(w.mipmaps&&w.mipmaps.length>0){rt.__webglFramebuffer[Gt]=[];for(let Jt=0;Jt<w.mipmaps.length;Jt++)rt.__webglFramebuffer[Gt][Jt]=o.createFramebuffer()}else rt.__webglFramebuffer[Gt]=o.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){rt.__webglFramebuffer=[];for(let Gt=0;Gt<w.mipmaps.length;Gt++)rt.__webglFramebuffer[Gt]=o.createFramebuffer()}else rt.__webglFramebuffer=o.createFramebuffer();if(Zt)for(let Gt=0,Jt=Ut.length;Gt<Jt;Gt++){const te=s.get(Ut[Gt]);te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture(),f.memory.textures++)}if(B.samples>0&&Nt(B)===!1){rt.__webglMultisampledFramebuffer=o.createFramebuffer(),rt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let Gt=0;Gt<Ut.length;Gt++){const Jt=Ut[Gt];rt.__webglColorRenderbuffer[Gt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,rt.__webglColorRenderbuffer[Gt]);const te=u.convert(Jt.format,Jt.colorSpace),Pt=u.convert(Jt.type),Yt=R(Jt.internalFormat,te,Pt,Jt.colorSpace,B.isXRRenderTarget===!0),he=Rt(B);o.renderbufferStorageMultisample(o.RENDERBUFFER,he,Yt,B.width,B.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Gt,o.RENDERBUFFER,rt.__webglColorRenderbuffer[Gt])}o.bindRenderbuffer(o.RENDERBUFFER,null),B.depthBuffer&&(rt.__webglDepthRenderbuffer=o.createRenderbuffer(),Ct(rt.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(_t){i.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),qt(o.TEXTURE_CUBE_MAP,w);for(let Gt=0;Gt<6;Gt++)if(w.mipmaps&&w.mipmaps.length>0)for(let Jt=0;Jt<w.mipmaps.length;Jt++)xt(rt.__webglFramebuffer[Gt][Jt],B,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,Jt);else xt(rt.__webglFramebuffer[Gt],B,w,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0);M(w)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Gt=0,Jt=Ut.length;Gt<Jt;Gt++){const te=Ut[Gt],Pt=s.get(te);let Yt=o.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Yt=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Yt,Pt.__webglTexture),qt(Yt,te),xt(rt.__webglFramebuffer,B,te,o.COLOR_ATTACHMENT0+Gt,Yt,0),M(te)&&_(Yt)}i.unbindTexture()}else{let Gt=o.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Gt=B.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Gt,dt.__webglTexture),qt(Gt,w),w.mipmaps&&w.mipmaps.length>0)for(let Jt=0;Jt<w.mipmaps.length;Jt++)xt(rt.__webglFramebuffer[Jt],B,w,o.COLOR_ATTACHMENT0,Gt,Jt);else xt(rt.__webglFramebuffer,B,w,o.COLOR_ATTACHMENT0,Gt,0);M(w)&&_(Gt),i.unbindTexture()}B.depthBuffer&&Mt(B)}function bt(B){const w=B.textures;for(let rt=0,dt=w.length;rt<dt;rt++){const Ut=w[rt];if(M(Ut)){const _t=D(B),Zt=s.get(Ut).__webglTexture;i.bindTexture(_t,Zt),_(_t),i.unbindTexture()}}}const yt=[],ht=[];function vt(B){if(B.samples>0){if(Nt(B)===!1){const w=B.textures,rt=B.width,dt=B.height;let Ut=o.COLOR_BUFFER_BIT;const _t=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Zt=s.get(B),Gt=w.length>1;if(Gt)for(let te=0;te<w.length;te++)i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Jt=B.texture.mipmaps;Jt&&Jt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let te=0;te<w.length;te++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Ut|=o.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Ut|=o.STENCIL_BUFFER_BIT)),Gt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[te]);const Pt=s.get(w[te]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Pt,0)}o.blitFramebuffer(0,0,rt,dt,0,0,rt,dt,Ut,o.NEAREST),p===!0&&(yt.length=0,ht.length=0,yt.push(o.COLOR_ATTACHMENT0+te),B.depthBuffer&&B.resolveDepthBuffer===!1&&(yt.push(_t),ht.push(_t),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ht)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,yt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Gt)for(let te=0;te<w.length;te++){i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.RENDERBUFFER,Zt.__webglColorRenderbuffer[te]);const Pt=s.get(w[te]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Zt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+te,o.TEXTURE_2D,Pt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&p){const w=B.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[w])}}}function Rt(B){return Math.min(l.maxSamples,B.samples)}function Nt(B){const w=s.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function It(B){const w=f.render.frame;v.get(B)!==w&&(v.set(B,w),B.update())}function re(B,w){const rt=B.colorSpace,dt=B.format,Ut=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||rt!==So&&rt!==vs&&(Le.getTransfer(rt)===Ye?(dt!==ki||Ut!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",rt)),w}function oe(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(m.width=B.naturalWidth||B.width,m.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(m.width=B.displayWidth,m.height=B.displayHeight):(m.width=B.width,m.height=B.height),m}this.allocateTextureUnit=U,this.resetTextureUnits=Z,this.setTexture2D=q,this.setTexture2DArray=k,this.setTexture3D=$,this.setTextureCube=Q,this.rebindTextures=Lt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=Nt}function xR(o,t){function i(s,l=vs){let u;const f=Le.getTransfer(l);if(s===qi)return o.UNSIGNED_BYTE;if(s===wm)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Cm)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Gx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Vx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===Fx)return o.BYTE;if(s===Hx)return o.SHORT;if(s===Ol)return o.UNSIGNED_SHORT;if(s===Am)return o.INT;if(s===ar)return o.UNSIGNED_INT;if(s===ra)return o.FLOAT;if(s===Xi)return o.HALF_FLOAT;if(s===kx)return o.ALPHA;if(s===Xx)return o.RGB;if(s===ki)return o.RGBA;if(s===zl)return o.DEPTH_COMPONENT;if(s===Il)return o.DEPTH_STENCIL;if(s===Rm)return o.RED;if(s===Dm)return o.RED_INTEGER;if(s===qx)return o.RG;if(s===Nm)return o.RG_INTEGER;if(s===Um)return o.RGBA_INTEGER;if(s===Wc||s===Zc||s===Qc||s===Kc)if(f===Ye)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Wc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Zc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Qc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Wc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Zc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Qc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vp||s===kp||s===Xp||s===qp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Vp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===kp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===qp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Yp||s===jp||s===Wp)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===Yp||s===jp)return f===Ye?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Wp)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Zp||s===Qp||s===Kp||s===Jp||s===$p||s===tm||s===em||s===nm||s===im||s===am||s===sm||s===rm||s===om||s===lm)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Zp)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Qp)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Kp)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Jp)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===$p)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tm)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===em)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===nm)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===im)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===am)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===sm)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===rm)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===om)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===lm)return f===Ye?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===um||s===cm||s===fm)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===um)return f===Ye?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===cm)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===fm)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===hm||s===dm||s===pm||s===mm)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===hm)return u.COMPRESSED_RED_RGTC1_EXT;if(s===dm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===pm)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===mm)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Pl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const SR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,MR=`
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

}`;class ER{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new rS(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new en({vertexShader:SR,fragmentShader:MR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new an(new xs(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class TR extends bo{constructor(t,i){super();const s=this;let l=null,u=1,f=null,d="local-floor",p=1,m=null,v=null,g=null,y=null,x=null,E=null;const b=typeof XRWebGLBinding<"u",M=new ER,_={},D=i.getContextAttributes();let R=null,T=null;const L=[],z=[],P=new Ht;let I=null;const N=new vi;N.viewport=new fn;const A=new vi;A.viewport=new fn;const F=[N,A],Z=new qb;let U=null,Y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let et=L[j];return et===void 0&&(et=new mp,L[j]=et),et.getTargetRaySpace()},this.getControllerGrip=function(j){let et=L[j];return et===void 0&&(et=new mp,L[j]=et),et.getGripSpace()},this.getHand=function(j){let et=L[j];return et===void 0&&(et=new mp,L[j]=et),et.getHandSpace()};function q(j){const et=z.indexOf(j.inputSource);if(et===-1)return;const xt=L[et];xt!==void 0&&(xt.update(j.inputSource,j.frame,m||f),xt.dispatchEvent({type:j.type,data:j.inputSource}))}function k(){l.removeEventListener("select",q),l.removeEventListener("selectstart",q),l.removeEventListener("selectend",q),l.removeEventListener("squeeze",q),l.removeEventListener("squeezestart",q),l.removeEventListener("squeezeend",q),l.removeEventListener("end",k),l.removeEventListener("inputsourceschange",$);for(let j=0;j<L.length;j++){const et=z[j];et!==null&&(z[j]=null,L[j].disconnect(et))}U=null,Y=null,M.reset();for(const j in _)delete _[j];t.setRenderTarget(R),x=null,y=null,g=null,l=null,T=null,ft.stop(),s.isPresenting=!1,t.setPixelRatio(I),t.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){u=j,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){d=j,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(j){m=j},this.getBaseLayer=function(){return y!==null?y:x},this.getBinding=function(){return g===null&&b&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(j){if(l=j,l!==null){if(R=t.getRenderTarget(),l.addEventListener("select",q),l.addEventListener("selectstart",q),l.addEventListener("selectend",q),l.addEventListener("squeeze",q),l.addEventListener("squeezestart",q),l.addEventListener("squeezeend",q),l.addEventListener("end",k),l.addEventListener("inputsourceschange",$),D.xrCompatible!==!0&&await i.makeXRCompatible(),I=t.getPixelRatio(),t.getSize(P),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let xt=null,Ct=null,wt=null;D.depth&&(wt=D.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,xt=D.stencil?Il:zl,Ct=D.stencil?Pl:ar);const Mt={colorFormat:i.RGBA8,depthFormat:wt,scaleFactor:u};g=this.getBinding(),y=g.createProjectionLayer(Mt),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),T=new Ui(y.textureWidth,y.textureHeight,{format:ki,type:qi,depthTexture:new sS(y.textureWidth,y.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,xt),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const xt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:u};x=new XRWebGLLayer(l,i,xt),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),T=new Ui(x.framebufferWidth,x.framebufferHeight,{format:ki,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),ft.setContext(l),ft.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function $(j){for(let et=0;et<j.removed.length;et++){const xt=j.removed[et],Ct=z.indexOf(xt);Ct>=0&&(z[Ct]=null,L[Ct].disconnect(xt))}for(let et=0;et<j.added.length;et++){const xt=j.added[et];let Ct=z.indexOf(xt);if(Ct===-1){for(let Mt=0;Mt<L.length;Mt++)if(Mt>=z.length){z.push(xt),Ct=Mt;break}else if(z[Mt]===null){z[Mt]=xt,Ct=Mt;break}if(Ct===-1)break}const wt=L[Ct];wt&&wt.connect(xt)}}const Q=new V,gt=new V;function St(j,et,xt){Q.setFromMatrixPosition(et.matrixWorld),gt.setFromMatrixPosition(xt.matrixWorld);const Ct=Q.distanceTo(gt),wt=et.projectionMatrix.elements,Mt=xt.projectionMatrix.elements,Lt=wt[14]/(wt[10]-1),H=wt[14]/(wt[10]+1),bt=(wt[9]+1)/wt[5],yt=(wt[9]-1)/wt[5],ht=(wt[8]-1)/wt[0],vt=(Mt[8]+1)/Mt[0],Rt=Lt*ht,Nt=Lt*vt,It=Ct/(-ht+vt),re=It*-ht;if(et.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(re),j.translateZ(It),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),wt[10]===-1)j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const oe=Lt+It,B=H+It,w=Rt-re,rt=Nt+(Ct-re),dt=bt*H/B*oe,Ut=yt*H/B*oe;j.projectionMatrix.makePerspective(w,rt,dt,Ut,oe,B),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function At(j,et){et===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(et.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(l===null)return;let et=j.near,xt=j.far;M.texture!==null&&(M.depthNear>0&&(et=M.depthNear),M.depthFar>0&&(xt=M.depthFar)),Z.near=A.near=N.near=et,Z.far=A.far=N.far=xt,(U!==Z.near||Y!==Z.far)&&(l.updateRenderState({depthNear:Z.near,depthFar:Z.far}),U=Z.near,Y=Z.far),Z.layers.mask=j.layers.mask|6,N.layers.mask=Z.layers.mask&3,A.layers.mask=Z.layers.mask&5;const Ct=j.parent,wt=Z.cameras;At(Z,Ct);for(let Mt=0;Mt<wt.length;Mt++)At(wt[Mt],Ct);wt.length===2?St(Z,N,A):Z.projectionMatrix.copy(N.projectionMatrix),qt(j,Z,Ct)};function qt(j,et,xt){xt===null?j.matrix.copy(et.matrixWorld):(j.matrix.copy(xt.matrixWorld),j.matrix.invert(),j.matrix.multiply(et.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Bl*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return Z},this.getFoveation=function(){if(!(y===null&&x===null))return p},this.setFoveation=function(j){p=j,y!==null&&(y.fixedFoveation=j),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=j)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Z)},this.getCameraTexture=function(j){return _[j]};let Ot=null;function G(j,et){if(v=et.getViewerPose(m||f),E=et,v!==null){const xt=v.views;x!==null&&(t.setRenderTargetFramebuffer(T,x.framebuffer),t.setRenderTarget(T));let Ct=!1;xt.length!==Z.cameras.length&&(Z.cameras.length=0,Ct=!0);for(let H=0;H<xt.length;H++){const bt=xt[H];let yt=null;if(x!==null)yt=x.getViewport(bt);else{const vt=g.getViewSubImage(y,bt);yt=vt.viewport,H===0&&(t.setRenderTargetTextures(T,vt.colorTexture,vt.depthStencilTexture),t.setRenderTarget(T))}let ht=F[H];ht===void 0&&(ht=new vi,ht.layers.enable(H),ht.viewport=new fn,F[H]=ht),ht.matrix.fromArray(bt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(bt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(yt.x,yt.y,yt.width,yt.height),H===0&&(Z.matrix.copy(ht.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale)),Ct===!0&&Z.cameras.push(ht)}const wt=l.enabledFeatures;if(wt&&wt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&b){g=s.getBinding();const H=g.getDepthInformation(xt[0]);H&&H.isValid&&H.texture&&M.init(H,l.renderState)}if(wt&&wt.includes("camera-access")&&b){t.state.unbindTexture(),g=s.getBinding();for(let H=0;H<xt.length;H++){const bt=xt[H].camera;if(bt){let yt=_[bt];yt||(yt=new rS,_[bt]=yt);const ht=g.getCameraImage(bt);yt.sourceTexture=ht}}}}for(let xt=0;xt<L.length;xt++){const Ct=z[xt],wt=L[xt];Ct!==null&&wt!==void 0&&wt.update(Ct,et,m||f)}Ot&&Ot(j,et),et.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:et}),E=null}const ft=new _S;ft.setAnimationLoop(G),this.setAnimationLoop=function(j){Ot=j},this.dispose=function(){}}}const Qs=new xi,bR=new Ve;function AR(o,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function s(M,_){_.color.getRGB(M.fogColor.value,tS(o)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,D,R,T){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(M,_):_.isMeshToonMaterial?(u(M,_),g(M,_)):_.isMeshPhongMaterial?(u(M,_),v(M,_)):_.isMeshStandardMaterial?(u(M,_),y(M,_),_.isMeshPhysicalMaterial&&x(M,_,T)):_.isMeshMatcapMaterial?(u(M,_),E(M,_)):_.isMeshDepthMaterial?u(M,_):_.isMeshDistanceMaterial?(u(M,_),b(M,_)):_.isMeshNormalMaterial?u(M,_):_.isLineBasicMaterial?(f(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?p(M,_,D,R):_.isSpriteMaterial?m(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Xn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Xn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const D=t.get(_),R=D.envMap,T=D.envMapRotation;R&&(M.envMap.value=R,Qs.copy(T),Qs.x*=-1,Qs.y*=-1,Qs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Qs.y*=-1,Qs.z*=-1),M.envMapRotation.value.setFromMatrix4(bR.makeRotationFromEuler(Qs)),M.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function f(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function p(M,_,D,R){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*D,M.scale.value=R*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function m(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function v(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function g(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function y(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function x(M,_,D){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Xn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=D.texture,M.transmissionSamplerSize.value.set(D.width,D.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,_){_.matcap&&(M.matcap.value=_.matcap)}function b(M,_){const D=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(D.matrixWorld),M.nearDistance.value=D.shadow.camera.near,M.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function wR(o,t,i,s){let l={},u={},f=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,R){const T=R.program;s.uniformBlockBinding(D,T)}function m(D,R){let T=l[D.id];T===void 0&&(E(D),T=v(D),l[D.id]=T,D.addEventListener("dispose",M));const L=R.program;s.updateUBOMapping(D,L);const z=t.render.frame;u[D.id]!==z&&(y(D),u[D.id]=z)}function v(D){const R=g();D.__bindingPointIndex=R;const T=o.createBuffer(),L=D.__size,z=D.usage;return o.bindBuffer(o.UNIFORM_BUFFER,T),o.bufferData(o.UNIFORM_BUFFER,L,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,R,T),T}function g(){for(let D=0;D<d;D++)if(f.indexOf(D)===-1)return f.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(D){const R=l[D.id],T=D.uniforms,L=D.__cache;o.bindBuffer(o.UNIFORM_BUFFER,R);for(let z=0,P=T.length;z<P;z++){const I=Array.isArray(T[z])?T[z]:[T[z]];for(let N=0,A=I.length;N<A;N++){const F=I[N];if(x(F,z,N,L)===!0){const Z=F.__offset,U=Array.isArray(F.value)?F.value:[F.value];let Y=0;for(let q=0;q<U.length;q++){const k=U[q],$=b(k);typeof k=="number"||typeof k=="boolean"?(F.__data[0]=k,o.bufferSubData(o.UNIFORM_BUFFER,Z+Y,F.__data)):k.isMatrix3?(F.__data[0]=k.elements[0],F.__data[1]=k.elements[1],F.__data[2]=k.elements[2],F.__data[3]=0,F.__data[4]=k.elements[3],F.__data[5]=k.elements[4],F.__data[6]=k.elements[5],F.__data[7]=0,F.__data[8]=k.elements[6],F.__data[9]=k.elements[7],F.__data[10]=k.elements[8],F.__data[11]=0):(k.toArray(F.__data,Y),Y+=$.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,Z,F.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function x(D,R,T,L){const z=D.value,P=R+"_"+T;if(L[P]===void 0)return typeof z=="number"||typeof z=="boolean"?L[P]=z:L[P]=z.clone(),!0;{const I=L[P];if(typeof z=="number"||typeof z=="boolean"){if(I!==z)return L[P]=z,!0}else if(I.equals(z)===!1)return I.copy(z),!0}return!1}function E(D){const R=D.uniforms;let T=0;const L=16;for(let P=0,I=R.length;P<I;P++){const N=Array.isArray(R[P])?R[P]:[R[P]];for(let A=0,F=N.length;A<F;A++){const Z=N[A],U=Array.isArray(Z.value)?Z.value:[Z.value];for(let Y=0,q=U.length;Y<q;Y++){const k=U[Y],$=b(k),Q=T%L,gt=Q%$.boundary,St=Q+gt;T+=gt,St!==0&&L-St<$.storage&&(T+=L-St),Z.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Z.__offset=T,T+=$.storage}}}const z=T%L;return z>0&&(T+=L-z),D.__size=T,D.__cache={},this}function b(D){const R={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(R.boundary=4,R.storage=4):D.isVector2?(R.boundary=8,R.storage=8):D.isVector3||D.isColor?(R.boundary=16,R.storage=12):D.isVector4?(R.boundary=16,R.storage=16):D.isMatrix3?(R.boundary=48,R.storage=48):D.isMatrix4?(R.boundary=64,R.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),R}function M(D){const R=D.target;R.removeEventListener("dispose",M);const T=f.indexOf(R.__bindingPointIndex);f.splice(T,1),o.deleteBuffer(l[R.id]),delete l[R.id],delete u[R.id]}function _(){for(const D in l)o.deleteBuffer(l[D]);f=[],l={},u={}}return{bind:p,update:m,dispose:_}}class CR{constructor(t={}){const{canvas:i=AT(),context:s=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let x;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=s.getContextAttributes().alpha}else x=f;const E=new Uint32Array(4),b=new Int32Array(4);let M=null,_=null;const D=[],R=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Oa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const T=this;let L=!1;this._outputColorSpace=si;let z=0,P=0,I=null,N=-1,A=null;const F=new fn,Z=new fn;let U=null;const Y=new ue(0);let q=0,k=i.width,$=i.height,Q=1,gt=null,St=null;const At=new fn(0,0,k,$),qt=new fn(0,0,k,$);let Ot=!1;const G=new zm;let ft=!1,j=!1;const et=new Ve,xt=new V,Ct=new fn,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function Lt(){return I===null?Q:1}let H=s;function bt(O,at){return i.getContext(O,at)}try{const O={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Tm}`),i.addEventListener("webglcontextlost",kt,!1),i.addEventListener("webglcontextrestored",$t,!1),i.addEventListener("webglcontextcreationerror",zt,!1),H===null){const at="webgl2";if(H=bt(at,O),H===null)throw bt(at)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw console.error("THREE.WebGLRenderer: "+O.message),O}let yt,ht,vt,Rt,Nt,It,re,oe,B,w,rt,dt,Ut,_t,Zt,Gt,Jt,te,Pt,Yt,he,ie,ut,se;function W(){yt=new Bw(H),yt.init(),ie=new xR(H,yt),ht=new Nw(H,yt,t,ie),vt=new _R(H,yt),ht.reversedDepthBuffer&&y&&vt.buffers.depth.setReversed(!0),Rt=new Gw(H),Nt=new sR,It=new yR(H,yt,vt,Nt,ht,ie,Rt),re=new Lw(T),oe=new Iw(T),B=new jb(H),ut=new Rw(H,B),w=new Fw(H,B,Rt,ut),rt=new kw(H,w,B,Rt),Pt=new Vw(H,ht,It),Gt=new Uw(Nt),dt=new aR(T,re,oe,yt,ht,ut,Gt),Ut=new AR(T,Nt),_t=new oR,Zt=new dR(yt),te=new Cw(T,re,oe,vt,rt,x,p),Jt=new gR(T,rt,ht),se=new wR(H,Rt,ht,vt),Yt=new Dw(H,yt,Rt),he=new Hw(H,yt,Rt),Rt.programs=dt.programs,T.capabilities=ht,T.extensions=yt,T.properties=Nt,T.renderLists=_t,T.shadowMap=Jt,T.state=vt,T.info=Rt}W();const Bt=new TR(T,H);this.xr=Bt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const O=yt.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=yt.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(O){O!==void 0&&(Q=O,this.setSize(k,$,!1))},this.getSize=function(O){return O.set(k,$)},this.setSize=function(O,at,pt=!0){if(Bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=O,$=at,i.width=Math.floor(O*Q),i.height=Math.floor(at*Q),pt===!0&&(i.style.width=O+"px",i.style.height=at+"px"),this.setViewport(0,0,O,at)},this.getDrawingBufferSize=function(O){return O.set(k*Q,$*Q).floor()},this.setDrawingBufferSize=function(O,at,pt){k=O,$=at,Q=pt,i.width=Math.floor(O*pt),i.height=Math.floor(at*pt),this.setViewport(0,0,O,at)},this.getCurrentViewport=function(O){return O.copy(F)},this.getViewport=function(O){return O.copy(At)},this.setViewport=function(O,at,pt,mt){O.isVector4?At.set(O.x,O.y,O.z,O.w):At.set(O,at,pt,mt),vt.viewport(F.copy(At).multiplyScalar(Q).round())},this.getScissor=function(O){return O.copy(qt)},this.setScissor=function(O,at,pt,mt){O.isVector4?qt.set(O.x,O.y,O.z,O.w):qt.set(O,at,pt,mt),vt.scissor(Z.copy(qt).multiplyScalar(Q).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(O){vt.setScissorTest(Ot=O)},this.setOpaqueSort=function(O){gt=O},this.setTransparentSort=function(O){St=O},this.getClearColor=function(O){return O.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(O=!0,at=!0,pt=!0){let mt=0;if(O){let st=!1;if(I!==null){const Ft=I.texture.format;st=Ft===Um||Ft===Nm||Ft===Dm}if(st){const Ft=I.texture.type,jt=Ft===qi||Ft===ar||Ft===Ol||Ft===Pl||Ft===wm||Ft===Cm,Qt=te.getClearColor(),Vt=te.getClearAlpha(),ee=Qt.r,pe=Qt.g,ce=Qt.b;jt?(E[0]=ee,E[1]=pe,E[2]=ce,E[3]=Vt,H.clearBufferuiv(H.COLOR,0,E)):(b[0]=ee,b[1]=pe,b[2]=ce,b[3]=Vt,H.clearBufferiv(H.COLOR,0,b))}else mt|=H.COLOR_BUFFER_BIT}at&&(mt|=H.DEPTH_BUFFER_BIT),pt&&(mt|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(mt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",kt,!1),i.removeEventListener("webglcontextrestored",$t,!1),i.removeEventListener("webglcontextcreationerror",zt,!1),te.dispose(),_t.dispose(),Zt.dispose(),Nt.dispose(),re.dispose(),oe.dispose(),rt.dispose(),ut.dispose(),se.dispose(),dt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",Mn),Bt.removeEventListener("sessionend",Bn),ua.stop()};function kt(O){O.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function $t(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const O=Rt.autoReset,at=Jt.enabled,pt=Jt.autoUpdate,mt=Jt.needsUpdate,st=Jt.type;W(),Rt.autoReset=O,Jt.enabled=at,Jt.autoUpdate=pt,Jt.needsUpdate=mt,Jt.type=st}function zt(O){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function Dt(O){const at=O.target;at.removeEventListener("dispose",Dt),ae(at)}function ae(O){_e(O),Nt.remove(O)}function _e(O){const at=Nt.get(O).programs;at!==void 0&&(at.forEach(function(pt){dt.releaseProgram(pt)}),O.isShaderMaterial&&dt.releaseShaderCache(O))}this.renderBufferDirect=function(O,at,pt,mt,st,Ft){at===null&&(at=wt);const jt=st.isMesh&&st.matrixWorld.determinant()<0,Qt=jl(O,at,pt,mt,st);vt.setMaterial(mt,jt);let Vt=pt.index,ee=1;if(mt.wireframe===!0){if(Vt=w.getWireframeAttribute(pt),Vt===void 0)return;ee=2}const pe=pt.drawRange,ce=pt.attributes.position;let be=pe.start*ee,He=(pe.start+pe.count)*ee;Ft!==null&&(be=Math.max(be,Ft.start*ee),He=Math.min(He,(Ft.start+Ft.count)*ee)),Vt!==null?(be=Math.max(be,0),He=Math.min(He,Vt.count)):ce!=null&&(be=Math.max(be,0),He=Math.min(He,ce.count));const tn=He-be;if(tn<0||tn===1/0)return;ut.setup(st,mt,Qt,pt,Vt);let Ie,Oe=Yt;if(Vt!==null&&(Ie=B.get(Vt),Oe=he,Oe.setIndex(Ie)),st.isMesh)mt.wireframe===!0?(vt.setLineWidth(mt.wireframeLinewidth*Lt()),Oe.setMode(H.LINES)):Oe.setMode(H.TRIANGLES);else if(st.isLine){let fe=mt.linewidth;fe===void 0&&(fe=1),vt.setLineWidth(fe*Lt()),st.isLineSegments?Oe.setMode(H.LINES):st.isLineLoop?Oe.setMode(H.LINE_LOOP):Oe.setMode(H.LINE_STRIP)}else st.isPoints?Oe.setMode(H.POINTS):st.isSprite&&Oe.setMode(H.TRIANGLES);if(st.isBatchedMesh)if(st._multiDrawInstances!==null)Fl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount,st._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))Oe.renderMultiDraw(st._multiDrawStarts,st._multiDrawCounts,st._multiDrawCount);else{const fe=st._multiDrawStarts,Be=st._multiDrawCounts,Ee=st._multiDrawCount,En=Vt?B.get(Vt).bytesPerElement:1,ri=Nt.get(mt).currentProgram.getUniforms();for(let Pe=0;Pe<Ee;Pe++)ri.setValue(H,"_gl_DrawID",Pe),Oe.render(fe[Pe]/En,Be[Pe])}else if(st.isInstancedMesh)Oe.renderInstances(be,tn,st.count);else if(pt.isInstancedBufferGeometry){const fe=pt._maxInstanceCount!==void 0?pt._maxInstanceCount:1/0,Be=Math.min(pt.instanceCount,fe);Oe.renderInstances(be,tn,Be)}else Oe.render(be,tn)};function je(O,at,pt){O.transparent===!0&&O.side===_i&&O.forceSinglePass===!1?(O.side=Xn,O.needsUpdate=!0,Si(O,at,pt),O.side=ys,O.needsUpdate=!0,Si(O,at,pt),O.side=_i):Si(O,at,pt)}this.compile=function(O,at,pt=null){pt===null&&(pt=O),_=Zt.get(pt),_.init(at),R.push(_),pt.traverseVisible(function(st){st.isLight&&st.layers.test(at.layers)&&(_.pushLight(st),st.castShadow&&_.pushShadow(st))}),O!==pt&&O.traverseVisible(function(st){st.isLight&&st.layers.test(at.layers)&&(_.pushLight(st),st.castShadow&&_.pushShadow(st))}),_.setupLights();const mt=new Set;return O.traverse(function(st){if(!(st.isMesh||st.isPoints||st.isLine||st.isSprite))return;const Ft=st.material;if(Ft)if(Array.isArray(Ft))for(let jt=0;jt<Ft.length;jt++){const Qt=Ft[jt];je(Qt,pt,st),mt.add(Qt)}else je(Ft,pt,st),mt.add(Ft)}),_=R.pop(),mt},this.compileAsync=function(O,at,pt=null){const mt=this.compile(O,at,pt);return new Promise(st=>{function Ft(){if(mt.forEach(function(jt){Nt.get(jt).currentProgram.isReady()&&mt.delete(jt)}),mt.size===0){st(O);return}setTimeout(Ft,10)}yt.get("KHR_parallel_shader_compile")!==null?Ft():setTimeout(Ft,10)})};let Re=null;function sn(O){Re&&Re(O)}function Mn(){ua.stop()}function Bn(){ua.start()}const ua=new _S;ua.setAnimationLoop(sn),typeof self<"u"&&ua.setContext(self),this.setAnimationLoop=function(O){Re=O,Bt.setAnimationLoop(O),O===null?ua.stop():ua.start()},Bt.addEventListener("sessionstart",Mn),Bt.addEventListener("sessionend",Bn),this.render=function(O,at){if(at!==void 0&&at.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),at.parent===null&&at.matrixWorldAutoUpdate===!0&&at.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(at),at=Bt.getCamera()),O.isScene===!0&&O.onBeforeRender(T,O,at,I),_=Zt.get(O,R.length),_.init(at),R.push(_),et.multiplyMatrices(at.projectionMatrix,at.matrixWorldInverse),G.setFromProjectionMatrix(et,oa,at.reversedDepth),j=this.localClippingEnabled,ft=Gt.init(this.clippingPlanes,j),M=_t.get(O,D.length),M.init(),D.push(M),Bt.enabled===!0&&Bt.isPresenting===!0){const Ft=T.xr.getDepthSensingMesh();Ft!==null&&Co(Ft,at,-1/0,T.sortObjects)}Co(O,at,0,T.sortObjects),M.finish(),T.sortObjects===!0&&M.sort(gt,St),Mt=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,Mt&&te.addToRenderList(M,O),this.info.render.frame++,ft===!0&&Gt.beginShadows();const pt=_.state.shadowsArray;Jt.render(pt,O,at),ft===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const mt=M.opaque,st=M.transmissive;if(_.setupLights(),at.isArrayCamera){const Ft=at.cameras;if(st.length>0)for(let jt=0,Qt=Ft.length;jt<Qt;jt++){const Vt=Ft[jt];Ss(mt,st,O,Vt)}Mt&&te.render(O);for(let jt=0,Qt=Ft.length;jt<Qt;jt++){const Vt=Ft[jt];Yl(M,O,Vt,Vt.viewport)}}else st.length>0&&Ss(mt,st,O,at),Mt&&te.render(O),Yl(M,O,at);I!==null&&P===0&&(It.updateMultisampleRenderTarget(I),It.updateRenderTargetMipmap(I)),O.isScene===!0&&O.onAfterRender(T,O,at),ut.resetDefaultState(),N=-1,A=null,R.pop(),R.length>0?(_=R[R.length-1],ft===!0&&Gt.setGlobalState(T.clippingPlanes,_.state.camera)):_=null,D.pop(),D.length>0?M=D[D.length-1]:M=null};function Co(O,at,pt,mt){if(O.visible===!1)return;if(O.layers.test(at.layers)){if(O.isGroup)pt=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(at);else if(O.isLight)_.pushLight(O),O.castShadow&&_.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||G.intersectsSprite(O)){mt&&Ct.setFromMatrixPosition(O.matrixWorld).applyMatrix4(et);const jt=rt.update(O),Qt=O.material;Qt.visible&&M.push(O,jt,Qt,pt,Ct.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||G.intersectsObject(O))){const jt=rt.update(O),Qt=O.material;if(mt&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),Ct.copy(O.boundingSphere.center)):(jt.boundingSphere===null&&jt.computeBoundingSphere(),Ct.copy(jt.boundingSphere.center)),Ct.applyMatrix4(O.matrixWorld).applyMatrix4(et)),Array.isArray(Qt)){const Vt=jt.groups;for(let ee=0,pe=Vt.length;ee<pe;ee++){const ce=Vt[ee],be=Qt[ce.materialIndex];be&&be.visible&&M.push(O,jt,be,pt,Ct.z,ce)}}else Qt.visible&&M.push(O,jt,Qt,pt,Ct.z,null)}}const Ft=O.children;for(let jt=0,Qt=Ft.length;jt<Qt;jt++)Co(Ft[jt],at,pt,mt)}function Yl(O,at,pt,mt){const st=O.opaque,Ft=O.transmissive,jt=O.transparent;_.setupLightsView(pt),ft===!0&&Gt.setGlobalState(T.clippingPlanes,pt),mt&&vt.viewport(F.copy(mt)),st.length>0&&ca(st,at,pt),Ft.length>0&&ca(Ft,at,pt),jt.length>0&&ca(jt,at,pt),vt.buffers.depth.setTest(!0),vt.buffers.depth.setMask(!0),vt.buffers.color.setMask(!0),vt.setPolygonOffset(!1)}function Ss(O,at,pt,mt){if((pt.isScene===!0?pt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[mt.id]===void 0&&(_.state.transmissionRenderTarget[mt.id]=new Ui(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float")?Xi:qi,minFilter:nr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const Ft=_.state.transmissionRenderTarget[mt.id],jt=mt.viewport||F;Ft.setSize(jt.z*T.transmissionResolutionScale,jt.w*T.transmissionResolutionScale);const Qt=T.getRenderTarget(),Vt=T.getActiveCubeFace(),ee=T.getActiveMipmapLevel();T.setRenderTarget(Ft),T.getClearColor(Y),q=T.getClearAlpha(),q<1&&T.setClearColor(16777215,.5),T.clear(),Mt&&te.render(pt);const pe=T.toneMapping;T.toneMapping=Oa;const ce=mt.viewport;if(mt.viewport!==void 0&&(mt.viewport=void 0),_.setupLightsView(mt),ft===!0&&Gt.setGlobalState(T.clippingPlanes,mt),ca(O,pt,mt),It.updateMultisampleRenderTarget(Ft),It.updateRenderTargetMipmap(Ft),yt.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let He=0,tn=at.length;He<tn;He++){const Ie=at[He],Oe=Ie.object,fe=Ie.geometry,Be=Ie.material,Ee=Ie.group;if(Be.side===_i&&Oe.layers.test(mt.layers)){const En=Be.side;Be.side=Xn,Be.needsUpdate=!0,Ms(Oe,pt,mt,fe,Be,Ee),Be.side=En,Be.needsUpdate=!0,be=!0}}be===!0&&(It.updateMultisampleRenderTarget(Ft),It.updateRenderTargetMipmap(Ft))}T.setRenderTarget(Qt,Vt,ee),T.setClearColor(Y,q),ce!==void 0&&(mt.viewport=ce),T.toneMapping=pe}function ca(O,at,pt){const mt=at.isScene===!0?at.overrideMaterial:null;for(let st=0,Ft=O.length;st<Ft;st++){const jt=O[st],Qt=jt.object,Vt=jt.geometry,ee=jt.group;let pe=jt.material;pe.allowOverride===!0&&mt!==null&&(pe=mt),Qt.layers.test(pt.layers)&&Ms(Qt,at,pt,Vt,pe,ee)}}function Ms(O,at,pt,mt,st,Ft){O.onBeforeRender(T,at,pt,mt,st,Ft),O.modelViewMatrix.multiplyMatrices(pt.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),st.onBeforeRender(T,at,pt,mt,O,Ft),st.transparent===!0&&st.side===_i&&st.forceSinglePass===!1?(st.side=Xn,st.needsUpdate=!0,T.renderBufferDirect(pt,at,mt,st,O,Ft),st.side=ys,st.needsUpdate=!0,T.renderBufferDirect(pt,at,mt,st,O,Ft),st.side=_i):T.renderBufferDirect(pt,at,mt,st,O,Ft),O.onAfterRender(T,at,pt,mt,st,Ft)}function Si(O,at,pt){at.isScene!==!0&&(at=wt);const mt=Nt.get(O),st=_.state.lights,Ft=_.state.shadowsArray,jt=st.state.version,Qt=dt.getParameters(O,st.state,Ft,at,pt),Vt=dt.getProgramCacheKey(Qt);let ee=mt.programs;mt.environment=O.isMeshStandardMaterial?at.environment:null,mt.fog=at.fog,mt.envMap=(O.isMeshStandardMaterial?oe:re).get(O.envMap||mt.environment),mt.envMapRotation=mt.environment!==null&&O.envMap===null?at.environmentRotation:O.envMapRotation,ee===void 0&&(O.addEventListener("dispose",Dt),ee=new Map,mt.programs=ee);let pe=ee.get(Vt);if(pe!==void 0){if(mt.currentProgram===pe&&mt.lightsStateVersion===jt)return Ia(O,Qt),pe}else Qt.uniforms=dt.getUniforms(O),O.onBeforeCompile(Qt,T),pe=dt.acquireProgram(Qt,Vt),ee.set(Vt,pe),mt.uniforms=Qt.uniforms;const ce=mt.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(ce.clippingPlanes=Gt.uniform),Ia(O,Qt),mt.needsLights=Wl(O),mt.lightsStateVersion=jt,mt.needsLights&&(ce.ambientLightColor.value=st.state.ambient,ce.lightProbe.value=st.state.probe,ce.directionalLights.value=st.state.directional,ce.directionalLightShadows.value=st.state.directionalShadow,ce.spotLights.value=st.state.spot,ce.spotLightShadows.value=st.state.spotShadow,ce.rectAreaLights.value=st.state.rectArea,ce.ltc_1.value=st.state.rectAreaLTC1,ce.ltc_2.value=st.state.rectAreaLTC2,ce.pointLights.value=st.state.point,ce.pointLightShadows.value=st.state.pointShadow,ce.hemisphereLights.value=st.state.hemi,ce.directionalShadowMap.value=st.state.directionalShadowMap,ce.directionalShadowMatrix.value=st.state.directionalShadowMatrix,ce.spotShadowMap.value=st.state.spotShadowMap,ce.spotLightMatrix.value=st.state.spotLightMatrix,ce.spotLightMap.value=st.state.spotLightMap,ce.pointShadowMap.value=st.state.pointShadowMap,ce.pointShadowMatrix.value=st.state.pointShadowMatrix),mt.currentProgram=pe,mt.uniformsList=null,pe}function Es(O){if(O.uniformsList===null){const at=O.currentProgram.getUniforms();O.uniformsList=$c.seqWithValue(at.seq,O.uniforms)}return O.uniformsList}function Ia(O,at){const pt=Nt.get(O);pt.outputColorSpace=at.outputColorSpace,pt.batching=at.batching,pt.batchingColor=at.batchingColor,pt.instancing=at.instancing,pt.instancingColor=at.instancingColor,pt.instancingMorph=at.instancingMorph,pt.skinning=at.skinning,pt.morphTargets=at.morphTargets,pt.morphNormals=at.morphNormals,pt.morphColors=at.morphColors,pt.morphTargetsCount=at.morphTargetsCount,pt.numClippingPlanes=at.numClippingPlanes,pt.numIntersection=at.numClipIntersection,pt.vertexAlphas=at.vertexAlphas,pt.vertexTangents=at.vertexTangents,pt.toneMapping=at.toneMapping}function jl(O,at,pt,mt,st){at.isScene!==!0&&(at=wt),It.resetTextureUnits();const Ft=at.fog,jt=mt.isMeshStandardMaterial?at.environment:null,Qt=I===null?T.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:So,Vt=(mt.isMeshStandardMaterial?oe:re).get(mt.envMap||jt),ee=mt.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pe=!!pt.attributes.tangent&&(!!mt.normalMap||mt.anisotropy>0),ce=!!pt.morphAttributes.position,be=!!pt.morphAttributes.normal,He=!!pt.morphAttributes.color;let tn=Oa;mt.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(tn=T.toneMapping);const Ie=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,Oe=Ie!==void 0?Ie.length:0,fe=Nt.get(mt),Be=_.state.lights;if(ft===!0&&(j===!0||O!==A)){const ln=O===A&&mt.id===N;Gt.setState(mt,O,ln)}let Ee=!1;mt.version===fe.__version?(fe.needsLights&&fe.lightsStateVersion!==Be.state.version||fe.outputColorSpace!==Qt||st.isBatchedMesh&&fe.batching===!1||!st.isBatchedMesh&&fe.batching===!0||st.isBatchedMesh&&fe.batchingColor===!0&&st.colorTexture===null||st.isBatchedMesh&&fe.batchingColor===!1&&st.colorTexture!==null||st.isInstancedMesh&&fe.instancing===!1||!st.isInstancedMesh&&fe.instancing===!0||st.isSkinnedMesh&&fe.skinning===!1||!st.isSkinnedMesh&&fe.skinning===!0||st.isInstancedMesh&&fe.instancingColor===!0&&st.instanceColor===null||st.isInstancedMesh&&fe.instancingColor===!1&&st.instanceColor!==null||st.isInstancedMesh&&fe.instancingMorph===!0&&st.morphTexture===null||st.isInstancedMesh&&fe.instancingMorph===!1&&st.morphTexture!==null||fe.envMap!==Vt||mt.fog===!0&&fe.fog!==Ft||fe.numClippingPlanes!==void 0&&(fe.numClippingPlanes!==Gt.numPlanes||fe.numIntersection!==Gt.numIntersection)||fe.vertexAlphas!==ee||fe.vertexTangents!==pe||fe.morphTargets!==ce||fe.morphNormals!==be||fe.morphColors!==He||fe.toneMapping!==tn||fe.morphTargetsCount!==Oe)&&(Ee=!0):(Ee=!0,fe.__version=mt.version);let En=fe.currentProgram;Ee===!0&&(En=Si(mt,at,st));let ri=!1,Pe=!1,Ba=!1;const Ke=En.getUniforms(),Yn=fe.uniforms;if(vt.useProgram(En.program)&&(ri=!0,Pe=!0,Ba=!0),mt.id!==N&&(N=mt.id,Pe=!0),ri||A!==O){vt.buffers.depth.getReversed()&&O.reversedDepth!==!0&&(O._reversedDepth=!0,O.updateProjectionMatrix()),Ke.setValue(H,"projectionMatrix",O.projectionMatrix),Ke.setValue(H,"viewMatrix",O.matrixWorldInverse);const Fn=Ke.map.cameraPosition;Fn!==void 0&&Fn.setValue(H,xt.setFromMatrixPosition(O.matrixWorld)),ht.logarithmicDepthBuffer&&Ke.setValue(H,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(mt.isMeshPhongMaterial||mt.isMeshToonMaterial||mt.isMeshLambertMaterial||mt.isMeshBasicMaterial||mt.isMeshStandardMaterial||mt.isShaderMaterial)&&Ke.setValue(H,"isOrthographic",O.isOrthographicCamera===!0),A!==O&&(A=O,Pe=!0,Ba=!0)}if(st.isSkinnedMesh){Ke.setOptional(H,st,"bindMatrix"),Ke.setOptional(H,st,"bindMatrixInverse");const ln=st.skeleton;ln&&(ln.boneTexture===null&&ln.computeBoneTexture(),Ke.setValue(H,"boneTexture",ln.boneTexture,It))}st.isBatchedMesh&&(Ke.setOptional(H,st,"batchingTexture"),Ke.setValue(H,"batchingTexture",st._matricesTexture,It),Ke.setOptional(H,st,"batchingIdTexture"),Ke.setValue(H,"batchingIdTexture",st._indirectTexture,It),Ke.setOptional(H,st,"batchingColorTexture"),st._colorsTexture!==null&&Ke.setValue(H,"batchingColorTexture",st._colorsTexture,It));const pn=pt.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&Pt.update(st,pt,En),(Pe||fe.receiveShadow!==st.receiveShadow)&&(fe.receiveShadow=st.receiveShadow,Ke.setValue(H,"receiveShadow",st.receiveShadow)),mt.isMeshGouraudMaterial&&mt.envMap!==null&&(Yn.envMap.value=Vt,Yn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),mt.isMeshStandardMaterial&&mt.envMap===null&&at.environment!==null&&(Yn.envMapIntensity.value=at.environmentIntensity),Pe&&(Ke.setValue(H,"toneMappingExposure",T.toneMappingExposure),fe.needsLights&&df(Yn,Ba),Ft&&mt.fog===!0&&Ut.refreshFogUniforms(Yn,Ft),Ut.refreshMaterialUniforms(Yn,mt,Q,$,_.state.transmissionRenderTarget[O.id]),$c.upload(H,Es(fe),Yn,It)),mt.isShaderMaterial&&mt.uniformsNeedUpdate===!0&&($c.upload(H,Es(fe),Yn,It),mt.uniformsNeedUpdate=!1),mt.isSpriteMaterial&&Ke.setValue(H,"center",st.center),Ke.setValue(H,"modelViewMatrix",st.modelViewMatrix),Ke.setValue(H,"normalMatrix",st.normalMatrix),Ke.setValue(H,"modelMatrix",st.matrixWorld),mt.isShaderMaterial||mt.isRawShaderMaterial){const ln=mt.uniformsGroups;for(let Fn=0,fr=ln.length;Fn<fr;Fn++){const Yi=ln[Fn];se.update(Yi,En),se.bind(Yi,En)}}return En}function df(O,at){O.ambientLightColor.needsUpdate=at,O.lightProbe.needsUpdate=at,O.directionalLights.needsUpdate=at,O.directionalLightShadows.needsUpdate=at,O.pointLights.needsUpdate=at,O.pointLightShadows.needsUpdate=at,O.spotLights.needsUpdate=at,O.spotLightShadows.needsUpdate=at,O.rectAreaLights.needsUpdate=at,O.hemisphereLights.needsUpdate=at}function Wl(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(O,at,pt){const mt=Nt.get(O);mt.__autoAllocateDepthBuffer=O.resolveDepthBuffer===!1,mt.__autoAllocateDepthBuffer===!1&&(mt.__useRenderToTexture=!1),Nt.get(O.texture).__webglTexture=at,Nt.get(O.depthTexture).__webglTexture=mt.__autoAllocateDepthBuffer?void 0:pt,mt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(O,at){const pt=Nt.get(O);pt.__webglFramebuffer=at,pt.__useDefaultFramebuffer=at===void 0};const Ro=H.createFramebuffer();this.setRenderTarget=function(O,at=0,pt=0){I=O,z=at,P=pt;let mt=!0,st=null,Ft=!1,jt=!1;if(O){const Vt=Nt.get(O);if(Vt.__useDefaultFramebuffer!==void 0)vt.bindFramebuffer(H.FRAMEBUFFER,null),mt=!1;else if(Vt.__webglFramebuffer===void 0)It.setupRenderTarget(O);else if(Vt.__hasExternalTextures)It.rebindTextures(O,Nt.get(O.texture).__webglTexture,Nt.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){const ce=O.depthTexture;if(Vt.__boundDepthTexture!==ce){if(ce!==null&&Nt.has(ce)&&(O.width!==ce.image.width||O.height!==ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");It.setupDepthRenderbuffer(O)}}const ee=O.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(jt=!0);const pe=Nt.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(pe[at])?st=pe[at][pt]:st=pe[at],Ft=!0):O.samples>0&&It.useMultisampledRTT(O)===!1?st=Nt.get(O).__webglMultisampledFramebuffer:Array.isArray(pe)?st=pe[pt]:st=pe,F.copy(O.viewport),Z.copy(O.scissor),U=O.scissorTest}else F.copy(At).multiplyScalar(Q).floor(),Z.copy(qt).multiplyScalar(Q).floor(),U=Ot;if(pt!==0&&(st=Ro),vt.bindFramebuffer(H.FRAMEBUFFER,st)&&mt&&vt.drawBuffers(O,st),vt.viewport(F),vt.scissor(Z),vt.setScissorTest(U),Ft){const Vt=Nt.get(O.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt.__webglTexture,pt)}else if(jt){const Vt=at;for(let ee=0;ee<O.textures.length;ee++){const pe=Nt.get(O.textures[ee]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+ee,pe.__webglTexture,pt,Vt)}}else if(O!==null&&pt!==0){const Vt=Nt.get(O.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Vt.__webglTexture,pt)}N=-1},this.readRenderTargetPixels=function(O,at,pt,mt,st,Ft,jt,Qt=0){if(!(O&&O.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=Nt.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&jt!==void 0&&(Vt=Vt[jt]),Vt){vt.bindFramebuffer(H.FRAMEBUFFER,Vt);try{const ee=O.textures[Qt],pe=ee.format,ce=ee.type;if(!ht.textureFormatReadable(pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}at>=0&&at<=O.width-mt&&pt>=0&&pt<=O.height-st&&(O.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Qt),H.readPixels(at,pt,mt,st,ie.convert(pe),ie.convert(ce),Ft))}finally{const ee=I!==null?Nt.get(I).__webglFramebuffer:null;vt.bindFramebuffer(H.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(O,at,pt,mt,st,Ft,jt,Qt=0){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=Nt.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&jt!==void 0&&(Vt=Vt[jt]),Vt)if(at>=0&&at<=O.width-mt&&pt>=0&&pt<=O.height-st){vt.bindFramebuffer(H.FRAMEBUFFER,Vt);const ee=O.textures[Qt],pe=ee.format,ce=ee.type;if(!ht.textureFormatReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,be),H.bufferData(H.PIXEL_PACK_BUFFER,Ft.byteLength,H.STREAM_READ),O.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Qt),H.readPixels(at,pt,mt,st,ie.convert(pe),ie.convert(ce),0);const He=I!==null?Nt.get(I).__webglFramebuffer:null;vt.bindFramebuffer(H.FRAMEBUFFER,He);const tn=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await wT(H,tn,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,be),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Ft),H.deleteBuffer(be),H.deleteSync(tn),Ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(O,at=null,pt=0){const mt=Math.pow(2,-pt),st=Math.floor(O.image.width*mt),Ft=Math.floor(O.image.height*mt),jt=at!==null?at.x:0,Qt=at!==null?at.y:0;It.setTexture2D(O,0),H.copyTexSubImage2D(H.TEXTURE_2D,pt,0,0,jt,Qt,st,Ft),vt.unbindTexture()};const Ts=H.createFramebuffer(),pf=H.createFramebuffer();this.copyTextureToTexture=function(O,at,pt=null,mt=null,st=0,Ft=null){Ft===null&&(st!==0?(Fl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ft=st,st=0):Ft=0);let jt,Qt,Vt,ee,pe,ce,be,He,tn;const Ie=O.isCompressedTexture?O.mipmaps[Ft]:O.image;if(pt!==null)jt=pt.max.x-pt.min.x,Qt=pt.max.y-pt.min.y,Vt=pt.isBox3?pt.max.z-pt.min.z:1,ee=pt.min.x,pe=pt.min.y,ce=pt.isBox3?pt.min.z:0;else{const pn=Math.pow(2,-st);jt=Math.floor(Ie.width*pn),Qt=Math.floor(Ie.height*pn),O.isDataArrayTexture?Vt=Ie.depth:O.isData3DTexture?Vt=Math.floor(Ie.depth*pn):Vt=1,ee=0,pe=0,ce=0}mt!==null?(be=mt.x,He=mt.y,tn=mt.z):(be=0,He=0,tn=0);const Oe=ie.convert(at.format),fe=ie.convert(at.type);let Be;at.isData3DTexture?(It.setTexture3D(at,0),Be=H.TEXTURE_3D):at.isDataArrayTexture||at.isCompressedArrayTexture?(It.setTexture2DArray(at,0),Be=H.TEXTURE_2D_ARRAY):(It.setTexture2D(at,0),Be=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,at.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,at.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,at.unpackAlignment);const Ee=H.getParameter(H.UNPACK_ROW_LENGTH),En=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ri=H.getParameter(H.UNPACK_SKIP_PIXELS),Pe=H.getParameter(H.UNPACK_SKIP_ROWS),Ba=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ie.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ie.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ee),H.pixelStorei(H.UNPACK_SKIP_ROWS,pe),H.pixelStorei(H.UNPACK_SKIP_IMAGES,ce);const Ke=O.isDataArrayTexture||O.isData3DTexture,Yn=at.isDataArrayTexture||at.isData3DTexture;if(O.isDepthTexture){const pn=Nt.get(O),ln=Nt.get(at),Fn=Nt.get(pn.__renderTarget),fr=Nt.get(ln.__renderTarget);vt.bindFramebuffer(H.READ_FRAMEBUFFER,Fn.__webglFramebuffer),vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,fr.__webglFramebuffer);for(let Yi=0;Yi<Vt;Yi++)Ke&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Nt.get(O).__webglTexture,st,ce+Yi),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Nt.get(at).__webglTexture,Ft,tn+Yi)),H.blitFramebuffer(ee,pe,jt,Qt,be,He,jt,Qt,H.DEPTH_BUFFER_BIT,H.NEAREST);vt.bindFramebuffer(H.READ_FRAMEBUFFER,null),vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(st!==0||O.isRenderTargetTexture||Nt.has(O)){const pn=Nt.get(O),ln=Nt.get(at);vt.bindFramebuffer(H.READ_FRAMEBUFFER,Ts),vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,pf);for(let Fn=0;Fn<Vt;Fn++)Ke?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pn.__webglTexture,st,ce+Fn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pn.__webglTexture,st),Yn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,ln.__webglTexture,Ft,tn+Fn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,ln.__webglTexture,Ft),st!==0?H.blitFramebuffer(ee,pe,jt,Qt,be,He,jt,Qt,H.COLOR_BUFFER_BIT,H.NEAREST):Yn?H.copyTexSubImage3D(Be,Ft,be,He,tn+Fn,ee,pe,jt,Qt):H.copyTexSubImage2D(Be,Ft,be,He,ee,pe,jt,Qt);vt.bindFramebuffer(H.READ_FRAMEBUFFER,null),vt.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Yn?O.isDataTexture||O.isData3DTexture?H.texSubImage3D(Be,Ft,be,He,tn,jt,Qt,Vt,Oe,fe,Ie.data):at.isCompressedArrayTexture?H.compressedTexSubImage3D(Be,Ft,be,He,tn,jt,Qt,Vt,Oe,Ie.data):H.texSubImage3D(Be,Ft,be,He,tn,jt,Qt,Vt,Oe,fe,Ie):O.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Ft,be,He,jt,Qt,Oe,fe,Ie.data):O.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Ft,be,He,Ie.width,Ie.height,Oe,Ie.data):H.texSubImage2D(H.TEXTURE_2D,Ft,be,He,jt,Qt,Oe,fe,Ie);H.pixelStorei(H.UNPACK_ROW_LENGTH,Ee),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,En),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ri),H.pixelStorei(H.UNPACK_SKIP_ROWS,Pe),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ba),Ft===0&&at.generateMipmaps&&H.generateMipmap(Be),vt.unbindTexture()},this.initRenderTarget=function(O){Nt.get(O).__webglFramebuffer===void 0&&It.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?It.setTextureCube(O,0):O.isData3DTexture?It.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?It.setTexture2DArray(O,0):It.setTexture2D(O,0),vt.unbindTexture()},this.resetState=function(){z=0,P=0,I=null,vt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const tf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class wo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const RR=new Xm(-1,1,1,-1,0,1);class DR extends Sn{constructor(){super(),this.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ze([0,2,0,0,2,0],2))}}const NR=new DR;class Ym{constructor(t){this._mesh=new an(NR,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,RR)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class UR extends wo{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof en?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Hl.clone(t.uniforms),this.material=new en({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Ym(this.material)}render(t,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Mx extends wo{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,s){const l=t.getContext(),u=t.state;u.buffers.color.setMask(!1),u.buffers.depth.setMask(!1),u.buffers.color.setLocked(!0),u.buffers.depth.setLocked(!0);let f,d;this.inverse?(f=0,d=1):(f=1,d=0),u.buffers.stencil.setTest(!0),u.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),u.buffers.stencil.setFunc(l.ALWAYS,f,4294967295),u.buffers.stencil.setClear(d),u.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),u.buffers.color.setLocked(!1),u.buffers.depth.setLocked(!1),u.buffers.color.setMask(!0),u.buffers.depth.setMask(!0),u.buffers.stencil.setLocked(!1),u.buffers.stencil.setFunc(l.EQUAL,1,4294967295),u.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),u.buffers.stencil.setLocked(!0)}}class LR extends wo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class OR{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const s=t.getSize(new Ht);this._width=s.width,this._height=s.height,i=new Ui(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xi}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new UR(tf),this.copyPass.material.blending=La,this.clock=new vS}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,u=this.passes.length;l<u;l++){const f=this.passes[l];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),f.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),f.needsSwap){if(s){const d=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),p.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}Mx!==void 0&&(f instanceof Mx?s=!0:f instanceof LR&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new Ht);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let u=0;u<this.passes.length;u++)this.passes[u].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class PR extends wo{constructor(t,i,s=null,l=null,u=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=u,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new ue}render(t,i,s){const l=t.autoClear;t.autoClear=!1;let u,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(u=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(u),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),t.autoClear=l}}const zR={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ue(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class To extends wo{constructor(t,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=t!==void 0?new Ht(t.x,t.y):new Ht(256,256),this.clearColor=new ue(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let u=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new Ui(u,f,{type:Xi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const g=new Ui(u,f,{type:Xi});g.texture.name="UnrealBloomPass.h"+v,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const y=new Ui(u,f,{type:Xi});y.texture.name="UnrealBloomPass.v"+v,y.texture.generateMipmaps=!1,this.renderTargetsVertical.push(y),u=Math.round(u/2),f=Math.round(f/2)}const d=zR;this.highPassUniforms=Hl.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new en({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const p=[3,5,7,9,11];u=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new Ht(1/u,1/f),u=Math.round(u/2),f=Math.round(f/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const m=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=m,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Hl.clone(tf.uniforms),this.blendMaterial=new en({uniforms:this.copyUniforms,vertexShader:tf.vertexShader,fragmentShader:tf.fragmentShader,blending:ir,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ue,this._oldClearAlpha=1,this._basic=new _s,this._fsQuad=new Ym(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let s=Math.round(t/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let u=0;u<this.nMips;u++)this.renderTargetsHorizontal[u].setSize(s,l),this.renderTargetsVertical[u].setSize(s,l),this.separableBlurMaterials[u].uniforms.invSize.value=new Ht(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(t,i,s,l,u){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const f=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),u&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let d=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[p].uniforms.direction.value=To.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[p]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=To.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[p]),t.clear(),this._fsQuad.render(t),d=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,u&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(s),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=f}_getSeparableBlurMaterial(t){const i=[];for(let s=0;s<t;s++)i.push(.39894*Math.exp(-.5*s*s/(t*t))/t);return new en({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ht(.5,.5)},direction:{value:new Ht(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new en({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}To.BlurDirectionX=new Ht(1,0);To.BlurDirectionY=new Ht(0,1);const Xc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class IR extends wo{constructor(){super(),this.uniforms=Hl.clone(Xc.uniforms),this.material=new Bb({name:Xc.name,uniforms:this.uniforms,vertexShader:Xc.vertexShader,fragmentShader:Xc.fragmentShader}),this._fsQuad=new Ym(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,i,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Le.getTransfer(this._outputColorSpace)===Ye&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ux?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Lx?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ox?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===bm?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===zx?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ix?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Px&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const qc=(o,t,i)=>Math.min(i,Math.max(t,o)),Yc=(o,t,i,s)=>t+(o-t)*Math.exp(-i*s),ES=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]);class BR{constructor(){de(this,"shipQuaternion",new kn);de(this,"lookQuaternion",new kn);de(this,"position",new V);de(this,"yaw",0);de(this,"pitch",0);de(this,"yawVelocity",0);de(this,"pitchVelocity",0);de(this,"speed",0);de(this,"lookYaw",0);de(this,"lookPitch",0);de(this,"lookTargetYaw",0);de(this,"lookTargetPitch",0);de(this,"touchX",0);de(this,"touchY",0);de(this,"touchSteering",!1);de(this,"keys",new Set);de(this,"elapsed",0);de(this,"lastContext","");de(this,"euler",new xi(0,0,0,"YXZ"));de(this,"forward",new V)}key(t,i){ES.has(t)&&(i?this.touchSteering||this.keys.add(t):this.keys.delete(t))}steerTouch(t,i,s){this.touchSteering=s,this.keys.clear();const l=Math.hypot(t,i),u=s?qc((l-.1)/.9,0,1):0;this.touchX=l?t/l*u:0,this.touchY=l?i/l*u:0}look(t,i,s,l){if(l.paused||l.blocked)return;const u=s?l.touchSensitivity:l.sensitivity,f=this.lookTargetYaw-qc(t,-.2,.2)*u*1.6*(!s&&l.invertMouseX?-1:1);this.lookTargetYaw=Math.atan2(Math.sin(f),Math.cos(f)),this.lookTargetPitch=qc(this.lookTargetPitch-qc(i,-.2,.2)*u*1.6*(!s&&l.invertMouseY?-1:1),-1.48,1.48)}centerLook(){this.lookTargetYaw=this.lookTargetPitch=0}reset(t=!1){this.keys.clear(),this.steerTouch(0,0,!1),t&&(this.yawVelocity=this.pitchVelocity=0,this.lookTargetYaw=this.lookYaw,this.lookTargetPitch=this.lookPitch)}step(t,i){const s=`${i.mode}/${i.paused}/${i.started}/${i.blocked}`;if(this.lastContext&&s!==this.lastContext&&this.reset(i.paused||i.blocked),this.lastContext=s,!Number.isFinite(t)||t<=0||t>.25||i.paused)return;const l=Math.min(t,.1);this.elapsed+=l;const u=i.mode==="Manual Flight"&&i.started&&!i.blocked;let f=0,d=0;if(u){f=this.touchSteering?this.touchX:Number(this.keys.has("KeyD")||this.keys.has("ArrowRight"))-Number(this.keys.has("KeyA")||this.keys.has("ArrowLeft")),d=this.touchSteering?this.touchY:Number(this.keys.has("KeyS")||this.keys.has("ArrowDown"))-Number(this.keys.has("KeyW")||this.keys.has("ArrowUp"));const D=Math.max(1,Math.hypot(f,d));f/=D,d/=D}const p=i.reduced?.45:1,m=this.touchSteering?i.touchSensitivity:i.sensitivity,v=i.started&&i.mode!=="Manual Flight"&&!i.blocked&&!i.reduced?i.motion*(i.mode==="Meditation"?.002:.006):0,g=u?-f*.22*m*p:Math.sin(this.elapsed*.055)*v,y=u?-d*.16*m*p:Math.sin(this.elapsed*.08)*v*.3,x=3,E=(1-Math.exp(-x*l))/x;this.yaw+=g*l+(this.yawVelocity-g)*E,this.pitch+=y*l+(this.pitchVelocity-y)*E,this.yawVelocity=Yc(this.yawVelocity,g,x,l),this.pitchVelocity=Yc(this.pitchVelocity,y,x,l),this.pitch=Math.atan2(Math.sin(this.pitch),Math.cos(this.pitch)),this.yaw=Math.atan2(Math.sin(this.yaw),Math.cos(this.yaw)),this.shipQuaternion.setFromEuler(this.euler.set(this.pitch,this.yaw,0,"YXZ"));const b=Math.atan2(Math.sin(this.lookTargetYaw-this.lookYaw),Math.cos(this.lookTargetYaw-this.lookYaw));this.lookYaw+=b*(1-Math.exp(-6*l)),this.lookYaw=Math.atan2(Math.sin(this.lookYaw),Math.cos(this.lookYaw)),this.lookPitch=Yc(this.lookPitch,this.lookTargetPitch,6,l),this.lookQuaternion.setFromEuler(this.euler.set(this.lookPitch,this.lookYaw,0,"YXZ"));const M=i.started?Math.max(0,i.speed)*(i.mode==="Meditation"?.15:1)*(i.reduced?.3:1):2,_=M*l+(this.speed-M)*(1-Math.exp(-.8*l))/.8;this.speed=Yc(this.speed,M,.8,l),this.forward.set(0,0,-1).applyQuaternion(this.shipQuaternion),this.position.addScaledVector(this.forward,_)}}function FR(o,t,i,s){let l=null,u=null,f="";const d=[],p=(_,D,R,T)=>{_.addEventListener(D,R,T),d.push(()=>_.removeEventListener(D,R,T))},m=()=>!s().paused&&!s().blocked&&document.visibilityState!=="hidden",v=()=>m()&&s().started&&s().mode==="Manual Flight",g=(_,D)=>{t.style.setProperty("--stick-x",`${_*34}px`),t.style.setProperty("--stick-y",`${D*34}px`)},y=()=>{const _=l;l=null,_&&o.hasPointerCapture(_.id)&&o.releasePointerCapture(_.id)},x=()=>{const _=u;u=null,i.steerTouch(0,0,!1),g(0,0),_!==null&&t.hasPointerCapture(_)&&t.releasePointerCapture(_)},E=()=>{y(),x(),i.reset(!0)};p(o,"pointerdown",(_=>{!m()||l||_.pointerType==="mouse"&&(_.button!==0||u!==null)||(_.preventDefault(),l={id:_.pointerId,type:_.pointerType,x:_.clientX,y:_.clientY},o.setPointerCapture(_.pointerId))})),p(o,"pointermove",(_=>{if((l==null?void 0:l.id)!==_.pointerId)return;if(!m()||_.pointerType==="mouse"&&!(_.buttons&1)){y();return}_.preventDefault();const D=Math.max(240,Math.min(o.clientWidth,o.clientHeight));i.look((_.clientX-l.x)/D,(_.clientY-l.y)/D,l.type!=="mouse",s()),l.x=_.clientX,l.y=_.clientY}));for(const _ of["pointerup","pointercancel","lostpointercapture"])p(o,_,(D=>{D.pointerId===(l==null?void 0:l.id)&&y()}));const b=_=>{const D=t.getBoundingClientRect();let R=(_.clientX-D.left-D.width/2)/(D.width*.35),T=(_.clientY-D.top-D.height/2)/(D.height*.35);const L=Math.max(1,Math.hypot(R,T));R/=L,T/=L,i.steerTouch(R,T,!0),g(R,T)};p(t,"pointerdown",(_=>{_.pointerType==="mouse"||u!==null||!v()||(_.preventDefault(),_.stopPropagation(),(l==null?void 0:l.type)==="mouse"&&y(),u=_.pointerId,t.setPointerCapture(_.pointerId),b(_))})),p(t,"pointermove",(_=>{if(_.pointerId===u){if(!v()){x();return}_.preventDefault(),b(_)}}));for(const _ of["pointerup","pointercancel","lostpointercapture"])p(t,_,(D=>{D.pointerId===u&&x()}));const M=_=>_ instanceof HTMLElement&&!!_.closest('input,select,textarea,[contenteditable="true"]');return p(window,"keydown",(_=>{!ES.has(_.code)||M(_.target)||!v()||_.ctrlKey||_.metaKey||_.altKey||(_.preventDefault(),i.key(_.code,!0))})),p(window,"keyup",(_=>i.key(_.code,!1))),p(window,"blur",E),p(document,"visibilitychange",E),p(window,"resize",E),p(window,"orientationchange",E),p(o,"contextmenu",_=>_.preventDefault()),p(t,"contextmenu",_=>_.preventDefault()),{sync(){const _=s(),D=`${_.mode}/${_.paused}/${_.started}/${_.blocked}`;f&&D!==f&&(y(),x(),i.reset(_.paused||_.blocked)),f=D},dispose(){E(),d.forEach(_=>_())}}}function HR(o,t,i){if(!Number.isFinite(t)||t<=0||t>.25||i.paused){o.step(0,i);return}const s=Math.ceil(t/(1/60)),l=t/s;for(let u=0;u<s;u++)o.step(l,i)}class GR{constructor(){de(this,"scale",1);de(this,"elapsed",0);de(this,"average",1/60);de(this,"nextDecision",3)}reset(){this.scale=1,this.elapsed=0,this.average=1/60,this.nextDecision=3}observe(t,i,s){if(!i||s||!Number.isFinite(t)||t<=0||t>1||(this.elapsed+=t,this.average+=(Math.min(t,.2)-this.average)*(1-Math.exp(-t/1.5)),this.elapsed<this.nextDecision))return!1;const l=this.scale;return this.average>.028?(this.scale=Math.max(.6,Math.round((this.scale-.1)*100)/100),this.nextDecision=this.elapsed+3):this.average<.018?(this.scale=Math.min(1,Math.round((this.scale+.05)*100)/100),this.nextDecision=this.elapsed+10):this.nextDecision=this.elapsed+3,l!==this.scale}}const wl=o=>(o=Math.max(0,Math.min(1,o)),o*o*(3-2*o)),VR=[2,4,1,0,3],kR=10.2;class TS{constructor(){de(this,"phase","idle");de(this,"elapsed",0);de(this,"destination",0);de(this,"seed",7123);de(this,"committed",!1);de(this,"justCommitted",!1);de(this,"energy",0);de(this,"charge",0);de(this,"veil",0)}get busy(){return this.phase!=="idle"}start(t,i,s=!1){return this.busy||s?!1:(this.destination=VR[t]??(t+1)%5,this.seed=Math.imul(i|0,1664525)+1013904223>>>0||1,this.elapsed=0,this.committed=!1,this.justCommitted=!1,this.energy=0,this.veil=0,this.charge=0,this.phase="charging",!0)}advance(t,i=!1){if(this.justCommitted=!1,!this.busy||i||!Number.isFinite(t)||t<=0)return;this.elapsed+=Math.min(t,.25);const s=this.elapsed;s<1.4?(this.phase="charging",this.charge=wl(s/1.4),this.energy=this.charge*.035):s<4?(this.phase="accelerating",this.charge=1,this.energy=.035+.965*wl((s-1.4)/2.6)):s<5.6?(this.phase="transit",this.charge=1,this.energy=1):s<9?(this.phase="arriving",this.energy=1-wl((s-5.6)/3.4),this.charge=this.energy):s<kR?(this.phase="stabilized",this.energy=0,this.charge=0):(this.phase="idle",this.energy=0,this.charge=0),this.veil=s<4?0:s<4.8?wl((s-4)/.8):s<5.6?1:1-wl((s-5.6)/1.7),!this.committed&&s>=4.8&&(this.committed=!0,this.justCommitted=!0)}}function XR(o){const i=new Float32Array(4680),s=new Float32Array(780*2),l=new Float32Array(780*2*3);let u=4171;const f=()=>(u=u*16807%2147483647,(u-1)/2147483646);for(let E=0;E<780;E++){const b=f()*Math.PI*2,M=18+Math.pow(f(),1.3)*550,_=f();for(let D=0;D<2;D++)i.set([Math.cos(b)*M,Math.sin(b)*M*.72,_],(E*2+D)*3),s[E*2+D]=D}const d=new Sn;d.setAttribute("position",new hn(l,3)),d.setAttribute("lane",new hn(i,3)),d.setAttribute("endpoint",new hn(s,1));const p={time:{value:0},energy:{value:0},tint:{value:new ue("#b7d8ef")}},m=new ue("#d4ecfa"),v=new en({uniforms:p,transparent:!0,depthWrite:!1,blending:ir,vertexShader:`attribute vec3 lane;attribute float endpoint;uniform float time,energy;varying float fade;
      void main(){float z=-12.-fract(lane.z+time)*800.;float trailLength=energy*(22.+energy*155.);
      vec3 p=vec3(lane.xy,z-endpoint*trailLength);fade=smoothstep(15.,65.,-z)*(1.-smoothstep(650.,810.,-z))*(.35+endpoint*.4);
      gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,fragmentShader:`uniform float energy;uniform vec3 tint;varying float fade;void main(){gl_FragColor=vec4(tint*1.35,fade*energy*.7);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`}),g=new ab(d,v);g.name="light-jump-streaks",g.frustumCulled=!1,g.renderOrder=3,o.add(g);let y=!0,x=0;return{configure(E,b){d.setDrawRange(0,(b?70:E==="Low"?180:E==="Medium"?420:780)*2),y=!0},update(E,b,M){b>0&&(x+=E*(.18+b*1.7)),p.time.value=x,p.energy.value=b,p.tint.value.copy(M).lerp(m,.7),g.visible=b>.001||y,y=!1}}}function Sm(o,t,i=!0){let s=(o^Math.imul(t,2654435761))>>>0;const l=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296),u=o===7123&&t===0,f=u?new V(500,200,-3e3):new V((l()-.5)*1800,(l()-.5)*1200,(l()-.5)*1800),d=300+l()*200,p=new ue(["#ffd4a0","#a9d5ff","#ffe8bc","#ffc1ab","#d6dbff"][(o>>>3)%5]),m=8+Math.floor(l()*5),v=l()*Math.PI*2,g=(l()-.5)*.65,y=Array.from({length:i?12:0},(E,b)=>{const M=v+b*2.39996+(l()-.5)*.35,_=800+b*260+l()*100,D=f.clone().add(new V(Math.cos(M)*_,Math.sin(M)*_*g,Math.sin(M)*_));u&&b===0&&D.set(-480,-45,-1500);const R=b%4===1?1:l()>.45?0:2,T=R===1?160+l()*100:55+l()*95,L=l()*100+1,z=new ue().setHSL((t*.14+b*.103+l()*.07)%1,.17+l()*.28,.28+l()*.16);return u&&b===0&&z.set("#315e9c"),{position:D,kind:R,radius:T,seed:L,color:z}}),x=u?"Perseus Anchorage":`${["Aster","Nyra","Vela","Lumen","Thal","Solis","Caeli"][o%7]}-${(o&65535).toString(16).padStart(4,"0").toUpperCase()}`;return{center:f,starRadius:d,starColor:p,count:m,planets:y,name:x}}const qR=`
varying vec3 localPoint, surfaceNormal, worldPoint;
void main(){localPoint=position;worldPoint=(modelMatrix*vec4(position,1.)).xyz;surfaceNormal=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`,YR=`
varying vec3 localPoint,surfaceNormal,worldPoint;
uniform vec3 baseColor,detailColor,lightDirection;
uniform float kind,alpha,seed;
float hash(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);}
float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+1.),f.x),f.y),f.z);}
void main(){
 if(alpha<.005)discard;
 if(kind>2.5){float activity=.9+noise(localPoint*8.+seed)*.12;gl_FragColor=vec4(baseColor*(1.5+activity),alpha);
 #include <tonemapping_fragment>
 #include <colorspace_fragment>
 return;}
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
`;function jR(o){const t=new Ua;t.name="regional-celestial-bodies",o.add(t);const i=new za(1,32,20),s=new za(1,16,10),l=new za(1,8,6),u=A=>{const F=new en({uniforms:{baseColor:{value:new ue("#718fa6")},detailColor:{value:new ue("#c7c6b0")},kind:{value:A},alpha:{value:1},seed:{value:1},lightDirection:{value:new V(-.65,.4,.75)}},vertexShader:qR,fragmentShader:YR,transparent:!0,depthWrite:!0}),Z=new an(i,F);return Z.renderOrder=4,Z.userData.kind=A>2.5?"star":A>1.5?"rocky-body":"planet",t.add(Z),Z},f=Array.from({length:12},()=>u(0)),d=Array.from({length:8},(A,F)=>{const Z=u(2);return Z.userData.kind="moon",{mesh:Z,parent:F}}),p=u(3);p.name="primary-star";const m=new an(new xs(1,1),new en({uniforms:{baseColor:{value:new ue},alpha:{value:1}},transparent:!0,depthWrite:!1,blending:ir,vertexShader:"varying vec2 vUv;void main(){vUv=uv;vec4 center=modelViewMatrix*vec4(0.,0.,0.,1.);vec2 size=vec2(length(modelMatrix[0].xyz),length(modelMatrix[1].xyz));center.xy+=position.xy*size;gl_Position=projectionMatrix*center;}",fragmentShader:"varying vec2 vUv;uniform vec3 baseColor;uniform float alpha;void main(){float r=length(vUv-.5)*2.;float a=exp(-r*r*7.)*(1.-smoothstep(.7,1.,r));gl_FragColor=vec4(baseColor*1.3,a*alpha*.45);}"}));m.name="stellar-corona",m.frustumCulled=!1,m.renderOrder=3.5,t.add(m);const v=new an(new km(1.32,2.2,64),new en({uniforms:{color:{value:new ue("#b8afa0")},alpha:{value:1}},transparent:!0,depthWrite:!1,side:_i,vertexShader:"varying vec2 p;void main(){p=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 p;uniform vec3 color;uniform float alpha;void main(){float r=length(p);float edge=smoothstep(1.32,1.42,r)*(1.-smoothstep(2.05,2.2,r));float bands=.35+.25*sin(r*180.)+.2*sin(r*47.);gl_FragColor=vec4(color*.7,edge*max(.1,bands)*alpha);}"}));v.name="planetary-ring",v.renderOrder=5,t.add(v);const g=new kn().setFromEuler(new xi(1.12,.2,-.27)),y=new Jc({color:"#7a858d",roughness:1,transparent:!0}),x=new $T(new Vm(1,0),y,96);x.name="distant-rock-cluster",t.add(x);const E=new V,b=new kn,M=new V,_=new V;let D=Sm(7123,0),R=7123,T=0,L=!1,z="Medium",P=0;const I=(A,F,Z,U)=>{R=A,T=F,D=Sm(A,F),L=!0,E.copy(Z),U?b.copy(U):b.identity(),t.userData.systemName=D.name,f.forEach(($,Q)=>{const gt=D.planets[Q],St=$.material.uniforms;St.baseColor.value.copy(gt.color),St.detailColor.value.copy(gt.color).lerp(new ue("#d0d0b0"),.5),St.seed.value=gt.seed,St.kind.value=gt.kind,St.lightDirection.value.copy(D.center).sub(gt.position).applyQuaternion(b).normalize(),$.userData.kind=gt.kind===2?"rocky-body":"planet"}),d.forEach(({mesh:$,parent:Q},gt)=>{$.material.uniforms.baseColor.value.copy(D.planets[Q].color).lerp(new ue("#a4a5ac"),.7),$.material.uniforms.detailColor.value.set("#b7b4ab"),$.material.uniforms.seed.value=D.planets[Q].seed+gt*3.1}),p.material.uniforms.baseColor.value.copy(D.starColor),p.material.uniforms.seed.value=A%1e3,m.material.uniforms.baseColor.value.copy(D.starColor),v.material.uniforms.color.value.copy(D.planets[1].color).lerp(new ue("#e5d5b1"),.5);let Y=(A^20903)>>>0;const q=()=>(Y=Math.imul(Y,1664525)+1013904223>>>0,Y/4294967296),k=new xn;for(let $=0;$<96;$++){const Q=q()*Math.PI*2,gt=2300+q()*650;k.position.set(Math.cos(Q)*gt,(q()-.5)*160,Math.sin(Q)*gt),k.rotation.set(q()*3,q()*3,q()*3);const St=5+q()*13;k.scale.set(St,St*.7,St*1.15),k.updateMatrix(),x.setMatrixAt($,k.matrix)}x.instanceMatrix.needsUpdate=!0,x.computeBoundingSphere()},N=(A,F,Z,U)=>{A.position.copy(F).applyQuaternion(b).add(E).sub(U),A.scale.setScalar(Z)};return{group:t,reseed:I,setJump(A){P=A},configure(A){z=A,x.count=A==="Low"?48:A==="Medium"?72:96},update(A,F,Z,U){(!L||Z!==T)&&I(R,Z,E.clone(),b.clone());const Y=1-bn.smoothstep(P,.12,.65);f.forEach((q,k)=>{const $=D.planets[k];q.visible=k<D.count,N(q,$.position,$.radius,U),q.rotation.y=F*.002+k*.5,q.geometry=q.position.lengthSq()>6e3**2?l:z==="High"?i:s,q.material.uniforms.alpha.value=bn.smoothstep(q.position.length()/$.radius,1.05,1.4)*Y}),d.forEach(({mesh:q,parent:k},$)=>{const Q=f[k],gt=D.planets[k].radius;q.visible=Q.visible,q.geometry=Q.geometry,_.set(gt*(2.2+$*.12),gt*.6,gt*.7).applyQuaternion(b),q.position.copy(Q.position).add(_),q.scale.setScalar(Math.max(12,gt*.18)),q.material.uniforms.alpha.value=Q.material.uniforms.alpha.value}),N(p,D.center,D.starRadius,U),p.geometry=z==="High"?i:s,p.visible=!0,p.material.uniforms.alpha.value=bn.smoothstep(p.position.length()/D.starRadius,1.05,1.4)*Y,m.position.copy(p.position),m.scale.setScalar(D.starRadius*8),m.visible=!0,m.material.uniforms.alpha.value=p.material.uniforms.alpha.value,v.visible=!0,v.position.copy(f[1].position),v.scale.setScalar(D.planets[1].radius),v.quaternion.copy(b).multiply(g),v.material.uniforms.alpha.value=f[1].material.uniforms.alpha.value,M.copy(D.center).applyQuaternion(b).add(E).sub(U),x.position.copy(M),x.quaternion.copy(b),x.visible=!0,y.opacity=Y},dispose(){t.removeFromParent(),x.dispose();const A=new Set([i,s,l]),F=new Set;t.traverse(Z=>{if(Z instanceof an){A.add(Z.geometry);for(const U of Array.isArray(Z.material)?Z.material:[Z.material])F.add(U)}}),A.forEach(Z=>Z.dispose()),F.forEach(Z=>Z.dispose())}}}const cf=14e3;function WR(o){return[o.x,o.y,o.z].map(t=>Math.floor((t+cf/2)/cf))}function Ex(o,t,i){let s=(Math.imul(o,73856093)^Math.imul(t,19349663)^Math.imul(i,83492791)^7123)>>>0;const l=s,u=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296),f=o===0&&t===0&&i===0,d=f?0:l%5,p=new kn().setFromEuler(new xi(u()*Math.PI*2,u()*Math.PI*2,u()*Math.PI*2));f&&p.identity();const m=new V(o,t,i).multiplyScalar(cf),v=Sm(l,d,!1),g=v.center.clone().applyQuaternion(p).add(m);return{key:`${o}/${t}/${i}`,seed:l,region:d,heading:p,anchor:m,starWorld:g,starColor:v.starColor,starRadius:v.starRadius,name:v.name}}function ZR(o){const t=Array.from({length:27},()=>({bodies:jR(o),sector:null})),i=new Ua;i.name="distant-system-markers",o.add(i);const s=343,l=new Float32Array(s*3),u=new Float32Array(s*3),f=new Float32Array(s),d=new Sn;d.setAttribute("position",new hn(l,3)),d.setAttribute("color",new hn(u,3)),d.setAttribute("size",new hn(f,1)),d.setDrawRange(0,s);const p=new V,m=new V,v=new V,g=new V,y=new en({uniforms:{offset:{value:m},jump:{value:1}},vertexColors:!0,transparent:!0,depthWrite:!1,blending:ir,vertexShader:"attribute float size;uniform vec3 offset;uniform float jump;varying vec3 vColor;varying float visibility;void main(){vec3 p=position-offset;float d=length(p);visibility=smoothstep(10000.,14000.,d)*(1.-smoothstep(32000.,40000.,d))*jump;vColor=color;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(size*85000./max(100.,d),1.8,12.);}",fragmentShader:"varying vec3 vColor;varying float visibility;void main(){float d=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(vColor*1.6,exp(-d*d*5.)*visibility);}"}),x=new Im(d,y);x.frustumCulled=!1,x.renderOrder=3,i.add(x);let E="",b="Medium";const M=_=>{const[D,R,T]=WR(_),L=`${D}/${R}/${T}`;if(L===E)return;E=L,p.set(D,R,T).multiplyScalar(cf);let z=0;for(let I=-3;I<=3;I++)for(let N=-3;N<=3;N++)for(let A=-3;A<=3;A++){const F=Ex(D+I,R+N,T+A);F.starWorld.clone().sub(p).toArray(l,z*3),F.starColor.toArray(u,z*3),f[z]=F.starRadius/400,z++}d.attributes.position.needsUpdate=!0,d.attributes.color.needsUpdate=!0,d.attributes.size.needsUpdate=!0;const P=new Map;for(let I=-1;I<=1;I++)for(let N=-1;N<=1;N++)for(let A=-1;A<=1;A++){const F=Ex(D+I,R+N,T+A);P.set(F.key,F)}for(const I of t)I.sector&&P.has(I.sector.key)?P.delete(I.sector.key):I.sector=null;for(const I of P.values()){const N=t.find(A=>!A.sector);N.sector=I,N.bodies.reseed(I.seed,I.region,I.anchor,I.heading),N.bodies.update(1e3,0,I.region,_),N.bodies.configure(b)}};return{setJump(_){y.uniforms.jump.value=1-bn.smoothstep(_,.12,.65);for(const D of t)D.bodies.setJump(_)},configure(_){b=_;for(const D of t)D.bodies.configure(_)},update(_,D,R,T){var L;M(T),m.copy(T).sub(p);for(const z of t){const P=z.sector;z.bodies.update(_,D,P.region,T);for(const I of z.bodies.group.children){const N=I.position.length(),A=1-bn.smoothstep(N,1e4,13e3);if(I instanceof an){const F=I.material;(L=F.uniforms)!=null&&L.alpha?F.uniforms.alpha.value*=A:"opacity"in F&&(F.opacity*=A)}I.visible=I.visible&&A>0}}},navigation(_,D){g.set(0,0,-1).applyQuaternion(D);let R=t[0].sector,T=1/0;for(const P of t){const I=P.sector.starWorld.distanceTo(_);I<T&&(R=P.sector,T=I)}let L=R,z=-1/0;for(const P of t){const I=P.sector;if(I.key===R.key)continue;v.copy(I.starWorld).sub(_);const N=v.length(),A=v.normalize().dot(g)-N/1e5;A>z&&(z=A,L=I)}return{current:T<5200?R.name:"Interstellar passage",next:L.name,distance:Math.round(L.starWorld.distanceTo(_))}},dispose(){for(const _ of t)_.bodies.dispose();i.removeFromParent(),d.dispose(),y.dispose()}}}const Mm={Low:{pixelRatio:.9,stars:[550,2400,7800],cloudScale:.32,volumes:1,steps:4,octaves:2,bloom:!1},Medium:{pixelRatio:1,stars:[1e3,4800,19e3],cloudScale:.4,volumes:2,steps:7,octaves:2,bloom:!1},High:{pixelRatio:1.35,stars:[2200,1e4,48e3],cloudScale:.5,volumes:3,steps:10,octaves:3,bloom:!0}},Tx={Dark:{exposure:.8,cabin:.7,nebula:.65},Balanced:{exposure:1.12,cabin:1,nebula:.9},Cinematic:{exposure:1.32,cabin:1.12,nebula:1.08}},Na=[{name:"Violet Nebula",subtitle:"THE PERSEUS ARM",color:"#a879ef",second:"#315fab",accent:"#f4a4cf",density:1.05,band:.8,structure:1.15,bandWidth:1,warmth:.25,stars:.87,exposure:1},{name:"Stellar Ocean",subtitle:"AN ENDLESS SEA OF LIGHT",color:"#88bcf2",second:"#234a89",accent:"#c3dcff",density:.38,band:.7,structure:1.4,bandWidth:.65,warmth:.07,stars:1,exposure:1.04},{name:"Golden Core",subtitle:"THE HEART OF THE GALAXY",color:"#edbd79",second:"#956753",accent:"#fff2c9",density:.85,band:1.65,structure:1.8,bandWidth:1.4,warmth:.88,stars:1.4,exposure:.93},{name:"Cosmic Clouds",subtitle:"WHERE THE STARS ARE BORN",color:"#67cbbf",second:"#306c9c",accent:"#b1d5e8",density:1.3,band:.5,structure:.65,bandWidth:1.1,warmth:.16,stars:.7,exposure:1},{name:"Deep Silence",subtitle:"FAR FROM EVERYTHING",color:"#6d7fbb",second:"#253553",accent:"#a6b8e1",density:.12,band:.15,structure:.8,bandWidth:.45,warmth:.12,stars:.23,exposure:.84}],bS=`
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
`,QR=`
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
`,KR=`
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
`,JR=`
varying vec3 worldPoint;
void main(){vec4 p=modelMatrix*vec4(position,1.);worldPoint=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}
`,$R=`
precision highp float;
varying vec3 worldPoint;
uniform vec3 center, radii, tint, second, accent;
uniform float time, density, visibility, energy, seed, structure;
uniform int steps, octaves;
uniform mat3 volumeRotation;
${bS}
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
`,t3=`
varying vec3 direction;
void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`,e3=`
varying vec3 direction;
uniform vec3 tint, second, accent;
uniform float band, density, energy, bandWidth;
uniform mat3 layoutRotation, destinationRotation, volumeRotation;
uniform int octaves;
${bS}
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
`;function n3(o){const t=Na[0],i=new iS,s=new Ui(1,1,{type:Xi,depthBuffer:!1}),l=new ye,u={sky:{value:s.texture},reprojection:{value:l},tanHalf:{value:.6745},wideTanHalf:{value:.7554},aspect:{value:1},veil:{value:0},jumpTint:{value:new ue("#92bce0")}},f=new an(new xs(2,2),new en({uniforms:u,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 uvv;void main(){uvv=uv;gl_Position=vec4(position.xy,1.,1.);}",fragmentShader:`varying vec2 uvv;uniform sampler2D sky;uniform mat3 reprojection;uniform float tanHalf,wideTanHalf,aspect,veil;uniform vec3 jumpTint;
      void main(){vec3 ray=reprojection*vec3((uvv-.5)*2.*tanHalf*vec2(aspect,1.),-1.);
      vec2 sampleUV=ray.xy/max(.001,-ray.z)/(2.*wideTanHalf*vec2(aspect,1.))+.5;
      gl_FragColor=texture2D(sky,clamp(sampleUV,.001,.999));gl_FragColor.rgb=mix(gl_FragColor.rgb,jumpTint*.38,veil*.985);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`}));f.frustumCulled=!1,f.renderOrder=-10,o.add(f);const d=new vi(75,1,.1,16e3),p=new kn,m=new kn,v=new kn,g=new V,y=new V,x=new Ve,E=new V,b=new V;let M=!0,_=-1/0,D=1/24;const R=ZR(o),T=new V,L=new V,z=new kn,P=new kn,I=new ye,N=new Ve,A=new ye,F=new ye,Z=Na.map(j=>({tint:new ue(j.color),second:new ue(j.second),accent:new ue(j.accent)})),U={jumpAmount:{value:0},layoutRotation:{value:I},destinationRotation:{value:A},volumeRotation:{value:F},time:{value:0},tint:{value:Z[0].tint.clone()},second:{value:Z[0].second.clone()},accent:{value:Z[0].accent.clone()},density:{value:Number(t.density)},band:{value:Number(t.band)},warmth:{value:Number(t.warmth)},abundance:{value:t.stars/1.4},structure:{value:Number(t.structure)},bandWidth:{value:Number(t.bandWidth)},energy:{value:.9},octaves:{value:3},halo:{value:1}};let Y=7123;const q=()=>(Y=Y*16807%2147483647,(Y-1)/2147483646),k=()=>Math.sqrt(-2*Math.log(Math.max(1e-5,q())))*Math.cos(2*Math.PI*q()),Q=[new V(1900,1400,1900),new V(5400,4e3,5400),new V(15e3,11e3,15e3)].map((j,et)=>{const xt=Mm.High.stars[et],Ct=new Float32Array(xt*3),wt=new Float32Array(xt),Mt=new Float32Array(xt),Lt=new Float32Array(xt);for(let ht=0;ht<xt;ht++){let vt=(q()-.5)*j.x,Rt=(q()-.5)*j.z,Nt=(q()-.5)*j.y;if(et>0&&q()<.72){if(q()<.28){const re=Math.floor(q()*4);vt=(re%2?.22:-.24)*j.x+k()*j.x*.045,Rt=(re<2?-.27:.22)*j.z+k()*j.z*.055}Nt=-.42*vt+k()*j.y*.035+Math.sin(Rt/j.z*5)*j.y*.045}Ct.set([vt,Nt,Rt],ht*3);const It=q();wt[ht]=(It>.987?12+q()*14:1.3+q()*4.6)*[.7,1.1,2][et],Mt[ht]=q(),Lt[ht]=q()}const H=new Sn;H.setAttribute("position",new hn(Ct,3)),H.setAttribute("radius",new hn(wt,1)),H.setAttribute("temperature",new hn(Mt,1)),H.setAttribute("identity",new hn(Lt,1));const bt=new en({uniforms:{...U,offset:{value:new V},span:{value:j},layoutOffset:{value:new V},pixels:{value:400},dpr:{value:1}},vertexShader:QR,fragmentShader:KR,transparent:!0,depthWrite:!1,blending:ir}),yt=new Im(H,bt);return yt.frustumCulled=!1,yt.renderOrder=3,o.add(yt),yt}),gt=new an(new za(12500,32,16),new en({uniforms:U,vertexShader:t3,fragmentShader:e3,side:Xn,depthWrite:!1}));gt.renderOrder=-2,gt.frustumCulled=!1,i.add(gt);const St=new za(1,24,16),At=[{center:new V(-180,110,-820),radii:new V(680,330,770)},{center:new V(600,-140,-1600),radii:new V(1050,480,1e3)},{center:new V(-850,220,-2400),radii:new V(1200,520,1050)},{center:new V(450,420,1200),radii:new V(850,600,1e3)}],qt=At.map(()=>new V),Ot=At.map((j,et)=>{const xt=new en({uniforms:{...U,center:{value:j.center.clone()},radii:{value:j.radii},steps:{value:10},visibility:{value:1},seed:{value:4.3+et*9.7}},vertexShader:JR,fragmentShader:$R,transparent:!0,depthWrite:!1,side:Xn}),Ct=new an(St,xt);return Ct.position.copy(j.center),Ct.scale.copy(j.radii),Ct.renderOrder=1,i.add(Ct),Ct}),G=new Gb("#b7c6ef","#080e1d",1.6);o.add(G);const ft=new Xb("#dae6ff",2.8);return ft.position.set(-3,4,1),o.add(ft),{tint:U.tint.value,navigation:R.navigation,setJump(j,et){U.jumpAmount.value=Math.max(j,et),u.veil.value=et,u.jumpTint.value.copy(U.tint.value).lerp(U.accent.value,.35),R.setJump(Math.max(j,et))},reseed(j,et,xt,Ct){T.copy(xt),Ct?z.copy(Ct):z.identity(),P.copy(z).invert(),A.setFromMatrix4(N.makeRotationFromQuaternion(z)),F.copy(A).transpose();for(const Lt of Ot)Lt.quaternion.copy(z);let wt=j>>>0;const Mt=()=>(wt=Math.imul(wt,1664525)+1013904223>>>0,wt/4294967296);N.makeRotationY((Mt()-.5)*1.2),N.multiply(new Ve().makeRotationZ((Mt()-.5)*.8)),I.setFromMatrix4(N);for(const Lt of Q){const H=Lt.material.uniforms.span.value;Lt.material.uniforms.layoutOffset.value.set((Mt()-.5)*H.x,(Mt()-.5)*H.y,(Mt()-.5)*H.z)}for(let Lt=0;Lt<Ot.length;Lt++)qt[Lt].set((Mt()-.5)*600,(Mt()-.5)*250,(Mt()-.5)*500),Ot[Lt].material.uniforms.seed.value=Mt()*80+2;M=!0},renderAtmosphere(j,et,xt=!1){et.updateWorldMatrix(!0,!1),et.matrixWorld.decompose(g,p,y);const Ct=et,wt=Math.tan(bn.degToRad(Ct.fov)*.5);(u.aspect.value!==Ct.aspect||u.tanHalf.value!==wt)&&(M=!0),u.tanHalf.value=wt,u.wideTanHalf.value=wt*1.12,u.aspect.value=Ct.aspect;const Mt=performance.now()/1e3;if(xt||M||Mt-_>=D||p.angleTo(m)>.075||E.distanceToSquared(b)>900){d.fov=bn.radToDeg(2*Math.atan(wt*1.12)),d.aspect=Ct.aspect,d.near=Ct.near,d.far=Ct.far,d.updateProjectionMatrix(),d.position.copy(g),d.quaternion.copy(p);const Lt=j.toneMapping;j.toneMapping=Oa,j.setRenderTarget(s),j.render(i,d),j.setRenderTarget(null),j.toneMapping=Lt,m.copy(p),b.copy(E),_=performance.now()/1e3,M=!1}v.copy(m).invert().multiply(p),x.makeRotationFromQuaternion(v),l.setFromMatrix4(x)},dispose(){s.dispose(),R.dispose();const j=new Set,et=new Set;i.traverse(xt=>{xt instanceof an&&(j.add(xt.geometry),et.add(xt.material))}),j.forEach(xt=>xt.dispose()),et.forEach(xt=>xt.dispose())},configure(j,et,xt,Ct,wt,Mt,Lt=!1){M=!0,D=Lt?1/15:j==="Low"?1/20:j==="Medium"?1/24:1/30;const H=Mm[j];R.configure(j),U.octaves.value=H.octaves;const bt=Mt&&j!=="Low"?Xi:qi;s.texture.type!==bt&&(s.dispose(),s.texture.type=bt),s.setSize(Math.max(1,Math.round(xt*et*(Lt?.26:H.cloudScale))),Math.max(1,Math.round(Ct*et*(Lt?.26:H.cloudScale)))),U.halo.value=.75+wt*.8,Q.forEach((yt,ht)=>{yt.geometry.setDrawRange(0,H.stars[ht]),yt.material.uniforms.pixels.value=Ct*.64*et,yt.material.uniforms.dpr.value=et}),Ot.forEach((yt,ht)=>{yt.visible=ht<H.volumes,yt.material.uniforms.steps.value=H.steps})},update(j,et,xt,Ct,wt){L.copy(Ct).sub(T).applyQuaternion(P),E.copy(L),R.update(j,et,xt,Ct);const Mt=Na[xt],Lt=Z[xt],H=1-Math.exp(-j*.55);U.time.value=et,U.tint.value.lerp(Lt.tint,H),U.second.value.lerp(Lt.second,H),U.accent.value.lerp(Lt.accent,H),U.density.value=bn.lerp(U.density.value,Mt.density,H),U.band.value=bn.lerp(U.band.value,Mt.band,H),U.structure.value=bn.lerp(U.structure.value,Mt.structure,H),U.bandWidth.value=bn.lerp(U.bandWidth.value,Mt.bandWidth,H),U.warmth.value=bn.lerp(U.warmth.value,Mt.warmth,H),U.abundance.value=bn.lerp(U.abundance.value,Mt.stars/1.4,H),U.energy.value=bn.lerp(U.energy.value,wt,H),Q.forEach(bt=>bt.material.uniforms.offset.value.copy(L)),Ot.forEach((bt,yt)=>{const ht=At[yt].center;bt.position.set(bn.euclideanModulo(ht.x+qt[yt].x-L.x+4600,9200)-4600,bn.euclideanModulo(ht.y+qt[yt].y-L.y+3600,7200)-3600,bn.euclideanModulo(ht.z+qt[yt].z-L.z+4600,9200)-4600);const vt=Math.max(Math.abs(bt.position.x)/4600,Math.abs(bt.position.y)/3600,Math.abs(bt.position.z)/4600);bt.position.applyQuaternion(z),bt.material.uniforms.center.value.copy(bt.position),bt.material.uniforms.visibility.value=1-bn.smoothstep(vt,.65,.95)})}}}function AS(o,t=!1){const i=o[0].index!==null,s=new Set(Object.keys(o[0].attributes)),l=new Set(Object.keys(o[0].morphAttributes)),u={},f={},d=o[0].morphTargetsRelative,p=new Sn;let m=0;for(let v=0;v<o.length;++v){const g=o[v];let y=0;if(i!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const x in g.attributes){if(!s.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;u[x]===void 0&&(u[x]=[]),u[x].push(g.attributes[x]),y++}if(y!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". Make sure all geometries have the same number of attributes."),null;if(d!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const x in g.morphAttributes){if(!l.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+".  .morphAttributes must be consistent throughout all geometries."),null;f[x]===void 0&&(f[x]=[]),f[x].push(g.morphAttributes[x])}if(t){let x;if(i)x=g.index.count;else if(g.attributes.position!==void 0)x=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". The geometry must have either an index or a position attribute"),null;p.addGroup(m,x,v),m+=x}}if(i){let v=0;const g=[];for(let y=0;y<o.length;++y){const x=o[y].index;for(let E=0;E<x.count;++E)g.push(x.getX(E)+v);v+=o[y].attributes.position.count}p.setIndex(g)}for(const v in u){const g=bx(u[v]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+v+" attribute."),null;p.setAttribute(v,g)}for(const v in f){const g=f[v][0].length;if(g===0)break;p.morphAttributes=p.morphAttributes||{},p.morphAttributes[v]=[];for(let y=0;y<g;++y){const x=[];for(let b=0;b<f[v].length;++b)x.push(f[v][b][y]);const E=bx(x);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+v+" morphAttribute."),null;p.morphAttributes[v].push(E)}}return p}function bx(o){let t,i,s,l=-1,u=0;for(let m=0;m<o.length;++m){const v=o[m];if(t===void 0&&(t=v.array.constructor),t!==v.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=v.itemSize),i!==v.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(s===void 0&&(s=v.normalized),s!==v.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(l===-1&&(l=v.gpuType),l!==v.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;u+=v.count*i}const f=new t(u),d=new hn(f,i,s);let p=0;for(let m=0;m<o.length;++m){const v=o[m];if(v.isInterleavedBufferAttribute){const g=p/i;for(let y=0,x=v.count;y<x;y++)for(let E=0;E<i;E++){const b=v.getComponent(y,E);d.setComponent(y+g,E,b)}}else f.set(v.array,p);p+=v.count*i}return l!==void 0&&(d.gpuType=l),d}function i3(o){const t=new Ua;t.name="enclosed-flight-deck",o.add(t);const i={value:new ue("#ae80f0")},s={value:1},l=(U,Y)=>new en({uniforms:{baseColor:{value:new ue(U)},tint:i,brightness:s,polish:{value:Y}},vertexShader:"varying vec3 point,faceNormal;void main(){point=position;faceNormal=normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 point,faceNormal;uniform vec3 baseColor,tint;uniform float brightness,polish;
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
      }`}),u=l("#141d23",.3),f=l("#2b393e",.5),d=l("#070b10",.12),p=new _s({color:"#52d9d5"}),m=new Map;let v=!1;const g=(U,Y)=>{v&&(U.scale(.72,.58,.9),U.translate(0,-.798,-.3)),m.has(Y)||m.set(Y,[]),m.get(Y).push(U)};function y(U,Y,q,k,$,Q,gt,St=0,At=0,qt=0){const Ot=new cr($,Q,gt);Ot.rotateX(St),Ot.rotateY(At),Ot.rotateZ(qt),Ot.translate(Y,q,k),g(Ot,U)}function x(U,Y,q,k){const $=new Bm(k,k,Y.distanceTo(q),8);$.applyQuaternion(new kn().setFromUnitVectors(new V(0,1,0),q.clone().sub(Y).normalize())),$.translate(...Y.clone().add(q).multiplyScalar(.5).toArray()),g($,U)}function E(U,Y,q,k,$){const Q=Array.from({length:41},(gt,St)=>{const At=-.12+St/40*(Math.PI+.24);return new V(Math.cos(At)*Y,-.95+Math.sin(At)*q,U)});g(new uf(new vm(Q),48,k,8,!1),$)}y(u,0,-2.02,.25,7.3,.22,7),y(u,0,-1.65,2.55,7.3,.65,.2),y(u,0,3.35,2.55,7.3,.13,.18);for(const U of[-3.5,-1.4,1.4,3.5])y(u,U,1.05,2.55,.085,4.55,.14),y(p,U+.048,1.05,2.48,.008,4.42,.012);for(const U of[-1.5,1.1,2.55])y(u,0,3.35,U,7.05,.095,.09),y(p,0,3.29,U,6.9,.008,.012);for(const U of[-1,1]){y(u,U*3.55,-1.65,.4,.17,.65,4.3),y(u,U*3.55,3.35,-.4,.13,.13,6);for(const Y of[-1.5,1.1,2.55])y(u,U*3.55,1.05,Y,.12,4.55,.085),y(p,U*3.48,1.05,Y+.049,.012,4.42,.008);y(u,U*2.62,-1.52,-1.9,.65,.76,4,0,U*-.1),x(f,new V(U*1,-1.1,-2.95),new V(U*2.72,-1.4,.25),.075),x(u,new V(U*1.12,-1.15,-3.02),new V(U*2.85,-1.47,.35),.14),x(f,new V(U*2.9,-.95,-3.2),new V(U*3.12,-1.25,.5),.055),x(p,new V(U*1.16,-1.18,-2.98),new V(U*2.77,-1.54,.15),.009);for(let Y=0;Y<13;Y++){const q=Y/12;y(f,U*(1.12+q*1.69),-1.15-q*.33,-3.02+q*3.23,.035,.035,.028)}}E(-3.35,2.92,3.62,.085,u),E(-3.32,2.84,3.57,.025,f),E(-3.29,2.81,3.53,.008,p),E(.7,3.15,3.9,.12,u),x(u,new V(0,2.68,-3.35),new V(0,2.95,.8),.065),v=!0;const b=new lf;b.moveTo(-1.62,-1.85),b.lineTo(-1.44,-.58),b.bezierCurveTo(-1.2,-.12,-.92,.48,-.58,.55),b.quadraticCurveTo(0,.72,.58,.55),b.bezierCurveTo(.92,.48,1.2,-.12,1.44,-.58),b.lineTo(1.62,-1.85),b.closePath();const M=new Xl(b,{depth:.24,bevelEnabled:!0,bevelSize:.045,bevelThickness:.045,bevelSegments:2,steps:1});M.translate(0,-.12,-3.18),g(M,d);const _=[new V(-1.4,-.62,-2.89),new V(-.88,.23,-2.89),new V(0,.52,-2.89),new V(.88,.23,-2.89),new V(1.4,-.62,-2.89)];g(new uf(new vm(_),40,.045,8,!1),f),y(f,0,-.13,-2.84,1.19,.76,.12,-.1),y(d,0,-.13,-2.755,1.13,.7,.035,-.1),y(u,0,-.74,-2.72,1.32,.18,.22),y(d,0,-.72,-2.58,.85,.09,.06);for(const U of[-1,1]){y(u,U*1.14,-1.05,-1.62,.78,.25,1.75,.18,0,U*.12),y(d,U*1.14,-.91,-1.62,.69,.035,1.66,.18,0,U*.12),x(f,new V(U*1.59,-1.13,-.65),new V(U*1.61,-.78,-2.5),.045),x(f,new V(U*.73,-1.12,-.72),new V(U*.75,-.87,-2.35),.035),y(d,U*.97,-.63,-2.36,.59,.44,.12,-.34,-U*.18);for(let Y=0;Y<3;Y++)for(let q=0;q<4;q++)y(f,U*1.15+(q-1.5)*.12,-.76-Y*.035,-1.8+Y*.18,.085,.04,.105,.18);for(let Y=0;Y<5;Y++)y(d,U*1.23,-.83,-.96-Y*.15,.12,.07,.085,.18),y(f,U*.94,-.79,-.98-Y*.15,.045,.06,.065,.18);y(d,U*.65,-1.11,-1.78,.26,.11,.3),x(f,new V(U*.65,-1.07,-1.78),new V(U*.59,-.78,-1.86),.043),y(d,U*.59,-.72,-1.87,.11,.19,.16,-.25,0,U*.15),y(p,U*.59,-.625,-1.84,.035,.008,.045),y(f,U*.22,-1.74,-2.16,.2,.09,.34,.5);for(let Y=0;Y<6;Y++)y(d,U*.22,-1.69+Y*.013,-2.29+Y*.04,.14,.014,.012,.5);y(p,U*1.34,-1.82,-.45,.025,.025,.58);for(let Y=0;Y<18;Y++)y(f,U*1.32,-1.91,-.9+Y*.085,.28,.014,.012)}v=!1,y(d,0,-1.66,-.08,.99,.25,1.4),y(u,0,-1.12,1,1.12,.92,.28,-.13),y(d,0,-1.1,.82,.91,.78,.14,-.13);const D=new _s({color:"#a0d9e1",transparent:!0,opacity:.025,depthWrite:!1,side:_i}),R=(U,Y,q,k,$,Q=0,gt=0)=>{const St=new xs(k,$);St.rotateX(Q),St.rotateY(gt),St.translate(U,Y,q),g(St,D)};for(const U of[-1,1])R(U*3.56,1.05,-.4,5.9,4.5,0,Math.PI/2);R(0,1.05,2.57,7,4.5),R(0,3.36,-.4,7,5.9,Math.PI/2);const T=document.createElement("canvas");T.width=T.height=1024;const L=T.getContext("2d");L.fillStyle="#020b10",L.fillRect(0,0,1024,1024);const z=(U,Y,q,k,$="#40bfbf")=>{L.strokeStyle=$,L.beginPath(),L.moveTo(U,Y),L.lineTo(q,k),L.stroke()},P=(U,Y,q,k=10,$="#6ee9dd")=>{L.font=`${k}px monospace`,L.fillStyle=$,L.fillText(U,Y,q)};L.strokeStyle="#65eddf",L.lineWidth=3,L.strokeRect(5,5,630,354),P("A E T H E R   /   DEEP SPACE NAVIGATION",20,26,12),P("FLIGHT SYSTEMS",21,53),P("VECTOR  /  LOCK",465,53),L.lineWidth=1;for(let U=0;U<11;U++)z(20,70+U*22,164,70+U*22,"#154c58"),P(["NAV  ONLINE","DRIVE NOMINAL","O2   100.0%","HULL  STABLE"][U%4],24,84+U*22,8),z(460,70+U*22,610,70+U*22,"#154c58"),P(`${(U*173.29+72).toFixed(2)} / ${U%3===0?"ACTIVE":"SYNC"}`,467,84+U*22,8);for(let U=0;U<9;U++){const Y=18+U*11;L.strokeStyle=U%2?"#174b59":"#21838b",L.beginPath(),L.arc(320,185,Y,0,Math.PI*2),L.stroke()}for(let U=0;U<12;U++){const Y=U/12*Math.PI*2;z(320+Math.cos(Y)*19,185+Math.sin(Y)*19,320+Math.cos(Y)*107,185+Math.sin(Y)*107,"#18525e")}const I=L.createRadialGradient(320,185,1,320,185,65);I.addColorStop(0,"#8bfff5"),I.addColorStop(.18,"#1dd7d5"),I.addColorStop(1,"#05303b00"),L.fillStyle=I,L.fillRect(250,115,140,140);for(let U=0;U<60;U++)z(185+U*4.4,317+Math.sin(U*.7)*7,189+U*4.4,317+Math.sin((U+1)*.7)*7,"#50cec5");P("PERSEUS // CONTINUOUS NAVIGATION",183,345,9),L.fillStyle="#04100a",L.fillRect(0,390,400,220);for(let U=0;U<18;U++)P(`${U.toString(16).padStart(2,"0")}  ${["SYSTEM LINK ESTABLISHED","TRAJECTORY COMPUTED","DEEP FIELD SCAN / OK","> AETHER FLIGHT COMPUTER"][U%4]}`,12,405+U*11,9,"#80c858");L.fillStyle="#063547",L.fillRect(430,390,350,180);for(let U=0;U<5;U++)P(["ATTITUDE","ENGINE","COOLANT","SIGNAL","ENERGY"][U],445,413+U*30,12),L.fillStyle="#47e4ef",L.fillRect(550,402+U*30,38+U*28,9);const N=["#f3d238","#28becf","#e35345","#9cd357","#c7e9de"];for(let U=0;U<4;U++)for(let Y=0;Y<8;Y++){const q=12+Y*48,k=650+U*48;L.fillStyle="#101e22",L.fillRect(q,k,40,40),L.fillStyle=N[(U*3+Y)%5],L.fillRect(q+4,k+4,32,25),z(q+9,k+34,q+30,k+34,"#899d94")}for(let U=0;U<2;U++){const Y=540+U*220,q=750;for(const k of[65,57,45])L.strokeStyle="#8df6e5",L.lineWidth=k===57?5:2,L.beginPath(),L.arc(Y,q,k,-.9,4.9),L.stroke();L.fillStyle="#bdfff2",L.beginPath(),L.arc(Y,q,12,0,Math.PI*2),L.fill(),z(Y,q,Y+34,q-24,"#bdfff2"),P(U?"OXYGEN":"VELOCITY",Y-30,q+91,11)}for(let U=0;U<12;U++)L.fillStyle=N[U%5],L.fillRect(20+U*45,900,31,16),P(U%3===0?"ARM":"ON",22+U*45,935,8);const A=new rb(T);A.colorSpace=si,A.anisotropy=2;const F=new _s({map:A,color:"#d8fff5",side:_i});function Z(U,Y,q,k,$,Q,gt=0,St=0,At=0){const qt=new xs(k,$),Ot=qt.getAttribute("uv");for(let G=0;G<Ot.count;G++)Ot.setXY(G,(Q[0]+Ot.getX(G)*Q[2])/1024,1-(Q[1]+(1-Ot.getY(G))*Q[3])/1024);qt.rotateX(gt),qt.rotateY(St),qt.rotateZ(At),qt.translate(U,Y,q),g(qt,F)}v=!0,Z(0,-.13,-2.727,1.07,.6,[0,0,640,365],-.1),Z(-.73,-.39,-2.72,.32,.36,[455,663,170,190]),Z(.73,-.39,-2.72,.32,.36,[675,663,170,190]),Z(-.98,-.61,-2.265,.49,.32,[430,390,350,180],-.34,.18,.1),Z(.98,-.61,-2.265,.49,.32,[0,390,400,220],-.34,-.18,-.1),Z(0,-1.02,-2.39,.62,.3,[0,640,400,205],-.4),Z(0,-.59,-2.71,1.46,.085,[0,890,560,65]);for(const U of[-1,1])Z(U*1.14,-.86,-1.53,.5,.53,[0,640,400,205],-Math.PI/2+.18,0,U*.12),Z(U*.65,-1.038,-1.67,.23,.09,[0,890,250,45],-Math.PI/2),Z(U*1.14,-.77,-2.03,.54,.11,[0,890,560,65],-Math.PI/2+.18);for(const U of[-1,1])for(let Y=0;Y<3;Y++)for(let q=0;q<4;q++)Z(U*1.15+(q-1.5)*.12,-.734-Y*.035,-1.8+Y*.18,.065,.08,[16+(Y*3+q)%8*48,654+Y*48,30,25],-Math.PI/2+.18);for(const U of _){const Y=new za(.022,6,4);Y.translate(U.x,U.y,U.z+.055),g(Y,f)}v=!1;for(const[U,Y]of m){for(const $ of Y){if($.index){const Q=$.toNonIndexed();$.copy(Q),Q.dispose()}$.deleteAttribute("uv1")}const q=AS(Y);Y.forEach($=>$.dispose());const k=new an(q,U);k.name=U===D?"observation-glazing":U===u?"enclosure-shell":U===F?"instrument-displays":"cabin-details",t.add(k)}return{group:t,update(U,Y,q,k){t.visible=k;const $=q?.5:1;i.value.copy(U),s.value=Y*$,p.color.set("#50d7ce").multiplyScalar(.7*Y*$),F.color.set("#d8fff5").multiplyScalar((.8+Y*.2)*(q?.5:1))},dispose(){A.dispose()}}}function a3(o){const t=new Ua;t.name="aether-exterior",o.add(t);const i=new Jc({color:"#182632",metalness:.65,roughness:.58,side:_i}),s=new Jc({color:"#58717d",metalness:.7,roughness:.4}),l=new Jc({color:"#080e17",metalness:.3,roughness:.8}),u=new _s({color:"#64d4d8"}),f=new _s({color:"#f08c81"}),d=new Map,p=(g,y)=>{const x=d.get(y)??[];x.push(g),d.set(y,x)},m=(g,y,x,E,b,M,_,D=0)=>{const R=new cr(b,M,_);R.rotateZ(D),R.translate(y,x,E),p(R,g)},v=new za(1,16,10);v.scale(3.3,1.05,8),v.translate(0,-3.2,4),p(v,i),m(i,0,-2.3,7,2.4,.52,8),m(l,0,-2.015,7.5,1.4,.04,6.8);for(const g of[-1,1]){const y=[[3,-.8],[5.7,.2],[13.2,5.1],[12.2,7.4],[5.5,5.1],[3,6.2]].map(([_,D])=>new Ht(g*_,D));g<0&&y.reverse();const x=new lf(y),E=new Xl(x,{depth:.2,bevelEnabled:!0,bevelSize:.09,bevelThickness:.07,bevelSegments:1,steps:1});E.rotateX(Math.PI/2),E.translate(0,-2.15,0),p(E,i);for(let _=0;_<6;_++)m(s,g*(4.5+_*1.15),-2.035,1.2+_*.65,.06,.025,2),m(l,g*(4.5+_*1.15),-2.02,2.25+_*.65,.72,.025,.65);m(u,g*8.5,-2.015,4.35,4.5,.025,.055),m(g<0?f:u,g*12.8,-2,5.5,.18,.08,.6),m(s,g*2.5,-2.5,7.7,1.3,.65,5.7),m(l,g*2.5,-2.45,8.1,.9,.5,5.5),m(u,g*2.5,-2.43,10.91,.7,.25,.04),m(u,g*.9,-2.02,8,.035,.025,5.3);const b=new lf([new Ht(6,-2.1),new Ht(10.6,-.15),new Ht(12.8,-2.1)]),M=new Xl(b,{depth:.15,bevelEnabled:!1});M.rotateY(-Math.PI/2),M.translate(g*3.6,0,0),p(M,i)}for(const[g,y]of d){const x=y.map(M=>M.index?M.toNonIndexed():M),E=AS(x);for(const M of new Set([...y,...x]))M.dispose();const b=new an(E,g);b.name=g===i?"wing-and-hull-armor":"exterior-details",t.add(b)}return{group:t,update(g,y){t.visible=g,u.color.set("#64d4d8").multiplyScalar(.65+Math.min(y/1200,1)*.25)},dispose(){t.removeFromParent(),t.children.forEach(g=>{g.geometry.dispose()}),d.forEach((g,y)=>y.dispose())}}}function s3(o,t,i,s,l={}){const u=new CR({antialias:!0,alpha:!1,powerPreference:"high-performance"});u.setClearColor("#040710"),u.outputColorSpace=si,u.toneMapping=bm,u.toneMappingExposure=Tx.Balanced.exposure,o.appendChild(u.domElement);const f=new iS,d=new vi(68,1,.1,5e4),p=new Ua;p.position.z=5,p.add(d),f.add(p);const m=l.jump??new TS;let v=m.phase;const g={...t()},y=()=>(Object.assign(g,t()),g.blocked=g.blocked||m.busy,g),x=n3(f),E=XR(p),b=new ue,M=new ue("#bad9f3"),_=i3(p),D=a3(p),R=FR(u.domElement,s,i,y),T=new vS,L=new GR;let z=t().quality,P=t().performanceMode,I=t().adaptive,N=0,A=0,F=0,Z=0,U="",Y=!1,q=null,k=null;const $=()=>{q&&(q.passes.forEach(At=>At.dispose()),q.dispose(),q=null,k=null)},Q=()=>{const At=t(),qt=At.performanceMode?"Low":At.quality,Ot=Mm[qt],G=Math.max(1,o.clientWidth),ft=Math.max(1,o.clientHeight),j=Math.min(window.devicePixelRatio||1,Ot.pixelRatio)*(At.performanceMode?.85:At.adaptive?L.scale:1);u.setPixelRatio(j),u.setSize(G,ft),d.aspect=G/ft,d.updateProjectionMatrix();const et=!At.performanceMode&&Ot.bloom&&At.bloom>0&&u.extensions.has("EXT_color_buffer_float");et&&!q?(q=new OR(u),q.addPass(new PR(f,d)),k=new To(new Ht(G,ft),.2,.55,1.1),q.addPass(k),q.addPass(new IR)):et||$(),q&&(q.setPixelRatio(j),q.setSize(G,ft)),x.configure(qt,j,G,ft,At.bloom,u.extensions.has("EXT_color_buffer_float"),At.performanceMode),E.configure(qt,At.reduced),U=`${At.quality}/${At.bloom}/${At.performanceMode}/${At.adaptive}/${At.reduced}`},gt=()=>{var At;T.getDelta(),i.reset(!0),(At=l.onAudio)==null||At.call(l,0,0,!0)};document.addEventListener("visibilitychange",gt),window.addEventListener("resize",Q),Q();const St=()=>{var Ct,wt,Mt,Lt;if(Y)return;A=requestAnimationFrame(St);const At=T.getDelta(),qt=At>.25?0:At,Ot=t();if(document.hidden){i.reset(!0);return}const G=Math.min(At,.25);m.advance(At,Ot.paused),m.phase!==v&&(v=m.phase,(Ct=l.onPhase)==null||Ct.call(l,m.phase)),m.justCommitted&&(x.reseed(m.seed,m.destination,i.position,i.shipQuaternion),(wt=l.onDestination)==null||wt.call(l,m.destination,m.seed));const ft=m.busy&&m.committed?m.destination:Ot.region,j=m.energy*(Ot.reduced?.16:Ot.mode==="Meditation"?.55:1);R.sync(),y(),m.busy&&(g.mode="Autopilot",g.motion=0,g.started=!0,g.speed=Ot.speed+Math.pow(m.energy,2)*(Ot.reduced?100:360)),HR(i,At,g),(Mt=l.onAudio)==null||Mt.call(l,j,m.charge,Ot.paused),(Ot.quality!==z||Ot.performanceMode!==P||Ot.adaptive!==I)&&(L.reset(),z=Ot.quality,P=Ot.performanceMode,I=Ot.adaptive);const et=L.observe(At,Ot.adaptive&&!Ot.performanceMode,Ot.paused);(U!==`${Ot.quality}/${Ot.bloom}/${Ot.performanceMode}/${Ot.adaptive}/${Ot.reduced}`||et)&&Q(),Ot.paused||(F+=qt);const xt=Tx[Ot.lighting];u.toneMappingExposure=bn.damp(u.toneMappingExposure,xt.exposure*Na[ft].exposure,.8,G),x.setJump(j,m.veil),x.update(G,F,ft,i.position,xt.nebula),F>=N&&((Lt=l.onNavigation)==null||Lt.call(l,x.navigation(i.position,i.shipQuaternion)),N=F+.5),p.quaternion.copy(i.shipQuaternion),d.quaternion.copy(i.lookQuaternion),b.copy(x.tint).lerp(M,m.charge*.3),D.update(Ot.cockpit,i.speed),_.update(b,xt.cabin*(1+m.charge*.12),Ot.mode==="Meditation",Ot.cockpit),E.update(Ot.paused?0:Math.min(At,.1),j,x.tint),k&&(k.strength=Ot.bloom*(Ot.mode==="Meditation"?.45:.8+j*.2)),Z+=At,!(Ot.paused&&Z<1/15)&&(Z=0,x.renderAtmosphere(u,d),q?q.render():u.render(f,d))};return St(),()=>{var Ot;Y=!0,cancelAnimationFrame(A),R.dispose(),window.removeEventListener("resize",Q),document.removeEventListener("visibilitychange",gt),(Ot=l.onAudio)==null||Ot.call(l,0,0,!0),$(),_.dispose(),D.dispose(),x.dispose();const At=new Set,qt=new Set;f.traverse(G=>{if(G instanceof an||G instanceof Im||G instanceof aS){At.add(G.geometry);for(const ft of Array.isArray(G.material)?G.material:[G.material])qt.add(ft)}}),At.forEach(G=>G.dispose()),qt.forEach(G=>G.dispose()),u.dispose(),u.domElement.remove()}}const ql=[{id:"meditation",name:"Meditation Impromptu 01",mood:"Gentle piano · meditation",file:"meditation-impromptu-01.mp3",artist:"Kevin MacLeod",isrc:"USUAN1100163"},{id:"floating",name:"Floating Cities",mood:"Dreamlike ambient · a quiet future",file:"floating-cities.mp3",artist:"Kevin MacLeod",isrc:"USUAN1600018"},{id:"jellyfish",name:"Jellyfish in Space",mood:"Soft space music · a flowing journey",file:"jellyfish-in-space.mp3",artist:"Kevin MacLeod",isrc:"USUAN1500030"},{id:"soaring",name:"Soaring",mood:"Atmospheric ambient · calm and spacious",file:"soaring.mp3",artist:"Kevin MacLeod",isrc:"USUAN1600040"}],jm={engineEnabled:!0,spaceEnabled:!0,musicEnabled:!0,engine:.35,space:.3,music:.5,track:"meditation"},Ax="cosmic-drift-audio-v1";function r3(o){const t={...jm};try{const i=JSON.parse(o??"null");if(!i||typeof i!="object")return t;const s=i;for(const f of["engineEnabled","spaceEnabled","musicEnabled"])typeof s[f]=="boolean"&&(t[f]=s[f]);for(const f of["engine","space","music"])typeof s[f]=="number"&&Number.isFinite(s[f])&&(t[f]=Math.max(0,Math.min(1,s[f])));const l={starlight:"meditation",nebula:"floating",orbit:"jellyfish",lunar:"soaring"},u=typeof s.track=="string"?l[s.track]??s.track:"";ql.some(f=>f.id===u)&&(t.track=u)}catch{}return t}class o3{constructor(){de(this,"ctx",null);de(this,"master");de(this,"engine");de(this,"space");de(this,"music");de(this,"onMusicState");de(this,"musicState",{state:"idle",track:null});de(this,"jumpGain");de(this,"jumpTone");de(this,"jumpFilter");de(this,"lastDrive",-1);de(this,"lastCharge",-1);de(this,"settings",{...jm});de(this,"enabled",!1);de(this,"paused",!1);de(this,"slots",[]);de(this,"current");de(this,"retiring");de(this,"fadeTimer");de(this,"pauseTimer");de(this,"visibility",()=>this.apply())}get currentRecording(){var t;return((t=this.current)==null?void 0:t.element)??null}get musicActive(){return this.enabled&&!this.paused&&!document.hidden&&this.settings.musicEnabled&&this.settings.music>0}report(t,i){var l,u,f;const s=((u=(l=this.current)==null?void 0:l.track)==null?void 0:u.id)??null;this.musicState.state===t&&this.musicState.track===s&&this.musicState.message===i||(this.musicState={state:t,track:s,message:i},(f=this.onMusicState)==null||f.call(this,this.musicState))}async start(t){if(t&&(this.settings={...this.settings,track:t,musicEnabled:!0}),!this.ctx){const i=this.ctx=new AudioContext;this.master=i.createGain(),this.master.gain.value=0,this.master.connect(i.destination),this.engine=i.createGain(),this.space=i.createGain(),this.music=i.createGain();for(const p of[this.engine,this.space,this.music])p.gain.value=0,p.connect(this.master);for(const p of[38,57,76]){const m=i.createOscillator(),v=i.createGain();m.type="sine",m.frequency.value=p,v.gain.value=.09,m.connect(v).connect(this.engine),m.start()}const s=i.createBuffer(2,i.sampleRate*4,i.sampleRate);let l=1237;for(let p=0;p<2;p++){const m=s.getChannelData(p);let v=0;for(let g=0;g<m.length;g++){l=l*16807%2147483647,v=(v+((l-1)/2147483646-.5)*.035)/1.018;const y=Math.min(1,g/(i.sampleRate*.08),(m.length-1-g)/(i.sampleRate*.08));m[g]=v*y}}const u=i.createBufferSource(),f=i.createBiquadFilter();u.buffer=s,u.loop=!0,f.type="lowpass",f.frequency.value=650,u.connect(f).connect(this.space),u.start();for(const p of[82.41,123.47]){const m=i.createOscillator(),v=i.createGain();m.frequency.value=p,v.gain.value=.012,m.connect(v).connect(this.space),m.start()}this.jumpGain=i.createGain(),this.jumpGain.gain.value=0,this.jumpGain.connect(this.engine),this.jumpTone=i.createOscillator(),this.jumpTone.frequency.value=42,this.jumpTone.connect(this.jumpGain),this.jumpTone.start();const d=i.createBufferSource();d.buffer=s,d.loop=!0,this.jumpFilter=i.createBiquadFilter(),this.jumpFilter.type="lowpass",this.jumpFilter.frequency.value=250,d.connect(this.jumpFilter).connect(this.jumpGain),d.start(),this.slots=Array.from({length:2},()=>this.makeSlot(i)),document.addEventListener("visibilitychange",this.visibility)}this.apply(),this.current&&this.settings.musicEnabled&&this.settings.music>0&&this.play(this.current),await this.ctx.resume(),this.apply()}makeSlot(t){const i=new Audio;i.loop=!0,i.preload="none";const s=t.createMediaElementSource(i),l=t.createGain();l.gain.value=0,s.connect(l).connect(this.music);const u={element:i,source:s,gain:l,track:null,request:0,pending:!1};i.onwaiting=()=>{this.current===u&&this.musicActive&&this.report("loading")},i.onplaying=()=>{this.current===u&&this.musicActive&&this.report("playing")},i.onerror=()=>{this.current===u&&u.track&&this.report("error","This recording could not load. Select it again to retry.")};const f=new Uint8Array(76),d=new DataView(f.buffer),p=(m,v)=>{for(let g=0;g<v.length;g++)f[m+g]=v.charCodeAt(g)};return p(0,"RIFF"),d.setUint32(4,68,!0),p(8,"WAVEfmt "),d.setUint32(16,16,!0),d.setUint16(20,1,!0),d.setUint16(22,1,!0),d.setUint32(24,8e3,!0),d.setUint32(28,16e3,!0),d.setUint16(32,2,!0),d.setUint16(34,16,!0),p(36,"data"),d.setUint32(40,32,!0),i.src="data:audio/wav;base64,"+btoa(String.fromCharCode(...f)),i.play().then(()=>{u.track||(i.pause(),i.removeAttribute("src"),i.load())}).catch(()=>{}),u}set(t,i,s){this.enabled=t,this.settings={...i},this.paused=s,this.apply()}apply(){var u;const t=this.ctx;if(!t||t.state==="closed")return;const i=t.currentTime,s=this.enabled&&!this.paused&&!document.hidden;this.master.gain.setTargetAtTime(s?.65:0,i,.18);for(const[f,d,p]of[[this.engine,this.settings.engine,this.settings.engineEnabled],[this.space,this.settings.space,this.settings.spaceEnabled],[this.music,this.settings.music,this.settings.musicEnabled]])f.gain.setTargetAtTime(p?d:0,i,.16);const l=ql.find(f=>f.id===this.settings.track)??ql[0];(!this.current||((u=this.current.track)==null?void 0:u.id)!==l.id)&&this.changeTrack(l),this.musicActive?(clearTimeout(this.pauseTimer),this.pauseTimer=void 0,this.current.element.paused&&!this.current.pending?this.play(this.current):!this.current.element.paused&&this.current.element.readyState>=3?this.report("playing"):this.report("loading")):(this.report("paused"),this.pauseTimer||(this.pauseTimer=setTimeout(()=>{var f;this.pauseTimer=void 0,this.musicActive||((f=this.current)==null||f.element.pause(),this.current&&(this.current.pending=!1))},1100)))}changeTrack(t){const i=this.ctx,s=i.currentTime;clearTimeout(this.fadeTimer),this.retiring&&this.release(this.retiring);const l=this.current,u=this.slots.find(f=>f!==l);this.release(u),u.track=t,u.element.src=`/cosmic-drift/audio/${t.file}`,u.gain.gain.setValueAtTime(0,s),u.gain.gain.setTargetAtTime(1,s,.3),this.current=u,this.report("loading"),l&&(l.gain.gain.cancelScheduledValues(s),l.gain.gain.setTargetAtTime(0,s,.2),this.retiring=l,this.fadeTimer=setTimeout(()=>{this.release(l),this.retiring===l&&(this.retiring=void 0)},1200))}play(t){if(t.pending||!t.track)return;t.element.error&&t.element.load();const i=++t.request;t.pending=!0,this.current===t&&this.report("loading"),t.element.play().then(()=>{t.request===i&&(t.pending=!1,this.current===t&&this.musicActive&&this.report("playing"))}).catch(s=>{t.request===i&&(t.pending=!1,!(s instanceof DOMException&&s.name==="AbortError")&&this.current===t&&this.report("error",s instanceof DOMException&&s.name==="NotAllowedError"?"Tap the selected track again to allow playback.":"This recording could not play. Select it again to retry."))})}release(t){t.request++,t.pending=!1,t.track=null,t.element.pause(),t.element.removeAttribute("src"),t.element.load(),this.ctx&&this.ctx.state!=="closed"&&(t.gain.gain.cancelScheduledValues(this.ctx.currentTime),t.gain.gain.value=0)}jump(t,i,s){if(!this.ctx||this.ctx.state==="closed"||!this.jumpGain||(s&&(t=i=0),Math.abs(t-this.lastDrive)<.01&&Math.abs(i-this.lastCharge)<.01&&!(t===0&&this.lastDrive!==0)))return;this.lastDrive=t,this.lastCharge=i;const l=this.ctx.currentTime;this.jumpGain.gain.cancelScheduledValues(l),this.jumpGain.gain.setTargetAtTime(.018*i+.055*t,l,.15),this.jumpTone.frequency.cancelScheduledValues(l),this.jumpTone.frequency.setTargetAtTime(42+i*12+t*145,l,.25),this.jumpFilter.frequency.cancelScheduledValues(l),this.jumpFilter.frequency.setTargetAtTime(250+t*1100,l,.25)}dispose(){var t;clearTimeout(this.fadeTimer),clearTimeout(this.pauseTimer),document.removeEventListener("visibilitychange",this.visibility);for(const i of this.slots)i.element.onwaiting=i.element.onplaying=i.element.onerror=null,this.release(i),i.source.disconnect(),i.gain.disconnect();this.current=this.retiring=void 0,this.slots=[],this.onMusicState=void 0,(t=this.ctx)==null||t.close().catch(()=>{}),this.ctx=null}}function l3({sound:o,paused:t,playback:i,settings:s,onToggle:l,onChange:u,onTrack:f}){const d=i.state==="error"?i.message:o?t?"Audio paused · resume the journey to listen":s.musicEnabled?s.music<=0?"Music volume is zero · raise it to listen":i.state==="playing"?"Playing your selection · recorded music":i.state==="paused"?"Music paused · select the track to continue":"Loading recording…":"Music is off · engine and space follow your settings":"Audio is off · choose a track or enable sound";return J.jsxs(J.Fragment,{children:[J.jsx("p",{children:"Your own mix of engine, space and music."}),J.jsxs("button",{className:"sound-toggle",onClick:l,children:[o?"Mute all audio":"Enable sound",o?J.jsx(jc,{size:17}):J.jsx(Rx,{size:17})]}),J.jsx("div",{className:"audio-channels",children:[{toggle:"engineEnabled",volume:"engine",name:"Engine sound",label:"Engine volume",hint:"Engine hum and Light Jump"},{toggle:"spaceEnabled",volume:"space",name:"Space ambience",label:"Space volume",hint:"A soft, atmospheric soundscape"},{toggle:"musicEnabled",volume:"music",name:"Music",label:"Music volume",hint:"Your selected relaxation track"}].map(p=>J.jsxs("div",{className:"audio-channel",children:[J.jsxs("label",{className:"check",children:[J.jsx("input",{type:"checkbox",checked:s[p.toggle],onChange:m=>u({[p.toggle]:m.target.checked})}),J.jsxs("span",{children:[p.name,J.jsx("small",{children:p.hint})]})]}),J.jsxs("label",{className:"audio-level",children:["Volume ",J.jsxs("output",{children:[Math.round(s[p.volume]*100),"%"]}),J.jsx("input",{"aria-label":p.label,type:"range",min:"0",max:"1",step:".01",disabled:!s[p.toggle],value:s[p.volume],onChange:m=>u({[p.volume]:+m.target.value})})]})]},p.volume))}),J.jsxs("fieldset",{className:"music-library",children:[J.jsx("legend",{children:"Choose your music"}),ql.map((p,m)=>J.jsxs("label",{className:`music-option ${s.track===p.id?"selected":""}`,children:[J.jsx("input",{onClick:()=>{s.track===p.id&&f(p.id)},type:"radio",name:"music-track","aria-label":p.name,checked:s.track===p.id,onChange:()=>f(p.id)}),J.jsx("span",{className:`music-art music-art-${m}`,"aria-hidden":"true",children:["✦","◌","◎","☾"][m]}),J.jsxs("span",{className:"music-description",children:[p.name,J.jsx("small",{children:p.mood}),J.jsxs("small",{children:[p.artist," · CC BY 3.0"]})]})]},p.id))]}),J.jsx("small",{className:"audio-note","data-playback-state":i.state,"aria-live":"polite",children:d}),J.jsx("small",{className:"audio-license",children:"Recorded music by Kevin MacLeod · free with attribution"}),J.jsxs("details",{className:"music-credits",children:[J.jsx("summary",{children:"Music credits & licenses"}),J.jsxs("p",{children:["All four recordings are by ",J.jsx("a",{href:"https://incompetech.com/",target:"_blank",rel:"noreferrer",children:"Kevin MacLeod"}),", used under ",J.jsx("a",{href:"https://creativecommons.org/licenses/by/3.0/",target:"_blank",rel:"noreferrer",children:"CC BY 3.0"}),"."]}),ql.map(p=>J.jsxs("a",{href:`https://incompetech.com/music/royalty-free/index.html?isrc=${p.isrc}`,target:"_blank",rel:"noreferrer",children:[p.name," ↗"]},p.id)),J.jsxs("p",{children:["Audio editions from FitVita: trimmed, faded, loudness-normalized and encoded to Opus; converted to MP3 for this site. ",J.jsx("a",{href:"https://github.com/smyrna-pergamum/fitvita",target:"_blank",rel:"noreferrer",children:"Source & credits ↗"})]})]})]})}const wx=[{name:"Autopilot",icon:Cp},{name:"Manual Flight",icon:TE},{name:"Meditation",icon:CE}];function u3(){const[o,t]=ge.useState("Autopilot"),[i,s]=ge.useState(18),[l,u]=ge.useState(!1),[f,d]=ge.useState(0),[p,m]=ge.useState(()=>matchMedia("(any-pointer: coarse)").matches?"Low":"Medium"),[v,g]=ge.useState(matchMedia("(prefers-reduced-motion: reduce)").matches),[y,x]=ge.useState(.6),[E,b]=ge.useState(!0),[M,_]=ge.useState(!1),[D,R]=ge.useState(!1),[T,L]=ge.useState(""),[z,P]=ge.useState(!1),[I,N]=ge.useState(!0),[A,F]=ge.useState(""),[Z,U]=ge.useState(!1),[Y,q]=ge.useState(1),[k,$]=ge.useState(.7),[Q,gt]=ge.useState(!1),[St,At]=ge.useState(!1),[qt,Ot]=ge.useState("Balanced"),[G,ft]=ge.useState(.28),[j,et]=ge.useState(!1),[xt,Ct]=ge.useState(!0),[wt,Mt]=ge.useState("idle"),[Lt,H]=ge.useState(7123),[bt,yt]=ge.useState(0),[ht,vt]=ge.useState({current:"Perseus Anchorage",next:"Deep-space systems",distance:0}),[Rt,Nt]=ge.useState({state:"idle",track:null}),[It,re]=ge.useState(()=>{try{return r3(localStorage.getItem(Ax))}catch{return{...jm}}}),oe=ge.useRef(new TS),B=ge.useRef(()=>{}),w=wt!=="idle",rt=ge.useRef(null),dt=ge.useRef(new BR),Ut=ge.useRef(null),_t=ge.useRef(new o3),Zt=ge.useRef({mode:o,speed:i,paused:l,region:f,quality:p,reduced:v,motion:y,cockpit:E,started:M,blocked:!!T||w,sensitivity:Y,touchSensitivity:k,invertMouseX:Q,invertMouseY:St,lighting:qt,bloom:G,performanceMode:j,adaptive:xt,worldSeed:Lt});Zt.current={mode:o,speed:i,paused:l,region:f,quality:p,reduced:v,motion:y,cockpit:E,started:M,blocked:!!T||w,sensitivity:Y,touchSensitivity:k,invertMouseX:Q,invertMouseY:St,lighting:qt,bloom:G,performanceMode:j,adaptive:xt,worldSeed:Lt},ge.useEffect(()=>{try{return s3(Ut.current,()=>Zt.current,dt.current,rt.current,{onNavigation:vt,jump:oe.current,onPhase:Mt,onDestination:(ut,se)=>{d(ut),H(se)},onAudio:(ut,se,W)=>_t.current.jump(ut,se,W)})}catch{F("WebGL could not start. Please enable hardware acceleration and reload.")}},[]),ge.useEffect(()=>(_t.current.onMusicState=Nt,()=>_t.current.dispose()),[]),ge.useEffect(()=>{const ut=setInterval(()=>yt(dt.current.speed),200);return()=>clearInterval(ut)},[]),ge.useEffect(()=>{_t.current.set(z,It,l)},[z,It,l]),ge.useEffect(()=>{try{localStorage.setItem(Ax,JSON.stringify(It))}catch{}},[It]),ge.useEffect(()=>{const ut=setInterval(()=>{I&&M&&!l&&!oe.current.busy&&d(se=>(se+1)%5)},9e4);return()=>clearInterval(ut)},[I,M,l]),ge.useEffect(()=>{const ut=W=>{W.target instanceof HTMLElement&&W.target.closest('input,select,textarea,[contenteditable="true"]')||(W.code==="KeyJ"&&!W.repeat&&!W.ctrlKey&&!W.metaKey&&!W.altKey&&(W.preventDefault(),B.current()),W.code==="KeyR"&&dt.current.centerLook(),W.key.toLowerCase()==="h"&&R(Bt=>!Bt),W.code==="Space"&&!(W.target instanceof HTMLElement&&W.target.closest("button,a"))&&(W.preventDefault(),u(Bt=>!Bt)),W.key==="Escape"&&(R(!1),L("")))},se=()=>U(!!document.fullscreenElement);return window.addEventListener("keydown",ut),document.addEventListener("fullscreenchange",se),()=>{window.removeEventListener("keydown",ut),document.removeEventListener("fullscreenchange",se)}},[]);const Gt=async()=>{try{await _t.current.start(),P(ut=>!ut)}catch{F("Audio is unavailable in this browser. The journey can continue silently.")}},Jt=async ut=>{try{await _t.current.start(ut),re(se=>({...se,track:ut,musicEnabled:!0})),P(!0)}catch{F("Audio is unavailable in this browser. The journey can continue silently.")}},te=()=>{_(!0),u(!1)},Pt=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{F("Fullscreen is unavailable in this browser.")}},Yt=ut=>{oe.current.busy||(t(ut),_(!0))},he=()=>{oe.current.start(f,Lt,l)&&(_(!0),L(""),Mt("charging"))};B.current=he;const ie=l&&w?"Jump paused":wt==="charging"?"Charging drive…":wt==="accelerating"?"Accelerating…":wt==="transit"?"Crossing the light…":wt==="arriving"?`Entering ${Na[oe.current.destination].name}…`:wt==="stabilized"?`Arrived: ${Na[oe.current.destination].name}`:"";return J.jsxs("main",{"data-jump-phase":wt,"data-world-seed":Lt,className:`${D?"hidden-ui":""} ${M?"journey-started":""} ${o==="Meditation"?"meditation":""} ${o==="Manual Flight"?"manual-flight":""} ${T||l||w?"controls-blocked":""} ${w?"jump-active":""}`,children:[J.jsx("div",{className:"universe",ref:Ut}),J.jsx("div",{className:"vignette"}),J.jsxs("div",{className:"touch-controls ui",children:[J.jsxs("div",{ref:rt,className:"touch-joystick",role:"group","aria-label":"Touch flight joystick",children:[J.jsx("span",{className:"stick-cross",children:"+"}),J.jsx("span",{className:"stick-thumb"}),J.jsx("small",{children:"STEER"})]}),J.jsx("span",{className:"touch-look-hint",children:"DRAG SPACE TO LOOK"})]}),J.jsxs("header",{className:"ui",children:[J.jsxs("a",{className:"brand",href:"#",onClick:ut=>{ut.preventDefault(),R(!1)},children:[J.jsx(bE,{size:32}),J.jsxs("span",{children:["COSMIC DRIFT",J.jsx("small",{children:"A QUIETER KIND OF JOURNEY"})]})]}),J.jsxs("nav",{children:[J.jsx("span",{className:"live-dot"})," ALL SYSTEMS AT PEACE ",J.jsx("span",{className:"nav-line"}),J.jsx("button",{title:"Audio settings",onClick:()=>L(T==="audio"?"":"audio"),children:J.jsx(jc,{size:18})}),J.jsx("button",{title:"Settings",onClick:()=>L(T==="settings"?"":"settings"),children:J.jsx(jd,{size:18})}),J.jsx("button",{title:"Fullscreen",onClick:Pt,children:J.jsx(uy,{size:18})})]})]}),J.jsxs("section",{className:"intro ui",children:[J.jsxs("div",{className:"eyebrow",children:[J.jsx("span",{})," LEAVE THE NOISE BEHIND"]}),J.jsxs("h1",{children:["Nowhere to be.",J.jsx("br",{}),"Just ",J.jsx("em",{children:"drift."})]}),J.jsxs("p",{children:["A quiet passage through an infinite universe.",J.jsx("br",{}),"No destination. No demands. Just you and the stars."]}),J.jsxs("button",{className:"start",onClick:te,children:[M?l?"Resume journey":"Journey in progress":"Start journey",J.jsx(EE,{size:18})]}),J.jsxs("div",{className:"intro-note",children:[J.jsx("span",{})," ",M?"TAKE YOUR TIME. YOU HAVE ALL OF IT.":"YOUR OWN LITTLE CORNER OF INFINITY"]})]}),J.jsxs("aside",{className:"region-label ui",children:[J.jsx("span",{className:"coordinate",children:ht.current}),J.jsx("div",{className:"region-rule"}),J.jsx("span",{className:"eyebrow",children:"YOU ARE DRIFTING THROUGH"}),J.jsx("h2",{children:Na[f].name}),J.jsx("p",{children:Na[f].subtitle}),J.jsxs("p",{className:"destination-line",children:["Next: ",ht.next," · ",ht.distance.toLocaleString()," u"]}),J.jsxs("button",{disabled:w,onClick:()=>L(T==="regions"?"":"regions"),children:["Explore regions ",J.jsx(qd,{size:14})]})]}),J.jsxs("div",{className:"travel-marker ui",children:[J.jsx("span",{children:"✧"}),J.jsx("i",{}),J.jsx("small",{children:"AN INFINITE UNIVERSE. AN UNHURRIED YOU."})]}),J.jsxs("section",{className:"flight-deck ui",children:[J.jsxs("div",{className:"deck-top",children:[J.jsxs("div",{className:"deck-label",children:[J.jsx("span",{className:"live-dot"}),l?"JOURNEY PAUSED":M?"JOURNEY ACTIVE":"READY WHEN YOU ARE"]}),J.jsxs("div",{className:"jump-tools",children:[J.jsx("span",{className:"jump-status",role:"status","aria-live":"polite",children:ie}),J.jsx("span",{className:"ship-name",children:"AETHER–01"}),J.jsxs("button",{className:"jump-button",disabled:w||l,onClick:he,"aria-keyshortcuts":"J",children:[J.jsx(RE,{size:14}),"Light Jump",J.jsx("kbd",{children:"J"})]})]})]}),J.jsxs("div",{className:"deck-controls",children:[J.jsx("div",{className:"mode-controls",children:wx.map(ut=>J.jsxs("button",{disabled:w,className:o===ut.name?"selected":"",onClick:()=>Yt(ut.name),children:[J.jsx(ut.icon,{size:17}),J.jsxs("span",{children:[ut.name,ut.name==="Meditation"?" mode":""]})]},ut.name))}),J.jsxs("div",{className:"speed",children:[J.jsxs("label",{htmlFor:"speed",children:["CRUISE SPEED ",J.jsxs("span",{children:[bt.toFixed(0)," ",J.jsx("small",{title:"Game units per second",children:"u/s"})]})]}),J.jsx("input",{id:"speed",disabled:w,type:"range",min:"0",max:"1200",value:i,onChange:ut=>s(+ut.target.value)}),J.jsxs("div",{children:[J.jsx("span",{children:"0 · BRAKE"}),J.jsx("span",{children:"INTERSTELLAR"})]})]}),J.jsxs("div",{className:"deck-actions",children:[J.jsx("button",{title:l?"Resume":"Pause",onClick:()=>u(ut=>!ut),children:l?J.jsx(wE,{size:19}):J.jsx(AE,{size:19})}),J.jsx("button",{className:"desktop-deck-action",title:z?"Mute audio":"Enable audio",onClick:Gt,children:z?J.jsx(jc,{size:19}):J.jsx(Rx,{size:19})}),J.jsx("button",{className:"desktop-deck-action",title:"Hide interface (H)",onClick:()=>R(!0),children:J.jsx(Yd,{size:19})}),J.jsxs("button",{className:"mobile-controls-toggle mobile-only","aria-label":T?"Close controls":"Open controls",title:T?"Close controls":"Open controls","aria-expanded":!!T,"aria-controls":"flight-panel",onClick:()=>L(T?"":"controls"),children:[J.jsx(jd,{size:18}),J.jsx("span",{children:T?"Close":"Controls"})]})]})]})]}),J.jsxs("footer",{className:"ui",children:[J.jsxs("span",{children:[J.jsx("span",{className:"key",children:"DRAG"})," TO LOOK 360° · R TO CENTER ",J.jsx("i",{})," ",J.jsx("span",{className:"key",children:o==="Manual Flight"?"W A S D":"H"})," ",o==="Manual Flight"?"TO STEER":"TO HIDE INTERFACE"]}),J.jsxs("span",{children:["BUILT FOR WANDERING ",J.jsx("span",{className:"tiny-star",children:"✦"})]})]}),D&&J.jsxs("button",{className:"restore",onClick:()=>R(!1),children:[J.jsx(Yd,{size:16})," Show controls · H"]}),T&&J.jsx("button",{className:"mobile-panel-scrim mobile-only ui","aria-label":"Close controls overlay",onClick:()=>L("")}),T&&J.jsxs("div",{id:"flight-panel",className:"panel ui",role:"region","aria-label":T==="controls"?"Flight controls":T==="audio"?"Sound settings":T==="regions"?"Region settings":"Flight settings",children:[J.jsxs("div",{className:"panel-head",children:[T!=="controls"&&J.jsx("button",{className:"mobile-only mobile-panel-back",title:"Back to controls",onClick:()=>L("controls"),children:J.jsx(qd,{size:18})}),J.jsx("span",{children:T==="controls"?"Flight controls":T==="regions"?"Choose your horizon":T==="audio"?"The sound of stillness":"Make space your own"}),J.jsx("button",{title:"Close settings",onClick:()=>L(""),children:J.jsx(cy,{size:19})})]}),T==="controls"?J.jsxs("div",{className:"mobile-controls-content",children:[J.jsxs("div",{className:"system-route",children:[J.jsx("strong",{children:ht.current}),J.jsxs("span",{children:["Next: ",ht.next," · ",ht.distance.toLocaleString()," u"]})]}),J.jsx("span",{className:"mobile-section-label",children:"FLIGHT MODE"}),J.jsx("div",{className:"mobile-mode-controls",children:wx.map(ut=>J.jsxs("button",{className:o===ut.name?"selected":"","aria-pressed":o===ut.name,disabled:w,onClick:()=>{Yt(ut.name),L("")},children:[J.jsx(ut.icon,{size:18}),J.jsxs("span",{children:[ut.name,ut.name==="Meditation"?" mode":""]})]},ut.name))}),J.jsxs("div",{className:"mobile-control-links",children:[J.jsxs("button",{onClick:()=>L("audio"),children:[J.jsx(jc,{size:19}),J.jsx("span",{children:"Music & sound"})]}),J.jsxs("button",{onClick:()=>L("settings"),children:[J.jsx(jd,{size:19}),J.jsx("span",{children:"Graphics & controls"})]}),J.jsxs("button",{disabled:w,onClick:()=>L("regions"),children:[J.jsx(Cp,{size:19}),J.jsx("span",{children:"Regions"})]})]}),J.jsxs("div",{className:"mobile-control-tools",children:[J.jsxs("button",{onClick:()=>{dt.current.centerLook(),L("")},children:[J.jsx(Yd,{size:16})," Center view"]}),J.jsx("button",{onClick:()=>{L(""),R(!0)},children:"Hide interface"})]})]}):T==="regions"?J.jsxs(J.Fragment,{children:[J.jsx("p",{children:"Every corner of the universe has a different kind of quiet."}),Na.map((ut,se)=>J.jsxs("button",{disabled:w,className:`region-option ${f===se?"active":""}`,onClick:()=>d(se),children:[J.jsx("span",{className:"orb",style:{background:`radial-gradient(circle at 30% 30%,${ut.color},${ut.second},#070a12)`}}),J.jsxs("span",{children:[ut.name,J.jsx("small",{children:ut.subtitle})]}),f===se?"●":J.jsx(qd,{size:15})]},ut.name)),J.jsxs("label",{className:"check",children:[J.jsx("input",{type:"checkbox",checked:I,onChange:ut=>N(ut.target.checked)})," Automatically drift between regions · 90s"]})]}):T==="audio"?J.jsx(l3,{sound:z,paused:l,playback:Rt,settings:It,onToggle:Gt,onTrack:Jt,onChange:ut=>re(se=>({...se,...ut}))}):J.jsxs(J.Fragment,{children:[J.jsx("p",{className:"setting-note",children:"Speed is shown in game units per second. Distances are scaled for relaxed exploration."}),J.jsxs("label",{className:"setting",children:["Graphics quality",J.jsx("select",{"aria-label":"Graphics quality",value:p,onChange:ut=>m(ut.target.value),children:["Low","Medium","High"].map(ut=>J.jsx("option",{children:ut},ut))})]}),J.jsxs("label",{className:"check",children:[J.jsx("input",{type:"checkbox",checked:j,onChange:ut=>et(ut.target.checked)})," Performance mode"]}),J.jsxs("label",{className:"check",children:[J.jsx("input",{type:"checkbox",checked:xt,onChange:ut=>Ct(ut.target.checked)})," Adaptive resolution"]}),J.jsx("small",{className:"setting-note",children:"Performance mode prioritizes smooth flight. Adaptive resolution adjusts image detail when rendering is slow."}),J.jsxs("label",{className:"setting",children:["Environment lighting",J.jsx("select",{"aria-label":"Environment lighting",value:qt,onChange:ut=>Ot(ut.target.value),children:["Dark","Balanced","Cinematic"].map(ut=>J.jsx("option",{children:ut},ut))})]}),J.jsxs("label",{className:"setting",children:["Soft bloom ",J.jsxs("output",{children:[Math.round(G*100),"%"]}),J.jsx("input",{"aria-label":"Soft bloom",type:"range",min:"0",max:".6",step:".02",value:G,onChange:ut=>ft(+ut.target.value)}),J.jsx("small",{className:"setting-note",children:"Low / Medium use lightweight star halos; High can add post-processing bloom."})]}),J.jsxs("label",{className:"setting",children:["Steering / mouse sensitivity ",J.jsxs("output",{children:[Y.toFixed(2),"×"]}),J.jsx("input",{"aria-label":"Steering and mouse sensitivity",type:"range",min:".25",max:"2",step:".05",value:Y,onChange:ut=>q(+ut.target.value)})]}),J.jsxs("label",{className:"setting",children:["Touch sensitivity ",J.jsxs("output",{children:[k.toFixed(2),"×"]}),J.jsx("input",{"aria-label":"Touch sensitivity",type:"range",min:".25",max:"1.5",step:".05",value:k,onChange:ut=>$(+ut.target.value)})]}),J.jsxs("label",{className:"check",children:[J.jsx("input",{type:"checkbox",checked:Q,onChange:ut=>gt(ut.target.checked)})," Invert mouse horizontal axis"]}),J.jsxs("label",{className:"check",children:[J.jsx("input",{type:"checkbox",checked:St,onChange:ut=>At(ut.target.checked)})," Invert mouse vertical axis"]}),J.jsxs("label",{className:"setting",children:["Camera movement",J.jsx("input",{"aria-label":"Camera movement",type:"range",min:"0",max:"1",step:".05",value:y,onChange:ut=>x(+ut.target.value)})]}),J.jsxs("label",{className:"check",children:[J.jsx("input",{type:"checkbox",checked:v,onChange:ut=>g(ut.target.checked)})," Reduced motion"]}),J.jsxs("button",{className:"sound-toggle",onClick:()=>dt.current.centerLook(),children:["Center view · R",J.jsx(Cp,{size:16})]}),J.jsxs("label",{className:"check",children:[J.jsx("input",{type:"checkbox",checked:E,onChange:ut=>b(ut.target.checked)})," Show cockpit"]}),J.jsxs("button",{className:"sound-toggle",onClick:Pt,children:[Z?"Exit fullscreen":"Enter fullscreen",J.jsx(uy,{size:16})]})]})]}),A&&J.jsxs("div",{role:"alert",className:"error",children:[A,J.jsx("button",{onClick:()=>F(""),"aria-label":"Dismiss error",children:J.jsx(cy,{size:16})})]})]})}yE.createRoot(document.getElementById("root")).render(J.jsx(u3,{}));
