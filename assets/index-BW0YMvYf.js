var vM=Object.defineProperty;var SM=(o,e,a)=>e in o?vM(o,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):o[e]=a;var el=(o,e,a)=>SM(o,typeof e!="symbol"?e+"":e,a);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))s(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function a(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(u){if(u.ep)return;u.ep=!0;const f=a(u);fetch(u.href,f)}})();var Jh={exports:{}},nl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X0;function xM(){if(X0)return nl;X0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function a(s,u,f){var h=null;if(f!==void 0&&(h=""+f),u.key!==void 0&&(h=""+u.key),"key"in u){f={};for(var d in u)d!=="key"&&(f[d]=u[d])}else f=u;return u=f.ref,{$$typeof:o,type:s,key:h,ref:u!==void 0?u:null,props:f}}return nl.Fragment=e,nl.jsx=a,nl.jsxs=a,nl}var k0;function yM(){return k0||(k0=1,Jh.exports=xM()),Jh.exports}var mt=yM(),$h={exports:{}},le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var q0;function MM(){if(q0)return le;q0=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),p=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),M=Symbol.iterator;function b(P){return P===null||typeof P!="object"?null:(P=M&&P[M]||P["@@iterator"],typeof P=="function"?P:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,S={};function I(P,Q,B){this.props=P,this.context=Q,this.refs=S,this.updater=B||C}I.prototype.isReactComponent={},I.prototype.setState=function(P,Q){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,Q,"setState")},I.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function O(){}O.prototype=I.prototype;function D(P,Q,B){this.props=P,this.context=Q,this.refs=S,this.updater=B||C}var G=D.prototype=new O;G.constructor=D,y(G,I.prototype),G.isPureReactComponent=!0;var F=Array.isArray;function z(){}var k={H:null,A:null,T:null,S:null},w=Object.prototype.hasOwnProperty;function R(P,Q,B){var j=B.ref;return{$$typeof:o,type:P,key:Q,ref:j!==void 0?j:null,props:B}}function V(P,Q){return R(P.type,Q,P.props)}function at(P){return typeof P=="object"&&P!==null&&P.$$typeof===o}function ct(P){var Q={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(B){return Q[B]})}var gt=/\/+/g;function ut(P,Q){return typeof P=="object"&&P!==null&&P.key!=null?ct(""+P.key):Q.toString(36)}function Y(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(z,z):(P.status="pending",P.then(function(Q){P.status==="pending"&&(P.status="fulfilled",P.value=Q)},function(Q){P.status==="pending"&&(P.status="rejected",P.reason=Q)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function it(P,Q,B,j,St){var Dt=typeof P;(Dt==="undefined"||Dt==="boolean")&&(P=null);var Tt=!1;if(P===null)Tt=!0;else switch(Dt){case"bigint":case"string":case"number":Tt=!0;break;case"object":switch(P.$$typeof){case o:case e:Tt=!0;break;case v:return Tt=P._init,it(Tt(P._payload),Q,B,j,St)}}if(Tt)return St=St(P),Tt=j===""?"."+ut(P,0):j,F(St)?(B="",Tt!=null&&(B=Tt.replace(gt,"$&/")+"/"),it(St,Q,B,"",function(L){return L})):St!=null&&(at(St)&&(St=V(St,B+(St.key==null||P&&P.key===St.key?"":(""+St.key).replace(gt,"$&/")+"/")+Tt)),Q.push(St)),1;Tt=0;var Mt=j===""?".":j+":";if(F(P))for(var Xt=0;Xt<P.length;Xt++)j=P[Xt],Dt=Mt+ut(j,Xt),Tt+=it(j,Q,B,Dt,St);else if(Xt=b(P),typeof Xt=="function")for(P=Xt.call(P),Xt=0;!(j=P.next()).done;)j=j.value,Dt=Mt+ut(j,Xt++),Tt+=it(j,Q,B,Dt,St);else if(Dt==="object"){if(typeof P.then=="function")return it(Y(P),Q,B,j,St);throw Q=String(P),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return Tt}function K(P,Q,B){if(P==null)return P;var j=[],St=0;return it(P,j,"","",function(Dt){return Q.call(B,Dt,St++)}),j}function vt(P){if(P._status===-1){var Q=P._result,B=Q();B.then(function(j){(P._status===0||P._status===-1)&&(P._status=1,P._result=j,B.status===void 0&&(B.status="fulfilled",B.value=j))},function(j){(P._status===0||P._status===-1)&&(P._status=2,P._result=j,B.status===void 0&&(B.status="rejected",B.reason=j))}),P._status===-1&&(P._status=0,P._result=B)}if(P._status===1)return P._result.default;throw P._result}var xt=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function Bt(P){var Q=k.T,B={};B.types=Q!==null?Q.types:null,k.T=B;try{var j=P(),St=k.S;St!==null&&St(B,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(z,xt)}catch(Dt){xt(Dt)}finally{Q!==null&&B.types!==null&&(Q.types=B.types),k.T=Q}}function ne(P){var Q=k.T;if(Q!==null){var B=Q.types;B===null?Q.types=[P]:B.indexOf(P)===-1&&B.push(P)}else Bt(ne.bind(null,P))}var pe={map:K,forEach:function(P,Q,B){K(P,function(){Q.apply(this,arguments)},B)},count:function(P){var Q=0;return K(P,function(){Q++}),Q},toArray:function(P){return K(P,function(Q){return Q})||[]},only:function(P){if(!at(P))throw Error("React.Children.only expected to receive a single React element child.");return P}};return le.Activity=p,le.Children=pe,le.Component=I,le.Fragment=a,le.Profiler=u,le.PureComponent=D,le.StrictMode=s,le.Suspense=_,le.ViewTransition=x,le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,le.__COMPILER_RUNTIME={__proto__:null,c:function(P){return k.H.useMemoCache(P)}},le.addTransitionType=ne,le.cache=function(P){return function(){return P.apply(null,arguments)}},le.cacheSignal=function(){return null},le.cloneElement=function(P,Q,B){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var j=y({},P.props),St=P.key;if(Q!=null)for(Dt in Q.key!==void 0&&(St=""+Q.key),Q)!w.call(Q,Dt)||Dt==="key"||Dt==="__self"||Dt==="__source"||Dt==="ref"&&Q.ref===void 0||(j[Dt]=Q[Dt]);var Dt=arguments.length-2;if(Dt===1)j.children=B;else if(1<Dt){for(var Tt=Array(Dt),Mt=0;Mt<Dt;Mt++)Tt[Mt]=arguments[Mt+2];j.children=Tt}return R(P.type,St,j)},le.createContext=function(P){return P={$$typeof:h,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:f,_context:P},P},le.createElement=function(P,Q,B){var j,St={},Dt=null;if(Q!=null)for(j in Q.key!==void 0&&(Dt=""+Q.key),Q)w.call(Q,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(St[j]=Q[j]);var Tt=arguments.length-2;if(Tt===1)St.children=B;else if(1<Tt){for(var Mt=Array(Tt),Xt=0;Xt<Tt;Xt++)Mt[Xt]=arguments[Xt+2];St.children=Mt}if(P&&P.defaultProps)for(j in Tt=P.defaultProps,Tt)St[j]===void 0&&(St[j]=Tt[j]);return R(P,Dt,St)},le.createRef=function(){return{current:null}},le.forwardRef=function(P){return{$$typeof:d,render:P}},le.isValidElement=at,le.lazy=function(P){return{$$typeof:v,_payload:{_status:-1,_result:P},_init:vt}},le.memo=function(P,Q){return{$$typeof:g,type:P,compare:Q===void 0?null:Q}},le.startTransition=Bt,le.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},le.use=function(P){return k.H.use(P)},le.useActionState=function(P,Q,B){return k.H.useActionState(P,Q,B)},le.useCallback=function(P,Q){return k.H.useCallback(P,Q)},le.useContext=function(P){return k.H.useContext(P)},le.useDebugValue=function(){},le.useDeferredValue=function(P,Q){return k.H.useDeferredValue(P,Q)},le.useEffect=function(P,Q){return k.H.useEffect(P,Q)},le.useEffectEvent=function(P){return k.H.useEffectEvent(P)},le.useId=function(){return k.H.useId()},le.useImperativeHandle=function(P,Q,B){return k.H.useImperativeHandle(P,Q,B)},le.useInsertionEffect=function(P,Q){return k.H.useInsertionEffect(P,Q)},le.useLayoutEffect=function(P,Q){return k.H.useLayoutEffect(P,Q)},le.useMemo=function(P,Q){return k.H.useMemo(P,Q)},le.useOptimistic=function(P,Q){return k.H.useOptimistic(P,Q)},le.useReducer=function(P,Q,B){return k.H.useReducer(P,Q,B)},le.useRef=function(P){return k.H.useRef(P)},le.useState=function(P){return k.H.useState(P)},le.useSyncExternalStore=function(P,Q,B){return k.H.useSyncExternalStore(P,Q,B)},le.useTransition=function(){return k.H.useTransition()},le.version="19.3.1",le}var Y0;function Tp(){return Y0||(Y0=1,$h.exports=MM()),$h.exports}var He=Tp(),td={exports:{}},il={},ed={exports:{}},nd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function EM(){return W0||(W0=1,(function(o){function e(Y,it){var K=Y.length;Y.push(it);t:for(;0<K;){var vt=K-1>>>1,xt=Y[vt];if(0<u(xt,it))Y[vt]=it,Y[K]=xt,K=vt;else break t}}function a(Y){return Y.length===0?null:Y[0]}function s(Y){if(Y.length===0)return null;var it=Y[0],K=Y.pop();if(K!==it){Y[0]=K;t:for(var vt=0,xt=Y.length,Bt=xt>>>1;vt<Bt;){var ne=2*(vt+1)-1,pe=Y[ne],P=ne+1,Q=Y[P];if(0>u(pe,K))P<xt&&0>u(Q,pe)?(Y[vt]=Q,Y[P]=K,vt=P):(Y[vt]=pe,Y[ne]=K,vt=ne);else if(P<xt&&0>u(Q,K))Y[vt]=Q,Y[P]=K,vt=P;else break t}}return it}function u(Y,it){var K=Y.sortIndex-it.sortIndex;return K!==0?K:Y.id-it.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var _=[],g=[],v=1,p=null,x=3,M=!1,b=!1,C=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function D(Y){for(var it=a(g);it!==null;){if(it.callback===null)s(g);else if(it.startTime<=Y)s(g),it.sortIndex=it.expirationTime,e(_,it);else break;it=a(g)}}function G(Y){if(C=!1,D(Y),!b)if(a(_)!==null)b=!0,F||(F=!0,at());else{var it=a(g);it!==null&&ut(G,it.startTime-Y)}}var F=!1,z=-1,k=5,w=-1;function R(){return y?!0:!(o.unstable_now()-w<k)}function V(){if(y=!1,F){var Y=o.unstable_now();w=Y;var it=!0;try{t:{b=!1,C&&(C=!1,I(z),z=-1),M=!0;var K=x;try{e:{for(D(Y),p=a(_);p!==null&&!(p.expirationTime>Y&&R());){var vt=p.callback;if(typeof vt=="function"){p.callback=null,x=p.priorityLevel;var xt=vt(p.expirationTime<=Y);if(Y=o.unstable_now(),typeof xt=="function"){p.callback=xt,D(Y),it=!0;break e}p===a(_)&&s(_),D(Y)}else s(_);p=a(_)}if(p!==null)it=!0;else{var Bt=a(g);Bt!==null&&ut(G,Bt.startTime-Y),it=!1}}break t}finally{p=null,x=K,M=!1}it=void 0}}finally{it?at():F=!1}}}var at;if(typeof O=="function")at=function(){O(V)};else if(typeof MessageChannel<"u"){var ct=new MessageChannel,gt=ct.port2;ct.port1.onmessage=V,at=function(){gt.postMessage(null)}}else at=function(){S(V,0)};function ut(Y,it){z=S(function(){Y(o.unstable_now())},it)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(Y){Y.callback=null},o.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):k=0<Y?Math.floor(1e3/Y):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(Y){switch(x){case 1:case 2:case 3:var it=3;break;default:it=x}var K=x;x=it;try{return Y()}finally{x=K}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(Y,it){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var K=x;x=Y;try{return it()}finally{x=K}},o.unstable_scheduleCallback=function(Y,it,K){var vt=o.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?vt+K:vt):K=vt,Y){case 1:var xt=-1;break;case 2:xt=250;break;case 5:xt=1073741823;break;case 4:xt=1e4;break;default:xt=5e3}return xt=K+xt,Y={id:v++,callback:it,priorityLevel:Y,startTime:K,expirationTime:xt,sortIndex:-1},K>vt?(Y.sortIndex=K,e(g,Y),a(_)===null&&Y===a(g)&&(C?(I(z),z=-1):C=!0,ut(G,K-vt))):(Y.sortIndex=xt,e(_,Y),b||M||(b=!0,F||(F=!0,at()))),Y},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(Y){var it=x;return function(){var K=x;x=it;try{return Y.apply(this,arguments)}finally{x=K}}}})(nd)),nd}var j0;function TM(){return j0||(j0=1,ed.exports=EM()),ed.exports}var id={exports:{}},wn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z0;function bM(){if(Z0)return wn;Z0=1;var o=Tp();function e(v){var p="https://react.dev/errors/"+v;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+v+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var s={d:{f:a,r:function(){throw Error(e(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},u=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,p,x){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:M==null?null:M===h?h:""+M,children:v,containerInfo:p,implementation:x}}var _=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(v,p){if(v==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,wn.browser=function(v){return{$$typeof:f,_reason:v}},wn.createPortal=function(v,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return d(v,p,null,x)},wn.flushSync=function(v){var p=_.T,x=s.p;try{if(_.T=null,s.p=2,v)return v()}finally{_.T=p,s.p=x,s.d.f()}},wn.preconnect=function(v,p){typeof v=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(v,p))},wn.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},wn.preinit=function(v,p){if(typeof v=="string"&&p&&typeof p.as=="string"){var x=p.as,M=g(x,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,C=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?s.d.S(v,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:M,integrity:b,fetchPriority:C}):x==="script"&&s.d.X(v,{crossOrigin:M,integrity:b,fetchPriority:C,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(v,p){if(typeof v=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=g(p.as,p.crossOrigin);s.d.M(v,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}}else p==null&&s.d.M(v)},wn.preload=function(v,p){if(typeof v=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,M=g(x,p.crossOrigin);s.d.L(v,x,{crossOrigin:M,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(v,p){if(typeof v=="string")if(p){var x=g(p.as,p.crossOrigin);s.d.m(v,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0})}else s.d.m(v)},wn.requestFormReset=function(v){s.d.r(v)},wn.unstable_batchedUpdates=function(v,p){return v(p)},wn.useFormState=function(v,p,x){return _.H.useFormState(v,p,x)},wn.useFormStatus=function(){return _.H.useHostTransitionStatus()},wn.version="19.3.1",wn}var K0;function AM(){if(K0)return id.exports;K0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),id.exports=bM(),id.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q0;function RM(){if(Q0)return il;Q0=1;var o=TM(),e=Tp(),a=AM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,i=n;i&&!i.alternate;)n=i,(n.flags&4098)!==0&&(t=n.return),i=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function _(t){if(f(t)!==t)throw Error(s(188))}function g(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var i=t,r=n;;){var l=i.return;if(l===null)break;var c=l.alternate;if(c===null){if(r=l.return,r!==null){i=r;continue}break}if(l.child===c.child){for(c=l.child;c;){if(c===i)return _(l),t;if(c===r)return _(l),n;c=c.sibling}throw Error(s(188))}if(i.return!==r.return)i=l,r=c;else{for(var m=!1,E=l.child;E;){if(E===i){m=!0,i=l,r=c;break}if(E===r){m=!0,r=l,i=c;break}E=E.sibling}if(!m){for(E=c.child;E;){if(E===i){m=!0,i=c,r=l;break}if(E===r){m=!0,r=c,i=l;break}E=E.sibling}if(!m)throw Error(s(189))}}if(i.alternate!==r)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function p(t,n,i,r,l,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&i(t,r,l,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&p(t.child,n,i,r,l,c))return!0;t=t.sibling}return!1}function x(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function b(t){var n=[null,null],i=x(t);return i===null||C(n,t,i.child,{foundSelf:!1}),n}function C(t,n,i,r){for(;i!==null;){if(i===n)r.foundSelf=!0;else if(i.tag===5||i.tag===27||i.tag===6){if(r.foundSelf)return t[1]=i,!0;t[0]=i}else if((i.tag!==22||i.memoizedState===null)&&C(t,n,i.child,r))return!0;i=i.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,I=null;function O(t,n,i){return t===i?!0:t===n?(S=t,!0):!1}function D(t,n,i){return t===i?(I=t,!1):t===n?(I!==null&&(S=t),!0):!1}function G(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function F(t,n,i){for(var r=0,l=t;l;l=i(l))r++;l=0;for(var c=n;c;c=i(c))l++;for(;0<r-l;)t=i(t),r--;for(;0<l-r;)n=i(n),l--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=i(t),n=i(n)}return null}var z=Object.assign,k=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),at=Symbol.for("react.strict_mode"),ct=Symbol.for("react.profiler"),gt=Symbol.for("react.consumer"),ut=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),it=Symbol.for("react.suspense"),K=Symbol.for("react.suspense_list"),vt=Symbol.for("react.memo"),xt=Symbol.for("react.lazy"),Bt=Symbol.for("react.activity"),ne=Symbol.for("react.legacy_hidden"),pe=Symbol.for("react.memo_cache_sentinel"),P=Symbol.for("react.view_transition"),Q=Symbol.for("react.recoverable"),B=Symbol.iterator;function j(t){return t===null||typeof t!="object"?null:(t=B&&t[B]||t["@@iterator"],typeof t=="function"?t:null)}var St=Symbol.for("react.client.reference");function Dt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===St?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case V:return"Fragment";case ct:return"Profiler";case at:return"StrictMode";case it:return"Suspense";case K:return"SuspenseList";case Bt:return"Activity";case P:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case ut:return t.displayName||"Context";case gt:return(t._context.displayName||"Context")+".Consumer";case Y:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case vt:return n=t.displayName||null,n!==null?n:Dt(t.type)||"Memo";case xt:n=t._payload,t=t._init;try{return Dt(t(n))}catch{}}return null}var Tt=Array.isArray,Mt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Xt=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L={pending:!1,data:null,method:null,action:null},Ge=[],se=-1;function Qt(t){return{current:t}}function Lt(t){0>se||(t.current=Ge[se],Ge[se]=null,se--)}function ae(t,n){se++,Ge[se]=t.current,t.current=n}var Ht=Qt(null),oe=Qt(null),qe=Qt(null),We=Qt(null);function U(t,n){switch(ae(qe,n),ae(oe,t),ae(Ht,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?J_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=J_(n),t=$_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Lt(Ht),ae(Ht,t)}function T(){Lt(Ht),Lt(oe),Lt(qe)}function nt(t){var n=t.memoizedState;n!==null&&(Ns._currentValue=n.memoizedState,ae(We,t)),n=Ht.current;var i=$_(n,t.type);n!==i&&(ae(oe,t),ae(Ht,i))}function dt(t){oe.current===t&&(Lt(Ht),Lt(oe)),We.current===t&&(Lt(We),Ns._currentValue=L)}var yt,ft;function kt(t){if(yt===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);yt=n&&n[1]||"",ft=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+yt+t+ft}var Ct=!1;function jt(t,n){if(!t||Ct)return"";Ct=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(Nt){var q=Nt}Reflect.construct(t,[],pt)}else{try{pt.call()}catch(Nt){q=Nt}pt=!1;try{var et=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),pt=!0,new t}finally{pt&&(et!==void 0?Object.defineProperty(t.prototype,"props",et):delete t.prototype.props)}}}else{try{throw Error()}catch(Nt){q=Nt}(pt=t())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(Nt){if(Nt&&q&&typeof Nt.stack=="string")return[Nt.stack,q.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),m=c[0],E=c[1];if(m&&E){var N=m.split(`
`),Z=E.split(`
`);for(l=r=0;r<N.length&&!N[r].includes("DetermineComponentFrameRoot");)r++;for(;l<Z.length&&!Z[l].includes("DetermineComponentFrameRoot");)l++;if(r===N.length||l===Z.length)for(r=N.length-1,l=Z.length-1;1<=r&&0<=l&&N[r]!==Z[l];)l--;for(;1<=r&&0<=l;r--,l--)if(N[r]!==Z[l]){if(r!==1||l!==1)do if(r--,l--,0>l||N[r]!==Z[l]){var rt=`
`+N[r].replace(" at new "," at ");return t.displayName&&rt.includes("<anonymous>")&&(rt=rt.replace("<anonymous>",t.displayName)),rt}while(1<=r&&0<=l);break}}}finally{Ct=!1,Error.prepareStackTrace=i}return(i=t?t.displayName||t.name:"")?kt(i):""}function Kt(t,n){switch(t.tag){case 26:case 27:case 5:return kt(t.type);case 16:return kt("Lazy");case 13:return t.child!==n&&n!==null?kt("Suspense Fallback"):kt("Suspense");case 19:return kt("SuspenseList");case 0:case 15:return jt(t.type,!1);case 11:return jt(t.type.render,!1);case 1:return jt(t.type,!0);case 31:return kt("Activity");case 30:return kt("ViewTransition");default:return""}}function At(t){try{var n="",i=null;do n+=Kt(t,i),i=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var Ot=Object.prototype.hasOwnProperty,ie=o.unstable_scheduleCallback,Zt=o.unstable_cancelCallback,zt=o.unstable_shouldYield,ce=o.unstable_requestPaint,X=o.unstable_now,Rt=o.unstable_getCurrentPriorityLevel,Ut=o.unstable_ImmediatePriority,Vt=o.unstable_UserBlockingPriority,Et=o.unstable_NormalPriority,_t=o.unstable_LowPriority,Wt=o.unstable_IdlePriority,ue=o.log,Ve=o.unstable_setDisableYieldValue,Me=null,$e=null;function pn(t){if(typeof ue=="function"&&Ve(t),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(Me,t)}catch{}}var Dn=Math.clz32?Math.clz32:yl,ea=Math.log,co=Math.LN2;function yl(t){return t>>>=0,t===0?32:31-(ea(t)/co|0)|0}var ur=256,na=262144,cr=4194304;function ui(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function fr(t,n,i){var r=t.pendingLanes;if(r===0)return 0;var l=0,c=t.suspendedLanes,m=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~c,r!==0?l=ui(r):(m&=E,m!==0?l=ui(m):i||(i=E&~t,i!==0&&(l=ui(i))))):(E=r&~c,E!==0?l=ui(E):m!==0?l=ui(m):i||(i=r&~t,i!==0&&(l=ui(i)))),l===0?0:n!==0&&n!==l&&(n&c)===0&&(c=l&-l,i=n&-n,c>=i||c===32&&(i&4194048)!==0)?n:l}function ba(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function Ml(t,n){(n&8)!==0&&(n|=n&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=n;0<i;){var r=31-Dn(i),l=1<<r;n|=t[r],i&=~l}return n}function bc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function El(){var t=cr;return cr<<=1,(cr&62914560)===0&&(cr=4194304),t}function fo(t){for(var n=[],i=0;31>i;i++)n.push(t);return n}function hr(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Ac(t,n,i,r,l,c){var m=t.pendingLanes;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=i,t.entangledLanes&=i,t.errorRecoveryDisabledLanes&=i,t.shellSuspendCounter=0;var E=t.entanglements,N=t.expirationTimes,Z=t.hiddenUpdates;for(i=m&~i;0<i;){var rt=31-Dn(i),pt=1<<rt;E[rt]=0,N[rt]=-1;var q=Z[rt];if(q!==null)for(Z[rt]=null,rt=0;rt<q.length;rt++){var et=q[rt];et!==null&&(et.lane&=-536870913)}i&=~pt}r!==0&&A(t,r,0),c!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=c&~(m&~n))}function A(t,n,i){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-Dn(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|i&261930}function J(t,n){var i=t.entangledLanes|=n;for(t=t.entanglements;i;){var r=31-Dn(i),l=1<<r;l&n|t[r]&n&&(t[r]|=n),i&=~l}}function ot(t,n){var i=n&-n;return i=(i&42)!==0?1:lt(i),(i&(t.suspendedLanes|n))!==0?0:i}function lt(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function bt(){var t=Xt.p;return t!==0?t:(t=window.event,t===void 0?32:P0(t.type))}function Pt(t,n){var i=Xt.p;try{return Xt.p=t,n()}finally{Xt.p=i}}var Ft=Math.random().toString(36).slice(2),wt="__reactFiber$"+Ft,qt="__reactProps$"+Ft,ee="__reactContainer$"+Ft,$t="__reactEvents$"+Ft,ve="__reactListeners$"+Ft,ze="__reactHandles$"+Ft,Qe="__reactResources$"+Ft,Ue="__reactMarker$"+Ft,Re="__reactLoad$"+Ft;function te(t){delete t[wt],delete t[qt],delete t[ve],delete t[ze]}function Ne(t){var n;if(n=t[wt])return n;for(var i=t.parentNode;i;){if(n=i[ee]||i[wt]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(t=g0(t);t!==null;){if(i=t[wt])return i;t=g0(t)}return n}t=i,i=t.parentNode}return null}function ge(t){if(t=t[wt]||t[ee]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function mn(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Qn(t){var n=t[Qe];return n||(n=t[Qe]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ce(t){t[Ue]=!0}function Aa(t){t[Re]=void 0}var je=new Set,zn={};function ln(t,n){en(t,n),en(t+"Capture",n)}function en(t,n){for(zn[t]=n,t=0;t<n.length;t++)je.add(n[t])}var Un=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zr={},Oi={};function IS(t){return Ot.call(Oi,t)?!0:Ot.call(Zr,t)?!1:Un.test(t)?Oi[t]=!0:(Zr[t]=!0,!1)}var we=!1;function Bp(){var t=we;return we=!1,t}function Tl(t,n,i){if(IS(n))if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,i)}}function bl(t,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,i)}}function ia(t,n,i,r){if(r===null)t.removeAttribute(i);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(i);return}t.setAttributeNS(n,i,r)}}function Jn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fp(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function BS(t,n,i){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(m){i=""+m,c.call(this,m)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return i},setValue:function(m){i=""+m},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Rc(t){if(!t._valueTracker){var n=Fp(t)?"checked":"value";t._valueTracker=BS(t,n,""+t[n])}}function Hp(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var i=n.getValue(),r="";return t&&(r=Fp(t)?t.checked?"true":"false":t.value),t=r,t!==i?(n.setValue(t),!0):!1}var FS=/[\n"\\]/g;function ci(t){return t.replace(FS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Cc(t,n,i,r,l,c,m,E){t.name="",m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"?t.type=m:t.removeAttribute("type"),n!=null?m==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Jn(n)):t.value!==""+Jn(n)&&(t.value=""+Jn(n)):m!=="submit"&&m!=="reset"||t.removeAttribute("value"),n!=null?m==="number"&&t.value==n?wc(t,Jn(t.value)):wc(t,Jn(n)):i!=null?wc(t,Jn(i)):r!=null&&t.removeAttribute("value"),l==null&&c!=null&&(t.defaultChecked=!!c),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Jn(E):t.removeAttribute("name")}function Gp(t,n,i,r,l,c,m,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||i!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Rc(t);return}i=i!=null?""+Jn(i):"",n=n!=null?""+Jn(n):i,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??l,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(t.name=m),Rc(t)}function wc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function Kr(t,n,i,r){if(t=t.options,n){n={};for(var l=0;l<i.length;l++)n["$"+i[l]]=!0;for(i=0;i<t.length;i++)l=n.hasOwnProperty("$"+t[i].value),t[i].selected!==l&&(t[i].selected=l),l&&r&&(t[i].defaultSelected=!0)}else{for(i=""+Jn(i),n=null,l=0;l<t.length;l++){if(t[l].value===i){t[l].selected=!0,r&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function Vp(t,n,i){if(n!=null&&(n=""+Jn(n),n!==t.value&&(t.value=n),i==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=i!=null?""+Jn(i):""}function Xp(t,n,i,r){if(n==null){if(r!=null){if(i!=null)throw Error(s(92));if(Tt(r)){if(1<r.length)throw Error(s(93));r=r[0]}i=r}i==null&&(i=""),n=i}i=Jn(n),t.defaultValue=i,r=t.textContent,r===i&&r!==""&&r!==null&&(t.value=r),Rc(t)}function Qr(t,n){if(n){var i=t.firstChild;if(i&&i===t.lastChild&&i.nodeType===3){i.nodeValue=n;return}}t.textContent=n}var HS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function kp(t,n,i){var r=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,i):typeof i!="number"||i===0||HS.has(n)?n==="float"?t.cssFloat=i:t[n]=(""+i).trim():t[n]=i+"px"}function qp(t,n,i){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,i!=null){for(var r in i)!i.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",we=!0);for(var l in n)r=n[l],n.hasOwnProperty(l)&&i[l]!==r&&(kp(t,l,r),we=!0)}else for(var c in n)n.hasOwnProperty(c)&&kp(t,c,n[c])}function Dc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var GS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),VS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Al(t){return VS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function zi(){}var Uc=null;function Nc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Jr=null,$r=null;function Yp(t){var n=ge(t);if(n&&(t=n.stateNode)){var i=t[qt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Cc(t,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=t;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+ci(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var r=i[n];if(r!==t&&r.form===t.form){var l=r[qt]||null;if(!l)throw Error(s(90));Cc(r,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<i.length;n++)r=i[n],r.form===t.form&&Hp(r)}break t;case"textarea":Vp(t,i.value,i.defaultValue);break t;case"select":n=i.value,n!=null&&Kr(t,!!i.multiple,n,!1)}}}var Lc=!1;function Wp(t,n,i){if(Lc)return t(n,i);Lc=!0;try{var r=t(n);return r}finally{if(Lc=!1,(Jr!==null||$r!==null)&&(Au(),Jr&&(n=Jr,t=$r,$r=Jr=null,Yp(n),t)))for(n=0;n<t.length;n++)Yp(t[n])}}function ho(t,n){var i=t.stateNode;if(i===null)return null;var r=i[qt]||null;if(r===null)return null;i=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(i&&typeof i!="function")throw Error(s(231,n,typeof i));return i}var aa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oc=!1;if(aa)try{var po={};Object.defineProperty(po,"passive",{get:function(){Oc=!0}}),window.addEventListener("test",po,po),window.removeEventListener("test",po,po)}catch{Oc=!1}var Ra=null,zc=null,Rl=null;function jp(){if(Rl)return Rl;var t,n=zc,i=n.length,r,l="value"in Ra?Ra.value:Ra.textContent,c=l.length;for(t=0;t<i&&n[t]===l[t];t++);var m=i-t;for(r=1;r<=m&&n[i-r]===l[c-r];r++);return Rl=l.slice(t,1<r?1-r:void 0)}function Cl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function wl(){return!0}function Zp(){return!1}function Pn(t){function n(i,r,l,c,m){this._reactName=i,this._targetInst=l,this.type=r,this.nativeEvent=c,this.target=m,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(i=t[E],this[E]=i?i(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?wl:Zp,this.isPropagationStopped=Zp,this}return z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),n}var Ca={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dl=Pn(Ca),mo=z({},Ca,{view:0,detail:0}),XS=Pn(mo),Pc,Ic,go,Ul=z({},mo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Fc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==go&&(go&&t.type==="mousemove"?(Pc=t.screenX-go.screenX,Ic=t.screenY-go.screenY):Ic=Pc=0,go=t),Pc)},movementY:function(t){return"movementY"in t?t.movementY:Ic}}),Kp=Pn(Ul),kS=z({},Ul,{dataTransfer:0}),qS=Pn(kS),YS=z({},mo,{relatedTarget:0}),Bc=Pn(YS),WS=z({},Ca,{animationName:0,elapsedTime:0,pseudoElement:0}),jS=Pn(WS),ZS=z({},Ca,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),KS=Pn(ZS),QS=z({},Ca,{data:0}),Qp=Pn(QS),JS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$S={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ex(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=tx[t])?!!n[t]:!1}function Fc(){return ex}var nx=z({},mo,{key:function(t){if(t.key){var n=JS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$S[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Fc,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ix=Pn(nx),ax=z({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jp=Pn(ax),rx=z({},Ca,{submitter:0}),sx=Pn(rx),ox=z({},mo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Fc}),lx=Pn(ox),ux=z({},Ca,{propertyName:0,elapsedTime:0,pseudoElement:0}),cx=Pn(ux),fx=z({},Ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),hx=Pn(fx),dx=z({},Ca,{newState:0,oldState:0,source:0}),px=Pn(dx),mx=[9,13,27,32],Hc=aa&&"CompositionEvent"in window,_o=null;aa&&"documentMode"in document&&(_o=document.documentMode);var gx=aa&&"TextEvent"in window&&!_o,$p=aa&&(!Hc||_o&&8<_o&&11>=_o),tm=" ",em=!1;function nm(t,n){switch(t){case"keyup":return mx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function im(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ts=!1;function _x(t,n){switch(t){case"compositionend":return im(n);case"keypress":return n.which!==32?null:(em=!0,tm);case"textInput":return t=n.data,t===tm&&em?null:t;default:return null}}function vx(t,n){if(ts)return t==="compositionend"||!Hc&&nm(t,n)?(t=jp(),Rl=zc=Ra=null,ts=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return $p&&n.locale!=="ko"?null:n.data;default:return null}}var Sx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!Sx[t.type]:n==="textarea"}function rm(t,n,i,r){Jr?$r?$r.push(r):$r=[r]:Jr=r,n=Nu(n,"onChange"),0<n.length&&(i=new Dl("onChange","change",null,i,r),t.push({event:i,listeners:n}))}var vo=null,So=null;function xx(t){Y_(t,0)}function Nl(t){var n=mn(t);if(Hp(n))return t}function sm(t,n){if(t==="change")return n}var om=!1;if(aa){var Gc;if(aa){var Vc="oninput"in document;if(!Vc){var lm=document.createElement("div");lm.setAttribute("oninput","return;"),Vc=typeof lm.oninput=="function"}Gc=Vc}else Gc=!1;om=Gc&&(!document.documentMode||9<document.documentMode)}function um(){vo&&(vo.detachEvent("onpropertychange",cm),So=vo=null)}function cm(t){if(t.propertyName==="value"&&Nl(So)){var n=[];rm(n,So,t,Nc(t)),Wp(xx,n)}}function yx(t,n,i){t==="focusin"?(um(),vo=n,So=i,vo.attachEvent("onpropertychange",cm)):t==="focusout"&&um()}function Mx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nl(So)}function Ex(t,n){if(t==="click")return Nl(n)}function Tx(t,n){if(t==="input"||t==="change")return Nl(n)}function bx(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var $n=typeof Object.is=="function"?Object.is:bx;function xo(t,n){if($n(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var i=Object.keys(t),r=Object.keys(n);if(i.length!==r.length)return!1;for(r=0;r<i.length;r++){var l=i[r];if(!Ot.call(n,l)||!$n(t[l],n[l]))return!1}return!0}function Xc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function fm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function hm(t,n){var i=fm(t);t=0;for(var r;i;){if(i.nodeType===3){if(r=t+i.textContent.length,t<=n&&r>=n)return{node:i,offset:n-t};t=r}t:{for(;i;){if(i.nextSibling){i=i.nextSibling;break t}i=i.parentNode}i=void 0}i=fm(i)}}function dm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?dm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function pm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Xc(t.document);n instanceof t.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)t=n.contentWindow;else break;n=Xc(t.document)}return n}function kc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var Ax=aa&&"documentMode"in document&&11>=document.documentMode,es=null,qc=null,yo=null,Yc=!1;function mm(t,n,i){var r=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;Yc||es==null||es!==Xc(r)||(r=es,"selectionStart"in r&&kc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yo&&xo(yo,r)||(yo=r,r=Nu(qc,"onSelect"),0<r.length&&(n=new Dl("onSelect","select",null,n,i),t.push({event:n,listeners:r}),n.target=es)))}function dr(t,n){var i={};return i[t.toLowerCase()]=n.toLowerCase(),i["Webkit"+t]="webkit"+n,i["Moz"+t]="moz"+n,i}var ns={animationend:dr("Animation","AnimationEnd"),animationiteration:dr("Animation","AnimationIteration"),animationstart:dr("Animation","AnimationStart"),transitionrun:dr("Transition","TransitionRun"),transitionstart:dr("Transition","TransitionStart"),transitioncancel:dr("Transition","TransitionCancel"),transitionend:dr("Transition","TransitionEnd")},Wc={},gm={};aa&&(gm=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function pr(t){if(Wc[t])return Wc[t];if(!ns[t])return t;var n=ns[t],i;for(i in n)if(n.hasOwnProperty(i)&&i in gm)return Wc[t]=n[i];return t}var _m=pr("animationend"),vm=pr("animationiteration"),Sm=pr("animationstart"),Rx=pr("transitionrun"),Cx=pr("transitionstart"),wx=pr("transitioncancel"),xm=pr("transitionend"),ym=new Map,jc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");jc.push("scrollEnd");function Mi(t,n){ym.set(t,n),ln(n,[t])}var Dx=0;function ra(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ai.identifierPrefix;var i=Dx++;return t="_"+t+"t_"+i.toString(32)+"_",n.autoName=t}function Mm(t){if(t==null||typeof t=="string")return t;var n=null,i=Ms;if(i!==null)for(var r=0;r<i.length;r++){var l=t[i[r]];if(l!=null){if(l==="none")return"none";n=n==null?l:n+(" "+l)}}return n??t.default}function sa(t,n){return t=Mm(t),n=Mm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Ll=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fi=[],is=0,Zc=0;function Ol(){for(var t=is,n=Zc=is=0;n<t;){var i=fi[n];fi[n++]=null;var r=fi[n];fi[n++]=null;var l=fi[n];fi[n++]=null;var c=fi[n];if(fi[n++]=null,r!==null&&l!==null){var m=r.pending;m===null?l.next=l:(l.next=m.next,m.next=l),r.pending=l}c!==0&&Em(i,l,c)}}function zl(t,n,i,r){fi[is++]=t,fi[is++]=n,fi[is++]=i,fi[is++]=r,Zc|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function Kc(t,n,i,r){return zl(t,n,i,r),Pl(t)}function mr(t,n){return zl(t,null,null,n),Pl(t)}function Em(t,n,i){t.lanes|=i;var r=t.alternate;r!==null&&(r.lanes|=i);for(var l=!1,c=t.return;c!==null;)c.childLanes|=i,r=c.alternate,r!==null&&(r.childLanes|=i),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(l=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,l&&n!==null&&(l=31-Dn(i),t=c.hiddenUpdates,r=t[l],r===null?t[l]=[n]:r.push(n),n.lane=i|536870912),c):null}function Pl(t){if(50<Xo)throw Xo=0,bu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var as={};function Ux(t,n,i,r){this.tag=t,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(t,n,i,r){return new Ux(t,n,i,r)}function Qc(t){return t=t.prototype,!(!t||!t.isReactComponent)}function oa(t,n){var i=t.alternate;return i===null?(i=Vn(t.tag,n,t.key,t.mode),i.elementType=t.elementType,i.type=t.type,i.stateNode=t.stateNode,i.alternate=t,t.alternate=i):(i.pendingProps=n,i.type=t.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=t.flags&1206910976,i.childLanes=t.childLanes,i.lanes=t.lanes,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,n=t.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=t.sibling,i.index=t.index,i.ref=t.ref,i.refCleanup=t.refCleanup,i}function Tm(t,n){t.flags&=1206910978;var i=t.alternate;return i===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=i.childLanes,t.lanes=i.lanes,t.child=i.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=i.memoizedProps,t.memoizedState=i.memoizedState,t.updateQueue=i.updateQueue,t.type=i.type,n=i.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Il(t,n,i,r,l,c){var m=0;if(r=t,typeof r=="function")Qc(r)&&(m=1);else if(typeof r=="string")m=rM(t,i,Ht.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Bt:return t=Vn(31,i,n,l),t.elementType=Bt,t.lanes=c,t;case V:return gr(i.children,l,c,n);case at:m=8,l|=24;break;case ct:return t=Vn(12,i,n,l|2),t.elementType=ct,t.lanes=c,t;case it:return t=Vn(13,i,n,l),t.elementType=it,t.lanes=c,t;case K:return t=Vn(19,i,n,l),t.elementType=K,t.lanes=c,t;case ne:case P:return t=l|32,t=Vn(30,i,n,t),t.elementType=P,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ut:m=10;break t;case gt:m=9;break t;case Y:m=11;break t;case vt:m=14;break t;case xt:m=16,r=null;break t}m=29,i=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Vn(m,i,n,l),n.elementType=t,n.type=r,n.lanes=c,n}function gr(t,n,i,r){return t=Vn(7,t,r,n),t.lanes=i,t}function Jc(t,n,i){return t=Vn(6,t,null,n),t.lanes=i,t}function bm(t){var n=Vn(18,null,null,0);return n.stateNode=t,n}function $c(t,n,i){return n=Vn(4,t.children!==null?t.children:[],t.key,n),n.lanes=i,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Am=new WeakMap;function hi(t,n){if(typeof t=="object"&&t!==null){var i=Am.get(t);return i!==void 0?i:(n={value:t,source:n,stack:At(n)},Am.set(t,n),n)}return{value:t,source:n,stack:At(n)}}var rs=[],ss=0,Bl=null,Mo=0,di=[],pi=0,wa=null,Pi=1,Ii="";function la(t,n){rs[ss++]=Mo,rs[ss++]=Bl,Bl=t,Mo=n}function Rm(t,n,i){di[pi++]=Pi,di[pi++]=Ii,di[pi++]=wa,wa=t;var r=Pi;t=Ii;var l=32-Dn(r)-1;r&=~(1<<l),i+=1;var c=32-Dn(n)+l;if(30<c){var m=l-l%5;c=(r&(1<<m)-1).toString(32),r>>=m,l-=m,Pi=1<<32-Dn(n)+l|i<<l|r,Ii=c+t}else Pi=1<<c|i<<l|r,Ii=t}function Fl(t){t.return!==null&&(la(t,1),Rm(t,1,0))}function tf(t){for(;t===Bl;)Bl=rs[--ss],rs[ss]=null,Mo=rs[--ss],rs[ss]=null;for(;t===wa;)wa=di[--pi],di[pi]=null,Ii=di[--pi],di[pi]=null,Pi=di[--pi],di[pi]=null}function Cm(t,n){di[pi++]=Pi,di[pi++]=Ii,di[pi++]=wa,Pi=n.id,Ii=n.overflow,wa=t}var Sn=null,Ze=null,_e=!1,Da=null,mi=!1,ef=Error(s(519));function Ua(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Eo(hi(n,t)),ef}function wm(t){var n=t.stateNode,i=t.type,r=t.memoizedProps;switch(n[wt]=t,n[qt]=r,i){case"dialog":ye("cancel",n),ye("close",n);break;case"iframe":case"object":case"embed":ye("load",n);break;case"video":case"audio":for(i=0;i<qo.length;i++)ye(qo[i],n);break;case"source":ye("error",n);break;case"img":case"image":case"link":ye("error",n),ye("load",n);break;case"details":ye("toggle",n);break;case"input":ye("invalid",n),Gp(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ye("invalid",n);break;case"textarea":ye("invalid",n),Xp(n,r.value,r.defaultValue,r.children)}i=r.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||r.suppressHydrationWarning===!0||K_(n.textContent,i)?(r.popover!=null&&(ye("beforetoggle",n),ye("toggle",n)),r.onScroll!=null&&ye("scroll",n),r.onScrollEnd!=null&&ye("scrollend",n),r.onClick!=null&&(n.onclick=zi),n=!0):n=!1,n||Ua(t,!0)}function Hl(t){for(Sn=t.return;Sn;)switch(Sn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Sn=Sn.return}}function os(t){if(t!==Sn)return!1;if(!_e)return Hl(t),_e=!0,!1;var n=t.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=t.type,i=!(i!=="form"&&i!=="button")||Nh(t.type,t.memoizedProps)),i=!i),i&&Ze&&Ua(t),Hl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=m0(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));Ze=m0(t)}else n===27?(n=Ze,Wa(t.type)?(t=Gh,Gh=null,Ze=t):Ze=n):Ze=Sn?_i(t.stateNode.nextSibling):null;return!0}function _r(){Ze=Sn=null,_e=!1}function nf(){var t=Da;return t!==null&&(qn===null?qn=t:qn.push.apply(qn,t),Da=null),t}function Eo(t){Da===null?Da=[t]:Da.push(t)}var af=Qt(null),vr=null,ua=null;function Na(t,n,i){ae(af,n._currentValue),n._currentValue=i}function ca(t){t._currentValue=af.current,Lt(af)}function Gl(t,n,i){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===i)break;t=t.return}}function rf(t,n,i,r){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var c=l.dependencies;if(c!==null){var m=l.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=l;for(var N=0;N<n.length;N++)if(E.context===n[N]){c.lanes|=i,E=c.alternate,E!==null&&(E.lanes|=i),Gl(c.return,i,t),r||(m=null);break t}c=E.next}}else if(l.tag===18){if(m=l.return,m===null)throw Error(s(341));m.lanes|=i,c=m.alternate,c!==null&&(c.lanes|=i),Gl(m,i,t),m=null}else l.tag===13&&l.memoizedState!==null&&l.memoizedState.dehydrated===null?(l.lanes|=i,m=l.alternate,m!==null&&(m.lanes|=i),Gl(l.return,i,t),m=l.child,m=m!==null?m.sibling:null):m=l.child;if(m!==null)m.return=l;else for(m=l;m!==null;){if(m===t){m=null;break}if(l=m.sibling,l!==null){l.return=m.return,m=l;break}m=m.return}l=m}}function Sr(t,n,i,r){t=null;for(var l=n,c=!1;l!==null;){if(!c){if((l.flags&524288)!==0)c=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var m=l.alternate;if(m===null)throw Error(s(387));if(m=m.memoizedProps,m!==null){var E=l.type;$n(l.pendingProps.value,m.value)||(t!==null?t.push(E):t=[E])}}else if(l===We.current){if(m=l.alternate,m===null)throw Error(s(387));m.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(Ns):t=[Ns])}l=l.return}return t!==null&&rf(n,t,i,r),n.flags|=262144,t!==null}function Vl(t){for(t=t.firstContext;t!==null;){if(!$n(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function xr(t){vr=t,ua=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return Dm(vr,t)}function Xl(t,n){return vr===null&&xr(t),Dm(t,n)}function Dm(t,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},ua===null){if(t===null)throw Error(s(308));ua=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ua=ua.next=n;return i}var Nx=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(i,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(i){return i()})}},Lx=o.unstable_scheduleCallback,Ox=o.unstable_NormalPriority,un={$$typeof:ut,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function sf(){return{controller:new Nx,data:new Map,refCount:0}}function To(t){t.refCount--,t.refCount===0&&Lx(Ox,function(){t.controller.abort()})}function Um(t,n){if((t.pendingLanes&4194048)!==0){var i=t.transitionTypes;for(i===null&&(i=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];i.indexOf(r)===-1&&i.push(r)}}}var bo=null;function zx(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Ao=null,of=0,yr=0,ls=null;function Px(t,n){if(Ao===null){var i=Ao=[];of=0,yr=Eh(),ls={status:"pending",value:void 0,then:function(r){i.push(r)}}}return of++,n.then(Nm,Nm),n}function Nm(){if(--of===0&&(bo=null,Ao!==null)){ls!==null&&(ls.status="fulfilled");var t=Ao;Ao=null,yr=0,ls=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function Ix(t,n){var i=[],r={status:"pending",value:null,reason:null,then:function(l){i.push(l)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var l=0;l<i.length;l++)(0,i[l])(n)},function(l){for(r.status="rejected",r.reason=l,l=0;l<i.length;l++)(0,i[l])(void 0)}),r}var Lm=Mt.S;Mt.S=function(t,n){if(b_=X(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Px(t,n),bo!==null)for(var i=As;i!==null;)Um(i,bo),i=i.next;if(i=t.types,i!==null){for(var r=As;r!==null;)Um(r,i),r=r.next;if(yr!==0){r=bo,r===null&&(r=bo=[]);for(var l=0;l<i.length;l++){var c=i[l];r.indexOf(c)===-1&&r.push(c)}}}Lm!==null&&Lm(t,n)};var Mr=Qt(null);function lf(){var t=Mr.current;return t!==null?t:Ye.pooledCache}function kl(t,n){n===null?ae(Mr,Mr.current):ae(Mr,n.pool)}function Om(){var t=lf();return t===null?null:{parent:un._currentValue,pool:t}}var us=Error(s(460)),uf=Error(s(474)),ql=Error(s(542)),Yl={then:function(){}};function zm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Pm(t,n,i){switch(i=t[i],i===void 0?t.push(n):i!==n&&(n.then(zi,zi),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Bm(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(zi,zi);else{if(t=Ye,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=r}},function(r){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Bm(t),t}throw Tr=n,us}}function Er(t){try{var n=t._init;return n(t._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(Tr=i,us):i}}var Tr=null;function Im(){if(Tr===null)throw Error(s(459));var t=Tr;return Tr=null,t}function Bm(t){if(t===us||t===ql)throw Error(s(483))}var cs=null,Ro=0;function Wl(t){var n=Ro;return Ro+=1,cs===null&&(cs=[]),Pm(cs,t,n)}function La(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function jl(t,n){throw n.$$typeof===k?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Fm(t){function n(W,H){if(t){var tt=W.deletions;tt===null?(W.deletions=[H],W.flags|=16):tt.push(H)}}function i(W,H){if(!t)return null;for(;H!==null;)n(W,H),H=H.sibling;return null}function r(W){for(var H=new Map;W!==null;)W.key===null?H.set(W.index,W):H.set(W.key,W),W=W.sibling;return H}function l(W,H){return W=oa(W,H),W.index=0,W.sibling=null,W}function c(W,H,tt){return W.index=tt,t?(tt=W.alternate,tt!==null?(tt=tt.index,tt<H?(W.flags|=2,H):tt):(W.flags|=134217730,H)):(W.flags|=1048576,H)}function m(W){return t&&W.alternate===null&&(W.flags|=134217730),W}function E(W,H,tt,ht){return H===null||H.tag!==6?(H=Jc(tt,W.mode,ht),H.return=W,H):(H=l(H,tt),H.return=W,H)}function N(W,H,tt,ht){var Gt=tt.type;return Gt===V?(W=rt(W,H,tt.props.children,ht,tt.key),La(W,tt),W):H!==null&&(H.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===xt&&Er(Gt)===H.type)?(H=l(H,tt.props),La(H,tt),H.return=W,H):(H=Il(tt.type,tt.key,tt.props,null,W.mode,ht),La(H,tt),H.return=W,H)}function Z(W,H,tt,ht){return H===null||H.tag!==4||H.stateNode.containerInfo!==tt.containerInfo||H.stateNode.implementation!==tt.implementation?(H=$c(tt,W.mode,ht),H.return=W,H):(H=l(H,tt.children||[]),H.return=W,H)}function rt(W,H,tt,ht,Gt){return H===null||H.tag!==7?(H=gr(tt,W.mode,ht,Gt),H.return=W,H):(H=l(H,tt),H.return=W,H)}function pt(W,H,tt){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=Jc(""+H,W.mode,tt),H.return=W,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case w:return tt=Il(H.type,H.key,H.props,null,W.mode,tt),La(tt,H),tt.return=W,tt;case R:return H=$c(H,W.mode,tt),H.return=W,H;case xt:return H=Er(H),pt(W,H,tt)}if(Tt(H)||j(H))return H=gr(H,W.mode,tt,null),H.return=W,H;if(typeof H.then=="function")return pt(W,Wl(H),tt);if(H.$$typeof===ut)return pt(W,Xl(W,H),tt);jl(W,H)}return null}function q(W,H,tt,ht){var Gt=H!==null?H.key:null;if(typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint")return Gt!==null?null:E(W,H,""+tt,ht);if(typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case w:return tt.key===Gt?N(W,H,tt,ht):null;case R:return tt.key===Gt?Z(W,H,tt,ht):null;case xt:return tt=Er(tt),q(W,H,tt,ht)}if(Tt(tt)||j(tt))return Gt!==null?null:rt(W,H,tt,ht,null);if(typeof tt.then=="function")return q(W,H,Wl(tt),ht);if(tt.$$typeof===ut)return q(W,H,Xl(W,tt),ht);jl(W,tt)}return null}function et(W,H,tt,ht,Gt){if(typeof ht=="string"&&ht!==""||typeof ht=="number"||typeof ht=="bigint")return W=W.get(tt)||null,E(H,W,""+ht,Gt);if(typeof ht=="object"&&ht!==null){switch(ht.$$typeof){case w:return W=W.get(ht.key===null?tt:ht.key)||null,N(H,W,ht,Gt);case R:return W=W.get(ht.key===null?tt:ht.key)||null,Z(H,W,ht,Gt);case xt:return ht=Er(ht),et(W,H,tt,ht,Gt)}if(Tt(ht)||j(ht))return W=W.get(tt)||null,rt(H,W,ht,Gt,null);if(typeof ht.then=="function")return et(W,H,tt,Wl(ht),Gt);if(ht.$$typeof===ut)return et(W,H,tt,Xl(H,ht),Gt);jl(H,ht)}return null}function Nt(W,H,tt,ht){for(var Gt=null,Te=null,Jt=H,re=H=0,hn=null;Jt!==null&&re<tt.length;re++){Jt.index>re?(hn=Jt,Jt=null):hn=Jt.sibling;var Ae=q(W,Jt,tt[re],ht);if(Ae===null){Jt===null&&(Jt=hn);break}t&&Jt&&Ae.alternate===null&&n(W,Jt),H=c(Ae,H,re),Te===null?Gt=Ae:Te.sibling=Ae,Te=Ae,Jt=hn}if(re===tt.length)return i(W,Jt),_e&&la(W,re),Gt;if(Jt===null){for(;re<tt.length;re++)Jt=pt(W,tt[re],ht),Jt!==null&&(H=c(Jt,H,re),Te===null?Gt=Jt:Te.sibling=Jt,Te=Jt);return _e&&la(W,re),Gt}for(Jt=r(Jt);re<tt.length;re++)hn=et(Jt,W,re,tt[re],ht),hn!==null&&(t&&(Ae=hn.alternate,Ae!==null&&Jt.delete(Ae.key===null?re:Ae.key)),H=c(hn,H,re),Te===null?Gt=hn:Te.sibling=hn,Te=hn);return t&&Jt.forEach(function(Ja){return n(W,Ja)}),_e&&la(W,re),Gt}function Yt(W,H,tt,ht){if(tt==null)throw Error(s(151));for(var Gt=null,Te=null,Jt=H,re=H=0,hn=null,Ae=tt.next();Jt!==null&&!Ae.done;re++,Ae=tt.next()){Jt.index>re?(hn=Jt,Jt=null):hn=Jt.sibling;var Ja=q(W,Jt,Ae.value,ht);if(Ja===null){Jt===null&&(Jt=hn);break}t&&Jt&&Ja.alternate===null&&n(W,Jt),H=c(Ja,H,re),Te===null?Gt=Ja:Te.sibling=Ja,Te=Ja,Jt=hn}if(Ae.done)return i(W,Jt),_e&&la(W,re),Gt;if(Jt===null){for(;!Ae.done;re++,Ae=tt.next())Ae=pt(W,Ae.value,ht),Ae!==null&&(H=c(Ae,H,re),Te===null?Gt=Ae:Te.sibling=Ae,Te=Ae);return _e&&la(W,re),Gt}for(Jt=r(Jt);!Ae.done;re++,Ae=tt.next())Ae=et(Jt,W,re,Ae.value,ht),Ae!==null&&(t&&(hn=Ae.alternate,hn!==null&&Jt.delete(hn.key===null?re:hn.key)),H=c(Ae,H,re),Te===null?Gt=Ae:Te.sibling=Ae,Te=Ae);return t&&Jt.forEach(function(_M){return n(W,_M)}),_e&&la(W,re),Gt}function he(W,H,tt,ht){if(typeof tt=="object"&&tt!==null&&tt.type===V&&tt.key===null&&tt.props.ref===void 0&&(tt=tt.props.children),typeof tt=="object"&&tt!==null){switch(tt.$$typeof){case w:t:{for(var Gt=tt.key;H!==null;){if(H.key===Gt){if(Gt=tt.type,Gt===V){if(H.tag===7){i(W,H.sibling),ht=l(H,tt.props.children),La(ht,tt),ht.return=W,W=ht;break t}}else if(H.elementType===Gt||typeof Gt=="object"&&Gt!==null&&Gt.$$typeof===xt&&Er(Gt)===H.type){i(W,H.sibling),ht=l(H,tt.props),La(ht,tt),ht.return=W,W=ht;break t}i(W,H);break}else n(W,H);H=H.sibling}tt.type===V?(ht=gr(tt.props.children,W.mode,ht,tt.key),La(ht,tt),ht.return=W,W=ht):(ht=Il(tt.type,tt.key,tt.props,null,W.mode,ht),La(ht,tt),ht.return=W,W=ht)}return m(W);case R:t:{for(Gt=tt.key;H!==null;){if(H.key===Gt)if(H.tag===4&&H.stateNode.containerInfo===tt.containerInfo&&H.stateNode.implementation===tt.implementation){i(W,H.sibling),ht=l(H,tt.children||[]),ht.return=W,W=ht;break t}else{i(W,H);break}else n(W,H);H=H.sibling}ht=$c(tt,W.mode,ht),ht.return=W,W=ht}return m(W);case xt:return tt=Er(tt),he(W,H,tt,ht)}if(Tt(tt))return Nt(W,H,tt,ht);if(j(tt)){if(Gt=j(tt),typeof Gt!="function")throw Error(s(150));return tt=Gt.call(tt),Yt(W,H,tt,ht)}if(typeof tt.then=="function")return he(W,H,Wl(tt),ht);if(tt.$$typeof===ut)return he(W,H,Xl(W,tt),ht);jl(W,tt)}return typeof tt=="string"&&tt!==""||typeof tt=="number"||typeof tt=="bigint"?(tt=""+tt,H!==null&&H.tag===6?(i(W,H.sibling),ht=l(H,tt),ht.return=W,W=ht):(i(W,H),ht=Jc(tt,W.mode,ht),ht.return=W,W=ht),m(W)):i(W,H)}return function(W,H,tt,ht){try{Ro=0;var Gt=he(W,H,tt,ht);return cs=null,Gt}catch(Jt){if(Jt===us||Jt===ql)throw Jt;var Te=Vn(29,Jt,null,W.mode);return Te.lanes=ht,Te.return=W,Te}finally{}}}var br=Fm(!0),Hm=Fm(!1),Oa=!1;function cf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ff(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function za(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(t,n,i){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Le&2)!==0){var l=r.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),r.pending=n,n=Pl(t),Em(t,null,i),n}return zl(t,r,n,i),Pl(t)}function Co(t,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,i|=r,n.lanes=i,J(t,i)}}function hf(t,n){var i=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,i===r)){var l=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var m={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};c===null?l=c=m:c=c.next=m,i=i.next}while(i!==null);c===null?l=c=n:c=c.next=n}else l=c=n;i={baseState:r.baseState,firstBaseUpdate:l,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=i;return}t=i.lastBaseUpdate,t===null?i.firstBaseUpdate=n:t.next=n,i.lastBaseUpdate=n}var df=!1;function wo(){if(df){var t=ls;if(t!==null)throw t}}function Do(t,n,i,r){df=!1;var l=t.updateQueue;Oa=!1;var c=l.firstBaseUpdate,m=l.lastBaseUpdate,E=l.shared.pending;if(E!==null){l.shared.pending=null;var N=E,Z=N.next;N.next=null,m===null?c=Z:m.next=Z,m=N;var rt=t.alternate;rt!==null&&(rt=rt.updateQueue,E=rt.lastBaseUpdate,E!==m&&(E===null?rt.firstBaseUpdate=Z:E.next=Z,rt.lastBaseUpdate=N))}if(c!==null){var pt=l.baseState;m=0,rt=Z=N=null,E=c;do{var q=E.lane&-536870913,et=q!==E.lane;if(et?(Ee&q)===q:(r&q)===q){q!==0&&q===yr&&(df=!0),rt!==null&&(rt=rt.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Nt=t,Yt=E;q=n;var he=i;switch(Yt.tag){case 1:if(Nt=Yt.payload,typeof Nt=="function"){pt=Nt.call(he,pt,q);break t}pt=Nt;break t;case 3:Nt.flags=Nt.flags&-65537|128;case 0:if(Nt=Yt.payload,q=typeof Nt=="function"?Nt.call(he,pt,q):Nt,q==null)break t;pt=z({},pt,q);break t;case 2:Oa=!0}}q=E.callback,q!==null&&(t.flags|=64,et&&(t.flags|=8192),et=l.callbacks,et===null?l.callbacks=[q]:et.push(q))}else et={lane:q,tag:E.tag,payload:E.payload,callback:E.callback,next:null},rt===null?(Z=rt=et,N=pt):rt=rt.next=et,m|=q;if(E=E.next,E===null){if(E=l.shared.pending,E===null)break;et=E,E=et.next,et.next=null,l.lastBaseUpdate=et,l.shared.pending=null}}while(!0);rt===null&&(N=pt),l.baseState=N,l.firstBaseUpdate=Z,l.lastBaseUpdate=rt,c===null&&(l.shared.lanes=0),Xa|=m,t.lanes=m,t.memoizedState=pt}}function Gm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Vm(t,n){var i=t.callbacks;if(i!==null)for(t.callbacks=null,t=0;t<i.length;t++)Gm(i[t],n)}var Ia=Qt(null),Zl=Qt(0);function Xm(t,n){t=ma,ae(Zl,t),ae(Ia,n),ma=t|n.baseLanes}function pf(){ae(Zl,ma),ae(Ia,Ia.current)}function mf(){ma=Zl.current,Lt(Ia),Lt(Zl)}var bn=Qt(null),Nn=null;function Ba(t){var n=t.alternate;ae(An,An.current&1),ae(bn,t),Nn===null&&(n===null||Ia.current!==null||n.memoizedState!==null)&&(Nn=t)}function gf(t){ae(An,An.current),ae(bn,t),Nn===null&&(Nn=t)}function km(t){t.tag===22?(ae(An,An.current),ae(bn,t),Nn===null&&(Nn=t)):Fa()}function Fa(){ae(An,An.current),ae(bn,bn.current)}function ti(t){Lt(bn),Nn===t&&(Nn=null),Lt(An)}var An=Qt(0);function Uo(t,n){ae(bn,bn.current),ae(An,n)}function _f(t){Lt(An),Lt(bn),Nn===t&&(Nn=null)}function Kl(t){for(var n=t;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Fh(i)||Hh(i)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var fa=0,fe=null,Xe=null,cn=null,Ql=!1,fs=!1,Ar=!1,Jl=0,No=0,hs=null,Bx=0;function nn(){throw Error(s(321))}function vf(t,n){if(n===null)return!1;for(var i=0;i<n.length&&i<t.length;i++)if(!$n(t[i],n[i]))return!1;return!0}function Sf(t,n,i,r,l,c){return fa=c,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,Mt.H=t===null||t.memoizedState===null?Rg:Cg,Ar=!1,c=i(r,l),Ar=!1,fs&&(c=Ym(n,i,r,l)),qm(t),c}function qm(t){Mt.H=ru;var n=Xe!==null&&Xe.next!==null;if(fa=0,cn=Xe=fe=null,Ql=!1,No=0,hs=null,n)throw Error(s(300));t===null||fn||(t=t.dependencies,t!==null&&Vl(t)&&(fn=!0))}function Ym(t,n,i,r){fe=t;var l=0;do{if(fs&&(hs=null),No=0,fs=!1,25<=l)throw Error(s(301));if(l+=1,cn=Xe=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}Mt.H=Yx,c=n(i,r)}while(fs);return c}function Fx(){var t=Mt.H,n=t.useState()[0];return n=typeof n.then=="function"?Lo(n):n,t=t.useState()[0],(Xe!==null?Xe.memoizedState:null)!==t&&(fe.flags|=1024),n}function xf(){var t=Jl!==0;return Jl=0,t}function yf(t,n,i){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~i}function Mf(t){if(Ql){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ql=!1}fa=0,cn=Xe=fe=null,fs=!1,No=Jl=0,hs=null}function In(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?fe.memoizedState=cn=t:cn=cn.next=t,cn}function on(){if(Xe===null){var t=fe.alternate;t=t!==null?t.memoizedState:null}else t=Xe.next;var n=cn===null?fe.memoizedState:cn.next;if(n!==null)cn=n,Xe=t;else{if(t===null)throw fe.alternate===null?Error(s(467)):Error(s(310));Xe=t,t={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},cn===null?fe.memoizedState=cn=t:cn=cn.next=t}return cn}function $l(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Lo(t){var n=No;return No+=1,hs===null&&(hs=[]),t=Pm(hs,t,n),n=fe,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,Mt.H=n===null||n.memoizedState===null?Rg:Cg),t}function tu(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Lo(t);if(t.$$typeof===Q)return;if(t.$$typeof===ut)return Tn(t)}throw Error(s(438,String(t)))}function Ef(t){var n=null,i=fe.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var r=fe.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=$l(),fe.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(t),r=0;r<t;r++)i[r]=pe;return n.index++,i}function ha(t,n){return typeof n=="function"?n(t):n}function eu(t){var n=on();return Tf(n,Xe,t)}function Tf(t,n,i){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=i;var l=t.baseQueue,c=r.pending;if(c!==null){if(l!==null){var m=l.next;l.next=c.next,c.next=m}n.baseQueue=l=c,r.pending=null}if(c=t.baseState,l===null)t.memoizedState=c;else{n=l.next;var E=m=null,N=null,Z=n,rt=!1;do{var pt=Z.lane&-536870913;if(pt!==Z.lane?(Ee&pt)===pt:(fa&pt)===pt){var q=Z.revertLane;if(q===0)N!==null&&(N=N.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),pt===yr&&(rt=!0);else if((fa&q)===q){Z=Z.next,q===yr&&(rt=!0);continue}else pt={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},N===null?(E=N=pt,m=c):N=N.next=pt,fe.lanes|=q,Xa|=q;pt=Z.action,Ar&&i(c,pt),c=Z.hasEagerState?Z.eagerState:i(c,pt)}else q={lane:pt,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},N===null?(E=N=q,m=c):N=N.next=q,fe.lanes|=pt,Xa|=pt;Z=Z.next}while(Z!==null&&Z!==n);if(N===null?m=c:N.next=E,!$n(c,t.memoizedState)&&(fn=!0,rt&&(i=ls,i!==null)))throw i;t.memoizedState=c,t.baseState=m,t.baseQueue=N,r.lastRenderedState=c}return l===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function bf(t){var n=on(),i=n.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=t;var r=i.dispatch,l=i.pending,c=n.memoizedState;if(l!==null){i.pending=null;var m=l=l.next;do c=t(c,m.action),m=m.next;while(m!==l);$n(c,n.memoizedState)||(fn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),i.lastRenderedState=c}return[c,r]}function Wm(t,n,i){var r=fe,l=on(),c=_e;if(c){if(i===void 0)throw Error(s(407));i=i()}else i=n();var m=!$n((Xe||l).memoizedState,i);if(m&&(l.memoizedState=i,fn=!0),l=l.queue,Cf(Km.bind(null,r,l,t),[t]),t=l.getSnapshot!==n||m||cn!==null&&(cn.memoizedState.tag&1)!==0,ds(t?9:8,{destroy:void 0},Zm.bind(null,r,l,i,n),null),t){if(r.flags|=2048,Ye===null)throw Error(s(349));c||(fa&127)!==0||jm(r,n,i)}return i}function jm(t,n,i){t.flags|=16384,t={getSnapshot:n,value:i},n=fe.updateQueue,n===null?(n=$l(),fe.updateQueue=n,n.stores=[t]):(i=n.stores,i===null?n.stores=[t]:i.push(t))}function Zm(t,n,i,r){n.value=i,n.getSnapshot=r,Qm(n)&&Jm(t)}function Km(t,n,i){return i(function(){Qm(n)&&Jm(t)})}function Qm(t){var n=t.getSnapshot;t=t.value;try{var i=n();return!$n(t,i)}catch{return!0}}function Jm(t){var n=mr(t,2);n!==null&&Yn(n,t,2)}function Af(t){var n=In();if(typeof t=="function"){var i=t;if(t=i(),Ar){pn(!0);try{i()}finally{pn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:t},n}function $m(t,n,i,r){return t.baseState=i,Tf(t,Xe,typeof r=="function"?r:ha)}function Hx(t,n,i,r,l){if(au(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(m){c.listeners.push(m)}};Mt.T!==null?i(!0):c.isTransition=!1,r(c),i=n.pending,i===null?(c.next=n.pending=c,tg(n,c)):(c.next=i.next,n.pending=i.next=c)}}function tg(t,n){var i=n.action,r=n.payload,l=t.state;if(n.isTransition){var c=Mt.T,m={};m.types=c!==null?c.types:null,Mt.T=m;try{var E=i(l,r),N=Mt.S;N!==null&&N(m,E),eg(t,n,E)}catch(Z){Rf(t,n,Z)}finally{c!==null&&m.types!==null&&(c.types=m.types),Mt.T=c}}else try{c=i(l,r),eg(t,n,c)}catch(Z){Rf(t,n,Z)}}function eg(t,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(r){ng(t,n,r)},function(r){return Rf(t,n,r)}):ng(t,n,i)}function ng(t,n,i){n.status="fulfilled",n.value=i,ig(n),t.state=i,n=t.pending,n!==null&&(i=n.next,i===n?t.pending=null:(i=i.next,n.next=i,tg(t,i)))}function Rf(t,n,i){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=i,ig(n),n=n.next;while(n!==r)}t.action=null}function ig(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function ag(t,n){return n}function rg(t,n){if(_e){var i=Ye.formState;if(i!==null){t:{var r=fe;if(_e){if(Ze){e:{for(var l=Ze,c=mi;l.nodeType!==8;){if(!c){l=null;break e}if(l=_i(l.nextSibling),l===null){l=null;break e}}c=l.data,l=c==="F!"||c==="F"?l:null}if(l){Ze=_i(l.nextSibling),r=l.data==="F!";break t}}Ua(r)}r=!1}r&&(n=i[0])}}return i=In(),i.memoizedState=i.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ag,lastRenderedState:n},i.queue=r,i=Tg.bind(null,fe,r),r.dispatch=i,r=Af(!1),c=Lf.bind(null,fe,!1,r.queue),r=In(),l={state:n,dispatch:null,action:t,pending:null},r.queue=l,i=Hx.bind(null,fe,l,c,i),l.dispatch=i,r.memoizedState=t,[n,i,!1]}function sg(t){var n=on();return og(n,Xe,t)}function og(t,n,i){if(n=Tf(t,n,ag)[0],t=eu(ha)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Lo(n)}catch(m){throw m===us?ql:m}else r=n;n=on();var l=n.queue,c=l.dispatch;return i!==n.memoizedState&&(fe.flags|=2048,ds(9,{destroy:void 0},Gx.bind(null,l,i),null)),[r,c,t]}function Gx(t,n){t.action=n}function lg(t){var n=on(),i=Xe;if(i!==null)return og(n,i,t);on(),n=n.memoizedState,i=on();var r=i.queue.dispatch;return i.memoizedState=t,[n,r,!1]}function ds(t,n,i,r){return t={tag:t,create:i,deps:r,inst:n,next:null},n=fe.updateQueue,n===null&&(n=$l(),fe.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=t.next=t:(r=i.next,i.next=t,t.next=r,n.lastEffect=t),t}function ug(){return on().memoizedState}function nu(t,n,i,r){var l=In();fe.flags|=t,l.memoizedState=ds(1|n,{destroy:void 0},i,r===void 0?null:r)}function iu(t,n,i,r){var l=on();r=r===void 0?null:r;var c=l.memoizedState.inst;Xe!==null&&r!==null&&vf(r,Xe.memoizedState.deps)?l.memoizedState=ds(n,c,i,r):(fe.flags|=t,l.memoizedState=ds(1|n,c,i,r))}function cg(t,n){nu(8390656,8,t,n)}function Cf(t,n){iu(2048,8,t,n)}function Vx(t){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=$l(),fe.updateQueue=n,n.events=[t];else{var i=n.events;i===null?n.events=[t]:i.push(t)}}function fg(t){var n=on().memoizedState;return Vx({ref:n,nextImpl:t}),function(){if((Le&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function hg(t,n){return iu(4,2,t,n)}function dg(t,n){return iu(4,4,t,n)}function pg(t,n){if(typeof n=="function"){t=t();var i=n(t);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function mg(t,n,i){i=i!=null?i.concat([t]):null,iu(4,4,pg.bind(null,n,t),i)}function wf(){}function gg(t,n){var i=on();n=n===void 0?null:n;var r=i.memoizedState;return n!==null&&vf(n,r[1])?r[0]:(i.memoizedState=[t,n],t)}function _g(t,n){var i=on();n=n===void 0?null:n;var r=i.memoizedState;if(n!==null&&vf(n,r[1]))return r[0];if(r=t(),Ar){pn(!0);try{t()}finally{pn(!1)}}return i.memoizedState=[r,n],r}function Df(t,n,i){return i===void 0||(fa&1073741824)!==0&&(Ee&261930)===0?t.memoizedState=n:(t.memoizedState=i,t=R_(),fe.lanes|=t,Xa|=t,i)}function vg(t,n,i,r){return $n(i,n)?i:Ia.current!==null?(t=Df(t,i,r),$n(t,n)||(fn=!0),t):(fa&106)===0||(fa&1073741824)!==0&&(Ee&261930)===0?(fn=!0,t.memoizedState=i):(t=R_(),fe.lanes|=t,Xa|=t,n)}function Sg(t,n,i,r,l){var c=Xt.p;Xt.p=c!==0&&8>c?c:8;var m=Mt.T,E={};E.types=m!==null?m.types:null,Mt.T=E,Lf(t,!1,n,i);try{var N=l(),Z=Mt.S;if(Z!==null&&Z(E,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var rt=Ix(N,r);Oo(t,n,rt,ai(t))}else Oo(t,n,r,ai(t))}catch(pt){Oo(t,n,{then:function(){},status:"rejected",reason:pt},ai())}finally{Xt.p=c,m!==null&&E.types!==null&&(m.types=E.types),Mt.T=m}}function Xx(){}function Uf(t,n,i,r){if(t.tag!==5)throw Error(s(476));var l=xg(t).queue;Sg(t,l,n,L,i===null?Xx:function(){return yg(t),i(r)})}function xg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:L,baseState:L,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:L},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ha,lastRenderedState:i},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function yg(t){var n=xg(t);n.next===null&&(n=t.alternate.memoizedState),Oo(t,n.next.queue,{},ai())}function Nf(){return Tn(Ns)}function Mg(){return on().memoizedState}function Eg(){return on().memoizedState}function kx(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var i=ai();t=za(i);var r=Pa(n,t,i);r!==null&&(Yn(r,n,i),Co(r,n,i)),n={cache:sf()},t.payload=n;return}n=n.return}}function qx(t,n,i){var r=ai();i={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},au(t)?bg(n,i):(i=Kc(t,n,i,r),i!==null&&(Yn(i,t,r),Ag(i,n,r)))}function Tg(t,n,i){var r=ai();Oo(t,n,i,r)}function Oo(t,n,i,r){var l={lane:r,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(au(t))bg(n,l);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var m=n.lastRenderedState,E=c(m,i);if(l.hasEagerState=!0,l.eagerState=E,$n(E,m))return zl(t,n,l,0),Ye===null&&Ol(),!1}catch{}finally{}if(i=Kc(t,n,l,r),i!==null)return Yn(i,t,r),Ag(i,n,r),!0}return!1}function Lf(t,n,i,r){if(r={lane:2,revertLane:Eh(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},au(t)){if(n)throw Error(s(479))}else n=Kc(t,i,r,2),n!==null&&Yn(n,t,2)}function au(t){var n=t.alternate;return t===fe||n!==null&&n===fe}function bg(t,n){fs=Ql=!0;var i=t.pending;i===null?n.next=n:(n.next=i.next,i.next=n),t.pending=n}function Ag(t,n,i){if((i&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,i|=r,n.lanes=i,J(t,i)}}var ru={readContext:Tn,use:tu,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn,useEffectEvent:nn},Rg={readContext:Tn,use:tu,useCallback:function(t,n){return In().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:cg,useImperativeHandle:function(t,n,i){i=i!=null?i.concat([t]):null,nu(4194308,4,pg.bind(null,n,t),i)},useLayoutEffect:function(t,n){return nu(4194308,4,t,n)},useInsertionEffect:function(t,n){nu(4,2,t,n)},useMemo:function(t,n){var i=In();n=n===void 0?null:n;var r=t();if(Ar){pn(!0);try{t()}finally{pn(!1)}}return i.memoizedState=[r,n],r},useReducer:function(t,n,i){var r=In();if(i!==void 0){var l=i(n);if(Ar){pn(!0);try{i(n)}finally{pn(!1)}}}else l=n;return r.memoizedState=r.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},r.queue=t,t=t.dispatch=qx.bind(null,fe,t),[r.memoizedState,t]},useRef:function(t){var n=In();return t={current:t},n.memoizedState=t},useState:function(t){t=Af(t);var n=t.queue,i=Tg.bind(null,fe,n);return n.dispatch=i,[t.memoizedState,i]},useDebugValue:wf,useDeferredValue:function(t,n){var i=In();return Df(i,t,n)},useTransition:function(){var t=Af(!1);return t=Sg.bind(null,fe,t.queue,!0,!1),In().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,i){var r=fe,l=In();if(_e){if(i===void 0)throw Error(s(407));i=i()}else{if(i=n(),Ye===null)throw Error(s(349));(Ee&127)!==0||jm(r,n,i)}l.memoizedState=i;var c={value:i,getSnapshot:n};return l.queue=c,cg(Km.bind(null,r,c,t),[t]),r.flags|=2048,ds(9,{destroy:void 0},Zm.bind(null,r,c,i,n),null),i},useId:function(){var t=In(),n=Ye.identifierPrefix;if(_e){var i=Ii,r=Pi;i=(r&~(1<<32-Dn(r)-1)).toString(32)+i,n="_"+n+"R_"+i,i=Jl++,0<i&&(n+="H"+i.toString(32)),n+="_"}else i=Bx++,n="_"+n+"r_"+i.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Nf,useFormState:rg,useActionState:rg,useOptimistic:function(t){var n=In();n.memoizedState=n.baseState=t;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=Lf.bind(null,fe,!0,i),i.dispatch=n,[t,n]},useMemoCache:Ef,useCacheRefresh:function(){return In().memoizedState=kx.bind(null,fe)},useEffectEvent:function(t){var n=In(),i={impl:t};return n.memoizedState=i,function(){if((Le&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},Cg={readContext:Tn,use:tu,useCallback:gg,useContext:Tn,useEffect:Cf,useImperativeHandle:mg,useInsertionEffect:hg,useLayoutEffect:dg,useMemo:_g,useReducer:eu,useRef:ug,useState:function(){return eu(ha)},useDebugValue:wf,useDeferredValue:function(t,n){var i=on();return vg(i,Xe.memoizedState,t,n)},useTransition:function(){var t=eu(ha)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Lo(t),n]},useSyncExternalStore:Wm,useId:Mg,useHostTransitionStatus:Nf,useFormState:sg,useActionState:sg,useOptimistic:function(t,n){var i=on();return $m(i,Xe,t,n)},useMemoCache:Ef,useCacheRefresh:Eg,useEffectEvent:fg},Yx={readContext:Tn,use:tu,useCallback:gg,useContext:Tn,useEffect:Cf,useImperativeHandle:mg,useInsertionEffect:hg,useLayoutEffect:dg,useMemo:_g,useReducer:bf,useRef:ug,useState:function(){return bf(ha)},useDebugValue:wf,useDeferredValue:function(t,n){var i=on();return Xe===null?Df(i,t,n):vg(i,Xe.memoizedState,t,n)},useTransition:function(){var t=bf(ha)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Lo(t),n]},useSyncExternalStore:Wm,useId:Mg,useHostTransitionStatus:Nf,useFormState:lg,useActionState:lg,useOptimistic:function(t,n){var i=on();return Xe!==null?$m(i,Xe,t,n):(i.baseState=t,[t,i.queue.dispatch])},useMemoCache:Ef,useCacheRefresh:Eg,useEffectEvent:fg};function Of(t,n,i,r){n=t.memoizedState,i=i(r,n),i=i==null?n:z({},n,i),t.memoizedState=i,t.lanes===0&&(t.updateQueue.baseState=i)}var zf={enqueueSetState:function(t,n,i){t=t._reactInternals;var r=ai(),l=za(r);l.payload=n,i!=null&&(l.callback=i),n=Pa(t,l,r),n!==null&&(Yn(n,t,r),Co(n,t,r))},enqueueReplaceState:function(t,n,i){t=t._reactInternals;var r=ai(),l=za(r);l.tag=1,l.payload=n,i!=null&&(l.callback=i),n=Pa(t,l,r),n!==null&&(Yn(n,t,r),Co(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var i=ai(),r=za(i);r.tag=2,n!=null&&(r.callback=n),n=Pa(t,r,i),n!==null&&(Yn(n,t,i),Co(n,t,i))}};function wg(t,n,i,r,l,c,m){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,m):n.prototype&&n.prototype.isPureReactComponent?!xo(i,r)||!xo(l,c):!0}function Dg(t,n,i,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,r),n.state!==t&&zf.enqueueReplaceState(n,n.state,null)}function Rr(t,n){var i=n;if("ref"in n){i={};for(var r in n)r!=="ref"&&(i[r]=n[r])}if(t=t.defaultProps){i===n&&(i=z({},i));for(var l in t)i[l]===void 0&&(i[l]=t[l])}return i}function Ug(t){Ll(t)}function Ng(t){console.error(t)}function Lg(t){Ll(t)}function su(t,n){try{var i=t.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function Og(t,n,i){try{var r=t.onCaughtError;r(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Pf(t,n,i){return i=za(i),i.tag=3,i.payload={element:null},i.callback=function(){su(t,n)},i}function zg(t){return t=za(t),t.tag=3,t}function Pg(t,n,i,r){var l=i.type.getDerivedStateFromError;if(typeof l=="function"){var c=r.value;t.payload=function(){return l(c)},t.callback=function(){Og(n,i,r)}}var m=i.stateNode;m!==null&&typeof m.componentDidCatch=="function"&&(t.callback=function(){Og(n,i,r),typeof l!="function"&&(ka===null?ka=new Set([this]):ka.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function Wx(t,n,i,r,l){if(i.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=i.alternate,n!==null&&Sr(n,i,l,!0),i=bn.current,i!==null){switch(i.tag){case 31:case 13:case 19:return Nn===null?Ru():i.alternate===null&&an===0&&(an=3),i.flags&=-257,i.flags|=65536,i.lanes=l,r===Yl?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([r]):n.add(r),xh(t,r,l)),!1;case 22:return i.flags|=65536,r===Yl?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([r]):i.add(r)),xh(t,r,l)),!1}throw Error(s(435,i.tag))}return xh(t,r,l),Ru(),!1}if(_e)return n=bn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,r!==ef&&(t=Error(s(422),{cause:r}),Eo(hi(t,i)))):(r!==ef&&(n=Error(s(423),{cause:r}),Eo(hi(n,i))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,r=hi(r,i),l=Pf(t.stateNode,r,l),hf(t,l),an!==4&&(an=2)),!1;var c=Error(s(520),{cause:r});if(c=hi(c,i),Vo===null?Vo=[c]:Vo.push(c),an!==4&&(an=2),n===null)return!0;r=hi(r,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,t=l&-l,i.lanes|=t,t=Pf(i.stateNode,r,t),hf(i,t),!1;case 1:if(n=i.type,c=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ka===null||!ka.has(c))))return i.flags|=65536,l&=-l,i.lanes|=l,l=zg(l),Pg(l,t,i,r),hf(i,l),!1;break;case 22:if(i.memoizedState!==null)return i.flags|=65536,!1}i=i.return}while(i!==null);return!1}var If=Error(s(461)),fn=!1;function gn(t,n,i,r){n.child=t===null?Hm(n,null,i,r):br(n,t.child,i,r)}function Ig(t,n,i,r,l){i=i.render;var c=n.ref;if("ref"in r){var m={};for(var E in r)E!=="ref"&&(m[E]=r[E])}else m=r;return xr(n),r=Sf(t,n,i,m,c,l),E=xf(),t!==null&&!fn?(yf(t,n,l),da(t,n,l)):(_e&&E&&Fl(n),n.flags|=1,gn(t,n,r,l),n.child)}function Bg(t,n,i,r,l){if(t===null){var c=i.type;return typeof c=="function"&&!Qc(c)&&c.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=c,Fg(t,n,c,r,l)):(t=Il(i.type,null,r,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!qf(t,l)){var m=c.memoizedProps;if(i=i.compare,i=i!==null?i:xo,i(m,r)&&t.ref===n.ref)return da(t,n,l)}return n.flags|=1,t=oa(c,r),t.ref=n.ref,t.return=n,n.child=t}function Fg(t,n,i,r,l){if(t!==null){var c=t.memoizedProps;if(xo(c,r)&&t.ref===n.ref)if(fn=!1,n.pendingProps=r=c,qf(t,l))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,da(t,n,l)}return Bf(t,n,i,r,l)}function Hg(t,n,i,r){var l=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|i:i,t!==null){for(r=n.child=t.child,l=0;r!==null;)l=l|r.lanes|r.childLanes,r=r.sibling;r=l&~c}else r=0,n.child=null;return Gg(t,n,c,i,r)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&kl(n,c!==null?c.cachePool:null),c!==null?Xm(n,c):pf(),km(n);else return r=n.lanes=536870912,Gg(t,n,c!==null?c.baseLanes|i:i,i,r)}else c!==null?(kl(n,c.cachePool),Xm(n,c),Fa(),n.memoizedState=null):(t!==null&&kl(n,null),pf(),Fa());return gn(t,n,l,i),n.child}function zo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Gg(t,n,i,r,l){var c=lf();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:i,cachePool:c},t!==null&&kl(n,null),pf(),km(n),t!==null&&Sr(t,n,r,!0),n.childLanes=l,null}function ou(t,n){return n=lu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Vg(t,n,i){return br(n,t.child,null,i),t=ou(n,n.pendingProps),t.flags|=2,ti(n),n.memoizedState=null,t}function jx(t,n,i){var r=n.pendingProps,l=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(_e){if(r.mode==="hidden")return t=ou(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},zo(null,t);if(gf(n),(t=Ze)?(t=p0(t,mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},i=bm(t),i.return=n,n.child=i,Sn=n,Ze=null)):t=null,t===null)throw Ua(n);return n.lanes=536870912,null}return ou(n,r)}var c=t.memoizedState;if(c!==null){var m=c.dehydrated;if(gf(n),l)if(n.flags&256)n.flags&=-257,n=Vg(t,n,i);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||Sr(t,n,i,!1),l=(i&t.childLanes)!==0,fn||l){if(Ia.current===null){if(r=Ye,r!==null&&(m=ot(r,i),m!==0&&m!==c.retryLane))throw c.retryLane=m,mr(t,m),Yn(r,t,m),If;Ru()}n=Vg(t,n,i)}else t=c.treeContext,Ze=_i(m.nextSibling),Sn=n,_e=!0,Da=null,mi=!1,t!==null&&Cm(n,t),n=ou(n,r),n.flags|=134221824;return n}return t=oa(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ps(t,n){var i=n.ref;if(i===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(t===null||t.ref!==i)&&(n.flags|=4194816)}}function Bf(t,n,i,r,l){return xr(n),i=Sf(t,n,i,r,void 0,l),r=xf(),t!==null&&!fn?(yf(t,n,l),da(t,n,l)):(_e&&r&&Fl(n),n.flags|=1,gn(t,n,i,l),n.child)}function Xg(t,n,i,r,l,c){return xr(n),n.updateQueue=null,i=Ym(n,r,i,l),qm(t),r=xf(),t!==null&&!fn?(yf(t,n,c),da(t,n,c)):(_e&&r&&Fl(n),n.flags|=1,gn(t,n,i,c),n.child)}function kg(t,n,i,r,l){if(xr(n),n.stateNode===null){var c=as,m=i.contextType;typeof m=="object"&&m!==null&&(c=Tn(m)),c=new i(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=zf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},cf(n),m=i.contextType,c.context=typeof m=="object"&&m!==null?Tn(m):as,c.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Of(n,i,m,r),c.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(m=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),m!==c.state&&zf.enqueueReplaceState(c,c.state,null),Do(n,r,c,l),wo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var E=n.memoizedProps,N=Rr(i,E);c.props=N;var Z=c.context,rt=i.contextType;m=as,typeof rt=="object"&&rt!==null&&(m=Tn(rt));var pt=i.getDerivedStateFromProps;rt=typeof pt=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,rt||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||Z!==m)&&Dg(n,c,r,m),Oa=!1;var q=n.memoizedState;c.state=q,Do(n,r,c,l),wo(),Z=n.memoizedState,E||q!==Z||Oa?(typeof pt=="function"&&(Of(n,i,pt,r),Z=n.memoizedState),(N=Oa||wg(n,i,N,r,q,Z,m))?(rt||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=Z),c.props=r,c.state=Z,c.context=m,r=N):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,ff(t,n),m=n.memoizedProps,rt=Rr(i,m),c.props=rt,pt=n.pendingProps,q=c.context,Z=i.contextType,N=as,typeof Z=="object"&&Z!==null&&(N=Tn(Z)),E=i.getDerivedStateFromProps,(Z=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==pt||q!==N)&&Dg(n,c,r,N),Oa=!1,q=n.memoizedState,c.state=q,Do(n,r,c,l),wo();var et=n.memoizedState;m!==pt||q!==et||Oa||t!==null&&t.dependencies!==null&&Vl(t.dependencies)?(typeof E=="function"&&(Of(n,i,E,r),et=n.memoizedState),(rt=Oa||wg(n,i,rt,r,q,et,N)||t!==null&&t.dependencies!==null&&Vl(t.dependencies))?(Z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,et,N),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,et,N)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===t.memoizedProps&&q===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&q===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=et),c.props=r,c.state=et,c.context=N,r=rt):(typeof c.componentDidUpdate!="function"||m===t.memoizedProps&&q===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===t.memoizedProps&&q===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,ps(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,i=r&&typeof i.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=br(n,t.child,null,l),n.child=br(n,null,i,l)):gn(t,n,i,l),n.memoizedState=c.state,t=n.child):t=da(t,n,l),t}function qg(t,n,i,r){return _r(),n.flags|=256,gn(t,n,i,r),n.child}var Ff={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hf(t){return{baseLanes:t,cachePool:Om()}}function Gf(t,n,i){return t=t!==null?t.childLanes&~i:0,n&&(t|=ii),t}function Yg(t,n,i){var r=n.pendingProps,l=!1,c=(n.flags&128)!==0,m;if((m=c)||(m=t!==null&&t.memoizedState===null?!1:(An.current&2)!==0),m&&(l=!0,n.flags&=-129),m=(n.flags&32)!==0,n.flags&=-33,t===null){if(_e){if(l?Ba(n):Fa(),(t=Ze)?(t=p0(t,mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Pi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},i=bm(t),i.return=n,n.child=i,Sn=n,Ze=null)):t=null,t===null)throw Ua(n);return Hh(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,l?(Fa(),l=n.mode,c=lu({mode:"hidden",children:c},l),r=gr(r,l,i,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=Hf(i),r.childLanes=Gf(t,m,i),n.memoizedState=Ff,zo(null,r)):(Ba(n),Vf(n,c))}var E=t.memoizedState;if(E!==null){var N=E.dehydrated;if(N!==null)return Zx(t,n,c,m,r,N,E,i)}return l?(Fa(),l=r.fallback,c=n.mode,E=t.child,N=E.sibling,r=oa(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&1206910976,N!==null?l=oa(N,l):(l=gr(l,c,i,null),l.flags|=2),l.return=n,r.return=n,r.sibling=l,n.child=r,zo(null,r),r=n.child,l=t.child.memoizedState,l===null?l=Hf(i):(c=l.cachePool,c!==null?(E=un._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=Om(),l={baseLanes:l.baseLanes|i,cachePool:c}),r.memoizedState=l,r.childLanes=Gf(t,m,i),n.memoizedState=Ff,zo(t.child,r)):(Ba(n),i=t.child,t=i.sibling,i=oa(i,{mode:"visible",children:r.children}),i.return=n,i.sibling=null,t!==null&&(m=n.deletions,m===null?(n.deletions=[t],n.flags|=16):m.push(t)),n.child=i,n.memoizedState=null,i)}function Vf(t,n){return n=lu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function lu(t,n){return t=Vn(22,t,null,n),t.lanes=0,t}function uu(t,n,i){return br(n,t.child,null,i),t=Vf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Zx(t,n,i,r,l,c,m,E){if(i)return n.flags&256?(Ba(n),n.flags&=-257,uu(t,n,E)):n.memoizedState!==null?(Fa(),n.child=t.child,n.flags|=128,null):(Fa(),c=l.fallback,m=n.mode,l=lu({mode:"visible",children:l.children},m),c=gr(c,m,E,null),c.flags|=2,l.return=n,c.return=n,l.sibling=c,n.child=l,br(n,t.child,null,E),l=n.child,l.memoizedState=Hf(E),l.childLanes=Gf(t,r,E),n.memoizedState=Ff,zo(null,l));if(Ba(n),Hh(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var N=r.dgst;return r=N,r!==""&&(l=Error(s(419)),l.stack="",l.digest=r,Eo({value:l,source:null,stack:null})),uu(t,n,E)}if(fn||Sr(t,n,E,!1),r=(E&t.childLanes)!==0,fn||r){if(Ia.current!==null)return uu(t,n,E);if(r=Ye,r!==null&&(l=ot(r,E),l!==0&&l!==m.retryLane))throw m.retryLane=l,mr(t,l),Yn(r,t,l),If;return Fh(c)||Ru(),uu(t,n,E)}return Fh(c)?(n.flags|=192,n.child=t.child,null):(t=m.treeContext,Ze=_i(c.nextSibling),Sn=n,_e=!0,Da=null,mi=!1,t!==null&&Cm(n,t),n=Vf(n,l.children),n.flags|=134221824,n)}function Wg(t,n,i){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),Gl(t.return,n,i)}function jg(t){for(var n=null;t!==null;){var i=t.alternate;i!==null&&Kl(i)===null&&(n=t),t=t.sibling}return n}function cu(t,n,i,r,l,c){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:i,tailMode:l,treeForkCount:c}:(m.isBackwards=n,m.rendering=null,m.renderingStartTime=0,m.last=r,m.tail=i,m.tailMode=l,m.treeForkCount=c)}function Xf(t){var n=t.child;for(t.child=null;n!==null;){var i=n.sibling;n.sibling=t.child,t.child=n,n=i}}function kf(t,n,i){var r=n.pendingProps,l=r.revealOrder,c=r.tail;r=r.children;var m=An.current;if(n.flags&128)return Uo(n,m),null;var E=(m&2)!==0;if(E?(m=m&1|2,n.flags|=128):m&=1,Uo(n,m),l==="backwards"&&t!==null?(Xf(t),gn(t,n,r,i),Xf(t)):gn(t,n,r,i),r=_e?Mo:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wg(t,i,n);else if(t.tag===19)Wg(t,i,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(l){case"backwards":i=jg(n.child),i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null,Xf(n)),cu(n,!0,l,null,c,r);break;case"unstable_legacy-backwards":for(i=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&Kl(t)===null){n.child=l;break}t=l.sibling,l.sibling=i,i=l,l=t}cu(n,!0,i,null,c,r);break;case"together":cu(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:i=jg(n.child),i===null?(l=n.child,n.child=null):(l=i.sibling,i.sibling=null),cu(n,!1,l,i,c,r)}return n.child}function Zg(t,n,i){var r=n.pendingProps;return Na(n,n.type,r.value),gn(t,n,r.children,i),n.child}function da(t,n,i){if(t!==null&&(n.dependencies=t.dependencies),Xa|=n.lanes,(i&n.childLanes)===0)if(t!==null){if(Sr(t,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,i=oa(t,t.pendingProps),n.child=i,i.return=n;t.sibling!==null;)t=t.sibling,i=i.sibling=oa(t,t.pendingProps),i.return=n;i.sibling=null}return n.child}function qf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Vl(t)))}function Kx(t,n,i){switch(n.tag){case 3:U(n,n.stateNode.containerInfo),Na(n,un,t.memoizedState.cache),_r();break;case 27:case 5:nt(n);break;case 4:U(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,gf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Ba(n),n.flags|=128,null;r=Sr(t,n,i,!1);var l=n.child.childLanes;return r||(i&l)!==0?Yg(t,n,i):(Ba(n),t=da(t,n,i),t!==null?t.sibling:null)}Ba(n);break;case 19:if(n.flags&128)return kf(t,n,i);if(l=(t.flags&128)!==0,r=(i&n.childLanes)!==0,r||(Sr(t,n,i,!1),r=(i&n.childLanes)!==0),l){if(r)return kf(t,n,i);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Uo(n,An.current),r)break;return null;case 22:return n.lanes=0,Hg(t,n,i,n.pendingProps);case 24:Na(n,un,t.memoizedState.cache)}return da(t,n,i)}function Kg(t,n,i){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!qf(t,i)&&(n.flags&128)===0)return fn=!1,Kx(t,n,i);fn=(t.flags&131072)!==0}else fn=!1,_e&&(n.flags&1048576)!==0&&Rm(n,Mo,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Er(n.elementType),n.type=t,typeof t=="function")Qc(t)?(r=Rr(t,r),n.tag=1,n=kg(null,n,t,r,i)):(n.tag=0,n=Bf(null,n,t,r,i));else{if(t!=null){var l=t.$$typeof;if(l===Y){n.tag=11,n=Ig(null,n,t,r,i);break t}else if(l===vt){n.tag=14,n=Bg(null,n,t,r,i);break t}else if(l===ut){n.tag=10,n.type=t,n=Zg(null,n,i);break t}}throw n=Dt(t)||t,Error(s(306,n,""))}}return n;case 0:return Bf(t,n,n.type,n.pendingProps,i);case 1:return r=n.type,l=Rr(r,n.pendingProps),kg(t,n,r,l,i);case 3:t:{if(U(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;l=c.element,ff(t,n),Do(n,r,null,i);var m=n.memoizedState;if(r=m.cache,Na(n,un,r),r!==c.cache&&rf(n,[un],i,!0),wo(),r=m.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:m.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=qg(t,n,r,i);break t}else if(r!==l){l=hi(Error(s(424)),n),Eo(l),n=qg(t,n,r,i);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ze=_i(t.firstChild),Sn=n,_e=!0,Da=null,mi=!0,i=Hm(n,null,r,i),n.child=i;i;)i.flags=i.flags&-3|134221824,i=i.sibling}else{if(_r(),r===l){n=da(t,n,i);break t}gn(t,n,r,i)}n=n.child}return n;case 26:return ps(t,n),t===null?(i=y0(n.type,null,n.pendingProps,null))?n.memoizedState=i:_e||(n.stateNode=t0(n.type,n.pendingProps,qe.current,n)):n.memoizedState=y0(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return nt(n),t===null&&_e&&(r=n.stateNode=_0(n.type,n.pendingProps,qe.current),Sn=n,mi=!0,l=Ze,Wa(n.type)?(Gh=l,Ze=_i(r.firstChild)):Ze=l),gn(t,n,n.pendingProps.children,i),ps(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&_e&&((l=r=Ze)&&(r=ky(r,n.type,n.pendingProps,mi),r!==null?(n.stateNode=r,Sn=n,Ze=_i(r.firstChild),mi=!1,l=!0):l=!1),l||Ua(n)),nt(n),l=n.type,c=n.pendingProps,m=t!==null?t.memoizedProps:null,r=c.children,Nh(l,c)?r=null:m!==null&&Nh(l,m)&&(n.flags|=32),n.memoizedState!==null&&(l=Sf(t,n,Fx,null,null,i),Ns._currentValue=l),ps(t,n),gn(t,n,r,i),n.child;case 6:return t===null&&_e&&((t=i=Ze)&&(i=qy(i,n.pendingProps,mi),i!==null?(n.stateNode=i,Sn=n,Ze=null,t=!0):t=!1),t||Ua(n)),null;case 13:return Yg(t,n,i);case 4:return U(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=br(n,null,r,i):gn(t,n,r,i),n.child;case 11:return Ig(t,n,n.type,n.pendingProps,i);case 7:return r=n.pendingProps,ps(t,n),gn(t,n,r,i),n.child;case 8:return gn(t,n,n.pendingProps.children,i),n.child;case 12:return gn(t,n,n.pendingProps.children,i),n.child;case 10:return Zg(t,n,i);case 9:return l=n.type._context,r=n.pendingProps.children,xr(n),l=Tn(l),r=r(l),n.flags|=1,gn(t,n,r,i),n.child;case 14:return Bg(t,n,n.type,n.pendingProps,i);case 15:return Fg(t,n,n.type,n.pendingProps,i);case 19:return kf(t,n,i);case 31:return jx(t,n,i);case 22:return Hg(t,n,i,n.pendingProps);case 24:return xr(n),r=Tn(un),t===null?(l=lf(),l===null&&(l=Ye,c=sf(),l.pooledCache=c,c.refCount++,c!==null&&(l.pooledCacheLanes|=i),l=c),n.memoizedState={parent:r,cache:l},cf(n),Na(n,un,l)):((t.lanes&i)!==0&&(ff(t,n),Do(n,null,null,i),wo()),l=t.memoizedState,c=n.memoizedState,l.parent!==r?(l={parent:r,cache:r},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),Na(n,un,r)):(r=c.cache,Na(n,un,r),r!==l.cache&&rf(n,[un],i,!0))),gn(t,n,n.pendingProps.children,i),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:_e&&Fl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:ps(t,n),gn(t,n,r.children,i),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function pa(t){t.flags|=4}function Yf(t,n,i,r,l){var c;if((c=(t.mode&32)!==0)&&(c=i===null?b0(n,r):b0(n,r)&&(r.src!==i.src||r.srcSet!==i.srcSet)),c){if(t.flags|=16777216,(l&335544128)===l)if(t.stateNode.complete)t.flags|=8192;else if(U_())t.flags|=8192;else throw Tr=Yl,uf}else t.flags&=-16777217}function Qg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!A0(n))if(U_())t.flags|=8192;else throw Tr=Yl,uf}function fu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?El():536870912,t.lanes|=n,Ss|=n)}function Po(t,n){if(!_e)switch(t.tailMode){case"visible":break;case"collapsed":for(var i=t.tail,r=null;i!==null;)i.alternate!==null&&(r=i),i=i.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?t.tail=null:i.sibling=null}}function Ke(t){var n=t.alternate!==null&&t.alternate.child===t.child,i=0,r=0;if(n)for(var l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags&1206910976,r|=l.flags&1206910976,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)i|=l.lanes|l.childLanes,r|=l.subtreeFlags,r|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=r,t.childLanes=i,n}function Qx(t,n,i){var r=n.pendingProps;switch(tf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(n),null;case 1:return Ke(n),null;case 3:return i=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),ca(un),T(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(os(n)?pa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,nf())),Ke(n),null;case 26:var l=n.type,c=n.memoizedState;return t===null?(pa(n),c!==null?(Ke(n),Qg(n,c)):(Ke(n),Yf(n,l,null,r,i))):c?c!==t.memoizedState?(pa(n),Ke(n),Qg(n,c)):(Ke(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&pa(n),Ke(n),Yf(n,l,t,r,i)),null;case 27:if(dt(n),i=qe.current,l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&pa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),n.subtreeFlags&=-33554433,null}t=Ht.current,os(n)?wm(n):(t=_0(l,r,i),n.stateNode=t,pa(n))}return Ke(n),n.subtreeFlags&=-33554433,null;case 5:if(dt(n),l=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&pa(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return Ke(n),n.subtreeFlags&=-33554433,null}if(c=Ht.current,os(n))wm(n);else{var m=Wo(qe.current);switch(c){case 1:c=m.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:c=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":c=m.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":c=m.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":c=m.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?m.createElement("select",{is:r.is}):m.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?m.createElement(l,{is:r.is}):m.createElement(l)}}c[wt]=n,c[qt]=r;t:for(m=n.child;m!==null;){if(m.tag===5||m.tag===6)c.appendChild(m.stateNode);else if(m.tag!==4&&m.tag!==27&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===n)break t;for(;m.sibling===null;){if(m.return===null||m.return===n)break t;m=m.return}m.sibling.return=m.return,m=m.sibling}n.stateNode=c;t:switch(Cn(c,l,r),l){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&pa(n)}}return Ke(n),n.subtreeFlags&=-33554433,Yf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,i),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&pa(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=qe.current,os(n)){if(t=n.stateNode,i=n.memoizedProps,r=null,l=Sn,l!==null)switch(l.tag){case 27:case 5:r=l.memoizedProps}t[wt]=n,t=!!(t.nodeValue===i||r!==null&&r.suppressHydrationWarning===!0||K_(t.nodeValue,i)),t||Ua(n,!0)}else t=Wo(t).createTextNode(r),t[wt]=n,n.stateNode=t}return Ke(n),null;case 31:if(i=n.memoizedState,t===null||t.memoizedState!==null){if(r=os(n),i!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[wt]=n}else _r(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),t=!1}else i=nf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=i),t=!0;if(!t)return n.flags&256?(ti(n),n):(ti(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Ke(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=os(n),r!==null&&r.dehydrated!==null){if(t===null){if(!l)throw Error(s(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(s(317));l[wt]=n}else _r(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ke(n),l=!1}else l=nf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=l),l=!0;if(!l)return n.flags&256?(ti(n),n):(ti(n),null)}return ti(n),(n.flags&128)!==0?(n.lanes=i,n):(i=r!==null,t=t!==null&&t.memoizedState!==null,i&&(r=n.child,l=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(l=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==l&&(r.flags|=2048)),i!==t&&i&&(n.child.flags|=8192),fu(n,n.updateQueue),Ke(n),null);case 4:return T(),t===null&&Rh(n.stateNode.containerInfo),n.flags|=67108864,Ke(n),null;case 10:return ca(n.type),Ke(n),null;case 19:if(_f(n),r=n.memoizedState,r===null)return Ke(n),null;if(l=(n.flags&128)!==0,c=r.rendering,c===null)if(l)Po(r,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=Kl(t),c!==null){for(n.flags|=128,Po(r,!1),t=c.updateQueue,n.updateQueue=t,fu(n,t),n.subtreeFlags=0,t=i,i=n.child;i!==null;)Tm(i,t),i=i.sibling;return Uo(n,An.current&1|2),_e&&la(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&X()>Eu&&(n.flags|=128,l=!0,Po(r,!1),n.lanes=4194304)}else{if(!l)if(t=Kl(c),t!==null){if(n.flags|=128,l=!0,t=t.updateQueue,n.updateQueue=t,fu(n,t),Po(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!_e)return Ke(n),null}else 2*X()-r.renderingStartTime>Eu&&i!==536870912&&(n.flags|=128,l=!0,Po(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(i=t;i!==null;){if(i.alternate!==null){i=!1;break t}i=i.sibling}i=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=X(),t.sibling=null,c=An.current,c=l?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!i||_e?Uo(n,c):(i=c,ae(bn,n),ae(An,i),Nn===null&&(Nn=n)),_e&&la(n,r.treeForkCount),t}return Ke(n),null;case 22:case 23:return ti(n),mf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(i&536870912)!==0&&(n.flags&128)===0&&(Ke(n),n.subtreeFlags&6&&(n.flags|=8192)):Ke(n),i=n.updateQueue,i!==null&&fu(n,i.retryQueue),i=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==i&&(n.flags|=2048),t!==null&&Lt(Mr),null;case 24:return i=null,t!==null&&(i=t.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),ca(un),Ke(n),null;case 25:return null;case 30:return n.flags|=33554432,Ke(n),null}throw Error(s(156,n.tag))}function Jx(t,n){switch(tf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ca(un),T(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return dt(n),null;case 31:if(n.memoizedState!==null){if(ti(n),n.alternate===null)throw Error(s(340));_r()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ti(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));_r()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return _f(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return T(),null;case 10:return ca(n.type),null;case 22:case 23:return ti(n),mf(),t!==null&&Lt(Mr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ca(un),null;case 25:return null;default:return null}}function Jg(t,n){switch(tf(n),n.tag){case 3:ca(un),T();break;case 26:case 27:case 5:dt(n);break;case 4:T();break;case 31:n.memoizedState!==null&&ti(n);break;case 13:ti(n);break;case 19:_f(n);break;case 10:ca(n.type);break;case 22:case 23:ti(n),mf(),t!==null&&Lt(Mr);break;case 24:ca(un)}}function Io(t,n){try{var i=n.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&t)===t){r=void 0;var c=i.create,m=i.inst;r=c(),m.destroy=r}i=i.next}while(i!==l)}}catch(E){Be(n,n.return,E)}}function Ha(t,n,i){try{var r=n.updateQueue,l=r!==null?r.lastEffect:null;if(l!==null){var c=l.next;r=c;do{if((r.tag&t)===t){var m=r.inst,E=m.destroy;if(E!==void 0){m.destroy=void 0,l=n;var N=i,Z=E;try{Z()}catch(rt){Be(l,N,rt)}}}r=r.next}while(r!==c)}}catch(rt){Be(n,n.return,rt)}}function $g(t){var n=t.updateQueue;if(n!==null){var i=t.stateNode;try{Vm(n,i)}catch(r){Be(t,t.return,r)}}}function t_(t,n,i){i.props=Rr(t.type,t.memoizedProps),i.state=t.memoizedState;try{i.componentWillUnmount()}catch(r){Be(t,n,r)}}function Bi(t,n){try{var i=t.ref;if(i!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var l=t.stateNode,c=ra(t.memoizedProps,l);(l.ref===null||l.ref.name!==c)&&(l.ref=o0(c)),r=l.ref;break;case 7:if(t.stateNode===null){var m=new ri(t);p(t.child,!1,Vy,m,void 0,void 0),t.stateNode=m}r=t.stateNode;break;default:r=t.stateNode}typeof i=="function"?t.refCleanup=i(r):i.current=r}}catch(E){Be(t,n,E)}}function Rn(t,n){var i=t.ref,r=t.refCleanup;if(i!==null)if(typeof r=="function")try{r()}catch(l){Be(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(l){Be(t,n,l)}else i.current=null}function hu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var i=0;i<n.length;i++)d0(t.stateNode,n[i])}function e_(t){for(var n=t.return;n!==null&&(jf(n)&&d0(t.stateNode,n.stateNode),!Wf(n));)n=n.return}function Bo(t){for(var n=t.return;n!==null&&(jf(n)&&Xy(t.stateNode,n.stateNode),!Wf(n));)n=n.return}function Wf(t){return t.tag===5||t.tag===3||t.tag===27}function jf(t){return t&&t.tag===7&&t.stateNode!==null}function Zf(t){var n=t.type,i=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&r.focus();break t;case"img":i.src?r.src=i.src:i.srcSet&&(r.srcset=i.srcSet)}}catch(l){Be(t,t.return,l)}}function Kf(t,n,i){try{var r=t.stateNode;Ty(r,t.type,i,n),r[qt]=n}catch(l){Be(t,t.return,l)}}function n_(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function Qf(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||n_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Jf(t,n,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(l,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(l),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=zi)),hu(t,r),we=!0;else if(l!==4&&(l===27&&(hu(t,r),r=null,Wa(t.type)&&(i=t.stateNode,n=null)),t=t.child,t!==null))for(Jf(t,n,i,r),t=t.sibling;t!==null;)Jf(t,n,i,r),t=t.sibling}function du(t,n,i,r){var l=t.tag;if(l===5||l===6)l=t.stateNode,n?i.insertBefore(l,n):i.appendChild(l),hu(t,r),we=!0;else if(l!==4&&(l===27&&(hu(t,r),r=null,Wa(t.type)&&(i=t.stateNode)),t=t.child,t!==null))for(du(t,n,i,r),t=t.sibling;t!==null;)du(t,n,i,r),t=t.sibling}function i_(t){var n=t.stateNode,i=t.memoizedProps;try{for(var r=t.type,l=n.attributes;l.length;)n.removeAttributeNode(l[0]);Cn(n,r,i),n[wt]=t,n[qt]=i}catch(c){Be(t,t.return,c)}}var pu=!1,ei=null;function a_(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(pu=!0)}var Fi=null;function r_(){var t=Fi;return Fi=null,t}var Xn=0;function ms(t,n,i,r,l){return Xn=0,s_(t.child,n,i,r,l)}function s_(t,n,i,r,l){for(var c=!1;t!==null;){if(t.tag===5){var m=t.stateNode;if(r!==null){var E=zh(m);r.push(E),E.view&&(c=!0)}else c||zh(m).view&&(c=!0);pu=!0,r0(m,Xn===0?n:n+"_"+Xn,i),Xn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&l||s_(t.child,n,i,r,l)&&(c=!0));t=t.sibling}return c}function Hi(t,n){for(;t!==null;)t.tag===5?s0(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Hi(t.child,n)),t=t.sibling}function mu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(mu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var i=n.name;n=sa(n.default,n.share),n!=="none"&&(ms(t,i,n,null,!1)||Hi(t.child,!1))}t=t.sibling}}function $f(t,n){if(t.tag===30){var i=t.stateNode,r=t.memoizedProps,l=ra(r,i),c=sa(r.default,i.paired?r.share:r.enter);c!=="none"?ms(t,l,c,null,!1)?(mu(t),i.paired||n||Es(t,r.onEnter)):Hi(t.child,!1):mu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)$f(t,n),t=t.sibling;else mu(t)}function th(t){if(ei!==null&&ei.size!==0){var n=ei;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var i=t.memoizedProps,r=i.name;if(r!=null&&r!=="auto"){var l=n.get(r);if(l!==void 0){var c=sa(i.default,i.share);if(c!=="none"&&(ms(t,r,c,null,!1)?(c=t.stateNode,l.paired=c,c.paired=l,Es(t,i.onShare)):Hi(t.child,!1)),n.delete(r),n.size===0)break}}}th(t)}t=t.sibling}}}function eh(t){if(t.tag===30){var n=t.memoizedProps,i=ra(n,t.stateNode),r=ei!==null?ei.get(i):void 0,l=sa(n.default,r!==void 0?n.share:n.exit);l!=="none"&&(ms(t,i,l,null,!1)?r!==void 0?(l=t.stateNode,r.paired=l,l.paired=r,ei.delete(i),Es(t,n.onShare)):Es(t,n.onExit):Hi(t.child,!1)),ei!==null&&th(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)eh(t),t=t.sibling;else ei!==null&&th(t)}function o_(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,i=ra(n,t.stateNode);n=sa(n.default,n.update),t.flags&=-5,n!=="none"&&ms(t,i,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&o_(t);t=t.sibling}}function nh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Hi(t.child,!1))}nh(t)}t=t.sibling}}function gu(t){if(t.tag===30)t.stateNode.paired=null,Hi(t.child,!1),nh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)gu(t),t=t.sibling;else nh(t)}function l_(t){for(t=t.child;t!==null;)t.tag===30?Hi(t.child,!1):(t.subtreeFlags&33554432)!==0&&l_(t),t=t.sibling}function ih(t,n,i,r,l,c,m){for(var E=!1;n!==null;){if(n.tag===5){var N=n.stateNode;if(c!==null&&Xn<c.length){var Z=c[Xn],rt=zh(N);(Z.view||rt.view)&&(E=!0);var pt;if(pt=(t.flags&4)===0)if(rt.clip)pt=!0;else{pt=Z.rect;var q=rt.rect;pt=pt.y!==q.y||pt.x!==q.x||pt.height!==q.height||pt.width!==q.width}pt&&(t.flags|=4),rt.abs?rt=!Z.abs:(Z=Z.rect,rt=rt.rect,rt=Z.height!==rt.height||Z.width!==rt.width),rt&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&r0(N,Xn===0?i:i+"_"+Xn,l),E&&(t.flags&4)!==0||(Fi===null&&(Fi=[]),Fi.push(N,Xn===0?r:r+"_"+Xn,n.memoizedProps)),Xn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&m?t.flags|=n.flags&32:ih(t,n.child,i,r,l,c,m)&&(E=!0));n=n.sibling}return E}function u_(t,n){for(t=t.child;t!==null;){if(t.tag===30){var i=t.memoizedProps,r=t.stateNode,l=ra(i,r),c=sa(i.default,i.update),m;m=t.memoizedState,t.memoizedState=null,r=t;var E=t.child;Xn=0,l=ih(r,E,l,l,c,m,!1),(t.flags&4)!==0&&l&&Es(t,i.onUpdate)}else(t.subtreeFlags&33554432)!==0&&u_(t);t=t.sibling}}var xn=!1,Pe=!1,Gi=!1,ah=!1,c_=typeof WeakSet=="function"?WeakSet:Set,yn=null,Vi=!1,Fo=!1,_u=!1,rh=!1;function $x(t,n,i){if(t=t.containerInfo,Dh=Ls,t=pm(t),kc(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var l=r.getSelection&&r.getSelection();if(l&&l.rangeCount!==0){r=l.anchorNode;var c=l.anchorOffset,m=l.focusNode;l=l.focusOffset;try{r.nodeType,m.nodeType}catch{r=null;break t}var E=0,N=-1,Z=-1,rt=0,pt=0,q=t,et=null;e:for(;;){for(var Nt;q!==r||c!==0&&q.nodeType!==3||(N=E+c),q!==m||l!==0&&q.nodeType!==3||(Z=E+l),q.nodeType===3&&(E+=q.nodeValue.length),(Nt=q.firstChild)!==null;)et=q,q=Nt;for(;;){if(q===t)break e;if(et===r&&++rt===c&&(N=E),et===m&&++pt===l&&(Z=E),(Nt=q.nextSibling)!==null)break;q=et,et=q.parentNode}q=Nt}r=N===-1||Z===-1?null:{start:N,end:Z}}else r=null}r=r||{start:0,end:0}}else r=null;for(Uh={focusedElem:t,selectionRange:r},Ls=!1,i=(i&335544064)===i,yn=n,n=i?9270:1024;yn!==null;){if(t=yn,i&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)i&&eh(r[c]);if(t.alternate===null&&(t.flags&2)!==0)i&&a_(t),vu(i);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&i&&eh(r),vu(i);continue}else if(r!==null&&r.memoizedState!==null){i&&a_(t),vu(i);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,yn=r):(i&&o_(t),vu(i))}}ei=null}function vu(t){for(;yn!==null;){var n=yn,i=t,r=n.alternate,l=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((l&1024)!==0&&r!==null){i=void 0,l=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var m=Rr(n.type,l);i=c.getSnapshotBeforeUpdate(m,r),c.__reactInternalSnapshotBeforeUpdate=i}catch(E){Be(n,n.return,E)}}break;case 3:if((l&1024)!==0){if(r=n.stateNode.containerInfo,i=r.nodeType,i===9)Bh(r);else if(i===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Bh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:i&&r!==null&&(i=ra(r.memoizedProps,r.stateNode),l=n.memoizedProps,l=sa(l.default,l.update),l!=="none"&&ms(r,i,l,r.memoizedState=[],!0));break;default:if((l&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,yn=r;break}yn=n.return}}function f_(t,n,i){var r=i.flags;switch(i.tag){case 0:case 11:case 15:Xi(t,i),r&4&&Io(5,i);break;case 1:if(Xi(t,i),r&4)if(t=i.stateNode,n===null)try{t.componentDidMount()}catch(m){Be(i,i.return,m)}else{var l=Rr(i.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(m){Be(i,i.return,m)}}r&64&&$g(i),r&512&&Bi(i,i.return);break;case 3:if(Xi(t,i),r&64&&(t=i.updateQueue,t!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{Vm(t,n)}catch(m){Be(i,i.return,m)}}break;case 27:n===null&&r&4&&i_(i);case 26:case 5:Xi(t,i),n===null&&r&4&&Zf(i),r&512&&Bi(i,i.return);break;case 12:Xi(t,i);break;case 31:Xi(t,i),r&4&&m_(t,i);break;case 13:Xi(t,i),r&4&&g_(t,i),r&64&&(t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(i=fy.bind(null,i),Yy(t,i))));break;case 22:if(r=i.memoizedState!==null||xn,!r){var c=n!==null&&n.memoizedState!==null||Pe;n=xn,l=Pe,xn=r,(Pe=c)&&!l?(r=2,(i.subtreeFlags&8772)!==0&&(r|=1),bi(t,i,r)):Xi(t,i),xn=n,Pe=l}break;case 30:Xi(t,i),r&512&&Bi(i,i.return);break;case 7:r&512&&Bi(i,i.return);default:Xi(t,i)}}function sh(t,n){for(t=t.child;t!==null;)h_(t,n),t=t.sibling}function h_(t,n){switch(t.tag){case 5:case 26:try{var i=t.stateNode;if(n){var r=i.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var l=t.stateNode,c=t.memoizedProps.style,m=c!=null&&c.hasOwnProperty("display")?c.display:null;l.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(N){Be(t,t.return,N)}oh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,we=!0}catch(N){Be(t,t.return,N)}break;case 18:try{var E=t.stateNode;n?a0(E,!0):a0(t.stateNode,!1)}catch(N){Be(t,t.return,N)}break;case 22:case 23:t.memoizedState===null&&sh(t,n);break;default:sh(t,n)}}function oh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var i=t,r=n;switch(i.tag){case 4:h_(i,r);break t;case 22:i.memoizedState===null&&oh(i,r);break t;default:oh(i,r)}}t=t.sibling}}function d_(t){var n=t.alternate;n!==null&&(t.alternate=null,d_(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&te(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Je=null,kn=!1;function Ei(t,n,i){for(i=i.child;i!==null;)p_(t,n,i),i=i.sibling}function p_(t,n,i){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Me,i)}catch{}switch(i.tag){case 26:Pe||Rn(i,n),Ei(t,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&!Pe&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Pe||Rn(i,n),Bo(i);var r=Je,l=kn;Wa(i.type)&&(Je=i.stateNode,kn=!1),Ei(t,n,i),v0(i.stateNode,i.type,i.memoizedProps),Je=r,kn=l;break;case 5:Pe||Rn(i,n),Bo(i);case 6:if(i.tag===6&&Bo(i),r=Je,l=kn,Je=null,Ei(t,n,i),Je=r,kn=l,Je!==null)if(kn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(i.stateNode),we=!0}catch(c){Be(i,n,c)}else try{Je.removeChild(i.stateNode),we=!0}catch(c){Be(i,n,c)}break;case 18:Je!==null&&(kn?(t=Je,i0(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,i.stateNode),Os(t)):i0(Je,i.stateNode));break;case 4:r=Je,l=kn,Je=i.stateNode.containerInfo,kn=!0,Ei(t,n,i),Je=r,kn=l;break;case 0:case 11:case 14:case 15:Ha(2,i,n),Pe||Ha(4,i,n),Ei(t,n,i);break;case 1:Pe||(Rn(i,n),r=i.stateNode,typeof r.componentWillUnmount=="function"&&t_(i,n,r)),Ei(t,n,i);break;case 21:Ei(t,n,i);break;case 22:Pe=(r=Pe)||i.memoizedState!==null,Ei(t,n,i),Pe=r;break;case 30:Rn(i,n),Ei(t,n,i);break;case 7:Pe||Rn(i,n),Ei(t,n,i);break;default:Ei(t,n,i)}}function m_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Os(t)}catch(i){Be(n,n.return,i)}}}function g_(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Os(t)}catch(i){Be(n,n.return,i)}}function ty(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new c_),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new c_),n;default:throw Error(s(435,t.tag))}}function Su(t,n){var i=ty(t);n.forEach(function(r){if(!i.has(r)){i.add(r);var l=hy.bind(null,t,r);r.then(l,l)}})}function Bn(t,n,i){var r=n.deletions;if(r!==null)for(var l=0;l<r.length;l++){var c=r[l],m=t,E=n,N=E;t:for(;N!==null;){switch(N.tag){case 27:if(Wa(N.type)){Je=N.stateNode,kn=!1;break t}break;case 5:Je=N.stateNode,kn=!1;break t;case 3:case 4:Je=N.stateNode.containerInfo,kn=!0;break t}N=N.return}if(Je===null)throw Error(s(160));p_(m,E,c),Je=null,kn=!1,m=c.alternate,m!==null&&(m.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)__(n,t,i),n=n.sibling}var Ti=null;function __(t,n,i){var r=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(l&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var m=r[c];m.ref.impl=m.nextImpl}Bn(n,t,i),Fn(t),l&4&&(Ha(3,t,t.return),Io(3,t),Ha(5,t,t.return));break;case 1:Bn(n,t,i),Fn(t),l&512&&(Pe||r===null||Rn(r,r.return)),l&64&&xn&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(i=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=i===null?n:i.concat(n))));break;case 26:if(c=Ti,Bn(n,t,i),Fn(t),l&512&&(Pe||r===null||Rn(r,r.return)),l&4)if(l=r!==null?r.memoizedState:null,i=t.memoizedState,r===null)if(i===null)if(t.stateNode===null)if(xn)t.stateNode=t0(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,i=t.memoizedProps,l=c.ownerDocument||c;e:switch(n){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Ue]||r[wt]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(n),l.head.insertBefore(r,l.querySelector("head > title"))),Cn(r,n,i),r[wt]=t,Ce(r),n=r;break t;case"link":if(c=T0("link","href",l).get(n+(i.href||""))){for(m=0;m<c.length;m++)if(r=c[m],r.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&r.getAttribute("rel")===(i.rel==null?null:i.rel)&&r.getAttribute("title")===(i.title==null?null:i.title)&&r.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){c.splice(m,1);break e}}r=l.createElement(n),Cn(r,n,i),l.head.appendChild(r);break;case"meta":if(c=T0("meta","content",l).get(n+(i.content||""))){for(m=0;m<c.length;m++)if(r=c[m],r.getAttribute("content")===(i.content==null?null:""+i.content)&&r.getAttribute("name")===(i.name==null?null:i.name)&&r.getAttribute("property")===(i.property==null?null:i.property)&&r.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&r.getAttribute("charset")===(i.charSet==null?null:i.charSet)){c.splice(m,1);break e}}r=l.createElement(n),Cn(r,n,i),l.head.appendChild(r);break;default:throw Error(s(468,n))}r[wt]=t,Ce(r),n=r}t.stateNode=n}else xn||qh(c,t.type,t.stateNode);else t.stateNode=E0(c,i,t.memoizedProps);else l!==i?(l===null?(n=r.stateNode,n===null||Pe||n.parentNode.removeChild(n)):l.count--,i===null?xn||qh(c,t.type,t.stateNode):E0(c,i,t.memoizedProps)):i===null&&t.stateNode!==null&&Kf(t,t.memoizedProps,r.memoizedProps);break;case 27:Bn(n,t,i),Fn(t),l&512&&(Pe||r===null||Rn(r,r.return)),r!==null&&l&4&&Kf(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=Gi,Gi=!1,Bn(n,t,i),Gi=c,Fn(t),l&512&&(Pe||r===null||Rn(r,r.return)),t.flags&32){n=t.stateNode;try{Qr(n,""),we=!0}catch(rt){Be(t,t.return,rt)}}l&4&&t.stateNode!=null&&(n=t.memoizedProps,Kf(t,n,r!==null?r.memoizedProps:n)),l&1024&&(ah=!0);break;case 6:if(Bn(n,t,i),Fn(t),l&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,i=t.stateNode;try{i.nodeValue=n,we=!0}catch(rt){Be(t,t.return,rt)}}break;case 3:if(we=!1,Ou=null,c=Ti,Ti=jo(n.containerInfo),Bn(n,t,i),Ti=c,Fn(t),l&4&&r!==null&&r.memoizedState.isDehydrated)try{Os(n.containerInfo)}catch(rt){Be(t,t.return,rt)}ah&&(ah=!1,v_(t)),we=!1;break;case 4:l=Gi,Gi=xn,r=Bp(),c=Ti,Ti=jo(t.stateNode.containerInfo),Bn(n,t,i),Fn(t),Ti=c,we&&Fo&&(_u=!0),we=r,Gi=l;break;case 12:Bn(n,t,i),Fn(t);break;case 31:Bn(n,t,i),Fn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Su(t,n)));break;case 13:Bn(n,t,i),Fn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(Mu=X()),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Su(t,n)));break;case 22:c=t.memoizedState!==null,m=r!==null&&r.memoizedState!==null;var E=xn,N=Pe,Z=Gi;xn=E||c,Gi=Z||c,Pe=N||m,Bn(n,t,i),Pe=N,Gi=Z,xn=E,Fn(t),l&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||m||xn||Pe||(n=m||Pe,i=xn,r=Pe,xn=c||xn,Pe=n,Ga(t,2),xn=i,Pe=r),!c&&Gi||sh(t,c)),l&4&&(n=t.updateQueue,n!==null&&(i=n.retryQueue,i!==null&&(n.retryQueue=null,Su(t,i))));break;case 19:Bn(n,t,i),Fn(t),l&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,Su(t,n)));break;case 30:l&512&&(Pe||r===null||Rn(r,r.return)),l=Bp(),c=Fo,m=(i&335544064)===i,E=t.memoizedProps,Fo=m&&sa(E.default,E.update)!=="none",Bn(n,t,i),Fn(t),m&&r!==null&&we&&(t.flags|=4),Fo=c,we=l;break;case 21:break;case 7:l&512&&(Pe||r===null||Rn(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:Bn(n,t,i),Fn(t)}}function Fn(t){var n=t.flags;if(n&2){try{for(var i,r=t.return;r!==null;){if(n_(r)){i=r;break}r=r.return}r=null;for(var l=t.return;l!==null;){if(jf(l)){var c=l.stateNode;r===null?r=[c]:r.push(c)}if(Wf(l))break;l=l.return}var m=r;if(i==null)throw Error(s(160));switch(i.tag){case 27:var E=i.stateNode,N=Qf(t);du(t,N,E,m);break;case 5:var Z=i.stateNode;i.flags&32&&(Qr(Z,""),i.flags&=-33);var rt=Qf(t);du(t,rt,Z,m);break;case 3:case 4:var pt=i.stateNode.containerInfo,q=Qf(t);Jf(t,q,pt,m);break;default:throw Error(s(161))}}catch(et){Be(t,t.return,et)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function v_(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;v_(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Ls=!0,n.reset(),Ls=!1),t=t.sibling}}function gs(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)S_(n,t),n=n.sibling;else u_(n)}function S_(t,n){var i=t.alternate;if(i===null)$f(t,!1);else switch(t.tag){case 3:if(rh=Vi=!1,r_(),gs(n,t),!Vi&&!_u){if(t=Fi,t!==null)for(var r=0;r<t.length;r+=3){i=t[r];var l=t[r+1];s0(i,t[r+2]),i=i.ownerDocument.documentElement,i!==null&&i.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+l+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),rh=!0}Fi=null;break;case 5:gs(n,t);break;case 4:r=Vi,Vi=!1,gs(n,t),Vi&&(_u=!0),Vi=r;break;case 22:t.memoizedState===null&&(i.memoizedState!==null?$f(t,!1):gs(n,t));break;case 30:r=Vi,l=r_(),Vi=!1,gs(n,t),Vi&&(t.flags|=4);var c=t.memoizedProps,m=t.stateNode;n=ra(c,m),m=ra(i.memoizedProps,m);var E=sa(c.default,c.update);E==="none"?n=!1:(c=i.memoizedState,i.memoizedState=null,i=t.child,Xn=0,n=ih(t,i,n,m,E,c,!0),Xn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(Es(t,t.memoizedProps.onUpdate),Fi=l):l!==null&&(l.push.apply(l,Fi),Fi=l),Vi=(t.flags&32)!==0?!0:r;break;default:gs(n,t)}}function Xi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)f_(t,n.alternate,n),n=n.sibling}function Ga(t,n){for(t=t.child;t!==null;){var i=t,r=n;switch(i.tag){case 0:case 11:case 14:case 15:Ha(4,i,i.return),Ga(i,r);break;case 1:Rn(i,i.return);var l=i.stateNode;typeof l.componentWillUnmount=="function"&&t_(i,i.return,l),Ga(i,r);break;case 27:(r&2)!==0&&v0(i.stateNode,i.type,i.memoizedProps);case 5:Rn(i,i.return),i.tag!==5&&i.tag!==27||Bo(i),Ga(i,r);break;case 6:Bo(i);break;case 26:Rn(i,i.return),l=i.stateNode,i.memoizedState!==null||l===null||Pe||l.parentNode.removeChild(l),Ga(i,r);break;case 22:i.memoizedState===null&&Ga(i,r);break;case 30:Rn(i,i.return),Ga(i,r);break;case 7:Rn(i,i.return);default:Ga(i,r)}t=t.sibling}}function bi(t,n,i){for(i=(n.subtreeFlags&8772)!==0?i:i&-2,n=n.child;n!==null;){var r=n.alternate,l=t,c=n,m=c.flags,E=(i&1)!==0;switch(c.tag){case 0:case 11:case 15:bi(l,c,i),Io(4,c);break;case 1:if(bi(l,c,i),r=c,l=r.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(rt){Be(r,r.return,rt)}if(r=c,l=r.updateQueue,l!==null){var N=r.stateNode;try{var Z=l.shared.hiddenCallbacks;if(Z!==null)for(l.shared.hiddenCallbacks=null,l=0;l<Z.length;l++)Gm(Z[l],N)}catch(rt){Be(r,r.return,rt)}}E&&m&64&&$g(c),Bi(c,c.return);break;case 27:(i&2)!==0&&i_(c);case 5:c.tag!==5&&c.tag!==27||e_(c),bi(l,c,i),E&&r===null&&m&4&&Zf(c),Bi(c,c.return);break;case 6:e_(c);break;case 26:N=c.stateNode,c.memoizedState!==null||N===null||xn||qh(jo(N.ownerDocument),c.type,N),bi(l,c,i),E&&r===null&&m&4&&Zf(c),Bi(c,c.return);break;case 12:bi(l,c,i);break;case 31:bi(l,c,i),E&&m&4&&m_(l,c);break;case 13:bi(l,c,i),E&&m&4&&g_(l,c);break;case 22:c.memoizedState===null&&bi(l,c,i),Bi(c,c.return);break;case 30:bi(l,c,i),Bi(c,c.return);break;case 7:Bi(c,c.return);default:bi(l,c,i)}n=n.sibling}}function lh(t,n){var i=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==i&&(t!=null&&t.refCount++,i!=null&&To(i))}function uh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&To(t))}function gi(t,n,i,r){var l=(i&335544064)===i;if(n.subtreeFlags&(l?10262:10256))for(n=n.child;n!==null;)x_(t,n,i,r),n=n.sibling;else l&&l_(n)}function x_(t,n,i,r){var l=(i&335544064)===i;l&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&gu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:gi(t,n,i,r),c&2048&&Io(9,n);break;case 1:gi(t,n,i,r);break;case 3:gi(t,n,i,r),l&&rh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&To(c)));break;case 12:if(c&2048){gi(t,n,i,r),c=n.stateNode;try{var m=n.memoizedProps,E=m.id,N=m.onPostCommit;typeof N=="function"&&N(E,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(Z){Be(n,n.return,Z)}}else gi(t,n,i,r);break;case 31:gi(t,n,i,r);break;case 13:gi(t,n,i,r);break;case 23:break;case 22:m=n.stateNode,E=n.alternate,n.memoizedState!==null?(l&&E!==null&&E.memoizedState===null&&gu(E),m._visibility&2?gi(t,n,i,r):Ho(t,n)):(l&&E!==null&&E.memoizedState!==null&&gu(n),m._visibility&2?gi(t,n,i,r):(m._visibility|=2,_s(t,n,i,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&lh(E,n);break;case 24:gi(t,n,i,r),c&2048&&uh(n.alternate,n);break;case 30:l&&(c=n.alternate,c!==null&&(Hi(c.child,!0),Hi(n.child,!0))),gi(t,n,i,r);break;default:gi(t,n,i,r)}}function _s(t,n,i,r,l){for(l=l&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,m=n,E=i,N=r,Z=m.flags;switch(m.tag){case 0:case 11:case 15:_s(c,m,E,N,l),Io(8,m);break;case 23:break;case 22:var rt=m.stateNode;m.memoizedState!==null?rt._visibility&2?_s(c,m,E,N,l):Ho(c,m):(rt._visibility|=2,_s(c,m,E,N,l)),l&&Z&2048&&lh(m.alternate,m);break;case 24:_s(c,m,E,N,l),l&&Z&2048&&uh(m.alternate,m);break;default:_s(c,m,E,N,l)}n=n.sibling}}function Ho(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=t,r=n,l=r.flags;switch(r.tag){case 22:Ho(i,r),l&2048&&lh(r.alternate,r);break;case 24:Ho(i,r),l&2048&&uh(r.alternate,r);break;default:Ho(i,r)}n=n.sibling}}var Cr=8192;function wr(t,n,i){if(t.subtreeFlags&Cr)for(t=t.child;t!==null;)y_(t,n,i),t=t.sibling}function y_(t,n,i){switch(t.tag){case 26:wr(t,n,i),t.flags&Cr&&(t.memoizedState!==null?sM(i,Ti,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&C0(i,t)));break;case 5:wr(t,n,i),t.flags&Cr&&(t=t.stateNode,(n&335544128)===n&&C0(i,t));break;case 3:case 4:var r=Ti;Ti=jo(t.stateNode.containerInfo),wr(t,n,i),Ti=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=Cr,Cr=16777216,wr(t,n,i),Cr=r):wr(t,n,i));break;case 30:if((t.flags&Cr)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var l=t.stateNode;l.paired=null,ei===null&&(ei=new Map),ei.set(r,l)}wr(t,n,i);break;default:wr(t,n,i)}}function M_(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Go(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];yn=r,T_(r,t)}M_(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)E_(t),t=t.sibling}function E_(t){switch(t.tag){case 0:case 11:case 15:Go(t),t.flags&2048&&Ha(9,t,t.return);break;case 3:Go(t);break;case 12:Go(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,xu(t)):Go(t);break;default:Go(t)}}function xu(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];yn=r,T_(r,t)}M_(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ha(8,n,n.return),xu(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,xu(n));break;default:xu(n)}t=t.sibling}}function T_(t,n){for(;yn!==null;){var i=yn;switch(i.tag){case 0:case 11:case 15:Ha(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var r=i.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:To(i.memoizedState.cache)}if(r=i.child,r!==null)r.return=i,yn=r;else t:for(i=t;yn!==null;){r=yn;var l=r.sibling,c=r.return;if(d_(r),r===i){yn=null;break t}if(l!==null){l.return=c,yn=l;break t}yn=c}}}var ey={getCacheForType:function(t){var n=Tn(un),i=n.data.get(t);return i===void 0&&(i=t(),n.data.set(t,i)),i},cacheSignal:function(){return Tn(un).controller.signal}},ny=typeof WeakMap=="function"?WeakMap:Map,Le=0,Ye=null,xe=null,Ee=0,Ie=0,ni=null,Va=!1,vs=!1,ch=!1,ma=0,an=0,Xa=0,Dr=0,yu=0,ii=0,Ss=0,Vo=null,qn=null,fh=!1,Mu=0,b_=0,Eu=1/0,Tu=null,ka=null,tn=0,Ai=null,Ur=null,ki=0,hh=0,dh=null,A_=null,xs=null,ys=null,Ms=null,Xo=0,bu=null;function ai(){return(Le&2)!==0&&Ee!==0?Ee&-Ee:Mt.T!==null?Eh():bt()}function R_(){if(ii===0)if((Ee&536870912)===0||_e){var t=na;na<<=1,(na&3932160)===0&&(na=262144),ii=t}else ii=536870912;return t=bn.current,t!==null&&(t.flags|=32),ii}function Es(t,n){if(n!=null){var i=t.stateNode,r=i.ref;r===null&&(r=i.ref=o0(ra(t.memoizedProps,i))),ys===null&&(ys=[]),ys.push(n.bind(null,r))}}function Yn(t,n,i){(t===Ye&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)&&(Ts(t,0),qa(t,Ee,ii,!1)),hr(t,i),((Le&2)===0||t!==Ye)&&(t===Ye&&((Le&2)===0&&(Dr|=i),an===4&&qa(t,Ee,ii,!1)),qi(t))}function C_(t,n,i){if((Le&6)!==0)throw Error(s(327));var r=!i&&(n&127)===0&&(n&t.expiredLanes)===0||ba(t,n),l=r?ry(t,n):mh(t,n,!0),c=r;do{if(l===0){vs&&!r&&qa(t,n,0,!1);break}else{if(i=t.current.alternate,c&&!iy(i)){l=mh(t,n,!1),c=!1;continue}if(l===2){if(c=n,t.errorRecoveryDisabledLanes&c)var m=0;else m=t.pendingLanes&-536870913,m=m!==0?m:m&536870912?536870912:0;if(m!==0){n=m;t:{var E=t;l=Vo;var N=E.current.memoizedState.isDehydrated;if(N&&(Ts(E,m).flags|=256),m=mh(E,m,!1),m!==2&&m!==6){if(ch&&!N){E.errorRecoveryDisabledLanes|=c,Dr|=c,l=4;break t}c=qn,qn=l,c!==null&&(qn===null?qn=c:qn.push.apply(qn,c))}l=m}if(c=!1,l!==2)continue}}if(l===1){Ts(t,0),qa(t,n,0,!0);break}t:{switch(r=t,c=l,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:qa(r,n,ii,!Va);break t;case 2:qn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(l=Mu+300-X(),10<l)){if(qa(r,n,ii,!Va),fr(r,0,!0)!==0)break t;ki=n,r.timeoutHandle=Oh(w_.bind(null,r,i,qn,Tu,fh,n,ii,Dr,Ss,Va,c,"Throttled",-0,0),l);break t}w_(r,i,qn,Tu,fh,n,ii,Dr,Ss,Va,c,null,-0,0)}}break}while(!0);qi(t)}function w_(t,n,i,r,l,c,m,E,N,Z,rt,pt,q,et){t.timeoutHandle=-1;var Nt=n.subtreeFlags,Yt=(c&335544064)===c;if(pt=null,(Yt||Nt&8192||(Nt&16785408)===16785408)&&(pt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zi},ei=null,y_(n,c,pt),Yt&&(Nt=pt,Yt=t.containerInfo,Yt=(Yt.nodeType===9?Yt:Yt.ownerDocument).__reactViewTransition,Yt!=null&&(Nt.count++,Nt.waitingForViewTransition=!0,Nt=Qo.bind(Nt),Yt.finished.then(Nt,Nt))),Nt=(c&62914560)===c?Mu-X():(c&4194048)===c?b_-X():0,Nt=oM(pt,Nt),Nt!==null)){ki=c,t.cancelPendingCommit=Nt(I_.bind(null,t,n,c,i,r,l,m,E,N,Z,rt,pt,null,q,et)),qa(t,c,m,!Z);return}I_(t,n,c,i,r,l,m,E,N,Z,rt,pt)}function iy(t){for(var n=t;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var r=0;r<i.length;r++){var l=i[r],c=l.getSnapshot;l=l.value;try{if(!$n(c(),l))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qa(t,n,i,r){n=Ml(t,n),n&=~yu,n&=~Dr,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var l=n;0<l;){var c=31-Dn(l),m=1<<c;r[c]=-1,l&=~m}i!==0&&A(t,i,n)}function Au(){return(Le&6)===0?(ko(0),!1):!0}function ph(){if(xe!==null){if(Ie===0)var t=xe.return;else t=xe,ua=vr=null,Mf(t),cs=null,Ro=0,t=xe;for(;t!==null;)Jg(t.alternate,t),t=t.return;xe=null}}function Ts(t,n){var i=t.timeoutHandle;return i!==-1&&(t.timeoutHandle=-1,Ry(i)),i=t.cancelPendingCommit,i!==null&&(t.cancelPendingCommit=null,i()),ki=0,ph(),Ye=t,xe=i=oa(t.current,null),Ee=n,Ie=0,ni=null,Va=!1,vs=ba(t,n),ch=!1,Ss=ii=yu=Dr=Xa=an=0,qn=Vo=null,fh=!1,ma=Ml(t,n),Ol(),i}function D_(t,n){fe=null,Mt.H=ru,n===us||n===ql?(n=Im(),Ie=3):n===uf?(n=Im(),Ie=4):Ie=n===If?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ni=n,xe===null&&(an=1,su(t,hi(n,t.current)))}function U_(){var t=bn.current;return t===null?!0:(Ee&4194048)===Ee?Nn===null:(Ee&62914560)===Ee||(Ee&536870912)!==0?t===Nn:!1}function N_(){var t=Mt.H;return Mt.H=ru,t===null?ru:t}function L_(){var t=Mt.A;return Mt.A=ey,t}function Ru(){an=4,Va||(Ee&4194048)!==Ee&&bn.current!==null||(vs=!0),(Xa&134217727)===0&&(Dr&134217727)===0||Ye===null||qa(Ye,Ee,ii,!1)}function mh(t,n,i){var r=Le;Le|=2;var l=N_(),c=L_();(Ye!==t||Ee!==n)&&(Tu=null,Ts(t,n)),n=!1;var m=an;t:do try{if(Ie!==0&&xe!==null){var E=xe,N=ni;switch(Ie){case 8:ph(),m=6;break t;case 3:case 2:case 9:case 6:bn.current===null&&(n=!0);var Z=Ie;if(Ie=0,ni=null,bs(t,E,N,Z),i&&vs){m=0;break t}break;default:Z=Ie,Ie=0,ni=null,bs(t,E,N,Z)}}ay(),m=an;break}catch(rt){D_(t,rt)}while(!0);return n&&t.shellSuspendCounter++,ua=vr=null,Le=r,Mt.H=l,Mt.A=c,xe===null&&(Ye=null,Ee=0,Ol()),m}function ay(){for(;xe!==null;)O_(xe)}function ry(t,n){var i=Le;Le|=2;var r=N_(),l=L_();Ye!==t||Ee!==n?(Tu=null,Eu=X()+500,Ts(t,n)):vs=ba(t,n);t:do try{if(Ie!==0&&xe!==null){n=xe;var c=ni;e:switch(Ie){case 1:Ie=0,ni=null,bs(t,n,c,1);break;case 2:case 9:if(zm(c)){Ie=0,ni=null,z_(n);break}n=function(){Ie!==2&&Ie!==9||Ye!==t||(Ie=7),qi(t)},c.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:zm(c)?(Ie=0,ni=null,z_(n)):(Ie=0,ni=null,bs(t,n,c,7));break;case 5:var m=null;switch(xe.tag){case 26:m=xe.memoizedState;case 5:case 27:var E=xe;if(m?A0(m):E.stateNode.complete){Ie=0,ni=null;var N=E.sibling;if(N!==null)xe=N;else{var Z=E.return;Z!==null?(xe=Z,Cu(Z)):xe=null}break e}}Ie=0,ni=null,bs(t,n,c,5);break;case 6:Ie=0,ni=null,bs(t,n,c,6);break;case 8:ph(),an=6;break t;default:throw Error(s(462))}}sy();break}catch(rt){D_(t,rt)}while(!0);return ua=vr=null,Mt.H=r,Mt.A=l,Le=i,xe!==null?0:(Ye=null,Ee=0,Ol(),an)}function sy(){for(;xe!==null&&!zt();)O_(xe)}function O_(t){var n=Kg(t.alternate,t,ma);t.memoizedProps=t.pendingProps,n===null?Cu(t):xe=n}function z_(t){var n=t,i=n.alternate;switch(n.tag){case 15:case 0:n=Xg(i,n,n.pendingProps,n.type,void 0,Ee);break;case 11:n=Xg(i,n,n.pendingProps,n.type.render,n.ref,Ee);break;case 5:Mf(n);var r=n;r===Sn&&(_e?(Hl(r),r.tag===5&&r.stateNode!=null&&(Ze=r.stateNode)):(Hl(r),_e=!0));default:Jg(i,n),n=xe=Tm(n,ma),n=Kg(i,n,ma)}t.memoizedProps=t.pendingProps,n===null?Cu(t):xe=n}function bs(t,n,i,r){ua=vr=null,Mf(n),cs=null,Ro=0;var l=n.return;try{if(Wx(t,l,n,i,Ee)){an=1,su(t,hi(i,t.current)),xe=null;return}}catch(c){if(l!==null)throw xe=l,c;an=1,su(t,hi(i,t.current)),xe=null;return}n.flags&32768?(_e||r===1?t=!0:vs||(Ee&536870912)!==0?t=!1:(Va=t=!0,(r===2||r===9||r===3||r===6)&&(r=bn.current,r!==null&&r.tag===13&&(r.flags|=16384))),P_(n,t)):Cu(n)}function Cu(t){var n=t;do{if((n.flags&32768)!==0){P_(n,Va);return}t=n.return;var i=Qx(n.alternate,n,ma);if(i!==null){xe=i;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=t}while(n!==null);an===0&&(an=5)}function P_(t,n){do{var i=Jx(t.alternate,t);if(i!==null){i.flags&=32767,xe=i;return}if(i=t.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(t=t.sibling,t!==null)){xe=t;return}xe=t=i}while(t!==null);an=6,xe=null}function I_(t,n,i,r,l,c,m,E,N,Z,rt,pt){t.cancelPendingCommit=null;do wu();while(tn!==0);if((Le&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===Ye&&(xe=Ye=null,Ee=0),Ur=n,Ai=t,ki=i,dh=l,A_=r,oy(t,n,i,m,E,N,pt)}}function oy(t,n,i,r,l,c,m){var E=n.lanes|n.childLanes;if(hh=E,E|=Zc,Ac(t,i,E,r,l,c),ys=null,(i&335544064)===i?(Ms=zx(t),r=10262):(Ms=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,dy(Et,function(){return Sh(),null})):(t.callbackNode=null,t.callbackPriority=0),pu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=Mt.T,Mt.T=null,l=Xt.p,Xt.p=2,c=Le,Le|=4;try{$x(t,n,i)}finally{Le=c,Xt.p=l,Mt.T=r}}tn=1,pu?xs=Ly(m,t.containerInfo,Ms,gh,_h,uy,vh,Sh,ly):(gh(),_h(),vh())}function ly(t){if(tn!==0){var n=Ai.onRecoverableError;n(t,{componentStack:null})}}function uy(){tn===3&&(tn=0,S_(Ur,Ai),tn=4)}function gh(){if(tn===1){tn=0;var t=Ai,n=Ur,i=ki,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=Mt.T,Mt.T=null;var l=Xt.p;Xt.p=2;var c=Le;Le|=4;try{Fo=_u=!1,__(n,t,i),i=Uh;var m=pm(t.containerInfo),E=i.focusedElem,N=i.selectionRange;if(m!==E&&E&&E.ownerDocument&&dm(E.ownerDocument.documentElement,E)){if(N!==null&&kc(E)){var Z=N.start,rt=N.end;if(rt===void 0&&(rt=Z),"selectionStart"in E)E.selectionStart=Z,E.selectionEnd=Math.min(rt,E.value.length);else{var pt=E.ownerDocument||document,q=pt&&pt.defaultView||window;if(q.getSelection){var et=q.getSelection(),Nt=E.textContent.length,Yt=Math.min(N.start,Nt),he=N.end===void 0?Yt:Math.min(N.end,Nt);!et.extend&&Yt>he&&(m=he,he=Yt,Yt=m);var W=hm(E,Yt),H=hm(E,he);if(W&&H&&(et.rangeCount!==1||et.anchorNode!==W.node||et.anchorOffset!==W.offset||et.focusNode!==H.node||et.focusOffset!==H.offset)){var tt=pt.createRange();tt.setStart(W.node,W.offset),et.removeAllRanges(),Yt>he?(et.addRange(tt),et.extend(H.node,H.offset)):(tt.setEnd(H.node,H.offset),et.addRange(tt))}}}}for(pt=[],et=E;et=et.parentNode;)et.nodeType===1&&pt.push({element:et,left:et.scrollLeft,top:et.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<pt.length;E++){var ht=pt[E];ht.element.scrollLeft=ht.left,ht.element.scrollTop=ht.top}}Ls=!!Dh,Uh=Dh=null}finally{Le=c,Xt.p=l,Mt.T=r}}t.current=n,tn=2}}function _h(){if(tn===2){tn=0;var t=Ai,n=Ur,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=Mt.T,Mt.T=null;var r=Xt.p;Xt.p=2;var l=Le;Le|=4;try{f_(t,n.alternate,n)}finally{Le=l,Xt.p=r,Mt.T=i}}tn=3}}function vh(){if(tn===4||tn===3){tn=0;var t=xs;xs=null,ce();var n=Ai,i=Ur,r=ki,l=A_,c=(r&335544064)===r?10262:10256;if((i.subtreeFlags&c)!==0||(i.flags&c)!==0?tn=5:(tn=0,Ur=Ai=null,B_(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(ka=null),$(r),i=i.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Me,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=Mt.T,c=Xt.p,Xt.p=2,Mt.T=null;try{for(var m=n.onRecoverableError,E=0;E<l.length;E++){var N=l[E];m(N.value,{componentStack:N.stack})}}finally{Mt.T=i,Xt.p=c}}if(l=ys,m=Ms,Ms=null,l!==null&&(ys=null,m===null&&(m=[]),t!==null))for(N=0;N<l.length;N++)i=(0,l[N])(m),i!==void 0&&t.finished.finally(i);(ki&3)!==0&&wu(),qi(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===bu?Xo++:(Xo=0,bu=n):(Xo=0,bu=null),ko(0)}}function B_(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,To(n)))}function wu(){return xs!==null&&(xs.skipTransition(),xs=null),gh(),_h(),vh(),Sh()}function Sh(){if(tn!==5)return!1;var t=Ai,n=hh;hh=0;var i=$(ki),r=Mt.T,l=Xt.p;try{Xt.p=32>i?32:i,Mt.T=null,i=dh,dh=null;var c=Ai,m=ki;if(tn=0,Ur=Ai=null,ki=0,(Le&6)!==0)throw Error(s(331));var E=Le;if(Le|=4,E_(c.current),x_(c,c.current,m,i),Le=E,ko(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Me,c)}catch{}return!0}finally{Xt.p=l,Mt.T=r,B_(t,n)}}function F_(t,n,i){n=hi(i,n),n=Pf(t.stateNode,n,2),t=Pa(t,n,2),t!==null&&(hr(t,2),qi(t))}function Be(t,n,i){if(t.tag===3)F_(t,t,i);else for(;n!==null;){if(n.tag===3){F_(n,t,i);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ka===null||!ka.has(r))){t=hi(i,t),i=zg(2),r=Pa(n,i,2),r!==null&&(Pg(i,r,n,t),hr(r,2),qi(r));break}}n=n.return}}function xh(t,n,i){var r=t.pingCache;if(r===null){r=t.pingCache=new ny;var l=new Set;r.set(n,l)}else l=r.get(n),l===void 0&&(l=new Set,r.set(n,l));l.has(i)||(ch=!0,l.add(i),t=cy.bind(null,t,n,i),n.then(t,t))}function cy(t,n,i){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&i,t.warmLanes&=~i,Ye===t&&(Ee&i)===i&&((an===4||an===3&&(Ee&62914560)===Ee&&300>X()-Mu)&&(Le&2)===0?Ts(t,0):yu|=i,Ss===Ee&&(Ss=0)),qi(t)}function H_(t,n){n===0&&(n=El()),t=mr(t,n),t!==null&&(hr(t,n),qi(t))}function fy(t){var n=t.memoizedState,i=0;n!==null&&(i=n.retryLane),H_(t,i)}function hy(t,n){var i=0;switch(t.tag){case 31:case 13:var r=t.stateNode,l=t.memoizedState;l!==null&&(i=l.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),H_(t,i)}function dy(t,n){return ie(t,n)}var As=null,Rs=null,yh=!1,Du=!1,Mh=!1,Ya=0;function qi(t){t!==Rs&&t.next===null&&(Rs===null?As=Rs=t:Rs=Rs.next=t),Du=!0,yh||(yh=!0,my())}function ko(t,n){if(!Mh&&Du){Mh=!0;do for(var i=!1,r=As;r!==null;){if(t!==0){var l=r.pendingLanes;if(l===0)var c=0;else{var m=r.suspendedLanes,E=r.pingedLanes;c=(1<<31-Dn(42|t)+1)-1,c&=l&~(m&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(i=!0,k_(r,c))}else c=Ee,c=fr(r,r===Ye?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||ba(r,c)||(i=!0,k_(r,c));r=r.next}while(i);Mh=!1}}function py(){G_()}function G_(){Du=yh=!1;var t=0;Ya!==0&&Ay()&&(t=Ya);for(var n=X(),i=null,r=As;r!==null;){var l=r.next,c=V_(r,n);c===0?(r.next=null,i===null?As=l:i.next=l,l===null&&(Rs=i)):(i=r,(t!==0||(c&3)!==0)&&(Du=!0)),r=l}tn!==0&&tn!==5||ko(t),Ya!==0&&(Ya=0)}function V_(t,n){for(var i=t.suspendedLanes,r=t.pingedLanes,l=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var m=31-Dn(c),E=1<<m,N=l[m];N===-1?((E&i)===0||(E&r)!==0)&&(l[m]=bc(E,n)):N<=n&&(t.expiredLanes|=E),c&=~E}if(n=Ye,i=Ee,i=fr(t,t===n?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,i===0||t===n&&(Ie===2||Ie===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&Zt(r),t.callbackNode=null,t.callbackPriority=0;if((i&3)===0||ba(t,i)){if(n=i&-i,n===t.callbackPriority)return n;switch(r!==null&&Zt(r),$(i)){case 2:case 8:i=Vt;break;case 32:i=Et;break;case 268435456:i=Wt;break;default:i=Et}return r=X_.bind(null,t),i=ie(i,r),t.callbackPriority=n,t.callbackNode=i,n}return r!==null&&r!==null&&Zt(r),t.callbackPriority=2,t.callbackNode=null,2}function X_(t,n){if(tn!==0&&tn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var i=t.callbackNode;if(wu()&&t.callbackNode!==i)return null;var r=Ee;return r=fr(t,t===Ye?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(C_(t,r,n),V_(t,X()),t.callbackNode!=null&&t.callbackNode===i?X_.bind(null,t):null)}function k_(t,n){if(wu())return null;C_(t,n,!0)}function my(){Cy(function(){(Le&6)!==0?ie(Ut,py):G_()})}function Eh(){if(Ya===0){var t=yr;t===0&&(t=ur,ur<<=1,(ur&261888)===0&&(ur=256)),Ya=t}return Ya}function q_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Al(t)}function gy(t,n,i,r,l){if(n==="submit"&&i&&i.stateNode===l){var c=q_((l[qt]||null).action),m=r.submitter;m&&(n=(n=m[qt]||null)?q_(n.formAction):m.getAttribute("formAction"),n!==null&&(c=n,m=null));var E=new Dl("action","action",null,r,l);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ya!==0){var N=new FormData(l,m);Uf(i,{pending:!0,data:N,method:l.method,action:c},null,N)}}else typeof c=="function"&&(E.preventDefault(),N=new FormData(l,m),Uf(i,{pending:!0,data:N,method:l.method,action:c},c,N))},currentTarget:l}]})}}for(var Th=0;Th<jc.length;Th++){var bh=jc[Th],_y=bh.toLowerCase(),vy=bh[0].toUpperCase()+bh.slice(1);Mi(_y,"on"+vy)}Mi(_m,"onAnimationEnd"),Mi(vm,"onAnimationIteration"),Mi(Sm,"onAnimationStart"),Mi("dblclick","onDoubleClick"),Mi("focusin","onFocus"),Mi("focusout","onBlur"),Mi(Rx,"onTransitionRun"),Mi(Cx,"onTransitionStart"),Mi(wx,"onTransitionCancel"),Mi(xm,"onTransitionEnd"),en("onMouseEnter",["mouseout","mouseover"]),en("onMouseLeave",["mouseout","mouseover"]),en("onPointerEnter",["pointerout","pointerover"]),en("onPointerLeave",["pointerout","pointerover"]),ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qo));function Y_(t,n){n=(n&4)!==0;for(var i=0;i<t.length;i++){var r=t[i],l=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var m=r.length-1;0<=m;m--){var E=r[m],N=E.instance,Z=E.currentTarget;if(E=E.listener,N!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=Z;try{c(l)}catch(rt){Ll(rt)}l.currentTarget=null,c=N}else for(m=0;m<r.length;m++){if(E=r[m],N=E.instance,Z=E.currentTarget,E=E.listener,N!==c&&l.isPropagationStopped())break t;c=E,l.currentTarget=Z;try{c(l)}catch(rt){Ll(rt)}l.currentTarget=null,c=N}}}}function ye(t,n){var i=n[$t];i===void 0&&(i=n[$t]=new Set);var r=t+"__bubble";i.has(r)||(W_(n,t,2,!1),i.add(r))}function Ah(t,n,i){var r=0;n&&(r|=4),W_(i,t,r,n)}var Uu="_reactListening"+Math.random().toString(36).slice(2);function Rh(t){if(!t[Uu]){t[Uu]=!0,je.forEach(function(i){i!=="selectionchange"&&(Sy.has(i)||Ah(i,!1,t),Ah(i,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Uu]||(n[Uu]=!0,Ah("selectionchange",!1,n))}}function W_(t,n,i,r){switch(P0(n)){case 2:var l=fM;break;case 8:l=hM;break;default:l=Wh}i=l.bind(null,n,i,t),l=void 0,!Oc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),r?l!==void 0?t.addEventListener(n,i,{capture:!0,passive:l}):t.addEventListener(n,i,!0):l!==void 0?t.addEventListener(n,i,{passive:l}):t.addEventListener(n,i,!1)}function Ch(t,n,i,r,l){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var m=r.tag;if(m===3||m===4){var E=r.stateNode.containerInfo;if(E===l)break;if(m===4)for(m=r.return;m!==null;){var N=m.tag;if((N===3||N===4)&&m.stateNode.containerInfo===l)return;m=m.return}for(;E!==null;){if(m=Ne(E),m===null)return;if(N=m.tag,N===5||N===6||N===26||N===27){r=c=m;continue t}E=E.parentNode}}r=r.return}Wp(function(){var Z=c,rt=Nc(i),pt=[];t:{var q=ym.get(t);if(q!==void 0){var et=Dl,Nt=t;switch(t){case"keypress":if(Cl(i)===0)break t;case"keydown":case"keyup":et=ix;break;case"focusin":Nt="focus",et=Bc;break;case"focusout":Nt="blur",et=Bc;break;case"beforeblur":case"afterblur":et=Bc;break;case"click":if(i.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":et=Kp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":et=qS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":et=lx;break;case _m:case vm:case Sm:et=jS;break;case xm:et=cx;break;case"scroll":case"scrollend":et=XS;break;case"wheel":et=hx;break;case"copy":case"cut":case"paste":et=KS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":et=Jp;break;case"submit":et=sx;break;case"toggle":case"beforetoggle":et=px}var Yt=(n&4)!==0,he=!Yt&&(t==="scroll"||t==="scrollend"),W=Yt?q!==null?q+"Capture":null:q;Yt=[];for(var H=Z,tt;H!==null;){var ht=H;if(tt=ht.stateNode,ht=ht.tag,ht!==5&&ht!==26&&ht!==27||tt===null||W===null||(ht=ho(H,W),ht!=null&&Yt.push(Yo(H,ht,tt))),he)break;H=H.return}0<Yt.length&&(q=new et(q,Nt,null,i,rt),pt.push({event:q,listeners:Yt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",q=t==="mouseout"||t==="pointerout",et&&i!==Uc&&(Nt=i.relatedTarget||i.fromElement)&&(Ne(Nt)||Nt[ee]))break t;(q||et)&&(Nt=rt.window===rt?rt:(et=rt.ownerDocument)?et.defaultView||et.parentWindow:window,q?(et=i.relatedTarget||i.toElement,q=Z,et=et?Ne(et):null,et!==null&&(he=f(et),Yt=et.tag,et!==he||Yt!==5&&Yt!==27&&Yt!==6)&&(et=null)):(q=null,et=Z),q!==et&&(Yt=Kp,ht="onMouseLeave",W="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Yt=Jp,ht="onPointerLeave",W="onPointerEnter",H="pointer"),he=q==null?Nt:mn(q),tt=et==null?Nt:mn(et),Nt=new Yt(ht,H+"leave",q,i,rt),Nt.target=he,Nt.relatedTarget=tt,ht=null,Ne(rt)===Z&&(Yt=new Yt(W,H+"enter",et,i,rt),Yt.target=tt,Yt.relatedTarget=he,ht=Yt),he=ht,Yt=q&&et?F(q,et,xy):null,q!==null&&j_(pt,Nt,q,Yt,!1),et!==null&&he!==null&&j_(pt,he,et,Yt,!0)))}t:{if(q=Z?mn(Z):window,et=q.nodeName&&q.nodeName.toLowerCase(),et==="select"||et==="input"&&q.type==="file")var Gt=sm;else if(am(q))if(om)Gt=Tx;else{Gt=Mx;var Te=yx}else et=q.nodeName,!et||et.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?Z&&Dc(Z.elementType)&&(Gt=sm):Gt=Ex;if(Gt&&(Gt=Gt(t,Z))){rm(pt,Gt,i,rt);break t}Te&&Te(t,q,Z)}switch(Te=Z?mn(Z):window,t){case"focusin":(am(Te)||Te.contentEditable==="true")&&(es=Te,qc=Z,yo=null);break;case"focusout":yo=qc=es=null;break;case"mousedown":Yc=!0;break;case"contextmenu":case"mouseup":case"dragend":Yc=!1,mm(pt,i,rt);break;case"selectionchange":if(Ax)break;case"keydown":case"keyup":mm(pt,i,rt)}var Jt;if(Hc)t:{switch(t){case"compositionstart":var re="onCompositionStart";break t;case"compositionend":re="onCompositionEnd";break t;case"compositionupdate":re="onCompositionUpdate";break t}re=void 0}else ts?nm(t,i)&&(re="onCompositionEnd"):t==="keydown"&&i.keyCode===229&&(re="onCompositionStart");re&&($p&&i.locale!=="ko"&&(ts||re!=="onCompositionStart"?re==="onCompositionEnd"&&ts&&(Jt=jp()):(Ra=rt,zc="value"in Ra?Ra.value:Ra.textContent,ts=!0)),Te=Nu(Z,re),0<Te.length&&(re=new Qp(re,t,null,i,rt),pt.push({event:re,listeners:Te}),Jt?re.data=Jt:(Jt=im(i),Jt!==null&&(re.data=Jt)))),(Jt=gx?_x(t,i):vx(t,i))&&(re=Nu(Z,"onBeforeInput"),0<re.length&&(Te=new Qp("onBeforeInput","beforeinput",null,i,rt),pt.push({event:Te,listeners:re}),Te.data=Jt)),gy(pt,t,Z,i,rt)}Y_(pt,n)})}function Yo(t,n,i){return{instance:t,listener:n,currentTarget:i}}function Nu(t,n){for(var i=n+"Capture",r=[];t!==null;){var l=t,c=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||c===null||(l=ho(t,i),l!=null&&r.unshift(Yo(t,l,c)),l=ho(t,n),l!=null&&r.push(Yo(t,l,c))),t.tag===3)return r;t=t.return}return[]}function xy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function j_(t,n,i,r,l){for(var c=n._reactName,m=[];i!==null&&i!==r;){var E=i,N=E.alternate,Z=E.stateNode;if(E=E.tag,N!==null&&N===r)break;E!==5&&E!==26&&E!==27||Z===null||(N=Z,l?(Z=ho(i,c),Z!=null&&m.unshift(Yo(i,Z,N))):l||(Z=ho(i,c),Z!=null&&m.push(Yo(i,Z,N)))),i=i.return}m.length!==0&&t.push({event:n,listeners:m})}var yy=/\r\n?/g,My=/\u0000|\uFFFD/g;function Z_(t){return(typeof t=="string"?t:""+t).replace(yy,`
`).replace(My,"")}function K_(t,n){return n=Z_(n),Z_(t)===n}function Fe(t,n,i,r,l,c){switch(i){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||Qr(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&Qr(t,""+r);else return;break;case"className":bl(t,"class",r);break;case"tabIndex":bl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":bl(t,i,r);break;case"style":qp(t,r,c);return;case"data":if(n!=="object"){bl(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||i!=="href")){t.removeAttribute(i);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=Al(r),t.setAttribute(i,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(i==="formAction"?(n!=="input"&&Fe(t,n,"name",l.name,l,null),Fe(t,n,"formEncType",l.formEncType,l,null),Fe(t,n,"formMethod",l.formMethod,l,null),Fe(t,n,"formTarget",l.formTarget,l,null)):(Fe(t,n,"encType",l.encType,l,null),Fe(t,n,"method",l.method,l,null),Fe(t,n,"target",l.target,l,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(i);break}r=Al(r),t.setAttribute(i,r);break;case"onClick":r!=null&&(t.onclick=zi);return;case"onScroll":r!=null&&ye("scroll",t);return;case"onScrollEnd":r!=null&&ye("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==i&&(t.innerHTML=i)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}i=Al(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,""):t.removeAttribute(i);break;case"capture":case"download":r===!0?t.setAttribute(i,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(i,r):t.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(i,r):t.removeAttribute(i);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(i):t.setAttribute(i,r);break;case"popover":ye("beforetoggle",t),ye("toggle",t),Tl(t,"popover",r);break;case"xlinkActuate":ia(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":ia(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":ia(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":ia(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":ia(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":ia(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":ia(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":ia(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":ia(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Tl(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")i=GS.get(i)||i,Tl(t,i,r);else return}we=!0}function wh(t,n,i,r,l,c){switch(i){case"style":qp(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(i=r.__html,i!=null){if(l.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==i&&(t.innerHTML=i)}}break;case"children":if(typeof r=="string")Qr(t,r);else if(typeof r=="number"||typeof r=="bigint")Qr(t,""+r);else return;break;case"onScroll":r!=null&&ye("scroll",t);return;case"onScrollEnd":r!=null&&ye("scrollend",t);return;case"onClick":r!=null&&(t.onclick=zi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!zn.hasOwnProperty(i))t:{if(i[0]==="o"&&i[1]==="n"&&(l=i.endsWith("Capture"),c=i.slice(2,l?i.length-7:void 0),n=t[qt]||null,n=n!=null?n[i]:null,typeof n=="function"&&t.removeEventListener(c,n,l),typeof r=="function")){typeof n!="function"&&n!==null&&(i in t?t[i]=null:t.hasAttribute(i)&&t.removeAttribute(i)),t.addEventListener(c,r,l);break t}we=!0,i in t?t[i]=r:r===!0?t.setAttribute(i,""):Tl(t,i,r)}return}we=!0}function Cn(t,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ye("error",t),ye("load",t);var r=!1,l=!1,c;for(c in i)if(i.hasOwnProperty(c)){var m=i[c];if(m!=null)switch(c){case"src":r=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Fe(t,n,c,m,i,null)}}l&&Fe(t,n,"srcSet",i.srcSet,i,null),r&&Fe(t,n,"src",i.src,i,null);return;case"input":ye("invalid",t);var E=c=m=l=null,N=null,Z=null;for(r in i)if(i.hasOwnProperty(r)){var rt=i[r];if(rt!=null)switch(r){case"name":l=rt;break;case"type":m=rt;break;case"checked":N=rt;break;case"defaultChecked":Z=rt;break;case"value":c=rt;break;case"defaultValue":E=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(s(137,n));break;default:Fe(t,n,r,rt,i,null)}}Gp(t,c,E,N,Z,m,l,!1);return;case"select":ye("invalid",t),r=m=c=null;for(l in i)if(i.hasOwnProperty(l)&&(E=i[l],E!=null))switch(l){case"value":c=E;break;case"defaultValue":m=E;break;case"multiple":r=E;default:Fe(t,n,l,E,i,null)}n=c,i=m,t.multiple=!!r,n!=null?Kr(t,!!r,n,!1):i!=null&&Kr(t,!!r,i,!0);return;case"textarea":ye("invalid",t),c=l=r=null;for(m in i)if(i.hasOwnProperty(m)&&(E=i[m],E!=null))switch(m){case"value":r=E;break;case"defaultValue":l=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Fe(t,n,m,E,i,null)}Xp(t,r,l,c);return;case"option":for(N in i)if(i.hasOwnProperty(N)&&(r=i[N],r!=null))switch(N){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Fe(t,n,N,r,i,null)}return;case"dialog":ye("beforetoggle",t),ye("toggle",t),ye("cancel",t),ye("close",t);break;case"iframe":case"object":ye("load",t);break;case"video":case"audio":for(r=0;r<qo.length;r++)ye(qo[r],t);break;case"image":ye("error",t),ye("load",t);break;case"details":ye("toggle",t);break;case"embed":case"source":case"link":ye("error",t),ye("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in i)if(i.hasOwnProperty(Z)&&(r=i[Z],r!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Fe(t,n,Z,r,i,null)}return;default:if(Dc(n)){for(rt in i)i.hasOwnProperty(rt)&&(r=i[rt],r!==void 0&&wh(t,n,rt,r,i,void 0));return}}for(E in i)i.hasOwnProperty(E)&&(r=i[E],r!=null&&Fe(t,n,E,r,i,null))}var Ey={};function Ty(t,n,i,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,c=null,m=null,E=null,N=null,Z=null,rt=null;for(et in i){var pt=i[et];if(i.hasOwnProperty(et)&&pt!=null)switch(et){case"checked":break;case"value":break;case"defaultValue":N=pt;default:r.hasOwnProperty(et)||Fe(t,n,et,null,r,pt)}}for(var q in r){var et=r[q];if(pt=i[q],r.hasOwnProperty(q)&&(et!=null||pt!=null))switch(q){case"type":et!==pt&&(we=!0),c=et;break;case"name":et!==pt&&(we=!0),l=et;break;case"checked":et!==pt&&(we=!0),Z=et;break;case"defaultChecked":et!==pt&&(we=!0),rt=et;break;case"value":et!==pt&&(we=!0),m=et;break;case"defaultValue":et!==pt&&(we=!0),E=et;break;case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,n));break;default:et!==pt&&Fe(t,n,q,et,r,pt)}}Cc(t,m,E,N,Z,rt,c,l);return;case"select":et=m=E=q=null;for(c in i)if(N=i[c],i.hasOwnProperty(c)&&N!=null)switch(c){case"value":break;case"multiple":et=N;default:r.hasOwnProperty(c)||Fe(t,n,c,null,r,N)}for(l in r)if(c=r[l],N=i[l],r.hasOwnProperty(l)&&(c!=null||N!=null))switch(l){case"value":c!==N&&(we=!0),q=c;break;case"defaultValue":c!==N&&(we=!0),E=c;break;case"multiple":c!==N&&(we=!0),m=c;default:c!==N&&Fe(t,n,l,c,r,N)}n=E,i=m,r=et,q!=null?Kr(t,!!i,q,!1):!!r!=!!i&&(n!=null?Kr(t,!!i,n,!0):Kr(t,!!i,i?[]:"",!1));return;case"textarea":et=q=null;for(E in i)if(l=i[E],i.hasOwnProperty(E)&&l!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Fe(t,n,E,null,r,l)}for(m in r)if(l=r[m],c=i[m],r.hasOwnProperty(m)&&(l!=null||c!=null))switch(m){case"value":l!==c&&(we=!0),q=l;break;case"defaultValue":l!==c&&(we=!0),et=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(s(91));break;default:l!==c&&Fe(t,n,m,l,r,c)}Vp(t,q,et);return;case"option":for(var Nt in i)if(q=i[Nt],i.hasOwnProperty(Nt)&&q!=null&&!r.hasOwnProperty(Nt))switch(Nt){case"selected":t.selected=!1;break;default:Fe(t,n,Nt,null,r,q)}for(N in r)if(q=r[N],et=i[N],r.hasOwnProperty(N)&&q!==et&&(q!=null||et!=null))switch(N){case"selected":q!==et&&(we=!0),t.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:Fe(t,n,N,q,r,et)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Yt in i)q=i[Yt],i.hasOwnProperty(Yt)&&q!=null&&!r.hasOwnProperty(Yt)&&Fe(t,n,Yt,null,r,q);for(Z in r)if(q=r[Z],et=i[Z],r.hasOwnProperty(Z)&&q!==et&&(q!=null||et!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(s(137,n));break;default:Fe(t,n,Z,q,r,et)}return;default:if(Dc(n)){for(var he in i)q=i[he],i.hasOwnProperty(he)&&q!==void 0&&!r.hasOwnProperty(he)&&wh(t,n,he,void 0,r,q);for(rt in r)q=r[rt],et=i[rt],!r.hasOwnProperty(rt)||q===et||q===void 0&&et===void 0||wh(t,n,rt,q,r,et);return}}for(var W in i)q=i[W],i.hasOwnProperty(W)&&q!=null&&!r.hasOwnProperty(W)&&Fe(t,n,W,null,r,q);for(pt in r)q=r[pt],et=i[pt],!r.hasOwnProperty(pt)||q===et||q==null&&et==null||Fe(t,n,pt,q,r,et)}function Q_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function by(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,i=performance.getEntriesByType("resource"),r=0;r<i.length;r++){var l=i[r],c=l.transferSize,m=l.initiatorType,E=l.duration;if(c&&E&&Q_(m)){for(m=0,E=l.responseEnd,r+=1;r<i.length;r++){var N=i[r],Z=N.startTime;if(Z>E)break;var rt=N.transferSize,pt=N.initiatorType;rt&&Q_(pt)&&(N=N.responseEnd,m+=rt*(N<E?1:(E-Z)/(N-Z)))}if(--r,n+=8*(c+m)/(l.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Dh=null,Uh=null;function Wo(t){return t.nodeType===9?t:t.ownerDocument}function J_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function $_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function t0(t,n,i,r){return i=Wo(i).createElement(t),i[wt]=r,i[qt]=n,Cn(i,t,n),Ce(i),i}function Nh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Lh=null;function Ay(){var t=window.event;return t&&t.type==="popstate"?t===Lh?!1:(Lh=t,!0):(Lh=null,!1)}var Oh=typeof setTimeout=="function"?setTimeout:void 0,Ry=typeof clearTimeout=="function"?clearTimeout:void 0,e0=typeof Promise=="function"?Promise:void 0,n0=typeof requestAnimationFrame=="function"?requestAnimationFrame:Oh,Cy=typeof queueMicrotask=="function"?queueMicrotask:typeof e0<"u"?function(t){return e0.resolve(null).then(t).catch(wy)}:Oh;function wy(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function i0(t,n){var i=n,r=0;do{var l=i.nextSibling;if(t.removeChild(i),l&&l.nodeType===8)if(i=l.data,i==="/$"||i==="/&"){if(r===0){t.removeChild(l),Os(n);return}r--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")r++;else if(i==="html")Vh(t.ownerDocument.documentElement);else if(i==="head"){i=t.ownerDocument.head,Vh(i);for(var c=i.firstChild;c;){var m=c.nextSibling,E=c.nodeName;c[Ue]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||i.removeChild(c),c=m}}else i==="body"&&Vh(t.ownerDocument.body);i=l}while(i);Os(n)}function a0(t,n){var i=t;t=0;do{var r=i.nextSibling;if(i.nodeType===1?n?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(n?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),r&&r.nodeType===8)if(i=r.data,i==="/$"){if(t===0)break;t--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||t++;i=r}while(i)}function r0(t,n,i){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,i!=null&&(t.style.viewTransitionClass=i),i=getComputedStyle(t),i.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var l=r=0;l<n.length;l++){var c=n[l];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+i.paddingTop,t.marginBottom="-"+i.paddingBottom)}}function s0(t,n){t=t.style,n=n.style;var i=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=i==null||typeof i=="boolean"?"":(""+i).trim(),i=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=i==null||typeof i=="boolean"?"":(""+i).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(i=n.display,t.display=i==null||typeof i=="boolean"?"":i,i=n.margin,i!=null?t.margin=i:(i=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=i==null||typeof i=="boolean"?"":i,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Dy(t,n,i){return i=i.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=i.innerHeight&&t.left<=i.innerWidth}}function zh(t){var n=t.getBoundingClientRect(),i=getComputedStyle(t);return Dy(n,i,t)}function Uy(t){return t.documentElement.clientHeight}function Ny(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Ly(t,n,i,r,l,c,m,E,N){var Z=n.nodeType===9?n:n.ownerDocument;try{var rt=Z.startViewTransition({update:function(){var q=Z.defaultView,et=q.navigation&&q.navigation.transition,Nt=Z.fonts.status;r();var Yt=[];if(Nt==="loaded"&&(Uy(Z),Z.fonts.status==="loading"&&Yt.push(Z.fonts.ready)),Nt=Yt.length,t!==null)for(var he=t.suspenseyImages,W=0,H=0;H<he.length;H++){var tt=he[H];if(!tt.complete){var ht=tt.getBoundingClientRect();if(0<ht.bottom&&0<ht.right&&ht.top<q.innerHeight&&ht.left<q.innerWidth){if(W+=R0(tt),W>zu){Yt.length=Nt;break}tt=new Promise(Ny.bind(tt)),Yt.push(tt)}}}if(0<Yt.length)return q=Promise.race([Promise.all(Yt),new Promise(function(Gt){return setTimeout(Gt,500)})]).then(l,l),(et?Promise.allSettled([et.finished,q]):q).then(c,c);if(l(),et)return et.finished.then(c,c);c()},types:i});Z.__reactViewTransition=rt;var pt=[];return rt.ready.then(function(){for(var q=Z.documentElement.getAnimations({subtree:!0}),et=0;et<q.length;et++){var Nt=q[et],Yt=Nt.effect,he=Yt.pseudoElement;if(he!=null&&he.startsWith("::view-transition")){pt.push(Nt),Nt=Yt.getKeyframes();for(var W=he=void 0,H=!0,tt=0;tt<Nt.length;tt++){var ht=Nt[tt],Gt=ht.width;if(he===void 0)he=Gt;else if(he!==Gt){H=!1;break}if(Gt=ht.height,W===void 0)W=Gt;else if(W!==Gt){H=!1;break}delete ht.width,delete ht.height,ht.transform==="none"&&delete ht.transform}H&&he!==void 0&&W!==void 0&&(Yt.setKeyframes(Nt),H=getComputedStyle(Yt.target,Yt.pseudoElement),H.width!==he||H.height!==W)&&(H=Nt[0],H.width=he,H.height=W,H=Nt[Nt.length-1],H.width=he,H.height=W,Yt.setKeyframes(Nt))}}m()},function(q){Z.__reactViewTransition===rt&&(Z.__reactViewTransition=null);try{if(typeof q=="object"&&q!==null)switch(q.name){case"InvalidStateError":(q.message==="View transition was skipped because document visibility state is hidden."||q.message==="Skipping view transition because document visibility state has become hidden."||q.message==="Skipping view transition because viewport size changed."||q.message==="Transition was aborted because of invalid state")&&(q=null)}q!==null&&N(q)}finally{r(),l(),m()}}),rt.finished.finally(function(){for(var q=0;q<pt.length;q++)pt[q].cancel();Z.__reactViewTransition===rt&&(Z.__reactViewTransition=null),E()}),rt}catch{return r(),l(),m(),null}}function Nr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Nr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:z({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Nr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,i=t.getAnimations({subtree:!0}),r=[],l=0;l<i.length;l++){var c=i[l].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(i[l])}return r},Nr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function o0(t){return{name:t,group:new Nr("group",t),imagePair:new Nr("image-pair",t),old:new Nr("old",t),new:new Nr("new",t)}}function ri(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ri.prototype.addEventListener=function(t,n,i){var r=null,l=null;if(!(i!=null&&typeof i!="boolean"&&(r=i.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(u0(c,t,n,i)===-1){var m=this,E=n;i!=null&&typeof i!="boolean"&&i.once===!0&&(E=function(N){m.removeEventListener(t,n,i),typeof n=="function"?n.call(this,N):n.handleEvent(N)}),r!==null&&(l=m.removeEventListener.bind(m,t,n,i),r.addEventListener("abort",l,{once:!0}),l=r.removeEventListener.bind(r,"abort",l)),r=Cs(i),c.push({type:t,listener:n,optionsOrUseCapture:i,attachedListener:E,cleanup:l}),p(this._fragmentFiber.child,!1,Oy,t,E,r)}this._eventListeners=c}};function Oy(t,n,i,r){return y(t).addEventListener(n,i,r),!1}ri.prototype.removeEventListener=function(t,n,i){var r=this._eventListeners;if(r!==null&&(n=u0(r,t,n,i),n!==-1)){var l=r[n];i=l.attachedListener;var c=l.cleanup;l=Cs(l.optionsOrUseCapture),p(this._fragmentFiber.child,!1,zy,t,i,l),r.splice(n,1),c!==null&&c()}};function zy(t,n,i,r){return y(t).removeEventListener(n,i,r),!1}function Cs(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function l0(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function u0(t,n,i,r){if(t.length===0)return-1;r=l0(r);for(var l=0;l<t.length;l++){var c=t[l];if(c.type===n&&c.listener===i&&l0(c.optionsOrUseCapture)===r)return l}return-1}ri.prototype.dispatchEvent=function(t){var n=x(this._fragmentFiber);if(n===null)return!0;n=y(n);var i=this._eventListeners;if(i!==null&&0<i.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(i)for(var l=0;l<i.length;l++){var c=i[l];r.addEventListener(c.type,c.attachedListener,Cs(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),i)for(l=0;l<i.length;l++)c=i[l],r.removeEventListener(c.type,c.attachedListener,Cs(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},ri.prototype.focus=function(t){p(this._fragmentFiber.child,!0,c0,t,void 0,void 0)};function c0(t,n){return t.tag===6?!1:(t=y(t),Wy(t,n))}ri.prototype.focusLast=function(t){var n=[];p(this._fragmentFiber.child,!0,Ph,n,void 0,void 0);for(var i=n.length-1;0<=i&&!c0(n[i],t);i--);};function Ph(t,n){return n.push(t),!1}ri.prototype.blur=function(){var t=x(this._fragmentFiber);t!==null&&(t=y(t),t=Wo(t).activeElement,t!==null&&p(this._fragmentFiber.child,!1,Py,t,void 0,void 0))};function Py(t,n){return t.tag===6?!1:(t=y(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ri.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),p(this._fragmentFiber.child,!1,Iy,t,void 0,void 0)};function Iy(t,n){return t.tag===6||(t=y(t),n.observe(t)),!1}ri.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),p(this._fragmentFiber.child,!1,By,t,void 0,void 0);for(var i=n=0;i<Ri.length;i++){var r=Ri[i];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):Ri[n++]=r}Ri.length=n}};function By(t,n){return t.tag===6||(t=y(t),n.unobserve(t)),!1}var Ri=[],Ih=!1;function Fy(t,n,i){Ri.push({fragmentInstance:t,observer:n,instance:i}),Ih||(Ih=!0,jy(function(){Ih=!1;var r=Ri;Ri=[];for(var l=0;l<r.length;l++){var c=r[l];c.observer.unobserve(c.instance)}}))}ri.prototype.getClientRects=function(){var t=[];return p(this._fragmentFiber.child,!1,Hy,t,void 0,void 0),t};function Hy(t,n){if(t.tag===6){t=t.stateNode;var i=t.ownerDocument.createRange();i.selectNodeContents(t),n.push.apply(n,i.getClientRects())}else t=y(t),n.push.apply(n,t.getClientRects());return!1}ri.prototype.getRootNode=function(t){var n=x(this._fragmentFiber);return n===null?this:y(n).getRootNode(t)},ri.prototype.compareDocumentPosition=function(t){var n=x(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var i=[];p(this._fragmentFiber.child,!1,Ph,i,void 0,void 0);var r=y(n);if(i.length===0){if(i=r,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(i=n)}n=this._fragmentFiber;var l=r=i.compareDocumentPosition(t);return i===t?l=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(i=b(n)[1],i===null?l=Node.DOCUMENT_POSITION_PRECEDING:(t=y(i).compareDocumentPosition(t),l=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),l|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(i[0]),l=y(i[i.length-1]);var c=M(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_CONTAINED_BY;var m=n.compareDocumentPosition(t),E=l.compareDocumentPosition(t),N=m&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=r&&c&&m&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&l===t||N||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&l===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:m,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||Gy(n,this._fragmentFiber,i[0],i[i.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function Gy(t,n,i,r,l){var c=Ne(l);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(i=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){i=!0;break t}c=c.return}i=!1}return i}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=l.ownerDocument,l===c||l===c.documentElement||l===c.body;t:{for(c=n,n=x(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===i)&&(n=F(i,c,G),n===null?n=!1:(p(n,!0,O,c,i),c=S,S=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=F(r,c,G),n===null?n=!1:(p(n,!0,D,c,r),c=S,I=S=null,n=c!==null)),n):!1}function f0(t,n){var i=t.ownerDocument.createRange();i.selectNodeContents(t),t=i.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ri.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];p(this._fragmentFiber.child,!1,Ph,n,void 0,void 0);var i=t!==!1;if(n.length===0){var r=b(this._fragmentFiber);if(r=i?r[1]||r[0]||x(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=y(r),f0(t,i);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){i="host"in r?r.host:null,i!==null&&i.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=i?n.length-1:0;r!==(i?-1:n.length);){var l=n[r];l.tag===6?(l=y(l),f0(l,i)):y(l).scrollIntoView(t),r+=i?-1:1}};function Vy(t,n){return t=y(t),h0(t,n),!1}function h0(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function d0(t,n){var i=n._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.addEventListener(l.type,l.attachedListener,Cs(l.optionsOrUseCapture))}t.nodeType!==3&&(i=n._observers,i!==null&&i.forEach(function(c){for(var m=0,E=0;E<Ri.length;E++){var N=Ri[E];(N.fragmentInstance!==n||N.observer!==c||N.instance!==t)&&(Ri[m++]=N)}Ri.length=m,c.observe(t)}),h0(t,n))}function Xy(t,n){var i=n._eventListeners;if(i!==null)for(var r=0;r<i.length;r++){var l=i[r];t.removeEventListener(l.type,l.attachedListener,Cs(l.optionsOrUseCapture))}t.nodeType!==3&&(i=n._observers,i!==null&&i.forEach(function(c){typeof c.rootMargin=="string"?Fy(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Bh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Bh(i),te(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}t.removeChild(i)}}function ky(t,n,i,r){for(;t.nodeType===1;){var l=i;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ue])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==l.rel||t.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=_i(t.nextSibling),t===null)break}return null}function qy(t,n,i){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!i||(t=_i(t.nextSibling),t===null))return null;return t}function p0(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=_i(t.nextSibling),t===null))return null;return t}function Fh(t){return t.data==="$?"||t.data==="$~"}function Hh(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Yy(t,n){var i=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||i.readyState!=="loading")n();else{var r=function(){n(),i.removeEventListener("DOMContentLoaded",r)};i.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function _i(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Gh=null;function m0(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="/$"||i==="/&"){if(n===0)return _i(t.nextSibling);n--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||n++}t=t.nextSibling}return null}function g0(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var i=t.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(n===0)return t;n--}else i!=="/$"&&i!=="/&"||n++}t=t.previousSibling}return null}function Wy(t,n){function i(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",i,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",i,!0)}return r}function jy(t){n0(function(){n0(function(n){return t(n)})})}function _0(t,n,i){switch(n=Wo(i),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function v0(t,n,i){for(var r in i){var l=i[r];i.hasOwnProperty(r)&&l!=null&&Fe(t,n,r,null,Ey,l)}i.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===zi&&(t.onclick=null),te(t)}function Vh(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);te(t)}var vi=new Map,S0=new Set;function jo(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var ga=Xt.d;Xt.d={f:Zy,r:Ky,D:Qy,C:Jy,L:$y,m:tM,X:nM,S:eM,M:iM};function Zy(){var t=ga.f(),n=Au();return t||n}function Ky(t){var n=ge(t);n!==null&&n.tag===5&&n.type==="form"?yg(n):ga.r(t)}var ws=typeof document>"u"?null:document;function x0(t,n,i){var r=ws;if(r&&typeof n=="string"&&n){var l=ci(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof i=="string"&&(l+='[crossorigin="'+i+'"]'),S0.has(l)||(S0.add(l),t={rel:t,crossOrigin:i,href:n},r.querySelector(l)===null&&(n=r.createElement("link"),Cn(n,"link",t),Ce(n),r.head.appendChild(n)))}}function Qy(t){ga.D(t),x0("dns-prefetch",t,null)}function Jy(t,n){ga.C(t,n),x0("preconnect",t,n)}function $y(t,n,i){ga.L(t,n,i);var r=ws;if(r&&t&&n){var l='link[rel="preload"][as="'+ci(n)+'"]';n==="image"&&i&&i.imageSrcSet?(l+='[imagesrcset="'+ci(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(l+='[imagesizes="'+ci(i.imageSizes)+'"]')):l+='[href="'+ci(t)+'"]';var c=l;switch(n){case"style":c=Ds(t);break;case"script":c=Us(t)}if(!(vi.has(c)||(t=z({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:t,as:n},i),vi.set(c,t),r.querySelector(l)!==null||n==="style"&&r.querySelector(Zo(c))||n==="script"&&r.querySelector(Ko(c))))){var m=r.createElement("link");Cn(m,"link",t),n==="style"&&(m[Re]=!0,m.onload=m.onerror=function(){Aa(m)}),Ce(m),r.head.appendChild(m)}}}function tM(t,n){ga.m(t,n);var i=ws;if(i&&t){var r=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+ci(r)+'"][href="'+ci(t)+'"]',c=l;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Us(t)}if(!vi.has(c)&&(t=z({rel:"modulepreload",href:t},n),vi.set(c,t),i.querySelector(l)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Ko(c)))return}r=i.createElement("link"),Cn(r,"link",t),Ce(r),i.head.appendChild(r)}}}function eM(t,n,i){ga.S(t,n,i);var r=ws;if(r&&t){var l=Qn(r).hoistableStyles,c=Ds(t);n=n||"default";var m=l.get(c);if(!m){var E={loading:0,preload:null};if(m=r.querySelector(Zo(c)))E.loading=5;else{t=z({rel:"stylesheet",href:t,"data-precedence":n},i),(i=vi.get(c))&&Xh(t,i);var N=m=r.createElement("link");Ce(N),Cn(N,"link",t),N._p=new Promise(function(Z,rt){N.onload=Z,N.onerror=rt}),N.addEventListener("load",function(){E.loading|=1}),N.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Lu(m,n,r)}m={type:"stylesheet",instance:m,count:1,state:E},l.set(c,m)}}}function nM(t,n){ga.X(t,n);var i=ws;if(i&&t){var r=Qn(i).hoistableScripts,l=Us(t),c=r.get(l);c||(c=i.querySelector(Ko(l)),c||(t=z({src:t,async:!0},n),(n=vi.get(l))&&kh(t,n),c=i.createElement("script"),Ce(c),Cn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function iM(t,n){ga.M(t,n);var i=ws;if(i&&t){var r=Qn(i).hoistableScripts,l=Us(t),c=r.get(l);c||(c=i.querySelector(Ko(l)),c||(t=z({src:t,async:!0,type:"module"},n),(n=vi.get(l))&&kh(t,n),c=i.createElement("script"),Ce(c),Cn(c,"link",t),i.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(l,c))}}function y0(t,n,i,r){var l=(l=qe.current)?jo(l):null;if(!l)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(i=Ds(i.href),n=Qn(l).hoistableStyles,r=n.get(i),r||(r={type:"style",instance:null,count:0,state:null},n.set(i,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){t=Ds(i.href);var c=Qn(l).hoistableStyles,m=c.get(t);if(m||(l=l.ownerDocument||l,m={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,m),(c=l.querySelector(Zo(t)))?c._p||(m.instance=c,m.state.loading=5):(c=vi.get(t),c||(c={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},vi.set(t,c)),aM(l,t,c,m.state))),n&&r===null)throw Error(s(528,""));return m}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(i=Us(i),n=Qn(l).hoistableScripts,r=n.get(i),r||(r={type:"script",instance:null,count:0,state:null},n.set(i,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ds(t){return'href="'+ci(t)+'"'}function Zo(t){return'link[rel="stylesheet"]['+t+"]"}function M0(t){return z({},t,{"data-precedence":t.precedence,precedence:null})}function aM(t,n,i,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Re]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[Re]=!0,n.onload=n.onerror=Aa.bind(null,n),Cn(n,"link",i),Ce(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Us(t){return'[src="'+ci(t)+'"]'}function Ko(t){return"script[async]"+t}function E0(t,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+ci(i.href)+'"]');if(r)return n.instance=r,Ce(r),r;var l=z({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Ce(r),Cn(r,"style",l),Lu(r,i.precedence,t),n.instance=r;case"stylesheet":l=Ds(i.href);var c=t.querySelector(Zo(l));if(c)return n.state.loading|=4,n.instance=c,Ce(c),c;r=M0(i),(l=vi.get(l))&&Xh(r,l),c=(t.ownerDocument||t).createElement("link"),Ce(c);var m=c;return m._p=new Promise(function(E,N){m.onload=E,m.onerror=N}),Cn(c,"link",r),n.state.loading|=4,Lu(c,i.precedence,t),n.instance=c;case"script":return c=Us(i.src),(l=t.querySelector(Ko(c)))?(n.instance=l,Ce(l),l):(r=i,(l=vi.get(c))&&(r=z({},i),kh(r,l)),t=t.ownerDocument||t,l=t.createElement("script"),Ce(l),Cn(l,"link",r),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Lu(r,i.precedence,t));return n.instance}function Lu(t,n,i){for(var r=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=r.length?r[r.length-1]:null,c=l,m=0;m<r.length;m++){var E=r[m];if(E.dataset.precedence===n)c=E;else if(c!==l)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(t,n.firstChild))}function Xh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function kh(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ou=null;function T0(t,n,i){if(Ou===null){var r=new Map,l=Ou=new Map;l.set(i,r)}else l=Ou,r=l.get(i),r||(r=new Map,l.set(i,r));if(r.has(t))return r;for(r.set(t,null),i=i.getElementsByTagName(t),l=0;l<i.length;l++){var c=i[l];if(!(c[Ue]||c[wt]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var m=c.getAttribute(n)||"";m=t+m;var E=r.get(m);E?E.push(c):r.set(m,[c])}}return r}function qh(t,n,i){t=t.ownerDocument||t,t.head.insertBefore(i,n==="title"?t.querySelector("head > title"):null)}function rM(t,n,i){if(i===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function b0(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function A0(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function R0(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function C0(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=R0(n),t.suspenseyImages.push(n)),t=lM.bind(t),n.decode().then(t,t))}function sM(t,n,i,r){if(i.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var l=Ds(r.href),c=n.querySelector(Zo(l));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Qo.bind(t),n.then(t,t)),i.state.loading|=4,i.instance=c,Ce(c);return}c=n.ownerDocument||n,r=M0(r),(l=vi.get(l))&&Xh(r,l),c=c.createElement("link"),Ce(c);var m=c;m._p=new Promise(function(E,N){m.onload=E,m.onerror=N}),Cn(c,"link",r),i.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(t.count++,i=Qo.bind(t),n.addEventListener("load",i),n.addEventListener("error",i))}}var zu=0;function oM(t,n){return t.stylesheets&&t.count===0&&Iu(t,t.stylesheets),0<t.count||0<t.imgCount?function(i){var r=setTimeout(function(){if(t.stylesheets&&Iu(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&zu===0&&(zu=62500*by());var l=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Iu(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>zu?50:800)+n);return t.unsuspend=i,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(l)}}:null}function w0(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)Iu(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function Qo(){this.count--,w0(this)}function lM(){this.imgCount--,w0(this)}var Pu=null;function Iu(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Pu=new Map,n.forEach(uM,t),Pu=null,Qo.call(t))}function uM(t,n){if(!(n.state.loading&4)){var i=Pu.get(t);if(i)var r=i.get(null);else{i=new Map,Pu.set(t,i);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<l.length;c++){var m=l[c];(m.nodeName==="LINK"||m.getAttribute("media")!=="not all")&&(i.set(m.dataset.precedence,m),r=m)}r&&i.set(null,r)}l=n.instance,m=l.getAttribute("data-precedence"),c=i.get(m)||r,c===r&&i.set(null,l),i.set(m,l),this.count++,r=Qo.bind(this),l.addEventListener("load",r),l.addEventListener("error",r),c?c.parentNode.insertBefore(l,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var Ns={$$typeof:ut,Provider:null,Consumer:null,_currentValue:L,_currentValue2:L,_threadCount:0};function cM(t,n,i,r,l,c,m,E,N){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fo(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fo(0),this.hiddenUpdates=fo(null),this.identifierPrefix=r,this.onUncaughtError=l,this.onCaughtError=c,this.onRecoverableError=m,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=N,this.transitionTypes=null,this.incompleteTransitions=new Map}function D0(t,n,i,r,l,c,m,E,N,Z,rt,pt){return t=new cM(t,n,i,m,N,Z,rt,pt,E),n=1,c===!0&&(n|=24),c=Vn(3,null,null,n),t.current=c,c.stateNode=t,n=sf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:i,cache:n},cf(c),t}function U0(t){return t?(t=as,t):as}function N0(t,n,i,r,l,c){l=U0(l),r.context===null?r.context=l:r.pendingContext=l,r=za(n),r.payload={element:i},c=c===void 0?null:c,c!==null&&(r.callback=c),i=Pa(t,r,n),i!==null&&(Yn(i,t,n),Co(i,t,n))}function L0(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var i=t.retryLane;t.retryLane=i!==0&&i<n?i:n}}function Yh(t,n){L0(t,n),(t=t.alternate)&&L0(t,n)}function O0(t){if(t.tag===13||t.tag===31){var n=mr(t,67108864);n!==null&&Yn(n,t,67108864),Yh(t,67108864)}}function z0(t){if(t.tag===13||t.tag===31){var n=ai();n=lt(n);var i=mr(t,n);i!==null&&Yn(i,t,n),Yh(t,n)}}var Ls=!0;function fM(t,n,i,r){var l=Mt.T;Mt.T=null;var c=Xt.p;try{Xt.p=2,Wh(t,n,i,r)}finally{Xt.p=c,Mt.T=l}}function hM(t,n,i,r){var l=Mt.T;Mt.T=null;var c=Xt.p;try{Xt.p=8,Wh(t,n,i,r)}finally{Xt.p=c,Mt.T=l}}function Wh(t,n,i,r){if(Ls){var l=jh(r);if(l===null)Ch(t,n,r,Bu,i),I0(t,r);else if(pM(l,t,n,i,r))r.stopPropagation();else if(I0(t,r),n&4&&-1<dM.indexOf(t)){for(;l!==null;){var c=ge(l);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var m=ui(c.pendingLanes);if(m!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;m;){var N=1<<31-Dn(m);E.entanglements[1]|=N,m&=~N}qi(c),(Le&6)===0&&(Eu=X()+500,ko(0))}}break;case 31:case 13:E=mr(c,2),E!==null&&Yn(E,c,2),Au(),Yh(c,2)}if(c=jh(r),c===null&&Ch(t,n,r,Bu,i),c===l)break;l=c}l!==null&&r.stopPropagation()}else Ch(t,n,r,null,i)}}function jh(t){return t=Nc(t),Zh(t)}var Bu=null;function Zh(t){if(Bu=null,t=Ne(t),t!==null){var n=f(t);if(n===null)t=null;else{var i=n.tag;if(i===13){if(t=h(n),t!==null)return t;t=null}else if(i===31){if(t=d(n),t!==null)return t;t=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Bu=t,null}function P0(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Rt()){case Ut:return 2;case Vt:return 8;case Et:case _t:return 32;case Wt:return 268435456;default:return 32}default:return 32}}var Kh=!1,ja=null,Za=null,Ka=null,Jo=new Map,$o=new Map,Qa=[],dM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function I0(t,n){switch(t){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Za=null;break;case"mouseover":case"mouseout":Ka=null;break;case"pointerover":case"pointerout":Jo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":$o.delete(n.pointerId)}}function tl(t,n,i,r,l,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:i,eventSystemFlags:r,nativeEvent:c,targetContainers:[l]},n!==null&&(n=ge(n),n!==null&&O0(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function pM(t,n,i,r,l){switch(n){case"focusin":return ja=tl(ja,t,n,i,r,l),!0;case"dragenter":return Za=tl(Za,t,n,i,r,l),!0;case"mouseover":return Ka=tl(Ka,t,n,i,r,l),!0;case"pointerover":var c=l.pointerId;return Jo.set(c,tl(Jo.get(c)||null,t,n,i,r,l)),!0;case"gotpointercapture":return c=l.pointerId,$o.set(c,tl($o.get(c)||null,t,n,i,r,l)),!0}return!1}function B0(t){var n=Ne(t.target);if(n!==null){var i=f(n);if(i!==null){if(n=i.tag,n===13){if(n=h(i),n!==null){t.blockedOn=n,Pt(t.priority,function(){z0(i)});return}}else if(n===31){if(n=d(i),n!==null){t.blockedOn=n,Pt(t.priority,function(){z0(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){t.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var i=jh(t.nativeEvent);if(i===null){i=t.nativeEvent;var r=new i.constructor(i.type,i);Uc=r,i.target.dispatchEvent(r),Uc=null}else return n=ge(i),n!==null&&O0(n),t.blockedOn=i,!1;n.shift()}return!0}function F0(t,n,i){Fu(t)&&i.delete(n)}function mM(){Kh=!1,ja!==null&&Fu(ja)&&(ja=null),Za!==null&&Fu(Za)&&(Za=null),Ka!==null&&Fu(Ka)&&(Ka=null),Jo.forEach(F0),$o.forEach(F0)}function Hu(t,n){t.blockedOn===n&&(t.blockedOn=null,Kh||(Kh=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,mM)))}var Gu=null;function H0(t){Gu!==t&&(Gu=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Gu===t&&(Gu=null);for(var n=0;n<t.length;n+=3){var i=t[n],r=t[n+1],l=t[n+2];if(typeof r!="function"){if(Zh(r||i)===null)continue;break}var c=ge(i);c!==null&&(t.splice(n,3),n-=3,Uf(c,{pending:!0,data:l,method:i.method,action:r},r,l))}}))}function Os(t){function n(N){return Hu(N,t)}ja!==null&&Hu(ja,t),Za!==null&&Hu(Za,t),Ka!==null&&Hu(Ka,t),Jo.forEach(n),$o.forEach(n);for(var i=0;i<Qa.length;i++){var r=Qa[i];r.blockedOn===t&&(r.blockedOn=null)}for(;0<Qa.length&&(i=Qa[0],i.blockedOn===null);)B0(i),i.blockedOn===null&&Qa.shift();if(i=(t.ownerDocument||t).$$reactFormReplay,i!=null)for(r=0;r<i.length;r+=3){var l=i[r],c=i[r+1],m=l[qt]||null;if(typeof c=="function")m||H0(i);else if(m){var E=null;if(c&&c.hasAttribute("formAction")){if(l=c,m=c[qt]||null)E=m.formAction;else if(Zh(l)!==null)continue}else E=m.action;typeof E=="function"?i[r+1]=E:(i.splice(r,3),r-=3),H0(i)}}}function G0(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(m){return l=m})},focusReset:"manual",scroll:"manual"})}function n(){l!==null&&(l(),l=null),r||setTimeout(i,20)}function i(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,l=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(i,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),l!==null&&(l(),l=null)}}}function Qh(t){this._internalRoot=t}Vu.prototype.render=Qh.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var i=n.current,r=ai();N0(i,r,t,n,null,null)},Vu.prototype.unmount=Qh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;N0(t.current,2,null,t,null,null),Au(),n[ee]=null}};function Vu(t){this._internalRoot=t}Vu.prototype.unstable_scheduleHydration=function(t){if(t){var n=bt();t={blockedOn:null,target:t,priority:n};for(var i=0;i<Qa.length&&n!==0&&n<Qa[i].priority;i++);Qa.splice(i,0,t),i===0&&B0(t)}};var V0=e.version;if(V0!=="19.3.1")throw Error(s(527,V0,"19.3.1"));Xt.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=g(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var gM={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:Mt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xu.isDisabled&&Xu.supportsFiber)try{Me=Xu.inject(gM),$e=Xu}catch{}}return il.createRoot=function(t,n){if(!u(t))throw Error(s(299));var i=!1,r="",l=Ug,c=Ng,m=Lg;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(m=n.onRecoverableError)),n=D0(t,1,!1,null,null,i,r,null,l,c,m,G0),t[ee]=n.current,Rh(t),new Qh(n)},il.hydrateRoot=function(t,n,i){if(!u(t))throw Error(s(299));var r=!1,l="",c=Ug,m=Ng,E=Lg,N=null;return i!=null&&(i.unstable_strictMode===!0&&(r=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(c=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.formState!==void 0&&(N=i.formState)),n=D0(t,1,!0,n,i??null,r,l,N,c,m,E,G0),n.context=U0(null),i=n.current,r=ai(),r=lt(r),l=za(r),l.callback=null,Pa(i,l,r),i=r,n.current.lanes=i,hr(n,i),qi(n),t[ee]=n.current,Rh(t),new Vu(n)},il.version="19.3.1",il}var J0;function CM(){if(J0)return td.exports;J0=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),td.exports=RM(),td.exports}var wM=CM();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),aS=(...o)=>o.filter((e,a,s)=>!!e&&e.trim()!==""&&s.indexOf(e)===a).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var UM={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=He.forwardRef(({color:o="currentColor",size:e=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:u="",children:f,iconNode:h,...d},_)=>He.createElement("svg",{ref:_,...UM,width:e,height:e,stroke:o,strokeWidth:s?Number(a)*24/Number(e):a,className:aS("lucide",u),...d},[...h.map(([g,v])=>He.createElement(g,v)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=(o,e)=>{const a=He.forwardRef(({className:s,...u},f)=>He.createElement(NM,{ref:f,iconNode:e,className:aS(`lucide-${DM(o)}`,s),...u}));return a.displayName=`${o}`,a};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=Kn("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=Kn("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=Kn("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=Kn("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=Kn("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=Kn("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=Kn("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=Kn("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=Kn("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=Kn("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=Kn("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=Kn("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=Kn("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=Kn("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const bp="180",VM=0,iv=1,XM=2,rS=1,kM=2,Ma=3,lr=0,jn=1,Wi=2,sr=0,Js=1,vc=2,av=3,rv=4,qM=5,Vr=100,YM=101,WM=102,jM=103,ZM=104,KM=200,QM=201,JM=202,$M=203,zd=204,Pd=205,tE=206,eE=207,nE=208,iE=209,aE=210,rE=211,sE=212,oE=213,lE=214,Id=0,Bd=1,Fd=2,eo=3,Hd=4,Gd=5,Vd=6,Xd=7,sS=0,uE=1,cE=2,or=0,fE=1,hE=2,dE=3,pE=4,mE=5,gE=6,_E=7,oS=300,no=301,io=302,kd=303,qd=304,Mc=306,Yd=1e3,kr=1001,Wd=1002,Li=1003,vE=1004,ku=1005,ji=1006,rd=1007,qr=1008,Qi=1009,lS=1010,uS=1011,fl=1012,Ap=1013,Yr=1014,Ea=1015,_l=1016,Rp=1017,Cp=1018,hl=1020,cS=35902,fS=35899,hS=1021,dS=1022,Ni=1023,dl=1026,pl=1027,pS=1028,wp=1029,mS=1030,Dp=1031,Up=1033,dc=33776,pc=33777,mc=33778,gc=33779,jd=35840,Zd=35841,Kd=35842,Qd=35843,Jd=36196,$d=37492,tp=37496,ep=37808,np=37809,ip=37810,ap=37811,rp=37812,sp=37813,op=37814,lp=37815,up=37816,cp=37817,fp=37818,hp=37819,dp=37820,pp=37821,mp=36492,gp=36494,_p=36495,vp=36283,Sp=36284,xp=36285,yp=36286,SE=3200,xE=3201,gS=0,yE=1,rr="",xi="srgb",ao="srgb-linear",Sc="linear",ke="srgb",zs=7680,sv=519,ME=512,EE=513,TE=514,_S=515,bE=516,AE=517,RE=518,CE=519,ov=35044,lv="300 es",Zi=2e3,xc=2001;class so{addEventListener(e,a){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(a)===-1&&s[e].push(a)}hasEventListener(e,a){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(a)!==-1}removeEventListener(e,a){const s=this._listeners;if(s===void 0)return;const u=s[e];if(u!==void 0){const f=u.indexOf(a);f!==-1&&u.splice(f,1)}}dispatchEvent(e){const a=this._listeners;if(a===void 0)return;const s=a[e.type];if(s!==void 0){e.target=this;const u=s.slice(0);for(let f=0,h=u.length;f<h;f++)u[f].call(this,e);e.target=null}}}const Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let uv=1234567;const ul=Math.PI/180,ml=180/Math.PI;function oo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,a=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Ln[o&255]+Ln[o>>8&255]+Ln[o>>16&255]+Ln[o>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[a&63|128]+Ln[a>>8&255]+"-"+Ln[a>>16&255]+Ln[a>>24&255]+Ln[s&255]+Ln[s>>8&255]+Ln[s>>16&255]+Ln[s>>24&255]).toLowerCase()}function be(o,e,a){return Math.max(e,Math.min(a,o))}function Np(o,e){return(o%e+e)%e}function wE(o,e,a,s,u){return s+(o-e)*(u-s)/(a-e)}function DE(o,e,a){return o!==e?(a-o)/(e-o):0}function cl(o,e,a){return(1-a)*o+a*e}function UE(o,e,a,s){return cl(o,e,1-Math.exp(-a*s))}function NE(o,e=1){return e-Math.abs(Np(o,e*2)-e)}function LE(o,e,a){return o<=e?0:o>=a?1:(o=(o-e)/(a-e),o*o*(3-2*o))}function OE(o,e,a){return o<=e?0:o>=a?1:(o=(o-e)/(a-e),o*o*o*(o*(o*6-15)+10))}function zE(o,e){return o+Math.floor(Math.random()*(e-o+1))}function PE(o,e){return o+Math.random()*(e-o)}function IE(o){return o*(.5-Math.random())}function BE(o){o!==void 0&&(uv=o);let e=uv+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function FE(o){return o*ul}function HE(o){return o*ml}function GE(o){return(o&o-1)===0&&o!==0}function VE(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function XE(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function kE(o,e,a,s,u){const f=Math.cos,h=Math.sin,d=f(a/2),_=h(a/2),g=f((e+s)/2),v=h((e+s)/2),p=f((e-s)/2),x=h((e-s)/2),M=f((s-e)/2),b=h((s-e)/2);switch(u){case"XYX":o.set(d*v,_*p,_*x,d*g);break;case"YZY":o.set(_*x,d*v,_*p,d*g);break;case"ZXZ":o.set(_*p,_*x,d*v,d*g);break;case"XZX":o.set(d*v,_*b,_*M,d*g);break;case"YXY":o.set(_*M,d*v,_*b,d*g);break;case"ZYZ":o.set(_*b,_*M,d*v,d*g);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+u)}}function Zs(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Hn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}const Lr={DEG2RAD:ul,RAD2DEG:ml,generateUUID:oo,clamp:be,euclideanModulo:Np,mapLinear:wE,inverseLerp:DE,lerp:cl,damp:UE,pingpong:NE,smoothstep:LE,smootherstep:OE,randInt:zE,randFloat:PE,randFloatSpread:IE,seededRandom:BE,degToRad:FE,radToDeg:HE,isPowerOfTwo:GE,ceilPowerOfTwo:VE,floorPowerOfTwo:XE,setQuaternionFromProperEuler:kE,normalize:Hn,denormalize:Zs};class Oe{constructor(e=0,a=0){Oe.prototype.isVector2=!0,this.x=e,this.y=a}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,a){return this.x=e,this.y=a,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const a=this.x,s=this.y,u=e.elements;return this.x=u[0]*a+u[3]*s+u[6],this.y=u[1]*a+u[4]*s+u[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,a){return this.x=be(this.x,e.x,a.x),this.y=be(this.y,e.y,a.y),this}clampScalar(e,a){return this.x=be(this.x,e,a),this.y=be(this.y,e,a),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(e)/a;return Math.acos(be(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const a=this.x-e.x,s=this.y-e.y;return a*a+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this}rotateAround(e,a){const s=Math.cos(a),u=Math.sin(a),f=this.x-e.x,h=this.y-e.y;return this.x=f*s-h*u+e.x,this.y=f*u+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vl{constructor(e=0,a=0,s=0,u=1){this.isQuaternion=!0,this._x=e,this._y=a,this._z=s,this._w=u}static slerpFlat(e,a,s,u,f,h,d){let _=s[u+0],g=s[u+1],v=s[u+2],p=s[u+3];const x=f[h+0],M=f[h+1],b=f[h+2],C=f[h+3];if(d===0){e[a+0]=_,e[a+1]=g,e[a+2]=v,e[a+3]=p;return}if(d===1){e[a+0]=x,e[a+1]=M,e[a+2]=b,e[a+3]=C;return}if(p!==C||_!==x||g!==M||v!==b){let y=1-d;const S=_*x+g*M+v*b+p*C,I=S>=0?1:-1,O=1-S*S;if(O>Number.EPSILON){const G=Math.sqrt(O),F=Math.atan2(G,S*I);y=Math.sin(y*F)/G,d=Math.sin(d*F)/G}const D=d*I;if(_=_*y+x*D,g=g*y+M*D,v=v*y+b*D,p=p*y+C*D,y===1-d){const G=1/Math.sqrt(_*_+g*g+v*v+p*p);_*=G,g*=G,v*=G,p*=G}}e[a]=_,e[a+1]=g,e[a+2]=v,e[a+3]=p}static multiplyQuaternionsFlat(e,a,s,u,f,h){const d=s[u],_=s[u+1],g=s[u+2],v=s[u+3],p=f[h],x=f[h+1],M=f[h+2],b=f[h+3];return e[a]=d*b+v*p+_*M-g*x,e[a+1]=_*b+v*x+g*p-d*M,e[a+2]=g*b+v*M+d*x-_*p,e[a+3]=v*b-d*p-_*x-g*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,a,s,u){return this._x=e,this._y=a,this._z=s,this._w=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,a=!0){const s=e._x,u=e._y,f=e._z,h=e._order,d=Math.cos,_=Math.sin,g=d(s/2),v=d(u/2),p=d(f/2),x=_(s/2),M=_(u/2),b=_(f/2);switch(h){case"XYZ":this._x=x*v*p+g*M*b,this._y=g*M*p-x*v*b,this._z=g*v*b+x*M*p,this._w=g*v*p-x*M*b;break;case"YXZ":this._x=x*v*p+g*M*b,this._y=g*M*p-x*v*b,this._z=g*v*b-x*M*p,this._w=g*v*p+x*M*b;break;case"ZXY":this._x=x*v*p-g*M*b,this._y=g*M*p+x*v*b,this._z=g*v*b+x*M*p,this._w=g*v*p-x*M*b;break;case"ZYX":this._x=x*v*p-g*M*b,this._y=g*M*p+x*v*b,this._z=g*v*b-x*M*p,this._w=g*v*p+x*M*b;break;case"YZX":this._x=x*v*p+g*M*b,this._y=g*M*p+x*v*b,this._z=g*v*b-x*M*p,this._w=g*v*p-x*M*b;break;case"XZY":this._x=x*v*p-g*M*b,this._y=g*M*p-x*v*b,this._z=g*v*b+x*M*p,this._w=g*v*p+x*M*b;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return a===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,a){const s=a/2,u=Math.sin(s);return this._x=e.x*u,this._y=e.y*u,this._z=e.z*u,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const a=e.elements,s=a[0],u=a[4],f=a[8],h=a[1],d=a[5],_=a[9],g=a[2],v=a[6],p=a[10],x=s+d+p;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-_)*M,this._y=(f-g)*M,this._z=(h-u)*M}else if(s>d&&s>p){const M=2*Math.sqrt(1+s-d-p);this._w=(v-_)/M,this._x=.25*M,this._y=(u+h)/M,this._z=(f+g)/M}else if(d>p){const M=2*Math.sqrt(1+d-s-p);this._w=(f-g)/M,this._x=(u+h)/M,this._y=.25*M,this._z=(_+v)/M}else{const M=2*Math.sqrt(1+p-s-d);this._w=(h-u)/M,this._x=(f+g)/M,this._y=(_+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,a){let s=e.dot(a)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*a.z-e.z*a.y,this._y=e.z*a.x-e.x*a.z,this._z=e.x*a.y-e.y*a.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(be(this.dot(e),-1,1)))}rotateTowards(e,a){const s=this.angleTo(e);if(s===0)return this;const u=Math.min(1,a/s);return this.slerp(e,u),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,a){const s=e._x,u=e._y,f=e._z,h=e._w,d=a._x,_=a._y,g=a._z,v=a._w;return this._x=s*v+h*d+u*g-f*_,this._y=u*v+h*_+f*d-s*g,this._z=f*v+h*g+s*_-u*d,this._w=h*v-s*d-u*_-f*g,this._onChangeCallback(),this}slerp(e,a){if(a===0)return this;if(a===1)return this.copy(e);const s=this._x,u=this._y,f=this._z,h=this._w;let d=h*e._w+s*e._x+u*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=u,this._z=f,this;const _=1-d*d;if(_<=Number.EPSILON){const M=1-a;return this._w=M*h+a*this._w,this._x=M*s+a*this._x,this._y=M*u+a*this._y,this._z=M*f+a*this._z,this.normalize(),this}const g=Math.sqrt(_),v=Math.atan2(g,d),p=Math.sin((1-a)*v)/g,x=Math.sin(a*v)/g;return this._w=h*p+this._w*x,this._x=s*p+this._x*x,this._y=u*p+this._y*x,this._z=f*p+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,a,s){return this.copy(e).slerp(a,s)}random(){const e=2*Math.PI*Math.random(),a=2*Math.PI*Math.random(),s=Math.random(),u=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(u*Math.sin(e),u*Math.cos(e),f*Math.sin(a),f*Math.cos(a))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,a=0){return this._x=e[a],this._y=e[a+1],this._z=e[a+2],this._w=e[a+3],this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._w,e}fromBufferAttribute(e,a){return this._x=e.getX(a),this._y=e.getY(a),this._z=e.getZ(a),this._w=e.getW(a),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class st{constructor(e=0,a=0,s=0){st.prototype.isVector3=!0,this.x=e,this.y=a,this.z=s}set(e,a,s){return s===void 0&&(s=this.z),this.x=e,this.y=a,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,a){return this.x=e.x*a.x,this.y=e.y*a.y,this.z=e.z*a.z,this}applyEuler(e){return this.applyQuaternion(cv.setFromEuler(e))}applyAxisAngle(e,a){return this.applyQuaternion(cv.setFromAxisAngle(e,a))}applyMatrix3(e){const a=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*a+f[3]*s+f[6]*u,this.y=f[1]*a+f[4]*s+f[7]*u,this.z=f[2]*a+f[5]*s+f[8]*u,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const a=this.x,s=this.y,u=this.z,f=e.elements,h=1/(f[3]*a+f[7]*s+f[11]*u+f[15]);return this.x=(f[0]*a+f[4]*s+f[8]*u+f[12])*h,this.y=(f[1]*a+f[5]*s+f[9]*u+f[13])*h,this.z=(f[2]*a+f[6]*s+f[10]*u+f[14])*h,this}applyQuaternion(e){const a=this.x,s=this.y,u=this.z,f=e.x,h=e.y,d=e.z,_=e.w,g=2*(h*u-d*s),v=2*(d*a-f*u),p=2*(f*s-h*a);return this.x=a+_*g+h*p-d*v,this.y=s+_*v+d*g-f*p,this.z=u+_*p+f*v-h*g,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const a=this.x,s=this.y,u=this.z,f=e.elements;return this.x=f[0]*a+f[4]*s+f[8]*u,this.y=f[1]*a+f[5]*s+f[9]*u,this.z=f[2]*a+f[6]*s+f[10]*u,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,a){return this.x=be(this.x,e.x,a.x),this.y=be(this.y,e.y,a.y),this.z=be(this.z,e.z,a.z),this}clampScalar(e,a){return this.x=be(this.x,e,a),this.y=be(this.y,e,a),this.z=be(this.z,e,a),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this.z=e.z+(a.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,a){const s=e.x,u=e.y,f=e.z,h=a.x,d=a.y,_=a.z;return this.x=u*_-f*d,this.y=f*h-s*_,this.z=s*d-u*h,this}projectOnVector(e){const a=e.lengthSq();if(a===0)return this.set(0,0,0);const s=e.dot(this)/a;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return sd.copy(this).projectOnVector(e),this.sub(sd)}reflect(e){return this.sub(sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const a=Math.sqrt(this.lengthSq()*e.lengthSq());if(a===0)return Math.PI/2;const s=this.dot(e)/a;return Math.acos(be(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const a=this.x-e.x,s=this.y-e.y,u=this.z-e.z;return a*a+s*s+u*u}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,a,s){const u=Math.sin(a)*e;return this.x=u*Math.sin(s),this.y=Math.cos(a)*e,this.z=u*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,a,s){return this.x=e*Math.sin(a),this.y=s,this.z=e*Math.cos(a),this}setFromMatrixPosition(e){const a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this}setFromMatrixScale(e){const a=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),u=this.setFromMatrixColumn(e,2).length();return this.x=a,this.y=s,this.z=u,this}setFromMatrixColumn(e,a){return this.fromArray(e.elements,a*4)}setFromMatrix3Column(e,a){return this.fromArray(e.elements,a*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,a=Math.random()*2-1,s=Math.sqrt(1-a*a);return this.x=s*Math.cos(e),this.y=a,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sd=new st,cv=new vl;class de{constructor(e,a,s,u,f,h,d,_,g){de.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,a,s,u,f,h,d,_,g)}set(e,a,s,u,f,h,d,_,g){const v=this.elements;return v[0]=e,v[1]=u,v[2]=d,v[3]=a,v[4]=f,v[5]=_,v[6]=s,v[7]=h,v[8]=g,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const a=this.elements,s=e.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],this}extractBasis(e,a,s){return e.setFromMatrix3Column(this,0),a.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const a=e.elements;return this.set(a[0],a[4],a[8],a[1],a[5],a[9],a[2],a[6],a[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){const s=e.elements,u=a.elements,f=this.elements,h=s[0],d=s[3],_=s[6],g=s[1],v=s[4],p=s[7],x=s[2],M=s[5],b=s[8],C=u[0],y=u[3],S=u[6],I=u[1],O=u[4],D=u[7],G=u[2],F=u[5],z=u[8];return f[0]=h*C+d*I+_*G,f[3]=h*y+d*O+_*F,f[6]=h*S+d*D+_*z,f[1]=g*C+v*I+p*G,f[4]=g*y+v*O+p*F,f[7]=g*S+v*D+p*z,f[2]=x*C+M*I+b*G,f[5]=x*y+M*O+b*F,f[8]=x*S+M*D+b*z,this}multiplyScalar(e){const a=this.elements;return a[0]*=e,a[3]*=e,a[6]*=e,a[1]*=e,a[4]*=e,a[7]*=e,a[2]*=e,a[5]*=e,a[8]*=e,this}determinant(){const e=this.elements,a=e[0],s=e[1],u=e[2],f=e[3],h=e[4],d=e[5],_=e[6],g=e[7],v=e[8];return a*h*v-a*d*g-s*f*v+s*d*_+u*f*g-u*h*_}invert(){const e=this.elements,a=e[0],s=e[1],u=e[2],f=e[3],h=e[4],d=e[5],_=e[6],g=e[7],v=e[8],p=v*h-d*g,x=d*_-v*f,M=g*f-h*_,b=a*p+s*x+u*M;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return e[0]=p*C,e[1]=(u*g-v*s)*C,e[2]=(d*s-u*h)*C,e[3]=x*C,e[4]=(v*a-u*_)*C,e[5]=(u*f-d*a)*C,e[6]=M*C,e[7]=(s*_-g*a)*C,e[8]=(h*a-s*f)*C,this}transpose(){let e;const a=this.elements;return e=a[1],a[1]=a[3],a[3]=e,e=a[2],a[2]=a[6],a[6]=e,e=a[5],a[5]=a[7],a[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const a=this.elements;return e[0]=a[0],e[1]=a[3],e[2]=a[6],e[3]=a[1],e[4]=a[4],e[5]=a[7],e[6]=a[2],e[7]=a[5],e[8]=a[8],this}setUvTransform(e,a,s,u,f,h,d){const _=Math.cos(f),g=Math.sin(f);return this.set(s*_,s*g,-s*(_*h+g*d)+h+e,-u*g,u*_,-u*(-g*h+_*d)+d+a,0,0,1),this}scale(e,a){return this.premultiply(od.makeScale(e,a)),this}rotate(e){return this.premultiply(od.makeRotation(-e)),this}translate(e,a){return this.premultiply(od.makeTranslation(e,a)),this}makeTranslation(e,a){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,a,0,0,1),this}makeRotation(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,-s,0,s,a,0,0,0,1),this}makeScale(e,a){return this.set(e,0,0,0,a,0,0,0,1),this}equals(e){const a=this.elements,s=e.elements;for(let u=0;u<9;u++)if(a[u]!==s[u])return!1;return!0}fromArray(e,a=0){for(let s=0;s<9;s++)this.elements[s]=e[s+a];return this}toArray(e=[],a=0){const s=this.elements;return e[a]=s[0],e[a+1]=s[1],e[a+2]=s[2],e[a+3]=s[3],e[a+4]=s[4],e[a+5]=s[5],e[a+6]=s[6],e[a+7]=s[7],e[a+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const od=new de;function vS(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function yc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function qE(){const o=yc("canvas");return o.style.display="block",o}const fv={};function gl(o){o in fv||(fv[o]=!0,console.warn(o))}function YE(o,e,a){return new Promise(function(s,u){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:u();break;case o.TIMEOUT_EXPIRED:setTimeout(f,a);break;default:s()}}setTimeout(f,a)})}const hv=new de().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dv=new de().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function WE(){const o={enabled:!0,workingColorSpace:ao,spaces:{},convert:function(u,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===ke&&(u.r=Ta(u.r),u.g=Ta(u.g),u.b=Ta(u.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(u.applyMatrix3(this.spaces[f].toXYZ),u.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===ke&&(u.r=$s(u.r),u.g=$s(u.g),u.b=$s(u.b))),u},workingToColorSpace:function(u,f){return this.convert(u,this.workingColorSpace,f)},colorSpaceToWorking:function(u,f){return this.convert(u,f,this.workingColorSpace)},getPrimaries:function(u){return this.spaces[u].primaries},getTransfer:function(u){return u===rr?Sc:this.spaces[u].transfer},getToneMappingMode:function(u){return this.spaces[u].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(u,f=this.workingColorSpace){return u.fromArray(this.spaces[f].luminanceCoefficients)},define:function(u){Object.assign(this.spaces,u)},_getMatrix:function(u,f,h){return u.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(u){return this.spaces[u].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(u=this.workingColorSpace){return this.spaces[u].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(u,f){return gl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(u,f)},toWorkingColorSpace:function(u,f){return gl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(u,f)}},e=[.64,.33,.3,.6,.15,.06],a=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[ao]:{primaries:e,whitePoint:s,transfer:Sc,toXYZ:hv,fromXYZ:dv,luminanceCoefficients:a,workingColorSpaceConfig:{unpackColorSpace:xi},outputColorSpaceConfig:{drawingBufferColorSpace:xi}},[xi]:{primaries:e,whitePoint:s,transfer:ke,toXYZ:hv,fromXYZ:dv,luminanceCoefficients:a,outputColorSpaceConfig:{drawingBufferColorSpace:xi}}}),o}const De=WE();function Ta(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function $s(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Ps;class jE{static getDataURL(e,a="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ps===void 0&&(Ps=yc("canvas")),Ps.width=e.width,Ps.height=e.height;const u=Ps.getContext("2d");e instanceof ImageData?u.putImageData(e,0,0):u.drawImage(e,0,0,e.width,e.height),s=Ps}return s.toDataURL(a)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const a=yc("canvas");a.width=e.width,a.height=e.height;const s=a.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const u=s.getImageData(0,0,e.width,e.height),f=u.data;for(let h=0;h<f.length;h++)f[h]=Ta(f[h]/255)*255;return s.putImageData(u,0,0),a}else if(e.data){const a=e.data.slice(0);for(let s=0;s<a.length;s++)a instanceof Uint8Array||a instanceof Uint8ClampedArray?a[s]=Math.floor(Ta(a[s]/255)*255):a[s]=Ta(a[s]);return{data:a,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ZE=0;class Lp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=oo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const a=this.data;return typeof HTMLVideoElement<"u"&&a instanceof HTMLVideoElement?e.set(a.videoWidth,a.videoHeight,0):a instanceof VideoFrame?e.set(a.displayHeight,a.displayWidth,0):a!==null?e.set(a.width,a.height,a.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const a=e===void 0||typeof e=="string";if(!a&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},u=this.data;if(u!==null){let f;if(Array.isArray(u)){f=[];for(let h=0,d=u.length;h<d;h++)u[h].isDataTexture?f.push(ld(u[h].image)):f.push(ld(u[h]))}else f=ld(u);s.url=f}return a||(e.images[this.uuid]=s),s}}function ld(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?jE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let KE=0;const ud=new st;class Zn extends so{constructor(e=Zn.DEFAULT_IMAGE,a=Zn.DEFAULT_MAPPING,s=kr,u=kr,f=ji,h=qr,d=Ni,_=Qi,g=Zn.DEFAULT_ANISOTROPY,v=rr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:KE++}),this.uuid=oo(),this.name="",this.source=new Lp(e),this.mipmaps=[],this.mapping=a,this.channel=0,this.wrapS=s,this.wrapT=u,this.magFilter=f,this.minFilter=h,this.anisotropy=g,this.format=d,this.internalFormat=null,this.type=_,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new de,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ud).x}get height(){return this.source.getSize(ud).y}get depth(){return this.source.getSize(ud).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const a in e){const s=e[a];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){console.warn(`THREE.Texture.setValues(): property '${a}' does not exist.`);continue}u&&s&&u.isVector2&&s.isVector2||u&&s&&u.isVector3&&s.isVector3||u&&s&&u.isMatrix3&&s.isMatrix3?u.copy(s):this[a]=s}}toJSON(e){const a=e===void 0||typeof e=="string";if(!a&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),a||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==oS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Yd:e.x=e.x-Math.floor(e.x);break;case kr:e.x=e.x<0?0:1;break;case Wd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Yd:e.y=e.y-Math.floor(e.y);break;case kr:e.y=e.y<0?0:1;break;case Wd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=oS;Zn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,a=0,s=0,u=1){rn.prototype.isVector4=!0,this.x=e,this.y=a,this.z=s,this.w=u}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,a,s,u){return this.x=e,this.y=a,this.z=s,this.w=u,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,a){switch(e){case 0:this.x=a;break;case 1:this.y=a;break;case 2:this.z=a;break;case 3:this.w=a;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,a){return this.x=e.x+a.x,this.y=e.y+a.y,this.z=e.z+a.z,this.w=e.w+a.w,this}addScaledVector(e,a){return this.x+=e.x*a,this.y+=e.y*a,this.z+=e.z*a,this.w+=e.w*a,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,a){return this.x=e.x-a.x,this.y=e.y-a.y,this.z=e.z-a.z,this.w=e.w-a.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const a=this.x,s=this.y,u=this.z,f=this.w,h=e.elements;return this.x=h[0]*a+h[4]*s+h[8]*u+h[12]*f,this.y=h[1]*a+h[5]*s+h[9]*u+h[13]*f,this.z=h[2]*a+h[6]*s+h[10]*u+h[14]*f,this.w=h[3]*a+h[7]*s+h[11]*u+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const a=Math.sqrt(1-e.w*e.w);return a<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/a,this.y=e.y/a,this.z=e.z/a),this}setAxisAngleFromRotationMatrix(e){let a,s,u,f;const _=e.elements,g=_[0],v=_[4],p=_[8],x=_[1],M=_[5],b=_[9],C=_[2],y=_[6],S=_[10];if(Math.abs(v-x)<.01&&Math.abs(p-C)<.01&&Math.abs(b-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(p+C)<.1&&Math.abs(b+y)<.1&&Math.abs(g+M+S-3)<.1)return this.set(1,0,0,0),this;a=Math.PI;const O=(g+1)/2,D=(M+1)/2,G=(S+1)/2,F=(v+x)/4,z=(p+C)/4,k=(b+y)/4;return O>D&&O>G?O<.01?(s=0,u=.707106781,f=.707106781):(s=Math.sqrt(O),u=F/s,f=z/s):D>G?D<.01?(s=.707106781,u=0,f=.707106781):(u=Math.sqrt(D),s=F/u,f=k/u):G<.01?(s=.707106781,u=.707106781,f=0):(f=Math.sqrt(G),s=z/f,u=k/f),this.set(s,u,f,a),this}let I=Math.sqrt((y-b)*(y-b)+(p-C)*(p-C)+(x-v)*(x-v));return Math.abs(I)<.001&&(I=1),this.x=(y-b)/I,this.y=(p-C)/I,this.z=(x-v)/I,this.w=Math.acos((g+M+S-1)/2),this}setFromMatrixPosition(e){const a=e.elements;return this.x=a[12],this.y=a[13],this.z=a[14],this.w=a[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,a){return this.x=be(this.x,e.x,a.x),this.y=be(this.y,e.y,a.y),this.z=be(this.z,e.z,a.z),this.w=be(this.w,e.w,a.w),this}clampScalar(e,a){return this.x=be(this.x,e,a),this.y=be(this.y,e,a),this.z=be(this.z,e,a),this.w=be(this.w,e,a),this}clampLength(e,a){const s=this.length();return this.divideScalar(s||1).multiplyScalar(be(s,e,a))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,a){return this.x+=(e.x-this.x)*a,this.y+=(e.y-this.y)*a,this.z+=(e.z-this.z)*a,this.w+=(e.w-this.w)*a,this}lerpVectors(e,a,s){return this.x=e.x+(a.x-e.x)*s,this.y=e.y+(a.y-e.y)*s,this.z=e.z+(a.z-e.z)*s,this.w=e.w+(a.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,a=0){return this.x=e[a],this.y=e[a+1],this.z=e[a+2],this.w=e[a+3],this}toArray(e=[],a=0){return e[a]=this.x,e[a+1]=this.y,e[a+2]=this.z,e[a+3]=this.w,e}fromBufferAttribute(e,a){return this.x=e.getX(a),this.y=e.getY(a),this.z=e.getZ(a),this.w=e.getW(a),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QE extends so{constructor(e=1,a=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ji,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=a,this.depth=s.depth,this.scissor=new rn(0,0,e,a),this.scissorTest=!1,this.viewport=new rn(0,0,e,a);const u={width:e,height:a,depth:s.depth},f=new Zn(u);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const a={minFilter:ji,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(a.mapping=e.mapping),e.wrapS!==void 0&&(a.wrapS=e.wrapS),e.wrapT!==void 0&&(a.wrapT=e.wrapT),e.wrapR!==void 0&&(a.wrapR=e.wrapR),e.magFilter!==void 0&&(a.magFilter=e.magFilter),e.minFilter!==void 0&&(a.minFilter=e.minFilter),e.format!==void 0&&(a.format=e.format),e.type!==void 0&&(a.type=e.type),e.anisotropy!==void 0&&(a.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(a.colorSpace=e.colorSpace),e.flipY!==void 0&&(a.flipY=e.flipY),e.generateMipmaps!==void 0&&(a.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(a.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(a)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,a,s=1){if(this.width!==e||this.height!==a||this.depth!==s){this.width=e,this.height=a,this.depth=s;for(let u=0,f=this.textures.length;u<f;u++)this.textures[u].image.width=e,this.textures[u].image.height=a,this.textures[u].image.depth=s,this.textures[u].isArrayTexture=this.textures[u].image.depth>1;this.dispose()}this.viewport.set(0,0,e,a),this.scissor.set(0,0,e,a)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let a=0,s=e.textures.length;a<s;a++){this.textures[a]=e.textures[a].clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;const u=Object.assign({},e.textures[a].image);this.textures[a].source=new Lp(u)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wr extends QE{constructor(e=1,a=1,s={}){super(e,a,s),this.isWebGLRenderTarget=!0}}class SS extends Zn{constructor(e=null,a=1,s=1,u=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:a,height:s,depth:u},this.magFilter=Li,this.minFilter=Li,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class JE extends Zn{constructor(e=null,a=1,s=1,u=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:a,height:s,depth:u},this.magFilter=Li,this.minFilter=Li,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sl{constructor(e=new st(1/0,1/0,1/0),a=new st(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=a}set(e,a){return this.min.copy(e),this.max.copy(a),this}setFromArray(e){this.makeEmpty();for(let a=0,s=e.length;a<s;a+=3)this.expandByPoint(Ci.fromArray(e,a));return this}setFromBufferAttribute(e){this.makeEmpty();for(let a=0,s=e.count;a<s;a++)this.expandByPoint(Ci.fromBufferAttribute(e,a));return this}setFromPoints(e){this.makeEmpty();for(let a=0,s=e.length;a<s;a++)this.expandByPoint(e[a]);return this}setFromCenterAndSize(e,a){const s=Ci.copy(a).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,a=!1){return this.makeEmpty(),this.expandByObject(e,a)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,a=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(a===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ci):Ci.fromBufferAttribute(f,h),Ci.applyMatrix4(e.matrixWorld),this.expandByPoint(Ci);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),qu.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),qu.copy(s.boundingBox)),qu.applyMatrix4(e.matrixWorld),this.union(qu)}const u=e.children;for(let f=0,h=u.length;f<h;f++)this.expandByObject(u[f],a);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,a){return a.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let a,s;return e.normal.x>0?(a=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(a=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(a+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(a+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(a+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(a+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),a<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(al),Yu.subVectors(this.max,al),Is.subVectors(e.a,al),Bs.subVectors(e.b,al),Fs.subVectors(e.c,al),$a.subVectors(Bs,Is),tr.subVectors(Fs,Bs),Or.subVectors(Is,Fs);let a=[0,-$a.z,$a.y,0,-tr.z,tr.y,0,-Or.z,Or.y,$a.z,0,-$a.x,tr.z,0,-tr.x,Or.z,0,-Or.x,-$a.y,$a.x,0,-tr.y,tr.x,0,-Or.y,Or.x,0];return!cd(a,Is,Bs,Fs,Yu)||(a=[1,0,0,0,1,0,0,0,1],!cd(a,Is,Bs,Fs,Yu))?!1:(Wu.crossVectors($a,tr),a=[Wu.x,Wu.y,Wu.z],cd(a,Is,Bs,Fs,Yu))}clampPoint(e,a){return a.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_a[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_a[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_a[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_a[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_a[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_a[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_a[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_a[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_a),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _a=[new st,new st,new st,new st,new st,new st,new st,new st],Ci=new st,qu=new Sl,Is=new st,Bs=new st,Fs=new st,$a=new st,tr=new st,Or=new st,al=new st,Yu=new st,Wu=new st,zr=new st;function cd(o,e,a,s,u){for(let f=0,h=o.length-3;f<=h;f+=3){zr.fromArray(o,f);const d=u.x*Math.abs(zr.x)+u.y*Math.abs(zr.y)+u.z*Math.abs(zr.z),_=e.dot(zr),g=a.dot(zr),v=s.dot(zr);if(Math.max(-Math.max(_,g,v),Math.min(_,g,v))>d)return!1}return!0}const $E=new Sl,rl=new st,fd=new st;class Ec{constructor(e=new st,a=-1){this.isSphere=!0,this.center=e,this.radius=a}set(e,a){return this.center.copy(e),this.radius=a,this}setFromPoints(e,a){const s=this.center;a!==void 0?s.copy(a):$E.setFromPoints(e).getCenter(s);let u=0;for(let f=0,h=e.length;f<h;f++)u=Math.max(u,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(u),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const a=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=a*a}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,a){const s=this.center.distanceToSquared(e);return a.copy(e),s>this.radius*this.radius&&(a.sub(this.center).normalize(),a.multiplyScalar(this.radius).add(this.center)),a}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rl.subVectors(e,this.center);const a=rl.lengthSq();if(a>this.radius*this.radius){const s=Math.sqrt(a),u=(s-this.radius)*.5;this.center.addScaledVector(rl,u/s),this.radius+=u}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rl.copy(e.center).add(fd)),this.expandByPoint(rl.copy(e.center).sub(fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const va=new st,hd=new st,ju=new st,er=new st,dd=new st,Zu=new st,pd=new st;class xS{constructor(e=new st,a=new st(0,0,-1)){this.origin=e,this.direction=a}set(e,a){return this.origin.copy(e),this.direction.copy(a),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,a){return a.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,va)),this}closestPointToPoint(e,a){a.subVectors(e,this.origin);const s=a.dot(this.direction);return s<0?a.copy(this.origin):a.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const a=va.subVectors(e,this.origin).dot(this.direction);return a<0?this.origin.distanceToSquared(e):(va.copy(this.origin).addScaledVector(this.direction,a),va.distanceToSquared(e))}distanceSqToSegment(e,a,s,u){hd.copy(e).add(a).multiplyScalar(.5),ju.copy(a).sub(e).normalize(),er.copy(this.origin).sub(hd);const f=e.distanceTo(a)*.5,h=-this.direction.dot(ju),d=er.dot(this.direction),_=-er.dot(ju),g=er.lengthSq(),v=Math.abs(1-h*h);let p,x,M,b;if(v>0)if(p=h*_-d,x=h*d-_,b=f*v,p>=0)if(x>=-b)if(x<=b){const C=1/v;p*=C,x*=C,M=p*(p+h*x+2*d)+x*(h*p+x+2*_)+g}else x=f,p=Math.max(0,-(h*x+d)),M=-p*p+x*(x+2*_)+g;else x=-f,p=Math.max(0,-(h*x+d)),M=-p*p+x*(x+2*_)+g;else x<=-b?(p=Math.max(0,-(-h*f+d)),x=p>0?-f:Math.min(Math.max(-f,-_),f),M=-p*p+x*(x+2*_)+g):x<=b?(p=0,x=Math.min(Math.max(-f,-_),f),M=x*(x+2*_)+g):(p=Math.max(0,-(h*f+d)),x=p>0?f:Math.min(Math.max(-f,-_),f),M=-p*p+x*(x+2*_)+g);else x=h>0?-f:f,p=Math.max(0,-(h*x+d)),M=-p*p+x*(x+2*_)+g;return s&&s.copy(this.origin).addScaledVector(this.direction,p),u&&u.copy(hd).addScaledVector(ju,x),M}intersectSphere(e,a){va.subVectors(e.center,this.origin);const s=va.dot(this.direction),u=va.dot(va)-s*s,f=e.radius*e.radius;if(u>f)return null;const h=Math.sqrt(f-u),d=s-h,_=s+h;return _<0?null:d<0?this.at(_,a):this.at(d,a)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const a=e.normal.dot(this.direction);if(a===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/a;return s>=0?s:null}intersectPlane(e,a){const s=this.distanceToPlane(e);return s===null?null:this.at(s,a)}intersectsPlane(e){const a=e.distanceToPoint(this.origin);return a===0||e.normal.dot(this.direction)*a<0}intersectBox(e,a){let s,u,f,h,d,_;const g=1/this.direction.x,v=1/this.direction.y,p=1/this.direction.z,x=this.origin;return g>=0?(s=(e.min.x-x.x)*g,u=(e.max.x-x.x)*g):(s=(e.max.x-x.x)*g,u=(e.min.x-x.x)*g),v>=0?(f=(e.min.y-x.y)*v,h=(e.max.y-x.y)*v):(f=(e.max.y-x.y)*v,h=(e.min.y-x.y)*v),s>h||f>u||((f>s||isNaN(s))&&(s=f),(h<u||isNaN(u))&&(u=h),p>=0?(d=(e.min.z-x.z)*p,_=(e.max.z-x.z)*p):(d=(e.max.z-x.z)*p,_=(e.min.z-x.z)*p),s>_||d>u)||((d>s||s!==s)&&(s=d),(_<u||u!==u)&&(u=_),u<0)?null:this.at(s>=0?s:u,a)}intersectsBox(e){return this.intersectBox(e,va)!==null}intersectTriangle(e,a,s,u,f){dd.subVectors(a,e),Zu.subVectors(s,e),pd.crossVectors(dd,Zu);let h=this.direction.dot(pd),d;if(h>0){if(u)return null;d=1}else if(h<0)d=-1,h=-h;else return null;er.subVectors(this.origin,e);const _=d*this.direction.dot(Zu.crossVectors(er,Zu));if(_<0)return null;const g=d*this.direction.dot(dd.cross(er));if(g<0||_+g>h)return null;const v=-d*er.dot(pd);return v<0?null:this.at(v/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,a,s,u,f,h,d,_,g,v,p,x,M,b,C,y){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,a,s,u,f,h,d,_,g,v,p,x,M,b,C,y)}set(e,a,s,u,f,h,d,_,g,v,p,x,M,b,C,y){const S=this.elements;return S[0]=e,S[4]=a,S[8]=s,S[12]=u,S[1]=f,S[5]=h,S[9]=d,S[13]=_,S[2]=g,S[6]=v,S[10]=p,S[14]=x,S[3]=M,S[7]=b,S[11]=C,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const a=this.elements,s=e.elements;return a[0]=s[0],a[1]=s[1],a[2]=s[2],a[3]=s[3],a[4]=s[4],a[5]=s[5],a[6]=s[6],a[7]=s[7],a[8]=s[8],a[9]=s[9],a[10]=s[10],a[11]=s[11],a[12]=s[12],a[13]=s[13],a[14]=s[14],a[15]=s[15],this}copyPosition(e){const a=this.elements,s=e.elements;return a[12]=s[12],a[13]=s[13],a[14]=s[14],this}setFromMatrix3(e){const a=e.elements;return this.set(a[0],a[3],a[6],0,a[1],a[4],a[7],0,a[2],a[5],a[8],0,0,0,0,1),this}extractBasis(e,a,s){return e.setFromMatrixColumn(this,0),a.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,a,s){return this.set(e.x,a.x,s.x,0,e.y,a.y,s.y,0,e.z,a.z,s.z,0,0,0,0,1),this}extractRotation(e){const a=this.elements,s=e.elements,u=1/Hs.setFromMatrixColumn(e,0).length(),f=1/Hs.setFromMatrixColumn(e,1).length(),h=1/Hs.setFromMatrixColumn(e,2).length();return a[0]=s[0]*u,a[1]=s[1]*u,a[2]=s[2]*u,a[3]=0,a[4]=s[4]*f,a[5]=s[5]*f,a[6]=s[6]*f,a[7]=0,a[8]=s[8]*h,a[9]=s[9]*h,a[10]=s[10]*h,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromEuler(e){const a=this.elements,s=e.x,u=e.y,f=e.z,h=Math.cos(s),d=Math.sin(s),_=Math.cos(u),g=Math.sin(u),v=Math.cos(f),p=Math.sin(f);if(e.order==="XYZ"){const x=h*v,M=h*p,b=d*v,C=d*p;a[0]=_*v,a[4]=-_*p,a[8]=g,a[1]=M+b*g,a[5]=x-C*g,a[9]=-d*_,a[2]=C-x*g,a[6]=b+M*g,a[10]=h*_}else if(e.order==="YXZ"){const x=_*v,M=_*p,b=g*v,C=g*p;a[0]=x+C*d,a[4]=b*d-M,a[8]=h*g,a[1]=h*p,a[5]=h*v,a[9]=-d,a[2]=M*d-b,a[6]=C+x*d,a[10]=h*_}else if(e.order==="ZXY"){const x=_*v,M=_*p,b=g*v,C=g*p;a[0]=x-C*d,a[4]=-h*p,a[8]=b+M*d,a[1]=M+b*d,a[5]=h*v,a[9]=C-x*d,a[2]=-h*g,a[6]=d,a[10]=h*_}else if(e.order==="ZYX"){const x=h*v,M=h*p,b=d*v,C=d*p;a[0]=_*v,a[4]=b*g-M,a[8]=x*g+C,a[1]=_*p,a[5]=C*g+x,a[9]=M*g-b,a[2]=-g,a[6]=d*_,a[10]=h*_}else if(e.order==="YZX"){const x=h*_,M=h*g,b=d*_,C=d*g;a[0]=_*v,a[4]=C-x*p,a[8]=b*p+M,a[1]=p,a[5]=h*v,a[9]=-d*v,a[2]=-g*v,a[6]=M*p+b,a[10]=x-C*p}else if(e.order==="XZY"){const x=h*_,M=h*g,b=d*_,C=d*g;a[0]=_*v,a[4]=-p,a[8]=g*v,a[1]=x*p+C,a[5]=h*v,a[9]=M*p-b,a[2]=b*p-M,a[6]=d*v,a[10]=C*p+x}return a[3]=0,a[7]=0,a[11]=0,a[12]=0,a[13]=0,a[14]=0,a[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tT,e,eT)}lookAt(e,a,s){const u=this.elements;return si.subVectors(e,a),si.lengthSq()===0&&(si.z=1),si.normalize(),nr.crossVectors(s,si),nr.lengthSq()===0&&(Math.abs(s.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),nr.crossVectors(s,si)),nr.normalize(),Ku.crossVectors(si,nr),u[0]=nr.x,u[4]=Ku.x,u[8]=si.x,u[1]=nr.y,u[5]=Ku.y,u[9]=si.y,u[2]=nr.z,u[6]=Ku.z,u[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,a){const s=e.elements,u=a.elements,f=this.elements,h=s[0],d=s[4],_=s[8],g=s[12],v=s[1],p=s[5],x=s[9],M=s[13],b=s[2],C=s[6],y=s[10],S=s[14],I=s[3],O=s[7],D=s[11],G=s[15],F=u[0],z=u[4],k=u[8],w=u[12],R=u[1],V=u[5],at=u[9],ct=u[13],gt=u[2],ut=u[6],Y=u[10],it=u[14],K=u[3],vt=u[7],xt=u[11],Bt=u[15];return f[0]=h*F+d*R+_*gt+g*K,f[4]=h*z+d*V+_*ut+g*vt,f[8]=h*k+d*at+_*Y+g*xt,f[12]=h*w+d*ct+_*it+g*Bt,f[1]=v*F+p*R+x*gt+M*K,f[5]=v*z+p*V+x*ut+M*vt,f[9]=v*k+p*at+x*Y+M*xt,f[13]=v*w+p*ct+x*it+M*Bt,f[2]=b*F+C*R+y*gt+S*K,f[6]=b*z+C*V+y*ut+S*vt,f[10]=b*k+C*at+y*Y+S*xt,f[14]=b*w+C*ct+y*it+S*Bt,f[3]=I*F+O*R+D*gt+G*K,f[7]=I*z+O*V+D*ut+G*vt,f[11]=I*k+O*at+D*Y+G*xt,f[15]=I*w+O*ct+D*it+G*Bt,this}multiplyScalar(e){const a=this.elements;return a[0]*=e,a[4]*=e,a[8]*=e,a[12]*=e,a[1]*=e,a[5]*=e,a[9]*=e,a[13]*=e,a[2]*=e,a[6]*=e,a[10]*=e,a[14]*=e,a[3]*=e,a[7]*=e,a[11]*=e,a[15]*=e,this}determinant(){const e=this.elements,a=e[0],s=e[4],u=e[8],f=e[12],h=e[1],d=e[5],_=e[9],g=e[13],v=e[2],p=e[6],x=e[10],M=e[14],b=e[3],C=e[7],y=e[11],S=e[15];return b*(+f*_*p-u*g*p-f*d*x+s*g*x+u*d*M-s*_*M)+C*(+a*_*M-a*g*x+f*h*x-u*h*M+u*g*v-f*_*v)+y*(+a*g*p-a*d*M-f*h*p+s*h*M+f*d*v-s*g*v)+S*(-u*d*v-a*_*p+a*d*x+u*h*p-s*h*x+s*_*v)}transpose(){const e=this.elements;let a;return a=e[1],e[1]=e[4],e[4]=a,a=e[2],e[2]=e[8],e[8]=a,a=e[6],e[6]=e[9],e[9]=a,a=e[3],e[3]=e[12],e[12]=a,a=e[7],e[7]=e[13],e[13]=a,a=e[11],e[11]=e[14],e[14]=a,this}setPosition(e,a,s){const u=this.elements;return e.isVector3?(u[12]=e.x,u[13]=e.y,u[14]=e.z):(u[12]=e,u[13]=a,u[14]=s),this}invert(){const e=this.elements,a=e[0],s=e[1],u=e[2],f=e[3],h=e[4],d=e[5],_=e[6],g=e[7],v=e[8],p=e[9],x=e[10],M=e[11],b=e[12],C=e[13],y=e[14],S=e[15],I=p*y*g-C*x*g+C*_*M-d*y*M-p*_*S+d*x*S,O=b*x*g-v*y*g-b*_*M+h*y*M+v*_*S-h*x*S,D=v*C*g-b*p*g+b*d*M-h*C*M-v*d*S+h*p*S,G=b*p*_-v*C*_-b*d*x+h*C*x+v*d*y-h*p*y,F=a*I+s*O+u*D+f*G;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/F;return e[0]=I*z,e[1]=(C*x*f-p*y*f-C*u*M+s*y*M+p*u*S-s*x*S)*z,e[2]=(d*y*f-C*_*f+C*u*g-s*y*g-d*u*S+s*_*S)*z,e[3]=(p*_*f-d*x*f-p*u*g+s*x*g+d*u*M-s*_*M)*z,e[4]=O*z,e[5]=(v*y*f-b*x*f+b*u*M-a*y*M-v*u*S+a*x*S)*z,e[6]=(b*_*f-h*y*f-b*u*g+a*y*g+h*u*S-a*_*S)*z,e[7]=(h*x*f-v*_*f+v*u*g-a*x*g-h*u*M+a*_*M)*z,e[8]=D*z,e[9]=(b*p*f-v*C*f-b*s*M+a*C*M+v*s*S-a*p*S)*z,e[10]=(h*C*f-b*d*f+b*s*g-a*C*g-h*s*S+a*d*S)*z,e[11]=(v*d*f-h*p*f-v*s*g+a*p*g+h*s*M-a*d*M)*z,e[12]=G*z,e[13]=(v*C*u-b*p*u+b*s*x-a*C*x-v*s*y+a*p*y)*z,e[14]=(b*d*u-h*C*u-b*s*_+a*C*_+h*s*y-a*d*y)*z,e[15]=(h*p*u-v*d*u+v*s*_-a*p*_-h*s*x+a*d*x)*z,this}scale(e){const a=this.elements,s=e.x,u=e.y,f=e.z;return a[0]*=s,a[4]*=u,a[8]*=f,a[1]*=s,a[5]*=u,a[9]*=f,a[2]*=s,a[6]*=u,a[10]*=f,a[3]*=s,a[7]*=u,a[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,a=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],u=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(a,s,u))}makeTranslation(e,a,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,a,0,0,1,s,0,0,0,1),this}makeRotationX(e){const a=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,a,-s,0,0,s,a,0,0,0,0,1),this}makeRotationY(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,0,s,0,0,1,0,0,-s,0,a,0,0,0,0,1),this}makeRotationZ(e){const a=Math.cos(e),s=Math.sin(e);return this.set(a,-s,0,0,s,a,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,a){const s=Math.cos(a),u=Math.sin(a),f=1-s,h=e.x,d=e.y,_=e.z,g=f*h,v=f*d;return this.set(g*h+s,g*d-u*_,g*_+u*d,0,g*d+u*_,v*d+s,v*_-u*h,0,g*_-u*d,v*_+u*h,f*_*_+s,0,0,0,0,1),this}makeScale(e,a,s){return this.set(e,0,0,0,0,a,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,a,s,u,f,h){return this.set(1,s,f,0,e,1,h,0,a,u,1,0,0,0,0,1),this}compose(e,a,s){const u=this.elements,f=a._x,h=a._y,d=a._z,_=a._w,g=f+f,v=h+h,p=d+d,x=f*g,M=f*v,b=f*p,C=h*v,y=h*p,S=d*p,I=_*g,O=_*v,D=_*p,G=s.x,F=s.y,z=s.z;return u[0]=(1-(C+S))*G,u[1]=(M+D)*G,u[2]=(b-O)*G,u[3]=0,u[4]=(M-D)*F,u[5]=(1-(x+S))*F,u[6]=(y+I)*F,u[7]=0,u[8]=(b+O)*z,u[9]=(y-I)*z,u[10]=(1-(x+C))*z,u[11]=0,u[12]=e.x,u[13]=e.y,u[14]=e.z,u[15]=1,this}decompose(e,a,s){const u=this.elements;let f=Hs.set(u[0],u[1],u[2]).length();const h=Hs.set(u[4],u[5],u[6]).length(),d=Hs.set(u[8],u[9],u[10]).length();this.determinant()<0&&(f=-f),e.x=u[12],e.y=u[13],e.z=u[14],wi.copy(this);const g=1/f,v=1/h,p=1/d;return wi.elements[0]*=g,wi.elements[1]*=g,wi.elements[2]*=g,wi.elements[4]*=v,wi.elements[5]*=v,wi.elements[6]*=v,wi.elements[8]*=p,wi.elements[9]*=p,wi.elements[10]*=p,a.setFromRotationMatrix(wi),s.x=f,s.y=h,s.z=d,this}makePerspective(e,a,s,u,f,h,d=Zi,_=!1){const g=this.elements,v=2*f/(a-e),p=2*f/(s-u),x=(a+e)/(a-e),M=(s+u)/(s-u);let b,C;if(_)b=f/(h-f),C=h*f/(h-f);else if(d===Zi)b=-(h+f)/(h-f),C=-2*h*f/(h-f);else if(d===xc)b=-h/(h-f),C=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return g[0]=v,g[4]=0,g[8]=x,g[12]=0,g[1]=0,g[5]=p,g[9]=M,g[13]=0,g[2]=0,g[6]=0,g[10]=b,g[14]=C,g[3]=0,g[7]=0,g[11]=-1,g[15]=0,this}makeOrthographic(e,a,s,u,f,h,d=Zi,_=!1){const g=this.elements,v=2/(a-e),p=2/(s-u),x=-(a+e)/(a-e),M=-(s+u)/(s-u);let b,C;if(_)b=1/(h-f),C=h/(h-f);else if(d===Zi)b=-2/(h-f),C=-(h+f)/(h-f);else if(d===xc)b=-1/(h-f),C=-f/(h-f);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return g[0]=v,g[4]=0,g[8]=0,g[12]=x,g[1]=0,g[5]=p,g[9]=0,g[13]=M,g[2]=0,g[6]=0,g[10]=b,g[14]=C,g[3]=0,g[7]=0,g[11]=0,g[15]=1,this}equals(e){const a=this.elements,s=e.elements;for(let u=0;u<16;u++)if(a[u]!==s[u])return!1;return!0}fromArray(e,a=0){for(let s=0;s<16;s++)this.elements[s]=e[s+a];return this}toArray(e=[],a=0){const s=this.elements;return e[a]=s[0],e[a+1]=s[1],e[a+2]=s[2],e[a+3]=s[3],e[a+4]=s[4],e[a+5]=s[5],e[a+6]=s[6],e[a+7]=s[7],e[a+8]=s[8],e[a+9]=s[9],e[a+10]=s[10],e[a+11]=s[11],e[a+12]=s[12],e[a+13]=s[13],e[a+14]=s[14],e[a+15]=s[15],e}}const Hs=new st,wi=new sn,tT=new st(0,0,0),eT=new st(1,1,1),nr=new st,Ku=new st,si=new st,pv=new sn,mv=new vl;class Ji{constructor(e=0,a=0,s=0,u=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=a,this._z=s,this._order=u}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,a,s,u=this._order){return this._x=e,this._y=a,this._z=s,this._order=u,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,a=this._order,s=!0){const u=e.elements,f=u[0],h=u[4],d=u[8],_=u[1],g=u[5],v=u[9],p=u[2],x=u[6],M=u[10];switch(a){case"XYZ":this._y=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(x,g),this._z=0);break;case"YXZ":this._x=Math.asin(-be(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(_,g)):(this._y=Math.atan2(-p,f),this._z=0);break;case"ZXY":this._x=Math.asin(be(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-p,M),this._z=Math.atan2(-h,g)):(this._y=0,this._z=Math.atan2(_,f));break;case"ZYX":this._y=Math.asin(-be(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(_,f)):(this._x=0,this._z=Math.atan2(-h,g));break;case"YZX":this._z=Math.asin(be(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(-v,g),this._y=Math.atan2(-p,f)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,g),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+a)}return this._order=a,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,a,s){return pv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pv,a,s)}setFromVector3(e,a=this._order){return this.set(e.x,e.y,e.z,a)}reorder(e){return mv.setFromEuler(this),this.setFromQuaternion(mv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],a=0){return e[a]=this._x,e[a+1]=this._y,e[a+2]=this._z,e[a+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class yS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nT=0;const gv=new st,Gs=new vl,Sa=new sn,Qu=new st,sl=new st,iT=new st,aT=new vl,_v=new st(1,0,0),vv=new st(0,1,0),Sv=new st(0,0,1),xv={type:"added"},rT={type:"removed"},Vs={type:"childadded",child:null},md={type:"childremoved",child:null};class En extends so{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=En.DEFAULT_UP.clone();const e=new st,a=new Ji,s=new vl,u=new st(1,1,1);function f(){s.setFromEuler(a,!1)}function h(){a.setFromQuaternion(s,void 0,!1)}a._onChange(f),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:a},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:u},modelViewMatrix:{value:new sn},normalMatrix:{value:new de}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=En.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,a){this.quaternion.setFromAxisAngle(e,a)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,a){return Gs.setFromAxisAngle(e,a),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,a){return Gs.setFromAxisAngle(e,a),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(_v,e)}rotateY(e){return this.rotateOnAxis(vv,e)}rotateZ(e){return this.rotateOnAxis(Sv,e)}translateOnAxis(e,a){return gv.copy(e).applyQuaternion(this.quaternion),this.position.add(gv.multiplyScalar(a)),this}translateX(e){return this.translateOnAxis(_v,e)}translateY(e){return this.translateOnAxis(vv,e)}translateZ(e){return this.translateOnAxis(Sv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sa.copy(this.matrixWorld).invert())}lookAt(e,a,s){e.isVector3?Qu.copy(e):Qu.set(e,a,s);const u=this.parent;this.updateWorldMatrix(!0,!1),sl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sa.lookAt(sl,Qu,this.up):Sa.lookAt(Qu,sl,this.up),this.quaternion.setFromRotationMatrix(Sa),u&&(Sa.extractRotation(u.matrixWorld),Gs.setFromRotationMatrix(Sa),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.add(arguments[a]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xv),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const a=this.children.indexOf(e);return a!==-1&&(e.parent=null,this.children.splice(a,1),e.dispatchEvent(rT),md.child=e,this.dispatchEvent(md),md.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xv),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,a){if(this[e]===a)return this;for(let s=0,u=this.children.length;s<u;s++){const h=this.children[s].getObjectByProperty(e,a);if(h!==void 0)return h}}getObjectsByProperty(e,a,s=[]){this[e]===a&&s.push(this);const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].getObjectsByProperty(e,a,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,e,iT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sl,aT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const a=this.matrixWorld.elements;return e.set(a[8],a[9],a[10]).normalize()}raycast(){}traverse(e){e(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].traverseVisible(e)}traverseAncestors(e){const a=this.parent;a!==null&&(e(a),a.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const a=this.children;for(let s=0,u=a.length;s<u;s++)a[s].updateMatrixWorld(e)}updateWorldMatrix(e,a){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),a===!0){const u=this.children;for(let f=0,h=u.length;f<h;f++)u[f].updateWorldMatrix(!1,!0)}}toJSON(e){const a=e===void 0||typeof e=="string",s={};a&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const u={};u.uuid=this.uuid,u.type=this.type,this.name!==""&&(u.name=this.name),this.castShadow===!0&&(u.castShadow=!0),this.receiveShadow===!0&&(u.receiveShadow=!0),this.visible===!1&&(u.visible=!1),this.frustumCulled===!1&&(u.frustumCulled=!1),this.renderOrder!==0&&(u.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(u.userData=this.userData),u.layers=this.layers.mask,u.matrix=this.matrix.toArray(),u.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(u.matrixAutoUpdate=!1),this.isInstancedMesh&&(u.type="InstancedMesh",u.count=this.count,u.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(u.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(u.type="BatchedMesh",u.perObjectFrustumCulled=this.perObjectFrustumCulled,u.sortObjects=this.sortObjects,u.drawRanges=this._drawRanges,u.reservedRanges=this._reservedRanges,u.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),u.instanceInfo=this._instanceInfo.map(d=>({...d})),u.availableInstanceIds=this._availableInstanceIds.slice(),u.availableGeometryIds=this._availableGeometryIds.slice(),u.nextIndexStart=this._nextIndexStart,u.nextVertexStart=this._nextVertexStart,u.geometryCount=this._geometryCount,u.maxInstanceCount=this._maxInstanceCount,u.maxVertexCount=this._maxVertexCount,u.maxIndexCount=this._maxIndexCount,u.geometryInitialized=this._geometryInitialized,u.matricesTexture=this._matricesTexture.toJSON(e),u.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(u.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(u.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(u.boundingBox=this.boundingBox.toJSON()));function f(d,_){return d[_.uuid]===void 0&&(d[_.uuid]=_.toJSON(e)),_.uuid}if(this.isScene)this.background&&(this.background.isColor?u.background=this.background.toJSON():this.background.isTexture&&(u.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(u.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){u.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const _=d.shapes;if(Array.isArray(_))for(let g=0,v=_.length;g<v;g++){const p=_[g];f(e.shapes,p)}else f(e.shapes,_)}}if(this.isSkinnedMesh&&(u.bindMode=this.bindMode,u.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),u.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let _=0,g=this.material.length;_<g;_++)d.push(f(e.materials,this.material[_]));u.material=d}else u.material=f(e.materials,this.material);if(this.children.length>0){u.children=[];for(let d=0;d<this.children.length;d++)u.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){u.animations=[];for(let d=0;d<this.animations.length;d++){const _=this.animations[d];u.animations.push(f(e.animations,_))}}if(a){const d=h(e.geometries),_=h(e.materials),g=h(e.textures),v=h(e.images),p=h(e.shapes),x=h(e.skeletons),M=h(e.animations),b=h(e.nodes);d.length>0&&(s.geometries=d),_.length>0&&(s.materials=_),g.length>0&&(s.textures=g),v.length>0&&(s.images=v),p.length>0&&(s.shapes=p),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),b.length>0&&(s.nodes=b)}return s.object=u,s;function h(d){const _=[];for(const g in d){const v=d[g];delete v.metadata,_.push(v)}return _}}clone(e){return new this.constructor().copy(this,e)}copy(e,a=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),a===!0)for(let s=0;s<e.children.length;s++){const u=e.children[s];this.add(u.clone())}return this}}En.DEFAULT_UP=new st(0,1,0);En.DEFAULT_MATRIX_AUTO_UPDATE=!0;En.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Di=new st,xa=new st,gd=new st,ya=new st,Xs=new st,ks=new st,yv=new st,_d=new st,vd=new st,Sd=new st,xd=new rn,yd=new rn,Md=new rn;class Ui{constructor(e=new st,a=new st,s=new st){this.a=e,this.b=a,this.c=s}static getNormal(e,a,s,u){u.subVectors(s,a),Di.subVectors(e,a),u.cross(Di);const f=u.lengthSq();return f>0?u.multiplyScalar(1/Math.sqrt(f)):u.set(0,0,0)}static getBarycoord(e,a,s,u,f){Di.subVectors(u,a),xa.subVectors(s,a),gd.subVectors(e,a);const h=Di.dot(Di),d=Di.dot(xa),_=Di.dot(gd),g=xa.dot(xa),v=xa.dot(gd),p=h*g-d*d;if(p===0)return f.set(0,0,0),null;const x=1/p,M=(g*_-d*v)*x,b=(h*v-d*_)*x;return f.set(1-M-b,b,M)}static containsPoint(e,a,s,u){return this.getBarycoord(e,a,s,u,ya)===null?!1:ya.x>=0&&ya.y>=0&&ya.x+ya.y<=1}static getInterpolation(e,a,s,u,f,h,d,_){return this.getBarycoord(e,a,s,u,ya)===null?(_.x=0,_.y=0,"z"in _&&(_.z=0),"w"in _&&(_.w=0),null):(_.setScalar(0),_.addScaledVector(f,ya.x),_.addScaledVector(h,ya.y),_.addScaledVector(d,ya.z),_)}static getInterpolatedAttribute(e,a,s,u,f,h){return xd.setScalar(0),yd.setScalar(0),Md.setScalar(0),xd.fromBufferAttribute(e,a),yd.fromBufferAttribute(e,s),Md.fromBufferAttribute(e,u),h.setScalar(0),h.addScaledVector(xd,f.x),h.addScaledVector(yd,f.y),h.addScaledVector(Md,f.z),h}static isFrontFacing(e,a,s,u){return Di.subVectors(s,a),xa.subVectors(e,a),Di.cross(xa).dot(u)<0}set(e,a,s){return this.a.copy(e),this.b.copy(a),this.c.copy(s),this}setFromPointsAndIndices(e,a,s,u){return this.a.copy(e[a]),this.b.copy(e[s]),this.c.copy(e[u]),this}setFromAttributeAndIndices(e,a,s,u){return this.a.fromBufferAttribute(e,a),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,u),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Di.subVectors(this.c,this.b),xa.subVectors(this.a,this.b),Di.cross(xa).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,a){return Ui.getBarycoord(e,this.a,this.b,this.c,a)}getInterpolation(e,a,s,u,f){return Ui.getInterpolation(e,this.a,this.b,this.c,a,s,u,f)}containsPoint(e){return Ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,a){const s=this.a,u=this.b,f=this.c;let h,d;Xs.subVectors(u,s),ks.subVectors(f,s),_d.subVectors(e,s);const _=Xs.dot(_d),g=ks.dot(_d);if(_<=0&&g<=0)return a.copy(s);vd.subVectors(e,u);const v=Xs.dot(vd),p=ks.dot(vd);if(v>=0&&p<=v)return a.copy(u);const x=_*p-v*g;if(x<=0&&_>=0&&v<=0)return h=_/(_-v),a.copy(s).addScaledVector(Xs,h);Sd.subVectors(e,f);const M=Xs.dot(Sd),b=ks.dot(Sd);if(b>=0&&M<=b)return a.copy(f);const C=M*g-_*b;if(C<=0&&g>=0&&b<=0)return d=g/(g-b),a.copy(s).addScaledVector(ks,d);const y=v*b-M*p;if(y<=0&&p-v>=0&&M-b>=0)return yv.subVectors(f,u),d=(p-v)/(p-v+(M-b)),a.copy(u).addScaledVector(yv,d);const S=1/(y+C+x);return h=C*S,d=x*S,a.copy(s).addScaledVector(Xs,h).addScaledVector(ks,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const MS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},Ju={h:0,s:0,l:0};function Ed(o,e,a){return a<0&&(a+=1),a>1&&(a-=1),a<1/6?o+(e-o)*6*a:a<1/2?e:a<2/3?o+(e-o)*6*(2/3-a):o}class Se{constructor(e,a,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,a,s)}set(e,a,s){if(a===void 0&&s===void 0){const u=e;u&&u.isColor?this.copy(u):typeof u=="number"?this.setHex(u):typeof u=="string"&&this.setStyle(u)}else this.setRGB(e,a,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,a=xi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,De.colorSpaceToWorking(this,a),this}setRGB(e,a,s,u=De.workingColorSpace){return this.r=e,this.g=a,this.b=s,De.colorSpaceToWorking(this,u),this}setHSL(e,a,s,u=De.workingColorSpace){if(e=Np(e,1),a=be(a,0,1),s=be(s,0,1),a===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+a):s+a-s*a,h=2*s-f;this.r=Ed(h,f,e+1/3),this.g=Ed(h,f,e),this.b=Ed(h,f,e-1/3)}return De.colorSpaceToWorking(this,u),this}setStyle(e,a=xi){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let u;if(u=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=u[1],d=u[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,a);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,a);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,a);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(u=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=u[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,a);if(h===6)return this.setHex(parseInt(f,16),a);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,a);return this}setColorName(e,a=xi){const s=MS[e.toLowerCase()];return s!==void 0?this.setHex(s,a):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}copyLinearToSRGB(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xi){return De.workingToColorSpace(On.copy(this),e),Math.round(be(On.r*255,0,255))*65536+Math.round(be(On.g*255,0,255))*256+Math.round(be(On.b*255,0,255))}getHexString(e=xi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,a=De.workingColorSpace){De.workingToColorSpace(On.copy(this),a);const s=On.r,u=On.g,f=On.b,h=Math.max(s,u,f),d=Math.min(s,u,f);let _,g;const v=(d+h)/2;if(d===h)_=0,g=0;else{const p=h-d;switch(g=v<=.5?p/(h+d):p/(2-h-d),h){case s:_=(u-f)/p+(u<f?6:0);break;case u:_=(f-s)/p+2;break;case f:_=(s-u)/p+4;break}_/=6}return e.h=_,e.s=g,e.l=v,e}getRGB(e,a=De.workingColorSpace){return De.workingToColorSpace(On.copy(this),a),e.r=On.r,e.g=On.g,e.b=On.b,e}getStyle(e=xi){De.workingToColorSpace(On.copy(this),e);const a=On.r,s=On.g,u=On.b;return e!==xi?`color(${e} ${a.toFixed(3)} ${s.toFixed(3)} ${u.toFixed(3)})`:`rgb(${Math.round(a*255)},${Math.round(s*255)},${Math.round(u*255)})`}offsetHSL(e,a,s){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+a,ir.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,a){return this.r=e.r+a.r,this.g=e.g+a.g,this.b=e.b+a.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,a){return this.r+=(e.r-this.r)*a,this.g+=(e.g-this.g)*a,this.b+=(e.b-this.b)*a,this}lerpColors(e,a,s){return this.r=e.r+(a.r-e.r)*s,this.g=e.g+(a.g-e.g)*s,this.b=e.b+(a.b-e.b)*s,this}lerpHSL(e,a){this.getHSL(ir),e.getHSL(Ju);const s=cl(ir.h,Ju.h,a),u=cl(ir.s,Ju.s,a),f=cl(ir.l,Ju.l,a);return this.setHSL(s,u,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const a=this.r,s=this.g,u=this.b,f=e.elements;return this.r=f[0]*a+f[3]*s+f[6]*u,this.g=f[1]*a+f[4]*s+f[7]*u,this.b=f[2]*a+f[5]*s+f[8]*u,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,a=0){return this.r=e[a],this.g=e[a+1],this.b=e[a+2],this}toArray(e=[],a=0){return e[a]=this.r,e[a+1]=this.g,e[a+2]=this.b,e}fromBufferAttribute(e,a){return this.r=e.getX(a),this.g=e.getY(a),this.b=e.getZ(a),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const On=new Se;Se.NAMES=MS;let sT=0;class lo extends so{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sT++}),this.uuid=oo(),this.name="",this.type="Material",this.blending=Js,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=zd,this.blendDst=Pd,this.blendEquation=Vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zs,this.stencilZFail=zs,this.stencilZPass=zs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const a in e){const s=e[a];if(s===void 0){console.warn(`THREE.Material: parameter '${a}' has value of undefined.`);continue}const u=this[a];if(u===void 0){console.warn(`THREE.Material: '${a}' is not a property of THREE.${this.type}.`);continue}u&&u.isColor?u.set(s):u&&u.isVector3&&s&&s.isVector3?u.copy(s):this[a]=s}}toJSON(e){const a=e===void 0||typeof e=="string";a&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(s.blending=this.blending),this.side!==lr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==zd&&(s.blendSrc=this.blendSrc),this.blendDst!==Pd&&(s.blendDst=this.blendDst),this.blendEquation!==Vr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sv&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==zs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==zs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function u(f){const h=[];for(const d in f){const _=f[d];delete _.metadata,h.push(_)}return h}if(a){const f=u(e.textures),h=u(e.images);f.length>0&&(s.textures=f),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const a=e.clippingPlanes;let s=null;if(a!==null){const u=a.length;s=new Array(u);for(let f=0;f!==u;++f)s[f]=a[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Op extends lo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=sS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new st,$u=new Oe;let oT=0;class li{constructor(e,a,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oT++}),this.name="",this.array=e,this.itemSize=a,this.count=e!==void 0?e.length/a:0,this.normalized=s,this.usage=ov,this.updateRanges=[],this.gpuType=Ea,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,a){this.updateRanges.push({start:e,count:a})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,a,s){e*=this.itemSize,s*=a.itemSize;for(let u=0,f=this.itemSize;u<f;u++)this.array[e+u]=a.array[s+u];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let a=0,s=this.count;a<s;a++)$u.fromBufferAttribute(this,a),$u.applyMatrix3(e),this.setXY(a,$u.x,$u.y);else if(this.itemSize===3)for(let a=0,s=this.count;a<s;a++)dn.fromBufferAttribute(this,a),dn.applyMatrix3(e),this.setXYZ(a,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let a=0,s=this.count;a<s;a++)dn.fromBufferAttribute(this,a),dn.applyMatrix4(e),this.setXYZ(a,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let a=0,s=this.count;a<s;a++)dn.fromBufferAttribute(this,a),dn.applyNormalMatrix(e),this.setXYZ(a,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let a=0,s=this.count;a<s;a++)dn.fromBufferAttribute(this,a),dn.transformDirection(e),this.setXYZ(a,dn.x,dn.y,dn.z);return this}set(e,a=0){return this.array.set(e,a),this}getComponent(e,a){let s=this.array[e*this.itemSize+a];return this.normalized&&(s=Zs(s,this.array)),s}setComponent(e,a,s){return this.normalized&&(s=Hn(s,this.array)),this.array[e*this.itemSize+a]=s,this}getX(e){let a=this.array[e*this.itemSize];return this.normalized&&(a=Zs(a,this.array)),a}setX(e,a){return this.normalized&&(a=Hn(a,this.array)),this.array[e*this.itemSize]=a,this}getY(e){let a=this.array[e*this.itemSize+1];return this.normalized&&(a=Zs(a,this.array)),a}setY(e,a){return this.normalized&&(a=Hn(a,this.array)),this.array[e*this.itemSize+1]=a,this}getZ(e){let a=this.array[e*this.itemSize+2];return this.normalized&&(a=Zs(a,this.array)),a}setZ(e,a){return this.normalized&&(a=Hn(a,this.array)),this.array[e*this.itemSize+2]=a,this}getW(e){let a=this.array[e*this.itemSize+3];return this.normalized&&(a=Zs(a,this.array)),a}setW(e,a){return this.normalized&&(a=Hn(a,this.array)),this.array[e*this.itemSize+3]=a,this}setXY(e,a,s){return e*=this.itemSize,this.normalized&&(a=Hn(a,this.array),s=Hn(s,this.array)),this.array[e+0]=a,this.array[e+1]=s,this}setXYZ(e,a,s,u){return e*=this.itemSize,this.normalized&&(a=Hn(a,this.array),s=Hn(s,this.array),u=Hn(u,this.array)),this.array[e+0]=a,this.array[e+1]=s,this.array[e+2]=u,this}setXYZW(e,a,s,u,f){return e*=this.itemSize,this.normalized&&(a=Hn(a,this.array),s=Hn(s,this.array),u=Hn(u,this.array),f=Hn(f,this.array)),this.array[e+0]=a,this.array[e+1]=s,this.array[e+2]=u,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ov&&(e.usage=this.usage),e}}class ES extends li{constructor(e,a,s){super(new Uint16Array(e),a,s)}}class TS extends li{constructor(e,a,s){super(new Uint32Array(e),a,s)}}class Ki extends li{constructor(e,a,s){super(new Float32Array(e),a,s)}}let lT=0;const Si=new sn,Td=new En,qs=new st,oi=new Sl,ol=new Sl,Mn=new st;class ta extends so{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lT++}),this.uuid=oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vS(e)?TS:ES)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,a){return this.attributes[e]=a,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,a,s=0){this.groups.push({start:e,count:a,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,a){this.drawRange.start=e,this.drawRange.count=a}applyMatrix4(e){const a=this.attributes.position;a!==void 0&&(a.applyMatrix4(e),a.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new de().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const u=this.attributes.tangent;return u!==void 0&&(u.transformDirection(e),u.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,a,s){return Si.makeTranslation(e,a,s),this.applyMatrix4(Si),this}scale(e,a,s){return Si.makeScale(e,a,s),this.applyMatrix4(Si),this}lookAt(e){return Td.lookAt(e),Td.updateMatrix(),this.applyMatrix4(Td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const a=this.getAttribute("position");if(a===void 0){const s=[];for(let u=0,f=e.length;u<f;u++){const h=e[u];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Ki(s,3))}else{const s=Math.min(e.length,a.count);for(let u=0;u<s;u++){const f=e[u];a.setXYZ(u,f.x,f.y,f.z||0)}e.length>a.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),a.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Sl);const e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new st(-1/0,-1/0,-1/0),new st(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),a)for(let s=0,u=a.length;s<u;s++){const f=a[s];oi.setFromBufferAttribute(f),this.morphTargetsRelative?(Mn.addVectors(this.boundingBox.min,oi.min),this.boundingBox.expandByPoint(Mn),Mn.addVectors(this.boundingBox.max,oi.max),this.boundingBox.expandByPoint(Mn)):(this.boundingBox.expandByPoint(oi.min),this.boundingBox.expandByPoint(oi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ec);const e=this.attributes.position,a=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new st,1/0);return}if(e){const s=this.boundingSphere.center;if(oi.setFromBufferAttribute(e),a)for(let f=0,h=a.length;f<h;f++){const d=a[f];ol.setFromBufferAttribute(d),this.morphTargetsRelative?(Mn.addVectors(oi.min,ol.min),oi.expandByPoint(Mn),Mn.addVectors(oi.max,ol.max),oi.expandByPoint(Mn)):(oi.expandByPoint(ol.min),oi.expandByPoint(ol.max))}oi.getCenter(s);let u=0;for(let f=0,h=e.count;f<h;f++)Mn.fromBufferAttribute(e,f),u=Math.max(u,s.distanceToSquared(Mn));if(a)for(let f=0,h=a.length;f<h;f++){const d=a[f],_=this.morphTargetsRelative;for(let g=0,v=d.count;g<v;g++)Mn.fromBufferAttribute(d,g),_&&(qs.fromBufferAttribute(e,g),Mn.add(qs)),u=Math.max(u,s.distanceToSquared(Mn))}this.boundingSphere.radius=Math.sqrt(u),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,a=this.attributes;if(e===null||a.position===void 0||a.normal===void 0||a.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=a.position,u=a.normal,f=a.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new li(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],_=[];for(let k=0;k<s.count;k++)d[k]=new st,_[k]=new st;const g=new st,v=new st,p=new st,x=new Oe,M=new Oe,b=new Oe,C=new st,y=new st;function S(k,w,R){g.fromBufferAttribute(s,k),v.fromBufferAttribute(s,w),p.fromBufferAttribute(s,R),x.fromBufferAttribute(f,k),M.fromBufferAttribute(f,w),b.fromBufferAttribute(f,R),v.sub(g),p.sub(g),M.sub(x),b.sub(x);const V=1/(M.x*b.y-b.x*M.y);isFinite(V)&&(C.copy(v).multiplyScalar(b.y).addScaledVector(p,-M.y).multiplyScalar(V),y.copy(p).multiplyScalar(M.x).addScaledVector(v,-b.x).multiplyScalar(V),d[k].add(C),d[w].add(C),d[R].add(C),_[k].add(y),_[w].add(y),_[R].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let k=0,w=I.length;k<w;++k){const R=I[k],V=R.start,at=R.count;for(let ct=V,gt=V+at;ct<gt;ct+=3)S(e.getX(ct+0),e.getX(ct+1),e.getX(ct+2))}const O=new st,D=new st,G=new st,F=new st;function z(k){G.fromBufferAttribute(u,k),F.copy(G);const w=d[k];O.copy(w),O.sub(G.multiplyScalar(G.dot(w))).normalize(),D.crossVectors(F,w);const V=D.dot(_[k])<0?-1:1;h.setXYZW(k,O.x,O.y,O.z,V)}for(let k=0,w=I.length;k<w;++k){const R=I[k],V=R.start,at=R.count;for(let ct=V,gt=V+at;ct<gt;ct+=3)z(e.getX(ct+0)),z(e.getX(ct+1)),z(e.getX(ct+2))}}computeVertexNormals(){const e=this.index,a=this.getAttribute("position");if(a!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new li(new Float32Array(a.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const u=new st,f=new st,h=new st,d=new st,_=new st,g=new st,v=new st,p=new st;if(e)for(let x=0,M=e.count;x<M;x+=3){const b=e.getX(x+0),C=e.getX(x+1),y=e.getX(x+2);u.fromBufferAttribute(a,b),f.fromBufferAttribute(a,C),h.fromBufferAttribute(a,y),v.subVectors(h,f),p.subVectors(u,f),v.cross(p),d.fromBufferAttribute(s,b),_.fromBufferAttribute(s,C),g.fromBufferAttribute(s,y),d.add(v),_.add(v),g.add(v),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(C,_.x,_.y,_.z),s.setXYZ(y,g.x,g.y,g.z)}else for(let x=0,M=a.count;x<M;x+=3)u.fromBufferAttribute(a,x+0),f.fromBufferAttribute(a,x+1),h.fromBufferAttribute(a,x+2),v.subVectors(h,f),p.subVectors(u,f),v.cross(p),s.setXYZ(x+0,v.x,v.y,v.z),s.setXYZ(x+1,v.x,v.y,v.z),s.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let a=0,s=e.count;a<s;a++)Mn.fromBufferAttribute(e,a),Mn.normalize(),e.setXYZ(a,Mn.x,Mn.y,Mn.z)}toNonIndexed(){function e(d,_){const g=d.array,v=d.itemSize,p=d.normalized,x=new g.constructor(_.length*v);let M=0,b=0;for(let C=0,y=_.length;C<y;C++){d.isInterleavedBufferAttribute?M=_[C]*d.data.stride+d.offset:M=_[C]*v;for(let S=0;S<v;S++)x[b++]=g[M++]}return new li(x,v,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const a=new ta,s=this.index.array,u=this.attributes;for(const d in u){const _=u[d],g=e(_,s);a.setAttribute(d,g)}const f=this.morphAttributes;for(const d in f){const _=[],g=f[d];for(let v=0,p=g.length;v<p;v++){const x=g[v],M=e(x,s);_.push(M)}a.morphAttributes[d]=_}a.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,_=h.length;d<_;d++){const g=h[d];a.addGroup(g.start,g.count,g.materialIndex)}return a}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const _=this.parameters;for(const g in _)_[g]!==void 0&&(e[g]=_[g]);return e}e.data={attributes:{}};const a=this.index;a!==null&&(e.data.index={type:a.array.constructor.name,array:Array.prototype.slice.call(a.array)});const s=this.attributes;for(const _ in s){const g=s[_];e.data.attributes[_]=g.toJSON(e.data)}const u={};let f=!1;for(const _ in this.morphAttributes){const g=this.morphAttributes[_],v=[];for(let p=0,x=g.length;p<x;p++){const M=g[p];v.push(M.toJSON(e.data))}v.length>0&&(u[_]=v,f=!0)}f&&(e.data.morphAttributes=u,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const a={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const u=e.attributes;for(const g in u){const v=u[g];this.setAttribute(g,v.clone(a))}const f=e.morphAttributes;for(const g in f){const v=[],p=f[g];for(let x=0,M=p.length;x<M;x++)v.push(p[x].clone(a));this.morphAttributes[g]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let g=0,v=h.length;g<v;g++){const p=h[g];this.addGroup(p.start,p.count,p.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const _=e.boundingSphere;return _!==null&&(this.boundingSphere=_.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mv=new sn,Pr=new xS,tc=new Ec,Ev=new st,ec=new st,nc=new st,ic=new st,bd=new st,ac=new st,Tv=new st,rc=new st;class Wn extends En{constructor(e=new ta,a=new Op){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const u=a[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,a){const s=this.geometry,u=s.attributes.position,f=s.morphAttributes.position,h=s.morphTargetsRelative;a.fromBufferAttribute(u,e);const d=this.morphTargetInfluences;if(f&&d){ac.set(0,0,0);for(let _=0,g=f.length;_<g;_++){const v=d[_],p=f[_];v!==0&&(bd.fromBufferAttribute(p,e),h?ac.addScaledVector(bd,v):ac.addScaledVector(bd.sub(a),v))}a.add(ac)}return a}raycast(e,a){const s=this.geometry,u=this.material,f=this.matrixWorld;u!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),tc.copy(s.boundingSphere),tc.applyMatrix4(f),Pr.copy(e.ray).recast(e.near),!(tc.containsPoint(Pr.origin)===!1&&(Pr.intersectSphere(tc,Ev)===null||Pr.origin.distanceToSquared(Ev)>(e.far-e.near)**2))&&(Mv.copy(f).invert(),Pr.copy(e.ray).applyMatrix4(Mv),!(s.boundingBox!==null&&Pr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,a,Pr)))}_computeIntersections(e,a,s){let u;const f=this.geometry,h=this.material,d=f.index,_=f.attributes.position,g=f.attributes.uv,v=f.attributes.uv1,p=f.attributes.normal,x=f.groups,M=f.drawRange;if(d!==null)if(Array.isArray(h))for(let b=0,C=x.length;b<C;b++){const y=x[b],S=h[y.materialIndex],I=Math.max(y.start,M.start),O=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=I,G=O;D<G;D+=3){const F=d.getX(D),z=d.getX(D+1),k=d.getX(D+2);u=sc(this,S,e,s,g,v,p,F,z,k),u&&(u.faceIndex=Math.floor(D/3),u.face.materialIndex=y.materialIndex,a.push(u))}}else{const b=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let y=b,S=C;y<S;y+=3){const I=d.getX(y),O=d.getX(y+1),D=d.getX(y+2);u=sc(this,h,e,s,g,v,p,I,O,D),u&&(u.faceIndex=Math.floor(y/3),a.push(u))}}else if(_!==void 0)if(Array.isArray(h))for(let b=0,C=x.length;b<C;b++){const y=x[b],S=h[y.materialIndex],I=Math.max(y.start,M.start),O=Math.min(_.count,Math.min(y.start+y.count,M.start+M.count));for(let D=I,G=O;D<G;D+=3){const F=D,z=D+1,k=D+2;u=sc(this,S,e,s,g,v,p,F,z,k),u&&(u.faceIndex=Math.floor(D/3),u.face.materialIndex=y.materialIndex,a.push(u))}}else{const b=Math.max(0,M.start),C=Math.min(_.count,M.start+M.count);for(let y=b,S=C;y<S;y+=3){const I=y,O=y+1,D=y+2;u=sc(this,h,e,s,g,v,p,I,O,D),u&&(u.faceIndex=Math.floor(y/3),a.push(u))}}}}function uT(o,e,a,s,u,f,h,d){let _;if(e.side===jn?_=s.intersectTriangle(h,f,u,!0,d):_=s.intersectTriangle(u,f,h,e.side===lr,d),_===null)return null;rc.copy(d),rc.applyMatrix4(o.matrixWorld);const g=a.ray.origin.distanceTo(rc);return g<a.near||g>a.far?null:{distance:g,point:rc.clone(),object:o}}function sc(o,e,a,s,u,f,h,d,_,g){o.getVertexPosition(d,ec),o.getVertexPosition(_,nc),o.getVertexPosition(g,ic);const v=uT(o,e,a,s,ec,nc,ic,Tv);if(v){const p=new st;Ui.getBarycoord(Tv,ec,nc,ic,p),u&&(v.uv=Ui.getInterpolatedAttribute(u,d,_,g,p,new Oe)),f&&(v.uv1=Ui.getInterpolatedAttribute(f,d,_,g,p,new Oe)),h&&(v.normal=Ui.getInterpolatedAttribute(h,d,_,g,p,new st),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:_,c:g,normal:new st,materialIndex:0};Ui.getNormal(ec,nc,ic,x.normal),v.face=x,v.barycoord=p}return v}class jr extends ta{constructor(e=1,a=1,s=1,u=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:a,depth:s,widthSegments:u,heightSegments:f,depthSegments:h};const d=this;u=Math.floor(u),f=Math.floor(f),h=Math.floor(h);const _=[],g=[],v=[],p=[];let x=0,M=0;b("z","y","x",-1,-1,s,a,e,h,f,0),b("z","y","x",1,-1,s,a,-e,h,f,1),b("x","z","y",1,1,e,s,a,u,h,2),b("x","z","y",1,-1,e,s,-a,u,h,3),b("x","y","z",1,-1,e,a,s,u,f,4),b("x","y","z",-1,-1,e,a,-s,u,f,5),this.setIndex(_),this.setAttribute("position",new Ki(g,3)),this.setAttribute("normal",new Ki(v,3)),this.setAttribute("uv",new Ki(p,2));function b(C,y,S,I,O,D,G,F,z,k,w){const R=D/z,V=G/k,at=D/2,ct=G/2,gt=F/2,ut=z+1,Y=k+1;let it=0,K=0;const vt=new st;for(let xt=0;xt<Y;xt++){const Bt=xt*V-ct;for(let ne=0;ne<ut;ne++){const pe=ne*R-at;vt[C]=pe*I,vt[y]=Bt*O,vt[S]=gt,g.push(vt.x,vt.y,vt.z),vt[C]=0,vt[y]=0,vt[S]=F>0?1:-1,v.push(vt.x,vt.y,vt.z),p.push(ne/z),p.push(1-xt/k),it+=1}}for(let xt=0;xt<k;xt++)for(let Bt=0;Bt<z;Bt++){const ne=x+Bt+ut*xt,pe=x+Bt+ut*(xt+1),P=x+(Bt+1)+ut*(xt+1),Q=x+(Bt+1)+ut*xt;_.push(ne,pe,Q),_.push(pe,P,Q),K+=6}d.addGroup(M,K,w),M+=K,x+=it}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ro(o){const e={};for(const a in o){e[a]={};for(const s in o[a]){const u=o[a][s];u&&(u.isColor||u.isMatrix3||u.isMatrix4||u.isVector2||u.isVector3||u.isVector4||u.isTexture||u.isQuaternion)?u.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[a][s]=null):e[a][s]=u.clone():Array.isArray(u)?e[a][s]=u.slice():e[a][s]=u}}return e}function Gn(o){const e={};for(let a=0;a<o.length;a++){const s=ro(o[a]);for(const u in s)e[u]=s[u]}return e}function cT(o){const e=[];for(let a=0;a<o.length;a++)e.push(o[a].clone());return e}function bS(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:De.workingColorSpace}const fT={clone:ro,merge:Gn};var hT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $i extends lo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hT,this.fragmentShader=dT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ro(e.uniforms),this.uniformsGroups=cT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const a=super.toJSON(e);a.glslVersion=this.glslVersion,a.uniforms={};for(const u in this.uniforms){const h=this.uniforms[u].value;h&&h.isTexture?a.uniforms[u]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?a.uniforms[u]={type:"c",value:h.getHex()}:h&&h.isVector2?a.uniforms[u]={type:"v2",value:h.toArray()}:h&&h.isVector3?a.uniforms[u]={type:"v3",value:h.toArray()}:h&&h.isVector4?a.uniforms[u]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?a.uniforms[u]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?a.uniforms[u]={type:"m4",value:h.toArray()}:a.uniforms[u]={value:h}}Object.keys(this.defines).length>0&&(a.defines=this.defines),a.vertexShader=this.vertexShader,a.fragmentShader=this.fragmentShader,a.lights=this.lights,a.clipping=this.clipping;const s={};for(const u in this.extensions)this.extensions[u]===!0&&(s[u]=!0);return Object.keys(s).length>0&&(a.extensions=s),a}}class AS extends En{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=Zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,a){return super.copy(e,a),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,a){super.updateWorldMatrix(e,a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ar=new st,bv=new Oe,Av=new Oe;class yi extends AS{constructor(e=50,a=1,s=.1,u=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=u,this.focus=10,this.aspect=a,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const a=.5*this.getFilmHeight()/e;this.fov=ml*2*Math.atan(a),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ul*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ml*2*Math.atan(Math.tan(ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,a,s){ar.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ar.x,ar.y).multiplyScalar(-e/ar.z),ar.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ar.x,ar.y).multiplyScalar(-e/ar.z)}getViewSize(e,a){return this.getViewBounds(e,bv,Av),a.subVectors(Av,bv)}setViewOffset(e,a,s,u,f,h){this.aspect=e/a,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let a=e*Math.tan(ul*.5*this.fov)/this.zoom,s=2*a,u=this.aspect*s,f=-.5*u;const h=this.view;if(this.view!==null&&this.view.enabled){const _=h.fullWidth,g=h.fullHeight;f+=h.offsetX*u/_,a-=h.offsetY*s/g,u*=h.width/_,s*=h.height/g}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+u,a,a-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const a=super.toJSON(e);return a.object.fov=this.fov,a.object.zoom=this.zoom,a.object.near=this.near,a.object.far=this.far,a.object.focus=this.focus,a.object.aspect=this.aspect,this.view!==null&&(a.object.view=Object.assign({},this.view)),a.object.filmGauge=this.filmGauge,a.object.filmOffset=this.filmOffset,a}}const Ys=-90,Ws=1;class pT extends En{constructor(e,a,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const u=new yi(Ys,Ws,e,a);u.layers=this.layers,this.add(u);const f=new yi(Ys,Ws,e,a);f.layers=this.layers,this.add(f);const h=new yi(Ys,Ws,e,a);h.layers=this.layers,this.add(h);const d=new yi(Ys,Ws,e,a);d.layers=this.layers,this.add(d);const _=new yi(Ys,Ws,e,a);_.layers=this.layers,this.add(_);const g=new yi(Ys,Ws,e,a);g.layers=this.layers,this.add(g)}updateCoordinateSystem(){const e=this.coordinateSystem,a=this.children.concat(),[s,u,f,h,d,_]=a;for(const g of a)this.remove(g);if(e===Zi)s.up.set(0,1,0),s.lookAt(1,0,0),u.up.set(0,1,0),u.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),_.up.set(0,1,0),_.lookAt(0,0,-1);else if(e===xc)s.up.set(0,-1,0),s.lookAt(-1,0,0),u.up.set(0,-1,0),u.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),_.up.set(0,-1,0),_.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const g of a)this.add(g),g.updateMatrixWorld()}update(e,a){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:u}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,_,g,v]=this.children,p=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,u),e.render(a,f),e.setRenderTarget(s,1,u),e.render(a,h),e.setRenderTarget(s,2,u),e.render(a,d),e.setRenderTarget(s,3,u),e.render(a,_),e.setRenderTarget(s,4,u),e.render(a,g),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,u),e.render(a,v),e.setRenderTarget(p,x,M),e.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class RS extends Zn{constructor(e=[],a=no,s,u,f,h,d,_,g,v){super(e,a,s,u,f,h,d,_,g,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mT extends Wr{constructor(e=1,a={}){super(e,e,a),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},u=[s,s,s,s,s,s];this.texture=new RS(u),this._setTextureOptions(a),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,a){this.texture.type=a.type,this.texture.colorSpace=a.colorSpace,this.texture.generateMipmaps=a.generateMipmaps,this.texture.minFilter=a.minFilter,this.texture.magFilter=a.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},u=new jr(5,5,5),f=new $i({name:"CubemapFromEquirect",uniforms:ro(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:jn,blending:sr});f.uniforms.tEquirect.value=a;const h=new Wn(u,f),d=a.minFilter;return a.minFilter===qr&&(a.minFilter=ji),new pT(1,10,this).update(e,h),a.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,a=!0,s=!0,u=!0){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(a,s,u);e.setRenderTarget(f)}}class Ks extends En{constructor(){super(),this.isGroup=!0,this.type="Group"}}const gT={type:"move"};class Ad{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new st,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new st),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new st,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new st),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const a=this._hand;if(a)for(const s of e.hand.values())this._getHandJoint(a,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,a,s){let u=null,f=null,h=null;const d=this._targetRay,_=this._grip,g=this._hand;if(e&&a.session.visibilityState!=="visible-blurred"){if(g&&e.hand){h=!0;for(const C of e.hand.values()){const y=a.getJointPose(C,s),S=this._getHandJoint(g,C);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=g.joints["index-finger-tip"],p=g.joints["thumb-tip"],x=v.position.distanceTo(p.position),M=.02,b=.005;g.inputState.pinching&&x>M+b?(g.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!g.inputState.pinching&&x<=M-b&&(g.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else _!==null&&e.gripSpace&&(f=a.getPose(e.gripSpace,s),f!==null&&(_.matrix.fromArray(f.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,f.linearVelocity?(_.hasLinearVelocity=!0,_.linearVelocity.copy(f.linearVelocity)):_.hasLinearVelocity=!1,f.angularVelocity?(_.hasAngularVelocity=!0,_.angularVelocity.copy(f.angularVelocity)):_.hasAngularVelocity=!1));d!==null&&(u=a.getPose(e.targetRaySpace,s),u===null&&f!==null&&(u=f),u!==null&&(d.matrix.fromArray(u.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,u.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(u.linearVelocity)):d.hasLinearVelocity=!1,u.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(u.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(gT)))}return d!==null&&(d.visible=u!==null),_!==null&&(_.visible=f!==null),g!==null&&(g.visible=h!==null),this}_getHandJoint(e,a){if(e.joints[a.jointName]===void 0){const s=new Ks;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[a.jointName]=s,e.add(s)}return e.joints[a.jointName]}}class _T extends En{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,a){return super.copy(e,a),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const a=super.toJSON(e);return this.fog!==null&&(a.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(a.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(a.object.backgroundIntensity=this.backgroundIntensity),a.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(a.object.environmentIntensity=this.environmentIntensity),a.object.environmentRotation=this.environmentRotation.toArray(),a}}const Rd=new st,vT=new st,ST=new de;class Hr{constructor(e=new st(1,0,0),a=0){this.isPlane=!0,this.normal=e,this.constant=a}set(e,a){return this.normal.copy(e),this.constant=a,this}setComponents(e,a,s,u){return this.normal.set(e,a,s),this.constant=u,this}setFromNormalAndCoplanarPoint(e,a){return this.normal.copy(e),this.constant=-a.dot(this.normal),this}setFromCoplanarPoints(e,a,s){const u=Rd.subVectors(s,a).cross(vT.subVectors(e,a)).normalize();return this.setFromNormalAndCoplanarPoint(u,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,a){return a.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,a){const s=e.delta(Rd),u=this.normal.dot(s);if(u===0)return this.distanceToPoint(e.start)===0?a.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/u;return f<0||f>1?null:a.copy(e.start).addScaledVector(s,f)}intersectsLine(e){const a=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return a<0&&s>0||s<0&&a>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,a){const s=a||ST.getNormalMatrix(e),u=this.coplanarPoint(Rd).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-u.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new Ec,xT=new Oe(.5,.5),oc=new st;class zp{constructor(e=new Hr,a=new Hr,s=new Hr,u=new Hr,f=new Hr,h=new Hr){this.planes=[e,a,s,u,f,h]}set(e,a,s,u,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(a),d[2].copy(s),d[3].copy(u),d[4].copy(f),d[5].copy(h),this}copy(e){const a=this.planes;for(let s=0;s<6;s++)a[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,a=Zi,s=!1){const u=this.planes,f=e.elements,h=f[0],d=f[1],_=f[2],g=f[3],v=f[4],p=f[5],x=f[6],M=f[7],b=f[8],C=f[9],y=f[10],S=f[11],I=f[12],O=f[13],D=f[14],G=f[15];if(u[0].setComponents(g-h,M-v,S-b,G-I).normalize(),u[1].setComponents(g+h,M+v,S+b,G+I).normalize(),u[2].setComponents(g+d,M+p,S+C,G+O).normalize(),u[3].setComponents(g-d,M-p,S-C,G-O).normalize(),s)u[4].setComponents(_,x,y,D).normalize(),u[5].setComponents(g-_,M-x,S-y,G-D).normalize();else if(u[4].setComponents(g-_,M-x,S-y,G-D).normalize(),a===Zi)u[5].setComponents(g+_,M+x,S+y,G+D).normalize();else if(a===xc)u[5].setComponents(_,x,y,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+a);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const a=e.geometry;a.boundingSphere===null&&a.computeBoundingSphere(),Ir.copy(a.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){Ir.center.set(0,0,0);const a=xT.distanceTo(e.center);return Ir.radius=.7071067811865476+a,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const a=this.planes,s=e.center,u=-e.radius;for(let f=0;f<6;f++)if(a[f].distanceToPoint(s)<u)return!1;return!0}intersectsBox(e){const a=this.planes;for(let s=0;s<6;s++){const u=a[s];if(oc.x=u.normal.x>0?e.max.x:e.min.x,oc.y=u.normal.y>0?e.max.y:e.min.y,oc.z=u.normal.z>0?e.max.z:e.min.z,u.distanceToPoint(oc)<0)return!1}return!0}containsPoint(e){const a=this.planes;for(let s=0;s<6;s++)if(a[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class yT extends lo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Rv=new sn,Mp=new xS,lc=new Ec,uc=new st;class Cv extends En{constructor(e=new ta,a=new yT){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=a,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,a){return super.copy(e,a),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,a){const s=this.geometry,u=this.matrixWorld,f=e.params.Points.threshold,h=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),lc.copy(s.boundingSphere),lc.applyMatrix4(u),lc.radius+=f,e.ray.intersectsSphere(lc)===!1)return;Rv.copy(u).invert(),Mp.copy(e.ray).applyMatrix4(Rv);const d=f/((this.scale.x+this.scale.y+this.scale.z)/3),_=d*d,g=s.index,p=s.attributes.position;if(g!==null){const x=Math.max(0,h.start),M=Math.min(g.count,h.start+h.count);for(let b=x,C=M;b<C;b++){const y=g.getX(b);uc.fromBufferAttribute(p,y),wv(uc,y,_,u,e,a,this)}}else{const x=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let b=x,C=M;b<C;b++)uc.fromBufferAttribute(p,b),wv(uc,b,_,u,e,a,this)}}updateMorphTargets(){const a=this.geometry.morphAttributes,s=Object.keys(a);if(s.length>0){const u=a[s[0]];if(u!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=u.length;f<h;f++){const d=u[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}}function wv(o,e,a,s,u,f,h){const d=Mp.distanceSqToPoint(o);if(d<a){const _=new st;Mp.closestPointToPoint(o,_),_.applyMatrix4(s);const g=u.ray.origin.distanceTo(_);if(g<u.near||g>u.far)return;f.push({distance:g,distanceToRay:Math.sqrt(d),point:_,index:e,face:null,faceIndex:null,barycoord:null,object:h})}}class CS extends Zn{constructor(e,a,s=Yr,u,f,h,d=Li,_=Li,g,v=dl,p=1){if(v!==dl&&v!==pl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:e,height:a,depth:p};super(x,u,f,h,d,_,v,s,g),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Lp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const a=super.toJSON(e);return this.compareFunction!==null&&(a.compareFunction=this.compareFunction),a}}class wS extends Zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class xl extends ta{constructor(e=1,a=1,s=1,u=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:a,widthSegments:s,heightSegments:u};const f=e/2,h=a/2,d=Math.floor(s),_=Math.floor(u),g=d+1,v=_+1,p=e/d,x=a/_,M=[],b=[],C=[],y=[];for(let S=0;S<v;S++){const I=S*x-h;for(let O=0;O<g;O++){const D=O*p-f;b.push(D,-I,0),C.push(0,0,1),y.push(O/d),y.push(1-S/_)}}for(let S=0;S<_;S++)for(let I=0;I<d;I++){const O=I+g*S,D=I+g*(S+1),G=I+1+g*(S+1),F=I+1+g*S;M.push(O,D,F),M.push(D,G,F)}this.setIndex(M),this.setAttribute("position",new Ki(b,3)),this.setAttribute("normal",new Ki(C,3)),this.setAttribute("uv",new Ki(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xl(e.width,e.height,e.widthSegments,e.heightSegments)}}class Pp extends ta{constructor(e=1,a=32,s=16,u=0,f=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:a,heightSegments:s,phiStart:u,phiLength:f,thetaStart:h,thetaLength:d},a=Math.max(3,Math.floor(a)),s=Math.max(2,Math.floor(s));const _=Math.min(h+d,Math.PI);let g=0;const v=[],p=new st,x=new st,M=[],b=[],C=[],y=[];for(let S=0;S<=s;S++){const I=[],O=S/s;let D=0;S===0&&h===0?D=.5/a:S===s&&_===Math.PI&&(D=-.5/a);for(let G=0;G<=a;G++){const F=G/a;p.x=-e*Math.cos(u+F*f)*Math.sin(h+O*d),p.y=e*Math.cos(h+O*d),p.z=e*Math.sin(u+F*f)*Math.sin(h+O*d),b.push(p.x,p.y,p.z),x.copy(p).normalize(),C.push(x.x,x.y,x.z),y.push(F+D,1-O),I.push(g++)}v.push(I)}for(let S=0;S<s;S++)for(let I=0;I<a;I++){const O=v[S][I+1],D=v[S][I],G=v[S+1][I],F=v[S+1][I+1];(S!==0||h>0)&&M.push(O,D,F),(S!==s-1||_<Math.PI)&&M.push(D,G,F)}this.setIndex(M),this.setAttribute("position",new Ki(b,3)),this.setAttribute("normal",new Ki(C,3)),this.setAttribute("uv",new Ki(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Dv extends lo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gS,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class MT extends lo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=SE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ET extends lo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class DS extends En{constructor(e,a=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=a}dispose(){}copy(e,a){return super.copy(e,a),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const a=super.toJSON(e);return a.object.color=this.color.getHex(),a.object.intensity=this.intensity,this.groundColor!==void 0&&(a.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(a.object.distance=this.distance),this.angle!==void 0&&(a.object.angle=this.angle),this.decay!==void 0&&(a.object.decay=this.decay),this.penumbra!==void 0&&(a.object.penumbra=this.penumbra),this.shadow!==void 0&&(a.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(a.object.target=this.target.uuid),a}}class TT extends DS{constructor(e,a,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(a)}copy(e,a){return super.copy(e,a),this.groundColor.copy(e.groundColor),this}}const Cd=new sn,Uv=new st,Nv=new st;class bT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.mapType=Qi,this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new zp,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const a=this.camera,s=this.matrix;Uv.setFromMatrixPosition(e.matrixWorld),a.position.copy(Uv),Nv.setFromMatrixPosition(e.target.matrixWorld),a.lookAt(Nv),a.updateMatrixWorld(),Cd.multiplyMatrices(a.projectionMatrix,a.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cd,a.coordinateSystem,a.reversedDepth),a.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Cd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class US extends AS{constructor(e=-1,a=1,s=1,u=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=a,this.top=s,this.bottom=u,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,a){return super.copy(e,a),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,a,s,u,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=a,this.view.offsetX=s,this.view.offsetY=u,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),a=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,u=(this.top+this.bottom)/2;let f=s-e,h=s+e,d=u+a,_=u-a;if(this.view!==null&&this.view.enabled){const g=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=g*this.view.offsetX,h=f+g*this.view.width,d-=v*this.view.offsetY,_=d-v*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,_,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const a=super.toJSON(e);return a.object.zoom=this.zoom,a.object.left=this.left,a.object.right=this.right,a.object.top=this.top,a.object.bottom=this.bottom,a.object.near=this.near,a.object.far=this.far,this.view!==null&&(a.object.view=Object.assign({},this.view)),a}}class AT extends bT{constructor(){super(new US(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class RT extends DS{constructor(e,a){super(e,a),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(En.DEFAULT_UP),this.updateMatrix(),this.target=new En,this.shadow=new AT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class CT extends yi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class wT{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const a=performance.now();e=(a-this.oldTime)/1e3,this.oldTime=a,this.elapsedTime+=e}return e}}function Lv(o,e,a,s){const u=DT(s);switch(a){case hS:return o*e;case pS:return o*e/u.components*u.byteLength;case wp:return o*e/u.components*u.byteLength;case mS:return o*e*2/u.components*u.byteLength;case Dp:return o*e*2/u.components*u.byteLength;case dS:return o*e*3/u.components*u.byteLength;case Ni:return o*e*4/u.components*u.byteLength;case Up:return o*e*4/u.components*u.byteLength;case dc:case pc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case mc:case gc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Zd:case Qd:return Math.max(o,16)*Math.max(e,8)/4;case jd:case Kd:return Math.max(o,8)*Math.max(e,8)/2;case Jd:case $d:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case tp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case ep:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case np:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case ip:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case ap:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case rp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case sp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case op:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case lp:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case up:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case cp:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case fp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case hp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case dp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case pp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case mp:case gp:case _p:return Math.ceil(o/4)*Math.ceil(e/4)*16;case vp:case Sp:return Math.ceil(o/4)*Math.ceil(e/4)*8;case xp:case yp:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${a} format.`)}function DT(o){switch(o){case Qi:case lS:return{byteLength:1,components:1};case fl:case uS:case _l:return{byteLength:2,components:1};case Rp:case Cp:return{byteLength:2,components:4};case Yr:case Ap:case Ea:return{byteLength:4,components:1};case cS:case fS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function NS(){let o=null,e=!1,a=null,s=null;function u(f,h){a(f,h),s=o.requestAnimationFrame(u)}return{start:function(){e!==!0&&a!==null&&(s=o.requestAnimationFrame(u),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){a=f},setContext:function(f){o=f}}}function UT(o){const e=new WeakMap;function a(d,_){const g=d.array,v=d.usage,p=g.byteLength,x=o.createBuffer();o.bindBuffer(_,x),o.bufferData(_,g,v),d.onUploadCallback();let M;if(g instanceof Float32Array)M=o.FLOAT;else if(typeof Float16Array<"u"&&g instanceof Float16Array)M=o.HALF_FLOAT;else if(g instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(g instanceof Int16Array)M=o.SHORT;else if(g instanceof Uint32Array)M=o.UNSIGNED_INT;else if(g instanceof Int32Array)M=o.INT;else if(g instanceof Int8Array)M=o.BYTE;else if(g instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(g instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+g);return{buffer:x,type:M,bytesPerElement:g.BYTES_PER_ELEMENT,version:d.version,size:p}}function s(d,_,g){const v=_.array,p=_.updateRanges;if(o.bindBuffer(g,d),p.length===0)o.bufferSubData(g,0,v);else{p.sort((M,b)=>M.start-b.start);let x=0;for(let M=1;M<p.length;M++){const b=p[x],C=p[M];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++x,p[x]=C)}p.length=x+1;for(let M=0,b=p.length;M<b;M++){const C=p[M];o.bufferSubData(g,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}_.clearUpdateRanges()}_.onUploadCallback()}function u(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const _=e.get(d);_&&(o.deleteBuffer(_.buffer),e.delete(d))}function h(d,_){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const g=e.get(d);if(g===void 0)e.set(d,a(d,_));else if(g.version<d.version){if(g.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(g.buffer,d,_),g.version=d.version}}return{get:u,remove:f,update:h}}var NT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,LT=`#ifdef USE_ALPHAHASH
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
#endif`,OT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BT=`#ifdef USE_AOMAP
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
#endif`,FT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,HT=`#ifdef USE_BATCHING
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
#endif`,GT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,kT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qT=`#ifdef USE_IRIDESCENCE
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
#endif`,YT=`#ifdef USE_BUMPMAP
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
#endif`,WT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,KT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,QT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,JT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$T=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,t1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,e1=`#define PI 3.141592653589793
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
} // validated`,n1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,i1=`vec3 transformedNormal = objectNormal;
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
#endif`,a1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,r1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,l1="gl_FragColor = linearToOutputTexel( gl_FragColor );",u1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c1=`#ifdef USE_ENVMAP
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
#endif`,f1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,h1=`#ifdef USE_ENVMAP
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
#endif`,d1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,p1=`#ifdef USE_ENVMAP
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
#endif`,m1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,v1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,S1=`#ifdef USE_GRADIENTMAP
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
}`,x1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,E1=`uniform bool receiveShadow;
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
#endif`,T1=`#ifdef USE_ENVMAP
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
#endif`,b1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,A1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,R1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,C1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,w1=`PhysicalMaterial material;
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
#endif`,D1=`struct PhysicalMaterial {
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
}`,U1=`
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
#endif`,N1=`#if defined( RE_IndirectDiffuse )
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
#endif`,L1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,z1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,B1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,H1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,G1=`#if defined( USE_POINTS_UV )
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
#endif`,V1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,X1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,k1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,q1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Y1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W1=`#ifdef USE_MORPHTARGETS
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
#endif`,j1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Z1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,K1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Q1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,tb=`#ifdef USE_NORMALMAP
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
#endif`,eb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ib=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ab=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ob=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ub=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,db=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gb=`float getShadowMask() {
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
}`,_b=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vb=`#ifdef USE_SKINNING
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
#endif`,Sb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xb=`#ifdef USE_SKINNING
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
#endif`,yb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Eb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bb=`#ifdef USE_TRANSMISSION
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
#endif`,Ab=`#ifdef USE_TRANSMISSION
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
#endif`,Rb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Db=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ub=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Nb=`uniform sampler2D t2D;
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
}`,Lb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ob=`#ifdef ENVMAP_TYPE_CUBE
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
}`,zb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ib=`#include <common>
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
}`,Bb=`#if DEPTH_PACKING == 3200
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
}`,Fb=`#define DISTANCE
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
}`,Hb=`#define DISTANCE
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
}`,Gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xb=`uniform float scale;
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
}`,kb=`uniform vec3 diffuse;
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
}`,qb=`#include <common>
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
}`,Yb=`uniform vec3 diffuse;
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
}`,Wb=`#define LAMBERT
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
}`,jb=`#define LAMBERT
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
}`,Zb=`#define MATCAP
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
}`,Kb=`#define MATCAP
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
}`,Qb=`#define NORMAL
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
}`,Jb=`#define NORMAL
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
}`,$b=`#define PHONG
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
}`,tA=`#define PHONG
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
}`,eA=`#define STANDARD
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
}`,nA=`#define STANDARD
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
}`,iA=`#define TOON
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
}`,aA=`#define TOON
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
}`,rA=`uniform float size;
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
}`,sA=`uniform vec3 diffuse;
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
}`,oA=`#include <common>
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
}`,lA=`uniform vec3 color;
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
}`,uA=`uniform float rotation;
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
}`,cA=`uniform vec3 diffuse;
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
}`,me={alphahash_fragment:NT,alphahash_pars_fragment:LT,alphamap_fragment:OT,alphamap_pars_fragment:zT,alphatest_fragment:PT,alphatest_pars_fragment:IT,aomap_fragment:BT,aomap_pars_fragment:FT,batching_pars_vertex:HT,batching_vertex:GT,begin_vertex:VT,beginnormal_vertex:XT,bsdfs:kT,iridescence_fragment:qT,bumpmap_pars_fragment:YT,clipping_planes_fragment:WT,clipping_planes_pars_fragment:jT,clipping_planes_pars_vertex:ZT,clipping_planes_vertex:KT,color_fragment:QT,color_pars_fragment:JT,color_pars_vertex:$T,color_vertex:t1,common:e1,cube_uv_reflection_fragment:n1,defaultnormal_vertex:i1,displacementmap_pars_vertex:a1,displacementmap_vertex:r1,emissivemap_fragment:s1,emissivemap_pars_fragment:o1,colorspace_fragment:l1,colorspace_pars_fragment:u1,envmap_fragment:c1,envmap_common_pars_fragment:f1,envmap_pars_fragment:h1,envmap_pars_vertex:d1,envmap_physical_pars_fragment:T1,envmap_vertex:p1,fog_vertex:m1,fog_pars_vertex:g1,fog_fragment:_1,fog_pars_fragment:v1,gradientmap_pars_fragment:S1,lightmap_pars_fragment:x1,lights_lambert_fragment:y1,lights_lambert_pars_fragment:M1,lights_pars_begin:E1,lights_toon_fragment:b1,lights_toon_pars_fragment:A1,lights_phong_fragment:R1,lights_phong_pars_fragment:C1,lights_physical_fragment:w1,lights_physical_pars_fragment:D1,lights_fragment_begin:U1,lights_fragment_maps:N1,lights_fragment_end:L1,logdepthbuf_fragment:O1,logdepthbuf_pars_fragment:z1,logdepthbuf_pars_vertex:P1,logdepthbuf_vertex:I1,map_fragment:B1,map_pars_fragment:F1,map_particle_fragment:H1,map_particle_pars_fragment:G1,metalnessmap_fragment:V1,metalnessmap_pars_fragment:X1,morphinstance_vertex:k1,morphcolor_vertex:q1,morphnormal_vertex:Y1,morphtarget_pars_vertex:W1,morphtarget_vertex:j1,normal_fragment_begin:Z1,normal_fragment_maps:K1,normal_pars_fragment:Q1,normal_pars_vertex:J1,normal_vertex:$1,normalmap_pars_fragment:tb,clearcoat_normal_fragment_begin:eb,clearcoat_normal_fragment_maps:nb,clearcoat_pars_fragment:ib,iridescence_pars_fragment:ab,opaque_fragment:rb,packing:sb,premultiplied_alpha_fragment:ob,project_vertex:lb,dithering_fragment:ub,dithering_pars_fragment:cb,roughnessmap_fragment:fb,roughnessmap_pars_fragment:hb,shadowmap_pars_fragment:db,shadowmap_pars_vertex:pb,shadowmap_vertex:mb,shadowmask_pars_fragment:gb,skinbase_vertex:_b,skinning_pars_vertex:vb,skinning_vertex:Sb,skinnormal_vertex:xb,specularmap_fragment:yb,specularmap_pars_fragment:Mb,tonemapping_fragment:Eb,tonemapping_pars_fragment:Tb,transmission_fragment:bb,transmission_pars_fragment:Ab,uv_pars_fragment:Rb,uv_pars_vertex:Cb,uv_vertex:wb,worldpos_vertex:Db,background_vert:Ub,background_frag:Nb,backgroundCube_vert:Lb,backgroundCube_frag:Ob,cube_vert:zb,cube_frag:Pb,depth_vert:Ib,depth_frag:Bb,distanceRGBA_vert:Fb,distanceRGBA_frag:Hb,equirect_vert:Gb,equirect_frag:Vb,linedashed_vert:Xb,linedashed_frag:kb,meshbasic_vert:qb,meshbasic_frag:Yb,meshlambert_vert:Wb,meshlambert_frag:jb,meshmatcap_vert:Zb,meshmatcap_frag:Kb,meshnormal_vert:Qb,meshnormal_frag:Jb,meshphong_vert:$b,meshphong_frag:tA,meshphysical_vert:eA,meshphysical_frag:nA,meshtoon_vert:iA,meshtoon_frag:aA,points_vert:rA,points_frag:sA,shadow_vert:oA,shadow_frag:lA,sprite_vert:uA,sprite_frag:cA},It={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new de}},envmap:{envMap:{value:null},envMapRotation:{value:new de},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new de}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new de}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new de},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new de},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new de},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new de}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new de}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new de}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0},uvTransform:{value:new de}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new de},alphaMap:{value:null},alphaMapTransform:{value:new de},alphaTest:{value:0}}},Yi={basic:{uniforms:Gn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.fog]),vertexShader:me.meshbasic_vert,fragmentShader:me.meshbasic_frag},lambert:{uniforms:Gn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Se(0)}}]),vertexShader:me.meshlambert_vert,fragmentShader:me.meshlambert_frag},phong:{uniforms:Gn([It.common,It.specularmap,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.fog,It.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:me.meshphong_vert,fragmentShader:me.meshphong_frag},standard:{uniforms:Gn([It.common,It.envmap,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.roughnessmap,It.metalnessmap,It.fog,It.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag},toon:{uniforms:Gn([It.common,It.aomap,It.lightmap,It.emissivemap,It.bumpmap,It.normalmap,It.displacementmap,It.gradientmap,It.fog,It.lights,{emissive:{value:new Se(0)}}]),vertexShader:me.meshtoon_vert,fragmentShader:me.meshtoon_frag},matcap:{uniforms:Gn([It.common,It.bumpmap,It.normalmap,It.displacementmap,It.fog,{matcap:{value:null}}]),vertexShader:me.meshmatcap_vert,fragmentShader:me.meshmatcap_frag},points:{uniforms:Gn([It.points,It.fog]),vertexShader:me.points_vert,fragmentShader:me.points_frag},dashed:{uniforms:Gn([It.common,It.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:me.linedashed_vert,fragmentShader:me.linedashed_frag},depth:{uniforms:Gn([It.common,It.displacementmap]),vertexShader:me.depth_vert,fragmentShader:me.depth_frag},normal:{uniforms:Gn([It.common,It.bumpmap,It.normalmap,It.displacementmap,{opacity:{value:1}}]),vertexShader:me.meshnormal_vert,fragmentShader:me.meshnormal_frag},sprite:{uniforms:Gn([It.sprite,It.fog]),vertexShader:me.sprite_vert,fragmentShader:me.sprite_frag},background:{uniforms:{uvTransform:{value:new de},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:me.background_vert,fragmentShader:me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new de}},vertexShader:me.backgroundCube_vert,fragmentShader:me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:me.cube_vert,fragmentShader:me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:me.equirect_vert,fragmentShader:me.equirect_frag},distanceRGBA:{uniforms:Gn([It.common,It.displacementmap,{referencePosition:{value:new st},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:me.distanceRGBA_vert,fragmentShader:me.distanceRGBA_frag},shadow:{uniforms:Gn([It.lights,It.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:me.shadow_vert,fragmentShader:me.shadow_frag}};Yi.physical={uniforms:Gn([Yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new de},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new de},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new de},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new de},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new de},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new de},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new de},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new de},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new de},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new de},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new de},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new de}}]),vertexShader:me.meshphysical_vert,fragmentShader:me.meshphysical_frag};const cc={r:0,b:0,g:0},Br=new Ji,fA=new sn;function hA(o,e,a,s,u,f,h){const d=new Se(0);let _=f===!0?0:1,g,v,p=null,x=0,M=null;function b(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?a:e).get(D)),D}function C(O){let D=!1;const G=b(O);G===null?S(d,_):G&&G.isColor&&(S(G,1),D=!0);const F=o.xr.getEnvironmentBlendMode();F==="additive"?s.buffers.color.setClear(0,0,0,1,h):F==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(O,D){const G=b(D);G&&(G.isCubeTexture||G.mapping===Mc)?(v===void 0&&(v=new Wn(new jr(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:ro(Yi.backgroundCube.uniforms),vertexShader:Yi.backgroundCube.vertexShader,fragmentShader:Yi.backgroundCube.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(F,z,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),u.update(v)),Br.copy(D.backgroundRotation),Br.x*=-1,Br.y*=-1,Br.z*=-1,G.isCubeTexture&&G.isRenderTargetTexture===!1&&(Br.y*=-1,Br.z*=-1),v.material.uniforms.envMap.value=G,v.material.uniforms.flipEnvMap.value=G.isCubeTexture&&G.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(fA.makeRotationFromEuler(Br)),v.material.toneMapped=De.getTransfer(G.colorSpace)!==ke,(p!==G||x!==G.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,p=G,x=G.version,M=o.toneMapping),v.layers.enableAll(),O.unshift(v,v.geometry,v.material,0,0,null)):G&&G.isTexture&&(g===void 0&&(g=new Wn(new xl(2,2),new $i({name:"BackgroundMaterial",uniforms:ro(Yi.background.uniforms),vertexShader:Yi.background.vertexShader,fragmentShader:Yi.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),Object.defineProperty(g.material,"map",{get:function(){return this.uniforms.t2D.value}}),u.update(g)),g.material.uniforms.t2D.value=G,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.toneMapped=De.getTransfer(G.colorSpace)!==ke,G.matrixAutoUpdate===!0&&G.updateMatrix(),g.material.uniforms.uvTransform.value.copy(G.matrix),(p!==G||x!==G.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,p=G,x=G.version,M=o.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null))}function S(O,D){O.getRGB(cc,bS(o)),s.buffers.color.setClear(cc.r,cc.g,cc.b,D,h)}function I(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,D=1){d.set(O),_=D,S(d,_)},getClearAlpha:function(){return _},setClearAlpha:function(O){_=O,S(d,_)},render:C,addToRenderList:y,dispose:I}}function dA(o,e){const a=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},u=x(null);let f=u,h=!1;function d(R,V,at,ct,gt){let ut=!1;const Y=p(ct,at,V);f!==Y&&(f=Y,g(f.object)),ut=M(R,ct,at,gt),ut&&b(R,ct,at,gt),gt!==null&&e.update(gt,o.ELEMENT_ARRAY_BUFFER),(ut||h)&&(h=!1,D(R,V,at,ct),gt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(gt).buffer))}function _(){return o.createVertexArray()}function g(R){return o.bindVertexArray(R)}function v(R){return o.deleteVertexArray(R)}function p(R,V,at){const ct=at.wireframe===!0;let gt=s[R.id];gt===void 0&&(gt={},s[R.id]=gt);let ut=gt[V.id];ut===void 0&&(ut={},gt[V.id]=ut);let Y=ut[ct];return Y===void 0&&(Y=x(_()),ut[ct]=Y),Y}function x(R){const V=[],at=[],ct=[];for(let gt=0;gt<a;gt++)V[gt]=0,at[gt]=0,ct[gt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:at,attributeDivisors:ct,object:R,attributes:{},index:null}}function M(R,V,at,ct){const gt=f.attributes,ut=V.attributes;let Y=0;const it=at.getAttributes();for(const K in it)if(it[K].location>=0){const xt=gt[K];let Bt=ut[K];if(Bt===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(Bt=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(Bt=R.instanceColor)),xt===void 0||xt.attribute!==Bt||Bt&&xt.data!==Bt.data)return!0;Y++}return f.attributesNum!==Y||f.index!==ct}function b(R,V,at,ct){const gt={},ut=V.attributes;let Y=0;const it=at.getAttributes();for(const K in it)if(it[K].location>=0){let xt=ut[K];xt===void 0&&(K==="instanceMatrix"&&R.instanceMatrix&&(xt=R.instanceMatrix),K==="instanceColor"&&R.instanceColor&&(xt=R.instanceColor));const Bt={};Bt.attribute=xt,xt&&xt.data&&(Bt.data=xt.data),gt[K]=Bt,Y++}f.attributes=gt,f.attributesNum=Y,f.index=ct}function C(){const R=f.newAttributes;for(let V=0,at=R.length;V<at;V++)R[V]=0}function y(R){S(R,0)}function S(R,V){const at=f.newAttributes,ct=f.enabledAttributes,gt=f.attributeDivisors;at[R]=1,ct[R]===0&&(o.enableVertexAttribArray(R),ct[R]=1),gt[R]!==V&&(o.vertexAttribDivisor(R,V),gt[R]=V)}function I(){const R=f.newAttributes,V=f.enabledAttributes;for(let at=0,ct=V.length;at<ct;at++)V[at]!==R[at]&&(o.disableVertexAttribArray(at),V[at]=0)}function O(R,V,at,ct,gt,ut,Y){Y===!0?o.vertexAttribIPointer(R,V,at,gt,ut):o.vertexAttribPointer(R,V,at,ct,gt,ut)}function D(R,V,at,ct){C();const gt=ct.attributes,ut=at.getAttributes(),Y=V.defaultAttributeValues;for(const it in ut){const K=ut[it];if(K.location>=0){let vt=gt[it];if(vt===void 0&&(it==="instanceMatrix"&&R.instanceMatrix&&(vt=R.instanceMatrix),it==="instanceColor"&&R.instanceColor&&(vt=R.instanceColor)),vt!==void 0){const xt=vt.normalized,Bt=vt.itemSize,ne=e.get(vt);if(ne===void 0)continue;const pe=ne.buffer,P=ne.type,Q=ne.bytesPerElement,B=P===o.INT||P===o.UNSIGNED_INT||vt.gpuType===Ap;if(vt.isInterleavedBufferAttribute){const j=vt.data,St=j.stride,Dt=vt.offset;if(j.isInstancedInterleavedBuffer){for(let Tt=0;Tt<K.locationSize;Tt++)S(K.location+Tt,j.meshPerAttribute);R.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Tt=0;Tt<K.locationSize;Tt++)y(K.location+Tt);o.bindBuffer(o.ARRAY_BUFFER,pe);for(let Tt=0;Tt<K.locationSize;Tt++)O(K.location+Tt,Bt/K.locationSize,P,xt,St*Q,(Dt+Bt/K.locationSize*Tt)*Q,B)}else{if(vt.isInstancedBufferAttribute){for(let j=0;j<K.locationSize;j++)S(K.location+j,vt.meshPerAttribute);R.isInstancedMesh!==!0&&ct._maxInstanceCount===void 0&&(ct._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let j=0;j<K.locationSize;j++)y(K.location+j);o.bindBuffer(o.ARRAY_BUFFER,pe);for(let j=0;j<K.locationSize;j++)O(K.location+j,Bt/K.locationSize,P,xt,Bt*Q,Bt/K.locationSize*j*Q,B)}}else if(Y!==void 0){const xt=Y[it];if(xt!==void 0)switch(xt.length){case 2:o.vertexAttrib2fv(K.location,xt);break;case 3:o.vertexAttrib3fv(K.location,xt);break;case 4:o.vertexAttrib4fv(K.location,xt);break;default:o.vertexAttrib1fv(K.location,xt)}}}}I()}function G(){k();for(const R in s){const V=s[R];for(const at in V){const ct=V[at];for(const gt in ct)v(ct[gt].object),delete ct[gt];delete V[at]}delete s[R]}}function F(R){if(s[R.id]===void 0)return;const V=s[R.id];for(const at in V){const ct=V[at];for(const gt in ct)v(ct[gt].object),delete ct[gt];delete V[at]}delete s[R.id]}function z(R){for(const V in s){const at=s[V];if(at[R.id]===void 0)continue;const ct=at[R.id];for(const gt in ct)v(ct[gt].object),delete ct[gt];delete at[R.id]}}function k(){w(),h=!0,f!==u&&(f=u,g(f.object))}function w(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:d,reset:k,resetDefaultState:w,dispose:G,releaseStatesOfGeometry:F,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:y,disableUnusedAttributes:I}}function pA(o,e,a){let s;function u(g){s=g}function f(g,v){o.drawArrays(s,g,v),a.update(v,s,1)}function h(g,v,p){p!==0&&(o.drawArraysInstanced(s,g,v,p),a.update(v,s,p))}function d(g,v,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,g,0,v,0,p);let M=0;for(let b=0;b<p;b++)M+=v[b];a.update(M,s,1)}function _(g,v,p,x){if(p===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let b=0;b<g.length;b++)h(g[b],v[b],x[b]);else{M.multiDrawArraysInstancedWEBGL(s,g,0,v,0,x,0,p);let b=0;for(let C=0;C<p;C++)b+=v[C]*x[C];a.update(b,s,1)}}this.setMode=u,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=_}function mA(o,e,a,s){let u;function f(){if(u!==void 0)return u;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");u=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else u=0;return u}function h(z){return!(z!==Ni&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const k=z===_l&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Qi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Ea&&!k)}function _(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let g=a.precision!==void 0?a.precision:"highp";const v=_(g);v!==g&&(console.warn("THREE.WebGLRenderer:",g,"not supported, using",v,"instead."),g=v);const p=a.logarithmicDepthBuffer===!0,x=a.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),b=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),I=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),G=b>0,F=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:_,textureFormatReadable:h,textureTypeReadable:d,precision:g,logarithmicDepthBuffer:p,reversedDepthBuffer:x,maxTextures:M,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:I,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:G,maxSamples:F}}function gA(o){const e=this;let a=null,s=0,u=!1,f=!1;const h=new Hr,d=new de,_={value:null,needsUpdate:!1};this.uniform=_,this.numPlanes=0,this.numIntersection=0,this.init=function(p,x){const M=p.length!==0||x||s!==0||u;return u=x,s=p.length,M},this.beginShadows=function(){f=!0,v(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(p,x){a=v(p,x,0)},this.setState=function(p,x,M){const b=p.clippingPlanes,C=p.clipIntersection,y=p.clipShadows,S=o.get(p);if(!u||b===null||b.length===0||f&&!y)f?v(null):g();else{const I=f?0:s,O=I*4;let D=S.clippingState||null;_.value=D,D=v(b,x,O,M);for(let G=0;G!==O;++G)D[G]=a[G];S.clippingState=D,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=I}};function g(){_.value!==a&&(_.value=a,_.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(p,x,M,b){const C=p!==null?p.length:0;let y=null;if(C!==0){if(y=_.value,b!==!0||y===null){const S=M+C*4,I=x.matrixWorldInverse;d.getNormalMatrix(I),(y===null||y.length<S)&&(y=new Float32Array(S));for(let O=0,D=M;O!==C;++O,D+=4)h.copy(p[O]).applyMatrix4(I,d),h.normal.toArray(y,D),y[D+3]=h.constant}_.value=y,_.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function _A(o){let e=new WeakMap;function a(h,d){return d===kd?h.mapping=no:d===qd&&(h.mapping=io),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===kd||d===qd)if(e.has(h)){const _=e.get(h).texture;return a(_,h.mapping)}else{const _=h.image;if(_&&_.height>0){const g=new mT(_.height);return g.fromEquirectangularTexture(o,h),e.set(h,g),h.addEventListener("dispose",u),a(g.texture,h.mapping)}else return null}}return h}function u(h){const d=h.target;d.removeEventListener("dispose",u);const _=e.get(d);_!==void 0&&(e.delete(d),_.dispose())}function f(){e=new WeakMap}return{get:s,dispose:f}}const Qs=4,Ov=[.125,.215,.35,.446,.526,.582],Xr=20,wd=new US,zv=new Se;let Dd=null,Ud=0,Nd=0,Ld=!1;const Gr=(1+Math.sqrt(5))/2,js=1/Gr,Pv=[new st(-Gr,js,0),new st(Gr,js,0),new st(-js,0,Gr),new st(js,0,Gr),new st(0,Gr,-js),new st(0,Gr,js),new st(-1,1,-1),new st(1,1,-1),new st(-1,1,1),new st(1,1,1)],vA=new st;class Iv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,a=0,s=.1,u=100,f={}){const{size:h=256,position:d=vA}=f;Dd=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const _=this._allocateTargets();return _.depthBuffer=!0,this._sceneToCubeUV(e,s,u,_,d),a>0&&this._blur(_,0,0,a),this._applyPMREM(_),this._cleanup(_),_}fromEquirectangular(e,a=null){return this._fromTexture(e,a)}fromCubemap(e,a=null){return this._fromTexture(e,a)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Dd,Ud,Nd),this._renderer.xr.enabled=Ld,e.scissorTest=!1,fc(e,0,0,e.width,e.height)}_fromTexture(e,a){e.mapping===no||e.mapping===io?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Dd=this._renderer.getRenderTarget(),Ud=this._renderer.getActiveCubeFace(),Nd=this._renderer.getActiveMipmapLevel(),Ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=a||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),a=4*this._cubeSize,s={magFilter:ji,minFilter:ji,generateMipmaps:!1,type:_l,format:Ni,colorSpace:ao,depthBuffer:!1},u=Bv(e,a,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==a){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bv(e,a,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=SA(f)),this._blurMaterial=xA(f,e,a)}return u}_compileMaterial(e){const a=new Wn(this._lodPlanes[0],e);this._renderer.compile(a,wd)}_sceneToCubeUV(e,a,s,u,f){const _=new yi(90,1,a,s),g=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],p=this._renderer,x=p.autoClear,M=p.toneMapping;p.getClearColor(zv),p.toneMapping=or,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(u),p.clearDepth(),p.setRenderTarget(null));const C=new Op({name:"PMREM.Background",side:jn,depthWrite:!1,depthTest:!1}),y=new Wn(new jr,C);let S=!1;const I=e.background;I?I.isColor&&(C.color.copy(I),e.background=null,S=!0):(C.color.copy(zv),S=!0);for(let O=0;O<6;O++){const D=O%3;D===0?(_.up.set(0,g[O],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x+v[O],f.y,f.z)):D===1?(_.up.set(0,0,g[O]),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y+v[O],f.z)):(_.up.set(0,g[O],0),_.position.set(f.x,f.y,f.z),_.lookAt(f.x,f.y,f.z+v[O]));const G=this._cubeSize;fc(u,D*G,O>2?G:0,G,G),p.setRenderTarget(u),S&&p.render(y,_),p.render(e,_)}y.geometry.dispose(),y.material.dispose(),p.toneMapping=M,p.autoClear=x,e.background=I}_textureToCubeUV(e,a){const s=this._renderer,u=e.mapping===no||e.mapping===io;u?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fv());const f=u?this._cubemapMaterial:this._equirectMaterial,h=new Wn(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const _=this._cubeSize;fc(a,0,0,3*_,2*_),s.setRenderTarget(a),s.render(h,wd)}_applyPMREM(e){const a=this._renderer,s=a.autoClear;a.autoClear=!1;const u=this._lodPlanes.length;for(let f=1;f<u;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=Pv[(u-f-1)%Pv.length];this._blur(e,f-1,f,h,d)}a.autoClear=s}_blur(e,a,s,u,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,a,s,u,"latitudinal",f),this._halfBlur(h,e,s,s,u,"longitudinal",f)}_halfBlur(e,a,s,u,f,h,d){const _=this._renderer,g=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,p=new Wn(this._lodPlanes[u],g),x=g.uniforms,M=this._sizeLods[s]-1,b=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Xr-1),C=f/b,y=isFinite(f)?1+Math.floor(v*C):Xr;y>Xr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Xr}`);const S=[];let I=0;for(let z=0;z<Xr;++z){const k=z/C,w=Math.exp(-k*k/2);S.push(w),z===0?I+=w:z<y&&(I+=2*w)}for(let z=0;z<S.length;z++)S[z]=S[z]/I;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=S,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:O}=this;x.dTheta.value=b,x.mipInt.value=O-s;const D=this._sizeLods[u],G=3*D*(u>O-Qs?u-O+Qs:0),F=4*(this._cubeSize-D);fc(a,G,F,3*D,2*D),_.setRenderTarget(a),_.render(p,wd)}}function SA(o){const e=[],a=[],s=[];let u=o;const f=o-Qs+1+Ov.length;for(let h=0;h<f;h++){const d=Math.pow(2,u);a.push(d);let _=1/d;h>o-Qs?_=Ov[h-o+Qs-1]:h===0&&(_=0),s.push(_);const g=1/(d-2),v=-g,p=1+g,x=[v,v,p,v,p,p,v,v,p,p,v,p],M=6,b=6,C=3,y=2,S=1,I=new Float32Array(C*b*M),O=new Float32Array(y*b*M),D=new Float32Array(S*b*M);for(let F=0;F<M;F++){const z=F%3*2/3-1,k=F>2?0:-1,w=[z,k,0,z+2/3,k,0,z+2/3,k+1,0,z,k,0,z+2/3,k+1,0,z,k+1,0];I.set(w,C*b*F),O.set(x,y*b*F);const R=[F,F,F,F,F,F];D.set(R,S*b*F)}const G=new ta;G.setAttribute("position",new li(I,C)),G.setAttribute("uv",new li(O,y)),G.setAttribute("faceIndex",new li(D,S)),e.push(G),u>Qs&&u--}return{lodPlanes:e,sizeLods:a,sigmas:s}}function Bv(o,e,a){const s=new Wr(o,e,a);return s.texture.mapping=Mc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function fc(o,e,a,s,u){o.viewport.set(e,a,s,u),o.scissor.set(e,a,s,u)}function xA(o,e,a){const s=new Float32Array(Xr),u=new st(0,1,0);return new $i({name:"SphericalGaussianBlur",defines:{n:Xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/a,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:u}},vertexShader:Ip(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Fv(){return new $i({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ip(),fragmentShader:`

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
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Hv(){return new $i({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ip(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:sr,depthTest:!1,depthWrite:!1})}function Ip(){return`

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
	`}function yA(o){let e=new WeakMap,a=null;function s(d){if(d&&d.isTexture){const _=d.mapping,g=_===kd||_===qd,v=_===no||_===io;if(g||v){let p=e.get(d);const x=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return a===null&&(a=new Iv(o)),p=g?a.fromEquirectangular(d,p):a.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{const M=d.image;return g&&M&&M.height>0||v&&M&&u(M)?(a===null&&(a=new Iv(o)),p=g?a.fromEquirectangular(d):a.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",f),p.texture):null}}}return d}function u(d){let _=0;const g=6;for(let v=0;v<g;v++)d[v]!==void 0&&_++;return _===g}function f(d){const _=d.target;_.removeEventListener("dispose",f);const g=e.get(_);g!==void 0&&(e.delete(_),g.dispose())}function h(){e=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:h}}function MA(o){const e={};function a(s){if(e[s]!==void 0)return e[s];let u;switch(s){case"WEBGL_depth_texture":u=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":u=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":u=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":u=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:u=o.getExtension(s)}return e[s]=u,u}return{has:function(s){return a(s)!==null},init:function(){a("EXT_color_buffer_float"),a("WEBGL_clip_cull_distance"),a("OES_texture_float_linear"),a("EXT_color_buffer_half_float"),a("WEBGL_multisampled_render_to_texture"),a("WEBGL_render_shared_exponent")},get:function(s){const u=a(s);return u===null&&gl("THREE.WebGLRenderer: "+s+" extension not supported."),u}}}function EA(o,e,a,s){const u={},f=new WeakMap;function h(p){const x=p.target;x.index!==null&&e.remove(x.index);for(const b in x.attributes)e.remove(x.attributes[b]);x.removeEventListener("dispose",h),delete u[x.id];const M=f.get(x);M&&(e.remove(M),f.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,a.memory.geometries--}function d(p,x){return u[x.id]===!0||(x.addEventListener("dispose",h),u[x.id]=!0,a.memory.geometries++),x}function _(p){const x=p.attributes;for(const M in x)e.update(x[M],o.ARRAY_BUFFER)}function g(p){const x=[],M=p.index,b=p.attributes.position;let C=0;if(M!==null){const I=M.array;C=M.version;for(let O=0,D=I.length;O<D;O+=3){const G=I[O+0],F=I[O+1],z=I[O+2];x.push(G,F,F,z,z,G)}}else if(b!==void 0){const I=b.array;C=b.version;for(let O=0,D=I.length/3-1;O<D;O+=3){const G=O+0,F=O+1,z=O+2;x.push(G,F,F,z,z,G)}}else return;const y=new(vS(x)?TS:ES)(x,1);y.version=C;const S=f.get(p);S&&e.remove(S),f.set(p,y)}function v(p){const x=f.get(p);if(x){const M=p.index;M!==null&&x.version<M.version&&g(p)}else g(p);return f.get(p)}return{get:d,update:_,getWireframeAttribute:v}}function TA(o,e,a){let s;function u(x){s=x}let f,h;function d(x){f=x.type,h=x.bytesPerElement}function _(x,M){o.drawElements(s,M,f,x*h),a.update(M,s,1)}function g(x,M,b){b!==0&&(o.drawElementsInstanced(s,M,f,x*h,b),a.update(M,s,b))}function v(x,M,b){if(b===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,f,x,0,b);let y=0;for(let S=0;S<b;S++)y+=M[S];a.update(y,s,1)}function p(x,M,b,C){if(b===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<x.length;S++)g(x[S]/h,M[S],C[S]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,f,x,0,C,0,b);let S=0;for(let I=0;I<b;I++)S+=M[I]*C[I];a.update(S,s,1)}}this.setMode=u,this.setIndex=d,this.render=_,this.renderInstances=g,this.renderMultiDraw=v,this.renderMultiDrawInstances=p}function bA(o){const e={geometries:0,textures:0},a={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,h,d){switch(a.calls++,h){case o.TRIANGLES:a.triangles+=d*(f/3);break;case o.LINES:a.lines+=d*(f/2);break;case o.LINE_STRIP:a.lines+=d*(f-1);break;case o.LINE_LOOP:a.lines+=d*f;break;case o.POINTS:a.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function u(){a.calls=0,a.triangles=0,a.points=0,a.lines=0}return{memory:e,render:a,programs:null,autoReset:!0,reset:u,update:s}}function AA(o,e,a){const s=new WeakMap,u=new rn;function f(h,d,_){const g=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,p=v!==void 0?v.length:0;let x=s.get(d);if(x===void 0||x.count!==p){let R=function(){k.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var M=R;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let D=0;b===!0&&(D=1),C===!0&&(D=2),y===!0&&(D=3);let G=d.attributes.position.count*D,F=1;G>e.maxTextureSize&&(F=Math.ceil(G/e.maxTextureSize),G=e.maxTextureSize);const z=new Float32Array(G*F*4*p),k=new SS(z,G,F,p);k.type=Ea,k.needsUpdate=!0;const w=D*4;for(let V=0;V<p;V++){const at=S[V],ct=I[V],gt=O[V],ut=G*F*4*V;for(let Y=0;Y<at.count;Y++){const it=Y*w;b===!0&&(u.fromBufferAttribute(at,Y),z[ut+it+0]=u.x,z[ut+it+1]=u.y,z[ut+it+2]=u.z,z[ut+it+3]=0),C===!0&&(u.fromBufferAttribute(ct,Y),z[ut+it+4]=u.x,z[ut+it+5]=u.y,z[ut+it+6]=u.z,z[ut+it+7]=0),y===!0&&(u.fromBufferAttribute(gt,Y),z[ut+it+8]=u.x,z[ut+it+9]=u.y,z[ut+it+10]=u.z,z[ut+it+11]=gt.itemSize===4?u.w:1)}}x={count:p,texture:k,size:new Oe(G,F)},s.set(d,x),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)_.getUniforms().setValue(o,"morphTexture",h.morphTexture,a);else{let b=0;for(let y=0;y<g.length;y++)b+=g[y];const C=d.morphTargetsRelative?1:1-b;_.getUniforms().setValue(o,"morphTargetBaseInfluence",C),_.getUniforms().setValue(o,"morphTargetInfluences",g)}_.getUniforms().setValue(o,"morphTargetsTexture",x.texture,a),_.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:f}}function RA(o,e,a,s){let u=new WeakMap;function f(_){const g=s.render.frame,v=_.geometry,p=e.get(_,v);if(u.get(p)!==g&&(e.update(p),u.set(p,g)),_.isInstancedMesh&&(_.hasEventListener("dispose",d)===!1&&_.addEventListener("dispose",d),u.get(_)!==g&&(a.update(_.instanceMatrix,o.ARRAY_BUFFER),_.instanceColor!==null&&a.update(_.instanceColor,o.ARRAY_BUFFER),u.set(_,g))),_.isSkinnedMesh){const x=_.skeleton;u.get(x)!==g&&(x.update(),u.set(x,g))}return p}function h(){u=new WeakMap}function d(_){const g=_.target;g.removeEventListener("dispose",d),a.remove(g.instanceMatrix),g.instanceColor!==null&&a.remove(g.instanceColor)}return{update:f,dispose:h}}const LS=new Zn,Gv=new CS(1,1),OS=new SS,zS=new JE,PS=new RS,Vv=[],Xv=[],kv=new Float32Array(16),qv=new Float32Array(9),Yv=new Float32Array(4);function uo(o,e,a){const s=o[0];if(s<=0||s>0)return o;const u=e*a;let f=Vv[u];if(f===void 0&&(f=new Float32Array(u),Vv[u]=f),e!==0){s.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=a,o[h].toArray(f,d)}return f}function _n(o,e){if(o.length!==e.length)return!1;for(let a=0,s=o.length;a<s;a++)if(o[a]!==e[a])return!1;return!0}function vn(o,e){for(let a=0,s=e.length;a<s;a++)o[a]=e[a]}function Tc(o,e){let a=Xv[e];a===void 0&&(a=new Int32Array(e),Xv[e]=a);for(let s=0;s!==e;++s)a[s]=o.allocateTextureUnit();return a}function CA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1f(this.addr,e),a[0]=e)}function wA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(_n(a,e))return;o.uniform2fv(this.addr,e),vn(a,e)}}function DA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else if(e.r!==void 0)(a[0]!==e.r||a[1]!==e.g||a[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),a[0]=e.r,a[1]=e.g,a[2]=e.b);else{if(_n(a,e))return;o.uniform3fv(this.addr,e),vn(a,e)}}function UA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(_n(a,e))return;o.uniform4fv(this.addr,e),vn(a,e)}}function NA(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(_n(a,e))return;o.uniformMatrix2fv(this.addr,!1,e),vn(a,e)}else{if(_n(a,s))return;Yv.set(s),o.uniformMatrix2fv(this.addr,!1,Yv),vn(a,s)}}function LA(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(_n(a,e))return;o.uniformMatrix3fv(this.addr,!1,e),vn(a,e)}else{if(_n(a,s))return;qv.set(s),o.uniformMatrix3fv(this.addr,!1,qv),vn(a,s)}}function OA(o,e){const a=this.cache,s=e.elements;if(s===void 0){if(_n(a,e))return;o.uniformMatrix4fv(this.addr,!1,e),vn(a,e)}else{if(_n(a,s))return;kv.set(s),o.uniformMatrix4fv(this.addr,!1,kv),vn(a,s)}}function zA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1i(this.addr,e),a[0]=e)}function PA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(_n(a,e))return;o.uniform2iv(this.addr,e),vn(a,e)}}function IA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(_n(a,e))return;o.uniform3iv(this.addr,e),vn(a,e)}}function BA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(_n(a,e))return;o.uniform4iv(this.addr,e),vn(a,e)}}function FA(o,e){const a=this.cache;a[0]!==e&&(o.uniform1ui(this.addr,e),a[0]=e)}function HA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),a[0]=e.x,a[1]=e.y);else{if(_n(a,e))return;o.uniform2uiv(this.addr,e),vn(a,e)}}function GA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),a[0]=e.x,a[1]=e.y,a[2]=e.z);else{if(_n(a,e))return;o.uniform3uiv(this.addr,e),vn(a,e)}}function VA(o,e){const a=this.cache;if(e.x!==void 0)(a[0]!==e.x||a[1]!==e.y||a[2]!==e.z||a[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),a[0]=e.x,a[1]=e.y,a[2]=e.z,a[3]=e.w);else{if(_n(a,e))return;o.uniform4uiv(this.addr,e),vn(a,e)}}function XA(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u);let f;this.type===o.SAMPLER_2D_SHADOW?(Gv.compareFunction=_S,f=Gv):f=LS,a.setTexture2D(e||f,u)}function kA(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture3D(e||zS,u)}function qA(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTextureCube(e||PS,u)}function YA(o,e,a){const s=this.cache,u=a.allocateTextureUnit();s[0]!==u&&(o.uniform1i(this.addr,u),s[0]=u),a.setTexture2DArray(e||OS,u)}function WA(o){switch(o){case 5126:return CA;case 35664:return wA;case 35665:return DA;case 35666:return UA;case 35674:return NA;case 35675:return LA;case 35676:return OA;case 5124:case 35670:return zA;case 35667:case 35671:return PA;case 35668:case 35672:return IA;case 35669:case 35673:return BA;case 5125:return FA;case 36294:return HA;case 36295:return GA;case 36296:return VA;case 35678:case 36198:case 36298:case 36306:case 35682:return XA;case 35679:case 36299:case 36307:return kA;case 35680:case 36300:case 36308:case 36293:return qA;case 36289:case 36303:case 36311:case 36292:return YA}}function jA(o,e){o.uniform1fv(this.addr,e)}function ZA(o,e){const a=uo(e,this.size,2);o.uniform2fv(this.addr,a)}function KA(o,e){const a=uo(e,this.size,3);o.uniform3fv(this.addr,a)}function QA(o,e){const a=uo(e,this.size,4);o.uniform4fv(this.addr,a)}function JA(o,e){const a=uo(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,a)}function $A(o,e){const a=uo(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,a)}function tR(o,e){const a=uo(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,a)}function eR(o,e){o.uniform1iv(this.addr,e)}function nR(o,e){o.uniform2iv(this.addr,e)}function iR(o,e){o.uniform3iv(this.addr,e)}function aR(o,e){o.uniform4iv(this.addr,e)}function rR(o,e){o.uniform1uiv(this.addr,e)}function sR(o,e){o.uniform2uiv(this.addr,e)}function oR(o,e){o.uniform3uiv(this.addr,e)}function lR(o,e){o.uniform4uiv(this.addr,e)}function uR(o,e,a){const s=this.cache,u=e.length,f=Tc(a,u);_n(s,f)||(o.uniform1iv(this.addr,f),vn(s,f));for(let h=0;h!==u;++h)a.setTexture2D(e[h]||LS,f[h])}function cR(o,e,a){const s=this.cache,u=e.length,f=Tc(a,u);_n(s,f)||(o.uniform1iv(this.addr,f),vn(s,f));for(let h=0;h!==u;++h)a.setTexture3D(e[h]||zS,f[h])}function fR(o,e,a){const s=this.cache,u=e.length,f=Tc(a,u);_n(s,f)||(o.uniform1iv(this.addr,f),vn(s,f));for(let h=0;h!==u;++h)a.setTextureCube(e[h]||PS,f[h])}function hR(o,e,a){const s=this.cache,u=e.length,f=Tc(a,u);_n(s,f)||(o.uniform1iv(this.addr,f),vn(s,f));for(let h=0;h!==u;++h)a.setTexture2DArray(e[h]||OS,f[h])}function dR(o){switch(o){case 5126:return jA;case 35664:return ZA;case 35665:return KA;case 35666:return QA;case 35674:return JA;case 35675:return $A;case 35676:return tR;case 5124:case 35670:return eR;case 35667:case 35671:return nR;case 35668:case 35672:return iR;case 35669:case 35673:return aR;case 5125:return rR;case 36294:return sR;case 36295:return oR;case 36296:return lR;case 35678:case 36198:case 36298:case 36306:case 35682:return uR;case 35679:case 36299:case 36307:return cR;case 35680:case 36300:case 36308:case 36293:return fR;case 36289:case 36303:case 36311:case 36292:return hR}}class pR{constructor(e,a,s){this.id=e,this.addr=s,this.cache=[],this.type=a.type,this.setValue=WA(a.type)}}class mR{constructor(e,a,s){this.id=e,this.addr=s,this.cache=[],this.type=a.type,this.size=a.size,this.setValue=dR(a.type)}}class gR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,a,s){const u=this.seq;for(let f=0,h=u.length;f!==h;++f){const d=u[f];d.setValue(e,a[d.id],s)}}}const Od=/(\w+)(\])?(\[|\.)?/g;function Wv(o,e){o.seq.push(e),o.map[e.id]=e}function _R(o,e,a){const s=o.name,u=s.length;for(Od.lastIndex=0;;){const f=Od.exec(s),h=Od.lastIndex;let d=f[1];const _=f[2]==="]",g=f[3];if(_&&(d=d|0),g===void 0||g==="["&&h+2===u){Wv(a,g===void 0?new pR(d,o,e):new mR(d,o,e));break}else{let p=a.map[d];p===void 0&&(p=new gR(d),Wv(a,p)),a=p}}}class _c{constructor(e,a){this.seq=[],this.map={};const s=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let u=0;u<s;++u){const f=e.getActiveUniform(a,u),h=e.getUniformLocation(a,f.name);_R(f,h,this)}}setValue(e,a,s,u){const f=this.map[a];f!==void 0&&f.setValue(e,s,u)}setOptional(e,a,s){const u=a[s];u!==void 0&&this.setValue(e,s,u)}static upload(e,a,s,u){for(let f=0,h=a.length;f!==h;++f){const d=a[f],_=s[d.id];_.needsUpdate!==!1&&d.setValue(e,_.value,u)}}static seqWithValue(e,a){const s=[];for(let u=0,f=e.length;u!==f;++u){const h=e[u];h.id in a&&s.push(h)}return s}}function jv(o,e,a){const s=o.createShader(e);return o.shaderSource(s,a),o.compileShader(s),s}const vR=37297;let SR=0;function xR(o,e){const a=o.split(`
`),s=[],u=Math.max(e-6,0),f=Math.min(e+6,a.length);for(let h=u;h<f;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${a[h]}`)}return s.join(`
`)}const Zv=new de;function yR(o){De._getMatrix(Zv,De.workingColorSpace,o);const e=`mat3( ${Zv.elements.map(a=>a.toFixed(4))} )`;switch(De.getTransfer(o)){case Sc:return[e,"LinearTransferOETF"];case ke:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Kv(o,e,a){const s=o.getShaderParameter(e,o.COMPILE_STATUS),f=(o.getShaderInfoLog(e)||"").trim();if(s&&f==="")return"";const h=/ERROR: 0:(\d+)/.exec(f);if(h){const d=parseInt(h[1]);return a.toUpperCase()+`

`+f+`

`+xR(o.getShaderSource(e),d)}else return f}function MR(o,e){const a=yR(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${a[1]}( vec4( value.rgb * ${a[0]}, value.a ) );`,"}"].join(`
`)}function ER(o,e){let a;switch(e){case fE:a="Linear";break;case hE:a="Reinhard";break;case dE:a="Cineon";break;case pE:a="ACESFilmic";break;case gE:a="AgX";break;case _E:a="Neutral";break;case mE:a="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),a="Linear"}return"vec3 "+o+"( vec3 color ) { return "+a+"ToneMapping( color ); }"}const hc=new st;function TR(){De.getLuminanceCoefficients(hc);const o=hc.x.toFixed(4),e=hc.y.toFixed(4),a=hc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${a} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bR(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ll).join(`
`)}function AR(o){const e=[];for(const a in o){const s=o[a];s!==!1&&e.push("#define "+a+" "+s)}return e.join(`
`)}function RR(o,e){const a={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let u=0;u<s;u++){const f=o.getActiveAttrib(e,u),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),a[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return a}function ll(o){return o!==""}function Qv(o,e){const a=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,a).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Jv(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ep(o){return o.replace(CR,DR)}const wR=new Map;function DR(o,e){let a=me[e];if(a===void 0){const s=wR.get(e);if(s!==void 0)a=me[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Ep(a)}const UR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $v(o){return o.replace(UR,NR)}function NR(o,e,a,s){let u="";for(let f=parseInt(e);f<parseInt(a);f++)u+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return u}function tS(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function LR(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===rS?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===kM?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ma&&(e="SHADOWMAP_TYPE_VSM"),e}function OR(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case no:case io:e="ENVMAP_TYPE_CUBE";break;case Mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zR(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case io:e="ENVMAP_MODE_REFRACTION";break}return e}function PR(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case sS:e="ENVMAP_BLENDING_MULTIPLY";break;case uE:e="ENVMAP_BLENDING_MIX";break;case cE:e="ENVMAP_BLENDING_ADD";break}return e}function IR(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const a=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,a),112)),texelHeight:s,maxMip:a}}function BR(o,e,a,s){const u=o.getContext(),f=a.defines;let h=a.vertexShader,d=a.fragmentShader;const _=LR(a),g=OR(a),v=zR(a),p=PR(a),x=IR(a),M=bR(a),b=AR(f),C=u.createProgram();let y,S,I=a.glslVersion?"#version "+a.glslVersion+`
`:"";a.isRawShaderMaterial?(y=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b].filter(ll).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b].filter(ll).join(`
`),S.length>0&&(S+=`
`)):(y=[tS(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b,a.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",a.batching?"#define USE_BATCHING":"",a.batchingColor?"#define USE_BATCHING_COLOR":"",a.instancing?"#define USE_INSTANCING":"",a.instancingColor?"#define USE_INSTANCING_COLOR":"",a.instancingMorph?"#define USE_INSTANCING_MORPH":"",a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.map?"#define USE_MAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+v:"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.displacementMap?"#define USE_DISPLACEMENTMAP":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.mapUv?"#define MAP_UV "+a.mapUv:"",a.alphaMapUv?"#define ALPHAMAP_UV "+a.alphaMapUv:"",a.lightMapUv?"#define LIGHTMAP_UV "+a.lightMapUv:"",a.aoMapUv?"#define AOMAP_UV "+a.aoMapUv:"",a.emissiveMapUv?"#define EMISSIVEMAP_UV "+a.emissiveMapUv:"",a.bumpMapUv?"#define BUMPMAP_UV "+a.bumpMapUv:"",a.normalMapUv?"#define NORMALMAP_UV "+a.normalMapUv:"",a.displacementMapUv?"#define DISPLACEMENTMAP_UV "+a.displacementMapUv:"",a.metalnessMapUv?"#define METALNESSMAP_UV "+a.metalnessMapUv:"",a.roughnessMapUv?"#define ROUGHNESSMAP_UV "+a.roughnessMapUv:"",a.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+a.anisotropyMapUv:"",a.clearcoatMapUv?"#define CLEARCOATMAP_UV "+a.clearcoatMapUv:"",a.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+a.clearcoatNormalMapUv:"",a.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+a.clearcoatRoughnessMapUv:"",a.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+a.iridescenceMapUv:"",a.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+a.iridescenceThicknessMapUv:"",a.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+a.sheenColorMapUv:"",a.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+a.sheenRoughnessMapUv:"",a.specularMapUv?"#define SPECULARMAP_UV "+a.specularMapUv:"",a.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+a.specularColorMapUv:"",a.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+a.specularIntensityMapUv:"",a.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+a.transmissionMapUv:"",a.thicknessMapUv?"#define THICKNESSMAP_UV "+a.thicknessMapUv:"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.flatShading?"#define FLAT_SHADED":"",a.skinning?"#define USE_SKINNING":"",a.morphTargets?"#define USE_MORPHTARGETS":"",a.morphNormals&&a.flatShading===!1?"#define USE_MORPHNORMALS":"",a.morphColors?"#define USE_MORPHCOLORS":"",a.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+a.morphTextureStride:"",a.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+a.morphTargetsCount:"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+_:"",a.sizeAttenuation?"#define USE_SIZEATTENUATION":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),S=[tS(a),"#define SHADER_TYPE "+a.shaderType,"#define SHADER_NAME "+a.shaderName,b,a.useFog&&a.fog?"#define USE_FOG":"",a.useFog&&a.fogExp2?"#define FOG_EXP2":"",a.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",a.map?"#define USE_MAP":"",a.matcap?"#define USE_MATCAP":"",a.envMap?"#define USE_ENVMAP":"",a.envMap?"#define "+g:"",a.envMap?"#define "+v:"",a.envMap?"#define "+p:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",a.lightMap?"#define USE_LIGHTMAP":"",a.aoMap?"#define USE_AOMAP":"",a.bumpMap?"#define USE_BUMPMAP":"",a.normalMap?"#define USE_NORMALMAP":"",a.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",a.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",a.emissiveMap?"#define USE_EMISSIVEMAP":"",a.anisotropy?"#define USE_ANISOTROPY":"",a.anisotropyMap?"#define USE_ANISOTROPYMAP":"",a.clearcoat?"#define USE_CLEARCOAT":"",a.clearcoatMap?"#define USE_CLEARCOATMAP":"",a.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",a.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",a.dispersion?"#define USE_DISPERSION":"",a.iridescence?"#define USE_IRIDESCENCE":"",a.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",a.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",a.specularMap?"#define USE_SPECULARMAP":"",a.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",a.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",a.roughnessMap?"#define USE_ROUGHNESSMAP":"",a.metalnessMap?"#define USE_METALNESSMAP":"",a.alphaMap?"#define USE_ALPHAMAP":"",a.alphaTest?"#define USE_ALPHATEST":"",a.alphaHash?"#define USE_ALPHAHASH":"",a.sheen?"#define USE_SHEEN":"",a.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",a.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",a.transmission?"#define USE_TRANSMISSION":"",a.transmissionMap?"#define USE_TRANSMISSIONMAP":"",a.thicknessMap?"#define USE_THICKNESSMAP":"",a.vertexTangents&&a.flatShading===!1?"#define USE_TANGENT":"",a.vertexColors||a.instancingColor||a.batchingColor?"#define USE_COLOR":"",a.vertexAlphas?"#define USE_COLOR_ALPHA":"",a.vertexUv1s?"#define USE_UV1":"",a.vertexUv2s?"#define USE_UV2":"",a.vertexUv3s?"#define USE_UV3":"",a.pointsUvs?"#define USE_POINTS_UV":"",a.gradientMap?"#define USE_GRADIENTMAP":"",a.flatShading?"#define FLAT_SHADED":"",a.doubleSided?"#define DOUBLE_SIDED":"",a.flipSided?"#define FLIP_SIDED":"",a.shadowMapEnabled?"#define USE_SHADOWMAP":"",a.shadowMapEnabled?"#define "+_:"",a.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",a.numLightProbes>0?"#define USE_LIGHT_PROBES":"",a.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",a.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",a.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",a.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",a.toneMapping!==or?"#define TONE_MAPPING":"",a.toneMapping!==or?me.tonemapping_pars_fragment:"",a.toneMapping!==or?ER("toneMapping",a.toneMapping):"",a.dithering?"#define DITHERING":"",a.opaque?"#define OPAQUE":"",me.colorspace_pars_fragment,MR("linearToOutputTexel",a.outputColorSpace),TR(),a.useDepthPacking?"#define DEPTH_PACKING "+a.depthPacking:"",`
`].filter(ll).join(`
`)),h=Ep(h),h=Qv(h,a),h=Jv(h,a),d=Ep(d),d=Qv(d,a),d=Jv(d,a),h=$v(h),d=$v(d),a.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",a.glslVersion===lv?"":"layout(location = 0) out highp vec4 pc_fragColor;",a.glslVersion===lv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const O=I+y+h,D=I+S+d,G=jv(u,u.VERTEX_SHADER,O),F=jv(u,u.FRAGMENT_SHADER,D);u.attachShader(C,G),u.attachShader(C,F),a.index0AttributeName!==void 0?u.bindAttribLocation(C,0,a.index0AttributeName):a.morphTargets===!0&&u.bindAttribLocation(C,0,"position"),u.linkProgram(C);function z(V){if(o.debug.checkShaderErrors){const at=u.getProgramInfoLog(C)||"",ct=u.getShaderInfoLog(G)||"",gt=u.getShaderInfoLog(F)||"",ut=at.trim(),Y=ct.trim(),it=gt.trim();let K=!0,vt=!0;if(u.getProgramParameter(C,u.LINK_STATUS)===!1)if(K=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(u,C,G,F);else{const xt=Kv(u,G,"vertex"),Bt=Kv(u,F,"fragment");console.error("THREE.WebGLProgram: Shader Error "+u.getError()+" - VALIDATE_STATUS "+u.getProgramParameter(C,u.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ut+`
`+xt+`
`+Bt)}else ut!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ut):(Y===""||it==="")&&(vt=!1);vt&&(V.diagnostics={runnable:K,programLog:ut,vertexShader:{log:Y,prefix:y},fragmentShader:{log:it,prefix:S}})}u.deleteShader(G),u.deleteShader(F),k=new _c(u,C),w=RR(u,C)}let k;this.getUniforms=function(){return k===void 0&&z(this),k};let w;this.getAttributes=function(){return w===void 0&&z(this),w};let R=a.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=u.getProgramParameter(C,vR)),R},this.destroy=function(){s.releaseStatesOfProgram(this),u.deleteProgram(C),this.program=void 0},this.type=a.shaderType,this.name=a.shaderName,this.id=SR++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=G,this.fragmentShader=F,this}let FR=0;class HR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const a=e.vertexShader,s=e.fragmentShader,u=this._getShaderStage(a),f=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(u)===!1&&(h.add(u),u.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const a=this.materialCache.get(e);for(const s of a)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const a=this.materialCache;let s=a.get(e);return s===void 0&&(s=new Set,a.set(e,s)),s}_getShaderStage(e){const a=this.shaderCache;let s=a.get(e);return s===void 0&&(s=new GR(e),a.set(e,s)),s}}class GR{constructor(e){this.id=FR++,this.code=e,this.usedTimes=0}}function VR(o,e,a,s,u,f,h){const d=new yS,_=new HR,g=new Set,v=[],p=u.logarithmicDepthBuffer,x=u.vertexTextures;let M=u.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return g.add(w),w===0?"uv":`uv${w}`}function y(w,R,V,at,ct){const gt=at.fog,ut=ct.geometry,Y=w.isMeshStandardMaterial?at.environment:null,it=(w.isMeshStandardMaterial?a:e).get(w.envMap||Y),K=it&&it.mapping===Mc?it.image.height:null,vt=b[w.type];w.precision!==null&&(M=u.getMaxPrecision(w.precision),M!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",M,"instead."));const xt=ut.morphAttributes.position||ut.morphAttributes.normal||ut.morphAttributes.color,Bt=xt!==void 0?xt.length:0;let ne=0;ut.morphAttributes.position!==void 0&&(ne=1),ut.morphAttributes.normal!==void 0&&(ne=2),ut.morphAttributes.color!==void 0&&(ne=3);let pe,P,Q,B;if(vt){const Me=Yi[vt];pe=Me.vertexShader,P=Me.fragmentShader}else pe=w.vertexShader,P=w.fragmentShader,_.update(w),Q=_.getVertexShaderID(w),B=_.getFragmentShaderID(w);const j=o.getRenderTarget(),St=o.state.buffers.depth.getReversed(),Dt=ct.isInstancedMesh===!0,Tt=ct.isBatchedMesh===!0,Mt=!!w.map,Xt=!!w.matcap,L=!!it,Ge=!!w.aoMap,se=!!w.lightMap,Qt=!!w.bumpMap,Lt=!!w.normalMap,ae=!!w.displacementMap,Ht=!!w.emissiveMap,oe=!!w.metalnessMap,qe=!!w.roughnessMap,We=w.anisotropy>0,U=w.clearcoat>0,T=w.dispersion>0,nt=w.iridescence>0,dt=w.sheen>0,yt=w.transmission>0,ft=We&&!!w.anisotropyMap,kt=U&&!!w.clearcoatMap,Ct=U&&!!w.clearcoatNormalMap,jt=U&&!!w.clearcoatRoughnessMap,Kt=nt&&!!w.iridescenceMap,At=nt&&!!w.iridescenceThicknessMap,Ot=dt&&!!w.sheenColorMap,ie=dt&&!!w.sheenRoughnessMap,Zt=!!w.specularMap,zt=!!w.specularColorMap,ce=!!w.specularIntensityMap,X=yt&&!!w.transmissionMap,Rt=yt&&!!w.thicknessMap,Ut=!!w.gradientMap,Vt=!!w.alphaMap,Et=w.alphaTest>0,_t=!!w.alphaHash,Wt=!!w.extensions;let ue=or;w.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(ue=o.toneMapping);const Ve={shaderID:vt,shaderType:w.type,shaderName:w.name,vertexShader:pe,fragmentShader:P,defines:w.defines,customVertexShaderID:Q,customFragmentShaderID:B,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:M,batching:Tt,batchingColor:Tt&&ct._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&ct.instanceColor!==null,instancingMorph:Dt&&ct.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:j===null?o.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:ao,alphaToCoverage:!!w.alphaToCoverage,map:Mt,matcap:Xt,envMap:L,envMapMode:L&&it.mapping,envMapCubeUVHeight:K,aoMap:Ge,lightMap:se,bumpMap:Qt,normalMap:Lt,displacementMap:x&&ae,emissiveMap:Ht,normalMapObjectSpace:Lt&&w.normalMapType===yE,normalMapTangentSpace:Lt&&w.normalMapType===gS,metalnessMap:oe,roughnessMap:qe,anisotropy:We,anisotropyMap:ft,clearcoat:U,clearcoatMap:kt,clearcoatNormalMap:Ct,clearcoatRoughnessMap:jt,dispersion:T,iridescence:nt,iridescenceMap:Kt,iridescenceThicknessMap:At,sheen:dt,sheenColorMap:Ot,sheenRoughnessMap:ie,specularMap:Zt,specularColorMap:zt,specularIntensityMap:ce,transmission:yt,transmissionMap:X,thicknessMap:Rt,gradientMap:Ut,opaque:w.transparent===!1&&w.blending===Js&&w.alphaToCoverage===!1,alphaMap:Vt,alphaTest:Et,alphaHash:_t,combine:w.combine,mapUv:Mt&&C(w.map.channel),aoMapUv:Ge&&C(w.aoMap.channel),lightMapUv:se&&C(w.lightMap.channel),bumpMapUv:Qt&&C(w.bumpMap.channel),normalMapUv:Lt&&C(w.normalMap.channel),displacementMapUv:ae&&C(w.displacementMap.channel),emissiveMapUv:Ht&&C(w.emissiveMap.channel),metalnessMapUv:oe&&C(w.metalnessMap.channel),roughnessMapUv:qe&&C(w.roughnessMap.channel),anisotropyMapUv:ft&&C(w.anisotropyMap.channel),clearcoatMapUv:kt&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Ct&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:jt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Kt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:At&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ot&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:ie&&C(w.sheenRoughnessMap.channel),specularMapUv:Zt&&C(w.specularMap.channel),specularColorMapUv:zt&&C(w.specularColorMap.channel),specularIntensityMapUv:ce&&C(w.specularIntensityMap.channel),transmissionMapUv:X&&C(w.transmissionMap.channel),thicknessMapUv:Rt&&C(w.thicknessMap.channel),alphaMapUv:Vt&&C(w.alphaMap.channel),vertexTangents:!!ut.attributes.tangent&&(Lt||We),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ut.attributes.color&&ut.attributes.color.itemSize===4,pointsUvs:ct.isPoints===!0&&!!ut.attributes.uv&&(Mt||Vt),fog:!!gt,useFog:w.fog===!0,fogExp2:!!gt&&gt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:St,skinning:ct.isSkinnedMesh===!0,morphTargets:ut.morphAttributes.position!==void 0,morphNormals:ut.morphAttributes.normal!==void 0,morphColors:ut.morphAttributes.color!==void 0,morphTargetsCount:Bt,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ue,decodeVideoTexture:Mt&&w.map.isVideoTexture===!0&&De.getTransfer(w.map.colorSpace)===ke,decodeVideoTextureEmissive:Ht&&w.emissiveMap.isVideoTexture===!0&&De.getTransfer(w.emissiveMap.colorSpace)===ke,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Wi,flipSided:w.side===jn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Wt&&w.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Wt&&w.extensions.multiDraw===!0||Tt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ve.vertexUv1s=g.has(1),Ve.vertexUv2s=g.has(2),Ve.vertexUv3s=g.has(3),g.clear(),Ve}function S(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)R.push(V),R.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(I(R,w),O(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function I(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function O(w,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),R.gradientMap&&d.enable(22),w.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reversedDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),w.push(d.mask)}function D(w){const R=b[w.type];let V;if(R){const at=Yi[R];V=fT.clone(at.uniforms)}else V=w.uniforms;return V}function G(w,R){let V;for(let at=0,ct=v.length;at<ct;at++){const gt=v[at];if(gt.cacheKey===R){V=gt,++V.usedTimes;break}}return V===void 0&&(V=new BR(o,R,w,f),v.push(V)),V}function F(w){if(--w.usedTimes===0){const R=v.indexOf(w);v[R]=v[v.length-1],v.pop(),w.destroy()}}function z(w){_.remove(w)}function k(){_.dispose()}return{getParameters:y,getProgramCacheKey:S,getUniforms:D,acquireProgram:G,releaseProgram:F,releaseShaderCache:z,programs:v,dispose:k}}function XR(){let o=new WeakMap;function e(h){return o.has(h)}function a(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function u(h,d,_){o.get(h)[d]=_}function f(){o=new WeakMap}return{has:e,get:a,remove:s,update:u,dispose:f}}function kR(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function eS(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function nS(){const o=[];let e=0;const a=[],s=[],u=[];function f(){e=0,a.length=0,s.length=0,u.length=0}function h(p,x,M,b,C,y){let S=o[e];return S===void 0?(S={id:p.id,object:p,geometry:x,material:M,groupOrder:b,renderOrder:p.renderOrder,z:C,group:y},o[e]=S):(S.id=p.id,S.object=p,S.geometry=x,S.material=M,S.groupOrder=b,S.renderOrder=p.renderOrder,S.z=C,S.group=y),e++,S}function d(p,x,M,b,C,y){const S=h(p,x,M,b,C,y);M.transmission>0?s.push(S):M.transparent===!0?u.push(S):a.push(S)}function _(p,x,M,b,C,y){const S=h(p,x,M,b,C,y);M.transmission>0?s.unshift(S):M.transparent===!0?u.unshift(S):a.unshift(S)}function g(p,x){a.length>1&&a.sort(p||kR),s.length>1&&s.sort(x||eS),u.length>1&&u.sort(x||eS)}function v(){for(let p=e,x=o.length;p<x;p++){const M=o[p];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:a,transmissive:s,transparent:u,init:f,push:d,unshift:_,finish:v,sort:g}}function qR(){let o=new WeakMap;function e(s,u){const f=o.get(s);let h;return f===void 0?(h=new nS,o.set(s,[h])):u>=f.length?(h=new nS,f.push(h)):h=f[u],h}function a(){o=new WeakMap}return{get:e,dispose:a}}function YR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let a;switch(e.type){case"DirectionalLight":a={direction:new st,color:new Se};break;case"SpotLight":a={position:new st,direction:new st,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":a={position:new st,color:new Se,distance:0,decay:0};break;case"HemisphereLight":a={direction:new st,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":a={color:new Se,position:new st,halfWidth:new st,halfHeight:new st};break}return o[e.id]=a,a}}}function WR(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let a;switch(e.type){case"DirectionalLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":a={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=a,a}}}let jR=0;function ZR(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function KR(o){const e=new YR,a=WR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let g=0;g<9;g++)s.probe.push(new st);const u=new st,f=new sn,h=new sn;function d(g){let v=0,p=0,x=0;for(let w=0;w<9;w++)s.probe[w].set(0,0,0);let M=0,b=0,C=0,y=0,S=0,I=0,O=0,D=0,G=0,F=0,z=0;g.sort(ZR);for(let w=0,R=g.length;w<R;w++){const V=g[w],at=V.color,ct=V.intensity,gt=V.distance,ut=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=at.r*ct,p+=at.g*ct,x+=at.b*ct;else if(V.isLightProbe){for(let Y=0;Y<9;Y++)s.probe[Y].addScaledVector(V.sh.coefficients[Y],ct);z++}else if(V.isDirectionalLight){const Y=e.get(V);if(Y.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const it=V.shadow,K=a.get(V);K.shadowIntensity=it.intensity,K.shadowBias=it.bias,K.shadowNormalBias=it.normalBias,K.shadowRadius=it.radius,K.shadowMapSize=it.mapSize,s.directionalShadow[M]=K,s.directionalShadowMap[M]=ut,s.directionalShadowMatrix[M]=V.shadow.matrix,I++}s.directional[M]=Y,M++}else if(V.isSpotLight){const Y=e.get(V);Y.position.setFromMatrixPosition(V.matrixWorld),Y.color.copy(at).multiplyScalar(ct),Y.distance=gt,Y.coneCos=Math.cos(V.angle),Y.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),Y.decay=V.decay,s.spot[C]=Y;const it=V.shadow;if(V.map&&(s.spotLightMap[G]=V.map,G++,it.updateMatrices(V),V.castShadow&&F++),s.spotLightMatrix[C]=it.matrix,V.castShadow){const K=a.get(V);K.shadowIntensity=it.intensity,K.shadowBias=it.bias,K.shadowNormalBias=it.normalBias,K.shadowRadius=it.radius,K.shadowMapSize=it.mapSize,s.spotShadow[C]=K,s.spotShadowMap[C]=ut,D++}C++}else if(V.isRectAreaLight){const Y=e.get(V);Y.color.copy(at).multiplyScalar(ct),Y.halfWidth.set(V.width*.5,0,0),Y.halfHeight.set(0,V.height*.5,0),s.rectArea[y]=Y,y++}else if(V.isPointLight){const Y=e.get(V);if(Y.color.copy(V.color).multiplyScalar(V.intensity),Y.distance=V.distance,Y.decay=V.decay,V.castShadow){const it=V.shadow,K=a.get(V);K.shadowIntensity=it.intensity,K.shadowBias=it.bias,K.shadowNormalBias=it.normalBias,K.shadowRadius=it.radius,K.shadowMapSize=it.mapSize,K.shadowCameraNear=it.camera.near,K.shadowCameraFar=it.camera.far,s.pointShadow[b]=K,s.pointShadowMap[b]=ut,s.pointShadowMatrix[b]=V.shadow.matrix,O++}s.point[b]=Y,b++}else if(V.isHemisphereLight){const Y=e.get(V);Y.skyColor.copy(V.color).multiplyScalar(ct),Y.groundColor.copy(V.groundColor).multiplyScalar(ct),s.hemi[S]=Y,S++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=It.LTC_FLOAT_1,s.rectAreaLTC2=It.LTC_FLOAT_2):(s.rectAreaLTC1=It.LTC_HALF_1,s.rectAreaLTC2=It.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=p,s.ambient[2]=x;const k=s.hash;(k.directionalLength!==M||k.pointLength!==b||k.spotLength!==C||k.rectAreaLength!==y||k.hemiLength!==S||k.numDirectionalShadows!==I||k.numPointShadows!==O||k.numSpotShadows!==D||k.numSpotMaps!==G||k.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=y,s.point.length=b,s.hemi.length=S,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=D,s.spotShadowMap.length=D,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=D+G-F,s.spotLightMap.length=G,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=z,k.directionalLength=M,k.pointLength=b,k.spotLength=C,k.rectAreaLength=y,k.hemiLength=S,k.numDirectionalShadows=I,k.numPointShadows=O,k.numSpotShadows=D,k.numSpotMaps=G,k.numLightProbes=z,s.version=jR++)}function _(g,v){let p=0,x=0,M=0,b=0,C=0;const y=v.matrixWorldInverse;for(let S=0,I=g.length;S<I;S++){const O=g[S];if(O.isDirectionalLight){const D=s.directional[p];D.direction.setFromMatrixPosition(O.matrixWorld),u.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(u),D.direction.transformDirection(y),p++}else if(O.isSpotLight){const D=s.spot[M];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(O.matrixWorld),u.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(u),D.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const D=s.rectArea[b];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),h.identity(),f.copy(O.matrixWorld),f.premultiply(y),h.extractRotation(f),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),b++}else if(O.isPointLight){const D=s.point[x];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),x++}else if(O.isHemisphereLight){const D=s.hemi[C];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(y),C++}}}return{setup:d,setupView:_,state:s}}function iS(o){const e=new KR(o),a=[],s=[];function u(v){g.camera=v,a.length=0,s.length=0}function f(v){a.push(v)}function h(v){s.push(v)}function d(){e.setup(a)}function _(v){e.setupView(a,v)}const g={lightsArray:a,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:u,state:g,setupLights:d,setupLightsView:_,pushLight:f,pushShadow:h}}function QR(o){let e=new WeakMap;function a(u,f=0){const h=e.get(u);let d;return h===void 0?(d=new iS(o),e.set(u,[d])):f>=h.length?(d=new iS(o),h.push(d)):d=h[f],d}function s(){e=new WeakMap}return{get:a,dispose:s}}const JR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$R=`uniform sampler2D shadow_pass;
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
}`;function tC(o,e,a){let s=new zp;const u=new Oe,f=new Oe,h=new rn,d=new MT({depthPacking:xE}),_=new ET,g={},v=a.maxTextureSize,p={[lr]:jn,[jn]:lr,[Wi]:Wi},x=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:JR,fragmentShader:$R}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const b=new ta;b.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Wn(b,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rS;let S=this.type;this.render=function(F,z,k){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||F.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),at=o.state;at.setBlending(sr),at.buffers.depth.getReversed()===!0?at.buffers.color.setClear(0,0,0,0):at.buffers.color.setClear(1,1,1,1),at.buffers.depth.setTest(!0),at.setScissorTest(!1);const ct=S!==Ma&&this.type===Ma,gt=S===Ma&&this.type!==Ma;for(let ut=0,Y=F.length;ut<Y;ut++){const it=F[ut],K=it.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;u.copy(K.mapSize);const vt=K.getFrameExtents();if(u.multiply(vt),f.copy(K.mapSize),(u.x>v||u.y>v)&&(u.x>v&&(f.x=Math.floor(v/vt.x),u.x=f.x*vt.x,K.mapSize.x=f.x),u.y>v&&(f.y=Math.floor(v/vt.y),u.y=f.y*vt.y,K.mapSize.y=f.y)),K.map===null||ct===!0||gt===!0){const Bt=this.type!==Ma?{minFilter:Li,magFilter:Li}:{};K.map!==null&&K.map.dispose(),K.map=new Wr(u.x,u.y,Bt),K.map.texture.name=it.name+".shadowMap",K.camera.updateProjectionMatrix()}o.setRenderTarget(K.map),o.clear();const xt=K.getViewportCount();for(let Bt=0;Bt<xt;Bt++){const ne=K.getViewport(Bt);h.set(f.x*ne.x,f.y*ne.y,f.x*ne.z,f.y*ne.w),at.viewport(h),K.updateMatrices(it,Bt),s=K.getFrustum(),D(z,k,K.camera,it,this.type)}K.isPointLightShadow!==!0&&this.type===Ma&&I(K,k),K.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(w,R,V)};function I(F,z){const k=e.update(C);x.defines.VSM_SAMPLES!==F.blurSamples&&(x.defines.VSM_SAMPLES=F.blurSamples,M.defines.VSM_SAMPLES=F.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),F.mapPass===null&&(F.mapPass=new Wr(u.x,u.y)),x.uniforms.shadow_pass.value=F.map.texture,x.uniforms.resolution.value=F.mapSize,x.uniforms.radius.value=F.radius,o.setRenderTarget(F.mapPass),o.clear(),o.renderBufferDirect(z,null,k,x,C,null),M.uniforms.shadow_pass.value=F.mapPass.texture,M.uniforms.resolution.value=F.mapSize,M.uniforms.radius.value=F.radius,o.setRenderTarget(F.map),o.clear(),o.renderBufferDirect(z,null,k,M,C,null)}function O(F,z,k,w){let R=null;const V=k.isPointLight===!0?F.customDistanceMaterial:F.customDepthMaterial;if(V!==void 0)R=V;else if(R=k.isPointLight===!0?_:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){const at=R.uuid,ct=z.uuid;let gt=g[at];gt===void 0&&(gt={},g[at]=gt);let ut=gt[ct];ut===void 0&&(ut=R.clone(),gt[ct]=ut,z.addEventListener("dispose",G)),R=ut}if(R.visible=z.visible,R.wireframe=z.wireframe,w===Ma?R.side=z.shadowSide!==null?z.shadowSide:z.side:R.side=z.shadowSide!==null?z.shadowSide:p[z.side],R.alphaMap=z.alphaMap,R.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,R.map=z.map,R.clipShadows=z.clipShadows,R.clippingPlanes=z.clippingPlanes,R.clipIntersection=z.clipIntersection,R.displacementMap=z.displacementMap,R.displacementScale=z.displacementScale,R.displacementBias=z.displacementBias,R.wireframeLinewidth=z.wireframeLinewidth,R.linewidth=z.linewidth,k.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const at=o.properties.get(R);at.light=k}return R}function D(F,z,k,w,R){if(F.visible===!1)return;if(F.layers.test(z.layers)&&(F.isMesh||F.isLine||F.isPoints)&&(F.castShadow||F.receiveShadow&&R===Ma)&&(!F.frustumCulled||s.intersectsObject(F))){F.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,F.matrixWorld);const ct=e.update(F),gt=F.material;if(Array.isArray(gt)){const ut=ct.groups;for(let Y=0,it=ut.length;Y<it;Y++){const K=ut[Y],vt=gt[K.materialIndex];if(vt&&vt.visible){const xt=O(F,vt,w,R);F.onBeforeShadow(o,F,z,k,ct,xt,K),o.renderBufferDirect(k,null,ct,xt,F,K),F.onAfterShadow(o,F,z,k,ct,xt,K)}}}else if(gt.visible){const ut=O(F,gt,w,R);F.onBeforeShadow(o,F,z,k,ct,ut,null),o.renderBufferDirect(k,null,ct,ut,F,null),F.onAfterShadow(o,F,z,k,ct,ut,null)}}const at=F.children;for(let ct=0,gt=at.length;ct<gt;ct++)D(at[ct],z,k,w,R)}function G(F){F.target.removeEventListener("dispose",G);for(const k in g){const w=g[k],R=F.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const eC={[Id]:Bd,[Fd]:Vd,[Hd]:Xd,[eo]:Gd,[Bd]:Id,[Vd]:Fd,[Xd]:Hd,[Gd]:eo};function nC(o,e){function a(){let X=!1;const Rt=new rn;let Ut=null;const Vt=new rn(0,0,0,0);return{setMask:function(Et){Ut!==Et&&!X&&(o.colorMask(Et,Et,Et,Et),Ut=Et)},setLocked:function(Et){X=Et},setClear:function(Et,_t,Wt,ue,Ve){Ve===!0&&(Et*=ue,_t*=ue,Wt*=ue),Rt.set(Et,_t,Wt,ue),Vt.equals(Rt)===!1&&(o.clearColor(Et,_t,Wt,ue),Vt.copy(Rt))},reset:function(){X=!1,Ut=null,Vt.set(-1,0,0,0)}}}function s(){let X=!1,Rt=!1,Ut=null,Vt=null,Et=null;return{setReversed:function(_t){if(Rt!==_t){const Wt=e.get("EXT_clip_control");_t?Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.ZERO_TO_ONE_EXT):Wt.clipControlEXT(Wt.LOWER_LEFT_EXT,Wt.NEGATIVE_ONE_TO_ONE_EXT),Rt=_t;const ue=Et;Et=null,this.setClear(ue)}},getReversed:function(){return Rt},setTest:function(_t){_t?j(o.DEPTH_TEST):St(o.DEPTH_TEST)},setMask:function(_t){Ut!==_t&&!X&&(o.depthMask(_t),Ut=_t)},setFunc:function(_t){if(Rt&&(_t=eC[_t]),Vt!==_t){switch(_t){case Id:o.depthFunc(o.NEVER);break;case Bd:o.depthFunc(o.ALWAYS);break;case Fd:o.depthFunc(o.LESS);break;case eo:o.depthFunc(o.LEQUAL);break;case Hd:o.depthFunc(o.EQUAL);break;case Gd:o.depthFunc(o.GEQUAL);break;case Vd:o.depthFunc(o.GREATER);break;case Xd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Vt=_t}},setLocked:function(_t){X=_t},setClear:function(_t){Et!==_t&&(Rt&&(_t=1-_t),o.clearDepth(_t),Et=_t)},reset:function(){X=!1,Ut=null,Vt=null,Et=null,Rt=!1}}}function u(){let X=!1,Rt=null,Ut=null,Vt=null,Et=null,_t=null,Wt=null,ue=null,Ve=null;return{setTest:function(Me){X||(Me?j(o.STENCIL_TEST):St(o.STENCIL_TEST))},setMask:function(Me){Rt!==Me&&!X&&(o.stencilMask(Me),Rt=Me)},setFunc:function(Me,$e,pn){(Ut!==Me||Vt!==$e||Et!==pn)&&(o.stencilFunc(Me,$e,pn),Ut=Me,Vt=$e,Et=pn)},setOp:function(Me,$e,pn){(_t!==Me||Wt!==$e||ue!==pn)&&(o.stencilOp(Me,$e,pn),_t=Me,Wt=$e,ue=pn)},setLocked:function(Me){X=Me},setClear:function(Me){Ve!==Me&&(o.clearStencil(Me),Ve=Me)},reset:function(){X=!1,Rt=null,Ut=null,Vt=null,Et=null,_t=null,Wt=null,ue=null,Ve=null}}}const f=new a,h=new s,d=new u,_=new WeakMap,g=new WeakMap;let v={},p={},x=new WeakMap,M=[],b=null,C=!1,y=null,S=null,I=null,O=null,D=null,G=null,F=null,z=new Se(0,0,0),k=0,w=!1,R=null,V=null,at=null,ct=null,gt=null;const ut=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,it=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(K)[1]),Y=it>=1):K.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),Y=it>=2);let vt=null,xt={};const Bt=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),pe=new rn().fromArray(Bt),P=new rn().fromArray(ne);function Q(X,Rt,Ut,Vt){const Et=new Uint8Array(4),_t=o.createTexture();o.bindTexture(X,_t),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Wt=0;Wt<Ut;Wt++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Rt,0,o.RGBA,1,1,Vt,0,o.RGBA,o.UNSIGNED_BYTE,Et):o.texImage2D(Rt+Wt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Et);return _t}const B={};B[o.TEXTURE_2D]=Q(o.TEXTURE_2D,o.TEXTURE_2D,1),B[o.TEXTURE_CUBE_MAP]=Q(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[o.TEXTURE_2D_ARRAY]=Q(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),B[o.TEXTURE_3D]=Q(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),j(o.DEPTH_TEST),h.setFunc(eo),Qt(!1),Lt(iv),j(o.CULL_FACE),Ge(sr);function j(X){v[X]!==!0&&(o.enable(X),v[X]=!0)}function St(X){v[X]!==!1&&(o.disable(X),v[X]=!1)}function Dt(X,Rt){return p[X]!==Rt?(o.bindFramebuffer(X,Rt),p[X]=Rt,X===o.DRAW_FRAMEBUFFER&&(p[o.FRAMEBUFFER]=Rt),X===o.FRAMEBUFFER&&(p[o.DRAW_FRAMEBUFFER]=Rt),!0):!1}function Tt(X,Rt){let Ut=M,Vt=!1;if(X){Ut=x.get(Rt),Ut===void 0&&(Ut=[],x.set(Rt,Ut));const Et=X.textures;if(Ut.length!==Et.length||Ut[0]!==o.COLOR_ATTACHMENT0){for(let _t=0,Wt=Et.length;_t<Wt;_t++)Ut[_t]=o.COLOR_ATTACHMENT0+_t;Ut.length=Et.length,Vt=!0}}else Ut[0]!==o.BACK&&(Ut[0]=o.BACK,Vt=!0);Vt&&o.drawBuffers(Ut)}function Mt(X){return b!==X?(o.useProgram(X),b=X,!0):!1}const Xt={[Vr]:o.FUNC_ADD,[YM]:o.FUNC_SUBTRACT,[WM]:o.FUNC_REVERSE_SUBTRACT};Xt[jM]=o.MIN,Xt[ZM]=o.MAX;const L={[KM]:o.ZERO,[QM]:o.ONE,[JM]:o.SRC_COLOR,[zd]:o.SRC_ALPHA,[aE]:o.SRC_ALPHA_SATURATE,[nE]:o.DST_COLOR,[tE]:o.DST_ALPHA,[$M]:o.ONE_MINUS_SRC_COLOR,[Pd]:o.ONE_MINUS_SRC_ALPHA,[iE]:o.ONE_MINUS_DST_COLOR,[eE]:o.ONE_MINUS_DST_ALPHA,[rE]:o.CONSTANT_COLOR,[sE]:o.ONE_MINUS_CONSTANT_COLOR,[oE]:o.CONSTANT_ALPHA,[lE]:o.ONE_MINUS_CONSTANT_ALPHA};function Ge(X,Rt,Ut,Vt,Et,_t,Wt,ue,Ve,Me){if(X===sr){C===!0&&(St(o.BLEND),C=!1);return}if(C===!1&&(j(o.BLEND),C=!0),X!==qM){if(X!==y||Me!==w){if((S!==Vr||D!==Vr)&&(o.blendEquation(o.FUNC_ADD),S=Vr,D=Vr),Me)switch(X){case Js:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case vc:o.blendFunc(o.ONE,o.ONE);break;case av:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case rv:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Js:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case vc:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case av:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case rv:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}I=null,O=null,G=null,F=null,z.set(0,0,0),k=0,y=X,w=Me}return}Et=Et||Rt,_t=_t||Ut,Wt=Wt||Vt,(Rt!==S||Et!==D)&&(o.blendEquationSeparate(Xt[Rt],Xt[Et]),S=Rt,D=Et),(Ut!==I||Vt!==O||_t!==G||Wt!==F)&&(o.blendFuncSeparate(L[Ut],L[Vt],L[_t],L[Wt]),I=Ut,O=Vt,G=_t,F=Wt),(ue.equals(z)===!1||Ve!==k)&&(o.blendColor(ue.r,ue.g,ue.b,Ve),z.copy(ue),k=Ve),y=X,w=!1}function se(X,Rt){X.side===Wi?St(o.CULL_FACE):j(o.CULL_FACE);let Ut=X.side===jn;Rt&&(Ut=!Ut),Qt(Ut),X.blending===Js&&X.transparent===!1?Ge(sr):Ge(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),f.setMask(X.colorWrite);const Vt=X.stencilWrite;d.setTest(Vt),Vt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ht(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?j(o.SAMPLE_ALPHA_TO_COVERAGE):St(o.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(X){R!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),R=X)}function Lt(X){X!==VM?(j(o.CULL_FACE),X!==V&&(X===iv?o.cullFace(o.BACK):X===XM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):St(o.CULL_FACE),V=X}function ae(X){X!==at&&(Y&&o.lineWidth(X),at=X)}function Ht(X,Rt,Ut){X?(j(o.POLYGON_OFFSET_FILL),(ct!==Rt||gt!==Ut)&&(o.polygonOffset(Rt,Ut),ct=Rt,gt=Ut)):St(o.POLYGON_OFFSET_FILL)}function oe(X){X?j(o.SCISSOR_TEST):St(o.SCISSOR_TEST)}function qe(X){X===void 0&&(X=o.TEXTURE0+ut-1),vt!==X&&(o.activeTexture(X),vt=X)}function We(X,Rt,Ut){Ut===void 0&&(vt===null?Ut=o.TEXTURE0+ut-1:Ut=vt);let Vt=xt[Ut];Vt===void 0&&(Vt={type:void 0,texture:void 0},xt[Ut]=Vt),(Vt.type!==X||Vt.texture!==Rt)&&(vt!==Ut&&(o.activeTexture(Ut),vt=Ut),o.bindTexture(X,Rt||B[X]),Vt.type=X,Vt.texture=Rt)}function U(){const X=xt[vt];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function T(){try{o.compressedTexImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function nt(){try{o.compressedTexImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function dt(){try{o.texSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function yt(){try{o.texSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ft(){try{o.compressedTexSubImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function kt(){try{o.compressedTexSubImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ct(){try{o.texStorage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function jt(){try{o.texStorage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Kt(){try{o.texImage2D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{o.texImage3D(...arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ot(X){pe.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),pe.copy(X))}function ie(X){P.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),P.copy(X))}function Zt(X,Rt){let Ut=g.get(Rt);Ut===void 0&&(Ut=new WeakMap,g.set(Rt,Ut));let Vt=Ut.get(X);Vt===void 0&&(Vt=o.getUniformBlockIndex(Rt,X.name),Ut.set(X,Vt))}function zt(X,Rt){const Vt=g.get(Rt).get(X);_.get(Rt)!==Vt&&(o.uniformBlockBinding(Rt,Vt,X.__bindingPointIndex),_.set(Rt,Vt))}function ce(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},vt=null,xt={},p={},x=new WeakMap,M=[],b=null,C=!1,y=null,S=null,I=null,O=null,D=null,G=null,F=null,z=new Se(0,0,0),k=0,w=!1,R=null,V=null,at=null,ct=null,gt=null,pe.set(0,0,o.canvas.width,o.canvas.height),P.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:j,disable:St,bindFramebuffer:Dt,drawBuffers:Tt,useProgram:Mt,setBlending:Ge,setMaterial:se,setFlipSided:Qt,setCullFace:Lt,setLineWidth:ae,setPolygonOffset:Ht,setScissorTest:oe,activeTexture:qe,bindTexture:We,unbindTexture:U,compressedTexImage2D:T,compressedTexImage3D:nt,texImage2D:Kt,texImage3D:At,updateUBOMapping:Zt,uniformBlockBinding:zt,texStorage2D:Ct,texStorage3D:jt,texSubImage2D:dt,texSubImage3D:yt,compressedTexSubImage2D:ft,compressedTexSubImage3D:kt,scissor:Ot,viewport:ie,reset:ce}}function iC(o,e,a,s,u,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,_=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new Oe,v=new WeakMap;let p;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(U,T){return M?new OffscreenCanvas(U,T):yc("canvas")}function C(U,T,nt){let dt=1;const yt=We(U);if((yt.width>nt||yt.height>nt)&&(dt=nt/Math.max(yt.width,yt.height)),dt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const ft=Math.floor(dt*yt.width),kt=Math.floor(dt*yt.height);p===void 0&&(p=b(ft,kt));const Ct=T?b(ft,kt):p;return Ct.width=ft,Ct.height=kt,Ct.getContext("2d").drawImage(U,0,0,ft,kt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+yt.width+"x"+yt.height+") to ("+ft+"x"+kt+")."),Ct}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+yt.width+"x"+yt.height+")."),U;return U}function y(U){return U.generateMipmaps}function S(U){o.generateMipmap(U)}function I(U){return U.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?o.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(U,T,nt,dt,yt=!1){if(U!==null){if(o[U]!==void 0)return o[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let ft=T;if(T===o.RED&&(nt===o.FLOAT&&(ft=o.R32F),nt===o.HALF_FLOAT&&(ft=o.R16F),nt===o.UNSIGNED_BYTE&&(ft=o.R8)),T===o.RED_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ft=o.R8UI),nt===o.UNSIGNED_SHORT&&(ft=o.R16UI),nt===o.UNSIGNED_INT&&(ft=o.R32UI),nt===o.BYTE&&(ft=o.R8I),nt===o.SHORT&&(ft=o.R16I),nt===o.INT&&(ft=o.R32I)),T===o.RG&&(nt===o.FLOAT&&(ft=o.RG32F),nt===o.HALF_FLOAT&&(ft=o.RG16F),nt===o.UNSIGNED_BYTE&&(ft=o.RG8)),T===o.RG_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ft=o.RG8UI),nt===o.UNSIGNED_SHORT&&(ft=o.RG16UI),nt===o.UNSIGNED_INT&&(ft=o.RG32UI),nt===o.BYTE&&(ft=o.RG8I),nt===o.SHORT&&(ft=o.RG16I),nt===o.INT&&(ft=o.RG32I)),T===o.RGB_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ft=o.RGB8UI),nt===o.UNSIGNED_SHORT&&(ft=o.RGB16UI),nt===o.UNSIGNED_INT&&(ft=o.RGB32UI),nt===o.BYTE&&(ft=o.RGB8I),nt===o.SHORT&&(ft=o.RGB16I),nt===o.INT&&(ft=o.RGB32I)),T===o.RGBA_INTEGER&&(nt===o.UNSIGNED_BYTE&&(ft=o.RGBA8UI),nt===o.UNSIGNED_SHORT&&(ft=o.RGBA16UI),nt===o.UNSIGNED_INT&&(ft=o.RGBA32UI),nt===o.BYTE&&(ft=o.RGBA8I),nt===o.SHORT&&(ft=o.RGBA16I),nt===o.INT&&(ft=o.RGBA32I)),T===o.RGB&&(nt===o.UNSIGNED_INT_5_9_9_9_REV&&(ft=o.RGB9_E5),nt===o.UNSIGNED_INT_10F_11F_11F_REV&&(ft=o.R11F_G11F_B10F)),T===o.RGBA){const kt=yt?Sc:De.getTransfer(dt);nt===o.FLOAT&&(ft=o.RGBA32F),nt===o.HALF_FLOAT&&(ft=o.RGBA16F),nt===o.UNSIGNED_BYTE&&(ft=kt===ke?o.SRGB8_ALPHA8:o.RGBA8),nt===o.UNSIGNED_SHORT_4_4_4_4&&(ft=o.RGBA4),nt===o.UNSIGNED_SHORT_5_5_5_1&&(ft=o.RGB5_A1)}return(ft===o.R16F||ft===o.R32F||ft===o.RG16F||ft===o.RG32F||ft===o.RGBA16F||ft===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ft}function D(U,T){let nt;return U?T===null||T===Yr||T===hl?nt=o.DEPTH24_STENCIL8:T===Ea?nt=o.DEPTH32F_STENCIL8:T===fl&&(nt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Yr||T===hl?nt=o.DEPTH_COMPONENT24:T===Ea?nt=o.DEPTH_COMPONENT32F:T===fl&&(nt=o.DEPTH_COMPONENT16),nt}function G(U,T){return y(U)===!0||U.isFramebufferTexture&&U.minFilter!==Li&&U.minFilter!==ji?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function F(U){const T=U.target;T.removeEventListener("dispose",F),k(T),T.isVideoTexture&&v.delete(T)}function z(U){const T=U.target;T.removeEventListener("dispose",z),R(T)}function k(U){const T=s.get(U);if(T.__webglInit===void 0)return;const nt=U.source,dt=x.get(nt);if(dt){const yt=dt[T.__cacheKey];yt.usedTimes--,yt.usedTimes===0&&w(U),Object.keys(dt).length===0&&x.delete(nt)}s.remove(U)}function w(U){const T=s.get(U);o.deleteTexture(T.__webglTexture);const nt=U.source,dt=x.get(nt);delete dt[T.__cacheKey],h.memory.textures--}function R(U){const T=s.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),s.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(T.__webglFramebuffer[dt]))for(let yt=0;yt<T.__webglFramebuffer[dt].length;yt++)o.deleteFramebuffer(T.__webglFramebuffer[dt][yt]);else o.deleteFramebuffer(T.__webglFramebuffer[dt]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[dt])}else{if(Array.isArray(T.__webglFramebuffer))for(let dt=0;dt<T.__webglFramebuffer.length;dt++)o.deleteFramebuffer(T.__webglFramebuffer[dt]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let dt=0;dt<T.__webglColorRenderbuffer.length;dt++)T.__webglColorRenderbuffer[dt]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[dt]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const nt=U.textures;for(let dt=0,yt=nt.length;dt<yt;dt++){const ft=s.get(nt[dt]);ft.__webglTexture&&(o.deleteTexture(ft.__webglTexture),h.memory.textures--),s.remove(nt[dt])}s.remove(U)}let V=0;function at(){V=0}function ct(){const U=V;return U>=u.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+u.maxTextures),V+=1,U}function gt(U){const T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function ut(U,T){const nt=s.get(U);if(U.isVideoTexture&&oe(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&nt.__version!==U.version){const dt=U.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{B(nt,U,T);return}}else U.isExternalTexture&&(nt.__webglTexture=U.sourceTexture?U.sourceTexture:null);a.bindTexture(o.TEXTURE_2D,nt.__webglTexture,o.TEXTURE0+T)}function Y(U,T){const nt=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&nt.__version!==U.version){B(nt,U,T);return}a.bindTexture(o.TEXTURE_2D_ARRAY,nt.__webglTexture,o.TEXTURE0+T)}function it(U,T){const nt=s.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&nt.__version!==U.version){B(nt,U,T);return}a.bindTexture(o.TEXTURE_3D,nt.__webglTexture,o.TEXTURE0+T)}function K(U,T){const nt=s.get(U);if(U.version>0&&nt.__version!==U.version){j(nt,U,T);return}a.bindTexture(o.TEXTURE_CUBE_MAP,nt.__webglTexture,o.TEXTURE0+T)}const vt={[Yd]:o.REPEAT,[kr]:o.CLAMP_TO_EDGE,[Wd]:o.MIRRORED_REPEAT},xt={[Li]:o.NEAREST,[vE]:o.NEAREST_MIPMAP_NEAREST,[ku]:o.NEAREST_MIPMAP_LINEAR,[ji]:o.LINEAR,[rd]:o.LINEAR_MIPMAP_NEAREST,[qr]:o.LINEAR_MIPMAP_LINEAR},Bt={[ME]:o.NEVER,[CE]:o.ALWAYS,[EE]:o.LESS,[_S]:o.LEQUAL,[TE]:o.EQUAL,[RE]:o.GEQUAL,[bE]:o.GREATER,[AE]:o.NOTEQUAL};function ne(U,T){if(T.type===Ea&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===ji||T.magFilter===rd||T.magFilter===ku||T.magFilter===qr||T.minFilter===ji||T.minFilter===rd||T.minFilter===ku||T.minFilter===qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(U,o.TEXTURE_WRAP_S,vt[T.wrapS]),o.texParameteri(U,o.TEXTURE_WRAP_T,vt[T.wrapT]),(U===o.TEXTURE_3D||U===o.TEXTURE_2D_ARRAY)&&o.texParameteri(U,o.TEXTURE_WRAP_R,vt[T.wrapR]),o.texParameteri(U,o.TEXTURE_MAG_FILTER,xt[T.magFilter]),o.texParameteri(U,o.TEXTURE_MIN_FILTER,xt[T.minFilter]),T.compareFunction&&(o.texParameteri(U,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(U,o.TEXTURE_COMPARE_FUNC,Bt[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Li||T.minFilter!==ku&&T.minFilter!==qr||T.type===Ea&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const nt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(U,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,u.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function pe(U,T){let nt=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",F));const dt=T.source;let yt=x.get(dt);yt===void 0&&(yt={},x.set(dt,yt));const ft=gt(T);if(ft!==U.__cacheKey){yt[ft]===void 0&&(yt[ft]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,nt=!0),yt[ft].usedTimes++;const kt=yt[U.__cacheKey];kt!==void 0&&(yt[U.__cacheKey].usedTimes--,kt.usedTimes===0&&w(T)),U.__cacheKey=ft,U.__webglTexture=yt[ft].texture}return nt}function P(U,T,nt){return Math.floor(Math.floor(U/nt)/T)}function Q(U,T,nt,dt){const ft=U.updateRanges;if(ft.length===0)a.texSubImage2D(o.TEXTURE_2D,0,0,0,T.width,T.height,nt,dt,T.data);else{ft.sort((At,Ot)=>At.start-Ot.start);let kt=0;for(let At=1;At<ft.length;At++){const Ot=ft[kt],ie=ft[At],Zt=Ot.start+Ot.count,zt=P(ie.start,T.width,4),ce=P(Ot.start,T.width,4);ie.start<=Zt+1&&zt===ce&&P(ie.start+ie.count-1,T.width,4)===zt?Ot.count=Math.max(Ot.count,ie.start+ie.count-Ot.start):(++kt,ft[kt]=ie)}ft.length=kt+1;const Ct=o.getParameter(o.UNPACK_ROW_LENGTH),jt=o.getParameter(o.UNPACK_SKIP_PIXELS),Kt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,T.width);for(let At=0,Ot=ft.length;At<Ot;At++){const ie=ft[At],Zt=Math.floor(ie.start/4),zt=Math.ceil(ie.count/4),ce=Zt%T.width,X=Math.floor(Zt/T.width),Rt=zt,Ut=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ce),o.pixelStorei(o.UNPACK_SKIP_ROWS,X),a.texSubImage2D(o.TEXTURE_2D,0,ce,X,Rt,Ut,nt,dt,T.data)}U.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ct),o.pixelStorei(o.UNPACK_SKIP_PIXELS,jt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Kt)}}function B(U,T,nt){let dt=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(dt=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(dt=o.TEXTURE_3D);const yt=pe(U,T),ft=T.source;a.bindTexture(dt,U.__webglTexture,o.TEXTURE0+nt);const kt=s.get(ft);if(ft.version!==kt.__version||yt===!0){a.activeTexture(o.TEXTURE0+nt);const Ct=De.getPrimaries(De.workingColorSpace),jt=T.colorSpace===rr?null:De.getPrimaries(T.colorSpace),Kt=T.colorSpace===rr||Ct===jt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Kt);let At=C(T.image,!1,u.maxTextureSize);At=qe(T,At);const Ot=f.convert(T.format,T.colorSpace),ie=f.convert(T.type);let Zt=O(T.internalFormat,Ot,ie,T.colorSpace,T.isVideoTexture);ne(dt,T);let zt;const ce=T.mipmaps,X=T.isVideoTexture!==!0,Rt=kt.__version===void 0||yt===!0,Ut=ft.dataReady,Vt=G(T,At);if(T.isDepthTexture)Zt=D(T.format===pl,T.type),Rt&&(X?a.texStorage2D(o.TEXTURE_2D,1,Zt,At.width,At.height):a.texImage2D(o.TEXTURE_2D,0,Zt,At.width,At.height,0,Ot,ie,null));else if(T.isDataTexture)if(ce.length>0){X&&Rt&&a.texStorage2D(o.TEXTURE_2D,Vt,Zt,ce[0].width,ce[0].height);for(let Et=0,_t=ce.length;Et<_t;Et++)zt=ce[Et],X?Ut&&a.texSubImage2D(o.TEXTURE_2D,Et,0,0,zt.width,zt.height,Ot,ie,zt.data):a.texImage2D(o.TEXTURE_2D,Et,Zt,zt.width,zt.height,0,Ot,ie,zt.data);T.generateMipmaps=!1}else X?(Rt&&a.texStorage2D(o.TEXTURE_2D,Vt,Zt,At.width,At.height),Ut&&Q(T,At,Ot,ie)):a.texImage2D(o.TEXTURE_2D,0,Zt,At.width,At.height,0,Ot,ie,At.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){X&&Rt&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Vt,Zt,ce[0].width,ce[0].height,At.depth);for(let Et=0,_t=ce.length;Et<_t;Et++)if(zt=ce[Et],T.format!==Ni)if(Ot!==null)if(X){if(Ut)if(T.layerUpdates.size>0){const Wt=Lv(zt.width,zt.height,T.format,T.type);for(const ue of T.layerUpdates){const Ve=zt.data.subarray(ue*Wt/zt.data.BYTES_PER_ELEMENT,(ue+1)*Wt/zt.data.BYTES_PER_ELEMENT);a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,ue,zt.width,zt.height,1,Ot,Ve)}T.clearLayerUpdates()}else a.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,zt.width,zt.height,At.depth,Ot,zt.data)}else a.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Et,Zt,zt.width,zt.height,At.depth,0,zt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Ut&&a.texSubImage3D(o.TEXTURE_2D_ARRAY,Et,0,0,0,zt.width,zt.height,At.depth,Ot,ie,zt.data):a.texImage3D(o.TEXTURE_2D_ARRAY,Et,Zt,zt.width,zt.height,At.depth,0,Ot,ie,zt.data)}else{X&&Rt&&a.texStorage2D(o.TEXTURE_2D,Vt,Zt,ce[0].width,ce[0].height);for(let Et=0,_t=ce.length;Et<_t;Et++)zt=ce[Et],T.format!==Ni?Ot!==null?X?Ut&&a.compressedTexSubImage2D(o.TEXTURE_2D,Et,0,0,zt.width,zt.height,Ot,zt.data):a.compressedTexImage2D(o.TEXTURE_2D,Et,Zt,zt.width,zt.height,0,zt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Ut&&a.texSubImage2D(o.TEXTURE_2D,Et,0,0,zt.width,zt.height,Ot,ie,zt.data):a.texImage2D(o.TEXTURE_2D,Et,Zt,zt.width,zt.height,0,Ot,ie,zt.data)}else if(T.isDataArrayTexture)if(X){if(Rt&&a.texStorage3D(o.TEXTURE_2D_ARRAY,Vt,Zt,At.width,At.height,At.depth),Ut)if(T.layerUpdates.size>0){const Et=Lv(At.width,At.height,T.format,T.type);for(const _t of T.layerUpdates){const Wt=At.data.subarray(_t*Et/At.data.BYTES_PER_ELEMENT,(_t+1)*Et/At.data.BYTES_PER_ELEMENT);a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,At.width,At.height,1,Ot,ie,Wt)}T.clearLayerUpdates()}else a.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,At.width,At.height,At.depth,Ot,ie,At.data)}else a.texImage3D(o.TEXTURE_2D_ARRAY,0,Zt,At.width,At.height,At.depth,0,Ot,ie,At.data);else if(T.isData3DTexture)X?(Rt&&a.texStorage3D(o.TEXTURE_3D,Vt,Zt,At.width,At.height,At.depth),Ut&&a.texSubImage3D(o.TEXTURE_3D,0,0,0,0,At.width,At.height,At.depth,Ot,ie,At.data)):a.texImage3D(o.TEXTURE_3D,0,Zt,At.width,At.height,At.depth,0,Ot,ie,At.data);else if(T.isFramebufferTexture){if(Rt)if(X)a.texStorage2D(o.TEXTURE_2D,Vt,Zt,At.width,At.height);else{let Et=At.width,_t=At.height;for(let Wt=0;Wt<Vt;Wt++)a.texImage2D(o.TEXTURE_2D,Wt,Zt,Et,_t,0,Ot,ie,null),Et>>=1,_t>>=1}}else if(ce.length>0){if(X&&Rt){const Et=We(ce[0]);a.texStorage2D(o.TEXTURE_2D,Vt,Zt,Et.width,Et.height)}for(let Et=0,_t=ce.length;Et<_t;Et++)zt=ce[Et],X?Ut&&a.texSubImage2D(o.TEXTURE_2D,Et,0,0,Ot,ie,zt):a.texImage2D(o.TEXTURE_2D,Et,Zt,Ot,ie,zt);T.generateMipmaps=!1}else if(X){if(Rt){const Et=We(At);a.texStorage2D(o.TEXTURE_2D,Vt,Zt,Et.width,Et.height)}Ut&&a.texSubImage2D(o.TEXTURE_2D,0,0,0,Ot,ie,At)}else a.texImage2D(o.TEXTURE_2D,0,Zt,Ot,ie,At);y(T)&&S(dt),kt.__version=ft.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function j(U,T,nt){if(T.image.length!==6)return;const dt=pe(U,T),yt=T.source;a.bindTexture(o.TEXTURE_CUBE_MAP,U.__webglTexture,o.TEXTURE0+nt);const ft=s.get(yt);if(yt.version!==ft.__version||dt===!0){a.activeTexture(o.TEXTURE0+nt);const kt=De.getPrimaries(De.workingColorSpace),Ct=T.colorSpace===rr?null:De.getPrimaries(T.colorSpace),jt=T.colorSpace===rr||kt===Ct?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);const Kt=T.isCompressedTexture||T.image[0].isCompressedTexture,At=T.image[0]&&T.image[0].isDataTexture,Ot=[];for(let _t=0;_t<6;_t++)!Kt&&!At?Ot[_t]=C(T.image[_t],!0,u.maxCubemapSize):Ot[_t]=At?T.image[_t].image:T.image[_t],Ot[_t]=qe(T,Ot[_t]);const ie=Ot[0],Zt=f.convert(T.format,T.colorSpace),zt=f.convert(T.type),ce=O(T.internalFormat,Zt,zt,T.colorSpace),X=T.isVideoTexture!==!0,Rt=ft.__version===void 0||dt===!0,Ut=yt.dataReady;let Vt=G(T,ie);ne(o.TEXTURE_CUBE_MAP,T);let Et;if(Kt){X&&Rt&&a.texStorage2D(o.TEXTURE_CUBE_MAP,Vt,ce,ie.width,ie.height);for(let _t=0;_t<6;_t++){Et=Ot[_t].mipmaps;for(let Wt=0;Wt<Et.length;Wt++){const ue=Et[Wt];T.format!==Ni?Zt!==null?X?Ut&&a.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,0,0,ue.width,ue.height,Zt,ue.data):a.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,ce,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,0,0,ue.width,ue.height,Zt,zt,ue.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt,ce,ue.width,ue.height,0,Zt,zt,ue.data)}}}else{if(Et=T.mipmaps,X&&Rt){Et.length>0&&Vt++;const _t=We(Ot[0]);a.texStorage2D(o.TEXTURE_CUBE_MAP,Vt,ce,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(At){X?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Ot[_t].width,Ot[_t].height,Zt,zt,Ot[_t].data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ce,Ot[_t].width,Ot[_t].height,0,Zt,zt,Ot[_t].data);for(let Wt=0;Wt<Et.length;Wt++){const Ve=Et[Wt].image[_t].image;X?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,0,0,Ve.width,Ve.height,Zt,zt,Ve.data):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,ce,Ve.width,Ve.height,0,Zt,zt,Ve.data)}}else{X?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Zt,zt,Ot[_t]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,ce,Zt,zt,Ot[_t]);for(let Wt=0;Wt<Et.length;Wt++){const ue=Et[Wt];X?Ut&&a.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,0,0,Zt,zt,ue.image[_t]):a.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Wt+1,ce,Zt,zt,ue.image[_t])}}}y(T)&&S(o.TEXTURE_CUBE_MAP),ft.__version=yt.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function St(U,T,nt,dt,yt,ft){const kt=f.convert(nt.format,nt.colorSpace),Ct=f.convert(nt.type),jt=O(nt.internalFormat,kt,Ct,nt.colorSpace),Kt=s.get(T),At=s.get(nt);if(At.__renderTarget=T,!Kt.__hasExternalTextures){const Ot=Math.max(1,T.width>>ft),ie=Math.max(1,T.height>>ft);yt===o.TEXTURE_3D||yt===o.TEXTURE_2D_ARRAY?a.texImage3D(yt,ft,jt,Ot,ie,T.depth,0,kt,Ct,null):a.texImage2D(yt,ft,jt,Ot,ie,0,kt,Ct,null)}a.bindFramebuffer(o.FRAMEBUFFER,U),Ht(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,dt,yt,At.__webglTexture,0,ae(T)):(yt===o.TEXTURE_2D||yt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&yt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,dt,yt,At.__webglTexture,ft),a.bindFramebuffer(o.FRAMEBUFFER,null)}function Dt(U,T,nt){if(o.bindRenderbuffer(o.RENDERBUFFER,U),T.depthBuffer){const dt=T.depthTexture,yt=dt&&dt.isDepthTexture?dt.type:null,ft=D(T.stencilBuffer,yt),kt=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ct=ae(T);Ht(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ct,ft,T.width,T.height):nt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ct,ft,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,ft,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,kt,o.RENDERBUFFER,U)}else{const dt=T.textures;for(let yt=0;yt<dt.length;yt++){const ft=dt[yt],kt=f.convert(ft.format,ft.colorSpace),Ct=f.convert(ft.type),jt=O(ft.internalFormat,kt,Ct,ft.colorSpace),Kt=ae(T);nt&&Ht(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Kt,jt,T.width,T.height):Ht(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Kt,jt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,jt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Tt(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(a.bindFramebuffer(o.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const dt=s.get(T.depthTexture);dt.__renderTarget=T,(!dt.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),ut(T.depthTexture,0);const yt=dt.__webglTexture,ft=ae(T);if(T.depthTexture.format===dl)Ht(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,yt,0);else if(T.depthTexture.format===pl)Ht(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0,ft):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,yt,0);else throw new Error("Unknown depthTexture format")}function Mt(U){const T=s.get(U),nt=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){const dt=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),dt){const yt=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,dt.removeEventListener("dispose",yt)};dt.addEventListener("dispose",yt),T.__depthDisposeCallback=yt}T.__boundDepthTexture=dt}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(nt)throw new Error("target.depthTexture not supported in Cube render targets");const dt=U.texture.mipmaps;dt&&dt.length>0?Tt(T.__webglFramebuffer[0],U):Tt(T.__webglFramebuffer,U)}else if(nt){T.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)if(a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[dt]),T.__webglDepthbuffer[dt]===void 0)T.__webglDepthbuffer[dt]=o.createRenderbuffer(),Dt(T.__webglDepthbuffer[dt],U,!1);else{const yt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer[dt];o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ft)}}else{const dt=U.texture.mipmaps;if(dt&&dt.length>0?a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[0]):a.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Dt(T.__webglDepthbuffer,U,!1);else{const yt=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ft=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ft),o.framebufferRenderbuffer(o.FRAMEBUFFER,yt,o.RENDERBUFFER,ft)}}a.bindFramebuffer(o.FRAMEBUFFER,null)}function Xt(U,T,nt){const dt=s.get(U);T!==void 0&&St(dt.__webglFramebuffer,U,U.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),nt!==void 0&&Mt(U)}function L(U){const T=U.texture,nt=s.get(U),dt=s.get(T);U.addEventListener("dispose",z);const yt=U.textures,ft=U.isWebGLCubeRenderTarget===!0,kt=yt.length>1;if(kt||(dt.__webglTexture===void 0&&(dt.__webglTexture=o.createTexture()),dt.__version=T.version,h.memory.textures++),ft){nt.__webglFramebuffer=[];for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer[Ct]=[];for(let jt=0;jt<T.mipmaps.length;jt++)nt.__webglFramebuffer[Ct][jt]=o.createFramebuffer()}else nt.__webglFramebuffer[Ct]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){nt.__webglFramebuffer=[];for(let Ct=0;Ct<T.mipmaps.length;Ct++)nt.__webglFramebuffer[Ct]=o.createFramebuffer()}else nt.__webglFramebuffer=o.createFramebuffer();if(kt)for(let Ct=0,jt=yt.length;Ct<jt;Ct++){const Kt=s.get(yt[Ct]);Kt.__webglTexture===void 0&&(Kt.__webglTexture=o.createTexture(),h.memory.textures++)}if(U.samples>0&&Ht(U)===!1){nt.__webglMultisampledFramebuffer=o.createFramebuffer(),nt.__webglColorRenderbuffer=[],a.bindFramebuffer(o.FRAMEBUFFER,nt.__webglMultisampledFramebuffer);for(let Ct=0;Ct<yt.length;Ct++){const jt=yt[Ct];nt.__webglColorRenderbuffer[Ct]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,nt.__webglColorRenderbuffer[Ct]);const Kt=f.convert(jt.format,jt.colorSpace),At=f.convert(jt.type),Ot=O(jt.internalFormat,Kt,At,jt.colorSpace,U.isXRRenderTarget===!0),ie=ae(U);o.renderbufferStorageMultisample(o.RENDERBUFFER,ie,Ot,U.width,U.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ct,o.RENDERBUFFER,nt.__webglColorRenderbuffer[Ct])}o.bindRenderbuffer(o.RENDERBUFFER,null),U.depthBuffer&&(nt.__webglDepthRenderbuffer=o.createRenderbuffer(),Dt(nt.__webglDepthRenderbuffer,U,!0)),a.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ft){a.bindTexture(o.TEXTURE_CUBE_MAP,dt.__webglTexture),ne(o.TEXTURE_CUBE_MAP,T);for(let Ct=0;Ct<6;Ct++)if(T.mipmaps&&T.mipmaps.length>0)for(let jt=0;jt<T.mipmaps.length;jt++)St(nt.__webglFramebuffer[Ct][jt],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,jt);else St(nt.__webglFramebuffer[Ct],U,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ct,0);y(T)&&S(o.TEXTURE_CUBE_MAP),a.unbindTexture()}else if(kt){for(let Ct=0,jt=yt.length;Ct<jt;Ct++){const Kt=yt[Ct],At=s.get(Kt);let Ot=o.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ot=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Ot,At.__webglTexture),ne(Ot,Kt),St(nt.__webglFramebuffer,U,Kt,o.COLOR_ATTACHMENT0+Ct,Ot,0),y(Kt)&&S(Ot)}a.unbindTexture()}else{let Ct=o.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Ct=U.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),a.bindTexture(Ct,dt.__webglTexture),ne(Ct,T),T.mipmaps&&T.mipmaps.length>0)for(let jt=0;jt<T.mipmaps.length;jt++)St(nt.__webglFramebuffer[jt],U,T,o.COLOR_ATTACHMENT0,Ct,jt);else St(nt.__webglFramebuffer,U,T,o.COLOR_ATTACHMENT0,Ct,0);y(T)&&S(Ct),a.unbindTexture()}U.depthBuffer&&Mt(U)}function Ge(U){const T=U.textures;for(let nt=0,dt=T.length;nt<dt;nt++){const yt=T[nt];if(y(yt)){const ft=I(U),kt=s.get(yt).__webglTexture;a.bindTexture(ft,kt),S(ft),a.unbindTexture()}}}const se=[],Qt=[];function Lt(U){if(U.samples>0){if(Ht(U)===!1){const T=U.textures,nt=U.width,dt=U.height;let yt=o.COLOR_BUFFER_BIT;const ft=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,kt=s.get(U),Ct=T.length>1;if(Ct)for(let Kt=0;Kt<T.length;Kt++)a.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,null),a.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,null,0);a.bindFramebuffer(o.READ_FRAMEBUFFER,kt.__webglMultisampledFramebuffer);const jt=U.texture.mipmaps;jt&&jt.length>0?a.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer[0]):a.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglFramebuffer);for(let Kt=0;Kt<T.length;Kt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(yt|=o.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(yt|=o.STENCIL_BUFFER_BIT)),Ct){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,kt.__webglColorRenderbuffer[Kt]);const At=s.get(T[Kt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,At,0)}o.blitFramebuffer(0,0,nt,dt,0,0,nt,dt,yt,o.NEAREST),_===!0&&(se.length=0,Qt.length=0,se.push(o.COLOR_ATTACHMENT0+Kt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(se.push(ft),Qt.push(ft),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Qt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,se))}if(a.bindFramebuffer(o.READ_FRAMEBUFFER,null),a.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ct)for(let Kt=0;Kt<T.length;Kt++){a.bindFramebuffer(o.FRAMEBUFFER,kt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.RENDERBUFFER,kt.__webglColorRenderbuffer[Kt]);const At=s.get(T[Kt]).__webglTexture;a.bindFramebuffer(o.FRAMEBUFFER,kt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Kt,o.TEXTURE_2D,At,0)}a.bindFramebuffer(o.DRAW_FRAMEBUFFER,kt.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&_){const T=U.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function ae(U){return Math.min(u.maxSamples,U.samples)}function Ht(U){const T=s.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function oe(U){const T=h.render.frame;v.get(U)!==T&&(v.set(U,T),U.update())}function qe(U,T){const nt=U.colorSpace,dt=U.format,yt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||nt!==ao&&nt!==rr&&(De.getTransfer(nt)===ke?(dt!==Ni||yt!==Qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",nt)),T}function We(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(g.width=U.naturalWidth||U.width,g.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(g.width=U.displayWidth,g.height=U.displayHeight):(g.width=U.width,g.height=U.height),g}this.allocateTextureUnit=ct,this.resetTextureUnits=at,this.setTexture2D=ut,this.setTexture2DArray=Y,this.setTexture3D=it,this.setTextureCube=K,this.rebindTextures=Xt,this.setupRenderTarget=L,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=St,this.useMultisampledRTT=Ht}function aC(o,e){function a(s,u=rr){let f;const h=De.getTransfer(u);if(s===Qi)return o.UNSIGNED_BYTE;if(s===Rp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Cp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===cS)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===fS)return o.UNSIGNED_INT_10F_11F_11F_REV;if(s===lS)return o.BYTE;if(s===uS)return o.SHORT;if(s===fl)return o.UNSIGNED_SHORT;if(s===Ap)return o.INT;if(s===Yr)return o.UNSIGNED_INT;if(s===Ea)return o.FLOAT;if(s===_l)return o.HALF_FLOAT;if(s===hS)return o.ALPHA;if(s===dS)return o.RGB;if(s===Ni)return o.RGBA;if(s===dl)return o.DEPTH_COMPONENT;if(s===pl)return o.DEPTH_STENCIL;if(s===pS)return o.RED;if(s===wp)return o.RED_INTEGER;if(s===mS)return o.RG;if(s===Dp)return o.RG_INTEGER;if(s===Up)return o.RGBA_INTEGER;if(s===dc||s===pc||s===mc||s===gc)if(h===ke)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===dc)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===pc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===mc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===gc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===dc)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===pc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===mc)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===gc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===jd||s===Zd||s===Kd||s===Qd)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===jd)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zd)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kd)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Qd)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Jd||s===$d||s===tp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===Jd||s===$d)return h===ke?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===tp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ep||s===np||s===ip||s===ap||s===rp||s===sp||s===op||s===lp||s===up||s===cp||s===fp||s===hp||s===dp||s===pp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===ep)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===np)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===ip)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ap)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===op)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===lp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===up)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===fp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===hp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===dp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===pp)return h===ke?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===mp||s===gp||s===_p)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===mp)return h===ke?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===gp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===_p)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===vp||s===Sp||s===xp||s===yp)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===vp)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Sp)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===xp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===yp)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===hl?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:a}}const rC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sC=`
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

}`;class oC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,a){if(this.texture===null){const s=new wS(e.texture);(e.depthNear!==a.depthNear||e.depthFar!==a.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const a=e.cameras[0].viewport,s=new $i({vertexShader:rC,fragmentShader:sC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:a.z},depthHeight:{value:a.w}}});this.mesh=new Wn(new xl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class lC extends so{constructor(e,a){super();const s=this;let u=null,f=1,h=null,d="local-floor",_=1,g=null,v=null,p=null,x=null,M=null,b=null;const C=typeof XRWebGLBinding<"u",y=new oC,S={},I=a.getContextAttributes();let O=null,D=null;const G=[],F=[],z=new Oe;let k=null;const w=new yi;w.viewport=new rn;const R=new yi;R.viewport=new rn;const V=[w,R],at=new CT;let ct=null,gt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let j=G[B];return j===void 0&&(j=new Ad,G[B]=j),j.getTargetRaySpace()},this.getControllerGrip=function(B){let j=G[B];return j===void 0&&(j=new Ad,G[B]=j),j.getGripSpace()},this.getHand=function(B){let j=G[B];return j===void 0&&(j=new Ad,G[B]=j),j.getHandSpace()};function ut(B){const j=F.indexOf(B.inputSource);if(j===-1)return;const St=G[j];St!==void 0&&(St.update(B.inputSource,B.frame,g||h),St.dispatchEvent({type:B.type,data:B.inputSource}))}function Y(){u.removeEventListener("select",ut),u.removeEventListener("selectstart",ut),u.removeEventListener("selectend",ut),u.removeEventListener("squeeze",ut),u.removeEventListener("squeezestart",ut),u.removeEventListener("squeezeend",ut),u.removeEventListener("end",Y),u.removeEventListener("inputsourceschange",it);for(let B=0;B<G.length;B++){const j=F[B];j!==null&&(F[B]=null,G[B].disconnect(j))}ct=null,gt=null,y.reset();for(const B in S)delete S[B];e.setRenderTarget(O),M=null,x=null,p=null,u=null,D=null,Q.stop(),s.isPresenting=!1,e.setPixelRatio(k),e.setSize(z.width,z.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){f=B,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){d=B,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return g||h},this.setReferenceSpace=function(B){g=B},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return p===null&&C&&(p=new XRWebGLBinding(u,a)),p},this.getFrame=function(){return b},this.getSession=function(){return u},this.setSession=async function(B){if(u=B,u!==null){if(O=e.getRenderTarget(),u.addEventListener("select",ut),u.addEventListener("selectstart",ut),u.addEventListener("selectend",ut),u.addEventListener("squeeze",ut),u.addEventListener("squeezestart",ut),u.addEventListener("squeezeend",ut),u.addEventListener("end",Y),u.addEventListener("inputsourceschange",it),I.xrCompatible!==!0&&await a.makeXRCompatible(),k=e.getPixelRatio(),e.getSize(z),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let St=null,Dt=null,Tt=null;I.depth&&(Tt=I.stencil?a.DEPTH24_STENCIL8:a.DEPTH_COMPONENT24,St=I.stencil?pl:dl,Dt=I.stencil?hl:Yr);const Mt={colorFormat:a.RGBA8,depthFormat:Tt,scaleFactor:f};p=this.getBinding(),x=p.createProjectionLayer(Mt),u.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new Wr(x.textureWidth,x.textureHeight,{format:Ni,type:Qi,depthTexture:new CS(x.textureWidth,x.textureHeight,Dt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:I.stencil,colorSpace:e.outputColorSpace,samples:I.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const St={antialias:I.antialias,alpha:!0,depth:I.depth,stencil:I.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(u,a,St),u.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),D=new Wr(M.framebufferWidth,M.framebufferHeight,{format:Ni,type:Qi,colorSpace:e.outputColorSpace,stencilBuffer:I.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(_),g=null,h=await u.requestReferenceSpace(d),Q.setContext(u),Q.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(u!==null)return u.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function it(B){for(let j=0;j<B.removed.length;j++){const St=B.removed[j],Dt=F.indexOf(St);Dt>=0&&(F[Dt]=null,G[Dt].disconnect(St))}for(let j=0;j<B.added.length;j++){const St=B.added[j];let Dt=F.indexOf(St);if(Dt===-1){for(let Mt=0;Mt<G.length;Mt++)if(Mt>=F.length){F.push(St),Dt=Mt;break}else if(F[Mt]===null){F[Mt]=St,Dt=Mt;break}if(Dt===-1)break}const Tt=G[Dt];Tt&&Tt.connect(St)}}const K=new st,vt=new st;function xt(B,j,St){K.setFromMatrixPosition(j.matrixWorld),vt.setFromMatrixPosition(St.matrixWorld);const Dt=K.distanceTo(vt),Tt=j.projectionMatrix.elements,Mt=St.projectionMatrix.elements,Xt=Tt[14]/(Tt[10]-1),L=Tt[14]/(Tt[10]+1),Ge=(Tt[9]+1)/Tt[5],se=(Tt[9]-1)/Tt[5],Qt=(Tt[8]-1)/Tt[0],Lt=(Mt[8]+1)/Mt[0],ae=Xt*Qt,Ht=Xt*Lt,oe=Dt/(-Qt+Lt),qe=oe*-Qt;if(j.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(qe),B.translateZ(oe),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),Tt[10]===-1)B.projectionMatrix.copy(j.projectionMatrix),B.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const We=Xt+oe,U=L+oe,T=ae-qe,nt=Ht+(Dt-qe),dt=Ge*L/U*We,yt=se*L/U*We;B.projectionMatrix.makePerspective(T,nt,dt,yt,We,U),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function Bt(B,j){j===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(j.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(u===null)return;let j=B.near,St=B.far;y.texture!==null&&(y.depthNear>0&&(j=y.depthNear),y.depthFar>0&&(St=y.depthFar)),at.near=R.near=w.near=j,at.far=R.far=w.far=St,(ct!==at.near||gt!==at.far)&&(u.updateRenderState({depthNear:at.near,depthFar:at.far}),ct=at.near,gt=at.far),at.layers.mask=B.layers.mask|6,w.layers.mask=at.layers.mask&3,R.layers.mask=at.layers.mask&5;const Dt=B.parent,Tt=at.cameras;Bt(at,Dt);for(let Mt=0;Mt<Tt.length;Mt++)Bt(Tt[Mt],Dt);Tt.length===2?xt(at,w,R):at.projectionMatrix.copy(w.projectionMatrix),ne(B,at,Dt)};function ne(B,j,St){St===null?B.matrix.copy(j.matrixWorld):(B.matrix.copy(St.matrixWorld),B.matrix.invert(),B.matrix.multiply(j.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(j.projectionMatrix),B.projectionMatrixInverse.copy(j.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=ml*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return at},this.getFoveation=function(){if(!(x===null&&M===null))return _},this.setFoveation=function(B){_=B,x!==null&&(x.fixedFoveation=B),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=B)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(at)},this.getCameraTexture=function(B){return S[B]};let pe=null;function P(B,j){if(v=j.getViewerPose(g||h),b=j,v!==null){const St=v.views;M!==null&&(e.setRenderTargetFramebuffer(D,M.framebuffer),e.setRenderTarget(D));let Dt=!1;St.length!==at.cameras.length&&(at.cameras.length=0,Dt=!0);for(let L=0;L<St.length;L++){const Ge=St[L];let se=null;if(M!==null)se=M.getViewport(Ge);else{const Lt=p.getViewSubImage(x,Ge);se=Lt.viewport,L===0&&(e.setRenderTargetTextures(D,Lt.colorTexture,Lt.depthStencilTexture),e.setRenderTarget(D))}let Qt=V[L];Qt===void 0&&(Qt=new yi,Qt.layers.enable(L),Qt.viewport=new rn,V[L]=Qt),Qt.matrix.fromArray(Ge.transform.matrix),Qt.matrix.decompose(Qt.position,Qt.quaternion,Qt.scale),Qt.projectionMatrix.fromArray(Ge.projectionMatrix),Qt.projectionMatrixInverse.copy(Qt.projectionMatrix).invert(),Qt.viewport.set(se.x,se.y,se.width,se.height),L===0&&(at.matrix.copy(Qt.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale)),Dt===!0&&at.cameras.push(Qt)}const Tt=u.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&u.depthUsage=="gpu-optimized"&&C){p=s.getBinding();const L=p.getDepthInformation(St[0]);L&&L.isValid&&L.texture&&y.init(L,u.renderState)}if(Tt&&Tt.includes("camera-access")&&C){e.state.unbindTexture(),p=s.getBinding();for(let L=0;L<St.length;L++){const Ge=St[L].camera;if(Ge){let se=S[Ge];se||(se=new wS,S[Ge]=se);const Qt=p.getCameraImage(Ge);se.sourceTexture=Qt}}}}for(let St=0;St<G.length;St++){const Dt=F[St],Tt=G[St];Dt!==null&&Tt!==void 0&&Tt.update(Dt,j,g||h)}pe&&pe(B,j),j.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:j}),b=null}const Q=new NS;Q.setAnimationLoop(P),this.setAnimationLoop=function(B){pe=B},this.dispose=function(){}}}const Fr=new Ji,uC=new sn;function cC(o,e){function a(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,bS(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function u(y,S,I,O,D){S.isMeshBasicMaterial||S.isMeshLambertMaterial?f(y,S):S.isMeshToonMaterial?(f(y,S),p(y,S)):S.isMeshPhongMaterial?(f(y,S),v(y,S)):S.isMeshStandardMaterial?(f(y,S),x(y,S),S.isMeshPhysicalMaterial&&M(y,S,D)):S.isMeshMatcapMaterial?(f(y,S),b(y,S)):S.isMeshDepthMaterial?f(y,S):S.isMeshDistanceMaterial?(f(y,S),C(y,S)):S.isMeshNormalMaterial?f(y,S):S.isLineBasicMaterial?(h(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?_(y,S,I,O):S.isSpriteMaterial?g(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function f(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,a(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,a(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,a(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===jn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,a(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===jn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,a(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,a(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,a(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const I=e.get(S),O=I.envMap,D=I.envMapRotation;O&&(y.envMap.value=O,Fr.copy(D),Fr.x*=-1,Fr.y*=-1,Fr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Fr.y*=-1,Fr.z*=-1),y.envMapRotation.value.setFromMatrix4(uC.makeRotationFromEuler(Fr)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,a(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,a(S.aoMap,y.aoMapTransform))}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,a(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function _(y,S,I,O){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*I,y.scale.value=O*.5,S.map&&(y.map.value=S.map,a(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,a(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function g(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,a(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,a(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function p(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function x(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,a(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,a(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,I){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,a(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,a(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,a(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,a(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,a(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===jn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,a(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,a(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=I.texture,y.transmissionSamplerSize.value.set(I.width,I.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,a(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,a(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,a(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,a(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,a(S.specularIntensityMap,y.specularIntensityMapTransform))}function b(y,S){S.matcap&&(y.matcap.value=S.matcap)}function C(y,S){const I=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(I.matrixWorld),y.nearDistance.value=I.shadow.camera.near,y.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:u}}function fC(o,e,a,s){let u={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function _(I,O){const D=O.program;s.uniformBlockBinding(I,D)}function g(I,O){let D=u[I.id];D===void 0&&(b(I),D=v(I),u[I.id]=D,I.addEventListener("dispose",y));const G=O.program;s.updateUBOMapping(I,G);const F=e.render.frame;f[I.id]!==F&&(x(I),f[I.id]=F)}function v(I){const O=p();I.__bindingPointIndex=O;const D=o.createBuffer(),G=I.__size,F=I.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,G,F),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,D),D}function p(){for(let I=0;I<d;I++)if(h.indexOf(I)===-1)return h.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(I){const O=u[I.id],D=I.uniforms,G=I.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let F=0,z=D.length;F<z;F++){const k=Array.isArray(D[F])?D[F]:[D[F]];for(let w=0,R=k.length;w<R;w++){const V=k[w];if(M(V,F,w,G)===!0){const at=V.__offset,ct=Array.isArray(V.value)?V.value:[V.value];let gt=0;for(let ut=0;ut<ct.length;ut++){const Y=ct[ut],it=C(Y);typeof Y=="number"||typeof Y=="boolean"?(V.__data[0]=Y,o.bufferSubData(o.UNIFORM_BUFFER,at+gt,V.__data)):Y.isMatrix3?(V.__data[0]=Y.elements[0],V.__data[1]=Y.elements[1],V.__data[2]=Y.elements[2],V.__data[3]=0,V.__data[4]=Y.elements[3],V.__data[5]=Y.elements[4],V.__data[6]=Y.elements[5],V.__data[7]=0,V.__data[8]=Y.elements[6],V.__data[9]=Y.elements[7],V.__data[10]=Y.elements[8],V.__data[11]=0):(Y.toArray(V.__data,gt),gt+=it.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,at,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(I,O,D,G){const F=I.value,z=O+"_"+D;if(G[z]===void 0)return typeof F=="number"||typeof F=="boolean"?G[z]=F:G[z]=F.clone(),!0;{const k=G[z];if(typeof F=="number"||typeof F=="boolean"){if(k!==F)return G[z]=F,!0}else if(k.equals(F)===!1)return k.copy(F),!0}return!1}function b(I){const O=I.uniforms;let D=0;const G=16;for(let z=0,k=O.length;z<k;z++){const w=Array.isArray(O[z])?O[z]:[O[z]];for(let R=0,V=w.length;R<V;R++){const at=w[R],ct=Array.isArray(at.value)?at.value:[at.value];for(let gt=0,ut=ct.length;gt<ut;gt++){const Y=ct[gt],it=C(Y),K=D%G,vt=K%it.boundary,xt=K+vt;D+=vt,xt!==0&&G-xt<it.storage&&(D+=G-xt),at.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),at.__offset=D,D+=it.storage}}}const F=D%G;return F>0&&(D+=G-F),I.__size=D,I.__cache={},this}function C(I){const O={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(O.boundary=4,O.storage=4):I.isVector2?(O.boundary=8,O.storage=8):I.isVector3||I.isColor?(O.boundary=16,O.storage=12):I.isVector4?(O.boundary=16,O.storage=16):I.isMatrix3?(O.boundary=48,O.storage=48):I.isMatrix4?(O.boundary=64,O.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),O}function y(I){const O=I.target;O.removeEventListener("dispose",y);const D=h.indexOf(O.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(u[O.id]),delete u[O.id],delete f[O.id]}function S(){for(const I in u)o.deleteBuffer(u[I]);h=[],u={},f={}}return{bind:_,update:g,dispose:S}}class hC{constructor(e={}){const{canvas:a=qE(),context:s=null,depth:u=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:_=!0,preserveDrawingBuffer:g=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const b=new Uint32Array(4),C=new Int32Array(4);let y=null,S=null;const I=[],O=[];this.domElement=a,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=or,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let G=!1;this._outputColorSpace=xi;let F=0,z=0,k=null,w=-1,R=null;const V=new rn,at=new rn;let ct=null;const gt=new Se(0);let ut=0,Y=a.width,it=a.height,K=1,vt=null,xt=null;const Bt=new rn(0,0,Y,it),ne=new rn(0,0,Y,it);let pe=!1;const P=new zp;let Q=!1,B=!1;const j=new sn,St=new st,Dt=new rn,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Mt=!1;function Xt(){return k===null?K:1}let L=s;function Ge(A,J){return a.getContext(A,J)}try{const A={alpha:!0,depth:u,stencil:f,antialias:d,premultipliedAlpha:_,preserveDrawingBuffer:g,powerPreference:v,failIfMajorPerformanceCaveat:p};if("setAttribute"in a&&a.setAttribute("data-engine",`three.js r${bp}`),a.addEventListener("webglcontextlost",Ut,!1),a.addEventListener("webglcontextrestored",Vt,!1),a.addEventListener("webglcontextcreationerror",Et,!1),L===null){const J="webgl2";if(L=Ge(J,A),L===null)throw Ge(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let se,Qt,Lt,ae,Ht,oe,qe,We,U,T,nt,dt,yt,ft,kt,Ct,jt,Kt,At,Ot,ie,Zt,zt,ce;function X(){se=new MA(L),se.init(),Zt=new aC(L,se),Qt=new mA(L,se,e,Zt),Lt=new nC(L,se),Qt.reversedDepthBuffer&&x&&Lt.buffers.depth.setReversed(!0),ae=new bA(L),Ht=new XR,oe=new iC(L,se,Lt,Ht,Qt,Zt,ae),qe=new _A(D),We=new yA(D),U=new UT(L),zt=new dA(L,U),T=new EA(L,U,ae,zt),nt=new RA(L,T,U,ae),At=new AA(L,Qt,oe),Ct=new gA(Ht),dt=new VR(D,qe,We,se,Qt,zt,Ct),yt=new cC(D,Ht),ft=new qR,kt=new QR(se),Kt=new hA(D,qe,We,Lt,nt,M,_),jt=new tC(D,nt,Qt),ce=new fC(L,ae,Qt,Lt),Ot=new pA(L,se,ae),ie=new TA(L,se,ae),ae.programs=dt.programs,D.capabilities=Qt,D.extensions=se,D.properties=Ht,D.renderLists=ft,D.shadowMap=jt,D.state=Lt,D.info=ae}X();const Rt=new lC(D,L);this.xr=Rt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const A=se.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=se.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(A){A!==void 0&&(K=A,this.setSize(Y,it,!1))},this.getSize=function(A){return A.set(Y,it)},this.setSize=function(A,J,ot=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,it=J,a.width=Math.floor(A*K),a.height=Math.floor(J*K),ot===!0&&(a.style.width=A+"px",a.style.height=J+"px"),this.setViewport(0,0,A,J)},this.getDrawingBufferSize=function(A){return A.set(Y*K,it*K).floor()},this.setDrawingBufferSize=function(A,J,ot){Y=A,it=J,K=ot,a.width=Math.floor(A*ot),a.height=Math.floor(J*ot),this.setViewport(0,0,A,J)},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy(Bt)},this.setViewport=function(A,J,ot,lt){A.isVector4?Bt.set(A.x,A.y,A.z,A.w):Bt.set(A,J,ot,lt),Lt.viewport(V.copy(Bt).multiplyScalar(K).round())},this.getScissor=function(A){return A.copy(ne)},this.setScissor=function(A,J,ot,lt){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,J,ot,lt),Lt.scissor(at.copy(ne).multiplyScalar(K).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(A){Lt.setScissorTest(pe=A)},this.setOpaqueSort=function(A){vt=A},this.setTransparentSort=function(A){xt=A},this.getClearColor=function(A){return A.copy(Kt.getClearColor())},this.setClearColor=function(){Kt.setClearColor(...arguments)},this.getClearAlpha=function(){return Kt.getClearAlpha()},this.setClearAlpha=function(){Kt.setClearAlpha(...arguments)},this.clear=function(A=!0,J=!0,ot=!0){let lt=0;if(A){let $=!1;if(k!==null){const bt=k.texture.format;$=bt===Up||bt===Dp||bt===wp}if($){const bt=k.texture.type,Pt=bt===Qi||bt===Yr||bt===fl||bt===hl||bt===Rp||bt===Cp,Ft=Kt.getClearColor(),wt=Kt.getClearAlpha(),qt=Ft.r,ee=Ft.g,$t=Ft.b;Pt?(b[0]=qt,b[1]=ee,b[2]=$t,b[3]=wt,L.clearBufferuiv(L.COLOR,0,b)):(C[0]=qt,C[1]=ee,C[2]=$t,C[3]=wt,L.clearBufferiv(L.COLOR,0,C))}else lt|=L.COLOR_BUFFER_BIT}J&&(lt|=L.DEPTH_BUFFER_BIT),ot&&(lt|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(lt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){a.removeEventListener("webglcontextlost",Ut,!1),a.removeEventListener("webglcontextrestored",Vt,!1),a.removeEventListener("webglcontextcreationerror",Et,!1),Kt.dispose(),ft.dispose(),kt.dispose(),Ht.dispose(),qe.dispose(),We.dispose(),nt.dispose(),zt.dispose(),ce.dispose(),dt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",pn),Rt.removeEventListener("sessionend",Dn),ea.stop()};function Ut(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),G=!0}function Vt(){console.log("THREE.WebGLRenderer: Context Restored."),G=!1;const A=ae.autoReset,J=jt.enabled,ot=jt.autoUpdate,lt=jt.needsUpdate,$=jt.type;X(),ae.autoReset=A,jt.enabled=J,jt.autoUpdate=ot,jt.needsUpdate=lt,jt.type=$}function Et(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function _t(A){const J=A.target;J.removeEventListener("dispose",_t),Wt(J)}function Wt(A){ue(A),Ht.remove(A)}function ue(A){const J=Ht.get(A).programs;J!==void 0&&(J.forEach(function(ot){dt.releaseProgram(ot)}),A.isShaderMaterial&&dt.releaseShaderCache(A))}this.renderBufferDirect=function(A,J,ot,lt,$,bt){J===null&&(J=Tt);const Pt=$.isMesh&&$.matrixWorld.determinant()<0,Ft=Ml(A,J,ot,lt,$);Lt.setMaterial(lt,Pt);let wt=ot.index,qt=1;if(lt.wireframe===!0){if(wt=T.getWireframeAttribute(ot),wt===void 0)return;qt=2}const ee=ot.drawRange,$t=ot.attributes.position;let ve=ee.start*qt,ze=(ee.start+ee.count)*qt;bt!==null&&(ve=Math.max(ve,bt.start*qt),ze=Math.min(ze,(bt.start+bt.count)*qt)),wt!==null?(ve=Math.max(ve,0),ze=Math.min(ze,wt.count)):$t!=null&&(ve=Math.max(ve,0),ze=Math.min(ze,$t.count));const Qe=ze-ve;if(Qe<0||Qe===1/0)return;zt.setup($,lt,Ft,ot,wt);let Ue,Re=Ot;if(wt!==null&&(Ue=U.get(wt),Re=ie,Re.setIndex(Ue)),$.isMesh)lt.wireframe===!0?(Lt.setLineWidth(lt.wireframeLinewidth*Xt()),Re.setMode(L.LINES)):Re.setMode(L.TRIANGLES);else if($.isLine){let te=lt.linewidth;te===void 0&&(te=1),Lt.setLineWidth(te*Xt()),$.isLineSegments?Re.setMode(L.LINES):$.isLineLoop?Re.setMode(L.LINE_LOOP):Re.setMode(L.LINE_STRIP)}else $.isPoints?Re.setMode(L.POINTS):$.isSprite&&Re.setMode(L.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)gl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Re.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))Re.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const te=$._multiDrawStarts,Ne=$._multiDrawCounts,ge=$._multiDrawCount,mn=wt?U.get(wt).bytesPerElement:1,Qn=Ht.get(lt).currentProgram.getUniforms();for(let Ce=0;Ce<ge;Ce++)Qn.setValue(L,"_gl_DrawID",Ce),Re.render(te[Ce]/mn,Ne[Ce])}else if($.isInstancedMesh)Re.renderInstances(ve,Qe,$.count);else if(ot.isInstancedBufferGeometry){const te=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Ne=Math.min(ot.instanceCount,te);Re.renderInstances(ve,Qe,Ne)}else Re.render(ve,Qe)};function Ve(A,J,ot){A.transparent===!0&&A.side===Wi&&A.forceSinglePass===!1?(A.side=jn,A.needsUpdate=!0,ui(A,J,ot),A.side=lr,A.needsUpdate=!0,ui(A,J,ot),A.side=Wi):ui(A,J,ot)}this.compile=function(A,J,ot=null){ot===null&&(ot=A),S=kt.get(ot),S.init(J),O.push(S),ot.traverseVisible(function($){$.isLight&&$.layers.test(J.layers)&&(S.pushLight($),$.castShadow&&S.pushShadow($))}),A!==ot&&A.traverseVisible(function($){$.isLight&&$.layers.test(J.layers)&&(S.pushLight($),$.castShadow&&S.pushShadow($))}),S.setupLights();const lt=new Set;return A.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const bt=$.material;if(bt)if(Array.isArray(bt))for(let Pt=0;Pt<bt.length;Pt++){const Ft=bt[Pt];Ve(Ft,ot,$),lt.add(Ft)}else Ve(bt,ot,$),lt.add(bt)}),S=O.pop(),lt},this.compileAsync=function(A,J,ot=null){const lt=this.compile(A,J,ot);return new Promise($=>{function bt(){if(lt.forEach(function(Pt){Ht.get(Pt).currentProgram.isReady()&&lt.delete(Pt)}),lt.size===0){$(A);return}setTimeout(bt,10)}se.get("KHR_parallel_shader_compile")!==null?bt():setTimeout(bt,10)})};let Me=null;function $e(A){Me&&Me(A)}function pn(){ea.stop()}function Dn(){ea.start()}const ea=new NS;ea.setAnimationLoop($e),typeof self<"u"&&ea.setContext(self),this.setAnimationLoop=function(A){Me=A,Rt.setAnimationLoop(A),A===null?ea.stop():ea.start()},Rt.addEventListener("sessionstart",pn),Rt.addEventListener("sessionend",Dn),this.render=function(A,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(J),J=Rt.getCamera()),A.isScene===!0&&A.onBeforeRender(D,A,J,k),S=kt.get(A,O.length),S.init(J),O.push(S),j.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),P.setFromProjectionMatrix(j,Zi,J.reversedDepth),B=this.localClippingEnabled,Q=Ct.init(this.clippingPlanes,B),y=ft.get(A,I.length),y.init(),I.push(y),Rt.enabled===!0&&Rt.isPresenting===!0){const bt=D.xr.getDepthSensingMesh();bt!==null&&co(bt,J,-1/0,D.sortObjects)}co(A,J,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(vt,xt),Mt=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,Mt&&Kt.addToRenderList(y,A),this.info.render.frame++,Q===!0&&Ct.beginShadows();const ot=S.state.shadowsArray;jt.render(ot,A,J),Q===!0&&Ct.endShadows(),this.info.autoReset===!0&&this.info.reset();const lt=y.opaque,$=y.transmissive;if(S.setupLights(),J.isArrayCamera){const bt=J.cameras;if($.length>0)for(let Pt=0,Ft=bt.length;Pt<Ft;Pt++){const wt=bt[Pt];ur(lt,$,A,wt)}Mt&&Kt.render(A);for(let Pt=0,Ft=bt.length;Pt<Ft;Pt++){const wt=bt[Pt];yl(y,A,wt,wt.viewport)}}else $.length>0&&ur(lt,$,A,J),Mt&&Kt.render(A),yl(y,A,J);k!==null&&z===0&&(oe.updateMultisampleRenderTarget(k),oe.updateRenderTargetMipmap(k)),A.isScene===!0&&A.onAfterRender(D,A,J),zt.resetDefaultState(),w=-1,R=null,O.pop(),O.length>0?(S=O[O.length-1],Q===!0&&Ct.setGlobalState(D.clippingPlanes,S.state.camera)):S=null,I.pop(),I.length>0?y=I[I.length-1]:y=null};function co(A,J,ot,lt){if(A.visible===!1)return;if(A.layers.test(J.layers)){if(A.isGroup)ot=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(J);else if(A.isLight)S.pushLight(A),A.castShadow&&S.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||P.intersectsSprite(A)){lt&&Dt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(j);const Pt=nt.update(A),Ft=A.material;Ft.visible&&y.push(A,Pt,Ft,ot,Dt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||P.intersectsObject(A))){const Pt=nt.update(A),Ft=A.material;if(lt&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Dt.copy(A.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),Dt.copy(Pt.boundingSphere.center)),Dt.applyMatrix4(A.matrixWorld).applyMatrix4(j)),Array.isArray(Ft)){const wt=Pt.groups;for(let qt=0,ee=wt.length;qt<ee;qt++){const $t=wt[qt],ve=Ft[$t.materialIndex];ve&&ve.visible&&y.push(A,Pt,ve,ot,Dt.z,$t)}}else Ft.visible&&y.push(A,Pt,Ft,ot,Dt.z,null)}}const bt=A.children;for(let Pt=0,Ft=bt.length;Pt<Ft;Pt++)co(bt[Pt],J,ot,lt)}function yl(A,J,ot,lt){const $=A.opaque,bt=A.transmissive,Pt=A.transparent;S.setupLightsView(ot),Q===!0&&Ct.setGlobalState(D.clippingPlanes,ot),lt&&Lt.viewport(V.copy(lt)),$.length>0&&na($,J,ot),bt.length>0&&na(bt,J,ot),Pt.length>0&&na(Pt,J,ot),Lt.buffers.depth.setTest(!0),Lt.buffers.depth.setMask(!0),Lt.buffers.color.setMask(!0),Lt.setPolygonOffset(!1)}function ur(A,J,ot,lt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[lt.id]===void 0&&(S.state.transmissionRenderTarget[lt.id]=new Wr(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?_l:Qi,minFilter:qr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const bt=S.state.transmissionRenderTarget[lt.id],Pt=lt.viewport||V;bt.setSize(Pt.z*D.transmissionResolutionScale,Pt.w*D.transmissionResolutionScale);const Ft=D.getRenderTarget(),wt=D.getActiveCubeFace(),qt=D.getActiveMipmapLevel();D.setRenderTarget(bt),D.getClearColor(gt),ut=D.getClearAlpha(),ut<1&&D.setClearColor(16777215,.5),D.clear(),Mt&&Kt.render(ot);const ee=D.toneMapping;D.toneMapping=or;const $t=lt.viewport;if(lt.viewport!==void 0&&(lt.viewport=void 0),S.setupLightsView(lt),Q===!0&&Ct.setGlobalState(D.clippingPlanes,lt),na(A,ot,lt),oe.updateMultisampleRenderTarget(bt),oe.updateRenderTargetMipmap(bt),se.has("WEBGL_multisampled_render_to_texture")===!1){let ve=!1;for(let ze=0,Qe=J.length;ze<Qe;ze++){const Ue=J[ze],Re=Ue.object,te=Ue.geometry,Ne=Ue.material,ge=Ue.group;if(Ne.side===Wi&&Re.layers.test(lt.layers)){const mn=Ne.side;Ne.side=jn,Ne.needsUpdate=!0,cr(Re,ot,lt,te,Ne,ge),Ne.side=mn,Ne.needsUpdate=!0,ve=!0}}ve===!0&&(oe.updateMultisampleRenderTarget(bt),oe.updateRenderTargetMipmap(bt))}D.setRenderTarget(Ft,wt,qt),D.setClearColor(gt,ut),$t!==void 0&&(lt.viewport=$t),D.toneMapping=ee}function na(A,J,ot){const lt=J.isScene===!0?J.overrideMaterial:null;for(let $=0,bt=A.length;$<bt;$++){const Pt=A[$],Ft=Pt.object,wt=Pt.geometry,qt=Pt.group;let ee=Pt.material;ee.allowOverride===!0&&lt!==null&&(ee=lt),Ft.layers.test(ot.layers)&&cr(Ft,J,ot,wt,ee,qt)}}function cr(A,J,ot,lt,$,bt){A.onBeforeRender(D,J,ot,lt,$,bt),A.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),$.onBeforeRender(D,J,ot,lt,A,bt),$.transparent===!0&&$.side===Wi&&$.forceSinglePass===!1?($.side=jn,$.needsUpdate=!0,D.renderBufferDirect(ot,J,lt,$,A,bt),$.side=lr,$.needsUpdate=!0,D.renderBufferDirect(ot,J,lt,$,A,bt),$.side=Wi):D.renderBufferDirect(ot,J,lt,$,A,bt),A.onAfterRender(D,J,ot,lt,$,bt)}function ui(A,J,ot){J.isScene!==!0&&(J=Tt);const lt=Ht.get(A),$=S.state.lights,bt=S.state.shadowsArray,Pt=$.state.version,Ft=dt.getParameters(A,$.state,bt,J,ot),wt=dt.getProgramCacheKey(Ft);let qt=lt.programs;lt.environment=A.isMeshStandardMaterial?J.environment:null,lt.fog=J.fog,lt.envMap=(A.isMeshStandardMaterial?We:qe).get(A.envMap||lt.environment),lt.envMapRotation=lt.environment!==null&&A.envMap===null?J.environmentRotation:A.envMapRotation,qt===void 0&&(A.addEventListener("dispose",_t),qt=new Map,lt.programs=qt);let ee=qt.get(wt);if(ee!==void 0){if(lt.currentProgram===ee&&lt.lightsStateVersion===Pt)return ba(A,Ft),ee}else Ft.uniforms=dt.getUniforms(A),A.onBeforeCompile(Ft,D),ee=dt.acquireProgram(Ft,wt),qt.set(wt,ee),lt.uniforms=Ft.uniforms;const $t=lt.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&($t.clippingPlanes=Ct.uniform),ba(A,Ft),lt.needsLights=El(A),lt.lightsStateVersion=Pt,lt.needsLights&&($t.ambientLightColor.value=$.state.ambient,$t.lightProbe.value=$.state.probe,$t.directionalLights.value=$.state.directional,$t.directionalLightShadows.value=$.state.directionalShadow,$t.spotLights.value=$.state.spot,$t.spotLightShadows.value=$.state.spotShadow,$t.rectAreaLights.value=$.state.rectArea,$t.ltc_1.value=$.state.rectAreaLTC1,$t.ltc_2.value=$.state.rectAreaLTC2,$t.pointLights.value=$.state.point,$t.pointLightShadows.value=$.state.pointShadow,$t.hemisphereLights.value=$.state.hemi,$t.directionalShadowMap.value=$.state.directionalShadowMap,$t.directionalShadowMatrix.value=$.state.directionalShadowMatrix,$t.spotShadowMap.value=$.state.spotShadowMap,$t.spotLightMatrix.value=$.state.spotLightMatrix,$t.spotLightMap.value=$.state.spotLightMap,$t.pointShadowMap.value=$.state.pointShadowMap,$t.pointShadowMatrix.value=$.state.pointShadowMatrix),lt.currentProgram=ee,lt.uniformsList=null,ee}function fr(A){if(A.uniformsList===null){const J=A.currentProgram.getUniforms();A.uniformsList=_c.seqWithValue(J.seq,A.uniforms)}return A.uniformsList}function ba(A,J){const ot=Ht.get(A);ot.outputColorSpace=J.outputColorSpace,ot.batching=J.batching,ot.batchingColor=J.batchingColor,ot.instancing=J.instancing,ot.instancingColor=J.instancingColor,ot.instancingMorph=J.instancingMorph,ot.skinning=J.skinning,ot.morphTargets=J.morphTargets,ot.morphNormals=J.morphNormals,ot.morphColors=J.morphColors,ot.morphTargetsCount=J.morphTargetsCount,ot.numClippingPlanes=J.numClippingPlanes,ot.numIntersection=J.numClipIntersection,ot.vertexAlphas=J.vertexAlphas,ot.vertexTangents=J.vertexTangents,ot.toneMapping=J.toneMapping}function Ml(A,J,ot,lt,$){J.isScene!==!0&&(J=Tt),oe.resetTextureUnits();const bt=J.fog,Pt=lt.isMeshStandardMaterial?J.environment:null,Ft=k===null?D.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:ao,wt=(lt.isMeshStandardMaterial?We:qe).get(lt.envMap||Pt),qt=lt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,ee=!!ot.attributes.tangent&&(!!lt.normalMap||lt.anisotropy>0),$t=!!ot.morphAttributes.position,ve=!!ot.morphAttributes.normal,ze=!!ot.morphAttributes.color;let Qe=or;lt.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Qe=D.toneMapping);const Ue=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,Re=Ue!==void 0?Ue.length:0,te=Ht.get(lt),Ne=S.state.lights;if(Q===!0&&(B===!0||A!==R)){const en=A===R&&lt.id===w;Ct.setState(lt,A,en)}let ge=!1;lt.version===te.__version?(te.needsLights&&te.lightsStateVersion!==Ne.state.version||te.outputColorSpace!==Ft||$.isBatchedMesh&&te.batching===!1||!$.isBatchedMesh&&te.batching===!0||$.isBatchedMesh&&te.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&te.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&te.instancing===!1||!$.isInstancedMesh&&te.instancing===!0||$.isSkinnedMesh&&te.skinning===!1||!$.isSkinnedMesh&&te.skinning===!0||$.isInstancedMesh&&te.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&te.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&te.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&te.instancingMorph===!1&&$.morphTexture!==null||te.envMap!==wt||lt.fog===!0&&te.fog!==bt||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Ct.numPlanes||te.numIntersection!==Ct.numIntersection)||te.vertexAlphas!==qt||te.vertexTangents!==ee||te.morphTargets!==$t||te.morphNormals!==ve||te.morphColors!==ze||te.toneMapping!==Qe||te.morphTargetsCount!==Re)&&(ge=!0):(ge=!0,te.__version=lt.version);let mn=te.currentProgram;ge===!0&&(mn=ui(lt,J,$));let Qn=!1,Ce=!1,Aa=!1;const je=mn.getUniforms(),zn=te.uniforms;if(Lt.useProgram(mn.program)&&(Qn=!0,Ce=!0,Aa=!0),lt.id!==w&&(w=lt.id,Ce=!0),Qn||R!==A){Lt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),je.setValue(L,"projectionMatrix",A.projectionMatrix),je.setValue(L,"viewMatrix",A.matrixWorldInverse);const Un=je.map.cameraPosition;Un!==void 0&&Un.setValue(L,St.setFromMatrixPosition(A.matrixWorld)),Qt.logarithmicDepthBuffer&&je.setValue(L,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(lt.isMeshPhongMaterial||lt.isMeshToonMaterial||lt.isMeshLambertMaterial||lt.isMeshBasicMaterial||lt.isMeshStandardMaterial||lt.isShaderMaterial)&&je.setValue(L,"isOrthographic",A.isOrthographicCamera===!0),R!==A&&(R=A,Ce=!0,Aa=!0)}if($.isSkinnedMesh){je.setOptional(L,$,"bindMatrix"),je.setOptional(L,$,"bindMatrixInverse");const en=$.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),je.setValue(L,"boneTexture",en.boneTexture,oe))}$.isBatchedMesh&&(je.setOptional(L,$,"batchingTexture"),je.setValue(L,"batchingTexture",$._matricesTexture,oe),je.setOptional(L,$,"batchingIdTexture"),je.setValue(L,"batchingIdTexture",$._indirectTexture,oe),je.setOptional(L,$,"batchingColorTexture"),$._colorsTexture!==null&&je.setValue(L,"batchingColorTexture",$._colorsTexture,oe));const ln=ot.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&At.update($,ot,mn),(Ce||te.receiveShadow!==$.receiveShadow)&&(te.receiveShadow=$.receiveShadow,je.setValue(L,"receiveShadow",$.receiveShadow)),lt.isMeshGouraudMaterial&&lt.envMap!==null&&(zn.envMap.value=wt,zn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),lt.isMeshStandardMaterial&&lt.envMap===null&&J.environment!==null&&(zn.envMapIntensity.value=J.environmentIntensity),Ce&&(je.setValue(L,"toneMappingExposure",D.toneMappingExposure),te.needsLights&&bc(zn,Aa),bt&&lt.fog===!0&&yt.refreshFogUniforms(zn,bt),yt.refreshMaterialUniforms(zn,lt,K,it,S.state.transmissionRenderTarget[A.id]),_c.upload(L,fr(te),zn,oe)),lt.isShaderMaterial&&lt.uniformsNeedUpdate===!0&&(_c.upload(L,fr(te),zn,oe),lt.uniformsNeedUpdate=!1),lt.isSpriteMaterial&&je.setValue(L,"center",$.center),je.setValue(L,"modelViewMatrix",$.modelViewMatrix),je.setValue(L,"normalMatrix",$.normalMatrix),je.setValue(L,"modelMatrix",$.matrixWorld),lt.isShaderMaterial||lt.isRawShaderMaterial){const en=lt.uniformsGroups;for(let Un=0,Zr=en.length;Un<Zr;Un++){const Oi=en[Un];ce.update(Oi,mn),ce.bind(Oi,mn)}}return mn}function bc(A,J){A.ambientLightColor.needsUpdate=J,A.lightProbe.needsUpdate=J,A.directionalLights.needsUpdate=J,A.directionalLightShadows.needsUpdate=J,A.pointLights.needsUpdate=J,A.pointLightShadows.needsUpdate=J,A.spotLights.needsUpdate=J,A.spotLightShadows.needsUpdate=J,A.rectAreaLights.needsUpdate=J,A.hemisphereLights.needsUpdate=J}function El(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,J,ot){const lt=Ht.get(A);lt.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,lt.__autoAllocateDepthBuffer===!1&&(lt.__useRenderToTexture=!1),Ht.get(A.texture).__webglTexture=J,Ht.get(A.depthTexture).__webglTexture=lt.__autoAllocateDepthBuffer?void 0:ot,lt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,J){const ot=Ht.get(A);ot.__webglFramebuffer=J,ot.__useDefaultFramebuffer=J===void 0};const fo=L.createFramebuffer();this.setRenderTarget=function(A,J=0,ot=0){k=A,F=J,z=ot;let lt=!0,$=null,bt=!1,Pt=!1;if(A){const wt=Ht.get(A);if(wt.__useDefaultFramebuffer!==void 0)Lt.bindFramebuffer(L.FRAMEBUFFER,null),lt=!1;else if(wt.__webglFramebuffer===void 0)oe.setupRenderTarget(A);else if(wt.__hasExternalTextures)oe.rebindTextures(A,Ht.get(A.texture).__webglTexture,Ht.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $t=A.depthTexture;if(wt.__boundDepthTexture!==$t){if($t!==null&&Ht.has($t)&&(A.width!==$t.image.width||A.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");oe.setupDepthRenderbuffer(A)}}const qt=A.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Pt=!0);const ee=Ht.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(ee[J])?$=ee[J][ot]:$=ee[J],bt=!0):A.samples>0&&oe.useMultisampledRTT(A)===!1?$=Ht.get(A).__webglMultisampledFramebuffer:Array.isArray(ee)?$=ee[ot]:$=ee,V.copy(A.viewport),at.copy(A.scissor),ct=A.scissorTest}else V.copy(Bt).multiplyScalar(K).floor(),at.copy(ne).multiplyScalar(K).floor(),ct=pe;if(ot!==0&&($=fo),Lt.bindFramebuffer(L.FRAMEBUFFER,$)&&lt&&Lt.drawBuffers(A,$),Lt.viewport(V),Lt.scissor(at),Lt.setScissorTest(ct),bt){const wt=Ht.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+J,wt.__webglTexture,ot)}else if(Pt){const wt=J;for(let qt=0;qt<A.textures.length;qt++){const ee=Ht.get(A.textures[qt]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+qt,ee.__webglTexture,ot,wt)}}else if(A!==null&&ot!==0){const wt=Ht.get(A.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,wt.__webglTexture,ot)}w=-1},this.readRenderTargetPixels=function(A,J,ot,lt,$,bt,Pt,Ft=0){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(wt=wt[Pt]),wt){Lt.bindFramebuffer(L.FRAMEBUFFER,wt);try{const qt=A.textures[Ft],ee=qt.format,$t=qt.type;if(!Qt.textureFormatReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=A.width-lt&&ot>=0&&ot<=A.height-$&&(A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ft),L.readPixels(J,ot,lt,$,Zt.convert(ee),Zt.convert($t),bt))}finally{const qt=k!==null?Ht.get(k).__webglFramebuffer:null;Lt.bindFramebuffer(L.FRAMEBUFFER,qt)}}},this.readRenderTargetPixelsAsync=async function(A,J,ot,lt,$,bt,Pt,Ft=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Ht.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Pt!==void 0&&(wt=wt[Pt]),wt)if(J>=0&&J<=A.width-lt&&ot>=0&&ot<=A.height-$){Lt.bindFramebuffer(L.FRAMEBUFFER,wt);const qt=A.textures[Ft],ee=qt.format,$t=qt.type;if(!Qt.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ve=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,ve),L.bufferData(L.PIXEL_PACK_BUFFER,bt.byteLength,L.STREAM_READ),A.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+Ft),L.readPixels(J,ot,lt,$,Zt.convert(ee),Zt.convert($t),0);const ze=k!==null?Ht.get(k).__webglFramebuffer:null;Lt.bindFramebuffer(L.FRAMEBUFFER,ze);const Qe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await YE(L,Qe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,ve),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,bt),L.deleteBuffer(ve),L.deleteSync(Qe),bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,J=null,ot=0){const lt=Math.pow(2,-ot),$=Math.floor(A.image.width*lt),bt=Math.floor(A.image.height*lt),Pt=J!==null?J.x:0,Ft=J!==null?J.y:0;oe.setTexture2D(A,0),L.copyTexSubImage2D(L.TEXTURE_2D,ot,0,0,Pt,Ft,$,bt),Lt.unbindTexture()};const hr=L.createFramebuffer(),Ac=L.createFramebuffer();this.copyTextureToTexture=function(A,J,ot=null,lt=null,$=0,bt=null){bt===null&&($!==0?(gl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),bt=$,$=0):bt=0);let Pt,Ft,wt,qt,ee,$t,ve,ze,Qe;const Ue=A.isCompressedTexture?A.mipmaps[bt]:A.image;if(ot!==null)Pt=ot.max.x-ot.min.x,Ft=ot.max.y-ot.min.y,wt=ot.isBox3?ot.max.z-ot.min.z:1,qt=ot.min.x,ee=ot.min.y,$t=ot.isBox3?ot.min.z:0;else{const ln=Math.pow(2,-$);Pt=Math.floor(Ue.width*ln),Ft=Math.floor(Ue.height*ln),A.isDataArrayTexture?wt=Ue.depth:A.isData3DTexture?wt=Math.floor(Ue.depth*ln):wt=1,qt=0,ee=0,$t=0}lt!==null?(ve=lt.x,ze=lt.y,Qe=lt.z):(ve=0,ze=0,Qe=0);const Re=Zt.convert(J.format),te=Zt.convert(J.type);let Ne;J.isData3DTexture?(oe.setTexture3D(J,0),Ne=L.TEXTURE_3D):J.isDataArrayTexture||J.isCompressedArrayTexture?(oe.setTexture2DArray(J,0),Ne=L.TEXTURE_2D_ARRAY):(oe.setTexture2D(J,0),Ne=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,J.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,J.unpackAlignment);const ge=L.getParameter(L.UNPACK_ROW_LENGTH),mn=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Qn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ce=L.getParameter(L.UNPACK_SKIP_ROWS),Aa=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Ue.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ue.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,qt),L.pixelStorei(L.UNPACK_SKIP_ROWS,ee),L.pixelStorei(L.UNPACK_SKIP_IMAGES,$t);const je=A.isDataArrayTexture||A.isData3DTexture,zn=J.isDataArrayTexture||J.isData3DTexture;if(A.isDepthTexture){const ln=Ht.get(A),en=Ht.get(J),Un=Ht.get(ln.__renderTarget),Zr=Ht.get(en.__renderTarget);Lt.bindFramebuffer(L.READ_FRAMEBUFFER,Un.__webglFramebuffer),Lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Zr.__webglFramebuffer);for(let Oi=0;Oi<wt;Oi++)je&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ht.get(A).__webglTexture,$,$t+Oi),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ht.get(J).__webglTexture,bt,Qe+Oi)),L.blitFramebuffer(qt,ee,Pt,Ft,ve,ze,Pt,Ft,L.DEPTH_BUFFER_BIT,L.NEAREST);Lt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if($!==0||A.isRenderTargetTexture||Ht.has(A)){const ln=Ht.get(A),en=Ht.get(J);Lt.bindFramebuffer(L.READ_FRAMEBUFFER,hr),Lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,Ac);for(let Un=0;Un<wt;Un++)je?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ln.__webglTexture,$,$t+Un):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ln.__webglTexture,$),zn?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,en.__webglTexture,bt,Qe+Un):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,en.__webglTexture,bt),$!==0?L.blitFramebuffer(qt,ee,Pt,Ft,ve,ze,Pt,Ft,L.COLOR_BUFFER_BIT,L.NEAREST):zn?L.copyTexSubImage3D(Ne,bt,ve,ze,Qe+Un,qt,ee,Pt,Ft):L.copyTexSubImage2D(Ne,bt,ve,ze,qt,ee,Pt,Ft);Lt.bindFramebuffer(L.READ_FRAMEBUFFER,null),Lt.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else zn?A.isDataTexture||A.isData3DTexture?L.texSubImage3D(Ne,bt,ve,ze,Qe,Pt,Ft,wt,Re,te,Ue.data):J.isCompressedArrayTexture?L.compressedTexSubImage3D(Ne,bt,ve,ze,Qe,Pt,Ft,wt,Re,Ue.data):L.texSubImage3D(Ne,bt,ve,ze,Qe,Pt,Ft,wt,Re,te,Ue):A.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,bt,ve,ze,Pt,Ft,Re,te,Ue.data):A.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,bt,ve,ze,Ue.width,Ue.height,Re,Ue.data):L.texSubImage2D(L.TEXTURE_2D,bt,ve,ze,Pt,Ft,Re,te,Ue);L.pixelStorei(L.UNPACK_ROW_LENGTH,ge),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mn),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Qn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ce),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Aa),bt===0&&J.generateMipmaps&&L.generateMipmap(Ne),Lt.unbindTexture()},this.initRenderTarget=function(A){Ht.get(A).__webglFramebuffer===void 0&&oe.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?oe.setTextureCube(A,0):A.isData3DTexture?oe.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?oe.setTexture2DArray(A,0):oe.setTexture2D(A,0),Lt.unbindTexture()},this.resetState=function(){F=0,z=0,k=null,Lt.reset(),zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const a=this.getContext();a.drawingBufferColorSpace=De._getDrawingBufferColorSpace(e),a.unpackColorSpace=De._getUnpackColorSpace()}}const to=[{name:"Violet Nebula",subtitle:"THE PERSEUS ARM",color:"#ae80f0",second:"#316ea4",density:1},{name:"Stellar Ocean",subtitle:"AN ENDLESS SEA OF LIGHT",color:"#70bfe2",second:"#294276",density:.65},{name:"Golden Core",subtitle:"THE HEART OF THE GALAXY",color:"#efbd75",second:"#9f566f",density:1.4},{name:"Cosmic Clouds",subtitle:"WHERE THE STARS ARE BORN",color:"#7dcab9",second:"#7367ba",density:1.1},{name:"Deep Silence",subtitle:"FAR FROM EVERYTHING",color:"#576585",second:"#17243e",density:.16}];function dC(o,e){const a=new hC({antialias:!0,alpha:!1});a.setClearColor("#03050d"),o.appendChild(a.domElement);const s=new _T,u=new yi(68,1,.1,2200);u.position.z=5;const f=new wT,h={time:{value:0},tint:{value:new Se(to[0].color)},second:{value:new Se(to[0].second)},density:{value:1}};let d=7123;const _=()=>(d=d*16807%2147483647,(d-1)/2147483646),g=24e3,v=new Float32Array(g*3),p=new Float32Array(g),x=new Float32Array(g*3);for(let B=0;B<g;B++)v[B*3]=(_()-.5)*1900,v[B*3+1]=(_()-.5)*1200,v[B*3+2]=-_()*1900,p[B]=.6+Math.pow(_(),8)*4,new Se().setHSL(.52+_()*.24,.1+_()*.4,.55+_()*.45).toArray(x,B*3);const M=new ta;M.setAttribute("position",new li(v,3)),M.setAttribute("size",new li(p,1)),M.setAttribute("color",new li(x,3));const b=new Cv(M,new $i({vertexColors:!0,transparent:!0,depthWrite:!1,blending:vc,uniforms:{travel:{value:0}},vertexShader:"attribute float size; varying vec3 vColor; uniform float travel; void main(){vColor=color; vec3 p=position;p.z=mod(p.z+travel+1900.,1900.)-1890.;vec4 mv=modelViewMatrix*vec4(p,1.); gl_Position=projectionMatrix*mv;gl_PointSize=clamp(size*210./max(10.,-mv.z),.7,9.);}",fragmentShader:"varying vec3 vColor;void main(){float d=length(gl_PointCoord-.5);float a=exp(-d*d*24.);gl_FragColor=vec4(vColor,a);}"}));s.add(b);const C=new xl(1600,1e3),y=new $i({transparent:!0,depthWrite:!1,blending:vc,side:Wi,uniforms:h,vertexShader:"varying vec2 uvv;void main(){uvv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec2 uvv;uniform float time;uniform vec3 tint,second;uniform float density;
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+1.),f.x),f.y);}float fbm(vec2 p){float v=0.,a=.5;for(int i=0;i<5;i++){v+=a*noise(p);p=p*2.07+3.1;a*=.5;}return v;}
 void main(){vec2 p=(uvv-.5)*vec2(3.2,2.);float f=fbm(p*3.+fbm(p*2.+time*.007)*2.);float ribbon=exp(-pow((p.y-sin(p.x*1.6)*.22+f*.4)*2.6,2.));float edge=smoothstep(.52,.12,length(uvv-.5));float a=pow(f,2.)*ribbon*edge*density;vec3 c=mix(second,tint,fbm(p*4.+5.));gl_FragColor=vec4(c*1.35,a*.7);}`}),S=new Ks;for(let B=0;B<7;B++){const j=new Wn(C,y);j.position.set((B%3-1)*160,(B%2-.5)*130,-500-B*155),j.rotation.z=.24+B*.48,S.add(j)}s.add(S);const I=new Wn(new Pp(36,48,32),new Dv({color:"#465671",roughness:.95,metalness:.15}));I.position.set(295,-125,-720),s.add(I),s.add(new TT("#bfa2e8","#080b15",1.6));const O=new RT("#c5c9ff",3);O.position.set(-3,4,1),s.add(O);const D=new Ks;u.add(D),s.add(u);const G=new Dv({color:"#141c24",metalness:.7,roughness:.4}),F=new Op({color:"#80c5c4"});function z(B,j,St,Dt,Tt,Mt,Xt=0){const L=new Wn(new jr(Dt,Tt,Mt),G);L.position.set(B,j,St),L.rotation.z=Xt,D.add(L)}z(0,-1.63,-2.1,7,.45,.5),z(-2.55,0,-2.4,.09,4,.2,-.2),z(2.55,0,-2.4,.09,4,.2,.2),z(0,1.75,-2.4,7,.12,.25);const k=new Wn(new jr(5.7,.012,.05),F);k.position.set(0,-1.405,-2.05),D.add(k);const w=new Set;let R={x:0,y:0},V=!1,at=0,ct=0,gt=0,ut=0,Y=0,it="";const K=B=>{B.target instanceof HTMLInputElement||B.target instanceof HTMLSelectElement||w.add(B.key.toLowerCase())},vt=B=>w.delete(B.key.toLowerCase()),xt=()=>{w.clear(),V=!1},Bt=()=>V=!0,ne=()=>V=!1,pe=B=>{V&&(R.x=Lr.clamp(R.x-B.movementX*.002,-.65,.65),R.y=Lr.clamp(R.y-B.movementY*.002,-.4,.4))};window.addEventListener("keydown",K),window.addEventListener("keyup",vt),window.addEventListener("blur",xt),a.domElement.addEventListener("pointerdown",Bt),window.addEventListener("pointerup",ne),window.addEventListener("pointermove",pe);const P=()=>{u.aspect=o.clientWidth/o.clientHeight,u.updateProjectionMatrix(),a.setSize(o.clientWidth,o.clientHeight)};window.addEventListener("resize",P),P();const Q=()=>{Y=requestAnimationFrame(Q);const B=Math.min(f.getDelta(),.05),j=e();j.quality!==it&&(it=j.quality,a.setPixelRatio(Math.min(devicePixelRatio,it==="High"?2:it==="Medium"?1.4:1)),P(),M.setDrawRange(0,it==="Low"?6e3:it==="Medium"?14e3:g));const St=to[j.region];if(h.tint.value.lerp(new Se(St.color),B*.35),h.second.value.lerp(new Se(St.second),B*.35),h.density.value=Lr.damp(h.density.value,St.density,.5,B),!j.paused){h.time.value+=B;const Dt=j.started?j.speed*(j.mode==="Meditation"?.15:1)*(j.reduced?.3:1):2;ut=Lr.damp(ut,Dt,.8,B),gt+=ut*B,b.material.uniforms.travel.value=gt,j.mode==="Manual Flight"&&(at+=((w.has("a")||w.has("arrowleft")?1:0)-(w.has("d")||w.has("arrowright")?1:0))*B*.16,ct=Lr.clamp(ct+((w.has("w")||w.has("arrowup")?1:0)-(w.has("s")||w.has("arrowdown")?1:0))*B*.12,-.6,.6));const Tt=h.time.value,Mt=j.reduced?0:j.motion;u.rotation.y=Lr.damp(u.rotation.y,at+R.x+Math.sin(Tt*.055)*.09*Mt,2,B),u.rotation.x=Lr.damp(u.rotation.x,ct+R.y+Math.sin(Tt*.08)*.025*Mt,2,B),S.position.z=Math.sin(Tt*.02)*45}D.visible=j.cockpit,F.color.copy(h.tint.value).multiplyScalar(j.mode==="Meditation"?.2:.7),a.render(s,u)};return Q(),()=>{cancelAnimationFrame(Y),window.removeEventListener("resize",P),window.removeEventListener("keydown",K),window.removeEventListener("keyup",vt),window.removeEventListener("blur",xt),window.removeEventListener("pointerup",ne),window.removeEventListener("pointermove",pe),a.domElement.removeEventListener("pointerdown",Bt),s.traverse(B=>{(B instanceof Wn||B instanceof Cv)&&(B.geometry.dispose(),(Array.isArray(B.material)?B.material:[B.material]).forEach(St=>St.dispose()))}),a.dispose(),a.domElement.remove()}}class pC{constructor(){el(this,"ctx",null);el(this,"master");el(this,"engine");el(this,"music")}async start(){if(!this.ctx){const e=this.ctx=new AudioContext;this.master=e.createGain(),this.master.gain.value=0,this.master.connect(e.destination),this.engine=e.createGain(),this.music=e.createGain(),this.engine.connect(this.master),this.music.connect(this.master),[38,57,76].forEach(a=>{const s=e.createOscillator();s.type="sine",s.frequency.value=a;const u=e.createGain();u.gain.value=.09,s.connect(u).connect(this.engine),s.start()}),[130.81,196,261.63,293.66,392].forEach((a,s)=>{const u=e.createOscillator();u.frequency.value=a;const f=e.createGain();f.gain.value=.025;const h=e.createOscillator();h.frequency.value=.035+s*.009;const d=e.createGain();d.gain.value=.012,h.connect(d).connect(f.gain),u.connect(f).connect(this.music),u.start(),h.start()})}await this.ctx.resume()}set(e,a,s,u){var h,d,_;if(!this.ctx)return;const f=this.ctx.currentTime;(h=this.master)==null||h.gain.setTargetAtTime(e&&!u?.65:0,f,.4),(d=this.engine)==null||d.gain.setTargetAtTime(a,f,.2),(_=this.music)==null||_.gain.setTargetAtTime(s,f,.2)}dispose(){var e;(e=this.ctx)==null||e.close()}}function mC(){const[o,e]=He.useState("Autopilot"),[a,s]=He.useState(18),[u,f]=He.useState(!1),[h,d]=He.useState(0),[_,g]=He.useState("High"),[v,p]=He.useState(matchMedia("(prefers-reduced-motion: reduce)").matches),[x,M]=He.useState(.6),[b,C]=He.useState(!0),[y,S]=He.useState(!1),[I,O]=He.useState(!1),[D,G]=He.useState(""),[F,z]=He.useState(!1),[k,w]=He.useState(.35),[R,V]=He.useState(.5),[at,ct]=He.useState(!0),[gt,ut]=He.useState(""),[Y,it]=He.useState(!1),K=He.useRef(null),vt=He.useRef(new pC),xt=He.useRef({mode:o,speed:a,paused:u,region:h,quality:_,reduced:v,motion:x,cockpit:b,started:y});xt.current={mode:o,speed:a,paused:u,region:h,quality:_,reduced:v,motion:x,cockpit:b,started:y},He.useEffect(()=>{try{return dC(K.current,()=>xt.current)}catch{ut("WebGL could not start. Please enable hardware acceleration and reload.")}},[]),He.useEffect(()=>{vt.current.set(F,k,R,u)},[F,k,R,u]),He.useEffect(()=>{const Q=setInterval(()=>{at&&y&&!u&&d(B=>(B+1)%5)},9e4);return()=>clearInterval(Q)},[at,y,u]),He.useEffect(()=>{const Q=j=>{j.target instanceof HTMLInputElement||j.target instanceof HTMLSelectElement||(j.key.toLowerCase()==="h"&&O(St=>!St),j.code==="Space"&&(j.preventDefault(),f(St=>!St)),j.key==="Escape"&&(O(!1),G("")))},B=()=>it(!!document.fullscreenElement);return window.addEventListener("keydown",Q),document.addEventListener("fullscreenchange",B),()=>{window.removeEventListener("keydown",Q),document.removeEventListener("fullscreenchange",B)}},[]);const Bt=async()=>{try{await vt.current.start(),z(Q=>!Q)}catch{ut("Audio is unavailable in this browser. The journey can continue silently.")}},ne=()=>{S(!0),f(!1)},pe=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{ut("Fullscreen is unavailable in this browser.")}},P=Q=>{e(Q),S(!0)};return mt.jsxs("main",{className:`${I?"hidden-ui":""} ${o==="Meditation"?"meditation":""}`,children:[mt.jsx("div",{className:"universe",ref:K}),mt.jsx("div",{className:"vignette"}),mt.jsxs("header",{className:"ui",children:[mt.jsxs("a",{className:"brand",href:"#",onClick:Q=>{Q.preventDefault(),O(!1)},children:[mt.jsx(PM,{size:32}),mt.jsxs("span",{children:["COSMIC DRIFT",mt.jsx("small",{children:"A QUIETER KIND OF JOURNEY"})]})]}),mt.jsxs("nav",{children:[mt.jsx("span",{className:"live-dot"})," ALL SYSTEMS AT PEACE ",mt.jsx("span",{className:"nav-line"}),mt.jsx("button",{title:"Audio settings",onClick:()=>G(D==="audio"?"":"audio"),children:mt.jsx(ad,{size:18})}),mt.jsx("button",{title:"Settings",onClick:()=>G(D==="settings"?"":"settings"),children:mt.jsx(FM,{size:18})}),mt.jsx("button",{title:"Fullscreen",onClick:pe,children:mt.jsx(ev,{size:18})})]})]}),mt.jsxs("section",{className:"intro ui",children:[mt.jsxs("div",{className:"eyebrow",children:[mt.jsx("span",{})," LEAVE THE NOISE BEHIND"]}),mt.jsxs("h1",{children:["Nowhere to be.",mt.jsx("br",{}),"Just ",mt.jsx("em",{children:"drift."})]}),mt.jsxs("p",{children:["A quiet passage through an infinite universe.",mt.jsx("br",{}),"No destination. No demands. Just you and the stars."]}),mt.jsxs("button",{className:"start",onClick:ne,children:[y?u?"Resume journey":"Journey in progress":"Start journey",mt.jsx(LM,{size:18})]}),mt.jsxs("div",{className:"intro-note",children:[mt.jsx("span",{})," ",y?"TAKE YOUR TIME. YOU HAVE ALL OF IT.":"YOUR OWN LITTLE CORNER OF INFINITY"]})]}),mt.jsxs("aside",{className:"region-label ui",children:[mt.jsx("span",{className:"coordinate",children:"SECTOR 07 / PERSEUS"}),mt.jsx("div",{className:"region-rule"}),mt.jsx("span",{className:"eyebrow",children:"YOU ARE DRIFTING THROUGH"}),mt.jsx("h2",{children:to[h].name}),mt.jsx("p",{children:to[h].subtitle}),mt.jsxs("button",{onClick:()=>G(D==="regions"?"":"regions"),children:["Explore regions ",mt.jsx($0,{size:14})]})]}),mt.jsxs("div",{className:"travel-marker ui",children:[mt.jsx("span",{children:"✧"}),mt.jsx("i",{}),mt.jsx("small",{children:"AN INFINITE UNIVERSE. AN UNHURRIED YOU."})]}),mt.jsxs("section",{className:"flight-deck ui",children:[mt.jsxs("div",{className:"deck-top",children:[mt.jsxs("div",{className:"deck-label",children:[mt.jsx("span",{className:"live-dot"}),u?"JOURNEY PAUSED":y?"JOURNEY ACTIVE":"READY WHEN YOU ARE"]}),mt.jsx("span",{className:"ship-name",children:"VESSEL / AETHER–01"})]}),mt.jsxs("div",{className:"deck-controls",children:[mt.jsx("div",{className:"mode-controls",children:[{name:"Autopilot",icon:OM},{name:"Manual Flight",icon:zM},{name:"Meditation",icon:GM}].map(Q=>mt.jsxs("button",{className:o===Q.name?"selected":"",onClick:()=>P(Q.name),children:[mt.jsx(Q.icon,{size:17}),mt.jsxs("span",{children:[Q.name,Q.name==="Meditation"?" mode":""]})]},Q.name))}),mt.jsxs("div",{className:"speed",children:[mt.jsxs("label",{htmlFor:"speed",children:["DRIFT SPEED ",mt.jsxs("span",{children:[a.toFixed(0)," ",mt.jsx("small",{children:"km/s"})]})]}),mt.jsx("input",{id:"speed",type:"range",min:"1",max:"80",value:a,onChange:Q=>s(+Q.target.value)}),mt.jsxs("div",{children:[mt.jsx("span",{children:"GENTLE"}),mt.jsx("span",{children:"SWIFT"})]})]}),mt.jsxs("div",{className:"deck-actions",children:[mt.jsx("button",{title:u?"Resume":"Pause",onClick:()=>f(Q=>!Q),children:u?mt.jsx(BM,{size:19}):mt.jsx(IM,{size:19})}),mt.jsx("button",{title:F?"Mute audio":"Enable audio",onClick:Bt,children:F?mt.jsx(ad,{size:19}):mt.jsx(HM,{size:19})}),mt.jsx("button",{title:"Hide interface (H)",onClick:()=>O(!0),children:mt.jsx(tv,{size:19})})]})]})]}),mt.jsxs("footer",{className:"ui",children:[mt.jsxs("span",{children:[mt.jsx("span",{className:"key",children:"DRAG"})," TO LOOK AROUND ",mt.jsx("i",{})," ",mt.jsx("span",{className:"key",children:o==="Manual Flight"?"W A S D":"H"})," ",o==="Manual Flight"?"TO STEER":"TO HIDE INTERFACE"]}),mt.jsxs("span",{children:["BUILT FOR WANDERING ",mt.jsx("span",{className:"tiny-star",children:"✦"})]})]}),I&&mt.jsxs("button",{className:"restore",onClick:()=>O(!1),children:[mt.jsx(tv,{size:16})," Show controls · H"]}),D&&mt.jsxs("div",{className:"panel ui",children:[mt.jsxs("div",{className:"panel-head",children:[mt.jsx("span",{children:D==="regions"?"Choose your horizon":D==="audio"?"The sound of stillness":"Make space your own"}),mt.jsx("button",{title:"Close settings",onClick:()=>G(""),children:mt.jsx(nv,{size:19})})]}),D==="regions"?mt.jsxs(mt.Fragment,{children:[mt.jsx("p",{children:"Every corner of the universe has a different kind of quiet."}),to.map((Q,B)=>mt.jsxs("button",{className:`region-option ${h===B?"active":""}`,onClick:()=>d(B),children:[mt.jsx("span",{className:"orb",style:{background:`radial-gradient(circle at 30% 30%,${Q.color},${Q.second},#070a12)`}}),mt.jsxs("span",{children:[Q.name,mt.jsx("small",{children:Q.subtitle})]}),h===B?"●":mt.jsx($0,{size:15})]},Q.name)),mt.jsxs("label",{className:"check",children:[mt.jsx("input",{type:"checkbox",checked:at,onChange:Q=>ct(Q.target.checked)})," Automatically drift between regions · 90s"]})]}):D==="audio"?mt.jsxs(mt.Fragment,{children:[mt.jsx("p",{children:"Original ambient tones, synthesized just for this journey."}),mt.jsxs("button",{className:"sound-toggle",onClick:Bt,children:[F?"Mute all audio":"Enable sound",mt.jsx(ad,{size:17})]}),mt.jsxs("label",{className:"setting",children:["Engine hum",mt.jsx("input",{"aria-label":"Engine volume",type:"range",min:"0",max:"1",step:".01",value:k,onChange:Q=>w(+Q.target.value)})]}),mt.jsxs("label",{className:"setting",children:["Ambient music",mt.jsx("input",{"aria-label":"Music volume",type:"range",min:"0",max:"1",step:".01",value:R,onChange:Q=>V(+Q.target.value)})]})]}):mt.jsxs(mt.Fragment,{children:[mt.jsxs("label",{className:"setting",children:["Graphics quality",mt.jsx("select",{value:_,onChange:Q=>g(Q.target.value),children:["Low","Medium","High"].map(Q=>mt.jsx("option",{children:Q},Q))})]}),mt.jsxs("label",{className:"setting",children:["Camera movement",mt.jsx("input",{"aria-label":"Camera movement",type:"range",min:"0",max:"1",step:".05",value:x,onChange:Q=>M(+Q.target.value)})]}),mt.jsxs("label",{className:"check",children:[mt.jsx("input",{type:"checkbox",checked:v,onChange:Q=>p(Q.target.checked)})," Reduced motion"]}),mt.jsxs("label",{className:"check",children:[mt.jsx("input",{type:"checkbox",checked:b,onChange:Q=>C(Q.target.checked)})," Show cockpit"]}),mt.jsxs("button",{className:"sound-toggle",onClick:pe,children:[Y?"Exit fullscreen":"Enter fullscreen",mt.jsx(ev,{size:16})]})]})]}),gt&&mt.jsxs("div",{role:"alert",className:"error",children:[gt,mt.jsx("button",{onClick:()=>ut(""),"aria-label":"Dismiss error",children:mt.jsx(nv,{size:16})})]})]})}wM.createRoot(document.getElementById("root")).render(mt.jsx(mC,{}));
