var mE=Object.defineProperty;var gE=(r,t,i)=>t in r?mE(r,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[t]=i;var he=(r,t,i)=>gE(r,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var qd={exports:{}},yl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ay;function vE(){if(ay)return yl;ay=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:u}}return yl.Fragment=t,yl.jsx=i,yl.jsxs=i,yl}var sy;function _E(){return sy||(sy=1,qd.exports=vE()),qd.exports}var wt=_E(),Yd={exports:{}},me={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ry;function yE(){if(ry)return me;ry=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),y=Symbol.for("react.view_transition"),x=Symbol.iterator;function E(q){return q===null||typeof q!="object"?null:(q=x&&q[x]||q["@@iterator"],typeof q=="function"?q:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,_={};function R(q,J,tt){this.props=q,this.context=J,this.refs=_,this.updater=tt||T}R.prototype.isReactComponent={},R.prototype.setState=function(q,J){if(typeof q!="object"&&typeof q!="function"&&q!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,q,J,"setState")},R.prototype.forceUpdate=function(q){this.updater.enqueueForceUpdate(this,q,"forceUpdate")};function w(){}w.prototype=R.prototype;function b(q,J,tt){this.props=q,this.context=J,this.refs=_,this.updater=tt||T}var I=b.prototype=new w;I.constructor=b,M(I,R.prototype),I.isPureReactComponent=!0;var z=Array.isArray;function P(){}var O={H:null,A:null,T:null,S:null},U=Object.prototype.hasOwnProperty;function A(q,J,tt){var k=tt.ref;return{$$typeof:r,type:q,key:J,ref:k!==void 0?k:null,props:tt}}function V(q,J){return A(q.type,J,q.props)}function Y(q){return typeof q=="object"&&q!==null&&q.$$typeof===r}function Q(q){var J={"=":"=0",":":"=2"};return"$"+q.replace(/[=:]/g,function(tt){return J[tt]})}var pt=/\/+/g;function K(q,J){return typeof q=="object"&&q!==null&&q.key!=null?Q(""+q.key):J.toString(36)}function W(q){switch(q.status){case"fulfilled":return q.value;case"rejected":throw q.reason;default:switch(typeof q.status=="string"?q.then(P,P):(q.status="pending",q.then(function(J){q.status==="pending"&&(q.status="fulfilled",q.value=J)},function(J){q.status==="pending"&&(q.status="rejected",q.reason=J)})),q.status){case"fulfilled":return q.value;case"rejected":throw q.reason}}throw q}function N(q,J,tt,k,ft){var xt=typeof q;(xt==="undefined"||xt==="boolean")&&(q=null);var Mt=!1;if(q===null)Mt=!0;else switch(xt){case"bigint":case"string":case"number":Mt=!0;break;case"object":switch(q.$$typeof){case r:case t:Mt=!0;break;case v:return Mt=q._init,N(Mt(q._payload),J,tt,k,ft)}}if(Mt)return ft=ft(q),Mt=k===""?"."+K(q,0):k,z(ft)?(tt="",Mt!=null&&(tt=Mt.replace(pt,"$&/")+"/"),N(ft,J,tt,"",function(G){return G})):ft!=null&&(Y(ft)&&(ft=V(ft,tt+(ft.key==null||q&&q.key===ft.key?"":(""+ft.key).replace(pt,"$&/")+"/")+Mt)),J.push(ft)),1;Mt=0;var At=k===""?".":k+":";if(z(q))for(var Lt=0;Lt<q.length;Lt++)k=q[Lt],xt=At+K(k,Lt),Mt+=N(k,J,tt,xt,ft);else if(Lt=E(q),typeof Lt=="function")for(q=Lt.call(q),Lt=0;!(k=q.next()).done;)k=k.value,xt=At+K(k,Lt++),Mt+=N(k,J,tt,xt,ft);else if(xt==="object"){if(typeof q.then=="function")return N(W(q),J,tt,k,ft);throw J=String(q),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(q).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return Mt}function B(q,J,tt){if(q==null)return q;var k=[],ft=0;return N(q,k,"","",function(xt){return J.call(tt,xt,ft++)}),k}function $(q){if(q._status===-1){var J=q._result,tt=J();tt.then(function(k){(q._status===0||q._status===-1)&&(q._status=1,q._result=k,tt.status===void 0&&(tt.status="fulfilled",tt.value=k))},function(k){(q._status===0||q._status===-1)&&(q._status=2,q._result=k,tt.status===void 0&&(tt.status="rejected",tt.reason=k))}),q._status===-1&&(q._status=0,q._result=tt)}if(q._status===1)return q._result.default;throw q._result}var ht=typeof reportError=="function"?reportError:function(q){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof q=="object"&&q!==null&&typeof q.message=="string"?String(q.message):String(q),error:q});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",q);return}console.error(q)};function Rt(q){var J=O.T,tt={};tt.types=J!==null?J.types:null,O.T=tt;try{var k=q(),ft=O.S;ft!==null&&ft(tt,k),typeof k=="object"&&k!==null&&typeof k.then=="function"&&k.then(P,ht)}catch(xt){ht(xt)}finally{J!==null&&tt.types!==null&&(J.types=tt.types),O.T=J}}function Gt(q){var J=O.T;if(J!==null){var tt=J.types;tt===null?J.types=[q]:tt.indexOf(q)===-1&&tt.push(q)}else Rt(Gt.bind(null,q))}var ne={map:B,forEach:function(q,J,tt){B(q,function(){J.apply(this,arguments)},tt)},count:function(q){var J=0;return B(q,function(){J++}),J},toArray:function(q){return B(q,function(J){return J})||[]},only:function(q){if(!Y(q))throw Error("React.Children.only expected to receive a single React element child.");return q}};return me.Activity=g,me.Children=ne,me.Component=R,me.Fragment=i,me.Profiler=l,me.PureComponent=b,me.StrictMode=s,me.Suspense=p,me.ViewTransition=y,me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=O,me.__COMPILER_RUNTIME={__proto__:null,c:function(q){return O.H.useMemoCache(q)}},me.addTransitionType=Gt,me.cache=function(q){return function(){return q.apply(null,arguments)}},me.cacheSignal=function(){return null},me.cloneElement=function(q,J,tt){if(q==null)throw Error("The argument must be a React element, but you passed "+q+".");var k=M({},q.props),ft=q.key;if(J!=null)for(xt in J.key!==void 0&&(ft=""+J.key),J)!U.call(J,xt)||xt==="key"||xt==="__self"||xt==="__source"||xt==="ref"&&J.ref===void 0||(k[xt]=J[xt]);var xt=arguments.length-2;if(xt===1)k.children=tt;else if(1<xt){for(var Mt=Array(xt),At=0;At<xt;At++)Mt[At]=arguments[At+2];k.children=Mt}return A(q.type,ft,k)},me.createContext=function(q){return q={$$typeof:f,_currentValue:q,_currentValue2:q,_threadCount:0,Provider:null,Consumer:null},q.Provider=q,q.Consumer={$$typeof:u,_context:q},q},me.createElement=function(q,J,tt){var k,ft={},xt=null;if(J!=null)for(k in J.key!==void 0&&(xt=""+J.key),J)U.call(J,k)&&k!=="key"&&k!=="__self"&&k!=="__source"&&(ft[k]=J[k]);var Mt=arguments.length-2;if(Mt===1)ft.children=tt;else if(1<Mt){for(var At=Array(Mt),Lt=0;Lt<Mt;Lt++)At[Lt]=arguments[Lt+2];ft.children=At}if(q&&q.defaultProps)for(k in Mt=q.defaultProps,Mt)ft[k]===void 0&&(ft[k]=Mt[k]);return A(q,xt,ft)},me.createRef=function(){return{current:null}},me.forwardRef=function(q){return{$$typeof:d,render:q}},me.isValidElement=Y,me.lazy=function(q){return{$$typeof:v,_payload:{_status:-1,_result:q},_init:$}},me.memo=function(q,J){return{$$typeof:m,type:q,compare:J===void 0?null:J}},me.startTransition=Rt,me.unstable_useCacheRefresh=function(){return O.H.useCacheRefresh()},me.use=function(q){return O.H.use(q)},me.useActionState=function(q,J,tt){return O.H.useActionState(q,J,tt)},me.useCallback=function(q,J){return O.H.useCallback(q,J)},me.useContext=function(q){return O.H.useContext(q)},me.useDebugValue=function(){},me.useDeferredValue=function(q,J){return O.H.useDeferredValue(q,J)},me.useEffect=function(q,J){return O.H.useEffect(q,J)},me.useEffectEvent=function(q){return O.H.useEffectEvent(q)},me.useId=function(){return O.H.useId()},me.useImperativeHandle=function(q,J,tt){return O.H.useImperativeHandle(q,J,tt)},me.useInsertionEffect=function(q,J){return O.H.useInsertionEffect(q,J)},me.useLayoutEffect=function(q,J){return O.H.useLayoutEffect(q,J)},me.useMemo=function(q,J){return O.H.useMemo(q,J)},me.useOptimistic=function(q,J){return O.H.useOptimistic(q,J)},me.useReducer=function(q,J,tt){return O.H.useReducer(q,J,tt)},me.useRef=function(q){return O.H.useRef(q)},me.useState=function(q){return O.H.useState(q)},me.useSyncExternalStore=function(q,J,tt){return O.H.useSyncExternalStore(q,J,tt)},me.useTransition=function(){return O.H.useTransition()},me.version="19.3.1",me}var oy;function Am(){return oy||(oy=1,Yd.exports=yE()),Yd.exports}var ge=Am(),Wd={exports:{}},xl={},jd={exports:{}},Zd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ly;function xE(){return ly||(ly=1,(function(r){function t(W,N){var B=W.length;W.push(N);t:for(;0<B;){var $=B-1>>>1,ht=W[$];if(0<l(ht,N))W[$]=N,W[B]=ht,B=$;else break t}}function i(W){return W.length===0?null:W[0]}function s(W){if(W.length===0)return null;var N=W[0],B=W.pop();if(B!==N){W[0]=B;t:for(var $=0,ht=W.length,Rt=ht>>>1;$<Rt;){var Gt=2*($+1)-1,ne=W[Gt],q=Gt+1,J=W[q];if(0>l(ne,B))q<ht&&0>l(J,ne)?(W[$]=J,W[q]=B,$=q):(W[$]=ne,W[Gt]=B,$=Gt);else if(q<ht&&0>l(J,B))W[$]=J,W[q]=B,$=q;else break t}}return N}function l(W,N){var B=W.sortIndex-N.sortIndex;return B!==0?B:W.id-N.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var p=[],m=[],v=1,g=null,y=3,x=!1,E=!1,T=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function b(W){for(var N=i(m);N!==null;){if(N.callback===null)s(m);else if(N.startTime<=W)s(m),N.sortIndex=N.expirationTime,t(p,N);else break;N=i(m)}}function I(W){if(T=!1,b(W),!E)if(i(p)!==null)E=!0,z||(z=!0,Y());else{var N=i(m);N!==null&&K(I,N.startTime-W)}}var z=!1,P=-1,O=5,U=-1;function A(){return M?!0:!(r.unstable_now()-U<O)}function V(){if(M=!1,z){var W=r.unstable_now();U=W;var N=!0;try{t:{E=!1,T&&(T=!1,R(P),P=-1),x=!0;var B=y;try{e:{for(b(W),g=i(p);g!==null&&!(g.expirationTime>W&&A());){var $=g.callback;if(typeof $=="function"){g.callback=null,y=g.priorityLevel;var ht=$(g.expirationTime<=W);if(W=r.unstable_now(),typeof ht=="function"){g.callback=ht,b(W),N=!0;break e}g===i(p)&&s(p),b(W)}else s(p);g=i(p)}if(g!==null)N=!0;else{var Rt=i(m);Rt!==null&&K(I,Rt.startTime-W),N=!1}}break t}finally{g=null,y=B,x=!1}N=void 0}}finally{N?Y():z=!1}}}var Y;if(typeof w=="function")Y=function(){w(V)};else if(typeof MessageChannel<"u"){var Q=new MessageChannel,pt=Q.port2;Q.port1.onmessage=V,Y=function(){pt.postMessage(null)}}else Y=function(){_(V,0)};function K(W,N){P=_(function(){W(r.unstable_now())},N)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(W){W.callback=null},r.unstable_forceFrameRate=function(W){0>W||125<W?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<W?Math.floor(1e3/W):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_next=function(W){switch(y){case 1:case 2:case 3:var N=3;break;default:N=y}var B=y;y=N;try{return W()}finally{y=B}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(W,N){switch(W){case 1:case 2:case 3:case 4:case 5:break;default:W=3}var B=y;y=W;try{return N()}finally{y=B}},r.unstable_scheduleCallback=function(W,N,B){var $=r.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?$+B:$):B=$,W){case 1:var ht=-1;break;case 2:ht=250;break;case 5:ht=1073741823;break;case 4:ht=1e4;break;default:ht=5e3}return ht=B+ht,W={id:v++,callback:N,priorityLevel:W,startTime:B,expirationTime:ht,sortIndex:-1},B>$?(W.sortIndex=B,t(m,W),i(p)===null&&W===i(m)&&(T?(R(P),P=-1):T=!0,K(I,B-$))):(W.sortIndex=ht,t(p,W),E||x||(E=!0,z||(z=!0,Y()))),W},r.unstable_shouldYield=A,r.unstable_wrapCallback=function(W){var N=y;return function(){var B=y;y=N;try{return W.apply(this,arguments)}finally{y=B}}}})(Zd)),Zd}var uy;function SE(){return uy||(uy=1,jd.exports=xE()),jd.exports}var Qd={exports:{}},In={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cy;function ME(){if(cy)return In;cy=1;var r=Am();function t(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),u=Symbol.for("react.recoverable"),f=Symbol.for("react.optimistic_key");function d(v,g,y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:x===f?f:""+x,children:v,containerInfo:g,implementation:y}}var p=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function m(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return In.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,In.browser=function(v){return{$$typeof:u,_reason:v}},In.createPortal=function(v,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(t(299));return d(v,g,null,y)},In.flushSync=function(v){var g=p.T,y=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=g,s.p=y,s.d.f()}},In.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,s.d.C(v,g))},In.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},In.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var y=g.as,x=m(y,g.crossOrigin),E=typeof g.integrity=="string"?g.integrity:void 0,T=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?s.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:x,integrity:E,fetchPriority:T}):y==="script"&&s.d.X(v,{crossOrigin:x,integrity:E,fetchPriority:T,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},In.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=m(g.as,g.crossOrigin);s.d.M(v,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}}else g==null&&s.d.M(v)},In.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,x=m(y,g.crossOrigin);s.d.L(v,y,{crossOrigin:x,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},In.preloadModule=function(v,g){if(typeof v=="string")if(g){var y=m(g.as,g.crossOrigin);s.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0})}else s.d.m(v)},In.requestFormReset=function(v){s.d.r(v)},In.unstable_batchedUpdates=function(v,g){return v(g)},In.useFormState=function(v,g,y){return p.H.useFormState(v,g,y)},In.useFormStatus=function(){return p.H.useHostTransitionStatus()},In.version="19.3.1",In}var fy;function EE(){if(fy)return Qd.exports;fy=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Qd.exports=ME(),Qd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hy;function TE(){if(hy)return xl;hy=1;var r=SE(),t=Am(),i=EE();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){for(var n=e,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?e:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function p(e){if(u(e)!==e)throw Error(s(188))}function m(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===a)return p(c),e;if(h===o)return p(c),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=h;else{for(var S=!1,D=c.child;D;){if(D===a){S=!0,a=c,o=h;break}if(D===o){S=!0,o=c,a=h;break}D=D.sibling}if(!S){for(D=h.child;D;){if(D===a){S=!0,a=h,o=c;break}if(D===o){S=!0,o=h,a=c;break}D=D.sibling}if(!S)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}function g(e,n,a,o,c,h){for(;e!==null;){if((e.tag===5||e.tag===27||e.tag===6)&&a(e,o,c,h)||(e.tag!==22||e.memoizedState===null)&&(n||e.tag!==5&&e.tag!==27)&&g(e.child,n,a,o,c,h))return!0;e=e.sibling}return!1}function y(e){for(e=e.return;e!==null;){if(e.tag===3||e.tag===5||e.tag===27)return e;e=e.return}return null}function x(e){var n=!1;for(e=e.return;e!==null&&(e.tag===4&&(n=!0),!(e.tag===3||e.tag===5||e.tag===27));)e=e.return;return n}function E(e){var n=[null,null],a=y(e);return a===null||T(n,e,a.child,{foundSelf:!1}),n}function T(e,n,a,o){for(;a!==null;){if(a===n)o.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(o.foundSelf)return e[1]=a,!0;e[0]=a}else if((a.tag!==22||a.memoizedState===null)&&T(e,n,a.child,o))return!0;a=a.sibling}return!1}function M(e){switch(e.tag){case 5:case 27:case 6:return e.stateNode;case 3:return e.stateNode.containerInfo;default:throw Error(s(559))}}var _=null,R=null;function w(e,n,a){return e===a?!0:e===n?(_=e,!0):!1}function b(e,n,a){return e===a?(R=e,!1):e===n?(R!==null&&(_=e),!0):!1}function I(e){if(e===null)return null;do e=e===null?null:e.return;while(e&&e.tag!==5&&e.tag!==27&&e.tag!==3);return e||null}function z(e,n,a){for(var o=0,c=e;c;c=a(c))o++;c=0;for(var h=n;h;h=a(h))c++;for(;0<o-c;)e=a(e),o--;for(;0<c-o;)n=a(n),c--;for(;o--;){if(e===n||n!==null&&e===n.alternate)return e;e=a(e),n=a(n)}return null}var P=Object.assign,O=Symbol.for("react.element"),U=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),pt=Symbol.for("react.consumer"),K=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),N=Symbol.for("react.suspense"),B=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),ht=Symbol.for("react.lazy"),Rt=Symbol.for("react.activity"),Gt=Symbol.for("react.legacy_hidden"),ne=Symbol.for("react.memo_cache_sentinel"),q=Symbol.for("react.view_transition"),J=Symbol.for("react.recoverable"),tt=Symbol.iterator;function k(e){return e===null||typeof e!="object"?null:(e=tt&&e[tt]||e["@@iterator"],typeof e=="function"?e:null)}var ft=Symbol.for("react.client.reference");function xt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ft?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case V:return"Fragment";case Q:return"Profiler";case Y:return"StrictMode";case N:return"Suspense";case B:return"SuspenseList";case Rt:return"Activity";case q:return"ViewTransition"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case K:return e.displayName||"Context";case pt:return(e._context.displayName||"Context")+".Consumer";case W:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case $:return n=e.displayName||null,n!==null?n:xt(e.type)||"Memo";case ht:n=e._payload,e=e._init;try{return xt(e(n))}catch{}}return null}var Mt=Array.isArray,At=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Lt=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G={pending:!1,data:null,method:null,action:null},Et=[],_t=-1;function dt(e){return{current:e}}function ut(e){0>_t||(e.current=Et[_t],Et[_t]=null,_t--)}function Ct(e,n){_t++,Et[_t]=e.current,e.current=n}var Dt=dt(null),Bt=dt(null),re=dt(null),ue=dt(null);function F(e,n){switch(Ct(re,n),Ct(Bt,e),Ct(Dt,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?d_(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=d_(n),e=p_(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ut(Dt),Ct(Dt,e)}function C(){ut(Dt),ut(Bt),ut(re)}function st(e){var n=e.memoizedState;n!==null&&(Wr._currentValue=n.memoizedState,Ct(ue,e)),n=Dt.current;var a=p_(n,e.type);n!==a&&(Ct(Bt,e),Ct(Dt,a))}function vt(e){Bt.current===e&&(ut(Dt),ut(Bt)),ue.current===e&&(ut(ue),Wr._currentValue=G)}var Nt,St;function Qt(e){if(Nt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Nt=n&&n[1]||"",St=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Nt+e+St}var Ft=!1;function $t(e,n){if(!e||Ft)return"";Ft=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var bt=function(){throw Error()};if(Object.defineProperty(bt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(bt,[])}catch(Xt){var et=Xt}Reflect.construct(e,[],bt)}else{try{bt.call()}catch(Xt){et=Xt}bt=!1;try{var lt=Object.getOwnPropertyDescriptor(e.prototype,"props");Object.defineProperty(e.prototype,"props",{configurable:!0,set:function(){throw Error()}}),bt=!0,new e}finally{bt&&(lt!==void 0?Object.defineProperty(e.prototype,"props",lt):delete e.prototype.props)}}}else{try{throw Error()}catch(Xt){et=Xt}(bt=e())&&typeof bt.catch=="function"&&bt.catch(function(){})}}catch(Xt){if(Xt&&et&&typeof Xt.stack=="string")return[Xt.stack,et.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),S=h[0],D=h[1];if(S&&D){var X=S.split(`
`),it=D.split(`
`);for(c=o=0;o<X.length&&!X[o].includes("DetermineComponentFrameRoot");)o++;for(;c<it.length&&!it[c].includes("DetermineComponentFrameRoot");)c++;if(o===X.length||c===it.length)for(o=X.length-1,c=it.length-1;1<=o&&0<=c&&X[o]!==it[c];)c--;for(;1<=o&&0<=c;o--,c--)if(X[o]!==it[c]){if(o!==1||c!==1)do if(o--,c--,0>c||X[o]!==it[c]){var ct=`
`+X[o].replace(" at new "," at ");return e.displayName&&ct.includes("<anonymous>")&&(ct=ct.replace("<anonymous>",e.displayName)),ct}while(1<=o&&0<=c);break}}}finally{Ft=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Qt(a):""}function ee(e,n){switch(e.tag){case 26:case 27:case 5:return Qt(e.type);case 16:return Qt("Lazy");case 13:return e.child!==n&&n!==null?Qt("Suspense Fallback"):Qt("Suspense");case 19:return Qt("SuspenseList");case 0:case 15:return $t(e.type,!1);case 11:return $t(e.type.render,!1);case 1:return $t(e.type,!0);case 31:return Qt("Activity");case 30:return Qt("ViewTransition");default:return""}}function Ot(e){try{var n="",a=null;do n+=ee(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var yt=Object.prototype.hasOwnProperty,qt=r.unstable_scheduleCallback,Jt=r.unstable_cancelCallback,Yt=r.unstable_shouldYield,ye=r.unstable_requestPaint,Z=r.unstable_now,Ht=r.unstable_getCurrentPriorityLevel,kt=r.unstable_ImmediatePriority,te=r.unstable_UserBlockingPriority,Pt=r.unstable_NormalPriority,Ut=r.unstable_LowPriority,se=r.unstable_IdlePriority,ve=r.log,je=r.unstable_setDisableYieldValue,Re=null,rn=null;function En(e){if(typeof ve=="function"&&je(e),rn&&typeof rn.setStrictMode=="function")try{rn.setStrictMode(Re,e)}catch{}}var Bn=Math.clz32?Math.clz32:Ql,fa=Math.log,Ro=Math.LN2;function Ql(e){return e>>>=0,e===0?32:31-(fa(e)/Ro|0)|0}var xs=256,ha=262144,Ss=4194304;function xi(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&-e;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ms(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,h=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var D=o&134217727;return D!==0?(o=D&~h,o!==0?c=xi(o):(S&=D,S!==0?c=xi(S):a||(a=D&~e,a!==0&&(c=xi(a))))):(D=o&~h,D!==0?c=xi(D):S!==0?c=xi(S):a||(a=o&~e,a!==0&&(c=xi(a)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:c}function Ba(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Kl(e,n){(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var o=31-Bn(a),c=1<<o;n|=e[o],a&=~c}return n}function yf(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Jl(){var e=Ss;return Ss<<=1,(Ss&62914560)===0&&(Ss=4194304),e}function Do(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Es(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function xf(e,n,a,o,c,h){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var D=e.entanglements,X=e.expirationTimes,it=e.hiddenUpdates;for(a=S&~a;0<a;){var ct=31-Bn(a),bt=1<<ct;D[ct]=0,X[ct]=-1;var et=it[ct];if(et!==null)for(it[ct]=null,ct=0;ct<et.length;ct++){var lt=et[ct];lt!==null&&(lt.lane&=-536870913)}a&=~bt}o!==0&&L(e,o,0),h!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=h&~(S&~n))}function L(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Bn(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function at(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-Bn(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function mt(e,n){var a=n&-n;return a=(a&42)!==0?1:gt(a),(a&(e.suspendedLanes|n))!==0?0:a}function gt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function rt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function It(){var e=Lt.p;return e!==0?e:(e=window.event,e===void 0?32:K_(e.type))}function Wt(e,n){var a=Lt.p;try{return Lt.p=e,n()}finally{Lt.p=a}}var Zt=Math.random().toString(36).slice(2),Vt="__reactFiber$"+Zt,ie="__reactProps$"+Zt,de="__reactContainer$"+Zt,ce="__reactEvents$"+Zt,be="__reactListeners$"+Zt,Ve="__reactHandles$"+Zt,en="__reactResources$"+Zt,Ie="__reactMarker$"+Zt,Oe="__reactLoad$"+Zt;function fe(e){delete e[Vt],delete e[ie],delete e[be],delete e[Ve]}function Be(e){var n;if(n=e[Vt])return n;for(var a=e.parentNode;a;){if(n=a[de]||a[Vt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=U_(e);e!==null;){if(a=e[Vt])return a;e=U_(e)}return n}e=a,a=e.parentNode}return null}function Ee(e){if(e=e[Vt]||e[de]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function Tn(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function oi(e){var n=e[en];return n||(n=e[en]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Pe(e){e[Ie]=!0}function Fa(e){e[Oe]=void 0}var Je=new Set,Wn={};function mn(e,n){un(e,n),un(e+"Capture",n)}function un(e,n){for(Wn[e]=n,e=0;e<n.length;e++)Je.add(n[e])}var Fn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),cr={},Wi={};function OS(e){return yt.call(Wi,e)?!0:yt.call(cr,e)?!1:Fn.test(e)?Wi[e]=!0:(cr[e]=!0,!1)}var ze=!1;function $m(){var e=ze;return ze=!1,e}function $l(e,n,a){if(OS(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,a)}}function tu(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,a)}}function da(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,o)}}function li(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function t0(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function PS(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){a=""+S,h.call(this,S)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(S){a=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Sf(e){if(!e._valueTracker){var n=t0(e)?"checked":"value";e._valueTracker=PS(e,n,""+e[n])}}function e0(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=t0(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}var zS=/[\n"\\]/g;function Si(e){return e.replace(zS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Mf(e,n,a,o,c,h,S,D){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+li(n)):e.value!==""+li(n)&&(e.value=""+li(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?S==="number"&&e.value==n?Ef(e,li(e.value)):Ef(e,li(n)):a!=null?Ef(e,li(a)):o!=null&&e.removeAttribute("value"),c==null&&h!=null&&(e.defaultChecked=!!h),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),D!=null&&typeof D!="function"&&typeof D!="symbol"&&typeof D!="boolean"?e.name=""+li(D):e.removeAttribute("name")}function n0(e,n,a,o,c,h,S,D){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Sf(e);return}a=a!=null?""+li(a):"",n=n!=null?""+li(n):a,D||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=D?e.checked:!!o,e.defaultChecked=!!o,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),Sf(e)}function Ef(e,n){e.defaultValue!==""+n&&(e.defaultValue=""+n)}function fr(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+li(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function i0(e,n,a){if(n!=null&&(n=""+li(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+li(a):""}function a0(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(Mt(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=li(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Sf(e)}function hr(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var IS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function s0(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||IS.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function r0(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="",ze=!0);for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&(s0(e,c,o),ze=!0)}else for(var h in n)n.hasOwnProperty(h)&&s0(e,h,n[h])}function Tf(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var BS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),FS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function eu(e){return FS.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function ji(){}var bf=null;function Af(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var dr=null,pr=null;function o0(e){var n=Ee(e);if(n&&(e=n.stateNode)){var a=e[ie]||null;t:switch(e=n.stateNode,n.type){case"input":if(Mf(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Si(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[ie]||null;if(!c)throw Error(s(90));Mf(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&e0(o)}break t;case"textarea":i0(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&fr(e,!!a.multiple,n,!1)}}}var wf=!1;function l0(e,n,a){if(wf)return e(n,a);wf=!0;try{var o=e(n);return o}finally{if(wf=!1,(dr!==null||pr!==null)&&(ec(),dr&&(n=dr,e=pr,pr=dr=null,o0(n),e)))for(n=0;n<e.length;n++)o0(e[n])}}function Uo(e,n){var a=e.stateNode;if(a===null)return null;var o=a[ie]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Cf=!1;if(pa)try{var No={};Object.defineProperty(No,"passive",{get:function(){Cf=!0}}),window.addEventListener("test",No,No),window.removeEventListener("test",No,No)}catch{Cf=!1}var Ha=null,Rf=null,nu=null;function u0(){if(nu)return nu;var e,n=Rf,a=n.length,o,c="value"in Ha?Ha.value:Ha.textContent,h=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(o=1;o<=S&&n[a-o]===c[h-o];o++);return nu=c.slice(e,1<o?1-o:void 0)}function iu(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function au(){return!0}function c0(){return!1}function jn(e){function n(a,o,c,h,S){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=S,this.currentTarget=null;for(var D in e)e.hasOwnProperty(D)&&(a=e[D],this[D]=a?a(h):h[D]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?au:c0,this.isPropagationStopped=c0,this}return P(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=au)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=au)},persist:function(){},isPersistent:au}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},su=jn(Ga),Lo=P({},Ga,{view:0,detail:0}),HS=jn(Lo),Df,Uf,Oo,ru=P({},Lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Oo&&(Oo&&e.type==="mousemove"?(Df=e.screenX-Oo.screenX,Uf=e.screenY-Oo.screenY):Uf=Df=0,Oo=e),Df)},movementY:function(e){return"movementY"in e?e.movementY:Uf}}),f0=jn(ru),GS=P({},ru,{dataTransfer:0}),VS=jn(GS),kS=P({},Lo,{relatedTarget:0}),Nf=jn(kS),XS=P({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),qS=jn(XS),YS=P({},Ga,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),WS=jn(YS),jS=P({},Ga,{data:0}),h0=jn(jS),ZS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JS(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=KS[e])?!!n[e]:!1}function Lf(){return JS}var $S=P({},Lo,{key:function(e){if(e.key){var n=ZS[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=iu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?QS[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lf,charCode:function(e){return e.type==="keypress"?iu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?iu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),t1=jn($S),e1=P({},ru,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),d0=jn(e1),n1=P({},Ga,{submitter:0}),i1=jn(n1),a1=P({},Lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lf}),s1=jn(a1),r1=P({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),o1=jn(r1),l1=P({},ru,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),u1=jn(l1),c1=P({},Ga,{newState:0,oldState:0,source:0}),f1=jn(c1),h1=[9,13,27,32],Of=pa&&"CompositionEvent"in window,Po=null;pa&&"documentMode"in document&&(Po=document.documentMode);var d1=pa&&"TextEvent"in window&&!Po,p0=pa&&(!Of||Po&&8<Po&&11>=Po),m0=" ",g0=!1;function v0(e,n){switch(e){case"keyup":return h1.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var mr=!1;function p1(e,n){switch(e){case"compositionend":return _0(n);case"keypress":return n.which!==32?null:(g0=!0,m0);case"textInput":return e=n.data,e===m0&&g0?null:e;default:return null}}function m1(e,n){if(mr)return e==="compositionend"||!Of&&v0(e,n)?(e=u0(),nu=Rf=Ha=null,mr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return p0&&n.locale!=="ko"?null:n.data;default:return null}}var g1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function y0(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!g1[e.type]:n==="textarea"}function x0(e,n,a,o){dr?pr?pr.push(o):pr=[o]:dr=o,n=oc(n,"onChange"),0<n.length&&(a=new su("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var zo=null,Io=null;function v1(e){o_(e,0)}function ou(e){var n=Tn(e);if(e0(n))return e}function S0(e,n){if(e==="change")return n}var M0=!1;if(pa){var Pf;if(pa){var zf="oninput"in document;if(!zf){var E0=document.createElement("div");E0.setAttribute("oninput","return;"),zf=typeof E0.oninput=="function"}Pf=zf}else Pf=!1;M0=Pf&&(!document.documentMode||9<document.documentMode)}function T0(){zo&&(zo.detachEvent("onpropertychange",b0),Io=zo=null)}function b0(e){if(e.propertyName==="value"&&ou(Io)){var n=[];x0(n,Io,e,Af(e)),l0(v1,n)}}function _1(e,n,a){e==="focusin"?(T0(),zo=n,Io=a,zo.attachEvent("onpropertychange",b0)):e==="focusout"&&T0()}function y1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ou(Io)}function x1(e,n){if(e==="click")return ou(n)}function S1(e,n){if(e==="input"||e==="change")return ou(n)}function M1(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var ui=typeof Object.is=="function"?Object.is:M1;function Bo(e,n){if(ui(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!yt.call(n,c)||!ui(e[c],n[c]))return!1}return!0}function If(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function A0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function w0(e,n){var a=A0(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=A0(a)}}function C0(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?C0(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function R0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=If(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=If(e.document)}return n}function Bf(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var E1=pa&&"documentMode"in document&&11>=document.documentMode,gr=null,Ff=null,Fo=null,Hf=!1;function D0(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Hf||gr==null||gr!==If(o)||(o=gr,"selectionStart"in o&&Bf(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),Fo&&Bo(Fo,o)||(Fo=o,o=oc(Ff,"onSelect"),0<o.length&&(n=new su("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=gr)))}function Ts(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var vr={animationend:Ts("Animation","AnimationEnd"),animationiteration:Ts("Animation","AnimationIteration"),animationstart:Ts("Animation","AnimationStart"),transitionrun:Ts("Transition","TransitionRun"),transitionstart:Ts("Transition","TransitionStart"),transitioncancel:Ts("Transition","TransitionCancel"),transitionend:Ts("Transition","TransitionEnd")},Gf={},U0={};pa&&(U0=document.createElement("div").style,"AnimationEvent"in window||(delete vr.animationend.animation,delete vr.animationiteration.animation,delete vr.animationstart.animation),"TransitionEvent"in window||delete vr.transitionend.transition);function bs(e){if(Gf[e])return Gf[e];if(!vr[e])return e;var n=vr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in U0)return Gf[e]=n[a];return e}var N0=bs("animationend"),L0=bs("animationiteration"),O0=bs("animationstart"),T1=bs("transitionrun"),b1=bs("transitionstart"),A1=bs("transitioncancel"),P0=bs("transitionend"),z0=new Map,Vf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Vf.push("scrollEnd");function Li(e,n){z0.set(e,n),mn(n,[e])}var w1=0;function ma(e,n){if(e.name!=null&&e.name!=="auto")return e.name;if(n.autoName!==null)return n.autoName;e=Ii.identifierPrefix;var a=w1++;return e="_"+e+"t_"+a.toString(32)+"_",n.autoName=e}function I0(e){if(e==null||typeof e=="string")return e;var n=null,a=Ir;if(a!==null)for(var o=0;o<a.length;o++){var c=e[a[o]];if(c!=null){if(c==="none")return"none";n=n==null?c:n+(" "+c)}}return n??e.default}function ga(e,n){return e=I0(e),n=I0(n),n==null?e==="auto"?null:e:n==="auto"?null:n}var lu=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Mi=[],_r=0,kf=0;function uu(){for(var e=_r,n=kf=_r=0;n<e;){var a=Mi[n];Mi[n++]=null;var o=Mi[n];Mi[n++]=null;var c=Mi[n];Mi[n++]=null;var h=Mi[n];if(Mi[n++]=null,o!==null&&c!==null){var S=o.pending;S===null?c.next=c:(c.next=S.next,S.next=c),o.pending=c}h!==0&&B0(a,c,h)}}function cu(e,n,a,o){Mi[_r++]=e,Mi[_r++]=n,Mi[_r++]=a,Mi[_r++]=o,kf|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Xf(e,n,a,o){return cu(e,n,a,o),fu(e)}function As(e,n){return cu(e,null,null,n),fu(e)}function B0(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(c=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,c&&n!==null&&(c=31-Bn(a),e=h.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),h):null}function fu(e){if(50<ol)throw ol=0,tc=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var yr={};function C1(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ti(e,n,a,o){return new C1(e,n,a,o)}function qf(e){return e=e.prototype,!(!e||!e.isReactComponent)}function va(e,n){var a=e.alternate;return a===null?(a=ti(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&1206910976,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function F0(e,n){e.flags&=1206910978;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function hu(e,n,a,o,c,h){var S=0;if(o=e,typeof o=="function")qf(o)&&(S=1);else if(typeof o=="string")S=nE(e,a,Dt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(o){case Rt:return e=ti(31,a,n,c),e.elementType=Rt,e.lanes=h,e;case V:return ws(a.children,c,h,n);case Y:S=8,c|=24;break;case Q:return e=ti(12,a,n,c|2),e.elementType=Q,e.lanes=h,e;case N:return e=ti(13,a,n,c),e.elementType=N,e.lanes=h,e;case B:return e=ti(19,a,n,c),e.elementType=B,e.lanes=h,e;case Gt:case q:return e=c|32,e=ti(30,a,n,e),e.elementType=q,e.lanes=h,e.stateNode={autoName:null,paired:null,clones:null,ref:null},e;default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case K:S=10;break t;case pt:S=9;break t;case W:S=11;break t;case $:S=14;break t;case ht:S=16,o=null;break t}S=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=ti(S,a,n,c),n.elementType=e,n.type=o,n.lanes=h,n}function ws(e,n,a,o){return e=ti(7,e,o,n),e.lanes=a,e}function Yf(e,n,a){return e=ti(6,e,null,n),e.lanes=a,e}function H0(e){var n=ti(18,null,null,0);return n.stateNode=e,n}function Wf(e,n,a){return n=ti(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var G0=new WeakMap;function Ei(e,n){if(typeof e=="object"&&e!==null){var a=G0.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ot(n)},G0.set(e,n),n)}return{value:e,source:n,stack:Ot(n)}}var xr=[],Sr=0,du=null,Ho=0,Ti=[],bi=0,Va=null,Zi=1,Qi="";function _a(e,n){xr[Sr++]=Ho,xr[Sr++]=du,du=e,Ho=n}function V0(e,n,a){Ti[bi++]=Zi,Ti[bi++]=Qi,Ti[bi++]=Va,Va=e;var o=Zi;e=Qi;var c=32-Bn(o)-1;o&=~(1<<c),a+=1;var h=32-Bn(n)+c;if(30<h){var S=c-c%5;h=(o&(1<<S)-1).toString(32),o>>=S,c-=S,Zi=1<<32-Bn(n)+c|a<<c|o,Qi=h+e}else Zi=1<<h|a<<c|o,Qi=e}function pu(e){e.return!==null&&(_a(e,1),V0(e,1,0))}function jf(e){for(;e===du;)du=xr[--Sr],xr[Sr]=null,Ho=xr[--Sr],xr[Sr]=null;for(;e===Va;)Va=Ti[--bi],Ti[bi]=null,Qi=Ti[--bi],Ti[bi]=null,Zi=Ti[--bi],Ti[bi]=null}function k0(e,n){Ti[bi++]=Zi,Ti[bi++]=Qi,Ti[bi++]=Va,Zi=n.id,Qi=n.overflow,Va=e}var Cn=null,$e=null,Te=!1,ka=null,Ai=!1,Zf=Error(s(519));function Xa(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Go(Ei(n,e)),Zf}function X0(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[Vt]=e,n[ie]=o,a){case"dialog":Ce("cancel",n),Ce("close",n);break;case"iframe":case"object":case"embed":Ce("load",n);break;case"video":case"audio":for(a=0;a<ul.length;a++)Ce(ul[a],n);break;case"source":Ce("error",n);break;case"img":case"image":case"link":Ce("error",n),Ce("load",n);break;case"details":Ce("toggle",n);break;case"input":Ce("invalid",n),n0(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":Ce("invalid",n);break;case"textarea":Ce("invalid",n),a0(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||f_(n.textContent,a)?(o.popover!=null&&(Ce("beforetoggle",n),Ce("toggle",n)),o.onScroll!=null&&Ce("scroll",n),o.onScrollEnd!=null&&Ce("scrollend",n),o.onClick!=null&&(n.onclick=ji),n=!0):n=!1,n||Xa(e,!0)}function mu(e){for(Cn=e.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:Ai=!1;return;case 27:case 3:Ai=!0;return;default:Cn=Cn.return}}function Mr(e){if(e!==Cn)return!1;if(!Te)return mu(e),Te=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||bd(e.type,e.memoizedProps)),a=!a),a&&$e&&Xa(e),mu(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));$e=D_(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));$e=D_(e)}else n===27?(n=$e,rs(e.type)?(e=Od,Od=null,$e=e):$e=n):$e=Cn?Ci(e.stateNode.nextSibling):null;return!0}function Cs(){$e=Cn=null,Te=!1}function Qf(){var e=ka;return e!==null&&(ii===null?ii=e:ii.push.apply(ii,e),ka=null),e}function Go(e){ka===null?ka=[e]:ka.push(e)}var Kf=dt(null),Rs=null,ya=null;function qa(e,n,a){Ct(Kf,n._currentValue),n._currentValue=a}function xa(e){e._currentValue=Kf.current,ut(Kf)}function gu(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Jf(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var h=c.dependencies;if(h!==null){var S=c.child;h=h.firstContext;t:for(;h!==null;){var D=h;h=c;for(var X=0;X<n.length;X++)if(D.context===n[X]){h.lanes|=a,D=h.alternate,D!==null&&(D.lanes|=a),gu(h.return,a,e),o||(S=null);break t}h=D.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(s(341));S.lanes|=a,h=S.alternate,h!==null&&(h.lanes|=a),gu(S,a,e),S=null}else c.tag===13&&c.memoizedState!==null&&c.memoizedState.dehydrated===null?(c.lanes|=a,S=c.alternate,S!==null&&(S.lanes|=a),gu(c.return,a,e),S=c.child,S=S!==null?S.sibling:null):S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Ds(e,n,a,o){e=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var D=c.type;ui(c.pendingProps.value,S.value)||(e!==null?e.push(D):e=[D])}}else if(c===ue.current){if(S=c.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(Wr):e=[Wr])}c=c.return}return e!==null&&Jf(n,e,a,o),n.flags|=262144,e!==null}function vu(e){for(e=e.firstContext;e!==null;){if(!ui(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Us(e){Rs=e,ya=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Nn(e){return q0(Rs,e)}function _u(e,n){return Rs===null&&Us(e),q0(e,n)}function q0(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ya===null){if(e===null)throw Error(s(308));ya=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else ya=ya.next=n;return a}var R1=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},D1=r.unstable_scheduleCallback,U1=r.unstable_NormalPriority,gn={$$typeof:K,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $f(){return{controller:new R1,data:new Map,refCount:0}}function Vo(e){e.refCount--,e.refCount===0&&D1(U1,function(){e.controller.abort()})}function Y0(e,n){if((e.pendingLanes&4194048)!==0){var a=e.transitionTypes;for(a===null&&(a=e.transitionTypes=[]),e=0;e<n.length;e++){var o=n[e];a.indexOf(o)===-1&&a.push(o)}}}var ko=null;function N1(e){var n=e.transitionTypes;return e.transitionTypes=null,n}var Xo=null,th=0,Ns=0,Er=null;function L1(e,n){if(Xo===null){var a=Xo=[];th=0,Ns=gd(),Er={status:"pending",value:void 0,then:function(o){a.push(o)}}}return th++,n.then(W0,W0),n}function W0(){if(--th===0&&(ko=null,Xo!==null)){Er!==null&&(Er.status="fulfilled");var e=Xo;Xo=null,Ns=0,Er=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function O1(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var j0=At.S;At.S=function(e,n){if(Hv=Z(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&L1(e,n),ko!==null)for(var a=Gr;a!==null;)Y0(a,ko),a=a.next;if(a=e.types,a!==null){for(var o=Gr;o!==null;)Y0(o,a),o=o.next;if(Ns!==0){o=ko,o===null&&(o=ko=[]);for(var c=0;c<a.length;c++){var h=a[c];o.indexOf(h)===-1&&o.push(h)}}}j0!==null&&j0(e,n)};var Ls=dt(null);function eh(){var e=Ls.current;return e!==null?e:Ke.pooledCache}function yu(e,n){n===null?Ct(Ls,Ls.current):Ct(Ls,n.pool)}function Z0(){var e=eh();return e===null?null:{parent:gn._currentValue,pool:e}}var Tr=Error(s(460)),nh=Error(s(474)),xu=Error(s(542)),Su={then:function(){}};function Q0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function K0(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(ji,ji),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,$0(e),e===void 0&&!("reason"in n)?Error(s(600)):e;default:if(typeof n.status=="string")n.then(ji,ji);else{if(e=Ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,$0(e),e}throw Ps=n,Tr}}function Os(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ps=a,Tr):a}}var Ps=null;function J0(){if(Ps===null)throw Error(s(459));var e=Ps;return Ps=null,e}function $0(e){if(e===Tr||e===xu)throw Error(s(483))}var br=null,qo=0;function Mu(e){var n=qo;return qo+=1,br===null&&(br=[]),K0(br,e,n)}function Ya(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Eu(e,n){throw n.$$typeof===O?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function tg(e){function n(nt,j){if(e){var ot=nt.deletions;ot===null?(nt.deletions=[j],nt.flags|=16):ot.push(j)}}function a(nt,j){if(!e)return null;for(;j!==null;)n(nt,j),j=j.sibling;return null}function o(nt){for(var j=new Map;nt!==null;)nt.key===null?j.set(nt.index,nt):j.set(nt.key,nt),nt=nt.sibling;return j}function c(nt,j){return nt=va(nt,j),nt.index=0,nt.sibling=null,nt}function h(nt,j,ot){return nt.index=ot,e?(ot=nt.alternate,ot!==null?(ot=ot.index,ot<j?(nt.flags|=2,j):ot):(nt.flags|=134217730,j)):(nt.flags|=1048576,j)}function S(nt){return e&&nt.alternate===null&&(nt.flags|=134217730),nt}function D(nt,j,ot,Tt){return j===null||j.tag!==6?(j=Yf(ot,nt.mode,Tt),j.return=nt,j):(j=c(j,ot),j.return=nt,j)}function X(nt,j,ot,Tt){var Kt=ot.type;return Kt===V?(nt=ct(nt,j,ot.props.children,Tt,ot.key),Ya(nt,ot),nt):j!==null&&(j.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===ht&&Os(Kt)===j.type)?(j=c(j,ot.props),Ya(j,ot),j.return=nt,j):(j=hu(ot.type,ot.key,ot.props,null,nt.mode,Tt),Ya(j,ot),j.return=nt,j)}function it(nt,j,ot,Tt){return j===null||j.tag!==4||j.stateNode.containerInfo!==ot.containerInfo||j.stateNode.implementation!==ot.implementation?(j=Wf(ot,nt.mode,Tt),j.return=nt,j):(j=c(j,ot.children||[]),j.return=nt,j)}function ct(nt,j,ot,Tt,Kt){return j===null||j.tag!==7?(j=ws(ot,nt.mode,Tt,Kt),j.return=nt,j):(j=c(j,ot),j.return=nt,j)}function bt(nt,j,ot){if(typeof j=="string"&&j!==""||typeof j=="number"||typeof j=="bigint")return j=Yf(""+j,nt.mode,ot),j.return=nt,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case U:return ot=hu(j.type,j.key,j.props,null,nt.mode,ot),Ya(ot,j),ot.return=nt,ot;case A:return j=Wf(j,nt.mode,ot),j.return=nt,j;case ht:return j=Os(j),bt(nt,j,ot)}if(Mt(j)||k(j))return j=ws(j,nt.mode,ot,null),j.return=nt,j;if(typeof j.then=="function")return bt(nt,Mu(j),ot);if(j.$$typeof===K)return bt(nt,_u(nt,j),ot);Eu(nt,j)}return null}function et(nt,j,ot,Tt){var Kt=j!==null?j.key:null;if(typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint")return Kt!==null?null:D(nt,j,""+ot,Tt);if(typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case U:return ot.key===Kt?X(nt,j,ot,Tt):null;case A:return ot.key===Kt?it(nt,j,ot,Tt):null;case ht:return ot=Os(ot),et(nt,j,ot,Tt)}if(Mt(ot)||k(ot))return Kt!==null?null:ct(nt,j,ot,Tt,null);if(typeof ot.then=="function")return et(nt,j,Mu(ot),Tt);if(ot.$$typeof===K)return et(nt,j,_u(nt,ot),Tt);Eu(nt,ot)}return null}function lt(nt,j,ot,Tt,Kt){if(typeof Tt=="string"&&Tt!==""||typeof Tt=="number"||typeof Tt=="bigint")return nt=nt.get(ot)||null,D(j,nt,""+Tt,Kt);if(typeof Tt=="object"&&Tt!==null){switch(Tt.$$typeof){case U:return nt=nt.get(Tt.key===null?ot:Tt.key)||null,X(j,nt,Tt,Kt);case A:return nt=nt.get(Tt.key===null?ot:Tt.key)||null,it(j,nt,Tt,Kt);case ht:return Tt=Os(Tt),lt(nt,j,ot,Tt,Kt)}if(Mt(Tt)||k(Tt))return nt=nt.get(ot)||null,ct(j,nt,Tt,Kt,null);if(typeof Tt.then=="function")return lt(nt,j,ot,Mu(Tt),Kt);if(Tt.$$typeof===K)return lt(nt,j,ot,_u(j,Tt),Kt);Eu(j,Tt)}return null}function Xt(nt,j,ot,Tt){for(var Kt=null,Ue=null,le=j,pe=j=0,yn=null;le!==null&&pe<ot.length;pe++){le.index>pe?(yn=le,le=null):yn=le.sibling;var Ne=et(nt,le,ot[pe],Tt);if(Ne===null){le===null&&(le=yn);break}e&&le&&Ne.alternate===null&&n(nt,le),j=h(Ne,j,pe),Ue===null?Kt=Ne:Ue.sibling=Ne,Ue=Ne,le=yn}if(pe===ot.length)return a(nt,le),Te&&_a(nt,pe),Kt;if(le===null){for(;pe<ot.length;pe++)le=bt(nt,ot[pe],Tt),le!==null&&(j=h(le,j,pe),Ue===null?Kt=le:Ue.sibling=le,Ue=le);return Te&&_a(nt,pe),Kt}for(le=o(le);pe<ot.length;pe++)yn=lt(le,nt,pe,ot[pe],Tt),yn!==null&&(e&&(Ne=yn.alternate,Ne!==null&&le.delete(Ne.key===null?pe:Ne.key)),j=h(yn,j,pe),Ue===null?Kt=yn:Ue.sibling=yn,Ue=yn);return e&&le.forEach(function(fs){return n(nt,fs)}),Te&&_a(nt,pe),Kt}function ae(nt,j,ot,Tt){if(ot==null)throw Error(s(151));for(var Kt=null,Ue=null,le=j,pe=j=0,yn=null,Ne=ot.next();le!==null&&!Ne.done;pe++,Ne=ot.next()){le.index>pe?(yn=le,le=null):yn=le.sibling;var fs=et(nt,le,Ne.value,Tt);if(fs===null){le===null&&(le=yn);break}e&&le&&fs.alternate===null&&n(nt,le),j=h(fs,j,pe),Ue===null?Kt=fs:Ue.sibling=fs,Ue=fs,le=yn}if(Ne.done)return a(nt,le),Te&&_a(nt,pe),Kt;if(le===null){for(;!Ne.done;pe++,Ne=ot.next())Ne=bt(nt,Ne.value,Tt),Ne!==null&&(j=h(Ne,j,pe),Ue===null?Kt=Ne:Ue.sibling=Ne,Ue=Ne);return Te&&_a(nt,pe),Kt}for(le=o(le);!Ne.done;pe++,Ne=ot.next())Ne=lt(le,nt,pe,Ne.value,Tt),Ne!==null&&(e&&(yn=Ne.alternate,yn!==null&&le.delete(yn.key===null?pe:yn.key)),j=h(Ne,j,pe),Ue===null?Kt=Ne:Ue.sibling=Ne,Ue=Ne);return e&&le.forEach(function(pE){return n(nt,pE)}),Te&&_a(nt,pe),Kt}function Se(nt,j,ot,Tt){if(typeof ot=="object"&&ot!==null&&ot.type===V&&ot.key===null&&ot.props.ref===void 0&&(ot=ot.props.children),typeof ot=="object"&&ot!==null){switch(ot.$$typeof){case U:t:{for(var Kt=ot.key;j!==null;){if(j.key===Kt){if(Kt=ot.type,Kt===V){if(j.tag===7){a(nt,j.sibling),Tt=c(j,ot.props.children),Ya(Tt,ot),Tt.return=nt,nt=Tt;break t}}else if(j.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===ht&&Os(Kt)===j.type){a(nt,j.sibling),Tt=c(j,ot.props),Ya(Tt,ot),Tt.return=nt,nt=Tt;break t}a(nt,j);break}else n(nt,j);j=j.sibling}ot.type===V?(Tt=ws(ot.props.children,nt.mode,Tt,ot.key),Ya(Tt,ot),Tt.return=nt,nt=Tt):(Tt=hu(ot.type,ot.key,ot.props,null,nt.mode,Tt),Ya(Tt,ot),Tt.return=nt,nt=Tt)}return S(nt);case A:t:{for(Kt=ot.key;j!==null;){if(j.key===Kt)if(j.tag===4&&j.stateNode.containerInfo===ot.containerInfo&&j.stateNode.implementation===ot.implementation){a(nt,j.sibling),Tt=c(j,ot.children||[]),Tt.return=nt,nt=Tt;break t}else{a(nt,j);break}else n(nt,j);j=j.sibling}Tt=Wf(ot,nt.mode,Tt),Tt.return=nt,nt=Tt}return S(nt);case ht:return ot=Os(ot),Se(nt,j,ot,Tt)}if(Mt(ot))return Xt(nt,j,ot,Tt);if(k(ot)){if(Kt=k(ot),typeof Kt!="function")throw Error(s(150));return ot=Kt.call(ot),ae(nt,j,ot,Tt)}if(typeof ot.then=="function")return Se(nt,j,Mu(ot),Tt);if(ot.$$typeof===K)return Se(nt,j,_u(nt,ot),Tt);Eu(nt,ot)}return typeof ot=="string"&&ot!==""||typeof ot=="number"||typeof ot=="bigint"?(ot=""+ot,j!==null&&j.tag===6?(a(nt,j.sibling),Tt=c(j,ot),Tt.return=nt,nt=Tt):(a(nt,j),Tt=Yf(ot,nt.mode,Tt),Tt.return=nt,nt=Tt),S(nt)):a(nt,j)}return function(nt,j,ot,Tt){try{qo=0;var Kt=Se(nt,j,ot,Tt);return br=null,Kt}catch(le){if(le===Tr||le===xu)throw le;var Ue=ti(29,le,null,nt.mode);return Ue.lanes=Tt,Ue.return=nt,Ue}finally{}}}var zs=tg(!0),eg=tg(!1),Wa=!1;function ih(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ah(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ja(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Za(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Fe&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=fu(e),B0(e,null,a),n}return cu(e,o,n,a),fu(e)}function Yo(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,at(e,a)}}function sh(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?c=h=S:h=h.next=S,a=a.next}while(a!==null);h===null?c=h=n:h=h.next=n}else c=h=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var rh=!1;function Wo(){if(rh){var e=Er;if(e!==null)throw e}}function jo(e,n,a,o){rh=!1;var c=e.updateQueue;Wa=!1;var h=c.firstBaseUpdate,S=c.lastBaseUpdate,D=c.shared.pending;if(D!==null){c.shared.pending=null;var X=D,it=X.next;X.next=null,S===null?h=it:S.next=it,S=X;var ct=e.alternate;ct!==null&&(ct=ct.updateQueue,D=ct.lastBaseUpdate,D!==S&&(D===null?ct.firstBaseUpdate=it:D.next=it,ct.lastBaseUpdate=X))}if(h!==null){var bt=c.baseState;S=0,ct=it=X=null,D=h;do{var et=D.lane&-536870913,lt=et!==D.lane;if(lt?(De&et)===et:(o&et)===et){et!==0&&et===Ns&&(rh=!0),ct!==null&&(ct=ct.next={lane:0,tag:D.tag,payload:D.payload,callback:null,next:null});t:{var Xt=e,ae=D;et=n;var Se=a;switch(ae.tag){case 1:if(Xt=ae.payload,typeof Xt=="function"){bt=Xt.call(Se,bt,et);break t}bt=Xt;break t;case 3:Xt.flags=Xt.flags&-65537|128;case 0:if(Xt=ae.payload,et=typeof Xt=="function"?Xt.call(Se,bt,et):Xt,et==null)break t;bt=P({},bt,et);break t;case 2:Wa=!0}}et=D.callback,et!==null&&(e.flags|=64,lt&&(e.flags|=8192),lt=c.callbacks,lt===null?c.callbacks=[et]:lt.push(et))}else lt={lane:et,tag:D.tag,payload:D.payload,callback:D.callback,next:null},ct===null?(it=ct=lt,X=bt):ct=ct.next=lt,S|=et;if(D=D.next,D===null){if(D=c.shared.pending,D===null)break;lt=D,D=lt.next,lt.next=null,c.lastBaseUpdate=lt,c.shared.pending=null}}while(!0);ct===null&&(X=bt),c.baseState=X,c.firstBaseUpdate=it,c.lastBaseUpdate=ct,h===null&&(c.shared.lanes=0),ns|=S,e.lanes=S,e.memoizedState=bt}}function ng(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function ig(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ng(a[e],n)}var Qa=dt(null),Tu=dt(0);function ag(e,n){e=ba,Ct(Tu,e),Ct(Qa,n),ba=e|n.baseLanes}function oh(){Ct(Tu,ba),Ct(Qa,Qa.current)}function lh(){ba=Tu.current,ut(Qa),ut(Tu)}var Ln=dt(null),Hn=null;function Ka(e){var n=e.alternate;Ct(On,On.current&1),Ct(Ln,e),Hn===null&&(n===null||Qa.current!==null||n.memoizedState!==null)&&(Hn=e)}function uh(e){Ct(On,On.current),Ct(Ln,e),Hn===null&&(Hn=e)}function sg(e){e.tag===22?(Ct(On,On.current),Ct(Ln,e),Hn===null&&(Hn=e)):Ja()}function Ja(){Ct(On,On.current),Ct(Ln,Ln.current)}function ci(e){ut(Ln),Hn===e&&(Hn=null),ut(On)}var On=dt(0);function Zo(e,n){Ct(Ln,Ln.current),Ct(On,n)}function ch(e){ut(On),ut(Ln),Hn===e&&(Hn=null)}function bu(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Nd(a)||Ld(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Sa=0,xe=null,Ze=null,vn=null,Au=!1,Ar=!1,Is=!1,wu=0,Qo=0,wr=null,P1=0;function cn(){throw Error(s(321))}function fh(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!ui(e[a],n[a]))return!1;return!0}function hh(e,n,a,o,c,h){return Sa=h,xe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,At.H=e===null||e.memoizedState===null?Vg:kg,Is=!1,h=a(o,c),Is=!1,Ar&&(h=og(n,a,o,c)),rg(e),h}function rg(e){At.H=Ou;var n=Ze!==null&&Ze.next!==null;if(Sa=0,vn=Ze=xe=null,Au=!1,Qo=0,wr=null,n)throw Error(s(300));e===null||_n||(e=e.dependencies,e!==null&&vu(e)&&(_n=!0))}function og(e,n,a,o){xe=e;var c=0;do{if(Ar&&(wr=null),Qo=0,Ar=!1,25<=c)throw Error(s(301));if(c+=1,vn=Ze=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}At.H=k1,h=n(a,o)}while(Ar);return h}function z1(){var e=At.H,n=e.useState()[0];return n=typeof n.then=="function"?Ko(n):n,e=e.useState()[0],(Ze!==null?Ze.memoizedState:null)!==e&&(xe.flags|=1024),n}function dh(){var e=wu!==0;return wu=0,e}function ph(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function mh(e){if(Au){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Au=!1}Sa=0,vn=Ze=xe=null,Ar=!1,Qo=wu=0,wr=null}function Zn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?xe.memoizedState=vn=e:vn=vn.next=e,vn}function dn(){if(Ze===null){var e=xe.alternate;e=e!==null?e.memoizedState:null}else e=Ze.next;var n=vn===null?xe.memoizedState:vn.next;if(n!==null)vn=n,Ze=e;else{if(e===null)throw xe.alternate===null?Error(s(467)):Error(s(310));Ze=e,e={memoizedState:Ze.memoizedState,baseState:Ze.baseState,baseQueue:Ze.baseQueue,queue:Ze.queue,next:null},vn===null?xe.memoizedState=vn=e:vn=vn.next=e}return vn}function Cu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ko(e){var n=Qo;return Qo+=1,wr===null&&(wr=[]),e=K0(wr,e,n),n=xe,(vn===null?n.memoizedState:vn.next)===null&&(n=n.alternate,At.H=n===null||n.memoizedState===null?Vg:kg),e}function Ru(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ko(e);if(e.$$typeof===J)return;if(e.$$typeof===K)return Nn(e)}throw Error(s(438,String(e)))}function gh(e){var n=null,a=xe.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=xe.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Cu(),xe.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=ne;return n.index++,a}function Ma(e,n){return typeof n=="function"?n(e):n}function Du(e){var n=dn();return vh(n,Ze,e)}function vh(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=e.baseQueue,h=o.pending;if(h!==null){if(c!==null){var S=c.next;c.next=h.next,h.next=S}n.baseQueue=c=h,o.pending=null}if(h=e.baseState,c===null)e.memoizedState=h;else{n=c.next;var D=S=null,X=null,it=n,ct=!1;do{var bt=it.lane&-536870913;if(bt!==it.lane?(De&bt)===bt:(Sa&bt)===bt){var et=it.revertLane;if(et===0)X!==null&&(X=X.next={lane:0,revertLane:0,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null}),bt===Ns&&(ct=!0);else if((Sa&et)===et){it=it.next,et===Ns&&(ct=!0);continue}else bt={lane:0,revertLane:it.revertLane,gesture:null,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},X===null?(D=X=bt,S=h):X=X.next=bt,xe.lanes|=et,ns|=et;bt=it.action,Is&&a(h,bt),h=it.hasEagerState?it.eagerState:a(h,bt)}else et={lane:bt,revertLane:it.revertLane,gesture:it.gesture,action:it.action,hasEagerState:it.hasEagerState,eagerState:it.eagerState,next:null},X===null?(D=X=et,S=h):X=X.next=et,xe.lanes|=bt,ns|=bt;it=it.next}while(it!==null&&it!==n);if(X===null?S=h:X.next=D,!ui(h,e.memoizedState)&&(_n=!0,ct&&(a=Er,a!==null)))throw a;e.memoizedState=h,e.baseState=S,e.baseQueue=X,o.lastRenderedState=h}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function _h(e){var n=dn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,h=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do h=e(h,S.action),S=S.next;while(S!==c);ui(h,n.memoizedState)||(_n=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function lg(e,n,a){var o=xe,c=dn(),h=Te;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var S=!ui((Ze||c).memoizedState,a);if(S&&(c.memoizedState=a,_n=!0),c=c.queue,Sh(fg.bind(null,o,c,e),[e]),e=c.getSnapshot!==n||S||vn!==null&&(vn.memoizedState.tag&1)!==0,Cr(e?9:8,{destroy:void 0},cg.bind(null,o,c,a,n),null),e){if(o.flags|=2048,Ke===null)throw Error(s(349));h||(Sa&127)!==0||ug(o,n,a)}return a}function ug(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=xe.updateQueue,n===null?(n=Cu(),xe.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function cg(e,n,a,o){n.value=a,n.getSnapshot=o,hg(n)&&dg(e)}function fg(e,n,a){return a(function(){hg(n)&&dg(e)})}function hg(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!ui(e,a)}catch{return!0}}function dg(e){var n=As(e,2);n!==null&&ai(n,e,2)}function yh(e){var n=Zn();if(typeof e=="function"){var a=e;if(e=a(),Is){En(!0);try{a()}finally{En(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:e},n}function pg(e,n,a,o){return e.baseState=a,vh(e,Ze,typeof o=="function"?o:Ma)}function I1(e,n,a,o,c){if(Lu(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){h.listeners.push(S)}};At.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,mg(n,h)):(h.next=a.next,n.pending=a.next=h)}}function mg(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var h=At.T,S={};S.types=h!==null?h.types:null,At.T=S;try{var D=a(c,o),X=At.S;X!==null&&X(S,D),gg(e,n,D)}catch(it){xh(e,n,it)}finally{h!==null&&S.types!==null&&(h.types=S.types),At.T=h}}else try{h=a(c,o),gg(e,n,h)}catch(it){xh(e,n,it)}}function gg(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){vg(e,n,o)},function(o){return xh(e,n,o)}):vg(e,n,a)}function vg(e,n,a){n.status="fulfilled",n.value=a,_g(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,mg(e,a)))}function xh(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,_g(n),n=n.next;while(n!==o)}e.action=null}function _g(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function yg(e,n){return n}function xg(e,n){if(Te){var a=Ke.formState;if(a!==null){t:{var o=xe;if(Te){if($e){e:{for(var c=$e,h=Ai;c.nodeType!==8;){if(!h){c=null;break e}if(c=Ci(c.nextSibling),c===null){c=null;break e}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){$e=Ci(c.nextSibling),o=c.data==="F!";break t}}Xa(o)}o=!1}o&&(n=a[0])}}return a=Zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:yg,lastRenderedState:n},a.queue=o,a=Fg.bind(null,xe,o),o.dispatch=a,o=yh(!1),h=Ah.bind(null,xe,!1,o.queue),o=Zn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=I1.bind(null,xe,c,h,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function Sg(e){var n=dn();return Mg(n,Ze,e)}function Mg(e,n,a){if(n=vh(e,n,yg)[0],e=Du(Ma)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Ko(n)}catch(S){throw S===Tr?xu:S}else o=n;n=dn();var c=n.queue,h=c.dispatch;return a!==n.memoizedState&&(xe.flags|=2048,Cr(9,{destroy:void 0},B1.bind(null,c,a),null)),[o,h,e]}function B1(e,n){e.action=n}function Eg(e){var n=dn(),a=Ze;if(a!==null)return Mg(n,a,e);dn(),n=n.memoizedState,a=dn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function Cr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=xe.updateQueue,n===null&&(n=Cu(),xe.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Tg(){return dn().memoizedState}function Uu(e,n,a,o){var c=Zn();xe.flags|=e,c.memoizedState=Cr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Nu(e,n,a,o){var c=dn();o=o===void 0?null:o;var h=c.memoizedState.inst;Ze!==null&&o!==null&&fh(o,Ze.memoizedState.deps)?c.memoizedState=Cr(n,h,a,o):(xe.flags|=e,c.memoizedState=Cr(1|n,h,a,o))}function bg(e,n){Uu(8390656,8,e,n)}function Sh(e,n){Nu(2048,8,e,n)}function F1(e){xe.flags|=4;var n=xe.updateQueue;if(n===null)n=Cu(),xe.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Ag(e){var n=dn().memoizedState;return F1({ref:n,nextImpl:e}),function(){if((Fe&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function wg(e,n){return Nu(4,2,e,n)}function Cg(e,n){return Nu(4,4,e,n)}function Rg(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Dg(e,n,a){a=a!=null?a.concat([e]):null,Nu(4,4,Rg.bind(null,n,e),a)}function Mh(){}function Ug(e,n){var a=dn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&fh(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Ng(e,n){var a=dn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&fh(n,o[1]))return o[0];if(o=e(),Is){En(!0);try{e()}finally{En(!1)}}return a.memoizedState=[o,n],o}function Eh(e,n,a){return a===void 0||(Sa&1073741824)!==0&&(De&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Vv(),xe.lanes|=e,ns|=e,a)}function Lg(e,n,a,o){return ui(a,n)?a:Qa.current!==null?(e=Eh(e,a,o),ui(e,n)||(_n=!0),e):(Sa&106)===0||(Sa&1073741824)!==0&&(De&261930)===0?(_n=!0,e.memoizedState=a):(e=Vv(),xe.lanes|=e,ns|=e,n)}function Og(e,n,a,o,c){var h=Lt.p;Lt.p=h!==0&&8>h?h:8;var S=At.T,D={};D.types=S!==null?S.types:null,At.T=D,Ah(e,!1,n,a);try{var X=c(),it=At.S;if(it!==null&&it(D,X),X!==null&&typeof X=="object"&&typeof X.then=="function"){var ct=O1(X,o);Jo(e,n,ct,pi(e))}else Jo(e,n,o,pi(e))}catch(bt){Jo(e,n,{then:function(){},status:"rejected",reason:bt},pi())}finally{Lt.p=h,S!==null&&D.types!==null&&(S.types=D.types),At.T=S}}function H1(){}function Th(e,n,a,o){if(e.tag!==5)throw Error(s(476));var c=Pg(e).queue;Og(e,c,n,G,a===null?H1:function(){return zg(e),a(o)})}function Pg(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:G,baseState:G,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:G},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ma,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function zg(e){var n=Pg(e);n.next===null&&(n=e.alternate.memoizedState),Jo(e,n.next.queue,{},pi())}function bh(){return Nn(Wr)}function Ig(){return dn().memoizedState}function Bg(){return dn().memoizedState}function G1(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=pi();e=ja(a);var o=Za(n,e,a);o!==null&&(ai(o,n,a),Yo(o,n,a)),n={cache:$f()},e.payload=n;return}n=n.return}}function V1(e,n,a){var o=pi();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Lu(e)?Hg(n,a):(a=Xf(e,n,a,o),a!==null&&(ai(a,e,o),Gg(a,n,o)))}function Fg(e,n,a){var o=pi();Jo(e,n,a,o)}function Jo(e,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Lu(e))Hg(n,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var S=n.lastRenderedState,D=h(S,a);if(c.hasEagerState=!0,c.eagerState=D,ui(D,S))return cu(e,n,c,0),Ke===null&&uu(),!1}catch{}finally{}if(a=Xf(e,n,c,o),a!==null)return ai(a,e,o),Gg(a,n,o),!0}return!1}function Ah(e,n,a,o){if(o={lane:2,revertLane:gd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Lu(e)){if(n)throw Error(s(479))}else n=Xf(e,a,o,2),n!==null&&ai(n,e,2)}function Lu(e){var n=e.alternate;return e===xe||n!==null&&n===xe}function Hg(e,n){Ar=Au=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Gg(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,at(e,a)}}var Ou={readContext:Nn,use:Ru,useCallback:cn,useContext:cn,useEffect:cn,useImperativeHandle:cn,useLayoutEffect:cn,useInsertionEffect:cn,useMemo:cn,useReducer:cn,useRef:cn,useState:cn,useDebugValue:cn,useDeferredValue:cn,useTransition:cn,useSyncExternalStore:cn,useId:cn,useHostTransitionStatus:cn,useFormState:cn,useActionState:cn,useOptimistic:cn,useMemoCache:cn,useCacheRefresh:cn,useEffectEvent:cn},Vg={readContext:Nn,use:Ru,useCallback:function(e,n){return Zn().memoizedState=[e,n===void 0?null:n],e},useContext:Nn,useEffect:bg,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Uu(4194308,4,Rg.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Uu(4194308,4,e,n)},useInsertionEffect:function(e,n){Uu(4,2,e,n)},useMemo:function(e,n){var a=Zn();n=n===void 0?null:n;var o=e();if(Is){En(!0);try{e()}finally{En(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Zn();if(a!==void 0){var c=a(n);if(Is){En(!0);try{a(n)}finally{En(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=V1.bind(null,xe,e),[o.memoizedState,e]},useRef:function(e){var n=Zn();return e={current:e},n.memoizedState=e},useState:function(e){e=yh(e);var n=e.queue,a=Fg.bind(null,xe,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Mh,useDeferredValue:function(e,n){var a=Zn();return Eh(a,e,n)},useTransition:function(){var e=yh(!1);return e=Og.bind(null,xe,e.queue,!0,!1),Zn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=xe,c=Zn();if(Te){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Ke===null)throw Error(s(349));(De&127)!==0||ug(o,n,a)}c.memoizedState=a;var h={value:a,getSnapshot:n};return c.queue=h,bg(fg.bind(null,o,h,e),[e]),o.flags|=2048,Cr(9,{destroy:void 0},cg.bind(null,o,h,a,n),null),a},useId:function(){var e=Zn(),n=Ke.identifierPrefix;if(Te){var a=Qi,o=Zi;a=(o&~(1<<32-Bn(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=wu++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=P1++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:bh,useFormState:xg,useActionState:xg,useOptimistic:function(e){var n=Zn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ah.bind(null,xe,!0,a),a.dispatch=n,[e,n]},useMemoCache:gh,useCacheRefresh:function(){return Zn().memoizedState=G1.bind(null,xe)},useEffectEvent:function(e){var n=Zn(),a={impl:e};return n.memoizedState=a,function(){if((Fe&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},kg={readContext:Nn,use:Ru,useCallback:Ug,useContext:Nn,useEffect:Sh,useImperativeHandle:Dg,useInsertionEffect:wg,useLayoutEffect:Cg,useMemo:Ng,useReducer:Du,useRef:Tg,useState:function(){return Du(Ma)},useDebugValue:Mh,useDeferredValue:function(e,n){var a=dn();return Lg(a,Ze.memoizedState,e,n)},useTransition:function(){var e=Du(Ma)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:Ko(e),n]},useSyncExternalStore:lg,useId:Ig,useHostTransitionStatus:bh,useFormState:Sg,useActionState:Sg,useOptimistic:function(e,n){var a=dn();return pg(a,Ze,e,n)},useMemoCache:gh,useCacheRefresh:Bg,useEffectEvent:Ag},k1={readContext:Nn,use:Ru,useCallback:Ug,useContext:Nn,useEffect:Sh,useImperativeHandle:Dg,useInsertionEffect:wg,useLayoutEffect:Cg,useMemo:Ng,useReducer:_h,useRef:Tg,useState:function(){return _h(Ma)},useDebugValue:Mh,useDeferredValue:function(e,n){var a=dn();return Ze===null?Eh(a,e,n):Lg(a,Ze.memoizedState,e,n)},useTransition:function(){var e=_h(Ma)[0],n=dn().memoizedState;return[typeof e=="boolean"?e:Ko(e),n]},useSyncExternalStore:lg,useId:Ig,useHostTransitionStatus:bh,useFormState:Eg,useActionState:Eg,useOptimistic:function(e,n){var a=dn();return Ze!==null?pg(a,Ze,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:gh,useCacheRefresh:Bg,useEffectEvent:Ag};function wh(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:P({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Ch={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=pi(),c=ja(o);c.payload=n,a!=null&&(c.callback=a),n=Za(e,c,o),n!==null&&(ai(n,e,o),Yo(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=pi(),c=ja(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Za(e,c,o),n!==null&&(ai(n,e,o),Yo(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=pi(),o=ja(a);o.tag=2,n!=null&&(o.callback=n),n=Za(e,o,a),n!==null&&(ai(n,e,a),Yo(n,e,a))}};function Xg(e,n,a,o,c,h,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,S):n.prototype&&n.prototype.isPureReactComponent?!Bo(a,o)||!Bo(c,h):!0}function qg(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&Ch.enqueueReplaceState(n,n.state,null)}function Bs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=P({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Yg(e){lu(e)}function Wg(e){console.error(e)}function jg(e){lu(e)}function Pu(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Zg(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Rh(e,n,a){return a=ja(a),a.tag=3,a.payload={element:null},a.callback=function(){Pu(e,n)},a}function Qg(e){return e=ja(e),e.tag=3,e}function Kg(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;e.payload=function(){return c(h)},e.callback=function(){Zg(n,a,o)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){Zg(n,a,o),typeof c!="function"&&(is===null?is=new Set([this]):is.add(this));var D=o.stack;this.componentDidCatch(o.value,{componentStack:D!==null?D:""})})}function X1(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&Ds(n,a,c,!0),a=Ln.current,a!==null){switch(a.tag){case 31:case 13:case 19:return Hn===null?nc():a.alternate===null&&fn===0&&(fn=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===Su?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),dd(e,o,c)),!1;case 22:return a.flags|=65536,o===Su?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),dd(e,o,c)),!1}throw Error(s(435,a.tag))}return dd(e,o,c),nc(),!1}if(Te)return n=Ln.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==Zf&&(e=Error(s(422),{cause:o}),Go(Ei(e,a)))):(o!==Zf&&(n=Error(s(423),{cause:o}),Go(Ei(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=Ei(o,a),c=Rh(e.stateNode,o,c),sh(e,c),fn!==4&&(fn=2)),!1;var h=Error(s(520),{cause:o});if(h=Ei(h,a),rl===null?rl=[h]:rl.push(h),fn!==4&&(fn=2),n===null)return!0;o=Ei(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Rh(a.stateNode,o,e),sh(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(is===null||!is.has(h))))return a.flags|=65536,c&=-c,a.lanes|=c,c=Qg(c),Kg(c,e,a,o),sh(a,c),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Dh=Error(s(461)),_n=!1;function bn(e,n,a,o){n.child=e===null?eg(n,null,a,o):zs(n,e.child,a,o)}function Jg(e,n,a,o,c){a=a.render;var h=n.ref;if("ref"in o){var S={};for(var D in o)D!=="ref"&&(S[D]=o[D])}else S=o;return Us(n),o=hh(e,n,a,S,h,c),D=dh(),e!==null&&!_n?(ph(e,n,c),Ea(e,n,c)):(Te&&D&&pu(n),n.flags|=1,bn(e,n,o,c),n.child)}function $g(e,n,a,o,c){if(e===null){var h=a.type;return typeof h=="function"&&!qf(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,tv(e,n,h,o,c)):(e=hu(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!Bh(e,c)){var S=h.memoizedProps;if(a=a.compare,a=a!==null?a:Bo,a(S,o)&&e.ref===n.ref)return Ea(e,n,c)}return n.flags|=1,e=va(h,o),e.ref=n.ref,e.return=n,n.child=e}function tv(e,n,a,o,c){if(e!==null){var h=e.memoizedProps;if(Bo(h,o)&&e.ref===n.ref)if(_n=!1,n.pendingProps=o=h,Bh(e,c))(e.flags&131072)!==0&&(_n=!0);else return n.lanes=e.lanes,Ea(e,n,c)}return Uh(e,n,a,o,c)}function ev(e,n,a,o){var c=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~h}else o=0,n.child=null;return nv(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&yu(n,h!==null?h.cachePool:null),h!==null?ag(n,h):oh(),sg(n);else return o=n.lanes=536870912,nv(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(yu(n,h.cachePool),ag(n,h),Ja(),n.memoizedState=null):(e!==null&&yu(n,null),oh(),Ja());return bn(e,n,c,a),n.child}function $o(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function nv(e,n,a,o,c){var h=eh();return h=h===null?null:{parent:gn._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&yu(n,null),oh(),sg(n),e!==null&&Ds(e,n,o,!0),n.childLanes=c,null}function zu(e,n){return n=Iu({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function iv(e,n,a){return zs(n,e.child,null,a),e=zu(n,n.pendingProps),e.flags|=2,ci(n),n.memoizedState=null,e}function q1(e,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Te){if(o.mode==="hidden")return e=zu(n,o),n.lanes=536870912,e.memoizedState={baseLanes:0,cachePool:null},$o(null,e);if(uh(n),(e=$e)?(e=R_(e,Ai),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Va!==null?{id:Zi,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},a=H0(e),a.return=n,n.child=a,Cn=n,$e=null)):e=null,e===null)throw Xa(n);return n.lanes=536870912,null}return zu(n,o)}var h=e.memoizedState;if(h!==null){var S=h.dehydrated;if(uh(n),c)if(n.flags&256)n.flags&=-257,n=iv(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(_n||Ds(e,n,a,!1),c=(a&e.childLanes)!==0,_n||c){if(Qa.current===null){if(o=Ke,o!==null&&(S=mt(o,a),S!==0&&S!==h.retryLane))throw h.retryLane=S,As(e,S),ai(o,e,S),Dh;nc()}n=iv(e,n,a)}else e=h.treeContext,$e=Ci(S.nextSibling),Cn=n,Te=!0,ka=null,Ai=!1,e!==null&&k0(n,e),n=zu(n,o),n.flags|=134221824;return n}return e=va(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Rr(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Uh(e,n,a,o,c){return Us(n),a=hh(e,n,a,o,void 0,c),o=dh(),e!==null&&!_n?(ph(e,n,c),Ea(e,n,c)):(Te&&o&&pu(n),n.flags|=1,bn(e,n,a,c),n.child)}function av(e,n,a,o,c,h){return Us(n),n.updateQueue=null,a=og(n,o,a,c),rg(e),o=dh(),e!==null&&!_n?(ph(e,n,h),Ea(e,n,h)):(Te&&o&&pu(n),n.flags|=1,bn(e,n,a,h),n.child)}function sv(e,n,a,o,c){if(Us(n),n.stateNode===null){var h=yr,S=a.contextType;typeof S=="object"&&S!==null&&(h=Nn(S)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=Ch,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},ih(n),S=a.contextType,h.context=typeof S=="object"&&S!==null?Nn(S):yr,h.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(wh(n,a,S,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(S=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),S!==h.state&&Ch.enqueueReplaceState(h,h.state,null),jo(n,o,h,c),Wo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var D=n.memoizedProps,X=Bs(a,D);h.props=X;var it=h.context,ct=a.contextType;S=yr,typeof ct=="object"&&ct!==null&&(S=Nn(ct));var bt=a.getDerivedStateFromProps;ct=typeof bt=="function"||typeof h.getSnapshotBeforeUpdate=="function",D=n.pendingProps!==D,ct||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(D||it!==S)&&qg(n,h,o,S),Wa=!1;var et=n.memoizedState;h.state=et,jo(n,o,h,c),Wo(),it=n.memoizedState,D||et!==it||Wa?(typeof bt=="function"&&(wh(n,a,bt,o),it=n.memoizedState),(X=Wa||Xg(n,a,X,o,et,it,S))?(ct||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=it),h.props=o,h.state=it,h.context=S,o=X):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,ah(e,n),S=n.memoizedProps,ct=Bs(a,S),h.props=ct,bt=n.pendingProps,et=h.context,it=a.contextType,X=yr,typeof it=="object"&&it!==null&&(X=Nn(it)),D=a.getDerivedStateFromProps,(it=typeof D=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(S!==bt||et!==X)&&qg(n,h,o,X),Wa=!1,et=n.memoizedState,h.state=et,jo(n,o,h,c),Wo();var lt=n.memoizedState;S!==bt||et!==lt||Wa||e!==null&&e.dependencies!==null&&vu(e.dependencies)?(typeof D=="function"&&(wh(n,a,D,o),lt=n.memoizedState),(ct=Wa||Xg(n,a,ct,o,et,lt,X)||e!==null&&e.dependencies!==null&&vu(e.dependencies))?(it||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,lt,X),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,lt,X)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=lt),h.props=o,h.state=lt,h.context=X,o=ct):(typeof h.componentDidUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&et===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Rr(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=zs(n,e.child,null,c),n.child=zs(n,null,a,c)):bn(e,n,a,c),n.memoizedState=h.state,e=n.child):e=Ea(e,n,c),e}function rv(e,n,a,o){return Cs(),n.flags|=256,bn(e,n,a,o),n.child}var Nh={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Lh(e){return{baseLanes:e,cachePool:Z0()}}function Oh(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=di),e}function ov(e,n,a){var o=n.pendingProps,c=!1,h=(n.flags&128)!==0,S;if((S=h)||(S=e!==null&&e.memoizedState===null?!1:(On.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Te){if(c?Ka(n):Ja(),(e=$e)?(e=R_(e,Ai),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Va!==null?{id:Zi,overflow:Qi}:null,retryLane:536870912,hydrationErrors:null},a=H0(e),a.return=n,n.child=a,Cn=n,$e=null)):e=null,e===null)throw Xa(n);return Ld(e)?n.lanes=32:n.lanes=536870912,null}return h=o.children,o=o.fallback,c?(Ja(),c=n.mode,h=Iu({mode:"hidden",children:h},c),o=ws(o,c,a,null),h.return=n,o.return=n,h.sibling=o,n.child=h,o=n.child,o.memoizedState=Lh(a),o.childLanes=Oh(e,S,a),n.memoizedState=Nh,$o(null,o)):(Ka(n),Ph(n,h))}var D=e.memoizedState;if(D!==null){var X=D.dehydrated;if(X!==null)return Y1(e,n,h,S,o,X,D,a)}return c?(Ja(),c=o.fallback,h=n.mode,D=e.child,X=D.sibling,o=va(D,{mode:"hidden",children:o.children}),o.subtreeFlags=D.subtreeFlags&1206910976,X!==null?c=va(X,c):(c=ws(c,h,a,null),c.flags|=2),c.return=n,o.return=n,o.sibling=c,n.child=o,$o(null,o),o=n.child,c=e.child.memoizedState,c===null?c=Lh(a):(h=c.cachePool,h!==null?(D=gn._currentValue,h=h.parent!==D?{parent:D,pool:D}:h):h=Z0(),c={baseLanes:c.baseLanes|a,cachePool:h}),o.memoizedState=c,o.childLanes=Oh(e,S,a),n.memoizedState=Nh,$o(e.child,o)):(Ka(n),a=e.child,e=a.sibling,a=va(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Ph(e,n){return n=Iu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Iu(e,n){return e=ti(22,e,null,n),e.lanes=0,e}function Bu(e,n,a){return zs(n,e.child,null,a),e=Ph(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function Y1(e,n,a,o,c,h,S,D){if(a)return n.flags&256?(Ka(n),n.flags&=-257,Bu(e,n,D)):n.memoizedState!==null?(Ja(),n.child=e.child,n.flags|=128,null):(Ja(),h=c.fallback,S=n.mode,c=Iu({mode:"visible",children:c.children},S),h=ws(h,S,D,null),h.flags|=2,c.return=n,h.return=n,c.sibling=h,n.child=c,zs(n,e.child,null,D),c=n.child,c.memoizedState=Lh(D),c.childLanes=Oh(e,o,D),n.memoizedState=Nh,$o(null,c));if(Ka(n),Ld(h)){if(o=h.nextSibling&&h.nextSibling.dataset,o)var X=o.dgst;return o=X,o!==""&&(c=Error(s(419)),c.stack="",c.digest=o,Go({value:c,source:null,stack:null})),Bu(e,n,D)}if(_n||Ds(e,n,D,!1),o=(D&e.childLanes)!==0,_n||o){if(Qa.current!==null)return Bu(e,n,D);if(o=Ke,o!==null&&(c=mt(o,D),c!==0&&c!==S.retryLane))throw S.retryLane=c,As(e,c),ai(o,e,c),Dh;return Nd(h)||nc(),Bu(e,n,D)}return Nd(h)?(n.flags|=192,n.child=e.child,null):(e=S.treeContext,$e=Ci(h.nextSibling),Cn=n,Te=!0,ka=null,Ai=!1,e!==null&&k0(n,e),n=Ph(n,c.children),n.flags|=134221824,n)}function lv(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),gu(e.return,n,a)}function uv(e){for(var n=null;e!==null;){var a=e.alternate;a!==null&&bu(a)===null&&(n=e),e=e.sibling}return n}function Fu(e,n,a,o,c,h){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:h}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=o,S.tail=a,S.tailMode=c,S.treeForkCount=h)}function zh(e){var n=e.child;for(e.child=null;n!==null;){var a=n.sibling;n.sibling=e.child,e.child=n,n=a}}function Ih(e,n,a){var o=n.pendingProps,c=o.revealOrder,h=o.tail;o=o.children;var S=On.current;if(n.flags&128)return Zo(n,S),null;var D=(S&2)!==0;if(D?(S=S&1|2,n.flags|=128):S&=1,Zo(n,S),c==="backwards"&&e!==null?(zh(e),bn(e,n,o,a),zh(e)):bn(e,n,o,a),o=Te?Ho:0,!D&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lv(e,a,n);else if(e.tag===19)lv(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"backwards":a=uv(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null,zh(n)),Fu(n,!0,c,null,h,o);break;case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&bu(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Fu(n,!0,a,null,h,o);break;case"together":Fu(n,!1,null,null,void 0,o);break;case"independent":n.memoizedState=null;break;default:a=uv(n.child),a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Fu(n,!1,c,a,h,o)}return n.child}function cv(e,n,a){var o=n.pendingProps;return qa(n,n.type,o.value),bn(e,n,o.children,a),n.child}function Ea(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ns|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ds(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=va(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=va(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Bh(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&vu(e)))}function W1(e,n,a){switch(n.tag){case 3:F(n,n.stateNode.containerInfo),qa(n,gn,e.memoizedState.cache),Cs();break;case 27:case 5:st(n);break;case 4:F(n,n.stateNode.containerInfo);break;case 10:qa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,uh(n),null;break;case 13:var o=n.memoizedState;if(o!==null){if(o.dehydrated!==null)return Ka(n),n.flags|=128,null;o=Ds(e,n,a,!1);var c=n.child.childLanes;return o||(a&c)!==0?ov(e,n,a):(Ka(n),e=Ea(e,n,a),e!==null?e.sibling:null)}Ka(n);break;case 19:if(n.flags&128)return Ih(e,n,a);if(c=(e.flags&128)!==0,o=(a&n.childLanes)!==0,o||(Ds(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return Ih(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Zo(n,On.current),o)break;return null;case 22:return n.lanes=0,ev(e,n,a,n.pendingProps);case 24:qa(n,gn,e.memoizedState.cache)}return Ea(e,n,a)}function fv(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)_n=!0;else{if(!Bh(e,a)&&(n.flags&128)===0)return _n=!1,W1(e,n,a);_n=(e.flags&131072)!==0}else _n=!1,Te&&(n.flags&1048576)!==0&&V0(n,Ho,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=Os(n.elementType),n.type=e,typeof e=="function")qf(e)?(o=Bs(e,o),n.tag=1,n=sv(null,n,e,o,a)):(n.tag=0,n=Uh(null,n,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===W){n.tag=11,n=Jg(null,n,e,o,a);break t}else if(c===$){n.tag=14,n=$g(null,n,e,o,a);break t}else if(c===K){n.tag=10,n.type=e,n=cv(null,n,a);break t}}throw n=xt(e)||e,Error(s(306,n,""))}}return n;case 0:return Uh(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=Bs(o,n.pendingProps),sv(e,n,o,c,a);case 3:t:{if(F(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;c=h.element,ah(e,n),jo(n,o,null,a);var S=n.memoizedState;if(o=S.cache,qa(n,gn,o),o!==h.cache&&Jf(n,[gn],a,!0),Wo(),o=S.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=rv(e,n,o,a);break t}else if(o!==c){c=Ei(Error(s(424)),n),Go(c),n=rv(e,n,o,a);break t}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for($e=Ci(e.firstChild),Cn=n,Te=!0,ka=null,Ai=!0,a=eg(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Cs(),o===c){n=Ea(e,n,a);break t}bn(e,n,o,a)}n=n.child}return n;case 26:return Rr(e,n),e===null?(a=z_(n.type,null,n.pendingProps,null))?n.memoizedState=a:Te||(n.stateNode=m_(n.type,n.pendingProps,re.current,n)):n.memoizedState=z_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return st(n),e===null&&Te&&(o=n.stateNode=N_(n.type,n.pendingProps,re.current),Cn=n,Ai=!0,c=$e,rs(n.type)?(Od=c,$e=Ci(o.firstChild)):$e=c),bn(e,n,n.pendingProps.children,a),Rr(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Te&&((c=o=$e)&&(o=GM(o,n.type,n.pendingProps,Ai),o!==null?(n.stateNode=o,Cn=n,$e=Ci(o.firstChild),Ai=!1,c=!0):c=!1),c||Xa(n)),st(n),c=n.type,h=n.pendingProps,S=e!==null?e.memoizedProps:null,o=h.children,bd(c,h)?o=null:S!==null&&bd(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=hh(e,n,z1,null,null,a),Wr._currentValue=c),Rr(e,n),bn(e,n,o,a),n.child;case 6:return e===null&&Te&&((e=a=$e)&&(a=VM(a,n.pendingProps,Ai),a!==null?(n.stateNode=a,Cn=n,$e=null,e=!0):e=!1),e||Xa(n)),null;case 13:return ov(e,n,a);case 4:return F(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=zs(n,null,o,a):bn(e,n,o,a),n.child;case 11:return Jg(e,n,n.type,n.pendingProps,a);case 7:return o=n.pendingProps,Rr(e,n),bn(e,n,o,a),n.child;case 8:return bn(e,n,n.pendingProps.children,a),n.child;case 12:return bn(e,n,n.pendingProps.children,a),n.child;case 10:return cv(e,n,a);case 9:return c=n.type._context,o=n.pendingProps.children,Us(n),c=Nn(c),o=o(c),n.flags|=1,bn(e,n,o,a),n.child;case 14:return $g(e,n,n.type,n.pendingProps,a);case 15:return tv(e,n,n.type,n.pendingProps,a);case 19:return Ih(e,n,a);case 31:return q1(e,n,a);case 22:return ev(e,n,a,n.pendingProps);case 24:return Us(n),o=Nn(gn),e===null?(c=eh(),c===null&&(c=Ke,h=$f(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=a),c=h),n.memoizedState={parent:o,cache:c},ih(n),qa(n,gn,c)):((e.lanes&a)!==0&&(ah(e,n),jo(n,null,null,a),Wo()),c=e.memoizedState,h=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),qa(n,gn,o)):(o=h.cache,qa(n,gn,o),o!==c.cache&&Jf(n,[gn],a,!0))),bn(e,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),o=n.pendingProps,o.name!=null&&o.name!=="auto"?n.flags|=e===null?18882560:18874368:Te&&pu(n),e!==null&&e.memoizedProps.name!==o.name?n.flags|=4194816:Rr(e,n),bn(e,n,o.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function Ta(e){e.flags|=4}function Fh(e,n,a,o,c){var h;if((h=(e.mode&32)!==0)&&(h=a===null?H_(n,o):H_(n,o)&&(o.src!==a.src||o.srcSet!==a.srcSet)),h){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Yv())e.flags|=8192;else throw Ps=Su,nh}else e.flags&=-16777217}function hv(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!G_(n))if(Yv())e.flags|=8192;else throw Ps=Su,nh}function Hu(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Jl():536870912,e.lanes|=n,Or|=n)}function tl(e,n){if(!Te)switch(e.tailMode){case"visible":break;case"collapsed":for(var a=e.tail,o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null;break;default:for(n=e.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null}}function tn(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&1206910976,o|=c.flags&1206910976,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function j1(e,n,a){var o=n.pendingProps;switch(jf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return tn(n),null;case 1:return tn(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),xa(gn),C(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Mr(n)?Ta(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Qf())),tn(n),null;case 26:var c=n.type,h=n.memoizedState;return e===null?(Ta(n),h!==null?(tn(n),hv(n,h)):(tn(n),Fh(n,c,null,o,a))):h?h!==e.memoizedState?(Ta(n),tn(n),hv(n,h)):(tn(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Ta(n),tn(n),Fh(n,c,e,o,a)),null;case 27:if(vt(n),a=re.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ta(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),n.subtreeFlags&=-33554433,null}e=Dt.current,Mr(n)?X0(n):(e=N_(c,o,a),n.stateNode=e,Ta(n))}return tn(n),n.subtreeFlags&=-33554433,null;case 5:if(vt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Ta(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return tn(n),n.subtreeFlags&=-33554433,null}if(h=Dt.current,Mr(n))X0(n);else{var S=fl(re.current);switch(h){case 1:h=S.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:h=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":h=S.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":h=S.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":h=S.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?S.createElement("select",{is:o.is}):S.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?S.createElement(c,{is:o.is}):S.createElement(c)}}h[Vt]=n,h[ie]=o;t:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)h.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break t;for(;S.sibling===null;){if(S.return===null||S.return===n)break t;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=h;t:switch(zn(h,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&Ta(n)}}return tn(n),n.subtreeFlags&=-33554433,Fh(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Ta(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=re.current,Mr(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Cn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[Vt]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||f_(e.nodeValue,a)),e||Xa(n,!0)}else e=fl(e).createTextNode(o),e[Vt]=n,n.stateNode=e}return tn(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Mr(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[Vt]=n}else Cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),e=!1}else a=Qf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(ci(n),n):(ci(n),null);if((n.flags&128)!==0)throw Error(s(558))}return tn(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Mr(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[Vt]=n}else Cs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;tn(n),c=!1}else c=Qf(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(ci(n),n):(ci(n),null)}return ci(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==c&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Hu(n,n.updateQueue),tn(n),null);case 4:return C(),e===null&&xd(n.stateNode.containerInfo),n.flags|=67108864,tn(n),null;case 10:return xa(n.type),tn(n),null;case 19:if(ch(n),o=n.memoizedState,o===null)return tn(n),null;if(c=(n.flags&128)!==0,h=o.rendering,h===null)if(c)tl(o,!1);else{if(fn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=bu(e),h!==null){for(n.flags|=128,tl(o,!1),e=h.updateQueue,n.updateQueue=e,Hu(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)F0(a,e),a=a.sibling;return Zo(n,On.current&1|2),Te&&_a(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&Z()>Ju&&(n.flags|=128,c=!0,tl(o,!1),n.lanes=4194304)}else{if(!c)if(e=bu(h),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Hu(n,e),tl(o,!0),o.tail===null&&o.tailMode!=="collapsed"&&o.tailMode!=="visible"&&!h.alternate&&!Te)return tn(n),null}else 2*Z()-o.renderingStartTime>Ju&&a!==536870912&&(n.flags|=128,c=!0,tl(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}if(o.tail!==null){e=o.tail;t:{for(a=e;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Z(),e.sibling=null,h=On.current,h=c?h&1|2:h&1,o.tailMode==="visible"||o.tailMode==="collapsed"||!a||Te?Zo(n,h):(a=h,Ct(Ln,n),Ct(On,a),Hn===null&&(Hn=n)),Te&&_a(n,o.treeForkCount),e}return tn(n),null;case 22:case 23:return ci(n),lh(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(tn(n),n.subtreeFlags&6&&(n.flags|=8192)):tn(n),a=n.updateQueue,a!==null&&Hu(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&ut(Ls),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),xa(gn),tn(n),null;case 25:return null;case 30:return n.flags|=33554432,tn(n),null}throw Error(s(156,n.tag))}function Z1(e,n){switch(jf(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return xa(gn),C(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return vt(n),null;case 31:if(n.memoizedState!==null){if(ci(n),n.alternate===null)throw Error(s(340));Cs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(ci(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Cs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ch(n),e=n.flags,e&65536?(n.flags=e&-65537|128,e=n.memoizedState,e!==null&&(e.rendering=null,e.tail=null),n.flags|=4,n):null;case 4:return C(),null;case 10:return xa(n.type),null;case 22:case 23:return ci(n),lh(),e!==null&&ut(Ls),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return xa(gn),null;case 25:return null;default:return null}}function dv(e,n){switch(jf(n),n.tag){case 3:xa(gn),C();break;case 26:case 27:case 5:vt(n);break;case 4:C();break;case 31:n.memoizedState!==null&&ci(n);break;case 13:ci(n);break;case 19:ch(n);break;case 10:xa(n.type);break;case 22:case 23:ci(n),lh(),e!==null&&ut(Ls);break;case 24:xa(gn)}}function el(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var h=a.create,S=a.inst;o=h(),S.destroy=o}a=a.next}while(a!==c)}}catch(D){qe(n,n.return,D)}}function $a(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&e)===e){var S=o.inst,D=S.destroy;if(D!==void 0){S.destroy=void 0,c=n;var X=a,it=D;try{it()}catch(ct){qe(c,X,ct)}}}o=o.next}while(o!==h)}}catch(ct){qe(n,n.return,ct)}}function pv(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{ig(n,a)}catch(o){qe(e,e.return,o)}}}function mv(e,n,a){a.props=Bs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){qe(e,n,o)}}function Ki(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:var c=e.stateNode,h=ma(e.memoizedProps,c);(c.ref===null||c.ref.name!==h)&&(c.ref=M_(h)),o=c.ref;break;case 7:if(e.stateNode===null){var S=new mi(e);g(e.child,!1,FM,S,void 0,void 0),e.stateNode=S}o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(D){qe(e,n,D)}}function Pn(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){qe(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){qe(e,n,c)}else a.current=null}function Gu(e,n){if((e.tag===5||e.tag===27||e.tag===6)&&e.alternate===null&&n!==null)for(var a=0;a<n.length;a++)C_(e.stateNode,n[a])}function gv(e){for(var n=e.return;n!==null&&(Gh(n)&&C_(e.stateNode,n.stateNode),!Hh(n));)n=n.return}function nl(e){for(var n=e.return;n!==null&&(Gh(n)&&HM(e.stateNode,n.stateNode),!Hh(n));)n=n.return}function Hh(e){return e.tag===5||e.tag===3||e.tag===27}function Gh(e){return e&&e.tag===7&&e.stateNode!==null}function Vh(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){qe(e,e.return,c)}}function kh(e,n,a){try{var o=e.stateNode;SM(o,e.type,a,n),o[ie]=n}catch(c){qe(e,e.return,c)}}function vv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&rs(e.type)||e.tag===4}function Xh(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||vv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&rs(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function qh(e,n,a,o){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(c,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(c),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=ji)),Gu(e,o),ze=!0;else if(c!==4&&(c===27&&(Gu(e,o),o=null,rs(e.type)&&(a=e.stateNode,n=null)),e=e.child,e!==null))for(qh(e,n,a,o),e=e.sibling;e!==null;)qh(e,n,a,o),e=e.sibling}function Vu(e,n,a,o){var c=e.tag;if(c===5||c===6)c=e.stateNode,n?a.insertBefore(c,n):a.appendChild(c),Gu(e,o),ze=!0;else if(c!==4&&(c===27&&(Gu(e,o),o=null,rs(e.type)&&(a=e.stateNode)),e=e.child,e!==null))for(Vu(e,n,a,o),e=e.sibling;e!==null;)Vu(e,n,a,o),e=e.sibling}function _v(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);zn(n,o,a),n[Vt]=e,n[ie]=a}catch(h){qe(e,e.return,h)}}var ku=!1,fi=null;function yv(e){(e.tag===30||(e.subtreeFlags&33554432)!==0)&&(ku=!0)}var Ji=null;function xv(){var e=Ji;return Ji=null,e}var ei=0;function Dr(e,n,a,o,c){return ei=0,Sv(e.child,n,a,o,c)}function Sv(e,n,a,o,c){for(var h=!1;e!==null;){if(e.tag===5){var S=e.stateNode;if(o!==null){var D=Cd(S);o.push(D),D.view&&(h=!0)}else h||Cd(S).view&&(h=!0);ku=!0,x_(S,ei===0?n:n+"_"+ei,a),ei++}else(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&c||Sv(e.child,n,a,o,c)&&(h=!0));e=e.sibling}return h}function $i(e,n){for(;e!==null;)e.tag===5?S_(e.stateNode,e.memoizedProps):(e.tag!==22||e.memoizedState===null)&&(e.tag===30&&n||$i(e.child,n)),e=e.sibling}function Xu(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if((e.tag!==22||e.memoizedState===null)&&(Xu(e),e.tag===30&&(e.flags&18874368)!==0&&e.stateNode.paired)){var n=e.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=ga(n.default,n.share),n!=="none"&&(Dr(e,a,n,null,!1)||$i(e.child,!1))}e=e.sibling}}function Yh(e,n){if(e.tag===30){var a=e.stateNode,o=e.memoizedProps,c=ma(o,a),h=ga(o.default,a.paired?o.share:o.enter);h!=="none"?Dr(e,c,h,null,!1)?(Xu(e),a.paired||n||Br(e,o.onEnter)):$i(e.child,!1):Xu(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)Yh(e,n),e=e.sibling;else Xu(e)}function Wh(e){if(fi!==null&&fi.size!==0){var n=fi;if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var a=e.memoizedProps,o=a.name;if(o!=null&&o!=="auto"){var c=n.get(o);if(c!==void 0){var h=ga(a.default,a.share);if(h!=="none"&&(Dr(e,o,h,null,!1)?(h=e.stateNode,c.paired=h,h.paired=c,Br(e,a.onShare)):$i(e.child,!1)),n.delete(o),n.size===0)break}}}Wh(e)}e=e.sibling}}}function jh(e){if(e.tag===30){var n=e.memoizedProps,a=ma(n,e.stateNode),o=fi!==null?fi.get(a):void 0,c=ga(n.default,o!==void 0?n.share:n.exit);c!=="none"&&(Dr(e,a,c,null,!1)?o!==void 0?(c=e.stateNode,o.paired=c,c.paired=o,fi.delete(a),Br(e,n.onShare)):Br(e,n.onExit):$i(e.child,!1)),fi!==null&&Wh(e)}else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)jh(e),e=e.sibling;else fi!==null&&Wh(e)}function Mv(e){for(e=e.child;e!==null;){if(e.tag===30){var n=e.memoizedProps,a=ma(n,e.stateNode);n=ga(n.default,n.update),e.flags&=-5,n!=="none"&&Dr(e,a,n,e.memoizedState=[],!1)}else(e.subtreeFlags&33554432)!==0&&Mv(e);e=e.sibling}}function Zh(e){if((e.subtreeFlags&18874368)!==0)for(e=e.child;e!==null;){if(e.tag!==22||e.memoizedState===null){if(e.tag===30&&(e.flags&18874368)!==0){var n=e.stateNode;n.paired!==null&&(n.paired=null,$i(e.child,!1))}Zh(e)}e=e.sibling}}function qu(e){if(e.tag===30)e.stateNode.paired=null,$i(e.child,!1),Zh(e);else if((e.subtreeFlags&33554432)!==0)for(e=e.child;e!==null;)qu(e),e=e.sibling;else Zh(e)}function Ev(e){for(e=e.child;e!==null;)e.tag===30?$i(e.child,!1):(e.subtreeFlags&33554432)!==0&&Ev(e),e=e.sibling}function Qh(e,n,a,o,c,h,S){for(var D=!1;n!==null;){if(n.tag===5){var X=n.stateNode;if(h!==null&&ei<h.length){var it=h[ei],ct=Cd(X);(it.view||ct.view)&&(D=!0);var bt;if(bt=(e.flags&4)===0)if(ct.clip)bt=!0;else{bt=it.rect;var et=ct.rect;bt=bt.y!==et.y||bt.x!==et.x||bt.height!==et.height||bt.width!==et.width}bt&&(e.flags|=4),ct.abs?ct=!it.abs:(it=it.rect,ct=ct.rect,ct=it.height!==ct.height||it.width!==ct.width),ct&&(e.flags|=32)}else e.flags|=32;(e.flags&4)!==0&&x_(X,ei===0?a:a+"_"+ei,c),D&&(e.flags&4)!==0||(Ji===null&&(Ji=[]),Ji.push(X,ei===0?o:o+"_"+ei,n.memoizedProps)),ei++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&S?e.flags|=n.flags&32:Qh(e,n.child,a,o,c,h,S)&&(D=!0));n=n.sibling}return D}function Tv(e,n){for(e=e.child;e!==null;){if(e.tag===30){var a=e.memoizedProps,o=e.stateNode,c=ma(a,o),h=ga(a.default,a.update),S;S=e.memoizedState,e.memoizedState=null,o=e;var D=e.child;ei=0,c=Qh(o,D,c,c,h,S,!1),(e.flags&4)!==0&&c&&Br(e,a.onUpdate)}else(e.subtreeFlags&33554432)!==0&&Tv(e);e=e.sibling}}var Rn=!1,ke=!1,ta=!1,Kh=!1,bv=typeof WeakSet=="function"?WeakSet:Set,Dn=null,ea=!1,il=!1,Yu=!1,Jh=!1;function Q1(e,n,a){if(e=e.containerInfo,Ed=jr,e=R0(e),Bf(e)){if("selectionStart"in e)var o={start:e.selectionStart,end:e.selectionEnd};else t:{o=(o=e.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var h=c.anchorOffset,S=c.focusNode;c=c.focusOffset;try{o.nodeType,S.nodeType}catch{o=null;break t}var D=0,X=-1,it=-1,ct=0,bt=0,et=e,lt=null;e:for(;;){for(var Xt;et!==o||h!==0&&et.nodeType!==3||(X=D+h),et!==S||c!==0&&et.nodeType!==3||(it=D+c),et.nodeType===3&&(D+=et.nodeValue.length),(Xt=et.firstChild)!==null;)lt=et,et=Xt;for(;;){if(et===e)break e;if(lt===o&&++ct===h&&(X=D),lt===S&&++bt===c&&(it=D),(Xt=et.nextSibling)!==null)break;et=lt,lt=et.parentNode}et=Xt}o=X===-1||it===-1?null:{start:X,end:it}}else o=null}o=o||{start:0,end:0}}else o=null;for(Td={focusedElem:e,selectionRange:o},jr=!1,a=(a&335544064)===a,Dn=n,n=a?9270:1024;Dn!==null;){if(e=Dn,a&&(o=e.deletions,o!==null))for(h=0;h<o.length;h++)a&&jh(o[h]);if(e.alternate===null&&(e.flags&2)!==0)a&&yv(e),Wu(a);else{if(e.tag===22){if(o=e.alternate,e.memoizedState!==null){o!==null&&o.memoizedState===null&&a&&jh(o),Wu(a);continue}else if(o!==null&&o.memoizedState!==null){a&&yv(e),Wu(a);continue}}o=e.child,(e.subtreeFlags&n)!==0&&o!==null?(o.return=e,Dn=o):(a&&Mv(e),Wu(a))}}fi=null}function Wu(e){for(;Dn!==null;){var n=Dn,a=e,o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((c&1024)!==0&&o!==null){a=void 0,c=o.memoizedProps,o=o.memoizedState;var h=n.stateNode;try{var S=Bs(n.type,c);a=h.getSnapshotBeforeUpdate(S,o),h.__reactInternalSnapshotBeforeUpdate=a}catch(D){qe(n,n.return,D)}}break;case 3:if((c&1024)!==0){if(o=n.stateNode.containerInfo,a=o.nodeType,a===9)Ud(o);else if(a===1)switch(o.nodeName){case"HEAD":case"HTML":case"BODY":Ud(o);break;default:o.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&o!==null&&(a=ma(o.memoizedProps,o.stateNode),c=n.memoizedProps,c=ga(c.default,c.update),c!=="none"&&Dr(o,a,c,o.memoizedState=[],!0));break;default:if((c&1024)!==0)throw Error(s(163))}if(o=n.sibling,o!==null){o.return=n.return,Dn=o;break}Dn=n.return}}function Av(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:na(e,a),o&4&&el(5,a);break;case 1:if(na(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(S){qe(a,a.return,S)}else{var c=Bs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){qe(a,a.return,S)}}o&64&&pv(a),o&512&&Ki(a,a.return);break;case 3:if(na(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{ig(e,n)}catch(S){qe(a,a.return,S)}}break;case 27:n===null&&o&4&&_v(a);case 26:case 5:na(e,a),n===null&&o&4&&Vh(a),o&512&&Ki(a,a.return);break;case 12:na(e,a);break;case 31:na(e,a),o&4&&Dv(e,a);break;case 13:na(e,a),o&4&&Uv(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=lM.bind(null,a),kM(e,a))));break;case 22:if(o=a.memoizedState!==null||Rn,!o){var h=n!==null&&n.memoizedState!==null||ke;n=Rn,c=ke,Rn=o,(ke=h)&&!c?(o=2,(a.subtreeFlags&8772)!==0&&(o|=1),zi(e,a,o)):na(e,a),Rn=n,ke=c}break;case 30:na(e,a),o&512&&Ki(a,a.return);break;case 7:o&512&&Ki(a,a.return);default:na(e,a)}}function $h(e,n){for(e=e.child;e!==null;)wv(e,n),e=e.sibling}function wv(e,n){switch(e.tag){case 5:case 26:try{var a=e.stateNode;if(n){var o=a.style;typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"}else{var c=e.stateNode,h=e.memoizedProps.style,S=h!=null&&h.hasOwnProperty("display")?h.display:null;c.style.display=S==null||typeof S=="boolean"?"":(""+S).trim()}}catch(X){qe(e,e.return,X)}td(e,n);break;case 6:try{e.stateNode.nodeValue=n?"":e.memoizedProps,ze=!0}catch(X){qe(e,e.return,X)}break;case 18:try{var D=e.stateNode;n?y_(D,!0):y_(e.stateNode,!1)}catch(X){qe(e,e.return,X)}break;case 22:case 23:e.memoizedState===null&&$h(e,n);break;default:$h(e,n)}}function td(e,n){if(e.subtreeFlags&67108864)for(e=e.child;e!==null;){t:{var a=e,o=n;switch(a.tag){case 4:wv(a,o);break t;case 22:a.memoizedState===null&&td(a,o);break t;default:td(a,o)}}e=e.sibling}}function Cv(e){var n=e.alternate;n!==null&&(e.alternate=null,Cv(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&fe(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var an=null,ni=!1;function Oi(e,n,a){for(a=a.child;a!==null;)Rv(e,n,a),a=a.sibling}function Rv(e,n,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Re,a)}catch{}switch(a.tag){case 26:ke||Pn(a,n),Oi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!ke&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ke||Pn(a,n),nl(a);var o=an,c=ni;rs(a.type)&&(an=a.stateNode,ni=!1),Oi(e,n,a),L_(a.stateNode,a.type,a.memoizedProps),an=o,ni=c;break;case 5:ke||Pn(a,n),nl(a);case 6:if(a.tag===6&&nl(a),o=an,c=ni,an=null,Oi(e,n,a),an=o,ni=c,an!==null)if(ni)try{(an.nodeType===9?an.body:an.nodeName==="HTML"?an.ownerDocument.body:an).removeChild(a.stateNode),ze=!0}catch(h){qe(a,n,h)}else try{an.removeChild(a.stateNode),ze=!0}catch(h){qe(a,n,h)}break;case 18:an!==null&&(ni?(e=an,__(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Zr(e)):__(an,a.stateNode));break;case 4:o=an,c=ni,an=a.stateNode.containerInfo,ni=!0,Oi(e,n,a),an=o,ni=c;break;case 0:case 11:case 14:case 15:$a(2,a,n),ke||$a(4,a,n),Oi(e,n,a);break;case 1:ke||(Pn(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&mv(a,n,o)),Oi(e,n,a);break;case 21:Oi(e,n,a);break;case 22:ke=(o=ke)||a.memoizedState!==null,Oi(e,n,a),ke=o;break;case 30:Pn(a,n),Oi(e,n,a);break;case 7:ke||Pn(a,n),Oi(e,n,a);break;default:Oi(e,n,a)}}function Dv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Zr(e)}catch(a){qe(n,n.return,a)}}}function Uv(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Zr(e)}catch(a){qe(n,n.return,a)}}function K1(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new bv),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new bv),n;default:throw Error(s(435,e.tag))}}function ju(e,n){var a=K1(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=uM.bind(null,e,o);o.then(c,c)}})}function Qn(e,n,a){var o=n.deletions;if(o!==null)for(var c=0;c<o.length;c++){var h=o[c],S=e,D=n,X=D;t:for(;X!==null;){switch(X.tag){case 27:if(rs(X.type)){an=X.stateNode,ni=!1;break t}break;case 5:an=X.stateNode,ni=!1;break t;case 3:case 4:an=X.stateNode.containerInfo,ni=!0;break t}X=X.return}if(an===null)throw Error(s(160));Rv(S,D,h),an=null,ni=!1,S=h.alternate,S!==null&&(S.return=null),h.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Nv(n,e,a),n=n.sibling}var Pi=null;function Nv(e,n,a){var o=e.alternate,c=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(c&4&&(o=e.updateQueue,o=o!==null?o.events:null,o!==null))for(var h=0;h<o.length;h++){var S=o[h];S.ref.impl=S.nextImpl}Qn(n,e,a),Kn(e),c&4&&($a(3,e,e.return),el(3,e),$a(5,e,e.return));break;case 1:Qn(n,e,a),Kn(e),c&512&&(ke||o===null||Pn(o,o.return)),c&64&&Rn&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(h=Pi,Qn(n,e,a),Kn(e),c&512&&(ke||o===null||Pn(o,o.return)),c&4)if(c=o!==null?o.memoizedState:null,a=e.memoizedState,o===null)if(a===null)if(e.stateNode===null)if(Rn)e.stateNode=m_(e.type,e.memoizedProps,n.containerInfo,e);else{t:{n=e.type,a=e.memoizedProps,c=h.ownerDocument||h;e:switch(n){case"title":o=c.getElementsByTagName("title")[0],(!o||o[Ie]||o[Vt]||o.namespaceURI==="http://www.w3.org/2000/svg"||o.hasAttribute("itemprop"))&&(o=c.createElement(n),c.head.insertBefore(o,c.querySelector("head > title"))),zn(o,n,a),o[Vt]=e,Pe(o),n=o;break t;case"link":if(h=F_("link","href",c).get(n+(a.href||""))){for(S=0;S<h.length;S++)if(o=h[S],o.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&o.getAttribute("rel")===(a.rel==null?null:a.rel)&&o.getAttribute("title")===(a.title==null?null:a.title)&&o.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){h.splice(S,1);break e}}o=c.createElement(n),zn(o,n,a),c.head.appendChild(o);break;case"meta":if(h=F_("meta","content",c).get(n+(a.content||""))){for(S=0;S<h.length;S++)if(o=h[S],o.getAttribute("content")===(a.content==null?null:""+a.content)&&o.getAttribute("name")===(a.name==null?null:a.name)&&o.getAttribute("property")===(a.property==null?null:a.property)&&o.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&o.getAttribute("charset")===(a.charSet==null?null:a.charSet)){h.splice(S,1);break e}}o=c.createElement(n),zn(o,n,a),c.head.appendChild(o);break;default:throw Error(s(468,n))}o[Vt]=e,Pe(o),n=o}e.stateNode=n}else Rn||Bd(h,e.type,e.stateNode);else e.stateNode=B_(h,a,e.memoizedProps);else c!==a?(c===null?(n=o.stateNode,n===null||ke||n.parentNode.removeChild(n)):c.count--,a===null?Rn||Bd(h,e.type,e.stateNode):B_(h,a,e.memoizedProps)):a===null&&e.stateNode!==null&&kh(e,e.memoizedProps,o.memoizedProps);break;case 27:Qn(n,e,a),Kn(e),c&512&&(ke||o===null||Pn(o,o.return)),o!==null&&c&4&&kh(e,e.memoizedProps,o.memoizedProps);break;case 5:if(h=ta,ta=!1,Qn(n,e,a),ta=h,Kn(e),c&512&&(ke||o===null||Pn(o,o.return)),e.flags&32){n=e.stateNode;try{hr(n,""),ze=!0}catch(ct){qe(e,e.return,ct)}}c&4&&e.stateNode!=null&&(n=e.memoizedProps,kh(e,n,o!==null?o.memoizedProps:n)),c&1024&&(Kh=!0);break;case 6:if(Qn(n,e,a),Kn(e),c&4){if(e.stateNode===null)throw Error(s(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n,ze=!0}catch(ct){qe(e,e.return,ct)}}break;case 3:if(ze=!1,uc=null,h=Pi,Pi=hl(n.containerInfo),Qn(n,e,a),Pi=h,Kn(e),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Zr(n.containerInfo)}catch(ct){qe(e,e.return,ct)}Kh&&(Kh=!1,Lv(e)),ze=!1;break;case 4:c=ta,ta=Rn,o=$m(),h=Pi,Pi=hl(e.stateNode.containerInfo),Qn(n,e,a),Kn(e),Pi=h,ze&&il&&(Yu=!0),ze=o,ta=c;break;case 12:Qn(n,e,a),Kn(e);break;case 31:Qn(n,e,a),Kn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ju(e,n)));break;case 13:Qn(n,e,a),Kn(e),e.child.flags&8192&&e.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Ku=Z()),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ju(e,n)));break;case 22:h=e.memoizedState!==null,S=o!==null&&o.memoizedState!==null;var D=Rn,X=ke,it=ta;Rn=D||h,ta=it||h,ke=X||S,Qn(n,e,a),ke=X,ta=it,Rn=D,Kn(e),c&8192&&(n=e.stateNode,n._visibility=h?n._visibility&-2:n._visibility|1,!h||o===null||S||Rn||ke||(n=S||ke,a=Rn,o=ke,Rn=h||Rn,ke=n,ts(e,2),Rn=a,ke=o),!h&&ta||$h(e,h)),c&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,ju(e,a))));break;case 19:Qn(n,e,a),Kn(e),c&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,ju(e,n)));break;case 30:c&512&&(ke||o===null||Pn(o,o.return)),c=$m(),h=il,S=(a&335544064)===a,D=e.memoizedProps,il=S&&ga(D.default,D.update)!=="none",Qn(n,e,a),Kn(e),S&&o!==null&&ze&&(e.flags|=4),il=h,ze=c;break;case 21:break;case 7:c&512&&(ke||o===null||Pn(o,o.return)),o&&o.stateNode!==null&&(o.stateNode._fragmentFiber=e);default:Qn(n,e,a),Kn(e)}}function Kn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(vv(o)){a=o;break}o=o.return}o=null;for(var c=e.return;c!==null;){if(Gh(c)){var h=c.stateNode;o===null?o=[h]:o.push(h)}if(Hh(c))break;c=c.return}var S=o;if(a==null)throw Error(s(160));switch(a.tag){case 27:var D=a.stateNode,X=Xh(e);Vu(e,X,D,S);break;case 5:var it=a.stateNode;a.flags&32&&(hr(it,""),a.flags&=-33);var ct=Xh(e);Vu(e,ct,it,S);break;case 3:case 4:var bt=a.stateNode.containerInfo,et=Xh(e);qh(e,et,bt,S);break;default:throw Error(s(161))}}catch(lt){qe(e,e.return,lt)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Lv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Lv(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,jr=!0,n.reset(),jr=!1),e=e.sibling}}function Ur(e,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Ov(n,e),n=n.sibling;else Tv(n)}function Ov(e,n){var a=e.alternate;if(a===null)Yh(e,!1);else switch(e.tag){case 3:if(Jh=ea=!1,xv(),Ur(n,e),!ea&&!Yu){if(e=Ji,e!==null)for(var o=0;o<e.length;o+=3){a=e[o];var c=e[o+1];S_(a,e[o+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+c+")"})}e=n.containerInfo,e=e.nodeType===9?e.documentElement:e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName===""&&(e.style.viewTransitionName="none",e.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),e.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),Jh=!0}Ji=null;break;case 5:Ur(n,e);break;case 4:o=ea,ea=!1,Ur(n,e),ea&&(Yu=!0),ea=o;break;case 22:e.memoizedState===null&&(a.memoizedState!==null?Yh(e,!1):Ur(n,e));break;case 30:o=ea,c=xv(),ea=!1,Ur(n,e),ea&&(e.flags|=4);var h=e.memoizedProps,S=e.stateNode;n=ma(h,S),S=ma(a.memoizedProps,S);var D=ga(h.default,h.update);D==="none"?n=!1:(h=a.memoizedState,a.memoizedState=null,a=e.child,ei=0,n=Qh(e,a,n,S,D,h,!0),ei!==(h===null?0:h.length)&&(e.flags|=32)),(e.flags&4)!==0&&n?(Br(e,e.memoizedProps.onUpdate),Ji=c):c!==null&&(c.push.apply(c,Ji),Ji=c),ea=(e.flags&32)!==0?!0:o;break;default:Ur(n,e)}}function na(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Av(e,n.alternate,n),n=n.sibling}function ts(e,n){for(e=e.child;e!==null;){var a=e,o=n;switch(a.tag){case 0:case 11:case 14:case 15:$a(4,a,a.return),ts(a,o);break;case 1:Pn(a,a.return);var c=a.stateNode;typeof c.componentWillUnmount=="function"&&mv(a,a.return,c),ts(a,o);break;case 27:(o&2)!==0&&L_(a.stateNode,a.type,a.memoizedProps);case 5:Pn(a,a.return),a.tag!==5&&a.tag!==27||nl(a),ts(a,o);break;case 6:nl(a);break;case 26:Pn(a,a.return),c=a.stateNode,a.memoizedState!==null||c===null||ke||c.parentNode.removeChild(c),ts(a,o);break;case 22:a.memoizedState===null&&ts(a,o);break;case 30:Pn(a,a.return),ts(a,o);break;case 7:Pn(a,a.return);default:ts(a,o)}e=e.sibling}}function zi(e,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var o=n.alternate,c=e,h=n,S=h.flags,D=(a&1)!==0;switch(h.tag){case 0:case 11:case 15:zi(c,h,a),el(4,h);break;case 1:if(zi(c,h,a),o=h,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(ct){qe(o,o.return,ct)}if(o=h,c=o.updateQueue,c!==null){var X=o.stateNode;try{var it=c.shared.hiddenCallbacks;if(it!==null)for(c.shared.hiddenCallbacks=null,c=0;c<it.length;c++)ng(it[c],X)}catch(ct){qe(o,o.return,ct)}}D&&S&64&&pv(h),Ki(h,h.return);break;case 27:(a&2)!==0&&_v(h);case 5:h.tag!==5&&h.tag!==27||gv(h),zi(c,h,a),D&&o===null&&S&4&&Vh(h),Ki(h,h.return);break;case 6:gv(h);break;case 26:X=h.stateNode,h.memoizedState!==null||X===null||Rn||Bd(hl(X.ownerDocument),h.type,X),zi(c,h,a),D&&o===null&&S&4&&Vh(h),Ki(h,h.return);break;case 12:zi(c,h,a);break;case 31:zi(c,h,a),D&&S&4&&Dv(c,h);break;case 13:zi(c,h,a),D&&S&4&&Uv(c,h);break;case 22:h.memoizedState===null&&zi(c,h,a),Ki(h,h.return);break;case 30:zi(c,h,a),Ki(h,h.return);break;case 7:Ki(h,h.return);default:zi(c,h,a)}n=n.sibling}}function ed(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Vo(a))}function nd(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Vo(e))}function wi(e,n,a,o){var c=(a&335544064)===a;if(n.subtreeFlags&(c?10262:10256))for(n=n.child;n!==null;)Pv(e,n,a,o),n=n.sibling;else c&&Ev(n)}function Pv(e,n,a,o){var c=(a&335544064)===a;c&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&qu(n);var h=n.flags;switch(n.tag){case 0:case 11:case 15:wi(e,n,a,o),h&2048&&el(9,n);break;case 1:wi(e,n,a,o);break;case 3:wi(e,n,a,o),c&&Jh&&(e=e.containerInfo,e=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,e.style.viewTransitionName==="root"&&(e.style.viewTransitionName=""),e=e.ownerDocument.documentElement,e!==null&&e.style.viewTransitionName==="none"&&(e.style.viewTransitionName="")),h&2048&&(h=null,n.alternate!==null&&(h=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==h&&(n.refCount++,h!=null&&Vo(h)));break;case 12:if(h&2048){wi(e,n,a,o),h=n.stateNode;try{var S=n.memoizedProps,D=S.id,X=S.onPostCommit;typeof X=="function"&&X(D,n.alternate===null?"mount":"update",h.passiveEffectDuration,-0)}catch(it){qe(n,n.return,it)}}else wi(e,n,a,o);break;case 31:wi(e,n,a,o);break;case 13:wi(e,n,a,o);break;case 23:break;case 22:S=n.stateNode,D=n.alternate,n.memoizedState!==null?(c&&D!==null&&D.memoizedState===null&&qu(D),S._visibility&2?wi(e,n,a,o):al(e,n)):(c&&D!==null&&D.memoizedState!==null&&qu(n),S._visibility&2?wi(e,n,a,o):(S._visibility|=2,Nr(e,n,a,o,(n.subtreeFlags&10256)!==0||!1))),h&2048&&ed(D,n);break;case 24:wi(e,n,a,o),h&2048&&nd(n.alternate,n);break;case 30:c&&(h=n.alternate,h!==null&&($i(h.child,!0),$i(n.child,!0))),wi(e,n,a,o);break;default:wi(e,n,a,o)}}function Nr(e,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,S=n,D=a,X=o,it=S.flags;switch(S.tag){case 0:case 11:case 15:Nr(h,S,D,X,c),el(8,S);break;case 23:break;case 22:var ct=S.stateNode;S.memoizedState!==null?ct._visibility&2?Nr(h,S,D,X,c):al(h,S):(ct._visibility|=2,Nr(h,S,D,X,c)),c&&it&2048&&ed(S.alternate,S);break;case 24:Nr(h,S,D,X,c),c&&it&2048&&nd(S.alternate,S);break;default:Nr(h,S,D,X,c)}n=n.sibling}}function al(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:al(a,o),c&2048&&ed(o.alternate,o);break;case 24:al(a,o),c&2048&&nd(o.alternate,o);break;default:al(a,o)}n=n.sibling}}var Fs=8192;function Hs(e,n,a){if(e.subtreeFlags&Fs)for(e=e.child;e!==null;)zv(e,n,a),e=e.sibling}function zv(e,n,a){switch(e.tag){case 26:Hs(e,n,a),e.flags&Fs&&(e.memoizedState!==null?iE(a,Pi,e.memoizedState,e.memoizedProps):(e=e.stateNode,(n&335544128)===n&&k_(a,e)));break;case 5:Hs(e,n,a),e.flags&Fs&&(e=e.stateNode,(n&335544128)===n&&k_(a,e));break;case 3:case 4:var o=Pi;Pi=hl(e.stateNode.containerInfo),Hs(e,n,a),Pi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Fs,Fs=16777216,Hs(e,n,a),Fs=o):Hs(e,n,a));break;case 30:if((e.flags&Fs)!==0&&(o=e.memoizedProps.name,o!=null&&o!=="auto")){var c=e.stateNode;c.paired=null,fi===null&&(fi=new Map),fi.set(o,c)}Hs(e,n,a);break;default:Hs(e,n,a)}}function Iv(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function sl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Dn=o,Fv(o,e)}Iv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Bv(e),e=e.sibling}function Bv(e){switch(e.tag){case 0:case 11:case 15:sl(e),e.flags&2048&&$a(9,e,e.return);break;case 3:sl(e);break;case 12:sl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Zu(e)):sl(e);break;default:sl(e)}}function Zu(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];Dn=o,Fv(o,e)}Iv(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:$a(8,n,n.return),Zu(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Zu(n));break;default:Zu(n)}e=e.sibling}}function Fv(e,n){for(;Dn!==null;){var a=Dn;switch(a.tag){case 0:case 11:case 15:$a(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Vo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,Dn=o;else t:for(a=e;Dn!==null;){o=Dn;var c=o.sibling,h=o.return;if(Cv(o),o===a){Dn=null;break t}if(c!==null){c.return=h,Dn=c;break t}Dn=h}}}var J1={getCacheForType:function(e){var n=Nn(gn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Nn(gn).controller.signal}},$1=typeof WeakMap=="function"?WeakMap:Map,Fe=0,Ke=null,we=null,De=0,Xe=0,hi=null,es=!1,Lr=!1,id=!1,ba=0,fn=0,ns=0,Gs=0,Qu=0,di=0,Or=0,rl=null,ii=null,ad=!1,Ku=0,Hv=0,Ju=1/0,$u=null,is=null,on=0,Ii=null,Vs=null,ia=0,sd=0,rd=null,Gv=null,Pr=null,zr=null,Ir=null,ol=0,tc=null;function pi(){return(Fe&2)!==0&&De!==0?De&-De:At.T!==null?gd():It()}function Vv(){if(di===0)if((De&536870912)===0||Te){var e=ha;ha<<=1,(ha&3932160)===0&&(ha=262144),di=e}else di=536870912;return e=Ln.current,e!==null&&(e.flags|=32),di}function Br(e,n){if(n!=null){var a=e.stateNode,o=a.ref;o===null&&(o=a.ref=M_(ma(e.memoizedProps,a))),zr===null&&(zr=[]),zr.push(n.bind(null,o))}}function ai(e,n,a){(e===Ke&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)&&(Fr(e,0),as(e,De,di,!1)),Es(e,a),((Fe&2)===0||e!==Ke)&&(e===Ke&&((Fe&2)===0&&(Gs|=a),fn===4&&as(e,De,di,!1)),aa(e))}function kv(e,n,a){if((Fe&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ba(e,n),c=o?nM(e,n):ld(e,n,!0),h=o;do{if(c===0){Lr&&!o&&as(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!tM(a)){c=ld(e,n,!1),h=!1;continue}if(c===2){if(h=n,e.errorRecoveryDisabledLanes&h)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var D=e;c=rl;var X=D.current.memoizedState.isDehydrated;if(X&&(Fr(D,S).flags|=256),S=ld(D,S,!1),S!==2&&S!==6){if(id&&!X){D.errorRecoveryDisabledLanes|=h,Gs|=h,c=4;break t}h=ii,ii=c,h!==null&&(ii===null?ii=h:ii.push.apply(ii,h))}c=S}if(h=!1,c!==2)continue}}if(c===1){Fr(e,0),as(e,n,0,!0);break}t:{switch(o=e,h=c,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:as(o,n,di,!es);break t;case 2:ii=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Ku+300-Z(),10<c)){if(as(o,n,di,!es),Ms(o,0,!0)!==0)break t;ia=n,o.timeoutHandle=wd(Xv.bind(null,o,a,ii,$u,ad,n,di,Gs,Or,es,h,"Throttled",-0,0),c);break t}Xv(o,a,ii,$u,ad,n,di,Gs,Or,es,h,null,-0,0)}}break}while(!0);aa(e)}function Xv(e,n,a,o,c,h,S,D,X,it,ct,bt,et,lt){e.timeoutHandle=-1;var Xt=n.subtreeFlags,ae=(h&335544064)===h;if(bt=null,(ae||Xt&8192||(Xt&16785408)===16785408)&&(bt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:ji},fi=null,zv(n,h,bt),ae&&(Xt=bt,ae=e.containerInfo,ae=(ae.nodeType===9?ae:ae.ownerDocument).__reactViewTransition,ae!=null&&(Xt.count++,Xt.waitingForViewTransition=!0,Xt=ml.bind(Xt),ae.finished.then(Xt,Xt))),Xt=(h&62914560)===h?Ku-Z():(h&4194048)===h?Hv-Z():0,Xt=aE(bt,Xt),Xt!==null)){ia=h,e.cancelPendingCommit=Xt(Jv.bind(null,e,n,h,a,o,c,S,D,X,it,ct,bt,null,et,lt)),as(e,h,S,!it);return}Jv(e,n,h,a,o,c,S,D,X,it,ct,bt)}function tM(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],h=c.getSnapshot;c=c.value;try{if(!ui(h(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function as(e,n,a,o){n=Kl(e,n),n&=~Qu,n&=~Gs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var h=31-Bn(c),S=1<<h;o[h]=-1,c&=~S}a!==0&&L(e,a,n)}function ec(){return(Fe&6)===0?(ll(0),!1):!0}function od(){if(we!==null){if(Xe===0)var e=we.return;else e=we,ya=Rs=null,mh(e),br=null,qo=0,e=we;for(;e!==null;)dv(e.alternate,e),e=e.return;we=null}}function Fr(e,n){var a=e.timeoutHandle;return a!==-1&&(e.timeoutHandle=-1,TM(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),ia=0,od(),Ke=e,we=a=va(e.current,null),De=n,Xe=0,hi=null,es=!1,Lr=Ba(e,n),id=!1,Or=di=Qu=Gs=ns=fn=0,ii=rl=null,ad=!1,ba=Kl(e,n),uu(),a}function qv(e,n){xe=null,At.H=Ou,n===Tr||n===xu?(n=J0(),Xe=3):n===nh?(n=J0(),Xe=4):Xe=n===Dh?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,hi=n,we===null&&(fn=1,Pu(e,Ei(n,e.current)))}function Yv(){var e=Ln.current;return e===null?!0:(De&4194048)===De?Hn===null:(De&62914560)===De||(De&536870912)!==0?e===Hn:!1}function Wv(){var e=At.H;return At.H=Ou,e===null?Ou:e}function jv(){var e=At.A;return At.A=J1,e}function nc(){fn=4,es||(De&4194048)!==De&&Ln.current!==null||(Lr=!0),(ns&134217727)===0&&(Gs&134217727)===0||Ke===null||as(Ke,De,di,!1)}function ld(e,n,a){var o=Fe;Fe|=2;var c=Wv(),h=jv();(Ke!==e||De!==n)&&($u=null,Fr(e,n)),n=!1;var S=fn;t:do try{if(Xe!==0&&we!==null){var D=we,X=hi;switch(Xe){case 8:od(),S=6;break t;case 3:case 2:case 9:case 6:Ln.current===null&&(n=!0);var it=Xe;if(Xe=0,hi=null,Hr(e,D,X,it),a&&Lr){S=0;break t}break;default:it=Xe,Xe=0,hi=null,Hr(e,D,X,it)}}eM(),S=fn;break}catch(ct){qv(e,ct)}while(!0);return n&&e.shellSuspendCounter++,ya=Rs=null,Fe=o,At.H=c,At.A=h,we===null&&(Ke=null,De=0,uu()),S}function eM(){for(;we!==null;)Zv(we)}function nM(e,n){var a=Fe;Fe|=2;var o=Wv(),c=jv();Ke!==e||De!==n?($u=null,Ju=Z()+500,Fr(e,n)):Lr=Ba(e,n);t:do try{if(Xe!==0&&we!==null){n=we;var h=hi;e:switch(Xe){case 1:Xe=0,hi=null,Hr(e,n,h,1);break;case 2:case 9:if(Q0(h)){Xe=0,hi=null,Qv(n);break}n=function(){Xe!==2&&Xe!==9||Ke!==e||(Xe=7),aa(e)},h.then(n,n);break t;case 3:Xe=7;break t;case 4:Xe=5;break t;case 7:Q0(h)?(Xe=0,hi=null,Qv(n)):(Xe=0,hi=null,Hr(e,n,h,7));break;case 5:var S=null;switch(we.tag){case 26:S=we.memoizedState;case 5:case 27:var D=we;if(S?G_(S):D.stateNode.complete){Xe=0,hi=null;var X=D.sibling;if(X!==null)we=X;else{var it=D.return;it!==null?(we=it,ic(it)):we=null}break e}}Xe=0,hi=null,Hr(e,n,h,5);break;case 6:Xe=0,hi=null,Hr(e,n,h,6);break;case 8:od(),fn=6;break t;default:throw Error(s(462))}}iM();break}catch(ct){qv(e,ct)}while(!0);return ya=Rs=null,At.H=o,At.A=c,Fe=a,we!==null?0:(Ke=null,De=0,uu(),fn)}function iM(){for(;we!==null&&!Yt();)Zv(we)}function Zv(e){var n=fv(e.alternate,e,ba);e.memoizedProps=e.pendingProps,n===null?ic(e):we=n}function Qv(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=av(a,n,n.pendingProps,n.type,void 0,De);break;case 11:n=av(a,n,n.pendingProps,n.type.render,n.ref,De);break;case 5:mh(n);var o=n;o===Cn&&(Te?(mu(o),o.tag===5&&o.stateNode!=null&&($e=o.stateNode)):(mu(o),Te=!0));default:dv(a,n),n=we=F0(n,ba),n=fv(a,n,ba)}e.memoizedProps=e.pendingProps,n===null?ic(e):we=n}function Hr(e,n,a,o){ya=Rs=null,mh(n),br=null,qo=0;var c=n.return;try{if(X1(e,c,n,a,De)){fn=1,Pu(e,Ei(a,e.current)),we=null;return}}catch(h){if(c!==null)throw we=c,h;fn=1,Pu(e,Ei(a,e.current)),we=null;return}n.flags&32768?(Te||o===1?e=!0:Lr||(De&536870912)!==0?e=!1:(es=e=!0,(o===2||o===9||o===3||o===6)&&(o=Ln.current,o!==null&&o.tag===13&&(o.flags|=16384))),Kv(n,e)):ic(n)}function ic(e){var n=e;do{if((n.flags&32768)!==0){Kv(n,es);return}e=n.return;var a=j1(n.alternate,n,ba);if(a!==null){we=a;return}if(n=n.sibling,n!==null){we=n;return}we=n=e}while(n!==null);fn===0&&(fn=5)}function Kv(e,n){do{var a=Z1(e.alternate,e);if(a!==null){a.flags&=32767,we=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){we=e;return}we=e=a}while(e!==null);fn=6,we=null}function Jv(e,n,a,o,c,h,S,D,X,it,ct,bt){e.cancelPendingCommit=null;do ac();while(on!==0);if((Fe&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));e===Ke&&(we=Ke=null,De=0),Vs=n,Ii=e,ia=a,rd=c,Gv=o,aM(e,n,a,S,D,X,bt)}}function aM(e,n,a,o,c,h,S){var D=n.lanes|n.childLanes;if(sd=D,D|=kf,xf(e,a,D,o,c,h),zr=null,(a&335544064)===a?(Ir=N1(e),o=10262):(Ir=null,o=10256),(n.subtreeFlags&o)!==0||(n.flags&o)!==0?(e.callbackNode=null,e.callbackPriority=0,cM(Pt,function(){return hd(),null})):(e.callbackNode=null,e.callbackPriority=0),ku=!1,o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=At.T,At.T=null,c=Lt.p,Lt.p=2,h=Fe,Fe|=4;try{Q1(e,n,a)}finally{Fe=h,Lt.p=c,At.T=o}}on=1,ku?Pr=DM(S,e.containerInfo,Ir,ud,cd,rM,fd,hd,sM):(ud(),cd(),fd())}function sM(e){if(on!==0){var n=Ii.onRecoverableError;n(e,{componentStack:null})}}function rM(){on===3&&(on=0,Ov(Vs,Ii),on=4)}function ud(){if(on===1){on=0;var e=Ii,n=Vs,a=ia,o=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||o){o=At.T,At.T=null;var c=Lt.p;Lt.p=2;var h=Fe;Fe|=4;try{il=Yu=!1,Nv(n,e,a),a=Td;var S=R0(e.containerInfo),D=a.focusedElem,X=a.selectionRange;if(S!==D&&D&&D.ownerDocument&&C0(D.ownerDocument.documentElement,D)){if(X!==null&&Bf(D)){var it=X.start,ct=X.end;if(ct===void 0&&(ct=it),"selectionStart"in D)D.selectionStart=it,D.selectionEnd=Math.min(ct,D.value.length);else{var bt=D.ownerDocument||document,et=bt&&bt.defaultView||window;if(et.getSelection){var lt=et.getSelection(),Xt=D.textContent.length,ae=Math.min(X.start,Xt),Se=X.end===void 0?ae:Math.min(X.end,Xt);!lt.extend&&ae>Se&&(S=Se,Se=ae,ae=S);var nt=w0(D,ae),j=w0(D,Se);if(nt&&j&&(lt.rangeCount!==1||lt.anchorNode!==nt.node||lt.anchorOffset!==nt.offset||lt.focusNode!==j.node||lt.focusOffset!==j.offset)){var ot=bt.createRange();ot.setStart(nt.node,nt.offset),lt.removeAllRanges(),ae>Se?(lt.addRange(ot),lt.extend(j.node,j.offset)):(ot.setEnd(j.node,j.offset),lt.addRange(ot))}}}}for(bt=[],lt=D;lt=lt.parentNode;)lt.nodeType===1&&bt.push({element:lt,left:lt.scrollLeft,top:lt.scrollTop});for(typeof D.focus=="function"&&D.focus(),D=0;D<bt.length;D++){var Tt=bt[D];Tt.element.scrollLeft=Tt.left,Tt.element.scrollTop=Tt.top}}jr=!!Ed,Td=Ed=null}finally{Fe=h,Lt.p=c,At.T=o}}e.current=n,on=2}}function cd(){if(on===2){on=0;var e=Ii,n=Vs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=At.T,At.T=null;var o=Lt.p;Lt.p=2;var c=Fe;Fe|=4;try{Av(e,n.alternate,n)}finally{Fe=c,Lt.p=o,At.T=a}}on=3}}function fd(){if(on===4||on===3){on=0;var e=Pr;Pr=null,ye();var n=Ii,a=Vs,o=ia,c=Gv,h=(o&335544064)===o?10262:10256;if((a.subtreeFlags&h)!==0||(a.flags&h)!==0?on=5:(on=0,Vs=Ii=null,$v(n,n.pendingLanes)),h=n.pendingLanes,h===0&&(is=null),rt(o),a=a.stateNode,rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Re,a,void 0,(a.current.flags&128)===128)}catch{}if(c!==null){a=At.T,h=Lt.p,Lt.p=2,At.T=null;try{for(var S=n.onRecoverableError,D=0;D<c.length;D++){var X=c[D];S(X.value,{componentStack:X.stack})}}finally{At.T=a,Lt.p=h}}if(c=zr,S=Ir,Ir=null,c!==null&&(zr=null,S===null&&(S=[]),e!==null))for(X=0;X<c.length;X++)a=(0,c[X])(S),a!==void 0&&e.finished.finally(a);(ia&3)!==0&&ac(),aa(n),h=n.pendingLanes,(o&261930)!==0&&(h&42)!==0?n===tc?ol++:(ol=0,tc=n):(ol=0,tc=null),ll(0)}}function $v(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Vo(n)))}function ac(){return Pr!==null&&(Pr.skipTransition(),Pr=null),ud(),cd(),fd(),hd()}function hd(){if(on!==5)return!1;var e=Ii,n=sd;sd=0;var a=rt(ia),o=At.T,c=Lt.p;try{Lt.p=32>a?32:a,At.T=null,a=rd,rd=null;var h=Ii,S=ia;if(on=0,Vs=Ii=null,ia=0,(Fe&6)!==0)throw Error(s(331));var D=Fe;if(Fe|=4,Bv(h.current),Pv(h,h.current,S,a),Fe=D,ll(0,!1),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Re,h)}catch{}return!0}finally{Lt.p=c,At.T=o,$v(e,n)}}function t_(e,n,a){n=Ei(a,n),n=Rh(e.stateNode,n,2),e=Za(e,n,2),e!==null&&(Es(e,2),aa(e))}function qe(e,n,a){if(e.tag===3)t_(e,e,a);else for(;n!==null;){if(n.tag===3){t_(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(is===null||!is.has(o))){e=Ei(a,e),a=Qg(2),o=Za(n,a,2),o!==null&&(Kg(a,o,n,e),Es(o,2),aa(o));break}}n=n.return}}function dd(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new $1;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(id=!0,c.add(a),e=oM.bind(null,e,n,a),n.then(e,e))}function oM(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Ke===e&&(De&a)===a&&((fn===4||fn===3&&(De&62914560)===De&&300>Z()-Ku)&&(Fe&2)===0?Fr(e,0):Qu|=a,Or===De&&(Or=0)),aa(e)}function e_(e,n){n===0&&(n=Jl()),e=As(e,n),e!==null&&(Es(e,n),aa(e))}function lM(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),e_(e,a)}function uM(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),e_(e,a)}function cM(e,n){return qt(e,n)}var Gr=null,Vr=null,pd=!1,sc=!1,md=!1,ss=0;function aa(e){e!==Vr&&e.next===null&&(Vr===null?Gr=Vr=e:Vr=Vr.next=e),sc=!0,pd||(pd=!0,hM())}function ll(e,n){if(!md&&sc){md=!0;do for(var a=!1,o=Gr;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var h=0;else{var S=o.suspendedLanes,D=o.pingedLanes;h=(1<<31-Bn(42|e)+1)-1,h&=c&~(S&~D),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,s_(o,h))}else h=De,h=Ms(o,o===Ke?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ba(o,h)||(a=!0,s_(o,h));o=o.next}while(a);md=!1}}function fM(){n_()}function n_(){sc=pd=!1;var e=0;ss!==0&&EM()&&(e=ss);for(var n=Z(),a=null,o=Gr;o!==null;){var c=o.next,h=i_(o,n);h===0?(o.next=null,a===null?Gr=c:a.next=c,c===null&&(Vr=a)):(a=o,(e!==0||(h&3)!==0)&&(sc=!0)),o=c}on!==0&&on!==5||ll(e),ss!==0&&(ss=0)}function i_(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var S=31-Bn(h),D=1<<S,X=c[S];X===-1?((D&a)===0||(D&o)!==0)&&(c[S]=yf(D,n)):X<=n&&(e.expiredLanes|=D),h&=~D}if(n=Ke,a=De,a=Ms(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Xe===2||Xe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Jt(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ba(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Jt(o),rt(a)){case 2:case 8:a=te;break;case 32:a=Pt;break;case 268435456:a=se;break;default:a=Pt}return o=a_.bind(null,e),a=qt(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Jt(o),e.callbackPriority=2,e.callbackNode=null,2}function a_(e,n){if(on!==0&&on!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ac()&&e.callbackNode!==a)return null;var o=De;return o=Ms(e,e===Ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(kv(e,o,n),i_(e,Z()),e.callbackNode!=null&&e.callbackNode===a?a_.bind(null,e):null)}function s_(e,n){if(ac())return null;kv(e,n,!0)}function hM(){bM(function(){(Fe&6)!==0?qt(kt,fM):n_()})}function gd(){if(ss===0){var e=Ns;e===0&&(e=xs,xs<<=1,(xs&261888)===0&&(xs=256)),ss=e}return ss}function r_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:eu(e)}function dM(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var h=r_((c[ie]||null).action),S=o.submitter;S&&(n=(n=S[ie]||null)?r_(n.formAction):S.getAttribute("formAction"),n!==null&&(h=n,S=null));var D=new su("action","action",null,o,c);e.push({event:D,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(ss!==0){var X=new FormData(c,S);Th(a,{pending:!0,data:X,method:c.method,action:h},null,X)}}else typeof h=="function"&&(D.preventDefault(),X=new FormData(c,S),Th(a,{pending:!0,data:X,method:c.method,action:h},h,X))},currentTarget:c}]})}}for(var vd=0;vd<Vf.length;vd++){var _d=Vf[vd],pM=_d.toLowerCase(),mM=_d[0].toUpperCase()+_d.slice(1);Li(pM,"on"+mM)}Li(N0,"onAnimationEnd"),Li(L0,"onAnimationIteration"),Li(O0,"onAnimationStart"),Li("dblclick","onDoubleClick"),Li("focusin","onFocus"),Li("focusout","onBlur"),Li(T1,"onTransitionRun"),Li(b1,"onTransitionStart"),Li(A1,"onTransitionCancel"),Li(P0,"onTransitionEnd"),un("onMouseEnter",["mouseout","mouseover"]),un("onMouseLeave",["mouseout","mouseover"]),un("onPointerEnter",["pointerout","pointerover"]),un("onPointerLeave",["pointerout","pointerover"]),mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),mn("onBeforeInput",["compositionend","keypress","textInput","paste"]),mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ul="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gM=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ul));function o_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var S=o.length-1;0<=S;S--){var D=o[S],X=D.instance,it=D.currentTarget;if(D=D.listener,X!==h&&c.isPropagationStopped())break t;h=D,c.currentTarget=it;try{h(c)}catch(ct){lu(ct)}c.currentTarget=null,h=X}else for(S=0;S<o.length;S++){if(D=o[S],X=D.instance,it=D.currentTarget,D=D.listener,X!==h&&c.isPropagationStopped())break t;h=D,c.currentTarget=it;try{h(c)}catch(ct){lu(ct)}c.currentTarget=null,h=X}}}}function Ce(e,n){var a=n[ce];a===void 0&&(a=n[ce]=new Set);var o=e+"__bubble";a.has(o)||(l_(n,e,2,!1),a.add(o))}function yd(e,n,a){var o=0;n&&(o|=4),l_(a,e,o,n)}var rc="_reactListening"+Math.random().toString(36).slice(2);function xd(e){if(!e[rc]){e[rc]=!0,Je.forEach(function(a){a!=="selectionchange"&&(gM.has(a)||yd(a,!1,e),yd(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[rc]||(n[rc]=!0,yd("selectionchange",!1,n))}}function l_(e,n,a,o){switch(K_(n)){case 2:var c=lE;break;case 8:c=uE;break;default:c=Hd}a=c.bind(null,n,a,e),c=void 0,!Cf||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Sd(e,n,a,o,c){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var S=o.tag;if(S===3||S===4){var D=o.stateNode.containerInfo;if(D===c)break;if(S===4)for(S=o.return;S!==null;){var X=S.tag;if((X===3||X===4)&&S.stateNode.containerInfo===c)return;S=S.return}for(;D!==null;){if(S=Be(D),S===null)return;if(X=S.tag,X===5||X===6||X===26||X===27){o=h=S;continue t}D=D.parentNode}}o=o.return}l0(function(){var it=h,ct=Af(a),bt=[];t:{var et=z0.get(e);if(et!==void 0){var lt=su,Xt=e;switch(e){case"keypress":if(iu(a)===0)break t;case"keydown":case"keyup":lt=t1;break;case"focusin":Xt="focus",lt=Nf;break;case"focusout":Xt="blur",lt=Nf;break;case"beforeblur":case"afterblur":lt=Nf;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":lt=f0;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":lt=VS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":lt=s1;break;case N0:case L0:case O0:lt=qS;break;case P0:lt=o1;break;case"scroll":case"scrollend":lt=HS;break;case"wheel":lt=u1;break;case"copy":case"cut":case"paste":lt=WS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":lt=d0;break;case"submit":lt=i1;break;case"toggle":case"beforetoggle":lt=f1}var ae=(n&4)!==0,Se=!ae&&(e==="scroll"||e==="scrollend"),nt=ae?et!==null?et+"Capture":null:et;ae=[];for(var j=it,ot;j!==null;){var Tt=j;if(ot=Tt.stateNode,Tt=Tt.tag,Tt!==5&&Tt!==26&&Tt!==27||ot===null||nt===null||(Tt=Uo(j,nt),Tt!=null&&ae.push(cl(j,Tt,ot))),Se)break;j=j.return}0<ae.length&&(et=new lt(et,Xt,null,a,ct),bt.push({event:et,listeners:ae}))}}if((n&7)===0){t:{if(lt=e==="mouseover"||e==="pointerover",et=e==="mouseout"||e==="pointerout",lt&&a!==bf&&(Xt=a.relatedTarget||a.fromElement)&&(Be(Xt)||Xt[de]))break t;(et||lt)&&(Xt=ct.window===ct?ct:(lt=ct.ownerDocument)?lt.defaultView||lt.parentWindow:window,et?(lt=a.relatedTarget||a.toElement,et=it,lt=lt?Be(lt):null,lt!==null&&(Se=u(lt),ae=lt.tag,lt!==Se||ae!==5&&ae!==27&&ae!==6)&&(lt=null)):(et=null,lt=it),et!==lt&&(ae=f0,Tt="onMouseLeave",nt="onMouseEnter",j="mouse",(e==="pointerout"||e==="pointerover")&&(ae=d0,Tt="onPointerLeave",nt="onPointerEnter",j="pointer"),Se=et==null?Xt:Tn(et),ot=lt==null?Xt:Tn(lt),Xt=new ae(Tt,j+"leave",et,a,ct),Xt.target=Se,Xt.relatedTarget=ot,Tt=null,Be(ct)===it&&(ae=new ae(nt,j+"enter",lt,a,ct),ae.target=ot,ae.relatedTarget=Se,Tt=ae),Se=Tt,ae=et&&lt?z(et,lt,vM):null,et!==null&&u_(bt,Xt,et,ae,!1),lt!==null&&Se!==null&&u_(bt,Se,lt,ae,!0)))}t:{if(et=it?Tn(it):window,lt=et.nodeName&&et.nodeName.toLowerCase(),lt==="select"||lt==="input"&&et.type==="file")var Kt=S0;else if(y0(et))if(M0)Kt=S1;else{Kt=y1;var Ue=_1}else lt=et.nodeName,!lt||lt.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?it&&Tf(it.elementType)&&(Kt=S0):Kt=x1;if(Kt&&(Kt=Kt(e,it))){x0(bt,Kt,a,ct);break t}Ue&&Ue(e,et,it)}switch(Ue=it?Tn(it):window,e){case"focusin":(y0(Ue)||Ue.contentEditable==="true")&&(gr=Ue,Ff=it,Fo=null);break;case"focusout":Fo=Ff=gr=null;break;case"mousedown":Hf=!0;break;case"contextmenu":case"mouseup":case"dragend":Hf=!1,D0(bt,a,ct);break;case"selectionchange":if(E1)break;case"keydown":case"keyup":D0(bt,a,ct)}var le;if(Of)t:{switch(e){case"compositionstart":var pe="onCompositionStart";break t;case"compositionend":pe="onCompositionEnd";break t;case"compositionupdate":pe="onCompositionUpdate";break t}pe=void 0}else mr?v0(e,a)&&(pe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(pe="onCompositionStart");pe&&(p0&&a.locale!=="ko"&&(mr||pe!=="onCompositionStart"?pe==="onCompositionEnd"&&mr&&(le=u0()):(Ha=ct,Rf="value"in Ha?Ha.value:Ha.textContent,mr=!0)),Ue=oc(it,pe),0<Ue.length&&(pe=new h0(pe,e,null,a,ct),bt.push({event:pe,listeners:Ue}),le?pe.data=le:(le=_0(a),le!==null&&(pe.data=le)))),(le=d1?p1(e,a):m1(e,a))&&(pe=oc(it,"onBeforeInput"),0<pe.length&&(Ue=new h0("onBeforeInput","beforeinput",null,a,ct),bt.push({event:Ue,listeners:pe}),Ue.data=le)),dM(bt,e,it,a,ct)}o_(bt,n)})}function cl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function oc(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=Uo(e,a),c!=null&&o.unshift(cl(e,c,h)),c=Uo(e,n),c!=null&&o.push(cl(e,c,h))),e.tag===3)return o;e=e.return}return[]}function vM(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function u_(e,n,a,o,c){for(var h=n._reactName,S=[];a!==null&&a!==o;){var D=a,X=D.alternate,it=D.stateNode;if(D=D.tag,X!==null&&X===o)break;D!==5&&D!==26&&D!==27||it===null||(X=it,c?(it=Uo(a,h),it!=null&&S.unshift(cl(a,it,X))):c||(it=Uo(a,h),it!=null&&S.push(cl(a,it,X)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var _M=/\r\n?/g,yM=/\u0000|\uFFFD/g;function c_(e){return(typeof e=="string"?e:""+e).replace(_M,`
`).replace(yM,"")}function f_(e,n){return n=c_(n),c_(e)===n}function Ye(e,n,a,o,c,h){switch(a){case"children":if(typeof o=="string")n==="body"||n==="textarea"&&o===""||hr(e,o);else if(typeof o=="number"||typeof o=="bigint")n!=="body"&&hr(e,""+o);else return;break;case"className":tu(e,"class",o);break;case"tabIndex":tu(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":tu(e,a,o);break;case"style":r0(e,o,h);return;case"data":if(n!=="object"){tu(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=eu(o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ye(e,n,"name",c.name,c,null),Ye(e,n,"formEncType",c.formEncType,c,null),Ye(e,n,"formMethod",c.formMethod,c,null),Ye(e,n,"formTarget",c.formTarget,c,null)):(Ye(e,n,"encType",c.encType,c,null),Ye(e,n,"method",c.method,c,null),Ye(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=eu(o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=ji);return;case"onScroll":o!=null&&Ce("scroll",e);return;case"onScrollEnd":o!=null&&Ce("scrollend",e);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));(h!=null?h.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=eu(o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":Ce("beforetoggle",e),Ce("toggle",e),$l(e,"popover",o);break;case"xlinkActuate":da(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":da(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":da(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":da(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":da(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":da(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":da(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":da(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":da(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":$l(e,"is",o);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=BS.get(a)||a,$l(e,a,o);else return}ze=!0}function Md(e,n,a,o,c,h){switch(a){case"style":r0(e,o,h);return;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));(h!=null?h.__html:void 0)!==a&&(e.innerHTML=a)}}break;case"children":if(typeof o=="string")hr(e,o);else if(typeof o=="number"||typeof o=="bigint")hr(e,""+o);else return;break;case"onScroll":o!=null&&Ce("scroll",e);return;case"onScrollEnd":o!=null&&Ce("scrollend",e);return;case"onClick":o!=null&&(e.onclick=ji);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Wn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),h=a.slice(2,c?a.length-7:void 0),n=e[ie]||null,n=n!=null?n[a]:null,typeof n=="function"&&e.removeEventListener(h,n,c),typeof o=="function")){typeof n!="function"&&n!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(h,o,c);break t}ze=!0,a in e?e[a]=o:o===!0?e.setAttribute(a,""):$l(e,a,o)}return}ze=!0}function zn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ce("error",e),Ce("load",e);var o=!1,c=!1,h;for(h in a)if(a.hasOwnProperty(h)){var S=a[h];if(S!=null)switch(h){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ye(e,n,h,S,a,null)}}c&&Ye(e,n,"srcSet",a.srcSet,a,null),o&&Ye(e,n,"src",a.src,a,null);return;case"input":Ce("invalid",e);var D=h=S=c=null,X=null,it=null;for(o in a)if(a.hasOwnProperty(o)){var ct=a[o];if(ct!=null)switch(o){case"name":c=ct;break;case"type":S=ct;break;case"checked":X=ct;break;case"defaultChecked":it=ct;break;case"value":h=ct;break;case"defaultValue":D=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(s(137,n));break;default:Ye(e,n,o,ct,a,null)}}n0(e,h,D,X,it,S,c,!1);return;case"select":Ce("invalid",e),o=S=h=null;for(c in a)if(a.hasOwnProperty(c)&&(D=a[c],D!=null))switch(c){case"value":h=D;break;case"defaultValue":S=D;break;case"multiple":o=D;default:Ye(e,n,c,D,a,null)}n=h,a=S,e.multiple=!!o,n!=null?fr(e,!!o,n,!1):a!=null&&fr(e,!!o,a,!0);return;case"textarea":Ce("invalid",e),h=c=o=null;for(S in a)if(a.hasOwnProperty(S)&&(D=a[S],D!=null))switch(S){case"value":o=D;break;case"defaultValue":c=D;break;case"children":h=D;break;case"dangerouslySetInnerHTML":if(D!=null)throw Error(s(91));break;default:Ye(e,n,S,D,a,null)}a0(e,o,c,h);return;case"option":for(X in a)if(a.hasOwnProperty(X)&&(o=a[X],o!=null))switch(X){case"selected":e.selected=o&&typeof o!="function"&&typeof o!="symbol";break;default:Ye(e,n,X,o,a,null)}return;case"dialog":Ce("beforetoggle",e),Ce("toggle",e),Ce("cancel",e),Ce("close",e);break;case"iframe":case"object":Ce("load",e);break;case"video":case"audio":for(o=0;o<ul.length;o++)Ce(ul[o],e);break;case"image":Ce("error",e),Ce("load",e);break;case"details":Ce("toggle",e);break;case"embed":case"source":case"link":Ce("error",e),Ce("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(it in a)if(a.hasOwnProperty(it)&&(o=a[it],o!=null))switch(it){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ye(e,n,it,o,a,null)}return;default:if(Tf(n)){for(ct in a)a.hasOwnProperty(ct)&&(o=a[ct],o!==void 0&&Md(e,n,ct,o,a,void 0));return}}for(D in a)a.hasOwnProperty(D)&&(o=a[D],o!=null&&Ye(e,n,D,o,a,null))}var xM={};function SM(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,S=null,D=null,X=null,it=null,ct=null;for(lt in a){var bt=a[lt];if(a.hasOwnProperty(lt)&&bt!=null)switch(lt){case"checked":break;case"value":break;case"defaultValue":X=bt;default:o.hasOwnProperty(lt)||Ye(e,n,lt,null,o,bt)}}for(var et in o){var lt=o[et];if(bt=a[et],o.hasOwnProperty(et)&&(lt!=null||bt!=null))switch(et){case"type":lt!==bt&&(ze=!0),h=lt;break;case"name":lt!==bt&&(ze=!0),c=lt;break;case"checked":lt!==bt&&(ze=!0),it=lt;break;case"defaultChecked":lt!==bt&&(ze=!0),ct=lt;break;case"value":lt!==bt&&(ze=!0),S=lt;break;case"defaultValue":lt!==bt&&(ze=!0),D=lt;break;case"children":case"dangerouslySetInnerHTML":if(lt!=null)throw Error(s(137,n));break;default:lt!==bt&&Ye(e,n,et,lt,o,bt)}}Mf(e,S,D,X,it,ct,h,c);return;case"select":lt=S=D=et=null;for(h in a)if(X=a[h],a.hasOwnProperty(h)&&X!=null)switch(h){case"value":break;case"multiple":lt=X;default:o.hasOwnProperty(h)||Ye(e,n,h,null,o,X)}for(c in o)if(h=o[c],X=a[c],o.hasOwnProperty(c)&&(h!=null||X!=null))switch(c){case"value":h!==X&&(ze=!0),et=h;break;case"defaultValue":h!==X&&(ze=!0),D=h;break;case"multiple":h!==X&&(ze=!0),S=h;default:h!==X&&Ye(e,n,c,h,o,X)}n=D,a=S,o=lt,et!=null?fr(e,!!a,et,!1):!!o!=!!a&&(n!=null?fr(e,!!a,n,!0):fr(e,!!a,a?[]:"",!1));return;case"textarea":lt=et=null;for(D in a)if(c=a[D],a.hasOwnProperty(D)&&c!=null&&!o.hasOwnProperty(D))switch(D){case"value":break;case"children":break;default:Ye(e,n,D,null,o,c)}for(S in o)if(c=o[S],h=a[S],o.hasOwnProperty(S)&&(c!=null||h!=null))switch(S){case"value":c!==h&&(ze=!0),et=c;break;case"defaultValue":c!==h&&(ze=!0),lt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==h&&Ye(e,n,S,c,o,h)}i0(e,et,lt);return;case"option":for(var Xt in a)if(et=a[Xt],a.hasOwnProperty(Xt)&&et!=null&&!o.hasOwnProperty(Xt))switch(Xt){case"selected":e.selected=!1;break;default:Ye(e,n,Xt,null,o,et)}for(X in o)if(et=o[X],lt=a[X],o.hasOwnProperty(X)&&et!==lt&&(et!=null||lt!=null))switch(X){case"selected":et!==lt&&(ze=!0),e.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Ye(e,n,X,et,o,lt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in a)et=a[ae],a.hasOwnProperty(ae)&&et!=null&&!o.hasOwnProperty(ae)&&Ye(e,n,ae,null,o,et);for(it in o)if(et=o[it],lt=a[it],o.hasOwnProperty(it)&&et!==lt&&(et!=null||lt!=null))switch(it){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,n));break;default:Ye(e,n,it,et,o,lt)}return;default:if(Tf(n)){for(var Se in a)et=a[Se],a.hasOwnProperty(Se)&&et!==void 0&&!o.hasOwnProperty(Se)&&Md(e,n,Se,void 0,o,et);for(ct in o)et=o[ct],lt=a[ct],!o.hasOwnProperty(ct)||et===lt||et===void 0&&lt===void 0||Md(e,n,ct,et,o,lt);return}}for(var nt in a)et=a[nt],a.hasOwnProperty(nt)&&et!=null&&!o.hasOwnProperty(nt)&&Ye(e,n,nt,null,o,et);for(bt in o)et=o[bt],lt=a[bt],!o.hasOwnProperty(bt)||et===lt||et==null&&lt==null||Ye(e,n,bt,et,o,lt)}function h_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function MM(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],h=c.transferSize,S=c.initiatorType,D=c.duration;if(h&&D&&h_(S)){for(S=0,D=c.responseEnd,o+=1;o<a.length;o++){var X=a[o],it=X.startTime;if(it>D)break;var ct=X.transferSize,bt=X.initiatorType;ct&&h_(bt)&&(X=X.responseEnd,S+=ct*(X<D?1:(D-it)/(X-it)))}if(--o,n+=8*(h+S)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ed=null,Td=null;function fl(e){return e.nodeType===9?e:e.ownerDocument}function d_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function p_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function m_(e,n,a,o){return a=fl(a).createElement(e),a[Vt]=o,a[ie]=n,zn(a,e,n),Pe(a),a}function bd(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ad=null;function EM(){var e=window.event;return e&&e.type==="popstate"?e===Ad?!1:(Ad=e,!0):(Ad=null,!1)}var wd=typeof setTimeout=="function"?setTimeout:void 0,TM=typeof clearTimeout=="function"?clearTimeout:void 0,g_=typeof Promise=="function"?Promise:void 0,v_=typeof requestAnimationFrame=="function"?requestAnimationFrame:wd,bM=typeof queueMicrotask=="function"?queueMicrotask:typeof g_<"u"?function(e){return g_.resolve(null).then(e).catch(AM)}:wd;function AM(e){setTimeout(function(){throw e})}function rs(e){return e==="head"}function __(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),Zr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Pd(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Pd(a);for(var h=a.firstChild;h;){var S=h.nextSibling,D=h.nodeName;h[Ie]||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=S}}else a==="body"&&Pd(e.ownerDocument.body);a=c}while(a);Zr(n)}function y_(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function x_(e,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,e.style.viewTransitionName=n,a!=null&&(e.style.viewTransitionClass=a),a=getComputedStyle(e),a.display==="inline"){if(n=e.getClientRects(),n.length===1)var o=1;else for(var c=o=0;c<n.length;c++){var h=n[c];0<h.width&&0<h.height&&o++}o===1&&(e=e.style,e.display=n.length===1?"inline-block":"block",e.marginTop="-"+a.paddingTop,e.marginBottom="-"+a.paddingBottom)}}function S_(e,n){e=e.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;e.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,e.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),e.display==="inline-block"&&(n==null?e.display=e.margin="":(a=n.display,e.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?e.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],e.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],e.marginBottom=n==null||typeof n=="boolean"?"":n)))}function wM(e,n,a){return a=a.ownerDocument.defaultView,{rect:e,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=e.bottom&&0<=e.right&&e.top<=a.innerHeight&&e.left<=a.innerWidth}}function Cd(e){var n=e.getBoundingClientRect(),a=getComputedStyle(e);return wM(n,a,e)}function CM(e){return e.documentElement.clientHeight}function RM(e){this.addEventListener("load",e),this.addEventListener("error",e)}function DM(e,n,a,o,c,h,S,D,X){var it=n.nodeType===9?n:n.ownerDocument;try{var ct=it.startViewTransition({update:function(){var et=it.defaultView,lt=et.navigation&&et.navigation.transition,Xt=it.fonts.status;o();var ae=[];if(Xt==="loaded"&&(CM(it),it.fonts.status==="loading"&&ae.push(it.fonts.ready)),Xt=ae.length,e!==null)for(var Se=e.suspenseyImages,nt=0,j=0;j<Se.length;j++){var ot=Se[j];if(!ot.complete){var Tt=ot.getBoundingClientRect();if(0<Tt.bottom&&0<Tt.right&&Tt.top<et.innerHeight&&Tt.left<et.innerWidth){if(nt+=V_(ot),nt>cc){ae.length=Xt;break}ot=new Promise(RM.bind(ot)),ae.push(ot)}}}if(0<ae.length)return et=Promise.race([Promise.all(ae),new Promise(function(Kt){return setTimeout(Kt,500)})]).then(c,c),(lt?Promise.allSettled([lt.finished,et]):et).then(h,h);if(c(),lt)return lt.finished.then(h,h);h()},types:a});it.__reactViewTransition=ct;var bt=[];return ct.ready.then(function(){for(var et=it.documentElement.getAnimations({subtree:!0}),lt=0;lt<et.length;lt++){var Xt=et[lt],ae=Xt.effect,Se=ae.pseudoElement;if(Se!=null&&Se.startsWith("::view-transition")){bt.push(Xt),Xt=ae.getKeyframes();for(var nt=Se=void 0,j=!0,ot=0;ot<Xt.length;ot++){var Tt=Xt[ot],Kt=Tt.width;if(Se===void 0)Se=Kt;else if(Se!==Kt){j=!1;break}if(Kt=Tt.height,nt===void 0)nt=Kt;else if(nt!==Kt){j=!1;break}delete Tt.width,delete Tt.height,Tt.transform==="none"&&delete Tt.transform}j&&Se!==void 0&&nt!==void 0&&(ae.setKeyframes(Xt),j=getComputedStyle(ae.target,ae.pseudoElement),j.width!==Se||j.height!==nt)&&(j=Xt[0],j.width=Se,j.height=nt,j=Xt[Xt.length-1],j.width=Se,j.height=nt,ae.setKeyframes(Xt))}}S()},function(et){it.__reactViewTransition===ct&&(it.__reactViewTransition=null);try{if(typeof et=="object"&&et!==null)switch(et.name){case"InvalidStateError":(et.message==="View transition was skipped because document visibility state is hidden."||et.message==="Skipping view transition because document visibility state has become hidden."||et.message==="Skipping view transition because viewport size changed."||et.message==="Transition was aborted because of invalid state")&&(et=null)}et!==null&&X(et)}finally{o(),c(),S()}}),ct.finished.finally(function(){for(var et=0;et<bt.length;et++)bt[et].cancel();it.__reactViewTransition===ct&&(it.__reactViewTransition=null),D()}),ct}catch{return o(),c(),S(),null}}function ks(e,n){this._scope=document.documentElement,this._selector="::view-transition-"+e+"("+n+")"}ks.prototype.animate=function(e,n){return n=typeof n=="number"?{duration:n}:P({},n),n.pseudoElement=this._selector,this._scope.animate(e,n)},ks.prototype.getAnimations=function(){for(var e=this._scope,n=this._selector,a=e.getAnimations({subtree:!0}),o=[],c=0;c<a.length;c++){var h=a[c].effect;h!==null&&h.target===e&&h.pseudoElement===n&&o.push(a[c])}return o},ks.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function M_(e){return{name:e,group:new ks("group",e),imagePair:new ks("image-pair",e),old:new ks("old",e),new:new ks("new",e)}}function mi(e){this._fragmentFiber=e,this._observers=this._eventListeners=null}mi.prototype.addEventListener=function(e,n,a){var o=null,c=null;if(!(a!=null&&typeof a!="boolean"&&(o=a.signal||null,o!==null&&o.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var h=this._eventListeners;if(T_(h,e,n,a)===-1){var S=this,D=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(D=function(X){S.removeEventListener(e,n,a),typeof n=="function"?n.call(this,X):n.handleEvent(X)}),o!==null&&(c=S.removeEventListener.bind(S,e,n,a),o.addEventListener("abort",c,{once:!0}),c=o.removeEventListener.bind(o,"abort",c)),o=kr(a),h.push({type:e,listener:n,optionsOrUseCapture:a,attachedListener:D,cleanup:c}),g(this._fragmentFiber.child,!1,UM,e,D,o)}this._eventListeners=h}};function UM(e,n,a,o){return M(e).addEventListener(n,a,o),!1}mi.prototype.removeEventListener=function(e,n,a){var o=this._eventListeners;if(o!==null&&(n=T_(o,e,n,a),n!==-1)){var c=o[n];a=c.attachedListener;var h=c.cleanup;c=kr(c.optionsOrUseCapture),g(this._fragmentFiber.child,!1,NM,e,a,c),o.splice(n,1),h!==null&&h()}};function NM(e,n,a,o){return M(e).removeEventListener(n,a,o),!1}function kr(e){return e!=null&&typeof e!="boolean"&&(e.once===!0||e.signal instanceof AbortSignal)?{capture:e.capture,passive:e.passive}:e}function E_(e){return e==null?"c=0":typeof e=="boolean"?"c="+(e?"1":"0"):"c="+(e.capture?"1":"0")}function T_(e,n,a,o){if(e.length===0)return-1;o=E_(o);for(var c=0;c<e.length;c++){var h=e[c];if(h.type===n&&h.listener===a&&E_(h.optionsOrUseCapture)===o)return c}return-1}mi.prototype.dispatchEvent=function(e){var n=y(this._fragmentFiber);if(n===null)return!0;n=M(n);var a=this._eventListeners;if(a!==null&&0<a.length||!e.bubbles){var o=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var c=0;c<a.length;c++){var h=a[c];o.addEventListener(h.type,h.attachedListener,kr(h.optionsOrUseCapture))}if(n.appendChild(o),e=o.dispatchEvent(e),a)for(c=0;c<a.length;c++)h=a[c],o.removeEventListener(h.type,h.attachedListener,kr(h.optionsOrUseCapture));return n.removeChild(o),e}return n.dispatchEvent(e)},mi.prototype.focus=function(e){g(this._fragmentFiber.child,!0,b_,e,void 0,void 0)};function b_(e,n){return e.tag===6?!1:(e=M(e),XM(e,n))}mi.prototype.focusLast=function(e){var n=[];g(this._fragmentFiber.child,!0,Rd,n,void 0,void 0);for(var a=n.length-1;0<=a&&!b_(n[a],e);a--);};function Rd(e,n){return n.push(e),!1}mi.prototype.blur=function(){var e=y(this._fragmentFiber);e!==null&&(e=M(e),e=fl(e).activeElement,e!==null&&g(this._fragmentFiber.child,!1,LM,e,void 0,void 0))};function LM(e,n){return e.tag===6?!1:(e=M(e),e===n||e.contains(n)?(n.blur(),!0):!1)}mi.prototype.observeUsing=function(e){this._observers===null&&(this._observers=new Set),this._observers.add(e),g(this._fragmentFiber.child,!1,OM,e,void 0,void 0)};function OM(e,n){return e.tag===6||(e=M(e),n.observe(e)),!1}mi.prototype.unobserveUsing=function(e){var n=this._observers;if(n!==null&&n.has(e)){n.delete(e),g(this._fragmentFiber.child,!1,PM,e,void 0,void 0);for(var a=n=0;a<Bi.length;a++){var o=Bi[a];o.fragmentInstance===this&&o.observer===e?e.unobserve(o.instance):Bi[n++]=o}Bi.length=n}};function PM(e,n){return e.tag===6||(e=M(e),n.unobserve(e)),!1}var Bi=[],Dd=!1;function zM(e,n,a){Bi.push({fragmentInstance:e,observer:n,instance:a}),Dd||(Dd=!0,qM(function(){Dd=!1;var o=Bi;Bi=[];for(var c=0;c<o.length;c++){var h=o[c];h.observer.unobserve(h.instance)}}))}mi.prototype.getClientRects=function(){var e=[];return g(this._fragmentFiber.child,!1,IM,e,void 0,void 0),e};function IM(e,n){if(e.tag===6){e=e.stateNode;var a=e.ownerDocument.createRange();a.selectNodeContents(e),n.push.apply(n,a.getClientRects())}else e=M(e),n.push.apply(n,e.getClientRects());return!1}mi.prototype.getRootNode=function(e){var n=y(this._fragmentFiber);return n===null?this:M(n).getRootNode(e)},mi.prototype.compareDocumentPosition=function(e){var n=y(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];g(this._fragmentFiber.child,!1,Rd,a,void 0,void 0);var o=M(n);if(a.length===0){if(a=o,x(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var c=o=a.compareDocumentPosition(e);return a===e?c=Node.DOCUMENT_POSITION_CONTAINS:o&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=E(n)[1],a===null?c=Node.DOCUMENT_POSITION_PRECEDING:(e=M(a).compareDocumentPosition(e),c=e===0||e&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),c|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=M(a[0]),c=M(a[a.length-1]);var h=x(this._fragmentFiber)?n.parentElement:o;if(h==null)return Node.DOCUMENT_POSITION_DISCONNECTED;o=h.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,h=h.compareDocumentPosition(c)&Node.DOCUMENT_POSITION_CONTAINED_BY;var S=n.compareDocumentPosition(e),D=c.compareDocumentPosition(e),X=S&Node.DOCUMENT_POSITION_CONTAINED_BY||D&Node.DOCUMENT_POSITION_CONTAINED_BY;return D=o&&h&&S&Node.DOCUMENT_POSITION_FOLLOWING&&D&Node.DOCUMENT_POSITION_PRECEDING,n=o&&n===e||h&&c===e||X||D?Node.DOCUMENT_POSITION_CONTAINED_BY:!o&&n===e||!h&&c===e?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:S,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||BM(n,this._fragmentFiber,a[0],a[a.length-1],e)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function BM(e,n,a,o,c){var h=Be(c);if(e&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!h)t:{for(;h!==null;){if(h.tag===7&&(h===n||h.alternate===n)){a=!0;break t}h=h.return}a=!1}return a}if(e&Node.DOCUMENT_POSITION_CONTAINS){if(h===null)return h=c.ownerDocument,c===h||c===h.documentElement||c===h.body;t:{for(h=n,n=y(n);h!==null;){if(!(h.tag!==5&&h.tag!==3&&h.tag!==27||h!==n&&h.alternate!==n)){h=!0;break t}h=h.return}h=!1}return h}return e&Node.DOCUMENT_POSITION_PRECEDING?((n=!!h)&&!(n=h===a)&&(n=z(a,h,I),n===null?n=!1:(g(n,!0,w,h,a),h=_,_=null,n=h!==null)),n):e&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!h)&&!(n=h===o)&&(n=z(o,h,I),n===null?n=!1:(g(n,!0,b,h,o),h=_,R=_=null,n=h!==null)),n):!1}function A_(e,n){var a=e.ownerDocument.createRange();a.selectNodeContents(e),e=a.getBoundingClientRect(),window.scrollTo(window.scrollX+e.left,n?window.scrollY+e.top:window.scrollY+e.bottom-window.innerHeight)}mi.prototype.scrollIntoView=function(e){if(typeof e=="object")throw Error(s(566));var n=[];g(this._fragmentFiber.child,!1,Rd,n,void 0,void 0);var a=e!==!1;if(n.length===0){var o=E(this._fragmentFiber);if(o=a?o[1]||o[0]||y(this._fragmentFiber):o[0]||o[1],o===null)return;if(o.tag===6){e=M(o),A_(e,a);return}if(o=M(o),o.nodeType!==9){if(o.nodeType===11){a="host"in o?o.host:null,a!==null&&a.scrollIntoView(e);return}o.scrollIntoView(e)}}for(o=a?n.length-1:0;o!==(a?-1:n.length);){var c=n[o];c.tag===6?(c=M(c),A_(c,a)):M(c).scrollIntoView(e),o+=a?-1:1}};function FM(e,n){return e=M(e),w_(e,n),!1}function w_(e,n){e.reactFragments==null&&(e.reactFragments=new Set),e.reactFragments.add(n)}function C_(e,n){var a=n._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o];e.addEventListener(c.type,c.attachedListener,kr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(h){for(var S=0,D=0;D<Bi.length;D++){var X=Bi[D];(X.fragmentInstance!==n||X.observer!==h||X.instance!==e)&&(Bi[S++]=X)}Bi.length=S,h.observe(e)}),w_(e,n))}function HM(e,n){var a=n._eventListeners;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o];e.removeEventListener(c.type,c.attachedListener,kr(c.optionsOrUseCapture))}e.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(h){typeof h.rootMargin=="string"?zM(n,h,e):h.unobserve(e)}),e.reactFragments!=null&&e.reactFragments.delete(n))}function Ud(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ud(a),fe(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function GM(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[Ie])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=Ci(e.nextSibling),e===null)break}return null}function VM(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ci(e.nextSibling),e===null))return null;return e}function R_(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ci(e.nextSibling),e===null))return null;return e}function Nd(e){return e.data==="$?"||e.data==="$~"}function Ld(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function kM(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function Ci(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Od=null;function D_(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Ci(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function U_(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function XM(e,n){function a(){o=!0}if(e.ownerDocument.activeElement===e)return!0;var o=!1;try{e.ownerDocument.addEventListener("focus",a,!0),(e.focus||HTMLElement.prototype.focus).call(e,n)}finally{e.ownerDocument.removeEventListener("focus",a,!0)}return o}function qM(e){v_(function(){v_(function(n){return e(n)})})}function N_(e,n,a){switch(n=fl(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function L_(e,n,a){for(var o in a){var c=a[o];a.hasOwnProperty(o)&&c!=null&&Ye(e,n,o,null,xM,c)}a.dangerouslySetInnerHTML!=null&&(e.textContent=""),e.onclick===ji&&(e.onclick=null),fe(e)}function Pd(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);fe(e)}var Ri=new Map,O_=new Set;function hl(e){if(typeof e.getRootNode=="function"){var n=e.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return e.nodeType===9?e:e.ownerDocument}var Aa=Lt.d;Lt.d={f:YM,r:WM,D:jM,C:ZM,L:QM,m:KM,X:$M,S:JM,M:tE};function YM(){var e=Aa.f(),n=ec();return e||n}function WM(e){var n=Ee(e);n!==null&&n.tag===5&&n.type==="form"?zg(n):Aa.r(e)}var Xr=typeof document>"u"?null:document;function P_(e,n,a){var o=Xr;if(o&&typeof n=="string"&&n){var c=Si(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),O_.has(c)||(O_.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),zn(n,"link",e),Pe(n),o.head.appendChild(n)))}}function jM(e){Aa.D(e),P_("dns-prefetch",e,null)}function ZM(e,n){Aa.C(e,n),P_("preconnect",e,n)}function QM(e,n,a){Aa.L(e,n,a);var o=Xr;if(o&&e&&n){var c='link[rel="preload"][as="'+Si(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Si(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Si(a.imageSizes)+'"]')):c+='[href="'+Si(e)+'"]';var h=c;switch(n){case"style":h=qr(e);break;case"script":h=Yr(e)}if(!(Ri.has(h)||(e=P({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Ri.set(h,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(dl(h))||n==="script"&&o.querySelector(pl(h))))){var S=o.createElement("link");zn(S,"link",e),n==="style"&&(S[Oe]=!0,S.onload=S.onerror=function(){Fa(S)}),Pe(S),o.head.appendChild(S)}}}function KM(e,n){Aa.m(e,n);var a=Xr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Si(o)+'"][href="'+Si(e)+'"]',h=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=Yr(e)}if(!Ri.has(h)&&(e=P({rel:"modulepreload",href:e},n),Ri.set(h,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(pl(h)))return}o=a.createElement("link"),zn(o,"link",e),Pe(o),a.head.appendChild(o)}}}function JM(e,n,a){Aa.S(e,n,a);var o=Xr;if(o&&e){var c=oi(o).hoistableStyles,h=qr(e);n=n||"default";var S=c.get(h);if(!S){var D={loading:0,preload:null};if(S=o.querySelector(dl(h)))D.loading=5;else{e=P({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Ri.get(h))&&zd(e,a);var X=S=o.createElement("link");Pe(X),zn(X,"link",e),X._p=new Promise(function(it,ct){X.onload=it,X.onerror=ct}),X.addEventListener("load",function(){D.loading|=1}),X.addEventListener("error",function(){D.loading|=2}),D.loading|=4,lc(S,n,o)}S={type:"stylesheet",instance:S,count:1,state:D},c.set(h,S)}}}function $M(e,n){Aa.X(e,n);var a=Xr;if(a&&e){var o=oi(a).hoistableScripts,c=Yr(e),h=o.get(c);h||(h=a.querySelector(pl(c)),h||(e=P({src:e,async:!0},n),(n=Ri.get(c))&&Id(e,n),h=a.createElement("script"),Pe(h),zn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function tE(e,n){Aa.M(e,n);var a=Xr;if(a&&e){var o=oi(a).hoistableScripts,c=Yr(e),h=o.get(c);h||(h=a.querySelector(pl(c)),h||(e=P({src:e,async:!0,type:"module"},n),(n=Ri.get(c))&&Id(e,n),h=a.createElement("script"),Pe(h),zn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function z_(e,n,a,o){var c=(c=re.current)?hl(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=qr(a.href),n=oi(c).hoistableStyles,o=n.get(a),o||(o={type:"style",instance:null,count:0,state:null},n.set(a,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=qr(a.href);var h=oi(c).hoistableStyles,S=h.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,S),(h=c.querySelector(dl(e)))?h._p||(S.instance=h,S.state.loading=5):(h=Ri.get(e),h||(h={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Ri.set(e,h)),eE(c,e,h,S.state))),n&&o===null)throw Error(s(528,""));return S}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Yr(a),n=oi(c).hoistableScripts,o=n.get(a),o||(o={type:"script",instance:null,count:0,state:null},n.set(a,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function qr(e){return'href="'+Si(e)+'"'}function dl(e){return'link[rel="stylesheet"]['+e+"]"}function I_(e){return P({},e,{"data-precedence":e.precedence,precedence:null})}function eE(e,n,a,o){if(n=e.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Oe]!==!0){o.loading=1;return}}else n=e.createElement("link"),n[Oe]=!0,n.onload=n.onerror=Fa.bind(null,n),zn(n,"link",a),Pe(n),e.head.appendChild(n);o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2})}function Yr(e){return'[src="'+Si(e)+'"]'}function pl(e){return"script[async]"+e}function B_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Si(a.href)+'"]');if(o)return n.instance=o,Pe(o),o;var c=P({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),Pe(o),zn(o,"style",c),lc(o,a.precedence,e),n.instance=o;case"stylesheet":c=qr(a.href);var h=e.querySelector(dl(c));if(h)return n.state.loading|=4,n.instance=h,Pe(h),h;o=I_(a),(c=Ri.get(c))&&zd(o,c),h=(e.ownerDocument||e).createElement("link"),Pe(h);var S=h;return S._p=new Promise(function(D,X){S.onload=D,S.onerror=X}),zn(h,"link",o),n.state.loading|=4,lc(h,a.precedence,e),n.instance=h;case"script":return h=Yr(a.src),(c=e.querySelector(pl(h)))?(n.instance=c,Pe(c),c):(o=a,(c=Ri.get(h))&&(o=P({},a),Id(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),Pe(c),zn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,lc(o,a.precedence,e));return n.instance}function lc(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,h=c,S=0;S<o.length;S++){var D=o[S];if(D.dataset.precedence===n)h=D;else if(h!==c)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function zd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Id(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var uc=null;function F_(e,n,a){if(uc===null){var o=new Map,c=uc=new Map;c.set(a,o)}else c=uc,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var h=a[c];if(!(h[Ie]||h[Vt]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var S=h.getAttribute(n)||"";S=e+S;var D=o.get(S);D?D.push(h):o.set(S,[h])}}return o}function Bd(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function nE(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function H_(e,n){return e==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function G_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function V_(e){return(e.width||100)*(e.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function k_(e,n){typeof n.decode=="function"&&(e.imgCount++,n.complete||(e.imgBytes+=V_(n),e.suspenseyImages.push(n)),e=sE.bind(e),n.decode().then(e,e))}function iE(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=qr(o.href),h=n.querySelector(dl(c));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ml.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,Pe(h);return}h=n.ownerDocument||n,o=I_(o),(c=Ri.get(c))&&zd(o,c),h=h.createElement("link"),Pe(h);var S=h;S._p=new Promise(function(D,X){S.onload=D,S.onerror=X}),zn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ml.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var cc=0;function aE(e,n){return e.stylesheets&&e.count===0&&hc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&cc===0&&(cc=62500*MM());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&hc(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>cc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function X_(e){if(e.count===0&&(e.imgCount===0||!e.waitingForImages)){if(e.stylesheets)hc(e,e.stylesheets);else if(e.unsuspend){var n=e.unsuspend;e.unsuspend=null,n()}}}function ml(){this.count--,X_(this)}function sE(){this.imgCount--,X_(this)}var fc=null;function hc(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,fc=new Map,n.forEach(rE,e),fc=null,ml.call(e))}function rE(e,n){if(!(n.state.loading&4)){var a=fc.get(e);if(a)var o=a.get(null);else{a=new Map,fc.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var S=c[h];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),o=S)}o&&a.set(null,o)}c=n.instance,S=c.getAttribute("data-precedence"),h=a.get(S)||o,h===o&&a.set(null,c),a.set(S,c),this.count++,o=ml.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),h?h.parentNode.insertBefore(c,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var Wr={$$typeof:K,Provider:null,Consumer:null,_currentValue:G,_currentValue2:G,_threadCount:0};function oE(e,n,a,o,c,h,S,D,X){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Do(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Do(0),this.hiddenUpdates=Do(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=X,this.transitionTypes=null,this.incompleteTransitions=new Map}function q_(e,n,a,o,c,h,S,D,X,it,ct,bt){return e=new oE(e,n,a,S,X,it,ct,bt,D),n=1,h===!0&&(n|=24),h=ti(3,null,null,n),e.current=h,h.stateNode=e,n=$f(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},ih(h),e}function Y_(e){return e?(e=yr,e):yr}function W_(e,n,a,o,c,h){c=Y_(c),o.context===null?o.context=c:o.pendingContext=c,o=ja(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Za(e,o,n),a!==null&&(ai(a,e,n),Yo(a,e,n))}function j_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Fd(e,n){j_(e,n),(e=e.alternate)&&j_(e,n)}function Z_(e){if(e.tag===13||e.tag===31){var n=As(e,67108864);n!==null&&ai(n,e,67108864),Fd(e,67108864)}}function Q_(e){if(e.tag===13||e.tag===31){var n=pi();n=gt(n);var a=As(e,n);a!==null&&ai(a,e,n),Fd(e,n)}}var jr=!0;function lE(e,n,a,o){var c=At.T;At.T=null;var h=Lt.p;try{Lt.p=2,Hd(e,n,a,o)}finally{Lt.p=h,At.T=c}}function uE(e,n,a,o){var c=At.T;At.T=null;var h=Lt.p;try{Lt.p=8,Hd(e,n,a,o)}finally{Lt.p=h,At.T=c}}function Hd(e,n,a,o){if(jr){var c=Gd(o);if(c===null)Sd(e,n,o,dc,a),J_(e,o);else if(fE(c,e,n,a,o))o.stopPropagation();else if(J_(e,o),n&4&&-1<cE.indexOf(e)){for(;c!==null;){var h=Ee(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var S=xi(h.pendingLanes);if(S!==0){var D=h;for(D.pendingLanes|=2,D.entangledLanes|=2;S;){var X=1<<31-Bn(S);D.entanglements[1]|=X,S&=~X}aa(h),(Fe&6)===0&&(Ju=Z()+500,ll(0))}}break;case 31:case 13:D=As(h,2),D!==null&&ai(D,h,2),ec(),Fd(h,2)}if(h=Gd(o),h===null&&Sd(e,n,o,dc,a),h===c)break;c=h}c!==null&&o.stopPropagation()}else Sd(e,n,o,null,a)}}function Gd(e){return e=Af(e),Vd(e)}var dc=null;function Vd(e){if(dc=null,e=Be(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return dc=e,null}function K_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ht()){case kt:return 2;case te:return 8;case Pt:case Ut:return 32;case se:return 268435456;default:return 32}default:return 32}}var kd=!1,os=null,ls=null,us=null,gl=new Map,vl=new Map,cs=[],cE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function J_(e,n){switch(e){case"focusin":case"focusout":os=null;break;case"dragenter":case"dragleave":ls=null;break;case"mouseover":case"mouseout":us=null;break;case"pointerover":case"pointerout":gl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":vl.delete(n.pointerId)}}function _l(e,n,a,o,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},n!==null&&(n=Ee(n),n!==null&&Z_(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function fE(e,n,a,o,c){switch(n){case"focusin":return os=_l(os,e,n,a,o,c),!0;case"dragenter":return ls=_l(ls,e,n,a,o,c),!0;case"mouseover":return us=_l(us,e,n,a,o,c),!0;case"pointerover":var h=c.pointerId;return gl.set(h,_l(gl.get(h)||null,e,n,a,o,c)),!0;case"gotpointercapture":return h=c.pointerId,vl.set(h,_l(vl.get(h)||null,e,n,a,o,c)),!0}return!1}function $_(e){var n=Be(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Wt(e.priority,function(){Q_(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Wt(e.priority,function(){Q_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function pc(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Gd(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);bf=o,a.target.dispatchEvent(o),bf=null}else return n=Ee(a),n!==null&&Z_(n),e.blockedOn=a,!1;n.shift()}return!0}function ty(e,n,a){pc(e)&&a.delete(n)}function hE(){kd=!1,os!==null&&pc(os)&&(os=null),ls!==null&&pc(ls)&&(ls=null),us!==null&&pc(us)&&(us=null),gl.forEach(ty),vl.forEach(ty)}function mc(e,n){e.blockedOn===n&&(e.blockedOn=null,kd||(kd=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,hE)))}var gc=null;function ey(e){gc!==e&&(gc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){gc===e&&(gc=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(Vd(o||a)===null)continue;break}var h=Ee(a);h!==null&&(e.splice(n,3),n-=3,Th(h,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function Zr(e){function n(X){return mc(X,e)}os!==null&&mc(os,e),ls!==null&&mc(ls,e),us!==null&&mc(us,e),gl.forEach(n),vl.forEach(n);for(var a=0;a<cs.length;a++){var o=cs[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<cs.length&&(a=cs[0],a.blockedOn===null);)$_(a),a.blockedOn===null&&cs.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],h=a[o+1],S=c[ie]||null;if(typeof h=="function")S||ey(a);else if(S){var D=null;if(h&&h.hasAttribute("formAction")){if(c=h,S=h[ie]||null)D=S.formAction;else if(Vd(c)!==null)continue}else D=S.action;typeof D=="function"?a[o+1]=D:(a.splice(o,3),o-=3),ey(a)}}}function ny(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(S){return c=S})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Xd(e){this._internalRoot=e}vc.prototype.render=Xd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=pi();W_(a,o,e,n,null,null)},vc.prototype.unmount=Xd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;W_(e.current,2,null,e,null,null),ec(),n[de]=null}};function vc(e){this._internalRoot=e}vc.prototype.unstable_scheduleHydration=function(e){if(e){var n=It();e={blockedOn:null,target:e,priority:n};for(var a=0;a<cs.length&&n!==0&&n<cs[a].priority;a++);cs.splice(a,0,e),a===0&&$_(e)}};var iy=t.version;if(iy!=="19.3.1")throw Error(s(527,iy,"19.3.1"));Lt.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=m(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var dE={bundleType:0,version:"19.3.1",rendererPackageName:"react-dom",currentDispatcherRef:At,reconcilerVersion:"19.3.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_c.isDisabled&&_c.supportsFiber)try{Re=_c.inject(dE),rn=_c}catch{}}return xl.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",c=Yg,h=Wg,S=jg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=q_(e,1,!1,null,null,a,o,null,c,h,S,ny),e[de]=n.current,xd(e),new Xd(n)},xl.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,c="",h=Yg,S=Wg,D=jg,X=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(D=a.onRecoverableError),a.formState!==void 0&&(X=a.formState)),n=q_(e,1,!0,n,a??null,o,c,X,h,S,D,ny),n.context=Y_(null),a=n.current,o=pi(),o=gt(o),c=ja(o),c.callback=null,Za(a,c,o),a=o,n.current.lanes=a,Es(n,a),aa(n),e[de]=n.current,xd(e),new vc(n)},xl.version="19.3.1",xl}var dy;function bE(){if(dy)return Wd.exports;dy=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),Wd.exports=TE(),Wd.exports}var AE=bE();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wE=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ox=(...r)=>r.filter((t,i,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===i).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var CE={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RE=ge.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:l="",children:u,iconNode:f,...d},p)=>ge.createElement("svg",{ref:p,...CE,width:t,height:t,stroke:r,strokeWidth:s?Number(i)*24/Number(t):i,className:Ox("lucide",l),...d},[...f.map(([m,v])=>ge.createElement(m,v)),...Array.isArray(u)?u:[u]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=(r,t)=>{const i=ge.forwardRef(({className:s,...l},u)=>ge.createElement(RE,{ref:u,iconNode:t,className:Ox(`lucide-${wE(r)}`,s),...l}));return i.displayName=`${r}`,i};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DE=Yi("Compass",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=Yi("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UE=Yi("Maximize",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NE=Yi("Navigation",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LE=Yi("Pause",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OE=Yi("Play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PE=Yi("Settings2",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Px=Yi("Volume2",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zE=Yi("VolumeX",[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=Yi("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IE=Yi("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wm="180",BE=0,gy=1,FE=2,zx=1,Ix=2,Na=3,ys=0,qn=1,_i=2,Oa=0,go=1,nr=2,vy=3,_y=4,HE=5,Js=100,GE=101,VE=102,kE=103,XE=104,qE=200,YE=201,WE=202,jE=203,Np=204,Lp=205,ZE=206,QE=207,KE=208,JE=209,$E=210,tT=211,eT=212,nT=213,iT=214,Op=0,Pp=1,zp=2,_o=3,Ip=4,Bp=5,Fp=6,Hp=7,Bx=0,aT=1,sT=2,Pa=0,Fx=1,Hx=2,Gx=3,Cm=4,Vx=5,kx=6,Xx=7,qx=300,yo=301,xo=302,sf=303,Gp=304,mf=306,Vp=1e3,tr=1001,kp=1002,yi=1003,rT=1004,yc=1005,ra=1006,Kd=1007,er=1008,qi=1009,Yx=1010,Wx=1011,Bl=1012,Rm=1013,ir=1014,oa=1015,Xi=1016,Dm=1017,Um=1018,Fl=1020,jx=35902,Zx=35899,Qx=1021,Kx=1022,ki=1023,Hl=1026,Gl=1027,Nm=1028,Lm=1029,Jx=1030,Om=1031,Pm=1033,Kc=33776,Jc=33777,$c=33778,tf=33779,Xp=35840,qp=35841,Yp=35842,Wp=35843,jp=36196,Zp=37492,Qp=37496,Kp=37808,Jp=37809,$p=37810,tm=37811,em=37812,nm=37813,im=37814,am=37815,sm=37816,rm=37817,om=37818,lm=37819,um=37820,cm=37821,fm=36492,hm=36494,dm=36495,pm=36283,mm=36284,gm=36285,vm=36286,oT=3200,lT=3201,$x=0,uT=1,_s="",kn="srgb",So="srgb-linear",rf="linear",We="srgb",Qr=7680,yy=519,cT=512,fT=513,hT=514,tS=515,dT=516,pT=517,mT=518,gT=519,xy=35044,Sy="300 es",la=2e3,of=2001;class bo{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,t);t.target=null}}}const Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let My=1234567;const Ll=Math.PI/180,Vl=180/Math.PI;function rr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Gn[r&255]+Gn[r>>8&255]+Gn[r>>16&255]+Gn[r>>24&255]+"-"+Gn[t&255]+Gn[t>>8&255]+"-"+Gn[t>>16&15|64]+Gn[t>>24&255]+"-"+Gn[i&63|128]+Gn[i>>8&255]+"-"+Gn[i>>16&255]+Gn[i>>24&255]+Gn[s&255]+Gn[s>>8&255]+Gn[s>>16&255]+Gn[s>>24&255]).toLowerCase()}function Ae(r,t,i){return Math.max(t,Math.min(i,r))}function zm(r,t){return(r%t+t)%t}function vT(r,t,i,s,l){return s+(r-t)*(l-s)/(i-t)}function _T(r,t,i){return r!==t?(i-r)/(t-r):0}function Ol(r,t,i){return(1-i)*r+i*t}function yT(r,t,i,s){return Ol(r,t,1-Math.exp(-i*s))}function xT(r,t=1){return t-Math.abs(zm(r,t*2)-t)}function ST(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*(3-2*r))}function MT(r,t,i){return r<=t?0:r>=i?1:(r=(r-t)/(i-t),r*r*r*(r*(r*6-15)+10))}function ET(r,t){return r+Math.floor(Math.random()*(t-r+1))}function TT(r,t){return r+Math.random()*(t-r)}function bT(r){return r*(.5-Math.random())}function AT(r){r!==void 0&&(My=r);let t=My+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wT(r){return r*Ll}function CT(r){return r*Vl}function RT(r){return(r&r-1)===0&&r!==0}function DT(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function UT(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function NT(r,t,i,s,l){const u=Math.cos,f=Math.sin,d=u(i/2),p=f(i/2),m=u((t+s)/2),v=f((t+s)/2),g=u((t-s)/2),y=f((t-s)/2),x=u((s-t)/2),E=f((s-t)/2);switch(l){case"XYX":r.set(d*v,p*g,p*y,d*m);break;case"YZY":r.set(p*y,d*v,p*g,d*m);break;case"ZXZ":r.set(p*g,p*y,d*v,d*m);break;case"XZX":r.set(d*v,p*E,p*x,d*m);break;case"YXY":r.set(p*x,d*v,p*E,d*m);break;case"ZYZ":r.set(p*E,p*x,d*v,d*m);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function fo(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Jn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Sn={DEG2RAD:Ll,RAD2DEG:Vl,generateUUID:rr,clamp:Ae,euclideanModulo:zm,mapLinear:vT,inverseLerp:_T,lerp:Ol,damp:yT,pingpong:xT,smoothstep:ST,smootherstep:MT,randInt:ET,randFloat:TT,randFloatSpread:bT,seededRandom:AT,degToRad:wT,radToDeg:CT,isPowerOfTwo:RT,ceilPowerOfTwo:DT,floorPowerOfTwo:UT,setQuaternionFromProperEuler:NT,normalize:Jn,denormalize:fo};class zt{constructor(t=0,i=0){zt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ae(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,f=this.y-t.y;return this.x=u*s-f*l+t.x,this.y=u*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xn{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,f,d){let p=s[l+0],m=s[l+1],v=s[l+2],g=s[l+3];const y=u[f+0],x=u[f+1],E=u[f+2],T=u[f+3];if(d===0){t[i+0]=p,t[i+1]=m,t[i+2]=v,t[i+3]=g;return}if(d===1){t[i+0]=y,t[i+1]=x,t[i+2]=E,t[i+3]=T;return}if(g!==T||p!==y||m!==x||v!==E){let M=1-d;const _=p*y+m*x+v*E+g*T,R=_>=0?1:-1,w=1-_*_;if(w>Number.EPSILON){const I=Math.sqrt(w),z=Math.atan2(I,_*R);M=Math.sin(M*z)/I,d=Math.sin(d*z)/I}const b=d*R;if(p=p*M+y*b,m=m*M+x*b,v=v*M+E*b,g=g*M+T*b,M===1-d){const I=1/Math.sqrt(p*p+m*m+v*v+g*g);p*=I,m*=I,v*=I,g*=I}}t[i]=p,t[i+1]=m,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,u,f){const d=s[l],p=s[l+1],m=s[l+2],v=s[l+3],g=u[f],y=u[f+1],x=u[f+2],E=u[f+3];return t[i]=d*E+v*g+p*x-m*y,t[i+1]=p*E+v*y+m*g-d*x,t[i+2]=m*E+v*x+d*y-p*g,t[i+3]=v*E-d*g-p*y-m*x,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,f=t._order,d=Math.cos,p=Math.sin,m=d(s/2),v=d(l/2),g=d(u/2),y=p(s/2),x=p(l/2),E=p(u/2);switch(f){case"XYZ":this._x=y*v*g+m*x*E,this._y=m*x*g-y*v*E,this._z=m*v*E+y*x*g,this._w=m*v*g-y*x*E;break;case"YXZ":this._x=y*v*g+m*x*E,this._y=m*x*g-y*v*E,this._z=m*v*E-y*x*g,this._w=m*v*g+y*x*E;break;case"ZXY":this._x=y*v*g-m*x*E,this._y=m*x*g+y*v*E,this._z=m*v*E+y*x*g,this._w=m*v*g-y*x*E;break;case"ZYX":this._x=y*v*g-m*x*E,this._y=m*x*g+y*v*E,this._z=m*v*E-y*x*g,this._w=m*v*g+y*x*E;break;case"YZX":this._x=y*v*g+m*x*E,this._y=m*x*g+y*v*E,this._z=m*v*E-y*x*g,this._w=m*v*g-y*x*E;break;case"XZY":this._x=y*v*g-m*x*E,this._y=m*x*g-y*v*E,this._z=m*v*E+y*x*g,this._w=m*v*g+y*x*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],f=i[1],d=i[5],p=i[9],m=i[2],v=i[6],g=i[10],y=s+d+g;if(y>0){const x=.5/Math.sqrt(y+1);this._w=.25/x,this._x=(v-p)*x,this._y=(u-m)*x,this._z=(f-l)*x}else if(s>d&&s>g){const x=2*Math.sqrt(1+s-d-g);this._w=(v-p)/x,this._x=.25*x,this._y=(l+f)/x,this._z=(u+m)/x}else if(d>g){const x=2*Math.sqrt(1+d-s-g);this._w=(u-m)/x,this._x=(l+f)/x,this._y=.25*x,this._z=(p+v)/x}else{const x=2*Math.sqrt(1+g-s-d);this._w=(f-l)/x,this._x=(u+m)/x,this._y=(p+v)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,f=t._w,d=i._x,p=i._y,m=i._z,v=i._w;return this._x=s*v+f*d+l*m-u*p,this._y=l*v+f*p+u*d-s*m,this._z=u*v+f*m+s*p-l*d,this._w=f*v-s*d-l*p-u*m,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const s=this._x,l=this._y,u=this._z,f=this._w;let d=f*t._w+s*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=f,this._x=s,this._y=l,this._z=u,this;const p=1-d*d;if(p<=Number.EPSILON){const x=1-i;return this._w=x*f+i*this._w,this._x=x*s+i*this._x,this._y=x*l+i*this._y,this._z=x*u+i*this._z,this.normalize(),this}const m=Math.sqrt(p),v=Math.atan2(m,d),g=Math.sin((1-i)*v)/m,y=Math.sin(i*v)/m;return this._w=f*g+this._w*y,this._x=s*g+this._x*y,this._y=l*g+this._y*y,this._z=u*g+this._z*y,this._onChangeCallback(),this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(t=0,i=0,s=0){H.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Ey.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Ey.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,f=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,f=t.y,d=t.z,p=t.w,m=2*(f*l-d*s),v=2*(d*i-u*l),g=2*(u*s-f*i);return this.x=i+p*m+f*g-d*v,this.y=s+p*v+d*m-u*g,this.z=l+p*g+u*v-f*m,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,f=i.x,d=i.y,p=i.z;return this.x=l*p-u*d,this.y=u*f-s*p,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return Jd.copy(this).projectOnVector(t),this.sub(Jd)}reflect(t){return this.sub(Jd.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(Ae(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jd=new H,Ey=new Xn;class _e{constructor(t,i,s,l,u,f,d,p,m){_e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,f,d,p,m)}set(t,i,s,l,u,f,d,p,m){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=p,v[6]=s,v[7]=f,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,f=s[0],d=s[3],p=s[6],m=s[1],v=s[4],g=s[7],y=s[2],x=s[5],E=s[8],T=l[0],M=l[3],_=l[6],R=l[1],w=l[4],b=l[7],I=l[2],z=l[5],P=l[8];return u[0]=f*T+d*R+p*I,u[3]=f*M+d*w+p*z,u[6]=f*_+d*b+p*P,u[1]=m*T+v*R+g*I,u[4]=m*M+v*w+g*z,u[7]=m*_+v*b+g*P,u[2]=y*T+x*R+E*I,u[5]=y*M+x*w+E*z,u[8]=y*_+x*b+E*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],m=t[7],v=t[8];return i*f*v-i*d*m-s*u*v+s*d*p+l*u*m-l*f*p}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],m=t[7],v=t[8],g=v*f-d*m,y=d*p-v*u,x=m*u-f*p,E=i*g+s*y+l*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return t[0]=g*T,t[1]=(l*m-v*s)*T,t[2]=(d*s-l*f)*T,t[3]=y*T,t[4]=(v*i-l*p)*T,t[5]=(l*u-d*i)*T,t[6]=x*T,t[7]=(s*p-m*i)*T,t[8]=(f*i-s*u)*T,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,f,d){const p=Math.cos(u),m=Math.sin(u);return this.set(s*p,s*m,-s*(p*f+m*d)+f+t,-l*m,l*p,-l*(-m*f+p*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply($d.makeScale(t,i)),this}rotate(t){return this.premultiply($d.makeRotation(-t)),this}translate(t,i){return this.premultiply($d.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const $d=new _e;function eS(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function lf(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function LT(){const r=lf("canvas");return r.style.display="block",r}const Ty={};function kl(r){r in Ty||(Ty[r]=!0,console.warn(r))}function OT(r,t,i){return new Promise(function(s,l){function u(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}const by=new _e().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ay=new _e().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function PT(){const r={enabled:!0,workingColorSpace:So,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===We&&(l.r=za(l.r),l.g=za(l.g),l.b=za(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===We&&(l.r=vo(l.r),l.g=vo(l.g),l.b=vo(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===_s?rf:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return kl("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return kl("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[So]:{primaries:t,whitePoint:s,transfer:rf,toXYZ:by,fromXYZ:Ay,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:kn},outputColorSpaceConfig:{drawingBufferColorSpace:kn}},[kn]:{primaries:t,whitePoint:s,transfer:We,toXYZ:by,fromXYZ:Ay,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:kn}}}),r}const Le=PT();function za(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function vo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Kr;class zT{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{Kr===void 0&&(Kr=lf("canvas")),Kr.width=t.width,Kr.height=t.height;const l=Kr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=Kr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=lf("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=za(u[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(za(i[s]/255)*255):i[s]=za(i[s]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let IT=0;class Im{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=rr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?u.push(tp(l[f].image)):u.push(tp(l[f]))}else u=tp(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function tp(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?zT.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let BT=0;const ep=new H;class Yn extends bo{constructor(t=Yn.DEFAULT_IMAGE,i=Yn.DEFAULT_MAPPING,s=tr,l=tr,u=ra,f=er,d=ki,p=qi,m=Yn.DEFAULT_ANISOTROPY,v=_s){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BT++}),this.uuid=rr(),this.name="",this.source=new Im(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _e,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ep).x}get height(){return this.source.getSize(ep).y}get depth(){return this.source.getSize(ep).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qx)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Vp:t.x=t.x-Math.floor(t.x);break;case tr:t.x=t.x<0?0:1;break;case kp:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Vp:t.y=t.y-Math.floor(t.y);break;case tr:t.y=t.y<0?0:1;break;case kp:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=qx;Yn.DEFAULT_ANISOTROPY=1;class Qe{constructor(t=0,i=0,s=0,l=1){Qe.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const p=t.elements,m=p[0],v=p[4],g=p[8],y=p[1],x=p[5],E=p[9],T=p[2],M=p[6],_=p[10];if(Math.abs(v-y)<.01&&Math.abs(g-T)<.01&&Math.abs(E-M)<.01){if(Math.abs(v+y)<.1&&Math.abs(g+T)<.1&&Math.abs(E+M)<.1&&Math.abs(m+x+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const w=(m+1)/2,b=(x+1)/2,I=(_+1)/2,z=(v+y)/4,P=(g+T)/4,O=(E+M)/4;return w>b&&w>I?w<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(w),l=z/s,u=P/s):b>I?b<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(b),s=z/l,u=O/l):I<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(I),s=P/u,l=O/u),this.set(s,l,u,i),this}let R=Math.sqrt((M-E)*(M-E)+(g-T)*(g-T)+(y-v)*(y-v));return Math.abs(R)<.001&&(R=1),this.x=(M-E)/R,this.y=(g-T)/R,this.z=(y-v)/R,this.w=Math.acos((m+x+_-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Ae(this.x,t.x,i.x),this.y=Ae(this.y,t.y,i.y),this.z=Ae(this.z,t.z,i.z),this.w=Ae(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Ae(this.x,t,i),this.y=Ae(this.y,t,i),this.z=Ae(this.z,t,i),this.w=Ae(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Ae(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class FT extends bo{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ra,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new Qe(0,0,t,i),this.scissorTest=!1,this.viewport=new Qe(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new Yn(l);this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:ra,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isArrayTexture=this.textures[l].image.depth>1;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Im(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends FT{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class nS extends Yn{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class HT extends Yn{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=yi,this.minFilter=yi,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class or{constructor(t=new H(1/0,1/0,1/0),i=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Fi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Fi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Fi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Fi):Fi.fromBufferAttribute(u,f),Fi.applyMatrix4(t.matrixWorld),this.expandByPoint(Fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),xc.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),xc.copy(s.boundingBox)),xc.applyMatrix4(t.matrixWorld),this.union(xc)}const l=t.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fi),Fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sl),Sc.subVectors(this.max,Sl),Jr.subVectors(t.a,Sl),$r.subVectors(t.b,Sl),to.subVectors(t.c,Sl),hs.subVectors($r,Jr),ds.subVectors(to,$r),Xs.subVectors(Jr,to);let i=[0,-hs.z,hs.y,0,-ds.z,ds.y,0,-Xs.z,Xs.y,hs.z,0,-hs.x,ds.z,0,-ds.x,Xs.z,0,-Xs.x,-hs.y,hs.x,0,-ds.y,ds.x,0,-Xs.y,Xs.x,0];return!np(i,Jr,$r,to,Sc)||(i=[1,0,0,0,1,0,0,0,1],!np(i,Jr,$r,to,Sc))?!1:(Mc.crossVectors(hs,ds),i=[Mc.x,Mc.y,Mc.z],np(i,Jr,$r,to,Sc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wa),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const wa=[new H,new H,new H,new H,new H,new H,new H,new H],Fi=new H,xc=new or,Jr=new H,$r=new H,to=new H,hs=new H,ds=new H,Xs=new H,Sl=new H,Sc=new H,Mc=new H,qs=new H;function np(r,t,i,s,l){for(let u=0,f=r.length-3;u<=f;u+=3){qs.fromArray(r,u);const d=l.x*Math.abs(qs.x)+l.y*Math.abs(qs.y)+l.z*Math.abs(qs.z),p=t.dot(qs),m=i.dot(qs),v=s.dot(qs);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>d)return!1}return!0}const GT=new or,Ml=new H,ip=new H;class lr{constructor(t=new H,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):GT.setFromPoints(t).getCenter(s);let l=0;for(let u=0,f=t.length;u<f;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ml.subVectors(t,this.center);const i=Ml.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Ml,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ip.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ml.copy(t.center).add(ip)),this.expandByPoint(Ml.copy(t.center).sub(ip))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ca=new H,ap=new H,Ec=new H,ps=new H,sp=new H,Tc=new H,rp=new H;class Bm{constructor(t=new H,i=new H(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ca)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Ca.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Ca.copy(this.origin).addScaledVector(this.direction,i),Ca.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){ap.copy(t).add(i).multiplyScalar(.5),Ec.copy(i).sub(t).normalize(),ps.copy(this.origin).sub(ap);const u=t.distanceTo(i)*.5,f=-this.direction.dot(Ec),d=ps.dot(this.direction),p=-ps.dot(Ec),m=ps.lengthSq(),v=Math.abs(1-f*f);let g,y,x,E;if(v>0)if(g=f*p-d,y=f*d-p,E=u*v,g>=0)if(y>=-E)if(y<=E){const T=1/v;g*=T,y*=T,x=g*(g+f*y+2*d)+y*(f*g+y+2*p)+m}else y=u,g=Math.max(0,-(f*y+d)),x=-g*g+y*(y+2*p)+m;else y=-u,g=Math.max(0,-(f*y+d)),x=-g*g+y*(y+2*p)+m;else y<=-E?(g=Math.max(0,-(-f*u+d)),y=g>0?-u:Math.min(Math.max(-u,-p),u),x=-g*g+y*(y+2*p)+m):y<=E?(g=0,y=Math.min(Math.max(-u,-p),u),x=y*(y+2*p)+m):(g=Math.max(0,-(f*u+d)),y=g>0?u:Math.min(Math.max(-u,-p),u),x=-g*g+y*(y+2*p)+m);else y=f>0?-u:u,g=Math.max(0,-(f*y+d)),x=-g*g+y*(y+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(ap).addScaledVector(Ec,y),x}intersectSphere(t,i){Ca.subVectors(t.center,this.origin);const s=Ca.dot(this.direction),l=Ca.dot(Ca)-s*s,u=t.radius*t.radius;if(l>u)return null;const f=Math.sqrt(u-l),d=s-f,p=s+f;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,f,d,p;const m=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,y=this.origin;return m>=0?(s=(t.min.x-y.x)*m,l=(t.max.x-y.x)*m):(s=(t.max.x-y.x)*m,l=(t.min.x-y.x)*m),v>=0?(u=(t.min.y-y.y)*v,f=(t.max.y-y.y)*v):(u=(t.max.y-y.y)*v,f=(t.min.y-y.y)*v),s>f||u>l||((u>s||isNaN(s))&&(s=u),(f<l||isNaN(l))&&(l=f),g>=0?(d=(t.min.z-y.z)*g,p=(t.max.z-y.z)*g):(d=(t.max.z-y.z)*g,p=(t.min.z-y.z)*g),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,Ca)!==null}intersectTriangle(t,i,s,l,u){sp.subVectors(i,t),Tc.subVectors(s,t),rp.crossVectors(sp,Tc);let f=this.direction.dot(rp),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;ps.subVectors(this.origin,t);const p=d*this.direction.dot(Tc.crossVectors(ps,Tc));if(p<0)return null;const m=d*this.direction.dot(sp.cross(ps));if(m<0||p+m>f)return null;const v=-d*ps.dot(rp);return v<0?null:this.at(v/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class He{constructor(t,i,s,l,u,f,d,p,m,v,g,y,x,E,T,M){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,f,d,p,m,v,g,y,x,E,T,M)}set(t,i,s,l,u,f,d,p,m,v,g,y,x,E,T,M){const _=this.elements;return _[0]=t,_[4]=i,_[8]=s,_[12]=l,_[1]=u,_[5]=f,_[9]=d,_[13]=p,_[2]=m,_[6]=v,_[10]=g,_[14]=y,_[3]=x,_[7]=E,_[11]=T,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,s=t.elements,l=1/eo.setFromMatrixColumn(t,0).length(),u=1/eo.setFromMatrixColumn(t,1).length(),f=1/eo.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,f=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),v=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const y=f*v,x=f*g,E=d*v,T=d*g;i[0]=p*v,i[4]=-p*g,i[8]=m,i[1]=x+E*m,i[5]=y-T*m,i[9]=-d*p,i[2]=T-y*m,i[6]=E+x*m,i[10]=f*p}else if(t.order==="YXZ"){const y=p*v,x=p*g,E=m*v,T=m*g;i[0]=y+T*d,i[4]=E*d-x,i[8]=f*m,i[1]=f*g,i[5]=f*v,i[9]=-d,i[2]=x*d-E,i[6]=T+y*d,i[10]=f*p}else if(t.order==="ZXY"){const y=p*v,x=p*g,E=m*v,T=m*g;i[0]=y-T*d,i[4]=-f*g,i[8]=E+x*d,i[1]=x+E*d,i[5]=f*v,i[9]=T-y*d,i[2]=-f*m,i[6]=d,i[10]=f*p}else if(t.order==="ZYX"){const y=f*v,x=f*g,E=d*v,T=d*g;i[0]=p*v,i[4]=E*m-x,i[8]=y*m+T,i[1]=p*g,i[5]=T*m+y,i[9]=x*m-E,i[2]=-m,i[6]=d*p,i[10]=f*p}else if(t.order==="YZX"){const y=f*p,x=f*m,E=d*p,T=d*m;i[0]=p*v,i[4]=T-y*g,i[8]=E*g+x,i[1]=g,i[5]=f*v,i[9]=-d*v,i[2]=-m*v,i[6]=x*g+E,i[10]=y-T*g}else if(t.order==="XZY"){const y=f*p,x=f*m,E=d*p,T=d*m;i[0]=p*v,i[4]=-g,i[8]=m*v,i[1]=y*g+T,i[5]=f*v,i[9]=x*g-E,i[2]=E*g-x,i[6]=d*v,i[10]=T*g+y}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(VT,t,kT)}lookAt(t,i,s){const l=this.elements;return gi.subVectors(t,i),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),ms.crossVectors(s,gi),ms.lengthSq()===0&&(Math.abs(s.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),ms.crossVectors(s,gi)),ms.normalize(),bc.crossVectors(gi,ms),l[0]=ms.x,l[4]=bc.x,l[8]=gi.x,l[1]=ms.y,l[5]=bc.y,l[9]=gi.y,l[2]=ms.z,l[6]=bc.z,l[10]=gi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,f=s[0],d=s[4],p=s[8],m=s[12],v=s[1],g=s[5],y=s[9],x=s[13],E=s[2],T=s[6],M=s[10],_=s[14],R=s[3],w=s[7],b=s[11],I=s[15],z=l[0],P=l[4],O=l[8],U=l[12],A=l[1],V=l[5],Y=l[9],Q=l[13],pt=l[2],K=l[6],W=l[10],N=l[14],B=l[3],$=l[7],ht=l[11],Rt=l[15];return u[0]=f*z+d*A+p*pt+m*B,u[4]=f*P+d*V+p*K+m*$,u[8]=f*O+d*Y+p*W+m*ht,u[12]=f*U+d*Q+p*N+m*Rt,u[1]=v*z+g*A+y*pt+x*B,u[5]=v*P+g*V+y*K+x*$,u[9]=v*O+g*Y+y*W+x*ht,u[13]=v*U+g*Q+y*N+x*Rt,u[2]=E*z+T*A+M*pt+_*B,u[6]=E*P+T*V+M*K+_*$,u[10]=E*O+T*Y+M*W+_*ht,u[14]=E*U+T*Q+M*N+_*Rt,u[3]=R*z+w*A+b*pt+I*B,u[7]=R*P+w*V+b*K+I*$,u[11]=R*O+w*Y+b*W+I*ht,u[15]=R*U+w*Q+b*N+I*Rt,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],f=t[1],d=t[5],p=t[9],m=t[13],v=t[2],g=t[6],y=t[10],x=t[14],E=t[3],T=t[7],M=t[11],_=t[15];return E*(+u*p*g-l*m*g-u*d*y+s*m*y+l*d*x-s*p*x)+T*(+i*p*x-i*m*y+u*f*y-l*f*x+l*m*v-u*p*v)+M*(+i*m*g-i*d*x-u*f*g+s*f*x+u*d*v-s*m*v)+_*(-l*d*v-i*p*g+i*d*y+l*f*g-s*f*y+s*p*v)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],f=t[4],d=t[5],p=t[6],m=t[7],v=t[8],g=t[9],y=t[10],x=t[11],E=t[12],T=t[13],M=t[14],_=t[15],R=g*M*m-T*y*m+T*p*x-d*M*x-g*p*_+d*y*_,w=E*y*m-v*M*m-E*p*x+f*M*x+v*p*_-f*y*_,b=v*T*m-E*g*m+E*d*x-f*T*x-v*d*_+f*g*_,I=E*g*p-v*T*p-E*d*y+f*T*y+v*d*M-f*g*M,z=i*R+s*w+l*b+u*I;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/z;return t[0]=R*P,t[1]=(T*y*u-g*M*u-T*l*x+s*M*x+g*l*_-s*y*_)*P,t[2]=(d*M*u-T*p*u+T*l*m-s*M*m-d*l*_+s*p*_)*P,t[3]=(g*p*u-d*y*u-g*l*m+s*y*m+d*l*x-s*p*x)*P,t[4]=w*P,t[5]=(v*M*u-E*y*u+E*l*x-i*M*x-v*l*_+i*y*_)*P,t[6]=(E*p*u-f*M*u-E*l*m+i*M*m+f*l*_-i*p*_)*P,t[7]=(f*y*u-v*p*u+v*l*m-i*y*m-f*l*x+i*p*x)*P,t[8]=b*P,t[9]=(E*g*u-v*T*u-E*s*x+i*T*x+v*s*_-i*g*_)*P,t[10]=(f*T*u-E*d*u+E*s*m-i*T*m-f*s*_+i*d*_)*P,t[11]=(v*d*u-f*g*u-v*s*m+i*g*m+f*s*x-i*d*x)*P,t[12]=I*P,t[13]=(v*T*l-E*g*l+E*s*y-i*T*y-v*s*M+i*g*M)*P,t[14]=(E*d*l-f*T*l-E*s*p+i*T*p+f*s*M-i*d*M)*P,t[15]=(f*g*l-v*d*l+v*s*p-i*g*p-f*s*y+i*d*y)*P,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,f=t.x,d=t.y,p=t.z,m=u*f,v=u*d;return this.set(m*f+s,m*d-l*p,m*p+l*d,0,m*d+l*p,v*d+s,v*p-l*f,0,m*p-l*d,v*p+l*f,u*p*p+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,f){return this.set(1,s,u,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,f=i._y,d=i._z,p=i._w,m=u+u,v=f+f,g=d+d,y=u*m,x=u*v,E=u*g,T=f*v,M=f*g,_=d*g,R=p*m,w=p*v,b=p*g,I=s.x,z=s.y,P=s.z;return l[0]=(1-(T+_))*I,l[1]=(x+b)*I,l[2]=(E-w)*I,l[3]=0,l[4]=(x-b)*z,l[5]=(1-(y+_))*z,l[6]=(M+R)*z,l[7]=0,l[8]=(E+w)*P,l[9]=(M-R)*P,l[10]=(1-(y+T))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;let u=eo.set(l[0],l[1],l[2]).length();const f=eo.set(l[4],l[5],l[6]).length(),d=eo.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],Hi.copy(this);const m=1/u,v=1/f,g=1/d;return Hi.elements[0]*=m,Hi.elements[1]*=m,Hi.elements[2]*=m,Hi.elements[4]*=v,Hi.elements[5]*=v,Hi.elements[6]*=v,Hi.elements[8]*=g,Hi.elements[9]*=g,Hi.elements[10]*=g,i.setFromRotationMatrix(Hi),s.x=u,s.y=f,s.z=d,this}makePerspective(t,i,s,l,u,f,d=la,p=!1){const m=this.elements,v=2*u/(i-t),g=2*u/(s-l),y=(i+t)/(i-t),x=(s+l)/(s-l);let E,T;if(p)E=u/(f-u),T=f*u/(f-u);else if(d===la)E=-(f+u)/(f-u),T=-2*f*u/(f-u);else if(d===of)E=-f/(f-u),T=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=y,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,s,l,u,f,d=la,p=!1){const m=this.elements,v=2/(i-t),g=2/(s-l),y=-(i+t)/(i-t),x=-(s+l)/(s-l);let E,T;if(p)E=1/(f-u),T=f/(f-u);else if(d===la)E=-2/(f-u),T=-(f+u)/(f-u);else if(d===of)E=-1/(f-u),T=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=v,m[4]=0,m[8]=0,m[12]=y,m[1]=0,m[5]=g,m[9]=0,m[13]=x,m[2]=0,m[6]=0,m[10]=E,m[14]=T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const eo=new H,Hi=new He,VT=new H(0,0,0),kT=new H(1,1,1),ms=new H,bc=new H,gi=new H,wy=new He,Cy=new Xn;class ri{constructor(t=0,i=0,s=0,l=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],f=l[4],d=l[8],p=l[1],m=l[5],v=l[9],g=l[2],y=l[6],x=l[10];switch(i){case"XYZ":this._y=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,x),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(y,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,x),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-f,m)):(this._y=0,this._z=Math.atan2(p,u));break;case"ZYX":this._y=Math.asin(-Ae(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(y,x),this._z=Math.atan2(p,u)):(this._x=0,this._z=Math.atan2(-f,m));break;case"YZX":this._z=Math.asin(Ae(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,x));break;case"XZY":this._z=Math.asin(-Ae(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(y,m),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,x),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return wy.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wy,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Cy.setFromEuler(this),this.setFromQuaternion(Cy,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class iS{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let XT=0;const Ry=new H,no=new Xn,Ra=new He,Ac=new H,El=new H,qT=new H,YT=new Xn,Dy=new H(1,0,0),Uy=new H(0,1,0),Ny=new H(0,0,1),Ly={type:"added"},WT={type:"removed"},io={type:"childadded",child:null},op={type:"childremoved",child:null};class Mn extends bo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:XT++}),this.uuid=rr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const t=new H,i=new ri,s=new Xn,l=new H(1,1,1);function u(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new He},normalMatrix:{value:new _e}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new iS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return no.setFromAxisAngle(t,i),this.quaternion.multiply(no),this}rotateOnWorldAxis(t,i){return no.setFromAxisAngle(t,i),this.quaternion.premultiply(no),this}rotateX(t){return this.rotateOnAxis(Dy,t)}rotateY(t){return this.rotateOnAxis(Uy,t)}rotateZ(t){return this.rotateOnAxis(Ny,t)}translateOnAxis(t,i){return Ry.copy(t).applyQuaternion(this.quaternion),this.position.add(Ry.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Dy,t)}translateY(t){return this.translateOnAxis(Uy,t)}translateZ(t){return this.translateOnAxis(Ny,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ra.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Ac.copy(t):Ac.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),El.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ra.lookAt(El,Ac,this.up):Ra.lookAt(Ac,El,this.up),this.quaternion.setFromRotationMatrix(Ra),l&&(Ra.extractRotation(l.matrixWorld),no.setFromRotationMatrix(Ra),this.quaternion.premultiply(no.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ly),io.child=t,this.dispatchEvent(io),io.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(WT),op.child=t,this.dispatchEvent(op),op.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ra.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ra.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ra),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ly),io.child=t,this.dispatchEvent(io),io.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,t,qT),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(El,YT,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const g=p[m];u(t.shapes,g)}else u(t.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(u(t.materials,this.material[p]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(u(t.animations,p))}}if(i){const d=f(t.geometries),p=f(t.materials),m=f(t.textures),v=f(t.images),g=f(t.shapes),y=f(t.skeletons),x=f(t.animations),E=f(t.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),y.length>0&&(s.skeletons=y),x.length>0&&(s.animations=x),E.length>0&&(s.nodes=E)}return s.object=l,s;function f(d){const p=[];for(const m in d){const v=d[m];delete v.metadata,p.push(v)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}Mn.DEFAULT_UP=new H(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gi=new H,Da=new H,lp=new H,Ua=new H,ao=new H,so=new H,Oy=new H,up=new H,cp=new H,fp=new H,hp=new Qe,dp=new Qe,pp=new Qe;class Vi{constructor(t=new H,i=new H,s=new H){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Gi.subVectors(t,i),l.cross(Gi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Gi.subVectors(l,i),Da.subVectors(s,i),lp.subVectors(t,i);const f=Gi.dot(Gi),d=Gi.dot(Da),p=Gi.dot(lp),m=Da.dot(Da),v=Da.dot(lp),g=f*m-d*d;if(g===0)return u.set(0,0,0),null;const y=1/g,x=(m*p-d*v)*y,E=(f*v-d*p)*y;return u.set(1-x-E,E,x)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,Ua)===null?!1:Ua.x>=0&&Ua.y>=0&&Ua.x+Ua.y<=1}static getInterpolation(t,i,s,l,u,f,d,p){return this.getBarycoord(t,i,s,l,Ua)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(u,Ua.x),p.addScaledVector(f,Ua.y),p.addScaledVector(d,Ua.z),p)}static getInterpolatedAttribute(t,i,s,l,u,f){return hp.setScalar(0),dp.setScalar(0),pp.setScalar(0),hp.fromBufferAttribute(t,i),dp.fromBufferAttribute(t,s),pp.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(hp,u.x),f.addScaledVector(dp,u.y),f.addScaledVector(pp,u.z),f}static isFrontFacing(t,i,s,l){return Gi.subVectors(s,i),Da.subVectors(t,i),Gi.cross(Da).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Gi.subVectors(this.c,this.b),Da.subVectors(this.a,this.b),Gi.cross(Da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Vi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Vi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Vi.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Vi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Vi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let f,d;ao.subVectors(l,s),so.subVectors(u,s),up.subVectors(t,s);const p=ao.dot(up),m=so.dot(up);if(p<=0&&m<=0)return i.copy(s);cp.subVectors(t,l);const v=ao.dot(cp),g=so.dot(cp);if(v>=0&&g<=v)return i.copy(l);const y=p*g-v*m;if(y<=0&&p>=0&&v<=0)return f=p/(p-v),i.copy(s).addScaledVector(ao,f);fp.subVectors(t,u);const x=ao.dot(fp),E=so.dot(fp);if(E>=0&&x<=E)return i.copy(u);const T=x*m-p*E;if(T<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(s).addScaledVector(so,d);const M=v*E-x*g;if(M<=0&&g-v>=0&&x-E>=0)return Oy.subVectors(u,l),d=(g-v)/(g-v+(x-E)),i.copy(l).addScaledVector(Oy,d);const _=1/(M+T+y);return f=T*_,d=y*_,i.copy(s).addScaledVector(ao,f).addScaledVector(so,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const aS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},gs={h:0,s:0,l:0},wc={h:0,s:0,l:0};function mp(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class oe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=kn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Le.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=Le.workingColorSpace){return this.r=t,this.g=i,this.b=s,Le.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=Le.workingColorSpace){if(t=zm(t,1),i=Ae(i,0,1),s=Ae(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,f=2*s-u;this.r=mp(f,u,t+1/3),this.g=mp(f,u,t),this.b=mp(f,u,t-1/3)}return Le.colorSpaceToWorking(this,l),this}setStyle(t,i=kn){function s(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=kn){const s=aS[t.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=za(t.r),this.g=za(t.g),this.b=za(t.b),this}copyLinearToSRGB(t){return this.r=vo(t.r),this.g=vo(t.g),this.b=vo(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=kn){return Le.workingToColorSpace(Vn.copy(this),t),Math.round(Ae(Vn.r*255,0,255))*65536+Math.round(Ae(Vn.g*255,0,255))*256+Math.round(Ae(Vn.b*255,0,255))}getHexString(t=kn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Le.workingColorSpace){Le.workingToColorSpace(Vn.copy(this),i);const s=Vn.r,l=Vn.g,u=Vn.b,f=Math.max(s,l,u),d=Math.min(s,l,u);let p,m;const v=(d+f)/2;if(d===f)p=0,m=0;else{const g=f-d;switch(m=v<=.5?g/(f+d):g/(2-f-d),f){case s:p=(l-u)/g+(l<u?6:0);break;case l:p=(u-s)/g+2;break;case u:p=(s-l)/g+4;break}p/=6}return t.h=p,t.s=m,t.l=v,t}getRGB(t,i=Le.workingColorSpace){return Le.workingToColorSpace(Vn.copy(this),i),t.r=Vn.r,t.g=Vn.g,t.b=Vn.b,t}getStyle(t=kn){Le.workingToColorSpace(Vn.copy(this),t);const i=Vn.r,s=Vn.g,l=Vn.b;return t!==kn?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(gs),this.setHSL(gs.h+t,gs.s+i,gs.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(gs),t.getHSL(wc);const s=Ol(gs.h,wc.h,i),l=Ol(gs.s,wc.s,i),u=Ol(gs.l,wc.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Vn=new oe;oe.NAMES=aS;let jT=0;class ur extends bo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jT++}),this.uuid=rr(),this.name="",this.type="Material",this.blending=go,this.side=ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Np,this.blendDst=Lp,this.blendEquation=Js,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new oe(0,0,0),this.blendAlpha=0,this.depthFunc=_o,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==go&&(s.blending=this.blending),this.side!==ys&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Np&&(s.blendSrc=this.blendSrc),this.blendDst!==Lp&&(s.blendDst=this.blendDst),this.blendEquation!==Js&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==_o&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yy&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const f=[];for(const d in u){const p=u[d];delete p.metadata,f.push(p)}return f}if(i){const u=l(t.textures),f=l(t.images);u.length>0&&(s.textures=u),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ar extends ur{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=Bx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const xn=new H,Cc=new zt;let ZT=0;class hn{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ZT++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=xy,this.updateRanges=[],this.gpuType=oa,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Cc.fromBufferAttribute(this,i),Cc.applyMatrix3(t),this.setXY(i,Cc.x,Cc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix3(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyMatrix4(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.applyNormalMatrix(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)xn.fromBufferAttribute(this,i),xn.transformDirection(t),this.setXYZ(i,xn.x,xn.y,xn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=fo(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Jn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=fo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=fo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=fo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=fo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Jn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array),l=Jn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Jn(i,this.array),s=Jn(s,this.array),l=Jn(l,this.array),u=Jn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xy&&(t.usage=this.usage),t}}class sS extends hn{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class rS extends hn{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class Ge extends hn{constructor(t,i,s){super(new Float32Array(t),i,s)}}let QT=0;const Di=new He,gp=new Mn,ro=new H,vi=new or,Tl=new or,Un=new H;class pn extends bo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:QT++}),this.uuid=rr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(eS(t)?rS:sS)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new _e().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Di.makeRotationFromQuaternion(t),this.applyMatrix4(Di),this}rotateX(t){return Di.makeRotationX(t),this.applyMatrix4(Di),this}rotateY(t){return Di.makeRotationY(t),this.applyMatrix4(Di),this}rotateZ(t){return Di.makeRotationZ(t),this.applyMatrix4(Di),this}translate(t,i,s){return Di.makeTranslation(t,i,s),this.applyMatrix4(Di),this}scale(t,i,s){return Di.makeScale(t,i,s),this.applyMatrix4(Di),this}lookAt(t){return gp.lookAt(t),gp.updateMatrix(),this.applyMatrix4(gp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ro).negate(),this.translate(ro.x,ro.y,ro.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new Ge(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new or);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];vi.setFromBufferAttribute(u),this.morphTargetsRelative?(Un.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(Un),Un.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(Un)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lr);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(t){const s=this.boundingSphere.center;if(vi.setFromBufferAttribute(t),i)for(let u=0,f=i.length;u<f;u++){const d=i[u];Tl.setFromBufferAttribute(d),this.morphTargetsRelative?(Un.addVectors(vi.min,Tl.min),vi.expandByPoint(Un),Un.addVectors(vi.max,Tl.max),vi.expandByPoint(Un)):(vi.expandByPoint(Tl.min),vi.expandByPoint(Tl.max))}vi.getCenter(s);let l=0;for(let u=0,f=t.count;u<f;u++)Un.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(Un));if(i)for(let u=0,f=i.length;u<f;u++){const d=i[u],p=this.morphTargetsRelative;for(let m=0,v=d.count;m<v;m++)Un.fromBufferAttribute(d,m),p&&(ro.fromBufferAttribute(t,m),Un.add(ro)),l=Math.max(l,s.distanceToSquared(Un))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],p=[];for(let O=0;O<s.count;O++)d[O]=new H,p[O]=new H;const m=new H,v=new H,g=new H,y=new zt,x=new zt,E=new zt,T=new H,M=new H;function _(O,U,A){m.fromBufferAttribute(s,O),v.fromBufferAttribute(s,U),g.fromBufferAttribute(s,A),y.fromBufferAttribute(u,O),x.fromBufferAttribute(u,U),E.fromBufferAttribute(u,A),v.sub(m),g.sub(m),x.sub(y),E.sub(y);const V=1/(x.x*E.y-E.x*x.y);isFinite(V)&&(T.copy(v).multiplyScalar(E.y).addScaledVector(g,-x.y).multiplyScalar(V),M.copy(g).multiplyScalar(x.x).addScaledVector(v,-E.x).multiplyScalar(V),d[O].add(T),d[U].add(T),d[A].add(T),p[O].add(M),p[U].add(M),p[A].add(M))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let O=0,U=R.length;O<U;++O){const A=R[O],V=A.start,Y=A.count;for(let Q=V,pt=V+Y;Q<pt;Q+=3)_(t.getX(Q+0),t.getX(Q+1),t.getX(Q+2))}const w=new H,b=new H,I=new H,z=new H;function P(O){I.fromBufferAttribute(l,O),z.copy(I);const U=d[O];w.copy(U),w.sub(I.multiplyScalar(I.dot(U))).normalize(),b.crossVectors(z,U);const V=b.dot(p[O])<0?-1:1;f.setXYZW(O,w.x,w.y,w.z,V)}for(let O=0,U=R.length;O<U;++O){const A=R[O],V=A.start,Y=A.count;for(let Q=V,pt=V+Y;Q<pt;Q+=3)P(t.getX(Q+0)),P(t.getX(Q+1)),P(t.getX(Q+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new hn(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let y=0,x=s.count;y<x;y++)s.setXYZ(y,0,0,0);const l=new H,u=new H,f=new H,d=new H,p=new H,m=new H,v=new H,g=new H;if(t)for(let y=0,x=t.count;y<x;y+=3){const E=t.getX(y+0),T=t.getX(y+1),M=t.getX(y+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,T),f.fromBufferAttribute(i,M),v.subVectors(f,u),g.subVectors(l,u),v.cross(g),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,T),m.fromBufferAttribute(s,M),d.add(v),p.add(v),m.add(v),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(T,p.x,p.y,p.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let y=0,x=i.count;y<x;y+=3)l.fromBufferAttribute(i,y+0),u.fromBufferAttribute(i,y+1),f.fromBufferAttribute(i,y+2),v.subVectors(f,u),g.subVectors(l,u),v.cross(g),s.setXYZ(y+0,v.x,v.y,v.z),s.setXYZ(y+1,v.x,v.y,v.z),s.setXYZ(y+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)Un.fromBufferAttribute(t,i),Un.normalize(),t.setXYZ(i,Un.x,Un.y,Un.z)}toNonIndexed(){function t(d,p){const m=d.array,v=d.itemSize,g=d.normalized,y=new m.constructor(p.length*v);let x=0,E=0;for(let T=0,M=p.length;T<M;T++){d.isInterleavedBufferAttribute?x=p[T]*d.data.stride+d.offset:x=p[T]*v;for(let _=0;_<v;_++)y[E++]=m[x++]}return new hn(y,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new pn,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=t(p,s);i.setAttribute(d,m)}const u=this.morphAttributes;for(const d in u){const p=[],m=u[d];for(let v=0,g=m.length;v<g;v++){const y=m[v],x=t(y,s);p.push(x)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,p=f.length;d<p;d++){const m=f[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(t[m]=p[m]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];t.data.attributes[p]=m.toJSON(t.data)}const l={};let u=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let g=0,y=m.length;g<y;g++){const x=m[g];v.push(x.toJSON(t.data))}v.length>0&&(l[p]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(i))}const u=t.morphAttributes;for(const m in u){const v=[],g=u[m];for(let y=0,x=g.length;y<x;y++)v.push(g[y].clone(i));this.morphAttributes[m]=v}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let m=0,v=f.length;m<v;m++){const g=f[m];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Py=new He,Ys=new Bm,Rc=new lr,zy=new H,Dc=new H,Uc=new H,Nc=new H,vp=new H,Lc=new H,Iy=new H,Oc=new H;class sn extends Mn{constructor(t=new pn,i=new ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Lc.set(0,0,0);for(let p=0,m=u.length;p<m;p++){const v=d[p],g=u[p];v!==0&&(vp.fromBufferAttribute(g,t),f?Lc.addScaledVector(vp,v):Lc.addScaledVector(vp.sub(i),v))}i.add(Lc)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Rc.copy(s.boundingSphere),Rc.applyMatrix4(u),Ys.copy(t.ray).recast(t.near),!(Rc.containsPoint(Ys.origin)===!1&&(Ys.intersectSphere(Rc,zy)===null||Ys.origin.distanceToSquared(zy)>(t.far-t.near)**2))&&(Py.copy(u).invert(),Ys.copy(t.ray).applyMatrix4(Py),!(s.boundingBox!==null&&Ys.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ys)))}_computeIntersections(t,i,s){let l;const u=this.geometry,f=this.material,d=u.index,p=u.attributes.position,m=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,y=u.groups,x=u.drawRange;if(d!==null)if(Array.isArray(f))for(let E=0,T=y.length;E<T;E++){const M=y[E],_=f[M.materialIndex],R=Math.max(M.start,x.start),w=Math.min(d.count,Math.min(M.start+M.count,x.start+x.count));for(let b=R,I=w;b<I;b+=3){const z=d.getX(b),P=d.getX(b+1),O=d.getX(b+2);l=Pc(this,_,t,s,m,v,g,z,P,O),l&&(l.faceIndex=Math.floor(b/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let M=E,_=T;M<_;M+=3){const R=d.getX(M),w=d.getX(M+1),b=d.getX(M+2);l=Pc(this,f,t,s,m,v,g,R,w,b),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(f))for(let E=0,T=y.length;E<T;E++){const M=y[E],_=f[M.materialIndex],R=Math.max(M.start,x.start),w=Math.min(p.count,Math.min(M.start+M.count,x.start+x.count));for(let b=R,I=w;b<I;b+=3){const z=b,P=b+1,O=b+2;l=Pc(this,_,t,s,m,v,g,z,P,O),l&&(l.faceIndex=Math.floor(b/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,x.start),T=Math.min(p.count,x.start+x.count);for(let M=E,_=T;M<_;M+=3){const R=M,w=M+1,b=M+2;l=Pc(this,f,t,s,m,v,g,R,w,b),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function KT(r,t,i,s,l,u,f,d){let p;if(t.side===qn?p=s.intersectTriangle(f,u,l,!0,d):p=s.intersectTriangle(l,u,f,t.side===ys,d),p===null)return null;Oc.copy(d),Oc.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(Oc);return m<i.near||m>i.far?null:{distance:m,point:Oc.clone(),object:r}}function Pc(r,t,i,s,l,u,f,d,p,m){r.getVertexPosition(d,Dc),r.getVertexPosition(p,Uc),r.getVertexPosition(m,Nc);const v=KT(r,t,i,s,Dc,Uc,Nc,Iy);if(v){const g=new H;Vi.getBarycoord(Iy,Dc,Uc,Nc,g),l&&(v.uv=Vi.getInterpolatedAttribute(l,d,p,m,g,new zt)),u&&(v.uv1=Vi.getInterpolatedAttribute(u,d,p,m,g,new zt)),f&&(v.normal=Vi.getInterpolatedAttribute(f,d,p,m,g,new H),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const y={a:d,b:p,c:m,normal:new H,materialIndex:0};Vi.getNormal(Dc,Uc,Nc,y.normal),v.face=y,v.barycoord=g}return v}class Ao extends pn{constructor(t=1,i=1,s=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:f};const d=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const p=[],m=[],v=[],g=[];let y=0,x=0;E("z","y","x",-1,-1,s,i,t,f,u,0),E("z","y","x",1,-1,s,i,-t,f,u,1),E("x","z","y",1,1,t,s,i,l,f,2),E("x","z","y",1,-1,t,s,-i,l,f,3),E("x","y","z",1,-1,t,i,s,l,u,4),E("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(p),this.setAttribute("position",new Ge(m,3)),this.setAttribute("normal",new Ge(v,3)),this.setAttribute("uv",new Ge(g,2));function E(T,M,_,R,w,b,I,z,P,O,U){const A=b/P,V=I/O,Y=b/2,Q=I/2,pt=z/2,K=P+1,W=O+1;let N=0,B=0;const $=new H;for(let ht=0;ht<W;ht++){const Rt=ht*V-Q;for(let Gt=0;Gt<K;Gt++){const ne=Gt*A-Y;$[T]=ne*R,$[M]=Rt*w,$[_]=pt,m.push($.x,$.y,$.z),$[T]=0,$[M]=0,$[_]=z>0?1:-1,v.push($.x,$.y,$.z),g.push(Gt/P),g.push(1-ht/O),N+=1}}for(let ht=0;ht<O;ht++)for(let Rt=0;Rt<P;Rt++){const Gt=y+Rt+K*ht,ne=y+Rt+K*(ht+1),q=y+(Rt+1)+K*(ht+1),J=y+(Rt+1)+K*ht;p.push(Gt,ne,J),p.push(ne,q,J),B+=6}d.addGroup(x,B,U),x+=B,y+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Mo(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function $n(r){const t={};for(let i=0;i<r.length;i++){const s=Mo(r[i]);for(const l in s)t[l]=s[l]}return t}function JT(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function oS(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Le.workingColorSpace}const Xl={clone:Mo,merge:$n};var $T=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nn extends ur{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$T,this.fragmentShader=tb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Mo(t.uniforms),this.uniformsGroups=JT(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class lS extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=la,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vs=new H,By=new zt,Fy=new zt;class si extends lS{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Vl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ll*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Vl*2*Math.atan(Math.tan(Ll*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){vs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(vs.x,vs.y).multiplyScalar(-t/vs.z),vs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(vs.x,vs.y).multiplyScalar(-t/vs.z)}getViewSize(t,i){return this.getViewBounds(t,By,Fy),i.subVectors(Fy,By)}setViewOffset(t,i,s,l,u,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Ll*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const p=f.fullWidth,m=f.fullHeight;u+=f.offsetX*l/p,i-=f.offsetY*s/m,l*=f.width/p,s*=f.height/m}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const oo=-90,lo=1;class eb extends Mn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(oo,lo,t,i);l.layers=this.layers,this.add(l);const u=new si(oo,lo,t,i);u.layers=this.layers,this.add(u);const f=new si(oo,lo,t,i);f.layers=this.layers,this.add(f);const d=new si(oo,lo,t,i);d.layers=this.layers,this.add(d);const p=new si(oo,lo,t,i);p.layers=this.layers,this.add(p);const m=new si(oo,lo,t,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,f,d,p]=i;for(const m of i)this.remove(m);if(t===la)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===of)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const m of i)this.add(m),m.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,p,m,v]=this.children,g=t.getRenderTarget(),y=t.getActiveCubeFace(),x=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,p),t.setRenderTarget(s,4,l),t.render(i,m),s.texture.generateMipmaps=T,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(g,y,x),t.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class uS extends Yn{constructor(t=[],i=yo,s,l,u,f,d,p,m,v){super(t,i,s,l,u,f,d,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nb extends Ni{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new uS(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ao(5,5,5),u=new nn({name:"CubemapFromEquirect",uniforms:Mo(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:qn,blending:Oa});u.uniforms.tEquirect.value=i;const f=new sn(l,u),d=i.minFilter;return i.minFilter===er&&(i.minFilter=ra),new eb(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(u)}}class La extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ib={type:"move"};class _p{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new La,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new La,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new La,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,f=null;const d=this._targetRay,p=this._grip,m=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(m&&t.hand){f=!0;for(const T of t.hand.values()){const M=i.getJointPose(T,s),_=this._getHandJoint(m,T);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const v=m.joints["index-finger-tip"],g=m.joints["thumb-tip"],y=v.position.distanceTo(g.position),x=.02,E=.005;m.inputState.pinching&&y>x+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!m.inputState.pinching&&y<=x-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(p.matrix.fromArray(u.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,u.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(u.linearVelocity)):p.hasLinearVelocity=!1,u.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(u.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ib)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),m!==null&&(m.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new La;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class cS extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class ab extends Yn{constructor(t=null,i=1,s=1,l,u,f,d,p,m=yi,v=yi,g,y){super(null,f,d,p,m,v,l,u,g,y),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hy extends hn{constructor(t,i,s,l=1){super(t,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const uo=new He,Gy=new He,zc=[],Vy=new or,sb=new He,bl=new sn,Al=new lr;class rb extends sn{constructor(t,i,s){super(t,i),this.isInstancedMesh=!0,this.instanceMatrix=new Hy(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,sb)}computeBoundingBox(){const t=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new or),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,uo),Vy.copy(t.boundingBox).applyMatrix4(uo),this.boundingBox.union(Vy)}computeBoundingSphere(){const t=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new lr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,uo),Al.copy(t.boundingSphere).applyMatrix4(uo),this.boundingSphere.union(Al)}copy(t,i){return super.copy(t,i),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,i){i.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,i){i.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,u=s.length+1,f=t*u+1;for(let d=0;d<s.length;d++)s[d]=l[f+d]}raycast(t,i){const s=this.matrixWorld,l=this.count;if(bl.geometry=this.geometry,bl.material=this.material,bl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Al.copy(this.boundingSphere),Al.applyMatrix4(s),t.ray.intersectsSphere(Al)!==!1))for(let u=0;u<l;u++){this.getMatrixAt(u,uo),Gy.multiplyMatrices(s,uo),bl.matrixWorld=Gy,bl.raycast(t,zc);for(let f=0,d=zc.length;f<d;f++){const p=zc[f];p.instanceId=u,p.object=this,i.push(p)}zc.length=0}}setColorAt(t,i){this.instanceColor===null&&(this.instanceColor=new Hy(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,i){i.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new ab(new Float32Array(l*this.count),l,this.count,Nm,oa));const u=this.morphTexture.source.data.data;let f=0;for(let m=0;m<s.length;m++)f+=s[m];const d=this.geometry.morphTargetsRelative?1:1-f,p=l*t;u[p]=d,u.set(s,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const yp=new H,ob=new H,lb=new _e;class Qs{constructor(t=new H(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=yp.subVectors(s,i).cross(ob.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(yp),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||lb.getNormalMatrix(t),l=this.coplanarPoint(yp).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ws=new lr,ub=new zt(.5,.5),Ic=new H;class Fm{constructor(t=new Qs,i=new Qs,s=new Qs,l=new Qs,u=new Qs,f=new Qs){this.planes=[t,i,s,l,u,f]}set(t,i,s,l,u,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=la,s=!1){const l=this.planes,u=t.elements,f=u[0],d=u[1],p=u[2],m=u[3],v=u[4],g=u[5],y=u[6],x=u[7],E=u[8],T=u[9],M=u[10],_=u[11],R=u[12],w=u[13],b=u[14],I=u[15];if(l[0].setComponents(m-f,x-v,_-E,I-R).normalize(),l[1].setComponents(m+f,x+v,_+E,I+R).normalize(),l[2].setComponents(m+d,x+g,_+T,I+w).normalize(),l[3].setComponents(m-d,x-g,_-T,I-w).normalize(),s)l[4].setComponents(p,y,M,b).normalize(),l[5].setComponents(m-p,x-y,_-M,I-b).normalize();else if(l[4].setComponents(m-p,x-y,_-M,I-b).normalize(),i===la)l[5].setComponents(m+p,x+y,_+M,I+b).normalize();else if(i===of)l[5].setComponents(p,y,M,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ws.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ws.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ws)}intersectsSprite(t){Ws.center.set(0,0,0);const i=ub.distanceTo(t.center);return Ws.radius=.7071067811865476+i,Ws.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ws)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ic.x=l.normal.x>0?t.max.x:t.min.x,Ic.y=l.normal.y>0?t.max.y:t.min.y,Ic.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ic)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class cb extends ur{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new oe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const uf=new H,cf=new H,ky=new He,wl=new Bm,Bc=new lr,xp=new H,Xy=new H;class fS extends Mn{constructor(t=new pn,i=new cb){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[0];for(let l=1,u=i.count;l<u;l++)uf.fromBufferAttribute(i,l-1),cf.fromBufferAttribute(i,l),s[l]=s[l-1],s[l]+=uf.distanceTo(cf);t.setAttribute("lineDistance",new Ge(s,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Bc.copy(s.boundingSphere),Bc.applyMatrix4(l),Bc.radius+=u,t.ray.intersectsSphere(Bc)===!1)return;ky.copy(l).invert(),wl.copy(t.ray).applyMatrix4(ky);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=this.isLineSegments?2:1,v=s.index,y=s.attributes.position;if(v!==null){const x=Math.max(0,f.start),E=Math.min(v.count,f.start+f.count);for(let T=x,M=E-1;T<M;T+=m){const _=v.getX(T),R=v.getX(T+1),w=Fc(this,t,wl,p,_,R,T);w&&i.push(w)}if(this.isLineLoop){const T=v.getX(E-1),M=v.getX(x),_=Fc(this,t,wl,p,T,M,E-1);_&&i.push(_)}}else{const x=Math.max(0,f.start),E=Math.min(y.count,f.start+f.count);for(let T=x,M=E-1;T<M;T+=m){const _=Fc(this,t,wl,p,T,T+1,T);_&&i.push(_)}if(this.isLineLoop){const T=Fc(this,t,wl,p,E-1,x,E-1);T&&i.push(T)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Fc(r,t,i,s,l,u,f){const d=r.geometry.attributes.position;if(uf.fromBufferAttribute(d,l),cf.fromBufferAttribute(d,u),i.distanceSqToSegment(uf,cf,xp,Xy)>s)return;xp.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(xp);if(!(m<t.near||m>t.far))return{distance:m,point:Xy.clone().applyMatrix4(r.matrixWorld),index:f,face:null,faceIndex:null,barycoord:null,object:r}}const qy=new H,Yy=new H;class fb extends fS{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,s=[];for(let l=0,u=i.count;l<u;l+=2)qy.fromBufferAttribute(i,l),Yy.fromBufferAttribute(i,l+1),s[l]=l===0?0:s[l-1],s[l+1]=s[l]+qy.distanceTo(Yy);t.setAttribute("lineDistance",new Ge(s,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class hb extends ur{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new oe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Wy=new He,_m=new Bm,Hc=new lr,Gc=new H;class Hm extends Mn{constructor(t=new pn,i=new hb){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const s=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,f=s.drawRange;if(s.boundingSphere===null&&s.computeBoundingSphere(),Hc.copy(s.boundingSphere),Hc.applyMatrix4(l),Hc.radius+=u,t.ray.intersectsSphere(Hc)===!1)return;Wy.copy(l).invert(),_m.copy(t.ray).applyMatrix4(Wy);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),p=d*d,m=s.index,g=s.attributes.position;if(m!==null){const y=Math.max(0,f.start),x=Math.min(m.count,f.start+f.count);for(let E=y,T=x;E<T;E++){const M=m.getX(E);Gc.fromBufferAttribute(g,M),jy(Gc,M,p,l,t,i,this)}}else{const y=Math.max(0,f.start),x=Math.min(g.count,f.start+f.count);for(let E=y,T=x;E<T;E++)Gc.fromBufferAttribute(g,E),jy(Gc,E,p,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function jy(r,t,i,s,l,u,f){const d=_m.distanceSqToPoint(r);if(d<i){const p=new H;_m.closestPointToPoint(r,p),p.applyMatrix4(s);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;u.push({distance:m,distanceToRay:Math.sqrt(d),point:p,index:t,face:null,faceIndex:null,barycoord:null,object:f})}}class Gm extends Yn{constructor(t,i,s,l,u,f,d,p,m){super(t,i,s,l,u,f,d,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hS extends Yn{constructor(t,i,s=ir,l,u,f,d=yi,p=yi,m,v=Hl,g=1){if(v!==Hl&&v!==Gl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const y={width:t,height:i,depth:g};super(y,l,u,f,d,p,v,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Im(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class dS extends Yn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class gf extends pn{constructor(t=1,i=1,s=1,l=32,u=1,f=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:i,height:s,radialSegments:l,heightSegments:u,openEnded:f,thetaStart:d,thetaLength:p};const m=this;l=Math.floor(l),u=Math.floor(u);const v=[],g=[],y=[],x=[];let E=0;const T=[],M=s/2;let _=0;R(),f===!1&&(t>0&&w(!0),i>0&&w(!1)),this.setIndex(v),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(y,3)),this.setAttribute("uv",new Ge(x,2));function R(){const b=new H,I=new H;let z=0;const P=(i-t)/s;for(let O=0;O<=u;O++){const U=[],A=O/u,V=A*(i-t)+t;for(let Y=0;Y<=l;Y++){const Q=Y/l,pt=Q*p+d,K=Math.sin(pt),W=Math.cos(pt);I.x=V*K,I.y=-A*s+M,I.z=V*W,g.push(I.x,I.y,I.z),b.set(K,P,W).normalize(),y.push(b.x,b.y,b.z),x.push(Q,1-A),U.push(E++)}T.push(U)}for(let O=0;O<l;O++)for(let U=0;U<u;U++){const A=T[U][O],V=T[U+1][O],Y=T[U+1][O+1],Q=T[U][O+1];(t>0||U!==0)&&(v.push(A,V,Q),z+=3),(i>0||U!==u-1)&&(v.push(V,Y,Q),z+=3)}m.addGroup(_,z,0),_+=z}function w(b){const I=E,z=new zt,P=new H;let O=0;const U=b===!0?t:i,A=b===!0?1:-1;for(let Y=1;Y<=l;Y++)g.push(0,M*A,0),y.push(0,A,0),x.push(.5,.5),E++;const V=E;for(let Y=0;Y<=l;Y++){const pt=Y/l*p+d,K=Math.cos(pt),W=Math.sin(pt);P.x=U*W,P.y=M*A,P.z=U*K,g.push(P.x,P.y,P.z),y.push(0,A,0),z.x=K*.5+.5,z.y=W*.5*A+.5,x.push(z.x,z.y),E++}for(let Y=0;Y<l;Y++){const Q=I+Y,pt=V+Y;b===!0?v.push(pt,pt+1,Q):v.push(pt+1,pt,Q),O+=3}m.addGroup(_,O,b===!0?1:2),_+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gf(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Vm extends pn{constructor(t=[],i=[],s=1,l=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:i,radius:s,detail:l};const u=[],f=[];d(l),m(s),v(),this.setAttribute("position",new Ge(u,3)),this.setAttribute("normal",new Ge(u.slice(),3)),this.setAttribute("uv",new Ge(f,2)),l===0?this.computeVertexNormals():this.normalizeNormals();function d(R){const w=new H,b=new H,I=new H;for(let z=0;z<i.length;z+=3)x(i[z+0],w),x(i[z+1],b),x(i[z+2],I),p(w,b,I,R)}function p(R,w,b,I){const z=I+1,P=[];for(let O=0;O<=z;O++){P[O]=[];const U=R.clone().lerp(b,O/z),A=w.clone().lerp(b,O/z),V=z-O;for(let Y=0;Y<=V;Y++)Y===0&&O===z?P[O][Y]=U:P[O][Y]=U.clone().lerp(A,Y/V)}for(let O=0;O<z;O++)for(let U=0;U<2*(z-O)-1;U++){const A=Math.floor(U/2);U%2===0?(y(P[O][A+1]),y(P[O+1][A]),y(P[O][A])):(y(P[O][A+1]),y(P[O+1][A+1]),y(P[O+1][A]))}}function m(R){const w=new H;for(let b=0;b<u.length;b+=3)w.x=u[b+0],w.y=u[b+1],w.z=u[b+2],w.normalize().multiplyScalar(R),u[b+0]=w.x,u[b+1]=w.y,u[b+2]=w.z}function v(){const R=new H;for(let w=0;w<u.length;w+=3){R.x=u[w+0],R.y=u[w+1],R.z=u[w+2];const b=M(R)/2/Math.PI+.5,I=_(R)/Math.PI+.5;f.push(b,1-I)}E(),g()}function g(){for(let R=0;R<f.length;R+=6){const w=f[R+0],b=f[R+2],I=f[R+4],z=Math.max(w,b,I),P=Math.min(w,b,I);z>.9&&P<.1&&(w<.2&&(f[R+0]+=1),b<.2&&(f[R+2]+=1),I<.2&&(f[R+4]+=1))}}function y(R){u.push(R.x,R.y,R.z)}function x(R,w){const b=R*3;w.x=t[b+0],w.y=t[b+1],w.z=t[b+2]}function E(){const R=new H,w=new H,b=new H,I=new H,z=new zt,P=new zt,O=new zt;for(let U=0,A=0;U<u.length;U+=9,A+=6){R.set(u[U+0],u[U+1],u[U+2]),w.set(u[U+3],u[U+4],u[U+5]),b.set(u[U+6],u[U+7],u[U+8]),z.set(f[A+0],f[A+1]),P.set(f[A+2],f[A+3]),O.set(f[A+4],f[A+5]),I.copy(R).add(w).add(b).divideScalar(3);const V=M(I);T(z,A+0,R,V),T(P,A+2,w,V),T(O,A+4,b,V)}}function T(R,w,b,I){I<0&&R.x===1&&(f[w]=R.x-1),b.x===0&&b.z===0&&(f[w]=I/2/Math.PI+.5)}function M(R){return Math.atan2(R.z,-R.x)}function _(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vm(t.vertices,t.indices,t.radius,t.details)}}class ca{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),u=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),u+=s.distanceTo(l),i.push(u),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const u=s.length;let f;i?f=i:f=t*s[u-1];let d=0,p=u-1,m;for(;d<=p;)if(l=Math.floor(d+(p-d)/2),m=s[l]-f,m<0)d=l+1;else if(m>0)p=l-1;else{p=l;break}if(l=p,s[l]===f)return l/(u-1);const v=s[l],y=s[l+1]-v,x=(f-v)/y;return(l+x)/(u-1)}getTangent(t,i){let l=t-1e-4,u=t+1e-4;l<0&&(l=0),u>1&&(u=1);const f=this.getPoint(l),d=this.getPoint(u),p=i||(f.isVector2?new zt:new H);return p.copy(d).sub(f).normalize(),p}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new H,l=[],u=[],f=[],d=new H,p=new He;for(let x=0;x<=t;x++){const E=x/t;l[x]=this.getTangentAt(E,new H)}u[0]=new H,f[0]=new H;let m=Number.MAX_VALUE;const v=Math.abs(l[0].x),g=Math.abs(l[0].y),y=Math.abs(l[0].z);v<=m&&(m=v,s.set(1,0,0)),g<=m&&(m=g,s.set(0,1,0)),y<=m&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),u[0].crossVectors(l[0],d),f[0].crossVectors(l[0],u[0]);for(let x=1;x<=t;x++){if(u[x]=u[x-1].clone(),f[x]=f[x-1].clone(),d.crossVectors(l[x-1],l[x]),d.length()>Number.EPSILON){d.normalize();const E=Math.acos(Ae(l[x-1].dot(l[x]),-1,1));u[x].applyMatrix4(p.makeRotationAxis(d,E))}f[x].crossVectors(l[x],u[x])}if(i===!0){let x=Math.acos(Ae(u[0].dot(u[t]),-1,1));x/=t,l[0].dot(d.crossVectors(u[0],u[t]))>0&&(x=-x);for(let E=1;E<=t;E++)u[E].applyMatrix4(p.makeRotationAxis(l[E],x*E)),f[E].crossVectors(l[E],u[E])}return{tangents:l,normals:u,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class km extends ca{constructor(t=0,i=0,s=1,l=1,u=0,f=Math.PI*2,d=!1,p=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=u,this.aEndAngle=f,this.aClockwise=d,this.aRotation=p}getPoint(t,i=new zt){const s=i,l=Math.PI*2;let u=this.aEndAngle-this.aStartAngle;const f=Math.abs(u)<Number.EPSILON;for(;u<0;)u+=l;for(;u>l;)u-=l;u<Number.EPSILON&&(f?u=0:u=l),this.aClockwise===!0&&!f&&(u===l?u=-l:u=u-l);const d=this.aStartAngle+t*u;let p=this.aX+this.xRadius*Math.cos(d),m=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),g=Math.sin(this.aRotation),y=p-this.aX,x=m-this.aY;p=y*v-x*g+this.aX,m=y*g+x*v+this.aY}return s.set(p,m)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class db extends km{constructor(t,i,s,l,u,f){super(t,i,s,s,l,u,f),this.isArcCurve=!0,this.type="ArcCurve"}}function Xm(){let r=0,t=0,i=0,s=0;function l(u,f,d,p){r=u,t=d,i=-3*u+3*f-2*d-p,s=2*u-2*f+d+p}return{initCatmullRom:function(u,f,d,p,m){l(f,d,m*(d-u),m*(p-f))},initNonuniformCatmullRom:function(u,f,d,p,m,v,g){let y=(f-u)/m-(d-u)/(m+v)+(d-f)/v,x=(d-f)/v-(p-f)/(v+g)+(p-d)/g;y*=v,x*=v,l(f,d,y,x)},calc:function(u){const f=u*u,d=f*u;return r+t*u+i*f+s*d}}}const Vc=new H,Sp=new Xm,Mp=new Xm,Ep=new Xm;class ym extends ca{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new H){const s=i,l=this.points,u=l.length,f=(u-(this.closed?0:1))*t;let d=Math.floor(f),p=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/u)+1)*u:p===0&&d===u-1&&(d=u-2,p=1);let m,v;this.closed||d>0?m=l[(d-1)%u]:(Vc.subVectors(l[0],l[1]).add(l[0]),m=Vc);const g=l[d%u],y=l[(d+1)%u];if(this.closed||d+2<u?v=l[(d+2)%u]:(Vc.subVectors(l[u-1],l[u-2]).add(l[u-1]),v=Vc),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let E=Math.pow(m.distanceToSquared(g),x),T=Math.pow(g.distanceToSquared(y),x),M=Math.pow(y.distanceToSquared(v),x);T<1e-4&&(T=1),E<1e-4&&(E=T),M<1e-4&&(M=T),Sp.initNonuniformCatmullRom(m.x,g.x,y.x,v.x,E,T,M),Mp.initNonuniformCatmullRom(m.y,g.y,y.y,v.y,E,T,M),Ep.initNonuniformCatmullRom(m.z,g.z,y.z,v.z,E,T,M)}else this.curveType==="catmullrom"&&(Sp.initCatmullRom(m.x,g.x,y.x,v.x,this.tension),Mp.initCatmullRom(m.y,g.y,y.y,v.y,this.tension),Ep.initCatmullRom(m.z,g.z,y.z,v.z,this.tension));return s.set(Sp.calc(p),Mp.calc(p),Ep.calc(p)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new H().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Zy(r,t,i,s,l){const u=(s-t)*.5,f=(l-i)*.5,d=r*r,p=r*d;return(2*i-2*s+u+f)*p+(-3*i+3*s-2*u-f)*d+u*r+i}function pb(r,t){const i=1-r;return i*i*t}function mb(r,t){return 2*(1-r)*r*t}function gb(r,t){return r*r*t}function Pl(r,t,i,s){return pb(r,t)+mb(r,i)+gb(r,s)}function vb(r,t){const i=1-r;return i*i*i*t}function _b(r,t){const i=1-r;return 3*i*i*r*t}function yb(r,t){return 3*(1-r)*r*r*t}function xb(r,t){return r*r*r*t}function zl(r,t,i,s,l){return vb(r,t)+_b(r,i)+yb(r,s)+xb(r,l)}class pS extends ca{constructor(t=new zt,i=new zt,s=new zt,l=new zt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new zt){const s=i,l=this.v0,u=this.v1,f=this.v2,d=this.v3;return s.set(zl(t,l.x,u.x,f.x,d.x),zl(t,l.y,u.y,f.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Sb extends ca{constructor(t=new H,i=new H,s=new H,l=new H){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new H){const s=i,l=this.v0,u=this.v1,f=this.v2,d=this.v3;return s.set(zl(t,l.x,u.x,f.x,d.x),zl(t,l.y,u.y,f.y,d.y),zl(t,l.z,u.z,f.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class mS extends ca{constructor(t=new zt,i=new zt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new zt){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new zt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mb extends ca{constructor(t=new H,i=new H){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new H){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new H){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class gS extends ca{constructor(t=new zt,i=new zt,s=new zt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new zt){const s=i,l=this.v0,u=this.v1,f=this.v2;return s.set(Pl(t,l.x,u.x,f.x),Pl(t,l.y,u.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vS extends ca{constructor(t=new H,i=new H,s=new H){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new H){const s=i,l=this.v0,u=this.v1,f=this.v2;return s.set(Pl(t,l.x,u.x,f.x),Pl(t,l.y,u.y,f.y),Pl(t,l.z,u.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class _S extends ca{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new zt){const s=i,l=this.points,u=(l.length-1)*t,f=Math.floor(u),d=u-f,p=l[f===0?f:f-1],m=l[f],v=l[f>l.length-2?l.length-1:f+1],g=l[f>l.length-3?l.length-1:f+2];return s.set(Zy(d,p.x,m.x,v.x,g.x),Zy(d,p.y,m.y,v.y,g.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new zt().fromArray(l))}return this}}var ff=Object.freeze({__proto__:null,ArcCurve:db,CatmullRomCurve3:ym,CubicBezierCurve:pS,CubicBezierCurve3:Sb,EllipseCurve:km,LineCurve:mS,LineCurve3:Mb,QuadraticBezierCurve:gS,QuadraticBezierCurve3:vS,SplineCurve:_S});class Eb extends ca{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ff[s](i,t))}return this}getPoint(t,i){const s=t*this.getLength(),l=this.getCurveLengths();let u=0;for(;u<l.length;){if(l[u]>=s){const f=l[u]-s,d=this.curves[u],p=d.getLength(),m=p===0?0:1-f/p;return d.getPointAt(m,i)}u++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let s=0,l=this.curves.length;s<l;s++)i+=this.curves[s].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let s;for(let l=0,u=this.curves;l<u.length;l++){const f=u[l],d=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,p=f.getPoints(d);for(let m=0;m<p.length;m++){const v=p[m];s&&s.equals(v)||(i.push(v),s=v)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,s=this.curves.length;i<s;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(new ff[l.type]().fromJSON(l))}return this}}class Qy extends Eb{constructor(t){super(),this.type="Path",this.currentPoint=new zt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,s=t.length;i<s;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const s=new mS(this.currentPoint.clone(),new zt(t,i));return this.curves.push(s),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,s,l){const u=new gS(this.currentPoint.clone(),new zt(t,i),new zt(s,l));return this.curves.push(u),this.currentPoint.set(s,l),this}bezierCurveTo(t,i,s,l,u,f){const d=new pS(this.currentPoint.clone(),new zt(t,i),new zt(s,l),new zt(u,f));return this.curves.push(d),this.currentPoint.set(u,f),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),s=new _S(i);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,s,l,u,f){const d=this.currentPoint.x,p=this.currentPoint.y;return this.absarc(t+d,i+p,s,l,u,f),this}absarc(t,i,s,l,u,f){return this.absellipse(t,i,s,s,l,u,f),this}ellipse(t,i,s,l,u,f,d,p){const m=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(t+m,i+v,s,l,u,f,d,p),this}absellipse(t,i,s,l,u,f,d,p){const m=new km(t,i,s,l,u,f,d,p);if(this.curves.length>0){const g=m.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(m);const v=m.getPoint(1);return this.currentPoint.copy(v),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class hf extends Qy{constructor(t){super(t),this.uuid=rr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const i=[];for(let s=0,l=this.holes.length;s<l;s++)i[s]=this.holes[s].getPoints(t);return i}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let i=0,s=this.holes.length;i<s;i++){const l=this.holes[i];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(new Qy().fromJSON(l))}return this}}function Tb(r,t,i=2){const s=t&&t.length,l=s?t[0]*i:r.length;let u=yS(r,0,l,i,!0);const f=[];if(!u||u.next===u.prev)return f;let d,p,m;if(s&&(u=Rb(r,t,u,i)),r.length>80*i){d=1/0,p=1/0;let v=-1/0,g=-1/0;for(let y=i;y<l;y+=i){const x=r[y],E=r[y+1];x<d&&(d=x),E<p&&(p=E),x>v&&(v=x),E>g&&(g=E)}m=Math.max(v-d,g-p),m=m!==0?32767/m:0}return ql(u,f,i,d,p,m,0),f}function yS(r,t,i,s,l){let u;if(l===Hb(r,t,i,s)>0)for(let f=t;f<i;f+=s)u=Ky(f/s|0,r[f],r[f+1],u);else for(let f=i-s;f>=t;f-=s)u=Ky(f/s|0,r[f],r[f+1],u);return u&&Eo(u,u.next)&&(Wl(u),u=u.next),u}function sr(r,t){if(!r)return r;t||(t=r);let i=r,s;do if(s=!1,!i.steiner&&(Eo(i,i.next)||ln(i.prev,i,i.next)===0)){if(Wl(i),i=t=i.prev,i===i.next)break;s=!0}else i=i.next;while(s||i!==t);return t}function ql(r,t,i,s,l,u,f){if(!r)return;!f&&u&&Ob(r,s,l,u);let d=r;for(;r.prev!==r.next;){const p=r.prev,m=r.next;if(u?Ab(r,s,l,u):bb(r)){t.push(p.i,r.i,m.i),Wl(r),r=m.next,d=m.next;continue}if(r=m,r===d){f?f===1?(r=wb(sr(r),t),ql(r,t,i,s,l,u,2)):f===2&&Cb(r,t,i,s,l,u):ql(sr(r),t,i,s,l,u,1);break}}}function bb(r){const t=r.prev,i=r,s=r.next;if(ln(t,i,s)>=0)return!1;const l=t.x,u=i.x,f=s.x,d=t.y,p=i.y,m=s.y,v=Math.min(l,u,f),g=Math.min(d,p,m),y=Math.max(l,u,f),x=Math.max(d,p,m);let E=s.next;for(;E!==t;){if(E.x>=v&&E.x<=y&&E.y>=g&&E.y<=x&&Ul(l,d,u,p,f,m,E.x,E.y)&&ln(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function Ab(r,t,i,s){const l=r.prev,u=r,f=r.next;if(ln(l,u,f)>=0)return!1;const d=l.x,p=u.x,m=f.x,v=l.y,g=u.y,y=f.y,x=Math.min(d,p,m),E=Math.min(v,g,y),T=Math.max(d,p,m),M=Math.max(v,g,y),_=xm(x,E,t,i,s),R=xm(T,M,t,i,s);let w=r.prevZ,b=r.nextZ;for(;w&&w.z>=_&&b&&b.z<=R;){if(w.x>=x&&w.x<=T&&w.y>=E&&w.y<=M&&w!==l&&w!==f&&Ul(d,v,p,g,m,y,w.x,w.y)&&ln(w.prev,w,w.next)>=0||(w=w.prevZ,b.x>=x&&b.x<=T&&b.y>=E&&b.y<=M&&b!==l&&b!==f&&Ul(d,v,p,g,m,y,b.x,b.y)&&ln(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;w&&w.z>=_;){if(w.x>=x&&w.x<=T&&w.y>=E&&w.y<=M&&w!==l&&w!==f&&Ul(d,v,p,g,m,y,w.x,w.y)&&ln(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;b&&b.z<=R;){if(b.x>=x&&b.x<=T&&b.y>=E&&b.y<=M&&b!==l&&b!==f&&Ul(d,v,p,g,m,y,b.x,b.y)&&ln(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function wb(r,t){let i=r;do{const s=i.prev,l=i.next.next;!Eo(s,l)&&SS(s,i,i.next,l)&&Yl(s,l)&&Yl(l,s)&&(t.push(s.i,i.i,l.i),Wl(i),Wl(i.next),i=r=l),i=i.next}while(i!==r);return sr(i)}function Cb(r,t,i,s,l,u){let f=r;do{let d=f.next.next;for(;d!==f.prev;){if(f.i!==d.i&&Ib(f,d)){let p=MS(f,d);f=sr(f,f.next),p=sr(p,p.next),ql(f,t,i,s,l,u,0),ql(p,t,i,s,l,u,0);return}d=d.next}f=f.next}while(f!==r)}function Rb(r,t,i,s){const l=[];for(let u=0,f=t.length;u<f;u++){const d=t[u]*s,p=u<f-1?t[u+1]*s:r.length,m=yS(r,d,p,s,!1);m===m.next&&(m.steiner=!0),l.push(zb(m))}l.sort(Db);for(let u=0;u<l.length;u++)i=Ub(l[u],i);return i}function Db(r,t){let i=r.x-t.x;if(i===0&&(i=r.y-t.y,i===0)){const s=(r.next.y-r.y)/(r.next.x-r.x),l=(t.next.y-t.y)/(t.next.x-t.x);i=s-l}return i}function Ub(r,t){const i=Nb(r,t);if(!i)return t;const s=MS(i,r);return sr(s,s.next),sr(i,i.next)}function Nb(r,t){let i=t;const s=r.x,l=r.y;let u=-1/0,f;if(Eo(r,i))return i;do{if(Eo(r,i.next))return i.next;if(l<=i.y&&l>=i.next.y&&i.next.y!==i.y){const g=i.x+(l-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(g<=s&&g>u&&(u=g,f=i.x<i.next.x?i:i.next,g===s))return f}i=i.next}while(i!==t);if(!f)return null;const d=f,p=f.x,m=f.y;let v=1/0;i=f;do{if(s>=i.x&&i.x>=p&&s!==i.x&&xS(l<m?s:u,l,p,m,l<m?u:s,l,i.x,i.y)){const g=Math.abs(l-i.y)/(s-i.x);Yl(i,r)&&(g<v||g===v&&(i.x>f.x||i.x===f.x&&Lb(f,i)))&&(f=i,v=g)}i=i.next}while(i!==d);return f}function Lb(r,t){return ln(r.prev,r,t.prev)<0&&ln(t.next,r,r.next)<0}function Ob(r,t,i,s){let l=r;do l.z===0&&(l.z=xm(l.x,l.y,t,i,s)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==r);l.prevZ.nextZ=null,l.prevZ=null,Pb(l)}function Pb(r){let t,i=1;do{let s=r,l;r=null;let u=null;for(t=0;s;){t++;let f=s,d=0;for(let m=0;m<i&&(d++,f=f.nextZ,!!f);m++);let p=i;for(;d>0||p>0&&f;)d!==0&&(p===0||!f||s.z<=f.z)?(l=s,s=s.nextZ,d--):(l=f,f=f.nextZ,p--),u?u.nextZ=l:r=l,l.prevZ=u,u=l;s=f}u.nextZ=null,i*=2}while(t>1);return r}function xm(r,t,i,s,l){return r=(r-i)*l|0,t=(t-s)*l|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function zb(r){let t=r,i=r;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==r);return i}function xS(r,t,i,s,l,u,f,d){return(l-f)*(t-d)>=(r-f)*(u-d)&&(r-f)*(s-d)>=(i-f)*(t-d)&&(i-f)*(u-d)>=(l-f)*(s-d)}function Ul(r,t,i,s,l,u,f,d){return!(r===f&&t===d)&&xS(r,t,i,s,l,u,f,d)}function Ib(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!Bb(r,t)&&(Yl(r,t)&&Yl(t,r)&&Fb(r,t)&&(ln(r.prev,r,t.prev)||ln(r,t.prev,t))||Eo(r,t)&&ln(r.prev,r,r.next)>0&&ln(t.prev,t,t.next)>0)}function ln(r,t,i){return(t.y-r.y)*(i.x-t.x)-(t.x-r.x)*(i.y-t.y)}function Eo(r,t){return r.x===t.x&&r.y===t.y}function SS(r,t,i,s){const l=Xc(ln(r,t,i)),u=Xc(ln(r,t,s)),f=Xc(ln(i,s,r)),d=Xc(ln(i,s,t));return!!(l!==u&&f!==d||l===0&&kc(r,i,t)||u===0&&kc(r,s,t)||f===0&&kc(i,r,s)||d===0&&kc(i,t,s))}function kc(r,t,i){return t.x<=Math.max(r.x,i.x)&&t.x>=Math.min(r.x,i.x)&&t.y<=Math.max(r.y,i.y)&&t.y>=Math.min(r.y,i.y)}function Xc(r){return r>0?1:r<0?-1:0}function Bb(r,t){let i=r;do{if(i.i!==r.i&&i.next.i!==r.i&&i.i!==t.i&&i.next.i!==t.i&&SS(i,i.next,r,t))return!0;i=i.next}while(i!==r);return!1}function Yl(r,t){return ln(r.prev,r,r.next)<0?ln(r,t,r.next)>=0&&ln(r,r.prev,t)>=0:ln(r,t,r.prev)<0||ln(r,r.next,t)<0}function Fb(r,t){let i=r,s=!1;const l=(r.x+t.x)/2,u=(r.y+t.y)/2;do i.y>u!=i.next.y>u&&i.next.y!==i.y&&l<(i.next.x-i.x)*(u-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==r);return s}function MS(r,t){const i=Sm(r.i,r.x,r.y),s=Sm(t.i,t.x,t.y),l=r.next,u=t.prev;return r.next=t,t.prev=r,i.next=l,l.prev=i,s.next=i,i.prev=s,u.next=s,s.prev=u,s}function Ky(r,t,i,s){const l=Sm(r,t,i);return s?(l.next=s.next,l.prev=s,s.next.prev=l,s.next=l):(l.prev=l,l.next=l),l}function Wl(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Sm(r,t,i){return{i:r,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Hb(r,t,i,s){let l=0;for(let u=t,f=i-s;u<i;u+=s)l+=(r[f]-r[u])*(r[u+1]+r[f+1]),f=u;return l}class Gb{static triangulate(t,i,s=2){return Tb(t,i,s)}}class ho{static area(t){const i=t.length;let s=0;for(let l=i-1,u=0;u<i;l=u++)s+=t[l].x*t[u].y-t[u].x*t[l].y;return s*.5}static isClockWise(t){return ho.area(t)<0}static triangulateShape(t,i){const s=[],l=[],u=[];Jy(t),$y(s,t);let f=t.length;i.forEach(Jy);for(let p=0;p<i.length;p++)l.push(f),f+=i[p].length,$y(s,i[p]);const d=Gb.triangulate(s,l);for(let p=0;p<d.length;p+=3)u.push(d.slice(p,p+3));return u}}function Jy(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function $y(r,t){for(let i=0;i<t.length;i++)r.push(t[i].x),r.push(t[i].y)}class jl extends pn{constructor(t=new hf([new zt(.5,.5),new zt(-.5,.5),new zt(-.5,-.5),new zt(.5,-.5)]),i={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:i},t=Array.isArray(t)?t:[t];const s=this,l=[],u=[];for(let d=0,p=t.length;d<p;d++){const m=t[d];f(m)}this.setAttribute("position",new Ge(l,3)),this.setAttribute("uv",new Ge(u,2)),this.computeVertexNormals();function f(d){const p=[],m=i.curveSegments!==void 0?i.curveSegments:12,v=i.steps!==void 0?i.steps:1,g=i.depth!==void 0?i.depth:1;let y=i.bevelEnabled!==void 0?i.bevelEnabled:!0,x=i.bevelThickness!==void 0?i.bevelThickness:.2,E=i.bevelSize!==void 0?i.bevelSize:x-.1,T=i.bevelOffset!==void 0?i.bevelOffset:0,M=i.bevelSegments!==void 0?i.bevelSegments:3;const _=i.extrudePath,R=i.UVGenerator!==void 0?i.UVGenerator:Vb;let w,b=!1,I,z,P,O;_&&(w=_.getSpacedPoints(v),b=!0,y=!1,I=_.computeFrenetFrames(v,!1),z=new H,P=new H,O=new H),y||(M=0,x=0,E=0,T=0);const U=d.extractPoints(m);let A=U.shape;const V=U.holes;if(!ho.isClockWise(A)){A=A.reverse();for(let Et=0,_t=V.length;Et<_t;Et++){const dt=V[Et];ho.isClockWise(dt)&&(V[Et]=dt.reverse())}}function Q(Et){const dt=10000000000000001e-36;let ut=Et[0];for(let Ct=1;Ct<=Et.length;Ct++){const Dt=Ct%Et.length,Bt=Et[Dt],re=Bt.x-ut.x,ue=Bt.y-ut.y,F=re*re+ue*ue,C=Math.max(Math.abs(Bt.x),Math.abs(Bt.y),Math.abs(ut.x),Math.abs(ut.y)),st=dt*C*C;if(F<=st){Et.splice(Dt,1),Ct--;continue}ut=Bt}}Q(A),V.forEach(Q);const pt=V.length,K=A;for(let Et=0;Et<pt;Et++){const _t=V[Et];A=A.concat(_t)}function W(Et,_t,dt){return _t||console.error("THREE.ExtrudeGeometry: vec does not exist"),Et.clone().addScaledVector(_t,dt)}const N=A.length;function B(Et,_t,dt){let ut,Ct,Dt;const Bt=Et.x-_t.x,re=Et.y-_t.y,ue=dt.x-Et.x,F=dt.y-Et.y,C=Bt*Bt+re*re,st=Bt*F-re*ue;if(Math.abs(st)>Number.EPSILON){const vt=Math.sqrt(C),Nt=Math.sqrt(ue*ue+F*F),St=_t.x-re/vt,Qt=_t.y+Bt/vt,Ft=dt.x-F/Nt,$t=dt.y+ue/Nt,ee=((Ft-St)*F-($t-Qt)*ue)/(Bt*F-re*ue);ut=St+Bt*ee-Et.x,Ct=Qt+re*ee-Et.y;const Ot=ut*ut+Ct*Ct;if(Ot<=2)return new zt(ut,Ct);Dt=Math.sqrt(Ot/2)}else{let vt=!1;Bt>Number.EPSILON?ue>Number.EPSILON&&(vt=!0):Bt<-Number.EPSILON?ue<-Number.EPSILON&&(vt=!0):Math.sign(re)===Math.sign(F)&&(vt=!0),vt?(ut=-re,Ct=Bt,Dt=Math.sqrt(C)):(ut=Bt,Ct=re,Dt=Math.sqrt(C/2))}return new zt(ut/Dt,Ct/Dt)}const $=[];for(let Et=0,_t=K.length,dt=_t-1,ut=Et+1;Et<_t;Et++,dt++,ut++)dt===_t&&(dt=0),ut===_t&&(ut=0),$[Et]=B(K[Et],K[dt],K[ut]);const ht=[];let Rt,Gt=$.concat();for(let Et=0,_t=pt;Et<_t;Et++){const dt=V[Et];Rt=[];for(let ut=0,Ct=dt.length,Dt=Ct-1,Bt=ut+1;ut<Ct;ut++,Dt++,Bt++)Dt===Ct&&(Dt=0),Bt===Ct&&(Bt=0),Rt[ut]=B(dt[ut],dt[Dt],dt[Bt]);ht.push(Rt),Gt=Gt.concat(Rt)}let ne;if(M===0)ne=ho.triangulateShape(K,V);else{const Et=[],_t=[];for(let dt=0;dt<M;dt++){const ut=dt/M,Ct=x*Math.cos(ut*Math.PI/2),Dt=E*Math.sin(ut*Math.PI/2)+T;for(let Bt=0,re=K.length;Bt<re;Bt++){const ue=W(K[Bt],$[Bt],Dt);xt(ue.x,ue.y,-Ct),ut===0&&Et.push(ue)}for(let Bt=0,re=pt;Bt<re;Bt++){const ue=V[Bt];Rt=ht[Bt];const F=[];for(let C=0,st=ue.length;C<st;C++){const vt=W(ue[C],Rt[C],Dt);xt(vt.x,vt.y,-Ct),ut===0&&F.push(vt)}ut===0&&_t.push(F)}}ne=ho.triangulateShape(Et,_t)}const q=ne.length,J=E+T;for(let Et=0;Et<N;Et++){const _t=y?W(A[Et],Gt[Et],J):A[Et];b?(P.copy(I.normals[0]).multiplyScalar(_t.x),z.copy(I.binormals[0]).multiplyScalar(_t.y),O.copy(w[0]).add(P).add(z),xt(O.x,O.y,O.z)):xt(_t.x,_t.y,0)}for(let Et=1;Et<=v;Et++)for(let _t=0;_t<N;_t++){const dt=y?W(A[_t],Gt[_t],J):A[_t];b?(P.copy(I.normals[Et]).multiplyScalar(dt.x),z.copy(I.binormals[Et]).multiplyScalar(dt.y),O.copy(w[Et]).add(P).add(z),xt(O.x,O.y,O.z)):xt(dt.x,dt.y,g/v*Et)}for(let Et=M-1;Et>=0;Et--){const _t=Et/M,dt=x*Math.cos(_t*Math.PI/2),ut=E*Math.sin(_t*Math.PI/2)+T;for(let Ct=0,Dt=K.length;Ct<Dt;Ct++){const Bt=W(K[Ct],$[Ct],ut);xt(Bt.x,Bt.y,g+dt)}for(let Ct=0,Dt=V.length;Ct<Dt;Ct++){const Bt=V[Ct];Rt=ht[Ct];for(let re=0,ue=Bt.length;re<ue;re++){const F=W(Bt[re],Rt[re],ut);b?xt(F.x,F.y+w[v-1].y,w[v-1].x+dt):xt(F.x,F.y,g+dt)}}}tt(),k();function tt(){const Et=l.length/3;if(y){let _t=0,dt=N*_t;for(let ut=0;ut<q;ut++){const Ct=ne[ut];Mt(Ct[2]+dt,Ct[1]+dt,Ct[0]+dt)}_t=v+M*2,dt=N*_t;for(let ut=0;ut<q;ut++){const Ct=ne[ut];Mt(Ct[0]+dt,Ct[1]+dt,Ct[2]+dt)}}else{for(let _t=0;_t<q;_t++){const dt=ne[_t];Mt(dt[2],dt[1],dt[0])}for(let _t=0;_t<q;_t++){const dt=ne[_t];Mt(dt[0]+N*v,dt[1]+N*v,dt[2]+N*v)}}s.addGroup(Et,l.length/3-Et,0)}function k(){const Et=l.length/3;let _t=0;ft(K,_t),_t+=K.length;for(let dt=0,ut=V.length;dt<ut;dt++){const Ct=V[dt];ft(Ct,_t),_t+=Ct.length}s.addGroup(Et,l.length/3-Et,1)}function ft(Et,_t){let dt=Et.length;for(;--dt>=0;){const ut=dt;let Ct=dt-1;Ct<0&&(Ct=Et.length-1);for(let Dt=0,Bt=v+M*2;Dt<Bt;Dt++){const re=N*Dt,ue=N*(Dt+1),F=_t+ut+re,C=_t+Ct+re,st=_t+Ct+ue,vt=_t+ut+ue;At(F,C,st,vt)}}}function xt(Et,_t,dt){p.push(Et),p.push(_t),p.push(dt)}function Mt(Et,_t,dt){Lt(Et),Lt(_t),Lt(dt);const ut=l.length/3,Ct=R.generateTopUV(s,l,ut-3,ut-2,ut-1);G(Ct[0]),G(Ct[1]),G(Ct[2])}function At(Et,_t,dt,ut){Lt(Et),Lt(_t),Lt(ut),Lt(_t),Lt(dt),Lt(ut);const Ct=l.length/3,Dt=R.generateSideWallUV(s,l,Ct-6,Ct-3,Ct-2,Ct-1);G(Dt[0]),G(Dt[1]),G(Dt[3]),G(Dt[1]),G(Dt[2]),G(Dt[3])}function Lt(Et){l.push(p[Et*3+0]),l.push(p[Et*3+1]),l.push(p[Et*3+2])}function G(Et){u.push(Et.x),u.push(Et.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes,s=this.parameters.options;return kb(i,s,t)}static fromJSON(t,i){const s=[];for(let u=0,f=t.shapes.length;u<f;u++){const d=i[t.shapes[u]];s.push(d)}const l=t.options.extrudePath;return l!==void 0&&(t.options.extrudePath=new ff[l.type]().fromJSON(l)),new jl(s,t.options)}}const Vb={generateTopUV:function(r,t,i,s,l){const u=t[i*3],f=t[i*3+1],d=t[s*3],p=t[s*3+1],m=t[l*3],v=t[l*3+1];return[new zt(u,f),new zt(d,p),new zt(m,v)]},generateSideWallUV:function(r,t,i,s,l,u){const f=t[i*3],d=t[i*3+1],p=t[i*3+2],m=t[s*3],v=t[s*3+1],g=t[s*3+2],y=t[l*3],x=t[l*3+1],E=t[l*3+2],T=t[u*3],M=t[u*3+1],_=t[u*3+2];return Math.abs(d-v)<Math.abs(f-m)?[new zt(f,1-p),new zt(m,1-g),new zt(y,1-E),new zt(T,1-_)]:[new zt(d,1-p),new zt(v,1-g),new zt(x,1-E),new zt(M,1-_)]}};function kb(r,t,i){if(i.shapes=[],Array.isArray(r))for(let s=0,l=r.length;s<l;s++){const u=r[s];i.shapes.push(u.uuid)}else i.shapes.push(r.uuid);return i.options=Object.assign({},t),t.extrudePath!==void 0&&(i.options.extrudePath=t.extrudePath.toJSON()),i}class qm extends Vm{constructor(t=1,i=0){const s=(1+Math.sqrt(5))/2,l=[-1,s,0,1,s,0,-1,-s,0,1,-s,0,0,-1,s,0,1,s,0,-1,-s,0,1,-s,s,0,-1,s,0,1,-s,0,-1,-s,0,1],u=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(l,u,t,i),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:i}}static fromJSON(t){return new qm(t.radius,t.detail)}}class Ia extends pn{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,f=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,v=p+1,g=t/d,y=i/p,x=[],E=[],T=[],M=[];for(let _=0;_<v;_++){const R=_*y-f;for(let w=0;w<m;w++){const b=w*g-u;E.push(b,-R,0),T.push(0,0,1),M.push(w/d),M.push(1-_/p)}}for(let _=0;_<p;_++)for(let R=0;R<d;R++){const w=R+m*_,b=R+m*(_+1),I=R+1+m*(_+1),z=R+1+m*_;x.push(w,b,z),x.push(b,I,z)}this.setIndex(x),this.setAttribute("position",new Ge(E,3)),this.setAttribute("normal",new Ge(T,3)),this.setAttribute("uv",new Ge(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ia(t.width,t.height,t.widthSegments,t.heightSegments)}}class Ym extends pn{constructor(t=.5,i=1,s=32,l=1,u=0,f=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:i,thetaSegments:s,phiSegments:l,thetaStart:u,thetaLength:f},s=Math.max(3,s),l=Math.max(1,l);const d=[],p=[],m=[],v=[];let g=t;const y=(i-t)/l,x=new H,E=new zt;for(let T=0;T<=l;T++){for(let M=0;M<=s;M++){const _=u+M/s*f;x.x=g*Math.cos(_),x.y=g*Math.sin(_),p.push(x.x,x.y,x.z),m.push(0,0,1),E.x=(x.x/i+1)/2,E.y=(x.y/i+1)/2,v.push(E.x,E.y)}g+=y}for(let T=0;T<l;T++){const M=T*(s+1);for(let _=0;_<s;_++){const R=_+M,w=R,b=R+s+1,I=R+s+2,z=R+1;d.push(w,b,z),d.push(b,I,z)}}this.setIndex(d),this.setAttribute("position",new Ge(p,3)),this.setAttribute("normal",new Ge(m,3)),this.setAttribute("uv",new Ge(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ym(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ua extends pn{constructor(t=1,i=32,s=16,l=0,u=Math.PI*2,f=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:i,heightSegments:s,phiStart:l,phiLength:u,thetaStart:f,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(f+d,Math.PI);let m=0;const v=[],g=new H,y=new H,x=[],E=[],T=[],M=[];for(let _=0;_<=s;_++){const R=[],w=_/s;let b=0;_===0&&f===0?b=.5/i:_===s&&p===Math.PI&&(b=-.5/i);for(let I=0;I<=i;I++){const z=I/i;g.x=-t*Math.cos(l+z*u)*Math.sin(f+w*d),g.y=t*Math.cos(f+w*d),g.z=t*Math.sin(l+z*u)*Math.sin(f+w*d),E.push(g.x,g.y,g.z),y.copy(g).normalize(),T.push(y.x,y.y,y.z),M.push(z+b,1-w),R.push(m++)}v.push(R)}for(let _=0;_<s;_++)for(let R=0;R<i;R++){const w=v[_][R+1],b=v[_][R],I=v[_+1][R],z=v[_+1][R+1];(_!==0||f>0)&&x.push(w,b,z),(_!==s-1||p<Math.PI)&&x.push(b,I,z)}this.setIndex(x),this.setAttribute("position",new Ge(E,3)),this.setAttribute("normal",new Ge(T,3)),this.setAttribute("uv",new Ge(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ua(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Wm extends pn{constructor(t=1,i=.4,s=12,l=48,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:i,radialSegments:s,tubularSegments:l,arc:u},s=Math.floor(s),l=Math.floor(l);const f=[],d=[],p=[],m=[],v=new H,g=new H,y=new H;for(let x=0;x<=s;x++)for(let E=0;E<=l;E++){const T=E/l*u,M=x/s*Math.PI*2;g.x=(t+i*Math.cos(M))*Math.cos(T),g.y=(t+i*Math.cos(M))*Math.sin(T),g.z=i*Math.sin(M),d.push(g.x,g.y,g.z),v.x=t*Math.cos(T),v.y=t*Math.sin(T),y.subVectors(g,v).normalize(),p.push(y.x,y.y,y.z),m.push(E/l),m.push(x/s)}for(let x=1;x<=s;x++)for(let E=1;E<=l;E++){const T=(l+1)*x+E-1,M=(l+1)*(x-1)+E-1,_=(l+1)*(x-1)+E,R=(l+1)*x+E;f.push(T,M,R),f.push(M,_,R)}this.setIndex(f),this.setAttribute("position",new Ge(d,3)),this.setAttribute("normal",new Ge(p,3)),this.setAttribute("uv",new Ge(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wm(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class df extends pn{constructor(t=new vS(new H(-1,-1,0),new H(-1,1,0),new H(1,1,0)),i=64,s=1,l=8,u=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:i,radius:s,radialSegments:l,closed:u};const f=t.computeFrenetFrames(i,u);this.tangents=f.tangents,this.normals=f.normals,this.binormals=f.binormals;const d=new H,p=new H,m=new zt;let v=new H;const g=[],y=[],x=[],E=[];T(),this.setIndex(E),this.setAttribute("position",new Ge(g,3)),this.setAttribute("normal",new Ge(y,3)),this.setAttribute("uv",new Ge(x,2));function T(){for(let w=0;w<i;w++)M(w);M(u===!1?i:0),R(),_()}function M(w){v=t.getPointAt(w/i,v);const b=f.normals[w],I=f.binormals[w];for(let z=0;z<=l;z++){const P=z/l*Math.PI*2,O=Math.sin(P),U=-Math.cos(P);p.x=U*b.x+O*I.x,p.y=U*b.y+O*I.y,p.z=U*b.z+O*I.z,p.normalize(),y.push(p.x,p.y,p.z),d.x=v.x+s*p.x,d.y=v.y+s*p.y,d.z=v.z+s*p.z,g.push(d.x,d.y,d.z)}}function _(){for(let w=1;w<=i;w++)for(let b=1;b<=l;b++){const I=(l+1)*(w-1)+(b-1),z=(l+1)*w+(b-1),P=(l+1)*w+b,O=(l+1)*(w-1)+b;E.push(I,z,O),E.push(z,P,O)}}function R(){for(let w=0;w<=i;w++)for(let b=0;b<=l;b++)m.x=w/i,m.y=b/l,x.push(m.x,m.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new df(new ff[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Xb extends nn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class po extends ur{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new oe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new oe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$x,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class qb extends ur{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=oT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Yb extends ur{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class jm extends Mn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new oe(t),this.intensity=i}dispose(){}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class Wb extends jm{constructor(t,i,s){super(t,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new oe(i)}copy(t,i){return super.copy(t,i),this.groundColor.copy(t.groundColor),this}}const Tp=new He,tx=new H,ex=new H;class ES{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.mapType=qi,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fm,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;tx.setFromMatrixPosition(t.matrixWorld),i.position.copy(tx),ex.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(ex),i.updateMatrixWorld(),Tp.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tp,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Tp)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const nx=new He,Cl=new H,bp=new H;class jb extends ES{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new zt(4,2),this._viewportCount=6,this._viewports=[new Qe(2,1,1,1),new Qe(0,1,1,1),new Qe(3,1,1,1),new Qe(1,1,1,1),new Qe(3,0,1,1),new Qe(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(t,i=0){const s=this.camera,l=this.matrix,u=t.distance||s.far;u!==s.far&&(s.far=u,s.updateProjectionMatrix()),Cl.setFromMatrixPosition(t.matrixWorld),s.position.copy(Cl),bp.copy(s.position),bp.add(this._cubeDirections[i]),s.up.copy(this._cubeUps[i]),s.lookAt(bp),s.updateMatrixWorld(),l.makeTranslation(-Cl.x,-Cl.y,-Cl.z),nx.multiplyMatrices(s.projectionMatrix,s.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nx,s.coordinateSystem,s.reversedDepth)}}class ix extends jm{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new jb}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Zm extends lS{constructor(t=-1,i=1,s=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,f=s+t,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=m*this.view.offsetX,f=u+m*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Zb extends ES{constructor(){super(new Zm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ax extends jm{constructor(t,i){super(t,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new Zb}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Qb extends si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class TS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function sx(r,t,i,s){const l=Kb(s);switch(i){case Qx:return r*t;case Nm:return r*t/l.components*l.byteLength;case Lm:return r*t/l.components*l.byteLength;case Jx:return r*t*2/l.components*l.byteLength;case Om:return r*t*2/l.components*l.byteLength;case Kx:return r*t*3/l.components*l.byteLength;case ki:return r*t*4/l.components*l.byteLength;case Pm:return r*t*4/l.components*l.byteLength;case Kc:case Jc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case $c:case tf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case qp:case Wp:return Math.max(r,16)*Math.max(t,8)/4;case Xp:case Yp:return Math.max(r,8)*Math.max(t,8)/2;case jp:case Zp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Qp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Kp:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Jp:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case $p:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case tm:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case em:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case nm:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case im:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case am:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case sm:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case rm:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case om:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case lm:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case um:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case cm:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case fm:case hm:case dm:return Math.ceil(r/4)*Math.ceil(t/4)*16;case pm:case mm:return Math.ceil(r/4)*Math.ceil(t/4)*8;case gm:case vm:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Kb(r){switch(r){case qi:case Yx:return{byteLength:1,components:1};case Bl:case Wx:case Xi:return{byteLength:2,components:1};case Dm:case Um:return{byteLength:2,components:4};case ir:case Rm:case oa:return{byteLength:4,components:1};case jx:case Zx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wm}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function bS(){let r=null,t=!1,i=null,s=null;function l(u,f){i(u,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){r=u}}}function Jb(r){const t=new WeakMap;function i(d,p){const m=d.array,v=d.usage,g=m.byteLength,y=r.createBuffer();r.bindBuffer(p,y),r.bufferData(p,m,v),d.onUploadCallback();let x;if(m instanceof Float32Array)x=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)x=r.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?x=r.HALF_FLOAT:x=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)x=r.SHORT;else if(m instanceof Uint32Array)x=r.UNSIGNED_INT;else if(m instanceof Int32Array)x=r.INT;else if(m instanceof Int8Array)x=r.BYTE;else if(m instanceof Uint8Array)x=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)x=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:y,type:x,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,p,m){const v=p.array,g=p.updateRanges;if(r.bindBuffer(m,d),g.length===0)r.bufferSubData(m,0,v);else{g.sort((x,E)=>x.start-E.start);let y=0;for(let x=1;x<g.length;x++){const E=g[y],T=g[x];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++y,g[y]=T)}g.length=y+1;for(let x=0,E=g.length;x<E;x++){const T=g[x];r.bufferSubData(m,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=t.get(d);p&&(r.deleteBuffer(p.buffer),t.delete(d))}function f(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=t.get(d);if(m===void 0)t.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:u,update:f}}var $b=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,tA=`#ifdef USE_ALPHAHASH
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
#endif`,eA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,aA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sA=`#ifdef USE_AOMAP
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
#endif`,rA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oA=`#ifdef USE_BATCHING
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
#endif`,lA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,uA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,fA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hA=`#ifdef USE_IRIDESCENCE
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
#endif`,dA=`#ifdef USE_BUMPMAP
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
#endif`,pA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_A=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,yA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,xA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,SA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,MA=`#define PI 3.141592653589793
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
} // validated`,EA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TA=`vec3 transformedNormal = objectNormal;
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
#endif`,bA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wA=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RA="gl_FragColor = linearToOutputTexel( gl_FragColor );",DA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,UA=`#ifdef USE_ENVMAP
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
#endif`,NA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,LA=`#ifdef USE_ENVMAP
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
#endif`,OA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PA=`#ifdef USE_ENVMAP
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
#endif`,zA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,BA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,FA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HA=`#ifdef USE_GRADIENTMAP
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
}`,GA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,XA=`uniform bool receiveShadow;
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
#endif`,qA=`#ifdef USE_ENVMAP
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
#endif`,YA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ZA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,QA=`PhysicalMaterial material;
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
#endif`,KA=`struct PhysicalMaterial {
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
}`,JA=`
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
#endif`,$A=`#if defined( RE_IndirectDiffuse )
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
#endif`,t2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,e2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,n2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,i2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,s2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,r2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,o2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,l2=`#if defined( USE_POINTS_UV )
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
#endif`,u2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,c2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,f2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,h2=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,d2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,p2=`#ifdef USE_MORPHTARGETS
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
#endif`,m2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,g2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,v2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,_2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,y2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,x2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,S2=`#ifdef USE_NORMALMAP
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
#endif`,M2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,T2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,b2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,A2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,w2=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,C2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,R2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,D2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,U2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,N2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,L2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,P2=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,z2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,I2=`float getShadowMask() {
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
}`,B2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,F2=`#ifdef USE_SKINNING
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
#endif`,H2=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,G2=`#ifdef USE_SKINNING
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
#endif`,V2=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,k2=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,X2=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,q2=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Y2=`#ifdef USE_TRANSMISSION
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
#endif`,W2=`#ifdef USE_TRANSMISSION
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
#endif`,j2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Z2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Q2=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,K2=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const J2=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$2=`uniform sampler2D t2D;
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
}`,tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ew=`#ifdef ENVMAP_TYPE_CUBE
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
}`,nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aw=`#include <common>
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
}`,sw=`#if DEPTH_PACKING == 3200
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
}`,rw=`#define DISTANCE
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
}`,ow=`#define DISTANCE
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
}`,lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cw=`uniform float scale;
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
}`,fw=`uniform vec3 diffuse;
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
}`,hw=`#include <common>
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
}`,dw=`uniform vec3 diffuse;
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
}`,pw=`#define LAMBERT
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
}`,mw=`#define LAMBERT
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
}`,gw=`#define MATCAP
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
}`,vw=`#define MATCAP
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
}`,_w=`#define NORMAL
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
}`,yw=`#define NORMAL
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
}`,xw=`#define PHONG
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
}`,Sw=`#define PHONG
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
}`,Mw=`#define STANDARD
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
}`,Ew=`#define STANDARD
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
}`,Tw=`#define TOON
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
}`,bw=`#define TOON
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
}`,Aw=`uniform float size;
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
}`,ww=`uniform vec3 diffuse;
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
}`,Cw=`#include <common>
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
}`,Rw=`uniform vec3 color;
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
}`,Dw=`uniform float rotation;
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
}`,Uw=`uniform vec3 diffuse;
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
}`,Me={alphahash_fragment:$b,alphahash_pars_fragment:tA,alphamap_fragment:eA,alphamap_pars_fragment:nA,alphatest_fragment:iA,alphatest_pars_fragment:aA,aomap_fragment:sA,aomap_pars_fragment:rA,batching_pars_vertex:oA,batching_vertex:lA,begin_vertex:uA,beginnormal_vertex:cA,bsdfs:fA,iridescence_fragment:hA,bumpmap_pars_fragment:dA,clipping_planes_fragment:pA,clipping_planes_pars_fragment:mA,clipping_planes_pars_vertex:gA,clipping_planes_vertex:vA,color_fragment:_A,color_pars_fragment:yA,color_pars_vertex:xA,color_vertex:SA,common:MA,cube_uv_reflection_fragment:EA,defaultnormal_vertex:TA,displacementmap_pars_vertex:bA,displacementmap_vertex:AA,emissivemap_fragment:wA,emissivemap_pars_fragment:CA,colorspace_fragment:RA,colorspace_pars_fragment:DA,envmap_fragment:UA,envmap_common_pars_fragment:NA,envmap_pars_fragment:LA,envmap_pars_vertex:OA,envmap_physical_pars_fragment:qA,envmap_vertex:PA,fog_vertex:zA,fog_pars_vertex:IA,fog_fragment:BA,fog_pars_fragment:FA,gradientmap_pars_fragment:HA,lightmap_pars_fragment:GA,lights_lambert_fragment:VA,lights_lambert_pars_fragment:kA,lights_pars_begin:XA,lights_toon_fragment:YA,lights_toon_pars_fragment:WA,lights_phong_fragment:jA,lights_phong_pars_fragment:ZA,lights_physical_fragment:QA,lights_physical_pars_fragment:KA,lights_fragment_begin:JA,lights_fragment_maps:$A,lights_fragment_end:t2,logdepthbuf_fragment:e2,logdepthbuf_pars_fragment:n2,logdepthbuf_pars_vertex:i2,logdepthbuf_vertex:a2,map_fragment:s2,map_pars_fragment:r2,map_particle_fragment:o2,map_particle_pars_fragment:l2,metalnessmap_fragment:u2,metalnessmap_pars_fragment:c2,morphinstance_vertex:f2,morphcolor_vertex:h2,morphnormal_vertex:d2,morphtarget_pars_vertex:p2,morphtarget_vertex:m2,normal_fragment_begin:g2,normal_fragment_maps:v2,normal_pars_fragment:_2,normal_pars_vertex:y2,normal_vertex:x2,normalmap_pars_fragment:S2,clearcoat_normal_fragment_begin:M2,clearcoat_normal_fragment_maps:E2,clearcoat_pars_fragment:T2,iridescence_pars_fragment:b2,opaque_fragment:A2,packing:w2,premultiplied_alpha_fragment:C2,project_vertex:R2,dithering_fragment:D2,dithering_pars_fragment:U2,roughnessmap_fragment:N2,roughnessmap_pars_fragment:L2,shadowmap_pars_fragment:O2,shadowmap_pars_vertex:P2,shadowmap_vertex:z2,shadowmask_pars_fragment:I2,skinbase_vertex:B2,skinning_pars_vertex:F2,skinning_vertex:H2,skinnormal_vertex:G2,specularmap_fragment:V2,specularmap_pars_fragment:k2,tonemapping_fragment:X2,tonemapping_pars_fragment:q2,transmission_fragment:Y2,transmission_pars_fragment:W2,uv_pars_fragment:j2,uv_pars_vertex:Z2,uv_vertex:Q2,worldpos_vertex:K2,background_vert:J2,background_frag:$2,backgroundCube_vert:tw,backgroundCube_frag:ew,cube_vert:nw,cube_frag:iw,depth_vert:aw,depth_frag:sw,distanceRGBA_vert:rw,distanceRGBA_frag:ow,equirect_vert:lw,equirect_frag:uw,linedashed_vert:cw,linedashed_frag:fw,meshbasic_vert:hw,meshbasic_frag:dw,meshlambert_vert:pw,meshlambert_frag:mw,meshmatcap_vert:gw,meshmatcap_frag:vw,meshnormal_vert:_w,meshnormal_frag:yw,meshphong_vert:xw,meshphong_frag:Sw,meshphysical_vert:Mw,meshphysical_frag:Ew,meshtoon_vert:Tw,meshtoon_frag:bw,points_vert:Aw,points_frag:ww,shadow_vert:Cw,shadow_frag:Rw,sprite_vert:Dw,sprite_frag:Uw},jt={common:{diffuse:{value:new oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _e}},envmap:{envMap:{value:null},envMapRotation:{value:new _e},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _e}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _e}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _e},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _e},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _e},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _e}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _e}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _e}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0},uvTransform:{value:new _e}},sprite:{diffuse:{value:new oe(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _e},alphaMap:{value:null},alphaMapTransform:{value:new _e},alphaTest:{value:0}}},sa={basic:{uniforms:$n([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.fog]),vertexShader:Me.meshbasic_vert,fragmentShader:Me.meshbasic_frag},lambert:{uniforms:$n([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new oe(0)}}]),vertexShader:Me.meshlambert_vert,fragmentShader:Me.meshlambert_frag},phong:{uniforms:$n([jt.common,jt.specularmap,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,jt.lights,{emissive:{value:new oe(0)},specular:{value:new oe(1118481)},shininess:{value:30}}]),vertexShader:Me.meshphong_vert,fragmentShader:Me.meshphong_frag},standard:{uniforms:$n([jt.common,jt.envmap,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.roughnessmap,jt.metalnessmap,jt.fog,jt.lights,{emissive:{value:new oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag},toon:{uniforms:$n([jt.common,jt.aomap,jt.lightmap,jt.emissivemap,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.gradientmap,jt.fog,jt.lights,{emissive:{value:new oe(0)}}]),vertexShader:Me.meshtoon_vert,fragmentShader:Me.meshtoon_frag},matcap:{uniforms:$n([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,jt.fog,{matcap:{value:null}}]),vertexShader:Me.meshmatcap_vert,fragmentShader:Me.meshmatcap_frag},points:{uniforms:$n([jt.points,jt.fog]),vertexShader:Me.points_vert,fragmentShader:Me.points_frag},dashed:{uniforms:$n([jt.common,jt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Me.linedashed_vert,fragmentShader:Me.linedashed_frag},depth:{uniforms:$n([jt.common,jt.displacementmap]),vertexShader:Me.depth_vert,fragmentShader:Me.depth_frag},normal:{uniforms:$n([jt.common,jt.bumpmap,jt.normalmap,jt.displacementmap,{opacity:{value:1}}]),vertexShader:Me.meshnormal_vert,fragmentShader:Me.meshnormal_frag},sprite:{uniforms:$n([jt.sprite,jt.fog]),vertexShader:Me.sprite_vert,fragmentShader:Me.sprite_frag},background:{uniforms:{uvTransform:{value:new _e},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Me.background_vert,fragmentShader:Me.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _e}},vertexShader:Me.backgroundCube_vert,fragmentShader:Me.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Me.cube_vert,fragmentShader:Me.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Me.equirect_vert,fragmentShader:Me.equirect_frag},distanceRGBA:{uniforms:$n([jt.common,jt.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Me.distanceRGBA_vert,fragmentShader:Me.distanceRGBA_frag},shadow:{uniforms:$n([jt.lights,jt.fog,{color:{value:new oe(0)},opacity:{value:1}}]),vertexShader:Me.shadow_vert,fragmentShader:Me.shadow_frag}};sa.physical={uniforms:$n([sa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _e},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _e},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _e},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _e},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _e},sheen:{value:0},sheenColor:{value:new oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _e},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _e},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _e},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _e},attenuationDistance:{value:0},attenuationColor:{value:new oe(0)},specularColor:{value:new oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _e},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _e},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _e}}]),vertexShader:Me.meshphysical_vert,fragmentShader:Me.meshphysical_frag};const qc={r:0,b:0,g:0},js=new ri,Nw=new He;function Lw(r,t,i,s,l,u,f){const d=new oe(0);let p=u===!0?0:1,m,v,g=null,y=0,x=null;function E(w){let b=w.isScene===!0?w.background:null;return b&&b.isTexture&&(b=(w.backgroundBlurriness>0?i:t).get(b)),b}function T(w){let b=!1;const I=E(w);I===null?_(d,p):I&&I.isColor&&(_(I,1),b=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,f):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||b)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(w,b){const I=E(b);I&&(I.isCubeTexture||I.mapping===mf)?(v===void 0&&(v=new sn(new Ao(1,1,1),new nn({name:"BackgroundCubeMaterial",uniforms:Mo(sa.backgroundCube.uniforms),vertexShader:sa.backgroundCube.vertexShader,fragmentShader:sa.backgroundCube.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(z,P,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),js.copy(b.backgroundRotation),js.x*=-1,js.y*=-1,js.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),v.material.uniforms.envMap.value=I,v.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(Nw.makeRotationFromEuler(js)),v.material.toneMapped=Le.getTransfer(I.colorSpace)!==We,(g!==I||y!==I.version||x!==r.toneMapping)&&(v.material.needsUpdate=!0,g=I,y=I.version,x=r.toneMapping),v.layers.enableAll(),w.unshift(v,v.geometry,v.material,0,0,null)):I&&I.isTexture&&(m===void 0&&(m=new sn(new Ia(2,2),new nn({name:"BackgroundMaterial",uniforms:Mo(sa.background.uniforms),vertexShader:sa.background.vertexShader,fragmentShader:sa.background.fragmentShader,side:ys,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=I,m.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,m.material.toneMapped=Le.getTransfer(I.colorSpace)!==We,I.matrixAutoUpdate===!0&&I.updateMatrix(),m.material.uniforms.uvTransform.value.copy(I.matrix),(g!==I||y!==I.version||x!==r.toneMapping)&&(m.material.needsUpdate=!0,g=I,y=I.version,x=r.toneMapping),m.layers.enableAll(),w.unshift(m,m.geometry,m.material,0,0,null))}function _(w,b){w.getRGB(qc,oS(r)),s.buffers.color.setClear(qc.r,qc.g,qc.b,b,f)}function R(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(w,b=1){d.set(w),p=b,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,_(d,p)},render:T,addToRenderList:M,dispose:R}}function Ow(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=y(null);let u=l,f=!1;function d(A,V,Y,Q,pt){let K=!1;const W=g(Q,Y,V);u!==W&&(u=W,m(u.object)),K=x(A,Q,Y,pt),K&&E(A,Q,Y,pt),pt!==null&&t.update(pt,r.ELEMENT_ARRAY_BUFFER),(K||f)&&(f=!1,b(A,V,Y,Q),pt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(pt).buffer))}function p(){return r.createVertexArray()}function m(A){return r.bindVertexArray(A)}function v(A){return r.deleteVertexArray(A)}function g(A,V,Y){const Q=Y.wireframe===!0;let pt=s[A.id];pt===void 0&&(pt={},s[A.id]=pt);let K=pt[V.id];K===void 0&&(K={},pt[V.id]=K);let W=K[Q];return W===void 0&&(W=y(p()),K[Q]=W),W}function y(A){const V=[],Y=[],Q=[];for(let pt=0;pt<i;pt++)V[pt]=0,Y[pt]=0,Q[pt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Y,attributeDivisors:Q,object:A,attributes:{},index:null}}function x(A,V,Y,Q){const pt=u.attributes,K=V.attributes;let W=0;const N=Y.getAttributes();for(const B in N)if(N[B].location>=0){const ht=pt[B];let Rt=K[B];if(Rt===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(Rt=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(Rt=A.instanceColor)),ht===void 0||ht.attribute!==Rt||Rt&&ht.data!==Rt.data)return!0;W++}return u.attributesNum!==W||u.index!==Q}function E(A,V,Y,Q){const pt={},K=V.attributes;let W=0;const N=Y.getAttributes();for(const B in N)if(N[B].location>=0){let ht=K[B];ht===void 0&&(B==="instanceMatrix"&&A.instanceMatrix&&(ht=A.instanceMatrix),B==="instanceColor"&&A.instanceColor&&(ht=A.instanceColor));const Rt={};Rt.attribute=ht,ht&&ht.data&&(Rt.data=ht.data),pt[B]=Rt,W++}u.attributes=pt,u.attributesNum=W,u.index=Q}function T(){const A=u.newAttributes;for(let V=0,Y=A.length;V<Y;V++)A[V]=0}function M(A){_(A,0)}function _(A,V){const Y=u.newAttributes,Q=u.enabledAttributes,pt=u.attributeDivisors;Y[A]=1,Q[A]===0&&(r.enableVertexAttribArray(A),Q[A]=1),pt[A]!==V&&(r.vertexAttribDivisor(A,V),pt[A]=V)}function R(){const A=u.newAttributes,V=u.enabledAttributes;for(let Y=0,Q=V.length;Y<Q;Y++)V[Y]!==A[Y]&&(r.disableVertexAttribArray(Y),V[Y]=0)}function w(A,V,Y,Q,pt,K,W){W===!0?r.vertexAttribIPointer(A,V,Y,pt,K):r.vertexAttribPointer(A,V,Y,Q,pt,K)}function b(A,V,Y,Q){T();const pt=Q.attributes,K=Y.getAttributes(),W=V.defaultAttributeValues;for(const N in K){const B=K[N];if(B.location>=0){let $=pt[N];if($===void 0&&(N==="instanceMatrix"&&A.instanceMatrix&&($=A.instanceMatrix),N==="instanceColor"&&A.instanceColor&&($=A.instanceColor)),$!==void 0){const ht=$.normalized,Rt=$.itemSize,Gt=t.get($);if(Gt===void 0)continue;const ne=Gt.buffer,q=Gt.type,J=Gt.bytesPerElement,tt=q===r.INT||q===r.UNSIGNED_INT||$.gpuType===Rm;if($.isInterleavedBufferAttribute){const k=$.data,ft=k.stride,xt=$.offset;if(k.isInstancedInterleavedBuffer){for(let Mt=0;Mt<B.locationSize;Mt++)_(B.location+Mt,k.meshPerAttribute);A.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Mt=0;Mt<B.locationSize;Mt++)M(B.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,ne);for(let Mt=0;Mt<B.locationSize;Mt++)w(B.location+Mt,Rt/B.locationSize,q,ht,ft*J,(xt+Rt/B.locationSize*Mt)*J,tt)}else{if($.isInstancedBufferAttribute){for(let k=0;k<B.locationSize;k++)_(B.location+k,$.meshPerAttribute);A.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let k=0;k<B.locationSize;k++)M(B.location+k);r.bindBuffer(r.ARRAY_BUFFER,ne);for(let k=0;k<B.locationSize;k++)w(B.location+k,Rt/B.locationSize,q,ht,Rt*J,Rt/B.locationSize*k*J,tt)}}else if(W!==void 0){const ht=W[N];if(ht!==void 0)switch(ht.length){case 2:r.vertexAttrib2fv(B.location,ht);break;case 3:r.vertexAttrib3fv(B.location,ht);break;case 4:r.vertexAttrib4fv(B.location,ht);break;default:r.vertexAttrib1fv(B.location,ht)}}}}R()}function I(){O();for(const A in s){const V=s[A];for(const Y in V){const Q=V[Y];for(const pt in Q)v(Q[pt].object),delete Q[pt];delete V[Y]}delete s[A]}}function z(A){if(s[A.id]===void 0)return;const V=s[A.id];for(const Y in V){const Q=V[Y];for(const pt in Q)v(Q[pt].object),delete Q[pt];delete V[Y]}delete s[A.id]}function P(A){for(const V in s){const Y=s[V];if(Y[A.id]===void 0)continue;const Q=Y[A.id];for(const pt in Q)v(Q[pt].object),delete Q[pt];delete Y[A.id]}}function O(){U(),f=!0,u!==l&&(u=l,m(u.object))}function U(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:U,dispose:I,releaseStatesOfGeometry:z,releaseStatesOfProgram:P,initAttributes:T,enableAttribute:M,disableUnusedAttributes:R}}function Pw(r,t,i){let s;function l(m){s=m}function u(m,v){r.drawArrays(s,m,v),i.update(v,s,1)}function f(m,v,g){g!==0&&(r.drawArraysInstanced(s,m,v,g),i.update(v,s,g))}function d(m,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,v,0,g);let x=0;for(let E=0;E<g;E++)x+=v[E];i.update(x,s,1)}function p(m,v,g,y){if(g===0)return;const x=t.get("WEBGL_multi_draw");if(x===null)for(let E=0;E<m.length;E++)f(m[E],v[E],y[E]);else{x.multiDrawArraysInstancedWEBGL(s,m,0,v,0,y,0,g);let E=0;for(let T=0;T<g;T++)E+=v[T]*y[T];i.update(E,s,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function zw(r,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(P){return!(P!==ki&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(P){const O=P===Xi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==qi&&s.convert(P)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==oa&&!O)}function p(P){if(P==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const v=p(m);v!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const g=i.logarithmicDepthBuffer===!0,y=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),x=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),R=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),b=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=E>0,z=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:p,textureFormatReadable:f,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:g,reversedDepthBuffer:y,maxTextures:x,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:R,maxVaryings:w,maxFragmentUniforms:b,vertexTextures:I,maxSamples:z}}function Iw(r){const t=this;let i=null,s=0,l=!1,u=!1;const f=new Qs,d=new _e,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,y){const x=g.length!==0||y||s!==0||l;return l=y,s=g.length,x},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,y){i=v(g,y,0)},this.setState=function(g,y,x){const E=g.clippingPlanes,T=g.clipIntersection,M=g.clipShadows,_=r.get(g);if(!l||E===null||E.length===0||u&&!M)u?v(null):m();else{const R=u?0:s,w=R*4;let b=_.clippingState||null;p.value=b,b=v(E,y,w,x);for(let I=0;I!==w;++I)b[I]=i[I];_.clippingState=b,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=R}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(g,y,x,E){const T=g!==null?g.length:0;let M=null;if(T!==0){if(M=p.value,E!==!0||M===null){const _=x+T*4,R=y.matrixWorldInverse;d.getNormalMatrix(R),(M===null||M.length<_)&&(M=new Float32Array(_));for(let w=0,b=x;w!==T;++w,b+=4)f.copy(g[w]).applyMatrix4(R,d),f.normal.toArray(M,b),M[b+3]=f.constant}p.value=M,p.needsUpdate=!0}return t.numPlanes=T,t.numIntersection=0,M}}function Bw(r){let t=new WeakMap;function i(f,d){return d===sf?f.mapping=yo:d===Gp&&(f.mapping=xo),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===sf||d===Gp)if(t.has(f)){const p=t.get(f).texture;return i(p,f.mapping)}else{const p=f.image;if(p&&p.height>0){const m=new nb(p.height);return m.fromEquirectangularTexture(r,f),t.set(f,m),f.addEventListener("dispose",l),i(m.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const p=t.get(d);p!==void 0&&(t.delete(d),p.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const mo=4,rx=[.125,.215,.35,.446,.526,.582],$s=20,Ap=new Zm,ox=new oe;let wp=null,Cp=0,Rp=0,Dp=!1;const Ks=(1+Math.sqrt(5))/2,co=1/Ks,lx=[new H(-Ks,co,0),new H(Ks,co,0),new H(-co,0,Ks),new H(co,0,Ks),new H(0,Ks,-co),new H(0,Ks,co),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)],Fw=new H;class Mm{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,s=.1,l=100,u={}){const{size:f=256,position:d=Fw}=u;wp=this._renderer.getRenderTarget(),Cp=this._renderer.getActiveCubeFace(),Rp=this._renderer.getActiveMipmapLevel(),Dp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(wp,Cp,Rp),this._renderer.xr.enabled=Dp,t.scissorTest=!1,Yc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===yo||t.mapping===xo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),wp=this._renderer.getRenderTarget(),Cp=this._renderer.getActiveCubeFace(),Rp=this._renderer.getActiveMipmapLevel(),Dp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:ra,minFilter:ra,generateMipmaps:!1,type:Xi,format:ki,colorSpace:So,depthBuffer:!1},l=ux(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ux(t,i,s);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Hw(u)),this._blurMaterial=Gw(u,t,i)}return l}_compileMaterial(t){const i=new sn(this._lodPlanes[0],t);this._renderer.compile(i,Ap)}_sceneToCubeUV(t,i,s,l,u){const p=new si(90,1,i,s),m=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,y=g.autoClear,x=g.toneMapping;g.getClearColor(ox),g.toneMapping=Pa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null));const T=new ar({name:"PMREM.Background",side:qn,depthWrite:!1,depthTest:!1}),M=new sn(new Ao,T);let _=!1;const R=t.background;R?R.isColor&&(T.color.copy(R),t.background=null,_=!0):(T.color.copy(ox),_=!0);for(let w=0;w<6;w++){const b=w%3;b===0?(p.up.set(0,m[w],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x+v[w],u.y,u.z)):b===1?(p.up.set(0,0,m[w]),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y+v[w],u.z)):(p.up.set(0,m[w],0),p.position.set(u.x,u.y,u.z),p.lookAt(u.x,u.y,u.z+v[w]));const I=this._cubeSize;Yc(l,b*I,w>2?I:0,I,I),g.setRenderTarget(l),_&&g.render(M,p),g.render(t,p)}M.geometry.dispose(),M.material.dispose(),g.toneMapping=x,g.autoClear=y,t.background=R}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===yo||t.mapping===xo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=fx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cx());const u=l?this._cubemapMaterial:this._equirectMaterial,f=new sn(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const p=this._cubeSize;Yc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(f,Ap)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const f=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=lx[(l-u-1)%lx.length];this._blur(t,u-1,u,f,d)}i.autoClear=s}_blur(t,i,s,l,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",u),this._halfBlur(f,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,f,d){const p=this._renderer,m=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new sn(this._lodPlanes[l],m),y=m.uniforms,x=this._sizeLods[s]-1,E=isFinite(u)?Math.PI/(2*x):2*Math.PI/(2*$s-1),T=u/E,M=isFinite(u)?1+Math.floor(v*T):$s;M>$s&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${$s}`);const _=[];let R=0;for(let P=0;P<$s;++P){const O=P/T,U=Math.exp(-O*O/2);_.push(U),P===0?R+=U:P<M&&(R+=2*U)}for(let P=0;P<_.length;P++)_[P]=_[P]/R;y.envMap.value=t.texture,y.samples.value=M,y.weights.value=_,y.latitudinal.value=f==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:w}=this;y.dTheta.value=E,y.mipInt.value=w-s;const b=this._sizeLods[l],I=3*b*(l>w-mo?l-w+mo:0),z=4*(this._cubeSize-b);Yc(i,I,z,3*b,2*b),p.setRenderTarget(i),p.render(g,Ap)}}function Hw(r){const t=[],i=[],s=[];let l=r;const u=r-mo+1+rx.length;for(let f=0;f<u;f++){const d=Math.pow(2,l);i.push(d);let p=1/d;f>r-mo?p=rx[f-r+mo-1]:f===0&&(p=0),s.push(p);const m=1/(d-2),v=-m,g=1+m,y=[v,v,g,v,g,g,v,v,g,g,v,g],x=6,E=6,T=3,M=2,_=1,R=new Float32Array(T*E*x),w=new Float32Array(M*E*x),b=new Float32Array(_*E*x);for(let z=0;z<x;z++){const P=z%3*2/3-1,O=z>2?0:-1,U=[P,O,0,P+2/3,O,0,P+2/3,O+1,0,P,O,0,P+2/3,O+1,0,P,O+1,0];R.set(U,T*E*z),w.set(y,M*E*z);const A=[z,z,z,z,z,z];b.set(A,_*E*z)}const I=new pn;I.setAttribute("position",new hn(R,T)),I.setAttribute("uv",new hn(w,M)),I.setAttribute("faceIndex",new hn(b,_)),t.push(I),l>mo&&l--}return{lodPlanes:t,sizeLods:i,sigmas:s}}function ux(r,t,i){const s=new Ni(r,t,i);return s.texture.mapping=mf,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Yc(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function Gw(r,t,i){const s=new Float32Array($s),l=new H(0,1,0);return new nn({name:"SphericalGaussianBlur",defines:{n:$s,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Qm(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function cx(){return new nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qm(),fragmentShader:`

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
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function fx(){return new nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oa,depthTest:!1,depthWrite:!1})}function Qm(){return`

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
	`}function Vw(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===sf||p===Gp,v=p===yo||p===xo;if(m||v){let g=t.get(d);const y=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return i===null&&(i=new Mm(r)),g=m?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const x=d.image;return m&&x&&x.height>0||v&&x&&l(x)?(i===null&&(i=new Mm(r)),g=m?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function l(d){let p=0;const m=6;for(let v=0;v<m;v++)d[v]!==void 0&&p++;return p===m}function u(d){const p=d.target;p.removeEventListener("dispose",u);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function kw(r){const t={};function i(s){if(t[s]!==void 0)return t[s];let l;switch(s){case"WEBGL_depth_texture":l=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=r.getExtension(s)}return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&kl("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function Xw(r,t,i,s){const l={},u=new WeakMap;function f(g){const y=g.target;y.index!==null&&t.remove(y.index);for(const E in y.attributes)t.remove(y.attributes[E]);y.removeEventListener("dispose",f),delete l[y.id];const x=u.get(y);x&&(t.remove(x),u.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,i.memory.geometries--}function d(g,y){return l[y.id]===!0||(y.addEventListener("dispose",f),l[y.id]=!0,i.memory.geometries++),y}function p(g){const y=g.attributes;for(const x in y)t.update(y[x],r.ARRAY_BUFFER)}function m(g){const y=[],x=g.index,E=g.attributes.position;let T=0;if(x!==null){const R=x.array;T=x.version;for(let w=0,b=R.length;w<b;w+=3){const I=R[w+0],z=R[w+1],P=R[w+2];y.push(I,z,z,P,P,I)}}else if(E!==void 0){const R=E.array;T=E.version;for(let w=0,b=R.length/3-1;w<b;w+=3){const I=w+0,z=w+1,P=w+2;y.push(I,z,z,P,P,I)}}else return;const M=new(eS(y)?rS:sS)(y,1);M.version=T;const _=u.get(g);_&&t.remove(_),u.set(g,M)}function v(g){const y=u.get(g);if(y){const x=g.index;x!==null&&y.version<x.version&&m(g)}else m(g);return u.get(g)}return{get:d,update:p,getWireframeAttribute:v}}function qw(r,t,i){let s;function l(y){s=y}let u,f;function d(y){u=y.type,f=y.bytesPerElement}function p(y,x){r.drawElements(s,x,u,y*f),i.update(x,s,1)}function m(y,x,E){E!==0&&(r.drawElementsInstanced(s,x,u,y*f,E),i.update(x,s,E))}function v(y,x,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,x,0,u,y,0,E);let M=0;for(let _=0;_<E;_++)M+=x[_];i.update(M,s,1)}function g(y,x,E,T){if(E===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<y.length;_++)m(y[_]/f,x[_],T[_]);else{M.multiDrawElementsInstancedWEBGL(s,x,0,u,y,0,T,0,E);let _=0;for(let R=0;R<E;R++)_+=x[R]*T[R];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function Yw(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(u/3);break;case r.LINES:i.lines+=d*(u/2);break;case r.LINE_STRIP:i.lines+=d*(u-1);break;case r.LINE_LOOP:i.lines+=d*u;break;case r.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function Ww(r,t,i){const s=new WeakMap,l=new Qe;function u(f,d,p){const m=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let y=s.get(d);if(y===void 0||y.count!==g){let A=function(){O.dispose(),s.delete(d),d.removeEventListener("dispose",A)};var x=A;y!==void 0&&y.texture.dispose();const E=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],R=d.morphAttributes.normal||[],w=d.morphAttributes.color||[];let b=0;E===!0&&(b=1),T===!0&&(b=2),M===!0&&(b=3);let I=d.attributes.position.count*b,z=1;I>t.maxTextureSize&&(z=Math.ceil(I/t.maxTextureSize),I=t.maxTextureSize);const P=new Float32Array(I*z*4*g),O=new nS(P,I,z,g);O.type=oa,O.needsUpdate=!0;const U=b*4;for(let V=0;V<g;V++){const Y=_[V],Q=R[V],pt=w[V],K=I*z*4*V;for(let W=0;W<Y.count;W++){const N=W*U;E===!0&&(l.fromBufferAttribute(Y,W),P[K+N+0]=l.x,P[K+N+1]=l.y,P[K+N+2]=l.z,P[K+N+3]=0),T===!0&&(l.fromBufferAttribute(Q,W),P[K+N+4]=l.x,P[K+N+5]=l.y,P[K+N+6]=l.z,P[K+N+7]=0),M===!0&&(l.fromBufferAttribute(pt,W),P[K+N+8]=l.x,P[K+N+9]=l.y,P[K+N+10]=l.z,P[K+N+11]=pt.itemSize===4?l.w:1)}}y={count:g,texture:O,size:new zt(I,z)},s.set(d,y),d.addEventListener("dispose",A)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let E=0;for(let M=0;M<m.length;M++)E+=m[M];const T=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",T),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",y.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:u}}function jw(r,t,i,s){let l=new WeakMap;function u(p){const m=s.render.frame,v=p.geometry,g=t.get(p,v);if(l.get(g)!==m&&(t.update(g),l.set(g,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const y=p.skeleton;l.get(y)!==m&&(y.update(),l.set(y,m))}return g}function f(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:u,dispose:f}}const AS=new Yn,hx=new hS(1,1),wS=new nS,CS=new HT,RS=new uS,dx=[],px=[],mx=new Float32Array(16),gx=new Float32Array(9),vx=new Float32Array(4);function wo(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let u=dx[l];if(u===void 0&&(u=new Float32Array(l),dx[l]=u),t!==0){s.toArray(u,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(u,d)}return u}function An(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function wn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function vf(r,t){let i=px[t];i===void 0&&(i=new Int32Array(t),px[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function Zw(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function Qw(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(An(i,t))return;r.uniform2fv(this.addr,t),wn(i,t)}}function Kw(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(An(i,t))return;r.uniform3fv(this.addr,t),wn(i,t)}}function Jw(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(An(i,t))return;r.uniform4fv(this.addr,t),wn(i,t)}}function $w(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(An(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),wn(i,t)}else{if(An(i,s))return;vx.set(s),r.uniformMatrix2fv(this.addr,!1,vx),wn(i,s)}}function tC(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(An(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),wn(i,t)}else{if(An(i,s))return;gx.set(s),r.uniformMatrix3fv(this.addr,!1,gx),wn(i,s)}}function eC(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(An(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),wn(i,t)}else{if(An(i,s))return;mx.set(s),r.uniformMatrix4fv(this.addr,!1,mx),wn(i,s)}}function nC(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function iC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(An(i,t))return;r.uniform2iv(this.addr,t),wn(i,t)}}function aC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(An(i,t))return;r.uniform3iv(this.addr,t),wn(i,t)}}function sC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(An(i,t))return;r.uniform4iv(this.addr,t),wn(i,t)}}function rC(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function oC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(An(i,t))return;r.uniform2uiv(this.addr,t),wn(i,t)}}function lC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(An(i,t))return;r.uniform3uiv(this.addr,t),wn(i,t)}}function uC(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(An(i,t))return;r.uniform4uiv(this.addr,t),wn(i,t)}}function cC(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let u;this.type===r.SAMPLER_2D_SHADOW?(hx.compareFunction=tS,u=hx):u=AS,i.setTexture2D(t||u,l)}function fC(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||CS,l)}function hC(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||RS,l)}function dC(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||wS,l)}function pC(r){switch(r){case 5126:return Zw;case 35664:return Qw;case 35665:return Kw;case 35666:return Jw;case 35674:return $w;case 35675:return tC;case 35676:return eC;case 5124:case 35670:return nC;case 35667:case 35671:return iC;case 35668:case 35672:return aC;case 35669:case 35673:return sC;case 5125:return rC;case 36294:return oC;case 36295:return lC;case 36296:return uC;case 35678:case 36198:case 36298:case 36306:case 35682:return cC;case 35679:case 36299:case 36307:return fC;case 35680:case 36300:case 36308:case 36293:return hC;case 36289:case 36303:case 36311:case 36292:return dC}}function mC(r,t){r.uniform1fv(this.addr,t)}function gC(r,t){const i=wo(t,this.size,2);r.uniform2fv(this.addr,i)}function vC(r,t){const i=wo(t,this.size,3);r.uniform3fv(this.addr,i)}function _C(r,t){const i=wo(t,this.size,4);r.uniform4fv(this.addr,i)}function yC(r,t){const i=wo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function xC(r,t){const i=wo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function SC(r,t){const i=wo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function MC(r,t){r.uniform1iv(this.addr,t)}function EC(r,t){r.uniform2iv(this.addr,t)}function TC(r,t){r.uniform3iv(this.addr,t)}function bC(r,t){r.uniform4iv(this.addr,t)}function AC(r,t){r.uniform1uiv(this.addr,t)}function wC(r,t){r.uniform2uiv(this.addr,t)}function CC(r,t){r.uniform3uiv(this.addr,t)}function RC(r,t){r.uniform4uiv(this.addr,t)}function DC(r,t,i){const s=this.cache,l=t.length,u=vf(i,l);An(s,u)||(r.uniform1iv(this.addr,u),wn(s,u));for(let f=0;f!==l;++f)i.setTexture2D(t[f]||AS,u[f])}function UC(r,t,i){const s=this.cache,l=t.length,u=vf(i,l);An(s,u)||(r.uniform1iv(this.addr,u),wn(s,u));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||CS,u[f])}function NC(r,t,i){const s=this.cache,l=t.length,u=vf(i,l);An(s,u)||(r.uniform1iv(this.addr,u),wn(s,u));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||RS,u[f])}function LC(r,t,i){const s=this.cache,l=t.length,u=vf(i,l);An(s,u)||(r.uniform1iv(this.addr,u),wn(s,u));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||wS,u[f])}function OC(r){switch(r){case 5126:return mC;case 35664:return gC;case 35665:return vC;case 35666:return _C;case 35674:return yC;case 35675:return xC;case 35676:return SC;case 5124:case 35670:return MC;case 35667:case 35671:return EC;case 35668:case 35672:return TC;case 35669:case 35673:return bC;case 5125:return AC;case 36294:return wC;case 36295:return CC;case 36296:return RC;case 35678:case 36198:case 36298:case 36306:case 35682:return DC;case 35679:case 36299:case 36307:return UC;case 35680:case 36300:case 36308:case 36293:return NC;case 36289:case 36303:case 36311:case 36292:return LC}}class PC{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=pC(i.type)}}class zC{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=OC(i.type)}}class IC{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const Up=/(\w+)(\])?(\[|\.)?/g;function _x(r,t){r.seq.push(t),r.map[t.id]=t}function BC(r,t,i){const s=r.name,l=s.length;for(Up.lastIndex=0;;){const u=Up.exec(s),f=Up.lastIndex;let d=u[1];const p=u[2]==="]",m=u[3];if(p&&(d=d|0),m===void 0||m==="["&&f+2===l){_x(i,m===void 0?new PC(d,r,t):new zC(d,r,t));break}else{let g=i.map[d];g===void 0&&(g=new IC(d),_x(i,g)),i=g}}}class ef{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const u=t.getActiveUniform(i,l),f=t.getUniformLocation(i,u.name);BC(u,f,this)}}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,f=i.length;u!==f;++u){const d=i[u],p=s[d.id];p.needsUpdate!==!1&&d.setValue(t,p.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function yx(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const FC=37297;let HC=0;function GC(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let f=l;f<u;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const xx=new _e;function VC(r){Le._getMatrix(xx,Le.workingColorSpace,r);const t=`mat3( ${xx.elements.map(i=>i.toFixed(4))} )`;switch(Le.getTransfer(r)){case rf:return[t,"LinearTransferOETF"];case We:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Sx(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),u=(r.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+GC(r.getShaderSource(t),d)}else return u}function kC(r,t){const i=VC(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function XC(r,t){let i;switch(t){case Fx:i="Linear";break;case Hx:i="Reinhard";break;case Gx:i="Cineon";break;case Cm:i="ACESFilmic";break;case kx:i="AgX";break;case Xx:i="Neutral";break;case Vx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Wc=new H;function qC(){Le.getLuminanceCoefficients(Wc);const r=Wc.x.toFixed(4),t=Wc.y.toFixed(4),i=Wc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YC(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Nl).join(`
`)}function WC(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function jC(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=r.getActiveAttrib(t,l),f=u.name;let d=1;u.type===r.FLOAT_MAT2&&(d=2),u.type===r.FLOAT_MAT3&&(d=3),u.type===r.FLOAT_MAT4&&(d=4),i[f]={type:u.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function Nl(r){return r!==""}function Mx(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ex(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const ZC=/^[ \t]*#include +<([\w\d./]+)>/gm;function Em(r){return r.replace(ZC,KC)}const QC=new Map;function KC(r,t){let i=Me[t];if(i===void 0){const s=QC.get(t);if(s!==void 0)i=Me[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Em(i)}const JC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tx(r){return r.replace(JC,$C)}function $C(r,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function bx(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}function tR(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===zx?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ix?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Na&&(t="SHADOWMAP_TYPE_VSM"),t}function eR(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case yo:case xo:t="ENVMAP_TYPE_CUBE";break;case mf:t="ENVMAP_TYPE_CUBE_UV";break}return t}function nR(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case xo:t="ENVMAP_MODE_REFRACTION";break}return t}function iR(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Bx:t="ENVMAP_BLENDING_MULTIPLY";break;case aT:t="ENVMAP_BLENDING_MIX";break;case sT:t="ENVMAP_BLENDING_ADD";break}return t}function aR(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function sR(r,t,i,s){const l=r.getContext(),u=i.defines;let f=i.vertexShader,d=i.fragmentShader;const p=tR(i),m=eR(i),v=nR(i),g=iR(i),y=aR(i),x=YC(i),E=WC(u),T=l.createProgram();let M,_,R=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Nl).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Nl).join(`
`),_.length>0&&(_+=`
`)):(M=[bx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nl).join(`
`),_=[bx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Pa?"#define TONE_MAPPING":"",i.toneMapping!==Pa?Me.tonemapping_pars_fragment:"",i.toneMapping!==Pa?XC("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",Me.colorspace_pars_fragment,kC("linearToOutputTexel",i.outputColorSpace),qC(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Nl).join(`
`)),f=Em(f),f=Mx(f,i),f=Ex(f,i),d=Em(d),d=Mx(d,i),d=Ex(d,i),f=Tx(f),d=Tx(d),i.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,M=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===Sy?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===Sy?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const w=R+M+f,b=R+_+d,I=yx(l,l.VERTEX_SHADER,w),z=yx(l,l.FRAGMENT_SHADER,b);l.attachShader(T,I),l.attachShader(T,z),i.index0AttributeName!==void 0?l.bindAttribLocation(T,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(T,0,"position"),l.linkProgram(T);function P(V){if(r.debug.checkShaderErrors){const Y=l.getProgramInfoLog(T)||"",Q=l.getShaderInfoLog(I)||"",pt=l.getShaderInfoLog(z)||"",K=Y.trim(),W=Q.trim(),N=pt.trim();let B=!0,$=!0;if(l.getProgramParameter(T,l.LINK_STATUS)===!1)if(B=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,T,I,z);else{const ht=Sx(l,I,"vertex"),Rt=Sx(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(T,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+K+`
`+ht+`
`+Rt)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(W===""||N==="")&&($=!1);$&&(V.diagnostics={runnable:B,programLog:K,vertexShader:{log:W,prefix:M},fragmentShader:{log:N,prefix:_}})}l.deleteShader(I),l.deleteShader(z),O=new ef(l,T),U=jC(l,T)}let O;this.getUniforms=function(){return O===void 0&&P(this),O};let U;this.getAttributes=function(){return U===void 0&&P(this),U};let A=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=l.getProgramParameter(T,FC)),A},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(T),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=HC++,this.cacheKey=t,this.usedTimes=1,this.program=T,this.vertexShader=I,this.fragmentShader=z,this}let rR=0;class oR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new lR(t),i.set(t,s)),s}}class lR{constructor(t){this.id=rR++,this.code=t,this.usedTimes=0}}function uR(r,t,i,s,l,u,f){const d=new iS,p=new oR,m=new Set,v=[],g=l.logarithmicDepthBuffer,y=l.vertexTextures;let x=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(U){return m.add(U),U===0?"uv":`uv${U}`}function M(U,A,V,Y,Q){const pt=Y.fog,K=Q.geometry,W=U.isMeshStandardMaterial?Y.environment:null,N=(U.isMeshStandardMaterial?i:t).get(U.envMap||W),B=N&&N.mapping===mf?N.image.height:null,$=E[U.type];U.precision!==null&&(x=l.getMaxPrecision(U.precision),x!==U.precision&&console.warn("THREE.WebGLProgram.getParameters:",U.precision,"not supported, using",x,"instead."));const ht=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Rt=ht!==void 0?ht.length:0;let Gt=0;K.morphAttributes.position!==void 0&&(Gt=1),K.morphAttributes.normal!==void 0&&(Gt=2),K.morphAttributes.color!==void 0&&(Gt=3);let ne,q,J,tt;if($){const Re=sa[$];ne=Re.vertexShader,q=Re.fragmentShader}else ne=U.vertexShader,q=U.fragmentShader,p.update(U),J=p.getVertexShaderID(U),tt=p.getFragmentShaderID(U);const k=r.getRenderTarget(),ft=r.state.buffers.depth.getReversed(),xt=Q.isInstancedMesh===!0,Mt=Q.isBatchedMesh===!0,At=!!U.map,Lt=!!U.matcap,G=!!N,Et=!!U.aoMap,_t=!!U.lightMap,dt=!!U.bumpMap,ut=!!U.normalMap,Ct=!!U.displacementMap,Dt=!!U.emissiveMap,Bt=!!U.metalnessMap,re=!!U.roughnessMap,ue=U.anisotropy>0,F=U.clearcoat>0,C=U.dispersion>0,st=U.iridescence>0,vt=U.sheen>0,Nt=U.transmission>0,St=ue&&!!U.anisotropyMap,Qt=F&&!!U.clearcoatMap,Ft=F&&!!U.clearcoatNormalMap,$t=F&&!!U.clearcoatRoughnessMap,ee=st&&!!U.iridescenceMap,Ot=st&&!!U.iridescenceThicknessMap,yt=vt&&!!U.sheenColorMap,qt=vt&&!!U.sheenRoughnessMap,Jt=!!U.specularMap,Yt=!!U.specularColorMap,ye=!!U.specularIntensityMap,Z=Nt&&!!U.transmissionMap,Ht=Nt&&!!U.thicknessMap,kt=!!U.gradientMap,te=!!U.alphaMap,Pt=U.alphaTest>0,Ut=!!U.alphaHash,se=!!U.extensions;let ve=Pa;U.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ve=r.toneMapping);const je={shaderID:$,shaderType:U.type,shaderName:U.name,vertexShader:ne,fragmentShader:q,defines:U.defines,customVertexShaderID:J,customFragmentShaderID:tt,isRawShaderMaterial:U.isRawShaderMaterial===!0,glslVersion:U.glslVersion,precision:x,batching:Mt,batchingColor:Mt&&Q._colorsTexture!==null,instancing:xt,instancingColor:xt&&Q.instanceColor!==null,instancingMorph:xt&&Q.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:k===null?r.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:So,alphaToCoverage:!!U.alphaToCoverage,map:At,matcap:Lt,envMap:G,envMapMode:G&&N.mapping,envMapCubeUVHeight:B,aoMap:Et,lightMap:_t,bumpMap:dt,normalMap:ut,displacementMap:y&&Ct,emissiveMap:Dt,normalMapObjectSpace:ut&&U.normalMapType===uT,normalMapTangentSpace:ut&&U.normalMapType===$x,metalnessMap:Bt,roughnessMap:re,anisotropy:ue,anisotropyMap:St,clearcoat:F,clearcoatMap:Qt,clearcoatNormalMap:Ft,clearcoatRoughnessMap:$t,dispersion:C,iridescence:st,iridescenceMap:ee,iridescenceThicknessMap:Ot,sheen:vt,sheenColorMap:yt,sheenRoughnessMap:qt,specularMap:Jt,specularColorMap:Yt,specularIntensityMap:ye,transmission:Nt,transmissionMap:Z,thicknessMap:Ht,gradientMap:kt,opaque:U.transparent===!1&&U.blending===go&&U.alphaToCoverage===!1,alphaMap:te,alphaTest:Pt,alphaHash:Ut,combine:U.combine,mapUv:At&&T(U.map.channel),aoMapUv:Et&&T(U.aoMap.channel),lightMapUv:_t&&T(U.lightMap.channel),bumpMapUv:dt&&T(U.bumpMap.channel),normalMapUv:ut&&T(U.normalMap.channel),displacementMapUv:Ct&&T(U.displacementMap.channel),emissiveMapUv:Dt&&T(U.emissiveMap.channel),metalnessMapUv:Bt&&T(U.metalnessMap.channel),roughnessMapUv:re&&T(U.roughnessMap.channel),anisotropyMapUv:St&&T(U.anisotropyMap.channel),clearcoatMapUv:Qt&&T(U.clearcoatMap.channel),clearcoatNormalMapUv:Ft&&T(U.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$t&&T(U.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&T(U.iridescenceMap.channel),iridescenceThicknessMapUv:Ot&&T(U.iridescenceThicknessMap.channel),sheenColorMapUv:yt&&T(U.sheenColorMap.channel),sheenRoughnessMapUv:qt&&T(U.sheenRoughnessMap.channel),specularMapUv:Jt&&T(U.specularMap.channel),specularColorMapUv:Yt&&T(U.specularColorMap.channel),specularIntensityMapUv:ye&&T(U.specularIntensityMap.channel),transmissionMapUv:Z&&T(U.transmissionMap.channel),thicknessMapUv:Ht&&T(U.thicknessMap.channel),alphaMapUv:te&&T(U.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ut||ue),vertexColors:U.vertexColors,vertexAlphas:U.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!K.attributes.uv&&(At||te),fog:!!pt,useFog:U.fog===!0,fogExp2:!!pt&&pt.isFogExp2,flatShading:U.flatShading===!0&&U.wireframe===!1,sizeAttenuation:U.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:ft,skinning:Q.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Rt,morphTextureStride:Gt,numDirLights:A.directional.length,numPointLights:A.point.length,numSpotLights:A.spot.length,numSpotLightMaps:A.spotLightMap.length,numRectAreaLights:A.rectArea.length,numHemiLights:A.hemi.length,numDirLightShadows:A.directionalShadowMap.length,numPointLightShadows:A.pointShadowMap.length,numSpotLightShadows:A.spotShadowMap.length,numSpotLightShadowsWithMaps:A.numSpotLightShadowsWithMaps,numLightProbes:A.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:U.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:ve,decodeVideoTexture:At&&U.map.isVideoTexture===!0&&Le.getTransfer(U.map.colorSpace)===We,decodeVideoTextureEmissive:Dt&&U.emissiveMap.isVideoTexture===!0&&Le.getTransfer(U.emissiveMap.colorSpace)===We,premultipliedAlpha:U.premultipliedAlpha,doubleSided:U.side===_i,flipSided:U.side===qn,useDepthPacking:U.depthPacking>=0,depthPacking:U.depthPacking||0,index0AttributeName:U.index0AttributeName,extensionClipCullDistance:se&&U.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&U.extensions.multiDraw===!0||Mt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:U.customProgramCacheKey()};return je.vertexUv1s=m.has(1),je.vertexUv2s=m.has(2),je.vertexUv3s=m.has(3),m.clear(),je}function _(U){const A=[];if(U.shaderID?A.push(U.shaderID):(A.push(U.customVertexShaderID),A.push(U.customFragmentShaderID)),U.defines!==void 0)for(const V in U.defines)A.push(V),A.push(U.defines[V]);return U.isRawShaderMaterial===!1&&(R(A,U),w(A,U),A.push(r.outputColorSpace)),A.push(U.customProgramCacheKey),A.join()}function R(U,A){U.push(A.precision),U.push(A.outputColorSpace),U.push(A.envMapMode),U.push(A.envMapCubeUVHeight),U.push(A.mapUv),U.push(A.alphaMapUv),U.push(A.lightMapUv),U.push(A.aoMapUv),U.push(A.bumpMapUv),U.push(A.normalMapUv),U.push(A.displacementMapUv),U.push(A.emissiveMapUv),U.push(A.metalnessMapUv),U.push(A.roughnessMapUv),U.push(A.anisotropyMapUv),U.push(A.clearcoatMapUv),U.push(A.clearcoatNormalMapUv),U.push(A.clearcoatRoughnessMapUv),U.push(A.iridescenceMapUv),U.push(A.iridescenceThicknessMapUv),U.push(A.sheenColorMapUv),U.push(A.sheenRoughnessMapUv),U.push(A.specularMapUv),U.push(A.specularColorMapUv),U.push(A.specularIntensityMapUv),U.push(A.transmissionMapUv),U.push(A.thicknessMapUv),U.push(A.combine),U.push(A.fogExp2),U.push(A.sizeAttenuation),U.push(A.morphTargetsCount),U.push(A.morphAttributeCount),U.push(A.numDirLights),U.push(A.numPointLights),U.push(A.numSpotLights),U.push(A.numSpotLightMaps),U.push(A.numHemiLights),U.push(A.numRectAreaLights),U.push(A.numDirLightShadows),U.push(A.numPointLightShadows),U.push(A.numSpotLightShadows),U.push(A.numSpotLightShadowsWithMaps),U.push(A.numLightProbes),U.push(A.shadowMapType),U.push(A.toneMapping),U.push(A.numClippingPlanes),U.push(A.numClipIntersection),U.push(A.depthPacking)}function w(U,A){d.disableAll(),A.supportsVertexTextures&&d.enable(0),A.instancing&&d.enable(1),A.instancingColor&&d.enable(2),A.instancingMorph&&d.enable(3),A.matcap&&d.enable(4),A.envMap&&d.enable(5),A.normalMapObjectSpace&&d.enable(6),A.normalMapTangentSpace&&d.enable(7),A.clearcoat&&d.enable(8),A.iridescence&&d.enable(9),A.alphaTest&&d.enable(10),A.vertexColors&&d.enable(11),A.vertexAlphas&&d.enable(12),A.vertexUv1s&&d.enable(13),A.vertexUv2s&&d.enable(14),A.vertexUv3s&&d.enable(15),A.vertexTangents&&d.enable(16),A.anisotropy&&d.enable(17),A.alphaHash&&d.enable(18),A.batching&&d.enable(19),A.dispersion&&d.enable(20),A.batchingColor&&d.enable(21),A.gradientMap&&d.enable(22),U.push(d.mask),d.disableAll(),A.fog&&d.enable(0),A.useFog&&d.enable(1),A.flatShading&&d.enable(2),A.logarithmicDepthBuffer&&d.enable(3),A.reversedDepthBuffer&&d.enable(4),A.skinning&&d.enable(5),A.morphTargets&&d.enable(6),A.morphNormals&&d.enable(7),A.morphColors&&d.enable(8),A.premultipliedAlpha&&d.enable(9),A.shadowMapEnabled&&d.enable(10),A.doubleSided&&d.enable(11),A.flipSided&&d.enable(12),A.useDepthPacking&&d.enable(13),A.dithering&&d.enable(14),A.transmission&&d.enable(15),A.sheen&&d.enable(16),A.opaque&&d.enable(17),A.pointsUvs&&d.enable(18),A.decodeVideoTexture&&d.enable(19),A.decodeVideoTextureEmissive&&d.enable(20),A.alphaToCoverage&&d.enable(21),U.push(d.mask)}function b(U){const A=E[U.type];let V;if(A){const Y=sa[A];V=Xl.clone(Y.uniforms)}else V=U.uniforms;return V}function I(U,A){let V;for(let Y=0,Q=v.length;Y<Q;Y++){const pt=v[Y];if(pt.cacheKey===A){V=pt,++V.usedTimes;break}}return V===void 0&&(V=new sR(r,A,U,u),v.push(V)),V}function z(U){if(--U.usedTimes===0){const A=v.indexOf(U);v[A]=v[v.length-1],v.pop(),U.destroy()}}function P(U){p.remove(U)}function O(){p.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:b,acquireProgram:I,releaseProgram:z,releaseShaderCache:P,programs:v,dispose:O}}function cR(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,p){r.get(f)[d]=p}function u(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function fR(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Ax(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function wx(){const r=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function f(g,y,x,E,T,M){let _=r[t];return _===void 0?(_={id:g.id,object:g,geometry:y,material:x,groupOrder:E,renderOrder:g.renderOrder,z:T,group:M},r[t]=_):(_.id=g.id,_.object=g,_.geometry=y,_.material=x,_.groupOrder=E,_.renderOrder=g.renderOrder,_.z=T,_.group=M),t++,_}function d(g,y,x,E,T,M){const _=f(g,y,x,E,T,M);x.transmission>0?s.push(_):x.transparent===!0?l.push(_):i.push(_)}function p(g,y,x,E,T,M){const _=f(g,y,x,E,T,M);x.transmission>0?s.unshift(_):x.transparent===!0?l.unshift(_):i.unshift(_)}function m(g,y){i.length>1&&i.sort(g||fR),s.length>1&&s.sort(y||Ax),l.length>1&&l.sort(y||Ax)}function v(){for(let g=t,y=r.length;g<y;g++){const x=r[g];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:p,finish:v,sort:m}}function hR(){let r=new WeakMap;function t(s,l){const u=r.get(s);let f;return u===void 0?(f=new wx,r.set(s,[f])):l>=u.length?(f=new wx,u.push(f)):f=u[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function dR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new H,color:new oe};break;case"SpotLight":i={position:new H,direction:new H,color:new oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new H,color:new oe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new H,skyColor:new oe,groundColor:new oe};break;case"RectAreaLight":i={color:new oe,position:new H,halfWidth:new H,halfHeight:new H};break}return r[t.id]=i,i}}}function pR(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let mR=0;function gR(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function vR(r){const t=new dR,i=pR(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new H);const l=new H,u=new He,f=new He;function d(m){let v=0,g=0,y=0;for(let U=0;U<9;U++)s.probe[U].set(0,0,0);let x=0,E=0,T=0,M=0,_=0,R=0,w=0,b=0,I=0,z=0,P=0;m.sort(gR);for(let U=0,A=m.length;U<A;U++){const V=m[U],Y=V.color,Q=V.intensity,pt=V.distance,K=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=Y.r*Q,g+=Y.g*Q,y+=Y.b*Q;else if(V.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(V.sh.coefficients[W],Q);P++}else if(V.isDirectionalLight){const W=t.get(V);if(W.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const N=V.shadow,B=i.get(V);B.shadowIntensity=N.intensity,B.shadowBias=N.bias,B.shadowNormalBias=N.normalBias,B.shadowRadius=N.radius,B.shadowMapSize=N.mapSize,s.directionalShadow[x]=B,s.directionalShadowMap[x]=K,s.directionalShadowMatrix[x]=V.shadow.matrix,R++}s.directional[x]=W,x++}else if(V.isSpotLight){const W=t.get(V);W.position.setFromMatrixPosition(V.matrixWorld),W.color.copy(Y).multiplyScalar(Q),W.distance=pt,W.coneCos=Math.cos(V.angle),W.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),W.decay=V.decay,s.spot[T]=W;const N=V.shadow;if(V.map&&(s.spotLightMap[I]=V.map,I++,N.updateMatrices(V),V.castShadow&&z++),s.spotLightMatrix[T]=N.matrix,V.castShadow){const B=i.get(V);B.shadowIntensity=N.intensity,B.shadowBias=N.bias,B.shadowNormalBias=N.normalBias,B.shadowRadius=N.radius,B.shadowMapSize=N.mapSize,s.spotShadow[T]=B,s.spotShadowMap[T]=K,b++}T++}else if(V.isRectAreaLight){const W=t.get(V);W.color.copy(Y).multiplyScalar(Q),W.halfWidth.set(V.width*.5,0,0),W.halfHeight.set(0,V.height*.5,0),s.rectArea[M]=W,M++}else if(V.isPointLight){const W=t.get(V);if(W.color.copy(V.color).multiplyScalar(V.intensity),W.distance=V.distance,W.decay=V.decay,V.castShadow){const N=V.shadow,B=i.get(V);B.shadowIntensity=N.intensity,B.shadowBias=N.bias,B.shadowNormalBias=N.normalBias,B.shadowRadius=N.radius,B.shadowMapSize=N.mapSize,B.shadowCameraNear=N.camera.near,B.shadowCameraFar=N.camera.far,s.pointShadow[E]=B,s.pointShadowMap[E]=K,s.pointShadowMatrix[E]=V.shadow.matrix,w++}s.point[E]=W,E++}else if(V.isHemisphereLight){const W=t.get(V);W.skyColor.copy(V.color).multiplyScalar(Q),W.groundColor.copy(V.groundColor).multiplyScalar(Q),s.hemi[_]=W,_++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=jt.LTC_FLOAT_1,s.rectAreaLTC2=jt.LTC_FLOAT_2):(s.rectAreaLTC1=jt.LTC_HALF_1,s.rectAreaLTC2=jt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=y;const O=s.hash;(O.directionalLength!==x||O.pointLength!==E||O.spotLength!==T||O.rectAreaLength!==M||O.hemiLength!==_||O.numDirectionalShadows!==R||O.numPointShadows!==w||O.numSpotShadows!==b||O.numSpotMaps!==I||O.numLightProbes!==P)&&(s.directional.length=x,s.spot.length=T,s.rectArea.length=M,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=R,s.directionalShadowMap.length=R,s.pointShadow.length=w,s.pointShadowMap.length=w,s.spotShadow.length=b,s.spotShadowMap.length=b,s.directionalShadowMatrix.length=R,s.pointShadowMatrix.length=w,s.spotLightMatrix.length=b+I-z,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=P,O.directionalLength=x,O.pointLength=E,O.spotLength=T,O.rectAreaLength=M,O.hemiLength=_,O.numDirectionalShadows=R,O.numPointShadows=w,O.numSpotShadows=b,O.numSpotMaps=I,O.numLightProbes=P,s.version=mR++)}function p(m,v){let g=0,y=0,x=0,E=0,T=0;const M=v.matrixWorldInverse;for(let _=0,R=m.length;_<R;_++){const w=m[_];if(w.isDirectionalLight){const b=s.directional[g];b.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(l),b.direction.transformDirection(M),g++}else if(w.isSpotLight){const b=s.spot[x];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(M),b.direction.setFromMatrixPosition(w.matrixWorld),l.setFromMatrixPosition(w.target.matrixWorld),b.direction.sub(l),b.direction.transformDirection(M),x++}else if(w.isRectAreaLight){const b=s.rectArea[E];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(M),f.identity(),u.copy(w.matrixWorld),u.premultiply(M),f.extractRotation(u),b.halfWidth.set(w.width*.5,0,0),b.halfHeight.set(0,w.height*.5,0),b.halfWidth.applyMatrix4(f),b.halfHeight.applyMatrix4(f),E++}else if(w.isPointLight){const b=s.point[y];b.position.setFromMatrixPosition(w.matrixWorld),b.position.applyMatrix4(M),y++}else if(w.isHemisphereLight){const b=s.hemi[T];b.direction.setFromMatrixPosition(w.matrixWorld),b.direction.transformDirection(M),T++}}}return{setup:d,setupView:p,state:s}}function Cx(r){const t=new vR(r),i=[],s=[];function l(v){m.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function f(v){s.push(v)}function d(){t.setup(i)}function p(v){t.setupView(i,v)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:u,pushShadow:f}}function _R(r){let t=new WeakMap;function i(l,u=0){const f=t.get(l);let d;return f===void 0?(d=new Cx(r),t.set(l,[d])):u>=f.length?(d=new Cx(r),f.push(d)):d=f[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const yR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xR=`uniform sampler2D shadow_pass;
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
}`;function SR(r,t,i){let s=new Fm;const l=new zt,u=new zt,f=new Qe,d=new qb({depthPacking:lT}),p=new Yb,m={},v=i.maxTextureSize,g={[ys]:qn,[qn]:ys,[_i]:_i},y=new nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:yR,fragmentShader:xR}),x=y.clone();x.defines.HORIZONTAL_PASS=1;const E=new pn;E.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new sn(E,y),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zx;let _=this.type;this.render=function(z,P,O){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;const U=r.getRenderTarget(),A=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(Oa),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const Q=_!==Na&&this.type===Na,pt=_===Na&&this.type!==Na;for(let K=0,W=z.length;K<W;K++){const N=z[K],B=N.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;l.copy(B.mapSize);const $=B.getFrameExtents();if(l.multiply($),u.copy(B.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/$.x),l.x=u.x*$.x,B.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/$.y),l.y=u.y*$.y,B.mapSize.y=u.y)),B.map===null||Q===!0||pt===!0){const Rt=this.type!==Na?{minFilter:yi,magFilter:yi}:{};B.map!==null&&B.map.dispose(),B.map=new Ni(l.x,l.y,Rt),B.map.texture.name=N.name+".shadowMap",B.camera.updateProjectionMatrix()}r.setRenderTarget(B.map),r.clear();const ht=B.getViewportCount();for(let Rt=0;Rt<ht;Rt++){const Gt=B.getViewport(Rt);f.set(u.x*Gt.x,u.y*Gt.y,u.x*Gt.z,u.y*Gt.w),Y.viewport(f),B.updateMatrices(N,Rt),s=B.getFrustum(),b(P,O,B.camera,N,this.type)}B.isPointLightShadow!==!0&&this.type===Na&&R(B,O),B.needsUpdate=!1}_=this.type,M.needsUpdate=!1,r.setRenderTarget(U,A,V)};function R(z,P){const O=t.update(T);y.defines.VSM_SAMPLES!==z.blurSamples&&(y.defines.VSM_SAMPLES=z.blurSamples,x.defines.VSM_SAMPLES=z.blurSamples,y.needsUpdate=!0,x.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Ni(l.x,l.y)),y.uniforms.shadow_pass.value=z.map.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(P,null,O,y,T,null),x.uniforms.shadow_pass.value=z.mapPass.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(P,null,O,x,T,null)}function w(z,P,O,U){let A=null;const V=O.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(V!==void 0)A=V;else if(A=O.isPointLight===!0?p:d,r.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const Y=A.uuid,Q=P.uuid;let pt=m[Y];pt===void 0&&(pt={},m[Y]=pt);let K=pt[Q];K===void 0&&(K=A.clone(),pt[Q]=K,P.addEventListener("dispose",I)),A=K}if(A.visible=P.visible,A.wireframe=P.wireframe,U===Na?A.side=P.shadowSide!==null?P.shadowSide:P.side:A.side=P.shadowSide!==null?P.shadowSide:g[P.side],A.alphaMap=P.alphaMap,A.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,A.map=P.map,A.clipShadows=P.clipShadows,A.clippingPlanes=P.clippingPlanes,A.clipIntersection=P.clipIntersection,A.displacementMap=P.displacementMap,A.displacementScale=P.displacementScale,A.displacementBias=P.displacementBias,A.wireframeLinewidth=P.wireframeLinewidth,A.linewidth=P.linewidth,O.isPointLight===!0&&A.isMeshDistanceMaterial===!0){const Y=r.properties.get(A);Y.light=O}return A}function b(z,P,O,U,A){if(z.visible===!1)return;if(z.layers.test(P.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&A===Na)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,z.matrixWorld);const Q=t.update(z),pt=z.material;if(Array.isArray(pt)){const K=Q.groups;for(let W=0,N=K.length;W<N;W++){const B=K[W],$=pt[B.materialIndex];if($&&$.visible){const ht=w(z,$,U,A);z.onBeforeShadow(r,z,P,O,Q,ht,B),r.renderBufferDirect(O,null,Q,ht,z,B),z.onAfterShadow(r,z,P,O,Q,ht,B)}}}else if(pt.visible){const K=w(z,pt,U,A);z.onBeforeShadow(r,z,P,O,Q,K,null),r.renderBufferDirect(O,null,Q,K,z,null),z.onAfterShadow(r,z,P,O,Q,K,null)}}const Y=z.children;for(let Q=0,pt=Y.length;Q<pt;Q++)b(Y[Q],P,O,U,A)}function I(z){z.target.removeEventListener("dispose",I);for(const O in m){const U=m[O],A=z.target.uuid;A in U&&(U[A].dispose(),delete U[A])}}}const MR={[Op]:Pp,[zp]:Fp,[Ip]:Hp,[_o]:Bp,[Pp]:Op,[Fp]:zp,[Hp]:Ip,[Bp]:_o};function ER(r,t){function i(){let Z=!1;const Ht=new Qe;let kt=null;const te=new Qe(0,0,0,0);return{setMask:function(Pt){kt!==Pt&&!Z&&(r.colorMask(Pt,Pt,Pt,Pt),kt=Pt)},setLocked:function(Pt){Z=Pt},setClear:function(Pt,Ut,se,ve,je){je===!0&&(Pt*=ve,Ut*=ve,se*=ve),Ht.set(Pt,Ut,se,ve),te.equals(Ht)===!1&&(r.clearColor(Pt,Ut,se,ve),te.copy(Ht))},reset:function(){Z=!1,kt=null,te.set(-1,0,0,0)}}}function s(){let Z=!1,Ht=!1,kt=null,te=null,Pt=null;return{setReversed:function(Ut){if(Ht!==Ut){const se=t.get("EXT_clip_control");Ut?se.clipControlEXT(se.LOWER_LEFT_EXT,se.ZERO_TO_ONE_EXT):se.clipControlEXT(se.LOWER_LEFT_EXT,se.NEGATIVE_ONE_TO_ONE_EXT),Ht=Ut;const ve=Pt;Pt=null,this.setClear(ve)}},getReversed:function(){return Ht},setTest:function(Ut){Ut?k(r.DEPTH_TEST):ft(r.DEPTH_TEST)},setMask:function(Ut){kt!==Ut&&!Z&&(r.depthMask(Ut),kt=Ut)},setFunc:function(Ut){if(Ht&&(Ut=MR[Ut]),te!==Ut){switch(Ut){case Op:r.depthFunc(r.NEVER);break;case Pp:r.depthFunc(r.ALWAYS);break;case zp:r.depthFunc(r.LESS);break;case _o:r.depthFunc(r.LEQUAL);break;case Ip:r.depthFunc(r.EQUAL);break;case Bp:r.depthFunc(r.GEQUAL);break;case Fp:r.depthFunc(r.GREATER);break;case Hp:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}te=Ut}},setLocked:function(Ut){Z=Ut},setClear:function(Ut){Pt!==Ut&&(Ht&&(Ut=1-Ut),r.clearDepth(Ut),Pt=Ut)},reset:function(){Z=!1,kt=null,te=null,Pt=null,Ht=!1}}}function l(){let Z=!1,Ht=null,kt=null,te=null,Pt=null,Ut=null,se=null,ve=null,je=null;return{setTest:function(Re){Z||(Re?k(r.STENCIL_TEST):ft(r.STENCIL_TEST))},setMask:function(Re){Ht!==Re&&!Z&&(r.stencilMask(Re),Ht=Re)},setFunc:function(Re,rn,En){(kt!==Re||te!==rn||Pt!==En)&&(r.stencilFunc(Re,rn,En),kt=Re,te=rn,Pt=En)},setOp:function(Re,rn,En){(Ut!==Re||se!==rn||ve!==En)&&(r.stencilOp(Re,rn,En),Ut=Re,se=rn,ve=En)},setLocked:function(Re){Z=Re},setClear:function(Re){je!==Re&&(r.clearStencil(Re),je=Re)},reset:function(){Z=!1,Ht=null,kt=null,te=null,Pt=null,Ut=null,se=null,ve=null,je=null}}}const u=new i,f=new s,d=new l,p=new WeakMap,m=new WeakMap;let v={},g={},y=new WeakMap,x=[],E=null,T=!1,M=null,_=null,R=null,w=null,b=null,I=null,z=null,P=new oe(0,0,0),O=0,U=!1,A=null,V=null,Y=null,Q=null,pt=null;const K=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,N=0;const B=r.getParameter(r.VERSION);B.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(B)[1]),W=N>=1):B.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),W=N>=2);let $=null,ht={};const Rt=r.getParameter(r.SCISSOR_BOX),Gt=r.getParameter(r.VIEWPORT),ne=new Qe().fromArray(Rt),q=new Qe().fromArray(Gt);function J(Z,Ht,kt,te){const Pt=new Uint8Array(4),Ut=r.createTexture();r.bindTexture(Z,Ut),r.texParameteri(Z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(Z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let se=0;se<kt;se++)Z===r.TEXTURE_3D||Z===r.TEXTURE_2D_ARRAY?r.texImage3D(Ht,0,r.RGBA,1,1,te,0,r.RGBA,r.UNSIGNED_BYTE,Pt):r.texImage2D(Ht+se,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Pt);return Ut}const tt={};tt[r.TEXTURE_2D]=J(r.TEXTURE_2D,r.TEXTURE_2D,1),tt[r.TEXTURE_CUBE_MAP]=J(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[r.TEXTURE_2D_ARRAY]=J(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),tt[r.TEXTURE_3D]=J(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),k(r.DEPTH_TEST),f.setFunc(_o),dt(!1),ut(gy),k(r.CULL_FACE),Et(Oa);function k(Z){v[Z]!==!0&&(r.enable(Z),v[Z]=!0)}function ft(Z){v[Z]!==!1&&(r.disable(Z),v[Z]=!1)}function xt(Z,Ht){return g[Z]!==Ht?(r.bindFramebuffer(Z,Ht),g[Z]=Ht,Z===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Ht),Z===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Ht),!0):!1}function Mt(Z,Ht){let kt=x,te=!1;if(Z){kt=y.get(Ht),kt===void 0&&(kt=[],y.set(Ht,kt));const Pt=Z.textures;if(kt.length!==Pt.length||kt[0]!==r.COLOR_ATTACHMENT0){for(let Ut=0,se=Pt.length;Ut<se;Ut++)kt[Ut]=r.COLOR_ATTACHMENT0+Ut;kt.length=Pt.length,te=!0}}else kt[0]!==r.BACK&&(kt[0]=r.BACK,te=!0);te&&r.drawBuffers(kt)}function At(Z){return E!==Z?(r.useProgram(Z),E=Z,!0):!1}const Lt={[Js]:r.FUNC_ADD,[GE]:r.FUNC_SUBTRACT,[VE]:r.FUNC_REVERSE_SUBTRACT};Lt[kE]=r.MIN,Lt[XE]=r.MAX;const G={[qE]:r.ZERO,[YE]:r.ONE,[WE]:r.SRC_COLOR,[Np]:r.SRC_ALPHA,[$E]:r.SRC_ALPHA_SATURATE,[KE]:r.DST_COLOR,[ZE]:r.DST_ALPHA,[jE]:r.ONE_MINUS_SRC_COLOR,[Lp]:r.ONE_MINUS_SRC_ALPHA,[JE]:r.ONE_MINUS_DST_COLOR,[QE]:r.ONE_MINUS_DST_ALPHA,[tT]:r.CONSTANT_COLOR,[eT]:r.ONE_MINUS_CONSTANT_COLOR,[nT]:r.CONSTANT_ALPHA,[iT]:r.ONE_MINUS_CONSTANT_ALPHA};function Et(Z,Ht,kt,te,Pt,Ut,se,ve,je,Re){if(Z===Oa){T===!0&&(ft(r.BLEND),T=!1);return}if(T===!1&&(k(r.BLEND),T=!0),Z!==HE){if(Z!==M||Re!==U){if((_!==Js||b!==Js)&&(r.blendEquation(r.FUNC_ADD),_=Js,b=Js),Re)switch(Z){case go:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nr:r.blendFunc(r.ONE,r.ONE);break;case vy:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case _y:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}else switch(Z){case go:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case nr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case vy:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _y:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",Z);break}R=null,w=null,I=null,z=null,P.set(0,0,0),O=0,M=Z,U=Re}return}Pt=Pt||Ht,Ut=Ut||kt,se=se||te,(Ht!==_||Pt!==b)&&(r.blendEquationSeparate(Lt[Ht],Lt[Pt]),_=Ht,b=Pt),(kt!==R||te!==w||Ut!==I||se!==z)&&(r.blendFuncSeparate(G[kt],G[te],G[Ut],G[se]),R=kt,w=te,I=Ut,z=se),(ve.equals(P)===!1||je!==O)&&(r.blendColor(ve.r,ve.g,ve.b,je),P.copy(ve),O=je),M=Z,U=!1}function _t(Z,Ht){Z.side===_i?ft(r.CULL_FACE):k(r.CULL_FACE);let kt=Z.side===qn;Ht&&(kt=!kt),dt(kt),Z.blending===go&&Z.transparent===!1?Et(Oa):Et(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),f.setFunc(Z.depthFunc),f.setTest(Z.depthTest),f.setMask(Z.depthWrite),u.setMask(Z.colorWrite);const te=Z.stencilWrite;d.setTest(te),te&&(d.setMask(Z.stencilWriteMask),d.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),d.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),Dt(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?k(r.SAMPLE_ALPHA_TO_COVERAGE):ft(r.SAMPLE_ALPHA_TO_COVERAGE)}function dt(Z){A!==Z&&(Z?r.frontFace(r.CW):r.frontFace(r.CCW),A=Z)}function ut(Z){Z!==BE?(k(r.CULL_FACE),Z!==V&&(Z===gy?r.cullFace(r.BACK):Z===FE?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ft(r.CULL_FACE),V=Z}function Ct(Z){Z!==Y&&(W&&r.lineWidth(Z),Y=Z)}function Dt(Z,Ht,kt){Z?(k(r.POLYGON_OFFSET_FILL),(Q!==Ht||pt!==kt)&&(r.polygonOffset(Ht,kt),Q=Ht,pt=kt)):ft(r.POLYGON_OFFSET_FILL)}function Bt(Z){Z?k(r.SCISSOR_TEST):ft(r.SCISSOR_TEST)}function re(Z){Z===void 0&&(Z=r.TEXTURE0+K-1),$!==Z&&(r.activeTexture(Z),$=Z)}function ue(Z,Ht,kt){kt===void 0&&($===null?kt=r.TEXTURE0+K-1:kt=$);let te=ht[kt];te===void 0&&(te={type:void 0,texture:void 0},ht[kt]=te),(te.type!==Z||te.texture!==Ht)&&($!==kt&&(r.activeTexture(kt),$=kt),r.bindTexture(Z,Ht||tt[Z]),te.type=Z,te.texture=Ht)}function F(){const Z=ht[$];Z!==void 0&&Z.type!==void 0&&(r.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function C(){try{r.compressedTexImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function st(){try{r.compressedTexImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function vt(){try{r.texSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Nt(){try{r.texSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function St(){try{r.compressedTexSubImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Qt(){try{r.compressedTexSubImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ft(){try{r.texStorage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function $t(){try{r.texStorage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function ee(){try{r.texImage2D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function Ot(){try{r.texImage3D(...arguments)}catch(Z){console.error("THREE.WebGLState:",Z)}}function yt(Z){ne.equals(Z)===!1&&(r.scissor(Z.x,Z.y,Z.z,Z.w),ne.copy(Z))}function qt(Z){q.equals(Z)===!1&&(r.viewport(Z.x,Z.y,Z.z,Z.w),q.copy(Z))}function Jt(Z,Ht){let kt=m.get(Ht);kt===void 0&&(kt=new WeakMap,m.set(Ht,kt));let te=kt.get(Z);te===void 0&&(te=r.getUniformBlockIndex(Ht,Z.name),kt.set(Z,te))}function Yt(Z,Ht){const te=m.get(Ht).get(Z);p.get(Ht)!==te&&(r.uniformBlockBinding(Ht,te,Z.__bindingPointIndex),p.set(Ht,te))}function ye(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},$=null,ht={},g={},y=new WeakMap,x=[],E=null,T=!1,M=null,_=null,R=null,w=null,b=null,I=null,z=null,P=new oe(0,0,0),O=0,U=!1,A=null,V=null,Y=null,Q=null,pt=null,ne.set(0,0,r.canvas.width,r.canvas.height),q.set(0,0,r.canvas.width,r.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:k,disable:ft,bindFramebuffer:xt,drawBuffers:Mt,useProgram:At,setBlending:Et,setMaterial:_t,setFlipSided:dt,setCullFace:ut,setLineWidth:Ct,setPolygonOffset:Dt,setScissorTest:Bt,activeTexture:re,bindTexture:ue,unbindTexture:F,compressedTexImage2D:C,compressedTexImage3D:st,texImage2D:ee,texImage3D:Ot,updateUBOMapping:Jt,uniformBlockBinding:Yt,texStorage2D:Ft,texStorage3D:$t,texSubImage2D:vt,texSubImage3D:Nt,compressedTexSubImage2D:St,compressedTexSubImage3D:Qt,scissor:yt,viewport:qt,reset:ye}}function TR(r,t,i,s,l,u,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new zt,v=new WeakMap;let g;const y=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(F,C){return x?new OffscreenCanvas(F,C):lf("canvas")}function T(F,C,st){let vt=1;const Nt=ue(F);if((Nt.width>st||Nt.height>st)&&(vt=st/Math.max(Nt.width,Nt.height)),vt<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const St=Math.floor(vt*Nt.width),Qt=Math.floor(vt*Nt.height);g===void 0&&(g=E(St,Qt));const Ft=C?E(St,Qt):g;return Ft.width=St,Ft.height=Qt,Ft.getContext("2d").drawImage(F,0,0,St,Qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Nt.width+"x"+Nt.height+") to ("+St+"x"+Qt+")."),Ft}else return"data"in F&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Nt.width+"x"+Nt.height+")."),F;return F}function M(F){return F.generateMipmaps}function _(F){r.generateMipmap(F)}function R(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(F,C,st,vt,Nt=!1){if(F!==null){if(r[F]!==void 0)return r[F];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let St=C;if(C===r.RED&&(st===r.FLOAT&&(St=r.R32F),st===r.HALF_FLOAT&&(St=r.R16F),st===r.UNSIGNED_BYTE&&(St=r.R8)),C===r.RED_INTEGER&&(st===r.UNSIGNED_BYTE&&(St=r.R8UI),st===r.UNSIGNED_SHORT&&(St=r.R16UI),st===r.UNSIGNED_INT&&(St=r.R32UI),st===r.BYTE&&(St=r.R8I),st===r.SHORT&&(St=r.R16I),st===r.INT&&(St=r.R32I)),C===r.RG&&(st===r.FLOAT&&(St=r.RG32F),st===r.HALF_FLOAT&&(St=r.RG16F),st===r.UNSIGNED_BYTE&&(St=r.RG8)),C===r.RG_INTEGER&&(st===r.UNSIGNED_BYTE&&(St=r.RG8UI),st===r.UNSIGNED_SHORT&&(St=r.RG16UI),st===r.UNSIGNED_INT&&(St=r.RG32UI),st===r.BYTE&&(St=r.RG8I),st===r.SHORT&&(St=r.RG16I),st===r.INT&&(St=r.RG32I)),C===r.RGB_INTEGER&&(st===r.UNSIGNED_BYTE&&(St=r.RGB8UI),st===r.UNSIGNED_SHORT&&(St=r.RGB16UI),st===r.UNSIGNED_INT&&(St=r.RGB32UI),st===r.BYTE&&(St=r.RGB8I),st===r.SHORT&&(St=r.RGB16I),st===r.INT&&(St=r.RGB32I)),C===r.RGBA_INTEGER&&(st===r.UNSIGNED_BYTE&&(St=r.RGBA8UI),st===r.UNSIGNED_SHORT&&(St=r.RGBA16UI),st===r.UNSIGNED_INT&&(St=r.RGBA32UI),st===r.BYTE&&(St=r.RGBA8I),st===r.SHORT&&(St=r.RGBA16I),st===r.INT&&(St=r.RGBA32I)),C===r.RGB&&(st===r.UNSIGNED_INT_5_9_9_9_REV&&(St=r.RGB9_E5),st===r.UNSIGNED_INT_10F_11F_11F_REV&&(St=r.R11F_G11F_B10F)),C===r.RGBA){const Qt=Nt?rf:Le.getTransfer(vt);st===r.FLOAT&&(St=r.RGBA32F),st===r.HALF_FLOAT&&(St=r.RGBA16F),st===r.UNSIGNED_BYTE&&(St=Qt===We?r.SRGB8_ALPHA8:r.RGBA8),st===r.UNSIGNED_SHORT_4_4_4_4&&(St=r.RGBA4),st===r.UNSIGNED_SHORT_5_5_5_1&&(St=r.RGB5_A1)}return(St===r.R16F||St===r.R32F||St===r.RG16F||St===r.RG32F||St===r.RGBA16F||St===r.RGBA32F)&&t.get("EXT_color_buffer_float"),St}function b(F,C){let st;return F?C===null||C===ir||C===Fl?st=r.DEPTH24_STENCIL8:C===oa?st=r.DEPTH32F_STENCIL8:C===Bl&&(st=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===ir||C===Fl?st=r.DEPTH_COMPONENT24:C===oa?st=r.DEPTH_COMPONENT32F:C===Bl&&(st=r.DEPTH_COMPONENT16),st}function I(F,C){return M(F)===!0||F.isFramebufferTexture&&F.minFilter!==yi&&F.minFilter!==ra?Math.log2(Math.max(C.width,C.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?C.mipmaps.length:1}function z(F){const C=F.target;C.removeEventListener("dispose",z),O(C),C.isVideoTexture&&v.delete(C)}function P(F){const C=F.target;C.removeEventListener("dispose",P),A(C)}function O(F){const C=s.get(F);if(C.__webglInit===void 0)return;const st=F.source,vt=y.get(st);if(vt){const Nt=vt[C.__cacheKey];Nt.usedTimes--,Nt.usedTimes===0&&U(F),Object.keys(vt).length===0&&y.delete(st)}s.remove(F)}function U(F){const C=s.get(F);r.deleteTexture(C.__webglTexture);const st=F.source,vt=y.get(st);delete vt[C.__cacheKey],f.memory.textures--}function A(F){const C=s.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),s.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let vt=0;vt<6;vt++){if(Array.isArray(C.__webglFramebuffer[vt]))for(let Nt=0;Nt<C.__webglFramebuffer[vt].length;Nt++)r.deleteFramebuffer(C.__webglFramebuffer[vt][Nt]);else r.deleteFramebuffer(C.__webglFramebuffer[vt]);C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer[vt])}else{if(Array.isArray(C.__webglFramebuffer))for(let vt=0;vt<C.__webglFramebuffer.length;vt++)r.deleteFramebuffer(C.__webglFramebuffer[vt]);else r.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&r.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&r.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let vt=0;vt<C.__webglColorRenderbuffer.length;vt++)C.__webglColorRenderbuffer[vt]&&r.deleteRenderbuffer(C.__webglColorRenderbuffer[vt]);C.__webglDepthRenderbuffer&&r.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const st=F.textures;for(let vt=0,Nt=st.length;vt<Nt;vt++){const St=s.get(st[vt]);St.__webglTexture&&(r.deleteTexture(St.__webglTexture),f.memory.textures--),s.remove(st[vt])}s.remove(F)}let V=0;function Y(){V=0}function Q(){const F=V;return F>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+l.maxTextures),V+=1,F}function pt(F){const C=[];return C.push(F.wrapS),C.push(F.wrapT),C.push(F.wrapR||0),C.push(F.magFilter),C.push(F.minFilter),C.push(F.anisotropy),C.push(F.internalFormat),C.push(F.format),C.push(F.type),C.push(F.generateMipmaps),C.push(F.premultiplyAlpha),C.push(F.flipY),C.push(F.unpackAlignment),C.push(F.colorSpace),C.join()}function K(F,C){const st=s.get(F);if(F.isVideoTexture&&Bt(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&st.__version!==F.version){const vt=F.image;if(vt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(vt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(st,F,C);return}}else F.isExternalTexture&&(st.__webglTexture=F.sourceTexture?F.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,st.__webglTexture,r.TEXTURE0+C)}function W(F,C){const st=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&st.__version!==F.version){tt(st,F,C);return}i.bindTexture(r.TEXTURE_2D_ARRAY,st.__webglTexture,r.TEXTURE0+C)}function N(F,C){const st=s.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&st.__version!==F.version){tt(st,F,C);return}i.bindTexture(r.TEXTURE_3D,st.__webglTexture,r.TEXTURE0+C)}function B(F,C){const st=s.get(F);if(F.version>0&&st.__version!==F.version){k(st,F,C);return}i.bindTexture(r.TEXTURE_CUBE_MAP,st.__webglTexture,r.TEXTURE0+C)}const $={[Vp]:r.REPEAT,[tr]:r.CLAMP_TO_EDGE,[kp]:r.MIRRORED_REPEAT},ht={[yi]:r.NEAREST,[rT]:r.NEAREST_MIPMAP_NEAREST,[yc]:r.NEAREST_MIPMAP_LINEAR,[ra]:r.LINEAR,[Kd]:r.LINEAR_MIPMAP_NEAREST,[er]:r.LINEAR_MIPMAP_LINEAR},Rt={[cT]:r.NEVER,[gT]:r.ALWAYS,[fT]:r.LESS,[tS]:r.LEQUAL,[hT]:r.EQUAL,[mT]:r.GEQUAL,[dT]:r.GREATER,[pT]:r.NOTEQUAL};function Gt(F,C){if(C.type===oa&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===ra||C.magFilter===Kd||C.magFilter===yc||C.magFilter===er||C.minFilter===ra||C.minFilter===Kd||C.minFilter===yc||C.minFilter===er)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,$[C.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,$[C.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,$[C.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,ht[C.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,ht[C.minFilter]),C.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,Rt[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===yi||C.minFilter!==yc&&C.minFilter!==er||C.type===oa&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||s.get(C).__currentAnisotropy){const st=t.get("EXT_texture_filter_anisotropic");r.texParameterf(F,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,l.getMaxAnisotropy())),s.get(C).__currentAnisotropy=C.anisotropy}}}function ne(F,C){let st=!1;F.__webglInit===void 0&&(F.__webglInit=!0,C.addEventListener("dispose",z));const vt=C.source;let Nt=y.get(vt);Nt===void 0&&(Nt={},y.set(vt,Nt));const St=pt(C);if(St!==F.__cacheKey){Nt[St]===void 0&&(Nt[St]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,st=!0),Nt[St].usedTimes++;const Qt=Nt[F.__cacheKey];Qt!==void 0&&(Nt[F.__cacheKey].usedTimes--,Qt.usedTimes===0&&U(C)),F.__cacheKey=St,F.__webglTexture=Nt[St].texture}return st}function q(F,C,st){return Math.floor(Math.floor(F/st)/C)}function J(F,C,st,vt){const St=F.updateRanges;if(St.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,C.width,C.height,st,vt,C.data);else{St.sort((Ot,yt)=>Ot.start-yt.start);let Qt=0;for(let Ot=1;Ot<St.length;Ot++){const yt=St[Qt],qt=St[Ot],Jt=yt.start+yt.count,Yt=q(qt.start,C.width,4),ye=q(yt.start,C.width,4);qt.start<=Jt+1&&Yt===ye&&q(qt.start+qt.count-1,C.width,4)===Yt?yt.count=Math.max(yt.count,qt.start+qt.count-yt.start):(++Qt,St[Qt]=qt)}St.length=Qt+1;const Ft=r.getParameter(r.UNPACK_ROW_LENGTH),$t=r.getParameter(r.UNPACK_SKIP_PIXELS),ee=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,C.width);for(let Ot=0,yt=St.length;Ot<yt;Ot++){const qt=St[Ot],Jt=Math.floor(qt.start/4),Yt=Math.ceil(qt.count/4),ye=Jt%C.width,Z=Math.floor(Jt/C.width),Ht=Yt,kt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ye),r.pixelStorei(r.UNPACK_SKIP_ROWS,Z),i.texSubImage2D(r.TEXTURE_2D,0,ye,Z,Ht,kt,st,vt,C.data)}F.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ft),r.pixelStorei(r.UNPACK_SKIP_PIXELS,$t),r.pixelStorei(r.UNPACK_SKIP_ROWS,ee)}}function tt(F,C,st){let vt=r.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(vt=r.TEXTURE_2D_ARRAY),C.isData3DTexture&&(vt=r.TEXTURE_3D);const Nt=ne(F,C),St=C.source;i.bindTexture(vt,F.__webglTexture,r.TEXTURE0+st);const Qt=s.get(St);if(St.version!==Qt.__version||Nt===!0){i.activeTexture(r.TEXTURE0+st);const Ft=Le.getPrimaries(Le.workingColorSpace),$t=C.colorSpace===_s?null:Le.getPrimaries(C.colorSpace),ee=C.colorSpace===_s||Ft===$t?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Ot=T(C.image,!1,l.maxTextureSize);Ot=re(C,Ot);const yt=u.convert(C.format,C.colorSpace),qt=u.convert(C.type);let Jt=w(C.internalFormat,yt,qt,C.colorSpace,C.isVideoTexture);Gt(vt,C);let Yt;const ye=C.mipmaps,Z=C.isVideoTexture!==!0,Ht=Qt.__version===void 0||Nt===!0,kt=St.dataReady,te=I(C,Ot);if(C.isDepthTexture)Jt=b(C.format===Gl,C.type),Ht&&(Z?i.texStorage2D(r.TEXTURE_2D,1,Jt,Ot.width,Ot.height):i.texImage2D(r.TEXTURE_2D,0,Jt,Ot.width,Ot.height,0,yt,qt,null));else if(C.isDataTexture)if(ye.length>0){Z&&Ht&&i.texStorage2D(r.TEXTURE_2D,te,Jt,ye[0].width,ye[0].height);for(let Pt=0,Ut=ye.length;Pt<Ut;Pt++)Yt=ye[Pt],Z?kt&&i.texSubImage2D(r.TEXTURE_2D,Pt,0,0,Yt.width,Yt.height,yt,qt,Yt.data):i.texImage2D(r.TEXTURE_2D,Pt,Jt,Yt.width,Yt.height,0,yt,qt,Yt.data);C.generateMipmaps=!1}else Z?(Ht&&i.texStorage2D(r.TEXTURE_2D,te,Jt,Ot.width,Ot.height),kt&&J(C,Ot,yt,qt)):i.texImage2D(r.TEXTURE_2D,0,Jt,Ot.width,Ot.height,0,yt,qt,Ot.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Z&&Ht&&i.texStorage3D(r.TEXTURE_2D_ARRAY,te,Jt,ye[0].width,ye[0].height,Ot.depth);for(let Pt=0,Ut=ye.length;Pt<Ut;Pt++)if(Yt=ye[Pt],C.format!==ki)if(yt!==null)if(Z){if(kt)if(C.layerUpdates.size>0){const se=sx(Yt.width,Yt.height,C.format,C.type);for(const ve of C.layerUpdates){const je=Yt.data.subarray(ve*se/Yt.data.BYTES_PER_ELEMENT,(ve+1)*se/Yt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Pt,0,0,ve,Yt.width,Yt.height,1,yt,je)}C.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Pt,0,0,0,Yt.width,Yt.height,Ot.depth,yt,Yt.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Pt,Jt,Yt.width,Yt.height,Ot.depth,0,Yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Z?kt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Pt,0,0,0,Yt.width,Yt.height,Ot.depth,yt,qt,Yt.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Pt,Jt,Yt.width,Yt.height,Ot.depth,0,yt,qt,Yt.data)}else{Z&&Ht&&i.texStorage2D(r.TEXTURE_2D,te,Jt,ye[0].width,ye[0].height);for(let Pt=0,Ut=ye.length;Pt<Ut;Pt++)Yt=ye[Pt],C.format!==ki?yt!==null?Z?kt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Pt,0,0,Yt.width,Yt.height,yt,Yt.data):i.compressedTexImage2D(r.TEXTURE_2D,Pt,Jt,Yt.width,Yt.height,0,Yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Z?kt&&i.texSubImage2D(r.TEXTURE_2D,Pt,0,0,Yt.width,Yt.height,yt,qt,Yt.data):i.texImage2D(r.TEXTURE_2D,Pt,Jt,Yt.width,Yt.height,0,yt,qt,Yt.data)}else if(C.isDataArrayTexture)if(Z){if(Ht&&i.texStorage3D(r.TEXTURE_2D_ARRAY,te,Jt,Ot.width,Ot.height,Ot.depth),kt)if(C.layerUpdates.size>0){const Pt=sx(Ot.width,Ot.height,C.format,C.type);for(const Ut of C.layerUpdates){const se=Ot.data.subarray(Ut*Pt/Ot.data.BYTES_PER_ELEMENT,(Ut+1)*Pt/Ot.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Ut,Ot.width,Ot.height,1,yt,qt,se)}C.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Ot.width,Ot.height,Ot.depth,yt,qt,Ot.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Jt,Ot.width,Ot.height,Ot.depth,0,yt,qt,Ot.data);else if(C.isData3DTexture)Z?(Ht&&i.texStorage3D(r.TEXTURE_3D,te,Jt,Ot.width,Ot.height,Ot.depth),kt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Ot.width,Ot.height,Ot.depth,yt,qt,Ot.data)):i.texImage3D(r.TEXTURE_3D,0,Jt,Ot.width,Ot.height,Ot.depth,0,yt,qt,Ot.data);else if(C.isFramebufferTexture){if(Ht)if(Z)i.texStorage2D(r.TEXTURE_2D,te,Jt,Ot.width,Ot.height);else{let Pt=Ot.width,Ut=Ot.height;for(let se=0;se<te;se++)i.texImage2D(r.TEXTURE_2D,se,Jt,Pt,Ut,0,yt,qt,null),Pt>>=1,Ut>>=1}}else if(ye.length>0){if(Z&&Ht){const Pt=ue(ye[0]);i.texStorage2D(r.TEXTURE_2D,te,Jt,Pt.width,Pt.height)}for(let Pt=0,Ut=ye.length;Pt<Ut;Pt++)Yt=ye[Pt],Z?kt&&i.texSubImage2D(r.TEXTURE_2D,Pt,0,0,yt,qt,Yt):i.texImage2D(r.TEXTURE_2D,Pt,Jt,yt,qt,Yt);C.generateMipmaps=!1}else if(Z){if(Ht){const Pt=ue(Ot);i.texStorage2D(r.TEXTURE_2D,te,Jt,Pt.width,Pt.height)}kt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,yt,qt,Ot)}else i.texImage2D(r.TEXTURE_2D,0,Jt,yt,qt,Ot);M(C)&&_(vt),Qt.__version=St.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function k(F,C,st){if(C.image.length!==6)return;const vt=ne(F,C),Nt=C.source;i.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+st);const St=s.get(Nt);if(Nt.version!==St.__version||vt===!0){i.activeTexture(r.TEXTURE0+st);const Qt=Le.getPrimaries(Le.workingColorSpace),Ft=C.colorSpace===_s?null:Le.getPrimaries(C.colorSpace),$t=C.colorSpace===_s||Qt===Ft?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,C.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,C.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,$t);const ee=C.isCompressedTexture||C.image[0].isCompressedTexture,Ot=C.image[0]&&C.image[0].isDataTexture,yt=[];for(let Ut=0;Ut<6;Ut++)!ee&&!Ot?yt[Ut]=T(C.image[Ut],!0,l.maxCubemapSize):yt[Ut]=Ot?C.image[Ut].image:C.image[Ut],yt[Ut]=re(C,yt[Ut]);const qt=yt[0],Jt=u.convert(C.format,C.colorSpace),Yt=u.convert(C.type),ye=w(C.internalFormat,Jt,Yt,C.colorSpace),Z=C.isVideoTexture!==!0,Ht=St.__version===void 0||vt===!0,kt=Nt.dataReady;let te=I(C,qt);Gt(r.TEXTURE_CUBE_MAP,C);let Pt;if(ee){Z&&Ht&&i.texStorage2D(r.TEXTURE_CUBE_MAP,te,ye,qt.width,qt.height);for(let Ut=0;Ut<6;Ut++){Pt=yt[Ut].mipmaps;for(let se=0;se<Pt.length;se++){const ve=Pt[se];C.format!==ki?Jt!==null?Z?kt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,se,0,0,ve.width,ve.height,Jt,ve.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,se,ye,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?kt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,se,0,0,ve.width,ve.height,Jt,Yt,ve.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,se,ye,ve.width,ve.height,0,Jt,Yt,ve.data)}}}else{if(Pt=C.mipmaps,Z&&Ht){Pt.length>0&&te++;const Ut=ue(yt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,te,ye,Ut.width,Ut.height)}for(let Ut=0;Ut<6;Ut++)if(Ot){Z?kt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,0,0,yt[Ut].width,yt[Ut].height,Jt,Yt,yt[Ut].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,ye,yt[Ut].width,yt[Ut].height,0,Jt,Yt,yt[Ut].data);for(let se=0;se<Pt.length;se++){const je=Pt[se].image[Ut].image;Z?kt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,se+1,0,0,je.width,je.height,Jt,Yt,je.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,se+1,ye,je.width,je.height,0,Jt,Yt,je.data)}}else{Z?kt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,0,0,Jt,Yt,yt[Ut]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0,ye,Jt,Yt,yt[Ut]);for(let se=0;se<Pt.length;se++){const ve=Pt[se];Z?kt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,se+1,0,0,Jt,Yt,ve.image[Ut]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,se+1,ye,Jt,Yt,ve.image[Ut])}}}M(C)&&_(r.TEXTURE_CUBE_MAP),St.__version=Nt.version,C.onUpdate&&C.onUpdate(C)}F.__version=C.version}function ft(F,C,st,vt,Nt,St){const Qt=u.convert(st.format,st.colorSpace),Ft=u.convert(st.type),$t=w(st.internalFormat,Qt,Ft,st.colorSpace),ee=s.get(C),Ot=s.get(st);if(Ot.__renderTarget=C,!ee.__hasExternalTextures){const yt=Math.max(1,C.width>>St),qt=Math.max(1,C.height>>St);Nt===r.TEXTURE_3D||Nt===r.TEXTURE_2D_ARRAY?i.texImage3D(Nt,St,$t,yt,qt,C.depth,0,Qt,Ft,null):i.texImage2D(Nt,St,$t,yt,qt,0,Qt,Ft,null)}i.bindFramebuffer(r.FRAMEBUFFER,F),Dt(C)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,vt,Nt,Ot.__webglTexture,0,Ct(C)):(Nt===r.TEXTURE_2D||Nt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&Nt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,vt,Nt,Ot.__webglTexture,St),i.bindFramebuffer(r.FRAMEBUFFER,null)}function xt(F,C,st){if(r.bindRenderbuffer(r.RENDERBUFFER,F),C.depthBuffer){const vt=C.depthTexture,Nt=vt&&vt.isDepthTexture?vt.type:null,St=b(C.stencilBuffer,Nt),Qt=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ft=Ct(C);Dt(C)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ft,St,C.width,C.height):st?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ft,St,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,St,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Qt,r.RENDERBUFFER,F)}else{const vt=C.textures;for(let Nt=0;Nt<vt.length;Nt++){const St=vt[Nt],Qt=u.convert(St.format,St.colorSpace),Ft=u.convert(St.type),$t=w(St.internalFormat,Qt,Ft,St.colorSpace),ee=Ct(C);st&&Dt(C)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ee,$t,C.width,C.height):Dt(C)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ee,$t,C.width,C.height):r.renderbufferStorage(r.RENDERBUFFER,$t,C.width,C.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Mt(F,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(r.FRAMEBUFFER,F),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const vt=s.get(C.depthTexture);vt.__renderTarget=C,(!vt.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),K(C.depthTexture,0);const Nt=vt.__webglTexture,St=Ct(C);if(C.depthTexture.format===Hl)Dt(C)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Nt,0,St):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,Nt,0);else if(C.depthTexture.format===Gl)Dt(C)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Nt,0,St):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,Nt,0);else throw new Error("Unknown depthTexture format")}function At(F){const C=s.get(F),st=F.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==F.depthTexture){const vt=F.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),vt){const Nt=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,vt.removeEventListener("dispose",Nt)};vt.addEventListener("dispose",Nt),C.__depthDisposeCallback=Nt}C.__boundDepthTexture=vt}if(F.depthTexture&&!C.__autoAllocateDepthBuffer){if(st)throw new Error("target.depthTexture not supported in Cube render targets");const vt=F.texture.mipmaps;vt&&vt.length>0?Mt(C.__webglFramebuffer[0],F):Mt(C.__webglFramebuffer,F)}else if(st){C.__webglDepthbuffer=[];for(let vt=0;vt<6;vt++)if(i.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[vt]),C.__webglDepthbuffer[vt]===void 0)C.__webglDepthbuffer[vt]=r.createRenderbuffer(),xt(C.__webglDepthbuffer[vt],F,!1);else{const Nt=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,St=C.__webglDepthbuffer[vt];r.bindRenderbuffer(r.RENDERBUFFER,St),r.framebufferRenderbuffer(r.FRAMEBUFFER,Nt,r.RENDERBUFFER,St)}}else{const vt=F.texture.mipmaps;if(vt&&vt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=r.createRenderbuffer(),xt(C.__webglDepthbuffer,F,!1);else{const Nt=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,St=C.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,St),r.framebufferRenderbuffer(r.FRAMEBUFFER,Nt,r.RENDERBUFFER,St)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Lt(F,C,st){const vt=s.get(F);C!==void 0&&ft(vt.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),st!==void 0&&At(F)}function G(F){const C=F.texture,st=s.get(F),vt=s.get(C);F.addEventListener("dispose",P);const Nt=F.textures,St=F.isWebGLCubeRenderTarget===!0,Qt=Nt.length>1;if(Qt||(vt.__webglTexture===void 0&&(vt.__webglTexture=r.createTexture()),vt.__version=C.version,f.memory.textures++),St){st.__webglFramebuffer=[];for(let Ft=0;Ft<6;Ft++)if(C.mipmaps&&C.mipmaps.length>0){st.__webglFramebuffer[Ft]=[];for(let $t=0;$t<C.mipmaps.length;$t++)st.__webglFramebuffer[Ft][$t]=r.createFramebuffer()}else st.__webglFramebuffer[Ft]=r.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){st.__webglFramebuffer=[];for(let Ft=0;Ft<C.mipmaps.length;Ft++)st.__webglFramebuffer[Ft]=r.createFramebuffer()}else st.__webglFramebuffer=r.createFramebuffer();if(Qt)for(let Ft=0,$t=Nt.length;Ft<$t;Ft++){const ee=s.get(Nt[Ft]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),f.memory.textures++)}if(F.samples>0&&Dt(F)===!1){st.__webglMultisampledFramebuffer=r.createFramebuffer(),st.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let Ft=0;Ft<Nt.length;Ft++){const $t=Nt[Ft];st.__webglColorRenderbuffer[Ft]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,st.__webglColorRenderbuffer[Ft]);const ee=u.convert($t.format,$t.colorSpace),Ot=u.convert($t.type),yt=w($t.internalFormat,ee,Ot,$t.colorSpace,F.isXRRenderTarget===!0),qt=Ct(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,qt,yt,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ft,r.RENDERBUFFER,st.__webglColorRenderbuffer[Ft])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(st.__webglDepthRenderbuffer=r.createRenderbuffer(),xt(st.__webglDepthRenderbuffer,F,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(St){i.bindTexture(r.TEXTURE_CUBE_MAP,vt.__webglTexture),Gt(r.TEXTURE_CUBE_MAP,C);for(let Ft=0;Ft<6;Ft++)if(C.mipmaps&&C.mipmaps.length>0)for(let $t=0;$t<C.mipmaps.length;$t++)ft(st.__webglFramebuffer[Ft][$t],F,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,$t);else ft(st.__webglFramebuffer[Ft],F,C,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ft,0);M(C)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Qt){for(let Ft=0,$t=Nt.length;Ft<$t;Ft++){const ee=Nt[Ft],Ot=s.get(ee);let yt=r.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(yt=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(yt,Ot.__webglTexture),Gt(yt,ee),ft(st.__webglFramebuffer,F,ee,r.COLOR_ATTACHMENT0+Ft,yt,0),M(ee)&&_(yt)}i.unbindTexture()}else{let Ft=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ft=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ft,vt.__webglTexture),Gt(Ft,C),C.mipmaps&&C.mipmaps.length>0)for(let $t=0;$t<C.mipmaps.length;$t++)ft(st.__webglFramebuffer[$t],F,C,r.COLOR_ATTACHMENT0,Ft,$t);else ft(st.__webglFramebuffer,F,C,r.COLOR_ATTACHMENT0,Ft,0);M(C)&&_(Ft),i.unbindTexture()}F.depthBuffer&&At(F)}function Et(F){const C=F.textures;for(let st=0,vt=C.length;st<vt;st++){const Nt=C[st];if(M(Nt)){const St=R(F),Qt=s.get(Nt).__webglTexture;i.bindTexture(St,Qt),_(St),i.unbindTexture()}}}const _t=[],dt=[];function ut(F){if(F.samples>0){if(Dt(F)===!1){const C=F.textures,st=F.width,vt=F.height;let Nt=r.COLOR_BUFFER_BIT;const St=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Qt=s.get(F),Ft=C.length>1;if(Ft)for(let ee=0;ee<C.length;ee++)i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer);const $t=F.texture.mipmaps;$t&&$t.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qt.__webglFramebuffer);for(let ee=0;ee<C.length;ee++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(Nt|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(Nt|=r.STENCIL_BUFFER_BIT)),Ft){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Qt.__webglColorRenderbuffer[ee]);const Ot=s.get(C[ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ot,0)}r.blitFramebuffer(0,0,st,vt,0,0,st,vt,Nt,r.NEAREST),p===!0&&(_t.length=0,dt.length=0,_t.push(r.COLOR_ATTACHMENT0+ee),F.depthBuffer&&F.resolveDepthBuffer===!1&&(_t.push(St),dt.push(St),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,dt)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,_t))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ft)for(let ee=0;ee<C.length;ee++){i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,Qt.__webglColorRenderbuffer[ee]);const Ot=s.get(C[ee]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Qt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,Ot,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Qt.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&p){const C=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[C])}}}function Ct(F){return Math.min(l.maxSamples,F.samples)}function Dt(F){const C=s.get(F);return F.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Bt(F){const C=f.render.frame;v.get(F)!==C&&(v.set(F,C),F.update())}function re(F,C){const st=F.colorSpace,vt=F.format,Nt=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||st!==So&&st!==_s&&(Le.getTransfer(st)===We?(vt!==ki||Nt!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",st)),C}function ue(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(m.width=F.naturalWidth||F.width,m.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(m.width=F.displayWidth,m.height=F.displayHeight):(m.width=F.width,m.height=F.height),m}this.allocateTextureUnit=Q,this.resetTextureUnits=Y,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=N,this.setTextureCube=B,this.rebindTextures=Lt,this.setupRenderTarget=G,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=Dt}function bR(r,t){function i(s,l=_s){let u;const f=Le.getTransfer(l);if(s===qi)return r.UNSIGNED_BYTE;if(s===Dm)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Um)return r.UNSIGNED_SHORT_5_5_5_1;if(s===jx)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Zx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Yx)return r.BYTE;if(s===Wx)return r.SHORT;if(s===Bl)return r.UNSIGNED_SHORT;if(s===Rm)return r.INT;if(s===ir)return r.UNSIGNED_INT;if(s===oa)return r.FLOAT;if(s===Xi)return r.HALF_FLOAT;if(s===Qx)return r.ALPHA;if(s===Kx)return r.RGB;if(s===ki)return r.RGBA;if(s===Hl)return r.DEPTH_COMPONENT;if(s===Gl)return r.DEPTH_STENCIL;if(s===Nm)return r.RED;if(s===Lm)return r.RED_INTEGER;if(s===Jx)return r.RG;if(s===Om)return r.RG_INTEGER;if(s===Pm)return r.RGBA_INTEGER;if(s===Kc||s===Jc||s===$c||s===tf)if(f===We)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Kc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Jc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===$c)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===tf)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Kc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Jc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===$c)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===tf)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Xp||s===qp||s===Yp||s===Wp)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===Xp)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===qp)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Yp)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wp)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jp||s===Zp||s===Qp)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===jp||s===Zp)return f===We?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===Qp)return f===We?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Kp||s===Jp||s===$p||s===tm||s===em||s===nm||s===im||s===am||s===sm||s===rm||s===om||s===lm||s===um||s===cm)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===Kp)return f===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Jp)return f===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===$p)return f===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===tm)return f===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===em)return f===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===nm)return f===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===im)return f===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===am)return f===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===sm)return f===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===rm)return f===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===om)return f===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===lm)return f===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===um)return f===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cm)return f===We?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===fm||s===hm||s===dm)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===fm)return f===We?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===hm)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===dm)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===pm||s===mm||s===gm||s===vm)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===pm)return u.COMPRESSED_RED_RGTC1_EXT;if(s===mm)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===gm)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===vm)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Fl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const AR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wR=`
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

}`;class CR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new dS(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new nn({vertexShader:AR,fragmentShader:wR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new sn(new Ia(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RR extends bo{constructor(t,i){super();const s=this;let l=null,u=1,f=null,d="local-floor",p=1,m=null,v=null,g=null,y=null,x=null,E=null;const T=typeof XRWebGLBinding<"u",M=new CR,_={},R=i.getContextAttributes();let w=null,b=null;const I=[],z=[],P=new zt;let O=null;const U=new si;U.viewport=new Qe;const A=new si;A.viewport=new Qe;const V=[U,A],Y=new Qb;let Q=null,pt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let k=I[tt];return k===void 0&&(k=new _p,I[tt]=k),k.getTargetRaySpace()},this.getControllerGrip=function(tt){let k=I[tt];return k===void 0&&(k=new _p,I[tt]=k),k.getGripSpace()},this.getHand=function(tt){let k=I[tt];return k===void 0&&(k=new _p,I[tt]=k),k.getHandSpace()};function K(tt){const k=z.indexOf(tt.inputSource);if(k===-1)return;const ft=I[k];ft!==void 0&&(ft.update(tt.inputSource,tt.frame,m||f),ft.dispatchEvent({type:tt.type,data:tt.inputSource}))}function W(){l.removeEventListener("select",K),l.removeEventListener("selectstart",K),l.removeEventListener("selectend",K),l.removeEventListener("squeeze",K),l.removeEventListener("squeezestart",K),l.removeEventListener("squeezeend",K),l.removeEventListener("end",W),l.removeEventListener("inputsourceschange",N);for(let tt=0;tt<I.length;tt++){const k=z[tt];k!==null&&(z[tt]=null,I[tt].disconnect(k))}Q=null,pt=null,M.reset();for(const tt in _)delete _[tt];t.setRenderTarget(w),x=null,y=null,g=null,l=null,b=null,J.stop(),s.isPresenting=!1,t.setPixelRatio(O),t.setSize(P.width,P.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){u=tt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){d=tt,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||f},this.setReferenceSpace=function(tt){m=tt},this.getBaseLayer=function(){return y!==null?y:x},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(tt){if(l=tt,l!==null){if(w=t.getRenderTarget(),l.addEventListener("select",K),l.addEventListener("selectstart",K),l.addEventListener("selectend",K),l.addEventListener("squeeze",K),l.addEventListener("squeezestart",K),l.addEventListener("squeezeend",K),l.addEventListener("end",W),l.addEventListener("inputsourceschange",N),R.xrCompatible!==!0&&await i.makeXRCompatible(),O=t.getPixelRatio(),t.getSize(P),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let ft=null,xt=null,Mt=null;R.depth&&(Mt=R.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ft=R.stencil?Gl:Hl,xt=R.stencil?Fl:ir);const At={colorFormat:i.RGBA8,depthFormat:Mt,scaleFactor:u};g=this.getBinding(),y=g.createProjectionLayer(At),l.updateRenderState({layers:[y]}),t.setPixelRatio(1),t.setSize(y.textureWidth,y.textureHeight,!1),b=new Ni(y.textureWidth,y.textureHeight,{format:ki,type:qi,depthTexture:new hS(y.textureWidth,y.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}else{const ft={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:u};x=new XRWebGLLayer(l,i,ft),l.updateRenderState({baseLayer:x}),t.setPixelRatio(1),t.setSize(x.framebufferWidth,x.framebufferHeight,!1),b=new Ni(x.framebufferWidth,x.framebufferHeight,{format:ki,type:qi,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(p),m=null,f=await l.requestReferenceSpace(d),J.setContext(l),J.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function N(tt){for(let k=0;k<tt.removed.length;k++){const ft=tt.removed[k],xt=z.indexOf(ft);xt>=0&&(z[xt]=null,I[xt].disconnect(ft))}for(let k=0;k<tt.added.length;k++){const ft=tt.added[k];let xt=z.indexOf(ft);if(xt===-1){for(let At=0;At<I.length;At++)if(At>=z.length){z.push(ft),xt=At;break}else if(z[At]===null){z[At]=ft,xt=At;break}if(xt===-1)break}const Mt=I[xt];Mt&&Mt.connect(ft)}}const B=new H,$=new H;function ht(tt,k,ft){B.setFromMatrixPosition(k.matrixWorld),$.setFromMatrixPosition(ft.matrixWorld);const xt=B.distanceTo($),Mt=k.projectionMatrix.elements,At=ft.projectionMatrix.elements,Lt=Mt[14]/(Mt[10]-1),G=Mt[14]/(Mt[10]+1),Et=(Mt[9]+1)/Mt[5],_t=(Mt[9]-1)/Mt[5],dt=(Mt[8]-1)/Mt[0],ut=(At[8]+1)/At[0],Ct=Lt*dt,Dt=Lt*ut,Bt=xt/(-dt+ut),re=Bt*-dt;if(k.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(re),tt.translateZ(Bt),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Mt[10]===-1)tt.projectionMatrix.copy(k.projectionMatrix),tt.projectionMatrixInverse.copy(k.projectionMatrixInverse);else{const ue=Lt+Bt,F=G+Bt,C=Ct-re,st=Dt+(xt-re),vt=Et*G/F*ue,Nt=_t*G/F*ue;tt.projectionMatrix.makePerspective(C,st,vt,Nt,ue,F),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function Rt(tt,k){k===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(k.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(l===null)return;let k=tt.near,ft=tt.far;M.texture!==null&&(M.depthNear>0&&(k=M.depthNear),M.depthFar>0&&(ft=M.depthFar)),Y.near=A.near=U.near=k,Y.far=A.far=U.far=ft,(Q!==Y.near||pt!==Y.far)&&(l.updateRenderState({depthNear:Y.near,depthFar:Y.far}),Q=Y.near,pt=Y.far),Y.layers.mask=tt.layers.mask|6,U.layers.mask=Y.layers.mask&3,A.layers.mask=Y.layers.mask&5;const xt=tt.parent,Mt=Y.cameras;Rt(Y,xt);for(let At=0;At<Mt.length;At++)Rt(Mt[At],xt);Mt.length===2?ht(Y,U,A):Y.projectionMatrix.copy(U.projectionMatrix),Gt(tt,Y,xt)};function Gt(tt,k,ft){ft===null?tt.matrix.copy(k.matrixWorld):(tt.matrix.copy(ft.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(k.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(k.projectionMatrix),tt.projectionMatrixInverse.copy(k.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Vl*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(y===null&&x===null))return p},this.setFoveation=function(tt){p=tt,y!==null&&(y.fixedFoveation=tt),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=tt)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(Y)},this.getCameraTexture=function(tt){return _[tt]};let ne=null;function q(tt,k){if(v=k.getViewerPose(m||f),E=k,v!==null){const ft=v.views;x!==null&&(t.setRenderTargetFramebuffer(b,x.framebuffer),t.setRenderTarget(b));let xt=!1;ft.length!==Y.cameras.length&&(Y.cameras.length=0,xt=!0);for(let G=0;G<ft.length;G++){const Et=ft[G];let _t=null;if(x!==null)_t=x.getViewport(Et);else{const ut=g.getViewSubImage(y,Et);_t=ut.viewport,G===0&&(t.setRenderTargetTextures(b,ut.colorTexture,ut.depthStencilTexture),t.setRenderTarget(b))}let dt=V[G];dt===void 0&&(dt=new si,dt.layers.enable(G),dt.viewport=new Qe,V[G]=dt),dt.matrix.fromArray(Et.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(Et.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(_t.x,_t.y,_t.width,_t.height),G===0&&(Y.matrix.copy(dt.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),xt===!0&&Y.cameras.push(dt)}const Mt=l.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){g=s.getBinding();const G=g.getDepthInformation(ft[0]);G&&G.isValid&&G.texture&&M.init(G,l.renderState)}if(Mt&&Mt.includes("camera-access")&&T){t.state.unbindTexture(),g=s.getBinding();for(let G=0;G<ft.length;G++){const Et=ft[G].camera;if(Et){let _t=_[Et];_t||(_t=new dS,_[Et]=_t);const dt=g.getCameraImage(Et);_t.sourceTexture=dt}}}}for(let ft=0;ft<I.length;ft++){const xt=z[ft],Mt=I[ft];xt!==null&&Mt!==void 0&&Mt.update(xt,k,m||f)}ne&&ne(tt,k),k.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:k}),E=null}const J=new bS;J.setAnimationLoop(q),this.setAnimationLoop=function(tt){ne=tt},this.dispose=function(){}}}const Zs=new ri,DR=new He;function UR(r,t){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function s(M,_){_.color.getRGB(M.fogColor.value,oS(r)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,R,w,b){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(M,_):_.isMeshToonMaterial?(u(M,_),g(M,_)):_.isMeshPhongMaterial?(u(M,_),v(M,_)):_.isMeshStandardMaterial?(u(M,_),y(M,_),_.isMeshPhysicalMaterial&&x(M,_,b)):_.isMeshMatcapMaterial?(u(M,_),E(M,_)):_.isMeshDepthMaterial?u(M,_):_.isMeshDistanceMaterial?(u(M,_),T(M,_)):_.isMeshNormalMaterial?u(M,_):_.isLineBasicMaterial?(f(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?p(M,_,R,w):_.isSpriteMaterial?m(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===qn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===qn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const R=t.get(_),w=R.envMap,b=R.envMapRotation;w&&(M.envMap.value=w,Zs.copy(b),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),M.envMapRotation.value.setFromMatrix4(DR.makeRotationFromEuler(Zs)),M.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function f(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function p(M,_,R,w){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*R,M.scale.value=w*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function m(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function v(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function g(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function y(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function x(M,_,R){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===qn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=R.texture,M.transmissionSamplerSize.value.set(R.width,R.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,_){_.matcap&&(M.matcap.value=_.matcap)}function T(M,_){const R=t.get(_).light;M.referencePosition.value.setFromMatrixPosition(R.matrixWorld),M.nearDistance.value=R.shadow.camera.near,M.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function NR(r,t,i,s){let l={},u={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(R,w){const b=w.program;s.uniformBlockBinding(R,b)}function m(R,w){let b=l[R.id];b===void 0&&(E(R),b=v(R),l[R.id]=b,R.addEventListener("dispose",M));const I=w.program;s.updateUBOMapping(R,I);const z=t.render.frame;u[R.id]!==z&&(y(R),u[R.id]=z)}function v(R){const w=g();R.__bindingPointIndex=w;const b=r.createBuffer(),I=R.__size,z=R.usage;return r.bindBuffer(r.UNIFORM_BUFFER,b),r.bufferData(r.UNIFORM_BUFFER,I,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,b),b}function g(){for(let R=0;R<d;R++)if(f.indexOf(R)===-1)return f.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(R){const w=l[R.id],b=R.uniforms,I=R.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let z=0,P=b.length;z<P;z++){const O=Array.isArray(b[z])?b[z]:[b[z]];for(let U=0,A=O.length;U<A;U++){const V=O[U];if(x(V,z,U,I)===!0){const Y=V.__offset,Q=Array.isArray(V.value)?V.value:[V.value];let pt=0;for(let K=0;K<Q.length;K++){const W=Q[K],N=T(W);typeof W=="number"||typeof W=="boolean"?(V.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,Y+pt,V.__data)):W.isMatrix3?(V.__data[0]=W.elements[0],V.__data[1]=W.elements[1],V.__data[2]=W.elements[2],V.__data[3]=0,V.__data[4]=W.elements[3],V.__data[5]=W.elements[4],V.__data[6]=W.elements[5],V.__data[7]=0,V.__data[8]=W.elements[6],V.__data[9]=W.elements[7],V.__data[10]=W.elements[8],V.__data[11]=0):(W.toArray(V.__data,pt),pt+=N.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function x(R,w,b,I){const z=R.value,P=w+"_"+b;if(I[P]===void 0)return typeof z=="number"||typeof z=="boolean"?I[P]=z:I[P]=z.clone(),!0;{const O=I[P];if(typeof z=="number"||typeof z=="boolean"){if(O!==z)return I[P]=z,!0}else if(O.equals(z)===!1)return O.copy(z),!0}return!1}function E(R){const w=R.uniforms;let b=0;const I=16;for(let P=0,O=w.length;P<O;P++){const U=Array.isArray(w[P])?w[P]:[w[P]];for(let A=0,V=U.length;A<V;A++){const Y=U[A],Q=Array.isArray(Y.value)?Y.value:[Y.value];for(let pt=0,K=Q.length;pt<K;pt++){const W=Q[pt],N=T(W),B=b%I,$=B%N.boundary,ht=B+$;b+=$,ht!==0&&I-ht<N.storage&&(b+=I-ht),Y.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=b,b+=N.storage}}}const z=b%I;return z>0&&(b+=I-z),R.__size=b,R.__cache={},this}function T(R){const w={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(w.boundary=4,w.storage=4):R.isVector2?(w.boundary=8,w.storage=8):R.isVector3||R.isColor?(w.boundary=16,w.storage=12):R.isVector4?(w.boundary=16,w.storage=16):R.isMatrix3?(w.boundary=48,w.storage=48):R.isMatrix4?(w.boundary=64,w.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),w}function M(R){const w=R.target;w.removeEventListener("dispose",M);const b=f.indexOf(w.__bindingPointIndex);f.splice(b,1),r.deleteBuffer(l[w.id]),delete l[w.id],delete u[w.id]}function _(){for(const R in l)r.deleteBuffer(l[R]);f=[],l={},u={}}return{bind:p,update:m,dispose:_}}class LR{constructor(t={}){const{canvas:i=LT(),context:s=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:y=!1}=t;this.isWebGLRenderer=!0;let x;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=s.getContextAttributes().alpha}else x=f;const E=new Uint32Array(4),T=new Int32Array(4);let M=null,_=null;const R=[],w=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Pa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let I=!1;this._outputColorSpace=kn;let z=0,P=0,O=null,U=-1,A=null;const V=new Qe,Y=new Qe;let Q=null;const pt=new oe(0);let K=0,W=i.width,N=i.height,B=1,$=null,ht=null;const Rt=new Qe(0,0,W,N),Gt=new Qe(0,0,W,N);let ne=!1;const q=new Fm;let J=!1,tt=!1;const k=new He,ft=new H,xt=new Qe,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function Lt(){return O===null?B:1}let G=s;function Et(L,at){return i.getContext(L,at)}try{const L={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${wm}`),i.addEventListener("webglcontextlost",kt,!1),i.addEventListener("webglcontextrestored",te,!1),i.addEventListener("webglcontextcreationerror",Pt,!1),G===null){const at="webgl2";if(G=Et(at,L),G===null)throw Et(at)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let _t,dt,ut,Ct,Dt,Bt,re,ue,F,C,st,vt,Nt,St,Qt,Ft,$t,ee,Ot,yt,qt,Jt,Yt,ye;function Z(){_t=new kw(G),_t.init(),Jt=new bR(G,_t),dt=new zw(G,_t,t,Jt),ut=new ER(G,_t),dt.reversedDepthBuffer&&y&&ut.buffers.depth.setReversed(!0),Ct=new Yw(G),Dt=new cR,Bt=new TR(G,_t,ut,Dt,dt,Jt,Ct),re=new Bw(b),ue=new Vw(b),F=new Jb(G),Yt=new Ow(G,F),C=new Xw(G,F,Ct,Yt),st=new jw(G,C,F,Ct),Ot=new Ww(G,dt,Bt),Ft=new Iw(Dt),vt=new uR(b,re,ue,_t,dt,Yt,Ft),Nt=new UR(b,Dt),St=new hR,Qt=new _R(_t),ee=new Lw(b,re,ue,ut,st,x,p),$t=new SR(b,st,dt),ye=new NR(G,Ct,dt,ut),yt=new Pw(G,_t,Ct),qt=new qw(G,_t,Ct),Ct.programs=vt.programs,b.capabilities=dt,b.extensions=_t,b.properties=Dt,b.renderLists=St,b.shadowMap=$t,b.state=ut,b.info=Ct}Z();const Ht=new RR(b,G);this.xr=Ht,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const L=_t.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=_t.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(L){L!==void 0&&(B=L,this.setSize(W,N,!1))},this.getSize=function(L){return L.set(W,N)},this.setSize=function(L,at,mt=!0){if(Ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=L,N=at,i.width=Math.floor(L*B),i.height=Math.floor(at*B),mt===!0&&(i.style.width=L+"px",i.style.height=at+"px"),this.setViewport(0,0,L,at)},this.getDrawingBufferSize=function(L){return L.set(W*B,N*B).floor()},this.setDrawingBufferSize=function(L,at,mt){W=L,N=at,B=mt,i.width=Math.floor(L*mt),i.height=Math.floor(at*mt),this.setViewport(0,0,L,at)},this.getCurrentViewport=function(L){return L.copy(V)},this.getViewport=function(L){return L.copy(Rt)},this.setViewport=function(L,at,mt,gt){L.isVector4?Rt.set(L.x,L.y,L.z,L.w):Rt.set(L,at,mt,gt),ut.viewport(V.copy(Rt).multiplyScalar(B).round())},this.getScissor=function(L){return L.copy(Gt)},this.setScissor=function(L,at,mt,gt){L.isVector4?Gt.set(L.x,L.y,L.z,L.w):Gt.set(L,at,mt,gt),ut.scissor(Y.copy(Gt).multiplyScalar(B).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(L){ut.setScissorTest(ne=L)},this.setOpaqueSort=function(L){$=L},this.setTransparentSort=function(L){ht=L},this.getClearColor=function(L){return L.copy(ee.getClearColor())},this.setClearColor=function(){ee.setClearColor(...arguments)},this.getClearAlpha=function(){return ee.getClearAlpha()},this.setClearAlpha=function(){ee.setClearAlpha(...arguments)},this.clear=function(L=!0,at=!0,mt=!0){let gt=0;if(L){let rt=!1;if(O!==null){const It=O.texture.format;rt=It===Pm||It===Om||It===Lm}if(rt){const It=O.texture.type,Wt=It===qi||It===ir||It===Bl||It===Fl||It===Dm||It===Um,Zt=ee.getClearColor(),Vt=ee.getClearAlpha(),ie=Zt.r,de=Zt.g,ce=Zt.b;Wt?(E[0]=ie,E[1]=de,E[2]=ce,E[3]=Vt,G.clearBufferuiv(G.COLOR,0,E)):(T[0]=ie,T[1]=de,T[2]=ce,T[3]=Vt,G.clearBufferiv(G.COLOR,0,T))}else gt|=G.COLOR_BUFFER_BIT}at&&(gt|=G.DEPTH_BUFFER_BIT),mt&&(gt|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(gt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",kt,!1),i.removeEventListener("webglcontextrestored",te,!1),i.removeEventListener("webglcontextcreationerror",Pt,!1),ee.dispose(),St.dispose(),Qt.dispose(),Dt.dispose(),re.dispose(),ue.dispose(),st.dispose(),Yt.dispose(),ye.dispose(),vt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",En),Ht.removeEventListener("sessionend",Bn),fa.stop()};function kt(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),I=!0}function te(){console.log("THREE.WebGLRenderer: Context Restored."),I=!1;const L=Ct.autoReset,at=$t.enabled,mt=$t.autoUpdate,gt=$t.needsUpdate,rt=$t.type;Z(),Ct.autoReset=L,$t.enabled=at,$t.autoUpdate=mt,$t.needsUpdate=gt,$t.type=rt}function Pt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Ut(L){const at=L.target;at.removeEventListener("dispose",Ut),se(at)}function se(L){ve(L),Dt.remove(L)}function ve(L){const at=Dt.get(L).programs;at!==void 0&&(at.forEach(function(mt){vt.releaseProgram(mt)}),L.isShaderMaterial&&vt.releaseShaderCache(L))}this.renderBufferDirect=function(L,at,mt,gt,rt,It){at===null&&(at=Mt);const Wt=rt.isMesh&&rt.matrixWorld.determinant()<0,Zt=Kl(L,at,mt,gt,rt);ut.setMaterial(gt,Wt);let Vt=mt.index,ie=1;if(gt.wireframe===!0){if(Vt=C.getWireframeAttribute(mt),Vt===void 0)return;ie=2}const de=mt.drawRange,ce=mt.attributes.position;let be=de.start*ie,Ve=(de.start+de.count)*ie;It!==null&&(be=Math.max(be,It.start*ie),Ve=Math.min(Ve,(It.start+It.count)*ie)),Vt!==null?(be=Math.max(be,0),Ve=Math.min(Ve,Vt.count)):ce!=null&&(be=Math.max(be,0),Ve=Math.min(Ve,ce.count));const en=Ve-be;if(en<0||en===1/0)return;Yt.setup(rt,gt,Zt,mt,Vt);let Ie,Oe=yt;if(Vt!==null&&(Ie=F.get(Vt),Oe=qt,Oe.setIndex(Ie)),rt.isMesh)gt.wireframe===!0?(ut.setLineWidth(gt.wireframeLinewidth*Lt()),Oe.setMode(G.LINES)):Oe.setMode(G.TRIANGLES);else if(rt.isLine){let fe=gt.linewidth;fe===void 0&&(fe=1),ut.setLineWidth(fe*Lt()),rt.isLineSegments?Oe.setMode(G.LINES):rt.isLineLoop?Oe.setMode(G.LINE_LOOP):Oe.setMode(G.LINE_STRIP)}else rt.isPoints?Oe.setMode(G.POINTS):rt.isSprite&&Oe.setMode(G.TRIANGLES);if(rt.isBatchedMesh)if(rt._multiDrawInstances!==null)kl("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount,rt._multiDrawInstances);else if(_t.get("WEBGL_multi_draw"))Oe.renderMultiDraw(rt._multiDrawStarts,rt._multiDrawCounts,rt._multiDrawCount);else{const fe=rt._multiDrawStarts,Be=rt._multiDrawCounts,Ee=rt._multiDrawCount,Tn=Vt?F.get(Vt).bytesPerElement:1,oi=Dt.get(gt).currentProgram.getUniforms();for(let Pe=0;Pe<Ee;Pe++)oi.setValue(G,"_gl_DrawID",Pe),Oe.render(fe[Pe]/Tn,Be[Pe])}else if(rt.isInstancedMesh)Oe.renderInstances(be,en,rt.count);else if(mt.isInstancedBufferGeometry){const fe=mt._maxInstanceCount!==void 0?mt._maxInstanceCount:1/0,Be=Math.min(mt.instanceCount,fe);Oe.renderInstances(be,en,Be)}else Oe.render(be,en)};function je(L,at,mt){L.transparent===!0&&L.side===_i&&L.forceSinglePass===!1?(L.side=qn,L.needsUpdate=!0,xi(L,at,mt),L.side=ys,L.needsUpdate=!0,xi(L,at,mt),L.side=_i):xi(L,at,mt)}this.compile=function(L,at,mt=null){mt===null&&(mt=L),_=Qt.get(mt),_.init(at),w.push(_),mt.traverseVisible(function(rt){rt.isLight&&rt.layers.test(at.layers)&&(_.pushLight(rt),rt.castShadow&&_.pushShadow(rt))}),L!==mt&&L.traverseVisible(function(rt){rt.isLight&&rt.layers.test(at.layers)&&(_.pushLight(rt),rt.castShadow&&_.pushShadow(rt))}),_.setupLights();const gt=new Set;return L.traverse(function(rt){if(!(rt.isMesh||rt.isPoints||rt.isLine||rt.isSprite))return;const It=rt.material;if(It)if(Array.isArray(It))for(let Wt=0;Wt<It.length;Wt++){const Zt=It[Wt];je(Zt,mt,rt),gt.add(Zt)}else je(It,mt,rt),gt.add(It)}),_=w.pop(),gt},this.compileAsync=function(L,at,mt=null){const gt=this.compile(L,at,mt);return new Promise(rt=>{function It(){if(gt.forEach(function(Wt){Dt.get(Wt).currentProgram.isReady()&&gt.delete(Wt)}),gt.size===0){rt(L);return}setTimeout(It,10)}_t.get("KHR_parallel_shader_compile")!==null?It():setTimeout(It,10)})};let Re=null;function rn(L){Re&&Re(L)}function En(){fa.stop()}function Bn(){fa.start()}const fa=new bS;fa.setAnimationLoop(rn),typeof self<"u"&&fa.setContext(self),this.setAnimationLoop=function(L){Re=L,Ht.setAnimationLoop(L),L===null?fa.stop():fa.start()},Ht.addEventListener("sessionstart",En),Ht.addEventListener("sessionend",Bn),this.render=function(L,at){if(at!==void 0&&at.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),at.parent===null&&at.matrixWorldAutoUpdate===!0&&at.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(at),at=Ht.getCamera()),L.isScene===!0&&L.onBeforeRender(b,L,at,O),_=Qt.get(L,w.length),_.init(at),w.push(_),k.multiplyMatrices(at.projectionMatrix,at.matrixWorldInverse),q.setFromProjectionMatrix(k,la,at.reversedDepth),tt=this.localClippingEnabled,J=Ft.init(this.clippingPlanes,tt),M=St.get(L,R.length),M.init(),R.push(M),Ht.enabled===!0&&Ht.isPresenting===!0){const It=b.xr.getDepthSensingMesh();It!==null&&Ro(It,at,-1/0,b.sortObjects)}Ro(L,at,0,b.sortObjects),M.finish(),b.sortObjects===!0&&M.sort($,ht),At=Ht.enabled===!1||Ht.isPresenting===!1||Ht.hasDepthSensing()===!1,At&&ee.addToRenderList(M,L),this.info.render.frame++,J===!0&&Ft.beginShadows();const mt=_.state.shadowsArray;$t.render(mt,L,at),J===!0&&Ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const gt=M.opaque,rt=M.transmissive;if(_.setupLights(),at.isArrayCamera){const It=at.cameras;if(rt.length>0)for(let Wt=0,Zt=It.length;Wt<Zt;Wt++){const Vt=It[Wt];xs(gt,rt,L,Vt)}At&&ee.render(L);for(let Wt=0,Zt=It.length;Wt<Zt;Wt++){const Vt=It[Wt];Ql(M,L,Vt,Vt.viewport)}}else rt.length>0&&xs(gt,rt,L,at),At&&ee.render(L),Ql(M,L,at);O!==null&&P===0&&(Bt.updateMultisampleRenderTarget(O),Bt.updateRenderTargetMipmap(O)),L.isScene===!0&&L.onAfterRender(b,L,at),Yt.resetDefaultState(),U=-1,A=null,w.pop(),w.length>0?(_=w[w.length-1],J===!0&&Ft.setGlobalState(b.clippingPlanes,_.state.camera)):_=null,R.pop(),R.length>0?M=R[R.length-1]:M=null};function Ro(L,at,mt,gt){if(L.visible===!1)return;if(L.layers.test(at.layers)){if(L.isGroup)mt=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(at);else if(L.isLight)_.pushLight(L),L.castShadow&&_.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||q.intersectsSprite(L)){gt&&xt.setFromMatrixPosition(L.matrixWorld).applyMatrix4(k);const Wt=st.update(L),Zt=L.material;Zt.visible&&M.push(L,Wt,Zt,mt,xt.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||q.intersectsObject(L))){const Wt=st.update(L),Zt=L.material;if(gt&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),xt.copy(L.boundingSphere.center)):(Wt.boundingSphere===null&&Wt.computeBoundingSphere(),xt.copy(Wt.boundingSphere.center)),xt.applyMatrix4(L.matrixWorld).applyMatrix4(k)),Array.isArray(Zt)){const Vt=Wt.groups;for(let ie=0,de=Vt.length;ie<de;ie++){const ce=Vt[ie],be=Zt[ce.materialIndex];be&&be.visible&&M.push(L,Wt,be,mt,xt.z,ce)}}else Zt.visible&&M.push(L,Wt,Zt,mt,xt.z,null)}}const It=L.children;for(let Wt=0,Zt=It.length;Wt<Zt;Wt++)Ro(It[Wt],at,mt,gt)}function Ql(L,at,mt,gt){const rt=L.opaque,It=L.transmissive,Wt=L.transparent;_.setupLightsView(mt),J===!0&&Ft.setGlobalState(b.clippingPlanes,mt),gt&&ut.viewport(V.copy(gt)),rt.length>0&&ha(rt,at,mt),It.length>0&&ha(It,at,mt),Wt.length>0&&ha(Wt,at,mt),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function xs(L,at,mt,gt){if((mt.isScene===!0?mt.overrideMaterial:null)!==null)return;_.state.transmissionRenderTarget[gt.id]===void 0&&(_.state.transmissionRenderTarget[gt.id]=new Ni(1,1,{generateMipmaps:!0,type:_t.has("EXT_color_buffer_half_float")||_t.has("EXT_color_buffer_float")?Xi:qi,minFilter:er,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Le.workingColorSpace}));const It=_.state.transmissionRenderTarget[gt.id],Wt=gt.viewport||V;It.setSize(Wt.z*b.transmissionResolutionScale,Wt.w*b.transmissionResolutionScale);const Zt=b.getRenderTarget(),Vt=b.getActiveCubeFace(),ie=b.getActiveMipmapLevel();b.setRenderTarget(It),b.getClearColor(pt),K=b.getClearAlpha(),K<1&&b.setClearColor(16777215,.5),b.clear(),At&&ee.render(mt);const de=b.toneMapping;b.toneMapping=Pa;const ce=gt.viewport;if(gt.viewport!==void 0&&(gt.viewport=void 0),_.setupLightsView(gt),J===!0&&Ft.setGlobalState(b.clippingPlanes,gt),ha(L,mt,gt),Bt.updateMultisampleRenderTarget(It),Bt.updateRenderTargetMipmap(It),_t.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Ve=0,en=at.length;Ve<en;Ve++){const Ie=at[Ve],Oe=Ie.object,fe=Ie.geometry,Be=Ie.material,Ee=Ie.group;if(Be.side===_i&&Oe.layers.test(gt.layers)){const Tn=Be.side;Be.side=qn,Be.needsUpdate=!0,Ss(Oe,mt,gt,fe,Be,Ee),Be.side=Tn,Be.needsUpdate=!0,be=!0}}be===!0&&(Bt.updateMultisampleRenderTarget(It),Bt.updateRenderTargetMipmap(It))}b.setRenderTarget(Zt,Vt,ie),b.setClearColor(pt,K),ce!==void 0&&(gt.viewport=ce),b.toneMapping=de}function ha(L,at,mt){const gt=at.isScene===!0?at.overrideMaterial:null;for(let rt=0,It=L.length;rt<It;rt++){const Wt=L[rt],Zt=Wt.object,Vt=Wt.geometry,ie=Wt.group;let de=Wt.material;de.allowOverride===!0&&gt!==null&&(de=gt),Zt.layers.test(mt.layers)&&Ss(Zt,at,mt,Vt,de,ie)}}function Ss(L,at,mt,gt,rt,It){L.onBeforeRender(b,at,mt,gt,rt,It),L.modelViewMatrix.multiplyMatrices(mt.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),rt.onBeforeRender(b,at,mt,gt,L,It),rt.transparent===!0&&rt.side===_i&&rt.forceSinglePass===!1?(rt.side=qn,rt.needsUpdate=!0,b.renderBufferDirect(mt,at,gt,rt,L,It),rt.side=ys,rt.needsUpdate=!0,b.renderBufferDirect(mt,at,gt,rt,L,It),rt.side=_i):b.renderBufferDirect(mt,at,gt,rt,L,It),L.onAfterRender(b,at,mt,gt,rt,It)}function xi(L,at,mt){at.isScene!==!0&&(at=Mt);const gt=Dt.get(L),rt=_.state.lights,It=_.state.shadowsArray,Wt=rt.state.version,Zt=vt.getParameters(L,rt.state,It,at,mt),Vt=vt.getProgramCacheKey(Zt);let ie=gt.programs;gt.environment=L.isMeshStandardMaterial?at.environment:null,gt.fog=at.fog,gt.envMap=(L.isMeshStandardMaterial?ue:re).get(L.envMap||gt.environment),gt.envMapRotation=gt.environment!==null&&L.envMap===null?at.environmentRotation:L.envMapRotation,ie===void 0&&(L.addEventListener("dispose",Ut),ie=new Map,gt.programs=ie);let de=ie.get(Vt);if(de!==void 0){if(gt.currentProgram===de&&gt.lightsStateVersion===Wt)return Ba(L,Zt),de}else Zt.uniforms=vt.getUniforms(L),L.onBeforeCompile(Zt,b),de=vt.acquireProgram(Zt,Vt),ie.set(Vt,de),gt.uniforms=Zt.uniforms;const ce=gt.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(ce.clippingPlanes=Ft.uniform),Ba(L,Zt),gt.needsLights=Jl(L),gt.lightsStateVersion=Wt,gt.needsLights&&(ce.ambientLightColor.value=rt.state.ambient,ce.lightProbe.value=rt.state.probe,ce.directionalLights.value=rt.state.directional,ce.directionalLightShadows.value=rt.state.directionalShadow,ce.spotLights.value=rt.state.spot,ce.spotLightShadows.value=rt.state.spotShadow,ce.rectAreaLights.value=rt.state.rectArea,ce.ltc_1.value=rt.state.rectAreaLTC1,ce.ltc_2.value=rt.state.rectAreaLTC2,ce.pointLights.value=rt.state.point,ce.pointLightShadows.value=rt.state.pointShadow,ce.hemisphereLights.value=rt.state.hemi,ce.directionalShadowMap.value=rt.state.directionalShadowMap,ce.directionalShadowMatrix.value=rt.state.directionalShadowMatrix,ce.spotShadowMap.value=rt.state.spotShadowMap,ce.spotLightMatrix.value=rt.state.spotLightMatrix,ce.spotLightMap.value=rt.state.spotLightMap,ce.pointShadowMap.value=rt.state.pointShadowMap,ce.pointShadowMatrix.value=rt.state.pointShadowMatrix),gt.currentProgram=de,gt.uniformsList=null,de}function Ms(L){if(L.uniformsList===null){const at=L.currentProgram.getUniforms();L.uniformsList=ef.seqWithValue(at.seq,L.uniforms)}return L.uniformsList}function Ba(L,at){const mt=Dt.get(L);mt.outputColorSpace=at.outputColorSpace,mt.batching=at.batching,mt.batchingColor=at.batchingColor,mt.instancing=at.instancing,mt.instancingColor=at.instancingColor,mt.instancingMorph=at.instancingMorph,mt.skinning=at.skinning,mt.morphTargets=at.morphTargets,mt.morphNormals=at.morphNormals,mt.morphColors=at.morphColors,mt.morphTargetsCount=at.morphTargetsCount,mt.numClippingPlanes=at.numClippingPlanes,mt.numIntersection=at.numClipIntersection,mt.vertexAlphas=at.vertexAlphas,mt.vertexTangents=at.vertexTangents,mt.toneMapping=at.toneMapping}function Kl(L,at,mt,gt,rt){at.isScene!==!0&&(at=Mt),Bt.resetTextureUnits();const It=at.fog,Wt=gt.isMeshStandardMaterial?at.environment:null,Zt=O===null?b.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:So,Vt=(gt.isMeshStandardMaterial?ue:re).get(gt.envMap||Wt),ie=gt.vertexColors===!0&&!!mt.attributes.color&&mt.attributes.color.itemSize===4,de=!!mt.attributes.tangent&&(!!gt.normalMap||gt.anisotropy>0),ce=!!mt.morphAttributes.position,be=!!mt.morphAttributes.normal,Ve=!!mt.morphAttributes.color;let en=Pa;gt.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(en=b.toneMapping);const Ie=mt.morphAttributes.position||mt.morphAttributes.normal||mt.morphAttributes.color,Oe=Ie!==void 0?Ie.length:0,fe=Dt.get(gt),Be=_.state.lights;if(J===!0&&(tt===!0||L!==A)){const un=L===A&&gt.id===U;Ft.setState(gt,L,un)}let Ee=!1;gt.version===fe.__version?(fe.needsLights&&fe.lightsStateVersion!==Be.state.version||fe.outputColorSpace!==Zt||rt.isBatchedMesh&&fe.batching===!1||!rt.isBatchedMesh&&fe.batching===!0||rt.isBatchedMesh&&fe.batchingColor===!0&&rt.colorTexture===null||rt.isBatchedMesh&&fe.batchingColor===!1&&rt.colorTexture!==null||rt.isInstancedMesh&&fe.instancing===!1||!rt.isInstancedMesh&&fe.instancing===!0||rt.isSkinnedMesh&&fe.skinning===!1||!rt.isSkinnedMesh&&fe.skinning===!0||rt.isInstancedMesh&&fe.instancingColor===!0&&rt.instanceColor===null||rt.isInstancedMesh&&fe.instancingColor===!1&&rt.instanceColor!==null||rt.isInstancedMesh&&fe.instancingMorph===!0&&rt.morphTexture===null||rt.isInstancedMesh&&fe.instancingMorph===!1&&rt.morphTexture!==null||fe.envMap!==Vt||gt.fog===!0&&fe.fog!==It||fe.numClippingPlanes!==void 0&&(fe.numClippingPlanes!==Ft.numPlanes||fe.numIntersection!==Ft.numIntersection)||fe.vertexAlphas!==ie||fe.vertexTangents!==de||fe.morphTargets!==ce||fe.morphNormals!==be||fe.morphColors!==Ve||fe.toneMapping!==en||fe.morphTargetsCount!==Oe)&&(Ee=!0):(Ee=!0,fe.__version=gt.version);let Tn=fe.currentProgram;Ee===!0&&(Tn=xi(gt,at,rt));let oi=!1,Pe=!1,Fa=!1;const Je=Tn.getUniforms(),Wn=fe.uniforms;if(ut.useProgram(Tn.program)&&(oi=!0,Pe=!0,Fa=!0),gt.id!==U&&(U=gt.id,Pe=!0),oi||A!==L){ut.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Je.setValue(G,"projectionMatrix",L.projectionMatrix),Je.setValue(G,"viewMatrix",L.matrixWorldInverse);const Fn=Je.map.cameraPosition;Fn!==void 0&&Fn.setValue(G,ft.setFromMatrixPosition(L.matrixWorld)),dt.logarithmicDepthBuffer&&Je.setValue(G,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(gt.isMeshPhongMaterial||gt.isMeshToonMaterial||gt.isMeshLambertMaterial||gt.isMeshBasicMaterial||gt.isMeshStandardMaterial||gt.isShaderMaterial)&&Je.setValue(G,"isOrthographic",L.isOrthographicCamera===!0),A!==L&&(A=L,Pe=!0,Fa=!0)}if(rt.isSkinnedMesh){Je.setOptional(G,rt,"bindMatrix"),Je.setOptional(G,rt,"bindMatrixInverse");const un=rt.skeleton;un&&(un.boneTexture===null&&un.computeBoneTexture(),Je.setValue(G,"boneTexture",un.boneTexture,Bt))}rt.isBatchedMesh&&(Je.setOptional(G,rt,"batchingTexture"),Je.setValue(G,"batchingTexture",rt._matricesTexture,Bt),Je.setOptional(G,rt,"batchingIdTexture"),Je.setValue(G,"batchingIdTexture",rt._indirectTexture,Bt),Je.setOptional(G,rt,"batchingColorTexture"),rt._colorsTexture!==null&&Je.setValue(G,"batchingColorTexture",rt._colorsTexture,Bt));const mn=mt.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&Ot.update(rt,mt,Tn),(Pe||fe.receiveShadow!==rt.receiveShadow)&&(fe.receiveShadow=rt.receiveShadow,Je.setValue(G,"receiveShadow",rt.receiveShadow)),gt.isMeshGouraudMaterial&&gt.envMap!==null&&(Wn.envMap.value=Vt,Wn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),gt.isMeshStandardMaterial&&gt.envMap===null&&at.environment!==null&&(Wn.envMapIntensity.value=at.environmentIntensity),Pe&&(Je.setValue(G,"toneMappingExposure",b.toneMappingExposure),fe.needsLights&&yf(Wn,Fa),It&&gt.fog===!0&&Nt.refreshFogUniforms(Wn,It),Nt.refreshMaterialUniforms(Wn,gt,B,N,_.state.transmissionRenderTarget[L.id]),ef.upload(G,Ms(fe),Wn,Bt)),gt.isShaderMaterial&&gt.uniformsNeedUpdate===!0&&(ef.upload(G,Ms(fe),Wn,Bt),gt.uniformsNeedUpdate=!1),gt.isSpriteMaterial&&Je.setValue(G,"center",rt.center),Je.setValue(G,"modelViewMatrix",rt.modelViewMatrix),Je.setValue(G,"normalMatrix",rt.normalMatrix),Je.setValue(G,"modelMatrix",rt.matrixWorld),gt.isShaderMaterial||gt.isRawShaderMaterial){const un=gt.uniformsGroups;for(let Fn=0,cr=un.length;Fn<cr;Fn++){const Wi=un[Fn];ye.update(Wi,Tn),ye.bind(Wi,Tn)}}return Tn}function yf(L,at){L.ambientLightColor.needsUpdate=at,L.lightProbe.needsUpdate=at,L.directionalLights.needsUpdate=at,L.directionalLightShadows.needsUpdate=at,L.pointLights.needsUpdate=at,L.pointLightShadows.needsUpdate=at,L.spotLights.needsUpdate=at,L.spotLightShadows.needsUpdate=at,L.rectAreaLights.needsUpdate=at,L.hemisphereLights.needsUpdate=at}function Jl(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(L,at,mt){const gt=Dt.get(L);gt.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,gt.__autoAllocateDepthBuffer===!1&&(gt.__useRenderToTexture=!1),Dt.get(L.texture).__webglTexture=at,Dt.get(L.depthTexture).__webglTexture=gt.__autoAllocateDepthBuffer?void 0:mt,gt.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,at){const mt=Dt.get(L);mt.__webglFramebuffer=at,mt.__useDefaultFramebuffer=at===void 0};const Do=G.createFramebuffer();this.setRenderTarget=function(L,at=0,mt=0){O=L,z=at,P=mt;let gt=!0,rt=null,It=!1,Wt=!1;if(L){const Vt=Dt.get(L);if(Vt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(G.FRAMEBUFFER,null),gt=!1;else if(Vt.__webglFramebuffer===void 0)Bt.setupRenderTarget(L);else if(Vt.__hasExternalTextures)Bt.rebindTextures(L,Dt.get(L.texture).__webglTexture,Dt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const ce=L.depthTexture;if(Vt.__boundDepthTexture!==ce){if(ce!==null&&Dt.has(ce)&&(L.width!==ce.image.width||L.height!==ce.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Bt.setupDepthRenderbuffer(L)}}const ie=L.texture;(ie.isData3DTexture||ie.isDataArrayTexture||ie.isCompressedArrayTexture)&&(Wt=!0);const de=Dt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(de[at])?rt=de[at][mt]:rt=de[at],It=!0):L.samples>0&&Bt.useMultisampledRTT(L)===!1?rt=Dt.get(L).__webglMultisampledFramebuffer:Array.isArray(de)?rt=de[mt]:rt=de,V.copy(L.viewport),Y.copy(L.scissor),Q=L.scissorTest}else V.copy(Rt).multiplyScalar(B).floor(),Y.copy(Gt).multiplyScalar(B).floor(),Q=ne;if(mt!==0&&(rt=Do),ut.bindFramebuffer(G.FRAMEBUFFER,rt)&&gt&&ut.drawBuffers(L,rt),ut.viewport(V),ut.scissor(Y),ut.setScissorTest(Q),It){const Vt=Dt.get(L.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+at,Vt.__webglTexture,mt)}else if(Wt){const Vt=at;for(let ie=0;ie<L.textures.length;ie++){const de=Dt.get(L.textures[ie]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+ie,de.__webglTexture,mt,Vt)}}else if(L!==null&&mt!==0){const Vt=Dt.get(L.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Vt.__webglTexture,mt)}U=-1},this.readRenderTargetPixels=function(L,at,mt,gt,rt,It,Wt,Zt=0){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=Dt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Wt!==void 0&&(Vt=Vt[Wt]),Vt){ut.bindFramebuffer(G.FRAMEBUFFER,Vt);try{const ie=L.textures[Zt],de=ie.format,ce=ie.type;if(!dt.textureFormatReadable(de)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}at>=0&&at<=L.width-gt&&mt>=0&&mt<=L.height-rt&&(L.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Zt),G.readPixels(at,mt,gt,rt,Jt.convert(de),Jt.convert(ce),It))}finally{const ie=O!==null?Dt.get(O).__webglFramebuffer:null;ut.bindFramebuffer(G.FRAMEBUFFER,ie)}}},this.readRenderTargetPixelsAsync=async function(L,at,mt,gt,rt,It,Wt,Zt=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=Dt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Wt!==void 0&&(Vt=Vt[Wt]),Vt)if(at>=0&&at<=L.width-gt&&mt>=0&&mt<=L.height-rt){ut.bindFramebuffer(G.FRAMEBUFFER,Vt);const ie=L.textures[Zt],de=ie.format,ce=ie.type;if(!dt.textureFormatReadable(de))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const be=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,be),G.bufferData(G.PIXEL_PACK_BUFFER,It.byteLength,G.STREAM_READ),L.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Zt),G.readPixels(at,mt,gt,rt,Jt.convert(de),Jt.convert(ce),0);const Ve=O!==null?Dt.get(O).__webglFramebuffer:null;ut.bindFramebuffer(G.FRAMEBUFFER,Ve);const en=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await OT(G,en,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,be),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,It),G.deleteBuffer(be),G.deleteSync(en),It}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,at=null,mt=0){const gt=Math.pow(2,-mt),rt=Math.floor(L.image.width*gt),It=Math.floor(L.image.height*gt),Wt=at!==null?at.x:0,Zt=at!==null?at.y:0;Bt.setTexture2D(L,0),G.copyTexSubImage2D(G.TEXTURE_2D,mt,0,0,Wt,Zt,rt,It),ut.unbindTexture()};const Es=G.createFramebuffer(),xf=G.createFramebuffer();this.copyTextureToTexture=function(L,at,mt=null,gt=null,rt=0,It=null){It===null&&(rt!==0?(kl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),It=rt,rt=0):It=0);let Wt,Zt,Vt,ie,de,ce,be,Ve,en;const Ie=L.isCompressedTexture?L.mipmaps[It]:L.image;if(mt!==null)Wt=mt.max.x-mt.min.x,Zt=mt.max.y-mt.min.y,Vt=mt.isBox3?mt.max.z-mt.min.z:1,ie=mt.min.x,de=mt.min.y,ce=mt.isBox3?mt.min.z:0;else{const mn=Math.pow(2,-rt);Wt=Math.floor(Ie.width*mn),Zt=Math.floor(Ie.height*mn),L.isDataArrayTexture?Vt=Ie.depth:L.isData3DTexture?Vt=Math.floor(Ie.depth*mn):Vt=1,ie=0,de=0,ce=0}gt!==null?(be=gt.x,Ve=gt.y,en=gt.z):(be=0,Ve=0,en=0);const Oe=Jt.convert(at.format),fe=Jt.convert(at.type);let Be;at.isData3DTexture?(Bt.setTexture3D(at,0),Be=G.TEXTURE_3D):at.isDataArrayTexture||at.isCompressedArrayTexture?(Bt.setTexture2DArray(at,0),Be=G.TEXTURE_2D_ARRAY):(Bt.setTexture2D(at,0),Be=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,at.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,at.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,at.unpackAlignment);const Ee=G.getParameter(G.UNPACK_ROW_LENGTH),Tn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),oi=G.getParameter(G.UNPACK_SKIP_PIXELS),Pe=G.getParameter(G.UNPACK_SKIP_ROWS),Fa=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ie.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Ie.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,ie),G.pixelStorei(G.UNPACK_SKIP_ROWS,de),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ce);const Je=L.isDataArrayTexture||L.isData3DTexture,Wn=at.isDataArrayTexture||at.isData3DTexture;if(L.isDepthTexture){const mn=Dt.get(L),un=Dt.get(at),Fn=Dt.get(mn.__renderTarget),cr=Dt.get(un.__renderTarget);ut.bindFramebuffer(G.READ_FRAMEBUFFER,Fn.__webglFramebuffer),ut.bindFramebuffer(G.DRAW_FRAMEBUFFER,cr.__webglFramebuffer);for(let Wi=0;Wi<Vt;Wi++)Je&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Dt.get(L).__webglTexture,rt,ce+Wi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Dt.get(at).__webglTexture,It,en+Wi)),G.blitFramebuffer(ie,de,Wt,Zt,be,Ve,Wt,Zt,G.DEPTH_BUFFER_BIT,G.NEAREST);ut.bindFramebuffer(G.READ_FRAMEBUFFER,null),ut.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(rt!==0||L.isRenderTargetTexture||Dt.has(L)){const mn=Dt.get(L),un=Dt.get(at);ut.bindFramebuffer(G.READ_FRAMEBUFFER,Es),ut.bindFramebuffer(G.DRAW_FRAMEBUFFER,xf);for(let Fn=0;Fn<Vt;Fn++)Je?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,mn.__webglTexture,rt,ce+Fn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,mn.__webglTexture,rt),Wn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,un.__webglTexture,It,en+Fn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,un.__webglTexture,It),rt!==0?G.blitFramebuffer(ie,de,Wt,Zt,be,Ve,Wt,Zt,G.COLOR_BUFFER_BIT,G.NEAREST):Wn?G.copyTexSubImage3D(Be,It,be,Ve,en+Fn,ie,de,Wt,Zt):G.copyTexSubImage2D(Be,It,be,Ve,ie,de,Wt,Zt);ut.bindFramebuffer(G.READ_FRAMEBUFFER,null),ut.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Wn?L.isDataTexture||L.isData3DTexture?G.texSubImage3D(Be,It,be,Ve,en,Wt,Zt,Vt,Oe,fe,Ie.data):at.isCompressedArrayTexture?G.compressedTexSubImage3D(Be,It,be,Ve,en,Wt,Zt,Vt,Oe,Ie.data):G.texSubImage3D(Be,It,be,Ve,en,Wt,Zt,Vt,Oe,fe,Ie):L.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,It,be,Ve,Wt,Zt,Oe,fe,Ie.data):L.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,It,be,Ve,Ie.width,Ie.height,Oe,Ie.data):G.texSubImage2D(G.TEXTURE_2D,It,be,Ve,Wt,Zt,Oe,fe,Ie);G.pixelStorei(G.UNPACK_ROW_LENGTH,Ee),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Tn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,oi),G.pixelStorei(G.UNPACK_SKIP_ROWS,Pe),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Fa),It===0&&at.generateMipmaps&&G.generateMipmap(Be),ut.unbindTexture()},this.initRenderTarget=function(L){Dt.get(L).__webglFramebuffer===void 0&&Bt.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?Bt.setTextureCube(L,0):L.isData3DTexture?Bt.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?Bt.setTexture2DArray(L,0):Bt.setTexture2D(L,0),ut.unbindTexture()},this.resetState=function(){z=0,P=0,O=null,ut.reset(),Yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return la}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Le._getDrawingBufferColorSpace(t),i.unpackColorSpace=Le._getUnpackColorSpace()}}const nf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Co{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const OR=new Zm(-1,1,1,-1,0,1);class PR extends pn{constructor(){super(),this.setAttribute("position",new Ge([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ge([0,2,0,0,2,0],2))}}const zR=new PR;class Km{constructor(t){this._mesh=new sn(zR,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,OR)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class IR extends Co{constructor(t,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,t instanceof nn?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Xl.clone(t.uniforms),this.material=new nn({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this._fsQuad=new Km(this.material)}render(t,i,s){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=s.texture),this._fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Rx extends Co{constructor(t,i){super(),this.scene=t,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,i,s){const l=t.getContext(),u=t.state;u.buffers.color.setMask(!1),u.buffers.depth.setMask(!1),u.buffers.color.setLocked(!0),u.buffers.depth.setLocked(!0);let f,d;this.inverse?(f=0,d=1):(f=1,d=0),u.buffers.stencil.setTest(!0),u.buffers.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),u.buffers.stencil.setFunc(l.ALWAYS,f,4294967295),u.buffers.stencil.setClear(d),u.buffers.stencil.setLocked(!0),t.setRenderTarget(s),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),u.buffers.color.setLocked(!1),u.buffers.depth.setLocked(!1),u.buffers.color.setMask(!0),u.buffers.depth.setMask(!0),u.buffers.stencil.setLocked(!1),u.buffers.stencil.setFunc(l.EQUAL,1,4294967295),u.buffers.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),u.buffers.stencil.setLocked(!0)}}class BR extends Co{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class FR{constructor(t,i){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),i===void 0){const s=t.getSize(new zt);this._width=s.width,this._height=s.height,i=new Ni(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Xi}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new IR(nf),this.copyPass.material.blending=Oa,this.clock=new TS}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,i){this.passes.splice(i,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const i=this.passes.indexOf(t);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(t){for(let i=t+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const i=this.renderer.getRenderTarget();let s=!1;for(let l=0,u=this.passes.length;l<u;l++){const f=this.passes[l];if(f.enabled!==!1){if(f.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(l),f.render(this.renderer,this.writeBuffer,this.readBuffer,t,s),f.needsSwap){if(s){const d=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),p.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}Rx!==void 0&&(f instanceof Rx?s=!0:f instanceof BR&&(s=!1))}}this.renderer.setRenderTarget(i)}reset(t){if(t===void 0){const i=this.renderer.getSize(new zt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,i){this._width=t,this._height=i;const s=this._width*this._pixelRatio,l=this._height*this._pixelRatio;this.renderTarget1.setSize(s,l),this.renderTarget2.setSize(s,l);for(let u=0;u<this.passes.length;u++)this.passes[u].setSize(s,l)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class HR extends Co{constructor(t,i,s=null,l=null,u=null){super(),this.scene=t,this.camera=i,this.overrideMaterial=s,this.clearColor=l,this.clearAlpha=u,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new oe}render(t,i,s){const l=t.autoClear;t.autoClear=!1;let u,f;this.overrideMaterial!==null&&(f=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(u=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:s),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(u),this.overrideMaterial!==null&&(this.scene.overrideMaterial=f),t.autoClear=l}}const GR={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new oe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class To extends Co{constructor(t,i=1,s,l){super(),this.strength=i,this.radius=s,this.threshold=l,this.resolution=t!==void 0?new zt(t.x,t.y):new zt(256,256),this.clearColor=new oe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let u=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);this.renderTargetBright=new Ni(u,f,{type:Xi}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let v=0;v<this.nMips;v++){const g=new Ni(u,f,{type:Xi});g.texture.name="UnrealBloomPass.h"+v,g.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(g);const y=new Ni(u,f,{type:Xi});y.texture.name="UnrealBloomPass.v"+v,y.texture.generateMipmaps=!1,this.renderTargetsVertical.push(y),u=Math.round(u/2),f=Math.round(f/2)}const d=GR;this.highPassUniforms=Xl.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=l,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new nn({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const p=[3,5,7,9,11];u=Math.round(this.resolution.x/2),f=Math.round(this.resolution.y/2);for(let v=0;v<this.nMips;v++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[v])),this.separableBlurMaterials[v].uniforms.invSize.value=new zt(1/u,1/f),u=Math.round(u/2),f=Math.round(f/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const m=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=m,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=Xl.clone(nf.uniforms),this.blendMaterial=new nn({uniforms:this.copyUniforms,vertexShader:nf.vertexShader,fragmentShader:nf.fragmentShader,blending:nr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new oe,this._oldClearAlpha=1,this._basic=new ar,this._fsQuad=new Km(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(t,i){let s=Math.round(t/2),l=Math.round(i/2);this.renderTargetBright.setSize(s,l);for(let u=0;u<this.nMips;u++)this.renderTargetsHorizontal[u].setSize(s,l),this.renderTargetsVertical[u].setSize(s,l),this.separableBlurMaterials[u].uniforms.invSize.value=new zt(1/s,1/l),s=Math.round(s/2),l=Math.round(l/2)}render(t,i,s,l,u){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();const f=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),u&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=s.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=s.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let d=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[p].uniforms.direction.value=To.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[p]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=To.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[p]),t.clear(),this._fsQuad.render(t),d=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,u&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(s),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=f}_getSeparableBlurMaterial(t){const i=[];for(let s=0;s<t;s++)i.push(.39894*Math.exp(-.5*s*s/(t*t))/t);return new nn({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new zt(.5,.5)},direction:{value:new zt(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`varying vec2 vUv;
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
				}`})}}To.BlurDirectionX=new zt(1,0);To.BlurDirectionY=new zt(0,1);const jc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class VR extends Co{constructor(){super(),this.uniforms=Xl.clone(jc.uniforms),this.material=new Xb({name:jc.name,uniforms:this.uniforms,vertexShader:jc.vertexShader,fragmentShader:jc.fragmentShader}),this._fsQuad=new Km(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,i,s){this.uniforms.tDiffuse.value=s.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Le.getTransfer(this._outputColorSpace)===We&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fx?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Hx?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Gx?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Cm?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===kx?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Xx?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Vx&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(i),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this._fsQuad.render(t))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}const Zc=(r,t,i)=>Math.min(i,Math.max(t,r)),Qc=(r,t,i,s)=>t+(r-t)*Math.exp(-i*s),DS=new Set(["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowLeft","ArrowDown","ArrowRight"]);class kR{constructor(){he(this,"shipQuaternion",new Xn);he(this,"lookQuaternion",new Xn);he(this,"position",new H);he(this,"yaw",0);he(this,"pitch",0);he(this,"yawVelocity",0);he(this,"pitchVelocity",0);he(this,"speed",0);he(this,"lookYaw",0);he(this,"lookPitch",0);he(this,"lookTargetYaw",0);he(this,"lookTargetPitch",0);he(this,"touchX",0);he(this,"touchY",0);he(this,"touchSteering",!1);he(this,"keys",new Set);he(this,"elapsed",0);he(this,"lastContext","");he(this,"euler",new ri(0,0,0,"YXZ"));he(this,"forward",new H)}key(t,i){DS.has(t)&&(i?this.touchSteering||this.keys.add(t):this.keys.delete(t))}steerTouch(t,i,s){this.touchSteering=s,this.keys.clear();const l=Math.hypot(t,i),u=s?Zc((l-.1)/.9,0,1):0;this.touchX=l?t/l*u:0,this.touchY=l?i/l*u:0}look(t,i,s,l){if(l.paused||l.blocked)return;const u=s?l.touchSensitivity:l.sensitivity,f=this.lookTargetYaw-Zc(t,-.2,.2)*u*1.6*(!s&&l.invertMouseX?-1:1);this.lookTargetYaw=Math.atan2(Math.sin(f),Math.cos(f)),this.lookTargetPitch=Zc(this.lookTargetPitch-Zc(i,-.2,.2)*u*1.6*(!s&&l.invertMouseY?-1:1),-1.48,1.48)}centerLook(){this.lookTargetYaw=this.lookTargetPitch=0}reset(t=!1){this.keys.clear(),this.steerTouch(0,0,!1),t&&(this.yawVelocity=this.pitchVelocity=0,this.lookTargetYaw=this.lookYaw,this.lookTargetPitch=this.lookPitch)}step(t,i){const s=`${i.mode}/${i.paused}/${i.started}/${i.blocked}`;if(this.lastContext&&s!==this.lastContext&&this.reset(i.paused||i.blocked),this.lastContext=s,!Number.isFinite(t)||t<=0||t>.25||i.paused)return;const l=Math.min(t,.1);this.elapsed+=l;const u=i.mode==="Manual Flight"&&i.started&&!i.blocked;let f=0,d=0;if(u){f=this.touchSteering?this.touchX:Number(this.keys.has("KeyD")||this.keys.has("ArrowRight"))-Number(this.keys.has("KeyA")||this.keys.has("ArrowLeft")),d=this.touchSteering?this.touchY:Number(this.keys.has("KeyS")||this.keys.has("ArrowDown"))-Number(this.keys.has("KeyW")||this.keys.has("ArrowUp"));const R=Math.max(1,Math.hypot(f,d));f/=R,d/=R}const p=i.reduced?.45:1,m=this.touchSteering?i.touchSensitivity:i.sensitivity,v=i.started&&i.mode!=="Manual Flight"&&!i.blocked&&!i.reduced?i.motion*(i.mode==="Meditation"?.002:.006):0,g=u?-f*.22*m*p:Math.sin(this.elapsed*.055)*v,y=u?-d*.16*m*p:Math.sin(this.elapsed*.08)*v*.3,x=3,E=(1-Math.exp(-x*l))/x;this.yaw+=g*l+(this.yawVelocity-g)*E,this.pitch+=y*l+(this.pitchVelocity-y)*E,this.yawVelocity=Qc(this.yawVelocity,g,x,l),this.pitchVelocity=Qc(this.pitchVelocity,y,x,l),this.pitch=Math.atan2(Math.sin(this.pitch),Math.cos(this.pitch)),this.yaw=Math.atan2(Math.sin(this.yaw),Math.cos(this.yaw)),this.shipQuaternion.setFromEuler(this.euler.set(this.pitch,this.yaw,0,"YXZ"));const T=Math.atan2(Math.sin(this.lookTargetYaw-this.lookYaw),Math.cos(this.lookTargetYaw-this.lookYaw));this.lookYaw+=T*(1-Math.exp(-6*l)),this.lookYaw=Math.atan2(Math.sin(this.lookYaw),Math.cos(this.lookYaw)),this.lookPitch=Qc(this.lookPitch,this.lookTargetPitch,6,l),this.lookQuaternion.setFromEuler(this.euler.set(this.lookPitch,this.lookYaw,0,"YXZ"));const M=i.started?Math.max(0,i.speed)*(i.mode==="Meditation"?.15:1)*(i.reduced?.3:1):2,_=M*l+(this.speed-M)*(1-Math.exp(-.8*l))/.8;this.speed=Qc(this.speed,M,.8,l),this.forward.set(0,0,-1).applyQuaternion(this.shipQuaternion),this.position.addScaledVector(this.forward,_)}}function XR(r,t,i,s){let l=null,u=null,f="";const d=[],p=(_,R,w,b)=>{_.addEventListener(R,w,b),d.push(()=>_.removeEventListener(R,w,b))},m=()=>!s().paused&&!s().blocked&&document.visibilityState!=="hidden",v=()=>m()&&s().started&&s().mode==="Manual Flight",g=(_,R)=>{t.style.setProperty("--stick-x",`${_*34}px`),t.style.setProperty("--stick-y",`${R*34}px`)},y=()=>{const _=l;l=null,_&&r.hasPointerCapture(_.id)&&r.releasePointerCapture(_.id)},x=()=>{const _=u;u=null,i.steerTouch(0,0,!1),g(0,0),_!==null&&t.hasPointerCapture(_)&&t.releasePointerCapture(_)},E=()=>{y(),x(),i.reset(!0)};p(r,"pointerdown",(_=>{!m()||l||_.pointerType==="mouse"&&(_.button!==0||u!==null)||(_.preventDefault(),document.activeElement instanceof HTMLElement&&document.activeElement.blur(),l={id:_.pointerId,type:_.pointerType,x:_.clientX,y:_.clientY},r.setPointerCapture(_.pointerId))})),p(r,"pointermove",(_=>{if((l==null?void 0:l.id)!==_.pointerId)return;if(!m()||_.pointerType==="mouse"&&!(_.buttons&1)){y();return}_.preventDefault();const R=Math.max(240,Math.min(r.clientWidth,r.clientHeight));i.look((_.clientX-l.x)/R,(_.clientY-l.y)/R,l.type!=="mouse",s()),l.x=_.clientX,l.y=_.clientY}));for(const _ of["pointerup","pointercancel","lostpointercapture"])p(r,_,(R=>{R.pointerId===(l==null?void 0:l.id)&&y()}));const T=_=>{const R=t.getBoundingClientRect();let w=(_.clientX-R.left-R.width/2)/(R.width*.35),b=(_.clientY-R.top-R.height/2)/(R.height*.35);const I=Math.max(1,Math.hypot(w,b));w/=I,b/=I,i.steerTouch(w,b,!0),g(w,b)};p(t,"pointerdown",(_=>{_.pointerType==="mouse"&&_.button!==0||u!==null||!v()||(_.preventDefault(),_.stopPropagation(),(l==null?void 0:l.type)==="mouse"&&y(),u=_.pointerId,t.setPointerCapture(_.pointerId),T(_))})),p(t,"pointermove",(_=>{if(_.pointerId===u){if(!v()){x();return}_.preventDefault(),T(_)}}));for(const _ of["pointerup","pointercancel","lostpointercapture"])p(t,_,(R=>{R.pointerId===u&&x()}));const M=_=>_ instanceof HTMLElement&&!!_.closest('input,select,textarea,[contenteditable="true"]');return p(window,"keydown",(_=>{!DS.has(_.code)||M(_.target)||!v()||_.ctrlKey||_.metaKey||_.altKey||(_.preventDefault(),i.key(_.code,!0))})),p(window,"keyup",(_=>i.key(_.code,!1))),p(window,"blur",E),p(document,"visibilitychange",E),p(window,"resize",E),p(window,"orientationchange",E),p(r,"contextmenu",_=>_.preventDefault()),p(t,"contextmenu",_=>_.preventDefault()),{sync(){const _=s(),R=`${_.mode}/${_.paused}/${_.started}/${_.blocked}`;f&&R!==f&&(y(),x(),i.reset(_.paused||_.blocked)),f=R},dispose(){E(),d.forEach(_=>_())}}}function qR(r,t,i){if(!Number.isFinite(t)||t<=0||t>.25||i.paused){r.step(0,i);return}const s=Math.ceil(t/(1/60)),l=t/s;for(let u=0;u<s;u++)r.step(l,i)}class YR{constructor(){he(this,"scale",1);he(this,"elapsed",0);he(this,"average",1/60);he(this,"nextDecision",3)}reset(){this.scale=1,this.elapsed=0,this.average=1/60,this.nextDecision=3}observe(t,i,s){if(!i||s||!Number.isFinite(t)||t<=0||t>1||(this.elapsed+=t,this.average+=(Math.min(t,.2)-this.average)*(1-Math.exp(-t/1.5)),this.elapsed<this.nextDecision))return!1;const l=this.scale;return this.average>.028?(this.scale=Math.max(.6,Math.round((this.scale-.1)*100)/100),this.nextDecision=this.elapsed+3):this.average<.018?(this.scale=Math.min(1,Math.round((this.scale+.05)*100)/100),this.nextDecision=this.elapsed+10):this.nextDecision=this.elapsed+3,l!==this.scale}}const Rl=r=>(r=Math.max(0,Math.min(1,r)),r*r*(3-2*r)),WR=[2,4,1,0,3],jR=10.2;class US{constructor(){he(this,"phase","idle");he(this,"elapsed",0);he(this,"destination",0);he(this,"seed",7123);he(this,"committed",!1);he(this,"justCommitted",!1);he(this,"energy",0);he(this,"charge",0);he(this,"veil",0)}get busy(){return this.phase!=="idle"}start(t,i,s=!1){return this.busy||s?!1:(this.destination=WR[t]??(t+1)%5,this.seed=Math.imul(i|0,1664525)+1013904223>>>0||1,this.elapsed=0,this.committed=!1,this.justCommitted=!1,this.energy=0,this.veil=0,this.charge=0,this.phase="charging",!0)}advance(t,i=!1){if(this.justCommitted=!1,!this.busy||i||!Number.isFinite(t)||t<=0)return;this.elapsed+=Math.min(t,.25);const s=this.elapsed;s<1.4?(this.phase="charging",this.charge=Rl(s/1.4),this.energy=this.charge*.035):s<4?(this.phase="accelerating",this.charge=1,this.energy=.035+.965*Rl((s-1.4)/2.6)):s<5.6?(this.phase="transit",this.charge=1,this.energy=1):s<9?(this.phase="arriving",this.energy=1-Rl((s-5.6)/3.4),this.charge=this.energy):s<jR?(this.phase="stabilized",this.energy=0,this.charge=0):(this.phase="idle",this.energy=0,this.charge=0),this.veil=s<4?0:s<4.8?Rl((s-4)/.8):s<5.6?1:1-Rl((s-5.6)/1.7),!this.committed&&s>=4.8&&(this.committed=!0,this.justCommitted=!0)}}function ZR(r){const i=new Float32Array(4680),s=new Float32Array(780*2),l=new Float32Array(780*2*3);let u=4171;const f=()=>(u=u*16807%2147483647,(u-1)/2147483646);for(let E=0;E<780;E++){const T=f()*Math.PI*2,M=18+Math.pow(f(),1.3)*550,_=f();for(let R=0;R<2;R++)i.set([Math.cos(T)*M,Math.sin(T)*M*.72,_],(E*2+R)*3),s[E*2+R]=R}const d=new pn;d.setAttribute("position",new hn(l,3)),d.setAttribute("lane",new hn(i,3)),d.setAttribute("endpoint",new hn(s,1));const p={time:{value:0},energy:{value:0},tint:{value:new oe("#b7d8ef")}},m=new oe("#d4ecfa"),v=new nn({uniforms:p,transparent:!0,depthWrite:!1,blending:nr,vertexShader:`attribute vec3 lane;attribute float endpoint;uniform float time,energy;varying float fade;
      void main(){float z=-12.-fract(lane.z+time)*800.;float trailLength=energy*(22.+energy*155.);
      vec3 p=vec3(lane.xy,z-endpoint*trailLength);fade=smoothstep(15.,65.,-z)*(1.-smoothstep(650.,810.,-z))*(.35+endpoint*.4);
      gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`,fragmentShader:`uniform float energy;uniform vec3 tint;varying float fade;void main(){gl_FragColor=vec4(tint*1.35,fade*energy*.7);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`}),g=new fb(d,v);g.name="light-jump-streaks",g.frustumCulled=!1,g.renderOrder=3,r.add(g);let y=!0,x=0;return{configure(E,T){d.setDrawRange(0,(T?70:E==="Low"?180:E==="Medium"?420:780)*2),y=!0},update(E,T,M){T>0&&(x+=E*(.18+T*1.7)),p.time.value=x,p.energy.value=T,p.tint.value.copy(M).lerp(m,.7),g.visible=T>.001||y,y=!1}}}function Tm(r,t,i=!0){let s=(r^Math.imul(t,2654435761))>>>0;const l=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296),u=r===7123&&t===0,f=u?new H(500,200,-3e3):new H((l()-.5)*1800,(l()-.5)*1200,(l()-.5)*1800),d=300+l()*200,p=new oe(["#ffd4a0","#a9d5ff","#ffe8bc","#ffc1ab","#d6dbff"][(r>>>3)%5]),m=8+Math.floor(l()*5),v=l()*Math.PI*2,g=(l()-.5)*.65,y=Array.from({length:i?12:0},(E,T)=>{const M=v+T*2.39996+(l()-.5)*.35,_=800+T*260+l()*100,R=f.clone().add(new H(Math.cos(M)*_,Math.sin(M)*_*g,Math.sin(M)*_));u&&T===0&&R.set(-480,-45,-1500);const w=T%4===1?1:l()>.45?0:2,b=w===1?160+l()*100:55+l()*95,I=l()*100+1,z=new oe().setHSL((t*.14+T*.103+l()*.07)%1,.17+l()*.28,.28+l()*.16);return u&&T===0&&z.set("#315e9c"),{position:R,kind:w,radius:b,seed:I,color:z}}),x=u?"Perseus Anchorage":`${["Aster","Nyra","Vela","Lumen","Thal","Solis","Caeli"][r%7]}-${(r&65535).toString(16).padStart(4,"0").toUpperCase()}`;return{center:f,starRadius:d,starColor:p,count:m,planets:y,name:x}}const QR=`
varying vec3 localPoint, surfaceNormal, worldPoint;
void main(){localPoint=position;worldPoint=(modelMatrix*vec4(position,1.)).xyz;surfaceNormal=normalize(mat3(modelMatrix)*normal);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`,KR=`
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
`;function JR(r){const t=new La;t.name="regional-celestial-bodies",r.add(t);const i=new ua(1,32,20),s=new ua(1,16,10),l=new ua(1,8,6),u=A=>{const V=new nn({uniforms:{baseColor:{value:new oe("#718fa6")},detailColor:{value:new oe("#c7c6b0")},kind:{value:A},alpha:{value:1},seed:{value:1},time:{value:0},lightDirection:{value:new H(-.65,.4,.75)}},vertexShader:QR,fragmentShader:KR,transparent:!0,depthWrite:!0}),Y=new sn(i,V);return Y.renderOrder=4,Y.userData.kind=A>2.5?"star":A>1.5?"rocky-body":"planet",t.add(Y),Y},f=Array.from({length:12},()=>u(0)),d=Array.from({length:8},(A,V)=>{const Y=u(2);return Y.userData.kind="moon",{mesh:Y,parent:V}}),p=u(3);p.name="primary-star";const m=new sn(new Ia(1,1),new nn({uniforms:{baseColor:{value:new oe},alpha:{value:1}},transparent:!0,depthWrite:!1,blending:nr,vertexShader:"varying vec2 vUv;void main(){vUv=uv;vec4 center=modelViewMatrix*vec4(0.,0.,0.,1.);vec2 size=vec2(length(modelMatrix[0].xyz),length(modelMatrix[1].xyz));center.xy+=position.xy*size;gl_Position=projectionMatrix*center;}",fragmentShader:"varying vec2 vUv;uniform vec3 baseColor;uniform float alpha;void main(){float r=length(vUv-.5)*2.;float a=exp(-r*r*7.)*(1.-smoothstep(.7,1.,r));gl_FragColor=vec4(baseColor*1.3,a*alpha*.45);}"}));m.name="stellar-corona",m.frustumCulled=!1,m.renderOrder=3.5,t.add(m);const v=new sn(new Ym(1.32,2.2,64),new nn({uniforms:{color:{value:new oe("#b8afa0")},alpha:{value:1}},transparent:!0,depthWrite:!1,side:_i,vertexShader:"varying vec2 p;void main(){p=position.xy;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 p;uniform vec3 color;uniform float alpha;void main(){float r=length(p);float edge=smoothstep(1.32,1.42,r)*(1.-smoothstep(2.05,2.2,r));float bands=.35+.25*sin(r*180.)+.2*sin(r*47.);gl_FragColor=vec4(color*.7,edge*max(.1,bands)*alpha);}"}));v.name="planetary-ring",v.renderOrder=5,t.add(v);const g=new Xn().setFromEuler(new ri(1.12,.2,-.27)),y=new po({color:"#7a858d",roughness:1,transparent:!0}),x=new rb(new qm(1,0),y,96);x.name="distant-rock-cluster",t.add(x);const E=new H,T=new Xn,M=new H,_=new H;let R=Tm(7123,0),w=7123,b=0,I=!1,z="Medium",P=0;const O=(A,V,Y,Q)=>{w=A,b=V,R=Tm(A,V),I=!0,E.copy(Y),Q?T.copy(Q):T.identity(),t.userData.systemName=R.name,f.forEach((N,B)=>{const $=R.planets[B],ht=N.material.uniforms;ht.baseColor.value.copy($.color),ht.detailColor.value.copy($.color).lerp(new oe("#d0d0b0"),.5),ht.seed.value=$.seed,ht.kind.value=$.kind,ht.lightDirection.value.copy(R.center).sub($.position).applyQuaternion(T).normalize(),N.userData.kind=$.kind===2?"rocky-body":"planet"}),d.forEach(({mesh:N,parent:B},$)=>{N.material.uniforms.baseColor.value.copy(R.planets[B].color).lerp(new oe("#a4a5ac"),.7),N.material.uniforms.detailColor.value.set("#b7b4ab"),N.material.uniforms.seed.value=R.planets[B].seed+$*3.1}),p.material.uniforms.baseColor.value.copy(R.starColor),p.material.uniforms.seed.value=A%1e3,m.material.uniforms.baseColor.value.copy(R.starColor),v.material.uniforms.color.value.copy(R.planets[1].color).lerp(new oe("#e5d5b1"),.5);let pt=(A^20903)>>>0;const K=()=>(pt=Math.imul(pt,1664525)+1013904223>>>0,pt/4294967296),W=new Mn;for(let N=0;N<96;N++){const B=K()*Math.PI*2,$=2300+K()*650;W.position.set(Math.cos(B)*$,(K()-.5)*160,Math.sin(B)*$),W.rotation.set(K()*3,K()*3,K()*3);const ht=5+K()*13;W.scale.set(ht,ht*.7,ht*1.15),W.updateMatrix(),x.setMatrixAt(N,W.matrix)}x.instanceMatrix.needsUpdate=!0,x.computeBoundingSphere()},U=(A,V,Y,Q)=>{A.position.copy(V).applyQuaternion(T).add(E).sub(Q),A.scale.setScalar(Y)};return{group:t,reseed:O,setJump(A){P=A},configure(A){z=A,x.count=A==="Low"?48:A==="Medium"?72:96},update(A,V,Y,Q){(!I||Y!==b)&&O(w,Y,E.clone(),T.clone());const pt=1-Sn.smoothstep(P,.12,.65);f.forEach((K,W)=>{const N=R.planets[W];K.visible=W<R.count,U(K,N.position,N.radius,Q),K.rotation.y=V*.002+W*.5,K.geometry=K.position.lengthSq()>6e3**2?l:z==="High"?i:s,K.material.uniforms.alpha.value=Sn.smoothstep(K.position.length()/N.radius,1.05,1.4)*pt}),d.forEach(({mesh:K,parent:W},N)=>{const B=f[W],$=R.planets[W].radius;K.visible=B.visible,K.geometry=B.geometry,_.set($*(2.2+N*.12),$*.6,$*.7).applyQuaternion(T),K.position.copy(B.position).add(_),K.scale.setScalar(Math.max(12,$*.18)),K.material.uniforms.alpha.value=B.material.uniforms.alpha.value}),U(p,R.center,R.starRadius,Q),p.geometry=z==="High"?i:s,p.visible=!0,p.material.uniforms.time.value=V,p.material.uniforms.alpha.value=Sn.smoothstep(p.position.length()/R.starRadius,1.05,1.4)*pt,m.position.copy(p.position),m.scale.setScalar(R.starRadius*8),m.visible=!0,m.material.uniforms.alpha.value=p.material.uniforms.alpha.value,v.visible=!0,v.position.copy(f[1].position),v.scale.setScalar(R.planets[1].radius),v.quaternion.copy(T).multiply(g),v.material.uniforms.alpha.value=f[1].material.uniforms.alpha.value,M.copy(R.center).applyQuaternion(T).add(E).sub(Q),x.position.copy(M),x.quaternion.copy(T),x.visible=!0,y.opacity=pt},dispose(){t.removeFromParent(),x.dispose();const A=new Set([i,s,l]),V=new Set;t.traverse(Y=>{if(Y instanceof sn){A.add(Y.geometry);for(const Q of Array.isArray(Y.material)?Y.material:[Y.material])V.add(Q)}}),A.forEach(Y=>Y.dispose()),V.forEach(Y=>Y.dispose())}}}const pf=14e3;function $R(r){return[r.x,r.y,r.z].map(t=>Math.floor((t+pf/2)/pf))}function Dx(r,t,i){let s=(Math.imul(r,73856093)^Math.imul(t,19349663)^Math.imul(i,83492791)^7123)>>>0;const l=s,u=()=>(s=Math.imul(s,1664525)+1013904223>>>0,s/4294967296),f=r===0&&t===0&&i===0,d=f?0:l%5,p=new Xn().setFromEuler(new ri(u()*Math.PI*2,u()*Math.PI*2,u()*Math.PI*2));f&&p.identity();const m=new H(r,t,i).multiplyScalar(pf),v=Tm(l,d,!1),g=v.center.clone().applyQuaternion(p).add(m);return{key:`${r}/${t}/${i}`,seed:l,region:d,heading:p,anchor:m,starWorld:g,starColor:v.starColor,starRadius:v.starRadius,name:v.name}}function t3(r){const t=Array.from({length:27},()=>({bodies:JR(r),sector:null})),i=new La;i.name="distant-system-markers",r.add(i);const s=343,l=new Float32Array(s*3),u=new Float32Array(s*3),f=new Float32Array(s),d=new pn;d.setAttribute("position",new hn(l,3)),d.setAttribute("color",new hn(u,3)),d.setAttribute("size",new hn(f,1)),d.setDrawRange(0,s);const p=new H,m=new H,v=new H,g=new H,y=new nn({uniforms:{offset:{value:m},jump:{value:1}},vertexColors:!0,transparent:!0,depthWrite:!1,blending:nr,vertexShader:"attribute float size;uniform vec3 offset;uniform float jump;varying vec3 vColor;varying float visibility;void main(){vec3 p=position-offset;float d=length(p);visibility=smoothstep(10000.,14000.,d)*(1.-smoothstep(32000.,40000.,d))*jump;vColor=color;vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(size*85000./max(100.,d),1.8,12.);}",fragmentShader:"varying vec3 vColor;varying float visibility;void main(){float d=length(gl_PointCoord-.5)*2.;gl_FragColor=vec4(vColor*1.6,exp(-d*d*5.)*visibility);}"}),x=new Hm(d,y);x.frustumCulled=!1,x.renderOrder=3,i.add(x);const E={direction:new H(-.5,.7,-.3),color:new oe("#d9e6ff"),intensity:2};let T="",M="Medium";const _=w=>{const[b,I,z]=$R(w),P=`${b}/${I}/${z}`;if(P===T)return;T=P,p.set(b,I,z).multiplyScalar(pf);let O=0;for(let A=-3;A<=3;A++)for(let V=-3;V<=3;V++)for(let Y=-3;Y<=3;Y++){const Q=Dx(b+A,I+V,z+Y);Q.starWorld.clone().sub(p).toArray(l,O*3),Q.starColor.toArray(u,O*3),f[O]=Q.starRadius/400,O++}d.attributes.position.needsUpdate=!0,d.attributes.color.needsUpdate=!0,d.attributes.size.needsUpdate=!0;const U=new Map;for(let A=-1;A<=1;A++)for(let V=-1;V<=1;V++)for(let Y=-1;Y<=1;Y++){const Q=Dx(b+A,I+V,z+Y);U.set(Q.key,Q)}for(const A of t)A.sector&&U.has(A.sector.key)?U.delete(A.sector.key):A.sector=null;for(const A of U.values()){const V=t.find(Y=>!Y.sector);V.sector=A,V.bodies.reseed(A.seed,A.region,A.anchor,A.heading),V.bodies.update(1e3,0,A.region,w),V.bodies.configure(M)}},R=(w,b)=>{_(w),g.set(0,0,-1).applyQuaternion(b);let I=t[0].sector,z=1/0;for(const U of t){const A=U.sector.starWorld.distanceTo(w);A<z&&(I=U.sector,z=A)}let P=I,O=-1/0;for(const U of t){const A=U.sector;if(A.key===I.key)continue;v.copy(A.starWorld).sub(w);const V=v.length(),Y=v.normalize().dot(g)-V/1e5;Y>O&&(O=Y,P=A)}return{nearest:I,nearestDistance:z,target:P}};return{setJump(w){y.uniforms.jump.value=1-Sn.smoothstep(w,.12,.65);for(const b of t)b.bodies.setJump(w)},configure(w){M=w;for(const b of t)b.bodies.configure(w)},update(w,b,I,z){var P;_(z),m.copy(z).sub(p);for(const O of t){const U=O.sector;O.bodies.update(w,b,U.region,z);for(const A of O.bodies.group.children){const V=A.position.length(),Y=1-Sn.smoothstep(V,1e4,13e3);if(A instanceof sn){const Q=A.material;(P=Q.uniforms)!=null&&P.alpha?Q.uniforms.alpha.value*=Y:"opacity"in Q&&(Q.opacity*=Y)}A.visible=A.visible&&Y>0}}},lightAt(w){let b=t[0].sector,I=1/0;for(const z of t){if(!z.sector)continue;const P=z.sector.starWorld.distanceToSquared(w);P<I&&(b=z.sector,I=P)}return b&&(E.direction.copy(b.starWorld).sub(w).normalize(),E.color.copy(b.starColor),E.intensity=1.2+2.4/(1+I/25e6)),E},jumpTarget(w,b){const{target:I}=R(w,b),z=I.starWorld.clone().sub(w).normalize();return{position:I.starWorld.clone().addScaledVector(z,-4300),direction:z,region:I.region,name:I.name}},navigation(w,b){const{nearest:I,nearestDistance:z,target:P}=R(w,b);return{current:z<5200?I.name:"Interstellar passage",next:P.name,distance:Math.round(P.starWorld.distanceTo(w)),region:I.region}},dispose(){for(const w of t)w.bodies.dispose();i.removeFromParent(),d.dispose(),y.dispose()}}}const bm={Low:{pixelRatio:.9,stars:[550,2400,7800],cloudScale:.32,volumes:1,steps:4,octaves:2,bloom:!1},Medium:{pixelRatio:1,stars:[1e3,4800,19e3],cloudScale:.4,volumes:2,steps:7,octaves:2,bloom:!1},High:{pixelRatio:1.35,stars:[2200,1e4,48e3],cloudScale:.5,volumes:3,steps:10,octaves:3,bloom:!0}},Ux={Dark:{exposure:.8,cabin:.7,nebula:.65},Balanced:{exposure:1.12,cabin:1,nebula:.9},Cinematic:{exposure:1.32,cabin:1.12,nebula:1.08}},Il=[{name:"Violet Nebula",subtitle:"THE PERSEUS ARM",color:"#a879ef",second:"#315fab",accent:"#f4a4cf",density:1.05,band:.8,structure:1.15,bandWidth:1,warmth:.25,stars:.87,exposure:1},{name:"Stellar Ocean",subtitle:"AN ENDLESS SEA OF LIGHT",color:"#88bcf2",second:"#234a89",accent:"#c3dcff",density:.38,band:.7,structure:1.4,bandWidth:.65,warmth:.07,stars:1,exposure:1.04},{name:"Golden Core",subtitle:"THE HEART OF THE GALAXY",color:"#edbd79",second:"#956753",accent:"#fff2c9",density:.85,band:1.65,structure:1.8,bandWidth:1.4,warmth:.88,stars:1.4,exposure:.93},{name:"Cosmic Clouds",subtitle:"WHERE THE STARS ARE BORN",color:"#67cbbf",second:"#306c9c",accent:"#b1d5e8",density:1.3,band:.5,structure:.65,bandWidth:1.1,warmth:.16,stars:.7,exposure:1},{name:"Deep Silence",subtitle:"FAR FROM EVERYTHING",color:"#6d7fbb",second:"#253553",accent:"#a6b8e1",density:.12,band:.15,structure:.8,bandWidth:.45,warmth:.12,stars:.23,exposure:.84}],NS=`
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
`,e3=`
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
`,n3=`
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
`,i3=`
varying vec3 worldPoint;
void main(){vec4 p=modelMatrix*vec4(position,1.);worldPoint=p.xyz;gl_Position=projectionMatrix*viewMatrix*p;}
`,a3=`
precision highp float;
varying vec3 worldPoint;
uniform vec3 center, radii, tint, second, accent;
uniform float time, density, visibility, energy, seed, structure;
uniform int steps, octaves;
uniform mat3 volumeRotation;
${NS}
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
`,s3=`
varying vec3 direction;
void main(){direction=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}
`,r3=`
varying vec3 direction;
uniform vec3 tint, second, accent;
uniform float band, density, energy, bandWidth;
uniform mat3 layoutRotation, destinationRotation, volumeRotation;
uniform int octaves;
${NS}
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
`;function o3(r){const t=Il[0],i=new cS,s=new Ni(1,1,{type:Xi,depthBuffer:!1}),l=new _e,u={sky:{value:s.texture},reprojection:{value:l},tanHalf:{value:.6745},wideTanHalf:{value:.7554},aspect:{value:1},veil:{value:0},jumpTint:{value:new oe("#92bce0")}},f=new sn(new Ia(2,2),new nn({uniforms:u,depthTest:!1,depthWrite:!1,vertexShader:"varying vec2 uvv;void main(){uvv=uv;gl_Position=vec4(position.xy,1.,1.);}",fragmentShader:`varying vec2 uvv;uniform sampler2D sky;uniform mat3 reprojection;uniform float tanHalf,wideTanHalf,aspect,veil;uniform vec3 jumpTint;
      void main(){vec3 ray=reprojection*vec3((uvv-.5)*2.*tanHalf*vec2(aspect,1.),-1.);
      vec2 sampleUV=ray.xy/max(.001,-ray.z)/(2.*wideTanHalf*vec2(aspect,1.))+.5;
      gl_FragColor=texture2D(sky,clamp(sampleUV,.001,.999));gl_FragColor.rgb=mix(gl_FragColor.rgb,jumpTint*.38,veil*.985);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
      }`}));f.frustumCulled=!1,f.renderOrder=-10,r.add(f);const d=new si(75,1,.1,16e3),p=new Xn,m=new Xn,v=new Xn,g=new H,y=new H,x=new He,E=new H,T=new H;let M=!0,_=-1/0,R=1/24;const w=t3(r),b=new H,I=new H,z=new Xn,P=new Xn,O=new _e,U=new He,A=new _e,V=new _e,Y=Il.map(k=>({tint:new oe(k.color),second:new oe(k.second),accent:new oe(k.accent)})),Q={jumpAmount:{value:0},layoutRotation:{value:O},destinationRotation:{value:A},volumeRotation:{value:V},time:{value:0},tint:{value:Y[0].tint.clone()},second:{value:Y[0].second.clone()},accent:{value:Y[0].accent.clone()},density:{value:Number(t.density)},band:{value:Number(t.band)},warmth:{value:Number(t.warmth)},abundance:{value:t.stars/1.4},structure:{value:Number(t.structure)},bandWidth:{value:Number(t.bandWidth)},energy:{value:.9},octaves:{value:3},halo:{value:1}};let pt=7123;const K=()=>(pt=pt*16807%2147483647,(pt-1)/2147483646),W=()=>Math.sqrt(-2*Math.log(Math.max(1e-5,K())))*Math.cos(2*Math.PI*K()),B=[new H(1900,1400,1900),new H(5400,4e3,5400),new H(15e3,11e3,15e3)].map((k,ft)=>{const xt=bm.High.stars[ft],Mt=new Float32Array(xt*3),At=new Float32Array(xt),Lt=new Float32Array(xt),G=new Float32Array(xt);for(let ut=0;ut<xt;ut++){let Ct=(K()-.5)*k.x,Dt=(K()-.5)*k.z,Bt=(K()-.5)*k.y;if(ft>0&&K()<.72){if(K()<.28){const ue=Math.floor(K()*4);Ct=(ue%2?.22:-.24)*k.x+W()*k.x*.045,Dt=(ue<2?-.27:.22)*k.z+W()*k.z*.055}Bt=-.42*Ct+W()*k.y*.035+Math.sin(Dt/k.z*5)*k.y*.045}Mt.set([Ct,Bt,Dt],ut*3);const re=K();At[ut]=(re>.987?12+K()*14:1.3+K()*4.6)*[.7,1.1,2][ft],Lt[ut]=K(),G[ut]=K()}const Et=new pn;Et.setAttribute("position",new hn(Mt,3)),Et.setAttribute("radius",new hn(At,1)),Et.setAttribute("temperature",new hn(Lt,1)),Et.setAttribute("identity",new hn(G,1));const _t=new nn({uniforms:{...Q,offset:{value:new H},span:{value:k},layoutOffset:{value:new H},pixels:{value:400},dpr:{value:1}},vertexShader:e3,fragmentShader:n3,transparent:!0,depthWrite:!1,blending:nr}),dt=new Hm(Et,_t);return dt.frustumCulled=!1,dt.renderOrder=3,r.add(dt),dt}),$=new sn(new ua(12500,32,16),new nn({uniforms:Q,vertexShader:s3,fragmentShader:r3,side:qn,depthWrite:!1}));$.renderOrder=-2,$.frustumCulled=!1,i.add($);const ht=new ua(1,24,16),Rt=[{center:new H(-180,110,-820),radii:new H(680,330,770)},{center:new H(600,-140,-1600),radii:new H(1050,480,1e3)},{center:new H(-850,220,-2400),radii:new H(1200,520,1050)},{center:new H(450,420,1200),radii:new H(850,600,1e3)}],Gt=Rt.map(()=>new H),ne=Rt.map((k,ft)=>{const xt=new nn({uniforms:{...Q,center:{value:k.center.clone()},radii:{value:k.radii},steps:{value:10},visibility:{value:1},seed:{value:4.3+ft*9.7}},vertexShader:i3,fragmentShader:a3,transparent:!0,depthWrite:!1,side:qn}),Mt=new sn(ht,xt);return Mt.position.copy(k.center),Mt.scale.copy(k.radii),Mt.renderOrder=1,i.add(Mt),Mt}),q=new Wb("#b7c6ef","#080e1d",1.6);r.add(q);const J=new ax("#dae6ff",2.8);J.position.set(-3,4,1),r.add(J),J.shadow.mapSize.set(1024,1024),J.shadow.camera.left=-22,J.shadow.camera.right=22,J.shadow.camera.top=18,J.shadow.camera.bottom=-18,J.shadow.camera.near=.5,J.shadow.camera.far=120,J.shadow.bias=-15e-5,J.shadow.normalBias=.018;const tt=new ax("#628bb2",.65);return tt.position.set(4,2,3),r.add(tt),{tint:Q.tint.value,navigation:w.navigation,jumpTarget:w.jumpTarget,setJump(k,ft){Q.jumpAmount.value=Math.max(k,ft),u.veil.value=ft,u.jumpTint.value.copy(Q.tint.value).lerp(Q.accent.value,.35),w.setJump(Math.max(k,ft))},reseed(k,ft,xt,Mt){b.copy(xt),Mt?z.copy(Mt):z.identity(),P.copy(z).invert(),A.setFromMatrix4(U.makeRotationFromQuaternion(z)),V.copy(A).transpose();for(const G of ne)G.quaternion.copy(z);let At=k>>>0;const Lt=()=>(At=Math.imul(At,1664525)+1013904223>>>0,At/4294967296);U.makeRotationY((Lt()-.5)*1.2),U.multiply(new He().makeRotationZ((Lt()-.5)*.8)),O.setFromMatrix4(U);for(const G of B){const Et=G.material.uniforms.span.value;G.material.uniforms.layoutOffset.value.set((Lt()-.5)*Et.x,(Lt()-.5)*Et.y,(Lt()-.5)*Et.z)}for(let G=0;G<ne.length;G++)Gt[G].set((Lt()-.5)*600,(Lt()-.5)*250,(Lt()-.5)*500),ne[G].material.uniforms.seed.value=Lt()*80+2;M=!0},renderAtmosphere(k,ft,xt=!1){ft.updateWorldMatrix(!0,!1),ft.matrixWorld.decompose(g,p,y);const Mt=ft,At=Math.tan(Sn.degToRad(Mt.fov)*.5);(u.aspect.value!==Mt.aspect||u.tanHalf.value!==At)&&(M=!0),u.tanHalf.value=At,u.wideTanHalf.value=At*1.12,u.aspect.value=Mt.aspect;const Lt=performance.now()/1e3;if(xt||M||Lt-_>=R||p.angleTo(m)>.075||E.distanceToSquared(T)>900){d.fov=Sn.radToDeg(2*Math.atan(At*1.12)),d.aspect=Mt.aspect,d.near=Mt.near,d.far=Mt.far,d.updateProjectionMatrix(),d.position.copy(g),d.quaternion.copy(p);const G=k.toneMapping;k.toneMapping=Pa,k.setRenderTarget(s),k.render(i,d),k.setRenderTarget(null),k.toneMapping=G,m.copy(p),T.copy(E),_=performance.now()/1e3,M=!1}v.copy(m).invert().multiply(p),x.makeRotationFromQuaternion(v),l.setFromMatrix4(x)},dispose(){s.dispose(),w.dispose(),J.shadow.dispose();const k=new Set,ft=new Set;i.traverse(xt=>{xt instanceof sn&&(k.add(xt.geometry),ft.add(xt.material))}),k.forEach(xt=>xt.dispose()),ft.forEach(xt=>xt.dispose())},configure(k,ft,xt,Mt,At,Lt,G=!1){J.castShadow=k==="High"&&!G,!J.castShadow&&J.shadow.map&&(J.shadow.map.dispose(),J.shadow.map=null),M=!0,R=G?1/15:k==="Low"?1/20:k==="Medium"?1/24:1/30;const Et=bm[k];w.configure(k),Q.octaves.value=Et.octaves;const _t=Lt&&k!=="Low"?Xi:qi;s.texture.type!==_t&&(s.dispose(),s.texture.type=_t),s.setSize(Math.max(1,Math.round(xt*ft*(G?.26:Et.cloudScale))),Math.max(1,Math.round(Mt*ft*(G?.26:Et.cloudScale)))),Q.halo.value=.75+At*.8,B.forEach((dt,ut)=>{dt.geometry.setDrawRange(0,Et.stars[ut]),dt.material.uniforms.pixels.value=Mt*.64*ft,dt.material.uniforms.dpr.value=ft}),ne.forEach((dt,ut)=>{dt.visible=ut<Et.volumes,dt.material.uniforms.steps.value=Et.steps})},update(k,ft,xt,Mt,At){I.copy(Mt).sub(b).applyQuaternion(P),E.copy(I),w.update(k,ft,xt,Mt);const Lt=w.lightAt(Mt);J.position.copy(Lt.direction).multiplyScalar(45),J.color.lerp(Lt.color,1-Math.exp(-k*1.5)),J.intensity=Sn.damp(J.intensity,Lt.intensity,1.5,k),tt.color.copy(Q.tint.value).lerp(new oe("#829fc1"),.65);const G=Il[xt],Et=Y[xt],_t=1-Math.exp(-k*.55);Q.time.value=ft,Q.tint.value.lerp(Et.tint,_t),Q.second.value.lerp(Et.second,_t),Q.accent.value.lerp(Et.accent,_t),Q.density.value=Sn.lerp(Q.density.value,G.density,_t),Q.band.value=Sn.lerp(Q.band.value,G.band,_t),Q.structure.value=Sn.lerp(Q.structure.value,G.structure,_t),Q.bandWidth.value=Sn.lerp(Q.bandWidth.value,G.bandWidth,_t),Q.warmth.value=Sn.lerp(Q.warmth.value,G.warmth,_t),Q.abundance.value=Sn.lerp(Q.abundance.value,G.stars/1.4,_t),Q.energy.value=Sn.lerp(Q.energy.value,At,_t),B.forEach(dt=>dt.material.uniforms.offset.value.copy(I)),ne.forEach((dt,ut)=>{const Ct=Rt[ut].center;dt.position.set(Sn.euclideanModulo(Ct.x+Gt[ut].x-I.x+4600,9200)-4600,Sn.euclideanModulo(Ct.y+Gt[ut].y-I.y+3600,7200)-3600,Sn.euclideanModulo(Ct.z+Gt[ut].z-I.z+4600,9200)-4600);const Dt=Math.max(Math.abs(dt.position.x)/4600,Math.abs(dt.position.y)/3600,Math.abs(dt.position.z)/4600);dt.position.applyQuaternion(z),dt.material.uniforms.center.value.copy(dt.position),dt.material.uniforms.visibility.value=1-Sn.smoothstep(Dt,.65,.95)})}}}function LS(r,t=!1){const i=r[0].index!==null,s=new Set(Object.keys(r[0].attributes)),l=new Set(Object.keys(r[0].morphAttributes)),u={},f={},d=r[0].morphTargetsRelative,p=new pn;let m=0;for(let v=0;v<r.length;++v){const g=r[v];let y=0;if(i!==(g.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const x in g.attributes){if(!s.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+'. All geometries must have compatible attributes; make sure "'+x+'" attribute exists among all geometries, or in none of them.'),null;u[x]===void 0&&(u[x]=[]),u[x].push(g.attributes[x]),y++}if(y!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". Make sure all geometries have the same number of attributes."),null;if(d!==g.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const x in g.morphAttributes){if(!l.has(x))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+".  .morphAttributes must be consistent throughout all geometries."),null;f[x]===void 0&&(f[x]=[]),f[x].push(g.morphAttributes[x])}if(t){let x;if(i)x=g.index.count;else if(g.attributes.position!==void 0)x=g.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+v+". The geometry must have either an index or a position attribute"),null;p.addGroup(m,x,v),m+=x}}if(i){let v=0;const g=[];for(let y=0;y<r.length;++y){const x=r[y].index;for(let E=0;E<x.count;++E)g.push(x.getX(E)+v);v+=r[y].attributes.position.count}p.setIndex(g)}for(const v in u){const g=Nx(u[v]);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+v+" attribute."),null;p.setAttribute(v,g)}for(const v in f){const g=f[v][0].length;if(g===0)break;p.morphAttributes=p.morphAttributes||{},p.morphAttributes[v]=[];for(let y=0;y<g;++y){const x=[];for(let T=0;T<f[v].length;++T)x.push(f[v][T][y]);const E=Nx(x);if(!E)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+v+" morphAttribute."),null;p.morphAttributes[v].push(E)}}return p}function Nx(r){let t,i,s,l=-1,u=0;for(let m=0;m<r.length;++m){const v=r[m];if(t===void 0&&(t=v.array.constructor),t!==v.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=v.itemSize),i!==v.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(s===void 0&&(s=v.normalized),s!==v.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(l===-1&&(l=v.gpuType),l!==v.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;u+=v.count*i}const f=new t(u),d=new hn(f,i,s);let p=0;for(let m=0;m<r.length;++m){const v=r[m];if(v.isInterleavedBufferAttribute){const g=p/i;for(let y=0,x=v.count;y<x;y++)for(let E=0;E<i;E++){const T=v.getComponent(y,E);d.setComponent(y+g,E,T)}}else f.set(v.array,p);p+=v.count*i}return l!==void 0&&(d.gpuType=l),d}const Dl=new H;function Ui(r,t,i,s,l,u){const f=2*Math.PI*l/4,d=Math.max(u-2*l,0),p=Math.PI/4;Dl.copy(t),Dl[s]=0,Dl.normalize();const m=.5*f/(f+d),v=1-Dl.angleTo(r)/p;return Math.sign(Dl[i])===1?v*m:d/(f+d)+m+m*(1-v)}class _f extends Ao{constructor(t=1,i=1,s=1,l=2,u=.1){const f=l*2+1;if(u=Math.min(t/2,i/2,s/2,u),super(1,1,1,f,f,f),this.type="RoundedBoxGeometry",this.parameters={width:t,height:i,depth:s,segments:l,radius:u},f===1)return;const d=this.toNonIndexed();this.index=null,this.attributes.position=d.attributes.position,this.attributes.normal=d.attributes.normal,this.attributes.uv=d.attributes.uv;const p=new H,m=new H,v=new H(t,i,s).divideScalar(2).subScalar(u),g=this.attributes.position.array,y=this.attributes.normal.array,x=this.attributes.uv.array,E=g.length/6,T=new H,M=.5/f;for(let _=0,R=0;_<g.length;_+=3,R+=2)switch(p.fromArray(g,_),m.copy(p),m.x-=Math.sign(m.x)*M,m.y-=Math.sign(m.y)*M,m.z-=Math.sign(m.z)*M,m.normalize(),g[_+0]=v.x*Math.sign(p.x)+m.x*u,g[_+1]=v.y*Math.sign(p.y)+m.y*u,g[_+2]=v.z*Math.sign(p.z)+m.z*u,y[_+0]=m.x,y[_+1]=m.y,y[_+2]=m.z,Math.floor(_/E)){case 0:T.set(1,0,0),x[R+0]=Ui(T,m,"z","y",u,s),x[R+1]=1-Ui(T,m,"y","z",u,i);break;case 1:T.set(-1,0,0),x[R+0]=1-Ui(T,m,"z","y",u,s),x[R+1]=1-Ui(T,m,"y","z",u,i);break;case 2:T.set(0,1,0),x[R+0]=1-Ui(T,m,"x","z",u,t),x[R+1]=Ui(T,m,"z","x",u,s);break;case 3:T.set(0,-1,0),x[R+0]=1-Ui(T,m,"x","z",u,t),x[R+1]=1-Ui(T,m,"z","x",u,s);break;case 4:T.set(0,0,1),x[R+0]=1-Ui(T,m,"x","y",u,t),x[R+1]=1-Ui(T,m,"y","x",u,i);break;case 5:T.set(0,0,-1),x[R+0]=Ui(T,m,"x","y",u,t),x[R+1]=1-Ui(T,m,"y","x",u,i);break}}static fromJSON(t){return new _f(t.width,t.height,t.depth,t.segments,t.radius)}}function af(r,t=1){return r.onBeforeCompile=i=>{i.uniforms.panelScale={value:t},i.vertexShader=`varying vec3 shipPoint,shipNormal;
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
roughnessFactor=clamp(roughnessFactor+(grain-.5)*.085+seam*.24-edge*.12,.15,.95);`)},r.customProgramCacheKey=()=>"aether-aerospace-pbr-v1",r}function l3(r){const t=new La;t.name="enclosed-flight-deck",r.add(t);const i={value:new oe("#ae80f0")},s=(N,B,$)=>af(new po({color:N,metalness:B,roughness:$,envMapIntensity:B>.7?1.2:.75}),2.4),l=s("#27343f",.48,.42),u=s("#82949d",.85,.26),f=s("#0c141d",.16,.68),d=l.color.clone(),p=u.color.clone(),m=f.color.clone(),v=new ar({color:"#52d9d5"}),g=new Map;let y=!1;const x=(N,B)=>{y&&(N.scale(.72,.58,.9),N.translate(0,-.798,-.3)),g.has(B)||g.set(B,[]),g.get(B).push(N)};function E(N,B,$,ht,Rt,Gt,ne,q=0,J=0,tt=0){const k=new _f(Rt,Gt,ne,1,Math.min(Rt,Gt,ne)*.12);k.rotateX(q),k.rotateY(J),k.rotateZ(tt),k.translate(B,$,ht),x(k,N)}function T(N,B,$,ht){const Rt=new gf(ht,ht,B.distanceTo($),8);Rt.applyQuaternion(new Xn().setFromUnitVectors(new H(0,1,0),$.clone().sub(B).normalize())),Rt.translate(...B.clone().add($).multiplyScalar(.5).toArray()),x(Rt,N)}function M(N,B,$,ht,Rt){const Gt=Array.from({length:41},(ne,q)=>{const J=-.12+q/40*(Math.PI+.24);return new H(Math.cos(J)*B,-.95+Math.sin(J)*$,N)});x(new df(new ym(Gt),48,ht,8,!1),Rt)}E(l,0,-2.02,.25,7.3,.22,7),E(l,0,-1.65,2.55,7.3,.65,.2),E(l,0,3.35,2.55,7.3,.13,.18);for(const N of[-3.5,-1.4,1.4,3.5])E(l,N,1.05,2.55,.085,4.55,.14),E(v,N+.048,1.05,2.48,.008,4.42,.012);for(const N of[-1.5,1.1,2.55])E(l,0,3.35,N,7.05,.095,.09),E(v,0,3.29,N,6.9,.008,.012);for(const N of[-1,1]){E(l,N*3.55,-1.65,.4,.17,.65,4.3),E(l,N*3.55,3.35,-.4,.13,.13,6);for(const B of[-1.5,1.1,2.55])E(l,N*3.55,1.05,B,.12,4.55,.085),E(v,N*3.48,1.05,B+.049,.012,4.42,.008);E(l,N*2.62,-1.52,-1.9,.65,.76,4,0,N*-.1),T(u,new H(N*1,-1.1,-2.95),new H(N*2.72,-1.4,.25),.075),T(l,new H(N*1.12,-1.15,-3.02),new H(N*2.85,-1.47,.35),.14),T(u,new H(N*2.9,-.95,-3.2),new H(N*3.12,-1.25,.5),.055),T(v,new H(N*1.16,-1.18,-2.98),new H(N*2.77,-1.54,.15),.009);for(let B=0;B<13;B++){const $=B/12;E(u,N*(1.12+$*1.69),-1.15-$*.33,-3.02+$*3.23,.035,.035,.028)}}M(-3.35,2.92,3.62,.085,l),M(-3.32,2.84,3.57,.025,u),M(-3.29,2.81,3.53,.008,v),M(.7,3.15,3.9,.12,l),T(l,new H(0,2.68,-3.35),new H(0,2.95,.8),.065),y=!0;const _=new hf;_.moveTo(-1.62,-1.85),_.lineTo(-1.44,-.58),_.bezierCurveTo(-1.2,-.12,-.92,.48,-.58,.55),_.quadraticCurveTo(0,.72,.58,.55),_.bezierCurveTo(.92,.48,1.2,-.12,1.44,-.58),_.lineTo(1.62,-1.85),_.closePath();const R=new jl(_,{depth:.24,bevelEnabled:!0,bevelSize:.045,bevelThickness:.045,bevelSegments:2,steps:1});R.translate(0,-.12,-3.18),x(R,f);const w=[new H(-1.4,-.62,-2.89),new H(-.88,.23,-2.89),new H(0,.52,-2.89),new H(.88,.23,-2.89),new H(1.4,-.62,-2.89)];x(new df(new ym(w),40,.045,8,!1),u),E(u,0,-.13,-2.84,1.19,.76,.12,-.1),E(f,0,-.13,-2.755,1.13,.7,.035,-.1),E(l,0,-.74,-2.72,1.32,.18,.22),E(f,0,-.72,-2.58,.85,.09,.06);for(const N of[-1,1]){E(l,N*1.14,-1.05,-1.62,.78,.25,1.75,.18,0,N*.12),E(f,N*1.14,-.91,-1.62,.69,.035,1.66,.18,0,N*.12),T(u,new H(N*1.59,-1.13,-.65),new H(N*1.61,-.78,-2.5),.045),T(u,new H(N*.73,-1.12,-.72),new H(N*.75,-.87,-2.35),.035),E(f,N*.97,-.63,-2.36,.59,.44,.12,-.34,-N*.18);for(let B=0;B<3;B++)for(let $=0;$<4;$++)E(u,N*1.15+($-1.5)*.12,-.76-B*.035,-1.8+B*.18,.085,.04,.105,.18);for(let B=0;B<5;B++)E(f,N*1.23,-.83,-.96-B*.15,.12,.07,.085,.18),E(u,N*.94,-.79,-.98-B*.15,.045,.06,.065,.18);E(f,N*.65,-1.11,-1.78,.26,.11,.3),T(u,new H(N*.65,-1.07,-1.78),new H(N*.59,-.78,-1.86),.043),E(f,N*.59,-.72,-1.87,.11,.19,.16,-.25,0,N*.15),E(v,N*.59,-.625,-1.84,.035,.008,.045),E(u,N*.22,-1.74,-2.16,.2,.09,.34,.5);for(let B=0;B<6;B++)E(f,N*.22,-1.69+B*.013,-2.29+B*.04,.14,.014,.012,.5);E(v,N*1.34,-1.82,-.45,.025,.025,.58);for(let B=0;B<18;B++)E(u,N*1.32,-1.91,-.9+B*.085,.28,.014,.012)}y=!1,E(f,0,-1.66,-.08,.99,.25,1.4),E(l,0,-1.12,1,1.12,.92,.28,-.13),E(f,0,-1.1,.82,.91,.78,.14,-.13);const b={reflection:{value:null},hasReflection:{value:0},strength:{value:.06},tint:i},I=new nn({uniforms:b,transparent:!0,depthWrite:!1,side:_i,vertexShader:"varying vec3 panePoint,paneNormal;void main(){panePoint=position;paneNormal=normal;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 panePoint,paneNormal;uniform sampler2D reflection;uniform float hasReflection,strength;uniform vec3 tint;
    void main(){vec3 v=normalize(-panePoint),n=normalize(paneNormal);float facing=abs(dot(n,v));vec3 r=reflect(-v,n);
    vec2 uv=vec2(atan(r.z,r.x)/6.2831853+.5,asin(clamp(r.y,-1.,1.))/3.14159265+.5);
    vec3 environment=hasReflection>.5?texture2D(reflection,uv).rgb:vec3(.08,.15,.2);
    float fresnel=pow(1.-facing,3.);float reflectionAlpha=.008+strength*(.12+fresnel);
    float ghost=exp(-pow((panePoint.y+.7)*5.,2.))*pow(max(0.,sin(panePoint.x*8.)),14.);
    gl_FragColor=vec4(environment*.8+tint*.025+vec3(.04,.25,.24)*ghost,reflectionAlpha);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
    }`}),z=(N,B,$,ht,Rt,Gt=0,ne=0)=>{const q=new Ia(ht,Rt);q.rotateX(Gt),q.rotateY(ne),q.translate(N,B,$),x(q,I)};for(const N of[-1,1])z(N*3.56,1.05,-.4,5.9,4.5,0,Math.PI/2);z(0,1.05,2.57,7,4.5),z(0,3.36,-.4,7,5.9,Math.PI/2);const P=document.createElement("canvas");P.width=P.height=1024;const O=P.getContext("2d");O.fillStyle="#020b10",O.fillRect(0,0,1024,1024);const U=(N,B,$,ht,Rt="#40bfbf")=>{O.strokeStyle=Rt,O.beginPath(),O.moveTo(N,B),O.lineTo($,ht),O.stroke()},A=(N,B,$,ht=10,Rt="#6ee9dd")=>{O.font=`${ht}px monospace`,O.fillStyle=Rt,O.fillText(N,B,$)};O.strokeStyle="#65eddf",O.lineWidth=3,O.strokeRect(5,5,630,354),A("A E T H E R   /   DEEP SPACE NAVIGATION",20,26,12),A("FLIGHT SYSTEMS",21,53),A("VECTOR  /  LOCK",465,53),O.lineWidth=1;for(let N=0;N<11;N++)U(20,70+N*22,164,70+N*22,"#154c58"),A(["NAV  ONLINE","DRIVE NOMINAL","O2   100.0%","HULL  STABLE"][N%4],24,84+N*22,8),U(460,70+N*22,610,70+N*22,"#154c58"),A(`${(N*173.29+72).toFixed(2)} / ${N%3===0?"ACTIVE":"SYNC"}`,467,84+N*22,8);for(let N=0;N<9;N++){const B=18+N*11;O.strokeStyle=N%2?"#174b59":"#21838b",O.beginPath(),O.arc(320,185,B,0,Math.PI*2),O.stroke()}for(let N=0;N<12;N++){const B=N/12*Math.PI*2;U(320+Math.cos(B)*19,185+Math.sin(B)*19,320+Math.cos(B)*107,185+Math.sin(B)*107,"#18525e")}const V=O.createRadialGradient(320,185,1,320,185,65);V.addColorStop(0,"#8bfff5"),V.addColorStop(.18,"#1dd7d5"),V.addColorStop(1,"#05303b00"),O.fillStyle=V,O.fillRect(250,115,140,140);for(let N=0;N<60;N++)U(185+N*4.4,317+Math.sin(N*.7)*7,189+N*4.4,317+Math.sin((N+1)*.7)*7,"#50cec5");A("PERSEUS // CONTINUOUS NAVIGATION",183,345,9),O.fillStyle="#04100a",O.fillRect(0,390,400,220);for(let N=0;N<18;N++)A(`${N.toString(16).padStart(2,"0")}  ${["SYSTEM LINK ESTABLISHED","TRAJECTORY COMPUTED","DEEP FIELD SCAN / OK","> AETHER FLIGHT COMPUTER"][N%4]}`,12,405+N*11,9,"#80c858");O.fillStyle="#063547",O.fillRect(430,390,350,180);for(let N=0;N<5;N++)A(["ATTITUDE","ENGINE","COOLANT","SIGNAL","ENERGY"][N],445,413+N*30,12),O.fillStyle="#47e4ef",O.fillRect(550,402+N*30,38+N*28,9);const Y=["#f3d238","#28becf","#e35345","#9cd357","#c7e9de"];for(let N=0;N<4;N++)for(let B=0;B<8;B++){const $=12+B*48,ht=650+N*48;O.fillStyle="#101e22",O.fillRect($,ht,40,40),O.fillStyle=Y[(N*3+B)%5],O.fillRect($+4,ht+4,32,25),U($+9,ht+34,$+30,ht+34,"#899d94")}for(let N=0;N<2;N++){const B=540+N*220,$=750;for(const ht of[65,57,45])O.strokeStyle="#8df6e5",O.lineWidth=ht===57?5:2,O.beginPath(),O.arc(B,$,ht,-.9,4.9),O.stroke();O.fillStyle="#bdfff2",O.beginPath(),O.arc(B,$,12,0,Math.PI*2),O.fill(),U(B,$,B+34,$-24,"#bdfff2"),A(N?"OXYGEN":"VELOCITY",B-30,$+91,11)}for(let N=0;N<12;N++)O.fillStyle=Y[N%5],O.fillRect(20+N*45,900,31,16),A(N%3===0?"ARM":"ON",22+N*45,935,8);const Q=new Gm(P);Q.colorSpace=kn,Q.anisotropy=2;const pt=new ar({map:Q,color:"#d8fff5",side:_i}),K={value:0};pt.onBeforeCompile=N=>{N.uniforms.screenTime=K,N.fragmentShader=`uniform float screenTime;
`+N.fragmentShader,N.fragmentShader=N.fragmentShader.replace("#include <map_fragment>",`#include <map_fragment>
    vec2 radar=vMapUv-vec2(.3125,.819);float a=atan(radar.y,radar.x);float sweep=pow(max(0.,cos(a-screenTime*.34)),32.)*(1.-smoothstep(.04,.11,length(radar)));
    diffuseColor.rgb+=vec3(.03,.24,.21)*sweep*step(.64,vMapUv.y);diffuseColor.rgb*=.965+.035*sin(vMapUv.y*1024.*3.14159);
  `)};function W(N,B,$,ht,Rt,Gt,ne=0,q=0,J=0){const tt=new Ia(ht,Rt),k=tt.getAttribute("uv");for(let ft=0;ft<k.count;ft++)k.setXY(ft,(Gt[0]+k.getX(ft)*Gt[2])/1024,1-(Gt[1]+(1-k.getY(ft))*Gt[3])/1024);tt.rotateX(ne),tt.rotateY(q),tt.rotateZ(J),tt.translate(N,B,$),x(tt,pt)}y=!0,W(0,-.13,-2.727,1.07,.6,[0,0,640,365],-.1),W(-.73,-.39,-2.72,.32,.36,[455,663,170,190]),W(.73,-.39,-2.72,.32,.36,[675,663,170,190]),W(-.98,-.61,-2.265,.49,.32,[430,390,350,180],-.34,.18,.1),W(.98,-.61,-2.265,.49,.32,[0,390,400,220],-.34,-.18,-.1),W(0,-1.02,-2.39,.62,.3,[0,640,400,205],-.4),W(0,-.59,-2.71,1.46,.085,[0,890,560,65]);for(const N of[-1,1])W(N*1.14,-.86,-1.53,.5,.53,[0,640,400,205],-Math.PI/2+.18,0,N*.12),W(N*.65,-1.038,-1.67,.23,.09,[0,890,250,45],-Math.PI/2),W(N*1.14,-.77,-2.03,.54,.11,[0,890,560,65],-Math.PI/2+.18);for(const N of[-1,1])for(let B=0;B<3;B++)for(let $=0;$<4;$++)W(N*1.15+($-1.5)*.12,-.734-B*.035,-1.8+B*.18,.065,.08,[16+(B*3+$)%8*48,654+B*48,30,25],-Math.PI/2+.18);for(const N of w){const B=new ua(.022,6,4);B.translate(N.x,N.y,N.z+.055),x(B,u)}y=!1;for(const[N,B]of g){for(const Rt of B){if(Rt.index){const Gt=Rt.toNonIndexed();Rt.copy(Gt),Gt.dispose()}Rt.deleteAttribute("uv1")}const $=LS(B);B.forEach(Rt=>Rt.dispose());const ht=new sn($,N);ht.castShadow=N===l||N===u||N===f,ht.receiveShadow=ht.castShadow,ht.name=N===I?"observation-glazing":N===l?"enclosure-shell":N===pt?"instrument-displays":"cabin-details",t.add(ht)}return{group:t,configureEnvironment(N,B){b.reflection.value=N,b.hasReflection.value=1,b.strength.value=B?.15:.045},update(N,B,$,ht,Rt=0){t.visible=ht;const Gt=$?.5:1;i.value.copy(N),l.color.copy(d).multiplyScalar(B*Gt),u.color.copy(p).multiplyScalar(B*Gt),f.color.copy(m).multiplyScalar(B*Gt),K.value=Rt,v.color.set("#50d7ce").multiplyScalar(.7*B*Gt),pt.color.set("#d8fff5").multiplyScalar((.8+B*.2)*($?.5:1))},dispose(){Q.dispose()}}}function u3(r){const t=new La;t.name="aether-exterior",r.add(t);const i=af(new po({color:"#394956",metalness:.65,roughness:.38,side:_i,envMapIntensity:1.15}),.8),s=af(new po({color:"#8b9da5",metalness:.88,roughness:.25,envMapIntensity:1.3}),2),l=af(new po({color:"#101b27",metalness:.25,roughness:.7}),1.7),u=new ar({color:"#64d4d8"}),f=new ar({color:"#f08c81"}),d=new Map,p=(T,M)=>{const _=d.get(M)??[];_.push(T),d.set(M,_)},m=(T,M,_,R,w,b,I,z=0)=>{const P=new _f(w,b,I,1,Math.min(w,b,I)*.16);P.rotateZ(z),P.translate(M,_,R),p(P,T)},v=new ua(1,32,16);v.scale(3.3,1.05,8),v.translate(0,-3.2,4),p(v,i),m(i,0,-2.3,7,2.4,.52,8),m(l,0,-2.015,7.5,1.4,.04,6.8);for(const T of[-1,1]){const M=[[3,-.8],[5.7,.2],[13.2,5.1],[12.2,7.4],[5.5,5.1],[3,6.2]].map(([I,z])=>new zt(T*I,z));T<0&&M.reverse();const _=new hf(M),R=new jl(_,{depth:.2,bevelEnabled:!0,bevelSize:.09,bevelThickness:.07,bevelSegments:3,steps:1});R.rotateX(Math.PI/2),R.translate(0,-2.15,0),p(R,i);for(let I=0;I<6;I++)m(s,T*(4.5+I*1.15),-2.035,1.2+I*.65,.06,.025,2),m(l,T*(4.5+I*1.15),-2.02,2.25+I*.65,.72,.025,.65);m(u,T*8.5,-2.015,4.35,4.5,.025,.055),m(T<0?f:u,T*12.8,-2,5.5,.18,.08,.6),m(s,T*2.5,-2.5,7.7,1.3,.65,5.7),m(l,T*2.5,-2.45,8.1,.9,.5,5.5),m(u,T*2.5,-2.43,10.91,.7,.25,.04),m(u,T*.9,-2.02,8,.035,.025,5.3);const w=new hf([new zt(6,-2.1),new zt(10.6,-.15),new zt(12.8,-2.1)]),b=new jl(w,{depth:.15,bevelEnabled:!0,bevelSize:.035,bevelThickness:.035,bevelSegments:2});b.rotateY(-Math.PI/2),b.translate(T*3.6,0,0),p(b,i)}const g=document.createElement("canvas");g.width=1024,g.height=256;const y=g.getContext("2d");y.fillStyle="#d8e1df",y.font="bold 106px monospace",y.fillText("AETHER / 01",18,111),y.font="20px monospace",y.fillText("DEEP SPACE EXPLORER     //     KEEP CLEAR",22,157),y.fillStyle="#d7a85b";for(let T=0;T<23;T++)y.save(),y.translate(T*48,212),y.transform(1,0,-.5,1,0,0),y.fillRect(0,0,21,23),y.restore();const x=new Gm(g);x.colorSpace=kn,x.anisotropy=4;const E=new po({map:x,transparent:!0,alphaTest:.2,roughness:.6,metalness:.2,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1});for(const T of[-1,1]){const M=new Ia(2.35,.59);M.rotateZ(T*Math.PI/2),M.rotateX(-Math.PI/2),M.translate(T*7.2,-1.99,3.9),p(M,E);for(let w=0;w<6;w++){const b=new ua(.028,6,4);b.translate(T*(4.5+w*1.15),-1.985,2.25+w*.65),p(b,s),m(l,T*2.5,-2.02,7.1+w*.23,.7,.025,.07)}const _=new gf(.48,.58,2.4,18);_.rotateX(Math.PI/2),_.translate(T*2.5,-2.4,10.1),p(_,s);const R=new Wm(.48,.07,6,20);R.translate(T*2.5,-2.4,11.3),p(R,l)}for(const[T,M]of d){const _=M.map(b=>b.index?b.toNonIndexed():b),R=LS(_);for(const b of new Set([...M,..._]))b.dispose();const w=new sn(R,T);w.castShadow=T!==u&&T!==f&&T!==E,w.receiveShadow=T!==u&&T!==f,w.name=T===i?"wing-and-hull-armor":"exterior-details",t.add(w)}return{group:t,update(T,M){t.visible=T,u.color.set("#64d4d8").multiplyScalar(.48+Math.min(M/1200,1)*.2)},dispose(){t.removeFromParent(),t.children.forEach(T=>{T.geometry.dispose()}),d.forEach((T,M)=>M.dispose()),x.dispose()}}}function c3(r,t,i){const s=document.createElement("canvas");s.width=512,s.height=256;const l=s.getContext("2d");l.scale(.5,.5);const u=l.createLinearGradient(0,0,0,512);u.addColorStop(0,"#142034"),u.addColorStop(.4,"#33405b"),u.addColorStop(.62,"#151e32"),u.addColorStop(1,"#03060b"),l.fillStyle=u,l.fillRect(0,0,1024,512);const f=(g,y,x,E)=>{const T=l.createRadialGradient(g,y,0,g,y,x);T.addColorStop(0,E),T.addColorStop(.18,E+"99"),T.addColorStop(1,E+"00"),l.fillStyle=T,l.fillRect(g-x,y-x,x*2,x*2)};f(240,185,180,"#98b8e5"),f(755,200,120,"#e9ba87"),f(480,260,160,"#547e9c"),l.fillStyle="#a9d6dc",l.globalAlpha=.38,l.fillRect(100,235,270,5),l.fillStyle="#e9b67f",l.fillRect(695,238,150,3),l.globalAlpha=1;const d=new Gm(s);d.mapping=sf,d.colorSpace=kn;let p=null;if(r.extensions.has("EXT_color_buffer_float")){const g=new Mm(r);g.compileEquirectangularShader(),p=g.fromEquirectangular(d),g.dispose(),t.environment=p.texture}t.environmentIntensity=.75;const m=new ix("#63d8dd",3.5,5,2);m.position.set(0,-.55,-1.7),i.add(m);const v=new ix("#eab784",1.1,3.5,2);return v.position.set(-1.6,-1.3,-.4),i.add(v),r.shadowMap.type=Ix,{panorama:d,configure(g){r.shadowMap.enabled=g},update(g,y){m.visible=v.visible=g,m.intensity=y?1.4:3.5,v.intensity=y?.45:1.1},dispose(){t.environment=null,m.removeFromParent(),v.removeFromParent(),p==null||p.dispose(),d.dispose()}}}function f3(r,t,i,s,l={}){const u=new LR({antialias:!0,alpha:!1,powerPreference:"high-performance"});u.setClearColor("#040710"),u.outputColorSpace=kn,u.toneMapping=Cm,u.toneMappingExposure=Ux.Balanced.exposure,r.appendChild(u.domElement);const f=new cS,d=new si(68,1,.1,5e4),p=new La;p.position.z=5,p.add(d),f.add(p);const m=l.jump??new US;let v=m.phase;const g={...t()},y=()=>(Object.assign(g,t()),g.blocked=g.blocked||m.busy,g),x=c3(u,f,p),E=o3(f);let T=null,M=!1;const _=new ri(0,0,0,"YXZ"),R=ZR(p),w=new oe,b=new oe("#bad9f3"),I=l3(p),z=u3(p),P=XR(u.domElement,s,i,y),O=new TS,U=new YR;let A=t().quality,V=t().performanceMode,Y=t().adaptive,Q=0,pt=0,K=0,W=0,N="",B=!1,$=null,ht=null;const Rt=()=>{$&&($.passes.forEach(J=>J.dispose()),$.dispose(),$=null,ht=null)},Gt=()=>{const J=t(),tt=J.performanceMode?"Low":J.quality,k=bm[tt],ft=Math.max(1,r.clientWidth),xt=Math.max(1,r.clientHeight),Mt=Math.min(window.devicePixelRatio||1,k.pixelRatio)*(J.performanceMode?.85:J.adaptive?U.scale:1);u.setPixelRatio(Mt),u.setSize(ft,xt),d.aspect=ft/xt,d.updateProjectionMatrix();const At=!J.performanceMode&&k.bloom&&J.bloom>0&&u.extensions.has("EXT_color_buffer_float");At&&!$?($=new FR(u),$.addPass(new HR(f,d)),ht=new To(new zt(ft,xt),.2,.55,1.1),$.addPass(ht),$.addPass(new VR)):At||Rt(),$&&($.setPixelRatio(Mt),$.setSize(ft,xt)),E.configure(tt,Mt,ft,xt,J.bloom,u.extensions.has("EXT_color_buffer_float"),J.performanceMode),R.configure(tt,J.reduced);const Lt=tt==="High"&&!J.performanceMode;x.configure(Lt),I.configureEnvironment(x.panorama,Lt),N=`${J.quality}/${J.bloom}/${J.performanceMode}/${J.adaptive}/${J.reduced}`},ne=()=>{var J;O.getDelta(),i.reset(!0),(J=l.onAudio)==null||J.call(l,0,0,!0)};document.addEventListener("visibilitychange",ne),window.addEventListener("resize",Gt),Gt();const q=()=>{var G,Et,_t,dt;if(B)return;pt=requestAnimationFrame(q);const J=O.getDelta(),tt=J>.25?0:J,k=t();if(document.hidden){i.reset(!0);return}const ft=Math.min(J,.25);m.busy&&!M&&(T=E.jumpTarget(i.position,i.shipQuaternion),m.destination=T.region),M=m.busy,m.advance(J,k.paused),m.phase!==v&&(v=m.phase,(G=l.onPhase)==null||G.call(l,m.phase)),m.justCommitted&&(T&&(i.position.copy(T.position),i.yaw=Math.atan2(-T.direction.x,-T.direction.z),i.pitch=Math.asin(T.direction.y),i.reset(!0),i.shipQuaternion.setFromEuler(_.set(i.pitch,i.yaw,0,"YXZ")),Q=0),E.reseed(m.seed,m.destination,i.position,i.shipQuaternion),(Et=l.onDestination)==null||Et.call(l,m.destination,m.seed));const xt=m.busy&&m.committed?m.destination:k.region,Mt=m.energy*(k.reduced?.16:k.mode==="Meditation"?.55:1);P.sync(),y(),g.paused=k.paused||!k.started,m.busy&&(g.mode="Autopilot",g.motion=0,g.started=!0,g.speed=k.speed+Math.pow(m.energy,2)*(k.reduced?100:360)),qR(i,J,g),(_t=l.onAudio)==null||_t.call(l,Mt,m.charge,k.paused),(k.quality!==A||k.performanceMode!==V||k.adaptive!==Y)&&(U.reset(),A=k.quality,V=k.performanceMode,Y=k.adaptive);const At=U.observe(J,k.adaptive&&!k.performanceMode,k.paused);(N!==`${k.quality}/${k.bloom}/${k.performanceMode}/${k.adaptive}/${k.reduced}`||At)&&Gt(),k.paused||(K+=tt);const Lt=Ux[k.lighting];u.toneMappingExposure=Sn.damp(u.toneMappingExposure,Lt.exposure*Il[xt].exposure,.8,ft),E.setJump(Mt,m.veil),E.update(ft,K,xt,i.position,Lt.nebula),K>=Q&&((dt=l.onNavigation)==null||dt.call(l,E.navigation(i.position,i.shipQuaternion)),Q=K+.5),p.quaternion.copy(i.shipQuaternion),d.quaternion.copy(i.lookQuaternion),w.copy(E.tint).lerp(b,m.charge*.3),z.update(k.cockpit,i.speed),I.update(w,Lt.cabin*(1+m.charge*.12),k.mode==="Meditation",k.cockpit,K),x.update(k.cockpit,k.mode==="Meditation"),R.update(k.paused?0:Math.min(J,.1),Mt,E.tint),ht&&(ht.strength=k.bloom*(k.mode==="Meditation"?.45:.8+Mt*.2)),W+=J,!(k.paused&&W<1/15)&&(W=0,E.renderAtmosphere(u,d),$?$.render():u.render(f,d))};return q(),()=>{var k;B=!0,cancelAnimationFrame(pt),P.dispose(),window.removeEventListener("resize",Gt),document.removeEventListener("visibilitychange",ne),(k=l.onAudio)==null||k.call(l,0,0,!0),Rt(),I.dispose(),z.dispose(),E.dispose(),x.dispose();const J=new Set,tt=new Set;f.traverse(ft=>{if(ft instanceof sn||ft instanceof Hm||ft instanceof fS){J.add(ft.geometry);for(const xt of Array.isArray(ft.material)?ft.material:[ft.material])tt.add(xt)}}),J.forEach(ft=>ft.dispose()),tt.forEach(ft=>ft.dispose()),u.dispose(),u.domElement.remove()}}const Zl=[{id:"meditation",name:"Meditation Impromptu 01",mood:"Gentle piano · meditation",file:"meditation-impromptu-01.mp3",artist:"Kevin MacLeod",isrc:"USUAN1100163"},{id:"floating",name:"Floating Cities",mood:"Dreamlike ambient · a quiet future",file:"floating-cities.mp3",artist:"Kevin MacLeod",isrc:"USUAN1600018"},{id:"jellyfish",name:"Jellyfish in Space",mood:"Soft space music · a flowing journey",file:"jellyfish-in-space.mp3",artist:"Kevin MacLeod",isrc:"USUAN1500030"},{id:"soaring",name:"Soaring",mood:"Atmospheric ambient · calm and spacious",file:"soaring.mp3",artist:"Kevin MacLeod",isrc:"USUAN1600040"}],Jm={engineEnabled:!0,spaceEnabled:!0,musicEnabled:!0,engine:.35,space:.3,music:.5,track:"meditation"},Lx="cosmic-drift-audio-v1";function h3(r){const t={...Jm};try{const i=JSON.parse(r??"null");if(!i||typeof i!="object")return t;const s=i;for(const f of["engineEnabled","spaceEnabled","musicEnabled"])typeof s[f]=="boolean"&&(t[f]=s[f]);for(const f of["engine","space","music"])typeof s[f]=="number"&&Number.isFinite(s[f])&&(t[f]=Math.max(0,Math.min(1,s[f])));const l={starlight:"meditation",nebula:"floating",orbit:"jellyfish",lunar:"soaring"},u=typeof s.track=="string"?l[s.track]??s.track:"";Zl.some(f=>f.id===u)&&(t.track=u)}catch{}return t}class d3{constructor(){he(this,"ctx",null);he(this,"master");he(this,"engine");he(this,"space");he(this,"music");he(this,"onMusicState");he(this,"musicState",{state:"idle",track:null});he(this,"jumpGain");he(this,"jumpTone");he(this,"jumpFilter");he(this,"lastDrive",-1);he(this,"lastCharge",-1);he(this,"settings",{...Jm});he(this,"enabled",!1);he(this,"paused",!1);he(this,"slots",[]);he(this,"current");he(this,"retiring");he(this,"fadeTimer");he(this,"pauseTimer");he(this,"visibility",()=>this.apply())}get currentRecording(){var t;return((t=this.current)==null?void 0:t.element)??null}get musicActive(){return this.enabled&&!this.paused&&!document.hidden&&this.settings.musicEnabled&&this.settings.music>0}report(t,i){var l,u,f;const s=((u=(l=this.current)==null?void 0:l.track)==null?void 0:u.id)??null;this.musicState.state===t&&this.musicState.track===s&&this.musicState.message===i||(this.musicState={state:t,track:s,message:i},(f=this.onMusicState)==null||f.call(this,this.musicState))}async start(t){if(t&&(this.settings={...this.settings,track:t,musicEnabled:!0}),!this.ctx){const i=this.ctx=new AudioContext;this.master=i.createGain(),this.master.gain.value=0,this.master.connect(i.destination),this.engine=i.createGain(),this.space=i.createGain(),this.music=i.createGain();for(const p of[this.engine,this.space,this.music])p.gain.value=0,p.connect(this.master);for(const p of[38,57,76]){const m=i.createOscillator(),v=i.createGain();m.type="sine",m.frequency.value=p,v.gain.value=.09,m.connect(v).connect(this.engine),m.start()}const s=i.createBuffer(2,i.sampleRate*4,i.sampleRate);let l=1237;for(let p=0;p<2;p++){const m=s.getChannelData(p);let v=0;for(let g=0;g<m.length;g++){l=l*16807%2147483647,v=(v+((l-1)/2147483646-.5)*.035)/1.018;const y=Math.min(1,g/(i.sampleRate*.08),(m.length-1-g)/(i.sampleRate*.08));m[g]=v*y}}const u=i.createBufferSource(),f=i.createBiquadFilter();u.buffer=s,u.loop=!0,f.type="lowpass",f.frequency.value=650,u.connect(f).connect(this.space),u.start();for(const p of[82.41,123.47]){const m=i.createOscillator(),v=i.createGain();m.frequency.value=p,v.gain.value=.012,m.connect(v).connect(this.space),m.start()}this.jumpGain=i.createGain(),this.jumpGain.gain.value=0,this.jumpGain.connect(this.engine),this.jumpTone=i.createOscillator(),this.jumpTone.frequency.value=42,this.jumpTone.connect(this.jumpGain),this.jumpTone.start();const d=i.createBufferSource();d.buffer=s,d.loop=!0,this.jumpFilter=i.createBiquadFilter(),this.jumpFilter.type="lowpass",this.jumpFilter.frequency.value=250,d.connect(this.jumpFilter).connect(this.jumpGain),d.start(),this.slots=Array.from({length:2},()=>this.makeSlot(i)),document.addEventListener("visibilitychange",this.visibility)}this.apply(),this.current&&this.settings.musicEnabled&&this.settings.music>0&&this.play(this.current),await this.ctx.resume(),this.apply()}makeSlot(t){const i=new Audio;i.loop=!0,i.preload="none";const s=t.createMediaElementSource(i),l=t.createGain();l.gain.value=0,s.connect(l).connect(this.music);const u={element:i,source:s,gain:l,track:null,request:0,pending:!1};i.onwaiting=()=>{this.current===u&&this.musicActive&&this.report("loading")},i.onplaying=()=>{this.current===u&&this.musicActive&&this.report("playing")},i.onerror=()=>{this.current===u&&u.track&&this.report("error","This recording could not load. Select it again to retry.")};const f=new Uint8Array(76),d=new DataView(f.buffer),p=(m,v)=>{for(let g=0;g<v.length;g++)f[m+g]=v.charCodeAt(g)};return p(0,"RIFF"),d.setUint32(4,68,!0),p(8,"WAVEfmt "),d.setUint32(16,16,!0),d.setUint16(20,1,!0),d.setUint16(22,1,!0),d.setUint32(24,8e3,!0),d.setUint32(28,16e3,!0),d.setUint16(32,2,!0),d.setUint16(34,16,!0),p(36,"data"),d.setUint32(40,32,!0),i.src="data:audio/wav;base64,"+btoa(String.fromCharCode(...f)),i.play().then(()=>{u.track||(i.pause(),i.removeAttribute("src"),i.load())}).catch(()=>{}),u}set(t,i,s){this.enabled=t,this.settings={...i},this.paused=s,this.apply()}apply(){var u;const t=this.ctx;if(!t||t.state==="closed")return;const i=t.currentTime,s=this.enabled&&!this.paused&&!document.hidden;this.master.gain.setTargetAtTime(s?.65:0,i,.18);for(const[f,d,p]of[[this.engine,this.settings.engine,this.settings.engineEnabled],[this.space,this.settings.space,this.settings.spaceEnabled],[this.music,this.settings.music,this.settings.musicEnabled]])f.gain.setTargetAtTime(p?d:0,i,.16);const l=Zl.find(f=>f.id===this.settings.track)??Zl[0];(!this.current||((u=this.current.track)==null?void 0:u.id)!==l.id)&&this.changeTrack(l),this.musicActive?(clearTimeout(this.pauseTimer),this.pauseTimer=void 0,this.current.element.paused&&!this.current.pending?this.play(this.current):!this.current.element.paused&&this.current.element.readyState>=3?this.report("playing"):this.report("loading")):(this.report("paused"),this.pauseTimer||(this.pauseTimer=setTimeout(()=>{var f;this.pauseTimer=void 0,this.musicActive||((f=this.current)==null||f.element.pause(),this.current&&(this.current.pending=!1))},1100)))}changeTrack(t){const i=this.ctx,s=i.currentTime;clearTimeout(this.fadeTimer),this.retiring&&this.release(this.retiring);const l=this.current,u=this.slots.find(f=>f!==l);this.release(u),u.track=t,u.element.src=`/cosmic-drift/audio/${t.file}`,u.gain.gain.setValueAtTime(0,s),u.gain.gain.setTargetAtTime(1,s,.3),this.current=u,this.report("loading"),l&&(l.gain.gain.cancelScheduledValues(s),l.gain.gain.setTargetAtTime(0,s,.2),this.retiring=l,this.fadeTimer=setTimeout(()=>{this.release(l),this.retiring===l&&(this.retiring=void 0)},1200))}play(t){if(t.pending||!t.track)return;t.element.error&&t.element.load();const i=++t.request;t.pending=!0,this.current===t&&this.report("loading"),t.element.play().then(()=>{t.request===i&&(t.pending=!1,this.current===t&&this.musicActive&&this.report("playing"))}).catch(s=>{t.request===i&&(t.pending=!1,!(s instanceof DOMException&&s.name==="AbortError")&&this.current===t&&this.report("error",s instanceof DOMException&&s.name==="NotAllowedError"?"Tap the selected track again to allow playback.":"This recording could not play. Select it again to retry."))})}release(t){t.request++,t.pending=!1,t.track=null,t.element.pause(),t.element.removeAttribute("src"),t.element.load(),this.ctx&&this.ctx.state!=="closed"&&(t.gain.gain.cancelScheduledValues(this.ctx.currentTime),t.gain.gain.value=0)}jump(t,i,s){if(!this.ctx||this.ctx.state==="closed"||!this.jumpGain||(s&&(t=i=0),Math.abs(t-this.lastDrive)<.01&&Math.abs(i-this.lastCharge)<.01&&!(t===0&&this.lastDrive!==0)))return;this.lastDrive=t,this.lastCharge=i;const l=this.ctx.currentTime;this.jumpGain.gain.cancelScheduledValues(l),this.jumpGain.gain.setTargetAtTime(.018*i+.055*t,l,.15),this.jumpTone.frequency.cancelScheduledValues(l),this.jumpTone.frequency.setTargetAtTime(42+i*12+t*145,l,.25),this.jumpFilter.frequency.cancelScheduledValues(l),this.jumpFilter.frequency.setTargetAtTime(250+t*1100,l,.25)}dispose(){var t;clearTimeout(this.fadeTimer),clearTimeout(this.pauseTimer),document.removeEventListener("visibilitychange",this.visibility);for(const i of this.slots)i.element.onwaiting=i.element.onplaying=i.element.onerror=null,this.release(i),i.source.disconnect(),i.gain.disconnect();this.current=this.retiring=void 0,this.slots=[],this.onMusicState=void 0,(t=this.ctx)==null||t.close().catch(()=>{}),this.ctx=null}}function p3({sound:r,paused:t,playback:i,settings:s,onToggle:l,onChange:u,onTrack:f}){const d=i.state==="error"?i.message:r?t?"Audio paused · resume the journey to listen":s.musicEnabled?s.music<=0?"Music volume is zero · raise it to listen":i.state==="playing"?"Playing your selection · recorded music":i.state==="paused"?"Music paused · select the track to continue":"Loading recording…":"Music is off · engine and space follow your settings":"Audio is off · choose a track or enable sound";return wt.jsxs(wt.Fragment,{children:[wt.jsx("p",{children:"Your own mix of engine, space and music."}),wt.jsxs("button",{className:"sound-toggle",onClick:l,children:[r?"Mute all audio":"Enable sound",r?wt.jsx(Px,{size:17}):wt.jsx(zE,{size:17})]}),wt.jsx("div",{className:"audio-channels",children:[{toggle:"engineEnabled",volume:"engine",name:"Engine sound",label:"Engine volume",hint:"Engine hum and Light Jump"},{toggle:"spaceEnabled",volume:"space",name:"Space ambience",label:"Space volume",hint:"A soft, atmospheric soundscape"},{toggle:"musicEnabled",volume:"music",name:"Music",label:"Music volume",hint:"Your selected relaxation track"}].map(p=>wt.jsxs("div",{className:"audio-channel",children:[wt.jsxs("label",{className:"check",children:[wt.jsx("input",{type:"checkbox",checked:s[p.toggle],onChange:m=>u({[p.toggle]:m.target.checked})}),wt.jsxs("span",{children:[p.name,wt.jsx("small",{children:p.hint})]})]}),wt.jsxs("label",{className:"audio-level",children:["Volume ",wt.jsxs("output",{children:[Math.round(s[p.volume]*100),"%"]}),wt.jsx("input",{"aria-label":p.label,type:"range",min:"0",max:"1",step:".01",disabled:!s[p.toggle],value:s[p.volume],onChange:m=>u({[p.volume]:+m.target.value})})]})]},p.volume))}),wt.jsxs("fieldset",{className:"music-library",children:[wt.jsx("legend",{children:"Choose your music"}),Zl.map((p,m)=>wt.jsxs("label",{className:`music-option ${s.track===p.id?"selected":""}`,children:[wt.jsx("input",{onClick:()=>{s.track===p.id&&f(p.id)},type:"radio",name:"music-track","aria-label":p.name,checked:s.track===p.id,onChange:()=>f(p.id)}),wt.jsx("span",{className:`music-art music-art-${m}`,"aria-hidden":"true",children:["✦","◌","◎","☾"][m]}),wt.jsxs("span",{className:"music-description",children:[p.name,wt.jsx("small",{children:p.mood}),wt.jsxs("small",{children:[p.artist," · CC BY 3.0"]})]})]},p.id))]}),wt.jsx("small",{className:"audio-note","data-playback-state":i.state,"aria-live":"polite",children:d}),wt.jsx("small",{className:"audio-license",children:"Recorded music by Kevin MacLeod · free with attribution"}),wt.jsxs("details",{className:"music-credits",children:[wt.jsx("summary",{children:"Music credits & licenses"}),wt.jsxs("p",{children:["All four recordings are by ",wt.jsx("a",{href:"https://incompetech.com/",target:"_blank",rel:"noreferrer",children:"Kevin MacLeod"}),", used under ",wt.jsx("a",{href:"https://creativecommons.org/licenses/by/3.0/",target:"_blank",rel:"noreferrer",children:"CC BY 3.0"}),"."]}),Zl.map(p=>wt.jsxs("a",{href:`https://incompetech.com/music/royalty-free/index.html?isrc=${p.isrc}`,target:"_blank",rel:"noreferrer",children:[p.name," ↗"]},p.id)),wt.jsxs("p",{children:["Audio editions from FitVita: trimmed, faded, loudness-normalized and encoded to Opus; converted to MP3 for this site. ",wt.jsx("a",{href:"https://github.com/smyrna-pergamum/fitvita",target:"_blank",rel:"noreferrer",children:"Source & credits ↗"})]})]})]})}function m3(){const r="Manual Flight",[t,i]=ge.useState(18),[s,l]=ge.useState(0),[u,f]=ge.useState(!1),[d,p]=ge.useState(0),[m,v]=ge.useState(()=>matchMedia("(any-pointer: coarse)").matches?"Low":"Medium"),[g,y]=ge.useState("Balanced"),[x,E]=ge.useState(matchMedia("(prefers-reduced-motion: reduce)").matches),[T,M]=ge.useState(.6),[_,R]=ge.useState(!0),[w,b]=ge.useState(!1),[I,z]=ge.useState(!1),[P,O]=ge.useState(""),[U,A]=ge.useState(!1),[V,Y]=ge.useState(""),[Q,pt]=ge.useState(!1),[K,W]=ge.useState(1),[N,B]=ge.useState(.7),[$,ht]=ge.useState(!1),[Rt,Gt]=ge.useState(!1),[ne,q]=ge.useState(.28),[J,tt]=ge.useState(!1),[k,ft]=ge.useState(!0),[xt,Mt]=ge.useState("idle"),[At,Lt]=ge.useState(7123),[G,Et]=ge.useState({current:"Perseus Anchorage",next:"Deep-space systems",distance:0,region:0}),[_t,dt]=ge.useState({state:"idle",track:null}),[ut,Ct]=ge.useState(()=>{try{return h3(localStorage.getItem(Lx))}catch{return{...Jm}}}),Dt=ge.useRef(new US),Bt=ge.useRef(()=>{}),re=xt!=="idle",ue=ge.useRef(null),F=ge.useRef(new kR),C=ge.useRef(null),st=ge.useRef(new d3),vt=ge.useRef({mode:r,speed:t,paused:u,region:d,quality:m,reduced:x,motion:T,cockpit:_,started:w,blocked:!w||!!P||re,sensitivity:K,touchSensitivity:N,invertMouseX:$,invertMouseY:Rt,lighting:g,bloom:ne,performanceMode:J,adaptive:k,worldSeed:At});vt.current={mode:r,speed:t,paused:u,region:d,quality:m,reduced:x,motion:T,cockpit:_,started:w,blocked:!w||!!P||re,sensitivity:K,touchSensitivity:N,invertMouseX:$,invertMouseY:Rt,lighting:g,bloom:ne,performanceMode:J,adaptive:k,worldSeed:At},ge.useEffect(()=>{try{return f3(C.current,()=>vt.current,F.current,ue.current,{onNavigation:yt=>{Et(yt),p(yt.region)},jump:Dt.current,onPhase:Mt,onDestination:(yt,qt)=>{p(yt),Lt(qt)},onAudio:(yt,qt,Jt)=>st.current.jump(yt,qt,Jt)})}catch{Y("WebGL could not start. Please enable hardware acceleration and reload.")}},[]),ge.useEffect(()=>(st.current.onMusicState=dt,()=>st.current.dispose()),[]),ge.useEffect(()=>{const yt=setInterval(()=>l(F.current.speed),200);return()=>clearInterval(yt)},[]),ge.useEffect(()=>{st.current.set(U,ut,u)},[U,ut,u]),ge.useEffect(()=>{try{localStorage.setItem(Lx,JSON.stringify(ut))}catch{}},[ut]),ge.useEffect(()=>{const yt=()=>pt(!!document.fullscreenElement);return document.addEventListener("fullscreenchange",yt),()=>document.removeEventListener("fullscreenchange",yt)},[]),ge.useEffect(()=>{const yt=qt=>{!w||qt.target instanceof HTMLElement&&qt.target.closest('input,select,textarea,[contenteditable="true"]')||(qt.code==="KeyJ"&&!qt.repeat&&!qt.ctrlKey&&!qt.metaKey&&!qt.altKey&&(qt.preventDefault(),Bt.current()),qt.code==="KeyR"&&F.current.centerLook(),qt.key.toLowerCase()==="h"&&(O(""),z(Jt=>!Jt)),qt.code==="Space"&&!(qt.target instanceof HTMLElement&&qt.target.closest("button,a"))&&(qt.preventDefault(),f(Jt=>!Jt)),qt.key==="Escape"&&(z(!1),O("")))};return window.addEventListener("keydown",yt),()=>window.removeEventListener("keydown",yt)},[w]);const Nt=()=>{A(!1),Y("Audio could not start. Open music settings to try again.")},St=()=>{b(!0),f(!1),Ct(yt=>({...yt,musicEnabled:!0,music:yt.music>0?yt.music:.5})),st.current.start(ut.track).catch(Nt),A(!0)},Qt=async()=>{try{await st.current.start(),A(yt=>!yt)}catch{Nt()}},Ft=async yt=>{try{await st.current.start(yt),Ct(qt=>({...qt,track:yt,musicEnabled:!0})),A(!0)}catch{Nt()}},$t=async()=>{try{document.fullscreenElement?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{Y("Fullscreen is unavailable in this browser.")}},ee=()=>{w&&Dt.current.start(d,At,u)&&(O(""),Mt("charging"))};Bt.current=ee;const Ot=u&&re?"Jump paused":xt==="charging"?"Charging drive…":xt==="accelerating"?"Accelerating…":xt==="transit"?"Crossing the light…":xt==="arriving"?"Entering the next system…":xt==="stabilized"?`Arrived: ${G.current}`:"";return wt.jsxs("main",{"data-jump-phase":xt,"data-world-seed":At,"data-region":d,className:`manual-flight ${w?"journey-started":"preflight"} ${I?"hidden-ui":""} ${P||u||re?"controls-blocked":""} ${re?"jump-active":""}`,children:[wt.jsx("div",{className:"universe",ref:C}),wt.jsx("div",{className:"vignette"}),wt.jsx("button",{className:"fullscreen-button ui",title:Q?"Exit fullscreen":"Fullscreen",onClick:$t,children:wt.jsx(UE,{size:20})}),!w&&wt.jsx("section",{className:"entry",children:wt.jsxs("button",{className:"entry-button",onClick:St,children:[wt.jsx(NE,{size:20}),wt.jsx("span",{children:"Start journey"})]})}),wt.jsxs("div",{className:"flight-ui ui","aria-hidden":!w,children:[wt.jsxs("div",{className:"navigation-caption",children:[wt.jsx("span",{children:G.current}),wt.jsxs("small",{children:[Il[d].name," · Next: ",G.next," · ",G.distance.toLocaleString()," u"]})]}),wt.jsx("div",{className:"touch-controls",children:wt.jsxs("div",{ref:ue,className:"touch-joystick",role:"group","aria-label":"Touch flight joystick",children:[wt.jsx("span",{className:"stick-cross",children:"+"}),wt.jsx("span",{className:"stick-thumb"}),wt.jsx("small",{children:"STEER"})]})}),wt.jsxs("aside",{className:"action-rail","aria-label":"Flight actions",children:[wt.jsx("button",{className:"rail-button rail-jump",title:"Light Jump","aria-keyshortcuts":"J",disabled:re||u,onClick:ee,children:wt.jsx(IE,{size:20})}),wt.jsx("button",{className:`rail-button ${P==="audio"?"selected":""}`,title:"Audio settings","aria-expanded":P==="audio","aria-controls":"flight-panel",onClick:()=>O(P==="audio"?"":"audio"),children:wt.jsx(Px,{size:20})}),wt.jsx("button",{className:`rail-button ${P==="settings"?"selected":""}`,title:"Settings","aria-expanded":P==="settings","aria-controls":"flight-panel",onClick:()=>O(P==="settings"?"":"settings"),children:wt.jsx(PE,{size:20})}),wt.jsx("button",{className:"rail-button",title:u?"Resume":"Pause",onClick:()=>f(yt=>!yt),children:u?wt.jsx(OE,{size:19}):wt.jsx(LE,{size:19})})]}),wt.jsx("span",{className:"jump-status",role:"status","aria-live":"polite",children:Ot}),wt.jsxs("div",{className:"cruise-strip",children:[wt.jsxs("label",{htmlFor:"speed",children:["CRUISE SPEED ",wt.jsxs("span",{children:[s.toFixed(0)," ",wt.jsx("small",{title:"Game units per second",children:"u/s"})]})]}),wt.jsx("input",{id:"speed","aria-label":"Cruise speed",disabled:re,type:"range",min:"0",max:"1200",value:t,onChange:yt=>i(+yt.target.value)})]})]}),I&&w&&wt.jsxs("button",{className:"restore",onClick:()=>z(!1),children:[wt.jsx(py,{size:16})," Show controls · H"]}),P&&w&&wt.jsxs(wt.Fragment,{children:[wt.jsx("button",{className:"panel-scrim","aria-label":"Close settings overlay",onClick:()=>O("")}),wt.jsxs("section",{id:"flight-panel",className:"panel","aria-label":P==="audio"?"Sound settings":"Graphics settings",children:[wt.jsxs("div",{className:"panel-head",children:[wt.jsx("span",{children:P==="audio"?"The sound of stillness":"Make space your own"}),wt.jsx("button",{title:"Close settings",onClick:()=>O(""),children:wt.jsx(my,{size:19})})]}),P==="audio"?wt.jsx(p3,{sound:U,paused:u,playback:_t,settings:ut,onToggle:Qt,onTrack:Ft,onChange:yt=>Ct(qt=>({...qt,...yt}))}):wt.jsxs(wt.Fragment,{children:[wt.jsx("p",{className:"setting-note",children:"Speed is shown in game units per second. Distances are scaled for relaxed exploration."}),wt.jsxs("label",{className:"setting",children:["Graphics quality",wt.jsx("select",{"aria-label":"Graphics quality",value:m,onChange:yt=>v(yt.target.value),children:["Low","Medium","High"].map(yt=>wt.jsx("option",{children:yt},yt))})]}),wt.jsxs("label",{className:"check",children:[wt.jsx("input",{type:"checkbox",checked:J,onChange:yt=>tt(yt.target.checked)})," Performance mode"]}),wt.jsxs("label",{className:"check",children:[wt.jsx("input",{type:"checkbox",checked:k,onChange:yt=>ft(yt.target.checked)})," Adaptive resolution"]}),wt.jsx("small",{className:"setting-note",children:"Performance mode prioritizes smooth flight. Adaptive resolution adjusts image detail when rendering is slow."}),wt.jsxs("label",{className:"setting",children:["Environment lighting",wt.jsx("select",{"aria-label":"Environment lighting",value:g,onChange:yt=>y(yt.target.value),children:["Dark","Balanced","Cinematic"].map(yt=>wt.jsx("option",{children:yt},yt))})]}),wt.jsxs("label",{className:"setting",children:["Soft bloom ",wt.jsxs("output",{children:[Math.round(ne*100),"%"]}),wt.jsx("input",{"aria-label":"Soft bloom",type:"range",min:"0",max:".6",step:".02",value:ne,onChange:yt=>q(+yt.target.value)}),wt.jsx("small",{className:"setting-note",children:"Low / Medium use lightweight star halos; High can add post-processing bloom."})]}),wt.jsxs("label",{className:"setting",children:["Steering / mouse sensitivity ",wt.jsxs("output",{children:[K.toFixed(2),"×"]}),wt.jsx("input",{"aria-label":"Steering and mouse sensitivity",type:"range",min:".25",max:"2",step:".05",value:K,onChange:yt=>W(+yt.target.value)})]}),wt.jsxs("label",{className:"setting",children:["Touch sensitivity ",wt.jsxs("output",{children:[N.toFixed(2),"×"]}),wt.jsx("input",{"aria-label":"Touch sensitivity",type:"range",min:".25",max:"1.5",step:".05",value:N,onChange:yt=>B(+yt.target.value)})]}),wt.jsxs("label",{className:"check",children:[wt.jsx("input",{type:"checkbox",checked:$,onChange:yt=>ht(yt.target.checked)})," Invert mouse horizontal axis"]}),wt.jsxs("label",{className:"check",children:[wt.jsx("input",{type:"checkbox",checked:Rt,onChange:yt=>Gt(yt.target.checked)})," Invert mouse vertical axis"]}),wt.jsxs("label",{className:"setting",children:["Camera movement",wt.jsx("input",{"aria-label":"Camera movement",type:"range",min:"0",max:"1",step:".05",value:T,onChange:yt=>M(+yt.target.value)})]}),wt.jsxs("label",{className:"check",children:[wt.jsx("input",{type:"checkbox",checked:x,onChange:yt=>E(yt.target.checked)})," Reduced motion"]}),wt.jsxs("button",{className:"sound-toggle",onClick:()=>F.current.centerLook(),children:["Center view · R",wt.jsx(DE,{size:16})]}),wt.jsxs("label",{className:"check",children:[wt.jsx("input",{type:"checkbox",checked:_,onChange:yt=>R(yt.target.checked)})," Show cockpit"]}),wt.jsxs("button",{className:"sound-toggle",onClick:()=>{O(""),z(!0)},children:["Hide interface · H",wt.jsx(py,{size:16})]}),"    "]})]})]}),V&&wt.jsxs("div",{role:"alert",className:"error",children:[V,wt.jsx("button",{onClick:()=>Y(""),"aria-label":"Dismiss error",children:wt.jsx(my,{size:16})})]})]})}AE.createRoot(document.getElementById("root")).render(wt.jsx(m3,{}));
