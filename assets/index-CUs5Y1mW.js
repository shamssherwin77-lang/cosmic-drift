var SE=Object.defineProperty;var ME=(r,t,i)=>t in r?SE(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;var de=(r,t,i)=>ME(r,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Yd={exports:{}},xl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy;function EE(){if(cy)return xl;cy=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return xl.Fragment=t,xl.jsx=i,xl.jsxs=i,xl}var uy;function TE(){return uy||(uy=1,Yd.exports=EE()),Yd.exports}var Q=TE(),jd={exports:{}},ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fy;function bE(){if(fy)return ve;fy=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),x=Symbol.iterator;function E(H){return H===null||typeof H!="object"?null:(H=x&&H[x]||H["@@iterator"],typeof H=="function"?H:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,_={};function w(H,et,K){this.props=H,this.context=et,this.refs=_,this.updater=K||T}w.prototype.isReactComponent={},w.prototype.setState=function(H,et){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,et,"setState")},w.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function C(){}C.prototype=w.prototype;function b(H,et,K){this.props=H,this.context=et,this.refs=_,this.updater=K||T}var P=b.prototype=new C;P.constructor=b,M(P,w.prototype),P.isPureReactComponent=!0;var z=Array.isArray;function I(){}var O={H:null,A:null,T:null,S:null},N=Object.prototype.hasOwnProperty;function A(H,et,K){var j=K.ref;return{$$typeof:r,type:H,key:et,ref:j!==void 0?j:null,props:K}}function V(H,et){return A(H.type,et,H.props)}function Y(H){return typeof H=="object"&&H!==null&&H.$$typeof===r}function J(H){var et={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(K){return et[K]})}var pt=/\/+/g;function $(H,et){return typeof H=="object"&&H!==null&&H.key!=null?J(""+H.key):et.toString(36)}function q(H){switch(H.status){case"fulfilled":return H.value;case"rejected":throw H.reason;default:switch(typeof H.status=="string"?H.then(I,I):(H.status="pending",H.then(function(et){H.status==="pending"&&(H.status="fulfilled",H.value=et)},function(et){H.status==="pending"&&(H.status="rejected",H.reason=et)})),H.status){case"fulfilled":return H.value;case"rejected":throw H.reason}}throw H}function U(H,et,K,j,yt){var bt=typeof H;(bt==="undefined"||bt==="boolean")&&(H=null);var Mt=!1;if(H===null)Mt=!0;else switch(bt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(H.$$typeof){case r:case t:Mt=!0;break;case v:return Mt=H._init,U(Mt(H._payload),et,K,j,yt)}}if(Mt)return yt=yt(H),Mt=j===""?"."+$(H,0):j,z(yt)?(K="",Mt!=null&&(K=Mt.replace(pt,"$&/")+"/"),U(yt,et,K,"",function(k){return k})):yt!=null&&(Y(yt)&&(yt=V(yt,K+(yt.key==null||H&&H.key===yt.key?"":(""+yt.key).replace(pt,"$&/")+"/")+Mt)),et.push(yt)),1;Mt=0;var wt=j===""?".":j+":";if(z(H))for(var Ot=0;Ot<H.length;Ot++)j=H[Ot],bt=wt+$(j,Ot),Mt+=U(j,et,K,bt,yt);else if(Ot=E(H),typeof Ot=="function")for(H=Ot.call(H),Ot=0;!(j=H.next()).done;)j=j.value,bt=wt+$(j,Ot++),Mt+=U(j,et,K,bt,yt);else if(bt==="object"){if(typeof H.then=="function")return U(q(H),et,K,j,yt);throw et=String(H),Error("Objects are not valid as a React child (found: "+(et==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":et)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function B(H,et,K){if(H==null)return H;var j=[],yt=0;return U(H,j,"","",function(bt){return et.call(K,bt,yt++)}),j}function it(H){if(H._status===-1){var et=H._result,K=et();K.then(function(j){(H._status===0||H._status===-1)&&(H._status=1,H._result=j,K.status===void 0&&(K.status="fulfilled",K.value=j))},function(j){(H._status===0||H._status===-1)&&(H._status=2,H._result=j,K.status===void 0&&(K.status="rejected",K.reason=j))}),H._status===-1&&(H._status=0,H._result=K)}if(H._status===1)return H._result.default;throw H._result}var dt=typeof reportError=="function"?reportError:function(H){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var et=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof H=="object"&&H!==null&&typeof H.message=="string"?String(H.message):String(H),error:H});if(!window.dispatchEvent(et))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",H);return}console.error(H)};function Nt(H){var et=O.T,K={};K.types=et!==null?et.types:null,O.T=K;try{var j=H(),yt=O.S;yt!==null&&yt(K,j),typeof j=="object"&&j!==null&&typeof j.then=="function"&&j.then(I,dt)}catch(bt){dt(bt)}finally{et!==null&&K.types!==null&&(et.types=K.types),O.T=et}}function Rt(H){var et=O.T;if(et!==null){var K=et.types;K===null?et.types=[H]:K.indexOf(H)===-1&&K.push(H)}else Nt(Rt.bind(null,H))}var Qt={map:B,forEach:function(H,et,K){B(H,function(){et.apply(this,arguments)},K)},count:function(H){var et=0;return B(H,function(){et++}),et},toArray:function(H){return B(H,function(et){return et})||[]},only:function(H){if(!Y(H))throw Error("React.Children.only expected to receive a single React element child.");return H}};return ve.Activity=g,ve.Children=Qt,ve.Component=w,ve.Fragment=i,ve.Profiler=l,ve.PureComponent=b,ve.StrictMode=s,ve.Suspense=p,ve.ViewTransition=y,ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ve.__COMPILER_RUNTIME={__proto__:null,c:function(H){return O.H.useMemoCache(H)}},ve.addTransitionType=Rt,ve.cache=function(H){return function(){return H.apply(null,arguments)}},ve.cacheSignal=function(){return null},ve.cloneElement=function(H,et,K){if(H==null)throw Error("The argument must be a React element, but you passed "+H+".");var j=M({},H.props),yt=H.key;if(et!=null)for(bt in et.key!==void 0&&(yt=""+et.key),et)!N.call(et,bt)||bt==="key"||bt==="__self"||bt==="__source"||bt==="ref"&&et.ref===void 0||(j[bt]=et[bt]);var bt=arguments.length-2;if(bt===1)j.children=K;else if(1<bt){for(var Mt=Array(bt),wt=0;wt<bt;wt++)Mt[wt]=arguments[wt+2];j.children=Mt}return A(H.type,yt,j)},ve.createContext=function(H){return H={$$typeof:f,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null},H.Provider=H,H.Consumer={$$typeof:c,_context:H},H},ve.createElement=function(H,et,K){var j,yt={},bt=null;if(et!=null)for(j in et.key!==void 0&&(bt=""+et.key),et)N.call(et,j)&&j!=="key"&&j!=="__self"&&j!=="__source"&&(yt[j]=et[j]);var Mt=arguments.length-2;if(Mt===1)yt.children=K;else if(1<Mt){for(var wt=Array(Mt),Ot=0;Ot<Mt;Ot++)wt[Ot]=arguments[Ot+2];yt.children=wt}if(H&&H.defaultProps)for(j in Mt=H.defaultProps,Mt)yt[j]===void 0&&(yt[j]=Mt[j]);return A(H,bt,yt)},ve.createRef=function(){return{current:null}},ve.forwardRef=function(H){return{$$typeof:d,render:H}},ve.isValidElement=Y,ve.lazy=function(H){return{$$typeof:v,_payload:{_status:-1,_result:H},_init:it}},ve.memo=function(H,et){return{$$typeof:m,type:H,compare:et===void 0?null:et}},ve.startTransition=Nt,ve.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ve.use=function(H){return O.H.use(H)},ve.useActionState=function(H,et,K){return O.H.useActionState(H,et,K)},ve.useCallback=function(H,et){return O.H.useCallback(H,et)},ve.useContext=function(H){return O.H.useContext(H)},ve.useDebugValue=function(){},ve.useDeferredValue=function(H,et){return O.H.useDeferredValue(H,et)},ve.useEffect=function(H,et){return O.H.useEffect(H,et)},ve.useEffectEvent=function(H){return O.H.useEffectEvent(H)},ve.useId=function(){return O.H.useId()},ve.useImperativeHandle=function(H,et,K){return O.H.useImperativeHandle(H,et,K)},ve.useInsertionEffect=function(H,et){return O.H.useInsertionEffect(H,et)},ve.useLayoutEffect=function(H,et){return O.H.useLayoutEffect(H,et)},ve.useMemo=function(H,et){return O.H.useMemo(H,et)},ve.useOptimistic=function(H,et){return O.H.useOptimistic(H,et)},ve.useReducer=function(H,et,K){return O.H.useReducer(H,et,K)},ve.useRef=function(H){return O.H.useRef(H)},ve.useState=function(H){return O.H.useState(H)},ve.useSyncExternalStore=function(H,et,K){return O.H.useSyncExternalStore(H,et,K)},ve.useTransition=function(){return O.H.useTransition()},ve.version="19.3.1",ve}var hy;function Nm(){return hy||(hy=1,jd.exports=bE()),jd.exports}var ge=Nm(),Wd={exports:{}},Sl={},Zd={exports:{}},Qd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dy;function AE(){return dy||(dy=1,(function(r){function t(q,U){var B=q.length;q.push(U);t:for(;0<B;){var it=B-1>>>1,dt=q[it];if(0<l(dt,U))q[it]=U,q[B]=dt,B=it;else break t}}function i(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var U=q[0],B=q.pop();if(B!==U){q[0]=B;t:for(var it=0,dt=q.length,Nt=dt>>>1;it<Nt;){var Rt=2*(it+1)-1,Qt=q[Rt],H=Rt+1,et=q[H];if(0>l(Qt,B))H<dt&&0>l(et,Qt)?(q[it]=et,q[H]=B,it=H):(q[it]=Qt,q[Rt]=B,it=Rt);else if(H<dt&&0>l(et,B))q[it]=et,q[H]=B,it=H;else break t}}return U}function l(q,U){var B=q.sortIndex-U.sortIndex;return B!==0?B:q.id-U.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var p=[],m=[],v=1,g=null,y=3,x=!1,E=!1,T=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;function b(q){for(var U=i(m);U!==null;){if(U.callback===null)s(m);else if(U.startTime<=q)s(m),U.sortIndex=U.expirationTime,t(p,U);else break;U=i(m)}}function P(q){if(T=!1,b(q),!E)if(i(p)!==null)E=!0,z||(z=!0,Y());else{var U=i(m);U!==null&&$(P,U.startTime-q)}}var z=!1,I=-1,O=5,N=-1;function A(){return M?!0:!(r.unstable_now()-N<O)}function V(){if(M=!1,z){var q=r.unstable_now();N=q;var U=!0;try{t:{E=!1,T&&(T=!1,w(I),I=-1),x=!0;var B=y;try{e:{for(b(q),g=i(p);g!==null&&!(g.expirationTime>q&&A());){var it=g.callback;if(typeof it=="function"){g.callback=null,y=g.priorityLevel;var dt=it(g.expirationTime<=q);if(q=r.unstable_now(),typeof dt=="function"){g.callback=dt,b(q),U=!0;break e}g===i(p)&&s(p),b(q)}else s(p);g=i(p)}if(g!==null)U=!0;else{var Nt=i(m);Nt!==null&&$(P,Nt.startTime-q),U=!1}}break t}finally{g=null,y=B,x=!1}U=void 0}}finally{U?Y():z=!1}}}var Y;if(typeof C=="function")Y=function(){C(V)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,pt=J.port2;J.port1.onmessage=V,Y=function(){pt.postMessage(null)}}else Y=function(){_(V,0)};function $(q,U){I=_(function(){q(r.unstable_now())},U)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(q){q.callback=null},r.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<q?Math.floor(1e3/q):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(q){switch(y){case 1:case 2:case 3:var U=3;break;default:U=y}var B=y;y=U;try{return q()}finally{y=B}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(q,U){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var B=y;y=q;try{return U()}finally{y=B}},r.unstable_scheduleCallback=function(q,U,B){var it=r.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?it+B:it):B=it,q){case 1:var dt=-1;break;case 2:dt=250;break;case 5:dt=1073741823;break;case 4:dt=1e4;break;default:dt=5e3}return dt=B+dt,q={id:v++,callback:U,priorityLevel:q,startTime:B,expirationTime:dt,sortIndex:-1},B>it?(q.sortIndex=B,t(m,q),i(p)===null&&q===i(m)&&(T?(w(I),I=-1):T=!0,$(P,B-it))):(q.sortIndex=dt,t(p,q),E||x||(E=!0,z||(z=!0,Y()))),q},r.unstable_shouldYield=A,r.unstable_wrapCallback=function(q){var U=y;return function(){var B=y;y=U;try{return q.apply(this,arguments)}finally{y=B}}}})(Qd)),Qd}var py;function wE(){return py||(py=1,Zd.exports=AE()),Zd.exports}var Kd={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my;function CE(){if(my)return In;my=1;var r=Nm();function t(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),f=Symbol.for("react.optimistic_key");function d(v,g,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:x===f?f:""+x,children:v,containerInfo:g,implementation:y}}var p=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,In.browser=function(v){return{$$typeof:c,_reason:v}},In.createPortal=function(v,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return d(v,g,null,y)},In.flushSync=function(v){var g=p.T,y=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=g,s.p=y,s.d.f()}},In.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(v,g))},In.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},In.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var y=g.as,x=m(y,g.crossOrigin),E=typeof g.integrity=="string"?g.integrity:void 0,T=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:E,fetchPriority:T}):y==="script"&&s.d.X(v,{crossOrigin:x,integrity:E,fetchPriority:T,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},In.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=m(g.as,g.crossOrigin);s.d.M(v,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(v)},In.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,x=m(y,g.crossOrigin);s.d.L(v,y,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},In.preloadModule=function(v,g){if(typeof v=="string")if(g){var y=m(g.as,g.crossOrigin);s.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(v)},In.requestFormReset=function(v){s.d.r(v)},In.unstable_batchedUpdates=function(v,g){return v(g)},In.useFormState=function(v,g,y){return p.H.useFormState(v,g,y)},In.useFormStatus=function(){return p.H.useHostTransitionStatus()},In.version="19.3.1",In}var gy;function RE(){if(gy)return Kd.exports;gy=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Kd.exports=CE(),Kd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vy;function DE(){if(vy)return Sl;vy=1;var r=wE(),t=Nm(),i=RE();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return p(u),e;if(h===o)return p(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var S=!1,D=u.child;D;){if(D===a){S=!0,a=u,o=h;break}if(D===o){S=!0,o=u,a=h;break}D=D.sibling}if(!S){for(D=h.child;D;){if(D===a){S=!0,a=h,o=u;break}if(D===o){S=!0,o=h,a=u;break}D=D.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}function g(e,n,a,o,u,h){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,o,u,h)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&g(e.child,n,a,o,u,h))return!0;e=e.sibling}return!1}function y(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function x(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function E(e){var n=[null,null],a=y(e);return a===null||T(n,e,a.child,{foundSelf:!1}),n}function T(e,n,a,o){for(;a!==null;){if(a===n)o.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(o.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&T(e,n,a.child,o))return!0;a=a.sibling}return!1}function M(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var _=null,w=null;function C(e,n,a){return e===a?!0:e===n?(_=e,!0):!1}function b(e,n,a){return e===a?(w=e,!1):e===n?(w!==null&&(_=e),!0):!1}function P(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function z(e,n,a){for(var o=0,u=e;u;u=a(u))o++;u=0;for(var h=n;h;h=a(h))u++;for(;0<o-u;)e=a(e),o--;for(;0<u-o;)n=a(n),u--;for(;o--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var I=Object.assign,O=Symbol.for("react.element"),N=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),pt=Symbol.for("react.consumer"),$=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),it=Symbol.for("react.memo"),dt=Symbol.for("react.lazy"),Nt=Symbol.for("react.activity"),Rt=Symbol.for("react.legacy_hidden"),Qt=Symbol.for("react.memo_cache_sentinel"),H=Symbol.for("react.view_transition"),et=Symbol.for("react.recoverable"),K=Symbol.iterator;function j(e){return e===null||typeof e!="object"?null:(e=K&&e[K]||e["@@iterator"],typeof e=="function"?e:null)}var yt=Symbol.for("react.client.reference");function bt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===yt?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case J:return"Profiler";case Y:return"StrictMode";case U:return"Suspense";case B:return"SuspenseList";case Nt:return"Activity";case H:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case $:return e.displayName||"Context";case pt:return(e._context.displayName||"Context")+".Consumer";case q:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case it:return n=e.displayName||null,n!==null?n:bt(e.type)||"Memo";case dt:n=e._payload,e=e._init;try{return bt(e(n))}catch{}}return null}var Mt=Array.isArray,wt=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Ot=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},Et=[],St=-1;function ht(e){return{current:e}}function mt(e){0>St||(e.current=Et[St],Et[St]=null,St--)}function Ct(e,n){St++,Et[St]=e.current,e.current=n}var Dt=ht(null),It=ht(null),le=ht(null),se=ht(null);function F(e,n){switch(Ct(le,n),Ct(It,e),Ct(Dt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?__(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=__(n),e=y_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}mt(Dt),Ct(Dt,e)}function R(){mt(Dt),mt(It),mt(le)}function ot(e){var n=e.memoizedState;n!==null&&(Wr._currentValue=n.memoizedState,Ct(se,e)),n=Dt.current;var a=y_(n,e.type);n!==a&&(Ct(It,e),Ct(Dt,a))}function gt(e){It.current===e&&(mt(Dt),mt(It)),se.current===e&&(mt(se),Wr._currentValue=k)}var Lt,xt;function Wt(e){if(Lt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Lt=n&&n[1]||"",xt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Lt+e+xt}var Gt=!1;function Jt(e,n){if(!e||Gt)return"";Gt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var At=function(){throw Error()};if(Object.defineProperty(At.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(At,[])}catch(Xt){var tt=Xt}Reflect.construct(e,[],At)}else{try{At.call()}catch(Xt){tt=Xt}At=!1;try{var ct=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),At=!0,new e}finally{At&&(ct!==void 0?Object.defineProperty(e.prototype,"props",ct):delete e.prototype.props)}}}else{try{throw Error()}catch(Xt){tt=Xt}(At=e())&&typeof At.catch=="function"&&At.catch(function(){})}}catch(Xt){if(Xt&&tt&&typeof Xt.stack=="string")return[Xt.stack,tt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],D=h[1];if(S&&D){var X=S.split(`
`),at=D.split(`
`);for(u=o=0;o<X.length&&!X[o].includes("DetermineComponentFrameRoot");)o++;for(;u<at.length&&!at[u].includes("DetermineComponentFrameRoot");)u++;if(o===X.length||u===at.length)for(o=X.length-1,u=at.length-1;1<=o&&0<=u&&X[o]!==at[u];)u--;for(;1<=o&&0<=u;o--,u--)if(X[o]!==at[u]){if(o!==1||u!==1)do if(o--,u--,0>u||X[o]!==at[u]){var ft=`
`+X[o].replace(" at new "," at ");return e.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",e.displayName)),ft}while(1<=o&&0<=u);break}}}finally{Gt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Wt(a):""}function te(e,n){switch(e.tag){case 26:case 27:case 5:return Wt(e.type);case 16:return Wt("Lazy");case 13:return e.child!==n&&n!==null?Wt("Suspense Fallback"):Wt("Suspense");case 19:return Wt("SuspenseList");case 0:case 15:return Jt(e.type,!1);case 11:return Jt(e.type.render,!1);case 1:return Jt(e.type,!0);case 31:return Wt("Activity");case 30:return Wt("ViewTransition");default:return""}}function Pt(e){try{var n="",a=null;do n+=te(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var qt=Object.prototype.hasOwnProperty,he=r.unstable_scheduleCallback,ie=r.unstable_cancelCallback,ut=r.unstable_shouldYield,re=r.unstable_requestPaint,W=r.unstable_now,Bt=r.unstable_getCurrentPriorityLevel,kt=r.unstable_ImmediatePriority,$t=r.unstable_UserBlockingPriority,zt=r.unstable_NormalPriority,Ut=r.unstable_LowPriority,ae=r.unstable_IdlePriority,_e=r.log,We=r.unstable_setDisableYieldValue,Re=null,rn=null;function En(e){if(typeof _e=="function"&&We(e),rn&&typeof rn.setStrictMode=="function")try{rn.setStrictMode(Re,e)}catch{}}var Bn=Math.clz32?Math.clz32:Ql,fa=Math.log,Do=Math.LN2;function Ql(e){return e>>>=0,e===0?32:31-(fa(e)/Do|0)|0}var Ss=256,ha=262144,Ms=4194304;function Si(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Es(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var D=o&134217727;return D!==0?(o=D&~h,o!==0?u=Si(o):(S&=D,S!==0?u=Si(S):a||(a=D&~e,a!==0&&(u=Si(a))))):(D=o&~h,D!==0?u=Si(D):S!==0?u=Si(S):a||(a=o&~e,a!==0&&(u=Si(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Fa(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Kl(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var o=31-Bn(a),u=1<<o;n|=e[o],a&=~u}return n}function xf(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jl(){var e=Ms;return Ms<<=1,(Ms&62914560)===0&&(Ms=4194304),e}function No(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ts(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Sf(e,n,a,o,u,h){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var D=e.entanglements,X=e.expirationTimes,at=e.hiddenUpdates;for(a=S&~a;0<a;){var ft=31-Bn(a),At=1<<ft;D[ft]=0,X[ft]=-1;var tt=at[ft];if(tt!==null)for(at[ft]=null,ft=0;ft<tt.length;ft++){var ct=tt[ft];ct!==null&&(ct.lane&=-536870913)}a&=~At}o!==0&&L(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(S&~n))}function L(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Bn(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function st(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Bn(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function vt(e,n){var a=n&-n;return a=(a&42)!==0?1:_t(a),(a&(e.suspendedLanes|n))!==0?0:a}function _t(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function rt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ht(){var e=Ot.p;return e!==0?e:(e=window.event,e===void 0?32:ny(e.type))}function Yt(e,n){var a=Ot.p;try{return Ot.p=e,n()}finally{Ot.p=a}}var Zt=Math.random().toString(36).slice(2),Vt="__reactFiber$"+Zt,ee="__reactProps$"+Zt,pe="__reactContainer$"+Zt,ue="__reactEvents$"+Zt,be="__reactListeners$"+Zt,Ve="__reactHandles$"+Zt,en="__reactResources$"+Zt,Ie="__reactMarker$"+Zt,Oe="__reactLoad$"+Zt;function fe(e){delete e[Vt],delete e[ee],delete e[be],delete e[Ve]}function Be(e){var n;if(n=e[Vt])return n;for(var a=e.parentNode;a;){if(n=a[pe]||a[Vt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=z_(e);e!==null;){if(a=e[Vt])return a;e=z_(e)}return n}e=a,a=e.parentNode}return null}function Ee(e){if(e=e[Vt]||e[pe]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Tn(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function oi(e){var n=e[en];return n||(n=e[en]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Pe(e){e[Ie]=!0}function Ha(e){e[Oe]=void 0}var Je=new Set,jn={};function mn(e,n){cn(e,n),cn(e+"Capture",n)}function cn(e,n){for(jn[e]=n,e=0;e<n.length;e++)Je.add(n[e])}var Fn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fr={},ji={};function HS(e){return qt.call(ji,e)?!0:qt.call(fr,e)?!1:Fn.test(e)?ji[e]=!0:(fr[e]=!0,!1)}var ze=!1;function a0(){var e=ze;return ze=!1,e}function $l(e,n,a){if(HS(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function tc(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function da(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,o)}}function li(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function s0(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function GS(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(S){a=""+S,h.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Mf(e){if(!e._valueTracker){var n=s0(e)?"checked":"value";e._valueTracker=GS(e,n,""+e[n])}}function r0(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=s0(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}var VS=/[\n"\\]/g;function Mi(e){return e.replace(VS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ef(e,n,a,o,u,h,S,D){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+li(n)):e.value!==""+li(n)&&(e.value=""+li(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?S==="number"&&e.value==n?Tf(e,li(e.value)):Tf(e,li(n)):a!=null?Tf(e,li(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?e.name=""+li(D):e.removeAttribute("name")}function o0(e,n,a,o,u,h,S,D){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Mf(e);return}a=a!=null?""+li(a):"",n=n!=null?""+li(n):a,D||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=D?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Mf(e)}function Tf(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function hr(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+li(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function l0(e,n,a){if(n!=null&&(n=""+li(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+li(a):""}function c0(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Mt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=li(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Mf(e)}function dr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var kS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function u0(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||kS.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function f0(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="",ze=!0);for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&(u0(e,u,o),ze=!0)}else for(var h in n)n.hasOwnProperty(h)&&u0(e,h,n[h])}function bf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var XS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),qS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ec(e){return qS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wi(){}var Af=null;function wf(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pr=null,mr=null;function h0(e){var n=Ee(e);if(n&&(e=n.stateNode)){var a=e[ee]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ef(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Mi(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[ee]||null;if(!u)throw Error(s(90));Ef(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&r0(o)}break t;case"textarea":l0(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&hr(e,!!a.multiple,n,!1)}}}var Cf=!1;function d0(e,n,a){if(Cf)return e(n,a);Cf=!0;try{var o=e(n);return o}finally{if(Cf=!1,(pr!==null||mr!==null)&&(eu(),pr&&(n=pr,e=mr,mr=pr=null,h0(n),e)))for(n=0;n<e.length;n++)h0(e[n])}}function Uo(e,n){var a=e.stateNode;if(a===null)return null;var o=a[ee]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Rf=!1;if(pa)try{var Lo={};Object.defineProperty(Lo,"passive",{get:function(){Rf=!0}}),window.addEventListener("test",Lo,Lo),window.removeEventListener("test",Lo,Lo)}catch{Rf=!1}var Ga=null,Df=null,nc=null;function p0(){if(nc)return nc;var e,n=Df,a=n.length,o,u="value"in Ga?Ga.value:Ga.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===u[h-o];o++);return nc=u.slice(e,1<o?1-o:void 0)}function ic(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ac(){return!0}function m0(){return!1}function Wn(e){function n(a,o,u,h,S){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var D in e)e.hasOwnProperty(D)&&(a=e[D],this[D]=a?a(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?ac:m0,this.isPropagationStopped=m0,this}return I(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ac)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ac)},persist:function(){},isPersistent:ac}),n}var Va={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sc=Wn(Va),Oo=I({},Va,{view:0,detail:0}),YS=Wn(Oo),Nf,Uf,Po,rc=I({},Oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Of,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Po&&(Po&&e.type==="mousemove"?(Nf=e.screenX-Po.screenX,Uf=e.screenY-Po.screenY):Uf=Nf=0,Po=e),Nf)},movementY:function(e){return"movementY"in e?e.movementY:Uf}}),g0=Wn(rc),jS=I({},rc,{dataTransfer:0}),WS=Wn(jS),ZS=I({},Oo,{relatedTarget:0}),Lf=Wn(ZS),QS=I({},Va,{animationName:0,elapsedTime:0,pseudoElement:0}),KS=Wn(QS),JS=I({},Va,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$S=Wn(JS),t1=I({},Va,{data:0}),v0=Wn(t1),e1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function a1(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=i1[e])?!!n[e]:!1}function Of(){return a1}var s1=I({},Oo,{key:function(e){if(e.key){var n=e1[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ic(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?n1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Of,charCode:function(e){return e.type==="keypress"?ic(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ic(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),r1=Wn(s1),o1=I({},rc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_0=Wn(o1),l1=I({},Va,{submitter:0}),c1=Wn(l1),u1=I({},Oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Of}),f1=Wn(u1),h1=I({},Va,{propertyName:0,elapsedTime:0,pseudoElement:0}),d1=Wn(h1),p1=I({},rc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),m1=Wn(p1),g1=I({},Va,{newState:0,oldState:0,source:0}),v1=Wn(g1),_1=[9,13,27,32],Pf=pa&&"CompositionEvent"in window,zo=null;pa&&"documentMode"in document&&(zo=document.documentMode);var y1=pa&&"TextEvent"in window&&!zo,y0=pa&&(!Pf||zo&&8<zo&&11>=zo),x0=" ",S0=!1;function M0(e,n){switch(e){case"keyup":return _1.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function E0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gr=!1;function x1(e,n){switch(e){case"compositionend":return E0(n);case"keypress":return n.which!==32?null:(S0=!0,x0);case"textInput":return e=n.data,e===x0&&S0?null:e;default:return null}}function S1(e,n){if(gr)return e==="compositionend"||!Pf&&M0(e,n)?(e=p0(),nc=Df=Ga=null,gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return y0&&n.locale!=="ko"?null:n.data;default:return null}}var M1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function T0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!M1[e.type]:n==="textarea"}function b0(e,n,a,o){pr?mr?mr.push(o):mr=[o]:pr=o,n=ou(n,"onChange"),0<n.length&&(a=new sc("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Io=null,Bo=null;function E1(e){h_(e,0)}function oc(e){var n=Tn(e);if(r0(n))return e}function A0(e,n){if(e==="change")return n}var w0=!1;if(pa){var zf;if(pa){var If="oninput"in document;if(!If){var C0=document.createElement("div");C0.setAttribute("oninput","return;"),If=typeof C0.oninput=="function"}zf=If}else zf=!1;w0=zf&&(!document.documentMode||9<document.documentMode)}function R0(){Io&&(Io.detachEvent("onpropertychange",D0),Bo=Io=null)}function D0(e){if(e.propertyName==="value"&&oc(Bo)){var n=[];b0(n,Bo,e,wf(e)),d0(E1,n)}}function T1(e,n,a){e==="focusin"?(R0(),Io=n,Bo=a,Io.attachEvent("onpropertychange",D0)):e==="focusout"&&R0()}function b1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return oc(Bo)}function A1(e,n){if(e==="click")return oc(n)}function w1(e,n){if(e==="input"||e==="change")return oc(n)}function C1(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ci=typeof Object.is=="function"?Object.is:C1;function Fo(e,n){if(ci(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!qt.call(n,u)||!ci(e[u],n[u]))return!1}return!0}function Bf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function N0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function U0(e,n){var a=N0(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=N0(a)}}function L0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?L0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function O0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Bf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Bf(e.document)}return n}function Ff(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var R1=pa&&"documentMode"in document&&11>=document.documentMode,vr=null,Hf=null,Ho=null,Gf=!1;function P0(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Gf||vr==null||vr!==Bf(o)||(o=vr,"selectionStart"in o&&Ff(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Ho&&Fo(Ho,o)||(Ho=o,o=ou(Hf,"onSelect"),0<o.length&&(n=new sc("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=vr)))}function bs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var _r={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionrun:bs("Transition","TransitionRun"),transitionstart:bs("Transition","TransitionStart"),transitioncancel:bs("Transition","TransitionCancel"),transitionend:bs("Transition","TransitionEnd")},Vf={},z0={};pa&&(z0=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function As(e){if(Vf[e])return Vf[e];if(!_r[e])return e;var n=_r[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in z0)return Vf[e]=n[a];return e}var I0=As("animationend"),B0=As("animationiteration"),F0=As("animationstart"),D1=As("transitionrun"),N1=As("transitionstart"),U1=As("transitioncancel"),H0=As("transitionend"),G0=new Map,kf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");kf.push("scrollEnd");function Oi(e,n){G0.set(e,n),mn(n,[e])}var L1=0;function ma(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Bi.identifierPrefix;var a=L1++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function V0(e){if(e==null||typeof e=="string")return e;var n=null,a=Br;if(a!==null)for(var o=0;o<a.length;o++){var u=e[a[o]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??e.default}function ga(e,n){return e=V0(e),n=V0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var lc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ei=[],yr=0,Xf=0;function cc(){for(var e=yr,n=Xf=yr=0;n<e;){var a=Ei[n];Ei[n++]=null;var o=Ei[n];Ei[n++]=null;var u=Ei[n];Ei[n++]=null;var h=Ei[n];if(Ei[n++]=null,o!==null&&u!==null){var S=o.pending;S===null?u.next=u:(u.next=S.next,S.next=u),o.pending=u}h!==0&&k0(a,u,h)}}function uc(e,n,a,o){Ei[yr++]=e,Ei[yr++]=n,Ei[yr++]=a,Ei[yr++]=o,Xf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function qf(e,n,a,o){return uc(e,n,a,o),fc(e)}function ws(e,n){return uc(e,null,null,n),fc(e)}function k0(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Bn(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function fc(e){if(50<ll)throw ll=0,tu=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var xr={};function O1(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ei(e,n,a,o){return new O1(e,n,a,o)}function Yf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function va(e,n){var a=e.alternate;return a===null?(a=ei(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function X0(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function hc(e,n,a,o,u,h){var S=0;if(o=e,typeof o=="function")Yf(o)&&(S=1);else if(typeof o=="string")S=lE(e,a,Dt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(o){case Nt:return e=ei(31,a,n,u),e.elementType=Nt,e.lanes=h,e;case V:return Cs(a.children,u,h,n);case Y:S=8,u|=24;break;case J:return e=ei(12,a,n,u|2),e.elementType=J,e.lanes=h,e;case U:return e=ei(13,a,n,u),e.elementType=U,e.lanes=h,e;case B:return e=ei(19,a,n,u),e.elementType=B,e.lanes=h,e;case Rt:case H:return e=u|32,e=ei(30,a,n,e),e.elementType=H,e.lanes=h,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case $:S=10;break t;case pt:S=9;break t;case q:S=11;break t;case it:S=14;break t;case dt:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ei(S,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function Cs(e,n,a,o){return e=ei(7,e,o,n),e.lanes=a,e}function jf(e,n,a){return e=ei(6,e,null,n),e.lanes=a,e}function q0(e){var n=ei(18,null,null,0);return n.stateNode=e,n}function Wf(e,n,a){return n=ei(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Y0=new WeakMap;function Ti(e,n){if(typeof e=="object"&&e!==null){var a=Y0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Pt(n)},Y0.set(e,n),n)}return{value:e,source:n,stack:Pt(n)}}var Sr=[],Mr=0,dc=null,Go=0,bi=[],Ai=0,ka=null,Zi=1,Qi="";function _a(e,n){Sr[Mr++]=Go,Sr[Mr++]=dc,dc=e,Go=n}function j0(e,n,a){bi[Ai++]=Zi,bi[Ai++]=Qi,bi[Ai++]=ka,ka=e;var o=Zi;e=Qi;var u=32-Bn(o)-1;o&=~(1<<u),a+=1;var h=32-Bn(n)+u;if(30<h){var S=u-u%5;h=(o&(1<<S)-1).toString(32),o>>=S,u-=S,Zi=1<<32-Bn(n)+u|a<<u|o,Qi=h+e}else Zi=1<<h|a<<u|o,Qi=e}function pc(e){e.return!==null&&(_a(e,1),j0(e,1,0))}function Zf(e){for(;e===dc;)dc=Sr[--Mr],Sr[Mr]=null,Go=Sr[--Mr],Sr[Mr]=null;for(;e===ka;)ka=bi[--Ai],bi[Ai]=null,Qi=bi[--Ai],bi[Ai]=null,Zi=bi[--Ai],bi[Ai]=null}function W0(e,n){bi[Ai++]=Zi,bi[Ai++]=Qi,bi[Ai++]=ka,Zi=n.id,Qi=n.overflow,ka=e}var Cn=null,$e=null,Te=!1,Xa=null,wi=!1,Qf=Error(s(519));function qa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Vo(Ti(n,e)),Qf}function Z0(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Vt]=e,n[ee]=o,a){case"dialog":Ce("cancel",n),Ce("close",n);break;case"iframe":case"object":case"embed":Ce("load",n);break;case"video":case"audio":for(a=0;a<ul.length;a++)Ce(ul[a],n);break;case"source":Ce("error",n);break;case"img":case"image":case"link":Ce("error",n),Ce("load",n);break;case"details":Ce("toggle",n);break;case"input":Ce("invalid",n),o0(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ce("invalid",n);break;case"textarea":Ce("invalid",n),c0(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||g_(n.textContent,a)?(o.popover!=null&&(Ce("beforetoggle",n),Ce("toggle",n)),o.onScroll!=null&&Ce("scroll",n),o.onScrollEnd!=null&&Ce("scrollend",n),o.onClick!=null&&(n.onclick=Wi),n=!0):n=!1,n||qa(e,!0)}function mc(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:wi=!1;return;case 27:case 3:wi=!0;return;default:Cn=Cn.return}}function Er(e){if(e!==Cn)return!1;if(!Te)return mc(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Ad(e.type,e.memoizedProps)),a=!a),a&&$e&&qa(e),mc(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));$e=P_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));$e=P_(e)}else n===27?(n=$e,os(e.type)?(e=Pd,Pd=null,$e=e):$e=n):$e=Cn?Ri(e.stateNode.nextSibling):null;return!0}function Rs(){$e=Cn=null,Te=!1}function Kf(){var e=Xa;return e!==null&&(ai===null?ai=e:ai.push.apply(ai,e),Xa=null),e}function Vo(e){Xa===null?Xa=[e]:Xa.push(e)}var Jf=ht(null),Ds=null,ya=null;function Ya(e,n,a){Ct(Jf,n._currentValue),n._currentValue=a}function xa(e){e._currentValue=Jf.current,mt(Jf)}function gc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function $f(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var S=u.child;h=h.firstContext;t:for(;h!==null;){var D=h;h=u;for(var X=0;X<n.length;X++)if(D.context===n[X]){h.lanes|=a,D=h.alternate,D!==null&&(D.lanes|=a),gc(h.return,a,e),o||(S=null);break t}h=D.next}}else if(u.tag===18){if(S=u.return,S===null)throw Error(s(341));S.lanes|=a,h=S.alternate,h!==null&&(h.lanes|=a),gc(S,a,e),S=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,S=u.alternate,S!==null&&(S.lanes|=a),gc(u.return,a,e),S=u.child,S=S!==null?S.sibling:null):S=u.child;if(S!==null)S.return=u;else for(S=u;S!==null;){if(S===e){S=null;break}if(u=S.sibling,u!==null){u.return=S.return,S=u;break}S=S.return}u=S}}function Ns(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var S=u.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var D=u.type;ci(u.pendingProps.value,S.value)||(e!==null?e.push(D):e=[D])}}else if(u===se.current){if(S=u.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(Wr):e=[Wr])}u=u.return}return e!==null&&$f(n,e,a,o),n.flags|=262144,e!==null}function vc(e){for(e=e.firstContext;e!==null;){if(!ci(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Us(e){Ds=e,ya=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return Q0(Ds,e)}function _c(e,n){return Ds===null&&Us(e),Q0(e,n)}function Q0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ya===null){if(e===null)throw Error(s(308));ya=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ya=ya.next=n;return a}var P1=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},z1=r.unstable_scheduleCallback,I1=r.unstable_NormalPriority,gn={$$typeof:$,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function th(){return{controller:new P1,data:new Map,refCount:0}}function ko(e){e.refCount--,e.refCount===0&&z1(I1,function(){e.controller.abort()})}function K0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var o=n[e];a.indexOf(o)===-1&&a.push(o)}}}var Xo=null;function B1(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var qo=null,eh=0,Ls=0,Tr=null;function F1(e,n){if(qo===null){var a=qo=[];eh=0,Ls=vd(),Tr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return eh++,n.then(J0,J0),n}function J0(){if(--eh===0&&(Xo=null,qo!==null)){Tr!==null&&(Tr.status="fulfilled");var e=qo;qo=null,Ls=0,Tr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function H1(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var $0=wt.S;wt.S=function(e,n){if(qv=W(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&F1(e,n),Xo!==null)for(var a=Vr;a!==null;)K0(a,Xo),a=a.next;if(a=e.types,a!==null){for(var o=Vr;o!==null;)K0(o,a),o=o.next;if(Ls!==0){o=Xo,o===null&&(o=Xo=[]);for(var u=0;u<a.length;u++){var h=a[u];o.indexOf(h)===-1&&o.push(h)}}}$0!==null&&$0(e,n)};var Os=ht(null);function nh(){var e=Os.current;return e!==null?e:Ke.pooledCache}function yc(e,n){n===null?Ct(Os,Os.current):Ct(Os,n.pool)}function tg(){var e=nh();return e===null?null:{parent:gn._currentValue,pool:e}}var br=Error(s(460)),ih=Error(s(474)),xc=Error(s(542)),Sc={then:function(){}};function eg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ng(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Wi,Wi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ag(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(Wi,Wi);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ag(e),e}throw zs=n,br}}function Ps(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(zs=a,br):a}}var zs=null;function ig(){if(zs===null)throw Error(s(459));var e=zs;return zs=null,e}function ag(e){if(e===br||e===xc)throw Error(s(483))}var Ar=null,Yo=0;function Mc(e){var n=Yo;return Yo+=1,Ar===null&&(Ar=[]),ng(Ar,e,n)}function ja(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ec(e,n){throw n.$$typeof===O?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function sg(e){function n(nt,Z){if(e){var lt=nt.deletions;lt===null?(nt.deletions=[Z],nt.flags|=16):lt.push(Z)}}function a(nt,Z){if(!e)return null;for(;Z!==null;)n(nt,Z),Z=Z.sibling;return null}function o(nt){for(var Z=new Map;nt!==null;)nt.key===null?Z.set(nt.index,nt):Z.set(nt.key,nt),nt=nt.sibling;return Z}function u(nt,Z){return nt=va(nt,Z),nt.index=0,nt.sibling=null,nt}function h(nt,Z,lt){return nt.index=lt,e?(lt=nt.alternate,lt!==null?(lt=lt.index,lt<Z?(nt.flags|=2,Z):lt):(nt.flags|=134217730,Z)):(nt.flags|=1048576,Z)}function S(nt){return e&&nt.alternate===null&&(nt.flags|=134217730),nt}function D(nt,Z,lt,Tt){return Z===null||Z.tag!==6?(Z=jf(lt,nt.mode,Tt),Z.return=nt,Z):(Z=u(Z,lt),Z.return=nt,Z)}function X(nt,Z,lt,Tt){var Kt=lt.type;return Kt===V?(nt=ft(nt,Z,lt.props.children,Tt,lt.key),ja(nt,lt),nt):Z!==null&&(Z.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===dt&&Ps(Kt)===Z.type)?(Z=u(Z,lt.props),ja(Z,lt),Z.return=nt,Z):(Z=hc(lt.type,lt.key,lt.props,null,nt.mode,Tt),ja(Z,lt),Z.return=nt,Z)}function at(nt,Z,lt,Tt){return Z===null||Z.tag!==4||Z.stateNode.containerInfo!==lt.containerInfo||Z.stateNode.implementation!==lt.implementation?(Z=Wf(lt,nt.mode,Tt),Z.return=nt,Z):(Z=u(Z,lt.children||[]),Z.return=nt,Z)}function ft(nt,Z,lt,Tt,Kt){return Z===null||Z.tag!==7?(Z=Cs(lt,nt.mode,Tt,Kt),Z.return=nt,Z):(Z=u(Z,lt),Z.return=nt,Z)}function At(nt,Z,lt){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Z=jf(""+Z,nt.mode,lt),Z.return=nt,Z;if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case N:return lt=hc(Z.type,Z.key,Z.props,null,nt.mode,lt),ja(lt,Z),lt.return=nt,lt;case A:return Z=Wf(Z,nt.mode,lt),Z.return=nt,Z;case dt:return Z=Ps(Z),At(nt,Z,lt)}if(Mt(Z)||j(Z))return Z=Cs(Z,nt.mode,lt,null),Z.return=nt,Z;if(typeof Z.then=="function")return At(nt,Mc(Z),lt);if(Z.$$typeof===$)return At(nt,_c(nt,Z),lt);Ec(nt,Z)}return null}function tt(nt,Z,lt,Tt){var Kt=Z!==null?Z.key:null;if(typeof lt=="string"&&lt!==""||typeof lt=="number"||typeof lt=="bigint")return Kt!==null?null:D(nt,Z,""+lt,Tt);if(typeof lt=="object"&&lt!==null){switch(lt.$$typeof){case N:return lt.key===Kt?X(nt,Z,lt,Tt):null;case A:return lt.key===Kt?at(nt,Z,lt,Tt):null;case dt:return lt=Ps(lt),tt(nt,Z,lt,Tt)}if(Mt(lt)||j(lt))return Kt!==null?null:ft(nt,Z,lt,Tt,null);if(typeof lt.then=="function")return tt(nt,Z,Mc(lt),Tt);if(lt.$$typeof===$)return tt(nt,Z,_c(nt,lt),Tt);Ec(nt,lt)}return null}function ct(nt,Z,lt,Tt,Kt){if(typeof Tt=="string"&&Tt!==""||typeof Tt=="number"||typeof Tt=="bigint")return nt=nt.get(lt)||null,D(Z,nt,""+Tt,Kt);if(typeof Tt=="object"&&Tt!==null){switch(Tt.$$typeof){case N:return nt=nt.get(Tt.key===null?lt:Tt.key)||null,X(Z,nt,Tt,Kt);case A:return nt=nt.get(Tt.key===null?lt:Tt.key)||null,at(Z,nt,Tt,Kt);case dt:return Tt=Ps(Tt),ct(nt,Z,lt,Tt,Kt)}if(Mt(Tt)||j(Tt))return nt=nt.get(lt)||null,ft(Z,nt,Tt,Kt,null);if(typeof Tt.then=="function")return ct(nt,Z,lt,Mc(Tt),Kt);if(Tt.$$typeof===$)return ct(nt,Z,lt,_c(Z,Tt),Kt);Ec(Z,Tt)}return null}function Xt(nt,Z,lt,Tt){for(var Kt=null,Ne=null,ce=Z,me=Z=0,yn=null;ce!==null&&me<lt.length;me++){ce.index>me?(yn=ce,ce=null):yn=ce.sibling;var Ue=tt(nt,ce,lt[me],Tt);if(Ue===null){ce===null&&(ce=yn);break}e&&ce&&Ue.alternate===null&&n(nt,ce),Z=h(Ue,Z,me),Ne===null?Kt=Ue:Ne.sibling=Ue,Ne=Ue,ce=yn}if(me===lt.length)return a(nt,ce),Te&&_a(nt,me),Kt;if(ce===null){for(;me<lt.length;me++)ce=At(nt,lt[me],Tt),ce!==null&&(Z=h(ce,Z,me),Ne===null?Kt=ce:Ne.sibling=ce,Ne=ce);return Te&&_a(nt,me),Kt}for(ce=o(ce);me<lt.length;me++)yn=ct(ce,nt,me,lt[me],Tt),yn!==null&&(e&&(Ue=yn.alternate,Ue!==null&&ce.delete(Ue.key===null?me:Ue.key)),Z=h(yn,Z,me),Ne===null?Kt=yn:Ne.sibling=yn,Ne=yn);return e&&ce.forEach(function(hs){return n(nt,hs)}),Te&&_a(nt,me),Kt}function ne(nt,Z,lt,Tt){if(lt==null)throw Error(s(151));for(var Kt=null,Ne=null,ce=Z,me=Z=0,yn=null,Ue=lt.next();ce!==null&&!Ue.done;me++,Ue=lt.next()){ce.index>me?(yn=ce,ce=null):yn=ce.sibling;var hs=tt(nt,ce,Ue.value,Tt);if(hs===null){ce===null&&(ce=yn);break}e&&ce&&hs.alternate===null&&n(nt,ce),Z=h(hs,Z,me),Ne===null?Kt=hs:Ne.sibling=hs,Ne=hs,ce=yn}if(Ue.done)return a(nt,ce),Te&&_a(nt,me),Kt;if(ce===null){for(;!Ue.done;me++,Ue=lt.next())Ue=At(nt,Ue.value,Tt),Ue!==null&&(Z=h(Ue,Z,me),Ne===null?Kt=Ue:Ne.sibling=Ue,Ne=Ue);return Te&&_a(nt,me),Kt}for(ce=o(ce);!Ue.done;me++,Ue=lt.next())Ue=ct(ce,nt,me,Ue.value,Tt),Ue!==null&&(e&&(yn=Ue.alternate,yn!==null&&ce.delete(yn.key===null?me:yn.key)),Z=h(Ue,Z,me),Ne===null?Kt=Ue:Ne.sibling=Ue,Ne=Ue);return e&&ce.forEach(function(xE){return n(nt,xE)}),Te&&_a(nt,me),Kt}function Se(nt,Z,lt,Tt){if(typeof lt=="object"&&lt!==null&&lt.type===V&&lt.key===null&&lt.props.ref===void 0&&(lt=lt.props.children),typeof lt=="object"&&lt!==null){switch(lt.$$typeof){case N:t:{for(var Kt=lt.key;Z!==null;){if(Z.key===Kt){if(Kt=lt.type,Kt===V){if(Z.tag===7){a(nt,Z.sibling),Tt=u(Z,lt.props.children),ja(Tt,lt),Tt.return=nt,nt=Tt;break t}}else if(Z.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===dt&&Ps(Kt)===Z.type){a(nt,Z.sibling),Tt=u(Z,lt.props),ja(Tt,lt),Tt.return=nt,nt=Tt;break t}a(nt,Z);break}else n(nt,Z);Z=Z.sibling}lt.type===V?(Tt=Cs(lt.props.children,nt.mode,Tt,lt.key),ja(Tt,lt),Tt.return=nt,nt=Tt):(Tt=hc(lt.type,lt.key,lt.props,null,nt.mode,Tt),ja(Tt,lt),Tt.return=nt,nt=Tt)}return S(nt);case A:t:{for(Kt=lt.key;Z!==null;){if(Z.key===Kt)if(Z.tag===4&&Z.stateNode.containerInfo===lt.containerInfo&&Z.stateNode.implementation===lt.implementation){a(nt,Z.sibling),Tt=u(Z,lt.children||[]),Tt.return=nt,nt=Tt;break t}else{a(nt,Z);break}else n(nt,Z);Z=Z.sibling}Tt=Wf(lt,nt.mode,Tt),Tt.return=nt,nt=Tt}return S(nt);case dt:return lt=Ps(lt),Se(nt,Z,lt,Tt)}if(Mt(lt))return Xt(nt,Z,lt,Tt);if(j(lt)){if(Kt=j(lt),typeof Kt!="function")throw Error(s(150));return lt=Kt.call(lt),ne(nt,Z,lt,Tt)}if(typeof lt.then=="function")return Se(nt,Z,Mc(lt),Tt);if(lt.$$typeof===$)return Se(nt,Z,_c(nt,lt),Tt);Ec(nt,lt)}return typeof lt=="string"&&lt!==""||typeof lt=="number"||typeof lt=="bigint"?(lt=""+lt,Z!==null&&Z.tag===6?(a(nt,Z.sibling),Tt=u(Z,lt),Tt.return=nt,nt=Tt):(a(nt,Z),Tt=jf(lt,nt.mode,Tt),Tt.return=nt,nt=Tt),S(nt)):a(nt,Z)}return function(nt,Z,lt,Tt){try{Yo=0;var Kt=Se(nt,Z,lt,Tt);return Ar=null,Kt}catch(ce){if(ce===br||ce===xc)throw ce;var Ne=ei(29,ce,null,nt.mode);return Ne.lanes=Tt,Ne.return=nt,Ne}finally{}}}var Is=sg(!0),rg=sg(!1),Wa=!1;function ah(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function sh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Qa(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Fe&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=fc(e),k0(e,null,a),n}return uc(e,o,n,a),fc(e)}function jo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,st(e,a)}}function rh(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=S:h=h.next=S,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var oh=!1;function Wo(){if(oh){var e=Tr;if(e!==null)throw e}}function Zo(e,n,a,o){oh=!1;var u=e.updateQueue;Wa=!1;var h=u.firstBaseUpdate,S=u.lastBaseUpdate,D=u.shared.pending;if(D!==null){u.shared.pending=null;var X=D,at=X.next;X.next=null,S===null?h=at:S.next=at,S=X;var ft=e.alternate;ft!==null&&(ft=ft.updateQueue,D=ft.lastBaseUpdate,D!==S&&(D===null?ft.firstBaseUpdate=at:D.next=at,ft.lastBaseUpdate=X))}if(h!==null){var At=u.baseState;S=0,ft=at=X=null,D=h;do{var tt=D.lane&-536870913,ct=tt!==D.lane;if(ct?(De&tt)===tt:(o&tt)===tt){tt!==0&&tt===Ls&&(oh=!0),ft!==null&&(ft=ft.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});t:{var Xt=e,ne=D;tt=n;var Se=a;switch(ne.tag){case 1:if(Xt=ne.payload,typeof Xt=="function"){At=Xt.call(Se,At,tt);break t}At=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=ne.payload,tt=typeof Xt=="function"?Xt.call(Se,At,tt):Xt,tt==null)break t;At=I({},At,tt);break t;case 2:Wa=!0}}tt=D.callback,tt!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=u.callbacks,ct===null?u.callbacks=[tt]:ct.push(tt))}else ct={lane:tt,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ft===null?(at=ft=ct,X=At):ft=ft.next=ct,S|=tt;if(D=D.next,D===null){if(D=u.shared.pending,D===null)break;ct=D,D=ct.next,ct.next=null,u.lastBaseUpdate=ct,u.shared.pending=null}}while(!0);ft===null&&(X=At),u.baseState=X,u.firstBaseUpdate=at,u.lastBaseUpdate=ft,h===null&&(u.shared.lanes=0),is|=S,e.lanes=S,e.memoizedState=At}}function og(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function lg(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)og(a[e],n)}var Ka=ht(null),Tc=ht(0);function cg(e,n){e=ba,Ct(Tc,e),Ct(Ka,n),ba=e|n.baseLanes}function lh(){Ct(Tc,ba),Ct(Ka,Ka.current)}function ch(){ba=Tc.current,mt(Ka),mt(Tc)}var Ln=ht(null),Hn=null;function Ja(e){var n=e.alternate;Ct(On,On.current&1),Ct(Ln,e),Hn===null&&(n===null||Ka.current!==null||n.memoizedState!==null)&&(Hn=e)}function uh(e){Ct(On,On.current),Ct(Ln,e),Hn===null&&(Hn=e)}function ug(e){e.tag===22?(Ct(On,On.current),Ct(Ln,e),Hn===null&&(Hn=e)):$a()}function $a(){Ct(On,On.current),Ct(Ln,Ln.current)}function ui(e){mt(Ln),Hn===e&&(Hn=null),mt(On)}var On=ht(0);function Qo(e,n){Ct(Ln,Ln.current),Ct(On,n)}function fh(e){mt(On),mt(Ln),Hn===e&&(Hn=null)}function bc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ld(a)||Od(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Sa=0,xe=null,Ze=null,vn=null,Ac=!1,wr=!1,Bs=!1,wc=0,Ko=0,Cr=null,G1=0;function un(){throw Error(s(321))}function hh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ci(e[a],n[a]))return!1;return!0}function dh(e,n,a,o,u,h){return Sa=h,xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,wt.H=e===null||e.memoizedState===null?jg:Wg,Bs=!1,h=a(o,u),Bs=!1,wr&&(h=hg(n,a,o,u)),fg(e),h}function fg(e){wt.H=Oc;var n=Ze!==null&&Ze.next!==null;if(Sa=0,vn=Ze=xe=null,Ac=!1,Ko=0,Cr=null,n)throw Error(s(300));e===null||_n||(e=e.dependencies,e!==null&&vc(e)&&(_n=!0))}function hg(e,n,a,o){xe=e;var u=0;do{if(wr&&(Cr=null),Ko=0,wr=!1,25<=u)throw Error(s(301));if(u+=1,vn=Ze=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}wt.H=Z1,h=n(a,o)}while(wr);return h}function V1(){var e=wt.H,n=e.useState()[0];return n=typeof n.then=="function"?Jo(n):n,e=e.useState()[0],(Ze!==null?Ze.memoizedState:null)!==e&&(xe.flags|=1024),n}function ph(){var e=wc!==0;return wc=0,e}function mh(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function gh(e){if(Ac){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ac=!1}Sa=0,vn=Ze=xe=null,wr=!1,Ko=wc=0,Cr=null}function Zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?xe.memoizedState=vn=e:vn=vn.next=e,vn}function dn(){if(Ze===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var n=vn===null?xe.memoizedState:vn.next;if(n!==null)vn=n,Ze=e;else{if(e===null)throw xe.alternate===null?Error(s(467)):Error(s(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},vn===null?xe.memoizedState=vn=e:vn=vn.next=e}return vn}function Cc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Jo(e){var n=Ko;return Ko+=1,Cr===null&&(Cr=[]),e=ng(Cr,e,n),n=xe,(vn===null?n.memoizedState:vn.next)===null&&(n=n.alternate,wt.H=n===null||n.memoizedState===null?jg:Wg),e}function Rc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Jo(e);if(e.$$typeof===et)return;if(e.$$typeof===$)return Un(e)}throw Error(s(438,String(e)))}function vh(e){var n=null,a=xe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=xe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Cc(),xe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=Qt;return n.index++,a}function Ma(e,n){return typeof n=="function"?n(e):n}function Dc(e){var n=dn();return _h(n,Ze,e)}function _h(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var S=u.next;u.next=h.next,h.next=S}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var D=S=null,X=null,at=n,ft=!1;do{var At=at.lane&-536870913;if(At!==at.lane?(De&At)===At:(Sa&At)===At){var tt=at.revertLane;if(tt===0)X!==null&&(X=X.next={lane:0,revertLane:0,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null}),At===Ls&&(ft=!0);else if((Sa&tt)===tt){at=at.next,tt===Ls&&(ft=!0);continue}else At={lane:0,revertLane:at.revertLane,gesture:null,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},X===null?(D=X=At,S=h):X=X.next=At,xe.lanes|=tt,is|=tt;At=at.action,Bs&&a(h,At),h=at.hasEagerState?at.eagerState:a(h,At)}else tt={lane:At,revertLane:at.revertLane,gesture:at.gesture,action:at.action,hasEagerState:at.hasEagerState,eagerState:at.eagerState,next:null},X===null?(D=X=tt,S=h):X=X.next=tt,xe.lanes|=At,is|=At;at=at.next}while(at!==null&&at!==n);if(X===null?S=h:X.next=D,!ci(h,e.memoizedState)&&(_n=!0,ft&&(a=Tr,a!==null)))throw a;e.memoizedState=h,e.baseState=S,e.baseQueue=X,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function yh(e){var n=dn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var S=u=u.next;do h=e(h,S.action),S=S.next;while(S!==u);ci(h,n.memoizedState)||(_n=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function dg(e,n,a){var o=xe,u=dn(),h=Te;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!ci((Ze||u).memoizedState,a);if(S&&(u.memoizedState=a,_n=!0),u=u.queue,Mh(gg.bind(null,o,u,e),[e]),e=u.getSnapshot!==n||S||vn!==null&&(vn.memoizedState.tag&1)!==0,Rr(e?9:8,{destroy:void 0},mg.bind(null,o,u,a,n),null),e){if(o.flags|=2048,Ke===null)throw Error(s(349));h||(Sa&127)!==0||pg(o,n,a)}return a}function pg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=xe.updateQueue,n===null?(n=Cc(),xe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function mg(e,n,a,o){n.value=a,n.getSnapshot=o,vg(n)&&_g(e)}function gg(e,n,a){return a(function(){vg(n)&&_g(e)})}function vg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ci(e,a)}catch{return!0}}function _g(e){var n=ws(e,2);n!==null&&si(n,e,2)}function xh(e){var n=Zn();if(typeof e=="function"){var a=e;if(e=a(),Bs){En(!0);try{a()}finally{En(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:e},n}function yg(e,n,a,o){return e.baseState=a,_h(e,Ze,typeof o=="function"?o:Ma)}function k1(e,n,a,o,u){if(Lc(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};wt.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,xg(n,h)):(h.next=a.next,n.pending=a.next=h)}}function xg(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=wt.T,S={};S.types=h!==null?h.types:null,wt.T=S;try{var D=a(u,o),X=wt.S;X!==null&&X(S,D),Sg(e,n,D)}catch(at){Sh(e,n,at)}finally{h!==null&&S.types!==null&&(h.types=S.types),wt.T=h}}else try{h=a(u,o),Sg(e,n,h)}catch(at){Sh(e,n,at)}}function Sg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){Mg(e,n,o)},function(o){return Sh(e,n,o)}):Mg(e,n,a)}function Mg(e,n,a){n.status="fulfilled",n.value=a,Eg(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,xg(e,a)))}function Sh(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Eg(n),n=n.next;while(n!==o)}e.action=null}function Eg(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Tg(e,n){return n}function bg(e,n){if(Te){var a=Ke.formState;if(a!==null){t:{var o=xe;if(Te){if($e){e:{for(var u=$e,h=wi;u.nodeType!==8;){if(!h){u=null;break e}if(u=Ri(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){$e=Ri(u.nextSibling),o=u.data==="F!";break t}}qa(o)}o=!1}o&&(n=a[0])}}return a=Zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Tg,lastRenderedState:n},a.queue=o,a=Xg.bind(null,xe,o),o.dispatch=a,o=xh(!1),h=wh.bind(null,xe,!1,o.queue),o=Zn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=k1.bind(null,xe,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Ag(e){var n=dn();return wg(n,Ze,e)}function wg(e,n,a){if(n=_h(e,n,Tg)[0],e=Dc(Ma)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Jo(n)}catch(S){throw S===br?xc:S}else o=n;n=dn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(xe.flags|=2048,Rr(9,{destroy:void 0},X1.bind(null,u,a),null)),[o,h,e]}function X1(e,n){e.action=n}function Cg(e){var n=dn(),a=Ze;if(a!==null)return wg(n,a,e);dn(),n=n.memoizedState,a=dn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Rr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=xe.updateQueue,n===null&&(n=Cc(),xe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Rg(){return dn().memoizedState}function Nc(e,n,a,o){var u=Zn();xe.flags|=e,u.memoizedState=Rr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Uc(e,n,a,o){var u=dn();o=o===void 0?null:o;var h=u.memoizedState.inst;Ze!==null&&o!==null&&hh(o,Ze.memoizedState.deps)?u.memoizedState=Rr(n,h,a,o):(xe.flags|=e,u.memoizedState=Rr(1|n,h,a,o))}function Dg(e,n){Nc(8390656,8,e,n)}function Mh(e,n){Uc(2048,8,e,n)}function q1(e){xe.flags|=4;var n=xe.updateQueue;if(n===null)n=Cc(),xe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Ng(e){var n=dn().memoizedState;return q1({ref:n,nextImpl:e}),function(){if((Fe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Ug(e,n){return Uc(4,2,e,n)}function Lg(e,n){return Uc(4,4,e,n)}function Og(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Pg(e,n,a){a=a!=null?a.concat([e]):null,Uc(4,4,Og.bind(null,n,e),a)}function Eh(){}function zg(e,n){var a=dn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&hh(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Ig(e,n){var a=dn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&hh(n,o[1]))return o[0];if(o=e(),Bs){En(!0);try{e()}finally{En(!1)}}return a.memoizedState=[o,n],o}function Th(e,n,a){return a===void 0||(Sa&1073741824)!==0&&(De&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=jv(),xe.lanes|=e,is|=e,a)}function Bg(e,n,a,o){return ci(a,n)?a:Ka.current!==null?(e=Th(e,a,o),ci(e,n)||(_n=!0),e):(Sa&106)===0||(Sa&1073741824)!==0&&(De&261930)===0?(_n=!0,e.memoizedState=a):(e=jv(),xe.lanes|=e,is|=e,n)}function Fg(e,n,a,o,u){var h=Ot.p;Ot.p=h!==0&&8>h?h:8;var S=wt.T,D={};D.types=S!==null?S.types:null,wt.T=D,wh(e,!1,n,a);try{var X=u(),at=wt.S;if(at!==null&&at(D,X),X!==null&&typeof X=="object"&&typeof X.then=="function"){var ft=H1(X,o);$o(e,n,ft,pi(e))}else $o(e,n,o,pi(e))}catch(At){$o(e,n,{then:function(){},status:"rejected",reason:At},pi())}finally{Ot.p=h,S!==null&&D.types!==null&&(S.types=D.types),wt.T=S}}function Y1(){}function bh(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=Hg(e).queue;Fg(e,u,n,k,a===null?Y1:function(){return Gg(e),a(o)})}function Hg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:k},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Gg(e){var n=Hg(e);n.next===null&&(n=e.alternate.memoizedState),$o(e,n.next.queue,{},pi())}function Ah(){return Un(Wr)}function Vg(){return dn().memoizedState}function kg(){return dn().memoizedState}function j1(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=pi();e=Za(a);var o=Qa(n,e,a);o!==null&&(si(o,n,a),jo(o,n,a)),n={cache:th()},e.payload=n;return}n=n.return}}function W1(e,n,a){var o=pi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Lc(e)?qg(n,a):(a=qf(e,n,a,o),a!==null&&(si(a,e,o),Yg(a,n,o)))}function Xg(e,n,a){var o=pi();$o(e,n,a,o)}function $o(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Lc(e))qg(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,D=h(S,a);if(u.hasEagerState=!0,u.eagerState=D,ci(D,S))return uc(e,n,u,0),Ke===null&&cc(),!1}catch{}finally{}if(a=qf(e,n,u,o),a!==null)return si(a,e,o),Yg(a,n,o),!0}return!1}function wh(e,n,a,o){if(o={lane:2,revertLane:vd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Lc(e)){if(n)throw Error(s(479))}else n=qf(e,a,o,2),n!==null&&si(n,e,2)}function Lc(e){var n=e.alternate;return e===xe||n!==null&&n===xe}function qg(e,n){wr=Ac=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Yg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,st(e,a)}}var Oc={readContext:Un,use:Rc,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un,useEffectEvent:un},jg={readContext:Un,use:Rc,useCallback:function(e,n){return Zn().memoizedState=[e,n===void 0?null:n],e},useContext:Un,useEffect:Dg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Nc(4194308,4,Og.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Nc(4194308,4,e,n)},useInsertionEffect:function(e,n){Nc(4,2,e,n)},useMemo:function(e,n){var a=Zn();n=n===void 0?null:n;var o=e();if(Bs){En(!0);try{e()}finally{En(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Zn();if(a!==void 0){var u=a(n);if(Bs){En(!0);try{a(n)}finally{En(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=W1.bind(null,xe,e),[o.memoizedState,e]},useRef:function(e){var n=Zn();return e={current:e},n.memoizedState=e},useState:function(e){e=xh(e);var n=e.queue,a=Xg.bind(null,xe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Eh,useDeferredValue:function(e,n){var a=Zn();return Th(a,e,n)},useTransition:function(){var e=xh(!1);return e=Fg.bind(null,xe,e.queue,!0,!1),Zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=xe,u=Zn();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ke===null)throw Error(s(349));(De&127)!==0||pg(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Dg(gg.bind(null,o,h,e),[e]),o.flags|=2048,Rr(9,{destroy:void 0},mg.bind(null,o,h,a,n),null),a},useId:function(){var e=Zn(),n=Ke.identifierPrefix;if(Te){var a=Qi,o=Zi;a=(o&~(1<<32-Bn(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=wc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=G1++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ah,useFormState:bg,useActionState:bg,useOptimistic:function(e){var n=Zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=wh.bind(null,xe,!0,a),a.dispatch=n,[e,n]},useMemoCache:vh,useCacheRefresh:function(){return Zn().memoizedState=j1.bind(null,xe)},useEffectEvent:function(e){var n=Zn(),a={impl:e};return n.memoizedState=a,function(){if((Fe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Wg={readContext:Un,use:Rc,useCallback:zg,useContext:Un,useEffect:Mh,useImperativeHandle:Pg,useInsertionEffect:Ug,useLayoutEffect:Lg,useMemo:Ig,useReducer:Dc,useRef:Rg,useState:function(){return Dc(Ma)},useDebugValue:Eh,useDeferredValue:function(e,n){var a=dn();return Bg(a,Ze.memoizedState,e,n)},useTransition:function(){var e=Dc(Ma)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:Jo(e),n]},useSyncExternalStore:dg,useId:Vg,useHostTransitionStatus:Ah,useFormState:Ag,useActionState:Ag,useOptimistic:function(e,n){var a=dn();return yg(a,Ze,e,n)},useMemoCache:vh,useCacheRefresh:kg,useEffectEvent:Ng},Z1={readContext:Un,use:Rc,useCallback:zg,useContext:Un,useEffect:Mh,useImperativeHandle:Pg,useInsertionEffect:Ug,useLayoutEffect:Lg,useMemo:Ig,useReducer:yh,useRef:Rg,useState:function(){return yh(Ma)},useDebugValue:Eh,useDeferredValue:function(e,n){var a=dn();return Ze===null?Th(a,e,n):Bg(a,Ze.memoizedState,e,n)},useTransition:function(){var e=yh(Ma)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:Jo(e),n]},useSyncExternalStore:dg,useId:Vg,useHostTransitionStatus:Ah,useFormState:Cg,useActionState:Cg,useOptimistic:function(e,n){var a=dn();return Ze!==null?yg(a,Ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:vh,useCacheRefresh:kg,useEffectEvent:Ng};function Ch(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:I({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Rh={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=pi(),u=Za(o);u.payload=n,a!=null&&(u.callback=a),n=Qa(e,u,o),n!==null&&(si(n,e,o),jo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=pi(),u=Za(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Qa(e,u,o),n!==null&&(si(n,e,o),jo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=pi(),o=Za(a);o.tag=2,n!=null&&(o.callback=n),n=Qa(e,o,a),n!==null&&(si(n,e,a),jo(n,e,a))}};function Zg(e,n,a,o,u,h,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!Fo(a,o)||!Fo(u,h):!0}function Qg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Rh.enqueueReplaceState(n,n.state,null)}function Fs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=I({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function Kg(e){lc(e)}function Jg(e){console.error(e)}function $g(e){lc(e)}function Pc(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function tv(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Dh(e,n,a){return a=Za(a),a.tag=3,a.payload={element:null},a.callback=function(){Pc(e,n)},a}function ev(e){return e=Za(e),e.tag=3,e}function nv(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){tv(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){tv(n,a,o),typeof u!="function"&&(as===null?as=new Set([this]):as.add(this));var D=o.stack;this.componentDidCatch(o.value,{componentStack:D!==null?D:""})})}function Q1(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ns(n,a,u,!0),a=Ln.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Hn===null?nu():a.alternate===null&&fn===0&&(fn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Sc?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),pd(e,o,u)),!1;case 22:return a.flags|=65536,o===Sc?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),pd(e,o,u)),!1}throw Error(s(435,a.tag))}return pd(e,o,u),nu(),!1}if(Te)return n=Ln.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==Qf&&(e=Error(s(422),{cause:o}),Vo(Ti(e,a)))):(o!==Qf&&(n=Error(s(423),{cause:o}),Vo(Ti(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=Ti(o,a),u=Dh(e.stateNode,o,u),rh(e,u),fn!==4&&(fn=2)),!1;var h=Error(s(520),{cause:o});if(h=Ti(h,a),ol===null?ol=[h]:ol.push(h),fn!==4&&(fn=2),n===null)return!0;o=Ti(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Dh(a.stateNode,o,e),rh(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(as===null||!as.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=ev(u),nv(u,e,a,o),rh(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Nh=Error(s(461)),_n=!1;function bn(e,n,a,o){n.child=e===null?rg(n,null,a,o):Is(n,e.child,a,o)}function iv(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var S={};for(var D in o)D!=="ref"&&(S[D]=o[D])}else S=o;return Us(n),o=dh(e,n,a,S,h,u),D=ph(),e!==null&&!_n?(mh(e,n,u),Ea(e,n,u)):(Te&&D&&pc(n),n.flags|=1,bn(e,n,o,u),n.child)}function av(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Yf(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,sv(e,n,h,o,u)):(e=hc(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Fh(e,u)){var S=h.memoizedProps;if(a=a.compare,a=a!==null?a:Fo,a(S,o)&&e.ref===n.ref)return Ea(e,n,u)}return n.flags|=1,e=va(h,o),e.ref=n.ref,e.return=n,n.child=e}function sv(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(Fo(h,o)&&e.ref===n.ref)if(_n=!1,n.pendingProps=o=h,Fh(e,u))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,Ea(e,n,u)}return Uh(e,n,a,o,u)}function rv(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return ov(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&yc(n,h!==null?h.cachePool:null),h!==null?cg(n,h):lh(),ug(n);else return o=n.lanes=536870912,ov(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(yc(n,h.cachePool),cg(n,h),$a(),n.memoizedState=null):(e!==null&&yc(n,null),lh(),$a());return bn(e,n,u,a),n.child}function tl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ov(e,n,a,o,u){var h=nh();return h=h===null?null:{parent:gn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&yc(n,null),lh(),ug(n),e!==null&&Ns(e,n,o,!0),n.childLanes=u,null}function zc(e,n){return n=Ic({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function lv(e,n,a){return Is(n,e.child,null,a),e=zc(n,n.pendingProps),e.flags|=2,ui(n),n.memoizedState=null,e}function K1(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(o.mode==="hidden")return e=zc(n,o),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},tl(null,e);if(uh(n),(e=$e)?(e=O_(e,wi),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ka!==null?{id:Zi,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},a=q0(e),a.return=n,n.child=a,Cn=n,$e=null)):e=null,e===null)throw qa(n);return n.lanes=536870912,null}return zc(n,o)}var h=e.memoizedState;if(h!==null){var S=h.dehydrated;if(uh(n),u)if(n.flags&256)n.flags&=-257,n=lv(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(_n||Ns(e,n,a,!1),u=(a&e.childLanes)!==0,_n||u){if(Ka.current===null){if(o=Ke,o!==null&&(S=vt(o,a),S!==0&&S!==h.retryLane))throw h.retryLane=S,ws(e,S),si(o,e,S),Nh;nu()}n=lv(e,n,a)}else e=h.treeContext,$e=Ri(S.nextSibling),Cn=n,Te=!0,Xa=null,wi=!1,e!==null&&W0(n,e),n=zc(n,o),n.flags|=134221824;return n}return e=va(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Dr(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Uh(e,n,a,o,u){return Us(n),a=dh(e,n,a,o,void 0,u),o=ph(),e!==null&&!_n?(mh(e,n,u),Ea(e,n,u)):(Te&&o&&pc(n),n.flags|=1,bn(e,n,a,u),n.child)}function cv(e,n,a,o,u,h){return Us(n),n.updateQueue=null,a=hg(n,o,a,u),fg(e),o=ph(),e!==null&&!_n?(mh(e,n,h),Ea(e,n,h)):(Te&&o&&pc(n),n.flags|=1,bn(e,n,a,h),n.child)}function uv(e,n,a,o,u){if(Us(n),n.stateNode===null){var h=xr,S=a.contextType;typeof S=="object"&&S!==null&&(h=Un(S)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Rh,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},ah(n),S=a.contextType,h.context=typeof S=="object"&&S!==null?Un(S):xr,h.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Ch(n,a,S,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&Rh.enqueueReplaceState(h,h.state,null),Zo(n,o,h,u),Wo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var D=n.memoizedProps,X=Fs(a,D);h.props=X;var at=h.context,ft=a.contextType;S=xr,typeof ft=="object"&&ft!==null&&(S=Un(ft));var At=a.getDerivedStateFromProps;ft=typeof At=="function"||typeof h.getSnapshotBeforeUpdate=="function",D=n.pendingProps!==D,ft||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(D||at!==S)&&Qg(n,h,o,S),Wa=!1;var tt=n.memoizedState;h.state=tt,Zo(n,o,h,u),Wo(),at=n.memoizedState,D||tt!==at||Wa?(typeof At=="function"&&(Ch(n,a,At,o),at=n.memoizedState),(X=Wa||Zg(n,a,X,o,tt,at,S))?(ft||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=at),h.props=o,h.state=at,h.context=S,o=X):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,sh(e,n),S=n.memoizedProps,ft=Fs(a,S),h.props=ft,At=n.pendingProps,tt=h.context,at=a.contextType,X=xr,typeof at=="object"&&at!==null&&(X=Un(at)),D=a.getDerivedStateFromProps,(at=typeof D=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==At||tt!==X)&&Qg(n,h,o,X),Wa=!1,tt=n.memoizedState,h.state=tt,Zo(n,o,h,u),Wo();var ct=n.memoizedState;S!==At||tt!==ct||Wa||e!==null&&e.dependencies!==null&&vc(e.dependencies)?(typeof D=="function"&&(Ch(n,a,D,o),ct=n.memoizedState),(ft=Wa||Zg(n,a,ft,o,tt,ct,X)||e!==null&&e.dependencies!==null&&vc(e.dependencies))?(at||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ct,X),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ct,X)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ct),h.props=o,h.state=ct,h.context=X,o=ft):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Dr(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Is(n,e.child,null,u),n.child=Is(n,null,a,u)):bn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=Ea(e,n,u),e}function fv(e,n,a,o){return Rs(),n.flags|=256,bn(e,n,a,o),n.child}var Lh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Oh(e){return{baseLanes:e,cachePool:tg()}}function Ph(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=di),e}function hv(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=e!==null&&e.memoizedState===null?!1:(On.current&2)!==0),S&&(u=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(u?Ja(n):$a(),(e=$e)?(e=O_(e,wi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ka!==null?{id:Zi,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},a=q0(e),a.return=n,n.child=a,Cn=n,$e=null)):e=null,e===null)throw qa(n);return Od(e)?n.lanes=32:n.lanes=536870912,null}return h=o.children,o=o.fallback,u?($a(),u=n.mode,h=Ic({mode:"hidden",children:h},u),o=Cs(o,u,a,null),h.return=n,o.return=n,h.sibling=o,n.child=h,o=n.child,o.memoizedState=Oh(a),o.childLanes=Ph(e,S,a),n.memoizedState=Lh,tl(null,o)):(Ja(n),zh(n,h))}var D=e.memoizedState;if(D!==null){var X=D.dehydrated;if(X!==null)return J1(e,n,h,S,o,X,D,a)}return u?($a(),u=o.fallback,h=n.mode,D=e.child,X=D.sibling,o=va(D,{mode:"hidden",children:o.children}),o.subtreeFlags=D.subtreeFlags&1206910976,X!==null?u=va(X,u):(u=Cs(u,h,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,tl(null,o),o=n.child,u=e.child.memoizedState,u===null?u=Oh(a):(h=u.cachePool,h!==null?(D=gn._currentValue,h=h.parent!==D?{parent:D,pool:D}:h):h=tg(),u={baseLanes:u.baseLanes|a,cachePool:h}),o.memoizedState=u,o.childLanes=Ph(e,S,a),n.memoizedState=Lh,tl(e.child,o)):(Ja(n),a=e.child,e=a.sibling,a=va(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function zh(e,n){return n=Ic({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ic(e,n){return e=ei(22,e,null,n),e.lanes=0,e}function Bc(e,n,a){return Is(n,e.child,null,a),e=zh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function J1(e,n,a,o,u,h,S,D){if(a)return n.flags&256?(Ja(n),n.flags&=-257,Bc(e,n,D)):n.memoizedState!==null?($a(),n.child=e.child,n.flags|=128,null):($a(),h=u.fallback,S=n.mode,u=Ic({mode:"visible",children:u.children},S),h=Cs(h,S,D,null),h.flags|=2,u.return=n,h.return=n,u.sibling=h,n.child=u,Is(n,e.child,null,D),u=n.child,u.memoizedState=Oh(D),u.childLanes=Ph(e,o,D),n.memoizedState=Lh,tl(null,u));if(Ja(n),Od(h)){if(o=h.nextSibling&&h.nextSibling.dataset,o)var X=o.dgst;return o=X,o!==""&&(u=Error(s(419)),u.stack="",u.digest=o,Vo({value:u,source:null,stack:null})),Bc(e,n,D)}if(_n||Ns(e,n,D,!1),o=(D&e.childLanes)!==0,_n||o){if(Ka.current!==null)return Bc(e,n,D);if(o=Ke,o!==null&&(u=vt(o,D),u!==0&&u!==S.retryLane))throw S.retryLane=u,ws(e,u),si(o,e,u),Nh;return Ld(h)||nu(),Bc(e,n,D)}return Ld(h)?(n.flags|=192,n.child=e.child,null):(e=S.treeContext,$e=Ri(h.nextSibling),Cn=n,Te=!0,Xa=null,wi=!1,e!==null&&W0(n,e),n=zh(n,u.children),n.flags|=134221824,n)}function dv(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),gc(e.return,n,a)}function pv(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&bc(a)===null&&(n=e),e=e.sibling}return n}function Fc(e,n,a,o,u,h){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=u,S.treeForkCount=h)}function Ih(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function Bh(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var S=On.current;if(n.flags&128)return Qo(n,S),null;var D=(S&2)!==0;if(D?(S=S&1|2,n.flags|=128):S&=1,Qo(n,S),u==="backwards"&&e!==null?(Ih(e),bn(e,n,o,a),Ih(e)):bn(e,n,o,a),o=Te?Go:0,!D&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dv(e,a,n);else if(e.tag===19)dv(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"backwards":a=pv(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,Ih(n)),Fc(n,!0,u,null,h,o);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&bc(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Fc(n,!0,a,null,h,o);break;case"together":Fc(n,!1,null,null,void 0,o);break;case"independent":n.memoizedState=null;break;default:a=pv(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Fc(n,!1,u,a,h,o)}return n.child}function mv(e,n,a){var o=n.pendingProps;return Ya(n,n.type,o.value),bn(e,n,o.children,a),n.child}function Ea(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),is|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ns(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=va(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=va(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Fh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&vc(e)))}function $1(e,n,a){switch(n.tag){case 3:F(n,n.stateNode.containerInfo),Ya(n,gn,e.memoizedState.cache),Rs();break;case 27:case 5:ot(n);break;case 4:F(n,n.stateNode.containerInfo);break;case 10:Ya(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,uh(n),null;break;case 13:var o=n.memoizedState;if(o!==null){if(o.dehydrated!==null)return Ja(n),n.flags|=128,null;o=Ns(e,n,a,!1);var u=n.child.childLanes;return o||(a&u)!==0?hv(e,n,a):(Ja(n),e=Ea(e,n,a),e!==null?e.sibling:null)}Ja(n);break;case 19:if(n.flags&128)return Bh(e,n,a);if(u=(e.flags&128)!==0,o=(a&n.childLanes)!==0,o||(Ns(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Bh(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Qo(n,On.current),o)break;return null;case 22:return n.lanes=0,rv(e,n,a,n.pendingProps);case 24:Ya(n,gn,e.memoizedState.cache)}return Ea(e,n,a)}function gv(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!Fh(e,a)&&(n.flags&128)===0)return _n=!1,$1(e,n,a);_n=(e.flags&131072)!==0}else _n=!1,Te&&(n.flags&1048576)!==0&&j0(n,Go,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Ps(n.elementType),n.type=e,typeof e=="function")Yf(e)?(o=Fs(e,o),n.tag=1,n=uv(null,n,e,o,a)):(n.tag=0,n=Uh(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===q){n.tag=11,n=iv(null,n,e,o,a);break t}else if(u===it){n.tag=14,n=av(null,n,e,o,a);break t}else if(u===$){n.tag=10,n.type=e,n=mv(null,n,a);break t}}throw n=bt(e)||e,Error(s(306,n,""))}}return n;case 0:return Uh(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Fs(o,n.pendingProps),uv(e,n,o,u,a);case 3:t:{if(F(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,sh(e,n),Zo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,Ya(n,gn,o),o!==h.cache&&$f(n,[gn],a,!0),Wo(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=fv(e,n,o,a);break t}else if(o!==u){u=Ti(Error(s(424)),n),Vo(u),n=fv(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=Ri(e.firstChild),Cn=n,Te=!0,Xa=null,wi=!0,a=rg(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Rs(),o===u){n=Ea(e,n,a);break t}bn(e,n,o,a)}n=n.child}return n;case 26:return Dr(e,n),e===null?(a=G_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(n.stateNode=x_(n.type,n.pendingProps,le.current,n)):n.memoizedState=G_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ot(n),e===null&&Te&&(o=n.stateNode=I_(n.type,n.pendingProps,le.current),Cn=n,wi=!0,u=$e,os(n.type)?(Pd=u,$e=Ri(o.firstChild)):$e=u),bn(e,n,n.pendingProps.children,a),Dr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((u=o=$e)&&(o=jM(o,n.type,n.pendingProps,wi),o!==null?(n.stateNode=o,Cn=n,$e=Ri(o.firstChild),wi=!1,u=!0):u=!1),u||qa(n)),ot(n),u=n.type,h=n.pendingProps,S=e!==null?e.memoizedProps:null,o=h.children,Ad(u,h)?o=null:S!==null&&Ad(u,S)&&(n.flags|=32),n.memoizedState!==null&&(u=dh(e,n,V1,null,null,a),Wr._currentValue=u),Dr(e,n),bn(e,n,o,a),n.child;case 6:return e===null&&Te&&((e=a=$e)&&(a=WM(a,n.pendingProps,wi),a!==null?(n.stateNode=a,Cn=n,$e=null,e=!0):e=!1),e||qa(n)),null;case 13:return hv(e,n,a);case 4:return F(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Is(n,null,o,a):bn(e,n,o,a),n.child;case 11:return iv(e,n,n.type,n.pendingProps,a);case 7:return o=n.pendingProps,Dr(e,n),bn(e,n,o,a),n.child;case 8:return bn(e,n,n.pendingProps.children,a),n.child;case 12:return bn(e,n,n.pendingProps.children,a),n.child;case 10:return mv(e,n,a);case 9:return u=n.type._context,o=n.pendingProps.children,Us(n),u=Un(u),o=o(u),n.flags|=1,bn(e,n,o,a),n.child;case 14:return av(e,n,n.type,n.pendingProps,a);case 15:return sv(e,n,n.type,n.pendingProps,a);case 19:return Bh(e,n,a);case 31:return K1(e,n,a);case 22:return rv(e,n,a,n.pendingProps);case 24:return Us(n),o=Un(gn),e===null?(u=nh(),u===null&&(u=Ke,h=th(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},ah(n),Ya(n,gn,u)):((e.lanes&a)!==0&&(sh(e,n),Zo(n,null,null,a),Wo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Ya(n,gn,o)):(o=h.cache,Ya(n,gn,o),o!==u.cache&&$f(n,[gn],a,!0))),bn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=n.pendingProps,o.name!=null&&o.name!=="auto"?n.flags|=e===null?18882560:18874368:Te&&pc(n),e!==null&&e.memoizedProps.name!==o.name?n.flags|=4194816:Dr(e,n),bn(e,n,o.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ta(e){e.flags|=4}function Hh(e,n,a,o,u){var h;if((h=(e.mode&32)!==0)&&(h=a===null?q_(n,o):q_(n,o)&&(o.src!==a.src||o.srcSet!==a.srcSet)),h){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(Kv())e.flags|=8192;else throw zs=Sc,ih}else e.flags&=-16777217}function vv(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Y_(n))if(Kv())e.flags|=8192;else throw zs=Sc,ih}function Hc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Jl():536870912,e.lanes|=n,Pr|=n)}function el(e,n){if(!Te)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function tn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&1206910976,o|=u.flags&1206910976,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function tM(e,n,a){var o=n.pendingProps;switch(Zf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),xa(gn),R(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Er(n)?Ta(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Kf())),tn(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(Ta(n),h!==null?(tn(n),vv(n,h)):(tn(n),Hh(n,u,null,o,a))):h?h!==e.memoizedState?(Ta(n),tn(n),vv(n,h)):(tn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Ta(n),tn(n),Hh(n,u,e,o,a)),null;case 27:if(gt(n),a=le.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ta(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),n.subtreeFlags&=-33554433,null}e=Dt.current,Er(n)?Z0(n):(e=I_(u,o,a),n.stateNode=e,Ta(n))}return tn(n),n.subtreeFlags&=-33554433,null;case 5:if(gt(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ta(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),n.subtreeFlags&=-33554433,null}if(h=Dt.current,Er(n))Z0(n);else{var S=hl(le.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?S.createElement(u,{is:o.is}):S.createElement(u)}}h[Vt]=n,h[ee]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=h;t:switch(zn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Ta(n)}}return tn(n),n.subtreeFlags&=-33554433,Hh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ta(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=le.current,Er(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[Vt]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||g_(e.nodeValue,a)),e||qa(n,!0)}else e=hl(e).createTextNode(o),e[Vt]=n,n.stateNode=e}return tn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Er(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Vt]=n}else Rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),e=!1}else a=Kf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ui(n),n):(ui(n),null);if((n.flags&128)!==0)throw Error(s(558))}return tn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Er(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Vt]=n}else Rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),u=!1}else u=Kf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ui(n),n):(ui(n),null)}return ui(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Hc(n,n.updateQueue),tn(n),null);case 4:return R(),e===null&&Sd(n.stateNode.containerInfo),n.flags|=67108864,tn(n),null;case 10:return xa(n.type),tn(n),null;case 19:if(fh(n),o=n.memoizedState,o===null)return tn(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)el(o,!1);else{if(fn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=bc(e),h!==null){for(n.flags|=128,el(o,!1),e=h.updateQueue,n.updateQueue=e,Hc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)X0(a,e),a=a.sibling;return Qo(n,On.current&1|2),Te&&_a(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&W()>Jc&&(n.flags|=128,u=!0,el(o,!1),n.lanes=4194304)}else{if(!u)if(e=bc(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Hc(n,e),el(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!h.alternate&&!Te)return tn(n),null}else 2*W()-o.renderingStartTime>Jc&&a!==536870912&&(n.flags|=128,u=!0,el(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}if(o.tail!==null){e=o.tail;t:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return o.rendering=e,o.tail=e.sibling,o.renderingStartTime=W(),e.sibling=null,h=On.current,h=u?h&1|2:h&1,o.tailMode==="visible"||o.tailMode==="collapsed"||!a||Te?Qo(n,h):(a=h,Ct(Ln,n),Ct(On,a),Hn===null&&(Hn=n)),Te&&_a(n,o.treeForkCount),e}return tn(n),null;case 22:case 23:return ui(n),ch(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&Hc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&mt(Os),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),xa(gn),tn(n),null;case 25:return null;case 30:return n.flags|=33554432,tn(n),null}throw Error(s(156,n.tag))}function eM(e,n){switch(Zf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return xa(gn),R(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return gt(n),null;case 31:if(n.memoizedState!==null){if(ui(n),n.alternate===null)throw Error(s(340));Rs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ui(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Rs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return fh(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return R(),null;case 10:return xa(n.type),null;case 22:case 23:return ui(n),ch(),e!==null&&mt(Os),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return xa(gn),null;case 25:return null;default:return null}}function _v(e,n){switch(Zf(n),n.tag){case 3:xa(gn),R();break;case 26:case 27:case 5:gt(n);break;case 4:R();break;case 31:n.memoizedState!==null&&ui(n);break;case 13:ui(n);break;case 19:fh(n);break;case 10:xa(n.type);break;case 22:case 23:ui(n),ch(),e!==null&&mt(Os);break;case 24:xa(gn)}}function nl(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,S=a.inst;o=h(),S.destroy=o}a=a.next}while(a!==u)}}catch(D){qe(n,n.return,D)}}function ts(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var S=o.inst,D=S.destroy;if(D!==void 0){S.destroy=void 0,u=n;var X=a,at=D;try{at()}catch(ft){qe(u,X,ft)}}}o=o.next}while(o!==h)}}catch(ft){qe(n,n.return,ft)}}function yv(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{lg(n,a)}catch(o){qe(e,e.return,o)}}}function xv(e,n,a){a.props=Fs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){qe(e,n,o)}}function Ki(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:var u=e.stateNode,h=ma(e.memoizedProps,u);(u.ref===null||u.ref.name!==h)&&(u.ref=w_(h)),o=u.ref;break;case 7:if(e.stateNode===null){var S=new mi(e);g(e.child,!1,qM,S,void 0,void 0),e.stateNode=S}o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(D){qe(e,n,D)}}function Pn(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){qe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){qe(e,n,u)}else a.current=null}function Gc(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)L_(e.stateNode,n[a])}function Sv(e){for(var n=e.return;n!==null&&(Vh(n)&&L_(e.stateNode,n.stateNode),!Gh(n));)n=n.return}function il(e){for(var n=e.return;n!==null&&(Vh(n)&&YM(e.stateNode,n.stateNode),!Gh(n));)n=n.return}function Gh(e){return e.tag===5||e.tag===3||e.tag===27}function Vh(e){return e&&e.tag===7&&e.stateNode!==null}function kh(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){qe(e,e.return,u)}}function Xh(e,n,a){try{var o=e.stateNode;wM(o,e.type,a,n),o[ee]=n}catch(u){qe(e,e.return,u)}}function Mv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&os(e.type)||e.tag===4}function qh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Mv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&os(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Yh(e,n,a,o){var u=e.tag;if(u===5||u===6)u=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Wi)),Gc(e,o),ze=!0;else if(u!==4&&(u===27&&(Gc(e,o),o=null,os(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(Yh(e,n,a,o),e=e.sibling;e!==null;)Yh(e,n,a,o),e=e.sibling}function Vc(e,n,a,o){var u=e.tag;if(u===5||u===6)u=e.stateNode,n?a.insertBefore(u,n):a.appendChild(u),Gc(e,o),ze=!0;else if(u!==4&&(u===27&&(Gc(e,o),o=null,os(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Vc(e,n,a,o),e=e.sibling;e!==null;)Vc(e,n,a,o),e=e.sibling}function Ev(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);zn(n,o,a),n[Vt]=e,n[ee]=a}catch(h){qe(e,e.return,h)}}var kc=!1,fi=null;function Tv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(kc=!0)}var Ji=null;function bv(){var e=Ji;return Ji=null,e}var ni=0;function Nr(e,n,a,o,u){return ni=0,Av(e.child,n,a,o,u)}function Av(e,n,a,o,u){for(var h=!1;e!==null;){if(e.tag===5){var S=e.stateNode;if(o!==null){var D=Rd(S);o.push(D),D.view&&(h=!0)}else h||Rd(S).view&&(h=!0);kc=!0,b_(S,ni===0?n:n+"_"+ni,a),ni++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&u||Av(e.child,n,a,o,u)&&(h=!0));e=e.sibling}return h}function $i(e,n){for(;e!==null;)e.tag===5?A_(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||$i(e.child,n)),e=e.sibling}function Xc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Xc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=ga(n.default,n.share),n!=="none"&&(Nr(e,a,n,null,!1)||$i(e.child,!1))}e=e.sibling}}function jh(e,n){if(e.tag===30){var a=e.stateNode,o=e.memoizedProps,u=ma(o,a),h=ga(o.default,a.paired?o.share:o.enter);h!=="none"?Nr(e,u,h,null,!1)?(Xc(e),a.paired||n||Fr(e,o.onEnter)):$i(e.child,!1):Xc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)jh(e,n),e=e.sibling;else Xc(e)}function Wh(e){if(fi!==null&&fi.size!==0){var n=fi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,o=a.name;if(o!=null&&o!=="auto"){var u=n.get(o);if(u!==void 0){var h=ga(a.default,a.share);if(h!=="none"&&(Nr(e,o,h,null,!1)?(h=e.stateNode,u.paired=h,h.paired=u,Fr(e,a.onShare)):$i(e.child,!1)),n.delete(o),n.size===0)break}}}Wh(e)}e=e.sibling}}}function Zh(e){if(e.tag===30){var n=e.memoizedProps,a=ma(n,e.stateNode),o=fi!==null?fi.get(a):void 0,u=ga(n.default,o!==void 0?n.share:n.exit);u!=="none"&&(Nr(e,a,u,null,!1)?o!==void 0?(u=e.stateNode,o.paired=u,u.paired=o,fi.delete(a),Fr(e,n.onShare)):Fr(e,n.onExit):$i(e.child,!1)),fi!==null&&Wh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Zh(e),e=e.sibling;else fi!==null&&Wh(e)}function wv(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=ma(n,e.stateNode);n=ga(n.default,n.update),e.flags&=-5,n!=="none"&&Nr(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&wv(e);e=e.sibling}}function Qh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,$i(e.child,!1))}Qh(e)}e=e.sibling}}function qc(e){if(e.tag===30)e.stateNode.paired=null,$i(e.child,!1),Qh(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)qc(e),e=e.sibling;else Qh(e)}function Cv(e){for(e=e.child;e!==null;)e.tag===30?$i(e.child,!1):(e.subtreeFlags&33554432)!==0&&Cv(e),e=e.sibling}function Kh(e,n,a,o,u,h,S){for(var D=!1;n!==null;){if(n.tag===5){var X=n.stateNode;if(h!==null&&ni<h.length){var at=h[ni],ft=Rd(X);(at.view||ft.view)&&(D=!0);var At;if(At=(e.flags&4)===0)if(ft.clip)At=!0;else{At=at.rect;var tt=ft.rect;At=At.y!==tt.y||At.x!==tt.x||At.height!==tt.height||At.width!==tt.width}At&&(e.flags|=4),ft.abs?ft=!at.abs:(at=at.rect,ft=ft.rect,ft=at.height!==ft.height||at.width!==ft.width),ft&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&b_(X,ni===0?a:a+"_"+ni,u),D&&(e.flags&4)!==0||(Ji===null&&(Ji=[]),Ji.push(X,ni===0?o:o+"_"+ni,n.memoizedProps)),ni++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&S?e.flags|=n.flags&32:Kh(e,n.child,a,o,u,h,S)&&(D=!0));n=n.sibling}return D}function Rv(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,o=e.stateNode,u=ma(a,o),h=ga(a.default,a.update),S;S=e.memoizedState,e.memoizedState=null,o=e;var D=e.child;ni=0,u=Kh(o,D,u,u,h,S,!1),(e.flags&4)!==0&&u&&Fr(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Rv(e);e=e.sibling}}var Rn=!1,ke=!1,ta=!1,Jh=!1,Dv=typeof WeakSet=="function"?WeakSet:Set,Dn=null,ea=!1,al=!1,Yc=!1,$h=!1;function nM(e,n,a){if(e=e.containerInfo,Td=Zr,e=O0(e),Ff(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else t:{o=(o=e.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,S=u.focusNode;u=u.focusOffset;try{o.nodeType,S.nodeType}catch{o=null;break t}var D=0,X=-1,at=-1,ft=0,At=0,tt=e,ct=null;e:for(;;){for(var Xt;tt!==o||h!==0&&tt.nodeType!==3||(X=D+h),tt!==S||u!==0&&tt.nodeType!==3||(at=D+u),tt.nodeType===3&&(D+=tt.nodeValue.length),(Xt=tt.firstChild)!==null;)ct=tt,tt=Xt;for(;;){if(tt===e)break e;if(ct===o&&++ft===h&&(X=D),ct===S&&++At===u&&(at=D),(Xt=tt.nextSibling)!==null)break;tt=ct,ct=tt.parentNode}tt=Xt}o=X===-1||at===-1?null:{start:X,end:at}}else o=null}o=o||{start:0,end:0}}else o=null;for(bd={focusedElem:e,selectionRange:o},Zr=!1,a=(a&335544064)===a,Dn=n,n=a?9270:1024;Dn!==null;){if(e=Dn,a&&(o=e.deletions,o!==null))for(h=0;h<o.length;h++)a&&Zh(o[h]);if(e.alternate===null&&(e.flags&2)!==0)a&&Tv(e),jc(a);else{if(e.tag===22){if(o=e.alternate,e.memoizedState!==null){o!==null&&o.memoizedState===null&&a&&Zh(o),jc(a);continue}else if(o!==null&&o.memoizedState!==null){a&&Tv(e),jc(a);continue}}o=e.child,(e.subtreeFlags&n)!==0&&o!==null?(o.return=e,Dn=o):(a&&wv(e),jc(a))}}fi=null}function jc(e){for(;Dn!==null;){var n=Dn,a=e,o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&o!==null){a=void 0,u=o.memoizedProps,o=o.memoizedState;var h=n.stateNode;try{var S=Fs(n.type,u);a=h.getSnapshotBeforeUpdate(S,o),h.__reactInternalSnapshotBeforeUpdate=a}catch(D){qe(n,n.return,D)}}break;case 3:if((u&1024)!==0){if(o=n.stateNode.containerInfo,a=o.nodeType,a===9)Ud(o);else if(a===1)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":Ud(o);break;default:o.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&o!==null&&(a=ma(o.memoizedProps,o.stateNode),u=n.memoizedProps,u=ga(u.default,u.update),u!=="none"&&Nr(o,a,u,o.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(s(163))}if(o=n.sibling,o!==null){o.return=n.return,Dn=o;break}Dn=n.return}}function Nv(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:na(e,a),o&4&&nl(5,a);break;case 1:if(na(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){qe(a,a.return,S)}else{var u=Fs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){qe(a,a.return,S)}}o&64&&yv(a),o&512&&Ki(a,a.return);break;case 3:if(na(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{lg(e,n)}catch(S){qe(a,a.return,S)}}break;case 27:n===null&&o&4&&Ev(a);case 26:case 5:na(e,a),n===null&&o&4&&kh(a),o&512&&Ki(a,a.return);break;case 12:na(e,a);break;case 31:na(e,a),o&4&&Pv(e,a);break;case 13:na(e,a),o&4&&zv(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=pM.bind(null,a),ZM(e,a))));break;case 22:if(o=a.memoizedState!==null||Rn,!o){var h=n!==null&&n.memoizedState!==null||ke;n=Rn,u=ke,Rn=o,(ke=h)&&!u?(o=2,(a.subtreeFlags&8772)!==0&&(o|=1),Ii(e,a,o)):na(e,a),Rn=n,ke=u}break;case 30:na(e,a),o&512&&Ki(a,a.return);break;case 7:o&512&&Ki(a,a.return);default:na(e,a)}}function td(e,n){for(e=e.child;e!==null;)Uv(e,n),e=e.sibling}function Uv(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var o=a.style;typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"}else{var u=e.stateNode,h=e.memoizedProps.style,S=h!=null&&h.hasOwnProperty("display")?h.display:null;u.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(X){qe(e,e.return,X)}ed(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,ze=!0}catch(X){qe(e,e.return,X)}break;case 18:try{var D=e.stateNode;n?T_(D,!0):T_(e.stateNode,!1)}catch(X){qe(e,e.return,X)}break;case 22:case 23:e.memoizedState===null&&td(e,n);break;default:td(e,n)}}function ed(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var a=e,o=n;switch(a.tag){case 4:Uv(a,o);break t;case 22:a.memoizedState===null&&ed(a,o);break t;default:ed(a,o)}}e=e.sibling}}function Lv(e){var n=e.alternate;n!==null&&(e.alternate=null,Lv(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&fe(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var an=null,ii=!1;function Pi(e,n,a){for(a=a.child;a!==null;)Ov(e,n,a),a=a.sibling}function Ov(e,n,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Re,a)}catch{}switch(a.tag){case 26:ke||Pn(a,n),Pi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!ke&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ke||Pn(a,n),il(a);var o=an,u=ii;os(a.type)&&(an=a.stateNode,ii=!1),Pi(e,n,a),B_(a.stateNode,a.type,a.memoizedProps),an=o,ii=u;break;case 5:ke||Pn(a,n),il(a);case 6:if(a.tag===6&&il(a),o=an,u=ii,an=null,Pi(e,n,a),an=o,ii=u,an!==null)if(ii)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(a.stateNode),ze=!0}catch(h){qe(a,n,h)}else try{an.removeChild(a.stateNode),ze=!0}catch(h){qe(a,n,h)}break;case 18:an!==null&&(ii?(e=an,E_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Qr(e)):E_(an,a.stateNode));break;case 4:o=an,u=ii,an=a.stateNode.containerInfo,ii=!0,Pi(e,n,a),an=o,ii=u;break;case 0:case 11:case 14:case 15:ts(2,a,n),ke||ts(4,a,n),Pi(e,n,a);break;case 1:ke||(Pn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&xv(a,n,o)),Pi(e,n,a);break;case 21:Pi(e,n,a);break;case 22:ke=(o=ke)||a.memoizedState!==null,Pi(e,n,a),ke=o;break;case 30:Pn(a,n),Pi(e,n,a);break;case 7:ke||Pn(a,n),Pi(e,n,a);break;default:Pi(e,n,a)}}function Pv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Qr(e)}catch(a){qe(n,n.return,a)}}}function zv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qr(e)}catch(a){qe(n,n.return,a)}}function iM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Dv),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Dv),n;default:throw Error(s(435,e.tag))}}function Wc(e,n){var a=iM(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=mM.bind(null,e,o);o.then(u,u)}})}function Qn(e,n,a){var o=n.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u],S=e,D=n,X=D;t:for(;X!==null;){switch(X.tag){case 27:if(os(X.type)){an=X.stateNode,ii=!1;break t}break;case 5:an=X.stateNode,ii=!1;break t;case 3:case 4:an=X.stateNode.containerInfo,ii=!0;break t}X=X.return}if(an===null)throw Error(s(160));Ov(S,D,h),an=null,ii=!1,S=h.alternate,S!==null&&(S.return=null),h.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Iv(n,e,a),n=n.sibling}var zi=null;function Iv(e,n,a){var o=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(u&4&&(o=e.updateQueue,o=o!==null?o.events:null,o!==null))for(var h=0;h<o.length;h++){var S=o[h];S.ref.impl=S.nextImpl}Qn(n,e,a),Kn(e),u&4&&(ts(3,e,e.return),nl(3,e),ts(5,e,e.return));break;case 1:Qn(n,e,a),Kn(e),u&512&&(ke||o===null||Pn(o,o.return)),u&64&&Rn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(h=zi,Qn(n,e,a),Kn(e),u&512&&(ke||o===null||Pn(o,o.return)),u&4)if(u=o!==null?o.memoizedState:null,a=e.memoizedState,o===null)if(a===null)if(e.stateNode===null)if(Rn)e.stateNode=x_(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,a=e.memoizedProps,u=h.ownerDocument||h;e:switch(n){case"title":o=u.getElementsByTagName("title")[0],(!o||o[Ie]||o[Vt]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=u.createElement(n),u.head.insertBefore(o,u.querySelector("head > title"))),zn(o,n,a),o[Vt]=e,Pe(o),n=o;break t;case"link":if(h=X_("link","href",u).get(n+(a.href||""))){for(S=0;S<h.length;S++)if(o=h[S],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){h.splice(S,1);break e}}o=u.createElement(n),zn(o,n,a),u.head.appendChild(o);break;case"meta":if(h=X_("meta","content",u).get(n+(a.content||""))){for(S=0;S<h.length;S++)if(o=h[S],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){h.splice(S,1);break e}}o=u.createElement(n),zn(o,n,a),u.head.appendChild(o);break;default:throw Error(s(468,n))}o[Vt]=e,Pe(o),n=o}e.stateNode=n}else Rn||Fd(h,e.type,e.stateNode);else e.stateNode=k_(h,a,e.memoizedProps);else u!==a?(u===null?(n=o.stateNode,n===null||ke||n.parentNode.removeChild(n)):u.count--,a===null?Rn||Fd(h,e.type,e.stateNode):k_(h,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Xh(e,e.memoizedProps,o.memoizedProps);break;case 27:Qn(n,e,a),Kn(e),u&512&&(ke||o===null||Pn(o,o.return)),o!==null&&u&4&&Xh(e,e.memoizedProps,o.memoizedProps);break;case 5:if(h=ta,ta=!1,Qn(n,e,a),ta=h,Kn(e),u&512&&(ke||o===null||Pn(o,o.return)),e.flags&32){n=e.stateNode;try{dr(n,""),ze=!0}catch(ft){qe(e,e.return,ft)}}u&4&&e.stateNode!=null&&(n=e.memoizedProps,Xh(e,n,o!==null?o.memoizedProps:n)),u&1024&&(Jh=!0);break;case 6:if(Qn(n,e,a),Kn(e),u&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,ze=!0}catch(ft){qe(e,e.return,ft)}}break;case 3:if(ze=!1,cu=null,h=zi,zi=dl(n.containerInfo),Qn(n,e,a),zi=h,Kn(e),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Qr(n.containerInfo)}catch(ft){qe(e,e.return,ft)}Jh&&(Jh=!1,Bv(e)),ze=!1;break;case 4:u=ta,ta=Rn,o=a0(),h=zi,zi=dl(e.stateNode.containerInfo),Qn(n,e,a),Kn(e),zi=h,ze&&al&&(Yc=!0),ze=o,ta=u;break;case 12:Qn(n,e,a),Kn(e);break;case 31:Qn(n,e,a),Kn(e),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Wc(e,n)));break;case 13:Qn(n,e,a),Kn(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Kc=W()),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Wc(e,n)));break;case 22:h=e.memoizedState!==null,S=o!==null&&o.memoizedState!==null;var D=Rn,X=ke,at=ta;Rn=D||h,ta=at||h,ke=X||S,Qn(n,e,a),ke=X,ta=at,Rn=D,Kn(e),u&8192&&(n=e.stateNode,n._visibility=h?n._visibility&-2:n._visibility|1,!h||o===null||S||Rn||ke||(n=S||ke,a=Rn,o=ke,Rn=h||Rn,ke=n,es(e,2),Rn=a,ke=o),!h&&ta||td(e,h)),u&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Wc(e,a))));break;case 19:Qn(n,e,a),Kn(e),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Wc(e,n)));break;case 30:u&512&&(ke||o===null||Pn(o,o.return)),u=a0(),h=al,S=(a&335544064)===a,D=e.memoizedProps,al=S&&ga(D.default,D.update)!=="none",Qn(n,e,a),Kn(e),S&&o!==null&&ze&&(e.flags|=4),al=h,ze=u;break;case 21:break;case 7:u&512&&(ke||o===null||Pn(o,o.return)),o&&o.stateNode!==null&&(o.stateNode._fragmentFiber=e);default:Qn(n,e,a),Kn(e)}}function Kn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(Mv(o)){a=o;break}o=o.return}o=null;for(var u=e.return;u!==null;){if(Vh(u)){var h=u.stateNode;o===null?o=[h]:o.push(h)}if(Gh(u))break;u=u.return}var S=o;if(a==null)throw Error(s(160));switch(a.tag){case 27:var D=a.stateNode,X=qh(e);Vc(e,X,D,S);break;case 5:var at=a.stateNode;a.flags&32&&(dr(at,""),a.flags&=-33);var ft=qh(e);Vc(e,ft,at,S);break;case 3:case 4:var At=a.stateNode.containerInfo,tt=qh(e);Yh(e,tt,At,S);break;default:throw Error(s(161))}}catch(ct){qe(e,e.return,ct)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Bv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Bv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Zr=!0,n.reset(),Zr=!1),e=e.sibling}}function Ur(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Fv(n,e),n=n.sibling;else Rv(n)}function Fv(e,n){var a=e.alternate;if(a===null)jh(e,!1);else switch(e.tag){case 3:if($h=ea=!1,bv(),Ur(n,e),!ea&&!Yc){if(e=Ji,e!==null)for(var o=0;o<e.length;o+=3){a=e[o];var u=e[o+1];A_(a,e[o+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),$h=!0}Ji=null;break;case 5:Ur(n,e);break;case 4:o=ea,ea=!1,Ur(n,e),ea&&(Yc=!0),ea=o;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?jh(e,!1):Ur(n,e));break;case 30:o=ea,u=bv(),ea=!1,Ur(n,e),ea&&(e.flags|=4);var h=e.memoizedProps,S=e.stateNode;n=ma(h,S),S=ma(a.memoizedProps,S);var D=ga(h.default,h.update);D==="none"?n=!1:(h=a.memoizedState,a.memoizedState=null,a=e.child,ni=0,n=Kh(e,a,n,S,D,h,!0),ni!==(h===null?0:h.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Fr(e,e.memoizedProps.onUpdate),Ji=u):u!==null&&(u.push.apply(u,Ji),Ji=u),ea=(e.flags&32)!==0?!0:o;break;default:Ur(n,e)}}function na(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Nv(e,n.alternate,n),n=n.sibling}function es(e,n){for(e=e.child;e!==null;){var a=e,o=n;switch(a.tag){case 0:case 11:case 14:case 15:ts(4,a,a.return),es(a,o);break;case 1:Pn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&xv(a,a.return,u),es(a,o);break;case 27:(o&2)!==0&&B_(a.stateNode,a.type,a.memoizedProps);case 5:Pn(a,a.return),a.tag!==5&&a.tag!==27||il(a),es(a,o);break;case 6:il(a);break;case 26:Pn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||ke||u.parentNode.removeChild(u),es(a,o);break;case 22:a.memoizedState===null&&es(a,o);break;case 30:Pn(a,a.return),es(a,o);break;case 7:Pn(a,a.return);default:es(a,o)}e=e.sibling}}function Ii(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,S=h.flags,D=(a&1)!==0;switch(h.tag){case 0:case 11:case 15:Ii(u,h,a),nl(4,h);break;case 1:if(Ii(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(ft){qe(o,o.return,ft)}if(o=h,u=o.updateQueue,u!==null){var X=o.stateNode;try{var at=u.shared.hiddenCallbacks;if(at!==null)for(u.shared.hiddenCallbacks=null,u=0;u<at.length;u++)og(at[u],X)}catch(ft){qe(o,o.return,ft)}}D&&S&64&&yv(h),Ki(h,h.return);break;case 27:(a&2)!==0&&Ev(h);case 5:h.tag!==5&&h.tag!==27||Sv(h),Ii(u,h,a),D&&o===null&&S&4&&kh(h),Ki(h,h.return);break;case 6:Sv(h);break;case 26:X=h.stateNode,h.memoizedState!==null||X===null||Rn||Fd(dl(X.ownerDocument),h.type,X),Ii(u,h,a),D&&o===null&&S&4&&kh(h),Ki(h,h.return);break;case 12:Ii(u,h,a);break;case 31:Ii(u,h,a),D&&S&4&&Pv(u,h);break;case 13:Ii(u,h,a),D&&S&4&&zv(u,h);break;case 22:h.memoizedState===null&&Ii(u,h,a),Ki(h,h.return);break;case 30:Ii(u,h,a),Ki(h,h.return);break;case 7:Ki(h,h.return);default:Ii(u,h,a)}n=n.sibling}}function nd(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&ko(a))}function id(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&ko(e))}function Ci(e,n,a,o){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)Hv(e,n,a,o),n=n.sibling;else u&&Cv(n)}function Hv(e,n,a,o){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&qc(n);var h=n.flags;switch(n.tag){case 0:case 11:case 15:Ci(e,n,a,o),h&2048&&nl(9,n);break;case 1:Ci(e,n,a,o);break;case 3:Ci(e,n,a,o),u&&$h&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),h&2048&&(h=null,n.alternate!==null&&(h=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==h&&(n.refCount++,h!=null&&ko(h)));break;case 12:if(h&2048){Ci(e,n,a,o),h=n.stateNode;try{var S=n.memoizedProps,D=S.id,X=S.onPostCommit;typeof X=="function"&&X(D,n.alternate===null?"mount":"update",h.passiveEffectDuration,-0)}catch(at){qe(n,n.return,at)}}else Ci(e,n,a,o);break;case 31:Ci(e,n,a,o);break;case 13:Ci(e,n,a,o);break;case 23:break;case 22:S=n.stateNode,D=n.alternate,n.memoizedState!==null?(u&&D!==null&&D.memoizedState===null&&qc(D),S._visibility&2?Ci(e,n,a,o):sl(e,n)):(u&&D!==null&&D.memoizedState!==null&&qc(n),S._visibility&2?Ci(e,n,a,o):(S._visibility|=2,Lr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1))),h&2048&&nd(D,n);break;case 24:Ci(e,n,a,o),h&2048&&id(n.alternate,n);break;case 30:u&&(h=n.alternate,h!==null&&($i(h.child,!0),$i(n.child,!0))),Ci(e,n,a,o);break;default:Ci(e,n,a,o)}}function Lr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,S=n,D=a,X=o,at=S.flags;switch(S.tag){case 0:case 11:case 15:Lr(h,S,D,X,u),nl(8,S);break;case 23:break;case 22:var ft=S.stateNode;S.memoizedState!==null?ft._visibility&2?Lr(h,S,D,X,u):sl(h,S):(ft._visibility|=2,Lr(h,S,D,X,u)),u&&at&2048&&nd(S.alternate,S);break;case 24:Lr(h,S,D,X,u),u&&at&2048&&id(S.alternate,S);break;default:Lr(h,S,D,X,u)}n=n.sibling}}function sl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:sl(a,o),u&2048&&nd(o.alternate,o);break;case 24:sl(a,o),u&2048&&id(o.alternate,o);break;default:sl(a,o)}n=n.sibling}}var Hs=8192;function Gs(e,n,a){if(e.subtreeFlags&Hs)for(e=e.child;e!==null;)Gv(e,n,a),e=e.sibling}function Gv(e,n,a){switch(e.tag){case 26:Gs(e,n,a),e.flags&Hs&&(e.memoizedState!==null?cE(a,zi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&W_(a,e)));break;case 5:Gs(e,n,a),e.flags&Hs&&(e=e.stateNode,(n&335544128)===n&&W_(a,e));break;case 3:case 4:var o=zi;zi=dl(e.stateNode.containerInfo),Gs(e,n,a),zi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Hs,Hs=16777216,Gs(e,n,a),Hs=o):Gs(e,n,a));break;case 30:if((e.flags&Hs)!==0&&(o=e.memoizedProps.name,o!=null&&o!=="auto")){var u=e.stateNode;u.paired=null,fi===null&&(fi=new Map),fi.set(o,u)}Gs(e,n,a);break;default:Gs(e,n,a)}}function Vv(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function rl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Dn=o,Xv(o,e)}Vv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)kv(e),e=e.sibling}function kv(e){switch(e.tag){case 0:case 11:case 15:rl(e),e.flags&2048&&ts(9,e,e.return);break;case 3:rl(e);break;case 12:rl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Zc(e)):rl(e);break;default:rl(e)}}function Zc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Dn=o,Xv(o,e)}Vv(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ts(8,n,n.return),Zc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Zc(n));break;default:Zc(n)}e=e.sibling}}function Xv(e,n){for(;Dn!==null;){var a=Dn;switch(a.tag){case 0:case 11:case 15:ts(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:ko(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Dn=o;else t:for(a=e;Dn!==null;){o=Dn;var u=o.sibling,h=o.return;if(Lv(o),o===a){Dn=null;break t}if(u!==null){u.return=h,Dn=u;break t}Dn=h}}}var aM={getCacheForType:function(e){var n=Un(gn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Un(gn).controller.signal}},sM=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Ke=null,we=null,De=0,Xe=0,hi=null,ns=!1,Or=!1,ad=!1,ba=0,fn=0,is=0,Vs=0,Qc=0,di=0,Pr=0,ol=null,ai=null,sd=!1,Kc=0,qv=0,Jc=1/0,$c=null,as=null,on=0,Bi=null,ks=null,ia=0,rd=0,od=null,Yv=null,zr=null,Ir=null,Br=null,ll=0,tu=null;function pi(){return(Fe&2)!==0&&De!==0?De&-De:wt.T!==null?vd():Ht()}function jv(){if(di===0)if((De&536870912)===0||Te){var e=ha;ha<<=1,(ha&3932160)===0&&(ha=262144),di=e}else di=536870912;return e=Ln.current,e!==null&&(e.flags|=32),di}function Fr(e,n){if(n!=null){var a=e.stateNode,o=a.ref;o===null&&(o=a.ref=w_(ma(e.memoizedProps,a))),Ir===null&&(Ir=[]),Ir.push(n.bind(null,o))}}function si(e,n,a){(e===Ke&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)&&(Hr(e,0),ss(e,De,di,!1)),Ts(e,a),((Fe&2)===0||e!==Ke)&&(e===Ke&&((Fe&2)===0&&(Vs|=a),fn===4&&ss(e,De,di,!1)),aa(e))}function Wv(e,n,a){if((Fe&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Fa(e,n),u=o?lM(e,n):cd(e,n,!0),h=o;do{if(u===0){Or&&!o&&ss(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!rM(a)){u=cd(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var D=e;u=ol;var X=D.current.memoizedState.isDehydrated;if(X&&(Hr(D,S).flags|=256),S=cd(D,S,!1),S!==2&&S!==6){if(ad&&!X){D.errorRecoveryDisabledLanes|=h,Vs|=h,u=4;break t}h=ai,ai=u,h!==null&&(ai===null?ai=h:ai.push.apply(ai,h))}u=S}if(h=!1,u!==2)continue}}if(u===1){Hr(e,0),ss(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:ss(o,n,di,!ns);break t;case 2:ai=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=Kc+300-W(),10<u)){if(ss(o,n,di,!ns),Es(o,0,!0)!==0)break t;ia=n,o.timeoutHandle=Cd(Zv.bind(null,o,a,ai,$c,sd,n,di,Vs,Pr,ns,h,"Throttled",-0,0),u);break t}Zv(o,a,ai,$c,sd,n,di,Vs,Pr,ns,h,null,-0,0)}}break}while(!0);aa(e)}function Zv(e,n,a,o,u,h,S,D,X,at,ft,At,tt,ct){e.timeoutHandle=-1;var Xt=n.subtreeFlags,ne=(h&335544064)===h;if(At=null,(ne||Xt&8192||(Xt&16785408)===16785408)&&(At={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wi},fi=null,Gv(n,h,At),ne&&(Xt=At,ne=e.containerInfo,ne=(ne.nodeType===9?ne:ne.ownerDocument).__reactViewTransition,ne!=null&&(Xt.count++,Xt.waitingForViewTransition=!0,Xt=gl.bind(Xt),ne.finished.then(Xt,Xt))),Xt=(h&62914560)===h?Kc-W():(h&4194048)===h?qv-W():0,Xt=uE(At,Xt),Xt!==null)){ia=h,e.cancelPendingCommit=Xt(i_.bind(null,e,n,h,a,o,u,S,D,X,at,ft,At,null,tt,ct)),ss(e,h,S,!at);return}i_(e,n,h,a,o,u,S,D,X,at,ft,At)}function rM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!ci(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ss(e,n,a,o){n=Kl(e,n),n&=~Qc,n&=~Vs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Bn(u),S=1<<h;o[h]=-1,u&=~S}a!==0&&L(e,a,n)}function eu(){return(Fe&6)===0?(cl(0),!1):!0}function ld(){if(we!==null){if(Xe===0)var e=we.return;else e=we,ya=Ds=null,gh(e),Ar=null,Yo=0,e=we;for(;e!==null;)_v(e.alternate,e),e=e.return;we=null}}function Hr(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,DM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ia=0,ld(),Ke=e,we=a=va(e.current,null),De=n,Xe=0,hi=null,ns=!1,Or=Fa(e,n),ad=!1,Pr=di=Qc=Vs=is=fn=0,ai=ol=null,sd=!1,ba=Kl(e,n),cc(),a}function Qv(e,n){xe=null,wt.H=Oc,n===br||n===xc?(n=ig(),Xe=3):n===ih?(n=ig(),Xe=4):Xe=n===Nh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,hi=n,we===null&&(fn=1,Pc(e,Ti(n,e.current)))}function Kv(){var e=Ln.current;return e===null?!0:(De&4194048)===De?Hn===null:(De&62914560)===De||(De&536870912)!==0?e===Hn:!1}function Jv(){var e=wt.H;return wt.H=Oc,e===null?Oc:e}function $v(){var e=wt.A;return wt.A=aM,e}function nu(){fn=4,ns||(De&4194048)!==De&&Ln.current!==null||(Or=!0),(is&134217727)===0&&(Vs&134217727)===0||Ke===null||ss(Ke,De,di,!1)}function cd(e,n,a){var o=Fe;Fe|=2;var u=Jv(),h=$v();(Ke!==e||De!==n)&&($c=null,Hr(e,n)),n=!1;var S=fn;t:do try{if(Xe!==0&&we!==null){var D=we,X=hi;switch(Xe){case 8:ld(),S=6;break t;case 3:case 2:case 9:case 6:Ln.current===null&&(n=!0);var at=Xe;if(Xe=0,hi=null,Gr(e,D,X,at),a&&Or){S=0;break t}break;default:at=Xe,Xe=0,hi=null,Gr(e,D,X,at)}}oM(),S=fn;break}catch(ft){Qv(e,ft)}while(!0);return n&&e.shellSuspendCounter++,ya=Ds=null,Fe=o,wt.H=u,wt.A=h,we===null&&(Ke=null,De=0,cc()),S}function oM(){for(;we!==null;)t_(we)}function lM(e,n){var a=Fe;Fe|=2;var o=Jv(),u=$v();Ke!==e||De!==n?($c=null,Jc=W()+500,Hr(e,n)):Or=Fa(e,n);t:do try{if(Xe!==0&&we!==null){n=we;var h=hi;e:switch(Xe){case 1:Xe=0,hi=null,Gr(e,n,h,1);break;case 2:case 9:if(eg(h)){Xe=0,hi=null,e_(n);break}n=function(){Xe!==2&&Xe!==9||Ke!==e||(Xe=7),aa(e)},h.then(n,n);break t;case 3:Xe=7;break t;case 4:Xe=5;break t;case 7:eg(h)?(Xe=0,hi=null,e_(n)):(Xe=0,hi=null,Gr(e,n,h,7));break;case 5:var S=null;switch(we.tag){case 26:S=we.memoizedState;case 5:case 27:var D=we;if(S?Y_(S):D.stateNode.complete){Xe=0,hi=null;var X=D.sibling;if(X!==null)we=X;else{var at=D.return;at!==null?(we=at,iu(at)):we=null}break e}}Xe=0,hi=null,Gr(e,n,h,5);break;case 6:Xe=0,hi=null,Gr(e,n,h,6);break;case 8:ld(),fn=6;break t;default:throw Error(s(462))}}cM();break}catch(ft){Qv(e,ft)}while(!0);return ya=Ds=null,wt.H=o,wt.A=u,Fe=a,we!==null?0:(Ke=null,De=0,cc(),fn)}function cM(){for(;we!==null&&!ut();)t_(we)}function t_(e){var n=gv(e.alternate,e,ba);e.memoizedProps=e.pendingProps,n===null?iu(e):we=n}function e_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=cv(a,n,n.pendingProps,n.type,void 0,De);break;case 11:n=cv(a,n,n.pendingProps,n.type.render,n.ref,De);break;case 5:gh(n);var o=n;o===Cn&&(Te?(mc(o),o.tag===5&&o.stateNode!=null&&($e=o.stateNode)):(mc(o),Te=!0));default:_v(a,n),n=we=X0(n,ba),n=gv(a,n,ba)}e.memoizedProps=e.pendingProps,n===null?iu(e):we=n}function Gr(e,n,a,o){ya=Ds=null,gh(n),Ar=null,Yo=0;var u=n.return;try{if(Q1(e,u,n,a,De)){fn=1,Pc(e,Ti(a,e.current)),we=null;return}}catch(h){if(u!==null)throw we=u,h;fn=1,Pc(e,Ti(a,e.current)),we=null;return}n.flags&32768?(Te||o===1?e=!0:Or||(De&536870912)!==0?e=!1:(ns=e=!0,(o===2||o===9||o===3||o===6)&&(o=Ln.current,o!==null&&o.tag===13&&(o.flags|=16384))),n_(n,e)):iu(n)}function iu(e){var n=e;do{if((n.flags&32768)!==0){n_(n,ns);return}e=n.return;var a=tM(n.alternate,n,ba);if(a!==null){we=a;return}if(n=n.sibling,n!==null){we=n;return}we=n=e}while(n!==null);fn===0&&(fn=5)}function n_(e,n){do{var a=eM(e.alternate,e);if(a!==null){a.flags&=32767,we=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){we=e;return}we=e=a}while(e!==null);fn=6,we=null}function i_(e,n,a,o,u,h,S,D,X,at,ft,At){e.cancelPendingCommit=null;do au();while(on!==0);if((Fe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===Ke&&(we=Ke=null,De=0),ks=n,Bi=e,ia=a,od=u,Yv=o,uM(e,n,a,S,D,X,At)}}function uM(e,n,a,o,u,h,S){var D=n.lanes|n.childLanes;if(rd=D,D|=Xf,Sf(e,a,D,o,u,h),Ir=null,(a&335544064)===a?(Br=B1(e),o=10262):(Br=null,o=10256),(n.subtreeFlags&o)!==0||(n.flags&o)!==0?(e.callbackNode=null,e.callbackPriority=0,gM(zt,function(){return dd(),null})):(e.callbackNode=null,e.callbackPriority=0),kc=!1,o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=wt.T,wt.T=null,u=Ot.p,Ot.p=2,h=Fe,Fe|=4;try{nM(e,n,a)}finally{Fe=h,Ot.p=u,wt.T=o}}on=1,kc?zr=zM(S,e.containerInfo,Br,ud,fd,hM,hd,dd,fM):(ud(),fd(),hd())}function fM(e){if(on!==0){var n=Bi.onRecoverableError;n(e,{componentStack:null})}}function hM(){on===3&&(on=0,Fv(ks,Bi),on=4)}function ud(){if(on===1){on=0;var e=Bi,n=ks,a=ia,o=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||o){o=wt.T,wt.T=null;var u=Ot.p;Ot.p=2;var h=Fe;Fe|=4;try{al=Yc=!1,Iv(n,e,a),a=bd;var S=O0(e.containerInfo),D=a.focusedElem,X=a.selectionRange;if(S!==D&&D&&D.ownerDocument&&L0(D.ownerDocument.documentElement,D)){if(X!==null&&Ff(D)){var at=X.start,ft=X.end;if(ft===void 0&&(ft=at),"selectionStart"in D)D.selectionStart=at,D.selectionEnd=Math.min(ft,D.value.length);else{var At=D.ownerDocument||document,tt=At&&At.defaultView||window;if(tt.getSelection){var ct=tt.getSelection(),Xt=D.textContent.length,ne=Math.min(X.start,Xt),Se=X.end===void 0?ne:Math.min(X.end,Xt);!ct.extend&&ne>Se&&(S=Se,Se=ne,ne=S);var nt=U0(D,ne),Z=U0(D,Se);if(nt&&Z&&(ct.rangeCount!==1||ct.anchorNode!==nt.node||ct.anchorOffset!==nt.offset||ct.focusNode!==Z.node||ct.focusOffset!==Z.offset)){var lt=At.createRange();lt.setStart(nt.node,nt.offset),ct.removeAllRanges(),ne>Se?(ct.addRange(lt),ct.extend(Z.node,Z.offset)):(lt.setEnd(Z.node,Z.offset),ct.addRange(lt))}}}}for(At=[],ct=D;ct=ct.parentNode;)ct.nodeType===1&&At.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<At.length;D++){var Tt=At[D];Tt.element.scrollLeft=Tt.left,Tt.element.scrollTop=Tt.top}}Zr=!!Td,bd=Td=null}finally{Fe=h,Ot.p=u,wt.T=o}}e.current=n,on=2}}function fd(){if(on===2){on=0;var e=Bi,n=ks,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=wt.T,wt.T=null;var o=Ot.p;Ot.p=2;var u=Fe;Fe|=4;try{Nv(e,n.alternate,n)}finally{Fe=u,Ot.p=o,wt.T=a}}on=3}}function hd(){if(on===4||on===3){on=0;var e=zr;zr=null,re();var n=Bi,a=ks,o=ia,u=Yv,h=(o&335544064)===o?10262:10256;if((a.subtreeFlags&h)!==0||(a.flags&h)!==0?on=5:(on=0,ks=Bi=null,a_(n,n.pendingLanes)),h=n.pendingLanes,h===0&&(as=null),rt(o),a=a.stateNode,rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Re,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=wt.T,h=Ot.p,Ot.p=2,wt.T=null;try{for(var S=n.onRecoverableError,D=0;D<u.length;D++){var X=u[D];S(X.value,{componentStack:X.stack})}}finally{wt.T=a,Ot.p=h}}if(u=Ir,S=Br,Br=null,u!==null&&(Ir=null,S===null&&(S=[]),e!==null))for(X=0;X<u.length;X++)a=(0,u[X])(S),a!==void 0&&e.finished.finally(a);(ia&3)!==0&&au(),aa(n),h=n.pendingLanes,(o&261930)!==0&&(h&42)!==0?n===tu?ll++:(ll=0,tu=n):(ll=0,tu=null),cl(0)}}function a_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,ko(n)))}function au(){return zr!==null&&(zr.skipTransition(),zr=null),ud(),fd(),hd(),dd()}function dd(){if(on!==5)return!1;var e=Bi,n=rd;rd=0;var a=rt(ia),o=wt.T,u=Ot.p;try{Ot.p=32>a?32:a,wt.T=null,a=od,od=null;var h=Bi,S=ia;if(on=0,ks=Bi=null,ia=0,(Fe&6)!==0)throw Error(s(331));var D=Fe;if(Fe|=4,kv(h.current),Hv(h,h.current,S,a),Fe=D,cl(0,!1),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Re,h)}catch{}return!0}finally{Ot.p=u,wt.T=o,a_(e,n)}}function s_(e,n,a){n=Ti(a,n),n=Dh(e.stateNode,n,2),e=Qa(e,n,2),e!==null&&(Ts(e,2),aa(e))}function qe(e,n,a){if(e.tag===3)s_(e,e,a);else for(;n!==null;){if(n.tag===3){s_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(as===null||!as.has(o))){e=Ti(a,e),a=ev(2),o=Qa(n,a,2),o!==null&&(nv(a,o,n,e),Ts(o,2),aa(o));break}}n=n.return}}function pd(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new sM;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(ad=!0,u.add(a),e=dM.bind(null,e,n,a),n.then(e,e))}function dM(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ke===e&&(De&a)===a&&((fn===4||fn===3&&(De&62914560)===De&&300>W()-Kc)&&(Fe&2)===0?Hr(e,0):Qc|=a,Pr===De&&(Pr=0)),aa(e)}function r_(e,n){n===0&&(n=Jl()),e=ws(e,n),e!==null&&(Ts(e,n),aa(e))}function pM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),r_(e,a)}function mM(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),r_(e,a)}function gM(e,n){return he(e,n)}var Vr=null,kr=null,md=!1,su=!1,gd=!1,rs=0;function aa(e){e!==kr&&e.next===null&&(kr===null?Vr=kr=e:kr=kr.next=e),su=!0,md||(md=!0,_M())}function cl(e,n){if(!gd&&su){gd=!0;do for(var a=!1,o=Vr;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var S=o.suspendedLanes,D=o.pingedLanes;h=(1<<31-Bn(42|e)+1)-1,h&=u&~(S&~D),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,u_(o,h))}else h=De,h=Es(o,o===Ke?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Fa(o,h)||(a=!0,u_(o,h));o=o.next}while(a);gd=!1}}function vM(){o_()}function o_(){su=md=!1;var e=0;rs!==0&&RM()&&(e=rs);for(var n=W(),a=null,o=Vr;o!==null;){var u=o.next,h=l_(o,n);h===0?(o.next=null,a===null?Vr=u:a.next=u,u===null&&(kr=a)):(a=o,(e!==0||(h&3)!==0)&&(su=!0)),o=u}on!==0&&on!==5||cl(e),rs!==0&&(rs=0)}function l_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var S=31-Bn(h),D=1<<S,X=u[S];X===-1?((D&a)===0||(D&o)!==0)&&(u[S]=xf(D,n)):X<=n&&(e.expiredLanes|=D),h&=~D}if(n=Ke,a=De,a=Es(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ie(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Fa(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ie(o),rt(a)){case 2:case 8:a=$t;break;case 32:a=zt;break;case 268435456:a=ae;break;default:a=zt}return o=c_.bind(null,e),a=he(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ie(o),e.callbackPriority=2,e.callbackNode=null,2}function c_(e,n){if(on!==0&&on!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(au()&&e.callbackNode!==a)return null;var o=De;return o=Es(e,e===Ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Wv(e,o,n),l_(e,W()),e.callbackNode!=null&&e.callbackNode===a?c_.bind(null,e):null)}function u_(e,n){if(au())return null;Wv(e,n,!0)}function _M(){NM(function(){(Fe&6)!==0?he(kt,vM):o_()})}function vd(){if(rs===0){var e=Ls;e===0&&(e=Ss,Ss<<=1,(Ss&261888)===0&&(Ss=256)),rs=e}return rs}function f_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ec(e)}function yM(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=f_((u[ee]||null).action),S=o.submitter;S&&(n=(n=S[ee]||null)?f_(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var D=new sc("action","action",null,o,u);e.push({event:D,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(rs!==0){var X=new FormData(u,S);bh(a,{pending:!0,data:X,method:u.method,action:h},null,X)}}else typeof h=="function"&&(D.preventDefault(),X=new FormData(u,S),bh(a,{pending:!0,data:X,method:u.method,action:h},h,X))},currentTarget:u}]})}}for(var _d=0;_d<kf.length;_d++){var yd=kf[_d],xM=yd.toLowerCase(),SM=yd[0].toUpperCase()+yd.slice(1);Oi(xM,"on"+SM)}Oi(I0,"onAnimationEnd"),Oi(B0,"onAnimationIteration"),Oi(F0,"onAnimationStart"),Oi("dblclick","onDoubleClick"),Oi("focusin","onFocus"),Oi("focusout","onBlur"),Oi(D1,"onTransitionRun"),Oi(N1,"onTransitionStart"),Oi(U1,"onTransitionCancel"),Oi(H0,"onTransitionEnd"),cn("onMouseEnter",["mouseout","mouseover"]),cn("onMouseLeave",["mouseout","mouseover"]),cn("onPointerEnter",["pointerout","pointerover"]),cn("onPointerLeave",["pointerout","pointerover"]),mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),mn("onBeforeInput",["compositionend","keypress","textInput","paste"]),mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),MM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ul));function h_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var D=o[S],X=D.instance,at=D.currentTarget;if(D=D.listener,X!==h&&u.isPropagationStopped())break t;h=D,u.currentTarget=at;try{h(u)}catch(ft){lc(ft)}u.currentTarget=null,h=X}else for(S=0;S<o.length;S++){if(D=o[S],X=D.instance,at=D.currentTarget,D=D.listener,X!==h&&u.isPropagationStopped())break t;h=D,u.currentTarget=at;try{h(u)}catch(ft){lc(ft)}u.currentTarget=null,h=X}}}}function Ce(e,n){var a=n[ue];a===void 0&&(a=n[ue]=new Set);var o=e+"__bubble";a.has(o)||(d_(n,e,2,!1),a.add(o))}function xd(e,n,a){var o=0;n&&(o|=4),d_(a,e,o,n)}var ru="_reactListening"+Math.random().toString(36).slice(2);function Sd(e){if(!e[ru]){e[ru]=!0,Je.forEach(function(a){a!=="selectionchange"&&(MM.has(a)||xd(a,!1,e),xd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ru]||(n[ru]=!0,xd("selectionchange",!1,n))}}function d_(e,n,a,o){switch(ny(n)){case 2:var u=pE;break;case 8:u=mE;break;default:u=Gd}a=u.bind(null,n,a,e),u=void 0,!Rf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function Md(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var D=o.stateNode.containerInfo;if(D===u)break;if(S===4)for(S=o.return;S!==null;){var X=S.tag;if((X===3||X===4)&&S.stateNode.containerInfo===u)return;S=S.return}for(;D!==null;){if(S=Be(D),S===null)return;if(X=S.tag,X===5||X===6||X===26||X===27){o=h=S;continue t}D=D.parentNode}}o=o.return}d0(function(){var at=h,ft=wf(a),At=[];t:{var tt=G0.get(e);if(tt!==void 0){var ct=sc,Xt=e;switch(e){case"keypress":if(ic(a)===0)break t;case"keydown":case"keyup":ct=r1;break;case"focusin":Xt="focus",ct=Lf;break;case"focusout":Xt="blur",ct=Lf;break;case"beforeblur":case"afterblur":ct=Lf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=g0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=WS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=f1;break;case I0:case B0:case F0:ct=KS;break;case H0:ct=d1;break;case"scroll":case"scrollend":ct=YS;break;case"wheel":ct=m1;break;case"copy":case"cut":case"paste":ct=$S;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=_0;break;case"submit":ct=c1;break;case"toggle":case"beforetoggle":ct=v1}var ne=(n&4)!==0,Se=!ne&&(e==="scroll"||e==="scrollend"),nt=ne?tt!==null?tt+"Capture":null:tt;ne=[];for(var Z=at,lt;Z!==null;){var Tt=Z;if(lt=Tt.stateNode,Tt=Tt.tag,Tt!==5&&Tt!==26&&Tt!==27||lt===null||nt===null||(Tt=Uo(Z,nt),Tt!=null&&ne.push(fl(Z,Tt,lt))),Se)break;Z=Z.return}0<ne.length&&(tt=new ct(tt,Xt,null,a,ft),At.push({event:tt,listeners:ne}))}}if((n&7)===0){t:{if(ct=e==="mouseover"||e==="pointerover",tt=e==="mouseout"||e==="pointerout",ct&&a!==Af&&(Xt=a.relatedTarget||a.fromElement)&&(Be(Xt)||Xt[pe]))break t;(tt||ct)&&(Xt=ft.window===ft?ft:(ct=ft.ownerDocument)?ct.defaultView||ct.parentWindow:window,tt?(ct=a.relatedTarget||a.toElement,tt=at,ct=ct?Be(ct):null,ct!==null&&(Se=c(ct),ne=ct.tag,ct!==Se||ne!==5&&ne!==27&&ne!==6)&&(ct=null)):(tt=null,ct=at),tt!==ct&&(ne=g0,Tt="onMouseLeave",nt="onMouseEnter",Z="mouse",(e==="pointerout"||e==="pointerover")&&(ne=_0,Tt="onPointerLeave",nt="onPointerEnter",Z="pointer"),Se=tt==null?Xt:Tn(tt),lt=ct==null?Xt:Tn(ct),Xt=new ne(Tt,Z+"leave",tt,a,ft),Xt.target=Se,Xt.relatedTarget=lt,Tt=null,Be(ft)===at&&(ne=new ne(nt,Z+"enter",ct,a,ft),ne.target=lt,ne.relatedTarget=Se,Tt=ne),Se=Tt,ne=tt&&ct?z(tt,ct,EM):null,tt!==null&&p_(At,Xt,tt,ne,!1),ct!==null&&Se!==null&&p_(At,Se,ct,ne,!0)))}t:{if(tt=at?Tn(at):window,ct=tt.nodeName&&tt.nodeName.toLowerCase(),ct==="select"||ct==="input"&&tt.type==="file")var Kt=A0;else if(T0(tt))if(w0)Kt=w1;else{Kt=b1;var Ne=T1}else ct=tt.nodeName,!ct||ct.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?at&&bf(at.elementType)&&(Kt=A0):Kt=A1;if(Kt&&(Kt=Kt(e,at))){b0(At,Kt,a,ft);break t}Ne&&Ne(e,tt,at)}switch(Ne=at?Tn(at):window,e){case"focusin":(T0(Ne)||Ne.contentEditable==="true")&&(vr=Ne,Hf=at,Ho=null);break;case"focusout":Ho=Hf=vr=null;break;case"mousedown":Gf=!0;break;case"contextmenu":case"mouseup":case"dragend":Gf=!1,P0(At,a,ft);break;case"selectionchange":if(R1)break;case"keydown":case"keyup":P0(At,a,ft)}var ce;if(Pf)t:{switch(e){case"compositionstart":var me="onCompositionStart";break t;case"compositionend":me="onCompositionEnd";break t;case"compositionupdate":me="onCompositionUpdate";break t}me=void 0}else gr?M0(e,a)&&(me="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(y0&&a.locale!=="ko"&&(gr||me!=="onCompositionStart"?me==="onCompositionEnd"&&gr&&(ce=p0()):(Ga=ft,Df="value"in Ga?Ga.value:Ga.textContent,gr=!0)),Ne=ou(at,me),0<Ne.length&&(me=new v0(me,e,null,a,ft),At.push({event:me,listeners:Ne}),ce?me.data=ce:(ce=E0(a),ce!==null&&(me.data=ce)))),(ce=y1?x1(e,a):S1(e,a))&&(me=ou(at,"onBeforeInput"),0<me.length&&(Ne=new v0("onBeforeInput","beforeinput",null,a,ft),At.push({event:Ne,listeners:me}),Ne.data=ce)),yM(At,e,at,a,ft)}h_(At,n)})}function fl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function ou(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=Uo(e,a),u!=null&&o.unshift(fl(e,u,h)),u=Uo(e,n),u!=null&&o.push(fl(e,u,h))),e.tag===3)return o;e=e.return}return[]}function EM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function p_(e,n,a,o,u){for(var h=n._reactName,S=[];a!==null&&a!==o;){var D=a,X=D.alternate,at=D.stateNode;if(D=D.tag,X!==null&&X===o)break;D!==5&&D!==26&&D!==27||at===null||(X=at,u?(at=Uo(a,h),at!=null&&S.unshift(fl(a,at,X))):u||(at=Uo(a,h),at!=null&&S.push(fl(a,at,X)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var TM=/\r\n?/g,bM=/\u0000|\uFFFD/g;function m_(e){return(typeof e=="string"?e:""+e).replace(TM,`
`).replace(bM,"")}function g_(e,n){return n=m_(n),m_(e)===n}function Ye(e,n,a,o,u,h){switch(a){case"children":if(typeof o=="string")n==="body"||n==="textarea"&&o===""||dr(e,o);else if(typeof o=="number"||typeof o=="bigint")n!=="body"&&dr(e,""+o);else return;break;case"className":tc(e,"class",o);break;case"tabIndex":tc(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":tc(e,a,o);break;case"style":f0(e,o,h);return;case"data":if(n!=="object"){tc(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ec(o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ye(e,n,"name",u.name,u,null),Ye(e,n,"formEncType",u.formEncType,u,null),Ye(e,n,"formMethod",u.formMethod,u,null),Ye(e,n,"formTarget",u.formTarget,u,null)):(Ye(e,n,"encType",u.encType,u,null),Ye(e,n,"method",u.method,u,null),Ye(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ec(o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Wi);return;case"onScroll":o!=null&&Ce("scroll",e);return;case"onScrollEnd":o!=null&&Ce("scrollend",e);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));(h!=null?h.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ec(o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),$l(e,"popover",o);break;case"xlinkActuate":da(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":da(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":da(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":da(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":da(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":da(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":da(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":da(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":da(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":$l(e,"is",o);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=XS.get(a)||a,$l(e,a,o);else return}ze=!0}function Ed(e,n,a,o,u,h){switch(a){case"style":f0(e,o,h);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));(h!=null?h.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof o=="string")dr(e,o);else if(typeof o=="number"||typeof o=="bigint")dr(e,""+o);else return;break;case"onScroll":o!=null&&Ce("scroll",e);return;case"onScrollEnd":o!=null&&Ce("scrollend",e);return;case"onClick":o!=null&&(e.onclick=Wi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!jn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),h=a.slice(2,u?a.length-7:void 0),n=e[ee]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(h,n,u),typeof o=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(h,o,u);break t}ze=!0,a in e?e[a]=o:o===!0?e.setAttribute(a,""):$l(e,a,o)}return}ze=!0}function zn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var S=a[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ye(e,n,h,S,a,null)}}u&&Ye(e,n,"srcSet",a.srcSet,a,null),o&&Ye(e,n,"src",a.src,a,null);return;case"input":Ce("invalid",e);var D=h=S=u=null,X=null,at=null;for(o in a)if(a.hasOwnProperty(o)){var ft=a[o];if(ft!=null)switch(o){case"name":u=ft;break;case"type":S=ft;break;case"checked":X=ft;break;case"defaultChecked":at=ft;break;case"value":h=ft;break;case"defaultValue":D=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:Ye(e,n,o,ft,a,null)}}o0(e,h,D,X,at,S,u,!1);return;case"select":Ce("invalid",e),o=S=h=null;for(u in a)if(a.hasOwnProperty(u)&&(D=a[u],D!=null))switch(u){case"value":h=D;break;case"defaultValue":S=D;break;case"multiple":o=D;default:Ye(e,n,u,D,a,null)}n=h,a=S,e.multiple=!!o,n!=null?hr(e,!!o,n,!1):a!=null&&hr(e,!!o,a,!0);return;case"textarea":Ce("invalid",e),h=u=o=null;for(S in a)if(a.hasOwnProperty(S)&&(D=a[S],D!=null))switch(S){case"value":o=D;break;case"defaultValue":u=D;break;case"children":h=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(s(91));break;default:Ye(e,n,S,D,a,null)}c0(e,o,u,h);return;case"option":for(X in a)if(a.hasOwnProperty(X)&&(o=a[X],o!=null))switch(X){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ye(e,n,X,o,a,null)}return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(o=0;o<ul.length;o++)Ce(ul[o],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(at in a)if(a.hasOwnProperty(at)&&(o=a[at],o!=null))switch(at){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ye(e,n,at,o,a,null)}return;default:if(bf(n)){for(ft in a)a.hasOwnProperty(ft)&&(o=a[ft],o!==void 0&&Ed(e,n,ft,o,a,void 0));return}}for(D in a)a.hasOwnProperty(D)&&(o=a[D],o!=null&&Ye(e,n,D,o,a,null))}var AM={};function wM(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,S=null,D=null,X=null,at=null,ft=null;for(ct in a){var At=a[ct];if(a.hasOwnProperty(ct)&&At!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":X=At;default:o.hasOwnProperty(ct)||Ye(e,n,ct,null,o,At)}}for(var tt in o){var ct=o[tt];if(At=a[tt],o.hasOwnProperty(tt)&&(ct!=null||At!=null))switch(tt){case"type":ct!==At&&(ze=!0),h=ct;break;case"name":ct!==At&&(ze=!0),u=ct;break;case"checked":ct!==At&&(ze=!0),at=ct;break;case"defaultChecked":ct!==At&&(ze=!0),ft=ct;break;case"value":ct!==At&&(ze=!0),S=ct;break;case"defaultValue":ct!==At&&(ze=!0),D=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:ct!==At&&Ye(e,n,tt,ct,o,At)}}Ef(e,S,D,X,at,ft,h,u);return;case"select":ct=S=D=tt=null;for(h in a)if(X=a[h],a.hasOwnProperty(h)&&X!=null)switch(h){case"value":break;case"multiple":ct=X;default:o.hasOwnProperty(h)||Ye(e,n,h,null,o,X)}for(u in o)if(h=o[u],X=a[u],o.hasOwnProperty(u)&&(h!=null||X!=null))switch(u){case"value":h!==X&&(ze=!0),tt=h;break;case"defaultValue":h!==X&&(ze=!0),D=h;break;case"multiple":h!==X&&(ze=!0),S=h;default:h!==X&&Ye(e,n,u,h,o,X)}n=D,a=S,o=ct,tt!=null?hr(e,!!a,tt,!1):!!o!=!!a&&(n!=null?hr(e,!!a,n,!0):hr(e,!!a,a?[]:"",!1));return;case"textarea":ct=tt=null;for(D in a)if(u=a[D],a.hasOwnProperty(D)&&u!=null&&!o.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:Ye(e,n,D,null,o,u)}for(S in o)if(u=o[S],h=a[S],o.hasOwnProperty(S)&&(u!=null||h!=null))switch(S){case"value":u!==h&&(ze=!0),tt=u;break;case"defaultValue":u!==h&&(ze=!0),ct=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Ye(e,n,S,u,o,h)}l0(e,tt,ct);return;case"option":for(var Xt in a)if(tt=a[Xt],a.hasOwnProperty(Xt)&&tt!=null&&!o.hasOwnProperty(Xt))switch(Xt){case"selected":e.selected=!1;break;default:Ye(e,n,Xt,null,o,tt)}for(X in o)if(tt=o[X],ct=a[X],o.hasOwnProperty(X)&&tt!==ct&&(tt!=null||ct!=null))switch(X){case"selected":tt!==ct&&(ze=!0),e.selected=tt&&typeof tt!="function"&&typeof tt!="symbol";break;default:Ye(e,n,X,tt,o,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ne in a)tt=a[ne],a.hasOwnProperty(ne)&&tt!=null&&!o.hasOwnProperty(ne)&&Ye(e,n,ne,null,o,tt);for(at in o)if(tt=o[at],ct=a[at],o.hasOwnProperty(at)&&tt!==ct&&(tt!=null||ct!=null))switch(at){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:Ye(e,n,at,tt,o,ct)}return;default:if(bf(n)){for(var Se in a)tt=a[Se],a.hasOwnProperty(Se)&&tt!==void 0&&!o.hasOwnProperty(Se)&&Ed(e,n,Se,void 0,o,tt);for(ft in o)tt=o[ft],ct=a[ft],!o.hasOwnProperty(ft)||tt===ct||tt===void 0&&ct===void 0||Ed(e,n,ft,tt,o,ct);return}}for(var nt in a)tt=a[nt],a.hasOwnProperty(nt)&&tt!=null&&!o.hasOwnProperty(nt)&&Ye(e,n,nt,null,o,tt);for(At in o)tt=o[At],ct=a[At],!o.hasOwnProperty(At)||tt===ct||tt==null&&ct==null||Ye(e,n,At,tt,o,ct)}function v_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function CM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,S=u.initiatorType,D=u.duration;if(h&&D&&v_(S)){for(S=0,D=u.responseEnd,o+=1;o<a.length;o++){var X=a[o],at=X.startTime;if(at>D)break;var ft=X.transferSize,At=X.initiatorType;ft&&v_(At)&&(X=X.responseEnd,S+=ft*(X<D?1:(D-at)/(X-at)))}if(--o,n+=8*(h+S)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Td=null,bd=null;function hl(e){return e.nodeType===9?e:e.ownerDocument}function __(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function y_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function x_(e,n,a,o){return a=hl(a).createElement(e),a[Vt]=o,a[ee]=n,zn(a,e,n),Pe(a),a}function Ad(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var wd=null;function RM(){var e=window.event;return e&&e.type==="popstate"?e===wd?!1:(wd=e,!0):(wd=null,!1)}var Cd=typeof setTimeout=="function"?setTimeout:void 0,DM=typeof clearTimeout=="function"?clearTimeout:void 0,S_=typeof Promise=="function"?Promise:void 0,M_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Cd,NM=typeof queueMicrotask=="function"?queueMicrotask:typeof S_<"u"?function(e){return S_.resolve(null).then(e).catch(UM)}:Cd;function UM(e){setTimeout(function(){throw e})}function os(e){return e==="head"}function E_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Qr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")zd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,zd(a);for(var h=a.firstChild;h;){var S=h.nextSibling,D=h.nodeName;h[Ie]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=S}}else a==="body"&&zd(e.ownerDocument.body);a=u}while(a);Qr(n)}function T_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function b_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var o=1;else for(var u=o=0;u<n.length;u++){var h=n[u];0<h.width&&0<h.height&&o++}o===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function A_(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function LM(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function Rd(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return LM(n,a,e)}function OM(e){return e.documentElement.clientHeight}function PM(e){this.addEventListener("load",e),this.addEventListener("error",e)}function zM(e,n,a,o,u,h,S,D,X){var at=n.nodeType===9?n:n.ownerDocument;try{var ft=at.startViewTransition({update:function(){var tt=at.defaultView,ct=tt.navigation&&tt.navigation.transition,Xt=at.fonts.status;o();var ne=[];if(Xt==="loaded"&&(OM(at),at.fonts.status==="loading"&&ne.push(at.fonts.ready)),Xt=ne.length,e!==null)for(var Se=e.suspenseyImages,nt=0,Z=0;Z<Se.length;Z++){var lt=Se[Z];if(!lt.complete){var Tt=lt.getBoundingClientRect();if(0<Tt.bottom&&0<Tt.right&&Tt.top<tt.innerHeight&&Tt.left<tt.innerWidth){if(nt+=j_(lt),nt>uu){ne.length=Xt;break}lt=new Promise(PM.bind(lt)),ne.push(lt)}}}if(0<ne.length)return tt=Promise.race([Promise.all(ne),new Promise(function(Kt){return setTimeout(Kt,500)})]).then(u,u),(ct?Promise.allSettled([ct.finished,tt]):tt).then(h,h);if(u(),ct)return ct.finished.then(h,h);h()},types:a});at.__reactViewTransition=ft;var At=[];return ft.ready.then(function(){for(var tt=at.documentElement.getAnimations({subtree:!0}),ct=0;ct<tt.length;ct++){var Xt=tt[ct],ne=Xt.effect,Se=ne.pseudoElement;if(Se!=null&&Se.startsWith("::view-transition")){At.push(Xt),Xt=ne.getKeyframes();for(var nt=Se=void 0,Z=!0,lt=0;lt<Xt.length;lt++){var Tt=Xt[lt],Kt=Tt.width;if(Se===void 0)Se=Kt;else if(Se!==Kt){Z=!1;break}if(Kt=Tt.height,nt===void 0)nt=Kt;else if(nt!==Kt){Z=!1;break}delete Tt.width,delete Tt.height,Tt.transform==="none"&&delete Tt.transform}Z&&Se!==void 0&&nt!==void 0&&(ne.setKeyframes(Xt),Z=getComputedStyle(ne.target,ne.pseudoElement),Z.width!==Se||Z.height!==nt)&&(Z=Xt[0],Z.width=Se,Z.height=nt,Z=Xt[Xt.length-1],Z.width=Se,Z.height=nt,ne.setKeyframes(Xt))}}S()},function(tt){at.__reactViewTransition===ft&&(at.__reactViewTransition=null);try{if(typeof tt=="object"&&tt!==null)switch(tt.name){case"InvalidStateError":(tt.message==="View transition was skipped because document visibility state is hidden."||tt.message==="Skipping view transition because document visibility state has become hidden."||tt.message==="Skipping view transition because viewport size changed."||tt.message==="Transition was aborted because of invalid state")&&(tt=null)}tt!==null&&X(tt)}finally{o(),u(),S()}}),ft.finished.finally(function(){for(var tt=0;tt<At.length;tt++)At[tt].cancel();at.__reactViewTransition===ft&&(at.__reactViewTransition=null),D()}),ft}catch{return o(),u(),S(),null}}function Xs(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Xs.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:I({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Xs.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),o=[],u=0;u<a.length;u++){var h=a[u].effect;h!==null&&h.target===e&&h.pseudoElement===n&&o.push(a[u])}return o},Xs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function w_(e){return{name:e,group:new Xs("group",e),imagePair:new Xs("image-pair",e),old:new Xs("old",e),new:new Xs("new",e)}}function mi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}mi.prototype.addEventListener=function(e,n,a){var o=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(o=a.signal||null,o!==null&&o.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var h=this._eventListeners;if(R_(h,e,n,a)===-1){var S=this,D=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(D=function(X){S.removeEventListener(e,n,a),typeof n=="function"?n.call(this,X):n.handleEvent(X)}),o!==null&&(u=S.removeEventListener.bind(S,e,n,a),o.addEventListener("abort",u,{once:!0}),u=o.removeEventListener.bind(o,"abort",u)),o=Xr(a),h.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:D,cleanup:u}),g(this._fragmentFiber.child,!1,IM,e,D,o)}this._eventListeners=h}};function IM(e,n,a,o){return M(e).addEventListener(n,a,o),!1}mi.prototype.removeEventListener=function(e,n,a){var o=this._eventListeners;if(o!==null&&(n=R_(o,e,n,a),n!==-1)){var u=o[n];a=u.attachedListener;var h=u.cleanup;u=Xr(u.optionsOrUseCapture),g(this._fragmentFiber.child,!1,BM,e,a,u),o.splice(n,1),h!==null&&h()}};function BM(e,n,a,o){return M(e).removeEventListener(n,a,o),!1}function Xr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function C_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function R_(e,n,a,o){if(e.length===0)return-1;o=C_(o);for(var u=0;u<e.length;u++){var h=e[u];if(h.type===n&&h.listener===a&&C_(h.optionsOrUseCapture)===o)return u}return-1}mi.prototype.dispatchEvent=function(e){var n=y(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var o=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var h=a[u];o.addEventListener(h.type,h.attachedListener,Xr(h.optionsOrUseCapture))}if(n.appendChild(o),e=o.dispatchEvent(e),a)for(u=0;u<a.length;u++)h=a[u],o.removeEventListener(h.type,h.attachedListener,Xr(h.optionsOrUseCapture));return n.removeChild(o),e}return n.dispatchEvent(e)},mi.prototype.focus=function(e){g(this._fragmentFiber.child,!0,D_,e,void 0,void 0)};function D_(e,n){return e.tag===6?!1:(e=M(e),QM(e,n))}mi.prototype.focusLast=function(e){var n=[];g(this._fragmentFiber.child,!0,Dd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!D_(n[a],e);a--);};function Dd(e,n){return n.push(e),!1}mi.prototype.blur=function(){var e=y(this._fragmentFiber);e!==null&&(e=M(e),e=hl(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,FM,e,void 0,void 0))};function FM(e,n){return e.tag===6?!1:(e=M(e),e===n||e.contains(n)?(n.blur(),!0):!1)}mi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,HM,e,void 0,void 0)};function HM(e,n){return e.tag===6||(e=M(e),n.observe(e)),!1}mi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),g(this._fragmentFiber.child,!1,GM,e,void 0,void 0);for(var a=n=0;a<Fi.length;a++){var o=Fi[a];o.fragmentInstance===this&&o.observer===e?e.unobserve(o.instance):Fi[n++]=o}Fi.length=n}};function GM(e,n){return e.tag===6||(e=M(e),n.unobserve(e)),!1}var Fi=[],Nd=!1;function VM(e,n,a){Fi.push({fragmentInstance:e,observer:n,instance:a}),Nd||(Nd=!0,KM(function(){Nd=!1;var o=Fi;Fi=[];for(var u=0;u<o.length;u++){var h=o[u];h.observer.unobserve(h.instance)}}))}mi.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,kM,e,void 0,void 0),e};function kM(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=M(e),n.push.apply(n,e.getClientRects());return!1}mi.prototype.getRootNode=function(e){var n=y(this._fragmentFiber);return n===null?this:M(n).getRootNode(e)},mi.prototype.compareDocumentPosition=function(e){var n=y(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,Dd,a,void 0,void 0);var o=M(n);if(a.length===0){if(a=o,x(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=o=a.compareDocumentPosition(e);return a===e?u=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(e=M(a).compareDocumentPosition(e),u=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),u=M(a[a.length-1]);var h=x(this._fragmentFiber)?n.parentElement:o;if(h==null)return Node.DOCUMENT_POSITION_DISCONNECTED;o=h.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,h=h.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var S=n.compareDocumentPosition(e),D=u.compareDocumentPosition(e),X=S&Node.DOCUMENT_POSITION_CONTAINED_BY||D&Node.DOCUMENT_POSITION_CONTAINED_BY;return D=o&&h&&S&Node.DOCUMENT_POSITION_FOLLOWING&&D&Node.DOCUMENT_POSITION_PRECEDING,n=o&&n===e||h&&u===e||X||D?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&n===e||!h&&u===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:S,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||XM(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function XM(e,n,a,o,u){var h=Be(u);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!h)t:{for(;h!==null;){if(h.tag===7&&(h===n||h.alternate===n)){a=!0;break t}h=h.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(h===null)return h=u.ownerDocument,u===h||u===h.documentElement||u===h.body;t:{for(h=n,n=y(n);h!==null;){if(!(h.tag!==5&&h.tag!==3&&h.tag!==27||h!==n&&h.alternate!==n)){h=!0;break t}h=h.return}h=!1}return h}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!h)&&!(n=h===a)&&(n=z(a,h,P),n===null?n=!1:(g(n,!0,C,h,a),h=_,_=null,n=h!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!h)&&!(n=h===o)&&(n=z(o,h,P),n===null?n=!1:(g(n,!0,b,h,o),h=_,w=_=null,n=h!==null)),n):!1}function N_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}mi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];g(this._fragmentFiber.child,!1,Dd,n,void 0,void 0);var a=e!==!1;if(n.length===0){var o=E(this._fragmentFiber);if(o=a?o[1]||o[0]||y(this._fragmentFiber):o[0]||o[1],o===null)return;if(o.tag===6){e=M(o),N_(e,a);return}if(o=M(o),o.nodeType!==9){if(o.nodeType===11){a="host"in o?o.host:null,a!==null&&a.scrollIntoView(e);return}o.scrollIntoView(e)}}for(o=a?n.length-1:0;o!==(a?-1:n.length);){var u=n[o];u.tag===6?(u=M(u),N_(u,a)):M(u).scrollIntoView(e),o+=a?-1:1}};function qM(e,n){return e=M(e),U_(e,n),!1}function U_(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function L_(e,n){var a=n._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];e.addEventListener(u.type,u.attachedListener,Xr(u.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(h){for(var S=0,D=0;D<Fi.length;D++){var X=Fi[D];(X.fragmentInstance!==n||X.observer!==h||X.instance!==e)&&(Fi[S++]=X)}Fi.length=S,h.observe(e)}),U_(e,n))}function YM(e,n){var a=n._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];e.removeEventListener(u.type,u.attachedListener,Xr(u.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(h){typeof h.rootMargin=="string"?VM(n,h,e):h.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function Ud(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ud(a),fe(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function jM(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ie])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Ri(e.nextSibling),e===null)break}return null}function WM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ri(e.nextSibling),e===null))return null;return e}function O_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ri(e.nextSibling),e===null))return null;return e}function Ld(e){return e.data==="$?"||e.data==="$~"}function Od(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function ZM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ri(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Pd=null;function P_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ri(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function z_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function QM(e,n){function a(){o=!0}if(e.ownerDocument.activeElement===e)return!0;var o=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return o}function KM(e){M_(function(){M_(function(n){return e(n)})})}function I_(e,n,a){switch(n=hl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function B_(e,n,a){for(var o in a){var u=a[o];a.hasOwnProperty(o)&&u!=null&&Ye(e,n,o,null,AM,u)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Wi&&(e.onclick=null),fe(e)}function zd(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);fe(e)}var Di=new Map,F_=new Set;function dl(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Aa=Ot.d;Ot.d={f:JM,r:$M,D:tE,C:eE,L:nE,m:iE,X:sE,S:aE,M:rE};function JM(){var e=Aa.f(),n=eu();return e||n}function $M(e){var n=Ee(e);n!==null&&n.tag===5&&n.type==="form"?Gg(n):Aa.r(e)}var qr=typeof document>"u"?null:document;function H_(e,n,a){var o=qr;if(o&&typeof n=="string"&&n){var u=Mi(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),F_.has(u)||(F_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),zn(n,"link",e),Pe(n),o.head.appendChild(n)))}}function tE(e){Aa.D(e),H_("dns-prefetch",e,null)}function eE(e,n){Aa.C(e,n),H_("preconnect",e,n)}function nE(e,n,a){Aa.L(e,n,a);var o=qr;if(o&&e&&n){var u='link[rel="preload"][as="'+Mi(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Mi(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Mi(a.imageSizes)+'"]')):u+='[href="'+Mi(e)+'"]';var h=u;switch(n){case"style":h=Yr(e);break;case"script":h=jr(e)}if(!(Di.has(h)||(e=I({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Di.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(pl(h))||n==="script"&&o.querySelector(ml(h))))){var S=o.createElement("link");zn(S,"link",e),n==="style"&&(S[Oe]=!0,S.onload=S.onerror=function(){Ha(S)}),Pe(S),o.head.appendChild(S)}}}function iE(e,n){Aa.m(e,n);var a=qr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Mi(o)+'"][href="'+Mi(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=jr(e)}if(!Di.has(h)&&(e=I({rel:"modulepreload",href:e},n),Di.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ml(h)))return}o=a.createElement("link"),zn(o,"link",e),Pe(o),a.head.appendChild(o)}}}function aE(e,n,a){Aa.S(e,n,a);var o=qr;if(o&&e){var u=oi(o).hoistableStyles,h=Yr(e);n=n||"default";var S=u.get(h);if(!S){var D={loading:0,preload:null};if(S=o.querySelector(pl(h)))D.loading=5;else{e=I({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Di.get(h))&&Id(e,a);var X=S=o.createElement("link");Pe(X),zn(X,"link",e),X._p=new Promise(function(at,ft){X.onload=at,X.onerror=ft}),X.addEventListener("load",function(){D.loading|=1}),X.addEventListener("error",function(){D.loading|=2}),D.loading|=4,lu(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:D},u.set(h,S)}}}function sE(e,n){Aa.X(e,n);var a=qr;if(a&&e){var o=oi(a).hoistableScripts,u=jr(e),h=o.get(u);h||(h=a.querySelector(ml(u)),h||(e=I({src:e,async:!0},n),(n=Di.get(u))&&Bd(e,n),h=a.createElement("script"),Pe(h),zn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function rE(e,n){Aa.M(e,n);var a=qr;if(a&&e){var o=oi(a).hoistableScripts,u=jr(e),h=o.get(u);h||(h=a.querySelector(ml(u)),h||(e=I({src:e,async:!0,type:"module"},n),(n=Di.get(u))&&Bd(e,n),h=a.createElement("script"),Pe(h),zn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function G_(e,n,a,o){var u=(u=le.current)?dl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Yr(a.href),n=oi(u).hoistableStyles,o=n.get(a),o||(o={type:"style",instance:null,count:0,state:null},n.set(a,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Yr(a.href);var h=oi(u).hoistableStyles,S=h.get(e);if(S||(u=u.ownerDocument||u,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,S),(h=u.querySelector(pl(e)))?h._p||(S.instance=h,S.state.loading=5):(h=Di.get(e),h||(h={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Di.set(e,h)),oE(u,e,h,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=jr(a),n=oi(u).hoistableScripts,o=n.get(a),o||(o={type:"script",instance:null,count:0,state:null},n.set(a,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Yr(e){return'href="'+Mi(e)+'"'}function pl(e){return'link[rel="stylesheet"]['+e+"]"}function V_(e){return I({},e,{"data-precedence":e.precedence,precedence:null})}function oE(e,n,a,o){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Oe]!==!0){o.loading=1;return}}else n=e.createElement("link"),n[Oe]=!0,n.onload=n.onerror=Ha.bind(null,n),zn(n,"link",a),Pe(n),e.head.appendChild(n);o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2})}function jr(e){return'[src="'+Mi(e)+'"]'}function ml(e){return"script[async]"+e}function k_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Mi(a.href)+'"]');if(o)return n.instance=o,Pe(o),o;var u=I({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Pe(o),zn(o,"style",u),lu(o,a.precedence,e),n.instance=o;case"stylesheet":u=Yr(a.href);var h=e.querySelector(pl(u));if(h)return n.state.loading|=4,n.instance=h,Pe(h),h;o=V_(a),(u=Di.get(u))&&Id(o,u),h=(e.ownerDocument||e).createElement("link"),Pe(h);var S=h;return S._p=new Promise(function(D,X){S.onload=D,S.onerror=X}),zn(h,"link",o),n.state.loading|=4,lu(h,a.precedence,e),n.instance=h;case"script":return h=jr(a.src),(u=e.querySelector(ml(h)))?(n.instance=u,Pe(u),u):(o=a,(u=Di.get(h))&&(o=I({},a),Bd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),Pe(u),zn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,lu(o,a.precedence,e));return n.instance}function lu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,S=0;S<o.length;S++){var D=o[S];if(D.dataset.precedence===n)h=D;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Id(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Bd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var cu=null;function X_(e,n,a){if(cu===null){var o=new Map,u=cu=new Map;u.set(a,o)}else u=cu,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Ie]||h[Vt]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=e+S;var D=o.get(S);D?D.push(h):o.set(S,[h])}}return o}function Fd(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function lE(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function q_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Y_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function j_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function W_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=j_(n),e.suspenseyImages.push(n)),e=fE.bind(e),n.decode().then(e,e))}function cE(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Yr(o.href),h=n.querySelector(pl(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=gl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,Pe(h);return}h=n.ownerDocument||n,o=V_(o),(u=Di.get(u))&&Id(o,u),h=h.createElement("link"),Pe(h);var S=h;S._p=new Promise(function(D,X){S.onload=D,S.onerror=X}),zn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=gl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var uu=0;function uE(e,n){return e.stylesheets&&e.count===0&&hu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&hu(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&uu===0&&(uu=62500*CM());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hu(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>uu?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Z_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)hu(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function gl(){this.count--,Z_(this)}function fE(){this.imgCount--,Z_(this)}var fu=null;function hu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fu=new Map,n.forEach(hE,e),fu=null,gl.call(e))}function hE(e,n){if(!(n.state.loading&4)){var a=fu.get(e);if(a)var o=a.get(null);else{a=new Map,fu.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var S=u[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}u=n.instance,S=u.getAttribute("data-precedence"),h=a.get(S)||o,h===o&&a.set(null,u),a.set(S,u),this.count++,o=gl.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var Wr={$$typeof:$,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function dE(e,n,a,o,u,h,S,D,X){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=No(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=No(0),this.hiddenUpdates=No(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=X,this.transitionTypes=null,this.incompleteTransitions=new Map}function Q_(e,n,a,o,u,h,S,D,X,at,ft,At){return e=new dE(e,n,a,S,X,at,ft,At,D),n=1,h===!0&&(n|=24),h=ei(3,null,null,n),e.current=h,h.stateNode=e,n=th(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},ah(h),e}function K_(e){return e?(e=xr,e):xr}function J_(e,n,a,o,u,h){u=K_(u),o.context===null?o.context=u:o.pendingContext=u,o=Za(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Qa(e,o,n),a!==null&&(si(a,e,n),jo(a,e,n))}function $_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Hd(e,n){$_(e,n),(e=e.alternate)&&$_(e,n)}function ty(e){if(e.tag===13||e.tag===31){var n=ws(e,67108864);n!==null&&si(n,e,67108864),Hd(e,67108864)}}function ey(e){if(e.tag===13||e.tag===31){var n=pi();n=_t(n);var a=ws(e,n);a!==null&&si(a,e,n),Hd(e,n)}}var Zr=!0;function pE(e,n,a,o){var u=wt.T;wt.T=null;var h=Ot.p;try{Ot.p=2,Gd(e,n,a,o)}finally{Ot.p=h,wt.T=u}}function mE(e,n,a,o){var u=wt.T;wt.T=null;var h=Ot.p;try{Ot.p=8,Gd(e,n,a,o)}finally{Ot.p=h,wt.T=u}}function Gd(e,n,a,o){if(Zr){var u=Vd(o);if(u===null)Md(e,n,o,du,a),iy(e,o);else if(vE(u,e,n,a,o))o.stopPropagation();else if(iy(e,o),n&4&&-1<gE.indexOf(e)){for(;u!==null;){var h=Ee(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=Si(h.pendingLanes);if(S!==0){var D=h;for(D.pendingLanes|=2,D.entangledLanes|=2;S;){var X=1<<31-Bn(S);D.entanglements[1]|=X,S&=~X}aa(h),(Fe&6)===0&&(Jc=W()+500,cl(0))}}break;case 31:case 13:D=ws(h,2),D!==null&&si(D,h,2),eu(),Hd(h,2)}if(h=Vd(o),h===null&&Md(e,n,o,du,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else Md(e,n,o,null,a)}}function Vd(e){return e=wf(e),kd(e)}var du=null;function kd(e){if(du=null,e=Be(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return du=e,null}function ny(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Bt()){case kt:return 2;case $t:return 8;case zt:case Ut:return 32;case ae:return 268435456;default:return 32}default:return 32}}var Xd=!1,ls=null,cs=null,us=null,vl=new Map,_l=new Map,fs=[],gE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function iy(e,n){switch(e){case"focusin":case"focusout":ls=null;break;case"dragenter":case"dragleave":cs=null;break;case"mouseover":case"mouseout":us=null;break;case"pointerover":case"pointerout":vl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":_l.delete(n.pointerId)}}function yl(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Ee(n),n!==null&&ty(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function vE(e,n,a,o,u){switch(n){case"focusin":return ls=yl(ls,e,n,a,o,u),!0;case"dragenter":return cs=yl(cs,e,n,a,o,u),!0;case"mouseover":return us=yl(us,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return vl.set(h,yl(vl.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,_l.set(h,yl(_l.get(h)||null,e,n,a,o,u)),!0}return!1}function ay(e){var n=Be(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Yt(e.priority,function(){ey(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Yt(e.priority,function(){ey(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Vd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Af=o,a.target.dispatchEvent(o),Af=null}else return n=Ee(a),n!==null&&ty(n),e.blockedOn=a,!1;n.shift()}return!0}function sy(e,n,a){pu(e)&&a.delete(n)}function _E(){Xd=!1,ls!==null&&pu(ls)&&(ls=null),cs!==null&&pu(cs)&&(cs=null),us!==null&&pu(us)&&(us=null),vl.forEach(sy),_l.forEach(sy)}function mu(e,n){e.blockedOn===n&&(e.blockedOn=null,Xd||(Xd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,_E)))}var gu=null;function ry(e){gu!==e&&(gu=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){gu===e&&(gu=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(kd(o||a)===null)continue;break}var h=Ee(a);h!==null&&(e.splice(n,3),n-=3,bh(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Qr(e){function n(X){return mu(X,e)}ls!==null&&mu(ls,e),cs!==null&&mu(cs,e),us!==null&&mu(us,e),vl.forEach(n),_l.forEach(n);for(var a=0;a<fs.length;a++){var o=fs[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<fs.length&&(a=fs[0],a.blockedOn===null);)ay(a),a.blockedOn===null&&fs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],S=u[ee]||null;if(typeof h=="function")S||ry(a);else if(S){var D=null;if(h&&h.hasAttribute("formAction")){if(u=h,S=h[ee]||null)D=S.formAction;else if(kd(u)!==null)continue}else D=S.action;typeof D=="function"?a[o+1]=D:(a.splice(o,3),o-=3),ry(a)}}}function oy(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return u=S})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function qd(e){this._internalRoot=e}vu.prototype.render=qd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=pi();J_(a,o,e,n,null,null)},vu.prototype.unmount=qd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;J_(e.current,2,null,e,null,null),eu(),n[pe]=null}};function vu(e){this._internalRoot=e}vu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ht();e={blockedOn:null,target:e,priority:n};for(var a=0;a<fs.length&&n!==0&&n<fs[a].priority;a++);fs.splice(a,0,e),a===0&&ay(e)}};var ly=t.version;if(ly!=="19.3.1")throw Error(s(527,ly,"19.3.1"));Ot.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var yE={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:wt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _u=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_u.isDisabled&&_u.supportsFiber)try{Re=_u.inject(yE),rn=_u}catch{}}return Sl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=Kg,h=Jg,S=$g;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Q_(e,1,!1,null,null,a,o,null,u,h,S,oy),e[pe]=n.current,Sd(e),new qd(n)},Sl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=Kg,S=Jg,D=$g,X=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(D=a.onRecoverableError),a.formState!==void 0&&(X=a.formState)),n=Q_(e,1,!0,n,a??null,o,u,X,h,S,D,oy),n.context=K_(null),a=n.current,o=pi(),o=_t(o),u=Za(o),u.callback=null,Qa(a,u,o),a=o,n.current.lanes=a,Ts(n,a),aa(n),e[pe]=n.current,Sd(e),new vu(n)},Sl.version="19.3.1",Sl}var _y;function NE(){if(_y)return Wd.exports;_y=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Wd.exports=DE(),Wd.exports}var UE=NE();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Hx=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var OE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=ge.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...d},p)=>ge.createElement("svg",{ref:p,...OE,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:Hx("lucide",l),...d},[...f.map(([m,v])=>ge.createElement(m,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=(r,t)=>{const i=ge.forwardRef(({className:s,...l},c)=>ge.createElement(PE,{ref:c,iconNode:t,className:Hx(`lucide-${LE(r)}`,s),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=ti("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=ti("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=ti("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=ti("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=ti("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=ti("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=ti("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=ti("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=ti("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=ti("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=ti("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gx=ti("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=ti("Wind",[["path",{d:"M12.8 19.6A2 2 0 1 0 14 16H2",key:"148xed"}],["path",{d:"M17.5 8a2.5 2.5 0 1 1 2 4H2",key:"1u4tom"}],["path",{d:"M9.8 4.4A2 2 0 1 1 11 8H2",key:"75valh"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=ti("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=ti("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Um="180",kE=0,Sy=1,XE=2,Vx=1,kx=2,Ua=3,xs=0,qn=1,_i=2,Pa=0,vo=1,ir=2,My=3,Ey=4,qE=5,$s=100,YE=101,jE=102,WE=103,ZE=104,QE=200,KE=201,JE=202,$E=203,Ip=204,Bp=205,tT=206,eT=207,nT=208,iT=209,aT=210,sT=211,rT=212,oT=213,lT=214,Fp=0,Hp=1,Gp=2,yo=3,Vp=4,kp=5,Xp=6,qp=7,Xx=0,cT=1,uT=2,za=0,qx=1,Yx=2,jx=3,Lm=4,Wx=5,Zx=6,Qx=7,Kx=300,xo=301,So=302,rf=303,Yp=304,gf=306,jp=1e3,er=1001,Wp=1002,yi=1003,fT=1004,yu=1005,ra=1006,ep=1007,nr=1008,Yi=1009,Jx=1010,$x=1011,Bl=1012,Om=1013,ar=1014,oa=1015,qi=1016,Pm=1017,zm=1018,Fl=1020,tS=35902,eS=35899,nS=1021,iS=1022,Xi=1023,Hl=1026,Gl=1027,Im=1028,Bm=1029,aS=1030,Fm=1031,Hm=1033,Ju=33776,$u=33777,tf=33778,ef=33779,Zp=35840,Qp=35841,Kp=35842,Jp=35843,$p=36196,tm=37492,em=37496,nm=37808,im=37809,am=37810,sm=37811,rm=37812,om=37813,lm=37814,cm=37815,um=37816,fm=37817,hm=37818,dm=37819,pm=37820,mm=37821,gm=36492,vm=36494,_m=36495,ym=36283,xm=36284,Sm=36285,Mm=36286,hT=3200,dT=3201,sS=0,pT=1,ys="",kn="srgb",Mo="srgb-linear",of="linear",je="srgb",Kr=7680,Ty=519,mT=512,gT=513,vT=514,rS=515,_T=516,yT=517,xT=518,ST=519,by=35044,Ay="300 es",la=2e3,lf=2001;class Ao{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wy=1234567;const Ol=Math.PI/180,Vl=180/Math.PI;function or(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Gn[r&255]+Gn[r>>8&255]+Gn[r>>16&255]+Gn[r>>24&255]+"-"+Gn[t&255]+Gn[t>>8&255]+"-"+Gn[t>>16&15|64]+Gn[t>>24&255]+"-"+Gn[i&63|128]+Gn[i>>8&255]+"-"+Gn[i>>16&255]+Gn[i>>24&255]+Gn[s&255]+Gn[s>>8&255]+Gn[s>>16&255]+Gn[s>>24&255]).toLowerCase()}function Ae(r,t,i){return Math.max(t,Math.min(i,r))}function Gm(r,t){return(r%t+t)%t}function MT(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function ET(r,t,i){return r!==t?(i-r)/(t-r):0}function Pl(r,t,i){return(1-i)*r+i*t}function TT(r,t,i,s){return Pl(r,t,1-Math.exp(-i*s))}function bT(r,t=1){return t-Math.abs(Gm(r,t*2)-t)}function AT(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function wT(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function CT(r,t){return r+Math.floor(Math.random()*(t-r+1))}function RT(r,t){return r+Math.random()*(t-r)}function DT(r){return r*(.5-Math.random())}function NT(r){r!==void 0&&(wy=r);let t=wy+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function UT(r){return r*Ol}function LT(r){return r*Vl}function OT(r){return(r&r-1)===0&&r!==0}function PT(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function zT(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function IT(r,t,i,s,l){const c=Math.cos,f=Math.sin,d=c(i/2),p=f(i/2),m=c((t+s)/2),v=f((t+s)/2),g=c((t-s)/2),y=f((t-s)/2),x=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(d*v,p*g,p*y,d*m);break;case"YZY":r.set(p*y,d*v,p*g,d*m);break;case"ZXZ":r.set(p*g,p*y,d*v,d*m);break;case"XZX":r.set(d*v,p*E,p*x,d*m);break;case"YXY":r.set(p*x,d*v,p*E,d*m);break;case"ZYZ":r.set(p*E,p*x,d*v,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function ho(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Jn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Sn={DEG2RAD:Ol,RAD2DEG:Vl,generateUUID:or,clamp:Ae,euclideanModulo:Gm,mapLinear:MT,inverseLerp:ET,lerp:Pl,damp:TT,pingpong:bT,smoothstep:AT,smootherstep:wT,randInt:CT,randFloat:RT,randFloatSpread:DT,seededRandom:NT,degToRad:UT,radToDeg:LT,isPowerOfTwo:OT,ceilPowerOfTwo:PT,floorPowerOfTwo:zT,setQuaternionFromProperEuler:IT,normalize:Jn,denormalize:ho};class Ft{constructor(t=0,i=0){Ft.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ae(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xn{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let p=s[l+0],m=s[l+1],v=s[l+2],g=s[l+3];const y=c[f+0],x=c[f+1],E=c[f+2],T=c[f+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=v,t[i+3]=g;return}if(d===1){t[i+0]=y,t[i+1]=x,t[i+2]=E,t[i+3]=T;return}if(g!==T||p!==y||m!==x||v!==E){let M=1-d;const _=p*y+m*x+v*E+g*T,w=_>=0?1:-1,C=1-_*_;if(C>Number.EPSILON){const P=Math.sqrt(C),z=Math.atan2(P,_*w);M=Math.sin(M*z)/P,d=Math.sin(d*z)/P}const b=d*w;if(p=p*M+y*b,m=m*M+x*b,v=v*M+E*b,g=g*M+T*b,M===1-d){const P=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=P,m*=P,v*=P,g*=P}}t[i]=p,t[i+1]=m,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],p=s[l+1],m=s[l+2],v=s[l+3],g=c[f],y=c[f+1],x=c[f+2],E=c[f+3];return t[i]=d*E+v*g+p*x-m*y,t[i+1]=p*E+v*y+m*g-d*x,t[i+2]=m*E+v*x+d*y-p*g,t[i+3]=v*E-d*g-p*y-m*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,p=Math.sin,m=d(s/2),v=d(l/2),g=d(c/2),y=p(s/2),x=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=y*v*g+m*x*E,this._y=m*x*g-y*v*E,this._z=m*v*E+y*x*g,this._w=m*v*g-y*x*E;break;case"YXZ":this._x=y*v*g+m*x*E,this._y=m*x*g-y*v*E,this._z=m*v*E-y*x*g,this._w=m*v*g+y*x*E;break;case"ZXY":this._x=y*v*g-m*x*E,this._y=m*x*g+y*v*E,this._z=m*v*E+y*x*g,this._w=m*v*g-y*x*E;break;case"ZYX":this._x=y*v*g-m*x*E,this._y=m*x*g+y*v*E,this._z=m*v*E-y*x*g,this._w=m*v*g+y*x*E;break;case"YZX":this._x=y*v*g+m*x*E,this._y=m*x*g+y*v*E,this._z=m*v*E-y*x*g,this._w=m*v*g-y*x*E;break;case"XZY":this._x=y*v*g-m*x*E,this._y=m*x*g-y*v*E,this._z=m*v*E+y*x*g,this._w=m*v*g+y*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],p=i[9],m=i[2],v=i[6],g=i[10],y=s+d+g;if(y>0){const x=.5/Math.sqrt(y+1);this._w=.25/x,this._x=(v-p)*x,this._y=(c-m)*x,this._z=(f-l)*x}else if(s>d&&s>g){const x=2*Math.sqrt(1+s-d-g);this._w=(v-p)/x,this._x=.25*x,this._y=(l+f)/x,this._z=(c+m)/x}else if(d>g){const x=2*Math.sqrt(1+d-s-g);this._w=(c-m)/x,this._x=(l+f)/x,this._y=.25*x,this._z=(p+v)/x}else{const x=2*Math.sqrt(1+g-s-d);this._w=(f-l)/x,this._x=(c+m)/x,this._y=(p+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,p=i._y,m=i._z,v=i._w;return this._x=s*v+f*d+l*m-c*p,this._y=l*v+f*p+c*d-s*m,this._z=c*v+f*m+s*p-l*d,this._w=f*v-s*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const x=1-i;return this._w=x*f+i*this._w,this._x=x*s+i*this._x,this._y=x*l+i*this._y,this._z=x*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),g=Math.sin((1-i)*v)/m,y=Math.sin(i*v)/m;return this._w=f*g+this._w*y,this._x=s*g+this._x*y,this._y=l*g+this._y*y,this._z=c*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(t=0,i=0,s=0){G.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Cy.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Cy.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,p=t.w,m=2*(f*l-d*s),v=2*(d*i-c*l),g=2*(c*s-f*i);return this.x=i+p*m+f*g-d*v,this.y=s+p*v+d*m-c*g,this.z=l+p*g+c*v-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*f-s*p,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return np.copy(this).projectOnVector(t),this.sub(np)}reflect(t){return this.sub(np.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ae(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const np=new G,Cy=new Xn;class ye{constructor(t,i,s,l,c,f,d,p,m){ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,p,m)}set(t,i,s,l,c,f,d,p,m){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=p,v[6]=s,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],p=s[6],m=s[1],v=s[4],g=s[7],y=s[2],x=s[5],E=s[8],T=l[0],M=l[3],_=l[6],w=l[1],C=l[4],b=l[7],P=l[2],z=l[5],I=l[8];return c[0]=f*T+d*w+p*P,c[3]=f*M+d*C+p*z,c[6]=f*_+d*b+p*I,c[1]=m*T+v*w+g*P,c[4]=m*M+v*C+g*z,c[7]=m*_+v*b+g*I,c[2]=y*T+x*w+E*P,c[5]=y*M+x*C+E*z,c[8]=y*_+x*b+E*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],v=t[8];return i*f*v-i*d*m-s*c*v+s*d*p+l*c*m-l*f*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],v=t[8],g=v*f-d*m,y=d*p-v*c,x=m*c-f*p,E=i*g+s*y+l*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=g*T,t[1]=(l*m-v*s)*T,t[2]=(d*s-l*f)*T,t[3]=y*T,t[4]=(v*i-l*p)*T,t[5]=(l*c-d*i)*T,t[6]=x*T,t[7]=(s*p-m*i)*T,t[8]=(f*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*f+m*d)+f+t,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(ip.makeScale(t,i)),this}rotate(t){return this.premultiply(ip.makeRotation(-t)),this}translate(t,i){return this.premultiply(ip.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ip=new ye;function oS(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function cf(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function BT(){const r=cf("canvas");return r.style.display="block",r}const Ry={};function kl(r){r in Ry||(Ry[r]=!0,console.warn(r))}function FT(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Dy=new ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ny=new ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function HT(){const r={enabled:!0,workingColorSpace:Mo,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===je&&(l.r=Ia(l.r),l.g=Ia(l.g),l.b=Ia(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===je&&(l.r=_o(l.r),l.g=_o(l.g),l.b=_o(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ys?of:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return kl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return kl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Mo]:{primaries:t,whitePoint:s,transfer:of,toXYZ:Dy,fromXYZ:Ny,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:t,whitePoint:s,transfer:je,toXYZ:Dy,fromXYZ:Ny,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),r}const Le=HT();function Ia(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function _o(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Jr;class GT{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Jr===void 0&&(Jr=cf("canvas")),Jr.width=t.width,Jr.height=t.height;const l=Jr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Jr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=cf("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=Ia(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ia(i[s]/255)*255):i[s]=Ia(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let VT=0;class Vm{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:VT++}),this.uuid=or(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(ap(l[f].image)):c.push(ap(l[f]))}else c=ap(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function ap(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?GT.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let kT=0;const sp=new G;class Yn extends Ao{constructor(t=Yn.DEFAULT_IMAGE,i=Yn.DEFAULT_MAPPING,s=er,l=er,c=ra,f=nr,d=Xi,p=Yi,m=Yn.DEFAULT_ANISOTROPY,v=ys){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kT++}),this.uuid=or(),this.name="",this.source=new Vm(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sp).x}get height(){return this.source.getSize(sp).y}get depth(){return this.source.getSize(sp).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Kx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jp:t.x=t.x-Math.floor(t.x);break;case er:t.x=t.x<0?0:1;break;case Wp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jp:t.y=t.y-Math.floor(t.y);break;case er:t.y=t.y<0?0:1;break;case Wp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=Kx;Yn.DEFAULT_ANISOTROPY=1;class Qe{constructor(t=0,i=0,s=0,l=1){Qe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const p=t.elements,m=p[0],v=p[4],g=p[8],y=p[1],x=p[5],E=p[9],T=p[2],M=p[6],_=p[10];if(Math.abs(v-y)<.01&&Math.abs(g-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+y)<.1&&Math.abs(g+T)<.1&&Math.abs(E+M)<.1&&Math.abs(m+x+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const C=(m+1)/2,b=(x+1)/2,P=(_+1)/2,z=(v+y)/4,I=(g+T)/4,O=(E+M)/4;return C>b&&C>P?C<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(C),l=z/s,c=I/s):b>P?b<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(b),s=z/l,c=O/l):P<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(P),s=I/c,l=O/c),this.set(s,l,c,i),this}let w=Math.sqrt((M-E)*(M-E)+(g-T)*(g-T)+(y-v)*(y-v));return Math.abs(w)<.001&&(w=1),this.x=(M-E)/w,this.y=(g-T)/w,this.z=(y-v)/w,this.w=Math.acos((m+x+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this.w=Ae(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this.w=Ae(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class XT extends Ao{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ra,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Qe(0,0,t,i),this.scissorTest=!1,this.viewport=new Qe(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Yn(l);this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:ra,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Vm(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends XT{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class lS extends Yn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class qT extends Yn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lr{constructor(t=new G(1/0,1/0,1/0),i=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Hi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Hi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Hi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Hi):Hi.fromBufferAttribute(c,f),Hi.applyMatrix4(t.matrixWorld),this.expandByPoint(Hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),xu.copy(s.boundingBox)),xu.applyMatrix4(t.matrixWorld),this.union(xu)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Hi),Hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ml),Su.subVectors(this.max,Ml),$r.subVectors(t.a,Ml),to.subVectors(t.b,Ml),eo.subVectors(t.c,Ml),ds.subVectors(to,$r),ps.subVectors(eo,to),qs.subVectors($r,eo);let i=[0,-ds.z,ds.y,0,-ps.z,ps.y,0,-qs.z,qs.y,ds.z,0,-ds.x,ps.z,0,-ps.x,qs.z,0,-qs.x,-ds.y,ds.x,0,-ps.y,ps.x,0,-qs.y,qs.x,0];return!rp(i,$r,to,eo,Su)||(i=[1,0,0,0,1,0,0,0,1],!rp(i,$r,to,eo,Su))?!1:(Mu.crossVectors(ds,ps),i=[Mu.x,Mu.y,Mu.z],rp(i,$r,to,eo,Su))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const wa=[new G,new G,new G,new G,new G,new G,new G,new G],Hi=new G,xu=new lr,$r=new G,to=new G,eo=new G,ds=new G,ps=new G,qs=new G,Ml=new G,Su=new G,Mu=new G,Ys=new G;function rp(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ys.fromArray(r,c);const d=l.x*Math.abs(Ys.x)+l.y*Math.abs(Ys.y)+l.z*Math.abs(Ys.z),p=t.dot(Ys),m=i.dot(Ys),v=s.dot(Ys);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const YT=new lr,El=new G,op=new G;class cr{constructor(t=new G,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):YT.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;El.subVectors(t,this.center);const i=El.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(El,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(op.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(El.copy(t.center).add(op)),this.expandByPoint(El.copy(t.center).sub(op))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ca=new G,lp=new G,Eu=new G,ms=new G,cp=new G,Tu=new G,up=new G;class km{constructor(t=new G,i=new G(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ca)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ca.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ca.copy(this.origin).addScaledVector(this.direction,i),Ca.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){lp.copy(t).add(i).multiplyScalar(.5),Eu.copy(i).sub(t).normalize(),ms.copy(this.origin).sub(lp);const c=t.distanceTo(i)*.5,f=-this.direction.dot(Eu),d=ms.dot(this.direction),p=-ms.dot(Eu),m=ms.lengthSq(),v=Math.abs(1-f*f);let g,y,x,E;if(v>0)if(g=f*p-d,y=f*d-p,E=c*v,g>=0)if(y>=-E)if(y<=E){const T=1/v;g*=T,y*=T,x=g*(g+f*y+2*d)+y*(f*g+y+2*p)+m}else y=c,g=Math.max(0,-(f*y+d)),x=-g*g+y*(y+2*p)+m;else y=-c,g=Math.max(0,-(f*y+d)),x=-g*g+y*(y+2*p)+m;else y<=-E?(g=Math.max(0,-(-f*c+d)),y=g>0?-c:Math.min(Math.max(-c,-p),c),x=-g*g+y*(y+2*p)+m):y<=E?(g=0,y=Math.min(Math.max(-c,-p),c),x=y*(y+2*p)+m):(g=Math.max(0,-(f*c+d)),y=g>0?c:Math.min(Math.max(-c,-p),c),x=-g*g+y*(y+2*p)+m);else y=f>0?-c:c,g=Math.max(0,-(f*y+d)),x=-g*g+y*(y+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(lp).addScaledVector(Eu,y),x}intersectSphere(t,i){Ca.subVectors(t.center,this.origin);const s=Ca.dot(this.direction),l=Ca.dot(Ca)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,p=s+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,y=this.origin;return m>=0?(s=(t.min.x-y.x)*m,l=(t.max.x-y.x)*m):(s=(t.max.x-y.x)*m,l=(t.min.x-y.x)*m),v>=0?(c=(t.min.y-y.y)*v,f=(t.max.y-y.y)*v):(c=(t.max.y-y.y)*v,f=(t.min.y-y.y)*v),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),g>=0?(d=(t.min.z-y.z)*g,p=(t.max.z-y.z)*g):(d=(t.max.z-y.z)*g,p=(t.min.z-y.z)*g),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ca)!==null}intersectTriangle(t,i,s,l,c){cp.subVectors(i,t),Tu.subVectors(s,t),up.crossVectors(cp,Tu);let f=this.direction.dot(up),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ms.subVectors(this.origin,t);const p=d*this.direction.dot(Tu.crossVectors(ms,Tu));if(p<0)return null;const m=d*this.direction.dot(cp.cross(ms));if(m<0||p+m>f)return null;const v=-d*ms.dot(up);return v<0?null:this.at(v/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(t,i,s,l,c,f,d,p,m,v,g,y,x,E,T,M){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,p,m,v,g,y,x,E,T,M)}set(t,i,s,l,c,f,d,p,m,v,g,y,x,E,T,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=f,_[9]=d,_[13]=p,_[2]=m,_[6]=v,_[10]=g,_[14]=y,_[3]=x,_[7]=E,_[11]=T,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/no.setFromMatrixColumn(t,0).length(),c=1/no.setFromMatrixColumn(t,1).length(),f=1/no.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const y=f*v,x=f*g,E=d*v,T=d*g;i[0]=p*v,i[4]=-p*g,i[8]=m,i[1]=x+E*m,i[5]=y-T*m,i[9]=-d*p,i[2]=T-y*m,i[6]=E+x*m,i[10]=f*p}else if(t.order==="YXZ"){const y=p*v,x=p*g,E=m*v,T=m*g;i[0]=y+T*d,i[4]=E*d-x,i[8]=f*m,i[1]=f*g,i[5]=f*v,i[9]=-d,i[2]=x*d-E,i[6]=T+y*d,i[10]=f*p}else if(t.order==="ZXY"){const y=p*v,x=p*g,E=m*v,T=m*g;i[0]=y-T*d,i[4]=-f*g,i[8]=E+x*d,i[1]=x+E*d,i[5]=f*v,i[9]=T-y*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(t.order==="ZYX"){const y=f*v,x=f*g,E=d*v,T=d*g;i[0]=p*v,i[4]=E*m-x,i[8]=y*m+T,i[1]=p*g,i[5]=T*m+y,i[9]=x*m-E,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(t.order==="YZX"){const y=f*p,x=f*m,E=d*p,T=d*m;i[0]=p*v,i[4]=T-y*g,i[8]=E*g+x,i[1]=g,i[5]=f*v,i[9]=-d*v,i[2]=-m*v,i[6]=x*g+E,i[10]=y-T*g}else if(t.order==="XZY"){const y=f*p,x=f*m,E=d*p,T=d*m;i[0]=p*v,i[4]=-g,i[8]=m*v,i[1]=y*g+T,i[5]=f*v,i[9]=x*g-E,i[2]=E*g-x,i[6]=d*v,i[10]=T*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(jT,t,WT)}lookAt(t,i,s){const l=this.elements;return gi.subVectors(t,i),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),gs.crossVectors(s,gi),gs.lengthSq()===0&&(Math.abs(s.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),gs.crossVectors(s,gi)),gs.normalize(),bu.crossVectors(gi,gs),l[0]=gs.x,l[4]=bu.x,l[8]=gi.x,l[1]=gs.y,l[5]=bu.y,l[9]=gi.y,l[2]=gs.z,l[6]=bu.z,l[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],p=s[8],m=s[12],v=s[1],g=s[5],y=s[9],x=s[13],E=s[2],T=s[6],M=s[10],_=s[14],w=s[3],C=s[7],b=s[11],P=s[15],z=l[0],I=l[4],O=l[8],N=l[12],A=l[1],V=l[5],Y=l[9],J=l[13],pt=l[2],$=l[6],q=l[10],U=l[14],B=l[3],it=l[7],dt=l[11],Nt=l[15];return c[0]=f*z+d*A+p*pt+m*B,c[4]=f*I+d*V+p*$+m*it,c[8]=f*O+d*Y+p*q+m*dt,c[12]=f*N+d*J+p*U+m*Nt,c[1]=v*z+g*A+y*pt+x*B,c[5]=v*I+g*V+y*$+x*it,c[9]=v*O+g*Y+y*q+x*dt,c[13]=v*N+g*J+y*U+x*Nt,c[2]=E*z+T*A+M*pt+_*B,c[6]=E*I+T*V+M*$+_*it,c[10]=E*O+T*Y+M*q+_*dt,c[14]=E*N+T*J+M*U+_*Nt,c[3]=w*z+C*A+b*pt+P*B,c[7]=w*I+C*V+b*$+P*it,c[11]=w*O+C*Y+b*q+P*dt,c[15]=w*N+C*J+b*U+P*Nt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],p=t[9],m=t[13],v=t[2],g=t[6],y=t[10],x=t[14],E=t[3],T=t[7],M=t[11],_=t[15];return E*(+c*p*g-l*m*g-c*d*y+s*m*y+l*d*x-s*p*x)+T*(+i*p*x-i*m*y+c*f*y-l*f*x+l*m*v-c*p*v)+M*(+i*m*g-i*d*x-c*f*g+s*f*x+c*d*v-s*m*v)+_*(-l*d*v-i*p*g+i*d*y+l*f*g-s*f*y+s*p*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],v=t[8],g=t[9],y=t[10],x=t[11],E=t[12],T=t[13],M=t[14],_=t[15],w=g*M*m-T*y*m+T*p*x-d*M*x-g*p*_+d*y*_,C=E*y*m-v*M*m-E*p*x+f*M*x+v*p*_-f*y*_,b=v*T*m-E*g*m+E*d*x-f*T*x-v*d*_+f*g*_,P=E*g*p-v*T*p-E*d*y+f*T*y+v*d*M-f*g*M,z=i*w+s*C+l*b+c*P;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/z;return t[0]=w*I,t[1]=(T*y*c-g*M*c-T*l*x+s*M*x+g*l*_-s*y*_)*I,t[2]=(d*M*c-T*p*c+T*l*m-s*M*m-d*l*_+s*p*_)*I,t[3]=(g*p*c-d*y*c-g*l*m+s*y*m+d*l*x-s*p*x)*I,t[4]=C*I,t[5]=(v*M*c-E*y*c+E*l*x-i*M*x-v*l*_+i*y*_)*I,t[6]=(E*p*c-f*M*c-E*l*m+i*M*m+f*l*_-i*p*_)*I,t[7]=(f*y*c-v*p*c+v*l*m-i*y*m-f*l*x+i*p*x)*I,t[8]=b*I,t[9]=(E*g*c-v*T*c-E*s*x+i*T*x+v*s*_-i*g*_)*I,t[10]=(f*T*c-E*d*c+E*s*m-i*T*m-f*s*_+i*d*_)*I,t[11]=(v*d*c-f*g*c-v*s*m+i*g*m+f*s*x-i*d*x)*I,t[12]=P*I,t[13]=(v*T*l-E*g*l+E*s*y-i*T*y-v*s*M+i*g*M)*I,t[14]=(E*d*l-f*T*l-E*s*p+i*T*p+f*s*M-i*d*M)*I,t[15]=(f*g*l-v*d*l+v*s*p-i*g*p-f*s*y+i*d*y)*I,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,p=t.z,m=c*f,v=c*d;return this.set(m*f+s,m*d-l*p,m*p+l*d,0,m*d+l*p,v*d+s,v*p-l*f,0,m*p-l*d,v*p+l*f,c*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,p=i._w,m=c+c,v=f+f,g=d+d,y=c*m,x=c*v,E=c*g,T=f*v,M=f*g,_=d*g,w=p*m,C=p*v,b=p*g,P=s.x,z=s.y,I=s.z;return l[0]=(1-(T+_))*P,l[1]=(x+b)*P,l[2]=(E-C)*P,l[3]=0,l[4]=(x-b)*z,l[5]=(1-(y+_))*z,l[6]=(M+w)*z,l[7]=0,l[8]=(E+C)*I,l[9]=(M-w)*I,l[10]=(1-(y+T))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=no.set(l[0],l[1],l[2]).length();const f=no.set(l[4],l[5],l[6]).length(),d=no.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],Gi.copy(this);const m=1/c,v=1/f,g=1/d;return Gi.elements[0]*=m,Gi.elements[1]*=m,Gi.elements[2]*=m,Gi.elements[4]*=v,Gi.elements[5]*=v,Gi.elements[6]*=v,Gi.elements[8]*=g,Gi.elements[9]*=g,Gi.elements[10]*=g,i.setFromRotationMatrix(Gi),s.x=c,s.y=f,s.z=d,this}makePerspective(t,i,s,l,c,f,d=la,p=!1){const m=this.elements,v=2*c/(i-t),g=2*c/(s-l),y=(i+t)/(i-t),x=(s+l)/(s-l);let E,T;if(p)E=c/(f-c),T=f*c/(f-c);else if(d===la)E=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(d===lf)E=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=la,p=!1){const m=this.elements,v=2/(i-t),g=2/(s-l),y=-(i+t)/(i-t),x=-(s+l)/(s-l);let E,T;if(p)E=1/(f-c),T=f/(f-c);else if(d===la)E=-2/(f-c),T=-(f+c)/(f-c);else if(d===lf)E=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=y,m[1]=0,m[5]=g,m[9]=0,m[13]=x,m[2]=0,m[6]=0,m[10]=E,m[14]=T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const no=new G,Gi=new He,jT=new G(0,0,0),WT=new G(1,1,1),gs=new G,bu=new G,gi=new G,Uy=new He,Ly=new Xn;class xi{constructor(t=0,i=0,s=0,l=xi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],p=l[1],m=l[5],v=l[9],g=l[2],y=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Ae(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Ae(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return Uy.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Uy,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Ly.setFromEuler(this),this.setFromQuaternion(Ly,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xi.DEFAULT_ORDER="XYZ";class cS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ZT=0;const Oy=new G,io=new Xn,Ra=new He,Au=new G,Tl=new G,QT=new G,KT=new Xn,Py=new G(1,0,0),zy=new G(0,1,0),Iy=new G(0,0,1),By={type:"added"},JT={type:"removed"},ao={type:"childadded",child:null},fp={type:"childremoved",child:null};class Mn extends Ao{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZT++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new G,i=new xi,s=new Xn,l=new G(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new He},normalMatrix:{value:new ye}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return io.setFromAxisAngle(t,i),this.quaternion.multiply(io),this}rotateOnWorldAxis(t,i){return io.setFromAxisAngle(t,i),this.quaternion.premultiply(io),this}rotateX(t){return this.rotateOnAxis(Py,t)}rotateY(t){return this.rotateOnAxis(zy,t)}rotateZ(t){return this.rotateOnAxis(Iy,t)}translateOnAxis(t,i){return Oy.copy(t).applyQuaternion(this.quaternion),this.position.add(Oy.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Py,t)}translateY(t){return this.translateOnAxis(zy,t)}translateZ(t){return this.translateOnAxis(Iy,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ra.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Au.copy(t):Au.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ra.lookAt(Tl,Au,this.up):Ra.lookAt(Au,Tl,this.up),this.quaternion.setFromRotationMatrix(Ra),l&&(Ra.extractRotation(l.matrixWorld),io.setFromRotationMatrix(Ra),this.quaternion.premultiply(io.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(By),ao.child=t,this.dispatchEvent(ao),ao.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(JT),fp.child=t,this.dispatchEvent(fp),fp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ra.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ra.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ra),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(By),ao.child=t,this.dispatchEvent(ao),ao.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,t,QT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tl,KT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];c(t.shapes,g)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(i){const d=f(t.geometries),p=f(t.materials),m=f(t.textures),v=f(t.images),g=f(t.shapes),y=f(t.skeletons),x=f(t.animations),E=f(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),y.length>0&&(s.skeletons=y),x.length>0&&(s.animations=x),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Mn.DEFAULT_UP=new G(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vi=new G,Da=new G,hp=new G,Na=new G,so=new G,ro=new G,Fy=new G,dp=new G,pp=new G,mp=new G,gp=new Qe,vp=new Qe,_p=new Qe;class ki{constructor(t=new G,i=new G,s=new G){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Vi.subVectors(t,i),l.cross(Vi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Vi.subVectors(l,i),Da.subVectors(s,i),hp.subVectors(t,i);const f=Vi.dot(Vi),d=Vi.dot(Da),p=Vi.dot(hp),m=Da.dot(Da),v=Da.dot(hp),g=f*m-d*d;if(g===0)return c.set(0,0,0),null;const y=1/g,x=(m*p-d*v)*y,E=(f*v-d*p)*y;return c.set(1-x-E,E,x)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Na)===null?!1:Na.x>=0&&Na.y>=0&&Na.x+Na.y<=1}static getInterpolation(t,i,s,l,c,f,d,p){return this.getBarycoord(t,i,s,l,Na)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Na.x),p.addScaledVector(f,Na.y),p.addScaledVector(d,Na.z),p)}static getInterpolatedAttribute(t,i,s,l,c,f){return gp.setScalar(0),vp.setScalar(0),_p.setScalar(0),gp.fromBufferAttribute(t,i),vp.fromBufferAttribute(t,s),_p.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(gp,c.x),f.addScaledVector(vp,c.y),f.addScaledVector(_p,c.z),f}static isFrontFacing(t,i,s,l){return Vi.subVectors(s,i),Da.subVectors(t,i),Vi.cross(Da).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vi.subVectors(this.c,this.b),Da.subVectors(this.a,this.b),Vi.cross(Da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ki.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return ki.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return ki.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return ki.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ki.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;so.subVectors(l,s),ro.subVectors(c,s),dp.subVectors(t,s);const p=so.dot(dp),m=ro.dot(dp);if(p<=0&&m<=0)return i.copy(s);pp.subVectors(t,l);const v=so.dot(pp),g=ro.dot(pp);if(v>=0&&g<=v)return i.copy(l);const y=p*g-v*m;if(y<=0&&p>=0&&v<=0)return f=p/(p-v),i.copy(s).addScaledVector(so,f);mp.subVectors(t,c);const x=so.dot(mp),E=ro.dot(mp);if(E>=0&&x<=E)return i.copy(c);const T=x*m-p*E;if(T<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(s).addScaledVector(ro,d);const M=v*E-x*g;if(M<=0&&g-v>=0&&x-E>=0)return Fy.subVectors(c,l),d=(g-v)/(g-v+(x-E)),i.copy(l).addScaledVector(Fy,d);const _=1/(M+T+y);return f=T*_,d=y*_,i.copy(s).addScaledVector(so,f).addScaledVector(ro,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const uS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vs={h:0,s:0,l:0},wu={h:0,s:0,l:0};function yp(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class oe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=Gm(t,1),i=Ae(i,0,1),s=Ae(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=yp(f,c,t+1/3),this.g=yp(f,c,t),this.b=yp(f,c,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=kn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=kn){const s=uS[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ia(t.r),this.g=Ia(t.g),this.b=Ia(t.b),this}copyLinearToSRGB(t){return this.r=_o(t.r),this.g=_o(t.g),this.b=_o(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=kn){return Le.workingToColorSpace(Vn.copy(this),t),Math.round(Ae(Vn.r*255,0,255))*65536+Math.round(Ae(Vn.g*255,0,255))*256+Math.round(Ae(Vn.b*255,0,255))}getHexString(t=kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(Vn.copy(this),i);const s=Vn.r,l=Vn.g,c=Vn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let p,m;const v=(d+f)/2;if(d===f)p=0,m=0;else{const g=f-d;switch(m=v<=.5?g/(f+d):g/(2-f-d),f){case s:p=(l-c)/g+(l<c?6:0);break;case l:p=(c-s)/g+2;break;case c:p=(s-l)/g+4;break}p/=6}return t.h=p,t.s=m,t.l=v,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(Vn.copy(this),i),t.r=Vn.r,t.g=Vn.g,t.b=Vn.b,t}getStyle(t=kn){Le.workingToColorSpace(Vn.copy(this),t);const i=Vn.r,s=Vn.g,l=Vn.b;return t!==kn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(vs),this.setHSL(vs.h+t,vs.s+i,vs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(vs),t.getHSL(wu);const s=Pl(vs.h,wu.h,i),l=Pl(vs.s,wu.s,i),c=Pl(vs.l,wu.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new oe;oe.NAMES=uS;let $T=0;class ur extends Ao{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$T++}),this.uuid=or(),this.name="",this.type="Material",this.blending=vo,this.side=xs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ip,this.blendDst=Bp,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ty,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==vo&&(s.blending=this.blending),this.side!==xs&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ip&&(s.blendSrc=this.blendSrc),this.blendDst!==Bp&&(s.blendDst=this.blendDst),this.blendEquation!==$s&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ty&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class sr extends ur{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.combine=Xx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xn=new G,Cu=new Ft;let tb=0;class hn{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tb++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=by,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Cu.fromBufferAttribute(this,i),Cu.applyMatrix3(t),this.setXY(i,Cu.x,Cu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix3(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix4(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyNormalMatrix(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.transformDirection(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=ho(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Jn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=ho(i,this.array)),i}setX(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=ho(i,this.array)),i}setY(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=ho(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=ho(i,this.array)),i}setW(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array),l=Jn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array),l=Jn(l,this.array),c=Jn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==by&&(t.usage=this.usage),t}}class fS extends hn{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class hS extends hn{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ge extends hn{constructor(t,i,s){super(new Float32Array(t),i,s)}}let eb=0;const Ni=new He,xp=new Mn,oo=new G,vi=new lr,bl=new lr,Nn=new G;class pn extends Ao{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eb++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(oS(t)?hS:fS)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ye().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ni.makeRotationFromQuaternion(t),this.applyMatrix4(Ni),this}rotateX(t){return Ni.makeRotationX(t),this.applyMatrix4(Ni),this}rotateY(t){return Ni.makeRotationY(t),this.applyMatrix4(Ni),this}rotateZ(t){return Ni.makeRotationZ(t),this.applyMatrix4(Ni),this}translate(t,i,s){return Ni.makeTranslation(t,i,s),this.applyMatrix4(Ni),this}scale(t,i,s){return Ni.makeScale(t,i,s),this.applyMatrix4(Ni),this}lookAt(t){return xp.lookAt(t),xp.updateMatrix(),this.applyMatrix4(xp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ge(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];vi.setFromBufferAttribute(c),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(t){const s=this.boundingSphere.center;if(vi.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];bl.setFromBufferAttribute(d),this.morphTargetsRelative?(Nn.addVectors(vi.min,bl.min),vi.expandByPoint(Nn),Nn.addVectors(vi.max,bl.max),vi.expandByPoint(Nn)):(vi.expandByPoint(bl.min),vi.expandByPoint(bl.max))}vi.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Nn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Nn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)Nn.fromBufferAttribute(d,m),p&&(oo.fromBufferAttribute(t,m),Nn.add(oo)),l=Math.max(l,s.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let O=0;O<s.count;O++)d[O]=new G,p[O]=new G;const m=new G,v=new G,g=new G,y=new Ft,x=new Ft,E=new Ft,T=new G,M=new G;function _(O,N,A){m.fromBufferAttribute(s,O),v.fromBufferAttribute(s,N),g.fromBufferAttribute(s,A),y.fromBufferAttribute(c,O),x.fromBufferAttribute(c,N),E.fromBufferAttribute(c,A),v.sub(m),g.sub(m),x.sub(y),E.sub(y);const V=1/(x.x*E.y-E.x*x.y);isFinite(V)&&(T.copy(v).multiplyScalar(E.y).addScaledVector(g,-x.y).multiplyScalar(V),M.copy(g).multiplyScalar(x.x).addScaledVector(v,-E.x).multiplyScalar(V),d[O].add(T),d[N].add(T),d[A].add(T),p[O].add(M),p[N].add(M),p[A].add(M))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let O=0,N=w.length;O<N;++O){const A=w[O],V=A.start,Y=A.count;for(let J=V,pt=V+Y;J<pt;J+=3)_(t.getX(J+0),t.getX(J+1),t.getX(J+2))}const C=new G,b=new G,P=new G,z=new G;function I(O){P.fromBufferAttribute(l,O),z.copy(P);const N=d[O];C.copy(N),C.sub(P.multiplyScalar(P.dot(N))).normalize(),b.crossVectors(z,N);const V=b.dot(p[O])<0?-1:1;f.setXYZW(O,C.x,C.y,C.z,V)}for(let O=0,N=w.length;O<N;++O){const A=w[O],V=A.start,Y=A.count;for(let J=V,pt=V+Y;J<pt;J+=3)I(t.getX(J+0)),I(t.getX(J+1)),I(t.getX(J+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new hn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,x=s.count;y<x;y++)s.setXYZ(y,0,0,0);const l=new G,c=new G,f=new G,d=new G,p=new G,m=new G,v=new G,g=new G;if(t)for(let y=0,x=t.count;y<x;y+=3){const E=t.getX(y+0),T=t.getX(y+1),M=t.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,M),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,M),d.add(v),p.add(v),m.add(v),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let y=0,x=i.count;y<x;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),s.setXYZ(y+0,v.x,v.y,v.z),s.setXYZ(y+1,v.x,v.y,v.z),s.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Nn.fromBufferAttribute(t,i),Nn.normalize(),t.setXYZ(i,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function t(d,p){const m=d.array,v=d.itemSize,g=d.normalized,y=new m.constructor(p.length*v);let x=0,E=0;for(let T=0,M=p.length;T<M;T++){d.isInterleavedBufferAttribute?x=p[T]*d.data.stride+d.offset:x=p[T]*v;for(let _=0;_<v;_++)y[E++]=m[x++]}return new hn(y,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new pn,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let v=0,g=m.length;v<g;v++){const y=m[v],x=t(y,s);p.push(x)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,y=m.length;g<y;g++){const x=m[g];v.push(x.toJSON(t.data))}v.length>0&&(l[p]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const c=t.morphAttributes;for(const m in c){const v=[],g=c[m];for(let y=0,x=g.length;y<x;y++)v.push(g[y].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,v=f.length;m<v;m++){const g=f[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Hy=new He,js=new km,Ru=new cr,Gy=new G,Du=new G,Nu=new G,Uu=new G,Sp=new G,Lu=new G,Vy=new G,Ou=new G;class sn extends Mn{constructor(t=new pn,i=new sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Lu.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=d[p],g=c[p];v!==0&&(Sp.fromBufferAttribute(g,t),f?Lu.addScaledVector(Sp,v):Lu.addScaledVector(Sp.sub(i),v))}i.add(Lu)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Ru.copy(s.boundingSphere),Ru.applyMatrix4(c),js.copy(t.ray).recast(t.near),!(Ru.containsPoint(js.origin)===!1&&(js.intersectSphere(Ru,Gy)===null||js.origin.distanceToSquared(Gy)>(t.far-t.near)**2))&&(Hy.copy(c).invert(),js.copy(t.ray).applyMatrix4(Hy),!(s.boundingBox!==null&&js.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,js)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,y=c.groups,x=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,T=y.length;E<T;E++){const M=y[E],_=f[M.materialIndex],w=Math.max(M.start,x.start),C=Math.min(d.count,Math.min(M.start+M.count,x.start+x.count));for(let b=w,P=C;b<P;b+=3){const z=d.getX(b),I=d.getX(b+1),O=d.getX(b+2);l=Pu(this,_,t,s,m,v,g,z,I,O),l&&(l.faceIndex=Math.floor(b/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let M=E,_=T;M<_;M+=3){const w=d.getX(M),C=d.getX(M+1),b=d.getX(M+2);l=Pu(this,f,t,s,m,v,g,w,C,b),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,T=y.length;E<T;E++){const M=y[E],_=f[M.materialIndex],w=Math.max(M.start,x.start),C=Math.min(p.count,Math.min(M.start+M.count,x.start+x.count));for(let b=w,P=C;b<P;b+=3){const z=b,I=b+1,O=b+2;l=Pu(this,_,t,s,m,v,g,z,I,O),l&&(l.faceIndex=Math.floor(b/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),T=Math.min(p.count,x.start+x.count);for(let M=E,_=T;M<_;M+=3){const w=M,C=M+1,b=M+2;l=Pu(this,f,t,s,m,v,g,w,C,b),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function nb(r,t,i,s,l,c,f,d){let p;if(t.side===qn?p=s.intersectTriangle(f,c,l,!0,d):p=s.intersectTriangle(l,c,f,t.side===xs,d),p===null)return null;Ou.copy(d),Ou.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(Ou);return m<i.near||m>i.far?null:{distance:m,point:Ou.clone(),object:r}}function Pu(r,t,i,s,l,c,f,d,p,m){r.getVertexPosition(d,Du),r.getVertexPosition(p,Nu),r.getVertexPosition(m,Uu);const v=nb(r,t,i,s,Du,Nu,Uu,Vy);if(v){const g=new G;ki.getBarycoord(Vy,Du,Nu,Uu,g),l&&(v.uv=ki.getInterpolatedAttribute(l,d,p,m,g,new Ft)),c&&(v.uv1=ki.getInterpolatedAttribute(c,d,p,m,g,new Ft)),f&&(v.normal=ki.getInterpolatedAttribute(f,d,p,m,g,new G),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new G,materialIndex:0};ki.getNormal(Du,Nu,Uu,y.normal),v.face=y,v.barycoord=g}return v}class wo extends pn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],v=[],g=[];let y=0,x=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new Ge(m,3)),this.setAttribute("normal",new Ge(v,3)),this.setAttribute("uv",new Ge(g,2));function E(T,M,_,w,C,b,P,z,I,O,N){const A=b/I,V=P/O,Y=b/2,J=P/2,pt=z/2,$=I+1,q=O+1;let U=0,B=0;const it=new G;for(let dt=0;dt<q;dt++){const Nt=dt*V-J;for(let Rt=0;Rt<$;Rt++){const Qt=Rt*A-Y;it[T]=Qt*w,it[M]=Nt*C,it[_]=pt,m.push(it.x,it.y,it.z),it[T]=0,it[M]=0,it[_]=z>0?1:-1,v.push(it.x,it.y,it.z),g.push(Rt/I),g.push(1-dt/O),U+=1}}for(let dt=0;dt<O;dt++)for(let Nt=0;Nt<I;Nt++){const Rt=y+Nt+$*dt,Qt=y+Nt+$*(dt+1),H=y+(Nt+1)+$*(dt+1),et=y+(Nt+1)+$*dt;p.push(Rt,Qt,et),p.push(Qt,H,et),B+=6}d.addGroup(x,B,N),x+=B,y+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Eo(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function $n(r){const t={};for(let i=0;i<r.length;i++){const s=Eo(r[i]);for(const l in s)t[l]=s[l]}return t}function ib(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function dS(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const Xl={clone:Eo,merge:$n};var ab=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends ur{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ab,this.fragmentShader=sb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Eo(t.uniforms),this.uniformsGroups=ib(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class pS extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=la,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const _s=new G,ky=new Ft,Xy=new Ft;class ri extends pS{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Vl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ol*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vl*2*Math.atan(Math.tan(Ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){_s.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(_s.x,_s.y).multiplyScalar(-t/_s.z),_s.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(_s.x,_s.y).multiplyScalar(-t/_s.z)}getViewSize(t,i){return this.getViewBounds(t,ky,Xy),i.subVectors(Xy,ky)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Ol*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const lo=-90,co=1;class rb extends Mn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ri(lo,co,t,i);l.layers=this.layers,this.add(l);const c=new ri(lo,co,t,i);c.layers=this.layers,this.add(c);const f=new ri(lo,co,t,i);f.layers=this.layers,this.add(f);const d=new ri(lo,co,t,i);d.layers=this.layers,this.add(d);const p=new ri(lo,co,t,i);p.layers=this.layers,this.add(p);const m=new ri(lo,co,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,p]=i;for(const m of i)this.remove(m);if(t===la)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===lf)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,v]=this.children,g=t.getRenderTarget(),y=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(g,y,x),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class mS extends Yn{constructor(t=[],i=xo,s,l,c,f,d,p,m,v){super(t,i,s,l,c,f,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ob extends Li{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new mS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new wo(5,5,5),c=new nn({name:"CubemapFromEquirect",uniforms:Eo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:qn,blending:Pa});c.uniforms.tEquirect.value=i;const f=new sn(l,c),d=i.minFilter;return i.minFilter===nr&&(i.minFilter=ra),new rb(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class Oa extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lb={type:"move"};class Mp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const T of t.hand.values()){const M=i.getJointPose(T,s),_=this._getHandJoint(m,T);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],y=v.position.distanceTo(g.position),x=.02,E=.005;m.inputState.pinching&&y>x+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&y<=x-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(lb)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Oa;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class gS extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xi,this.environmentIntensity=1,this.environmentRotation=new xi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class cb extends Yn{constructor(t=null,i=1,s=1,l,c,f,d,p,m=yi,v=yi,g,y){super(null,f,d,p,m,v,l,c,g,y),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class qy extends hn{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const uo=new He,Yy=new He,zu=[],jy=new lr,ub=new He,Al=new sn,wl=new cr;class fb extends sn{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new qy(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,ub)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new lr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,uo),jy.copy(t.boundingBox).applyMatrix4(uo),this.boundingBox.union(jy)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new cr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,uo),wl.copy(t.boundingSphere).applyMatrix4(uo),this.boundingSphere.union(wl)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[f+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(Al.geometry=this.geometry,Al.material=this.material,Al.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wl.copy(this.boundingSphere),wl.applyMatrix4(s),t.ray.intersectsSphere(wl)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,uo),Yy.multiplyMatrices(s,uo),Al.matrixWorld=Yy,Al.raycast(t,zu);for(let f=0,d=zu.length;f<d;f++){const p=zu[f];p.instanceId=c,p.object=this,i.push(p)}zu.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new qy(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new cb(new Float32Array(l*this.count),l,this.count,Im,oa));const c=this.morphTexture.source.data.data;let f=0;for(let m=0;m<s.length;m++)f+=s[m];const d=this.geometry.morphTargetsRelative?1:1-f,p=l*t;c[p]=d,c.set(s,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ep=new G,hb=new G,db=new ye;class Ks{constructor(t=new G(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Ep.subVectors(s,i).cross(hb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Ep),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||db.getNormalMatrix(t),l=this.coplanarPoint(Ep).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ws=new cr,pb=new Ft(.5,.5),Iu=new G;class Xm{constructor(t=new Ks,i=new Ks,s=new Ks,l=new Ks,c=new Ks,f=new Ks){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=la,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],p=c[2],m=c[3],v=c[4],g=c[5],y=c[6],x=c[7],E=c[8],T=c[9],M=c[10],_=c[11],w=c[12],C=c[13],b=c[14],P=c[15];if(l[0].setComponents(m-f,x-v,_-E,P-w).normalize(),l[1].setComponents(m+f,x+v,_+E,P+w).normalize(),l[2].setComponents(m+d,x+g,_+T,P+C).normalize(),l[3].setComponents(m-d,x-g,_-T,P-C).normalize(),s)l[4].setComponents(p,y,M,b).normalize(),l[5].setComponents(m-p,x-y,_-M,P-b).normalize();else if(l[4].setComponents(m-p,x-y,_-M,P-b).normalize(),i===la)l[5].setComponents(m+p,x+y,_+M,P+b).normalize();else if(i===lf)l[5].setComponents(p,y,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(t){Ws.center.set(0,0,0);const i=pb.distanceTo(t.center);return Ws.radius=.7071067811865476+i,Ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Iu.x=l.normal.x>0?t.max.x:t.min.x,Iu.y=l.normal.y>0?t.max.y:t.min.y,Iu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Iu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mb extends ur{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const uf=new G,ff=new G,Wy=new He,Cl=new km,Bu=new cr,Tp=new G,Zy=new G;class vS extends Mn{constructor(t=new pn,i=new mb){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)uf.fromBufferAttribute(i,l-1),ff.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=uf.distanceTo(ff);t.setAttribute("lineDistance",new Ge(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Bu.copy(s.boundingSphere),Bu.applyMatrix4(l),Bu.radius+=c,t.ray.intersectsSphere(Bu)===!1)return;Wy.copy(l).invert(),Cl.copy(t.ray).applyMatrix4(Wy);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,v=s.index,y=s.attributes.position;if(v!==null){const x=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let T=x,M=E-1;T<M;T+=m){const _=v.getX(T),w=v.getX(T+1),C=Fu(this,t,Cl,p,_,w,T);C&&i.push(C)}if(this.isLineLoop){const T=v.getX(E-1),M=v.getX(x),_=Fu(this,t,Cl,p,T,M,E-1);_&&i.push(_)}}else{const x=Math.max(0,f.start),E=Math.min(y.count,f.start+f.count);for(let T=x,M=E-1;T<M;T+=m){const _=Fu(this,t,Cl,p,T,T+1,T);_&&i.push(_)}if(this.isLineLoop){const T=Fu(this,t,Cl,p,E-1,x,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Fu(r,t,i,s,l,c,f){const d=r.geometry.attributes.position;if(uf.fromBufferAttribute(d,l),ff.fromBufferAttribute(d,c),i.distanceSqToSegment(uf,ff,Tp,Zy)>s)return;Tp.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(Tp);if(!(m<t.near||m>t.far))return{distance:m,point:Zy.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const Qy=new G,Ky=new G;class gb extends vS{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)Qy.fromBufferAttribute(i,l),Ky.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+Qy.distanceTo(Ky);t.setAttribute("lineDistance",new Ge(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vb extends ur{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Jy=new He,Em=new km,Hu=new cr,Gu=new G;class qm extends Mn{constructor(t=new pn,i=new vb){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Hu.copy(s.boundingSphere),Hu.applyMatrix4(l),Hu.radius+=c,t.ray.intersectsSphere(Hu)===!1)return;Jy.copy(l).invert(),Em.copy(t.ray).applyMatrix4(Jy);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=s.index,g=s.attributes.position;if(m!==null){const y=Math.max(0,f.start),x=Math.min(m.count,f.start+f.count);for(let E=y,T=x;E<T;E++){const M=m.getX(E);Gu.fromBufferAttribute(g,M),$y(Gu,M,p,l,t,i,this)}}else{const y=Math.max(0,f.start),x=Math.min(g.count,f.start+f.count);for(let E=y,T=x;E<T;E++)Gu.fromBufferAttribute(g,E),$y(Gu,E,p,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function $y(r,t,i,s,l,c,f){const d=Em.distanceSqToPoint(r);if(d<i){const p=new G;Em.closestPointToPoint(r,p),p.applyMatrix4(s);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class Ym extends Yn{constructor(t,i,s,l,c,f,d,p,m){super(t,i,s,l,c,f,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _S extends Yn{constructor(t,i,s=ar,l,c,f,d=yi,p=yi,m,v=Hl,g=1){if(v!==Hl&&v!==Gl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:g};super(y,l,c,f,d,p,v,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Vm(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class yS extends Yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class vf extends pn{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const v=[],g=[],y=[],x=[];let E=0;const T=[],M=s/2;let _=0;w(),f===!1&&(t>0&&C(!0),i>0&&C(!1)),this.setIndex(v),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(y,3)),this.setAttribute("uv",new Ge(x,2));function w(){const b=new G,P=new G;let z=0;const I=(i-t)/s;for(let O=0;O<=c;O++){const N=[],A=O/c,V=A*(i-t)+t;for(let Y=0;Y<=l;Y++){const J=Y/l,pt=J*p+d,$=Math.sin(pt),q=Math.cos(pt);P.x=V*$,P.y=-A*s+M,P.z=V*q,g.push(P.x,P.y,P.z),b.set($,I,q).normalize(),y.push(b.x,b.y,b.z),x.push(J,1-A),N.push(E++)}T.push(N)}for(let O=0;O<l;O++)for(let N=0;N<c;N++){const A=T[N][O],V=T[N+1][O],Y=T[N+1][O+1],J=T[N][O+1];(t>0||N!==0)&&(v.push(A,V,J),z+=3),(i>0||N!==c-1)&&(v.push(V,Y,J),z+=3)}m.addGroup(_,z,0),_+=z}function C(b){const P=E,z=new Ft,I=new G;let O=0;const N=b===!0?t:i,A=b===!0?1:-1;for(let Y=1;Y<=l;Y++)g.push(0,M*A,0),y.push(0,A,0),x.push(.5,.5),E++;const V=E;for(let Y=0;Y<=l;Y++){const pt=Y/l*p+d,$=Math.cos(pt),q=Math.sin(pt);I.x=N*q,I.y=M*A,I.z=N*$,g.push(I.x,I.y,I.z),y.push(0,A,0),z.x=$*.5+.5,z.y=q*.5*A+.5,x.push(z.x,z.y),E++}for(let Y=0;Y<l;Y++){const J=P+Y,pt=V+Y;b===!0?v.push(pt,pt+1,J):v.push(pt+1,pt,J),O+=3}m.addGroup(_,O,b===!0?1:2),_+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vf(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class jm extends pn{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],f=[];d(l),m(s),v(),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(c.slice(),3)),this.setAttribute("uv",new Ge(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(w){const C=new G,b=new G,P=new G;for(let z=0;z<i.length;z+=3)x(i[z+0],C),x(i[z+1],b),x(i[z+2],P),p(C,b,P,w)}function p(w,C,b,P){const z=P+1,I=[];for(let O=0;O<=z;O++){I[O]=[];const N=w.clone().lerp(b,O/z),A=C.clone().lerp(b,O/z),V=z-O;for(let Y=0;Y<=V;Y++)Y===0&&O===z?I[O][Y]=N:I[O][Y]=N.clone().lerp(A,Y/V)}for(let O=0;O<z;O++)for(let N=0;N<2*(z-O)-1;N++){const A=Math.floor(N/2);N%2===0?(y(I[O][A+1]),y(I[O+1][A]),y(I[O][A])):(y(I[O][A+1]),y(I[O+1][A+1]),y(I[O+1][A]))}}function m(w){const C=new G;for(let b=0;b<c.length;b+=3)C.x=c[b+0],C.y=c[b+1],C.z=c[b+2],C.normalize().multiplyScalar(w),c[b+0]=C.x,c[b+1]=C.y,c[b+2]=C.z}function v(){const w=new G;for(let C=0;C<c.length;C+=3){w.x=c[C+0],w.y=c[C+1],w.z=c[C+2];const b=M(w)/2/Math.PI+.5,P=_(w)/Math.PI+.5;f.push(b,1-P)}E(),g()}function g(){for(let w=0;w<f.length;w+=6){const C=f[w+0],b=f[w+2],P=f[w+4],z=Math.max(C,b,P),I=Math.min(C,b,P);z>.9&&I<.1&&(C<.2&&(f[w+0]+=1),b<.2&&(f[w+2]+=1),P<.2&&(f[w+4]+=1))}}function y(w){c.push(w.x,w.y,w.z)}function x(w,C){const b=w*3;C.x=t[b+0],C.y=t[b+1],C.z=t[b+2]}function E(){const w=new G,C=new G,b=new G,P=new G,z=new Ft,I=new Ft,O=new Ft;for(let N=0,A=0;N<c.length;N+=9,A+=6){w.set(c[N+0],c[N+1],c[N+2]),C.set(c[N+3],c[N+4],c[N+5]),b.set(c[N+6],c[N+7],c[N+8]),z.set(f[A+0],f[A+1]),I.set(f[A+2],f[A+3]),O.set(f[A+4],f[A+5]),P.copy(w).add(C).add(b).divideScalar(3);const V=M(P);T(z,A+0,w,V),T(I,A+2,C,V),T(O,A+4,b,V)}}function T(w,C,b,P){P<0&&w.x===1&&(f[C]=w.x-1),b.x===0&&b.z===0&&(f[C]=P/2/Math.PI+.5)}function M(w){return Math.atan2(w.z,-w.x)}function _(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new jm(t.vertices,t.indices,t.radius,t.details)}}class ua{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let d=0,p=c-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=s[l]-f,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,s[l]===f)return l/(c-1);const v=s[l],y=s[l+1]-v,x=(f-v)/y;return(l+x)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),p=i||(f.isVector2?new Ft:new G);return p.copy(d).sub(f).normalize(),p}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new G,l=[],c=[],f=[],d=new G,p=new He;for(let x=0;x<=t;x++){const E=x/t;l[x]=this.getTangentAt(E,new G)}c[0]=new G,f[0]=new G;let m=Number.MAX_VALUE;const v=Math.abs(l[0].x),g=Math.abs(l[0].y),y=Math.abs(l[0].z);v<=m&&(m=v,s.set(1,0,0)),g<=m&&(m=g,s.set(0,1,0)),y<=m&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let x=1;x<=t;x++){if(c[x]=c[x-1].clone(),f[x]=f[x-1].clone(),d.crossVectors(l[x-1],l[x]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Ae(l[x-1].dot(l[x]),-1,1));c[x].applyMatrix4(p.makeRotationAxis(d,E))}f[x].crossVectors(l[x],c[x])}if(i===!0){let x=Math.acos(Ae(c[0].dot(c[t]),-1,1));x/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(x=-x);for(let E=1;E<=t;E++)c[E].applyMatrix4(p.makeRotationAxis(l[E],x*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Wm extends ua{constructor(t=0,i=0,s=1,l=1,c=0,f=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=d,this.aRotation=p}getPoint(t,i=new Ft){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),g=Math.sin(this.aRotation),y=p-this.aX,x=m-this.aY;p=y*v-x*g+this.aX,m=y*g+x*v+this.aY}return s.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class _b extends Wm{constructor(t,i,s,l,c,f){super(t,i,s,s,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Zm(){let r=0,t=0,i=0,s=0;function l(c,f,d,p){r=c,t=d,i=-3*c+3*f-2*d-p,s=2*c-2*f+d+p}return{initCatmullRom:function(c,f,d,p,m){l(f,d,m*(d-c),m*(p-f))},initNonuniformCatmullRom:function(c,f,d,p,m,v,g){let y=(f-c)/m-(d-c)/(m+v)+(d-f)/v,x=(d-f)/v-(p-f)/(v+g)+(p-d)/g;y*=v,x*=v,l(f,d,y,x)},calc:function(c){const f=c*c,d=f*c;return r+t*c+i*f+s*d}}}const Vu=new G,bp=new Zm,Ap=new Zm,wp=new Zm;class Tm extends ua{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new G){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),p=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let m,v;this.closed||d>0?m=l[(d-1)%c]:(Vu.subVectors(l[0],l[1]).add(l[0]),m=Vu);const g=l[d%c],y=l[(d+1)%c];if(this.closed||d+2<c?v=l[(d+2)%c]:(Vu.subVectors(l[c-1],l[c-2]).add(l[c-1]),v=Vu),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(g),x),T=Math.pow(g.distanceToSquared(y),x),M=Math.pow(y.distanceToSquared(v),x);T<1e-4&&(T=1),E<1e-4&&(E=T),M<1e-4&&(M=T),bp.initNonuniformCatmullRom(m.x,g.x,y.x,v.x,E,T,M),Ap.initNonuniformCatmullRom(m.y,g.y,y.y,v.y,E,T,M),wp.initNonuniformCatmullRom(m.z,g.z,y.z,v.z,E,T,M)}else this.curveType==="catmullrom"&&(bp.initCatmullRom(m.x,g.x,y.x,v.x,this.tension),Ap.initCatmullRom(m.y,g.y,y.y,v.y,this.tension),wp.initCatmullRom(m.z,g.z,y.z,v.z,this.tension));return s.set(bp.calc(p),Ap.calc(p),wp.calc(p)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new G().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function tx(r,t,i,s,l){const c=(s-t)*.5,f=(l-i)*.5,d=r*r,p=r*d;return(2*i-2*s+c+f)*p+(-3*i+3*s-2*c-f)*d+c*r+i}function yb(r,t){const i=1-r;return i*i*t}function xb(r,t){return 2*(1-r)*r*t}function Sb(r,t){return r*r*t}function zl(r,t,i,s){return yb(r,t)+xb(r,i)+Sb(r,s)}function Mb(r,t){const i=1-r;return i*i*i*t}function Eb(r,t){const i=1-r;return 3*i*i*r*t}function Tb(r,t){return 3*(1-r)*r*r*t}function bb(r,t){return r*r*r*t}function Il(r,t,i,s,l){return Mb(r,t)+Eb(r,i)+Tb(r,s)+bb(r,l)}class xS extends ua{constructor(t=new Ft,i=new Ft,s=new Ft,l=new Ft){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new Ft){const s=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(Il(t,l.x,c.x,f.x,d.x),Il(t,l.y,c.y,f.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ab extends ua{constructor(t=new G,i=new G,s=new G,l=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new G){const s=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(Il(t,l.x,c.x,f.x,d.x),Il(t,l.y,c.y,f.y,d.y),Il(t,l.z,c.z,f.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class SS extends ua{constructor(t=new Ft,i=new Ft){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Ft){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Ft){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wb extends ua{constructor(t=new G,i=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new G){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new G){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class MS extends ua{constructor(t=new Ft,i=new Ft,s=new Ft){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new Ft){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(zl(t,l.x,c.x,f.x),zl(t,l.y,c.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ES extends ua{constructor(t=new G,i=new G,s=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new G){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(zl(t,l.x,c.x,f.x),zl(t,l.y,c.y,f.y),zl(t,l.z,c.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class TS extends ua{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Ft){const s=i,l=this.points,c=(l.length-1)*t,f=Math.floor(c),d=c-f,p=l[f===0?f:f-1],m=l[f],v=l[f>l.length-2?l.length-1:f+1],g=l[f>l.length-3?l.length-1:f+2];return s.set(tx(d,p.x,m.x,v.x,g.x),tx(d,p.y,m.y,v.y,g.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Ft().fromArray(l))}return this}}var hf=Object.freeze({__proto__:null,ArcCurve:_b,CatmullRomCurve3:Tm,CubicBezierCurve:xS,CubicBezierCurve3:Ab,EllipseCurve:Wm,LineCurve:SS,LineCurve3:wb,QuadraticBezierCurve:MS,QuadraticBezierCurve3:ES,SplineCurve:TS});class Cb extends ua{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hf[s](i,t))}return this}getPoint(t,i){const s=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=s){const f=l[c]-s,d=this.curves[c],p=d.getLength(),m=p===0?0:1-f/p;return d.getPointAt(m,i)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let s=0,l=this.curves.length;s<l;s++)i+=this.curves[s].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let s;for(let l=0,c=this.curves;l<c.length;l++){const f=c[l],d=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,p=f.getPoints(d);for(let m=0;m<p.length;m++){const v=p[m];s&&s.equals(v)||(i.push(v),s=v)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,s=this.curves.length;i<s;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(new hf[l.type]().fromJSON(l))}return this}}class ex extends Cb{constructor(t){super(),this.type="Path",this.currentPoint=new Ft,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,s=t.length;i<s;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const s=new SS(this.currentPoint.clone(),new Ft(t,i));return this.curves.push(s),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,s,l){const c=new MS(this.currentPoint.clone(),new Ft(t,i),new Ft(s,l));return this.curves.push(c),this.currentPoint.set(s,l),this}bezierCurveTo(t,i,s,l,c,f){const d=new xS(this.currentPoint.clone(),new Ft(t,i),new Ft(s,l),new Ft(c,f));return this.curves.push(d),this.currentPoint.set(c,f),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),s=new TS(i);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,s,l,c,f){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(t+d,i+p,s,l,c,f),this}absarc(t,i,s,l,c,f){return this.absellipse(t,i,s,s,l,c,f),this}ellipse(t,i,s,l,c,f,d,p){const m=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(t+m,i+v,s,l,c,f,d,p),this}absellipse(t,i,s,l,c,f,d,p){const m=new Wm(t,i,s,l,c,f,d,p);if(this.curves.length>0){const g=m.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(m);const v=m.getPoint(1);return this.currentPoint.copy(v),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class df extends ex{constructor(t){super(t),this.uuid=or(),this.type="Shape",this.holes=[]}getPointsHoles(t){const i=[];for(let s=0,l=this.holes.length;s<l;s++)i[s]=this.holes[s].getPoints(t);return i}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let i=0,s=this.holes.length;i<s;i++){const l=this.holes[i];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(new ex().fromJSON(l))}return this}}function Rb(r,t,i=2){const s=t&&t.length,l=s?t[0]*i:r.length;let c=bS(r,0,l,i,!0);const f=[];if(!c||c.next===c.prev)return f;let d,p,m;if(s&&(c=Ob(r,t,c,i)),r.length>80*i){d=1/0,p=1/0;let v=-1/0,g=-1/0;for(let y=i;y<l;y+=i){const x=r[y],E=r[y+1];x<d&&(d=x),E<p&&(p=E),x>v&&(v=x),E>g&&(g=E)}m=Math.max(v-d,g-p),m=m!==0?32767/m:0}return ql(c,f,i,d,p,m,0),f}function bS(r,t,i,s,l){let c;if(l===qb(r,t,i,s)>0)for(let f=t;f<i;f+=s)c=nx(f/s|0,r[f],r[f+1],c);else for(let f=i-s;f>=t;f-=s)c=nx(f/s|0,r[f],r[f+1],c);return c&&To(c,c.next)&&(jl(c),c=c.next),c}function rr(r,t){if(!r)return r;t||(t=r);let i=r,s;do if(s=!1,!i.steiner&&(To(i,i.next)||ln(i.prev,i,i.next)===0)){if(jl(i),i=t=i.prev,i===i.next)break;s=!0}else i=i.next;while(s||i!==t);return t}function ql(r,t,i,s,l,c,f){if(!r)return;!f&&c&&Fb(r,s,l,c);let d=r;for(;r.prev!==r.next;){const p=r.prev,m=r.next;if(c?Nb(r,s,l,c):Db(r)){t.push(p.i,r.i,m.i),jl(r),r=m.next,d=m.next;continue}if(r=m,r===d){f?f===1?(r=Ub(rr(r),t),ql(r,t,i,s,l,c,2)):f===2&&Lb(r,t,i,s,l,c):ql(rr(r),t,i,s,l,c,1);break}}}function Db(r){const t=r.prev,i=r,s=r.next;if(ln(t,i,s)>=0)return!1;const l=t.x,c=i.x,f=s.x,d=t.y,p=i.y,m=s.y,v=Math.min(l,c,f),g=Math.min(d,p,m),y=Math.max(l,c,f),x=Math.max(d,p,m);let E=s.next;for(;E!==t;){if(E.x>=v&&E.x<=y&&E.y>=g&&E.y<=x&&Ul(l,d,c,p,f,m,E.x,E.y)&&ln(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function Nb(r,t,i,s){const l=r.prev,c=r,f=r.next;if(ln(l,c,f)>=0)return!1;const d=l.x,p=c.x,m=f.x,v=l.y,g=c.y,y=f.y,x=Math.min(d,p,m),E=Math.min(v,g,y),T=Math.max(d,p,m),M=Math.max(v,g,y),_=bm(x,E,t,i,s),w=bm(T,M,t,i,s);let C=r.prevZ,b=r.nextZ;for(;C&&C.z>=_&&b&&b.z<=w;){if(C.x>=x&&C.x<=T&&C.y>=E&&C.y<=M&&C!==l&&C!==f&&Ul(d,v,p,g,m,y,C.x,C.y)&&ln(C.prev,C,C.next)>=0||(C=C.prevZ,b.x>=x&&b.x<=T&&b.y>=E&&b.y<=M&&b!==l&&b!==f&&Ul(d,v,p,g,m,y,b.x,b.y)&&ln(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;C&&C.z>=_;){if(C.x>=x&&C.x<=T&&C.y>=E&&C.y<=M&&C!==l&&C!==f&&Ul(d,v,p,g,m,y,C.x,C.y)&&ln(C.prev,C,C.next)>=0)return!1;C=C.prevZ}for(;b&&b.z<=w;){if(b.x>=x&&b.x<=T&&b.y>=E&&b.y<=M&&b!==l&&b!==f&&Ul(d,v,p,g,m,y,b.x,b.y)&&ln(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ub(r,t){let i=r;do{const s=i.prev,l=i.next.next;!To(s,l)&&wS(s,i,i.next,l)&&Yl(s,l)&&Yl(l,s)&&(t.push(s.i,i.i,l.i),jl(i),jl(i.next),i=r=l),i=i.next}while(i!==r);return rr(i)}function Lb(r,t,i,s,l,c){let f=r;do{let d=f.next.next;for(;d!==f.prev;){if(f.i!==d.i&&Vb(f,d)){let p=CS(f,d);f=rr(f,f.next),p=rr(p,p.next),ql(f,t,i,s,l,c,0),ql(p,t,i,s,l,c,0);return}d=d.next}f=f.next}while(f!==r)}function Ob(r,t,i,s){const l=[];for(let c=0,f=t.length;c<f;c++){const d=t[c]*s,p=c<f-1?t[c+1]*s:r.length,m=bS(r,d,p,s,!1);m===m.next&&(m.steiner=!0),l.push(Gb(m))}l.sort(Pb);for(let c=0;c<l.length;c++)i=zb(l[c],i);return i}function Pb(r,t){let i=r.x-t.x;if(i===0&&(i=r.y-t.y,i===0)){const s=(r.next.y-r.y)/(r.next.x-r.x),l=(t.next.y-t.y)/(t.next.x-t.x);i=s-l}return i}function zb(r,t){const i=Ib(r,t);if(!i)return t;const s=CS(i,r);return rr(s,s.next),rr(i,i.next)}function Ib(r,t){let i=t;const s=r.x,l=r.y;let c=-1/0,f;if(To(r,i))return i;do{if(To(r,i.next))return i.next;if(l<=i.y&&l>=i.next.y&&i.next.y!==i.y){const g=i.x+(l-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(g<=s&&g>c&&(c=g,f=i.x<i.next.x?i:i.next,g===s))return f}i=i.next}while(i!==t);if(!f)return null;const d=f,p=f.x,m=f.y;let v=1/0;i=f;do{if(s>=i.x&&i.x>=p&&s!==i.x&&AS(l<m?s:c,l,p,m,l<m?c:s,l,i.x,i.y)){const g=Math.abs(l-i.y)/(s-i.x);Yl(i,r)&&(g<v||g===v&&(i.x>f.x||i.x===f.x&&Bb(f,i)))&&(f=i,v=g)}i=i.next}while(i!==d);return f}function Bb(r,t){return ln(r.prev,r,t.prev)<0&&ln(t.next,r,r.next)<0}function Fb(r,t,i,s){let l=r;do l.z===0&&(l.z=bm(l.x,l.y,t,i,s)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==r);l.prevZ.nextZ=null,l.prevZ=null,Hb(l)}function Hb(r){let t,i=1;do{let s=r,l;r=null;let c=null;for(t=0;s;){t++;let f=s,d=0;for(let m=0;m<i&&(d++,f=f.nextZ,!!f);m++);let p=i;for(;d>0||p>0&&f;)d!==0&&(p===0||!f||s.z<=f.z)?(l=s,s=s.nextZ,d--):(l=f,f=f.nextZ,p--),c?c.nextZ=l:r=l,l.prevZ=c,c=l;s=f}c.nextZ=null,i*=2}while(t>1);return r}function bm(r,t,i,s,l){return r=(r-i)*l|0,t=(t-s)*l|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Gb(r){let t=r,i=r;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==r);return i}function AS(r,t,i,s,l,c,f,d){return(l-f)*(t-d)>=(r-f)*(c-d)&&(r-f)*(s-d)>=(i-f)*(t-d)&&(i-f)*(c-d)>=(l-f)*(s-d)}function Ul(r,t,i,s,l,c,f,d){return!(r===f&&t===d)&&AS(r,t,i,s,l,c,f,d)}function Vb(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!kb(r,t)&&(Yl(r,t)&&Yl(t,r)&&Xb(r,t)&&(ln(r.prev,r,t.prev)||ln(r,t.prev,t))||To(r,t)&&ln(r.prev,r,r.next)>0&&ln(t.prev,t,t.next)>0)}function ln(r,t,i){return(t.y-r.y)*(i.x-t.x)-(t.x-r.x)*(i.y-t.y)}function To(r,t){return r.x===t.x&&r.y===t.y}function wS(r,t,i,s){const l=Xu(ln(r,t,i)),c=Xu(ln(r,t,s)),f=Xu(ln(i,s,r)),d=Xu(ln(i,s,t));return!!(l!==c&&f!==d||l===0&&ku(r,i,t)||c===0&&ku(r,s,t)||f===0&&ku(i,r,s)||d===0&&ku(i,t,s))}function ku(r,t,i){return t.x<=Math.max(r.x,i.x)&&t.x>=Math.min(r.x,i.x)&&t.y<=Math.max(r.y,i.y)&&t.y>=Math.min(r.y,i.y)}function Xu(r){return r>0?1:r<0?-1:0}function kb(r,t){let i=r;do{if(i.i!==r.i&&i.next.i!==r.i&&i.i!==t.i&&i.next.i!==t.i&&wS(i,i.next,r,t))return!0;i=i.next}while(i!==r);return!1}function Yl(r,t){return ln(r.prev,r,r.next)<0?ln(r,t,r.next)>=0&&ln(r,r.prev,t)>=0:ln(r,t,r.prev)<0||ln(r,r.next,t)<0}function Xb(r,t){let i=r,s=!1;const l=(r.x+t.x)/2,c=(r.y+t.y)/2;do i.y>c!=i.next.y>c&&i.next.y!==i.y&&l<(i.next.x-i.x)*(c-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==r);return s}function CS(r,t){const i=Am(r.i,r.x,r.y),s=Am(t.i,t.x,t.y),l=r.next,c=t.prev;return r.next=t,t.prev=r,i.next=l,l.prev=i,s.next=i,i.prev=s,c.next=s,s.prev=c,s}function nx(r,t,i,s){const l=Am(r,t,i);return s?(l.next=s.next,l.prev=s,s.next.prev=l,s.next=l):(l.prev=l,l.next=l),l}function jl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Am(r,t,i){return{i:r,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function qb(r,t,i,s){let l=0;for(let c=t,f=i-s;c<i;c+=s)l+=(r[f]-r[c])*(r[c+1]+r[f+1]),f=c;return l}class Yb{static triangulate(t,i,s=2){return Rb(t,i,s)}}class po{static area(t){const i=t.length;let s=0;for(let l=i-1,c=0;c<i;l=c++)s+=t[l].x*t[c].y-t[c].x*t[l].y;return s*.5}static isClockWise(t){return po.area(t)<0}static triangulateShape(t,i){const s=[],l=[],c=[];ix(t),ax(s,t);let f=t.length;i.forEach(ix);for(let p=0;p<i.length;p++)l.push(f),f+=i[p].length,ax(s,i[p]);const d=Yb.triangulate(s,l);for(let p=0;p<d.length;p+=3)c.push(d.slice(p,p+3));return c}}function ix(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function ax(r,t){for(let i=0;i<t.length;i++)r.push(t[i].x),r.push(t[i].y)}class Wl extends pn{constructor(t=new df([new Ft(.5,.5),new Ft(-.5,.5),new Ft(-.5,-.5),new Ft(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];const s=this,l=[],c=[];for(let d=0,p=t.length;d<p;d++){const m=t[d];f(m)}this.setAttribute("position",new Ge(l,3)),this.setAttribute("uv",new Ge(c,2)),this.computeVertexNormals();function f(d){const p=[],m=i.curveSegments!==void 0?i.curveSegments:12,v=i.steps!==void 0?i.steps:1,g=i.depth!==void 0?i.depth:1;let y=i.bevelEnabled!==void 0?i.bevelEnabled:!0,x=i.bevelThickness!==void 0?i.bevelThickness:.2,E=i.bevelSize!==void 0?i.bevelSize:x-.1,T=i.bevelOffset!==void 0?i.bevelOffset:0,M=i.bevelSegments!==void 0?i.bevelSegments:3;const _=i.extrudePath,w=i.UVGenerator!==void 0?i.UVGenerator:jb;let C,b=!1,P,z,I,O;_&&(C=_.getSpacedPoints(v),b=!0,y=!1,P=_.computeFrenetFrames(v,!1),z=new G,I=new G,O=new G),y||(M=0,x=0,E=0,T=0);const N=d.extractPoints(m);let A=N.shape;const V=N.holes;if(!po.isClockWise(A)){A=A.reverse();for(let Et=0,St=V.length;Et<St;Et++){const ht=V[Et];po.isClockWise(ht)&&(V[Et]=ht.reverse())}}function J(Et){const ht=10000000000000001e-36;let mt=Et[0];for(let Ct=1;Ct<=Et.length;Ct++){const Dt=Ct%Et.length,It=Et[Dt],le=It.x-mt.x,se=It.y-mt.y,F=le*le+se*se,R=Math.max(Math.abs(It.x),Math.abs(It.y),Math.abs(mt.x),Math.abs(mt.y)),ot=ht*R*R;if(F<=ot){Et.splice(Dt,1),Ct--;continue}mt=It}}J(A),V.forEach(J);const pt=V.length,$=A;for(let Et=0;Et<pt;Et++){const St=V[Et];A=A.concat(St)}function q(Et,St,ht){return St||console.error("THREE.ExtrudeGeometry: vec does not exist"),Et.clone().addScaledVector(St,ht)}const U=A.length;function B(Et,St,ht){let mt,Ct,Dt;const It=Et.x-St.x,le=Et.y-St.y,se=ht.x-Et.x,F=ht.y-Et.y,R=It*It+le*le,ot=It*F-le*se;if(Math.abs(ot)>Number.EPSILON){const gt=Math.sqrt(R),Lt=Math.sqrt(se*se+F*F),xt=St.x-le/gt,Wt=St.y+It/gt,Gt=ht.x-F/Lt,Jt=ht.y+se/Lt,te=((Gt-xt)*F-(Jt-Wt)*se)/(It*F-le*se);mt=xt+It*te-Et.x,Ct=Wt+le*te-Et.y;const Pt=mt*mt+Ct*Ct;if(Pt<=2)return new Ft(mt,Ct);Dt=Math.sqrt(Pt/2)}else{let gt=!1;It>Number.EPSILON?se>Number.EPSILON&&(gt=!0):It<-Number.EPSILON?se<-Number.EPSILON&&(gt=!0):Math.sign(le)===Math.sign(F)&&(gt=!0),gt?(mt=-le,Ct=It,Dt=Math.sqrt(R)):(mt=It,Ct=le,Dt=Math.sqrt(R/2))}return new Ft(mt/Dt,Ct/Dt)}const it=[];for(let Et=0,St=$.length,ht=St-1,mt=Et+1;Et<St;Et++,ht++,mt++)ht===St&&(ht=0),mt===St&&(mt=0),it[Et]=B($[Et],$[ht],$[mt]);const dt=[];let Nt,Rt=it.concat();for(let Et=0,St=pt;Et<St;Et++){const ht=V[Et];Nt=[];for(let mt=0,Ct=ht.length,Dt=Ct-1,It=mt+1;mt<Ct;mt++,Dt++,It++)Dt===Ct&&(Dt=0),It===Ct&&(It=0),Nt[mt]=B(ht[mt],ht[Dt],ht[It]);dt.push(Nt),Rt=Rt.concat(Nt)}let Qt;if(M===0)Qt=po.triangulateShape($,V);else{const Et=[],St=[];for(let ht=0;ht<M;ht++){const mt=ht/M,Ct=x*Math.cos(mt*Math.PI/2),Dt=E*Math.sin(mt*Math.PI/2)+T;for(let It=0,le=$.length;It<le;It++){const se=q($[It],it[It],Dt);bt(se.x,se.y,-Ct),mt===0&&Et.push(se)}for(let It=0,le=pt;It<le;It++){const se=V[It];Nt=dt[It];const F=[];for(let R=0,ot=se.length;R<ot;R++){const gt=q(se[R],Nt[R],Dt);bt(gt.x,gt.y,-Ct),mt===0&&F.push(gt)}mt===0&&St.push(F)}}Qt=po.triangulateShape(Et,St)}const H=Qt.length,et=E+T;for(let Et=0;Et<U;Et++){const St=y?q(A[Et],Rt[Et],et):A[Et];b?(I.copy(P.normals[0]).multiplyScalar(St.x),z.copy(P.binormals[0]).multiplyScalar(St.y),O.copy(C[0]).add(I).add(z),bt(O.x,O.y,O.z)):bt(St.x,St.y,0)}for(let Et=1;Et<=v;Et++)for(let St=0;St<U;St++){const ht=y?q(A[St],Rt[St],et):A[St];b?(I.copy(P.normals[Et]).multiplyScalar(ht.x),z.copy(P.binormals[Et]).multiplyScalar(ht.y),O.copy(C[Et]).add(I).add(z),bt(O.x,O.y,O.z)):bt(ht.x,ht.y,g/v*Et)}for(let Et=M-1;Et>=0;Et--){const St=Et/M,ht=x*Math.cos(St*Math.PI/2),mt=E*Math.sin(St*Math.PI/2)+T;for(let Ct=0,Dt=$.length;Ct<Dt;Ct++){const It=q($[Ct],it[Ct],mt);bt(It.x,It.y,g+ht)}for(let Ct=0,Dt=V.length;Ct<Dt;Ct++){const It=V[Ct];Nt=dt[Ct];for(let le=0,se=It.length;le<se;le++){const F=q(It[le],Nt[le],mt);b?bt(F.x,F.y+C[v-1].y,C[v-1].x+ht):bt(F.x,F.y,g+ht)}}}K(),j();function K(){const Et=l.length/3;if(y){let St=0,ht=U*St;for(let mt=0;mt<H;mt++){const Ct=Qt[mt];Mt(Ct[2]+ht,Ct[1]+ht,Ct[0]+ht)}St=v+M*2,ht=U*St;for(let mt=0;mt<H;mt++){const Ct=Qt[mt];Mt(Ct[0]+ht,Ct[1]+ht,Ct[2]+ht)}}else{for(let St=0;St<H;St++){const ht=Qt[St];Mt(ht[2],ht[1],ht[0])}for(let St=0;St<H;St++){const ht=Qt[St];Mt(ht[0]+U*v,ht[1]+U*v,ht[2]+U*v)}}s.addGroup(Et,l.length/3-Et,0)}function j(){const Et=l.length/3;let St=0;yt($,St),St+=$.length;for(let ht=0,mt=V.length;ht<mt;ht++){const Ct=V[ht];yt(Ct,St),St+=Ct.length}s.addGroup(Et,l.length/3-Et,1)}function yt(Et,St){let ht=Et.length;for(;--ht>=0;){const mt=ht;let Ct=ht-1;Ct<0&&(Ct=Et.length-1);for(let Dt=0,It=v+M*2;Dt<It;Dt++){const le=U*Dt,se=U*(Dt+1),F=St+mt+le,R=St+Ct+le,ot=St+Ct+se,gt=St+mt+se;wt(F,R,ot,gt)}}}function bt(Et,St,ht){p.push(Et),p.push(St),p.push(ht)}function Mt(Et,St,ht){Ot(Et),Ot(St),Ot(ht);const mt=l.length/3,Ct=w.generateTopUV(s,l,mt-3,mt-2,mt-1);k(Ct[0]),k(Ct[1]),k(Ct[2])}function wt(Et,St,ht,mt){Ot(Et),Ot(St),Ot(mt),Ot(St),Ot(ht),Ot(mt);const Ct=l.length/3,Dt=w.generateSideWallUV(s,l,Ct-6,Ct-3,Ct-2,Ct-1);k(Dt[0]),k(Dt[1]),k(Dt[3]),k(Dt[1]),k(Dt[2]),k(Dt[3])}function Ot(Et){l.push(p[Et*3+0]),l.push(p[Et*3+1]),l.push(p[Et*3+2])}function k(Et){c.push(Et.x),c.push(Et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes,s=this.parameters.options;return Wb(i,s,t)}static fromJSON(t,i){const s=[];for(let c=0,f=t.shapes.length;c<f;c++){const d=i[t.shapes[c]];s.push(d)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new hf[l.type]().fromJSON(l)),new Wl(s,t.options)}}const jb={generateTopUV:function(r,t,i,s,l){const c=t[i*3],f=t[i*3+1],d=t[s*3],p=t[s*3+1],m=t[l*3],v=t[l*3+1];return[new Ft(c,f),new Ft(d,p),new Ft(m,v)]},generateSideWallUV:function(r,t,i,s,l,c){const f=t[i*3],d=t[i*3+1],p=t[i*3+2],m=t[s*3],v=t[s*3+1],g=t[s*3+2],y=t[l*3],x=t[l*3+1],E=t[l*3+2],T=t[c*3],M=t[c*3+1],_=t[c*3+2];return Math.abs(d-v)<Math.abs(f-m)?[new Ft(f,1-p),new Ft(m,1-g),new Ft(y,1-E),new Ft(T,1-_)]:[new Ft(d,1-p),new Ft(v,1-g),new Ft(x,1-E),new Ft(M,1-_)]}};function Wb(r,t,i){if(i.shapes=[],Array.isArray(r))for(let s=0,l=r.length;s<l;s++){const c=r[s];i.shapes.push(c.uuid)}else i.shapes.push(r.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}class Qm extends jm{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new Qm(t.radius,t.detail)}}class Ba extends pn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,v=p+1,g=t/d,y=i/p,x=[],E=[],T=[],M=[];for(let _=0;_<v;_++){const w=_*y-f;for(let C=0;C<m;C++){const b=C*g-c;E.push(b,-w,0),T.push(0,0,1),M.push(C/d),M.push(1-_/p)}}for(let _=0;_<p;_++)for(let w=0;w<d;w++){const C=w+m*_,b=w+m*(_+1),P=w+1+m*(_+1),z=w+1+m*_;x.push(C,b,z),x.push(b,P,z)}this.setIndex(x),this.setAttribute("position",new Ge(E,3)),this.setAttribute("normal",new Ge(T,3)),this.setAttribute("uv",new Ge(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ba(t.width,t.height,t.widthSegments,t.heightSegments)}}class Km extends pn{constructor(t=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const d=[],p=[],m=[],v=[];let g=t;const y=(i-t)/l,x=new G,E=new Ft;for(let T=0;T<=l;T++){for(let M=0;M<=s;M++){const _=c+M/s*f;x.x=g*Math.cos(_),x.y=g*Math.sin(_),p.push(x.x,x.y,x.z),m.push(0,0,1),E.x=(x.x/i+1)/2,E.y=(x.y/i+1)/2,v.push(E.x,E.y)}g+=y}for(let T=0;T<l;T++){const M=T*(s+1);for(let _=0;_<s;_++){const w=_+M,C=w,b=w+s+1,P=w+s+2,z=w+1;d.push(C,b,z),d.push(b,P,z)}}this.setIndex(d),this.setAttribute("position",new Ge(p,3)),this.setAttribute("normal",new Ge(m,3)),this.setAttribute("uv",new Ge(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Km(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ca extends pn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(f+d,Math.PI);let m=0;const v=[],g=new G,y=new G,x=[],E=[],T=[],M=[];for(let _=0;_<=s;_++){const w=[],C=_/s;let b=0;_===0&&f===0?b=.5/i:_===s&&p===Math.PI&&(b=-.5/i);for(let P=0;P<=i;P++){const z=P/i;g.x=-t*Math.cos(l+z*c)*Math.sin(f+C*d),g.y=t*Math.cos(f+C*d),g.z=t*Math.sin(l+z*c)*Math.sin(f+C*d),E.push(g.x,g.y,g.z),y.copy(g).normalize(),T.push(y.x,y.y,y.z),M.push(z+b,1-C),w.push(m++)}v.push(w)}for(let _=0;_<s;_++)for(let w=0;w<i;w++){const C=v[_][w+1],b=v[_][w],P=v[_+1][w],z=v[_+1][w+1];(_!==0||f>0)&&x.push(C,b,z),(_!==s-1||p<Math.PI)&&x.push(b,P,z)}this.setIndex(x),this.setAttribute("position",new Ge(E,3)),this.setAttribute("normal",new Ge(T,3)),this.setAttribute("uv",new Ge(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ca(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Jm extends pn{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const f=[],d=[],p=[],m=[],v=new G,g=new G,y=new G;for(let x=0;x<=s;x++)for(let E=0;E<=l;E++){const T=E/l*c,M=x/s*Math.PI*2;g.x=(t+i*Math.cos(M))*Math.cos(T),g.y=(t+i*Math.cos(M))*Math.sin(T),g.z=i*Math.sin(M),d.push(g.x,g.y,g.z),v.x=t*Math.cos(T),v.y=t*Math.sin(T),y.subVectors(g,v).normalize(),p.push(y.x,y.y,y.z),m.push(E/l),m.push(x/s)}for(let x=1;x<=s;x++)for(let E=1;E<=l;E++){const T=(l+1)*x+E-1,M=(l+1)*(x-1)+E-1,_=(l+1)*(x-1)+E,w=(l+1)*x+E;f.push(T,M,w),f.push(M,_,w)}this.setIndex(f),this.setAttribute("position",new Ge(d,3)),this.setAttribute("normal",new Ge(p,3)),this.setAttribute("uv",new Ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jm(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class pf extends pn{constructor(t=new ES(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),i=64,s=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:l,closed:c};const f=t.computeFrenetFrames(i,c);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const d=new G,p=new G,m=new Ft;let v=new G;const g=[],y=[],x=[],E=[];T(),this.setIndex(E),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(y,3)),this.setAttribute("uv",new Ge(x,2));function T(){for(let C=0;C<i;C++)M(C);M(c===!1?i:0),w(),_()}function M(C){v=t.getPointAt(C/i,v);const b=f.normals[C],P=f.binormals[C];for(let z=0;z<=l;z++){const I=z/l*Math.PI*2,O=Math.sin(I),N=-Math.cos(I);p.x=N*b.x+O*P.x,p.y=N*b.y+O*P.y,p.z=N*b.z+O*P.z,p.normalize(),y.push(p.x,p.y,p.z),d.x=v.x+s*p.x,d.y=v.y+s*p.y,d.z=v.z+s*p.z,g.push(d.x,d.y,d.z)}}function _(){for(let C=1;C<=i;C++)for(let b=1;b<=l;b++){const P=(l+1)*(C-1)+(b-1),z=(l+1)*C+(b-1),I=(l+1)*C+b,O=(l+1)*(C-1)+b;E.push(P,z,O),E.push(z,I,O)}}function w(){for(let C=0;C<=i;C++)for(let b=0;b<=l;b++)m.x=C/i,m.y=b/l,x.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new pf(new hf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Zb extends nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mo extends ur{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sS,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Qb extends ur{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Kb extends ur{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class $m extends Mn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class Jb extends $m{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Cp=new He,sx=new G,rx=new G;class RS{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=Yi,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xm,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;sx.setFromMatrixPosition(t.matrixWorld),i.position.copy(sx),rx.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(rx),i.updateMatrixWorld(),Cp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cp,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Cp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ox=new He,Rl=new G,Rp=new G;class $b extends RS{constructor(){super(new ri(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ft(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new G(1,0,0),new G(-1,0,0),new G(0,0,1),new G(0,0,-1),new G(0,1,0),new G(0,-1,0)],this._cubeUps=[new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,1,0),new G(0,0,1),new G(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,c=t.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),Rl.setFromMatrixPosition(t.matrixWorld),s.position.copy(Rl),Rp.copy(s.position),Rp.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Rp),s.updateMatrixWorld(),l.makeTranslation(-Rl.x,-Rl.y,-Rl.z),ox.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ox,s.coordinateSystem,s.reversedDepth)}}class lx extends $m{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new $b}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class t0 extends pS{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class tA extends RS{constructor(){super(new t0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class cx extends $m{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new tA}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class eA extends ri{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class DS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function ux(r,t,i,s){const l=nA(s);switch(i){case nS:return r*t;case Im:return r*t/l.components*l.byteLength;case Bm:return r*t/l.components*l.byteLength;case aS:return r*t*2/l.components*l.byteLength;case Fm:return r*t*2/l.components*l.byteLength;case iS:return r*t*3/l.components*l.byteLength;case Xi:return r*t*4/l.components*l.byteLength;case Hm:return r*t*4/l.components*l.byteLength;case Ju:case $u:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case tf:case ef:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Qp:case Jp:return Math.max(r,16)*Math.max(t,8)/4;case Zp:case Kp:return Math.max(r,8)*Math.max(t,8)/2;case $p:case tm:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case em:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case nm:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case im:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case am:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case sm:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case rm:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case om:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case lm:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case cm:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case um:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case fm:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case hm:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case dm:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case pm:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case mm:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case gm:case vm:case _m:return Math.ceil(r/4)*Math.ceil(t/4)*16;case ym:case xm:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Sm:case Mm:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function nA(r){switch(r){case Yi:case Jx:return{byteLength:1,components:1};case Bl:case $x:case qi:return{byteLength:2,components:1};case Pm:case zm:return{byteLength:2,components:4};case ar:case Om:case oa:return{byteLength:4,components:1};case tS:case eS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Um}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Um);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function NS(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function iA(r){const t=new WeakMap;function i(d,p){const m=d.array,v=d.usage,g=m.byteLength,y=r.createBuffer();r.bindBuffer(p,y),r.bufferData(p,m,v),d.onUploadCallback();let x;if(m instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)x=r.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)x=r.SHORT;else if(m instanceof Uint32Array)x=r.UNSIGNED_INT;else if(m instanceof Int32Array)x=r.INT;else if(m instanceof Int8Array)x=r.BYTE;else if(m instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:x,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,p,m){const v=p.array,g=p.updateRanges;if(r.bindBuffer(m,d),g.length===0)r.bufferSubData(m,0,v);else{g.sort((x,E)=>x.start-E.start);let y=0;for(let x=1;x<g.length;x++){const E=g[y],T=g[x];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++y,g[y]=T)}g.length=y+1;for(let x=0,E=g.length;x<E;x++){const T=g[x];r.bufferSubData(m,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(r.deleteBuffer(p.buffer),t.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:f}}var aA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sA=`#ifdef USE_ALPHAHASH
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
#endif`,rA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,oA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,uA=`#ifdef USE_AOMAP
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
#endif`,fA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hA=`#ifdef USE_BATCHING
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
#endif`,dA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,vA=`#ifdef USE_IRIDESCENCE
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
#endif`,_A=`#ifdef USE_BUMPMAP
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
#endif`,yA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,xA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,SA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,MA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,EA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,TA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,AA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,wA=`#define PI 3.141592653589793
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
} // validated`,CA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,RA=`vec3 transformedNormal = objectNormal;
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
#endif`,DA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,NA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,LA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,OA="gl_FragColor = linearToOutputTexel( gl_FragColor );",PA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zA=`#ifdef USE_ENVMAP
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
#endif`,IA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,BA=`#ifdef USE_ENVMAP
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
#endif`,FA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,HA=`#ifdef USE_ENVMAP
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
#endif`,GA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,VA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,XA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qA=`#ifdef USE_GRADIENTMAP
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
}`,YA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,jA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,WA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ZA=`uniform bool receiveShadow;
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
#endif`,QA=`#ifdef USE_ENVMAP
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
#endif`,KA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,JA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$A=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,t2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,e2=`PhysicalMaterial material;
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
#endif`,n2=`struct PhysicalMaterial {
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
}`,i2=`
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
#endif`,a2=`#if defined( RE_IndirectDiffuse )
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
#endif`,s2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,o2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,l2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,c2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,u2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,f2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,d2=`#if defined( USE_POINTS_UV )
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
#endif`,p2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,m2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,g2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,v2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,y2=`#ifdef USE_MORPHTARGETS
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
#endif`,x2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,S2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,M2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,E2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,T2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,A2=`#ifdef USE_NORMALMAP
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
#endif`,w2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,C2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,R2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,D2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,N2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,U2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,L2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,O2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,P2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,z2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,I2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,B2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,F2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,H2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,G2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,V2=`float getShadowMask() {
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
}`,k2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,X2=`#ifdef USE_SKINNING
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
#endif`,q2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Y2=`#ifdef USE_SKINNING
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
#endif`,j2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,W2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Z2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Q2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,K2=`#ifdef USE_TRANSMISSION
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
#endif`,J2=`#ifdef USE_TRANSMISSION
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
#endif`,$2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const iw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aw=`uniform sampler2D t2D;
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
}`,sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cw=`#include <common>
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
}`,uw=`#if DEPTH_PACKING == 3200
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
}`,fw=`#define DISTANCE
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
}`,hw=`#define DISTANCE
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
}`,dw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mw=`uniform float scale;
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
}`,gw=`uniform vec3 diffuse;
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
}`,vw=`#include <common>
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
}`,_w=`uniform vec3 diffuse;
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
}`,yw=`#define LAMBERT
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
}`,xw=`#define LAMBERT
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
}`,Sw=`#define MATCAP
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
}`,Mw=`#define MATCAP
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
}`,Ew=`#define NORMAL
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
}`,Tw=`#define NORMAL
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
}`,bw=`#define PHONG
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
}`,Aw=`#define PHONG
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
}`,ww=`#define STANDARD
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
}`,Cw=`#define STANDARD
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
}`,Rw=`#define TOON
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
}`,Dw=`#define TOON
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
}`,Nw=`uniform float size;
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
}`,Uw=`uniform vec3 diffuse;
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
}`,Lw=`#include <common>
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
}`,Ow=`uniform vec3 color;
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
}`,Pw=`uniform float rotation;
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
}`,zw=`uniform vec3 diffuse;
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
}`,Me={alphahash_fragment:aA,alphahash_pars_fragment:sA,alphamap_fragment:rA,alphamap_pars_fragment:oA,alphatest_fragment:lA,alphatest_pars_fragment:cA,aomap_fragment:uA,aomap_pars_fragment:fA,batching_pars_vertex:hA,batching_vertex:dA,begin_vertex:pA,beginnormal_vertex:mA,bsdfs:gA,iridescence_fragment:vA,bumpmap_pars_fragment:_A,clipping_planes_fragment:yA,clipping_planes_pars_fragment:xA,clipping_planes_pars_vertex:SA,clipping_planes_vertex:MA,color_fragment:EA,color_pars_fragment:TA,color_pars_vertex:bA,color_vertex:AA,common:wA,cube_uv_reflection_fragment:CA,defaultnormal_vertex:RA,displacementmap_pars_vertex:DA,displacementmap_vertex:NA,emissivemap_fragment:UA,emissivemap_pars_fragment:LA,colorspace_fragment:OA,colorspace_pars_fragment:PA,envmap_fragment:zA,envmap_common_pars_fragment:IA,envmap_pars_fragment:BA,envmap_pars_vertex:FA,envmap_physical_pars_fragment:QA,envmap_vertex:HA,fog_vertex:GA,fog_pars_vertex:VA,fog_fragment:kA,fog_pars_fragment:XA,gradientmap_pars_fragment:qA,lightmap_pars_fragment:YA,lights_lambert_fragment:jA,lights_lambert_pars_fragment:WA,lights_pars_begin:ZA,lights_toon_fragment:KA,lights_toon_pars_fragment:JA,lights_phong_fragment:$A,lights_phong_pars_fragment:t2,lights_physical_fragment:e2,lights_physical_pars_fragment:n2,lights_fragment_begin:i2,lights_fragment_maps:a2,lights_fragment_end:s2,logdepthbuf_fragment:r2,logdepthbuf_pars_fragment:o2,logdepthbuf_pars_vertex:l2,logdepthbuf_vertex:c2,map_fragment:u2,map_pars_fragment:f2,map_particle_fragment:h2,map_particle_pars_fragment:d2,metalnessmap_fragment:p2,metalnessmap_pars_fragment:m2,morphinstance_vertex:g2,morphcolor_vertex:v2,morphnormal_vertex:_2,morphtarget_pars_vertex:y2,morphtarget_vertex:x2,normal_fragment_begin:S2,normal_fragment_maps:M2,normal_pars_fragment:E2,normal_pars_vertex:T2,normal_vertex:b2,normalmap_pars_fragment:A2,clearcoat_normal_fragment_begin:w2,clearcoat_normal_fragment_maps:C2,clearcoat_pars_fragment:R2,iridescence_pars_fragment:D2,opaque_fragment:N2,packing:U2,premultiplied_alpha_fragment:L2,project_vertex:O2,dithering_fragment:P2,dithering_pars_fragment:z2,roughnessmap_fragment:I2,roughnessmap_pars_fragment:B2,shadowmap_pars_fragment:F2,shadowmap_pars_vertex:H2,shadowmap_vertex:G2,shadowmask_pars_fragment:V2,skinbase_vertex:k2,skinning_pars_vertex:X2,skinning_vertex:q2,skinnormal_vertex:Y2,specularmap_fragment:j2,specularmap_pars_fragment:W2,tonemapping_fragment:Z2,tonemapping_pars_fragment:Q2,transmission_fragment:K2,transmission_pars_fragment:J2,uv_pars_fragment:$2,uv_pars_vertex:tw,uv_vertex:ew,worldpos_vertex:nw,background_vert:iw,background_frag:aw,backgroundCube_vert:sw,backgroundCube_frag:rw,cube_vert:ow,cube_frag:lw,depth_vert:cw,depth_frag:uw,distanceRGBA_vert:fw,distanceRGBA_frag:hw,equirect_vert:dw,equirect_frag:pw,linedashed_vert:mw,linedashed_frag:gw,meshbasic_vert:vw,meshbasic_frag:_w,meshlambert_vert:yw,meshlambert_frag:xw,meshmatcap_vert:Sw,meshmatcap_frag:Mw,meshnormal_vert:Ew,meshnormal_frag:Tw,meshphong_vert:bw,meshphong_frag:Aw,meshphysical_vert:ww,meshphysical_frag:Cw,meshtoon_vert:Rw,meshtoon_frag:Dw,points_vert:Nw,points_frag:Uw,shadow_vert:Lw,shadow_frag:Ow,sprite_vert:Pw,sprite_frag:zw},jt={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},envMapRotation:{value:new ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}}},sa={basic:{uniforms:$n([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:$n([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new oe(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:$n([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:$n([jt.common,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.roughnessmap,jt.metalnessmap,jt.fog,jt.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:$n([jt.common,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.gradientmap,jt.fog,jt.lights,{emissive:{value:new oe(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:$n([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:$n([jt.points,jt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:$n([jt.common,jt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:$n([jt.common,jt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:$n([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:$n([jt.sprite,jt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ye}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distanceRGBA:{uniforms:$n([jt.common,jt.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distanceRGBA_vert,fragmentShader:Me.distanceRGBA_frag},shadow:{uniforms:$n([jt.lights,jt.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};sa.physical={uniforms:$n([sa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ye}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const qu={r:0,b:0,g:0},Zs=new xi,Iw=new He;function Bw(r,t,i,s,l,c,f){const d=new oe(0);let p=c===!0?0:1,m,v,g=null,y=0,x=null;function E(C){let b=C.isScene===!0?C.background:null;return b&&b.isTexture&&(b=(C.backgroundBlurriness>0?i:t).get(b)),b}function T(C){let b=!1;const P=E(C);P===null?_(d,p):P&&P.isColor&&(_(P,1),b=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||b)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(C,b){const P=E(b);P&&(P.isCubeTexture||P.mapping===gf)?(v===void 0&&(v=new sn(new wo(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Eo(sa.backgroundCube.uniforms),vertexShader:sa.backgroundCube.vertexShader,fragmentShader:sa.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(z,I,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Zs.copy(b.backgroundRotation),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),v.material.uniforms.envMap.value=P,v.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Iw.makeRotationFromEuler(Zs)),v.material.toneMapped=Le.getTransfer(P.colorSpace)!==je,(g!==P||y!==P.version||x!==r.toneMapping)&&(v.material.needsUpdate=!0,g=P,y=P.version,x=r.toneMapping),v.layers.enableAll(),C.unshift(v,v.geometry,v.material,0,0,null)):P&&P.isTexture&&(m===void 0&&(m=new sn(new Ba(2,2),new nn({name:"BackgroundMaterial",uniforms:Eo(sa.background.uniforms),vertexShader:sa.background.vertexShader,fragmentShader:sa.background.fragmentShader,side:xs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=P,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.toneMapped=Le.getTransfer(P.colorSpace)!==je,P.matrixAutoUpdate===!0&&P.updateMatrix(),m.material.uniforms.uvTransform.value.copy(P.matrix),(g!==P||y!==P.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,g=P,y=P.version,x=r.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null))}function _(C,b){C.getRGB(qu,dS(r)),s.buffers.color.setClear(qu.r,qu.g,qu.b,b,f)}function w(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(C,b=1){d.set(C),p=b,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(C){p=C,_(d,p)},render:T,addToRenderList:M,dispose:w}}function Fw(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,f=!1;function d(A,V,Y,J,pt){let $=!1;const q=g(J,Y,V);c!==q&&(c=q,m(c.object)),$=x(A,J,Y,pt),$&&E(A,J,Y,pt),pt!==null&&t.update(pt,r.ELEMENT_ARRAY_BUFFER),($||f)&&(f=!1,b(A,V,Y,J),pt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(pt).buffer))}function p(){return r.createVertexArray()}function m(A){return r.bindVertexArray(A)}function v(A){return r.deleteVertexArray(A)}function g(A,V,Y){const J=Y.wireframe===!0;let pt=s[A.id];pt===void 0&&(pt={},s[A.id]=pt);let $=pt[V.id];$===void 0&&($={},pt[V.id]=$);let q=$[J];return q===void 0&&(q=y(p()),$[J]=q),q}function y(A){const V=[],Y=[],J=[];for(let pt=0;pt<i;pt++)V[pt]=0,Y[pt]=0,J[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Y,attributeDivisors:J,object:A,attributes:{},index:null}}function x(A,V,Y,J){const pt=c.attributes,$=V.attributes;let q=0;const U=Y.getAttributes();for(const B in U)if(U[B].location>=0){const dt=pt[B];let Nt=$[B];if(Nt===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(Nt=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(Nt=A.instanceColor)),dt===void 0||dt.attribute!==Nt||Nt&&dt.data!==Nt.data)return!0;q++}return c.attributesNum!==q||c.index!==J}function E(A,V,Y,J){const pt={},$=V.attributes;let q=0;const U=Y.getAttributes();for(const B in U)if(U[B].location>=0){let dt=$[B];dt===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(dt=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(dt=A.instanceColor));const Nt={};Nt.attribute=dt,dt&&dt.data&&(Nt.data=dt.data),pt[B]=Nt,q++}c.attributes=pt,c.attributesNum=q,c.index=J}function T(){const A=c.newAttributes;for(let V=0,Y=A.length;V<Y;V++)A[V]=0}function M(A){_(A,0)}function _(A,V){const Y=c.newAttributes,J=c.enabledAttributes,pt=c.attributeDivisors;Y[A]=1,J[A]===0&&(r.enableVertexAttribArray(A),J[A]=1),pt[A]!==V&&(r.vertexAttribDivisor(A,V),pt[A]=V)}function w(){const A=c.newAttributes,V=c.enabledAttributes;for(let Y=0,J=V.length;Y<J;Y++)V[Y]!==A[Y]&&(r.disableVertexAttribArray(Y),V[Y]=0)}function C(A,V,Y,J,pt,$,q){q===!0?r.vertexAttribIPointer(A,V,Y,pt,$):r.vertexAttribPointer(A,V,Y,J,pt,$)}function b(A,V,Y,J){T();const pt=J.attributes,$=Y.getAttributes(),q=V.defaultAttributeValues;for(const U in $){const B=$[U];if(B.location>=0){let it=pt[U];if(it===void 0&&(U==="instanceMatrix"&&A.instanceMatrix&&(it=A.instanceMatrix),U==="instanceColor"&&A.instanceColor&&(it=A.instanceColor)),it!==void 0){const dt=it.normalized,Nt=it.itemSize,Rt=t.get(it);if(Rt===void 0)continue;const Qt=Rt.buffer,H=Rt.type,et=Rt.bytesPerElement,K=H===r.INT||H===r.UNSIGNED_INT||it.gpuType===Om;if(it.isInterleavedBufferAttribute){const j=it.data,yt=j.stride,bt=it.offset;if(j.isInstancedInterleavedBuffer){for(let Mt=0;Mt<B.locationSize;Mt++)_(B.location+Mt,j.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let Mt=0;Mt<B.locationSize;Mt++)M(B.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,Qt);for(let Mt=0;Mt<B.locationSize;Mt++)C(B.location+Mt,Nt/B.locationSize,H,dt,yt*et,(bt+Nt/B.locationSize*Mt)*et,K)}else{if(it.isInstancedBufferAttribute){for(let j=0;j<B.locationSize;j++)_(B.location+j,it.meshPerAttribute);A.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let j=0;j<B.locationSize;j++)M(B.location+j);r.bindBuffer(r.ARRAY_BUFFER,Qt);for(let j=0;j<B.locationSize;j++)C(B.location+j,Nt/B.locationSize,H,dt,Nt*et,Nt/B.locationSize*j*et,K)}}else if(q!==void 0){const dt=q[U];if(dt!==void 0)switch(dt.length){case 2:r.vertexAttrib2fv(B.location,dt);break;case 3:r.vertexAttrib3fv(B.location,dt);break;case 4:r.vertexAttrib4fv(B.location,dt);break;default:r.vertexAttrib1fv(B.location,dt)}}}}w()}function P(){O();for(const A in s){const V=s[A];for(const Y in V){const J=V[Y];for(const pt in J)v(J[pt].object),delete J[pt];delete V[Y]}delete s[A]}}function z(A){if(s[A.id]===void 0)return;const V=s[A.id];for(const Y in V){const J=V[Y];for(const pt in J)v(J[pt].object),delete J[pt];delete V[Y]}delete s[A.id]}function I(A){for(const V in s){const Y=s[V];if(Y[A.id]===void 0)continue;const J=Y[A.id];for(const pt in J)v(J[pt].object),delete J[pt];delete Y[A.id]}}function O(){N(),f=!0,c!==l&&(c=l,m(c.object))}function N(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:N,dispose:P,releaseStatesOfGeometry:z,releaseStatesOfProgram:I,initAttributes:T,enableAttribute:M,disableUnusedAttributes:w}}function Hw(r,t,i){let s;function l(m){s=m}function c(m,v){r.drawArrays(s,m,v),i.update(v,s,1)}function f(m,v,g){g!==0&&(r.drawArraysInstanced(s,m,v,g),i.update(v,s,g))}function d(m,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,v,0,g);let x=0;for(let E=0;E<g;E++)x+=v[E];i.update(x,s,1)}function p(m,v,g,y){if(g===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<m.length;E++)f(m[E],v[E],y[E]);else{x.multiDrawArraysInstancedWEBGL(s,m,0,v,0,y,0,g);let E=0;for(let T=0;T<g;T++)E+=v[T]*y[T];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Gw(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Xi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const O=I===qi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==Yi&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==oa&&!O)}function p(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),C=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=E>0,z=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:x,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:w,maxVaryings:C,maxFragmentUniforms:b,vertexTextures:P,maxSamples:z}}function Vw(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Ks,d=new ye,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const x=g.length!==0||y||s!==0||l;return l=y,s=g.length,x},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=v(g,y,0)},this.setState=function(g,y,x){const E=g.clippingPlanes,T=g.clipIntersection,M=g.clipShadows,_=r.get(g);if(!l||E===null||E.length===0||c&&!M)c?v(null):m();else{const w=c?0:s,C=w*4;let b=_.clippingState||null;p.value=b,b=v(E,y,C,x);for(let P=0;P!==C;++P)b[P]=i[P];_.clippingState=b,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(g,y,x,E){const T=g!==null?g.length:0;let M=null;if(T!==0){if(M=p.value,E!==!0||M===null){const _=x+T*4,w=y.matrixWorldInverse;d.getNormalMatrix(w),(M===null||M.length<_)&&(M=new Float32Array(_));for(let C=0,b=x;C!==T;++C,b+=4)f.copy(g[C]).applyMatrix4(w,d),f.normal.toArray(M,b),M[b+3]=f.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function kw(r){let t=new WeakMap;function i(f,d){return d===rf?f.mapping=xo:d===Yp&&(f.mapping=So),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===rf||d===Yp)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new ob(p.height);return m.fromEquirectangularTexture(r,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const go=4,fx=[.125,.215,.35,.446,.526,.582],tr=20,Dp=new t0,hx=new oe;let Np=null,Up=0,Lp=0,Op=!1;const Js=(1+Math.sqrt(5))/2,fo=1/Js,dx=[new G(-Js,fo,0),new G(Js,fo,0),new G(-fo,0,Js),new G(fo,0,Js),new G(0,Js,-fo),new G(0,Js,fo),new G(-1,1,-1),new G(1,1,-1),new G(-1,1,1),new G(1,1,1)],Xw=new G;class wm{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=Xw}=c;Np=this._renderer.getRenderTarget(),Up=this._renderer.getActiveCubeFace(),Lp=this._renderer.getActiveMipmapLevel(),Op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Np,Up,Lp),this._renderer.xr.enabled=Op,t.scissorTest=!1,Yu(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===xo||t.mapping===So?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Np=this._renderer.getRenderTarget(),Up=this._renderer.getActiveCubeFace(),Lp=this._renderer.getActiveMipmapLevel(),Op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ra,minFilter:ra,generateMipmaps:!1,type:qi,format:Xi,colorSpace:Mo,depthBuffer:!1},l=px(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=px(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qw(c)),this._blurMaterial=Yw(c,t,i)}return l}_compileMaterial(t){const i=new sn(this._lodPlanes[0],t);this._renderer.compile(i,Dp)}_sceneToCubeUV(t,i,s,l,c){const p=new ri(90,1,i,s),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,x=g.toneMapping;g.getClearColor(hx),g.toneMapping=za,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const T=new sr({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),M=new sn(new wo,T);let _=!1;const w=t.background;w?w.isColor&&(T.color.copy(w),t.background=null,_=!0):(T.color.copy(hx),_=!0);for(let C=0;C<6;C++){const b=C%3;b===0?(p.up.set(0,m[C],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+v[C],c.y,c.z)):b===1?(p.up.set(0,0,m[C]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+v[C],c.z)):(p.up.set(0,m[C],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+v[C]));const P=this._cubeSize;Yu(l,b*P,C>2?P:0,P,P),g.setRenderTarget(l),_&&g.render(M,p),g.render(t,p)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=x,g.autoClear=y,t.background=w}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===xo||t.mapping===So;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=gx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mx());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new sn(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const p=this._cubeSize;Yu(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(f,Dp)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=dx[(l-c-1)%dx.length];this._blur(t,c-1,c,f,d)}i.autoClear=s}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new sn(this._lodPlanes[l],m),y=m.uniforms,x=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*tr-1),T=c/E,M=isFinite(c)?1+Math.floor(v*T):tr;M>tr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${tr}`);const _=[];let w=0;for(let I=0;I<tr;++I){const O=I/T,N=Math.exp(-O*O/2);_.push(N),I===0?w+=N:I<M&&(w+=2*N)}for(let I=0;I<_.length;I++)_[I]=_[I]/w;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=_,y.latitudinal.value=f==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:C}=this;y.dTheta.value=E,y.mipInt.value=C-s;const b=this._sizeLods[l],P=3*b*(l>C-go?l-C+go:0),z=4*(this._cubeSize-b);Yu(i,P,z,3*b,2*b),p.setRenderTarget(i),p.render(g,Dp)}}function qw(r){const t=[],i=[],s=[];let l=r;const c=r-go+1+fx.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let p=1/d;f>r-go?p=fx[f-r+go-1]:f===0&&(p=0),s.push(p);const m=1/(d-2),v=-m,g=1+m,y=[v,v,g,v,g,g,v,v,g,g,v,g],x=6,E=6,T=3,M=2,_=1,w=new Float32Array(T*E*x),C=new Float32Array(M*E*x),b=new Float32Array(_*E*x);for(let z=0;z<x;z++){const I=z%3*2/3-1,O=z>2?0:-1,N=[I,O,0,I+2/3,O,0,I+2/3,O+1,0,I,O,0,I+2/3,O+1,0,I,O+1,0];w.set(N,T*E*z),C.set(y,M*E*z);const A=[z,z,z,z,z,z];b.set(A,_*E*z)}const P=new pn;P.setAttribute("position",new hn(w,T)),P.setAttribute("uv",new hn(C,M)),P.setAttribute("faceIndex",new hn(b,_)),t.push(P),l>go&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function px(r,t,i){const s=new Li(r,t,i);return s.texture.mapping=gf,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Yu(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function Yw(r,t,i){const s=new Float32Array(tr),l=new G(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:e0(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function mx(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:e0(),fragmentShader:`

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
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function gx(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:e0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function e0(){return`

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
	`}function jw(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===rf||p===Yp,v=p===xo||p===So;if(m||v){let g=t.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new wm(r)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const x=d.image;return m&&x&&x.height>0||v&&x&&l(x)?(i===null&&(i=new wm(r)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function Ww(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&kl("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function Zw(r,t,i,s){const l={},c=new WeakMap;function f(g){const y=g.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",f),delete l[y.id];const x=c.get(y);x&&(t.remove(x),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(g,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function p(g){const y=g.attributes;for(const x in y)t.update(y[x],r.ARRAY_BUFFER)}function m(g){const y=[],x=g.index,E=g.attributes.position;let T=0;if(x!==null){const w=x.array;T=x.version;for(let C=0,b=w.length;C<b;C+=3){const P=w[C+0],z=w[C+1],I=w[C+2];y.push(P,z,z,I,I,P)}}else if(E!==void 0){const w=E.array;T=E.version;for(let C=0,b=w.length/3-1;C<b;C+=3){const P=C+0,z=C+1,I=C+2;y.push(P,z,z,I,I,P)}}else return;const M=new(oS(y)?hS:fS)(y,1);M.version=T;const _=c.get(g);_&&t.remove(_),c.set(g,M)}function v(g){const y=c.get(g);if(y){const x=g.index;x!==null&&y.version<x.version&&m(g)}else m(g);return c.get(g)}return{get:d,update:p,getWireframeAttribute:v}}function Qw(r,t,i){let s;function l(y){s=y}let c,f;function d(y){c=y.type,f=y.bytesPerElement}function p(y,x){r.drawElements(s,x,c,y*f),i.update(x,s,1)}function m(y,x,E){E!==0&&(r.drawElementsInstanced(s,x,c,y*f,E),i.update(x,s,E))}function v(y,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,y,0,E);let M=0;for(let _=0;_<E;_++)M+=x[_];i.update(M,s,1)}function g(y,x,E,T){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<y.length;_++)m(y[_]/f,x[_],T[_]);else{M.multiDrawElementsInstancedWEBGL(s,x,0,c,y,0,T,0,E);let _=0;for(let w=0;w<E;w++)_+=x[w]*T[w];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function Kw(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Jw(r,t,i){const s=new WeakMap,l=new Qe;function c(f,d,p){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let y=s.get(d);if(y===void 0||y.count!==g){let A=function(){O.dispose(),s.delete(d),d.removeEventListener("dispose",A)};var x=A;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],C=d.morphAttributes.color||[];let b=0;E===!0&&(b=1),T===!0&&(b=2),M===!0&&(b=3);let P=d.attributes.position.count*b,z=1;P>t.maxTextureSize&&(z=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const I=new Float32Array(P*z*4*g),O=new lS(I,P,z,g);O.type=oa,O.needsUpdate=!0;const N=b*4;for(let V=0;V<g;V++){const Y=_[V],J=w[V],pt=C[V],$=P*z*4*V;for(let q=0;q<Y.count;q++){const U=q*N;E===!0&&(l.fromBufferAttribute(Y,q),I[$+U+0]=l.x,I[$+U+1]=l.y,I[$+U+2]=l.z,I[$+U+3]=0),T===!0&&(l.fromBufferAttribute(J,q),I[$+U+4]=l.x,I[$+U+5]=l.y,I[$+U+6]=l.z,I[$+U+7]=0),M===!0&&(l.fromBufferAttribute(pt,q),I[$+U+8]=l.x,I[$+U+9]=l.y,I[$+U+10]=l.z,I[$+U+11]=pt.itemSize===4?l.w:1)}}y={count:g,texture:O,size:new Ft(P,z)},s.set(d,y),d.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<m.length;M++)E+=m[M];const T=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",T),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function $w(r,t,i,s){let l=new WeakMap;function c(p){const m=s.render.frame,v=p.geometry,g=t.get(p,v);if(l.get(g)!==m&&(t.update(g),l.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return g}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const US=new Yn,vx=new _S(1,1),LS=new lS,OS=new qT,PS=new mS,_x=[],yx=[],xx=new Float32Array(16),Sx=new Float32Array(9),Mx=new Float32Array(4);function Co(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=_x[l];if(c===void 0&&(c=new Float32Array(l),_x[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function An(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function wn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function _f(r,t){let i=yx[t];i===void 0&&(i=new Int32Array(t),yx[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function tC(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function eC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(An(i,t))return;r.uniform2fv(this.addr,t),wn(i,t)}}function nC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(An(i,t))return;r.uniform3fv(this.addr,t),wn(i,t)}}function iC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(An(i,t))return;r.uniform4fv(this.addr,t),wn(i,t)}}function aC(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(An(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),wn(i,t)}else{if(An(i,s))return;Mx.set(s),r.uniformMatrix2fv(this.addr,!1,Mx),wn(i,s)}}function sC(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(An(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),wn(i,t)}else{if(An(i,s))return;Sx.set(s),r.uniformMatrix3fv(this.addr,!1,Sx),wn(i,s)}}function rC(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(An(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),wn(i,t)}else{if(An(i,s))return;xx.set(s),r.uniformMatrix4fv(this.addr,!1,xx),wn(i,s)}}function oC(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function lC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(An(i,t))return;r.uniform2iv(this.addr,t),wn(i,t)}}function cC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(An(i,t))return;r.uniform3iv(this.addr,t),wn(i,t)}}function uC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(An(i,t))return;r.uniform4iv(this.addr,t),wn(i,t)}}function fC(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function hC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(An(i,t))return;r.uniform2uiv(this.addr,t),wn(i,t)}}function dC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(An(i,t))return;r.uniform3uiv(this.addr,t),wn(i,t)}}function pC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(An(i,t))return;r.uniform4uiv(this.addr,t),wn(i,t)}}function mC(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(vx.compareFunction=rS,c=vx):c=US,i.setTexture2D(t||c,l)}function gC(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||OS,l)}function vC(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||PS,l)}function _C(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||LS,l)}function yC(r){switch(r){case 5126:return tC;case 35664:return eC;case 35665:return nC;case 35666:return iC;case 35674:return aC;case 35675:return sC;case 35676:return rC;case 5124:case 35670:return oC;case 35667:case 35671:return lC;case 35668:case 35672:return cC;case 35669:case 35673:return uC;case 5125:return fC;case 36294:return hC;case 36295:return dC;case 36296:return pC;case 35678:case 36198:case 36298:case 36306:case 35682:return mC;case 35679:case 36299:case 36307:return gC;case 35680:case 36300:case 36308:case 36293:return vC;case 36289:case 36303:case 36311:case 36292:return _C}}function xC(r,t){r.uniform1fv(this.addr,t)}function SC(r,t){const i=Co(t,this.size,2);r.uniform2fv(this.addr,i)}function MC(r,t){const i=Co(t,this.size,3);r.uniform3fv(this.addr,i)}function EC(r,t){const i=Co(t,this.size,4);r.uniform4fv(this.addr,i)}function TC(r,t){const i=Co(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function bC(r,t){const i=Co(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function AC(r,t){const i=Co(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function wC(r,t){r.uniform1iv(this.addr,t)}function CC(r,t){r.uniform2iv(this.addr,t)}function RC(r,t){r.uniform3iv(this.addr,t)}function DC(r,t){r.uniform4iv(this.addr,t)}function NC(r,t){r.uniform1uiv(this.addr,t)}function UC(r,t){r.uniform2uiv(this.addr,t)}function LC(r,t){r.uniform3uiv(this.addr,t)}function OC(r,t){r.uniform4uiv(this.addr,t)}function PC(r,t,i){const s=this.cache,l=t.length,c=_f(i,l);An(s,c)||(r.uniform1iv(this.addr,c),wn(s,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||US,c[f])}function zC(r,t,i){const s=this.cache,l=t.length,c=_f(i,l);An(s,c)||(r.uniform1iv(this.addr,c),wn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||OS,c[f])}function IC(r,t,i){const s=this.cache,l=t.length,c=_f(i,l);An(s,c)||(r.uniform1iv(this.addr,c),wn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||PS,c[f])}function BC(r,t,i){const s=this.cache,l=t.length,c=_f(i,l);An(s,c)||(r.uniform1iv(this.addr,c),wn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||LS,c[f])}function FC(r){switch(r){case 5126:return xC;case 35664:return SC;case 35665:return MC;case 35666:return EC;case 35674:return TC;case 35675:return bC;case 35676:return AC;case 5124:case 35670:return wC;case 35667:case 35671:return CC;case 35668:case 35672:return RC;case 35669:case 35673:return DC;case 5125:return NC;case 36294:return UC;case 36295:return LC;case 36296:return OC;case 35678:case 36198:case 36298:case 36306:case 35682:return PC;case 35679:case 36299:case 36307:return zC;case 35680:case 36300:case 36308:case 36293:return IC;case 36289:case 36303:case 36311:case 36292:return BC}}class HC{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=yC(i.type)}}class GC{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=FC(i.type)}}class VC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Pp=/(\w+)(\])?(\[|\.)?/g;function Ex(r,t){r.seq.push(t),r.map[t.id]=t}function kC(r,t,i){const s=r.name,l=s.length;for(Pp.lastIndex=0;;){const c=Pp.exec(s),f=Pp.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){Ex(i,m===void 0?new HC(d,r,t):new GC(d,r,t));break}else{let g=i.map[d];g===void 0&&(g=new VC(d),Ex(i,g)),i=g}}}class nf{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);kC(c,f,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function Tx(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const XC=37297;let qC=0;function YC(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const bx=new ye;function jC(r){Le._getMatrix(bx,Le.workingColorSpace,r);const t=`mat3( ${bx.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(r)){case of:return[t,"LinearTransferOETF"];case je:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Ax(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+YC(r.getShaderSource(t),d)}else return c}function WC(r,t){const i=jC(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function ZC(r,t){let i;switch(t){case qx:i="Linear";break;case Yx:i="Reinhard";break;case jx:i="Cineon";break;case Lm:i="ACESFilmic";break;case Zx:i="AgX";break;case Qx:i="Neutral";break;case Wx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const ju=new G;function QC(){Le.getLuminanceCoefficients(ju);const r=ju.x.toFixed(4),t=ju.y.toFixed(4),i=ju.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function KC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ll).join(`
`)}function JC(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function $C(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function Ll(r){return r!==""}function wx(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Cx(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const tR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cm(r){return r.replace(tR,nR)}const eR=new Map;function nR(r,t){let i=Me[t];if(i===void 0){const s=eR.get(t);if(s!==void 0)i=Me[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Cm(i)}const iR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rx(r){return r.replace(iR,aR)}function aR(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Dx(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function sR(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Vx?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===kx?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Ua&&(t="SHADOWMAP_TYPE_VSM"),t}function rR(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case xo:case So:t="ENVMAP_TYPE_CUBE";break;case gf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function oR(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case So:t="ENVMAP_MODE_REFRACTION";break}return t}function lR(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Xx:t="ENVMAP_BLENDING_MULTIPLY";break;case cT:t="ENVMAP_BLENDING_MIX";break;case uT:t="ENVMAP_BLENDING_ADD";break}return t}function cR(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function uR(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=sR(i),m=rR(i),v=oR(i),g=lR(i),y=cR(i),x=KC(i),E=JC(c),T=l.createProgram();let M,_,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ll).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ll).join(`
`),_.length>0&&(_+=`
`)):(M=[Dx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ll).join(`
`),_=[Dx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==za?"#define TONE_MAPPING":"",i.toneMapping!==za?Me.tonemapping_pars_fragment:"",i.toneMapping!==za?ZC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,WC("linearToOutputTexel",i.outputColorSpace),QC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ll).join(`
`)),f=Cm(f),f=wx(f,i),f=Cx(f,i),d=Cm(d),d=wx(d,i),d=Cx(d,i),f=Rx(f),d=Rx(d),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===Ay?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Ay?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const C=w+M+f,b=w+_+d,P=Tx(l,l.VERTEX_SHADER,C),z=Tx(l,l.FRAGMENT_SHADER,b);l.attachShader(T,P),l.attachShader(T,z),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function I(V){if(r.debug.checkShaderErrors){const Y=l.getProgramInfoLog(T)||"",J=l.getShaderInfoLog(P)||"",pt=l.getShaderInfoLog(z)||"",$=Y.trim(),q=J.trim(),U=pt.trim();let B=!0,it=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(B=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,P,z);else{const dt=Ax(l,P,"vertex"),Nt=Ax(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+$+`
`+dt+`
`+Nt)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(q===""||U==="")&&(it=!1);it&&(V.diagnostics={runnable:B,programLog:$,vertexShader:{log:q,prefix:M},fragmentShader:{log:U,prefix:_}})}l.deleteShader(P),l.deleteShader(z),O=new nf(l,T),N=$C(l,T)}let O;this.getUniforms=function(){return O===void 0&&I(this),O};let N;this.getAttributes=function(){return N===void 0&&I(this),N};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(T,XC)),A},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=qC++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=P,this.fragmentShader=z,this}let fR=0;class hR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new dR(t),i.set(t,s)),s}}class dR{constructor(t){this.id=fR++,this.code=t,this.usedTimes=0}}function pR(r,t,i,s,l,c,f){const d=new cS,p=new hR,m=new Set,v=[],g=l.logarithmicDepthBuffer,y=l.vertexTextures;let x=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(N){return m.add(N),N===0?"uv":`uv${N}`}function M(N,A,V,Y,J){const pt=Y.fog,$=J.geometry,q=N.isMeshStandardMaterial?Y.environment:null,U=(N.isMeshStandardMaterial?i:t).get(N.envMap||q),B=U&&U.mapping===gf?U.image.height:null,it=E[N.type];N.precision!==null&&(x=l.getMaxPrecision(N.precision),x!==N.precision&&console.warn("THREE.WebGLProgram.getParameters:",N.precision,"not supported, using",x,"instead."));const dt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,Nt=dt!==void 0?dt.length:0;let Rt=0;$.morphAttributes.position!==void 0&&(Rt=1),$.morphAttributes.normal!==void 0&&(Rt=2),$.morphAttributes.color!==void 0&&(Rt=3);let Qt,H,et,K;if(it){const Re=sa[it];Qt=Re.vertexShader,H=Re.fragmentShader}else Qt=N.vertexShader,H=N.fragmentShader,p.update(N),et=p.getVertexShaderID(N),K=p.getFragmentShaderID(N);const j=r.getRenderTarget(),yt=r.state.buffers.depth.getReversed(),bt=J.isInstancedMesh===!0,Mt=J.isBatchedMesh===!0,wt=!!N.map,Ot=!!N.matcap,k=!!U,Et=!!N.aoMap,St=!!N.lightMap,ht=!!N.bumpMap,mt=!!N.normalMap,Ct=!!N.displacementMap,Dt=!!N.emissiveMap,It=!!N.metalnessMap,le=!!N.roughnessMap,se=N.anisotropy>0,F=N.clearcoat>0,R=N.dispersion>0,ot=N.iridescence>0,gt=N.sheen>0,Lt=N.transmission>0,xt=se&&!!N.anisotropyMap,Wt=F&&!!N.clearcoatMap,Gt=F&&!!N.clearcoatNormalMap,Jt=F&&!!N.clearcoatRoughnessMap,te=ot&&!!N.iridescenceMap,Pt=ot&&!!N.iridescenceThicknessMap,qt=gt&&!!N.sheenColorMap,he=gt&&!!N.sheenRoughnessMap,ie=!!N.specularMap,ut=!!N.specularColorMap,re=!!N.specularIntensityMap,W=Lt&&!!N.transmissionMap,Bt=Lt&&!!N.thicknessMap,kt=!!N.gradientMap,$t=!!N.alphaMap,zt=N.alphaTest>0,Ut=!!N.alphaHash,ae=!!N.extensions;let _e=za;N.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(_e=r.toneMapping);const We={shaderID:it,shaderType:N.type,shaderName:N.name,vertexShader:Qt,fragmentShader:H,defines:N.defines,customVertexShaderID:et,customFragmentShaderID:K,isRawShaderMaterial:N.isRawShaderMaterial===!0,glslVersion:N.glslVersion,precision:x,batching:Mt,batchingColor:Mt&&J._colorsTexture!==null,instancing:bt,instancingColor:bt&&J.instanceColor!==null,instancingMorph:bt&&J.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:j===null?r.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Mo,alphaToCoverage:!!N.alphaToCoverage,map:wt,matcap:Ot,envMap:k,envMapMode:k&&U.mapping,envMapCubeUVHeight:B,aoMap:Et,lightMap:St,bumpMap:ht,normalMap:mt,displacementMap:y&&Ct,emissiveMap:Dt,normalMapObjectSpace:mt&&N.normalMapType===pT,normalMapTangentSpace:mt&&N.normalMapType===sS,metalnessMap:It,roughnessMap:le,anisotropy:se,anisotropyMap:xt,clearcoat:F,clearcoatMap:Wt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:Jt,dispersion:R,iridescence:ot,iridescenceMap:te,iridescenceThicknessMap:Pt,sheen:gt,sheenColorMap:qt,sheenRoughnessMap:he,specularMap:ie,specularColorMap:ut,specularIntensityMap:re,transmission:Lt,transmissionMap:W,thicknessMap:Bt,gradientMap:kt,opaque:N.transparent===!1&&N.blending===vo&&N.alphaToCoverage===!1,alphaMap:$t,alphaTest:zt,alphaHash:Ut,combine:N.combine,mapUv:wt&&T(N.map.channel),aoMapUv:Et&&T(N.aoMap.channel),lightMapUv:St&&T(N.lightMap.channel),bumpMapUv:ht&&T(N.bumpMap.channel),normalMapUv:mt&&T(N.normalMap.channel),displacementMapUv:Ct&&T(N.displacementMap.channel),emissiveMapUv:Dt&&T(N.emissiveMap.channel),metalnessMapUv:It&&T(N.metalnessMap.channel),roughnessMapUv:le&&T(N.roughnessMap.channel),anisotropyMapUv:xt&&T(N.anisotropyMap.channel),clearcoatMapUv:Wt&&T(N.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&T(N.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Jt&&T(N.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&T(N.iridescenceMap.channel),iridescenceThicknessMapUv:Pt&&T(N.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&T(N.sheenColorMap.channel),sheenRoughnessMapUv:he&&T(N.sheenRoughnessMap.channel),specularMapUv:ie&&T(N.specularMap.channel),specularColorMapUv:ut&&T(N.specularColorMap.channel),specularIntensityMapUv:re&&T(N.specularIntensityMap.channel),transmissionMapUv:W&&T(N.transmissionMap.channel),thicknessMapUv:Bt&&T(N.thicknessMap.channel),alphaMapUv:$t&&T(N.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(mt||se),vertexColors:N.vertexColors,vertexAlphas:N.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!$.attributes.uv&&(wt||$t),fog:!!pt,useFog:N.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:N.flatShading===!0&&N.wireframe===!1,sizeAttenuation:N.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:yt,skinning:J.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:Rt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:N.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:_e,decodeVideoTexture:wt&&N.map.isVideoTexture===!0&&Le.getTransfer(N.map.colorSpace)===je,decodeVideoTextureEmissive:Dt&&N.emissiveMap.isVideoTexture===!0&&Le.getTransfer(N.emissiveMap.colorSpace)===je,premultipliedAlpha:N.premultipliedAlpha,doubleSided:N.side===_i,flipSided:N.side===qn,useDepthPacking:N.depthPacking>=0,depthPacking:N.depthPacking||0,index0AttributeName:N.index0AttributeName,extensionClipCullDistance:ae&&N.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ae&&N.extensions.multiDraw===!0||Mt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:N.customProgramCacheKey()};return We.vertexUv1s=m.has(1),We.vertexUv2s=m.has(2),We.vertexUv3s=m.has(3),m.clear(),We}function _(N){const A=[];if(N.shaderID?A.push(N.shaderID):(A.push(N.customVertexShaderID),A.push(N.customFragmentShaderID)),N.defines!==void 0)for(const V in N.defines)A.push(V),A.push(N.defines[V]);return N.isRawShaderMaterial===!1&&(w(A,N),C(A,N),A.push(r.outputColorSpace)),A.push(N.customProgramCacheKey),A.join()}function w(N,A){N.push(A.precision),N.push(A.outputColorSpace),N.push(A.envMapMode),N.push(A.envMapCubeUVHeight),N.push(A.mapUv),N.push(A.alphaMapUv),N.push(A.lightMapUv),N.push(A.aoMapUv),N.push(A.bumpMapUv),N.push(A.normalMapUv),N.push(A.displacementMapUv),N.push(A.emissiveMapUv),N.push(A.metalnessMapUv),N.push(A.roughnessMapUv),N.push(A.anisotropyMapUv),N.push(A.clearcoatMapUv),N.push(A.clearcoatNormalMapUv),N.push(A.clearcoatRoughnessMapUv),N.push(A.iridescenceMapUv),N.push(A.iridescenceThicknessMapUv),N.push(A.sheenColorMapUv),N.push(A.sheenRoughnessMapUv),N.push(A.specularMapUv),N.push(A.specularColorMapUv),N.push(A.specularIntensityMapUv),N.push(A.transmissionMapUv),N.push(A.thicknessMapUv),N.push(A.combine),N.push(A.fogExp2),N.push(A.sizeAttenuation),N.push(A.morphTargetsCount),N.push(A.morphAttributeCount),N.push(A.numDirLights),N.push(A.numPointLights),N.push(A.numSpotLights),N.push(A.numSpotLightMaps),N.push(A.numHemiLights),N.push(A.numRectAreaLights),N.push(A.numDirLightShadows),N.push(A.numPointLightShadows),N.push(A.numSpotLightShadows),N.push(A.numSpotLightShadowsWithMaps),N.push(A.numLightProbes),N.push(A.shadowMapType),N.push(A.toneMapping),N.push(A.numClippingPlanes),N.push(A.numClipIntersection),N.push(A.depthPacking)}function C(N,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),A.gradientMap&&d.enable(22),N.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reversedDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),N.push(d.mask)}function b(N){const A=E[N.type];let V;if(A){const Y=sa[A];V=Xl.clone(Y.uniforms)}else V=N.uniforms;return V}function P(N,A){let V;for(let Y=0,J=v.length;Y<J;Y++){const pt=v[Y];if(pt.cacheKey===A){V=pt,++V.usedTimes;break}}return V===void 0&&(V=new uR(r,A,N,c),v.push(V)),V}function z(N){if(--N.usedTimes===0){const A=v.indexOf(N);v[A]=v[v.length-1],v.pop(),N.destroy()}}function I(N){p.remove(N)}function O(){p.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:b,acquireProgram:P,releaseProgram:z,releaseShaderCache:I,programs:v,dispose:O}}function mR(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,p){r.get(f)[d]=p}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function gR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Nx(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Ux(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g,y,x,E,T,M){let _=r[t];return _===void 0?(_={id:g.id,object:g,geometry:y,material:x,groupOrder:E,renderOrder:g.renderOrder,z:T,group:M},r[t]=_):(_.id=g.id,_.object=g,_.geometry=y,_.material=x,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=T,_.group=M),t++,_}function d(g,y,x,E,T,M){const _=f(g,y,x,E,T,M);x.transmission>0?s.push(_):x.transparent===!0?l.push(_):i.push(_)}function p(g,y,x,E,T,M){const _=f(g,y,x,E,T,M);x.transmission>0?s.unshift(_):x.transparent===!0?l.unshift(_):i.unshift(_)}function m(g,y){i.length>1&&i.sort(g||gR),s.length>1&&s.sort(y||Nx),l.length>1&&l.sort(y||Nx)}function v(){for(let g=t,y=r.length;g<y;g++){const x=r[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:p,finish:v,sort:m}}function vR(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Ux,r.set(s,[f])):l>=c.length?(f=new Ux,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function _R(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new G,color:new oe};break;case"SpotLight":i={position:new G,direction:new G,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new G,color:new oe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new G,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":i={color:new oe,position:new G,halfWidth:new G,halfHeight:new G};break}return r[t.id]=i,i}}}function yR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let xR=0;function SR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function MR(r){const t=new _R,i=yR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new G);const l=new G,c=new He,f=new He;function d(m){let v=0,g=0,y=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let x=0,E=0,T=0,M=0,_=0,w=0,C=0,b=0,P=0,z=0,I=0;m.sort(SR);for(let N=0,A=m.length;N<A;N++){const V=m[N],Y=V.color,J=V.intensity,pt=V.distance,$=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=Y.r*J,g+=Y.g*J,y+=Y.b*J;else if(V.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(V.sh.coefficients[q],J);I++}else if(V.isDirectionalLight){const q=t.get(V);if(q.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const U=V.shadow,B=i.get(V);B.shadowIntensity=U.intensity,B.shadowBias=U.bias,B.shadowNormalBias=U.normalBias,B.shadowRadius=U.radius,B.shadowMapSize=U.mapSize,s.directionalShadow[x]=B,s.directionalShadowMap[x]=$,s.directionalShadowMatrix[x]=V.shadow.matrix,w++}s.directional[x]=q,x++}else if(V.isSpotLight){const q=t.get(V);q.position.setFromMatrixPosition(V.matrixWorld),q.color.copy(Y).multiplyScalar(J),q.distance=pt,q.coneCos=Math.cos(V.angle),q.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),q.decay=V.decay,s.spot[T]=q;const U=V.shadow;if(V.map&&(s.spotLightMap[P]=V.map,P++,U.updateMatrices(V),V.castShadow&&z++),s.spotLightMatrix[T]=U.matrix,V.castShadow){const B=i.get(V);B.shadowIntensity=U.intensity,B.shadowBias=U.bias,B.shadowNormalBias=U.normalBias,B.shadowRadius=U.radius,B.shadowMapSize=U.mapSize,s.spotShadow[T]=B,s.spotShadowMap[T]=$,b++}T++}else if(V.isRectAreaLight){const q=t.get(V);q.color.copy(Y).multiplyScalar(J),q.halfWidth.set(V.width*.5,0,0),q.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=q,M++}else if(V.isPointLight){const q=t.get(V);if(q.color.copy(V.color).multiplyScalar(V.intensity),q.distance=V.distance,q.decay=V.decay,V.castShadow){const U=V.shadow,B=i.get(V);B.shadowIntensity=U.intensity,B.shadowBias=U.bias,B.shadowNormalBias=U.normalBias,B.shadowRadius=U.radius,B.shadowMapSize=U.mapSize,B.shadowCameraNear=U.camera.near,B.shadowCameraFar=U.camera.far,s.pointShadow[E]=B,s.pointShadowMap[E]=$,s.pointShadowMatrix[E]=V.shadow.matrix,C++}s.point[E]=q,E++}else if(V.isHemisphereLight){const q=t.get(V);q.skyColor.copy(V.color).multiplyScalar(J),q.groundColor.copy(V.groundColor).multiplyScalar(J),s.hemi[_]=q,_++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=jt.LTC_FLOAT_1,s.rectAreaLTC2=jt.LTC_FLOAT_2):(s.rectAreaLTC1=jt.LTC_HALF_1,s.rectAreaLTC2=jt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=y;const O=s.hash;(O.directionalLength!==x||O.pointLength!==E||O.spotLength!==T||O.rectAreaLength!==M||O.hemiLength!==_||O.numDirectionalShadows!==w||O.numPointShadows!==C||O.numSpotShadows!==b||O.numSpotMaps!==P||O.numLightProbes!==I)&&(s.directional.length=x,s.spot.length=T,s.rectArea.length=M,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=C,s.pointShadowMap.length=C,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=C,s.spotLightMatrix.length=b+P-z,s.spotLightMap.length=P,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=I,O.directionalLength=x,O.pointLength=E,O.spotLength=T,O.rectAreaLength=M,O.hemiLength=_,O.numDirectionalShadows=w,O.numPointShadows=C,O.numSpotShadows=b,O.numSpotMaps=P,O.numLightProbes=I,s.version=xR++)}function p(m,v){let g=0,y=0,x=0,E=0,T=0;const M=v.matrixWorldInverse;for(let _=0,w=m.length;_<w;_++){const C=m[_];if(C.isDirectionalLight){const b=s.directional[g];b.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(l),b.direction.transformDirection(M),g++}else if(C.isSpotLight){const b=s.spot[x];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(M),b.direction.setFromMatrixPosition(C.matrixWorld),l.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(l),b.direction.transformDirection(M),x++}else if(C.isRectAreaLight){const b=s.rectArea[E];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(M),f.identity(),c.copy(C.matrixWorld),c.premultiply(M),f.extractRotation(c),b.halfWidth.set(C.width*.5,0,0),b.halfHeight.set(0,C.height*.5,0),b.halfWidth.applyMatrix4(f),b.halfHeight.applyMatrix4(f),E++}else if(C.isPointLight){const b=s.point[y];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(M),y++}else if(C.isHemisphereLight){const b=s.hemi[T];b.direction.setFromMatrixPosition(C.matrixWorld),b.direction.transformDirection(M),T++}}}return{setup:d,setupView:p,state:s}}function Lx(r){const t=new MR(r),i=[],s=[];function l(v){m.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function f(v){s.push(v)}function d(){t.setup(i)}function p(v){t.setupView(i,v)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function ER(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new Lx(r),t.set(l,[d])):c>=f.length?(d=new Lx(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const TR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,bR=`uniform sampler2D shadow_pass;
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
}`;function AR(r,t,i){let s=new Xm;const l=new Ft,c=new Ft,f=new Qe,d=new Qb({depthPacking:dT}),p=new Kb,m={},v=i.maxTextureSize,g={[xs]:qn,[qn]:xs,[_i]:_i},y=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:TR,fragmentShader:bR}),x=y.clone();x.defines.HORIZONTAL_PASS=1;const E=new pn;E.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new sn(E,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vx;let _=this.type;this.render=function(z,I,O){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;const N=r.getRenderTarget(),A=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(Pa),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const J=_!==Ua&&this.type===Ua,pt=_===Ua&&this.type!==Ua;for(let $=0,q=z.length;$<q;$++){const U=z[$],B=U.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const it=B.getFrameExtents();if(l.multiply(it),c.copy(B.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/it.x),l.x=c.x*it.x,B.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/it.y),l.y=c.y*it.y,B.mapSize.y=c.y)),B.map===null||J===!0||pt===!0){const Nt=this.type!==Ua?{minFilter:yi,magFilter:yi}:{};B.map!==null&&B.map.dispose(),B.map=new Li(l.x,l.y,Nt),B.map.texture.name=U.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const dt=B.getViewportCount();for(let Nt=0;Nt<dt;Nt++){const Rt=B.getViewport(Nt);f.set(c.x*Rt.x,c.y*Rt.y,c.x*Rt.z,c.y*Rt.w),Y.viewport(f),B.updateMatrices(U,Nt),s=B.getFrustum(),b(I,O,B.camera,U,this.type)}B.isPointLightShadow!==!0&&this.type===Ua&&w(B,O),B.needsUpdate=!1}_=this.type,M.needsUpdate=!1,r.setRenderTarget(N,A,V)};function w(z,I){const O=t.update(T);y.defines.VSM_SAMPLES!==z.blurSamples&&(y.defines.VSM_SAMPLES=z.blurSamples,x.defines.VSM_SAMPLES=z.blurSamples,y.needsUpdate=!0,x.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Li(l.x,l.y)),y.uniforms.shadow_pass.value=z.map.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(I,null,O,y,T,null),x.uniforms.shadow_pass.value=z.mapPass.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(I,null,O,x,T,null)}function C(z,I,O,N){let A=null;const V=O.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(V!==void 0)A=V;else if(A=O.isPointLight===!0?p:d,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const Y=A.uuid,J=I.uuid;let pt=m[Y];pt===void 0&&(pt={},m[Y]=pt);let $=pt[J];$===void 0&&($=A.clone(),pt[J]=$,I.addEventListener("dispose",P)),A=$}if(A.visible=I.visible,A.wireframe=I.wireframe,N===Ua?A.side=I.shadowSide!==null?I.shadowSide:I.side:A.side=I.shadowSide!==null?I.shadowSide:g[I.side],A.alphaMap=I.alphaMap,A.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,A.map=I.map,A.clipShadows=I.clipShadows,A.clippingPlanes=I.clippingPlanes,A.clipIntersection=I.clipIntersection,A.displacementMap=I.displacementMap,A.displacementScale=I.displacementScale,A.displacementBias=I.displacementBias,A.wireframeLinewidth=I.wireframeLinewidth,A.linewidth=I.linewidth,O.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const Y=r.properties.get(A);Y.light=O}return A}function b(z,I,O,N,A){if(z.visible===!1)return;if(z.layers.test(I.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&A===Ua)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,z.matrixWorld);const J=t.update(z),pt=z.material;if(Array.isArray(pt)){const $=J.groups;for(let q=0,U=$.length;q<U;q++){const B=$[q],it=pt[B.materialIndex];if(it&&it.visible){const dt=C(z,it,N,A);z.onBeforeShadow(r,z,I,O,J,dt,B),r.renderBufferDirect(O,null,J,dt,z,B),z.onAfterShadow(r,z,I,O,J,dt,B)}}}else if(pt.visible){const $=C(z,pt,N,A);z.onBeforeShadow(r,z,I,O,J,$,null),r.renderBufferDirect(O,null,J,$,z,null),z.onAfterShadow(r,z,I,O,J,$,null)}}const Y=z.children;for(let J=0,pt=Y.length;J<pt;J++)b(Y[J],I,O,N,A)}function P(z){z.target.removeEventListener("dispose",P);for(const O in m){const N=m[O],A=z.target.uuid;A in N&&(N[A].dispose(),delete N[A])}}}const wR={[Fp]:Hp,[Gp]:Xp,[Vp]:qp,[yo]:kp,[Hp]:Fp,[Xp]:Gp,[qp]:Vp,[kp]:yo};function CR(r,t){function i(){let W=!1;const Bt=new Qe;let kt=null;const $t=new Qe(0,0,0,0);return{setMask:function(zt){kt!==zt&&!W&&(r.colorMask(zt,zt,zt,zt),kt=zt)},setLocked:function(zt){W=zt},setClear:function(zt,Ut,ae,_e,We){We===!0&&(zt*=_e,Ut*=_e,ae*=_e),Bt.set(zt,Ut,ae,_e),$t.equals(Bt)===!1&&(r.clearColor(zt,Ut,ae,_e),$t.copy(Bt))},reset:function(){W=!1,kt=null,$t.set(-1,0,0,0)}}}function s(){let W=!1,Bt=!1,kt=null,$t=null,zt=null;return{setReversed:function(Ut){if(Bt!==Ut){const ae=t.get("EXT_clip_control");Ut?ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.ZERO_TO_ONE_EXT):ae.clipControlEXT(ae.LOWER_LEFT_EXT,ae.NEGATIVE_ONE_TO_ONE_EXT),Bt=Ut;const _e=zt;zt=null,this.setClear(_e)}},getReversed:function(){return Bt},setTest:function(Ut){Ut?j(r.DEPTH_TEST):yt(r.DEPTH_TEST)},setMask:function(Ut){kt!==Ut&&!W&&(r.depthMask(Ut),kt=Ut)},setFunc:function(Ut){if(Bt&&(Ut=wR[Ut]),$t!==Ut){switch(Ut){case Fp:r.depthFunc(r.NEVER);break;case Hp:r.depthFunc(r.ALWAYS);break;case Gp:r.depthFunc(r.LESS);break;case yo:r.depthFunc(r.LEQUAL);break;case Vp:r.depthFunc(r.EQUAL);break;case kp:r.depthFunc(r.GEQUAL);break;case Xp:r.depthFunc(r.GREATER);break;case qp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}$t=Ut}},setLocked:function(Ut){W=Ut},setClear:function(Ut){zt!==Ut&&(Bt&&(Ut=1-Ut),r.clearDepth(Ut),zt=Ut)},reset:function(){W=!1,kt=null,$t=null,zt=null,Bt=!1}}}function l(){let W=!1,Bt=null,kt=null,$t=null,zt=null,Ut=null,ae=null,_e=null,We=null;return{setTest:function(Re){W||(Re?j(r.STENCIL_TEST):yt(r.STENCIL_TEST))},setMask:function(Re){Bt!==Re&&!W&&(r.stencilMask(Re),Bt=Re)},setFunc:function(Re,rn,En){(kt!==Re||$t!==rn||zt!==En)&&(r.stencilFunc(Re,rn,En),kt=Re,$t=rn,zt=En)},setOp:function(Re,rn,En){(Ut!==Re||ae!==rn||_e!==En)&&(r.stencilOp(Re,rn,En),Ut=Re,ae=rn,_e=En)},setLocked:function(Re){W=Re},setClear:function(Re){We!==Re&&(r.clearStencil(Re),We=Re)},reset:function(){W=!1,Bt=null,kt=null,$t=null,zt=null,Ut=null,ae=null,_e=null,We=null}}}const c=new i,f=new s,d=new l,p=new WeakMap,m=new WeakMap;let v={},g={},y=new WeakMap,x=[],E=null,T=!1,M=null,_=null,w=null,C=null,b=null,P=null,z=null,I=new oe(0,0,0),O=0,N=!1,A=null,V=null,Y=null,J=null,pt=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,U=0;const B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(B)[1]),q=U>=1):B.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),q=U>=2);let it=null,dt={};const Nt=r.getParameter(r.SCISSOR_BOX),Rt=r.getParameter(r.VIEWPORT),Qt=new Qe().fromArray(Nt),H=new Qe().fromArray(Rt);function et(W,Bt,kt,$t){const zt=new Uint8Array(4),Ut=r.createTexture();r.bindTexture(W,Ut),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ae=0;ae<kt;ae++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Bt,0,r.RGBA,1,1,$t,0,r.RGBA,r.UNSIGNED_BYTE,zt):r.texImage2D(Bt+ae,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,zt);return Ut}const K={};K[r.TEXTURE_2D]=et(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=et(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=et(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=et(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),j(r.DEPTH_TEST),f.setFunc(yo),ht(!1),mt(Sy),j(r.CULL_FACE),Et(Pa);function j(W){v[W]!==!0&&(r.enable(W),v[W]=!0)}function yt(W){v[W]!==!1&&(r.disable(W),v[W]=!1)}function bt(W,Bt){return g[W]!==Bt?(r.bindFramebuffer(W,Bt),g[W]=Bt,W===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Bt),W===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Bt),!0):!1}function Mt(W,Bt){let kt=x,$t=!1;if(W){kt=y.get(Bt),kt===void 0&&(kt=[],y.set(Bt,kt));const zt=W.textures;if(kt.length!==zt.length||kt[0]!==r.COLOR_ATTACHMENT0){for(let Ut=0,ae=zt.length;Ut<ae;Ut++)kt[Ut]=r.COLOR_ATTACHMENT0+Ut;kt.length=zt.length,$t=!0}}else kt[0]!==r.BACK&&(kt[0]=r.BACK,$t=!0);$t&&r.drawBuffers(kt)}function wt(W){return E!==W?(r.useProgram(W),E=W,!0):!1}const Ot={[$s]:r.FUNC_ADD,[YE]:r.FUNC_SUBTRACT,[jE]:r.FUNC_REVERSE_SUBTRACT};Ot[WE]=r.MIN,Ot[ZE]=r.MAX;const k={[QE]:r.ZERO,[KE]:r.ONE,[JE]:r.SRC_COLOR,[Ip]:r.SRC_ALPHA,[aT]:r.SRC_ALPHA_SATURATE,[nT]:r.DST_COLOR,[tT]:r.DST_ALPHA,[$E]:r.ONE_MINUS_SRC_COLOR,[Bp]:r.ONE_MINUS_SRC_ALPHA,[iT]:r.ONE_MINUS_DST_COLOR,[eT]:r.ONE_MINUS_DST_ALPHA,[sT]:r.CONSTANT_COLOR,[rT]:r.ONE_MINUS_CONSTANT_COLOR,[oT]:r.CONSTANT_ALPHA,[lT]:r.ONE_MINUS_CONSTANT_ALPHA};function Et(W,Bt,kt,$t,zt,Ut,ae,_e,We,Re){if(W===Pa){T===!0&&(yt(r.BLEND),T=!1);return}if(T===!1&&(j(r.BLEND),T=!0),W!==qE){if(W!==M||Re!==N){if((_!==$s||b!==$s)&&(r.blendEquation(r.FUNC_ADD),_=$s,b=$s),Re)switch(W){case vo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ir:r.blendFunc(r.ONE,r.ONE);break;case My:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ey:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case vo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ir:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case My:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ey:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}w=null,C=null,P=null,z=null,I.set(0,0,0),O=0,M=W,N=Re}return}zt=zt||Bt,Ut=Ut||kt,ae=ae||$t,(Bt!==_||zt!==b)&&(r.blendEquationSeparate(Ot[Bt],Ot[zt]),_=Bt,b=zt),(kt!==w||$t!==C||Ut!==P||ae!==z)&&(r.blendFuncSeparate(k[kt],k[$t],k[Ut],k[ae]),w=kt,C=$t,P=Ut,z=ae),(_e.equals(I)===!1||We!==O)&&(r.blendColor(_e.r,_e.g,_e.b,We),I.copy(_e),O=We),M=W,N=!1}function St(W,Bt){W.side===_i?yt(r.CULL_FACE):j(r.CULL_FACE);let kt=W.side===qn;Bt&&(kt=!kt),ht(kt),W.blending===vo&&W.transparent===!1?Et(Pa):Et(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),f.setFunc(W.depthFunc),f.setTest(W.depthTest),f.setMask(W.depthWrite),c.setMask(W.colorWrite);const $t=W.stencilWrite;d.setTest($t),$t&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Dt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?j(r.SAMPLE_ALPHA_TO_COVERAGE):yt(r.SAMPLE_ALPHA_TO_COVERAGE)}function ht(W){A!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),A=W)}function mt(W){W!==kE?(j(r.CULL_FACE),W!==V&&(W===Sy?r.cullFace(r.BACK):W===XE?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):yt(r.CULL_FACE),V=W}function Ct(W){W!==Y&&(q&&r.lineWidth(W),Y=W)}function Dt(W,Bt,kt){W?(j(r.POLYGON_OFFSET_FILL),(J!==Bt||pt!==kt)&&(r.polygonOffset(Bt,kt),J=Bt,pt=kt)):yt(r.POLYGON_OFFSET_FILL)}function It(W){W?j(r.SCISSOR_TEST):yt(r.SCISSOR_TEST)}function le(W){W===void 0&&(W=r.TEXTURE0+$-1),it!==W&&(r.activeTexture(W),it=W)}function se(W,Bt,kt){kt===void 0&&(it===null?kt=r.TEXTURE0+$-1:kt=it);let $t=dt[kt];$t===void 0&&($t={type:void 0,texture:void 0},dt[kt]=$t),($t.type!==W||$t.texture!==Bt)&&(it!==kt&&(r.activeTexture(kt),it=kt),r.bindTexture(W,Bt||K[W]),$t.type=W,$t.texture=Bt)}function F(){const W=dt[it];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function R(){try{r.compressedTexImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ot(){try{r.compressedTexImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function gt(){try{r.texSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Lt(){try{r.texSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function xt(){try{r.compressedTexSubImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Wt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Gt(){try{r.texStorage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Jt(){try{r.texStorage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function te(){try{r.texImage2D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Pt(){try{r.texImage3D(...arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qt(W){Qt.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),Qt.copy(W))}function he(W){H.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),H.copy(W))}function ie(W,Bt){let kt=m.get(Bt);kt===void 0&&(kt=new WeakMap,m.set(Bt,kt));let $t=kt.get(W);$t===void 0&&($t=r.getUniformBlockIndex(Bt,W.name),kt.set(W,$t))}function ut(W,Bt){const $t=m.get(Bt).get(W);p.get(Bt)!==$t&&(r.uniformBlockBinding(Bt,$t,W.__bindingPointIndex),p.set(Bt,$t))}function re(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},it=null,dt={},g={},y=new WeakMap,x=[],E=null,T=!1,M=null,_=null,w=null,C=null,b=null,P=null,z=null,I=new oe(0,0,0),O=0,N=!1,A=null,V=null,Y=null,J=null,pt=null,Qt.set(0,0,r.canvas.width,r.canvas.height),H.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:j,disable:yt,bindFramebuffer:bt,drawBuffers:Mt,useProgram:wt,setBlending:Et,setMaterial:St,setFlipSided:ht,setCullFace:mt,setLineWidth:Ct,setPolygonOffset:Dt,setScissorTest:It,activeTexture:le,bindTexture:se,unbindTexture:F,compressedTexImage2D:R,compressedTexImage3D:ot,texImage2D:te,texImage3D:Pt,updateUBOMapping:ie,uniformBlockBinding:ut,texStorage2D:Gt,texStorage3D:Jt,texSubImage2D:gt,texSubImage3D:Lt,compressedTexSubImage2D:xt,compressedTexSubImage3D:Wt,scissor:qt,viewport:he,reset:re}}function RR(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ft,v=new WeakMap;let g;const y=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,R){return x?new OffscreenCanvas(F,R):cf("canvas")}function T(F,R,ot){let gt=1;const Lt=se(F);if((Lt.width>ot||Lt.height>ot)&&(gt=ot/Math.max(Lt.width,Lt.height)),gt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const xt=Math.floor(gt*Lt.width),Wt=Math.floor(gt*Lt.height);g===void 0&&(g=E(xt,Wt));const Gt=R?E(xt,Wt):g;return Gt.width=xt,Gt.height=Wt,Gt.getContext("2d").drawImage(F,0,0,xt,Wt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Lt.width+"x"+Lt.height+") to ("+xt+"x"+Wt+")."),Gt}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Lt.width+"x"+Lt.height+")."),F;return F}function M(F){return F.generateMipmaps}function _(F){r.generateMipmap(F)}function w(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function C(F,R,ot,gt,Lt=!1){if(F!==null){if(r[F]!==void 0)return r[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let xt=R;if(R===r.RED&&(ot===r.FLOAT&&(xt=r.R32F),ot===r.HALF_FLOAT&&(xt=r.R16F),ot===r.UNSIGNED_BYTE&&(xt=r.R8)),R===r.RED_INTEGER&&(ot===r.UNSIGNED_BYTE&&(xt=r.R8UI),ot===r.UNSIGNED_SHORT&&(xt=r.R16UI),ot===r.UNSIGNED_INT&&(xt=r.R32UI),ot===r.BYTE&&(xt=r.R8I),ot===r.SHORT&&(xt=r.R16I),ot===r.INT&&(xt=r.R32I)),R===r.RG&&(ot===r.FLOAT&&(xt=r.RG32F),ot===r.HALF_FLOAT&&(xt=r.RG16F),ot===r.UNSIGNED_BYTE&&(xt=r.RG8)),R===r.RG_INTEGER&&(ot===r.UNSIGNED_BYTE&&(xt=r.RG8UI),ot===r.UNSIGNED_SHORT&&(xt=r.RG16UI),ot===r.UNSIGNED_INT&&(xt=r.RG32UI),ot===r.BYTE&&(xt=r.RG8I),ot===r.SHORT&&(xt=r.RG16I),ot===r.INT&&(xt=r.RG32I)),R===r.RGB_INTEGER&&(ot===r.UNSIGNED_BYTE&&(xt=r.RGB8UI),ot===r.UNSIGNED_SHORT&&(xt=r.RGB16UI),ot===r.UNSIGNED_INT&&(xt=r.RGB32UI),ot===r.BYTE&&(xt=r.RGB8I),ot===r.SHORT&&(xt=r.RGB16I),ot===r.INT&&(xt=r.RGB32I)),R===r.RGBA_INTEGER&&(ot===r.UNSIGNED_BYTE&&(xt=r.RGBA8UI),ot===r.UNSIGNED_SHORT&&(xt=r.RGBA16UI),ot===r.UNSIGNED_INT&&(xt=r.RGBA32UI),ot===r.BYTE&&(xt=r.RGBA8I),ot===r.SHORT&&(xt=r.RGBA16I),ot===r.INT&&(xt=r.RGBA32I)),R===r.RGB&&(ot===r.UNSIGNED_INT_5_9_9_9_REV&&(xt=r.RGB9_E5),ot===r.UNSIGNED_INT_10F_11F_11F_REV&&(xt=r.R11F_G11F_B10F)),R===r.RGBA){const Wt=Lt?of:Le.getTransfer(gt);ot===r.FLOAT&&(xt=r.RGBA32F),ot===r.HALF_FLOAT&&(xt=r.RGBA16F),ot===r.UNSIGNED_BYTE&&(xt=Wt===je?r.SRGB8_ALPHA8:r.RGBA8),ot===r.UNSIGNED_SHORT_4_4_4_4&&(xt=r.RGBA4),ot===r.UNSIGNED_SHORT_5_5_5_1&&(xt=r.RGB5_A1)}return(xt===r.R16F||xt===r.R32F||xt===r.RG16F||xt===r.RG32F||xt===r.RGBA16F||xt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),xt}function b(F,R){let ot;return F?R===null||R===ar||R===Fl?ot=r.DEPTH24_STENCIL8:R===oa?ot=r.DEPTH32F_STENCIL8:R===Bl&&(ot=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ar||R===Fl?ot=r.DEPTH_COMPONENT24:R===oa?ot=r.DEPTH_COMPONENT32F:R===Bl&&(ot=r.DEPTH_COMPONENT16),ot}function P(F,R){return M(F)===!0||F.isFramebufferTexture&&F.minFilter!==yi&&F.minFilter!==ra?Math.log2(Math.max(R.width,R.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?R.mipmaps.length:1}function z(F){const R=F.target;R.removeEventListener("dispose",z),O(R),R.isVideoTexture&&v.delete(R)}function I(F){const R=F.target;R.removeEventListener("dispose",I),A(R)}function O(F){const R=s.get(F);if(R.__webglInit===void 0)return;const ot=F.source,gt=y.get(ot);if(gt){const Lt=gt[R.__cacheKey];Lt.usedTimes--,Lt.usedTimes===0&&N(F),Object.keys(gt).length===0&&y.delete(ot)}s.remove(F)}function N(F){const R=s.get(F);r.deleteTexture(R.__webglTexture);const ot=F.source,gt=y.get(ot);delete gt[R.__cacheKey],f.memory.textures--}function A(F){const R=s.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),s.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(R.__webglFramebuffer[gt]))for(let Lt=0;Lt<R.__webglFramebuffer[gt].length;Lt++)r.deleteFramebuffer(R.__webglFramebuffer[gt][Lt]);else r.deleteFramebuffer(R.__webglFramebuffer[gt]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[gt])}else{if(Array.isArray(R.__webglFramebuffer))for(let gt=0;gt<R.__webglFramebuffer.length;gt++)r.deleteFramebuffer(R.__webglFramebuffer[gt]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let gt=0;gt<R.__webglColorRenderbuffer.length;gt++)R.__webglColorRenderbuffer[gt]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[gt]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const ot=F.textures;for(let gt=0,Lt=ot.length;gt<Lt;gt++){const xt=s.get(ot[gt]);xt.__webglTexture&&(r.deleteTexture(xt.__webglTexture),f.memory.textures--),s.remove(ot[gt])}s.remove(F)}let V=0;function Y(){V=0}function J(){const F=V;return F>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+l.maxTextures),V+=1,F}function pt(F){const R=[];return R.push(F.wrapS),R.push(F.wrapT),R.push(F.wrapR||0),R.push(F.magFilter),R.push(F.minFilter),R.push(F.anisotropy),R.push(F.internalFormat),R.push(F.format),R.push(F.type),R.push(F.generateMipmaps),R.push(F.premultiplyAlpha),R.push(F.flipY),R.push(F.unpackAlignment),R.push(F.colorSpace),R.join()}function $(F,R){const ot=s.get(F);if(F.isVideoTexture&&It(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&ot.__version!==F.version){const gt=F.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(ot,F,R);return}}else F.isExternalTexture&&(ot.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,ot.__webglTexture,r.TEXTURE0+R)}function q(F,R){const ot=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ot.__version!==F.version){K(ot,F,R);return}i.bindTexture(r.TEXTURE_2D_ARRAY,ot.__webglTexture,r.TEXTURE0+R)}function U(F,R){const ot=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ot.__version!==F.version){K(ot,F,R);return}i.bindTexture(r.TEXTURE_3D,ot.__webglTexture,r.TEXTURE0+R)}function B(F,R){const ot=s.get(F);if(F.version>0&&ot.__version!==F.version){j(ot,F,R);return}i.bindTexture(r.TEXTURE_CUBE_MAP,ot.__webglTexture,r.TEXTURE0+R)}const it={[jp]:r.REPEAT,[er]:r.CLAMP_TO_EDGE,[Wp]:r.MIRRORED_REPEAT},dt={[yi]:r.NEAREST,[fT]:r.NEAREST_MIPMAP_NEAREST,[yu]:r.NEAREST_MIPMAP_LINEAR,[ra]:r.LINEAR,[ep]:r.LINEAR_MIPMAP_NEAREST,[nr]:r.LINEAR_MIPMAP_LINEAR},Nt={[mT]:r.NEVER,[ST]:r.ALWAYS,[gT]:r.LESS,[rS]:r.LEQUAL,[vT]:r.EQUAL,[xT]:r.GEQUAL,[_T]:r.GREATER,[yT]:r.NOTEQUAL};function Rt(F,R){if(R.type===oa&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===ra||R.magFilter===ep||R.magFilter===yu||R.magFilter===nr||R.minFilter===ra||R.minFilter===ep||R.minFilter===yu||R.minFilter===nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,it[R.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,it[R.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,it[R.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,dt[R.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,dt[R.minFilter]),R.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,Nt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===yi||R.minFilter!==yu&&R.minFilter!==nr||R.type===oa&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||s.get(R).__currentAnisotropy){const ot=t.get("EXT_texture_filter_anisotropic");r.texParameterf(F,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,l.getMaxAnisotropy())),s.get(R).__currentAnisotropy=R.anisotropy}}}function Qt(F,R){let ot=!1;F.__webglInit===void 0&&(F.__webglInit=!0,R.addEventListener("dispose",z));const gt=R.source;let Lt=y.get(gt);Lt===void 0&&(Lt={},y.set(gt,Lt));const xt=pt(R);if(xt!==F.__cacheKey){Lt[xt]===void 0&&(Lt[xt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,ot=!0),Lt[xt].usedTimes++;const Wt=Lt[F.__cacheKey];Wt!==void 0&&(Lt[F.__cacheKey].usedTimes--,Wt.usedTimes===0&&N(R)),F.__cacheKey=xt,F.__webglTexture=Lt[xt].texture}return ot}function H(F,R,ot){return Math.floor(Math.floor(F/ot)/R)}function et(F,R,ot,gt){const xt=F.updateRanges;if(xt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,R.width,R.height,ot,gt,R.data);else{xt.sort((Pt,qt)=>Pt.start-qt.start);let Wt=0;for(let Pt=1;Pt<xt.length;Pt++){const qt=xt[Wt],he=xt[Pt],ie=qt.start+qt.count,ut=H(he.start,R.width,4),re=H(qt.start,R.width,4);he.start<=ie+1&&ut===re&&H(he.start+he.count-1,R.width,4)===ut?qt.count=Math.max(qt.count,he.start+he.count-qt.start):(++Wt,xt[Wt]=he)}xt.length=Wt+1;const Gt=r.getParameter(r.UNPACK_ROW_LENGTH),Jt=r.getParameter(r.UNPACK_SKIP_PIXELS),te=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,R.width);for(let Pt=0,qt=xt.length;Pt<qt;Pt++){const he=xt[Pt],ie=Math.floor(he.start/4),ut=Math.ceil(he.count/4),re=ie%R.width,W=Math.floor(ie/R.width),Bt=ut,kt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,re),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),i.texSubImage2D(r.TEXTURE_2D,0,re,W,Bt,kt,ot,gt,R.data)}F.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Gt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Jt),r.pixelStorei(r.UNPACK_SKIP_ROWS,te)}}function K(F,R,ot){let gt=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(gt=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(gt=r.TEXTURE_3D);const Lt=Qt(F,R),xt=R.source;i.bindTexture(gt,F.__webglTexture,r.TEXTURE0+ot);const Wt=s.get(xt);if(xt.version!==Wt.__version||Lt===!0){i.activeTexture(r.TEXTURE0+ot);const Gt=Le.getPrimaries(Le.workingColorSpace),Jt=R.colorSpace===ys?null:Le.getPrimaries(R.colorSpace),te=R.colorSpace===ys||Gt===Jt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let Pt=T(R.image,!1,l.maxTextureSize);Pt=le(R,Pt);const qt=c.convert(R.format,R.colorSpace),he=c.convert(R.type);let ie=C(R.internalFormat,qt,he,R.colorSpace,R.isVideoTexture);Rt(gt,R);let ut;const re=R.mipmaps,W=R.isVideoTexture!==!0,Bt=Wt.__version===void 0||Lt===!0,kt=xt.dataReady,$t=P(R,Pt);if(R.isDepthTexture)ie=b(R.format===Gl,R.type),Bt&&(W?i.texStorage2D(r.TEXTURE_2D,1,ie,Pt.width,Pt.height):i.texImage2D(r.TEXTURE_2D,0,ie,Pt.width,Pt.height,0,qt,he,null));else if(R.isDataTexture)if(re.length>0){W&&Bt&&i.texStorage2D(r.TEXTURE_2D,$t,ie,re[0].width,re[0].height);for(let zt=0,Ut=re.length;zt<Ut;zt++)ut=re[zt],W?kt&&i.texSubImage2D(r.TEXTURE_2D,zt,0,0,ut.width,ut.height,qt,he,ut.data):i.texImage2D(r.TEXTURE_2D,zt,ie,ut.width,ut.height,0,qt,he,ut.data);R.generateMipmaps=!1}else W?(Bt&&i.texStorage2D(r.TEXTURE_2D,$t,ie,Pt.width,Pt.height),kt&&et(R,Pt,qt,he)):i.texImage2D(r.TEXTURE_2D,0,ie,Pt.width,Pt.height,0,qt,he,Pt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){W&&Bt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,$t,ie,re[0].width,re[0].height,Pt.depth);for(let zt=0,Ut=re.length;zt<Ut;zt++)if(ut=re[zt],R.format!==Xi)if(qt!==null)if(W){if(kt)if(R.layerUpdates.size>0){const ae=ux(ut.width,ut.height,R.format,R.type);for(const _e of R.layerUpdates){const We=ut.data.subarray(_e*ae/ut.data.BYTES_PER_ELEMENT,(_e+1)*ae/ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,zt,0,0,_e,ut.width,ut.height,1,qt,We)}R.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,zt,0,0,0,ut.width,ut.height,Pt.depth,qt,ut.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,zt,ie,ut.width,ut.height,Pt.depth,0,ut.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?kt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,zt,0,0,0,ut.width,ut.height,Pt.depth,qt,he,ut.data):i.texImage3D(r.TEXTURE_2D_ARRAY,zt,ie,ut.width,ut.height,Pt.depth,0,qt,he,ut.data)}else{W&&Bt&&i.texStorage2D(r.TEXTURE_2D,$t,ie,re[0].width,re[0].height);for(let zt=0,Ut=re.length;zt<Ut;zt++)ut=re[zt],R.format!==Xi?qt!==null?W?kt&&i.compressedTexSubImage2D(r.TEXTURE_2D,zt,0,0,ut.width,ut.height,qt,ut.data):i.compressedTexImage2D(r.TEXTURE_2D,zt,ie,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?kt&&i.texSubImage2D(r.TEXTURE_2D,zt,0,0,ut.width,ut.height,qt,he,ut.data):i.texImage2D(r.TEXTURE_2D,zt,ie,ut.width,ut.height,0,qt,he,ut.data)}else if(R.isDataArrayTexture)if(W){if(Bt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,$t,ie,Pt.width,Pt.height,Pt.depth),kt)if(R.layerUpdates.size>0){const zt=ux(Pt.width,Pt.height,R.format,R.type);for(const Ut of R.layerUpdates){const ae=Pt.data.subarray(Ut*zt/Pt.data.BYTES_PER_ELEMENT,(Ut+1)*zt/Pt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ut,Pt.width,Pt.height,1,qt,he,ae)}R.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Pt.width,Pt.height,Pt.depth,qt,he,Pt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,ie,Pt.width,Pt.height,Pt.depth,0,qt,he,Pt.data);else if(R.isData3DTexture)W?(Bt&&i.texStorage3D(r.TEXTURE_3D,$t,ie,Pt.width,Pt.height,Pt.depth),kt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Pt.width,Pt.height,Pt.depth,qt,he,Pt.data)):i.texImage3D(r.TEXTURE_3D,0,ie,Pt.width,Pt.height,Pt.depth,0,qt,he,Pt.data);else if(R.isFramebufferTexture){if(Bt)if(W)i.texStorage2D(r.TEXTURE_2D,$t,ie,Pt.width,Pt.height);else{let zt=Pt.width,Ut=Pt.height;for(let ae=0;ae<$t;ae++)i.texImage2D(r.TEXTURE_2D,ae,ie,zt,Ut,0,qt,he,null),zt>>=1,Ut>>=1}}else if(re.length>0){if(W&&Bt){const zt=se(re[0]);i.texStorage2D(r.TEXTURE_2D,$t,ie,zt.width,zt.height)}for(let zt=0,Ut=re.length;zt<Ut;zt++)ut=re[zt],W?kt&&i.texSubImage2D(r.TEXTURE_2D,zt,0,0,qt,he,ut):i.texImage2D(r.TEXTURE_2D,zt,ie,qt,he,ut);R.generateMipmaps=!1}else if(W){if(Bt){const zt=se(Pt);i.texStorage2D(r.TEXTURE_2D,$t,ie,zt.width,zt.height)}kt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,qt,he,Pt)}else i.texImage2D(r.TEXTURE_2D,0,ie,qt,he,Pt);M(R)&&_(gt),Wt.__version=xt.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function j(F,R,ot){if(R.image.length!==6)return;const gt=Qt(F,R),Lt=R.source;i.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+ot);const xt=s.get(Lt);if(Lt.version!==xt.__version||gt===!0){i.activeTexture(r.TEXTURE0+ot);const Wt=Le.getPrimaries(Le.workingColorSpace),Gt=R.colorSpace===ys?null:Le.getPrimaries(R.colorSpace),Jt=R.colorSpace===ys||Wt===Gt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);const te=R.isCompressedTexture||R.image[0].isCompressedTexture,Pt=R.image[0]&&R.image[0].isDataTexture,qt=[];for(let Ut=0;Ut<6;Ut++)!te&&!Pt?qt[Ut]=T(R.image[Ut],!0,l.maxCubemapSize):qt[Ut]=Pt?R.image[Ut].image:R.image[Ut],qt[Ut]=le(R,qt[Ut]);const he=qt[0],ie=c.convert(R.format,R.colorSpace),ut=c.convert(R.type),re=C(R.internalFormat,ie,ut,R.colorSpace),W=R.isVideoTexture!==!0,Bt=xt.__version===void 0||gt===!0,kt=Lt.dataReady;let $t=P(R,he);Rt(r.TEXTURE_CUBE_MAP,R);let zt;if(te){W&&Bt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,$t,re,he.width,he.height);for(let Ut=0;Ut<6;Ut++){zt=qt[Ut].mipmaps;for(let ae=0;ae<zt.length;ae++){const _e=zt[ae];R.format!==Xi?ie!==null?W?kt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ae,0,0,_e.width,_e.height,ie,_e.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ae,re,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?kt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ae,0,0,_e.width,_e.height,ie,ut,_e.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ae,re,_e.width,_e.height,0,ie,ut,_e.data)}}}else{if(zt=R.mipmaps,W&&Bt){zt.length>0&&$t++;const Ut=se(qt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,$t,re,Ut.width,Ut.height)}for(let Ut=0;Ut<6;Ut++)if(Pt){W?kt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,0,0,qt[Ut].width,qt[Ut].height,ie,ut,qt[Ut].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,re,qt[Ut].width,qt[Ut].height,0,ie,ut,qt[Ut].data);for(let ae=0;ae<zt.length;ae++){const We=zt[ae].image[Ut].image;W?kt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ae+1,0,0,We.width,We.height,ie,ut,We.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ae+1,re,We.width,We.height,0,ie,ut,We.data)}}else{W?kt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,0,0,ie,ut,qt[Ut]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,re,ie,ut,qt[Ut]);for(let ae=0;ae<zt.length;ae++){const _e=zt[ae];W?kt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ae+1,0,0,ie,ut,_e.image[Ut]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,ae+1,re,ie,ut,_e.image[Ut])}}}M(R)&&_(r.TEXTURE_CUBE_MAP),xt.__version=Lt.version,R.onUpdate&&R.onUpdate(R)}F.__version=R.version}function yt(F,R,ot,gt,Lt,xt){const Wt=c.convert(ot.format,ot.colorSpace),Gt=c.convert(ot.type),Jt=C(ot.internalFormat,Wt,Gt,ot.colorSpace),te=s.get(R),Pt=s.get(ot);if(Pt.__renderTarget=R,!te.__hasExternalTextures){const qt=Math.max(1,R.width>>xt),he=Math.max(1,R.height>>xt);Lt===r.TEXTURE_3D||Lt===r.TEXTURE_2D_ARRAY?i.texImage3D(Lt,xt,Jt,qt,he,R.depth,0,Wt,Gt,null):i.texImage2D(Lt,xt,Jt,qt,he,0,Wt,Gt,null)}i.bindFramebuffer(r.FRAMEBUFFER,F),Dt(R)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,gt,Lt,Pt.__webglTexture,0,Ct(R)):(Lt===r.TEXTURE_2D||Lt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Lt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,gt,Lt,Pt.__webglTexture,xt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function bt(F,R,ot){if(r.bindRenderbuffer(r.RENDERBUFFER,F),R.depthBuffer){const gt=R.depthTexture,Lt=gt&&gt.isDepthTexture?gt.type:null,xt=b(R.stencilBuffer,Lt),Wt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Gt=Ct(R);Dt(R)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Gt,xt,R.width,R.height):ot?r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,xt,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,xt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Wt,r.RENDERBUFFER,F)}else{const gt=R.textures;for(let Lt=0;Lt<gt.length;Lt++){const xt=gt[Lt],Wt=c.convert(xt.format,xt.colorSpace),Gt=c.convert(xt.type),Jt=C(xt.internalFormat,Wt,Gt,xt.colorSpace),te=Ct(R);ot&&Dt(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,te,Jt,R.width,R.height):Dt(R)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,te,Jt,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,Jt,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Mt(F,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,F),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=s.get(R.depthTexture);gt.__renderTarget=R,(!gt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),$(R.depthTexture,0);const Lt=gt.__webglTexture,xt=Ct(R);if(R.depthTexture.format===Hl)Dt(R)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Lt,0,xt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Lt,0);else if(R.depthTexture.format===Gl)Dt(R)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Lt,0,xt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Lt,0);else throw new Error("Unknown depthTexture format")}function wt(F){const R=s.get(F),ot=F.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==F.depthTexture){const gt=F.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),gt){const Lt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,gt.removeEventListener("dispose",Lt)};gt.addEventListener("dispose",Lt),R.__depthDisposeCallback=Lt}R.__boundDepthTexture=gt}if(F.depthTexture&&!R.__autoAllocateDepthBuffer){if(ot)throw new Error("target.depthTexture not supported in Cube render targets");const gt=F.texture.mipmaps;gt&&gt.length>0?Mt(R.__webglFramebuffer[0],F):Mt(R.__webglFramebuffer,F)}else if(ot){R.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[gt]),R.__webglDepthbuffer[gt]===void 0)R.__webglDepthbuffer[gt]=r.createRenderbuffer(),bt(R.__webglDepthbuffer[gt],F,!1);else{const Lt=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=R.__webglDepthbuffer[gt];r.bindRenderbuffer(r.RENDERBUFFER,xt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Lt,r.RENDERBUFFER,xt)}}else{const gt=F.texture.mipmaps;if(gt&&gt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),bt(R.__webglDepthbuffer,F,!1);else{const Lt=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xt=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,xt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Lt,r.RENDERBUFFER,xt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ot(F,R,ot){const gt=s.get(F);R!==void 0&&yt(gt.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ot!==void 0&&wt(F)}function k(F){const R=F.texture,ot=s.get(F),gt=s.get(R);F.addEventListener("dispose",I);const Lt=F.textures,xt=F.isWebGLCubeRenderTarget===!0,Wt=Lt.length>1;if(Wt||(gt.__webglTexture===void 0&&(gt.__webglTexture=r.createTexture()),gt.__version=R.version,f.memory.textures++),xt){ot.__webglFramebuffer=[];for(let Gt=0;Gt<6;Gt++)if(R.mipmaps&&R.mipmaps.length>0){ot.__webglFramebuffer[Gt]=[];for(let Jt=0;Jt<R.mipmaps.length;Jt++)ot.__webglFramebuffer[Gt][Jt]=r.createFramebuffer()}else ot.__webglFramebuffer[Gt]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){ot.__webglFramebuffer=[];for(let Gt=0;Gt<R.mipmaps.length;Gt++)ot.__webglFramebuffer[Gt]=r.createFramebuffer()}else ot.__webglFramebuffer=r.createFramebuffer();if(Wt)for(let Gt=0,Jt=Lt.length;Gt<Jt;Gt++){const te=s.get(Lt[Gt]);te.__webglTexture===void 0&&(te.__webglTexture=r.createTexture(),f.memory.textures++)}if(F.samples>0&&Dt(F)===!1){ot.__webglMultisampledFramebuffer=r.createFramebuffer(),ot.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,ot.__webglMultisampledFramebuffer);for(let Gt=0;Gt<Lt.length;Gt++){const Jt=Lt[Gt];ot.__webglColorRenderbuffer[Gt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ot.__webglColorRenderbuffer[Gt]);const te=c.convert(Jt.format,Jt.colorSpace),Pt=c.convert(Jt.type),qt=C(Jt.internalFormat,te,Pt,Jt.colorSpace,F.isXRRenderTarget===!0),he=Ct(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,he,qt,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Gt,r.RENDERBUFFER,ot.__webglColorRenderbuffer[Gt])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(ot.__webglDepthRenderbuffer=r.createRenderbuffer(),bt(ot.__webglDepthRenderbuffer,F,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(xt){i.bindTexture(r.TEXTURE_CUBE_MAP,gt.__webglTexture),Rt(r.TEXTURE_CUBE_MAP,R);for(let Gt=0;Gt<6;Gt++)if(R.mipmaps&&R.mipmaps.length>0)for(let Jt=0;Jt<R.mipmaps.length;Jt++)yt(ot.__webglFramebuffer[Gt][Jt],F,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,Jt);else yt(ot.__webglFramebuffer[Gt],F,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Gt,0);M(R)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Wt){for(let Gt=0,Jt=Lt.length;Gt<Jt;Gt++){const te=Lt[Gt],Pt=s.get(te);let qt=r.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(qt=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(qt,Pt.__webglTexture),Rt(qt,te),yt(ot.__webglFramebuffer,F,te,r.COLOR_ATTACHMENT0+Gt,qt,0),M(te)&&_(qt)}i.unbindTexture()}else{let Gt=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Gt=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Gt,gt.__webglTexture),Rt(Gt,R),R.mipmaps&&R.mipmaps.length>0)for(let Jt=0;Jt<R.mipmaps.length;Jt++)yt(ot.__webglFramebuffer[Jt],F,R,r.COLOR_ATTACHMENT0,Gt,Jt);else yt(ot.__webglFramebuffer,F,R,r.COLOR_ATTACHMENT0,Gt,0);M(R)&&_(Gt),i.unbindTexture()}F.depthBuffer&&wt(F)}function Et(F){const R=F.textures;for(let ot=0,gt=R.length;ot<gt;ot++){const Lt=R[ot];if(M(Lt)){const xt=w(F),Wt=s.get(Lt).__webglTexture;i.bindTexture(xt,Wt),_(xt),i.unbindTexture()}}}const St=[],ht=[];function mt(F){if(F.samples>0){if(Dt(F)===!1){const R=F.textures,ot=F.width,gt=F.height;let Lt=r.COLOR_BUFFER_BIT;const xt=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Wt=s.get(F),Gt=R.length>1;if(Gt)for(let te=0;te<R.length;te++)i.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer);const Jt=F.texture.mipmaps;Jt&&Jt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Wt.__webglFramebuffer);for(let te=0;te<R.length;te++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(Lt|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(Lt|=r.STENCIL_BUFFER_BIT)),Gt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Wt.__webglColorRenderbuffer[te]);const Pt=s.get(R[te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Pt,0)}r.blitFramebuffer(0,0,ot,gt,0,0,ot,gt,Lt,r.NEAREST),p===!0&&(St.length=0,ht.length=0,St.push(r.COLOR_ATTACHMENT0+te),F.depthBuffer&&F.resolveDepthBuffer===!1&&(St.push(xt),ht.push(xt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ht)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,St))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Gt)for(let te=0;te<R.length;te++){i.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.RENDERBUFFER,Wt.__webglColorRenderbuffer[te]);const Pt=s.get(R[te]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Wt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+te,r.TEXTURE_2D,Pt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Wt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&p){const R=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function Ct(F){return Math.min(l.maxSamples,F.samples)}function Dt(F){const R=s.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function It(F){const R=f.render.frame;v.get(F)!==R&&(v.set(F,R),F.update())}function le(F,R){const ot=F.colorSpace,gt=F.format,Lt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||ot!==Mo&&ot!==ys&&(Le.getTransfer(ot)===je?(gt!==Xi||Lt!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ot)),R}function se(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(m.width=F.naturalWidth||F.width,m.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(m.width=F.displayWidth,m.height=F.displayHeight):(m.width=F.width,m.height=F.height),m}this.allocateTextureUnit=J,this.resetTextureUnits=Y,this.setTexture2D=$,this.setTexture2DArray=q,this.setTexture3D=U,this.setTextureCube=B,this.rebindTextures=Ot,this.setupRenderTarget=k,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=yt,this.useMultisampledRTT=Dt}function DR(r,t){function i(s,l=ys){let c;const f=Le.getTransfer(l);if(s===Yi)return r.UNSIGNED_BYTE;if(s===Pm)return r.UNSIGNED_SHORT_4_4_4_4;if(s===zm)return r.UNSIGNED_SHORT_5_5_5_1;if(s===tS)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===eS)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Jx)return r.BYTE;if(s===$x)return r.SHORT;if(s===Bl)return r.UNSIGNED_SHORT;if(s===Om)return r.INT;if(s===ar)return r.UNSIGNED_INT;if(s===oa)return r.FLOAT;if(s===qi)return r.HALF_FLOAT;if(s===nS)return r.ALPHA;if(s===iS)return r.RGB;if(s===Xi)return r.RGBA;if(s===Hl)return r.DEPTH_COMPONENT;if(s===Gl)return r.DEPTH_STENCIL;if(s===Im)return r.RED;if(s===Bm)return r.RED_INTEGER;if(s===aS)return r.RG;if(s===Fm)return r.RG_INTEGER;if(s===Hm)return r.RGBA_INTEGER;if(s===Ju||s===$u||s===tf||s===ef)if(f===je)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Ju)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$u)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===tf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ef)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Ju)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$u)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===tf)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ef)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Zp||s===Qp||s===Kp||s===Jp)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Zp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Qp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Jp)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===$p||s===tm||s===em)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===$p||s===tm)return f===je?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===em)return f===je?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===nm||s===im||s===am||s===sm||s===rm||s===om||s===lm||s===cm||s===um||s===fm||s===hm||s===dm||s===pm||s===mm)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===nm)return f===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===im)return f===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===am)return f===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sm)return f===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rm)return f===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===om)return f===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===lm)return f===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cm)return f===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===um)return f===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===fm)return f===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===hm)return f===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===dm)return f===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===pm)return f===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===mm)return f===je?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===gm||s===vm||s===_m)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===gm)return f===je?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===vm)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===_m)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ym||s===xm||s===Sm||s===Mm)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===ym)return c.COMPRESSED_RED_RGTC1_EXT;if(s===xm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Sm)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Mm)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Fl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const NR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UR=`
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

}`;class LR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new yS(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new nn({vertexShader:NR,fragmentShader:UR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new sn(new Ba(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class OR extends Ao{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",p=1,m=null,v=null,g=null,y=null,x=null,E=null;const T=typeof XRWebGLBinding<"u",M=new LR,_={},w=i.getContextAttributes();let C=null,b=null;const P=[],z=[],I=new Ft;let O=null;const N=new ri;N.viewport=new Qe;const A=new ri;A.viewport=new Qe;const V=[N,A],Y=new eA;let J=null,pt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let j=P[K];return j===void 0&&(j=new Mp,P[K]=j),j.getTargetRaySpace()},this.getControllerGrip=function(K){let j=P[K];return j===void 0&&(j=new Mp,P[K]=j),j.getGripSpace()},this.getHand=function(K){let j=P[K];return j===void 0&&(j=new Mp,P[K]=j),j.getHandSpace()};function $(K){const j=z.indexOf(K.inputSource);if(j===-1)return;const yt=P[j];yt!==void 0&&(yt.update(K.inputSource,K.frame,m||f),yt.dispatchEvent({type:K.type,data:K.inputSource}))}function q(){l.removeEventListener("select",$),l.removeEventListener("selectstart",$),l.removeEventListener("selectend",$),l.removeEventListener("squeeze",$),l.removeEventListener("squeezestart",$),l.removeEventListener("squeezeend",$),l.removeEventListener("end",q),l.removeEventListener("inputsourceschange",U);for(let K=0;K<P.length;K++){const j=z[K];j!==null&&(z[K]=null,P[K].disconnect(j))}J=null,pt=null,M.reset();for(const K in _)delete _[K];t.setRenderTarget(C),x=null,y=null,g=null,l=null,b=null,et.stop(),s.isPresenting=!1,t.setPixelRatio(O),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){c=K,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){d=K,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(K){m=K},this.getBaseLayer=function(){return y!==null?y:x},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(K){if(l=K,l!==null){if(C=t.getRenderTarget(),l.addEventListener("select",$),l.addEventListener("selectstart",$),l.addEventListener("selectend",$),l.addEventListener("squeeze",$),l.addEventListener("squeezestart",$),l.addEventListener("squeezeend",$),l.addEventListener("end",q),l.addEventListener("inputsourceschange",U),w.xrCompatible!==!0&&await i.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(I),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let yt=null,bt=null,Mt=null;w.depth&&(Mt=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,yt=w.stencil?Gl:Hl,bt=w.stencil?Fl:ar);const wt={colorFormat:i.RGBA8,depthFormat:Mt,scaleFactor:c};g=this.getBinding(),y=g.createProjectionLayer(wt),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),b=new Li(y.textureWidth,y.textureHeight,{format:Xi,type:Yi,depthTexture:new _S(y.textureWidth,y.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const yt={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(l,i,yt),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),b=new Li(x.framebufferWidth,x.framebufferHeight,{format:Xi,type:Yi,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),et.setContext(l),et.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function U(K){for(let j=0;j<K.removed.length;j++){const yt=K.removed[j],bt=z.indexOf(yt);bt>=0&&(z[bt]=null,P[bt].disconnect(yt))}for(let j=0;j<K.added.length;j++){const yt=K.added[j];let bt=z.indexOf(yt);if(bt===-1){for(let wt=0;wt<P.length;wt++)if(wt>=z.length){z.push(yt),bt=wt;break}else if(z[wt]===null){z[wt]=yt,bt=wt;break}if(bt===-1)break}const Mt=P[bt];Mt&&Mt.connect(yt)}}const B=new G,it=new G;function dt(K,j,yt){B.setFromMatrixPosition(j.matrixWorld),it.setFromMatrixPosition(yt.matrixWorld);const bt=B.distanceTo(it),Mt=j.projectionMatrix.elements,wt=yt.projectionMatrix.elements,Ot=Mt[14]/(Mt[10]-1),k=Mt[14]/(Mt[10]+1),Et=(Mt[9]+1)/Mt[5],St=(Mt[9]-1)/Mt[5],ht=(Mt[8]-1)/Mt[0],mt=(wt[8]+1)/wt[0],Ct=Ot*ht,Dt=Ot*mt,It=bt/(-ht+mt),le=It*-ht;if(j.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(le),K.translateZ(It),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Mt[10]===-1)K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const se=Ot+It,F=k+It,R=Ct-le,ot=Dt+(bt-le),gt=Et*k/F*se,Lt=St*k/F*se;K.projectionMatrix.makePerspective(R,ot,gt,Lt,se,F),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function Nt(K,j){j===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(j.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(l===null)return;let j=K.near,yt=K.far;M.texture!==null&&(M.depthNear>0&&(j=M.depthNear),M.depthFar>0&&(yt=M.depthFar)),Y.near=A.near=N.near=j,Y.far=A.far=N.far=yt,(J!==Y.near||pt!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),J=Y.near,pt=Y.far),Y.layers.mask=K.layers.mask|6,N.layers.mask=Y.layers.mask&3,A.layers.mask=Y.layers.mask&5;const bt=K.parent,Mt=Y.cameras;Nt(Y,bt);for(let wt=0;wt<Mt.length;wt++)Nt(Mt[wt],bt);Mt.length===2?dt(Y,N,A):Y.projectionMatrix.copy(N.projectionMatrix),Rt(K,Y,bt)};function Rt(K,j,yt){yt===null?K.matrix.copy(j.matrixWorld):(K.matrix.copy(yt.matrixWorld),K.matrix.invert(),K.matrix.multiply(j.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Vl*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(y===null&&x===null))return p},this.setFoveation=function(K){p=K,y!==null&&(y.fixedFoveation=K),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=K)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Y)},this.getCameraTexture=function(K){return _[K]};let Qt=null;function H(K,j){if(v=j.getViewerPose(m||f),E=j,v!==null){const yt=v.views;x!==null&&(t.setRenderTargetFramebuffer(b,x.framebuffer),t.setRenderTarget(b));let bt=!1;yt.length!==Y.cameras.length&&(Y.cameras.length=0,bt=!0);for(let k=0;k<yt.length;k++){const Et=yt[k];let St=null;if(x!==null)St=x.getViewport(Et);else{const mt=g.getViewSubImage(y,Et);St=mt.viewport,k===0&&(t.setRenderTargetTextures(b,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(b))}let ht=V[k];ht===void 0&&(ht=new ri,ht.layers.enable(k),ht.viewport=new Qe,V[k]=ht),ht.matrix.fromArray(Et.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Et.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(St.x,St.y,St.width,St.height),k===0&&(Y.matrix.copy(ht.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),bt===!0&&Y.cameras.push(ht)}const Mt=l.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=s.getBinding();const k=g.getDepthInformation(yt[0]);k&&k.isValid&&k.texture&&M.init(k,l.renderState)}if(Mt&&Mt.includes("camera-access")&&T){t.state.unbindTexture(),g=s.getBinding();for(let k=0;k<yt.length;k++){const Et=yt[k].camera;if(Et){let St=_[Et];St||(St=new yS,_[Et]=St);const ht=g.getCameraImage(Et);St.sourceTexture=ht}}}}for(let yt=0;yt<P.length;yt++){const bt=z[yt],Mt=P[yt];bt!==null&&Mt!==void 0&&Mt.update(bt,j,m||f)}Qt&&Qt(K,j),j.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:j}),E=null}const et=new NS;et.setAnimationLoop(H),this.setAnimationLoop=function(K){Qt=K},this.dispose=function(){}}}const Qs=new xi,PR=new He;function zR(r,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function s(M,_){_.color.getRGB(M.fogColor.value,dS(r)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,w,C,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),g(M,_)):_.isMeshPhongMaterial?(c(M,_),v(M,_)):_.isMeshStandardMaterial?(c(M,_),y(M,_),_.isMeshPhysicalMaterial&&x(M,_,b)):_.isMeshMatcapMaterial?(c(M,_),E(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),T(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(f(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?p(M,_,w,C):_.isSpriteMaterial?m(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===qn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===qn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const w=t.get(_),C=w.envMap,b=w.envMapRotation;C&&(M.envMap.value=C,Qs.copy(b),Qs.x*=-1,Qs.y*=-1,Qs.z*=-1,C.isCubeTexture&&C.isRenderTargetTexture===!1&&(Qs.y*=-1,Qs.z*=-1),M.envMapRotation.value.setFromMatrix4(PR.makeRotationFromEuler(Qs)),M.flipEnvMap.value=C.isCubeTexture&&C.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function f(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function p(M,_,w,C){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*w,M.scale.value=C*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function m(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function v(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function g(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function y(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function x(M,_,w){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===qn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=w.texture,M.transmissionSamplerSize.value.set(w.width,w.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,_){_.matcap&&(M.matcap.value=_.matcap)}function T(M,_){const w=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(w.matrixWorld),M.nearDistance.value=w.shadow.camera.near,M.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function IR(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(w,C){const b=C.program;s.uniformBlockBinding(w,b)}function m(w,C){let b=l[w.id];b===void 0&&(E(w),b=v(w),l[w.id]=b,w.addEventListener("dispose",M));const P=C.program;s.updateUBOMapping(w,P);const z=t.render.frame;c[w.id]!==z&&(y(w),c[w.id]=z)}function v(w){const C=g();w.__bindingPointIndex=C;const b=r.createBuffer(),P=w.__size,z=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,P,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,C,b),b}function g(){for(let w=0;w<d;w++)if(f.indexOf(w)===-1)return f.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(w){const C=l[w.id],b=w.uniforms,P=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,C);for(let z=0,I=b.length;z<I;z++){const O=Array.isArray(b[z])?b[z]:[b[z]];for(let N=0,A=O.length;N<A;N++){const V=O[N];if(x(V,z,N,P)===!0){const Y=V.__offset,J=Array.isArray(V.value)?V.value:[V.value];let pt=0;for(let $=0;$<J.length;$++){const q=J[$],U=T(q);typeof q=="number"||typeof q=="boolean"?(V.__data[0]=q,r.bufferSubData(r.UNIFORM_BUFFER,Y+pt,V.__data)):q.isMatrix3?(V.__data[0]=q.elements[0],V.__data[1]=q.elements[1],V.__data[2]=q.elements[2],V.__data[3]=0,V.__data[4]=q.elements[3],V.__data[5]=q.elements[4],V.__data[6]=q.elements[5],V.__data[7]=0,V.__data[8]=q.elements[6],V.__data[9]=q.elements[7],V.__data[10]=q.elements[8],V.__data[11]=0):(q.toArray(V.__data,pt),pt+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(w,C,b,P){const z=w.value,I=C+"_"+b;if(P[I]===void 0)return typeof z=="number"||typeof z=="boolean"?P[I]=z:P[I]=z.clone(),!0;{const O=P[I];if(typeof z=="number"||typeof z=="boolean"){if(O!==z)return P[I]=z,!0}else if(O.equals(z)===!1)return O.copy(z),!0}return!1}function E(w){const C=w.uniforms;let b=0;const P=16;for(let I=0,O=C.length;I<O;I++){const N=Array.isArray(C[I])?C[I]:[C[I]];for(let A=0,V=N.length;A<V;A++){const Y=N[A],J=Array.isArray(Y.value)?Y.value:[Y.value];for(let pt=0,$=J.length;pt<$;pt++){const q=J[pt],U=T(q),B=b%P,it=B%U.boundary,dt=B+it;b+=it,dt!==0&&P-dt<U.storage&&(b+=P-dt),Y.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=b,b+=U.storage}}}const z=b%P;return z>0&&(b+=P-z),w.__size=b,w.__cache={},this}function T(w){const C={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(C.boundary=4,C.storage=4):w.isVector2?(C.boundary=8,C.storage=8):w.isVector3||w.isColor?(C.boundary=16,C.storage=12):w.isVector4?(C.boundary=16,C.storage=16):w.isMatrix3?(C.boundary=48,C.storage=48):w.isMatrix4?(C.boundary=64,C.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),C}function M(w){const C=w.target;C.removeEventListener("dispose",M);const b=f.indexOf(C.__bindingPointIndex);f.splice(b,1),r.deleteBuffer(l[C.id]),delete l[C.id],delete c[C.id]}function _(){for(const w in l)r.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:p,update:m,dispose:_}}class BR{constructor(t={}){const{canvas:i=BT(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let x;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=s.getContextAttributes().alpha}else x=f;const E=new Uint32Array(4),T=new Int32Array(4);let M=null,_=null;const w=[],C=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=za,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let P=!1;this._outputColorSpace=kn;let z=0,I=0,O=null,N=-1,A=null;const V=new Qe,Y=new Qe;let J=null;const pt=new oe(0);let $=0,q=i.width,U=i.height,B=1,it=null,dt=null;const Nt=new Qe(0,0,q,U),Rt=new Qe(0,0,q,U);let Qt=!1;const H=new Xm;let et=!1,K=!1;const j=new He,yt=new G,bt=new Qe,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let wt=!1;function Ot(){return O===null?B:1}let k=s;function Et(L,st){return i.getContext(L,st)}try{const L={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Um}`),i.addEventListener("webglcontextlost",kt,!1),i.addEventListener("webglcontextrestored",$t,!1),i.addEventListener("webglcontextcreationerror",zt,!1),k===null){const st="webgl2";if(k=Et(st,L),k===null)throw Et(st)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let St,ht,mt,Ct,Dt,It,le,se,F,R,ot,gt,Lt,xt,Wt,Gt,Jt,te,Pt,qt,he,ie,ut,re;function W(){St=new Ww(k),St.init(),ie=new DR(k,St),ht=new Gw(k,St,t,ie),mt=new CR(k,St),ht.reversedDepthBuffer&&y&&mt.buffers.depth.setReversed(!0),Ct=new Kw(k),Dt=new mR,It=new RR(k,St,mt,Dt,ht,ie,Ct),le=new kw(b),se=new jw(b),F=new iA(k),ut=new Fw(k,F),R=new Zw(k,F,Ct,ut),ot=new $w(k,R,F,Ct),Pt=new Jw(k,ht,It),Gt=new Vw(Dt),gt=new pR(b,le,se,St,ht,ut,Gt),Lt=new zR(b,Dt),xt=new vR,Wt=new ER(St),te=new Bw(b,le,se,mt,ot,x,p),Jt=new AR(b,ot,ht),re=new IR(k,Ct,ht,mt),qt=new Hw(k,St,Ct),he=new Qw(k,St,Ct),Ct.programs=gt.programs,b.capabilities=ht,b.extensions=St,b.properties=Dt,b.renderLists=xt,b.shadowMap=Jt,b.state=mt,b.info=Ct}W();const Bt=new OR(b,k);this.xr=Bt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const L=St.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=St.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(L){L!==void 0&&(B=L,this.setSize(q,U,!1))},this.getSize=function(L){return L.set(q,U)},this.setSize=function(L,st,vt=!0){if(Bt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=L,U=st,i.width=Math.floor(L*B),i.height=Math.floor(st*B),vt===!0&&(i.style.width=L+"px",i.style.height=st+"px"),this.setViewport(0,0,L,st)},this.getDrawingBufferSize=function(L){return L.set(q*B,U*B).floor()},this.setDrawingBufferSize=function(L,st,vt){q=L,U=st,B=vt,i.width=Math.floor(L*vt),i.height=Math.floor(st*vt),this.setViewport(0,0,L,st)},this.getCurrentViewport=function(L){return L.copy(V)},this.getViewport=function(L){return L.copy(Nt)},this.setViewport=function(L,st,vt,_t){L.isVector4?Nt.set(L.x,L.y,L.z,L.w):Nt.set(L,st,vt,_t),mt.viewport(V.copy(Nt).multiplyScalar(B).round())},this.getScissor=function(L){return L.copy(Rt)},this.setScissor=function(L,st,vt,_t){L.isVector4?Rt.set(L.x,L.y,L.z,L.w):Rt.set(L,st,vt,_t),mt.scissor(Y.copy(Rt).multiplyScalar(B).round())},this.getScissorTest=function(){return Qt},this.setScissorTest=function(L){mt.setScissorTest(Qt=L)},this.setOpaqueSort=function(L){it=L},this.setTransparentSort=function(L){dt=L},this.getClearColor=function(L){return L.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(L=!0,st=!0,vt=!0){let _t=0;if(L){let rt=!1;if(O!==null){const Ht=O.texture.format;rt=Ht===Hm||Ht===Fm||Ht===Bm}if(rt){const Ht=O.texture.type,Yt=Ht===Yi||Ht===ar||Ht===Bl||Ht===Fl||Ht===Pm||Ht===zm,Zt=te.getClearColor(),Vt=te.getClearAlpha(),ee=Zt.r,pe=Zt.g,ue=Zt.b;Yt?(E[0]=ee,E[1]=pe,E[2]=ue,E[3]=Vt,k.clearBufferuiv(k.COLOR,0,E)):(T[0]=ee,T[1]=pe,T[2]=ue,T[3]=Vt,k.clearBufferiv(k.COLOR,0,T))}else _t|=k.COLOR_BUFFER_BIT}st&&(_t|=k.DEPTH_BUFFER_BIT),vt&&(_t|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(_t)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",kt,!1),i.removeEventListener("webglcontextrestored",$t,!1),i.removeEventListener("webglcontextcreationerror",zt,!1),te.dispose(),xt.dispose(),Wt.dispose(),Dt.dispose(),le.dispose(),se.dispose(),ot.dispose(),ut.dispose(),re.dispose(),gt.dispose(),Bt.dispose(),Bt.removeEventListener("sessionstart",En),Bt.removeEventListener("sessionend",Bn),fa.stop()};function kt(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function $t(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const L=Ct.autoReset,st=Jt.enabled,vt=Jt.autoUpdate,_t=Jt.needsUpdate,rt=Jt.type;W(),Ct.autoReset=L,Jt.enabled=st,Jt.autoUpdate=vt,Jt.needsUpdate=_t,Jt.type=rt}function zt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ut(L){const st=L.target;st.removeEventListener("dispose",Ut),ae(st)}function ae(L){_e(L),Dt.remove(L)}function _e(L){const st=Dt.get(L).programs;st!==void 0&&(st.forEach(function(vt){gt.releaseProgram(vt)}),L.isShaderMaterial&&gt.releaseShaderCache(L))}this.renderBufferDirect=function(L,st,vt,_t,rt,Ht){st===null&&(st=Mt);const Yt=rt.isMesh&&rt.matrixWorld.determinant()<0,Zt=Kl(L,st,vt,_t,rt);mt.setMaterial(_t,Yt);let Vt=vt.index,ee=1;if(_t.wireframe===!0){if(Vt=R.getWireframeAttribute(vt),Vt===void 0)return;ee=2}const pe=vt.drawRange,ue=vt.attributes.position;let be=pe.start*ee,Ve=(pe.start+pe.count)*ee;Ht!==null&&(be=Math.max(be,Ht.start*ee),Ve=Math.min(Ve,(Ht.start+Ht.count)*ee)),Vt!==null?(be=Math.max(be,0),Ve=Math.min(Ve,Vt.count)):ue!=null&&(be=Math.max(be,0),Ve=Math.min(Ve,ue.count));const en=Ve-be;if(en<0||en===1/0)return;ut.setup(rt,_t,Zt,vt,Vt);let Ie,Oe=qt;if(Vt!==null&&(Ie=F.get(Vt),Oe=he,Oe.setIndex(Ie)),rt.isMesh)_t.wireframe===!0?(mt.setLineWidth(_t.wireframeLinewidth*Ot()),Oe.setMode(k.LINES)):Oe.setMode(k.TRIANGLES);else if(rt.isLine){let fe=_t.linewidth;fe===void 0&&(fe=1),mt.setLineWidth(fe*Ot()),rt.isLineSegments?Oe.setMode(k.LINES):rt.isLineLoop?Oe.setMode(k.LINE_LOOP):Oe.setMode(k.LINE_STRIP)}else rt.isPoints?Oe.setMode(k.POINTS):rt.isSprite&&Oe.setMode(k.TRIANGLES);if(rt.isBatchedMesh)if(rt._multiDrawInstances!==null)kl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount,rt._multiDrawInstances);else if(St.get("WEBGL_multi_draw"))Oe.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{const fe=rt._multiDrawStarts,Be=rt._multiDrawCounts,Ee=rt._multiDrawCount,Tn=Vt?F.get(Vt).bytesPerElement:1,oi=Dt.get(_t).currentProgram.getUniforms();for(let Pe=0;Pe<Ee;Pe++)oi.setValue(k,"_gl_DrawID",Pe),Oe.render(fe[Pe]/Tn,Be[Pe])}else if(rt.isInstancedMesh)Oe.renderInstances(be,en,rt.count);else if(vt.isInstancedBufferGeometry){const fe=vt._maxInstanceCount!==void 0?vt._maxInstanceCount:1/0,Be=Math.min(vt.instanceCount,fe);Oe.renderInstances(be,en,Be)}else Oe.render(be,en)};function We(L,st,vt){L.transparent===!0&&L.side===_i&&L.forceSinglePass===!1?(L.side=qn,L.needsUpdate=!0,Si(L,st,vt),L.side=xs,L.needsUpdate=!0,Si(L,st,vt),L.side=_i):Si(L,st,vt)}this.compile=function(L,st,vt=null){vt===null&&(vt=L),_=Wt.get(vt),_.init(st),C.push(_),vt.traverseVisible(function(rt){rt.isLight&&rt.layers.test(st.layers)&&(_.pushLight(rt),rt.castShadow&&_.pushShadow(rt))}),L!==vt&&L.traverseVisible(function(rt){rt.isLight&&rt.layers.test(st.layers)&&(_.pushLight(rt),rt.castShadow&&_.pushShadow(rt))}),_.setupLights();const _t=new Set;return L.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;const Ht=rt.material;if(Ht)if(Array.isArray(Ht))for(let Yt=0;Yt<Ht.length;Yt++){const Zt=Ht[Yt];We(Zt,vt,rt),_t.add(Zt)}else We(Ht,vt,rt),_t.add(Ht)}),_=C.pop(),_t},this.compileAsync=function(L,st,vt=null){const _t=this.compile(L,st,vt);return new Promise(rt=>{function Ht(){if(_t.forEach(function(Yt){Dt.get(Yt).currentProgram.isReady()&&_t.delete(Yt)}),_t.size===0){rt(L);return}setTimeout(Ht,10)}St.get("KHR_parallel_shader_compile")!==null?Ht():setTimeout(Ht,10)})};let Re=null;function rn(L){Re&&Re(L)}function En(){fa.stop()}function Bn(){fa.start()}const fa=new NS;fa.setAnimationLoop(rn),typeof self<"u"&&fa.setContext(self),this.setAnimationLoop=function(L){Re=L,Bt.setAnimationLoop(L),L===null?fa.stop():fa.start()},Bt.addEventListener("sessionstart",En),Bt.addEventListener("sessionend",Bn),this.render=function(L,st){if(st!==void 0&&st.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),st.parent===null&&st.matrixWorldAutoUpdate===!0&&st.updateMatrixWorld(),Bt.enabled===!0&&Bt.isPresenting===!0&&(Bt.cameraAutoUpdate===!0&&Bt.updateCamera(st),st=Bt.getCamera()),L.isScene===!0&&L.onBeforeRender(b,L,st,O),_=Wt.get(L,C.length),_.init(st),C.push(_),j.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),H.setFromProjectionMatrix(j,la,st.reversedDepth),K=this.localClippingEnabled,et=Gt.init(this.clippingPlanes,K),M=xt.get(L,w.length),M.init(),w.push(M),Bt.enabled===!0&&Bt.isPresenting===!0){const Ht=b.xr.getDepthSensingMesh();Ht!==null&&Do(Ht,st,-1/0,b.sortObjects)}Do(L,st,0,b.sortObjects),M.finish(),b.sortObjects===!0&&M.sort(it,dt),wt=Bt.enabled===!1||Bt.isPresenting===!1||Bt.hasDepthSensing()===!1,wt&&te.addToRenderList(M,L),this.info.render.frame++,et===!0&&Gt.beginShadows();const vt=_.state.shadowsArray;Jt.render(vt,L,st),et===!0&&Gt.endShadows(),this.info.autoReset===!0&&this.info.reset();const _t=M.opaque,rt=M.transmissive;if(_.setupLights(),st.isArrayCamera){const Ht=st.cameras;if(rt.length>0)for(let Yt=0,Zt=Ht.length;Yt<Zt;Yt++){const Vt=Ht[Yt];Ss(_t,rt,L,Vt)}wt&&te.render(L);for(let Yt=0,Zt=Ht.length;Yt<Zt;Yt++){const Vt=Ht[Yt];Ql(M,L,Vt,Vt.viewport)}}else rt.length>0&&Ss(_t,rt,L,st),wt&&te.render(L),Ql(M,L,st);O!==null&&I===0&&(It.updateMultisampleRenderTarget(O),It.updateRenderTargetMipmap(O)),L.isScene===!0&&L.onAfterRender(b,L,st),ut.resetDefaultState(),N=-1,A=null,C.pop(),C.length>0?(_=C[C.length-1],et===!0&&Gt.setGlobalState(b.clippingPlanes,_.state.camera)):_=null,w.pop(),w.length>0?M=w[w.length-1]:M=null};function Do(L,st,vt,_t){if(L.visible===!1)return;if(L.layers.test(st.layers)){if(L.isGroup)vt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(st);else if(L.isLight)_.pushLight(L),L.castShadow&&_.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||H.intersectsSprite(L)){_t&&bt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(j);const Yt=ot.update(L),Zt=L.material;Zt.visible&&M.push(L,Yt,Zt,vt,bt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||H.intersectsObject(L))){const Yt=ot.update(L),Zt=L.material;if(_t&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),bt.copy(L.boundingSphere.center)):(Yt.boundingSphere===null&&Yt.computeBoundingSphere(),bt.copy(Yt.boundingSphere.center)),bt.applyMatrix4(L.matrixWorld).applyMatrix4(j)),Array.isArray(Zt)){const Vt=Yt.groups;for(let ee=0,pe=Vt.length;ee<pe;ee++){const ue=Vt[ee],be=Zt[ue.materialIndex];be&&be.visible&&M.push(L,Yt,be,vt,bt.z,ue)}}else Zt.visible&&M.push(L,Yt,Zt,vt,bt.z,null)}}const Ht=L.children;for(let Yt=0,Zt=Ht.length;Yt<Zt;Yt++)Do(Ht[Yt],st,vt,_t)}function Ql(L,st,vt,_t){const rt=L.opaque,Ht=L.transmissive,Yt=L.transparent;_.setupLightsView(vt),et===!0&&Gt.setGlobalState(b.clippingPlanes,vt),_t&&mt.viewport(V.copy(_t)),rt.length>0&&ha(rt,st,vt),Ht.length>0&&ha(Ht,st,vt),Yt.length>0&&ha(Yt,st,vt),mt.buffers.depth.setTest(!0),mt.buffers.depth.setMask(!0),mt.buffers.color.setMask(!0),mt.setPolygonOffset(!1)}function Ss(L,st,vt,_t){if((vt.isScene===!0?vt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[_t.id]===void 0&&(_.state.transmissionRenderTarget[_t.id]=new Li(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")||St.has("EXT_color_buffer_float")?qi:Yi,minFilter:nr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const Ht=_.state.transmissionRenderTarget[_t.id],Yt=_t.viewport||V;Ht.setSize(Yt.z*b.transmissionResolutionScale,Yt.w*b.transmissionResolutionScale);const Zt=b.getRenderTarget(),Vt=b.getActiveCubeFace(),ee=b.getActiveMipmapLevel();b.setRenderTarget(Ht),b.getClearColor(pt),$=b.getClearAlpha(),$<1&&b.setClearColor(16777215,.5),b.clear(),wt&&te.render(vt);const pe=b.toneMapping;b.toneMapping=za;const ue=_t.viewport;if(_t.viewport!==void 0&&(_t.viewport=void 0),_.setupLightsView(_t),et===!0&&Gt.setGlobalState(b.clippingPlanes,_t),ha(L,vt,_t),It.updateMultisampleRenderTarget(Ht),It.updateRenderTargetMipmap(Ht),St.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Ve=0,en=st.length;Ve<en;Ve++){const Ie=st[Ve],Oe=Ie.object,fe=Ie.geometry,Be=Ie.material,Ee=Ie.group;if(Be.side===_i&&Oe.layers.test(_t.layers)){const Tn=Be.side;Be.side=qn,Be.needsUpdate=!0,Ms(Oe,vt,_t,fe,Be,Ee),Be.side=Tn,Be.needsUpdate=!0,be=!0}}be===!0&&(It.updateMultisampleRenderTarget(Ht),It.updateRenderTargetMipmap(Ht))}b.setRenderTarget(Zt,Vt,ee),b.setClearColor(pt,$),ue!==void 0&&(_t.viewport=ue),b.toneMapping=pe}function ha(L,st,vt){const _t=st.isScene===!0?st.overrideMaterial:null;for(let rt=0,Ht=L.length;rt<Ht;rt++){const Yt=L[rt],Zt=Yt.object,Vt=Yt.geometry,ee=Yt.group;let pe=Yt.material;pe.allowOverride===!0&&_t!==null&&(pe=_t),Zt.layers.test(vt.layers)&&Ms(Zt,st,vt,Vt,pe,ee)}}function Ms(L,st,vt,_t,rt,Ht){L.onBeforeRender(b,st,vt,_t,rt,Ht),L.modelViewMatrix.multiplyMatrices(vt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),rt.onBeforeRender(b,st,vt,_t,L,Ht),rt.transparent===!0&&rt.side===_i&&rt.forceSinglePass===!1?(rt.side=qn,rt.needsUpdate=!0,b.renderBufferDirect(vt,st,_t,rt,L,Ht),rt.side=xs,rt.needsUpdate=!0,b.renderBufferDirect(vt,st,_t,rt,L,Ht),rt.side=_i):b.renderBufferDirect(vt,st,_t,rt,L,Ht),L.onAfterRender(b,st,vt,_t,rt,Ht)}function Si(L,st,vt){st.isScene!==!0&&(st=Mt);const _t=Dt.get(L),rt=_.state.lights,Ht=_.state.shadowsArray,Yt=rt.state.version,Zt=gt.getParameters(L,rt.state,Ht,st,vt),Vt=gt.getProgramCacheKey(Zt);let ee=_t.programs;_t.environment=L.isMeshStandardMaterial?st.environment:null,_t.fog=st.fog,_t.envMap=(L.isMeshStandardMaterial?se:le).get(L.envMap||_t.environment),_t.envMapRotation=_t.environment!==null&&L.envMap===null?st.environmentRotation:L.envMapRotation,ee===void 0&&(L.addEventListener("dispose",Ut),ee=new Map,_t.programs=ee);let pe=ee.get(Vt);if(pe!==void 0){if(_t.currentProgram===pe&&_t.lightsStateVersion===Yt)return Fa(L,Zt),pe}else Zt.uniforms=gt.getUniforms(L),L.onBeforeCompile(Zt,b),pe=gt.acquireProgram(Zt,Vt),ee.set(Vt,pe),_t.uniforms=Zt.uniforms;const ue=_t.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ue.clippingPlanes=Gt.uniform),Fa(L,Zt),_t.needsLights=Jl(L),_t.lightsStateVersion=Yt,_t.needsLights&&(ue.ambientLightColor.value=rt.state.ambient,ue.lightProbe.value=rt.state.probe,ue.directionalLights.value=rt.state.directional,ue.directionalLightShadows.value=rt.state.directionalShadow,ue.spotLights.value=rt.state.spot,ue.spotLightShadows.value=rt.state.spotShadow,ue.rectAreaLights.value=rt.state.rectArea,ue.ltc_1.value=rt.state.rectAreaLTC1,ue.ltc_2.value=rt.state.rectAreaLTC2,ue.pointLights.value=rt.state.point,ue.pointLightShadows.value=rt.state.pointShadow,ue.hemisphereLights.value=rt.state.hemi,ue.directionalShadowMap.value=rt.state.directionalShadowMap,ue.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,ue.spotShadowMap.value=rt.state.spotShadowMap,ue.spotLightMatrix.value=rt.state.spotLightMatrix,ue.spotLightMap.value=rt.state.spotLightMap,ue.pointShadowMap.value=rt.state.pointShadowMap,ue.pointShadowMatrix.value=rt.state.pointShadowMatrix),_t.currentProgram=pe,_t.uniformsList=null,pe}function Es(L){if(L.uniformsList===null){const st=L.currentProgram.getUniforms();L.uniformsList=nf.seqWithValue(st.seq,L.uniforms)}return L.uniformsList}function Fa(L,st){const vt=Dt.get(L);vt.outputColorSpace=st.outputColorSpace,vt.batching=st.batching,vt.batchingColor=st.batchingColor,vt.instancing=st.instancing,vt.instancingColor=st.instancingColor,vt.instancingMorph=st.instancingMorph,vt.skinning=st.skinning,vt.morphTargets=st.morphTargets,vt.morphNormals=st.morphNormals,vt.morphColors=st.morphColors,vt.morphTargetsCount=st.morphTargetsCount,vt.numClippingPlanes=st.numClippingPlanes,vt.numIntersection=st.numClipIntersection,vt.vertexAlphas=st.vertexAlphas,vt.vertexTangents=st.vertexTangents,vt.toneMapping=st.toneMapping}function Kl(L,st,vt,_t,rt){st.isScene!==!0&&(st=Mt),It.resetTextureUnits();const Ht=st.fog,Yt=_t.isMeshStandardMaterial?st.environment:null,Zt=O===null?b.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:Mo,Vt=(_t.isMeshStandardMaterial?se:le).get(_t.envMap||Yt),ee=_t.vertexColors===!0&&!!vt.attributes.color&&vt.attributes.color.itemSize===4,pe=!!vt.attributes.tangent&&(!!_t.normalMap||_t.anisotropy>0),ue=!!vt.morphAttributes.position,be=!!vt.morphAttributes.normal,Ve=!!vt.morphAttributes.color;let en=za;_t.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(en=b.toneMapping);const Ie=vt.morphAttributes.position||vt.morphAttributes.normal||vt.morphAttributes.color,Oe=Ie!==void 0?Ie.length:0,fe=Dt.get(_t),Be=_.state.lights;if(et===!0&&(K===!0||L!==A)){const cn=L===A&&_t.id===N;Gt.setState(_t,L,cn)}let Ee=!1;_t.version===fe.__version?(fe.needsLights&&fe.lightsStateVersion!==Be.state.version||fe.outputColorSpace!==Zt||rt.isBatchedMesh&&fe.batching===!1||!rt.isBatchedMesh&&fe.batching===!0||rt.isBatchedMesh&&fe.batchingColor===!0&&rt.colorTexture===null||rt.isBatchedMesh&&fe.batchingColor===!1&&rt.colorTexture!==null||rt.isInstancedMesh&&fe.instancing===!1||!rt.isInstancedMesh&&fe.instancing===!0||rt.isSkinnedMesh&&fe.skinning===!1||!rt.isSkinnedMesh&&fe.skinning===!0||rt.isInstancedMesh&&fe.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&fe.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&fe.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&fe.instancingMorph===!1&&rt.morphTexture!==null||fe.envMap!==Vt||_t.fog===!0&&fe.fog!==Ht||fe.numClippingPlanes!==void 0&&(fe.numClippingPlanes!==Gt.numPlanes||fe.numIntersection!==Gt.numIntersection)||fe.vertexAlphas!==ee||fe.vertexTangents!==pe||fe.morphTargets!==ue||fe.morphNormals!==be||fe.morphColors!==Ve||fe.toneMapping!==en||fe.morphTargetsCount!==Oe)&&(Ee=!0):(Ee=!0,fe.__version=_t.version);let Tn=fe.currentProgram;Ee===!0&&(Tn=Si(_t,st,rt));let oi=!1,Pe=!1,Ha=!1;const Je=Tn.getUniforms(),jn=fe.uniforms;if(mt.useProgram(Tn.program)&&(oi=!0,Pe=!0,Ha=!0),_t.id!==N&&(N=_t.id,Pe=!0),oi||A!==L){mt.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Je.setValue(k,"projectionMatrix",L.projectionMatrix),Je.setValue(k,"viewMatrix",L.matrixWorldInverse);const Fn=Je.map.cameraPosition;Fn!==void 0&&Fn.setValue(k,yt.setFromMatrixPosition(L.matrixWorld)),ht.logarithmicDepthBuffer&&Je.setValue(k,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(_t.isMeshPhongMaterial||_t.isMeshToonMaterial||_t.isMeshLambertMaterial||_t.isMeshBasicMaterial||_t.isMeshStandardMaterial||_t.isShaderMaterial)&&Je.setValue(k,"isOrthographic",L.isOrthographicCamera===!0),A!==L&&(A=L,Pe=!0,Ha=!0)}if(rt.isSkinnedMesh){Je.setOptional(k,rt,"bindMatrix"),Je.setOptional(k,rt,"bindMatrixInverse");const cn=rt.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Je.setValue(k,"boneTexture",cn.boneTexture,It))}rt.isBatchedMesh&&(Je.setOptional(k,rt,"batchingTexture"),Je.setValue(k,"batchingTexture",rt._matricesTexture,It),Je.setOptional(k,rt,"batchingIdTexture"),Je.setValue(k,"batchingIdTexture",rt._indirectTexture,It),Je.setOptional(k,rt,"batchingColorTexture"),rt._colorsTexture!==null&&Je.setValue(k,"batchingColorTexture",rt._colorsTexture,It));const mn=vt.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Pt.update(rt,vt,Tn),(Pe||fe.receiveShadow!==rt.receiveShadow)&&(fe.receiveShadow=rt.receiveShadow,Je.setValue(k,"receiveShadow",rt.receiveShadow)),_t.isMeshGouraudMaterial&&_t.envMap!==null&&(jn.envMap.value=Vt,jn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),_t.isMeshStandardMaterial&&_t.envMap===null&&st.environment!==null&&(jn.envMapIntensity.value=st.environmentIntensity),Pe&&(Je.setValue(k,"toneMappingExposure",b.toneMappingExposure),fe.needsLights&&xf(jn,Ha),Ht&&_t.fog===!0&&Lt.refreshFogUniforms(jn,Ht),Lt.refreshMaterialUniforms(jn,_t,B,U,_.state.transmissionRenderTarget[L.id]),nf.upload(k,Es(fe),jn,It)),_t.isShaderMaterial&&_t.uniformsNeedUpdate===!0&&(nf.upload(k,Es(fe),jn,It),_t.uniformsNeedUpdate=!1),_t.isSpriteMaterial&&Je.setValue(k,"center",rt.center),Je.setValue(k,"modelViewMatrix",rt.modelViewMatrix),Je.setValue(k,"normalMatrix",rt.normalMatrix),Je.setValue(k,"modelMatrix",rt.matrixWorld),_t.isShaderMaterial||_t.isRawShaderMaterial){const cn=_t.uniformsGroups;for(let Fn=0,fr=cn.length;Fn<fr;Fn++){const ji=cn[Fn];re.update(ji,Tn),re.bind(ji,Tn)}}return Tn}function xf(L,st){L.ambientLightColor.needsUpdate=st,L.lightProbe.needsUpdate=st,L.directionalLights.needsUpdate=st,L.directionalLightShadows.needsUpdate=st,L.pointLights.needsUpdate=st,L.pointLightShadows.needsUpdate=st,L.spotLights.needsUpdate=st,L.spotLightShadows.needsUpdate=st,L.rectAreaLights.needsUpdate=st,L.hemisphereLights.needsUpdate=st}function Jl(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(L,st,vt){const _t=Dt.get(L);_t.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,_t.__autoAllocateDepthBuffer===!1&&(_t.__useRenderToTexture=!1),Dt.get(L.texture).__webglTexture=st,Dt.get(L.depthTexture).__webglTexture=_t.__autoAllocateDepthBuffer?void 0:vt,_t.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,st){const vt=Dt.get(L);vt.__webglFramebuffer=st,vt.__useDefaultFramebuffer=st===void 0};const No=k.createFramebuffer();this.setRenderTarget=function(L,st=0,vt=0){O=L,z=st,I=vt;let _t=!0,rt=null,Ht=!1,Yt=!1;if(L){const Vt=Dt.get(L);if(Vt.__useDefaultFramebuffer!==void 0)mt.bindFramebuffer(k.FRAMEBUFFER,null),_t=!1;else if(Vt.__webglFramebuffer===void 0)It.setupRenderTarget(L);else if(Vt.__hasExternalTextures)It.rebindTextures(L,Dt.get(L.texture).__webglTexture,Dt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const ue=L.depthTexture;if(Vt.__boundDepthTexture!==ue){if(ue!==null&&Dt.has(ue)&&(L.width!==ue.image.width||L.height!==ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");It.setupDepthRenderbuffer(L)}}const ee=L.texture;(ee.isData3DTexture||ee.isDataArrayTexture||ee.isCompressedArrayTexture)&&(Yt=!0);const pe=Dt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(pe[st])?rt=pe[st][vt]:rt=pe[st],Ht=!0):L.samples>0&&It.useMultisampledRTT(L)===!1?rt=Dt.get(L).__webglMultisampledFramebuffer:Array.isArray(pe)?rt=pe[vt]:rt=pe,V.copy(L.viewport),Y.copy(L.scissor),J=L.scissorTest}else V.copy(Nt).multiplyScalar(B).floor(),Y.copy(Rt).multiplyScalar(B).floor(),J=Qt;if(vt!==0&&(rt=No),mt.bindFramebuffer(k.FRAMEBUFFER,rt)&&_t&&mt.drawBuffers(L,rt),mt.viewport(V),mt.scissor(Y),mt.setScissorTest(J),Ht){const Vt=Dt.get(L.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+st,Vt.__webglTexture,vt)}else if(Yt){const Vt=st;for(let ee=0;ee<L.textures.length;ee++){const pe=Dt.get(L.textures[ee]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+ee,pe.__webglTexture,vt,Vt)}}else if(L!==null&&vt!==0){const Vt=Dt.get(L.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Vt.__webglTexture,vt)}N=-1},this.readRenderTargetPixels=function(L,st,vt,_t,rt,Ht,Yt,Zt=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=Dt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Yt!==void 0&&(Vt=Vt[Yt]),Vt){mt.bindFramebuffer(k.FRAMEBUFFER,Vt);try{const ee=L.textures[Zt],pe=ee.format,ue=ee.type;if(!ht.textureFormatReadable(pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable(ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}st>=0&&st<=L.width-_t&&vt>=0&&vt<=L.height-rt&&(L.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Zt),k.readPixels(st,vt,_t,rt,ie.convert(pe),ie.convert(ue),Ht))}finally{const ee=O!==null?Dt.get(O).__webglFramebuffer:null;mt.bindFramebuffer(k.FRAMEBUFFER,ee)}}},this.readRenderTargetPixelsAsync=async function(L,st,vt,_t,rt,Ht,Yt,Zt=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=Dt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Yt!==void 0&&(Vt=Vt[Yt]),Vt)if(st>=0&&st<=L.width-_t&&vt>=0&&vt<=L.height-rt){mt.bindFramebuffer(k.FRAMEBUFFER,Vt);const ee=L.textures[Zt],pe=ee.format,ue=ee.type;if(!ht.textureFormatReadable(pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,be),k.bufferData(k.PIXEL_PACK_BUFFER,Ht.byteLength,k.STREAM_READ),L.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Zt),k.readPixels(st,vt,_t,rt,ie.convert(pe),ie.convert(ue),0);const Ve=O!==null?Dt.get(O).__webglFramebuffer:null;mt.bindFramebuffer(k.FRAMEBUFFER,Ve);const en=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await FT(k,en,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,be),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ht),k.deleteBuffer(be),k.deleteSync(en),Ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,st=null,vt=0){const _t=Math.pow(2,-vt),rt=Math.floor(L.image.width*_t),Ht=Math.floor(L.image.height*_t),Yt=st!==null?st.x:0,Zt=st!==null?st.y:0;It.setTexture2D(L,0),k.copyTexSubImage2D(k.TEXTURE_2D,vt,0,0,Yt,Zt,rt,Ht),mt.unbindTexture()};const Ts=k.createFramebuffer(),Sf=k.createFramebuffer();this.copyTextureToTexture=function(L,st,vt=null,_t=null,rt=0,Ht=null){Ht===null&&(rt!==0?(kl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ht=rt,rt=0):Ht=0);let Yt,Zt,Vt,ee,pe,ue,be,Ve,en;const Ie=L.isCompressedTexture?L.mipmaps[Ht]:L.image;if(vt!==null)Yt=vt.max.x-vt.min.x,Zt=vt.max.y-vt.min.y,Vt=vt.isBox3?vt.max.z-vt.min.z:1,ee=vt.min.x,pe=vt.min.y,ue=vt.isBox3?vt.min.z:0;else{const mn=Math.pow(2,-rt);Yt=Math.floor(Ie.width*mn),Zt=Math.floor(Ie.height*mn),L.isDataArrayTexture?Vt=Ie.depth:L.isData3DTexture?Vt=Math.floor(Ie.depth*mn):Vt=1,ee=0,pe=0,ue=0}_t!==null?(be=_t.x,Ve=_t.y,en=_t.z):(be=0,Ve=0,en=0);const Oe=ie.convert(st.format),fe=ie.convert(st.type);let Be;st.isData3DTexture?(It.setTexture3D(st,0),Be=k.TEXTURE_3D):st.isDataArrayTexture||st.isCompressedArrayTexture?(It.setTexture2DArray(st,0),Be=k.TEXTURE_2D_ARRAY):(It.setTexture2D(st,0),Be=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,st.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,st.unpackAlignment);const Ee=k.getParameter(k.UNPACK_ROW_LENGTH),Tn=k.getParameter(k.UNPACK_IMAGE_HEIGHT),oi=k.getParameter(k.UNPACK_SKIP_PIXELS),Pe=k.getParameter(k.UNPACK_SKIP_ROWS),Ha=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ie.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ie.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ee),k.pixelStorei(k.UNPACK_SKIP_ROWS,pe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ue);const Je=L.isDataArrayTexture||L.isData3DTexture,jn=st.isDataArrayTexture||st.isData3DTexture;if(L.isDepthTexture){const mn=Dt.get(L),cn=Dt.get(st),Fn=Dt.get(mn.__renderTarget),fr=Dt.get(cn.__renderTarget);mt.bindFramebuffer(k.READ_FRAMEBUFFER,Fn.__webglFramebuffer),mt.bindFramebuffer(k.DRAW_FRAMEBUFFER,fr.__webglFramebuffer);for(let ji=0;ji<Vt;ji++)Je&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Dt.get(L).__webglTexture,rt,ue+ji),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Dt.get(st).__webglTexture,Ht,en+ji)),k.blitFramebuffer(ee,pe,Yt,Zt,be,Ve,Yt,Zt,k.DEPTH_BUFFER_BIT,k.NEAREST);mt.bindFramebuffer(k.READ_FRAMEBUFFER,null),mt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(rt!==0||L.isRenderTargetTexture||Dt.has(L)){const mn=Dt.get(L),cn=Dt.get(st);mt.bindFramebuffer(k.READ_FRAMEBUFFER,Ts),mt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Sf);for(let Fn=0;Fn<Vt;Fn++)Je?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,mn.__webglTexture,rt,ue+Fn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,mn.__webglTexture,rt),jn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,cn.__webglTexture,Ht,en+Fn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,cn.__webglTexture,Ht),rt!==0?k.blitFramebuffer(ee,pe,Yt,Zt,be,Ve,Yt,Zt,k.COLOR_BUFFER_BIT,k.NEAREST):jn?k.copyTexSubImage3D(Be,Ht,be,Ve,en+Fn,ee,pe,Yt,Zt):k.copyTexSubImage2D(Be,Ht,be,Ve,ee,pe,Yt,Zt);mt.bindFramebuffer(k.READ_FRAMEBUFFER,null),mt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else jn?L.isDataTexture||L.isData3DTexture?k.texSubImage3D(Be,Ht,be,Ve,en,Yt,Zt,Vt,Oe,fe,Ie.data):st.isCompressedArrayTexture?k.compressedTexSubImage3D(Be,Ht,be,Ve,en,Yt,Zt,Vt,Oe,Ie.data):k.texSubImage3D(Be,Ht,be,Ve,en,Yt,Zt,Vt,Oe,fe,Ie):L.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ht,be,Ve,Yt,Zt,Oe,fe,Ie.data):L.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ht,be,Ve,Ie.width,Ie.height,Oe,Ie.data):k.texSubImage2D(k.TEXTURE_2D,Ht,be,Ve,Yt,Zt,Oe,fe,Ie);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ee),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Tn),k.pixelStorei(k.UNPACK_SKIP_PIXELS,oi),k.pixelStorei(k.UNPACK_SKIP_ROWS,Pe),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ha),Ht===0&&st.generateMipmaps&&k.generateMipmap(Be),mt.unbindTexture()},this.initRenderTarget=function(L){Dt.get(L).__webglFramebuffer===void 0&&It.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?It.setTextureCube(L,0):L.isData3DTexture?It.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?It.setTexture2DArray(L,0):It.setTexture2D(L,0),mt.unbindTexture()},this.resetState=function(){z=0,I=0,O=null,mt.reset(),ut.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return la}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const af={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Ro{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const FR=new t0(-1,1,1,-1,0,1);class HR extends pn{constructor(){super(),this.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ge([0,2,0,0,2,0],2))}}const GR=new HR;class n0{constructor(t){this._mesh=new sn(GR,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,FR)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class VR extends Ro{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof nn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Xl.clone(t.uniforms),this.material=new nn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new n0(this.material)}render(t,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ox extends Ro{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,s){const l=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let f,d;this.inverse?(f=0,d=1):(f=1,d=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,f,4294967295),c.buffers.stencil.setClear(d),c.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class kR extends Ro{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class XR{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const s=t.getSize(new Ft);this._width=s.width,this._height=s.height,i=new Li(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:qi}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new VR(af),this.copyPass.material.blending=Pa,this.clock=new DS}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,c=this.passes.length;l<c;l++){const f=this.passes[l];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),f.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),f.needsSwap){if(s){const d=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),p.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}Ox!==void 0&&(f instanceof Ox?s=!0:f instanceof kR&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new Ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class qR extends Ro{constructor(t,i,s=null,l=null,c=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new oe}render(t,i,s){const l=t.autoClear;t.autoClear=!1;let c,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),t.autoClear=l}}const YR={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new oe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class bo extends Ro{constructor(t,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=t!==void 0?new Ft(t.x,t.y):new Ft(256,256),this.clearColor=new oe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new Li(c,f,{type:qi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const g=new Li(c,f,{type:qi});g.texture.name="UnrealBloomPass.h"+v,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const y=new Li(c,f,{type:qi});y.texture.name="UnrealBloomPass.v"+v,y.texture.generateMipmaps=!1,this.renderTargetsVertical.push(y),c=Math.round(c/2),f=Math.round(f/2)}const d=YR;this.highPassUniforms=Xl.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new nn({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const p=[3,5,7,9,11];c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new Ft(1/c,1/f),c=Math.round(c/2),f=Math.round(f/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const m=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=m,this.bloomTintColors=[new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1),new G(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Xl.clone(af.uniforms),this.blendMaterial=new nn({uniforms:this.copyUniforms,vertexShader:af.vertexShader,fragmentShader:af.fragmentShader,blending:ir,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new oe,this._oldClearAlpha=1,this._basic=new sr,this._fsQuad=new n0(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let s=Math.round(t/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(s,l),this.renderTargetsVertical[c].setSize(s,l),this.separableBlurMaterials[c].uniforms.invSize.value=new Ft(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(t,i,s,l,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const f=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let d=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[p].uniforms.direction.value=bo.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[p]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=bo.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[p]),t.clear(),this._fsQuad.render(t),d=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(s),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=f}_getSeparableBlurMaterial(t){const i=[];for(let s=0;s<t;s++)i.push(.39894*Math.exp(-.5*s*s/(t*t))/t);return new nn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ft(.5,.5)},direction:{value:new Ft(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`varying vec2 vUv;
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
				}`})}_getCompositeMaterial(t){return new nn({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}bo.BlurDirectionX=new Ft(1,0);bo.BlurDirectionY=new Ft(0,1);const Wu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class jR extends Ro{constructor(){super(),this.uniforms=Xl.clone(Wu.uniforms),this.material=new Zb({name:Wu.name,uniforms:this.uniforms,vertexShader:Wu.vertexShader,fragmentShader:Wu.fragmentShader}),this._fsQuad=new n0(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,i,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Le.getTransfer(this._outputColorSpace)===je&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===qx?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Yx?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===jx?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Lm?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Zx?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Qx?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Wx&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Zu=(r,t,i)=>Math.min(i,Math.max(t,r)),Qu=(r,t,i,s)=>t+(r-t)*Math.exp(-i*s),zS=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]);class WR{constructor(){de(this,"shipQuaternion",new Xn);de(this,"lookQuaternion",new Xn);de(this,"position",new G);de(this,"yaw",0);de(this,"pitch",0);de(this,"yawVelocity",0);de(this,"pitchVelocity",0);de(this,"speed",0);de(this,"lookYaw",0);de(this,"lookPitch",0);de(this,"lookTargetYaw",0);de(this,"lookTargetPitch",0);de(this,"touchX",0);de(this,"touchY",0);de(this,"touchSteering",!1);de(this,"keys",new Set);de(this,"elapsed",0);de(this,"lastContext","");de(this,"euler",new xi(0,0,0,"YXZ"));de(this,"forward",new G)}key(t,i){zS.has(t)&&(i?this.touchSteering||this.keys.add(t):this.keys.delete(t))}steerTouch(t,i,s){this.touchSteering=s,this.keys.clear();const l=Math.hypot(t,i),c=s?Zu((l-.1)/.9,0,1):0;this.touchX=l?t/l*c:0,this.touchY=l?i/l*c:0}look(t,i,s,l){if(l.paused||l.blocked)return;const c=s?l.touchSensitivity:l.sensitivity,f=this.lookTargetYaw-Zu(t,-.2,.2)*c*1.6*(!s&&l.invertMouseX?-1:1);this.lookTargetYaw=Math.atan2(Math.sin(f),Math.cos(f)),this.lookTargetPitch=Zu(this.lookTargetPitch-Zu(i,-.2,.2)*c*1.6*(!s&&l.invertMouseY?-1:1),-1.48,1.48)}centerLook(){this.lookTargetYaw=this.lookTargetPitch=0}reset(t=!1){this.keys.clear(),this.steerTouch(0,0,!1),t&&(this.yawVelocity=this.pitchVelocity=0,this.lookTargetYaw=this.lookYaw,this.lookTargetPitch=this.lookPitch)}step(t,i){const s=`${i.mode}/${i.paused}/${i.started}/${i.blocked}`;if(this.lastContext&&s!==this.lastContext&&this.reset(i.paused||i.blocked),this.lastContext=s,!Number.isFinite(t)||t<=0||t>.25||i.paused)return;const l=Math.min(t,.1);this.elapsed+=l;const c=i.mode==="Manual Flight"&&i.started&&!i.blocked;let f=0,d=0;if(c){f=this.touchSteering?this.touchX:Number(this.keys.has("KeyD")||this.keys.has("ArrowRight"))-Number(this.keys.has("KeyA")||this.keys.has("ArrowLeft")),d=this.touchSteering?this.touchY:Number(this.keys.has("KeyS")||this.keys.has("ArrowDown"))-Number(this.keys.has("KeyW")||this.keys.has("ArrowUp"));const w=Math.max(1,Math.hypot(f,d));f/=w,d/=w}const p=i.reduced?.45:1,m=this.touchSteering?i.touchSensitivity:i.sensitivity,v=i.started&&i.mode!=="Manual Flight"&&!i.blocked&&!i.reduced?i.motion*(i.mode==="Meditation"?.002:.006):0,g=c?-f*.22*m*p:Math.sin(this.elapsed*.055)*v,y=c?-d*.16*m*p:Math.sin(this.elapsed*.08)*v*.3,x=3,E=(1-Math.exp(-x*l))/x;this.yaw+=g*l+(this.yawVelocity-g)*E,this.pitch+=y*l+(this.pitchVelocity-y)*E,this.yawVelocity=Qu(this.yawVelocity,g,x,l),this.pitchVelocity=Qu(this.pitchVelocity,y,x,l),this.pitch=Math.atan2(Math.sin(this.pitch),Math.cos(this.pitch)),this.yaw=Math.atan2(Math.sin(this.yaw),Math.cos(this.yaw)),this.shipQuaternion.setFromEuler(this.euler.set(this.pitch,this.yaw,0,"YXZ"));const T=Math.atan2(Math.sin(this.lookTargetYaw-this.lookYaw),Math.cos(this.lookTargetYaw-this.lookYaw));this.lookYaw+=T*(1-Math.exp(-6*l)),this.lookYaw=Math.atan2(Math.sin(this.lookYaw),Math.cos(this.lookYaw)),this.lookPitch=Qu(this.lookPitch,this.lookTargetPitch,6,l),this.lookQuaternion.setFromEuler(this.euler.set(this.lookPitch,this.lookYaw,0,"YXZ"));const M=i.started?Math.max(0,i.speed)*(i.mode==="Meditation"?.15:1)*(i.reduced?.3:1):2,_=M*l+(this.speed-M)*(1-Math.exp(-.8*l))/.8;this.speed=Qu(this.speed,M,.8,l),this.forward.set(0,0,-1).applyQuaternion(this.shipQuaternion),this.position.addScaledVector(this.forward,_)}}function ZR(r,t,i,s){let l=null,c=null,f="";const d=[],p=(_,w,C,b)=>{_.addEventListener(w,C,b),d.push(()=>_.removeEventListener(w,C,b))},m=()=>!s().paused&&!s().blocked&&document.visibilityState!=="hidden",v=()=>m()&&s().started&&s().mode==="Manual Flight",g=(_,w)=>{t.style.setProperty("--stick-x",`${_*34}px`),t.style.setProperty("--stick-y",`${w*34}px`)},y=()=>{const _=l;l=null,_&&r.hasPointerCapture(_.id)&&r.releasePointerCapture(_.id)},x=()=>{const _=c;c=null,i.steerTouch(0,0,!1),g(0,0),_!==null&&t.hasPointerCapture(_)&&t.releasePointerCapture(_)},E=()=>{y(),x(),i.reset(!0)};p(r,"pointerdown",(_=>{!m()||l||_.pointerType==="mouse"&&(_.button!==0||c!==null)||(_.preventDefault(),l={id:_.pointerId,type:_.pointerType,x:_.clientX,y:_.clientY},r.setPointerCapture(_.pointerId))})),p(r,"pointermove",(_=>{if((l==null?void 0:l.id)!==_.pointerId)return;if(!m()||_.pointerType==="mouse"&&!(_.buttons&1)){y();return}_.preventDefault();const w=Math.max(240,Math.min(r.clientWidth,r.clientHeight));i.look((_.clientX-l.x)/w,(_.clientY-l.y)/w,l.type!=="mouse",s()),l.x=_.clientX,l.y=_.clientY}));for(const _ of["pointerup","pointercancel","lostpointercapture"])p(r,_,(w=>{w.pointerId===(l==null?void 0:l.id)&&y()}));const T=_=>{const w=t.getBoundingClientRect();let C=(_.clientX-w.left-w.width/2)/(w.width*.35),b=(_.clientY-w.top-w.height/2)/(w.height*.35);const P=Math.max(1,Math.hypot(C,b));C/=P,b/=P,i.steerTouch(C,b,!0),g(C,b)};p(t,"pointerdown",(_=>{_.pointerType==="mouse"||c!==null||!v()||(_.preventDefault(),_.stopPropagation(),(l==null?void 0:l.type)==="mouse"&&y(),c=_.pointerId,t.setPointerCapture(_.pointerId),T(_))})),p(t,"pointermove",(_=>{if(_.pointerId===c){if(!v()){x();return}_.preventDefault(),T(_)}}));for(const _ of["pointerup","pointercancel","lostpointercapture"])p(t,_,(w=>{w.pointerId===c&&x()}));const M=_=>_ instanceof HTMLElement&&!!_.closest('input,select,textarea,[contenteditable="true"]');return p(window,"keydown",(_=>{!zS.has(_.code)||M(_.target)||!v()||_.ctrlKey||_.metaKey||_.altKey||(_.preventDefault(),i.key(_.code,!0))})),p(window,"keyup",(_=>i.key(_.code,!1))),p(window,"blur",E),p(document,"visibilitychange",E),p(window,"resize",E),p(window,"orientationchange",E),p(r,"contextmenu",_=>_.preventDefault()),p(t,"contextmenu",_=>_.preventDefault()),{sync(){const _=s(),w=`${_.mode}/${_.paused}/${_.started}/${_.blocked}`;f&&w!==f&&(y(),x(),i.reset(_.paused||_.blocked)),f=w},dispose(){E(),d.forEach(_=>_())}}}function QR(r,t,i){if(!Number.isFinite(t)||t<=0||t>.25||i.paused){r.step(0,i);return}const s=Math.ceil(t/(1/60)),l=t/s;for(let c=0;c<s;c++)r.step(l,i)}class KR{constructor(){de(this,"scale",1);de(this,"elapsed",0);de(this,"average",1/60);de(this,"nextDecision",3)}reset(){this.scale=1,this.elapsed=0,this.average=1/60,this.nextDecision=3}observe(t,i,s){if(!i||s||!Number.isFinite(t)||t<=0||t>1||(this.elapsed+=t,this.average+=(Math.min(t,.2)-this.average)*(1-Math.exp(-t/1.5)),this.elapsed<this.nextDecision))return!1;const l=this.scale;return this.average>.028?(this.scale=Math.max(.6,Math.round((this.scale-.1)*100)/100),this.nextDecision=this.elapsed+3):this.average<.018?(this.scale=Math.min(1,Math.round((this.scale+.05)*100)/100),this.nextDecision=this.elapsed+10):this.nextDecision=this.elapsed+3,l!==this.scale}}const Dl=r=>(r=Math.max(0,Math.min(1,r)),r*r*(3-2*r)),JR=[2,4,1,0,3],$R=10.2;class IS{constructor(){de(this,"phase","idle");de(this,"elapsed",0);de(this,"destination",0);de(this,"seed",7123);de(this,"committed",!1);de(this,"justCommitted",!1);de(this,"energy",0);de(this,"charge",0);de(this,"veil",0)}get busy(){return this.phase!=="idle"}start(t,i,s=!1){return this.busy||s?!1:(this.destination=JR[t]??(t+1)%5,this.seed=Math.imul(i|0,1664525)+1013904223>>>0||1,this.elapsed=0,this.committed=!1,this.justCommitted=!1,this.energy=0,this.veil=0,this.charge=0,this.phase="charging",!0)}advance(t,i=!1){if(this.justCommitted=!1,!this.busy||i||!Number.isFinite(t)||t<=0)return;this.elapsed+=Math.min(t,.25);const s=this.elapsed;s<1.4?(this.phase="charging",this.charge=Dl(s/1.4),this.energy=this.charge*.035):s<4?(this.phase="accelerating",this.charge=1,this.energy=.035+.965*Dl((s-1.4)/2.6)):s<5.6?(this.phase="transit",this.charge=1,this.energy=1):s<9?(this.phase="arriving",this.energy=1-Dl((s-5.6)/3.4),this.charge=this.energy):s<$R?(this.phase="stabilized",this.energy=0,this.charge=0):(this.phase="idle",this.energy=0,this.charge=0),this.veil=s<4?0:s<4.8?Dl((s-4)/.8):s<5.6?1:1-Dl((s-5.6)/1.7),!this.committed&&s>=4.8&&(this.committed=!0,this.justCommitted=!0)}}function t3(r){const i=new Float32Array(4680),s=new Float32Array(780*2),l=new Float32Array(780*2*3);let c=4171;const f=()=>(c=c*16807%2147483647,(c-1)/2147483646);for(let E=0;E<780;E++){const T=f()*Math.PI*2,M=18+Math.pow(f(),1.3)*550,_=f();for(let w=0;w<2;w++)i.set([Math.cos(T)*M,Math.sin(T)*M*.72,_],(E*2+w)*3),s[E*2+w]=w}const d=new pn;d.setAttribute("position",new hn(l,3)),d.setAttribute("lane",new hn(i,3)),d.setAttribute("endpoint",new hn(s,1));const p={time:{value:0},energy:{value:0},tint:{value:new oe("#b7d8ef")}},m=new oe("#d4ecfa"),v=new nn({uniforms:p,transparent:!0,depthWrite:!1,blending:ir,vertexShader:`attribute vec3 lane;attribute float endpoint;uniform float time,energy;varying float fade;
      void main(){float z=-12.-fract(lane.z+time)*800.;float trailLength=energy*(22.+energy*155.);
      vec3 p=vec3(lane.xy,z-endpoint*trailLength);fade=smoothstep(15.,65.,-z)*(1.-smoothstep(650.,810.,-z))*(.35+endpoint*.4);
      gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,fragmentShader:`uniform float energy;uniform vec3 tint;varying float fade;void main(){gl_FragColor=vec4(tint*1.35,fade*energy*.7);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`}),g=new gb(d,v);g.name="light-jump-streaks",g.frustumCulled=!1,g.renderOrder=3,r.add(g);let y=!0,x=0;return{configure(E,T){d.setDrawRange(0,(T?70:E==="Low"?180:E==="Medium"?420:780)*2),y=!0},update(E,T,M){T>0&&(x+=E*(.18+T*1.7)),p.time.value=x,p.energy.value=T,p.tint.value.copy(M).lerp(m,.7),g.visible=T>.001||y,y=!1}}}function Rm(r,t,i=!0){let s=(r^Math.imul(t,2654435761))>>>0;const l=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296),c=r===7123&&t===0,f=c?new G(500,200,-3e3):new G((l()-.5)*1800,(l()-.5)*1200,(l()-.5)*1800),d=300+l()*200,p=new oe(["#ffd4a0","#a9d5ff","#ffe8bc","#ffc1ab","#d6dbff"][(r>>>3)%5]),m=8+Math.floor(l()*5),v=l()*Math.PI*2,g=(l()-.5)*.65,y=Array.from({length:i?12:0},(E,T)=>{const M=v+T*2.39996+(l()-.5)*.35,_=800+T*260+l()*100,w=f.clone().add(new G(Math.cos(M)*_,Math.sin(M)*_*g,Math.sin(M)*_));c&&T===0&&w.set(-480,-45,-1500);const C=T%4===1?1:l()>.45?0:2,b=C===1?160+l()*100:55+l()*95,P=l()*100+1,z=new oe().setHSL((t*.14+T*.103+l()*.07)%1,.17+l()*.28,.28+l()*.16);return c&&T===0&&z.set("#315e9c"),{position:w,kind:C,radius:b,seed:P,color:z}}),x=c?"Perseus Anchorage":`${["Aster","Nyra","Vela","Lumen","Thal","Solis","Caeli"][r%7]}-${(r&65535).toString(16).padStart(4,"0").toUpperCase()}`;return{center:f,starRadius:d,starColor:p,count:m,planets:y,name:x}}const e3=`
varying vec3 localPoint, surfaceNormal, worldPoint;
void main(){localPoint=position;worldPoint=(modelMatrix*vec4(position,1.)).xyz;surfaceNormal=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`,n3=`
varying vec3 localPoint,surfaceNormal,worldPoint;
uniform vec3 baseColor,detailColor,lightDirection;
uniform float kind,alpha,seed,time;
float hash(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);}
float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+1.),f.x),f.y),f.z);}
void main(){
 if(alpha<.005)discard;
 if(kind>2.5){float activity=noise(localPoint*18.+seed+time*.012)*.55+noise(localPoint*47.+seed)*.15;float limb=sqrt(max(0.,dot(normalize(surfaceNormal),normalize(cameraPosition-worldPoint))));gl_FragColor=vec4(baseColor*(.8+activity)*(.62+limb*.7)*1.45,alpha);
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
`;function i3(r){const t=new Oa;t.name="regional-celestial-bodies",r.add(t);const i=new ca(1,32,20),s=new ca(1,16,10),l=new ca(1,8,6),c=A=>{const V=new nn({uniforms:{baseColor:{value:new oe("#718fa6")},detailColor:{value:new oe("#c7c6b0")},kind:{value:A},alpha:{value:1},seed:{value:1},time:{value:0},lightDirection:{value:new G(-.65,.4,.75)}},vertexShader:e3,fragmentShader:n3,transparent:!0,depthWrite:!0}),Y=new sn(i,V);return Y.renderOrder=4,Y.userData.kind=A>2.5?"star":A>1.5?"rocky-body":"planet",t.add(Y),Y},f=Array.from({length:12},()=>c(0)),d=Array.from({length:8},(A,V)=>{const Y=c(2);return Y.userData.kind="moon",{mesh:Y,parent:V}}),p=c(3);p.name="primary-star";const m=new sn(new Ba(1,1),new nn({uniforms:{baseColor:{value:new oe},alpha:{value:1}},transparent:!0,depthWrite:!1,blending:ir,vertexShader:"varying vec2 vUv;void main(){vUv=uv;vec4 center=modelViewMatrix*vec4(0.,0.,0.,1.);vec2 size=vec2(length(modelMatrix[0].xyz),length(modelMatrix[1].xyz));center.xy+=position.xy*size;gl_Position=projectionMatrix*center;}",fragmentShader:"varying vec2 vUv;uniform vec3 baseColor;uniform float alpha;void main(){float r=length(vUv-.5)*2.;float a=exp(-r*r*7.)*(1.-smoothstep(.7,1.,r));gl_FragColor=vec4(baseColor*1.3,a*alpha*.45);}"}));m.name="stellar-corona",m.frustumCulled=!1,m.renderOrder=3.5,t.add(m);const v=new sn(new Km(1.32,2.2,64),new nn({uniforms:{color:{value:new oe("#b8afa0")},alpha:{value:1}},transparent:!0,depthWrite:!1,side:_i,vertexShader:"varying vec2 p;void main(){p=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 p;uniform vec3 color;uniform float alpha;void main(){float r=length(p);float edge=smoothstep(1.32,1.42,r)*(1.-smoothstep(2.05,2.2,r));float bands=.35+.25*sin(r*180.)+.2*sin(r*47.);gl_FragColor=vec4(color*.7,edge*max(.1,bands)*alpha);}"}));v.name="planetary-ring",v.renderOrder=5,t.add(v);const g=new Xn().setFromEuler(new xi(1.12,.2,-.27)),y=new mo({color:"#7a858d",roughness:1,transparent:!0}),x=new fb(new Qm(1,0),y,96);x.name="distant-rock-cluster",t.add(x);const E=new G,T=new Xn,M=new G,_=new G;let w=Rm(7123,0),C=7123,b=0,P=!1,z="Medium",I=0;const O=(A,V,Y,J)=>{C=A,b=V,w=Rm(A,V),P=!0,E.copy(Y),J?T.copy(J):T.identity(),t.userData.systemName=w.name,f.forEach((U,B)=>{const it=w.planets[B],dt=U.material.uniforms;dt.baseColor.value.copy(it.color),dt.detailColor.value.copy(it.color).lerp(new oe("#d0d0b0"),.5),dt.seed.value=it.seed,dt.kind.value=it.kind,dt.lightDirection.value.copy(w.center).sub(it.position).applyQuaternion(T).normalize(),U.userData.kind=it.kind===2?"rocky-body":"planet"}),d.forEach(({mesh:U,parent:B},it)=>{U.material.uniforms.baseColor.value.copy(w.planets[B].color).lerp(new oe("#a4a5ac"),.7),U.material.uniforms.detailColor.value.set("#b7b4ab"),U.material.uniforms.seed.value=w.planets[B].seed+it*3.1}),p.material.uniforms.baseColor.value.copy(w.starColor),p.material.uniforms.seed.value=A%1e3,m.material.uniforms.baseColor.value.copy(w.starColor),v.material.uniforms.color.value.copy(w.planets[1].color).lerp(new oe("#e5d5b1"),.5);let pt=(A^20903)>>>0;const $=()=>(pt=Math.imul(pt,1664525)+1013904223>>>0,pt/4294967296),q=new Mn;for(let U=0;U<96;U++){const B=$()*Math.PI*2,it=2300+$()*650;q.position.set(Math.cos(B)*it,($()-.5)*160,Math.sin(B)*it),q.rotation.set($()*3,$()*3,$()*3);const dt=5+$()*13;q.scale.set(dt,dt*.7,dt*1.15),q.updateMatrix(),x.setMatrixAt(U,q.matrix)}x.instanceMatrix.needsUpdate=!0,x.computeBoundingSphere()},N=(A,V,Y,J)=>{A.position.copy(V).applyQuaternion(T).add(E).sub(J),A.scale.setScalar(Y)};return{group:t,reseed:O,setJump(A){I=A},configure(A){z=A,x.count=A==="Low"?48:A==="Medium"?72:96},update(A,V,Y,J){(!P||Y!==b)&&O(C,Y,E.clone(),T.clone());const pt=1-Sn.smoothstep(I,.12,.65);f.forEach(($,q)=>{const U=w.planets[q];$.visible=q<w.count,N($,U.position,U.radius,J),$.rotation.y=V*.002+q*.5,$.geometry=$.position.lengthSq()>6e3**2?l:z==="High"?i:s,$.material.uniforms.alpha.value=Sn.smoothstep($.position.length()/U.radius,1.05,1.4)*pt}),d.forEach(({mesh:$,parent:q},U)=>{const B=f[q],it=w.planets[q].radius;$.visible=B.visible,$.geometry=B.geometry,_.set(it*(2.2+U*.12),it*.6,it*.7).applyQuaternion(T),$.position.copy(B.position).add(_),$.scale.setScalar(Math.max(12,it*.18)),$.material.uniforms.alpha.value=B.material.uniforms.alpha.value}),N(p,w.center,w.starRadius,J),p.geometry=z==="High"?i:s,p.visible=!0,p.material.uniforms.time.value=V,p.material.uniforms.alpha.value=Sn.smoothstep(p.position.length()/w.starRadius,1.05,1.4)*pt,m.position.copy(p.position),m.scale.setScalar(w.starRadius*8),m.visible=!0,m.material.uniforms.alpha.value=p.material.uniforms.alpha.value,v.visible=!0,v.position.copy(f[1].position),v.scale.setScalar(w.planets[1].radius),v.quaternion.copy(T).multiply(g),v.material.uniforms.alpha.value=f[1].material.uniforms.alpha.value,M.copy(w.center).applyQuaternion(T).add(E).sub(J),x.position.copy(M),x.quaternion.copy(T),x.visible=!0,y.opacity=pt},dispose(){t.removeFromParent(),x.dispose();const A=new Set([i,s,l]),V=new Set;t.traverse(Y=>{if(Y instanceof sn){A.add(Y.geometry);for(const J of Array.isArray(Y.material)?Y.material:[Y.material])V.add(J)}}),A.forEach(Y=>Y.dispose()),V.forEach(Y=>Y.dispose())}}}const mf=14e3;function a3(r){return[r.x,r.y,r.z].map(t=>Math.floor((t+mf/2)/mf))}function Px(r,t,i){let s=(Math.imul(r,73856093)^Math.imul(t,19349663)^Math.imul(i,83492791)^7123)>>>0;const l=s,c=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296),f=r===0&&t===0&&i===0,d=f?0:l%5,p=new Xn().setFromEuler(new xi(c()*Math.PI*2,c()*Math.PI*2,c()*Math.PI*2));f&&p.identity();const m=new G(r,t,i).multiplyScalar(mf),v=Rm(l,d,!1),g=v.center.clone().applyQuaternion(p).add(m);return{key:`${r}/${t}/${i}`,seed:l,region:d,heading:p,anchor:m,starWorld:g,starColor:v.starColor,starRadius:v.starRadius,name:v.name}}function s3(r){const t=Array.from({length:27},()=>({bodies:i3(r),sector:null})),i=new Oa;i.name="distant-system-markers",r.add(i);const s=343,l=new Float32Array(s*3),c=new Float32Array(s*3),f=new Float32Array(s),d=new pn;d.setAttribute("position",new hn(l,3)),d.setAttribute("color",new hn(c,3)),d.setAttribute("size",new hn(f,1)),d.setDrawRange(0,s);const p=new G,m=new G,v=new G,g=new G,y=new nn({uniforms:{offset:{value:m},jump:{value:1}},vertexColors:!0,transparent:!0,depthWrite:!1,blending:ir,vertexShader:"attribute float size;uniform vec3 offset;uniform float jump;varying vec3 vColor;varying float visibility;void main(){vec3 p=position-offset;float d=length(p);visibility=smoothstep(10000.,14000.,d)*(1.-smoothstep(32000.,40000.,d))*jump;vColor=color;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(size*85000./max(100.,d),1.8,12.);}",fragmentShader:"varying vec3 vColor;varying float visibility;void main(){float d=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(vColor*1.6,exp(-d*d*5.)*visibility);}"}),x=new qm(d,y);x.frustumCulled=!1,x.renderOrder=3,i.add(x);const E={direction:new G(-.5,.7,-.3),color:new oe("#d9e6ff"),intensity:2};let T="",M="Medium";const _=w=>{const[C,b,P]=a3(w),z=`${C}/${b}/${P}`;if(z===T)return;T=z,p.set(C,b,P).multiplyScalar(mf);let I=0;for(let N=-3;N<=3;N++)for(let A=-3;A<=3;A++)for(let V=-3;V<=3;V++){const Y=Px(C+N,b+A,P+V);Y.starWorld.clone().sub(p).toArray(l,I*3),Y.starColor.toArray(c,I*3),f[I]=Y.starRadius/400,I++}d.attributes.position.needsUpdate=!0,d.attributes.color.needsUpdate=!0,d.attributes.size.needsUpdate=!0;const O=new Map;for(let N=-1;N<=1;N++)for(let A=-1;A<=1;A++)for(let V=-1;V<=1;V++){const Y=Px(C+N,b+A,P+V);O.set(Y.key,Y)}for(const N of t)N.sector&&O.has(N.sector.key)?O.delete(N.sector.key):N.sector=null;for(const N of O.values()){const A=t.find(V=>!V.sector);A.sector=N,A.bodies.reseed(N.seed,N.region,N.anchor,N.heading),A.bodies.update(1e3,0,N.region,w),A.bodies.configure(M)}};return{setJump(w){y.uniforms.jump.value=1-Sn.smoothstep(w,.12,.65);for(const C of t)C.bodies.setJump(w)},configure(w){M=w;for(const C of t)C.bodies.configure(w)},update(w,C,b,P){var z;_(P),m.copy(P).sub(p);for(const I of t){const O=I.sector;I.bodies.update(w,C,O.region,P);for(const N of I.bodies.group.children){const A=N.position.length(),V=1-Sn.smoothstep(A,1e4,13e3);if(N instanceof sn){const Y=N.material;(z=Y.uniforms)!=null&&z.alpha?Y.uniforms.alpha.value*=V:"opacity"in Y&&(Y.opacity*=V)}N.visible=N.visible&&V>0}}},lightAt(w){let C=t[0].sector,b=1/0;for(const P of t){if(!P.sector)continue;const z=P.sector.starWorld.distanceToSquared(w);z<b&&(C=P.sector,b=z)}return C&&(E.direction.copy(C.starWorld).sub(w).normalize(),E.color.copy(C.starColor),E.intensity=1.2+2.4/(1+b/25e6)),E},navigation(w,C){g.set(0,0,-1).applyQuaternion(C);let b=t[0].sector,P=1/0;for(const O of t){const N=O.sector.starWorld.distanceTo(w);N<P&&(b=O.sector,P=N)}let z=b,I=-1/0;for(const O of t){const N=O.sector;if(N.key===b.key)continue;v.copy(N.starWorld).sub(w);const A=v.length(),V=v.normalize().dot(g)-A/1e5;V>I&&(I=V,z=N)}return{current:P<5200?b.name:"Interstellar passage",next:z.name,distance:Math.round(z.starWorld.distanceTo(w))}},dispose(){for(const w of t)w.bodies.dispose();i.removeFromParent(),d.dispose(),y.dispose()}}}const Dm={Low:{pixelRatio:.9,stars:[550,2400,7800],cloudScale:.32,volumes:1,steps:4,octaves:2,bloom:!1},Medium:{pixelRatio:1,stars:[1e3,4800,19e3],cloudScale:.4,volumes:2,steps:7,octaves:2,bloom:!1},High:{pixelRatio:1.35,stars:[2200,1e4,48e3],cloudScale:.5,volumes:3,steps:10,octaves:3,bloom:!0}},zx={Dark:{exposure:.8,cabin:.7,nebula:.65},Balanced:{exposure:1.12,cabin:1,nebula:.9},Cinematic:{exposure:1.32,cabin:1.12,nebula:1.08}},La=[{name:"Violet Nebula",subtitle:"THE PERSEUS ARM",color:"#a879ef",second:"#315fab",accent:"#f4a4cf",density:1.05,band:.8,structure:1.15,bandWidth:1,warmth:.25,stars:.87,exposure:1},{name:"Stellar Ocean",subtitle:"AN ENDLESS SEA OF LIGHT",color:"#88bcf2",second:"#234a89",accent:"#c3dcff",density:.38,band:.7,structure:1.4,bandWidth:.65,warmth:.07,stars:1,exposure:1.04},{name:"Golden Core",subtitle:"THE HEART OF THE GALAXY",color:"#edbd79",second:"#956753",accent:"#fff2c9",density:.85,band:1.65,structure:1.8,bandWidth:1.4,warmth:.88,stars:1.4,exposure:.93},{name:"Cosmic Clouds",subtitle:"WHERE THE STARS ARE BORN",color:"#67cbbf",second:"#306c9c",accent:"#b1d5e8",density:1.3,band:.5,structure:.65,bandWidth:1.1,warmth:.16,stars:.7,exposure:1},{name:"Deep Silence",subtitle:"FAR FROM EVERYTHING",color:"#6d7fbb",second:"#253553",accent:"#a6b8e1",density:.12,band:.15,structure:.8,bandWidth:.45,warmth:.12,stars:.23,exposure:.84}],BS=`
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
`,r3=`
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
`,o3=`
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
`,l3=`
varying vec3 worldPoint;
void main(){vec4 p=modelMatrix*vec4(position,1.);worldPoint=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}
`,c3=`
precision highp float;
varying vec3 worldPoint;
uniform vec3 center, radii, tint, second, accent;
uniform float time, density, visibility, energy, seed, structure;
uniform int steps, octaves;
uniform mat3 volumeRotation;
${BS}
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
`,u3=`
varying vec3 direction;
void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`,f3=`
varying vec3 direction;
uniform vec3 tint, second, accent;
uniform float band, density, energy, bandWidth;
uniform mat3 layoutRotation, destinationRotation, volumeRotation;
uniform int octaves;
${BS}
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
`;function h3(r){const t=La[0],i=new gS,s=new Li(1,1,{type:qi,depthBuffer:!1}),l=new ye,c={sky:{value:s.texture},reprojection:{value:l},tanHalf:{value:.6745},wideTanHalf:{value:.7554},aspect:{value:1},veil:{value:0},jumpTint:{value:new oe("#92bce0")}},f=new sn(new Ba(2,2),new nn({uniforms:c,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 uvv;void main(){uvv=uv;gl_Position=vec4(position.xy,1.,1.);}",fragmentShader:`varying vec2 uvv;uniform sampler2D sky;uniform mat3 reprojection;uniform float tanHalf,wideTanHalf,aspect,veil;uniform vec3 jumpTint;
      void main(){vec3 ray=reprojection*vec3((uvv-.5)*2.*tanHalf*vec2(aspect,1.),-1.);
      vec2 sampleUV=ray.xy/max(.001,-ray.z)/(2.*wideTanHalf*vec2(aspect,1.))+.5;
      gl_FragColor=texture2D(sky,clamp(sampleUV,.001,.999));gl_FragColor.rgb=mix(gl_FragColor.rgb,jumpTint*.38,veil*.985);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`}));f.frustumCulled=!1,f.renderOrder=-10,r.add(f);const d=new ri(75,1,.1,16e3),p=new Xn,m=new Xn,v=new Xn,g=new G,y=new G,x=new He,E=new G,T=new G;let M=!0,_=-1/0,w=1/24;const C=s3(r),b=new G,P=new G,z=new Xn,I=new Xn,O=new ye,N=new He,A=new ye,V=new ye,Y=La.map(j=>({tint:new oe(j.color),second:new oe(j.second),accent:new oe(j.accent)})),J={jumpAmount:{value:0},layoutRotation:{value:O},destinationRotation:{value:A},volumeRotation:{value:V},time:{value:0},tint:{value:Y[0].tint.clone()},second:{value:Y[0].second.clone()},accent:{value:Y[0].accent.clone()},density:{value:Number(t.density)},band:{value:Number(t.band)},warmth:{value:Number(t.warmth)},abundance:{value:t.stars/1.4},structure:{value:Number(t.structure)},bandWidth:{value:Number(t.bandWidth)},energy:{value:.9},octaves:{value:3},halo:{value:1}};let pt=7123;const $=()=>(pt=pt*16807%2147483647,(pt-1)/2147483646),q=()=>Math.sqrt(-2*Math.log(Math.max(1e-5,$())))*Math.cos(2*Math.PI*$()),B=[new G(1900,1400,1900),new G(5400,4e3,5400),new G(15e3,11e3,15e3)].map((j,yt)=>{const bt=Dm.High.stars[yt],Mt=new Float32Array(bt*3),wt=new Float32Array(bt),Ot=new Float32Array(bt),k=new Float32Array(bt);for(let mt=0;mt<bt;mt++){let Ct=($()-.5)*j.x,Dt=($()-.5)*j.z,It=($()-.5)*j.y;if(yt>0&&$()<.72){if($()<.28){const se=Math.floor($()*4);Ct=(se%2?.22:-.24)*j.x+q()*j.x*.045,Dt=(se<2?-.27:.22)*j.z+q()*j.z*.055}It=-.42*Ct+q()*j.y*.035+Math.sin(Dt/j.z*5)*j.y*.045}Mt.set([Ct,It,Dt],mt*3);const le=$();wt[mt]=(le>.987?12+$()*14:1.3+$()*4.6)*[.7,1.1,2][yt],Ot[mt]=$(),k[mt]=$()}const Et=new pn;Et.setAttribute("position",new hn(Mt,3)),Et.setAttribute("radius",new hn(wt,1)),Et.setAttribute("temperature",new hn(Ot,1)),Et.setAttribute("identity",new hn(k,1));const St=new nn({uniforms:{...J,offset:{value:new G},span:{value:j},layoutOffset:{value:new G},pixels:{value:400},dpr:{value:1}},vertexShader:r3,fragmentShader:o3,transparent:!0,depthWrite:!1,blending:ir}),ht=new qm(Et,St);return ht.frustumCulled=!1,ht.renderOrder=3,r.add(ht),ht}),it=new sn(new ca(12500,32,16),new nn({uniforms:J,vertexShader:u3,fragmentShader:f3,side:qn,depthWrite:!1}));it.renderOrder=-2,it.frustumCulled=!1,i.add(it);const dt=new ca(1,24,16),Nt=[{center:new G(-180,110,-820),radii:new G(680,330,770)},{center:new G(600,-140,-1600),radii:new G(1050,480,1e3)},{center:new G(-850,220,-2400),radii:new G(1200,520,1050)},{center:new G(450,420,1200),radii:new G(850,600,1e3)}],Rt=Nt.map(()=>new G),Qt=Nt.map((j,yt)=>{const bt=new nn({uniforms:{...J,center:{value:j.center.clone()},radii:{value:j.radii},steps:{value:10},visibility:{value:1},seed:{value:4.3+yt*9.7}},vertexShader:l3,fragmentShader:c3,transparent:!0,depthWrite:!1,side:qn}),Mt=new sn(dt,bt);return Mt.position.copy(j.center),Mt.scale.copy(j.radii),Mt.renderOrder=1,i.add(Mt),Mt}),H=new Jb("#b7c6ef","#080e1d",1.6);r.add(H);const et=new cx("#dae6ff",2.8);et.position.set(-3,4,1),r.add(et),et.shadow.mapSize.set(1024,1024),et.shadow.camera.left=-22,et.shadow.camera.right=22,et.shadow.camera.top=18,et.shadow.camera.bottom=-18,et.shadow.camera.near=.5,et.shadow.camera.far=120,et.shadow.bias=-15e-5,et.shadow.normalBias=.018;const K=new cx("#628bb2",.65);return K.position.set(4,2,3),r.add(K),{tint:J.tint.value,navigation:C.navigation,setJump(j,yt){J.jumpAmount.value=Math.max(j,yt),c.veil.value=yt,c.jumpTint.value.copy(J.tint.value).lerp(J.accent.value,.35),C.setJump(Math.max(j,yt))},reseed(j,yt,bt,Mt){b.copy(bt),Mt?z.copy(Mt):z.identity(),I.copy(z).invert(),A.setFromMatrix4(N.makeRotationFromQuaternion(z)),V.copy(A).transpose();for(const k of Qt)k.quaternion.copy(z);let wt=j>>>0;const Ot=()=>(wt=Math.imul(wt,1664525)+1013904223>>>0,wt/4294967296);N.makeRotationY((Ot()-.5)*1.2),N.multiply(new He().makeRotationZ((Ot()-.5)*.8)),O.setFromMatrix4(N);for(const k of B){const Et=k.material.uniforms.span.value;k.material.uniforms.layoutOffset.value.set((Ot()-.5)*Et.x,(Ot()-.5)*Et.y,(Ot()-.5)*Et.z)}for(let k=0;k<Qt.length;k++)Rt[k].set((Ot()-.5)*600,(Ot()-.5)*250,(Ot()-.5)*500),Qt[k].material.uniforms.seed.value=Ot()*80+2;M=!0},renderAtmosphere(j,yt,bt=!1){yt.updateWorldMatrix(!0,!1),yt.matrixWorld.decompose(g,p,y);const Mt=yt,wt=Math.tan(Sn.degToRad(Mt.fov)*.5);(c.aspect.value!==Mt.aspect||c.tanHalf.value!==wt)&&(M=!0),c.tanHalf.value=wt,c.wideTanHalf.value=wt*1.12,c.aspect.value=Mt.aspect;const Ot=performance.now()/1e3;if(bt||M||Ot-_>=w||p.angleTo(m)>.075||E.distanceToSquared(T)>900){d.fov=Sn.radToDeg(2*Math.atan(wt*1.12)),d.aspect=Mt.aspect,d.near=Mt.near,d.far=Mt.far,d.updateProjectionMatrix(),d.position.copy(g),d.quaternion.copy(p);const k=j.toneMapping;j.toneMapping=za,j.setRenderTarget(s),j.render(i,d),j.setRenderTarget(null),j.toneMapping=k,m.copy(p),T.copy(E),_=performance.now()/1e3,M=!1}v.copy(m).invert().multiply(p),x.makeRotationFromQuaternion(v),l.setFromMatrix4(x)},dispose(){s.dispose(),C.dispose(),et.shadow.dispose();const j=new Set,yt=new Set;i.traverse(bt=>{bt instanceof sn&&(j.add(bt.geometry),yt.add(bt.material))}),j.forEach(bt=>bt.dispose()),yt.forEach(bt=>bt.dispose())},configure(j,yt,bt,Mt,wt,Ot,k=!1){et.castShadow=j==="High"&&!k,!et.castShadow&&et.shadow.map&&(et.shadow.map.dispose(),et.shadow.map=null),M=!0,w=k?1/15:j==="Low"?1/20:j==="Medium"?1/24:1/30;const Et=Dm[j];C.configure(j),J.octaves.value=Et.octaves;const St=Ot&&j!=="Low"?qi:Yi;s.texture.type!==St&&(s.dispose(),s.texture.type=St),s.setSize(Math.max(1,Math.round(bt*yt*(k?.26:Et.cloudScale))),Math.max(1,Math.round(Mt*yt*(k?.26:Et.cloudScale)))),J.halo.value=.75+wt*.8,B.forEach((ht,mt)=>{ht.geometry.setDrawRange(0,Et.stars[mt]),ht.material.uniforms.pixels.value=Mt*.64*yt,ht.material.uniforms.dpr.value=yt}),Qt.forEach((ht,mt)=>{ht.visible=mt<Et.volumes,ht.material.uniforms.steps.value=Et.steps})},update(j,yt,bt,Mt,wt){P.copy(Mt).sub(b).applyQuaternion(I),E.copy(P),C.update(j,yt,bt,Mt);const Ot=C.lightAt(Mt);et.position.copy(Ot.direction).multiplyScalar(45),et.color.lerp(Ot.color,1-Math.exp(-j*1.5)),et.intensity=Sn.damp(et.intensity,Ot.intensity,1.5,j),K.color.copy(J.tint.value).lerp(new oe("#829fc1"),.65);const k=La[bt],Et=Y[bt],St=1-Math.exp(-j*.55);J.time.value=yt,J.tint.value.lerp(Et.tint,St),J.second.value.lerp(Et.second,St),J.accent.value.lerp(Et.accent,St),J.density.value=Sn.lerp(J.density.value,k.density,St),J.band.value=Sn.lerp(J.band.value,k.band,St),J.structure.value=Sn.lerp(J.structure.value,k.structure,St),J.bandWidth.value=Sn.lerp(J.bandWidth.value,k.bandWidth,St),J.warmth.value=Sn.lerp(J.warmth.value,k.warmth,St),J.abundance.value=Sn.lerp(J.abundance.value,k.stars/1.4,St),J.energy.value=Sn.lerp(J.energy.value,wt,St),B.forEach(ht=>ht.material.uniforms.offset.value.copy(P)),Qt.forEach((ht,mt)=>{const Ct=Nt[mt].center;ht.position.set(Sn.euclideanModulo(Ct.x+Rt[mt].x-P.x+4600,9200)-4600,Sn.euclideanModulo(Ct.y+Rt[mt].y-P.y+3600,7200)-3600,Sn.euclideanModulo(Ct.z+Rt[mt].z-P.z+4600,9200)-4600);const Dt=Math.max(Math.abs(ht.position.x)/4600,Math.abs(ht.position.y)/3600,Math.abs(ht.position.z)/4600);ht.position.applyQuaternion(z),ht.material.uniforms.center.value.copy(ht.position),ht.material.uniforms.visibility.value=1-Sn.smoothstep(Dt,.65,.95)})}}}function FS(r,t=!1){const i=r[0].index!==null,s=new Set(Object.keys(r[0].attributes)),l=new Set(Object.keys(r[0].morphAttributes)),c={},f={},d=r[0].morphTargetsRelative,p=new pn;let m=0;for(let v=0;v<r.length;++v){const g=r[v];let y=0;if(i!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const x in g.attributes){if(!s.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;c[x]===void 0&&(c[x]=[]),c[x].push(g.attributes[x]),y++}if(y!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". Make sure all geometries have the same number of attributes."),null;if(d!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const x in g.morphAttributes){if(!l.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+".  .morphAttributes must be consistent throughout all geometries."),null;f[x]===void 0&&(f[x]=[]),f[x].push(g.morphAttributes[x])}if(t){let x;if(i)x=g.index.count;else if(g.attributes.position!==void 0)x=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". The geometry must have either an index or a position attribute"),null;p.addGroup(m,x,v),m+=x}}if(i){let v=0;const g=[];for(let y=0;y<r.length;++y){const x=r[y].index;for(let E=0;E<x.count;++E)g.push(x.getX(E)+v);v+=r[y].attributes.position.count}p.setIndex(g)}for(const v in c){const g=Ix(c[v]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+v+" attribute."),null;p.setAttribute(v,g)}for(const v in f){const g=f[v][0].length;if(g===0)break;p.morphAttributes=p.morphAttributes||{},p.morphAttributes[v]=[];for(let y=0;y<g;++y){const x=[];for(let T=0;T<f[v].length;++T)x.push(f[v][T][y]);const E=Ix(x);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+v+" morphAttribute."),null;p.morphAttributes[v].push(E)}}return p}function Ix(r){let t,i,s,l=-1,c=0;for(let m=0;m<r.length;++m){const v=r[m];if(t===void 0&&(t=v.array.constructor),t!==v.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=v.itemSize),i!==v.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(s===void 0&&(s=v.normalized),s!==v.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(l===-1&&(l=v.gpuType),l!==v.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;c+=v.count*i}const f=new t(c),d=new hn(f,i,s);let p=0;for(let m=0;m<r.length;++m){const v=r[m];if(v.isInterleavedBufferAttribute){const g=p/i;for(let y=0,x=v.count;y<x;y++)for(let E=0;E<i;E++){const T=v.getComponent(y,E);d.setComponent(y+g,E,T)}}else f.set(v.array,p);p+=v.count*i}return l!==void 0&&(d.gpuType=l),d}const Nl=new G;function Ui(r,t,i,s,l,c){const f=2*Math.PI*l/4,d=Math.max(c-2*l,0),p=Math.PI/4;Nl.copy(t),Nl[s]=0,Nl.normalize();const m=.5*f/(f+d),v=1-Nl.angleTo(r)/p;return Math.sign(Nl[i])===1?v*m:d/(f+d)+m+m*(1-v)}class yf extends wo{constructor(t=1,i=1,s=1,l=2,c=.1){const f=l*2+1;if(c=Math.min(t/2,i/2,s/2,c),super(1,1,1,f,f,f),this.type="RoundedBoxGeometry",this.parameters={width:t,height:i,depth:s,segments:l,radius:c},f===1)return;const d=this.toNonIndexed();this.index=null,this.attributes.position=d.attributes.position,this.attributes.normal=d.attributes.normal,this.attributes.uv=d.attributes.uv;const p=new G,m=new G,v=new G(t,i,s).divideScalar(2).subScalar(c),g=this.attributes.position.array,y=this.attributes.normal.array,x=this.attributes.uv.array,E=g.length/6,T=new G,M=.5/f;for(let _=0,w=0;_<g.length;_+=3,w+=2)switch(p.fromArray(g,_),m.copy(p),m.x-=Math.sign(m.x)*M,m.y-=Math.sign(m.y)*M,m.z-=Math.sign(m.z)*M,m.normalize(),g[_+0]=v.x*Math.sign(p.x)+m.x*c,g[_+1]=v.y*Math.sign(p.y)+m.y*c,g[_+2]=v.z*Math.sign(p.z)+m.z*c,y[_+0]=m.x,y[_+1]=m.y,y[_+2]=m.z,Math.floor(_/E)){case 0:T.set(1,0,0),x[w+0]=Ui(T,m,"z","y",c,s),x[w+1]=1-Ui(T,m,"y","z",c,i);break;case 1:T.set(-1,0,0),x[w+0]=1-Ui(T,m,"z","y",c,s),x[w+1]=1-Ui(T,m,"y","z",c,i);break;case 2:T.set(0,1,0),x[w+0]=1-Ui(T,m,"x","z",c,t),x[w+1]=Ui(T,m,"z","x",c,s);break;case 3:T.set(0,-1,0),x[w+0]=1-Ui(T,m,"x","z",c,t),x[w+1]=1-Ui(T,m,"z","x",c,s);break;case 4:T.set(0,0,1),x[w+0]=1-Ui(T,m,"x","y",c,t),x[w+1]=1-Ui(T,m,"y","x",c,i);break;case 5:T.set(0,0,-1),x[w+0]=Ui(T,m,"x","y",c,t),x[w+1]=1-Ui(T,m,"y","x",c,i);break}}static fromJSON(t){return new yf(t.width,t.height,t.depth,t.segments,t.radius)}}function sf(r,t=1){return r.onBeforeCompile=i=>{i.uniforms.panelScale={value:t},i.vertexShader=`varying vec3 shipPoint,shipNormal;
`+i.vertexShader,i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
shipPoint=position;shipNormal=normal;`),i.fragmentShader=`varying vec3 shipPoint,shipNormal;uniform float panelScale;
`+i.fragmentShader,i.fragmentShader=i.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
      vec3 dominant=abs(normalize(shipNormal));
      vec2 panelUV=dominant.y>dominant.x&&dominant.y>dominant.z?shipPoint.xz:dominant.x>dominant.z?shipPoint.zy:shipPoint.xy;
      panelUV*=panelScale;vec2 cell=abs(fract(panelUV)-.5);
      float seam=smoothstep(.478,.497,max(cell.x,cell.y));
      float grain=fract(sin(dot(floor(panelUV*470.),vec2(127.1,311.7)))*43758.5453);
      float brush=.5+.5*sin(panelUV.x*1900.+sin(panelUV.y*29.)*.2);
      float edge=smoothstep(.447,.471,max(cell.x,cell.y))*(1.-smoothstep(.474,.49,max(cell.x,cell.y)));
      diffuseColor.rgb*=.91+grain*.075+brush*.025;diffuseColor.rgb*=1.-seam*.62;
      diffuseColor.rgb+=vec3(.025,.033,.036)*edge*(.35+grain*.65);
    `),i.fragmentShader=i.fragmentShader.replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=clamp(roughnessFactor+(grain-.5)*.085+seam*.24-edge*.12,.15,.95);`)},r.customProgramCacheKey=()=>"aether-aerospace-pbr-v1",r}function d3(r){const t=new Oa;t.name="enclosed-flight-deck",r.add(t);const i={value:new oe("#ae80f0")},s=(U,B,it)=>sf(new mo({color:U,metalness:B,roughness:it,envMapIntensity:B>.7?1.2:.75}),2.4),l=s("#27343f",.48,.42),c=s("#82949d",.85,.26),f=s("#0c141d",.16,.68),d=l.color.clone(),p=c.color.clone(),m=f.color.clone(),v=new sr({color:"#52d9d5"}),g=new Map;let y=!1;const x=(U,B)=>{y&&(U.scale(.72,.58,.9),U.translate(0,-.798,-.3)),g.has(B)||g.set(B,[]),g.get(B).push(U)};function E(U,B,it,dt,Nt,Rt,Qt,H=0,et=0,K=0){const j=new yf(Nt,Rt,Qt,1,Math.min(Nt,Rt,Qt)*.12);j.rotateX(H),j.rotateY(et),j.rotateZ(K),j.translate(B,it,dt),x(j,U)}function T(U,B,it,dt){const Nt=new vf(dt,dt,B.distanceTo(it),8);Nt.applyQuaternion(new Xn().setFromUnitVectors(new G(0,1,0),it.clone().sub(B).normalize())),Nt.translate(...B.clone().add(it).multiplyScalar(.5).toArray()),x(Nt,U)}function M(U,B,it,dt,Nt){const Rt=Array.from({length:41},(Qt,H)=>{const et=-.12+H/40*(Math.PI+.24);return new G(Math.cos(et)*B,-.95+Math.sin(et)*it,U)});x(new pf(new Tm(Rt),48,dt,8,!1),Nt)}E(l,0,-2.02,.25,7.3,.22,7),E(l,0,-1.65,2.55,7.3,.65,.2),E(l,0,3.35,2.55,7.3,.13,.18);for(const U of[-3.5,-1.4,1.4,3.5])E(l,U,1.05,2.55,.085,4.55,.14),E(v,U+.048,1.05,2.48,.008,4.42,.012);for(const U of[-1.5,1.1,2.55])E(l,0,3.35,U,7.05,.095,.09),E(v,0,3.29,U,6.9,.008,.012);for(const U of[-1,1]){E(l,U*3.55,-1.65,.4,.17,.65,4.3),E(l,U*3.55,3.35,-.4,.13,.13,6);for(const B of[-1.5,1.1,2.55])E(l,U*3.55,1.05,B,.12,4.55,.085),E(v,U*3.48,1.05,B+.049,.012,4.42,.008);E(l,U*2.62,-1.52,-1.9,.65,.76,4,0,U*-.1),T(c,new G(U*1,-1.1,-2.95),new G(U*2.72,-1.4,.25),.075),T(l,new G(U*1.12,-1.15,-3.02),new G(U*2.85,-1.47,.35),.14),T(c,new G(U*2.9,-.95,-3.2),new G(U*3.12,-1.25,.5),.055),T(v,new G(U*1.16,-1.18,-2.98),new G(U*2.77,-1.54,.15),.009);for(let B=0;B<13;B++){const it=B/12;E(c,U*(1.12+it*1.69),-1.15-it*.33,-3.02+it*3.23,.035,.035,.028)}}M(-3.35,2.92,3.62,.085,l),M(-3.32,2.84,3.57,.025,c),M(-3.29,2.81,3.53,.008,v),M(.7,3.15,3.9,.12,l),T(l,new G(0,2.68,-3.35),new G(0,2.95,.8),.065),y=!0;const _=new df;_.moveTo(-1.62,-1.85),_.lineTo(-1.44,-.58),_.bezierCurveTo(-1.2,-.12,-.92,.48,-.58,.55),_.quadraticCurveTo(0,.72,.58,.55),_.bezierCurveTo(.92,.48,1.2,-.12,1.44,-.58),_.lineTo(1.62,-1.85),_.closePath();const w=new Wl(_,{depth:.24,bevelEnabled:!0,bevelSize:.045,bevelThickness:.045,bevelSegments:2,steps:1});w.translate(0,-.12,-3.18),x(w,f);const C=[new G(-1.4,-.62,-2.89),new G(-.88,.23,-2.89),new G(0,.52,-2.89),new G(.88,.23,-2.89),new G(1.4,-.62,-2.89)];x(new pf(new Tm(C),40,.045,8,!1),c),E(c,0,-.13,-2.84,1.19,.76,.12,-.1),E(f,0,-.13,-2.755,1.13,.7,.035,-.1),E(l,0,-.74,-2.72,1.32,.18,.22),E(f,0,-.72,-2.58,.85,.09,.06);for(const U of[-1,1]){E(l,U*1.14,-1.05,-1.62,.78,.25,1.75,.18,0,U*.12),E(f,U*1.14,-.91,-1.62,.69,.035,1.66,.18,0,U*.12),T(c,new G(U*1.59,-1.13,-.65),new G(U*1.61,-.78,-2.5),.045),T(c,new G(U*.73,-1.12,-.72),new G(U*.75,-.87,-2.35),.035),E(f,U*.97,-.63,-2.36,.59,.44,.12,-.34,-U*.18);for(let B=0;B<3;B++)for(let it=0;it<4;it++)E(c,U*1.15+(it-1.5)*.12,-.76-B*.035,-1.8+B*.18,.085,.04,.105,.18);for(let B=0;B<5;B++)E(f,U*1.23,-.83,-.96-B*.15,.12,.07,.085,.18),E(c,U*.94,-.79,-.98-B*.15,.045,.06,.065,.18);E(f,U*.65,-1.11,-1.78,.26,.11,.3),T(c,new G(U*.65,-1.07,-1.78),new G(U*.59,-.78,-1.86),.043),E(f,U*.59,-.72,-1.87,.11,.19,.16,-.25,0,U*.15),E(v,U*.59,-.625,-1.84,.035,.008,.045),E(c,U*.22,-1.74,-2.16,.2,.09,.34,.5);for(let B=0;B<6;B++)E(f,U*.22,-1.69+B*.013,-2.29+B*.04,.14,.014,.012,.5);E(v,U*1.34,-1.82,-.45,.025,.025,.58);for(let B=0;B<18;B++)E(c,U*1.32,-1.91,-.9+B*.085,.28,.014,.012)}y=!1,E(f,0,-1.66,-.08,.99,.25,1.4),E(l,0,-1.12,1,1.12,.92,.28,-.13),E(f,0,-1.1,.82,.91,.78,.14,-.13);const b={reflection:{value:null},hasReflection:{value:0},strength:{value:.06},tint:i},P=new nn({uniforms:b,transparent:!0,depthWrite:!1,side:_i,vertexShader:"varying vec3 panePoint,paneNormal;void main(){panePoint=position;paneNormal=normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 panePoint,paneNormal;uniform sampler2D reflection;uniform float hasReflection,strength;uniform vec3 tint;
    void main(){vec3 v=normalize(-panePoint),n=normalize(paneNormal);float facing=abs(dot(n,v));vec3 r=reflect(-v,n);
    vec2 uv=vec2(atan(r.z,r.x)/6.2831853+.5,asin(clamp(r.y,-1.,1.))/3.14159265+.5);
    vec3 environment=hasReflection>.5?texture2D(reflection,uv).rgb:vec3(.08,.15,.2);
    float fresnel=pow(1.-facing,3.);float reflectionAlpha=.008+strength*(.12+fresnel);
    float ghost=exp(-pow((panePoint.y+.7)*5.,2.))*pow(max(0.,sin(panePoint.x*8.)),14.);
    gl_FragColor=vec4(environment*.8+tint*.025+vec3(.04,.25,.24)*ghost,reflectionAlpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    }`}),z=(U,B,it,dt,Nt,Rt=0,Qt=0)=>{const H=new Ba(dt,Nt);H.rotateX(Rt),H.rotateY(Qt),H.translate(U,B,it),x(H,P)};for(const U of[-1,1])z(U*3.56,1.05,-.4,5.9,4.5,0,Math.PI/2);z(0,1.05,2.57,7,4.5),z(0,3.36,-.4,7,5.9,Math.PI/2);const I=document.createElement("canvas");I.width=I.height=1024;const O=I.getContext("2d");O.fillStyle="#020b10",O.fillRect(0,0,1024,1024);const N=(U,B,it,dt,Nt="#40bfbf")=>{O.strokeStyle=Nt,O.beginPath(),O.moveTo(U,B),O.lineTo(it,dt),O.stroke()},A=(U,B,it,dt=10,Nt="#6ee9dd")=>{O.font=`${dt}px monospace`,O.fillStyle=Nt,O.fillText(U,B,it)};O.strokeStyle="#65eddf",O.lineWidth=3,O.strokeRect(5,5,630,354),A("A E T H E R   /   DEEP SPACE NAVIGATION",20,26,12),A("FLIGHT SYSTEMS",21,53),A("VECTOR  /  LOCK",465,53),O.lineWidth=1;for(let U=0;U<11;U++)N(20,70+U*22,164,70+U*22,"#154c58"),A(["NAV  ONLINE","DRIVE NOMINAL","O2   100.0%","HULL  STABLE"][U%4],24,84+U*22,8),N(460,70+U*22,610,70+U*22,"#154c58"),A(`${(U*173.29+72).toFixed(2)} / ${U%3===0?"ACTIVE":"SYNC"}`,467,84+U*22,8);for(let U=0;U<9;U++){const B=18+U*11;O.strokeStyle=U%2?"#174b59":"#21838b",O.beginPath(),O.arc(320,185,B,0,Math.PI*2),O.stroke()}for(let U=0;U<12;U++){const B=U/12*Math.PI*2;N(320+Math.cos(B)*19,185+Math.sin(B)*19,320+Math.cos(B)*107,185+Math.sin(B)*107,"#18525e")}const V=O.createRadialGradient(320,185,1,320,185,65);V.addColorStop(0,"#8bfff5"),V.addColorStop(.18,"#1dd7d5"),V.addColorStop(1,"#05303b00"),O.fillStyle=V,O.fillRect(250,115,140,140);for(let U=0;U<60;U++)N(185+U*4.4,317+Math.sin(U*.7)*7,189+U*4.4,317+Math.sin((U+1)*.7)*7,"#50cec5");A("PERSEUS // CONTINUOUS NAVIGATION",183,345,9),O.fillStyle="#04100a",O.fillRect(0,390,400,220);for(let U=0;U<18;U++)A(`${U.toString(16).padStart(2,"0")}  ${["SYSTEM LINK ESTABLISHED","TRAJECTORY COMPUTED","DEEP FIELD SCAN / OK","> AETHER FLIGHT COMPUTER"][U%4]}`,12,405+U*11,9,"#80c858");O.fillStyle="#063547",O.fillRect(430,390,350,180);for(let U=0;U<5;U++)A(["ATTITUDE","ENGINE","COOLANT","SIGNAL","ENERGY"][U],445,413+U*30,12),O.fillStyle="#47e4ef",O.fillRect(550,402+U*30,38+U*28,9);const Y=["#f3d238","#28becf","#e35345","#9cd357","#c7e9de"];for(let U=0;U<4;U++)for(let B=0;B<8;B++){const it=12+B*48,dt=650+U*48;O.fillStyle="#101e22",O.fillRect(it,dt,40,40),O.fillStyle=Y[(U*3+B)%5],O.fillRect(it+4,dt+4,32,25),N(it+9,dt+34,it+30,dt+34,"#899d94")}for(let U=0;U<2;U++){const B=540+U*220,it=750;for(const dt of[65,57,45])O.strokeStyle="#8df6e5",O.lineWidth=dt===57?5:2,O.beginPath(),O.arc(B,it,dt,-.9,4.9),O.stroke();O.fillStyle="#bdfff2",O.beginPath(),O.arc(B,it,12,0,Math.PI*2),O.fill(),N(B,it,B+34,it-24,"#bdfff2"),A(U?"OXYGEN":"VELOCITY",B-30,it+91,11)}for(let U=0;U<12;U++)O.fillStyle=Y[U%5],O.fillRect(20+U*45,900,31,16),A(U%3===0?"ARM":"ON",22+U*45,935,8);const J=new Ym(I);J.colorSpace=kn,J.anisotropy=2;const pt=new sr({map:J,color:"#d8fff5",side:_i}),$={value:0};pt.onBeforeCompile=U=>{U.uniforms.screenTime=$,U.fragmentShader=`uniform float screenTime;
`+U.fragmentShader,U.fragmentShader=U.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
    vec2 radar=vMapUv-vec2(.3125,.819);float a=atan(radar.y,radar.x);float sweep=pow(max(0.,cos(a-screenTime*.34)),32.)*(1.-smoothstep(.04,.11,length(radar)));
    diffuseColor.rgb+=vec3(.03,.24,.21)*sweep*step(.64,vMapUv.y);diffuseColor.rgb*=.965+.035*sin(vMapUv.y*1024.*3.14159);
  `)};function q(U,B,it,dt,Nt,Rt,Qt=0,H=0,et=0){const K=new Ba(dt,Nt),j=K.getAttribute("uv");for(let yt=0;yt<j.count;yt++)j.setXY(yt,(Rt[0]+j.getX(yt)*Rt[2])/1024,1-(Rt[1]+(1-j.getY(yt))*Rt[3])/1024);K.rotateX(Qt),K.rotateY(H),K.rotateZ(et),K.translate(U,B,it),x(K,pt)}y=!0,q(0,-.13,-2.727,1.07,.6,[0,0,640,365],-.1),q(-.73,-.39,-2.72,.32,.36,[455,663,170,190]),q(.73,-.39,-2.72,.32,.36,[675,663,170,190]),q(-.98,-.61,-2.265,.49,.32,[430,390,350,180],-.34,.18,.1),q(.98,-.61,-2.265,.49,.32,[0,390,400,220],-.34,-.18,-.1),q(0,-1.02,-2.39,.62,.3,[0,640,400,205],-.4),q(0,-.59,-2.71,1.46,.085,[0,890,560,65]);for(const U of[-1,1])q(U*1.14,-.86,-1.53,.5,.53,[0,640,400,205],-Math.PI/2+.18,0,U*.12),q(U*.65,-1.038,-1.67,.23,.09,[0,890,250,45],-Math.PI/2),q(U*1.14,-.77,-2.03,.54,.11,[0,890,560,65],-Math.PI/2+.18);for(const U of[-1,1])for(let B=0;B<3;B++)for(let it=0;it<4;it++)q(U*1.15+(it-1.5)*.12,-.734-B*.035,-1.8+B*.18,.065,.08,[16+(B*3+it)%8*48,654+B*48,30,25],-Math.PI/2+.18);for(const U of C){const B=new ca(.022,6,4);B.translate(U.x,U.y,U.z+.055),x(B,c)}y=!1;for(const[U,B]of g){for(const Nt of B){if(Nt.index){const Rt=Nt.toNonIndexed();Nt.copy(Rt),Rt.dispose()}Nt.deleteAttribute("uv1")}const it=FS(B);B.forEach(Nt=>Nt.dispose());const dt=new sn(it,U);dt.castShadow=U===l||U===c||U===f,dt.receiveShadow=dt.castShadow,dt.name=U===P?"observation-glazing":U===l?"enclosure-shell":U===pt?"instrument-displays":"cabin-details",t.add(dt)}return{group:t,configureEnvironment(U,B){b.reflection.value=U,b.hasReflection.value=1,b.strength.value=B?.15:.045},update(U,B,it,dt,Nt=0){t.visible=dt;const Rt=it?.5:1;i.value.copy(U),l.color.copy(d).multiplyScalar(B*Rt),c.color.copy(p).multiplyScalar(B*Rt),f.color.copy(m).multiplyScalar(B*Rt),$.value=Nt,v.color.set("#50d7ce").multiplyScalar(.7*B*Rt),pt.color.set("#d8fff5").multiplyScalar((.8+B*.2)*(it?.5:1))},dispose(){J.dispose()}}}function p3(r){const t=new Oa;t.name="aether-exterior",r.add(t);const i=sf(new mo({color:"#394956",metalness:.65,roughness:.38,side:_i,envMapIntensity:1.15}),.8),s=sf(new mo({color:"#8b9da5",metalness:.88,roughness:.25,envMapIntensity:1.3}),2),l=sf(new mo({color:"#101b27",metalness:.25,roughness:.7}),1.7),c=new sr({color:"#64d4d8"}),f=new sr({color:"#f08c81"}),d=new Map,p=(T,M)=>{const _=d.get(M)??[];_.push(T),d.set(M,_)},m=(T,M,_,w,C,b,P,z=0)=>{const I=new yf(C,b,P,1,Math.min(C,b,P)*.16);I.rotateZ(z),I.translate(M,_,w),p(I,T)},v=new ca(1,32,16);v.scale(3.3,1.05,8),v.translate(0,-3.2,4),p(v,i),m(i,0,-2.3,7,2.4,.52,8),m(l,0,-2.015,7.5,1.4,.04,6.8);for(const T of[-1,1]){const M=[[3,-.8],[5.7,.2],[13.2,5.1],[12.2,7.4],[5.5,5.1],[3,6.2]].map(([P,z])=>new Ft(T*P,z));T<0&&M.reverse();const _=new df(M),w=new Wl(_,{depth:.2,bevelEnabled:!0,bevelSize:.09,bevelThickness:.07,bevelSegments:3,steps:1});w.rotateX(Math.PI/2),w.translate(0,-2.15,0),p(w,i);for(let P=0;P<6;P++)m(s,T*(4.5+P*1.15),-2.035,1.2+P*.65,.06,.025,2),m(l,T*(4.5+P*1.15),-2.02,2.25+P*.65,.72,.025,.65);m(c,T*8.5,-2.015,4.35,4.5,.025,.055),m(T<0?f:c,T*12.8,-2,5.5,.18,.08,.6),m(s,T*2.5,-2.5,7.7,1.3,.65,5.7),m(l,T*2.5,-2.45,8.1,.9,.5,5.5),m(c,T*2.5,-2.43,10.91,.7,.25,.04),m(c,T*.9,-2.02,8,.035,.025,5.3);const C=new df([new Ft(6,-2.1),new Ft(10.6,-.15),new Ft(12.8,-2.1)]),b=new Wl(C,{depth:.15,bevelEnabled:!0,bevelSize:.035,bevelThickness:.035,bevelSegments:2});b.rotateY(-Math.PI/2),b.translate(T*3.6,0,0),p(b,i)}const g=document.createElement("canvas");g.width=1024,g.height=256;const y=g.getContext("2d");y.fillStyle="#d8e1df",y.font="bold 106px monospace",y.fillText("AETHER / 01",18,111),y.font="20px monospace",y.fillText("DEEP SPACE EXPLORER     //     KEEP CLEAR",22,157),y.fillStyle="#d7a85b";for(let T=0;T<23;T++)y.save(),y.translate(T*48,212),y.transform(1,0,-.5,1,0,0),y.fillRect(0,0,21,23),y.restore();const x=new Ym(g);x.colorSpace=kn,x.anisotropy=4;const E=new mo({map:x,transparent:!0,alphaTest:.2,roughness:.6,metalness:.2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1});for(const T of[-1,1]){const M=new Ba(2.35,.59);M.rotateZ(T*Math.PI/2),M.rotateX(-Math.PI/2),M.translate(T*7.2,-1.99,3.9),p(M,E);for(let C=0;C<6;C++){const b=new ca(.028,6,4);b.translate(T*(4.5+C*1.15),-1.985,2.25+C*.65),p(b,s),m(l,T*2.5,-2.02,7.1+C*.23,.7,.025,.07)}const _=new vf(.48,.58,2.4,18);_.rotateX(Math.PI/2),_.translate(T*2.5,-2.4,10.1),p(_,s);const w=new Jm(.48,.07,6,20);w.translate(T*2.5,-2.4,11.3),p(w,l)}for(const[T,M]of d){const _=M.map(b=>b.index?b.toNonIndexed():b),w=FS(_);for(const b of new Set([...M,..._]))b.dispose();const C=new sn(w,T);C.castShadow=T!==c&&T!==f&&T!==E,C.receiveShadow=T!==c&&T!==f,C.name=T===i?"wing-and-hull-armor":"exterior-details",t.add(C)}return{group:t,update(T,M){t.visible=T,c.color.set("#64d4d8").multiplyScalar(.48+Math.min(M/1200,1)*.2)},dispose(){t.removeFromParent(),t.children.forEach(T=>{T.geometry.dispose()}),d.forEach((T,M)=>M.dispose()),x.dispose()}}}function m3(r,t,i){const s=document.createElement("canvas");s.width=512,s.height=256;const l=s.getContext("2d");l.scale(.5,.5);const c=l.createLinearGradient(0,0,0,512);c.addColorStop(0,"#142034"),c.addColorStop(.4,"#33405b"),c.addColorStop(.62,"#151e32"),c.addColorStop(1,"#03060b"),l.fillStyle=c,l.fillRect(0,0,1024,512);const f=(g,y,x,E)=>{const T=l.createRadialGradient(g,y,0,g,y,x);T.addColorStop(0,E),T.addColorStop(.18,E+"99"),T.addColorStop(1,E+"00"),l.fillStyle=T,l.fillRect(g-x,y-x,x*2,x*2)};f(240,185,180,"#98b8e5"),f(755,200,120,"#e9ba87"),f(480,260,160,"#547e9c"),l.fillStyle="#a9d6dc",l.globalAlpha=.38,l.fillRect(100,235,270,5),l.fillStyle="#e9b67f",l.fillRect(695,238,150,3),l.globalAlpha=1;const d=new Ym(s);d.mapping=rf,d.colorSpace=kn;let p=null;if(r.extensions.has("EXT_color_buffer_float")){const g=new wm(r);g.compileEquirectangularShader(),p=g.fromEquirectangular(d),g.dispose(),t.environment=p.texture}t.environmentIntensity=.75;const m=new lx("#63d8dd",3.5,5,2);m.position.set(0,-.55,-1.7),i.add(m);const v=new lx("#eab784",1.1,3.5,2);return v.position.set(-1.6,-1.3,-.4),i.add(v),r.shadowMap.type=kx,{panorama:d,configure(g){r.shadowMap.enabled=g},update(g,y){m.visible=v.visible=g,m.intensity=y?1.4:3.5,v.intensity=y?.45:1.1},dispose(){t.environment=null,m.removeFromParent(),v.removeFromParent(),p==null||p.dispose(),d.dispose()}}}function g3(r,t,i,s,l={}){const c=new BR({antialias:!0,alpha:!1,powerPreference:"high-performance"});c.setClearColor("#040710"),c.outputColorSpace=kn,c.toneMapping=Lm,c.toneMappingExposure=zx.Balanced.exposure,r.appendChild(c.domElement);const f=new gS,d=new ri(68,1,.1,5e4),p=new Oa;p.position.z=5,p.add(d),f.add(p);const m=l.jump??new IS;let v=m.phase;const g={...t()},y=()=>(Object.assign(g,t()),g.blocked=g.blocked||m.busy,g),x=m3(c,f,p),E=h3(f),T=t3(p),M=new oe,_=new oe("#bad9f3"),w=d3(p),C=p3(p),b=ZR(c.domElement,s,i,y),P=new DS,z=new KR;let I=t().quality,O=t().performanceMode,N=t().adaptive,A=0,V=0,Y=0,J=0,pt="",$=!1,q=null,U=null;const B=()=>{q&&(q.passes.forEach(Rt=>Rt.dispose()),q.dispose(),q=null,U=null)},it=()=>{const Rt=t(),Qt=Rt.performanceMode?"Low":Rt.quality,H=Dm[Qt],et=Math.max(1,r.clientWidth),K=Math.max(1,r.clientHeight),j=Math.min(window.devicePixelRatio||1,H.pixelRatio)*(Rt.performanceMode?.85:Rt.adaptive?z.scale:1);c.setPixelRatio(j),c.setSize(et,K),d.aspect=et/K,d.updateProjectionMatrix();const yt=!Rt.performanceMode&&H.bloom&&Rt.bloom>0&&c.extensions.has("EXT_color_buffer_float");yt&&!q?(q=new XR(c),q.addPass(new qR(f,d)),U=new bo(new Ft(et,K),.2,.55,1.1),q.addPass(U),q.addPass(new jR)):yt||B(),q&&(q.setPixelRatio(j),q.setSize(et,K)),E.configure(Qt,j,et,K,Rt.bloom,c.extensions.has("EXT_color_buffer_float"),Rt.performanceMode),T.configure(Qt,Rt.reduced);const bt=Qt==="High"&&!Rt.performanceMode;x.configure(bt),w.configureEnvironment(x.panorama,bt),pt=`${Rt.quality}/${Rt.bloom}/${Rt.performanceMode}/${Rt.adaptive}/${Rt.reduced}`},dt=()=>{var Rt;P.getDelta(),i.reset(!0),(Rt=l.onAudio)==null||Rt.call(l,0,0,!0)};document.addEventListener("visibilitychange",dt),window.addEventListener("resize",it),it();const Nt=()=>{var Mt,wt,Ot,k;if($)return;V=requestAnimationFrame(Nt);const Rt=P.getDelta(),Qt=Rt>.25?0:Rt,H=t();if(document.hidden){i.reset(!0);return}const et=Math.min(Rt,.25);m.advance(Rt,H.paused),m.phase!==v&&(v=m.phase,(Mt=l.onPhase)==null||Mt.call(l,m.phase)),m.justCommitted&&(E.reseed(m.seed,m.destination,i.position,i.shipQuaternion),(wt=l.onDestination)==null||wt.call(l,m.destination,m.seed));const K=m.busy&&m.committed?m.destination:H.region,j=m.energy*(H.reduced?.16:H.mode==="Meditation"?.55:1);b.sync(),y(),m.busy&&(g.mode="Autopilot",g.motion=0,g.started=!0,g.speed=H.speed+Math.pow(m.energy,2)*(H.reduced?100:360)),QR(i,Rt,g),(Ot=l.onAudio)==null||Ot.call(l,j,m.charge,H.paused),(H.quality!==I||H.performanceMode!==O||H.adaptive!==N)&&(z.reset(),I=H.quality,O=H.performanceMode,N=H.adaptive);const yt=z.observe(Rt,H.adaptive&&!H.performanceMode,H.paused);(pt!==`${H.quality}/${H.bloom}/${H.performanceMode}/${H.adaptive}/${H.reduced}`||yt)&&it(),H.paused||(Y+=Qt);const bt=zx[H.lighting];c.toneMappingExposure=Sn.damp(c.toneMappingExposure,bt.exposure*La[K].exposure,.8,et),E.setJump(j,m.veil),E.update(et,Y,K,i.position,bt.nebula),Y>=A&&((k=l.onNavigation)==null||k.call(l,E.navigation(i.position,i.shipQuaternion)),A=Y+.5),p.quaternion.copy(i.shipQuaternion),d.quaternion.copy(i.lookQuaternion),M.copy(E.tint).lerp(_,m.charge*.3),C.update(H.cockpit,i.speed),w.update(M,bt.cabin*(1+m.charge*.12),H.mode==="Meditation",H.cockpit,Y),x.update(H.cockpit,H.mode==="Meditation"),T.update(H.paused?0:Math.min(Rt,.1),j,E.tint),U&&(U.strength=H.bloom*(H.mode==="Meditation"?.45:.8+j*.2)),J+=Rt,!(H.paused&&J<1/15)&&(J=0,E.renderAtmosphere(c,d),q?q.render():c.render(f,d))};return Nt(),()=>{var H;$=!0,cancelAnimationFrame(V),b.dispose(),window.removeEventListener("resize",it),document.removeEventListener("visibilitychange",dt),(H=l.onAudio)==null||H.call(l,0,0,!0),B(),w.dispose(),C.dispose(),E.dispose(),x.dispose();const Rt=new Set,Qt=new Set;f.traverse(et=>{if(et instanceof sn||et instanceof qm||et instanceof vS){Rt.add(et.geometry);for(const K of Array.isArray(et.material)?et.material:[et.material])Qt.add(K)}}),Rt.forEach(et=>et.dispose()),Qt.forEach(et=>et.dispose()),c.dispose(),c.domElement.remove()}}const Zl=[{id:"meditation",name:"Meditation Impromptu 01",mood:"Gentle piano · meditation",file:"meditation-impromptu-01.mp3",artist:"Kevin MacLeod",isrc:"USUAN1100163"},{id:"floating",name:"Floating Cities",mood:"Dreamlike ambient · a quiet future",file:"floating-cities.mp3",artist:"Kevin MacLeod",isrc:"USUAN1600018"},{id:"jellyfish",name:"Jellyfish in Space",mood:"Soft space music · a flowing journey",file:"jellyfish-in-space.mp3",artist:"Kevin MacLeod",isrc:"USUAN1500030"},{id:"soaring",name:"Soaring",mood:"Atmospheric ambient · calm and spacious",file:"soaring.mp3",artist:"Kevin MacLeod",isrc:"USUAN1600040"}],i0={engineEnabled:!0,spaceEnabled:!0,musicEnabled:!0,engine:.35,space:.3,music:.5,track:"meditation"},Bx="cosmic-drift-audio-v1";function v3(r){const t={...i0};try{const i=JSON.parse(r??"null");if(!i||typeof i!="object")return t;const s=i;for(const f of["engineEnabled","spaceEnabled","musicEnabled"])typeof s[f]=="boolean"&&(t[f]=s[f]);for(const f of["engine","space","music"])typeof s[f]=="number"&&Number.isFinite(s[f])&&(t[f]=Math.max(0,Math.min(1,s[f])));const l={starlight:"meditation",nebula:"floating",orbit:"jellyfish",lunar:"soaring"},c=typeof s.track=="string"?l[s.track]??s.track:"";Zl.some(f=>f.id===c)&&(t.track=c)}catch{}return t}class _3{constructor(){de(this,"ctx",null);de(this,"master");de(this,"engine");de(this,"space");de(this,"music");de(this,"onMusicState");de(this,"musicState",{state:"idle",track:null});de(this,"jumpGain");de(this,"jumpTone");de(this,"jumpFilter");de(this,"lastDrive",-1);de(this,"lastCharge",-1);de(this,"settings",{...i0});de(this,"enabled",!1);de(this,"paused",!1);de(this,"slots",[]);de(this,"current");de(this,"retiring");de(this,"fadeTimer");de(this,"pauseTimer");de(this,"visibility",()=>this.apply())}get currentRecording(){var t;return((t=this.current)==null?void 0:t.element)??null}get musicActive(){return this.enabled&&!this.paused&&!document.hidden&&this.settings.musicEnabled&&this.settings.music>0}report(t,i){var l,c,f;const s=((c=(l=this.current)==null?void 0:l.track)==null?void 0:c.id)??null;this.musicState.state===t&&this.musicState.track===s&&this.musicState.message===i||(this.musicState={state:t,track:s,message:i},(f=this.onMusicState)==null||f.call(this,this.musicState))}async start(t){if(t&&(this.settings={...this.settings,track:t,musicEnabled:!0}),!this.ctx){const i=this.ctx=new AudioContext;this.master=i.createGain(),this.master.gain.value=0,this.master.connect(i.destination),this.engine=i.createGain(),this.space=i.createGain(),this.music=i.createGain();for(const p of[this.engine,this.space,this.music])p.gain.value=0,p.connect(this.master);for(const p of[38,57,76]){const m=i.createOscillator(),v=i.createGain();m.type="sine",m.frequency.value=p,v.gain.value=.09,m.connect(v).connect(this.engine),m.start()}const s=i.createBuffer(2,i.sampleRate*4,i.sampleRate);let l=1237;for(let p=0;p<2;p++){const m=s.getChannelData(p);let v=0;for(let g=0;g<m.length;g++){l=l*16807%2147483647,v=(v+((l-1)/2147483646-.5)*.035)/1.018;const y=Math.min(1,g/(i.sampleRate*.08),(m.length-1-g)/(i.sampleRate*.08));m[g]=v*y}}const c=i.createBufferSource(),f=i.createBiquadFilter();c.buffer=s,c.loop=!0,f.type="lowpass",f.frequency.value=650,c.connect(f).connect(this.space),c.start();for(const p of[82.41,123.47]){const m=i.createOscillator(),v=i.createGain();m.frequency.value=p,v.gain.value=.012,m.connect(v).connect(this.space),m.start()}this.jumpGain=i.createGain(),this.jumpGain.gain.value=0,this.jumpGain.connect(this.engine),this.jumpTone=i.createOscillator(),this.jumpTone.frequency.value=42,this.jumpTone.connect(this.jumpGain),this.jumpTone.start();const d=i.createBufferSource();d.buffer=s,d.loop=!0,this.jumpFilter=i.createBiquadFilter(),this.jumpFilter.type="lowpass",this.jumpFilter.frequency.value=250,d.connect(this.jumpFilter).connect(this.jumpGain),d.start(),this.slots=Array.from({length:2},()=>this.makeSlot(i)),document.addEventListener("visibilitychange",this.visibility)}this.apply(),this.current&&this.settings.musicEnabled&&this.settings.music>0&&this.play(this.current),await this.ctx.resume(),this.apply()}makeSlot(t){const i=new Audio;i.loop=!0,i.preload="none";const s=t.createMediaElementSource(i),l=t.createGain();l.gain.value=0,s.connect(l).connect(this.music);const c={element:i,source:s,gain:l,track:null,request:0,pending:!1};i.onwaiting=()=>{this.current===c&&this.musicActive&&this.report("loading")},i.onplaying=()=>{this.current===c&&this.musicActive&&this.report("playing")},i.onerror=()=>{this.current===c&&c.track&&this.report("error","This recording could not load. Select it again to retry.")};const f=new Uint8Array(76),d=new DataView(f.buffer),p=(m,v)=>{for(let g=0;g<v.length;g++)f[m+g]=v.charCodeAt(g)};return p(0,"RIFF"),d.setUint32(4,68,!0),p(8,"WAVEfmt "),d.setUint32(16,16,!0),d.setUint16(20,1,!0),d.setUint16(22,1,!0),d.setUint32(24,8e3,!0),d.setUint32(28,16e3,!0),d.setUint16(32,2,!0),d.setUint16(34,16,!0),p(36,"data"),d.setUint32(40,32,!0),i.src="data:audio/wav;base64,"+btoa(String.fromCharCode(...f)),i.play().then(()=>{c.track||(i.pause(),i.removeAttribute("src"),i.load())}).catch(()=>{}),c}set(t,i,s){this.enabled=t,this.settings={...i},this.paused=s,this.apply()}apply(){var c;const t=this.ctx;if(!t||t.state==="closed")return;const i=t.currentTime,s=this.enabled&&!this.paused&&!document.hidden;this.master.gain.setTargetAtTime(s?.65:0,i,.18);for(const[f,d,p]of[[this.engine,this.settings.engine,this.settings.engineEnabled],[this.space,this.settings.space,this.settings.spaceEnabled],[this.music,this.settings.music,this.settings.musicEnabled]])f.gain.setTargetAtTime(p?d:0,i,.16);const l=Zl.find(f=>f.id===this.settings.track)??Zl[0];(!this.current||((c=this.current.track)==null?void 0:c.id)!==l.id)&&this.changeTrack(l),this.musicActive?(clearTimeout(this.pauseTimer),this.pauseTimer=void 0,this.current.element.paused&&!this.current.pending?this.play(this.current):!this.current.element.paused&&this.current.element.readyState>=3?this.report("playing"):this.report("loading")):(this.report("paused"),this.pauseTimer||(this.pauseTimer=setTimeout(()=>{var f;this.pauseTimer=void 0,this.musicActive||((f=this.current)==null||f.element.pause(),this.current&&(this.current.pending=!1))},1100)))}changeTrack(t){const i=this.ctx,s=i.currentTime;clearTimeout(this.fadeTimer),this.retiring&&this.release(this.retiring);const l=this.current,c=this.slots.find(f=>f!==l);this.release(c),c.track=t,c.element.src=`/cosmic-drift/audio/${t.file}`,c.gain.gain.setValueAtTime(0,s),c.gain.gain.setTargetAtTime(1,s,.3),this.current=c,this.report("loading"),l&&(l.gain.gain.cancelScheduledValues(s),l.gain.gain.setTargetAtTime(0,s,.2),this.retiring=l,this.fadeTimer=setTimeout(()=>{this.release(l),this.retiring===l&&(this.retiring=void 0)},1200))}play(t){if(t.pending||!t.track)return;t.element.error&&t.element.load();const i=++t.request;t.pending=!0,this.current===t&&this.report("loading"),t.element.play().then(()=>{t.request===i&&(t.pending=!1,this.current===t&&this.musicActive&&this.report("playing"))}).catch(s=>{t.request===i&&(t.pending=!1,!(s instanceof DOMException&&s.name==="AbortError")&&this.current===t&&this.report("error",s instanceof DOMException&&s.name==="NotAllowedError"?"Tap the selected track again to allow playback.":"This recording could not play. Select it again to retry."))})}release(t){t.request++,t.pending=!1,t.track=null,t.element.pause(),t.element.removeAttribute("src"),t.element.load(),this.ctx&&this.ctx.state!=="closed"&&(t.gain.gain.cancelScheduledValues(this.ctx.currentTime),t.gain.gain.value=0)}jump(t,i,s){if(!this.ctx||this.ctx.state==="closed"||!this.jumpGain||(s&&(t=i=0),Math.abs(t-this.lastDrive)<.01&&Math.abs(i-this.lastCharge)<.01&&!(t===0&&this.lastDrive!==0)))return;this.lastDrive=t,this.lastCharge=i;const l=this.ctx.currentTime;this.jumpGain.gain.cancelScheduledValues(l),this.jumpGain.gain.setTargetAtTime(.018*i+.055*t,l,.15),this.jumpTone.frequency.cancelScheduledValues(l),this.jumpTone.frequency.setTargetAtTime(42+i*12+t*145,l,.25),this.jumpFilter.frequency.cancelScheduledValues(l),this.jumpFilter.frequency.setTargetAtTime(250+t*1100,l,.25)}dispose(){var t;clearTimeout(this.fadeTimer),clearTimeout(this.pauseTimer),document.removeEventListener("visibilitychange",this.visibility);for(const i of this.slots)i.element.onwaiting=i.element.onplaying=i.element.onerror=null,this.release(i),i.source.disconnect(),i.gain.disconnect();this.current=this.retiring=void 0,this.slots=[],this.onMusicState=void 0,(t=this.ctx)==null||t.close().catch(()=>{}),this.ctx=null}}function y3({sound:r,paused:t,playback:i,settings:s,onToggle:l,onChange:c,onTrack:f}){const d=i.state==="error"?i.message:r?t?"Audio paused · resume the journey to listen":s.musicEnabled?s.music<=0?"Music volume is zero · raise it to listen":i.state==="playing"?"Playing your selection · recorded music":i.state==="paused"?"Music paused · select the track to continue":"Loading recording…":"Music is off · engine and space follow your settings":"Audio is off · choose a track or enable sound";return Q.jsxs(Q.Fragment,{children:[Q.jsx("p",{children:"Your own mix of engine, space and music."}),Q.jsxs("button",{className:"sound-toggle",onClick:l,children:[r?"Mute all audio":"Enable sound",r?Q.jsx(Ku,{size:17}):Q.jsx(Gx,{size:17})]}),Q.jsx("div",{className:"audio-channels",children:[{toggle:"engineEnabled",volume:"engine",name:"Engine sound",label:"Engine volume",hint:"Engine hum and Light Jump"},{toggle:"spaceEnabled",volume:"space",name:"Space ambience",label:"Space volume",hint:"A soft, atmospheric soundscape"},{toggle:"musicEnabled",volume:"music",name:"Music",label:"Music volume",hint:"Your selected relaxation track"}].map(p=>Q.jsxs("div",{className:"audio-channel",children:[Q.jsxs("label",{className:"check",children:[Q.jsx("input",{type:"checkbox",checked:s[p.toggle],onChange:m=>c({[p.toggle]:m.target.checked})}),Q.jsxs("span",{children:[p.name,Q.jsx("small",{children:p.hint})]})]}),Q.jsxs("label",{className:"audio-level",children:["Volume ",Q.jsxs("output",{children:[Math.round(s[p.volume]*100),"%"]}),Q.jsx("input",{"aria-label":p.label,type:"range",min:"0",max:"1",step:".01",disabled:!s[p.toggle],value:s[p.volume],onChange:m=>c({[p.volume]:+m.target.value})})]})]},p.volume))}),Q.jsxs("fieldset",{className:"music-library",children:[Q.jsx("legend",{children:"Choose your music"}),Zl.map((p,m)=>Q.jsxs("label",{className:`music-option ${s.track===p.id?"selected":""}`,children:[Q.jsx("input",{onClick:()=>{s.track===p.id&&f(p.id)},type:"radio",name:"music-track","aria-label":p.name,checked:s.track===p.id,onChange:()=>f(p.id)}),Q.jsx("span",{className:`music-art music-art-${m}`,"aria-hidden":"true",children:["✦","◌","◎","☾"][m]}),Q.jsxs("span",{className:"music-description",children:[p.name,Q.jsx("small",{children:p.mood}),Q.jsxs("small",{children:[p.artist," · CC BY 3.0"]})]})]},p.id))]}),Q.jsx("small",{className:"audio-note","data-playback-state":i.state,"aria-live":"polite",children:d}),Q.jsx("small",{className:"audio-license",children:"Recorded music by Kevin MacLeod · free with attribution"}),Q.jsxs("details",{className:"music-credits",children:[Q.jsx("summary",{children:"Music credits & licenses"}),Q.jsxs("p",{children:["All four recordings are by ",Q.jsx("a",{href:"https://incompetech.com/",target:"_blank",rel:"noreferrer",children:"Kevin MacLeod"}),", used under ",Q.jsx("a",{href:"https://creativecommons.org/licenses/by/3.0/",target:"_blank",rel:"noreferrer",children:"CC BY 3.0"}),"."]}),Zl.map(p=>Q.jsxs("a",{href:`https://incompetech.com/music/royalty-free/index.html?isrc=${p.isrc}`,target:"_blank",rel:"noreferrer",children:[p.name," ↗"]},p.id)),Q.jsxs("p",{children:["Audio editions from FitVita: trimmed, faded, loudness-normalized and encoded to Opus; converted to MP3 for this site. ",Q.jsx("a",{href:"https://github.com/smyrna-pergamum/fitvita",target:"_blank",rel:"noreferrer",children:"Source & credits ↗"})]})]})]})}const Fx=[{name:"Autopilot",icon:zp},{name:"Manual Flight",icon:IE},{name:"Meditation",icon:GE}];function x3(){const[r,t]=ge.useState("Autopilot"),[i,s]=ge.useState(18),[l,c]=ge.useState(!1),[f,d]=ge.useState(0),[p,m]=ge.useState(()=>matchMedia("(any-pointer: coarse)").matches?"Low":"Medium"),[v,g]=ge.useState(matchMedia("(prefers-reduced-motion: reduce)").matches),[y,x]=ge.useState(.6),[E,T]=ge.useState(!0),[M,_]=ge.useState(!1),[w,C]=ge.useState(!1),[b,P]=ge.useState(""),[z,I]=ge.useState(!1),[O,N]=ge.useState(!0),[A,V]=ge.useState(""),[Y,J]=ge.useState(!1),[pt,$]=ge.useState(1),[q,U]=ge.useState(.7),[B,it]=ge.useState(!1),[dt,Nt]=ge.useState(!1),[Rt,Qt]=ge.useState("Balanced"),[H,et]=ge.useState(.28),[K,j]=ge.useState(!1),[yt,bt]=ge.useState(!0),[Mt,wt]=ge.useState("idle"),[Ot,k]=ge.useState(7123),[Et,St]=ge.useState(0),[ht,mt]=ge.useState({current:"Perseus Anchorage",next:"Deep-space systems",distance:0}),[Ct,Dt]=ge.useState({state:"idle",track:null}),[It,le]=ge.useState(()=>{try{return v3(localStorage.getItem(Bx))}catch{return{...i0}}}),se=ge.useRef(new IS),F=ge.useRef(()=>{}),R=Mt!=="idle",ot=ge.useRef(null),gt=ge.useRef(new WR),Lt=ge.useRef(null),xt=ge.useRef(new _3),Wt=ge.useRef({mode:r,speed:i,paused:l,region:f,quality:p,reduced:v,motion:y,cockpit:E,started:M,blocked:!!b||R,sensitivity:pt,touchSensitivity:q,invertMouseX:B,invertMouseY:dt,lighting:Rt,bloom:H,performanceMode:K,adaptive:yt,worldSeed:Ot});Wt.current={mode:r,speed:i,paused:l,region:f,quality:p,reduced:v,motion:y,cockpit:E,started:M,blocked:!!b||R,sensitivity:pt,touchSensitivity:q,invertMouseX:B,invertMouseY:dt,lighting:Rt,bloom:H,performanceMode:K,adaptive:yt,worldSeed:Ot},ge.useEffect(()=>{try{return g3(Lt.current,()=>Wt.current,gt.current,ot.current,{onNavigation:mt,jump:se.current,onPhase:wt,onDestination:(ut,re)=>{d(ut),k(re)},onAudio:(ut,re,W)=>xt.current.jump(ut,re,W)})}catch{V("WebGL could not start. Please enable hardware acceleration and reload.")}},[]),ge.useEffect(()=>(xt.current.onMusicState=Dt,()=>xt.current.dispose()),[]),ge.useEffect(()=>{const ut=setInterval(()=>St(gt.current.speed),200);return()=>clearInterval(ut)},[]),ge.useEffect(()=>{xt.current.set(z,It,l)},[z,It,l]),ge.useEffect(()=>{try{localStorage.setItem(Bx,JSON.stringify(It))}catch{}},[It]),ge.useEffect(()=>{const ut=setInterval(()=>{O&&M&&!l&&!se.current.busy&&d(re=>(re+1)%5)},9e4);return()=>clearInterval(ut)},[O,M,l]),ge.useEffect(()=>{const ut=W=>{W.target instanceof HTMLElement&&W.target.closest('input,select,textarea,[contenteditable="true"]')||(W.code==="KeyJ"&&!W.repeat&&!W.ctrlKey&&!W.metaKey&&!W.altKey&&(W.preventDefault(),F.current()),W.code==="KeyR"&&gt.current.centerLook(),W.key.toLowerCase()==="h"&&C(Bt=>!Bt),W.code==="Space"&&!(W.target instanceof HTMLElement&&W.target.closest("button,a"))&&(W.preventDefault(),c(Bt=>!Bt)),W.key==="Escape"&&(C(!1),P("")))},re=()=>J(!!document.fullscreenElement);return window.addEventListener("keydown",ut),document.addEventListener("fullscreenchange",re),()=>{window.removeEventListener("keydown",ut),document.removeEventListener("fullscreenchange",re)}},[]);const Gt=async()=>{try{await xt.current.start(),I(ut=>!ut)}catch{V("Audio is unavailable in this browser. The journey can continue silently.")}},Jt=async ut=>{try{await xt.current.start(ut),le(re=>({...re,track:ut,musicEnabled:!0})),I(!0)}catch{V("Audio is unavailable in this browser. The journey can continue silently.")}},te=()=>{_(!0),c(!1)},Pt=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{V("Fullscreen is unavailable in this browser.")}},qt=ut=>{se.current.busy||(t(ut),_(!0))},he=()=>{se.current.start(f,Ot,l)&&(_(!0),P(""),wt("charging"))};F.current=he;const ie=l&&R?"Jump paused":Mt==="charging"?"Charging drive…":Mt==="accelerating"?"Accelerating…":Mt==="transit"?"Crossing the light…":Mt==="arriving"?`Entering ${La[se.current.destination].name}…`:Mt==="stabilized"?`Arrived: ${La[se.current.destination].name}`:"";return Q.jsxs("main",{"data-jump-phase":Mt,"data-world-seed":Ot,className:`${w?"hidden-ui":""} ${M?"journey-started":""} ${r==="Meditation"?"meditation":""} ${r==="Manual Flight"?"manual-flight":""} ${b||l||R?"controls-blocked":""} ${R?"jump-active":""}`,children:[Q.jsx("div",{className:"universe",ref:Lt}),Q.jsx("div",{className:"vignette"}),Q.jsxs("div",{className:"touch-controls ui",children:[Q.jsxs("div",{ref:ot,className:"touch-joystick",role:"group","aria-label":"Touch flight joystick",children:[Q.jsx("span",{className:"stick-cross",children:"+"}),Q.jsx("span",{className:"stick-thumb"}),Q.jsx("small",{children:"STEER"})]}),Q.jsx("span",{className:"touch-look-hint",children:"DRAG SPACE TO LOOK"})]}),Q.jsxs("header",{className:"ui",children:[Q.jsxs("a",{className:"brand",href:"#",onClick:ut=>{ut.preventDefault(),C(!1)},children:[Q.jsx(BE,{size:32}),Q.jsxs("span",{children:["COSMIC DRIFT",Q.jsx("small",{children:"A QUIETER KIND OF JOURNEY"})]})]}),Q.jsxs("nav",{children:[Q.jsx("span",{className:"live-dot"})," ALL SYSTEMS AT PEACE ",Q.jsx("span",{className:"nav-line"}),Q.jsx("button",{title:"Audio settings",onClick:()=>P(b==="audio"?"":"audio"),children:Q.jsx(Ku,{size:18})}),Q.jsx("button",{title:"Settings",onClick:()=>P(b==="settings"?"":"settings"),children:Q.jsx(tp,{size:18})}),Q.jsx("button",{title:"Fullscreen",onClick:Pt,children:Q.jsx(yy,{size:18})})]})]}),Q.jsxs("section",{className:"intro ui",children:[Q.jsxs("div",{className:"eyebrow",children:[Q.jsx("span",{})," LEAVE THE NOISE BEHIND"]}),Q.jsxs("h1",{children:["Nowhere to be.",Q.jsx("br",{}),"Just ",Q.jsx("em",{children:"drift."})]}),Q.jsxs("p",{children:["A quiet passage through an infinite universe.",Q.jsx("br",{}),"No destination. No demands. Just you and the stars."]}),Q.jsxs("button",{className:"start",onClick:te,children:[M?l?"Resume journey":"Journey in progress":"Start journey",Q.jsx(zE,{size:18})]}),Q.jsxs("div",{className:"intro-note",children:[Q.jsx("span",{})," ",M?"TAKE YOUR TIME. YOU HAVE ALL OF IT.":"YOUR OWN LITTLE CORNER OF INFINITY"]})]}),Q.jsxs("aside",{className:"region-label ui",children:[Q.jsx("span",{className:"coordinate",children:ht.current}),Q.jsx("div",{className:"region-rule"}),Q.jsx("span",{className:"eyebrow",children:"YOU ARE DRIFTING THROUGH"}),Q.jsx("h2",{children:La[f].name}),Q.jsx("p",{children:La[f].subtitle}),Q.jsxs("p",{className:"destination-line",children:["Next: ",ht.next," · ",ht.distance.toLocaleString()," u"]}),Q.jsxs("button",{disabled:R,onClick:()=>P(b==="regions"?"":"regions"),children:["Explore regions ",Q.jsx(Jd,{size:14})]})]}),Q.jsxs("div",{className:"travel-marker ui",children:[Q.jsx("span",{children:"✧"}),Q.jsx("i",{}),Q.jsx("small",{children:"AN INFINITE UNIVERSE. AN UNHURRIED YOU."})]}),Q.jsxs("section",{className:"flight-deck ui",children:[Q.jsxs("div",{className:"deck-top",children:[Q.jsxs("div",{className:"deck-label",children:[Q.jsx("span",{className:"live-dot"}),l?"JOURNEY PAUSED":M?"JOURNEY ACTIVE":"READY WHEN YOU ARE"]}),Q.jsxs("div",{className:"jump-tools",children:[Q.jsx("span",{className:"jump-status",role:"status","aria-live":"polite",children:ie}),Q.jsx("span",{className:"ship-name",children:"AETHER–01"}),Q.jsxs("button",{className:"jump-button",disabled:R||l,onClick:he,"aria-keyshortcuts":"J",children:[Q.jsx(VE,{size:14}),"Light Jump",Q.jsx("kbd",{children:"J"})]})]})]}),Q.jsxs("div",{className:"deck-controls",children:[Q.jsx("div",{className:"mode-controls",children:Fx.map(ut=>Q.jsxs("button",{disabled:R,className:r===ut.name?"selected":"",onClick:()=>qt(ut.name),children:[Q.jsx(ut.icon,{size:17}),Q.jsxs("span",{children:[ut.name,ut.name==="Meditation"?" mode":""]})]},ut.name))}),Q.jsxs("div",{className:"speed",children:[Q.jsxs("label",{htmlFor:"speed",children:["CRUISE SPEED ",Q.jsxs("span",{children:[Et.toFixed(0)," ",Q.jsx("small",{title:"Game units per second",children:"u/s"})]})]}),Q.jsx("input",{id:"speed",disabled:R,type:"range",min:"0",max:"1200",value:i,onChange:ut=>s(+ut.target.value)}),Q.jsxs("div",{children:[Q.jsx("span",{children:"0 · BRAKE"}),Q.jsx("span",{children:"INTERSTELLAR"})]})]}),Q.jsxs("div",{className:"deck-actions",children:[Q.jsx("button",{title:l?"Resume":"Pause",onClick:()=>c(ut=>!ut),children:l?Q.jsx(HE,{size:19}):Q.jsx(FE,{size:19})}),Q.jsx("button",{className:"desktop-deck-action",title:z?"Mute audio":"Enable audio",onClick:Gt,children:z?Q.jsx(Ku,{size:19}):Q.jsx(Gx,{size:19})}),Q.jsx("button",{className:"desktop-deck-action",title:"Hide interface (H)",onClick:()=>C(!0),children:Q.jsx($d,{size:19})}),Q.jsxs("button",{className:"mobile-controls-toggle mobile-only","aria-label":b?"Close controls":"Open controls",title:b?"Close controls":"Open controls","aria-expanded":!!b,"aria-controls":"flight-panel",onClick:()=>P(b?"":"controls"),children:[Q.jsx(tp,{size:18}),Q.jsx("span",{children:b?"Close":"Controls"})]})]})]})]}),Q.jsxs("footer",{className:"ui",children:[Q.jsxs("span",{children:[Q.jsx("span",{className:"key",children:"DRAG"})," TO LOOK 360° · R TO CENTER ",Q.jsx("i",{})," ",Q.jsx("span",{className:"key",children:r==="Manual Flight"?"W A S D":"H"})," ",r==="Manual Flight"?"TO STEER":"TO HIDE INTERFACE"]}),Q.jsxs("span",{children:["BUILT FOR WANDERING ",Q.jsx("span",{className:"tiny-star",children:"✦"})]})]}),w&&Q.jsxs("button",{className:"restore",onClick:()=>C(!1),children:[Q.jsx($d,{size:16})," Show controls · H"]}),b&&Q.jsx("button",{className:"mobile-panel-scrim mobile-only ui","aria-label":"Close controls overlay",onClick:()=>P("")}),b&&Q.jsxs("div",{id:"flight-panel",className:"panel ui",role:"region","aria-label":b==="controls"?"Flight controls":b==="audio"?"Sound settings":b==="regions"?"Region settings":"Flight settings",children:[Q.jsxs("div",{className:"panel-head",children:[b!=="controls"&&Q.jsx("button",{className:"mobile-only mobile-panel-back",title:"Back to controls",onClick:()=>P("controls"),children:Q.jsx(Jd,{size:18})}),Q.jsx("span",{children:b==="controls"?"Flight controls":b==="regions"?"Choose your horizon":b==="audio"?"The sound of stillness":"Make space your own"}),Q.jsx("button",{title:"Close settings",onClick:()=>P(""),children:Q.jsx(xy,{size:19})})]}),b==="controls"?Q.jsxs("div",{className:"mobile-controls-content",children:[Q.jsxs("div",{className:"system-route",children:[Q.jsx("strong",{children:ht.current}),Q.jsxs("span",{children:["Next: ",ht.next," · ",ht.distance.toLocaleString()," u"]})]}),Q.jsx("span",{className:"mobile-section-label",children:"FLIGHT MODE"}),Q.jsx("div",{className:"mobile-mode-controls",children:Fx.map(ut=>Q.jsxs("button",{className:r===ut.name?"selected":"","aria-pressed":r===ut.name,disabled:R,onClick:()=>{qt(ut.name),P("")},children:[Q.jsx(ut.icon,{size:18}),Q.jsxs("span",{children:[ut.name,ut.name==="Meditation"?" mode":""]})]},ut.name))}),Q.jsxs("div",{className:"mobile-control-links",children:[Q.jsxs("button",{onClick:()=>P("audio"),children:[Q.jsx(Ku,{size:19}),Q.jsx("span",{children:"Music & sound"})]}),Q.jsxs("button",{onClick:()=>P("settings"),children:[Q.jsx(tp,{size:19}),Q.jsx("span",{children:"Graphics & controls"})]}),Q.jsxs("button",{disabled:R,onClick:()=>P("regions"),children:[Q.jsx(zp,{size:19}),Q.jsx("span",{children:"Regions"})]})]}),Q.jsxs("div",{className:"mobile-control-tools",children:[Q.jsxs("button",{onClick:()=>{gt.current.centerLook(),P("")},children:[Q.jsx($d,{size:16})," Center view"]}),Q.jsx("button",{onClick:()=>{P(""),C(!0)},children:"Hide interface"})]})]}):b==="regions"?Q.jsxs(Q.Fragment,{children:[Q.jsx("p",{children:"Every corner of the universe has a different kind of quiet."}),La.map((ut,re)=>Q.jsxs("button",{disabled:R,className:`region-option ${f===re?"active":""}`,onClick:()=>d(re),children:[Q.jsx("span",{className:"orb",style:{background:`radial-gradient(circle at 30% 30%,${ut.color},${ut.second},#070a12)`}}),Q.jsxs("span",{children:[ut.name,Q.jsx("small",{children:ut.subtitle})]}),f===re?"●":Q.jsx(Jd,{size:15})]},ut.name)),Q.jsxs("label",{className:"check",children:[Q.jsx("input",{type:"checkbox",checked:O,onChange:ut=>N(ut.target.checked)})," Automatically drift between regions · 90s"]})]}):b==="audio"?Q.jsx(y3,{sound:z,paused:l,playback:Ct,settings:It,onToggle:Gt,onTrack:Jt,onChange:ut=>le(re=>({...re,...ut}))}):Q.jsxs(Q.Fragment,{children:[Q.jsx("p",{className:"setting-note",children:"Speed is shown in game units per second. Distances are scaled for relaxed exploration."}),Q.jsxs("label",{className:"setting",children:["Graphics quality",Q.jsx("select",{"aria-label":"Graphics quality",value:p,onChange:ut=>m(ut.target.value),children:["Low","Medium","High"].map(ut=>Q.jsx("option",{children:ut},ut))})]}),Q.jsxs("label",{className:"check",children:[Q.jsx("input",{type:"checkbox",checked:K,onChange:ut=>j(ut.target.checked)})," Performance mode"]}),Q.jsxs("label",{className:"check",children:[Q.jsx("input",{type:"checkbox",checked:yt,onChange:ut=>bt(ut.target.checked)})," Adaptive resolution"]}),Q.jsx("small",{className:"setting-note",children:"Performance mode prioritizes smooth flight. Adaptive resolution adjusts image detail when rendering is slow."}),Q.jsxs("label",{className:"setting",children:["Environment lighting",Q.jsx("select",{"aria-label":"Environment lighting",value:Rt,onChange:ut=>Qt(ut.target.value),children:["Dark","Balanced","Cinematic"].map(ut=>Q.jsx("option",{children:ut},ut))})]}),Q.jsxs("label",{className:"setting",children:["Soft bloom ",Q.jsxs("output",{children:[Math.round(H*100),"%"]}),Q.jsx("input",{"aria-label":"Soft bloom",type:"range",min:"0",max:".6",step:".02",value:H,onChange:ut=>et(+ut.target.value)}),Q.jsx("small",{className:"setting-note",children:"Low / Medium use lightweight star halos; High can add post-processing bloom."})]}),Q.jsxs("label",{className:"setting",children:["Steering / mouse sensitivity ",Q.jsxs("output",{children:[pt.toFixed(2),"×"]}),Q.jsx("input",{"aria-label":"Steering and mouse sensitivity",type:"range",min:".25",max:"2",step:".05",value:pt,onChange:ut=>$(+ut.target.value)})]}),Q.jsxs("label",{className:"setting",children:["Touch sensitivity ",Q.jsxs("output",{children:[q.toFixed(2),"×"]}),Q.jsx("input",{"aria-label":"Touch sensitivity",type:"range",min:".25",max:"1.5",step:".05",value:q,onChange:ut=>U(+ut.target.value)})]}),Q.jsxs("label",{className:"check",children:[Q.jsx("input",{type:"checkbox",checked:B,onChange:ut=>it(ut.target.checked)})," Invert mouse horizontal axis"]}),Q.jsxs("label",{className:"check",children:[Q.jsx("input",{type:"checkbox",checked:dt,onChange:ut=>Nt(ut.target.checked)})," Invert mouse vertical axis"]}),Q.jsxs("label",{className:"setting",children:["Camera movement",Q.jsx("input",{"aria-label":"Camera movement",type:"range",min:"0",max:"1",step:".05",value:y,onChange:ut=>x(+ut.target.value)})]}),Q.jsxs("label",{className:"check",children:[Q.jsx("input",{type:"checkbox",checked:v,onChange:ut=>g(ut.target.checked)})," Reduced motion"]}),Q.jsxs("button",{className:"sound-toggle",onClick:()=>gt.current.centerLook(),children:["Center view · R",Q.jsx(zp,{size:16})]}),Q.jsxs("label",{className:"check",children:[Q.jsx("input",{type:"checkbox",checked:E,onChange:ut=>T(ut.target.checked)})," Show cockpit"]}),Q.jsxs("button",{className:"sound-toggle",onClick:Pt,children:[Y?"Exit fullscreen":"Enter fullscreen",Q.jsx(yy,{size:16})]})]})]}),A&&Q.jsxs("div",{role:"alert",className:"error",children:[A,Q.jsx("button",{onClick:()=>V(""),"aria-label":"Dismiss error",children:Q.jsx(xy,{size:16})})]})]})}UE.createRoot(document.getElementById("root")).render(Q.jsx(x3,{}));
