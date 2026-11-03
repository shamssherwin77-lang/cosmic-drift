var EE=Object.defineProperty;var TE=(r,t,i)=>t in r?EE(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;var oe=(r,t,i)=>TE(r,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();var Zd={exports:{}},yl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hy;function bE(){if(hy)return yl;hy=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,c){var f=null;if(c!==void 0&&(f=""+c),l.key!==void 0&&(f=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:c}}return yl.Fragment=t,yl.jsx=i,yl.jsxs=i,yl}var dy;function AE(){return dy||(dy=1,Zd.exports=bE()),Zd.exports}var gt=AE(),Qd={exports:{}},ve={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var py;function wE(){if(py)return ve;py=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),x=Symbol.iterator;function E(X){return X===null||typeof X!="object"?null:(X=x&&X[x]||X["@@iterator"],typeof X=="function"?X:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,_={};function w(X,ut,J){this.props=X,this.context=ut,this.refs=_,this.updater=J||T}w.prototype.isReactComponent={},w.prototype.setState=function(X,ut){if(typeof X!="object"&&typeof X!="function"&&X!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,X,ut,"setState")},w.prototype.forceUpdate=function(X){this.updater.enqueueForceUpdate(this,X,"forceUpdate")};function D(){}D.prototype=w.prototype;function b(X,ut,J){this.props=X,this.context=ut,this.refs=_,this.updater=J||T}var V=b.prototype=new D;V.constructor=b,S(V,w.prototype),V.isPureReactComponent=!0;var H=Array.isArray;function P(){}var O={H:null,A:null,T:null,S:null},C=Object.prototype.hasOwnProperty;function A(X,ut,J){var W=J.ref;return{$$typeof:r,type:X,key:ut,ref:W!==void 0?W:null,props:J}}function G(X,ut){return A(X.type,ut,X.props)}function Y(X){return typeof X=="object"&&X!==null&&X.$$typeof===r}function Z(X){var ut={"=":"=0",":":"=2"};return"$"+X.replace(/[=:]/g,function(J){return ut[J]})}var it=/\/+/g;function j(X,ut){return typeof X=="object"&&X!==null&&X.key!=null?Z(""+X.key):ut.toString(36)}function k(X){switch(X.status){case"fulfilled":return X.value;case"rejected":throw X.reason;default:switch(typeof X.status=="string"?X.then(P,P):(X.status="pending",X.then(function(ut){X.status==="pending"&&(X.status="fulfilled",X.value=ut)},function(ut){X.status==="pending"&&(X.status="rejected",X.reason=ut)})),X.status){case"fulfilled":return X.value;case"rejected":throw X.reason}}throw X}function U(X,ut,J,W,Et){var Rt=typeof X;(Rt==="undefined"||Rt==="boolean")&&(X=null);var dt=!1;if(X===null)dt=!0;else switch(Rt){case"bigint":case"string":case"number":dt=!0;break;case"object":switch(X.$$typeof){case r:case t:dt=!0;break;case v:return dt=X._init,U(dt(X._payload),ut,J,W,Et)}}if(dt)return Et=Et(X),dt=W===""?"."+j(X,0):W,H(Et)?(J="",dt!=null&&(J=dt.replace(it,"$&/")+"/"),U(Et,ut,J,"",function(I){return I})):Et!=null&&(Y(Et)&&(Et=G(Et,J+(Et.key==null||X&&X.key===Et.key?"":(""+Et.key).replace(it,"$&/")+"/")+dt)),ut.push(Et)),1;dt=0;var bt=W===""?".":W+":";if(H(X))for(var vt=0;vt<X.length;vt++)W=X[vt],Rt=bt+j(W,vt),dt+=U(W,ut,J,Rt,Et);else if(vt=E(X),typeof vt=="function")for(X=vt.call(X),vt=0;!(W=X.next()).done;)W=W.value,Rt=bt+j(W,vt++),dt+=U(W,ut,J,Rt,Et);else if(Rt==="object"){if(typeof X.then=="function")return U(k(X),ut,J,W,Et);throw ut=String(X),Error("Objects are not valid as a React child (found: "+(ut==="[object Object]"?"object with keys {"+Object.keys(X).join(", ")+"}":ut)+"). If you meant to render a collection of children, use an array instead.")}return dt}function z(X,ut,J){if(X==null)return X;var W=[],Et=0;return U(X,W,"","",function(Rt){return ut.call(J,Rt,Et++)}),W}function $(X){if(X._status===-1){var ut=X._result,J=ut();J.then(function(W){(X._status===0||X._status===-1)&&(X._status=1,X._result=W,J.status===void 0&&(J.status="fulfilled",J.value=W))},function(W){(X._status===0||X._status===-1)&&(X._status=2,X._result=W,J.status===void 0&&(J.status="rejected",J.reason=W))}),X._status===-1&&(X._status=0,X._result=J)}if(X._status===1)return X._result.default;throw X._result}var mt=typeof reportError=="function"?reportError:function(X){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ut=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof X=="object"&&X!==null&&typeof X.message=="string"?String(X.message):String(X),error:X});if(!window.dispatchEvent(ut))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",X);return}console.error(X)};function Nt(X){var ut=O.T,J={};J.types=ut!==null?ut.types:null,O.T=J;try{var W=X(),Et=O.S;Et!==null&&Et(J,W),typeof W=="object"&&W!==null&&typeof W.then=="function"&&W.then(P,mt)}catch(Rt){mt(Rt)}finally{ut!==null&&J.types!==null&&(ut.types=J.types),O.T=ut}}function Xt(X){var ut=O.T;if(ut!==null){var J=ut.types;J===null?ut.types=[X]:J.indexOf(X)===-1&&J.push(X)}else Nt(Xt.bind(null,X))}var Zt={map:z,forEach:function(X,ut,J){z(X,function(){ut.apply(this,arguments)},J)},count:function(X){var ut=0;return z(X,function(){ut++}),ut},toArray:function(X){return z(X,function(ut){return ut})||[]},only:function(X){if(!Y(X))throw Error("React.Children.only expected to receive a single React element child.");return X}};return ve.Activity=g,ve.Children=Zt,ve.Component=w,ve.Fragment=i,ve.Profiler=l,ve.PureComponent=b,ve.StrictMode=s,ve.Suspense=p,ve.ViewTransition=y,ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,ve.__COMPILER_RUNTIME={__proto__:null,c:function(X){return O.H.useMemoCache(X)}},ve.addTransitionType=Xt,ve.cache=function(X){return function(){return X.apply(null,arguments)}},ve.cacheSignal=function(){return null},ve.cloneElement=function(X,ut,J){if(X==null)throw Error("The argument must be a React element, but you passed "+X+".");var W=S({},X.props),Et=X.key;if(ut!=null)for(Rt in ut.key!==void 0&&(Et=""+ut.key),ut)!C.call(ut,Rt)||Rt==="key"||Rt==="__self"||Rt==="__source"||Rt==="ref"&&ut.ref===void 0||(W[Rt]=ut[Rt]);var Rt=arguments.length-2;if(Rt===1)W.children=J;else if(1<Rt){for(var dt=Array(Rt),bt=0;bt<Rt;bt++)dt[bt]=arguments[bt+2];W.children=dt}return A(X.type,Et,W)},ve.createContext=function(X){return X={$$typeof:f,_currentValue:X,_currentValue2:X,_threadCount:0,Provider:null,Consumer:null},X.Provider=X,X.Consumer={$$typeof:c,_context:X},X},ve.createElement=function(X,ut,J){var W,Et={},Rt=null;if(ut!=null)for(W in ut.key!==void 0&&(Rt=""+ut.key),ut)C.call(ut,W)&&W!=="key"&&W!=="__self"&&W!=="__source"&&(Et[W]=ut[W]);var dt=arguments.length-2;if(dt===1)Et.children=J;else if(1<dt){for(var bt=Array(dt),vt=0;vt<dt;vt++)bt[vt]=arguments[vt+2];Et.children=bt}if(X&&X.defaultProps)for(W in dt=X.defaultProps,dt)Et[W]===void 0&&(Et[W]=dt[W]);return A(X,Rt,Et)},ve.createRef=function(){return{current:null}},ve.forwardRef=function(X){return{$$typeof:d,render:X}},ve.isValidElement=Y,ve.lazy=function(X){return{$$typeof:v,_payload:{_status:-1,_result:X},_init:$}},ve.memo=function(X,ut){return{$$typeof:m,type:X,compare:ut===void 0?null:ut}},ve.startTransition=Nt,ve.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},ve.use=function(X){return O.H.use(X)},ve.useActionState=function(X,ut,J){return O.H.useActionState(X,ut,J)},ve.useCallback=function(X,ut){return O.H.useCallback(X,ut)},ve.useContext=function(X){return O.H.useContext(X)},ve.useDebugValue=function(){},ve.useDeferredValue=function(X,ut){return O.H.useDeferredValue(X,ut)},ve.useEffect=function(X,ut){return O.H.useEffect(X,ut)},ve.useEffectEvent=function(X){return O.H.useEffectEvent(X)},ve.useId=function(){return O.H.useId()},ve.useImperativeHandle=function(X,ut,J){return O.H.useImperativeHandle(X,ut,J)},ve.useInsertionEffect=function(X,ut){return O.H.useInsertionEffect(X,ut)},ve.useLayoutEffect=function(X,ut){return O.H.useLayoutEffect(X,ut)},ve.useMemo=function(X,ut){return O.H.useMemo(X,ut)},ve.useOptimistic=function(X,ut){return O.H.useOptimistic(X,ut)},ve.useReducer=function(X,ut,J){return O.H.useReducer(X,ut,J)},ve.useRef=function(X){return O.H.useRef(X)},ve.useState=function(X){return O.H.useState(X)},ve.useSyncExternalStore=function(X,ut,J){return O.H.useSyncExternalStore(X,ut,J)},ve.useTransition=function(){return O.H.useTransition()},ve.version="19.3.1",ve}var my;function Pm(){return my||(my=1,Qd.exports=wE()),Qd.exports}var he=Pm(),Kd={exports:{}},xl={},Jd={exports:{}},$d={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gy;function CE(){return gy||(gy=1,(function(r){function t(k,U){var z=k.length;k.push(U);t:for(;0<z;){var $=z-1>>>1,mt=k[$];if(0<l(mt,U))k[$]=U,k[z]=mt,z=$;else break t}}function i(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var U=k[0],z=k.pop();if(z!==U){k[0]=z;t:for(var $=0,mt=k.length,Nt=mt>>>1;$<Nt;){var Xt=2*($+1)-1,Zt=k[Xt],X=Xt+1,ut=k[X];if(0>l(Zt,z))X<mt&&0>l(ut,Zt)?(k[$]=ut,k[X]=z,$=X):(k[$]=Zt,k[Xt]=z,$=Xt);else if(X<mt&&0>l(ut,z))k[$]=ut,k[X]=z,$=X;else break t}}return U}function l(k,U){var z=k.sortIndex-U.sortIndex;return z!==0?z:k.id-U.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var p=[],m=[],v=1,g=null,y=3,x=!1,E=!1,T=!1,S=!1,_=typeof setTimeout=="function"?setTimeout:null,w=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function b(k){for(var U=i(m);U!==null;){if(U.callback===null)s(m);else if(U.startTime<=k)s(m),U.sortIndex=U.expirationTime,t(p,U);else break;U=i(m)}}function V(k){if(T=!1,b(k),!E)if(i(p)!==null)E=!0,H||(H=!0,Y());else{var U=i(m);U!==null&&j(V,U.startTime-k)}}var H=!1,P=-1,O=5,C=-1;function A(){return S?!0:!(r.unstable_now()-C<O)}function G(){if(S=!1,H){var k=r.unstable_now();C=k;var U=!0;try{t:{E=!1,T&&(T=!1,w(P),P=-1),x=!0;var z=y;try{e:{for(b(k),g=i(p);g!==null&&!(g.expirationTime>k&&A());){var $=g.callback;if(typeof $=="function"){g.callback=null,y=g.priorityLevel;var mt=$(g.expirationTime<=k);if(k=r.unstable_now(),typeof mt=="function"){g.callback=mt,b(k),U=!0;break e}g===i(p)&&s(p),b(k)}else s(p);g=i(p)}if(g!==null)U=!0;else{var Nt=i(m);Nt!==null&&j(V,Nt.startTime-k),U=!1}}break t}finally{g=null,y=z,x=!1}U=void 0}}finally{U?Y():H=!1}}}var Y;if(typeof D=="function")Y=function(){D(G)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,it=Z.port2;Z.port1.onmessage=G,Y=function(){it.postMessage(null)}}else Y=function(){_(G,0)};function j(k,U){P=_(function(){k(r.unstable_now())},U)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(k){k.callback=null},r.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<k?Math.floor(1e3/k):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(k){switch(y){case 1:case 2:case 3:var U=3;break;default:U=y}var z=y;y=U;try{return k()}finally{y=z}},r.unstable_requestPaint=function(){S=!0},r.unstable_runWithPriority=function(k,U){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var z=y;y=k;try{return U()}finally{y=z}},r.unstable_scheduleCallback=function(k,U,z){var $=r.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?$+z:$):z=$,k){case 1:var mt=-1;break;case 2:mt=250;break;case 5:mt=1073741823;break;case 4:mt=1e4;break;default:mt=5e3}return mt=z+mt,k={id:v++,callback:U,priorityLevel:k,startTime:z,expirationTime:mt,sortIndex:-1},z>$?(k.sortIndex=z,t(m,k),i(p)===null&&k===i(m)&&(T?(w(P),P=-1):T=!0,j(V,z-$))):(k.sortIndex=mt,t(p,k),E||x||(E=!0,H||(H=!0,Y()))),k},r.unstable_shouldYield=A,r.unstable_wrapCallback=function(k){var U=y;return function(){var z=y;y=U;try{return k.apply(this,arguments)}finally{y=z}}}})($d)),$d}var vy;function RE(){return vy||(vy=1,Jd.exports=CE()),Jd.exports}var tp={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _y;function DE(){if(_y)return In;_y=1;var r=Pm();function t(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),c=Symbol.for("react.recoverable"),f=Symbol.for("react.optimistic_key");function d(v,g,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:x===f?f:""+x,children:v,containerInfo:g,implementation:y}}var p=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,In.browser=function(v){return{$$typeof:c,_reason:v}},In.createPortal=function(v,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return d(v,g,null,y)},In.flushSync=function(v){var g=p.T,y=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=g,s.p=y,s.d.f()}},In.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(v,g))},In.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},In.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var y=g.as,x=m(y,g.crossOrigin),E=typeof g.integrity=="string"?g.integrity:void 0,T=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:E,fetchPriority:T}):y==="script"&&s.d.X(v,{crossOrigin:x,integrity:E,fetchPriority:T,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},In.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=m(g.as,g.crossOrigin);s.d.M(v,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(v)},In.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,x=m(y,g.crossOrigin);s.d.L(v,y,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},In.preloadModule=function(v,g){if(typeof v=="string")if(g){var y=m(g.as,g.crossOrigin);s.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(v)},In.requestFormReset=function(v){s.d.r(v)},In.unstable_batchedUpdates=function(v,g){return v(g)},In.useFormState=function(v,g,y){return p.H.useFormState(v,g,y)},In.useFormStatus=function(){return p.H.useHostTransitionStatus()},In.version="19.3.1",In}var yy;function NE(){if(yy)return tp.exports;yy=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),tp.exports=DE(),tp.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xy;function UE(){if(xy)return xl;xy=1;var r=RE(),t=Pm(),i=NE();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function c(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(c(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=c(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var u=a.return;if(u===null)break;var h=u.alternate;if(h===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===h.child){for(h=u.child;h;){if(h===a)return p(u),e;if(h===o)return p(u),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=h;else{for(var M=!1,N=u.child;N;){if(N===a){M=!0,a=u,o=h;break}if(N===o){M=!0,o=u,a=h;break}N=N.sibling}if(!M){for(N=h.child;N;){if(N===a){M=!0,a=h,o=u;break}if(N===o){M=!0,o=h,a=u;break}N=N.sibling}if(!M)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}function g(e,n,a,o,u,h){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,o,u,h)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&g(e.child,n,a,o,u,h))return!0;e=e.sibling}return!1}function y(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function x(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function E(e){var n=[null,null],a=y(e);return a===null||T(n,e,a.child,{foundSelf:!1}),n}function T(e,n,a,o){for(;a!==null;){if(a===n)o.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(o.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&T(e,n,a.child,o))return!0;a=a.sibling}return!1}function S(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var _=null,w=null;function D(e,n,a){return e===a?!0:e===n?(_=e,!0):!1}function b(e,n,a){return e===a?(w=e,!1):e===n?(w!==null&&(_=e),!0):!1}function V(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function H(e,n,a){for(var o=0,u=e;u;u=a(u))o++;u=0;for(var h=n;h;h=a(h))u++;for(;0<o-u;)e=a(e),o--;for(;0<u-o;)n=a(n),u--;for(;o--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var P=Object.assign,O=Symbol.for("react.element"),C=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),G=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),Z=Symbol.for("react.profiler"),it=Symbol.for("react.consumer"),j=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),Nt=Symbol.for("react.activity"),Xt=Symbol.for("react.legacy_hidden"),Zt=Symbol.for("react.memo_cache_sentinel"),X=Symbol.for("react.view_transition"),ut=Symbol.for("react.recoverable"),J=Symbol.iterator;function W(e){return e===null||typeof e!="object"?null:(e=J&&e[J]||e["@@iterator"],typeof e=="function"?e:null)}var Et=Symbol.for("react.client.reference");function Rt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Et?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case G:return"Fragment";case Z:return"Profiler";case Y:return"StrictMode";case U:return"Suspense";case z:return"SuspenseList";case Nt:return"Activity";case X:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case j:return e.displayName||"Context";case it:return(e._context.displayName||"Context")+".Consumer";case k:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return n=e.displayName||null,n!==null?n:Rt(e.type)||"Memo";case mt:n=e._payload,e=e._init;try{return Rt(e(n))}catch{}}return null}var dt=Array.isArray,bt=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,vt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,I={pending:!1,data:null,method:null,action:null},Mt=[],yt=-1;function ct(e){return{current:e}}function ht(e){0>yt||(e.current=Mt[yt],Mt[yt]=null,yt--)}function At(e,n){yt++,Mt[yt]=e.current,e.current=n}var Dt=ct(null),Ot=ct(null),re=ct(null),se=ct(null);function B(e,n){switch(At(re,n),At(Ot,e),At(Dt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?S_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=S_(n),e=M_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ht(Dt),At(Dt,e)}function R(){ht(Dt),ht(Ot),ht(re)}function ot(e){var n=e.memoizedState;n!==null&&(jr._currentValue=n.memoizedState,At(se,e)),n=Dt.current;var a=M_(n,e.type);n!==a&&(At(Ot,e),At(Dt,a))}function _t(e){Ot.current===e&&(ht(Dt),ht(Ot)),se.current===e&&(ht(se),jr._currentValue=I)}var Ut,Tt;function Qt(e){if(Ut===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ut=n&&n[1]||"",Tt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ut+e+Tt}var Pt=!1;function te(e,n){if(!e||Pt)return"";Pt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var Ct=function(){throw Error()};if(Object.defineProperty(Ct.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Ct,[])}catch(qt){var tt=qt}Reflect.construct(e,[],Ct)}else{try{Ct.call()}catch(qt){tt=qt}Ct=!1;try{var ft=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),Ct=!0,new e}finally{Ct&&(ft!==void 0?Object.defineProperty(e.prototype,"props",ft):delete e.prototype.props)}}}else{try{throw Error()}catch(qt){tt=qt}(Ct=e())&&typeof Ct.catch=="function"&&Ct.catch(function(){})}}catch(qt){if(qt&&tt&&typeof qt.stack=="string")return[qt.stack,tt.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),M=h[0],N=h[1];if(M&&N){var q=M.split(`
`),nt=N.split(`
`);for(u=o=0;o<q.length&&!q[o].includes("DetermineComponentFrameRoot");)o++;for(;u<nt.length&&!nt[u].includes("DetermineComponentFrameRoot");)u++;if(o===q.length||u===nt.length)for(o=q.length-1,u=nt.length-1;1<=o&&0<=u&&q[o]!==nt[u];)u--;for(;1<=o&&0<=u;o--,u--)if(q[o]!==nt[u]){if(o!==1||u!==1)do if(o--,u--,0>u||q[o]!==nt[u]){var pt=`
`+q[o].replace(" at new "," at ");return e.displayName&&pt.includes("<anonymous>")&&(pt=pt.replace("<anonymous>",e.displayName)),pt}while(1<=o&&0<=u);break}}}finally{Pt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Qt(a):""}function ee(e,n){switch(e.tag){case 26:case 27:case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return e.child!==n&&n!==null?Qt("Suspense Fallback"):Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return te(e.type,!1);case 11:return te(e.type.render,!1);case 1:return te(e.type,!0);case 31:return Qt("Activity");case 30:return Qt("ViewTransition");default:return""}}function zt(e){try{var n="",a=null;do n+=ee(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Vt=Object.prototype.hasOwnProperty,de=r.unstable_scheduleCallback,ne=r.unstable_cancelCallback,Yt=r.unstable_shouldYield,_e=r.unstable_requestPaint,K=r.unstable_now,Ft=r.unstable_getCurrentPriorityLevel,Gt=r.unstable_ImmediatePriority,Jt=r.unstable_UserBlockingPriority,Lt=r.unstable_NormalPriority,at=r.unstable_LowPriority,Ht=r.unstable_IdlePriority,pe=r.log,je=r.unstable_setDisableYieldValue,Re=null,rn=null;function En(e){if(typeof pe=="function"&&je(e),rn&&typeof rn.setStrictMode=="function")try{rn.setStrictMode(Re,e)}catch{}}var Fn=Math.clz32?Math.clz32:Jl,ha=Math.log,Ro=Math.LN2;function Jl(e){return e>>>=0,e===0?32:31-(ha(e)/Ro|0)|0}var Ss=256,da=262144,Ms=4194304;function Mi(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Es(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var u=0,h=e.suspendedLanes,M=e.pingedLanes;e=e.warmLanes;var N=o&134217727;return N!==0?(o=N&~h,o!==0?u=Mi(o):(M&=N,M!==0?u=Mi(M):a||(a=N&~e,a!==0&&(u=Mi(a))))):(N=o&~h,N!==0?u=Mi(N):M!==0?u=Mi(M):a||(a=o&~e,a!==0&&(u=Mi(a)))),u===0?0:n!==0&&n!==u&&(n&h)===0&&(h=u&-u,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:u}function Ba(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function $l(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var o=31-Fn(a),u=1<<o;n|=e[o],a&=~u}return n}function Ef(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tc(){var e=Ms;return Ms<<=1,(Ms&62914560)===0&&(Ms=4194304),e}function Do(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ts(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Tf(e,n,a,o,u,h){var M=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var N=e.entanglements,q=e.expirationTimes,nt=e.hiddenUpdates;for(a=M&~a;0<a;){var pt=31-Fn(a),Ct=1<<pt;N[pt]=0,q[pt]=-1;var tt=nt[pt];if(tt!==null)for(nt[pt]=null,pt=0;pt<tt.length;pt++){var ft=tt[pt];ft!==null&&(ft.lane&=-536870913)}a&=~Ct}o!==0&&L(e,o,0),h!==0&&u===0&&e.tag!==0&&(e.suspendedLanes|=h&~(M&~n))}function L(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Fn(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function st(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Fn(a),u=1<<o;u&n|e[o]&n&&(e[o]|=n),a&=~u}}function xt(e,n){var a=n&-n;return a=(a&42)!==0?1:St(a),(a&(e.suspendedLanes|n))!==0?0:a}function St(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function rt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Bt(){var e=vt.p;return e!==0?e:(e=window.event,e===void 0?32:sy(e.type))}function Wt(e,n){var a=vt.p;try{return vt.p=e,n()}finally{vt.p=a}}var Kt=Math.random().toString(36).slice(2),kt="__reactFiber$"+Kt,ie="__reactProps$"+Kt,me="__reactContainer$"+Kt,ue="__reactEvents$"+Kt,be="__reactListeners$"+Kt,Ve="__reactHandles$"+Kt,nn="__reactResources$"+Kt,Be="__reactMarker$"+Kt,Pe="__reactLoad$"+Kt;function fe(e){delete e[kt],delete e[ie],delete e[be],delete e[Ve]}function Fe(e){var n;if(n=e[kt])return n;for(var a=e.parentNode;a;){if(n=a[me]||a[kt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=F_(e);e!==null;){if(a=e[kt])return a;e=F_(e)}return n}e=a,a=e.parentNode}return null}function Ee(e){if(e=e[kt]||e[me]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Tn(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function li(e){var n=e[nn];return n||(n=e[nn]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ze(e){e[Be]=!0}function Fa(e){e[Pe]=void 0}var Je=new Set,Wn={};function mn(e,n){cn(e,n),cn(e+"Capture",n)}function cn(e,n){for(Wn[e]=n,e=0;e<n.length;e++)Je.add(n[e])}var Hn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),fr={},ji={};function V1(e){return Vt.call(ji,e)?!0:Vt.call(fr,e)?!1:Hn.test(e)?ji[e]=!0:(fr[e]=!0,!1)}var Ie=!1;function o0(){var e=Ie;return Ie=!1,e}function ec(e,n,a){if(V1(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function nc(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function pa(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,o)}}function ci(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function l0(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function k1(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return u.call(this)},set:function(M){a=""+M,h.call(this,M)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(M){a=""+M},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function bf(e){if(!e._valueTracker){var n=l0(e)?"checked":"value";e._valueTracker=k1(e,n,""+e[n])}}function c0(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=l0(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}var X1=/[\n"\\]/g;function Ei(e){return e.replace(X1,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Af(e,n,a,o,u,h,M,N){e.name="",M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.type=M:e.removeAttribute("type"),n!=null?M==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ci(n)):e.value!==""+ci(n)&&(e.value=""+ci(n)):M!=="submit"&&M!=="reset"||e.removeAttribute("value"),n!=null?M==="number"&&e.value==n?wf(e,ci(e.value)):wf(e,ci(n)):a!=null?wf(e,ci(a)):o!=null&&e.removeAttribute("value"),u==null&&h!=null&&(e.defaultChecked=!!h),u!=null&&(e.checked=u&&typeof u!="function"&&typeof u!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?e.name=""+ci(N):e.removeAttribute("name")}function u0(e,n,a,o,u,h,M,N){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){bf(e);return}a=a!=null?""+ci(a):"",n=n!=null?""+ci(n):a,N||n===e.value||(e.value=n),e.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=N?e.checked:!!o,e.defaultChecked=!!o,M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"&&(e.name=M),bf(e)}function wf(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function hr(e,n,a,o){if(e=e.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<e.length;a++)u=n.hasOwnProperty("$"+e[a].value),e[a].selected!==u&&(e[a].selected=u),u&&o&&(e[a].defaultSelected=!0)}else{for(a=""+ci(a),n=null,u=0;u<e.length;u++){if(e[u].value===a){e[u].selected=!0,o&&(e[u].defaultSelected=!0);return}n!==null||e[u].disabled||(n=e[u])}n!==null&&(n.selected=!0)}}function f0(e,n,a){if(n!=null&&(n=""+ci(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ci(a):""}function h0(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(dt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=ci(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),bf(e)}function dr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var q1=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function d0(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||q1.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function p0(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="",Ie=!0);for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&(d0(e,u,o),Ie=!0)}else for(var h in n)n.hasOwnProperty(h)&&d0(e,h,n[h])}function Cf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Y1=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),W1=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ic(e){return W1.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Zi(){}var Rf=null;function Df(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var pr=null,mr=null;function m0(e){var n=Ee(e);if(n&&(e=n.stateNode)){var a=e[ie]||null;t:switch(e=n.stateNode,n.type){case"input":if(Af(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Ei(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var u=o[ie]||null;if(!u)throw Error(s(90));Af(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&c0(o)}break t;case"textarea":f0(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&hr(e,!!a.multiple,n,!1)}}}var Nf=!1;function g0(e,n,a){if(Nf)return e(n,a);Nf=!0;try{var o=e(n);return o}finally{if(Nf=!1,(pr!==null||mr!==null)&&(iu(),pr&&(n=pr,e=mr,mr=pr=null,m0(n),e)))for(n=0;n<e.length;n++)m0(e[n])}}function No(e,n){var a=e.stateNode;if(a===null)return null;var o=a[ie]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Uf=!1;if(ma)try{var Uo={};Object.defineProperty(Uo,"passive",{get:function(){Uf=!0}}),window.addEventListener("test",Uo,Uo),window.removeEventListener("test",Uo,Uo)}catch{Uf=!1}var Ha=null,Lf=null,ac=null;function v0(){if(ac)return ac;var e,n=Lf,a=n.length,o,u="value"in Ha?Ha.value:Ha.textContent,h=u.length;for(e=0;e<a&&n[e]===u[e];e++);var M=a-e;for(o=1;o<=M&&n[a-o]===u[h-o];o++);return ac=u.slice(e,1<o?1-o:void 0)}function sc(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function rc(){return!0}function _0(){return!1}function jn(e){function n(a,o,u,h,M){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=h,this.target=M,this.currentTarget=null;for(var N in e)e.hasOwnProperty(N)&&(a=e[N],this[N]=a?a(h):h[N]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?rc:_0,this.isPropagationStopped=_0,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=rc)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=rc)},persist:function(){},isPersistent:rc}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},oc=jn(Ga),Lo=P({},Ga,{view:0,detail:0}),j1=jn(Lo),Of,Pf,Oo,lc=P({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:If,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Oo&&(Oo&&e.type==="mousemove"?(Of=e.screenX-Oo.screenX,Pf=e.screenY-Oo.screenY):Pf=Of=0,Oo=e),Of)},movementY:function(e){return"movementY"in e?e.movementY:Pf}}),y0=jn(lc),Z1=P({},lc,{dataTransfer:0}),Q1=jn(Z1),K1=P({},Lo,{relatedTarget:0}),zf=jn(K1),J1=P({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),$1=jn(J1),tS=P({},Ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),eS=jn(tS),nS=P({},Ga,{data:0}),x0=jn(nS),iS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},aS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function rS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=sS[e])?!!n[e]:!1}function If(){return rS}var oS=P({},Lo,{key:function(e){if(e.key){var n=iS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=sc(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?aS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:If,charCode:function(e){return e.type==="keypress"?sc(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?sc(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lS=jn(oS),cS=P({},lc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),S0=jn(cS),uS=P({},Ga,{submitter:0}),fS=jn(uS),hS=P({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:If}),dS=jn(hS),pS=P({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),mS=jn(pS),gS=P({},lc,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),vS=jn(gS),_S=P({},Ga,{newState:0,oldState:0,source:0}),yS=jn(_S),xS=[9,13,27,32],Bf=ma&&"CompositionEvent"in window,Po=null;ma&&"documentMode"in document&&(Po=document.documentMode);var SS=ma&&"TextEvent"in window&&!Po,M0=ma&&(!Bf||Po&&8<Po&&11>=Po),E0=" ",T0=!1;function b0(e,n){switch(e){case"keyup":return xS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function A0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var gr=!1;function MS(e,n){switch(e){case"compositionend":return A0(n);case"keypress":return n.which!==32?null:(T0=!0,E0);case"textInput":return e=n.data,e===E0&&T0?null:e;default:return null}}function ES(e,n){if(gr)return e==="compositionend"||!Bf&&b0(e,n)?(e=v0(),ac=Lf=Ha=null,gr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return M0&&n.locale!=="ko"?null:n.data;default:return null}}var TS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function w0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!TS[e.type]:n==="textarea"}function C0(e,n,a,o){pr?mr?mr.push(o):mr=[o]:pr=o,n=cu(n,"onChange"),0<n.length&&(a=new oc("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var zo=null,Io=null;function bS(e){m_(e,0)}function cc(e){var n=Tn(e);if(c0(n))return e}function R0(e,n){if(e==="change")return n}var D0=!1;if(ma){var Ff;if(ma){var Hf="oninput"in document;if(!Hf){var N0=document.createElement("div");N0.setAttribute("oninput","return;"),Hf=typeof N0.oninput=="function"}Ff=Hf}else Ff=!1;D0=Ff&&(!document.documentMode||9<document.documentMode)}function U0(){zo&&(zo.detachEvent("onpropertychange",L0),Io=zo=null)}function L0(e){if(e.propertyName==="value"&&cc(Io)){var n=[];C0(n,Io,e,Df(e)),g0(bS,n)}}function AS(e,n,a){e==="focusin"?(U0(),zo=n,Io=a,zo.attachEvent("onpropertychange",L0)):e==="focusout"&&U0()}function wS(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cc(Io)}function CS(e,n){if(e==="click")return cc(n)}function RS(e,n){if(e==="input"||e==="change")return cc(n)}function DS(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ui=typeof Object.is=="function"?Object.is:DS;function Bo(e,n){if(ui(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Vt.call(n,u)||!ui(e[u],n[u]))return!1}return!0}function Gf(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function O0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function P0(e,n){var a=O0(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=O0(a)}}function z0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?z0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function I0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Gf(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Gf(e.document)}return n}function Vf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var NS=ma&&"documentMode"in document&&11>=document.documentMode,vr=null,kf=null,Fo=null,Xf=!1;function B0(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xf||vr==null||vr!==Gf(o)||(o=vr,"selectionStart"in o&&Vf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Fo&&Bo(Fo,o)||(Fo=o,o=cu(kf,"onSelect"),0<o.length&&(n=new oc("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=vr)))}function bs(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var _r={animationend:bs("Animation","AnimationEnd"),animationiteration:bs("Animation","AnimationIteration"),animationstart:bs("Animation","AnimationStart"),transitionrun:bs("Transition","TransitionRun"),transitionstart:bs("Transition","TransitionStart"),transitioncancel:bs("Transition","TransitionCancel"),transitionend:bs("Transition","TransitionEnd")},qf={},F0={};ma&&(F0=document.createElement("div").style,"AnimationEvent"in window||(delete _r.animationend.animation,delete _r.animationiteration.animation,delete _r.animationstart.animation),"TransitionEvent"in window||delete _r.transitionend.transition);function As(e){if(qf[e])return qf[e];if(!_r[e])return e;var n=_r[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in F0)return qf[e]=n[a];return e}var H0=As("animationend"),G0=As("animationiteration"),V0=As("animationstart"),US=As("transitionrun"),LS=As("transitionstart"),OS=As("transitioncancel"),k0=As("transitionend"),X0=new Map,Yf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Yf.push("scrollEnd");function zi(e,n){X0.set(e,n),mn(n,[e])}var PS=0;function ga(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Hi.identifierPrefix;var a=PS++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function q0(e){if(e==null||typeof e=="string")return e;var n=null,a=Br;if(a!==null)for(var o=0;o<a.length;o++){var u=e[a[o]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??e.default}function va(e,n){return e=q0(e),n=q0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var uc=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ti=[],yr=0,Wf=0;function fc(){for(var e=yr,n=Wf=yr=0;n<e;){var a=Ti[n];Ti[n++]=null;var o=Ti[n];Ti[n++]=null;var u=Ti[n];Ti[n++]=null;var h=Ti[n];if(Ti[n++]=null,o!==null&&u!==null){var M=o.pending;M===null?u.next=u:(u.next=M.next,M.next=u),o.pending=u}h!==0&&Y0(a,u,h)}}function hc(e,n,a,o){Ti[yr++]=e,Ti[yr++]=n,Ti[yr++]=a,Ti[yr++]=o,Wf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function jf(e,n,a,o){return hc(e,n,a,o),dc(e)}function ws(e,n){return hc(e,null,null,n),dc(e)}function Y0(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var u=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(u=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,u&&n!==null&&(u=31-Fn(a),e=h.hiddenUpdates,o=e[u],o===null?e[u]=[n]:o.push(n),n.lane=a|536870912),h):null}function dc(e){if(50<ol)throw ol=0,nu=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var xr={};function zS(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new zS(e,n,a,o)}function Zf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _a(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function W0(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function pc(e,n,a,o,u,h){var M=0;if(o=e,typeof o=="function")Zf(o)&&(M=1);else if(typeof o=="string")M=uE(e,a,Dt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(o){case Nt:return e=ti(31,a,n,u),e.elementType=Nt,e.lanes=h,e;case G:return Cs(a.children,u,h,n);case Y:M=8,u|=24;break;case Z:return e=ti(12,a,n,u|2),e.elementType=Z,e.lanes=h,e;case U:return e=ti(13,a,n,u),e.elementType=U,e.lanes=h,e;case z:return e=ti(19,a,n,u),e.elementType=z,e.lanes=h,e;case Xt:case X:return e=u|32,e=ti(30,a,n,e),e.elementType=X,e.lanes=h,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case j:M=10;break t;case it:M=9;break t;case k:M=11;break t;case $:M=14;break t;case mt:M=16,o=null;break t}M=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ti(M,a,n,u),n.elementType=e,n.type=o,n.lanes=h,n}function Cs(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function Qf(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function j0(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Kf(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Z0=new WeakMap;function bi(e,n){if(typeof e=="object"&&e!==null){var a=Z0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:zt(n)},Z0.set(e,n),n)}return{value:e,source:n,stack:zt(n)}}var Sr=[],Mr=0,mc=null,Ho=0,Ai=[],wi=0,Va=null,Qi=1,Ki="";function ya(e,n){Sr[Mr++]=Ho,Sr[Mr++]=mc,mc=e,Ho=n}function Q0(e,n,a){Ai[wi++]=Qi,Ai[wi++]=Ki,Ai[wi++]=Va,Va=e;var o=Qi;e=Ki;var u=32-Fn(o)-1;o&=~(1<<u),a+=1;var h=32-Fn(n)+u;if(30<h){var M=u-u%5;h=(o&(1<<M)-1).toString(32),o>>=M,u-=M,Qi=1<<32-Fn(n)+u|a<<u|o,Ki=h+e}else Qi=1<<h|a<<u|o,Ki=e}function gc(e){e.return!==null&&(ya(e,1),Q0(e,1,0))}function Jf(e){for(;e===mc;)mc=Sr[--Mr],Sr[Mr]=null,Ho=Sr[--Mr],Sr[Mr]=null;for(;e===Va;)Va=Ai[--wi],Ai[wi]=null,Ki=Ai[--wi],Ai[wi]=null,Qi=Ai[--wi],Ai[wi]=null}function K0(e,n){Ai[wi++]=Qi,Ai[wi++]=Ki,Ai[wi++]=Va,Qi=n.id,Ki=n.overflow,Va=e}var Cn=null,$e=null,Te=!1,ka=null,Ci=!1,$f=Error(s(519));function Xa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Go(bi(n,e)),$f}function J0(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[kt]=e,n[ie]=o,a){case"dialog":Ce("cancel",n),Ce("close",n);break;case"iframe":case"object":case"embed":Ce("load",n);break;case"video":case"audio":for(a=0;a<cl.length;a++)Ce(cl[a],n);break;case"source":Ce("error",n);break;case"img":case"image":case"link":Ce("error",n),Ce("load",n);break;case"details":Ce("toggle",n);break;case"input":Ce("invalid",n),u0(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ce("invalid",n);break;case"textarea":Ce("invalid",n),h0(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||y_(n.textContent,a)?(o.popover!=null&&(Ce("beforetoggle",n),Ce("toggle",n)),o.onScroll!=null&&Ce("scroll",n),o.onScrollEnd!=null&&Ce("scrollend",n),o.onClick!=null&&(n.onclick=Zi),n=!0):n=!1,n||Xa(e,!0)}function vc(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:Ci=!1;return;case 27:case 3:Ci=!0;return;default:Cn=Cn.return}}function Er(e){if(e!==Cn)return!1;if(!Te)return vc(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Rd(e.type,e.memoizedProps)),a=!a),a&&$e&&Xa(e),vc(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));$e=B_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));$e=B_(e)}else n===27?(n=$e,rs(e.type)?(e=Bd,Bd=null,$e=e):$e=n):$e=Cn?Di(e.stateNode.nextSibling):null;return!0}function Rs(){$e=Cn=null,Te=!1}function th(){var e=ka;return e!==null&&(ii===null?ii=e:ii.push.apply(ii,e),ka=null),e}function Go(e){ka===null?ka=[e]:ka.push(e)}var eh=ct(null),Ds=null,xa=null;function qa(e,n,a){At(eh,n._currentValue),n._currentValue=a}function Sa(e){e._currentValue=eh.current,ht(eh)}function _c(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function nh(e,n,a,o){var u=e.child;for(u!==null&&(u.return=e);u!==null;){var h=u.dependencies;if(h!==null){var M=u.child;h=h.firstContext;t:for(;h!==null;){var N=h;h=u;for(var q=0;q<n.length;q++)if(N.context===n[q]){h.lanes|=a,N=h.alternate,N!==null&&(N.lanes|=a),_c(h.return,a,e),o||(M=null);break t}h=N.next}}else if(u.tag===18){if(M=u.return,M===null)throw Error(s(341));M.lanes|=a,h=M.alternate,h!==null&&(h.lanes|=a),_c(M,a,e),M=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,M=u.alternate,M!==null&&(M.lanes|=a),_c(u.return,a,e),M=u.child,M=M!==null?M.sibling:null):M=u.child;if(M!==null)M.return=u;else for(M=u;M!==null;){if(M===e){M=null;break}if(u=M.sibling,u!==null){u.return=M.return,M=u;break}M=M.return}u=M}}function Ns(e,n,a,o){e=null;for(var u=n,h=!1;u!==null;){if(!h){if((u.flags&524288)!==0)h=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var M=u.alternate;if(M===null)throw Error(s(387));if(M=M.memoizedProps,M!==null){var N=u.type;ui(u.pendingProps.value,M.value)||(e!==null?e.push(N):e=[N])}}else if(u===se.current){if(M=u.alternate,M===null)throw Error(s(387));M.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(e!==null?e.push(jr):e=[jr])}u=u.return}return e!==null&&nh(n,e,a,o),n.flags|=262144,e!==null}function yc(e){for(e=e.firstContext;e!==null;){if(!ui(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Us(e){Ds=e,xa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Un(e){return $0(Ds,e)}function xc(e,n){return Ds===null&&Us(e),$0(e,n)}function $0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},xa===null){if(e===null)throw Error(s(308));xa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else xa=xa.next=n;return a}var IS=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},BS=r.unstable_scheduleCallback,FS=r.unstable_NormalPriority,gn={$$typeof:j,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ih(){return{controller:new IS,data:new Map,refCount:0}}function Vo(e){e.refCount--,e.refCount===0&&BS(FS,function(){e.controller.abort()})}function tg(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var o=n[e];a.indexOf(o)===-1&&a.push(o)}}}var ko=null;function HS(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Xo=null,ah=0,Ls=0,Tr=null;function GS(e,n){if(Xo===null){var a=Xo=[];ah=0,Ls=xd(),Tr={status:"pending",value:void 0,then:function(o){a.push(o)}}}return ah++,n.then(eg,eg),n}function eg(){if(--ah===0&&(ko=null,Xo!==null)){Tr!==null&&(Tr.status="fulfilled");var e=Xo;Xo=null,Ls=0,Tr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function VS(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var ng=bt.S;bt.S=function(e,n){if(jv=K(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&GS(e,n),ko!==null)for(var a=Vr;a!==null;)tg(a,ko),a=a.next;if(a=e.types,a!==null){for(var o=Vr;o!==null;)tg(o,a),o=o.next;if(Ls!==0){o=ko,o===null&&(o=ko=[]);for(var u=0;u<a.length;u++){var h=a[u];o.indexOf(h)===-1&&o.push(h)}}}ng!==null&&ng(e,n)};var Os=ct(null);function sh(){var e=Os.current;return e!==null?e:Ke.pooledCache}function Sc(e,n){n===null?At(Os,Os.current):At(Os,n.pool)}function ig(){var e=sh();return e===null?null:{parent:gn._currentValue,pool:e}}var br=Error(s(460)),rh=Error(s(474)),Mc=Error(s(542)),Ec={then:function(){}};function ag(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sg(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Zi,Zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,og(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(Zi,Zi);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,og(e),e}throw zs=n,br}}function Ps(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(zs=a,br):a}}var zs=null;function rg(){if(zs===null)throw Error(s(459));var e=zs;return zs=null,e}function og(e){if(e===br||e===Mc)throw Error(s(483))}var Ar=null,qo=0;function Tc(e){var n=qo;return qo+=1,Ar===null&&(Ar=[]),sg(Ar,e,n)}function Ya(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function bc(e,n){throw n.$$typeof===O?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function lg(e){function n(et,Q){if(e){var lt=et.deletions;lt===null?(et.deletions=[Q],et.flags|=16):lt.push(Q)}}function a(et,Q){if(!e)return null;for(;Q!==null;)n(et,Q),Q=Q.sibling;return null}function o(et){for(var Q=new Map;et!==null;)et.key===null?Q.set(et.index,et):Q.set(et.key,et),et=et.sibling;return Q}function u(et,Q){return et=_a(et,Q),et.index=0,et.sibling=null,et}function h(et,Q,lt){return et.index=lt,e?(lt=et.alternate,lt!==null?(lt=lt.index,lt<Q?(et.flags|=2,Q):lt):(et.flags|=134217730,Q)):(et.flags|=1048576,Q)}function M(et){return e&&et.alternate===null&&(et.flags|=134217730),et}function N(et,Q,lt,wt){return Q===null||Q.tag!==6?(Q=Qf(lt,et.mode,wt),Q.return=et,Q):(Q=u(Q,lt),Q.return=et,Q)}function q(et,Q,lt,wt){var $t=lt.type;return $t===G?(et=pt(et,Q,lt.props.children,wt,lt.key),Ya(et,lt),et):Q!==null&&(Q.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===mt&&Ps($t)===Q.type)?(Q=u(Q,lt.props),Ya(Q,lt),Q.return=et,Q):(Q=pc(lt.type,lt.key,lt.props,null,et.mode,wt),Ya(Q,lt),Q.return=et,Q)}function nt(et,Q,lt,wt){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==lt.containerInfo||Q.stateNode.implementation!==lt.implementation?(Q=Kf(lt,et.mode,wt),Q.return=et,Q):(Q=u(Q,lt.children||[]),Q.return=et,Q)}function pt(et,Q,lt,wt,$t){return Q===null||Q.tag!==7?(Q=Cs(lt,et.mode,wt,$t),Q.return=et,Q):(Q=u(Q,lt),Q.return=et,Q)}function Ct(et,Q,lt){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Q=Qf(""+Q,et.mode,lt),Q.return=et,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case C:return lt=pc(Q.type,Q.key,Q.props,null,et.mode,lt),Ya(lt,Q),lt.return=et,lt;case A:return Q=Kf(Q,et.mode,lt),Q.return=et,Q;case mt:return Q=Ps(Q),Ct(et,Q,lt)}if(dt(Q)||W(Q))return Q=Cs(Q,et.mode,lt,null),Q.return=et,Q;if(typeof Q.then=="function")return Ct(et,Tc(Q),lt);if(Q.$$typeof===j)return Ct(et,xc(et,Q),lt);bc(et,Q)}return null}function tt(et,Q,lt,wt){var $t=Q!==null?Q.key:null;if(typeof lt=="string"&&lt!==""||typeof lt=="number"||typeof lt=="bigint")return $t!==null?null:N(et,Q,""+lt,wt);if(typeof lt=="object"&&lt!==null){switch(lt.$$typeof){case C:return lt.key===$t?q(et,Q,lt,wt):null;case A:return lt.key===$t?nt(et,Q,lt,wt):null;case mt:return lt=Ps(lt),tt(et,Q,lt,wt)}if(dt(lt)||W(lt))return $t!==null?null:pt(et,Q,lt,wt,null);if(typeof lt.then=="function")return tt(et,Q,Tc(lt),wt);if(lt.$$typeof===j)return tt(et,Q,xc(et,lt),wt);bc(et,lt)}return null}function ft(et,Q,lt,wt,$t){if(typeof wt=="string"&&wt!==""||typeof wt=="number"||typeof wt=="bigint")return et=et.get(lt)||null,N(Q,et,""+wt,$t);if(typeof wt=="object"&&wt!==null){switch(wt.$$typeof){case C:return et=et.get(wt.key===null?lt:wt.key)||null,q(Q,et,wt,$t);case A:return et=et.get(wt.key===null?lt:wt.key)||null,nt(Q,et,wt,$t);case mt:return wt=Ps(wt),ft(et,Q,lt,wt,$t)}if(dt(wt)||W(wt))return et=et.get(lt)||null,pt(Q,et,wt,$t,null);if(typeof wt.then=="function")return ft(et,Q,lt,Tc(wt),$t);if(wt.$$typeof===j)return ft(et,Q,lt,xc(Q,wt),$t);bc(Q,wt)}return null}function qt(et,Q,lt,wt){for(var $t=null,Ne=null,ce=Q,ge=Q=0,yn=null;ce!==null&&ge<lt.length;ge++){ce.index>ge?(yn=ce,ce=null):yn=ce.sibling;var Ue=tt(et,ce,lt[ge],wt);if(Ue===null){ce===null&&(ce=yn);break}e&&ce&&Ue.alternate===null&&n(et,ce),Q=h(Ue,Q,ge),Ne===null?$t=Ue:Ne.sibling=Ue,Ne=Ue,ce=yn}if(ge===lt.length)return a(et,ce),Te&&ya(et,ge),$t;if(ce===null){for(;ge<lt.length;ge++)ce=Ct(et,lt[ge],wt),ce!==null&&(Q=h(ce,Q,ge),Ne===null?$t=ce:Ne.sibling=ce,Ne=ce);return Te&&ya(et,ge),$t}for(ce=o(ce);ge<lt.length;ge++)yn=ft(ce,et,ge,lt[ge],wt),yn!==null&&(e&&(Ue=yn.alternate,Ue!==null&&ce.delete(Ue.key===null?ge:Ue.key)),Q=h(yn,Q,ge),Ne===null?$t=yn:Ne.sibling=yn,Ne=yn);return e&&ce.forEach(function(fs){return n(et,fs)}),Te&&ya(et,ge),$t}function ae(et,Q,lt,wt){if(lt==null)throw Error(s(151));for(var $t=null,Ne=null,ce=Q,ge=Q=0,yn=null,Ue=lt.next();ce!==null&&!Ue.done;ge++,Ue=lt.next()){ce.index>ge?(yn=ce,ce=null):yn=ce.sibling;var fs=tt(et,ce,Ue.value,wt);if(fs===null){ce===null&&(ce=yn);break}e&&ce&&fs.alternate===null&&n(et,ce),Q=h(fs,Q,ge),Ne===null?$t=fs:Ne.sibling=fs,Ne=fs,ce=yn}if(Ue.done)return a(et,ce),Te&&ya(et,ge),$t;if(ce===null){for(;!Ue.done;ge++,Ue=lt.next())Ue=Ct(et,Ue.value,wt),Ue!==null&&(Q=h(Ue,Q,ge),Ne===null?$t=Ue:Ne.sibling=Ue,Ne=Ue);return Te&&ya(et,ge),$t}for(ce=o(ce);!Ue.done;ge++,Ue=lt.next())Ue=ft(ce,et,ge,Ue.value,wt),Ue!==null&&(e&&(yn=Ue.alternate,yn!==null&&ce.delete(yn.key===null?ge:yn.key)),Q=h(Ue,Q,ge),Ne===null?$t=Ue:Ne.sibling=Ue,Ne=Ue);return e&&ce.forEach(function(ME){return n(et,ME)}),Te&&ya(et,ge),$t}function Se(et,Q,lt,wt){if(typeof lt=="object"&&lt!==null&&lt.type===G&&lt.key===null&&lt.props.ref===void 0&&(lt=lt.props.children),typeof lt=="object"&&lt!==null){switch(lt.$$typeof){case C:t:{for(var $t=lt.key;Q!==null;){if(Q.key===$t){if($t=lt.type,$t===G){if(Q.tag===7){a(et,Q.sibling),wt=u(Q,lt.props.children),Ya(wt,lt),wt.return=et,et=wt;break t}}else if(Q.elementType===$t||typeof $t=="object"&&$t!==null&&$t.$$typeof===mt&&Ps($t)===Q.type){a(et,Q.sibling),wt=u(Q,lt.props),Ya(wt,lt),wt.return=et,et=wt;break t}a(et,Q);break}else n(et,Q);Q=Q.sibling}lt.type===G?(wt=Cs(lt.props.children,et.mode,wt,lt.key),Ya(wt,lt),wt.return=et,et=wt):(wt=pc(lt.type,lt.key,lt.props,null,et.mode,wt),Ya(wt,lt),wt.return=et,et=wt)}return M(et);case A:t:{for($t=lt.key;Q!==null;){if(Q.key===$t)if(Q.tag===4&&Q.stateNode.containerInfo===lt.containerInfo&&Q.stateNode.implementation===lt.implementation){a(et,Q.sibling),wt=u(Q,lt.children||[]),wt.return=et,et=wt;break t}else{a(et,Q);break}else n(et,Q);Q=Q.sibling}wt=Kf(lt,et.mode,wt),wt.return=et,et=wt}return M(et);case mt:return lt=Ps(lt),Se(et,Q,lt,wt)}if(dt(lt))return qt(et,Q,lt,wt);if(W(lt)){if($t=W(lt),typeof $t!="function")throw Error(s(150));return lt=$t.call(lt),ae(et,Q,lt,wt)}if(typeof lt.then=="function")return Se(et,Q,Tc(lt),wt);if(lt.$$typeof===j)return Se(et,Q,xc(et,lt),wt);bc(et,lt)}return typeof lt=="string"&&lt!==""||typeof lt=="number"||typeof lt=="bigint"?(lt=""+lt,Q!==null&&Q.tag===6?(a(et,Q.sibling),wt=u(Q,lt),wt.return=et,et=wt):(a(et,Q),wt=Qf(lt,et.mode,wt),wt.return=et,et=wt),M(et)):a(et,Q)}return function(et,Q,lt,wt){try{qo=0;var $t=Se(et,Q,lt,wt);return Ar=null,$t}catch(ce){if(ce===br||ce===Mc)throw ce;var Ne=ti(29,ce,null,et.mode);return Ne.lanes=wt,Ne.return=et,Ne}finally{}}}var Is=lg(!0),cg=lg(!1),Wa=!1;function oh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lh(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(He&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=dc(e),Y0(e,null,a),n}return hc(e,o,n,a),dc(e)}function Yo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,st(e,a)}}function ch(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var M={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?u=h=M:h=h.next=M,a=a.next}while(a!==null);h===null?u=h=n:h=h.next=n}else u=h=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var uh=!1;function Wo(){if(uh){var e=Tr;if(e!==null)throw e}}function jo(e,n,a,o){uh=!1;var u=e.updateQueue;Wa=!1;var h=u.firstBaseUpdate,M=u.lastBaseUpdate,N=u.shared.pending;if(N!==null){u.shared.pending=null;var q=N,nt=q.next;q.next=null,M===null?h=nt:M.next=nt,M=q;var pt=e.alternate;pt!==null&&(pt=pt.updateQueue,N=pt.lastBaseUpdate,N!==M&&(N===null?pt.firstBaseUpdate=nt:N.next=nt,pt.lastBaseUpdate=q))}if(h!==null){var Ct=u.baseState;M=0,pt=nt=q=null,N=h;do{var tt=N.lane&-536870913,ft=tt!==N.lane;if(ft?(De&tt)===tt:(o&tt)===tt){tt!==0&&tt===Ls&&(uh=!0),pt!==null&&(pt=pt.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});t:{var qt=e,ae=N;tt=n;var Se=a;switch(ae.tag){case 1:if(qt=ae.payload,typeof qt=="function"){Ct=qt.call(Se,Ct,tt);break t}Ct=qt;break t;case 3:qt.flags=qt.flags&-65537|128;case 0:if(qt=ae.payload,tt=typeof qt=="function"?qt.call(Se,Ct,tt):qt,tt==null)break t;Ct=P({},Ct,tt);break t;case 2:Wa=!0}}tt=N.callback,tt!==null&&(e.flags|=64,ft&&(e.flags|=8192),ft=u.callbacks,ft===null?u.callbacks=[tt]:ft.push(tt))}else ft={lane:tt,tag:N.tag,payload:N.payload,callback:N.callback,next:null},pt===null?(nt=pt=ft,q=Ct):pt=pt.next=ft,M|=tt;if(N=N.next,N===null){if(N=u.shared.pending,N===null)break;ft=N,N=ft.next,ft.next=null,u.lastBaseUpdate=ft,u.shared.pending=null}}while(!0);pt===null&&(q=Ct),u.baseState=q,u.firstBaseUpdate=nt,u.lastBaseUpdate=pt,h===null&&(u.shared.lanes=0),ns|=M,e.lanes=M,e.memoizedState=Ct}}function ug(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function fg(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ug(a[e],n)}var Qa=ct(null),Ac=ct(0);function hg(e,n){e=Aa,At(Ac,e),At(Qa,n),Aa=e|n.baseLanes}function fh(){At(Ac,Aa),At(Qa,Qa.current)}function hh(){Aa=Ac.current,ht(Qa),ht(Ac)}var Ln=ct(null),Gn=null;function Ka(e){var n=e.alternate;At(On,On.current&1),At(Ln,e),Gn===null&&(n===null||Qa.current!==null||n.memoizedState!==null)&&(Gn=e)}function dh(e){At(On,On.current),At(Ln,e),Gn===null&&(Gn=e)}function dg(e){e.tag===22?(At(On,On.current),At(Ln,e),Gn===null&&(Gn=e)):Ja()}function Ja(){At(On,On.current),At(Ln,Ln.current)}function fi(e){ht(Ln),Gn===e&&(Gn=null),ht(On)}var On=ct(0);function Zo(e,n){At(Ln,Ln.current),At(On,n)}function ph(e){ht(On),ht(Ln),Gn===e&&(Gn=null)}function wc(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||zd(a)||Id(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Ma=0,xe=null,Ze=null,vn=null,Cc=!1,wr=!1,Bs=!1,Rc=0,Qo=0,Cr=null,kS=0;function un(){throw Error(s(321))}function mh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ui(e[a],n[a]))return!1;return!0}function gh(e,n,a,o,u,h){return Ma=h,xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,bt.H=e===null||e.memoizedState===null?Qg:Kg,Bs=!1,h=a(o,u),Bs=!1,wr&&(h=mg(n,a,o,u)),pg(e),h}function pg(e){bt.H=zc;var n=Ze!==null&&Ze.next!==null;if(Ma=0,vn=Ze=xe=null,Cc=!1,Qo=0,Cr=null,n)throw Error(s(300));e===null||_n||(e=e.dependencies,e!==null&&yc(e)&&(_n=!0))}function mg(e,n,a,o){xe=e;var u=0;do{if(wr&&(Cr=null),Qo=0,wr=!1,25<=u)throw Error(s(301));if(u+=1,vn=Ze=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}bt.H=KS,h=n(a,o)}while(wr);return h}function XS(){var e=bt.H,n=e.useState()[0];return n=typeof n.then=="function"?Ko(n):n,e=e.useState()[0],(Ze!==null?Ze.memoizedState:null)!==e&&(xe.flags|=1024),n}function vh(){var e=Rc!==0;return Rc=0,e}function _h(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function yh(e){if(Cc){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Cc=!1}Ma=0,vn=Ze=xe=null,wr=!1,Qo=Rc=0,Cr=null}function Zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?xe.memoizedState=vn=e:vn=vn.next=e,vn}function dn(){if(Ze===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var n=vn===null?xe.memoizedState:vn.next;if(n!==null)vn=n,Ze=e;else{if(e===null)throw xe.alternate===null?Error(s(467)):Error(s(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},vn===null?xe.memoizedState=vn=e:vn=vn.next=e}return vn}function Dc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ko(e){var n=Qo;return Qo+=1,Cr===null&&(Cr=[]),e=sg(Cr,e,n),n=xe,(vn===null?n.memoizedState:vn.next)===null&&(n=n.alternate,bt.H=n===null||n.memoizedState===null?Qg:Kg),e}function Nc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ko(e);if(e.$$typeof===ut)return;if(e.$$typeof===j)return Un(e)}throw Error(s(438,String(e)))}function xh(e){var n=null,a=xe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=xe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Dc(),xe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=Zt;return n.index++,a}function Ea(e,n){return typeof n=="function"?n(e):n}function Uc(e){var n=dn();return Sh(n,Ze,e)}function Sh(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=e.baseQueue,h=o.pending;if(h!==null){if(u!==null){var M=u.next;u.next=h.next,h.next=M}n.baseQueue=u=h,o.pending=null}if(h=e.baseState,u===null)e.memoizedState=h;else{n=u.next;var N=M=null,q=null,nt=n,pt=!1;do{var Ct=nt.lane&-536870913;if(Ct!==nt.lane?(De&Ct)===Ct:(Ma&Ct)===Ct){var tt=nt.revertLane;if(tt===0)q!==null&&(q=q.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),Ct===Ls&&(pt=!0);else if((Ma&tt)===tt){nt=nt.next,tt===Ls&&(pt=!0);continue}else Ct={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},q===null?(N=q=Ct,M=h):q=q.next=Ct,xe.lanes|=tt,ns|=tt;Ct=nt.action,Bs&&a(h,Ct),h=nt.hasEagerState?nt.eagerState:a(h,Ct)}else tt={lane:Ct,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},q===null?(N=q=tt,M=h):q=q.next=tt,xe.lanes|=Ct,ns|=Ct;nt=nt.next}while(nt!==null&&nt!==n);if(q===null?M=h:q.next=N,!ui(h,e.memoizedState)&&(_n=!0,pt&&(a=Tr,a!==null)))throw a;e.memoizedState=h,e.baseState=M,e.baseQueue=q,o.lastRenderedState=h}return u===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Mh(e){var n=dn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,u=a.pending,h=n.memoizedState;if(u!==null){a.pending=null;var M=u=u.next;do h=e(h,M.action),M=M.next;while(M!==u);ui(h,n.memoizedState)||(_n=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function gg(e,n,a){var o=xe,u=dn(),h=Te;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var M=!ui((Ze||u).memoizedState,a);if(M&&(u.memoizedState=a,_n=!0),u=u.queue,bh(yg.bind(null,o,u,e),[e]),e=u.getSnapshot!==n||M||vn!==null&&(vn.memoizedState.tag&1)!==0,Rr(e?9:8,{destroy:void 0},_g.bind(null,o,u,a,n),null),e){if(o.flags|=2048,Ke===null)throw Error(s(349));h||(Ma&127)!==0||vg(o,n,a)}return a}function vg(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=xe.updateQueue,n===null?(n=Dc(),xe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function _g(e,n,a,o){n.value=a,n.getSnapshot=o,xg(n)&&Sg(e)}function yg(e,n,a){return a(function(){xg(n)&&Sg(e)})}function xg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ui(e,a)}catch{return!0}}function Sg(e){var n=ws(e,2);n!==null&&ai(n,e,2)}function Eh(e){var n=Zn();if(typeof e=="function"){var a=e;if(e=a(),Bs){En(!0);try{a()}finally{En(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:e},n}function Mg(e,n,a,o){return e.baseState=a,Sh(e,Ze,typeof o=="function"?o:Ea)}function qS(e,n,a,o,u){if(Pc(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:u,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(M){h.listeners.push(M)}};bt.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,Eg(n,h)):(h.next=a.next,n.pending=a.next=h)}}function Eg(e,n){var a=n.action,o=n.payload,u=e.state;if(n.isTransition){var h=bt.T,M={};M.types=h!==null?h.types:null,bt.T=M;try{var N=a(u,o),q=bt.S;q!==null&&q(M,N),Tg(e,n,N)}catch(nt){Th(e,n,nt)}finally{h!==null&&M.types!==null&&(h.types=M.types),bt.T=h}}else try{h=a(u,o),Tg(e,n,h)}catch(nt){Th(e,n,nt)}}function Tg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){bg(e,n,o)},function(o){return Th(e,n,o)}):bg(e,n,a)}function bg(e,n,a){n.status="fulfilled",n.value=a,Ag(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Eg(e,a)))}function Th(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,Ag(n),n=n.next;while(n!==o)}e.action=null}function Ag(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function wg(e,n){return n}function Cg(e,n){if(Te){var a=Ke.formState;if(a!==null){t:{var o=xe;if(Te){if($e){e:{for(var u=$e,h=Ci;u.nodeType!==8;){if(!h){u=null;break e}if(u=Di(u.nextSibling),u===null){u=null;break e}}h=u.data,u=h==="F!"||h==="F"?u:null}if(u){$e=Di(u.nextSibling),o=u.data==="F!";break t}}Xa(o)}o=!1}o&&(n=a[0])}}return a=Zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wg,lastRenderedState:n},a.queue=o,a=Wg.bind(null,xe,o),o.dispatch=a,o=Eh(!1),h=Dh.bind(null,xe,!1,o.queue),o=Zn(),u={state:n,dispatch:null,action:e,pending:null},o.queue=u,a=qS.bind(null,xe,u,h,a),u.dispatch=a,o.memoizedState=e,[n,a,!1]}function Rg(e){var n=dn();return Dg(n,Ze,e)}function Dg(e,n,a){if(n=Sh(e,n,wg)[0],e=Uc(Ea)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ko(n)}catch(M){throw M===br?Mc:M}else o=n;n=dn();var u=n.queue,h=u.dispatch;return a!==n.memoizedState&&(xe.flags|=2048,Rr(9,{destroy:void 0},YS.bind(null,u,a),null)),[o,h,e]}function YS(e,n){e.action=n}function Ng(e){var n=dn(),a=Ze;if(a!==null)return Dg(n,a,e);dn(),n=n.memoizedState,a=dn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Rr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=xe.updateQueue,n===null&&(n=Dc(),xe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Ug(){return dn().memoizedState}function Lc(e,n,a,o){var u=Zn();xe.flags|=e,u.memoizedState=Rr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Oc(e,n,a,o){var u=dn();o=o===void 0?null:o;var h=u.memoizedState.inst;Ze!==null&&o!==null&&mh(o,Ze.memoizedState.deps)?u.memoizedState=Rr(n,h,a,o):(xe.flags|=e,u.memoizedState=Rr(1|n,h,a,o))}function Lg(e,n){Lc(8390656,8,e,n)}function bh(e,n){Oc(2048,8,e,n)}function WS(e){xe.flags|=4;var n=xe.updateQueue;if(n===null)n=Dc(),xe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Og(e){var n=dn().memoizedState;return WS({ref:n,nextImpl:e}),function(){if((He&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Pg(e,n){return Oc(4,2,e,n)}function zg(e,n){return Oc(4,4,e,n)}function Ig(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Bg(e,n,a){a=a!=null?a.concat([e]):null,Oc(4,4,Ig.bind(null,n,e),a)}function Ah(){}function Fg(e,n){var a=dn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&mh(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Hg(e,n){var a=dn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&mh(n,o[1]))return o[0];if(o=e(),Bs){En(!0);try{e()}finally{En(!1)}}return a.memoizedState=[o,n],o}function wh(e,n,a){return a===void 0||(Ma&1073741824)!==0&&(De&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Qv(),xe.lanes|=e,ns|=e,a)}function Gg(e,n,a,o){return ui(a,n)?a:Qa.current!==null?(e=wh(e,a,o),ui(e,n)||(_n=!0),e):(Ma&106)===0||(Ma&1073741824)!==0&&(De&261930)===0?(_n=!0,e.memoizedState=a):(e=Qv(),xe.lanes|=e,ns|=e,n)}function Vg(e,n,a,o,u){var h=vt.p;vt.p=h!==0&&8>h?h:8;var M=bt.T,N={};N.types=M!==null?M.types:null,bt.T=N,Dh(e,!1,n,a);try{var q=u(),nt=bt.S;if(nt!==null&&nt(N,q),q!==null&&typeof q=="object"&&typeof q.then=="function"){var pt=VS(q,o);Jo(e,n,pt,mi(e))}else Jo(e,n,o,mi(e))}catch(Ct){Jo(e,n,{then:function(){},status:"rejected",reason:Ct},mi())}finally{vt.p=h,M!==null&&N.types!==null&&(M.types=N.types),bt.T=M}}function jS(){}function Ch(e,n,a,o){if(e.tag!==5)throw Error(s(476));var u=kg(e).queue;Vg(e,u,n,I,a===null?jS:function(){return Xg(e),a(o)})}function kg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:I,baseState:I,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:I},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ea,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Xg(e){var n=kg(e);n.next===null&&(n=e.alternate.memoizedState),Jo(e,n.next.queue,{},mi())}function Rh(){return Un(jr)}function qg(){return dn().memoizedState}function Yg(){return dn().memoizedState}function ZS(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=mi();e=ja(a);var o=Za(n,e,a);o!==null&&(ai(o,n,a),Yo(o,n,a)),n={cache:ih()},e.payload=n;return}n=n.return}}function QS(e,n,a){var o=mi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Pc(e)?jg(n,a):(a=jf(e,n,a,o),a!==null&&(ai(a,e,o),Zg(a,n,o)))}function Wg(e,n,a){var o=mi();Jo(e,n,a,o)}function Jo(e,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Pc(e))jg(n,u);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var M=n.lastRenderedState,N=h(M,a);if(u.hasEagerState=!0,u.eagerState=N,ui(N,M))return hc(e,n,u,0),Ke===null&&fc(),!1}catch{}finally{}if(a=jf(e,n,u,o),a!==null)return ai(a,e,o),Zg(a,n,o),!0}return!1}function Dh(e,n,a,o){if(o={lane:2,revertLane:xd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Pc(e)){if(n)throw Error(s(479))}else n=jf(e,a,o,2),n!==null&&ai(n,e,2)}function Pc(e){var n=e.alternate;return e===xe||n!==null&&n===xe}function jg(e,n){wr=Cc=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Zg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,st(e,a)}}var zc={readContext:Un,use:Nc,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useLayoutEffect:un,useInsertionEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useSyncExternalStore:un,useId:un,useHostTransitionStatus:un,useFormState:un,useActionState:un,useOptimistic:un,useMemoCache:un,useCacheRefresh:un,useEffectEvent:un},Qg={readContext:Un,use:Nc,useCallback:function(e,n){return Zn().memoizedState=[e,n===void 0?null:n],e},useContext:Un,useEffect:Lg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Lc(4194308,4,Ig.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Lc(4194308,4,e,n)},useInsertionEffect:function(e,n){Lc(4,2,e,n)},useMemo:function(e,n){var a=Zn();n=n===void 0?null:n;var o=e();if(Bs){En(!0);try{e()}finally{En(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Zn();if(a!==void 0){var u=a(n);if(Bs){En(!0);try{a(n)}finally{En(!1)}}}else u=n;return o.memoizedState=o.baseState=u,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:u},o.queue=e,e=e.dispatch=QS.bind(null,xe,e),[o.memoizedState,e]},useRef:function(e){var n=Zn();return e={current:e},n.memoizedState=e},useState:function(e){e=Eh(e);var n=e.queue,a=Wg.bind(null,xe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ah,useDeferredValue:function(e,n){var a=Zn();return wh(a,e,n)},useTransition:function(){var e=Eh(!1);return e=Vg.bind(null,xe,e.queue,!0,!1),Zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=xe,u=Zn();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ke===null)throw Error(s(349));(De&127)!==0||vg(o,n,a)}u.memoizedState=a;var h={value:a,getSnapshot:n};return u.queue=h,Lg(yg.bind(null,o,h,e),[e]),o.flags|=2048,Rr(9,{destroy:void 0},_g.bind(null,o,h,a,n),null),a},useId:function(){var e=Zn(),n=Ke.identifierPrefix;if(Te){var a=Ki,o=Qi;a=(o&~(1<<32-Fn(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Rc++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=kS++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Rh,useFormState:Cg,useActionState:Cg,useOptimistic:function(e){var n=Zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Dh.bind(null,xe,!0,a),a.dispatch=n,[e,n]},useMemoCache:xh,useCacheRefresh:function(){return Zn().memoizedState=ZS.bind(null,xe)},useEffectEvent:function(e){var n=Zn(),a={impl:e};return n.memoizedState=a,function(){if((He&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Kg={readContext:Un,use:Nc,useCallback:Fg,useContext:Un,useEffect:bh,useImperativeHandle:Bg,useInsertionEffect:Pg,useLayoutEffect:zg,useMemo:Hg,useReducer:Uc,useRef:Ug,useState:function(){return Uc(Ea)},useDebugValue:Ah,useDeferredValue:function(e,n){var a=dn();return Gg(a,Ze.memoizedState,e,n)},useTransition:function(){var e=Uc(Ea)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:Ko(e),n]},useSyncExternalStore:gg,useId:qg,useHostTransitionStatus:Rh,useFormState:Rg,useActionState:Rg,useOptimistic:function(e,n){var a=dn();return Mg(a,Ze,e,n)},useMemoCache:xh,useCacheRefresh:Yg,useEffectEvent:Og},KS={readContext:Un,use:Nc,useCallback:Fg,useContext:Un,useEffect:bh,useImperativeHandle:Bg,useInsertionEffect:Pg,useLayoutEffect:zg,useMemo:Hg,useReducer:Mh,useRef:Ug,useState:function(){return Mh(Ea)},useDebugValue:Ah,useDeferredValue:function(e,n){var a=dn();return Ze===null?wh(a,e,n):Gg(a,Ze.memoizedState,e,n)},useTransition:function(){var e=Mh(Ea)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:Ko(e),n]},useSyncExternalStore:gg,useId:qg,useHostTransitionStatus:Rh,useFormState:Ng,useActionState:Ng,useOptimistic:function(e,n){var a=dn();return Ze!==null?Mg(a,Ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:xh,useCacheRefresh:Yg,useEffectEvent:Og};function Nh(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:P({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Uh={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=mi(),u=ja(o);u.payload=n,a!=null&&(u.callback=a),n=Za(e,u,o),n!==null&&(ai(n,e,o),Yo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=mi(),u=ja(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Za(e,u,o),n!==null&&(ai(n,e,o),Yo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=mi(),o=ja(a);o.tag=2,n!=null&&(o.callback=n),n=Za(e,o,a),n!==null&&(ai(n,e,a),Yo(n,e,a))}};function Jg(e,n,a,o,u,h,M){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,M):n.prototype&&n.prototype.isPureReactComponent?!Bo(a,o)||!Bo(u,h):!0}function $g(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Uh.enqueueReplaceState(n,n.state,null)}function Fs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=P({},a));for(var u in e)a[u]===void 0&&(a[u]=e[u])}return a}function tv(e){uc(e)}function ev(e){console.error(e)}function nv(e){uc(e)}function Ic(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function iv(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Lh(e,n,a){return a=ja(a),a.tag=3,a.payload={element:null},a.callback=function(){Ic(e,n)},a}function av(e){return e=ja(e),e.tag=3,e}function sv(e,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var h=o.value;e.payload=function(){return u(h)},e.callback=function(){iv(n,a,o)}}var M=a.stateNode;M!==null&&typeof M.componentDidCatch=="function"&&(e.callback=function(){iv(n,a,o),typeof u!="function"&&(is===null?is=new Set([this]):is.add(this));var N=o.stack;this.componentDidCatch(o.value,{componentStack:N!==null?N:""})})}function JS(e,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ns(n,a,u,!0),a=Ln.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Gn===null?au():a.alternate===null&&fn===0&&(fn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Ec?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),vd(e,o,u)),!1;case 22:return a.flags|=65536,o===Ec?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),vd(e,o,u)),!1}throw Error(s(435,a.tag))}return vd(e,o,u),au(),!1}if(Te)return n=Ln.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==$f&&(e=Error(s(422),{cause:o}),Go(bi(e,a)))):(o!==$f&&(n=Error(s(423),{cause:o}),Go(bi(n,a))),e=e.current.alternate,e.flags|=65536,u&=-u,e.lanes|=u,o=bi(o,a),u=Lh(e.stateNode,o,u),ch(e,u),fn!==4&&(fn=2)),!1;var h=Error(s(520),{cause:o});if(h=bi(h,a),rl===null?rl=[h]:rl.push(h),fn!==4&&(fn=2),n===null)return!0;o=bi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=u&-u,a.lanes|=e,e=Lh(a.stateNode,o,e),ch(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(is===null||!is.has(h))))return a.flags|=65536,u&=-u,a.lanes|=u,u=av(u),sv(u,e,a,o),ch(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Oh=Error(s(461)),_n=!1;function bn(e,n,a,o){n.child=e===null?cg(n,null,a,o):Is(n,e.child,a,o)}function rv(e,n,a,o,u){a=a.render;var h=n.ref;if("ref"in o){var M={};for(var N in o)N!=="ref"&&(M[N]=o[N])}else M=o;return Us(n),o=gh(e,n,a,M,h,u),N=vh(),e!==null&&!_n?(_h(e,n,u),Ta(e,n,u)):(Te&&N&&gc(n),n.flags|=1,bn(e,n,o,u),n.child)}function ov(e,n,a,o,u){if(e===null){var h=a.type;return typeof h=="function"&&!Zf(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,lv(e,n,h,o,u)):(e=pc(a.type,null,o,n,n.mode,u),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Vh(e,u)){var M=h.memoizedProps;if(a=a.compare,a=a!==null?a:Bo,a(M,o)&&e.ref===n.ref)return Ta(e,n,u)}return n.flags|=1,e=_a(h,o),e.ref=n.ref,e.return=n,n.child=e}function lv(e,n,a,o,u){if(e!==null){var h=e.memoizedProps;if(Bo(h,o)&&e.ref===n.ref)if(_n=!1,n.pendingProps=o=h,Vh(e,u))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,Ta(e,n,u)}return Ph(e,n,a,o,u)}function cv(e,n,a,o){var u=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~h}else o=0,n.child=null;return uv(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Sc(n,h!==null?h.cachePool:null),h!==null?hg(n,h):fh(),dg(n);else return o=n.lanes=536870912,uv(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Sc(n,h.cachePool),hg(n,h),Ja(),n.memoizedState=null):(e!==null&&Sc(n,null),fh(),Ja());return bn(e,n,u,a),n.child}function $o(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function uv(e,n,a,o,u){var h=sh();return h=h===null?null:{parent:gn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Sc(n,null),fh(),dg(n),e!==null&&Ns(e,n,o,!0),n.childLanes=u,null}function Bc(e,n){return n=Fc({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function fv(e,n,a){return Is(n,e.child,null,a),e=Bc(n,n.pendingProps),e.flags|=2,fi(n),n.memoizedState=null,e}function $S(e,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(o.mode==="hidden")return e=Bc(n,o),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},$o(null,e);if(dh(n),(e=$e)?(e=I_(e,Ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Va!==null?{id:Qi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},a=j0(e),a.return=n,n.child=a,Cn=n,$e=null)):e=null,e===null)throw Xa(n);return n.lanes=536870912,null}return Bc(n,o)}var h=e.memoizedState;if(h!==null){var M=h.dehydrated;if(dh(n),u)if(n.flags&256)n.flags&=-257,n=fv(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(_n||Ns(e,n,a,!1),u=(a&e.childLanes)!==0,_n||u){if(Qa.current===null){if(o=Ke,o!==null&&(M=xt(o,a),M!==0&&M!==h.retryLane))throw h.retryLane=M,ws(e,M),ai(o,e,M),Oh;au()}n=fv(e,n,a)}else e=h.treeContext,$e=Di(M.nextSibling),Cn=n,Te=!0,ka=null,Ci=!1,e!==null&&K0(n,e),n=Bc(n,o),n.flags|=134221824;return n}return e=_a(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Dr(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Ph(e,n,a,o,u){return Us(n),a=gh(e,n,a,o,void 0,u),o=vh(),e!==null&&!_n?(_h(e,n,u),Ta(e,n,u)):(Te&&o&&gc(n),n.flags|=1,bn(e,n,a,u),n.child)}function hv(e,n,a,o,u,h){return Us(n),n.updateQueue=null,a=mg(n,o,a,u),pg(e),o=vh(),e!==null&&!_n?(_h(e,n,h),Ta(e,n,h)):(Te&&o&&gc(n),n.flags|=1,bn(e,n,a,h),n.child)}function dv(e,n,a,o,u){if(Us(n),n.stateNode===null){var h=xr,M=a.contextType;typeof M=="object"&&M!==null&&(h=Un(M)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Uh,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},oh(n),M=a.contextType,h.context=typeof M=="object"&&M!==null?Un(M):xr,h.state=n.memoizedState,M=a.getDerivedStateFromProps,typeof M=="function"&&(Nh(n,a,M,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(M=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),M!==h.state&&Uh.enqueueReplaceState(h,h.state,null),jo(n,o,h,u),Wo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var N=n.memoizedProps,q=Fs(a,N);h.props=q;var nt=h.context,pt=a.contextType;M=xr,typeof pt=="object"&&pt!==null&&(M=Un(pt));var Ct=a.getDerivedStateFromProps;pt=typeof Ct=="function"||typeof h.getSnapshotBeforeUpdate=="function",N=n.pendingProps!==N,pt||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(N||nt!==M)&&$g(n,h,o,M),Wa=!1;var tt=n.memoizedState;h.state=tt,jo(n,o,h,u),Wo(),nt=n.memoizedState,N||tt!==nt||Wa?(typeof Ct=="function"&&(Nh(n,a,Ct,o),nt=n.memoizedState),(q=Wa||Jg(n,a,q,o,tt,nt,M))?(pt||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=nt),h.props=o,h.state=nt,h.context=M,o=q):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,lh(e,n),M=n.memoizedProps,pt=Fs(a,M),h.props=pt,Ct=n.pendingProps,tt=h.context,nt=a.contextType,q=xr,typeof nt=="object"&&nt!==null&&(q=Un(nt)),N=a.getDerivedStateFromProps,(nt=typeof N=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(M!==Ct||tt!==q)&&$g(n,h,o,q),Wa=!1,tt=n.memoizedState,h.state=tt,jo(n,o,h,u),Wo();var ft=n.memoizedState;M!==Ct||tt!==ft||Wa||e!==null&&e.dependencies!==null&&yc(e.dependencies)?(typeof N=="function"&&(Nh(n,a,N,o),ft=n.memoizedState),(pt=Wa||Jg(n,a,pt,o,tt,ft,q)||e!==null&&e.dependencies!==null&&yc(e.dependencies))?(nt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ft,q),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ft,q)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ft),h.props=o,h.state=ft,h.context=q,o=pt):(typeof h.componentDidUpdate!="function"||M===e.memoizedProps&&tt===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||M===e.memoizedProps&&tt===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Dr(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=Is(n,e.child,null,u),n.child=Is(n,null,a,u)):bn(e,n,a,u),n.memoizedState=h.state,e=n.child):e=Ta(e,n,u),e}function pv(e,n,a,o){return Rs(),n.flags|=256,bn(e,n,a,o),n.child}var zh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ih(e){return{baseLanes:e,cachePool:ig()}}function Bh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=pi),e}function mv(e,n,a){var o=n.pendingProps,u=!1,h=(n.flags&128)!==0,M;if((M=h)||(M=e!==null&&e.memoizedState===null?!1:(On.current&2)!==0),M&&(u=!0,n.flags&=-129),M=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(u?Ka(n):Ja(),(e=$e)?(e=I_(e,Ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Va!==null?{id:Qi,overflow:Ki}:null,retryLane:536870912,hydrationErrors:null},a=j0(e),a.return=n,n.child=a,Cn=n,$e=null)):e=null,e===null)throw Xa(n);return Id(e)?n.lanes=32:n.lanes=536870912,null}return h=o.children,o=o.fallback,u?(Ja(),u=n.mode,h=Fc({mode:"hidden",children:h},u),o=Cs(o,u,a,null),h.return=n,o.return=n,h.sibling=o,n.child=h,o=n.child,o.memoizedState=Ih(a),o.childLanes=Bh(e,M,a),n.memoizedState=zh,$o(null,o)):(Ka(n),Fh(n,h))}var N=e.memoizedState;if(N!==null){var q=N.dehydrated;if(q!==null)return tM(e,n,h,M,o,q,N,a)}return u?(Ja(),u=o.fallback,h=n.mode,N=e.child,q=N.sibling,o=_a(N,{mode:"hidden",children:o.children}),o.subtreeFlags=N.subtreeFlags&1206910976,q!==null?u=_a(q,u):(u=Cs(u,h,a,null),u.flags|=2),u.return=n,o.return=n,o.sibling=u,n.child=o,$o(null,o),o=n.child,u=e.child.memoizedState,u===null?u=Ih(a):(h=u.cachePool,h!==null?(N=gn._currentValue,h=h.parent!==N?{parent:N,pool:N}:h):h=ig(),u={baseLanes:u.baseLanes|a,cachePool:h}),o.memoizedState=u,o.childLanes=Bh(e,M,a),n.memoizedState=zh,$o(e.child,o)):(Ka(n),a=e.child,e=a.sibling,a=_a(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(M=n.deletions,M===null?(n.deletions=[e],n.flags|=16):M.push(e)),n.child=a,n.memoizedState=null,a)}function Fh(e,n){return n=Fc({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Fc(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function Hc(e,n,a){return Is(n,e.child,null,a),e=Fh(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function tM(e,n,a,o,u,h,M,N){if(a)return n.flags&256?(Ka(n),n.flags&=-257,Hc(e,n,N)):n.memoizedState!==null?(Ja(),n.child=e.child,n.flags|=128,null):(Ja(),h=u.fallback,M=n.mode,u=Fc({mode:"visible",children:u.children},M),h=Cs(h,M,N,null),h.flags|=2,u.return=n,h.return=n,u.sibling=h,n.child=u,Is(n,e.child,null,N),u=n.child,u.memoizedState=Ih(N),u.childLanes=Bh(e,o,N),n.memoizedState=zh,$o(null,u));if(Ka(n),Id(h)){if(o=h.nextSibling&&h.nextSibling.dataset,o)var q=o.dgst;return o=q,o!==""&&(u=Error(s(419)),u.stack="",u.digest=o,Go({value:u,source:null,stack:null})),Hc(e,n,N)}if(_n||Ns(e,n,N,!1),o=(N&e.childLanes)!==0,_n||o){if(Qa.current!==null)return Hc(e,n,N);if(o=Ke,o!==null&&(u=xt(o,N),u!==0&&u!==M.retryLane))throw M.retryLane=u,ws(e,u),ai(o,e,u),Oh;return zd(h)||au(),Hc(e,n,N)}return zd(h)?(n.flags|=192,n.child=e.child,null):(e=M.treeContext,$e=Di(h.nextSibling),Cn=n,Te=!0,ka=null,Ci=!1,e!==null&&K0(n,e),n=Fh(n,u.children),n.flags|=134221824,n)}function gv(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),_c(e.return,n,a)}function vv(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&wc(a)===null&&(n=e),e=e.sibling}return n}function Gc(e,n,a,o,u,h){var M=e.memoizedState;M===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:h}:(M.isBackwards=n,M.rendering=null,M.renderingStartTime=0,M.last=o,M.tail=a,M.tailMode=u,M.treeForkCount=h)}function Hh(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function Gh(e,n,a){var o=n.pendingProps,u=o.revealOrder,h=o.tail;o=o.children;var M=On.current;if(n.flags&128)return Zo(n,M),null;var N=(M&2)!==0;if(N?(M=M&1|2,n.flags|=128):M&=1,Zo(n,M),u==="backwards"&&e!==null?(Hh(e),bn(e,n,o,a),Hh(e)):bn(e,n,o,a),o=Te?Ho:0,!N&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gv(e,a,n);else if(e.tag===19)gv(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(u){case"backwards":a=vv(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,Hh(n)),Gc(n,!0,u,null,h,o);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(e=u.alternate,e!==null&&wc(e)===null){n.child=u;break}e=u.sibling,u.sibling=a,a=u,u=e}Gc(n,!0,a,null,h,o);break;case"together":Gc(n,!1,null,null,void 0,o);break;case"independent":n.memoizedState=null;break;default:a=vv(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Gc(n,!1,u,a,h,o)}return n.child}function _v(e,n,a){var o=n.pendingProps;return qa(n,n.type,o.value),bn(e,n,o.children,a),n.child}function Ta(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ns|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ns(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=_a(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=_a(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Vh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&yc(e)))}function eM(e,n,a){switch(n.tag){case 3:B(n,n.stateNode.containerInfo),qa(n,gn,e.memoizedState.cache),Rs();break;case 27:case 5:ot(n);break;case 4:B(n,n.stateNode.containerInfo);break;case 10:qa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,dh(n),null;break;case 13:var o=n.memoizedState;if(o!==null){if(o.dehydrated!==null)return Ka(n),n.flags|=128,null;o=Ns(e,n,a,!1);var u=n.child.childLanes;return o||(a&u)!==0?mv(e,n,a):(Ka(n),e=Ta(e,n,a),e!==null?e.sibling:null)}Ka(n);break;case 19:if(n.flags&128)return Gh(e,n,a);if(u=(e.flags&128)!==0,o=(a&n.childLanes)!==0,o||(Ns(e,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return Gh(e,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Zo(n,On.current),o)break;return null;case 22:return n.lanes=0,cv(e,n,a,n.pendingProps);case 24:qa(n,gn,e.memoizedState.cache)}return Ta(e,n,a)}function yv(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!Vh(e,a)&&(n.flags&128)===0)return _n=!1,eM(e,n,a);_n=(e.flags&131072)!==0}else _n=!1,Te&&(n.flags&1048576)!==0&&Q0(n,Ho,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Ps(n.elementType),n.type=e,typeof e=="function")Zf(e)?(o=Fs(e,o),n.tag=1,n=dv(null,n,e,o,a)):(n.tag=0,n=Ph(null,n,e,o,a));else{if(e!=null){var u=e.$$typeof;if(u===k){n.tag=11,n=rv(null,n,e,o,a);break t}else if(u===$){n.tag=14,n=ov(null,n,e,o,a);break t}else if(u===j){n.tag=10,n.type=e,n=_v(null,n,a);break t}}throw n=Rt(e)||e,Error(s(306,n,""))}}return n;case 0:return Ph(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Fs(o,n.pendingProps),dv(e,n,o,u,a);case 3:t:{if(B(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;u=h.element,lh(e,n),jo(n,o,null,a);var M=n.memoizedState;if(o=M.cache,qa(n,gn,o),o!==h.cache&&nh(n,[gn],a,!0),Wo(),o=M.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:M.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=pv(e,n,o,a);break t}else if(o!==u){u=bi(Error(s(424)),n),Go(u),n=pv(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=Di(e.firstChild),Cn=n,Te=!0,ka=null,Ci=!0,a=cg(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Rs(),o===u){n=Ta(e,n,a);break t}bn(e,n,o,a)}n=n.child}return n;case 26:return Dr(e,n),e===null?(a=X_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(n.stateNode=E_(n.type,n.pendingProps,re.current,n)):n.memoizedState=X_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return ot(n),e===null&&Te&&(o=n.stateNode=H_(n.type,n.pendingProps,re.current),Cn=n,Ci=!0,u=$e,rs(n.type)?(Bd=u,$e=Di(o.firstChild)):$e=u),bn(e,n,n.pendingProps.children,a),Dr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((u=o=$e)&&(o=ZM(o,n.type,n.pendingProps,Ci),o!==null?(n.stateNode=o,Cn=n,$e=Di(o.firstChild),Ci=!1,u=!0):u=!1),u||Xa(n)),ot(n),u=n.type,h=n.pendingProps,M=e!==null?e.memoizedProps:null,o=h.children,Rd(u,h)?o=null:M!==null&&Rd(u,M)&&(n.flags|=32),n.memoizedState!==null&&(u=gh(e,n,XS,null,null,a),jr._currentValue=u),Dr(e,n),bn(e,n,o,a),n.child;case 6:return e===null&&Te&&((e=a=$e)&&(a=QM(a,n.pendingProps,Ci),a!==null?(n.stateNode=a,Cn=n,$e=null,e=!0):e=!1),e||Xa(n)),null;case 13:return mv(e,n,a);case 4:return B(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Is(n,null,o,a):bn(e,n,o,a),n.child;case 11:return rv(e,n,n.type,n.pendingProps,a);case 7:return o=n.pendingProps,Dr(e,n),bn(e,n,o,a),n.child;case 8:return bn(e,n,n.pendingProps.children,a),n.child;case 12:return bn(e,n,n.pendingProps.children,a),n.child;case 10:return _v(e,n,a);case 9:return u=n.type._context,o=n.pendingProps.children,Us(n),u=Un(u),o=o(u),n.flags|=1,bn(e,n,o,a),n.child;case 14:return ov(e,n,n.type,n.pendingProps,a);case 15:return lv(e,n,n.type,n.pendingProps,a);case 19:return Gh(e,n,a);case 31:return $S(e,n,a);case 22:return cv(e,n,a,n.pendingProps);case 24:return Us(n),o=Un(gn),e===null?(u=sh(),u===null&&(u=Ke,h=ih(),u.pooledCache=h,h.refCount++,h!==null&&(u.pooledCacheLanes|=a),u=h),n.memoizedState={parent:o,cache:u},oh(n),qa(n,gn,u)):((e.lanes&a)!==0&&(lh(e,n),jo(n,null,null,a),Wo()),u=e.memoizedState,h=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),qa(n,gn,o)):(o=h.cache,qa(n,gn,o),o!==u.cache&&nh(n,[gn],a,!0))),bn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=n.pendingProps,o.name!=null&&o.name!=="auto"?n.flags|=e===null?18882560:18874368:Te&&gc(n),e!==null&&e.memoizedProps.name!==o.name?n.flags|=4194816:Dr(e,n),bn(e,n,o.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ba(e){e.flags|=4}function kh(e,n,a,o,u){var h;if((h=(e.mode&32)!==0)&&(h=a===null?j_(n,o):j_(n,o)&&(o.src!==a.src||o.srcSet!==a.srcSet)),h){if(e.flags|=16777216,(u&335544128)===u)if(e.stateNode.complete)e.flags|=8192;else if(t_())e.flags|=8192;else throw zs=Ec,rh}else e.flags&=-16777217}function xv(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Z_(n))if(t_())e.flags|=8192;else throw zs=Ec,rh}function Vc(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?tc():536870912,e.lanes|=n,Pr|=n)}function tl(e,n){if(!Te)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function tn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&1206910976,o|=u.flags&1206910976,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function nM(e,n,a){var o=n.pendingProps;switch(Jf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Sa(gn),R(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Er(n)?ba(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,th())),tn(n),null;case 26:var u=n.type,h=n.memoizedState;return e===null?(ba(n),h!==null?(tn(n),xv(n,h)):(tn(n),kh(n,u,null,o,a))):h?h!==e.memoizedState?(ba(n),tn(n),xv(n,h)):(tn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&ba(n),tn(n),kh(n,u,e,o,a)),null;case 27:if(_t(n),a=re.current,u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ba(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),n.subtreeFlags&=-33554433,null}e=Dt.current,Er(n)?J0(n):(e=H_(u,o,a),n.stateNode=e,ba(n))}return tn(n),n.subtreeFlags&=-33554433,null;case 5:if(_t(n),u=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&ba(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),n.subtreeFlags&=-33554433,null}if(h=Dt.current,Er(n))J0(n);else{var M=fl(re.current);switch(h){case 1:h=M.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:h=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":h=M.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":h=M.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":h=M.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?M.createElement("select",{is:o.is}):M.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?M.createElement(u,{is:o.is}):M.createElement(u)}}h[kt]=n,h[ie]=o;t:for(M=n.child;M!==null;){if(M.tag===5||M.tag===6)h.appendChild(M.stateNode);else if(M.tag!==4&&M.tag!==27&&M.child!==null){M.child.return=M,M=M.child;continue}if(M===n)break t;for(;M.sibling===null;){if(M.return===null||M.return===n)break t;M=M.return}M.sibling.return=M.return,M=M.sibling}n.stateNode=h;t:switch(zn(h,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&ba(n)}}return tn(n),n.subtreeFlags&=-33554433,kh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&ba(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=re.current,Er(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}e[kt]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||y_(e.nodeValue,a)),e||Xa(n,!0)}else e=fl(e).createTextNode(o),e[kt]=n,n.stateNode=e}return tn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Er(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[kt]=n}else Rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),e=!1}else a=th(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(fi(n),n):(fi(n),null);if((n.flags&128)!==0)throw Error(s(558))}return tn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(u=Er(n),o!==null&&o.dehydrated!==null){if(e===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[kt]=n}else Rs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),u=!1}else u=th(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(fi(n),n):(fi(n),null)}return fi(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==u&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Vc(n,n.updateQueue),tn(n),null);case 4:return R(),e===null&&Td(n.stateNode.containerInfo),n.flags|=67108864,tn(n),null;case 10:return Sa(n.type),tn(n),null;case 19:if(ph(n),o=n.memoizedState,o===null)return tn(n),null;if(u=(n.flags&128)!==0,h=o.rendering,h===null)if(u)tl(o,!1);else{if(fn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=wc(e),h!==null){for(n.flags|=128,tl(o,!1),e=h.updateQueue,n.updateQueue=e,Vc(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)W0(a,e),a=a.sibling;return Zo(n,On.current&1|2),Te&&ya(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&K()>tu&&(n.flags|=128,u=!0,tl(o,!1),n.lanes=4194304)}else{if(!u)if(e=wc(h),e!==null){if(n.flags|=128,u=!0,e=e.updateQueue,n.updateQueue=e,Vc(n,e),tl(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!h.alternate&&!Te)return tn(n),null}else 2*K()-o.renderingStartTime>tu&&a!==536870912&&(n.flags|=128,u=!0,tl(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}if(o.tail!==null){e=o.tail;t:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return o.rendering=e,o.tail=e.sibling,o.renderingStartTime=K(),e.sibling=null,h=On.current,h=u?h&1|2:h&1,o.tailMode==="visible"||o.tailMode==="collapsed"||!a||Te?Zo(n,h):(a=h,At(Ln,n),At(On,a),Gn===null&&(Gn=n)),Te&&ya(n,o.treeForkCount),e}return tn(n),null;case 22:case 23:return fi(n),hh(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&Vc(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&ht(Os),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Sa(gn),tn(n),null;case 25:return null;case 30:return n.flags|=33554432,tn(n),null}throw Error(s(156,n.tag))}function iM(e,n){switch(Jf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Sa(gn),R(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return _t(n),null;case 31:if(n.memoizedState!==null){if(fi(n),n.alternate===null)throw Error(s(340));Rs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(fi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Rs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ph(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return R(),null;case 10:return Sa(n.type),null;case 22:case 23:return fi(n),hh(),e!==null&&ht(Os),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Sa(gn),null;case 25:return null;default:return null}}function Sv(e,n){switch(Jf(n),n.tag){case 3:Sa(gn),R();break;case 26:case 27:case 5:_t(n);break;case 4:R();break;case 31:n.memoizedState!==null&&fi(n);break;case 13:fi(n);break;case 19:ph(n);break;case 10:Sa(n.type);break;case 22:case 23:fi(n),hh(),e!==null&&ht(Os);break;case 24:Sa(gn)}}function el(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&e)===e){o=void 0;var h=a.create,M=a.inst;o=h(),M.destroy=o}a=a.next}while(a!==u)}}catch(N){qe(n,n.return,N)}}function $a(e,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&e)===e){var M=o.inst,N=M.destroy;if(N!==void 0){M.destroy=void 0,u=n;var q=a,nt=N;try{nt()}catch(pt){qe(u,q,pt)}}}o=o.next}while(o!==h)}}catch(pt){qe(n,n.return,pt)}}function Mv(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{fg(n,a)}catch(o){qe(e,e.return,o)}}}function Ev(e,n,a){a.props=Fs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){qe(e,n,o)}}function Ji(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:var u=e.stateNode,h=ga(e.memoizedProps,u);(u.ref===null||u.ref.name!==h)&&(u.ref=D_(h)),o=u.ref;break;case 7:if(e.stateNode===null){var M=new gi(e);g(e.child,!1,WM,M,void 0,void 0),e.stateNode=M}o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(N){qe(e,n,N)}}function Pn(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){qe(e,n,u)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){qe(e,n,u)}else a.current=null}function kc(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)z_(e.stateNode,n[a])}function Tv(e){for(var n=e.return;n!==null&&(qh(n)&&z_(e.stateNode,n.stateNode),!Xh(n));)n=n.return}function nl(e){for(var n=e.return;n!==null&&(qh(n)&&jM(e.stateNode,n.stateNode),!Xh(n));)n=n.return}function Xh(e){return e.tag===5||e.tag===3||e.tag===27}function qh(e){return e&&e.tag===7&&e.stateNode!==null}function Yh(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){qe(e,e.return,u)}}function Wh(e,n,a){try{var o=e.stateNode;RM(o,e.type,a,n),o[ie]=n}catch(u){qe(e,e.return,u)}}function bv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&rs(e.type)||e.tag===4}function jh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||bv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&rs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zh(e,n,a,o){var u=e.tag;if(u===5||u===6)u=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Zi)),kc(e,o),Ie=!0;else if(u!==4&&(u===27&&(kc(e,o),o=null,rs(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(Zh(e,n,a,o),e=e.sibling;e!==null;)Zh(e,n,a,o),e=e.sibling}function Xc(e,n,a,o){var u=e.tag;if(u===5||u===6)u=e.stateNode,n?a.insertBefore(u,n):a.appendChild(u),kc(e,o),Ie=!0;else if(u!==4&&(u===27&&(kc(e,o),o=null,rs(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Xc(e,n,a,o),e=e.sibling;e!==null;)Xc(e,n,a,o),e=e.sibling}function Av(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);zn(n,o,a),n[kt]=e,n[ie]=a}catch(h){qe(e,e.return,h)}}var qc=!1,hi=null;function wv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(qc=!0)}var $i=null;function Cv(){var e=$i;return $i=null,e}var ei=0;function Nr(e,n,a,o,u){return ei=0,Rv(e.child,n,a,o,u)}function Rv(e,n,a,o,u){for(var h=!1;e!==null;){if(e.tag===5){var M=e.stateNode;if(o!==null){var N=Ud(M);o.push(N),N.view&&(h=!0)}else h||Ud(M).view&&(h=!0);qc=!0,C_(M,ei===0?n:n+"_"+ei,a),ei++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&u||Rv(e.child,n,a,o,u)&&(h=!0));e=e.sibling}return h}function ta(e,n){for(;e!==null;)e.tag===5?R_(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||ta(e.child,n)),e=e.sibling}function Yc(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Yc(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=va(n.default,n.share),n!=="none"&&(Nr(e,a,n,null,!1)||ta(e.child,!1))}e=e.sibling}}function Qh(e,n){if(e.tag===30){var a=e.stateNode,o=e.memoizedProps,u=ga(o,a),h=va(o.default,a.paired?o.share:o.enter);h!=="none"?Nr(e,u,h,null,!1)?(Yc(e),a.paired||n||Fr(e,o.onEnter)):ta(e.child,!1):Yc(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Qh(e,n),e=e.sibling;else Yc(e)}function Kh(e){if(hi!==null&&hi.size!==0){var n=hi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,o=a.name;if(o!=null&&o!=="auto"){var u=n.get(o);if(u!==void 0){var h=va(a.default,a.share);if(h!=="none"&&(Nr(e,o,h,null,!1)?(h=e.stateNode,u.paired=h,h.paired=u,Fr(e,a.onShare)):ta(e.child,!1)),n.delete(o),n.size===0)break}}}Kh(e)}e=e.sibling}}}function Jh(e){if(e.tag===30){var n=e.memoizedProps,a=ga(n,e.stateNode),o=hi!==null?hi.get(a):void 0,u=va(n.default,o!==void 0?n.share:n.exit);u!=="none"&&(Nr(e,a,u,null,!1)?o!==void 0?(u=e.stateNode,o.paired=u,u.paired=o,hi.delete(a),Fr(e,n.onShare)):Fr(e,n.onExit):ta(e.child,!1)),hi!==null&&Kh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Jh(e),e=e.sibling;else hi!==null&&Kh(e)}function Dv(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=ga(n,e.stateNode);n=va(n.default,n.update),e.flags&=-5,n!=="none"&&Nr(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Dv(e);e=e.sibling}}function $h(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,ta(e.child,!1))}$h(e)}e=e.sibling}}function Wc(e){if(e.tag===30)e.stateNode.paired=null,ta(e.child,!1),$h(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Wc(e),e=e.sibling;else $h(e)}function Nv(e){for(e=e.child;e!==null;)e.tag===30?ta(e.child,!1):(e.subtreeFlags&33554432)!==0&&Nv(e),e=e.sibling}function td(e,n,a,o,u,h,M){for(var N=!1;n!==null;){if(n.tag===5){var q=n.stateNode;if(h!==null&&ei<h.length){var nt=h[ei],pt=Ud(q);(nt.view||pt.view)&&(N=!0);var Ct;if(Ct=(e.flags&4)===0)if(pt.clip)Ct=!0;else{Ct=nt.rect;var tt=pt.rect;Ct=Ct.y!==tt.y||Ct.x!==tt.x||Ct.height!==tt.height||Ct.width!==tt.width}Ct&&(e.flags|=4),pt.abs?pt=!nt.abs:(nt=nt.rect,pt=pt.rect,pt=nt.height!==pt.height||nt.width!==pt.width),pt&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&C_(q,ei===0?a:a+"_"+ei,u),N&&(e.flags&4)!==0||($i===null&&($i=[]),$i.push(q,ei===0?o:o+"_"+ei,n.memoizedProps)),ei++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&M?e.flags|=n.flags&32:td(e,n.child,a,o,u,h,M)&&(N=!0));n=n.sibling}return N}function Uv(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,o=e.stateNode,u=ga(a,o),h=va(a.default,a.update),M;M=e.memoizedState,e.memoizedState=null,o=e;var N=e.child;ei=0,u=td(o,N,u,u,h,M,!1),(e.flags&4)!==0&&u&&Fr(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Uv(e);e=e.sibling}}var Rn=!1,ke=!1,ea=!1,ed=!1,Lv=typeof WeakSet=="function"?WeakSet:Set,Dn=null,na=!1,il=!1,jc=!1,nd=!1;function aM(e,n,a){if(e=e.containerInfo,wd=Zr,e=I0(e),Vf(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else t:{o=(o=e.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,M=u.focusNode;u=u.focusOffset;try{o.nodeType,M.nodeType}catch{o=null;break t}var N=0,q=-1,nt=-1,pt=0,Ct=0,tt=e,ft=null;e:for(;;){for(var qt;tt!==o||h!==0&&tt.nodeType!==3||(q=N+h),tt!==M||u!==0&&tt.nodeType!==3||(nt=N+u),tt.nodeType===3&&(N+=tt.nodeValue.length),(qt=tt.firstChild)!==null;)ft=tt,tt=qt;for(;;){if(tt===e)break e;if(ft===o&&++pt===h&&(q=N),ft===M&&++Ct===u&&(nt=N),(qt=tt.nextSibling)!==null)break;tt=ft,ft=tt.parentNode}tt=qt}o=q===-1||nt===-1?null:{start:q,end:nt}}else o=null}o=o||{start:0,end:0}}else o=null;for(Cd={focusedElem:e,selectionRange:o},Zr=!1,a=(a&335544064)===a,Dn=n,n=a?9270:1024;Dn!==null;){if(e=Dn,a&&(o=e.deletions,o!==null))for(h=0;h<o.length;h++)a&&Jh(o[h]);if(e.alternate===null&&(e.flags&2)!==0)a&&wv(e),Zc(a);else{if(e.tag===22){if(o=e.alternate,e.memoizedState!==null){o!==null&&o.memoizedState===null&&a&&Jh(o),Zc(a);continue}else if(o!==null&&o.memoizedState!==null){a&&wv(e),Zc(a);continue}}o=e.child,(e.subtreeFlags&n)!==0&&o!==null?(o.return=e,Dn=o):(a&&Dv(e),Zc(a))}}hi=null}function Zc(e){for(;Dn!==null;){var n=Dn,a=e,o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&o!==null){a=void 0,u=o.memoizedProps,o=o.memoizedState;var h=n.stateNode;try{var M=Fs(n.type,u);a=h.getSnapshotBeforeUpdate(M,o),h.__reactInternalSnapshotBeforeUpdate=a}catch(N){qe(n,n.return,N)}}break;case 3:if((u&1024)!==0){if(o=n.stateNode.containerInfo,a=o.nodeType,a===9)Pd(o);else if(a===1)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":Pd(o);break;default:o.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&o!==null&&(a=ga(o.memoizedProps,o.stateNode),u=n.memoizedProps,u=va(u.default,u.update),u!=="none"&&Nr(o,a,u,o.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(s(163))}if(o=n.sibling,o!==null){o.return=n.return,Dn=o;break}Dn=n.return}}function Ov(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ia(e,a),o&4&&el(5,a);break;case 1:if(ia(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(M){qe(a,a.return,M)}else{var u=Fs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(u,n,e.__reactInternalSnapshotBeforeUpdate)}catch(M){qe(a,a.return,M)}}o&64&&Mv(a),o&512&&Ji(a,a.return);break;case 3:if(ia(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{fg(e,n)}catch(M){qe(a,a.return,M)}}break;case 27:n===null&&o&4&&Av(a);case 26:case 5:ia(e,a),n===null&&o&4&&Yh(a),o&512&&Ji(a,a.return);break;case 12:ia(e,a);break;case 31:ia(e,a),o&4&&Bv(e,a);break;case 13:ia(e,a),o&4&&Fv(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=gM.bind(null,a),KM(e,a))));break;case 22:if(o=a.memoizedState!==null||Rn,!o){var h=n!==null&&n.memoizedState!==null||ke;n=Rn,u=ke,Rn=o,(ke=h)&&!u?(o=2,(a.subtreeFlags&8772)!==0&&(o|=1),Fi(e,a,o)):ia(e,a),Rn=n,ke=u}break;case 30:ia(e,a),o&512&&Ji(a,a.return);break;case 7:o&512&&Ji(a,a.return);default:ia(e,a)}}function id(e,n){for(e=e.child;e!==null;)Pv(e,n),e=e.sibling}function Pv(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var o=a.style;typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"}else{var u=e.stateNode,h=e.memoizedProps.style,M=h!=null&&h.hasOwnProperty("display")?h.display:null;u.style.display=M==null||typeof M=="boolean"?"":(""+M).trim()}}catch(q){qe(e,e.return,q)}ad(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,Ie=!0}catch(q){qe(e,e.return,q)}break;case 18:try{var N=e.stateNode;n?w_(N,!0):w_(e.stateNode,!1)}catch(q){qe(e,e.return,q)}break;case 22:case 23:e.memoizedState===null&&id(e,n);break;default:id(e,n)}}function ad(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var a=e,o=n;switch(a.tag){case 4:Pv(a,o);break t;case 22:a.memoizedState===null&&ad(a,o);break t;default:ad(a,o)}}e=e.sibling}}function zv(e){var n=e.alternate;n!==null&&(e.alternate=null,zv(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&fe(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var sn=null,ni=!1;function Ii(e,n,a){for(a=a.child;a!==null;)Iv(e,n,a),a=a.sibling}function Iv(e,n,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Re,a)}catch{}switch(a.tag){case 26:ke||Pn(a,n),Ii(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!ke&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ke||Pn(a,n),nl(a);var o=sn,u=ni;rs(a.type)&&(sn=a.stateNode,ni=!1),Ii(e,n,a),G_(a.stateNode,a.type,a.memoizedProps),sn=o,ni=u;break;case 5:ke||Pn(a,n),nl(a);case 6:if(a.tag===6&&nl(a),o=sn,u=ni,sn=null,Ii(e,n,a),sn=o,ni=u,sn!==null)if(ni)try{(sn.nodeType===9?sn.body:sn.nodeName==="HTML"?sn.ownerDocument.body:sn).removeChild(a.stateNode),Ie=!0}catch(h){qe(a,n,h)}else try{sn.removeChild(a.stateNode),Ie=!0}catch(h){qe(a,n,h)}break;case 18:sn!==null&&(ni?(e=sn,A_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Qr(e)):A_(sn,a.stateNode));break;case 4:o=sn,u=ni,sn=a.stateNode.containerInfo,ni=!0,Ii(e,n,a),sn=o,ni=u;break;case 0:case 11:case 14:case 15:$a(2,a,n),ke||$a(4,a,n),Ii(e,n,a);break;case 1:ke||(Pn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&Ev(a,n,o)),Ii(e,n,a);break;case 21:Ii(e,n,a);break;case 22:ke=(o=ke)||a.memoizedState!==null,Ii(e,n,a),ke=o;break;case 30:Pn(a,n),Ii(e,n,a);break;case 7:ke||Pn(a,n),Ii(e,n,a);break;default:Ii(e,n,a)}}function Bv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Qr(e)}catch(a){qe(n,n.return,a)}}}function Fv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qr(e)}catch(a){qe(n,n.return,a)}}function sM(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Lv),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Lv),n;default:throw Error(s(435,e.tag))}}function Qc(e,n){var a=sM(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=vM.bind(null,e,o);o.then(u,u)}})}function Qn(e,n,a){var o=n.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u],M=e,N=n,q=N;t:for(;q!==null;){switch(q.tag){case 27:if(rs(q.type)){sn=q.stateNode,ni=!1;break t}break;case 5:sn=q.stateNode,ni=!1;break t;case 3:case 4:sn=q.stateNode.containerInfo,ni=!0;break t}q=q.return}if(sn===null)throw Error(s(160));Iv(M,N,h),sn=null,ni=!1,M=h.alternate,M!==null&&(M.return=null),h.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Hv(n,e,a),n=n.sibling}var Bi=null;function Hv(e,n,a){var o=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(u&4&&(o=e.updateQueue,o=o!==null?o.events:null,o!==null))for(var h=0;h<o.length;h++){var M=o[h];M.ref.impl=M.nextImpl}Qn(n,e,a),Kn(e),u&4&&($a(3,e,e.return),el(3,e),$a(5,e,e.return));break;case 1:Qn(n,e,a),Kn(e),u&512&&(ke||o===null||Pn(o,o.return)),u&64&&Rn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(h=Bi,Qn(n,e,a),Kn(e),u&512&&(ke||o===null||Pn(o,o.return)),u&4)if(u=o!==null?o.memoizedState:null,a=e.memoizedState,o===null)if(a===null)if(e.stateNode===null)if(Rn)e.stateNode=E_(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,a=e.memoizedProps,u=h.ownerDocument||h;e:switch(n){case"title":o=u.getElementsByTagName("title")[0],(!o||o[Be]||o[kt]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=u.createElement(n),u.head.insertBefore(o,u.querySelector("head > title"))),zn(o,n,a),o[kt]=e,ze(o),n=o;break t;case"link":if(h=W_("link","href",u).get(n+(a.href||""))){for(M=0;M<h.length;M++)if(o=h[M],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){h.splice(M,1);break e}}o=u.createElement(n),zn(o,n,a),u.head.appendChild(o);break;case"meta":if(h=W_("meta","content",u).get(n+(a.content||""))){for(M=0;M<h.length;M++)if(o=h[M],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){h.splice(M,1);break e}}o=u.createElement(n),zn(o,n,a),u.head.appendChild(o);break;default:throw Error(s(468,n))}o[kt]=e,ze(o),n=o}e.stateNode=n}else Rn||Vd(h,e.type,e.stateNode);else e.stateNode=Y_(h,a,e.memoizedProps);else u!==a?(u===null?(n=o.stateNode,n===null||ke||n.parentNode.removeChild(n)):u.count--,a===null?Rn||Vd(h,e.type,e.stateNode):Y_(h,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Wh(e,e.memoizedProps,o.memoizedProps);break;case 27:Qn(n,e,a),Kn(e),u&512&&(ke||o===null||Pn(o,o.return)),o!==null&&u&4&&Wh(e,e.memoizedProps,o.memoizedProps);break;case 5:if(h=ea,ea=!1,Qn(n,e,a),ea=h,Kn(e),u&512&&(ke||o===null||Pn(o,o.return)),e.flags&32){n=e.stateNode;try{dr(n,""),Ie=!0}catch(pt){qe(e,e.return,pt)}}u&4&&e.stateNode!=null&&(n=e.memoizedProps,Wh(e,n,o!==null?o.memoizedProps:n)),u&1024&&(ed=!0);break;case 6:if(Qn(n,e,a),Kn(e),u&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,Ie=!0}catch(pt){qe(e,e.return,pt)}}break;case 3:if(Ie=!1,fu=null,h=Bi,Bi=hl(n.containerInfo),Qn(n,e,a),Bi=h,Kn(e),u&4&&o!==null&&o.memoizedState.isDehydrated)try{Qr(n.containerInfo)}catch(pt){qe(e,e.return,pt)}ed&&(ed=!1,Gv(e)),Ie=!1;break;case 4:u=ea,ea=Rn,o=o0(),h=Bi,Bi=hl(e.stateNode.containerInfo),Qn(n,e,a),Kn(e),Bi=h,Ie&&il&&(jc=!0),Ie=o,ea=u;break;case 12:Qn(n,e,a),Kn(e);break;case 31:Qn(n,e,a),Kn(e),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Qc(e,n)));break;case 13:Qn(n,e,a),Kn(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&($c=K()),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Qc(e,n)));break;case 22:h=e.memoizedState!==null,M=o!==null&&o.memoizedState!==null;var N=Rn,q=ke,nt=ea;Rn=N||h,ea=nt||h,ke=q||M,Qn(n,e,a),ke=q,ea=nt,Rn=N,Kn(e),u&8192&&(n=e.stateNode,n._visibility=h?n._visibility&-2:n._visibility|1,!h||o===null||M||Rn||ke||(n=M||ke,a=Rn,o=ke,Rn=h||Rn,ke=n,ts(e,2),Rn=a,ke=o),!h&&ea||id(e,h)),u&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,Qc(e,a))));break;case 19:Qn(n,e,a),Kn(e),u&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,Qc(e,n)));break;case 30:u&512&&(ke||o===null||Pn(o,o.return)),u=o0(),h=il,M=(a&335544064)===a,N=e.memoizedProps,il=M&&va(N.default,N.update)!=="none",Qn(n,e,a),Kn(e),M&&o!==null&&Ie&&(e.flags|=4),il=h,Ie=u;break;case 21:break;case 7:u&512&&(ke||o===null||Pn(o,o.return)),o&&o.stateNode!==null&&(o.stateNode._fragmentFiber=e);default:Qn(n,e,a),Kn(e)}}function Kn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(bv(o)){a=o;break}o=o.return}o=null;for(var u=e.return;u!==null;){if(qh(u)){var h=u.stateNode;o===null?o=[h]:o.push(h)}if(Xh(u))break;u=u.return}var M=o;if(a==null)throw Error(s(160));switch(a.tag){case 27:var N=a.stateNode,q=jh(e);Xc(e,q,N,M);break;case 5:var nt=a.stateNode;a.flags&32&&(dr(nt,""),a.flags&=-33);var pt=jh(e);Xc(e,pt,nt,M);break;case 3:case 4:var Ct=a.stateNode.containerInfo,tt=jh(e);Zh(e,tt,Ct,M);break;default:throw Error(s(161))}}catch(ft){qe(e,e.return,ft)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Gv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Gv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Zr=!0,n.reset(),Zr=!1),e=e.sibling}}function Ur(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Vv(n,e),n=n.sibling;else Uv(n)}function Vv(e,n){var a=e.alternate;if(a===null)Qh(e,!1);else switch(e.tag){case 3:if(nd=na=!1,Cv(),Ur(n,e),!na&&!jc){if(e=$i,e!==null)for(var o=0;o<e.length;o+=3){a=e[o];var u=e[o+1];R_(a,e[o+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),nd=!0}$i=null;break;case 5:Ur(n,e);break;case 4:o=na,na=!1,Ur(n,e),na&&(jc=!0),na=o;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Qh(e,!1):Ur(n,e));break;case 30:o=na,u=Cv(),na=!1,Ur(n,e),na&&(e.flags|=4);var h=e.memoizedProps,M=e.stateNode;n=ga(h,M),M=ga(a.memoizedProps,M);var N=va(h.default,h.update);N==="none"?n=!1:(h=a.memoizedState,a.memoizedState=null,a=e.child,ei=0,n=td(e,a,n,M,N,h,!0),ei!==(h===null?0:h.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Fr(e,e.memoizedProps.onUpdate),$i=u):u!==null&&(u.push.apply(u,$i),$i=u),na=(e.flags&32)!==0?!0:o;break;default:Ur(n,e)}}function ia(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ov(e,n.alternate,n),n=n.sibling}function ts(e,n){for(e=e.child;e!==null;){var a=e,o=n;switch(a.tag){case 0:case 11:case 14:case 15:$a(4,a,a.return),ts(a,o);break;case 1:Pn(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&Ev(a,a.return,u),ts(a,o);break;case 27:(o&2)!==0&&G_(a.stateNode,a.type,a.memoizedProps);case 5:Pn(a,a.return),a.tag!==5&&a.tag!==27||nl(a),ts(a,o);break;case 6:nl(a);break;case 26:Pn(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||ke||u.parentNode.removeChild(u),ts(a,o);break;case 22:a.memoizedState===null&&ts(a,o);break;case 30:Pn(a,a.return),ts(a,o);break;case 7:Pn(a,a.return);default:ts(a,o)}e=e.sibling}}function Fi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var o=n.alternate,u=e,h=n,M=h.flags,N=(a&1)!==0;switch(h.tag){case 0:case 11:case 15:Fi(u,h,a),el(4,h);break;case 1:if(Fi(u,h,a),o=h,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(pt){qe(o,o.return,pt)}if(o=h,u=o.updateQueue,u!==null){var q=o.stateNode;try{var nt=u.shared.hiddenCallbacks;if(nt!==null)for(u.shared.hiddenCallbacks=null,u=0;u<nt.length;u++)ug(nt[u],q)}catch(pt){qe(o,o.return,pt)}}N&&M&64&&Mv(h),Ji(h,h.return);break;case 27:(a&2)!==0&&Av(h);case 5:h.tag!==5&&h.tag!==27||Tv(h),Fi(u,h,a),N&&o===null&&M&4&&Yh(h),Ji(h,h.return);break;case 6:Tv(h);break;case 26:q=h.stateNode,h.memoizedState!==null||q===null||Rn||Vd(hl(q.ownerDocument),h.type,q),Fi(u,h,a),N&&o===null&&M&4&&Yh(h),Ji(h,h.return);break;case 12:Fi(u,h,a);break;case 31:Fi(u,h,a),N&&M&4&&Bv(u,h);break;case 13:Fi(u,h,a),N&&M&4&&Fv(u,h);break;case 22:h.memoizedState===null&&Fi(u,h,a),Ji(h,h.return);break;case 30:Fi(u,h,a),Ji(h,h.return);break;case 7:Ji(h,h.return);default:Fi(u,h,a)}n=n.sibling}}function sd(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Vo(a))}function rd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Vo(e))}function Ri(e,n,a,o){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)kv(e,n,a,o),n=n.sibling;else u&&Nv(n)}function kv(e,n,a,o){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Wc(n);var h=n.flags;switch(n.tag){case 0:case 11:case 15:Ri(e,n,a,o),h&2048&&el(9,n);break;case 1:Ri(e,n,a,o);break;case 3:Ri(e,n,a,o),u&&nd&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),h&2048&&(h=null,n.alternate!==null&&(h=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==h&&(n.refCount++,h!=null&&Vo(h)));break;case 12:if(h&2048){Ri(e,n,a,o),h=n.stateNode;try{var M=n.memoizedProps,N=M.id,q=M.onPostCommit;typeof q=="function"&&q(N,n.alternate===null?"mount":"update",h.passiveEffectDuration,-0)}catch(nt){qe(n,n.return,nt)}}else Ri(e,n,a,o);break;case 31:Ri(e,n,a,o);break;case 13:Ri(e,n,a,o);break;case 23:break;case 22:M=n.stateNode,N=n.alternate,n.memoizedState!==null?(u&&N!==null&&N.memoizedState===null&&Wc(N),M._visibility&2?Ri(e,n,a,o):al(e,n)):(u&&N!==null&&N.memoizedState!==null&&Wc(n),M._visibility&2?Ri(e,n,a,o):(M._visibility|=2,Lr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1))),h&2048&&sd(N,n);break;case 24:Ri(e,n,a,o),h&2048&&rd(n.alternate,n);break;case 30:u&&(h=n.alternate,h!==null&&(ta(h.child,!0),ta(n.child,!0))),Ri(e,n,a,o);break;default:Ri(e,n,a,o)}}function Lr(e,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,M=n,N=a,q=o,nt=M.flags;switch(M.tag){case 0:case 11:case 15:Lr(h,M,N,q,u),el(8,M);break;case 23:break;case 22:var pt=M.stateNode;M.memoizedState!==null?pt._visibility&2?Lr(h,M,N,q,u):al(h,M):(pt._visibility|=2,Lr(h,M,N,q,u)),u&&nt&2048&&sd(M.alternate,M);break;case 24:Lr(h,M,N,q,u),u&&nt&2048&&rd(M.alternate,M);break;default:Lr(h,M,N,q,u)}n=n.sibling}}function al(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,u=o.flags;switch(o.tag){case 22:al(a,o),u&2048&&sd(o.alternate,o);break;case 24:al(a,o),u&2048&&rd(o.alternate,o);break;default:al(a,o)}n=n.sibling}}var Hs=8192;function Gs(e,n,a){if(e.subtreeFlags&Hs)for(e=e.child;e!==null;)Xv(e,n,a),e=e.sibling}function Xv(e,n,a){switch(e.tag){case 26:Gs(e,n,a),e.flags&Hs&&(e.memoizedState!==null?fE(a,Bi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&K_(a,e)));break;case 5:Gs(e,n,a),e.flags&Hs&&(e=e.stateNode,(n&335544128)===n&&K_(a,e));break;case 3:case 4:var o=Bi;Bi=hl(e.stateNode.containerInfo),Gs(e,n,a),Bi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Hs,Hs=16777216,Gs(e,n,a),Hs=o):Gs(e,n,a));break;case 30:if((e.flags&Hs)!==0&&(o=e.memoizedProps.name,o!=null&&o!=="auto")){var u=e.stateNode;u.paired=null,hi===null&&(hi=new Map),hi.set(o,u)}Gs(e,n,a);break;default:Gs(e,n,a)}}function qv(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function sl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Dn=o,Wv(o,e)}qv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Yv(e),e=e.sibling}function Yv(e){switch(e.tag){case 0:case 11:case 15:sl(e),e.flags&2048&&$a(9,e,e.return);break;case 3:sl(e);break;case 12:sl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Kc(e)):sl(e);break;default:sl(e)}}function Kc(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Dn=o,Wv(o,e)}qv(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:$a(8,n,n.return),Kc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Kc(n));break;default:Kc(n)}e=e.sibling}}function Wv(e,n){for(;Dn!==null;){var a=Dn;switch(a.tag){case 0:case 11:case 15:$a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Vo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Dn=o;else t:for(a=e;Dn!==null;){o=Dn;var u=o.sibling,h=o.return;if(zv(o),o===a){Dn=null;break t}if(u!==null){u.return=h,Dn=u;break t}Dn=h}}}var rM={getCacheForType:function(e){var n=Un(gn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Un(gn).controller.signal}},oM=typeof WeakMap=="function"?WeakMap:Map,He=0,Ke=null,we=null,De=0,Xe=0,di=null,es=!1,Or=!1,od=!1,Aa=0,fn=0,ns=0,Vs=0,Jc=0,pi=0,Pr=0,rl=null,ii=null,ld=!1,$c=0,jv=0,tu=1/0,eu=null,is=null,on=0,Hi=null,ks=null,aa=0,cd=0,ud=null,Zv=null,zr=null,Ir=null,Br=null,ol=0,nu=null;function mi(){return(He&2)!==0&&De!==0?De&-De:bt.T!==null?xd():Bt()}function Qv(){if(pi===0)if((De&536870912)===0||Te){var e=da;da<<=1,(da&3932160)===0&&(da=262144),pi=e}else pi=536870912;return e=Ln.current,e!==null&&(e.flags|=32),pi}function Fr(e,n){if(n!=null){var a=e.stateNode,o=a.ref;o===null&&(o=a.ref=D_(ga(e.memoizedProps,a))),Ir===null&&(Ir=[]),Ir.push(n.bind(null,o))}}function ai(e,n,a){(e===Ke&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)&&(Hr(e,0),as(e,De,pi,!1)),Ts(e,a),((He&2)===0||e!==Ke)&&(e===Ke&&((He&2)===0&&(Vs|=a),fn===4&&as(e,De,pi,!1)),sa(e))}function Kv(e,n,a){if((He&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ba(e,n),u=o?uM(e,n):hd(e,n,!0),h=o;do{if(u===0){Or&&!o&&as(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!lM(a)){u=hd(e,n,!1),h=!1;continue}if(u===2){if(h=n,e.errorRecoveryDisabledLanes&h)var M=0;else M=e.pendingLanes&-536870913,M=M!==0?M:M&536870912?536870912:0;if(M!==0){n=M;t:{var N=e;u=rl;var q=N.current.memoizedState.isDehydrated;if(q&&(Hr(N,M).flags|=256),M=hd(N,M,!1),M!==2&&M!==6){if(od&&!q){N.errorRecoveryDisabledLanes|=h,Vs|=h,u=4;break t}h=ii,ii=u,h!==null&&(ii===null?ii=h:ii.push.apply(ii,h))}u=M}if(h=!1,u!==2)continue}}if(u===1){Hr(e,0),as(e,n,0,!0);break}t:{switch(o=e,h=u,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:as(o,n,pi,!es);break t;case 2:ii=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=$c+300-K(),10<u)){if(as(o,n,pi,!es),Es(o,0,!0)!==0)break t;aa=n,o.timeoutHandle=Nd(Jv.bind(null,o,a,ii,eu,ld,n,pi,Vs,Pr,es,h,"Throttled",-0,0),u);break t}Jv(o,a,ii,eu,ld,n,pi,Vs,Pr,es,h,null,-0,0)}}break}while(!0);sa(e)}function Jv(e,n,a,o,u,h,M,N,q,nt,pt,Ct,tt,ft){e.timeoutHandle=-1;var qt=n.subtreeFlags,ae=(h&335544064)===h;if(Ct=null,(ae||qt&8192||(qt&16785408)===16785408)&&(Ct={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Zi},hi=null,Xv(n,h,Ct),ae&&(qt=Ct,ae=e.containerInfo,ae=(ae.nodeType===9?ae:ae.ownerDocument).__reactViewTransition,ae!=null&&(qt.count++,qt.waitingForViewTransition=!0,qt=ml.bind(qt),ae.finished.then(qt,qt))),qt=(h&62914560)===h?$c-K():(h&4194048)===h?jv-K():0,qt=hE(Ct,qt),qt!==null)){aa=h,e.cancelPendingCommit=qt(r_.bind(null,e,n,h,a,o,u,M,N,q,nt,pt,Ct,null,tt,ft)),as(e,h,M,!nt);return}r_(e,n,h,a,o,u,M,N,q,nt,pt,Ct)}function lM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],h=u.getSnapshot;u=u.value;try{if(!ui(h(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function as(e,n,a,o){n=$l(e,n),n&=~Jc,n&=~Vs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var u=n;0<u;){var h=31-Fn(u),M=1<<h;o[h]=-1,u&=~M}a!==0&&L(e,a,n)}function iu(){return(He&6)===0?(ll(0),!1):!0}function fd(){if(we!==null){if(Xe===0)var e=we.return;else e=we,xa=Ds=null,yh(e),Ar=null,qo=0,e=we;for(;e!==null;)Sv(e.alternate,e),e=e.return;we=null}}function Hr(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,UM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),aa=0,fd(),Ke=e,we=a=_a(e.current,null),De=n,Xe=0,di=null,es=!1,Or=Ba(e,n),od=!1,Pr=pi=Jc=Vs=ns=fn=0,ii=rl=null,ld=!1,Aa=$l(e,n),fc(),a}function $v(e,n){xe=null,bt.H=zc,n===br||n===Mc?(n=rg(),Xe=3):n===rh?(n=rg(),Xe=4):Xe=n===Oh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,di=n,we===null&&(fn=1,Ic(e,bi(n,e.current)))}function t_(){var e=Ln.current;return e===null?!0:(De&4194048)===De?Gn===null:(De&62914560)===De||(De&536870912)!==0?e===Gn:!1}function e_(){var e=bt.H;return bt.H=zc,e===null?zc:e}function n_(){var e=bt.A;return bt.A=rM,e}function au(){fn=4,es||(De&4194048)!==De&&Ln.current!==null||(Or=!0),(ns&134217727)===0&&(Vs&134217727)===0||Ke===null||as(Ke,De,pi,!1)}function hd(e,n,a){var o=He;He|=2;var u=e_(),h=n_();(Ke!==e||De!==n)&&(eu=null,Hr(e,n)),n=!1;var M=fn;t:do try{if(Xe!==0&&we!==null){var N=we,q=di;switch(Xe){case 8:fd(),M=6;break t;case 3:case 2:case 9:case 6:Ln.current===null&&(n=!0);var nt=Xe;if(Xe=0,di=null,Gr(e,N,q,nt),a&&Or){M=0;break t}break;default:nt=Xe,Xe=0,di=null,Gr(e,N,q,nt)}}cM(),M=fn;break}catch(pt){$v(e,pt)}while(!0);return n&&e.shellSuspendCounter++,xa=Ds=null,He=o,bt.H=u,bt.A=h,we===null&&(Ke=null,De=0,fc()),M}function cM(){for(;we!==null;)i_(we)}function uM(e,n){var a=He;He|=2;var o=e_(),u=n_();Ke!==e||De!==n?(eu=null,tu=K()+500,Hr(e,n)):Or=Ba(e,n);t:do try{if(Xe!==0&&we!==null){n=we;var h=di;e:switch(Xe){case 1:Xe=0,di=null,Gr(e,n,h,1);break;case 2:case 9:if(ag(h)){Xe=0,di=null,a_(n);break}n=function(){Xe!==2&&Xe!==9||Ke!==e||(Xe=7),sa(e)},h.then(n,n);break t;case 3:Xe=7;break t;case 4:Xe=5;break t;case 7:ag(h)?(Xe=0,di=null,a_(n)):(Xe=0,di=null,Gr(e,n,h,7));break;case 5:var M=null;switch(we.tag){case 26:M=we.memoizedState;case 5:case 27:var N=we;if(M?Z_(M):N.stateNode.complete){Xe=0,di=null;var q=N.sibling;if(q!==null)we=q;else{var nt=N.return;nt!==null?(we=nt,su(nt)):we=null}break e}}Xe=0,di=null,Gr(e,n,h,5);break;case 6:Xe=0,di=null,Gr(e,n,h,6);break;case 8:fd(),fn=6;break t;default:throw Error(s(462))}}fM();break}catch(pt){$v(e,pt)}while(!0);return xa=Ds=null,bt.H=o,bt.A=u,He=a,we!==null?0:(Ke=null,De=0,fc(),fn)}function fM(){for(;we!==null&&!Yt();)i_(we)}function i_(e){var n=yv(e.alternate,e,Aa);e.memoizedProps=e.pendingProps,n===null?su(e):we=n}function a_(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=hv(a,n,n.pendingProps,n.type,void 0,De);break;case 11:n=hv(a,n,n.pendingProps,n.type.render,n.ref,De);break;case 5:yh(n);var o=n;o===Cn&&(Te?(vc(o),o.tag===5&&o.stateNode!=null&&($e=o.stateNode)):(vc(o),Te=!0));default:Sv(a,n),n=we=W0(n,Aa),n=yv(a,n,Aa)}e.memoizedProps=e.pendingProps,n===null?su(e):we=n}function Gr(e,n,a,o){xa=Ds=null,yh(n),Ar=null,qo=0;var u=n.return;try{if(JS(e,u,n,a,De)){fn=1,Ic(e,bi(a,e.current)),we=null;return}}catch(h){if(u!==null)throw we=u,h;fn=1,Ic(e,bi(a,e.current)),we=null;return}n.flags&32768?(Te||o===1?e=!0:Or||(De&536870912)!==0?e=!1:(es=e=!0,(o===2||o===9||o===3||o===6)&&(o=Ln.current,o!==null&&o.tag===13&&(o.flags|=16384))),s_(n,e)):su(n)}function su(e){var n=e;do{if((n.flags&32768)!==0){s_(n,es);return}e=n.return;var a=nM(n.alternate,n,Aa);if(a!==null){we=a;return}if(n=n.sibling,n!==null){we=n;return}we=n=e}while(n!==null);fn===0&&(fn=5)}function s_(e,n){do{var a=iM(e.alternate,e);if(a!==null){a.flags&=32767,we=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){we=e;return}we=e=a}while(e!==null);fn=6,we=null}function r_(e,n,a,o,u,h,M,N,q,nt,pt,Ct){e.cancelPendingCommit=null;do ru();while(on!==0);if((He&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===Ke&&(we=Ke=null,De=0),ks=n,Hi=e,aa=a,ud=u,Zv=o,hM(e,n,a,M,N,q,Ct)}}function hM(e,n,a,o,u,h,M){var N=n.lanes|n.childLanes;if(cd=N,N|=Wf,Tf(e,a,N,o,u,h),Ir=null,(a&335544064)===a?(Br=HS(e),o=10262):(Br=null,o=10256),(n.subtreeFlags&o)!==0||(n.flags&o)!==0?(e.callbackNode=null,e.callbackPriority=0,_M(Lt,function(){return gd(),null})):(e.callbackNode=null,e.callbackPriority=0),qc=!1,o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=bt.T,bt.T=null,u=vt.p,vt.p=2,h=He,He|=4;try{aM(e,n,a)}finally{He=h,vt.p=u,bt.T=o}}on=1,qc?zr=BM(M,e.containerInfo,Br,dd,pd,pM,md,gd,dM):(dd(),pd(),md())}function dM(e){if(on!==0){var n=Hi.onRecoverableError;n(e,{componentStack:null})}}function pM(){on===3&&(on=0,Vv(ks,Hi),on=4)}function dd(){if(on===1){on=0;var e=Hi,n=ks,a=aa,o=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||o){o=bt.T,bt.T=null;var u=vt.p;vt.p=2;var h=He;He|=4;try{il=jc=!1,Hv(n,e,a),a=Cd;var M=I0(e.containerInfo),N=a.focusedElem,q=a.selectionRange;if(M!==N&&N&&N.ownerDocument&&z0(N.ownerDocument.documentElement,N)){if(q!==null&&Vf(N)){var nt=q.start,pt=q.end;if(pt===void 0&&(pt=nt),"selectionStart"in N)N.selectionStart=nt,N.selectionEnd=Math.min(pt,N.value.length);else{var Ct=N.ownerDocument||document,tt=Ct&&Ct.defaultView||window;if(tt.getSelection){var ft=tt.getSelection(),qt=N.textContent.length,ae=Math.min(q.start,qt),Se=q.end===void 0?ae:Math.min(q.end,qt);!ft.extend&&ae>Se&&(M=Se,Se=ae,ae=M);var et=P0(N,ae),Q=P0(N,Se);if(et&&Q&&(ft.rangeCount!==1||ft.anchorNode!==et.node||ft.anchorOffset!==et.offset||ft.focusNode!==Q.node||ft.focusOffset!==Q.offset)){var lt=Ct.createRange();lt.setStart(et.node,et.offset),ft.removeAllRanges(),ae>Se?(ft.addRange(lt),ft.extend(Q.node,Q.offset)):(lt.setEnd(Q.node,Q.offset),ft.addRange(lt))}}}}for(Ct=[],ft=N;ft=ft.parentNode;)ft.nodeType===1&&Ct.push({element:ft,left:ft.scrollLeft,top:ft.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<Ct.length;N++){var wt=Ct[N];wt.element.scrollLeft=wt.left,wt.element.scrollTop=wt.top}}Zr=!!wd,Cd=wd=null}finally{He=h,vt.p=u,bt.T=o}}e.current=n,on=2}}function pd(){if(on===2){on=0;var e=Hi,n=ks,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=bt.T,bt.T=null;var o=vt.p;vt.p=2;var u=He;He|=4;try{Ov(e,n.alternate,n)}finally{He=u,vt.p=o,bt.T=a}}on=3}}function md(){if(on===4||on===3){on=0;var e=zr;zr=null,_e();var n=Hi,a=ks,o=aa,u=Zv,h=(o&335544064)===o?10262:10256;if((a.subtreeFlags&h)!==0||(a.flags&h)!==0?on=5:(on=0,ks=Hi=null,o_(n,n.pendingLanes)),h=n.pendingLanes,h===0&&(is=null),rt(o),a=a.stateNode,rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Re,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=bt.T,h=vt.p,vt.p=2,bt.T=null;try{for(var M=n.onRecoverableError,N=0;N<u.length;N++){var q=u[N];M(q.value,{componentStack:q.stack})}}finally{bt.T=a,vt.p=h}}if(u=Ir,M=Br,Br=null,u!==null&&(Ir=null,M===null&&(M=[]),e!==null))for(q=0;q<u.length;q++)a=(0,u[q])(M),a!==void 0&&e.finished.finally(a);(aa&3)!==0&&ru(),sa(n),h=n.pendingLanes,(o&261930)!==0&&(h&42)!==0?n===nu?ol++:(ol=0,nu=n):(ol=0,nu=null),ll(0)}}function o_(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Vo(n)))}function ru(){return zr!==null&&(zr.skipTransition(),zr=null),dd(),pd(),md(),gd()}function gd(){if(on!==5)return!1;var e=Hi,n=cd;cd=0;var a=rt(aa),o=bt.T,u=vt.p;try{vt.p=32>a?32:a,bt.T=null,a=ud,ud=null;var h=Hi,M=aa;if(on=0,ks=Hi=null,aa=0,(He&6)!==0)throw Error(s(331));var N=He;if(He|=4,Yv(h.current),kv(h,h.current,M,a),He=N,ll(0,!1),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Re,h)}catch{}return!0}finally{vt.p=u,bt.T=o,o_(e,n)}}function l_(e,n,a){n=bi(a,n),n=Lh(e.stateNode,n,2),e=Za(e,n,2),e!==null&&(Ts(e,2),sa(e))}function qe(e,n,a){if(e.tag===3)l_(e,e,a);else for(;n!==null;){if(n.tag===3){l_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(is===null||!is.has(o))){e=bi(a,e),a=av(2),o=Za(n,a,2),o!==null&&(sv(a,o,n,e),Ts(o,2),sa(o));break}}n=n.return}}function vd(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new oM;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(od=!0,u.add(a),e=mM.bind(null,e,n,a),n.then(e,e))}function mM(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ke===e&&(De&a)===a&&((fn===4||fn===3&&(De&62914560)===De&&300>K()-$c)&&(He&2)===0?Hr(e,0):Jc|=a,Pr===De&&(Pr=0)),sa(e)}function c_(e,n){n===0&&(n=tc()),e=ws(e,n),e!==null&&(Ts(e,n),sa(e))}function gM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),c_(e,a)}function vM(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,u=e.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),c_(e,a)}function _M(e,n){return de(e,n)}var Vr=null,kr=null,_d=!1,ou=!1,yd=!1,ss=0;function sa(e){e!==kr&&e.next===null&&(kr===null?Vr=kr=e:kr=kr.next=e),ou=!0,_d||(_d=!0,xM())}function ll(e,n){if(!yd&&ou){yd=!0;do for(var a=!1,o=Vr;o!==null;){if(e!==0){var u=o.pendingLanes;if(u===0)var h=0;else{var M=o.suspendedLanes,N=o.pingedLanes;h=(1<<31-Fn(42|e)+1)-1,h&=u&~(M&~N),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,d_(o,h))}else h=De,h=Es(o,o===Ke?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ba(o,h)||(a=!0,d_(o,h));o=o.next}while(a);yd=!1}}function yM(){u_()}function u_(){ou=_d=!1;var e=0;ss!==0&&NM()&&(e=ss);for(var n=K(),a=null,o=Vr;o!==null;){var u=o.next,h=f_(o,n);h===0?(o.next=null,a===null?Vr=u:a.next=u,u===null&&(kr=a)):(a=o,(e!==0||(h&3)!==0)&&(ou=!0)),o=u}on!==0&&on!==5||ll(e),ss!==0&&(ss=0)}function f_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,u=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var M=31-Fn(h),N=1<<M,q=u[M];q===-1?((N&a)===0||(N&o)!==0)&&(u[M]=Ef(N,n)):q<=n&&(e.expiredLanes|=N),h&=~N}if(n=Ke,a=De,a=Es(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ne(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ba(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&ne(o),rt(a)){case 2:case 8:a=Jt;break;case 32:a=Lt;break;case 268435456:a=Ht;break;default:a=Lt}return o=h_.bind(null,e),a=de(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&ne(o),e.callbackPriority=2,e.callbackNode=null,2}function h_(e,n){if(on!==0&&on!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ru()&&e.callbackNode!==a)return null;var o=De;return o=Es(e,e===Ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Kv(e,o,n),f_(e,K()),e.callbackNode!=null&&e.callbackNode===a?h_.bind(null,e):null)}function d_(e,n){if(ru())return null;Kv(e,n,!0)}function xM(){LM(function(){(He&6)!==0?de(Gt,yM):u_()})}function xd(){if(ss===0){var e=Ls;e===0&&(e=Ss,Ss<<=1,(Ss&261888)===0&&(Ss=256)),ss=e}return ss}function p_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ic(e)}function SM(e,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var h=p_((u[ie]||null).action),M=o.submitter;M&&(n=(n=M[ie]||null)?p_(n.formAction):M.getAttribute("formAction"),n!==null&&(h=n,M=null));var N=new oc("action","action",null,o,u);e.push({event:N,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ss!==0){var q=new FormData(u,M);Ch(a,{pending:!0,data:q,method:u.method,action:h},null,q)}}else typeof h=="function"&&(N.preventDefault(),q=new FormData(u,M),Ch(a,{pending:!0,data:q,method:u.method,action:h},h,q))},currentTarget:u}]})}}for(var Sd=0;Sd<Yf.length;Sd++){var Md=Yf[Sd],MM=Md.toLowerCase(),EM=Md[0].toUpperCase()+Md.slice(1);zi(MM,"on"+EM)}zi(H0,"onAnimationEnd"),zi(G0,"onAnimationIteration"),zi(V0,"onAnimationStart"),zi("dblclick","onDoubleClick"),zi("focusin","onFocus"),zi("focusout","onBlur"),zi(US,"onTransitionRun"),zi(LS,"onTransitionStart"),zi(OS,"onTransitionCancel"),zi(k0,"onTransitionEnd"),cn("onMouseEnter",["mouseout","mouseover"]),cn("onMouseLeave",["mouseout","mouseover"]),cn("onPointerEnter",["pointerout","pointerover"]),cn("onPointerLeave",["pointerout","pointerover"]),mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),mn("onBeforeInput",["compositionend","keypress","textInput","paste"]),mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),TM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cl));function m_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],u=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var M=o.length-1;0<=M;M--){var N=o[M],q=N.instance,nt=N.currentTarget;if(N=N.listener,q!==h&&u.isPropagationStopped())break t;h=N,u.currentTarget=nt;try{h(u)}catch(pt){uc(pt)}u.currentTarget=null,h=q}else for(M=0;M<o.length;M++){if(N=o[M],q=N.instance,nt=N.currentTarget,N=N.listener,q!==h&&u.isPropagationStopped())break t;h=N,u.currentTarget=nt;try{h(u)}catch(pt){uc(pt)}u.currentTarget=null,h=q}}}}function Ce(e,n){var a=n[ue];a===void 0&&(a=n[ue]=new Set);var o=e+"__bubble";a.has(o)||(g_(n,e,2,!1),a.add(o))}function Ed(e,n,a){var o=0;n&&(o|=4),g_(a,e,o,n)}var lu="_reactListening"+Math.random().toString(36).slice(2);function Td(e){if(!e[lu]){e[lu]=!0,Je.forEach(function(a){a!=="selectionchange"&&(TM.has(a)||Ed(a,!1,e),Ed(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[lu]||(n[lu]=!0,Ed("selectionchange",!1,n))}}function g_(e,n,a,o){switch(sy(n)){case 2:var u=gE;break;case 8:u=vE;break;default:u=Xd}a=u.bind(null,n,a,e),u=void 0,!Uf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?e.addEventListener(n,a,{capture:!0,passive:u}):e.addEventListener(n,a,!0):u!==void 0?e.addEventListener(n,a,{passive:u}):e.addEventListener(n,a,!1)}function bd(e,n,a,o,u){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var M=o.tag;if(M===3||M===4){var N=o.stateNode.containerInfo;if(N===u)break;if(M===4)for(M=o.return;M!==null;){var q=M.tag;if((q===3||q===4)&&M.stateNode.containerInfo===u)return;M=M.return}for(;N!==null;){if(M=Fe(N),M===null)return;if(q=M.tag,q===5||q===6||q===26||q===27){o=h=M;continue t}N=N.parentNode}}o=o.return}g0(function(){var nt=h,pt=Df(a),Ct=[];t:{var tt=X0.get(e);if(tt!==void 0){var ft=oc,qt=e;switch(e){case"keypress":if(sc(a)===0)break t;case"keydown":case"keyup":ft=lS;break;case"focusin":qt="focus",ft=zf;break;case"focusout":qt="blur",ft=zf;break;case"beforeblur":case"afterblur":ft=zf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ft=y0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ft=Q1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ft=dS;break;case H0:case G0:case V0:ft=$1;break;case k0:ft=mS;break;case"scroll":case"scrollend":ft=j1;break;case"wheel":ft=vS;break;case"copy":case"cut":case"paste":ft=eS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ft=S0;break;case"submit":ft=fS;break;case"toggle":case"beforetoggle":ft=yS}var ae=(n&4)!==0,Se=!ae&&(e==="scroll"||e==="scrollend"),et=ae?tt!==null?tt+"Capture":null:tt;ae=[];for(var Q=nt,lt;Q!==null;){var wt=Q;if(lt=wt.stateNode,wt=wt.tag,wt!==5&&wt!==26&&wt!==27||lt===null||et===null||(wt=No(Q,et),wt!=null&&ae.push(ul(Q,wt,lt))),Se)break;Q=Q.return}0<ae.length&&(tt=new ft(tt,qt,null,a,pt),Ct.push({event:tt,listeners:ae}))}}if((n&7)===0){t:{if(ft=e==="mouseover"||e==="pointerover",tt=e==="mouseout"||e==="pointerout",ft&&a!==Rf&&(qt=a.relatedTarget||a.fromElement)&&(Fe(qt)||qt[me]))break t;(tt||ft)&&(qt=pt.window===pt?pt:(ft=pt.ownerDocument)?ft.defaultView||ft.parentWindow:window,tt?(ft=a.relatedTarget||a.toElement,tt=nt,ft=ft?Fe(ft):null,ft!==null&&(Se=c(ft),ae=ft.tag,ft!==Se||ae!==5&&ae!==27&&ae!==6)&&(ft=null)):(tt=null,ft=nt),tt!==ft&&(ae=y0,wt="onMouseLeave",et="onMouseEnter",Q="mouse",(e==="pointerout"||e==="pointerover")&&(ae=S0,wt="onPointerLeave",et="onPointerEnter",Q="pointer"),Se=tt==null?qt:Tn(tt),lt=ft==null?qt:Tn(ft),qt=new ae(wt,Q+"leave",tt,a,pt),qt.target=Se,qt.relatedTarget=lt,wt=null,Fe(pt)===nt&&(ae=new ae(et,Q+"enter",ft,a,pt),ae.target=lt,ae.relatedTarget=Se,wt=ae),Se=wt,ae=tt&&ft?H(tt,ft,bM):null,tt!==null&&v_(Ct,qt,tt,ae,!1),ft!==null&&Se!==null&&v_(Ct,Se,ft,ae,!0)))}t:{if(tt=nt?Tn(nt):window,ft=tt.nodeName&&tt.nodeName.toLowerCase(),ft==="select"||ft==="input"&&tt.type==="file")var $t=R0;else if(w0(tt))if(D0)$t=RS;else{$t=wS;var Ne=AS}else ft=tt.nodeName,!ft||ft.toLowerCase()!=="input"||tt.type!=="checkbox"&&tt.type!=="radio"?nt&&Cf(nt.elementType)&&($t=R0):$t=CS;if($t&&($t=$t(e,nt))){C0(Ct,$t,a,pt);break t}Ne&&Ne(e,tt,nt)}switch(Ne=nt?Tn(nt):window,e){case"focusin":(w0(Ne)||Ne.contentEditable==="true")&&(vr=Ne,kf=nt,Fo=null);break;case"focusout":Fo=kf=vr=null;break;case"mousedown":Xf=!0;break;case"contextmenu":case"mouseup":case"dragend":Xf=!1,B0(Ct,a,pt);break;case"selectionchange":if(NS)break;case"keydown":case"keyup":B0(Ct,a,pt)}var ce;if(Bf)t:{switch(e){case"compositionstart":var ge="onCompositionStart";break t;case"compositionend":ge="onCompositionEnd";break t;case"compositionupdate":ge="onCompositionUpdate";break t}ge=void 0}else gr?b0(e,a)&&(ge="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(ge="onCompositionStart");ge&&(M0&&a.locale!=="ko"&&(gr||ge!=="onCompositionStart"?ge==="onCompositionEnd"&&gr&&(ce=v0()):(Ha=pt,Lf="value"in Ha?Ha.value:Ha.textContent,gr=!0)),Ne=cu(nt,ge),0<Ne.length&&(ge=new x0(ge,e,null,a,pt),Ct.push({event:ge,listeners:Ne}),ce?ge.data=ce:(ce=A0(a),ce!==null&&(ge.data=ce)))),(ce=SS?MS(e,a):ES(e,a))&&(ge=cu(nt,"onBeforeInput"),0<ge.length&&(Ne=new x0("onBeforeInput","beforeinput",null,a,pt),Ct.push({event:Ne,listeners:ge}),Ne.data=ce)),SM(Ct,e,nt,a,pt)}m_(Ct,n)})}function ul(e,n,a){return{instance:e,listener:n,currentTarget:a}}function cu(e,n){for(var a=n+"Capture",o=[];e!==null;){var u=e,h=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||h===null||(u=No(e,a),u!=null&&o.unshift(ul(e,u,h)),u=No(e,n),u!=null&&o.push(ul(e,u,h))),e.tag===3)return o;e=e.return}return[]}function bM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function v_(e,n,a,o,u){for(var h=n._reactName,M=[];a!==null&&a!==o;){var N=a,q=N.alternate,nt=N.stateNode;if(N=N.tag,q!==null&&q===o)break;N!==5&&N!==26&&N!==27||nt===null||(q=nt,u?(nt=No(a,h),nt!=null&&M.unshift(ul(a,nt,q))):u||(nt=No(a,h),nt!=null&&M.push(ul(a,nt,q)))),a=a.return}M.length!==0&&e.push({event:n,listeners:M})}var AM=/\r\n?/g,wM=/\u0000|\uFFFD/g;function __(e){return(typeof e=="string"?e:""+e).replace(AM,`
`).replace(wM,"")}function y_(e,n){return n=__(n),__(e)===n}function Ye(e,n,a,o,u,h){switch(a){case"children":if(typeof o=="string")n==="body"||n==="textarea"&&o===""||dr(e,o);else if(typeof o=="number"||typeof o=="bigint")n!=="body"&&dr(e,""+o);else return;break;case"className":nc(e,"class",o);break;case"tabIndex":nc(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":nc(e,a,o);break;case"style":p0(e,o,h);return;case"data":if(n!=="object"){nc(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ic(o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ye(e,n,"name",u.name,u,null),Ye(e,n,"formEncType",u.formEncType,u,null),Ye(e,n,"formMethod",u.formMethod,u,null),Ye(e,n,"formTarget",u.formTarget,u,null)):(Ye(e,n,"encType",u.encType,u,null),Ye(e,n,"method",u.method,u,null),Ye(e,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ic(o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Zi);return;case"onScroll":o!=null&&Ce("scroll",e);return;case"onScrollEnd":o!=null&&Ce("scrollend",e);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));(h!=null?h.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ic(o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),ec(e,"popover",o);break;case"xlinkActuate":pa(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":pa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":pa(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":pa(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":pa(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":pa(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":pa(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":pa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":pa(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":ec(e,"is",o);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=Y1.get(a)||a,ec(e,a,o);else return}Ie=!0}function Ad(e,n,a,o,u,h){switch(a){case"style":p0(e,o,h);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));(h!=null?h.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof o=="string")dr(e,o);else if(typeof o=="number"||typeof o=="bigint")dr(e,""+o);else return;break;case"onScroll":o!=null&&Ce("scroll",e);return;case"onScrollEnd":o!=null&&Ce("scrollend",e);return;case"onClick":o!=null&&(e.onclick=Zi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Wn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),h=a.slice(2,u?a.length-7:void 0),n=e[ie]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(h,n,u),typeof o=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(h,o,u);break t}Ie=!0,a in e?e[a]=o:o===!0?e.setAttribute(a,""):ec(e,a,o)}return}Ie=!0}function zn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var o=!1,u=!1,h;for(h in a)if(a.hasOwnProperty(h)){var M=a[h];if(M!=null)switch(h){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ye(e,n,h,M,a,null)}}u&&Ye(e,n,"srcSet",a.srcSet,a,null),o&&Ye(e,n,"src",a.src,a,null);return;case"input":Ce("invalid",e);var N=h=M=u=null,q=null,nt=null;for(o in a)if(a.hasOwnProperty(o)){var pt=a[o];if(pt!=null)switch(o){case"name":u=pt;break;case"type":M=pt;break;case"checked":q=pt;break;case"defaultChecked":nt=pt;break;case"value":h=pt;break;case"defaultValue":N=pt;break;case"children":case"dangerouslySetInnerHTML":if(pt!=null)throw Error(s(137,n));break;default:Ye(e,n,o,pt,a,null)}}u0(e,h,N,q,nt,M,u,!1);return;case"select":Ce("invalid",e),o=M=h=null;for(u in a)if(a.hasOwnProperty(u)&&(N=a[u],N!=null))switch(u){case"value":h=N;break;case"defaultValue":M=N;break;case"multiple":o=N;default:Ye(e,n,u,N,a,null)}n=h,a=M,e.multiple=!!o,n!=null?hr(e,!!o,n,!1):a!=null&&hr(e,!!o,a,!0);return;case"textarea":Ce("invalid",e),h=u=o=null;for(M in a)if(a.hasOwnProperty(M)&&(N=a[M],N!=null))switch(M){case"value":o=N;break;case"defaultValue":u=N;break;case"children":h=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(s(91));break;default:Ye(e,n,M,N,a,null)}h0(e,o,u,h);return;case"option":for(q in a)if(a.hasOwnProperty(q)&&(o=a[q],o!=null))switch(q){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ye(e,n,q,o,a,null)}return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(o=0;o<cl.length;o++)Ce(cl[o],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in a)if(a.hasOwnProperty(nt)&&(o=a[nt],o!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ye(e,n,nt,o,a,null)}return;default:if(Cf(n)){for(pt in a)a.hasOwnProperty(pt)&&(o=a[pt],o!==void 0&&Ad(e,n,pt,o,a,void 0));return}}for(N in a)a.hasOwnProperty(N)&&(o=a[N],o!=null&&Ye(e,n,N,o,a,null))}var CM={};function RM(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,h=null,M=null,N=null,q=null,nt=null,pt=null;for(ft in a){var Ct=a[ft];if(a.hasOwnProperty(ft)&&Ct!=null)switch(ft){case"checked":break;case"value":break;case"defaultValue":q=Ct;default:o.hasOwnProperty(ft)||Ye(e,n,ft,null,o,Ct)}}for(var tt in o){var ft=o[tt];if(Ct=a[tt],o.hasOwnProperty(tt)&&(ft!=null||Ct!=null))switch(tt){case"type":ft!==Ct&&(Ie=!0),h=ft;break;case"name":ft!==Ct&&(Ie=!0),u=ft;break;case"checked":ft!==Ct&&(Ie=!0),nt=ft;break;case"defaultChecked":ft!==Ct&&(Ie=!0),pt=ft;break;case"value":ft!==Ct&&(Ie=!0),M=ft;break;case"defaultValue":ft!==Ct&&(Ie=!0),N=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(s(137,n));break;default:ft!==Ct&&Ye(e,n,tt,ft,o,Ct)}}Af(e,M,N,q,nt,pt,h,u);return;case"select":ft=M=N=tt=null;for(h in a)if(q=a[h],a.hasOwnProperty(h)&&q!=null)switch(h){case"value":break;case"multiple":ft=q;default:o.hasOwnProperty(h)||Ye(e,n,h,null,o,q)}for(u in o)if(h=o[u],q=a[u],o.hasOwnProperty(u)&&(h!=null||q!=null))switch(u){case"value":h!==q&&(Ie=!0),tt=h;break;case"defaultValue":h!==q&&(Ie=!0),N=h;break;case"multiple":h!==q&&(Ie=!0),M=h;default:h!==q&&Ye(e,n,u,h,o,q)}n=N,a=M,o=ft,tt!=null?hr(e,!!a,tt,!1):!!o!=!!a&&(n!=null?hr(e,!!a,n,!0):hr(e,!!a,a?[]:"",!1));return;case"textarea":ft=tt=null;for(N in a)if(u=a[N],a.hasOwnProperty(N)&&u!=null&&!o.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:Ye(e,n,N,null,o,u)}for(M in o)if(u=o[M],h=a[M],o.hasOwnProperty(M)&&(u!=null||h!=null))switch(M){case"value":u!==h&&(Ie=!0),tt=u;break;case"defaultValue":u!==h&&(Ie=!0),ft=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==h&&Ye(e,n,M,u,o,h)}f0(e,tt,ft);return;case"option":for(var qt in a)if(tt=a[qt],a.hasOwnProperty(qt)&&tt!=null&&!o.hasOwnProperty(qt))switch(qt){case"selected":e.selected=!1;break;default:Ye(e,n,qt,null,o,tt)}for(q in o)if(tt=o[q],ft=a[q],o.hasOwnProperty(q)&&tt!==ft&&(tt!=null||ft!=null))switch(q){case"selected":tt!==ft&&(Ie=!0),e.selected=tt&&typeof tt!="function"&&typeof tt!="symbol";break;default:Ye(e,n,q,tt,o,ft)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)tt=a[ae],a.hasOwnProperty(ae)&&tt!=null&&!o.hasOwnProperty(ae)&&Ye(e,n,ae,null,o,tt);for(nt in o)if(tt=o[nt],ft=a[nt],o.hasOwnProperty(nt)&&tt!==ft&&(tt!=null||ft!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(tt!=null)throw Error(s(137,n));break;default:Ye(e,n,nt,tt,o,ft)}return;default:if(Cf(n)){for(var Se in a)tt=a[Se],a.hasOwnProperty(Se)&&tt!==void 0&&!o.hasOwnProperty(Se)&&Ad(e,n,Se,void 0,o,tt);for(pt in o)tt=o[pt],ft=a[pt],!o.hasOwnProperty(pt)||tt===ft||tt===void 0&&ft===void 0||Ad(e,n,pt,tt,o,ft);return}}for(var et in a)tt=a[et],a.hasOwnProperty(et)&&tt!=null&&!o.hasOwnProperty(et)&&Ye(e,n,et,null,o,tt);for(Ct in o)tt=o[Ct],ft=a[Ct],!o.hasOwnProperty(Ct)||tt===ft||tt==null&&ft==null||Ye(e,n,Ct,tt,o,ft)}function x_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function DM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],h=u.transferSize,M=u.initiatorType,N=u.duration;if(h&&N&&x_(M)){for(M=0,N=u.responseEnd,o+=1;o<a.length;o++){var q=a[o],nt=q.startTime;if(nt>N)break;var pt=q.transferSize,Ct=q.initiatorType;pt&&x_(Ct)&&(q=q.responseEnd,M+=pt*(q<N?1:(N-nt)/(q-nt)))}if(--o,n+=8*(h+M)/(u.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var wd=null,Cd=null;function fl(e){return e.nodeType===9?e:e.ownerDocument}function S_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function M_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function E_(e,n,a,o){return a=fl(a).createElement(e),a[kt]=o,a[ie]=n,zn(a,e,n),ze(a),a}function Rd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Dd=null;function NM(){var e=window.event;return e&&e.type==="popstate"?e===Dd?!1:(Dd=e,!0):(Dd=null,!1)}var Nd=typeof setTimeout=="function"?setTimeout:void 0,UM=typeof clearTimeout=="function"?clearTimeout:void 0,T_=typeof Promise=="function"?Promise:void 0,b_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Nd,LM=typeof queueMicrotask=="function"?queueMicrotask:typeof T_<"u"?function(e){return T_.resolve(null).then(e).catch(OM)}:Nd;function OM(e){setTimeout(function(){throw e})}function rs(e){return e==="head"}function A_(e,n){var a=n,o=0;do{var u=a.nextSibling;if(e.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(u),Qr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Fd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Fd(a);for(var h=a.firstChild;h;){var M=h.nextSibling,N=h.nodeName;h[Be]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=M}}else a==="body"&&Fd(e.ownerDocument.body);a=u}while(a);Qr(n)}function w_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function C_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var o=1;else for(var u=o=0;u<n.length;u++){var h=n[u];0<h.width&&0<h.height&&o++}o===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function R_(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function PM(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function Ud(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return PM(n,a,e)}function zM(e){return e.documentElement.clientHeight}function IM(e){this.addEventListener("load",e),this.addEventListener("error",e)}function BM(e,n,a,o,u,h,M,N,q){var nt=n.nodeType===9?n:n.ownerDocument;try{var pt=nt.startViewTransition({update:function(){var tt=nt.defaultView,ft=tt.navigation&&tt.navigation.transition,qt=nt.fonts.status;o();var ae=[];if(qt==="loaded"&&(zM(nt),nt.fonts.status==="loading"&&ae.push(nt.fonts.ready)),qt=ae.length,e!==null)for(var Se=e.suspenseyImages,et=0,Q=0;Q<Se.length;Q++){var lt=Se[Q];if(!lt.complete){var wt=lt.getBoundingClientRect();if(0<wt.bottom&&0<wt.right&&wt.top<tt.innerHeight&&wt.left<tt.innerWidth){if(et+=Q_(lt),et>hu){ae.length=qt;break}lt=new Promise(IM.bind(lt)),ae.push(lt)}}}if(0<ae.length)return tt=Promise.race([Promise.all(ae),new Promise(function($t){return setTimeout($t,500)})]).then(u,u),(ft?Promise.allSettled([ft.finished,tt]):tt).then(h,h);if(u(),ft)return ft.finished.then(h,h);h()},types:a});nt.__reactViewTransition=pt;var Ct=[];return pt.ready.then(function(){for(var tt=nt.documentElement.getAnimations({subtree:!0}),ft=0;ft<tt.length;ft++){var qt=tt[ft],ae=qt.effect,Se=ae.pseudoElement;if(Se!=null&&Se.startsWith("::view-transition")){Ct.push(qt),qt=ae.getKeyframes();for(var et=Se=void 0,Q=!0,lt=0;lt<qt.length;lt++){var wt=qt[lt],$t=wt.width;if(Se===void 0)Se=$t;else if(Se!==$t){Q=!1;break}if($t=wt.height,et===void 0)et=$t;else if(et!==$t){Q=!1;break}delete wt.width,delete wt.height,wt.transform==="none"&&delete wt.transform}Q&&Se!==void 0&&et!==void 0&&(ae.setKeyframes(qt),Q=getComputedStyle(ae.target,ae.pseudoElement),Q.width!==Se||Q.height!==et)&&(Q=qt[0],Q.width=Se,Q.height=et,Q=qt[qt.length-1],Q.width=Se,Q.height=et,ae.setKeyframes(qt))}}M()},function(tt){nt.__reactViewTransition===pt&&(nt.__reactViewTransition=null);try{if(typeof tt=="object"&&tt!==null)switch(tt.name){case"InvalidStateError":(tt.message==="View transition was skipped because document visibility state is hidden."||tt.message==="Skipping view transition because document visibility state has become hidden."||tt.message==="Skipping view transition because viewport size changed."||tt.message==="Transition was aborted because of invalid state")&&(tt=null)}tt!==null&&q(tt)}finally{o(),u(),M()}}),pt.finished.finally(function(){for(var tt=0;tt<Ct.length;tt++)Ct[tt].cancel();nt.__reactViewTransition===pt&&(nt.__reactViewTransition=null),N()}),pt}catch{return o(),u(),M(),null}}function Xs(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}Xs.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},Xs.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),o=[],u=0;u<a.length;u++){var h=a[u].effect;h!==null&&h.target===e&&h.pseudoElement===n&&o.push(a[u])}return o},Xs.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function D_(e){return{name:e,group:new Xs("group",e),imagePair:new Xs("image-pair",e),old:new Xs("old",e),new:new Xs("new",e)}}function gi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}gi.prototype.addEventListener=function(e,n,a){var o=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(o=a.signal||null,o!==null&&o.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var h=this._eventListeners;if(U_(h,e,n,a)===-1){var M=this,N=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(N=function(q){M.removeEventListener(e,n,a),typeof n=="function"?n.call(this,q):n.handleEvent(q)}),o!==null&&(u=M.removeEventListener.bind(M,e,n,a),o.addEventListener("abort",u,{once:!0}),u=o.removeEventListener.bind(o,"abort",u)),o=Xr(a),h.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:N,cleanup:u}),g(this._fragmentFiber.child,!1,FM,e,N,o)}this._eventListeners=h}};function FM(e,n,a,o){return S(e).addEventListener(n,a,o),!1}gi.prototype.removeEventListener=function(e,n,a){var o=this._eventListeners;if(o!==null&&(n=U_(o,e,n,a),n!==-1)){var u=o[n];a=u.attachedListener;var h=u.cleanup;u=Xr(u.optionsOrUseCapture),g(this._fragmentFiber.child,!1,HM,e,a,u),o.splice(n,1),h!==null&&h()}};function HM(e,n,a,o){return S(e).removeEventListener(n,a,o),!1}function Xr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function N_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function U_(e,n,a,o){if(e.length===0)return-1;o=N_(o);for(var u=0;u<e.length;u++){var h=e[u];if(h.type===n&&h.listener===a&&N_(h.optionsOrUseCapture)===o)return u}return-1}gi.prototype.dispatchEvent=function(e){var n=y(this._fragmentFiber);if(n===null)return!0;n=S(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var o=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var h=a[u];o.addEventListener(h.type,h.attachedListener,Xr(h.optionsOrUseCapture))}if(n.appendChild(o),e=o.dispatchEvent(e),a)for(u=0;u<a.length;u++)h=a[u],o.removeEventListener(h.type,h.attachedListener,Xr(h.optionsOrUseCapture));return n.removeChild(o),e}return n.dispatchEvent(e)},gi.prototype.focus=function(e){g(this._fragmentFiber.child,!0,L_,e,void 0,void 0)};function L_(e,n){return e.tag===6?!1:(e=S(e),JM(e,n))}gi.prototype.focusLast=function(e){var n=[];g(this._fragmentFiber.child,!0,Ld,n,void 0,void 0);for(var a=n.length-1;0<=a&&!L_(n[a],e);a--);};function Ld(e,n){return n.push(e),!1}gi.prototype.blur=function(){var e=y(this._fragmentFiber);e!==null&&(e=S(e),e=fl(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,GM,e,void 0,void 0))};function GM(e,n){return e.tag===6?!1:(e=S(e),e===n||e.contains(n)?(n.blur(),!0):!1)}gi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,VM,e,void 0,void 0)};function VM(e,n){return e.tag===6||(e=S(e),n.observe(e)),!1}gi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),g(this._fragmentFiber.child,!1,kM,e,void 0,void 0);for(var a=n=0;a<Gi.length;a++){var o=Gi[a];o.fragmentInstance===this&&o.observer===e?e.unobserve(o.instance):Gi[n++]=o}Gi.length=n}};function kM(e,n){return e.tag===6||(e=S(e),n.unobserve(e)),!1}var Gi=[],Od=!1;function XM(e,n,a){Gi.push({fragmentInstance:e,observer:n,instance:a}),Od||(Od=!0,$M(function(){Od=!1;var o=Gi;Gi=[];for(var u=0;u<o.length;u++){var h=o[u];h.observer.unobserve(h.instance)}}))}gi.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,qM,e,void 0,void 0),e};function qM(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=S(e),n.push.apply(n,e.getClientRects());return!1}gi.prototype.getRootNode=function(e){var n=y(this._fragmentFiber);return n===null?this:S(n).getRootNode(e)},gi.prototype.compareDocumentPosition=function(e){var n=y(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,Ld,a,void 0,void 0);var o=S(n);if(a.length===0){if(a=o,x(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=o=a.compareDocumentPosition(e);return a===e?u=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(e=S(a).compareDocumentPosition(e),u=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=S(a[0]),u=S(a[a.length-1]);var h=x(this._fragmentFiber)?n.parentElement:o;if(h==null)return Node.DOCUMENT_POSITION_DISCONNECTED;o=h.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,h=h.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var M=n.compareDocumentPosition(e),N=u.compareDocumentPosition(e),q=M&Node.DOCUMENT_POSITION_CONTAINED_BY||N&Node.DOCUMENT_POSITION_CONTAINED_BY;return N=o&&h&&M&Node.DOCUMENT_POSITION_FOLLOWING&&N&Node.DOCUMENT_POSITION_PRECEDING,n=o&&n===e||h&&u===e||q||N?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&n===e||!h&&u===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:M,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||YM(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function YM(e,n,a,o,u){var h=Fe(u);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!h)t:{for(;h!==null;){if(h.tag===7&&(h===n||h.alternate===n)){a=!0;break t}h=h.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(h===null)return h=u.ownerDocument,u===h||u===h.documentElement||u===h.body;t:{for(h=n,n=y(n);h!==null;){if(!(h.tag!==5&&h.tag!==3&&h.tag!==27||h!==n&&h.alternate!==n)){h=!0;break t}h=h.return}h=!1}return h}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!h)&&!(n=h===a)&&(n=H(a,h,V),n===null?n=!1:(g(n,!0,D,h,a),h=_,_=null,n=h!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!h)&&!(n=h===o)&&(n=H(o,h,V),n===null?n=!1:(g(n,!0,b,h,o),h=_,w=_=null,n=h!==null)),n):!1}function O_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}gi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];g(this._fragmentFiber.child,!1,Ld,n,void 0,void 0);var a=e!==!1;if(n.length===0){var o=E(this._fragmentFiber);if(o=a?o[1]||o[0]||y(this._fragmentFiber):o[0]||o[1],o===null)return;if(o.tag===6){e=S(o),O_(e,a);return}if(o=S(o),o.nodeType!==9){if(o.nodeType===11){a="host"in o?o.host:null,a!==null&&a.scrollIntoView(e);return}o.scrollIntoView(e)}}for(o=a?n.length-1:0;o!==(a?-1:n.length);){var u=n[o];u.tag===6?(u=S(u),O_(u,a)):S(u).scrollIntoView(e),o+=a?-1:1}};function WM(e,n){return e=S(e),P_(e,n),!1}function P_(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function z_(e,n){var a=n._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];e.addEventListener(u.type,u.attachedListener,Xr(u.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(h){for(var M=0,N=0;N<Gi.length;N++){var q=Gi[N];(q.fragmentInstance!==n||q.observer!==h||q.instance!==e)&&(Gi[M++]=q)}Gi.length=M,h.observe(e)}),P_(e,n))}function jM(e,n){var a=n._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];e.removeEventListener(u.type,u.attachedListener,Xr(u.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(h){typeof h.rootMargin=="string"?XM(n,h,e):h.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function Pd(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Pd(a),fe(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function ZM(e,n,a,o){for(;e.nodeType===1;){var u=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Be])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==u.rel||e.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||e.getAttribute("title")!==(u.title==null?null:u.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(u.src==null?null:u.src)||e.getAttribute("type")!==(u.type==null?null:u.type)||e.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=u.name==null?null:""+u.name;if(u.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Di(e.nextSibling),e===null)break}return null}function QM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Di(e.nextSibling),e===null))return null;return e}function I_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Di(e.nextSibling),e===null))return null;return e}function zd(e){return e.data==="$?"||e.data==="$~"}function Id(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function KM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Di(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Bd=null;function B_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Di(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function F_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function JM(e,n){function a(){o=!0}if(e.ownerDocument.activeElement===e)return!0;var o=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return o}function $M(e){b_(function(){b_(function(n){return e(n)})})}function H_(e,n,a){switch(n=fl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function G_(e,n,a){for(var o in a){var u=a[o];a.hasOwnProperty(o)&&u!=null&&Ye(e,n,o,null,CM,u)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===Zi&&(e.onclick=null),fe(e)}function Fd(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);fe(e)}var Ni=new Map,V_=new Set;function hl(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var wa=vt.d;vt.d={f:tE,r:eE,D:nE,C:iE,L:aE,m:sE,X:oE,S:rE,M:lE};function tE(){var e=wa.f(),n=iu();return e||n}function eE(e){var n=Ee(e);n!==null&&n.tag===5&&n.type==="form"?Xg(n):wa.r(e)}var qr=typeof document>"u"?null:document;function k_(e,n,a){var o=qr;if(o&&typeof n=="string"&&n){var u=Ei(n);u='link[rel="'+e+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),V_.has(u)||(V_.add(u),e={rel:e,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),zn(n,"link",e),ze(n),o.head.appendChild(n)))}}function nE(e){wa.D(e),k_("dns-prefetch",e,null)}function iE(e,n){wa.C(e,n),k_("preconnect",e,n)}function aE(e,n,a){wa.L(e,n,a);var o=qr;if(o&&e&&n){var u='link[rel="preload"][as="'+Ei(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+Ei(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+Ei(a.imageSizes)+'"]')):u+='[href="'+Ei(e)+'"]';var h=u;switch(n){case"style":h=Yr(e);break;case"script":h=Wr(e)}if(!(Ni.has(h)||(e=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ni.set(h,e),o.querySelector(u)!==null||n==="style"&&o.querySelector(dl(h))||n==="script"&&o.querySelector(pl(h))))){var M=o.createElement("link");zn(M,"link",e),n==="style"&&(M[Pe]=!0,M.onload=M.onerror=function(){Fa(M)}),ze(M),o.head.appendChild(M)}}}function sE(e,n){wa.m(e,n);var a=qr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+Ei(o)+'"][href="'+Ei(e)+'"]',h=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Wr(e)}if(!Ni.has(h)&&(e=P({rel:"modulepreload",href:e},n),Ni.set(h,e),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(pl(h)))return}o=a.createElement("link"),zn(o,"link",e),ze(o),a.head.appendChild(o)}}}function rE(e,n,a){wa.S(e,n,a);var o=qr;if(o&&e){var u=li(o).hoistableStyles,h=Yr(e);n=n||"default";var M=u.get(h);if(!M){var N={loading:0,preload:null};if(M=o.querySelector(dl(h)))N.loading=5;else{e=P({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ni.get(h))&&Hd(e,a);var q=M=o.createElement("link");ze(q),zn(q,"link",e),q._p=new Promise(function(nt,pt){q.onload=nt,q.onerror=pt}),q.addEventListener("load",function(){N.loading|=1}),q.addEventListener("error",function(){N.loading|=2}),N.loading|=4,uu(M,n,o)}M={type:"stylesheet",instance:M,count:1,state:N},u.set(h,M)}}}function oE(e,n){wa.X(e,n);var a=qr;if(a&&e){var o=li(a).hoistableScripts,u=Wr(e),h=o.get(u);h||(h=a.querySelector(pl(u)),h||(e=P({src:e,async:!0},n),(n=Ni.get(u))&&Gd(e,n),h=a.createElement("script"),ze(h),zn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function lE(e,n){wa.M(e,n);var a=qr;if(a&&e){var o=li(a).hoistableScripts,u=Wr(e),h=o.get(u);h||(h=a.querySelector(pl(u)),h||(e=P({src:e,async:!0,type:"module"},n),(n=Ni.get(u))&&Gd(e,n),h=a.createElement("script"),ze(h),zn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(u,h))}}function X_(e,n,a,o){var u=(u=re.current)?hl(u):null;if(!u)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Yr(a.href),n=li(u).hoistableStyles,o=n.get(a),o||(o={type:"style",instance:null,count:0,state:null},n.set(a,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Yr(a.href);var h=li(u).hoistableStyles,M=h.get(e);if(M||(u=u.ownerDocument||u,M={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,M),(h=u.querySelector(dl(e)))?h._p||(M.instance=h,M.state.loading=5):(h=Ni.get(e),h||(h={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ni.set(e,h)),cE(u,e,h,M.state))),n&&o===null)throw Error(s(528,""));return M}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Wr(a),n=li(u).hoistableScripts,o=n.get(a),o||(o={type:"script",instance:null,count:0,state:null},n.set(a,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Yr(e){return'href="'+Ei(e)+'"'}function dl(e){return'link[rel="stylesheet"]['+e+"]"}function q_(e){return P({},e,{"data-precedence":e.precedence,precedence:null})}function cE(e,n,a,o){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Pe]!==!0){o.loading=1;return}}else n=e.createElement("link"),n[Pe]=!0,n.onload=n.onerror=Fa.bind(null,n),zn(n,"link",a),ze(n),e.head.appendChild(n);o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2})}function Wr(e){return'[src="'+Ei(e)+'"]'}function pl(e){return"script[async]"+e}function Y_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Ei(a.href)+'"]');if(o)return n.instance=o,ze(o),o;var u=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),ze(o),zn(o,"style",u),uu(o,a.precedence,e),n.instance=o;case"stylesheet":u=Yr(a.href);var h=e.querySelector(dl(u));if(h)return n.state.loading|=4,n.instance=h,ze(h),h;o=q_(a),(u=Ni.get(u))&&Hd(o,u),h=(e.ownerDocument||e).createElement("link"),ze(h);var M=h;return M._p=new Promise(function(N,q){M.onload=N,M.onerror=q}),zn(h,"link",o),n.state.loading|=4,uu(h,a.precedence,e),n.instance=h;case"script":return h=Wr(a.src),(u=e.querySelector(pl(h)))?(n.instance=u,ze(u),u):(o=a,(u=Ni.get(h))&&(o=P({},a),Gd(o,u)),e=e.ownerDocument||e,u=e.createElement("script"),ze(u),zn(u,"link",o),e.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,uu(o,a.precedence,e));return n.instance}function uu(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,h=u,M=0;M<o.length;M++){var N=o[M];if(N.dataset.precedence===n)h=N;else if(h!==u)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Hd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Gd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var fu=null;function W_(e,n,a){if(fu===null){var o=new Map,u=fu=new Map;u.set(a,o)}else u=fu,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),u=0;u<a.length;u++){var h=a[u];if(!(h[Be]||h[kt]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var M=h.getAttribute(n)||"";M=e+M;var N=o.get(M);N?N.push(h):o.set(M,[h])}}return o}function Vd(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function uE(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function j_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function Z_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Q_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function K_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=Q_(n),e.suspenseyImages.push(n)),e=dE.bind(e),n.decode().then(e,e))}function fE(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Yr(o.href),h=n.querySelector(dl(u));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ml.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,ze(h);return}h=n.ownerDocument||n,o=q_(o),(u=Ni.get(u))&&Hd(o,u),h=h.createElement("link"),ze(h);var M=h;M._p=new Promise(function(N,q){M.onload=N,M.onerror=q}),zn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ml.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var hu=0;function hE(e,n){return e.stylesheets&&e.count===0&&pu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&pu(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&hu===0&&(hu=62500*DM());var u=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&pu(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>hu?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function J_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)pu(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function ml(){this.count--,J_(this)}function dE(){this.imgCount--,J_(this)}var du=null;function pu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,du=new Map,n.forEach(pE,e),du=null,ml.call(e))}function pE(e,n){if(!(n.state.loading&4)){var a=du.get(e);if(a)var o=a.get(null);else{a=new Map,du.set(e,a);for(var u=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<u.length;h++){var M=u[h];(M.nodeName==="LINK"||M.getAttribute("media")!=="not all")&&(a.set(M.dataset.precedence,M),o=M)}o&&a.set(null,o)}u=n.instance,M=u.getAttribute("data-precedence"),h=a.get(M)||o,h===o&&a.set(null,u),a.set(M,u),this.count++,o=ml.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),h?h.parentNode.insertBefore(u,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(u,e.firstChild)),n.state.loading|=4}}var jr={$$typeof:j,Provider:null,Consumer:null,_currentValue:I,_currentValue2:I,_threadCount:0};function mE(e,n,a,o,u,h,M,N,q){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Do(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Do(0),this.hiddenUpdates=Do(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=h,this.onRecoverableError=M,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=q,this.transitionTypes=null,this.incompleteTransitions=new Map}function $_(e,n,a,o,u,h,M,N,q,nt,pt,Ct){return e=new mE(e,n,a,M,q,nt,pt,Ct,N),n=1,h===!0&&(n|=24),h=ti(3,null,null,n),e.current=h,h.stateNode=e,n=ih(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},oh(h),e}function ty(e){return e?(e=xr,e):xr}function ey(e,n,a,o,u,h){u=ty(u),o.context===null?o.context=u:o.pendingContext=u,o=ja(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Za(e,o,n),a!==null&&(ai(a,e,n),Yo(a,e,n))}function ny(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function kd(e,n){ny(e,n),(e=e.alternate)&&ny(e,n)}function iy(e){if(e.tag===13||e.tag===31){var n=ws(e,67108864);n!==null&&ai(n,e,67108864),kd(e,67108864)}}function ay(e){if(e.tag===13||e.tag===31){var n=mi();n=St(n);var a=ws(e,n);a!==null&&ai(a,e,n),kd(e,n)}}var Zr=!0;function gE(e,n,a,o){var u=bt.T;bt.T=null;var h=vt.p;try{vt.p=2,Xd(e,n,a,o)}finally{vt.p=h,bt.T=u}}function vE(e,n,a,o){var u=bt.T;bt.T=null;var h=vt.p;try{vt.p=8,Xd(e,n,a,o)}finally{vt.p=h,bt.T=u}}function Xd(e,n,a,o){if(Zr){var u=qd(o);if(u===null)bd(e,n,o,mu,a),ry(e,o);else if(yE(u,e,n,a,o))o.stopPropagation();else if(ry(e,o),n&4&&-1<_E.indexOf(e)){for(;u!==null;){var h=Ee(u);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var M=Mi(h.pendingLanes);if(M!==0){var N=h;for(N.pendingLanes|=2,N.entangledLanes|=2;M;){var q=1<<31-Fn(M);N.entanglements[1]|=q,M&=~q}sa(h),(He&6)===0&&(tu=K()+500,ll(0))}}break;case 31:case 13:N=ws(h,2),N!==null&&ai(N,h,2),iu(),kd(h,2)}if(h=qd(o),h===null&&bd(e,n,o,mu,a),h===u)break;u=h}u!==null&&o.stopPropagation()}else bd(e,n,o,null,a)}}function qd(e){return e=Df(e),Yd(e)}var mu=null;function Yd(e){if(mu=null,e=Fe(e),e!==null){var n=c(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return mu=e,null}function sy(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ft()){case Gt:return 2;case Jt:return 8;case Lt:case at:return 32;case Ht:return 268435456;default:return 32}default:return 32}}var Wd=!1,os=null,ls=null,cs=null,gl=new Map,vl=new Map,us=[],_E="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ry(e,n){switch(e){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":cs=null;break;case"pointerover":case"pointerout":gl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vl.delete(n.pointerId)}}function _l(e,n,a,o,u,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[u]},n!==null&&(n=Ee(n),n!==null&&iy(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),e)}function yE(e,n,a,o,u){switch(n){case"focusin":return os=_l(os,e,n,a,o,u),!0;case"dragenter":return ls=_l(ls,e,n,a,o,u),!0;case"mouseover":return cs=_l(cs,e,n,a,o,u),!0;case"pointerover":var h=u.pointerId;return gl.set(h,_l(gl.get(h)||null,e,n,a,o,u)),!0;case"gotpointercapture":return h=u.pointerId,vl.set(h,_l(vl.get(h)||null,e,n,a,o,u)),!0}return!1}function oy(e){var n=Fe(e.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Wt(e.priority,function(){ay(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Wt(e.priority,function(){ay(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function gu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=qd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);Rf=o,a.target.dispatchEvent(o),Rf=null}else return n=Ee(a),n!==null&&iy(n),e.blockedOn=a,!1;n.shift()}return!0}function ly(e,n,a){gu(e)&&a.delete(n)}function xE(){Wd=!1,os!==null&&gu(os)&&(os=null),ls!==null&&gu(ls)&&(ls=null),cs!==null&&gu(cs)&&(cs=null),gl.forEach(ly),vl.forEach(ly)}function vu(e,n){e.blockedOn===n&&(e.blockedOn=null,Wd||(Wd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,xE)))}var _u=null;function cy(e){_u!==e&&(_u=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){_u===e&&(_u=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],u=e[n+2];if(typeof o!="function"){if(Yd(o||a)===null)continue;break}var h=Ee(a);h!==null&&(e.splice(n,3),n-=3,Ch(h,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Qr(e){function n(q){return vu(q,e)}os!==null&&vu(os,e),ls!==null&&vu(ls,e),cs!==null&&vu(cs,e),gl.forEach(n),vl.forEach(n);for(var a=0;a<us.length;a++){var o=us[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<us.length&&(a=us[0],a.blockedOn===null);)oy(a),a.blockedOn===null&&us.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],h=a[o+1],M=u[ie]||null;if(typeof h=="function")M||cy(a);else if(M){var N=null;if(h&&h.hasAttribute("formAction")){if(u=h,M=h[ie]||null)N=M.formAction;else if(Yd(u)!==null)continue}else N=M.action;typeof N=="function"?a[o+1]=N:(a.splice(o,3),o-=3),cy(a)}}}function uy(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(M){return u=M})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function jd(e){this._internalRoot=e}yu.prototype.render=jd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=mi();ey(a,o,e,n,null,null)},yu.prototype.unmount=jd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;ey(e.current,2,null,e,null,null),iu(),n[me]=null}};function yu(e){this._internalRoot=e}yu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Bt();e={blockedOn:null,target:e,priority:n};for(var a=0;a<us.length&&n!==0&&n<us[a].priority;a++);us.splice(a,0,e),a===0&&oy(e)}};var fy=t.version;if(fy!=="19.3.1")throw Error(s(527,fy,"19.3.1"));vt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var SE={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:bt,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var xu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!xu.isDisabled&&xu.supportsFiber)try{Re=xu.inject(SE),rn=xu}catch{}}return xl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",u=tv,h=ev,M=nv;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(M=n.onRecoverableError)),n=$_(e,1,!1,null,null,a,o,null,u,h,M,uy),e[me]=n.current,Td(e),new jd(n)},xl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,u="",h=tv,M=ev,N=nv,q=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(M=a.onCaughtError),a.onRecoverableError!==void 0&&(N=a.onRecoverableError),a.formState!==void 0&&(q=a.formState)),n=$_(e,1,!0,n,a??null,o,u,q,h,M,N,uy),n.context=ty(null),a=n.current,o=mi(),o=St(o),u=ja(o),u.callback=null,Za(a,u,o),a=o,n.current.lanes=a,Ts(n,a),sa(n),e[me]=n.current,Td(e),new yu(n)},xl.version="19.3.1",xl}var Sy;function LE(){if(Sy)return Kd.exports;Sy=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Kd.exports=UE(),Kd.exports}var OE=LE();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Gx=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var zE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=he.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:c,iconNode:f,...d},p)=>he.createElement("svg",{ref:p,...zE,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:Gx("lucide",l),...d},[...f.map(([m,v])=>he.createElement(m,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=(r,t)=>{const i=he.forwardRef(({className:s,...l},c)=>he.createElement(IE,{ref:c,iconNode:t,className:Gx(`lucide-${PE(r)}`,s),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BE=oi("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=oi("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FE=oi("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HE=oi("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GE=oi("Orbit",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VE=oi("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kE=oi("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XE=oi("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=oi("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qE=oi("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=oi("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YE=oi("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=oi("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WE=oi("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const zm="180",jE=0,by=1,ZE=2,kx=1,Xx=2,La=3,ys=0,Bn=1,yi=2,ua=0,vo=1,ir=2,Ay=3,wy=4,QE=5,$s=100,KE=101,JE=102,$E=103,tT=104,eT=200,nT=201,iT=202,aT=203,Bp=204,Fp=205,sT=206,rT=207,oT=208,lT=209,cT=210,uT=211,fT=212,hT=213,dT=214,Hp=0,Gp=1,Vp=2,yo=3,kp=4,Xp=5,qp=6,Yp=7,qx=0,pT=1,mT=2,Pa=0,Yx=1,Wx=2,jx=3,Im=4,Zx=5,Qx=6,Kx=7,Jx=300,xo=301,So=302,lf=303,Wp=304,_f=306,jp=1e3,er=1001,Zp=1002,xi=1003,gT=1004,Su=1005,oa=1006,ep=1007,nr=1008,Pi=1009,$x=1010,t1=1011,Fl=1012,Bm=1013,ar=1014,la=1015,Oi=1016,Fm=1017,Hm=1018,Hl=1020,e1=35902,n1=35899,i1=1021,a1=1022,Yi=1023,Gl=1026,Vl=1027,Gm=1028,Vm=1029,s1=1030,km=1031,Xm=1033,tf=33776,ef=33777,nf=33778,af=33779,Qp=35840,Kp=35841,Jp=35842,$p=35843,tm=36196,em=37492,nm=37496,im=37808,am=37809,sm=37810,rm=37811,om=37812,lm=37813,cm=37814,um=37815,fm=37816,hm=37817,dm=37818,pm=37819,mm=37820,gm=37821,vm=36492,_m=36494,ym=36495,xm=36283,Sm=36284,Mm=36285,Em=36286,vT=3200,_T=3201,r1=0,yT=1,_s="",Xn="srgb",sr="srgb-linear",cf="linear",We="srgb",Kr=7680,Cy=519,xT=512,ST=513,MT=514,o1=515,ET=516,TT=517,bT=518,AT=519,Ry=35044,Dy="300 es",ca=2e3,uf=2001;class bo{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let c=0,f=l.length;c<f;c++)l[c].call(this,t);t.target=null}}}const Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ny=1234567;const Ol=Math.PI/180,kl=180/Math.PI;function lr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Vn[r&255]+Vn[r>>8&255]+Vn[r>>16&255]+Vn[r>>24&255]+"-"+Vn[t&255]+Vn[t>>8&255]+"-"+Vn[t>>16&15|64]+Vn[t>>24&255]+"-"+Vn[i&63|128]+Vn[i>>8&255]+"-"+Vn[i>>16&255]+Vn[i>>24&255]+Vn[s&255]+Vn[s>>8&255]+Vn[s>>16&255]+Vn[s>>24&255]).toLowerCase()}function Ae(r,t,i){return Math.max(t,Math.min(i,r))}function qm(r,t){return(r%t+t)%t}function wT(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function CT(r,t,i){return r!==t?(i-r)/(t-r):0}function Pl(r,t,i){return(1-i)*r+i*t}function RT(r,t,i,s){return Pl(r,t,1-Math.exp(-i*s))}function DT(r,t=1){return t-Math.abs(qm(r,t*2)-t)}function NT(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function UT(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function LT(r,t){return r+Math.floor(Math.random()*(t-r+1))}function OT(r,t){return r+Math.random()*(t-r)}function PT(r){return r*(.5-Math.random())}function zT(r){r!==void 0&&(Ny=r);let t=Ny+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function IT(r){return r*Ol}function BT(r){return r*kl}function FT(r){return(r&r-1)===0&&r!==0}function HT(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function GT(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function VT(r,t,i,s,l){const c=Math.cos,f=Math.sin,d=c(i/2),p=f(i/2),m=c((t+s)/2),v=f((t+s)/2),g=c((t-s)/2),y=f((t-s)/2),x=c((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(d*v,p*g,p*y,d*m);break;case"YZY":r.set(p*y,d*v,p*g,d*m);break;case"ZXZ":r.set(p*g,p*y,d*v,d*m);break;case"XZX":r.set(d*v,p*E,p*x,d*m);break;case"YXY":r.set(p*x,d*v,p*E,d*m);break;case"ZYZ":r.set(p*E,p*x,d*v,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function ho(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Jn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Sn={DEG2RAD:Ol,RAD2DEG:kl,generateUUID:lr,clamp:Ae,euclideanModulo:qm,mapLinear:wT,inverseLerp:CT,lerp:Pl,damp:RT,pingpong:DT,smoothstep:NT,smootherstep:UT,randInt:LT,randFloat:OT,randFloatSpread:PT,seededRandom:zT,degToRad:IT,radToDeg:BT,isPowerOfTwo:FT,ceilPowerOfTwo:HT,floorPowerOfTwo:GT,setQuaternionFromProperEuler:VT,normalize:Jn,denormalize:ho};class It{constructor(t=0,i=0){It.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ae(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-t.x,f=this.y-t.y;return this.x=c*s-f*l+t.x,this.y=c*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qn{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,c,f,d){let p=s[l+0],m=s[l+1],v=s[l+2],g=s[l+3];const y=c[f+0],x=c[f+1],E=c[f+2],T=c[f+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=v,t[i+3]=g;return}if(d===1){t[i+0]=y,t[i+1]=x,t[i+2]=E,t[i+3]=T;return}if(g!==T||p!==y||m!==x||v!==E){let S=1-d;const _=p*y+m*x+v*E+g*T,w=_>=0?1:-1,D=1-_*_;if(D>Number.EPSILON){const V=Math.sqrt(D),H=Math.atan2(V,_*w);S=Math.sin(S*H)/V,d=Math.sin(d*H)/V}const b=d*w;if(p=p*S+y*b,m=m*S+x*b,v=v*S+E*b,g=g*S+T*b,S===1-d){const V=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=V,m*=V,v*=V,g*=V}}t[i]=p,t[i+1]=m,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,c,f){const d=s[l],p=s[l+1],m=s[l+2],v=s[l+3],g=c[f],y=c[f+1],x=c[f+2],E=c[f+3];return t[i]=d*E+v*g+p*x-m*y,t[i+1]=p*E+v*y+m*g-d*x,t[i+2]=m*E+v*x+d*y-p*g,t[i+3]=v*E-d*g-p*y-m*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,c=t._z,f=t._order,d=Math.cos,p=Math.sin,m=d(s/2),v=d(l/2),g=d(c/2),y=p(s/2),x=p(l/2),E=p(c/2);switch(f){case"XYZ":this._x=y*v*g+m*x*E,this._y=m*x*g-y*v*E,this._z=m*v*E+y*x*g,this._w=m*v*g-y*x*E;break;case"YXZ":this._x=y*v*g+m*x*E,this._y=m*x*g-y*v*E,this._z=m*v*E-y*x*g,this._w=m*v*g+y*x*E;break;case"ZXY":this._x=y*v*g-m*x*E,this._y=m*x*g+y*v*E,this._z=m*v*E+y*x*g,this._w=m*v*g-y*x*E;break;case"ZYX":this._x=y*v*g-m*x*E,this._y=m*x*g+y*v*E,this._z=m*v*E-y*x*g,this._w=m*v*g+y*x*E;break;case"YZX":this._x=y*v*g+m*x*E,this._y=m*x*g+y*v*E,this._z=m*v*E-y*x*g,this._w=m*v*g-y*x*E;break;case"XZY":this._x=y*v*g-m*x*E,this._y=m*x*g-y*v*E,this._z=m*v*E+y*x*g,this._w=m*v*g+y*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],c=i[8],f=i[1],d=i[5],p=i[9],m=i[2],v=i[6],g=i[10],y=s+d+g;if(y>0){const x=.5/Math.sqrt(y+1);this._w=.25/x,this._x=(v-p)*x,this._y=(c-m)*x,this._z=(f-l)*x}else if(s>d&&s>g){const x=2*Math.sqrt(1+s-d-g);this._w=(v-p)/x,this._x=.25*x,this._y=(l+f)/x,this._z=(c+m)/x}else if(d>g){const x=2*Math.sqrt(1+d-s-g);this._w=(c-m)/x,this._x=(l+f)/x,this._y=.25*x,this._z=(p+v)/x}else{const x=2*Math.sqrt(1+g-s-d);this._w=(f-l)/x,this._x=(c+m)/x,this._y=(p+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,c=t._z,f=t._w,d=i._x,p=i._y,m=i._z,v=i._w;return this._x=s*v+f*d+l*m-c*p,this._y=l*v+f*p+c*d-s*m,this._z=c*v+f*m+s*p-l*d,this._w=f*v-s*d-l*p-c*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,c=this._z,f=this._w;let d=f*t._w+s*t._x+l*t._y+c*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=s,this._y=l,this._z=c,this;const p=1-d*d;if(p<=Number.EPSILON){const x=1-i;return this._w=x*f+i*this._w,this._x=x*s+i*this._x,this._y=x*l+i*this._y,this._z=x*c+i*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),g=Math.sin((1-i)*v)/m,y=Math.sin(i*v)/m;return this._w=f*g+this._w*y,this._x=s*g+this._x*y,this._y=l*g+this._y*y,this._z=c*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),c*Math.sin(i),c*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(t=0,i=0,s=0){F.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Uy.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Uy.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=t.elements,f=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*f,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*f,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,c=t.x,f=t.y,d=t.z,p=t.w,m=2*(f*l-d*s),v=2*(d*i-c*l),g=2*(c*s-f*i);return this.x=i+p*m+f*g-d*v,this.y=s+p*v+d*m-c*g,this.z=l+p*g+c*v-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,c=t.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,c=t.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*f-s*p,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return np.copy(this).projectOnVector(t),this.sub(np)}reflect(t){return this.sub(np.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ae(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const np=new F,Uy=new qn;class ye{constructor(t,i,s,l,c,f,d,p,m){ye.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,p,m)}set(t,i,s,l,c,f,d,p,m){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=c,v[5]=p,v[6]=s,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[3],p=s[6],m=s[1],v=s[4],g=s[7],y=s[2],x=s[5],E=s[8],T=l[0],S=l[3],_=l[6],w=l[1],D=l[4],b=l[7],V=l[2],H=l[5],P=l[8];return c[0]=f*T+d*w+p*V,c[3]=f*S+d*D+p*H,c[6]=f*_+d*b+p*P,c[1]=m*T+v*w+g*V,c[4]=m*S+v*D+g*H,c[7]=m*_+v*b+g*P,c[2]=y*T+x*w+E*V,c[5]=y*S+x*D+E*H,c[8]=y*_+x*b+E*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],v=t[8];return i*f*v-i*d*m-s*c*v+s*d*p+l*c*m-l*f*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],v=t[8],g=v*f-d*m,y=d*p-v*c,x=m*c-f*p,E=i*g+s*y+l*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=g*T,t[1]=(l*m-v*s)*T,t[2]=(d*s-l*f)*T,t[3]=y*T,t[4]=(v*i-l*p)*T,t[5]=(l*c-d*i)*T,t[6]=x*T,t[7]=(s*p-m*i)*T,t[8]=(f*i-s*c)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,c,f,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*f+m*d)+f+t,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(ip.makeScale(t,i)),this}rotate(t){return this.premultiply(ip.makeRotation(-t)),this}translate(t,i){return this.premultiply(ip.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ip=new ye;function l1(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ff(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function kT(){const r=ff("canvas");return r.style.display="block",r}const Ly={};function Xl(r){r in Ly||(Ly[r]=!0,console.warn(r))}function XT(r,t,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}const Oy=new ye().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Py=new ye().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qT(){const r={enabled:!0,workingColorSpace:sr,spaces:{},convert:function(l,c,f){return this.enabled===!1||c===f||!c||!f||(this.spaces[c].transfer===We&&(l.r=za(l.r),l.g=za(l.g),l.b=za(l.b)),this.spaces[c].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===We&&(l.r=_o(l.r),l.g=_o(l.g),l.b=_o(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===_s?cf:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,f){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return Xl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return Xl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[sr]:{primaries:t,whitePoint:s,transfer:cf,toXYZ:Oy,fromXYZ:Py,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:Xn},outputColorSpaceConfig:{drawingBufferColorSpace:Xn}},[Xn]:{primaries:t,whitePoint:s,transfer:We,toXYZ:Oy,fromXYZ:Py,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:Xn}}}),r}const Le=qT();function za(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function _o(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Jr;class YT{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Jr===void 0&&(Jr=ff("canvas")),Jr.width=t.width,Jr.height=t.height;const l=Jr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Jr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ff("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),c=l.data;for(let f=0;f<c.length;f++)c[f]=za(c[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(za(i[s]/255)*255):i[s]=za(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let WT=0;class Ym{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:WT++}),this.uuid=lr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?c.push(ap(l[f].image)):c.push(ap(l[f]))}else c=ap(l);s.url=c}return i||(t.images[this.uuid]=s),s}}function ap(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?YT.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jT=0;const sp=new F;class Yn extends bo{constructor(t=Yn.DEFAULT_IMAGE,i=Yn.DEFAULT_MAPPING,s=er,l=er,c=oa,f=nr,d=Yi,p=Pi,m=Yn.DEFAULT_ANISOTROPY,v=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jT++}),this.uuid=lr(),this.name="",this.source=new Ym(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ye,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(sp).x}get height(){return this.source.getSize(sp).y}get depth(){return this.source.getSize(sp).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case jp:t.x=t.x-Math.floor(t.x);break;case er:t.x=t.x<0?0:1;break;case Zp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case jp:t.y=t.y-Math.floor(t.y);break;case er:t.y=t.y<0?0:1;break;case Zp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=Jx;Yn.DEFAULT_ANISOTROPY=1;class Qe{constructor(t=0,i=0,s=0,l=1){Qe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,c=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*c,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*c,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*c,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*c,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,c;const p=t.elements,m=p[0],v=p[4],g=p[8],y=p[1],x=p[5],E=p[9],T=p[2],S=p[6],_=p[10];if(Math.abs(v-y)<.01&&Math.abs(g-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(v+y)<.1&&Math.abs(g+T)<.1&&Math.abs(E+S)<.1&&Math.abs(m+x+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(m+1)/2,b=(x+1)/2,V=(_+1)/2,H=(v+y)/4,P=(g+T)/4,O=(E+S)/4;return D>b&&D>V?D<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(D),l=H/s,c=P/s):b>V?b<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(b),s=H/l,c=O/l):V<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(V),s=P/c,l=O/c),this.set(s,l,c,i),this}let w=Math.sqrt((S-E)*(S-E)+(g-T)*(g-T)+(y-v)*(y-v));return Math.abs(w)<.001&&(w=1),this.x=(S-E)/w,this.y=(g-T)/w,this.z=(y-v)/w,this.w=Math.acos((m+x+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this.w=Ae(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this.w=Ae(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ZT extends bo{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:oa,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Qe(0,0,t,i),this.scissorTest=!1,this.viewport=new Qe(0,0,t,i);const l={width:t,height:i,depth:s.depth},c=new Yn(l);this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:oa,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Ym(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends ZT{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class c1 extends Yn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class QT extends Yn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=xi,this.minFilter=xi,this.wrapR=er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cr{constructor(t=new F(1/0,1/0,1/0),i=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Vi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Vi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Vi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=c.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Vi):Vi.fromBufferAttribute(c,f),Vi.applyMatrix4(t.matrixWorld),this.expandByPoint(Vi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Mu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Mu.copy(s.boundingBox)),Mu.applyMatrix4(t.matrixWorld),this.union(Mu)}const l=t.children;for(let c=0,f=l.length;c<f;c++)this.expandByObject(l[c],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vi),Vi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sl),Eu.subVectors(this.max,Sl),$r.subVectors(t.a,Sl),to.subVectors(t.b,Sl),eo.subVectors(t.c,Sl),hs.subVectors(to,$r),ds.subVectors(eo,to),qs.subVectors($r,eo);let i=[0,-hs.z,hs.y,0,-ds.z,ds.y,0,-qs.z,qs.y,hs.z,0,-hs.x,ds.z,0,-ds.x,qs.z,0,-qs.x,-hs.y,hs.x,0,-ds.y,ds.x,0,-qs.y,qs.x,0];return!rp(i,$r,to,eo,Eu)||(i=[1,0,0,0,1,0,0,0,1],!rp(i,$r,to,eo,Eu))?!1:(Tu.crossVectors(hs,ds),i=[Tu.x,Tu.y,Tu.z],rp(i,$r,to,eo,Eu))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ca=[new F,new F,new F,new F,new F,new F,new F,new F],Vi=new F,Mu=new cr,$r=new F,to=new F,eo=new F,hs=new F,ds=new F,qs=new F,Sl=new F,Eu=new F,Tu=new F,Ys=new F;function rp(r,t,i,s,l){for(let c=0,f=r.length-3;c<=f;c+=3){Ys.fromArray(r,c);const d=l.x*Math.abs(Ys.x)+l.y*Math.abs(Ys.y)+l.z*Math.abs(Ys.z),p=t.dot(Ys),m=i.dot(Ys),v=s.dot(Ys);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const KT=new cr,Ml=new F,op=new F;class xs{constructor(t=new F,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):KT.setFromPoints(t).getCenter(s);let l=0;for(let c=0,f=t.length;c<f;c++)l=Math.max(l,s.distanceToSquared(t[c]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ml.subVectors(t,this.center);const i=Ml.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ml,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(op.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ml.copy(t.center).add(op)),this.expandByPoint(Ml.copy(t.center).sub(op))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ra=new F,lp=new F,bu=new F,ps=new F,cp=new F,Au=new F,up=new F;class Wm{constructor(t=new F,i=new F(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ra)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ra.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ra.copy(this.origin).addScaledVector(this.direction,i),Ra.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){lp.copy(t).add(i).multiplyScalar(.5),bu.copy(i).sub(t).normalize(),ps.copy(this.origin).sub(lp);const c=t.distanceTo(i)*.5,f=-this.direction.dot(bu),d=ps.dot(this.direction),p=-ps.dot(bu),m=ps.lengthSq(),v=Math.abs(1-f*f);let g,y,x,E;if(v>0)if(g=f*p-d,y=f*d-p,E=c*v,g>=0)if(y>=-E)if(y<=E){const T=1/v;g*=T,y*=T,x=g*(g+f*y+2*d)+y*(f*g+y+2*p)+m}else y=c,g=Math.max(0,-(f*y+d)),x=-g*g+y*(y+2*p)+m;else y=-c,g=Math.max(0,-(f*y+d)),x=-g*g+y*(y+2*p)+m;else y<=-E?(g=Math.max(0,-(-f*c+d)),y=g>0?-c:Math.min(Math.max(-c,-p),c),x=-g*g+y*(y+2*p)+m):y<=E?(g=0,y=Math.min(Math.max(-c,-p),c),x=y*(y+2*p)+m):(g=Math.max(0,-(f*c+d)),y=g>0?c:Math.min(Math.max(-c,-p),c),x=-g*g+y*(y+2*p)+m);else y=f>0?-c:c,g=Math.max(0,-(f*y+d)),x=-g*g+y*(y+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(lp).addScaledVector(bu,y),x}intersectSphere(t,i){Ra.subVectors(t.center,this.origin);const s=Ra.dot(this.direction),l=Ra.dot(Ra)-s*s,c=t.radius*t.radius;if(l>c)return null;const f=Math.sqrt(c-l),d=s-f,p=s+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,c,f,d,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,y=this.origin;return m>=0?(s=(t.min.x-y.x)*m,l=(t.max.x-y.x)*m):(s=(t.max.x-y.x)*m,l=(t.min.x-y.x)*m),v>=0?(c=(t.min.y-y.y)*v,f=(t.max.y-y.y)*v):(c=(t.max.y-y.y)*v,f=(t.min.y-y.y)*v),s>f||c>l||((c>s||isNaN(s))&&(s=c),(f<l||isNaN(l))&&(l=f),g>=0?(d=(t.min.z-y.z)*g,p=(t.max.z-y.z)*g):(d=(t.max.z-y.z)*g,p=(t.min.z-y.z)*g),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ra)!==null}intersectTriangle(t,i,s,l,c){cp.subVectors(i,t),Au.subVectors(s,t),up.crossVectors(cp,Au);let f=this.direction.dot(up),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ps.subVectors(this.origin,t);const p=d*this.direction.dot(Au.crossVectors(ps,Au));if(p<0)return null;const m=d*this.direction.dot(cp.cross(ps));if(m<0||p+m>f)return null;const v=-d*ps.dot(up);return v<0?null:this.at(v/f,c)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Oe{constructor(t,i,s,l,c,f,d,p,m,v,g,y,x,E,T,S){Oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,c,f,d,p,m,v,g,y,x,E,T,S)}set(t,i,s,l,c,f,d,p,m,v,g,y,x,E,T,S){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=f,_[9]=d,_[13]=p,_[2]=m,_[6]=v,_[10]=g,_[14]=y,_[3]=x,_[7]=E,_[11]=T,_[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oe().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/no.setFromMatrixColumn(t,0).length(),c=1/no.setFromMatrixColumn(t,1).length(),f=1/no.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,c=t.z,f=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),v=Math.cos(c),g=Math.sin(c);if(t.order==="XYZ"){const y=f*v,x=f*g,E=d*v,T=d*g;i[0]=p*v,i[4]=-p*g,i[8]=m,i[1]=x+E*m,i[5]=y-T*m,i[9]=-d*p,i[2]=T-y*m,i[6]=E+x*m,i[10]=f*p}else if(t.order==="YXZ"){const y=p*v,x=p*g,E=m*v,T=m*g;i[0]=y+T*d,i[4]=E*d-x,i[8]=f*m,i[1]=f*g,i[5]=f*v,i[9]=-d,i[2]=x*d-E,i[6]=T+y*d,i[10]=f*p}else if(t.order==="ZXY"){const y=p*v,x=p*g,E=m*v,T=m*g;i[0]=y-T*d,i[4]=-f*g,i[8]=E+x*d,i[1]=x+E*d,i[5]=f*v,i[9]=T-y*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(t.order==="ZYX"){const y=f*v,x=f*g,E=d*v,T=d*g;i[0]=p*v,i[4]=E*m-x,i[8]=y*m+T,i[1]=p*g,i[5]=T*m+y,i[9]=x*m-E,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(t.order==="YZX"){const y=f*p,x=f*m,E=d*p,T=d*m;i[0]=p*v,i[4]=T-y*g,i[8]=E*g+x,i[1]=g,i[5]=f*v,i[9]=-d*v,i[2]=-m*v,i[6]=x*g+E,i[10]=y-T*g}else if(t.order==="XZY"){const y=f*p,x=f*m,E=d*p,T=d*m;i[0]=p*v,i[4]=-g,i[8]=m*v,i[1]=y*g+T,i[5]=f*v,i[9]=x*g-E,i[2]=E*g-x,i[6]=d*v,i[10]=T*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(JT,t,$T)}lookAt(t,i,s){const l=this.elements;return vi.subVectors(t,i),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),ms.crossVectors(s,vi),ms.lengthSq()===0&&(Math.abs(s.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),ms.crossVectors(s,vi)),ms.normalize(),wu.crossVectors(vi,ms),l[0]=ms.x,l[4]=wu.x,l[8]=vi.x,l[1]=ms.y,l[5]=wu.y,l[9]=vi.y,l[2]=ms.z,l[6]=wu.z,l[10]=vi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,c=this.elements,f=s[0],d=s[4],p=s[8],m=s[12],v=s[1],g=s[5],y=s[9],x=s[13],E=s[2],T=s[6],S=s[10],_=s[14],w=s[3],D=s[7],b=s[11],V=s[15],H=l[0],P=l[4],O=l[8],C=l[12],A=l[1],G=l[5],Y=l[9],Z=l[13],it=l[2],j=l[6],k=l[10],U=l[14],z=l[3],$=l[7],mt=l[11],Nt=l[15];return c[0]=f*H+d*A+p*it+m*z,c[4]=f*P+d*G+p*j+m*$,c[8]=f*O+d*Y+p*k+m*mt,c[12]=f*C+d*Z+p*U+m*Nt,c[1]=v*H+g*A+y*it+x*z,c[5]=v*P+g*G+y*j+x*$,c[9]=v*O+g*Y+y*k+x*mt,c[13]=v*C+g*Z+y*U+x*Nt,c[2]=E*H+T*A+S*it+_*z,c[6]=E*P+T*G+S*j+_*$,c[10]=E*O+T*Y+S*k+_*mt,c[14]=E*C+T*Z+S*U+_*Nt,c[3]=w*H+D*A+b*it+V*z,c[7]=w*P+D*G+b*j+V*$,c[11]=w*O+D*Y+b*k+V*mt,c[15]=w*C+D*Z+b*U+V*Nt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],c=t[12],f=t[1],d=t[5],p=t[9],m=t[13],v=t[2],g=t[6],y=t[10],x=t[14],E=t[3],T=t[7],S=t[11],_=t[15];return E*(+c*p*g-l*m*g-c*d*y+s*m*y+l*d*x-s*p*x)+T*(+i*p*x-i*m*y+c*f*y-l*f*x+l*m*v-c*p*v)+S*(+i*m*g-i*d*x-c*f*g+s*f*x+c*d*v-s*m*v)+_*(-l*d*v-i*p*g+i*d*y+l*f*g-s*f*y+s*p*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],c=t[3],f=t[4],d=t[5],p=t[6],m=t[7],v=t[8],g=t[9],y=t[10],x=t[11],E=t[12],T=t[13],S=t[14],_=t[15],w=g*S*m-T*y*m+T*p*x-d*S*x-g*p*_+d*y*_,D=E*y*m-v*S*m-E*p*x+f*S*x+v*p*_-f*y*_,b=v*T*m-E*g*m+E*d*x-f*T*x-v*d*_+f*g*_,V=E*g*p-v*T*p-E*d*y+f*T*y+v*d*S-f*g*S,H=i*w+s*D+l*b+c*V;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/H;return t[0]=w*P,t[1]=(T*y*c-g*S*c-T*l*x+s*S*x+g*l*_-s*y*_)*P,t[2]=(d*S*c-T*p*c+T*l*m-s*S*m-d*l*_+s*p*_)*P,t[3]=(g*p*c-d*y*c-g*l*m+s*y*m+d*l*x-s*p*x)*P,t[4]=D*P,t[5]=(v*S*c-E*y*c+E*l*x-i*S*x-v*l*_+i*y*_)*P,t[6]=(E*p*c-f*S*c-E*l*m+i*S*m+f*l*_-i*p*_)*P,t[7]=(f*y*c-v*p*c+v*l*m-i*y*m-f*l*x+i*p*x)*P,t[8]=b*P,t[9]=(E*g*c-v*T*c-E*s*x+i*T*x+v*s*_-i*g*_)*P,t[10]=(f*T*c-E*d*c+E*s*m-i*T*m-f*s*_+i*d*_)*P,t[11]=(v*d*c-f*g*c-v*s*m+i*g*m+f*s*x-i*d*x)*P,t[12]=V*P,t[13]=(v*T*l-E*g*l+E*s*y-i*T*y-v*s*S+i*g*S)*P,t[14]=(E*d*l-f*T*l-E*s*p+i*T*p+f*s*S-i*d*S)*P,t[15]=(f*g*l-v*d*l+v*s*p-i*g*p-f*s*y+i*d*y)*P,this}scale(t){const i=this.elements,s=t.x,l=t.y,c=t.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,f=t.x,d=t.y,p=t.z,m=c*f,v=c*d;return this.set(m*f+s,m*d-l*p,m*p+l*d,0,m*d+l*p,v*d+s,v*p-l*f,0,m*p-l*d,v*p+l*f,c*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,c,f){return this.set(1,s,c,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,c=i._x,f=i._y,d=i._z,p=i._w,m=c+c,v=f+f,g=d+d,y=c*m,x=c*v,E=c*g,T=f*v,S=f*g,_=d*g,w=p*m,D=p*v,b=p*g,V=s.x,H=s.y,P=s.z;return l[0]=(1-(T+_))*V,l[1]=(x+b)*V,l[2]=(E-D)*V,l[3]=0,l[4]=(x-b)*H,l[5]=(1-(y+_))*H,l[6]=(S+w)*H,l[7]=0,l[8]=(E+D)*P,l[9]=(S-w)*P,l[10]=(1-(y+T))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let c=no.set(l[0],l[1],l[2]).length();const f=no.set(l[4],l[5],l[6]).length(),d=no.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),t.x=l[12],t.y=l[13],t.z=l[14],ki.copy(this);const m=1/c,v=1/f,g=1/d;return ki.elements[0]*=m,ki.elements[1]*=m,ki.elements[2]*=m,ki.elements[4]*=v,ki.elements[5]*=v,ki.elements[6]*=v,ki.elements[8]*=g,ki.elements[9]*=g,ki.elements[10]*=g,i.setFromRotationMatrix(ki),s.x=c,s.y=f,s.z=d,this}makePerspective(t,i,s,l,c,f,d=ca,p=!1){const m=this.elements,v=2*c/(i-t),g=2*c/(s-l),y=(i+t)/(i-t),x=(s+l)/(s-l);let E,T;if(p)E=c/(f-c),T=f*c/(f-c);else if(d===ca)E=-(f+c)/(f-c),T=-2*f*c/(f-c);else if(d===uf)E=-f/(f-c),T=-f*c/(f-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,c,f,d=ca,p=!1){const m=this.elements,v=2/(i-t),g=2/(s-l),y=-(i+t)/(i-t),x=-(s+l)/(s-l);let E,T;if(p)E=1/(f-c),T=f/(f-c);else if(d===ca)E=-2/(f-c),T=-(f+c)/(f-c);else if(d===uf)E=-1/(f-c),T=-c/(f-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=y,m[1]=0,m[5]=g,m[9]=0,m[13]=x,m[2]=0,m[6]=0,m[10]=E,m[14]=T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const no=new F,ki=new Oe,JT=new F(0,0,0),$T=new F(1,1,1),ms=new F,wu=new F,vi=new F,zy=new Oe,Iy=new qn;class ri{constructor(t=0,i=0,s=0,l=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,c=l[0],f=l[4],d=l[8],p=l[1],m=l[5],v=l[9],g=l[2],y=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-f,c)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Ae(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,x),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Ae(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,c)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-v,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return zy.makeRotationFromQuaternion(t),this.setFromRotationMatrix(zy,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Iy.setFromEuler(this),this.setFromQuaternion(Iy,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class u1{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let tb=0;const By=new F,io=new qn,Da=new Oe,Cu=new F,El=new F,eb=new F,nb=new qn,Fy=new F(1,0,0),Hy=new F(0,1,0),Gy=new F(0,0,1),Vy={type:"added"},ib={type:"removed"},ao={type:"childadded",child:null},fp={type:"childremoved",child:null};class Mn extends bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:tb++}),this.uuid=lr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new F,i=new ri,s=new qn,l=new F(1,1,1);function c(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Oe},normalMatrix:{value:new ye}}),this.matrix=new Oe,this.matrixWorld=new Oe,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new u1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return io.setFromAxisAngle(t,i),this.quaternion.multiply(io),this}rotateOnWorldAxis(t,i){return io.setFromAxisAngle(t,i),this.quaternion.premultiply(io),this}rotateX(t){return this.rotateOnAxis(Fy,t)}rotateY(t){return this.rotateOnAxis(Hy,t)}rotateZ(t){return this.rotateOnAxis(Gy,t)}translateOnAxis(t,i){return By.copy(t).applyQuaternion(this.quaternion),this.position.add(By.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Fy,t)}translateY(t){return this.translateOnAxis(Hy,t)}translateZ(t){return this.translateOnAxis(Gy,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Da.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Cu.copy(t):Cu.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),El.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Da.lookAt(El,Cu,this.up):Da.lookAt(Cu,El,this.up),this.quaternion.setFromRotationMatrix(Da),l&&(Da.extractRotation(l.matrixWorld),io.setFromRotationMatrix(Da),this.quaternion.premultiply(io.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Vy),ao.child=t,this.dispatchEvent(ao),ao.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(ib),fp.child=t,this.dispatchEvent(fp),fp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Da.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Da.multiply(t.parent.matrixWorld)),t.applyMatrix4(Da),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Vy),ao.child=t,this.dispatchEvent(ao),ao.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,t,eb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,nb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,f=l.length;c<f;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];c(t.shapes,g)}else c(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(t.materials,this.material[p]));l.material=d}else l.material=c(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(t.animations,p))}}if(i){const d=f(t.geometries),p=f(t.materials),m=f(t.textures),v=f(t.images),g=f(t.shapes),y=f(t.skeletons),x=f(t.animations),E=f(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),y.length>0&&(s.skeletons=y),x.length>0&&(s.animations=x),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Mn.DEFAULT_UP=new F(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xi=new F,Na=new F,hp=new F,Ua=new F,so=new F,ro=new F,ky=new F,dp=new F,pp=new F,mp=new F,gp=new Qe,vp=new Qe,_p=new Qe;class qi{constructor(t=new F,i=new F,s=new F){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Xi.subVectors(t,i),l.cross(Xi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(t,i,s,l,c){Xi.subVectors(l,i),Na.subVectors(s,i),hp.subVectors(t,i);const f=Xi.dot(Xi),d=Xi.dot(Na),p=Xi.dot(hp),m=Na.dot(Na),v=Na.dot(hp),g=f*m-d*d;if(g===0)return c.set(0,0,0),null;const y=1/g,x=(m*p-d*v)*y,E=(f*v-d*p)*y;return c.set(1-x-E,E,x)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ua)===null?!1:Ua.x>=0&&Ua.y>=0&&Ua.x+Ua.y<=1}static getInterpolation(t,i,s,l,c,f,d,p){return this.getBarycoord(t,i,s,l,Ua)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,Ua.x),p.addScaledVector(f,Ua.y),p.addScaledVector(d,Ua.z),p)}static getInterpolatedAttribute(t,i,s,l,c,f){return gp.setScalar(0),vp.setScalar(0),_p.setScalar(0),gp.fromBufferAttribute(t,i),vp.fromBufferAttribute(t,s),_p.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(gp,c.x),f.addScaledVector(vp,c.y),f.addScaledVector(_p,c.z),f}static isFrontFacing(t,i,s,l){return Xi.subVectors(s,i),Na.subVectors(t,i),Xi.cross(Na).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xi.subVectors(this.c,this.b),Na.subVectors(this.a,this.b),Xi.cross(Na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return qi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return qi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,c){return qi.getInterpolation(t,this.a,this.b,this.c,i,s,l,c)}containsPoint(t){return qi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return qi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,c=this.c;let f,d;so.subVectors(l,s),ro.subVectors(c,s),dp.subVectors(t,s);const p=so.dot(dp),m=ro.dot(dp);if(p<=0&&m<=0)return i.copy(s);pp.subVectors(t,l);const v=so.dot(pp),g=ro.dot(pp);if(v>=0&&g<=v)return i.copy(l);const y=p*g-v*m;if(y<=0&&p>=0&&v<=0)return f=p/(p-v),i.copy(s).addScaledVector(so,f);mp.subVectors(t,c);const x=so.dot(mp),E=ro.dot(mp);if(E>=0&&x<=E)return i.copy(c);const T=x*m-p*E;if(T<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(s).addScaledVector(ro,d);const S=v*E-x*g;if(S<=0&&g-v>=0&&x-E>=0)return ky.subVectors(c,l),d=(g-v)/(g-v+(x-E)),i.copy(l).addScaledVector(ky,d);const _=1/(S+T+y);return f=T*_,d=y*_,i.copy(s).addScaledVector(so,f).addScaledVector(ro,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const f1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},Ru={h:0,s:0,l:0};function yp(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class le{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=Xn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=qm(t,1),i=Ae(i,0,1),s=Ae(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,f=2*s-c;this.r=yp(f,c,t+1/3),this.g=yp(f,c,t),this.b=yp(f,c,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=Xn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let c;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const c=l[1],f=c.length;if(f===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=Xn){const s=f1[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=za(t.r),this.g=za(t.g),this.b=za(t.b),this}copyLinearToSRGB(t){return this.r=_o(t.r),this.g=_o(t.g),this.b=_o(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Xn){return Le.workingToColorSpace(kn.copy(this),t),Math.round(Ae(kn.r*255,0,255))*65536+Math.round(Ae(kn.g*255,0,255))*256+Math.round(Ae(kn.b*255,0,255))}getHexString(t=Xn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(kn.copy(this),i);const s=kn.r,l=kn.g,c=kn.b,f=Math.max(s,l,c),d=Math.min(s,l,c);let p,m;const v=(d+f)/2;if(d===f)p=0,m=0;else{const g=f-d;switch(m=v<=.5?g/(f+d):g/(2-f-d),f){case s:p=(l-c)/g+(l<c?6:0);break;case l:p=(c-s)/g+2;break;case c:p=(s-l)/g+4;break}p/=6}return t.h=p,t.s=m,t.l=v,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(kn.copy(this),i),t.r=kn.r,t.g=kn.g,t.b=kn.b,t}getStyle(t=Xn){Le.workingToColorSpace(kn.copy(this),t);const i=kn.r,s=kn.g,l=kn.b;return t!==Xn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(gs),this.setHSL(gs.h+t,gs.s+i,gs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(gs),t.getHSL(Ru);const s=Pl(gs.h,Ru.h,i),l=Pl(gs.s,Ru.s,i),c=Pl(gs.l,Ru.l,i);return this.setHSL(s,l,c),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,c=t.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new le;le.NAMES=f1;let ab=0;class ur extends bo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ab++}),this.uuid=lr(),this.name="",this.type="Material",this.blending=vo,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bp,this.blendDst=Fp,this.blendEquation=$s,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new le(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==vo&&(s.blending=this.blending),this.side!==ys&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Bp&&(s.blendSrc=this.blendSrc),this.blendDst!==Fp&&(s.blendDst=this.blendDst),this.blendEquation!==$s&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cy&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const f=[];for(const d in c){const p=c[d];delete p.metadata,f.push(p)}return f}if(i){const c=l(t.textures),f=l(t.images);c.length>0&&(s.textures=c),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class rr extends ur{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=qx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xn=new F,Du=new It;let sb=0;class hn{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:sb++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=Ry,this.updateRanges=[],this.gpuType=la,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Du.fromBufferAttribute(this,i),Du.applyMatrix3(t),this.setXY(i,Du.x,Du.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix3(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix4(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyNormalMatrix(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.transformDirection(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=ho(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Jn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=ho(i,this.array)),i}setX(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=ho(i,this.array)),i}setY(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=ho(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=ho(i,this.array)),i}setW(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array),l=Jn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,c){return t*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array),l=Jn(l,this.array),c=Jn(c,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=c,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ry&&(t.usage=this.usage),t}}class h1 extends hn{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class d1 extends hn{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ge extends hn{constructor(t,i,s){super(new Float32Array(t),i,s)}}let rb=0;const Ui=new Oe,xp=new Mn,oo=new F,_i=new cr,Tl=new cr,Nn=new F;class pn extends bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:rb++}),this.uuid=lr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(l1(t)?d1:h1)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ye().getNormalMatrix(t);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ui.makeRotationFromQuaternion(t),this.applyMatrix4(Ui),this}rotateX(t){return Ui.makeRotationX(t),this.applyMatrix4(Ui),this}rotateY(t){return Ui.makeRotationY(t),this.applyMatrix4(Ui),this}rotateZ(t){return Ui.makeRotationZ(t),this.applyMatrix4(Ui),this}translate(t,i,s){return Ui.makeTranslation(t,i,s),this.applyMatrix4(Ui),this}scale(t,i,s){return Ui.makeScale(t,i,s),this.applyMatrix4(Ui),this}lookAt(t){return xp.lookAt(t),xp.updateMatrix(),this.applyMatrix4(xp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oo).negate(),this.translate(oo.x,oo.y,oo.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=t.length;l<c;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ge(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const c=t[l];i.setXYZ(l,c.x,c.y,c.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];_i.setFromBufferAttribute(c),this.morphTargetsRelative?(Nn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(Nn),Nn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(Nn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xs);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(t){const s=this.boundingSphere.center;if(_i.setFromBufferAttribute(t),i)for(let c=0,f=i.length;c<f;c++){const d=i[c];Tl.setFromBufferAttribute(d),this.morphTargetsRelative?(Nn.addVectors(_i.min,Tl.min),_i.expandByPoint(Nn),Nn.addVectors(_i.max,Tl.max),_i.expandByPoint(Nn)):(_i.expandByPoint(Tl.min),_i.expandByPoint(Tl.max))}_i.getCenter(s);let l=0;for(let c=0,f=t.count;c<f;c++)Nn.fromBufferAttribute(t,c),l=Math.max(l,s.distanceToSquared(Nn));if(i)for(let c=0,f=i.length;c<f;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)Nn.fromBufferAttribute(d,m),p&&(oo.fromBufferAttribute(t,m),Nn.add(oo)),l=Math.max(l,s.distanceToSquared(Nn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let O=0;O<s.count;O++)d[O]=new F,p[O]=new F;const m=new F,v=new F,g=new F,y=new It,x=new It,E=new It,T=new F,S=new F;function _(O,C,A){m.fromBufferAttribute(s,O),v.fromBufferAttribute(s,C),g.fromBufferAttribute(s,A),y.fromBufferAttribute(c,O),x.fromBufferAttribute(c,C),E.fromBufferAttribute(c,A),v.sub(m),g.sub(m),x.sub(y),E.sub(y);const G=1/(x.x*E.y-E.x*x.y);isFinite(G)&&(T.copy(v).multiplyScalar(E.y).addScaledVector(g,-x.y).multiplyScalar(G),S.copy(g).multiplyScalar(x.x).addScaledVector(v,-E.x).multiplyScalar(G),d[O].add(T),d[C].add(T),d[A].add(T),p[O].add(S),p[C].add(S),p[A].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let O=0,C=w.length;O<C;++O){const A=w[O],G=A.start,Y=A.count;for(let Z=G,it=G+Y;Z<it;Z+=3)_(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}const D=new F,b=new F,V=new F,H=new F;function P(O){V.fromBufferAttribute(l,O),H.copy(V);const C=d[O];D.copy(C),D.sub(V.multiplyScalar(V.dot(C))).normalize(),b.crossVectors(H,C);const G=b.dot(p[O])<0?-1:1;f.setXYZW(O,D.x,D.y,D.z,G)}for(let O=0,C=w.length;O<C;++O){const A=w[O],G=A.start,Y=A.count;for(let Z=G,it=G+Y;Z<it;Z+=3)P(t.getX(Z+0)),P(t.getX(Z+1)),P(t.getX(Z+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new hn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,x=s.count;y<x;y++)s.setXYZ(y,0,0,0);const l=new F,c=new F,f=new F,d=new F,p=new F,m=new F,v=new F,g=new F;if(t)for(let y=0,x=t.count;y<x;y+=3){const E=t.getX(y+0),T=t.getX(y+1),S=t.getX(y+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,T),f.fromBufferAttribute(i,S),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,S),d.add(v),p.add(v),m.add(v),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(S,m.x,m.y,m.z)}else for(let y=0,x=i.count;y<x;y+=3)l.fromBufferAttribute(i,y+0),c.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),v.subVectors(f,c),g.subVectors(l,c),v.cross(g),s.setXYZ(y+0,v.x,v.y,v.z),s.setXYZ(y+1,v.x,v.y,v.z),s.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Nn.fromBufferAttribute(t,i),Nn.normalize(),t.setXYZ(i,Nn.x,Nn.y,Nn.z)}toNonIndexed(){function t(d,p){const m=d.array,v=d.itemSize,g=d.normalized,y=new m.constructor(p.length*v);let x=0,E=0;for(let T=0,S=p.length;T<S;T++){d.isInterleavedBufferAttribute?x=p[T]*d.data.stride+d.offset:x=p[T]*v;for(let _=0;_<v;_++)y[E++]=m[x++]}return new hn(y,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new pn,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let v=0,g=m.length;v<g;v++){const y=m[v],x=t(y,s);p.push(x)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,y=m.length;g<y;g++){const x=m[g];v.push(x.toJSON(t.data))}v.length>0&&(l[p]=v,c=!0)}c&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const c=t.morphAttributes;for(const m in c){const v=[],g=c[m];for(let y=0,x=g.length;y<x;y++)v.push(g[y].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,v=f.length;m<v;m++){const g=f[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Xy=new Oe,Ws=new Wm,Nu=new xs,qy=new F,Uu=new F,Lu=new F,Ou=new F,Sp=new F,Pu=new F,Yy=new F,zu=new F;class an extends Mn{constructor(t=new pn,i=new rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(c&&d){Pu.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=d[p],g=c[p];v!==0&&(Sp.fromBufferAttribute(g,t),f?Pu.addScaledVector(Sp,v):Pu.addScaledVector(Sp.sub(i),v))}i.add(Pu)}return i}raycast(t,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Nu.copy(s.boundingSphere),Nu.applyMatrix4(c),Ws.copy(t.ray).recast(t.near),!(Nu.containsPoint(Ws.origin)===!1&&(Ws.intersectSphere(Nu,qy)===null||Ws.origin.distanceToSquared(qy)>(t.far-t.near)**2))&&(Xy.copy(c).invert(),Ws.copy(t.ray).applyMatrix4(Xy),!(s.boundingBox!==null&&Ws.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ws)))}_computeIntersections(t,i,s){let l;const c=this.geometry,f=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,g=c.attributes.normal,y=c.groups,x=c.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,T=y.length;E<T;E++){const S=y[E],_=f[S.materialIndex],w=Math.max(S.start,x.start),D=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let b=w,V=D;b<V;b+=3){const H=d.getX(b),P=d.getX(b+1),O=d.getX(b+2);l=Iu(this,_,t,s,m,v,g,H,P,O),l&&(l.faceIndex=Math.floor(b/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let S=E,_=T;S<_;S+=3){const w=d.getX(S),D=d.getX(S+1),b=d.getX(S+2);l=Iu(this,f,t,s,m,v,g,w,D,b),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,T=y.length;E<T;E++){const S=y[E],_=f[S.materialIndex],w=Math.max(S.start,x.start),D=Math.min(p.count,Math.min(S.start+S.count,x.start+x.count));for(let b=w,V=D;b<V;b+=3){const H=b,P=b+1,O=b+2;l=Iu(this,_,t,s,m,v,g,H,P,O),l&&(l.faceIndex=Math.floor(b/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),T=Math.min(p.count,x.start+x.count);for(let S=E,_=T;S<_;S+=3){const w=S,D=S+1,b=S+2;l=Iu(this,f,t,s,m,v,g,w,D,b),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function ob(r,t,i,s,l,c,f,d){let p;if(t.side===Bn?p=s.intersectTriangle(f,c,l,!0,d):p=s.intersectTriangle(l,c,f,t.side===ys,d),p===null)return null;zu.copy(d),zu.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(zu);return m<i.near||m>i.far?null:{distance:m,point:zu.clone(),object:r}}function Iu(r,t,i,s,l,c,f,d,p,m){r.getVertexPosition(d,Uu),r.getVertexPosition(p,Lu),r.getVertexPosition(m,Ou);const v=ob(r,t,i,s,Uu,Lu,Ou,Yy);if(v){const g=new F;qi.getBarycoord(Yy,Uu,Lu,Ou,g),l&&(v.uv=qi.getInterpolatedAttribute(l,d,p,m,g,new It)),c&&(v.uv1=qi.getInterpolatedAttribute(c,d,p,m,g,new It)),f&&(v.normal=qi.getInterpolatedAttribute(f,d,p,m,g,new F),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new F,materialIndex:0};qi.getNormal(Uu,Lu,Ou,y.normal),v.face=y,v.barycoord=g}return v}class Ao extends pn{constructor(t=1,i=1,s=1,l=1,c=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:f};const d=this;l=Math.floor(l),c=Math.floor(c),f=Math.floor(f);const p=[],m=[],v=[],g=[];let y=0,x=0;E("z","y","x",-1,-1,s,i,t,f,c,0),E("z","y","x",1,-1,s,i,-t,f,c,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,c,4),E("x","y","z",-1,-1,t,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new Ge(m,3)),this.setAttribute("normal",new Ge(v,3)),this.setAttribute("uv",new Ge(g,2));function E(T,S,_,w,D,b,V,H,P,O,C){const A=b/P,G=V/O,Y=b/2,Z=V/2,it=H/2,j=P+1,k=O+1;let U=0,z=0;const $=new F;for(let mt=0;mt<k;mt++){const Nt=mt*G-Z;for(let Xt=0;Xt<j;Xt++){const Zt=Xt*A-Y;$[T]=Zt*w,$[S]=Nt*D,$[_]=it,m.push($.x,$.y,$.z),$[T]=0,$[S]=0,$[_]=H>0?1:-1,v.push($.x,$.y,$.z),g.push(Xt/P),g.push(1-mt/O),U+=1}}for(let mt=0;mt<O;mt++)for(let Nt=0;Nt<P;Nt++){const Xt=y+Nt+j*mt,Zt=y+Nt+j*(mt+1),X=y+(Nt+1)+j*(mt+1),ut=y+(Nt+1)+j*mt;p.push(Xt,Zt,ut),p.push(Zt,X,ut),z+=6}d.addGroup(x,z,C),x+=z,y+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Mo(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function $n(r){const t={};for(let i=0;i<r.length;i++){const s=Mo(r[i]);for(const l in s)t[l]=s[l]}return t}function lb(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function p1(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const ql={clone:Mo,merge:$n};var cb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ub=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class en extends ur{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cb,this.fragmentShader=ub,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mo(t.uniforms),this.uniformsGroups=lb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class m1 extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Oe,this.projectionMatrix=new Oe,this.projectionMatrixInverse=new Oe,this.coordinateSystem=ca,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vs=new F,Wy=new It,jy=new It;class si extends m1{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=kl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ol*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return kl*2*Math.atan(Math.tan(Ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vs.x,vs.y).multiplyScalar(-t/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(vs.x,vs.y).multiplyScalar(-t/vs.z)}getViewSize(t,i){return this.getViewBounds(t,Wy,jy),i.subVectors(jy,Wy)}setViewOffset(t,i,s,l,c,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Ol*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;c+=f.offsetX*l/p,i-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const d=this.filmOffset;d!==0&&(c+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const lo=-90,co=1;class fb extends Mn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(lo,co,t,i);l.layers=this.layers,this.add(l);const c=new si(lo,co,t,i);c.layers=this.layers,this.add(c);const f=new si(lo,co,t,i);f.layers=this.layers,this.add(f);const d=new si(lo,co,t,i);d.layers=this.layers,this.add(d);const p=new si(lo,co,t,i);p.layers=this.layers,this.add(p);const m=new si(lo,co,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,c,f,d,p]=i;for(const m of i)this.remove(m);if(t===ca)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===uf)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[c,f,d,p,m,v]=this.children,g=t.getRenderTarget(),y=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,c),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(g,y,x),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class g1 extends Yn{constructor(t=[],i=xo,s,l,c,f,d,p,m,v){super(t,i,s,l,c,f,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hb extends Si{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new g1(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ao(5,5,5),c=new en({name:"CubemapFromEquirect",uniforms:Mo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Bn,blending:ua});c.uniforms.tEquirect.value=i;const f=new an(l,c),d=i.minFilter;return i.minFilter===nr&&(i.minFilter=oa),new fb(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const c=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(c)}}class Oa extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const db={type:"move"};class Mp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,c=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const T of t.hand.values()){const S=i.getJointPose(T,s),_=this._getHandJoint(m,T);S!==null&&(_.matrix.fromArray(S.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=S.radius),_.visible=S!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],y=v.position.distanceTo(g.position),x=.02,E=.005;m.inputState.pinching&&y>x+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&y<=x-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(c=i.getPose(t.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(db)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Oa;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class v1 extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class pb extends Yn{constructor(t=null,i=1,s=1,l,c,f,d,p,m=xi,v=xi,g,y){super(null,f,d,p,m,v,l,c,g,y),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zy extends hn{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const uo=new Oe,Qy=new Oe,Bu=[],Ky=new cr,mb=new Oe,bl=new an,Al=new xs;class gb extends an{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Zy(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,mb)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new cr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,uo),Ky.copy(t.boundingBox).applyMatrix4(uo),this.boundingBox.union(Ky)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new xs),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,uo),Al.copy(t.boundingSphere).applyMatrix4(uo),this.boundingSphere.union(Al)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,f=t*c+1;for(let d=0;d<s.length;d++)s[d]=l[f+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(bl.geometry=this.geometry,bl.material=this.material,bl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Al.copy(this.boundingSphere),Al.applyMatrix4(s),t.ray.intersectsSphere(Al)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,uo),Qy.multiplyMatrices(s,uo),bl.matrixWorld=Qy,bl.raycast(t,Bu);for(let f=0,d=Bu.length;f<d;f++){const p=Bu[f];p.instanceId=c,p.object=this,i.push(p)}Bu.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new Zy(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new pb(new Float32Array(l*this.count),l,this.count,Gm,la));const c=this.morphTexture.source.data.data;let f=0;for(let m=0;m<s.length;m++)f+=s[m];const d=this.geometry.morphTargetsRelative?1:1-f,p=l*t;c[p]=d,c.set(s,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Ep=new F,vb=new F,_b=new ye;class Ks{constructor(t=new F(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Ep.subVectors(s,i).cross(vb.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Ep),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const c=-(t.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(t.start).addScaledVector(s,c)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||_b.getNormalMatrix(t),l=this.coplanarPoint(Ep).applyMatrix4(t),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const js=new xs,yb=new It(.5,.5),Fu=new F;class yf{constructor(t=new Ks,i=new Ks,s=new Ks,l=new Ks,c=new Ks,f=new Ks){this.planes=[t,i,s,l,c,f]}set(t,i,s,l,c,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=ca,s=!1){const l=this.planes,c=t.elements,f=c[0],d=c[1],p=c[2],m=c[3],v=c[4],g=c[5],y=c[6],x=c[7],E=c[8],T=c[9],S=c[10],_=c[11],w=c[12],D=c[13],b=c[14],V=c[15];if(l[0].setComponents(m-f,x-v,_-E,V-w).normalize(),l[1].setComponents(m+f,x+v,_+E,V+w).normalize(),l[2].setComponents(m+d,x+g,_+T,V+D).normalize(),l[3].setComponents(m-d,x-g,_-T,V-D).normalize(),s)l[4].setComponents(p,y,S,b).normalize(),l[5].setComponents(m-p,x-y,_-S,V-b).normalize();else if(l[4].setComponents(m-p,x-y,_-S,V-b).normalize(),i===ca)l[5].setComponents(m+p,x+y,_+S,V+b).normalize();else if(i===uf)l[5].setComponents(p,y,S,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),js.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(js)}intersectsSprite(t){js.center.set(0,0,0);const i=yb.distanceTo(t.center);return js.radius=.7071067811865476+i,js.applyMatrix4(t.matrixWorld),this.intersectsSphere(js)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Fu.x=l.normal.x>0?t.max.x:t.min.x,Fu.y=l.normal.y>0?t.max.y:t.min.y,Fu.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Fu)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xb extends ur{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const hf=new F,df=new F,Jy=new Oe,wl=new Wm,Hu=new xs,Tp=new F,$y=new F;class _1 extends Mn{constructor(t=new pn,i=new xb){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,c=i.count;l<c;l++)hf.fromBufferAttribute(i,l-1),df.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=hf.distanceTo(df);t.setAttribute("lineDistance",new Ge(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Hu.copy(s.boundingSphere),Hu.applyMatrix4(l),Hu.radius+=c,t.ray.intersectsSphere(Hu)===!1)return;Jy.copy(l).invert(),wl.copy(t.ray).applyMatrix4(Jy);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,v=s.index,y=s.attributes.position;if(v!==null){const x=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let T=x,S=E-1;T<S;T+=m){const _=v.getX(T),w=v.getX(T+1),D=Gu(this,t,wl,p,_,w,T);D&&i.push(D)}if(this.isLineLoop){const T=v.getX(E-1),S=v.getX(x),_=Gu(this,t,wl,p,T,S,E-1);_&&i.push(_)}}else{const x=Math.max(0,f.start),E=Math.min(y.count,f.start+f.count);for(let T=x,S=E-1;T<S;T+=m){const _=Gu(this,t,wl,p,T,T+1,T);_&&i.push(_)}if(this.isLineLoop){const T=Gu(this,t,wl,p,E-1,x,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function Gu(r,t,i,s,l,c,f){const d=r.geometry.attributes.position;if(hf.fromBufferAttribute(d,l),df.fromBufferAttribute(d,c),i.distanceSqToSegment(hf,df,Tp,$y)>s)return;Tp.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(Tp);if(!(m<t.near||m>t.far))return{distance:m,point:$y.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const tx=new F,ex=new F;class Sb extends _1{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,c=i.count;l<c;l+=2)tx.fromBufferAttribute(i,l),ex.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+tx.distanceTo(ex);t.setAttribute("lineDistance",new Ge(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mb extends ur{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const nx=new Oe,Tm=new Wm,Vu=new xs,ku=new F;class jm extends Mn{constructor(t=new pn,i=new Mb){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,c=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Vu.copy(s.boundingSphere),Vu.applyMatrix4(l),Vu.radius+=c,t.ray.intersectsSphere(Vu)===!1)return;nx.copy(l).invert(),Tm.copy(t.ray).applyMatrix4(nx);const d=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=s.index,g=s.attributes.position;if(m!==null){const y=Math.max(0,f.start),x=Math.min(m.count,f.start+f.count);for(let E=y,T=x;E<T;E++){const S=m.getX(E);ku.fromBufferAttribute(g,S),ix(ku,S,p,l,t,i,this)}}else{const y=Math.max(0,f.start),x=Math.min(g.count,f.start+f.count);for(let E=y,T=x;E<T;E++)ku.fromBufferAttribute(g,E),ix(ku,E,p,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,f=l.length;c<f;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}}function ix(r,t,i,s,l,c,f){const d=Tm.distanceSqToPoint(r);if(d<i){const p=new F;Tm.closestPointToPoint(r,p),p.applyMatrix4(s);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;c.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class Zm extends Yn{constructor(t,i,s,l,c,f,d,p,m){super(t,i,s,l,c,f,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class y1 extends Yn{constructor(t,i,s=ar,l,c,f,d=xi,p=xi,m,v=Gl,g=1){if(v!==Gl&&v!==Vl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:g};super(y,l,c,f,d,p,v,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ym(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class x1 extends Yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class xf extends pn{constructor(t=1,i=1,s=1,l=32,c=1,f=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:c,openEnded:f,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),c=Math.floor(c);const v=[],g=[],y=[],x=[];let E=0;const T=[],S=s/2;let _=0;w(),f===!1&&(t>0&&D(!0),i>0&&D(!1)),this.setIndex(v),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(y,3)),this.setAttribute("uv",new Ge(x,2));function w(){const b=new F,V=new F;let H=0;const P=(i-t)/s;for(let O=0;O<=c;O++){const C=[],A=O/c,G=A*(i-t)+t;for(let Y=0;Y<=l;Y++){const Z=Y/l,it=Z*p+d,j=Math.sin(it),k=Math.cos(it);V.x=G*j,V.y=-A*s+S,V.z=G*k,g.push(V.x,V.y,V.z),b.set(j,P,k).normalize(),y.push(b.x,b.y,b.z),x.push(Z,1-A),C.push(E++)}T.push(C)}for(let O=0;O<l;O++)for(let C=0;C<c;C++){const A=T[C][O],G=T[C+1][O],Y=T[C+1][O+1],Z=T[C][O+1];(t>0||C!==0)&&(v.push(A,G,Z),H+=3),(i>0||C!==c-1)&&(v.push(G,Y,Z),H+=3)}m.addGroup(_,H,0),_+=H}function D(b){const V=E,H=new It,P=new F;let O=0;const C=b===!0?t:i,A=b===!0?1:-1;for(let Y=1;Y<=l;Y++)g.push(0,S*A,0),y.push(0,A,0),x.push(.5,.5),E++;const G=E;for(let Y=0;Y<=l;Y++){const it=Y/l*p+d,j=Math.cos(it),k=Math.sin(it);P.x=C*k,P.y=S*A,P.z=C*j,g.push(P.x,P.y,P.z),y.push(0,A,0),H.x=j*.5+.5,H.y=k*.5*A+.5,x.push(H.x,H.y),E++}for(let Y=0;Y<l;Y++){const Z=V+Y,it=G+Y;b===!0?v.push(it,it+1,Z):v.push(it+1,it,Z),O+=3}m.addGroup(_,O,b===!0?1:2),_+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xf(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Qm extends pn{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const c=[],f=[];d(l),m(s),v(),this.setAttribute("position",new Ge(c,3)),this.setAttribute("normal",new Ge(c.slice(),3)),this.setAttribute("uv",new Ge(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(w){const D=new F,b=new F,V=new F;for(let H=0;H<i.length;H+=3)x(i[H+0],D),x(i[H+1],b),x(i[H+2],V),p(D,b,V,w)}function p(w,D,b,V){const H=V+1,P=[];for(let O=0;O<=H;O++){P[O]=[];const C=w.clone().lerp(b,O/H),A=D.clone().lerp(b,O/H),G=H-O;for(let Y=0;Y<=G;Y++)Y===0&&O===H?P[O][Y]=C:P[O][Y]=C.clone().lerp(A,Y/G)}for(let O=0;O<H;O++)for(let C=0;C<2*(H-O)-1;C++){const A=Math.floor(C/2);C%2===0?(y(P[O][A+1]),y(P[O+1][A]),y(P[O][A])):(y(P[O][A+1]),y(P[O+1][A+1]),y(P[O+1][A]))}}function m(w){const D=new F;for(let b=0;b<c.length;b+=3)D.x=c[b+0],D.y=c[b+1],D.z=c[b+2],D.normalize().multiplyScalar(w),c[b+0]=D.x,c[b+1]=D.y,c[b+2]=D.z}function v(){const w=new F;for(let D=0;D<c.length;D+=3){w.x=c[D+0],w.y=c[D+1],w.z=c[D+2];const b=S(w)/2/Math.PI+.5,V=_(w)/Math.PI+.5;f.push(b,1-V)}E(),g()}function g(){for(let w=0;w<f.length;w+=6){const D=f[w+0],b=f[w+2],V=f[w+4],H=Math.max(D,b,V),P=Math.min(D,b,V);H>.9&&P<.1&&(D<.2&&(f[w+0]+=1),b<.2&&(f[w+2]+=1),V<.2&&(f[w+4]+=1))}}function y(w){c.push(w.x,w.y,w.z)}function x(w,D){const b=w*3;D.x=t[b+0],D.y=t[b+1],D.z=t[b+2]}function E(){const w=new F,D=new F,b=new F,V=new F,H=new It,P=new It,O=new It;for(let C=0,A=0;C<c.length;C+=9,A+=6){w.set(c[C+0],c[C+1],c[C+2]),D.set(c[C+3],c[C+4],c[C+5]),b.set(c[C+6],c[C+7],c[C+8]),H.set(f[A+0],f[A+1]),P.set(f[A+2],f[A+3]),O.set(f[A+4],f[A+5]),V.copy(w).add(D).add(b).divideScalar(3);const G=S(V);T(H,A+0,w,G),T(P,A+2,D,G),T(O,A+4,b,G)}}function T(w,D,b,V){V<0&&w.x===1&&(f[D]=w.x-1),b.x===0&&b.z===0&&(f[D]=V/2/Math.PI+.5)}function S(w){return Math.atan2(w.z,-w.x)}function _(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qm(t.vertices,t.indices,t.radius,t.details)}}class fa{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),c=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),c+=s.distanceTo(l),i.push(c),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const c=s.length;let f;i?f=i:f=t*s[c-1];let d=0,p=c-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=s[l]-f,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,s[l]===f)return l/(c-1);const v=s[l],y=s[l+1]-v,x=(f-v)/y;return(l+x)/(c-1)}getTangent(t,i){let l=t-1e-4,c=t+1e-4;l<0&&(l=0),c>1&&(c=1);const f=this.getPoint(l),d=this.getPoint(c),p=i||(f.isVector2?new It:new F);return p.copy(d).sub(f).normalize(),p}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new F,l=[],c=[],f=[],d=new F,p=new Oe;for(let x=0;x<=t;x++){const E=x/t;l[x]=this.getTangentAt(E,new F)}c[0]=new F,f[0]=new F;let m=Number.MAX_VALUE;const v=Math.abs(l[0].x),g=Math.abs(l[0].y),y=Math.abs(l[0].z);v<=m&&(m=v,s.set(1,0,0)),g<=m&&(m=g,s.set(0,1,0)),y<=m&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),c[0].crossVectors(l[0],d),f[0].crossVectors(l[0],c[0]);for(let x=1;x<=t;x++){if(c[x]=c[x-1].clone(),f[x]=f[x-1].clone(),d.crossVectors(l[x-1],l[x]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Ae(l[x-1].dot(l[x]),-1,1));c[x].applyMatrix4(p.makeRotationAxis(d,E))}f[x].crossVectors(l[x],c[x])}if(i===!0){let x=Math.acos(Ae(c[0].dot(c[t]),-1,1));x/=t,l[0].dot(d.crossVectors(c[0],c[t]))>0&&(x=-x);for(let E=1;E<=t;E++)c[E].applyMatrix4(p.makeRotationAxis(l[E],x*E)),f[E].crossVectors(l[E],c[E])}return{tangents:l,normals:c,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Km extends fa{constructor(t=0,i=0,s=1,l=1,c=0,f=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=c,this.aEndAngle=f,this.aClockwise=d,this.aRotation=p}getPoint(t,i=new It){const s=i,l=Math.PI*2;let c=this.aEndAngle-this.aStartAngle;const f=Math.abs(c)<Number.EPSILON;for(;c<0;)c+=l;for(;c>l;)c-=l;c<Number.EPSILON&&(f?c=0:c=l),this.aClockwise===!0&&!f&&(c===l?c=-l:c=c-l);const d=this.aStartAngle+t*c;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),g=Math.sin(this.aRotation),y=p-this.aX,x=m-this.aY;p=y*v-x*g+this.aX,m=y*g+x*v+this.aY}return s.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Eb extends Km{constructor(t,i,s,l,c,f){super(t,i,s,s,l,c,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Jm(){let r=0,t=0,i=0,s=0;function l(c,f,d,p){r=c,t=d,i=-3*c+3*f-2*d-p,s=2*c-2*f+d+p}return{initCatmullRom:function(c,f,d,p,m){l(f,d,m*(d-c),m*(p-f))},initNonuniformCatmullRom:function(c,f,d,p,m,v,g){let y=(f-c)/m-(d-c)/(m+v)+(d-f)/v,x=(d-f)/v-(p-f)/(v+g)+(p-d)/g;y*=v,x*=v,l(f,d,y,x)},calc:function(c){const f=c*c,d=f*c;return r+t*c+i*f+s*d}}}const Xu=new F,bp=new Jm,Ap=new Jm,wp=new Jm;class bm extends fa{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new F){const s=i,l=this.points,c=l.length,f=(c-(this.closed?0:1))*t;let d=Math.floor(f),p=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/c)+1)*c:p===0&&d===c-1&&(d=c-2,p=1);let m,v;this.closed||d>0?m=l[(d-1)%c]:(Xu.subVectors(l[0],l[1]).add(l[0]),m=Xu);const g=l[d%c],y=l[(d+1)%c];if(this.closed||d+2<c?v=l[(d+2)%c]:(Xu.subVectors(l[c-1],l[c-2]).add(l[c-1]),v=Xu),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(g),x),T=Math.pow(g.distanceToSquared(y),x),S=Math.pow(y.distanceToSquared(v),x);T<1e-4&&(T=1),E<1e-4&&(E=T),S<1e-4&&(S=T),bp.initNonuniformCatmullRom(m.x,g.x,y.x,v.x,E,T,S),Ap.initNonuniformCatmullRom(m.y,g.y,y.y,v.y,E,T,S),wp.initNonuniformCatmullRom(m.z,g.z,y.z,v.z,E,T,S)}else this.curveType==="catmullrom"&&(bp.initCatmullRom(m.x,g.x,y.x,v.x,this.tension),Ap.initCatmullRom(m.y,g.y,y.y,v.y,this.tension),wp.initCatmullRom(m.z,g.z,y.z,v.z,this.tension));return s.set(bp.calc(p),Ap.calc(p),wp.calc(p)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new F().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ax(r,t,i,s,l){const c=(s-t)*.5,f=(l-i)*.5,d=r*r,p=r*d;return(2*i-2*s+c+f)*p+(-3*i+3*s-2*c-f)*d+c*r+i}function Tb(r,t){const i=1-r;return i*i*t}function bb(r,t){return 2*(1-r)*r*t}function Ab(r,t){return r*r*t}function zl(r,t,i,s){return Tb(r,t)+bb(r,i)+Ab(r,s)}function wb(r,t){const i=1-r;return i*i*i*t}function Cb(r,t){const i=1-r;return 3*i*i*r*t}function Rb(r,t){return 3*(1-r)*r*r*t}function Db(r,t){return r*r*r*t}function Il(r,t,i,s,l){return wb(r,t)+Cb(r,i)+Rb(r,s)+Db(r,l)}class S1 extends fa{constructor(t=new It,i=new It,s=new It,l=new It){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new It){const s=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(Il(t,l.x,c.x,f.x,d.x),Il(t,l.y,c.y,f.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Nb extends fa{constructor(t=new F,i=new F,s=new F,l=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new F){const s=i,l=this.v0,c=this.v1,f=this.v2,d=this.v3;return s.set(Il(t,l.x,c.x,f.x,d.x),Il(t,l.y,c.y,f.y,d.y),Il(t,l.z,c.z,f.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class M1 extends fa{constructor(t=new It,i=new It){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new It){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new It){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ub extends fa{constructor(t=new F,i=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new F){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new F){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class E1 extends fa{constructor(t=new It,i=new It,s=new It){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new It){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(zl(t,l.x,c.x,f.x),zl(t,l.y,c.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class T1 extends fa{constructor(t=new F,i=new F,s=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new F){const s=i,l=this.v0,c=this.v1,f=this.v2;return s.set(zl(t,l.x,c.x,f.x),zl(t,l.y,c.y,f.y),zl(t,l.z,c.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class b1 extends fa{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new It){const s=i,l=this.points,c=(l.length-1)*t,f=Math.floor(c),d=c-f,p=l[f===0?f:f-1],m=l[f],v=l[f>l.length-2?l.length-1:f+1],g=l[f>l.length-3?l.length-1:f+2];return s.set(ax(d,p.x,m.x,v.x,g.x),ax(d,p.y,m.y,v.y,g.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new It().fromArray(l))}return this}}var pf=Object.freeze({__proto__:null,ArcCurve:Eb,CatmullRomCurve3:bm,CubicBezierCurve:S1,CubicBezierCurve3:Nb,EllipseCurve:Km,LineCurve:M1,LineCurve3:Ub,QuadraticBezierCurve:E1,QuadraticBezierCurve3:T1,SplineCurve:b1});class Lb extends fa{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new pf[s](i,t))}return this}getPoint(t,i){const s=t*this.getLength(),l=this.getCurveLengths();let c=0;for(;c<l.length;){if(l[c]>=s){const f=l[c]-s,d=this.curves[c],p=d.getLength(),m=p===0?0:1-f/p;return d.getPointAt(m,i)}c++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let s=0,l=this.curves.length;s<l;s++)i+=this.curves[s].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let s;for(let l=0,c=this.curves;l<c.length;l++){const f=c[l],d=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,p=f.getPoints(d);for(let m=0;m<p.length;m++){const v=p[m];s&&s.equals(v)||(i.push(v),s=v)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,s=this.curves.length;i<s;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(new pf[l.type]().fromJSON(l))}return this}}class sx extends Lb{constructor(t){super(),this.type="Path",this.currentPoint=new It,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,s=t.length;i<s;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const s=new M1(this.currentPoint.clone(),new It(t,i));return this.curves.push(s),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,s,l){const c=new E1(this.currentPoint.clone(),new It(t,i),new It(s,l));return this.curves.push(c),this.currentPoint.set(s,l),this}bezierCurveTo(t,i,s,l,c,f){const d=new S1(this.currentPoint.clone(),new It(t,i),new It(s,l),new It(c,f));return this.curves.push(d),this.currentPoint.set(c,f),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),s=new b1(i);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,s,l,c,f){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(t+d,i+p,s,l,c,f),this}absarc(t,i,s,l,c,f){return this.absellipse(t,i,s,s,l,c,f),this}ellipse(t,i,s,l,c,f,d,p){const m=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(t+m,i+v,s,l,c,f,d,p),this}absellipse(t,i,s,l,c,f,d,p){const m=new Km(t,i,s,l,c,f,d,p);if(this.curves.length>0){const g=m.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(m);const v=m.getPoint(1);return this.currentPoint.copy(v),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class mf extends sx{constructor(t){super(t),this.uuid=lr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const i=[];for(let s=0,l=this.holes.length;s<l;s++)i[s]=this.holes[s].getPoints(t);return i}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let i=0,s=this.holes.length;i<s;i++){const l=this.holes[i];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(new sx().fromJSON(l))}return this}}function Ob(r,t,i=2){const s=t&&t.length,l=s?t[0]*i:r.length;let c=A1(r,0,l,i,!0);const f=[];if(!c||c.next===c.prev)return f;let d,p,m;if(s&&(c=Fb(r,t,c,i)),r.length>80*i){d=1/0,p=1/0;let v=-1/0,g=-1/0;for(let y=i;y<l;y+=i){const x=r[y],E=r[y+1];x<d&&(d=x),E<p&&(p=E),x>v&&(v=x),E>g&&(g=E)}m=Math.max(v-d,g-p),m=m!==0?32767/m:0}return Yl(c,f,i,d,p,m,0),f}function A1(r,t,i,s,l){let c;if(l===Qb(r,t,i,s)>0)for(let f=t;f<i;f+=s)c=rx(f/s|0,r[f],r[f+1],c);else for(let f=i-s;f>=t;f-=s)c=rx(f/s|0,r[f],r[f+1],c);return c&&Eo(c,c.next)&&(jl(c),c=c.next),c}function or(r,t){if(!r)return r;t||(t=r);let i=r,s;do if(s=!1,!i.steiner&&(Eo(i,i.next)||ln(i.prev,i,i.next)===0)){if(jl(i),i=t=i.prev,i===i.next)break;s=!0}else i=i.next;while(s||i!==t);return t}function Yl(r,t,i,s,l,c,f){if(!r)return;!f&&c&&Xb(r,s,l,c);let d=r;for(;r.prev!==r.next;){const p=r.prev,m=r.next;if(c?zb(r,s,l,c):Pb(r)){t.push(p.i,r.i,m.i),jl(r),r=m.next,d=m.next;continue}if(r=m,r===d){f?f===1?(r=Ib(or(r),t),Yl(r,t,i,s,l,c,2)):f===2&&Bb(r,t,i,s,l,c):Yl(or(r),t,i,s,l,c,1);break}}}function Pb(r){const t=r.prev,i=r,s=r.next;if(ln(t,i,s)>=0)return!1;const l=t.x,c=i.x,f=s.x,d=t.y,p=i.y,m=s.y,v=Math.min(l,c,f),g=Math.min(d,p,m),y=Math.max(l,c,f),x=Math.max(d,p,m);let E=s.next;for(;E!==t;){if(E.x>=v&&E.x<=y&&E.y>=g&&E.y<=x&&Ul(l,d,c,p,f,m,E.x,E.y)&&ln(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function zb(r,t,i,s){const l=r.prev,c=r,f=r.next;if(ln(l,c,f)>=0)return!1;const d=l.x,p=c.x,m=f.x,v=l.y,g=c.y,y=f.y,x=Math.min(d,p,m),E=Math.min(v,g,y),T=Math.max(d,p,m),S=Math.max(v,g,y),_=Am(x,E,t,i,s),w=Am(T,S,t,i,s);let D=r.prevZ,b=r.nextZ;for(;D&&D.z>=_&&b&&b.z<=w;){if(D.x>=x&&D.x<=T&&D.y>=E&&D.y<=S&&D!==l&&D!==f&&Ul(d,v,p,g,m,y,D.x,D.y)&&ln(D.prev,D,D.next)>=0||(D=D.prevZ,b.x>=x&&b.x<=T&&b.y>=E&&b.y<=S&&b!==l&&b!==f&&Ul(d,v,p,g,m,y,b.x,b.y)&&ln(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;D&&D.z>=_;){if(D.x>=x&&D.x<=T&&D.y>=E&&D.y<=S&&D!==l&&D!==f&&Ul(d,v,p,g,m,y,D.x,D.y)&&ln(D.prev,D,D.next)>=0)return!1;D=D.prevZ}for(;b&&b.z<=w;){if(b.x>=x&&b.x<=T&&b.y>=E&&b.y<=S&&b!==l&&b!==f&&Ul(d,v,p,g,m,y,b.x,b.y)&&ln(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Ib(r,t){let i=r;do{const s=i.prev,l=i.next.next;!Eo(s,l)&&C1(s,i,i.next,l)&&Wl(s,l)&&Wl(l,s)&&(t.push(s.i,i.i,l.i),jl(i),jl(i.next),i=r=l),i=i.next}while(i!==r);return or(i)}function Bb(r,t,i,s,l,c){let f=r;do{let d=f.next.next;for(;d!==f.prev;){if(f.i!==d.i&&Wb(f,d)){let p=R1(f,d);f=or(f,f.next),p=or(p,p.next),Yl(f,t,i,s,l,c,0),Yl(p,t,i,s,l,c,0);return}d=d.next}f=f.next}while(f!==r)}function Fb(r,t,i,s){const l=[];for(let c=0,f=t.length;c<f;c++){const d=t[c]*s,p=c<f-1?t[c+1]*s:r.length,m=A1(r,d,p,s,!1);m===m.next&&(m.steiner=!0),l.push(Yb(m))}l.sort(Hb);for(let c=0;c<l.length;c++)i=Gb(l[c],i);return i}function Hb(r,t){let i=r.x-t.x;if(i===0&&(i=r.y-t.y,i===0)){const s=(r.next.y-r.y)/(r.next.x-r.x),l=(t.next.y-t.y)/(t.next.x-t.x);i=s-l}return i}function Gb(r,t){const i=Vb(r,t);if(!i)return t;const s=R1(i,r);return or(s,s.next),or(i,i.next)}function Vb(r,t){let i=t;const s=r.x,l=r.y;let c=-1/0,f;if(Eo(r,i))return i;do{if(Eo(r,i.next))return i.next;if(l<=i.y&&l>=i.next.y&&i.next.y!==i.y){const g=i.x+(l-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(g<=s&&g>c&&(c=g,f=i.x<i.next.x?i:i.next,g===s))return f}i=i.next}while(i!==t);if(!f)return null;const d=f,p=f.x,m=f.y;let v=1/0;i=f;do{if(s>=i.x&&i.x>=p&&s!==i.x&&w1(l<m?s:c,l,p,m,l<m?c:s,l,i.x,i.y)){const g=Math.abs(l-i.y)/(s-i.x);Wl(i,r)&&(g<v||g===v&&(i.x>f.x||i.x===f.x&&kb(f,i)))&&(f=i,v=g)}i=i.next}while(i!==d);return f}function kb(r,t){return ln(r.prev,r,t.prev)<0&&ln(t.next,r,r.next)<0}function Xb(r,t,i,s){let l=r;do l.z===0&&(l.z=Am(l.x,l.y,t,i,s)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==r);l.prevZ.nextZ=null,l.prevZ=null,qb(l)}function qb(r){let t,i=1;do{let s=r,l;r=null;let c=null;for(t=0;s;){t++;let f=s,d=0;for(let m=0;m<i&&(d++,f=f.nextZ,!!f);m++);let p=i;for(;d>0||p>0&&f;)d!==0&&(p===0||!f||s.z<=f.z)?(l=s,s=s.nextZ,d--):(l=f,f=f.nextZ,p--),c?c.nextZ=l:r=l,l.prevZ=c,c=l;s=f}c.nextZ=null,i*=2}while(t>1);return r}function Am(r,t,i,s,l){return r=(r-i)*l|0,t=(t-s)*l|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function Yb(r){let t=r,i=r;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==r);return i}function w1(r,t,i,s,l,c,f,d){return(l-f)*(t-d)>=(r-f)*(c-d)&&(r-f)*(s-d)>=(i-f)*(t-d)&&(i-f)*(c-d)>=(l-f)*(s-d)}function Ul(r,t,i,s,l,c,f,d){return!(r===f&&t===d)&&w1(r,t,i,s,l,c,f,d)}function Wb(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!jb(r,t)&&(Wl(r,t)&&Wl(t,r)&&Zb(r,t)&&(ln(r.prev,r,t.prev)||ln(r,t.prev,t))||Eo(r,t)&&ln(r.prev,r,r.next)>0&&ln(t.prev,t,t.next)>0)}function ln(r,t,i){return(t.y-r.y)*(i.x-t.x)-(t.x-r.x)*(i.y-t.y)}function Eo(r,t){return r.x===t.x&&r.y===t.y}function C1(r,t,i,s){const l=Yu(ln(r,t,i)),c=Yu(ln(r,t,s)),f=Yu(ln(i,s,r)),d=Yu(ln(i,s,t));return!!(l!==c&&f!==d||l===0&&qu(r,i,t)||c===0&&qu(r,s,t)||f===0&&qu(i,r,s)||d===0&&qu(i,t,s))}function qu(r,t,i){return t.x<=Math.max(r.x,i.x)&&t.x>=Math.min(r.x,i.x)&&t.y<=Math.max(r.y,i.y)&&t.y>=Math.min(r.y,i.y)}function Yu(r){return r>0?1:r<0?-1:0}function jb(r,t){let i=r;do{if(i.i!==r.i&&i.next.i!==r.i&&i.i!==t.i&&i.next.i!==t.i&&C1(i,i.next,r,t))return!0;i=i.next}while(i!==r);return!1}function Wl(r,t){return ln(r.prev,r,r.next)<0?ln(r,t,r.next)>=0&&ln(r,r.prev,t)>=0:ln(r,t,r.prev)<0||ln(r,r.next,t)<0}function Zb(r,t){let i=r,s=!1;const l=(r.x+t.x)/2,c=(r.y+t.y)/2;do i.y>c!=i.next.y>c&&i.next.y!==i.y&&l<(i.next.x-i.x)*(c-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==r);return s}function R1(r,t){const i=wm(r.i,r.x,r.y),s=wm(t.i,t.x,t.y),l=r.next,c=t.prev;return r.next=t,t.prev=r,i.next=l,l.prev=i,s.next=i,i.prev=s,c.next=s,s.prev=c,s}function rx(r,t,i,s){const l=wm(r,t,i);return s?(l.next=s.next,l.prev=s,s.next.prev=l,s.next=l):(l.prev=l,l.next=l),l}function jl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function wm(r,t,i){return{i:r,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qb(r,t,i,s){let l=0;for(let c=t,f=i-s;c<i;c+=s)l+=(r[f]-r[c])*(r[c+1]+r[f+1]),f=c;return l}class Kb{static triangulate(t,i,s=2){return Ob(t,i,s)}}class po{static area(t){const i=t.length;let s=0;for(let l=i-1,c=0;c<i;l=c++)s+=t[l].x*t[c].y-t[c].x*t[l].y;return s*.5}static isClockWise(t){return po.area(t)<0}static triangulateShape(t,i){const s=[],l=[],c=[];ox(t),lx(s,t);let f=t.length;i.forEach(ox);for(let p=0;p<i.length;p++)l.push(f),f+=i[p].length,lx(s,i[p]);const d=Kb.triangulate(s,l);for(let p=0;p<d.length;p+=3)c.push(d.slice(p,p+3));return c}}function ox(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function lx(r,t){for(let i=0;i<t.length;i++)r.push(t[i].x),r.push(t[i].y)}class Zl extends pn{constructor(t=new mf([new It(.5,.5),new It(-.5,.5),new It(-.5,-.5),new It(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];const s=this,l=[],c=[];for(let d=0,p=t.length;d<p;d++){const m=t[d];f(m)}this.setAttribute("position",new Ge(l,3)),this.setAttribute("uv",new Ge(c,2)),this.computeVertexNormals();function f(d){const p=[],m=i.curveSegments!==void 0?i.curveSegments:12,v=i.steps!==void 0?i.steps:1,g=i.depth!==void 0?i.depth:1;let y=i.bevelEnabled!==void 0?i.bevelEnabled:!0,x=i.bevelThickness!==void 0?i.bevelThickness:.2,E=i.bevelSize!==void 0?i.bevelSize:x-.1,T=i.bevelOffset!==void 0?i.bevelOffset:0,S=i.bevelSegments!==void 0?i.bevelSegments:3;const _=i.extrudePath,w=i.UVGenerator!==void 0?i.UVGenerator:Jb;let D,b=!1,V,H,P,O;_&&(D=_.getSpacedPoints(v),b=!0,y=!1,V=_.computeFrenetFrames(v,!1),H=new F,P=new F,O=new F),y||(S=0,x=0,E=0,T=0);const C=d.extractPoints(m);let A=C.shape;const G=C.holes;if(!po.isClockWise(A)){A=A.reverse();for(let Mt=0,yt=G.length;Mt<yt;Mt++){const ct=G[Mt];po.isClockWise(ct)&&(G[Mt]=ct.reverse())}}function Z(Mt){const ct=10000000000000001e-36;let ht=Mt[0];for(let At=1;At<=Mt.length;At++){const Dt=At%Mt.length,Ot=Mt[Dt],re=Ot.x-ht.x,se=Ot.y-ht.y,B=re*re+se*se,R=Math.max(Math.abs(Ot.x),Math.abs(Ot.y),Math.abs(ht.x),Math.abs(ht.y)),ot=ct*R*R;if(B<=ot){Mt.splice(Dt,1),At--;continue}ht=Ot}}Z(A),G.forEach(Z);const it=G.length,j=A;for(let Mt=0;Mt<it;Mt++){const yt=G[Mt];A=A.concat(yt)}function k(Mt,yt,ct){return yt||console.error("THREE.ExtrudeGeometry: vec does not exist"),Mt.clone().addScaledVector(yt,ct)}const U=A.length;function z(Mt,yt,ct){let ht,At,Dt;const Ot=Mt.x-yt.x,re=Mt.y-yt.y,se=ct.x-Mt.x,B=ct.y-Mt.y,R=Ot*Ot+re*re,ot=Ot*B-re*se;if(Math.abs(ot)>Number.EPSILON){const _t=Math.sqrt(R),Ut=Math.sqrt(se*se+B*B),Tt=yt.x-re/_t,Qt=yt.y+Ot/_t,Pt=ct.x-B/Ut,te=ct.y+se/Ut,ee=((Pt-Tt)*B-(te-Qt)*se)/(Ot*B-re*se);ht=Tt+Ot*ee-Mt.x,At=Qt+re*ee-Mt.y;const zt=ht*ht+At*At;if(zt<=2)return new It(ht,At);Dt=Math.sqrt(zt/2)}else{let _t=!1;Ot>Number.EPSILON?se>Number.EPSILON&&(_t=!0):Ot<-Number.EPSILON?se<-Number.EPSILON&&(_t=!0):Math.sign(re)===Math.sign(B)&&(_t=!0),_t?(ht=-re,At=Ot,Dt=Math.sqrt(R)):(ht=Ot,At=re,Dt=Math.sqrt(R/2))}return new It(ht/Dt,At/Dt)}const $=[];for(let Mt=0,yt=j.length,ct=yt-1,ht=Mt+1;Mt<yt;Mt++,ct++,ht++)ct===yt&&(ct=0),ht===yt&&(ht=0),$[Mt]=z(j[Mt],j[ct],j[ht]);const mt=[];let Nt,Xt=$.concat();for(let Mt=0,yt=it;Mt<yt;Mt++){const ct=G[Mt];Nt=[];for(let ht=0,At=ct.length,Dt=At-1,Ot=ht+1;ht<At;ht++,Dt++,Ot++)Dt===At&&(Dt=0),Ot===At&&(Ot=0),Nt[ht]=z(ct[ht],ct[Dt],ct[Ot]);mt.push(Nt),Xt=Xt.concat(Nt)}let Zt;if(S===0)Zt=po.triangulateShape(j,G);else{const Mt=[],yt=[];for(let ct=0;ct<S;ct++){const ht=ct/S,At=x*Math.cos(ht*Math.PI/2),Dt=E*Math.sin(ht*Math.PI/2)+T;for(let Ot=0,re=j.length;Ot<re;Ot++){const se=k(j[Ot],$[Ot],Dt);Rt(se.x,se.y,-At),ht===0&&Mt.push(se)}for(let Ot=0,re=it;Ot<re;Ot++){const se=G[Ot];Nt=mt[Ot];const B=[];for(let R=0,ot=se.length;R<ot;R++){const _t=k(se[R],Nt[R],Dt);Rt(_t.x,_t.y,-At),ht===0&&B.push(_t)}ht===0&&yt.push(B)}}Zt=po.triangulateShape(Mt,yt)}const X=Zt.length,ut=E+T;for(let Mt=0;Mt<U;Mt++){const yt=y?k(A[Mt],Xt[Mt],ut):A[Mt];b?(P.copy(V.normals[0]).multiplyScalar(yt.x),H.copy(V.binormals[0]).multiplyScalar(yt.y),O.copy(D[0]).add(P).add(H),Rt(O.x,O.y,O.z)):Rt(yt.x,yt.y,0)}for(let Mt=1;Mt<=v;Mt++)for(let yt=0;yt<U;yt++){const ct=y?k(A[yt],Xt[yt],ut):A[yt];b?(P.copy(V.normals[Mt]).multiplyScalar(ct.x),H.copy(V.binormals[Mt]).multiplyScalar(ct.y),O.copy(D[Mt]).add(P).add(H),Rt(O.x,O.y,O.z)):Rt(ct.x,ct.y,g/v*Mt)}for(let Mt=S-1;Mt>=0;Mt--){const yt=Mt/S,ct=x*Math.cos(yt*Math.PI/2),ht=E*Math.sin(yt*Math.PI/2)+T;for(let At=0,Dt=j.length;At<Dt;At++){const Ot=k(j[At],$[At],ht);Rt(Ot.x,Ot.y,g+ct)}for(let At=0,Dt=G.length;At<Dt;At++){const Ot=G[At];Nt=mt[At];for(let re=0,se=Ot.length;re<se;re++){const B=k(Ot[re],Nt[re],ht);b?Rt(B.x,B.y+D[v-1].y,D[v-1].x+ct):Rt(B.x,B.y,g+ct)}}}J(),W();function J(){const Mt=l.length/3;if(y){let yt=0,ct=U*yt;for(let ht=0;ht<X;ht++){const At=Zt[ht];dt(At[2]+ct,At[1]+ct,At[0]+ct)}yt=v+S*2,ct=U*yt;for(let ht=0;ht<X;ht++){const At=Zt[ht];dt(At[0]+ct,At[1]+ct,At[2]+ct)}}else{for(let yt=0;yt<X;yt++){const ct=Zt[yt];dt(ct[2],ct[1],ct[0])}for(let yt=0;yt<X;yt++){const ct=Zt[yt];dt(ct[0]+U*v,ct[1]+U*v,ct[2]+U*v)}}s.addGroup(Mt,l.length/3-Mt,0)}function W(){const Mt=l.length/3;let yt=0;Et(j,yt),yt+=j.length;for(let ct=0,ht=G.length;ct<ht;ct++){const At=G[ct];Et(At,yt),yt+=At.length}s.addGroup(Mt,l.length/3-Mt,1)}function Et(Mt,yt){let ct=Mt.length;for(;--ct>=0;){const ht=ct;let At=ct-1;At<0&&(At=Mt.length-1);for(let Dt=0,Ot=v+S*2;Dt<Ot;Dt++){const re=U*Dt,se=U*(Dt+1),B=yt+ht+re,R=yt+At+re,ot=yt+At+se,_t=yt+ht+se;bt(B,R,ot,_t)}}}function Rt(Mt,yt,ct){p.push(Mt),p.push(yt),p.push(ct)}function dt(Mt,yt,ct){vt(Mt),vt(yt),vt(ct);const ht=l.length/3,At=w.generateTopUV(s,l,ht-3,ht-2,ht-1);I(At[0]),I(At[1]),I(At[2])}function bt(Mt,yt,ct,ht){vt(Mt),vt(yt),vt(ht),vt(yt),vt(ct),vt(ht);const At=l.length/3,Dt=w.generateSideWallUV(s,l,At-6,At-3,At-2,At-1);I(Dt[0]),I(Dt[1]),I(Dt[3]),I(Dt[1]),I(Dt[2]),I(Dt[3])}function vt(Mt){l.push(p[Mt*3+0]),l.push(p[Mt*3+1]),l.push(p[Mt*3+2])}function I(Mt){c.push(Mt.x),c.push(Mt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes,s=this.parameters.options;return $b(i,s,t)}static fromJSON(t,i){const s=[];for(let c=0,f=t.shapes.length;c<f;c++){const d=i[t.shapes[c]];s.push(d)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new pf[l.type]().fromJSON(l)),new Zl(s,t.options)}}const Jb={generateTopUV:function(r,t,i,s,l){const c=t[i*3],f=t[i*3+1],d=t[s*3],p=t[s*3+1],m=t[l*3],v=t[l*3+1];return[new It(c,f),new It(d,p),new It(m,v)]},generateSideWallUV:function(r,t,i,s,l,c){const f=t[i*3],d=t[i*3+1],p=t[i*3+2],m=t[s*3],v=t[s*3+1],g=t[s*3+2],y=t[l*3],x=t[l*3+1],E=t[l*3+2],T=t[c*3],S=t[c*3+1],_=t[c*3+2];return Math.abs(d-v)<Math.abs(f-m)?[new It(f,1-p),new It(m,1-g),new It(y,1-E),new It(T,1-_)]:[new It(d,1-p),new It(v,1-g),new It(x,1-E),new It(S,1-_)]}};function $b(r,t,i){if(i.shapes=[],Array.isArray(r))for(let s=0,l=r.length;s<l;s++){const c=r[s];i.shapes.push(c.uuid)}else i.shapes.push(r.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}class $m extends Qm{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,c,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new $m(t.radius,t.detail)}}class Ia extends pn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const c=t/2,f=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,v=p+1,g=t/d,y=i/p,x=[],E=[],T=[],S=[];for(let _=0;_<v;_++){const w=_*y-f;for(let D=0;D<m;D++){const b=D*g-c;E.push(b,-w,0),T.push(0,0,1),S.push(D/d),S.push(1-_/p)}}for(let _=0;_<p;_++)for(let w=0;w<d;w++){const D=w+m*_,b=w+m*(_+1),V=w+1+m*(_+1),H=w+1+m*_;x.push(D,b,H),x.push(b,V,H)}this.setIndex(x),this.setAttribute("position",new Ge(E,3)),this.setAttribute("normal",new Ge(T,3)),this.setAttribute("uv",new Ge(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ia(t.width,t.height,t.widthSegments,t.heightSegments)}}class t0 extends pn{constructor(t=.5,i=1,s=32,l=1,c=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:c,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const d=[],p=[],m=[],v=[];let g=t;const y=(i-t)/l,x=new F,E=new It;for(let T=0;T<=l;T++){for(let S=0;S<=s;S++){const _=c+S/s*f;x.x=g*Math.cos(_),x.y=g*Math.sin(_),p.push(x.x,x.y,x.z),m.push(0,0,1),E.x=(x.x/i+1)/2,E.y=(x.y/i+1)/2,v.push(E.x,E.y)}g+=y}for(let T=0;T<l;T++){const S=T*(s+1);for(let _=0;_<s;_++){const w=_+S,D=w,b=w+s+1,V=w+s+2,H=w+1;d.push(D,b,H),d.push(b,V,H)}}this.setIndex(d),this.setAttribute("position",new Ge(p,3)),this.setAttribute("normal",new Ge(m,3)),this.setAttribute("uv",new Ge(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new t0(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Wi extends pn{constructor(t=1,i=32,s=16,l=0,c=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(f+d,Math.PI);let m=0;const v=[],g=new F,y=new F,x=[],E=[],T=[],S=[];for(let _=0;_<=s;_++){const w=[],D=_/s;let b=0;_===0&&f===0?b=.5/i:_===s&&p===Math.PI&&(b=-.5/i);for(let V=0;V<=i;V++){const H=V/i;g.x=-t*Math.cos(l+H*c)*Math.sin(f+D*d),g.y=t*Math.cos(f+D*d),g.z=t*Math.sin(l+H*c)*Math.sin(f+D*d),E.push(g.x,g.y,g.z),y.copy(g).normalize(),T.push(y.x,y.y,y.z),S.push(H+b,1-D),w.push(m++)}v.push(w)}for(let _=0;_<s;_++)for(let w=0;w<i;w++){const D=v[_][w+1],b=v[_][w],V=v[_+1][w],H=v[_+1][w+1];(_!==0||f>0)&&x.push(D,b,H),(_!==s-1||p<Math.PI)&&x.push(b,V,H)}this.setIndex(x),this.setAttribute("position",new Ge(E,3)),this.setAttribute("normal",new Ge(T,3)),this.setAttribute("uv",new Ge(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wi(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class e0 extends pn{constructor(t=1,i=.4,s=12,l=48,c=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:c},s=Math.floor(s),l=Math.floor(l);const f=[],d=[],p=[],m=[],v=new F,g=new F,y=new F;for(let x=0;x<=s;x++)for(let E=0;E<=l;E++){const T=E/l*c,S=x/s*Math.PI*2;g.x=(t+i*Math.cos(S))*Math.cos(T),g.y=(t+i*Math.cos(S))*Math.sin(T),g.z=i*Math.sin(S),d.push(g.x,g.y,g.z),v.x=t*Math.cos(T),v.y=t*Math.sin(T),y.subVectors(g,v).normalize(),p.push(y.x,y.y,y.z),m.push(E/l),m.push(x/s)}for(let x=1;x<=s;x++)for(let E=1;E<=l;E++){const T=(l+1)*x+E-1,S=(l+1)*(x-1)+E-1,_=(l+1)*(x-1)+E,w=(l+1)*x+E;f.push(T,S,w),f.push(S,_,w)}this.setIndex(f),this.setAttribute("position",new Ge(d,3)),this.setAttribute("normal",new Ge(p,3)),this.setAttribute("uv",new Ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new e0(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class gf extends pn{constructor(t=new T1(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),i=64,s=1,l=8,c=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:l,closed:c};const f=t.computeFrenetFrames(i,c);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const d=new F,p=new F,m=new It;let v=new F;const g=[],y=[],x=[],E=[];T(),this.setIndex(E),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(y,3)),this.setAttribute("uv",new Ge(x,2));function T(){for(let D=0;D<i;D++)S(D);S(c===!1?i:0),w(),_()}function S(D){v=t.getPointAt(D/i,v);const b=f.normals[D],V=f.binormals[D];for(let H=0;H<=l;H++){const P=H/l*Math.PI*2,O=Math.sin(P),C=-Math.cos(P);p.x=C*b.x+O*V.x,p.y=C*b.y+O*V.y,p.z=C*b.z+O*V.z,p.normalize(),y.push(p.x,p.y,p.z),d.x=v.x+s*p.x,d.y=v.y+s*p.y,d.z=v.z+s*p.z,g.push(d.x,d.y,d.z)}}function _(){for(let D=1;D<=i;D++)for(let b=1;b<=l;b++){const V=(l+1)*(D-1)+(b-1),H=(l+1)*D+(b-1),P=(l+1)*D+b,O=(l+1)*(D-1)+b;E.push(V,H,O),E.push(H,P,O)}}function w(){for(let D=0;D<=i;D++)for(let b=0;b<=l;b++)m.x=D/i,m.y=b/l,x.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new gf(new pf[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class tA extends en{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class mo extends ur{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=r1,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class eA extends ur{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class nA extends ur{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class n0 extends Mn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new le(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class iA extends n0{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new le(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Cp=new Oe,cx=new F,ux=new F;class D1{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new Oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yf,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;cx.setFromMatrixPosition(t.matrixWorld),i.position.copy(cx),ux.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(ux),i.updateMatrixWorld(),Cp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cp,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Cp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const fx=new Oe,Cl=new F,Rp=new F;class aA extends D1{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new F(1,0,0),new F(-1,0,0),new F(0,0,1),new F(0,0,-1),new F(0,1,0),new F(0,-1,0)],this._cubeUps=[new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,1,0),new F(0,0,1),new F(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,c=t.distance||s.far;c!==s.far&&(s.far=c,s.updateProjectionMatrix()),Cl.setFromMatrixPosition(t.matrixWorld),s.position.copy(Cl),Rp.copy(s.position),Rp.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(Rp),s.updateMatrixWorld(),l.makeTranslation(-Cl.x,-Cl.y,-Cl.z),fx.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fx,s.coordinateSystem,s.reversedDepth)}}class Cm extends n0{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new aA}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class i0 extends m1{constructor(t=-1,i=1,s=1,l=-1,c=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,c,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-t,f=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,f=c+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(c,f,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class sA extends D1{constructor(){super(new i0(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hx extends n0{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new sA}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class rA extends si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class N1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function dx(r,t,i,s){const l=oA(s);switch(i){case i1:return r*t;case Gm:return r*t/l.components*l.byteLength;case Vm:return r*t/l.components*l.byteLength;case s1:return r*t*2/l.components*l.byteLength;case km:return r*t*2/l.components*l.byteLength;case a1:return r*t*3/l.components*l.byteLength;case Yi:return r*t*4/l.components*l.byteLength;case Xm:return r*t*4/l.components*l.byteLength;case tf:case ef:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case nf:case af:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Kp:case $p:return Math.max(r,16)*Math.max(t,8)/4;case Qp:case Jp:return Math.max(r,8)*Math.max(t,8)/2;case tm:case em:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case nm:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case im:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case am:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case sm:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case rm:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case om:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case lm:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case cm:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case um:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case fm:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case hm:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case dm:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case pm:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case mm:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case gm:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case vm:case _m:case ym:return Math.ceil(r/4)*Math.ceil(t/4)*16;case xm:case Sm:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Mm:case Em:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function oA(r){switch(r){case Pi:case $x:return{byteLength:1,components:1};case Fl:case t1:case Oi:return{byteLength:2,components:1};case Fm:case Hm:return{byteLength:2,components:4};case ar:case Bm:case la:return{byteLength:4,components:1};case e1:case n1:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:zm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=zm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function U1(){let r=null,t=!1,i=null,s=null;function l(c,f){i(c,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function lA(r){const t=new WeakMap;function i(d,p){const m=d.array,v=d.usage,g=m.byteLength,y=r.createBuffer();r.bindBuffer(p,y),r.bufferData(p,m,v),d.onUploadCallback();let x;if(m instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)x=r.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)x=r.SHORT;else if(m instanceof Uint32Array)x=r.UNSIGNED_INT;else if(m instanceof Int32Array)x=r.INT;else if(m instanceof Int8Array)x=r.BYTE;else if(m instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:x,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,p,m){const v=p.array,g=p.updateRanges;if(r.bindBuffer(m,d),g.length===0)r.bufferSubData(m,0,v);else{g.sort((x,E)=>x.start-E.start);let y=0;for(let x=1;x<g.length;x++){const E=g[y],T=g[x];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++y,g[y]=T)}g.length=y+1;for(let x=0,E=g.length;x<E;x++){const T=g[x];r.bufferSubData(m,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(r.deleteBuffer(p.buffer),t.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:f}}var cA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uA=`#ifdef USE_ALPHAHASH
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
#endif`,fA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mA=`#ifdef USE_AOMAP
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
#endif`,gA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,vA=`#ifdef USE_BATCHING
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
#endif`,_A=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,yA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,SA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,MA=`#ifdef USE_IRIDESCENCE
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
#endif`,EA=`#ifdef USE_BUMPMAP
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
#endif`,TA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,AA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,CA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,RA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,DA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,NA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,UA=`#define PI 3.141592653589793
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
} // validated`,LA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,OA=`vec3 transformedNormal = objectNormal;
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
#endif`,PA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,IA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,BA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FA="gl_FragColor = linearToOutputTexel( gl_FragColor );",HA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,GA=`#ifdef USE_ENVMAP
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
#endif`,VA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kA=`#ifdef USE_ENVMAP
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
#endif`,XA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qA=`#ifdef USE_ENVMAP
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
#endif`,YA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,WA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,jA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ZA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QA=`#ifdef USE_GRADIENTMAP
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
}`,KA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,JA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$A=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,t2=`uniform bool receiveShadow;
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
#endif`,e2=`#ifdef USE_ENVMAP
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
#endif`,n2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,i2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,a2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,s2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,r2=`PhysicalMaterial material;
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
#endif`,o2=`struct PhysicalMaterial {
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
}`,l2=`
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
#endif`,c2=`#if defined( RE_IndirectDiffuse )
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
#endif`,u2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,f2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,h2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,d2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,p2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,m2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,g2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,v2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_2=`#if defined( USE_POINTS_UV )
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
#endif`,y2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,x2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,S2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,M2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,E2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,T2=`#ifdef USE_MORPHTARGETS
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
#endif`,b2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,A2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,w2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,C2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,R2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,N2=`#ifdef USE_NORMALMAP
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
#endif`,U2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,L2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,O2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,P2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,I2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,B2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,F2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,G2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,V2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,k2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,X2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,q2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,W2=`float getShadowMask() {
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
}`,j2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Z2=`#ifdef USE_SKINNING
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
#endif`,Q2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,K2=`#ifdef USE_SKINNING
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
#endif`,J2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,$2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ew=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,nw=`#ifdef USE_TRANSMISSION
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
#endif`,iw=`#ifdef USE_TRANSMISSION
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
#endif`,aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ow=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cw=`uniform sampler2D t2D;
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
}`,uw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pw=`#include <common>
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
}`,mw=`#if DEPTH_PACKING == 3200
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
}`,gw=`#define DISTANCE
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
}`,vw=`#define DISTANCE
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
}`,_w=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,yw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xw=`uniform float scale;
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
}`,Sw=`uniform vec3 diffuse;
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
}`,Mw=`#include <common>
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
}`,Ew=`uniform vec3 diffuse;
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
}`,Tw=`#define LAMBERT
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
}`,bw=`#define LAMBERT
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
}`,Aw=`#define MATCAP
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
}`,ww=`#define MATCAP
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
}`,Cw=`#define NORMAL
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
}`,Rw=`#define NORMAL
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
}`,Dw=`#define PHONG
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
}`,Nw=`#define PHONG
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
}`,Uw=`#define STANDARD
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
}`,Lw=`#define STANDARD
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
}`,Ow=`#define TOON
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
}`,Pw=`#define TOON
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
}`,zw=`uniform float size;
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
}`,Iw=`uniform vec3 diffuse;
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
}`,Bw=`#include <common>
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
}`,Fw=`uniform vec3 color;
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
}`,Hw=`uniform float rotation;
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
}`,Gw=`uniform vec3 diffuse;
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
}`,Me={alphahash_fragment:cA,alphahash_pars_fragment:uA,alphamap_fragment:fA,alphamap_pars_fragment:hA,alphatest_fragment:dA,alphatest_pars_fragment:pA,aomap_fragment:mA,aomap_pars_fragment:gA,batching_pars_vertex:vA,batching_vertex:_A,begin_vertex:yA,beginnormal_vertex:xA,bsdfs:SA,iridescence_fragment:MA,bumpmap_pars_fragment:EA,clipping_planes_fragment:TA,clipping_planes_pars_fragment:bA,clipping_planes_pars_vertex:AA,clipping_planes_vertex:wA,color_fragment:CA,color_pars_fragment:RA,color_pars_vertex:DA,color_vertex:NA,common:UA,cube_uv_reflection_fragment:LA,defaultnormal_vertex:OA,displacementmap_pars_vertex:PA,displacementmap_vertex:zA,emissivemap_fragment:IA,emissivemap_pars_fragment:BA,colorspace_fragment:FA,colorspace_pars_fragment:HA,envmap_fragment:GA,envmap_common_pars_fragment:VA,envmap_pars_fragment:kA,envmap_pars_vertex:XA,envmap_physical_pars_fragment:e2,envmap_vertex:qA,fog_vertex:YA,fog_pars_vertex:WA,fog_fragment:jA,fog_pars_fragment:ZA,gradientmap_pars_fragment:QA,lightmap_pars_fragment:KA,lights_lambert_fragment:JA,lights_lambert_pars_fragment:$A,lights_pars_begin:t2,lights_toon_fragment:n2,lights_toon_pars_fragment:i2,lights_phong_fragment:a2,lights_phong_pars_fragment:s2,lights_physical_fragment:r2,lights_physical_pars_fragment:o2,lights_fragment_begin:l2,lights_fragment_maps:c2,lights_fragment_end:u2,logdepthbuf_fragment:f2,logdepthbuf_pars_fragment:h2,logdepthbuf_pars_vertex:d2,logdepthbuf_vertex:p2,map_fragment:m2,map_pars_fragment:g2,map_particle_fragment:v2,map_particle_pars_fragment:_2,metalnessmap_fragment:y2,metalnessmap_pars_fragment:x2,morphinstance_vertex:S2,morphcolor_vertex:M2,morphnormal_vertex:E2,morphtarget_pars_vertex:T2,morphtarget_vertex:b2,normal_fragment_begin:A2,normal_fragment_maps:w2,normal_pars_fragment:C2,normal_pars_vertex:R2,normal_vertex:D2,normalmap_pars_fragment:N2,clearcoat_normal_fragment_begin:U2,clearcoat_normal_fragment_maps:L2,clearcoat_pars_fragment:O2,iridescence_pars_fragment:P2,opaque_fragment:z2,packing:I2,premultiplied_alpha_fragment:B2,project_vertex:F2,dithering_fragment:H2,dithering_pars_fragment:G2,roughnessmap_fragment:V2,roughnessmap_pars_fragment:k2,shadowmap_pars_fragment:X2,shadowmap_pars_vertex:q2,shadowmap_vertex:Y2,shadowmask_pars_fragment:W2,skinbase_vertex:j2,skinning_pars_vertex:Z2,skinning_vertex:Q2,skinnormal_vertex:K2,specularmap_fragment:J2,specularmap_pars_fragment:$2,tonemapping_fragment:tw,tonemapping_pars_fragment:ew,transmission_fragment:nw,transmission_pars_fragment:iw,uv_pars_fragment:aw,uv_pars_vertex:sw,uv_vertex:rw,worldpos_vertex:ow,background_vert:lw,background_frag:cw,backgroundCube_vert:uw,backgroundCube_frag:fw,cube_vert:hw,cube_frag:dw,depth_vert:pw,depth_frag:mw,distanceRGBA_vert:gw,distanceRGBA_frag:vw,equirect_vert:_w,equirect_frag:yw,linedashed_vert:xw,linedashed_frag:Sw,meshbasic_vert:Mw,meshbasic_frag:Ew,meshlambert_vert:Tw,meshlambert_frag:bw,meshmatcap_vert:Aw,meshmatcap_frag:ww,meshnormal_vert:Cw,meshnormal_frag:Rw,meshphong_vert:Dw,meshphong_frag:Nw,meshphysical_vert:Uw,meshphysical_frag:Lw,meshtoon_vert:Ow,meshtoon_frag:Pw,points_vert:zw,points_frag:Iw,shadow_vert:Bw,shadow_frag:Fw,sprite_vert:Hw,sprite_frag:Gw},jt={common:{diffuse:{value:new le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ye}},envmap:{envMap:{value:null},envMapRotation:{value:new ye},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ye}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ye}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ye},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ye},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ye},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ye}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ye}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ye}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0},uvTransform:{value:new ye}},sprite:{diffuse:{value:new le(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ye},alphaMap:{value:null},alphaMapTransform:{value:new ye},alphaTest:{value:0}}},ra={basic:{uniforms:$n([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:$n([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new le(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:$n([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new le(0)},specular:{value:new le(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:$n([jt.common,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.roughnessmap,jt.metalnessmap,jt.fog,jt.lights,{emissive:{value:new le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:$n([jt.common,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.gradientmap,jt.fog,jt.lights,{emissive:{value:new le(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:$n([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:$n([jt.points,jt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:$n([jt.common,jt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:$n([jt.common,jt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:$n([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:$n([jt.sprite,jt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new ye},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ye}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distanceRGBA:{uniforms:$n([jt.common,jt.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distanceRGBA_vert,fragmentShader:Me.distanceRGBA_frag},shadow:{uniforms:$n([jt.lights,jt.fog,{color:{value:new le(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};ra.physical={uniforms:$n([ra.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ye},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ye},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ye},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ye},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ye},sheen:{value:0},sheenColor:{value:new le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ye},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ye},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ye},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ye},attenuationDistance:{value:0},attenuationColor:{value:new le(0)},specularColor:{value:new le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ye},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ye},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ye}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const Wu={r:0,b:0,g:0},Zs=new ri,Vw=new Oe;function kw(r,t,i,s,l,c,f){const d=new le(0);let p=c===!0?0:1,m,v,g=null,y=0,x=null;function E(D){let b=D.isScene===!0?D.background:null;return b&&b.isTexture&&(b=(D.backgroundBlurriness>0?i:t).get(b)),b}function T(D){let b=!1;const V=E(D);V===null?_(d,p):V&&V.isColor&&(_(V,1),b=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||b)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(D,b){const V=E(b);V&&(V.isCubeTexture||V.mapping===_f)?(v===void 0&&(v=new an(new Ao(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:Mo(ra.backgroundCube.uniforms),vertexShader:ra.backgroundCube.vertexShader,fragmentShader:ra.backgroundCube.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(H,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),Zs.copy(b.backgroundRotation),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,V.isCubeTexture&&V.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),v.material.uniforms.envMap.value=V,v.material.uniforms.flipEnvMap.value=V.isCubeTexture&&V.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Vw.makeRotationFromEuler(Zs)),v.material.toneMapped=Le.getTransfer(V.colorSpace)!==We,(g!==V||y!==V.version||x!==r.toneMapping)&&(v.material.needsUpdate=!0,g=V,y=V.version,x=r.toneMapping),v.layers.enableAll(),D.unshift(v,v.geometry,v.material,0,0,null)):V&&V.isTexture&&(m===void 0&&(m=new an(new Ia(2,2),new en({name:"BackgroundMaterial",uniforms:Mo(ra.background.uniforms),vertexShader:ra.background.vertexShader,fragmentShader:ra.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=V,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.toneMapped=Le.getTransfer(V.colorSpace)!==We,V.matrixAutoUpdate===!0&&V.updateMatrix(),m.material.uniforms.uvTransform.value.copy(V.matrix),(g!==V||y!==V.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,g=V,y=V.version,x=r.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function _(D,b){D.getRGB(Wu,p1(r)),s.buffers.color.setClear(Wu.r,Wu.g,Wu.b,b,f)}function w(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(D,b=1){d.set(D),p=b,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(D){p=D,_(d,p)},render:T,addToRenderList:S,dispose:w}}function Xw(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=y(null);let c=l,f=!1;function d(A,G,Y,Z,it){let j=!1;const k=g(Z,Y,G);c!==k&&(c=k,m(c.object)),j=x(A,Z,Y,it),j&&E(A,Z,Y,it),it!==null&&t.update(it,r.ELEMENT_ARRAY_BUFFER),(j||f)&&(f=!1,b(A,G,Y,Z),it!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function p(){return r.createVertexArray()}function m(A){return r.bindVertexArray(A)}function v(A){return r.deleteVertexArray(A)}function g(A,G,Y){const Z=Y.wireframe===!0;let it=s[A.id];it===void 0&&(it={},s[A.id]=it);let j=it[G.id];j===void 0&&(j={},it[G.id]=j);let k=j[Z];return k===void 0&&(k=y(p()),j[Z]=k),k}function y(A){const G=[],Y=[],Z=[];for(let it=0;it<i;it++)G[it]=0,Y[it]=0,Z[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:Y,attributeDivisors:Z,object:A,attributes:{},index:null}}function x(A,G,Y,Z){const it=c.attributes,j=G.attributes;let k=0;const U=Y.getAttributes();for(const z in U)if(U[z].location>=0){const mt=it[z];let Nt=j[z];if(Nt===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(Nt=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(Nt=A.instanceColor)),mt===void 0||mt.attribute!==Nt||Nt&&mt.data!==Nt.data)return!0;k++}return c.attributesNum!==k||c.index!==Z}function E(A,G,Y,Z){const it={},j=G.attributes;let k=0;const U=Y.getAttributes();for(const z in U)if(U[z].location>=0){let mt=j[z];mt===void 0&&(z==="instanceMatrix"&&A.instanceMatrix&&(mt=A.instanceMatrix),z==="instanceColor"&&A.instanceColor&&(mt=A.instanceColor));const Nt={};Nt.attribute=mt,mt&&mt.data&&(Nt.data=mt.data),it[z]=Nt,k++}c.attributes=it,c.attributesNum=k,c.index=Z}function T(){const A=c.newAttributes;for(let G=0,Y=A.length;G<Y;G++)A[G]=0}function S(A){_(A,0)}function _(A,G){const Y=c.newAttributes,Z=c.enabledAttributes,it=c.attributeDivisors;Y[A]=1,Z[A]===0&&(r.enableVertexAttribArray(A),Z[A]=1),it[A]!==G&&(r.vertexAttribDivisor(A,G),it[A]=G)}function w(){const A=c.newAttributes,G=c.enabledAttributes;for(let Y=0,Z=G.length;Y<Z;Y++)G[Y]!==A[Y]&&(r.disableVertexAttribArray(Y),G[Y]=0)}function D(A,G,Y,Z,it,j,k){k===!0?r.vertexAttribIPointer(A,G,Y,it,j):r.vertexAttribPointer(A,G,Y,Z,it,j)}function b(A,G,Y,Z){T();const it=Z.attributes,j=Y.getAttributes(),k=G.defaultAttributeValues;for(const U in j){const z=j[U];if(z.location>=0){let $=it[U];if($===void 0&&(U==="instanceMatrix"&&A.instanceMatrix&&($=A.instanceMatrix),U==="instanceColor"&&A.instanceColor&&($=A.instanceColor)),$!==void 0){const mt=$.normalized,Nt=$.itemSize,Xt=t.get($);if(Xt===void 0)continue;const Zt=Xt.buffer,X=Xt.type,ut=Xt.bytesPerElement,J=X===r.INT||X===r.UNSIGNED_INT||$.gpuType===Bm;if($.isInterleavedBufferAttribute){const W=$.data,Et=W.stride,Rt=$.offset;if(W.isInstancedInterleavedBuffer){for(let dt=0;dt<z.locationSize;dt++)_(z.location+dt,W.meshPerAttribute);A.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let dt=0;dt<z.locationSize;dt++)S(z.location+dt);r.bindBuffer(r.ARRAY_BUFFER,Zt);for(let dt=0;dt<z.locationSize;dt++)D(z.location+dt,Nt/z.locationSize,X,mt,Et*ut,(Rt+Nt/z.locationSize*dt)*ut,J)}else{if($.isInstancedBufferAttribute){for(let W=0;W<z.locationSize;W++)_(z.location+W,$.meshPerAttribute);A.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let W=0;W<z.locationSize;W++)S(z.location+W);r.bindBuffer(r.ARRAY_BUFFER,Zt);for(let W=0;W<z.locationSize;W++)D(z.location+W,Nt/z.locationSize,X,mt,Nt*ut,Nt/z.locationSize*W*ut,J)}}else if(k!==void 0){const mt=k[U];if(mt!==void 0)switch(mt.length){case 2:r.vertexAttrib2fv(z.location,mt);break;case 3:r.vertexAttrib3fv(z.location,mt);break;case 4:r.vertexAttrib4fv(z.location,mt);break;default:r.vertexAttrib1fv(z.location,mt)}}}}w()}function V(){O();for(const A in s){const G=s[A];for(const Y in G){const Z=G[Y];for(const it in Z)v(Z[it].object),delete Z[it];delete G[Y]}delete s[A]}}function H(A){if(s[A.id]===void 0)return;const G=s[A.id];for(const Y in G){const Z=G[Y];for(const it in Z)v(Z[it].object),delete Z[it];delete G[Y]}delete s[A.id]}function P(A){for(const G in s){const Y=s[G];if(Y[A.id]===void 0)continue;const Z=Y[A.id];for(const it in Z)v(Z[it].object),delete Z[it];delete Y[A.id]}}function O(){C(),f=!0,c!==l&&(c=l,m(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:C,dispose:V,releaseStatesOfGeometry:H,releaseStatesOfProgram:P,initAttributes:T,enableAttribute:S,disableUnusedAttributes:w}}function qw(r,t,i){let s;function l(m){s=m}function c(m,v){r.drawArrays(s,m,v),i.update(v,s,1)}function f(m,v,g){g!==0&&(r.drawArraysInstanced(s,m,v,g),i.update(v,s,g))}function d(m,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,v,0,g);let x=0;for(let E=0;E<g;E++)x+=v[E];i.update(x,s,1)}function p(m,v,g,y){if(g===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<m.length;E++)f(m[E],v[E],y[E]);else{x.multiDrawArraysInstancedWEBGL(s,m,0,v,0,y,0,g);let E=0;for(let T=0;T<g;T++)E+=v[T]*y[T];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function Yw(r,t,i,s){let l;function c(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(P){return!(P!==Yi&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const O=P===Oi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Pi&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==la&&!O)}function p(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),w=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),D=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),V=E>0,H=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:x,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:_,maxVertexUniforms:w,maxVaryings:D,maxFragmentUniforms:b,vertexTextures:V,maxSamples:H}}function Ww(r){const t=this;let i=null,s=0,l=!1,c=!1;const f=new Ks,d=new ye,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const x=g.length!==0||y||s!==0||l;return l=y,s=g.length,x},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(g,y){i=v(g,y,0)},this.setState=function(g,y,x){const E=g.clippingPlanes,T=g.clipIntersection,S=g.clipShadows,_=r.get(g);if(!l||E===null||E.length===0||c&&!S)c?v(null):m();else{const w=c?0:s,D=w*4;let b=_.clippingState||null;p.value=b,b=v(E,y,D,x);for(let V=0;V!==D;++V)b[V]=i[V];_.clippingState=b,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=w}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(g,y,x,E){const T=g!==null?g.length:0;let S=null;if(T!==0){if(S=p.value,E!==!0||S===null){const _=x+T*4,w=y.matrixWorldInverse;d.getNormalMatrix(w),(S===null||S.length<_)&&(S=new Float32Array(_));for(let D=0,b=x;D!==T;++D,b+=4)f.copy(g[D]).applyMatrix4(w,d),f.normal.toArray(S,b),S[b+3]=f.constant}p.value=S,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,S}}function jw(r){let t=new WeakMap;function i(f,d){return d===lf?f.mapping=xo:d===Wp&&(f.mapping=So),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===lf||d===Wp)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new hb(p.height);return m.fromEquirectangularTexture(r,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function c(){t=new WeakMap}return{get:s,dispose:c}}const go=4,px=[.125,.215,.35,.446,.526,.582],tr=20,Dp=new i0,mx=new le;let Np=null,Up=0,Lp=0,Op=!1;const Js=(1+Math.sqrt(5))/2,fo=1/Js,gx=[new F(-Js,fo,0),new F(Js,fo,0),new F(-fo,0,Js),new F(fo,0,Js),new F(0,Js,-fo),new F(0,Js,fo),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Zw=new F;class Rm{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,c={}){const{size:f=256,position:d=Zw}=c;Np=this._renderer.getRenderTarget(),Up=this._renderer.getActiveCubeFace(),Lp=this._renderer.getActiveMipmapLevel(),Op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_x(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Np,Up,Lp),this._renderer.xr.enabled=Op,t.scissorTest=!1,ju(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===xo||t.mapping===So?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Np=this._renderer.getRenderTarget(),Up=this._renderer.getActiveCubeFace(),Lp=this._renderer.getActiveMipmapLevel(),Op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:oa,minFilter:oa,generateMipmaps:!1,type:Oi,format:Yi,colorSpace:sr,depthBuffer:!1},l=vx(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vx(t,i,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qw(c)),this._blurMaterial=Kw(c,t,i)}return l}_compileMaterial(t){const i=new an(this._lodPlanes[0],t);this._renderer.compile(i,Dp)}_sceneToCubeUV(t,i,s,l,c){const p=new si(90,1,i,s),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,x=g.toneMapping;g.getClearColor(mx),g.toneMapping=Pa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const T=new rr({name:"PMREM.Background",side:Bn,depthWrite:!1,depthTest:!1}),S=new an(new Ao,T);let _=!1;const w=t.background;w?w.isColor&&(T.color.copy(w),t.background=null,_=!0):(T.color.copy(mx),_=!0);for(let D=0;D<6;D++){const b=D%3;b===0?(p.up.set(0,m[D],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+v[D],c.y,c.z)):b===1?(p.up.set(0,0,m[D]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+v[D],c.z)):(p.up.set(0,m[D],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+v[D]));const V=this._cubeSize;ju(l,b*V,D>2?V:0,V,V),g.setRenderTarget(l),_&&g.render(S,p),g.render(t,p)}S.geometry.dispose(),S.material.dispose(),g.toneMapping=x,g.autoClear=y,t.background=w}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===xo||t.mapping===So;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=yx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_x());const c=l?this._cubemapMaterial:this._equirectMaterial,f=new an(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=t;const p=this._cubeSize;ju(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(f,Dp)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const f=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=gx[(l-c-1)%gx.length];this._blur(t,c-1,c,f,d)}i.autoClear=s}_blur(t,i,s,l,c){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",c),this._halfBlur(f,t,s,s,l,"longitudinal",c)}_halfBlur(t,i,s,l,c,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new an(this._lodPlanes[l],m),y=m.uniforms,x=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*x):2*Math.PI/(2*tr-1),T=c/E,S=isFinite(c)?1+Math.floor(v*T):tr;S>tr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${tr}`);const _=[];let w=0;for(let P=0;P<tr;++P){const O=P/T,C=Math.exp(-O*O/2);_.push(C),P===0?w+=C:P<S&&(w+=2*C)}for(let P=0;P<_.length;P++)_[P]=_[P]/w;y.envMap.value=t.texture,y.samples.value=S,y.weights.value=_,y.latitudinal.value=f==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:D}=this;y.dTheta.value=E,y.mipInt.value=D-s;const b=this._sizeLods[l],V=3*b*(l>D-go?l-D+go:0),H=4*(this._cubeSize-b);ju(i,V,H,3*b,2*b),p.setRenderTarget(i),p.render(g,Dp)}}function Qw(r){const t=[],i=[],s=[];let l=r;const c=r-go+1+px.length;for(let f=0;f<c;f++){const d=Math.pow(2,l);i.push(d);let p=1/d;f>r-go?p=px[f-r+go-1]:f===0&&(p=0),s.push(p);const m=1/(d-2),v=-m,g=1+m,y=[v,v,g,v,g,g,v,v,g,g,v,g],x=6,E=6,T=3,S=2,_=1,w=new Float32Array(T*E*x),D=new Float32Array(S*E*x),b=new Float32Array(_*E*x);for(let H=0;H<x;H++){const P=H%3*2/3-1,O=H>2?0:-1,C=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];w.set(C,T*E*H),D.set(y,S*E*H);const A=[H,H,H,H,H,H];b.set(A,_*E*H)}const V=new pn;V.setAttribute("position",new hn(w,T)),V.setAttribute("uv",new hn(D,S)),V.setAttribute("faceIndex",new hn(b,_)),t.push(V),l>go&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function vx(r,t,i){const s=new Si(r,t,i);return s.texture.mapping=_f,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function ju(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function Kw(r,t,i){const s=new Float32Array(tr),l=new F(0,1,0);return new en({name:"SphericalGaussianBlur",defines:{n:tr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:a0(),fragmentShader:`

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
		`,blending:ua,depthTest:!1,depthWrite:!1})}function _x(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:a0(),fragmentShader:`

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
		`,blending:ua,depthTest:!1,depthWrite:!1})}function yx(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:a0(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function a0(){return`

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
	`}function Jw(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===lf||p===Wp,v=p===xo||p===So;if(m||v){let g=t.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new Rm(r)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const x=d.image;return m&&x&&x.height>0||v&&x&&l(x)?(i===null&&(i=new Rm(r)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",c),g.texture):null}}}return d}function l(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function $w(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Xl("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function t3(r,t,i,s){const l={},c=new WeakMap;function f(g){const y=g.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",f),delete l[y.id];const x=c.get(y);x&&(t.remove(x),c.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(g,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function p(g){const y=g.attributes;for(const x in y)t.update(y[x],r.ARRAY_BUFFER)}function m(g){const y=[],x=g.index,E=g.attributes.position;let T=0;if(x!==null){const w=x.array;T=x.version;for(let D=0,b=w.length;D<b;D+=3){const V=w[D+0],H=w[D+1],P=w[D+2];y.push(V,H,H,P,P,V)}}else if(E!==void 0){const w=E.array;T=E.version;for(let D=0,b=w.length/3-1;D<b;D+=3){const V=D+0,H=D+1,P=D+2;y.push(V,H,H,P,P,V)}}else return;const S=new(l1(y)?d1:h1)(y,1);S.version=T;const _=c.get(g);_&&t.remove(_),c.set(g,S)}function v(g){const y=c.get(g);if(y){const x=g.index;x!==null&&y.version<x.version&&m(g)}else m(g);return c.get(g)}return{get:d,update:p,getWireframeAttribute:v}}function e3(r,t,i){let s;function l(y){s=y}let c,f;function d(y){c=y.type,f=y.bytesPerElement}function p(y,x){r.drawElements(s,x,c,y*f),i.update(x,s,1)}function m(y,x,E){E!==0&&(r.drawElementsInstanced(s,x,c,y*f,E),i.update(x,s,E))}function v(y,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,c,y,0,E);let S=0;for(let _=0;_<E;_++)S+=x[_];i.update(S,s,1)}function g(y,x,E,T){if(E===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let _=0;_<y.length;_++)m(y[_]/f,x[_],T[_]);else{S.multiDrawElementsInstancedWEBGL(s,x,0,c,y,0,T,0,E);let _=0;for(let w=0;w<E;w++)_+=x[w]*T[w];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function n3(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function i3(r,t,i){const s=new WeakMap,l=new Qe;function c(f,d,p){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let y=s.get(d);if(y===void 0||y.count!==g){let A=function(){O.dispose(),s.delete(d),d.removeEventListener("dispose",A)};var x=A;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],w=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let b=0;E===!0&&(b=1),T===!0&&(b=2),S===!0&&(b=3);let V=d.attributes.position.count*b,H=1;V>t.maxTextureSize&&(H=Math.ceil(V/t.maxTextureSize),V=t.maxTextureSize);const P=new Float32Array(V*H*4*g),O=new c1(P,V,H,g);O.type=la,O.needsUpdate=!0;const C=b*4;for(let G=0;G<g;G++){const Y=_[G],Z=w[G],it=D[G],j=V*H*4*G;for(let k=0;k<Y.count;k++){const U=k*C;E===!0&&(l.fromBufferAttribute(Y,k),P[j+U+0]=l.x,P[j+U+1]=l.y,P[j+U+2]=l.z,P[j+U+3]=0),T===!0&&(l.fromBufferAttribute(Z,k),P[j+U+4]=l.x,P[j+U+5]=l.y,P[j+U+6]=l.z,P[j+U+7]=0),S===!0&&(l.fromBufferAttribute(it,k),P[j+U+8]=l.x,P[j+U+9]=l.y,P[j+U+10]=l.z,P[j+U+11]=it.itemSize===4?l.w:1)}}y={count:g,texture:O,size:new It(V,H)},s.set(d,y),d.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let S=0;S<m.length;S++)E+=m[S];const T=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",T),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:c}}function a3(r,t,i,s){let l=new WeakMap;function c(p){const m=s.render.frame,v=p.geometry,g=t.get(p,v);if(l.get(g)!==m&&(t.update(g),l.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return g}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:f}}const L1=new Yn,xx=new y1(1,1),O1=new c1,P1=new QT,z1=new g1,Sx=[],Mx=[],Ex=new Float32Array(16),Tx=new Float32Array(9),bx=new Float32Array(4);function wo(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let c=Sx[l];if(c===void 0&&(c=new Float32Array(l),Sx[l]=c),t!==0){s.toArray(c,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(c,d)}return c}function An(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function wn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function Sf(r,t){let i=Mx[t];i===void 0&&(i=new Int32Array(t),Mx[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function s3(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function r3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(An(i,t))return;r.uniform2fv(this.addr,t),wn(i,t)}}function o3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(An(i,t))return;r.uniform3fv(this.addr,t),wn(i,t)}}function l3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(An(i,t))return;r.uniform4fv(this.addr,t),wn(i,t)}}function c3(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(An(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),wn(i,t)}else{if(An(i,s))return;bx.set(s),r.uniformMatrix2fv(this.addr,!1,bx),wn(i,s)}}function u3(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(An(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),wn(i,t)}else{if(An(i,s))return;Tx.set(s),r.uniformMatrix3fv(this.addr,!1,Tx),wn(i,s)}}function f3(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(An(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),wn(i,t)}else{if(An(i,s))return;Ex.set(s),r.uniformMatrix4fv(this.addr,!1,Ex),wn(i,s)}}function h3(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function d3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(An(i,t))return;r.uniform2iv(this.addr,t),wn(i,t)}}function p3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(An(i,t))return;r.uniform3iv(this.addr,t),wn(i,t)}}function m3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(An(i,t))return;r.uniform4iv(this.addr,t),wn(i,t)}}function g3(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function v3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(An(i,t))return;r.uniform2uiv(this.addr,t),wn(i,t)}}function _3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(An(i,t))return;r.uniform3uiv(this.addr,t),wn(i,t)}}function y3(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(An(i,t))return;r.uniform4uiv(this.addr,t),wn(i,t)}}function x3(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(xx.compareFunction=o1,c=xx):c=L1,i.setTexture2D(t||c,l)}function S3(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||P1,l)}function M3(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||z1,l)}function E3(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||O1,l)}function T3(r){switch(r){case 5126:return s3;case 35664:return r3;case 35665:return o3;case 35666:return l3;case 35674:return c3;case 35675:return u3;case 35676:return f3;case 5124:case 35670:return h3;case 35667:case 35671:return d3;case 35668:case 35672:return p3;case 35669:case 35673:return m3;case 5125:return g3;case 36294:return v3;case 36295:return _3;case 36296:return y3;case 35678:case 36198:case 36298:case 36306:case 35682:return x3;case 35679:case 36299:case 36307:return S3;case 35680:case 36300:case 36308:case 36293:return M3;case 36289:case 36303:case 36311:case 36292:return E3}}function b3(r,t){r.uniform1fv(this.addr,t)}function A3(r,t){const i=wo(t,this.size,2);r.uniform2fv(this.addr,i)}function w3(r,t){const i=wo(t,this.size,3);r.uniform3fv(this.addr,i)}function C3(r,t){const i=wo(t,this.size,4);r.uniform4fv(this.addr,i)}function R3(r,t){const i=wo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function D3(r,t){const i=wo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function N3(r,t){const i=wo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function U3(r,t){r.uniform1iv(this.addr,t)}function L3(r,t){r.uniform2iv(this.addr,t)}function O3(r,t){r.uniform3iv(this.addr,t)}function P3(r,t){r.uniform4iv(this.addr,t)}function z3(r,t){r.uniform1uiv(this.addr,t)}function I3(r,t){r.uniform2uiv(this.addr,t)}function B3(r,t){r.uniform3uiv(this.addr,t)}function F3(r,t){r.uniform4uiv(this.addr,t)}function H3(r,t,i){const s=this.cache,l=t.length,c=Sf(i,l);An(s,c)||(r.uniform1iv(this.addr,c),wn(s,c));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||L1,c[f])}function G3(r,t,i){const s=this.cache,l=t.length,c=Sf(i,l);An(s,c)||(r.uniform1iv(this.addr,c),wn(s,c));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||P1,c[f])}function V3(r,t,i){const s=this.cache,l=t.length,c=Sf(i,l);An(s,c)||(r.uniform1iv(this.addr,c),wn(s,c));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||z1,c[f])}function k3(r,t,i){const s=this.cache,l=t.length,c=Sf(i,l);An(s,c)||(r.uniform1iv(this.addr,c),wn(s,c));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||O1,c[f])}function X3(r){switch(r){case 5126:return b3;case 35664:return A3;case 35665:return w3;case 35666:return C3;case 35674:return R3;case 35675:return D3;case 35676:return N3;case 5124:case 35670:return U3;case 35667:case 35671:return L3;case 35668:case 35672:return O3;case 35669:case 35673:return P3;case 5125:return z3;case 36294:return I3;case 36295:return B3;case 36296:return F3;case 35678:case 36198:case 36298:case 36306:case 35682:return H3;case 35679:case 36299:case 36307:return G3;case 35680:case 36300:case 36308:case 36293:return V3;case 36289:case 36303:case 36311:case 36292:return k3}}class q3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=T3(i.type)}}class Y3{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=X3(i.type)}}class W3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let c=0,f=l.length;c!==f;++c){const d=l[c];d.setValue(t,i[d.id],s)}}}const Pp=/(\w+)(\])?(\[|\.)?/g;function Ax(r,t){r.seq.push(t),r.map[t.id]=t}function j3(r,t,i){const s=r.name,l=s.length;for(Pp.lastIndex=0;;){const c=Pp.exec(s),f=Pp.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){Ax(i,m===void 0?new q3(d,r,t):new Y3(d,r,t));break}else{let g=i.map[d];g===void 0&&(g=new W3(d),Ax(i,g)),i=g}}}class sf{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const c=t.getActiveUniform(i,l),f=t.getUniformLocation(i,c.name);j3(c,f,this)}}setValue(t,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let c=0,f=i.length;c!==f;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,c=t.length;l!==c;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function wx(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const Z3=37297;let Q3=0;function K3(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),c=Math.min(t+6,i.length);for(let f=l;f<c;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const Cx=new ye;function J3(r){Le._getMatrix(Cx,Le.workingColorSpace,r);const t=`mat3( ${Cx.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(r)){case cf:return[t,"LinearTransferOETF"];case We:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Rx(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),c=(r.getShaderInfoLog(t)||"").trim();if(s&&c==="")return"";const f=/ERROR: 0:(\d+)/.exec(c);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+c+`

`+K3(r.getShaderSource(t),d)}else return c}function $3(r,t){const i=J3(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function tC(r,t){let i;switch(t){case Yx:i="Linear";break;case Wx:i="Reinhard";break;case jx:i="Cineon";break;case Im:i="ACESFilmic";break;case Qx:i="AgX";break;case Kx:i="Neutral";break;case Zx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Zu=new F;function eC(){Le.getLuminanceCoefficients(Zu);const r=Zu.x.toFixed(4),t=Zu.y.toFixed(4),i=Zu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ll).join(`
`)}function iC(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function aC(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(t,l),f=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[f]={type:c.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function Ll(r){return r!==""}function Dx(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nx(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const sC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dm(r){return r.replace(sC,oC)}const rC=new Map;function oC(r,t){let i=Me[t];if(i===void 0){const s=rC.get(t);if(s!==void 0)i=Me[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Dm(i)}const lC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ux(r){return r.replace(lC,cC)}function cC(r,t,i,s){let l="";for(let c=parseInt(t);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Lx(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function uC(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===kx?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Xx?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===La&&(t="SHADOWMAP_TYPE_VSM"),t}function fC(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case xo:case So:t="ENVMAP_TYPE_CUBE";break;case _f:t="ENVMAP_TYPE_CUBE_UV";break}return t}function hC(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case So:t="ENVMAP_MODE_REFRACTION";break}return t}function dC(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case qx:t="ENVMAP_BLENDING_MULTIPLY";break;case pT:t="ENVMAP_BLENDING_MIX";break;case mT:t="ENVMAP_BLENDING_ADD";break}return t}function pC(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function mC(r,t,i,s){const l=r.getContext(),c=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=uC(i),m=fC(i),v=hC(i),g=dC(i),y=pC(i),x=nC(i),E=iC(c),T=l.createProgram();let S,_,w=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ll).join(`
`),S.length>0&&(S+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Ll).join(`
`),_.length>0&&(_+=`
`)):(S=[Lx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ll).join(`
`),_=[Lx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Pa?"#define TONE_MAPPING":"",i.toneMapping!==Pa?Me.tonemapping_pars_fragment:"",i.toneMapping!==Pa?tC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,$3("linearToOutputTexel",i.outputColorSpace),eC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ll).join(`
`)),f=Dm(f),f=Dx(f,i),f=Nx(f,i),d=Dm(d),d=Dx(d,i),d=Nx(d,i),f=Ux(f),d=Ux(d),i.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,_=["#define varying in",i.glslVersion===Dy?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Dy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const D=w+S+f,b=w+_+d,V=wx(l,l.VERTEX_SHADER,D),H=wx(l,l.FRAGMENT_SHADER,b);l.attachShader(T,V),l.attachShader(T,H),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function P(G){if(r.debug.checkShaderErrors){const Y=l.getProgramInfoLog(T)||"",Z=l.getShaderInfoLog(V)||"",it=l.getShaderInfoLog(H)||"",j=Y.trim(),k=Z.trim(),U=it.trim();let z=!0,$=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,V,H);else{const mt=Rx(l,V,"vertex"),Nt=Rx(l,H,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+j+`
`+mt+`
`+Nt)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(k===""||U==="")&&($=!1);$&&(G.diagnostics={runnable:z,programLog:j,vertexShader:{log:k,prefix:S},fragmentShader:{log:U,prefix:_}})}l.deleteShader(V),l.deleteShader(H),O=new sf(l,T),C=aC(l,T)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let C;this.getAttributes=function(){return C===void 0&&P(this),C};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(T,Z3)),A},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Q3++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=V,this.fragmentShader=H,this}let gC=0;class vC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(c)===!1&&(f.add(c),c.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new _C(t),i.set(t,s)),s}}class _C{constructor(t){this.id=gC++,this.code=t,this.usedTimes=0}}function yC(r,t,i,s,l,c,f){const d=new u1,p=new vC,m=new Set,v=[],g=l.logarithmicDepthBuffer,y=l.vertexTextures;let x=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(C){return m.add(C),C===0?"uv":`uv${C}`}function S(C,A,G,Y,Z){const it=Y.fog,j=Z.geometry,k=C.isMeshStandardMaterial?Y.environment:null,U=(C.isMeshStandardMaterial?i:t).get(C.envMap||k),z=U&&U.mapping===_f?U.image.height:null,$=E[C.type];C.precision!==null&&(x=l.getMaxPrecision(C.precision),x!==C.precision&&console.warn("THREE.WebGLProgram.getParameters:",C.precision,"not supported, using",x,"instead."));const mt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Nt=mt!==void 0?mt.length:0;let Xt=0;j.morphAttributes.position!==void 0&&(Xt=1),j.morphAttributes.normal!==void 0&&(Xt=2),j.morphAttributes.color!==void 0&&(Xt=3);let Zt,X,ut,J;if($){const Re=ra[$];Zt=Re.vertexShader,X=Re.fragmentShader}else Zt=C.vertexShader,X=C.fragmentShader,p.update(C),ut=p.getVertexShaderID(C),J=p.getFragmentShaderID(C);const W=r.getRenderTarget(),Et=r.state.buffers.depth.getReversed(),Rt=Z.isInstancedMesh===!0,dt=Z.isBatchedMesh===!0,bt=!!C.map,vt=!!C.matcap,I=!!U,Mt=!!C.aoMap,yt=!!C.lightMap,ct=!!C.bumpMap,ht=!!C.normalMap,At=!!C.displacementMap,Dt=!!C.emissiveMap,Ot=!!C.metalnessMap,re=!!C.roughnessMap,se=C.anisotropy>0,B=C.clearcoat>0,R=C.dispersion>0,ot=C.iridescence>0,_t=C.sheen>0,Ut=C.transmission>0,Tt=se&&!!C.anisotropyMap,Qt=B&&!!C.clearcoatMap,Pt=B&&!!C.clearcoatNormalMap,te=B&&!!C.clearcoatRoughnessMap,ee=ot&&!!C.iridescenceMap,zt=ot&&!!C.iridescenceThicknessMap,Vt=_t&&!!C.sheenColorMap,de=_t&&!!C.sheenRoughnessMap,ne=!!C.specularMap,Yt=!!C.specularColorMap,_e=!!C.specularIntensityMap,K=Ut&&!!C.transmissionMap,Ft=Ut&&!!C.thicknessMap,Gt=!!C.gradientMap,Jt=!!C.alphaMap,Lt=C.alphaTest>0,at=!!C.alphaHash,Ht=!!C.extensions;let pe=Pa;C.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(pe=r.toneMapping);const je={shaderID:$,shaderType:C.type,shaderName:C.name,vertexShader:Zt,fragmentShader:X,defines:C.defines,customVertexShaderID:ut,customFragmentShaderID:J,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:x,batching:dt,batchingColor:dt&&Z._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&Z.instanceColor!==null,instancingMorph:Rt&&Z.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:W===null?r.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:sr,alphaToCoverage:!!C.alphaToCoverage,map:bt,matcap:vt,envMap:I,envMapMode:I&&U.mapping,envMapCubeUVHeight:z,aoMap:Mt,lightMap:yt,bumpMap:ct,normalMap:ht,displacementMap:y&&At,emissiveMap:Dt,normalMapObjectSpace:ht&&C.normalMapType===yT,normalMapTangentSpace:ht&&C.normalMapType===r1,metalnessMap:Ot,roughnessMap:re,anisotropy:se,anisotropyMap:Tt,clearcoat:B,clearcoatMap:Qt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:te,dispersion:R,iridescence:ot,iridescenceMap:ee,iridescenceThicknessMap:zt,sheen:_t,sheenColorMap:Vt,sheenRoughnessMap:de,specularMap:ne,specularColorMap:Yt,specularIntensityMap:_e,transmission:Ut,transmissionMap:K,thicknessMap:Ft,gradientMap:Gt,opaque:C.transparent===!1&&C.blending===vo&&C.alphaToCoverage===!1,alphaMap:Jt,alphaTest:Lt,alphaHash:at,combine:C.combine,mapUv:bt&&T(C.map.channel),aoMapUv:Mt&&T(C.aoMap.channel),lightMapUv:yt&&T(C.lightMap.channel),bumpMapUv:ct&&T(C.bumpMap.channel),normalMapUv:ht&&T(C.normalMap.channel),displacementMapUv:At&&T(C.displacementMap.channel),emissiveMapUv:Dt&&T(C.emissiveMap.channel),metalnessMapUv:Ot&&T(C.metalnessMap.channel),roughnessMapUv:re&&T(C.roughnessMap.channel),anisotropyMapUv:Tt&&T(C.anisotropyMap.channel),clearcoatMapUv:Qt&&T(C.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&T(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:te&&T(C.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&T(C.iridescenceMap.channel),iridescenceThicknessMapUv:zt&&T(C.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&T(C.sheenColorMap.channel),sheenRoughnessMapUv:de&&T(C.sheenRoughnessMap.channel),specularMapUv:ne&&T(C.specularMap.channel),specularColorMapUv:Yt&&T(C.specularColorMap.channel),specularIntensityMapUv:_e&&T(C.specularIntensityMap.channel),transmissionMapUv:K&&T(C.transmissionMap.channel),thicknessMapUv:Ft&&T(C.thicknessMap.channel),alphaMapUv:Jt&&T(C.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ht||se),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!j.attributes.uv&&(bt||Jt),fog:!!it,useFog:C.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Et,skinning:Z.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Nt,morphTextureStride:Xt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&G.length>0,shadowMapType:r.shadowMap.type,toneMapping:pe,decodeVideoTexture:bt&&C.map.isVideoTexture===!0&&Le.getTransfer(C.map.colorSpace)===We,decodeVideoTextureEmissive:Dt&&C.emissiveMap.isVideoTexture===!0&&Le.getTransfer(C.emissiveMap.colorSpace)===We,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===yi,flipSided:C.side===Bn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ht&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&C.extensions.multiDraw===!0||dt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return je.vertexUv1s=m.has(1),je.vertexUv2s=m.has(2),je.vertexUv3s=m.has(3),m.clear(),je}function _(C){const A=[];if(C.shaderID?A.push(C.shaderID):(A.push(C.customVertexShaderID),A.push(C.customFragmentShaderID)),C.defines!==void 0)for(const G in C.defines)A.push(G),A.push(C.defines[G]);return C.isRawShaderMaterial===!1&&(w(A,C),D(A,C),A.push(r.outputColorSpace)),A.push(C.customProgramCacheKey),A.join()}function w(C,A){C.push(A.precision),C.push(A.outputColorSpace),C.push(A.envMapMode),C.push(A.envMapCubeUVHeight),C.push(A.mapUv),C.push(A.alphaMapUv),C.push(A.lightMapUv),C.push(A.aoMapUv),C.push(A.bumpMapUv),C.push(A.normalMapUv),C.push(A.displacementMapUv),C.push(A.emissiveMapUv),C.push(A.metalnessMapUv),C.push(A.roughnessMapUv),C.push(A.anisotropyMapUv),C.push(A.clearcoatMapUv),C.push(A.clearcoatNormalMapUv),C.push(A.clearcoatRoughnessMapUv),C.push(A.iridescenceMapUv),C.push(A.iridescenceThicknessMapUv),C.push(A.sheenColorMapUv),C.push(A.sheenRoughnessMapUv),C.push(A.specularMapUv),C.push(A.specularColorMapUv),C.push(A.specularIntensityMapUv),C.push(A.transmissionMapUv),C.push(A.thicknessMapUv),C.push(A.combine),C.push(A.fogExp2),C.push(A.sizeAttenuation),C.push(A.morphTargetsCount),C.push(A.morphAttributeCount),C.push(A.numDirLights),C.push(A.numPointLights),C.push(A.numSpotLights),C.push(A.numSpotLightMaps),C.push(A.numHemiLights),C.push(A.numRectAreaLights),C.push(A.numDirLightShadows),C.push(A.numPointLightShadows),C.push(A.numSpotLightShadows),C.push(A.numSpotLightShadowsWithMaps),C.push(A.numLightProbes),C.push(A.shadowMapType),C.push(A.toneMapping),C.push(A.numClippingPlanes),C.push(A.numClipIntersection),C.push(A.depthPacking)}function D(C,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),A.gradientMap&&d.enable(22),C.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reversedDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),C.push(d.mask)}function b(C){const A=E[C.type];let G;if(A){const Y=ra[A];G=ql.clone(Y.uniforms)}else G=C.uniforms;return G}function V(C,A){let G;for(let Y=0,Z=v.length;Y<Z;Y++){const it=v[Y];if(it.cacheKey===A){G=it,++G.usedTimes;break}}return G===void 0&&(G=new mC(r,A,C,c),v.push(G)),G}function H(C){if(--C.usedTimes===0){const A=v.indexOf(C);v[A]=v[v.length-1],v.pop(),C.destroy()}}function P(C){p.remove(C)}function O(){p.dispose()}return{getParameters:S,getProgramCacheKey:_,getUniforms:b,acquireProgram:V,releaseProgram:H,releaseShaderCache:P,programs:v,dispose:O}}function xC(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,p){r.get(f)[d]=p}function c(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:c}}function SC(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ox(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Px(){const r=[];let t=0;const i=[],s=[],l=[];function c(){t=0,i.length=0,s.length=0,l.length=0}function f(g,y,x,E,T,S){let _=r[t];return _===void 0?(_={id:g.id,object:g,geometry:y,material:x,groupOrder:E,renderOrder:g.renderOrder,z:T,group:S},r[t]=_):(_.id=g.id,_.object=g,_.geometry=y,_.material=x,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=T,_.group=S),t++,_}function d(g,y,x,E,T,S){const _=f(g,y,x,E,T,S);x.transmission>0?s.push(_):x.transparent===!0?l.push(_):i.push(_)}function p(g,y,x,E,T,S){const _=f(g,y,x,E,T,S);x.transmission>0?s.unshift(_):x.transparent===!0?l.unshift(_):i.unshift(_)}function m(g,y){i.length>1&&i.sort(g||SC),s.length>1&&s.sort(y||Ox),l.length>1&&l.sort(y||Ox)}function v(){for(let g=t,y=r.length;g<y;g++){const x=r[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:p,finish:v,sort:m}}function MC(){let r=new WeakMap;function t(s,l){const c=r.get(s);let f;return c===void 0?(f=new Px,r.set(s,[f])):l>=c.length?(f=new Px,c.push(f)):f=c[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function EC(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new F,color:new le};break;case"SpotLight":i={position:new F,direction:new F,color:new le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new F,color:new le,distance:0,decay:0};break;case"HemisphereLight":i={direction:new F,skyColor:new le,groundColor:new le};break;case"RectAreaLight":i={color:new le,position:new F,halfWidth:new F,halfHeight:new F};break}return r[t.id]=i,i}}}function TC(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let bC=0;function AC(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function wC(r){const t=new EC,i=TC(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new F);const l=new F,c=new Oe,f=new Oe;function d(m){let v=0,g=0,y=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let x=0,E=0,T=0,S=0,_=0,w=0,D=0,b=0,V=0,H=0,P=0;m.sort(AC);for(let C=0,A=m.length;C<A;C++){const G=m[C],Y=G.color,Z=G.intensity,it=G.distance,j=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)v+=Y.r*Z,g+=Y.g*Z,y+=Y.b*Z;else if(G.isLightProbe){for(let k=0;k<9;k++)s.probe[k].addScaledVector(G.sh.coefficients[k],Z);P++}else if(G.isDirectionalLight){const k=t.get(G);if(k.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const U=G.shadow,z=i.get(G);z.shadowIntensity=U.intensity,z.shadowBias=U.bias,z.shadowNormalBias=U.normalBias,z.shadowRadius=U.radius,z.shadowMapSize=U.mapSize,s.directionalShadow[x]=z,s.directionalShadowMap[x]=j,s.directionalShadowMatrix[x]=G.shadow.matrix,w++}s.directional[x]=k,x++}else if(G.isSpotLight){const k=t.get(G);k.position.setFromMatrixPosition(G.matrixWorld),k.color.copy(Y).multiplyScalar(Z),k.distance=it,k.coneCos=Math.cos(G.angle),k.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),k.decay=G.decay,s.spot[T]=k;const U=G.shadow;if(G.map&&(s.spotLightMap[V]=G.map,V++,U.updateMatrices(G),G.castShadow&&H++),s.spotLightMatrix[T]=U.matrix,G.castShadow){const z=i.get(G);z.shadowIntensity=U.intensity,z.shadowBias=U.bias,z.shadowNormalBias=U.normalBias,z.shadowRadius=U.radius,z.shadowMapSize=U.mapSize,s.spotShadow[T]=z,s.spotShadowMap[T]=j,b++}T++}else if(G.isRectAreaLight){const k=t.get(G);k.color.copy(Y).multiplyScalar(Z),k.halfWidth.set(G.width*.5,0,0),k.halfHeight.set(0,G.height*.5,0),s.rectArea[S]=k,S++}else if(G.isPointLight){const k=t.get(G);if(k.color.copy(G.color).multiplyScalar(G.intensity),k.distance=G.distance,k.decay=G.decay,G.castShadow){const U=G.shadow,z=i.get(G);z.shadowIntensity=U.intensity,z.shadowBias=U.bias,z.shadowNormalBias=U.normalBias,z.shadowRadius=U.radius,z.shadowMapSize=U.mapSize,z.shadowCameraNear=U.camera.near,z.shadowCameraFar=U.camera.far,s.pointShadow[E]=z,s.pointShadowMap[E]=j,s.pointShadowMatrix[E]=G.shadow.matrix,D++}s.point[E]=k,E++}else if(G.isHemisphereLight){const k=t.get(G);k.skyColor.copy(G.color).multiplyScalar(Z),k.groundColor.copy(G.groundColor).multiplyScalar(Z),s.hemi[_]=k,_++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=jt.LTC_FLOAT_1,s.rectAreaLTC2=jt.LTC_FLOAT_2):(s.rectAreaLTC1=jt.LTC_HALF_1,s.rectAreaLTC2=jt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=y;const O=s.hash;(O.directionalLength!==x||O.pointLength!==E||O.spotLength!==T||O.rectAreaLength!==S||O.hemiLength!==_||O.numDirectionalShadows!==w||O.numPointShadows!==D||O.numSpotShadows!==b||O.numSpotMaps!==V||O.numLightProbes!==P)&&(s.directional.length=x,s.spot.length=T,s.rectArea.length=S,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=b+V-H,s.spotLightMap.length=V,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=P,O.directionalLength=x,O.pointLength=E,O.spotLength=T,O.rectAreaLength=S,O.hemiLength=_,O.numDirectionalShadows=w,O.numPointShadows=D,O.numSpotShadows=b,O.numSpotMaps=V,O.numLightProbes=P,s.version=bC++)}function p(m,v){let g=0,y=0,x=0,E=0,T=0;const S=v.matrixWorldInverse;for(let _=0,w=m.length;_<w;_++){const D=m[_];if(D.isDirectionalLight){const b=s.directional[g];b.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),b.direction.sub(l),b.direction.transformDirection(S),g++}else if(D.isSpotLight){const b=s.spot[x];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(S),b.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),b.direction.sub(l),b.direction.transformDirection(S),x++}else if(D.isRectAreaLight){const b=s.rectArea[E];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(S),f.identity(),c.copy(D.matrixWorld),c.premultiply(S),f.extractRotation(c),b.halfWidth.set(D.width*.5,0,0),b.halfHeight.set(0,D.height*.5,0),b.halfWidth.applyMatrix4(f),b.halfHeight.applyMatrix4(f),E++}else if(D.isPointLight){const b=s.point[y];b.position.setFromMatrixPosition(D.matrixWorld),b.position.applyMatrix4(S),y++}else if(D.isHemisphereLight){const b=s.hemi[T];b.direction.setFromMatrixPosition(D.matrixWorld),b.direction.transformDirection(S),T++}}}return{setup:d,setupView:p,state:s}}function zx(r){const t=new wC(r),i=[],s=[];function l(v){m.camera=v,i.length=0,s.length=0}function c(v){i.push(v)}function f(v){s.push(v)}function d(){t.setup(i)}function p(v){t.setupView(i,v)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:f}}function CC(r){let t=new WeakMap;function i(l,c=0){const f=t.get(l);let d;return f===void 0?(d=new zx(r),t.set(l,[d])):c>=f.length?(d=new zx(r),f.push(d)):d=f[c],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const RC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DC=`uniform sampler2D shadow_pass;
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
}`;function NC(r,t,i){let s=new yf;const l=new It,c=new It,f=new Qe,d=new eA({depthPacking:_T}),p=new nA,m={},v=i.maxTextureSize,g={[ys]:Bn,[Bn]:ys,[yi]:yi},y=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:RC,fragmentShader:DC}),x=y.clone();x.defines.HORIZONTAL_PASS=1;const E=new pn;E.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new an(E,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kx;let _=this.type;this.render=function(H,P,O){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||H.length===0)return;const C=r.getRenderTarget(),A=r.getActiveCubeFace(),G=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(ua),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const Z=_!==La&&this.type===La,it=_===La&&this.type!==La;for(let j=0,k=H.length;j<k;j++){const U=H[j],z=U.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;l.copy(z.mapSize);const $=z.getFrameExtents();if(l.multiply($),c.copy(z.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/$.x),l.x=c.x*$.x,z.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/$.y),l.y=c.y*$.y,z.mapSize.y=c.y)),z.map===null||Z===!0||it===!0){const Nt=this.type!==La?{minFilter:xi,magFilter:xi}:{};z.map!==null&&z.map.dispose(),z.map=new Si(l.x,l.y,Nt),z.map.texture.name=U.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const mt=z.getViewportCount();for(let Nt=0;Nt<mt;Nt++){const Xt=z.getViewport(Nt);f.set(c.x*Xt.x,c.y*Xt.y,c.x*Xt.z,c.y*Xt.w),Y.viewport(f),z.updateMatrices(U,Nt),s=z.getFrustum(),b(P,O,z.camera,U,this.type)}z.isPointLightShadow!==!0&&this.type===La&&w(z,O),z.needsUpdate=!1}_=this.type,S.needsUpdate=!1,r.setRenderTarget(C,A,G)};function w(H,P){const O=t.update(T);y.defines.VSM_SAMPLES!==H.blurSamples&&(y.defines.VSM_SAMPLES=H.blurSamples,x.defines.VSM_SAMPLES=H.blurSamples,y.needsUpdate=!0,x.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Si(l.x,l.y)),y.uniforms.shadow_pass.value=H.map.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(P,null,O,y,T,null),x.uniforms.shadow_pass.value=H.mapPass.texture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(P,null,O,x,T,null)}function D(H,P,O,C){let A=null;const G=O.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(G!==void 0)A=G;else if(A=O.isPointLight===!0?p:d,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Y=A.uuid,Z=P.uuid;let it=m[Y];it===void 0&&(it={},m[Y]=it);let j=it[Z];j===void 0&&(j=A.clone(),it[Z]=j,P.addEventListener("dispose",V)),A=j}if(A.visible=P.visible,A.wireframe=P.wireframe,C===La?A.side=P.shadowSide!==null?P.shadowSide:P.side:A.side=P.shadowSide!==null?P.shadowSide:g[P.side],A.alphaMap=P.alphaMap,A.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,A.map=P.map,A.clipShadows=P.clipShadows,A.clippingPlanes=P.clippingPlanes,A.clipIntersection=P.clipIntersection,A.displacementMap=P.displacementMap,A.displacementScale=P.displacementScale,A.displacementBias=P.displacementBias,A.wireframeLinewidth=P.wireframeLinewidth,A.linewidth=P.linewidth,O.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const Y=r.properties.get(A);Y.light=O}return A}function b(H,P,O,C,A){if(H.visible===!1)return;if(H.layers.test(P.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&A===La)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,H.matrixWorld);const Z=t.update(H),it=H.material;if(Array.isArray(it)){const j=Z.groups;for(let k=0,U=j.length;k<U;k++){const z=j[k],$=it[z.materialIndex];if($&&$.visible){const mt=D(H,$,C,A);H.onBeforeShadow(r,H,P,O,Z,mt,z),r.renderBufferDirect(O,null,Z,mt,H,z),H.onAfterShadow(r,H,P,O,Z,mt,z)}}}else if(it.visible){const j=D(H,it,C,A);H.onBeforeShadow(r,H,P,O,Z,j,null),r.renderBufferDirect(O,null,Z,j,H,null),H.onAfterShadow(r,H,P,O,Z,j,null)}}const Y=H.children;for(let Z=0,it=Y.length;Z<it;Z++)b(Y[Z],P,O,C,A)}function V(H){H.target.removeEventListener("dispose",V);for(const O in m){const C=m[O],A=H.target.uuid;A in C&&(C[A].dispose(),delete C[A])}}}const UC={[Hp]:Gp,[Vp]:qp,[kp]:Yp,[yo]:Xp,[Gp]:Hp,[qp]:Vp,[Yp]:kp,[Xp]:yo};function LC(r,t){function i(){let K=!1;const Ft=new Qe;let Gt=null;const Jt=new Qe(0,0,0,0);return{setMask:function(Lt){Gt!==Lt&&!K&&(r.colorMask(Lt,Lt,Lt,Lt),Gt=Lt)},setLocked:function(Lt){K=Lt},setClear:function(Lt,at,Ht,pe,je){je===!0&&(Lt*=pe,at*=pe,Ht*=pe),Ft.set(Lt,at,Ht,pe),Jt.equals(Ft)===!1&&(r.clearColor(Lt,at,Ht,pe),Jt.copy(Ft))},reset:function(){K=!1,Gt=null,Jt.set(-1,0,0,0)}}}function s(){let K=!1,Ft=!1,Gt=null,Jt=null,Lt=null;return{setReversed:function(at){if(Ft!==at){const Ht=t.get("EXT_clip_control");at?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT),Ft=at;const pe=Lt;Lt=null,this.setClear(pe)}},getReversed:function(){return Ft},setTest:function(at){at?W(r.DEPTH_TEST):Et(r.DEPTH_TEST)},setMask:function(at){Gt!==at&&!K&&(r.depthMask(at),Gt=at)},setFunc:function(at){if(Ft&&(at=UC[at]),Jt!==at){switch(at){case Hp:r.depthFunc(r.NEVER);break;case Gp:r.depthFunc(r.ALWAYS);break;case Vp:r.depthFunc(r.LESS);break;case yo:r.depthFunc(r.LEQUAL);break;case kp:r.depthFunc(r.EQUAL);break;case Xp:r.depthFunc(r.GEQUAL);break;case qp:r.depthFunc(r.GREATER);break;case Yp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Jt=at}},setLocked:function(at){K=at},setClear:function(at){Lt!==at&&(Ft&&(at=1-at),r.clearDepth(at),Lt=at)},reset:function(){K=!1,Gt=null,Jt=null,Lt=null,Ft=!1}}}function l(){let K=!1,Ft=null,Gt=null,Jt=null,Lt=null,at=null,Ht=null,pe=null,je=null;return{setTest:function(Re){K||(Re?W(r.STENCIL_TEST):Et(r.STENCIL_TEST))},setMask:function(Re){Ft!==Re&&!K&&(r.stencilMask(Re),Ft=Re)},setFunc:function(Re,rn,En){(Gt!==Re||Jt!==rn||Lt!==En)&&(r.stencilFunc(Re,rn,En),Gt=Re,Jt=rn,Lt=En)},setOp:function(Re,rn,En){(at!==Re||Ht!==rn||pe!==En)&&(r.stencilOp(Re,rn,En),at=Re,Ht=rn,pe=En)},setLocked:function(Re){K=Re},setClear:function(Re){je!==Re&&(r.clearStencil(Re),je=Re)},reset:function(){K=!1,Ft=null,Gt=null,Jt=null,Lt=null,at=null,Ht=null,pe=null,je=null}}}const c=new i,f=new s,d=new l,p=new WeakMap,m=new WeakMap;let v={},g={},y=new WeakMap,x=[],E=null,T=!1,S=null,_=null,w=null,D=null,b=null,V=null,H=null,P=new le(0,0,0),O=0,C=!1,A=null,G=null,Y=null,Z=null,it=null;const j=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,U=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(U=parseFloat(/^WebGL (\d)/.exec(z)[1]),k=U>=1):z.indexOf("OpenGL ES")!==-1&&(U=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),k=U>=2);let $=null,mt={};const Nt=r.getParameter(r.SCISSOR_BOX),Xt=r.getParameter(r.VIEWPORT),Zt=new Qe().fromArray(Nt),X=new Qe().fromArray(Xt);function ut(K,Ft,Gt,Jt){const Lt=new Uint8Array(4),at=r.createTexture();r.bindTexture(K,at),r.texParameteri(K,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(K,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ht=0;Ht<Gt;Ht++)K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?r.texImage3D(Ft,0,r.RGBA,1,1,Jt,0,r.RGBA,r.UNSIGNED_BYTE,Lt):r.texImage2D(Ft+Ht,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Lt);return at}const J={};J[r.TEXTURE_2D]=ut(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=ut(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=ut(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=ut(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),f.setClear(1),d.setClear(0),W(r.DEPTH_TEST),f.setFunc(yo),ct(!1),ht(by),W(r.CULL_FACE),Mt(ua);function W(K){v[K]!==!0&&(r.enable(K),v[K]=!0)}function Et(K){v[K]!==!1&&(r.disable(K),v[K]=!1)}function Rt(K,Ft){return g[K]!==Ft?(r.bindFramebuffer(K,Ft),g[K]=Ft,K===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ft),K===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ft),!0):!1}function dt(K,Ft){let Gt=x,Jt=!1;if(K){Gt=y.get(Ft),Gt===void 0&&(Gt=[],y.set(Ft,Gt));const Lt=K.textures;if(Gt.length!==Lt.length||Gt[0]!==r.COLOR_ATTACHMENT0){for(let at=0,Ht=Lt.length;at<Ht;at++)Gt[at]=r.COLOR_ATTACHMENT0+at;Gt.length=Lt.length,Jt=!0}}else Gt[0]!==r.BACK&&(Gt[0]=r.BACK,Jt=!0);Jt&&r.drawBuffers(Gt)}function bt(K){return E!==K?(r.useProgram(K),E=K,!0):!1}const vt={[$s]:r.FUNC_ADD,[KE]:r.FUNC_SUBTRACT,[JE]:r.FUNC_REVERSE_SUBTRACT};vt[$E]=r.MIN,vt[tT]=r.MAX;const I={[eT]:r.ZERO,[nT]:r.ONE,[iT]:r.SRC_COLOR,[Bp]:r.SRC_ALPHA,[cT]:r.SRC_ALPHA_SATURATE,[oT]:r.DST_COLOR,[sT]:r.DST_ALPHA,[aT]:r.ONE_MINUS_SRC_COLOR,[Fp]:r.ONE_MINUS_SRC_ALPHA,[lT]:r.ONE_MINUS_DST_COLOR,[rT]:r.ONE_MINUS_DST_ALPHA,[uT]:r.CONSTANT_COLOR,[fT]:r.ONE_MINUS_CONSTANT_COLOR,[hT]:r.CONSTANT_ALPHA,[dT]:r.ONE_MINUS_CONSTANT_ALPHA};function Mt(K,Ft,Gt,Jt,Lt,at,Ht,pe,je,Re){if(K===ua){T===!0&&(Et(r.BLEND),T=!1);return}if(T===!1&&(W(r.BLEND),T=!0),K!==QE){if(K!==S||Re!==C){if((_!==$s||b!==$s)&&(r.blendEquation(r.FUNC_ADD),_=$s,b=$s),Re)switch(K){case vo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ir:r.blendFunc(r.ONE,r.ONE);break;case Ay:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case wy:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}else switch(K){case vo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ir:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ay:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wy:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",K);break}w=null,D=null,V=null,H=null,P.set(0,0,0),O=0,S=K,C=Re}return}Lt=Lt||Ft,at=at||Gt,Ht=Ht||Jt,(Ft!==_||Lt!==b)&&(r.blendEquationSeparate(vt[Ft],vt[Lt]),_=Ft,b=Lt),(Gt!==w||Jt!==D||at!==V||Ht!==H)&&(r.blendFuncSeparate(I[Gt],I[Jt],I[at],I[Ht]),w=Gt,D=Jt,V=at,H=Ht),(pe.equals(P)===!1||je!==O)&&(r.blendColor(pe.r,pe.g,pe.b,je),P.copy(pe),O=je),S=K,C=!1}function yt(K,Ft){K.side===yi?Et(r.CULL_FACE):W(r.CULL_FACE);let Gt=K.side===Bn;Ft&&(Gt=!Gt),ct(Gt),K.blending===vo&&K.transparent===!1?Mt(ua):Mt(K.blending,K.blendEquation,K.blendSrc,K.blendDst,K.blendEquationAlpha,K.blendSrcAlpha,K.blendDstAlpha,K.blendColor,K.blendAlpha,K.premultipliedAlpha),f.setFunc(K.depthFunc),f.setTest(K.depthTest),f.setMask(K.depthWrite),c.setMask(K.colorWrite);const Jt=K.stencilWrite;d.setTest(Jt),Jt&&(d.setMask(K.stencilWriteMask),d.setFunc(K.stencilFunc,K.stencilRef,K.stencilFuncMask),d.setOp(K.stencilFail,K.stencilZFail,K.stencilZPass)),Dt(K.polygonOffset,K.polygonOffsetFactor,K.polygonOffsetUnits),K.alphaToCoverage===!0?W(r.SAMPLE_ALPHA_TO_COVERAGE):Et(r.SAMPLE_ALPHA_TO_COVERAGE)}function ct(K){A!==K&&(K?r.frontFace(r.CW):r.frontFace(r.CCW),A=K)}function ht(K){K!==jE?(W(r.CULL_FACE),K!==G&&(K===by?r.cullFace(r.BACK):K===ZE?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Et(r.CULL_FACE),G=K}function At(K){K!==Y&&(k&&r.lineWidth(K),Y=K)}function Dt(K,Ft,Gt){K?(W(r.POLYGON_OFFSET_FILL),(Z!==Ft||it!==Gt)&&(r.polygonOffset(Ft,Gt),Z=Ft,it=Gt)):Et(r.POLYGON_OFFSET_FILL)}function Ot(K){K?W(r.SCISSOR_TEST):Et(r.SCISSOR_TEST)}function re(K){K===void 0&&(K=r.TEXTURE0+j-1),$!==K&&(r.activeTexture(K),$=K)}function se(K,Ft,Gt){Gt===void 0&&($===null?Gt=r.TEXTURE0+j-1:Gt=$);let Jt=mt[Gt];Jt===void 0&&(Jt={type:void 0,texture:void 0},mt[Gt]=Jt),(Jt.type!==K||Jt.texture!==Ft)&&($!==Gt&&(r.activeTexture(Gt),$=Gt),r.bindTexture(K,Ft||J[K]),Jt.type=K,Jt.texture=Ft)}function B(){const K=mt[$];K!==void 0&&K.type!==void 0&&(r.bindTexture(K.type,null),K.type=void 0,K.texture=void 0)}function R(){try{r.compressedTexImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ot(){try{r.compressedTexImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function _t(){try{r.texSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Ut(){try{r.texSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Tt(){try{r.compressedTexSubImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Qt(){try{r.compressedTexSubImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Pt(){try{r.texStorage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function te(){try{r.texStorage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function ee(){try{r.texImage2D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function zt(){try{r.texImage3D(...arguments)}catch(K){console.error("THREE.WebGLState:",K)}}function Vt(K){Zt.equals(K)===!1&&(r.scissor(K.x,K.y,K.z,K.w),Zt.copy(K))}function de(K){X.equals(K)===!1&&(r.viewport(K.x,K.y,K.z,K.w),X.copy(K))}function ne(K,Ft){let Gt=m.get(Ft);Gt===void 0&&(Gt=new WeakMap,m.set(Ft,Gt));let Jt=Gt.get(K);Jt===void 0&&(Jt=r.getUniformBlockIndex(Ft,K.name),Gt.set(K,Jt))}function Yt(K,Ft){const Jt=m.get(Ft).get(K);p.get(Ft)!==Jt&&(r.uniformBlockBinding(Ft,Jt,K.__bindingPointIndex),p.set(Ft,Jt))}function _e(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},$=null,mt={},g={},y=new WeakMap,x=[],E=null,T=!1,S=null,_=null,w=null,D=null,b=null,V=null,H=null,P=new le(0,0,0),O=0,C=!1,A=null,G=null,Y=null,Z=null,it=null,Zt.set(0,0,r.canvas.width,r.canvas.height),X.set(0,0,r.canvas.width,r.canvas.height),c.reset(),f.reset(),d.reset()}return{buffers:{color:c,depth:f,stencil:d},enable:W,disable:Et,bindFramebuffer:Rt,drawBuffers:dt,useProgram:bt,setBlending:Mt,setMaterial:yt,setFlipSided:ct,setCullFace:ht,setLineWidth:At,setPolygonOffset:Dt,setScissorTest:Ot,activeTexture:re,bindTexture:se,unbindTexture:B,compressedTexImage2D:R,compressedTexImage3D:ot,texImage2D:ee,texImage3D:zt,updateUBOMapping:ne,uniformBlockBinding:Yt,texStorage2D:Pt,texStorage3D:te,texSubImage2D:_t,texSubImage3D:Ut,compressedTexSubImage2D:Tt,compressedTexSubImage3D:Qt,scissor:Vt,viewport:de,reset:_e}}function OC(r,t,i,s,l,c,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new It,v=new WeakMap;let g;const y=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(B,R){return x?new OffscreenCanvas(B,R):ff("canvas")}function T(B,R,ot){let _t=1;const Ut=se(B);if((Ut.width>ot||Ut.height>ot)&&(_t=ot/Math.max(Ut.width,Ut.height)),_t<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const Tt=Math.floor(_t*Ut.width),Qt=Math.floor(_t*Ut.height);g===void 0&&(g=E(Tt,Qt));const Pt=R?E(Tt,Qt):g;return Pt.width=Tt,Pt.height=Qt,Pt.getContext("2d").drawImage(B,0,0,Tt,Qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ut.width+"x"+Ut.height+") to ("+Tt+"x"+Qt+")."),Pt}else return"data"in B&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ut.width+"x"+Ut.height+")."),B;return B}function S(B){return B.generateMipmaps}function _(B){r.generateMipmap(B)}function w(B){return B.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?r.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function D(B,R,ot,_t,Ut=!1){if(B!==null){if(r[B]!==void 0)return r[B];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let Tt=R;if(R===r.RED&&(ot===r.FLOAT&&(Tt=r.R32F),ot===r.HALF_FLOAT&&(Tt=r.R16F),ot===r.UNSIGNED_BYTE&&(Tt=r.R8)),R===r.RED_INTEGER&&(ot===r.UNSIGNED_BYTE&&(Tt=r.R8UI),ot===r.UNSIGNED_SHORT&&(Tt=r.R16UI),ot===r.UNSIGNED_INT&&(Tt=r.R32UI),ot===r.BYTE&&(Tt=r.R8I),ot===r.SHORT&&(Tt=r.R16I),ot===r.INT&&(Tt=r.R32I)),R===r.RG&&(ot===r.FLOAT&&(Tt=r.RG32F),ot===r.HALF_FLOAT&&(Tt=r.RG16F),ot===r.UNSIGNED_BYTE&&(Tt=r.RG8)),R===r.RG_INTEGER&&(ot===r.UNSIGNED_BYTE&&(Tt=r.RG8UI),ot===r.UNSIGNED_SHORT&&(Tt=r.RG16UI),ot===r.UNSIGNED_INT&&(Tt=r.RG32UI),ot===r.BYTE&&(Tt=r.RG8I),ot===r.SHORT&&(Tt=r.RG16I),ot===r.INT&&(Tt=r.RG32I)),R===r.RGB_INTEGER&&(ot===r.UNSIGNED_BYTE&&(Tt=r.RGB8UI),ot===r.UNSIGNED_SHORT&&(Tt=r.RGB16UI),ot===r.UNSIGNED_INT&&(Tt=r.RGB32UI),ot===r.BYTE&&(Tt=r.RGB8I),ot===r.SHORT&&(Tt=r.RGB16I),ot===r.INT&&(Tt=r.RGB32I)),R===r.RGBA_INTEGER&&(ot===r.UNSIGNED_BYTE&&(Tt=r.RGBA8UI),ot===r.UNSIGNED_SHORT&&(Tt=r.RGBA16UI),ot===r.UNSIGNED_INT&&(Tt=r.RGBA32UI),ot===r.BYTE&&(Tt=r.RGBA8I),ot===r.SHORT&&(Tt=r.RGBA16I),ot===r.INT&&(Tt=r.RGBA32I)),R===r.RGB&&(ot===r.UNSIGNED_INT_5_9_9_9_REV&&(Tt=r.RGB9_E5),ot===r.UNSIGNED_INT_10F_11F_11F_REV&&(Tt=r.R11F_G11F_B10F)),R===r.RGBA){const Qt=Ut?cf:Le.getTransfer(_t);ot===r.FLOAT&&(Tt=r.RGBA32F),ot===r.HALF_FLOAT&&(Tt=r.RGBA16F),ot===r.UNSIGNED_BYTE&&(Tt=Qt===We?r.SRGB8_ALPHA8:r.RGBA8),ot===r.UNSIGNED_SHORT_4_4_4_4&&(Tt=r.RGBA4),ot===r.UNSIGNED_SHORT_5_5_5_1&&(Tt=r.RGB5_A1)}return(Tt===r.R16F||Tt===r.R32F||Tt===r.RG16F||Tt===r.RG32F||Tt===r.RGBA16F||Tt===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Tt}function b(B,R){let ot;return B?R===null||R===ar||R===Hl?ot=r.DEPTH24_STENCIL8:R===la?ot=r.DEPTH32F_STENCIL8:R===Fl&&(ot=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ar||R===Hl?ot=r.DEPTH_COMPONENT24:R===la?ot=r.DEPTH_COMPONENT32F:R===Fl&&(ot=r.DEPTH_COMPONENT16),ot}function V(B,R){return S(B)===!0||B.isFramebufferTexture&&B.minFilter!==xi&&B.minFilter!==oa?Math.log2(Math.max(R.width,R.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?R.mipmaps.length:1}function H(B){const R=B.target;R.removeEventListener("dispose",H),O(R),R.isVideoTexture&&v.delete(R)}function P(B){const R=B.target;R.removeEventListener("dispose",P),A(R)}function O(B){const R=s.get(B);if(R.__webglInit===void 0)return;const ot=B.source,_t=y.get(ot);if(_t){const Ut=_t[R.__cacheKey];Ut.usedTimes--,Ut.usedTimes===0&&C(B),Object.keys(_t).length===0&&y.delete(ot)}s.remove(B)}function C(B){const R=s.get(B);r.deleteTexture(R.__webglTexture);const ot=B.source,_t=y.get(ot);delete _t[R.__cacheKey],f.memory.textures--}function A(B){const R=s.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),s.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let _t=0;_t<6;_t++){if(Array.isArray(R.__webglFramebuffer[_t]))for(let Ut=0;Ut<R.__webglFramebuffer[_t].length;Ut++)r.deleteFramebuffer(R.__webglFramebuffer[_t][Ut]);else r.deleteFramebuffer(R.__webglFramebuffer[_t]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[_t])}else{if(Array.isArray(R.__webglFramebuffer))for(let _t=0;_t<R.__webglFramebuffer.length;_t++)r.deleteFramebuffer(R.__webglFramebuffer[_t]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let _t=0;_t<R.__webglColorRenderbuffer.length;_t++)R.__webglColorRenderbuffer[_t]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[_t]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const ot=B.textures;for(let _t=0,Ut=ot.length;_t<Ut;_t++){const Tt=s.get(ot[_t]);Tt.__webglTexture&&(r.deleteTexture(Tt.__webglTexture),f.memory.textures--),s.remove(ot[_t])}s.remove(B)}let G=0;function Y(){G=0}function Z(){const B=G;return B>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+l.maxTextures),G+=1,B}function it(B){const R=[];return R.push(B.wrapS),R.push(B.wrapT),R.push(B.wrapR||0),R.push(B.magFilter),R.push(B.minFilter),R.push(B.anisotropy),R.push(B.internalFormat),R.push(B.format),R.push(B.type),R.push(B.generateMipmaps),R.push(B.premultiplyAlpha),R.push(B.flipY),R.push(B.unpackAlignment),R.push(B.colorSpace),R.join()}function j(B,R){const ot=s.get(B);if(B.isVideoTexture&&Ot(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&ot.__version!==B.version){const _t=B.image;if(_t===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(_t.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(ot,B,R);return}}else B.isExternalTexture&&(ot.__webglTexture=B.sourceTexture?B.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,ot.__webglTexture,r.TEXTURE0+R)}function k(B,R){const ot=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&ot.__version!==B.version){J(ot,B,R);return}i.bindTexture(r.TEXTURE_2D_ARRAY,ot.__webglTexture,r.TEXTURE0+R)}function U(B,R){const ot=s.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&ot.__version!==B.version){J(ot,B,R);return}i.bindTexture(r.TEXTURE_3D,ot.__webglTexture,r.TEXTURE0+R)}function z(B,R){const ot=s.get(B);if(B.version>0&&ot.__version!==B.version){W(ot,B,R);return}i.bindTexture(r.TEXTURE_CUBE_MAP,ot.__webglTexture,r.TEXTURE0+R)}const $={[jp]:r.REPEAT,[er]:r.CLAMP_TO_EDGE,[Zp]:r.MIRRORED_REPEAT},mt={[xi]:r.NEAREST,[gT]:r.NEAREST_MIPMAP_NEAREST,[Su]:r.NEAREST_MIPMAP_LINEAR,[oa]:r.LINEAR,[ep]:r.LINEAR_MIPMAP_NEAREST,[nr]:r.LINEAR_MIPMAP_LINEAR},Nt={[xT]:r.NEVER,[AT]:r.ALWAYS,[ST]:r.LESS,[o1]:r.LEQUAL,[MT]:r.EQUAL,[bT]:r.GEQUAL,[ET]:r.GREATER,[TT]:r.NOTEQUAL};function Xt(B,R){if(R.type===la&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===oa||R.magFilter===ep||R.magFilter===Su||R.magFilter===nr||R.minFilter===oa||R.minFilter===ep||R.minFilter===Su||R.minFilter===nr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(B,r.TEXTURE_WRAP_S,$[R.wrapS]),r.texParameteri(B,r.TEXTURE_WRAP_T,$[R.wrapT]),(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)&&r.texParameteri(B,r.TEXTURE_WRAP_R,$[R.wrapR]),r.texParameteri(B,r.TEXTURE_MAG_FILTER,mt[R.magFilter]),r.texParameteri(B,r.TEXTURE_MIN_FILTER,mt[R.minFilter]),R.compareFunction&&(r.texParameteri(B,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(B,r.TEXTURE_COMPARE_FUNC,Nt[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===xi||R.minFilter!==Su&&R.minFilter!==nr||R.type===la&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||s.get(R).__currentAnisotropy){const ot=t.get("EXT_texture_filter_anisotropic");r.texParameterf(B,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,l.getMaxAnisotropy())),s.get(R).__currentAnisotropy=R.anisotropy}}}function Zt(B,R){let ot=!1;B.__webglInit===void 0&&(B.__webglInit=!0,R.addEventListener("dispose",H));const _t=R.source;let Ut=y.get(_t);Ut===void 0&&(Ut={},y.set(_t,Ut));const Tt=it(R);if(Tt!==B.__cacheKey){Ut[Tt]===void 0&&(Ut[Tt]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,ot=!0),Ut[Tt].usedTimes++;const Qt=Ut[B.__cacheKey];Qt!==void 0&&(Ut[B.__cacheKey].usedTimes--,Qt.usedTimes===0&&C(R)),B.__cacheKey=Tt,B.__webglTexture=Ut[Tt].texture}return ot}function X(B,R,ot){return Math.floor(Math.floor(B/ot)/R)}function ut(B,R,ot,_t){const Tt=B.updateRanges;if(Tt.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,R.width,R.height,ot,_t,R.data);else{Tt.sort((zt,Vt)=>zt.start-Vt.start);let Qt=0;for(let zt=1;zt<Tt.length;zt++){const Vt=Tt[Qt],de=Tt[zt],ne=Vt.start+Vt.count,Yt=X(de.start,R.width,4),_e=X(Vt.start,R.width,4);de.start<=ne+1&&Yt===_e&&X(de.start+de.count-1,R.width,4)===Yt?Vt.count=Math.max(Vt.count,de.start+de.count-Vt.start):(++Qt,Tt[Qt]=de)}Tt.length=Qt+1;const Pt=r.getParameter(r.UNPACK_ROW_LENGTH),te=r.getParameter(r.UNPACK_SKIP_PIXELS),ee=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,R.width);for(let zt=0,Vt=Tt.length;zt<Vt;zt++){const de=Tt[zt],ne=Math.floor(de.start/4),Yt=Math.ceil(de.count/4),_e=ne%R.width,K=Math.floor(ne/R.width),Ft=Yt,Gt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,_e),r.pixelStorei(r.UNPACK_SKIP_ROWS,K),i.texSubImage2D(r.TEXTURE_2D,0,_e,K,Ft,Gt,ot,_t,R.data)}B.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Pt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,te),r.pixelStorei(r.UNPACK_SKIP_ROWS,ee)}}function J(B,R,ot){let _t=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(_t=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(_t=r.TEXTURE_3D);const Ut=Zt(B,R),Tt=R.source;i.bindTexture(_t,B.__webglTexture,r.TEXTURE0+ot);const Qt=s.get(Tt);if(Tt.version!==Qt.__version||Ut===!0){i.activeTexture(r.TEXTURE0+ot);const Pt=Le.getPrimaries(Le.workingColorSpace),te=R.colorSpace===_s?null:Le.getPrimaries(R.colorSpace),ee=R.colorSpace===_s||Pt===te?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let zt=T(R.image,!1,l.maxTextureSize);zt=re(R,zt);const Vt=c.convert(R.format,R.colorSpace),de=c.convert(R.type);let ne=D(R.internalFormat,Vt,de,R.colorSpace,R.isVideoTexture);Xt(_t,R);let Yt;const _e=R.mipmaps,K=R.isVideoTexture!==!0,Ft=Qt.__version===void 0||Ut===!0,Gt=Tt.dataReady,Jt=V(R,zt);if(R.isDepthTexture)ne=b(R.format===Vl,R.type),Ft&&(K?i.texStorage2D(r.TEXTURE_2D,1,ne,zt.width,zt.height):i.texImage2D(r.TEXTURE_2D,0,ne,zt.width,zt.height,0,Vt,de,null));else if(R.isDataTexture)if(_e.length>0){K&&Ft&&i.texStorage2D(r.TEXTURE_2D,Jt,ne,_e[0].width,_e[0].height);for(let Lt=0,at=_e.length;Lt<at;Lt++)Yt=_e[Lt],K?Gt&&i.texSubImage2D(r.TEXTURE_2D,Lt,0,0,Yt.width,Yt.height,Vt,de,Yt.data):i.texImage2D(r.TEXTURE_2D,Lt,ne,Yt.width,Yt.height,0,Vt,de,Yt.data);R.generateMipmaps=!1}else K?(Ft&&i.texStorage2D(r.TEXTURE_2D,Jt,ne,zt.width,zt.height),Gt&&ut(R,zt,Vt,de)):i.texImage2D(r.TEXTURE_2D,0,ne,zt.width,zt.height,0,Vt,de,zt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){K&&Ft&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Jt,ne,_e[0].width,_e[0].height,zt.depth);for(let Lt=0,at=_e.length;Lt<at;Lt++)if(Yt=_e[Lt],R.format!==Yi)if(Vt!==null)if(K){if(Gt)if(R.layerUpdates.size>0){const Ht=dx(Yt.width,Yt.height,R.format,R.type);for(const pe of R.layerUpdates){const je=Yt.data.subarray(pe*Ht/Yt.data.BYTES_PER_ELEMENT,(pe+1)*Ht/Yt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Lt,0,0,pe,Yt.width,Yt.height,1,Vt,je)}R.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Lt,0,0,0,Yt.width,Yt.height,zt.depth,Vt,Yt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Lt,ne,Yt.width,Yt.height,zt.depth,0,Yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else K?Gt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Lt,0,0,0,Yt.width,Yt.height,zt.depth,Vt,de,Yt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Lt,ne,Yt.width,Yt.height,zt.depth,0,Vt,de,Yt.data)}else{K&&Ft&&i.texStorage2D(r.TEXTURE_2D,Jt,ne,_e[0].width,_e[0].height);for(let Lt=0,at=_e.length;Lt<at;Lt++)Yt=_e[Lt],R.format!==Yi?Vt!==null?K?Gt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Lt,0,0,Yt.width,Yt.height,Vt,Yt.data):i.compressedTexImage2D(r.TEXTURE_2D,Lt,ne,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):K?Gt&&i.texSubImage2D(r.TEXTURE_2D,Lt,0,0,Yt.width,Yt.height,Vt,de,Yt.data):i.texImage2D(r.TEXTURE_2D,Lt,ne,Yt.width,Yt.height,0,Vt,de,Yt.data)}else if(R.isDataArrayTexture)if(K){if(Ft&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Jt,ne,zt.width,zt.height,zt.depth),Gt)if(R.layerUpdates.size>0){const Lt=dx(zt.width,zt.height,R.format,R.type);for(const at of R.layerUpdates){const Ht=zt.data.subarray(at*Lt/zt.data.BYTES_PER_ELEMENT,(at+1)*Lt/zt.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,at,zt.width,zt.height,1,Vt,de,Ht)}R.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,zt.width,zt.height,zt.depth,Vt,de,zt.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,ne,zt.width,zt.height,zt.depth,0,Vt,de,zt.data);else if(R.isData3DTexture)K?(Ft&&i.texStorage3D(r.TEXTURE_3D,Jt,ne,zt.width,zt.height,zt.depth),Gt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,zt.width,zt.height,zt.depth,Vt,de,zt.data)):i.texImage3D(r.TEXTURE_3D,0,ne,zt.width,zt.height,zt.depth,0,Vt,de,zt.data);else if(R.isFramebufferTexture){if(Ft)if(K)i.texStorage2D(r.TEXTURE_2D,Jt,ne,zt.width,zt.height);else{let Lt=zt.width,at=zt.height;for(let Ht=0;Ht<Jt;Ht++)i.texImage2D(r.TEXTURE_2D,Ht,ne,Lt,at,0,Vt,de,null),Lt>>=1,at>>=1}}else if(_e.length>0){if(K&&Ft){const Lt=se(_e[0]);i.texStorage2D(r.TEXTURE_2D,Jt,ne,Lt.width,Lt.height)}for(let Lt=0,at=_e.length;Lt<at;Lt++)Yt=_e[Lt],K?Gt&&i.texSubImage2D(r.TEXTURE_2D,Lt,0,0,Vt,de,Yt):i.texImage2D(r.TEXTURE_2D,Lt,ne,Vt,de,Yt);R.generateMipmaps=!1}else if(K){if(Ft){const Lt=se(zt);i.texStorage2D(r.TEXTURE_2D,Jt,ne,Lt.width,Lt.height)}Gt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Vt,de,zt)}else i.texImage2D(r.TEXTURE_2D,0,ne,Vt,de,zt);S(R)&&_(_t),Qt.__version=Tt.version,R.onUpdate&&R.onUpdate(R)}B.__version=R.version}function W(B,R,ot){if(R.image.length!==6)return;const _t=Zt(B,R),Ut=R.source;i.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+ot);const Tt=s.get(Ut);if(Ut.version!==Tt.__version||_t===!0){i.activeTexture(r.TEXTURE0+ot);const Qt=Le.getPrimaries(Le.workingColorSpace),Pt=R.colorSpace===_s?null:Le.getPrimaries(R.colorSpace),te=R.colorSpace===_s||Qt===Pt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);const ee=R.isCompressedTexture||R.image[0].isCompressedTexture,zt=R.image[0]&&R.image[0].isDataTexture,Vt=[];for(let at=0;at<6;at++)!ee&&!zt?Vt[at]=T(R.image[at],!0,l.maxCubemapSize):Vt[at]=zt?R.image[at].image:R.image[at],Vt[at]=re(R,Vt[at]);const de=Vt[0],ne=c.convert(R.format,R.colorSpace),Yt=c.convert(R.type),_e=D(R.internalFormat,ne,Yt,R.colorSpace),K=R.isVideoTexture!==!0,Ft=Tt.__version===void 0||_t===!0,Gt=Ut.dataReady;let Jt=V(R,de);Xt(r.TEXTURE_CUBE_MAP,R);let Lt;if(ee){K&&Ft&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Jt,_e,de.width,de.height);for(let at=0;at<6;at++){Lt=Vt[at].mipmaps;for(let Ht=0;Ht<Lt.length;Ht++){const pe=Lt[Ht];R.format!==Yi?ne!==null?K?Gt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ht,0,0,pe.width,pe.height,ne,pe.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ht,_e,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):K?Gt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ht,0,0,pe.width,pe.height,ne,Yt,pe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ht,_e,pe.width,pe.height,0,ne,Yt,pe.data)}}}else{if(Lt=R.mipmaps,K&&Ft){Lt.length>0&&Jt++;const at=se(Vt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Jt,_e,at.width,at.height)}for(let at=0;at<6;at++)if(zt){K?Gt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Vt[at].width,Vt[at].height,ne,Yt,Vt[at].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,_e,Vt[at].width,Vt[at].height,0,ne,Yt,Vt[at].data);for(let Ht=0;Ht<Lt.length;Ht++){const je=Lt[Ht].image[at].image;K?Gt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ht+1,0,0,je.width,je.height,ne,Yt,je.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ht+1,_e,je.width,je.height,0,ne,Yt,je.data)}}else{K?Gt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,ne,Yt,Vt[at]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,_e,ne,Yt,Vt[at]);for(let Ht=0;Ht<Lt.length;Ht++){const pe=Lt[Ht];K?Gt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ht+1,0,0,ne,Yt,pe.image[at]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+at,Ht+1,_e,ne,Yt,pe.image[at])}}}S(R)&&_(r.TEXTURE_CUBE_MAP),Tt.__version=Ut.version,R.onUpdate&&R.onUpdate(R)}B.__version=R.version}function Et(B,R,ot,_t,Ut,Tt){const Qt=c.convert(ot.format,ot.colorSpace),Pt=c.convert(ot.type),te=D(ot.internalFormat,Qt,Pt,ot.colorSpace),ee=s.get(R),zt=s.get(ot);if(zt.__renderTarget=R,!ee.__hasExternalTextures){const Vt=Math.max(1,R.width>>Tt),de=Math.max(1,R.height>>Tt);Ut===r.TEXTURE_3D||Ut===r.TEXTURE_2D_ARRAY?i.texImage3D(Ut,Tt,te,Vt,de,R.depth,0,Qt,Pt,null):i.texImage2D(Ut,Tt,te,Vt,de,0,Qt,Pt,null)}i.bindFramebuffer(r.FRAMEBUFFER,B),Dt(R)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,_t,Ut,zt.__webglTexture,0,At(R)):(Ut===r.TEXTURE_2D||Ut>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Ut<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,_t,Ut,zt.__webglTexture,Tt),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Rt(B,R,ot){if(r.bindRenderbuffer(r.RENDERBUFFER,B),R.depthBuffer){const _t=R.depthTexture,Ut=_t&&_t.isDepthTexture?_t.type:null,Tt=b(R.stencilBuffer,Ut),Qt=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Pt=At(R);Dt(R)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Pt,Tt,R.width,R.height):ot?r.renderbufferStorageMultisample(r.RENDERBUFFER,Pt,Tt,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,Tt,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Qt,r.RENDERBUFFER,B)}else{const _t=R.textures;for(let Ut=0;Ut<_t.length;Ut++){const Tt=_t[Ut],Qt=c.convert(Tt.format,Tt.colorSpace),Pt=c.convert(Tt.type),te=D(Tt.internalFormat,Qt,Pt,Tt.colorSpace),ee=At(R);ot&&Dt(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,te,R.width,R.height):Dt(R)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,te,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,te,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function dt(B,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,B),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const _t=s.get(R.depthTexture);_t.__renderTarget=R,(!_t.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),j(R.depthTexture,0);const Ut=_t.__webglTexture,Tt=At(R);if(R.depthTexture.format===Gl)Dt(R)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Ut,0,Tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Ut,0);else if(R.depthTexture.format===Vl)Dt(R)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Ut,0,Tt):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Ut,0);else throw new Error("Unknown depthTexture format")}function bt(B){const R=s.get(B),ot=B.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==B.depthTexture){const _t=B.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),_t){const Ut=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,_t.removeEventListener("dispose",Ut)};_t.addEventListener("dispose",Ut),R.__depthDisposeCallback=Ut}R.__boundDepthTexture=_t}if(B.depthTexture&&!R.__autoAllocateDepthBuffer){if(ot)throw new Error("target.depthTexture not supported in Cube render targets");const _t=B.texture.mipmaps;_t&&_t.length>0?dt(R.__webglFramebuffer[0],B):dt(R.__webglFramebuffer,B)}else if(ot){R.__webglDepthbuffer=[];for(let _t=0;_t<6;_t++)if(i.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[_t]),R.__webglDepthbuffer[_t]===void 0)R.__webglDepthbuffer[_t]=r.createRenderbuffer(),Rt(R.__webglDepthbuffer[_t],B,!1);else{const Ut=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Tt=R.__webglDepthbuffer[_t];r.bindRenderbuffer(r.RENDERBUFFER,Tt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ut,r.RENDERBUFFER,Tt)}}else{const _t=B.texture.mipmaps;if(_t&&_t.length>0?i.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),Rt(R.__webglDepthbuffer,B,!1);else{const Ut=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Tt=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Tt),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ut,r.RENDERBUFFER,Tt)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function vt(B,R,ot){const _t=s.get(B);R!==void 0&&Et(_t.__webglFramebuffer,B,B.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),ot!==void 0&&bt(B)}function I(B){const R=B.texture,ot=s.get(B),_t=s.get(R);B.addEventListener("dispose",P);const Ut=B.textures,Tt=B.isWebGLCubeRenderTarget===!0,Qt=Ut.length>1;if(Qt||(_t.__webglTexture===void 0&&(_t.__webglTexture=r.createTexture()),_t.__version=R.version,f.memory.textures++),Tt){ot.__webglFramebuffer=[];for(let Pt=0;Pt<6;Pt++)if(R.mipmaps&&R.mipmaps.length>0){ot.__webglFramebuffer[Pt]=[];for(let te=0;te<R.mipmaps.length;te++)ot.__webglFramebuffer[Pt][te]=r.createFramebuffer()}else ot.__webglFramebuffer[Pt]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){ot.__webglFramebuffer=[];for(let Pt=0;Pt<R.mipmaps.length;Pt++)ot.__webglFramebuffer[Pt]=r.createFramebuffer()}else ot.__webglFramebuffer=r.createFramebuffer();if(Qt)for(let Pt=0,te=Ut.length;Pt<te;Pt++){const ee=s.get(Ut[Pt]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),f.memory.textures++)}if(B.samples>0&&Dt(B)===!1){ot.__webglMultisampledFramebuffer=r.createFramebuffer(),ot.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,ot.__webglMultisampledFramebuffer);for(let Pt=0;Pt<Ut.length;Pt++){const te=Ut[Pt];ot.__webglColorRenderbuffer[Pt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,ot.__webglColorRenderbuffer[Pt]);const ee=c.convert(te.format,te.colorSpace),zt=c.convert(te.type),Vt=D(te.internalFormat,ee,zt,te.colorSpace,B.isXRRenderTarget===!0),de=At(B);r.renderbufferStorageMultisample(r.RENDERBUFFER,de,Vt,B.width,B.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Pt,r.RENDERBUFFER,ot.__webglColorRenderbuffer[Pt])}r.bindRenderbuffer(r.RENDERBUFFER,null),B.depthBuffer&&(ot.__webglDepthRenderbuffer=r.createRenderbuffer(),Rt(ot.__webglDepthRenderbuffer,B,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Tt){i.bindTexture(r.TEXTURE_CUBE_MAP,_t.__webglTexture),Xt(r.TEXTURE_CUBE_MAP,R);for(let Pt=0;Pt<6;Pt++)if(R.mipmaps&&R.mipmaps.length>0)for(let te=0;te<R.mipmaps.length;te++)Et(ot.__webglFramebuffer[Pt][te],B,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,te);else Et(ot.__webglFramebuffer[Pt],B,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Pt,0);S(R)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Qt){for(let Pt=0,te=Ut.length;Pt<te;Pt++){const ee=Ut[Pt],zt=s.get(ee);let Vt=r.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Vt=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Vt,zt.__webglTexture),Xt(Vt,ee),Et(ot.__webglFramebuffer,B,ee,r.COLOR_ATTACHMENT0+Pt,Vt,0),S(ee)&&_(Vt)}i.unbindTexture()}else{let Pt=r.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(Pt=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Pt,_t.__webglTexture),Xt(Pt,R),R.mipmaps&&R.mipmaps.length>0)for(let te=0;te<R.mipmaps.length;te++)Et(ot.__webglFramebuffer[te],B,R,r.COLOR_ATTACHMENT0,Pt,te);else Et(ot.__webglFramebuffer,B,R,r.COLOR_ATTACHMENT0,Pt,0);S(R)&&_(Pt),i.unbindTexture()}B.depthBuffer&&bt(B)}function Mt(B){const R=B.textures;for(let ot=0,_t=R.length;ot<_t;ot++){const Ut=R[ot];if(S(Ut)){const Tt=w(B),Qt=s.get(Ut).__webglTexture;i.bindTexture(Tt,Qt),_(Tt),i.unbindTexture()}}}const yt=[],ct=[];function ht(B){if(B.samples>0){if(Dt(B)===!1){const R=B.textures,ot=B.width,_t=B.height;let Ut=r.COLOR_BUFFER_BIT;const Tt=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Qt=s.get(B),Pt=R.length>1;if(Pt)for(let ee=0;ee<R.length;ee++)i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer);const te=B.texture.mipmaps;te&&te.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let ee=0;ee<R.length;ee++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(Ut|=r.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(Ut|=r.STENCIL_BUFFER_BIT)),Pt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Qt.__webglColorRenderbuffer[ee]);const zt=s.get(R[ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,zt,0)}r.blitFramebuffer(0,0,ot,_t,0,0,ot,_t,Ut,r.NEAREST),p===!0&&(yt.length=0,ct.length=0,yt.push(r.COLOR_ATTACHMENT0+ee),B.depthBuffer&&B.resolveDepthBuffer===!1&&(yt.push(Tt),ct.push(Tt),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ct)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,yt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Pt)for(let ee=0;ee<R.length;ee++){i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,Qt.__webglColorRenderbuffer[ee]);const zt=s.get(R[ee]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,zt,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&p){const R=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function At(B){return Math.min(l.maxSamples,B.samples)}function Dt(B){const R=s.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Ot(B){const R=f.render.frame;v.get(B)!==R&&(v.set(B,R),B.update())}function re(B,R){const ot=B.colorSpace,_t=B.format,Ut=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||ot!==sr&&ot!==_s&&(Le.getTransfer(ot)===We?(_t!==Yi||Ut!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ot)),R}function se(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(m.width=B.naturalWidth||B.width,m.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(m.width=B.displayWidth,m.height=B.displayHeight):(m.width=B.width,m.height=B.height),m}this.allocateTextureUnit=Z,this.resetTextureUnits=Y,this.setTexture2D=j,this.setTexture2DArray=k,this.setTexture3D=U,this.setTextureCube=z,this.rebindTextures=vt,this.setupRenderTarget=I,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=Dt}function PC(r,t){function i(s,l=_s){let c;const f=Le.getTransfer(l);if(s===Pi)return r.UNSIGNED_BYTE;if(s===Fm)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Hm)return r.UNSIGNED_SHORT_5_5_5_1;if(s===e1)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===n1)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===$x)return r.BYTE;if(s===t1)return r.SHORT;if(s===Fl)return r.UNSIGNED_SHORT;if(s===Bm)return r.INT;if(s===ar)return r.UNSIGNED_INT;if(s===la)return r.FLOAT;if(s===Oi)return r.HALF_FLOAT;if(s===i1)return r.ALPHA;if(s===a1)return r.RGB;if(s===Yi)return r.RGBA;if(s===Gl)return r.DEPTH_COMPONENT;if(s===Vl)return r.DEPTH_STENCIL;if(s===Gm)return r.RED;if(s===Vm)return r.RED_INTEGER;if(s===s1)return r.RG;if(s===km)return r.RG_INTEGER;if(s===Xm)return r.RGBA_INTEGER;if(s===tf||s===ef||s===nf||s===af)if(f===We)if(c=t.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===tf)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ef)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===nf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===af)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=t.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===tf)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ef)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===nf)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===af)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Qp||s===Kp||s===Jp||s===$p)if(c=t.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Qp)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Kp)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Jp)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===$p)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===tm||s===em||s===nm)if(c=t.get("WEBGL_compressed_texture_etc"),c!==null){if(s===tm||s===em)return f===We?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===nm)return f===We?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===im||s===am||s===sm||s===rm||s===om||s===lm||s===cm||s===um||s===fm||s===hm||s===dm||s===pm||s===mm||s===gm)if(c=t.get("WEBGL_compressed_texture_astc"),c!==null){if(s===im)return f===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===am)return f===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===sm)return f===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===rm)return f===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===om)return f===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===lm)return f===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===cm)return f===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===um)return f===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===fm)return f===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===hm)return f===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===dm)return f===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===pm)return f===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===mm)return f===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===gm)return f===We?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===vm||s===_m||s===ym)if(c=t.get("EXT_texture_compression_bptc"),c!==null){if(s===vm)return f===We?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===_m)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===ym)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===xm||s===Sm||s===Mm||s===Em)if(c=t.get("EXT_texture_compression_rgtc"),c!==null){if(s===xm)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Sm)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Mm)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Em)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Hl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const zC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,IC=`
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

}`;class BC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new x1(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new en({vertexShader:zC,fragmentShader:IC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new an(new Ia(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class FC extends bo{constructor(t,i){super();const s=this;let l=null,c=1,f=null,d="local-floor",p=1,m=null,v=null,g=null,y=null,x=null,E=null;const T=typeof XRWebGLBinding<"u",S=new BC,_={},w=i.getContextAttributes();let D=null,b=null;const V=[],H=[],P=new It;let O=null;const C=new si;C.viewport=new Qe;const A=new si;A.viewport=new Qe;const G=[C,A],Y=new rA;let Z=null,it=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let W=V[J];return W===void 0&&(W=new Mp,V[J]=W),W.getTargetRaySpace()},this.getControllerGrip=function(J){let W=V[J];return W===void 0&&(W=new Mp,V[J]=W),W.getGripSpace()},this.getHand=function(J){let W=V[J];return W===void 0&&(W=new Mp,V[J]=W),W.getHandSpace()};function j(J){const W=H.indexOf(J.inputSource);if(W===-1)return;const Et=V[W];Et!==void 0&&(Et.update(J.inputSource,J.frame,m||f),Et.dispatchEvent({type:J.type,data:J.inputSource}))}function k(){l.removeEventListener("select",j),l.removeEventListener("selectstart",j),l.removeEventListener("selectend",j),l.removeEventListener("squeeze",j),l.removeEventListener("squeezestart",j),l.removeEventListener("squeezeend",j),l.removeEventListener("end",k),l.removeEventListener("inputsourceschange",U);for(let J=0;J<V.length;J++){const W=H[J];W!==null&&(H[J]=null,V[J].disconnect(W))}Z=null,it=null,S.reset();for(const J in _)delete _[J];t.setRenderTarget(D),x=null,y=null,g=null,l=null,b=null,ut.stop(),s.isPresenting=!1,t.setPixelRatio(O),t.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){c=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){d=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return y!==null?y:x},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(J){if(l=J,l!==null){if(D=t.getRenderTarget(),l.addEventListener("select",j),l.addEventListener("selectstart",j),l.addEventListener("selectend",j),l.addEventListener("squeeze",j),l.addEventListener("squeezestart",j),l.addEventListener("squeezeend",j),l.addEventListener("end",k),l.addEventListener("inputsourceschange",U),w.xrCompatible!==!0&&await i.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(P),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Et=null,Rt=null,dt=null;w.depth&&(dt=w.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Et=w.stencil?Vl:Gl,Rt=w.stencil?Hl:ar);const bt={colorFormat:i.RGBA8,depthFormat:dt,scaleFactor:c};g=this.getBinding(),y=g.createProjectionLayer(bt),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),b=new Si(y.textureWidth,y.textureHeight,{format:Yi,type:Pi,depthTexture:new y1(y.textureWidth,y.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,Et),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const Et={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:c};x=new XRWebGLLayer(l,i,Et),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),b=new Si(x.framebufferWidth,x.framebufferHeight,{format:Yi,type:Pi,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),ut.setContext(l),ut.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function U(J){for(let W=0;W<J.removed.length;W++){const Et=J.removed[W],Rt=H.indexOf(Et);Rt>=0&&(H[Rt]=null,V[Rt].disconnect(Et))}for(let W=0;W<J.added.length;W++){const Et=J.added[W];let Rt=H.indexOf(Et);if(Rt===-1){for(let bt=0;bt<V.length;bt++)if(bt>=H.length){H.push(Et),Rt=bt;break}else if(H[bt]===null){H[bt]=Et,Rt=bt;break}if(Rt===-1)break}const dt=V[Rt];dt&&dt.connect(Et)}}const z=new F,$=new F;function mt(J,W,Et){z.setFromMatrixPosition(W.matrixWorld),$.setFromMatrixPosition(Et.matrixWorld);const Rt=z.distanceTo($),dt=W.projectionMatrix.elements,bt=Et.projectionMatrix.elements,vt=dt[14]/(dt[10]-1),I=dt[14]/(dt[10]+1),Mt=(dt[9]+1)/dt[5],yt=(dt[9]-1)/dt[5],ct=(dt[8]-1)/dt[0],ht=(bt[8]+1)/bt[0],At=vt*ct,Dt=vt*ht,Ot=Rt/(-ct+ht),re=Ot*-ct;if(W.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(re),J.translateZ(Ot),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),dt[10]===-1)J.projectionMatrix.copy(W.projectionMatrix),J.projectionMatrixInverse.copy(W.projectionMatrixInverse);else{const se=vt+Ot,B=I+Ot,R=At-re,ot=Dt+(Rt-re),_t=Mt*I/B*se,Ut=yt*I/B*se;J.projectionMatrix.makePerspective(R,ot,_t,Ut,se,B),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Nt(J,W){W===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(W.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(l===null)return;let W=J.near,Et=J.far;S.texture!==null&&(S.depthNear>0&&(W=S.depthNear),S.depthFar>0&&(Et=S.depthFar)),Y.near=A.near=C.near=W,Y.far=A.far=C.far=Et,(Z!==Y.near||it!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),Z=Y.near,it=Y.far),Y.layers.mask=J.layers.mask|6,C.layers.mask=Y.layers.mask&3,A.layers.mask=Y.layers.mask&5;const Rt=J.parent,dt=Y.cameras;Nt(Y,Rt);for(let bt=0;bt<dt.length;bt++)Nt(dt[bt],Rt);dt.length===2?mt(Y,C,A):Y.projectionMatrix.copy(C.projectionMatrix),Xt(J,Y,Rt)};function Xt(J,W,Et){Et===null?J.matrix.copy(W.matrixWorld):(J.matrix.copy(Et.matrixWorld),J.matrix.invert(),J.matrix.multiply(W.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(W.projectionMatrix),J.projectionMatrixInverse.copy(W.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=kl*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(y===null&&x===null))return p},this.setFoveation=function(J){p=J,y!==null&&(y.fixedFoveation=J),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=J)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Y)},this.getCameraTexture=function(J){return _[J]};let Zt=null;function X(J,W){if(v=W.getViewerPose(m||f),E=W,v!==null){const Et=v.views;x!==null&&(t.setRenderTargetFramebuffer(b,x.framebuffer),t.setRenderTarget(b));let Rt=!1;Et.length!==Y.cameras.length&&(Y.cameras.length=0,Rt=!0);for(let I=0;I<Et.length;I++){const Mt=Et[I];let yt=null;if(x!==null)yt=x.getViewport(Mt);else{const ht=g.getViewSubImage(y,Mt);yt=ht.viewport,I===0&&(t.setRenderTargetTextures(b,ht.colorTexture,ht.depthStencilTexture),t.setRenderTarget(b))}let ct=G[I];ct===void 0&&(ct=new si,ct.layers.enable(I),ct.viewport=new Qe,G[I]=ct),ct.matrix.fromArray(Mt.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(Mt.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(yt.x,yt.y,yt.width,yt.height),I===0&&(Y.matrix.copy(ct.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Rt===!0&&Y.cameras.push(ct)}const dt=l.enabledFeatures;if(dt&&dt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=s.getBinding();const I=g.getDepthInformation(Et[0]);I&&I.isValid&&I.texture&&S.init(I,l.renderState)}if(dt&&dt.includes("camera-access")&&T){t.state.unbindTexture(),g=s.getBinding();for(let I=0;I<Et.length;I++){const Mt=Et[I].camera;if(Mt){let yt=_[Mt];yt||(yt=new x1,_[Mt]=yt);const ct=g.getCameraImage(Mt);yt.sourceTexture=ct}}}}for(let Et=0;Et<V.length;Et++){const Rt=H[Et],dt=V[Et];Rt!==null&&dt!==void 0&&dt.update(Rt,W,m||f)}Zt&&Zt(J,W),W.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:W}),E=null}const ut=new U1;ut.setAnimationLoop(X),this.setAnimationLoop=function(J){Zt=J},this.dispose=function(){}}}const Qs=new ri,HC=new Oe;function GC(r,t){function i(S,_){S.matrixAutoUpdate===!0&&S.updateMatrix(),_.value.copy(S.matrix)}function s(S,_){_.color.getRGB(S.fogColor.value,p1(r)),_.isFog?(S.fogNear.value=_.near,S.fogFar.value=_.far):_.isFogExp2&&(S.fogDensity.value=_.density)}function l(S,_,w,D,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(S,_):_.isMeshToonMaterial?(c(S,_),g(S,_)):_.isMeshPhongMaterial?(c(S,_),v(S,_)):_.isMeshStandardMaterial?(c(S,_),y(S,_),_.isMeshPhysicalMaterial&&x(S,_,b)):_.isMeshMatcapMaterial?(c(S,_),E(S,_)):_.isMeshDepthMaterial?c(S,_):_.isMeshDistanceMaterial?(c(S,_),T(S,_)):_.isMeshNormalMaterial?c(S,_):_.isLineBasicMaterial?(f(S,_),_.isLineDashedMaterial&&d(S,_)):_.isPointsMaterial?p(S,_,w,D):_.isSpriteMaterial?m(S,_):_.isShadowMaterial?(S.color.value.copy(_.color),S.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(S,_){S.opacity.value=_.opacity,_.color&&S.diffuse.value.copy(_.color),_.emissive&&S.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.bumpMap&&(S.bumpMap.value=_.bumpMap,i(_.bumpMap,S.bumpMapTransform),S.bumpScale.value=_.bumpScale,_.side===Bn&&(S.bumpScale.value*=-1)),_.normalMap&&(S.normalMap.value=_.normalMap,i(_.normalMap,S.normalMapTransform),S.normalScale.value.copy(_.normalScale),_.side===Bn&&S.normalScale.value.negate()),_.displacementMap&&(S.displacementMap.value=_.displacementMap,i(_.displacementMap,S.displacementMapTransform),S.displacementScale.value=_.displacementScale,S.displacementBias.value=_.displacementBias),_.emissiveMap&&(S.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,S.emissiveMapTransform)),_.specularMap&&(S.specularMap.value=_.specularMap,i(_.specularMap,S.specularMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest);const w=t.get(_),D=w.envMap,b=w.envMapRotation;D&&(S.envMap.value=D,Qs.copy(b),Qs.x*=-1,Qs.y*=-1,Qs.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(Qs.y*=-1,Qs.z*=-1),S.envMapRotation.value.setFromMatrix4(HC.makeRotationFromEuler(Qs)),S.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=_.reflectivity,S.ior.value=_.ior,S.refractionRatio.value=_.refractionRatio),_.lightMap&&(S.lightMap.value=_.lightMap,S.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,S.lightMapTransform)),_.aoMap&&(S.aoMap.value=_.aoMap,S.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,S.aoMapTransform))}function f(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform))}function d(S,_){S.dashSize.value=_.dashSize,S.totalSize.value=_.dashSize+_.gapSize,S.scale.value=_.scale}function p(S,_,w,D){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.size.value=_.size*w,S.scale.value=D*.5,_.map&&(S.map.value=_.map,i(_.map,S.uvTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function m(S,_){S.diffuse.value.copy(_.color),S.opacity.value=_.opacity,S.rotation.value=_.rotation,_.map&&(S.map.value=_.map,i(_.map,S.mapTransform)),_.alphaMap&&(S.alphaMap.value=_.alphaMap,i(_.alphaMap,S.alphaMapTransform)),_.alphaTest>0&&(S.alphaTest.value=_.alphaTest)}function v(S,_){S.specular.value.copy(_.specular),S.shininess.value=Math.max(_.shininess,1e-4)}function g(S,_){_.gradientMap&&(S.gradientMap.value=_.gradientMap)}function y(S,_){S.metalness.value=_.metalness,_.metalnessMap&&(S.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,S.metalnessMapTransform)),S.roughness.value=_.roughness,_.roughnessMap&&(S.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,S.roughnessMapTransform)),_.envMap&&(S.envMapIntensity.value=_.envMapIntensity)}function x(S,_,w){S.ior.value=_.ior,_.sheen>0&&(S.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),S.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(S.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,S.sheenColorMapTransform)),_.sheenRoughnessMap&&(S.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,S.sheenRoughnessMapTransform))),_.clearcoat>0&&(S.clearcoat.value=_.clearcoat,S.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(S.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,S.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(S.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Bn&&S.clearcoatNormalScale.value.negate())),_.dispersion>0&&(S.dispersion.value=_.dispersion),_.iridescence>0&&(S.iridescence.value=_.iridescence,S.iridescenceIOR.value=_.iridescenceIOR,S.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(S.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,S.iridescenceMapTransform)),_.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),_.transmission>0&&(S.transmission.value=_.transmission,S.transmissionSamplerMap.value=w.texture,S.transmissionSamplerSize.value.set(w.width,w.height),_.transmissionMap&&(S.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,S.transmissionMapTransform)),S.thickness.value=_.thickness,_.thicknessMap&&(S.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=_.attenuationDistance,S.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(S.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(S.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=_.specularIntensity,S.specularColor.value.copy(_.specularColor),_.specularColorMap&&(S.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,S.specularColorMapTransform)),_.specularIntensityMap&&(S.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,_){_.matcap&&(S.matcap.value=_.matcap)}function T(S,_){const w=t.get(_).light;S.referencePosition.value.setFromMatrixPosition(w.matrixWorld),S.nearDistance.value=w.shadow.camera.near,S.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function VC(r,t,i,s){let l={},c={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(w,D){const b=D.program;s.uniformBlockBinding(w,b)}function m(w,D){let b=l[w.id];b===void 0&&(E(w),b=v(w),l[w.id]=b,w.addEventListener("dispose",S));const V=D.program;s.updateUBOMapping(w,V);const H=t.render.frame;c[w.id]!==H&&(y(w),c[w.id]=H)}function v(w){const D=g();w.__bindingPointIndex=D;const b=r.createBuffer(),V=w.__size,H=w.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,V,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,D,b),b}function g(){for(let w=0;w<d;w++)if(f.indexOf(w)===-1)return f.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(w){const D=l[w.id],b=w.uniforms,V=w.__cache;r.bindBuffer(r.UNIFORM_BUFFER,D);for(let H=0,P=b.length;H<P;H++){const O=Array.isArray(b[H])?b[H]:[b[H]];for(let C=0,A=O.length;C<A;C++){const G=O[C];if(x(G,H,C,V)===!0){const Y=G.__offset,Z=Array.isArray(G.value)?G.value:[G.value];let it=0;for(let j=0;j<Z.length;j++){const k=Z[j],U=T(k);typeof k=="number"||typeof k=="boolean"?(G.__data[0]=k,r.bufferSubData(r.UNIFORM_BUFFER,Y+it,G.__data)):k.isMatrix3?(G.__data[0]=k.elements[0],G.__data[1]=k.elements[1],G.__data[2]=k.elements[2],G.__data[3]=0,G.__data[4]=k.elements[3],G.__data[5]=k.elements[4],G.__data[6]=k.elements[5],G.__data[7]=0,G.__data[8]=k.elements[6],G.__data[9]=k.elements[7],G.__data[10]=k.elements[8],G.__data[11]=0):(k.toArray(G.__data,it),it+=U.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,G.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(w,D,b,V){const H=w.value,P=D+"_"+b;if(V[P]===void 0)return typeof H=="number"||typeof H=="boolean"?V[P]=H:V[P]=H.clone(),!0;{const O=V[P];if(typeof H=="number"||typeof H=="boolean"){if(O!==H)return V[P]=H,!0}else if(O.equals(H)===!1)return O.copy(H),!0}return!1}function E(w){const D=w.uniforms;let b=0;const V=16;for(let P=0,O=D.length;P<O;P++){const C=Array.isArray(D[P])?D[P]:[D[P]];for(let A=0,G=C.length;A<G;A++){const Y=C[A],Z=Array.isArray(Y.value)?Y.value:[Y.value];for(let it=0,j=Z.length;it<j;it++){const k=Z[it],U=T(k),z=b%V,$=z%U.boundary,mt=z+$;b+=$,mt!==0&&V-mt<U.storage&&(b+=V-mt),Y.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=b,b+=U.storage}}}const H=b%V;return H>0&&(b+=V-H),w.__size=b,w.__cache={},this}function T(w){const D={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(D.boundary=4,D.storage=4):w.isVector2?(D.boundary=8,D.storage=8):w.isVector3||w.isColor?(D.boundary=16,D.storage=12):w.isVector4?(D.boundary=16,D.storage=16):w.isMatrix3?(D.boundary=48,D.storage=48):w.isMatrix4?(D.boundary=64,D.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),D}function S(w){const D=w.target;D.removeEventListener("dispose",S);const b=f.indexOf(D.__bindingPointIndex);f.splice(b,1),r.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function _(){for(const w in l)r.deleteBuffer(l[w]);f=[],l={},c={}}return{bind:p,update:m,dispose:_}}class kC{constructor(t={}){const{canvas:i=kT(),context:s=null,depth:l=!0,stencil:c=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let x;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=s.getContextAttributes().alpha}else x=f;const E=new Uint32Array(4),T=new Int32Array(4);let S=null,_=null;const w=[],D=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let V=!1;this._outputColorSpace=Xn;let H=0,P=0,O=null,C=-1,A=null;const G=new Qe,Y=new Qe;let Z=null;const it=new le(0);let j=0,k=i.width,U=i.height,z=1,$=null,mt=null;const Nt=new Qe(0,0,k,U),Xt=new Qe(0,0,k,U);let Zt=!1;const X=new yf;let ut=!1,J=!1;const W=new Oe,Et=new F,Rt=new Qe,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function vt(){return O===null?z:1}let I=s;function Mt(L,st){return i.getContext(L,st)}try{const L={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${zm}`),i.addEventListener("webglcontextlost",Gt,!1),i.addEventListener("webglcontextrestored",Jt,!1),i.addEventListener("webglcontextcreationerror",Lt,!1),I===null){const st="webgl2";if(I=Mt(st,L),I===null)throw Mt(st)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let yt,ct,ht,At,Dt,Ot,re,se,B,R,ot,_t,Ut,Tt,Qt,Pt,te,ee,zt,Vt,de,ne,Yt,_e;function K(){yt=new $w(I),yt.init(),ne=new PC(I,yt),ct=new Yw(I,yt,t,ne),ht=new LC(I,yt),ct.reversedDepthBuffer&&y&&ht.buffers.depth.setReversed(!0),At=new n3(I),Dt=new xC,Ot=new OC(I,yt,ht,Dt,ct,ne,At),re=new jw(b),se=new Jw(b),B=new lA(I),Yt=new Xw(I,B),R=new t3(I,B,At,Yt),ot=new a3(I,R,B,At),zt=new i3(I,ct,Ot),Pt=new Ww(Dt),_t=new yC(b,re,se,yt,ct,Yt,Pt),Ut=new GC(b,Dt),Tt=new MC,Qt=new CC(yt),ee=new kw(b,re,se,ht,ot,x,p),te=new NC(b,ot,ct),_e=new VC(I,At,ct,ht),Vt=new qw(I,yt,At),de=new e3(I,yt,At),At.programs=_t.programs,b.capabilities=ct,b.extensions=yt,b.properties=Dt,b.renderLists=Tt,b.shadowMap=te,b.state=ht,b.info=At}K();const Ft=new FC(b,I);this.xr=Ft,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const L=yt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=yt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(L){L!==void 0&&(z=L,this.setSize(k,U,!1))},this.getSize=function(L){return L.set(k,U)},this.setSize=function(L,st,xt=!0){if(Ft.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=L,U=st,i.width=Math.floor(L*z),i.height=Math.floor(st*z),xt===!0&&(i.style.width=L+"px",i.style.height=st+"px"),this.setViewport(0,0,L,st)},this.getDrawingBufferSize=function(L){return L.set(k*z,U*z).floor()},this.setDrawingBufferSize=function(L,st,xt){k=L,U=st,z=xt,i.width=Math.floor(L*xt),i.height=Math.floor(st*xt),this.setViewport(0,0,L,st)},this.getCurrentViewport=function(L){return L.copy(G)},this.getViewport=function(L){return L.copy(Nt)},this.setViewport=function(L,st,xt,St){L.isVector4?Nt.set(L.x,L.y,L.z,L.w):Nt.set(L,st,xt,St),ht.viewport(G.copy(Nt).multiplyScalar(z).round())},this.getScissor=function(L){return L.copy(Xt)},this.setScissor=function(L,st,xt,St){L.isVector4?Xt.set(L.x,L.y,L.z,L.w):Xt.set(L,st,xt,St),ht.scissor(Y.copy(Xt).multiplyScalar(z).round())},this.getScissorTest=function(){return Zt},this.setScissorTest=function(L){ht.setScissorTest(Zt=L)},this.setOpaqueSort=function(L){$=L},this.setTransparentSort=function(L){mt=L},this.getClearColor=function(L){return L.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(L=!0,st=!0,xt=!0){let St=0;if(L){let rt=!1;if(O!==null){const Bt=O.texture.format;rt=Bt===Xm||Bt===km||Bt===Vm}if(rt){const Bt=O.texture.type,Wt=Bt===Pi||Bt===ar||Bt===Fl||Bt===Hl||Bt===Fm||Bt===Hm,Kt=ee.getClearColor(),kt=ee.getClearAlpha(),ie=Kt.r,me=Kt.g,ue=Kt.b;Wt?(E[0]=ie,E[1]=me,E[2]=ue,E[3]=kt,I.clearBufferuiv(I.COLOR,0,E)):(T[0]=ie,T[1]=me,T[2]=ue,T[3]=kt,I.clearBufferiv(I.COLOR,0,T))}else St|=I.COLOR_BUFFER_BIT}st&&(St|=I.DEPTH_BUFFER_BIT),xt&&(St|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(St)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Gt,!1),i.removeEventListener("webglcontextrestored",Jt,!1),i.removeEventListener("webglcontextcreationerror",Lt,!1),ee.dispose(),Tt.dispose(),Qt.dispose(),Dt.dispose(),re.dispose(),se.dispose(),ot.dispose(),Yt.dispose(),_e.dispose(),_t.dispose(),Ft.dispose(),Ft.removeEventListener("sessionstart",En),Ft.removeEventListener("sessionend",Fn),ha.stop()};function Gt(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),V=!0}function Jt(){console.log("THREE.WebGLRenderer: Context Restored."),V=!1;const L=At.autoReset,st=te.enabled,xt=te.autoUpdate,St=te.needsUpdate,rt=te.type;K(),At.autoReset=L,te.enabled=st,te.autoUpdate=xt,te.needsUpdate=St,te.type=rt}function Lt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function at(L){const st=L.target;st.removeEventListener("dispose",at),Ht(st)}function Ht(L){pe(L),Dt.remove(L)}function pe(L){const st=Dt.get(L).programs;st!==void 0&&(st.forEach(function(xt){_t.releaseProgram(xt)}),L.isShaderMaterial&&_t.releaseShaderCache(L))}this.renderBufferDirect=function(L,st,xt,St,rt,Bt){st===null&&(st=dt);const Wt=rt.isMesh&&rt.matrixWorld.determinant()<0,Kt=$l(L,st,xt,St,rt);ht.setMaterial(St,Wt);let kt=xt.index,ie=1;if(St.wireframe===!0){if(kt=R.getWireframeAttribute(xt),kt===void 0)return;ie=2}const me=xt.drawRange,ue=xt.attributes.position;let be=me.start*ie,Ve=(me.start+me.count)*ie;Bt!==null&&(be=Math.max(be,Bt.start*ie),Ve=Math.min(Ve,(Bt.start+Bt.count)*ie)),kt!==null?(be=Math.max(be,0),Ve=Math.min(Ve,kt.count)):ue!=null&&(be=Math.max(be,0),Ve=Math.min(Ve,ue.count));const nn=Ve-be;if(nn<0||nn===1/0)return;Yt.setup(rt,St,Kt,xt,kt);let Be,Pe=Vt;if(kt!==null&&(Be=B.get(kt),Pe=de,Pe.setIndex(Be)),rt.isMesh)St.wireframe===!0?(ht.setLineWidth(St.wireframeLinewidth*vt()),Pe.setMode(I.LINES)):Pe.setMode(I.TRIANGLES);else if(rt.isLine){let fe=St.linewidth;fe===void 0&&(fe=1),ht.setLineWidth(fe*vt()),rt.isLineSegments?Pe.setMode(I.LINES):rt.isLineLoop?Pe.setMode(I.LINE_LOOP):Pe.setMode(I.LINE_STRIP)}else rt.isPoints?Pe.setMode(I.POINTS):rt.isSprite&&Pe.setMode(I.TRIANGLES);if(rt.isBatchedMesh)if(rt._multiDrawInstances!==null)Xl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pe.renderMultiDrawInstances(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount,rt._multiDrawInstances);else if(yt.get("WEBGL_multi_draw"))Pe.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{const fe=rt._multiDrawStarts,Fe=rt._multiDrawCounts,Ee=rt._multiDrawCount,Tn=kt?B.get(kt).bytesPerElement:1,li=Dt.get(St).currentProgram.getUniforms();for(let ze=0;ze<Ee;ze++)li.setValue(I,"_gl_DrawID",ze),Pe.render(fe[ze]/Tn,Fe[ze])}else if(rt.isInstancedMesh)Pe.renderInstances(be,nn,rt.count);else if(xt.isInstancedBufferGeometry){const fe=xt._maxInstanceCount!==void 0?xt._maxInstanceCount:1/0,Fe=Math.min(xt.instanceCount,fe);Pe.renderInstances(be,nn,Fe)}else Pe.render(be,nn)};function je(L,st,xt){L.transparent===!0&&L.side===yi&&L.forceSinglePass===!1?(L.side=Bn,L.needsUpdate=!0,Mi(L,st,xt),L.side=ys,L.needsUpdate=!0,Mi(L,st,xt),L.side=yi):Mi(L,st,xt)}this.compile=function(L,st,xt=null){xt===null&&(xt=L),_=Qt.get(xt),_.init(st),D.push(_),xt.traverseVisible(function(rt){rt.isLight&&rt.layers.test(st.layers)&&(_.pushLight(rt),rt.castShadow&&_.pushShadow(rt))}),L!==xt&&L.traverseVisible(function(rt){rt.isLight&&rt.layers.test(st.layers)&&(_.pushLight(rt),rt.castShadow&&_.pushShadow(rt))}),_.setupLights();const St=new Set;return L.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;const Bt=rt.material;if(Bt)if(Array.isArray(Bt))for(let Wt=0;Wt<Bt.length;Wt++){const Kt=Bt[Wt];je(Kt,xt,rt),St.add(Kt)}else je(Bt,xt,rt),St.add(Bt)}),_=D.pop(),St},this.compileAsync=function(L,st,xt=null){const St=this.compile(L,st,xt);return new Promise(rt=>{function Bt(){if(St.forEach(function(Wt){Dt.get(Wt).currentProgram.isReady()&&St.delete(Wt)}),St.size===0){rt(L);return}setTimeout(Bt,10)}yt.get("KHR_parallel_shader_compile")!==null?Bt():setTimeout(Bt,10)})};let Re=null;function rn(L){Re&&Re(L)}function En(){ha.stop()}function Fn(){ha.start()}const ha=new U1;ha.setAnimationLoop(rn),typeof self<"u"&&ha.setContext(self),this.setAnimationLoop=function(L){Re=L,Ft.setAnimationLoop(L),L===null?ha.stop():ha.start()},Ft.addEventListener("sessionstart",En),Ft.addEventListener("sessionend",Fn),this.render=function(L,st){if(st!==void 0&&st.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),st.parent===null&&st.matrixWorldAutoUpdate===!0&&st.updateMatrixWorld(),Ft.enabled===!0&&Ft.isPresenting===!0&&(Ft.cameraAutoUpdate===!0&&Ft.updateCamera(st),st=Ft.getCamera()),L.isScene===!0&&L.onBeforeRender(b,L,st,O),_=Qt.get(L,D.length),_.init(st),D.push(_),W.multiplyMatrices(st.projectionMatrix,st.matrixWorldInverse),X.setFromProjectionMatrix(W,ca,st.reversedDepth),J=this.localClippingEnabled,ut=Pt.init(this.clippingPlanes,J),S=Tt.get(L,w.length),S.init(),w.push(S),Ft.enabled===!0&&Ft.isPresenting===!0){const Bt=b.xr.getDepthSensingMesh();Bt!==null&&Ro(Bt,st,-1/0,b.sortObjects)}Ro(L,st,0,b.sortObjects),S.finish(),b.sortObjects===!0&&S.sort($,mt),bt=Ft.enabled===!1||Ft.isPresenting===!1||Ft.hasDepthSensing()===!1,bt&&ee.addToRenderList(S,L),this.info.render.frame++,ut===!0&&Pt.beginShadows();const xt=_.state.shadowsArray;te.render(xt,L,st),ut===!0&&Pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const St=S.opaque,rt=S.transmissive;if(_.setupLights(),st.isArrayCamera){const Bt=st.cameras;if(rt.length>0)for(let Wt=0,Kt=Bt.length;Wt<Kt;Wt++){const kt=Bt[Wt];Ss(St,rt,L,kt)}bt&&ee.render(L);for(let Wt=0,Kt=Bt.length;Wt<Kt;Wt++){const kt=Bt[Wt];Jl(S,L,kt,kt.viewport)}}else rt.length>0&&Ss(St,rt,L,st),bt&&ee.render(L),Jl(S,L,st);O!==null&&P===0&&(Ot.updateMultisampleRenderTarget(O),Ot.updateRenderTargetMipmap(O)),L.isScene===!0&&L.onAfterRender(b,L,st),Yt.resetDefaultState(),C=-1,A=null,D.pop(),D.length>0?(_=D[D.length-1],ut===!0&&Pt.setGlobalState(b.clippingPlanes,_.state.camera)):_=null,w.pop(),w.length>0?S=w[w.length-1]:S=null};function Ro(L,st,xt,St){if(L.visible===!1)return;if(L.layers.test(st.layers)){if(L.isGroup)xt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(st);else if(L.isLight)_.pushLight(L),L.castShadow&&_.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||X.intersectsSprite(L)){St&&Rt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(W);const Wt=ot.update(L),Kt=L.material;Kt.visible&&S.push(L,Wt,Kt,xt,Rt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||X.intersectsObject(L))){const Wt=ot.update(L),Kt=L.material;if(St&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Rt.copy(L.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),Rt.copy(Wt.boundingSphere.center)),Rt.applyMatrix4(L.matrixWorld).applyMatrix4(W)),Array.isArray(Kt)){const kt=Wt.groups;for(let ie=0,me=kt.length;ie<me;ie++){const ue=kt[ie],be=Kt[ue.materialIndex];be&&be.visible&&S.push(L,Wt,be,xt,Rt.z,ue)}}else Kt.visible&&S.push(L,Wt,Kt,xt,Rt.z,null)}}const Bt=L.children;for(let Wt=0,Kt=Bt.length;Wt<Kt;Wt++)Ro(Bt[Wt],st,xt,St)}function Jl(L,st,xt,St){const rt=L.opaque,Bt=L.transmissive,Wt=L.transparent;_.setupLightsView(xt),ut===!0&&Pt.setGlobalState(b.clippingPlanes,xt),St&&ht.viewport(G.copy(St)),rt.length>0&&da(rt,st,xt),Bt.length>0&&da(Bt,st,xt),Wt.length>0&&da(Wt,st,xt),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function Ss(L,st,xt,St){if((xt.isScene===!0?xt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[St.id]===void 0&&(_.state.transmissionRenderTarget[St.id]=new Si(1,1,{generateMipmaps:!0,type:yt.has("EXT_color_buffer_half_float")||yt.has("EXT_color_buffer_float")?Oi:Pi,minFilter:nr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const Bt=_.state.transmissionRenderTarget[St.id],Wt=St.viewport||G;Bt.setSize(Wt.z*b.transmissionResolutionScale,Wt.w*b.transmissionResolutionScale);const Kt=b.getRenderTarget(),kt=b.getActiveCubeFace(),ie=b.getActiveMipmapLevel();b.setRenderTarget(Bt),b.getClearColor(it),j=b.getClearAlpha(),j<1&&b.setClearColor(16777215,.5),b.clear(),bt&&ee.render(xt);const me=b.toneMapping;b.toneMapping=Pa;const ue=St.viewport;if(St.viewport!==void 0&&(St.viewport=void 0),_.setupLightsView(St),ut===!0&&Pt.setGlobalState(b.clippingPlanes,St),da(L,xt,St),Ot.updateMultisampleRenderTarget(Bt),Ot.updateRenderTargetMipmap(Bt),yt.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Ve=0,nn=st.length;Ve<nn;Ve++){const Be=st[Ve],Pe=Be.object,fe=Be.geometry,Fe=Be.material,Ee=Be.group;if(Fe.side===yi&&Pe.layers.test(St.layers)){const Tn=Fe.side;Fe.side=Bn,Fe.needsUpdate=!0,Ms(Pe,xt,St,fe,Fe,Ee),Fe.side=Tn,Fe.needsUpdate=!0,be=!0}}be===!0&&(Ot.updateMultisampleRenderTarget(Bt),Ot.updateRenderTargetMipmap(Bt))}b.setRenderTarget(Kt,kt,ie),b.setClearColor(it,j),ue!==void 0&&(St.viewport=ue),b.toneMapping=me}function da(L,st,xt){const St=st.isScene===!0?st.overrideMaterial:null;for(let rt=0,Bt=L.length;rt<Bt;rt++){const Wt=L[rt],Kt=Wt.object,kt=Wt.geometry,ie=Wt.group;let me=Wt.material;me.allowOverride===!0&&St!==null&&(me=St),Kt.layers.test(xt.layers)&&Ms(Kt,st,xt,kt,me,ie)}}function Ms(L,st,xt,St,rt,Bt){L.onBeforeRender(b,st,xt,St,rt,Bt),L.modelViewMatrix.multiplyMatrices(xt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),rt.onBeforeRender(b,st,xt,St,L,Bt),rt.transparent===!0&&rt.side===yi&&rt.forceSinglePass===!1?(rt.side=Bn,rt.needsUpdate=!0,b.renderBufferDirect(xt,st,St,rt,L,Bt),rt.side=ys,rt.needsUpdate=!0,b.renderBufferDirect(xt,st,St,rt,L,Bt),rt.side=yi):b.renderBufferDirect(xt,st,St,rt,L,Bt),L.onAfterRender(b,st,xt,St,rt,Bt)}function Mi(L,st,xt){st.isScene!==!0&&(st=dt);const St=Dt.get(L),rt=_.state.lights,Bt=_.state.shadowsArray,Wt=rt.state.version,Kt=_t.getParameters(L,rt.state,Bt,st,xt),kt=_t.getProgramCacheKey(Kt);let ie=St.programs;St.environment=L.isMeshStandardMaterial?st.environment:null,St.fog=st.fog,St.envMap=(L.isMeshStandardMaterial?se:re).get(L.envMap||St.environment),St.envMapRotation=St.environment!==null&&L.envMap===null?st.environmentRotation:L.envMapRotation,ie===void 0&&(L.addEventListener("dispose",at),ie=new Map,St.programs=ie);let me=ie.get(kt);if(me!==void 0){if(St.currentProgram===me&&St.lightsStateVersion===Wt)return Ba(L,Kt),me}else Kt.uniforms=_t.getUniforms(L),L.onBeforeCompile(Kt,b),me=_t.acquireProgram(Kt,kt),ie.set(kt,me),St.uniforms=Kt.uniforms;const ue=St.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ue.clippingPlanes=Pt.uniform),Ba(L,Kt),St.needsLights=tc(L),St.lightsStateVersion=Wt,St.needsLights&&(ue.ambientLightColor.value=rt.state.ambient,ue.lightProbe.value=rt.state.probe,ue.directionalLights.value=rt.state.directional,ue.directionalLightShadows.value=rt.state.directionalShadow,ue.spotLights.value=rt.state.spot,ue.spotLightShadows.value=rt.state.spotShadow,ue.rectAreaLights.value=rt.state.rectArea,ue.ltc_1.value=rt.state.rectAreaLTC1,ue.ltc_2.value=rt.state.rectAreaLTC2,ue.pointLights.value=rt.state.point,ue.pointLightShadows.value=rt.state.pointShadow,ue.hemisphereLights.value=rt.state.hemi,ue.directionalShadowMap.value=rt.state.directionalShadowMap,ue.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,ue.spotShadowMap.value=rt.state.spotShadowMap,ue.spotLightMatrix.value=rt.state.spotLightMatrix,ue.spotLightMap.value=rt.state.spotLightMap,ue.pointShadowMap.value=rt.state.pointShadowMap,ue.pointShadowMatrix.value=rt.state.pointShadowMatrix),St.currentProgram=me,St.uniformsList=null,me}function Es(L){if(L.uniformsList===null){const st=L.currentProgram.getUniforms();L.uniformsList=sf.seqWithValue(st.seq,L.uniforms)}return L.uniformsList}function Ba(L,st){const xt=Dt.get(L);xt.outputColorSpace=st.outputColorSpace,xt.batching=st.batching,xt.batchingColor=st.batchingColor,xt.instancing=st.instancing,xt.instancingColor=st.instancingColor,xt.instancingMorph=st.instancingMorph,xt.skinning=st.skinning,xt.morphTargets=st.morphTargets,xt.morphNormals=st.morphNormals,xt.morphColors=st.morphColors,xt.morphTargetsCount=st.morphTargetsCount,xt.numClippingPlanes=st.numClippingPlanes,xt.numIntersection=st.numClipIntersection,xt.vertexAlphas=st.vertexAlphas,xt.vertexTangents=st.vertexTangents,xt.toneMapping=st.toneMapping}function $l(L,st,xt,St,rt){st.isScene!==!0&&(st=dt),Ot.resetTextureUnits();const Bt=st.fog,Wt=St.isMeshStandardMaterial?st.environment:null,Kt=O===null?b.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:sr,kt=(St.isMeshStandardMaterial?se:re).get(St.envMap||Wt),ie=St.vertexColors===!0&&!!xt.attributes.color&&xt.attributes.color.itemSize===4,me=!!xt.attributes.tangent&&(!!St.normalMap||St.anisotropy>0),ue=!!xt.morphAttributes.position,be=!!xt.morphAttributes.normal,Ve=!!xt.morphAttributes.color;let nn=Pa;St.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(nn=b.toneMapping);const Be=xt.morphAttributes.position||xt.morphAttributes.normal||xt.morphAttributes.color,Pe=Be!==void 0?Be.length:0,fe=Dt.get(St),Fe=_.state.lights;if(ut===!0&&(J===!0||L!==A)){const cn=L===A&&St.id===C;Pt.setState(St,L,cn)}let Ee=!1;St.version===fe.__version?(fe.needsLights&&fe.lightsStateVersion!==Fe.state.version||fe.outputColorSpace!==Kt||rt.isBatchedMesh&&fe.batching===!1||!rt.isBatchedMesh&&fe.batching===!0||rt.isBatchedMesh&&fe.batchingColor===!0&&rt.colorTexture===null||rt.isBatchedMesh&&fe.batchingColor===!1&&rt.colorTexture!==null||rt.isInstancedMesh&&fe.instancing===!1||!rt.isInstancedMesh&&fe.instancing===!0||rt.isSkinnedMesh&&fe.skinning===!1||!rt.isSkinnedMesh&&fe.skinning===!0||rt.isInstancedMesh&&fe.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&fe.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&fe.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&fe.instancingMorph===!1&&rt.morphTexture!==null||fe.envMap!==kt||St.fog===!0&&fe.fog!==Bt||fe.numClippingPlanes!==void 0&&(fe.numClippingPlanes!==Pt.numPlanes||fe.numIntersection!==Pt.numIntersection)||fe.vertexAlphas!==ie||fe.vertexTangents!==me||fe.morphTargets!==ue||fe.morphNormals!==be||fe.morphColors!==Ve||fe.toneMapping!==nn||fe.morphTargetsCount!==Pe)&&(Ee=!0):(Ee=!0,fe.__version=St.version);let Tn=fe.currentProgram;Ee===!0&&(Tn=Mi(St,st,rt));let li=!1,ze=!1,Fa=!1;const Je=Tn.getUniforms(),Wn=fe.uniforms;if(ht.useProgram(Tn.program)&&(li=!0,ze=!0,Fa=!0),St.id!==C&&(C=St.id,ze=!0),li||A!==L){ht.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Je.setValue(I,"projectionMatrix",L.projectionMatrix),Je.setValue(I,"viewMatrix",L.matrixWorldInverse);const Hn=Je.map.cameraPosition;Hn!==void 0&&Hn.setValue(I,Et.setFromMatrixPosition(L.matrixWorld)),ct.logarithmicDepthBuffer&&Je.setValue(I,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(St.isMeshPhongMaterial||St.isMeshToonMaterial||St.isMeshLambertMaterial||St.isMeshBasicMaterial||St.isMeshStandardMaterial||St.isShaderMaterial)&&Je.setValue(I,"isOrthographic",L.isOrthographicCamera===!0),A!==L&&(A=L,ze=!0,Fa=!0)}if(rt.isSkinnedMesh){Je.setOptional(I,rt,"bindMatrix"),Je.setOptional(I,rt,"bindMatrixInverse");const cn=rt.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),Je.setValue(I,"boneTexture",cn.boneTexture,Ot))}rt.isBatchedMesh&&(Je.setOptional(I,rt,"batchingTexture"),Je.setValue(I,"batchingTexture",rt._matricesTexture,Ot),Je.setOptional(I,rt,"batchingIdTexture"),Je.setValue(I,"batchingIdTexture",rt._indirectTexture,Ot),Je.setOptional(I,rt,"batchingColorTexture"),rt._colorsTexture!==null&&Je.setValue(I,"batchingColorTexture",rt._colorsTexture,Ot));const mn=xt.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&zt.update(rt,xt,Tn),(ze||fe.receiveShadow!==rt.receiveShadow)&&(fe.receiveShadow=rt.receiveShadow,Je.setValue(I,"receiveShadow",rt.receiveShadow)),St.isMeshGouraudMaterial&&St.envMap!==null&&(Wn.envMap.value=kt,Wn.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),St.isMeshStandardMaterial&&St.envMap===null&&st.environment!==null&&(Wn.envMapIntensity.value=st.environmentIntensity),ze&&(Je.setValue(I,"toneMappingExposure",b.toneMappingExposure),fe.needsLights&&Ef(Wn,Fa),Bt&&St.fog===!0&&Ut.refreshFogUniforms(Wn,Bt),Ut.refreshMaterialUniforms(Wn,St,z,U,_.state.transmissionRenderTarget[L.id]),sf.upload(I,Es(fe),Wn,Ot)),St.isShaderMaterial&&St.uniformsNeedUpdate===!0&&(sf.upload(I,Es(fe),Wn,Ot),St.uniformsNeedUpdate=!1),St.isSpriteMaterial&&Je.setValue(I,"center",rt.center),Je.setValue(I,"modelViewMatrix",rt.modelViewMatrix),Je.setValue(I,"normalMatrix",rt.normalMatrix),Je.setValue(I,"modelMatrix",rt.matrixWorld),St.isShaderMaterial||St.isRawShaderMaterial){const cn=St.uniformsGroups;for(let Hn=0,fr=cn.length;Hn<fr;Hn++){const ji=cn[Hn];_e.update(ji,Tn),_e.bind(ji,Tn)}}return Tn}function Ef(L,st){L.ambientLightColor.needsUpdate=st,L.lightProbe.needsUpdate=st,L.directionalLights.needsUpdate=st,L.directionalLightShadows.needsUpdate=st,L.pointLights.needsUpdate=st,L.pointLightShadows.needsUpdate=st,L.spotLights.needsUpdate=st,L.spotLightShadows.needsUpdate=st,L.rectAreaLights.needsUpdate=st,L.hemisphereLights.needsUpdate=st}function tc(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(L,st,xt){const St=Dt.get(L);St.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,St.__autoAllocateDepthBuffer===!1&&(St.__useRenderToTexture=!1),Dt.get(L.texture).__webglTexture=st,Dt.get(L.depthTexture).__webglTexture=St.__autoAllocateDepthBuffer?void 0:xt,St.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,st){const xt=Dt.get(L);xt.__webglFramebuffer=st,xt.__useDefaultFramebuffer=st===void 0};const Do=I.createFramebuffer();this.setRenderTarget=function(L,st=0,xt=0){O=L,H=st,P=xt;let St=!0,rt=null,Bt=!1,Wt=!1;if(L){const kt=Dt.get(L);if(kt.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(I.FRAMEBUFFER,null),St=!1;else if(kt.__webglFramebuffer===void 0)Ot.setupRenderTarget(L);else if(kt.__hasExternalTextures)Ot.rebindTextures(L,Dt.get(L.texture).__webglTexture,Dt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const ue=L.depthTexture;if(kt.__boundDepthTexture!==ue){if(ue!==null&&Dt.has(ue)&&(L.width!==ue.image.width||L.height!==ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ot.setupDepthRenderbuffer(L)}}const ie=L.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Wt=!0);const me=Dt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(me[st])?rt=me[st][xt]:rt=me[st],Bt=!0):L.samples>0&&Ot.useMultisampledRTT(L)===!1?rt=Dt.get(L).__webglMultisampledFramebuffer:Array.isArray(me)?rt=me[xt]:rt=me,G.copy(L.viewport),Y.copy(L.scissor),Z=L.scissorTest}else G.copy(Nt).multiplyScalar(z).floor(),Y.copy(Xt).multiplyScalar(z).floor(),Z=Zt;if(xt!==0&&(rt=Do),ht.bindFramebuffer(I.FRAMEBUFFER,rt)&&St&&ht.drawBuffers(L,rt),ht.viewport(G),ht.scissor(Y),ht.setScissorTest(Z),Bt){const kt=Dt.get(L.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+st,kt.__webglTexture,xt)}else if(Wt){const kt=st;for(let ie=0;ie<L.textures.length;ie++){const me=Dt.get(L.textures[ie]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+ie,me.__webglTexture,xt,kt)}}else if(L!==null&&xt!==0){const kt=Dt.get(L.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,kt.__webglTexture,xt)}C=-1},this.readRenderTargetPixels=function(L,st,xt,St,rt,Bt,Wt,Kt=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let kt=Dt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Wt!==void 0&&(kt=kt[Wt]),kt){ht.bindFramebuffer(I.FRAMEBUFFER,kt);try{const ie=L.textures[Kt],me=ie.format,ue=ie.type;if(!ct.textureFormatReadable(me)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}st>=0&&st<=L.width-St&&xt>=0&&xt<=L.height-rt&&(L.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Kt),I.readPixels(st,xt,St,rt,ne.convert(me),ne.convert(ue),Bt))}finally{const ie=O!==null?Dt.get(O).__webglFramebuffer:null;ht.bindFramebuffer(I.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(L,st,xt,St,rt,Bt,Wt,Kt=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let kt=Dt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Wt!==void 0&&(kt=kt[Wt]),kt)if(st>=0&&st<=L.width-St&&xt>=0&&xt<=L.height-rt){ht.bindFramebuffer(I.FRAMEBUFFER,kt);const ie=L.textures[Kt],me=ie.format,ue=ie.type;if(!ct.textureFormatReadable(me))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,be),I.bufferData(I.PIXEL_PACK_BUFFER,Bt.byteLength,I.STREAM_READ),L.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Kt),I.readPixels(st,xt,St,rt,ne.convert(me),ne.convert(ue),0);const Ve=O!==null?Dt.get(O).__webglFramebuffer:null;ht.bindFramebuffer(I.FRAMEBUFFER,Ve);const nn=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await XT(I,nn,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,be),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Bt),I.deleteBuffer(be),I.deleteSync(nn),Bt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,st=null,xt=0){const St=Math.pow(2,-xt),rt=Math.floor(L.image.width*St),Bt=Math.floor(L.image.height*St),Wt=st!==null?st.x:0,Kt=st!==null?st.y:0;Ot.setTexture2D(L,0),I.copyTexSubImage2D(I.TEXTURE_2D,xt,0,0,Wt,Kt,rt,Bt),ht.unbindTexture()};const Ts=I.createFramebuffer(),Tf=I.createFramebuffer();this.copyTextureToTexture=function(L,st,xt=null,St=null,rt=0,Bt=null){Bt===null&&(rt!==0?(Xl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Bt=rt,rt=0):Bt=0);let Wt,Kt,kt,ie,me,ue,be,Ve,nn;const Be=L.isCompressedTexture?L.mipmaps[Bt]:L.image;if(xt!==null)Wt=xt.max.x-xt.min.x,Kt=xt.max.y-xt.min.y,kt=xt.isBox3?xt.max.z-xt.min.z:1,ie=xt.min.x,me=xt.min.y,ue=xt.isBox3?xt.min.z:0;else{const mn=Math.pow(2,-rt);Wt=Math.floor(Be.width*mn),Kt=Math.floor(Be.height*mn),L.isDataArrayTexture?kt=Be.depth:L.isData3DTexture?kt=Math.floor(Be.depth*mn):kt=1,ie=0,me=0,ue=0}St!==null?(be=St.x,Ve=St.y,nn=St.z):(be=0,Ve=0,nn=0);const Pe=ne.convert(st.format),fe=ne.convert(st.type);let Fe;st.isData3DTexture?(Ot.setTexture3D(st,0),Fe=I.TEXTURE_3D):st.isDataArrayTexture||st.isCompressedArrayTexture?(Ot.setTexture2DArray(st,0),Fe=I.TEXTURE_2D_ARRAY):(Ot.setTexture2D(st,0),Fe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,st.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,st.unpackAlignment);const Ee=I.getParameter(I.UNPACK_ROW_LENGTH),Tn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),li=I.getParameter(I.UNPACK_SKIP_PIXELS),ze=I.getParameter(I.UNPACK_SKIP_ROWS),Fa=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Be.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Be.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ie),I.pixelStorei(I.UNPACK_SKIP_ROWS,me),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ue);const Je=L.isDataArrayTexture||L.isData3DTexture,Wn=st.isDataArrayTexture||st.isData3DTexture;if(L.isDepthTexture){const mn=Dt.get(L),cn=Dt.get(st),Hn=Dt.get(mn.__renderTarget),fr=Dt.get(cn.__renderTarget);ht.bindFramebuffer(I.READ_FRAMEBUFFER,Hn.__webglFramebuffer),ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,fr.__webglFramebuffer);for(let ji=0;ji<kt;ji++)Je&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Dt.get(L).__webglTexture,rt,ue+ji),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Dt.get(st).__webglTexture,Bt,nn+ji)),I.blitFramebuffer(ie,me,Wt,Kt,be,Ve,Wt,Kt,I.DEPTH_BUFFER_BIT,I.NEAREST);ht.bindFramebuffer(I.READ_FRAMEBUFFER,null),ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(rt!==0||L.isRenderTargetTexture||Dt.has(L)){const mn=Dt.get(L),cn=Dt.get(st);ht.bindFramebuffer(I.READ_FRAMEBUFFER,Ts),ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,Tf);for(let Hn=0;Hn<kt;Hn++)Je?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,mn.__webglTexture,rt,ue+Hn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mn.__webglTexture,rt),Wn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,cn.__webglTexture,Bt,nn+Hn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,cn.__webglTexture,Bt),rt!==0?I.blitFramebuffer(ie,me,Wt,Kt,be,Ve,Wt,Kt,I.COLOR_BUFFER_BIT,I.NEAREST):Wn?I.copyTexSubImage3D(Fe,Bt,be,Ve,nn+Hn,ie,me,Wt,Kt):I.copyTexSubImage2D(Fe,Bt,be,Ve,ie,me,Wt,Kt);ht.bindFramebuffer(I.READ_FRAMEBUFFER,null),ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Wn?L.isDataTexture||L.isData3DTexture?I.texSubImage3D(Fe,Bt,be,Ve,nn,Wt,Kt,kt,Pe,fe,Be.data):st.isCompressedArrayTexture?I.compressedTexSubImage3D(Fe,Bt,be,Ve,nn,Wt,Kt,kt,Pe,Be.data):I.texSubImage3D(Fe,Bt,be,Ve,nn,Wt,Kt,kt,Pe,fe,Be):L.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Bt,be,Ve,Wt,Kt,Pe,fe,Be.data):L.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Bt,be,Ve,Be.width,Be.height,Pe,Be.data):I.texSubImage2D(I.TEXTURE_2D,Bt,be,Ve,Wt,Kt,Pe,fe,Be);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ee),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Tn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,li),I.pixelStorei(I.UNPACK_SKIP_ROWS,ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Fa),Bt===0&&st.generateMipmaps&&I.generateMipmap(Fe),ht.unbindTexture()},this.initRenderTarget=function(L){Dt.get(L).__webglFramebuffer===void 0&&Ot.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?Ot.setTextureCube(L,0):L.isData3DTexture?Ot.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Ot.setTexture2DArray(L,0):Ot.setTexture2D(L,0),ht.unbindTexture()},this.resetState=function(){H=0,P=0,O=null,ht.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ca}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const rf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Co{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const XC=new i0(-1,1,1,-1,0,1);class qC extends pn{constructor(){super(),this.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ge([0,2,0,0,2,0],2))}}const YC=new qC;class s0{constructor(t){this._mesh=new an(YC,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,XC)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class WC extends Co{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof en?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=ql.clone(t.uniforms),this.material=new en({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new s0(this.material)}render(t,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ix extends Co{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,s){const l=t.getContext(),c=t.state;c.buffers.color.setMask(!1),c.buffers.depth.setMask(!1),c.buffers.color.setLocked(!0),c.buffers.depth.setLocked(!0);let f,d;this.inverse?(f=0,d=1):(f=1,d=0),c.buffers.stencil.setTest(!0),c.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),c.buffers.stencil.setFunc(l.ALWAYS,f,4294967295),c.buffers.stencil.setClear(d),c.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),c.buffers.color.setLocked(!1),c.buffers.depth.setLocked(!1),c.buffers.color.setMask(!0),c.buffers.depth.setMask(!0),c.buffers.stencil.setLocked(!1),c.buffers.stencil.setFunc(l.EQUAL,1,4294967295),c.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),c.buffers.stencil.setLocked(!0)}}class jC extends Co{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class ZC{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const s=t.getSize(new It);this._width=s.width,this._height=s.height,i=new Si(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Oi}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new WC(rf),this.copyPass.material.blending=ua,this.clock=new N1}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,c=this.passes.length;l<c;l++){const f=this.passes[l];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),f.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),f.needsSwap){if(s){const d=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),p.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}Ix!==void 0&&(f instanceof Ix?s=!0:f instanceof jC&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new It);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let c=0;c<this.passes.length;c++)this.passes[c].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class QC extends Co{constructor(t,i,s=null,l=null,c=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=c,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new le}render(t,i,s){const l=t.autoClear;t.autoClear=!1;let c,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(c=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(c),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),t.autoClear=l}}const KC={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new le(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class To extends Co{constructor(t,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=t!==void 0?new It(t.x,t.y):new It(256,256),this.clearColor=new le(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new Si(c,f,{type:Oi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const g=new Si(c,f,{type:Oi});g.texture.name="UnrealBloomPass.h"+v,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const y=new Si(c,f,{type:Oi});y.texture.name="UnrealBloomPass.v"+v,y.texture.generateMipmaps=!1,this.renderTargetsVertical.push(y),c=Math.round(c/2),f=Math.round(f/2)}const d=KC;this.highPassUniforms=ql.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new en({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const p=[3,5,7,9,11];c=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new It(1/c,1/f),c=Math.round(c/2),f=Math.round(f/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const m=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=m,this.bloomTintColors=[new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1),new F(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ql.clone(rf.uniforms),this.blendMaterial=new en({uniforms:this.copyUniforms,vertexShader:rf.vertexShader,fragmentShader:rf.fragmentShader,blending:ir,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new le,this._oldClearAlpha=1,this._basic=new rr,this._fsQuad=new s0(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let s=Math.round(t/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let c=0;c<this.nMips;c++)this.renderTargetsHorizontal[c].setSize(s,l),this.renderTargetsVertical[c].setSize(s,l),this.separableBlurMaterials[c].uniforms.invSize.value=new It(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(t,i,s,l,c){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const f=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),c&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let d=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[p].uniforms.direction.value=To.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[p]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=To.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[p]),t.clear(),this._fsQuad.render(t),d=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,c&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(s),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=f}_getSeparableBlurMaterial(t){const i=[];for(let s=0;s<t;s++)i.push(.39894*Math.exp(-.5*s*s/(t*t))/t);return new en({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new It(.5,.5)},direction:{value:new It(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`varying vec2 vUv;
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
				}`})}}To.BlurDirectionX=new It(1,0);To.BlurDirectionY=new It(0,1);const Qu={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class JC extends Co{constructor(){super(),this.uniforms=ql.clone(Qu.uniforms),this.material=new tA({name:Qu.name,uniforms:this.uniforms,vertexShader:Qu.vertexShader,fragmentShader:Qu.fragmentShader}),this._fsQuad=new s0(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,i,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Le.getTransfer(this._outputColorSpace)===We&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Yx?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wx?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===jx?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Im?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Qx?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Kx?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Zx&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Ku=(r,t,i)=>Math.min(i,Math.max(t,r)),Ju=(r,t,i,s)=>t+(r-t)*Math.exp(-i*s),I1=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]);class $C{constructor(){oe(this,"shipQuaternion",new qn);oe(this,"lookQuaternion",new qn);oe(this,"position",new F);oe(this,"yaw",0);oe(this,"pitch",0);oe(this,"yawVelocity",0);oe(this,"pitchVelocity",0);oe(this,"speed",0);oe(this,"lookYaw",0);oe(this,"lookPitch",0);oe(this,"lookTargetYaw",0);oe(this,"lookTargetPitch",0);oe(this,"touchX",0);oe(this,"touchY",0);oe(this,"touchSteering",!1);oe(this,"keys",new Set);oe(this,"elapsed",0);oe(this,"lastContext","");oe(this,"euler",new ri(0,0,0,"YXZ"));oe(this,"forward",new F)}key(t,i){I1.has(t)&&(i?this.touchSteering||this.keys.add(t):this.keys.delete(t))}steerTouch(t,i,s){this.touchSteering=s,this.keys.clear();const l=Math.hypot(t,i),c=s?Ku((l-.1)/.9,0,1):0;this.touchX=l?t/l*c:0,this.touchY=l?i/l*c:0}look(t,i,s,l){if(l.paused||l.blocked)return;const c=s?l.touchSensitivity:l.sensitivity,f=this.lookTargetYaw-Ku(t,-.2,.2)*c*1.6*(!s&&l.invertMouseX?-1:1);this.lookTargetYaw=Math.atan2(Math.sin(f),Math.cos(f)),this.lookTargetPitch=Ku(this.lookTargetPitch-Ku(i,-.2,.2)*c*1.6*(!s&&l.invertMouseY?-1:1),-1.48,1.48)}centerLook(){this.lookTargetYaw=this.lookTargetPitch=0}reset(t=!1){this.keys.clear(),this.steerTouch(0,0,!1),t&&(this.yawVelocity=this.pitchVelocity=0,this.lookTargetYaw=this.lookYaw,this.lookTargetPitch=this.lookPitch)}step(t,i){const s=`${i.mode}/${i.paused}/${i.started}/${i.blocked}`;if(this.lastContext&&s!==this.lastContext&&this.reset(i.paused||i.blocked),this.lastContext=s,!Number.isFinite(t)||t<=0||t>.25||i.paused)return;const l=Math.min(t,.1);this.elapsed+=l;const c=i.mode==="Manual Flight"&&i.started&&!i.blocked;let f=0,d=0;if(c){f=this.touchSteering?this.touchX:Number(this.keys.has("KeyD")||this.keys.has("ArrowRight"))-Number(this.keys.has("KeyA")||this.keys.has("ArrowLeft")),d=this.touchSteering?this.touchY:Number(this.keys.has("KeyS")||this.keys.has("ArrowDown"))-Number(this.keys.has("KeyW")||this.keys.has("ArrowUp"));const w=Math.max(1,Math.hypot(f,d));f/=w,d/=w}const p=i.reduced?.45:1,m=this.touchSteering?i.touchSensitivity:i.sensitivity,v=i.started&&i.mode!=="Manual Flight"&&!i.blocked&&!i.reduced?i.motion*(i.mode==="Meditation"?.002:.006):0,g=c?-f*.22*m*p:Math.sin(this.elapsed*.055)*v,y=c?-d*.16*m*p:Math.sin(this.elapsed*.08)*v*.3,x=3,E=(1-Math.exp(-x*l))/x;this.yaw+=g*l+(this.yawVelocity-g)*E,this.pitch+=y*l+(this.pitchVelocity-y)*E,this.yawVelocity=Ju(this.yawVelocity,g,x,l),this.pitchVelocity=Ju(this.pitchVelocity,y,x,l),this.pitch=Math.atan2(Math.sin(this.pitch),Math.cos(this.pitch)),this.yaw=Math.atan2(Math.sin(this.yaw),Math.cos(this.yaw)),this.shipQuaternion.setFromEuler(this.euler.set(this.pitch,this.yaw,0,"YXZ"));const T=Math.atan2(Math.sin(this.lookTargetYaw-this.lookYaw),Math.cos(this.lookTargetYaw-this.lookYaw));this.lookYaw+=T*(1-Math.exp(-6*l)),this.lookYaw=Math.atan2(Math.sin(this.lookYaw),Math.cos(this.lookYaw)),this.lookPitch=Ju(this.lookPitch,this.lookTargetPitch,6,l),this.lookQuaternion.setFromEuler(this.euler.set(this.lookPitch,this.lookYaw,0,"YXZ"));const S=i.started?Math.max(0,i.speed)*(i.mode==="Meditation"?.15:1)*(i.reduced?.3:1):2,_=S*l+(this.speed-S)*(1-Math.exp(-.8*l))/.8;this.speed=Ju(this.speed,S,.8,l),this.forward.set(0,0,-1).applyQuaternion(this.shipQuaternion),this.position.addScaledVector(this.forward,_)}}function tR(r,t,i,s){let l=null,c=null,f="";const d=[],p=(_,w,D,b)=>{_.addEventListener(w,D,b),d.push(()=>_.removeEventListener(w,D,b))},m=()=>!s().paused&&!s().blocked&&document.visibilityState!=="hidden",v=()=>m()&&s().started&&s().mode==="Manual Flight",g=(_,w)=>{t.style.setProperty("--stick-x",`${_*34}px`),t.style.setProperty("--stick-y",`${w*34}px`)},y=()=>{const _=l;l=null,_&&r.hasPointerCapture(_.id)&&r.releasePointerCapture(_.id)},x=()=>{const _=c;c=null,i.steerTouch(0,0,!1),g(0,0),_!==null&&t.hasPointerCapture(_)&&t.releasePointerCapture(_)},E=()=>{y(),x(),i.reset(!0)};p(r,"pointerdown",(_=>{!m()||l||_.pointerType==="mouse"&&(_.button!==0||c!==null)||(_.preventDefault(),document.activeElement instanceof HTMLElement&&document.activeElement.blur(),l={id:_.pointerId,type:_.pointerType,x:_.clientX,y:_.clientY},r.setPointerCapture(_.pointerId))})),p(r,"pointermove",(_=>{if((l==null?void 0:l.id)!==_.pointerId)return;if(!m()||_.pointerType==="mouse"&&!(_.buttons&1)){y();return}_.preventDefault();const w=Math.max(240,Math.min(r.clientWidth,r.clientHeight));i.look((_.clientX-l.x)/w,(_.clientY-l.y)/w,l.type!=="mouse",s()),l.x=_.clientX,l.y=_.clientY}));for(const _ of["pointerup","pointercancel","lostpointercapture"])p(r,_,(w=>{w.pointerId===(l==null?void 0:l.id)&&y()}));const T=_=>{const w=t.getBoundingClientRect();let D=(_.clientX-w.left-w.width/2)/(w.width*.35),b=(_.clientY-w.top-w.height/2)/(w.height*.35);const V=Math.max(1,Math.hypot(D,b));D/=V,b/=V,i.steerTouch(D,b,!0),g(D,b)};p(t,"pointerdown",(_=>{_.pointerType==="mouse"&&_.button!==0||c!==null||!v()||(_.preventDefault(),_.stopPropagation(),(l==null?void 0:l.type)==="mouse"&&y(),c=_.pointerId,t.setPointerCapture(_.pointerId),T(_))})),p(t,"pointermove",(_=>{if(_.pointerId===c){if(!v()){x();return}_.preventDefault(),T(_)}}));for(const _ of["pointerup","pointercancel","lostpointercapture"])p(t,_,(w=>{w.pointerId===c&&x()}));const S=_=>_ instanceof HTMLElement&&!!_.closest('input,select,textarea,[contenteditable="true"]');return p(window,"keydown",(_=>{!I1.has(_.code)||S(_.target)||!v()||_.ctrlKey||_.metaKey||_.altKey||(_.preventDefault(),i.key(_.code,!0))})),p(window,"keyup",(_=>i.key(_.code,!1))),p(window,"blur",E),p(document,"visibilitychange",E),p(window,"resize",E),p(window,"orientationchange",E),p(r,"contextmenu",_=>_.preventDefault()),p(t,"contextmenu",_=>_.preventDefault()),{sync(){const _=s(),w=`${_.mode}/${_.paused}/${_.started}/${_.blocked}`;f&&w!==f&&(y(),x(),i.reset(_.paused||_.blocked)),f=w},dispose(){E(),d.forEach(_=>_())}}}function eR(r,t,i){if(!Number.isFinite(t)||t<=0||t>.25||i.paused){r.step(0,i);return}const s=Math.ceil(t/(1/60)),l=t/s;for(let c=0;c<s;c++)r.step(l,i)}class nR{constructor(){oe(this,"scale",1);oe(this,"elapsed",0);oe(this,"average",1/60);oe(this,"nextDecision",3)}reset(){this.scale=1,this.elapsed=0,this.average=1/60,this.nextDecision=3}observe(t,i,s){if(!i||s||!Number.isFinite(t)||t<=0||t>1||(this.elapsed+=t,this.average+=(Math.min(t,.2)-this.average)*(1-Math.exp(-t/1.5)),this.elapsed<this.nextDecision))return!1;const l=this.scale;return this.average>.028?(this.scale=Math.max(.6,Math.round((this.scale-.1)*100)/100),this.nextDecision=this.elapsed+3):this.average<.018?(this.scale=Math.min(1,Math.round((this.scale+.05)*100)/100),this.nextDecision=this.elapsed+10):this.nextDecision=this.elapsed+3,l!==this.scale}}const Rl=r=>(r=Math.max(0,Math.min(1,r)),r*r*(3-2*r)),iR=[2,4,1,0,3],aR=10.2;class B1{constructor(){oe(this,"phase","idle");oe(this,"elapsed",0);oe(this,"destination",0);oe(this,"seed",7123);oe(this,"committed",!1);oe(this,"justCommitted",!1);oe(this,"energy",0);oe(this,"charge",0);oe(this,"veil",0)}get busy(){return this.phase!=="idle"}start(t,i,s=!1){return this.busy||s?!1:(this.destination=iR[t]??(t+1)%5,this.seed=Math.imul(i|0,1664525)+1013904223>>>0||1,this.elapsed=0,this.committed=!1,this.justCommitted=!1,this.energy=0,this.veil=0,this.charge=0,this.phase="charging",!0)}advance(t,i=!1){if(this.justCommitted=!1,!this.busy||i||!Number.isFinite(t)||t<=0)return;this.elapsed+=Math.min(t,.25);const s=this.elapsed;s<1.4?(this.phase="charging",this.charge=Rl(s/1.4),this.energy=this.charge*.035):s<4?(this.phase="accelerating",this.charge=1,this.energy=.035+.965*Rl((s-1.4)/2.6)):s<5.6?(this.phase="transit",this.charge=1,this.energy=1):s<9?(this.phase="arriving",this.energy=1-Rl((s-5.6)/3.4),this.charge=this.energy):s<aR?(this.phase="stabilized",this.energy=0,this.charge=0):(this.phase="idle",this.energy=0,this.charge=0),this.veil=s<4?0:s<4.8?Rl((s-4)/.8):s<5.6?1:1-Rl((s-5.6)/1.7),!this.committed&&s>=4.8&&(this.committed=!0,this.justCommitted=!0)}}function sR(r){const i=new Float32Array(4680),s=new Float32Array(780*2),l=new Float32Array(780*2*3);let c=4171;const f=()=>(c=c*16807%2147483647,(c-1)/2147483646);for(let E=0;E<780;E++){const T=f()*Math.PI*2,S=18+Math.pow(f(),1.3)*550,_=f();for(let w=0;w<2;w++)i.set([Math.cos(T)*S,Math.sin(T)*S*.72,_],(E*2+w)*3),s[E*2+w]=w}const d=new pn;d.setAttribute("position",new hn(l,3)),d.setAttribute("lane",new hn(i,3)),d.setAttribute("endpoint",new hn(s,1));const p={time:{value:0},energy:{value:0},tint:{value:new le("#b7d8ef")}},m=new le("#d4ecfa"),v=new en({uniforms:p,transparent:!0,depthWrite:!1,blending:ir,vertexShader:`attribute vec3 lane;attribute float endpoint;uniform float time,energy;varying float fade;
      void main(){float z=-12.-fract(lane.z+time)*800.;float trailLength=energy*(22.+energy*155.);
      vec3 p=vec3(lane.xy,z-endpoint*trailLength);fade=smoothstep(15.,65.,-z)*(1.-smoothstep(650.,810.,-z))*(.35+endpoint*.4);
      gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,fragmentShader:`uniform float energy;uniform vec3 tint;varying float fade;void main(){gl_FragColor=vec4(tint*1.35,fade*energy*.7);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`}),g=new Sb(d,v);g.name="light-jump-streaks",g.frustumCulled=!1,g.renderOrder=3,r.add(g);let y=!0,x=0;return{configure(E,T){d.setDrawRange(0,(T?70:E==="Low"?180:E==="Medium"?420:780)*2),y=!0},update(E,T,S){T>0&&(x+=E*(.18+T*1.7)),p.time.value=x,p.energy.value=T,p.tint.value.copy(S).lerp(m,.7),g.visible=T>.001||y,y=!1}}}function Nm(r,t,i=!0){let s=(r^Math.imul(t,2654435761))>>>0;const l=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296),c=r===7123&&t===0,f=c?new F(500,200,-3e3):new F((l()-.5)*1800,(l()-.5)*1200,(l()-.5)*1800),d=300+l()*200,p=new le(["#ffd4a0","#a9d5ff","#ffe8bc","#ffc1ab","#d6dbff"][(r>>>3)%5]),m=8+Math.floor(l()*5),v=l()*Math.PI*2,g=(l()-.5)*.65,y=Array.from({length:i?12:0},(E,T)=>{const S=v+T*2.39996+(l()-.5)*.35,_=800+T*260+l()*100,w=f.clone().add(new F(Math.cos(S)*_,Math.sin(S)*_*g,Math.sin(S)*_));c&&T===0&&w.set(-480,-45,-1500);const D=T%4===1?1:l()>.45?0:2,b=D===1?160+l()*100:55+l()*95,V=l()*100+1,H=new le().setHSL((t*.14+T*.103+l()*.07)%1,.17+l()*.28,.28+l()*.16);return c&&T===0&&H.set("#315e9c"),{position:w,kind:D,radius:b,seed:V,color:H}}),x=c?"Perseus Anchorage":`${["Aster","Nyra","Vela","Lumen","Thal","Solis","Caeli"][r%7]}-${(r&65535).toString(16).padStart(4,"0").toUpperCase()}`;return{center:f,starRadius:d,starColor:p,count:m,planets:y,name:x}}const rR=`
varying vec3 localPoint, surfaceNormal, worldPoint;
void main(){localPoint=position;worldPoint=(modelMatrix*vec4(position,1.)).xyz;surfaceNormal=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`,oR=`
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
`;function lR(r){const t=new Oa;t.name="regional-celestial-bodies",r.add(t);const i=new Wi(1,32,20),s=new Wi(1,16,10),l=new Wi(1,8,6),c=A=>{const G=new en({uniforms:{baseColor:{value:new le("#718fa6")},detailColor:{value:new le("#c7c6b0")},kind:{value:A},alpha:{value:1},seed:{value:1},time:{value:0},lightDirection:{value:new F(-.65,.4,.75)}},vertexShader:rR,fragmentShader:oR,transparent:!0,depthWrite:!0}),Y=new an(i,G);return Y.renderOrder=4,Y.userData.kind=A>2.5?"star":A>1.5?"rocky-body":"planet",t.add(Y),Y},f=Array.from({length:12},()=>c(0)),d=Array.from({length:8},(A,G)=>{const Y=c(2);return Y.userData.kind="moon",{mesh:Y,parent:G}}),p=c(3);p.name="primary-star";const m=new an(new Ia(1,1),new en({uniforms:{baseColor:{value:new le},alpha:{value:1}},transparent:!0,depthWrite:!1,blending:ir,vertexShader:"varying vec2 vUv;void main(){vUv=uv;vec4 center=modelViewMatrix*vec4(0.,0.,0.,1.);vec2 size=vec2(length(modelMatrix[0].xyz),length(modelMatrix[1].xyz));center.xy+=position.xy*size;gl_Position=projectionMatrix*center;}",fragmentShader:"varying vec2 vUv;uniform vec3 baseColor;uniform float alpha;void main(){float r=length(vUv-.5)*2.;float a=exp(-r*r*7.)*(1.-smoothstep(.7,1.,r));gl_FragColor=vec4(baseColor*1.3,a*alpha*.45);}"}));m.name="stellar-corona",m.frustumCulled=!1,m.renderOrder=3.5,t.add(m);const v=new an(new t0(1.32,2.2,64),new en({uniforms:{color:{value:new le("#b8afa0")},alpha:{value:1}},transparent:!0,depthWrite:!1,side:yi,vertexShader:"varying vec2 p;void main(){p=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 p;uniform vec3 color;uniform float alpha;void main(){float r=length(p);float edge=smoothstep(1.32,1.42,r)*(1.-smoothstep(2.05,2.2,r));float bands=.35+.25*sin(r*180.)+.2*sin(r*47.);gl_FragColor=vec4(color*.7,edge*max(.1,bands)*alpha);}"}));v.name="planetary-ring",v.renderOrder=5,t.add(v);const g=new qn().setFromEuler(new ri(1.12,.2,-.27)),y=new mo({color:"#7a858d",roughness:1,transparent:!0}),x=new gb(new $m(1,0),y,96);x.name="distant-rock-cluster",t.add(x);const E=new F,T=new qn,S=new F,_=new F;let w=Nm(7123,0),D=7123,b=0,V=!1,H="Medium",P=0;const O=(A,G,Y,Z)=>{D=A,b=G,w=Nm(A,G),V=!0,E.copy(Y),Z?T.copy(Z):T.identity(),t.userData.systemName=w.name,f.forEach((U,z)=>{const $=w.planets[z],mt=U.material.uniforms;mt.baseColor.value.copy($.color),mt.detailColor.value.copy($.color).lerp(new le("#d0d0b0"),.5),mt.seed.value=$.seed,mt.kind.value=$.kind,mt.lightDirection.value.copy(w.center).sub($.position).applyQuaternion(T).normalize(),U.userData.kind=$.kind===2?"rocky-body":"planet"}),d.forEach(({mesh:U,parent:z},$)=>{U.material.uniforms.baseColor.value.copy(w.planets[z].color).lerp(new le("#a4a5ac"),.7),U.material.uniforms.detailColor.value.set("#b7b4ab"),U.material.uniforms.seed.value=w.planets[z].seed+$*3.1}),p.material.uniforms.baseColor.value.copy(w.starColor),p.material.uniforms.seed.value=A%1e3,m.material.uniforms.baseColor.value.copy(w.starColor),v.material.uniforms.color.value.copy(w.planets[1].color).lerp(new le("#e5d5b1"),.5);let it=(A^20903)>>>0;const j=()=>(it=Math.imul(it,1664525)+1013904223>>>0,it/4294967296),k=new Mn;for(let U=0;U<96;U++){const z=j()*Math.PI*2,$=2300+j()*650;k.position.set(Math.cos(z)*$,(j()-.5)*160,Math.sin(z)*$),k.rotation.set(j()*3,j()*3,j()*3);const mt=5+j()*13;k.scale.set(mt,mt*.7,mt*1.15),k.updateMatrix(),x.setMatrixAt(U,k.matrix)}x.instanceMatrix.needsUpdate=!0,x.computeBoundingSphere()},C=(A,G,Y,Z)=>{A.position.copy(G).applyQuaternion(T).add(E).sub(Z),A.scale.setScalar(Y)};return{group:t,reseed:O,setJump(A){P=A},configure(A){H=A,x.count=A==="Low"?48:A==="Medium"?72:96},update(A,G,Y,Z){(!V||Y!==b)&&O(D,Y,E.clone(),T.clone());const it=1-Sn.smoothstep(P,.12,.65);f.forEach((j,k)=>{const U=w.planets[k];j.visible=k<w.count,C(j,U.position,U.radius,Z),j.rotation.y=G*.002+k*.5,j.geometry=j.position.lengthSq()>6e3**2?l:H==="High"?i:s,j.material.uniforms.alpha.value=Sn.smoothstep(j.position.length()/U.radius,1.05,1.4)*it}),d.forEach(({mesh:j,parent:k},U)=>{const z=f[k],$=w.planets[k].radius;j.visible=z.visible,j.geometry=z.geometry,_.set($*(2.2+U*.12),$*.6,$*.7).applyQuaternion(T),j.position.copy(z.position).add(_),j.scale.setScalar(Math.max(12,$*.18)),j.material.uniforms.alpha.value=z.material.uniforms.alpha.value}),C(p,w.center,w.starRadius,Z),p.geometry=H==="High"?i:s,p.visible=!0,p.material.uniforms.time.value=G,p.material.uniforms.alpha.value=Sn.smoothstep(p.position.length()/w.starRadius,1.05,1.4)*it,m.position.copy(p.position),m.scale.setScalar(w.starRadius*8),m.visible=!0,m.material.uniforms.alpha.value=p.material.uniforms.alpha.value,v.visible=!0,v.position.copy(f[1].position),v.scale.setScalar(w.planets[1].radius),v.quaternion.copy(T).multiply(g),v.material.uniforms.alpha.value=f[1].material.uniforms.alpha.value,S.copy(w.center).applyQuaternion(T).add(E).sub(Z),x.position.copy(S),x.quaternion.copy(T),x.visible=!0,y.opacity=it},dispose(){t.removeFromParent(),x.dispose();const A=new Set([i,s,l]),G=new Set;t.traverse(Y=>{if(Y instanceof an){A.add(Y.geometry);for(const Z of Array.isArray(Y.material)?Y.material:[Y.material])G.add(Z)}}),A.forEach(Y=>Y.dispose()),G.forEach(Y=>Y.dispose())}}}const F1=[-1,0,1],Um=F1.join("/"),Dl=7500,$u=260,zp=5400,cR=3100,Lm=760,Ql={id:"",distance:1/0,level:"clear",intensity:0};function uR(r,t,i=Ql){if(!r||!Number.isFinite(t))return Ql;const s=r===i.id,l=t<cR+(s&&i.level==="critical"?240:0),c=t<zp+(s&&i.level!=="clear"?360:0);return{id:r,distance:Math.max(0,t),level:l?"critical":c?"caution":"clear",intensity:Math.max(0,Math.min(1,(zp-t)/(zp-Lm)))}}function fR(r,t,i,s){const l=r.map((g,y)=>g-i[y]),c=t.map((g,y)=>g-r[y]),f=c.reduce((g,y)=>g+y*y,0),d=2*l.reduce((g,y,x)=>g+y*c[x],0),p=l.reduce((g,y)=>g+y*y,0)-s*s;if(p<=0){const g=t.map((x,E)=>x-i[E]),y=Math.hypot(...g)||1;return g.map((x,E)=>i[E]+(Math.hypot(...g)?x/y:E===2?1:0)*s)}const m=d*d-4*f*p;if(f===0||m<0)return[...t];const v=(-d-Math.sqrt(m))/(2*f);return v>=0&&v<=1?r.map((g,y)=>g+c[y]*Math.max(0,v-1e-4)):[...t]}const vf=14e3;function hR(r){return[r.x,r.y,r.z].map(t=>Math.floor((t+vf/2)/vf))}function Ip(r,t,i){let s=(Math.imul(r,73856093)^Math.imul(t,19349663)^Math.imul(i,83492791)^7123)>>>0;const l=s,c=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296),f=r===0&&t===0&&i===0,d=f?0:l%5,p=new qn().setFromEuler(new ri(c()*Math.PI*2,c()*Math.PI*2,c()*Math.PI*2));f&&p.identity();const m=new F(r,t,i).multiplyScalar(vf),v=Nm(l,d,!1),g=v.center.clone().applyQuaternion(p).add(m);return{key:`${r}/${t}/${i}`,blackHole:`${r}/${t}/${i}`===Um,seed:l,region:d,heading:p,anchor:m,starWorld:g,starColor:v.starColor,starRadius:v.starRadius,name:v.name}}function dR(r){const t=Array.from({length:27},()=>({bodies:lR(r),sector:null})),i=new Oa;i.name="distant-system-markers",r.add(i);const s=343,l=new Float32Array(s*3),c=new Float32Array(s*3),f=new Float32Array(s),d=new pn;d.setAttribute("position",new hn(l,3)),d.setAttribute("color",new hn(c,3)),d.setAttribute("size",new hn(f,1)),d.setDrawRange(0,s);const p=new F,m=new F,v=new F,g=new F,y=new en({uniforms:{offset:{value:m},jump:{value:1}},vertexColors:!0,transparent:!0,depthWrite:!1,blending:ir,vertexShader:"attribute float size;uniform vec3 offset;uniform float jump;varying vec3 vColor;varying float visibility;void main(){vec3 p=position-offset;float d=length(p);visibility=smoothstep(10000.,14000.,d)*(1.-smoothstep(32000.,40000.,d))*jump;vColor=color;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(size*85000./max(100.,d),1.8,12.);}",fragmentShader:"varying vec3 vColor;varying float visibility;void main(){float d=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(vColor*1.6,exp(-d*d*5.)*visibility);}"}),x=new jm(d,y);x.frustumCulled=!1,x.renderOrder=3,i.add(x);const E={direction:new F(-.5,.7,-.3),color:new le("#d9e6ff"),intensity:2};let T="",S="Medium",_=0,w=!1;const D=Ip(...F1),b=P=>{const[O,C,A]=hR(P),G=`${O}/${C}/${A}`;if(G===T)return;T=G,p.set(O,C,A).multiplyScalar(vf);let Y=0;for(let it=-3;it<=3;it++)for(let j=-3;j<=3;j++)for(let k=-3;k<=3;k++){const U=Ip(O+it,C+j,A+k);U.starWorld.clone().sub(p).toArray(l,Y*3),U.starColor.toArray(c,Y*3),f[Y]=U.starRadius/400,Y++}d.attributes.position.needsUpdate=!0,d.attributes.color.needsUpdate=!0,d.attributes.size.needsUpdate=!0;const Z=new Map;for(let it=-1;it<=1;it++)for(let j=-1;j<=1;j++)for(let k=-1;k<=1;k++){const U=Ip(O+it,C+j,A+k);Z.set(U.key,U)}for(const it of t)it.sector&&Z.has(it.sector.key)?Z.delete(it.sector.key):it.sector=null;for(const it of Z.values()){const j=t.find(k=>!k.sector);j.sector=it,j.bodies.reseed(it.seed,it.region,it.anchor,it.heading),j.bodies.update(1e3,0,it.region,P),j.bodies.configure(S)}},V=P=>{var G;b(P);let O=t[0].sector,C=1/0;for(const Y of t){const Z=Y.sector.starWorld.distanceTo(P);Z<C&&(O=Y.sector,C=Z)}const A=(G=t.find(Y=>{var Z;return(Z=Y.sector)==null?void 0:Z.blackHole}))==null?void 0:G.sector;return A&&A.starWorld.distanceTo(P)<Dl&&(O=A,C=A.starWorld.distanceTo(P)),{nearest:O,nearestDistance:C}},H=(P,O)=>{const{nearest:C,nearestDistance:A}=V(P);if(g.set(0,0,-1).applyQuaternion(O),_>=2&&!w&&C.key!==Um)return{nearest:C,nearestDistance:A,target:D};let G=C,Y=-1/0;for(const Z of t){const it=Z.sector;if(it.key===C.key)continue;v.copy(it.starWorld).sub(P);const j=v.length(),k=v.normalize().dot(g)-j/1e5;k>Y&&(Y=k,G=it)}return{nearest:C,nearestDistance:A,target:G}};return{recordJump(P){_++,P===Um&&(w=!0)},setJump(P){y.uniforms.jump.value=1-Sn.smoothstep(P,.12,.65);for(const O of t)O.bodies.setJump(P)},configure(P){S=P;for(const O of t)O.bodies.configure(P)},update(P,O,C,A){var G;b(A),m.copy(A).sub(p),A.distanceTo(D.starWorld)<Dl&&(w=!0);for(const Y of t){const Z=Y.sector;Y.bodies.update(P,O,Z.region,A);for(const it of Y.bodies.group.children){const j=it.position.length(),k=1-Sn.smoothstep(j,1e4,13e3);if(it instanceof an){const U=it.material;(G=U.uniforms)!=null&&G.alpha?U.uniforms.alpha.value*=k:"opacity"in U&&(U.opacity*=k)}it.visible=it.visible&&k>0,Z.blackHole&&(it.userData.kind==="star"||it.name==="stellar-corona")&&(it.visible=!1)}}},singularityAt(P){const{nearest:O,nearestDistance:C}=V(P);return O.blackHole&&C<Dl?{id:O.key,position:O.starWorld,distance:C}:null},lightAt(P){let O=t[0].sector,C=1/0;for(const A of t){if(!A.sector)continue;const G=A.sector.starWorld.distanceToSquared(P);G<C&&(O=A.sector,C=G)}return O&&(E.direction.copy(O.starWorld).sub(P).normalize(),E.color.copy(O.starColor),E.intensity=1.2+2.4/(1+C/25e6)),E},jumpTarget(P,O){const{target:C}=H(P,O),A=C.starWorld.clone().sub(P).normalize(),G=C.blackHole,Y=C.starWorld.clone().addScaledVector(A,G?-6900:-4300),Z=D;return!G&&Y.distanceTo(Z.starWorld)<Dl+500&&(Y.copy(C.starWorld).addScaledVector(C.starWorld.clone().sub(Z.starWorld).normalize(),4300),A.copy(C.starWorld).sub(Y).normalize()),{position:Y,direction:G?A.negate():A,region:C.region,name:C.name,key:C.key,blackHole:G}},navigation(P,O){const{nearest:C,nearestDistance:A,target:G}=H(P,O);return{current:A<(C.blackHole?Dl:5200)?C.name:"Interstellar passage",next:G.name,distance:Math.round(G.starWorld.distanceTo(P)),region:C.region,nextHazard:G.blackHole}},dispose(){for(const P of t)P.bodies.dispose();i.removeFromParent(),d.dispose(),y.dispose()}}}const Om={Low:{pixelRatio:.9,stars:[550,2400,7800],cloudScale:.32,volumes:1,steps:4,octaves:2,bloom:!1},Medium:{pixelRatio:1,stars:[1e3,4800,19e3],cloudScale:.4,volumes:2,steps:7,octaves:2,bloom:!1},High:{pixelRatio:1.35,stars:[2200,1e4,48e3],cloudScale:.5,volumes:3,steps:10,octaves:3,bloom:!0}},Bx={Dark:{exposure:.8,cabin:.7,nebula:.65},Balanced:{exposure:1.12,cabin:1,nebula:.9},Cinematic:{exposure:1.32,cabin:1.12,nebula:1.08}},Bl=[{name:"Violet Nebula",subtitle:"THE PERSEUS ARM",color:"#a879ef",second:"#315fab",accent:"#f4a4cf",density:1.05,band:.8,structure:1.15,bandWidth:1,warmth:.25,stars:.87,exposure:1},{name:"Stellar Ocean",subtitle:"AN ENDLESS SEA OF LIGHT",color:"#88bcf2",second:"#234a89",accent:"#c3dcff",density:.38,band:.7,structure:1.4,bandWidth:.65,warmth:.07,stars:1,exposure:1.04},{name:"Golden Core",subtitle:"THE HEART OF THE GALAXY",color:"#edbd79",second:"#956753",accent:"#fff2c9",density:.85,band:1.65,structure:1.8,bandWidth:1.4,warmth:.88,stars:1.4,exposure:.93},{name:"Cosmic Clouds",subtitle:"WHERE THE STARS ARE BORN",color:"#67cbbf",second:"#306c9c",accent:"#b1d5e8",density:1.3,band:.5,structure:.65,bandWidth:1.1,warmth:.16,stars:.7,exposure:1},{name:"Deep Silence",subtitle:"FAR FROM EVERYTHING",color:"#6d7fbb",second:"#253553",accent:"#a6b8e1",density:.12,band:.15,structure:.8,bandWidth:.45,warmth:.12,stars:.23,exposure:.84}],H1=`
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
`,pR=`
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
`,mR=`
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
`,gR=`
varying vec3 worldPoint;
void main(){vec4 p=modelMatrix*vec4(position,1.);worldPoint=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}
`,vR=`
precision highp float;
varying vec3 worldPoint;
uniform vec3 center, radii, tint, second, accent;
uniform float time, density, visibility, energy, seed, structure;
uniform int steps, octaves;
uniform mat3 volumeRotation;
${H1}
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
`,_R=`
varying vec3 direction;
void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`,yR=`
varying vec3 direction;
uniform vec3 tint, second, accent;
uniform float band, density, energy, bandWidth;
uniform mat3 layoutRotation, destinationRotation, volumeRotation;
uniform int octaves;
${H1}
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
`;function xR(r){const t=Bl[0],i=new v1,s=new Si(1,1,{type:Oi,depthBuffer:!1}),l=new ye,c={sky:{value:s.texture},reprojection:{value:l},tanHalf:{value:.6745},wideTanHalf:{value:.7554},aspect:{value:1},veil:{value:0},jumpTint:{value:new le("#92bce0")}},f=new an(new Ia(2,2),new en({uniforms:c,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 uvv;void main(){uvv=uv;gl_Position=vec4(position.xy,1.,1.);}",fragmentShader:`varying vec2 uvv;uniform sampler2D sky;uniform mat3 reprojection;uniform float tanHalf,wideTanHalf,aspect,veil;uniform vec3 jumpTint;
      void main(){vec3 ray=reprojection*vec3((uvv-.5)*2.*tanHalf*vec2(aspect,1.),-1.);
      vec2 sampleUV=ray.xy/max(.001,-ray.z)/(2.*wideTanHalf*vec2(aspect,1.))+.5;
      gl_FragColor=texture2D(sky,clamp(sampleUV,.001,.999));gl_FragColor.rgb=mix(gl_FragColor.rgb,jumpTint*.38,veil*.985);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`}));f.frustumCulled=!1,f.renderOrder=-10,r.add(f);const d=new si(75,1,.1,16e3),p=new qn,m=new qn,v=new qn,g=new F,y=new F,x=new Oe,E=new F,T=new F;let S=!0,_=-1/0,w=1/24;const D=dR(r),b=new F,V=new F,H=new qn,P=new qn,O=new ye,C=new Oe,A=new ye,G=new ye,Y=Bl.map(W=>({tint:new le(W.color),second:new le(W.second),accent:new le(W.accent)})),Z={jumpAmount:{value:0},layoutRotation:{value:O},destinationRotation:{value:A},volumeRotation:{value:G},time:{value:0},tint:{value:Y[0].tint.clone()},second:{value:Y[0].second.clone()},accent:{value:Y[0].accent.clone()},density:{value:Number(t.density)},band:{value:Number(t.band)},warmth:{value:Number(t.warmth)},abundance:{value:t.stars/1.4},structure:{value:Number(t.structure)},bandWidth:{value:Number(t.bandWidth)},energy:{value:.9},octaves:{value:3},halo:{value:1}};let it=7123;const j=()=>(it=it*16807%2147483647,(it-1)/2147483646),k=()=>Math.sqrt(-2*Math.log(Math.max(1e-5,j())))*Math.cos(2*Math.PI*j()),z=[new F(1900,1400,1900),new F(5400,4e3,5400),new F(15e3,11e3,15e3)].map((W,Et)=>{const Rt=Om.High.stars[Et],dt=new Float32Array(Rt*3),bt=new Float32Array(Rt),vt=new Float32Array(Rt),I=new Float32Array(Rt);for(let ht=0;ht<Rt;ht++){let At=(j()-.5)*W.x,Dt=(j()-.5)*W.z,Ot=(j()-.5)*W.y;if(Et>0&&j()<.72){if(j()<.28){const se=Math.floor(j()*4);At=(se%2?.22:-.24)*W.x+k()*W.x*.045,Dt=(se<2?-.27:.22)*W.z+k()*W.z*.055}Ot=-.42*At+k()*W.y*.035+Math.sin(Dt/W.z*5)*W.y*.045}dt.set([At,Ot,Dt],ht*3);const re=j();bt[ht]=(re>.987?12+j()*14:1.3+j()*4.6)*[.7,1.1,2][Et],vt[ht]=j(),I[ht]=j()}const Mt=new pn;Mt.setAttribute("position",new hn(dt,3)),Mt.setAttribute("radius",new hn(bt,1)),Mt.setAttribute("temperature",new hn(vt,1)),Mt.setAttribute("identity",new hn(I,1));const yt=new en({uniforms:{...Z,offset:{value:new F},span:{value:W},layoutOffset:{value:new F},pixels:{value:400},dpr:{value:1}},vertexShader:pR,fragmentShader:mR,transparent:!0,depthWrite:!1,blending:ir}),ct=new jm(Mt,yt);return ct.frustumCulled=!1,ct.renderOrder=3,r.add(ct),ct}),$=new an(new Wi(12500,32,16),new en({uniforms:Z,vertexShader:_R,fragmentShader:yR,side:Bn,depthWrite:!1}));$.renderOrder=-2,$.frustumCulled=!1,i.add($);const mt=new Wi(1,24,16),Nt=[{center:new F(-180,110,-820),radii:new F(680,330,770)},{center:new F(600,-140,-1600),radii:new F(1050,480,1e3)},{center:new F(-850,220,-2400),radii:new F(1200,520,1050)},{center:new F(450,420,1200),radii:new F(850,600,1e3)}],Xt=Nt.map(()=>new F),Zt=Nt.map((W,Et)=>{const Rt=new en({uniforms:{...Z,center:{value:W.center.clone()},radii:{value:W.radii},steps:{value:10},visibility:{value:1},seed:{value:4.3+Et*9.7}},vertexShader:gR,fragmentShader:vR,transparent:!0,depthWrite:!1,side:Bn}),dt=new an(mt,Rt);return dt.position.copy(W.center),dt.scale.copy(W.radii),dt.renderOrder=1,i.add(dt),dt}),X=new iA("#b7c6ef","#080e1d",1.6);r.add(X);const ut=new hx("#dae6ff",2.8);ut.position.set(-3,4,1),r.add(ut),ut.shadow.mapSize.set(1024,1024),ut.shadow.camera.left=-22,ut.shadow.camera.right=22,ut.shadow.camera.top=18,ut.shadow.camera.bottom=-18,ut.shadow.camera.near=.5,ut.shadow.camera.far=120,ut.shadow.bias=-15e-5,ut.shadow.normalBias=.018;const J=new hx("#628bb2",.65);return J.position.set(4,2,3),r.add(J),{tint:Z.tint.value,navigation:D.navigation,jumpTarget:D.jumpTarget,recordJump:D.recordJump,singularityAt:D.singularityAt,setJump(W,Et){Z.jumpAmount.value=Math.max(W,Et),c.veil.value=Et,c.jumpTint.value.copy(Z.tint.value).lerp(Z.accent.value,.35),D.setJump(Math.max(W,Et))},reseed(W,Et,Rt,dt){b.copy(Rt),dt?H.copy(dt):H.identity(),P.copy(H).invert(),A.setFromMatrix4(C.makeRotationFromQuaternion(H)),G.copy(A).transpose();for(const I of Zt)I.quaternion.copy(H);let bt=W>>>0;const vt=()=>(bt=Math.imul(bt,1664525)+1013904223>>>0,bt/4294967296);C.makeRotationY((vt()-.5)*1.2),C.multiply(new Oe().makeRotationZ((vt()-.5)*.8)),O.setFromMatrix4(C);for(const I of z){const Mt=I.material.uniforms.span.value;I.material.uniforms.layoutOffset.value.set((vt()-.5)*Mt.x,(vt()-.5)*Mt.y,(vt()-.5)*Mt.z)}for(let I=0;I<Zt.length;I++)Xt[I].set((vt()-.5)*600,(vt()-.5)*250,(vt()-.5)*500),Zt[I].material.uniforms.seed.value=vt()*80+2;S=!0},renderAtmosphere(W,Et,Rt=!1){Et.updateWorldMatrix(!0,!1),Et.matrixWorld.decompose(g,p,y);const dt=Et,bt=Math.tan(Sn.degToRad(dt.fov)*.5);(c.aspect.value!==dt.aspect||c.tanHalf.value!==bt)&&(S=!0),c.tanHalf.value=bt,c.wideTanHalf.value=bt*1.12,c.aspect.value=dt.aspect;const vt=performance.now()/1e3;if(Rt||S||vt-_>=w||p.angleTo(m)>.075||E.distanceToSquared(T)>900){d.fov=Sn.radToDeg(2*Math.atan(bt*1.12)),d.aspect=dt.aspect,d.near=dt.near,d.far=dt.far,d.updateProjectionMatrix(),d.position.copy(g),d.quaternion.copy(p);const I=W.toneMapping;W.toneMapping=Pa,W.setRenderTarget(s),W.render(i,d),W.setRenderTarget(null),W.toneMapping=I,m.copy(p),T.copy(E),_=performance.now()/1e3,S=!1}v.copy(m).invert().multiply(p),x.makeRotationFromQuaternion(v),l.setFromMatrix4(x)},dispose(){s.dispose(),D.dispose(),ut.shadow.dispose();const W=new Set,Et=new Set;i.traverse(Rt=>{Rt instanceof an&&(W.add(Rt.geometry),Et.add(Rt.material))}),W.forEach(Rt=>Rt.dispose()),Et.forEach(Rt=>Rt.dispose())},configure(W,Et,Rt,dt,bt,vt,I=!1){ut.castShadow=W==="High"&&!I,!ut.castShadow&&ut.shadow.map&&(ut.shadow.map.dispose(),ut.shadow.map=null),S=!0,w=I?1/15:W==="Low"?1/20:W==="Medium"?1/24:1/30;const Mt=Om[W];D.configure(W),Z.octaves.value=Mt.octaves;const yt=vt&&W!=="Low"?Oi:Pi;s.texture.type!==yt&&(s.dispose(),s.texture.type=yt),s.setSize(Math.max(1,Math.round(Rt*Et*(I?.26:Mt.cloudScale))),Math.max(1,Math.round(dt*Et*(I?.26:Mt.cloudScale)))),Z.halo.value=.75+bt*.8,z.forEach((ct,ht)=>{ct.geometry.setDrawRange(0,Mt.stars[ht]),ct.material.uniforms.pixels.value=dt*.64*Et,ct.material.uniforms.dpr.value=Et}),Zt.forEach((ct,ht)=>{ct.visible=ht<Mt.volumes,ct.material.uniforms.steps.value=Mt.steps})},update(W,Et,Rt,dt,bt){V.copy(dt).sub(b).applyQuaternion(P),E.copy(V),D.update(W,Et,Rt,dt);const vt=D.lightAt(dt);ut.position.copy(vt.direction).multiplyScalar(45),ut.color.lerp(vt.color,1-Math.exp(-W*1.5)),ut.intensity=Sn.damp(ut.intensity,vt.intensity,1.5,W),J.color.copy(Z.tint.value).lerp(new le("#829fc1"),.65);const I=Bl[Rt],Mt=Y[Rt],yt=1-Math.exp(-W*.55);Z.time.value=Et,Z.tint.value.lerp(Mt.tint,yt),Z.second.value.lerp(Mt.second,yt),Z.accent.value.lerp(Mt.accent,yt),Z.density.value=Sn.lerp(Z.density.value,I.density,yt),Z.band.value=Sn.lerp(Z.band.value,I.band,yt),Z.structure.value=Sn.lerp(Z.structure.value,I.structure,yt),Z.bandWidth.value=Sn.lerp(Z.bandWidth.value,I.bandWidth,yt),Z.warmth.value=Sn.lerp(Z.warmth.value,I.warmth,yt),Z.abundance.value=Sn.lerp(Z.abundance.value,I.stars/1.4,yt),Z.energy.value=Sn.lerp(Z.energy.value,bt,yt),z.forEach(ct=>ct.material.uniforms.offset.value.copy(V)),Zt.forEach((ct,ht)=>{const At=Nt[ht].center;ct.position.set(Sn.euclideanModulo(At.x+Xt[ht].x-V.x+4600,9200)-4600,Sn.euclideanModulo(At.y+Xt[ht].y-V.y+3600,7200)-3600,Sn.euclideanModulo(At.z+Xt[ht].z-V.z+4600,9200)-4600);const Dt=Math.max(Math.abs(ct.position.x)/4600,Math.abs(ct.position.y)/3600,Math.abs(ct.position.z)/4600);ct.position.applyQuaternion(H),ct.material.uniforms.center.value.copy(ct.position),ct.material.uniforms.visibility.value=1-Sn.smoothstep(Dt,.65,.95)})}}}function G1(r,t=!1){const i=r[0].index!==null,s=new Set(Object.keys(r[0].attributes)),l=new Set(Object.keys(r[0].morphAttributes)),c={},f={},d=r[0].morphTargetsRelative,p=new pn;let m=0;for(let v=0;v<r.length;++v){const g=r[v];let y=0;if(i!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const x in g.attributes){if(!s.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;c[x]===void 0&&(c[x]=[]),c[x].push(g.attributes[x]),y++}if(y!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". Make sure all geometries have the same number of attributes."),null;if(d!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const x in g.morphAttributes){if(!l.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+".  .morphAttributes must be consistent throughout all geometries."),null;f[x]===void 0&&(f[x]=[]),f[x].push(g.morphAttributes[x])}if(t){let x;if(i)x=g.index.count;else if(g.attributes.position!==void 0)x=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". The geometry must have either an index or a position attribute"),null;p.addGroup(m,x,v),m+=x}}if(i){let v=0;const g=[];for(let y=0;y<r.length;++y){const x=r[y].index;for(let E=0;E<x.count;++E)g.push(x.getX(E)+v);v+=r[y].attributes.position.count}p.setIndex(g)}for(const v in c){const g=Fx(c[v]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+v+" attribute."),null;p.setAttribute(v,g)}for(const v in f){const g=f[v][0].length;if(g===0)break;p.morphAttributes=p.morphAttributes||{},p.morphAttributes[v]=[];for(let y=0;y<g;++y){const x=[];for(let T=0;T<f[v].length;++T)x.push(f[v][T][y]);const E=Fx(x);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+v+" morphAttribute."),null;p.morphAttributes[v].push(E)}}return p}function Fx(r){let t,i,s,l=-1,c=0;for(let m=0;m<r.length;++m){const v=r[m];if(t===void 0&&(t=v.array.constructor),t!==v.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=v.itemSize),i!==v.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(s===void 0&&(s=v.normalized),s!==v.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(l===-1&&(l=v.gpuType),l!==v.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;c+=v.count*i}const f=new t(c),d=new hn(f,i,s);let p=0;for(let m=0;m<r.length;++m){const v=r[m];if(v.isInterleavedBufferAttribute){const g=p/i;for(let y=0,x=v.count;y<x;y++)for(let E=0;E<i;E++){const T=v.getComponent(y,E);d.setComponent(y+g,E,T)}}else f.set(v.array,p);p+=v.count*i}return l!==void 0&&(d.gpuType=l),d}const Nl=new F;function Li(r,t,i,s,l,c){const f=2*Math.PI*l/4,d=Math.max(c-2*l,0),p=Math.PI/4;Nl.copy(t),Nl[s]=0,Nl.normalize();const m=.5*f/(f+d),v=1-Nl.angleTo(r)/p;return Math.sign(Nl[i])===1?v*m:d/(f+d)+m+m*(1-v)}class Mf extends Ao{constructor(t=1,i=1,s=1,l=2,c=.1){const f=l*2+1;if(c=Math.min(t/2,i/2,s/2,c),super(1,1,1,f,f,f),this.type="RoundedBoxGeometry",this.parameters={width:t,height:i,depth:s,segments:l,radius:c},f===1)return;const d=this.toNonIndexed();this.index=null,this.attributes.position=d.attributes.position,this.attributes.normal=d.attributes.normal,this.attributes.uv=d.attributes.uv;const p=new F,m=new F,v=new F(t,i,s).divideScalar(2).subScalar(c),g=this.attributes.position.array,y=this.attributes.normal.array,x=this.attributes.uv.array,E=g.length/6,T=new F,S=.5/f;for(let _=0,w=0;_<g.length;_+=3,w+=2)switch(p.fromArray(g,_),m.copy(p),m.x-=Math.sign(m.x)*S,m.y-=Math.sign(m.y)*S,m.z-=Math.sign(m.z)*S,m.normalize(),g[_+0]=v.x*Math.sign(p.x)+m.x*c,g[_+1]=v.y*Math.sign(p.y)+m.y*c,g[_+2]=v.z*Math.sign(p.z)+m.z*c,y[_+0]=m.x,y[_+1]=m.y,y[_+2]=m.z,Math.floor(_/E)){case 0:T.set(1,0,0),x[w+0]=Li(T,m,"z","y",c,s),x[w+1]=1-Li(T,m,"y","z",c,i);break;case 1:T.set(-1,0,0),x[w+0]=1-Li(T,m,"z","y",c,s),x[w+1]=1-Li(T,m,"y","z",c,i);break;case 2:T.set(0,1,0),x[w+0]=1-Li(T,m,"x","z",c,t),x[w+1]=Li(T,m,"z","x",c,s);break;case 3:T.set(0,-1,0),x[w+0]=1-Li(T,m,"x","z",c,t),x[w+1]=1-Li(T,m,"z","x",c,s);break;case 4:T.set(0,0,1),x[w+0]=1-Li(T,m,"x","y",c,t),x[w+1]=1-Li(T,m,"y","x",c,i);break;case 5:T.set(0,0,-1),x[w+0]=Li(T,m,"x","y",c,t),x[w+1]=1-Li(T,m,"y","x",c,i);break}}static fromJSON(t){return new Mf(t.width,t.height,t.depth,t.segments,t.radius)}}function of(r,t=1){return r.onBeforeCompile=i=>{i.uniforms.panelScale={value:t},i.vertexShader=`varying vec3 shipPoint,shipNormal;
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
roughnessFactor=clamp(roughnessFactor+(grain-.5)*.085+seam*.24-edge*.12,.15,.95);`)},r.customProgramCacheKey=()=>"aether-aerospace-pbr-v1",r}function SR(r){const t=new Oa;t.name="enclosed-flight-deck",r.add(t);const i={value:new le("#ae80f0")},s=(U,z,$)=>of(new mo({color:U,metalness:z,roughness:$,envMapIntensity:z>.7?1.2:.75}),2.4),l=s("#27343f",.48,.42),c=s("#82949d",.85,.26),f=s("#0c141d",.16,.68),d=l.color.clone(),p=c.color.clone(),m=f.color.clone(),v=new rr({color:"#52d9d5"}),g=new Map;let y=!1;const x=(U,z)=>{y&&(U.scale(.72,.58,.9),U.translate(0,-.798,-.3)),g.has(z)||g.set(z,[]),g.get(z).push(U)};function E(U,z,$,mt,Nt,Xt,Zt,X=0,ut=0,J=0){const W=new Mf(Nt,Xt,Zt,1,Math.min(Nt,Xt,Zt)*.12);W.rotateX(X),W.rotateY(ut),W.rotateZ(J),W.translate(z,$,mt),x(W,U)}function T(U,z,$,mt){const Nt=new xf(mt,mt,z.distanceTo($),8);Nt.applyQuaternion(new qn().setFromUnitVectors(new F(0,1,0),$.clone().sub(z).normalize())),Nt.translate(...z.clone().add($).multiplyScalar(.5).toArray()),x(Nt,U)}function S(U,z,$,mt,Nt){const Xt=Array.from({length:41},(Zt,X)=>{const ut=-.12+X/40*(Math.PI+.24);return new F(Math.cos(ut)*z,-.95+Math.sin(ut)*$,U)});x(new gf(new bm(Xt),48,mt,8,!1),Nt)}E(l,0,-2.02,.25,7.3,.22,7),E(l,0,-1.65,2.55,7.3,.65,.2),E(l,0,3.35,2.55,7.3,.13,.18);for(const U of[-3.5,-1.4,1.4,3.5])E(l,U,1.05,2.55,.085,4.55,.14),E(v,U+.048,1.05,2.48,.008,4.42,.012);for(const U of[-1.5,1.1,2.55])E(l,0,3.35,U,7.05,.095,.09),E(v,0,3.29,U,6.9,.008,.012);for(const U of[-1,1]){E(l,U*3.55,-1.65,.4,.17,.65,4.3),E(l,U*3.55,3.35,-.4,.13,.13,6);for(const z of[-1.5,1.1,2.55])E(l,U*3.55,1.05,z,.12,4.55,.085),E(v,U*3.48,1.05,z+.049,.012,4.42,.008);E(l,U*2.62,-1.52,-1.9,.65,.76,4,0,U*-.1),T(c,new F(U*1,-1.1,-2.95),new F(U*2.72,-1.4,.25),.075),T(l,new F(U*1.12,-1.15,-3.02),new F(U*2.85,-1.47,.35),.14),T(c,new F(U*2.9,-.95,-3.2),new F(U*3.12,-1.25,.5),.055),T(v,new F(U*1.16,-1.18,-2.98),new F(U*2.77,-1.54,.15),.009);for(let z=0;z<13;z++){const $=z/12;E(c,U*(1.12+$*1.69),-1.15-$*.33,-3.02+$*3.23,.035,.035,.028)}}S(-3.35,2.92,3.62,.085,l),S(-3.32,2.84,3.57,.025,c),S(-3.29,2.81,3.53,.008,v),S(.7,3.15,3.9,.12,l),T(l,new F(0,2.68,-3.35),new F(0,2.95,.8),.065),y=!0;const _=new mf;_.moveTo(-1.62,-1.85),_.lineTo(-1.44,-.58),_.bezierCurveTo(-1.2,-.12,-.92,.48,-.58,.55),_.quadraticCurveTo(0,.72,.58,.55),_.bezierCurveTo(.92,.48,1.2,-.12,1.44,-.58),_.lineTo(1.62,-1.85),_.closePath();const w=new Zl(_,{depth:.24,bevelEnabled:!0,bevelSize:.045,bevelThickness:.045,bevelSegments:2,steps:1});w.translate(0,-.12,-3.18),x(w,f);const D=[new F(-1.4,-.62,-2.89),new F(-.88,.23,-2.89),new F(0,.52,-2.89),new F(.88,.23,-2.89),new F(1.4,-.62,-2.89)];x(new gf(new bm(D),40,.045,8,!1),c),E(c,0,-.13,-2.84,1.19,.76,.12,-.1),E(f,0,-.13,-2.755,1.13,.7,.035,-.1),E(l,0,-.74,-2.72,1.32,.18,.22),E(f,0,-.72,-2.58,.85,.09,.06);for(const U of[-1,1]){E(l,U*1.14,-1.05,-1.62,.78,.25,1.75,.18,0,U*.12),E(f,U*1.14,-.91,-1.62,.69,.035,1.66,.18,0,U*.12),T(c,new F(U*1.59,-1.13,-.65),new F(U*1.61,-.78,-2.5),.045),T(c,new F(U*.73,-1.12,-.72),new F(U*.75,-.87,-2.35),.035),E(f,U*.97,-.63,-2.36,.59,.44,.12,-.34,-U*.18);for(let z=0;z<3;z++)for(let $=0;$<4;$++)E(c,U*1.15+($-1.5)*.12,-.76-z*.035,-1.8+z*.18,.085,.04,.105,.18);for(let z=0;z<5;z++)E(f,U*1.23,-.83,-.96-z*.15,.12,.07,.085,.18),E(c,U*.94,-.79,-.98-z*.15,.045,.06,.065,.18);E(f,U*.65,-1.11,-1.78,.26,.11,.3),T(c,new F(U*.65,-1.07,-1.78),new F(U*.59,-.78,-1.86),.043),E(f,U*.59,-.72,-1.87,.11,.19,.16,-.25,0,U*.15),E(v,U*.59,-.625,-1.84,.035,.008,.045),E(c,U*.22,-1.74,-2.16,.2,.09,.34,.5);for(let z=0;z<6;z++)E(f,U*.22,-1.69+z*.013,-2.29+z*.04,.14,.014,.012,.5);E(v,U*1.34,-1.82,-.45,.025,.025,.58);for(let z=0;z<18;z++)E(c,U*1.32,-1.91,-.9+z*.085,.28,.014,.012)}y=!1,E(f,0,-1.66,-.08,.99,.25,1.4),E(l,0,-1.12,1,1.12,.92,.28,-.13),E(f,0,-1.1,.82,.91,.78,.14,-.13);const b={reflection:{value:null},hasReflection:{value:0},strength:{value:.06},tint:i},V=new en({uniforms:b,transparent:!0,depthWrite:!1,side:yi,vertexShader:"varying vec3 panePoint,paneNormal;void main(){panePoint=position;paneNormal=normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 panePoint,paneNormal;uniform sampler2D reflection;uniform float hasReflection,strength;uniform vec3 tint;
    void main(){vec3 v=normalize(-panePoint),n=normalize(paneNormal);float facing=abs(dot(n,v));vec3 r=reflect(-v,n);
    vec2 uv=vec2(atan(r.z,r.x)/6.2831853+.5,asin(clamp(r.y,-1.,1.))/3.14159265+.5);
    vec3 environment=hasReflection>.5?texture2D(reflection,uv).rgb:vec3(.08,.15,.2);
    float fresnel=pow(1.-facing,3.);float reflectionAlpha=.008+strength*(.12+fresnel);
    float ghost=exp(-pow((panePoint.y+.7)*5.,2.))*pow(max(0.,sin(panePoint.x*8.)),14.);
    gl_FragColor=vec4(environment*.8+tint*.025+vec3(.04,.25,.24)*ghost,reflectionAlpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    }`}),H=(U,z,$,mt,Nt,Xt=0,Zt=0)=>{const X=new Ia(mt,Nt);X.rotateX(Xt),X.rotateY(Zt),X.translate(U,z,$),x(X,V)};for(const U of[-1,1])H(U*3.56,1.05,-.4,5.9,4.5,0,Math.PI/2);H(0,1.05,2.57,7,4.5),H(0,3.36,-.4,7,5.9,Math.PI/2);const P=document.createElement("canvas");P.width=P.height=1024;const O=P.getContext("2d");O.fillStyle="#020b10",O.fillRect(0,0,1024,1024);const C=(U,z,$,mt,Nt="#40bfbf")=>{O.strokeStyle=Nt,O.beginPath(),O.moveTo(U,z),O.lineTo($,mt),O.stroke()},A=(U,z,$,mt=10,Nt="#6ee9dd")=>{O.font=`${mt}px monospace`,O.fillStyle=Nt,O.fillText(U,z,$)};O.strokeStyle="#65eddf",O.lineWidth=3,O.strokeRect(5,5,630,354),A("A E T H E R   /   DEEP SPACE NAVIGATION",20,26,12),A("FLIGHT SYSTEMS",21,53),A("VECTOR  /  LOCK",465,53),O.lineWidth=1;for(let U=0;U<11;U++)C(20,70+U*22,164,70+U*22,"#154c58"),A(["NAV  ONLINE","DRIVE NOMINAL","O2   100.0%","HULL  STABLE"][U%4],24,84+U*22,8),C(460,70+U*22,610,70+U*22,"#154c58"),A(`${(U*173.29+72).toFixed(2)} / ${U%3===0?"ACTIVE":"SYNC"}`,467,84+U*22,8);for(let U=0;U<9;U++){const z=18+U*11;O.strokeStyle=U%2?"#174b59":"#21838b",O.beginPath(),O.arc(320,185,z,0,Math.PI*2),O.stroke()}for(let U=0;U<12;U++){const z=U/12*Math.PI*2;C(320+Math.cos(z)*19,185+Math.sin(z)*19,320+Math.cos(z)*107,185+Math.sin(z)*107,"#18525e")}const G=O.createRadialGradient(320,185,1,320,185,65);G.addColorStop(0,"#8bfff5"),G.addColorStop(.18,"#1dd7d5"),G.addColorStop(1,"#05303b00"),O.fillStyle=G,O.fillRect(250,115,140,140);for(let U=0;U<60;U++)C(185+U*4.4,317+Math.sin(U*.7)*7,189+U*4.4,317+Math.sin((U+1)*.7)*7,"#50cec5");A("PERSEUS // CONTINUOUS NAVIGATION",183,345,9),O.fillStyle="#04100a",O.fillRect(0,390,400,220);for(let U=0;U<18;U++)A(`${U.toString(16).padStart(2,"0")}  ${["SYSTEM LINK ESTABLISHED","TRAJECTORY COMPUTED","DEEP FIELD SCAN / OK","> AETHER FLIGHT COMPUTER"][U%4]}`,12,405+U*11,9,"#80c858");O.fillStyle="#063547",O.fillRect(430,390,350,180);for(let U=0;U<5;U++)A(["ATTITUDE","ENGINE","COOLANT","SIGNAL","ENERGY"][U],445,413+U*30,12),O.fillStyle="#47e4ef",O.fillRect(550,402+U*30,38+U*28,9);const Y=["#f3d238","#28becf","#e35345","#9cd357","#c7e9de"];for(let U=0;U<4;U++)for(let z=0;z<8;z++){const $=12+z*48,mt=650+U*48;O.fillStyle="#101e22",O.fillRect($,mt,40,40),O.fillStyle=Y[(U*3+z)%5],O.fillRect($+4,mt+4,32,25),C($+9,mt+34,$+30,mt+34,"#899d94")}for(let U=0;U<2;U++){const z=540+U*220,$=750;for(const mt of[65,57,45])O.strokeStyle="#8df6e5",O.lineWidth=mt===57?5:2,O.beginPath(),O.arc(z,$,mt,-.9,4.9),O.stroke();O.fillStyle="#bdfff2",O.beginPath(),O.arc(z,$,12,0,Math.PI*2),O.fill(),C(z,$,z+34,$-24,"#bdfff2"),A(U?"OXYGEN":"VELOCITY",z-30,$+91,11)}for(let U=0;U<12;U++)O.fillStyle=Y[U%5],O.fillRect(20+U*45,900,31,16),A(U%3===0?"ARM":"ON",22+U*45,935,8);const Z=new Zm(P);Z.colorSpace=Xn,Z.anisotropy=2;const it=new rr({map:Z,color:"#d8fff5",side:yi}),j={value:0};it.onBeforeCompile=U=>{U.uniforms.screenTime=j,U.fragmentShader=`uniform float screenTime;
`+U.fragmentShader,U.fragmentShader=U.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
    vec2 radar=vMapUv-vec2(.3125,.819);float a=atan(radar.y,radar.x);float sweep=pow(max(0.,cos(a-screenTime*.34)),32.)*(1.-smoothstep(.04,.11,length(radar)));
    diffuseColor.rgb+=vec3(.03,.24,.21)*sweep*step(.64,vMapUv.y);diffuseColor.rgb*=.965+.035*sin(vMapUv.y*1024.*3.14159);
  `)};function k(U,z,$,mt,Nt,Xt,Zt=0,X=0,ut=0){const J=new Ia(mt,Nt),W=J.getAttribute("uv");for(let Et=0;Et<W.count;Et++)W.setXY(Et,(Xt[0]+W.getX(Et)*Xt[2])/1024,1-(Xt[1]+(1-W.getY(Et))*Xt[3])/1024);J.rotateX(Zt),J.rotateY(X),J.rotateZ(ut),J.translate(U,z,$),x(J,it)}y=!0,k(0,-.13,-2.727,1.07,.6,[0,0,640,365],-.1),k(-.73,-.39,-2.72,.32,.36,[455,663,170,190]),k(.73,-.39,-2.72,.32,.36,[675,663,170,190]),k(-.98,-.61,-2.265,.49,.32,[430,390,350,180],-.34,.18,.1),k(.98,-.61,-2.265,.49,.32,[0,390,400,220],-.34,-.18,-.1),k(0,-1.02,-2.39,.62,.3,[0,640,400,205],-.4),k(0,-.59,-2.71,1.46,.085,[0,890,560,65]);for(const U of[-1,1])k(U*1.14,-.86,-1.53,.5,.53,[0,640,400,205],-Math.PI/2+.18,0,U*.12),k(U*.65,-1.038,-1.67,.23,.09,[0,890,250,45],-Math.PI/2),k(U*1.14,-.77,-2.03,.54,.11,[0,890,560,65],-Math.PI/2+.18);for(const U of[-1,1])for(let z=0;z<3;z++)for(let $=0;$<4;$++)k(U*1.15+($-1.5)*.12,-.734-z*.035,-1.8+z*.18,.065,.08,[16+(z*3+$)%8*48,654+z*48,30,25],-Math.PI/2+.18);for(const U of D){const z=new Wi(.022,6,4);z.translate(U.x,U.y,U.z+.055),x(z,c)}y=!1;for(const[U,z]of g){for(const Nt of z){if(Nt.index){const Xt=Nt.toNonIndexed();Nt.copy(Xt),Xt.dispose()}Nt.deleteAttribute("uv1")}const $=G1(z);z.forEach(Nt=>Nt.dispose());const mt=new an($,U);U===V&&(mt.renderOrder=9),mt.castShadow=U===l||U===c||U===f,mt.receiveShadow=mt.castShadow,mt.name=U===V?"observation-glazing":U===l?"enclosure-shell":U===it?"instrument-displays":"cabin-details",t.add(mt)}return{group:t,configureEnvironment(U,z){b.reflection.value=U,b.hasReflection.value=1,b.strength.value=z?.15:.045},update(U,z,$,mt,Nt=0){t.visible=mt;const Xt=$?.5:1;i.value.copy(U),l.color.copy(d).multiplyScalar(z*Xt),c.color.copy(p).multiplyScalar(z*Xt),f.color.copy(m).multiplyScalar(z*Xt),j.value=Nt,v.color.set("#50d7ce").multiplyScalar(.7*z*Xt),it.color.set("#d8fff5").multiplyScalar((.8+z*.2)*($?.5:1))},dispose(){Z.dispose()}}}function MR(r){const t=new Oa;t.name="aether-exterior",r.add(t);const i=of(new mo({color:"#394956",metalness:.65,roughness:.38,side:yi,envMapIntensity:1.15}),.8),s=of(new mo({color:"#8b9da5",metalness:.88,roughness:.25,envMapIntensity:1.3}),2),l=of(new mo({color:"#101b27",metalness:.25,roughness:.7}),1.7),c=new rr({color:"#64d4d8"}),f=new rr({color:"#f08c81"}),d=new Map,p=(T,S)=>{const _=d.get(S)??[];_.push(T),d.set(S,_)},m=(T,S,_,w,D,b,V,H=0)=>{const P=new Mf(D,b,V,1,Math.min(D,b,V)*.16);P.rotateZ(H),P.translate(S,_,w),p(P,T)},v=new Wi(1,32,16);v.scale(3.3,1.05,8),v.translate(0,-3.2,4),p(v,i),m(i,0,-2.3,7,2.4,.52,8),m(l,0,-2.015,7.5,1.4,.04,6.8);for(const T of[-1,1]){const S=[[3,-.8],[5.7,.2],[13.2,5.1],[12.2,7.4],[5.5,5.1],[3,6.2]].map(([V,H])=>new It(T*V,H));T<0&&S.reverse();const _=new mf(S),w=new Zl(_,{depth:.2,bevelEnabled:!0,bevelSize:.09,bevelThickness:.07,bevelSegments:3,steps:1});w.rotateX(Math.PI/2),w.translate(0,-2.15,0),p(w,i);for(let V=0;V<6;V++)m(s,T*(4.5+V*1.15),-2.035,1.2+V*.65,.06,.025,2),m(l,T*(4.5+V*1.15),-2.02,2.25+V*.65,.72,.025,.65);m(c,T*8.5,-2.015,4.35,4.5,.025,.055),m(T<0?f:c,T*12.8,-2,5.5,.18,.08,.6),m(s,T*2.5,-2.5,7.7,1.3,.65,5.7),m(l,T*2.5,-2.45,8.1,.9,.5,5.5),m(c,T*2.5,-2.43,10.91,.7,.25,.04),m(c,T*.9,-2.02,8,.035,.025,5.3);const D=new mf([new It(6,-2.1),new It(10.6,-.15),new It(12.8,-2.1)]),b=new Zl(D,{depth:.15,bevelEnabled:!0,bevelSize:.035,bevelThickness:.035,bevelSegments:2});b.rotateY(-Math.PI/2),b.translate(T*3.6,0,0),p(b,i)}const g=document.createElement("canvas");g.width=1024,g.height=256;const y=g.getContext("2d");y.fillStyle="#d8e1df",y.font="bold 106px monospace",y.fillText("AETHER / 01",18,111),y.font="20px monospace",y.fillText("DEEP SPACE EXPLORER     //     KEEP CLEAR",22,157),y.fillStyle="#d7a85b";for(let T=0;T<23;T++)y.save(),y.translate(T*48,212),y.transform(1,0,-.5,1,0,0),y.fillRect(0,0,21,23),y.restore();const x=new Zm(g);x.colorSpace=Xn,x.anisotropy=4;const E=new mo({map:x,transparent:!0,alphaTest:.2,roughness:.6,metalness:.2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1});for(const T of[-1,1]){const S=new Ia(2.35,.59);S.rotateZ(T*Math.PI/2),S.rotateX(-Math.PI/2),S.translate(T*7.2,-1.99,3.9),p(S,E);for(let D=0;D<6;D++){const b=new Wi(.028,6,4);b.translate(T*(4.5+D*1.15),-1.985,2.25+D*.65),p(b,s),m(l,T*2.5,-2.02,7.1+D*.23,.7,.025,.07)}const _=new xf(.48,.58,2.4,18);_.rotateX(Math.PI/2),_.translate(T*2.5,-2.4,10.1),p(_,s);const w=new e0(.48,.07,6,20);w.translate(T*2.5,-2.4,11.3),p(w,l)}for(const[T,S]of d){const _=S.map(b=>b.index?b.toNonIndexed():b),w=G1(_);for(const b of new Set([...S,..._]))b.dispose();const D=new an(w,T);D.castShadow=T!==c&&T!==f&&T!==E,D.receiveShadow=T!==c&&T!==f,D.name=T===i?"wing-and-hull-armor":"exterior-details",t.add(D)}return{group:t,update(T,S){t.visible=T,c.color.set("#64d4d8").multiplyScalar(.48+Math.min(S/1200,1)*.2)},dispose(){t.removeFromParent(),t.children.forEach(T=>{T.geometry.dispose()}),d.forEach((T,S)=>S.dispose()),x.dispose()}}}function ER(r,t,i){const s=document.createElement("canvas");s.width=512,s.height=256;const l=s.getContext("2d");l.scale(.5,.5);const c=l.createLinearGradient(0,0,0,512);c.addColorStop(0,"#142034"),c.addColorStop(.4,"#33405b"),c.addColorStop(.62,"#151e32"),c.addColorStop(1,"#03060b"),l.fillStyle=c,l.fillRect(0,0,1024,512);const f=(g,y,x,E)=>{const T=l.createRadialGradient(g,y,0,g,y,x);T.addColorStop(0,E),T.addColorStop(.18,E+"99"),T.addColorStop(1,E+"00"),l.fillStyle=T,l.fillRect(g-x,y-x,x*2,x*2)};f(240,185,180,"#98b8e5"),f(755,200,120,"#e9ba87"),f(480,260,160,"#547e9c"),l.fillStyle="#a9d6dc",l.globalAlpha=.38,l.fillRect(100,235,270,5),l.fillStyle="#e9b67f",l.fillRect(695,238,150,3),l.globalAlpha=1;const d=new Zm(s);d.mapping=lf,d.colorSpace=Xn;let p=null;if(r.extensions.has("EXT_color_buffer_float")){const g=new Rm(r);g.compileEquirectangularShader(),p=g.fromEquirectangular(d),g.dispose(),t.environment=p.texture}t.environmentIntensity=.75;const m=new Cm("#63d8dd",3.5,5,2);m.position.set(0,-.55,-1.7),i.add(m);const v=new Cm("#eab784",1.1,3.5,2);return v.position.set(-1.6,-1.3,-.4),i.add(v),r.shadowMap.type=Xx,{panorama:d,configure(g){r.shadowMap.enabled=g},update(g,y){m.visible=v.visible=g,m.intensity=y?1.4:3.5,v.intensity=y?.45:1.1},dispose(){t.environment=null,m.removeFromParent(),v.removeFromParent(),p==null||p.dispose(),d.dispose()}}}function TR(r){const t=new Si(1,1,{depthBuffer:!0});t.texture.colorSpace=sr;const i={background:{value:t.texture},center:{value:new F},radius:{value:$u},time:{value:0},steps:{value:80},veil:{value:0},resolution:{value:new It(1,1)},viewProjection:{value:new Oe},cameraRight:{value:new F(1,0,0)},cameraUp:{value:new F(0,1,0)}},s=new en({uniforms:i,side:Bn,depthWrite:!0,transparent:!0,blending:ua,vertexShader:"varying vec3 worldPoint;void main(){vec4 p=modelMatrix*vec4(position,1.);worldPoint=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}",fragmentShader:`precision highp float;
 varying vec3 worldPoint;uniform sampler2D background;uniform vec3 center,cameraRight,cameraUp;uniform float radius,time,veil;uniform int steps;uniform vec2 resolution;uniform mat4 viewProjection;
 float hash(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);}
 float noise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z);}
 vec3 disk(vec3 p,vec3 dir){
  float r=length(p.xz),angle=atan(p.z,p.x),rotation=time*.18/pow(max(r,1.),1.35);
  vec3 q=vec3(cos(angle-rotation),sin(angle-rotation),r*.9);
  float filaments=noise(q*vec3(8.,8.,5.))*.55+noise(q*vec3(19.,19.,11.))*.3+noise(q*vec3(43.,43.,23.))*.15;
  float rings=.85+.15*sin(r*29.+filaments*19.-time*.23);
  float profile=smoothstep(1.55,2.15,r)*(1.-smoothstep(4.4,6.5,r))*pow(2./max(r,1.),1.4);
  vec3 tangent=normalize(vec3(-p.z,0.,p.x));float doppler=clamp(1.+dot(tangent,-dir)*.62,.42,1.8);
  vec3 color=mix(vec3(1.9,.37,.065),vec3(3.8,2.55,1.15),(1.-smoothstep(1.7,6.2,r)));
  return color*profile*(.25+filaments*1.4)*rings*pow(doppler,2.4);
 }
 void main(){
  vec3 origin=(cameraPosition-center)/radius,ray=normalize(worldPoint-cameraPosition),original=ray;
  float b=dot(origin,ray),disc=b*b-dot(origin,origin)+64.;if(disc<0.)discard;
  float entry=max(0.,-b-sqrt(disc));vec4 surfaceDepth=viewProjection*vec4(cameraPosition+original*max(200.,entry*radius),1.);gl_FragDepth=clamp(surfaceDepth.z/surfaceDepth.w*.5+.5,0.,1.);vec3 p=origin+ray*entry;vec3 emission=vec3(0.),dust=vec3(0.);float transmittance=1.,captured=0.;
  // Fixed disk tilt gives a real three-dimensional plane from every approach.
  mat3 tilt=mat3(.98877,0.,-.14944,.01492,.995,.09871,.14869,-.09983,.98383);
  for(int i=0;i<112;i++){
   if(i>=steps)break;float r=length(p);if(r<1.015){captured=1.;break;}if(r>8.1&&i>1)break;
   float stepSize=clamp((r-1.)*.17,.035,.44);vec3 old=p;
   vec3 bend=-(p-ray*dot(p,ray));ray=normalize(ray+bend*(1.48/(r*r*r))*stepSize);p+=ray*stepSize;
   vec3 a=tilt*old,c=tilt*p;float radial=length(c.xz);
   if(a.y*c.y<=0.&&radial>1.55&&radial<6.5){float f=abs(a.y)/(abs(a.y)+abs(c.y)+.0001);vec3 hit=mix(a,c,f);float optical=clamp(.63/max(.23,abs((tilt*ray).y)),0.,.98);emission+=disk(hit,tilt*ray)*optical*transmittance;transmittance*=1.-optical;}
   // Thin dusty emission above the equatorial sheet.
   if(radial>1.7&&radial<6.3){float haze=exp(-abs(c.y)*32./max(radial,1.))*stepSize*.065;dust+=disk(c,tilt*ray)*haze*transmittance;}
  }
  vec3 exitPoint=center+(p+ray*180.)*radius;vec4 projected=viewProjection*vec4(exitPoint,1.);vec2 uv=projected.xy/max(.001,projected.w)*.5+.5;
  vec3 sky=texture2D(background,clamp(uv,.002,.998)).rgb;
  float deviation=length(ray-original);float photon=exp(-pow((length(cross(origin,original))-3.3)/.065,2.));
  vec3 color=sky*transmittance*(1.-captured)+emission+dust*(1.-captured)+vec3(1.,.55,.2)*photon*.22*(1.-captured);
  // Preserve HDR emission until the final display transform.
  color=mix(color,color/(1.+color*.36),clamp(length(emission)*.2,0.,1.));float influence=1.-smoothstep(5.7,7.9,length(cross(origin,original)));vec3 undistorted=texture2D(background,gl_FragCoord.xy/resolution).rgb;color=mix(undistorted,color,influence);color=mix(color,vec3(.18,.23,.3),veil*.985);
  gl_FragColor=vec4(color,1.);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
 }`}),l=new an(new Wi(1,40,24),s);l.name="supermassive-black-hole",l.scale.setScalar($u*8),l.frustumCulled=!1,l.visible=!1,l.renderOrder=6,r.add(l);const c=new Cm("#ffb365",0,9e3,1);c.name="accretion-light",r.add(c);let f=.5,d=!1,p=!1;const m=new F,v=new F,g=new yf,y=new Oe,x=new xs;return{mesh:l,target:t,configure(E,T,S){f=E==="High"?.8:E==="Medium"?.55:.35,i.steps.value=E==="High"?112:E==="Medium"?80:52,t.setSize(Math.max(1,Math.round(T*f)),Math.max(1,Math.round(S*f))),i.resolution.value.set(T,S)},update(E,T,S,_){d=!!E,E&&m.copy(E).sub(T),l.position.copy(m),i.center.value.copy(m),i.time.value=S,i.veil.value=_,l.visible=d&&m.length()<3e4,c.position.copy(m).normalize().multiplyScalar(22),c.intensity=d?Math.min(90,4e8/Math.max(1,m.lengthSq())):0},capture(E,T,S){if(!l.visible||p||(T.updateMatrixWorld(),y.multiplyMatrices(T.projectionMatrix,T.matrixWorldInverse),g.setFromProjectionMatrix(y),x.set(m,$u*8),!g.intersectsSphere(x))||(v.setFromMatrixPosition(T.matrixWorld).sub(m),v.length()<$u*.99))return;const _=E.extensions.has("EXT_color_buffer_float")&&i.steps.value>=80?Oi:Pi;t.texture.type!==_&&(t.dispose(),t.texture.type=_),p=!0;const w=E.getRenderTarget(),D=S==null?void 0:S.visible;l.visible=!1,S&&(S.visible=!1);try{E.setRenderTarget(t),E.clear(),E.render(r,T),i.viewProjection.value.copy(y)}finally{E.setRenderTarget(w),l.visible=!0,S&&(S.visible=D),p=!1}},dispose(){l.removeFromParent(),c.removeFromParent(),l.geometry.dispose(),s.dispose(),t.dispose()}}}function bR(r,t,i,s,l={}){var Rt;const c=new kC({antialias:!0,alpha:!1,powerPreference:"high-performance"});c.setClearColor("#040710"),c.outputColorSpace=Xn,c.toneMapping=Im,c.toneMappingExposure=Bx.Balanced.exposure,r.appendChild(c.domElement);const f=new v1,d=new si(68,1,.1,5e4),p=new Oa;p.position.z=5,p.add(d),f.add(p);const m=l.jump??new B1;let v=m.phase;const g={...t()},y=()=>(Object.assign(g,t()),g.blocked=g.blocked||m.busy||!!g.hazardHold,g),x=ER(c,f,p),E=xR(f),T=TR(f);let S=Ql;const _=new F;(Rt=l.onPlanner)==null||Rt.call(l,()=>E.jumpTarget(i.position,i.shipQuaternion));let w=null,D=-1;const b=new ri(0,0,0,"YXZ"),V=sR(p),H=new le,P=new le("#bad9f3"),O=SR(p),C=MR(p),A=tR(c.domElement,s,i,y),G=new N1,Y=new nR;let Z=t().quality,it=t().performanceMode,j=t().adaptive,k=0,U=0,z=0,$=0,mt=0,Nt="",Xt=!1,Zt=null,X=null;const ut=()=>{Zt&&(Zt.passes.forEach(dt=>dt.dispose()),Zt.dispose(),Zt=null,X=null)},J=()=>{const dt=t(),bt=dt.performanceMode?"Low":dt.quality,vt=Om[bt],I=Math.max(1,r.clientWidth),Mt=Math.max(1,r.clientHeight),yt=Math.min(window.devicePixelRatio||1,vt.pixelRatio)*(dt.performanceMode?.85:dt.adaptive?Y.scale:1);c.setPixelRatio(yt),c.setSize(I,Mt),d.aspect=I/Mt,d.updateProjectionMatrix();const ct=!dt.performanceMode&&vt.bloom&&dt.bloom>0&&c.extensions.has("EXT_color_buffer_float");ct&&!Zt?(Zt=new ZC(c),Zt.addPass(new QC(f,d)),X=new To(new It(I,Mt),.2,.55,1.1),Zt.addPass(X),Zt.addPass(new JC)):ct||ut(),Zt&&(Zt.setPixelRatio(yt),Zt.setSize(I,Mt)),E.configure(bt,yt,I,Mt,dt.bloom,c.extensions.has("EXT_color_buffer_float"),dt.performanceMode),V.configure(bt,dt.reduced),T.configure(bt,Math.round(I*yt),Math.round(Mt*yt));const ht=bt==="High"&&!dt.performanceMode;x.configure(ht),O.configureEnvironment(x.panorama,ht),Nt=`${dt.quality}/${dt.bloom}/${dt.performanceMode}/${dt.adaptive}/${dt.reduced}`},W=()=>{var dt;G.getDelta(),i.reset(!0),(dt=l.onAudio)==null||dt.call(l,0,0,!0)};document.addEventListener("visibilitychange",W),window.addEventListener("resize",J),J();const Et=()=>{var Ot,re,se,B,R,ot;if(Xt)return;z=requestAnimationFrame(Et);const dt=G.getDelta(),bt=dt>.25?0:dt,vt=t();if(document.hidden){i.reset(!0);return}const I=Math.min(dt,.25);m.busy&&m.seed!==D&&(D=m.seed,w=((Ot=l.getJumpTarget)==null?void 0:Ot.call(l))??E.jumpTarget(i.position,i.shipQuaternion),m.destination=w.region),m.advance(dt,vt.paused||vt.hazardHold),m.phase!==v&&(v=m.phase,(re=l.onPhase)==null||re.call(l,m.phase)),m.justCommitted&&(w&&(E.recordJump(w.key),w.blackHole&&(i.speed=0),i.position.copy(w.position),i.yaw=Math.atan2(-w.direction.x,-w.direction.z),i.pitch=Math.asin(w.direction.y),i.reset(!0),i.shipQuaternion.setFromEuler(b.set(i.pitch,i.yaw,0,"YXZ")),k=0),E.reseed(m.seed,m.destination,i.position,i.shipQuaternion),(se=l.onDestination)==null||se.call(l,m.destination,m.seed));const Mt=m.busy&&m.committed?m.destination:vt.region,yt=m.energy*(vt.reduced?.16:vt.mode==="Meditation"?.55:1);A.sync(),y(),g.paused=vt.paused||!vt.started||!!vt.hazardHold,m.busy&&(g.mode="Autopilot",g.motion=0,g.started=!0,g.speed=m.committed&&(w!=null&&w.blackHole)?0:vt.speed+Math.pow(m.energy,2)*(vt.reduced?100:360)),_.copy(i.position),eR(i,dt,g);const ct=E.singularityAt(i.position);if(ct&&!m.busy&&vt.started&&!g.paused){const _t=vt.transitAssist?Lm:Lm*1.65;if(!vt.transitAssist&&ct.distance<3100){const Ut=Math.min(80,2e8/Math.max(1,ct.distance*ct.distance));i.position.addScaledVector(new F().subVectors(ct.position,i.position).normalize(),Ut*bt)}i.position.fromArray(fR(_.toArray(),i.position.toArray(),ct.position.toArray(),_t))}const ht=ct&&!m.busy&&vt.started?uR(ct.id,ct.position.distanceTo(i.position),S):Ql;(ht.id!==S.id||ht.level!==S.level||$>=U&&(Math.abs(ht.distance-S.distance)>20||Math.abs(ht.intensity-S.intensity)>.015))&&(S=ht,U=$+.12,(B=l.onSingularity)==null||B.call(l,S)),T.update((ct==null?void 0:ct.position)??null,i.position,$,m.veil),(R=l.onAudio)==null||R.call(l,yt,m.charge,vt.paused),(vt.quality!==Z||vt.performanceMode!==it||vt.adaptive!==j)&&(Y.reset(),Z=vt.quality,it=vt.performanceMode,j=vt.adaptive);const At=Y.observe(dt,vt.adaptive&&!vt.performanceMode,vt.paused);(Nt!==`${vt.quality}/${vt.bloom}/${vt.performanceMode}/${vt.adaptive}/${vt.reduced}`||At)&&J(),vt.paused||($+=bt);const Dt=Bx[vt.lighting];c.toneMappingExposure=Sn.damp(c.toneMappingExposure,Dt.exposure*Bl[Mt].exposure,.8,I),E.setJump(yt,m.veil),E.update(I,$,Mt,i.position,Dt.nebula),$>=k&&((ot=l.onNavigation)==null||ot.call(l,E.navigation(i.position,i.shipQuaternion)),k=$+.5),p.quaternion.copy(i.shipQuaternion),d.quaternion.copy(i.lookQuaternion),H.copy(E.tint).lerp(P,m.charge*.3),C.update(vt.cockpit,i.speed),O.update(H,Dt.cabin*(1+m.charge*.12),vt.mode==="Meditation",vt.cockpit,$),x.update(vt.cockpit,vt.mode==="Meditation"),V.update(vt.paused?0:Math.min(dt,.1),yt,E.tint),X&&(X.strength=vt.bloom*(vt.mode==="Meditation"?.45:.8+yt*.2)),mt+=dt,!(vt.paused&&mt<1/15)&&(mt=0,E.renderAtmosphere(c,d),T.capture(c,d,p),Zt?Zt.render():c.render(f,d))};return Et(),()=>{var vt;Xt=!0,cancelAnimationFrame(z),A.dispose(),window.removeEventListener("resize",J),document.removeEventListener("visibilitychange",W),(vt=l.onAudio)==null||vt.call(l,0,0,!0),ut(),O.dispose(),C.dispose(),T.dispose(),E.dispose(),x.dispose();const dt=new Set,bt=new Set;f.traverse(I=>{if(I instanceof an||I instanceof jm||I instanceof _1){dt.add(I.geometry);for(const Mt of Array.isArray(I.material)?I.material:[I.material])bt.add(Mt)}}),dt.forEach(I=>I.dispose()),bt.forEach(I=>I.dispose()),c.dispose(),c.domElement.remove()}}const Kl=[{id:"meditation",name:"Meditation Impromptu 01",mood:"Gentle piano · meditation",file:"meditation-impromptu-01.mp3",artist:"Kevin MacLeod",isrc:"USUAN1100163"},{id:"floating",name:"Floating Cities",mood:"Dreamlike ambient · a quiet future",file:"floating-cities.mp3",artist:"Kevin MacLeod",isrc:"USUAN1600018"},{id:"jellyfish",name:"Jellyfish in Space",mood:"Soft space music · a flowing journey",file:"jellyfish-in-space.mp3",artist:"Kevin MacLeod",isrc:"USUAN1500030"},{id:"soaring",name:"Soaring",mood:"Atmospheric ambient · calm and spacious",file:"soaring.mp3",artist:"Kevin MacLeod",isrc:"USUAN1600040"}],r0={engineEnabled:!0,spaceEnabled:!0,musicEnabled:!0,engine:.35,space:.3,music:.5,track:"meditation"},Hx="cosmic-drift-audio-v1";function AR(r){const t={...r0};try{const i=JSON.parse(r??"null");if(!i||typeof i!="object")return t;const s=i;for(const f of["engineEnabled","spaceEnabled","musicEnabled"])typeof s[f]=="boolean"&&(t[f]=s[f]);for(const f of["engine","space","music"])typeof s[f]=="number"&&Number.isFinite(s[f])&&(t[f]=Math.max(0,Math.min(1,s[f])));const l={starlight:"meditation",nebula:"floating",orbit:"jellyfish",lunar:"soaring"},c=typeof s.track=="string"?l[s.track]??s.track:"";Kl.some(f=>f.id===c)&&(t.track=c)}catch{}return t}class wR{constructor(){oe(this,"ctx",null);oe(this,"master");oe(this,"engine");oe(this,"space");oe(this,"music");oe(this,"onMusicState");oe(this,"musicState",{state:"idle",track:null});oe(this,"jumpGain");oe(this,"jumpTone");oe(this,"jumpFilter");oe(this,"anomaly",{briefing:!1,level:"clear",intensity:0,assist:!1});oe(this,"anomalyGain");oe(this,"alarmGain");oe(this,"anomalyFilter");oe(this,"lastDrive",-1);oe(this,"lastCharge",-1);oe(this,"settings",{...r0});oe(this,"enabled",!1);oe(this,"paused",!1);oe(this,"slots",[]);oe(this,"current");oe(this,"retiring");oe(this,"fadeTimer");oe(this,"pauseTimer");oe(this,"visibility",()=>this.apply())}get currentRecording(){var t;return((t=this.current)==null?void 0:t.element)??null}get musicActive(){return this.enabled&&!this.paused&&!document.hidden&&!this.anomaly.briefing&&this.anomaly.level!=="critical"&&!(this.anomaly.assist&&this.anomaly.level!=="clear")&&this.settings.musicEnabled&&this.settings.music>0}report(t,i){var l,c,f;const s=((c=(l=this.current)==null?void 0:l.track)==null?void 0:c.id)??null;this.musicState.state===t&&this.musicState.track===s&&this.musicState.message===i||(this.musicState={state:t,track:s,message:i},(f=this.onMusicState)==null||f.call(this,this.musicState))}async start(t){if(t&&(this.settings={...this.settings,track:t,musicEnabled:!0}),!this.ctx){const i=this.ctx=new AudioContext;this.master=i.createGain(),this.master.gain.value=0,this.master.connect(i.destination),this.engine=i.createGain(),this.space=i.createGain(),this.music=i.createGain();for(const y of[this.engine,this.space,this.music])y.gain.value=0,y.connect(this.master);for(const y of[38,57,76]){const x=i.createOscillator(),E=i.createGain();x.type="sine",x.frequency.value=y,E.gain.value=.09,x.connect(E).connect(this.engine),x.start()}const s=i.createBuffer(2,i.sampleRate*4,i.sampleRate);let l=1237;for(let y=0;y<2;y++){const x=s.getChannelData(y);let E=0;for(let T=0;T<x.length;T++){l=l*16807%2147483647,E=(E+((l-1)/2147483646-.5)*.035)/1.018;const S=Math.min(1,T/(i.sampleRate*.08),(x.length-1-T)/(i.sampleRate*.08));x[T]=E*S}}const c=i.createBufferSource(),f=i.createBiquadFilter();c.buffer=s,c.loop=!0,f.type="lowpass",f.frequency.value=650,c.connect(f).connect(this.space),c.start();for(const y of[82.41,123.47]){const x=i.createOscillator(),E=i.createGain();x.frequency.value=y,E.gain.value=.012,x.connect(E).connect(this.space),x.start()}this.jumpGain=i.createGain(),this.jumpGain.gain.value=0,this.jumpGain.connect(this.engine),this.jumpTone=i.createOscillator(),this.jumpTone.frequency.value=42,this.jumpTone.connect(this.jumpGain),this.jumpTone.start();const d=i.createBufferSource();d.buffer=s,d.loop=!0,this.jumpFilter=i.createBiquadFilter(),this.jumpFilter.type="lowpass",this.jumpFilter.frequency.value=250,d.connect(this.jumpFilter).connect(this.jumpGain),d.start(),this.anomalyGain=i.createGain(),this.anomalyGain.gain.value=0,this.anomalyGain.connect(this.master);const p=i.createDynamicsCompressor();p.threshold.value=-22,p.ratio.value=5,p.connect(this.anomalyGain);for(const[y,x]of[[29,.16],[43.7,.075],[58.3,.045],[87.1,.018]]){const E=i.createOscillator(),T=i.createGain();E.frequency.value=y,E.detune.value=y%5,T.gain.value=x,E.connect(T).connect(p),E.start();const S=i.createOscillator(),_=i.createGain();S.frequency.value=.07+y*7e-4,_.gain.value=.9,S.connect(_).connect(E.frequency),S.start()}const m=i.createBufferSource();m.buffer=s,m.loop=!0,m.playbackRate.value=.57,this.anomalyFilter=i.createBiquadFilter(),this.anomalyFilter.type="bandpass",this.anomalyFilter.frequency.value=180,this.anomalyFilter.Q.value=3.5;const v=i.createGain();v.gain.value=.8,m.connect(this.anomalyFilter).connect(v).connect(p),m.start(),this.alarmGain=i.createGain(),this.alarmGain.gain.value=0,this.alarmGain.connect(this.master);const g=i.createOscillator();g.type="sine",g.frequency.value=620,g.connect(this.alarmGain),g.start(),this.slots=Array.from({length:2},()=>this.makeSlot(i)),document.addEventListener("visibilitychange",this.visibility)}this.apply(),this.current&&this.settings.musicEnabled&&this.settings.music>0&&this.play(this.current),await this.ctx.resume(),this.apply()}makeSlot(t){const i=new Audio;i.loop=!0,i.preload="none";const s=t.createMediaElementSource(i),l=t.createGain();l.gain.value=0,s.connect(l).connect(this.music);const c={element:i,source:s,gain:l,track:null,request:0,pending:!1};i.onwaiting=()=>{this.current===c&&this.musicActive&&this.report("loading")},i.onplaying=()=>{this.current===c&&this.musicActive&&this.report("playing")},i.onerror=()=>{this.current===c&&c.track&&this.report("error","This recording could not load. Select it again to retry.")};const f=new Uint8Array(76),d=new DataView(f.buffer),p=(m,v)=>{for(let g=0;g<v.length;g++)f[m+g]=v.charCodeAt(g)};return p(0,"RIFF"),d.setUint32(4,68,!0),p(8,"WAVEfmt "),d.setUint32(16,16,!0),d.setUint16(20,1,!0),d.setUint16(22,1,!0),d.setUint32(24,8e3,!0),d.setUint32(28,16e3,!0),d.setUint16(32,2,!0),d.setUint16(34,16,!0),p(36,"data"),d.setUint32(40,32,!0),i.src="data:audio/wav;base64,"+btoa(String.fromCharCode(...f)),i.play().then(()=>{c.track||(i.pause(),i.removeAttribute("src"),i.load())}).catch(()=>{}),c}set(t,i,s){this.enabled=t,this.settings={...i},this.paused=s,this.apply()}apply(){var c,f,d;const t=this.ctx;if(!t||t.state==="closed")return;const i=t.currentTime,s=this.enabled&&!this.paused&&!document.hidden;this.master.gain.setTargetAtTime(s?.65:0,i,.18);for(const[p,m,v]of[[this.engine,this.settings.engine,this.settings.engineEnabled],[this.space,this.settings.space,this.settings.spaceEnabled],[this.music,this.settings.music,this.settings.musicEnabled]])p.gain.setTargetAtTime(v&&!this.anomaly.briefing?m*(p===this.music?this.anomaly.level==="critical"||this.anomaly.assist&&this.anomaly.level!=="clear"?0:this.anomaly.level==="caution"?.4:1:1):0,i,.16);(c=this.anomalyGain)==null||c.gain.setTargetAtTime(s&&!this.anomaly.briefing&&this.anomaly.level!=="clear"?.12+this.anomaly.intensity*.7:0,i,.65),(f=this.anomalyFilter)==null||f.frequency.setTargetAtTime(100+this.anomaly.intensity*240,i,.7);const l=Kl.find(p=>p.id===this.settings.track)??Kl[0];(!this.current||((d=this.current.track)==null?void 0:d.id)!==l.id)&&this.changeTrack(l),this.musicActive?(clearTimeout(this.pauseTimer),this.pauseTimer=void 0,this.current.element.paused&&!this.current.pending?this.play(this.current):!this.current.element.paused&&this.current.element.readyState>=3?this.report("playing"):this.report("loading")):(this.report("paused"),this.pauseTimer||(this.pauseTimer=setTimeout(()=>{var p;this.pauseTimer=void 0,this.musicActive||((p=this.current)==null||p.element.pause(),this.current&&(this.current.pending=!1))},1100)))}changeTrack(t){const i=this.ctx,s=i.currentTime;clearTimeout(this.fadeTimer),this.retiring&&this.release(this.retiring);const l=this.current,c=this.slots.find(f=>f!==l);this.release(c),c.track=t,c.element.src=`/cosmic-drift/audio/${t.file}`,c.gain.gain.setValueAtTime(0,s),c.gain.gain.setTargetAtTime(1,s,.3),this.current=c,this.report("loading"),l&&(l.gain.gain.cancelScheduledValues(s),l.gain.gain.setTargetAtTime(0,s,.2),this.retiring=l,this.fadeTimer=setTimeout(()=>{this.release(l),this.retiring===l&&(this.retiring=void 0)},1200))}play(t){if(t.pending||!t.track)return;t.element.error&&t.element.load();const i=++t.request;t.pending=!0,this.current===t&&this.report("loading"),t.element.play().then(()=>{t.request===i&&(t.pending=!1,this.current===t&&this.musicActive&&this.report("playing"))}).catch(s=>{t.request===i&&(t.pending=!1,!(s instanceof DOMException&&s.name==="AbortError")&&this.current===t&&this.report("error",s instanceof DOMException&&s.name==="NotAllowedError"?"Tap the selected track again to allow playback.":"This recording could not play. Select it again to retry."))})}release(t){t.request++,t.pending=!1,t.track=null,t.element.pause(),t.element.removeAttribute("src"),t.element.load(),this.ctx&&this.ctx.state!=="closed"&&(t.gain.gain.cancelScheduledValues(this.ctx.currentTime),t.gain.gain.value=0)}hazard(t,i,s,l=!1){const c=t!==this.anomaly.briefing||i!==this.anomaly.level;if(this.anomaly={briefing:t,level:i,intensity:Math.max(0,Math.min(1,s)),assist:l},this.apply(),c&&this.ctx&&this.alarmGain){const f=this.ctx.currentTime,d=this.alarmGain.gain;if(d.cancelScheduledValues(f),d.setTargetAtTime(0,f,.02),(t||i!=="clear")&&this.enabled&&!this.paused&&!document.hidden){const p=t||i==="critical"?3:2;for(let m=0;m<p;m++){const v=f+.05+m*.32;d.setValueAtTime(0,v),d.linearRampToValueAtTime(.045,v+.018),d.setValueAtTime(.045,v+.12),d.linearRampToValueAtTime(0,v+.21)}}}}jump(t,i,s){if(!this.ctx||this.ctx.state==="closed"||!this.jumpGain||(s&&(t=i=0),Math.abs(t-this.lastDrive)<.01&&Math.abs(i-this.lastCharge)<.01&&!(t===0&&this.lastDrive!==0)))return;this.lastDrive=t,this.lastCharge=i;const l=this.ctx.currentTime;this.jumpGain.gain.cancelScheduledValues(l),this.jumpGain.gain.setTargetAtTime(.018*i+.055*t,l,.15),this.jumpTone.frequency.cancelScheduledValues(l),this.jumpTone.frequency.setTargetAtTime(42+i*12+t*145,l,.25),this.jumpFilter.frequency.cancelScheduledValues(l),this.jumpFilter.frequency.setTargetAtTime(250+t*1100,l,.25)}dispose(){var t;clearTimeout(this.fadeTimer),clearTimeout(this.pauseTimer),document.removeEventListener("visibilitychange",this.visibility);for(const i of this.slots)i.element.onwaiting=i.element.onplaying=i.element.onerror=null,this.release(i),i.source.disconnect(),i.gain.disconnect();this.current=this.retiring=void 0,this.slots=[],this.onMusicState=void 0,(t=this.ctx)==null||t.close().catch(()=>{}),this.ctx=null}}function CR({sound:r,paused:t,playback:i,settings:s,onToggle:l,onChange:c,onTrack:f}){const d=i.state==="error"?i.message:r?t?"Audio paused · resume the journey to listen":s.musicEnabled?s.music<=0?"Music volume is zero · raise it to listen":i.state==="playing"?"Playing your selection · recorded music":i.state==="paused"?"Music paused · select the track to continue":"Loading recording…":"Music is off · engine and space follow your settings":"Audio is off · choose a track or enable sound";return gt.jsxs(gt.Fragment,{children:[gt.jsx("p",{children:"Your own mix of engine, space and music."}),gt.jsxs("button",{className:"sound-toggle",onClick:l,children:[r?"Mute all audio":"Enable sound",r?gt.jsx(Vx,{size:17}):gt.jsx(YE,{size:17})]}),gt.jsx("div",{className:"audio-channels",children:[{toggle:"engineEnabled",volume:"engine",name:"Engine sound",label:"Engine volume",hint:"Engine hum and Light Jump"},{toggle:"spaceEnabled",volume:"space",name:"Space ambience",label:"Space volume",hint:"A soft, atmospheric soundscape"},{toggle:"musicEnabled",volume:"music",name:"Music",label:"Music volume",hint:"Your selected relaxation track"}].map(p=>gt.jsxs("div",{className:"audio-channel",children:[gt.jsxs("label",{className:"check",children:[gt.jsx("input",{type:"checkbox",checked:s[p.toggle],onChange:m=>c({[p.toggle]:m.target.checked})}),gt.jsxs("span",{children:[p.name,gt.jsx("small",{children:p.hint})]})]}),gt.jsxs("label",{className:"audio-level",children:["Volume ",gt.jsxs("output",{children:[Math.round(s[p.volume]*100),"%"]}),gt.jsx("input",{"aria-label":p.label,type:"range",min:"0",max:"1",step:".01",disabled:!s[p.toggle],value:s[p.volume],onChange:m=>c({[p.volume]:+m.target.value})})]})]},p.volume))}),gt.jsxs("fieldset",{className:"music-library",children:[gt.jsx("legend",{children:"Choose your music"}),Kl.map((p,m)=>gt.jsxs("label",{className:`music-option ${s.track===p.id?"selected":""}`,children:[gt.jsx("input",{onClick:()=>{s.track===p.id&&f(p.id)},type:"radio",name:"music-track","aria-label":p.name,checked:s.track===p.id,onChange:()=>f(p.id)}),gt.jsx("span",{className:`music-art music-art-${m}`,"aria-hidden":"true",children:["✦","◌","◎","☾"][m]}),gt.jsxs("span",{className:"music-description",children:[p.name,gt.jsx("small",{children:p.mood}),gt.jsxs("small",{children:[p.artist," · CC BY 3.0"]})]})]},p.id))]}),gt.jsx("small",{className:"audio-note","data-playback-state":i.state,"aria-live":"polite",children:d}),gt.jsx("small",{className:"audio-license",children:"Recorded music by Kevin MacLeod · free with attribution"}),gt.jsxs("details",{className:"music-credits",children:[gt.jsx("summary",{children:"Music credits & licenses"}),gt.jsxs("p",{children:["All four recordings are by ",gt.jsx("a",{href:"https://incompetech.com/",target:"_blank",rel:"noreferrer",children:"Kevin MacLeod"}),", used under ",gt.jsx("a",{href:"https://creativecommons.org/licenses/by/3.0/",target:"_blank",rel:"noreferrer",children:"CC BY 3.0"}),"."]}),Kl.map(p=>gt.jsxs("a",{href:`https://incompetech.com/music/royalty-free/index.html?isrc=${p.isrc}`,target:"_blank",rel:"noreferrer",children:[p.name," ↗"]},p.id)),gt.jsxs("p",{children:["Audio editions from FitVita: trimmed, faded, loudness-normalized and encoded to Opus; converted to MP3 for this site. ",gt.jsx("a",{href:"https://github.com/smyrna-pergamum/fitvita",target:"_blank",rel:"noreferrer",children:"Source & credits ↗"})]})]})]})}function RR({destination:r,onConfirm:t,onCancel:i}){const s=he.useRef(null);return he.useEffect(()=>{var c;const l=document.activeElement;return(c=s.current)==null||c.focus(),()=>l==null?void 0:l.focus()},[]),gt.jsx("div",{className:"hazard-backdrop",onKeyDown:l=>{var c;if(l.key==="Escape"&&(l.preventDefault(),l.stopPropagation(),i()),l.key==="Tab"){l.preventDefault();const f=Array.from(l.currentTarget.querySelectorAll("button"));(c=f[(f.indexOf(document.activeElement)+(l.shiftKey?-1:1)+f.length)%f.length])==null||c.focus()}},children:gt.jsxs("section",{className:"jump-briefing",role:"alertdialog","aria-modal":"true","aria-labelledby":"briefing-title","aria-describedby":"briefing-description",children:[gt.jsx("div",{className:"briefing-symbol",children:gt.jsx(GE,{size:42,strokeWidth:1})}),gt.jsx("small",{children:"DEEP SILENCE · NAVIGATION ADVISORY"}),gt.jsxs("h1",{id:"briefing-title",children:["Beyond this jump,",gt.jsx("br",{}),"a supermassive black hole."]}),gt.jsxs("p",{id:"briefing-description",children:["Your course enters ",r,", inside the Deep Silence nebula. An active singularity lies within this region. Approach with care."]}),gt.jsxs("div",{className:"briefing-data",children:[gt.jsxs("span",{children:["CLASS ",gt.jsx("b",{children:"SUPERMASSIVE"})]}),gt.jsxs("span",{children:["FLIGHT ",gt.jsx("b",{children:"MANUAL CONTROL"})]})]}),gt.jsxs("button",{ref:s,className:"briefing-confirm",onClick:t,children:["I understand. Continue jump ",gt.jsx("span",{children:"↗"})]}),gt.jsx("button",{className:"briefing-cancel",onClick:i,children:"Cancel jump"})]})})}function DR({reading:r,assist:t,onActivate:i}){return r.level==="clear"?null:gt.jsxs("section",{className:`singularity-warning ${r.level} ${t?"assisted":""}`,role:"region","aria-label":"Singularity proximity","data-level":r.level,children:[gt.jsxs("div",{className:"hazard-heading",children:[t?gt.jsx(Ey,{size:16}):gt.jsx(qE,{size:16}),gt.jsx("span",{children:t?"TRANSIT CONTROL ACTIVE":r.level==="critical"?"EXTREME GRAVITATIONAL FIELD":"GRAVITATIONAL ANOMALY"})]}),gt.jsx("p",{role:"status","aria-live":"polite",children:r.level==="critical"?"Approaching the black hole.":"A massive gravitational source is nearby."}),gt.jsxs("div",{className:"hazard-distance",children:[gt.jsxs("span",{children:[Math.round(r.distance).toLocaleString()," ",gt.jsx("small",{children:"u from singularity"})]}),gt.jsx("i",{style:{"--danger":`${Math.round(r.intensity*100)}%`}})]}),t?gt.jsx("small",{className:"assist-note",children:"Stabilization engaged · You retain the helm"}):gt.jsxs("button",{onClick:i,children:[gt.jsx(Ey,{size:15})," Enable transit control"]})]})}function NR(){const r="Manual Flight",[t,i]=he.useState(Ql),[s,l]=he.useState(!1),[c,f]=he.useState(null),d=he.useRef(null),p=he.useRef(null),m=he.useRef(null);m.current=c;const[v,g]=he.useState(18),[y,x]=he.useState(0),[E,T]=he.useState(!1),[S,_]=he.useState(0),[w,D]=he.useState(()=>matchMedia("(any-pointer: coarse)").matches?"Low":"Medium"),[b,V]=he.useState("Balanced"),[H,P]=he.useState(matchMedia("(prefers-reduced-motion: reduce)").matches),[O,C]=he.useState(.6),[A,G]=he.useState(!0),[Y,Z]=he.useState(!1),[it,j]=he.useState(!1),[k,U]=he.useState(""),[z,$]=he.useState(!1),[mt,Nt]=he.useState(""),[Xt,Zt]=he.useState(!1),[X,ut]=he.useState(1),[J,W]=he.useState(.7),[Et,Rt]=he.useState(!1),[dt,bt]=he.useState(!1),[vt,I]=he.useState(.28),[Mt,yt]=he.useState(!1),[ct,ht]=he.useState(!0),[At,Dt]=he.useState("idle"),[Ot,re]=he.useState(7123),[se,B]=he.useState({current:"Perseus Anchorage",next:"Deep-space systems",distance:0,region:0}),[R,ot]=he.useState({state:"idle",track:null}),[_t,Ut]=he.useState(()=>{try{return AR(localStorage.getItem(Hx))}catch{return{...r0}}}),Tt=he.useRef(new B1),Qt=he.useRef(()=>{}),Pt=At!=="idle",te=he.useRef(null),ee=he.useRef(new $C),zt=he.useRef(null),Vt=he.useRef(new wR),de=he.useRef({mode:r,speed:v,paused:E,region:S,quality:w,reduced:H,motion:O,cockpit:A,started:Y,blocked:!Y||!!k||Pt||!!c,hazardHold:!!c,transitAssist:s,sensitivity:X,touchSensitivity:J,invertMouseX:Et,invertMouseY:dt,lighting:b,bloom:vt,performanceMode:Mt,adaptive:ct,worldSeed:Ot});de.current={mode:r,speed:v,paused:E,region:S,quality:w,reduced:H,motion:O,cockpit:A,started:Y,blocked:!Y||!!k||Pt||!!c,hazardHold:!!c,transitAssist:s,sensitivity:X,touchSensitivity:J,invertMouseX:Et,invertMouseY:dt,lighting:b,bloom:vt,performanceMode:Mt,adaptive:ct,worldSeed:Ot},he.useEffect(()=>{try{return bR(zt.current,()=>de.current,ee.current,te.current,{onPlanner:at=>{d.current=at},getJumpTarget:()=>p.current,onSingularity:at=>{i(at)},onNavigation:at=>{B(at),_(at.region)},jump:Tt.current,onPhase:Dt,onDestination:(at,Ht)=>{var pe;_(at),re(Ht),(pe=p.current)!=null&&pe.blackHole&&g(18)},onAudio:(at,Ht,pe)=>Vt.current.jump(at,Ht,pe)})}catch{Nt("WebGL could not start. Please enable hardware acceleration and reload.")}},[]),he.useEffect(()=>(Vt.current.onMusicState=ot,()=>Vt.current.dispose()),[]),he.useEffect(()=>{const at=setInterval(()=>x(ee.current.speed),200);return()=>clearInterval(at)},[]),he.useEffect(()=>{Vt.current.set(z,_t,E)},[z,_t,E]),he.useEffect(()=>{Vt.current.hazard(!!c,t.level,t.intensity,s)},[c,t.level,t.intensity,s]),he.useEffect(()=>{t.level==="clear"&&l(!1)},[t.id,t.level]),he.useEffect(()=>{try{localStorage.setItem(Hx,JSON.stringify(_t))}catch{}},[_t]),he.useEffect(()=>{const at=()=>Zt(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",at),()=>document.removeEventListener("fullscreenchange",at)},[]),he.useEffect(()=>{const at=Ht=>{m.current||!Y||Ht.target instanceof HTMLElement&&Ht.target.closest('input,select,textarea,[contenteditable="true"]')||(Ht.code==="KeyJ"&&!Ht.repeat&&!Ht.ctrlKey&&!Ht.metaKey&&!Ht.altKey&&(Ht.preventDefault(),Qt.current()),Ht.code==="KeyR"&&ee.current.centerLook(),Ht.key.toLowerCase()==="h"&&(U(""),j(pe=>!pe)),Ht.code==="Space"&&!(Ht.target instanceof HTMLElement&&Ht.target.closest("button,a"))&&(Ht.preventDefault(),T(pe=>!pe)),Ht.key==="Escape"&&(j(!1),U("")))};return window.addEventListener("keydown",at),()=>window.removeEventListener("keydown",at)},[Y]);const ne=()=>{$(!1),Nt("Audio could not start. Open music settings to try again.")},Yt=()=>{Z(!0),T(!1),Ut(at=>({...at,musicEnabled:!0,music:at.music>0?at.music:.5})),Vt.current.start(_t.track).catch(ne),$(!0)},_e=async()=>{try{await Vt.current.start(),$(at=>!at)}catch{ne()}},K=async at=>{try{await Vt.current.start(at),Ut(Ht=>({...Ht,track:at,musicEnabled:!0})),$(!0)}catch{ne()}},Ft=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{Nt("Fullscreen is unavailable in this browser.")}},Gt=at=>{p.current=at,Tt.current.start(S,Ot,E)&&(f(null),U(""),Dt("charging"))},Jt=()=>{if(!Y||E||Tt.current.busy||m.current||!d.current)return;const at=d.current();at.blackHole?(U(""),j(!1),f(at)):Gt(at)};Qt.current=Jt;const Lt=E&&Pt?"Jump paused":At==="charging"?"Charging drive…":At==="accelerating"?"Accelerating…":At==="transit"?"Crossing the light…":At==="arriving"?"Entering the next system…":At==="stabilized"?`Arrived: ${se.current}`:"";return gt.jsxs("main",{"data-jump-phase":At,"data-world-seed":Ot,"data-region":S,"data-hazard":t.level,"data-transit-assist":s,className:`manual-flight ${Y?"journey-started":"preflight"} ${it?"hidden-ui":""} ${k||E||Pt||c?"controls-blocked":""} ${Pt?"jump-active":""}`,children:[gt.jsx("div",{className:"universe",ref:zt}),gt.jsx("div",{className:"vignette"}),gt.jsx("button",{className:"fullscreen-button ui",title:Xt?"Exit fullscreen":"Fullscreen",onClick:Ft,children:gt.jsx(FE,{size:20})}),!Y&&gt.jsx("section",{className:"entry",children:gt.jsxs("button",{className:"entry-button",onClick:Yt,children:[gt.jsx(HE,{size:20}),gt.jsx("span",{children:"Start journey"})]})}),gt.jsxs("div",{className:"flight-ui ui","aria-hidden":!Y,children:[gt.jsxs("div",{className:"navigation-caption",children:[gt.jsx("span",{children:se.current}),gt.jsxs("small",{children:[Bl[S].name," · Next: ",se.next," · ",se.distance.toLocaleString()," u"]})]}),gt.jsx("div",{className:"touch-controls",children:gt.jsxs("div",{ref:te,className:"touch-joystick",role:"group","aria-label":"Touch flight joystick",children:[gt.jsx("span",{className:"stick-cross",children:"+"}),gt.jsx("span",{className:"stick-thumb"}),gt.jsx("small",{children:"STEER"})]})}),gt.jsxs("aside",{className:"action-rail","aria-label":"Flight actions",children:[gt.jsx("button",{className:"rail-button rail-jump",title:"Light Jump","aria-keyshortcuts":"J",disabled:Pt||E||!!c,onClick:Jt,children:gt.jsx(WE,{size:20})}),gt.jsx("button",{className:`rail-button ${k==="audio"?"selected":""}`,title:"Audio settings","aria-expanded":k==="audio","aria-controls":"flight-panel",onClick:()=>U(k==="audio"?"":"audio"),children:gt.jsx(Vx,{size:20})}),gt.jsx("button",{className:`rail-button ${k==="settings"?"selected":""}`,title:"Settings","aria-expanded":k==="settings","aria-controls":"flight-panel",onClick:()=>U(k==="settings"?"":"settings"),children:gt.jsx(XE,{size:20})}),gt.jsx("button",{className:"rail-button",title:E?"Resume":"Pause",onClick:()=>T(at=>!at),children:E?gt.jsx(kE,{size:19}):gt.jsx(VE,{size:19})})]}),gt.jsx("span",{className:"jump-status",role:"status","aria-live":"polite",children:Lt}),gt.jsxs("div",{className:"cruise-strip",children:[gt.jsxs("label",{htmlFor:"speed",children:["CRUISE SPEED ",gt.jsxs("span",{children:[y.toFixed(0)," ",gt.jsx("small",{title:"Game units per second",children:"u/s"})]})]}),gt.jsx("input",{id:"speed","aria-label":"Cruise speed",disabled:Pt,type:"range",min:"0",max:"1200",value:v,onChange:at=>g(+at.target.value)})]})]}),it&&Y&&gt.jsxs("button",{className:"restore",onClick:()=>j(!1),children:[gt.jsx(My,{size:16})," Show controls · H"]}),k&&Y&&gt.jsxs(gt.Fragment,{children:[gt.jsx("button",{className:"panel-scrim","aria-label":"Close settings overlay",onClick:()=>U("")}),gt.jsxs("section",{id:"flight-panel",className:"panel","aria-label":k==="audio"?"Sound settings":"Graphics settings",children:[gt.jsxs("div",{className:"panel-head",children:[gt.jsx("span",{children:k==="audio"?"The sound of stillness":"Make space your own"}),gt.jsx("button",{title:"Close settings",onClick:()=>U(""),children:gt.jsx(Ty,{size:19})})]}),k==="audio"?gt.jsx(CR,{sound:z,paused:E,playback:R,settings:_t,onToggle:_e,onTrack:K,onChange:at=>Ut(Ht=>({...Ht,...at}))}):gt.jsxs(gt.Fragment,{children:[gt.jsx("p",{className:"setting-note",children:"Speed is shown in game units per second. Distances are scaled for relaxed exploration."}),gt.jsxs("label",{className:"setting",children:["Graphics quality",gt.jsx("select",{"aria-label":"Graphics quality",value:w,onChange:at=>D(at.target.value),children:["Low","Medium","High"].map(at=>gt.jsx("option",{children:at},at))})]}),gt.jsxs("label",{className:"check",children:[gt.jsx("input",{type:"checkbox",checked:Mt,onChange:at=>yt(at.target.checked)})," Performance mode"]}),gt.jsxs("label",{className:"check",children:[gt.jsx("input",{type:"checkbox",checked:ct,onChange:at=>ht(at.target.checked)})," Adaptive resolution"]}),gt.jsx("small",{className:"setting-note",children:"Performance mode prioritizes smooth flight. Adaptive resolution adjusts image detail when rendering is slow."}),gt.jsxs("label",{className:"setting",children:["Environment lighting",gt.jsx("select",{"aria-label":"Environment lighting",value:b,onChange:at=>V(at.target.value),children:["Dark","Balanced","Cinematic"].map(at=>gt.jsx("option",{children:at},at))})]}),gt.jsxs("label",{className:"setting",children:["Soft bloom ",gt.jsxs("output",{children:[Math.round(vt*100),"%"]}),gt.jsx("input",{"aria-label":"Soft bloom",type:"range",min:"0",max:".6",step:".02",value:vt,onChange:at=>I(+at.target.value)}),gt.jsx("small",{className:"setting-note",children:"Low / Medium use lightweight star halos; High can add post-processing bloom."})]}),gt.jsxs("label",{className:"setting",children:["Steering / mouse sensitivity ",gt.jsxs("output",{children:[X.toFixed(2),"×"]}),gt.jsx("input",{"aria-label":"Steering and mouse sensitivity",type:"range",min:".25",max:"2",step:".05",value:X,onChange:at=>ut(+at.target.value)})]}),gt.jsxs("label",{className:"setting",children:["Touch sensitivity ",gt.jsxs("output",{children:[J.toFixed(2),"×"]}),gt.jsx("input",{"aria-label":"Touch sensitivity",type:"range",min:".25",max:"1.5",step:".05",value:J,onChange:at=>W(+at.target.value)})]}),gt.jsxs("label",{className:"check",children:[gt.jsx("input",{type:"checkbox",checked:Et,onChange:at=>Rt(at.target.checked)})," Invert mouse horizontal axis"]}),gt.jsxs("label",{className:"check",children:[gt.jsx("input",{type:"checkbox",checked:dt,onChange:at=>bt(at.target.checked)})," Invert mouse vertical axis"]}),gt.jsxs("label",{className:"setting",children:["Camera movement",gt.jsx("input",{"aria-label":"Camera movement",type:"range",min:"0",max:"1",step:".05",value:O,onChange:at=>C(+at.target.value)})]}),gt.jsxs("label",{className:"check",children:[gt.jsx("input",{type:"checkbox",checked:H,onChange:at=>P(at.target.checked)})," Reduced motion"]}),gt.jsxs("button",{className:"sound-toggle",onClick:()=>ee.current.centerLook(),children:["Center view · R",gt.jsx(BE,{size:16})]}),gt.jsxs("label",{className:"check",children:[gt.jsx("input",{type:"checkbox",checked:A,onChange:at=>G(at.target.checked)})," Show cockpit"]}),gt.jsxs("button",{className:"sound-toggle",onClick:()=>{U(""),j(!0)},children:["Hide interface · H",gt.jsx(My,{size:16})]}),"    "]})]})]}),Y&&!Pt&&!c&&gt.jsx(DR,{reading:t,assist:s,onActivate:()=>l(!0)}),c&&gt.jsx(RR,{destination:c.name,onConfirm:()=>Gt(c),onCancel:()=>f(null)}),mt&&gt.jsxs("div",{role:"alert",className:"error",children:[mt,gt.jsx("button",{onClick:()=>Nt(""),"aria-label":"Dismiss error",children:gt.jsx(Ty,{size:16})})]})]})}OE.createRoot(document.getElementById("root")).render(gt.jsx(NR,{}));
