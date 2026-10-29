var xM=Object.defineProperty;var yM=(o,e,i)=>e in o?xM(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var Je=(o,e,i)=>yM(o,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=i(u);fetch(u.href,f)}})();var $h={exports:{}},il={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k0;function MM(){if(k0)return il;k0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,u,f){var h=null;if(f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),"key"in u){f={};for(var d in u)d!=="key"&&(f[d]=u[d])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:h,ref:u!==void 0?u:null,props:f}}return il.Fragment=e,il.jsx=i,il.jsxs=i,il}var Y0;function EM(){return Y0||(Y0=1,$h.exports=MM()),$h.exports}var ft=EM(),td={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0;function TM(){if(q0)return le;q0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),M=Symbol.iterator;function b(I){return I===null||typeof I!="object"?null:(I=M&&I[M]||I["@@iterator"],typeof I=="function"?I:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function L(I,ct,Q){this.props=I,this.context=ct,this.refs=m,this.updater=Q||R}L.prototype.isReactComponent={},L.prototype.setState=function(I,ct){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ct,"setState")},L.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function O(){}O.prototype=L.prototype;function w(I,ct,Q){this.props=I,this.context=ct,this.refs=m,this.updater=Q||R}var F=w.prototype=new O;F.constructor=w,y(F,L.prototype),F.isPureReactComponent=!0;var B=Array.isArray;function z(){}var Y={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function C(I,ct,Q){var et=Q.ref;return{$$typeof:o,type:I,key:ct,ref:et!==void 0?et:null,props:Q}}function X(I,ct){return C(I.type,ct,I.props)}function nt(I){return typeof I=="object"&&I!==null&&I.$$typeof===o}function ut(I){var ct={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Q){return ct[Q]})}var _t=/\/+/g;function lt(I,ct){return typeof I=="object"&&I!==null&&I.key!=null?ut(""+I.key):ct.toString(36)}function q(I){switch(I.status){case"fulfilled":return I.value;case"rejected":throw I.reason;default:switch(typeof I.status=="string"?I.then(z,z):(I.status="pending",I.then(function(ct){I.status==="pending"&&(I.status="fulfilled",I.value=ct)},function(ct){I.status==="pending"&&(I.status="rejected",I.reason=ct)})),I.status){case"fulfilled":return I.value;case"rejected":throw I.reason}}throw I}function at(I,ct,Q,et,Mt){var Lt=typeof I;(Lt==="undefined"||Lt==="boolean")&&(I=null);var Rt=!1;if(I===null)Rt=!0;else switch(Lt){case"bigint":case"string":case"number":Rt=!0;break;case"object":switch(I.$$typeof){case o:case e:Rt=!0;break;case S:return Rt=I._init,at(Rt(I._payload),ct,Q,et,Mt)}}if(Rt)return Mt=Mt(I),Rt=et===""?"."+lt(I,0):et,B(Mt)?(Q="",Rt!=null&&(Q=Rt.replace(_t,"$&/")+"/"),at(Mt,ct,Q,"",function(P){return P})):Mt!=null&&(nt(Mt)&&(Mt=X(Mt,Q+(Mt.key==null||I&&I.key===Mt.key?"":(""+Mt.key).replace(_t,"$&/")+"/")+Rt)),ct.push(Mt)),1;Rt=0;var Et=et===""?".":et+":";if(B(I))for(var Yt=0;Yt<I.length;Yt++)et=I[Yt],Lt=Et+lt(et,Yt),Rt+=at(et,ct,Q,Lt,Mt);else if(Yt=b(I),typeof Yt=="function")for(I=Yt.call(I),Yt=0;!(et=I.next()).done;)et=et.value,Lt=Et+lt(et,Yt++),Rt+=at(et,ct,Q,Lt,Mt);else if(Lt==="object"){if(typeof I.then=="function")return at(q(I),ct,Q,et,Mt);throw ct=String(I),Error("Objects are not valid as a React child (found: "+(ct==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ct)+"). If you meant to render a collection of children, use an array instead.")}return Rt}function G(I,ct,Q){if(I==null)return I;var et=[],Mt=0;return at(I,et,"","",function(Lt){return ct.call(Q,Lt,Mt++)}),et}function gt(I){if(I._status===-1){var ct=I._result,Q=ct();Q.then(function(et){(I._status===0||I._status===-1)&&(I._status=1,I._result=et,Q.status===void 0&&(Q.status="fulfilled",Q.value=et))},function(et){(I._status===0||I._status===-1)&&(I._status=2,I._result=et,Q.status===void 0&&(Q.status="rejected",Q.reason=et))}),I._status===-1&&(I._status=0,I._result=Q)}if(I._status===1)return I._result.default;throw I._result}var vt=typeof reportError=="function"?reportError:function(I){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ct=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof I=="object"&&I!==null&&typeof I.message=="string"?String(I.message):String(I),error:I});if(!window.dispatchEvent(ct))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",I);return}console.error(I)};function Ft(I){var ct=Y.T,Q={};Q.types=ct!==null?ct.types:null,Y.T=Q;try{var et=I(),Mt=Y.S;Mt!==null&&Mt(Q,et),typeof et=="object"&&et!==null&&typeof et.then=="function"&&et.then(z,vt)}catch(Lt){vt(Lt)}finally{ct!==null&&Q.types!==null&&(ct.types=Q.types),Y.T=ct}}function ae(I){var ct=Y.T;if(ct!==null){var Q=ct.types;Q===null?ct.types=[I]:Q.indexOf(I)===-1&&Q.push(I)}else Ft(ae.bind(null,I))}var _e={map:G,forEach:function(I,ct,Q){G(I,function(){ct.apply(this,arguments)},Q)},count:function(I){var ct=0;return G(I,function(){ct++}),ct},toArray:function(I){return G(I,function(ct){return ct})||[]},only:function(I){if(!nt(I))throw Error("React.Children.only expected to receive a single React element child.");return I}};return le.Activity=p,le.Children=_e,le.Component=L,le.Fragment=i,le.Profiler=u,le.PureComponent=w,le.StrictMode=s,le.Suspense=v,le.ViewTransition=x,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Y,le.__COMPILER_RUNTIME={__proto__:null,c:function(I){return Y.H.useMemoCache(I)}},le.addTransitionType=ae,le.cache=function(I){return function(){return I.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(I,ct,Q){if(I==null)throw Error("The argument must be a React element, but you passed "+I+".");var et=y({},I.props),Mt=I.key;if(ct!=null)for(Lt in ct.key!==void 0&&(Mt=""+ct.key),ct)!D.call(ct,Lt)||Lt==="key"||Lt==="__self"||Lt==="__source"||Lt==="ref"&&ct.ref===void 0||(et[Lt]=ct[Lt]);var Lt=arguments.length-2;if(Lt===1)et.children=Q;else if(1<Lt){for(var Rt=Array(Lt),Et=0;Et<Lt;Et++)Rt[Et]=arguments[Et+2];et.children=Rt}return C(I.type,Mt,et)},le.createContext=function(I){return I={$$typeof:h,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null},I.Provider=I,I.Consumer={$$typeof:f,_context:I},I},le.createElement=function(I,ct,Q){var et,Mt={},Lt=null;if(ct!=null)for(et in ct.key!==void 0&&(Lt=""+ct.key),ct)D.call(ct,et)&&et!=="key"&&et!=="__self"&&et!=="__source"&&(Mt[et]=ct[et]);var Rt=arguments.length-2;if(Rt===1)Mt.children=Q;else if(1<Rt){for(var Et=Array(Rt),Yt=0;Yt<Rt;Yt++)Et[Yt]=arguments[Yt+2];Mt.children=Et}if(I&&I.defaultProps)for(et in Rt=I.defaultProps,Rt)Mt[et]===void 0&&(Mt[et]=Rt[et]);return C(I,Lt,Mt)},le.createRef=function(){return{current:null}},le.forwardRef=function(I){return{$$typeof:d,render:I}},le.isValidElement=nt,le.lazy=function(I){return{$$typeof:S,_payload:{_status:-1,_result:I},_init:gt}},le.memo=function(I,ct){return{$$typeof:g,type:I,compare:ct===void 0?null:ct}},le.startTransition=Ft,le.unstable_useCacheRefresh=function(){return Y.H.useCacheRefresh()},le.use=function(I){return Y.H.use(I)},le.useActionState=function(I,ct,Q){return Y.H.useActionState(I,ct,Q)},le.useCallback=function(I,ct){return Y.H.useCallback(I,ct)},le.useContext=function(I){return Y.H.useContext(I)},le.useDebugValue=function(){},le.useDeferredValue=function(I,ct){return Y.H.useDeferredValue(I,ct)},le.useEffect=function(I,ct){return Y.H.useEffect(I,ct)},le.useEffectEvent=function(I){return Y.H.useEffectEvent(I)},le.useId=function(){return Y.H.useId()},le.useImperativeHandle=function(I,ct,Q){return Y.H.useImperativeHandle(I,ct,Q)},le.useInsertionEffect=function(I,ct){return Y.H.useInsertionEffect(I,ct)},le.useLayoutEffect=function(I,ct){return Y.H.useLayoutEffect(I,ct)},le.useMemo=function(I,ct){return Y.H.useMemo(I,ct)},le.useOptimistic=function(I,ct){return Y.H.useOptimistic(I,ct)},le.useReducer=function(I,ct,Q){return Y.H.useReducer(I,ct,Q)},le.useRef=function(I){return Y.H.useRef(I)},le.useState=function(I){return Y.H.useState(I)},le.useSyncExternalStore=function(I,ct,Q){return Y.H.useSyncExternalStore(I,ct,Q)},le.useTransition=function(){return Y.H.useTransition()},le.version="19.3.1",le}var W0;function bp(){return W0||(W0=1,td.exports=TM()),td.exports}var Ae=bp(),ed={exports:{}},al={},nd={exports:{}},id={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j0;function bM(){return j0||(j0=1,(function(o){function e(q,at){var G=q.length;q.push(at);t:for(;0<G;){var gt=G-1>>>1,vt=q[gt];if(0<u(vt,at))q[gt]=at,q[G]=vt,G=gt;else break t}}function i(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var at=q[0],G=q.pop();if(G!==at){q[0]=G;t:for(var gt=0,vt=q.length,Ft=vt>>>1;gt<Ft;){var ae=2*(gt+1)-1,_e=q[ae],I=ae+1,ct=q[I];if(0>u(_e,G))I<vt&&0>u(ct,_e)?(q[gt]=ct,q[I]=G,gt=I):(q[gt]=_e,q[ae]=G,gt=ae);else if(I<vt&&0>u(ct,G))q[gt]=ct,q[I]=G,gt=I;else break t}}return at}function u(q,at){var G=q.sortIndex-at.sortIndex;return G!==0?G:q.id-at.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var v=[],g=[],S=1,p=null,x=3,M=!1,b=!1,R=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function w(q){for(var at=i(g);at!==null;){if(at.callback===null)s(g);else if(at.startTime<=q)s(g),at.sortIndex=at.expirationTime,e(v,at);else break;at=i(g)}}function F(q){if(R=!1,w(q),!b)if(i(v)!==null)b=!0,B||(B=!0,nt());else{var at=i(g);at!==null&&lt(F,at.startTime-q)}}var B=!1,z=-1,Y=5,D=-1;function C(){return y?!0:!(o.unstable_now()-D<Y)}function X(){if(y=!1,B){var q=o.unstable_now();D=q;var at=!0;try{t:{b=!1,R&&(R=!1,L(z),z=-1),M=!0;var G=x;try{e:{for(w(q),p=i(v);p!==null&&!(p.expirationTime>q&&C());){var gt=p.callback;if(typeof gt=="function"){p.callback=null,x=p.priorityLevel;var vt=gt(p.expirationTime<=q);if(q=o.unstable_now(),typeof vt=="function"){p.callback=vt,w(q),at=!0;break e}p===i(v)&&s(v),w(q)}else s(v);p=i(v)}if(p!==null)at=!0;else{var Ft=i(g);Ft!==null&&lt(F,Ft.startTime-q),at=!1}}break t}finally{p=null,x=G,M=!1}at=void 0}}finally{at?nt():B=!1}}}var nt;if(typeof O=="function")nt=function(){O(X)};else if(typeof MessageChannel<"u"){var ut=new MessageChannel,_t=ut.port2;ut.port1.onmessage=X,nt=function(){_t.postMessage(null)}}else nt=function(){m(X,0)};function lt(q,at){z=m(function(){q(o.unstable_now())},at)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(q){switch(x){case 1:case 2:case 3:var at=3;break;default:at=x}var G=x;x=at;try{return q()}finally{x=G}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(q,at){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var G=x;x=q;try{return at()}finally{x=G}},o.unstable_scheduleCallback=function(q,at,G){var gt=o.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?gt+G:gt):G=gt,q){case 1:var vt=-1;break;case 2:vt=250;break;case 5:vt=1073741823;break;case 4:vt=1e4;break;default:vt=5e3}return vt=G+vt,q={id:S++,callback:at,priorityLevel:q,startTime:G,expirationTime:vt,sortIndex:-1},G>gt?(q.sortIndex=G,e(g,q),i(v)===null&&q===i(g)&&(R?(L(z),z=-1):R=!0,lt(F,G-gt))):(q.sortIndex=vt,e(v,q),b||M||(b=!0,B||(B=!0,nt()))),q},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(q){var at=x;return function(){var G=x;x=at;try{return q.apply(this,arguments)}finally{x=G}}}})(id)),id}var Z0;function AM(){return Z0||(Z0=1,nd.exports=bM()),nd.exports}var ad={exports:{}},Dn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var K0;function RM(){if(K0)return Dn;K0=1;var o=bp();function e(S){var p="https://react.dev/errors/"+S;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+S+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(S,p,x){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:M==null?null:M===h?h:""+M,children:S,containerInfo:p,implementation:x}}var v=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(S,p){if(S==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Dn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Dn.browser=function(S){return{$$typeof:f,_reason:S}},Dn.createPortal=function(S,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return d(S,p,null,x)},Dn.flushSync=function(S){var p=v.T,x=s.p;try{if(v.T=null,s.p=2,S)return S()}finally{v.T=p,s.p=x,s.d.f()}},Dn.preconnect=function(S,p){typeof S=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(S,p))},Dn.prefetchDNS=function(S){typeof S=="string"&&s.d.D(S)},Dn.preinit=function(S,p){if(typeof S=="string"&&p&&typeof p.as=="string"){var x=p.as,M=g(x,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,R=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(S,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:M,integrity:b,fetchPriority:R}):x==="script"&&s.d.X(S,{crossOrigin:M,integrity:b,fetchPriority:R,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Dn.preinitModule=function(S,p){if(typeof S=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=g(p.as,p.crossOrigin);s.d.M(S,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}}else p==null&&s.d.M(S)},Dn.preload=function(S,p){if(typeof S=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,M=g(x,p.crossOrigin);s.d.L(S,x,{crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Dn.preloadModule=function(S,p){if(typeof S=="string")if(p){var x=g(p.as,p.crossOrigin);s.d.m(S,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}else s.d.m(S)},Dn.requestFormReset=function(S){s.d.r(S)},Dn.unstable_batchedUpdates=function(S,p){return S(p)},Dn.useFormState=function(S,p,x){return v.H.useFormState(S,p,x)},Dn.useFormStatus=function(){return v.H.useHostTransitionStatus()},Dn.version="19.3.1",Dn}var Q0;function CM(){if(Q0)return ad.exports;Q0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ad.exports=RM(),ad.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function wM(){if(J0)return al;J0=1;var o=AM(),e=bp(),i=CM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function v(t){if(f(t)!==t)throw Error(s(188))}function g(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var l=a.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){a=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===a)return v(l),t;if(c===r)return v(l),n;c=c.sibling}throw Error(s(188))}if(a.return!==r.return)a=l,r=c;else{for(var _=!1,E=l.child;E;){if(E===a){_=!0,a=l,r=c;break}if(E===r){_=!0,r=l,a=c;break}E=E.sibling}if(!_){for(E=c.child;E;){if(E===a){_=!0,a=c,r=l;break}if(E===r){_=!0,r=c,a=l;break}E=E.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function S(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=S(t),n!==null)return n;t=t.sibling}return null}function p(t,n,a,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&p(t.child,n,a,r,l,c))return!0;t=t.sibling}return!1}function x(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function b(t){var n=[null,null],a=x(t);return a===null||R(n,t,a.child,{foundSelf:!1}),n}function R(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&R(t,n,a.child,r))return!0;a=a.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var m=null,L=null;function O(t,n,a){return t===a?!0:t===n?(m=t,!0):!1}function w(t,n,a){return t===a?(L=t,!1):t===n?(L!==null&&(m=t),!0):!1}function F(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function B(t,n,a){for(var r=0,l=t;l;l=a(l))r++;l=0;for(var c=n;c;c=a(c))l++;for(;0<r-l;)t=a(t),r--;for(;0<l-r;)n=a(n),l--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var z=Object.assign,Y=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),C=Symbol.for("react.portal"),X=Symbol.for("react.fragment"),nt=Symbol.for("react.strict_mode"),ut=Symbol.for("react.profiler"),_t=Symbol.for("react.consumer"),lt=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),at=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),gt=Symbol.for("react.memo"),vt=Symbol.for("react.lazy"),Ft=Symbol.for("react.activity"),ae=Symbol.for("react.legacy_hidden"),_e=Symbol.for("react.memo_cache_sentinel"),I=Symbol.for("react.view_transition"),ct=Symbol.for("react.recoverable"),Q=Symbol.iterator;function et(t){return t===null||typeof t!="object"?null:(t=Q&&t[Q]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Symbol.for("react.client.reference");function Lt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Mt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case X:return"Fragment";case ut:return"Profiler";case nt:return"StrictMode";case at:return"Suspense";case G:return"SuspenseList";case Ft:return"Activity";case I:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case C:return"Portal";case lt:return t.displayName||"Context";case _t:return(t._context.displayName||"Context")+".Consumer";case q:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case gt:return n=t.displayName||null,n!==null?n:Lt(t.type)||"Memo";case vt:n=t._payload,t=t._init;try{return Lt(t(n))}catch{}}return null}var Rt=Array.isArray,Et=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Yt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,P={pending:!1,data:null,method:null,action:null},Pe=[],xt=-1;function Xt(t){return{current:t}}function wt(t){0>xt||(t.current=Pe[xt],Pe[xt]=null,xt--)}function ne(t,n){xt++,Pe[xt]=t.current,t.current=n}var Gt=Xt(null),oe=Xt(null),Ye=Xt(null),We=Xt(null);function U(t,n){switch(ne(Ye,n),ne(oe,t),ne(Gt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?$_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=$_(n),t=t0(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}wt(Gt),ne(Gt,t)}function T(){wt(Gt),wt(oe),wt(Ye)}function tt(t){var n=t.memoizedState;n!==null&&(Os._currentValue=n.memoizedState,ne(We,t)),n=Gt.current;var a=t0(n,t.type);n!==a&&(ne(oe,t),ne(Gt,a))}function pt(t){oe.current===t&&(wt(Gt),wt(oe)),We.current===t&&(wt(We),Os._currentValue=P)}var yt,ht;function qt(t){if(yt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);yt=n&&n[1]||"",ht=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yt+t+ht}var Dt=!1;function Kt(t,n){if(!t||Dt)return"";Dt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(Ot){var k=Ot}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(Ot){k=Ot}mt=!1;try{var $=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),mt=!0,new t}finally{mt&&($!==void 0?Object.defineProperty(t.prototype,"props",$):delete t.prototype.props)}}}else{try{throw Error()}catch(Ot){k=Ot}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(Ot){if(Ot&&k&&typeof Ot.stack=="string")return[Ot.stack,k.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),_=c[0],E=c[1];if(_&&E){var N=_.split(`
`),j=E.split(`
`);for(l=r=0;r<N.length&&!N[r].includes("DetermineComponentFrameRoot");)r++;for(;l<j.length&&!j[l].includes("DetermineComponentFrameRoot");)l++;if(r===N.length||l===j.length)for(r=N.length-1,l=j.length-1;1<=r&&0<=l&&N[r]!==j[l];)l--;for(;1<=r&&0<=l;r--,l--)if(N[r]!==j[l]){if(r!==1||l!==1)do if(r--,l--,0>l||N[r]!==j[l]){var it=`
`+N[r].replace(" at new "," at ");return t.displayName&&it.includes("<anonymous>")&&(it=it.replace("<anonymous>",t.displayName)),it}while(1<=r&&0<=l);break}}}finally{Dt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?qt(a):""}function Jt(t,n){switch(t.tag){case 26:case 27:case 5:return qt(t.type);case 16:return qt("Lazy");case 13:return t.child!==n&&n!==null?qt("Suspense Fallback"):qt("Suspense");case 19:return qt("SuspenseList");case 0:case 15:return Kt(t.type,!1);case 11:return Kt(t.type.render,!1);case 1:return Kt(t.type,!0);case 31:return qt("Activity");case 30:return qt("ViewTransition");default:return""}}function At(t){try{var n="",a=null;do n+=Jt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var zt=Object.prototype.hasOwnProperty,re=o.unstable_scheduleCallback,Qt=o.unstable_cancelCallback,Pt=o.unstable_shouldYield,ce=o.unstable_requestPaint,V=o.unstable_now,Ct=o.unstable_getCurrentPriorityLevel,Nt=o.unstable_ImmediatePriority,kt=o.unstable_UserBlockingPriority,Tt=o.unstable_NormalPriority,St=o.unstable_LowPriority,Zt=o.unstable_IdlePriority,ue=o.log,Ve=o.unstable_setDisableYieldValue,Me=null,tn=null;function mn(t){if(typeof ue=="function"&&Ve(t),tn&&typeof tn.setStrictMode=="function")try{tn.setStrictMode(Me,t)}catch{}}var Un=Math.clz32?Math.clz32:Ml,na=Math.log,ho=Math.LN2;function Ml(t){return t>>>=0,t===0?32:31-(na(t)/ho|0)|0}var cr=256,ia=262144,fr=4194304;function ci(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function hr(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~c,r!==0?l=ci(r):(_&=E,_!==0?l=ci(_):a||(a=E&~t,a!==0&&(l=ci(a))))):(E=r&~c,E!==0?l=ci(E):_!==0?l=ci(_):a||(a=r&~t,a!==0&&(l=ci(a)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:l}function Aa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function El(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-Un(a),l=1<<r;n|=t[r],a&=~l}return n}function Ac(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tl(){var t=fr;return fr<<=1,(fr&62914560)===0&&(fr=4194304),t}function po(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function dr(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Rc(t,n,a,r,l,c){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,N=t.expirationTimes,j=t.hiddenUpdates;for(a=_&~a;0<a;){var it=31-Un(a),mt=1<<it;E[it]=0,N[it]=-1;var k=j[it];if(k!==null)for(j[it]=null,it=0;it<k.length;it++){var $=k[it];$!==null&&($.lane&=-536870913)}a&=~mt}r!==0&&A(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(_&~n))}function A(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Un(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function Z(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-Un(a),l=1<<r;l&n|t[r]&n&&(t[r]|=n),a&=~l}}function st(t,n){var a=n&-n;return a=(a&42)!==0?1:ot(a),(a&(t.suspendedLanes|n))!==0?0:a}function ot(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function K(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bt(){var t=Yt.p;return t!==0?t:(t=window.event,t===void 0?32:I0(t.type))}function It(t,n){var a=Yt.p;try{return Yt.p=t,n()}finally{Yt.p=a}}var Ht=Math.random().toString(36).slice(2),Ut="__reactFiber$"+Ht,Wt="__reactProps$"+Ht,ie="__reactContainer$"+Ht,te="__reactEvents$"+Ht,ve="__reactListeners$"+Ht,Ie="__reactHandles$"+Ht,Qe="__reactResources$"+Ht,Ne="__reactMarker$"+Ht,Ce="__reactLoad$"+Ht;function ee(t){delete t[Ut],delete t[Wt],delete t[ve],delete t[Ie]}function Le(t){var n;if(n=t[Ut])return n;for(var a=t.parentNode;a;){if(n=a[ie]||a[Ut]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=_0(t);t!==null;){if(a=t[Ut])return a;t=_0(t)}return n}t=a,a=t.parentNode}return null}function me(t){if(t=t[Ut]||t[ie]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function gn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Jn(t){var n=t[Qe];return n||(n=t[Qe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function we(t){t[Ne]=!0}function Ra(t){t[Ce]=void 0}var je=new Set,Pn={};function un(t,n){nn(t,n),nn(t+"Capture",n)}function nn(t,n){for(Pn[t]=n,t=0;t<n.length;t++)je.add(n[t])}var Nn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Qr={},Pi={};function FS(t){return zt.call(Pi,t)?!0:zt.call(Qr,t)?!1:Nn.test(t)?Pi[t]=!0:(Qr[t]=!0,!1)}var De=!1;function Fp(){var t=De;return De=!1,t}function bl(t,n,a){if(FS(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Al(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function aa(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function $n(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Hp(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function HS(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(_){a=""+_,c.call(this,_)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Cc(t){if(!t._valueTracker){var n=Hp(t)?"checked":"value";t._valueTracker=HS(t,n,""+t[n])}}function Gp(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=Hp(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var GS=/[\n"\\]/g;function fi(t){return t.replace(GS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function wc(t,n,a,r,l,c,_,E){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+$n(n)):t.value!==""+$n(n)&&(t.value=""+$n(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?_==="number"&&t.value==n?Dc(t,$n(t.value)):Dc(t,$n(n)):a!=null?Dc(t,$n(a)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+$n(E):t.removeAttribute("name")}function Vp(t,n,a,r,l,c,_,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Cc(t);return}a=a!=null?""+$n(a):"",n=n!=null?""+$n(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Cc(t)}function Dc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function Jr(t,n,a,r){if(t=t.options,n){n={};for(var l=0;l<a.length;l++)n["$"+a[l]]=!0;for(a=0;a<t.length;a++)l=n.hasOwnProperty("$"+t[a].value),t[a].selected!==l&&(t[a].selected=l),l&&r&&(t[a].defaultSelected=!0)}else{for(a=""+$n(a),n=null,l=0;l<t.length;l++){if(t[l].value===a){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function Xp(t,n,a){if(n!=null&&(n=""+$n(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+$n(a):""}function kp(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(Rt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=$n(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Cc(t)}function $r(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var VS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Yp(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||VS.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function qp(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",De=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&a[l]!==r&&(Yp(t,l,r),De=!0)}else for(var c in n)n.hasOwnProperty(c)&&Yp(t,c,n[c])}function Uc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var XS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),kS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rl(t){return kS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ii(){}var Nc=null;function Lc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var ts=null,es=null;function Wp(t){var n=me(t);if(n&&(t=n.stateNode)){var a=t[Wt]||null;t:switch(t=n.stateNode,n.type){case"input":if(wc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+fi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var l=r[Wt]||null;if(!l)throw Error(s(90));wc(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&Gp(r)}break t;case"textarea":Xp(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&Jr(t,!!a.multiple,n,!1)}}}var Oc=!1;function jp(t,n,a){if(Oc)return t(n,a);Oc=!0;try{var r=t(n);return r}finally{if(Oc=!1,(ts!==null||es!==null)&&(Ru(),ts&&(n=ts,t=es,es=ts=null,Wp(n),t)))for(n=0;n<t.length;n++)Wp(t[n])}}function mo(t,n){var a=t.stateNode;if(a===null)return null;var r=a[Wt]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zc=!1;if(ra)try{var go={};Object.defineProperty(go,"passive",{get:function(){zc=!0}}),window.addEventListener("test",go,go),window.removeEventListener("test",go,go)}catch{zc=!1}var Ca=null,Pc=null,Cl=null;function Zp(){if(Cl)return Cl;var t,n=Pc,a=n.length,r,l="value"in Ca?Ca.value:Ca.textContent,c=l.length;for(t=0;t<a&&n[t]===l[t];t++);var _=a-t;for(r=1;r<=_&&n[a-r]===l[c-r];r++);return Cl=l.slice(t,1<r?1-r:void 0)}function wl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Dl(){return!0}function Kp(){return!1}function In(t){function n(a,r,l,c,_){this._reactName=a,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=_,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Dl:Kp,this.isPropagationStopped=Kp,this}return z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),n}var wa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ul=In(wa),_o=z({},wa,{view:0,detail:0}),YS=In(_o),Ic,Bc,vo,Nl=z({},_o,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==vo&&(vo&&t.type==="mousemove"?(Ic=t.screenX-vo.screenX,Bc=t.screenY-vo.screenY):Bc=Ic=0,vo=t),Ic)},movementY:function(t){return"movementY"in t?t.movementY:Bc}}),Qp=In(Nl),qS=z({},Nl,{dataTransfer:0}),WS=In(qS),jS=z({},_o,{relatedTarget:0}),Fc=In(jS),ZS=z({},wa,{animationName:0,elapsedTime:0,pseudoElement:0}),KS=In(ZS),QS=z({},wa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),JS=In(QS),$S=z({},wa,{data:0}),Jp=In($S),tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ix(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=nx[t])?!!n[t]:!1}function Hc(){return ix}var ax=z({},_o,{key:function(t){if(t.key){var n=tx[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ex[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hc,charCode:function(t){return t.type==="keypress"?wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rx=In(ax),sx=z({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$p=In(sx),ox=z({},wa,{submitter:0}),lx=In(ox),ux=z({},_o,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hc}),cx=In(ux),fx=z({},wa,{propertyName:0,elapsedTime:0,pseudoElement:0}),hx=In(fx),dx=z({},Nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),px=In(dx),mx=z({},wa,{newState:0,oldState:0,source:0}),gx=In(mx),_x=[9,13,27,32],Gc=ra&&"CompositionEvent"in window,So=null;ra&&"documentMode"in document&&(So=document.documentMode);var vx=ra&&"TextEvent"in window&&!So,tm=ra&&(!Gc||So&&8<So&&11>=So),em=" ",nm=!1;function im(t,n){switch(t){case"keyup":return _x.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function am(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ns=!1;function Sx(t,n){switch(t){case"compositionend":return am(n);case"keypress":return n.which!==32?null:(nm=!0,em);case"textInput":return t=n.data,t===em&&nm?null:t;default:return null}}function xx(t,n){if(ns)return t==="compositionend"||!Gc&&im(t,n)?(t=Zp(),Cl=Pc=Ca=null,ns=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return tm&&n.locale!=="ko"?null:n.data;default:return null}}var yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!yx[t.type]:n==="textarea"}function sm(t,n,a,r){ts?es?es.push(r):es=[r]:ts=r,n=Lu(n,"onChange"),0<n.length&&(a=new Ul("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var xo=null,yo=null;function Mx(t){W_(t,0)}function Ll(t){var n=gn(t);if(Gp(n))return t}function om(t,n){if(t==="change")return n}var lm=!1;if(ra){var Vc;if(ra){var Xc="oninput"in document;if(!Xc){var um=document.createElement("div");um.setAttribute("oninput","return;"),Xc=typeof um.oninput=="function"}Vc=Xc}else Vc=!1;lm=Vc&&(!document.documentMode||9<document.documentMode)}function cm(){xo&&(xo.detachEvent("onpropertychange",fm),yo=xo=null)}function fm(t){if(t.propertyName==="value"&&Ll(yo)){var n=[];sm(n,yo,t,Lc(t)),jp(Mx,n)}}function Ex(t,n,a){t==="focusin"?(cm(),xo=n,yo=a,xo.attachEvent("onpropertychange",fm)):t==="focusout"&&cm()}function Tx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ll(yo)}function bx(t,n){if(t==="click")return Ll(n)}function Ax(t,n){if(t==="input"||t==="change")return Ll(n)}function Rx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ti=typeof Object.is=="function"?Object.is:Rx;function Mo(t,n){if(ti(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var l=a[r];if(!zt.call(n,l)||!ti(t[l],n[l]))return!1}return!0}function kc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function dm(t,n){var a=hm(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=hm(a)}}function pm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?pm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function mm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=kc(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=kc(t.document)}return n}function Yc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Cx=ra&&"documentMode"in document&&11>=document.documentMode,is=null,qc=null,Eo=null,Wc=!1;function gm(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wc||is==null||is!==kc(r)||(r=is,"selectionStart"in r&&Yc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Eo&&Mo(Eo,r)||(Eo=r,r=Lu(qc,"onSelect"),0<r.length&&(n=new Ul("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=is)))}function pr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var as={animationend:pr("Animation","AnimationEnd"),animationiteration:pr("Animation","AnimationIteration"),animationstart:pr("Animation","AnimationStart"),transitionrun:pr("Transition","TransitionRun"),transitionstart:pr("Transition","TransitionStart"),transitioncancel:pr("Transition","TransitionCancel"),transitionend:pr("Transition","TransitionEnd")},jc={},_m={};ra&&(_m=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function mr(t){if(jc[t])return jc[t];if(!as[t])return t;var n=as[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in _m)return jc[t]=n[a];return t}var vm=mr("animationend"),Sm=mr("animationiteration"),xm=mr("animationstart"),wx=mr("transitionrun"),Dx=mr("transitionstart"),Ux=mr("transitioncancel"),ym=mr("transitionend"),Mm=new Map,Zc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Zc.push("scrollEnd");function Ei(t,n){Mm.set(t,n),un(n,[t])}var Nx=0;function sa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ri.identifierPrefix;var a=Nx++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Em(t){if(t==null||typeof t=="string")return t;var n=null,a=Ts;if(a!==null)for(var r=0;r<a.length;r++){var l=t[a[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function oa(t,n){return t=Em(t),n=Em(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Ol=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},hi=[],rs=0,Kc=0;function zl(){for(var t=rs,n=Kc=rs=0;n<t;){var a=hi[n];hi[n++]=null;var r=hi[n];hi[n++]=null;var l=hi[n];hi[n++]=null;var c=hi[n];if(hi[n++]=null,r!==null&&l!==null){var _=r.pending;_===null?l.next=l:(l.next=_.next,_.next=l),r.pending=l}c!==0&&Tm(a,l,c)}}function Pl(t,n,a,r){hi[rs++]=t,hi[rs++]=n,hi[rs++]=a,hi[rs++]=r,Kc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Qc(t,n,a,r){return Pl(t,n,a,r),Il(t)}function gr(t,n){return Pl(t,null,null,n),Il(t)}function Tm(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var l=!1,c=t.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&n!==null&&(l=31-Un(a),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[n]:r.push(n),n.lane=a|536870912),c):null}function Il(t){if(50<Yo)throw Yo=0,Au=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ss={};function Lx(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Xn(t,n,a,r){return new Lx(t,n,a,r)}function Jc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function la(t,n){var a=t.alternate;return a===null?(a=Xn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function bm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Bl(t,n,a,r,l,c){var _=0;if(r=t,typeof r=="function")Jc(r)&&(_=1);else if(typeof r=="string")_=oM(t,a,Gt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Ft:return t=Xn(31,a,n,l),t.elementType=Ft,t.lanes=c,t;case X:return _r(a.children,l,c,n);case nt:_=8,l|=24;break;case ut:return t=Xn(12,a,n,l|2),t.elementType=ut,t.lanes=c,t;case at:return t=Xn(13,a,n,l),t.elementType=at,t.lanes=c,t;case G:return t=Xn(19,a,n,l),t.elementType=G,t.lanes=c,t;case ae:case I:return t=l|32,t=Xn(30,a,n,t),t.elementType=I,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case lt:_=10;break t;case _t:_=9;break t;case q:_=11;break t;case gt:_=14;break t;case vt:_=16,r=null;break t}_=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Xn(_,a,n,l),n.elementType=t,n.type=r,n.lanes=c,n}function _r(t,n,a,r){return t=Xn(7,t,r,n),t.lanes=a,t}function $c(t,n,a){return t=Xn(6,t,null,n),t.lanes=a,t}function Am(t){var n=Xn(18,null,null,0);return n.stateNode=t,n}function tf(t,n,a){return n=Xn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Rm=new WeakMap;function di(t,n){if(typeof t=="object"&&t!==null){var a=Rm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:At(n)},Rm.set(t,n),n)}return{value:t,source:n,stack:At(n)}}var os=[],ls=0,Fl=null,To=0,pi=[],mi=0,Da=null,Bi=1,Fi="";function ua(t,n){os[ls++]=To,os[ls++]=Fl,Fl=t,To=n}function Cm(t,n,a){pi[mi++]=Bi,pi[mi++]=Fi,pi[mi++]=Da,Da=t;var r=Bi;t=Fi;var l=32-Un(r)-1;r&=~(1<<l),a+=1;var c=32-Un(n)+l;if(30<c){var _=l-l%5;c=(r&(1<<_)-1).toString(32),r>>=_,l-=_,Bi=1<<32-Un(n)+l|a<<l|r,Fi=c+t}else Bi=1<<c|a<<l|r,Fi=t}function Hl(t){t.return!==null&&(ua(t,1),Cm(t,1,0))}function ef(t){for(;t===Fl;)Fl=os[--ls],os[ls]=null,To=os[--ls],os[ls]=null;for(;t===Da;)Da=pi[--mi],pi[mi]=null,Fi=pi[--mi],pi[mi]=null,Bi=pi[--mi],pi[mi]=null}function wm(t,n){pi[mi++]=Bi,pi[mi++]=Fi,pi[mi++]=Da,Bi=n.id,Fi=n.overflow,Da=t}var xn=null,Ze=null,ge=!1,Ua=null,gi=!1,nf=Error(s(519));function Na(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw bo(di(n,t)),nf}function Dm(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[Ut]=t,n[Wt]=r,a){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(a=0;a<Wo.length;a++)ye(Wo[a],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),Vp(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),kp(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||Q_(n.textContent,a)?(r.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),r.onScroll!=null&&ye("scroll",n),r.onScrollEnd!=null&&ye("scrollend",n),r.onClick!=null&&(n.onclick=Ii),n=!0):n=!1,n||Na(t,!0)}function Gl(t){for(xn=t.return;xn;)switch(xn.tag){case 5:case 31:case 13:gi=!1;return;case 27:case 3:gi=!0;return;default:xn=xn.return}}function us(t){if(t!==xn)return!1;if(!ge)return Gl(t),ge=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Lh(t.type,t.memoizedProps)),a=!a),a&&Ze&&Na(t),Gl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=g0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=g0(t)}else n===27?(n=Ze,ja(t.type)?(t=Vh,Vh=null,Ze=t):Ze=n):Ze=xn?vi(t.stateNode.nextSibling):null;return!0}function vr(){Ze=xn=null,ge=!1}function af(){var t=Ua;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),Ua=null),t}function bo(t){Ua===null?Ua=[t]:Ua.push(t)}var rf=Xt(null),Sr=null,ca=null;function La(t,n,a){ne(rf,n._currentValue),n._currentValue=a}function fa(t){t._currentValue=rf.current,wt(rf)}function Vl(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function sf(t,n,a,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var _=l.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=l;for(var N=0;N<n.length;N++)if(E.context===n[N]){c.lanes|=a,E=c.alternate,E!==null&&(E.lanes|=a),Vl(c.return,a,t),r||(_=null);break t}c=E.next}}else if(l.tag===18){if(_=l.return,_===null)throw Error(s(341));_.lanes|=a,c=_.alternate,c!==null&&(c.lanes|=a),Vl(_,a,t),_=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=a,_=l.alternate,_!==null&&(_.lanes|=a),Vl(l.return,a,t),_=l.child,_=_!==null?_.sibling:null):_=l.child;if(_!==null)_.return=l;else for(_=l;_!==null;){if(_===t){_=null;break}if(l=_.sibling,l!==null){l.return=_.return,_=l;break}_=_.return}l=_}}function xr(t,n,a,r){t=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var _=l.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var E=l.type;ti(l.pendingProps.value,_.value)||(t!==null?t.push(E):t=[E])}}else if(l===We.current){if(_=l.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Os):t=[Os])}l=l.return}return t!==null&&sf(n,t,a,r),n.flags|=262144,t!==null}function Xl(t){for(t=t.firstContext;t!==null;){if(!ti(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function yr(t){Sr=t,ca=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function bn(t){return Um(Sr,t)}function kl(t,n){return Sr===null&&yr(t),Um(t,n)}function Um(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ca===null){if(t===null)throw Error(s(308));ca=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ca=ca.next=n;return a}var Ox=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},zx=o.unstable_scheduleCallback,Px=o.unstable_NormalPriority,cn={$$typeof:lt,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function of(){return{controller:new Ox,data:new Map,refCount:0}}function Ao(t){t.refCount--,t.refCount===0&&zx(Px,function(){t.controller.abort()})}function Nm(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var Ro=null;function Ix(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Co=null,lf=0,Mr=0,cs=null;function Bx(t,n){if(Co===null){var a=Co=[];lf=0,Mr=Th(),cs={status:"pending",value:void 0,then:function(r){a.push(r)}}}return lf++,n.then(Lm,Lm),n}function Lm(){if(--lf===0&&(Ro=null,Co!==null)){cs!==null&&(cs.status="fulfilled");var t=Co;Co=null,Mr=0,cs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Fx(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(l){a.push(l)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<a.length;l++)(0,a[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<a.length;l++)(0,a[l])(void 0)}),r}var Om=Et.S;Et.S=function(t,n){if(A_=V(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Bx(t,n),Ro!==null)for(var a=Cs;a!==null;)Nm(a,Ro),a=a.next;if(a=t.types,a!==null){for(var r=Cs;r!==null;)Nm(r,a),r=r.next;if(Mr!==0){r=Ro,r===null&&(r=Ro=[]);for(var l=0;l<a.length;l++){var c=a[l];r.indexOf(c)===-1&&r.push(c)}}}Om!==null&&Om(t,n)};var Er=Xt(null);function uf(){var t=Er.current;return t!==null?t:qe.pooledCache}function Yl(t,n){n===null?ne(Er,Er.current):ne(Er,n.pool)}function zm(){var t=uf();return t===null?null:{parent:cn._currentValue,pool:t}}var fs=Error(s(460)),cf=Error(s(474)),ql=Error(s(542)),Wl={then:function(){}};function Pm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Im(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ii,Ii),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Fm(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Ii,Ii);else{if(t=qe,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Fm(t),t}throw br=n,fs}}function Tr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(br=a,fs):a}}var br=null;function Bm(){if(br===null)throw Error(s(459));var t=br;return br=null,t}function Fm(t){if(t===fs||t===ql)throw Error(s(483))}var hs=null,wo=0;function jl(t){var n=wo;return wo+=1,hs===null&&(hs=[]),Im(hs,t,n)}function Oa(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Zl(t,n){throw n.$$typeof===Y?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Hm(t){function n(W,H){if(t){var J=W.deletions;J===null?(W.deletions=[H],W.flags|=16):J.push(H)}}function a(W,H){if(!t)return null;for(;H!==null;)n(W,H),H=H.sibling;return null}function r(W){for(var H=new Map;W!==null;)W.key===null?H.set(W.index,W):H.set(W.key,W),W=W.sibling;return H}function l(W,H){return W=la(W,H),W.index=0,W.sibling=null,W}function c(W,H,J){return W.index=J,t?(J=W.alternate,J!==null?(J=J.index,J<H?(W.flags|=2,H):J):(W.flags|=134217730,H)):(W.flags|=1048576,H)}function _(W){return t&&W.alternate===null&&(W.flags|=134217730),W}function E(W,H,J,dt){return H===null||H.tag!==6?(H=$c(J,W.mode,dt),H.return=W,H):(H=l(H,J),H.return=W,H)}function N(W,H,J,dt){var Vt=J.type;return Vt===X?(W=it(W,H,J.props.children,dt,J.key),Oa(W,J),W):H!==null&&(H.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===vt&&Tr(Vt)===H.type)?(H=l(H,J.props),Oa(H,J),H.return=W,H):(H=Bl(J.type,J.key,J.props,null,W.mode,dt),Oa(H,J),H.return=W,H)}function j(W,H,J,dt){return H===null||H.tag!==4||H.stateNode.containerInfo!==J.containerInfo||H.stateNode.implementation!==J.implementation?(H=tf(J,W.mode,dt),H.return=W,H):(H=l(H,J.children||[]),H.return=W,H)}function it(W,H,J,dt,Vt){return H===null||H.tag!==7?(H=_r(J,W.mode,dt,Vt),H.return=W,H):(H=l(H,J),H.return=W,H)}function mt(W,H,J){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=$c(""+H,W.mode,J),H.return=W,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case D:return J=Bl(H.type,H.key,H.props,null,W.mode,J),Oa(J,H),J.return=W,J;case C:return H=tf(H,W.mode,J),H.return=W,H;case vt:return H=Tr(H),mt(W,H,J)}if(Rt(H)||et(H))return H=_r(H,W.mode,J,null),H.return=W,H;if(typeof H.then=="function")return mt(W,jl(H),J);if(H.$$typeof===lt)return mt(W,kl(W,H),J);Zl(W,H)}return null}function k(W,H,J,dt){var Vt=H!==null?H.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Vt!==null?null:E(W,H,""+J,dt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case D:return J.key===Vt?N(W,H,J,dt):null;case C:return J.key===Vt?j(W,H,J,dt):null;case vt:return J=Tr(J),k(W,H,J,dt)}if(Rt(J)||et(J))return Vt!==null?null:it(W,H,J,dt,null);if(typeof J.then=="function")return k(W,H,jl(J),dt);if(J.$$typeof===lt)return k(W,H,kl(W,J),dt);Zl(W,J)}return null}function $(W,H,J,dt,Vt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return W=W.get(J)||null,E(H,W,""+dt,Vt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case D:return W=W.get(dt.key===null?J:dt.key)||null,N(H,W,dt,Vt);case C:return W=W.get(dt.key===null?J:dt.key)||null,j(H,W,dt,Vt);case vt:return dt=Tr(dt),$(W,H,J,dt,Vt)}if(Rt(dt)||et(dt))return W=W.get(J)||null,it(H,W,dt,Vt,null);if(typeof dt.then=="function")return $(W,H,J,jl(dt),Vt);if(dt.$$typeof===lt)return $(W,H,J,kl(H,dt),Vt);Zl(H,dt)}return null}function Ot(W,H,J,dt){for(var Vt=null,Te=null,$t=H,se=H=0,dn=null;$t!==null&&se<J.length;se++){$t.index>se?(dn=$t,$t=null):dn=$t.sibling;var Re=k(W,$t,J[se],dt);if(Re===null){$t===null&&($t=dn);break}t&&$t&&Re.alternate===null&&n(W,$t),H=c(Re,H,se),Te===null?Vt=Re:Te.sibling=Re,Te=Re,$t=dn}if(se===J.length)return a(W,$t),ge&&ua(W,se),Vt;if($t===null){for(;se<J.length;se++)$t=mt(W,J[se],dt),$t!==null&&(H=c($t,H,se),Te===null?Vt=$t:Te.sibling=$t,Te=$t);return ge&&ua(W,se),Vt}for($t=r($t);se<J.length;se++)dn=$($t,W,se,J[se],dt),dn!==null&&(t&&(Re=dn.alternate,Re!==null&&$t.delete(Re.key===null?se:Re.key)),H=c(dn,H,se),Te===null?Vt=dn:Te.sibling=dn,Te=dn);return t&&$t.forEach(function($a){return n(W,$a)}),ge&&ua(W,se),Vt}function jt(W,H,J,dt){if(J==null)throw Error(s(151));for(var Vt=null,Te=null,$t=H,se=H=0,dn=null,Re=J.next();$t!==null&&!Re.done;se++,Re=J.next()){$t.index>se?(dn=$t,$t=null):dn=$t.sibling;var $a=k(W,$t,Re.value,dt);if($a===null){$t===null&&($t=dn);break}t&&$t&&$a.alternate===null&&n(W,$t),H=c($a,H,se),Te===null?Vt=$a:Te.sibling=$a,Te=$a,$t=dn}if(Re.done)return a(W,$t),ge&&ua(W,se),Vt;if($t===null){for(;!Re.done;se++,Re=J.next())Re=mt(W,Re.value,dt),Re!==null&&(H=c(Re,H,se),Te===null?Vt=Re:Te.sibling=Re,Te=Re);return ge&&ua(W,se),Vt}for($t=r($t);!Re.done;se++,Re=J.next())Re=$($t,W,se,Re.value,dt),Re!==null&&(t&&(dn=Re.alternate,dn!==null&&$t.delete(dn.key===null?se:dn.key)),H=c(Re,H,se),Te===null?Vt=Re:Te.sibling=Re,Te=Re);return t&&$t.forEach(function(SM){return n(W,SM)}),ge&&ua(W,se),Vt}function he(W,H,J,dt){if(typeof J=="object"&&J!==null&&J.type===X&&J.key===null&&J.props.ref===void 0&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case D:t:{for(var Vt=J.key;H!==null;){if(H.key===Vt){if(Vt=J.type,Vt===X){if(H.tag===7){a(W,H.sibling),dt=l(H,J.props.children),Oa(dt,J),dt.return=W,W=dt;break t}}else if(H.elementType===Vt||typeof Vt=="object"&&Vt!==null&&Vt.$$typeof===vt&&Tr(Vt)===H.type){a(W,H.sibling),dt=l(H,J.props),Oa(dt,J),dt.return=W,W=dt;break t}a(W,H);break}else n(W,H);H=H.sibling}J.type===X?(dt=_r(J.props.children,W.mode,dt,J.key),Oa(dt,J),dt.return=W,W=dt):(dt=Bl(J.type,J.key,J.props,null,W.mode,dt),Oa(dt,J),dt.return=W,W=dt)}return _(W);case C:t:{for(Vt=J.key;H!==null;){if(H.key===Vt)if(H.tag===4&&H.stateNode.containerInfo===J.containerInfo&&H.stateNode.implementation===J.implementation){a(W,H.sibling),dt=l(H,J.children||[]),dt.return=W,W=dt;break t}else{a(W,H);break}else n(W,H);H=H.sibling}dt=tf(J,W.mode,dt),dt.return=W,W=dt}return _(W);case vt:return J=Tr(J),he(W,H,J,dt)}if(Rt(J))return Ot(W,H,J,dt);if(et(J)){if(Vt=et(J),typeof Vt!="function")throw Error(s(150));return J=Vt.call(J),jt(W,H,J,dt)}if(typeof J.then=="function")return he(W,H,jl(J),dt);if(J.$$typeof===lt)return he(W,H,kl(W,J),dt);Zl(W,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,H!==null&&H.tag===6?(a(W,H.sibling),dt=l(H,J),dt.return=W,W=dt):(a(W,H),dt=$c(J,W.mode,dt),dt.return=W,W=dt),_(W)):a(W,H)}return function(W,H,J,dt){try{wo=0;var Vt=he(W,H,J,dt);return hs=null,Vt}catch($t){if($t===fs||$t===ql)throw $t;var Te=Xn(29,$t,null,W.mode);return Te.lanes=dt,Te.return=W,Te}finally{}}}var Ar=Hm(!0),Gm=Hm(!1),za=!1;function ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ia(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Oe&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Il(t),Tm(t,null,a),n}return Pl(t,r,n,a),Il(t)}function Do(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Z(t,a)}}function df(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var l=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?l=c=_:c=c.next=_,a=a.next}while(a!==null);c===null?l=c=n:c=c.next=n}else l=c=n;a={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var pf=!1;function Uo(){if(pf){var t=cs;if(t!==null)throw t}}function No(t,n,a,r){pf=!1;var l=t.updateQueue;za=!1;var c=l.firstBaseUpdate,_=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var N=E,j=N.next;N.next=null,_===null?c=j:_.next=j,_=N;var it=t.alternate;it!==null&&(it=it.updateQueue,E=it.lastBaseUpdate,E!==_&&(E===null?it.firstBaseUpdate=j:E.next=j,it.lastBaseUpdate=N))}if(c!==null){var mt=l.baseState;_=0,it=j=N=null,E=c;do{var k=E.lane&-536870913,$=k!==E.lane;if($?(Ee&k)===k:(r&k)===k){k!==0&&k===Mr&&(pf=!0),it!==null&&(it=it.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ot=t,jt=E;k=n;var he=a;switch(jt.tag){case 1:if(Ot=jt.payload,typeof Ot=="function"){mt=Ot.call(he,mt,k);break t}mt=Ot;break t;case 3:Ot.flags=Ot.flags&-65537|128;case 0:if(Ot=jt.payload,k=typeof Ot=="function"?Ot.call(he,mt,k):Ot,k==null)break t;mt=z({},mt,k);break t;case 2:za=!0}}k=E.callback,k!==null&&(t.flags|=64,$&&(t.flags|=8192),$=l.callbacks,$===null?l.callbacks=[k]:$.push(k))}else $={lane:k,tag:E.tag,payload:E.payload,callback:E.callback,next:null},it===null?(j=it=$,N=mt):it=it.next=$,_|=k;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;$=E,E=$.next,$.next=null,l.lastBaseUpdate=$,l.shared.pending=null}}while(!0);it===null&&(N=mt),l.baseState=N,l.firstBaseUpdate=j,l.lastBaseUpdate=it,c===null&&(l.shared.lanes=0),ka|=_,t.lanes=_,t.memoizedState=mt}}function Vm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Xm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Vm(a[t],n)}var Ba=Xt(null),Kl=Xt(0);function km(t,n){t=ga,ne(Kl,t),ne(Ba,n),ga=t|n.baseLanes}function mf(){ne(Kl,ga),ne(Ba,Ba.current)}function gf(){ga=Kl.current,wt(Ba),wt(Kl)}var An=Xt(null),Ln=null;function Fa(t){var n=t.alternate;ne(Rn,Rn.current&1),ne(An,t),Ln===null&&(n===null||Ba.current!==null||n.memoizedState!==null)&&(Ln=t)}function _f(t){ne(Rn,Rn.current),ne(An,t),Ln===null&&(Ln=t)}function Ym(t){t.tag===22?(ne(Rn,Rn.current),ne(An,t),Ln===null&&(Ln=t)):Ha()}function Ha(){ne(Rn,Rn.current),ne(An,An.current)}function ei(t){wt(An),Ln===t&&(Ln=null),wt(Rn)}var Rn=Xt(0);function Lo(t,n){ne(An,An.current),ne(Rn,n)}function vf(t){wt(Rn),wt(An),Ln===t&&(Ln=null)}function Ql(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Hh(a)||Gh(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ha=0,fe=null,Xe=null,fn=null,Jl=!1,ds=!1,Rr=!1,$l=0,Oo=0,ps=null,Hx=0;function an(){throw Error(s(321))}function Sf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ti(t[a],n[a]))return!1;return!0}function xf(t,n,a,r,l,c){return ha=c,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Et.H=t===null||t.memoizedState===null?Cg:wg,Rr=!1,c=a(r,l),Rr=!1,ds&&(c=Wm(n,a,r,l)),qm(t),c}function qm(t){Et.H=su;var n=Xe!==null&&Xe.next!==null;if(ha=0,fn=Xe=fe=null,Jl=!1,Oo=0,ps=null,n)throw Error(s(300));t===null||hn||(t=t.dependencies,t!==null&&Xl(t)&&(hn=!0))}function Wm(t,n,a,r){fe=t;var l=0;do{if(ds&&(ps=null),Oo=0,ds=!1,25<=l)throw Error(s(301));if(l+=1,fn=Xe=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Et.H=jx,c=n(a,r)}while(ds);return c}function Gx(){var t=Et.H,n=t.useState()[0];return n=typeof n.then=="function"?zo(n):n,t=t.useState()[0],(Xe!==null?Xe.memoizedState:null)!==t&&(fe.flags|=1024),n}function yf(){var t=$l!==0;return $l=0,t}function Mf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Ef(t){if(Jl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Jl=!1}ha=0,fn=Xe=fe=null,ds=!1,Oo=$l=0,ps=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?fe.memoizedState=fn=t:fn=fn.next=t,fn}function ln(){if(Xe===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var n=fn===null?fe.memoizedState:fn.next;if(n!==null)fn=n,Xe=t;else{if(t===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},fn===null?fe.memoizedState=fn=t:fn=fn.next=t}return fn}function tu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function zo(t){var n=Oo;return Oo+=1,ps===null&&(ps=[]),t=Im(ps,t,n),n=fe,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,Et.H=n===null||n.memoizedState===null?Cg:wg),t}function eu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return zo(t);if(t.$$typeof===ct)return;if(t.$$typeof===lt)return bn(t)}throw Error(s(438,String(t)))}function Tf(t){var n=null,a=fe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=fe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=tu(),fe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=_e;return n.index++,a}function da(t,n){return typeof n=="function"?n(t):n}function nu(t){var n=ln();return bf(n,Xe,t)}function bf(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var _=l.next;l.next=c.next,c.next=_}n.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{n=l.next;var E=_=null,N=null,j=n,it=!1;do{var mt=j.lane&-536870913;if(mt!==j.lane?(Ee&mt)===mt:(ha&mt)===mt){var k=j.revertLane;if(k===0)N!==null&&(N=N.next={lane:0,revertLane:0,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null}),mt===Mr&&(it=!0);else if((ha&k)===k){j=j.next,k===Mr&&(it=!0);continue}else mt={lane:0,revertLane:j.revertLane,gesture:null,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},N===null?(E=N=mt,_=c):N=N.next=mt,fe.lanes|=k,ka|=k;mt=j.action,Rr&&a(c,mt),c=j.hasEagerState?j.eagerState:a(c,mt)}else k={lane:mt,revertLane:j.revertLane,gesture:j.gesture,action:j.action,hasEagerState:j.hasEagerState,eagerState:j.eagerState,next:null},N===null?(E=N=k,_=c):N=N.next=k,fe.lanes|=mt,ka|=mt;j=j.next}while(j!==null&&j!==n);if(N===null?_=c:N.next=E,!ti(c,t.memoizedState)&&(hn=!0,it&&(a=cs,a!==null)))throw a;t.memoizedState=c,t.baseState=_,t.baseQueue=N,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Af(t){var n=ln(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,l=a.pending,c=n.memoizedState;if(l!==null){a.pending=null;var _=l=l.next;do c=t(c,_.action),_=_.next;while(_!==l);ti(c,n.memoizedState)||(hn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,r]}function jm(t,n,a){var r=fe,l=ln(),c=ge;if(c){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!ti((Xe||l).memoizedState,a);if(_&&(l.memoizedState=a,hn=!0),l=l.queue,wf(Qm.bind(null,r,l,t),[t]),t=l.getSnapshot!==n||_||fn!==null&&(fn.memoizedState.tag&1)!==0,ms(t?9:8,{destroy:void 0},Km.bind(null,r,l,a,n),null),t){if(r.flags|=2048,qe===null)throw Error(s(349));c||(ha&127)!==0||Zm(r,n,a)}return a}function Zm(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=fe.updateQueue,n===null?(n=tu(),fe.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Km(t,n,a,r){n.value=a,n.getSnapshot=r,Jm(n)&&$m(t)}function Qm(t,n,a){return a(function(){Jm(n)&&$m(t)})}function Jm(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ti(t,a)}catch{return!0}}function $m(t){var n=gr(t,2);n!==null&&Wn(n,t,2)}function Rf(t){var n=Bn();if(typeof t=="function"){var a=t;if(t=a(),Rr){mn(!0);try{a()}finally{mn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},n}function tg(t,n,a,r){return t.baseState=a,bf(t,Xe,typeof r=="function"?r:da)}function Vx(t,n,a,r,l){if(ru(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){c.listeners.push(_)}};Et.T!==null?a(!0):c.isTransition=!1,r(c),a=n.pending,a===null?(c.next=n.pending=c,eg(n,c)):(c.next=a.next,n.pending=a.next=c)}}function eg(t,n){var a=n.action,r=n.payload,l=t.state;if(n.isTransition){var c=Et.T,_={};_.types=c!==null?c.types:null,Et.T=_;try{var E=a(l,r),N=Et.S;N!==null&&N(_,E),ng(t,n,E)}catch(j){Cf(t,n,j)}finally{c!==null&&_.types!==null&&(c.types=_.types),Et.T=c}}else try{c=a(l,r),ng(t,n,c)}catch(j){Cf(t,n,j)}}function ng(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){ig(t,n,r)},function(r){return Cf(t,n,r)}):ig(t,n,a)}function ig(t,n,a){n.status="fulfilled",n.value=a,ag(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,eg(t,a)))}function Cf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,ag(n),n=n.next;while(n!==r)}t.action=null}function ag(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function rg(t,n){return n}function sg(t,n){if(ge){var a=qe.formState;if(a!==null){t:{var r=fe;if(ge){if(Ze){e:{for(var l=Ze,c=gi;l.nodeType!==8;){if(!c){l=null;break e}if(l=vi(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Ze=vi(l.nextSibling),r=l.data==="F!";break t}}Na(r)}r=!1}r&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rg,lastRenderedState:n},a.queue=r,a=bg.bind(null,fe,r),r.dispatch=a,r=Rf(!1),c=Of.bind(null,fe,!1,r.queue),r=Bn(),l={state:n,dispatch:null,action:t,pending:null},r.queue=l,a=Vx.bind(null,fe,l,c,a),l.dispatch=a,r.memoizedState=t,[n,a,!1]}function og(t){var n=ln();return lg(n,Xe,t)}function lg(t,n,a){if(n=bf(t,n,rg)[0],t=nu(da)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=zo(n)}catch(_){throw _===fs?ql:_}else r=n;n=ln();var l=n.queue,c=l.dispatch;return a!==n.memoizedState&&(fe.flags|=2048,ms(9,{destroy:void 0},Xx.bind(null,l,a),null)),[r,c,t]}function Xx(t,n){t.action=n}function ug(t){var n=ln(),a=Xe;if(a!==null)return lg(n,a,t);ln(),n=n.memoizedState,a=ln();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function ms(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=fe.updateQueue,n===null&&(n=tu(),fe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function cg(){return ln().memoizedState}function iu(t,n,a,r){var l=Bn();fe.flags|=t,l.memoizedState=ms(1|n,{destroy:void 0},a,r===void 0?null:r)}function au(t,n,a,r){var l=ln();r=r===void 0?null:r;var c=l.memoizedState.inst;Xe!==null&&r!==null&&Sf(r,Xe.memoizedState.deps)?l.memoizedState=ms(n,c,a,r):(fe.flags|=t,l.memoizedState=ms(1|n,c,a,r))}function fg(t,n){iu(8390656,8,t,n)}function wf(t,n){au(2048,8,t,n)}function kx(t){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=tu(),fe.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function hg(t){var n=ln().memoizedState;return kx({ref:n,nextImpl:t}),function(){if((Oe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function dg(t,n){return au(4,2,t,n)}function pg(t,n){return au(4,4,t,n)}function mg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function gg(t,n,a){a=a!=null?a.concat([t]):null,au(4,4,mg.bind(null,n,t),a)}function Df(){}function _g(t,n){var a=ln();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Sf(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function vg(t,n){var a=ln();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Sf(n,r[1]))return r[0];if(r=t(),Rr){mn(!0);try{t()}finally{mn(!1)}}return a.memoizedState=[r,n],r}function Uf(t,n,a){return a===void 0||(ha&1073741824)!==0&&(Ee&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=C_(),fe.lanes|=t,ka|=t,a)}function Sg(t,n,a,r){return ti(a,n)?a:Ba.current!==null?(t=Uf(t,a,r),ti(t,n)||(hn=!0),t):(ha&106)===0||(ha&1073741824)!==0&&(Ee&261930)===0?(hn=!0,t.memoizedState=a):(t=C_(),fe.lanes|=t,ka|=t,n)}function xg(t,n,a,r,l){var c=Yt.p;Yt.p=c!==0&&8>c?c:8;var _=Et.T,E={};E.types=_!==null?_.types:null,Et.T=E,Of(t,!1,n,a);try{var N=l(),j=Et.S;if(j!==null&&j(E,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var it=Fx(N,r);Po(t,n,it,ri(t))}else Po(t,n,r,ri(t))}catch(mt){Po(t,n,{then:function(){},status:"rejected",reason:mt},ri())}finally{Yt.p=c,_!==null&&E.types!==null&&(_.types=E.types),Et.T=_}}function Yx(){}function Nf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var l=yg(t).queue;xg(t,l,n,P,a===null?Yx:function(){return Mg(t),a(r)})}function yg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:P,baseState:P,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:P},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Mg(t){var n=yg(t);n.next===null&&(n=t.alternate.memoizedState),Po(t,n.next.queue,{},ri())}function Lf(){return bn(Os)}function Eg(){return ln().memoizedState}function Tg(){return ln().memoizedState}function qx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ri();t=Pa(a);var r=Ia(n,t,a);r!==null&&(Wn(r,n,a),Do(r,n,a)),n={cache:of()},t.payload=n;return}n=n.return}}function Wx(t,n,a){var r=ri();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ru(t)?Ag(n,a):(a=Qc(t,n,a,r),a!==null&&(Wn(a,t,r),Rg(a,n,r)))}function bg(t,n,a){var r=ri();Po(t,n,a,r)}function Po(t,n,a,r){var l={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ru(t))Ag(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var _=n.lastRenderedState,E=c(_,a);if(l.hasEagerState=!0,l.eagerState=E,ti(E,_))return Pl(t,n,l,0),qe===null&&zl(),!1}catch{}finally{}if(a=Qc(t,n,l,r),a!==null)return Wn(a,t,r),Rg(a,n,r),!0}return!1}function Of(t,n,a,r){if(r={lane:2,revertLane:Th(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},ru(t)){if(n)throw Error(s(479))}else n=Qc(t,a,r,2),n!==null&&Wn(n,t,2)}function ru(t){var n=t.alternate;return t===fe||n!==null&&n===fe}function Ag(t,n){ds=Jl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Rg(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,Z(t,a)}}var su={readContext:bn,use:eu,useCallback:an,useContext:an,useEffect:an,useImperativeHandle:an,useLayoutEffect:an,useInsertionEffect:an,useMemo:an,useReducer:an,useRef:an,useState:an,useDebugValue:an,useDeferredValue:an,useTransition:an,useSyncExternalStore:an,useId:an,useHostTransitionStatus:an,useFormState:an,useActionState:an,useOptimistic:an,useMemoCache:an,useCacheRefresh:an,useEffectEvent:an},Cg={readContext:bn,use:eu,useCallback:function(t,n){return Bn().memoizedState=[t,n===void 0?null:n],t},useContext:bn,useEffect:fg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,iu(4194308,4,mg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return iu(4194308,4,t,n)},useInsertionEffect:function(t,n){iu(4,2,t,n)},useMemo:function(t,n){var a=Bn();n=n===void 0?null:n;var r=t();if(Rr){mn(!0);try{t()}finally{mn(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Bn();if(a!==void 0){var l=a(n);if(Rr){mn(!0);try{a(n)}finally{mn(!1)}}}else l=n;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=Wx.bind(null,fe,t),[r.memoizedState,t]},useRef:function(t){var n=Bn();return t={current:t},n.memoizedState=t},useState:function(t){t=Rf(t);var n=t.queue,a=bg.bind(null,fe,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Df,useDeferredValue:function(t,n){var a=Bn();return Uf(a,t,n)},useTransition:function(){var t=Rf(!1);return t=xg.bind(null,fe,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=fe,l=Bn();if(ge){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),qe===null)throw Error(s(349));(Ee&127)!==0||Zm(r,n,a)}l.memoizedState=a;var c={value:a,getSnapshot:n};return l.queue=c,fg(Qm.bind(null,r,c,t),[t]),r.flags|=2048,ms(9,{destroy:void 0},Km.bind(null,r,c,a,n),null),a},useId:function(){var t=Bn(),n=qe.identifierPrefix;if(ge){var a=Fi,r=Bi;a=(r&~(1<<32-Un(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=$l++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Hx++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Lf,useFormState:sg,useActionState:sg,useOptimistic:function(t){var n=Bn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Of.bind(null,fe,!0,a),a.dispatch=n,[t,n]},useMemoCache:Tf,useCacheRefresh:function(){return Bn().memoizedState=qx.bind(null,fe)},useEffectEvent:function(t){var n=Bn(),a={impl:t};return n.memoizedState=a,function(){if((Oe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},wg={readContext:bn,use:eu,useCallback:_g,useContext:bn,useEffect:wf,useImperativeHandle:gg,useInsertionEffect:dg,useLayoutEffect:pg,useMemo:vg,useReducer:nu,useRef:cg,useState:function(){return nu(da)},useDebugValue:Df,useDeferredValue:function(t,n){var a=ln();return Sg(a,Xe.memoizedState,t,n)},useTransition:function(){var t=nu(da)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:zo(t),n]},useSyncExternalStore:jm,useId:Eg,useHostTransitionStatus:Lf,useFormState:og,useActionState:og,useOptimistic:function(t,n){var a=ln();return tg(a,Xe,t,n)},useMemoCache:Tf,useCacheRefresh:Tg,useEffectEvent:hg},jx={readContext:bn,use:eu,useCallback:_g,useContext:bn,useEffect:wf,useImperativeHandle:gg,useInsertionEffect:dg,useLayoutEffect:pg,useMemo:vg,useReducer:Af,useRef:cg,useState:function(){return Af(da)},useDebugValue:Df,useDeferredValue:function(t,n){var a=ln();return Xe===null?Uf(a,t,n):Sg(a,Xe.memoizedState,t,n)},useTransition:function(){var t=Af(da)[0],n=ln().memoizedState;return[typeof t=="boolean"?t:zo(t),n]},useSyncExternalStore:jm,useId:Eg,useHostTransitionStatus:Lf,useFormState:ug,useActionState:ug,useOptimistic:function(t,n){var a=ln();return Xe!==null?tg(a,Xe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Tf,useCacheRefresh:Tg,useEffectEvent:hg};function zf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:z({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Pf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ri(),l=Pa(r);l.payload=n,a!=null&&(l.callback=a),n=Ia(t,l,r),n!==null&&(Wn(n,t,r),Do(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ri(),l=Pa(r);l.tag=1,l.payload=n,a!=null&&(l.callback=a),n=Ia(t,l,r),n!==null&&(Wn(n,t,r),Do(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ri(),r=Pa(a);r.tag=2,n!=null&&(r.callback=n),n=Ia(t,r,a),n!==null&&(Wn(n,t,a),Do(n,t,a))}};function Dg(t,n,a,r,l,c,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,_):n.prototype&&n.prototype.isPureReactComponent?!Mo(a,r)||!Mo(l,c):!0}function Ug(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&Pf.enqueueReplaceState(n,n.state,null)}function Cr(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=z({},a));for(var l in t)a[l]===void 0&&(a[l]=t[l])}return a}function Ng(t){Ol(t)}function Lg(t){console.error(t)}function Og(t){Ol(t)}function ou(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function zg(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function If(t,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){ou(t,n)},a}function Pg(t){return t=Pa(t),t.tag=3,t}function Ig(t,n,a,r){var l=a.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){zg(n,a,r)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){zg(n,a,r),typeof l!="function"&&(Ya===null?Ya=new Set([this]):Ya.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function Zx(t,n,a,r,l){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&xr(n,a,l,!0),a=An.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Ln===null?Cu():a.alternate===null&&rn===0&&(rn=3),a.flags&=-257,a.flags|=65536,a.lanes=l,r===Wl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),yh(t,r,l)),!1;case 22:return a.flags|=65536,r===Wl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),yh(t,r,l)),!1}throw Error(s(435,a.tag))}return yh(t,r,l),Cu(),!1}if(ge)return n=An.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==nf&&(t=Error(s(422),{cause:r}),bo(di(t,a)))):(r!==nf&&(n=Error(s(423),{cause:r}),bo(di(n,a))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=di(r,a),l=If(t.stateNode,r,l),df(t,l),rn!==4&&(rn=2)),!1;var c=Error(s(520),{cause:r});if(c=di(c,a),ko===null?ko=[c]:ko.push(c),rn!==4&&(rn=2),n===null)return!0;r=di(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=l&-l,a.lanes|=t,t=If(a.stateNode,r,t),df(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Ya===null||!Ya.has(c))))return a.flags|=65536,l&=-l,a.lanes|=l,l=Pg(l),Ig(l,t,a,r),df(a,l),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Bf=Error(s(461)),hn=!1;function _n(t,n,a,r){n.child=t===null?Gm(n,null,a,r):Ar(n,t.child,a,r)}function Bg(t,n,a,r,l){a=a.render;var c=n.ref;if("ref"in r){var _={};for(var E in r)E!=="ref"&&(_[E]=r[E])}else _=r;return yr(n),r=xf(t,n,a,_,c,l),E=yf(),t!==null&&!hn?(Mf(t,n,l),pa(t,n,l)):(ge&&E&&Hl(n),n.flags|=1,_n(t,n,r,l),n.child)}function Fg(t,n,a,r,l){if(t===null){var c=a.type;return typeof c=="function"&&!Jc(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,Hg(t,n,c,r,l)):(t=Bl(a.type,null,r,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!qf(t,l)){var _=c.memoizedProps;if(a=a.compare,a=a!==null?a:Mo,a(_,r)&&t.ref===n.ref)return pa(t,n,l)}return n.flags|=1,t=la(c,r),t.ref=n.ref,t.return=n,n.child=t}function Hg(t,n,a,r,l){if(t!==null){var c=t.memoizedProps;if(Mo(c,r)&&t.ref===n.ref)if(hn=!1,n.pendingProps=r=c,qf(t,l))(t.flags&131072)!==0&&(hn=!0);else return n.lanes=t.lanes,pa(t,n,l)}return Ff(t,n,a,r,l)}function Gg(t,n,a,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(r=n.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,n.child=null;return Vg(t,n,c,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Yl(n,c!==null?c.cachePool:null),c!==null?km(n,c):mf(),Ym(n);else return r=n.lanes=536870912,Vg(t,n,c!==null?c.baseLanes|a:a,a,r)}else c!==null?(Yl(n,c.cachePool),km(n,c),Ha(),n.memoizedState=null):(t!==null&&Yl(n,null),mf(),Ha());return _n(t,n,l,a),n.child}function Io(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Vg(t,n,a,r,l){var c=uf();return c=c===null?null:{parent:cn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&Yl(n,null),mf(),Ym(n),t!==null&&xr(t,n,r,!0),n.childLanes=l,null}function lu(t,n){return n=uu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Xg(t,n,a){return Ar(n,t.child,null,a),t=lu(n,n.pendingProps),t.flags|=2,ei(n),n.memoizedState=null,t}function Kx(t,n,a){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ge){if(r.mode==="hidden")return t=lu(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Io(null,t);if(_f(n),(t=Ze)?(t=m0(t,gi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=Am(t),a.return=n,n.child=a,xn=n,Ze=null)):t=null,t===null)throw Na(n);return n.lanes=536870912,null}return lu(n,r)}var c=t.memoizedState;if(c!==null){var _=c.dehydrated;if(_f(n),l)if(n.flags&256)n.flags&=-257,n=Xg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(hn||xr(t,n,a,!1),l=(a&t.childLanes)!==0,hn||l){if(Ba.current===null){if(r=qe,r!==null&&(_=st(r,a),_!==0&&_!==c.retryLane))throw c.retryLane=_,gr(t,_),Wn(r,t,_),Bf;Cu()}n=Xg(t,n,a)}else t=c.treeContext,Ze=vi(_.nextSibling),xn=n,ge=!0,Ua=null,gi=!1,t!==null&&wm(n,t),n=lu(n,r),n.flags|=134221824;return n}return t=la(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function gs(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Ff(t,n,a,r,l){return yr(n),a=xf(t,n,a,r,void 0,l),r=yf(),t!==null&&!hn?(Mf(t,n,l),pa(t,n,l)):(ge&&r&&Hl(n),n.flags|=1,_n(t,n,a,l),n.child)}function kg(t,n,a,r,l,c){return yr(n),n.updateQueue=null,a=Wm(n,r,a,l),qm(t),r=yf(),t!==null&&!hn?(Mf(t,n,c),pa(t,n,c)):(ge&&r&&Hl(n),n.flags|=1,_n(t,n,a,c),n.child)}function Yg(t,n,a,r,l){if(yr(n),n.stateNode===null){var c=ss,_=a.contextType;typeof _=="object"&&_!==null&&(c=bn(_)),c=new a(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Pf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},ff(n),_=a.contextType,c.context=typeof _=="object"&&_!==null?bn(_):ss,c.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(zf(n,a,_,r),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(_=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),_!==c.state&&Pf.enqueueReplaceState(c,c.state,null),No(n,r,c,l),Uo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var E=n.memoizedProps,N=Cr(a,E);c.props=N;var j=c.context,it=a.contextType;_=ss,typeof it=="object"&&it!==null&&(_=bn(it));var mt=a.getDerivedStateFromProps;it=typeof mt=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,it||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||j!==_)&&Ug(n,c,r,_),za=!1;var k=n.memoizedState;c.state=k,No(n,r,c,l),Uo(),j=n.memoizedState,E||k!==j||za?(typeof mt=="function"&&(zf(n,a,mt,r),j=n.memoizedState),(N=za||Dg(n,a,N,r,k,j,_))?(it||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=j),c.props=r,c.state=j,c.context=_,r=N):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,hf(t,n),_=n.memoizedProps,it=Cr(a,_),c.props=it,mt=n.pendingProps,k=c.context,j=a.contextType,N=ss,typeof j=="object"&&j!==null&&(N=bn(j)),E=a.getDerivedStateFromProps,(j=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(_!==mt||k!==N)&&Ug(n,c,r,N),za=!1,k=n.memoizedState,c.state=k,No(n,r,c,l),Uo();var $=n.memoizedState;_!==mt||k!==$||za||t!==null&&t.dependencies!==null&&Xl(t.dependencies)?(typeof E=="function"&&(zf(n,a,E,r),$=n.memoizedState),(it=za||Dg(n,a,it,r,k,$,N)||t!==null&&t.dependencies!==null&&Xl(t.dependencies))?(j||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,$,N),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,$,N)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||_===t.memoizedProps&&k===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&k===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=$),c.props=r,c.state=$,c.context=N,r=it):(typeof c.componentDidUpdate!="function"||_===t.memoizedProps&&k===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&k===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,gs(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=Ar(n,t.child,null,l),n.child=Ar(n,null,a,l)):_n(t,n,a,l),n.memoizedState=c.state,t=n.child):t=pa(t,n,l),t}function qg(t,n,a,r){return vr(),n.flags|=256,_n(t,n,a,r),n.child}var Hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gf(t){return{baseLanes:t,cachePool:zm()}}function Vf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ai),t}function Wg(t,n,a){var r=n.pendingProps,l=!1,c=(n.flags&128)!==0,_;if((_=c)||(_=t!==null&&t.memoizedState===null?!1:(Rn.current&2)!==0),_&&(l=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(ge){if(l?Fa(n):Ha(),(t=Ze)?(t=m0(t,gi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Bi,overflow:Fi}:null,retryLane:536870912,hydrationErrors:null},a=Am(t),a.return=n,n.child=a,xn=n,Ze=null)):t=null,t===null)throw Na(n);return Gh(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,l?(Ha(),l=n.mode,c=uu({mode:"hidden",children:c},l),r=_r(r,l,a,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=Gf(a),r.childLanes=Vf(t,_,a),n.memoizedState=Hf,Io(null,r)):(Fa(n),Xf(n,c))}var E=t.memoizedState;if(E!==null){var N=E.dehydrated;if(N!==null)return Qx(t,n,c,_,r,N,E,a)}return l?(Ha(),l=r.fallback,c=n.mode,E=t.child,N=E.sibling,r=la(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&1206910976,N!==null?l=la(N,l):(l=_r(l,c,a,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,Io(null,r),r=n.child,l=t.child.memoizedState,l===null?l=Gf(a):(c=l.cachePool,c!==null?(E=cn._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=zm(),l={baseLanes:l.baseLanes|a,cachePool:c}),r.memoizedState=l,r.childLanes=Vf(t,_,a),n.memoizedState=Hf,Io(t.child,r)):(Fa(n),a=t.child,t=a.sibling,a=la(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Xf(t,n){return n=uu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function uu(t,n){return t=Xn(22,t,null,n),t.lanes=0,t}function cu(t,n,a){return Ar(n,t.child,null,a),t=Xf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Qx(t,n,a,r,l,c,_,E){if(a)return n.flags&256?(Fa(n),n.flags&=-257,cu(t,n,E)):n.memoizedState!==null?(Ha(),n.child=t.child,n.flags|=128,null):(Ha(),c=l.fallback,_=n.mode,l=uu({mode:"visible",children:l.children},_),c=_r(c,_,E,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,Ar(n,t.child,null,E),l=n.child,l.memoizedState=Gf(E),l.childLanes=Vf(t,r,E),n.memoizedState=Hf,Io(null,l));if(Fa(n),Gh(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var N=r.dgst;return r=N,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,bo({value:l,source:null,stack:null})),cu(t,n,E)}if(hn||xr(t,n,E,!1),r=(E&t.childLanes)!==0,hn||r){if(Ba.current!==null)return cu(t,n,E);if(r=qe,r!==null&&(l=st(r,E),l!==0&&l!==_.retryLane))throw _.retryLane=l,gr(t,l),Wn(r,t,l),Bf;return Hh(c)||Cu(),cu(t,n,E)}return Hh(c)?(n.flags|=192,n.child=t.child,null):(t=_.treeContext,Ze=vi(c.nextSibling),xn=n,ge=!0,Ua=null,gi=!1,t!==null&&wm(n,t),n=Xf(n,l.children),n.flags|=134221824,n)}function jg(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Vl(t.return,n,a)}function Zg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&Ql(a)===null&&(n=t),t=t.sibling}return n}function fu(t,n,a,r,l,c){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:l,treeForkCount:c}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=r,_.tail=a,_.tailMode=l,_.treeForkCount=c)}function kf(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function Yf(t,n,a){var r=n.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var _=Rn.current;if(n.flags&128)return Lo(n,_),null;var E=(_&2)!==0;if(E?(_=_&1|2,n.flags|=128):_&=1,Lo(n,_),l==="backwards"&&t!==null?(kf(t),_n(t,n,r,a),kf(t)):_n(t,n,r,a),r=ge?To:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&jg(t,a,n);else if(t.tag===19)jg(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":a=Zg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null,kf(n)),fu(n,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(a=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&Ql(t)===null){n.child=l;break}t=l.sibling,l.sibling=a,a=l,l=t}fu(n,!0,a,null,c,r);break;case"together":fu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=Zg(n.child),a===null?(l=n.child,n.child=null):(l=a.sibling,a.sibling=null),fu(n,!1,l,a,c,r)}return n.child}function Kg(t,n,a){var r=n.pendingProps;return La(n,n.type,r.value),_n(t,n,r.children,a),n.child}function pa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),ka|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(xr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=la(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=la(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function qf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Xl(t)))}function Jx(t,n,a){switch(n.tag){case 3:U(n,n.stateNode.containerInfo),La(n,cn,t.memoizedState.cache),vr();break;case 27:case 5:tt(n);break;case 4:U(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,_f(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Fa(n),n.flags|=128,null;r=xr(t,n,a,!1);var l=n.child.childLanes;return r||(a&l)!==0?Wg(t,n,a):(Fa(n),t=pa(t,n,a),t!==null?t.sibling:null)}Fa(n);break;case 19:if(n.flags&128)return Yf(t,n,a);if(l=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(xr(t,n,a,!1),r=(a&n.childLanes)!==0),l){if(r)return Yf(t,n,a);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Lo(n,Rn.current),r)break;return null;case 22:return n.lanes=0,Gg(t,n,a,n.pendingProps);case 24:La(n,cn,t.memoizedState.cache)}return pa(t,n,a)}function Qg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)hn=!0;else{if(!qf(t,a)&&(n.flags&128)===0)return hn=!1,Jx(t,n,a);hn=(t.flags&131072)!==0}else hn=!1,ge&&(n.flags&1048576)!==0&&Cm(n,To,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Tr(n.elementType),n.type=t,typeof t=="function")Jc(t)?(r=Cr(t,r),n.tag=1,n=Yg(null,n,t,r,a)):(n.tag=0,n=Ff(null,n,t,r,a));else{if(t!=null){var l=t.$$typeof;if(l===q){n.tag=11,n=Bg(null,n,t,r,a);break t}else if(l===gt){n.tag=14,n=Fg(null,n,t,r,a);break t}else if(l===lt){n.tag=10,n.type=t,n=Kg(null,n,a);break t}}throw n=Lt(t)||t,Error(s(306,n,""))}}return n;case 0:return Ff(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,l=Cr(r,n.pendingProps),Yg(t,n,r,l,a);case 3:t:{if(U(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;l=c.element,hf(t,n),No(n,r,null,a);var _=n.memoizedState;if(r=_.cache,La(n,cn,r),r!==c.cache&&sf(n,[cn],a,!0),Uo(),r=_.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=qg(t,n,r,a);break t}else if(r!==l){l=di(Error(s(424)),n),bo(l),n=qg(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ze=vi(t.firstChild),xn=n,ge=!0,Ua=null,gi=!0,a=Gm(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(vr(),r===l){n=pa(t,n,a);break t}_n(t,n,r,a)}n=n.child}return n;case 26:return gs(t,n),t===null?(a=M0(n.type,null,n.pendingProps,null))?n.memoizedState=a:ge||(n.stateNode=e0(n.type,n.pendingProps,Ye.current,n)):n.memoizedState=M0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return tt(n),t===null&&ge&&(r=n.stateNode=v0(n.type,n.pendingProps,Ye.current),xn=n,gi=!0,l=Ze,ja(n.type)?(Vh=l,Ze=vi(r.firstChild)):Ze=l),_n(t,n,n.pendingProps.children,a),gs(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ge&&((l=r=Ze)&&(r=qy(r,n.type,n.pendingProps,gi),r!==null?(n.stateNode=r,xn=n,Ze=vi(r.firstChild),gi=!1,l=!0):l=!1),l||Na(n)),tt(n),l=n.type,c=n.pendingProps,_=t!==null?t.memoizedProps:null,r=c.children,Lh(l,c)?r=null:_!==null&&Lh(l,_)&&(n.flags|=32),n.memoizedState!==null&&(l=xf(t,n,Gx,null,null,a),Os._currentValue=l),gs(t,n),_n(t,n,r,a),n.child;case 6:return t===null&&ge&&((t=a=Ze)&&(a=Wy(a,n.pendingProps,gi),a!==null?(n.stateNode=a,xn=n,Ze=null,t=!0):t=!1),t||Na(n)),null;case 13:return Wg(t,n,a);case 4:return U(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Ar(n,null,r,a):_n(t,n,r,a),n.child;case 11:return Bg(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,gs(t,n),_n(t,n,r,a),n.child;case 8:return _n(t,n,n.pendingProps.children,a),n.child;case 12:return _n(t,n,n.pendingProps.children,a),n.child;case 10:return Kg(t,n,a);case 9:return l=n.type._context,r=n.pendingProps.children,yr(n),l=bn(l),r=r(l),n.flags|=1,_n(t,n,r,a),n.child;case 14:return Fg(t,n,n.type,n.pendingProps,a);case 15:return Hg(t,n,n.type,n.pendingProps,a);case 19:return Yf(t,n,a);case 31:return Kx(t,n,a);case 22:return Gg(t,n,a,n.pendingProps);case 24:return yr(n),r=bn(cn),t===null?(l=uf(),l===null&&(l=qe,c=of(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=a),l=c),n.memoizedState={parent:r,cache:l},ff(n),La(n,cn,l)):((t.lanes&a)!==0&&(hf(t,n),No(n,null,null,a),Uo()),l=t.memoizedState,c=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),La(n,cn,r)):(r=c.cache,La(n,cn,r),r!==l.cache&&sf(n,[cn],a,!0))),_n(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:ge&&Hl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:gs(t,n),_n(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ma(t){t.flags|=4}function Wf(t,n,a,r,l){var c;if((c=(t.mode&32)!==0)&&(c=a===null?A0(n,r):A0(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(N_())t.flags|=8192;else throw br=Wl,cf}else t.flags&=-16777217}function Jg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!R0(n))if(N_())t.flags|=8192;else throw br=Wl,cf}function hu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Tl():536870912,t.lanes|=n,ys|=n)}function Bo(t,n){if(!ge)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)a|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function $x(t,n,a){var r=n.pendingProps;switch(ef(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),fa(cn),T(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(us(n)?ma(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,af())),Ke(n),null;case 26:var l=n.type,c=n.memoizedState;return t===null?(ma(n),c!==null?(Ke(n),Jg(n,c)):(Ke(n),Wf(n,l,null,r,a))):c?c!==t.memoizedState?(ma(n),Ke(n),Jg(n,c)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ma(n),Ke(n),Wf(n,l,t,r,a)),null;case 27:if(pt(n),a=Ye.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),n.subtreeFlags&=-33554433,null}t=Gt.current,us(n)?Dm(n):(t=v0(l,r,a),n.stateNode=t,ma(n))}return Ke(n),n.subtreeFlags&=-33554433,null;case 5:if(pt(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),n.subtreeFlags&=-33554433,null}if(c=Gt.current,us(n))Dm(n);else{var _=Zo(Ye.current);switch(c){case 1:c=_.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=_.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=_.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=_.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=_.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?_.createElement("select",{is:r.is}):_.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?_.createElement(l,{is:r.is}):_.createElement(l)}}c[Ut]=n,c[Wt]=r;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)c.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=c;t:switch(wn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ma(n)}}return Ke(n),n.subtreeFlags&=-33554433,Wf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ma(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=Ye.current,us(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,l=xn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[Ut]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||Q_(t.nodeValue,a)),t||Na(n,!0)}else t=Zo(t).createTextNode(r),t[Ut]=n,n.stateNode=t}return Ke(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=us(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Ut]=n}else vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else a=af(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ei(n),n):(ei(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=us(n),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[Ut]=n}else vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),l=!1}else l=af(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ei(n),n):(ei(n),null)}return ei(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),hu(n,n.updateQueue),Ke(n),null);case 4:return T(),t===null&&Ch(n.stateNode.containerInfo),n.flags|=67108864,Ke(n),null;case 10:return fa(n.type),Ke(n),null;case 19:if(vf(n),r=n.memoizedState,r===null)return Ke(n),null;if(l=(n.flags&128)!==0,c=r.rendering,c===null)if(l)Bo(r,!1);else{if(rn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=Ql(t),c!==null){for(n.flags|=128,Bo(r,!1),t=c.updateQueue,n.updateQueue=t,hu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)bm(a,t),a=a.sibling;return Lo(n,Rn.current&1|2),ge&&ua(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&V()>Tu&&(n.flags|=128,l=!0,Bo(r,!1),n.lanes=4194304)}else{if(!l)if(t=Ql(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,hu(n,t),Bo(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!ge)return Ke(n),null}else 2*V()-r.renderingStartTime>Tu&&a!==536870912&&(n.flags|=128,l=!0,Bo(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=V(),t.sibling=null,c=Rn.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||ge?Lo(n,c):(a=c,ne(An,n),ne(Rn,a),Ln===null&&(Ln=n)),ge&&ua(n,r.treeForkCount),t}return Ke(n),null;case 22:case 23:return ei(n),gf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),a=n.updateQueue,a!==null&&hu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&wt(Er),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),fa(cn),Ke(n),null;case 25:return null;case 30:return n.flags|=33554432,Ke(n),null}throw Error(s(156,n.tag))}function ty(t,n){switch(ef(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return fa(cn),T(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return pt(n),null;case 31:if(n.memoizedState!==null){if(ei(n),n.alternate===null)throw Error(s(340));vr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ei(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));vr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return vf(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return T(),null;case 10:return fa(n.type),null;case 22:case 23:return ei(n),gf(),t!==null&&wt(Er),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return fa(cn),null;case 25:return null;default:return null}}function $g(t,n){switch(ef(n),n.tag){case 3:fa(cn),T();break;case 26:case 27:case 5:pt(n);break;case 4:T();break;case 31:n.memoizedState!==null&&ei(n);break;case 13:ei(n);break;case 19:vf(n);break;case 10:fa(n.type);break;case 22:case 23:ei(n),gf(),t!==null&&wt(Er);break;case 24:fa(cn)}}function Fo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var l=r.next;a=l;do{if((a.tag&t)===t){r=void 0;var c=a.create,_=a.inst;r=c(),_.destroy=r}a=a.next}while(a!==l)}}catch(E){He(n,n.return,E)}}function Ga(t,n,a){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var _=r.inst,E=_.destroy;if(E!==void 0){_.destroy=void 0,l=n;var N=a,j=E;try{j()}catch(it){He(l,N,it)}}}r=r.next}while(r!==c)}}catch(it){He(n,n.return,it)}}function t_(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Xm(n,a)}catch(r){He(t,t.return,r)}}}function e_(t,n,a){a.props=Cr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){He(t,n,r)}}function Hi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=sa(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=l0(c)),r=l.ref;break;case 7:if(t.stateNode===null){var _=new si(t);p(t.child,!1,ky,_,void 0,void 0),t.stateNode=_}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(E){He(t,n,E)}}function Cn(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(l){He(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(l){He(t,n,l)}else a.current=null}function du(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)p0(t.stateNode,n[a])}function n_(t){for(var n=t.return;n!==null&&(Zf(n)&&p0(t.stateNode,n.stateNode),!jf(n));)n=n.return}function Ho(t){for(var n=t.return;n!==null&&(Zf(n)&&Yy(t.stateNode,n.stateNode),!jf(n));)n=n.return}function jf(t){return t.tag===5||t.tag===3||t.tag===27}function Zf(t){return t&&t.tag===7&&t.stateNode!==null}function Kf(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(l){He(t,t.return,l)}}function Qf(t,n,a){try{var r=t.stateNode;Ay(r,t.type,a,n),r[Wt]=n}catch(l){He(t,t.return,l)}}function i_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&ja(t.type)||t.tag===4}function Jf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||i_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&ja(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $f(t,n,a,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(l,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(l),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ii)),du(t,r),De=!0;else if(l!==4&&(l===27&&(du(t,r),r=null,ja(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for($f(t,n,a,r),t=t.sibling;t!==null;)$f(t,n,a,r),t=t.sibling}function pu(t,n,a,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?a.insertBefore(l,n):a.appendChild(l),du(t,r),De=!0;else if(l!==4&&(l===27&&(du(t,r),r=null,ja(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(pu(t,n,a,r),t=t.sibling;t!==null;)pu(t,n,a,r),t=t.sibling}function a_(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);wn(n,r,a),n[Ut]=t,n[Wt]=a}catch(c){He(t,t.return,c)}}var mu=!1,ni=null;function r_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(mu=!0)}var Gi=null;function s_(){var t=Gi;return Gi=null,t}var kn=0;function _s(t,n,a,r,l){return kn=0,o_(t.child,n,a,r,l)}function o_(t,n,a,r,l){for(var c=!1;t!==null;){if(t.tag===5){var _=t.stateNode;if(r!==null){var E=Ph(_);r.push(E),E.view&&(c=!0)}else c||Ph(_).view&&(c=!0);mu=!0,s0(_,kn===0?n:n+"_"+kn,a),kn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||o_(t.child,n,a,r,l)&&(c=!0));t=t.sibling}return c}function Vi(t,n){for(;t!==null;)t.tag===5?o0(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Vi(t.child,n)),t=t.sibling}function gu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(gu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=oa(n.default,n.share),n!=="none"&&(_s(t,a,n,null,!1)||Vi(t.child,!1))}t=t.sibling}}function th(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,l=sa(r,a),c=oa(r.default,a.paired?r.share:r.enter);c!=="none"?_s(t,l,c,null,!1)?(gu(t),a.paired||n||bs(t,r.onEnter)):Vi(t.child,!1):gu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)th(t,n),t=t.sibling;else gu(t)}function eh(t){if(ni!==null&&ni.size!==0){var n=ni;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var c=oa(a.default,a.share);if(c!=="none"&&(_s(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,bs(t,a.onShare)):Vi(t.child,!1)),n.delete(r),n.size===0)break}}}eh(t)}t=t.sibling}}}function nh(t){if(t.tag===30){var n=t.memoizedProps,a=sa(n,t.stateNode),r=ni!==null?ni.get(a):void 0,l=oa(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(_s(t,a,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,ni.delete(a),bs(t,n.onShare)):bs(t,n.onExit):Vi(t.child,!1)),ni!==null&&eh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)nh(t),t=t.sibling;else ni!==null&&eh(t)}function l_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=sa(n,t.stateNode);n=oa(n.default,n.update),t.flags&=-5,n!=="none"&&_s(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&l_(t);t=t.sibling}}function ih(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Vi(t.child,!1))}ih(t)}t=t.sibling}}function _u(t){if(t.tag===30)t.stateNode.paired=null,Vi(t.child,!1),ih(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)_u(t),t=t.sibling;else ih(t)}function u_(t){for(t=t.child;t!==null;)t.tag===30?Vi(t.child,!1):(t.subtreeFlags&33554432)!==0&&u_(t),t=t.sibling}function ah(t,n,a,r,l,c,_){for(var E=!1;n!==null;){if(n.tag===5){var N=n.stateNode;if(c!==null&&kn<c.length){var j=c[kn],it=Ph(N);(j.view||it.view)&&(E=!0);var mt;if(mt=(t.flags&4)===0)if(it.clip)mt=!0;else{mt=j.rect;var k=it.rect;mt=mt.y!==k.y||mt.x!==k.x||mt.height!==k.height||mt.width!==k.width}mt&&(t.flags|=4),it.abs?it=!j.abs:(j=j.rect,it=it.rect,it=j.height!==it.height||j.width!==it.width),it&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&s0(N,kn===0?a:a+"_"+kn,l),E&&(t.flags&4)!==0||(Gi===null&&(Gi=[]),Gi.push(N,kn===0?r:r+"_"+kn,n.memoizedProps)),kn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&_?t.flags|=n.flags&32:ah(t,n.child,a,r,l,c,_)&&(E=!0));n=n.sibling}return E}function c_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,l=sa(a,r),c=oa(a.default,a.update),_;_=t.memoizedState,t.memoizedState=null,r=t;var E=t.child;kn=0,l=ah(r,E,l,l,c,_,!1),(t.flags&4)!==0&&l&&bs(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&c_(t);t=t.sibling}}var yn=!1,Be=!1,Xi=!1,rh=!1,f_=typeof WeakSet=="function"?WeakSet:Set,Mn=null,ki=!1,Go=!1,vu=!1,sh=!1;function ey(t,n,a){if(t=t.containerInfo,Uh=zs,t=mm(t),Yc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,_=l.focusNode;l=l.focusOffset;try{r.nodeType,_.nodeType}catch{r=null;break t}var E=0,N=-1,j=-1,it=0,mt=0,k=t,$=null;e:for(;;){for(var Ot;k!==r||c!==0&&k.nodeType!==3||(N=E+c),k!==_||l!==0&&k.nodeType!==3||(j=E+l),k.nodeType===3&&(E+=k.nodeValue.length),(Ot=k.firstChild)!==null;)$=k,k=Ot;for(;;){if(k===t)break e;if($===r&&++it===c&&(N=E),$===_&&++mt===l&&(j=E),(Ot=k.nextSibling)!==null)break;k=$,$=k.parentNode}k=Ot}r=N===-1||j===-1?null:{start:N,end:j}}else r=null}r=r||{start:0,end:0}}else r=null;for(Nh={focusedElem:t,selectionRange:r},zs=!1,a=(a&335544064)===a,Mn=n,n=a?9270:1024;Mn!==null;){if(t=Mn,a&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)a&&nh(r[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&r_(t),Su(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&nh(r),Su(a);continue}else if(r!==null&&r.memoizedState!==null){a&&r_(t),Su(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,Mn=r):(a&&l_(t),Su(a))}}ni=null}function Su(t){for(;Mn!==null;){var n=Mn,a=t,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){a=void 0,l=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var _=Cr(n.type,l);a=c.getSnapshotBeforeUpdate(_,r),c.__reactInternalSnapshotBeforeUpdate=a}catch(E){He(n,n.return,E)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Fh(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Fh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=sa(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=oa(l.default,l.update),l!=="none"&&_s(r,a,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Mn=r;break}Mn=n.return}}function h_(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Yi(t,a),r&4&&Fo(5,a);break;case 1:if(Yi(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){He(a,a.return,_)}else{var l=Cr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){He(a,a.return,_)}}r&64&&t_(a),r&512&&Hi(a,a.return);break;case 3:if(Yi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Xm(t,n)}catch(_){He(a,a.return,_)}}break;case 27:n===null&&r&4&&a_(a);case 26:case 5:Yi(t,a),n===null&&r&4&&Kf(a),r&512&&Hi(a,a.return);break;case 12:Yi(t,a);break;case 31:Yi(t,a),r&4&&g_(t,a);break;case 13:Yi(t,a),r&4&&__(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=dy.bind(null,a),jy(t,a))));break;case 22:if(r=a.memoizedState!==null||yn,!r){var c=n!==null&&n.memoizedState!==null||Be;n=yn,l=Be,yn=r,(Be=c)&&!l?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Ai(t,a,r)):Yi(t,a),yn=n,Be=l}break;case 30:Yi(t,a),r&512&&Hi(a,a.return);break;case 7:r&512&&Hi(a,a.return);default:Yi(t,a)}}function oh(t,n){for(t=t.child;t!==null;)d_(t,n),t=t.sibling}function d_(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,_=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=_==null||typeof _=="boolean"?"":(""+_).trim()}}catch(N){He(t,t.return,N)}lh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,De=!0}catch(N){He(t,t.return,N)}break;case 18:try{var E=t.stateNode;n?r0(E,!0):r0(t.stateNode,!1)}catch(N){He(t,t.return,N)}break;case 22:case 23:t.memoizedState===null&&oh(t,n);break;default:oh(t,n)}}function lh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:d_(a,r);break t;case 22:a.memoizedState===null&&lh(a,r);break t;default:lh(a,r)}}t=t.sibling}}function p_(t){var n=t.alternate;n!==null&&(t.alternate=null,p_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ee(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $e=null,Yn=!1;function Ti(t,n,a){for(a=a.child;a!==null;)m_(t,n,a),a=a.sibling}function m_(t,n,a){if(tn&&typeof tn.onCommitFiberUnmount=="function")try{tn.onCommitFiberUnmount(Me,a)}catch{}switch(a.tag){case 26:Be||Cn(a,n),Ti(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!Be&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Be||Cn(a,n),Ho(a);var r=$e,l=Yn;ja(a.type)&&($e=a.stateNode,Yn=!1),Ti(t,n,a),S0(a.stateNode,a.type,a.memoizedProps),$e=r,Yn=l;break;case 5:Be||Cn(a,n),Ho(a);case 6:if(a.tag===6&&Ho(a),r=$e,l=Yn,$e=null,Ti(t,n,a),$e=r,Yn=l,$e!==null)if(Yn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode),De=!0}catch(c){He(a,n,c)}else try{$e.removeChild(a.stateNode),De=!0}catch(c){He(a,n,c)}break;case 18:$e!==null&&(Yn?(t=$e,a0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Ps(t)):a0($e,a.stateNode));break;case 4:r=$e,l=Yn,$e=a.stateNode.containerInfo,Yn=!0,Ti(t,n,a),$e=r,Yn=l;break;case 0:case 11:case 14:case 15:Ga(2,a,n),Be||Ga(4,a,n),Ti(t,n,a);break;case 1:Be||(Cn(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&e_(a,n,r)),Ti(t,n,a);break;case 21:Ti(t,n,a);break;case 22:Be=(r=Be)||a.memoizedState!==null,Ti(t,n,a),Be=r;break;case 30:Cn(a,n),Ti(t,n,a);break;case 7:Be||Cn(a,n),Ti(t,n,a);break;default:Ti(t,n,a)}}function g_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Ps(t)}catch(a){He(n,n.return,a)}}}function __(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ps(t)}catch(a){He(n,n.return,a)}}function ny(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new f_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new f_),n;default:throw Error(s(435,t.tag))}}function xu(t,n){var a=ny(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var l=py.bind(null,t,r);r.then(l,l)}})}function Fn(t,n,a){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],_=t,E=n,N=E;t:for(;N!==null;){switch(N.tag){case 27:if(ja(N.type)){$e=N.stateNode,Yn=!1;break t}break;case 5:$e=N.stateNode,Yn=!1;break t;case 3:case 4:$e=N.stateNode.containerInfo,Yn=!0;break t}N=N.return}if($e===null)throw Error(s(160));m_(_,E,c),$e=null,Yn=!1,_=c.alternate,_!==null&&(_.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)v_(n,t,a),n=n.sibling}var bi=null;function v_(t,n,a){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var _=r[c];_.ref.impl=_.nextImpl}Fn(n,t,a),Hn(t),l&4&&(Ga(3,t,t.return),Fo(3,t),Ga(5,t,t.return));break;case 1:Fn(n,t,a),Hn(t),l&512&&(Be||r===null||Cn(r,r.return)),l&64&&yn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=bi,Fn(n,t,a),Hn(t),l&512&&(Be||r===null||Cn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(yn)t.stateNode=e0(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,l=c.ownerDocument||c;e:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Ne]||r[Ut]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),wn(r,n,a),r[Ut]=t,we(r),n=r;break t;case"link":if(c=b0("link","href",l).get(n+(a.href||""))){for(_=0;_<c.length;_++)if(r=c[_],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(_,1);break e}}r=l.createElement(n),wn(r,n,a),l.head.appendChild(r);break;case"meta":if(c=b0("meta","content",l).get(n+(a.content||""))){for(_=0;_<c.length;_++)if(r=c[_],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(_,1);break e}}r=l.createElement(n),wn(r,n,a),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[Ut]=t,we(r),n=r}t.stateNode=n}else yn||qh(c,t.type,t.stateNode);else t.stateNode=T0(c,a,t.memoizedProps);else l!==a?(l===null?(n=r.stateNode,n===null||Be||n.parentNode.removeChild(n)):l.count--,a===null?yn||qh(c,t.type,t.stateNode):T0(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&Qf(t,t.memoizedProps,r.memoizedProps);break;case 27:Fn(n,t,a),Hn(t),l&512&&(Be||r===null||Cn(r,r.return)),r!==null&&l&4&&Qf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Xi,Xi=!1,Fn(n,t,a),Xi=c,Hn(t),l&512&&(Be||r===null||Cn(r,r.return)),t.flags&32){n=t.stateNode;try{$r(n,""),De=!0}catch(it){He(t,t.return,it)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,Qf(t,n,r!==null?r.memoizedProps:n)),l&1024&&(rh=!0);break;case 6:if(Fn(n,t,a),Hn(t),l&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,De=!0}catch(it){He(t,t.return,it)}}break;case 3:if(De=!1,zu=null,c=bi,bi=Ko(n.containerInfo),Fn(n,t,a),bi=c,Hn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Ps(n.containerInfo)}catch(it){He(t,t.return,it)}rh&&(rh=!1,S_(t)),De=!1;break;case 4:l=Xi,Xi=yn,r=Fp(),c=bi,bi=Ko(t.stateNode.containerInfo),Fn(n,t,a),Hn(t),bi=c,De&&Go&&(vu=!0),De=r,Xi=l;break;case 12:Fn(n,t,a),Hn(t);break;case 31:Fn(n,t,a),Hn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,xu(t,n)));break;case 13:Fn(n,t,a),Hn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Eu=V()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,xu(t,n)));break;case 22:c=t.memoizedState!==null,_=r!==null&&r.memoizedState!==null;var E=yn,N=Be,j=Xi;yn=E||c,Xi=j||c,Be=N||_,Fn(n,t,a),Be=N,Xi=j,yn=E,Hn(t),l&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||_||yn||Be||(n=_||Be,a=yn,r=Be,yn=c||yn,Be=n,Va(t,2),yn=a,Be=r),!c&&Xi||oh(t,c)),l&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,xu(t,a))));break;case 19:Fn(n,t,a),Hn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,xu(t,n)));break;case 30:l&512&&(Be||r===null||Cn(r,r.return)),l=Fp(),c=Go,_=(a&335544064)===a,E=t.memoizedProps,Go=_&&oa(E.default,E.update)!=="none",Fn(n,t,a),Hn(t),_&&r!==null&&De&&(t.flags|=4),Go=c,De=l;break;case 21:break;case 7:l&512&&(Be||r===null||Cn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Fn(n,t,a),Hn(t)}}function Hn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(i_(r)){a=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(Zf(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(jf(l))break;l=l.return}var _=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var E=a.stateNode,N=Jf(t);pu(t,N,E,_);break;case 5:var j=a.stateNode;a.flags&32&&($r(j,""),a.flags&=-33);var it=Jf(t);pu(t,it,j,_);break;case 3:case 4:var mt=a.stateNode.containerInfo,k=Jf(t);$f(t,k,mt,_);break;default:throw Error(s(161))}}catch($){He(t,t.return,$)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function S_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;S_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,zs=!0,n.reset(),zs=!1),t=t.sibling}}function vs(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)x_(n,t),n=n.sibling;else c_(n)}function x_(t,n){var a=t.alternate;if(a===null)th(t,!1);else switch(t.tag){case 3:if(sh=ki=!1,s_(),vs(n,t),!ki&&!vu){if(t=Gi,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var l=t[r+1];o0(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),sh=!0}Gi=null;break;case 5:vs(n,t);break;case 4:r=ki,ki=!1,vs(n,t),ki&&(vu=!0),ki=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?th(t,!1):vs(n,t));break;case 30:r=ki,l=s_(),ki=!1,vs(n,t),ki&&(t.flags|=4);var c=t.memoizedProps,_=t.stateNode;n=sa(c,_),_=sa(a.memoizedProps,_);var E=oa(c.default,c.update);E==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,kn=0,n=ah(t,a,n,_,E,c,!0),kn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(bs(t,t.memoizedProps.onUpdate),Gi=l):l!==null&&(l.push.apply(l,Gi),Gi=l),ki=(t.flags&32)!==0?!0:r;break;default:vs(n,t)}}function Yi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)h_(t,n.alternate,n),n=n.sibling}function Va(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:Ga(4,a,a.return),Va(a,r);break;case 1:Cn(a,a.return);var l=a.stateNode;typeof l.componentWillUnmount=="function"&&e_(a,a.return,l),Va(a,r);break;case 27:(r&2)!==0&&S0(a.stateNode,a.type,a.memoizedProps);case 5:Cn(a,a.return),a.tag!==5&&a.tag!==27||Ho(a),Va(a,r);break;case 6:Ho(a);break;case 26:Cn(a,a.return),l=a.stateNode,a.memoizedState!==null||l===null||Be||l.parentNode.removeChild(l),Va(a,r);break;case 22:a.memoizedState===null&&Va(a,r);break;case 30:Cn(a,a.return),Va(a,r);break;case 7:Cn(a,a.return);default:Va(a,r)}t=t.sibling}}function Ai(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,l=t,c=n,_=c.flags,E=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Ai(l,c,a),Fo(4,c);break;case 1:if(Ai(l,c,a),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(it){He(r,r.return,it)}if(r=c,l=r.updateQueue,l!==null){var N=r.stateNode;try{var j=l.shared.hiddenCallbacks;if(j!==null)for(l.shared.hiddenCallbacks=null,l=0;l<j.length;l++)Vm(j[l],N)}catch(it){He(r,r.return,it)}}E&&_&64&&t_(c),Hi(c,c.return);break;case 27:(a&2)!==0&&a_(c);case 5:c.tag!==5&&c.tag!==27||n_(c),Ai(l,c,a),E&&r===null&&_&4&&Kf(c),Hi(c,c.return);break;case 6:n_(c);break;case 26:N=c.stateNode,c.memoizedState!==null||N===null||yn||qh(Ko(N.ownerDocument),c.type,N),Ai(l,c,a),E&&r===null&&_&4&&Kf(c),Hi(c,c.return);break;case 12:Ai(l,c,a);break;case 31:Ai(l,c,a),E&&_&4&&g_(l,c);break;case 13:Ai(l,c,a),E&&_&4&&__(l,c);break;case 22:c.memoizedState===null&&Ai(l,c,a),Hi(c,c.return);break;case 30:Ai(l,c,a),Hi(c,c.return);break;case 7:Hi(c,c.return);default:Ai(l,c,a)}n=n.sibling}}function uh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ao(a))}function ch(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ao(t))}function _i(t,n,a,r){var l=(a&335544064)===a;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)y_(t,n,a,r),n=n.sibling;else l&&u_(n)}function y_(t,n,a,r){var l=(a&335544064)===a;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&_u(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:_i(t,n,a,r),c&2048&&Fo(9,n);break;case 1:_i(t,n,a,r);break;case 3:_i(t,n,a,r),l&&sh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&Ao(c)));break;case 12:if(c&2048){_i(t,n,a,r),c=n.stateNode;try{var _=n.memoizedProps,E=_.id,N=_.onPostCommit;typeof N=="function"&&N(E,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(j){He(n,n.return,j)}}else _i(t,n,a,r);break;case 31:_i(t,n,a,r);break;case 13:_i(t,n,a,r);break;case 23:break;case 22:_=n.stateNode,E=n.alternate,n.memoizedState!==null?(l&&E!==null&&E.memoizedState===null&&_u(E),_._visibility&2?_i(t,n,a,r):Vo(t,n)):(l&&E!==null&&E.memoizedState!==null&&_u(n),_._visibility&2?_i(t,n,a,r):(_._visibility|=2,Ss(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&uh(E,n);break;case 24:_i(t,n,a,r),c&2048&&ch(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(Vi(c.child,!0),Vi(n.child,!0))),_i(t,n,a,r);break;default:_i(t,n,a,r)}}function Ss(t,n,a,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,_=n,E=a,N=r,j=_.flags;switch(_.tag){case 0:case 11:case 15:Ss(c,_,E,N,l),Fo(8,_);break;case 23:break;case 22:var it=_.stateNode;_.memoizedState!==null?it._visibility&2?Ss(c,_,E,N,l):Vo(c,_):(it._visibility|=2,Ss(c,_,E,N,l)),l&&j&2048&&uh(_.alternate,_);break;case 24:Ss(c,_,E,N,l),l&&j&2048&&ch(_.alternate,_);break;default:Ss(c,_,E,N,l)}n=n.sibling}}function Vo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,l=r.flags;switch(r.tag){case 22:Vo(a,r),l&2048&&uh(r.alternate,r);break;case 24:Vo(a,r),l&2048&&ch(r.alternate,r);break;default:Vo(a,r)}n=n.sibling}}var wr=8192;function Dr(t,n,a){if(t.subtreeFlags&wr)for(t=t.child;t!==null;)M_(t,n,a),t=t.sibling}function M_(t,n,a){switch(t.tag){case 26:Dr(t,n,a),t.flags&wr&&(t.memoizedState!==null?lM(a,bi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&w0(a,t)));break;case 5:Dr(t,n,a),t.flags&wr&&(t=t.stateNode,(n&335544128)===n&&w0(a,t));break;case 3:case 4:var r=bi;bi=Ko(t.stateNode.containerInfo),Dr(t,n,a),bi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=wr,wr=16777216,Dr(t,n,a),wr=r):Dr(t,n,a));break;case 30:if((t.flags&wr)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,ni===null&&(ni=new Map),ni.set(r,l)}Dr(t,n,a);break;default:Dr(t,n,a)}}function E_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Xo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Mn=r,b_(r,t)}E_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)T_(t),t=t.sibling}function T_(t){switch(t.tag){case 0:case 11:case 15:Xo(t),t.flags&2048&&Ga(9,t,t.return);break;case 3:Xo(t);break;case 12:Xo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,yu(t)):Xo(t);break;default:Xo(t)}}function yu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Mn=r,b_(r,t)}E_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ga(8,n,n.return),yu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,yu(n));break;default:yu(n)}t=t.sibling}}function b_(t,n){for(;Mn!==null;){var a=Mn;switch(a.tag){case 0:case 11:case 15:Ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:Ao(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Mn=r;else t:for(a=t;Mn!==null;){r=Mn;var l=r.sibling,c=r.return;if(p_(r),r===a){Mn=null;break t}if(l!==null){l.return=c,Mn=l;break t}Mn=c}}}var iy={getCacheForType:function(t){var n=bn(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return bn(cn).controller.signal}},ay=typeof WeakMap=="function"?WeakMap:Map,Oe=0,qe=null,xe=null,Ee=0,Fe=0,ii=null,Xa=!1,xs=!1,fh=!1,ga=0,rn=0,ka=0,Ur=0,Mu=0,ai=0,ys=0,ko=null,qn=null,hh=!1,Eu=0,A_=0,Tu=1/0,bu=null,Ya=null,en=0,Ri=null,Nr=null,qi=0,dh=0,ph=null,R_=null,Ms=null,Es=null,Ts=null,Yo=0,Au=null;function ri(){return(Oe&2)!==0&&Ee!==0?Ee&-Ee:Et.T!==null?Th():bt()}function C_(){if(ai===0)if((Ee&536870912)===0||ge){var t=ia;ia<<=1,(ia&3932160)===0&&(ia=262144),ai=t}else ai=536870912;return t=An.current,t!==null&&(t.flags|=32),ai}function bs(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=l0(sa(t.memoizedProps,a))),Es===null&&(Es=[]),Es.push(n.bind(null,r))}}function Wn(t,n,a){(t===qe&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)&&(As(t,0),qa(t,Ee,ai,!1)),dr(t,a),((Oe&2)===0||t!==qe)&&(t===qe&&((Oe&2)===0&&(Ur|=a),rn===4&&qa(t,Ee,ai,!1)),Wi(t))}function w_(t,n,a){if((Oe&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Aa(t,n),l=r?oy(t,n):gh(t,n,!0),c=r;do{if(l===0){xs&&!r&&qa(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!ry(a)){l=gh(t,n,!1),c=!1;continue}if(l===2){if(c=n,t.errorRecoveryDisabledLanes&c)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var E=t;l=ko;var N=E.current.memoizedState.isDehydrated;if(N&&(As(E,_).flags|=256),_=gh(E,_,!1),_!==2&&_!==6){if(fh&&!N){E.errorRecoveryDisabledLanes|=c,Ur|=c,l=4;break t}c=qn,qn=l,c!==null&&(qn===null?qn=c:qn.push.apply(qn,c))}l=_}if(c=!1,l!==2)continue}}if(l===1){As(t,0),qa(t,n,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:qa(r,n,ai,!Xa);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=Eu+300-V(),10<l)){if(qa(r,n,ai,!Xa),hr(r,0,!0)!==0)break t;qi=n,r.timeoutHandle=zh(D_.bind(null,r,a,qn,bu,hh,n,ai,Ur,ys,Xa,c,"Throttled",-0,0),l);break t}D_(r,a,qn,bu,hh,n,ai,Ur,ys,Xa,c,null,-0,0)}}break}while(!0);Wi(t)}function D_(t,n,a,r,l,c,_,E,N,j,it,mt,k,$){t.timeoutHandle=-1;var Ot=n.subtreeFlags,jt=(c&335544064)===c;if(mt=null,(jt||Ot&8192||(Ot&16785408)===16785408)&&(mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ii},ni=null,M_(n,c,mt),jt&&(Ot=mt,jt=t.containerInfo,jt=(jt.nodeType===9?jt:jt.ownerDocument).__reactViewTransition,jt!=null&&(Ot.count++,Ot.waitingForViewTransition=!0,Ot=$o.bind(Ot),jt.finished.then(Ot,Ot))),Ot=(c&62914560)===c?Eu-V():(c&4194048)===c?A_-V():0,Ot=uM(mt,Ot),Ot!==null)){qi=c,t.cancelPendingCommit=Ot(B_.bind(null,t,n,c,a,r,l,_,E,N,j,it,mt,null,k,$)),qa(t,c,_,!j);return}B_(t,n,c,a,r,l,_,E,N,j,it,mt)}function ry(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var l=a[r],c=l.getSnapshot;l=l.value;try{if(!ti(c(),l))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(t,n,a,r){n=El(t,n),n&=~Mu,n&=~Ur,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var l=n;0<l;){var c=31-Un(l),_=1<<c;r[c]=-1,l&=~_}a!==0&&A(t,a,n)}function Ru(){return(Oe&6)===0?(qo(0),!1):!0}function mh(){if(xe!==null){if(Fe===0)var t=xe.return;else t=xe,ca=Sr=null,Ef(t),hs=null,wo=0,t=xe;for(;t!==null;)$g(t.alternate,t),t=t.return;xe=null}}function As(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,wy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),qi=0,mh(),qe=t,xe=a=la(t.current,null),Ee=n,Fe=0,ii=null,Xa=!1,xs=Aa(t,n),fh=!1,ys=ai=Mu=Ur=ka=rn=0,qn=ko=null,hh=!1,ga=El(t,n),zl(),a}function U_(t,n){fe=null,Et.H=su,n===fs||n===ql?(n=Bm(),Fe=3):n===cf?(n=Bm(),Fe=4):Fe=n===Bf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ii=n,xe===null&&(rn=1,ou(t,di(n,t.current)))}function N_(){var t=An.current;return t===null?!0:(Ee&4194048)===Ee?Ln===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?t===Ln:!1}function L_(){var t=Et.H;return Et.H=su,t===null?su:t}function O_(){var t=Et.A;return Et.A=iy,t}function Cu(){rn=4,Xa||(Ee&4194048)!==Ee&&An.current!==null||(xs=!0),(ka&134217727)===0&&(Ur&134217727)===0||qe===null||qa(qe,Ee,ai,!1)}function gh(t,n,a){var r=Oe;Oe|=2;var l=L_(),c=O_();(qe!==t||Ee!==n)&&(bu=null,As(t,n)),n=!1;var _=rn;t:do try{if(Fe!==0&&xe!==null){var E=xe,N=ii;switch(Fe){case 8:mh(),_=6;break t;case 3:case 2:case 9:case 6:An.current===null&&(n=!0);var j=Fe;if(Fe=0,ii=null,Rs(t,E,N,j),a&&xs){_=0;break t}break;default:j=Fe,Fe=0,ii=null,Rs(t,E,N,j)}}sy(),_=rn;break}catch(it){U_(t,it)}while(!0);return n&&t.shellSuspendCounter++,ca=Sr=null,Oe=r,Et.H=l,Et.A=c,xe===null&&(qe=null,Ee=0,zl()),_}function sy(){for(;xe!==null;)z_(xe)}function oy(t,n){var a=Oe;Oe|=2;var r=L_(),l=O_();qe!==t||Ee!==n?(bu=null,Tu=V()+500,As(t,n)):xs=Aa(t,n);t:do try{if(Fe!==0&&xe!==null){n=xe;var c=ii;e:switch(Fe){case 1:Fe=0,ii=null,Rs(t,n,c,1);break;case 2:case 9:if(Pm(c)){Fe=0,ii=null,P_(n);break}n=function(){Fe!==2&&Fe!==9||qe!==t||(Fe=7),Wi(t)},c.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:Pm(c)?(Fe=0,ii=null,P_(n)):(Fe=0,ii=null,Rs(t,n,c,7));break;case 5:var _=null;switch(xe.tag){case 26:_=xe.memoizedState;case 5:case 27:var E=xe;if(_?R0(_):E.stateNode.complete){Fe=0,ii=null;var N=E.sibling;if(N!==null)xe=N;else{var j=E.return;j!==null?(xe=j,wu(j)):xe=null}break e}}Fe=0,ii=null,Rs(t,n,c,5);break;case 6:Fe=0,ii=null,Rs(t,n,c,6);break;case 8:mh(),rn=6;break t;default:throw Error(s(462))}}ly();break}catch(it){U_(t,it)}while(!0);return ca=Sr=null,Et.H=r,Et.A=l,Oe=a,xe!==null?0:(qe=null,Ee=0,zl(),rn)}function ly(){for(;xe!==null&&!Pt();)z_(xe)}function z_(t){var n=Qg(t.alternate,t,ga);t.memoizedProps=t.pendingProps,n===null?wu(t):xe=n}function P_(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=kg(a,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=kg(a,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:Ef(n);var r=n;r===xn&&(ge?(Gl(r),r.tag===5&&r.stateNode!=null&&(Ze=r.stateNode)):(Gl(r),ge=!0));default:$g(a,n),n=xe=bm(n,ga),n=Qg(a,n,ga)}t.memoizedProps=t.pendingProps,n===null?wu(t):xe=n}function Rs(t,n,a,r){ca=Sr=null,Ef(n),hs=null,wo=0;var l=n.return;try{if(Zx(t,l,n,a,Ee)){rn=1,ou(t,di(a,t.current)),xe=null;return}}catch(c){if(l!==null)throw xe=l,c;rn=1,ou(t,di(a,t.current)),xe=null;return}n.flags&32768?(ge||r===1?t=!0:xs||(Ee&536870912)!==0?t=!1:(Xa=t=!0,(r===2||r===9||r===3||r===6)&&(r=An.current,r!==null&&r.tag===13&&(r.flags|=16384))),I_(n,t)):wu(n)}function wu(t){var n=t;do{if((n.flags&32768)!==0){I_(n,Xa);return}t=n.return;var a=$x(n.alternate,n,ga);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=t}while(n!==null);rn===0&&(rn=5)}function I_(t,n){do{var a=ty(t.alternate,t);if(a!==null){a.flags&=32767,xe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xe=t;return}xe=t=a}while(t!==null);rn=6,xe=null}function B_(t,n,a,r,l,c,_,E,N,j,it,mt){t.cancelPendingCommit=null;do Du();while(en!==0);if((Oe&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===qe&&(xe=qe=null,Ee=0),Nr=n,Ri=t,qi=a,ph=l,R_=r,uy(t,n,a,_,E,N,mt)}}function uy(t,n,a,r,l,c,_){var E=n.lanes|n.childLanes;if(dh=E,E|=Kc,Rc(t,a,E,r,l,c),Es=null,(a&335544064)===a?(Ts=Ix(t),r=10262):(Ts=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,my(Tt,function(){return xh(),null})):(t.callbackNode=null,t.callbackPriority=0),mu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Et.T,Et.T=null,l=Yt.p,Yt.p=2,c=Oe,Oe|=4;try{ey(t,n,a)}finally{Oe=c,Yt.p=l,Et.T=r}}en=1,mu?Ms=zy(_,t.containerInfo,Ts,_h,vh,fy,Sh,xh,cy):(_h(),vh(),Sh())}function cy(t){if(en!==0){var n=Ri.onRecoverableError;n(t,{componentStack:null})}}function fy(){en===3&&(en=0,x_(Nr,Ri),en=4)}function _h(){if(en===1){en=0;var t=Ri,n=Nr,a=qi,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Et.T,Et.T=null;var l=Yt.p;Yt.p=2;var c=Oe;Oe|=4;try{Go=vu=!1,v_(n,t,a),a=Nh;var _=mm(t.containerInfo),E=a.focusedElem,N=a.selectionRange;if(_!==E&&E&&E.ownerDocument&&pm(E.ownerDocument.documentElement,E)){if(N!==null&&Yc(E)){var j=N.start,it=N.end;if(it===void 0&&(it=j),"selectionStart"in E)E.selectionStart=j,E.selectionEnd=Math.min(it,E.value.length);else{var mt=E.ownerDocument||document,k=mt&&mt.defaultView||window;if(k.getSelection){var $=k.getSelection(),Ot=E.textContent.length,jt=Math.min(N.start,Ot),he=N.end===void 0?jt:Math.min(N.end,Ot);!$.extend&&jt>he&&(_=he,he=jt,jt=_);var W=dm(E,jt),H=dm(E,he);if(W&&H&&($.rangeCount!==1||$.anchorNode!==W.node||$.anchorOffset!==W.offset||$.focusNode!==H.node||$.focusOffset!==H.offset)){var J=mt.createRange();J.setStart(W.node,W.offset),$.removeAllRanges(),jt>he?($.addRange(J),$.extend(H.node,H.offset)):(J.setEnd(H.node,H.offset),$.addRange(J))}}}}for(mt=[],$=E;$=$.parentNode;)$.nodeType===1&&mt.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<mt.length;E++){var dt=mt[E];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}zs=!!Uh,Nh=Uh=null}finally{Oe=c,Yt.p=l,Et.T=r}}t.current=n,en=2}}function vh(){if(en===2){en=0;var t=Ri,n=Nr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=Et.T,Et.T=null;var r=Yt.p;Yt.p=2;var l=Oe;Oe|=4;try{h_(t,n.alternate,n)}finally{Oe=l,Yt.p=r,Et.T=a}}en=3}}function Sh(){if(en===4||en===3){en=0;var t=Ms;Ms=null,ce();var n=Ri,a=Nr,r=qi,l=R_,c=(r&335544064)===r?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?en=5:(en=0,Nr=Ri=null,F_(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(Ya=null),K(r),a=a.stateNode,tn&&typeof tn.onCommitFiberRoot=="function")try{tn.onCommitFiberRoot(Me,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=Et.T,c=Yt.p,Yt.p=2,Et.T=null;try{for(var _=n.onRecoverableError,E=0;E<l.length;E++){var N=l[E];_(N.value,{componentStack:N.stack})}}finally{Et.T=a,Yt.p=c}}if(l=Es,_=Ts,Ts=null,l!==null&&(Es=null,_===null&&(_=[]),t!==null))for(N=0;N<l.length;N++)a=(0,l[N])(_),a!==void 0&&t.finished.finally(a);(qi&3)!==0&&Du(),Wi(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===Au?Yo++:(Yo=0,Au=n):(Yo=0,Au=null),qo(0)}}function F_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ao(n)))}function Du(){return Ms!==null&&(Ms.skipTransition(),Ms=null),_h(),vh(),Sh(),xh()}function xh(){if(en!==5)return!1;var t=Ri,n=dh;dh=0;var a=K(qi),r=Et.T,l=Yt.p;try{Yt.p=32>a?32:a,Et.T=null,a=ph,ph=null;var c=Ri,_=qi;if(en=0,Nr=Ri=null,qi=0,(Oe&6)!==0)throw Error(s(331));var E=Oe;if(Oe|=4,T_(c.current),y_(c,c.current,_,a),Oe=E,qo(0,!1),tn&&typeof tn.onPostCommitFiberRoot=="function")try{tn.onPostCommitFiberRoot(Me,c)}catch{}return!0}finally{Yt.p=l,Et.T=r,F_(t,n)}}function H_(t,n,a){n=di(a,n),n=If(t.stateNode,n,2),t=Ia(t,n,2),t!==null&&(dr(t,2),Wi(t))}function He(t,n,a){if(t.tag===3)H_(t,t,a);else for(;n!==null;){if(n.tag===3){H_(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Ya===null||!Ya.has(r))){t=di(a,t),a=Pg(2),r=Ia(n,a,2),r!==null&&(Ig(a,r,n,t),dr(r,2),Wi(r));break}}n=n.return}}function yh(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new ay;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(a)||(fh=!0,l.add(a),t=hy.bind(null,t,n,a),n.then(t,t))}function hy(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,qe===t&&(Ee&a)===a&&((rn===4||rn===3&&(Ee&62914560)===Ee&&300>V()-Eu)&&(Oe&2)===0?As(t,0):Mu|=a,ys===Ee&&(ys=0)),Wi(t)}function G_(t,n){n===0&&(n=Tl()),t=gr(t,n),t!==null&&(dr(t,n),Wi(t))}function dy(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),G_(t,a)}function py(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(a=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),G_(t,a)}function my(t,n){return re(t,n)}var Cs=null,ws=null,Mh=!1,Uu=!1,Eh=!1,Wa=0;function Wi(t){t!==ws&&t.next===null&&(ws===null?Cs=ws=t:ws=ws.next=t),Uu=!0,Mh||(Mh=!0,_y())}function qo(t,n){if(!Eh&&Uu){Eh=!0;do for(var a=!1,r=Cs;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var _=r.suspendedLanes,E=r.pingedLanes;c=(1<<31-Un(42|t)+1)-1,c&=l&~(_&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,Y_(r,c))}else c=Ee,c=hr(r,r===qe?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||Aa(r,c)||(a=!0,Y_(r,c));r=r.next}while(a);Eh=!1}}function gy(){V_()}function V_(){Uu=Mh=!1;var t=0;Wa!==0&&Cy()&&(t=Wa);for(var n=V(),a=null,r=Cs;r!==null;){var l=r.next,c=X_(r,n);c===0?(r.next=null,a===null?Cs=l:a.next=l,l===null&&(ws=a)):(a=r,(t!==0||(c&3)!==0)&&(Uu=!0)),r=l}en!==0&&en!==5||qo(t),Wa!==0&&(Wa=0)}function X_(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var _=31-Un(c),E=1<<_,N=l[_];N===-1?((E&a)===0||(E&r)!==0)&&(l[_]=Ac(E,n)):N<=n&&(t.expiredLanes|=E),c&=~E}if(n=qe,a=Ee,a=hr(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Fe===2||Fe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Qt(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Aa(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&Qt(r),K(a)){case 2:case 8:a=kt;break;case 32:a=Tt;break;case 268435456:a=Zt;break;default:a=Tt}return r=k_.bind(null,t),a=re(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&Qt(r),t.callbackPriority=2,t.callbackNode=null,2}function k_(t,n){if(en!==0&&en!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Du()&&t.callbackNode!==a)return null;var r=Ee;return r=hr(t,t===qe?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(w_(t,r,n),X_(t,V()),t.callbackNode!=null&&t.callbackNode===a?k_.bind(null,t):null)}function Y_(t,n){if(Du())return null;w_(t,n,!0)}function _y(){Dy(function(){(Oe&6)!==0?re(Nt,gy):V_()})}function Th(){if(Wa===0){var t=Mr;t===0&&(t=cr,cr<<=1,(cr&261888)===0&&(cr=256)),Wa=t}return Wa}function q_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Rl(t)}function vy(t,n,a,r,l){if(n==="submit"&&a&&a.stateNode===l){var c=q_((l[Wt]||null).action),_=r.submitter;_&&(n=(n=_[Wt]||null)?q_(n.formAction):_.getAttribute("formAction"),n!==null&&(c=n,_=null));var E=new Ul("action","action",null,r,l);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Wa!==0){var N=new FormData(l,_);Nf(a,{pending:!0,data:N,method:l.method,action:c},null,N)}}else typeof c=="function"&&(E.preventDefault(),N=new FormData(l,_),Nf(a,{pending:!0,data:N,method:l.method,action:c},c,N))},currentTarget:l}]})}}for(var bh=0;bh<Zc.length;bh++){var Ah=Zc[bh],Sy=Ah.toLowerCase(),xy=Ah[0].toUpperCase()+Ah.slice(1);Ei(Sy,"on"+xy)}Ei(vm,"onAnimationEnd"),Ei(Sm,"onAnimationIteration"),Ei(xm,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(wx,"onTransitionRun"),Ei(Dx,"onTransitionStart"),Ei(Ux,"onTransitionCancel"),Ei(ym,"onTransitionEnd"),nn("onMouseEnter",["mouseout","mouseover"]),nn("onMouseLeave",["mouseout","mouseover"]),nn("onPointerEnter",["pointerout","pointerover"]),nn("onPointerLeave",["pointerout","pointerover"]),un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),un("onBeforeInput",["compositionend","keypress","textInput","paste"]),un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wo));function W_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],l=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var _=r.length-1;0<=_;_--){var E=r[_],N=E.instance,j=E.currentTarget;if(E=E.listener,N!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=j;try{c(l)}catch(it){Ol(it)}l.currentTarget=null,c=N}else for(_=0;_<r.length;_++){if(E=r[_],N=E.instance,j=E.currentTarget,E=E.listener,N!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=j;try{c(l)}catch(it){Ol(it)}l.currentTarget=null,c=N}}}}function ye(t,n){var a=n[te];a===void 0&&(a=n[te]=new Set);var r=t+"__bubble";a.has(r)||(j_(n,t,2,!1),a.add(r))}function Rh(t,n,a){var r=0;n&&(r|=4),j_(a,t,r,n)}var Nu="_reactListening"+Math.random().toString(36).slice(2);function Ch(t){if(!t[Nu]){t[Nu]=!0,je.forEach(function(a){a!=="selectionchange"&&(yy.has(a)||Rh(a,!1,t),Rh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Nu]||(n[Nu]=!0,Rh("selectionchange",!1,n))}}function j_(t,n,a,r){switch(I0(n)){case 2:var l=dM;break;case 8:l=pM;break;default:l=jh}a=l.bind(null,n,a,t),l=void 0,!zc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(n,a,{capture:!0,passive:l}):t.addEventListener(n,a,!0):l!==void 0?t.addEventListener(n,a,{passive:l}):t.addEventListener(n,a,!1)}function wh(t,n,a,r,l){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var _=r.tag;if(_===3||_===4){var E=r.stateNode.containerInfo;if(E===l)break;if(_===4)for(_=r.return;_!==null;){var N=_.tag;if((N===3||N===4)&&_.stateNode.containerInfo===l)return;_=_.return}for(;E!==null;){if(_=Le(E),_===null)return;if(N=_.tag,N===5||N===6||N===26||N===27){r=c=_;continue t}E=E.parentNode}}r=r.return}jp(function(){var j=c,it=Lc(a),mt=[];t:{var k=Mm.get(t);if(k!==void 0){var $=Ul,Ot=t;switch(t){case"keypress":if(wl(a)===0)break t;case"keydown":case"keyup":$=rx;break;case"focusin":Ot="focus",$=Fc;break;case"focusout":Ot="blur",$=Fc;break;case"beforeblur":case"afterblur":$=Fc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=Qp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=WS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=cx;break;case vm:case Sm:case xm:$=KS;break;case ym:$=hx;break;case"scroll":case"scrollend":$=YS;break;case"wheel":$=px;break;case"copy":case"cut":case"paste":$=JS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=$p;break;case"submit":$=lx;break;case"toggle":case"beforetoggle":$=gx}var jt=(n&4)!==0,he=!jt&&(t==="scroll"||t==="scrollend"),W=jt?k!==null?k+"Capture":null:k;jt=[];for(var H=j,J;H!==null;){var dt=H;if(J=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||J===null||W===null||(dt=mo(H,W),dt!=null&&jt.push(jo(H,dt,J))),he)break;H=H.return}0<jt.length&&(k=new $(k,Ot,null,a,it),mt.push({event:k,listeners:jt}))}}if((n&7)===0){t:{if($=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",$&&a!==Nc&&(Ot=a.relatedTarget||a.fromElement)&&(Le(Ot)||Ot[ie]))break t;(k||$)&&(Ot=it.window===it?it:($=it.ownerDocument)?$.defaultView||$.parentWindow:window,k?($=a.relatedTarget||a.toElement,k=j,$=$?Le($):null,$!==null&&(he=f($),jt=$.tag,$!==he||jt!==5&&jt!==27&&jt!==6)&&($=null)):(k=null,$=j),k!==$&&(jt=Qp,dt="onMouseLeave",W="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(jt=$p,dt="onPointerLeave",W="onPointerEnter",H="pointer"),he=k==null?Ot:gn(k),J=$==null?Ot:gn($),Ot=new jt(dt,H+"leave",k,a,it),Ot.target=he,Ot.relatedTarget=J,dt=null,Le(it)===j&&(jt=new jt(W,H+"enter",$,a,it),jt.target=J,jt.relatedTarget=he,dt=jt),he=dt,jt=k&&$?B(k,$,My):null,k!==null&&Z_(mt,Ot,k,jt,!1),$!==null&&he!==null&&Z_(mt,he,$,jt,!0)))}t:{if(k=j?gn(j):window,$=k.nodeName&&k.nodeName.toLowerCase(),$==="select"||$==="input"&&k.type==="file")var Vt=om;else if(rm(k))if(lm)Vt=Ax;else{Vt=Tx;var Te=Ex}else $=k.nodeName,!$||$.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?j&&Uc(j.elementType)&&(Vt=om):Vt=bx;if(Vt&&(Vt=Vt(t,j))){sm(mt,Vt,a,it);break t}Te&&Te(t,k,j)}switch(Te=j?gn(j):window,t){case"focusin":(rm(Te)||Te.contentEditable==="true")&&(is=Te,qc=j,Eo=null);break;case"focusout":Eo=qc=is=null;break;case"mousedown":Wc=!0;break;case"contextmenu":case"mouseup":case"dragend":Wc=!1,gm(mt,a,it);break;case"selectionchange":if(Cx)break;case"keydown":case"keyup":gm(mt,a,it)}var $t;if(Gc)t:{switch(t){case"compositionstart":var se="onCompositionStart";break t;case"compositionend":se="onCompositionEnd";break t;case"compositionupdate":se="onCompositionUpdate";break t}se=void 0}else ns?im(t,a)&&(se="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(se="onCompositionStart");se&&(tm&&a.locale!=="ko"&&(ns||se!=="onCompositionStart"?se==="onCompositionEnd"&&ns&&($t=Zp()):(Ca=it,Pc="value"in Ca?Ca.value:Ca.textContent,ns=!0)),Te=Lu(j,se),0<Te.length&&(se=new Jp(se,t,null,a,it),mt.push({event:se,listeners:Te}),$t?se.data=$t:($t=am(a),$t!==null&&(se.data=$t)))),($t=vx?Sx(t,a):xx(t,a))&&(se=Lu(j,"onBeforeInput"),0<se.length&&(Te=new Jp("onBeforeInput","beforeinput",null,a,it),mt.push({event:Te,listeners:se}),Te.data=$t)),vy(mt,t,j,a,it)}W_(mt,n)})}function jo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Lu(t,n){for(var a=n+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=mo(t,a),l!=null&&r.unshift(jo(t,l,c)),l=mo(t,n),l!=null&&r.push(jo(t,l,c))),t.tag===3)return r;t=t.return}return[]}function My(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Z_(t,n,a,r,l){for(var c=n._reactName,_=[];a!==null&&a!==r;){var E=a,N=E.alternate,j=E.stateNode;if(E=E.tag,N!==null&&N===r)break;E!==5&&E!==26&&E!==27||j===null||(N=j,l?(j=mo(a,c),j!=null&&_.unshift(jo(a,j,N))):l||(j=mo(a,c),j!=null&&_.push(jo(a,j,N)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var Ey=/\r\n?/g,Ty=/\u0000|\uFFFD/g;function K_(t){return(typeof t=="string"?t:""+t).replace(Ey,`
`).replace(Ty,"")}function Q_(t,n){return n=K_(n),K_(t)===n}function Ge(t,n,a,r,l,c){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||$r(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&$r(t,""+r);else return;break;case"className":Al(t,"class",r);break;case"tabIndex":Al(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Al(t,a,r);break;case"style":qp(t,r,c);return;case"data":if(n!=="object"){Al(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Rl(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&Ge(t,n,"name",l.name,l,null),Ge(t,n,"formEncType",l.formEncType,l,null),Ge(t,n,"formMethod",l.formMethod,l,null),Ge(t,n,"formTarget",l.formTarget,l,null)):(Ge(t,n,"encType",l.encType,l,null),Ge(t,n,"method",l.method,l,null),Ge(t,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Rl(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Ii);return;case"onScroll":r!=null&&ye("scroll",t);return;case"onScrollEnd":r!=null&&ye("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Rl(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":ye("beforetoggle",t),ye("toggle",t),bl(t,"popover",r);break;case"xlinkActuate":aa(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":aa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":aa(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":aa(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":aa(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":aa(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":aa(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":aa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":aa(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":bl(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=XS.get(a)||a,bl(t,a,r);else return}De=!0}function Dh(t,n,a,r,l,c){switch(a){case"style":qp(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(l.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")$r(t,r);else if(typeof r=="number"||typeof r=="bigint")$r(t,""+r);else return;break;case"onScroll":r!=null&&ye("scroll",t);return;case"onScrollEnd":r!=null&&ye("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Ii);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Pn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(l=a.endsWith("Capture"),c=a.slice(2,l?a.length-7:void 0),n=t[Wt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,r,l);break t}De=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):bl(t,a,r)}return}De=!0}function wn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",t),ye("load",t);var r=!1,l=!1,c;for(c in a)if(a.hasOwnProperty(c)){var _=a[c];if(_!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(t,n,c,_,a,null)}}l&&Ge(t,n,"srcSet",a.srcSet,a,null),r&&Ge(t,n,"src",a.src,a,null);return;case"input":ye("invalid",t);var E=c=_=l=null,N=null,j=null;for(r in a)if(a.hasOwnProperty(r)){var it=a[r];if(it!=null)switch(r){case"name":l=it;break;case"type":_=it;break;case"checked":N=it;break;case"defaultChecked":j=it;break;case"value":c=it;break;case"defaultValue":E=it;break;case"children":case"dangerouslySetInnerHTML":if(it!=null)throw Error(s(137,n));break;default:Ge(t,n,r,it,a,null)}}Vp(t,c,E,N,j,_,l,!1);return;case"select":ye("invalid",t),r=_=c=null;for(l in a)if(a.hasOwnProperty(l)&&(E=a[l],E!=null))switch(l){case"value":c=E;break;case"defaultValue":_=E;break;case"multiple":r=E;default:Ge(t,n,l,E,a,null)}n=c,a=_,t.multiple=!!r,n!=null?Jr(t,!!r,n,!1):a!=null&&Jr(t,!!r,a,!0);return;case"textarea":ye("invalid",t),c=l=r=null;for(_ in a)if(a.hasOwnProperty(_)&&(E=a[_],E!=null))switch(_){case"value":r=E;break;case"defaultValue":l=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Ge(t,n,_,E,a,null)}kp(t,r,l,c);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(r=a[N],r!=null))switch(N){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Ge(t,n,N,r,a,null)}return;case"dialog":ye("beforetoggle",t),ye("toggle",t),ye("cancel",t),ye("close",t);break;case"iframe":case"object":ye("load",t);break;case"video":case"audio":for(r=0;r<Wo.length;r++)ye(Wo[r],t);break;case"image":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"embed":case"source":case"link":ye("error",t),ye("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(j in a)if(a.hasOwnProperty(j)&&(r=a[j],r!=null))switch(j){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(t,n,j,r,a,null)}return;default:if(Uc(n)){for(it in a)a.hasOwnProperty(it)&&(r=a[it],r!==void 0&&Dh(t,n,it,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&Ge(t,n,E,r,a,null))}var by={};function Ay(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,_=null,E=null,N=null,j=null,it=null;for($ in a){var mt=a[$];if(a.hasOwnProperty($)&&mt!=null)switch($){case"checked":break;case"value":break;case"defaultValue":N=mt;default:r.hasOwnProperty($)||Ge(t,n,$,null,r,mt)}}for(var k in r){var $=r[k];if(mt=a[k],r.hasOwnProperty(k)&&($!=null||mt!=null))switch(k){case"type":$!==mt&&(De=!0),c=$;break;case"name":$!==mt&&(De=!0),l=$;break;case"checked":$!==mt&&(De=!0),j=$;break;case"defaultChecked":$!==mt&&(De=!0),it=$;break;case"value":$!==mt&&(De=!0),_=$;break;case"defaultValue":$!==mt&&(De=!0),E=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,n));break;default:$!==mt&&Ge(t,n,k,$,r,mt)}}wc(t,_,E,N,j,it,c,l);return;case"select":$=_=E=k=null;for(c in a)if(N=a[c],a.hasOwnProperty(c)&&N!=null)switch(c){case"value":break;case"multiple":$=N;default:r.hasOwnProperty(c)||Ge(t,n,c,null,r,N)}for(l in r)if(c=r[l],N=a[l],r.hasOwnProperty(l)&&(c!=null||N!=null))switch(l){case"value":c!==N&&(De=!0),k=c;break;case"defaultValue":c!==N&&(De=!0),E=c;break;case"multiple":c!==N&&(De=!0),_=c;default:c!==N&&Ge(t,n,l,c,r,N)}n=E,a=_,r=$,k!=null?Jr(t,!!a,k,!1):!!r!=!!a&&(n!=null?Jr(t,!!a,n,!0):Jr(t,!!a,a?[]:"",!1));return;case"textarea":$=k=null;for(E in a)if(l=a[E],a.hasOwnProperty(E)&&l!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ge(t,n,E,null,r,l)}for(_ in r)if(l=r[_],c=a[_],r.hasOwnProperty(_)&&(l!=null||c!=null))switch(_){case"value":l!==c&&(De=!0),k=l;break;case"defaultValue":l!==c&&(De=!0),$=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&Ge(t,n,_,l,r,c)}Xp(t,k,$);return;case"option":for(var Ot in a)if(k=a[Ot],a.hasOwnProperty(Ot)&&k!=null&&!r.hasOwnProperty(Ot))switch(Ot){case"selected":t.selected=!1;break;default:Ge(t,n,Ot,null,r,k)}for(N in r)if(k=r[N],$=a[N],r.hasOwnProperty(N)&&k!==$&&(k!=null||$!=null))switch(N){case"selected":k!==$&&(De=!0),t.selected=k&&typeof k!="function"&&typeof k!="symbol";break;default:Ge(t,n,N,k,r,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var jt in a)k=a[jt],a.hasOwnProperty(jt)&&k!=null&&!r.hasOwnProperty(jt)&&Ge(t,n,jt,null,r,k);for(j in r)if(k=r[j],$=a[j],r.hasOwnProperty(j)&&k!==$&&(k!=null||$!=null))switch(j){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(s(137,n));break;default:Ge(t,n,j,k,r,$)}return;default:if(Uc(n)){for(var he in a)k=a[he],a.hasOwnProperty(he)&&k!==void 0&&!r.hasOwnProperty(he)&&Dh(t,n,he,void 0,r,k);for(it in r)k=r[it],$=a[it],!r.hasOwnProperty(it)||k===$||k===void 0&&$===void 0||Dh(t,n,it,k,r,$);return}}for(var W in a)k=a[W],a.hasOwnProperty(W)&&k!=null&&!r.hasOwnProperty(W)&&Ge(t,n,W,null,r,k);for(mt in r)k=r[mt],$=a[mt],!r.hasOwnProperty(mt)||k===$||k==null&&$==null||Ge(t,n,mt,k,r,$)}function J_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ry(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var l=a[r],c=l.transferSize,_=l.initiatorType,E=l.duration;if(c&&E&&J_(_)){for(_=0,E=l.responseEnd,r+=1;r<a.length;r++){var N=a[r],j=N.startTime;if(j>E)break;var it=N.transferSize,mt=N.initiatorType;it&&J_(mt)&&(N=N.responseEnd,_+=it*(N<E?1:(E-j)/(N-j)))}if(--r,n+=8*(c+_)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Uh=null,Nh=null;function Zo(t){return t.nodeType===9?t:t.ownerDocument}function $_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function t0(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function e0(t,n,a,r){return a=Zo(a).createElement(t),a[Ut]=r,a[Wt]=n,wn(a,t,n),we(a),a}function Lh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Oh=null;function Cy(){var t=window.event;return t&&t.type==="popstate"?t===Oh?!1:(Oh=t,!0):(Oh=null,!1)}var zh=typeof setTimeout=="function"?setTimeout:void 0,wy=typeof clearTimeout=="function"?clearTimeout:void 0,n0=typeof Promise=="function"?Promise:void 0,i0=typeof requestAnimationFrame=="function"?requestAnimationFrame:zh,Dy=typeof queueMicrotask=="function"?queueMicrotask:typeof n0<"u"?function(t){return n0.resolve(null).then(t).catch(Uy)}:zh;function Uy(t){setTimeout(function(){throw t})}function ja(t){return t==="head"}function a0(t,n){var a=n,r=0;do{var l=a.nextSibling;if(t.removeChild(a),l&&l.nodeType===8)if(a=l.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(l),Ps(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")Xh(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Xh(a);for(var c=a.firstChild;c;){var _=c.nextSibling,E=c.nodeName;c[Ne]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=_}}else a==="body"&&Xh(t.ownerDocument.body);a=l}while(a);Ps(n)}function r0(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function s0(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function o0(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Ny(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function Ph(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return Ny(n,a,t)}function Ly(t){return t.documentElement.clientHeight}function Oy(t){this.addEventListener("load",t),this.addEventListener("error",t)}function zy(t,n,a,r,l,c,_,E,N){var j=n.nodeType===9?n:n.ownerDocument;try{var it=j.startViewTransition({update:function(){var k=j.defaultView,$=k.navigation&&k.navigation.transition,Ot=j.fonts.status;r();var jt=[];if(Ot==="loaded"&&(Ly(j),j.fonts.status==="loading"&&jt.push(j.fonts.ready)),Ot=jt.length,t!==null)for(var he=t.suspenseyImages,W=0,H=0;H<he.length;H++){var J=he[H];if(!J.complete){var dt=J.getBoundingClientRect();if(0<dt.bottom&&0<dt.right&&dt.top<k.innerHeight&&dt.left<k.innerWidth){if(W+=C0(J),W>Pu){jt.length=Ot;break}J=new Promise(Oy.bind(J)),jt.push(J)}}}if(0<jt.length)return k=Promise.race([Promise.all(jt),new Promise(function(Vt){return setTimeout(Vt,500)})]).then(l,l),($?Promise.allSettled([$.finished,k]):k).then(c,c);if(l(),$)return $.finished.then(c,c);c()},types:a});j.__reactViewTransition=it;var mt=[];return it.ready.then(function(){for(var k=j.documentElement.getAnimations({subtree:!0}),$=0;$<k.length;$++){var Ot=k[$],jt=Ot.effect,he=jt.pseudoElement;if(he!=null&&he.startsWith("::view-transition")){mt.push(Ot),Ot=jt.getKeyframes();for(var W=he=void 0,H=!0,J=0;J<Ot.length;J++){var dt=Ot[J],Vt=dt.width;if(he===void 0)he=Vt;else if(he!==Vt){H=!1;break}if(Vt=dt.height,W===void 0)W=Vt;else if(W!==Vt){H=!1;break}delete dt.width,delete dt.height,dt.transform==="none"&&delete dt.transform}H&&he!==void 0&&W!==void 0&&(jt.setKeyframes(Ot),H=getComputedStyle(jt.target,jt.pseudoElement),H.width!==he||H.height!==W)&&(H=Ot[0],H.width=he,H.height=W,H=Ot[Ot.length-1],H.width=he,H.height=W,jt.setKeyframes(Ot))}}_()},function(k){j.__reactViewTransition===it&&(j.__reactViewTransition=null);try{if(typeof k=="object"&&k!==null)switch(k.name){case"InvalidStateError":(k.message==="View transition was skipped because document visibility state is hidden."||k.message==="Skipping view transition because document visibility state has become hidden."||k.message==="Skipping view transition because viewport size changed."||k.message==="Transition was aborted because of invalid state")&&(k=null)}k!==null&&N(k)}finally{r(),l(),_()}}),it.finished.finally(function(){for(var k=0;k<mt.length;k++)mt[k].cancel();j.__reactViewTransition===it&&(j.__reactViewTransition=null),E()}),it}catch{return r(),l(),_(),null}}function Lr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Lr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:z({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Lr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],l=0;l<a.length;l++){var c=a[l].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(a[l])}return r},Lr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function l0(t){return{name:t,group:new Lr("group",t),imagePair:new Lr("image-pair",t),old:new Lr("old",t),new:new Lr("new",t)}}function si(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}si.prototype.addEventListener=function(t,n,a){var r=null,l=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(c0(c,t,n,a)===-1){var _=this,E=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(E=function(N){_.removeEventListener(t,n,a),typeof n=="function"?n.call(this,N):n.handleEvent(N)}),r!==null&&(l=_.removeEventListener.bind(_,t,n,a),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Ds(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:E,cleanup:l}),p(this._fragmentFiber.child,!1,Py,t,E,r)}this._eventListeners=c}};function Py(t,n,a,r){return y(t).addEventListener(n,a,r),!1}si.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=c0(r,t,n,a),n!==-1)){var l=r[n];a=l.attachedListener;var c=l.cleanup;l=Ds(l.optionsOrUseCapture),p(this._fragmentFiber.child,!1,Iy,t,a,l),r.splice(n,1),c!==null&&c()}};function Iy(t,n,a,r){return y(t).removeEventListener(n,a,r),!1}function Ds(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function u0(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function c0(t,n,a,r){if(t.length===0)return-1;r=u0(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===n&&c.listener===a&&u0(c.optionsOrUseCapture)===r)return l}return-1}si.prototype.dispatchEvent=function(t){var n=x(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var l=0;l<a.length;l++){var c=a[l];r.addEventListener(c.type,c.attachedListener,Ds(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(l=0;l<a.length;l++)c=a[l],r.removeEventListener(c.type,c.attachedListener,Ds(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},si.prototype.focus=function(t){p(this._fragmentFiber.child,!0,f0,t,void 0,void 0)};function f0(t,n){return t.tag===6?!1:(t=y(t),Zy(t,n))}si.prototype.focusLast=function(t){var n=[];p(this._fragmentFiber.child,!0,Ih,n,void 0,void 0);for(var a=n.length-1;0<=a&&!f0(n[a],t);a--);};function Ih(t,n){return n.push(t),!1}si.prototype.blur=function(){var t=x(this._fragmentFiber);t!==null&&(t=y(t),t=Zo(t).activeElement,t!==null&&p(this._fragmentFiber.child,!1,By,t,void 0,void 0))};function By(t,n){return t.tag===6?!1:(t=y(t),t===n||t.contains(n)?(n.blur(),!0):!1)}si.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),p(this._fragmentFiber.child,!1,Fy,t,void 0,void 0)};function Fy(t,n){return t.tag===6||(t=y(t),n.observe(t)),!1}si.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),p(this._fragmentFiber.child,!1,Hy,t,void 0,void 0);for(var a=n=0;a<Ci.length;a++){var r=Ci[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ci[n++]=r}Ci.length=n}};function Hy(t,n){return t.tag===6||(t=y(t),n.unobserve(t)),!1}var Ci=[],Bh=!1;function Gy(t,n,a){Ci.push({fragmentInstance:t,observer:n,instance:a}),Bh||(Bh=!0,Ky(function(){Bh=!1;var r=Ci;Ci=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}si.prototype.getClientRects=function(){var t=[];return p(this._fragmentFiber.child,!1,Vy,t,void 0,void 0),t};function Vy(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=y(t),n.push.apply(n,t.getClientRects());return!1}si.prototype.getRootNode=function(t){var n=x(this._fragmentFiber);return n===null?this:y(n).getRootNode(t)},si.prototype.compareDocumentPosition=function(t){var n=x(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];p(this._fragmentFiber.child,!1,Ih,a,void 0,void 0);var r=y(n);if(a.length===0){if(a=r,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var l=r=a.compareDocumentPosition(t);return a===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=b(n)[1],a===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=y(a).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),l=y(a[a.length-1]);var c=M(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var _=n.compareDocumentPosition(t),E=l.compareDocumentPosition(t),N=_&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=r&&c&&_&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&l===t||N||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:_,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Xy(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Xy(t,n,a,r,l){var c=Le(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=n,n=x(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=B(a,c,F),n===null?n=!1:(p(n,!0,O,c,a),c=m,m=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=B(r,c,F),n===null?n=!1:(p(n,!0,w,c,r),c=m,L=m=null,n=c!==null)),n):!1}function h0(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}si.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];p(this._fragmentFiber.child,!1,Ih,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=b(this._fragmentFiber);if(r=a?r[1]||r[0]||x(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=y(r),h0(t,a);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var l=n[r];l.tag===6?(l=y(l),h0(l,a)):y(l).scrollIntoView(t),r+=a?-1:1}};function ky(t,n){return t=y(t),d0(t,n),!1}function d0(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function p0(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];t.addEventListener(l.type,l.attachedListener,Ds(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var _=0,E=0;E<Ci.length;E++){var N=Ci[E];(N.fragmentInstance!==n||N.observer!==c||N.instance!==t)&&(Ci[_++]=N)}Ci.length=_,c.observe(t)}),d0(t,n))}function Yy(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var l=a[r];t.removeEventListener(l.type,l.attachedListener,Ds(l.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?Gy(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Fh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Fh(a),ee(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function qy(t,n,a,r){for(;t.nodeType===1;){var l=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ne])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function Wy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=vi(t.nextSibling),t===null))return null;return t}function m0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=vi(t.nextSibling),t===null))return null;return t}function Hh(t){return t.data==="$?"||t.data==="$~"}function Gh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function jy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Vh=null;function g0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return vi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function _0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Zy(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function Ky(t){i0(function(){i0(function(n){return t(n)})})}function v0(t,n,a){switch(n=Zo(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function S0(t,n,a){for(var r in a){var l=a[r];a.hasOwnProperty(r)&&l!=null&&Ge(t,n,r,null,by,l)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Ii&&(t.onclick=null),ee(t)}function Xh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ee(t)}var Si=new Map,x0=new Set;function Ko(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var _a=Yt.d;Yt.d={f:Qy,r:Jy,D:$y,C:tM,L:eM,m:nM,X:aM,S:iM,M:rM};function Qy(){var t=_a.f(),n=Ru();return t||n}function Jy(t){var n=me(t);n!==null&&n.tag===5&&n.type==="form"?Mg(n):_a.r(t)}var Us=typeof document>"u"?null:document;function y0(t,n,a){var r=Us;if(r&&typeof n=="string"&&n){var l=fi(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof a=="string"&&(l+='[crossorigin="'+a+'"]'),x0.has(l)||(x0.add(l),t={rel:t,crossOrigin:a,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),wn(n,"link",t),we(n),r.head.appendChild(n)))}}function $y(t){_a.D(t),y0("dns-prefetch",t,null)}function tM(t,n){_a.C(t,n),y0("preconnect",t,n)}function eM(t,n,a){_a.L(t,n,a);var r=Us;if(r&&t&&n){var l='link[rel="preload"][as="'+fi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(l+='[imagesrcset="'+fi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(l+='[imagesizes="'+fi(a.imageSizes)+'"]')):l+='[href="'+fi(t)+'"]';var c=l;switch(n){case"style":c=Ns(t);break;case"script":c=Ls(t)}if(!(Si.has(c)||(t=z({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),Si.set(c,t),r.querySelector(l)!==null||n==="style"&&r.querySelector(Qo(c))||n==="script"&&r.querySelector(Jo(c))))){var _=r.createElement("link");wn(_,"link",t),n==="style"&&(_[Ce]=!0,_.onload=_.onerror=function(){Ra(_)}),we(_),r.head.appendChild(_)}}}function nM(t,n){_a.m(t,n);var a=Us;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+fi(r)+'"][href="'+fi(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Ls(t)}if(!Si.has(c)&&(t=z({rel:"modulepreload",href:t},n),Si.set(c,t),a.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Jo(c)))return}r=a.createElement("link"),wn(r,"link",t),we(r),a.head.appendChild(r)}}}function iM(t,n,a){_a.S(t,n,a);var r=Us;if(r&&t){var l=Jn(r).hoistableStyles,c=Ns(t);n=n||"default";var _=l.get(c);if(!_){var E={loading:0,preload:null};if(_=r.querySelector(Qo(c)))E.loading=5;else{t=z({rel:"stylesheet",href:t,"data-precedence":n},a),(a=Si.get(c))&&kh(t,a);var N=_=r.createElement("link");we(N),wn(N,"link",t),N._p=new Promise(function(j,it){N.onload=j,N.onerror=it}),N.addEventListener("load",function(){E.loading|=1}),N.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Ou(_,n,r)}_={type:"stylesheet",instance:_,count:1,state:E},l.set(c,_)}}}function aM(t,n){_a.X(t,n);var a=Us;if(a&&t){var r=Jn(a).hoistableScripts,l=Ls(t),c=r.get(l);c||(c=a.querySelector(Jo(l)),c||(t=z({src:t,async:!0},n),(n=Si.get(l))&&Yh(t,n),c=a.createElement("script"),we(c),wn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function rM(t,n){_a.M(t,n);var a=Us;if(a&&t){var r=Jn(a).hoistableScripts,l=Ls(t),c=r.get(l);c||(c=a.querySelector(Jo(l)),c||(t=z({src:t,async:!0,type:"module"},n),(n=Si.get(l))&&Yh(t,n),c=a.createElement("script"),we(c),wn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function M0(t,n,a,r){var l=(l=Ye.current)?Ko(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Ns(a.href),n=Jn(l).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ns(a.href);var c=Jn(l).hoistableStyles,_=c.get(t);if(_||(l=l.ownerDocument||l,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,_),(c=l.querySelector(Qo(t)))?c._p||(_.instance=c,_.state.loading=5):(c=Si.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Si.set(t,c)),sM(l,t,c,_.state))),n&&r===null)throw Error(s(528,""));return _}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Ls(a),n=Jn(l).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ns(t){return'href="'+fi(t)+'"'}function Qo(t){return'link[rel="stylesheet"]['+t+"]"}function E0(t){return z({},t,{"data-precedence":t.precedence,precedence:null})}function sM(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ce]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[Ce]=!0,n.onload=n.onerror=Ra.bind(null,n),wn(n,"link",a),we(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Ls(t){return'[src="'+fi(t)+'"]'}function Jo(t){return"script[async]"+t}function T0(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+fi(a.href)+'"]');if(r)return n.instance=r,we(r),r;var l=z({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),we(r),wn(r,"style",l),Ou(r,a.precedence,t),n.instance=r;case"stylesheet":l=Ns(a.href);var c=t.querySelector(Qo(l));if(c)return n.state.loading|=4,n.instance=c,we(c),c;r=E0(a),(l=Si.get(l))&&kh(r,l),c=(t.ownerDocument||t).createElement("link"),we(c);var _=c;return _._p=new Promise(function(E,N){_.onload=E,_.onerror=N}),wn(c,"link",r),n.state.loading|=4,Ou(c,a.precedence,t),n.instance=c;case"script":return c=Ls(a.src),(l=t.querySelector(Jo(c)))?(n.instance=l,we(l),l):(r=a,(l=Si.get(c))&&(r=z({},a),Yh(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),we(l),wn(l,"link",r),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Ou(r,a.precedence,t));return n.instance}function Ou(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,_=0;_<r.length;_++){var E=r[_];if(E.dataset.precedence===n)c=E;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function kh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Yh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var zu=null;function b0(t,n,a){if(zu===null){var r=new Map,l=zu=new Map;l.set(a,r)}else l=zu,r=l.get(a),r||(r=new Map,l.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),l=0;l<a.length;l++){var c=a[l];if(!(c[Ne]||c[Ut]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var _=c.getAttribute(n)||"";_=t+_;var E=r.get(_);E?E.push(c):r.set(_,[c])}}return r}function qh(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function oM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function A0(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function R0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function C0(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function w0(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=C0(n),t.suspenseyImages.push(n)),t=cM.bind(t),n.decode().then(t,t))}function lM(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var l=Ns(r.href),c=n.querySelector(Qo(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=$o.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,we(c);return}c=n.ownerDocument||n,r=E0(r),(l=Si.get(l))&&kh(r,l),c=c.createElement("link"),we(c);var _=c;_._p=new Promise(function(E,N){_.onload=E,_.onerror=N}),wn(c,"link",r),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=$o.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Pu=0;function uM(t,n){return t.stylesheets&&t.count===0&&Bu(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&Bu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Pu===0&&(Pu=62500*Ry());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Bu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Pu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function D0(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Bu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function $o(){this.count--,D0(this)}function cM(){this.imgCount--,D0(this)}var Iu=null;function Bu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Iu=new Map,n.forEach(fM,t),Iu=null,$o.call(t))}function fM(t,n){if(!(n.state.loading&4)){var a=Iu.get(t);if(a)var r=a.get(null);else{a=new Map,Iu.set(t,a);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var _=l[c];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),r=_)}r&&a.set(null,r)}l=n.instance,_=l.getAttribute("data-precedence"),c=a.get(_)||r,c===r&&a.set(null,l),a.set(_,l),this.count++,r=$o.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var Os={$$typeof:lt,Provider:null,Consumer:null,_currentValue:P,_currentValue2:P,_threadCount:0};function hM(t,n,a,r,l,c,_,E,N){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=po(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=po(0),this.hiddenUpdates=po(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.transitionTypes=null,this.incompleteTransitions=new Map}function U0(t,n,a,r,l,c,_,E,N,j,it,mt){return t=new hM(t,n,a,_,N,j,it,mt,E),n=1,c===!0&&(n|=24),c=Xn(3,null,null,n),t.current=c,c.stateNode=t,n=of(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:n},ff(c),t}function N0(t){return t?(t=ss,t):ss}function L0(t,n,a,r,l,c){l=N0(l),r.context===null?r.context=l:r.pendingContext=l,r=Pa(n),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=Ia(t,r,n),a!==null&&(Wn(a,t,n),Do(a,t,n))}function O0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Wh(t,n){O0(t,n),(t=t.alternate)&&O0(t,n)}function z0(t){if(t.tag===13||t.tag===31){var n=gr(t,67108864);n!==null&&Wn(n,t,67108864),Wh(t,67108864)}}function P0(t){if(t.tag===13||t.tag===31){var n=ri();n=ot(n);var a=gr(t,n);a!==null&&Wn(a,t,n),Wh(t,n)}}var zs=!0;function dM(t,n,a,r){var l=Et.T;Et.T=null;var c=Yt.p;try{Yt.p=2,jh(t,n,a,r)}finally{Yt.p=c,Et.T=l}}function pM(t,n,a,r){var l=Et.T;Et.T=null;var c=Yt.p;try{Yt.p=8,jh(t,n,a,r)}finally{Yt.p=c,Et.T=l}}function jh(t,n,a,r){if(zs){var l=Zh(r);if(l===null)wh(t,n,r,Fu,a),B0(t,r);else if(gM(l,t,n,a,r))r.stopPropagation();else if(B0(t,r),n&4&&-1<mM.indexOf(t)){for(;l!==null;){var c=me(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var _=ci(c.pendingLanes);if(_!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;_;){var N=1<<31-Un(_);E.entanglements[1]|=N,_&=~N}Wi(c),(Oe&6)===0&&(Tu=V()+500,qo(0))}}break;case 31:case 13:E=gr(c,2),E!==null&&Wn(E,c,2),Ru(),Wh(c,2)}if(c=Zh(r),c===null&&wh(t,n,r,Fu,a),c===l)break;l=c}l!==null&&r.stopPropagation()}else wh(t,n,r,null,a)}}function Zh(t){return t=Lc(t),Kh(t)}var Fu=null;function Kh(t){if(Fu=null,t=Le(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Fu=t,null}function I0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ct()){case Nt:return 2;case kt:return 8;case Tt:case St:return 32;case Zt:return 268435456;default:return 32}default:return 32}}var Qh=!1,Za=null,Ka=null,Qa=null,tl=new Map,el=new Map,Ja=[],mM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function B0(t,n){switch(t){case"focusin":case"focusout":Za=null;break;case"dragenter":case"dragleave":Ka=null;break;case"mouseover":case"mouseout":Qa=null;break;case"pointerover":case"pointerout":tl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":el.delete(n.pointerId)}}function nl(t,n,a,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},n!==null&&(n=me(n),n!==null&&z0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function gM(t,n,a,r,l){switch(n){case"focusin":return Za=nl(Za,t,n,a,r,l),!0;case"dragenter":return Ka=nl(Ka,t,n,a,r,l),!0;case"mouseover":return Qa=nl(Qa,t,n,a,r,l),!0;case"pointerover":var c=l.pointerId;return tl.set(c,nl(tl.get(c)||null,t,n,a,r,l)),!0;case"gotpointercapture":return c=l.pointerId,el.set(c,nl(el.get(c)||null,t,n,a,r,l)),!0}return!1}function F0(t){var n=Le(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,It(t.priority,function(){P0(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,It(t.priority,function(){P0(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Zh(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);Nc=r,a.target.dispatchEvent(r),Nc=null}else return n=me(a),n!==null&&z0(n),t.blockedOn=a,!1;n.shift()}return!0}function H0(t,n,a){Hu(t)&&a.delete(n)}function _M(){Qh=!1,Za!==null&&Hu(Za)&&(Za=null),Ka!==null&&Hu(Ka)&&(Ka=null),Qa!==null&&Hu(Qa)&&(Qa=null),tl.forEach(H0),el.forEach(H0)}function Gu(t,n){t.blockedOn===n&&(t.blockedOn=null,Qh||(Qh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,_M)))}var Vu=null;function G0(t){Vu!==t&&(Vu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Vu===t&&(Vu=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],l=t[n+2];if(typeof r!="function"){if(Kh(r||a)===null)continue;break}var c=me(a);c!==null&&(t.splice(n,3),n-=3,Nf(c,{pending:!0,data:l,method:a.method,action:r},r,l))}}))}function Ps(t){function n(N){return Gu(N,t)}Za!==null&&Gu(Za,t),Ka!==null&&Gu(Ka,t),Qa!==null&&Gu(Qa,t),tl.forEach(n),el.forEach(n);for(var a=0;a<Ja.length;a++){var r=Ja[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Ja.length&&(a=Ja[0],a.blockedOn===null);)F0(a),a.blockedOn===null&&Ja.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var l=a[r],c=a[r+1],_=l[Wt]||null;if(typeof c=="function")_||G0(a);else if(_){var E=null;if(c&&c.hasAttribute("formAction")){if(l=c,_=c[Wt]||null)E=_.formAction;else if(Kh(l)!==null)continue}else E=_.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),G0(a)}}}function V0(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(_){return l=_})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function Jh(t){this._internalRoot=t}Xu.prototype.render=Jh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ri();L0(a,r,t,n,null,null)},Xu.prototype.unmount=Jh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;L0(t.current,2,null,t,null,null),Ru(),n[ie]=null}};function Xu(t){this._internalRoot=t}Xu.prototype.unstable_scheduleHydration=function(t){if(t){var n=bt();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ja.length&&n!==0&&n<Ja[a].priority;a++);Ja.splice(a,0,t),a===0&&F0(t)}};var X0=e.version;if(X0!=="19.3.1")throw Error(s(527,X0,"19.3.1"));Yt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(n),t=t!==null?S(t):null,t=t===null?null:t.stateNode,t};var vM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Et,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ku.isDisabled&&ku.supportsFiber)try{Me=ku.inject(vM),tn=ku}catch{}}return al.createRoot=function(t,n){if(!u(t))throw Error(s(299));var a=!1,r="",l=Ng,c=Lg,_=Og;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=U0(t,1,!1,null,null,a,r,null,l,c,_,V0),t[ie]=n.current,Ch(t),new Jh(n)},al.hydrateRoot=function(t,n,a){if(!u(t))throw Error(s(299));var r=!1,l="",c=Ng,_=Lg,E=Og,N=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(N=a.formState)),n=U0(t,1,!0,n,a??null,r,l,N,c,_,E,V0),n.context=N0(null),a=n.current,r=ri(),r=ot(r),l=Pa(r),l.callback=null,Ia(a,l,r),a=r,n.current.lanes=a,dr(n,a),Wi(n),t[ie]=n.current,Ch(t),new Xu(n)},al.version="19.3.1",al}var $0;function DM(){if($0)return ed.exports;$0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),ed.exports=wM(),ed.exports}var UM=DM();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),rS=(...o)=>o.filter((e,i,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var LM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=Ae.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:u="",children:f,iconNode:h,...d},v)=>Ae.createElement("svg",{ref:v,...LM,width:e,height:e,stroke:o,strokeWidth:s?Number(i)*24/Number(e):i,className:rS("lucide",u),...d},[...h.map(([g,S])=>Ae.createElement(g,S)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=(o,e)=>{const i=Ae.forwardRef(({className:s,...u},f)=>Ae.createElement(OM,{ref:f,iconNode:e,className:rS(`lucide-${NM(o)}`,s),...u}));return i.displayName=`${o}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=Qn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=Qn("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=Qn("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=Qn("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=Qn("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=Qn("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=Qn("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=Qn("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=Qn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=Qn("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=Qn("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=Qn("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=Qn("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=Qn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ap="180",kM=0,av=1,YM=2,sS=1,qM=2,Ea=3,ur=0,Zn=1,Zi=2,or=0,to=1,Sc=2,rv=3,sv=4,WM=5,Vr=100,jM=101,ZM=102,KM=103,QM=104,JM=200,$M=201,tE=202,eE=203,Pd=204,Id=205,nE=206,iE=207,aE=208,rE=209,sE=210,oE=211,lE=212,uE=213,cE=214,Bd=0,Fd=1,Hd=2,io=3,Gd=4,Vd=5,Xd=6,kd=7,oS=0,fE=1,hE=2,lr=0,dE=1,pE=2,mE=3,gE=4,_E=5,vE=6,SE=7,lS=300,ao=301,ro=302,Yd=303,qd=304,Ec=306,Wd=1e3,kr=1001,jd=1002,Oi=1003,xE=1004,Yu=1005,Ki=1006,sd=1007,Yr=1008,$i=1009,uS=1010,cS=1011,dl=1012,Rp=1013,Wr=1014,Ta=1015,Sl=1016,Cp=1017,wp=1018,pl=1020,fS=35902,hS=35899,dS=1021,pS=1022,Li=1023,ml=1026,gl=1027,mS=1028,Dp=1029,gS=1030,Up=1031,Np=1033,pc=33776,mc=33777,gc=33778,_c=33779,Zd=35840,Kd=35841,Qd=35842,Jd=35843,$d=36196,tp=37492,ep=37496,np=37808,ip=37809,ap=37810,rp=37811,sp=37812,op=37813,lp=37814,up=37815,cp=37816,fp=37817,hp=37818,dp=37819,pp=37820,mp=37821,gp=36492,_p=36494,vp=36495,Sp=36283,xp=36284,yp=36285,Mp=36286,yE=3200,ME=3201,_S=0,EE=1,sr="",yi="srgb",so="srgb-linear",xc="linear",ke="srgb",Is=7680,ov=519,TE=512,bE=513,AE=514,vS=515,RE=516,CE=517,wE=518,DE=519,lv=35044,uv="300 es",Qi=2e3,yc=2001;class lo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const u=s[e];if(u!==void 0){const f=u.indexOf(i);f!==-1&&u.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const u=s.slice(0);for(let f=0,h=u.length;f<h;f++)u[f].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let cv=1234567;const fl=Math.PI/180,_l=180/Math.PI;function uo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(On[o&255]+On[o>>8&255]+On[o>>16&255]+On[o>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]).toLowerCase()}function be(o,e,i){return Math.max(e,Math.min(i,o))}function Lp(o,e){return(o%e+e)%e}function UE(o,e,i,s,u){return s+(o-e)*(u-s)/(i-e)}function NE(o,e,i){return o!==e?(i-o)/(e-o):0}function hl(o,e,i){return(1-i)*o+i*e}function LE(o,e,i,s){return hl(o,e,1-Math.exp(-i*s))}function OE(o,e=1){return e-Math.abs(Lp(o,e*2)-e)}function zE(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*(3-2*o))}function PE(o,e,i){return o<=e?0:o>=i?1:(o=(o-e)/(i-e),o*o*o*(o*(o*6-15)+10))}function IE(o,e){return o+Math.floor(Math.random()*(e-o+1))}function BE(o,e){return o+Math.random()*(e-o)}function FE(o){return o*(.5-Math.random())}function HE(o){o!==void 0&&(cv=o);let e=cv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function GE(o){return o*fl}function VE(o){return o*_l}function XE(o){return(o&o-1)===0&&o!==0}function kE(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function YE(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function qE(o,e,i,s,u){const f=Math.cos,h=Math.sin,d=f(i/2),v=h(i/2),g=f((e+s)/2),S=h((e+s)/2),p=f((e-s)/2),x=h((e-s)/2),M=f((s-e)/2),b=h((s-e)/2);switch(u){case"XYX":o.set(d*S,v*p,v*x,d*g);break;case"YZY":o.set(v*x,d*S,v*p,d*g);break;case"ZXZ":o.set(v*p,v*x,d*S,d*g);break;case"XZX":o.set(d*S,v*b,v*M,d*g);break;case"YXY":o.set(v*M,d*S,v*b,d*g);break;case"ZYZ":o.set(v*b,v*M,d*S,d*g);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+u)}}function Js(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const WE={DEG2RAD:fl,RAD2DEG:_l,generateUUID:uo,clamp:be,euclideanModulo:Lp,mapLinear:UE,inverseLerp:NE,lerp:hl,damp:LE,pingpong:OE,smoothstep:zE,smootherstep:PE,randInt:IE,randFloat:BE,randFloatSpread:FE,seededRandom:HE,degToRad:GE,radToDeg:VE,isPowerOfTwo:XE,ceilPowerOfTwo:kE,floorPowerOfTwo:YE,setQuaternionFromProperEuler:qE,normalize:Gn,denormalize:Js};class ze{constructor(e=0,i=0){ze.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,u=e.elements;return this.x=u[0]*i+u[3]*s+u[6],this.y=u[1]*i+u[4]*s+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=be(this.x,e.x,i.x),this.y=be(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=be(this.x,e,i),this.y=be(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(be(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),u=Math.sin(i),f=this.x-e.x,h=this.y-e.y;return this.x=f*s-h*u+e.x,this.y=f*u+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jr{constructor(e=0,i=0,s=0,u=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=u}static slerpFlat(e,i,s,u,f,h,d){let v=s[u+0],g=s[u+1],S=s[u+2],p=s[u+3];const x=f[h+0],M=f[h+1],b=f[h+2],R=f[h+3];if(d===0){e[i+0]=v,e[i+1]=g,e[i+2]=S,e[i+3]=p;return}if(d===1){e[i+0]=x,e[i+1]=M,e[i+2]=b,e[i+3]=R;return}if(p!==R||v!==x||g!==M||S!==b){let y=1-d;const m=v*x+g*M+S*b+p*R,L=m>=0?1:-1,O=1-m*m;if(O>Number.EPSILON){const F=Math.sqrt(O),B=Math.atan2(F,m*L);y=Math.sin(y*B)/F,d=Math.sin(d*B)/F}const w=d*L;if(v=v*y+x*w,g=g*y+M*w,S=S*y+b*w,p=p*y+R*w,y===1-d){const F=1/Math.sqrt(v*v+g*g+S*S+p*p);v*=F,g*=F,S*=F,p*=F}}e[i]=v,e[i+1]=g,e[i+2]=S,e[i+3]=p}static multiplyQuaternionsFlat(e,i,s,u,f,h){const d=s[u],v=s[u+1],g=s[u+2],S=s[u+3],p=f[h],x=f[h+1],M=f[h+2],b=f[h+3];return e[i]=d*b+S*p+v*M-g*x,e[i+1]=v*b+S*x+g*p-d*M,e[i+2]=g*b+S*M+d*x-v*p,e[i+3]=S*b-d*p-v*x-g*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,u){return this._x=e,this._y=i,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,u=e._y,f=e._z,h=e._order,d=Math.cos,v=Math.sin,g=d(s/2),S=d(u/2),p=d(f/2),x=v(s/2),M=v(u/2),b=v(f/2);switch(h){case"XYZ":this._x=x*S*p+g*M*b,this._y=g*M*p-x*S*b,this._z=g*S*b+x*M*p,this._w=g*S*p-x*M*b;break;case"YXZ":this._x=x*S*p+g*M*b,this._y=g*M*p-x*S*b,this._z=g*S*b-x*M*p,this._w=g*S*p+x*M*b;break;case"ZXY":this._x=x*S*p-g*M*b,this._y=g*M*p+x*S*b,this._z=g*S*b+x*M*p,this._w=g*S*p-x*M*b;break;case"ZYX":this._x=x*S*p-g*M*b,this._y=g*M*p+x*S*b,this._z=g*S*b-x*M*p,this._w=g*S*p+x*M*b;break;case"YZX":this._x=x*S*p+g*M*b,this._y=g*M*p+x*S*b,this._z=g*S*b-x*M*p,this._w=g*S*p-x*M*b;break;case"XZY":this._x=x*S*p-g*M*b,this._y=g*M*p-x*S*b,this._z=g*S*b+x*M*p,this._w=g*S*p+x*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,u=Math.sin(s);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],u=i[4],f=i[8],h=i[1],d=i[5],v=i[9],g=i[2],S=i[6],p=i[10],x=s+d+p;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(S-v)*M,this._y=(f-g)*M,this._z=(h-u)*M}else if(s>d&&s>p){const M=2*Math.sqrt(1+s-d-p);this._w=(S-v)/M,this._x=.25*M,this._y=(u+h)/M,this._z=(f+g)/M}else if(d>p){const M=2*Math.sqrt(1+d-s-p);this._w=(f-g)/M,this._x=(u+h)/M,this._y=.25*M,this._z=(v+S)/M}else{const M=2*Math.sqrt(1+p-s-d);this._w=(h-u)/M,this._x=(f+g)/M,this._y=(v+S)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(be(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const u=Math.min(1,i/s);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,u=e._y,f=e._z,h=e._w,d=i._x,v=i._y,g=i._z,S=i._w;return this._x=s*S+h*d+u*g-f*v,this._y=u*S+h*v+f*d-s*g,this._z=f*S+h*g+s*v-u*d,this._w=h*S-s*d-u*v-f*g,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,u=this._y,f=this._z,h=this._w;let d=h*e._w+s*e._x+u*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=u,this._z=f,this;const v=1-d*d;if(v<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*u+i*this._y,this._z=M*f+i*this._z,this.normalize(),this}const g=Math.sqrt(v),S=Math.atan2(g,d),p=Math.sin((1-i)*S)/g,x=Math.sin(i*S)/g;return this._w=h*p+this._w*x,this._x=s*p+this._x*x,this._y=u*p+this._y*x,this._z=f*p+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(e),u*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class rt{constructor(e=0,i=0,s=0){rt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(fv.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(fv.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[3]*s+f[6]*u,this.y=f[1]*i+f[4]*s+f[7]*u,this.z=f[2]*i+f[5]*s+f[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,u=this.z,f=e.elements,h=1/(f[3]*i+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*u+f[12])*h,this.y=(f[1]*i+f[5]*s+f[9]*u+f[13])*h,this.z=(f[2]*i+f[6]*s+f[10]*u+f[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,u=this.z,f=e.x,h=e.y,d=e.z,v=e.w,g=2*(h*u-d*s),S=2*(d*i-f*u),p=2*(f*s-h*i);return this.x=i+v*g+h*p-d*S,this.y=s+v*S+d*g-f*p,this.z=u+v*p+f*S-h*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*u,this.y=f[1]*i+f[5]*s+f[9]*u,this.z=f[2]*i+f[6]*s+f[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=be(this.x,e.x,i.x),this.y=be(this.y,e.y,i.y),this.z=be(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=be(this.x,e,i),this.y=be(this.y,e,i),this.z=be(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,u=e.y,f=e.z,h=i.x,d=i.y,v=i.z;return this.x=u*v-f*d,this.y=f*h-s*v,this.z=s*d-u*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return od.copy(this).projectOnVector(e),this.sub(od)}reflect(e){return this.sub(od.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(be(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,u=this.z-e.z;return i*i+s*s+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const u=Math.sin(i)*e;return this.x=u*Math.sin(s),this.y=Math.cos(i)*e,this.z=u*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=u,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const od=new rt,fv=new jr;class de{constructor(e,i,s,u,f,h,d,v,g){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,u,f,h,d,v,g)}set(e,i,s,u,f,h,d,v,g){const S=this.elements;return S[0]=e,S[1]=u,S[2]=d,S[3]=i,S[4]=f,S[5]=v,S[6]=s,S[7]=h,S[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,u=i.elements,f=this.elements,h=s[0],d=s[3],v=s[6],g=s[1],S=s[4],p=s[7],x=s[2],M=s[5],b=s[8],R=u[0],y=u[3],m=u[6],L=u[1],O=u[4],w=u[7],F=u[2],B=u[5],z=u[8];return f[0]=h*R+d*L+v*F,f[3]=h*y+d*O+v*B,f[6]=h*m+d*w+v*z,f[1]=g*R+S*L+p*F,f[4]=g*y+S*O+p*B,f[7]=g*m+S*w+p*z,f[2]=x*R+M*L+b*F,f[5]=x*y+M*O+b*B,f[8]=x*m+M*w+b*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],h=e[4],d=e[5],v=e[6],g=e[7],S=e[8];return i*h*S-i*d*g-s*f*S+s*d*v+u*f*g-u*h*v}invert(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],h=e[4],d=e[5],v=e[6],g=e[7],S=e[8],p=S*h-d*g,x=d*v-S*f,M=g*f-h*v,b=i*p+s*x+u*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/b;return e[0]=p*R,e[1]=(u*g-S*s)*R,e[2]=(d*s-u*h)*R,e[3]=x*R,e[4]=(S*i-u*v)*R,e[5]=(u*f-d*i)*R,e[6]=M*R,e[7]=(s*v-g*i)*R,e[8]=(h*i-s*f)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,u,f,h,d){const v=Math.cos(f),g=Math.sin(f);return this.set(s*v,s*g,-s*(v*h+g*d)+h+e,-u*g,u*v,-u*(-g*h+v*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(ld.makeScale(e,i)),this}rotate(e){return this.premultiply(ld.makeRotation(-e)),this}translate(e,i){return this.premultiply(ld.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let u=0;u<9;u++)if(i[u]!==s[u])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ld=new de;function SS(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Mc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function jE(){const o=Mc("canvas");return o.style.display="block",o}const hv={};function vl(o){o in hv||(hv[o]=!0,console.warn(o))}function ZE(o,e,i){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}const dv=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pv=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function KE(){const o={enabled:!0,workingColorSpace:so,spaces:{},convert:function(u,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===ke&&(u.r=ba(u.r),u.g=ba(u.g),u.b=ba(u.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ke&&(u.r=eo(u.r),u.g=eo(u.g),u.b=eo(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===sr?xc:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,h){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return vl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return vl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[so]:{primaries:e,whitePoint:s,transfer:xc,toXYZ:dv,fromXYZ:pv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:yi},outputColorSpaceConfig:{drawingBufferColorSpace:yi}},[yi]:{primaries:e,whitePoint:s,transfer:ke,toXYZ:dv,fromXYZ:pv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:yi}}}),o}const Ue=KE();function ba(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function eo(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Bs;class QE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Bs===void 0&&(Bs=Mc("canvas")),Bs.width=e.width,Bs.height=e.height;const u=Bs.getContext("2d");e instanceof ImageData?u.putImageData(e,0,0):u.drawImage(e,0,0,e.width,e.height),s=Bs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Mc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const u=s.getImageData(0,0,e.width,e.height),f=u.data;for(let h=0;h<f.length;h++)f[h]=ba(f[h]/255)*255;return s.putImageData(u,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ba(i[s]/255)*255):i[s]=ba(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let JE=0;class Op{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=uo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let h=0,d=u.length;h<d;h++)u[h].isDataTexture?f.push(ud(u[h].image)):f.push(ud(u[h]))}else f=ud(u);s.url=f}return i||(e.images[this.uuid]=s),s}}function ud(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?QE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $E=0;const cd=new rt;class Kn extends lo{constructor(e=Kn.DEFAULT_IMAGE,i=Kn.DEFAULT_MAPPING,s=kr,u=kr,f=Ki,h=Yr,d=Li,v=$i,g=Kn.DEFAULT_ANISOTROPY,S=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=uo(),this.name="",this.source=new Op(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=h,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=v,this.offset=new ze(0,0),this.repeat=new ze(1,1),this.center=new ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=S,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(cd).x}get height(){return this.source.getSize(cd).y}get depth(){return this.source.getSize(cd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}u&&s&&u.isVector2&&s.isVector2||u&&s&&u.isVector3&&s.isVector3||u&&s&&u.isMatrix3&&s.isMatrix3?u.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wd:e.x=e.x-Math.floor(e.x);break;case kr:e.x=e.x<0?0:1;break;case jd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wd:e.y=e.y-Math.floor(e.y);break;case kr:e.y=e.y<0?0:1;break;case jd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=lS;Kn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,i=0,s=0,u=1){sn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,u){return this.x=e,this.y=i,this.z=s,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,u=this.z,f=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*u+h[12]*f,this.y=h[1]*i+h[5]*s+h[9]*u+h[13]*f,this.z=h[2]*i+h[6]*s+h[10]*u+h[14]*f,this.w=h[3]*i+h[7]*s+h[11]*u+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,u,f;const v=e.elements,g=v[0],S=v[4],p=v[8],x=v[1],M=v[5],b=v[9],R=v[2],y=v[6],m=v[10];if(Math.abs(S-x)<.01&&Math.abs(p-R)<.01&&Math.abs(b-y)<.01){if(Math.abs(S+x)<.1&&Math.abs(p+R)<.1&&Math.abs(b+y)<.1&&Math.abs(g+M+m-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(g+1)/2,w=(M+1)/2,F=(m+1)/2,B=(S+x)/4,z=(p+R)/4,Y=(b+y)/4;return O>w&&O>F?O<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(O),u=B/s,f=z/s):w>F?w<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(w),s=B/u,f=Y/u):F<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(F),s=z/f,u=Y/f),this.set(s,u,f,i),this}let L=Math.sqrt((y-b)*(y-b)+(p-R)*(p-R)+(x-S)*(x-S));return Math.abs(L)<.001&&(L=1),this.x=(y-b)/L,this.y=(p-R)/L,this.z=(x-S)/L,this.w=Math.acos((g+M+m-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=be(this.x,e.x,i.x),this.y=be(this.y,e.y,i.y),this.z=be(this.z,e.z,i.z),this.w=be(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=be(this.x,e,i),this.y=be(this.y,e,i),this.z=be(this.z,e,i),this.w=be(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tT extends lo{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ki,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new sn(0,0,e,i),this.scissorTest=!1,this.viewport=new sn(0,0,e,i);const u={width:e,height:i,depth:s.depth},f=new Kn(u);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:Ki,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=e,this.textures[u].image.height=i,this.textures[u].image.depth=s,this.textures[u].isArrayTexture=this.textures[u].image.depth>1;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const u=Object.assign({},e.textures[i].image);this.textures[i].source=new Op(u)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zr extends tT{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class xS extends Kn{constructor(e=null,i=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:u},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class eT extends Kn{constructor(e=null,i=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:u},this.magFilter=Oi,this.minFilter=Oi,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xl{constructor(e=new rt(1/0,1/0,1/0),i=new rt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(wi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(wi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=wi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,wi):wi.fromBufferAttribute(f,h),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),qu.copy(s.boundingBox)),qu.applyMatrix4(e.matrixWorld),this.union(qu)}const u=e.children;for(let f=0,h=u.length;f<h;f++)this.expandByObject(u[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rl),Wu.subVectors(this.max,rl),Fs.subVectors(e.a,rl),Hs.subVectors(e.b,rl),Gs.subVectors(e.c,rl),tr.subVectors(Hs,Fs),er.subVectors(Gs,Hs),Or.subVectors(Fs,Gs);let i=[0,-tr.z,tr.y,0,-er.z,er.y,0,-Or.z,Or.y,tr.z,0,-tr.x,er.z,0,-er.x,Or.z,0,-Or.x,-tr.y,tr.x,0,-er.y,er.x,0,-Or.y,Or.x,0];return!fd(i,Fs,Hs,Gs,Wu)||(i=[1,0,0,0,1,0,0,0,1],!fd(i,Fs,Hs,Gs,Wu))?!1:(ju.crossVectors(tr,er),i=[ju.x,ju.y,ju.z],fd(i,Fs,Hs,Gs,Wu))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const va=[new rt,new rt,new rt,new rt,new rt,new rt,new rt,new rt],wi=new rt,qu=new xl,Fs=new rt,Hs=new rt,Gs=new rt,tr=new rt,er=new rt,Or=new rt,rl=new rt,Wu=new rt,ju=new rt,zr=new rt;function fd(o,e,i,s,u){for(let f=0,h=o.length-3;f<=h;f+=3){zr.fromArray(o,f);const d=u.x*Math.abs(zr.x)+u.y*Math.abs(zr.y)+u.z*Math.abs(zr.z),v=e.dot(zr),g=i.dot(zr),S=s.dot(zr);if(Math.max(-Math.max(v,g,S),Math.min(v,g,S))>d)return!1}return!0}const nT=new xl,sl=new rt,hd=new rt;class Tc{constructor(e=new rt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):nT.setFromPoints(e).getCenter(s);let u=0;for(let f=0,h=e.length;f<h;f++)u=Math.max(u,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sl.subVectors(e,this.center);const i=sl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),u=(s-this.radius)*.5;this.center.addScaledVector(sl,u/s),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(hd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sl.copy(e.center).add(hd)),this.expandByPoint(sl.copy(e.center).sub(hd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Sa=new rt,dd=new rt,Zu=new rt,nr=new rt,pd=new rt,Ku=new rt,md=new rt;class yS{constructor(e=new rt,i=new rt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Sa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Sa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Sa.copy(this.origin).addScaledVector(this.direction,i),Sa.distanceToSquared(e))}distanceSqToSegment(e,i,s,u){dd.copy(e).add(i).multiplyScalar(.5),Zu.copy(i).sub(e).normalize(),nr.copy(this.origin).sub(dd);const f=e.distanceTo(i)*.5,h=-this.direction.dot(Zu),d=nr.dot(this.direction),v=-nr.dot(Zu),g=nr.lengthSq(),S=Math.abs(1-h*h);let p,x,M,b;if(S>0)if(p=h*v-d,x=h*d-v,b=f*S,p>=0)if(x>=-b)if(x<=b){const R=1/S;p*=R,x*=R,M=p*(p+h*x+2*d)+x*(h*p+x+2*v)+g}else x=f,p=Math.max(0,-(h*x+d)),M=-p*p+x*(x+2*v)+g;else x=-f,p=Math.max(0,-(h*x+d)),M=-p*p+x*(x+2*v)+g;else x<=-b?(p=Math.max(0,-(-h*f+d)),x=p>0?-f:Math.min(Math.max(-f,-v),f),M=-p*p+x*(x+2*v)+g):x<=b?(p=0,x=Math.min(Math.max(-f,-v),f),M=x*(x+2*v)+g):(p=Math.max(0,-(h*f+d)),x=p>0?f:Math.min(Math.max(-f,-v),f),M=-p*p+x*(x+2*v)+g);else x=h>0?-f:f,p=Math.max(0,-(h*x+d)),M=-p*p+x*(x+2*v)+g;return s&&s.copy(this.origin).addScaledVector(this.direction,p),u&&u.copy(dd).addScaledVector(Zu,x),M}intersectSphere(e,i){Sa.subVectors(e.center,this.origin);const s=Sa.dot(this.direction),u=Sa.dot(Sa)-s*s,f=e.radius*e.radius;if(u>f)return null;const h=Math.sqrt(f-u),d=s-h,v=s+h;return v<0?null:d<0?this.at(v,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,u,f,h,d,v;const g=1/this.direction.x,S=1/this.direction.y,p=1/this.direction.z,x=this.origin;return g>=0?(s=(e.min.x-x.x)*g,u=(e.max.x-x.x)*g):(s=(e.max.x-x.x)*g,u=(e.min.x-x.x)*g),S>=0?(f=(e.min.y-x.y)*S,h=(e.max.y-x.y)*S):(f=(e.max.y-x.y)*S,h=(e.min.y-x.y)*S),s>h||f>u||((f>s||isNaN(s))&&(s=f),(h<u||isNaN(u))&&(u=h),p>=0?(d=(e.min.z-x.z)*p,v=(e.max.z-x.z)*p):(d=(e.max.z-x.z)*p,v=(e.min.z-x.z)*p),s>v||d>u)||((d>s||s!==s)&&(s=d),(v<u||u!==u)&&(u=v),u<0)?null:this.at(s>=0?s:u,i)}intersectsBox(e){return this.intersectBox(e,Sa)!==null}intersectTriangle(e,i,s,u,f){pd.subVectors(i,e),Ku.subVectors(s,e),md.crossVectors(pd,Ku);let h=this.direction.dot(md),d;if(h>0){if(u)return null;d=1}else if(h<0)d=-1,h=-h;else return null;nr.subVectors(this.origin,e);const v=d*this.direction.dot(Ku.crossVectors(nr,Ku));if(v<0)return null;const g=d*this.direction.dot(pd.cross(nr));if(g<0||v+g>h)return null;const S=-d*nr.dot(md);return S<0?null:this.at(S/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class on{constructor(e,i,s,u,f,h,d,v,g,S,p,x,M,b,R,y){on.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,u,f,h,d,v,g,S,p,x,M,b,R,y)}set(e,i,s,u,f,h,d,v,g,S,p,x,M,b,R,y){const m=this.elements;return m[0]=e,m[4]=i,m[8]=s,m[12]=u,m[1]=f,m[5]=h,m[9]=d,m[13]=v,m[2]=g,m[6]=S,m[10]=p,m[14]=x,m[3]=M,m[7]=b,m[11]=R,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new on().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,u=1/Vs.setFromMatrixColumn(e,0).length(),f=1/Vs.setFromMatrixColumn(e,1).length(),h=1/Vs.setFromMatrixColumn(e,2).length();return i[0]=s[0]*u,i[1]=s[1]*u,i[2]=s[2]*u,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,u=e.y,f=e.z,h=Math.cos(s),d=Math.sin(s),v=Math.cos(u),g=Math.sin(u),S=Math.cos(f),p=Math.sin(f);if(e.order==="XYZ"){const x=h*S,M=h*p,b=d*S,R=d*p;i[0]=v*S,i[4]=-v*p,i[8]=g,i[1]=M+b*g,i[5]=x-R*g,i[9]=-d*v,i[2]=R-x*g,i[6]=b+M*g,i[10]=h*v}else if(e.order==="YXZ"){const x=v*S,M=v*p,b=g*S,R=g*p;i[0]=x+R*d,i[4]=b*d-M,i[8]=h*g,i[1]=h*p,i[5]=h*S,i[9]=-d,i[2]=M*d-b,i[6]=R+x*d,i[10]=h*v}else if(e.order==="ZXY"){const x=v*S,M=v*p,b=g*S,R=g*p;i[0]=x-R*d,i[4]=-h*p,i[8]=b+M*d,i[1]=M+b*d,i[5]=h*S,i[9]=R-x*d,i[2]=-h*g,i[6]=d,i[10]=h*v}else if(e.order==="ZYX"){const x=h*S,M=h*p,b=d*S,R=d*p;i[0]=v*S,i[4]=b*g-M,i[8]=x*g+R,i[1]=v*p,i[5]=R*g+x,i[9]=M*g-b,i[2]=-g,i[6]=d*v,i[10]=h*v}else if(e.order==="YZX"){const x=h*v,M=h*g,b=d*v,R=d*g;i[0]=v*S,i[4]=R-x*p,i[8]=b*p+M,i[1]=p,i[5]=h*S,i[9]=-d*S,i[2]=-g*S,i[6]=M*p+b,i[10]=x-R*p}else if(e.order==="XZY"){const x=h*v,M=h*g,b=d*v,R=d*g;i[0]=v*S,i[4]=-p,i[8]=g*S,i[1]=x*p+R,i[5]=h*S,i[9]=M*p-b,i[2]=b*p-M,i[6]=d*S,i[10]=R*p+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(iT,e,aT)}lookAt(e,i,s){const u=this.elements;return oi.subVectors(e,i),oi.lengthSq()===0&&(oi.z=1),oi.normalize(),ir.crossVectors(s,oi),ir.lengthSq()===0&&(Math.abs(s.z)===1?oi.x+=1e-4:oi.z+=1e-4,oi.normalize(),ir.crossVectors(s,oi)),ir.normalize(),Qu.crossVectors(oi,ir),u[0]=ir.x,u[4]=Qu.x,u[8]=oi.x,u[1]=ir.y,u[5]=Qu.y,u[9]=oi.y,u[2]=ir.z,u[6]=Qu.z,u[10]=oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,u=i.elements,f=this.elements,h=s[0],d=s[4],v=s[8],g=s[12],S=s[1],p=s[5],x=s[9],M=s[13],b=s[2],R=s[6],y=s[10],m=s[14],L=s[3],O=s[7],w=s[11],F=s[15],B=u[0],z=u[4],Y=u[8],D=u[12],C=u[1],X=u[5],nt=u[9],ut=u[13],_t=u[2],lt=u[6],q=u[10],at=u[14],G=u[3],gt=u[7],vt=u[11],Ft=u[15];return f[0]=h*B+d*C+v*_t+g*G,f[4]=h*z+d*X+v*lt+g*gt,f[8]=h*Y+d*nt+v*q+g*vt,f[12]=h*D+d*ut+v*at+g*Ft,f[1]=S*B+p*C+x*_t+M*G,f[5]=S*z+p*X+x*lt+M*gt,f[9]=S*Y+p*nt+x*q+M*vt,f[13]=S*D+p*ut+x*at+M*Ft,f[2]=b*B+R*C+y*_t+m*G,f[6]=b*z+R*X+y*lt+m*gt,f[10]=b*Y+R*nt+y*q+m*vt,f[14]=b*D+R*ut+y*at+m*Ft,f[3]=L*B+O*C+w*_t+F*G,f[7]=L*z+O*X+w*lt+F*gt,f[11]=L*Y+O*nt+w*q+F*vt,f[15]=L*D+O*ut+w*at+F*Ft,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],u=e[8],f=e[12],h=e[1],d=e[5],v=e[9],g=e[13],S=e[2],p=e[6],x=e[10],M=e[14],b=e[3],R=e[7],y=e[11],m=e[15];return b*(+f*v*p-u*g*p-f*d*x+s*g*x+u*d*M-s*v*M)+R*(+i*v*M-i*g*x+f*h*x-u*h*M+u*g*S-f*v*S)+y*(+i*g*p-i*d*M-f*h*p+s*h*M+f*d*S-s*g*S)+m*(-u*d*S-i*v*p+i*d*x+u*h*p-s*h*x+s*v*S)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=i,u[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],u=e[2],f=e[3],h=e[4],d=e[5],v=e[6],g=e[7],S=e[8],p=e[9],x=e[10],M=e[11],b=e[12],R=e[13],y=e[14],m=e[15],L=p*y*g-R*x*g+R*v*M-d*y*M-p*v*m+d*x*m,O=b*x*g-S*y*g-b*v*M+h*y*M+S*v*m-h*x*m,w=S*R*g-b*p*g+b*d*M-h*R*M-S*d*m+h*p*m,F=b*p*v-S*R*v-b*d*x+h*R*x+S*d*y-h*p*y,B=i*L+s*O+u*w+f*F;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/B;return e[0]=L*z,e[1]=(R*x*f-p*y*f-R*u*M+s*y*M+p*u*m-s*x*m)*z,e[2]=(d*y*f-R*v*f+R*u*g-s*y*g-d*u*m+s*v*m)*z,e[3]=(p*v*f-d*x*f-p*u*g+s*x*g+d*u*M-s*v*M)*z,e[4]=O*z,e[5]=(S*y*f-b*x*f+b*u*M-i*y*M-S*u*m+i*x*m)*z,e[6]=(b*v*f-h*y*f-b*u*g+i*y*g+h*u*m-i*v*m)*z,e[7]=(h*x*f-S*v*f+S*u*g-i*x*g-h*u*M+i*v*M)*z,e[8]=w*z,e[9]=(b*p*f-S*R*f-b*s*M+i*R*M+S*s*m-i*p*m)*z,e[10]=(h*R*f-b*d*f+b*s*g-i*R*g-h*s*m+i*d*m)*z,e[11]=(S*d*f-h*p*f-S*s*g+i*p*g+h*s*M-i*d*M)*z,e[12]=F*z,e[13]=(S*R*u-b*p*u+b*s*x-i*R*x-S*s*y+i*p*y)*z,e[14]=(b*d*u-h*R*u-b*s*v+i*R*v+h*s*y-i*d*y)*z,e[15]=(h*p*u-S*d*u+S*s*v-i*p*v-h*s*x+i*d*x)*z,this}scale(e){const i=this.elements,s=e.x,u=e.y,f=e.z;return i[0]*=s,i[4]*=u,i[8]*=f,i[1]*=s,i[5]*=u,i[9]*=f,i[2]*=s,i[6]*=u,i[10]*=f,i[3]*=s,i[7]*=u,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,u))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),u=Math.sin(i),f=1-s,h=e.x,d=e.y,v=e.z,g=f*h,S=f*d;return this.set(g*h+s,g*d-u*v,g*v+u*d,0,g*d+u*v,S*d+s,S*v-u*h,0,g*v-u*d,S*v+u*h,f*v*v+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,u,f,h){return this.set(1,s,f,0,e,1,h,0,i,u,1,0,0,0,0,1),this}compose(e,i,s){const u=this.elements,f=i._x,h=i._y,d=i._z,v=i._w,g=f+f,S=h+h,p=d+d,x=f*g,M=f*S,b=f*p,R=h*S,y=h*p,m=d*p,L=v*g,O=v*S,w=v*p,F=s.x,B=s.y,z=s.z;return u[0]=(1-(R+m))*F,u[1]=(M+w)*F,u[2]=(b-O)*F,u[3]=0,u[4]=(M-w)*B,u[5]=(1-(x+m))*B,u[6]=(y+L)*B,u[7]=0,u[8]=(b+O)*z,u[9]=(y-L)*z,u[10]=(1-(x+R))*z,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,i,s){const u=this.elements;let f=Vs.set(u[0],u[1],u[2]).length();const h=Vs.set(u[4],u[5],u[6]).length(),d=Vs.set(u[8],u[9],u[10]).length();this.determinant()<0&&(f=-f),e.x=u[12],e.y=u[13],e.z=u[14],Di.copy(this);const g=1/f,S=1/h,p=1/d;return Di.elements[0]*=g,Di.elements[1]*=g,Di.elements[2]*=g,Di.elements[4]*=S,Di.elements[5]*=S,Di.elements[6]*=S,Di.elements[8]*=p,Di.elements[9]*=p,Di.elements[10]*=p,i.setFromRotationMatrix(Di),s.x=f,s.y=h,s.z=d,this}makePerspective(e,i,s,u,f,h,d=Qi,v=!1){const g=this.elements,S=2*f/(i-e),p=2*f/(s-u),x=(i+e)/(i-e),M=(s+u)/(s-u);let b,R;if(v)b=f/(h-f),R=h*f/(h-f);else if(d===Qi)b=-(h+f)/(h-f),R=-2*h*f/(h-f);else if(d===yc)b=-h/(h-f),R=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return g[0]=S,g[4]=0,g[8]=x,g[12]=0,g[1]=0,g[5]=p,g[9]=M,g[13]=0,g[2]=0,g[6]=0,g[10]=b,g[14]=R,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(e,i,s,u,f,h,d=Qi,v=!1){const g=this.elements,S=2/(i-e),p=2/(s-u),x=-(i+e)/(i-e),M=-(s+u)/(s-u);let b,R;if(v)b=1/(h-f),R=h/(h-f);else if(d===Qi)b=-2/(h-f),R=-(h+f)/(h-f);else if(d===yc)b=-1/(h-f),R=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return g[0]=S,g[4]=0,g[8]=0,g[12]=x,g[1]=0,g[5]=p,g[9]=0,g[13]=M,g[2]=0,g[6]=0,g[10]=b,g[14]=R,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let u=0;u<16;u++)if(i[u]!==s[u])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Vs=new rt,Di=new on,iT=new rt(0,0,0),aT=new rt(1,1,1),ir=new rt,Qu=new rt,oi=new rt,mv=new on,gv=new jr;class zi{constructor(e=0,i=0,s=0,u=zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,u=this._order){return this._x=e,this._y=i,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const u=e.elements,f=u[0],h=u[4],d=u[8],v=u[1],g=u[5],S=u[9],p=u[2],x=u[6],M=u[10];switch(i){case"XYZ":this._y=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-S,M),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(x,g),this._z=0);break;case"YXZ":this._x=Math.asin(-be(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(v,g)):(this._y=Math.atan2(-p,f),this._z=0);break;case"ZXY":this._x=Math.asin(be(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-p,M),this._z=Math.atan2(-h,g)):(this._y=0,this._z=Math.atan2(v,f));break;case"ZYX":this._y=Math.asin(-be(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(v,f)):(this._x=0,this._z=Math.atan2(-h,g));break;case"YZX":this._z=Math.asin(be(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(-S,g),this._y=Math.atan2(-p,f)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,g),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-S,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return mv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return gv.setFromEuler(this),this.setFromQuaternion(gv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zi.DEFAULT_ORDER="XYZ";class MS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rT=0;const _v=new rt,Xs=new jr,xa=new on,Ju=new rt,ol=new rt,sT=new rt,oT=new jr,vv=new rt(1,0,0),Sv=new rt(0,1,0),xv=new rt(0,0,1),yv={type:"added"},lT={type:"removed"},ks={type:"childadded",child:null},gd={type:"childremoved",child:null};class Tn extends lo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rT++}),this.uuid=uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Tn.DEFAULT_UP.clone();const e=new rt,i=new zi,s=new jr,u=new rt(1,1,1);function f(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new on},normalMatrix:{value:new de}}),this.matrix=new on,this.matrixWorld=new on,this.matrixAutoUpdate=Tn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new MS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Xs.setFromAxisAngle(e,i),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,i){return Xs.setFromAxisAngle(e,i),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(vv,e)}rotateY(e){return this.rotateOnAxis(Sv,e)}rotateZ(e){return this.rotateOnAxis(xv,e)}translateOnAxis(e,i){return _v.copy(e).applyQuaternion(this.quaternion),this.position.add(_v.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(vv,e)}translateY(e){return this.translateOnAxis(Sv,e)}translateZ(e){return this.translateOnAxis(xv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?Ju.copy(e):Ju.set(e,i,s);const u=this.parent;this.updateWorldMatrix(!0,!1),ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xa.lookAt(ol,Ju,this.up):xa.lookAt(Ju,ol,this.up),this.quaternion.setFromRotationMatrix(xa),u&&(xa.extractRotation(u.matrixWorld),Xs.setFromRotationMatrix(xa),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(yv),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(lT),gd.child=e,this.dispatchEvent(gd),gd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xa.multiply(e.parent.matrixWorld)),e.applyMatrix4(xa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(yv),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,u=this.children.length;s<u;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,e,sT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ol,oT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,u=i.length;s<u;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(d=>({...d})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(e),u.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(d,v){return d[v.uuid]===void 0&&(d[v.uuid]=v.toJSON(e)),v.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const v=d.shapes;if(Array.isArray(v))for(let g=0,S=v.length;g<S;g++){const p=v[g];f(e.shapes,p)}else f(e.shapes,v)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let v=0,g=this.material.length;v<g;v++)d.push(f(e.materials,this.material[v]));u.material=d}else u.material=f(e.materials,this.material);if(this.children.length>0){u.children=[];for(let d=0;d<this.children.length;d++)u.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let d=0;d<this.animations.length;d++){const v=this.animations[d];u.animations.push(f(e.animations,v))}}if(i){const d=h(e.geometries),v=h(e.materials),g=h(e.textures),S=h(e.images),p=h(e.shapes),x=h(e.skeletons),M=h(e.animations),b=h(e.nodes);d.length>0&&(s.geometries=d),v.length>0&&(s.materials=v),g.length>0&&(s.textures=g),S.length>0&&(s.images=S),p.length>0&&(s.shapes=p),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=u,s;function h(d){const v=[];for(const g in d){const S=d[g];delete S.metadata,v.push(S)}return v}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const u=e.children[s];this.add(u.clone())}return this}}Tn.DEFAULT_UP=new rt(0,1,0);Tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ui=new rt,ya=new rt,_d=new rt,Ma=new rt,Ys=new rt,qs=new rt,Mv=new rt,vd=new rt,Sd=new rt,xd=new rt,yd=new sn,Md=new sn,Ed=new sn;class Ni{constructor(e=new rt,i=new rt,s=new rt){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,u){u.subVectors(s,i),Ui.subVectors(e,i),u.cross(Ui);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(e,i,s,u,f){Ui.subVectors(u,i),ya.subVectors(s,i),_d.subVectors(e,i);const h=Ui.dot(Ui),d=Ui.dot(ya),v=Ui.dot(_d),g=ya.dot(ya),S=ya.dot(_d),p=h*g-d*d;if(p===0)return f.set(0,0,0),null;const x=1/p,M=(g*v-d*S)*x,b=(h*S-d*v)*x;return f.set(1-M-b,b,M)}static containsPoint(e,i,s,u){return this.getBarycoord(e,i,s,u,Ma)===null?!1:Ma.x>=0&&Ma.y>=0&&Ma.x+Ma.y<=1}static getInterpolation(e,i,s,u,f,h,d,v){return this.getBarycoord(e,i,s,u,Ma)===null?(v.x=0,v.y=0,"z"in v&&(v.z=0),"w"in v&&(v.w=0),null):(v.setScalar(0),v.addScaledVector(f,Ma.x),v.addScaledVector(h,Ma.y),v.addScaledVector(d,Ma.z),v)}static getInterpolatedAttribute(e,i,s,u,f,h){return yd.setScalar(0),Md.setScalar(0),Ed.setScalar(0),yd.fromBufferAttribute(e,i),Md.fromBufferAttribute(e,s),Ed.fromBufferAttribute(e,u),h.setScalar(0),h.addScaledVector(yd,f.x),h.addScaledVector(Md,f.y),h.addScaledVector(Ed,f.z),h}static isFrontFacing(e,i,s,u){return Ui.subVectors(s,i),ya.subVectors(e,i),Ui.cross(ya).dot(u)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,u){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,i,s,u){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ui.subVectors(this.c,this.b),ya.subVectors(this.a,this.b),Ui.cross(ya).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Ni.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,u,f){return Ni.getInterpolation(e,this.a,this.b,this.c,i,s,u,f)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,u=this.b,f=this.c;let h,d;Ys.subVectors(u,s),qs.subVectors(f,s),vd.subVectors(e,s);const v=Ys.dot(vd),g=qs.dot(vd);if(v<=0&&g<=0)return i.copy(s);Sd.subVectors(e,u);const S=Ys.dot(Sd),p=qs.dot(Sd);if(S>=0&&p<=S)return i.copy(u);const x=v*p-S*g;if(x<=0&&v>=0&&S<=0)return h=v/(v-S),i.copy(s).addScaledVector(Ys,h);xd.subVectors(e,f);const M=Ys.dot(xd),b=qs.dot(xd);if(b>=0&&M<=b)return i.copy(f);const R=M*g-v*b;if(R<=0&&g>=0&&b<=0)return d=g/(g-b),i.copy(s).addScaledVector(qs,d);const y=S*b-M*p;if(y<=0&&p-S>=0&&M-b>=0)return Mv.subVectors(f,u),d=(p-S)/(p-S+(M-b)),i.copy(u).addScaledVector(Mv,d);const m=1/(y+R+x);return h=R*m,d=x*m,i.copy(s).addScaledVector(Ys,h).addScaledVector(qs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const ES={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},$u={h:0,s:0,l:0};function Td(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Se{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=yi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ue.colorSpaceToWorking(this,i),this}setRGB(e,i,s,u=Ue.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ue.colorSpaceToWorking(this,u),this}setHSL(e,i,s,u=Ue.workingColorSpace){if(e=Lp(e,1),i=be(i,0,1),s=be(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,h=2*s-f;this.r=Td(h,f,e+1/3),this.g=Td(h,f,e),this.b=Td(h,f,e-1/3)}return Ue.colorSpaceToWorking(this,u),this}setStyle(e,i=yi){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=u[1],d=u[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=u[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=yi){const s=ES[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=eo(e.r),this.g=eo(e.g),this.b=eo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yi){return Ue.workingToColorSpace(zn.copy(this),e),Math.round(be(zn.r*255,0,255))*65536+Math.round(be(zn.g*255,0,255))*256+Math.round(be(zn.b*255,0,255))}getHexString(e=yi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ue.workingColorSpace){Ue.workingToColorSpace(zn.copy(this),i);const s=zn.r,u=zn.g,f=zn.b,h=Math.max(s,u,f),d=Math.min(s,u,f);let v,g;const S=(d+h)/2;if(d===h)v=0,g=0;else{const p=h-d;switch(g=S<=.5?p/(h+d):p/(2-h-d),h){case s:v=(u-f)/p+(u<f?6:0);break;case u:v=(f-s)/p+2;break;case f:v=(s-u)/p+4;break}v/=6}return e.h=v,e.s=g,e.l=S,e}getRGB(e,i=Ue.workingColorSpace){return Ue.workingToColorSpace(zn.copy(this),i),e.r=zn.r,e.g=zn.g,e.b=zn.b,e}getStyle(e=yi){Ue.workingToColorSpace(zn.copy(this),e);const i=zn.r,s=zn.g,u=zn.b;return e!==yi?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(e,i,s){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+i,ar.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(ar),e.getHSL($u);const s=hl(ar.h,$u.h,i),u=hl(ar.s,$u.s,i),f=hl(ar.l,$u.l,i);return this.setHSL(s,u,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,u=this.b,f=e.elements;return this.r=f[0]*i+f[3]*s+f[6]*u,this.g=f[1]*i+f[4]*s+f[7]*u,this.b=f[2]*i+f[5]*s+f[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const zn=new Se;Se.NAMES=ES;let uT=0;class co extends lo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uT++}),this.uuid=uo(),this.name="",this.type="Material",this.blending=to,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Pd,this.blendDst=Id,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=io,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ov,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const u=this[i];if(u===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==to&&(s.blending=this.blending),this.side!==ur&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Pd&&(s.blendSrc=this.blendSrc),this.blendDst!==Id&&(s.blendDst=this.blendDst),this.blendEquation!==Vr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==io&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ov&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const h=[];for(const d in f){const v=f[d];delete v.metadata,h.push(v)}return h}if(i){const f=u(e.textures),h=u(e.images);f.length>0&&(s.textures=f),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const u=i.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zp extends co{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.combine=oS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pn=new rt,tc=new ze;let cT=0;class ui{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cT++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=lv,this.updateRanges=[],this.gpuType=Ta,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[e+u]=i.array[s+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)tc.fromBufferAttribute(this,i),tc.applyMatrix3(e),this.setXY(i,tc.x,tc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Js(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Gn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Js(i,this.array)),i}setX(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Js(i,this.array)),i}setY(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Js(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Js(i,this.array)),i}setW(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,u){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),u=Gn(u,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=u,this}setXYZW(e,i,s,u,f){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),s=Gn(s,this.array),u=Gn(u,this.array),f=Gn(f,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=u,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lv&&(e.usage=this.usage),e}}class TS extends ui{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class bS extends ui{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Ji extends ui{constructor(e,i,s){super(new Float32Array(e),i,s)}}let fT=0;const xi=new on,bd=new Tn,Ws=new rt,li=new xl,ll=new xl,En=new rt;class ea extends lo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fT++}),this.uuid=uo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(SS(e)?bS:TS)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new de().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,i,s){return xi.makeTranslation(e,i,s),this.applyMatrix4(xi),this}scale(e,i,s){return xi.makeScale(e,i,s),this.applyMatrix4(xi),this}lookAt(e){return bd.lookAt(e),bd.updateMatrix(),this.applyMatrix4(bd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let u=0,f=e.length;u<f;u++){const h=e[u];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ji(s,3))}else{const s=Math.min(e.length,i.count);for(let u=0;u<s;u++){const f=e[u];i.setXYZ(u,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new xl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new rt(-1/0,-1/0,-1/0),new rt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,u=i.length;s<u;s++){const f=i[s];li.setFromBufferAttribute(f),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tc);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new rt,1/0);return}if(e){const s=this.boundingSphere.center;if(li.setFromBufferAttribute(e),i)for(let f=0,h=i.length;f<h;f++){const d=i[f];ll.setFromBufferAttribute(d),this.morphTargetsRelative?(En.addVectors(li.min,ll.min),li.expandByPoint(En),En.addVectors(li.max,ll.max),li.expandByPoint(En)):(li.expandByPoint(ll.min),li.expandByPoint(ll.max))}li.getCenter(s);let u=0;for(let f=0,h=e.count;f<h;f++)En.fromBufferAttribute(e,f),u=Math.max(u,s.distanceToSquared(En));if(i)for(let f=0,h=i.length;f<h;f++){const d=i[f],v=this.morphTargetsRelative;for(let g=0,S=d.count;g<S;g++)En.fromBufferAttribute(d,g),v&&(Ws.fromBufferAttribute(e,g),En.add(Ws)),u=Math.max(u,s.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,u=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],v=[];for(let Y=0;Y<s.count;Y++)d[Y]=new rt,v[Y]=new rt;const g=new rt,S=new rt,p=new rt,x=new ze,M=new ze,b=new ze,R=new rt,y=new rt;function m(Y,D,C){g.fromBufferAttribute(s,Y),S.fromBufferAttribute(s,D),p.fromBufferAttribute(s,C),x.fromBufferAttribute(f,Y),M.fromBufferAttribute(f,D),b.fromBufferAttribute(f,C),S.sub(g),p.sub(g),M.sub(x),b.sub(x);const X=1/(M.x*b.y-b.x*M.y);isFinite(X)&&(R.copy(S).multiplyScalar(b.y).addScaledVector(p,-M.y).multiplyScalar(X),y.copy(p).multiplyScalar(M.x).addScaledVector(S,-b.x).multiplyScalar(X),d[Y].add(R),d[D].add(R),d[C].add(R),v[Y].add(y),v[D].add(y),v[C].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let Y=0,D=L.length;Y<D;++Y){const C=L[Y],X=C.start,nt=C.count;for(let ut=X,_t=X+nt;ut<_t;ut+=3)m(e.getX(ut+0),e.getX(ut+1),e.getX(ut+2))}const O=new rt,w=new rt,F=new rt,B=new rt;function z(Y){F.fromBufferAttribute(u,Y),B.copy(F);const D=d[Y];O.copy(D),O.sub(F.multiplyScalar(F.dot(D))).normalize(),w.crossVectors(B,D);const X=w.dot(v[Y])<0?-1:1;h.setXYZW(Y,O.x,O.y,O.z,X)}for(let Y=0,D=L.length;Y<D;++Y){const C=L[Y],X=C.start,nt=C.count;for(let ut=X,_t=X+nt;ut<_t;ut+=3)z(e.getX(ut+0)),z(e.getX(ut+1)),z(e.getX(ut+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new ui(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const u=new rt,f=new rt,h=new rt,d=new rt,v=new rt,g=new rt,S=new rt,p=new rt;if(e)for(let x=0,M=e.count;x<M;x+=3){const b=e.getX(x+0),R=e.getX(x+1),y=e.getX(x+2);u.fromBufferAttribute(i,b),f.fromBufferAttribute(i,R),h.fromBufferAttribute(i,y),S.subVectors(h,f),p.subVectors(u,f),S.cross(p),d.fromBufferAttribute(s,b),v.fromBufferAttribute(s,R),g.fromBufferAttribute(s,y),d.add(S),v.add(S),g.add(S),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(R,v.x,v.y,v.z),s.setXYZ(y,g.x,g.y,g.z)}else for(let x=0,M=i.count;x<M;x+=3)u.fromBufferAttribute(i,x+0),f.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),S.subVectors(h,f),p.subVectors(u,f),S.cross(p),s.setXYZ(x+0,S.x,S.y,S.z),s.setXYZ(x+1,S.x,S.y,S.z),s.setXYZ(x+2,S.x,S.y,S.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)En.fromBufferAttribute(e,i),En.normalize(),e.setXYZ(i,En.x,En.y,En.z)}toNonIndexed(){function e(d,v){const g=d.array,S=d.itemSize,p=d.normalized,x=new g.constructor(v.length*S);let M=0,b=0;for(let R=0,y=v.length;R<y;R++){d.isInterleavedBufferAttribute?M=v[R]*d.data.stride+d.offset:M=v[R]*S;for(let m=0;m<S;m++)x[b++]=g[M++]}return new ui(x,S,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new ea,s=this.index.array,u=this.attributes;for(const d in u){const v=u[d],g=e(v,s);i.setAttribute(d,g)}const f=this.morphAttributes;for(const d in f){const v=[],g=f[d];for(let S=0,p=g.length;S<p;S++){const x=g[S],M=e(x,s);v.push(M)}i.morphAttributes[d]=v}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,v=h.length;d<v;d++){const g=h[d];i.addGroup(g.start,g.count,g.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const v=this.parameters;for(const g in v)v[g]!==void 0&&(e[g]=v[g]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const v in s){const g=s[v];e.data.attributes[v]=g.toJSON(e.data)}const u={};let f=!1;for(const v in this.morphAttributes){const g=this.morphAttributes[v],S=[];for(let p=0,x=g.length;p<x;p++){const M=g[p];S.push(M.toJSON(e.data))}S.length>0&&(u[v]=S,f=!0)}f&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const u=e.attributes;for(const g in u){const S=u[g];this.setAttribute(g,S.clone(i))}const f=e.morphAttributes;for(const g in f){const S=[],p=f[g];for(let x=0,M=p.length;x<M;x++)S.push(p[x].clone(i));this.morphAttributes[g]=S}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let g=0,S=h.length;g<S;g++){const p=h[g];this.addGroup(p.start,p.count,p.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const v=e.boundingSphere;return v!==null&&(this.boundingSphere=v.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Ev=new on,Pr=new yS,ec=new Tc,Tv=new rt,nc=new rt,ic=new rt,ac=new rt,Ad=new rt,rc=new rt,bv=new rt,sc=new rt;class jn extends Tn{constructor(e=new ea,i=new zp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const u=i[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,i){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(u,e);const d=this.morphTargetInfluences;if(f&&d){rc.set(0,0,0);for(let v=0,g=f.length;v<g;v++){const S=d[v],p=f[v];S!==0&&(Ad.fromBufferAttribute(p,e),h?rc.addScaledVector(Ad,S):rc.addScaledVector(Ad.sub(i),S))}i.add(rc)}return i}raycast(e,i){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),ec.copy(s.boundingSphere),ec.applyMatrix4(f),Pr.copy(e.ray).recast(e.near),!(ec.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(ec,Tv)===null||Pr.origin.distanceToSquared(Tv)>(e.far-e.near)**2))&&(Ev.copy(f).invert(),Pr.copy(e.ray).applyMatrix4(Ev),!(s.boundingBox!==null&&Pr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Pr)))}_computeIntersections(e,i,s){let u;const f=this.geometry,h=this.material,d=f.index,v=f.attributes.position,g=f.attributes.uv,S=f.attributes.uv1,p=f.attributes.normal,x=f.groups,M=f.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,R=x.length;b<R;b++){const y=x[b],m=h[y.materialIndex],L=Math.max(y.start,M.start),O=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let w=L,F=O;w<F;w+=3){const B=d.getX(w),z=d.getX(w+1),Y=d.getX(w+2);u=oc(this,m,e,s,g,S,p,B,z,Y),u&&(u.faceIndex=Math.floor(w/3),u.face.materialIndex=y.materialIndex,i.push(u))}}else{const b=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let y=b,m=R;y<m;y+=3){const L=d.getX(y),O=d.getX(y+1),w=d.getX(y+2);u=oc(this,h,e,s,g,S,p,L,O,w),u&&(u.faceIndex=Math.floor(y/3),i.push(u))}}else if(v!==void 0)if(Array.isArray(h))for(let b=0,R=x.length;b<R;b++){const y=x[b],m=h[y.materialIndex],L=Math.max(y.start,M.start),O=Math.min(v.count,Math.min(y.start+y.count,M.start+M.count));for(let w=L,F=O;w<F;w+=3){const B=w,z=w+1,Y=w+2;u=oc(this,m,e,s,g,S,p,B,z,Y),u&&(u.faceIndex=Math.floor(w/3),u.face.materialIndex=y.materialIndex,i.push(u))}}else{const b=Math.max(0,M.start),R=Math.min(v.count,M.start+M.count);for(let y=b,m=R;y<m;y+=3){const L=y,O=y+1,w=y+2;u=oc(this,h,e,s,g,S,p,L,O,w),u&&(u.faceIndex=Math.floor(y/3),i.push(u))}}}}function hT(o,e,i,s,u,f,h,d){let v;if(e.side===Zn?v=s.intersectTriangle(h,f,u,!0,d):v=s.intersectTriangle(u,f,h,e.side===ur,d),v===null)return null;sc.copy(d),sc.applyMatrix4(o.matrixWorld);const g=i.ray.origin.distanceTo(sc);return g<i.near||g>i.far?null:{distance:g,point:sc.clone(),object:o}}function oc(o,e,i,s,u,f,h,d,v,g){o.getVertexPosition(d,nc),o.getVertexPosition(v,ic),o.getVertexPosition(g,ac);const S=hT(o,e,i,s,nc,ic,ac,bv);if(S){const p=new rt;Ni.getBarycoord(bv,nc,ic,ac,p),u&&(S.uv=Ni.getInterpolatedAttribute(u,d,v,g,p,new ze)),f&&(S.uv1=Ni.getInterpolatedAttribute(f,d,v,g,p,new ze)),h&&(S.normal=Ni.getInterpolatedAttribute(h,d,v,g,p,new rt),S.normal.dot(s.direction)>0&&S.normal.multiplyScalar(-1));const x={a:d,b:v,c:g,normal:new rt,materialIndex:0};Ni.getNormal(nc,ic,ac,x.normal),S.face=x,S.barycoord=p}return S}class Kr extends ea{constructor(e=1,i=1,s=1,u=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:u,heightSegments:f,depthSegments:h};const d=this;u=Math.floor(u),f=Math.floor(f),h=Math.floor(h);const v=[],g=[],S=[],p=[];let x=0,M=0;b("z","y","x",-1,-1,s,i,e,h,f,0),b("z","y","x",1,-1,s,i,-e,h,f,1),b("x","z","y",1,1,e,s,i,u,h,2),b("x","z","y",1,-1,e,s,-i,u,h,3),b("x","y","z",1,-1,e,i,s,u,f,4),b("x","y","z",-1,-1,e,i,-s,u,f,5),this.setIndex(v),this.setAttribute("position",new Ji(g,3)),this.setAttribute("normal",new Ji(S,3)),this.setAttribute("uv",new Ji(p,2));function b(R,y,m,L,O,w,F,B,z,Y,D){const C=w/z,X=F/Y,nt=w/2,ut=F/2,_t=B/2,lt=z+1,q=Y+1;let at=0,G=0;const gt=new rt;for(let vt=0;vt<q;vt++){const Ft=vt*X-ut;for(let ae=0;ae<lt;ae++){const _e=ae*C-nt;gt[R]=_e*L,gt[y]=Ft*O,gt[m]=_t,g.push(gt.x,gt.y,gt.z),gt[R]=0,gt[y]=0,gt[m]=B>0?1:-1,S.push(gt.x,gt.y,gt.z),p.push(ae/z),p.push(1-vt/Y),at+=1}}for(let vt=0;vt<Y;vt++)for(let Ft=0;Ft<z;Ft++){const ae=x+Ft+lt*vt,_e=x+Ft+lt*(vt+1),I=x+(Ft+1)+lt*(vt+1),ct=x+(Ft+1)+lt*vt;v.push(ae,_e,ct),v.push(_e,I,ct),G+=6}d.addGroup(M,G,D),M+=G,x+=at}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oo(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const u=o[i][s];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=u.clone():Array.isArray(u)?e[i][s]=u.slice():e[i][s]=u}}return e}function Vn(o){const e={};for(let i=0;i<o.length;i++){const s=oo(o[i]);for(const u in s)e[u]=s[u]}return e}function dT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function AS(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ue.workingColorSpace}const pT={clone:oo,merge:Vn};var mT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ta extends co{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mT,this.fragmentShader=gT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oo(e.uniforms),this.uniformsGroups=dT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const u in this.uniforms){const h=this.uniforms[u].value;h&&h.isTexture?i.uniforms[u]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[u]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[u]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[u]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[u]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[u]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[u]={type:"m4",value:h.toArray()}:i.uniforms[u]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class RS extends Tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new on,this.projectionMatrix=new on,this.projectionMatrixInverse=new on,this.coordinateSystem=Qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const rr=new rt,Av=new ze,Rv=new ze;class Mi extends RS{constructor(e=50,i=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=_l*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _l*2*Math.atan(Math.tan(fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,i){return this.getViewBounds(e,Av,Rv),i.subVectors(Rv,Av)}setViewOffset(e,i,s,u,f,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(fl*.5*this.fov)/this.zoom,s=2*i,u=this.aspect*s,f=-.5*u;const h=this.view;if(this.view!==null&&this.view.enabled){const v=h.fullWidth,g=h.fullHeight;f+=h.offsetX*u/v,i-=h.offsetY*s/g,u*=h.width/v,s*=h.height/g}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const js=-90,Zs=1;class _T extends Tn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new Mi(js,Zs,e,i);u.layers=this.layers,this.add(u);const f=new Mi(js,Zs,e,i);f.layers=this.layers,this.add(f);const h=new Mi(js,Zs,e,i);h.layers=this.layers,this.add(h);const d=new Mi(js,Zs,e,i);d.layers=this.layers,this.add(d);const v=new Mi(js,Zs,e,i);v.layers=this.layers,this.add(v);const g=new Mi(js,Zs,e,i);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,u,f,h,d,v]=i;for(const g of i)this.remove(g);if(e===Qi)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),v.up.set(0,1,0),v.lookAt(0,0,-1);else if(e===yc)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),v.up.set(0,-1,0),v.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of i)this.add(g),g.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,v,g,S]=this.children,p=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,u),e.render(i,f),e.setRenderTarget(s,1,u),e.render(i,h),e.setRenderTarget(s,2,u),e.render(i,d),e.setRenderTarget(s,3,u),e.render(i,v),e.setRenderTarget(s,4,u),e.render(i,g),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,u),e.render(i,S),e.setRenderTarget(p,x,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class CS extends Kn{constructor(e=[],i=ao,s,u,f,h,d,v,g,S){super(e,i,s,u,f,h,d,v,g,S),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class vT extends Zr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},u=[s,s,s,s,s,s];this.texture=new CS(u),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},u=new Kr(5,5,5),f=new ta({name:"CubemapFromEquirect",uniforms:oo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Zn,blending:or});f.uniforms.tEquirect.value=i;const h=new jn(u,f),d=i.minFilter;return i.minFilter===Yr&&(i.minFilter=Ki),new _T(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,u=!0){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,u);e.setRenderTarget(f)}}class qr extends Tn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ST={type:"move"};class Rd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new rt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new rt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new rt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new rt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let u=null,f=null,h=null;const d=this._targetRay,v=this._grip,g=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(g&&e.hand){h=!0;for(const R of e.hand.values()){const y=i.getJointPose(R,s),m=this._getHandJoint(g,R);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}const S=g.joints["index-finger-tip"],p=g.joints["thumb-tip"],x=S.position.distanceTo(p.position),M=.02,b=.005;g.inputState.pinching&&x>M+b?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&x<=M-b&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else v!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,s),f!==null&&(v.matrix.fromArray(f.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,f.linearVelocity?(v.hasLinearVelocity=!0,v.linearVelocity.copy(f.linearVelocity)):v.hasLinearVelocity=!1,f.angularVelocity?(v.hasAngularVelocity=!0,v.angularVelocity.copy(f.angularVelocity)):v.hasAngularVelocity=!1));d!==null&&(u=i.getPose(e.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,u.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(u.linearVelocity)):d.hasLinearVelocity=!1,u.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(u.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ST)))}return d!==null&&(d.visible=u!==null),v!==null&&(v.visible=f!==null),g!==null&&(g.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new qr;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class xT extends Tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zi,this.environmentIntensity=1,this.environmentRotation=new zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Cd=new rt,yT=new rt,MT=new de;class Hr{constructor(e=new rt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,u){return this.normal.set(e,i,s),this.constant=u,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const u=Cd.subVectors(s,i).cross(yT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Cd),u=this.normal.dot(s);if(u===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/u;return f<0||f>1?null:i.copy(e.start).addScaledVector(s,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||MT.getNormalMatrix(e),u=this.coplanarPoint(Cd).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new Tc,ET=new ze(.5,.5),lc=new rt;class Pp{constructor(e=new Hr,i=new Hr,s=new Hr,u=new Hr,f=new Hr,h=new Hr){this.planes=[e,i,s,u,f,h]}set(e,i,s,u,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(u),d[4].copy(f),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=Qi,s=!1){const u=this.planes,f=e.elements,h=f[0],d=f[1],v=f[2],g=f[3],S=f[4],p=f[5],x=f[6],M=f[7],b=f[8],R=f[9],y=f[10],m=f[11],L=f[12],O=f[13],w=f[14],F=f[15];if(u[0].setComponents(g-h,M-S,m-b,F-L).normalize(),u[1].setComponents(g+h,M+S,m+b,F+L).normalize(),u[2].setComponents(g+d,M+p,m+R,F+O).normalize(),u[3].setComponents(g-d,M-p,m-R,F-O).normalize(),s)u[4].setComponents(v,x,y,w).normalize(),u[5].setComponents(g-v,M-x,m-y,F-w).normalize();else if(u[4].setComponents(g-v,M-x,m-y,F-w).normalize(),i===Qi)u[5].setComponents(g+v,M+x,m+y,F+w).normalize();else if(i===yc)u[5].setComponents(v,x,y,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ir.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){Ir.center.set(0,0,0);const i=ET.distanceTo(e.center);return Ir.radius=.7071067811865476+i,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const i=this.planes,s=e.center,u=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const u=i[s];if(lc.x=u.normal.x>0?e.max.x:e.min.x,lc.y=u.normal.y>0?e.max.y:e.min.y,lc.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(lc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class TT extends co{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Cv=new on,Ep=new yS,uc=new Tc,cc=new rt;class wv extends Tn{constructor(e=new ea,i=new TT){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,i){const s=this.geometry,u=this.matrixWorld,f=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),uc.copy(s.boundingSphere),uc.applyMatrix4(u),uc.radius+=f,e.ray.intersectsSphere(uc)===!1)return;Cv.copy(u).invert(),Ep.copy(e.ray).applyMatrix4(Cv);const d=f/((this.scale.x+this.scale.y+this.scale.z)/3),v=d*d,g=s.index,p=s.attributes.position;if(g!==null){const x=Math.max(0,h.start),M=Math.min(g.count,h.start+h.count);for(let b=x,R=M;b<R;b++){const y=g.getX(b);cc.fromBufferAttribute(p,y),Dv(cc,y,v,u,e,i,this)}}else{const x=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let b=x,R=M;b<R;b++)cc.fromBufferAttribute(p,b),Dv(cc,b,v,u,e,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const u=i[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}}function Dv(o,e,i,s,u,f,h){const d=Ep.distanceSqToPoint(o);if(d<i){const v=new rt;Ep.closestPointToPoint(o,v),v.applyMatrix4(s);const g=u.ray.origin.distanceTo(v);if(g<u.near||g>u.far)return;f.push({distance:g,distanceToRay:Math.sqrt(d),point:v,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class wS extends Kn{constructor(e,i,s=Wr,u,f,h,d=Oi,v=Oi,g,S=ml,p=1){if(S!==ml&&S!==gl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:i,depth:p};super(x,u,f,h,d,v,S,s,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Op(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class DS extends Kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class yl extends ea{constructor(e=1,i=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:u};const f=e/2,h=i/2,d=Math.floor(s),v=Math.floor(u),g=d+1,S=v+1,p=e/d,x=i/v,M=[],b=[],R=[],y=[];for(let m=0;m<S;m++){const L=m*x-h;for(let O=0;O<g;O++){const w=O*p-f;b.push(w,-L,0),R.push(0,0,1),y.push(O/d),y.push(1-m/v)}}for(let m=0;m<v;m++)for(let L=0;L<d;L++){const O=L+g*m,w=L+g*(m+1),F=L+1+g*(m+1),B=L+1+g*m;M.push(O,w,B),M.push(w,F,B)}this.setIndex(M),this.setAttribute("position",new Ji(b,3)),this.setAttribute("normal",new Ji(R,3)),this.setAttribute("uv",new Ji(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ip extends ea{constructor(e=1,i=32,s=16,u=0,f=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:u,phiLength:f,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const v=Math.min(h+d,Math.PI);let g=0;const S=[],p=new rt,x=new rt,M=[],b=[],R=[],y=[];for(let m=0;m<=s;m++){const L=[],O=m/s;let w=0;m===0&&h===0?w=.5/i:m===s&&v===Math.PI&&(w=-.5/i);for(let F=0;F<=i;F++){const B=F/i;p.x=-e*Math.cos(u+B*f)*Math.sin(h+O*d),p.y=e*Math.cos(h+O*d),p.z=e*Math.sin(u+B*f)*Math.sin(h+O*d),b.push(p.x,p.y,p.z),x.copy(p).normalize(),R.push(x.x,x.y,x.z),y.push(B+w,1-O),L.push(g++)}S.push(L)}for(let m=0;m<s;m++)for(let L=0;L<i;L++){const O=S[m][L+1],w=S[m][L],F=S[m+1][L],B=S[m+1][L+1];(m!==0||h>0)&&M.push(O,w,B),(m!==s-1||v<Math.PI)&&M.push(w,F,B)}this.setIndex(M),this.setAttribute("position",new Ji(b,3)),this.setAttribute("normal",new Ji(R,3)),this.setAttribute("uv",new Ji(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ip(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Uv extends co{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_S,this.normalScale=new ze(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bT extends co{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=yE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class AT extends co{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class US extends Tn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class RT extends US{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const wd=new on,Nv=new rt,Lv=new rt;class CT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ze(512,512),this.mapType=$i,this.map=null,this.mapPass=null,this.matrix=new on,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Pp,this._frameExtents=new ze(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Nv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Nv),Lv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Lv),i.updateMatrixWorld(),wd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wd,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(wd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class NS extends RS{constructor(e=-1,i=1,s=1,u=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=u,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,u,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-e,h=s+e,d=u+i,v=u-i;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,S=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=g*this.view.offsetX,h=f+g*this.view.width,d-=S*this.view.offsetY,v=d-S*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,v,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class wT extends CT{constructor(){super(new NS(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class DT extends US{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Tn.DEFAULT_UP),this.updateMatrix(),this.target=new Tn,this.shadow=new wT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class UT extends Mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class NT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Ov(o,e,i,s){const u=LT(s);switch(i){case dS:return o*e;case mS:return o*e/u.components*u.byteLength;case Dp:return o*e/u.components*u.byteLength;case gS:return o*e*2/u.components*u.byteLength;case Up:return o*e*2/u.components*u.byteLength;case pS:return o*e*3/u.components*u.byteLength;case Li:return o*e*4/u.components*u.byteLength;case Np:return o*e*4/u.components*u.byteLength;case pc:case mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case gc:case _c:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Kd:case Jd:return Math.max(o,16)*Math.max(e,8)/4;case Zd:case Qd:return Math.max(o,8)*Math.max(e,8)/2;case $d:case tp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case ep:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case np:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ip:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ap:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case rp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case sp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case op:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case lp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case up:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case cp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case fp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case hp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case dp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case pp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case mp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case gp:case _p:case vp:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Sp:case xp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case yp:case Mp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function LT(o){switch(o){case $i:case uS:return{byteLength:1,components:1};case dl:case cS:case Sl:return{byteLength:2,components:1};case Cp:case wp:return{byteLength:2,components:4};case Wr:case Rp:case Ta:return{byteLength:4,components:1};case fS:case hS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ap}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ap);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function LS(){let o=null,e=!1,i=null,s=null;function u(f,h){i(f,h),s=o.requestAnimationFrame(u)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(u),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function OT(o){const e=new WeakMap;function i(d,v){const g=d.array,S=d.usage,p=g.byteLength,x=o.createBuffer();o.bindBuffer(v,x),o.bufferData(v,g,S),d.onUploadCallback();let M;if(g instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)M=o.HALF_FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=o.SHORT;else if(g instanceof Uint32Array)M=o.UNSIGNED_INT;else if(g instanceof Int32Array)M=o.INT;else if(g instanceof Int8Array)M=o.BYTE;else if(g instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:x,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:p}}function s(d,v,g){const S=v.array,p=v.updateRanges;if(o.bindBuffer(g,d),p.length===0)o.bufferSubData(g,0,S);else{p.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<p.length;M++){const b=p[x],R=p[M];R.start<=b.start+b.count+1?b.count=Math.max(b.count,R.start+R.count-b.start):(++x,p[x]=R)}p.length=x+1;for(let M=0,b=p.length;M<b;M++){const R=p[M];o.bufferSubData(g,R.start*S.BYTES_PER_ELEMENT,S,R.start,R.count)}v.clearUpdateRanges()}v.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const v=e.get(d);v&&(o.deleteBuffer(v.buffer),e.delete(d))}function h(d,v){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const S=e.get(d);(!S||S.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=e.get(d);if(g===void 0)e.set(d,i(d,v));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(g.buffer,d,v),g.version=d.version}}return{get:u,remove:f,update:h}}var zT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PT=`#ifdef USE_ALPHAHASH
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
#endif`,IT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,BT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GT=`#ifdef USE_AOMAP
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
#endif`,VT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,XT=`#ifdef USE_BATCHING
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
#endif`,kT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,WT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jT=`#ifdef USE_IRIDESCENCE
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
#endif`,ZT=`#ifdef USE_BUMPMAP
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
#endif`,KT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,QT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$T=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,e1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,n1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,i1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,a1=`#define PI 3.141592653589793
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
} // validated`,r1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,s1=`vec3 transformedNormal = objectNormal;
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
#endif`,o1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,c1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f1="gl_FragColor = linearToOutputTexel( gl_FragColor );",h1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,d1=`#ifdef USE_ENVMAP
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
#endif`,p1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,m1=`#ifdef USE_ENVMAP
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
#endif`,g1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_1=`#ifdef USE_ENVMAP
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
#endif`,v1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,x1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,y1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,M1=`#ifdef USE_GRADIENTMAP
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
}`,E1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,T1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,b1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,A1=`uniform bool receiveShadow;
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
#endif`,R1=`#ifdef USE_ENVMAP
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
#endif`,C1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,D1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,N1=`PhysicalMaterial material;
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
#endif`,L1=`struct PhysicalMaterial {
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
}`,O1=`
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
#endif`,z1=`#if defined( RE_IndirectDiffuse )
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
#endif`,P1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,B1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,X1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,k1=`#if defined( USE_POINTS_UV )
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
#endif`,Y1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,W1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,j1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Z1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,K1=`#ifdef USE_MORPHTARGETS
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
#endif`,Q1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,J1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ib=`#ifdef USE_NORMALMAP
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
#endif`,ab=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ob=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ub=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,db=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_b=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Sb=`float getShadowMask() {
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
}`,xb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yb=`#ifdef USE_SKINNING
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
#endif`,Mb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Eb=`#ifdef USE_SKINNING
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
#endif`,Tb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ab=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cb=`#ifdef USE_TRANSMISSION
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
#endif`,wb=`#ifdef USE_TRANSMISSION
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
#endif`,Db=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ob=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zb=`uniform sampler2D t2D;
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
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ib=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hb=`#include <common>
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
}`,Gb=`#if DEPTH_PACKING == 3200
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
}`,Vb=`#define DISTANCE
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
}`,Xb=`#define DISTANCE
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
}`,kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qb=`uniform float scale;
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
}`,Wb=`uniform vec3 diffuse;
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
}`,jb=`#include <common>
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
}`,Zb=`uniform vec3 diffuse;
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
}`,Kb=`#define LAMBERT
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
}`,Qb=`#define LAMBERT
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
}`,Jb=`#define MATCAP
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
}`,$b=`#define MATCAP
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
}`,tA=`#define NORMAL
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
}`,eA=`#define NORMAL
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
}`,nA=`#define PHONG
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
}`,iA=`#define PHONG
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
}`,aA=`#define STANDARD
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
}`,rA=`#define STANDARD
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
}`,sA=`#define TOON
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
}`,oA=`#define TOON
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
}`,lA=`uniform float size;
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
}`,uA=`uniform vec3 diffuse;
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
}`,cA=`#include <common>
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
}`,fA=`uniform vec3 color;
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
}`,hA=`uniform float rotation;
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
}`,dA=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:zT,alphahash_pars_fragment:PT,alphamap_fragment:IT,alphamap_pars_fragment:BT,alphatest_fragment:FT,alphatest_pars_fragment:HT,aomap_fragment:GT,aomap_pars_fragment:VT,batching_pars_vertex:XT,batching_vertex:kT,begin_vertex:YT,beginnormal_vertex:qT,bsdfs:WT,iridescence_fragment:jT,bumpmap_pars_fragment:ZT,clipping_planes_fragment:KT,clipping_planes_pars_fragment:QT,clipping_planes_pars_vertex:JT,clipping_planes_vertex:$T,color_fragment:t1,color_pars_fragment:e1,color_pars_vertex:n1,color_vertex:i1,common:a1,cube_uv_reflection_fragment:r1,defaultnormal_vertex:s1,displacementmap_pars_vertex:o1,displacementmap_vertex:l1,emissivemap_fragment:u1,emissivemap_pars_fragment:c1,colorspace_fragment:f1,colorspace_pars_fragment:h1,envmap_fragment:d1,envmap_common_pars_fragment:p1,envmap_pars_fragment:m1,envmap_pars_vertex:g1,envmap_physical_pars_fragment:R1,envmap_vertex:_1,fog_vertex:v1,fog_pars_vertex:S1,fog_fragment:x1,fog_pars_fragment:y1,gradientmap_pars_fragment:M1,lightmap_pars_fragment:E1,lights_lambert_fragment:T1,lights_lambert_pars_fragment:b1,lights_pars_begin:A1,lights_toon_fragment:C1,lights_toon_pars_fragment:w1,lights_phong_fragment:D1,lights_phong_pars_fragment:U1,lights_physical_fragment:N1,lights_physical_pars_fragment:L1,lights_fragment_begin:O1,lights_fragment_maps:z1,lights_fragment_end:P1,logdepthbuf_fragment:I1,logdepthbuf_pars_fragment:B1,logdepthbuf_pars_vertex:F1,logdepthbuf_vertex:H1,map_fragment:G1,map_pars_fragment:V1,map_particle_fragment:X1,map_particle_pars_fragment:k1,metalnessmap_fragment:Y1,metalnessmap_pars_fragment:q1,morphinstance_vertex:W1,morphcolor_vertex:j1,morphnormal_vertex:Z1,morphtarget_pars_vertex:K1,morphtarget_vertex:Q1,normal_fragment_begin:J1,normal_fragment_maps:$1,normal_pars_fragment:tb,normal_pars_vertex:eb,normal_vertex:nb,normalmap_pars_fragment:ib,clearcoat_normal_fragment_begin:ab,clearcoat_normal_fragment_maps:rb,clearcoat_pars_fragment:sb,iridescence_pars_fragment:ob,opaque_fragment:lb,packing:ub,premultiplied_alpha_fragment:cb,project_vertex:fb,dithering_fragment:hb,dithering_pars_fragment:db,roughnessmap_fragment:pb,roughnessmap_pars_fragment:mb,shadowmap_pars_fragment:gb,shadowmap_pars_vertex:_b,shadowmap_vertex:vb,shadowmask_pars_fragment:Sb,skinbase_vertex:xb,skinning_pars_vertex:yb,skinning_vertex:Mb,skinnormal_vertex:Eb,specularmap_fragment:Tb,specularmap_pars_fragment:bb,tonemapping_fragment:Ab,tonemapping_pars_fragment:Rb,transmission_fragment:Cb,transmission_pars_fragment:wb,uv_pars_fragment:Db,uv_pars_vertex:Ub,uv_vertex:Nb,worldpos_vertex:Lb,background_vert:Ob,background_frag:zb,backgroundCube_vert:Pb,backgroundCube_frag:Ib,cube_vert:Bb,cube_frag:Fb,depth_vert:Hb,depth_frag:Gb,distanceRGBA_vert:Vb,distanceRGBA_frag:Xb,equirect_vert:kb,equirect_frag:Yb,linedashed_vert:qb,linedashed_frag:Wb,meshbasic_vert:jb,meshbasic_frag:Zb,meshlambert_vert:Kb,meshlambert_frag:Qb,meshmatcap_vert:Jb,meshmatcap_frag:$b,meshnormal_vert:tA,meshnormal_frag:eA,meshphong_vert:nA,meshphong_frag:iA,meshphysical_vert:aA,meshphysical_frag:rA,meshtoon_vert:sA,meshtoon_frag:oA,points_vert:lA,points_frag:uA,shadow_vert:cA,shadow_frag:fA,sprite_vert:hA,sprite_frag:dA},Bt={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},ji={basic:{uniforms:Vn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Vn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Se(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Vn([Bt.common,Bt.specularmap,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,Bt.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Vn([Bt.common,Bt.envmap,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.roughnessmap,Bt.metalnessmap,Bt.fog,Bt.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Vn([Bt.common,Bt.aomap,Bt.lightmap,Bt.emissivemap,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.gradientmap,Bt.fog,Bt.lights,{emissive:{value:new Se(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Vn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,Bt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Vn([Bt.points,Bt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Vn([Bt.common,Bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Vn([Bt.common,Bt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Vn([Bt.common,Bt.bumpmap,Bt.normalmap,Bt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Vn([Bt.sprite,Bt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Vn([Bt.common,Bt.displacementmap,{referencePosition:{value:new rt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Vn([Bt.lights,Bt.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};ji.physical={uniforms:Vn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const fc={r:0,b:0,g:0},Br=new zi,pA=new on;function mA(o,e,i,s,u,f,h){const d=new Se(0);let v=f===!0?0:1,g,S,p=null,x=0,M=null;function b(O){let w=O.isScene===!0?O.background:null;return w&&w.isTexture&&(w=(O.backgroundBlurriness>0?i:e).get(w)),w}function R(O){let w=!1;const F=b(O);F===null?m(d,v):F&&F.isColor&&(m(F,1),w=!0);const B=o.xr.getEnvironmentBlendMode();B==="additive"?s.buffers.color.setClear(0,0,0,1,h):B==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||w)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(O,w){const F=b(w);F&&(F.isCubeTexture||F.mapping===Ec)?(S===void 0&&(S=new jn(new Kr(1,1,1),new ta({name:"BackgroundCubeMaterial",uniforms:oo(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),S.geometry.deleteAttribute("normal"),S.geometry.deleteAttribute("uv"),S.onBeforeRender=function(B,z,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(S.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),u.update(S)),Br.copy(w.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),S.material.uniforms.envMap.value=F,S.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,S.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,S.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,S.material.uniforms.backgroundRotation.value.setFromMatrix4(pA.makeRotationFromEuler(Br)),S.material.toneMapped=Ue.getTransfer(F.colorSpace)!==ke,(p!==F||x!==F.version||M!==o.toneMapping)&&(S.material.needsUpdate=!0,p=F,x=F.version,M=o.toneMapping),S.layers.enableAll(),O.unshift(S,S.geometry,S.material,0,0,null)):F&&F.isTexture&&(g===void 0&&(g=new jn(new yl(2,2),new ta({name:"BackgroundMaterial",uniforms:oo(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),u.update(g)),g.material.uniforms.t2D.value=F,g.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,g.material.toneMapped=Ue.getTransfer(F.colorSpace)!==ke,F.matrixAutoUpdate===!0&&F.updateMatrix(),g.material.uniforms.uvTransform.value.copy(F.matrix),(p!==F||x!==F.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,p=F,x=F.version,M=o.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null))}function m(O,w){O.getRGB(fc,AS(o)),s.buffers.color.setClear(fc.r,fc.g,fc.b,w,h)}function L(){S!==void 0&&(S.geometry.dispose(),S.material.dispose(),S=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,w=1){d.set(O),v=w,m(d,v)},getClearAlpha:function(){return v},setClearAlpha:function(O){v=O,m(d,v)},render:R,addToRenderList:y,dispose:L}}function gA(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=x(null);let f=u,h=!1;function d(C,X,nt,ut,_t){let lt=!1;const q=p(ut,nt,X);f!==q&&(f=q,g(f.object)),lt=M(C,ut,nt,_t),lt&&b(C,ut,nt,_t),_t!==null&&e.update(_t,o.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,w(C,X,nt,ut),_t!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(_t).buffer))}function v(){return o.createVertexArray()}function g(C){return o.bindVertexArray(C)}function S(C){return o.deleteVertexArray(C)}function p(C,X,nt){const ut=nt.wireframe===!0;let _t=s[C.id];_t===void 0&&(_t={},s[C.id]=_t);let lt=_t[X.id];lt===void 0&&(lt={},_t[X.id]=lt);let q=lt[ut];return q===void 0&&(q=x(v()),lt[ut]=q),q}function x(C){const X=[],nt=[],ut=[];for(let _t=0;_t<i;_t++)X[_t]=0,nt[_t]=0,ut[_t]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:nt,attributeDivisors:ut,object:C,attributes:{},index:null}}function M(C,X,nt,ut){const _t=f.attributes,lt=X.attributes;let q=0;const at=nt.getAttributes();for(const G in at)if(at[G].location>=0){const vt=_t[G];let Ft=lt[G];if(Ft===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(Ft=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(Ft=C.instanceColor)),vt===void 0||vt.attribute!==Ft||Ft&&vt.data!==Ft.data)return!0;q++}return f.attributesNum!==q||f.index!==ut}function b(C,X,nt,ut){const _t={},lt=X.attributes;let q=0;const at=nt.getAttributes();for(const G in at)if(at[G].location>=0){let vt=lt[G];vt===void 0&&(G==="instanceMatrix"&&C.instanceMatrix&&(vt=C.instanceMatrix),G==="instanceColor"&&C.instanceColor&&(vt=C.instanceColor));const Ft={};Ft.attribute=vt,vt&&vt.data&&(Ft.data=vt.data),_t[G]=Ft,q++}f.attributes=_t,f.attributesNum=q,f.index=ut}function R(){const C=f.newAttributes;for(let X=0,nt=C.length;X<nt;X++)C[X]=0}function y(C){m(C,0)}function m(C,X){const nt=f.newAttributes,ut=f.enabledAttributes,_t=f.attributeDivisors;nt[C]=1,ut[C]===0&&(o.enableVertexAttribArray(C),ut[C]=1),_t[C]!==X&&(o.vertexAttribDivisor(C,X),_t[C]=X)}function L(){const C=f.newAttributes,X=f.enabledAttributes;for(let nt=0,ut=X.length;nt<ut;nt++)X[nt]!==C[nt]&&(o.disableVertexAttribArray(nt),X[nt]=0)}function O(C,X,nt,ut,_t,lt,q){q===!0?o.vertexAttribIPointer(C,X,nt,_t,lt):o.vertexAttribPointer(C,X,nt,ut,_t,lt)}function w(C,X,nt,ut){R();const _t=ut.attributes,lt=nt.getAttributes(),q=X.defaultAttributeValues;for(const at in lt){const G=lt[at];if(G.location>=0){let gt=_t[at];if(gt===void 0&&(at==="instanceMatrix"&&C.instanceMatrix&&(gt=C.instanceMatrix),at==="instanceColor"&&C.instanceColor&&(gt=C.instanceColor)),gt!==void 0){const vt=gt.normalized,Ft=gt.itemSize,ae=e.get(gt);if(ae===void 0)continue;const _e=ae.buffer,I=ae.type,ct=ae.bytesPerElement,Q=I===o.INT||I===o.UNSIGNED_INT||gt.gpuType===Rp;if(gt.isInterleavedBufferAttribute){const et=gt.data,Mt=et.stride,Lt=gt.offset;if(et.isInstancedInterleavedBuffer){for(let Rt=0;Rt<G.locationSize;Rt++)m(G.location+Rt,et.meshPerAttribute);C.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Rt=0;Rt<G.locationSize;Rt++)y(G.location+Rt);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let Rt=0;Rt<G.locationSize;Rt++)O(G.location+Rt,Ft/G.locationSize,I,vt,Mt*ct,(Lt+Ft/G.locationSize*Rt)*ct,Q)}else{if(gt.isInstancedBufferAttribute){for(let et=0;et<G.locationSize;et++)m(G.location+et,gt.meshPerAttribute);C.isInstancedMesh!==!0&&ut._maxInstanceCount===void 0&&(ut._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let et=0;et<G.locationSize;et++)y(G.location+et);o.bindBuffer(o.ARRAY_BUFFER,_e);for(let et=0;et<G.locationSize;et++)O(G.location+et,Ft/G.locationSize,I,vt,Ft*ct,Ft/G.locationSize*et*ct,Q)}}else if(q!==void 0){const vt=q[at];if(vt!==void 0)switch(vt.length){case 2:o.vertexAttrib2fv(G.location,vt);break;case 3:o.vertexAttrib3fv(G.location,vt);break;case 4:o.vertexAttrib4fv(G.location,vt);break;default:o.vertexAttrib1fv(G.location,vt)}}}}L()}function F(){Y();for(const C in s){const X=s[C];for(const nt in X){const ut=X[nt];for(const _t in ut)S(ut[_t].object),delete ut[_t];delete X[nt]}delete s[C]}}function B(C){if(s[C.id]===void 0)return;const X=s[C.id];for(const nt in X){const ut=X[nt];for(const _t in ut)S(ut[_t].object),delete ut[_t];delete X[nt]}delete s[C.id]}function z(C){for(const X in s){const nt=s[X];if(nt[C.id]===void 0)continue;const ut=nt[C.id];for(const _t in ut)S(ut[_t].object),delete ut[_t];delete nt[C.id]}}function Y(){D(),h=!0,f!==u&&(f=u,g(f.object))}function D(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:d,reset:Y,resetDefaultState:D,dispose:F,releaseStatesOfGeometry:B,releaseStatesOfProgram:z,initAttributes:R,enableAttribute:y,disableUnusedAttributes:L}}function _A(o,e,i){let s;function u(g){s=g}function f(g,S){o.drawArrays(s,g,S),i.update(S,s,1)}function h(g,S,p){p!==0&&(o.drawArraysInstanced(s,g,S,p),i.update(S,s,p))}function d(g,S,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,S,0,p);let M=0;for(let b=0;b<p;b++)M+=S[b];i.update(M,s,1)}function v(g,S,p,x){if(p===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<g.length;b++)h(g[b],S[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(s,g,0,S,0,x,0,p);let b=0;for(let R=0;R<p;R++)b+=S[R]*x[R];i.update(b,s,1)}}this.setMode=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=v}function vA(o,e,i,s){let u;function f(){if(u!==void 0)return u;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");u=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function h(z){return!(z!==Li&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const Y=z===Sl&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==$i&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Ta&&!Y)}function v(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=i.precision!==void 0?i.precision:"highp";const S=v(g);S!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",S,"instead."),g=S);const p=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),m=o.getParameter(o.MAX_VERTEX_ATTRIBS),L=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),w=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),F=b>0,B=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:v,textureFormatReadable:h,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:p,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:R,maxCubemapSize:y,maxAttributes:m,maxVertexUniforms:L,maxVaryings:O,maxFragmentUniforms:w,vertexTextures:F,maxSamples:B}}function SA(o){const e=this;let i=null,s=0,u=!1,f=!1;const h=new Hr,d=new de,v={value:null,needsUpdate:!1};this.uniform=v,this.numPlanes=0,this.numIntersection=0,this.init=function(p,x){const M=p.length!==0||x||s!==0||u;return u=x,s=p.length,M},this.beginShadows=function(){f=!0,S(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(p,x){i=S(p,x,0)},this.setState=function(p,x,M){const b=p.clippingPlanes,R=p.clipIntersection,y=p.clipShadows,m=o.get(p);if(!u||b===null||b.length===0||f&&!y)f?S(null):g();else{const L=f?0:s,O=L*4;let w=m.clippingState||null;v.value=w,w=S(b,x,O,M);for(let F=0;F!==O;++F)w[F]=i[F];m.clippingState=w,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=L}};function g(){v.value!==i&&(v.value=i,v.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function S(p,x,M,b){const R=p!==null?p.length:0;let y=null;if(R!==0){if(y=v.value,b!==!0||y===null){const m=M+R*4,L=x.matrixWorldInverse;d.getNormalMatrix(L),(y===null||y.length<m)&&(y=new Float32Array(m));for(let O=0,w=M;O!==R;++O,w+=4)h.copy(p[O]).applyMatrix4(L,d),h.normal.toArray(y,w),y[w+3]=h.constant}v.value=y,v.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function xA(o){let e=new WeakMap;function i(h,d){return d===Yd?h.mapping=ao:d===qd&&(h.mapping=ro),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Yd||d===qd)if(e.has(h)){const v=e.get(h).texture;return i(v,h.mapping)}else{const v=h.image;if(v&&v.height>0){const g=new vT(v.height);return g.fromEquirectangularTexture(o,h),e.set(h,g),h.addEventListener("dispose",u),i(g.texture,h.mapping)}else return null}}return h}function u(h){const d=h.target;d.removeEventListener("dispose",u);const v=e.get(d);v!==void 0&&(e.delete(d),v.dispose())}function f(){e=new WeakMap}return{get:s,dispose:f}}const $s=4,zv=[.125,.215,.35,.446,.526,.582],Xr=20,Dd=new NS,Pv=new Se;let Ud=null,Nd=0,Ld=0,Od=!1;const Gr=(1+Math.sqrt(5))/2,Ks=1/Gr,Iv=[new rt(-Gr,Ks,0),new rt(Gr,Ks,0),new rt(-Ks,0,Gr),new rt(Ks,0,Gr),new rt(0,Gr,-Ks),new rt(0,Gr,Ks),new rt(-1,1,-1),new rt(1,1,-1),new rt(-1,1,1),new rt(1,1,1)],yA=new rt;class Bv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,u=100,f={}){const{size:h=256,position:d=yA}=f;Ud=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const v=this._allocateTargets();return v.depthBuffer=!0,this._sceneToCubeUV(e,s,u,v,d),i>0&&this._blur(v,0,0,i),this._applyPMREM(v),this._cleanup(v),v}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ud,Nd,Ld),this._renderer.xr.enabled=Od,e.scissorTest=!1,hc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ao||e.mapping===ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ud=this._renderer.getRenderTarget(),Nd=this._renderer.getActiveCubeFace(),Ld=this._renderer.getActiveMipmapLevel(),Od=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Ki,minFilter:Ki,generateMipmaps:!1,type:Sl,format:Li,colorSpace:so,depthBuffer:!1},u=Fv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fv(e,i,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MA(f)),this._blurMaterial=EA(f,e,i)}return u}_compileMaterial(e){const i=new jn(this._lodPlanes[0],e);this._renderer.compile(i,Dd)}_sceneToCubeUV(e,i,s,u,f){const v=new Mi(90,1,i,s),g=[1,-1,1,1,1,1],S=[1,1,1,-1,-1,-1],p=this._renderer,x=p.autoClear,M=p.toneMapping;p.getClearColor(Pv),p.toneMapping=lr,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(u),p.clearDepth(),p.setRenderTarget(null));const R=new zp({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1}),y=new jn(new Kr,R);let m=!1;const L=e.background;L?L.isColor&&(R.color.copy(L),e.background=null,m=!0):(R.color.copy(Pv),m=!0);for(let O=0;O<6;O++){const w=O%3;w===0?(v.up.set(0,g[O],0),v.position.set(f.x,f.y,f.z),v.lookAt(f.x+S[O],f.y,f.z)):w===1?(v.up.set(0,0,g[O]),v.position.set(f.x,f.y,f.z),v.lookAt(f.x,f.y+S[O],f.z)):(v.up.set(0,g[O],0),v.position.set(f.x,f.y,f.z),v.lookAt(f.x,f.y,f.z+S[O]));const F=this._cubeSize;hc(u,w*F,O>2?F:0,F,F),p.setRenderTarget(u),m&&p.render(y,v),p.render(e,v)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=M,p.autoClear=x,e.background=L}_textureToCubeUV(e,i){const s=this._renderer,u=e.mapping===ao||e.mapping===ro;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hv());const f=u?this._cubemapMaterial:this._equirectMaterial,h=new jn(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const v=this._cubeSize;hc(i,0,0,3*v,2*v),s.setRenderTarget(i),s.render(h,Dd)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const u=this._lodPlanes.length;for(let f=1;f<u;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=Iv[(u-f-1)%Iv.length];this._blur(e,f-1,f,h,d)}i.autoClear=s}_blur(e,i,s,u,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,u,"latitudinal",f),this._halfBlur(h,e,s,s,u,"longitudinal",f)}_halfBlur(e,i,s,u,f,h,d){const v=this._renderer,g=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const S=3,p=new jn(this._lodPlanes[u],g),x=g.uniforms,M=this._sizeLods[s]-1,b=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Xr-1),R=f/b,y=isFinite(f)?1+Math.floor(S*R):Xr;y>Xr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Xr}`);const m=[];let L=0;for(let z=0;z<Xr;++z){const Y=z/R,D=Math.exp(-Y*Y/2);m.push(D),z===0?L+=D:z<y&&(L+=2*D)}for(let z=0;z<m.length;z++)m[z]=m[z]/L;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=m,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:O}=this;x.dTheta.value=b,x.mipInt.value=O-s;const w=this._sizeLods[u],F=3*w*(u>O-$s?u-O+$s:0),B=4*(this._cubeSize-w);hc(i,F,B,3*w,2*w),v.setRenderTarget(i),v.render(p,Dd)}}function MA(o){const e=[],i=[],s=[];let u=o;const f=o-$s+1+zv.length;for(let h=0;h<f;h++){const d=Math.pow(2,u);i.push(d);let v=1/d;h>o-$s?v=zv[h-o+$s-1]:h===0&&(v=0),s.push(v);const g=1/(d-2),S=-g,p=1+g,x=[S,S,p,S,p,p,S,S,p,p,S,p],M=6,b=6,R=3,y=2,m=1,L=new Float32Array(R*b*M),O=new Float32Array(y*b*M),w=new Float32Array(m*b*M);for(let B=0;B<M;B++){const z=B%3*2/3-1,Y=B>2?0:-1,D=[z,Y,0,z+2/3,Y,0,z+2/3,Y+1,0,z,Y,0,z+2/3,Y+1,0,z,Y+1,0];L.set(D,R*b*B),O.set(x,y*b*B);const C=[B,B,B,B,B,B];w.set(C,m*b*B)}const F=new ea;F.setAttribute("position",new ui(L,R)),F.setAttribute("uv",new ui(O,y)),F.setAttribute("faceIndex",new ui(w,m)),e.push(F),u>$s&&u--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function Fv(o,e,i){const s=new Zr(o,e,i);return s.texture.mapping=Ec,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function hc(o,e,i,s,u){o.viewport.set(e,i,s,u),o.scissor.set(e,i,s,u)}function EA(o,e,i){const s=new Float32Array(Xr),u=new rt(0,1,0);return new ta({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:Bp(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Hv(){return new ta({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bp(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function Gv(){return new ta({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Bp(){return`

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
	`}function TA(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const v=d.mapping,g=v===Yd||v===qd,S=v===ao||v===ro;if(g||S){let p=e.get(d);const x=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Bv(o)),p=g?i.fromEquirectangular(d,p):i.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const M=d.image;return g&&M&&M.height>0||S&&M&&u(M)?(i===null&&(i=new Bv(o)),p=g?i.fromEquirectangular(d):i.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",f),p.texture):null}}}return d}function u(d){let v=0;const g=6;for(let S=0;S<g;S++)d[S]!==void 0&&v++;return v===g}function f(d){const v=d.target;v.removeEventListener("dispose",f);const g=e.get(v);g!==void 0&&(e.delete(v),g.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function bA(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let u;switch(s){case"WEBGL_depth_texture":u=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":u=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":u=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":u=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:u=o.getExtension(s)}return e[s]=u,u}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const u=i(s);return u===null&&vl("THREE.WebGLRenderer: "+s+" extension not supported."),u}}}function AA(o,e,i,s){const u={},f=new WeakMap;function h(p){const x=p.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete u[x.id];const M=f.get(x);M&&(e.remove(M),f.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(p,x){return u[x.id]===!0||(x.addEventListener("dispose",h),u[x.id]=!0,i.memory.geometries++),x}function v(p){const x=p.attributes;for(const M in x)e.update(x[M],o.ARRAY_BUFFER)}function g(p){const x=[],M=p.index,b=p.attributes.position;let R=0;if(M!==null){const L=M.array;R=M.version;for(let O=0,w=L.length;O<w;O+=3){const F=L[O+0],B=L[O+1],z=L[O+2];x.push(F,B,B,z,z,F)}}else if(b!==void 0){const L=b.array;R=b.version;for(let O=0,w=L.length/3-1;O<w;O+=3){const F=O+0,B=O+1,z=O+2;x.push(F,B,B,z,z,F)}}else return;const y=new(SS(x)?bS:TS)(x,1);y.version=R;const m=f.get(p);m&&e.remove(m),f.set(p,y)}function S(p){const x=f.get(p);if(x){const M=p.index;M!==null&&x.version<M.version&&g(p)}else g(p);return f.get(p)}return{get:d,update:v,getWireframeAttribute:S}}function RA(o,e,i){let s;function u(x){s=x}let f,h;function d(x){f=x.type,h=x.bytesPerElement}function v(x,M){o.drawElements(s,M,f,x*h),i.update(M,s,1)}function g(x,M,b){b!==0&&(o.drawElementsInstanced(s,M,f,x*h,b),i.update(M,s,b))}function S(x,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,f,x,0,b);let y=0;for(let m=0;m<b;m++)y+=M[m];i.update(y,s,1)}function p(x,M,b,R){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let m=0;m<x.length;m++)g(x[m]/h,M[m],R[m]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,f,x,0,R,0,b);let m=0;for(let L=0;L<b;L++)m+=M[L]*R[L];i.update(m,s,1)}}this.setMode=u,this.setIndex=d,this.render=v,this.renderInstances=g,this.renderMultiDraw=S,this.renderMultiDrawInstances=p}function CA(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(f/3);break;case o.LINES:i.lines+=d*(f/2);break;case o.LINE_STRIP:i.lines+=d*(f-1);break;case o.LINE_LOOP:i.lines+=d*f;break;case o.POINTS:i.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function u(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:u,update:s}}function wA(o,e,i){const s=new WeakMap,u=new sn;function f(h,d,v){const g=h.morphTargetInfluences,S=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,p=S!==void 0?S.length:0;let x=s.get(d);if(x===void 0||x.count!==p){let C=function(){Y.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,m=d.morphAttributes.position||[],L=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let w=0;b===!0&&(w=1),R===!0&&(w=2),y===!0&&(w=3);let F=d.attributes.position.count*w,B=1;F>e.maxTextureSize&&(B=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const z=new Float32Array(F*B*4*p),Y=new xS(z,F,B,p);Y.type=Ta,Y.needsUpdate=!0;const D=w*4;for(let X=0;X<p;X++){const nt=m[X],ut=L[X],_t=O[X],lt=F*B*4*X;for(let q=0;q<nt.count;q++){const at=q*D;b===!0&&(u.fromBufferAttribute(nt,q),z[lt+at+0]=u.x,z[lt+at+1]=u.y,z[lt+at+2]=u.z,z[lt+at+3]=0),R===!0&&(u.fromBufferAttribute(ut,q),z[lt+at+4]=u.x,z[lt+at+5]=u.y,z[lt+at+6]=u.z,z[lt+at+7]=0),y===!0&&(u.fromBufferAttribute(_t,q),z[lt+at+8]=u.x,z[lt+at+9]=u.y,z[lt+at+10]=u.z,z[lt+at+11]=_t.itemSize===4?u.w:1)}}x={count:p,texture:Y,size:new ze(F,B)},s.set(d,x),d.addEventListener("dispose",C)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)v.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let b=0;for(let y=0;y<g.length;y++)b+=g[y];const R=d.morphTargetsRelative?1:1-b;v.getUniforms().setValue(o,"morphTargetBaseInfluence",R),v.getUniforms().setValue(o,"morphTargetInfluences",g)}v.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),v.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:f}}function DA(o,e,i,s){let u=new WeakMap;function f(v){const g=s.render.frame,S=v.geometry,p=e.get(v,S);if(u.get(p)!==g&&(e.update(p),u.set(p,g)),v.isInstancedMesh&&(v.hasEventListener("dispose",d)===!1&&v.addEventListener("dispose",d),u.get(v)!==g&&(i.update(v.instanceMatrix,o.ARRAY_BUFFER),v.instanceColor!==null&&i.update(v.instanceColor,o.ARRAY_BUFFER),u.set(v,g))),v.isSkinnedMesh){const x=v.skeleton;u.get(x)!==g&&(x.update(),u.set(x,g))}return p}function h(){u=new WeakMap}function d(v){const g=v.target;g.removeEventListener("dispose",d),i.remove(g.instanceMatrix),g.instanceColor!==null&&i.remove(g.instanceColor)}return{update:f,dispose:h}}const OS=new Kn,Vv=new wS(1,1),zS=new xS,PS=new eT,IS=new CS,Xv=[],kv=[],Yv=new Float32Array(16),qv=new Float32Array(9),Wv=new Float32Array(4);function fo(o,e,i){const s=o[0];if(s<=0||s>0)return o;const u=e*i;let f=Xv[u];if(f===void 0&&(f=new Float32Array(u),Xv[u]=f),e!==0){s.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(f,d)}return f}function vn(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function Sn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function bc(o,e){let i=kv[e];i===void 0&&(i=new Int32Array(e),kv[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function UA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function NA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;o.uniform2fv(this.addr,e),Sn(i,e)}}function LA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(vn(i,e))return;o.uniform3fv(this.addr,e),Sn(i,e)}}function OA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;o.uniform4fv(this.addr,e),Sn(i,e)}}function zA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),Sn(i,e)}else{if(vn(i,s))return;Wv.set(s),o.uniformMatrix2fv(this.addr,!1,Wv),Sn(i,s)}}function PA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),Sn(i,e)}else{if(vn(i,s))return;qv.set(s),o.uniformMatrix3fv(this.addr,!1,qv),Sn(i,s)}}function IA(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),Sn(i,e)}else{if(vn(i,s))return;Yv.set(s),o.uniformMatrix4fv(this.addr,!1,Yv),Sn(i,s)}}function BA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function FA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;o.uniform2iv(this.addr,e),Sn(i,e)}}function HA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;o.uniform3iv(this.addr,e),Sn(i,e)}}function GA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;o.uniform4iv(this.addr,e),Sn(i,e)}}function VA(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function XA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;o.uniform2uiv(this.addr,e),Sn(i,e)}}function kA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;o.uniform3uiv(this.addr,e),Sn(i,e)}}function YA(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;o.uniform4uiv(this.addr,e),Sn(i,e)}}function qA(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(Vv.compareFunction=vS,f=Vv):f=OS,i.setTexture2D(e||f,u)}function WA(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTexture3D(e||PS,u)}function jA(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTextureCube(e||IS,u)}function ZA(o,e,i){const s=this.cache,u=i.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),i.setTexture2DArray(e||zS,u)}function KA(o){switch(o){case 5126:return UA;case 35664:return NA;case 35665:return LA;case 35666:return OA;case 35674:return zA;case 35675:return PA;case 35676:return IA;case 5124:case 35670:return BA;case 35667:case 35671:return FA;case 35668:case 35672:return HA;case 35669:case 35673:return GA;case 5125:return VA;case 36294:return XA;case 36295:return kA;case 36296:return YA;case 35678:case 36198:case 36298:case 36306:case 35682:return qA;case 35679:case 36299:case 36307:return WA;case 35680:case 36300:case 36308:case 36293:return jA;case 36289:case 36303:case 36311:case 36292:return ZA}}function QA(o,e){o.uniform1fv(this.addr,e)}function JA(o,e){const i=fo(e,this.size,2);o.uniform2fv(this.addr,i)}function $A(o,e){const i=fo(e,this.size,3);o.uniform3fv(this.addr,i)}function tR(o,e){const i=fo(e,this.size,4);o.uniform4fv(this.addr,i)}function eR(o,e){const i=fo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function nR(o,e){const i=fo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function iR(o,e){const i=fo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function aR(o,e){o.uniform1iv(this.addr,e)}function rR(o,e){o.uniform2iv(this.addr,e)}function sR(o,e){o.uniform3iv(this.addr,e)}function oR(o,e){o.uniform4iv(this.addr,e)}function lR(o,e){o.uniform1uiv(this.addr,e)}function uR(o,e){o.uniform2uiv(this.addr,e)}function cR(o,e){o.uniform3uiv(this.addr,e)}function fR(o,e){o.uniform4uiv(this.addr,e)}function hR(o,e,i){const s=this.cache,u=e.length,f=bc(i,u);vn(s,f)||(o.uniform1iv(this.addr,f),Sn(s,f));for(let h=0;h!==u;++h)i.setTexture2D(e[h]||OS,f[h])}function dR(o,e,i){const s=this.cache,u=e.length,f=bc(i,u);vn(s,f)||(o.uniform1iv(this.addr,f),Sn(s,f));for(let h=0;h!==u;++h)i.setTexture3D(e[h]||PS,f[h])}function pR(o,e,i){const s=this.cache,u=e.length,f=bc(i,u);vn(s,f)||(o.uniform1iv(this.addr,f),Sn(s,f));for(let h=0;h!==u;++h)i.setTextureCube(e[h]||IS,f[h])}function mR(o,e,i){const s=this.cache,u=e.length,f=bc(i,u);vn(s,f)||(o.uniform1iv(this.addr,f),Sn(s,f));for(let h=0;h!==u;++h)i.setTexture2DArray(e[h]||zS,f[h])}function gR(o){switch(o){case 5126:return QA;case 35664:return JA;case 35665:return $A;case 35666:return tR;case 35674:return eR;case 35675:return nR;case 35676:return iR;case 5124:case 35670:return aR;case 35667:case 35671:return rR;case 35668:case 35672:return sR;case 35669:case 35673:return oR;case 5125:return lR;case 36294:return uR;case 36295:return cR;case 36296:return fR;case 35678:case 36198:case 36298:case 36306:case 35682:return hR;case 35679:case 36299:case 36307:return dR;case 35680:case 36300:case 36308:case 36293:return pR;case 36289:case 36303:case 36311:case 36292:return mR}}class _R{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=KA(i.type)}}class vR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=gR(i.type)}}class SR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const u=this.seq;for(let f=0,h=u.length;f!==h;++f){const d=u[f];d.setValue(e,i[d.id],s)}}}const zd=/(\w+)(\])?(\[|\.)?/g;function jv(o,e){o.seq.push(e),o.map[e.id]=e}function xR(o,e,i){const s=o.name,u=s.length;for(zd.lastIndex=0;;){const f=zd.exec(s),h=zd.lastIndex;let d=f[1];const v=f[2]==="]",g=f[3];if(v&&(d=d|0),g===void 0||g==="["&&h+2===u){jv(i,g===void 0?new _R(d,o,e):new vR(d,o,e));break}else{let p=i.map[d];p===void 0&&(p=new SR(d),jv(i,p)),i=p}}}class vc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(i,u),h=e.getUniformLocation(i,f.name);xR(f,h,this)}}setValue(e,i,s,u){const f=this.map[i];f!==void 0&&f.setValue(e,s,u)}setOptional(e,i,s){const u=i[s];u!==void 0&&this.setValue(e,s,u)}static upload(e,i,s,u){for(let f=0,h=i.length;f!==h;++f){const d=i[f],v=s[d.id];v.needsUpdate!==!1&&d.setValue(e,v.value,u)}}static seqWithValue(e,i){const s=[];for(let u=0,f=e.length;u!==f;++u){const h=e[u];h.id in i&&s.push(h)}return s}}function Zv(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const yR=37297;let MR=0;function ER(o,e){const i=o.split(`
`),s=[],u=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let h=u;h<f;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const Kv=new de;function TR(o){Ue._getMatrix(Kv,Ue.workingColorSpace,o);const e=`mat3( ${Kv.elements.map(i=>i.toFixed(4))} )`;switch(Ue.getTransfer(o)){case xc:return[e,"LinearTransferOETF"];case ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Qv(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(s&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+f+`

`+ER(o.getShaderSource(e),d)}else return f}function bR(o,e){const i=TR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function AR(o,e){let i;switch(e){case dE:i="Linear";break;case pE:i="Reinhard";break;case mE:i="Cineon";break;case gE:i="ACESFilmic";break;case vE:i="AgX";break;case SE:i="Neutral";break;case _E:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const dc=new rt;function RR(){Ue.getLuminanceCoefficients(dc);const o=dc.x.toFixed(4),e=dc.y.toFixed(4),i=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function wR(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function DR(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(e,u),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),i[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function cl(o){return o!==""}function Jv(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function $v(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tp(o){return o.replace(UR,LR)}const NR=new Map;function LR(o,e){let i=pe[e];if(i===void 0){const s=NR.get(e);if(s!==void 0)i=pe[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Tp(i)}const OR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tS(o){return o.replace(OR,zR)}function zR(o,e,i,s){let u="";for(let f=parseInt(e);f<parseInt(i);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function eS(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function PR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===sS?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===qM?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ea&&(e="SHADOWMAP_TYPE_VSM"),e}function IR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ao:case ro:e="ENVMAP_TYPE_CUBE";break;case Ec:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case ro:e="ENVMAP_MODE_REFRACTION";break}return e}function FR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case oS:e="ENVMAP_BLENDING_MULTIPLY";break;case fE:e="ENVMAP_BLENDING_MIX";break;case hE:e="ENVMAP_BLENDING_ADD";break}return e}function HR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function GR(o,e,i,s){const u=o.getContext(),f=i.defines;let h=i.vertexShader,d=i.fragmentShader;const v=PR(i),g=IR(i),S=BR(i),p=FR(i),x=HR(i),M=CR(i),b=wR(f),R=u.createProgram();let y,m,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(cl).join(`
`),y.length>0&&(y+=`
`),m=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(cl).join(`
`),m.length>0&&(m+=`
`)):(y=[eS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+S:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),m=[eS(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.envMap?"#define "+S:"",i.envMap?"#define "+p:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+v:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==lr?"#define TONE_MAPPING":"",i.toneMapping!==lr?pe.tonemapping_pars_fragment:"",i.toneMapping!==lr?AR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,bR("linearToOutputTexel",i.outputColorSpace),RR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(cl).join(`
`)),h=Tp(h),h=Jv(h,i),h=$v(h,i),d=Tp(d),d=Jv(d,i),d=$v(d,i),h=tS(h),d=tS(d),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",i.glslVersion===uv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===uv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const O=L+y+h,w=L+m+d,F=Zv(u,u.VERTEX_SHADER,O),B=Zv(u,u.FRAGMENT_SHADER,w);u.attachShader(R,F),u.attachShader(R,B),i.index0AttributeName!==void 0?u.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&u.bindAttribLocation(R,0,"position"),u.linkProgram(R);function z(X){if(o.debug.checkShaderErrors){const nt=u.getProgramInfoLog(R)||"",ut=u.getShaderInfoLog(F)||"",_t=u.getShaderInfoLog(B)||"",lt=nt.trim(),q=ut.trim(),at=_t.trim();let G=!0,gt=!0;if(u.getProgramParameter(R,u.LINK_STATUS)===!1)if(G=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,R,F,B);else{const vt=Qv(u,F,"vertex"),Ft=Qv(u,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(R,u.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+lt+`
`+vt+`
`+Ft)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(q===""||at==="")&&(gt=!1);gt&&(X.diagnostics={runnable:G,programLog:lt,vertexShader:{log:q,prefix:y},fragmentShader:{log:at,prefix:m}})}u.deleteShader(F),u.deleteShader(B),Y=new vc(u,R),D=DR(u,R)}let Y;this.getUniforms=function(){return Y===void 0&&z(this),Y};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=u.getProgramParameter(R,yR)),C},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=MR++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=F,this.fragmentShader=B,this}let VR=0;class XR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,u=this._getShaderStage(i),f=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(u)===!1&&(h.add(u),u.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new kR(e),i.set(e,s)),s}}class kR{constructor(e){this.id=VR++,this.code=e,this.usedTimes=0}}function YR(o,e,i,s,u,f,h){const d=new MS,v=new XR,g=new Set,S=[],p=u.logarithmicDepthBuffer,x=u.vertexTextures;let M=u.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(D){return g.add(D),D===0?"uv":`uv${D}`}function y(D,C,X,nt,ut){const _t=nt.fog,lt=ut.geometry,q=D.isMeshStandardMaterial?nt.environment:null,at=(D.isMeshStandardMaterial?i:e).get(D.envMap||q),G=at&&at.mapping===Ec?at.image.height:null,gt=b[D.type];D.precision!==null&&(M=u.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const vt=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Ft=vt!==void 0?vt.length:0;let ae=0;lt.morphAttributes.position!==void 0&&(ae=1),lt.morphAttributes.normal!==void 0&&(ae=2),lt.morphAttributes.color!==void 0&&(ae=3);let _e,I,ct,Q;if(gt){const Me=ji[gt];_e=Me.vertexShader,I=Me.fragmentShader}else _e=D.vertexShader,I=D.fragmentShader,v.update(D),ct=v.getVertexShaderID(D),Q=v.getFragmentShaderID(D);const et=o.getRenderTarget(),Mt=o.state.buffers.depth.getReversed(),Lt=ut.isInstancedMesh===!0,Rt=ut.isBatchedMesh===!0,Et=!!D.map,Yt=!!D.matcap,P=!!at,Pe=!!D.aoMap,xt=!!D.lightMap,Xt=!!D.bumpMap,wt=!!D.normalMap,ne=!!D.displacementMap,Gt=!!D.emissiveMap,oe=!!D.metalnessMap,Ye=!!D.roughnessMap,We=D.anisotropy>0,U=D.clearcoat>0,T=D.dispersion>0,tt=D.iridescence>0,pt=D.sheen>0,yt=D.transmission>0,ht=We&&!!D.anisotropyMap,qt=U&&!!D.clearcoatMap,Dt=U&&!!D.clearcoatNormalMap,Kt=U&&!!D.clearcoatRoughnessMap,Jt=tt&&!!D.iridescenceMap,At=tt&&!!D.iridescenceThicknessMap,zt=pt&&!!D.sheenColorMap,re=pt&&!!D.sheenRoughnessMap,Qt=!!D.specularMap,Pt=!!D.specularColorMap,ce=!!D.specularIntensityMap,V=yt&&!!D.transmissionMap,Ct=yt&&!!D.thicknessMap,Nt=!!D.gradientMap,kt=!!D.alphaMap,Tt=D.alphaTest>0,St=!!D.alphaHash,Zt=!!D.extensions;let ue=lr;D.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(ue=o.toneMapping);const Ve={shaderID:gt,shaderType:D.type,shaderName:D.name,vertexShader:_e,fragmentShader:I,defines:D.defines,customVertexShaderID:ct,customFragmentShaderID:Q,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:Rt,batchingColor:Rt&&ut._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&ut.instanceColor!==null,instancingMorph:Lt&&ut.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:et===null?o.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:so,alphaToCoverage:!!D.alphaToCoverage,map:Et,matcap:Yt,envMap:P,envMapMode:P&&at.mapping,envMapCubeUVHeight:G,aoMap:Pe,lightMap:xt,bumpMap:Xt,normalMap:wt,displacementMap:x&&ne,emissiveMap:Gt,normalMapObjectSpace:wt&&D.normalMapType===EE,normalMapTangentSpace:wt&&D.normalMapType===_S,metalnessMap:oe,roughnessMap:Ye,anisotropy:We,anisotropyMap:ht,clearcoat:U,clearcoatMap:qt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Kt,dispersion:T,iridescence:tt,iridescenceMap:Jt,iridescenceThicknessMap:At,sheen:pt,sheenColorMap:zt,sheenRoughnessMap:re,specularMap:Qt,specularColorMap:Pt,specularIntensityMap:ce,transmission:yt,transmissionMap:V,thicknessMap:Ct,gradientMap:Nt,opaque:D.transparent===!1&&D.blending===to&&D.alphaToCoverage===!1,alphaMap:kt,alphaTest:Tt,alphaHash:St,combine:D.combine,mapUv:Et&&R(D.map.channel),aoMapUv:Pe&&R(D.aoMap.channel),lightMapUv:xt&&R(D.lightMap.channel),bumpMapUv:Xt&&R(D.bumpMap.channel),normalMapUv:wt&&R(D.normalMap.channel),displacementMapUv:ne&&R(D.displacementMap.channel),emissiveMapUv:Gt&&R(D.emissiveMap.channel),metalnessMapUv:oe&&R(D.metalnessMap.channel),roughnessMapUv:Ye&&R(D.roughnessMap.channel),anisotropyMapUv:ht&&R(D.anisotropyMap.channel),clearcoatMapUv:qt&&R(D.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&R(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Kt&&R(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Jt&&R(D.iridescenceMap.channel),iridescenceThicknessMapUv:At&&R(D.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&R(D.sheenColorMap.channel),sheenRoughnessMapUv:re&&R(D.sheenRoughnessMap.channel),specularMapUv:Qt&&R(D.specularMap.channel),specularColorMapUv:Pt&&R(D.specularColorMap.channel),specularIntensityMapUv:ce&&R(D.specularIntensityMap.channel),transmissionMapUv:V&&R(D.transmissionMap.channel),thicknessMapUv:Ct&&R(D.thicknessMap.channel),alphaMapUv:kt&&R(D.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(wt||We),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:ut.isPoints===!0&&!!lt.attributes.uv&&(Et||kt),fog:!!_t,useFog:D.fog===!0,fogExp2:!!_t&&_t.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:Mt,skinning:ut.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:Ft,morphTextureStride:ae,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&X.length>0,shadowMapType:o.shadowMap.type,toneMapping:ue,decodeVideoTexture:Et&&D.map.isVideoTexture===!0&&Ue.getTransfer(D.map.colorSpace)===ke,decodeVideoTextureEmissive:Gt&&D.emissiveMap.isVideoTexture===!0&&Ue.getTransfer(D.emissiveMap.colorSpace)===ke,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Zi,flipSided:D.side===Zn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:Zt&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&D.extensions.multiDraw===!0||Rt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Ve.vertexUv1s=g.has(1),Ve.vertexUv2s=g.has(2),Ve.vertexUv3s=g.has(3),g.clear(),Ve}function m(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const X in D.defines)C.push(X),C.push(D.defines[X]);return D.isRawShaderMaterial===!1&&(L(C,D),O(C,D),C.push(o.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function L(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function O(D,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),C.gradientMap&&d.enable(22),D.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reversedDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),D.push(d.mask)}function w(D){const C=b[D.type];let X;if(C){const nt=ji[C];X=pT.clone(nt.uniforms)}else X=D.uniforms;return X}function F(D,C){let X;for(let nt=0,ut=S.length;nt<ut;nt++){const _t=S[nt];if(_t.cacheKey===C){X=_t,++X.usedTimes;break}}return X===void 0&&(X=new GR(o,C,D,f),S.push(X)),X}function B(D){if(--D.usedTimes===0){const C=S.indexOf(D);S[C]=S[S.length-1],S.pop(),D.destroy()}}function z(D){v.remove(D)}function Y(){v.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:w,acquireProgram:F,releaseProgram:B,releaseShaderCache:z,programs:S,dispose:Y}}function qR(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function u(h,d,v){o.get(h)[d]=v}function f(){o=new WeakMap}return{has:e,get:i,remove:s,update:u,dispose:f}}function WR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function nS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function iS(){const o=[];let e=0;const i=[],s=[],u=[];function f(){e=0,i.length=0,s.length=0,u.length=0}function h(p,x,M,b,R,y){let m=o[e];return m===void 0?(m={id:p.id,object:p,geometry:x,material:M,groupOrder:b,renderOrder:p.renderOrder,z:R,group:y},o[e]=m):(m.id=p.id,m.object=p,m.geometry=x,m.material=M,m.groupOrder=b,m.renderOrder=p.renderOrder,m.z=R,m.group=y),e++,m}function d(p,x,M,b,R,y){const m=h(p,x,M,b,R,y);M.transmission>0?s.push(m):M.transparent===!0?u.push(m):i.push(m)}function v(p,x,M,b,R,y){const m=h(p,x,M,b,R,y);M.transmission>0?s.unshift(m):M.transparent===!0?u.unshift(m):i.unshift(m)}function g(p,x){i.length>1&&i.sort(p||WR),s.length>1&&s.sort(x||nS),u.length>1&&u.sort(x||nS)}function S(){for(let p=e,x=o.length;p<x;p++){const M=o[p];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:u,init:f,push:d,unshift:v,finish:S,sort:g}}function jR(){let o=new WeakMap;function e(s,u){const f=o.get(s);let h;return f===void 0?(h=new iS,o.set(s,[h])):u>=f.length?(h=new iS,f.push(h)):h=f[u],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function ZR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new rt,color:new Se};break;case"SpotLight":i={position:new rt,direction:new rt,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new rt,color:new Se,distance:0,decay:0};break;case"HemisphereLight":i={direction:new rt,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":i={color:new Se,position:new rt,halfWidth:new rt,halfHeight:new rt};break}return o[e.id]=i,i}}}function KR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let QR=0;function JR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function $R(o){const e=new ZR,i=KR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)s.probe.push(new rt);const u=new rt,f=new on,h=new on;function d(g){let S=0,p=0,x=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,b=0,R=0,y=0,m=0,L=0,O=0,w=0,F=0,B=0,z=0;g.sort(JR);for(let D=0,C=g.length;D<C;D++){const X=g[D],nt=X.color,ut=X.intensity,_t=X.distance,lt=X.shadow&&X.shadow.map?X.shadow.map.texture:null;if(X.isAmbientLight)S+=nt.r*ut,p+=nt.g*ut,x+=nt.b*ut;else if(X.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(X.sh.coefficients[q],ut);z++}else if(X.isDirectionalLight){const q=e.get(X);if(q.color.copy(X.color).multiplyScalar(X.intensity),X.castShadow){const at=X.shadow,G=i.get(X);G.shadowIntensity=at.intensity,G.shadowBias=at.bias,G.shadowNormalBias=at.normalBias,G.shadowRadius=at.radius,G.shadowMapSize=at.mapSize,s.directionalShadow[M]=G,s.directionalShadowMap[M]=lt,s.directionalShadowMatrix[M]=X.shadow.matrix,L++}s.directional[M]=q,M++}else if(X.isSpotLight){const q=e.get(X);q.position.setFromMatrixPosition(X.matrixWorld),q.color.copy(nt).multiplyScalar(ut),q.distance=_t,q.coneCos=Math.cos(X.angle),q.penumbraCos=Math.cos(X.angle*(1-X.penumbra)),q.decay=X.decay,s.spot[R]=q;const at=X.shadow;if(X.map&&(s.spotLightMap[F]=X.map,F++,at.updateMatrices(X),X.castShadow&&B++),s.spotLightMatrix[R]=at.matrix,X.castShadow){const G=i.get(X);G.shadowIntensity=at.intensity,G.shadowBias=at.bias,G.shadowNormalBias=at.normalBias,G.shadowRadius=at.radius,G.shadowMapSize=at.mapSize,s.spotShadow[R]=G,s.spotShadowMap[R]=lt,w++}R++}else if(X.isRectAreaLight){const q=e.get(X);q.color.copy(nt).multiplyScalar(ut),q.halfWidth.set(X.width*.5,0,0),q.halfHeight.set(0,X.height*.5,0),s.rectArea[y]=q,y++}else if(X.isPointLight){const q=e.get(X);if(q.color.copy(X.color).multiplyScalar(X.intensity),q.distance=X.distance,q.decay=X.decay,X.castShadow){const at=X.shadow,G=i.get(X);G.shadowIntensity=at.intensity,G.shadowBias=at.bias,G.shadowNormalBias=at.normalBias,G.shadowRadius=at.radius,G.shadowMapSize=at.mapSize,G.shadowCameraNear=at.camera.near,G.shadowCameraFar=at.camera.far,s.pointShadow[b]=G,s.pointShadowMap[b]=lt,s.pointShadowMatrix[b]=X.shadow.matrix,O++}s.point[b]=q,b++}else if(X.isHemisphereLight){const q=e.get(X);q.skyColor.copy(X.color).multiplyScalar(ut),q.groundColor.copy(X.groundColor).multiplyScalar(ut),s.hemi[m]=q,m++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Bt.LTC_FLOAT_1,s.rectAreaLTC2=Bt.LTC_FLOAT_2):(s.rectAreaLTC1=Bt.LTC_HALF_1,s.rectAreaLTC2=Bt.LTC_HALF_2)),s.ambient[0]=S,s.ambient[1]=p,s.ambient[2]=x;const Y=s.hash;(Y.directionalLength!==M||Y.pointLength!==b||Y.spotLength!==R||Y.rectAreaLength!==y||Y.hemiLength!==m||Y.numDirectionalShadows!==L||Y.numPointShadows!==O||Y.numSpotShadows!==w||Y.numSpotMaps!==F||Y.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=R,s.rectArea.length=y,s.point.length=b,s.hemi.length=m,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=w+F-B,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=z,Y.directionalLength=M,Y.pointLength=b,Y.spotLength=R,Y.rectAreaLength=y,Y.hemiLength=m,Y.numDirectionalShadows=L,Y.numPointShadows=O,Y.numSpotShadows=w,Y.numSpotMaps=F,Y.numLightProbes=z,s.version=QR++)}function v(g,S){let p=0,x=0,M=0,b=0,R=0;const y=S.matrixWorldInverse;for(let m=0,L=g.length;m<L;m++){const O=g[m];if(O.isDirectionalLight){const w=s.directional[p];w.direction.setFromMatrixPosition(O.matrixWorld),u.setFromMatrixPosition(O.target.matrixWorld),w.direction.sub(u),w.direction.transformDirection(y),p++}else if(O.isSpotLight){const w=s.spot[M];w.position.setFromMatrixPosition(O.matrixWorld),w.position.applyMatrix4(y),w.direction.setFromMatrixPosition(O.matrixWorld),u.setFromMatrixPosition(O.target.matrixWorld),w.direction.sub(u),w.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const w=s.rectArea[b];w.position.setFromMatrixPosition(O.matrixWorld),w.position.applyMatrix4(y),h.identity(),f.copy(O.matrixWorld),f.premultiply(y),h.extractRotation(f),w.halfWidth.set(O.width*.5,0,0),w.halfHeight.set(0,O.height*.5,0),w.halfWidth.applyMatrix4(h),w.halfHeight.applyMatrix4(h),b++}else if(O.isPointLight){const w=s.point[x];w.position.setFromMatrixPosition(O.matrixWorld),w.position.applyMatrix4(y),x++}else if(O.isHemisphereLight){const w=s.hemi[R];w.direction.setFromMatrixPosition(O.matrixWorld),w.direction.transformDirection(y),R++}}}return{setup:d,setupView:v,state:s}}function aS(o){const e=new $R(o),i=[],s=[];function u(S){g.camera=S,i.length=0,s.length=0}function f(S){i.push(S)}function h(S){s.push(S)}function d(){e.setup(i)}function v(S){e.setupView(i,S)}const g={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:u,state:g,setupLights:d,setupLightsView:v,pushLight:f,pushShadow:h}}function tC(o){let e=new WeakMap;function i(u,f=0){const h=e.get(u);let d;return h===void 0?(d=new aS(o),e.set(u,[d])):f>=h.length?(d=new aS(o),h.push(d)):d=h[f],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const eC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nC=`uniform sampler2D shadow_pass;
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
}`;function iC(o,e,i){let s=new Pp;const u=new ze,f=new ze,h=new sn,d=new bT({depthPacking:ME}),v=new AT,g={},S=i.maxTextureSize,p={[ur]:Zn,[Zn]:ur,[Zi]:Zi},x=new ta({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ze},radius:{value:4}},vertexShader:eC,fragmentShader:nC}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new ea;b.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new jn(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sS;let m=this.type;this.render=function(B,z,Y){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;const D=o.getRenderTarget(),C=o.getActiveCubeFace(),X=o.getActiveMipmapLevel(),nt=o.state;nt.setBlending(or),nt.buffers.depth.getReversed()===!0?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const ut=m!==Ea&&this.type===Ea,_t=m===Ea&&this.type!==Ea;for(let lt=0,q=B.length;lt<q;lt++){const at=B[lt],G=at.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;u.copy(G.mapSize);const gt=G.getFrameExtents();if(u.multiply(gt),f.copy(G.mapSize),(u.x>S||u.y>S)&&(u.x>S&&(f.x=Math.floor(S/gt.x),u.x=f.x*gt.x,G.mapSize.x=f.x),u.y>S&&(f.y=Math.floor(S/gt.y),u.y=f.y*gt.y,G.mapSize.y=f.y)),G.map===null||ut===!0||_t===!0){const Ft=this.type!==Ea?{minFilter:Oi,magFilter:Oi}:{};G.map!==null&&G.map.dispose(),G.map=new Zr(u.x,u.y,Ft),G.map.texture.name=at.name+".shadowMap",G.camera.updateProjectionMatrix()}o.setRenderTarget(G.map),o.clear();const vt=G.getViewportCount();for(let Ft=0;Ft<vt;Ft++){const ae=G.getViewport(Ft);h.set(f.x*ae.x,f.y*ae.y,f.x*ae.z,f.y*ae.w),nt.viewport(h),G.updateMatrices(at,Ft),s=G.getFrustum(),w(z,Y,G.camera,at,this.type)}G.isPointLightShadow!==!0&&this.type===Ea&&L(G,Y),G.needsUpdate=!1}m=this.type,y.needsUpdate=!1,o.setRenderTarget(D,C,X)};function L(B,z){const Y=e.update(R);x.defines.VSM_SAMPLES!==B.blurSamples&&(x.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new Zr(u.x,u.y)),x.uniforms.shadow_pass.value=B.map.texture,x.uniforms.resolution.value=B.mapSize,x.uniforms.radius.value=B.radius,o.setRenderTarget(B.mapPass),o.clear(),o.renderBufferDirect(z,null,Y,x,R,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,o.setRenderTarget(B.map),o.clear(),o.renderBufferDirect(z,null,Y,M,R,null)}function O(B,z,Y,D){let C=null;const X=Y.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(X!==void 0)C=X;else if(C=Y.isPointLight===!0?v:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const nt=C.uuid,ut=z.uuid;let _t=g[nt];_t===void 0&&(_t={},g[nt]=_t);let lt=_t[ut];lt===void 0&&(lt=C.clone(),_t[ut]=lt,z.addEventListener("dispose",F)),C=lt}if(C.visible=z.visible,C.wireframe=z.wireframe,D===Ea?C.side=z.shadowSide!==null?z.shadowSide:z.side:C.side=z.shadowSide!==null?z.shadowSide:p[z.side],C.alphaMap=z.alphaMap,C.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,C.map=z.map,C.clipShadows=z.clipShadows,C.clippingPlanes=z.clippingPlanes,C.clipIntersection=z.clipIntersection,C.displacementMap=z.displacementMap,C.displacementScale=z.displacementScale,C.displacementBias=z.displacementBias,C.wireframeLinewidth=z.wireframeLinewidth,C.linewidth=z.linewidth,Y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const nt=o.properties.get(C);nt.light=Y}return C}function w(B,z,Y,D,C){if(B.visible===!1)return;if(B.layers.test(z.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===Ea)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,B.matrixWorld);const ut=e.update(B),_t=B.material;if(Array.isArray(_t)){const lt=ut.groups;for(let q=0,at=lt.length;q<at;q++){const G=lt[q],gt=_t[G.materialIndex];if(gt&&gt.visible){const vt=O(B,gt,D,C);B.onBeforeShadow(o,B,z,Y,ut,vt,G),o.renderBufferDirect(Y,null,ut,vt,B,G),B.onAfterShadow(o,B,z,Y,ut,vt,G)}}}else if(_t.visible){const lt=O(B,_t,D,C);B.onBeforeShadow(o,B,z,Y,ut,lt,null),o.renderBufferDirect(Y,null,ut,lt,B,null),B.onAfterShadow(o,B,z,Y,ut,lt,null)}}const nt=B.children;for(let ut=0,_t=nt.length;ut<_t;ut++)w(nt[ut],z,Y,D,C)}function F(B){B.target.removeEventListener("dispose",F);for(const Y in g){const D=g[Y],C=B.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const aC={[Bd]:Fd,[Hd]:Xd,[Gd]:kd,[io]:Vd,[Fd]:Bd,[Xd]:Hd,[kd]:Gd,[Vd]:io};function rC(o,e){function i(){let V=!1;const Ct=new sn;let Nt=null;const kt=new sn(0,0,0,0);return{setMask:function(Tt){Nt!==Tt&&!V&&(o.colorMask(Tt,Tt,Tt,Tt),Nt=Tt)},setLocked:function(Tt){V=Tt},setClear:function(Tt,St,Zt,ue,Ve){Ve===!0&&(Tt*=ue,St*=ue,Zt*=ue),Ct.set(Tt,St,Zt,ue),kt.equals(Ct)===!1&&(o.clearColor(Tt,St,Zt,ue),kt.copy(Ct))},reset:function(){V=!1,Nt=null,kt.set(-1,0,0,0)}}}function s(){let V=!1,Ct=!1,Nt=null,kt=null,Tt=null;return{setReversed:function(St){if(Ct!==St){const Zt=e.get("EXT_clip_control");St?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT),Ct=St;const ue=Tt;Tt=null,this.setClear(ue)}},getReversed:function(){return Ct},setTest:function(St){St?et(o.DEPTH_TEST):Mt(o.DEPTH_TEST)},setMask:function(St){Nt!==St&&!V&&(o.depthMask(St),Nt=St)},setFunc:function(St){if(Ct&&(St=aC[St]),kt!==St){switch(St){case Bd:o.depthFunc(o.NEVER);break;case Fd:o.depthFunc(o.ALWAYS);break;case Hd:o.depthFunc(o.LESS);break;case io:o.depthFunc(o.LEQUAL);break;case Gd:o.depthFunc(o.EQUAL);break;case Vd:o.depthFunc(o.GEQUAL);break;case Xd:o.depthFunc(o.GREATER);break;case kd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}kt=St}},setLocked:function(St){V=St},setClear:function(St){Tt!==St&&(Ct&&(St=1-St),o.clearDepth(St),Tt=St)},reset:function(){V=!1,Nt=null,kt=null,Tt=null,Ct=!1}}}function u(){let V=!1,Ct=null,Nt=null,kt=null,Tt=null,St=null,Zt=null,ue=null,Ve=null;return{setTest:function(Me){V||(Me?et(o.STENCIL_TEST):Mt(o.STENCIL_TEST))},setMask:function(Me){Ct!==Me&&!V&&(o.stencilMask(Me),Ct=Me)},setFunc:function(Me,tn,mn){(Nt!==Me||kt!==tn||Tt!==mn)&&(o.stencilFunc(Me,tn,mn),Nt=Me,kt=tn,Tt=mn)},setOp:function(Me,tn,mn){(St!==Me||Zt!==tn||ue!==mn)&&(o.stencilOp(Me,tn,mn),St=Me,Zt=tn,ue=mn)},setLocked:function(Me){V=Me},setClear:function(Me){Ve!==Me&&(o.clearStencil(Me),Ve=Me)},reset:function(){V=!1,Ct=null,Nt=null,kt=null,Tt=null,St=null,Zt=null,ue=null,Ve=null}}}const f=new i,h=new s,d=new u,v=new WeakMap,g=new WeakMap;let S={},p={},x=new WeakMap,M=[],b=null,R=!1,y=null,m=null,L=null,O=null,w=null,F=null,B=null,z=new Se(0,0,0),Y=0,D=!1,C=null,X=null,nt=null,ut=null,_t=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,at=0;const G=o.getParameter(o.VERSION);G.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(G)[1]),q=at>=1):G.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),q=at>=2);let gt=null,vt={};const Ft=o.getParameter(o.SCISSOR_BOX),ae=o.getParameter(o.VIEWPORT),_e=new sn().fromArray(Ft),I=new sn().fromArray(ae);function ct(V,Ct,Nt,kt){const Tt=new Uint8Array(4),St=o.createTexture();o.bindTexture(V,St),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Zt=0;Zt<Nt;Zt++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(Ct,0,o.RGBA,1,1,kt,0,o.RGBA,o.UNSIGNED_BYTE,Tt):o.texImage2D(Ct+Zt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Tt);return St}const Q={};Q[o.TEXTURE_2D]=ct(o.TEXTURE_2D,o.TEXTURE_2D,1),Q[o.TEXTURE_CUBE_MAP]=ct(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[o.TEXTURE_2D_ARRAY]=ct(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),Q[o.TEXTURE_3D]=ct(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),et(o.DEPTH_TEST),h.setFunc(io),Xt(!1),wt(av),et(o.CULL_FACE),Pe(or);function et(V){S[V]!==!0&&(o.enable(V),S[V]=!0)}function Mt(V){S[V]!==!1&&(o.disable(V),S[V]=!1)}function Lt(V,Ct){return p[V]!==Ct?(o.bindFramebuffer(V,Ct),p[V]=Ct,V===o.DRAW_FRAMEBUFFER&&(p[o.FRAMEBUFFER]=Ct),V===o.FRAMEBUFFER&&(p[o.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Rt(V,Ct){let Nt=M,kt=!1;if(V){Nt=x.get(Ct),Nt===void 0&&(Nt=[],x.set(Ct,Nt));const Tt=V.textures;if(Nt.length!==Tt.length||Nt[0]!==o.COLOR_ATTACHMENT0){for(let St=0,Zt=Tt.length;St<Zt;St++)Nt[St]=o.COLOR_ATTACHMENT0+St;Nt.length=Tt.length,kt=!0}}else Nt[0]!==o.BACK&&(Nt[0]=o.BACK,kt=!0);kt&&o.drawBuffers(Nt)}function Et(V){return b!==V?(o.useProgram(V),b=V,!0):!1}const Yt={[Vr]:o.FUNC_ADD,[jM]:o.FUNC_SUBTRACT,[ZM]:o.FUNC_REVERSE_SUBTRACT};Yt[KM]=o.MIN,Yt[QM]=o.MAX;const P={[JM]:o.ZERO,[$M]:o.ONE,[tE]:o.SRC_COLOR,[Pd]:o.SRC_ALPHA,[sE]:o.SRC_ALPHA_SATURATE,[aE]:o.DST_COLOR,[nE]:o.DST_ALPHA,[eE]:o.ONE_MINUS_SRC_COLOR,[Id]:o.ONE_MINUS_SRC_ALPHA,[rE]:o.ONE_MINUS_DST_COLOR,[iE]:o.ONE_MINUS_DST_ALPHA,[oE]:o.CONSTANT_COLOR,[lE]:o.ONE_MINUS_CONSTANT_COLOR,[uE]:o.CONSTANT_ALPHA,[cE]:o.ONE_MINUS_CONSTANT_ALPHA};function Pe(V,Ct,Nt,kt,Tt,St,Zt,ue,Ve,Me){if(V===or){R===!0&&(Mt(o.BLEND),R=!1);return}if(R===!1&&(et(o.BLEND),R=!0),V!==WM){if(V!==y||Me!==D){if((m!==Vr||w!==Vr)&&(o.blendEquation(o.FUNC_ADD),m=Vr,w=Vr),Me)switch(V){case to:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Sc:o.blendFunc(o.ONE,o.ONE);break;case rv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case sv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case to:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Sc:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case rv:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}L=null,O=null,F=null,B=null,z.set(0,0,0),Y=0,y=V,D=Me}return}Tt=Tt||Ct,St=St||Nt,Zt=Zt||kt,(Ct!==m||Tt!==w)&&(o.blendEquationSeparate(Yt[Ct],Yt[Tt]),m=Ct,w=Tt),(Nt!==L||kt!==O||St!==F||Zt!==B)&&(o.blendFuncSeparate(P[Nt],P[kt],P[St],P[Zt]),L=Nt,O=kt,F=St,B=Zt),(ue.equals(z)===!1||Ve!==Y)&&(o.blendColor(ue.r,ue.g,ue.b,Ve),z.copy(ue),Y=Ve),y=V,D=!1}function xt(V,Ct){V.side===Zi?Mt(o.CULL_FACE):et(o.CULL_FACE);let Nt=V.side===Zn;Ct&&(Nt=!Nt),Xt(Nt),V.blending===to&&V.transparent===!1?Pe(or):Pe(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),f.setMask(V.colorWrite);const kt=V.stencilWrite;d.setTest(kt),kt&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Gt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?et(o.SAMPLE_ALPHA_TO_COVERAGE):Mt(o.SAMPLE_ALPHA_TO_COVERAGE)}function Xt(V){C!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),C=V)}function wt(V){V!==kM?(et(o.CULL_FACE),V!==X&&(V===av?o.cullFace(o.BACK):V===YM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Mt(o.CULL_FACE),X=V}function ne(V){V!==nt&&(q&&o.lineWidth(V),nt=V)}function Gt(V,Ct,Nt){V?(et(o.POLYGON_OFFSET_FILL),(ut!==Ct||_t!==Nt)&&(o.polygonOffset(Ct,Nt),ut=Ct,_t=Nt)):Mt(o.POLYGON_OFFSET_FILL)}function oe(V){V?et(o.SCISSOR_TEST):Mt(o.SCISSOR_TEST)}function Ye(V){V===void 0&&(V=o.TEXTURE0+lt-1),gt!==V&&(o.activeTexture(V),gt=V)}function We(V,Ct,Nt){Nt===void 0&&(gt===null?Nt=o.TEXTURE0+lt-1:Nt=gt);let kt=vt[Nt];kt===void 0&&(kt={type:void 0,texture:void 0},vt[Nt]=kt),(kt.type!==V||kt.texture!==Ct)&&(gt!==Nt&&(o.activeTexture(Nt),gt=Nt),o.bindTexture(V,Ct||Q[V]),kt.type=V,kt.texture=Ct)}function U(){const V=vt[gt];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function tt(){try{o.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{o.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function yt(){try{o.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ht(){try{o.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qt(){try{o.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{o.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Kt(){try{o.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Jt(){try{o.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function At(){try{o.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function zt(V){_e.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),_e.copy(V))}function re(V){I.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),I.copy(V))}function Qt(V,Ct){let Nt=g.get(Ct);Nt===void 0&&(Nt=new WeakMap,g.set(Ct,Nt));let kt=Nt.get(V);kt===void 0&&(kt=o.getUniformBlockIndex(Ct,V.name),Nt.set(V,kt))}function Pt(V,Ct){const kt=g.get(Ct).get(V);v.get(Ct)!==kt&&(o.uniformBlockBinding(Ct,kt,V.__bindingPointIndex),v.set(Ct,kt))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),S={},gt=null,vt={},p={},x=new WeakMap,M=[],b=null,R=!1,y=null,m=null,L=null,O=null,w=null,F=null,B=null,z=new Se(0,0,0),Y=0,D=!1,C=null,X=null,nt=null,ut=null,_t=null,_e.set(0,0,o.canvas.width,o.canvas.height),I.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:et,disable:Mt,bindFramebuffer:Lt,drawBuffers:Rt,useProgram:Et,setBlending:Pe,setMaterial:xt,setFlipSided:Xt,setCullFace:wt,setLineWidth:ne,setPolygonOffset:Gt,setScissorTest:oe,activeTexture:Ye,bindTexture:We,unbindTexture:U,compressedTexImage2D:T,compressedTexImage3D:tt,texImage2D:Jt,texImage3D:At,updateUBOMapping:Qt,uniformBlockBinding:Pt,texStorage2D:Dt,texStorage3D:Kt,texSubImage2D:pt,texSubImage3D:yt,compressedTexSubImage2D:ht,compressedTexSubImage3D:qt,scissor:zt,viewport:re,reset:ce}}function sC(o,e,i,s,u,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new ze,S=new WeakMap;let p;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,T){return M?new OffscreenCanvas(U,T):Mc("canvas")}function R(U,T,tt){let pt=1;const yt=We(U);if((yt.width>tt||yt.height>tt)&&(pt=tt/Math.max(yt.width,yt.height)),pt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ht=Math.floor(pt*yt.width),qt=Math.floor(pt*yt.height);p===void 0&&(p=b(ht,qt));const Dt=T?b(ht,qt):p;return Dt.width=ht,Dt.height=qt,Dt.getContext("2d").drawImage(U,0,0,ht,qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ht+"x"+qt+")."),Dt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),U;return U}function y(U){return U.generateMipmaps}function m(U){o.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(U,T,tt,pt,yt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ht=T;if(T===o.RED&&(tt===o.FLOAT&&(ht=o.R32F),tt===o.HALF_FLOAT&&(ht=o.R16F),tt===o.UNSIGNED_BYTE&&(ht=o.R8)),T===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ht=o.R8UI),tt===o.UNSIGNED_SHORT&&(ht=o.R16UI),tt===o.UNSIGNED_INT&&(ht=o.R32UI),tt===o.BYTE&&(ht=o.R8I),tt===o.SHORT&&(ht=o.R16I),tt===o.INT&&(ht=o.R32I)),T===o.RG&&(tt===o.FLOAT&&(ht=o.RG32F),tt===o.HALF_FLOAT&&(ht=o.RG16F),tt===o.UNSIGNED_BYTE&&(ht=o.RG8)),T===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ht=o.RG8UI),tt===o.UNSIGNED_SHORT&&(ht=o.RG16UI),tt===o.UNSIGNED_INT&&(ht=o.RG32UI),tt===o.BYTE&&(ht=o.RG8I),tt===o.SHORT&&(ht=o.RG16I),tt===o.INT&&(ht=o.RG32I)),T===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ht=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(ht=o.RGB16UI),tt===o.UNSIGNED_INT&&(ht=o.RGB32UI),tt===o.BYTE&&(ht=o.RGB8I),tt===o.SHORT&&(ht=o.RGB16I),tt===o.INT&&(ht=o.RGB32I)),T===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(ht=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(ht=o.RGBA16UI),tt===o.UNSIGNED_INT&&(ht=o.RGBA32UI),tt===o.BYTE&&(ht=o.RGBA8I),tt===o.SHORT&&(ht=o.RGBA16I),tt===o.INT&&(ht=o.RGBA32I)),T===o.RGB&&(tt===o.UNSIGNED_INT_5_9_9_9_REV&&(ht=o.RGB9_E5),tt===o.UNSIGNED_INT_10F_11F_11F_REV&&(ht=o.R11F_G11F_B10F)),T===o.RGBA){const qt=yt?xc:Ue.getTransfer(pt);tt===o.FLOAT&&(ht=o.RGBA32F),tt===o.HALF_FLOAT&&(ht=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(ht=qt===ke?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(ht=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(ht=o.RGB5_A1)}return(ht===o.R16F||ht===o.R32F||ht===o.RG16F||ht===o.RG32F||ht===o.RGBA16F||ht===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ht}function w(U,T){let tt;return U?T===null||T===Wr||T===pl?tt=o.DEPTH24_STENCIL8:T===Ta?tt=o.DEPTH32F_STENCIL8:T===dl&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Wr||T===pl?tt=o.DEPTH_COMPONENT24:T===Ta?tt=o.DEPTH_COMPONENT32F:T===dl&&(tt=o.DEPTH_COMPONENT16),tt}function F(U,T){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Oi&&U.minFilter!==Ki?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function B(U){const T=U.target;T.removeEventListener("dispose",B),Y(T),T.isVideoTexture&&S.delete(T)}function z(U){const T=U.target;T.removeEventListener("dispose",z),C(T)}function Y(U){const T=s.get(U);if(T.__webglInit===void 0)return;const tt=U.source,pt=x.get(tt);if(pt){const yt=pt[T.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&D(U),Object.keys(pt).length===0&&x.delete(tt)}s.remove(U)}function D(U){const T=s.get(U);o.deleteTexture(T.__webglTexture);const tt=U.source,pt=x.get(tt);delete pt[T.__cacheKey],h.memory.textures--}function C(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(T.__webglFramebuffer[pt]))for(let yt=0;yt<T.__webglFramebuffer[pt].length;yt++)o.deleteFramebuffer(T.__webglFramebuffer[pt][yt]);else o.deleteFramebuffer(T.__webglFramebuffer[pt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[pt])}else{if(Array.isArray(T.__webglFramebuffer))for(let pt=0;pt<T.__webglFramebuffer.length;pt++)o.deleteFramebuffer(T.__webglFramebuffer[pt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let pt=0;pt<T.__webglColorRenderbuffer.length;pt++)T.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[pt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const tt=U.textures;for(let pt=0,yt=tt.length;pt<yt;pt++){const ht=s.get(tt[pt]);ht.__webglTexture&&(o.deleteTexture(ht.__webglTexture),h.memory.textures--),s.remove(tt[pt])}s.remove(U)}let X=0;function nt(){X=0}function ut(){const U=X;return U>=u.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+u.maxTextures),X+=1,U}function _t(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function lt(U,T){const tt=s.get(U);if(U.isVideoTexture&&oe(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&tt.__version!==U.version){const pt=U.image;if(pt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(tt,U,T);return}}else U.isExternalTexture&&(tt.__webglTexture=U.sourceTexture?U.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+T)}function q(U,T){const tt=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){Q(tt,U,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+T)}function at(U,T){const tt=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&tt.__version!==U.version){Q(tt,U,T);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+T)}function G(U,T){const tt=s.get(U);if(U.version>0&&tt.__version!==U.version){et(tt,U,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+T)}const gt={[Wd]:o.REPEAT,[kr]:o.CLAMP_TO_EDGE,[jd]:o.MIRRORED_REPEAT},vt={[Oi]:o.NEAREST,[xE]:o.NEAREST_MIPMAP_NEAREST,[Yu]:o.NEAREST_MIPMAP_LINEAR,[Ki]:o.LINEAR,[sd]:o.LINEAR_MIPMAP_NEAREST,[Yr]:o.LINEAR_MIPMAP_LINEAR},Ft={[TE]:o.NEVER,[DE]:o.ALWAYS,[bE]:o.LESS,[vS]:o.LEQUAL,[AE]:o.EQUAL,[wE]:o.GEQUAL,[RE]:o.GREATER,[CE]:o.NOTEQUAL};function ae(U,T){if(T.type===Ta&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ki||T.magFilter===sd||T.magFilter===Yu||T.magFilter===Yr||T.minFilter===Ki||T.minFilter===sd||T.minFilter===Yu||T.minFilter===Yr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,gt[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,gt[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,gt[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,vt[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,vt[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Ft[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Oi||T.minFilter!==Yu&&T.minFilter!==Yr||T.type===Ta&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,u.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function _e(U,T){let tt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",B));const pt=T.source;let yt=x.get(pt);yt===void 0&&(yt={},x.set(pt,yt));const ht=_t(T);if(ht!==U.__cacheKey){yt[ht]===void 0&&(yt[ht]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),yt[ht].usedTimes++;const qt=yt[U.__cacheKey];qt!==void 0&&(yt[U.__cacheKey].usedTimes--,qt.usedTimes===0&&D(T)),U.__cacheKey=ht,U.__webglTexture=yt[ht].texture}return tt}function I(U,T,tt){return Math.floor(Math.floor(U/tt)/T)}function ct(U,T,tt,pt){const ht=U.updateRanges;if(ht.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,tt,pt,T.data);else{ht.sort((At,zt)=>At.start-zt.start);let qt=0;for(let At=1;At<ht.length;At++){const zt=ht[qt],re=ht[At],Qt=zt.start+zt.count,Pt=I(re.start,T.width,4),ce=I(zt.start,T.width,4);re.start<=Qt+1&&Pt===ce&&I(re.start+re.count-1,T.width,4)===Pt?zt.count=Math.max(zt.count,re.start+re.count-zt.start):(++qt,ht[qt]=re)}ht.length=qt+1;const Dt=o.getParameter(o.UNPACK_ROW_LENGTH),Kt=o.getParameter(o.UNPACK_SKIP_PIXELS),Jt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let At=0,zt=ht.length;At<zt;At++){const re=ht[At],Qt=Math.floor(re.start/4),Pt=Math.ceil(re.count/4),ce=Qt%T.width,V=Math.floor(Qt/T.width),Ct=Pt,Nt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,V),i.texSubImage2D(o.TEXTURE_2D,0,ce,V,Ct,Nt,tt,pt,T.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Dt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Kt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Jt)}}function Q(U,T,tt){let pt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(pt=o.TEXTURE_3D);const yt=_e(U,T),ht=T.source;i.bindTexture(pt,U.__webglTexture,o.TEXTURE0+tt);const qt=s.get(ht);if(ht.version!==qt.__version||yt===!0){i.activeTexture(o.TEXTURE0+tt);const Dt=Ue.getPrimaries(Ue.workingColorSpace),Kt=T.colorSpace===sr?null:Ue.getPrimaries(T.colorSpace),Jt=T.colorSpace===sr||Dt===Kt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let At=R(T.image,!1,u.maxTextureSize);At=Ye(T,At);const zt=f.convert(T.format,T.colorSpace),re=f.convert(T.type);let Qt=O(T.internalFormat,zt,re,T.colorSpace,T.isVideoTexture);ae(pt,T);let Pt;const ce=T.mipmaps,V=T.isVideoTexture!==!0,Ct=qt.__version===void 0||yt===!0,Nt=ht.dataReady,kt=F(T,At);if(T.isDepthTexture)Qt=w(T.format===gl,T.type),Ct&&(V?i.texStorage2D(o.TEXTURE_2D,1,Qt,At.width,At.height):i.texImage2D(o.TEXTURE_2D,0,Qt,At.width,At.height,0,zt,re,null));else if(T.isDataTexture)if(ce.length>0){V&&Ct&&i.texStorage2D(o.TEXTURE_2D,kt,Qt,ce[0].width,ce[0].height);for(let Tt=0,St=ce.length;Tt<St;Tt++)Pt=ce[Tt],V?Nt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Pt.width,Pt.height,zt,re,Pt.data):i.texImage2D(o.TEXTURE_2D,Tt,Qt,Pt.width,Pt.height,0,zt,re,Pt.data);T.generateMipmaps=!1}else V?(Ct&&i.texStorage2D(o.TEXTURE_2D,kt,Qt,At.width,At.height),Nt&&ct(T,At,zt,re)):i.texImage2D(o.TEXTURE_2D,0,Qt,At.width,At.height,0,zt,re,At.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){V&&Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,kt,Qt,ce[0].width,ce[0].height,At.depth);for(let Tt=0,St=ce.length;Tt<St;Tt++)if(Pt=ce[Tt],T.format!==Li)if(zt!==null)if(V){if(Nt)if(T.layerUpdates.size>0){const Zt=Ov(Pt.width,Pt.height,T.format,T.type);for(const ue of T.layerUpdates){const Ve=Pt.data.subarray(ue*Zt/Pt.data.BYTES_PER_ELEMENT,(ue+1)*Zt/Pt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,ue,Pt.width,Pt.height,1,zt,Ve)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Pt.width,Pt.height,At.depth,zt,Pt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Tt,Qt,Pt.width,Pt.height,At.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?Nt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Tt,0,0,0,Pt.width,Pt.height,At.depth,zt,re,Pt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Tt,Qt,Pt.width,Pt.height,At.depth,0,zt,re,Pt.data)}else{V&&Ct&&i.texStorage2D(o.TEXTURE_2D,kt,Qt,ce[0].width,ce[0].height);for(let Tt=0,St=ce.length;Tt<St;Tt++)Pt=ce[Tt],T.format!==Li?zt!==null?V?Nt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Tt,0,0,Pt.width,Pt.height,zt,Pt.data):i.compressedTexImage2D(o.TEXTURE_2D,Tt,Qt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?Nt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,Pt.width,Pt.height,zt,re,Pt.data):i.texImage2D(o.TEXTURE_2D,Tt,Qt,Pt.width,Pt.height,0,zt,re,Pt.data)}else if(T.isDataArrayTexture)if(V){if(Ct&&i.texStorage3D(o.TEXTURE_2D_ARRAY,kt,Qt,At.width,At.height,At.depth),Nt)if(T.layerUpdates.size>0){const Tt=Ov(At.width,At.height,T.format,T.type);for(const St of T.layerUpdates){const Zt=At.data.subarray(St*Tt/At.data.BYTES_PER_ELEMENT,(St+1)*Tt/At.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,St,At.width,At.height,1,zt,re,Zt)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,zt,re,At.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Qt,At.width,At.height,At.depth,0,zt,re,At.data);else if(T.isData3DTexture)V?(Ct&&i.texStorage3D(o.TEXTURE_3D,kt,Qt,At.width,At.height,At.depth),Nt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,zt,re,At.data)):i.texImage3D(o.TEXTURE_3D,0,Qt,At.width,At.height,At.depth,0,zt,re,At.data);else if(T.isFramebufferTexture){if(Ct)if(V)i.texStorage2D(o.TEXTURE_2D,kt,Qt,At.width,At.height);else{let Tt=At.width,St=At.height;for(let Zt=0;Zt<kt;Zt++)i.texImage2D(o.TEXTURE_2D,Zt,Qt,Tt,St,0,zt,re,null),Tt>>=1,St>>=1}}else if(ce.length>0){if(V&&Ct){const Tt=We(ce[0]);i.texStorage2D(o.TEXTURE_2D,kt,Qt,Tt.width,Tt.height)}for(let Tt=0,St=ce.length;Tt<St;Tt++)Pt=ce[Tt],V?Nt&&i.texSubImage2D(o.TEXTURE_2D,Tt,0,0,zt,re,Pt):i.texImage2D(o.TEXTURE_2D,Tt,Qt,zt,re,Pt);T.generateMipmaps=!1}else if(V){if(Ct){const Tt=We(At);i.texStorage2D(o.TEXTURE_2D,kt,Qt,Tt.width,Tt.height)}Nt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,zt,re,At)}else i.texImage2D(o.TEXTURE_2D,0,Qt,zt,re,At);y(T)&&m(pt),qt.__version=ht.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function et(U,T,tt){if(T.image.length!==6)return;const pt=_e(U,T),yt=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+tt);const ht=s.get(yt);if(yt.version!==ht.__version||pt===!0){i.activeTexture(o.TEXTURE0+tt);const qt=Ue.getPrimaries(Ue.workingColorSpace),Dt=T.colorSpace===sr?null:Ue.getPrimaries(T.colorSpace),Kt=T.colorSpace===sr||qt===Dt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);const Jt=T.isCompressedTexture||T.image[0].isCompressedTexture,At=T.image[0]&&T.image[0].isDataTexture,zt=[];for(let St=0;St<6;St++)!Jt&&!At?zt[St]=R(T.image[St],!0,u.maxCubemapSize):zt[St]=At?T.image[St].image:T.image[St],zt[St]=Ye(T,zt[St]);const re=zt[0],Qt=f.convert(T.format,T.colorSpace),Pt=f.convert(T.type),ce=O(T.internalFormat,Qt,Pt,T.colorSpace),V=T.isVideoTexture!==!0,Ct=ht.__version===void 0||pt===!0,Nt=yt.dataReady;let kt=F(T,re);ae(o.TEXTURE_CUBE_MAP,T);let Tt;if(Jt){V&&Ct&&i.texStorage2D(o.TEXTURE_CUBE_MAP,kt,ce,re.width,re.height);for(let St=0;St<6;St++){Tt=zt[St].mipmaps;for(let Zt=0;Zt<Tt.length;Zt++){const ue=Tt[Zt];T.format!==Li?Qt!==null?V?Nt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Zt,0,0,ue.width,ue.height,Qt,ue.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Zt,ce,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Zt,0,0,ue.width,ue.height,Qt,Pt,ue.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Zt,ce,ue.width,ue.height,0,Qt,Pt,ue.data)}}}else{if(Tt=T.mipmaps,V&&Ct){Tt.length>0&&kt++;const St=We(zt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,kt,ce,St.width,St.height)}for(let St=0;St<6;St++)if(At){V?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,zt[St].width,zt[St].height,Qt,Pt,zt[St].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ce,zt[St].width,zt[St].height,0,Qt,Pt,zt[St].data);for(let Zt=0;Zt<Tt.length;Zt++){const Ve=Tt[Zt].image[St].image;V?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Zt+1,0,0,Ve.width,Ve.height,Qt,Pt,Ve.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Zt+1,ce,Ve.width,Ve.height,0,Qt,Pt,Ve.data)}}else{V?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,0,0,Qt,Pt,zt[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,ce,Qt,Pt,zt[St]);for(let Zt=0;Zt<Tt.length;Zt++){const ue=Tt[Zt];V?Nt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Zt+1,0,0,Qt,Pt,ue.image[St]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+St,Zt+1,ce,Qt,Pt,ue.image[St])}}}y(T)&&m(o.TEXTURE_CUBE_MAP),ht.__version=yt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function Mt(U,T,tt,pt,yt,ht){const qt=f.convert(tt.format,tt.colorSpace),Dt=f.convert(tt.type),Kt=O(tt.internalFormat,qt,Dt,tt.colorSpace),Jt=s.get(T),At=s.get(tt);if(At.__renderTarget=T,!Jt.__hasExternalTextures){const zt=Math.max(1,T.width>>ht),re=Math.max(1,T.height>>ht);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?i.texImage3D(yt,ht,Kt,zt,re,T.depth,0,qt,Dt,null):i.texImage2D(yt,ht,Kt,zt,re,0,qt,Dt,null)}i.bindFramebuffer(o.FRAMEBUFFER,U),Gt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,yt,At.__webglTexture,0,ne(T)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,yt,At.__webglTexture,ht),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Lt(U,T,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const pt=T.depthTexture,yt=pt&&pt.isDepthTexture?pt.type:null,ht=w(T.stencilBuffer,yt),qt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Dt=ne(T);Gt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Dt,ht,T.width,T.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Dt,ht,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ht,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qt,o.RENDERBUFFER,U)}else{const pt=T.textures;for(let yt=0;yt<pt.length;yt++){const ht=pt[yt],qt=f.convert(ht.format,ht.colorSpace),Dt=f.convert(ht.type),Kt=O(ht.internalFormat,qt,Dt,ht.colorSpace),Jt=ne(T);tt&&Gt(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Jt,Kt,T.width,T.height):Gt(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Jt,Kt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,Kt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Rt(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=s.get(T.depthTexture);pt.__renderTarget=T,(!pt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),lt(T.depthTexture,0);const yt=pt.__webglTexture,ht=ne(T);if(T.depthTexture.format===ml)Gt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(T.depthTexture.format===gl)Gt(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,ht):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function Et(U){const T=s.get(U),tt=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const pt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),pt){const yt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,pt.removeEventListener("dispose",yt)};pt.addEventListener("dispose",yt),T.__depthDisposeCallback=yt}T.__boundDepthTexture=pt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");const pt=U.texture.mipmaps;pt&&pt.length>0?Rt(T.__webglFramebuffer[0],U):Rt(T.__webglFramebuffer,U)}else if(tt){T.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[pt]),T.__webglDepthbuffer[pt]===void 0)T.__webglDepthbuffer[pt]=o.createRenderbuffer(),Lt(T.__webglDepthbuffer[pt],U,!1);else{const yt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ht)}}else{const pt=U.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Lt(T.__webglDepthbuffer,U,!1);else{const yt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ht=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ht),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ht)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Yt(U,T,tt){const pt=s.get(U);T!==void 0&&Mt(pt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&Et(U)}function P(U){const T=U.texture,tt=s.get(U),pt=s.get(T);U.addEventListener("dispose",z);const yt=U.textures,ht=U.isWebGLCubeRenderTarget===!0,qt=yt.length>1;if(qt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=T.version,h.memory.textures++),ht){tt.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer[Dt]=[];for(let Kt=0;Kt<T.mipmaps.length;Kt++)tt.__webglFramebuffer[Dt][Kt]=o.createFramebuffer()}else tt.__webglFramebuffer[Dt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Dt=0;Dt<T.mipmaps.length;Dt++)tt.__webglFramebuffer[Dt]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(qt)for(let Dt=0,Kt=yt.length;Dt<Kt;Dt++){const Jt=s.get(yt[Dt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Gt(U)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Dt=0;Dt<yt.length;Dt++){const Kt=yt[Dt];tt.__webglColorRenderbuffer[Dt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[Dt]);const Jt=f.convert(Kt.format,Kt.colorSpace),At=f.convert(Kt.type),zt=O(Kt.internalFormat,Jt,At,Kt.colorSpace,U.isXRRenderTarget===!0),re=ne(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,re,zt,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Dt,o.RENDERBUFFER,tt.__webglColorRenderbuffer[Dt])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),Lt(tt.__webglDepthRenderbuffer,U,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ht){i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),ae(o.TEXTURE_CUBE_MAP,T);for(let Dt=0;Dt<6;Dt++)if(T.mipmaps&&T.mipmaps.length>0)for(let Kt=0;Kt<T.mipmaps.length;Kt++)Mt(tt.__webglFramebuffer[Dt][Kt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Kt);else Mt(tt.__webglFramebuffer[Dt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);y(T)&&m(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Dt=0,Kt=yt.length;Dt<Kt;Dt++){const Jt=yt[Dt],At=s.get(Jt);let zt=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(zt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(zt,At.__webglTexture),ae(zt,Jt),Mt(tt.__webglFramebuffer,U,Jt,o.COLOR_ATTACHMENT0+Dt,zt,0),y(Jt)&&m(zt)}i.unbindTexture()}else{let Dt=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Dt=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Dt,pt.__webglTexture),ae(Dt,T),T.mipmaps&&T.mipmaps.length>0)for(let Kt=0;Kt<T.mipmaps.length;Kt++)Mt(tt.__webglFramebuffer[Kt],U,T,o.COLOR_ATTACHMENT0,Dt,Kt);else Mt(tt.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,Dt,0);y(T)&&m(Dt),i.unbindTexture()}U.depthBuffer&&Et(U)}function Pe(U){const T=U.textures;for(let tt=0,pt=T.length;tt<pt;tt++){const yt=T[tt];if(y(yt)){const ht=L(U),qt=s.get(yt).__webglTexture;i.bindTexture(ht,qt),m(ht),i.unbindTexture()}}}const xt=[],Xt=[];function wt(U){if(U.samples>0){if(Gt(U)===!1){const T=U.textures,tt=U.width,pt=U.height;let yt=o.COLOR_BUFFER_BIT;const ht=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qt=s.get(U),Dt=T.length>1;if(Dt)for(let Jt=0;Jt<T.length;Jt++)i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const Kt=U.texture.mipmaps;Kt&&Kt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Jt=0;Jt<T.length;Jt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),Dt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Jt]);const At=s.get(T[Jt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,At,0)}o.blitFramebuffer(0,0,tt,pt,0,0,tt,pt,yt,o.NEAREST),v===!0&&(xt.length=0,Xt.length=0,xt.push(o.COLOR_ATTACHMENT0+Jt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(xt.push(ht),Xt.push(ht),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Xt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,xt))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Dt)for(let Jt=0;Jt<T.length;Jt++){i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Jt]);const At=s.get(T[Jt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Jt,o.TEXTURE_2D,At,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&v){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ne(U){return Math.min(u.maxSamples,U.samples)}function Gt(U){const T=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function oe(U){const T=h.render.frame;S.get(U)!==T&&(S.set(U,T),U.update())}function Ye(U,T){const tt=U.colorSpace,pt=U.format,yt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||tt!==so&&tt!==sr&&(Ue.getTransfer(tt)===ke?(pt!==Li||yt!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),T}function We(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(g.width=U.naturalWidth||U.width,g.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(g.width=U.displayWidth,g.height=U.displayHeight):(g.width=U.width,g.height=U.height),g}this.allocateTextureUnit=ut,this.resetTextureUnits=nt,this.setTexture2D=lt,this.setTexture2DArray=q,this.setTexture3D=at,this.setTextureCube=G,this.rebindTextures=Yt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=Pe,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Gt}function oC(o,e){function i(s,u=sr){let f;const h=Ue.getTransfer(u);if(s===$i)return o.UNSIGNED_BYTE;if(s===Cp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===wp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===fS)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===hS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===uS)return o.BYTE;if(s===cS)return o.SHORT;if(s===dl)return o.UNSIGNED_SHORT;if(s===Rp)return o.INT;if(s===Wr)return o.UNSIGNED_INT;if(s===Ta)return o.FLOAT;if(s===Sl)return o.HALF_FLOAT;if(s===dS)return o.ALPHA;if(s===pS)return o.RGB;if(s===Li)return o.RGBA;if(s===ml)return o.DEPTH_COMPONENT;if(s===gl)return o.DEPTH_STENCIL;if(s===mS)return o.RED;if(s===Dp)return o.RED_INTEGER;if(s===gS)return o.RG;if(s===Up)return o.RG_INTEGER;if(s===Np)return o.RGBA_INTEGER;if(s===pc||s===mc||s===gc||s===_c)if(h===ke)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===pc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===mc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===gc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===_c)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===pc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===mc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===gc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===_c)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zd||s===Kd||s===Qd||s===Jd)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===Zd)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kd)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Qd)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jd)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$d||s===tp||s===ep)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===$d||s===tp)return h===ke?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===ep)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===np||s===ip||s===ap||s===rp||s===sp||s===op||s===lp||s===up||s===cp||s===fp||s===hp||s===dp||s===pp||s===mp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===np)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ip)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ap)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===sp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===op)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===lp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===up)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===cp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===pp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===mp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gp||s===_p||s===vp)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===gp)return h===ke?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===_p)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===vp)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Sp||s===xp||s===yp||s===Mp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===Sp)return f.COMPRESSED_RED_RGTC1_EXT;if(s===xp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===yp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Mp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===pl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const lC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,uC=`
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

}`;class cC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new DS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new ta({vertexShader:lC,fragmentShader:uC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new jn(new yl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fC extends lo{constructor(e,i){super();const s=this;let u=null,f=1,h=null,d="local-floor",v=1,g=null,S=null,p=null,x=null,M=null,b=null;const R=typeof XRWebGLBinding<"u",y=new cC,m={},L=i.getContextAttributes();let O=null,w=null;const F=[],B=[],z=new ze;let Y=null;const D=new Mi;D.viewport=new sn;const C=new Mi;C.viewport=new sn;const X=[D,C],nt=new UT;let ut=null,_t=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let et=F[Q];return et===void 0&&(et=new Rd,F[Q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(Q){let et=F[Q];return et===void 0&&(et=new Rd,F[Q]=et),et.getGripSpace()},this.getHand=function(Q){let et=F[Q];return et===void 0&&(et=new Rd,F[Q]=et),et.getHandSpace()};function lt(Q){const et=B.indexOf(Q.inputSource);if(et===-1)return;const Mt=F[et];Mt!==void 0&&(Mt.update(Q.inputSource,Q.frame,g||h),Mt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function q(){u.removeEventListener("select",lt),u.removeEventListener("selectstart",lt),u.removeEventListener("selectend",lt),u.removeEventListener("squeeze",lt),u.removeEventListener("squeezestart",lt),u.removeEventListener("squeezeend",lt),u.removeEventListener("end",q),u.removeEventListener("inputsourceschange",at);for(let Q=0;Q<F.length;Q++){const et=B[Q];et!==null&&(B[Q]=null,F[Q].disconnect(et))}ut=null,_t=null,y.reset();for(const Q in m)delete m[Q];e.setRenderTarget(O),M=null,x=null,p=null,u=null,w=null,ct.stop(),s.isPresenting=!1,e.setPixelRatio(Y),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){f=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){d=Q,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||h},this.setReferenceSpace=function(Q){g=Q},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return p===null&&R&&(p=new XRWebGLBinding(u,i)),p},this.getFrame=function(){return b},this.getSession=function(){return u},this.setSession=async function(Q){if(u=Q,u!==null){if(O=e.getRenderTarget(),u.addEventListener("select",lt),u.addEventListener("selectstart",lt),u.addEventListener("selectend",lt),u.addEventListener("squeeze",lt),u.addEventListener("squeezestart",lt),u.addEventListener("squeezeend",lt),u.addEventListener("end",q),u.addEventListener("inputsourceschange",at),L.xrCompatible!==!0&&await i.makeXRCompatible(),Y=e.getPixelRatio(),e.getSize(z),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Mt=null,Lt=null,Rt=null;L.depth&&(Rt=L.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Mt=L.stencil?gl:ml,Lt=L.stencil?pl:Wr);const Et={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:f};p=this.getBinding(),x=p.createProjectionLayer(Et),u.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),w=new Zr(x.textureWidth,x.textureHeight,{format:Li,type:$i,depthTexture:new wS(x.textureWidth,x.textureHeight,Lt,void 0,void 0,void 0,void 0,void 0,void 0,Mt),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const Mt={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(u,i,Mt),u.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),w=new Zr(M.framebufferWidth,M.framebufferHeight,{format:Li,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(v),g=null,h=await u.requestReferenceSpace(d),ct.setContext(u),ct.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function at(Q){for(let et=0;et<Q.removed.length;et++){const Mt=Q.removed[et],Lt=B.indexOf(Mt);Lt>=0&&(B[Lt]=null,F[Lt].disconnect(Mt))}for(let et=0;et<Q.added.length;et++){const Mt=Q.added[et];let Lt=B.indexOf(Mt);if(Lt===-1){for(let Et=0;Et<F.length;Et++)if(Et>=B.length){B.push(Mt),Lt=Et;break}else if(B[Et]===null){B[Et]=Mt,Lt=Et;break}if(Lt===-1)break}const Rt=F[Lt];Rt&&Rt.connect(Mt)}}const G=new rt,gt=new rt;function vt(Q,et,Mt){G.setFromMatrixPosition(et.matrixWorld),gt.setFromMatrixPosition(Mt.matrixWorld);const Lt=G.distanceTo(gt),Rt=et.projectionMatrix.elements,Et=Mt.projectionMatrix.elements,Yt=Rt[14]/(Rt[10]-1),P=Rt[14]/(Rt[10]+1),Pe=(Rt[9]+1)/Rt[5],xt=(Rt[9]-1)/Rt[5],Xt=(Rt[8]-1)/Rt[0],wt=(Et[8]+1)/Et[0],ne=Yt*Xt,Gt=Yt*wt,oe=Lt/(-Xt+wt),Ye=oe*-Xt;if(et.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ye),Q.translateZ(oe),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Rt[10]===-1)Q.projectionMatrix.copy(et.projectionMatrix),Q.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const We=Yt+oe,U=P+oe,T=ne-Ye,tt=Gt+(Lt-Ye),pt=Pe*P/U*We,yt=xt*P/U*We;Q.projectionMatrix.makePerspective(T,tt,pt,yt,We,U),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function Ft(Q,et){et===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(et.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(u===null)return;let et=Q.near,Mt=Q.far;y.texture!==null&&(y.depthNear>0&&(et=y.depthNear),y.depthFar>0&&(Mt=y.depthFar)),nt.near=C.near=D.near=et,nt.far=C.far=D.far=Mt,(ut!==nt.near||_t!==nt.far)&&(u.updateRenderState({depthNear:nt.near,depthFar:nt.far}),ut=nt.near,_t=nt.far),nt.layers.mask=Q.layers.mask|6,D.layers.mask=nt.layers.mask&3,C.layers.mask=nt.layers.mask&5;const Lt=Q.parent,Rt=nt.cameras;Ft(nt,Lt);for(let Et=0;Et<Rt.length;Et++)Ft(Rt[Et],Lt);Rt.length===2?vt(nt,D,C):nt.projectionMatrix.copy(D.projectionMatrix),ae(Q,nt,Lt)};function ae(Q,et,Mt){Mt===null?Q.matrix.copy(et.matrixWorld):(Q.matrix.copy(Mt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(et.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(et.projectionMatrix),Q.projectionMatrixInverse.copy(et.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=_l*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(x===null&&M===null))return v},this.setFoveation=function(Q){v=Q,x!==null&&(x.fixedFoveation=Q),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Q)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(nt)},this.getCameraTexture=function(Q){return m[Q]};let _e=null;function I(Q,et){if(S=et.getViewerPose(g||h),b=et,S!==null){const Mt=S.views;M!==null&&(e.setRenderTargetFramebuffer(w,M.framebuffer),e.setRenderTarget(w));let Lt=!1;Mt.length!==nt.cameras.length&&(nt.cameras.length=0,Lt=!0);for(let P=0;P<Mt.length;P++){const Pe=Mt[P];let xt=null;if(M!==null)xt=M.getViewport(Pe);else{const wt=p.getViewSubImage(x,Pe);xt=wt.viewport,P===0&&(e.setRenderTargetTextures(w,wt.colorTexture,wt.depthStencilTexture),e.setRenderTarget(w))}let Xt=X[P];Xt===void 0&&(Xt=new Mi,Xt.layers.enable(P),Xt.viewport=new sn,X[P]=Xt),Xt.matrix.fromArray(Pe.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Pe.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(xt.x,xt.y,xt.width,xt.height),P===0&&(nt.matrix.copy(Xt.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),Lt===!0&&nt.cameras.push(Xt)}const Rt=u.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&R){p=s.getBinding();const P=p.getDepthInformation(Mt[0]);P&&P.isValid&&P.texture&&y.init(P,u.renderState)}if(Rt&&Rt.includes("camera-access")&&R){e.state.unbindTexture(),p=s.getBinding();for(let P=0;P<Mt.length;P++){const Pe=Mt[P].camera;if(Pe){let xt=m[Pe];xt||(xt=new DS,m[Pe]=xt);const Xt=p.getCameraImage(Pe);xt.sourceTexture=Xt}}}}for(let Mt=0;Mt<F.length;Mt++){const Lt=B[Mt],Rt=F[Mt];Lt!==null&&Rt!==void 0&&Rt.update(Lt,et,g||h)}_e&&_e(Q,et),et.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:et}),b=null}const ct=new LS;ct.setAnimationLoop(I),this.setAnimationLoop=function(Q){_e=Q},this.dispose=function(){}}}const Fr=new zi,hC=new on;function dC(o,e){function i(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function s(y,m){m.color.getRGB(y.fogColor.value,AS(o)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function u(y,m,L,O,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?f(y,m):m.isMeshToonMaterial?(f(y,m),p(y,m)):m.isMeshPhongMaterial?(f(y,m),S(y,m)):m.isMeshStandardMaterial?(f(y,m),x(y,m),m.isMeshPhysicalMaterial&&M(y,m,w)):m.isMeshMatcapMaterial?(f(y,m),b(y,m)):m.isMeshDepthMaterial?f(y,m):m.isMeshDistanceMaterial?(f(y,m),R(y,m)):m.isMeshNormalMaterial?f(y,m):m.isLineBasicMaterial?(h(y,m),m.isLineDashedMaterial&&d(y,m)):m.isPointsMaterial?v(y,m,L,O):m.isSpriteMaterial?g(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function f(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,i(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,i(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,i(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===Zn&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,i(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===Zn&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,i(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,i(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,i(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);const L=e.get(m),O=L.envMap,w=L.envMapRotation;O&&(y.envMap.value=O,Fr.copy(w),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),y.envMapRotation.value.setFromMatrix4(hC.makeRotationFromEuler(Fr)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap&&(y.lightMap.value=m.lightMap,y.lightMapIntensity.value=m.lightMapIntensity,i(m.lightMap,y.lightMapTransform)),m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,i(m.aoMap,y.aoMapTransform))}function h(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,i(m.map,y.mapTransform))}function d(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function v(y,m,L,O){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*L,y.scale.value=O*.5,m.map&&(y.map.value=m.map,i(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,i(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function g(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,i(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,i(m.alphaMap,y.alphaMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function S(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function p(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function x(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,i(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,i(m.roughnessMap,y.roughnessMapTransform)),m.envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function M(y,m,L){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,i(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,i(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,i(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,i(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,i(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Zn&&y.clearcoatNormalScale.value.negate())),m.dispersion>0&&(y.dispersion.value=m.dispersion),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,i(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,i(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,i(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,i(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(y.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(y.anisotropyMap.value=m.anisotropyMap,i(m.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,i(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,i(m.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,m){m.matcap&&(y.matcap.value=m.matcap)}function R(y,m){const L=e.get(m).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function pC(o,e,i,s){let u={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function v(L,O){const w=O.program;s.uniformBlockBinding(L,w)}function g(L,O){let w=u[L.id];w===void 0&&(b(L),w=S(L),u[L.id]=w,L.addEventListener("dispose",y));const F=O.program;s.updateUBOMapping(L,F);const B=e.render.frame;f[L.id]!==B&&(x(L),f[L.id]=B)}function S(L){const O=p();L.__bindingPointIndex=O;const w=o.createBuffer(),F=L.__size,B=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,w),o.bufferData(o.UNIFORM_BUFFER,F,B),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,w),w}function p(){for(let L=0;L<d;L++)if(h.indexOf(L)===-1)return h.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const O=u[L.id],w=L.uniforms,F=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let B=0,z=w.length;B<z;B++){const Y=Array.isArray(w[B])?w[B]:[w[B]];for(let D=0,C=Y.length;D<C;D++){const X=Y[D];if(M(X,B,D,F)===!0){const nt=X.__offset,ut=Array.isArray(X.value)?X.value:[X.value];let _t=0;for(let lt=0;lt<ut.length;lt++){const q=ut[lt],at=R(q);typeof q=="number"||typeof q=="boolean"?(X.__data[0]=q,o.bufferSubData(o.UNIFORM_BUFFER,nt+_t,X.__data)):q.isMatrix3?(X.__data[0]=q.elements[0],X.__data[1]=q.elements[1],X.__data[2]=q.elements[2],X.__data[3]=0,X.__data[4]=q.elements[3],X.__data[5]=q.elements[4],X.__data[6]=q.elements[5],X.__data[7]=0,X.__data[8]=q.elements[6],X.__data[9]=q.elements[7],X.__data[10]=q.elements[8],X.__data[11]=0):(q.toArray(X.__data,_t),_t+=at.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,nt,X.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(L,O,w,F){const B=L.value,z=O+"_"+w;if(F[z]===void 0)return typeof B=="number"||typeof B=="boolean"?F[z]=B:F[z]=B.clone(),!0;{const Y=F[z];if(typeof B=="number"||typeof B=="boolean"){if(Y!==B)return F[z]=B,!0}else if(Y.equals(B)===!1)return Y.copy(B),!0}return!1}function b(L){const O=L.uniforms;let w=0;const F=16;for(let z=0,Y=O.length;z<Y;z++){const D=Array.isArray(O[z])?O[z]:[O[z]];for(let C=0,X=D.length;C<X;C++){const nt=D[C],ut=Array.isArray(nt.value)?nt.value:[nt.value];for(let _t=0,lt=ut.length;_t<lt;_t++){const q=ut[_t],at=R(q),G=w%F,gt=G%at.boundary,vt=G+gt;w+=gt,vt!==0&&F-vt<at.storage&&(w+=F-vt),nt.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=w,w+=at.storage}}}const B=w%F;return B>0&&(w+=F-B),L.__size=w,L.__cache={},this}function R(L){const O={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(O.boundary=4,O.storage=4):L.isVector2?(O.boundary=8,O.storage=8):L.isVector3||L.isColor?(O.boundary=16,O.storage=12):L.isVector4?(O.boundary=16,O.storage=16):L.isMatrix3?(O.boundary=48,O.storage=48):L.isMatrix4?(O.boundary=64,O.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),O}function y(L){const O=L.target;O.removeEventListener("dispose",y);const w=h.indexOf(O.__bindingPointIndex);h.splice(w,1),o.deleteBuffer(u[O.id]),delete u[O.id],delete f[O.id]}function m(){for(const L in u)o.deleteBuffer(u[L]);h=[],u={},f={}}return{bind:v,update:g,dispose:m}}class mC{constructor(e={}){const{canvas:i=jE(),context:s=null,depth:u=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:v=!0,preserveDrawingBuffer:g=!1,powerPreference:S="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),R=new Int32Array(4);let y=null,m=null;const L=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=lr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const w=this;let F=!1;this._outputColorSpace=yi;let B=0,z=0,Y=null,D=-1,C=null;const X=new sn,nt=new sn;let ut=null;const _t=new Se(0);let lt=0,q=i.width,at=i.height,G=1,gt=null,vt=null;const Ft=new sn(0,0,q,at),ae=new sn(0,0,q,at);let _e=!1;const I=new Pp;let ct=!1,Q=!1;const et=new on,Mt=new rt,Lt=new sn,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Et=!1;function Yt(){return Y===null?G:1}let P=s;function Pe(A,Z){return i.getContext(A,Z)}try{const A={alpha:!0,depth:u,stencil:f,antialias:d,premultipliedAlpha:v,preserveDrawingBuffer:g,powerPreference:S,failIfMajorPerformanceCaveat:p};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ap}`),i.addEventListener("webglcontextlost",Nt,!1),i.addEventListener("webglcontextrestored",kt,!1),i.addEventListener("webglcontextcreationerror",Tt,!1),P===null){const Z="webgl2";if(P=Pe(Z,A),P===null)throw Pe(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let xt,Xt,wt,ne,Gt,oe,Ye,We,U,T,tt,pt,yt,ht,qt,Dt,Kt,Jt,At,zt,re,Qt,Pt,ce;function V(){xt=new bA(P),xt.init(),Qt=new oC(P,xt),Xt=new vA(P,xt,e,Qt),wt=new rC(P,xt),Xt.reversedDepthBuffer&&x&&wt.buffers.depth.setReversed(!0),ne=new CA(P),Gt=new qR,oe=new sC(P,xt,wt,Gt,Xt,Qt,ne),Ye=new xA(w),We=new TA(w),U=new OT(P),Pt=new gA(P,U),T=new AA(P,U,ne,Pt),tt=new DA(P,T,U,ne),At=new wA(P,Xt,oe),Dt=new SA(Gt),pt=new YR(w,Ye,We,xt,Xt,Pt,Dt),yt=new dC(w,Gt),ht=new jR,qt=new tC(xt),Jt=new mA(w,Ye,We,wt,tt,M,v),Kt=new iC(w,tt,Xt),ce=new pC(P,ne,Xt,wt),zt=new _A(P,xt,ne),re=new RA(P,xt,ne),ne.programs=pt.programs,w.capabilities=Xt,w.extensions=xt,w.properties=Gt,w.renderLists=ht,w.shadowMap=Kt,w.state=wt,w.info=ne}V();const Ct=new fC(w,P);this.xr=Ct,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const A=xt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=xt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(A){A!==void 0&&(G=A,this.setSize(q,at,!1))},this.getSize=function(A){return A.set(q,at)},this.setSize=function(A,Z,st=!0){if(Ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=A,at=Z,i.width=Math.floor(A*G),i.height=Math.floor(Z*G),st===!0&&(i.style.width=A+"px",i.style.height=Z+"px"),this.setViewport(0,0,A,Z)},this.getDrawingBufferSize=function(A){return A.set(q*G,at*G).floor()},this.setDrawingBufferSize=function(A,Z,st){q=A,at=Z,G=st,i.width=Math.floor(A*st),i.height=Math.floor(Z*st),this.setViewport(0,0,A,Z)},this.getCurrentViewport=function(A){return A.copy(X)},this.getViewport=function(A){return A.copy(Ft)},this.setViewport=function(A,Z,st,ot){A.isVector4?Ft.set(A.x,A.y,A.z,A.w):Ft.set(A,Z,st,ot),wt.viewport(X.copy(Ft).multiplyScalar(G).round())},this.getScissor=function(A){return A.copy(ae)},this.setScissor=function(A,Z,st,ot){A.isVector4?ae.set(A.x,A.y,A.z,A.w):ae.set(A,Z,st,ot),wt.scissor(nt.copy(ae).multiplyScalar(G).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(A){wt.setScissorTest(_e=A)},this.setOpaqueSort=function(A){gt=A},this.setTransparentSort=function(A){vt=A},this.getClearColor=function(A){return A.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(A=!0,Z=!0,st=!0){let ot=0;if(A){let K=!1;if(Y!==null){const bt=Y.texture.format;K=bt===Np||bt===Up||bt===Dp}if(K){const bt=Y.texture.type,It=bt===$i||bt===Wr||bt===dl||bt===pl||bt===Cp||bt===wp,Ht=Jt.getClearColor(),Ut=Jt.getClearAlpha(),Wt=Ht.r,ie=Ht.g,te=Ht.b;It?(b[0]=Wt,b[1]=ie,b[2]=te,b[3]=Ut,P.clearBufferuiv(P.COLOR,0,b)):(R[0]=Wt,R[1]=ie,R[2]=te,R[3]=Ut,P.clearBufferiv(P.COLOR,0,R))}else ot|=P.COLOR_BUFFER_BIT}Z&&(ot|=P.DEPTH_BUFFER_BIT),st&&(ot|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(ot)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Nt,!1),i.removeEventListener("webglcontextrestored",kt,!1),i.removeEventListener("webglcontextcreationerror",Tt,!1),Jt.dispose(),ht.dispose(),qt.dispose(),Gt.dispose(),Ye.dispose(),We.dispose(),tt.dispose(),Pt.dispose(),ce.dispose(),pt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",mn),Ct.removeEventListener("sessionend",Un),na.stop()};function Nt(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),F=!0}function kt(){console.log("THREE.WebGLRenderer: Context Restored."),F=!1;const A=ne.autoReset,Z=Kt.enabled,st=Kt.autoUpdate,ot=Kt.needsUpdate,K=Kt.type;V(),ne.autoReset=A,Kt.enabled=Z,Kt.autoUpdate=st,Kt.needsUpdate=ot,Kt.type=K}function Tt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function St(A){const Z=A.target;Z.removeEventListener("dispose",St),Zt(Z)}function Zt(A){ue(A),Gt.remove(A)}function ue(A){const Z=Gt.get(A).programs;Z!==void 0&&(Z.forEach(function(st){pt.releaseProgram(st)}),A.isShaderMaterial&&pt.releaseShaderCache(A))}this.renderBufferDirect=function(A,Z,st,ot,K,bt){Z===null&&(Z=Rt);const It=K.isMesh&&K.matrixWorld.determinant()<0,Ht=El(A,Z,st,ot,K);wt.setMaterial(ot,It);let Ut=st.index,Wt=1;if(ot.wireframe===!0){if(Ut=T.getWireframeAttribute(st),Ut===void 0)return;Wt=2}const ie=st.drawRange,te=st.attributes.position;let ve=ie.start*Wt,Ie=(ie.start+ie.count)*Wt;bt!==null&&(ve=Math.max(ve,bt.start*Wt),Ie=Math.min(Ie,(bt.start+bt.count)*Wt)),Ut!==null?(ve=Math.max(ve,0),Ie=Math.min(Ie,Ut.count)):te!=null&&(ve=Math.max(ve,0),Ie=Math.min(Ie,te.count));const Qe=Ie-ve;if(Qe<0||Qe===1/0)return;Pt.setup(K,ot,Ht,st,Ut);let Ne,Ce=zt;if(Ut!==null&&(Ne=U.get(Ut),Ce=re,Ce.setIndex(Ne)),K.isMesh)ot.wireframe===!0?(wt.setLineWidth(ot.wireframeLinewidth*Yt()),Ce.setMode(P.LINES)):Ce.setMode(P.TRIANGLES);else if(K.isLine){let ee=ot.linewidth;ee===void 0&&(ee=1),wt.setLineWidth(ee*Yt()),K.isLineSegments?Ce.setMode(P.LINES):K.isLineLoop?Ce.setMode(P.LINE_LOOP):Ce.setMode(P.LINE_STRIP)}else K.isPoints?Ce.setMode(P.POINTS):K.isSprite&&Ce.setMode(P.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)vl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ce.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))Ce.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const ee=K._multiDrawStarts,Le=K._multiDrawCounts,me=K._multiDrawCount,gn=Ut?U.get(Ut).bytesPerElement:1,Jn=Gt.get(ot).currentProgram.getUniforms();for(let we=0;we<me;we++)Jn.setValue(P,"_gl_DrawID",we),Ce.render(ee[we]/gn,Le[we])}else if(K.isInstancedMesh)Ce.renderInstances(ve,Qe,K.count);else if(st.isInstancedBufferGeometry){const ee=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,Le=Math.min(st.instanceCount,ee);Ce.renderInstances(ve,Qe,Le)}else Ce.render(ve,Qe)};function Ve(A,Z,st){A.transparent===!0&&A.side===Zi&&A.forceSinglePass===!1?(A.side=Zn,A.needsUpdate=!0,ci(A,Z,st),A.side=ur,A.needsUpdate=!0,ci(A,Z,st),A.side=Zi):ci(A,Z,st)}this.compile=function(A,Z,st=null){st===null&&(st=A),m=qt.get(st),m.init(Z),O.push(m),st.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),A!==st&&A.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(m.pushLight(K),K.castShadow&&m.pushShadow(K))}),m.setupLights();const ot=new Set;return A.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const bt=K.material;if(bt)if(Array.isArray(bt))for(let It=0;It<bt.length;It++){const Ht=bt[It];Ve(Ht,st,K),ot.add(Ht)}else Ve(bt,st,K),ot.add(bt)}),m=O.pop(),ot},this.compileAsync=function(A,Z,st=null){const ot=this.compile(A,Z,st);return new Promise(K=>{function bt(){if(ot.forEach(function(It){Gt.get(It).currentProgram.isReady()&&ot.delete(It)}),ot.size===0){K(A);return}setTimeout(bt,10)}xt.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Me=null;function tn(A){Me&&Me(A)}function mn(){na.stop()}function Un(){na.start()}const na=new LS;na.setAnimationLoop(tn),typeof self<"u"&&na.setContext(self),this.setAnimationLoop=function(A){Me=A,Ct.setAnimationLoop(A),A===null?na.stop():na.start()},Ct.addEventListener("sessionstart",mn),Ct.addEventListener("sessionend",Un),this.render=function(A,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(Z),Z=Ct.getCamera()),A.isScene===!0&&A.onBeforeRender(w,A,Z,Y),m=qt.get(A,O.length),m.init(Z),O.push(m),et.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),I.setFromProjectionMatrix(et,Qi,Z.reversedDepth),Q=this.localClippingEnabled,ct=Dt.init(this.clippingPlanes,Q),y=ht.get(A,L.length),y.init(),L.push(y),Ct.enabled===!0&&Ct.isPresenting===!0){const bt=w.xr.getDepthSensingMesh();bt!==null&&ho(bt,Z,-1/0,w.sortObjects)}ho(A,Z,0,w.sortObjects),y.finish(),w.sortObjects===!0&&y.sort(gt,vt),Et=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,Et&&Jt.addToRenderList(y,A),this.info.render.frame++,ct===!0&&Dt.beginShadows();const st=m.state.shadowsArray;Kt.render(st,A,Z),ct===!0&&Dt.endShadows(),this.info.autoReset===!0&&this.info.reset();const ot=y.opaque,K=y.transmissive;if(m.setupLights(),Z.isArrayCamera){const bt=Z.cameras;if(K.length>0)for(let It=0,Ht=bt.length;It<Ht;It++){const Ut=bt[It];cr(ot,K,A,Ut)}Et&&Jt.render(A);for(let It=0,Ht=bt.length;It<Ht;It++){const Ut=bt[It];Ml(y,A,Ut,Ut.viewport)}}else K.length>0&&cr(ot,K,A,Z),Et&&Jt.render(A),Ml(y,A,Z);Y!==null&&z===0&&(oe.updateMultisampleRenderTarget(Y),oe.updateRenderTargetMipmap(Y)),A.isScene===!0&&A.onAfterRender(w,A,Z),Pt.resetDefaultState(),D=-1,C=null,O.pop(),O.length>0?(m=O[O.length-1],ct===!0&&Dt.setGlobalState(w.clippingPlanes,m.state.camera)):m=null,L.pop(),L.length>0?y=L[L.length-1]:y=null};function ho(A,Z,st,ot){if(A.visible===!1)return;if(A.layers.test(Z.layers)){if(A.isGroup)st=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(Z);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||I.intersectsSprite(A)){ot&&Lt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(et);const It=tt.update(A),Ht=A.material;Ht.visible&&y.push(A,It,Ht,st,Lt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||I.intersectsObject(A))){const It=tt.update(A),Ht=A.material;if(ot&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Lt.copy(A.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),Lt.copy(It.boundingSphere.center)),Lt.applyMatrix4(A.matrixWorld).applyMatrix4(et)),Array.isArray(Ht)){const Ut=It.groups;for(let Wt=0,ie=Ut.length;Wt<ie;Wt++){const te=Ut[Wt],ve=Ht[te.materialIndex];ve&&ve.visible&&y.push(A,It,ve,st,Lt.z,te)}}else Ht.visible&&y.push(A,It,Ht,st,Lt.z,null)}}const bt=A.children;for(let It=0,Ht=bt.length;It<Ht;It++)ho(bt[It],Z,st,ot)}function Ml(A,Z,st,ot){const K=A.opaque,bt=A.transmissive,It=A.transparent;m.setupLightsView(st),ct===!0&&Dt.setGlobalState(w.clippingPlanes,st),ot&&wt.viewport(X.copy(ot)),K.length>0&&ia(K,Z,st),bt.length>0&&ia(bt,Z,st),It.length>0&&ia(It,Z,st),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function cr(A,Z,st,ot){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ot.id]===void 0&&(m.state.transmissionRenderTarget[ot.id]=new Zr(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?Sl:$i,minFilter:Yr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ue.workingColorSpace}));const bt=m.state.transmissionRenderTarget[ot.id],It=ot.viewport||X;bt.setSize(It.z*w.transmissionResolutionScale,It.w*w.transmissionResolutionScale);const Ht=w.getRenderTarget(),Ut=w.getActiveCubeFace(),Wt=w.getActiveMipmapLevel();w.setRenderTarget(bt),w.getClearColor(_t),lt=w.getClearAlpha(),lt<1&&w.setClearColor(16777215,.5),w.clear(),Et&&Jt.render(st);const ie=w.toneMapping;w.toneMapping=lr;const te=ot.viewport;if(ot.viewport!==void 0&&(ot.viewport=void 0),m.setupLightsView(ot),ct===!0&&Dt.setGlobalState(w.clippingPlanes,ot),ia(A,st,ot),oe.updateMultisampleRenderTarget(bt),oe.updateRenderTargetMipmap(bt),xt.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let Ie=0,Qe=Z.length;Ie<Qe;Ie++){const Ne=Z[Ie],Ce=Ne.object,ee=Ne.geometry,Le=Ne.material,me=Ne.group;if(Le.side===Zi&&Ce.layers.test(ot.layers)){const gn=Le.side;Le.side=Zn,Le.needsUpdate=!0,fr(Ce,st,ot,ee,Le,me),Le.side=gn,Le.needsUpdate=!0,ve=!0}}ve===!0&&(oe.updateMultisampleRenderTarget(bt),oe.updateRenderTargetMipmap(bt))}w.setRenderTarget(Ht,Ut,Wt),w.setClearColor(_t,lt),te!==void 0&&(ot.viewport=te),w.toneMapping=ie}function ia(A,Z,st){const ot=Z.isScene===!0?Z.overrideMaterial:null;for(let K=0,bt=A.length;K<bt;K++){const It=A[K],Ht=It.object,Ut=It.geometry,Wt=It.group;let ie=It.material;ie.allowOverride===!0&&ot!==null&&(ie=ot),Ht.layers.test(st.layers)&&fr(Ht,Z,st,Ut,ie,Wt)}}function fr(A,Z,st,ot,K,bt){A.onBeforeRender(w,Z,st,ot,K,bt),A.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),K.onBeforeRender(w,Z,st,ot,A,bt),K.transparent===!0&&K.side===Zi&&K.forceSinglePass===!1?(K.side=Zn,K.needsUpdate=!0,w.renderBufferDirect(st,Z,ot,K,A,bt),K.side=ur,K.needsUpdate=!0,w.renderBufferDirect(st,Z,ot,K,A,bt),K.side=Zi):w.renderBufferDirect(st,Z,ot,K,A,bt),A.onAfterRender(w,Z,st,ot,K,bt)}function ci(A,Z,st){Z.isScene!==!0&&(Z=Rt);const ot=Gt.get(A),K=m.state.lights,bt=m.state.shadowsArray,It=K.state.version,Ht=pt.getParameters(A,K.state,bt,Z,st),Ut=pt.getProgramCacheKey(Ht);let Wt=ot.programs;ot.environment=A.isMeshStandardMaterial?Z.environment:null,ot.fog=Z.fog,ot.envMap=(A.isMeshStandardMaterial?We:Ye).get(A.envMap||ot.environment),ot.envMapRotation=ot.environment!==null&&A.envMap===null?Z.environmentRotation:A.envMapRotation,Wt===void 0&&(A.addEventListener("dispose",St),Wt=new Map,ot.programs=Wt);let ie=Wt.get(Ut);if(ie!==void 0){if(ot.currentProgram===ie&&ot.lightsStateVersion===It)return Aa(A,Ht),ie}else Ht.uniforms=pt.getUniforms(A),A.onBeforeCompile(Ht,w),ie=pt.acquireProgram(Ht,Ut),Wt.set(Ut,ie),ot.uniforms=Ht.uniforms;const te=ot.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(te.clippingPlanes=Dt.uniform),Aa(A,Ht),ot.needsLights=Tl(A),ot.lightsStateVersion=It,ot.needsLights&&(te.ambientLightColor.value=K.state.ambient,te.lightProbe.value=K.state.probe,te.directionalLights.value=K.state.directional,te.directionalLightShadows.value=K.state.directionalShadow,te.spotLights.value=K.state.spot,te.spotLightShadows.value=K.state.spotShadow,te.rectAreaLights.value=K.state.rectArea,te.ltc_1.value=K.state.rectAreaLTC1,te.ltc_2.value=K.state.rectAreaLTC2,te.pointLights.value=K.state.point,te.pointLightShadows.value=K.state.pointShadow,te.hemisphereLights.value=K.state.hemi,te.directionalShadowMap.value=K.state.directionalShadowMap,te.directionalShadowMatrix.value=K.state.directionalShadowMatrix,te.spotShadowMap.value=K.state.spotShadowMap,te.spotLightMatrix.value=K.state.spotLightMatrix,te.spotLightMap.value=K.state.spotLightMap,te.pointShadowMap.value=K.state.pointShadowMap,te.pointShadowMatrix.value=K.state.pointShadowMatrix),ot.currentProgram=ie,ot.uniformsList=null,ie}function hr(A){if(A.uniformsList===null){const Z=A.currentProgram.getUniforms();A.uniformsList=vc.seqWithValue(Z.seq,A.uniforms)}return A.uniformsList}function Aa(A,Z){const st=Gt.get(A);st.outputColorSpace=Z.outputColorSpace,st.batching=Z.batching,st.batchingColor=Z.batchingColor,st.instancing=Z.instancing,st.instancingColor=Z.instancingColor,st.instancingMorph=Z.instancingMorph,st.skinning=Z.skinning,st.morphTargets=Z.morphTargets,st.morphNormals=Z.morphNormals,st.morphColors=Z.morphColors,st.morphTargetsCount=Z.morphTargetsCount,st.numClippingPlanes=Z.numClippingPlanes,st.numIntersection=Z.numClipIntersection,st.vertexAlphas=Z.vertexAlphas,st.vertexTangents=Z.vertexTangents,st.toneMapping=Z.toneMapping}function El(A,Z,st,ot,K){Z.isScene!==!0&&(Z=Rt),oe.resetTextureUnits();const bt=Z.fog,It=ot.isMeshStandardMaterial?Z.environment:null,Ht=Y===null?w.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:so,Ut=(ot.isMeshStandardMaterial?We:Ye).get(ot.envMap||It),Wt=ot.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,ie=!!st.attributes.tangent&&(!!ot.normalMap||ot.anisotropy>0),te=!!st.morphAttributes.position,ve=!!st.morphAttributes.normal,Ie=!!st.morphAttributes.color;let Qe=lr;ot.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Qe=w.toneMapping);const Ne=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,Ce=Ne!==void 0?Ne.length:0,ee=Gt.get(ot),Le=m.state.lights;if(ct===!0&&(Q===!0||A!==C)){const nn=A===C&&ot.id===D;Dt.setState(ot,A,nn)}let me=!1;ot.version===ee.__version?(ee.needsLights&&ee.lightsStateVersion!==Le.state.version||ee.outputColorSpace!==Ht||K.isBatchedMesh&&ee.batching===!1||!K.isBatchedMesh&&ee.batching===!0||K.isBatchedMesh&&ee.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&ee.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&ee.instancing===!1||!K.isInstancedMesh&&ee.instancing===!0||K.isSkinnedMesh&&ee.skinning===!1||!K.isSkinnedMesh&&ee.skinning===!0||K.isInstancedMesh&&ee.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&ee.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&ee.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&ee.instancingMorph===!1&&K.morphTexture!==null||ee.envMap!==Ut||ot.fog===!0&&ee.fog!==bt||ee.numClippingPlanes!==void 0&&(ee.numClippingPlanes!==Dt.numPlanes||ee.numIntersection!==Dt.numIntersection)||ee.vertexAlphas!==Wt||ee.vertexTangents!==ie||ee.morphTargets!==te||ee.morphNormals!==ve||ee.morphColors!==Ie||ee.toneMapping!==Qe||ee.morphTargetsCount!==Ce)&&(me=!0):(me=!0,ee.__version=ot.version);let gn=ee.currentProgram;me===!0&&(gn=ci(ot,Z,K));let Jn=!1,we=!1,Ra=!1;const je=gn.getUniforms(),Pn=ee.uniforms;if(wt.useProgram(gn.program)&&(Jn=!0,we=!0,Ra=!0),ot.id!==D&&(D=ot.id,we=!0),Jn||C!==A){wt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),je.setValue(P,"projectionMatrix",A.projectionMatrix),je.setValue(P,"viewMatrix",A.matrixWorldInverse);const Nn=je.map.cameraPosition;Nn!==void 0&&Nn.setValue(P,Mt.setFromMatrixPosition(A.matrixWorld)),Xt.logarithmicDepthBuffer&&je.setValue(P,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ot.isMeshPhongMaterial||ot.isMeshToonMaterial||ot.isMeshLambertMaterial||ot.isMeshBasicMaterial||ot.isMeshStandardMaterial||ot.isShaderMaterial)&&je.setValue(P,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,we=!0,Ra=!0)}if(K.isSkinnedMesh){je.setOptional(P,K,"bindMatrix"),je.setOptional(P,K,"bindMatrixInverse");const nn=K.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),je.setValue(P,"boneTexture",nn.boneTexture,oe))}K.isBatchedMesh&&(je.setOptional(P,K,"batchingTexture"),je.setValue(P,"batchingTexture",K._matricesTexture,oe),je.setOptional(P,K,"batchingIdTexture"),je.setValue(P,"batchingIdTexture",K._indirectTexture,oe),je.setOptional(P,K,"batchingColorTexture"),K._colorsTexture!==null&&je.setValue(P,"batchingColorTexture",K._colorsTexture,oe));const un=st.morphAttributes;if((un.position!==void 0||un.normal!==void 0||un.color!==void 0)&&At.update(K,st,gn),(we||ee.receiveShadow!==K.receiveShadow)&&(ee.receiveShadow=K.receiveShadow,je.setValue(P,"receiveShadow",K.receiveShadow)),ot.isMeshGouraudMaterial&&ot.envMap!==null&&(Pn.envMap.value=Ut,Pn.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),ot.isMeshStandardMaterial&&ot.envMap===null&&Z.environment!==null&&(Pn.envMapIntensity.value=Z.environmentIntensity),we&&(je.setValue(P,"toneMappingExposure",w.toneMappingExposure),ee.needsLights&&Ac(Pn,Ra),bt&&ot.fog===!0&&yt.refreshFogUniforms(Pn,bt),yt.refreshMaterialUniforms(Pn,ot,G,at,m.state.transmissionRenderTarget[A.id]),vc.upload(P,hr(ee),Pn,oe)),ot.isShaderMaterial&&ot.uniformsNeedUpdate===!0&&(vc.upload(P,hr(ee),Pn,oe),ot.uniformsNeedUpdate=!1),ot.isSpriteMaterial&&je.setValue(P,"center",K.center),je.setValue(P,"modelViewMatrix",K.modelViewMatrix),je.setValue(P,"normalMatrix",K.normalMatrix),je.setValue(P,"modelMatrix",K.matrixWorld),ot.isShaderMaterial||ot.isRawShaderMaterial){const nn=ot.uniformsGroups;for(let Nn=0,Qr=nn.length;Nn<Qr;Nn++){const Pi=nn[Nn];ce.update(Pi,gn),ce.bind(Pi,gn)}}return gn}function Ac(A,Z){A.ambientLightColor.needsUpdate=Z,A.lightProbe.needsUpdate=Z,A.directionalLights.needsUpdate=Z,A.directionalLightShadows.needsUpdate=Z,A.pointLights.needsUpdate=Z,A.pointLightShadows.needsUpdate=Z,A.spotLights.needsUpdate=Z,A.spotLightShadows.needsUpdate=Z,A.rectAreaLights.needsUpdate=Z,A.hemisphereLights.needsUpdate=Z}function Tl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,Z,st){const ot=Gt.get(A);ot.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ot.__autoAllocateDepthBuffer===!1&&(ot.__useRenderToTexture=!1),Gt.get(A.texture).__webglTexture=Z,Gt.get(A.depthTexture).__webglTexture=ot.__autoAllocateDepthBuffer?void 0:st,ot.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,Z){const st=Gt.get(A);st.__webglFramebuffer=Z,st.__useDefaultFramebuffer=Z===void 0};const po=P.createFramebuffer();this.setRenderTarget=function(A,Z=0,st=0){Y=A,B=Z,z=st;let ot=!0,K=null,bt=!1,It=!1;if(A){const Ut=Gt.get(A);if(Ut.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(P.FRAMEBUFFER,null),ot=!1;else if(Ut.__webglFramebuffer===void 0)oe.setupRenderTarget(A);else if(Ut.__hasExternalTextures)oe.rebindTextures(A,Gt.get(A.texture).__webglTexture,Gt.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const te=A.depthTexture;if(Ut.__boundDepthTexture!==te){if(te!==null&&Gt.has(te)&&(A.width!==te.image.width||A.height!==te.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(A)}}const Wt=A.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(It=!0);const ie=Gt.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ie[Z])?K=ie[Z][st]:K=ie[Z],bt=!0):A.samples>0&&oe.useMultisampledRTT(A)===!1?K=Gt.get(A).__webglMultisampledFramebuffer:Array.isArray(ie)?K=ie[st]:K=ie,X.copy(A.viewport),nt.copy(A.scissor),ut=A.scissorTest}else X.copy(Ft).multiplyScalar(G).floor(),nt.copy(ae).multiplyScalar(G).floor(),ut=_e;if(st!==0&&(K=po),wt.bindFramebuffer(P.FRAMEBUFFER,K)&&ot&&wt.drawBuffers(A,K),wt.viewport(X),wt.scissor(nt),wt.setScissorTest(ut),bt){const Ut=Gt.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ut.__webglTexture,st)}else if(It){const Ut=Z;for(let Wt=0;Wt<A.textures.length;Wt++){const ie=Gt.get(A.textures[Wt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Wt,ie.__webglTexture,st,Ut)}}else if(A!==null&&st!==0){const Ut=Gt.get(A.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,Ut.__webglTexture,st)}D=-1},this.readRenderTargetPixels=function(A,Z,st,ot,K,bt,It,Ht=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ut=Gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&It!==void 0&&(Ut=Ut[It]),Ut){wt.bindFramebuffer(P.FRAMEBUFFER,Ut);try{const Wt=A.textures[Ht],ie=Wt.format,te=Wt.type;if(!Xt.textureFormatReadable(ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xt.textureTypeReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=A.width-ot&&st>=0&&st<=A.height-K&&(A.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ht),P.readPixels(Z,st,ot,K,Qt.convert(ie),Qt.convert(te),bt))}finally{const Wt=Y!==null?Gt.get(Y).__webglFramebuffer:null;wt.bindFramebuffer(P.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(A,Z,st,ot,K,bt,It,Ht=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ut=Gt.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&It!==void 0&&(Ut=Ut[It]),Ut)if(Z>=0&&Z<=A.width-ot&&st>=0&&st<=A.height-K){wt.bindFramebuffer(P.FRAMEBUFFER,Ut);const Wt=A.textures[Ht],ie=Wt.format,te=Wt.type;if(!Xt.textureFormatReadable(ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xt.textureTypeReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,ve),P.bufferData(P.PIXEL_PACK_BUFFER,bt.byteLength,P.STREAM_READ),A.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+Ht),P.readPixels(Z,st,ot,K,Qt.convert(ie),Qt.convert(te),0);const Ie=Y!==null?Gt.get(Y).__webglFramebuffer:null;wt.bindFramebuffer(P.FRAMEBUFFER,Ie);const Qe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await ZE(P,Qe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,ve),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,bt),P.deleteBuffer(ve),P.deleteSync(Qe),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,Z=null,st=0){const ot=Math.pow(2,-st),K=Math.floor(A.image.width*ot),bt=Math.floor(A.image.height*ot),It=Z!==null?Z.x:0,Ht=Z!==null?Z.y:0;oe.setTexture2D(A,0),P.copyTexSubImage2D(P.TEXTURE_2D,st,0,0,It,Ht,K,bt),wt.unbindTexture()};const dr=P.createFramebuffer(),Rc=P.createFramebuffer();this.copyTextureToTexture=function(A,Z,st=null,ot=null,K=0,bt=null){bt===null&&(K!==0?(vl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=K,K=0):bt=0);let It,Ht,Ut,Wt,ie,te,ve,Ie,Qe;const Ne=A.isCompressedTexture?A.mipmaps[bt]:A.image;if(st!==null)It=st.max.x-st.min.x,Ht=st.max.y-st.min.y,Ut=st.isBox3?st.max.z-st.min.z:1,Wt=st.min.x,ie=st.min.y,te=st.isBox3?st.min.z:0;else{const un=Math.pow(2,-K);It=Math.floor(Ne.width*un),Ht=Math.floor(Ne.height*un),A.isDataArrayTexture?Ut=Ne.depth:A.isData3DTexture?Ut=Math.floor(Ne.depth*un):Ut=1,Wt=0,ie=0,te=0}ot!==null?(ve=ot.x,Ie=ot.y,Qe=ot.z):(ve=0,Ie=0,Qe=0);const Ce=Qt.convert(Z.format),ee=Qt.convert(Z.type);let Le;Z.isData3DTexture?(oe.setTexture3D(Z,0),Le=P.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(oe.setTexture2DArray(Z,0),Le=P.TEXTURE_2D_ARRAY):(oe.setTexture2D(Z,0),Le=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,Z.unpackAlignment);const me=P.getParameter(P.UNPACK_ROW_LENGTH),gn=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Jn=P.getParameter(P.UNPACK_SKIP_PIXELS),we=P.getParameter(P.UNPACK_SKIP_ROWS),Ra=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ne.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ne.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Wt),P.pixelStorei(P.UNPACK_SKIP_ROWS,ie),P.pixelStorei(P.UNPACK_SKIP_IMAGES,te);const je=A.isDataArrayTexture||A.isData3DTexture,Pn=Z.isDataArrayTexture||Z.isData3DTexture;if(A.isDepthTexture){const un=Gt.get(A),nn=Gt.get(Z),Nn=Gt.get(un.__renderTarget),Qr=Gt.get(nn.__renderTarget);wt.bindFramebuffer(P.READ_FRAMEBUFFER,Nn.__webglFramebuffer),wt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Qr.__webglFramebuffer);for(let Pi=0;Pi<Ut;Pi++)je&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Gt.get(A).__webglTexture,K,te+Pi),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,Gt.get(Z).__webglTexture,bt,Qe+Pi)),P.blitFramebuffer(Wt,ie,It,Ht,ve,Ie,It,Ht,P.DEPTH_BUFFER_BIT,P.NEAREST);wt.bindFramebuffer(P.READ_FRAMEBUFFER,null),wt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(K!==0||A.isRenderTargetTexture||Gt.has(A)){const un=Gt.get(A),nn=Gt.get(Z);wt.bindFramebuffer(P.READ_FRAMEBUFFER,dr),wt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Rc);for(let Nn=0;Nn<Ut;Nn++)je?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,un.__webglTexture,K,te+Nn):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,un.__webglTexture,K),Pn?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,nn.__webglTexture,bt,Qe+Nn):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,nn.__webglTexture,bt),K!==0?P.blitFramebuffer(Wt,ie,It,Ht,ve,Ie,It,Ht,P.COLOR_BUFFER_BIT,P.NEAREST):Pn?P.copyTexSubImage3D(Le,bt,ve,Ie,Qe+Nn,Wt,ie,It,Ht):P.copyTexSubImage2D(Le,bt,ve,Ie,Wt,ie,It,Ht);wt.bindFramebuffer(P.READ_FRAMEBUFFER,null),wt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Pn?A.isDataTexture||A.isData3DTexture?P.texSubImage3D(Le,bt,ve,Ie,Qe,It,Ht,Ut,Ce,ee,Ne.data):Z.isCompressedArrayTexture?P.compressedTexSubImage3D(Le,bt,ve,Ie,Qe,It,Ht,Ut,Ce,Ne.data):P.texSubImage3D(Le,bt,ve,Ie,Qe,It,Ht,Ut,Ce,ee,Ne):A.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,bt,ve,Ie,It,Ht,Ce,ee,Ne.data):A.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,bt,ve,Ie,Ne.width,Ne.height,Ce,Ne.data):P.texSubImage2D(P.TEXTURE_2D,bt,ve,Ie,It,Ht,Ce,ee,Ne);P.pixelStorei(P.UNPACK_ROW_LENGTH,me),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,gn),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Jn),P.pixelStorei(P.UNPACK_SKIP_ROWS,we),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ra),bt===0&&Z.generateMipmaps&&P.generateMipmap(Le),wt.unbindTexture()},this.initRenderTarget=function(A){Gt.get(A).__webglFramebuffer===void 0&&oe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?oe.setTextureCube(A,0):A.isData3DTexture?oe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?oe.setTexture2DArray(A,0):oe.setTexture2D(A,0),wt.unbindTexture()},this.resetState=function(){B=0,z=0,Y=null,wt.reset(),Pt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ue._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ue._getUnpackColorSpace()}}const Qs=(o,e,i)=>Math.min(i,Math.max(e,o)),ul=(o,e,i,s)=>e+(o-e)*Math.exp(-i*s),BS=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]);class gC{constructor(){Je(this,"shipQuaternion",new jr);Je(this,"lookQuaternion",new jr);Je(this,"position",new rt);Je(this,"yaw",0);Je(this,"pitch",0);Je(this,"yawVelocity",0);Je(this,"pitchVelocity",0);Je(this,"speed",0);Je(this,"lookYaw",0);Je(this,"lookPitch",0);Je(this,"lookTargetYaw",0);Je(this,"lookTargetPitch",0);Je(this,"touchX",0);Je(this,"touchY",0);Je(this,"touchSteering",!1);Je(this,"keys",new Set);Je(this,"elapsed",0);Je(this,"lastContext","");Je(this,"euler",new zi(0,0,0,"YXZ"));Je(this,"forward",new rt)}key(e,i){BS.has(e)&&(i?this.touchSteering||this.keys.add(e):this.keys.delete(e))}steerTouch(e,i,s){this.touchSteering=s,this.keys.clear();const u=Math.hypot(e,i),f=s?Qs((u-.1)/.9,0,1):0;this.touchX=u?e/u*f:0,this.touchY=u?i/u*f:0}look(e,i,s,u){if(u.paused||u.blocked)return;const f=s?u.touchSensitivity:u.sensitivity;this.lookTargetYaw=Qs(this.lookTargetYaw-Qs(e,-.2,.2)*f*1.6*(!s&&u.invertMouseX?-1:1),-.85,.85),this.lookTargetPitch=Qs(this.lookTargetPitch-Qs(i,-.2,.2)*f*1.6*(!s&&u.invertMouseY?-1:1),-.5,.5)}reset(e=!1){this.keys.clear(),this.steerTouch(0,0,!1),e&&(this.yawVelocity=this.pitchVelocity=0,this.lookTargetYaw=this.lookYaw,this.lookTargetPitch=this.lookPitch)}step(e,i){const s=`${i.mode}/${i.paused}/${i.started}/${i.blocked}`;if(this.lastContext&&s!==this.lastContext&&this.reset(i.paused||i.blocked),this.lastContext=s,!Number.isFinite(e)||e<=0||e>.25||i.paused)return;const u=Math.min(e,.1);this.elapsed+=u;const f=i.mode==="Manual Flight"&&i.started&&!i.blocked;let h=0,d=0;if(f){h=this.touchSteering?this.touchX:Number(this.keys.has("KeyD")||this.keys.has("ArrowRight"))-Number(this.keys.has("KeyA")||this.keys.has("ArrowLeft")),d=this.touchSteering?this.touchY:Number(this.keys.has("KeyS")||this.keys.has("ArrowDown"))-Number(this.keys.has("KeyW")||this.keys.has("ArrowUp"));const m=Math.max(1,Math.hypot(h,d));h/=m,d/=m}const v=i.reduced?.45:1,g=this.touchSteering?i.touchSensitivity:i.sensitivity,S=i.started&&i.mode!=="Manual Flight"&&!i.blocked&&!i.reduced?i.motion*(i.mode==="Meditation"?.002:.006):0,p=f?-h*.22*g*v:Math.sin(this.elapsed*.055)*S,x=f?-d*.16*g*v:Math.sin(this.elapsed*.08)*S*.3,M=3,b=(1-Math.exp(-M*u))/M;this.yaw+=p*u+(this.yawVelocity-p)*b,this.pitch=Qs(this.pitch+x*u+(this.pitchVelocity-x)*b,-.75,.75),this.yawVelocity=ul(this.yawVelocity,p,M,u),this.pitchVelocity=ul(this.pitchVelocity,x,M,u),Math.abs(this.pitch)>=.75&&Math.sign(this.pitchVelocity)===Math.sign(this.pitch)&&(this.pitchVelocity=0),this.yaw=Math.atan2(Math.sin(this.yaw),Math.cos(this.yaw)),this.shipQuaternion.setFromEuler(this.euler.set(this.pitch,this.yaw,0,"YXZ")),this.lookYaw=ul(this.lookYaw,this.lookTargetYaw,6,u),this.lookPitch=ul(this.lookPitch,this.lookTargetPitch,6,u),this.lookQuaternion.setFromEuler(this.euler.set(this.lookPitch,this.lookYaw,0,"YXZ"));const R=i.started?i.speed*(i.mode==="Meditation"?.15:1)*(i.reduced?.3:1):2,y=R*u+(this.speed-R)*(1-Math.exp(-.8*u))/.8;this.speed=ul(this.speed,R,.8,u),this.forward.set(0,0,-1).applyQuaternion(this.shipQuaternion),this.position.addScaledVector(this.forward,y)}}function _C(o,e,i,s){let u=null,f=null,h="";const d=[],v=(m,L,O,w)=>{m.addEventListener(L,O,w),d.push(()=>m.removeEventListener(L,O,w))},g=()=>!s().paused&&!s().blocked&&document.visibilityState!=="hidden",S=()=>g()&&s().started&&s().mode==="Manual Flight",p=(m,L)=>{e.style.setProperty("--stick-x",`${m*34}px`),e.style.setProperty("--stick-y",`${L*34}px`)},x=()=>{const m=u;u=null,m&&o.hasPointerCapture(m.id)&&o.releasePointerCapture(m.id)},M=()=>{const m=f;f=null,i.steerTouch(0,0,!1),p(0,0),m!==null&&e.hasPointerCapture(m)&&e.releasePointerCapture(m)},b=()=>{x(),M(),i.reset(!0)};v(o,"pointerdown",(m=>{!g()||u||m.pointerType==="mouse"&&(m.button!==0||f!==null)||(m.preventDefault(),u={id:m.pointerId,type:m.pointerType,x:m.clientX,y:m.clientY},o.setPointerCapture(m.pointerId))})),v(o,"pointermove",(m=>{if((u==null?void 0:u.id)!==m.pointerId)return;if(!g()||m.pointerType==="mouse"&&!(m.buttons&1)){x();return}m.preventDefault();const L=Math.max(240,Math.min(o.clientWidth,o.clientHeight));i.look((m.clientX-u.x)/L,(m.clientY-u.y)/L,u.type!=="mouse",s()),u.x=m.clientX,u.y=m.clientY}));for(const m of["pointerup","pointercancel","lostpointercapture"])v(o,m,(L=>{L.pointerId===(u==null?void 0:u.id)&&x()}));const R=m=>{const L=e.getBoundingClientRect();let O=(m.clientX-L.left-L.width/2)/(L.width*.35),w=(m.clientY-L.top-L.height/2)/(L.height*.35);const F=Math.max(1,Math.hypot(O,w));O/=F,w/=F,i.steerTouch(O,w,!0),p(O,w)};v(e,"pointerdown",(m=>{m.pointerType==="mouse"||f!==null||!S()||(m.preventDefault(),m.stopPropagation(),(u==null?void 0:u.type)==="mouse"&&x(),f=m.pointerId,e.setPointerCapture(m.pointerId),R(m))})),v(e,"pointermove",(m=>{if(m.pointerId===f){if(!S()){M();return}m.preventDefault(),R(m)}}));for(const m of["pointerup","pointercancel","lostpointercapture"])v(e,m,(L=>{L.pointerId===f&&M()}));const y=m=>m instanceof HTMLElement&&!!m.closest('input,select,textarea,[contenteditable="true"]');return v(window,"keydown",(m=>{!BS.has(m.code)||y(m.target)||!S()||m.ctrlKey||m.metaKey||m.altKey||(m.preventDefault(),i.key(m.code,!0))})),v(window,"keyup",(m=>i.key(m.code,!1))),v(window,"blur",b),v(document,"visibilitychange",b),v(window,"resize",b),v(window,"orientationchange",b),v(o,"contextmenu",m=>m.preventDefault()),v(e,"contextmenu",m=>m.preventDefault()),{sync(){const m=s(),L=`${m.mode}/${m.paused}/${m.started}/${m.blocked}`;h&&L!==h&&(x(),M(),i.reset(m.paused||m.blocked)),h=L},dispose(){b(),d.forEach(m=>m())}}}const no=[{name:"Violet Nebula",subtitle:"THE PERSEUS ARM",color:"#ae80f0",second:"#316ea4",density:1},{name:"Stellar Ocean",subtitle:"AN ENDLESS SEA OF LIGHT",color:"#70bfe2",second:"#294276",density:.65},{name:"Golden Core",subtitle:"THE HEART OF THE GALAXY",color:"#efbd75",second:"#9f566f",density:1.4},{name:"Cosmic Clouds",subtitle:"WHERE THE STARS ARE BORN",color:"#7dcab9",second:"#7367ba",density:1.1},{name:"Deep Silence",subtitle:"FAR FROM EVERYTHING",color:"#576585",second:"#17243e",density:.16}];function vC(o,e,i,s){const u=new mC({antialias:!0,alpha:!1});u.setClearColor("#03050d"),o.appendChild(u.domElement);const f=new xT,h=new Mi(68,1,.1,2200),d=new qr;d.position.z=5,d.add(h),f.add(d);const v=new NT,g={time:{value:0},tint:{value:new Se(no[0].color)},second:{value:new Se(no[0].second)},density:{value:1}};let S=7123;const p=()=>(S=S*16807%2147483647,(S-1)/2147483646),x=24e3,M=new Float32Array(x*3),b=new Float32Array(x),R=new Float32Array(x*3);for(let G=0;G<x;G++)M[G*3]=(p()-.5)*1900,M[G*3+1]=(p()-.5)*1200,M[G*3+2]=-p()*1900,b[G]=.6+Math.pow(p(),8)*4,new Se().setHSL(.52+p()*.24,.1+p()*.4,.55+p()*.45).toArray(R,G*3);const y=new ea;y.setAttribute("position",new ui(M,3)),y.setAttribute("size",new ui(b,1)),y.setAttribute("color",new ui(R,3));const m=new wv(y,new ta({vertexColors:!0,transparent:!0,depthWrite:!1,blending:Sc,uniforms:{offset:{value:new rt}},vertexShader:"attribute float size; varying vec3 vColor; uniform vec3 offset; void main(){vColor=color; vec3 p=position-offset;p.x=mod(p.x+950.,1900.)-950.;p.y=mod(p.y+600.,1200.)-600.;p.z=mod(p.z+950.,1900.)-950.;vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;gl_PointSize=clamp(size*210./max(10.,-mv.z),.7,9.);}",fragmentShader:"varying vec3 vColor;void main(){float d=length(gl_PointCoord-.5);float a=exp(-d*d*24.);gl_FragColor=vec4(vColor,a);}"}));f.add(m);const L=new yl(1600,1e3),O=new ta({transparent:!0,depthWrite:!1,blending:Sc,side:Zi,uniforms:g,vertexShader:"varying vec2 uvv;void main(){uvv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec2 uvv;uniform float time;uniform vec3 tint,second;uniform float density;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*noise(p);p=p*2.07+3.1;a*=.5;}return v;}
 void main(){vec2 p=(uvv-.5)*vec2(3.2,2.);float f=fbm(p*3.+fbm(p*2.+time*.007)*2.);float ribbon=exp(-pow((p.y-sin(p.x*1.6)*.22+f*.4)*2.6,2.));float edge=smoothstep(.52,.12,length(uvv-.5));float a=pow(f,2.)*ribbon*edge*density;vec3 c=mix(second,tint,fbm(p*4.+5.));gl_FragColor=vec4(c*1.35,a*.7);}`}),w=new qr;for(let G=0;G<7;G++){const gt=new jn(L,O);gt.position.set((G%3-1)*160,(G%2-.5)*130,-500-G*155),gt.rotation.z=.24+G*.48,w.add(gt)}f.add(w);const F=new jn(new Ip(36,48,32),new Uv({color:"#465671",roughness:.95,metalness:.15}));F.position.set(295,-125,-720),f.add(F),f.add(new RT("#bfa2e8","#080b15",1.6));const B=new DT("#c5c9ff",3);B.position.set(-3,4,1),f.add(B);const z=new qr;d.add(z);const Y=new Uv({color:"#141c24",metalness:.7,roughness:.4}),D=new zp({color:"#80c5c4"});function C(G,gt,vt,Ft,ae,_e,I=0){const ct=new jn(new Kr(Ft,ae,_e),Y);ct.position.set(G,gt,vt),ct.rotation.z=I,z.add(ct)}C(0,-1.63,-2.1,7,.45,.5),C(-2.55,0,-2.4,.09,4,.2,-.2),C(2.55,0,-2.4,.09,4,.2,.2),C(0,1.75,-2.4,7,.12,.25);const X=new jn(new Kr(5.7,.012,.05),D);X.position.set(0,-1.405,-2.05),z.add(X);let nt=0,ut="";const _t=()=>e(),lt=_C(u.domElement,s,i,_t),q=()=>{h.aspect=o.clientWidth/o.clientHeight,h.updateProjectionMatrix(),u.setSize(o.clientWidth,o.clientHeight)};window.addEventListener("resize",q),q();const at=()=>{nt=requestAnimationFrame(at);const G=v.getDelta(),gt=G>.25?0:Math.min(G,.1),vt=e();lt.sync(),i.step(gt,vt),vt.quality!==ut&&(ut=vt.quality,u.setPixelRatio(Math.min(devicePixelRatio,ut==="High"?2:ut==="Medium"?1.4:1)),q(),y.setDrawRange(0,ut==="Low"?6e3:ut==="Medium"?14e3:x));const Ft=no[vt.region];g.tint.value.lerp(new Se(Ft.color),gt*.35),g.second.value.lerp(new Se(Ft.second),gt*.35),g.density.value=WE.damp(g.density.value,Ft.density,.5,gt),vt.paused||(g.time.value+=gt,m.material.uniforms.offset.value.copy(i.position),d.quaternion.copy(i.shipQuaternion),h.quaternion.copy(i.lookQuaternion),w.position.copy(i.position).negate(),w.position.z+=Math.sin(g.time.value*.02)*45,F.position.set(295,-125,-720).sub(i.position)),z.visible=vt.cockpit,D.color.copy(g.tint.value).multiplyScalar(vt.mode==="Meditation"?.2:.7),u.render(f,h)};return at(),()=>{cancelAnimationFrame(nt),lt.dispose(),window.removeEventListener("resize",q),f.traverse(G=>{(G instanceof jn||G instanceof wv)&&(G.geometry.dispose(),(Array.isArray(G.material)?G.material:[G.material]).forEach(vt=>vt.dispose()))}),u.dispose(),u.domElement.remove()}}class SC{constructor(){Je(this,"ctx",null);Je(this,"master");Je(this,"engine");Je(this,"music")}async start(){if(!this.ctx){const e=this.ctx=new AudioContext;this.master=e.createGain(),this.master.gain.value=0,this.master.connect(e.destination),this.engine=e.createGain(),this.music=e.createGain(),this.engine.connect(this.master),this.music.connect(this.master),[38,57,76].forEach(i=>{const s=e.createOscillator();s.type="sine",s.frequency.value=i;const u=e.createGain();u.gain.value=.09,s.connect(u).connect(this.engine),s.start()}),[130.81,196,261.63,293.66,392].forEach((i,s)=>{const u=e.createOscillator();u.frequency.value=i;const f=e.createGain();f.gain.value=.025;const h=e.createOscillator();h.frequency.value=.035+s*.009;const d=e.createGain();d.gain.value=.012,h.connect(d).connect(f.gain),u.connect(f).connect(this.music),u.start(),h.start()})}await this.ctx.resume()}set(e,i,s,u){var h,d,v;if(!this.ctx)return;const f=this.ctx.currentTime;(h=this.master)==null||h.gain.setTargetAtTime(e&&!u?.65:0,f,.4),(d=this.engine)==null||d.gain.setTargetAtTime(i,f,.2),(v=this.music)==null||v.gain.setTargetAtTime(s,f,.2)}dispose(){var e;(e=this.ctx)==null||e.close()}}function xC(){const[o,e]=Ae.useState("Autopilot"),[i,s]=Ae.useState(18),[u,f]=Ae.useState(!1),[h,d]=Ae.useState(0),[v,g]=Ae.useState("High"),[S,p]=Ae.useState(matchMedia("(prefers-reduced-motion: reduce)").matches),[x,M]=Ae.useState(.6),[b,R]=Ae.useState(!0),[y,m]=Ae.useState(!1),[L,O]=Ae.useState(!1),[w,F]=Ae.useState(""),[B,z]=Ae.useState(!1),[Y,D]=Ae.useState(.35),[C,X]=Ae.useState(.5),[nt,ut]=Ae.useState(!0),[_t,lt]=Ae.useState(""),[q,at]=Ae.useState(!1),[G,gt]=Ae.useState(1),[vt,Ft]=Ae.useState(.7),[ae,_e]=Ae.useState(!1),[I,ct]=Ae.useState(!1),Q=Ae.useRef(null),et=Ae.useRef(new gC),Mt=Ae.useRef(null),Lt=Ae.useRef(new SC),Rt=Ae.useRef({mode:o,speed:i,paused:u,region:h,quality:v,reduced:S,motion:x,cockpit:b,started:y,blocked:!!w,sensitivity:G,touchSensitivity:vt,invertMouseX:ae,invertMouseY:I});Rt.current={mode:o,speed:i,paused:u,region:h,quality:v,reduced:S,motion:x,cockpit:b,started:y,blocked:!!w,sensitivity:G,touchSensitivity:vt,invertMouseX:ae,invertMouseY:I},Ae.useEffect(()=>{try{return vC(Mt.current,()=>Rt.current,et.current,Q.current)}catch{lt("WebGL could not start. Please enable hardware acceleration and reload.")}},[]),Ae.useEffect(()=>{Lt.current.set(B,Y,C,u)},[B,Y,C,u]),Ae.useEffect(()=>{const xt=setInterval(()=>{nt&&y&&!u&&d(Xt=>(Xt+1)%5)},9e4);return()=>clearInterval(xt)},[nt,y,u]),Ae.useEffect(()=>{const xt=wt=>{wt.target instanceof HTMLElement&&wt.target.closest('input,select,textarea,[contenteditable="true"]')||(wt.key.toLowerCase()==="h"&&O(ne=>!ne),wt.code==="Space"&&!(wt.target instanceof HTMLElement&&wt.target.closest("button,a"))&&(wt.preventDefault(),f(ne=>!ne)),wt.key==="Escape"&&(O(!1),F("")))},Xt=()=>at(!!document.fullscreenElement);return window.addEventListener("keydown",xt),document.addEventListener("fullscreenchange",Xt),()=>{window.removeEventListener("keydown",xt),document.removeEventListener("fullscreenchange",Xt)}},[]);const Et=async()=>{try{await Lt.current.start(),z(xt=>!xt)}catch{lt("Audio is unavailable in this browser. The journey can continue silently.")}},Yt=()=>{m(!0),f(!1)},P=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{lt("Fullscreen is unavailable in this browser.")}},Pe=xt=>{e(xt),m(!0)};return ft.jsxs("main",{className:`${L?"hidden-ui":""} ${o==="Meditation"?"meditation":""} ${o==="Manual Flight"?"manual-flight":""} ${w||u?"controls-blocked":""}`,children:[ft.jsx("div",{className:"universe",ref:Mt}),ft.jsx("div",{className:"vignette"}),ft.jsxs("div",{className:"touch-controls ui",children:[ft.jsxs("div",{ref:Q,className:"touch-joystick",role:"group","aria-label":"Touch flight joystick",children:[ft.jsx("span",{className:"stick-cross",children:"+"}),ft.jsx("span",{className:"stick-thumb"}),ft.jsx("small",{children:"STEER"})]}),ft.jsx("span",{className:"touch-look-hint",children:"DRAG SPACE TO LOOK"})]}),ft.jsxs("header",{className:"ui",children:[ft.jsxs("a",{className:"brand",href:"#",onClick:xt=>{xt.preventDefault(),O(!1)},children:[ft.jsx(BM,{size:32}),ft.jsxs("span",{children:["COSMIC DRIFT",ft.jsx("small",{children:"A QUIETER KIND OF JOURNEY"})]})]}),ft.jsxs("nav",{children:[ft.jsx("span",{className:"live-dot"})," ALL SYSTEMS AT PEACE ",ft.jsx("span",{className:"nav-line"}),ft.jsx("button",{title:"Audio settings",onClick:()=>F(w==="audio"?"":"audio"),children:ft.jsx(rd,{size:18})}),ft.jsx("button",{title:"Settings",onClick:()=>F(w==="settings"?"":"settings"),children:ft.jsx(GM,{size:18})}),ft.jsx("button",{title:"Fullscreen",onClick:P,children:ft.jsx(nv,{size:18})})]})]}),ft.jsxs("section",{className:"intro ui",children:[ft.jsxs("div",{className:"eyebrow",children:[ft.jsx("span",{})," LEAVE THE NOISE BEHIND"]}),ft.jsxs("h1",{children:["Nowhere to be.",ft.jsx("br",{}),"Just ",ft.jsx("em",{children:"drift."})]}),ft.jsxs("p",{children:["A quiet passage through an infinite universe.",ft.jsx("br",{}),"No destination. No demands. Just you and the stars."]}),ft.jsxs("button",{className:"start",onClick:Yt,children:[y?u?"Resume journey":"Journey in progress":"Start journey",ft.jsx(zM,{size:18})]}),ft.jsxs("div",{className:"intro-note",children:[ft.jsx("span",{})," ",y?"TAKE YOUR TIME. YOU HAVE ALL OF IT.":"YOUR OWN LITTLE CORNER OF INFINITY"]})]}),ft.jsxs("aside",{className:"region-label ui",children:[ft.jsx("span",{className:"coordinate",children:"SECTOR 07 / PERSEUS"}),ft.jsx("div",{className:"region-rule"}),ft.jsx("span",{className:"eyebrow",children:"YOU ARE DRIFTING THROUGH"}),ft.jsx("h2",{children:no[h].name}),ft.jsx("p",{children:no[h].subtitle}),ft.jsxs("button",{onClick:()=>F(w==="regions"?"":"regions"),children:["Explore regions ",ft.jsx(tv,{size:14})]})]}),ft.jsxs("div",{className:"travel-marker ui",children:[ft.jsx("span",{children:"✧"}),ft.jsx("i",{}),ft.jsx("small",{children:"AN INFINITE UNIVERSE. AN UNHURRIED YOU."})]}),ft.jsxs("section",{className:"flight-deck ui",children:[ft.jsxs("div",{className:"deck-top",children:[ft.jsxs("div",{className:"deck-label",children:[ft.jsx("span",{className:"live-dot"}),u?"JOURNEY PAUSED":y?"JOURNEY ACTIVE":"READY WHEN YOU ARE"]}),ft.jsx("span",{className:"ship-name",children:"VESSEL / AETHER–01"})]}),ft.jsxs("div",{className:"deck-controls",children:[ft.jsx("div",{className:"mode-controls",children:[{name:"Autopilot",icon:PM},{name:"Manual Flight",icon:IM},{name:"Meditation",icon:XM}].map(xt=>ft.jsxs("button",{className:o===xt.name?"selected":"",onClick:()=>Pe(xt.name),children:[ft.jsx(xt.icon,{size:17}),ft.jsxs("span",{children:[xt.name,xt.name==="Meditation"?" mode":""]})]},xt.name))}),ft.jsxs("div",{className:"speed",children:[ft.jsxs("label",{htmlFor:"speed",children:["DRIFT SPEED ",ft.jsxs("span",{children:[i.toFixed(0)," ",ft.jsx("small",{children:"km/s"})]})]}),ft.jsx("input",{id:"speed",type:"range",min:"1",max:"80",value:i,onChange:xt=>s(+xt.target.value)}),ft.jsxs("div",{children:[ft.jsx("span",{children:"GENTLE"}),ft.jsx("span",{children:"SWIFT"})]})]}),ft.jsxs("div",{className:"deck-actions",children:[ft.jsx("button",{title:u?"Resume":"Pause",onClick:()=>f(xt=>!xt),children:u?ft.jsx(HM,{size:19}):ft.jsx(FM,{size:19})}),ft.jsx("button",{title:B?"Mute audio":"Enable audio",onClick:Et,children:B?ft.jsx(rd,{size:19}):ft.jsx(VM,{size:19})}),ft.jsx("button",{title:"Hide interface (H)",onClick:()=>O(!0),children:ft.jsx(ev,{size:19})})]})]})]}),ft.jsxs("footer",{className:"ui",children:[ft.jsxs("span",{children:[ft.jsx("span",{className:"key",children:"DRAG"})," TO LOOK AROUND ",ft.jsx("i",{})," ",ft.jsx("span",{className:"key",children:o==="Manual Flight"?"W A S D":"H"})," ",o==="Manual Flight"?"TO STEER":"TO HIDE INTERFACE"]}),ft.jsxs("span",{children:["BUILT FOR WANDERING ",ft.jsx("span",{className:"tiny-star",children:"✦"})]})]}),L&&ft.jsxs("button",{className:"restore",onClick:()=>O(!1),children:[ft.jsx(ev,{size:16})," Show controls · H"]}),w&&ft.jsxs("div",{className:"panel ui",children:[ft.jsxs("div",{className:"panel-head",children:[ft.jsx("span",{children:w==="regions"?"Choose your horizon":w==="audio"?"The sound of stillness":"Make space your own"}),ft.jsx("button",{title:"Close settings",onClick:()=>F(""),children:ft.jsx(iv,{size:19})})]}),w==="regions"?ft.jsxs(ft.Fragment,{children:[ft.jsx("p",{children:"Every corner of the universe has a different kind of quiet."}),no.map((xt,Xt)=>ft.jsxs("button",{className:`region-option ${h===Xt?"active":""}`,onClick:()=>d(Xt),children:[ft.jsx("span",{className:"orb",style:{background:`radial-gradient(circle at 30% 30%,${xt.color},${xt.second},#070a12)`}}),ft.jsxs("span",{children:[xt.name,ft.jsx("small",{children:xt.subtitle})]}),h===Xt?"●":ft.jsx(tv,{size:15})]},xt.name)),ft.jsxs("label",{className:"check",children:[ft.jsx("input",{type:"checkbox",checked:nt,onChange:xt=>ut(xt.target.checked)})," Automatically drift between regions · 90s"]})]}):w==="audio"?ft.jsxs(ft.Fragment,{children:[ft.jsx("p",{children:"Original ambient tones, synthesized just for this journey."}),ft.jsxs("button",{className:"sound-toggle",onClick:Et,children:[B?"Mute all audio":"Enable sound",ft.jsx(rd,{size:17})]}),ft.jsxs("label",{className:"setting",children:["Engine hum",ft.jsx("input",{"aria-label":"Engine volume",type:"range",min:"0",max:"1",step:".01",value:Y,onChange:xt=>D(+xt.target.value)})]}),ft.jsxs("label",{className:"setting",children:["Ambient music",ft.jsx("input",{"aria-label":"Music volume",type:"range",min:"0",max:"1",step:".01",value:C,onChange:xt=>X(+xt.target.value)})]})]}):ft.jsxs(ft.Fragment,{children:[ft.jsxs("label",{className:"setting",children:["Graphics quality",ft.jsx("select",{value:v,onChange:xt=>g(xt.target.value),children:["Low","Medium","High"].map(xt=>ft.jsx("option",{children:xt},xt))})]}),ft.jsxs("label",{className:"setting",children:["Steering / mouse sensitivity ",ft.jsxs("output",{children:[G.toFixed(2),"×"]}),ft.jsx("input",{"aria-label":"Steering and mouse sensitivity",type:"range",min:".25",max:"2",step:".05",value:G,onChange:xt=>gt(+xt.target.value)})]}),ft.jsxs("label",{className:"setting",children:["Touch sensitivity ",ft.jsxs("output",{children:[vt.toFixed(2),"×"]}),ft.jsx("input",{"aria-label":"Touch sensitivity",type:"range",min:".25",max:"1.5",step:".05",value:vt,onChange:xt=>Ft(+xt.target.value)})]}),ft.jsxs("label",{className:"check",children:[ft.jsx("input",{type:"checkbox",checked:ae,onChange:xt=>_e(xt.target.checked)})," Invert mouse horizontal axis"]}),ft.jsxs("label",{className:"check",children:[ft.jsx("input",{type:"checkbox",checked:I,onChange:xt=>ct(xt.target.checked)})," Invert mouse vertical axis"]}),ft.jsxs("label",{className:"setting",children:["Camera movement",ft.jsx("input",{"aria-label":"Camera movement",type:"range",min:"0",max:"1",step:".05",value:x,onChange:xt=>M(+xt.target.value)})]}),ft.jsxs("label",{className:"check",children:[ft.jsx("input",{type:"checkbox",checked:S,onChange:xt=>p(xt.target.checked)})," Reduced motion"]}),ft.jsxs("label",{className:"check",children:[ft.jsx("input",{type:"checkbox",checked:b,onChange:xt=>R(xt.target.checked)})," Show cockpit"]}),ft.jsxs("button",{className:"sound-toggle",onClick:P,children:[q?"Exit fullscreen":"Enter fullscreen",ft.jsx(nv,{size:16})]})]})]}),_t&&ft.jsxs("div",{role:"alert",className:"error",children:[_t,ft.jsx("button",{onClick:()=>lt(""),"aria-label":"Dismiss error",children:ft.jsx(iv,{size:16})})]})]})}UM.createRoot(document.getElementById("root")).render(ft.jsx(xC,{}));
